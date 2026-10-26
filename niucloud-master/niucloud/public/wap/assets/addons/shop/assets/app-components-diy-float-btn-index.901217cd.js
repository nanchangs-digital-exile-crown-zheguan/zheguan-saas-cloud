/* __addonChunkWindiInjected:app-components-diy-float-btn-index_901217cd */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-float-btn-index_901217cd",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}");
/* __addonChunkCssInjected:a7d8bc37 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("a7d8bc37",".addon-wrap-a7d8bc37 }.float-btn.upperLeft{top:3.125rem;left:0}.addon-wrap-a7d8bc37 .float-btn.upperLeft.style-2{left:0}.addon-wrap-a7d8bc37 .float-btn.upperRight{top:3.125rem;right:0}.addon-wrap-a7d8bc37 .float-btn.upperRight.style-2{right:0}.addon-wrap-a7d8bc37 .float-btn.lowerLeft{bottom:5rem;left:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.addon-wrap-a7d8bc37 .float-btn.lowerLeft.style-2{left:0}.addon-wrap-a7d8bc37 .float-btn.lowerRight{bottom:5rem;right:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.addon-wrap-a7d8bc37 .float-btn.lowerRight.style-2{right:0}.addon-wrap-a7d8bc37 .z-1000{z-index:1000}.addon-wrap-a7d8bc37 .float-btn-border{border:.125rem dashed var(--primary-color)}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, computed, ref, openBlock, createBlock, normalizeClass, unref, normalizeStyle, withCtx, createElementBlock, Fragment, renderList, createCommentVNode } from "/wap/assets/shared/vue.js";
import { b as onPageScroll } from "./uni-app.es.9cb86cc0.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
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
    const warpCss = computed(() => {
      let style = "";
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
    const floatBtnItemCss = computed(() => {
      let style = "";
      style += "width:" + diyComponent.value.imageSize * 2 + "rpx;";
      style += "height:" + diyComponent.value.imageSize * 2 + "rpx;";
      style += "border-radius:" + diyComponent.value.aroundRadius * 2 + "rpx;";
      return style;
    });
    const floatBtnWrapCss = computed(() => {
      let style = "";
      if (diyComponent.value.offset) {
        if (diyComponent.value.bottomPosition == "lowerRight" || diyComponent.value.bottomPosition == "lowerLeft") {
          style += "translateY(" + -diyComponent.value.offset * 2 + "rpx)";
        } else if (diyComponent.value.bottomPosition == "upperRight" || diyComponent.value.bottomPosition == "upperLeft") {
          style += "translateY(" + diyComponent.value.offset * 2 + "rpx)";
        }
      }
      if (diyComponent.value.lateralOffset) {
        if (diyComponent.value.bottomPosition == "upperLeft" || diyComponent.value.bottomPosition == "lowerLeft") {
          style += " translateX(" + diyComponent.value.lateralOffset * 2 + "rpx)";
        } else if (diyComponent.value.bottomPosition == "upperRight" || diyComponent.value.bottomPosition == "lowerRight") {
          style += " translateX(" + -diyComponent.value.lateralOffset * 2 + "rpx)";
        }
      }
      style = `transform: ${style};`;
      return style;
    });
    const styleTwoRepeat = ref(true);
    const styleTwoRepeatTime = ref(null);
    computed(() => {
      let style = "";
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
      style += "transition: right .25s;box-shadow:0px 32rpx 96rpx 32rpx rgba(0, 0, 0, .08), 0px 24rpx 64px rgba(0, 0, 0, .12), 0px 16rpx 32rpx -16rpx rgba(0, 0, 0, .16);";
      style += styleTwoRepeat.value ? "transition-delay: 0.25s;" : "right:-" + (diyComponent.value.imageSize * 2 + 24) + "rpx !important;";
      return style;
    });
    computed(() => {
      let style = "transition: right .25s;background: rgba(0, 0, 0, 0.5);";
      style += styleTwoRepeat.value ? "" : "right:-32rpx !important;transition-delay: 0.25s;";
      return style;
    });
    onPageScroll(() => {
      if (diyComponent.value.style === "style-2") {
        if (styleTwoRepeatTime)
          clearTimeout(styleTwoRepeatTime.value);
        styleTwoRepeat.value = false;
        styleTwoRepeatTime.value = setTimeout(() => {
          styleTwoRepeat.value = true;
          clearTimeout(styleTwoRepeatTime.value);
        }, 200);
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: normalizeClass(["float-btn fixed z-1000", [unref(diyComponent).style, unref(diyComponent).bottomPosition, unref(diyStore).mode == "decorate" ? "float-btn-border" : ""]]),
        style: normalizeStyle(unref(floatBtnWrapCss))
      }, {
        default: withCtx(() => [
          unref(diyComponent).style === "style-1" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "flex flex-col items-center p-[24rpx]",
            style: normalizeStyle(unref(warpCss))
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: index2,
                  onClick: ($event) => unref(diyStore).toRedirect(item.link),
                  class: normalizeClass({ "flex items-center justify-center": true, "mb-[20rpx]": unref(diyComponent).list.length != index2 + 1 }),
                  style: normalizeStyle(unref(floatBtnItemCss))
                }, {
                  default: withCtx(() => [
                    item && item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                      key: 0,
                      style: normalizeStyle(unref(floatBtnItemCss)),
                      src: unref(img)(item.imageUrl),
                      mode: "aspectFit"
                    }, null, 8, ["style", "src"])) : (openBlock(), createBlock(_component_v_uni_image, {
                      key: 1,
                      src: unref(img)("static/resource/images/diy/figure.png"),
                      mode: "aspectFit",
                      style: normalizeStyle(unref(floatBtnItemCss))
                    }, null, 8, ["src", "style"]))
                  ]),
                  _: 2
                }, 1032, ["onClick", "class", "style"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["style"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class", "style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_a7d8bc37_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7d8bc37"]]);
export {
  index as default
};
