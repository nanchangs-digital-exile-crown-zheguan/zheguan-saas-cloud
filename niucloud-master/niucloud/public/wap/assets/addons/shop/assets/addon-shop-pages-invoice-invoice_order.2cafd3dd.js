/* __addonChunkWindiInjected:addon-shop-pages-invoice-invoice_order_2cafd3dd */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-invoice-invoice_order_2cafd3dd",".bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-\\[var\\(--goods-rounded-big\\)\\]{\n  border-radius: var(--goods-rounded-big);\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.justify-end{\n  justify-content: flex-end;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.h-\\[150rpx\\]{\n  height: 4.6875rem;\n}.h-\\[24rpx\\]{\n  height: 0.75rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[36rpx\\]{\n  font-size: 1.125rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-\\[30rpx\\]{\n  line-height: 0.9375rem;\n}.leading-\\[1\\]{\n  line-height: 1;\n}.leading-\\[26rpx\\]{\n  line-height: 0.8125rem;\n}.leading-\\[28rpx\\]{\n  line-height: 0.875rem;\n}.leading-\\[34rpx\\]{\n  line-height: 1.0625rem;\n}.leading-\\[36rpx\\]{\n  line-height: 1.125rem;\n}.leading-\\[42rpx\\]{\n  line-height: 1.3125rem;\n}.mt-\\[14rpx\\]{\n  margin-top: 0.4375rem;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.mb-\\[10rpx\\]{\n  margin-bottom: 0.3125rem;\n}.mt-\\[8rpx\\]{\n  margin-top: 0.25rem;\n}.ml-\\[8rpx\\]{\n  margin-left: 0.25rem;\n}.mb-\\[var\\(--top-m\\)\\]{\n  margin-bottom: var(--top-m);\n}.max-w-\\[322rpx\\]{\n  max-width: 10.0625rem;\n}.max-w-\\[369rpx\\]{\n  max-width: 11.53125rem;\n}.min-h-screen{\n  min-height: 100vh;\n}.overflow-hidden{\n  overflow: hidden;\n}.pt-\\[var\\(--top-m\\)\\]{\n  padding-top: var(--top-m);\n}.text-right{\n  text-align: right;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.text-\\[\\#FFB000\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 176, 0, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[150rpx\\]{\n  width: 4.6875rem;\n}.w-\\[90rpx\\]{\n  width: 2.8125rem;\n}.w-\\[56rpx\\]{\n  width: 1.75rem;\n}");
import { i as index$g, b as index$q, a as index$i } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createElementBlock, Fragment, renderList, createVNode, withModifiers, createTextVNode, toDisplayString, unref, createCommentVNode } from "/wap/assets/shared/vue.js";
import { o as onLoad, r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { g as getInvoiceInfo } from "./invoice.bda7cbc9.js";
import { i as img, r as redirect } from "./common.f536f441.js";
import "./u-icon.ceb3960f.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invoice_order",
  setup(__props) {
    const list = ref([]);
    const loading = ref(true);
    onLoad((option) => {
      if (option.invoice_id) {
        loading.value = true;
        getInvoiceInfo(option.invoice_id).then((res) => {
          list.value = res.data.order_list;
          loading.value = false;
        });
      }
    });
    const toLink = (data) => {
      redirect({ url: "/addon/shop/pages/order/detail", param: { order_id: data.order_id } });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "bg-[var(--page-bg-color)] min-h-screen overflow-hidden",
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          list.value.length && !loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "sidebar-margin pt-[var(--top-m)]"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (item, index) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: index,
                  class: "mb-[var(--top-m)] card-template flex-1"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, {
                      onClick: withModifiers(($event) => toLink(item), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "flex justify-between items-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "text-[#303133] text-[24rpx] font-400 leading-[36rpx] flex items-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "ml-[10rpx] text-[24rpx] font-400 text-[#303133]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("订单号：" + toDisplayString(item.order_no), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.order_goods, (subItem, index2) => {
                          return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                            createVNode(_component_v_uni_view, { class: "flex box-border mt-[20rpx]" }, {
                              default: withCtx(() => [
                                createVNode(_component_up_image, {
                                  width: "150rpx",
                                  height: "150rpx",
                                  radius: "var(--goods-rounded-big)",
                                  src: unref(img)(subItem.goods_image_thumb_small ? subItem.goods_image_thumb_small : ""),
                                  mode: "aspectFill"
                                }, {
                                  error: withCtx(() => [
                                    createVNode(_component_v_uni_image, {
                                      class: "w-[150rpx] h-[150rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",
                                      src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                                      mode: "aspectFill"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1032, ["radius", "src"]),
                                createVNode(_component_v_uni_view, { class: "ml-[20rpx] flex flex-1 flex-col box-border" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_view, { class: "flex justify-between items-baseline" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_uni_view, { class: "max-w-[322rpx] text-[28rpx] leading-[40rpx] font-400 truncate text-[#303133]" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(subItem.goods_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_uni_view, { class: "text-right leading-[42rpx] ml-[10rpx]" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_uni_text, { class: "text-[22rpx] price-font" }, {
                                              default: withCtx(() => [
                                                createTextVNode("￥")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_uni_text, { class: "text-[36rpx] font-500 price-font" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(parseFloat(subItem.price).toFixed(2).split(".")[0]), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_uni_text, { class: "text-[22rpx] font-500 price-font" }, {
                                              default: withCtx(() => [
                                                createTextVNode("." + toDisplayString(parseFloat(subItem.price).toFixed(2).split(".")[1]), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_uni_view, { class: "flex justify-between items-baseline text-[#303133] mt-[14rpx]" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_uni_view, null, {
                                          default: withCtx(() => [
                                            subItem.sku_name ? (openBlock(), createBlock(_component_v_uni_view, {
                                              key: 0,
                                              class: "text-[24rpx] text-[var(--text-color-light6)] font-400 truncate leading-[34rpx] max-w-[369rpx] mb-[10rpx]"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(subItem.sku_name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_uni_text, { class: "text-right text-[26rpx] font-400 w-[90rpx] leading-[36rpx]" }, {
                                          default: withCtx(() => [
                                            createTextVNode("x" + toDisplayString(subItem.num), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            subItem.extend && subItem.extend.is_newcomer && subItem.num > 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "flex items-center box-border mt-[8rpx]"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_image, {
                                  class: "h-[24rpx] w-[56rpx]",
                                  src: unref(img)("addon/shop/newcomer.png"),
                                  mode: "heightFix"
                                }, null, 8, ["src"]),
                                createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[#FFB000] leading-[34rpx] ml-[8rpx]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("第1" + toDisplayString(subItem.unit) + "，￥" + toDisplayString(parseFloat(subItem.extend.newcomer_price).toFixed(2)) + "/" + toDisplayString(subItem.unit) + "；第" + toDisplayString(subItem.num > 2 ? "2~" + subItem.num : "2") + toDisplayString(subItem.unit) + "，￥" + toDisplayString(parseFloat(subItem.price).toFixed(2)) + "/" + toDisplayString(subItem.unit), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_v_uni_view, { class: "flex justify-end items-center mt-[20rpx]" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "flex items-baseline" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "text-[22rpx] font-400 leading-[30rpx] text-[#303133]" }, {
                              default: withCtx(() => [
                                createTextVNode("实付款：")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_uni_view, { class: "leading-[1] text-[var(--price-text-color)]" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_text, { class: "text-[22rpx] leading-[26rpx] price-font" }, {
                                  default: withCtx(() => [
                                    createTextVNode("￥")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_uni_text, { class: "text-[36rpx] font-500 leading-[40rpx] price-font" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(parseFloat(item.order_money).toFixed(2).split(".")[0]), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_uni_text, { class: "text-[22rpx] font-500 leading-[28rpx] price-font" }, {
                                  default: withCtx(() => [
                                    createTextVNode("." + toDisplayString(parseFloat(item.order_money).toFixed(2).split(".")[1]), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
