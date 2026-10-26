/* __addonChunkCssInjected:af068078 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("af068078",".addon-wrap-af068078 .u-empty,.addon-wrap-af068078 .u-empty__wrap,.addon-wrap-af068078 .u-tabs,.addon-wrap-af068078 .u-tabs__wrapper,.addon-wrap-af068078 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-af068078 .u-tabs__wrapper__scroll-view,.addon-wrap-af068078 .u-tabs__wrapper__nav,.addon-wrap-af068078 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-af068078 .u-modal{width:20.3125rem;border-radius:6px;overflow:hidden}.addon-wrap-af068078 .u-modal__title{display:block;font-size:16px;font-weight:700;color:#606266;text-align:center;padding-top:25px}.addon-wrap-af068078 .u-modal__content{padding:12px 25px 25px;display:flex;flex-direction:row;justify-content:center}.addon-wrap-af068078 .u-modal__content__text{font-size:15px;color:#606266;flex:1}.addon-wrap-af068078 .u-modal__button-group{display:flex;flex-direction:row}.addon-wrap-af068078 .u-modal__button-group--confirm-button{flex-direction:column;padding:0 25px 15px}.addon-wrap-af068078 .u-modal__button-group__wrapper{flex:1;display:flex;flex-direction:row;justify-content:center;align-items:center;height:48px}.addon-wrap-af068078 .u-modal__button-group__wrapper--confirm,.addon-wrap-af068078 .u-modal__button-group__wrapper--only-cancel{border-bottom-right-radius:6px}.addon-wrap-af068078 .u-modal__button-group__wrapper--cancel,.addon-wrap-af068078 .u-modal__button-group__wrapper--only-confirm{border-bottom-left-radius:6px}.addon-wrap-af068078 .u-modal__button-group__wrapper--hover{background-color:#f3f4f6}.addon-wrap-af068078 .u-modal__button-group__wrapper__text{color:#606266;font-size:16px;text-align:center}");
import "./text.99ce2b32.js";
import { a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3 } from "./u-line.46235f11.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode, renderSlot, createElementBlock, Fragment, normalizeClass } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_4$1 } from "./u-loading-icon.8e9029d5.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 是否展示modal
    show: {
      type: Boolean,
      default: () => defProps.modal.show
    },
    // 标题
    title: {
      type: [String],
      default: () => defProps.modal.title
    },
    // 弹窗内容
    content: {
      type: String,
      default: () => defProps.modal.content
    },
    // 确认文案
    confirmText: {
      type: String,
      default: () => defProps.modal.confirmText
    },
    // 取消文案
    cancelText: {
      type: String,
      default: () => defProps.modal.cancelText
    },
    // 是否显示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: () => defProps.modal.showConfirmButton
    },
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: () => defProps.modal.showCancelButton
    },
    // 确认按钮颜色
    confirmColor: {
      type: String,
      default: () => defProps.modal.confirmColor
    },
    // 取消文字颜色
    cancelColor: {
      type: String,
      default: () => defProps.modal.cancelColor
    },
    // 对调确认和取消的位置
    buttonReverse: {
      type: Boolean,
      default: () => defProps.modal.buttonReverse
    },
    // 是否开启缩放效果
    zoom: {
      type: Boolean,
      default: () => defProps.modal.zoom
    },
    // 是否异步关闭，只对确定按钮有效
    asyncClose: {
      type: Boolean,
      default: () => defProps.modal.asyncClose
    },
    // 是否允许点击遮罩关闭modal
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.modal.closeOnClickOverlay
    },
    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
    negativeTop: {
      type: [String, Number],
      default: () => defProps.modal.negativeTop
    },
    // modal宽度，不支持百分比，可以数值，px，rpx单位
    width: {
      type: [String, Number],
      default: () => defProps.modal.width
    },
    // 确认按钮的样式，circle-圆形，square-方形，如设置，将不会显示取消按钮
    confirmButtonShape: {
      type: String,
      default: () => defProps.modal.confirmButtonShape
    }
  }
};
const uModal_vue_vue_type_style_index_0_scoped_af068078_lang = "";
const _sfc_main = {
  name: "u-modal",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      loading: false
    };
  },
  watch: {
    show(n) {
      if (n && this.loading)
        this.loading = false;
    }
  },
  emits: ["confirm", "cancel", "close"],
  methods: {
    addUnit,
    // 点击确定按钮
    confirmHandler() {
      if (this.asyncClose) {
        this.loading = true;
      }
      this.$emit("confirm");
    },
    // 点击取消按钮
    cancelHandler() {
      this.$emit("cancel");
    },
    // 点击遮罩
    // 从原理上来说，modal的遮罩点击，并不是真的点击到了遮罩
    // 因为modal依赖于popup的中部弹窗类型，中部弹窗比较特殊，虽有然遮罩，但是为了让弹窗内容能flex居中
    // 多了一个透明的遮罩，此透明的遮罩会覆盖在灰色的遮罩上，所以实际上是点击不到灰色遮罩的，popup内部在
    // 透明遮罩的子元素做了.stop处理，所以点击内容区，也不会导致误触发
    clickHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  const _component_u_line = resolveEasycom(resolveDynamicComponent("u-line"), __easycom_3);
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4$1);
  const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
  return openBlock(), createBlock(_component_u_popup, {
    mode: "center",
    zoom: _ctx.zoom,
    show: _ctx.show,
    customStyle: {
      borderRadius: "6px",
      overflow: "hidden",
      marginTop: `-${$options.addUnit(_ctx.negativeTop)}`
    },
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    safeAreaInsetBottom: false,
    duration: 400,
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: "u-modal",
        style: normalizeStyle({
          width: $options.addUnit(_ctx.width)
        })
      }, {
        default: withCtx(() => [
          _ctx.title ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 0,
            class: "u-modal__title"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, {
            class: "u-modal__content",
            style: normalizeStyle({
              paddingTop: `${_ctx.title ? 12 : 25}px`
            })
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_v_uni_text, { class: "u-modal__content__text" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.content), 1)
                  ]),
                  _: 1
                })
              ], true)
            ]),
            _: 3
          }, 8, ["style"]),
          _ctx.$slots.confirmButton ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "u-modal__button-group--confirm-button"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "confirmButton", {}, void 0, true)
            ]),
            _: 3
          })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createVNode(_component_u_line),
            createVNode(_component_v_uni_view, {
              class: "u-modal__button-group",
              style: normalizeStyle({
                flexDirection: _ctx.buttonReverse ? "row-reverse" : "row"
              })
            }, {
              default: withCtx(() => [
                _ctx.showCancelButton ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 0,
                  class: normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel", [_ctx.showCancelButton && !_ctx.showConfirmButton && "u-modal__button-group__wrapper--only-cancel"]]),
                  "hover-stay-time": 150,
                  "hover-class": "u-modal__button-group__wrapper--hover",
                  onClick: $options.cancelHandler
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, {
                      class: "u-modal__button-group__wrapper__text",
                      style: normalizeStyle({
                        color: _ctx.cancelColor
                      })
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancelText), 1)
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : createCommentVNode("", true),
                _ctx.showConfirmButton && _ctx.showCancelButton ? (openBlock(), createBlock(_component_u_line, {
                  key: 1,
                  direction: "column"
                })) : createCommentVNode("", true),
                _ctx.showConfirmButton ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 2,
                  class: normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm", [!_ctx.showCancelButton && _ctx.showConfirmButton && "u-modal__button-group__wrapper--only-confirm"]]),
                  "hover-stay-time": 150,
                  "hover-class": "u-modal__button-group__wrapper--hover",
                  onClick: $options.confirmHandler
                }, {
                  default: withCtx(() => [
                    $data.loading ? (openBlock(), createBlock(_component_u_loading_icon, { key: 0 })) : (openBlock(), createBlock(_component_v_uni_text, {
                      key: 1,
                      class: "u-modal__button-group__wrapper__text",
                      style: normalizeStyle({
                        color: _ctx.confirmColor
                      })
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["style"]))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["style"])
          ], 64))
        ]),
        _: 3
      }, 8, ["style"])
    ]),
    _: 3
  }, 8, ["zoom", "show", "customStyle", "closeOnClickOverlay", "onClick"]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-af068078"]]);
export {
  __easycom_4 as _
};
