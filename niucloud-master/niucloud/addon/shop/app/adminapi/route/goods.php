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
 * 商城系统 - 商品相关接口
 */
Route::group('shop', function () {

    //商品分页列表
    Route::get('goods', 'addon\shop\app\adminapi\controller\goods\Goods@pages');

    //商品详情
    Route::get('goods/:id', 'addon\shop\app\adminapi\controller\goods\Goods@info');

    //添加实物商品
    Route::post('goods', 'addon\shop\app\adminapi\controller\goods\Goods@add');

    //编辑实物商品
    Route::put('goods/:id', 'addon\shop\app\adminapi\controller\goods\Goods@edit');

    // 商品添加/编辑数据
    Route::get('goods/init', 'addon\shop\app\adminapi\controller\goods\Goods@init');

    //添加虚拟商品
    Route::post('goods/virtual', 'addon\shop\app\adminapi\controller\goods\VirtualGoods@add');

    //编辑虚拟商品
    Route::put('goods/virtual/:id', 'addon\shop\app\adminapi\controller\goods\VirtualGoods@edit');

    // 商品添加/编辑数据
    Route::get('goods/virtual/init', 'addon\shop\app\adminapi\controller\goods\VirtualGoods@init');

    //删除商品
    Route::put('goods/delete', 'addon\shop\app\adminapi\controller\goods\Goods@del');

    // 回收站商品分页列表
    Route::get('goods/recycle', 'addon\shop\app\adminapi\controller\goods\Goods@recyclePages');

    //商品恢复
    Route::put('goods/recycle', 'addon\shop\app\adminapi\controller\goods\Goods@recycle');

    // 修改商品排序号
    Route::put('goods/sort', 'addon\shop\app\adminapi\controller\goods\Goods@editSort');

    // 修改商品上下架状态
    Route::put('goods/status', 'addon\shop\app\adminapi\controller\goods\Goods@editStatus');

    // 修改商品上下架状态（单商品）
    Route::put('goods/single/status', 'addon\shop\app\adminapi\controller\goods\Goods@editSingleStatus');

    // 复制商品
    Route::put('goods/copy/:goods_id', 'addon\shop\app\adminapi\controller\goods\Goods@copy');

    // 获取商品选择分页列表
    Route::get('goods/select', 'addon\shop\app\adminapi\controller\goods\Goods@select');

    // 获取商品选择分页列表带sku
    Route::get('goods/selectgoodssku', 'addon\shop\app\adminapi\controller\goods\Goods@selectGoodsSku');

    // 获取商品SKU规格列表
    Route::get('goods/sku', 'addon\shop\app\adminapi\controller\goods\Goods@sku');

    // 编辑商品规格列表库存
    Route::put('goods/sku/stock', 'addon\shop\app\adminapi\controller\goods\Goods@editGoodsListStock');

    // 编辑商品规格列表价格
    Route::put('goods/sku/price', 'addon\shop\app\adminapi\controller\goods\Goods@editGoodsListPrice');

    // 编辑商品规格列表会员价格
    Route::put('goods/sku/member_price', 'addon\shop\app\adminapi\controller\goods\Goods@editGoodsListMemberPrice');

    // 获取商品SKU规格列表
    Route::get('goods/active/count', 'addon\shop\app\adminapi\controller\goods\Goods@getActiveGoodsCount');

    // 获取商品类型
    Route::get('goods/type', 'addon\shop\app\adminapi\controller\goods\Goods@type');

    //校验商品编码
    Route::post('goods/verify/skuno', 'addon\shop\app\adminapi\controller\goods\Goods@verifySkuNo');

    //商品搜索配置
    Route::get('goods/config/search', 'addon\shop\app\adminapi\controller\goods\Config@getSearchConfig');
    Route::post('goods/config/search', 'addon\shop\app\adminapi\controller\goods\Config@setSearchConfig');

    //商品编码配置
    Route::get('goods/config/unique', 'addon\shop\app\adminapi\controller\goods\Config@getUniqueConfig');
    Route::post('goods/config/unique', 'addon\shop\app\adminapi\controller\goods\Config@setUniqueConfig');

    //商品排序配置
    Route::get('goods/config/sort', 'addon\shop\app\adminapi\controller\goods\Config@getSortConfig');
    Route::post('goods/config/sort', 'addon\shop\app\adminapi\controller\goods\Config@setSortConfig');

    //商品标签分页列表
    Route::get('goods/label', 'addon\shop\app\adminapi\controller\goods\Label@pages');

    //商品标签列表
    Route::get('goods/label/list', 'addon\shop\app\adminapi\controller\goods\Label@lists');

    //商品标签详情
    Route::get('goods/label/:id', 'addon\shop\app\adminapi\controller\goods\Label@info');

    //添加商品标签
    Route::post('goods/label', 'addon\shop\app\adminapi\controller\goods\Label@add');

    //编辑商品标签
    Route::put('goods/label/:id', 'addon\shop\app\adminapi\controller\goods\Label@edit');

    //复制商品标签
    Route::post('goods/label/copy/:id', 'addon\shop\app\adminapi\controller\goods\Label@copy');

    //删除商品标签
    Route::delete('goods/label/:id', 'addon\shop\app\adminapi\controller\goods\Label@del');

    // 修改商品标签排序号
    Route::put('goods/label/sort', 'addon\shop\app\adminapi\controller\goods\Label@modifySort');

    // 修改商品标签排序号
    Route::put('goods/label/status', 'addon\shop\app\adminapi\controller\goods\Label@modifyStatus');

    //商品标签分组分页列表
    Route::get('goods/label/group', 'addon\shop\app\adminapi\controller\goods\LabelGroup@pages');

    //商品标签分组列表
    Route::get('goods/label/group/list', 'addon\shop\app\adminapi\controller\goods\LabelGroup@lists');

    //商品标签分组详情
    Route::get('goods/label/group/:id', 'addon\shop\app\adminapi\controller\goods\LabelGroup@info');

    //添加商品标签分组
    Route::post('goods/label/group', 'addon\shop\app\adminapi\controller\goods\LabelGroup@add');

    //编辑商品标签分组
    Route::put('goods/label/group/:id', 'addon\shop\app\adminapi\controller\goods\LabelGroup@edit');

    //删除商品标签分组
    Route::delete('goods/label/group/:id', 'addon\shop\app\adminapi\controller\goods\LabelGroup@del');

    // 修改商品标签分组排序号
    Route::put('goods/label/group/sort', 'addon\shop\app\adminapi\controller\goods\LabelGroup@modifySort');

    //商品品牌分页列表
    Route::get('goods/brand', 'addon\shop\app\adminapi\controller\goods\Brand@pages');

    //商品品牌列表
    Route::get('goods/brand/list', 'addon\shop\app\adminapi\controller\goods\Brand@lists');

    //商品品牌详情
    Route::get('goods/brand/:id', 'addon\shop\app\adminapi\controller\goods\Brand@info');

    //添加商品品牌
    Route::post('goods/brand', 'addon\shop\app\adminapi\controller\goods\Brand@add');

    //编辑商品品牌
    Route::put('goods/brand/:id', 'addon\shop\app\adminapi\controller\goods\Brand@edit');

    //删除商品品牌
    Route::delete('goods/brand/:id', 'addon\shop\app\adminapi\controller\goods\Brand@del');

    // 修改商品品牌排序号
    Route::put('goods/brand/sort', 'addon\shop\app\adminapi\controller\goods\Brand@modifySort');

    //商品服务分页列表
    Route::get('goods/service', 'addon\shop\app\adminapi\controller\goods\Service@pages');

    //商品服务列表
    Route::get('goods/service/list', 'addon\shop\app\adminapi\controller\goods\Service@lists');

    //商品服务详情
    Route::get('goods/service/:id', 'addon\shop\app\adminapi\controller\goods\Service@info');

    //添加商品服务
    Route::post('goods/service', 'addon\shop\app\adminapi\controller\goods\Service@add');

    //编辑商品服务
    Route::put('goods/service/:id', 'addon\shop\app\adminapi\controller\goods\Service@edit');

    //删除商品服务
    Route::delete('goods/service/:id', 'addon\shop\app\adminapi\controller\goods\Service@del');

    //商品分类列表树结构
    Route::get('goods/tree', 'addon\shop\app\adminapi\controller\goods\Category@tree');

    Route::get('goods/category', 'addon\shop\app\adminapi\controller\goods\Category@lists');

    //商品分类详情
    Route::get('goods/category/:id', 'addon\shop\app\adminapi\controller\goods\Category@info');

    //添加商品分类
    Route::post('goods/category', 'addon\shop\app\adminapi\controller\goods\Category@add');

    //编辑商品分类
    Route::put('goods/category/:id', 'addon\shop\app\adminapi\controller\goods\Category@edit');

    //删除商品分类
    Route::delete('goods/category/:id', 'addon\shop\app\adminapi\controller\goods\Category@del');

    //编辑商品分类
    Route::post('goods/category/update', 'addon\shop\app\adminapi\controller\goods\Category@editCategory');

    // 获取商品分类配置
    Route::post('goods/category/config', 'addon\shop\app\adminapi\controller\goods\Category@setGoodsCategoryConfig');

    // 获取商品分类配置
    Route::get('goods/category/config', 'addon\shop\app\adminapi\controller\goods\Category@getGoodsCategoryConfig');

    // 获取商品分类树结构供弹框调用
    Route::get('goods/category/components', 'addon\shop\app\adminapi\controller\goods\Category@components');

    // 商品参数分页列表
    Route::get('goods/attr', 'addon\shop\app\adminapi\controller\goods\Attr@pages');

    // 商品参数列表
    Route::get('goods/attr/list', 'addon\shop\app\adminapi\controller\goods\Attr@lists');

    // 商品参数详情
    Route::get('goods/attr/:id', 'addon\shop\app\adminapi\controller\goods\Attr@info');

    // 添加商品参数
    Route::post('goods/attr', 'addon\shop\app\adminapi\controller\goods\Attr@add');

    // 编辑商品参数
    Route::put('goods/attr/:id', 'addon\shop\app\adminapi\controller\goods\Attr@edit');

    // 删除商品参数
    Route::delete('goods/attr/:id', 'addon\shop\app\adminapi\controller\goods\Attr@del');

    // 修改商品参数排序号
    Route::put('goods/attr/sort', 'addon\shop\app\adminapi\controller\goods\Attr@modifySort');

    // 修改商品参数名称
    Route::put('goods/attr/attr_name', 'addon\shop\app\adminapi\controller\goods\Attr@modifyAttrName');

    // 修改商品参数值
    Route::put('goods/attr/attr_value', 'addon\shop\app\adminapi\controller\goods\Attr@modifyAttrValueFormat');

    // 获取商品下单选择分页列表
    Route::get('goods/buy/goods/select', 'addon\shop\app\adminapi\controller\goods\Goods@buyGoodsSelect');

    // 获取商品下单已选分页列表
    Route::get('goods/buy/goods/selected', 'addon\shop\app\adminapi\controller\goods\Goods@buyGoodsSelected');

    // 获取商品下单SKU规格列表
    Route::get('goods/buy/sku/select', 'addon\shop\app\adminapi\controller\goods\Goods@buySkuSelect');

    // 批量设置商品
    Route::put('goods/batchSet', 'addon\shop\app\adminapi\controller\goods\Goods@batchSet');

    //获取商品排行榜统计类型
    Route::get('goods/batchSet/dict', 'addon\shop\app\adminapi\controller\goods\Goods@getBatchSetDict');

    /************************************************** 商品排行榜 *****************************************************/

    // 排行榜配置
    Route::post('good/rank/config', 'addon\shop\app\adminapi\controller\goods\Rank@setRankConfig');

    Route::get('good/rank/config', 'addon\shop\app\adminapi\controller\goods\Rank@getRankConfig');

    // 排行榜分页列表
    Route::get('good/rank', 'addon\shop\app\adminapi\controller\goods\Rank@pages');

    Route::post('good/rank', 'addon\shop\app\adminapi\controller\goods\Rank@add');

    Route::put('good/rank/:id', 'addon\shop\app\adminapi\controller\goods\Rank@edit');

    Route::get('good/rank/:id', 'addon\shop\app\adminapi\controller\goods\Rank@info');

    Route::get('good/rank/dict', 'addon\shop\app\adminapi\controller\goods\Rank@getOptionData');

    Route::delete('good/rank/:id', 'addon\shop\app\adminapi\controller\goods\Rank@del');

    //排行榜修改排序
    Route::put('good/rank/sort', 'addon\shop\app\adminapi\controller\goods\Rank@editSort');

    //排行榜批量删除
    Route::put('good/rank/batchDelete', 'addon\shop\app\adminapi\controller\goods\Rank@batchDelete');

    //获取排行榜分页列表
    Route::get('good/rank/select', 'addon\shop\app\adminapi\controller\goods\Rank@select');

    // 修改排行榜状态
    Route::put('goods/rank/status', 'addon\shop\app\adminapi\controller\goods\Rank@modifyStatus');
/************************************************** 商品评价 *****************************************************/

    //商品评价 列表
    Route::get('goods/evaluate', 'addon\shop\app\adminapi\controller\goods\Evaluate@lists');

    //商品评价 添加
    Route::post('goods/evaluate', 'addon\shop\app\adminapi\controller\goods\Evaluate@add');

    //商品评价 删除
    Route::delete('goods/evaluate/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@del');

    //商品评价 回复
    Route::put('goods/evaluate/reply/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@evaluateReply');

    //商品评价 通过
    Route::put('goods/evaluate/adopt/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@adopt');

    //商品评价 拒绝
    Route::put('goods/evaluate/refuse/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@refuse');

    //商品评价 置顶
    Route::put('goods/evaluate/topping/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@topping');

    //获取商品评价审核状态
    Route::get('goods/evaluate/status', 'addon\shop\app\adminapi\controller\goods\Evaluate@status');

    //批量通过
    Route::post('goods/evaluate/batch/adopt', 'addon\shop\app\adminapi\controller\goods\Evaluate@batchAdopt');

    //批量拒绝
    Route::post('goods/evaluate/batch/refuse', 'addon\shop\app\adminapi\controller\goods\Evaluate@batchRefuse');

    //批量删除
    Route::post('goods/evaluate/batch/del', 'addon\shop\app\adminapi\controller\goods\Evaluate@batchDel');

    //商品评价 取消置顶
    Route::put('goods/evaluate/cancel_topping/:id', 'addon\shop\app\adminapi\controller\goods\Evaluate@cancelTopping');
    /************************************************** 商品统计 *****************************************************/

    //获取商品统计基本信息
    Route::get('goods/statistics/basic', 'addon\shop\app\adminapi\controller\goods\Statistics@getBasic');

    //获取商品统计图表信息
    Route::get('goods/statistics/trend', 'addon\shop\app\adminapi\controller\goods\Statistics@getTrend');

    //获取商品排行榜信息
    Route::get('goods/statistics/rank', 'addon\shop\app\adminapi\controller\goods\Statistics@getRank');

    //获取统计类型
    Route::get('goods/statistics/type', 'addon\shop\app\adminapi\controller\goods\Statistics@getType');

    //同步商品统计信息
    Route::post('goods/statistics/sync', 'addon\shop\app\adminapi\controller\goods\Statistics@syncStatGoods');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
