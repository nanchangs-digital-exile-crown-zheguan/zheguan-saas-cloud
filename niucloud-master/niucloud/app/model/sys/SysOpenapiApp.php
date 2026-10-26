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
use think\model\concern\SoftDelete;

/**
 * 开放平台账号模型
 * Class SysOpenapiApp
 * @package app\model\sys
 */
class SysOpenapiApp extends BaseModel
{
    use SoftDelete;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sys_openapi_app';

    /**
     * 已授权模块（JSON 数组）：["goods","common"]
     * 一个模块对应接口清单中的一个业务域，勾选模块即拥有该模块下全部接口的调用权限
     * @var array
     */
    protected $json = [ 'auth_domains' ];

    /**
     * JSON 数据返回数组
     * @var bool
     */
    protected $jsonAssoc = true;

    /**
     * 定义软删除标记字段
     * @var string
     */
    protected $deleteTime = 'delete_time';

    /**
     * 定义软删除字段的默认值
     * @var int
     */
    protected $defaultSoftDelete = 0;
}
