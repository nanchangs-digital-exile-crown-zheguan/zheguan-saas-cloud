<?php
declare ( strict_types = 1 );

namespace addon\shop\app\listener\customer_panel;

/**
 * 客服面板 tab 注册监听器
 * 商城插件通过 ShopCustomerPanelTab 事件向客服系统（shop_customer）注册自己的面板：
 * - order 订单：客服在聊天右侧查看该会员的商城订单
 * - goods 商品：客服查询商品辅助解答
 * 返回内容（tab_key/tab_name/view 等）完全由本插件决定，客服侧只负责聚合并动态渲染本插件视图。
 */
class ShopCustomerPanelTab
{
    public function handle($data = [])
    {
        return [
            // 商城订单（view 为插件内视图路径，相对 admin/src/addon/shop/views 目录）
            [
                'tab_key'   => 'order',                       // tab 分组键：商城/o2o/外卖订单共用 order，由客服侧合并
                'tab_name'  => '订单',                        // tab 显示名
                'tab_sort'  => 100,                           // tab 排序（大在前）
                'addon'     => 'shop',                        // 来源插件标识
                'addon_name'=> '商城',                        // 来源子标签显示名
                'view'      => 'customer_panel/order',        // 面板视图：客服侧用 loadAddonView 直接动态渲染
                'sort'      => 100,                           // 同 tab 内来源排序（小在前）
            ],
            // 商品
            [
                'tab_key'   => 'goods',
                'tab_name'  => '商品',
                'tab_sort'  => 90,
                'addon'     => 'shop',
                'addon_name'=> '商城',
                'view'      => 'customer_panel/goods',
                'sort'      => 100,
            ],
        ];
    }
}
