import { d as request } from "./common.f536f441.js";
function getExchangePoint() {
  return request.get(`shop/exchange/point`);
}
function getExchangeComponentsList(params) {
  return request.get(`shop/exchange/components`, params);
}
function getExchangeGoodsList(params) {
  return request.get(`shop/exchange`, params);
}
function getExchangeGoodsDetail(id) {
  return request.get(`shop/exchange/goods/${id}`);
}
function orderCreateCalculate(params) {
  return request.get("shop/exchange_order/calculate", params);
}
function orderCreate(params) {
  return request.post("shop/exchange_order/create", params);
}
export {
  getExchangeGoodsList as a,
  orderCreate as b,
  getExchangeComponentsList as c,
  getExchangePoint as d,
  getExchangeGoodsDetail as g,
  orderCreateCalculate as o
};
