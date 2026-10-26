import { i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, computed, openBlock, createBlock, normalizeStyle, unref } from "/wap/assets/shared/vue.js";
import { k as useDiyStore } from "./common.f536f441.js";
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
      style += "height:" + diyComponent.value.height * 2 + "rpx;";
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
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, null, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
