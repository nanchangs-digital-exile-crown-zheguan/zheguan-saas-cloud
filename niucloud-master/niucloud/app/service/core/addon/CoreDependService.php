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

namespace app\service\core\addon;

use app\dict\sys\FrameworkNpmDependDict;
use core\exception\CommonException;

/**
 * 依赖安装管理
 */
class CoreDependService extends CoreAddonBaseService
{
    protected $server_composer_file;//服务端composer.json
    protected $admin_npm_file;//admin端npm的package.json
    protected $web_npm_file;//web端npm的package.json
    protected $wap_npm_file;//wap端npm的package.json

    public function __construct()
    {
        parent::__construct();
        $this->server_composer_file = $this->root_path . 'niucloud' . DIRECTORY_SEPARATOR . 'composer.json';
        $this->admin_npm_file = $this->root_path . 'admin' . DIRECTORY_SEPARATOR . 'package.json';
        $this->web_npm_file = $this->root_path . 'web' . DIRECTORY_SEPARATOR . 'package.json';
        $this->wap_npm_file = $this->root_path . 'uni-app' . DIRECTORY_SEPARATOR . 'package.json';
    }

    /**
     * 获取插件更新后的composer以及package
     * @param $addon
     * @return bool
     */
    public function installDepend($addon)
    {
        //composer文件扩展
        $composer_content = $this->getComposerContent();
        $addon_composer_content = $this->getAddonComposerContent($addon);
        if (isset($addon_composer_content['require'])) {
            $composer_content['require'] = array_merge($composer_content['require'], $addon_composer_content['require']);
        }

        if (isset($addon_composer_content['require_dev'])) {
            $composer_content['require_dev'] = array_merge($composer_content['require_dev'], $addon_composer_content['require_dev']);
        }
        $this->setComposerContent($composer_content);
        //admin-package文件扩展
        $admin_package_array = $this->getNpmContent('admin');
        $addon_admin_package_array = $this->getAddonNpmContent($addon, 'admin');
        if (isset($addon_admin_package_array['dependencies'])) {
            $admin_package_array['dependencies'] = array_merge($admin_package_array['dependencies'], $addon_admin_package_array['dependencies']);
        }

        if (isset($addon_admin_package_array['devDependencies'])) {
            $admin_package_array['devDependencies'] = array_merge($admin_package_array['devDependencies'], $addon_admin_package_array['devDependencies']);
        }
        $this->setNpmContent($admin_package_array, 'admin');

        //web-package文件扩展
        $web_package_array = $this->getNpmContent('web');
        $addon_web_package_array = $this->getAddonNpmContent($addon, 'web');
        if (isset($addon_web_package_array['dependencies'])) {
            $web_package_array['dependencies'] = array_merge($web_package_array['dependencies'], $addon_web_package_array['dependencies']);
        }

        if (isset($addon_web_package_array['devDependencies'])) {
            $web_package_array['devDependencies'] = array_merge($web_package_array['devDependencies'], $addon_web_package_array['devDependencies']);
        }
        $this->setNpmContent($web_package_array, 'web');

        //uni-app-package文件扩展
        $wap_package_array = $this->getNpmContent('uni-app');
        $addon_wap_package_array = $this->getAddonNpmContent($addon, 'wap');
        if (isset($addon_wap_package_array['dependencies'])) {
            $wap_package_array['dependencies'] = array_merge($wap_package_array['dependencies'], $addon_wap_package_array['dependencies']);
        }

        if (isset($addon_wap_package_array['devDependencies'])) {
            $wap_package_array['devDependencies'] = array_merge($wap_package_array['devDependencies'], $addon_wap_package_array['devDependencies']);
        }
        $this->setNpmContent($wap_package_array, 'wap');
        return true;
    }

    /**
     * 合并「框架自身」的 npm 依赖基准（只补缺失，不覆盖站点已有版本）
     *
     * 站点的 admin/package.json 等文件是站点自己的：升级包 / 框架补丁如果只覆盖前端源码而没带
     * package.json，站点就会出现「源码引用了框架新增依赖、package.json 却没声明」的混合态，
     * 云编译时表现为 npm install 成功、npm run build 报
     * `Rollup failed to resolve import "xxx"`（线上真实案例：v-code-diff）。
     * 上面的 installDepend() 只合并插件依赖，框架自身新增依赖没有任何路径补进老站点，故补此方法。
     *
     * 合并语义：
     *   - 站点已有该键：一律不动（站点可能自定义版本或手工降级），仅版本与基准不一致时记录冲突；
     *   - 站点缺该键：按基准补入（含版本号，保证 npm install 能装上）。
     * 站点若没有该端口的 package.json，不凭空创建，直接跳过。
     *
     * @param string $port 端口：admin / wap / web
     * @return array ['port' => 端口, 'name' => 端口名, 'added' => [包名 => 版本], 'conflicts' => [包名 => ['site'=>.., 'framework'=>..]], 'file' => package.json 相对路径, 'error' => 写回失败时的原因]
     */
    public function mergeFrameworkDepend(string $port): array
    {
        $config = FrameworkNpmDependDict::getPortConfig()[ $port ] ?? null;
        $depend = FrameworkNpmDependDict::getDepend($port);
        $result = [
            'port' => $port,
            'name' => FrameworkNpmDependDict::getPortName($port),
            'added' => [],
            'conflicts' => [],
            'file' => $config[ 'package' ] ?? '',
            'error' => ''
        ];

        if (empty($config) || empty($depend)) return $result;

        $package_file = $this->root_path . $config[ 'package' ];
        // 站点没有该端口（或没有 package.json）：不凭空创建，交给源码目录校验去提示
        if (!is_file($package_file)) return $result;

        $package = $this->getNpmContent($port);
        if (!is_array($package) || empty($package)) return $result;

        foreach ([ 'dependencies', 'devDependencies' ] as $section) {
            foreach (($depend[ $section ] ?? []) as $name => $version) {
                if (isset($package[ $section ][ $name ])) {
                    // 已存在：不覆盖，仅记录与基准不一致的版本，供调用方提示用户自行确认
                    if ((string) $package[ $section ][ $name ] !== (string) $version) {
                        $result[ 'conflicts' ][ $name ] = [
                            'site' => (string) $package[ $section ][ $name ],
                            'framework' => (string) $version
                        ];
                    }
                    continue;
                }

                if (!isset($package[ $section ]) || !is_array($package[ $section ])) {
                    $package[ $section ] = [];
                }
                $package[ $section ][ $name ] = $version;
                $result[ 'added' ][ $name ] = $version;
            }
        }

        if (empty($result[ 'added' ])) return $result;

        try {
            $this->setNpmContent($package, $port);
        } catch (CommonException $e) {
            // 写不进 package.json 不该让整个升级 / 补丁流程失败，如实回传原因由调用方提示
            $result[ 'added' ] = [];
            $result[ 'error' ] = $e->getMessage();
        }

        return $result;
    }

    /**
     * 合并全部端口的框架依赖基准
     * @return array 以端口为 key 的合并结果
     */
    public function mergeAllFrameworkDepend(): array
    {
        $result = [];
        foreach (array_keys(FrameworkNpmDependDict::getPortConfig()) as $port) {
            $result[ $port ] = $this->mergeFrameworkDepend($port);
        }
        return $result;
    }

    /**
     * 获取composer的内容
     * @return mixed
     */
    public function getComposerContent()
    {
        return $this->jsonFileToArray($this->server_composer_file);
    }

    /**
     * 获取插件的composer内容
     * @param string $addon
     * @return array|mixed
     */
    public function getAddonComposerContent(string $addon)
    {
        $composer_path = $this->geAddonPackagePath($addon) . 'composer.json';
        return $this->jsonFileToArray($composer_path);
    }

    /**
     * 更新composer内容
     * @param array $content
     * @return bool
     */
    public function setComposerContent(array $content)
    {
        return $this->writeArrayToJsonFile($content, $this->server_composer_file);
    }

    /**
     * 获取npm文件内容
     * @param $type //端口类型：admin  wap web
     */
    public function getNpmContent(string $type)
    {
        if ($type == 'admin') {
            $file_path = $this->admin_npm_file;
        } elseif ($type == 'web') {
            $file_path = $this->web_npm_file;
        } else {
            $file_path = $this->wap_npm_file;
        }
        return $this->jsonFileToArray($file_path);
    }

    /**
     * 获取插件npm内容
     * @param string $addon
     * @param string $type 'admin  wep  uni-app'
     * @return array|mixed
     */
    public function getAddonNpmContent(string $addon, string $type)
    {
        if ($type == 'admin') {
            $file_path = $this->geAddonPackagePath($addon) . 'admin-package.json';
        } elseif ($type == 'web') {
            $file_path = $this->geAddonPackagePath($addon) . 'web-package.json';
        } else {
            $file_path = $this->geAddonPackagePath($addon) . 'uni-app-package.json';
        }
        return $this->jsonFileToArray($file_path);
    }

    /**
     * 更新npm内容
     * @param array $content
     * @param string $type
     * @return bool
     */
    public function setNpmContent(array $content, string $type)
    {
        if ($type == 'admin') {
            $file_path = $this->admin_npm_file;
        } elseif ($type == 'web') {
            $file_path = $this->web_npm_file;
        } else {
            $file_path = $this->wap_npm_file;
        }
        return $this->writeArrayToJsonFile($content, $file_path);
    }

}