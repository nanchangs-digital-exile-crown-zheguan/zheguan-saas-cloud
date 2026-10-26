import t from "/admin/assets/shared/core-shared.js";
function r(e) {
  return t.get("shop/electronic_sheet", { params: e });
}
function o(e) {
  return t.get("shop/electronic_sheet/list", { params: e });
}
function c(e) {
  return t.get(`shop/electronic_sheet/${e}`);
}
function n(e) {
  return t.post("shop/electronic_sheet", e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function i(e) {
  return t.put(`shop/electronic_sheet/${e.id}`, e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function h(e) {
  return t.delete(`shop/electronic_sheet/${e}`, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function u(e) {
  return t.put(`shop/electronic_sheet/setDefault/${e.id}`, e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function g(e) {
  return t.post("shop/electronic_sheet/config", e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
function l() {
  return t.get("shop/electronic_sheet/config");
}
function a() {
  return t.get("shop/electronic_sheet/paytype");
}
function p(e) {
  return t.post("shop/electronic_sheet/print", e, {
    showErrorMessage: !0,
    showSuccessMessage: !0
  });
}
export {
  l as a,
  g as b,
  a as c,
  h as d,
  c as e,
  i as f,
  r as g,
  n as h,
  o as i,
  p,
  u as s
};
