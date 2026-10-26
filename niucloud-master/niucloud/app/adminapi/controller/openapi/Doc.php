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

use app\service\admin\openapi\OpenapiDocService;
use core\base\BaseAdminController;
use think\Response;

/**
 * 开放平台接口文档
 * Class Doc
 * @description 开放平台接口文档
 * @package app\adminapi\controller\openapi
 */
class Doc extends BaseAdminController
{
    /**
     * 接口清单树
     * @description 开放接口清单（按模块分组）
     * @return Response
     */
    public function tree(): Response
    {
        $app_type = (string) $this->request->param('app_type', '');
        return success((new OpenapiDocService())->getTree($app_type));
    }

    /**
     * 接口详情
     * @description 开放接口详情
     * @return Response
     */
    public function detail(): Response
    {
        $api_key = (string) $this->request->param('api_key', '');
        return success((new OpenapiDocService())->getDetail($api_key));
    }

    /**
     * 调试基础信息
     * @description 接口调试基础信息
     * @return Response
     */
    public function base(): Response
    {
        return success((new OpenapiDocService())->getDebugBase());
    }

    /**
     * 可调试的开放账号列表
     * @description 接口调试可用的开放账号列表
     * @return Response
     */
    public function apps(): Response
    {
        return success((new OpenapiDocService())->getDebugApps());
    }

    /**
     * 调试账号密钥
     * @description 接口调试获取开放账号密钥
     * @param int $id
     * @return Response
     */
    public function secret(int $id): Response
    {
        return success((new OpenapiDocService())->getAppSecret($id));
    }
}
