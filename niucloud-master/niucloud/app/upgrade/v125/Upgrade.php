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

namespace app\upgrade\v125;

use app\service\admin\install\InstallSystemService;
use app\service\admin\sys\MenuService;
use think\facade\Cache;

/**
 * 开放平台升级
 */
class Upgrade
{
    /**
     * 执行升级
     * @return void
     */
    public function handle()
    {
        // 刷新系统菜单，写入本次新增的「开放平台」菜单与权限点（内部已清除菜单缓存）
        (new InstallSystemService())->installMenu();
        // 清除开放平台账号缓存
        Cache::tag('openapi_app')->clear();
    }
}
