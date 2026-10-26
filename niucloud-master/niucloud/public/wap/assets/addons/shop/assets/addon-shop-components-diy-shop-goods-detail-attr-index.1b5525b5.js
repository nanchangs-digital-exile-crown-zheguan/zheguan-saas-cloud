/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-detail-attr-index_1b5525b5 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-detail-attr-index_1b5525b5",".box-border{\n  box-sizing: border-box;\n}.font-400{\n  font-weight: 400;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.leading-\\[30rpx\\]{\n  line-height: 0.9375rem;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.mb-\\[30rpx\\]{\n  margin-bottom: 0.9375rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.pl-\\[20rpx\\]{\n  padding-left: 0.625rem;\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.w-\\[160rpx\\]{\n  width: 5rem;\n}");
/* __addonChunkCssInjected:794b3451 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("794b3451",".addon-wrap-794b3451 .card-template{background-color:transparent!important;border-radius:0!important}.addon-wrap-794b3451 .goods-sku .value-wid{width:calc(100% - 5rem)}");
import { i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { defineComponent, computed, ref, onMounted, watch, nextTick, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, normalizeClass } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { u as useGoodsDetailStore } from "./goodsDetail.65390551.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "value"],
  emits: ["update:componentIsShow"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const diyStore = useDiyStore();
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        const obj = {
          goods: {
            attr_format: [
              {
                attr_value_name: "颜色",
                attr_child_value_name: "红色,蓝色,灰色"
              },
              {
                attr_value_name: "尺寸",
                attr_child_value_name: "大,中,小"
              }
            ]
          }
        };
        return Object.assign({}, obj, diyStore.value[props.index]);
      } else {
        return Object.assign({}, props.component, useGoodsDetailStore().goodsDetail);
      }
    });
    const filteredAttrFormat = computed(() => {
      var _a;
      const originalAttrs = ((_a = diyComponent.value.goods) == null ? void 0 : _a.attr_format) || [];
      const filteredOriginalAttrs = originalAttrs.filter((item) => {
        if (Array.isArray(item.attr_child_value_name)) {
          return item.attr_child_value_name.length > 0;
        } else {
          return !!item.attr_child_value_name;
        }
      });
      const extraAttrs = [];
      if (diyComponent.value.goods.goods_brand) {
        extraAttrs.push({
          attr_value_name: "品牌",
          attr_child_value_name: diyComponent.value.goods.goods_brand.brand_name
        });
      }
      if (diyComponent.value.weight && diyComponent.value.weight > 0) {
        extraAttrs.push({
          attr_value_name: "重量",
          attr_child_value_name: diyComponent.value.weight + "kg"
        });
      }
      if (diyComponent.value.volume && diyComponent.value.volume > 0) {
        extraAttrs.push({
          attr_value_name: "体积",
          attr_child_value_name: diyComponent.value.volume + "m³"
        });
      }
      return [...extraAttrs, ...filteredOriginalAttrs];
    });
    const warpCss = computed(() => {
      let style = "";
      style += "position:relative;";
      if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
        style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
      else
        style += "background-color:" + (diyComponent.value.componentStartBgColor || diyComponent.value.componentEndBgColor) + ";";
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
    const isAttrFormatShow = ref(false);
    onMounted(() => {
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailAttr") {
              nextTick(() => {
              });
            }
          }
        );
      } else {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailAttr") {
              nextTick(() => {
                if (diyComponent.value.goods && Object.keys(diyComponent.value.goods).length && (diyComponent.value.goods.attr_format && Object.keys(diyComponent.value.goods.attr_format).length || diyComponent.value.goods.goods_brand || diyComponent.value.weight > 0 || diyComponent.value.volume > 0) && diyComponent.value.isShow) {
                  emits("update:componentIsShow", true);
                } else {
                  emits("update:componentIsShow", false);
                }
              });
            }
          },
          { immediate: true }
        );
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          unref(diyComponent).goods && unref(diyComponent).goods.attr_format && Object.keys(unref(diyComponent).goods.attr_format).length || unref(diyComponent).goods.goods_brand || unref(diyComponent).weight > 0 || unref(diyComponent).volume > 0 ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "goods-sku card-template"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title mb-[30rpx]" }, {
                default: withCtx(() => [
                  createTextVNode("商品属性")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredAttrFormat), (item, index2) => {
                    return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                      index2 < 4 || isAttrFormatShow.value ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, { class: "text-[26rpx] leading-[30rpx] w-[160rpx] font-400 shrink-0 text-[var(--text-color-light9)]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.attr_value_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_view, { class: "text-[#333] box-border value-wid text-[26rpx] leading-[30rpx] font-400 pl-[20rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(Array.isArray(item.attr_child_value_name) ? item.attr_child_value_name.join(",") : item.attr_child_value_name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  unref(filteredAttrFormat).length > 4 ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "flex-center",
                    onClick: _cache[0] || (_cache[0] = ($event) => isAttrFormatShow.value = !isAttrFormatShow.value)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, { class: "text-[24rpx] mr-[10rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(!isAttrFormatShow.value ? "展开" : "收起"), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, {
                        class: normalizeClass(["nc-iconfont !text-[22rpx]", { "nc-icon-xiaV6xx": !isAttrFormatShow.value, "nc-icon-shangV6xx-1": isAttrFormatShow.value }])
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_794b3451_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-794b3451"]]);
export {
  index as default
};
