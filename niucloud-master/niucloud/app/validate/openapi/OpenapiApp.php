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

namespace app\validate\openapi;

use think\Validate;

/**
 * 开放账号表单校验
 * Class OpenapiApp
 * @package app\validate\openapi
 */
class OpenapiApp extends Validate
{
    protected $rule = [
        'name' => 'require|max:100',
        'token_expire' => 'integer|egt:0',
        'ip_white' => 'max:500',
        'remark' => 'max:255',
    ];

    protected $message = [
        'name.require' => '开放账号名称不能为空',
        'name.max' => '开放账号名称不能超过 100 个字符',
        'token_expire.integer' => '令牌有效期必须为整数',
        'token_expire.egt' => '令牌有效期不能小于 0',
        'ip_white.max' => 'IP 白名单不能超过 500 个字符',
        'remark.max' => '备注不能超过 255 个字符',
    ];

    protected $scene = [
        'add' => [ 'name', 'token_expire', 'ip_white', 'remark' ],
        'edit' => [ 'name', 'token_expire', 'ip_white', 'remark' ],
    ];
}
