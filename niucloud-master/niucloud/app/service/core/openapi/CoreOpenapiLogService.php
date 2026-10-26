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

use app\model\sys\SysOpenapiLog;
use core\base\BaseCoreService;
use Throwable;
use think\facade\Log;

/**
 * 开放平台调用日志服务
 * Class CoreOpenapiLogService
 * @package app\service\core\openapi
 */
class CoreOpenapiLogService extends BaseCoreService
{
    /**
     * 需要脱敏的字段名
     */
    private const SENSITIVE_KEYS = [ 'app_secret', 'secret', 'password', 'token', 'access_token', 'authorization' ];

    public function __construct()
    {
        parent::__construct();
        $this->model = new SysOpenapiLog();
    }

    /**
     * 写入调用日志（失败不影响主流程）
     * @param array $data
     * @return void
     */
    public function add(array $data): void
    {
        try {
            $this->model->create([
                'app_id' => (int) ($data[ 'app_id' ] ?? 0),
                'app_key' => (string) ($data[ 'app_key' ] ?? ''),
                'site_id' => (int) ($data[ 'site_id' ] ?? 0),
                'api_key' => (string) ($data[ 'api_key' ] ?? ''),
                'url' => mb_substr((string) ($data[ 'url' ] ?? ''), 0, 255),
                'method' => (string) ($data[ 'method' ] ?? ''),
                'params' => $this->desensitize($data[ 'params' ] ?? []),
                'ip' => (string) ($data[ 'ip' ] ?? ''),
                'code' => (int) ($data[ 'code' ] ?? 0),
                'msg' => mb_substr((string) ($data[ 'msg' ] ?? ''), 0, 255),
                'cost_ms' => (int) ($data[ 'cost_ms' ] ?? 0),
                'create_time' => time(),
            ]);
        } catch (Throwable $e) {
            Log::write('开放平台调用日志写入失败：' . $e->getMessage());
        }
    }

    /**
     * 参数脱敏
     * @param mixed $params
     * @return array
     */
    private function desensitize($params): array
    {
        if (!is_array($params)) return [];

        $result = [];
        foreach ($params as $key => $value) {
            if (in_array(strtolower((string) $key), self::SENSITIVE_KEYS, true)) {
                $result[ $key ] = '******';
            } elseif (is_array($value)) {
                $result[ $key ] = $this->desensitize($value);
            } else {
                $result[ $key ] = $value;
            }
        }
        return $result;
    }
}
