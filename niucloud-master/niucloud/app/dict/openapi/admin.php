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

use app\dict\sys\AppTypeDict;

/**
 * 开放平台 - 平台端（admin）接口清单
 *
 * 这里维护 app_type = admin 的开放接口，只有平台级开放账号（归属站点为平台）可调用。
 * 店铺端接口见同目录 site.php；两份清单由 core\dict\OpenApi 一起加载，
 * 同名分组会自动合并 items，因此跨文件的分组元数据需保持一致。
 *
 * 新增一个开放接口 = 在下方追加一条配置 + 在对应控制器实现方法。
 *
 * 条目字段说明：
 *  - name      接口名称
 *  - desc      接口说明
 *  - app_type  端归属（admin 平台端 / site 站点端），与开放账号身份匹配
 *  - domain    所属模块（授权单位，与分组 key 对应），勾选模块即拥有模块下全部接口权限
 *  - method    HTTP 方法
 *  - path      路由路径（不含 openapi 应用前缀）
 *  - handler   控制器方法，格式：类名@方法名
 *  - need_auth 是否需要令牌鉴权，默认 true
 *  - params    参数元数据（用于接口说明）
 */
return [
    'auth' => [
        'group_name' => '授权',
        'app_type' => AppTypeDict::SITE,
        'domain' => 'auth',
        'items' => [
            // 平台端获取令牌：与店铺端为同一个接口（v1/auth/token），此处单独登记一条，仅用于平台端文档展示
            'auth.token_admin' => [
                'name' => '获取访问令牌',
                'desc' => '使用 Access Key / Secret Key 换取访问令牌，后续接口调用需携带该令牌（平台端）',
                'app_type' => AppTypeDict::ADMIN,
                'method' => 'post',
                'path' => 'v1/auth/token',
                'handler' => '\app\openapi\controller\v1\Auth@token',
                'need_auth' => false,
                'params' => [
                    'app_key' => [ 'name' => 'Access Key', 'type' => 'string', 'required' => true ],
                    'app_secret' => [ 'name' => 'Secret Key', 'type' => 'string', 'required' => true ],
                ],
            ],
        ],
    ],
    'site' => [
        'group_name' => '站点',
        'app_type' => AppTypeDict::ADMIN,
        'domain' => 'site',
        'items' => [
            'site.list' => [
                'name' => '站点列表',
                'desc' => '分页查询平台下的站点列表，可按站点名称、状态筛选',
                'method' => 'get',
                'path' => 'v1/platform/site/list',
                'handler' => '\app\openapi\controller\v1\PlatformSite@pages',
                'params' => [
                    'site_name' => [ 'name' => '站点名称', 'type' => 'string', 'required' => false ],
                    'status' => [ 'name' => '站点状态 1正常 2过期 3停止', 'type' => 'int', 'required' => false ],
                    'page' => [ 'name' => '页码', 'type' => 'int', 'required' => false ],
                    'limit' => [ 'name' => '每页条数（1-120）', 'type' => 'int', 'required' => false ],
                ],
            ],
            'site.status' => [
                'name' => '启用/关闭站点',
                'desc' => '启用或关闭指定站点：status 1 启用、3 关闭',
                'method' => 'put',
                'path' => 'v1/platform/site/status',
                'handler' => '\app\openapi\controller\v1\PlatformSite@setStatus',
                'params' => [
                    'site_id' => [ 'name' => '站点id', 'type' => 'int', 'required' => true ],
                    'status' => [ 'name' => '状态 1启用 3关闭', 'type' => 'int', 'required' => true ],
                ],
            ],
        ],
    ],
];
