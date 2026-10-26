/* __addonChunkWindiInjected:addon-shop-components-diy-shop-order-info-index_2089cd64 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-order-info-index_2089cd64",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.h-\\[44rpx\\]{\n  height: 1.375rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.leading-\\[1\\]{\n  line-height: 1;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.max-w-\\[200rpx\\]{\n  max-width: 6.25rem;\n}.px-\\[var\\(--pad-sidebar-m\\)\\]{\n  padding-left: var(--pad-sidebar-m);\n  padding-right: var(--pad-sidebar-m);\n}.pt-\\[var\\(--pad-top-m\\)\\]{\n  padding-top: var(--pad-top-m);\n}.pb-\\[40rpx\\]{\n  padding-bottom: 1.25rem;\n}.pb-\\[var\\(--pad-top-m\\)\\]{\n  padding-bottom: var(--pad-top-m);\n}.relative{\n  position: relative;\n}.text-center{\n  text-align: center;\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[44rpx\\]{\n  width: 1.375rem;\n}");
import { i as index$g, a as index$i, b as index$q } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./resize-sensor.8ba09891.js";
import { defineComponent, computed, onMounted, watch, ref, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString, normalizeClass, createCommentVNode } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, r as redirect, i as img } from "./common.f536f441.js";
import { m as getShopOrderNum } from "./order.b87aedbd.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const diyStore = useDiyStore();
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
    });
    onMounted(() => {
      refresh();
    });
    watch(
      () => diyComponent.value,
      (newValue, oldValue) => {
        refresh();
      },
      { deep: true }
    );
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        orderInfo.value = {};
      } else {
        getShopOrderNumFn();
      }
    };
    const orderInfo = ref({});
    const warpCss = computed(() => {
      let style = "";
      style += "position:relative;";
      if (diyComponent.value.componentStartBgColor) {
        if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
          style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
        else
          style += "background-color:" + diyComponent.value.componentStartBgColor + ";";
      }
      if (diyComponent.value.topRounded)
        style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.topRounded)
        style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      return style;
    });
    const getShopOrderNumFn = () => {
      getShopOrderNum().then((res) => {
        orderInfo.value = res.data;
      });
    };
    const toList = (status) => {
      redirect({ url: "/addon/shop/pages/order/list", param: { status } });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "diy-text relative" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "px-[var(--pad-sidebar-m)] pt-[var(--pad-top-m)] pb-[40rpx] flex items-center justify-between" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).link))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "max-w-[200rpx] truncate leading-[1] text-[30rpx]",
                        style: normalizeStyle({ fontSize: unref(diyComponent).fontSize * 2 + "rpx", color: unref(diyComponent).textColor, fontWeight: unref(diyComponent).fontWeight == "normal" ? 500 : unref(diyComponent).fontWeight })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).text), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(redirect)({ url: "/addon/shop/pages/order/list" })),
                        class: "flex items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, {
                            class: "max-w-[200rpx] truncate text-[24rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).more.color })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(diyComponent).more.text), 1)
                            ]),
                            _: 1
                          }, 8, ["style"]),
                          createVNode(_component_v_uni_text, {
                            class: "nc-iconfont nc-icon-youV6xx text-[24rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).more.color })
                          }, null, 8, ["style"])
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
          }),
          createVNode(_component_v_uni_view, { class: "pb-[var(--pad-top-m)] px-[var(--pad-sidebar-m)] flex items-center justify-between text-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "flex flex-col items-center w-[20%] flex-shrink-0",
                onClick: _cache[2] || (_cache[2] = ($event) => toList(1))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "relative w-[44rpx] h-[44rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "w-[44rpx] h-[44rpx]",
                        src: unref(img)("addon/shop/diy/member/order1.png")
                      }, null, 8, ["src"]),
                      orderInfo.value.wait_pay ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["absolute left-[35rpx] top-[-10rpx] rounded-[28rpx] h-[28rpx] min-w-[28rpx] text-center leading-[30rpx] bg-[#FF4646] text-[#fff] text-[20rpx] font-500 box-border", orderInfo.value.wait_pay > 9 ? "px-[10rpx]" : ""])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(orderInfo.value.wait_pay > 99 ? "99+" : orderInfo.value.wait_pay), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "mt-[20rpx] leading-[1]",
                    style: normalizeStyle({ fontSize: unref(diyComponent).item.fontSize * 2 + "rpx", color: unref(diyComponent).item.color, fontWeight: unref(diyComponent).item.fontWeight })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("待付款")
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "flex flex-col items-center w-[20%] flex-shrink-0",
                onClick: _cache[3] || (_cache[3] = ($event) => toList(2))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "relative w-[44rpx] h-[44rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "w-[44rpx] h-[44rpx]",
                        src: unref(img)("addon/shop/diy/member/order2.png")
                      }, null, 8, ["src"]),
                      orderInfo.value.wait_shipping ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["absolute left-[35rpx] top-[-10rpx] rounded-[28rpx] h-[28rpx] min-w-[28rpx] text-center leading-[30rpx] bg-[#FF4646] text-[#fff] text-[20rpx] font-500 box-border", orderInfo.value.wait_shipping > 9 ? "px-[10rpx]" : ""])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(orderInfo.value.wait_shipping > 99 ? "99+" : orderInfo.value.wait_shipping), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "mt-[20rpx] leading-[1]",
                    style: normalizeStyle({ fontSize: unref(diyComponent).item.fontSize * 2 + "rpx", color: unref(diyComponent).item.color, fontWeight: unref(diyComponent).item.fontWeight })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("待发货")
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "flex flex-col items-center w-[20%] flex-shrink-0",
                onClick: _cache[4] || (_cache[4] = ($event) => toList(3))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "relative w-[44rpx] h-[44rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "w-[44rpx] h-[44rpx]",
                        src: unref(img)("addon/shop/diy/member/order3.png")
                      }, null, 8, ["src"]),
                      orderInfo.value.wait_take ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["absolute left-[35rpx] top-[-10rpx] rounded-[28rpx] h-[28rpx] min-w-[28rpx] text-center leading-[30rpx] bg-[#FF4646] text-[#fff] text-[20rpx] font-500 box-border", orderInfo.value.wait_take > 9 ? "px-[10rpx]" : ""])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(orderInfo.value.wait_take > 99 ? "99+" : orderInfo.value.wait_take), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "mt-[20rpx] leading-[1]",
                    style: normalizeStyle({ fontSize: unref(diyComponent).item.fontSize * 2 + "rpx", color: unref(diyComponent).item.color, fontWeight: unref(diyComponent).item.fontWeight })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("待收货")
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "flex flex-col items-center w-[20%] flex-shrink-0",
                onClick: _cache[5] || (_cache[5] = ($event) => toList(5))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "relative w-[44rpx] h-[44rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "w-[44rpx] h-[44rpx]",
                        src: unref(img)("addon/shop/diy/member/order4.png")
                      }, null, 8, ["src"]),
                      orderInfo.value.evaluate ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["absolute left-[35rpx] top-[-10rpx] rounded-[28rpx] h-[28rpx] min-w-[28rpx] text-center leading-[30rpx] bg-[#FF4646] text-[#fff] text-[20rpx] font-500 box-border", orderInfo.value.evaluate > 9 ? "px-[10rpx]" : ""])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(orderInfo.value.evaluate > 99 ? "99+" : orderInfo.value.evaluate), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "mt-[20rpx] leading-[1]",
                    style: normalizeStyle({ fontSize: unref(diyComponent).item.fontSize * 2 + "rpx", color: unref(diyComponent).item.color, fontWeight: unref(diyComponent).item.fontWeight })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("待评价")
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "flex flex-col items-center w-[20%] flex-shrink-0",
                onClick: _cache[6] || (_cache[6] = ($event) => unref(redirect)({ url: "/addon/shop/pages/refund/list" }))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "relative w-[44rpx] h-[44rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "w-[44rpx] h-[44rpx]",
                        src: unref(img)("addon/shop/diy/member/order5.png")
                      }, null, 8, ["src"]),
                      orderInfo.value.refund ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["absolute left-[35rpx] top-[-10rpx] rounded-[28rpx] h-[28rpx] min-w-[28rpx] text-center leading-[30rpx] bg-[#FF4646] text-[#fff] text-[20rpx] font-500 box-border", orderInfo.value.refund > 9 ? "px-[10rpx]" : ""])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(orderInfo.value.refund > 99 ? "99+" : orderInfo.value.refund), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "mt-[20rpx] leading-[1]",
                    style: normalizeStyle({ fontSize: unref(diyComponent).item.fontSize * 2 + "rpx", color: unref(diyComponent).item.color, fontWeight: unref(diyComponent).item.fontWeight })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("售后/退款")
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
