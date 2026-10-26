/* __addonChunkWindiInjected:pay_1054e66f */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("pay_1054e66f",".bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.bg-\\[var\\(--primary-color\\)\\]{\n  background-color: var(--primary-color);\n}.bg-\\[var\\(--temp-bg\\)\\]{\n  background-color: var(--temp-bg);\n}.border-\\[\\#eee\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(238, 238, 238, var(--tw-border-opacity));\n}.rounded-\\[20rpx\\]{\n  border-radius: 0.625rem;\n}.border-solid{\n  border-style: solid;\n}.border-0{\n  border-width: 0px;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-end{\n  align-items: flex-end;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.font-bold{\n  font-weight: 700;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.mx-\\[var\\(--popup-sidebar-m\\)\\]{\n  margin-left: var(--popup-sidebar-m);\n  margin-right: var(--popup-sidebar-m);\n}.mr-\\[4rpx\\]{\n  margin-right: 0.125rem;\n}.mb-\\[10rpx\\]{\n  margin-bottom: 0.3125rem;\n}.py-\\[20rpx\\]{\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}.px-\\[20rpx\\]{\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}.px-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}.py-\\[30rpx\\]{\n  padding-top: 0.9375rem;\n  padding-bottom: 0.9375rem;\n}.pl-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n}.pt-\\[20rpx\\]{\n  padding-top: 0.625rem;\n}.text-center{\n  text-align: center;\n}.text-right{\n  text-align: right;\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.text-gray-subtitle{\n  --tw-text-opacity: 1;\n  color: rgba(117, 117, 117, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-full{\n  width: 100%;\n}");
/* __addonChunkCssInjected:03723c64 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("03723c64",".addon-wrap-03723c64 .pay-item:last-child{border:none}");
import { T as $on, j as getStorageSync, z as removeStorageSync, s as showToast, n as setStorageSync, i as index$g, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, withModifiers, createVNode, createTextVNode, toDisplayString, unref, createElementBlock, Fragment, renderList, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { d as request, n as isWeixinBrowser, r as redirect, t, o as moneyFormat, i as img } from "./common.f536f441.js";
import { w as wechat } from "./wechat.1afe9cea.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function pay(data) {
  return request.post(`pay`, data, { showErrorMessage: true });
}
function getPayInfo(tradeType, tradeId, params) {
  return request.get(`pay/info/${tradeType}/${tradeId}`, params, { showErrorMessage: true });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pay",
  props: {
    ignorePay: {
      type: Array,
      default() {
        return [];
      }
    },
    reformat: {
      type: String,
      default: ""
    }
  },
  emits: ["close", "confirm"],
  setup(__props, { expose, emit: emits }) {
    const prop = __props;
    if (isWeixinBrowser())
      wechat.init();
    const show = ref(false);
    const loading = ref(false);
    const payInfo = ref(null);
    const type = ref("");
    const confirmPay = () => {
      var _a, _b, _c, _d;
      if (uni.$u.test.isEmpty(type.value)) {
        showToast({ title: t("pay.notHavePayType"), icon: "none" });
        return;
      }
      if (type.value == "friendspay") {
        redirect({
          url: "/app/pages/friendspay/share",
          param: {
            id: (_a = payInfo.value) == null ? void 0 : _a.trade_id,
            type: (_b = payInfo.value) == null ? void 0 : _b.trade_type
          },
          mode: "redirectTo"
        });
        return false;
      }
      if (loading.value)
        return;
      loading.value = true;
      pay({
        trade_type: (_c = payInfo.value) == null ? void 0 : _c.trade_type,
        trade_id: (_d = payInfo.value) == null ? void 0 : _d.trade_id,
        type: type.value,
        openid: getStorageSync("openid") || ""
      }).then((res) => {
        var _a2, _b2, _c2, _d2, _e, _f;
        switch (type.value) {
          case "wechatpay":
            if (isWeixinBrowser()) {
              res.data.timestamp = res.data.timeStamp;
              delete res.data.timeStamp;
              wechat.pay({
                ...res.data,
                success: () => {
                  toPayResult();
                },
                cancel: () => {
                  loading.value = false;
                }
              });
            } else {
              setStorageSync("paymenting", {
                trade_type: (_a2 = payInfo.value) == null ? void 0 : _a2.trade_type,
                trade_id: (_b2 = payInfo.value) == null ? void 0 : _b2.trade_id
              });
              location.href = res.data.h5_url;
            }
            break;
          case "alipay":
            if (isWeixinBrowser()) {
              redirect({
                url: "/app/pages/pay/browser",
                param: {
                  trade_type: (_c2 = payInfo.value) == null ? void 0 : _c2.trade_type,
                  trade_id: (_d2 = payInfo.value) == null ? void 0 : _d2.trade_id,
                  alipay: encodeURIComponent(res.data.url)
                },
                mode: "redirectTo"
              });
            } else {
              setStorageSync("paymenting", {
                trade_type: (_e = payInfo.value) == null ? void 0 : _e.trade_type,
                trade_id: (_f = payInfo.value) == null ? void 0 : _f.trade_id
              });
              location.href = res.data.url;
            }
            break;
          default:
            if (res.data.url) {
              redirect({
                url: res.data.url,
                param: res.data.param || {},
                mode: "redirectTo"
              });
              return;
            }
            toPayResult();
            break;
        }
      }).catch(() => {
        loading.value = false;
      });
    };
    $on("checkIsReturnAfterPayment", () => {
      const data = getStorageSync("paymenting");
      if (getStorageSync("paymenting")) {
        redirect({
          url: "/app/pages/pay/result",
          param: {
            trade_type: data.trade_type,
            trade_id: data.trade_id
          },
          mode: "redirectTo",
          success() {
            removeStorageSync("paymenting");
          }
        });
      }
    });
    const repeat = ref(false);
    const open = (tradeType, tradeId, payReturn = "", scene = "") => {
      if (repeat.value)
        return;
      repeat.value = true;
      setStorageSync("payReturn", encodeURIComponent(payReturn));
      const obj = {};
      if (scene) {
        obj.scene = scene;
      }
      getPayInfo(tradeType, tradeId, obj).then((res) => {
        let { data } = res;
        if (uni.$u.test.isEmpty(data)) {
          showToast({ title: t("pay.notObtainedInfo"), icon: "none" });
          return;
        }
        if (data.money == 0) {
          toPayResult();
          return;
        }
        payInfo.value = data;
        if (prop.ignorePay) {
          data.pay_type_list = data.pay_type_list.filter((item) => {
            return !prop.ignorePay.includes(item.key);
          });
        }
        type.value = data.pay_type_list[0] ? data.pay_type_list[0].key : "";
        show.value = true;
        repeat.value = false;
      }).catch(() => {
        repeat.value = false;
      });
    };
    const toPayResult = () => {
      var _a, _b;
      emits("confirm");
      if (prop.reformat) {
        redirect({
          url: prop.reformat,
          mode: "redirectTo"
        });
        return;
      }
      redirect({
        url: "/app/pages/pay/result",
        param: { trade_type: (_a = payInfo.value) == null ? void 0 : _a.trade_type, trade_id: (_b = payInfo.value) == null ? void 0 : _b.trade_id },
        mode: "redirectTo"
      });
    };
    const handleClose = () => {
      removeStorageSync("paymenting");
      show.value = false;
      emits("close");
    };
    expose({
      open,
      payInfo
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_image = resolveEasycom(resolveDynamicComponent("u-image"), __easycom_5);
      const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        round: 10,
        onClose: handleClose,
        closeable: true,
        bgColor: "#fff",
        zIndex: "10081",
        closeOnClickOverlay: false
      }, {
        default: withCtx(() => [
          payInfo.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "flex flex-col h-[65vh] popup-common",
            onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["prevent", "stop"]))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "head" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "title" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("pay.payTitle")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "flex items-end justify-center w-full text-xl font-bold py-[20rpx] price-font" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-base mr-[4rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("currency")), 1)
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(unref(moneyFormat)(payInfo.value.money)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "flex-1 pt-[20rpx]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "flex text-[28rpx] px-[36rpx] py-[20rpx] mb-[10rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[var(--text-color-light6)]" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("pay.orderInfo")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "text-right flex-1 pl-[30rpx] truncate" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(payInfo.value.body), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "mx-[var(--popup-sidebar-m)] px-[30rpx] bg-white rounded-[20rpx] bg-[var(--temp-bg)]" }, {
                    default: withCtx(() => [
                      payInfo.value.pay_type_list.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(payInfo.value.pay_type_list, (item, index) => {
                        return openBlock(), createBlock(_component_v_uni_view, {
                          class: "pay-item py-[30rpx] flex items-center border-0 border-b border-solid border-[#eee]",
                          key: index,
                          onClick: ($event) => type.value = item.key
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_u_image, {
                              src: unref(img)(item.icon),
                              width: "50rpx",
                              height: "50rpx"
                            }, null, 8, ["src"]),
                            createVNode(_component_v_uni_view, { class: "flex-1 px-[20rpx] text-[28rpx] font-500" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            item.key == type.value ? (openBlock(), createBlock(_component_u_icon, {
                              key: 0,
                              name: "checkbox-mark",
                              color: "var(--primary-color)"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128)) : (openBlock(), createBlock(_component_v_uni_view, {
                        key: 1,
                        class: "py-[30rpx] text-center text-[24rpx] text-gray-subtitle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("pay.notHavePayType")), 1)
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "btn-wrap" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, {
                    class: "primary-btn-bg bg-[var(--primary-color)] btn",
                    "hover-class": "none",
                    loading: loading.value,
                    onClick: confirmPay
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("pay.confirmPay")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const pay_vue_vue_type_style_index_0_scoped_03723c64_lang = "";
const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03723c64"]]);
export {
  __easycom_8 as _
};
