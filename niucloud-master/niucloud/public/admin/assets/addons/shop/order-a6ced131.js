import r from "/admin/assets/shared/core-shared.js";
function s() {
  return r.get("shop/order/config");
}
function n(e) {
  return r.post("shop/order/config", e, { showSuccessMessage: !0 });
}
function u(e) {
  return r.get("shop/order/list", { params: e });
}
function i(e) {
  return r.get(`shop/order/detail/${e}`);
}
function d() {
  return r.get("shop/order/status");
}
function c(e) {
  return r.put(`shop/order/close/${e}`);
}
function a(e) {
  return r.post("shop/order/delete", e, { showSuccessMessage: !0 });
}
function p(e) {
  return r.get("shop/order/delivery_type", { params: e });
}
function h(e) {
  return r.put("shop/order/delivery", e);
}
function f(e) {
  return r.put("shop/order/shop_remark", e);
}
function g(e) {
  return r.put(`shop/order/finish/${e}`);
}
function l(e) {
  return r.get("shop/order/delivery/package", { params: e });
}
function v(e) {
  return r.get("shop/order/delivery/package/list", { params: e });
}
function y(e) {
  return r.get("shop/order/refund", { params: e });
}
function _(e) {
  return r.get(`shop/order/refund/${e}`);
}
function D(e) {
  return r.put(`shop/order/refund/audit/${e.order_refund_no}`, e);
}
function O(e) {
  return r.put(`shop/order/refund/delivery/${e.order_refund_no}`, e);
}
function S(e) {
  return r.post("shop/order/refund/active", e, { showSuccessMessage: !0 });
}
function w(e) {
  return r.get("shop/invoice", { params: e });
}
function $(e) {
  return r.get(`shop/invoice/${e}`);
}
function k(e, t) {
  return r.put(`shop/invoice/${e}`, t, { showSuccessMessage: !0 });
}
function M(e) {
  return r.post("shop/invoice/add", e, { showSuccessMessage: !0 });
}
function b(e) {
  return r.post("shop/invoice/audit", e, { showSuccessMessage: !0 });
}
function I() {
  return r.get("shop/order/pay/type");
}
function R() {
  return r.get("shop/order/from");
}
function m(e) {
  return r.put("shop/order/edit_price", e, { showSuccessMessage: !0 });
}
function B(e) {
  return r.get("shop/order/edit_delivery", { params: e });
}
function L() {
  return r.get("shop/delivery/store/list");
}
function A(e) {
  return r.put("shop/order/edit_delivery", e);
}
function C(e) {
  return r.get("shop/order_batch_delivery", { params: e });
}
function E(e) {
  return r.put("shop/order_batch_delivery/add_batch_order_delivery", e);
}
function F() {
  return r.get("shop/order_batch_delivery/get_status");
}
function P() {
  return r.get("shop/order_batch_delivery/get_type");
}
function T(e) {
  return r.put(`shop/order/refund/close/${e}`);
}
function q(e) {
  return r.get("shop/order/select/weight", { params: e });
}
function x(e) {
  return r.get("shop/order/delivery/fee", { params: e });
}
export {
  B as A,
  D as B,
  O as C,
  T as D,
  _ as E,
  n as F,
  w as G,
  b as H,
  a as I,
  y as J,
  g as a,
  h as b,
  p as c,
  q as d,
  x as e,
  S as f,
  i as g,
  d as h,
  I as i,
  R as j,
  u as k,
  P as l,
  F as m,
  C as n,
  c as o,
  E as p,
  m as q,
  l as r,
  f as s,
  v as t,
  $ as u,
  k as v,
  s as w,
  M as x,
  A as y,
  L as z
};
