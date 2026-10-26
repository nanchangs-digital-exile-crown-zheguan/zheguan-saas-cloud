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

namespace app\adminapi\controller\openapi;

use app\service\admin\openapi\OpenapiLogService;
use core\base\BaseAdminController;
use think\Response;

/**
 * 开放平台调用日志
 * Class Log
 * @description 开放平台调用日志
 * @package app\adminapi\controller\openapi
 */
class Log extends BaseAdminController
{
    /**
     * 日志列表
     * @description 开放平台调用日志列表
     * @return Response
     */
    public function pages(): Response
    {
        $where = $this->request->params([
            [ 'app_id', '' ],
            [ 'site_id', '' ],
            [ 'api_key', '' ],
            [ 'method', '' ],
            [ 'code', '' ],
            [ 'create_time', [] ],
        ]);
        return success((new OpenapiLogService())->getPage($where));
    }
}
