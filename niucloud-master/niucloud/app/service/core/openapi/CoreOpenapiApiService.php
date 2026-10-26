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

namespace app\service\core\openapi;

use app\service\core\site\CoreSiteService;
use core\base\BaseCoreService;
use core\dict\DictLoader;

/**
 * 开放平台接口清单服务
 * Class CoreOpenapiApiService
 * @package app\service\core\openapi
 */
class CoreOpenapiApiService extends BaseCoreService
{
    /**
     * 清单缓存（清单来自代码文件，运行期不变，同一进程内复用可避免重复读取）
     * @var array|null
     */
    private static $all_list = null;

    /**
     * 扁平化清单缓存
     * @var array|null
     */
    private static $flat_list = null;

    /**
     * 获取全部开放接口清单（按分组归类）
     * @return array
     */
    public function getAll(): array
    {
        if (is_null(self::$all_list)) {
            self::$all_list = (new DictLoader("OpenApi"))->load([]);
        }
        return self::$all_list;
    }

    /**
     * 获取扁平化的接口清单（每条含 api_key / app_type / domain 等完整信息）
     * @return array
     */
    public function getFlatList(): array
    {
        if (is_null(self::$flat_list)) {
            self::$flat_list = $this->buildFlatList();
        }
        return self::$flat_list;
    }

    /**
     * 构建扁平化清单
     * @return array
     */
    private function buildFlatList(): array
    {
        $list = [];
        foreach ($this->getAll() as $group_key => $group) {
            $group_app_type = $group[ 'app_type' ] ?? '';
            $group_domain = $group[ 'domain' ] ?? '';
            foreach ($group[ 'items' ] ?? [] as $api_key => $item) {
                $list[ $api_key ] = [
                    'api_key' => $api_key,
                    'group_key' => $group_key,
                    'group_name' => $group[ 'group_name' ] ?? $group_key,
                    'name' => $item[ 'name' ] ?? $api_key,
                    'desc' => $item[ 'desc' ] ?? '',
                    'app_type' => $item[ 'app_type' ] ?? $group_app_type,
                    'domain' => $item[ 'domain' ] ?? $group_domain,
                    'method' => strtolower($item[ 'method' ] ?? 'get'),
                    'path' => trim($item[ 'path' ] ?? '', '/'),
                    'handler' => $item[ 'handler' ] ?? '',
                    'need_auth' => ($item[ 'need_auth' ] ?? true) !== false,
                    'addon' => $item[ 'addon' ] ?? ($group[ 'addon' ] ?? ''),
                    'params' => $item[ 'params' ] ?? [],
                ];
            }
        }
        return $list;
    }

    /**
     * 按接口标识获取清单条目
     * @param string $api_key
     * @return array
     */
    public function getByKey(string $api_key): array
    {
        if ($api_key === '') return [];
        return $this->getFlatList()[ $api_key ] ?? [];
    }

    /**
     * 按请求方式与路由规则定位接口清单条目
     * @param string $method
     * @param string $rule 路由规则，如 v1/shop/goods
     * @return array
     */
    public function getByRoute(string $method, string $rule): array
    {
        $method = strtolower($method);
        $rule = $this->normalizePath($rule);

        foreach ($this->getFlatList() as $item) {
            if ($item[ 'method' ] === $method && $this->normalizePath($item[ 'path' ]) === $rule) {
                return $item;
            }
        }
        return [];
    }

    /**
     * 归一化路由路径（统一动态参数占位符：:id 与 <id> 等价）
     * @param string $path
     * @return string
     */
    private function normalizePath(string $path): string
    {
        $path = preg_replace('/<([a-zA-Z_][a-zA-Z0-9_]*)>/', ':$1', $path);
        return trim((string) $path, '/');
    }

    /**
     * 获取可授权模块树（按模块分组，组内列出该模块包含的接口）
     * 支持按端类型过滤（平台端只看 admin 端接口，店铺端只看对应端接口），并按站点实际启用的插件过滤
     * @param int|null $site_id 传 null 表示不做插件过滤（平台端）
     * @param string $app_type 端类型，为空表示不按端过滤
     * @return array
     */
    public function getTreeBySiteId(?int $site_id = null, string $app_type = ''): array
    {
        $addons = null;
        if (!is_null($site_id)) {
            $addons = (new CoreSiteService())->getAddonKeysBySiteId($site_id);
            $addons = is_array($addons) ? $addons : [];
        }

        $tree = [];
        foreach ($this->getAll() as $group_key => $group) {
            $group_app_type = (string) ($group[ 'app_type' ] ?? '');

            $items = [];
            foreach ($group[ 'items' ] ?? [] as $api_key => $item) {
                // 按端过滤：接口自身声明的端优先，未声明时继承分组
                $item_app_type = (string) ($item[ 'app_type' ] ?? $group_app_type);
                if ($app_type !== '' && $item_app_type !== $app_type) continue;

                $addon = $item[ 'addon' ] ?? ($group[ 'addon' ] ?? '');
                // 指定站点时，跳过该站点未启用的插件接口
                if (!is_null($addons) && $addon !== '' && !in_array($addon, $addons, true)) continue;

                $items[] = [
                    'api_key' => $api_key,
                    'name' => $item[ 'name' ] ?? $api_key,
                    'desc' => $item[ 'desc' ] ?? '',
                    'method' => strtolower($item[ 'method' ] ?? 'get'),
                    'path' => trim($item[ 'path' ] ?? '', '/'),
                ];
            }
            if (empty($items)) continue;

            $tree[] = [
                'group_key' => $group_key,
                'group_name' => $group[ 'group_name' ] ?? $group_key,
                'app_type' => $group[ 'app_type' ] ?? '',
                'domain' => $group[ 'domain' ] ?? $group_key,
                'addon' => $group[ 'addon' ] ?? '',
                'items' => $items,
            ];
        }
        return $tree;
    }
}
