/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-recommend-index_fb0de6bb */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-recommend-index_fb0de6bb",".bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.border-\\[var\\(--primary-color\\)\\]{\n  border-color: var(--primary-color);\n}.rounded-\\[20rpx\\]{\n  border-radius: 0.625rem;\n}.rounded-\\[17rpx\\]{\n  border-radius: 0.53125rem;\n}.rounded-br-\\[20rpx\\]{\n  border-bottom-right-radius: 0.625rem;\n}.rounded-tr-\\[20rpx\\]{\n  border-top-right-radius: 0.625rem;\n}.rounded-tl-\\[24rpx\\]{\n  border-top-left-radius: 0.75rem;\n}.border-solid{\n  border-style: solid;\n}.border-\\[2rpx\\]{\n  border-width: 0.0625rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.font-bold{\n  font-weight: 700;\n}.h-\\[44rpx\\]{\n  height: 1.375rem;\n}.h-\\[34rpx\\]{\n  height: 1.0625rem;\n}.h-\\[341rpx\\]{\n  height: 10.65625rem;\n}.h-\\[134rpx\\]{\n  height: 4.1875rem;\n}.h-\\[63rpx\\]{\n  height: 1.96875rem;\n}.h-\\[278rpx\\]{\n  height: 8.6875rem;\n}.h-\\[184rpx\\]{\n  height: 5.75rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.text-\\[18rpx\\]{\n  font-size: 0.5625rem;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-\\[1\\]{\n  line-height: 1;\n}.leading-\\[34rpx\\]{\n  line-height: 1.0625rem;\n}.leading-\\[44rpx\\]{\n  line-height: 1.375rem;\n}.mx-auto{\n  margin-left: auto;\n  margin-right: auto;\n}.mr-\\[2rpx\\]{\n  margin-right: 0.0625rem;\n}.mr-\\[8rpx\\]{\n  margin-right: 0.25rem;\n}.mt-\\[-71rpx\\]{\n  margin-top: -2.21875rem;\n}.max-w-\\[105rpx\\]{\n  max-width: 3.28125rem;\n}.min-w-\\[168rpx\\]{\n  min-width: 5.25rem;\n}.px-\\[20rpx\\]{\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}.pl-\\[16rpx\\]{\n  padding-left: 0.5rem;\n}.pr-\\[20rpx\\]{\n  padding-right: 0.625rem;\n}.pt-\\[18rpx\\]{\n  padding-top: 0.5625rem;\n}.pt-\\[12rpx\\]{\n  padding-top: 0.375rem;\n}.pl-\\[4rpx\\]{\n  padding-left: 0.125rem;\n}.pr-\\[8rpx\\]{\n  padding-right: 0.25rem;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.left-0{\n  left: 0px;\n}.top-\\[-2rpx\\]{\n  top: -0.0625rem;\n}.text-center{\n  text-align: center;\n}.text-right{\n  text-align: right;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.whitespace-nowrap{\n  white-space: nowrap;\n}.w-full{\n  width: 100%;\n}.w-\\[68rpx\\]{\n  width: 2.125rem;\n}.w-\\[184rpx\\]{\n  width: 5.75rem;\n}.w-\\[70rpx\\]{\n  width: 2.1875rem;\n}.w-\\[24rpx\\]{\n  width: 0.75rem;\n}");
import { i as index$g, b as index$q, a as index$i, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, ref, reactive, computed, getCurrentInstance, onMounted, watch, nextTick, resolveDynamicComponent, openBlock, createBlock, withCtx, normalizeStyle, unref, createVNode, createElementBlock, Fragment, renderList, normalizeClass, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import "./scroll-view.29370e9b.js";
import { _ as __easycom_5$1 } from "./x-skeleton.d506d6c8.js";
import { k as useDiyStore, l as deepClone, i as img, r as redirect } from "./common.f536f441.js";
import { k as getGoodsComponents } from "./goods.3180989e.js";
import { u as useGoods } from "./useGoods.5d805636.js";
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
  __name: "index",
  props: ["component", "index", "value"],
  emits: ["loadingFn"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const diyGoods = useGoods();
    const diyStore = useDiyStore();
    const goodsNum = ref(0);
    const skeleton = reactive({
      type: "",
      loading: false,
      config: {}
    });
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
    const imageRounded = computed(() => {
      const obj = {
        val: "",
        style: ""
      };
      if (diyComponent.value.imgElementRounded) {
        obj.val = diyComponent.value.imgElementRounded * 2 + "rpx";
        obj.style += "border-radius:" + diyComponent.value.imgElementRounded * 2 + "rpx;";
      }
      return obj;
    });
    const itemCss = computed(() => {
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
      return style;
    });
    computed(() => {
      let style = "border-radius:" + imageRounded.value.val + ";";
      return style;
    });
    const listFrameStyle = (item) => {
      let style = "";
      if (item.listFrame.startColor) {
        if (item.listFrame.startColor && item.listFrame.endColor)
          style = `background:linear-gradient( 110deg, ${item.listFrame.startColor} 0%, ${item.listFrame.endColor} 100%);`;
        else
          style = "background-color:" + item.listFrame.startColor + ";";
      }
      return style;
    };
    const moreTitleStyle = (item) => {
      let style = "";
      if (item.moreTitle.startColor) {
        if (item.moreTitle.startColor && item.moreTitle.endColor)
          style = `background:linear-gradient( 0deg, ${item.moreTitle.startColor} 0%, ${item.moreTitle.endColor} 100%);`;
        else
          style = "background-color:" + item.moreTitle.startColor + ";";
      }
      return style;
    };
    const itemStyle = ref("");
    const setItemStyle = () => {
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        itemStyle.value = "width: calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 40rpx) / 3);";
      else
        itemStyle.value = "width: calc((100vw - 40rpx) / 3 );";
    };
    setItemStyle();
    const getGoodsListFn = () => {
      let data = {};
      if (diyComponent.value.source == "all") {
        data.num = diyComponent.value.list.length;
      } else if (diyComponent.value.source == "custom") {
        data.goods_ids = diyComponent.value.goods_ids;
      }
      getGoodsComponents(data).then((res) => {
        let goodsObj = res.data;
        goodsNum.value = goodsObj.length || 0;
        diyComponent.value.list.filter((el, index) => {
          el.info = deepClone(goodsObj[index]);
        });
        goodsList.value = deepClone(diyComponent.value.list);
        skeleton.loading = false;
      });
    };
    getCurrentInstance();
    onMounted(() => {
      refresh();
    });
    watch(
      () => diyComponent.value,
      (newValue, oldValue) => {
        refresh();
      }
    );
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        nextTick(() => {
          if (diyComponent.value && diyComponent.value.list) {
            goodsList.value = diyComponent.value.list.map((el) => {
              let obj = deepClone(el);
              obj.info = {
                goods_cover_thumb_mid: "",
                goodsSku: {
                  show_price: "10.00"
                }
              };
              return obj;
            });
            goodsNum.value = 3;
            setItemStyle();
          }
        });
      } else {
        getGoodsListFn();
      }
    };
    const toLink = (data) => {
      redirect({ url: "/addon/shop/pages/goods/detail", param: { goods_id: data.info.goods_id } });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      const _component_v_uni_text = index$i;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_x_skeleton = resolveEasycom(resolveDynamicComponent("x-skeleton"), __easycom_5$1);
      return openBlock(), createBlock(_component_x_skeleton, {
        type: skeleton.type,
        loading: skeleton.loading,
        config: skeleton.config
      }, {
        default: withCtx(() => [
          goodsNum.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            style: normalizeStyle(unref(warpCss))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_scroll_view, {
                    id: "warpStyle-" + unref(diyComponent).id,
                    class: "whitespace-nowrap h-[341rpx] w-full",
                    "scroll-x": true
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(goodsList.value, (item, index) => {
                        return openBlock(), createElementBlock(Fragment, { key: index }, [
                          item.info ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            id: "item" + index + unref(diyComponent).id,
                            class: normalizeClass(["w-[224rpx] h-[341rpx] mr-[20rpx] inline-block bg-[#fff] box-border overflow-hidden", { "!mr-[0rpx]": index == goodsList.value.length - 1 }]),
                            style: normalizeStyle(unref(itemCss) + itemStyle.value),
                            onClick: ($event) => toLink(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, {
                                class: "w-full h-[134rpx]",
                                style: normalizeStyle(listFrameStyle(item))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, { class: "flex pl-[16rpx] pr-[20rpx] justify-between h-[63rpx] items-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, {
                                        class: "text-[28rpx] leading-[34rpx] flex-1 mr-[8rpx]",
                                        style: normalizeStyle({ "color": item.title.textColor })
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title.text), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["style"]),
                                      createVNode(_component_v_uni_view, {
                                        class: "w-[68rpx] h-[34rpx] text-[22rpx] text-center leading-[34rpx] text-[#fff] rounded-[17rpx]",
                                        style: normalizeStyle(moreTitleStyle(item))
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.moreTitle.text), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["style"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["style"]),
                              createVNode(_component_v_uni_view, {
                                class: "mt-[-71rpx] h-[278rpx] w-full px-[20rpx] pt-[18rpx] box-border bg-white",
                                style: normalizeStyle(unref(itemCss))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, { class: "flex items-center justify-center w-[184rpx] h-[184rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_up_image, {
                                        width: "184rpx",
                                        height: "184rpx",
                                        radius: unref(imageRounded).val,
                                        src: unref(img)(item.info.goods_cover_thumb_mid || ""),
                                        mode: unref(diyComponent).mode
                                      }, {
                                        error: withCtx(() => [
                                          createVNode(_component_v_uni_image, {
                                            class: "w-[184rpx] h-[184rpx]",
                                            style: normalizeStyle(unref(imageRounded).style),
                                            src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                                            mode: "aspectFill"
                                          }, null, 8, ["style", "src"])
                                        ]),
                                        _: 2
                                      }, 1032, ["radius", "src", "mode"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_uni_view, { class: "pt-[12rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, {
                                        class: "h-[44rpx] pl-[4rpx] min-w-[168rpx] box-border flex justify-between items-center mx-auto border-[2rpx] border-solid border-[var(--primary-color)] rounded-[20rpx]",
                                        style: normalizeStyle({ "border-color": item.button.color })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_uni_view, { class: "text-[var(--price-text-color)] font-bold price-font flex items-baseline leading-[40rpx] flex-1 justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_view, {
                                                class: "leading-[1] max-w-[105rpx] truncate",
                                                style: normalizeStyle({ color: unref(diyComponent).priceStyle.mainColor })
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_uni_text, { class: "text-[18rpx] font-400 mr-[2rpx]" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("￥")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_uni_text, { class: "text-[28rpx] font-500" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(parseFloat(unref(diyGoods).goodsPrice(item.info)).toFixed(2)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["style"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_uni_view, {
                                            class: "w-[70rpx] box-border text-right text-[#fff] pr-[8rpx] text-[22rpx] font-500 leading-[44rpx] rounded-tr-[20rpx] rounded-br-[20rpx] rounded-tl-[24rpx] relative",
                                            style: normalizeStyle({ "background-color": item.button.color })
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.button.text), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_uni_image, {
                                                class: "w-[24rpx] h-[44rpx] absolute top-[-2rpx] left-0",
                                                src: unref(img)("/addon/shop/Union.png")
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1032, ["style"])
                                        ]),
                                        _: 2
                                      }, 1032, ["style"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["style"])
                            ]),
                            _: 2
                          }, 1032, ["id", "class", "style", "onClick"])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["id"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["type", "loading", "config"]);
    };
  }
});
export {
  _sfc_main as default
};
