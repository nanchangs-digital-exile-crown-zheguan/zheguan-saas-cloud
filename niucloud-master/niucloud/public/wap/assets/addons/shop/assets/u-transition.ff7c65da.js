/* __addonChunkCssInjected:6a21edd6 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("6a21edd6",".addon-wrap-6a21edd6 }.u-empty,.addon-wrap-6a21edd6 .u-empty__wrap,.addon-wrap-6a21edd6 .u-tabs,.addon-wrap-6a21edd6 .u-tabs__wrapper,.addon-wrap-6a21edd6 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-6a21edd6 .u-tabs__wrapper__scroll-view,.addon-wrap-6a21edd6 .u-tabs__wrapper__nav,.addon-wrap-6a21edd6 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-6a21edd6 .u-fade-enter-active,.addon-wrap-6a21edd6 .u-fade-leave-active{transition-property:opacity}.addon-wrap-6a21edd6 .u-fade-enter,.addon-wrap-6a21edd6 .u-fade-leave-to{opacity:0}.addon-wrap-6a21edd6 .u-fade-zoom-enter,.addon-wrap-6a21edd6 .u-fade-zoom-leave-to{transform:scale(.95);opacity:0}.addon-wrap-6a21edd6 .u-fade-zoom-enter-active,.addon-wrap-6a21edd6 .u-fade-zoom-leave-active{transition-property:transform,opacity}.addon-wrap-6a21edd6 .u-fade-down-enter-active,.addon-wrap-6a21edd6 .u-fade-down-leave-active,.addon-wrap-6a21edd6 .u-fade-left-enter-active,.addon-wrap-6a21edd6 .u-fade-left-leave-active,.addon-wrap-6a21edd6 .u-fade-right-enter-active,.addon-wrap-6a21edd6 .u-fade-right-leave-active,.addon-wrap-6a21edd6 .u-fade-up-enter-active,.addon-wrap-6a21edd6 .u-fade-up-leave-active{transition-property:opacity,transform}.addon-wrap-6a21edd6 .u-fade-up-enter,.addon-wrap-6a21edd6 .u-fade-up-leave-to{transform:translate3d(0,100%,0);opacity:0}.addon-wrap-6a21edd6 .u-fade-down-enter,.addon-wrap-6a21edd6 .u-fade-down-leave-to{transform:translate3d(0,-100%,0);opacity:0}.addon-wrap-6a21edd6 .u-fade-left-enter,.addon-wrap-6a21edd6 .u-fade-left-leave-to{transform:translate3d(-100%,0,0);opacity:0}.addon-wrap-6a21edd6 .u-fade-right-enter,.addon-wrap-6a21edd6 .u-fade-right-leave-to{transform:translate3d(100%,0,0);opacity:0}.addon-wrap-6a21edd6 .u-slide-down-enter-active,.addon-wrap-6a21edd6 .u-slide-down-leave-active,.addon-wrap-6a21edd6 .u-slide-left-enter-active,.addon-wrap-6a21edd6 .u-slide-left-leave-active,.addon-wrap-6a21edd6 .u-slide-right-enter-active,.addon-wrap-6a21edd6 .u-slide-right-leave-active,.addon-wrap-6a21edd6 .u-slide-up-enter-active,.addon-wrap-6a21edd6 .u-slide-up-leave-active{transition-property:transform}.addon-wrap-6a21edd6 .u-slide-up-enter,.addon-wrap-6a21edd6 .u-slide-up-leave-to{transform:translate3d(0,100%,0)}.addon-wrap-6a21edd6 .u-slide-down-enter,.addon-wrap-6a21edd6 .u-slide-down-leave-to{transform:translate3d(0,-100%,0)}.addon-wrap-6a21edd6 .u-slide-left-enter,.addon-wrap-6a21edd6 .u-slide-left-leave-to{transform:translate3d(-100%,0,0)}.addon-wrap-6a21edd6 .u-slide-right-enter,.addon-wrap-6a21edd6 .u-slide-right-leave-to{transform:translate3d(100%,0,0)}.addon-wrap-6a21edd6 .u-zoom-enter-active,.addon-wrap-6a21edd6 .u-zoom-leave-active{transition-property:transform}.addon-wrap-6a21edd6 .u-zoom-enter,.addon-wrap-6a21edd6 .u-zoom-leave-to{transform:scale(.95)}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { s as sleep, a as addStyle } from "./route.c60967f7.js";
import { nextTick, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, renderSlot, createCommentVNode } from "/wap/assets/shared/vue.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: () => defProps.transition.show
    },
    // 使用的动画模式
    mode: {
      type: String,
      default: () => defProps.transition.mode
    },
    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: () => defProps.transition.duration
    },
    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: () => defProps.transition.timingFunction
    }
  }
};
const getClassNames = (name) => ({
  enter: `u-${name}-enter u-${name}-enter-active`,
  "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
  leave: `u-${name}-leave u-${name}-leave-active`,
  "leave-to": `u-${name}-leave-to u-${name}-leave-active`
});
const transition = {
  methods: {
    // 组件被点击发出事件
    clickHandler() {
      this.$emit("click");
    },
    // vue版本的组件进场处理
    async vueEnter() {
      const classNames = getClassNames(this.mode);
      this.status = "enter";
      this.$emit("beforeEnter");
      this.inited = true;
      this.display = true;
      this.classes = classNames.enter;
      await nextTick();
      {
        await sleep(20);
        this.$emit("enter");
        this.transitionEnded = false;
        this.$emit("afterEnter");
        this.classes = classNames["enter-to"];
      }
    },
    // 动画离场处理
    async vueLeave() {
      if (!this.display)
        return;
      const classNames = getClassNames(this.mode);
      this.status = "leave";
      this.$emit("beforeLeave");
      this.classes = classNames.leave;
      await nextTick();
      {
        this.transitionEnded = false;
        this.$emit("leave");
        setTimeout(this.onTransitionEnd, this.duration);
        this.classes = classNames["leave-to"];
      }
    },
    // 完成过渡后触发
    onTransitionEnd() {
      if (this.transitionEnded)
        return;
      this.transitionEnded = true;
      this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    }
  }
};
const _sfc_main = {
  name: "u-transition",
  data() {
    return {
      inited: false,
      // 是否显示/隐藏组件
      viewStyle: {},
      // 组件内部的样式
      status: "",
      // 记录组件动画的状态
      transitionEnded: false,
      // 组件是否结束的标记
      display: false,
      // 组件是否展示
      classes: ""
      // 应用的类名
    };
  },
  emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
  computed: {
    mergeStyle() {
      const { viewStyle, customStyle } = this;
      return {
        transitionDuration: `${this.duration}ms`,
        // display: `${this.display ? '' : 'none'}`,
        transitionTimingFunction: this.timingFunction,
        // 避免自定义样式影响到动画属性，所以写在viewStyle前面
        ...addStyle(customStyle),
        ...viewStyle
      };
    }
  },
  // 将mixin挂在到组件中，实际上为一个vue格式对象。
  mixins: [mpMixin, mixin, transition, props],
  watch: {
    show: {
      handler(newVal) {
        newVal ? this.vueEnter() : this.vueLeave();
      },
      // 表示同时监听初始化时的props的show的意思
      immediate: true
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return $data.inited ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: normalizeClass(["u-transition", $data.classes]),
    ref: "u-transition",
    onClick: _ctx.clickHandler,
    style: normalizeStyle([$options.mergeStyle]),
    onTouchmove: _ctx.noop
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["onClick", "class", "style", "onTouchmove"])) : createCommentVNode("", true);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a21edd6"]]);
export {
  __easycom_3 as _
};
