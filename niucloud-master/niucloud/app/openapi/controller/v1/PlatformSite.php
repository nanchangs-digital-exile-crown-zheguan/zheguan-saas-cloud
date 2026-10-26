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
use app\service\openapi\site\SiteService;
use think\Response;

/**
 * 开放平台 - 平台端站点管理
 * Class PlatformSite
 * @package app\openapi\controller\v1
 */
class PlatformSite extends BaseOpenapiController
{
    /**
     * 站点列表
     * @description 站点列表
     * @return Response
     */
    public function pages(): Response
    {
        $where = $this->request->params([
            [ 'site_name', '' ],
            [ 'status', '' ],
        ]);

        return success((new SiteService())->getPage($where));
    }

    /**
     * 启用 / 关闭站点
     * @description 启用/关闭站点
     * @return Response
     */
    public function setStatus(): Response
    {
        $data = $this->request->params([
            [ 'site_id', 0 ],
            [ 'status', 0 ],
        ]);

        (new SiteService())->setStatus((int) $data[ 'site_id' ], (int) $data[ 'status' ]);

        return success('设置成功');
    }
}
