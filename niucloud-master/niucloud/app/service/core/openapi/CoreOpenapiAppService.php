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
use app\model\sys\SysOpenapiApp;
use app\service\core\site\CoreSiteService;
use Closure;
use core\base\BaseCoreService;
use core\exception\AuthException;
use think\facade\Cache;
use think\facade\Env;
use think\facade\Log;
use Throwable;

/**
 * 开放平台账号服务
 * Class CoreOpenapiAppService
 * @package app\service\core\openapi
 */
class CoreOpenapiAppService extends BaseCoreService
{
    /**
     * 账号缓存有效期（秒）
     */
    public const CACHE_EXPIRE = 60;

    /**
     * 「最近调用」信息落库的节流间隔（秒）
     */
    public const LAST_VISIT_THROTTLE = 60;

    public function __construct()
    {
        parent::__construct();
        $this->model = new SysOpenapiApp();
    }

    /**
     * 按 Access Key 查询开放账号
     * @param string $app_key
     * @return array
     */
    public function getByAppKey(string $app_key): array
    {
        if ($app_key === '') return [];
        return $this->remember('openapi_app_key_' . $app_key, function () use ($app_key) {
            return $this->model->where([ [ 'app_key', '=', $app_key ] ])->findOrEmpty()->toArray();
        });
    }

    /**
     * 按主键查询开放账号
     * @param int $app_id
     * @return array
     */
    public function getById(int $app_id): array
    {
        if ($app_id <= 0) return [];
        return $this->remember('openapi_app_id_' . $app_id, function () use ($app_id) {
            return $this->model->where([ [ 'id', '=', $app_id ] ])->findOrEmpty()->toArray();
        });
    }

    /**
     * 校验账号状态（存在、启用、未过期）
     * @param array $app
     * @return void
     */
    public function checkStatus(array $app): void
    {
        if (empty($app)) throw new AuthException('开放账号不存在', 401);

        if ((int) ($app[ 'status' ] ?? 0) !== OpenapiDict::STATUS_ON) {
            throw new AuthException('开放账号已被禁用', 403);
        }

        $expire_time = (int) ($app[ 'expire_time' ] ?? 0);
        if ($expire_time > 0 && $expire_time < time()) {
            throw new AuthException('开放账号已过期', 403);
        }
    }

    /**
     * 校验调用来源 IP 是否命中白名单
     * @param array $app
     * @param string $ip
     * @return void
     */
    public function checkIp(array $app, string $ip): void
    {
        $ip_white = trim((string) ($app[ 'ip_white' ] ?? ''));
        if ($ip_white === '') return;

        $allow = array_filter(array_map('trim', preg_split('/[\s,]+/', $ip_white)));
        if (empty($allow)) return;

        if (!in_array($ip, $allow, true)) {
            throw new AuthException('当前 IP 不在白名单内', 403);
        }
    }

    /**
     * 更新账号「最近调用」信息
     *
     * 由调用日志写入时同步维护，供后台账号列表展示；
     * 通过条件更新做节流，同一账号 60 秒内只落库一次，避免高频调用频繁写库。
     * @param int $app_id
     * @param string $ip
     * @return void
     */
    public function updateLastVisit(int $app_id, string $ip): void
    {
        if ($app_id <= 0) return;

        try {
            $this->model
                ->where([
                    [ 'id', '=', $app_id ],
                    [ 'last_visit_time', '<', time() - self::LAST_VISIT_THROTTLE ],
                ])
                ->update([
                    'last_visit_time' => time(),
                    'last_visit_ip' => $ip,
                ]);
        } catch (Throwable $e) {
            // 统计信息更新失败不影响接口调用主流程
            Log::write('开放平台账号最近调用信息更新失败：' . $e->getMessage());
        }
    }

    /**
     * 校验 Access Key 与 Secret Key 是否匹配
     * @param array $app
     * @param string $app_secret
     * @return bool
     */
    public function verifySecret(array $app, string $app_secret): bool
    {
        if ($app_secret === '') return false;

        $real_secret = $this->decrypt((string) ($app[ 'app_secret' ] ?? ''), (int) ($app[ 'id' ] ?? 0));
        if ($real_secret === '') return false;

        return hash_equals($real_secret, $app_secret);
    }

    /**
     * 判断账号是否拥有指定模块的调用权限
     * @param array $app
     * @param string $module 模块标识（接口清单中的业务域 key）
     * @return bool
     */
    public function hasModuleAuth(array $app, string $module): bool
    {
        if ($module === '') return true;

        $modules = $app[ 'auth_domains' ] ?? [];
        if (!is_array($modules)) return false;

        // 兼容早期「业务域 => 读写范围」的对象结构：取其模块键作为已授权模块
        if ($modules !== [] && array_keys($modules) !== range(0, count($modules) - 1)) {
            $modules = array_keys($modules);
        }

        return in_array($module, $modules, true);
    }

    /**
     * 获取账号身份归属的端类型（由所属站点的 app_type 决定）
     * @param array $app
     * @return string
     */
    public function getAppType(array $app): string
    {
        $site_id = (int) ($app[ 'site_id' ] ?? 0);
        $site = (new CoreSiteService())->getSiteCache($site_id);
        return (string) ($site[ 'app_type' ] ?? '');
    }

    /**
     * 生成 Access Key
     * @return string
     */
    public static function generateAppKey(): string
    {
        return 'AKID' . strtoupper(bin2hex(random_bytes(10)));
    }

    /**
     * 生成 Secret Key
     * @return string
     */
    public static function generateAppSecret(): string
    {
        return bin2hex(random_bytes(16));
    }

    /**
     * 加密 Secret Key（AES-256-CBC，密钥取自开放平台配置表）
     * @param string $plain
     * @return string
     */
    public function encrypt(string $plain): string
    {
        return $this->doEncrypt($plain, $this->getCipherKey());
    }

    /**
     * 解密 Secret Key
     *
     * 若密文是改造前（密钥取自 .env）加密的，解密成功后会立即用当前配置密钥重新加密写回，
     * 实现历史数据的惰性迁移（需传入 app_id 才会回写）。
     * @param string $cipher_text
     * @param int $app_id 密文所属的开放账号 id，用于迁移回写
     * @return string
     */
    public function decrypt(string $cipher_text, int $app_id = 0): string
    {
        if ($cipher_text === '') return '';

        $plain = $this->doDecrypt($cipher_text, $this->getCipherKey());
        if ($plain !== '') return $plain;

        // 兼容改造前的历史密文：改用旧密钥解，解出后迁移到当前密钥
        foreach ($this->getLegacyCipherKeys() as $legacy_key) {
            $plain = $this->doDecrypt($cipher_text, $legacy_key);
            if ($plain === '') continue;

            if ($app_id > 0) {
                $this->model->where([ [ 'id', '=', $app_id ] ])->update([
                    'app_secret' => $this->encrypt($plain),
                ]);
                $this->clearCache();
            }

            return $plain;
        }

        return '';
    }

    /**
     * 用新密钥重新加密全部账号的 Secret Key
     *
     * 刷新加密密钥前调用，避免历史数据在新密钥下无法解密；
     * 无法解密的账号会被跳过，不破坏原有数据。
     * @param string $new_secret 新密钥（与配置表保存的值一致）
     * @return int 成功重新加密的账号数量
     */
    public function reEncryptSecrets(string $new_secret): int
    {
        $new_key = self::deriveKey($new_secret);
        $count = 0;

        $list = $this->model->field('id,app_secret')->select()->toArray();
        foreach ($list as $item) {
            $cipher = (string) ($item[ 'app_secret' ] ?? '');
            if ($cipher === '') continue;

            $plain = $this->doDecrypt($cipher, $this->getCipherKey());
            if ($plain === '') {
                foreach ($this->getLegacyCipherKeys() as $legacy_key) {
                    $plain = $this->doDecrypt($cipher, $legacy_key);
                    if ($plain !== '') break;
                }
            }
            if ($plain === '') continue;

            $encrypted = $this->doEncrypt($plain, $new_key);
            if ($encrypted === '') continue;

            $this->model->where([ [ 'id', '=', $item[ 'id' ] ] ])->update([ 'app_secret' => $encrypted ]);
            $count++;
        }

        $this->clearCache();

        return $count;
    }

    /**
     * 清除开放账号缓存
     * @return void
     */
    public function clearCache(): void
    {
        Cache::tag(OpenapiDict::CACHE_TAG)->clear();
    }

    /**
     * 带缓存的查询
     * @param string $name
     * @param Closure $closure
     * @return array
     */
    private function remember(string $name, Closure $closure): array
    {
        $value = cache_remember($name, $closure, OpenapiDict::CACHE_TAG, [ 'expire' => self::CACHE_EXPIRE ]);
        return is_array($value) ? $value : [];
    }

    /**
     * 获取当前加密密钥（32 字节，取自开放平台配置表）
     * @return string
     */
    private function getCipherKey(): string
    {
        return self::deriveKey((new CoreOpenapiConfigService())->getSecret());
    }

    /**
     * 兼容历史数据的旧加密密钥
     *
     * 改造前密钥取自 .env 的 app.auth_key（缺失时回退到源码默认值），
     * 这里仅用于解开历史密文，解出后立即迁移到配置表密钥。
     * @return array
     */
    private function getLegacyCipherKeys(): array
    {
        $keys = [];

        $auth_key = (string) Env::get('app.auth_key', '');
        if ($auth_key !== '') $keys[] = self::deriveKey($auth_key);

        $keys[] = self::deriveKey('niucloud456$%^');

        return $keys;
    }

    /**
     * 由密钥种子派生 32 字节 AES 密钥
     * @param string $secret
     * @return string
     */
    private static function deriveKey(string $secret): string
    {
        return hash('sha256', $secret, true);
    }

    /**
     * 执行加密
     * @param string $plain
     * @param string $key
     * @return string
     */
    private function doEncrypt(string $plain, string $key): string
    {
        if ($plain === '') return '';

        $iv = random_bytes(16);
        $cipher = openssl_encrypt($plain, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
        if ($cipher === false) return '';

        return base64_encode($iv . $cipher);
    }

    /**
     * 执行解密
     * @param string $cipher_text
     * @param string $key
     * @return string
     */
    private function doDecrypt(string $cipher_text, string $key): string
    {
        if ($cipher_text === '') return '';

        $data = base64_decode($cipher_text, true);
        if (empty($data) || strlen($data) <= 16) return '';

        $iv = substr($data, 0, 16);
        $cipher = substr($data, 16);

        $plain = openssl_decrypt($cipher, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
        return $plain === false ? '' : $plain;
    }
}
