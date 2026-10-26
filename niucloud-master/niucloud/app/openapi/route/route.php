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

/**
 * 开放平台路由
 *
 * 路由不在此处逐个手写，而是由「接口清单」驱动自动注册：
 * 核心清单 app/dict/openapi/*.php + 插件清单 addon/{key}/app/dict/openapi/*.php
 * 新增开放接口只需在清单中追加一条配置并实现对应控制器方法。
 */

use app\openapi\middleware\OpenapiCheckDomain;
use app\openapi\middleware\OpenapiCheckToken;
use app\openapi\middleware\OpenapiLog;
use core\dict\DictLoader;
use think\facade\Route;

$api_list = (new DictLoader("OpenApi"))->load([]);

foreach ($api_list as $group_key => $group) {
    $items = $group[ 'items' ] ?? [];
    if (empty($items)) continue;

    foreach ($items as $api_key => $item) {
        $method = strtolower($item[ 'method' ] ?? 'get');
        $path = trim($item[ 'path' ] ?? '', '/');
        $handler = $item[ 'handler' ] ?? '';
        if ($path === '' || $handler === '') continue;

        // 以清单 key 作为路由标识，供中间件精准定位接口（避免路径占位符写法差异导致匹配失败）
        $route = Route::rule($path, $handler, $method)->name($api_key);

        // 日志中间件放最外层，保证鉴权失败的请求同样被记录
        $middleware = [ OpenapiLog::class ];

        // need_auth = false 的接口（如换取令牌）免鉴权
        if (($item[ 'need_auth' ] ?? true) !== false) {
            $middleware[] = OpenapiCheckToken::class;
            $middleware[] = OpenapiCheckDomain::class;
        }

        $route->middleware($middleware);
    }
}

unset($api_list, $group_key, $group, $items, $api_key, $item, $method, $path, $handler, $route, $middleware);

// 加载插件自带的 openapi 路由（清单机制覆盖不到的场景，保留逃生通道）
(new DictLoader("Route"))->load([ 'app_type' => 'openapi' ]);
