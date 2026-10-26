<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\addon;

use core\exception\CommonException;

/**
 * 纯净框架逆推服务
 *
 * 以 niucloud/addon/{key}/ 插件源码树为「权威注入清单」，扫描并清除插件安装时
 * 分发到各端（admin / web / uni-app / public）的文件，并重建被插件改写的框架自有文件。
 *
 * 安装落点见 CoreAddonInstallService::installDir()，卸载落点见同文件 uninstallDir()。
 *
 * @package app\service\core\addon
 */
class CoreAddonPurifyService extends CoreAddonBaseService
{
    /** 项目根目录（含 admin/web/uni-app/niucloud） */
    protected $project_path;

    /** public 目录（niucloud/public） */
    protected $public_path;

    /**
     * 框架自有、禁止删除的白名单（相对项目根的路径片段，使用 / 分隔）
     */
    protected $keep_paths = [
        'uni-app/src/addon/components',
        'web/layouts/default',
        'web/layouts/default.vue',
        'web/layouts/container.vue',
    ];

    /**
     * uni-app/src/addon 下保留的框架自有目录名
     */
    protected $wap_keep_dirs = [ 'components' ];

    /**
     * web/layouts 下保留的框架自有目录名
     */
    protected $web_layout_keep_dirs = [ 'default' ];

    public function __construct()
    {
        parent::__construct();
        $this->project_path = $this->root_path;
        $this->public_path = public_path();
    }

    /**
     * 获取待清理的插件 key 列表（以 addon/{key}/info.json 为准）
     * @param array $filter 限定插件 key，空数组表示全部
     * @return array
     */
    public function getAddonKeys(array $filter = []): array
    {
        $keys = [];
        if (!is_dir($this->addon_path)) return $keys;

        foreach (get_files_by_dir($this->addon_path) as $dir) {
            if (!is_file($this->addon_path . $dir . DIRECTORY_SEPARATOR . 'info.json')) continue;
            if (!empty($filter) && !in_array($dir, $filter, true)) continue;
            $keys[] = $dir;
        }
        sort($keys);
        return $keys;
    }

    /**
     * 扫描：生成清理计划（只读，不修改任何文件）
     * @param array $filter 限定插件 key
     * @return array
     */
    public function scan(array $filter = []): array
    {
        $keys = $this->getAddonKeys($filter);

        $plan = [
            'addons' => $keys,
            'dirs' => [],
            'orphans' => [],
            'generated' => [],
            'depend' => [],
        ];

        foreach ($keys as $key) {
            foreach ($this->buildDirTargets($key) as $target) {
                $plan['dirs'][] = $target;
            }
        }

        $plan['orphans'] = $this->scanOrphans($keys);
        $plan['generated'] = $this->scanGenerated($keys);
        $plan['depend'] = $this->scanDepend($keys);

        return $plan;
    }

    /**
     * 汇总计划摘要
     * @param array $plan
     * @return array
     */
    public function summarize(array $plan): array
    {
        $exist_dirs = array_filter($plan['dirs'], fn($item) => $item['exist']);
        $exist_orphans = array_filter($plan['orphans'], fn($item) => $item['exist']);

        return [
            'addon_count' => count($plan['addons']),
            'dir_count' => count($plan['dirs']),
            'dir_exist_count' => count($exist_dirs),
            'orphan_count' => count($exist_orphans),
            'generated_count' => count($plan['generated']),
            'depend_file_count' => count($plan['depend']),
        ];
    }

    /**
     * 执行逆推清理
     * @param array $filter 限定插件 key
     * @param bool $include_orphans 是否一并删除孤儿目录（无对应插件源码的残留）
     * @param bool $backup 是否在删除前备份
     * @return array 清理报告
     */
    public function purify(array $filter = [], bool $include_orphans = false, bool $backup = true): array
    {
        // 计划必须在删除前生成：删除插件源码后就无法再推导落点
        $plan = $this->scan($filter);

        $report = [
            'backup_dir' => '',
            'deleted_dirs' => [],
            'deleted_file_count' => 0,
            'skipped_dirs' => [],
            'rebuilt_files' => [],
            'depend' => $plan['depend'],
            'orphan_report' => array_values(array_filter($plan['orphans'], fn($item) => $item['exist'])),
        ];

        if (empty($plan['addons']) && empty($report['orphan_report'])) {
            return $report;
        }

        // 备份：把待删除目录与被重建的框架文件复制到 runtime/backup/purify/{ts}/
        if ($backup) {
            $report['backup_dir'] = $this->backup($plan, $include_orphans);
        }

        // 1. 删除各端插件注入目录
        foreach ($plan['dirs'] as $target) {
            if (!$target['exist']) {
                $report['skipped_dirs'][] = $target['rel'] . '（不存在）';
                continue;
            }
            if ($this->isKeepPath($target['rel'])) {
                $report['skipped_dirs'][] = $target['rel'] . '（白名单）';
                continue;
            }
            $file_num = $this->countDirFiles($target['abs']);
            del_target_dir($target['abs'], true);
            $report['deleted_dirs'][] = [ 'rel' => $target['rel'], 'port' => $target['port'], 'files' => $file_num ];
            $report['deleted_file_count'] += $file_num;
        }

        // 2. 孤儿目录（默认仅提示，include_orphans 时才删）
        foreach ($plan['orphans'] as $item) {
            if (!$item['exist']) continue;
            if (!$include_orphans) continue;
            if ($this->isKeepPath($item['rel'])) continue;
            $file_num = $this->countDirFiles($item['abs']);
            del_target_dir($item['abs'], true);
            $report['deleted_dirs'][] = [ 'rel' => $item['rel'], 'port' => $item['port'], 'files' => $file_num ];
            $report['deleted_file_count'] += $file_num;
        }

        // 3. 重建被插件改写的框架自有文件
        foreach ($plan['generated'] as $gen) {
            switch ($gen['type']) {
                case 'admin_iconfont':
                    $this->rebuildAdminIconfont();
                    $report['rebuilt_files'][] = $gen['rel'];
                    break;
                case 'pages_json':
                    if ($gen['exist'] && $this->clearPagesMarker($gen['abs'])) {
                        $report['rebuilt_files'][] = $gen['rel'];
                    }
                    break;
                case 'locale':
                    $removed = $this->clearLocaleAddonKeys($gen['abs'], $plan['addons']);
                    if ($removed > 0) $report['rebuilt_files'][] = $gen['rel'] . "（移除 {$removed} 条词条）";
                    break;
                case 'addons_index':
                    if ($gen['exist'] && $this->rebuildAddonsIndex($gen['abs'])) {
                        $report['rebuilt_files'][] = $gen['rel'];
                    }
                    break;
            }
        }

        $report['deleted_dir_count'] = count($report['deleted_dirs']);
        $report['depend_file_count'] = count($plan['depend']);

        return $report;
    }

    /**
     * 构建某插件在各端的注入目录
     * @param string $key
     * @return array
     */
    protected function buildDirTargets(string $key): array
    {
        $targets = [];

        $map = [
            'admin' => [ 'admin/src/addon/' . $key, 'admin/src/styles/icon/addon/' . $key ],
            'web' => [ 'web/addon/' . $key ],
            'wap' => [ 'uni-app/src/addon/' . $key ],
            'resource' => [ 'niucloud/public/addon/' . $key ],
            'admin_dist' => [ 'niucloud/public/admin/assets/addons/' . $key ],
            'wap_dist' => [ 'niucloud/public/wap/assets/addons/' . $key ],
            'plugin' => [ 'niucloud/addon/' . $key ],
        ];

        foreach ($map as $port => $rels) {
            foreach ($rels as $rel) {
                $targets[] = $this->makeTarget($port, $rel, $key);
            }
        }

        // web 布局：addon/{key}/web/layouts/* 会被平铺复制到 web/layouts/
        $layout_names = [ $key ];
        $addon_layout_path = $this->addon_path . $key . DIRECTORY_SEPARATOR . 'web' . DIRECTORY_SEPARATOR . 'layouts';
        if (is_dir($addon_layout_path)) {
            $layout_names = array_values(array_unique(array_merge(get_files_by_dir($addon_layout_path), $layout_names)));
        }
        foreach ($layout_names as $name) {
            if ($name === '' || $name === '.' || $name === '..') continue;
            $targets[] = $this->makeTarget('web', 'web/layouts/' . $name, $key);
        }

        return $targets;
    }

    /**
     * 构造一个目录目标
     * @param string $port
     * @param string $rel
     * @param string $key
     * @return array
     */
    protected function makeTarget(string $port, string $rel, string $key): array
    {
        $abs = $this->relToAbs($rel);
        return [
            'port' => $port,
            'addon' => $key,
            'rel' => $rel,
            'abs' => $abs,
            'exist' => is_dir($abs),
        ];
    }

    /**
     * 相对项目根路径转绝对路径
     * @param string $rel
     * @return string
     */
    protected function relToAbs(string $rel): string
    {
        $rel = str_replace('/', DIRECTORY_SEPARATOR, $rel);
        foreach ([ 'niucloud' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR, 'public' . DIRECTORY_SEPARATOR ] as $prefix) {
            if (str_starts_with($rel, $prefix)) {
                // public 目录映射到实际 public_path
                $sub = substr($rel, strlen($prefix));
                return rtrim($this->public_path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $sub;
            }
        }
        return rtrim($this->project_path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $rel;
    }

    /**
     * 是否为白名单路径
     * @param string $rel
     * @return bool
     */
    protected function isKeepPath(string $rel): bool
    {
        $rel = str_replace('\\', '/', $rel);
        foreach ($this->keep_paths as $keep) {
            if ($rel === $keep || str_starts_with($rel, $keep . '/')) return true;
        }
        return false;
    }

    /**
     * 扫描孤儿目录：注入点中存在、但没有对应插件源码的残留目录
     * @param array $keys
     * @return array
     */
    protected function scanOrphans(array $keys): array
    {
        $roots = [
            [ 'admin', 'admin/src/addon', [] ],
            [ 'admin', 'admin/src/styles/icon/addon', [] ],
            [ 'web', 'web/addon', [] ],
            [ 'web', 'web/layouts', $this->web_layout_keep_dirs ],
            [ 'wap', 'uni-app/src/addon', $this->wap_keep_dirs ],
            [ 'plugin', 'niucloud/addon', [] ],
            [ 'resource', 'niucloud/public/addon', [] ],
            [ 'admin_dist', 'niucloud/public/admin/assets/addons', [] ],
            [ 'wap_dist', 'niucloud/public/wap/assets/addons', [] ],
        ];

        $orphans = [];
        foreach ($roots as [ $port, $rel, $keep ]) {
            $abs = $this->relToAbs($rel);
            if (!is_dir($abs)) continue;
            foreach (get_files_by_dir($abs) as $dir) {
                if (in_array($dir, $keys, true)) continue;
                if (in_array($dir, $keep, true)) continue;
                $sub_rel = $rel . '/' . $dir;
                if ($this->isKeepPath($sub_rel)) continue;
                $orphans[] = [
                    'port' => $port,
                    'rel' => $sub_rel,
                    'abs' => $abs . DIRECTORY_SEPARATOR . $dir,
                    'exist' => true,
                ];
            }
        }
        return $orphans;
    }

    /**
     * 扫描被插件改写的框架自有文件
     * @param array $keys
     * @return array
     */
    protected function scanGenerated(array $keys): array
    {
        $generated = [];

        // 1. admin 图标库文件（由 compileAdminIcon 生成）
        $iconfont_rel = 'admin/src/styles/icon/addon-iconfont.css';
        $generated[] = [
            'type' => 'admin_iconfont',
            'rel' => $iconfont_rel,
            'abs' => $this->relToAbs($iconfont_rel),
            'exist' => is_file($this->relToAbs($iconfont_rel)),
        ];

        // 2. uni-app pages.json 页块标记
        $pages_rel = 'uni-app/src/pages.json';
        $pages_abs = $this->relToAbs($pages_rel);
        $generated[] = [
            'type' => 'pages_json',
            'rel' => $pages_rel,
            'abs' => $pages_abs,
            'exist' => is_file($pages_abs),
        ];

        // 3. uni-app 语言包插件词条
        $locale_root = $this->relToAbs('uni-app/src/locale');
        if (is_dir($locale_root)) {
            $files = [];
            search_dir($locale_root, $files);
            foreach ($files as $file) {
                if (strtolower(pathinfo($file, PATHINFO_EXTENSION)) !== 'json') continue;
                $generated[] = [
                    'type' => 'locale',
                    'rel' => $this->absToRel($file),
                    'abs' => $file,
                    'exist' => true,
                ];
            }
        }

        // 4. public/{admin,wap}/assets/addons/index.json
        foreach ([ 'niucloud/public/admin/assets/addons/index.json', 'niucloud/public/wap/assets/addons/index.json' ] as $rel) {
            $abs = $this->relToAbs($rel);
            $generated[] = [
                'type' => 'addons_index',
                'rel' => $rel,
                'abs' => $abs,
                'exist' => is_file($abs),
            ];
        }

        return $generated;
    }

    /**
     * 扫描插件声明但已被合并进框架文件的依赖（只读，不做修改）
     * @param array $keys
     * @return array
     */
    protected function scanDepend(array $keys): array
    {
        $map = [
            [ 'niucloud/composer.json', 'composer.json', [ 'require', 'require_dev' ] ],
            [ 'admin/package.json', 'admin-package.json', [ 'dependencies', 'devDependencies' ] ],
            [ 'web/package.json', 'web-package.json', [ 'dependencies', 'devDependencies' ] ],
            [ 'uni-app/package.json', 'uni-app-package.json', [ 'dependencies', 'devDependencies' ] ],
        ];

        $result = [];
        foreach ($map as [ $framework_rel, $addon_file, $sections ]) {
            $packages = [];
            $by_addon = [];
            foreach ($keys as $key) {
                $src = $this->geAddonPackagePath($key) . $addon_file;
                if (!is_file($src)) continue;
                $json = $this->jsonFileToArray($src);
                if (!is_array($json)) continue;
                foreach ($sections as $section) {
                    foreach (($json[ $section ] ?? []) as $name => $version) {
                        $packages[ $name ] = $version;
                        $by_addon[ $key ][ $name ] = $version;
                    }
                }
            }
            $result[] = [
                'file' => $framework_rel,
                'source' => $addon_file,
                'packages' => $packages,
                'by_addon' => $by_addon,
                'package_count' => count($packages),
            ];
        }
        return $result;
    }

    /**
     * 备份待删除目录与被重建文件
     * @param array $plan
     * @param bool $include_orphans
     * @return string 备份目录
     */
    protected function backup(array $plan, bool $include_orphans): string
    {
        $backup_dir = rtrim(runtime_path(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'backup'
            . DIRECTORY_SEPARATOR . 'purify' . DIRECTORY_SEPARATOR . date('YmdHis') . DIRECTORY_SEPARATOR;

        $dirs = [];
        foreach ($plan['dirs'] as $target) {
            if ($target['exist'] && !$this->isKeepPath($target['rel'])) $dirs[] = $target;
        }
        if ($include_orphans) {
            foreach ($plan['orphans'] as $item) {
                if ($item['exist'] && !$this->isKeepPath($item['rel'])) $dirs[] = $item;
            }
        }
        foreach ($dirs as $dir) {
            dir_copy($dir['abs'], $backup_dir . str_replace('/', DIRECTORY_SEPARATOR, $dir['rel']));
        }

        // 备份将被重建的框架文件
        foreach ($plan['generated'] as $gen) {
            if (empty($gen['exist']) || empty($gen['abs']) || !is_file($gen['abs'])) continue;
            $rel = str_replace('/', DIRECTORY_SEPARATOR, $gen['rel']);
            $dst = $backup_dir . 'framework' . DIRECTORY_SEPARATOR . $rel;
            dir_mkdir(dirname($dst));
            @copy($gen['abs'], $dst);
        }

        return $backup_dir;
    }

    /**
     * 重建 admin 图标库文件（等价于 CoreAddonInstallService::compileAdminIcon）
     * @return void
     */
    protected function rebuildAdminIconfont(): void
    {
        $compile_path = rtrim($this->project_path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR
            . str_replace('/', DIRECTORY_SEPARATOR, 'admin/src/styles/icon/');
        if (!is_dir($compile_path)) return;

        $content = '';
        $root_path = rtrim($compile_path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'addon';
        $file_arr = is_dir($root_path) ? getFileMap($root_path) : [];
        if (!empty($file_arr)) {
            foreach ($file_arr as $ck => $cv) {
                if (str_contains($cv, '.css')) {
                    $path = str_replace($root_path . DIRECTORY_SEPARATOR, '', $ck);
                    $path = str_replace(DIRECTORY_SEPARATOR . '.css', '', $path);
                    $path = str_replace(DIRECTORY_SEPARATOR, '/', $path);
                    $content .= "@import \"addon/{$path}\";\n";
                }
            }
        }
        file_put_contents($compile_path . 'addon-iconfont.css', $content);
    }

    /**
     * 清除 pages.json 中插件页块
     * @param string $file
     * @return bool
     */
    protected function clearPagesMarker(string $file): bool
    {
        $content = @file_get_contents($file);
        if ($content === false) return false;

        $content = preg_replace_callback(
            '/(\/\/ \{\{ PAGE_BEGAIN \}\})(.*?)(\/\/ \{\{ PAGE_END \}\})/s',
            function ($match) {
                return $match[1] . PHP_EOL . $match[3];
            },
            $content
        );
        // 兜底清除残留的单插件标记行（如 // TOURISM_PAGE_BEGIN）
        $content = preg_replace("/^[ \t]*\/\/[ \t]*[A-Z0-9_]+_PAGE_(BEGIN|END)[ \t]*\r?\n/m", '', $content);
        // 合并因清除产生的连续空行
        $content = preg_replace("/(\r?\n){3,}/", PHP_EOL . PHP_EOL, $content);

        return file_put_contents($file, $content) !== false;
    }

    /**
     * 移除语言包中的插件词条（key 首段等于插件 key）
     * @param string $file
     * @param array $keys
     * @return int 移除的词条数
     */
    protected function clearLocaleAddonKeys(string $file, array $keys): int
    {
        if (empty($keys)) return 0;
        $content = @file_get_contents($file);
        if ($content === false) return 0;
        $json = json_decode($content, true);
        if (!is_array($json)) return 0;

        $removed = 0;
        foreach (array_keys($json) as $key) {
            $seg = explode('.', (string) $key)[0];
            if (in_array($seg, $keys, true)) {
                unset($json[ $key ]);
                $removed++;
            }
        }
        if ($removed > 0) {
            file_put_contents($file, json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        }
        return $removed;
    }

    /**
     * 重建 public/{admin,wap}/assets/addons/index.json
     * @param string $index_file
     * @return bool
     */
    protected function rebuildAddonsIndex(string $index_file): bool
    {
        $addons_dir = dirname($index_file);
        if (!is_dir($addons_dir)) return false;

        $keys = get_files_by_dir($addons_dir);
        $manifests = [];
        foreach ($keys as $key) {
            $manifest_file = $addons_dir . DIRECTORY_SEPARATOR . $key . DIRECTORY_SEPARATOR . 'manifest.json';
            if (is_file($manifest_file)) {
                $manifest_data = $this->jsonFileToArray($manifest_file);
                if (!empty($manifest_data)) $manifests[ $key ] = $manifest_data;
            }
        }

        $index_data = is_file($index_file) ? $this->jsonFileToArray($index_file) : [];
        if (!is_array($index_data)) $index_data = [];

        $index_data['keys'] = $keys;
        $index_data['manifests'] = $manifests;
        $index_data['generatedAt'] = time();

        $this->writeArrayToJsonFile($index_data, $index_file);

        // 同步刷新父级 index.html 时间戳
        $index_html = dirname($addons_dir, 2) . DIRECTORY_SEPARATOR . 'index.html';
        if (is_file($index_html)) @touch($index_html);

        return true;
    }

    /**
     * 统计目录下的文件数量
     * @param string $dir
     * @return int
     */
    protected function countDirFiles(string $dir): int
    {
        $files = [];
        search_dir($dir, $files);
        return count($files);
    }

    /**
     * 绝对路径转相对项目根路径
     * @param string $abs
     * @return string
     */
    protected function absToRel(string $abs): string
    {
        $abs = str_replace('\\', '/', $abs);
        $public = str_replace('\\', '/', rtrim($this->public_path, DIRECTORY_SEPARATOR));
        if (str_starts_with($abs, $public . '/')) {
            return 'niucloud/public/' . substr($abs, strlen($public) + 1);
        }
        $project = str_replace('\\', '/', rtrim($this->project_path, DIRECTORY_SEPARATOR));
        if (str_starts_with($abs, $project . '/')) {
            return substr($abs, strlen($project) + 1);
        }
        return $abs;
    }
}
