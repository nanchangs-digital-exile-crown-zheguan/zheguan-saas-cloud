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

use app\dict\sys\ConfigKeyDict;
use app\service\core\sys\CoreConfigService;
use core\base\BaseCoreService;

/**
 * 开放平台配置服务
 *
 * 开放平台总开关是平台级配置（site_id = 0），全项目统一生效：
 * 关闭后对外接口一律拒绝（含已签发的令牌），后台保留查看能力。
 *
 * Class CoreOpenapiConfigService
 * @package app\service\core\openapi
 */
class CoreOpenapiConfigService extends BaseCoreService
{
    /**
     * 开放平台配置归属站点：平台级，固定 0
     */
    public const PLATFORM_SITE_ID = 0;

    /**
     * 获取开放平台配置
     * @param int|null $site_id 不传时读取平台级配置
     * @return array
     */
    public function getConfig(?int $site_id = null): array
    {
        $config = (new CoreConfigService())->getConfigValue($site_id ?? self::PLATFORM_SITE_ID, ConfigKeyDict::OPENAPI);

        return [
            // 是否启用开放平台，默认开启（未配置时保持既有行为）
            'is_open' => (string) ($config[ 'is_open' ] ?? '1') === '1' ? '1' : '0',
        ];
    }

    /**
     * 保存开放平台配置
     * @param array $data
     * @param int|null $site_id 不传时写入平台级配置
     * @return bool
     */
    public function setConfig(array $data, ?int $site_id = null): bool
    {
        (new CoreConfigService())->setConfig(
            $site_id ?? self::PLATFORM_SITE_ID,
            ConfigKeyDict::OPENAPI,
            [ 'is_open' => (string) ($data[ 'is_open' ] ?? '1') === '1' ? '1' : '0' ]
        );

        return true;
    }

    /**
     * 开放平台功能是否已开启
     * @param int|null $site_id 不传时读取平台级配置
     * @return bool
     */
    public function isOpen(?int $site_id = null): bool
    {
        return $this->getConfig($site_id)[ 'is_open' ] === '1';
    }

    /**
     * 获取数据加密密钥（用于加密开放账号的 Secret Key）
     *
     * 首次读取时若配置不存在会自动生成并保存，保证后续始终从配置表读取，
     * 不再依赖 .env（避免密钥随代码仓库分发）。
     * @return string
     */
    public function getSecret(): string
    {
        $config = (new CoreConfigService())->getConfigValue(self::PLATFORM_SITE_ID, ConfigKeyDict::OPENAPI_SECRET);
        $secret = (string) ($config[ 'secret' ] ?? '');
        if ($secret !== '') return $secret;

        $secret = self::generateSecret();
        $this->setSecret($secret);

        return $secret;
    }

    /**
     * 保存数据加密密钥
     * @param string $secret
     * @return void
     */
    public function setSecret(string $secret): void
    {
        (new CoreConfigService())->setConfig(
            self::PLATFORM_SITE_ID,
            ConfigKeyDict::OPENAPI_SECRET,
            [ 'secret' => $secret ]
        );
    }

    /**
     * 生成一个数据加密密钥（256 位随机）
     * @return string
     */
    public static function generateSecret(): string
    {
        return bin2hex(random_bytes(32));
    }
}
