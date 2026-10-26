/* __addonChunkWindiInjected:ns-goods-manjian_14ea0582 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("ns-goods-manjian_14ea0582",".bg-\\[var\\(--primary-color-light\\)\\]{\n  background-color: var(--primary-color-light);\n}.rounded-\\[6rpx\\]{\n  border-radius: 0.1875rem;\n}.rounded-\\[var\\(--goods-rounded-big\\)\\]{\n  border-radius: var(--goods-rounded-big);\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.justify-end{\n  justify-content: flex-end;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.h-\\[120rpx\\]{\n  height: 3.75rem;\n}.h-\\[520rpx\\]{\n  height: 16.25rem;\n}.h-\\[38rpx\\]{\n  height: 1.1875rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.\\!text-\\[28rpx\\]{\n  font-size: 0.875rem !important;\n}.leading-\\[32rpx\\]{\n  line-height: 1rem;\n}.mt-\\[16rpx\\]{\n  margin-top: 0.5rem;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.mb-\\[30rpx\\]{\n  margin-bottom: 0.9375rem;\n}.mr-\\[6rpx\\]{\n  margin-right: 0.1875rem;\n}.ml-\\[8rpx\\]{\n  margin-left: 0.25rem;\n}.mt-\\[4rpx\\]{\n  margin-top: 0.125rem;\n}.mb-\\[40rpx\\]{\n  margin-bottom: 1.25rem;\n}.ml-\\[auto\\]{\n  margin-left: auto;\n}.ml-\\[33rpx\\]{\n  margin-left: 1.03125rem;\n}.min-h-\\[480rpx\\]{\n  min-height: 15rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[var\\(--popup-sidebar-m\\)\\]{\n  padding-left: var(--popup-sidebar-m);\n  padding-right: var(--popup-sidebar-m);\n}.px-\\[12rpx\\]{\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}.pt-\\[6rpx\\]{\n  padding-top: 0.1875rem;\n}.pb-\\[10rpx\\]{\n  padding-bottom: 0.3125rem;\n}.pt-\\[30rpx\\]{\n  padding-top: 0.9375rem;\n}.\\!pb-\\[30rpx\\]{\n  padding-bottom: 0.9375rem !important;\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.text-\\[var\\(--primary-color\\)\\]{\n  color: var(--primary-color);\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-0{\n  width: 0px;\n}.w-\\[120rpx\\]{\n  width: 3.75rem;\n}.w-\\[100rpx\\]{\n  width: 3.125rem;\n}");
/* __addonChunkCssInjected:9f6eb386 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("9f6eb386",".addon-wrap-9f6eb386 .manjian-popup .u-slide-up-enter-to{z-index:999999!important}");
import { i as index$g, a as index$i, b as index$q, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withModifiers, withCtx, createVNode, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString, normalizeClass, unref, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { i as img, j as cloneDeep, l as deepClone, r as redirect } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ns-goods-manjian",
  setup(__props, { expose }) {
    const manjianShow = ref(false);
    const dataList = ref([]);
    const open = (parameter = [], traverseType) => {
      console.log("parameter", parameter, traverseType);
      dataList.value = [];
      parameter.forEach((activity) => {
        const clonedActivity = cloneDeep(activity);
        clonedActivity.content = [];
        const targetList = traverseType === "rule_json" ? clonedActivity.rule_json : [clonedActivity.rule];
        targetList.forEach((rule) => {
          if (rule.is_show === void 0 || rule.is_show) {
            const ruleObj = {};
            ruleObj.limit = `门槛满${clonedActivity.condition_type === "over_n_yuan" ? parseFloat(rule.limit).toFixed(2) : rule.limit}${clonedActivity.condition_type === "over_n_yuan" ? "元" : "件"}`;
            if (rule.is_give_goods && rule.goods && rule.goods.length) {
              ruleObj.goods = deepClone(rule.goods);
            }
            ruleObj.give = [];
            if (rule.is_discount && rule.discount_money) {
              ruleObj.give.push({
                label: "满减",
                content: `订单金额${rule.discount_type === 1 ? "减" : "打"}${rule.discount_type === 1 ? parseFloat(rule.discount_money).toFixed(2) : rule.discount_money}${rule.discount_type === 1 ? "元" : "折"}`
              });
            }
            if (rule.is_free_shipping) {
              ruleObj.give.push({
                label: "包邮",
                content: "商品包邮"
              });
            }
            if (rule.is_give_point && rule.point) {
              ruleObj.give.push({
                label: "积分",
                content: `送${rule.point}积分`
              });
            }
            if (rule.is_give_balance && rule.balance) {
              ruleObj.give.push({
                label: "余额",
                content: `送${parseFloat(rule.balance).toFixed(2)}余额`
              });
            }
            if (rule.is_give_coupon && rule.coupon && rule.coupon.length) {
              ruleObj.coupon = deepClone(rule.coupon);
            }
            clonedActivity.content.push(ruleObj);
          }
        });
        dataList.value.push(clonedActivity);
      });
      manjianShow.value = true;
    };
    const goodsEvent = (id) => {
      redirect({
        url: "/addon/shop/pages/goods/detail",
        param: {
          goods_id: id
        }
      });
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_v_uni_view, {
        onTouchmove: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["prevent", "stop"]))
      }, {
        default: withCtx(() => [
          createVNode(_component_u_popup, {
            class: "manjian-popup",
            show: manjianShow.value,
            onClose: _cache[2] || (_cache[2] = ($event) => manjianShow.value = false),
            zIndex: "999999"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "min-h-[480rpx] popup-common",
                onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["prevent", "stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "title !pb-[30rpx]" }, {
                    default: withCtx(() => [
                      createTextVNode("满减送")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_scroll_view, {
                    class: "h-[520rpx]",
                    "scroll-y": "true"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "px-[var(--popup-sidebar-m)] pt-[30rpx]" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(dataList.value, (activity, actIndex) => {
                            return openBlock(), createBlock(_component_v_uni_view, {
                              key: actIndex,
                              class: "mb-[40rpx]"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[28rpx] font-500 text-[#333] mb-[30rpx]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(activity.manjian_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(activity.content, (item, ruleIndex) => {
                                  return openBlock(), createBlock(_component_v_uni_view, {
                                    key: ruleIndex,
                                    class: "mb-[30rpx]"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-qianbaoyueV6xx !text-[28rpx] mr-[10rpx]" }),
                                          createVNode(_component_v_uni_text, { class: "text-[26rpx] font-500" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.limit), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_uni_view, { class: "mt-[20rpx]" }, {
                                        default: withCtx(() => [
                                          item.goods && item.goods.length ? (openBlock(), createBlock(_component_v_uni_view, {
                                            key: 0,
                                            class: "flex mt-[20rpx] ml-[10rpx]"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_view, { class: "w-[100rpx] flex justify-end" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_uni_view, { class: "bg-[var(--primary-color-light)] text-[var(--primary-color)] rounded-[6rpx] text-[22rpx] flex items-center justify-center px-[12rpx] h-[38rpx] mr-[6rpx]" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("赠品")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_uni_view, { class: "flex-1 ml-[8rpx]" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.goods, (goodsItem, goodsIndex) => {
                                                    return openBlock(), createBlock(_component_v_uni_view, {
                                                      class: normalizeClass(["flex p-[20rpx] bg-[#f8f8f8] rounded-[var(--goods-rounded-big)] overflow-hidden", { "mb-[20rpx]": goodsIndex != item.goods.length - 1 }]),
                                                      key: goodsIndex,
                                                      onClick: ($event) => goodsEvent(goodsItem.goods_id)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_up_image, {
                                                          radius: "var(--goods-rounded-mid)",
                                                          width: "120rpx",
                                                          height: "120rpx",
                                                          src: unref(img)(goodsItem.sku_image),
                                                          model: "aspectFill"
                                                        }, {
                                                          error: withCtx(() => [
                                                            createVNode(_component_v_uni_image, {
                                                              class: "w-[120rpx] h-[120rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",
                                                              src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                                                              mode: "aspectFill"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["src"]),
                                                        createVNode(_component_v_uni_view, { class: "flex flex-1 w-0 flex-col justify-between ml-[20rpx] pt-[6rpx] pb-[10rpx]" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_uni_view, { class: "truncate text-[#303133] text-[24rpx] leading-[32rpx]" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(goodsItem.goods_name), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_uni_view, { class: "flex items-baseline" }, {
                                                              default: withCtx(() => [
                                                                goodsItem.sku_name ? (openBlock(), createBlock(_component_v_uni_view, {
                                                                  key: 0,
                                                                  class: "truncate text-[22rpx] mt-[4rpx] text-[#999]"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(goodsItem.sku_name), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)) : createCommentVNode("", true),
                                                                createVNode(_component_v_uni_view, { class: "font-400 ml-[auto] text-[24rpx] text-[#303133]" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_uni_text, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("x")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_uni_text, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(goodsItem.num), 1)
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
                                                    }, 1032, ["class", "onClick"]);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true),
                                          item.give && item.give.length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(item.give, (giveItem, giveIndex) => {
                                            return openBlock(), createBlock(_component_v_uni_view, {
                                              class: "flex items-center mt-[16rpx] ml-[10rpx]",
                                              key: giveIndex
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_uni_view, { class: "w-[100rpx] flex justify-end" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_uni_view, { class: "bg-[var(--primary-color-light)] text-[var(--primary-color)] rounded-[6rpx] text-[22rpx] flex items-center justify-center px-[12rpx] h-[38rpx] mr-[6rpx]" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(giveItem.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_uni_text, { class: "text-[24rpx]" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(giveItem.content), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128)) : createCommentVNode("", true),
                                          item.coupon && item.coupon.length ? (openBlock(), createBlock(_component_v_uni_view, {
                                            key: 2,
                                            class: "flex items-baseline mt-[16rpx] ml-[33rpx]"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_view, { class: "w-[100rpx] flex justify-end" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_uni_view, { class: "bg-[var(--primary-color-light)] text-[var(--primary-color)] rounded-[6rpx] text-[22rpx] flex items-center justify-center px-[12rpx] h-[38rpx] mr-[6rpx]" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("优惠券")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_uni_view, { class: "flex flex-wrap flex-1" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.coupon, (couponItem, couponIndex) => {
                                                    return openBlock(), createBlock(_component_v_uni_text, {
                                                      class: normalizeClass(["flex items-center text-[24rpx] leading-[1.3]", { "mb-[16rpx]": couponIndex != item.coupon.length - 1 }]),
                                                      key: couponIndex
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(couponItem.num) + "张" + toDisplayString(couponItem.coupon_name) + "优惠券", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"]);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "btn-wrap" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_button, {
                        class: "primary-btn-bg btn",
                        onClick: _cache[0] || (_cache[0] = ($event) => manjianShow.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("确定")
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
          }, 8, ["show"])
        ]),
        _: 1
      });
    };
  }
});
const nsGoodsManjian_vue_vue_type_style_index_0_scoped_9f6eb386_lang = "";
const nsGoodsManjian = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f6eb386"]]);
export {
  nsGoodsManjian as n
};
