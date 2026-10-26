/* __addonChunkCssInjected:db65a0af */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("db65a0af",".addon-wrap-db65a0af .u-empty,.addon-wrap-db65a0af .u-empty__wrap,.addon-wrap-db65a0af .u-tabs,.addon-wrap-db65a0af .u-tabs__wrapper,.addon-wrap-db65a0af .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-db65a0af .u-tabs__wrapper__scroll-view,.addon-wrap-db65a0af .u-tabs__wrapper__nav,.addon-wrap-db65a0af .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-db65a0af .u-button{width:100%;white-space:nowrap}.addon-wrap-db65a0af .u-button__text{white-space:nowrap;line-height:1}.addon-wrap-db65a0af .u-button:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;transform:translate(-50%,-50%);opacity:0;content:\" \";background-color:#000;border-color:#000}.addon-wrap-db65a0af .u-button--active:before{opacity:.15}.addon-wrap-db65a0af .u-button__icon+.u-button__text:not(:empty),.addon-wrap-db65a0af .u-button__loading-text{margin-left:4px}.addon-wrap-db65a0af .u-button--plain.u-button--primary{color:var(--primary-color)}.addon-wrap-db65a0af .u-button--plain.u-button--info{color:#909399}.addon-wrap-db65a0af .u-button--plain.u-button--success{color:#5ac725}.addon-wrap-db65a0af .u-button--plain.u-button--error,.addon-wrap-db65a0af .u-button--plain.u-button--warning{color:#f56c6c}.addon-wrap-db65a0af .u-button{height:40px;position:relative;align-items:center;justify-content:center;display:flex;box-sizing:border-box;flex-direction:row}.addon-wrap-db65a0af .u-button__text{font-size:15px}.addon-wrap-db65a0af .u-button__loading-text{font-size:15px;margin-left:4px}.addon-wrap-db65a0af .u-button--large{width:100%;height:50px;padding:0 15px}.addon-wrap-db65a0af .u-button--normal{padding:0 12px;font-size:14px}.addon-wrap-db65a0af .u-button--small{min-width:60px;height:30px;padding:0 8px;font-size:12px}.addon-wrap-db65a0af .u-button--mini{height:22px;font-size:10px;min-width:50px;padding:0 8px}.addon-wrap-db65a0af .u-button--disabled{opacity:.5}.addon-wrap-db65a0af .u-button--info{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.addon-wrap-db65a0af .u-button--success{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.addon-wrap-db65a0af .u-button--primary{color:#fff;background-color:var(--primary-color);border-color:var(--primary-color);border-width:1px;border-style:solid}.addon-wrap-db65a0af .u-button--error{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.addon-wrap-db65a0af .u-button--warning{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.addon-wrap-db65a0af .u-button--block{display:flex;flex-direction:row;width:100%}.addon-wrap-db65a0af .u-button--circle{border-radius:100px}.addon-wrap-db65a0af .u-button--square{border-radius:3px}.addon-wrap-db65a0af .u-button__icon{min-width:1em;line-height:inherit!important;vertical-align:top}.addon-wrap-db65a0af .u-button--plain{background-color:#fff}.addon-wrap-db65a0af .u-button--hairline{border-width:.5px!important}");
import "./scroll-view.29370e9b.js";
import { a as index$i, d as index$x, i as index$g, S as ScrollView } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_4, c as colorGradient } from "./u-loading-icon.8e9029d5.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createElementBlock, Fragment, createVNode, createTextVNode, toDisplayString, createCommentVNode, renderSlot, renderList, resolveComponent } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import "./button.fdf0e29d.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { n as color, a as addStyle, b as addUnit, s as sleep, v as deepClone, j as toast, t as test, l as error, r as range, x as padZero } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { d as dayjs } from "./index.1599740b.js";
const props$1 = {
  props: {
    // 是否细边框
    hairline: {
      type: Boolean,
      default: () => defProps.button.hairline
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: () => defProps.button.type
    },
    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: () => defProps.button.size
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: () => defProps.button.shape
    },
    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: () => defProps.button.plain
    },
    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: () => defProps.button.disabled
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: () => defProps.button.loading
    },
    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: () => defProps.button.loadingText
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: () => defProps.button.loadingMode
    },
    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: () => defProps.button.loadingSize
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: () => defProps.button.openType
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: () => defProps.button.formType
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: () => defProps.button.appParameter
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: () => defProps.button.hoverStopPropagation
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: () => defProps.button.lang
    },
    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: () => defProps.button.sessionFrom
    },
    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: () => defProps.button.sendMessageTitle
    },
    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: () => defProps.button.sendMessagePath
    },
    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: () => defProps.button.sendMessageImg
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: () => defProps.button.showMessageCard
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: () => defProps.button.dataName
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: () => defProps.button.throttleTime
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: () => defProps.button.hoverStartTime
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: () => defProps.button.hoverStayTime
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: () => defProps.button.text
    },
    // 按钮图标
    icon: {
      type: String,
      default: () => defProps.button.icon
    },
    // 按钮图标
    iconColor: {
      type: String,
      default: () => defProps.button.icon
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: () => defProps.button.color
    }
  }
};
let flag;
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func === "function" && func();
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    setTimeout(() => {
      flag = false;
      typeof func === "function" && func();
    }, wait);
  }
}
const _sfc_main$3 = {
  name: "u-button",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {};
  },
  computed: {
    // 生成bem风格的类名
    bemClass() {
      if (!this.color) {
        return this.bem(
          "button",
          ["type", "shape", "size"],
          ["disabled", "plain", "hairline"]
        );
      } else {
        return this.bem(
          "button",
          ["shape", "size"],
          ["disabled", "plain", "hairline"]
        );
      }
    },
    loadingColor() {
      if (this.plain) {
        return this.color ? this.color : color[`u-${this.type}`];
      }
      if (this.type === "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    },
    iconColorCom() {
      if (this.iconColor)
        return this.iconColor;
      if (this.plain) {
        return this.color ? this.color : this.type;
      } else {
        return this.type === "info" ? "#000000" : "#ffffff";
      }
    },
    baseColor() {
      let style = {};
      if (this.color) {
        style.color = this.plain ? this.color : "white";
        if (!this.plain) {
          style["background-color"] = this.color;
        }
        if (this.color.indexOf("gradient") !== -1) {
          style.borderTopWidth = 0;
          style.borderRightWidth = 0;
          style.borderBottomWidth = 0;
          style.borderLeftWidth = 0;
          if (!this.plain) {
            style.backgroundImage = this.color;
          }
        } else {
          style.borderColor = this.color;
          style.borderWidth = "1px";
          style.borderStyle = "solid";
        }
      }
      return style;
    },
    // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
    nvueTextStyle() {
      let style = {};
      if (this.type === "info") {
        style.color = "#323233";
      }
      if (this.color) {
        style.color = this.plain ? this.color : "white";
      }
      style.fontSize = this.textSize + "px";
      return style;
    },
    // 字体大小
    textSize() {
      let fontSize = 14, { size } = this;
      if (size === "large")
        fontSize = 16;
      if (size === "normal")
        fontSize = 14;
      if (size === "small")
        fontSize = 12;
      if (size === "mini")
        fontSize = 10;
      return fontSize;
    }
  },
  emits: [
    "click",
    "getphonenumber",
    "getuserinfo",
    "error",
    "opensetting",
    "launchapp",
    "agreeprivacyauthorization"
  ],
  methods: {
    addStyle,
    clickHandler() {
      if (!this.disabled && !this.loading) {
        throttle(() => {
          this.$emit("click");
        }, this.throttleTime);
      }
    },
    // 下面为对接uniapp官方按钮开放能力事件回调的对接
    getphonenumber(res) {
      this.$emit("getphonenumber", res);
    },
    getuserinfo(res) {
      this.$emit("getuserinfo", res);
    },
    error(res) {
      this.$emit("error", res);
    },
    opensetting(res) {
      this.$emit("opensetting", res);
    },
    launchapp(res) {
      this.$emit("launchapp", res);
    },
    agreeprivacyauthorization(res) {
      this.$emit("agreeprivacyauthorization", res);
    }
  }
};
const uButton_vue_vue_type_style_index_0_scoped_db65a0af_lang = "";
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  const _component_v_uni_text = index$i;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_button = index$x;
  return openBlock(), createBlock(_component_v_uni_button, {
    "hover-start-time": Number(_ctx.hoverStartTime),
    "hover-stay-time": Number(_ctx.hoverStayTime),
    "form-type": _ctx.formType,
    "open-type": _ctx.openType,
    "app-parameter": _ctx.appParameter,
    "hover-stop-propagation": _ctx.hoverStopPropagation,
    "send-message-title": _ctx.sendMessageTitle,
    "send-message-path": _ctx.sendMessagePath,
    lang: _ctx.lang,
    "data-name": _ctx.dataName,
    "session-from": _ctx.sessionFrom,
    "send-message-img": _ctx.sendMessageImg,
    "show-message-card": _ctx.showMessageCard,
    onGetphonenumber: $options.getphonenumber,
    onGetuserinfo: $options.getuserinfo,
    onError: $options.error,
    onOpensetting: $options.opensetting,
    onLaunchapp: $options.launchapp,
    onAgreeprivacyauthorization: $options.agreeprivacyauthorization,
    "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
    class: normalizeClass(["u-button u-reset-button", $options.bemClass]),
    style: normalizeStyle([$options.baseColor, $options.addStyle(_ctx.customStyle)]),
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_u_loading_icon, {
          mode: _ctx.loadingMode,
          size: _ctx.loadingSize * 1.15,
          color: $options.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        createVNode(_component_v_uni_text, {
          class: "u-button__loading-text",
          style: normalizeStyle([{ fontSize: $options.textSize + "px" }])
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.loadingText || _ctx.text), 1)
          ]),
          _: 1
        }, 8, ["style"])
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        _ctx.icon ? (openBlock(), createBlock(_component_u_icon, {
          key: 0,
          name: _ctx.icon,
          color: $options.iconColorCom,
          size: $options.textSize * 1.35,
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(_component_v_uni_text, {
            class: "u-button__text",
            style: normalizeStyle([{ fontSize: $options.textSize + "px" }])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ]),
            _: 1
          }, 8, ["style"])
        ], true)
      ], 64))
    ]),
    _: 3
  }, 8, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "onGetphonenumber", "onGetuserinfo", "onError", "onOpensetting", "onLaunchapp", "onAgreeprivacyauthorization", "hover-class", "style", "onClick", "class"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-db65a0af"]]);
const header_vue_vue_type_style_index_0_scoped_583c0179_lang = "";
const _sfc_main$2 = {
  name: "u-calendar-header",
  mixins: [mpMixin, mixin],
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subtitle: {
      type: String,
      default: ""
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示副标题
    showSubtitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    name() {
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-calendar-header u-border-bottom" }, {
    default: withCtx(() => [
      $props.showTitle ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 0,
        class: "u-calendar-header__title"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.title), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      $props.showSubtitle ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 1,
        class: "u-calendar-header__subtitle"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.subtitle), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(_component_v_uni_view, { class: "u-calendar-header__weekdays" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("一")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("二")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("三")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("四")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("五")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("六")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, { class: "u-calendar-header__weekdays__weekday" }, {
            default: withCtx(() => [
              createTextVNode("日")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const uHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-583c0179"]]);
const month_vue_vue_type_style_index_0_scoped_0ae350d7_lang = "";
const _sfc_main$1 = {
  name: "u-calendar-month",
  mixins: [mpMixin, mixin],
  props: {
    // 是否显示月份背景色
    showMark: {
      type: Boolean,
      default: true
    },
    // 主题色，对底部按钮和选中日期有效
    color: {
      type: String,
      default: "#3c9cff"
    },
    // 月份数据
    months: {
      type: Array,
      default: () => []
    },
    // 日期选择类型
    mode: {
      type: String,
      default: "single"
    },
    // 日期行高
    rowHeight: {
      type: [String, Number],
      default: 58
    },
    // mode=multiple时，最多可选多少个日期
    maxCount: {
      type: [String, Number],
      default: Infinity
    },
    // mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: "开始"
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: "结束"
    },
    // 默认选中的日期，mode为multiple或range是必须为数组格式
    defaultDate: {
      type: [Array, String, Date],
      default: null
    },
    // 最小的可选日期
    minDate: {
      type: [String, Number],
      default: 0
    },
    // 最大可选日期
    maxDate: {
      type: [String, Number],
      default: 0
    },
    // 如果没有设置maxDate，则往后推多少个月
    maxMonth: {
      type: [String, Number],
      default: 2
    },
    // 是否为只读状态，只读状态下禁止选择日期
    readonly: {
      type: Boolean,
      default: () => defProps.calendar.readonly
    },
    // 日期区间最多可选天数，默认无限制，mode = range时有效
    maxRange: {
      type: [Number, String],
      default: Infinity
    },
    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
    rangePrompt: {
      type: String,
      default: ""
    },
    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
    showRangePrompt: {
      type: Boolean,
      default: true
    },
    // 是否允许日期范围的起止时间为同一天，mode = range时有效
    allowSameDay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 每个日期的宽度
      width: 0,
      // 当前选中的日期item
      item: {},
      selected: []
    };
  },
  watch: {
    selectedChange: {
      immediate: true,
      handler(n) {
        this.setDefaultDate();
      }
    }
  },
  computed: {
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.minDate, this.maxDate, this.defaultDate];
    },
    dayStyle(index1, index2, item) {
      return (index12, index22, item2) => {
        const style = {};
        let week = item2.week;
        const dayWidth = Number(parseFloat(this.width / 7).toFixed(3).slice(0, -1));
        style.height = addUnit(this.rowHeight);
        if (index22 === 0) {
          week = (week === 0 ? 7 : week) - 1;
          style.marginLeft = addUnit(week * dayWidth);
        }
        if (this.mode === "range") {
          style.paddingLeft = 0;
          style.paddingRight = 0;
          style.paddingBottom = 0;
          style.paddingTop = 0;
        }
        return style;
      };
    },
    daySelectStyle() {
      return (index1, index2, item) => {
        let date = dayjs(item.date).format("YYYY-MM-DD"), style = {};
        if (this.selected.some((item2) => this.dateSame(item2, date))) {
          style.backgroundColor = this.color;
        }
        if (this.mode === "single") {
          if (date === this.selected[0]) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
            style.borderTopRightRadius = "3px";
            style.borderBottomRightRadius = "3px";
          }
        } else if (this.mode === "range") {
          if (this.selected.length >= 2) {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0])) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
            }
            if (this.dateSame(date, this.selected[len])) {
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
            if (dayjs(date).isAfter(dayjs(this.selected[0])) && dayjs(date).isBefore(dayjs(this.selected[len]))) {
              style.backgroundColor = colorGradient(this.color, "#ffffff", 100)[90];
              style.opacity = 0.7;
            }
          } else if (this.selected.length === 1) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
          }
        } else {
          if (this.selected.some((item2) => this.dateSame(item2, date))) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
            style.borderTopRightRadius = "3px";
            style.borderBottomRightRadius = "3px";
          }
        }
        return style;
      };
    },
    // 某个日期是否被选中
    textStyle() {
      return (item) => {
        const date = dayjs(item.date).format("YYYY-MM-DD"), style = {};
        if (this.selected.some((item2) => this.dateSame(item2, date))) {
          style.color = "#ffffff";
        }
        if (this.mode === "range") {
          const len = this.selected.length - 1;
          if (dayjs(date).isAfter(dayjs(this.selected[0])) && dayjs(date).isBefore(dayjs(this.selected[len]))) {
            style.color = this.color;
          }
        }
        return style;
      };
    },
    // 获取底部的提示文字
    getBottomInfo() {
      return (index1, index2, item) => {
        const date = dayjs(item.date).format("YYYY-MM-DD");
        const bottomInfo = item.bottomInfo;
        if (this.mode === "range" && this.selected.length > 0) {
          if (this.selected.length === 1) {
            if (this.dateSame(date, this.selected[0]))
              return this.startText;
            else
              return bottomInfo;
          } else {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0]) && this.dateSame(date, this.selected[1]) && len === 1) {
              return `${this.startText}/${this.endText}`;
            } else if (this.dateSame(date, this.selected[0])) {
              return this.startText;
            } else if (this.dateSame(date, this.selected[len])) {
              return this.endText;
            } else {
              return bottomInfo;
            }
          }
        } else {
          return bottomInfo;
        }
      };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$emit("monthSelected", this.selected);
      this.$nextTick(() => {
        sleep(10).then(() => {
          this.getWrapperWidth();
          this.getMonthRect();
        });
      });
    },
    // 判断两个日期是否相等
    dateSame(date1, date2) {
      return dayjs(date1).isSame(dayjs(date2));
    },
    // 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
    getWrapperWidth() {
      this.$uGetRect(".u-calendar-month-wrapper").then((size) => {
        this.width = size.width;
      });
    },
    getMonthRect() {
      const promiseAllArr = this.months.map((item, index) => this.getMonthRectByPromise(
        `u-calendar-month-${index}`
      ));
      Promise.all(promiseAllArr).then(
        (sizes) => {
          let height = 1;
          const topArr = [];
          for (let i = 0; i < this.months.length; i++) {
            topArr[i] = height;
            height += sizes[i].height;
          }
          this.$emit("updateMonthTop", topArr);
        }
      );
    },
    // 获取每个月份区域的尺寸
    getMonthRectByPromise(el) {
      return new Promise((resolve) => {
        this.$uGetRect(`.${el}`).then((size) => {
          resolve(size);
        });
      });
    },
    // 点击某一个日期
    clickHandler(index1, index2, item) {
      if (this.readonly) {
        return;
      }
      this.item = item;
      const date = dayjs(item.date).format("YYYY-MM-DD");
      if (item.disabled)
        return;
      let selected = deepClone(this.selected);
      if (this.mode === "single") {
        selected = [date];
      } else if (this.mode === "multiple") {
        if (selected.some((item2) => this.dateSame(item2, date))) {
          const itemIndex = selected.findIndex((item2) => item2 === date);
          selected.splice(itemIndex, 1);
        } else {
          if (selected.length < this.maxCount)
            selected.push(date);
        }
      } else {
        if (selected.length === 0 || selected.length >= 2) {
          selected = [date];
        } else if (selected.length === 1) {
          const existsDate = selected[0];
          if (dayjs(date).isBefore(existsDate)) {
            selected = [date];
          } else if (dayjs(date).isAfter(existsDate)) {
            if (dayjs(dayjs(date).subtract(this.maxRange, "day")).isAfter(dayjs(selected[0])) && this.showRangePrompt) {
              if (this.rangePrompt) {
                toast(this.rangePrompt);
              } else {
                toast(`选择天数不能超过 ${this.maxRange} 天`);
              }
              return;
            }
            selected.push(date);
            const startDate = selected[0];
            const endDate = selected[1];
            const arr = [];
            let i = 0;
            do {
              arr.push(dayjs(startDate).add(i, "day").format("YYYY-MM-DD"));
              i++;
            } while (dayjs(startDate).add(i, "day").isBefore(dayjs(endDate)));
            arr.push(endDate);
            selected = arr;
          } else {
            if (selected[0] === date && !this.allowSameDay)
              return;
            selected.push(date);
          }
        }
      }
      this.setSelected(selected);
    },
    // 设置默认日期
    setDefaultDate() {
      if (!this.defaultDate) {
        const selected = [dayjs().format("YYYY-MM-DD")];
        return this.setSelected(selected, false);
      }
      let defaultDate = [];
      const minDate = this.minDate || dayjs().format("YYYY-MM-DD");
      const maxDate = this.maxDate || dayjs(minDate).add(this.maxMonth - 1, "month").format("YYYY-MM-DD");
      if (this.mode === "single") {
        if (!test.array(this.defaultDate)) {
          defaultDate = [dayjs(this.defaultDate).format("YYYY-MM-DD")];
        } else {
          defaultDate = [this.defaultDate[0]];
        }
      } else {
        if (!test.array(this.defaultDate))
          return;
        defaultDate = this.defaultDate;
      }
      defaultDate = defaultDate.filter((item) => {
        return dayjs(item).isAfter(dayjs(minDate).subtract(1, "day")) && dayjs(item).isBefore(dayjs(
          maxDate
        ).add(1, "day"));
      });
      this.setSelected(defaultDate, false);
    },
    setSelected(selected, event = true) {
      this.selected = selected;
      event && this.$emit("monthSelected", this.selected, "tap");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-calendar-month-wrapper",
    ref: "u-calendar-month-wrapper"
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.months, (item, index) => {
        return openBlock(), createBlock(_component_v_uni_view, {
          key: index,
          class: normalizeClass([`u-calendar-month-${index}`]),
          ref_for: true,
          ref: `u-calendar-month-${index}`,
          id: `month-${index}`
        }, {
          default: withCtx(() => [
            index !== 0 ? (openBlock(), createBlock(_component_v_uni_text, {
              key: 0,
              class: "u-calendar-month__title"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.year) + "年" + toDisplayString(item.month) + "月", 1)
              ]),
              _: 2
            }, 1024)) : createCommentVNode("", true),
            createVNode(_component_v_uni_view, { class: "u-calendar-month__days" }, {
              default: withCtx(() => [
                $props.showMark ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 0,
                  class: "u-calendar-month__days__month-mark-wrapper"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, { class: "u-calendar-month__days__month-mark-wrapper__text" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.month), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.date, (item1, index1) => {
                  return openBlock(), createBlock(_component_v_uni_view, {
                    class: normalizeClass(["u-calendar-month__days__day", [item1.selected && "u-calendar-month__days__day__select--selected"]]),
                    key: index1,
                    style: normalizeStyle([$options.dayStyle(index, index1, item1)]),
                    onClick: ($event) => $options.clickHandler(index, index1, item1)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "u-calendar-month__days__day__select",
                        style: normalizeStyle([$options.daySelectStyle(index, index1, item1)])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, {
                            class: normalizeClass(["u-calendar-month__days__day__select__info", [item1.disabled && "u-calendar-month__days__day__select__info--disabled"]]),
                            style: normalizeStyle([$options.textStyle(item1)])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item1.day), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "style"]),
                          $options.getBottomInfo(index, index1, item1) ? (openBlock(), createBlock(_component_v_uni_text, {
                            key: 0,
                            class: normalizeClass(["u-calendar-month__days__day__select__buttom-info", [item1.disabled && "u-calendar-month__days__day__select__buttom-info--disabled"]]),
                            style: normalizeStyle([$options.textStyle(item1)])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($options.getBottomInfo(index, index1, item1)), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "style"])) : createCommentVNode("", true),
                          item1.dot ? (openBlock(), createBlock(_component_v_uni_text, {
                            key: 1,
                            class: "u-calendar-month__days__day__select__dot"
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["style"])
                    ]),
                    _: 2
                  }, 1032, ["style", "onClick", "class"]);
                }), 128))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class", "id"]);
      }), 128))
    ]),
    _: 1
  }, 512);
}
const uMonth = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-0ae350d7"]]);
const props = {
  props: {
    // 日历顶部标题
    title: {
      type: String,
      default: () => defProps.calendar.title
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: () => defProps.calendar.showTitle
    },
    // 是否显示副标题
    showSubtitle: {
      type: Boolean,
      default: () => defProps.calendar.showSubtitle
    },
    // 日期类型选择，single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围
    mode: {
      type: String,
      default: () => defProps.calendar.mode
    },
    // mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: () => defProps.calendar.startText
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: () => defProps.calendar.endText
    },
    // 自定义列表
    customList: {
      type: Array,
      default: () => defProps.calendar.customList
    },
    // 主题色，对底部按钮和选中日期有效
    color: {
      type: String,
      default: () => defProps.calendar.color
    },
    // 最小的可选日期
    minDate: {
      type: [String, Number],
      default: () => defProps.calendar.minDate
    },
    // 最大可选日期
    maxDate: {
      type: [String, Number],
      default: () => defProps.calendar.maxDate
    },
    // 默认选中的日期，mode为multiple或range是必须为数组格式
    defaultDate: {
      type: [Array, String, Date, null],
      default: () => defProps.calendar.defaultDate
    },
    // mode=multiple时，最多可选多少个日期
    maxCount: {
      type: [String, Number],
      default: () => defProps.calendar.maxCount
    },
    // 日期行高
    rowHeight: {
      type: [String, Number],
      default: () => defProps.calendar.rowHeight
    },
    // 日期格式化函数
    formatter: {
      type: [Function, null],
      default: () => defProps.calendar.formatter
    },
    // 是否显示农历
    showLunar: {
      type: Boolean,
      default: () => defProps.calendar.showLunar
    },
    // 是否显示月份背景色
    showMark: {
      type: Boolean,
      default: () => defProps.calendar.showMark
    },
    // 确定按钮的文字
    confirmText: {
      type: String,
      default: () => defProps.calendar.confirmText
    },
    // 确认按钮处于禁用状态时的文字
    confirmDisabledText: {
      type: String,
      default: () => defProps.calendar.confirmDisabledText
    },
    // 是否显示日历弹窗
    show: {
      type: Boolean,
      default: () => defProps.calendar.show
    },
    // 是否允许点击遮罩关闭日历
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.calendar.closeOnClickOverlay
    },
    // 是否为只读状态，只读状态下禁止选择日期
    readonly: {
      type: Boolean,
      default: () => defProps.calendar.readonly
    },
    // 	是否展示确认按钮
    showConfirm: {
      type: Boolean,
      default: () => defProps.calendar.showConfirm
    },
    // 日期区间最多可选天数，默认无限制，mode = range时有效
    maxRange: {
      type: [Number, String],
      default: () => defProps.calendar.maxRange
    },
    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
    rangePrompt: {
      type: String,
      default: () => defProps.calendar.rangePrompt
    },
    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
    showRangePrompt: {
      type: Boolean,
      default: () => defProps.calendar.showRangePrompt
    },
    // 是否允许日期范围的起止时间为同一天，mode = range时有效
    allowSameDay: {
      type: Boolean,
      default: () => defProps.calendar.allowSameDay
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: () => defProps.calendar.round
    },
    // 最多展示月份数量
    monthNum: {
      type: [Number, String],
      default: 3
    }
  }
};
var Calendar = {
  /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex
      */
  lunarInfo: [
    19416,
    19168,
    42352,
    21717,
    53856,
    55632,
    91476,
    22176,
    39632,
    21970,
    // 1900-1909
    19168,
    42422,
    42192,
    53840,
    119381,
    46400,
    54944,
    44450,
    38320,
    84343,
    // 1910-1919
    18800,
    42160,
    46261,
    27216,
    27968,
    109396,
    11104,
    38256,
    21234,
    18800,
    // 1920-1929
    25958,
    54432,
    59984,
    28309,
    23248,
    11104,
    100067,
    37600,
    116951,
    51536,
    // 1930-1939
    54432,
    120998,
    46416,
    22176,
    107956,
    9680,
    37584,
    53938,
    43344,
    46423,
    // 1940-1949
    27808,
    46416,
    86869,
    19872,
    42416,
    83315,
    21168,
    43432,
    59728,
    27296,
    // 1950-1959
    44710,
    43856,
    19296,
    43748,
    42352,
    21088,
    62051,
    55632,
    23383,
    22176,
    // 1960-1969
    38608,
    19925,
    19152,
    42192,
    54484,
    53840,
    54616,
    46400,
    46752,
    103846,
    // 1970-1979
    38320,
    18864,
    43380,
    42160,
    45690,
    27216,
    27968,
    44870,
    43872,
    38256,
    // 1980-1989
    19189,
    18800,
    25776,
    29859,
    59984,
    27480,
    23232,
    43872,
    38613,
    37600,
    // 1990-1999
    51552,
    55636,
    54432,
    55888,
    30034,
    22176,
    43959,
    9680,
    37584,
    51893,
    // 2000-2009
    43344,
    46240,
    47780,
    44368,
    21977,
    19360,
    42416,
    86390,
    21168,
    43312,
    // 2010-2019
    31060,
    27296,
    44368,
    23378,
    19296,
    42726,
    42208,
    53856,
    60005,
    54576,
    // 2020-2029
    23200,
    30371,
    38608,
    19195,
    19152,
    42192,
    118966,
    53840,
    54560,
    56645,
    // 2030-2039
    46496,
    22224,
    21938,
    18864,
    42359,
    42160,
    43600,
    111189,
    27936,
    44448,
    // 2040-2049
    /** Add By JJonline@JJonline.Cn**/
    84835,
    37744,
    18936,
    18800,
    25776,
    92326,
    59984,
    27424,
    108228,
    43744,
    // 2050-2059
    41696,
    53987,
    51552,
    54615,
    54432,
    55888,
    23893,
    22176,
    42704,
    21972,
    // 2060-2069
    21200,
    43448,
    43344,
    46240,
    46758,
    44368,
    21920,
    43940,
    42416,
    21168,
    // 2070-2079
    45683,
    26928,
    29495,
    27296,
    44368,
    84821,
    19296,
    42352,
    21732,
    53600,
    // 2080-2089
    59752,
    54560,
    55968,
    92838,
    22224,
    19168,
    43476,
    41680,
    53584,
    62034,
    // 2090-2099
    54560
  ],
  // 2100
  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
  Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
  Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
  /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
  Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
  /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
  solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
  /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
  sTermInfo: [
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "9778397bd19801ec9210c965cc920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd197c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bcf97c3598082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd19801ec9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bd07f1487f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b97bd197c36c9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b70c9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "977837f0e37f149b0723b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0723b06bd",
    "7f07e7f0e37f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e37f14998083b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14898082b0723b02d5",
    "7f07e7f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66aa89801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e26665b66a449801e9808297c35",
    "665f67f0e37f1489801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722"
  ],
  /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
  nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
  /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
  nStr2: ["初", "十", "廿", "卅"],
  /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
  nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
  /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
  lYearDays: function(y) {
    var i;
    var sum = 348;
    for (i = 32768; i > 8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
  leapMonth: function(y) {
    return this.lunarInfo[y - 1900] & 15;
  },
  /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
  leapDays: function(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
    }
    return 0;
  },
  /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
  monthDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
  },
  /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
  solarDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var ms = m - 1;
    if (ms == 1) {
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
  toGanZhiYear: function(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0)
      ganKey = 10;
    if (zhiKey == 0)
      zhiKey = 12;
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
  toAstro: function(cMonth, cDay) {
    var s = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
  },
  /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
  toGanZhi: function(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
  getTerm: function(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [
      parseInt("0x" + _table.substr(0, 5)).toString(),
      parseInt("0x" + _table.substr(5, 5)).toString(),
      parseInt("0x" + _table.substr(10, 5)).toString(),
      parseInt("0x" + _table.substr(15, 5)).toString(),
      parseInt("0x" + _table.substr(20, 5)).toString(),
      parseInt("0x" + _table.substr(25, 5)).toString()
    ];
    var _calday = [
      _info[0].substr(0, 1),
      _info[0].substr(1, 2),
      _info[0].substr(3, 1),
      _info[0].substr(4, 2),
      _info[1].substr(0, 1),
      _info[1].substr(1, 2),
      _info[1].substr(3, 1),
      _info[1].substr(4, 2),
      _info[2].substr(0, 1),
      _info[2].substr(1, 2),
      _info[2].substr(3, 1),
      _info[2].substr(4, 2),
      _info[3].substr(0, 1),
      _info[3].substr(1, 2),
      _info[3].substr(3, 1),
      _info[3].substr(4, 2),
      _info[4].substr(0, 1),
      _info[4].substr(1, 2),
      _info[4].substr(3, 1),
      _info[4].substr(4, 2),
      _info[5].substr(0, 1),
      _info[5].substr(1, 2),
      _info[5].substr(3, 1),
      _info[5].substr(4, 2)
    ];
    return parseInt(_calday[n - 1]);
  },
  /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
  toChinaMonth: function(m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var s = this.nStr3[m - 1];
    s += "月";
    return s;
  },
  /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
  toChinaDay: function(d) {
    var s;
    switch (d) {
      case 10:
        s = "初十";
        break;
      case 20:
        s = "二十";
        break;
      case 30:
        s = "三十";
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
  getAnimal: function(y) {
    return this.Animals[(y - 4) % 12];
  },
  /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
  solar2lunar: function(y, m, d) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    if (nWeek == 0) {
      nWeek = 7;
    }
    var year = i;
    var leap = this.leapMonth(i);
    var isLeap = false;
    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year);
      } else {
        temp = this.monthDays(year, i);
      }
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    var month = i;
    var day = offset + 1;
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);
    var firstNode = this.getTerm(y, m * 2 - 1);
    var secondNode = this.getTerm(y, m * 2);
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    var astro = this.toAstro(m, d);
    return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
  },
  /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
  lunar2solar: function(y, m, d, isLeapMonth) {
    var isLeapMonth = !!isLeapMonth;
    var leapMonth = this.leapMonth(y);
    this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    }
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    var day = this.monthDays(y, m);
    var _day = day;
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    }
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    if (isLeapMonth) {
      offset += day;
    }
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 864e5 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  }
};
const uCalendar_vue_vue_type_style_index_0_scoped_43e34f6c_lang = "";
const _sfc_main = {
  name: "u-calendar",
  mixins: [mpMixin, mixin, props],
  components: {
    uHeader,
    uMonth
  },
  data() {
    return {
      // 需要显示的月份的数组
      months: [],
      // 在月份滚动区域中，当前视图中月份的index索引
      monthIndex: 0,
      // 月份滚动区域的高度
      listHeight: 0,
      // month组件中选择的日期数组
      selected: [],
      scrollIntoView: "",
      scrollIntoViewScroll: "",
      scrollTop: 0,
      // 过滤处理方法
      innerFormatter: (value) => value
    };
  },
  watch: {
    scrollIntoView: {
      immediate: true,
      handler(n) {
      }
    },
    selectedChange: {
      immediate: true,
      handler(n) {
        this.setMonth();
      }
    },
    // 打开弹窗时，设置月份数据
    show: {
      immediate: true,
      handler(n) {
        if (n) {
          this.setMonth();
        } else {
          this.scrollIntoView = "";
        }
      }
    }
  },
  computed: {
    // 由于maxDate和minDate可以为字符串(2021-10-10)，或者数值(时间戳)，但是dayjs如果接受字符串形式的时间戳会有问题，这里进行处理
    innerMaxDate() {
      return test.number(this.maxDate) ? Number(this.maxDate) : this.maxDate;
    },
    innerMinDate() {
      return test.number(this.minDate) ? Number(this.minDate) : this.minDate;
    },
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.innerMinDate, this.innerMaxDate, this.defaultDate];
    },
    subtitle() {
      if (this.months.length) {
        return `${this.months[this.monthIndex].year}年${this.months[this.monthIndex].month}月`;
      } else {
        return "";
      }
    },
    buttonDisabled() {
      if (this.mode === "range") {
        if (this.selected.length <= 1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.start = Date.now();
    this.init();
  },
  emits: ["confirm", "close"],
  methods: {
    addUnit,
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // month组件内部选择日期后，通过事件通知给父组件
    monthSelected(e, scene = "init") {
      this.selected = e;
      if (!this.showConfirm) {
        if (this.mode === "multiple" || this.mode === "single" || this.mode === "range" && this.selected.length >= 2) {
          if (scene === "init") {
            return;
          }
          if (scene === "tap") {
            this.$emit("confirm", this.selected);
          }
        }
      }
    },
    init() {
      if (this.innerMaxDate && this.innerMinDate && new Date(this.innerMaxDate).getTime() < new Date(this.innerMinDate).getTime()) {
        return error();
      }
      this.listHeight = this.rowHeight * 5 + 30;
      this.setMonth();
    },
    close() {
      this.$emit("close");
    },
    // 点击确定按钮
    confirm() {
      if (!this.buttonDisabled) {
        this.$emit("confirm", this.selected);
      }
    },
    // 获得两个日期之间的月份数
    getMonths(minDate, maxDate) {
      const minYear = dayjs(minDate).year();
      const minMonth = dayjs(minDate).month() + 1;
      const maxYear = dayjs(maxDate).year();
      const maxMonth = dayjs(maxDate).month() + 1;
      return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
    },
    // 设置月份数据
    setMonth() {
      const minDate = this.innerMinDate || dayjs().valueOf();
      const maxDate = this.innerMaxDate || dayjs(minDate).add(this.monthNum - 1, "month").valueOf();
      const months = range(
        1,
        this.monthNum,
        this.getMonths(minDate, maxDate)
      );
      this.months = [];
      for (let i = 0; i < months; i++) {
        this.months.push({
          date: new Array(
            dayjs(minDate).add(i, "month").daysInMonth()
          ).fill(1).map((item, index) => {
            let day = index + 1;
            const week = dayjs(minDate).add(i, "month").date(day).day();
            const date = dayjs(minDate).add(i, "month").date(day).format("YYYY-MM-DD");
            let bottomInfo = "";
            if (this.showLunar) {
              const lunar = Calendar.solar2lunar(
                dayjs(date).year(),
                dayjs(date).month() + 1,
                dayjs(date).date()
              );
              bottomInfo = lunar.IDayCn;
            }
            let config = {
              day,
              week,
              // 小于最小允许的日期，或者大于最大的日期，则设置为disabled状态
              disabled: dayjs(date).isBefore(
                dayjs(minDate).format("YYYY-MM-DD")
              ) || dayjs(date).isAfter(
                dayjs(maxDate).format("YYYY-MM-DD")
              ),
              // 返回一个日期对象，供外部的formatter获取当前日期的年月日等信息，进行加工处理
              date: new Date(date),
              bottomInfo,
              dot: false,
              month: dayjs(minDate).add(i, "month").month() + 1
            };
            const formatter = this.formatter || this.innerFormatter;
            return formatter(config);
          }),
          // 当前所属的月份
          month: dayjs(minDate).add(i, "month").month() + 1,
          // 当前年份
          year: dayjs(minDate).add(i, "month").year()
        });
      }
    },
    // 滚动到默认设置的月份
    scrollIntoDefaultMonth(selected) {
      const _index = this.months.findIndex(({
        year,
        month
      }) => {
        month = padZero(month);
        return `${year}-${month}` === selected;
      });
      if (_index !== -1) {
        this.$nextTick(() => {
          this.scrollIntoView = `month-${_index}`;
          this.scrollIntoViewScroll = this.scrollIntoView;
        });
      }
    },
    // scroll-view滚动监听
    onScroll(event) {
      const scrollTop = Math.max(0, event.detail.scrollTop);
      for (let i = 0; i < this.months.length; i++) {
        if (scrollTop >= (this.months[i].top || this.listHeight)) {
          this.monthIndex = i;
          this.scrollIntoViewScroll = `month-${i}`;
        }
      }
    },
    // 更新月份的top值
    updateMonthTop(topArr = []) {
      topArr.map((item, index) => {
        this.months[index].top = item;
      });
      if (!this.defaultDate) {
        const selected2 = dayjs().format("YYYY-MM");
        this.scrollIntoDefaultMonth(selected2);
        return;
      }
      let selected = dayjs().format("YYYY-MM");
      if (!test.array(this.defaultDate)) {
        selected = dayjs(this.defaultDate).format("YYYY-MM");
      } else {
        selected = dayjs(this.defaultDate[0]).format("YYYY-MM");
      }
      this.scrollIntoDefaultMonth(selected);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uHeader = resolveComponent("uHeader");
  const _component_uMonth = resolveComponent("uMonth");
  const _component_v_uni_scroll_view = ScrollView;
  const _component_u_button = resolveEasycom(resolveDynamicComponent("u-button"), __easycom_1);
  const _component_v_uni_view = index$g;
  const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
  return openBlock(), createBlock(_component_u_popup, {
    show: _ctx.show,
    mode: "bottom",
    closeable: "",
    onClose: $options.close,
    round: _ctx.round,
    closeOnClickOverlay: _ctx.closeOnClickOverlay
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-calendar" }, {
        default: withCtx(() => [
          createVNode(_component_uHeader, {
            title: _ctx.title,
            subtitle: $options.subtitle,
            showSubtitle: _ctx.showSubtitle,
            showTitle: _ctx.showTitle
          }, null, 8, ["title", "subtitle", "showSubtitle", "showTitle"]),
          createVNode(_component_v_uni_scroll_view, {
            style: normalizeStyle({
              height: $options.addUnit($data.listHeight)
            }),
            "scroll-y": "",
            onScroll: $options.onScroll,
            "scroll-top": $data.scrollTop,
            scrollIntoView: $data.scrollIntoView
          }, {
            default: withCtx(() => [
              createVNode(_component_uMonth, {
                color: _ctx.color,
                rowHeight: _ctx.rowHeight,
                showMark: _ctx.showMark,
                months: $data.months,
                mode: _ctx.mode,
                maxCount: _ctx.maxCount,
                startText: _ctx.startText,
                endText: _ctx.endText,
                defaultDate: _ctx.defaultDate,
                minDate: $options.innerMinDate,
                maxDate: $options.innerMaxDate,
                maxMonth: _ctx.monthNum,
                readonly: _ctx.readonly,
                maxRange: _ctx.maxRange,
                rangePrompt: _ctx.rangePrompt,
                showRangePrompt: _ctx.showRangePrompt,
                allowSameDay: _ctx.allowSameDay,
                ref: "month",
                onMonthSelected: $options.monthSelected,
                onUpdateMonthTop: $options.updateMonthTop
              }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "onMonthSelected", "onUpdateMonthTop"])
            ]),
            _: 1
          }, 8, ["style", "onScroll", "scroll-top", "scrollIntoView"]),
          _ctx.showConfirm ? renderSlot(_ctx.$slots, "footer", { key: 0 }, () => [
            createVNode(_component_v_uni_view, { class: "u-calendar__confirm" }, {
              default: withCtx(() => [
                createVNode(_component_u_button, {
                  shape: "circle",
                  text: $options.buttonDisabled ? _ctx.confirmDisabledText : _ctx.confirmText,
                  color: _ctx.color,
                  onClick: $options.confirm,
                  disabled: $options.buttonDisabled
                }, null, 8, ["text", "color", "onClick", "disabled"])
              ]),
              _: 1
            })
          ], true) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["show", "onClose", "round", "closeOnClickOverlay"]);
}
const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-43e34f6c"]]);
export {
  __easycom_8 as _
};
