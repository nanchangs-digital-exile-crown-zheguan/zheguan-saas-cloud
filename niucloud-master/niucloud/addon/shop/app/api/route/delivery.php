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

use app\api\middleware\ApiChannel;
use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use think\facade\Route;

/**
 * 商城系统 - 配送相关接口
 */
Route::group('shop', function () {

    // 获取同城配送轨迹
    Route::get('delivery/track_of_local', 'addon\shop\app\api\controller\delivery\Order@getTrackOfLocalDeliveryOrder');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class)//false表示不验证登录
    ->middleware(ApiLog::class);
