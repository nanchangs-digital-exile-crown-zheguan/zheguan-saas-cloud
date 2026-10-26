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

use app\service\admin\openapi\OpenapiConfigService;
use core\base\BaseAdminController;
use think\Response;

/**
 * 开放平台设置
 * Class Config
 * @description 开放平台设置
 * @package app\adminapi\controller\openapi
 */
class Config extends BaseAdminController
{
    /**
     * 获取开放平台设置
     * @description 获取开放平台设置（总开关）
     * @return Response
     */
    public function getConfig(): Response
    {
        return success((new OpenapiConfigService())->getConfig());
    }

    /**
     * 保存开放平台设置
     * @description 保存开放平台设置（总开关）
     * @return Response
     */
    public function setConfig(): Response
    {
        $data = $this->request->params([
            [ 'is_open', '1' ],
        ]);
        (new OpenapiConfigService())->setConfig($data);
        return success('设置成功');
    }

    /**
     * 刷新数据加密密钥
     * @description 刷新开放平台数据加密密钥
     * @return Response
     */
    public function refreshSecret(): Response
    {
        return success('刷新成功', (new OpenapiConfigService())->refreshSecret());
    }
}
