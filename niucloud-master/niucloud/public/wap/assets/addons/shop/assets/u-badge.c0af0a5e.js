/* __addonChunkCssInjected:0e56696e */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("0e56696e",".addon-wrap-0e56696e .u-empty,.addon-wrap-0e56696e .u-empty__wrap,.addon-wrap-0e56696e .u-tabs,.addon-wrap-0e56696e .u-tabs__wrapper,.addon-wrap-0e56696e .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-0e56696e .u-tabs__wrapper__scroll-view,.addon-wrap-0e56696e .u-tabs__wrapper__nav,.addon-wrap-0e56696e .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-0e56696e .u-badge{border-radius:100px;display:flex;flex-direction:row;line-height:11px;text-align:center;font-size:11px;color:#fff}.addon-wrap-0e56696e .u-badge--dot{height:8px;width:8px}.addon-wrap-0e56696e .u-badge--inverted{font-size:13px}.addon-wrap-0e56696e .u-badge--not-dot{padding:2px 5px}.addon-wrap-0e56696e .u-badge--horn{border-bottom-left-radius:0}.addon-wrap-0e56696e .u-badge--primary{background-color:var(--primary-color)}.addon-wrap-0e56696e .u-badge--primary--inverted{color:var(--primary-color)}.addon-wrap-0e56696e .u-badge--error{background-color:#f56c6c}.addon-wrap-0e56696e .u-badge--error--inverted{color:#f56c6c}.addon-wrap-0e56696e .u-badge--success{background-color:#5ac725}.addon-wrap-0e56696e .u-badge--success--inverted{color:#5ac725}.addon-wrap-0e56696e .u-badge--info{background-color:#909399}.addon-wrap-0e56696e .u-badge--info--inverted{color:#909399}.addon-wrap-0e56696e .u-badge--warning{background-color:#f9ae3d}.addon-wrap-0e56696e .u-badge--warning--inverted{color:#f9ae3d}");
import "./text.99ce2b32.js";
import { a as index$i } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, a as addStyle } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: () => defProps.badge.isDot
    },
    // 显示的内容
    value: {
      type: [Number, String],
      default: () => defProps.badge.value
    },
    // 显示的内容
    modelValue: {
      type: [Number, String],
      default: () => defProps.badge.modelValue
    },
    // 是否显示
    show: {
      type: Boolean,
      default: () => defProps.badge.show
    },
    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: () => defProps.badge.max
    },
    // 主题类型，error|warning|success|primary
    type: {
      type: String,
      default: () => defProps.badge.type
    },
    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: () => defProps.badge.showZero
    },
    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: [String, null],
      default: () => defProps.badge.bgColor
    },
    // 字体颜色
    color: {
      type: [String, null],
      default: () => defProps.badge.color
    },
    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: String,
      default: () => defProps.badge.shape
    },
    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: String,
      default: () => defProps.badge.numberType
    },
    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: () => defProps.badge.offset
    },
    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: () => defProps.badge.inverted
    },
    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: () => defProps.badge.absolute
    }
  }
};
const uBadge_vue_vue_type_style_index_0_scoped_0e56696e_lang = "";
const _sfc_main = {
  name: "u-badge",
  mixins: [mpMixin, props, mixin],
  computed: {
    // 是否将badge中心与父组件右上角重合
    boxStyle() {
      let style = {};
      return style;
    },
    // 整个组件的样式
    badgeStyle() {
      const style = {};
      if (this.color) {
        style.color = this.color;
      }
      if (this.bgColor && !this.inverted) {
        style.backgroundColor = this.bgColor;
      }
      if (this.absolute) {
        style.position = "absolute";
        if (this.offset.length) {
          const top = this.offset[0];
          const right = this.offset[1] || top;
          style.top = addUnit(top);
          style.right = addUnit(right);
        }
      }
      return style;
    },
    showValue() {
      switch (this.numberType) {
        case "overflow":
          return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
        case "ellipsis":
          return Number(this.value) > Number(this.max) ? "..." : this.value;
        case "limit":
          return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
        default:
          return Number(this.value);
      }
    }
  },
  methods: {
    addStyle
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (openBlock(), createBlock(_component_v_uni_text, {
    key: 0,
    class: normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
    style: normalizeStyle([$options.addStyle(_ctx.customStyle), $options.badgeStyle])
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.isDot ? "" : $options.showValue), 1)
    ]),
    _: 1
  }, 8, ["class", "style"])) : createCommentVNode("", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0e56696e"]]);
export {
  __easycom_1 as _
};
