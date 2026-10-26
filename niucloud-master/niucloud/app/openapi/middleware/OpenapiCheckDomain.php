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

namespace app\openapi\middleware;

use app\Request;
use app\service\core\openapi\CoreOpenapiApiService;
use app\service\core\openapi\CoreOpenapiAppService;
use Closure;
use core\exception\AuthException;

/**
 * 开放平台业务域读写授权校验
 * Class OpenapiCheckDomain
 * @package app\openapi\middleware
 */
class OpenapiCheckDomain
{
    public function handle(Request $request, Closure $next)
    {
        $app = $request->openapiApp();

        // 路由标识即接口标识（路由由接口清单注册时绑定）
        $api_key = $request->rule() ? (string) $request->rule()->getName() : '';
        $item = (new CoreOpenapiApiService())->getByKey($api_key);

        // 未登记在接口清单中的路由（插件自定义路由），不做域校验
        if (empty($item)) return $next($request);

        $app_service = new CoreOpenapiAppService();

        // 端归属校验：接口所属端必须与账号身份一致
        $api_app_type = (string) ($item[ 'app_type' ] ?? '');
        if ($api_app_type !== '') {
            $app_type = $app_service->getAppType($app);
            if ($app_type !== '' && $app_type !== $api_app_type) {
                throw new AuthException('该接口不属于当前开放账号的端', 403);
            }
        }

        // 模块授权校验：接口所属模块必须在账号已授权模块内
        $module = (string) ($item[ 'domain' ] ?? '');
        if (!$app_service->hasModuleAuth($app, $module)) {
            throw new AuthException('没有该模块的访问权限', 403);
        }

        return $next($request);
    }
}
