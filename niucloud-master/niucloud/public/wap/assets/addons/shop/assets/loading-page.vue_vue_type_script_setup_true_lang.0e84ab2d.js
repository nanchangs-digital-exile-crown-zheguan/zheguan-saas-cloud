/* __addonChunkCssInjected:306503b4 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("306503b4",".addon-wrap-306503b4 .u-empty,.addon-wrap-306503b4 .u-empty__wrap,.addon-wrap-306503b4 .u-tabs,.addon-wrap-306503b4 .u-tabs__wrapper,.addon-wrap-306503b4 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-306503b4 .u-tabs__wrapper__scroll-view,.addon-wrap-306503b4 .u-tabs__wrapper__nav,.addon-wrap-306503b4 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-306503b4 .u-loading-page{display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center}.addon-wrap-306503b4 .u-loading-page__warpper{margin-top:-150px;justify-content:center;align-items:center;color:#c8c8c8;font-size:19px;display:flex;flex-direction:column}.addon-wrap-306503b4 .u-loading-page__warpper__loading-icon{margin-bottom:10px}.addon-wrap-306503b4 .u-loading-page__warpper__loading-icon__img{width:40px;height:40px}.addon-wrap-306503b4 .u-loading-page__warpper__text{font-size:19px;color:#c8c8c8}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeStyle, renderSlot, createTextVNode, toDisplayString, defineComponent } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3 } from "./u-transition.ff7c65da.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 提示内容
    loadingText: {
      type: [String, Number],
      default: () => defProps.loadingPage.loadingText
    },
    // 文字上方用于替换loading动画的图片
    image: {
      type: String,
      default: () => defProps.loadingPage.image
    },
    // 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形
    loadingMode: {
      type: String,
      default: () => defProps.loadingPage.loadingMode
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: () => defProps.loadingPage.loading
    },
    // 背景色
    bgColor: {
      type: String,
      default: () => defProps.loadingPage.bgColor
    },
    // 文字颜色
    color: {
      type: String,
      default: () => defProps.loadingPage.color
    },
    // 文字大小
    fontSize: {
      type: [String, Number],
      default: () => defProps.loadingPage.fontSize
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: () => defProps.loadingPage.fontSize
    },
    // 加载中图标的颜色，只能rgb或者十六进制颜色值
    loadingColor: {
      type: String,
      default: () => defProps.loadingPage.loadingColor
    }
  }
};
const uLoadingPage_vue_vue_type_style_index_0_scoped_306503b4_lang = "";
const _sfc_main$1 = {
  name: "u-loading-page",
  mixins: [mpMixin, mixin, props],
  data() {
    return {};
  },
  methods: {
    addUnit
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  const _component_v_uni_view = index$g;
  const _component_v_uni_text = index$i;
  const _component_u_transition = resolveEasycom(resolveDynamicComponent("u-transition"), __easycom_3);
  return openBlock(), createBlock(_component_u_transition, {
    show: _ctx.loading,
    "custom-style": {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: _ctx.bgColor,
      display: "flex"
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-loading-page" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "u-loading-page__warpper" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "u-loading-page__warpper__loading-icon" }, {
                default: withCtx(() => [
                  _ctx.image ? (openBlock(), createBlock(_component_v_uni_image, {
                    key: 0,
                    src: _ctx.image,
                    class: "u-loading-page__warpper__loading-icon__img",
                    mode: "widthFit",
                    style: normalizeStyle({
                      width: $options.addUnit(_ctx.iconSize),
                      height: $options.addUnit(_ctx.iconSize)
                    })
                  }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_u_loading_icon, {
                    key: 1,
                    mode: _ctx.loadingMode,
                    size: $options.addUnit(_ctx.iconSize),
                    color: _ctx.loadingColor
                  }, null, 8, ["mode", "size", "color"]))
                ]),
                _: 1
              }),
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_v_uni_text, {
                  class: "u-loading-page__warpper__text",
                  style: normalizeStyle({
                    fontSize: $options.addUnit(_ctx.fontSize),
                    color: _ctx.color
                  })
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.loadingText), 1)
                  ]),
                  _: 1
                }, 8, ["style"])
              ], true)
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["show", "custom-style"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-306503b4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "loading-page",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String || Number,
      default: 30
    },
    bgColor: {
      type: String,
      default: "rgb(248,248,248)"
    }
  },
  setup(__props) {
    const props2 = __props;
    return (_ctx, _cache) => {
      const _component_u_loading_page = resolveEasycom(resolveDynamicComponent("u-loading-page"), __easycom_0);
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, null, {
        default: withCtx(() => [
          createVNode(_component_u_loading_page, {
            "bg-color": "props.bgColor",
            "icon-size": "props.iconSize",
            loading: props2.loading,
            loadingText: ""
          }, null, 8, ["loading"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _
};
