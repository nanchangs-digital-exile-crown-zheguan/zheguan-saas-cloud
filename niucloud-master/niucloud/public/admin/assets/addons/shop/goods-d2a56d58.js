import e from "/admin/assets/shared/core-shared.js";
function r(s) {
  return e.get("shop/goods", { params: s });
}
function u(s) {
  return e.get("diy/list", { params: s });
}
function a(s) {
  return e.post("shop/goods", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function n(s) {
  return e.put(`shop/goods/${s.goods_id}`, s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function g(s) {
  return e.get("shop/goods/init", { params: s });
}
function c(s) {
  return e.post("shop/goods/virtual", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function d(s) {
  return e.put(`shop/goods/virtual/${s.goods_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function i(s) {
  return e.get("shop/goods/virtual/init", { params: s });
}
function h(s) {
  return e.put("shop/goods/delete", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function p(s) {
  return e.get("shop/goods/recycle", { params: s });
}
function f(s) {
  return e.put("shop/goods/recycle", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function l(s) {
  return e.put("shop/goods/sort", s, { showSuccessMessage: !0 });
}
function w(s) {
  return e.put("shop/goods/status", s, { showSuccessMessage: !0 });
}
function M(s) {
  return e.put(`shop/goods/copy/${s.goods_id}`, s);
}
function S(s) {
  return e.get("shop/goods/select", { params: s });
}
function b(s) {
  return e.get("shop/goods/sku", { params: s });
}
function E(s) {
  return e.get("shop/goods/selectgoodssku", { params: s });
}
function v(s) {
  return e.get("shop/goods/active/count", { params: s });
}
function y(s) {
  return e.put("shop/goods/sku/stock", s, { showSuccessMessage: !0 });
}
function G(s) {
  return e.put("shop/goods/sku/price", s, { showSuccessMessage: !0 });
}
function L(s) {
  return e.put("shop/goods/sku/member_price", s, { showSuccessMessage: !0 });
}
function $() {
  return e.get("shop/goods/type");
}
function C(s) {
  return e.get("shop/goods/label", { params: s });
}
function _(s) {
  return e.get("shop/goods/label/list", { params: s });
}
function k(s) {
  return e.get(`shop/goods/label/${s}`);
}
function A(s) {
  return e.post("shop/goods/label", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function P(s) {
  return e.put(`shop/goods/label/${s.label_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function B(s) {
  return e.put("shop/goods/label/status", s, { showSuccessMessage: !0 });
}
function I(s) {
  return e.delete(`shop/goods/label/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function q(s) {
  return e.put("shop/goods/label/sort", s, { showSuccessMessage: !0 });
}
function V(s) {
  return e.get("shop/goods/label/group", { params: s });
}
function T(s) {
  return e.get("shop/goods/label/group/list", { params: s });
}
function m(s) {
  return e.get(`shop/goods/label/group/${s}`);
}
function x(s) {
  return e.post("shop/goods/label/group", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function D(s) {
  return e.put(`shop/goods/label/group/${s.group_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function R(s) {
  return e.delete(`shop/goods/label/group/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function U(s) {
  return e.put("shop/goods/label/group/sort", s, { showSuccessMessage: !0 });
}
function j(s) {
  return e.post(`shop/goods/label/copy/${s.label_id}`, s, { showSuccessMessage: !0 });
}
function z(s) {
  return e.get("shop/goods/brand", { params: s });
}
function N(s) {
  return e.get("shop/goods/brand/list", { params: s });
}
function F(s) {
  return e.get(`shop/goods/brand/${s}`);
}
function H(s) {
  return e.post("shop/goods/brand", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function J(s) {
  return e.put(`shop/goods/brand/${s.brand_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function K(s) {
  return e.put("shop/goods/brand/sort", s, { showSuccessMessage: !0 });
}
function O(s) {
  return e.delete(`shop/goods/brand/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function Q(s) {
  return e.get("shop/goods/service", { params: s });
}
function W(s) {
  return e.get("shop/goods/service/list", { params: s });
}
function X(s) {
  return e.get(`shop/goods/service/${s}`);
}
function Y(s) {
  return e.post("shop/goods/service", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function Z(s) {
  return e.put(`shop/goods/service/${s.service_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function ss(s, o = !0) {
  return e.delete(`shop/goods/service/${s}`, { showErrorMessage: !0, showSuccessMessage: o });
}
function es() {
  return e.get("shop/goods/tree");
}
function os(s) {
  return e.get("shop/goods/category", { params: s });
}
function ts(s) {
  return e.get(`shop/goods/category/${s}`);
}
function rs(s) {
  return e.post("shop/goods/category", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function us(s) {
  return e.put(`shop/goods/category/${s.category_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function as(s) {
  return e.delete(`shop/goods/category/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function ns(s) {
  return e.post("shop/goods/category/update", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function gs(s) {
  return e.post("shop/goods/category/config", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function cs() {
  return e.get("shop/goods/category/config");
}
function ds(s) {
  return e.get("shop_supplier/supplier/list", { params: s });
}
function is(s) {
  return e.get("shop/goods/evaluate", { params: s });
}
function hs(s) {
  return e.post("shop/goods/evaluate", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function ps(s) {
  return e.delete(`shop/goods/evaluate/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function fs(s) {
  return e.put(`shop/goods/evaluate/adopt/${s}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function ls(s) {
  return e.put(`shop/goods/evaluate/refuse/${s}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function ws(s) {
  return e.put(`shop/goods/evaluate/reply/${s.evaluate_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function Ms(s) {
  return e.put(`shop/goods/evaluate/topping/${s}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function Ss(s) {
  return e.put(`shop/goods/evaluate/cancel_topping/${s}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function bs() {
  return e.get("shop/goods/evaluate/status");
}
function Es(s) {
  return e.post("shop/goods/evaluate/batch/del", s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function vs(s) {
  return e.post("shop/goods/evaluate/batch/adopt", s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function ys(s) {
  return e.post("shop/goods/evaluate/batch/refuse", s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function Gs(s) {
  return e.get("shop/goods/attr", { params: s });
}
function Ls(s) {
  return e.get("shop/goods/attr/list", { params: s });
}
function $s(s) {
  return e.get(`shop/goods/attr/${s}`);
}
function Cs(s) {
  return e.post("shop/goods/attr", s, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function _s(s) {
  return e.put(`shop/goods/attr/${s.attr_id}`, s, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function ks(s) {
  return e.delete(`shop/goods/attr/${s}`, { showErrorMessage: !0, showSuccessMessage: !0 });
}
function As(s) {
  return e.put("shop/goods/attr/sort", s, { showSuccessMessage: !0 });
}
function Ps(s) {
  return e.put("shop/goods/attr/attr_value", s, { showSuccessMessage: !0 });
}
function Bs() {
  return e.get("shop/goods/batchSet/dict");
}
function Is(s) {
  return e.put("shop/goods/batchSet", s, { showSuccessMessage: !0 });
}
function qs() {
  return e.get("shop/goods/config/search");
}
function Vs(s) {
  return e.post("shop/goods/config/search", s, { showSuccessMessage: !0 });
}
function Ts() {
  return e.get("shop/goods/config/unique");
}
function ms(s) {
  return e.post("shop/goods/config/unique", s, { showSuccessMessage: !0 });
}
function xs(s) {
  return e.post("shop/goods/verify/skuno", s);
}
function Ds() {
  return e.get("shop/goods/config/sort");
}
function Rs(s) {
  return e.post("shop/goods/config/sort", s, { showSuccessMessage: !0 });
}
function Us(s) {
  return e.put("shop/goods/single/status", s, { showSuccessMessage: !0 });
}
export {
  fs as $,
  hs as A,
  Is as B,
  Bs as C,
  _ as D,
  W as E,
  N as F,
  u as G,
  L as H,
  b as I,
  v as J,
  G as K,
  y as L,
  P as M,
  A as N,
  k as O,
  D as P,
  x as Q,
  m as R,
  Z as S,
  Y as T,
  X as U,
  is as V,
  bs as W,
  Es as X,
  vs as Y,
  ys as Z,
  ps as _,
  es as a,
  ls as a0,
  Ms as a1,
  Ss as a2,
  ws as a3,
  U as a4,
  V as a5,
  R as a6,
  q as a7,
  C as a8,
  T as a9,
  d as aA,
  I as aa,
  B as ab,
  j as ac,
  l as ad,
  Us as ae,
  w as af,
  h as ag,
  M as ah,
  a as ai,
  n as aj,
  g as ak,
  ds as al,
  xs as am,
  Ls as an,
  f as ao,
  p as ap,
  qs as aq,
  Ts as ar,
  Ds as as,
  Vs as at,
  ms as au,
  Rs as av,
  Q as aw,
  ss as ax,
  i as ay,
  c as az,
  os as b,
  $ as c,
  S as d,
  E as e,
  Gs as f,
  r as g,
  _s as h,
  Cs as i,
  ks as j,
  Ps as k,
  $s as l,
  As as m,
  K as n,
  z as o,
  O as p,
  J as q,
  H as r,
  F as s,
  us as t,
  ns as u,
  as as v,
  rs as w,
  ts as x,
  cs as y,
  gs as z
};
