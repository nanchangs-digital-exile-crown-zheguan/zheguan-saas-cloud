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

namespace app\dict\sys;

/**
 * 开放平台字典
 * Class OpenapiDict
 * @package app\dict\sys
 */
class OpenapiDict
{

    /**
     * 账号状态：启用
     */
    public const STATUS_ON = 1;

    /**
     * 账号状态：禁用
     */
    public const STATUS_OFF = 0;

    /**
     * 访问令牌状态：有效
     */
    public const TOKEN_STATUS_VALID = 1;

    /**
     * 访问令牌状态：已撤销
     */
    public const TOKEN_STATUS_REVOKED = 2;

    /**
     * 访问令牌状态：已过期
     */
    public const TOKEN_STATUS_EXPIRED = 3;

    /**
     * 账号缓存 tag
     */
    public const CACHE_TAG = 'openapi_app';

    /**
     * 令牌缓存 tag
     */
    public const TOKEN_CACHE_TAG = 'openapi_token';

    /**
     * 默认访问令牌有效期（秒）
     */
    public const DEFAULT_TOKEN_EXPIRE = 7200;

    /**
     * 平台级站点 id（开放账号归属平台时使用）
     */
    public const PLATFORM_SITE_ID = 0;

    /**
     * 访问令牌前缀长度（返回给调用方的 token 形如 ak_xxx）
     */
    public const TOKEN_PREFIX = 'ak_';
}
