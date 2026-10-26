/* __addonChunkWindiInjected:message-open_vue_vue_type_script_setup_true_lang_06e87e85 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("message-open_vue_vue_type_script_setup_true_lang_06e87e85",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.mt-\\[40rpx\\]{\n  margin-top: 1.25rem;\n}.px-\\[var\\(--popup-sidebar-m\\)\\]{\n  padding-left: var(--popup-sidebar-m);\n  padding-right: var(--popup-sidebar-m);\n}.py-\\[var\\(--pad-top-m\\)\\]{\n  padding-top: var(--pad-top-m);\n  padding-bottom: var(--pad-top-m);\n}");
/* __addonChunkCssInjected:56565a8a */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("56565a8a",".addon-wrap-56565a8a .u-empty,.addon-wrap-56565a8a .u-empty__wrap,.addon-wrap-56565a8a .u-tabs,.addon-wrap-56565a8a .u-tabs__wrapper,.addon-wrap-56565a8a .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-56565a8a .u-tabs__wrapper__scroll-view,.addon-wrap-56565a8a .u-tabs__wrapper__nav,.addon-wrap-56565a8a .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-56565a8a .u-textarea{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.addon-wrap-56565a8a .u-textarea--radius{border-radius:4px}.addon-wrap-56565a8a .u-textarea--no-radius{border-radius:0}.addon-wrap-56565a8a .u-textarea--disabled{background-color:#f5f7fa}.addon-wrap-56565a8a .u-textarea__field{flex:1;font-size:15px;color:#606266;width:100%}.addon-wrap-56565a8a .u-textarea__count{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}");
import { g as index$h, a as index$i, i as index$g, d as index$x } from "./uni-h5.es.7545a186.js";
import "./textarea.80481159.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { e as deepMerge, a as addStyle, b as addUnit, w as formValidate } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, defineComponent, ref, watch, resolveDynamicComponent, withModifiers } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
const props = {
  props: {
    // 输入框的内容
    value: {
      type: [String, Number],
      default: () => defProps.textarea.value
    },
    // 输入框的内容
    modelValue: {
      type: [String, Number],
      default: () => defProps.textarea.value
    },
    // 输入框为空时占位符
    placeholder: {
      type: [String, Number],
      default: () => defProps.textarea.placeholder
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
    // 输入框高度
    height: {
      type: [String, Number],
      default: () => defProps.textarea.height
    },
    // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
    confirmType: {
      type: String,
      default: () => defProps.textarea.confirmType
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => defProps.textarea.disabled
    },
    // 是否显示统计字数
    count: {
      type: Boolean,
      default: () => defProps.textarea.count
    },
    // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
    focus: {
      type: Boolean,
      default: () => defProps.textarea.focus
    },
    // 是否自动增加高度
    autoHeight: {
      type: Boolean,
      default: () => defProps.textarea.autoHeight
    },
    // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
    fixed: {
      type: Boolean,
      default: () => defProps.textarea.fixed
    },
    // 指定光标与键盘的距离
    cursorSpacing: {
      type: Number,
      default: () => defProps.textarea.cursorSpacing
    },
    // 指定focus时的光标位置
    cursor: {
      type: [String, Number],
      default: () => defProps.textarea.cursor
    },
    // 是否显示键盘上方带有”完成“按钮那一栏，
    showConfirmBar: {
      type: Boolean,
      default: () => defProps.textarea.showConfirmBar
    },
    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: Number,
      default: () => defProps.textarea.selectionStart
    },
    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: Number,
      default: () => defProps.textarea.selectionEnd
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: () => defProps.textarea.adjustPosition
    },
    // 是否去掉 iOS 下的默认内边距，只微信小程序有效
    disableDefaultPadding: {
      type: Boolean,
      default: () => defProps.textarea.disableDefaultPadding
    },
    // focus时，点击页面的时候不收起键盘，只微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: () => defProps.textarea.holdKeyboard
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: () => defProps.textarea.maxlength
    },
    // 边框类型，surround-四周边框，bottom-底部边框
    border: {
      type: String,
      default: () => defProps.textarea.border
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: () => defProps.textarea.formatter
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }
};
const uTextarea_vue_vue_type_style_index_0_scoped_56565a8a_lang = "";
const _sfc_main$1 = {
  name: "u-textarea",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
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
  created() {
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        this.innerValue = newVal;
        if (this.firstChange === false && this.changeFromInner === false) {
          this.valueChange();
        }
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    // 组件的类名
    textareaClass() {
      let classes = [], { border, disabled } = this;
      border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
      border === "bottom" && (classes = classes.concat([
        "u-border-bottom",
        "u-textarea--no-radius"
      ]));
      disabled && classes.push("u-textarea--disabled");
      return classes.join(" ");
    },
    // 组件的样式
    textareaStyle() {
      const style = {};
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
  methods: {
    addStyle,
    addUnit,
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e);
      formValidate(this, "blur");
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
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
    // 内容发生变化，进行处理
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("update:modelValue", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        formValidate(this, "change");
      });
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_textarea = index$h;
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-textarea", $options.textareaClass]),
    style: normalizeStyle([$options.textareaStyle])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_textarea, {
        class: "u-textarea__field",
        value: $data.innerValue,
        style: normalizeStyle({ height: $options.addUnit(_ctx.height) }),
        placeholder: _ctx.placeholder,
        "placeholder-style": $options.addStyle(_ctx.placeholderStyle, "string"),
        "placeholder-class": _ctx.placeholderClass,
        disabled: _ctx.disabled,
        focus: _ctx.focus,
        autoHeight: _ctx.autoHeight,
        fixed: _ctx.fixed,
        cursorSpacing: _ctx.cursorSpacing,
        cursor: _ctx.cursor,
        showConfirmBar: _ctx.showConfirmBar,
        selectionStart: _ctx.selectionStart,
        selectionEnd: _ctx.selectionEnd,
        adjustPosition: _ctx.adjustPosition,
        disableDefaultPadding: _ctx.disableDefaultPadding,
        holdKeyboard: _ctx.holdKeyboard,
        maxlength: _ctx.maxlength,
        "confirm-type": _ctx.confirmType,
        ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
        onFocus: $options.onFocus,
        onBlur: $options.onBlur,
        onLinechange: $options.onLinechange,
        onInput: $options.onInput,
        onConfirm: $options.onConfirm,
        onKeyboardheightchange: $options.onKeyboardheightchange
      }, null, 8, ["value", "style", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent", "onFocus", "onBlur", "onLinechange", "onInput", "onConfirm", "onKeyboardheightchange"]),
      _ctx.count ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 0,
        class: "u-textarea__count",
        style: normalizeStyle({
          "background-color": _ctx.disabled ? "transparent" : "#fff"
        })
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($data.innerValue.length) + "/" + toDisplayString(_ctx.maxlength), 1)
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["class", "style"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-56565a8a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "message-open",
  props: {
    defaultMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["submit"],
  setup(__props, { expose, emit: emits }) {
    const props2 = __props;
    const show = ref(false);
    const message = ref("");
    watch(show, (newVal) => {
      if (newVal) {
        message.value = props2.defaultMessage;
      }
    });
    watch(message, (newVal) => {
      if (newVal && newVal.length > 200) {
        message.value = newVal.substring(0, 200);
      }
    });
    const open = () => {
      show.value = true;
    };
    const submit = () => {
      emits("submit", message.value);
      show.value = false;
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_up_textarea = resolveEasycom(resolveDynamicComponent("up-textarea"), __easycom_1);
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        onClose: _cache[2] || (_cache[2] = ($event) => show.value = false),
        mode: "bottom",
        round: 10
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent", "stop"])),
            class: "popup-common flex flex-col"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("买家留言")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "px-[var(--popup-sidebar-m)] py-[var(--pad-top-m)]",
                style: { "height": "180px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_up_textarea, {
                    class: "message-input",
                    modelValue: message.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message.value = $event),
                    placeholder: "请输入备注信息...",
                    maxlength: 200,
                    height: 180
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "btn-wrap mt-[40rpx]" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, {
                    class: "primary-btn-bg btn",
                    onClick: submit
                  }, {
                    default: withCtx(() => [
                      createTextVNode("提交")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
export {
  _sfc_main as _
};
