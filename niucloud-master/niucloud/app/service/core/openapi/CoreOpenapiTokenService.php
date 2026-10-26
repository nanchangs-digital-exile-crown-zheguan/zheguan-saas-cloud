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

use app\dict\sys\OpenapiDict;
use app\model\sys\SysOpenapiToken;
use Closure;
use core\base\BaseCoreService;
use core\exception\AuthException;
use think\facade\Cache;

/**
 * 开放平台访问令牌服务
 * Class CoreOpenapiTokenService
 * @package app\service\core\openapi
 */
class CoreOpenapiTokenService extends BaseCoreService
{
    /**
     * 令牌缓存有效期（秒）
     */
    public const CACHE_EXPIRE = 60;

    public function __construct()
    {
        parent::__construct();
        $this->model = new SysOpenapiToken();
    }

    /**
     * 签发访问令牌
     * @param array $app
     * @param string $client_ip
     * @return array
     */
    public function issue(array $app, string $client_ip): array
    {
        $expire = (int) ($app[ 'token_expire' ] ?? 0);
        if ($expire <= 0) $expire = OpenapiDict::DEFAULT_TOKEN_EXPIRE;

        $token = OpenapiDict::TOKEN_PREFIX . bin2hex(random_bytes(32));
        $now = time();

        $this->model->create([
            'app_id' => (int) ($app[ 'id' ] ?? 0),
            'site_id' => (int) ($app[ 'site_id' ] ?? 0),
            'token_hash' => hash('sha256', $token),
            'secret_version' => (int) ($app[ 'secret_version' ] ?? 1),
            'expire_time' => $now + $expire,
            'revoke_time' => 0,
            'last_use_time' => $now,
            'client_ip' => $client_ip,
            'status' => OpenapiDict::TOKEN_STATUS_VALID,
            'create_time' => $now,
        ]);

        return [
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => $expire,
        ];
    }

    /**
     * 解析并校验访问令牌
     * @param string $token
     * @return array
     */
    public function parse(string $token): array
    {
        if ($token === '') throw new AuthException('缺少访问令牌', 401);

        $hash = hash('sha256', $token);
        $info = $this->remember('openapi_token_' . $hash, function () use ($hash) {
            return $this->model->where([ [ 'token_hash', '=', $hash ] ])->findOrEmpty()->toArray();
        });

        if (empty($info)) throw new AuthException('访问令牌无效', 401);
        if ((int) $info[ 'status' ] === OpenapiDict::TOKEN_STATUS_REVOKED) throw new AuthException('访问令牌已被撤销', 401);
        if ((int) $info[ 'status' ] !== OpenapiDict::TOKEN_STATUS_VALID) throw new AuthException('访问令牌已失效', 401);
        if ((int) $info[ 'expire_time' ] < time()) throw new AuthException('访问令牌已过期', 401);

        $this->touch($info);

        return $info;
    }

    /**
     * 撤销指定账号下的全部有效令牌（禁用账号、重置密钥、删除账号时调用）
     * @param int $app_id
     * @return int
     */
    public function revokeByAppId(int $app_id): int
    {
        if ($app_id <= 0) return 0;

        $count = $this->model->where([
            [ 'app_id', '=', $app_id ],
            [ 'status', '=', OpenapiDict::TOKEN_STATUS_VALID ],
        ])->update([
            'status' => OpenapiDict::TOKEN_STATUS_REVOKED,
            'revoke_time' => time(),
        ]);

        $this->clearCache();
        return (int) $count;
    }

    /**
     * 清除令牌缓存
     * @return void
     */
    public function clearCache(): void
    {
        Cache::tag(OpenapiDict::TOKEN_CACHE_TAG)->clear();
    }

    /**
     * 带缓存的查询
     * @param string $name
     * @param Closure $closure
     * @return array
     */
    private function remember(string $name, Closure $closure): array
    {
        $value = cache_remember($name, $closure, OpenapiDict::TOKEN_CACHE_TAG, [ 'expire' => self::CACHE_EXPIRE ]);
        return is_array($value) ? $value : [];
    }

    /**
     * 低频更新令牌最近使用时间
     * @param array $info
     * @return void
     */
    private function touch(array $info): void
    {
        $now = time();
        if ((int) ($info[ 'last_use_time' ] ?? 0) > $now - self::CACHE_EXPIRE) return;

        $this->model->where([ [ 'id', '=', $info[ 'id' ] ] ])->update([ 'last_use_time' => $now ]);
        $this->clearCache();
    }
}
