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
namespace addon\shop\app\listener;

use app\service\core\site\CoreSiteService;

/**
 * 站点初始化
 */
class SiteInitListener
{
    protected $tables = [
        'shop_address', // 商家地址库
        'shop_cart', // 购物车表
        'shop_coupon', // 优惠券表
        'shop_coupon_goods', // 优惠券商品关联表
        'shop_coupon_member', // 优惠券会员记录
        'shop_coupon_send_records', // 优惠券发券记录
        'shop_delivery_company', // 快递公司
        'shop_delivery_deliver', // 配送员表
        'shop_delivery_electronic_sheet', // 电子面单
        'shop_delivery_local_delivery', // 同城配送配置
        'shop_delivery_shipping_template', // 运费模板
        'shop_delivery_shipping_template_item', // 运费模板明细
        'shop_discount', // 限时折扣主表
        'shop_discount_goods', // 限时折扣商品
        'shop_goods', // 商品主表
        'shop_goods_attr', // 商品参数
        'shop_goods_brand', // 商品品牌
        'shop_goods_browse', // 商品浏览历史
        'shop_goods_category', // 商品分类
        'shop_goods_collect', // 商品收藏
        'shop_goods_evaluate', // 商品评价
        'shop_goods_label', // 商品标签
        'shop_goods_label_group', // 标签分组
        'shop_goods_rank', // 商品排行榜
        'shop_goods_service', // 商品服务
        'shop_goods_sku', // 商品SKU
        'shop_goods_spec', // 商品规格
        'shop_goods_stat', // 商品统计
        'shop_invoice', // 发票表
        'shop_manjian', // 满减活动
        'shop_manjian_goods', // 满减商品
        'shop_manjian_give_records', // 满减赠送记录
        'shop_newcomer_member_records', // 新人专享记录
        'shop_order', // 订单主表
        'shop_order_batch_delivery', // 批量发货
        'shop_order_delivery', // 订单发货
        'shop_order_discount', // 订单优惠
        'shop_order_discount_goods', // 订单项优惠
        'shop_order_goods', // 订单商品项
        'shop_order_refund', // 订单退款
        'shop_point_exchange', // 积分兑换
        'shop_point_exchange_order', // 积分订单
        'shop_stat', // 店铺统计
        'shop_store', // 自提门店
        'shop_active', // 营销活动
        'shop_active_goods', // 活动商品
    ];

    public function handle($params = [])
    {
        if (in_array('shop', $params[ 'main_app' ])) {
            $site_id = $params[ 'site_id' ];

            (new CoreSiteService())->siteInitBySiteId($site_id, $this->tables);

            event("AddSiteAfter", [ 'site_id' => $site_id, 'main_app' => [ 'shop' ], 'site_addons' => [] ]);

            return true;
        }
    }
}
