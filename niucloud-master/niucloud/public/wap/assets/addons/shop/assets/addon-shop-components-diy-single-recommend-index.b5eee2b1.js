/* __addonChunkWindiInjected:addon-shop-components-diy-single-recommend-index_b5eee2b1 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-single-recommend-index_b5eee2b1",".bg-\\[\\#fff\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.bg-\\[red\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 0, 0, var(--tw-bg-opacity));\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.h-full{\n  height: 100%;\n}.h-\\[28rpx\\]{\n  height: 0.875rem;\n}.h-\\[44rpx\\]{\n  height: 1.375rem;\n}.h-\\[34rpx\\]{\n  height: 1.0625rem;\n}.h-\\[504rpx\\]{\n  height: 15.75rem;\n}.h-\\[350rpx\\]{\n  height: 10.9375rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.text-\\[32rpx\\]{\n  font-size: 1rem;\n}.text-\\[40rpx\\]{\n  font-size: 1.25rem;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-0{\n  line-height: 0rem;\n}.ml-\\[6rpx\\]{\n  margin-left: 0.1875rem;\n}.mb-\\[20rpx\\]{\n  margin-bottom: 0.625rem;\n}.ml-\\[auto\\]{\n  margin-left: auto;\n}.mt-\\[28rpx\\]{\n  margin-top: 0.875rem;\n}.max-w-\\[50rpx\\]{\n  max-width: 1.5625rem;\n}.max-w-\\[60rpx\\]{\n  max-width: 1.875rem;\n}.max-w-\\[80rpx\\]{\n  max-width: 2.5rem;\n}.max-w-\\[200rpx\\]{\n  max-width: 6.25rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[16rpx\\]{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}.pt-\\[16rpx\\]{\n  padding-top: 0.5rem;\n}.pb-\\[20rpx\\]{\n  padding-bottom: 0.625rem;\n}.relative{\n  position: relative;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-full{\n  width: 100%;\n}.\\!w-full{\n  width: 100% !important;\n}.w-\\[auto\\]{\n  width: auto;\n}.w-\\[44rpx\\]{\n  width: 1.375rem;\n}.w-\\[340rpx\\]{\n  width: 10.625rem;\n}.w-\\[346rpx\\]{\n  width: 10.8125rem;\n}");
/* __addonChunkCssInjected:8af652dd */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("8af652dd",".addon-wrap-8af652dd .swiper.ns-indicator-dots-three .uni-swiper-dots-horizontal{bottom:.375rem}.addon-wrap-8af652dd .swiper.ns-indicator-dots-three .uni-swiper-dot{width:.25rem;height:.25rem;border-radius:.25rem;margin-right:.4375rem}.addon-wrap-8af652dd .swiper.ns-indicator-dots-three .uni-swiper-dot:last-of-type{margin-right:0}.addon-wrap-8af652dd .swiper.ns-indicator-dots-three .uni-swiper-dot-active{width:.9375rem}.addon-wrap-8af652dd .swiper-dot-box{position:absolute;bottom:.125rem;width:100%;display:flex;align-items:center;justify-content:center;padding:0 2.5rem .25rem;box-sizing:border-box}.addon-wrap-8af652dd .swiper-dot-box .swiper-dot{background-color:#b2b2b2;width:.3125rem;border-radius:50%;height:.3125rem;margin:.25rem}.addon-wrap-8af652dd .swiper-dot-box.straightLineStyle2 .swiper-dot{width:.25rem;height:.25rem;border-radius:.25rem;margin:0 .4375rem 0 0}.addon-wrap-8af652dd .swiper-dot-box.straightLineStyle2 .swiper-dot.last-of-type{margin-right:0}.addon-wrap-8af652dd .swiper-dot-box.straightLineStyle2 .swiper-dot.active{width:.9375rem}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g, a as index$i, X as SwiperItem, Y as Swiper } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./swiper.dd9c8dc2.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, ref, computed, onMounted, watch, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createCommentVNode, createTextVNode, toDisplayString, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { k as getGoodsComponents } from "./goods.3180989e.js";
import { u as useGoods } from "./useGoods.5d805636.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-icon.ceb3960f.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "value"],
  setup(__props) {
    const props = __props;
    const diyGoods = useGoods();
    const diyStore = useDiyStore();
    const goodsList = ref([]);
    const diyComponent = computed(() => {
      if (props.value) {
        return props.value;
      } else if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
    });
    let isShowDots = ref(true);
    isShowDots.value = true;
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
    const goodsTempCss = computed(() => {
      let style = "";
      if (diyComponent.value.elementBgColor)
        style += "background-color:" + diyComponent.value.elementBgColor + ";";
      if (diyComponent.value.topElementRounded)
        style += "border-top-left-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
      if (diyComponent.value.topElementRounded)
        style += "border-top-right-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
      if (diyComponent.value.bottomElementRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
      if (diyComponent.value.bottomElementRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        style += "width: calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 20rpx) / 2);";
      else
        style += "width: calc((100vw - 20rpx) / 2 );";
      return style;
    });
    const goodsImgCss = computed(() => {
      let style = "";
      if (diyComponent.value.topElementRounded)
        style += "border-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
      return style;
    });
    const carouselCss = computed(() => {
      let style = "";
      if (diyComponent.value.topCarouselRounded)
        style += "border-top-left-radius:" + diyComponent.value.topCarouselRounded * 2 + "rpx;";
      if (diyComponent.value.topCarouselRounded)
        style += "border-top-right-radius:" + diyComponent.value.topCarouselRounded * 2 + "rpx;";
      if (diyComponent.value.bottomCarouselRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomCarouselRounded * 2 + "rpx;";
      if (diyComponent.value.bottomCarouselRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomCarouselRounded * 2 + "rpx;";
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        style += "width: calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 20rpx) / 2);";
      else
        style += "width: calc((100vw - 20rpx) / 2 );";
      return style;
    });
    const getGoodsListFn = () => {
      let data = {
        num: 1,
        goods_ids: diyComponent.value.source == "custom" ? diyComponent.value.goods_ids : ""
      };
      getGoodsComponents(data).then((res) => {
        goodsList.value = res.data;
      });
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode != "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            refresh();
          },
          { deep: true }
        );
      }
    });
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        let obj = {
          goods_cover_thumb_mid: "",
          goods_name: "商品名称",
          sale_num: "100",
          unit: "件",
          goodsSku: { show_price: 100 }
        };
        goodsList.value.push(obj);
      } else {
        getGoodsListFn();
      }
    };
    const toLink = (data) => {
      redirect({ url: "/addon/shop/pages/goods/detail", param: { goods_id: data.goods_id } });
    };
    const swiperIndex = ref(0);
    const swiperChange = (e) => {
      swiperIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      return goodsList.value && goodsList.value[0] ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          unref(diyComponent).textImg || unref(diyComponent).subTitle.text ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "flex justify-between items-center mb-[20rpx]"
          }, {
            default: withCtx(() => [
              unref(diyComponent).textImg ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "h-[34rpx] flex items-center",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).textLink))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    class: "h-[100%] w-[auto]",
                    src: unref(img)(unref(diyComponent).textImg),
                    mode: "heightFix"
                  }, null, 8, ["src"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(diyComponent).subTitle.text ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "flex items-center ml-[auto]",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).subTitle.link)),
                style: normalizeStyle({ "color": unref(diyComponent).subTitle.textColor })
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "text-[24rpx]" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).subTitle.text), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "text-[22rpx] iconfont iconxiangyoujiantou" })
                ]),
                _: 1
              }, 8, ["style"])) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "flex justify-between" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "relative w-[340rpx] overflow-hidden",
                style: normalizeStyle(unref(carouselCss))
              }, {
                default: withCtx(() => [
                  unref(diyComponent).list.length == 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "leading-0 overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        onClick: _cache[2] || (_cache[2] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).list[0].link))
                      }, {
                        default: withCtx(() => [
                          unref(diyComponent).list[0].imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                            key: 0,
                            src: unref(img)(unref(diyComponent).list[0].imageUrl),
                            mode: "heightFix",
                            class: "h-[504rpx] !w-full",
                            "show-menu-by-longpress": true
                          }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_uni_image, {
                            key: 1,
                            src: unref(img)("static/resource/images/diy/figure.png"),
                            mode: "heightFix",
                            class: "h-[504rpx] !w-full",
                            "show-menu-by-longpress": true
                          }, null, 8, ["src"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_v_uni_swiper, {
                    key: 1,
                    class: "swiper ns-indicator-dots-three h-[504rpx]",
                    autoplay: "true",
                    circular: "true",
                    "indicator-dots": unref(isShowDots),
                    onChange: swiperChange,
                    "indicator-color": unref(diyComponent).indicatorColor,
                    "indicator-active-color": unref(diyComponent).indicatorActiveColor
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item) => {
                        return openBlock(), createBlock(_component_v_uni_swiper_item, {
                          class: "swiper-item",
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, {
                              onClick: ($event) => unref(diyStore).toRedirect(item.link)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "item h-[504rpx]" }, {
                                  default: withCtx(() => [
                                    item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                      key: 0,
                                      src: unref(img)(item.imageUrl),
                                      mode: "scaleToFill",
                                      class: "w-full h-full",
                                      "show-menu-by-longpress": true
                                    }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                      key: 1,
                                      src: unref(img)("static/resource/images/diy/figure.png"),
                                      mode: "scaleToFill",
                                      class: "w-full h-full",
                                      "show-menu-by-longpress": true
                                    }, null, 8, ["src"]))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["indicator-dots", "indicator-color", "indicator-active-color"]))
                ]),
                _: 1
              }, 8, ["style"]),
              createVNode(_component_v_uni_view, {
                class: "w-[340rpx] h-[504rpx] flex flex-col bg-[#fff] box-border overflow-hidden",
                style: normalizeStyle(unref(goodsTempCss)),
                onClick: _cache[3] || (_cache[3] = ($event) => toLink(goodsList.value[0]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    style: normalizeStyle(unref(goodsImgCss)),
                    class: "w-[346rpx] h-[350rpx] overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_up_image, {
                        width: "346rpx",
                        height: "350rpx",
                        src: unref(img)(goodsList.value[0].goods_cover_thumb_mid || ""),
                        mode: unref(diyComponent).mode
                      }, {
                        error: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            class: "w-[346rpx] h-[350rpx]",
                            src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                            mode: "aspectFill"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }, 8, ["src", "mode"])
                    ]),
                    _: 1
                  }, 8, ["style"]),
                  createVNode(_component_v_uni_view, { class: "px-[16rpx] flex-1 pt-[16rpx] pb-[20rpx] flex flex-col justify-between" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "text-[#303133] leading-[40rpx] text-[28rpx] truncate",
                        style: normalizeStyle({ color: unref(diyComponent).goodsNameStyle.color, fontWeight: unref(diyComponent).goodsNameStyle.fontWeight })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(goodsList.value[0].goods_name), 1)
                        ]),
                        _: 1
                      }, 8, ["style"]),
                      createVNode(_component_v_uni_view, { class: "flex justify-between flex-wrap items-baseline mt-[28rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, {
                                class: "text-[var(--price-text-color)] price-font truncate max-w-[200rpx]",
                                style: normalizeStyle({ color: unref(diyComponent).priceStyle.mainColor })
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "text-[24rpx] font-400" }, {
                                    default: withCtx(() => [
                                      createTextVNode("￥")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, { class: "text-[40rpx] font-500" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(parseFloat(unref(diyGoods).goodsPrice(goodsList.value[0])).toFixed(2).split(".")[0]), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_text, { class: "text-[24rpx] font-500" }, {
                                    default: withCtx(() => [
                                      createTextVNode("." + toDisplayString(parseFloat(unref(diyGoods).goodsPrice(goodsList.value[0])).toFixed(2).split(".")[1]), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["style"]),
                              unref(diyGoods).priceType(goodsList.value[0]) == "member_price" ? (openBlock(), createBlock(_component_v_uni_image, {
                                key: 0,
                                class: "max-w-[50rpx] h-[28rpx] ml-[6rpx]",
                                src: unref(img)("addon/shop/VIP.png"),
                                mode: "heightFix"
                              }, null, 8, ["src"])) : unref(diyGoods).priceType(goodsList.value[0]) == "newcomer_price" ? (openBlock(), createBlock(_component_v_uni_image, {
                                key: 1,
                                class: "max-w-[60rpx] h-[28rpx] ml-[6rpx]",
                                src: unref(img)("addon/shop/newcomer.png"),
                                mode: "heightFix"
                              }, null, 8, ["src"])) : unref(diyGoods).priceType(goodsList.value[0]) == "discount_price" ? (openBlock(), createBlock(_component_v_uni_image, {
                                key: 2,
                                class: "max-w-[80rpx] h-[28rpx] ml-[6rpx]",
                                src: unref(img)("addon/shop/discount.png"),
                                mode: "heightFix"
                              }, null, 8, ["src"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, {
                            class: "w-[44rpx] h-[44rpx] bg-[red] flex items-center justify-center rounded-[50%]",
                            style: normalizeStyle({ backgroundColor: unref(diyComponent).saleStyle.color })
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, { class: "iconfont iconjia font-500 text-[32rpx] text-[#fff]" })
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
              }, 8, ["style"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8af652dd_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8af652dd"]]);
export {
  index as default
};
