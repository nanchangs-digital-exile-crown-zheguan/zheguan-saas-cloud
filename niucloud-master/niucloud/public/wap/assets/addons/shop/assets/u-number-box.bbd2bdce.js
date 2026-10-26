/* __addonChunkCssInjected:254f2e11 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("254f2e11",".addon-wrap-254f2e11 .u-empty,.addon-wrap-254f2e11 .u-empty__wrap,.addon-wrap-254f2e11 .u-tabs,.addon-wrap-254f2e11 .u-tabs__wrapper,.addon-wrap-254f2e11 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-254f2e11 .u-tabs__wrapper__scroll-view,.addon-wrap-254f2e11 .u-tabs__wrapper__nav,.addon-wrap-254f2e11 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-254f2e11 .u-number-box{display:flex;flex-direction:row;align-items:center}.addon-wrap-254f2e11 .u-number-box__slot{touch-action:none}.addon-wrap-254f2e11 .u-number-box__plus,.addon-wrap-254f2e11 .u-number-box__minus{width:35px;display:flex;flex-direction:row;justify-content:center;align-items:center;touch-action:none}.addon-wrap-254f2e11 .u-number-box__plus--hover,.addon-wrap-254f2e11 .u-number-box__minus--hover{background-color:#e6e6e6!important}.addon-wrap-254f2e11 .u-number-box__plus--disabled,.addon-wrap-254f2e11 .u-number-box__minus--disabled{color:#c8c9cc;background-color:#f7f8fa}.addon-wrap-254f2e11 .u-number-box__plus{border-top-right-radius:4px;border-bottom-right-radius:4px}.addon-wrap-254f2e11 .u-number-box__minus{border-top-left-radius:4px;border-bottom-left-radius:4px}.addon-wrap-254f2e11 .u-number-box__input{position:relative;text-align:center;font-size:15px;padding:0;margin:0 2px;display:flex;flex-direction:row;align-items:center;justify-content:center}.addon-wrap-254f2e11 .u-number-box__input--disabled{color:#c8c9cc;background-color:#f2f3f5}");
import { i as index$g, I as Input } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, withModifiers, renderSlot, normalizeClass, normalizeStyle, createVNode, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./input.18765527.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { c as getPx, b as addUnit } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 步进器标识符，在change回调返回
    name: {
      type: [String, Number],
      default: () => defProps.numberBox.name
    },
    // 用于双向绑定的值，初始化时设置设为默认min值(最小值)
    modelValue: {
      type: [String, Number],
      default: () => defProps.numberBox.value
    },
    // 最小值
    min: {
      type: [String, Number],
      default: () => defProps.numberBox.min
    },
    // 最大值
    max: {
      type: [String, Number],
      default: () => defProps.numberBox.max
    },
    // 加减的步长，可为小数
    step: {
      type: [String, Number],
      default: () => defProps.numberBox.step
    },
    // 是否只允许输入整数
    integer: {
      type: Boolean,
      default: () => defProps.numberBox.integer
    },
    // 是否禁用，包括输入框，加减按钮
    disabled: {
      type: Boolean,
      default: () => defProps.numberBox.disabled
    },
    // 是否禁用输入框
    disabledInput: {
      type: Boolean,
      default: () => defProps.numberBox.disabledInput
    },
    // 是否开启异步变更，开启后需要手动控制输入值
    asyncChange: {
      type: Boolean,
      default: () => defProps.numberBox.asyncChange
    },
    // 输入框宽度，单位为px
    inputWidth: {
      type: [String, Number],
      default: () => defProps.numberBox.inputWidth
    },
    // 是否显示减少按钮
    showMinus: {
      type: Boolean,
      default: () => defProps.numberBox.showMinus
    },
    // 是否显示增加按钮
    showPlus: {
      type: Boolean,
      default: () => defProps.numberBox.showPlus
    },
    // 显示的小数位数
    decimalLength: {
      type: [String, Number, null],
      default: () => defProps.numberBox.decimalLength
    },
    // 是否开启长按加减手势
    longPress: {
      type: Boolean,
      default: () => defProps.numberBox.longPress
    },
    // 输入框文字和加减按钮图标的颜色
    color: {
      type: String,
      default: () => defProps.numberBox.color
    },
    // 按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致
    buttonSize: {
      type: [String, Number],
      default: () => defProps.numberBox.buttonSize
    },
    // 输入框和按钮的背景颜色
    bgColor: {
      type: String,
      default: () => defProps.numberBox.bgColor
    },
    // 指定光标于键盘的距离，避免键盘遮挡输入框，单位px
    cursorSpacing: {
      type: [String, Number],
      default: () => defProps.numberBox.cursorSpacing
    },
    // 是否禁用增加按钮
    disablePlus: {
      type: Boolean,
      default: () => defProps.numberBox.disablePlus
    },
    // 是否禁用减少按钮
    disableMinus: {
      type: Boolean,
      default: () => defProps.numberBox.disableMinus
    },
    // 加减按钮图标的样式
    iconStyle: {
      type: [Object, String],
      default: () => defProps.numberBox.iconStyle
    }
  }
};
const uNumberBox_vue_vue_type_style_index_0_scoped_254f2e11_lang = "";
const _sfc_main = {
  name: "u-number-box",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 输入框实际操作的值
      currentValue: "",
      // 定时器
      longPressTimer: null
    };
  },
  watch: {
    // 多个值之间，只要一个值发生变化，都要重新检查check()函数
    watchChange(n) {
      this.check();
    },
    // 监听v-mode的变化，重新初始化内部的值
    modelValue: {
      handler: function(newV, oldV) {
        if (newV !== this.currentValue) {
          this.currentValue = this.format(this.modelValue);
        }
      },
      immediate: true
    }
  },
  computed: {
    getCursorSpacing() {
      return getPx(this.cursorSpacing);
    },
    // 按钮的样式
    buttonStyle() {
      return (type) => {
        const style = {
          backgroundColor: this.bgColor,
          height: addUnit(this.buttonSize),
          color: this.color
        };
        if (this.isDisabled(type)) {
          style.backgroundColor = "#f7f8fa";
        }
        return style;
      };
    },
    // 输入框的样式
    inputStyle() {
      this.disabled || this.disabledInput;
      const style = {
        color: this.color,
        backgroundColor: this.bgColor,
        height: addUnit(this.buttonSize),
        width: addUnit(this.inputWidth)
      };
      return style;
    },
    // 用于监听多个值发生变化
    watchChange() {
      return [this.integer, this.decimalLength, this.min, this.max];
    },
    isDisabled() {
      return (type) => {
        if (type === "plus") {
          return this.disabled || this.disablePlus || this.currentValue >= this.max;
        }
        return this.disabled || this.disableMinus || this.currentValue <= this.min;
      };
    }
  },
  mounted() {
    this.init();
  },
  emits: ["update:modelValue", "focus", "blur", "overlimit", "change", "plus", "minus"],
  methods: {
    init() {
      this.currentValue = this.format(this.modelValue);
    },
    // 格式化整理数据，限制范围
    format(value) {
      value = this.filter(value);
      value = value === "" ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min);
      if (this.decimalLength !== null) {
        value = value.toFixed(this.decimalLength);
      }
      return value;
    },
    // 过滤非法的字符
    filter(value) {
      value = String(value).replace(/[^0-9.-]/g, "");
      if (this.integer && value.indexOf(".") !== -1) {
        value = value.split(".")[0];
      }
      return value;
    },
    check() {
      const val = this.format(this.currentValue);
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    },
    // 判断是否出于禁止操作状态
    // isDisabled(type) {
    // 	if (type === 'plus') {
    // 		// 在点击增加按钮情况下，判断整体的disabled，是否单独禁用增加按钮，以及当前值是否大于最大的允许值
    // 		return (
    // 			this.disabled ||
    // 			this.disablePlus ||
    // 			this.currentValue >= this.max
    // 		)
    // 	}
    // 	// 点击减少按钮同理
    // 	return (
    // 		this.disabled ||
    // 		this.disableMinus ||
    // 		this.currentValue <= this.min
    // 	)
    // },
    // 输入框活动焦点
    onFocus(event) {
      this.$emit("focus", {
        ...event.detail,
        name: this.name
      });
    },
    // 输入框失去焦点
    onBlur(event) {
      this.format(event.detail.value);
      this.$emit(
        "blur",
        {
          ...event.detail,
          name: this.name
        }
      );
    },
    // 输入框值发生变化
    onInput(e) {
      const {
        value = ""
      } = e.detail || {};
      if (value === "")
        return;
      let formatted = this.filter(value);
      if (this.decimalLength !== null && formatted.indexOf(".") !== -1) {
        const pair = formatted.split(".");
        formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
      }
      formatted = this.format(formatted);
      this.emitChange(formatted);
    },
    // 发出change事件
    emitChange(value) {
      if (!this.asyncChange) {
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.currentValue = value;
          this.$forceUpdate();
        });
      }
      this.$emit("change", {
        value,
        name: this.name
      });
    },
    onChange() {
      const {
        type
      } = this;
      if (this.isDisabled(type)) {
        return this.$emit("overlimit", type);
      }
      const diff = type === "minus" ? -this.step : +this.step;
      const value = this.format(this.add(+this.currentValue, diff));
      this.emitChange(value);
      this.$emit(type);
    },
    // 对值扩大后进行四舍五入，再除以扩大因子，避免出现浮点数操作的精度问题
    add(num1, num2) {
      const cardinal = Math.pow(10, 10);
      return Math.round((num1 + num2) * cardinal) / cardinal;
    },
    // 点击加减按钮
    clickHandler(type) {
      this.type = type;
      this.onChange();
    },
    longPressStep() {
      this.clearTimeout();
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 250);
    },
    onTouchStart(type) {
      if (!this.longPress)
        return;
      this.clearTimeout();
      this.type = type;
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 600);
    },
    // 触摸结束，清除定时器，停止长按加减
    onTouchEnd() {
      if (!this.longPress)
        return;
      this.clearTimeout();
    },
    // 清除定时器
    clearTimeout() {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_input = Input;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-number-box" }, {
    default: withCtx(() => [
      _ctx.showMinus && _ctx.$slots.minus ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "u-number-box__slot cursor-pointer",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => $options.onTouchStart("minus")),
        onTouchend: withModifiers($options.clearTimeout, ["stop"])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "minus", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["onTouchend"])) : _ctx.showMinus ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: normalizeClass(["u-number-box__minus cursor-pointer", { "u-number-box__minus--disabled": $options.isDisabled("minus") }]),
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[3] || (_cache[3] = ($event) => $options.onTouchStart("minus")),
        onTouchend: withModifiers($options.clearTimeout, ["stop"]),
        "hover-class": "u-number-box__minus--hover",
        "hover-stay-time": "150",
        style: normalizeStyle([$options.buttonStyle("minus")])
      }, {
        default: withCtx(() => [
          createVNode(_component_u_icon, {
            name: "minus",
            color: $options.isDisabled("minus") ? "#c8c9cc" : "#323233",
            size: "15",
            bold: "",
            customStyle: _ctx.iconStyle
          }, null, 8, ["color", "customStyle"])
        ]),
        _: 1
      }, 8, ["onTouchend", "class", "style"])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "input", {}, () => [
        createVNode(_component_v_uni_input, {
          disabled: _ctx.disabledInput || _ctx.disabled,
          "cursor-spacing": $options.getCursorSpacing,
          class: normalizeClass([{ "u-number-box__input--disabled": _ctx.disabled || _ctx.disabledInput }, "u-number-box__input"]),
          modelValue: $data.currentValue,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.currentValue = $event),
          onBlur: $options.onBlur,
          onFocus: $options.onFocus,
          onInput: $options.onInput,
          type: "number",
          style: normalizeStyle([$options.inputStyle])
        }, null, 8, ["disabled", "cursor-spacing", "class", "modelValue", "onBlur", "onFocus", "onInput", "style"])
      ], true),
      _ctx.showPlus && _ctx.$slots.plus ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 2,
        class: "u-number-box__slot cursor-pointer",
        onClick: _cache[5] || (_cache[5] = withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[6] || (_cache[6] = ($event) => $options.onTouchStart("plus")),
        onTouchend: withModifiers($options.clearTimeout, ["stop"])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "plus", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["onTouchend"])) : _ctx.showPlus ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 3,
        class: normalizeClass(["u-number-box__plus cursor-pointer", { "u-number-box__minus--disabled": $options.isDisabled("plus") }]),
        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[8] || (_cache[8] = ($event) => $options.onTouchStart("plus")),
        onTouchend: withModifiers($options.clearTimeout, ["stop"]),
        "hover-class": "u-number-box__plus--hover",
        "hover-stay-time": "150",
        style: normalizeStyle([$options.buttonStyle("plus")])
      }, {
        default: withCtx(() => [
          createVNode(_component_u_icon, {
            name: "plus",
            color: $options.isDisabled("plus") ? "#c8c9cc" : "#323233",
            size: "15",
            bold: "",
            customStyle: _ctx.iconStyle
          }, null, 8, ["color", "customStyle"])
        ]),
        _: 1
      }, 8, ["onTouchend", "class", "style"])) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-254f2e11"]]);
export {
  __easycom_5 as _
};
