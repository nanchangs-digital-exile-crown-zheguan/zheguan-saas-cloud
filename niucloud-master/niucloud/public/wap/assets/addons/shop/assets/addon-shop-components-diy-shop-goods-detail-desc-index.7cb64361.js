/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-detail-desc-index_7cb64361 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-detail-desc-index_7cb64361",".overflow-hidden{\n  overflow: hidden;\n}");
/* __addonChunkCssInjected:354a5f91 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("354a5f91",".addon-wrap-354a5f91 .card-template{background-color:transparent!important;border-radius:0!important;padding:.9375rem 0 0}.addon-wrap-354a5f91 .card-template .title{padding:0 .75rem}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_1 } from "./u-parse.86a7da80.js";
import { defineComponent, computed, onMounted, watch, nextTick, resolveDynamicComponent, unref, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createTextVNode, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { u as useGoodsDetailStore } from "./goodsDetail.65390551.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./text.99ce2b32.js";
import "./video.aeba19b1.js";
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
            goods_desc: "这里展示商品详情内容"
          }
        };
        return Object.assign({}, obj, diyStore.value[props.index]);
      } else {
        return Object.assign({}, props.component, useGoodsDetailStore().goodsDetail);
      }
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
    onMounted(() => {
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailDesc") {
              nextTick(() => {
              });
            }
          }
        );
      } else {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailDesc") {
              if (!diyComponent.value.isShow) {
                emits("update:componentIsShow", false);
              } else {
                emits("update:componentIsShow", true);
              }
            }
          },
          { immediate: true }
        );
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_parse = resolveEasycom(resolveDynamicComponent("u-parse"), __easycom_1);
      return unref(diyComponent) && unref(diyComponent).goods && Object.keys(unref(diyComponent).goods).length ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "card-template overflow-hidden" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("商品详情")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "u-content" }, {
                default: withCtx(() => [
                  createVNode(_component_u_parse, {
                    content: unref(diyComponent).goods.goods_desc,
                    tagStyle: { img: "vertical-align: top;width:100%;", p: "overflow: hidden;word-break:break-word;" }
                  }, null, 8, ["content"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_354a5f91_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-354a5f91"]]);
export {
  index as default
};
