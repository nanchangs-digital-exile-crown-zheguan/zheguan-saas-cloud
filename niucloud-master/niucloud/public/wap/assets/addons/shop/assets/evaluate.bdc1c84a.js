/* __addonChunkCssInjected:2d03dda9 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("2d03dda9",".addon-wrap-2d03dda9 .u-empty,.addon-wrap-2d03dda9 .u-empty__wrap,.addon-wrap-2d03dda9 .u-tabs,.addon-wrap-2d03dda9 .u-tabs__wrapper,.addon-wrap-2d03dda9 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-2d03dda9 .u-tabs__wrapper__scroll-view,.addon-wrap-2d03dda9 .u-tabs__wrapper__nav,.addon-wrap-2d03dda9 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-2d03dda9 .u-rate{display:flex;flex-direction:row;align-items:center;margin:0;padding:0;touch-action:none}.addon-wrap-2d03dda9 .u-rate__content{display:flex;flex-direction:row}.addon-wrap-2d03dda9 .u-rate__content__item{position:relative}.addon-wrap-2d03dda9 .u-rate__content__item__icon-wrap--half{position:absolute;overflow:hidden;top:0;left:0}.addon-wrap-2d03dda9 .u-icon{box-sizing:border-box}");
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, withModifiers, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { g as guid, a as addStyle, b as addUnit, s as sleep, o as os, r as range } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { d as request } from "./common.f536f441.js";
const props = {
  props: {
    // 用于v-model双向绑定选中的星星数量
    modelValue: {
      type: [String, Number],
      default: () => defProps.rate.value
    },
    // 要显示的星星数量
    count: {
      type: [String, Number],
      default: () => defProps.rate.count
    },
    // 是否不可选中
    disabled: {
      type: Boolean,
      default: () => defProps.rate.disabled
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: () => defProps.rate.readonly
    },
    // 星星的大小，单位px
    size: {
      type: [String, Number],
      default: () => defProps.rate.size
    },
    // 未选中时的颜色
    inactiveColor: {
      type: String,
      default: () => defProps.rate.inactiveColor
    },
    // 选中的颜色
    activeColor: {
      type: String,
      default: () => defProps.rate.activeColor
    },
    // 星星之间的间距，单位px
    gutter: {
      type: [String, Number],
      default: () => defProps.rate.gutter
    },
    // 最少能选择的星星个数
    minCount: {
      type: [String, Number],
      default: () => defProps.rate.minCount
    },
    // 是否允许半星
    allowHalf: {
      type: Boolean,
      default: () => defProps.rate.allowHalf
    },
    // 选中时的图标(星星)
    activeIcon: {
      type: String,
      default: () => defProps.rate.activeIcon
    },
    // 未选中时的图标(星星)
    inactiveIcon: {
      type: String,
      default: () => defProps.rate.inactiveIcon
    },
    // 是否可以通过滑动手势选择评分
    touchable: {
      type: Boolean,
      default: () => defProps.rate.touchable
    }
  }
};
const uRate_vue_vue_type_style_index_0_scoped_2d03dda9_lang = "";
const _sfc_main = {
  name: "u-rate",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 生成一个唯一id，否则一个页面多个评分组件，会造成冲突
      elId: guid(),
      elClass: guid(),
      rateBoxLeft: 0,
      // 评分盒子左边到屏幕左边的距离，用于滑动选择时计算距离
      activeIndex: this.modelValue,
      rateWidth: 0,
      // 每个星星的宽度
      // 标识是否正在滑动，由于iOS事件上touch比click先触发，导致快速滑动结束后，接着触发click，导致事件混乱而出错
      moving: false
    };
  },
  watch: {
    modelValue(val) {
      this.activeIndex = val;
    },
    activeIndex: "emitEvent"
  },
  emits: ["update:modelValue", "change"],
  methods: {
    addStyle,
    addUnit,
    init() {
      sleep().then(() => {
        this.getRateItemRect();
        this.getRateIconWrapRect();
      });
    },
    // 获取评分组件盒子的布局信息
    async getRateItemRect() {
      await sleep();
      this.$uGetRect("#" + this.elId).then((res) => {
        this.rateBoxLeft = res.left;
      });
    },
    // 获取单个星星的尺寸
    getRateIconWrapRect() {
      this.$uGetRect("." + this.elClass).then((res) => {
        this.rateWidth = res.width;
      });
    },
    // 手指滑动
    touchMove(e) {
      if (!this.touchable) {
        return;
      }
      this.preventEvent(e);
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 停止滑动
    touchEnd(e) {
      if (!this.touchable) {
        return;
      }
      this.preventEvent(e);
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 通过点击，直接选中
    clickHandler(e, index) {
      if (os() === "ios" && this.moving) {
        return;
      }
      this.preventEvent(e);
      let x = 0;
      x = e.changedTouches[0].pageX;
      this.getActiveIndex(x, true);
    },
    // 发出事件
    emitEvent() {
      this.$emit("change", this.activeIndex);
      this.$emit("update:modelValue", this.activeIndex);
    },
    // 获取当前激活的评分图标
    getActiveIndex(x, isClick = false) {
      if (this.disabled || this.readonly) {
        return;
      }
      const allRateWidth = this.rateWidth * this.count + this.rateBoxLeft;
      x = range(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft;
      const distance = x;
      let index;
      if (this.allowHalf) {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (decimal <= this.rateWidth / 2 && decimal > 0) {
          index += 0.5;
        } else if (decimal > this.rateWidth / 2) {
          index++;
        }
      } else {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (isClick) {
          if (decimal > 0)
            index++;
        } else {
          if (decimal > this.rateWidth / 2)
            index++;
        }
      }
      this.activeIndex = Math.min(index, this.count);
      if (this.activeIndex < this.minCount) {
        this.activeIndex = this.minCount;
      }
      setTimeout(() => {
        this.moving = true;
      }, 10);
      setTimeout(() => {
        this.moving = false;
      }, 10);
    }
  },
  mounted() {
    this.init();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-rate",
    id: $data.elId,
    ref: "u-rate",
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: "u-rate__content",
        onTouchmove: withModifiers($options.touchMove, ["stop"]),
        onTouchend: withModifiers($options.touchEnd, ["stop"])
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.count), (item, index) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              class: normalizeClass(["u-rate__content__item cursor-pointer", [$data.elClass]]),
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, {
                  class: "u-rate__content__item__icon-wrap",
                  ref_for: true,
                  ref: "u-rate__content__item__icon-wrap",
                  onClick: withModifiers(($event) => $options.clickHandler($event, index + 1), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_u_icon, {
                      name: Math.floor($data.activeIndex) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
                      color: _ctx.disabled ? "#c8c9cc" : Math.floor($data.activeIndex) > index ? _ctx.activeColor : _ctx.inactiveColor,
                      "custom-style": {
                        padding: `0 ${$options.addUnit(_ctx.gutter / 2)}`
                      },
                      size: _ctx.size
                    }, null, 8, ["name", "color", "custom-style", "size"])
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                _ctx.allowHalf ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 0,
                  onClick: withModifiers(($event) => $options.clickHandler($event, index + 1), ["stop"]),
                  class: "u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",
                  style: normalizeStyle([{
                    width: $options.addUnit($data.rateWidth / 2)
                  }]),
                  ref_for: true,
                  ref: "u-rate__content__item__icon-wrap"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_u_icon, {
                      name: Math.ceil($data.activeIndex) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
                      color: _ctx.disabled ? "#c8c9cc" : Math.ceil($data.activeIndex) > index ? _ctx.activeColor : _ctx.inactiveColor,
                      "custom-style": {
                        padding: `0 ${$options.addUnit(_ctx.gutter / 2)}`
                      },
                      size: _ctx.size
                    }, null, 8, ["name", "color", "custom-style", "size"])
                  ]),
                  _: 2
                }, 1032, ["onClick", "style"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["onTouchmove", "onTouchend"])
    ]),
    _: 1
  }, 8, ["id", "style"]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d03dda9"]]);
function getEvaluateList(params) {
  return request.get(`shop/goods/evaluate`, params);
}
function setOrderEvaluate(params) {
  return request.post("shop/goods/evaluate", params, { showSuccessMessage: true });
}
function getOrderEvaluate(id) {
  return request.get(`shop/order/evaluate/${id}`);
}
export {
  __easycom_4 as _,
  getOrderEvaluate as a,
  getEvaluateList as g,
  setOrderEvaluate as s
};
