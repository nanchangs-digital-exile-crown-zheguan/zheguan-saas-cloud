/* __addonChunkCssInjected:b2ae91aa */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("b2ae91aa",".addon-wrap-b2ae91aa }.u-empty,.addon-wrap-b2ae91aa .u-empty__wrap,.addon-wrap-b2ae91aa .u-tabs,.addon-wrap-b2ae91aa .u-tabs__wrapper,.addon-wrap-b2ae91aa .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-b2ae91aa .u-tabs__wrapper__scroll-view,.addon-wrap-b2ae91aa .u-tabs__wrapper__nav,.addon-wrap-b2ae91aa .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-b2ae91aa .u-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7)}");
import { _ as __easycom_3 } from "./u-transition.ff7c65da.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, renderSlot, normalizeStyle, createCommentVNode, createVNode, withModifiers, normalizeClass } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { e as deepMerge, a as addStyle, b as addUnit, h as sys } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3$1 } from "./u-icon.ceb3960f.js";
import { _ as __easycom_1$1 } from "./u-safe-bottom.32b62caf.js";
const props$2 = {
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: () => defProps.overlay.show
    },
    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: () => defProps.overlay.zIndex
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: () => defProps.overlay.duration
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: () => defProps.overlay.opacity
    }
  }
};
const uOverlay_vue_vue_type_style_index_0_scoped_b2ae91aa_lang = "";
const _sfc_main$2 = {
  name: "u-overlay",
  mixins: [mpMixin, mixin, props$2],
  computed: {
    overlayStyle() {
      const style = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: this.zIndex,
        bottom: 0,
        "background-color": `rgba(0, 0, 0, ${this.opacity})`
      };
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  emits: ["click"],
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_transition = resolveEasycom(resolveDynamicComponent("u-transition"), __easycom_3);
  return openBlock(), createBlock(_component_u_transition, {
    show: _ctx.show,
    "custom-class": "u-overlay",
    duration: _ctx.duration,
    "custom-style": $options.overlayStyle,
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["show", "duration", "custom-style", "onClick"]);
}
const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-b2ae91aa"]]);
const props$1 = {
  props: {
    bgColor: {
      type: String,
      default: () => defProps.statusBar.bgColor
    }
  }
};
const uStatusBar_vue_vue_type_style_index_0_scoped_58963a5e_lang = "";
const _sfc_main$1 = {
  name: "u-status-bar",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      style.height = addUnit(sys().statusBarHeight, "px");
      style.backgroundColor = this.bgColor;
      return deepMerge(style, addStyle(this.customStyle));
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    style: normalizeStyle([$options.style]),
    class: "u-status-bar"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["style"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-58963a5e"]]);
const props = {
  props: {
    // 是否展示弹窗
    show: {
      type: Boolean,
      default: () => defProps.popup.show
    },
    // 是否显示遮罩
    overlay: {
      type: Boolean,
      default: () => defProps.popup.overlay
    },
    // 弹出的方向，可选值为 top bottom right left center
    mode: {
      type: String,
      default: () => defProps.popup.mode
    },
    // 动画时长，单位ms
    duration: {
      type: [String, Number],
      default: () => defProps.popup.duration
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: () => defProps.popup.closeable
    },
    // 自定义遮罩的样式
    overlayStyle: {
      type: [Object, String],
      default: () => defProps.popup.overlayStyle
    },
    // 点击遮罩是否关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.popup.closeOnClickOverlay
    },
    // 层级
    zIndex: {
      type: [String, Number],
      default: () => defProps.popup.zIndex
    },
    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => defProps.popup.safeAreaInsetBottom
    },
    // 是否留出顶部安全距离（状态栏高度）
    safeAreaInsetTop: {
      type: Boolean,
      default: () => defProps.popup.safeAreaInsetTop
    },
    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: () => defProps.popup.closeIconPos
    },
    // 是否显示圆角
    round: {
      type: [Boolean, String, Number],
      default: () => defProps.popup.round
    },
    // mode=center，也即中部弹出时，是否使用缩放模式
    zoom: {
      type: Boolean,
      default: () => defProps.popup.zoom
    },
    // 弹窗背景色，设置为transparent可去除白色背景
    bgColor: {
      type: String,
      default: () => defProps.popup.bgColor
    },
    // 遮罩的透明度，0-1之间
    overlayOpacity: {
      type: [Number, String],
      default: () => defProps.popup.overlayOpacity
    }
  }
};
const uPopup_vue_vue_type_style_index_0_scoped_934b81cb_lang = "";
const _sfc_main = {
  name: "u-popup",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      overlayDuration: this.duration + 50
    };
  },
  watch: {
    show(newValue, oldValue) {
    }
  },
  computed: {
    transitionStyle() {
      const style = {
        zIndex: this.zIndex,
        position: "fixed",
        display: "flex"
      };
      style[this.mode] = 0;
      if (this.mode === "left") {
        return deepMerge(style, {
          bottom: 0,
          top: 0
        });
      } else if (this.mode === "right") {
        return deepMerge(style, {
          bottom: 0,
          top: 0
        });
      } else if (this.mode === "top") {
        return deepMerge(style, {
          left: 0,
          right: 0
        });
      } else if (this.mode === "bottom") {
        return deepMerge(style, {
          left: 0,
          right: 0
        });
      } else if (this.mode === "center") {
        return deepMerge(style, {
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        });
      }
    },
    contentStyle() {
      const style = {};
      sys();
      if (this.mode !== "center") {
        style.flex = 1;
      }
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }
      if (this.round) {
        const value = addUnit(this.round);
        if (this.mode === "top") {
          style.borderBottomLeftRadius = value;
          style.borderBottomRightRadius = value;
        } else if (this.mode === "bottom") {
          style.borderTopLeftRadius = value;
          style.borderTopRightRadius = value;
        } else if (this.mode === "center") {
          style.borderRadius = value;
        }
      }
      return deepMerge(style, addStyle(this.customStyle));
    },
    position() {
      if (this.mode === "center") {
        return this.zoom ? "fade-zoom" : "fade";
      }
      if (this.mode === "left") {
        return "slide-left";
      }
      if (this.mode === "right") {
        return "slide-right";
      }
      if (this.mode === "bottom") {
        return "slide-up";
      }
      if (this.mode === "top") {
        return "slide-down";
      }
    }
  },
  emits: ["open", "close", "click"],
  methods: {
    // 点击遮罩
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    close(e) {
      this.$emit("close");
    },
    afterEnter() {
      this.$emit("open");
    },
    clickHandler() {
      if (this.mode === "center") {
        this.overlayClick();
      }
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_overlay = resolveEasycom(resolveDynamicComponent("u-overlay"), __easycom_9);
  const _component_u_status_bar = resolveEasycom(resolveDynamicComponent("u-status-bar"), __easycom_1);
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3$1);
  const _component_v_uni_view = index$g;
  const _component_u_safe_bottom = resolveEasycom(resolveDynamicComponent("u-safe-bottom"), __easycom_1$1);
  const _component_u_transition = resolveEasycom(resolveDynamicComponent("u-transition"), __easycom_3);
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-popup" }, {
    default: withCtx(() => [
      _ctx.overlay ? (openBlock(), createBlock(_component_u_overlay, {
        key: 0,
        show: _ctx.show,
        onClick: $options.overlayClick,
        zIndex: _ctx.zIndex,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])) : createCommentVNode("", true),
      createVNode(_component_u_transition, {
        show: _ctx.show,
        customStyle: $options.transitionStyle,
        mode: $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "u-popup__content",
            style: normalizeStyle([$options.contentStyle]),
            onClick: withModifiers(_ctx.noop, ["stop"])
          }, {
            default: withCtx(() => [
              _ctx.safeAreaInsetTop ? (openBlock(), createBlock(_component_u_status_bar, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              _ctx.closeable ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                onClick: withModifiers($options.close, ["stop"]),
                class: normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
                "hover-class": "u-popup__content__close--hover",
                "hover-stay-time": "150"
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_icon, {
                    name: "close",
                    color: "#909399",
                    size: "18",
                    bold: ""
                  })
                ]),
                _: 1
              }, 8, ["onClick", "class"])) : createCommentVNode("", true),
              _ctx.safeAreaInsetBottom ? (openBlock(), createBlock(_component_u_safe_bottom, { key: 2 })) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["style", "onClick"])
        ]),
        _: 3
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ]),
    _: 3
  });
}
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-934b81cb"]]);
export {
  __easycom_7 as _,
  __easycom_9 as a
};
