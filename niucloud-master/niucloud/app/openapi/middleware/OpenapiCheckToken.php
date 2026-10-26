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
use app\service\core\openapi\CoreOpenapiAppService;
use app\service\core\openapi\CoreOpenapiTokenService;
use Closure;
use core\exception\AuthException;

/**
 * 开放平台访问令牌校验
 * Class OpenapiCheckToken
 * @package app\openapi\middleware
 */
class OpenapiCheckToken
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->openapiToken();
        $token_info = (new CoreOpenapiTokenService())->parse($token);

        $app_service = new CoreOpenapiAppService();
        $app = $app_service->getById((int) ($token_info[ 'app_id' ] ?? 0));
        if (empty($app)) throw new AuthException('开放账号不存在', 401);

        // 账号可用性与来源 IP
        $app_service->checkStatus($app);
        $app_service->checkIp($app, $request->ip());

        // 密钥版本一致，否则视为密钥已重置，令牌立即失效
        if ((int) ($app[ 'secret_version' ] ?? 1) !== (int) ($token_info[ 'secret_version' ] ?? 1)) {
            throw new AuthException('访问令牌已失效，请重新获取', 401);
        }

        // 写入开放平台独立上下文（供中间件与业务服务读取）
        $request->openapiApp($app);

        return $next($request);
    }
}
