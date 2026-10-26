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
 * 商城系统 - 营销相关接口
 */
Route::group('shop', function () {

    //营销中心
    Route::get('marketing', 'addon\shop\app\adminapi\controller\marketing\Index@index');

    /************************************************** 优惠券相关接口 *****************************************************/
    //优惠券列表
    Route::get('goods/coupon', 'addon\shop\app\adminapi\controller\marketing\Coupon@lists');

    //优惠券初始化信息
    Route::get('goods/coupon/init', 'addon\shop\app\adminapi\controller\marketing\Coupon@init');

    //添加优惠券
    Route::post('goods/coupon', 'addon\shop\app\adminapi\controller\marketing\Coupon@add');

    //优惠券领取记录
    Route::get('goods/coupon/records', 'addon\shop\app\adminapi\controller\marketing\Coupon@getMemberCoupon');

    //优惠券详情
    Route::get('goods/coupon/detail/:id', 'addon\shop\app\adminapi\controller\marketing\Coupon@info');

    //编辑优惠券
    Route::put('goods/coupon/edit/:id', 'addon\shop\app\adminapi\controller\marketing\Coupon@edit');

    //删除优惠券基于有批量删除
    Route::post('goods/coupon/delete', 'addon\shop\app\adminapi\controller\marketing\Coupon@del');

    //优惠券设置状态
    Route::put('goods/coupon/setstatus/:status', 'addon\shop\app\adminapi\controller\marketing\Coupon@setCouponStatus');

    //优惠券失效
    Route::put('goods/coupon/invalid', 'addon\shop\app\adminapi\controller\marketing\Coupon@couponInvalid');

    //删除优惠券
    Route::delete('goods/coupon/:id', 'addon\shop\app\adminapi\controller\marketing\Coupon@del');

    //查询优惠券选择分页列表
    Route::get('goods/coupon/select', 'addon\shop\app\adminapi\controller\marketing\Coupon@select');

    //查询选中的优惠券
    Route::get('goods/coupon/selected', 'addon\shop\app\adminapi\controller\marketing\Coupon@getSelectedLists');

    //优惠券状态列表
    Route::get('goods/coupon/status', 'addon\shop\app\adminapi\controller\marketing\Coupon@getCouponStatus');

    //发送优惠券范围列表
    Route::get('goods/coupon/send/init', 'addon\shop\app\adminapi\controller\marketing\Coupon@getSendRangeInit');
    Route::get('goods/coupon/send/pages/:coupon_id', 'addon\shop\app\adminapi\controller\marketing\Coupon@getSendPages');
    Route::post('goods/coupon/send/:coupon_id', 'addon\shop\app\adminapi\controller\marketing\Coupon@sendCoupon');

    //商家地址库列表
    Route::get('shop_address', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@lists');

    //商家地址库详情
    Route::get('shop_address/:id', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@info');

    //添加商家地址库
    Route::post('shop_address', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@add');

    //编辑商家地址库
    Route::put('shop_address/:id', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@edit');

    //删除商家地址库
    Route::delete('shop_address/:id', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@del');

    // 默认发货地址
    Route::get('shop_address/default/delivery', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@defaultDelivery');

    //获取商家收货地址库
    Route::get('order/refund/address', 'addon\shop\app\adminapi\controller\shop_address\ShopAddress@getList');

    /************************************************** 限时折扣 *****************************************************/
    //限时折扣列表
    Route::get('active/discount', 'addon\shop\app\adminapi\controller\marketing\Discount@lists');

    //添加
    Route::post('active/discount', 'addon\shop\app\adminapi\controller\marketing\Discount@add');

    //编辑
    Route::put('active/discount/:discount_id', 'addon\shop\app\adminapi\controller\marketing\Discount@edit');

    //限时折扣商品校验
    Route::post('active/discount/goods/check', 'addon\shop\app\adminapi\controller\marketing\Discount@checkGoods');

    //删除
    Route::delete('active/discount/:discount_id', 'addon\shop\app\adminapi\controller\marketing\Discount@del');

    //获取限时折扣状态列表
    Route::get('active/discount/status', 'addon\shop\app\adminapi\controller\marketing\Discount@discountStatus');

    //关闭
    Route::put('active/discount/close/:discount_id', 'addon\shop\app\adminapi\controller\marketing\Discount@close');

    //批量删除
    Route::post('active/discount/batchDelete', 'addon\shop\app\adminapi\controller\marketing\Discount@batchDelete');

    //批量关闭
    Route::post('active/discount/batchClose', 'addon\shop\app\adminapi\controller\marketing\Discount@batchClose');

    //详情-基础信息
    Route::get('active/discount/info/:discount_id', 'addon\shop\app\adminapi\controller\marketing\Discount@info');

    //详情
    Route::get('active/discount/:discount_id', 'addon\shop\app\adminapi\controller\marketing\Discount@detail');

    //状态
    Route::get('active/status', 'addon\shop\app\adminapi\controller\marketing\Discount@status');

    //参与订单
    Route::get('active/discount/order/:active_id', 'addon\shop\app\adminapi\controller\marketing\Discount@order');

    //参与会员
    Route::get('active/discount/member/:active_id', 'addon\shop\app\adminapi\controller\marketing\Discount@member');

    //参与商品
    Route::get('active/discount/goods/:active_id', 'addon\shop\app\adminapi\controller\marketing\Discount@goods');

    //获取配置
    Route::get('active/discount/config', 'addon\shop\app\adminapi\controller\marketing\Discount@banner');

    //设置配置
    Route::put('active/discount/config', 'addon\shop\app\adminapi\controller\marketing\Discount@setBanner');


    /************************************************** 积分商城 *****************************************************/
    //积分商城列表
    Route::get('active/exchange', 'addon\shop\app\adminapi\controller\marketing\Exchange@lists');

    //积分商城分页列表（用于弹框选择）
    Route::get('active/exchange/select', 'addon\shop\app\adminapi\controller\marketing\Exchange@select');

    //商品类型
    Route::get('active/exchange/type', 'addon\shop\app\adminapi\controller\marketing\Exchange@type');

    //商品类型
    Route::get('active/exchange/status', 'addon\shop\app\adminapi\controller\marketing\Exchange@status');

    //添加积分商城
    Route::post('active/exchange', 'addon\shop\app\adminapi\controller\marketing\Exchange@add');

    //积分商城详情
    Route::get('active/exchange/:id', 'addon\shop\app\adminapi\controller\marketing\Exchange@detail');

    //编辑积分商城
    Route::put('active/exchange/:id', 'addon\shop\app\adminapi\controller\marketing\Exchange@edit');

    //修改积分商城上下架状态
    Route::put('active/exchange/status/:id', 'addon\shop\app\adminapi\controller\marketing\Exchange@editStatus');

    //删除
    Route::delete('active/exchange/:id', 'addon\shop\app\adminapi\controller\marketing\Exchange@del');

    //批量删除
    Route::post('active/exchange/batchDelete', 'addon\shop\app\adminapi\controller\marketing\Exchange@batchDelete');

    //批量下架
    Route::post('active/exchange/batchDown', 'addon\shop\app\adminapi\controller\marketing\Exchange@batchDown');

    //批量上架
    Route::post('active/exchange/batchUp', 'addon\shop\app\adminapi\controller\marketing\Exchange@batchUp');

    //修改排序号
    Route::put('active/exchange/sort/:id', 'addon\shop\app\adminapi\controller\marketing\Exchange@modifySort');

    /************************************************** 新人专享 *****************************************************/
    //新人专享配置
    Route::get('active/newcomer/config', 'addon\shop\app\adminapi\controller\marketing\Newcomer@getConfig');

    //新人专享设置
    Route::put('active/newcomer/config', 'addon\shop\app\adminapi\controller\marketing\Newcomer@setConfig');

    //新人专享商品选择列表
    Route::get('active/newcomer/goods/select', 'addon\shop\app\adminapi\controller\marketing\Newcomer@select');

    //新人专享商品选择已选商品列表
    Route::get('active/newcomer/goods/selectgoodssku', 'addon\shop\app\adminapi\controller\marketing\Newcomer@selectGoodsSku');

    /************************************************** 满减送 *****************************************************/
    //满减送列表
    Route::get('manjian', 'addon\shop\app\adminapi\controller\marketing\Manjian@lists');

    //关闭满减送
    Route::put('manjian/close/:id', 'addon\shop\app\adminapi\controller\marketing\Manjian@closeManjian');

    //删除满减送
    Route::delete('manjian/:id', 'addon\shop\app\adminapi\controller\marketing\Manjian@del');

    //满减送详情
    Route::get('manjian/:id', 'addon\shop\app\adminapi\controller\marketing\Manjian@info');

    //满减送参与会员
    Route::get('manjian/member/:id', 'addon\shop\app\adminapi\controller\marketing\Manjian@member');

    //添加满减送
    Route::post('manjian', 'addon\shop\app\adminapi\controller\marketing\Manjian@add');

    //编辑满减送
    Route::put('manjian/:id', 'addon\shop\app\adminapi\controller\marketing\Manjian@edit');

    //获取编辑数据
    Route::get('manjian/init', 'addon\shop\app\adminapi\controller\marketing\Manjian@init');

    //状态
    Route::get('manjian/status', 'addon\shop\app\adminapi\controller\marketing\Manjian@status');

    //满减送商品校验
    Route::post('manjian/goods/check', 'addon\shop\app\adminapi\controller\marketing\Manjian@checkGoods');

    //满减送批量关闭
    Route::put('manjian/goods/batchClose', 'addon\shop\app\adminapi\controller\marketing\Manjian@batchClose');

    //满减送批量删除
    Route::put('manjian/goods/batchDelete', 'addon\shop\app\adminapi\controller\marketing\Manjian@batchDelete');


})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
