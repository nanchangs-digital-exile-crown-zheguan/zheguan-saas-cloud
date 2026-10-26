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

namespace app\service\admin\niucloud;

use app\dict\sys\ConfigKeyDict;
use app\service\core\niucloud\CoreAuthService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use core\util\niucloud\BaseNiucloudClient;
use GuzzleHttp\Client;
use think\facade\Cache;
use think\facade\Log;

/**
 * 官网账号（内嵌授权）服务层
 *
 * 说明：
 * 1. 官网账号登录与授权选择全部在官网 embed 页完成（iframe），本服务只负责
 *    生成 embed 地址、保存账号/授权元信息、以及把回传的授权凭据落到本地授权配置。
 * 2. 授权落库复用 NiucloudService::setAuthorize()，保证与现有授权业务（升级、应用下载、云编译）
 *    完全一致：authinfo 校验 -> 清理 access_token 与 authinfo 缓存 -> 写 NIUCLOUD_CONFIG。
 */
class NiucloudAccountService extends BaseAdminService
{
    /**
     * 官网前端域名（embed 页所在站点）
     */
    protected const OFFICIAL_WEB_HOST = 'https://www.niucloud.com';

    /**
     * 官网会员接口地址（与官网前端 VITE_APP_BASE_URL 一致，用于用 refresh_token 换取新的 access token）
     * 可用环境变量 NIUCLOUD_API_PREFIX 覆盖（本地联调时指向本地官网接口）
     */
    protected const DEFAULT_OFFICIAL_API_HOST = 'https://api.niucloud.com/api';

    /** 续期得到的访问令牌本地缓存键（避免每次进页面都请求官网） */
    protected const ACCESS_TOKEN_CACHE_KEY = 'niucloud_web_access_token';

    /** 距过期不足该秒数即提前续期，避免临界失效 */
    protected const TOKEN_REFRESH_AHEAD = 300;

    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();
    }

    /**
     * 官网前端域名
     */
    public function getOfficialWebHost(): string
    {
        return rtrim(self::OFFICIAL_WEB_HOST, '/');
    }

    /**
     * 本站域名（授权绑定用，不含协议与端口）
     */
    public function getSiteDomain(): string
    {
        return request()->host(true);
    }

    /**
     * 生成本站的页面 origin（postMessage 校验用）
     */
    public function getSiteOrigin(): string
    {
        return rtrim(request()->domain(), '/');
    }

    /**
     * 生成官网 embed 页地址
     *
     * @param string $mode login | authorize | switch
     * @param string $origin 父页面 origin（由前端传 window.location.origin，最准确）
     */
    public function getEmbedUrl(string $mode = 'login', string $origin = ''): array
    {
        $mode_path = [
            'login' => 'login',
            'authorize' => 'authorize',
            'switch' => 'authorize',
            'account' => 'account'
        ];
        $path = $mode_path[$mode] ?? 'login';
        $host = $origin ?: $this->getSiteOrigin();

        $params = [
            'host' => $host,
            'domain' => $this->getSiteDomain(),
            'mode' => $mode,
            'theme' => 'light',
            // 当前产品线标识：内嵌页只展示符合本产品线的授权
            'product_key' => BaseNiucloudClient::PRODUCT
        ];
        // 官网登录态：本地缓存有效则直接用，过期则由服务端用 refresh_token 自动续期后注入
        $access_token = $this->getValidAccessToken();
        if (!empty($access_token)) $params['token'] = $access_token;

        $query = http_build_query($params);

        return [
            'url' => $this->getOfficialWebHost() . '/embed/' . $path . '?' . $query,
            'host' => $host,
            'domain' => $this->getSiteDomain(),
            'mode' => $mode
        ];
    }

    /**
     * 获取账号与当前授权信息（只读本地配置，官网不可用时仍可展示）
     *
     * 授权信息统一取自系统授权配置 NIUCLOUD_CONFIG（选中授权即写入其中）；
     * 官网账号配置只保留登录态（token）、会员信息与同步状态
     */
    public function getAccountInfo(): array
    {
        $account = $this->getAccountConfig();
        $auth = $this->getAuthorizeConfig();

        $authorization = !empty($auth['auth_code']) ? $this->buildAuthorizationFromLocal($auth) : [];

        return [
            // 系统已存在授权即视为“已有授权”
            'bound' => !empty($authorization['auth_code']),
            // 是否已保存可用的官网登录态（前端据此决定内嵌登录页还是账号页，避免闪屏）
            'has_token' => $this->hasValidToken(),
            // 登录态有效期：优先给刷新令牌的过期时间（访问令牌由服务端自动续期）
            'token_expires_time' => (int)($account['token']['refresh_expires_time'] ?? 0) ?: (int)($account['token']['expires_time'] ?? 0),
            'member' => $account['member'] ?? [],
            'authorization' => $authorization,
            'sync' => $account['sync'] ?? []
        ];
    }

    /**
     * 保存官网账号登录态（内嵌页登录后回传的令牌）
     *
     * 说明：
     * - 长期保存的是 refresh_token（access token 会过期，只有刷新令牌能实现长期免登录）
     * - access token 只放缓存（短效），避免配置里长期存着一份会失效的凭据
     * - 官网旧版本未下发 refresh_token 时，退回只保存 access token，保证基本可用
     * - 不返回令牌内容，避免凭据外泄
     */
    public function saveToken(array $data): array
    {
        $token = trim((string)($data['token'] ?? ''));
        $refresh_token = trim((string)($data['refresh_token'] ?? ''));
        if (empty($token) && empty($refresh_token)) throw new CommonException('WEB_LOGIN_TOKEN_REQUIRE');

        $expires_time = (int)($data['expires_time'] ?? 0);
        $refresh_expires_time = (int)($data['refresh_expires_time'] ?? 0);

        $account = $this->getAccountConfig();
        $old_token = $account['token'] ?? [];

        $account['token'] = [
            // 长期凭据：access token 过期后用它换取新的 access token
            'refresh_token' => $refresh_token ?: ($old_token['refresh_token'] ?? ''),
            'refresh_expires_time' => $refresh_expires_time ?: (int)($old_token['refresh_expires_time'] ?? 0),
            // 兼容：官网未下发刷新令牌时，退回保存访问令牌
            'access_token' => $refresh_token ? '' : $token,
            'expires_time' => $refresh_token ? 0 : $expires_time,
            'update_time' => date('Y-m-d H:i:s')
        ];
        $this->core_config_service->setConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG, $account);

        // 本次登录拿到的访问令牌直接进缓存，省去一次续期请求
        if (!empty($token)) $this->cacheAccessToken($token, $expires_time);

        return [
            'has_token' => true,
            'token_expires_time' => $expires_time
        ];
    }

    /**
     * 可用的官网访问令牌（未登录 / 登录态已失效时返回空字符串）
     *
     * 优先级：
     * 1. 本地缓存的访问令牌未过期（距过期不足 TOKEN_REFRESH_AHEAD 秒视为需续期）→ 直接返回
     * 2. 有未过期的 refresh_token → 向官网换取新的访问令牌（长期免登录的关键）
     * 3. 兼容旧数据：只保存过访问令牌且未过期 → 直接返回
     */
    public function getValidAccessToken(): string
    {
        $auth_token = $this->getAccountConfig()['token'] ?? [];

        // 1. 本地缓存的访问令牌
        $cached = Cache::get(self::ACCESS_TOKEN_CACHE_KEY, []);
        $cached_token = (string)($cached['token'] ?? '');
        $cached_expires = (int)($cached['expires_time'] ?? 0);
        if (!empty($cached_token) && ($cached_expires <= 0 || $cached_expires > time() + self::TOKEN_REFRESH_AHEAD)) {
            return $cached_token;
        }

        // 2. 用刷新令牌续期
        $refresh_token = (string)($auth_token['refresh_token'] ?? '');
        if (!empty($refresh_token)) {
            $refresh_expires_time = (int)($auth_token['refresh_expires_time'] ?? 0);
            // 未记录有效期（0）时视为长期有效
            if ($refresh_expires_time > 0 && $refresh_expires_time <= time()) return '';

            return $this->exchangeAccessToken($refresh_token);
        }

        // 3. 兼容：仅保存过访问令牌
        $access_token = (string)($auth_token['access_token'] ?? '');
        if (empty($access_token)) return '';

        $expires_time = (int)($auth_token['expires_time'] ?? 0);
        if ($expires_time > 0 && $expires_time <= time()) return '';

        return $access_token;
    }

    /**
     * 是否存在可用的官网登录态（refresh_token 未过期即视为可续期）
     */
    public function hasValidToken(): bool
    {
        return $this->getValidAccessToken() !== '';
    }

    /**
     * 官网会员接口地址
     */
    protected function getOfficialApiHost(): string
    {
        return rtrim((string)(env('NIUCLOUD_API_PREFIX') ?: self::DEFAULT_OFFICIAL_API_HOST), '/');
    }

    /**
     * 缓存访问令牌（TTL 与令牌有效期对齐，未记录有效期时按 2 小时缓存）
     */
    protected function cacheAccessToken(string $token, int $expires_time): void
    {
        $ttl = $expires_time > 0 ? max(60, $expires_time - time()) : 7200;
        Cache::set(self::ACCESS_TOKEN_CACHE_KEY, [
            'token' => $token,
            'expires_time' => $expires_time
        ], $ttl);
    }

    /**
     * 官网会员接口客户端
     */
    protected function createOfficialClient(): Client
    {
        return new Client([
            'base_uri' => $this->getOfficialApiHost() . '/',
            'timeout' => 10,
            'verify' => config('niucloud.http.verify', true)
        ]);
    }

    /**
     * 用 refresh_token 向官网换取新的访问令牌（官网内嵌页专属接口 embed/refresh）
     *
     * 失败（网络异常 / 刷新令牌失效）返回空字符串，由调用方降级为"需重新登录"，
     * 不影响授权等其它功能。
     */
    protected function exchangeAccessToken(string $refresh_token): string
    {
        try {
            $response = $this->createOfficialClient()->post('embed/refresh', [
                'form_params' => [ 'refresh_token' => $refresh_token ]
            ]);
            $result = json_decode((string)$response->getBody(), true);
        } catch (\Throwable $e) {
            Log::write('官网登录态续期请求失败：' . $e->getMessage());
            return '';
        }

        $token = (string)($result['data']['token'] ?? '');
        if (empty($token)) {
            Log::write('官网登录态续期失败：' . json_encode($result, JSON_UNESCAPED_UNICODE));
            return '';
        }

        $this->cacheAccessToken($token, (int)($result['data']['expires_time'] ?? 0));

        return $token;
    }

    /**
     * 通知官网作废刷新令牌（官网内嵌页专属接口 embed/logout，幂等）
     *
     * 退出官网账号时调用，避免本地清掉后官网侧令牌仍可换取新的访问令牌；
     * 失败只记日志，不阻塞本地退出。
     */
    protected function revokeRefreshToken(string $refresh_token): void
    {
        try {
            $this->createOfficialClient()->post('embed/logout', [
                'form_params' => [ 'refresh_token' => $refresh_token ]
            ]);
        } catch (\Throwable $e) {
            Log::write('官网刷新令牌作废失败：' . $e->getMessage());
        }
    }

    /**
     * 选用授权：选中即写入系统授权配置（NIUCLOUD_CONFIG）并生效
     *
     * 说明：
     * - 复用现有授权校验链路：官网 authinfo 二次校验 -> 清理 authinfo/access_token 缓存 -> 写 NIUCLOUD_CONFIG
     * - 校验不通过（授权码无效 / 官网不可达）会直接抛出异常，**不写入任何配置**
     * - 不改动官网侧授权域名
     */
    public function saveSelectedAuth(array $data): array
    {
        $this->applyAuthorization($data);

        return $this->getAccountInfo();
    }

    /**
     * 绑定授权（与选用授权等价，保留接口兼容）
     */
    public function bindAuthorization(array $data): array
    {
        $this->applyAuthorization($data);

        return $this->getAccountInfo();
    }

    /**
     * 取消选用授权：清空系统授权配置（NIUCLOUD_CONFIG），系统回到“未授权”状态
     *
     * 说明：
     * - 只清系统已选授权，不影响官网账号登录态（token / 会员信息保留），也不删除官网账号下的授权记录
     * - 幂等：本来就没有授权时同样返回成功
     * - 清空后依赖授权的功能（升级、应用下载、云编译等）会回到未授权状态
     *
     * @param array $data 入参仅用于记录日志（auth_code 可选）
     */
    public function cancelSelectedAuth(array $data = []): array
    {
        (new NiucloudService())->clearAuthorize();

        $account = $this->getAccountConfig();
        $account['sync'] = [
            'last_sync_time' => date('Y-m-d H:i:s'),
            'last_sync_status' => 'cancel'
        ];
        $this->core_config_service->setConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG, $account);

        return $this->getAccountInfo();
    }

    /**
     * 应用授权：把授权码/密钥写入系统授权配置 NIUCLOUD_CONFIG（选用 / 绑定共用）
     *
     * - 先校验后写：校验失败直接抛错，原有授权配置保持不变
     * - 授权信息只落 NIUCLOUD_CONFIG；官网账号配置仅更新同步状态
     */
    protected function applyAuthorization(array $data): void
    {
        $auth_code = $data['auth_code'] ?? '';
        $auth_secret = $data['auth_secret'] ?? '';
        if (empty($auth_code) || empty($auth_secret)) throw new CommonException('AUTH_NOT_EXISTS');

        // 复用现有链路（含 authinfo 二次校验、缓存清理），不信任前端直接落库
        (new NiucloudService())->setAuthorize([
            'auth_code' => $auth_code,
            'auth_secret' => $auth_secret
        ]);

        $account = $this->getAccountConfig();
        // 授权信息已统一存于 NIUCLOUD_CONFIG，清掉历史遗留的副本
        unset($account['authorization']);
        $account['sync'] = [
            'last_sync_time' => date('Y-m-d H:i:s'),
            'last_sync_status' => 'success'
        ];
        $this->core_config_service->setConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG, $account);
    }

    /**
     * 退出官网账号会话（仅清除账号信息，不解除本地授权）
     */
    public function logout(): bool
    {
        $account = $this->getAccountConfig();
        // 主动作废官网侧的刷新令牌（失败不阻塞本地退出）
        $refresh_token = (string)($account['token']['refresh_token'] ?? '');
        if (!empty($refresh_token)) $this->revokeRefreshToken($refresh_token);

        unset($account['member'], $account['token']);
        // 一并清掉续期得到并缓存的访问令牌
        Cache::delete(self::ACCESS_TOKEN_CACHE_KEY);
        $account['sync'] = [
            'last_sync_time' => date('Y-m-d H:i:s'),
            'last_sync_status' => 'logout'
        ];
        $this->core_config_service->setConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG, $account);
        return true;
    }

    /**
     * 同步当前授权状态（读官网 authinfo，失败不抛出，仅记录状态）
     */
    public function syncState(): array
    {
        $auth_info = [];
        try {
            $auth_info = (new CoreAuthService())->getAuthInfo()['data'] ?? [];
        } catch (\Throwable $e) {
            $auth_info = [];
        }

        $account = $this->getAccountConfig();
        $account['sync'] = [
            'last_sync_time' => date('Y-m-d H:i:s'),
            'last_sync_status' => empty($auth_info) ? 'fail' : 'success'
        ];

        // 官网记录的授权域名是否与本站一致：仅记录到同步信息里便于排查（授权信息本身在 NIUCLOUD_CONFIG）
        if (!empty($auth_info)) {
            $account['sync']['address_type'] = $auth_info['address_type'] ?? false;
        }

        $this->core_config_service->setConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG, $account);

        return $this->getAccountInfo();
    }

    /**
     * 官网账号配置
     */
    protected function getAccountConfig(): array
    {
        $config = $this->core_config_service->getConfig(0, ConfigKeyDict::NIUCLOUD_ACCOUNT_CONFIG);
        return $config['value'] ?? [];
    }

    /**
     * 本地授权配置
     */
    protected function getAuthorizeConfig(): array
    {
        $config = $this->core_config_service->getConfig(0, ConfigKeyDict::NIUCLOUD_CONFIG);
        return $config['value'] ?? [];
    }

    /**
     * 由系统授权配置构造授权信息（NIUCLOUD_CONFIG 只存 auth_code / auth_secret）
     */
    protected function buildAuthorizationFromLocal(array $auth): array
    {
        return [
            'auth_code' => $auth['auth_code'] ?? '',
            'site_address' => '',
            'company_name' => '',
            'product_key_name' => '',
            'source' => 'manual',
            'update_time' => ''
        ];
    }
}
