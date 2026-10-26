<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
use think\facade\Route;

/**
 * 商城系统 - 统计相关接口
 */
Route::group('shop', function () {

    Route::get('stat/total', 'addon\shop\app\adminapi\controller\Stat@total');
    Route::get('stat/today', 'addon\shop\app\adminapi\controller\Stat@today');
    Route::get('stat/yesterday', 'addon\shop\app\adminapi\controller\Stat@yesterday');
    Route::get('stat', 'addon\shop\app\adminapi\controller\Stat@stat');
    Route::get('stat/order', 'addon\shop\app\adminapi\controller\Stat@order');
    Route::get('stat/goods', 'addon\shop\app\adminapi\controller\Stat@goods');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
