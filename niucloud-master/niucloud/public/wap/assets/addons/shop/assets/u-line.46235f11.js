/* __addonChunkCssInjected:9482bdca */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("9482bdca",".addon-wrap-9482bdca .u-empty,.addon-wrap-9482bdca .u-empty__wrap,.addon-wrap-9482bdca .u-tabs,.addon-wrap-9482bdca .u-tabs__wrapper,.addon-wrap-9482bdca .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-9482bdca .u-tabs__wrapper__scroll-view,.addon-wrap-9482bdca .u-tabs__wrapper__nav,.addon-wrap-9482bdca .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-9482bdca .u-line{vertical-align:middle}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, e as deepMerge, a as addStyle } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeStyle } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    color: {
      type: String,
      default: () => defProps.line.color
    },
    // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
    length: {
      type: [String, Number],
      default: () => defProps.line.length
    },
    // 线条方向，col-竖向，row-横向
    direction: {
      type: String,
      default: () => defProps.line.direction
    },
    // 是否显示细边框
    hairline: {
      type: Boolean,
      default: () => defProps.line.hairline
    },
    // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
    margin: {
      type: [String, Number],
      default: () => defProps.line.margin
    },
    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: () => defProps.line.dashed
    }
  }
};
const uLine_vue_vue_type_style_index_0_scoped_9482bdca_lang = "";
const _sfc_main = {
  name: "u-line",
  mixins: [mpMixin, mixin, props],
  computed: {
    lineStyle() {
      const style = {};
      style.margin = this.margin;
      if (this.direction === "row") {
        style.borderBottomWidth = "1px";
        style.borderBottomStyle = this.dashed ? "dashed" : "solid";
        style.width = addUnit(this.length);
        if (this.hairline)
          style.transform = "scaleY(0.5)";
      } else {
        style.borderLeftWidth = "1px";
        style.borderLeftStyle = this.dashed ? "dashed" : "solid";
        style.height = addUnit(this.length);
        if (this.hairline)
          style.transform = "scaleX(0.5)";
      }
      style.borderColor = this.color;
      return deepMerge(style, addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-line",
    style: normalizeStyle([$options.lineStyle])
  }, null, 8, ["style"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9482bdca"]]);
export {
  __easycom_3 as _
};
