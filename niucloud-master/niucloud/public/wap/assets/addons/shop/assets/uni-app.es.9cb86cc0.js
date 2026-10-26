import { isInSSRComponentSetup, injectHook, getCurrentInstance } from "/wap/assets/shared/vue.js";
import { r as isString, O as ON_SHOW, t as ON_HIDE, v as ON_LOAD, w as ON_UNLOAD, x as ON_PAGE_SCROLL, y as ON_REACH_BOTTOM } from "./uni-h5.es.7545a186.js";
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createHook(ON_SHOW);
const onHide = /* @__PURE__ */ createHook(ON_HIDE);
const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
export {
  onReachBottom as a,
  onPageScroll as b,
  onUnload as c,
  onShow as d,
  onHide as e,
  onLoad as o,
  resolveEasycom as r
};
