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

namespace app\service\core\check;

use app\dict\sys\FrameworkNpmDependDict;

/**
 * 前端源码裸依赖扫描器
 *
 * 用途：找出「源码 import 了、但对应 package.json 没有声明」的 npm 包。
 * 这类问题是云编译最难排查的故障之一——云端 npm install 是成功的（退出码 0），
 * 失败发生在 npm run build，用户看到的是 Vite/Rollup 的英文报错：
 *   Rollup failed to resolve import "v-code-diff" from ".../index.vue"
 * 于是很容易被误导去改源码（例如换成 ./vendor/xxx.es.js 这种本地文件兜底），
 * 而正确的修法只有一条：把依赖补进对应端的 package.json。
 *
 * 两个使用场景（同一份实现，避免两处口径不一致）：
 *   1. 云编译前校验（CoreCheckService::checkFrontDepend）：编译前就把问题拦住；
 *   2. 云编译打包前硬校验（CoreCloudBuildService）：绕过界面直接调接口也拦得住。
 *
 * 实现取舍：只做「语句级正则 + 与 package.json 比对」，不引 AST 解析。
 * 源码仅需顺序读取一遍，复杂度 O(文件数 × 行数)，AST 的收益不成比例。
 * 为避免误报（误报会挡住正常编译）做了这些过滤：
 *   - 跳过以 // * /* <!-- 开头的行（本项目注释量很大，注释里出现 import 是常态）；
 *   - 跳过 import type / export type（构建期会被抹掉，不影响依赖解析）；
 *   - 跳过相对/绝对路径、@/ ~ # ! 等别名、URL、node 内置模块；
 *   - 跳过框架自己的运行时模块（admin-lang / core-shared / wap-locale / diy-core 等）
 *     以及各端 vite alias 名（如 admin 的 assets），它们不是 npm 包；
 *   - 跳过 .d.ts（类型声明不参与打包依赖解析）、node_modules / dist / addon 等目录；
 *   - 只扫各端配置里列出的源码目录（见 FrameworkNpmDependDict::getPortConfig），
 *     构建配置文件（nuxt.config.ts 之类）会引用传递依赖，扫进来会误报。
 */
class NpmDependScanner
{
    /** 参与扫描的源码扩展名 */
    protected const SCAN_EXT = [ 'ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs', 'vue' ];

    /** node 内置模块：不是 npm 包，不需要声明 */
    protected const NODE_BUILTINS = [
        'assert', 'async_hooks', 'buffer', 'child_process', 'cluster', 'console', 'constants',
        'crypto', 'dgram', 'diagnostics_channel', 'dns', 'domain', 'events', 'fs', 'http',
        'http2', 'https', 'inspector', 'module', 'net', 'os', 'path', 'perf_hooks', 'process',
        'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'test',
        'timers', 'tls', 'trace_events', 'tty', 'url', 'util', 'v8', 'vm', 'wasi',
        'worker_threads', 'zlib'
    ];

    /**
     * 框架自己的运行时模块名（由 build-shared 产出、走 import map 加载），
     * 看着像包名但不是 npm 包，不需要声明
     */
    protected const RUNTIME_MODULES = [
        'admin-lang', 'core-shared', 'icons-vue', 'wap-locale', 'diy-core'
    ];

    /** 单文件最大读取字节数：超限跳过（正常源码不会这么大，避免异常文件拖慢校验） */
    protected const MAX_FILE_SIZE = 1048576;

    /** 单个包最多记录几个命中文件（用于提示定位，避免 details 过长） */
    protected const MAX_FILES_PER_PACKAGE = 3;

    /**
     * 检查某端源码的依赖完整性
     *
     * @param string $port 端口：admin / wap / web
     * @param string $root_path 站点根目录（以分隔符结尾）
     * @param array $only_dirs 只扫描这些源码子目录（相对站点的路径，如 admin/src；空表示按端口配置全扫）
     * @return array [
     *   'port' => 端口, 'name' => 端口名, 'scanned' => 扫描文件数, 'passed' => bool,
     *   'missing' => [包名 => [命中文件, ...]], 'message' => 结论, 'error' => 环境问题（源码目录/package.json）
     * ]
     */
    public function check(string $port, string $root_path, array $only_dirs = []): array
    {
        $config = FrameworkNpmDependDict::getPortConfig()[ $port ] ?? null;
        $result = [
            'port' => $port,
            'name' => FrameworkNpmDependDict::getPortName($port),
            'scanned' => 0,
            'passed' => true,
            'missing' => [],
            'message' => '',
            'error' => ''
        ];

        if (empty($config)) {
            $result[ 'error' ] = '未知的前端端口：' . $port;
            return $result;
        }

        $src_list = $only_dirs ?: (array) $config[ 'src' ];
        $package_file = $root_path . $config[ 'package' ];

        // 显式传入的目录若本身就是被排除的目录（如 admin/src/addon），一律不算：
        // 插件依赖由 admin-package.json 在升级 / 安装时合并进站点 package.json，
        // 不属于框架依赖基准的职责，扫进来会把正常站点判成缺依赖
        $exclude_names = $config[ 'exclude_dirs' ] ?? [];
        $src_list = array_values(array_filter($src_list, function ($src) use ($exclude_names) {
            return !in_array(basename(str_replace('\\', '/', $src)), $exclude_names, true);
        }));

        // 该端没有源码目录：本次编译不涉及，跳过（不算失败）
        $exists = false;
        foreach ($src_list as $src) {
            if (file_exists($root_path . $src)) {
                $exists = true;
                break;
            }
        }
        if (!$exists) {
            $result[ 'message' ] = $result[ 'name' ] . '无源码目录，跳过检查';
            return $result;
        }

        // 有源码却没有 package.json：npm install 必然失败，这是硬错误
        if (!is_file($package_file)) {
            $result[ 'passed' ] = false;
            $result[ 'error' ] = '缺少 ' . $this->displayPath($config[ 'package' ]);
            return $result;
        }

        $package = json_decode((string) @file_get_contents($package_file), true);
        if (!is_array($package)) {
            $result[ 'passed' ] = false;
            $result[ 'error' ] = $this->displayPath($config[ 'package' ]) . ' 内容不是合法 JSON';
            return $result;
        }

        $declared = $this->declaredPackages($package);
        $ignore = array_merge(self::RUNTIME_MODULES, $config[ 'ignore' ] ?? [], [ '@' ]);

        $used = [];
        foreach ($src_list as $src) {
            $path = $root_path . $src;

            if (is_file($path)) {
                $this->scanFile($path, $root_path, $ignore, $used, $result[ 'scanned' ]);
            } elseif (is_dir($path)) {
                $this->scanDir($path, $root_path, $exclude_names, $ignore, $used, $result[ 'scanned' ]);
            }
        }

        foreach ($used as $name => $files) {
            if (isset($declared[ $name ])) continue;
            $result[ 'missing' ][ $name ] = $files;
        }

        if (empty($result[ 'missing' ])) {
            $result[ 'message' ] = sprintf('%s依赖声明完整（检查 %d 个源码文件）', $result[ 'name' ], $result[ 'scanned' ]);
        } else {
            $result[ 'passed' ] = false;
            $result[ 'message' ] = sprintf('%s有 %d 个依赖未在 package.json 中声明', $result[ 'name' ], count($result[ 'missing' ]));
        }

        return $result;
    }

    /**
     * package.json 里已声明的包名集合
     * @param array $package
     * @return array
     */
    protected function declaredPackages(array $package): array
    {
        $declared = [];
        foreach ([ 'dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies' ] as $section) {
            foreach (($package[ $section ] ?? []) as $name => $version) {
                $declared[ (string) $name ] = true;
            }
        }
        return $declared;
    }

    /**
     * 递归扫描目录，结果并入 $used（包名 => 命中文件，站点相对路径）
     *
     * @param string $dir 当前目录
     * @param string $root_path 站点根目录（用于生成站点相对路径）
     * @param array $exclude_dirs 跳过的子目录名
     * @param array $ignore 跳过的包名（框架运行时模块 / vite alias 名）
     * @param array $used 引用传入的扫描结果
     * @param int $scanned 引用传出：已扫描文件数
     * @return void
     */
    protected function scanDir(string $dir, string $root_path, array $exclude_dirs, array $ignore, array &$used, int &$scanned): void
    {
        $items = @scandir($dir);
        if (empty($items)) return;

        foreach ($items as $item) {
            if ($item === '.' || $item === '..') continue;

            $path = $dir . DIRECTORY_SEPARATOR . $item;

            if (is_dir($path)) {
                if (in_array($item, $exclude_dirs, true)) continue;
                $this->scanDir($path, $root_path, $exclude_dirs, $ignore, $used, $scanned);
                continue;
            }

            $this->scanFile($path, $root_path, $ignore, $used, $scanned);
        }
    }

    /**
     * 扫描单个文件，把命中的包名并入 $used
     *
     * @param string $path 文件绝对路径
     * @param string $root_path 站点根目录
     * @param array $ignore 跳过的包名
     * @param array $used 引用传入的扫描结果
     * @param int $scanned 引用传出：已扫描文件数
     * @return void
     */
    protected function scanFile(string $path, string $root_path, array $ignore, array &$used, int &$scanned): void
    {
        if (!is_file($path)) return;

        $name = basename($path);
        if (str_ends_with($name, '.d.ts')) return; // 类型声明不参与打包依赖解析

        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        if (!in_array($ext, self::SCAN_EXT, true)) return;

        $size = @filesize($path);
        if ($size === false || $size > self::MAX_FILE_SIZE) return;

        $content = @file_get_contents($path);
        if ($content === false || $content === '') return;

        $scanned++;
        $relative = $this->displayPath(substr($path, strlen($root_path)));

        foreach ($this->extractSpecifiers($content) as $package) {
            if (in_array($package, $ignore, true)) continue;
            if (isset($used[ $package ]) && count($used[ $package ]) >= self::MAX_FILES_PER_PACKAGE) continue;
            $used[ $package ][] = $relative;
        }
    }

    /**
     * 统一展示用的路径（正斜杠、去掉多余前导分隔符）
     * @param string $path
     * @return string
     */
    protected function displayPath(string $path): string
    {
        return ltrim(str_replace('\\', '/', $path), '/');
    }

    /**
     * 从源码内容中提取「裸包名」
     *
     * @param string $content
     * @return array 去重后的包名列表
     */
    protected function extractSpecifiers(string $content): array
    {
        $packages = [];
        $lines = preg_split('/\r\n|\r|\n/', $content) ?: [];

        foreach ($lines as $line) {
            $trim = ltrim($line);

            // 注释行整体跳过（本项目注释里出现 import 的情况很多）
            if ($trim === '' || str_starts_with($trim, '//') || str_starts_with($trim, '*')
                || str_starts_with($trim, '/*') || str_starts_with($trim, '<!--')) {
                continue;
            }
            // 纯类型导入：构建期会被抹掉，不影响依赖解析（避免 @types 之类误报）
            if (preg_match('/^(import|export)\s+type\b/', $trim)) continue;

            $specs = [];

            // import ... from 'x' / export ... from 'x'
            if (preg_match_all('/\b(?:import|export)\b[^;\'"]*?\bfrom\s*[\'"]([^\'"]+)[\'"]/', $line, $matches)) {
                $specs = array_merge($specs, $matches[ 1 ]);
            }
            // 动态 import('x') / require('x')
            if (preg_match_all('/\b(?:import|require)\s*\(\s*[\'"]([^\'"]+)[\'"]/', $line, $matches)) {
                $specs = array_merge($specs, $matches[ 1 ]);
            }
            // 副作用导入 import 'x'
            if (preg_match_all('/\bimport\s+[\'"]([^\'"]+)[\'"]/', $line, $matches)) {
                $specs = array_merge($specs, $matches[ 1 ]);
            }

            foreach ($specs as $spec) {
                $package = $this->resolvePackageName($spec);
                if ($package === '') continue;
                $packages[ $package ] = true;
            }
        }

        return array_keys($packages);
    }

    /**
     * 裸标识符 → 包名；非 npm 包返回空串
     *
     * @param string $spec 形如 vue / @scope/pkg/xxx / ./local / @/alias / node:fs
     * @return string
     */
    protected function resolvePackageName(string $spec): string
    {
        $spec = trim($spec);
        if ($spec === '') return '';

        // 去掉查询串与哈希（如 xxx.svg?raw、xxx.vue?type=script）
        $spec = preg_split('/[?#]/', $spec)[ 0 ] ?? '';

        // 相对路径、绝对路径、URL、别名、node: 内置
        if (str_starts_with($spec, '.') || str_starts_with($spec, '/') || str_starts_with($spec, '\\')
            || str_starts_with($spec, '@/') || str_starts_with($spec, '~') || str_starts_with($spec, '#')
            || str_starts_with($spec, '!') || str_starts_with($spec, 'virtual:')
            || str_starts_with($spec, 'node:') || str_contains($spec, '://')) {
            return '';
        }

        $segments = explode('/', $spec);
        if ($segments[ 0 ] === '') return '';

        // @scope/pkg/sub → @scope/pkg
        $package = str_starts_with($spec, '@')
            ? (isset($segments[ 1 ]) && $segments[ 1 ] !== '' ? $segments[ 0 ] . '/' . $segments[ 1 ] : '')
            : $segments[ 0 ];

        if ($package === '' || in_array($package, self::NODE_BUILTINS, true)) return '';

        return $package;
    }
}
