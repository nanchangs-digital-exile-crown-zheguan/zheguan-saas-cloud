/* __addonChunkCssInjected:bb7f3d21 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("bb7f3d21",".addon-wrap-bb7f3d21 .u-empty,.addon-wrap-bb7f3d21 .u-empty__wrap,.addon-wrap-bb7f3d21 .u-tabs,.addon-wrap-bb7f3d21 .u-tabs__wrapper,.addon-wrap-bb7f3d21 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-bb7f3d21 .u-tabs__wrapper__scroll-view,.addon-wrap-bb7f3d21 .u-tabs__wrapper__nav,.addon-wrap-bb7f3d21 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-bb7f3d21 .u-input{display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex:1}.addon-wrap-bb7f3d21 .u-input--radius,.addon-wrap-bb7f3d21 .u-input--square{border-radius:4px}.addon-wrap-bb7f3d21 .u-input--no-radius{border-radius:0}.addon-wrap-bb7f3d21 .u-input--circle{border-radius:100px}.addon-wrap-bb7f3d21 .u-input__content{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.addon-wrap-bb7f3d21 .u-input__content__field-wrapper{position:relative;display:flex;flex-direction:row;margin:0;flex:1}.addon-wrap-bb7f3d21 .u-input__content__field-wrapper__field{line-height:26px;text-align:left;color:#303133;height:24px;font-size:15px;flex:1}.addon-wrap-bb7f3d21 .u-input__content__clear{width:20px;height:20px;border-radius:100px;background-color:#c6c7cb;display:flex;flex-direction:row;align-items:center;justify-content:center;transform:scale(.82);margin-left:4px}.addon-wrap-bb7f3d21 .u-input__content__subfix-icon{margin-left:4px}.addon-wrap-bb7f3d21 .u-input__content__prefix-icon{margin-right:4px}");
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createVNode, renderSlot, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { i as index$g, I as Input } from "./uni-h5.es.7545a186.js";
import "./input.18765527.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { w as formValidate, e as deepMerge, a as addStyle, b as addUnit, s as sleep } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 绑定的值
    modelValue: {
      type: [String, Number],
      default: () => defProps.input.value
    },
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: () => defProps.input.type
    },
    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: () => defProps.input.fixed
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: () => defProps.input.disabled
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: () => defProps.input.disabledColor
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: () => defProps.input.clearable
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: () => defProps.input.password
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: () => defProps.input.maxlength
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: () => defProps.input.placeholder
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: () => defProps.input.placeholderClass
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: () => defProps.input.placeholderStyle
    },
    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: () => defProps.input.showWordLimit
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: () => defProps.input.confirmType
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: () => defProps.input.confirmHold
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: () => defProps.input.holdKeyboard
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: () => defProps.input.focus
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: () => defProps.input.autoBlur
    },
    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: () => defProps.input.disableDefaultPadding
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: () => defProps.input.cursor
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: () => defProps.input.cursorSpacing
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: () => defProps.input.selectionStart
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: () => defProps.input.selectionEnd
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: () => defProps.input.adjustPosition
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: () => defProps.input.inputAlign
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: () => defProps.input.fontSize
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: () => defProps.input.color
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: () => defProps.input.prefixIcon
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: () => defProps.input.prefixIconStyle
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: () => defProps.input.suffixIcon
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: () => defProps.input.suffixIconStyle
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: () => defProps.input.border
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: () => defProps.input.readonly
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: () => defProps.input.shape
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: () => defProps.input.formatter
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }
};
const uInput_vue_vue_type_style_index_0_scoped_bb7f3d21_lang = "";
const _sfc_main = {
  name: "u-input",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 清除操作
      clearInput: false,
      // 输入框的值
      innerValue: "",
      // 是否处于获得焦点状态
      focused: false,
      // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
      firstChange: true,
      // value绑定值的变化是由内部还是外部引起的
      changeFromInner: false,
      // 过滤处理方法
      innerFormatter: (value) => value
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        this.innerValue = newVal;
        if (this.firstChange === false && this.changeFromInner === false) {
          this.valueChange();
        } else {
          formValidate(this, "change");
        }
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    // 是否显示清除控件
    isShowClear() {
      const { clearable, readonly, focused, innerValue } = this;
      return !!clearable && !readonly && !!focused && innerValue !== "";
    },
    // 组件的类名
    inputClass() {
      let classes = [], { border, disabled, shape } = this;
      border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
      classes.push(`u-input--${shape}`);
      border === "bottom" && (classes = classes.concat([
        "u-border-bottom",
        "u-input--no-radius"
      ]));
      return classes.join(" ");
    },
    // 组件的样式
    wrapperStyle() {
      const style = {};
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      if (this.border === "none") {
        style.padding = "0";
      } else {
        style.paddingTop = "6px";
        style.paddingBottom = "6px";
        style.paddingLeft = "9px";
        style.paddingRight = "9px";
      }
      return deepMerge(style, addStyle(this.customStyle));
    },
    // 输入框的样式
    inputStyle() {
      const style = {
        color: this.color,
        fontSize: addUnit(this.fontSize),
        textAlign: this.inputAlign
      };
      return style;
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
  methods: {
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // 当键盘输入时，触发input事件
    onInput(e) {
      let { value = "" } = e.detail || {};
      const formatter = this.formatter || this.innerFormatter;
      const formatValue = formatter(value);
      this.innerValue = value;
      this.$nextTick(() => {
        this.innerValue = formatValue;
        this.valueChange();
      });
    },
    // 输入框失去焦点时触发
    onBlur(event) {
      this.$emit("blur", event.detail.value);
      sleep(150).then(() => {
        this.focused = false;
      });
      formValidate(this, "blur");
    },
    // 输入框聚焦时触发
    onFocus(event) {
      this.focused = true;
      this.$emit("focus");
    },
    // 点击完成按钮时触发
    onConfirm(event) {
      this.$emit("confirm", this.innerValue);
    },
    // 键盘高度发生变化的时候触发此事件
    // 兼容性：微信小程序2.7.0+、App 3.1.0+
    onkeyboardheightchange(event) {
      this.$emit("keyboardheightchange", event);
    },
    // 内容发生变化，进行处理
    valueChange() {
      if (this.clearInput) {
        this.innerValue = "";
        this.clearInput = false;
      }
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("update:modelValue", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        formValidate(this, "change");
      });
    },
    // 点击清除控件
    onClear() {
      this.clearInput = true;
      this.innerValue = "";
      this.$nextTick(() => {
        this.valueChange();
        this.$emit("clear");
      });
    },
    /**
     * 在安卓nvue上，事件无法冒泡
     * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
     * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
     */
    clickHandler() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_view = index$g;
  const _component_v_uni_input = Input;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-input", $options.inputClass]),
    style: normalizeStyle([$options.wrapperStyle])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-input__content" }, {
        default: withCtx(() => [
          _ctx.prefixIcon || _ctx.$slots.prefix ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "u-input__content__prefix-icon"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "prefix", {}, () => [
                createVNode(_component_u_icon, {
                  name: _ctx.prefixIcon,
                  size: "18",
                  customStyle: _ctx.prefixIconStyle
                }, null, 8, ["name", "customStyle"])
              ], true)
            ]),
            _: 3
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, {
            class: "u-input__content__field-wrapper",
            onClick: $options.clickHandler
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_input, {
                class: "u-input__content__field-wrapper__field",
                style: normalizeStyle([$options.inputStyle]),
                type: _ctx.type,
                focus: _ctx.focus,
                cursor: _ctx.cursor,
                value: $data.innerValue,
                "auto-blur": _ctx.autoBlur,
                disabled: _ctx.disabled || _ctx.readonly,
                maxlength: _ctx.maxlength,
                placeholder: _ctx.placeholder,
                "placeholder-style": _ctx.placeholderStyle,
                "placeholder-class": _ctx.placeholderClass,
                "confirm-type": _ctx.confirmType,
                "confirm-hold": _ctx.confirmHold,
                "hold-keyboard": _ctx.holdKeyboard,
                "cursor-spacing": _ctx.cursorSpacing,
                "adjust-position": _ctx.adjustPosition,
                "selection-end": _ctx.selectionEnd,
                "selection-start": _ctx.selectionStart,
                password: _ctx.password || _ctx.type === "password" || false,
                ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
                onInput: $options.onInput,
                onBlur: $options.onBlur,
                onFocus: $options.onFocus,
                onConfirm: $options.onConfirm,
                onKeyboardheightchange: $options.onkeyboardheightchange
              }, null, 8, ["style", "type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent", "onInput", "onBlur", "onFocus", "onConfirm", "onKeyboardheightchange"])
            ]),
            _: 1
          }, 8, ["onClick"]),
          $options.isShowClear ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "u-input__content__clear",
            onClick: $options.onClear
          }, {
            default: withCtx(() => [
              createVNode(_component_u_icon, {
                name: "close",
                size: "11",
                color: "#ffffff",
                customStyle: "line-height: 12px"
              })
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          _ctx.suffixIcon || _ctx.$slots.suffix ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 2,
            class: "u-input__content__subfix-icon"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "suffix", {}, () => [
                createVNode(_component_u_icon, {
                  name: _ctx.suffixIcon,
                  size: "18",
                  customStyle: _ctx.suffixIconStyle
                }, null, 8, ["name", "customStyle"])
              ], true)
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bb7f3d21"]]);
export {
  __easycom_0 as _
};
