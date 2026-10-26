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

namespace app\service\admin\openapi;

use app\model\sys\SysOpenapiApp;
use app\service\core\openapi\CoreOpenapiApiService;
use app\service\core\openapi\CoreOpenapiAppService;
use core\base\BaseAdminService;
use core\exception\CommonException;

/**
 * 开放平台接口文档
 * Class OpenapiDocService
 * @package app\service\admin\openapi
 */
class OpenapiDocService extends BaseAdminService
{
    /**
     * 接口清单树（按模块分组）
     * 展示开放接口，不做账号授权过滤；可按端过滤（admin 平台端 / site 站点端）
     * @param string $app_type 端类型，为空表示返回全部端
     * @return array
     */
    public function getTree(string $app_type = ''): array
    {
        $list = (new CoreOpenapiApiService())->getFlatList();

        $tree = [];
        foreach ($list as $item) {
            // 按端过滤
            if ($app_type !== '' && (string) ($item[ 'app_type' ] ?? '') !== $app_type) continue;

            $group_key = (string) ($item[ 'group_key' ] ?? '');

            if (!isset($tree[ $group_key ])) {
                $tree[ $group_key ] = [
                    'group_key' => $group_key,
                    'group_name' => $item[ 'group_name' ] ?? $group_key,
                    'app_type' => $item[ 'app_type' ] ?? '',
                    'domain' => $item[ 'domain' ] ?? '',
                    'addon' => $item[ 'addon' ] ?? '',
                    'items' => [],
                ];
            }

            $tree[ $group_key ][ 'items' ][] = [
                'api_key' => $item[ 'api_key' ] ?? '',
                'name' => $item[ 'name' ] ?? '',
                'desc' => $item[ 'desc' ] ?? '',
                'method' => $item[ 'method' ] ?? 'get',
                'path' => $item[ 'path' ] ?? '',
                'need_auth' => (bool) ($item[ 'need_auth' ] ?? true),
                'param_count' => count($item[ 'params' ] ?? []),
            ];
        }

        return array_values($tree);
    }

    /**
     * 接口详情
     * @param string $api_key
     * @return array
     */
    public function getDetail(string $api_key): array
    {
        $item = (new CoreOpenapiApiService())->getByKey($api_key);
        if (empty($item)) throw new CommonException('接口不存在');

        return [
            'api_key' => $item[ 'api_key' ] ?? '',
            'name' => $item[ 'name' ] ?? '',
            'desc' => $item[ 'desc' ] ?? '',
            'app_type' => $item[ 'app_type' ] ?? '',
            'domain' => $item[ 'domain' ] ?? '',
            'group_key' => $item[ 'group_key' ] ?? '',
            'group_name' => $item[ 'group_name' ] ?? '',
            'addon' => $item[ 'addon' ] ?? '',
            'method' => $item[ 'method' ] ?? 'get',
            'path' => $item[ 'path' ] ?? '',
            'need_auth' => (bool) ($item[ 'need_auth' ] ?? true),
            'handler' => $item[ 'handler' ] ?? '',
            'params' => $item[ 'params' ] ?? [],
            // 返回示例：清单中未定义时为空，调试面板会展示真实响应
            'response' => $item[ 'response' ] ?? [],
        ];
    }

    /**
     * 调试基础信息（开放平台端访问地址等）
     * @return array
     */
    public function getDebugBase(): array
    {
        $request = request();
        $domain = rtrim((string) $request->domain(), '/');
        $base_url = (string) $request->baseUrl();
        $pathinfo = ltrim((string) $request->pathinfo(), '/');

        // 计算入口前缀（空 / /index.php / 子目录）
        // 多应用下 baseUrl 形如 /index.php/adminapi/openapi/doc/base，
        // 去掉应用内路径后为 /index.php/adminapi，再去掉应用名（最后一段）即入口前缀
        $entry = '';
        if ($pathinfo !== '' && substr($base_url, -strlen($pathinfo)) === $pathinfo) {
            $prefix = rtrim(substr($base_url, 0, -strlen($pathinfo)), '/');
            $entry = rtrim(dirname($prefix), '/\\');
            if ($entry === '.') $entry = '';
        }

        return [
            'openapi_base' => $domain . $entry . '/openapi',
            'entry_prefix' => $entry,
            'token_path' => 'v1/auth/token',
        ];
    }

    /**
     * 可调试的开放账号列表
     *
     * 调试不同端的接口需要对应端的账号（平台端接口用平台级账号、站点端接口用店铺账号），
     * 因此这里不做端过滤：平台端登录时可看到全部账号，店铺端登录时仅能看到本店铺账号。
     * 仅返回基础信息，不含密钥。
     *
     * @return array
     */
    public function getDebugApps(): array
    {
        $query = (new SysOpenapiApp())
            ->field('id, site_id, name, status')
            ->order('id desc');

        if ($this->site_id > 0) {
            $query->where('site_id', $this->site_id);
        }

        $list = $query->select()->toArray();

        return array_map(function ($item) {
            $site_id = (int) ($item[ 'site_id' ] ?? 0);

            return [
                'id' => (int) ($item[ 'id' ] ?? 0),
                'site_id' => $site_id,
                'name' => (string) ($item[ 'name' ] ?? ''),
                'status' => (int) ($item[ 'status' ] ?? 0),
                // 账号的端归属：平台级账号（site_id=0）为 admin，其余为 site
                'app_type' => $site_id === 0 ? 'admin' : 'site',
            ];
        }, $list);
    }

    /**
     * 接口调试 - 获取账号密钥
     *
     * 调试不同端的接口需要使用对应端的账号，因此这里不做端隔离：
     * 平台端登录时可读取任意账号的密钥，店铺端登录时仅能读取本店铺账号。
     *
     * @param int $id
     * @return array
     */
    public function getAppSecret(int $id): array
    {
        if ($id <= 0) throw new CommonException('开放账号不存在');

        $query = (new SysOpenapiApp())->where([ [ 'id', '=', $id ] ]);
        if ($this->site_id > 0) {
            $query->where('site_id', $this->site_id);
        }

        $info = $query->findOrEmpty()->toArray();
        if (empty($info)) throw new CommonException('开放账号不存在或无权查看');

        return [
            'app_key' => (string) ($info[ 'app_key' ] ?? ''),
            'app_secret' => (new CoreOpenapiAppService())->decrypt((string) ($info[ 'app_secret' ] ?? ''), (int) ($info[ 'id' ] ?? 0)),
        ];
    }
}
