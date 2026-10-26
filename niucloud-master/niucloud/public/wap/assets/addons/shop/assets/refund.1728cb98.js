import { d as request } from "./common.f536f441.js";
function applyRefund(params) {
  return request.post(`shop/refund/apply`, params, { showSuccessMessage: true });
}
function editRefund(params) {
  return request.put(`shop/refund/${params.order_refund_no}`, params, { showSuccessMessage: true });
}
function refundDelivery(params) {
  return request.post(`shop/refund/delivery/${params.order_refund_no}`, params, { showSuccessMessage: true });
}
function editRefundDelivery(params) {
  return request.put(`shop/refund/delivery/${params.order_refund_no}`, params, { showSuccessMessage: true });
}
function getRefundReason() {
  return request.get("shop/refund/reason");
}
function getRefundList() {
  return request.get("shop/order/refund");
}
function getRefundDetail(orderRefundNo) {
  return request.get(`shop/order/refund/${orderRefundNo}`);
}
function getRefundMoney(params) {
  return request.get(`shop/refund/refund_data`, params);
}
function getRefundMoneyAgain(params) {
  return request.get(`shop/refund/refund_data_by_no`, params);
}
function closeRefund(orderRefundNo) {
  return request.put(`shop/refund/close/${orderRefundNo}`, {}, { showSuccessMessage: true });
}
export {
  getRefundMoney as a,
  applyRefund as b,
  getRefundDetail as c,
  closeRefund as d,
  editRefundDelivery as e,
  getRefundMoneyAgain as f,
  getRefundReason as g,
  editRefund as h,
  getRefundList as i,
  refundDelivery as r
};
