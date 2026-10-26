<?php
declare ( strict_types = 1 );

namespace addon\shop\app\adminapi\controller\customer_panel;

use addon\shop\app\service\admin\customer_panel\PanelService;
use core\base\BaseAdminController;

/**
 * 客服聊天面板 - 商城数据接口
 * 供客服系统（shop_customer）右侧面板按会员查询商城订单/商品。
 * 控制器不写 __construct（由框架自动依赖注入）。
 */
class Panel extends BaseAdminController
{
    /**
     * 某会员的商城订单列表
     * @return \think\Response
     */
    public function orderList()
    {
        $data = $this->request->params([
            [ 'member_id', 0 ],
            [ 'status', '' ],
            [ 'order_no', '' ],
        ]);
        return success((new PanelService())->getMemberOrderPage($data));
    }
}
