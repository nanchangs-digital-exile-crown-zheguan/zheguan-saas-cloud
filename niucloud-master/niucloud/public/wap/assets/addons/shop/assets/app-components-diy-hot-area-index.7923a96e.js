/* __addonChunkWindiInjected:app-components-diy-hot-area-index_7923a96e */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-hot-area-index_7923a96e",".leading-0{\n  line-height: 0rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.w-full{\n  width: 100%;\n}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, computed, onMounted, watch, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, renderList, createCommentVNode } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
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
      return style;
    });
    const itemCss = computed(() => {
      let style = "";
      style += "height:" + diyComponent.value.imgHeight + ";";
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
      refresh();
      watch(
        () => diyComponent.value,
        (newValue, oldValue) => {
          if (newValue && newValue.componentName == "HotArea") {
            refresh();
          }
        }
      );
    });
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        if (diyComponent.value.imageUrl == "") {
          diyComponent.value.imgWidth = 690;
          diyComponent.value.imgHeight = 330;
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "simple-graph-wrap overflow-hidden relative leading-0" }, {
            default: withCtx(() => [
              unref(diyComponent).imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                key: 0,
                style: normalizeStyle(unref(itemCss)),
                src: unref(img)(unref(diyComponent).imageUrl),
                mode: "widthFix",
                "show-menu-by-longpress": true,
                class: "w-full"
              }, null, 8, ["style", "src"])) : (openBlock(), createBlock(_component_v_uni_image, {
                key: 1,
                style: normalizeStyle(unref(itemCss)),
                src: unref(img)("static/resource/images/diy/figure.png"),
                mode: "widthFix",
                "show-menu-by-longpress": true,
                class: "w-full"
              }, null, 8, ["style", "src"])),
              unref(diyStore).mode != "decorate" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(diyComponent).heatMapData, (mapItem, mapIndex) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  onClick: ($event) => unref(diyStore).toRedirect(mapItem.link),
                  class: "absolute",
                  key: mapIndex,
                  style: normalizeStyle({ width: mapItem.width + "%", height: mapItem.height + "%", left: mapItem.left + "%", top: mapItem.top + "%" })
                }, null, 8, ["onClick", "style"]);
              }), 128)) : createCommentVNode("", true)
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
