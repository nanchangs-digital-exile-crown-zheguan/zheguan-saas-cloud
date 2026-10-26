/* __addonChunkCssInjected:2eee0e18 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("2eee0e18",".addon-wrap-2eee0e18 .bg-index{width:100%;height:100%;box-sizing:border-box;background-size:100%;background-repeat:no-repeat!important}.addon-wrap-2eee0e18 .u-tabbar__placeholder{display:none!important}.addon-wrap-2eee0e18 .diy-template-wrap .diy-group>.draggable-element.top-fixed-diy{display:none}.addon-wrap-2eee0e18 .diy-template-wrap .child-diy-template-wrap .diy-group .draggable-element.top-fixed-diy{display:block}");
import { _ as _sfc_main$1 } from "./loading-page.vue_vue_type_script_setup_true_lang.0e84ab2d.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, unref, withDirectives, vShow, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_4 } from "./tabbar.5b67b6e8.js";
import { u as useDiy } from "./useDiy.30104fd9.js";
import { u as useShare } from "./useShare.7060e95a.js";
import { d as diyGroup } from "./index.ee50633b.js";
import { k as useDiyStore } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./resize-sensor.8ba09891.js";
import "./u-loading-icon.8e9029d5.js";
import "./text.99ce2b32.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-icon.ceb3960f.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-badge.c0af0a5e.js";
import "./u-tabbar.b646ecf0.js";
import "./u-safe-bottom.32b62caf.js";
import "./diy.06cb6bf8.js";
import "./wechat.1afe9cea.js";
import "./entry.172aa559.js";
import "./top-tabbar.e23374bd.js";
import "./u-popup.37f81450.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { setShare } = useShare();
    const diyStore = useDiyStore();
    const diy = useDiy({
      name: "DIY_SHOP_POINT_INDEX"
    });
    const diyGroupRef = ref(null);
    ref(null);
    diy.onLoad();
    diy.onShow((data) => {
      var _a;
      let share = data.share ? JSON.parse(data.share) : null;
      setShare(share);
      (_a = diyGroupRef.value) == null ? void 0 : _a.refresh();
    });
    diy.onHide();
    diy.onUnload();
    diy.onPageScroll();
    return (_ctx, _cache) => {
      const _component_loading_page = resolveEasycom(resolveDynamicComponent("loading-page"), _sfc_main$1);
      const _component_v_uni_view = index$g;
      const _component_tabbar = resolveEasycom(resolveDynamicComponent("tabbar"), __easycom_4);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(_component_loading_page, {
              loading: unref(diy).getLoading()
            }, null, 8, ["loading"]),
            withDirectives(createVNode(_component_v_uni_view, null, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, {
                  class: "diy-template-wrap bg-index",
                  style: normalizeStyle(unref(diy).pageStyle())
                }, {
                  default: withCtx(() => [
                    createVNode(diyGroup, {
                      ref_key: "diyGroupRef",
                      ref: diyGroupRef,
                      data: unref(diy).data
                    }, null, 8, ["data"])
                  ]),
                  _: 1
                }, 8, ["style"])
              ]),
              _: 1
            }, 512), [
              [vShow, !unref(diy).getLoading()]
            ]),
            unref(diyStore) && unref(diyStore).mode == "" && unref(diyStore).global && unref(diyStore).global.bottomTabBar && unref(diyStore).global.bottomTabBar.isShow ? (openBlock(), createBlock(_component_tabbar, {
              key: 0,
              addon: (_a = unref(diyStore).global.bottomTabBar.designNav) == null ? void 0 : _a.key
            }, null, 8, ["addon"])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_2eee0e18_lang = "";
const index_vue_vue_type_style_index_1_scoped_2eee0e18_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2eee0e18"]]);
export {
  index as default
};
