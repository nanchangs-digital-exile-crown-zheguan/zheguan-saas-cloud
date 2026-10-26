/* __addonChunkCssInjected:92081527 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("92081527",".addon-wrap-92081527 .u-empty,.addon-wrap-92081527 .u-empty__wrap,.addon-wrap-92081527 .u-tabs,.addon-wrap-92081527 .u-tabs__wrapper,.addon-wrap-92081527 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-92081527 .u-tabs__wrapper__scroll-view,.addon-wrap-92081527 .u-tabs__wrapper__nav,.addon-wrap-92081527 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-92081527 .u-checkbox{display:flex;overflow:hidden;flex-direction:row;align-items:center;margin-bottom:5px;margin-top:5px}.addon-wrap-92081527 .u-checkbox-label--left{flex-direction:row}.addon-wrap-92081527 .u-checkbox-label--right{flex-direction:row-reverse;justify-content:space-between}.addon-wrap-92081527 .u-checkbox__icon-wrap{box-sizing:border-box;transition-property:border-color,background-color,color;transition-duration:.2s;color:#606266;display:flex;flex-direction:row;align-items:center;justify-content:center;color:transparent;text-align:center;margin-right:6px;font-size:6px;border-width:1px;border-color:#c8c9cc;border-style:solid}.addon-wrap-92081527 .u-checkbox__icon-wrap--circle{border-radius:100%}.addon-wrap-92081527 .u-checkbox__icon-wrap--square{border-radius:3px}.addon-wrap-92081527 .u-checkbox__icon-wrap--checked{color:#fff;background-color:red;border-color:#2979ff}.addon-wrap-92081527 .u-checkbox__icon-wrap--disabled{background-color:#ebedf0!important}.addon-wrap-92081527 .u-checkbox__icon-wrap--disabled--checked{color:#c8c9cc!important}.addon-wrap-92081527 .u-checkbox__label{word-wrap:break-word;margin-left:5px;margin-right:12px;color:#606266;font-size:15px}.addon-wrap-92081527 .u-checkbox__label--disabled{color:#c8c9cc}");
import { _ as __easycom_3$1 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withModifiers, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, e as deepMerge, a as addStyle, t as test, w as formValidate } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props$1 = {
  props: {
    // checkbox的名称
    name: {
      type: [String, Number, Boolean],
      default: () => defProps.checkbox.name
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: () => defProps.checkbox.shape
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: () => defProps.checkbox.size
    },
    // 是否默认选中
    checked: {
      type: Boolean,
      default: () => defProps.checkbox.checked
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: () => defProps.checkbox.disabled
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: () => defProps.checkbox.activeColor
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: () => defProps.checkbox.inactiveColor
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: () => defProps.checkbox.iconSize
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: () => defProps.checkbox.iconColor
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: () => defProps.checkbox.label
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: () => defProps.checkbox.labelSize
    },
    // label的颜色
    labelColor: {
      type: String,
      default: () => defProps.checkbox.labelColor
    },
    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: () => defProps.checkbox.labelDisabled
    },
    // 是否独立使用
    usedAlone: {
      type: [Boolean],
      default: () => false
    }
  }
};
const uCheckbox_vue_vue_type_style_index_0_scoped_92081527_lang = "";
const _sfc_main$1 = {
  name: "u-checkbox",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      isChecked: false,
      // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
      // 故只能使用如此方法
      parentData: {
        iconSize: 12,
        labelDisabled: null,
        disabled: null,
        shape: "square",
        activeColor: null,
        inactiveColor: null,
        size: 18,
        modelValue: null,
        iconColor: null,
        placement: "row",
        borderBottom: false,
        iconPlacement: "left"
      }
    };
  },
  computed: {
    // 是否禁用，如果父组件u-raios-group禁用的话，将会忽略子组件的配置
    elDisabled() {
      return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
    },
    // 是否禁用label点击
    elLabelDisabled() {
      return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
    },
    // 组件尺寸，对应size的值，默认值为21px
    elSize() {
      return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
    },
    // 组件的勾选图标的尺寸，默认12px
    elIconSize() {
      return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
    },
    // 组件选中激活时的颜色
    elActiveColor() {
      return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
    },
    // 组件选未中激活时的颜色
    elInactiveColor() {
      return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
    },
    // label的颜色
    elLabelColor() {
      return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
    },
    // 组件的形状
    elShape() {
      return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
    },
    // label大小
    elLabelSize() {
      return addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
    },
    elIconColor() {
      const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
      if (this.elDisabled) {
        return this.isChecked ? this.elInactiveColor : "transparent";
      } else {
        return this.isChecked ? iconColor : "transparent";
      }
    },
    iconClasses() {
      let classes = [];
      classes.push("u-checkbox__icon-wrap--" + this.elShape);
      if (this.elDisabled) {
        classes.push("u-checkbox__icon-wrap--disabled");
      }
      if (this.isChecked && this.elDisabled) {
        classes.push("u-checkbox__icon-wrap--disabled--checked");
      }
      return classes;
    },
    iconWrapStyle() {
      const style = {};
      style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
      style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
      style.width = addUnit(this.elSize);
      style.height = addUnit(this.elSize);
      if (!this.usedAlone) {
        if (this.parentData.iconPlacement === "right") {
          style.marginRight = 0;
        }
      }
      return style;
    },
    checkboxStyle() {
      const style = {};
      if (!this.usedAlone) {
        if (this.parentData.borderBottom && this.parentData.placement === "row")
          ;
        if (this.parentData.borderBottom && this.parentData.placement === "column") {
          style.paddingBottom = "8px";
        }
      }
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  emits: ["change"],
  methods: {
    init() {
      if (!this.usedAlone) {
        this.updateParentData();
        if (!this.parent)
          ;
      }
      const value = this.parentData.modelValue;
      if (this.checked) {
        this.isChecked = true;
      } else if (!this.usedAlone && test.array(value)) {
        this.isChecked = value.some((item) => {
          return item === this.name;
        });
      }
    },
    updateParentData() {
      this.getParentData("u-checkbox-group");
    },
    // 横向两端排列时，点击组件即可触发选中事件
    wrapperClickHandler(e) {
      if (!this.usedAlone) {
        this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
      } else {
        this.iconClickHandler(e);
      }
    },
    // 点击图标
    iconClickHandler(e) {
      this.preventEvent(e);
      if (!this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    // 点击label
    labelClickHandler(e) {
      this.preventEvent(e);
      if (!this.elLabelDisabled && !this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    emitEvent() {
      this.$emit("change", this.isChecked);
      this.$nextTick(() => {
        formValidate(this, "change");
      });
    },
    // 改变组件选中状态
    // 这里的改变的依据是，更改本组件的checked值为true，同时通过父组件遍历所有u-checkbox实例
    // 将本组件外的其他u-checkbox的checked都设置为false(都被取消选中状态)，因而只剩下一个为选中状态
    setRadioCheckedStatus() {
      this.isChecked = !this.isChecked;
      this.emitEvent();
      if (!this.usedAlone) {
        typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
      }
    }
  },
  watch: {
    checked() {
      this.isChecked = this.checked;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3$1);
  const _component_v_uni_view = index$g;
  const _component_v_uni_text = index$i;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-checkbox cursor-pointer", [`u-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom"]]),
    style: normalizeStyle([$options.checkboxStyle]),
    onClick: withModifiers($options.wrapperClickHandler, ["stop"])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: normalizeClass(["u-checkbox__icon-wrap cursor-pointer", $options.iconClasses]),
        onClick: withModifiers($options.iconClickHandler, ["stop"]),
        style: normalizeStyle([$options.iconWrapStyle])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(_component_u_icon, {
              class: "u-checkbox__icon-wrap__icon",
              name: "checkbox-mark",
              size: $options.elIconSize,
              color: $options.elIconColor
            }, null, 8, ["size", "color"])
          ], true)
        ]),
        _: 3
      }, 8, ["onClick", "class", "style"]),
      createVNode(_component_v_uni_text, {
        onClick: withModifiers($options.labelClickHandler, ["stop"]),
        style: normalizeStyle({
          color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
          fontSize: $options.elLabelSize,
          lineHeight: $options.elLabelSize
        })
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 8, ["onClick", "style"])
    ]),
    _: 3
  }, 8, ["style", "onClick", "class"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-92081527"]]);
const props = {
  props: {
    // 标识符
    name: {
      type: String,
      default: () => defProps.checkboxGroup.name
    },
    // 绑定的值
    modelValue: {
      type: Array,
      default: () => defProps.checkboxGroup.value
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: () => defProps.checkboxGroup.shape
    },
    // 是否禁用全部checkbox
    disabled: {
      type: Boolean,
      default: () => defProps.checkboxGroup.disabled
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: () => defProps.checkboxGroup.activeColor
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: () => defProps.checkboxGroup.inactiveColor
    },
    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: () => defProps.checkboxGroup.size
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: () => defProps.checkboxGroup.placement
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: () => defProps.checkboxGroup.labelSize
    },
    // label的字体颜色
    labelColor: {
      type: [String],
      default: () => defProps.checkboxGroup.labelColor
    },
    // 是否禁止点击文本操作
    labelDisabled: {
      type: Boolean,
      default: () => defProps.checkboxGroup.labelDisabled
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: () => defProps.checkboxGroup.iconColor
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: () => defProps.checkboxGroup.iconSize
    },
    // 勾选图标的对齐方式，left-左边，right-右边
    iconPlacement: {
      type: String,
      default: () => defProps.checkboxGroup.iconPlacement
    },
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: () => defProps.checkboxGroup.borderBottom
    }
  }
};
const uCheckboxGroup_vue_vue_type_style_index_0_scoped_4665ee80_lang = "";
const _sfc_main = {
  name: "u-checkbox-group",
  mixins: [mpMixin, mixin, props],
  computed: {
    // 这里computed的变量，都是子组件u-checkbox需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(u-checkbox-group)
    // 拉取父组件新的变化后的参数
    parentData() {
      return [
        this.modelValue,
        this.disabled,
        this.inactiveColor,
        this.activeColor,
        this.size,
        this.labelDisabled,
        this.shape,
        this.iconSize,
        this.borderBottom,
        this.placement
      ];
    },
    bemClass() {
      return this.bem("checkbox-group", ["placement"]);
    }
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentData: {
      handler() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.init === "function" && child.init();
          });
        }
      },
      deep: true
    }
  },
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  emits: ["update:modelValue", "change"],
  methods: {
    // 将其他的checkbox设置为未选中的状态
    unCheckedOther(childInstance) {
      const values = [];
      this.children.map((child) => {
        if (child.isChecked) {
          values.push(child.name);
        }
      });
      this.$emit("change", values);
      this.$emit("update:modelValue", values);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-checkbox-group", $options.bemClass])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["class"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4665ee80"]]);
export {
  __easycom_2 as _,
  __easycom_3 as a
};
