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

namespace core\base;

/**
 * 开放平台基础服务层
 *
 * 开放平台（openapi 端口）专用基类，与 BaseAdminService / BaseApiService / BaseCoreService 平级。
 * 上下文来源于 app\Request::openapiApp()（独立静态属性），
 * 与其他端口的 $site_id / $auth_info 完全隔离，避免相互污染。
 *
 * Class BaseOpenapiService
 * @package core\base
 */
abstract class BaseOpenapiService extends BaseService
{
    /**
     * 当前调用的开放账号 id
     * @var int
     */
    protected $app_id;

    /**
     * 当前调用的开放账号归属站点 id（0 为平台级）
     * @var int
     */
    protected $site_id;

    public function __construct()
    {
        parent::__construct();
        /** @var \app\Request $request */
        $request = $this->request;
        $app = $request->openapiApp();
        $this->app_id = (int) ($app[ 'id' ] ?? 0);
        $this->site_id = (int) ($app[ 'site_id' ] ?? 0);
    }
}
