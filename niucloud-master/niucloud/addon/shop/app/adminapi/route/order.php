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
 * 商城系统 - 订单相关接口
 */
Route::group('shop', function () {

    /************************************************** 订单相关接口 *****************************************************/
    //交易配置
    Route::post('order/config', 'addon\shop\app\adminapi\controller\order\Config@setConfig');
    Route::get('order/config', 'addon\shop\app\adminapi\controller\order\Config@getConfig');

    //订单列表
    Route::get('order/list', 'addon\shop\app\adminapi\controller\order\Order@lists');

    //订单详情
    Route::get('order/detail/:id', 'addon\shop\app\adminapi\controller\order\Order@detail');

    //订单删除
    Route::post('order/delete', 'addon\shop\app\adminapi\controller\order\Order@delete');

    //获取 订单类型
    Route::get('order/type', 'addon\shop\app\adminapi\controller\order\Order@getOrderType');

    //获取 订单状态
    Route::get('order/status', 'addon\shop\app\adminapi\controller\order\Order@getOrderStatus');

    //订单关闭
    Route::put('order/close/:id', 'addon\shop\app\adminapi\controller\order\Order@orderClose');

    //订单改价
    Route::put('order/edit_price', 'addon\shop\app\adminapi\controller\order\Order@editPrice');

    //订单配送修改
    Route::put('order/edit_delivery', 'addon\shop\app\adminapi\controller\order\Order@editDelivery');

    //订单配送修改信息
    Route::get('order/edit_delivery', 'addon\shop\app\adminapi\controller\order\Order@editDeliveryData');

    //订单发货
    Route::put('order/delivery', 'addon\shop\app\adminapi\controller\order\Order@orderDelivery');

    //订单项发货
    Route::put('order/goods/delivery/:id', 'addon\shop\app\adminapi\controller\order\Order@orderDelivery');

    //获取订单配送方式
    Route::get('order/delivery_type', 'addon\shop\app\adminapi\controller\order\Order@getDeliveryType');

    //获取已选订单项总重量
    Route::get('order/select/weight', 'addon\shop\app\adminapi\controller\order\Order@getSelectOrderGoodsWeight');

    //同城配送费用计算
    Route::get('order/delivery/fee', 'addon\shop\app\adminapi\controller\order\Order@getDeliveryFee');

    //商家留言
    Route::put('order/shop_remark', 'addon\shop\app\adminapi\controller\order\Order@setShopRemark');

    //订单完成
    Route::put('order/finish/:id', 'addon\shop\app\adminapi\controller\order\Order@orderFinish');

    //获取 物流包裹信息（跟踪信息）
    Route::get('order/delivery/package', 'addon\shop\app\adminapi\controller\order\Order@getOrderPackage');

    //获取 物流包裹列表
    Route::get('order/delivery/package/list', 'addon\shop\app\adminapi\controller\order\Order@getDeliveryPackageList');

    //获取 支付类型
    Route::get('order/pay/type', 'addon\shop\app\adminapi\controller\order\Order@getPayType');

    //获取 订单来源
    Route::get('order/from', 'addon\shop\app\adminapi\controller\order\Order@getOrderFrom');

    //订单售后 列表
    Route::get('order/refund', 'addon\shop\app\adminapi\controller\refund\Refund@lists');

    //订单售后 详情
    Route::get('order/refund/:id', 'addon\shop\app\adminapi\controller\refund\Refund@detail');

    //订单售后审核
    Route::put('order/refund/audit/:order_refund_no', 'addon\shop\app\adminapi\controller\refund\Refund@auditApply');

    //订单售后审核
    Route::put('order/refund/delivery/:order_refund_no', 'addon\shop\app\adminapi\controller\refund\Refund@auditRefundGoods');

    //订单售后 可退款金额
    Route::get('order/refund/refund_money', 'addon\shop\app\adminapi\controller\refund\Refund@getOrderRefundMoney');

    //订单售后 商家主动退款
    Route::post('order/refund/active', 'addon\shop\app\adminapi\controller\refund\Refund@shopActiveRefund');
    //关闭售后
    Route::put('order/refund/close/:order_refund_no', 'addon\shop\app\adminapi\controller\refund\Refund@closeRefund');

    /************************************************** 订单发货批量操作相关接口 *****************************************************/

    //订单批量操作 列表
    Route::get('order_batch_delivery', 'addon\shop\app\adminapi\controller\order\Order@getOrderBatchDeliveryPage');

    //订单批量操作 详情
    Route::get('order_batch_delivery/:id', 'addon\shop\app\adminapi\controller\order\Order@getOrderBatchDeliveryInfo');

    //批量发货
    Route::put('order_batch_delivery/add_batch_order_delivery', 'addon\shop\app\adminapi\controller\order\Order@addBatchOrderDelivery');

    //订单批量操作类型
    Route::get('order_batch_delivery/get_type', 'addon\shop\app\adminapi\controller\order\Order@getBatchType');

    //订单批量操作状态
    Route::get('order_batch_delivery/get_status', 'addon\shop\app\adminapi\controller\order\Order@getBatchStatus');

    // 发票列表
    Route::get('invoice', 'addon\shop\app\adminapi\controller\order\Invoice@lists');
    //添加发票
    Route::post('invoice/add', 'addon\shop\app\adminapi\controller\order\Invoice@add');

    // 发票信息
    Route::get('invoice/:id', 'addon\shop\app\adminapi\controller\order\Invoice@info');

    // 开票
    Route::put('invoice/:id', 'addon\shop\app\adminapi\controller\order\Invoice@invoicing');

    Route::post('invoice/audit', 'addon\shop\app\adminapi\controller\order\Invoice@audit');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
