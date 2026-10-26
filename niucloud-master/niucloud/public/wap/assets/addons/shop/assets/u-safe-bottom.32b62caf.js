/* __addonChunkCssInjected:66aaaf9c */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("66aaaf9c",".addon-wrap-66aaaf9c .u-safe-bottom{width:100%}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { e as deepMerge, a as addStyle } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {}
};
const uSafeBottom_vue_vue_type_style_index_0_scoped_66aaaf9c_lang = "";
const _sfc_main = {
  name: "u-safe-bottom",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      safeAreaBottomHeight: 0,
      isNvue: false
    };
  },
  computed: {
    style() {
      const style = {};
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
    style: normalizeStyle([$options.style])
  }, null, 8, ["style", "class"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66aaaf9c"]]);
export {
  __easycom_1 as _
};
