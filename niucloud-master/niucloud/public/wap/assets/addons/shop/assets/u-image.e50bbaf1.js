/* __addonChunkCssInjected:febc2405 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("febc2405",".addon-wrap-febc2405 .u-empty,.addon-wrap-febc2405 .u-empty__wrap,.addon-wrap-febc2405 .u-tabs,.addon-wrap-febc2405 .u-tabs__wrapper,.addon-wrap-febc2405 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-febc2405 .u-tabs__wrapper__scroll-view,.addon-wrap-febc2405 .u-tabs__wrapper__nav,.addon-wrap-febc2405 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-febc2405 .u-image{position:relative;transition:opacity .5s ease-in-out}.addon-wrap-febc2405 .u-image__image{width:100%;height:100%}.addon-wrap-febc2405 .u-image__loading,.addon-wrap-febc2405 .u-image__error{position:absolute;top:0px;left:0px;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909193;font-size:1.4375rem}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeStyle, createCommentVNode, renderSlot } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3$1 } from "./u-transition.ff7c65da.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, e as deepMerge, a as addStyle } from "./route.c60967f7.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 图片地址
    src: {
      type: String,
      default: () => defProps.image.src
    },
    // 裁剪模式
    mode: {
      type: String,
      default: () => defProps.image.mode
    },
    // 宽度，单位任意
    width: {
      type: [String, Number],
      default: () => defProps.image.width
    },
    // 高度，单位任意
    height: {
      type: [String, Number],
      default: () => defProps.image.height
    },
    // 图片形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: () => defProps.image.shape
    },
    // 圆角，单位任意
    radius: {
      type: [String, Number],
      default: () => defProps.image.radius
    },
    // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
    lazyLoad: {
      type: Boolean,
      default: () => defProps.image.lazyLoad
    },
    // 开启长按图片显示识别微信小程序码菜单
    showMenuByLongpress: {
      type: Boolean,
      default: () => defProps.image.showMenuByLongpress
    },
    // 加载中的图标，或者小图片
    loadingIcon: {
      type: String,
      default: () => defProps.image.loadingIcon
    },
    // 加载失败的图标，或者小图片
    errorIcon: {
      type: String,
      default: () => defProps.image.errorIcon
    },
    // 是否显示加载中的图标或者自定义的slot
    showLoading: {
      type: Boolean,
      default: () => defProps.image.showLoading
    },
    // 是否显示加载错误的图标或者自定义的slot
    showError: {
      type: Boolean,
      default: () => defProps.image.showError
    },
    // 是否需要淡入效果
    fade: {
      type: Boolean,
      default: () => defProps.image.fade
    },
    // 只支持网络资源，只对微信小程序有效
    webp: {
      type: Boolean,
      default: () => defProps.image.webp
    },
    // 过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: () => defProps.image.duration
    },
    // 背景颜色，用于深色页面加载图片时，为了和背景色融合
    bgColor: {
      type: String,
      default: () => defProps.image.bgColor
    }
  }
};
const _sfc_main = {
  name: "u-image",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 图片是否加载错误，如果是，则显示错误占位图
      isError: false,
      // 初始化组件时，默认为加载中状态
      loading: true,
      // 不透明度，为了实现淡入淡出的效果
      opacity: 1,
      // 过渡时间，因为props的值无法修改，故需要一个中间值
      durationTime: this.duration,
      // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
      backgroundStyle: {},
      // 用于fade模式的控制组件显示与否
      show: false
    };
  },
  watch: {
    src: {
      immediate: true,
      handler(n) {
        if (!n) {
          this.isError = true;
        } else {
          this.isError = false;
          this.loading = true;
        }
      }
    }
  },
  computed: {
    wrapStyle() {
      let style = {};
      style.width = addUnit(this.width);
      style.height = addUnit(this.height);
      style.borderRadius = this.shape == "circle" ? "10000px" : addUnit(this.radius);
      style.overflow = this.radius > 0 ? "hidden" : "visible";
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  mounted() {
    this.show = true;
  },
  emits: ["click", "error", "load"],
  methods: {
    addUnit,
    // 点击图片
    onClick() {
      this.$emit("click");
    },
    // 图片加载失败
    onErrorHandler(err) {
      this.loading = false;
      this.isError = true;
      this.$emit("error", err);
    },
    // 图片加载完成，标记loading结束
    onLoadHandler(event) {
      this.loading = false;
      this.isError = false;
      this.$emit("load", event);
      this.removeBgColor();
    },
    // 移除图片的背景色
    removeBgColor() {
      this.backgroundStyle = {
        backgroundColor: "transparent"
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_view = index$g;
  const _component_u_transition = resolveEasycom(resolveDynamicComponent("u-transition"), __easycom_3$1);
  return openBlock(), createBlock(_component_u_transition, {
    mode: "fade",
    show: $data.show,
    duration: _ctx.fade ? 1e3 : 0
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: "u-image",
        onClick: $options.onClick,
        style: normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
      }, {
        default: withCtx(() => [
          !$data.isError ? (openBlock(), createBlock(_component_v_uni_image, {
            key: 0,
            src: _ctx.src,
            mode: _ctx.mode,
            onError: $options.onErrorHandler,
            onLoad: $options.onLoadHandler,
            "show-menu-by-longpress": _ctx.showMenuByLongpress,
            "lazy-load": _ctx.lazyLoad,
            class: "u-image__image",
            style: normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "10000px" : $options.addUnit(_ctx.radius),
              width: $options.addUnit(_ctx.width),
              height: $options.addUnit(_ctx.height)
            })
          }, null, 8, ["src", "mode", "onError", "onLoad", "show-menu-by-longpress", "lazy-load", "style"])) : createCommentVNode("", true),
          _ctx.showLoading && $data.loading ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "u-image__loading",
            style: normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
              backgroundColor: this.bgColor,
              width: $options.addUnit(_ctx.width),
              height: $options.addUnit(_ctx.height)
            })
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "loading", {}, () => [
                createVNode(_component_u_icon, {
                  name: _ctx.loadingIcon,
                  width: _ctx.width,
                  height: _ctx.height
                }, null, 8, ["name", "width", "height"])
              ], true)
            ]),
            _: 3
          }, 8, ["style"])) : createCommentVNode("", true),
          _ctx.showError && $data.isError && !$data.loading ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 2,
            class: "u-image__error",
            style: normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
              width: $options.addUnit(_ctx.width),
              height: $options.addUnit(_ctx.height)
            })
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "error", {}, () => [
                createVNode(_component_u_icon, {
                  name: _ctx.errorIcon,
                  width: _ctx.width,
                  height: _ctx.height
                }, null, 8, ["name", "width", "height"])
              ], true)
            ]),
            _: 3
          }, 8, ["style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onClick", "style"])
    ]),
    _: 3
  }, 8, ["show", "duration"]);
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-febc2405"]]);
export {
  __easycom_5 as _
};
