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
 * 开放平台 - 店铺端（site）接口清单
 *
 * 这里维护 app_type = site 的开放接口，店铺账号（归属站点为具体店铺）调用。
 * 平台端接口见同目录 admin.php；两份清单由 core\dict\OpenApi 一起加载，
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
            'auth.token' => [
                'name' => '获取访问令牌',
                'desc' => '使用 Access Key / Secret Key 换取访问令牌，后续接口调用需携带该令牌',
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
    'common' => [
        'group_name' => '公共',
        'app_type' => AppTypeDict::SITE,
        'domain' => 'common',
        'items' => [
            'common.site_info' => [
                'name' => '获取站点信息',
                'desc' => '获取当前开放账号所属站点的基本信息',
                'method' => 'get',
                'path' => 'v1/site/info',
                'handler' => '\app\openapi\controller\v1\Site@info',
                'params' => [],
            ],
        ],
    ],
];
