/* __addonChunkWindiInjected:addon-shop-components-diy-shop-exchange-goods-index_47e7c245 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-exchange-goods-index_47e7c245",".inline-block{\n  display: inline-block;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-baseline{\n  align-items: baseline;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.h-\\[22rpx\\]{\n  height: 0.6875rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[38rpx\\]{\n  font-size: 1.1875rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-\\[30rpx\\]{\n  line-height: 0.9375rem;\n}.leading-\\[1\\]{\n  line-height: 1;\n}.leading-\\[28rpx\\]{\n  line-height: 0.875rem;\n}.my-\\[5rpx\\]{\n  margin-top: 0.15625rem;\n  margin-bottom: 0.15625rem;\n}.mx-\\[2rpx\\]{\n  margin-left: 0.0625rem;\n  margin-right: 0.0625rem;\n}.mr-\\[4rpx\\]{\n  margin-right: 0.125rem;\n}.mt-\\[10rpx\\]{\n  margin-top: 0.3125rem;\n}.mt-\\[14rpx\\]{\n  margin-top: 0.4375rem;\n}.mb-\\[10rpx\\]{\n  margin-bottom: 0.3125rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[16rpx\\]{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}.pb-\\[20rpx\\]{\n  padding-bottom: 0.625rem;\n}.pt-\\[10rpx\\]{\n  padding-top: 0.3125rem;\n}.relative{\n  position: relative;\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.w-\\[22rpx\\]{\n  width: 0.6875rem;\n}");
/* __addonChunkCssInjected:b850547e */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("b850547e",".addon-wrap-b850547e .base-tag.middle{height:1.25rem;padding:0 .375rem;border-radius:.25rem;font-size:.625rem;margin-right:.5rem}.addon-wrap-b850547e .remove-border:after{border:none}.addon-wrap-b850547e .brand-tag{position:relative;top:-.0625rem;display:inline;line-height:1.1875rem;padding:.125rem .25rem;border-radius:.125rem;margin-right:.25rem;background:red;vertical-align:middle;font-size:.5625rem;color:#fff;border:.0625rem solid transparent}.addon-wrap-b850547e .brand-tag.middle{padding:.125rem .25rem;border-radius:.25rem;font-size:.625rem;margin-right:.1875rem}.addon-wrap-b850547e .base-tag{display:flex;justify-content:center;align-items:center;height:1.0625rem;font-size:.5625rem;padding:0 .25rem;color:#333;border-radius:.125rem;background-color:#fff;margin-right:.25rem;box-sizing:border-box;margin-top:.25rem;border:.0625rem solid transparent}.addon-wrap-b850547e .img-tag{display:block;height:1.0625rem;width:auto;border-radius:.125rem;margin-right:.4375rem;box-sizing:border-box;margin-top:.25rem}.addon-wrap-b850547e .img-tag.middle{height:1.1875rem;border-radius:.25rem;margin-right:.5rem}.addon-wrap-b850547e .cart-btn-bg{background:linear-gradient(127deg,var(--primary-help-color1) 0%,var(--primary-help-color5) 100%)}");
import { c as createSelectorQuery, i as index$g, b as index$q, a as index$i } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, reactive, ref, computed, getCurrentInstance, onMounted, watch, nextTick, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeStyle, unref, createElementBlock, Fragment, renderList, normalizeClass, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { _ as __easycom_5$1 } from "./x-skeleton.d506d6c8.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { c as getExchangeComponentsList } from "./point.12d84476.js";
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
    const diyStore = useDiyStore();
    const diyGoods = useGoods();
    const skeleton = reactive({
      type: "",
      loading: diyStore.mode == "decorate" ? false : true,
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
      if (diyComponent.value.componentBgUrl) {
        style += `background-image:url('${img(diyComponent.value.componentBgUrl)}');`;
        style += "background-size: cover;background-repeat: no-repeat;";
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
    const imageStyle2 = computed(() => {
      let style = "";
      return style;
    });
    const maskLayer = computed(() => {
      let style = "";
      if (diyComponent.value.componentBgUrl) {
        style += "position:absolute;top:0;width:100%;";
        style += `background: rgba(0,0,0,${diyComponent.value.componentBgAlpha / 10});`;
        style += `height:${height.value}px;`;
        if (diyComponent.value.topRounded)
          style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.topRounded)
          style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      }
      return style;
    });
    const itemCss = computed(() => {
      let style = "";
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
    const style2Width = computed(() => {
      let style = "";
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        style += "calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 20rpx) / 2)";
      else
        style += "calc((100vw - 20rpx) / 2 )";
      return style;
    });
    computed(() => {
      let style = "border-radius:" + imageRounded.value.val + ";";
      style += "width:" + style2Width.value + ";";
      style += "height:" + style2Width.value + ";";
      return style;
    });
    const getGoodsListFn = () => {
      let data = {
        order: diyComponent.value.sortWay,
        num: diyComponent.value.source == "all" ? diyComponent.value.num : "",
        ids: diyComponent.value.source == "custom" ? diyComponent.value.goods_ids.join(",") : ""
      };
      getExchangeComponentsList(data).then((res) => {
        goodsList.value = res.data;
        skeleton.loading = false;
        if (diyComponent.value.componentBgUrl) {
          setTimeout(() => {
            const query = createSelectorQuery().in(instance);
            query.select(".diy-shop-exchange-goods-list").boundingClientRect((data2) => {
              height.value = data2.height;
            }).exec();
          }, 1e3);
        }
      });
    };
    const initSkeleton = () => {
      if (diyComponent.value.style == "style-1") {
        skeleton.type = "list";
        skeleton.config = {
          textRows: 2
        };
      } else if (diyComponent.value.style == "style-2") {
        skeleton.type = "waterfall";
        skeleton.config = {
          headHeight: "320rpx",
          gridRows: 1,
          textRows: 2,
          textWidth: ["100%", "80%"]
        };
      } else if (diyComponent.value.style == "style-3") {
        skeleton.type = "waterfall";
        skeleton.config = {
          gridRows: 1,
          gridColumns: 3,
          headHeight: "200rpx",
          textRows: 2,
          textWidth: ["100%", "80%"]
        };
      }
    };
    const instance = getCurrentInstance();
    const height = ref(0);
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopExchangeGoods") {
              nextTick(() => {
                const query = createSelectorQuery().in(instance);
                query.select(".diy-shop-exchange-goods-list").boundingClientRect((data) => {
                  height.value = data.height;
                }).exec();
              });
            }
          }
        );
      } else {
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
          image: "",
          names: "商品名称",
          total_exchange_num: 100,
          point: 100,
          price: 100
        };
        goodsList.value.push(obj);
        goodsList.value.push(obj);
      } else {
        initSkeleton();
        getGoodsListFn();
      }
    };
    const toLink = (data) => {
      redirect({ url: "/addon/shop/pages/point/detail", param: { id: data.id } });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      const _component_v_uni_text = index$i;
      const _component_x_skeleton = resolveEasycom(resolveDynamicComponent("x-skeleton"), __easycom_5$1);
      return openBlock(), createBlock(_component_x_skeleton, {
        type: skeleton.type,
        loading: skeleton.loading,
        config: skeleton.config
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "overflow-hidden",
            style: normalizeStyle(unref(warpCss))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                style: normalizeStyle(unref(maskLayer))
              }, null, 8, ["style"]),
              goodsList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "diy-shop-exchange-goods-list relative flex flex-wrap justify-between"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(goodsList.value, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: normalizeClass(["overflow-hidden bg-[#fff] flex flex-col box-border w-[calc(50%-10rpx)]", { "mt-[20rpx]": index2 > 1 }]),
                      style: normalizeStyle(unref(itemCss)),
                      key: item.goods_id,
                      onClick: ($event) => toLink(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_up_image, {
                          width: unref(style2Width),
                          height: unref(style2Width),
                          radius: unref(imageRounded).val,
                          src: unref(img)(item.goods_cover_thumb_mid || ""),
                          mode: unref(diyComponent).mode
                        }, {
                          error: withCtx(() => [
                            createVNode(_component_v_uni_image, {
                              class: "overflow-hidden",
                              style: normalizeStyle({ "width": unref(style2Width), "height": unref(style2Width), "border-radius": unref(imageRounded).val }),
                              src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                              mode: "aspectFill"
                            }, null, 8, ["style", "src"])
                          ]),
                          _: 2
                        }, 1032, ["width", "height", "radius", "src", "mode"]),
                        createVNode(_component_v_uni_view, { class: "flex-1 pt-[10rpx] pb-[20rpx] px-[16rpx] flex flex-col justify-between" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, {
                              class: "text-[28rpx] leading-[40rpx] text-[#303133] multi-hidden mb-[10rpx]",
                              style: normalizeStyle({ color: unref(diyComponent).goodsNameStyle.color, fontWeight: unref(diyComponent).goodsNameStyle.fontWeight })
                            }, {
                              default: withCtx(() => [
                                item.goods_brand ? (openBlock(), createBlock(_component_v_uni_view, {
                                  key: 0,
                                  class: "brand-tag",
                                  style: normalizeStyle(unref(diyGoods).baseTagStyle(item.goods_brand))
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.goods_brand.brand_name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["style"])) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.names), 1)
                              ]),
                              _: 2
                            }, 1032, ["style"]),
                            createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[#999] leading-[30rpx] using-hidden my-[5rpx]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            item.goods_label && item.goods_label.length ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "flex flex-wrap"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item.goods_label, (tagItem, tagIndex) => {
                                  return openBlock(), createElementBlock(Fragment, null, [
                                    tagItem.style_type == "icon" && tagItem.icon ? (openBlock(), createBlock(_component_v_uni_image, {
                                      key: 0,
                                      class: "img-tag",
                                      src: unref(img)(tagItem.icon),
                                      mode: "heightFix",
                                      onError: ($event) => unref(diyGoods).error(tagItem, "icon")
                                    }, null, 8, ["src", "onError"])) : tagItem.style_type == "diy" || !tagItem.icon ? (openBlock(), createBlock(_component_v_uni_view, {
                                      key: 1,
                                      class: "base-tag",
                                      style: normalizeStyle(unref(diyGoods).baseTagStyle(tagItem))
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tagItem.label_name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["style"])) : createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createVNode(_component_v_uni_view, {
                              class: "text-[22rpx] leading-[28rpx] mt-[10rpx] text-[var(--text-color-light9)]",
                              style: normalizeStyle({ color: unref(diyComponent).saleStyle.color })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("已兑" + toDisplayString(item.total_exchange_num) + "人", 1)
                              ]),
                              _: 2
                            }, 1032, ["style"]),
                            createVNode(_component_v_uni_view, { class: "flex items-baseline mt-[14rpx]" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_image, {
                                  class: "h-[22rpx] w-[22rpx] mr-[4rpx]",
                                  style: normalizeStyle(unref(imageStyle2)),
                                  src: unref(img)("addon/shop/diy/point/nav_point.png"),
                                  mode: "aspectFit"
                                }, null, 8, ["style", "src"]),
                                createVNode(_component_v_uni_view, {
                                  class: "inline-block price-font text-[24rpx] leading-[1]",
                                  style: normalizeStyle({ color: unref(diyComponent).priceStyle.mainColor })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_text, { class: "text-[38rpx] price-font font-500" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(parseInt(item.point)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    item.price && item.price > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                      createVNode(_component_v_uni_text, { class: "mx-[2rpx]" }, {
                                        default: withCtx(() => [
                                          createTextVNode("+")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_uni_text, { class: "font-500" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(parseFloat(item.price).toFixed(2)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_uni_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode("元")
                                        ]),
                                        _: 1
                                      })
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["style"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class", "style", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })) : !goodsList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "empty-page"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    class: "img",
                    src: unref(img)("static/resource/images/system/empty.png"),
                    model: "aspectFit"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_view, { class: "desc" }, {
                    default: withCtx(() => [
                      createTextVNode("暂无商品")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      }, 8, ["type", "loading", "config"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b850547e_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b850547e"]]);
export {
  index as default
};
