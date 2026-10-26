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
use Closure;

/**
 * 开放平台跨域请求中间件
 * Class AllowCrossDomain
 * @package app\openapi\middleware
 */
class AllowCrossDomain
{
    public function handle(Request $request, Closure $next)
    {
        header("Access-Control-Allow-Headers: Authorization, X-Openapi-Key, Content-Type, Accept, Origin, X-Requested-With, lang");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Max-Age: 1728000');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Origin: *');
        return $next($request);
    }
}
