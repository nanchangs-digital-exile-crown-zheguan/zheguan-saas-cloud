/* __addonChunkWindiInjected:goods-detail_vue_vue_type_script_setup_true_lang_8be78f0c */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("goods-detail_vue_vue_type_script_setup_true_lang_8be78f0c",".bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-tr-\\[40rpx\\]{\n  border-top-right-radius: 1.25rem;\n}.rounded-tl-\\[40rpx\\]{\n  border-top-left-radius: 1.25rem;\n}.inline-block{\n  display: inline-block;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-start{\n  align-items: flex-start;\n}.items-baseline{\n  align-items: baseline;\n}.justify-between{\n  justify-content: space-between;\n}.font-medium{\n  font-weight: 500;\n}.h-\\[80vh\\]{\n  height: 80vh;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[32rpx\\]{\n  font-size: 1rem;\n}.text-\\[48rpx\\]{\n  font-size: 1.5rem;\n}.\\!text-\\[30rpx\\]{\n  font-size: 0.9375rem !important;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-\\[34rpx\\]{\n  line-height: 1.0625rem;\n}.mr-\\[4rpx\\]{\n  margin-right: 0.125rem;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.mt-\\[24rpx\\]{\n  margin-top: 0.75rem;\n}.-mt-\\[34rpx\\]{\n  margin-top: -1.0625rem;\n}.mb-\\[12rpx\\]{\n  margin-bottom: 0.375rem;\n}.mt-\\[40rpx\\]{\n  margin-top: 1.25rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}.px-\\[var\\(--pad-sidebar-m\\)\\]{\n  padding-left: var(--pad-sidebar-m);\n  padding-right: var(--pad-sidebar-m);\n}.\\!py-\\[0\\]{\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}.pt-\\[30rpx\\]{\n  padding-top: 0.9375rem;\n}.relative{\n  position: relative;\n}.\\!text-left{\n  text-align: left !important;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.whitespace-nowrap{\n  white-space: nowrap;\n}.w-full{\n  width: 100%;\n}.transform{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n}.translate-x-0{\n  --tw-translate-x: 0px;\n}.transition-transform{\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.ease-linear{\n  transition-timing-function: linear;\n}.duration-300{\n  transition-duration: 300ms;\n}");
import { i as index$g, a as index$i, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import { _ as __easycom_2 } from "./u-swiper.8d34e912.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, withModifiers, createVNode, normalizeClass, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { _ as __easycom_1 } from "./u-parse.86a7da80.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { d as request, l as deepClone, i as img } from "./common.f536f441.js";
function getShopImpulseBuyConfig() {
  return request.get(`shop_impulse_buy/config`);
}
function getShopImpulseBuyList(params) {
  return request.get(`shop_impulse_buy/list`, params);
}
function getShopImpulseBuyDetail(params) {
  return request.get(`shop_impulse_buy/detail/${params.impulse_buy_goods_id}`, params);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "goods-detail",
  setup(__props, { expose }) {
    const show = ref(false);
    const loading = ref(false);
    const goodsDetail = ref();
    const propData = ref();
    const open = (data) => {
      goodsDetail.value = "";
      show.value = true;
      propData.value = data;
      getDetailFn({ impulse_buy_goods_id: data.impulse_buy_goods_id });
    };
    const getDetailFn = (parse) => {
      getShopImpulseBuyDetail(parse).then(({ data }) => {
        goodsDetail.value = deepClone(data);
        goodsDetail.value.goods.goods_image = goodsDetail.value.goods.goods_image_thumb_big;
        goodsDetail.value.goods.goods_image.forEach((item, index) => {
          goodsDetail.value.goods.goods_image[index] = img(item);
        });
        loading.value = false;
      });
    };
    const goodsDetailSave = () => {
      if (propData.value && propData.value.num)
        ;
      show.value = false;
    };
    const detailHeadBgChange = ref(false);
    const scrollFn = (e) => {
      let scrollTop = e.detail.scrollTop;
      if (scrollTop > 375) {
        detailHeadBgChange.value = true;
      } else {
        detailHeadBgChange.value = false;
      }
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_swiper = resolveEasycom(resolveDynamicComponent("u-swiper"), __easycom_2);
      const _component_v_uni_text = index$i;
      const _component_u_parse = resolveEasycom(resolveDynamicComponent("u-parse"), __easycom_1);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        onClose: _cache[2] || (_cache[2] = ($event) => show.value = false),
        mode: "bottom",
        round: 10
      }, {
        default: withCtx(() => [
          goodsDetail.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent", "stop"])),
            class: "popup-common bg-[var(--page-bg-color)]"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: normalizeClass(["absolute top-[30rpx] right-[20rpx] z-10 p-[10rpx] bg-[rgba(255,255,255,.4)] rounded-full border-[2rpx] border-solid border-transparent box-border nc-iconfont nc-icon-guanbiV6xx2 font-bold text-[#303133] text-[36rpx]", { "border-[#d8d8d8]": detailHeadBgChange.value }]),
                onClick: _cache[0] || (_cache[0] = ($event) => show.value = false)
              }, null, 8, ["class"]),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "h-[80vh]",
                onScroll: scrollFn
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "w-full transition-transform duration-300 ease-linear transform translate-x-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "swiper-box" }, {
                        default: withCtx(() => [
                          createVNode(_component_u_swiper, {
                            list: goodsDetail.value.goods.goods_image,
                            indicator: goodsDetail.value.goods.goods_image.length,
                            indicatorStyle: { "bottom": "70rpx" },
                            autoplay: true,
                            height: "100vw",
                            radius: "0"
                          }, null, 8, ["list", "indicator"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "bg-[var(--page-bg-color)] rounded-tr-[40rpx] rounded-tl-[40rpx] overflow-hidden -mt-[34rpx] relative" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "flex flex-col px-[30rpx] pt-[30rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[var(--price-text-color)] flex items-baseline mb-[12rpx]" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "inline-block goods-price-time" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "price-font text-[32rpx]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("￥")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, { class: "price-font text-[48rpx]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(parseFloat(goodsDetail.value.impulse_buy_price).toFixed(2).split(".")[0]), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, { class: "price-font text-[32rpx] mr-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("." + toDisplayString(parseFloat(goodsDetail.value.impulse_buy_price).toFixed(2).split(".")[1]), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[#333] font-medium text-[30rpx] multi-hidden leading-[40rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(goodsDetail.value.goods.goods_name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "flex justify-between items-start mt-[24rpx]" }, {
                            default: withCtx(() => [
                              goodsDetail.value.sku && goodsDetail.value.sku.sku_name ? (openBlock(), createBlock(_component_v_uni_view, {
                                key: 0,
                                class: "text-[24rpx] leading-[34rpx] text-[var(--text-color-light6)]"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "whitespace-nowrap mr-[4rpx]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("已选:")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(goodsDetail.value.sku.sku_name), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_v_uni_view, { class: "text-[24rpx] leading-[34rpx] text-[var(--text-color-light6)]" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "whitespace-nowrap mr-[4rpx]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("库存:")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(goodsDetail.value.sku.stock), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(goodsDetail.value.goods.unit), 1)
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
                      createVNode(_component_v_uni_view, { class: "mt-[40rpx] sidebar-margin card-template px-[var(--pad-sidebar-m)]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "title !py-[0] !text-left !text-[30rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("商品详情")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "u-content" }, {
                            default: withCtx(() => [
                              createVNode(_component_u_parse, {
                                content: goodsDetail.value.goods.goods_desc,
                                tagStyle: { img: "vertical-align: top;", p: "overflow: hidden;word-break:break-word;" }
                              }, null, 8, ["content"])
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
              createVNode(_component_v_uni_view, { class: "btn-wrap" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, {
                    class: normalizeClass(["primary-btn-bg btn", { "opacity-80": propData.value && propData.value.num }]),
                    onClick: goodsDetailSave
                  }, {
                    default: withCtx(() => [
                      createTextVNode("确定")
                    ]),
                    _: 1
                  }, 8, ["class"])
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
export {
  _sfc_main as _,
  getShopImpulseBuyList as a,
  getShopImpulseBuyConfig as g
};
