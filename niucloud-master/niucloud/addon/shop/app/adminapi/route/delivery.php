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
 * 商城系统 - 配送相关接口
 */
Route::group('shop', function () {

    /************************************************** 配送相关接口 *****************************************************/
    //物流公司 分页列表
    Route::get('delivery/company', 'addon\shop\app\adminapi\controller\delivery\Company@pages');

    //物流公司 列表
    Route::get('delivery/company/list', 'addon\shop\app\adminapi\controller\delivery\Company@lists');

    //物流公司 详情
    Route::get('delivery/company/:id', 'addon\shop\app\adminapi\controller\delivery\Company@info');

    //物流公司 添加
    Route::post('delivery/company', 'addon\shop\app\adminapi\controller\delivery\Company@add');

    //物流公司 编辑
    Route::put('delivery/company/:id', 'addon\shop\app\adminapi\controller\delivery\Company@edit');

    //物流公司 删除
    Route::delete('delivery/company/:id', 'addon\shop\app\adminapi\controller\delivery\Company@del');

    //物流查询服务商列表
    Route::get('delivery/search', 'addon\shop\app\adminapi\controller\delivery\DeliverySearch@lists');
    //物流查询服务商配置
    Route::get('delivery/search/:type', 'addon\shop\app\adminapi\controller\delivery\DeliverySearch@getConfig');
    Route::put('delivery/search/:type', 'addon\shop\app\adminapi\controller\delivery\DeliverySearch@setConfig');
    // 兼容旧管理端的扁平配置提交
    Route::post('delivery/search', 'addon\shop\app\adminapi\controller\delivery\DeliverySearch@setLegacyConfig');

    //运费模版 分页列表
    Route::get('shipping/template', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@pages');

    //运费模版 列表
    Route::get('shipping/template/list', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@lists');

    //运费模版 详情
    Route::get('shipping/template/:template_id', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@info');

    //运费模版 添加
    Route::post('shipping/template', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@add');

    //运费模版 编辑
    Route::put('shipping/template/:template_id', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@edit');

    //运费模版 删除
    Route::delete('shipping/template/:template_id', 'addon\shop\app\adminapi\controller\delivery\ShippingTemplate@del');

    /************************************************** 提货点 *****************************************************/
    //提货点列表（分页）
    Route::get('delivery/store', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@lists');

    //提货点初始化数据
    Route::get('delivery/store/init', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@init');

    //提货点列表（不分页）
    Route::get('delivery/store/list', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@getList');

    //提货点详情
    Route::get('delivery/store/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@info');

    //添加提货点
    Route::post('delivery/store', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@add');

    //编辑提货点
    Route::put('delivery/store/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@edit');

    //删除提货点
    Route::delete('delivery/store/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@del');

    //提货点提货类型
    Route::get('delivery/store/pick_up_type', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@getPickUpType');

    //修改提货点状态
    Route::put('delivery/store/modify_status', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryStore@modifyStatus');

    /************************************************** 配送服务商 *****************************************************/
    //获取配送服务商列表
    Route::get('delivery_store/delivery_service_list/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryService@getDeliveryServiceList');

    //配送门店开通配送服务
    Route::put('delivery_store/delivery_shop_open/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryService@deliveryServiceOpen');

    //配送门店品类修改
    Route::put('delivery_store/delivery_shop_edit/:id', 'addon\shop\app\adminapi\controller\delivery_store\DeliveryService@deliveryServiceEdit');

    /************************************************** 配送设置 *****************************************************/
    //物流配置
    Route::get('delivery/deliveryList', 'addon\shop\app\adminapi\controller\delivery\Delivery@getDeliveryList');
    Route::put('delivery/setConfig', 'addon\shop\app\adminapi\controller\delivery\Delivery@setDeliveryConfig');

    //获取配送方式
    Route::get('delivery/delivery_type', 'addon\shop\app\adminapi\controller\delivery\Delivery@getDeliveryType');

    /************************************************** 同城配送 *******************************************************/

    // 获取同城配送设置
    Route::get('local_delivery/config', 'addon\shop\app\adminapi\controller\local_delivery\config\Local@getLocal');

    // 设置同城配送
    Route::put('local_delivery/config', 'addon\shop\app\adminapi\controller\local_delivery\config\Local@setLocal');

    // 获取同城配送基础配置
    Route::get('local_delivery/base_config', 'addon\shop\app\adminapi\controller\local_delivery\config\Config@getConfig');

    // 设置同城配送基础配置
    Route::put('local_delivery/base_config', 'addon\shop\app\adminapi\controller\local_delivery\config\Config@setConfig');

    //获取已启用配送服务商列表
    Route::get('local_delivery/list', 'addon\shop\app\adminapi\controller\local_delivery\service\LocalDeliveryService@getInUseList');

    //同城配送服务商列表
    Route::get('local_delivery/service', 'addon\shop\app\adminapi\controller\local_delivery\service\LocalDeliveryService@lists');

    //同城配送服务商配置
    Route::get('local_delivery/service/:delivery_type', 'addon\shop\app\adminapi\controller\local_delivery\service\LocalDeliveryService@getConfig');

    //同城配送服务商配置修改
    Route::put('local_delivery/service/:delivery_type', 'addon\shop\app\adminapi\controller\local_delivery\service\LocalDeliveryService@setConfig');

    // 同城配送订单
    Route::get('local_delivery/order', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@pages');

    // 同城配送订单详情
    Route::get('local_delivery/order/:id', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@info');

    // 同城配送订单同步
    Route::put('local_delivery/order/sync/:id', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@syncOrder');

    // 同城配送订单取消原因
    Route::get('local_delivery/order/cancel_reason', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@getCancelReasonList');

    // 同城配送订单取消
    Route::put('local_delivery/order/cancel/:id', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@closeOrder');

    // 同城配送订单完成
    Route::put('local_delivery/order/finish/:id', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@finishOrder');

    // 同城配送订单状态列表
    Route::get('local_delivery/order/status', 'addon\shop\app\adminapi\controller\local_delivery\order\LocalDeliveryOrder@getOrderStatusList');

    /************************************************** 商家配送 *******************************************************/

    //配送员分页列表
    Route::get('shop_delivery/staff', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@pages');

    //配送员列表
    Route::get('shop_delivery/staff/list', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@lists');

    //配送员详情
    Route::get('shop_delivery/staff/:id', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@info');

    //添加配送员
    Route::post('shop_delivery/staff', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@add');

    //编辑配送员
    Route::put('shop_delivery/staff/:id', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@edit');

    //删除配送员
    Route::delete('shop_delivery/staff/:id', 'addon\shop\app\adminapi\controller\shop_delivery\deliver\Deliver@del');

    // 商家配送订单
    Route::get('shop_delivery/order', 'addon\shop\app\adminapi\controller\shop_delivery\order\ShopDeliveryOrder@pages');

    // 商家配送订单详情
    Route::get('shop_delivery/order/:id', 'addon\shop\app\adminapi\controller\shop_delivery\order\ShopDeliveryOrder@info');

    // 商家配送订单取消
    Route::put('shop_delivery/order/cancel/:id', 'addon\shop\app\adminapi\controller\shop_delivery\order\ShopDeliveryOrder@closeOrder');

    // 商家配送订单完成
    Route::put('shop_delivery/order/finish/:id', 'addon\shop\app\adminapi\controller\shop_delivery\order\ShopDeliveryOrder@finishOrder');

    // 商家配送订单状态列表
    Route::get('shop_delivery/order/status', 'addon\shop\app\adminapi\controller\shop_delivery\order\ShopDeliveryOrder@getOrderStatusList');

//    Route::get('third/init', 'addon\shop\app\adminapi\controller\delivery\Local@getThirdPartyInit');

    /************************************************** 接口管理 *******************************************************/

    // 电子面单 分页列表
    Route::get('electronic_sheet', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@pages');

    // 电子面单 列表
    Route::get('electronic_sheet/list', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@lists');

    // 电子面单 详情
    Route::get('electronic_sheet/:id', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@info');

    // 电子面单 添加
    Route::post('electronic_sheet', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@add');

    // 电子面单 编辑
    Route::put('electronic_sheet/:id', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@edit');

    // 电子面单 删除
    Route::delete('electronic_sheet/:id', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@del');

    // 电子面单 设为默认模板
    Route::put('electronic_sheet/setDefault/:id', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@setDefault');

    // 电子面单 获取设置
    Route::get('electronic_sheet/config', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@getConfig');

    // 电子面单 设置
    Route::post('electronic_sheet/config', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@setConfig');

    // 电子面单 获取邮费支付方式类型
    Route::get('electronic_sheet/paytype', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@getPayType');

    // 电子面单 打印
    Route::post('electronic_sheet/print', 'addon\shop\app\adminapi\controller\delivery\ElectronicSheet@printElectronicSheet');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
