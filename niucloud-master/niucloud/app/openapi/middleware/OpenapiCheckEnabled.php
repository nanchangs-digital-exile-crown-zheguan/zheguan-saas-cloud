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
use app\service\core\openapi\CoreOpenapiConfigService;
use Closure;
use core\exception\CommonException;

/**
 * 开放平台总开关校验
 *
 * 注册在 openapi 应用全局中间件中：开关关闭时，所有开放接口（含换取令牌）
 * 一律拒绝，已签发的令牌也随之立即失效。
 *
 * Class OpenapiCheckEnabled
 * @package app\openapi\middleware
 */
class OpenapiCheckEnabled
{
    public function handle(Request $request, Closure $next)
    {
        if (!(new CoreOpenapiConfigService())->isOpen()) {
            throw new CommonException('开放平台功能已关闭', 403);
        }

        return $next($request);
    }
}
