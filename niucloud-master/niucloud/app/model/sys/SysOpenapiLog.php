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

namespace app\model\sys;

use core\base\BaseModel;

/**
 * 开放平台调用日志模型
 * Class SysOpenapiLog
 * @package app\model\sys
 */
class SysOpenapiLog extends BaseModel
{
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sys_openapi_log';

    /**
     * 请求参数（已脱敏的 JSON）
     * @var array
     */
    protected $json = [ 'params' ];

    /**
     * JSON 数据返回数组
     * @var bool
     */
    protected $jsonAssoc = true;
}
