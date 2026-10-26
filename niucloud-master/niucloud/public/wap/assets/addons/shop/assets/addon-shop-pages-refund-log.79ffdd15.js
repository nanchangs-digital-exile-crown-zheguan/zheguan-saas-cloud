/* __addonChunkWindiInjected:addon-shop-pages-refund-log_79ffdd15 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-refund-log_79ffdd15",".bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-\\[100rpx\\]{\n  border-radius: 3.125rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.h-\\[80rpx\\]{\n  height: 2.5rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-\\[80rpx\\]{\n  line-height: 2.5rem;\n}.mx-0{\n  margin-left: 0px;\n  margin-right: 0px;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.mb-\\[10rpx\\]{\n  margin-bottom: 0.3125rem;\n}.mb-\\[var\\(--top-m\\)\\]{\n  margin-bottom: var(--top-m);\n}.min-h-screen{\n  min-height: 100vh;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[var\\(--sidebar-m\\)\\]{\n  padding-left: var(--sidebar-m);\n  padding-right: var(--sidebar-m);\n}.py-\\[var\\(--top-m\\)\\]{\n  padding-top: var(--top-m);\n  padding-bottom: var(--top-m);\n}.pt-\\[var\\(--top-m\\)\\]{\n  padding-top: var(--top-m);\n}.fixed{\n  position: fixed;\n}.bottom-0{\n  bottom: 0px;\n}.left-0{\n  left: 0px;\n}.right-0{\n  right: 0px;\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.w-full{\n  width: 100%;\n}");
/* __addonChunkCssInjected:3e2bf449 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("3e2bf449",".addon-wrap-3e2bf449 .footer{height:calc(2.5rem + var(--top-m) + var(--top-m) + constant(safe-area-inset-bottom))!important;height:calc(2.5rem + var(--top-m) + var(--top-m) + env(safe-area-inset-bottom))!important}");
import { i as index$g, d as index$x } from "./uni-h5.es.7545a186.js";
import "./button.fdf0e29d.js";
import { _ as _sfc_main$1 } from "./loading-page.vue_vue_type_script_setup_true_lang.0e84ab2d.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, unref, createCommentVNode } from "/wap/assets/shared/vue.js";
import { o as onLoad, r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { g as goback, r as redirect } from "./common.f536f441.js";
import { c as getRefundDetail } from "./refund.1728cb98.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./resize-sensor.8ba09891.js";
import "./u-loading-icon.8e9029d5.js";
import "./text.99ce2b32.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "log",
  setup(__props) {
    const detail = ref({});
    const loading = ref(true);
    const orderRefundNo = ref("");
    onLoad((option) => {
      orderRefundNo.value = option.order_refund_no;
      if (option.order_refund_no) {
        refundDetailFn(option.order_refund_no);
      } else {
        let parameter = {
          url: "/addon/shop/pages/refund/list",
          title: "缺少订单号"
        };
        goback(parameter);
      }
    });
    const refundDetailFn = (refundNo) => {
      loading.value = true;
      getRefundDetail(refundNo).then((res) => {
        detail.value = res.data;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_button = index$x;
      const _component_loading_page = resolveEasycom(resolveDynamicComponent("loading-page"), _sfc_main$1);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          !loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "bg-[var(--page-bg-color)] min-h-screen overflow-hidden"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "pt-[var(--top-m)]" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.refund_log, (item, index) => {
                    return openBlock(), createBlock(_component_v_uni_view, { class: "card-template sidebar-margin mb-[var(--top-m)]" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "text-[28rpx]" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.type_name || "--"), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, { class: "text-[24rpx] mt-[20rpx] mb-[10rpx] text-[var(--text-color-light9)]" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.main_type_name) + " " + toDisplayString(item.main_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[var(--text-color-light9)]" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.create_time), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256)),
                  createVNode(_component_v_uni_view, { class: "w-full footer" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "py-[var(--top-m)] px-[var(--sidebar-m)] footer w-full fixed bottom-0 left-0 right-0 box-border" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_button, {
                            "hover-class": "none",
                            class: "primary-btn-bg text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] mx-0 flex-1 font-500",
                            onClick: _cache[0] || (_cache[0] = ($event) => unref(redirect)({ url: "/addon/shop/pages/refund/detail", param: { order_refund_no: orderRefundNo.value } }))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 返回详情")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_loading_page, { loading: loading.value }, null, 8, ["loading"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const log_vue_vue_type_style_index_0_scoped_3e2bf449_lang = "";
const log = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e2bf449"]]);
export {
  log as default
};
