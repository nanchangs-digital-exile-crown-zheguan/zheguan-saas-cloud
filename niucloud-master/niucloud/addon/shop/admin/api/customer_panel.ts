import request from '@/utils/request'

/**
 * 客服面板：某会员的商城订单列表
 * @param params member_id + 分页参数
 */
export function getCustomerPanelOrderList(params: Record<string, any>) {
    return request.get('shop/customer_panel/order', { params })
}
