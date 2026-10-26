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

use app\dict\sys\OpenapiDict;
use app\model\sys\SysOpenapiApp;
use app\service\core\openapi\CoreOpenapiApiService;
use app\service\core\openapi\CoreOpenapiAppService;
use app\service\core\openapi\CoreOpenapiTokenService;
use app\service\core\site\CoreSiteService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use Throwable;

/**
 * 开放平台账号管理
 * Class OpenapiAppService
 * @package app\service\admin\openapi
 */
class OpenapiAppService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new SysOpenapiApp();
    }

    /**
     * 账号列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = []): array
    {
        $query = $this->model->where([]);

        // 仅管理当前端归属的开放账号：平台端（site_id=0）只看平台级账号，店铺端只看本店铺账号
        $query->where('site_id', $this->site_id);

        if (!empty($where[ 'name' ])) {
            $query->whereLike('name', '%' . $this->model->handelSpecialCharacter($where[ 'name' ]) . '%');
        }
        if (isset($where[ 'status' ]) && $where[ 'status' ] !== '') {
            $query->where('status', (int) $where[ 'status' ]);
        }

        $query->order('id desc');

        $list = $this->pageQuery($query);
        $list[ 'data' ] = array_map([ $this, 'formatRow' ], $list[ 'data' ] ?? []);

        return $list;
    }

    /**
     * 账号详情
     * @param int $id
     * @return array
     */
    public function getInfo(int $id): array
    {
        return $this->formatRow($this->checkAuth($id));
    }

    /**
     * 新增账号
     * @param array $data
     * @return array 仅此一次返回明文密钥
     */
    public function add(array $data): array
    {
        $core_app_service = new CoreOpenapiAppService();
        $app_key = CoreOpenapiAppService::generateAppKey();
        $app_secret = CoreOpenapiAppService::generateAppSecret();
        $now = time();

        $id = $this->model->create([
            'site_id' => $this->site_id,
            'name' => (string) ($data[ 'name' ] ?? ''),
            'app_key' => $app_key,
            'app_secret' => $core_app_service->encrypt($app_secret),
            'secret_version' => 1,
            'status' => (int) ($data[ 'status' ] ?? OpenapiDict::STATUS_ON),
            'auth_domains' => $this->normalizeAuthModules($data[ 'auth_domains' ] ?? []),
            'ip_white' => (string) ($data[ 'ip_white' ] ?? ''),
            'expire_time' => (int) ($data[ 'expire_time' ] ?? 0),
            'token_expire' => (int) ($data[ 'token_expire' ] ?? OpenapiDict::DEFAULT_TOKEN_EXPIRE),
            'remark' => (string) ($data[ 'remark' ] ?? ''),
            'create_time' => $now,
            'update_time' => $now,
        ])->id;

        $core_app_service->clearCache();

        return [
            'id' => $id,
            'app_key' => $app_key,
            'app_secret' => $app_secret,
        ];
    }

    /**
     * 编辑账号
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data): bool
    {
        $info = $this->checkAuth($id);

        $save = [
            'name' => (string) ($data[ 'name' ] ?? $info[ 'name' ]),
            'status' => (int) ($data[ 'status' ] ?? $info[ 'status' ]),
            'auth_domains' => $this->normalizeAuthModules($data[ 'auth_domains' ] ?? $info[ 'auth_domains' ]),
            'ip_white' => (string) ($data[ 'ip_white' ] ?? $info[ 'ip_white' ]),
            'expire_time' => (int) ($data[ 'expire_time' ] ?? $info[ 'expire_time' ]),
            'token_expire' => (int) ($data[ 'token_expire' ] ?? $info[ 'token_expire' ]),
            'remark' => (string) ($data[ 'remark' ] ?? $info[ 'remark' ]),
            'update_time' => time(),
        ];

        $this->model->where([ [ 'id', '=', $id ] ])->update($save);

        $core_app_service = new CoreOpenapiAppService();
        $core_app_service->clearCache();

        // 禁用账号时同步作废其全部令牌
        if ((int) $save[ 'status' ] !== OpenapiDict::STATUS_ON) {
            (new CoreOpenapiTokenService())->revokeByAppId($id);
        }

        return true;
    }

    /**
     * 启用 / 禁用
     * @param int $id
     * @param int $status
     * @return bool
     */
    public function setStatus(int $id, int $status): bool
    {
        $this->checkAuth($id);
        $status = $status === OpenapiDict::STATUS_ON ? OpenapiDict::STATUS_ON : OpenapiDict::STATUS_OFF;

        $this->model->where([ [ 'id', '=', $id ] ])->update([
            'status' => $status,
            'update_time' => time(),
        ]);

        (new CoreOpenapiAppService())->clearCache();

        // 禁用后立即作废已签发的全部令牌
        if ($status !== OpenapiDict::STATUS_ON) {
            (new CoreOpenapiTokenService())->revokeByAppId($id);
        }

        return true;
    }

    /**
     * 重置密钥（旧令牌立即失效）
     * @param int $id
     * @return array 仅此一次返回明文密钥
     */
    public function resetSecret(int $id): array
    {
        $info = $this->checkAuth($id);

        $core_app_service = new CoreOpenapiAppService();
        $app_secret = CoreOpenapiAppService::generateAppSecret();

        $this->model->where([ [ 'id', '=', $id ] ])->update([
            'app_secret' => $core_app_service->encrypt($app_secret),
            'secret_version' => (int) $info[ 'secret_version' ] + 1,
            'update_time' => time(),
        ]);

        $core_app_service->clearCache();

        // 密钥已变更，旧令牌全部作废
        (new CoreOpenapiTokenService())->revokeByAppId($id);

        return [
            'id' => $id,
            'name' => (string) ($info[ 'name' ] ?? ''),
            'app_key' => $info[ 'app_key' ],
            'app_secret' => $app_secret,
        ];
    }

    /**
     * 批量重置密钥
     *
     * 逐条处理，单个账号失败（越权、已删除等）只跳过该条，不影响其余账号。
     * @param array $ids
     * @return array 各账号的新明文密钥（仅本次返回）
     */
    public function batchResetSecret(array $ids): array
    {
        $ids = array_values(array_unique(array_filter(array_map('intval', $ids), function ($id) {
            return $id > 0;
        })));
        if (empty($ids)) return [];

        // 只处理当前端归属的账号：平台端仅平台级账号（site_id=0），店铺端仅本店铺账号
        $allow_ids = $this->model->where('site_id', $this->site_id)->whereIn('id', $ids)->column('id');
        if (empty($allow_ids)) return [];

        $result = [];
        foreach ($allow_ids as $id) {
            try {
                $result[] = $this->resetSecret((int) $id);
            } catch (Throwable $e) {
                // 账号被并发删除等异常情况跳过该条
            }
        }

        return $result;
    }

    /**
     * 查看密钥明文（列表中默认脱敏，按需单独获取）
     * @param int $id
     * @return array
     */
    public function getSecret(int $id): array
    {
        $info = $this->checkAuth($id);

        return [
            'app_key' => (string) ($info[ 'app_key' ] ?? ''),
            'app_secret' => (new CoreOpenapiAppService())->decrypt((string) ($info[ 'app_secret' ] ?? ''), (int) ($info[ 'id' ] ?? 0)),
        ];
    }

    /**
     * 删除账号
     * @param int $id
     * @return bool
     */
    public function del(int $id): bool
    {
        $this->checkAuth($id);

        $this->model->where([ [ 'id', '=', $id ] ])->delete();

        (new CoreOpenapiAppService())->clearCache();
        (new CoreOpenapiTokenService())->revokeByAppId($id);

        return true;
    }

    /**
     * 可授权模块树（模块 + 模块下接口清单）
     * 按当前端类型过滤：平台端只展示 admin 端接口，店铺端只展示对应端接口
     * @return array
     */
    public function getApiTree(): array
    {
        // 店铺端按本店铺启用的插件过滤；平台端不过滤插件
        $site_id = $this->site_id > 0 ? $this->site_id : null;
        $site_info = (new CoreSiteService())->getSiteCache($this->site_id);
        $app_type = (string) ($site_info[ 'app_type' ] ?? '');

        return (new CoreOpenapiApiService())->getTreeBySiteId($site_id, $app_type);
    }

    /**
     * 校验账号归属，防止越权操作
     * @param int $id
     * @return array
     */
    private function checkAuth(int $id): array
    {
        $info = $this->model->where([ [ 'id', '=', $id ] ])->findOrEmpty()->toArray();
        if (empty($info)) throw new CommonException('开放账号不存在');

        if ((int) $info[ 'site_id' ] !== $this->site_id) {
            throw new CommonException('无权操作该开放账号');
        }

        return $info;
    }

    /**
     * 列表 / 详情输出格式化（密钥一律脱敏）
     * @param array $item
     * @return array
     */
    private function formatRow(array $item): array
    {
        if (empty($item)) return [];

        return [
            'id' => (int) ($item[ 'id' ] ?? 0),
            'site_id' => (int) ($item[ 'site_id' ] ?? 0),
            'name' => (string) ($item[ 'name' ] ?? ''),
            'app_key' => (string) ($item[ 'app_key' ] ?? ''),
            'app_secret_mask' => '••••••••',
            'status' => (int) ($item[ 'status' ] ?? 0),
            'auth_domains' => $this->normalizeAuthModules($item[ 'auth_domains' ] ?? []),
            'ip_white' => (string) ($item[ 'ip_white' ] ?? ''),
            'expire_time' => (int) ($item[ 'expire_time' ] ?? 0),
            'token_expire' => (int) ($item[ 'token_expire' ] ?? OpenapiDict::DEFAULT_TOKEN_EXPIRE),
            'last_visit_time' => (int) ($item[ 'last_visit_time' ] ?? 0),
            'last_visit_ip' => (string) ($item[ 'last_visit_ip' ] ?? ''),
            'remark' => (string) ($item[ 'remark' ] ?? ''),
            'create_time' => (int) ($item[ 'create_time' ] ?? 0),
            'update_time' => (int) ($item[ 'update_time' ] ?? 0),
        ];
    }

    /**
     * 规范化已授权模块：统一输出字符串模块 key 列表，如 ["goods","common"]
     * 同时兼容早期「业务域 => 读写范围」的对象结构 {"goods":["read","write"]}
     * @param mixed $auth_modules
     * @return array
     */
    private function normalizeAuthModules($auth_modules): array
    {
        if (!is_array($auth_modules)) return [];

        $result = [];
        foreach ($auth_modules as $key => $value) {
            // 对象结构取键名，数组结构取值
            $module = is_array($value) ? $key : $value;
            $module = trim((string) $module);
            if ($module === '') continue;

            $result[ $module ] = true;
        }

        return array_keys($result);
    }
}
