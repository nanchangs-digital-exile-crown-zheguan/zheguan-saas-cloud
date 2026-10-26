/* __addonChunkCssInjected:71f6d5da */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("71f6d5da",".addon-wrap-71f6d5da .u-empty,.addon-wrap-71f6d5da .u-empty__wrap,.addon-wrap-71f6d5da .u-tabs,.addon-wrap-71f6d5da .u-tabs__wrapper,.addon-wrap-71f6d5da .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-71f6d5da .u-tabs__wrapper__scroll-view,.addon-wrap-71f6d5da .u-tabs__wrapper__nav,.addon-wrap-71f6d5da .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-71f6d5da .u-tabbar{display:flex;flex-direction:column;flex:1;justify-content:center}.addon-wrap-71f6d5da .u-tabbar__content{display:flex;flex-direction:column;background-color:#fff}.addon-wrap-71f6d5da .u-tabbar__content__item-wrapper{height:50px;display:flex;flex-direction:row;justify-content:space-around}.addon-wrap-71f6d5da .u-tabbar--fixed{position:fixed;bottom:0;left:0;right:0}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_1 } from "./u-safe-bottom.32b62caf.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeClass, withModifiers, normalizeStyle, renderSlot, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { e as deepMerge, a as addStyle, s as sleep } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 当前匹配项的name
    value: {
      type: [String, Number, null],
      default: () => defProps.tabbar.value
    },
    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => defProps.tabbar.safeAreaInsetBottom
    },
    // 是否显示上方边框
    border: {
      type: Boolean,
      default: () => defProps.tabbar.border
    },
    // 元素层级z-index
    zIndex: {
      type: [String, Number],
      default: () => defProps.tabbar.zIndex
    },
    // 选中标签的颜色
    activeColor: {
      type: String,
      default: () => defProps.tabbar.activeColor
    },
    // 未选中标签的颜色
    inactiveColor: {
      type: String,
      default: () => defProps.tabbar.inactiveColor
    },
    // 是否固定在底部
    fixed: {
      type: Boolean,
      default: () => defProps.tabbar.fixed
    },
    // fixed定位固定在底部时，是否生成一个等高元素防止塌陷
    placeholder: {
      type: Boolean,
      default: () => defProps.tabbar.placeholder
    }
  }
};
const uTabbar_vue_vue_type_style_index_0_scoped_71f6d5da_lang = "";
const _sfc_main = {
  name: "u-tabbar",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      placeholderHeight: 0
    };
  },
  computed: {
    tabbarStyle() {
      const style = {
        zIndex: this.zIndex
      };
      return deepMerge(style, addStyle(this.customStyle));
    },
    // 监听多个参数的变化，通过在computed执行对应的操作
    updateChild() {
      return [this.value, this.activeColor, this.inactiveColor];
    },
    updatePlaceholder() {
      return [this.fixed, this.placeholder];
    }
  },
  watch: {
    updateChild() {
      this.updateChildren();
    },
    updatePlaceholder() {
      this.setPlaceholderHeight();
    }
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.setPlaceholderHeight();
  },
  methods: {
    updateChildren() {
      this.children.length && this.children.map((child) => child.updateFromParent());
    },
    // 设置用于防止塌陷元素的高度
    async setPlaceholderHeight() {
      if (!this.fixed || !this.placeholder)
        return;
      await sleep(20);
      this.$uGetRect(".u-tabbar__content").then(({ height = 50 }) => {
        this.placeholderHeight = height;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  const _component_u_safe_bottom = resolveEasycom(resolveDynamicComponent("u-safe-bottom"), __easycom_1);
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-tabbar" }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: normalizeClass(["u-tabbar__content", [_ctx.border && "u-border-top", _ctx.fixed && "u-tabbar--fixed"]]),
        ref: "u-tabbar__content",
        onTouchmove: withModifiers(_ctx.noop, ["stop", "prevent"]),
        style: normalizeStyle([$options.tabbarStyle])
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "u-tabbar__content__item-wrapper" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }),
          _ctx.safeAreaInsetBottom ? (openBlock(), createBlock(_component_u_safe_bottom, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onTouchmove", "class", "style"]),
      _ctx.placeholder ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "u-tabbar__placeholder",
        style: normalizeStyle({
          height: $data.placeholderHeight + "px"
        })
      }, null, 8, ["style"])) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-71f6d5da"]]);
export {
  __easycom_8 as _
};
