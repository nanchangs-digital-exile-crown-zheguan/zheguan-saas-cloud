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

namespace app\openapi\controller\v1;

use app\openapi\controller\BaseOpenapiController;
use app\service\core\site\CoreSiteService;
use think\Response;

/**
 * 开放平台站点信息
 * Class Site
 * @package app\openapi\controller\v1
 */
class Site extends BaseOpenapiController
{
    /**
     * 获取当前开放账号所属站点的信息
     * @description 获取站点信息
     * @return Response
     */
    public function info(): Response
    {
        $app = $this->request->openapiApp();
        $site = (new CoreSiteService())->getSiteCache((int) ($app[ 'site_id' ] ?? 0));

        return success([
            'site_id' => $site[ 'site_id' ] ?? 0,
            'site_name' => $site[ 'site_name' ] ?? '',
            'app_type' => $site[ 'app_type' ] ?? '',
            'logo' => $site[ 'logo' ] ?? '',
            'icon' => $site[ 'icon' ] ?? '',
            'desc' => $site[ 'desc' ] ?? '',
            'phone' => $site[ 'phone' ] ?? '',
            'address' => $site[ 'full_address' ] ?? '',
            'expire_time' => $site[ 'expire_time' ] ?? 0,
            'create_time' => $site[ 'create_time' ] ?? 0,
        ]);
    }
}
