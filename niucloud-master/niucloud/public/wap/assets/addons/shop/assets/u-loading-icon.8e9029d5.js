/* __addonChunkCssInjected:cb2bf189 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("cb2bf189",".addon-wrap-cb2bf189 .u-empty,.addon-wrap-cb2bf189 .u-empty__wrap,.addon-wrap-cb2bf189 .u-tabs,.addon-wrap-cb2bf189 .u-tabs__wrapper,.addon-wrap-cb2bf189 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-cb2bf189 .u-tabs__wrapper__scroll-view,.addon-wrap-cb2bf189 .u-tabs__wrapper__nav,.addon-wrap-cb2bf189 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-cb2bf189 .u-loading-icon{display:flex;flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.addon-wrap-cb2bf189 .u-loading-icon__text{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.addon-wrap-cb2bf189 .u-loading-icon__spinner{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;animation:u-rotate-cb2bf189 1s linear infinite}.addon-wrap-cb2bf189 .u-loading-icon__spinner--semicircle{border-width:2px;border-color:transparent;border-radius:100px;border-style:solid}.addon-wrap-cb2bf189 .u-loading-icon__spinner--circle{border-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.addon-wrap-cb2bf189 .u-loading-icon--vertical{flex-direction:column}.addon-wrap-cb2bf189 :host{font-size:0px;line-height:1}.addon-wrap-cb2bf189 .u-loading-icon__spinner--spinner{animation-timing-function:steps(12)}.addon-wrap-cb2bf189 .u-loading-icon__text:empty{display:none}.addon-wrap-cb2bf189 .u-loading-icon--vertical .u-loading-icon__text{margin:6px 0 0;color:#606266}.addon-wrap-cb2bf189 .u-loading-icon__dot{position:absolute;top:0;left:0;width:100%;height:100%}.addon-wrap-cb2bf189 .u-loading-icon__dot:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:\" \"}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(1){transform:rotate(30deg);opacity:1}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(2){transform:rotate(60deg);opacity:.9375}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(3){transform:rotate(90deg);opacity:.875}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(4){transform:rotate(120deg);opacity:.8125}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(5){transform:rotate(150deg);opacity:.75}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(6){transform:rotate(180deg);opacity:.6875}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(7){transform:rotate(210deg);opacity:.625}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(8){transform:rotate(240deg);opacity:.5625}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(9){transform:rotate(270deg);opacity:.5}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(10){transform:rotate(300deg);opacity:.4375}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(11){transform:rotate(330deg);opacity:.375}.addon-wrap-cb2bf189 .u-loading-icon__dot:nth-of-type(12){transform:rotate(360deg);opacity:.3125}");
import { m as getCurrentPages$1, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, a as addStyle } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createElementBlock, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: () => defProps.loadingIcon.show
    },
    // 颜色
    color: {
      type: String,
      default: () => defProps.loadingIcon.color
    },
    // 提示文字颜色
    textColor: {
      type: String,
      default: () => defProps.loadingIcon.textColor
    },
    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: () => defProps.loadingIcon.vertical
    },
    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: () => defProps.loadingIcon.mode
    },
    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: () => defProps.loadingIcon.size
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: () => defProps.loadingIcon.textSize
    },
    // 文字内容
    text: {
      type: [String, Number],
      default: () => defProps.loadingIcon.text
    },
    // 动画模式
    timingFunction: {
      type: String,
      default: () => defProps.loadingIcon.timingFunction
    },
    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: () => defProps.loadingIcon.duration
    },
    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: () => defProps.loadingIcon.inactiveColor
    }
  }
};
function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
  const startRGB = hexToRgb(startColor, false);
  const startR = startRGB[0];
  const startG = startRGB[1];
  const startB = startRGB[2];
  const endRGB = hexToRgb(endColor, false);
  const endR = endRGB[0];
  const endG = endRGB[1];
  const endB = endRGB[2];
  const sR = (endR - startR) / step;
  const sG = (endG - startG) / step;
  const sB = (endB - startB) / step;
  const colorArr = [];
  for (let i = 0; i < step; i++) {
    let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
    if (i === 0)
      hex = rgbToHex(startColor);
    if (i === step - 1)
      hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}
function hexToRgb(sColor, str = true) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    if (!str) {
      return sColorChange;
    }
    return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
  }
  if (/^(rgb|RGB)/.test(sColor)) {
    const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map((val) => Number(val));
  }
  return sColor;
}
function rgbToHex(rgb) {
  const _this = rgb;
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? `${0}${hex}` : hex;
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }
  if (reg.test(_this)) {
    const aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    }
    if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}
const uLoadingIcon_vue_vue_type_style_index_0_scoped_cb2bf189_lang = "";
const _sfc_main = {
  name: "u-loading-icon",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // Array.form可以通过一个伪数组对象创建指定长度的数组
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
      array12: Array.from({
        length: 12
      }),
      // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
      // 在iOS nvue上，则会一开始默认执行两个周期的动画
      aniAngel: 360,
      // 动画旋转角度
      webviewHide: false,
      // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
      loading: false
      // 是否运行中，针对nvue使用
    };
  },
  computed: {
    // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
    // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
    // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
    otherBorderColor() {
      const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
      if (this.mode === "circle") {
        return this.inactiveColor ? this.inactiveColor : lightColor;
      } else {
        return "transparent";
      }
    }
  },
  watch: {
    show(n) {
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit,
    addStyle,
    init() {
      setTimeout(() => {
      }, 20);
    },
    // 监听webview的显示与隐藏
    addEventListenerToWebview() {
      const pages = getCurrentPages$1();
      const page = pages[pages.length - 1];
      const currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  const _component_v_uni_text = index$i;
  return _ctx.show ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
  }, {
    default: withCtx(() => [
      !$data.webviewHide ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
        ref: "ani",
        style: normalizeStyle({
          color: _ctx.color,
          width: $options.addUnit(_ctx.size),
          height: $options.addUnit(_ctx.size),
          borderTopColor: _ctx.color,
          borderBottomColor: $options.otherBorderColor,
          borderLeftColor: $options.otherBorderColor,
          borderRightColor: $options.otherBorderColor,
          "animation-duration": `${_ctx.duration}ms`,
          "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
        })
      }, {
        default: withCtx(() => [
          _ctx.mode === "spinner" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.array12, (item, index) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              key: index,
              class: "u-loading-icon__dot"
            });
          }), 128)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class", "style"])) : createCommentVNode("", true),
      _ctx.text ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 1,
        class: "u-loading-icon__text",
        style: normalizeStyle({
          fontSize: $options.addUnit(_ctx.textSize),
          color: _ctx.textColor
        })
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["style", "class"])) : createCommentVNode("", true);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cb2bf189"]]);
export {
  __easycom_4 as _,
  colorGradient as c
};
