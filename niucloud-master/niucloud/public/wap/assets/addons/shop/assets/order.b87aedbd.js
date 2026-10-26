import { d as request } from "./common.f536f441.js";
function getShopOrderStatus() {
  return request.get(`shop/order/status`);
}
function getShopOrder(params) {
  return request.get(`shop/order`, params);
}
function getShopOrderNum() {
  return request.get(`shop/order/num`);
}
function getShopOrderDetail(order_id) {
  return request.get(`shop/order/${order_id}`);
}
function orderClose(order_id) {
  return request.put(`shop/order/close/${order_id}`);
}
function orderDelete(order_id) {
  return request.delete(`shop/order/delete/${order_id}`);
}
function orderFinish(order_id) {
  return request.put(`shop/order/finish/${order_id}`);
}
function orderCreateCalculate(params) {
  return request.get("shop/order_create/calculate", params);
}
function orderCreate(params) {
  return request.post("shop/order_create/create", params);
}
function orderCoupon(params) {
  return request.get("shop/order_create/coupon", params);
}
function getStoreList(params) {
  return request.get("shop/order_create/store", params);
}
function getMaterialflowList(params) {
  return request.get("shop/order/logistics", params);
}
function getLocal() {
  return request.get("shop/order_create/local");
}
function getTrackOfLocal(params) {
  return request.get("shop/delivery/track_of_local", params);
}
export {
  getMaterialflowList as a,
  getTrackOfLocal as b,
  getStoreList as c,
  orderClose as d,
  orderDelete as e,
  orderFinish as f,
  getShopOrderDetail as g,
  getShopOrderStatus as h,
  getShopOrder as i,
  orderCreateCalculate as j,
  orderCreate as k,
  getLocal as l,
  getShopOrderNum as m,
  orderCoupon as o
};
