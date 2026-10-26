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

use app\service\core\openapi\CoreOpenapiAppService;
use app\service\core\openapi\CoreOpenapiConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;

/**
 * 开放平台设置
 *
 * 总开关为平台级配置：平台端与店铺端读取同一份，只有平台端可以修改。
 *
 * Class OpenapiConfigService
 * @package app\service\admin\openapi
 */
class OpenapiConfigService extends BaseAdminService
{
    /**
     * 获取开放平台设置
     * @return array
     */
    public function getConfig(): array
    {
        return (new CoreOpenapiConfigService())->getConfig();
    }

    /**
     * 保存开放平台设置（仅平台端可修改）
     * @param array $data
     * @return bool
     */
    public function setConfig(array $data): bool
    {
        if ($this->site_id > 0) throw new CommonException('仅平台端可修改开放平台设置');

        return (new CoreOpenapiConfigService())->setConfig($data);
    }

    /**
     * 刷新数据加密密钥（仅平台端）
     *
     * 先用旧密钥把已有账号的 Secret Key 重新加密，再替换密钥，
     * 避免刷新后历史账号的密钥无法解密（对接方无需重新配置）。
     * @return array
     */
    public function refreshSecret(): array
    {
        if ($this->site_id > 0) throw new CommonException('仅平台端可刷新开放平台密钥');

        $new_secret = CoreOpenapiConfigService::generateSecret();

        // 顺序不能颠倒：先迁移已有密文，再落库新密钥
        $app_count = (new CoreOpenapiAppService())->reEncryptSecrets($new_secret);
        (new CoreOpenapiConfigService())->setSecret($new_secret);

        return [ 'app_count' => $app_count ];
    }
}
