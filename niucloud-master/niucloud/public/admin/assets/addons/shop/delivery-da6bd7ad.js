import s from "/admin/assets/shared/core-shared.js";
function o(e) {
  return s.get("shop/delivery/company", { params: e });
}
function i(e) {
  return s.get("shop/delivery/company/list", { params: e });
}
function n(e) {
  return s.get(`shop/delivery/company/${e}`);
}
function u(e) {
  return s.post("shop/delivery/company", e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function l(e) {
  return s.put(`shop/delivery/company/${e.company_id}`, e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function a(e) {
  return s.delete(`shop/delivery/company/${e}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function c(e) {
  return s.get("shop/shipping/template", { params: e });
}
function p(e) {
  return s.get("shop/shipping/template/list", { params: e });
}
function h(e) {
  return s.get(`shop/shipping/template/${e}`);
}
function g(e) {
  return s.post("shop/shipping/template", e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function d(e) {
  return s.put(`shop/shipping/template/${e.template_id}`, e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function y(e) {
  return s.delete(`shop/shipping/template/${e}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function v(e) {
  return s.get("shop/delivery/store", { params: e });
}
function f(e) {
  return s.get(`shop/delivery/store/${e}`);
}
function S() {
  return s.get("shop/delivery/store/init");
}
function _(e) {
  return s.post("shop/delivery/store", e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function w(e) {
  return s.put(`shop/delivery/store/${e.store_id}`, e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function M(e) {
  return s.delete(`shop/delivery/store/${e}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function D(e, t) {
  return s.put(`shop/delivery/search/${e}`, t, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function $() {
  return s.get("shop/delivery/search");
}
function L(e) {
  return s.get(`shop/delivery/search/${e}`);
}
function m() {
  return s.get("shop/delivery/deliveryList");
}
function E(e) {
  return s.put("shop/delivery/setConfig", e, { showSuccessMessage: !0 });
}
function C(e) {
  return s.get("shop/shop_delivery/staff", { params: e });
}
function I(e) {
  return s.get("shop/shop_delivery/staff/list", { params: e });
}
function T(e) {
  return s.get(`shop/shop_delivery/staff/${e}`);
}
function P(e) {
  return s.post("shop/shop_delivery/staff", e, { showSuccessMessage: !0 });
}
function b(e) {
  return s.put(`shop/shop_delivery/staff/${e.deliver_id}`, e, { showSuccessMessage: !0 });
}
function k(e) {
  return s.delete(`shop/shop_delivery/staff/${e}`);
}
function F(e) {
  return s.get(`shop/delivery_store/delivery_service_list/${e}`);
}
function O(e) {
  return s.put(`shop/delivery_store/delivery_shop_open/${e.id}`, e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function U(e) {
  return s.put(`shop/delivery_store/delivery_shop_edit/${e.id}`, e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function q() {
  return s.get("shop/local_delivery/config");
}
function x(e) {
  return s.put("shop/local_delivery/config", e, { showSuccessMessage: !0 });
}
function A(e) {
  return s.get("shop/local_delivery/list", { params: e });
}
function R() {
  return s.get("shop/local_delivery/service");
}
function j(e) {
  return s.put(`shop/local_delivery/service/${e.delivery_type}`, e, { showSuccessMessage: !0 });
}
function z(e) {
  return s.get(`shop/local_delivery/service/${e}`);
}
function B() {
  return s.get("shop/local_delivery/order/status");
}
function G(e) {
  return s.get("shop/local_delivery/order", { params: e });
}
function H(e) {
  return s.get(`shop/local_delivery/order/${e}`);
}
function J(e) {
  return s.get("shop/local_delivery/order/cancel_reason", { params: e });
}
function K(e) {
  return s.put(`shop/local_delivery/order/sync/${e}`);
}
function N(e) {
  return s.put(`shop/local_delivery/order/cancel/${e.id}`, e, { showSuccessMessage: !0 });
}
function Q() {
  return s.get("shop/shop_delivery/order/status");
}
function V(e) {
  return s.get("shop/shop_delivery/order", { params: e });
}
function W(e) {
  return s.get(`shop/shop_delivery/order/${e}`);
}
function X(e) {
  return s.put(`shop/shop_delivery/order/finish/${e}`);
}
function Y(e) {
  return s.put(`shop/local_delivery/order/finish/${e}`);
}
function Z(e) {
  return s.put(`shop/shop_delivery/order/cancel/${e.id}`, e, { showSuccessMessage: !0 });
}
function ee(e) {
  return s.get("shop/delivery/store", { params: e });
}
function se(e) {
  return s.get("shop/delivery/store/list", { params: e });
}
function te() {
  return s.get("shop/delivery/store/pick_up_type");
}
function re(e) {
  return s.get(`shop/delivery/store/${e}`);
}
function oe(e) {
  return s.post("shop/delivery/store", e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function ie(e) {
  return s.put(`shop/delivery/store/${e.store_id}`, e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function ne(e) {
  return s.delete(`shop/delivery/store/${e}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function ue(e) {
  return s.put("shop/delivery/store/modify_status", e, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function le() {
  return s.get("shop/local_delivery/base_config");
}
function ae(e) {
  return s.put("shop/local_delivery/base_config", e, { showSuccessMessage: !0 });
}
export {
  oe as $,
  Z as A,
  W as B,
  $ as C,
  L as D,
  D as E,
  C as F,
  k as G,
  b as H,
  P as I,
  T as J,
  v as K,
  M as L,
  S as M,
  f as N,
  w as O,
  _ as P,
  c as Q,
  y as R,
  h as S,
  d as T,
  g as U,
  F as V,
  U as W,
  O as X,
  te as Y,
  re as Z,
  ie as _,
  n as a,
  ee as a0,
  ne as a1,
  ue as a2,
  I as a3,
  A as a4,
  p as a5,
  u as b,
  z as c,
  a as d,
  l as e,
  m as f,
  o as g,
  E as h,
  i,
  q as j,
  se as k,
  x as l,
  le as m,
  ae as n,
  R as o,
  B as p,
  G as q,
  K as r,
  j as s,
  Y as t,
  J as u,
  N as v,
  H as w,
  Q as x,
  V as y,
  X as z
};
