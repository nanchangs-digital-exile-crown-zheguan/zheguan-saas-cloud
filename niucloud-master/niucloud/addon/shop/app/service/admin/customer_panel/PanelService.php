<?php
declare ( strict_types = 1 );

namespace addon\shop\app\service\admin\customer_panel;

use addon\shop\app\model\order\Order;
use core\base\BaseAdminService;

/**
 * 客服聊天面板 - 商城数据服务
 * 供客服系统（shop_customer）右侧 iframe 面板按会员查询商城数据，
 * 独立于商城后台订单列表逻辑，避免影响原有订单管理。
 */
class PanelService extends BaseAdminService
{
    /**
     * 某会员的商城订单分页列表（客服面板用）
     * @param array $where 查询条件（member_id 必传；status 订单状态；order_no 订单编号关键词）
     * @return array
     */
    public function getMemberOrderPage(array $where = []): array
    {
        $model = new Order();
        $search = $model
            ->where([
                [ 'site_id', '=', $this->site_id ],
                [ 'member_id', '=', (int) ($where[ 'member_id' ] ?? 0) ],
            ])
            // 订单状态/订单编号搜索条件由模型搜索器统一处理，便于后续扩展筛选字段
            ->withSearch([ 'status', 'order_no' ], $where)
            ->field('order_id,order_no,status,order_type,order_from,order_money,pay_money,goods_money,delivery_money,member_id,create_time,pay_time,delivery_type,taker_name,shop_remark,activity_type,close_type')
            ->with([
                'order_goods' => function ($query) {
                    $query->field('order_goods_id,order_id,goods_id,goods_name,sku_name,goods_image,price,num,goods_money,goods_type,status,site_id')
                        ->append([ 'goods_image_thumb_small', 'status_name' ]);
                },
            ])
            ->append([ 'status_name', 'order_type_name', 'order_from_name', 'delivery_type_name' ])
            ->order('create_time desc');
        return $this->pageQuery($search);
    }
}
