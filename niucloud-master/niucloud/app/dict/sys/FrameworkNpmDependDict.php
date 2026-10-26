<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\dict\sys;

/**
 * 框架前端 npm 依赖基准（admin / wap / web 三端）
 *
 * 为什么需要它：
 * 站点的 admin/package.json 等文件是「站点自己的」——升级包/补丁包如果只覆盖前端源码而不带
 * package.json，站点就会出现「源码 import 了某包、package.json 里却没有声明」的混合态，
 * 表现为云编译时 npm install 成功但 npm run build 报
 * `Rollup failed to resolve import "xxx"`（线上真实案例：v-code-diff）。
 *
 * 现有依赖合并只处理插件（CoreDependService::installDepend 读插件的 admin-package.json、
 * UpgradeService::installDepend 遍历的是已安装插件），框架自身新增的依赖没有任何路径补进老站点，
 * 因此这里维护一份框架自身的依赖基准，供两条链路共用：
 *   1. 升级 / 框架补丁应用后，把「站点缺失的框架依赖」补进站点 package.json（CoreDependService::mergeFrameworkDepend）；
 *   2. 云编译前校验与打包前的硬校验，比对源码裸依赖与站点 package.json（NpmDependScanner）。
 *
 * ★ 维护约定：框架的 admin/uni-app/web 三个 package.json 有变更（新增依赖、关键版本变动）时，
 *   必须同步本字典——否则上面两条链路都会漏掉本次新增的依赖。
 *   本字典只用于「补齐站点缺失的键」，不会覆盖站点已有版本（站点允许自定义或手工降级）。
 *
 * 版本号与框架 package.json 逐字保持一致，便于人工比对。
 */
class FrameworkNpmDependDict
{
    /** admin 端 */
    const PORT_ADMIN = 'admin';

    /** 手机端（uni-app）——与 CoreDependService 的 npm 类型命名保持一致 */
    const PORT_WAP = 'wap';

    /** web 端 */
    const PORT_WEB = 'web';

    /**
     * 端口配置：npm 类型 => [名称、package.json 相对路径、源码目录（可多个）、跳过的子目录、需忽略的标识符]
     *
     * 路径均相对站点根目录（admin / uni-app / web 与 niucloud 同级）。
     * 三个端都声明了源码目录，云编译前校验与打包前硬校验据此扫描裸依赖。
     *
     * ★ 只扫「运行时源码」，不扫构建配置文件：
     *   例如 web 的 nuxt.config.ts / windi.config.ts 会 import vite、windicss 这类
     *   由 nuxt 传递依赖提供的包，扫进来会误报（误报会挡住正常编译），故按目录白名单扫描；
     *   admin / uni-app 的 addon 目录也排除——插件依赖由 admin-package.json 合并进
     *   站点 package.json（升级 / 安装时），不属于框架依赖基准的职责。
     * @return array
     */
    public static function getPortConfig(): array
    {
        return [
            self::PORT_ADMIN => [
                'name' => 'admin 端',
                'package' => 'admin' . DIRECTORY_SEPARATOR . 'package.json',
                'src' => [ 'admin' . DIRECTORY_SEPARATOR . 'src' ],
                'exclude_dirs' => [ 'addon', 'node_modules', 'dist', '.build', '.core', '.addons', '.shared', '.vite' ],
                // vite alias 名（admin/vite.config*.ts 的 resolve.alias），看着像包名但不是 npm 包
                'ignore' => [ 'assets' ]
            ],
            self::PORT_WAP => [
                'name' => 'uni-app 端',
                'package' => 'uni-app' . DIRECTORY_SEPARATOR . 'package.json',
                'src' => [ 'uni-app' . DIRECTORY_SEPARATOR . 'src' ],
                'exclude_dirs' => [ 'addon', 'node_modules', 'dist', 'unpackage', '.build', '.hbuilderx', '.vite' ],
                'ignore' => []
            ],
            self::PORT_WEB => [
                'name' => 'web 端',
                'package' => 'web' . DIRECTORY_SEPARATOR . 'package.json',
                'src' => [
                    'web' . DIRECTORY_SEPARATOR . 'app',
                    'web' . DIRECTORY_SEPARATOR . 'components',
                    'web' . DIRECTORY_SEPARATOR . 'composables',
                    'web' . DIRECTORY_SEPARATOR . 'lang',
                    'web' . DIRECTORY_SEPARATOR . 'layouts',
                    'web' . DIRECTORY_SEPARATOR . 'middleware',
                    'web' . DIRECTORY_SEPARATOR . 'plugins',
                    'web' . DIRECTORY_SEPARATOR . 'stores',
                    'web' . DIRECTORY_SEPARATOR . 'types',
                    'web' . DIRECTORY_SEPARATOR . 'utils',
                    'web' . DIRECTORY_SEPARATOR . 'app.vue'
                ],
                'exclude_dirs' => [ 'addon', 'node_modules', 'dist', '.output', '.nuxt', '.git', '.vite' ],
                // Nuxt 运行时与 @element-plus/nuxt 模块传递提供的包：官方 web/package.json 本就不声明，
                // 提示补进 package.json 反而是错的（会与 nuxt 自身版本冲突）
                'ignore' => [ 'vue', 'vue-router', '@element-plus/icons-vue' ]
            ]
        ];
    }

    /**
     * 某端口需要跳过的源码子目录（含框架目录清单，供扫描器合并使用）
     * @param string $port
     * @return array
     */
    public static function getExcludeDirs(string $port): array
    {
        return self::getPortConfig()[ $port ][ 'exclude_dirs' ] ?? [];
    }

    /**
     * 端口显示名（校验文案用）
     * @param string $port
     * @return string
     */
    public static function getPortName(string $port): string
    {
        return self::getPortConfig()[ $port ][ 'name' ] ?? $port;
    }

    /**
     * 框架依赖基准
     *
     * @param string $port 端口（admin / wap / web）
     * @return array ['dependencies' => [包名 => 版本], 'devDependencies' => [包名 => 版本]]
     */
    public static function getDepend(string $port): array
    {
        return self::getDependList()[ $port ] ?? [ 'dependencies' => [], 'devDependencies' => [] ];
    }

    /**
     * 全部端口的依赖基准
     * @return array
     */
    public static function getDependList(): array
    {
        return [
            // ==================== admin 端 ====================
            // 对应 admin/package.json
            self::PORT_ADMIN => [
                'dependencies' => [
                    '@element-plus/icons-vue' => '2.0.10',
                    '@fullcalendar/core' => '^6.1.19',
                    '@fullcalendar/daygrid' => '^6.1.19',
                    '@fullcalendar/interaction' => '^6.1.19',
                    '@fullcalendar/vue3' => '^6.1.19',
                    '@heroicons/vue' => '^2.2.0',
                    '@highlightjs/vue-plugin' => '2.1.0',
                    '@types/lodash-es' => '4.17.6',
                    '@vueuse/core' => '9.12.0',
                    'axios' => '1.4.0',
                    'crypto-js' => '4.1.1',
                    'css-color-function' => '1.3.3',
                    'date-fns' => '^4.1.0',
                    'day' => '^0.0.2',
                    'echarts' => '5.4.1',
                    'element-plus' => '^2.7.4',
                    'esbuild' => '^0.16.17',
                    'highlight.js' => '11.0.1',
                    'lodash-es' => '4.17.21',
                    'nprogress' => '0.2.0',
                    'pinia' => '2.0.30',
                    'qrcode' => '1.5.1',
                    'sass' => '1.58.0',
                    'sortablejs' => '1.15.0',
                    'v-code-diff' => '^1.16.0',
                    'vditor' => '^3.10.9',
                    'vue' => '3.2.45',
                    'vue-i18n' => '9.2.2',
                    'vue-jsonp' => '2.0.0',
                    'vue-router' => '4.1.6',
                    'vue-ueditor-wrap' => '^3.0.8',
                    'vue-web-terminal' => '3.2.2',
                    'vue3-video-play' => '1.3.1-beta.6'
                ],
                'devDependencies' => [
                    '@tailwindcss/line-clamp' => '4.0.2',
                    '@types/qrcode' => '1.5.0',
                    '@types/sortablejs' => '1.15.0',
                    '@typescript-eslint/eslint-plugin' => '5.53.0',
                    '@vitejs/plugin-vue' => '4.0.0',
                    'autoprefixer' => '10.4.13',
                    'cross-env' => '^7.0.3',
                    'eslint' => '8.34.0',
                    'eslint-config-standard-with-typescript' => '34.0.0',
                    'eslint-plugin-import' => '2.27.5',
                    'eslint-plugin-n' => '15.6.1',
                    'eslint-plugin-promise' => '6.1.1',
                    'eslint-plugin-vue' => '9.9.0',
                    'postcss' => '8.4.21',
                    'tailwindcss' => '3.2.4',
                    'typescript' => '4.9.5',
                    'unplugin-auto-import' => '0.13.0',
                    'unplugin-vue-components' => '0.23.0',
                    'vite' => '4.1.0',
                    'vue-tsc' => '1.0.24'
                ]
            ],

            // ==================== uni-app 端 ====================
            // 对应 uni-app/package.json
            self::PORT_WAP => [
                'dependencies' => [
                    '@dcloudio/uni-app' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-app-plus' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-components' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-h5' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-alipay' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-baidu' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-jd' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-kuaishou' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-lark' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-qq' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-toutiao' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-mp-weixin' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-quickapp-webview' => '3.0.0-3080720230703001',
                    '@uni-helper/vite-plugin-uni-layouts' => '^0.1.11',
                    'html2canvas' => '^1.4.1',
                    'image-tools' => '^1.4.0',
                    'lodash-es' => '^4.17.21',
                    'pinia' => '2.0.36',
                    'qrcode' => '^1.5.1',
                    'qs' => '6.7.0',
                    'sortablejs' => '^1.15.0',
                    'uview-plus' => '^3.1.29',
                    'vue' => '^3.3.0',
                    'vue-i18n' => '^9.2.2',
                    'weixin-js-sdk' => '^1.6.5'
                ],
                'devDependencies' => [
                    '@dcasia/mini-program-tailwind-webpack-plugin' => '^1.5.6',
                    '@dcloudio/types' => '^3.3.2',
                    '@dcloudio/uni-automator' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-cli-shared' => '3.0.0-3080720230703001',
                    '@dcloudio/uni-stacktracey' => '3.0.0-3080720230703001',
                    '@dcloudio/vite-plugin-uni' => '3.0.0-3080720230703001',
                    '@rollup/plugin-commonjs' => '^24.0.1',
                    '@types/qrcode' => '^1.5.0',
                    '@types/sortablejs' => '^1.15.0',
                    '@vue/tsconfig' => '^0.1.3',
                    'sass' => '^1.54.5',
                    'sass-loader' => '10.4.1',
                    'typescript' => '^4.9.4',
                    'vite' => '4.0.4',
                    'vite-plugin-windicss' => '^1.8.10',
                    'vue-tsc' => '^1.0.24',
                    'windicss' => '^3.5.6',
                    'cross-env' => '^7.0.3'
                ]
            ],

            // ==================== web 端 ====================
            // 对应 web/package.json
            self::PORT_WEB => [
                'dependencies' => [
                    '@vueuse/core' => '^9.13.0',
                    'element-plus' => '^2.3.2',
                    'pinia' => '^2.0.33',
                    'qrcode' => '^1.5.1',
                    'sass' => '^1.60.0'
                ],
                'devDependencies' => [
                    '@element-plus/nuxt' => '^1.0.4',
                    '@types/qrcode' => '^1.5.0',
                    'nuxt' => '^3.4.1',
                    'nuxt-windicss' => '^2.6.0',
                    'sass' => '^1.60.0',
                    'vue-i18n' => '^9.2.2',
                    'vite-plugin-top-level-await' => '^1.3.1',
                    'qs' => '6.7.0'
                ]
            ]
        ];
    }
}
