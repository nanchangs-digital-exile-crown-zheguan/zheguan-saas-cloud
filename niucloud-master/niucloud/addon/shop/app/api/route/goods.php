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
 * 商城系统 - 商品相关接口
 */
Route::group('shop', function () {

    /***************************************************** 商品 ****************************************************/

    // 获取商品列表
    Route::get('goods/pages', 'addon\shop\app\api\controller\goods\Goods@pages');

    // 获取商品详情
    Route::get('goods/detail', 'addon\shop\app\api\controller\goods\Goods@detail');

    // 获取商品详情
    Route::get('goods/sku/:sku_id', 'addon\shop\app\api\controller\goods\Goods@sku');

    // 获取商品分类配置
    Route::get('goods/category/config', 'addon\shop\app\api\controller\goods\GoodsCategory@getGoodsCategoryConfig');

    // 获取商品分类树结构
    Route::get('goods/category/tree', 'addon\shop\app\api\controller\goods\GoodsCategory@tree');

    // 获取商品分类列表
    Route::get('goods/category/list', 'addon\shop\app\api\controller\goods\GoodsCategory@lists');

    // 获取商品服务列表
    Route::get('goods/service', 'addon\shop\app\api\controller\goods\GoodsService@all');

    // 获取推荐商品列表
    Route::get('goods/recommend', 'addon\shop\app\api\controller\goods\Goods@recommend');

    // 获取商品列表供组件调用
    Route::get('goods/components', 'addon\shop\app\api\controller\goods\Goods@components');

    // 获取商品搜索配置
    Route::get('goods/config/search', 'addon\shop\app\api\controller\goods\Config@getSearchConfig');

    /***************************************************** 评价 ****************************************************/
    // 获取 评价设置
    Route::get('goods/evaluate/config', 'addon\shop\app\api\controller\Config@evaluate');

    // 获取 评价列表
    Route::get('goods/evaluate', 'addon\shop\app\api\controller\goods\Evaluate@pages');

    // 获取 评价列表
    Route::get('goods/evaluate/list', 'addon\shop\app\api\controller\goods\Evaluate@lists');

    // 获取 评价数量
    Route::get('goods/evaluate/count', 'addon\shop\app\api\controller\goods\Evaluate@count');

    // 获取 评价详情（评价）
    Route::get('goods/evaluate/:id', 'addon\shop\app\api\controller\goods\Evaluate@info');

    // 添加 商品评价
    Route::post('goods/evaluate', 'addon\shop\app\api\controller\goods\Evaluate@add');

    // 评价 （订单页）
    Route::get('order/evaluate/:id', 'addon\shop\app\api\controller\goods\Evaluate@getEvaluate');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class)//false表示不验证登录
    ->middleware(ApiLog::class);
