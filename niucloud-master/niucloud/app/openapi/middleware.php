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

// 全局中间件定义文件
use app\openapi\middleware\AllowCrossDomain;
use app\openapi\middleware\OpenapiCheckEnabled;
use think\middleware\LoadLangPack;

return [
    //跨域请求中间件
    AllowCrossDomain::class,
    //语言中间件
    LoadLangPack::class,
    //开放平台总开关（关闭时所有开放接口一律拒绝）
    OpenapiCheckEnabled::class,
];
