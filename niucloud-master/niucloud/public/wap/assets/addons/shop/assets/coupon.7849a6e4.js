import { d as request } from "./common.f536f441.js";
function getShopCouponList(params) {
  return request.get(`shop/coupon`, params);
}
function getShopCouponInfo(id) {
  return request.get(`shop/coupon/${id}`);
}
function getCoupon(params) {
  return request.post(`shop/coupon`, params, { showSuccessMessage: true });
}
function getMyCouponList(params) {
  return request.get(`shop/member/coupon`, params);
}
function getShopCouponComponents(params) {
  return request.get(`shop/coupon/components`, params);
}
function getMyCouponCount(params) {
  return request.get(`shop/member/coupon/count`, params);
}
function getMyCouponType() {
  return request.get(`shop/coupon_type`);
}
function getMyCouponStatusCount() {
  return request.get(`shop/member/coupon/status_count`);
}
export {
  getCoupon as a,
  getShopCouponList as b,
  getMyCouponType as c,
  getMyCouponStatusCount as d,
  getMyCouponList as e,
  getShopCouponComponents as f,
  getShopCouponInfo as g,
  getMyCouponCount as h
};
