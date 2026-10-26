/* __addonChunkCssInjected:839b1acb */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("839b1acb",".addon-wrap-839b1acb .u-empty,.addon-wrap-839b1acb .u-empty__wrap,.addon-wrap-839b1acb .u-tabs,.addon-wrap-839b1acb .u-tabs__wrapper,.addon-wrap-839b1acb .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-839b1acb .u-tabs__wrapper__scroll-view,.addon-wrap-839b1acb .u-tabs__wrapper__nav,.addon-wrap-839b1acb .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-839b1acb .u-link{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1}");
import { a as index$i, G as makePhoneCall, i as index$g, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3$2 } from "./u-icon.ceb3960f.js";
import { openBlock, createBlock, withModifiers, normalizeStyle, withCtx, createTextVNode, toDisplayString, resolveDynamicComponent, normalizeClass, createCommentVNode, createVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, c as getPx, a as addStyle, t as test, p as priceFormat, l as error, m as timeFormat, e as deepMerge } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./button.fdf0e29d.js";
const props$1 = {
  props: {
    // 文字颜色
    color: {
      type: String,
      default: () => defProps.link.color
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: () => defProps.link.fontSize
    },
    // 是否显示下划线
    underLine: {
      type: Boolean,
      default: () => defProps.link.underLine
    },
    // 要跳转的链接
    href: {
      type: String,
      default: () => defProps.link.href
    },
    // 小程序中复制到粘贴板的提示语
    mpTips: {
      type: String,
      default: () => defProps.link.mpTips
    },
    // 下划线颜色
    lineColor: {
      type: String,
      default: () => defProps.link.lineColor
    },
    // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
    text: {
      type: String,
      default: () => defProps.link.text
    }
  }
};
const uLink_vue_vue_type_style_index_0_scoped_839b1acb_lang = "";
const _sfc_main$1 = {
  name: "u-link",
  mixins: [mpMixin, mixin, props$1],
  computed: {
    linkStyle() {
      const style = {
        color: this.color,
        fontSize: addUnit(this.fontSize),
        // line-height设置为比字体大小多2px
        lineHeight: addUnit(getPx(this.fontSize) + 2),
        textDecoration: this.underLine ? "underline" : "none"
      };
      return style;
    }
  },
  emits: ["click"],
  methods: {
    addStyle,
    openLink() {
      window.open(this.href);
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  return openBlock(), createBlock(_component_v_uni_text, {
    class: "u-link",
    onClick: withModifiers($options.openLink, ["stop"]),
    style: normalizeStyle([$options.linkStyle, $options.addStyle(_ctx.customStyle)])
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1)
    ]),
    _: 1
  }, 8, ["onClick", "style"]);
}
const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-839b1acb"]]);
const props = {
  props: {
    // 主题颜色
    type: {
      type: String,
      default: () => defProps.text.type
    },
    // 是否显示
    show: {
      type: Boolean,
      default: () => defProps.text.show
    },
    // 显示的值
    text: {
      type: [String, Number],
      default: () => defProps.text.text
    },
    // 前置图标
    prefixIcon: {
      type: String,
      default: () => defProps.text.prefixIcon
    },
    // 后置图标
    suffixIcon: {
      type: String,
      default: () => defProps.text.suffixIcon
    },
    // 文本处理的匹配模式
    // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
    mode: {
      type: String,
      default: () => defProps.text.mode
    },
    // mode=link下，配置的链接
    href: {
      type: String,
      default: () => defProps.text.href
    },
    // 格式化规则
    format: {
      type: [String, Function],
      default: () => defProps.text.format
    },
    // mode=phone时，点击文本是否拨打电话
    call: {
      type: Boolean,
      default: () => defProps.text.call
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: () => defProps.text.openType
    },
    // 是否粗体，默认normal
    bold: {
      type: Boolean,
      default: () => defProps.text.bold
    },
    // 是否块状
    block: {
      type: Boolean,
      default: () => defProps.text.block
    },
    // 文本显示的行数，如果设置，超出此行数，将会显示省略号
    lines: {
      type: [String, Number],
      default: () => defProps.text.lines
    },
    // 文本颜色
    color: {
      type: String,
      default: () => defProps.text.color
    },
    // 字体大小
    size: {
      type: [String, Number],
      default: () => defProps.text.size
    },
    // 图标的样式
    iconStyle: {
      type: [Object, String],
      default: () => defProps.text.iconStyle
    },
    // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
    decoration: {
      tepe: String,
      default: () => defProps.text.decoration
    },
    // 外边距，对象、字符串，数值形式均可
    margin: {
      type: [Object, String, Number],
      default: () => defProps.text.margin
    },
    // 文本行高
    lineHeight: {
      type: [String, Number],
      default: () => defProps.text.lineHeight
    },
    // 文本对齐方式，可选值left|center|right
    align: {
      type: String,
      default: () => defProps.text.align
    },
    // 文字换行，可选值break-word|normal|anywhere
    wordWrap: {
      type: String,
      default: () => defProps.text.wordWrap
    }
  }
};
const value = {
  computed: {
    // 经处理后需要显示的值
    value() {
      const {
        text,
        mode,
        format,
        href
      } = this;
      if (mode === "price") {
        if (test.func(format)) {
          return format(text);
        }
        return priceFormat(text, 2);
      }
      if (mode === "date") {
        !test.date(text) && error();
        if (test.func(format)) {
          return format(text);
        }
        if (format) {
          return timeFormat(text, format);
        }
        return timeFormat(text, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return `${text.substr(0, 3)}****${text.substr(7)}`;
        }
        return text;
      }
      if (mode === "name") {
        if (test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return this.formatName(text);
        }
        return text;
      }
      if (mode === "link") {
        return text;
      }
      return text;
    }
  },
  methods: {
    // 默认的姓名脱敏规则
    formatName(name) {
      let value2 = "";
      if (name.length === 2) {
        value2 = name.substr(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value2 = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value2 = name;
      }
      return value2;
    }
  }
};
const uText_vue_vue_type_style_index_0_scoped_a3f99f4d_lang = "";
const _sfc_main = {
  name: "u--text",
  mixins: [mpMixin, mixin, value, props],
  emits: ["click"],
  computed: {
    valueStyle() {
      const style = {
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: addUnit(this.size)
      };
      !this.type && (style.color = this.color);
      this.isNvue && this.lines && (style.lines = this.lines);
      this.lineHeight && (style.lineHeight = addUnit(this.lineHeight));
      !this.isNvue && this.block && (style.display = "block");
      return deepMerge(style, addStyle(this.customStyle));
    },
    isNvue() {
      let nvue = false;
      return nvue;
    },
    isMp() {
      let mp = false;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    addStyle,
    clickHandler() {
      if (this.call && this.mode === "phone") {
        makePhoneCall({
          phoneNumber: this.text
        });
      }
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3$2);
  const _component_v_uni_view = index$g;
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_3$1);
  const _component_v_uni_button = index$x;
  return _ctx.show ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: normalizeClass(["u-text", []]),
    style: normalizeStyle({
      margin: _ctx.margin,
      justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
    }),
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      _ctx.mode === "price" ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 0,
        class: normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
        style: normalizeStyle([$options.valueStyle])
      }, {
        default: withCtx(() => [
          createTextVNode("￥")
        ]),
        _: 1
      }, 8, ["class", "style"])) : createCommentVNode("", true),
      _ctx.prefixIcon ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: "u-text__prefix-icon"
      }, {
        default: withCtx(() => [
          createVNode(_component_u_icon, {
            name: _ctx.prefixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      _ctx.mode === "link" ? (openBlock(), createBlock(_component_u_link, {
        key: 2,
        class: normalizeClass(["u-text__value", [_ctx.type && `u-text__value--${_ctx.type}`, _ctx.lines && `u-line-${_ctx.lines}`]]),
        style: normalizeStyle({ fontWeight: $options.valueStyle.fontWeight, wordWrap: $options.valueStyle.wordWrap, fontSize: $options.valueStyle.fontSize }),
        text: _ctx.value,
        href: _ctx.href,
        underLine: ""
      }, null, 8, ["style", "class", "text", "href"])) : _ctx.openType && $options.isMp ? (openBlock(), createBlock(_component_v_uni_button, {
        key: 3,
        class: "u-reset-button u-text__value",
        style: normalizeStyle([$options.valueStyle]),
        "data-index": _ctx.index,
        openType: _ctx.openType,
        onGetuserinfo: _ctx.onGetUserInfo,
        onContact: _ctx.onContact,
        onGetphonenumber: _ctx.onGetPhoneNumber,
        onError: _ctx.onError,
        onLaunchapp: _ctx.onLaunchApp,
        onOpensetting: _ctx.onOpenSetting,
        lang: _ctx.lang,
        "session-from": _ctx.sessionFrom,
        "send-message-title": _ctx.sendMessageTitle,
        "send-message-path": _ctx.sendMessagePath,
        "send-message-img": _ctx.sendMessageImg,
        "show-message-card": _ctx.showMessageCard,
        "app-parameter": _ctx.appParameter
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.value), 1)
        ]),
        _: 1
      }, 8, ["style", "data-index", "openType", "onGetuserinfo", "onContact", "onGetphonenumber", "onError", "onLaunchapp", "onOpensetting", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (openBlock(), createBlock(_component_v_uni_text, {
        key: 4,
        class: normalizeClass(["u-text__value", [
          _ctx.type && `u-text__value--${_ctx.type}`,
          _ctx.lines && `u-line-${_ctx.lines}`
        ]]),
        style: normalizeStyle([$options.valueStyle])
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.value), 1)
        ]),
        _: 1
      }, 8, ["style", "class"])),
      _ctx.suffixIcon ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 5,
        class: "u-text__suffix-icon"
      }, {
        default: withCtx(() => [
          createVNode(_component_u_icon, {
            name: _ctx.suffixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["style", "onClick"])) : createCommentVNode("", true);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a3f99f4d"]]);
export {
  __easycom_3 as _
};
