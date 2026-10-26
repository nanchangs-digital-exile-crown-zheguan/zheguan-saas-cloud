/* __addonChunkWindiInjected:app-components-diy-horz-line-index_b65ddf95 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-horz-line-index_b65ddf95",".h-\\[30rpx\\]{\n  height: 0.9375rem;\n}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, computed, openBlock, createBlock, withCtx, unref, createCommentVNode, createVNode, normalizeStyle } from "/wap/assets/shared/vue.js";
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
      style += "border-top:" + diyComponent.value.borderWidth * 2 + "rpx " + diyComponent.value.borderStyle + " " + diyComponent.value.borderColor + ";";
      return style;
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { class: "horz-line-wrap" }, {
        default: withCtx(() => [
          unref(diyStore).mode == "decorate" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "h-[30rpx]"
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(warpCss))
          }, null, 8, ["style"]),
          unref(diyStore).mode == "decorate" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "h-[30rpx]"
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
