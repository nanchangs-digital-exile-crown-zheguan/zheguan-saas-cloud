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
 * 商城系统 - 营销相关接口
 */
Route::group('shop', function () {

    /***************************************************** 优惠券 ****************************************************/
    // 获取优惠券列表
    Route::get('coupon', 'addon\shop\app\api\controller\marketing\Coupon@lists');

    // 获取优惠券列表供组件调用
    Route::get('coupon/components', 'addon\shop\app\api\controller\marketing\Coupon@components');

    // 详情
    Route::get('coupon/:id', 'addon\shop\app\api\controller\marketing\Coupon@detail');

    // 优惠券二维码
    Route::get('coupon/qrcode/:id', 'addon\shop\app\api\controller\marketing\Coupon@qrcode');

    Route::get('config/invoice', 'addon\shop\app\api\controller\Config@invoice');
    //优惠券类型
    Route::get('coupon_type', 'addon\shop\app\api\controller\marketing\Coupon@getCouponType');

    /***************************************************** 限时折扣 ****************************************************/

    //轮播图配置
    Route::get('discount/config', 'addon\shop\app\api\controller\marketing\Discount@config');

    // 限时折扣商品列表
    Route::get('discount/goods', 'addon\shop\app\api\controller\marketing\Discount@goods');

    // 限时折扣列表
    Route::get('discount', 'addon\shop\app\api\controller\marketing\Discount@lists');

    /*****************************************************  积分商城 ****************************************************/

    //积分商城列表
    Route::get('exchange', 'addon\shop\app\api\controller\exchange\Exchange@lists');

    //积分商城商品详情
    Route::get('exchange/goods/:id', 'addon\shop\app\api\controller\exchange\Exchange@detail');

    //获取商品列表供组件调用
    Route::get('exchange/components', 'addon\shop\app\api\controller\exchange\Exchange@components');

    //获取用户当前积分数供组件调用
    Route::get('exchange/point', 'addon\shop\app\api\controller\exchange\Exchange@getPointInfo');


    /***************************************************** 新人专享 ****************************************************/

    // 新人专享商品列表
    Route::get('newcomer/goods', 'addon\shop\app\api\controller\marketing\Newcomer@pages');

    // 新人专享组件商品列表
    Route::get('newcomer/goods/components', 'addon\shop\app\api\controller\marketing\Newcomer@componentsList');

    // 新人专享活动配置
    Route::get('newcomer/config', 'addon\shop\app\api\controller\marketing\Newcomer@config');

    /***************************************************** 商品榜单 ****************************************************/

    // 商品榜单列表
    Route::get('rank', 'addon\shop\app\api\controller\goods\Rank@pages');

    // 榜单商品列表
    Route::get('rank/goods', 'addon\shop\app\api\controller\goods\Rank@goods');

    // 商品排行榜组件列表
    Route::get('rank/components', 'addon\shop\app\api\controller\goods\Rank@components');

    Route::get('rank/getRankConfig', 'addon\shop\app\api\controller\goods\Rank@getRankConfig');

    /***************************************************** 满减送 ****************************************************/

    // 获取商品满减优惠信息
    Route::get('manjian/info', 'addon\shop\app\api\controller\marketing\Manjian@info');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class)//false表示不验证登录
    ->middleware(ApiLog::class);
