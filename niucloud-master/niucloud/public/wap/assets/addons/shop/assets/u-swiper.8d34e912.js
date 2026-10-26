/* __addonChunkCssInjected:939cf1e0 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("939cf1e0",".addon-wrap-939cf1e0 .u-empty,.addon-wrap-939cf1e0 .u-empty__wrap,.addon-wrap-939cf1e0 .u-tabs,.addon-wrap-939cf1e0 .u-tabs__wrapper,.addon-wrap-939cf1e0 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-939cf1e0 .u-tabs__wrapper__scroll-view,.addon-wrap-939cf1e0 .u-tabs__wrapper__nav,.addon-wrap-939cf1e0 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-939cf1e0 .u-swiper-indicator__wrapper{display:flex;flex-direction:row}.addon-wrap-939cf1e0 .u-swiper-indicator__wrapper--line{border-radius:100px;height:4px}.addon-wrap-939cf1e0 .u-swiper-indicator__wrapper--line__bar{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:transform .3s}.addon-wrap-939cf1e0 .u-swiper-indicator__wrapper__dot{width:5px;height:5px;border-radius:100px;margin:0 4px}.addon-wrap-939cf1e0 .u-swiper-indicator__wrapper__dot--active{width:12px}");
import { i as index$g, V as createVideoContext, b as index$q, W as index$d, a as index$i, X as SwiperItem, Y as Swiper } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { openBlock, createBlock, withCtx, normalizeClass, normalizeStyle, createVNode, createCommentVNode, createElementBlock, Fragment, renderList, resolveDynamicComponent, createTextVNode, toDisplayString, renderSlot } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./resize-sensor.8ba09891.js";
import "./video.aeba19b1.js";
import "./text.99ce2b32.js";
import "./swiper.dd9c8dc2.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, a as addStyle, t as test } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props$1 = {
  props: {
    // 轮播的长度
    length: {
      type: [String, Number],
      default: () => defProps.swiperIndicator.length
    },
    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: () => defProps.swiperIndicator.current
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: () => defProps.swiperIndicator.indicatorActiveColor
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: () => defProps.swiperIndicator.indicatorInactiveColor
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: () => defProps.swiperIndicator.indicatorMode
    }
  }
};
const uSwiperIndicator_vue_vue_type_style_index_0_scoped_939cf1e0_lang = "";
const _sfc_main$1 = {
  name: "u-swiper-indicator",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      lineWidth: 22
    };
  },
  computed: {
    // 指示器为线型的样式
    lineStyle() {
      let style = {};
      style.width = addUnit(this.lineWidth);
      style.transform = `translateX(${addUnit(this.current * this.lineWidth)})`;
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    // 指示器为点型的样式
    dotStyle() {
      return (index) => {
        let style = {};
        style.backgroundColor = index === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
        return style;
      };
    }
  },
  methods: {
    addUnit
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-swiper-indicator" }, {
    default: withCtx(() => [
      _ctx.indicatorMode === "line" ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
        style: normalizeStyle({
          width: $options.addUnit($data.lineWidth * _ctx.length),
          backgroundColor: _ctx.indicatorInactiveColor
        })
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "u-swiper-indicator__wrapper--line__bar",
            style: normalizeStyle([$options.lineStyle])
          }, null, 8, ["style"])
        ]),
        _: 1
      }, 8, ["class", "style"])) : createCommentVNode("", true),
      _ctx.indicatorMode === "dot" ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.length, (item, index) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              class: normalizeClass(["u-swiper-indicator__wrapper__dot", [index === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
              key: index,
              style: normalizeStyle([$options.dotStyle(index)])
            }, null, 8, ["class", "style"]);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-939cf1e0"]]);
const props = {
  props: {
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: () => defProps.swiper.list
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: () => defProps.swiper.indicator
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: () => defProps.swiper.indicatorActiveColor
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: () => defProps.swiper.indicatorInactiveColor
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: () => defProps.swiper.indicatorStyle
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: () => defProps.swiper.indicatorMode
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: () => defProps.swiper.autoplay
    },
    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: () => defProps.swiper.current
    },
    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: () => defProps.swiper.currentItemId
    },
    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: () => defProps.swiper.interval
    },
    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: () => defProps.swiper.duration
    },
    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: () => defProps.swiper.circular
    },
    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: () => defProps.swiper.previousMargin
    },
    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: () => defProps.swiper.nextMargin
    },
    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: () => defProps.swiper.acceleration
    },
    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: () => defProps.swiper.displayMultipleItems
    },
    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: () => defProps.swiper.easingFunction
    },
    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: () => defProps.swiper.keyName
    },
    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: () => defProps.swiper.imgMode
    },
    // 组件高度
    height: {
      type: [String, Number],
      default: () => defProps.swiper.height
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: () => defProps.swiper.bgColor
    },
    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: () => defProps.swiper.radius
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: () => defProps.swiper.loading
    },
    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: () => defProps.swiper.showTitle
    }
  }
};
const uSwiper_vue_vue_type_style_index_0_scoped_2457dd58_lang = "";
const _sfc_main = {
  name: "u-swiper",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val, preVal) {
      if (val === preVal)
        return;
      this.currentIndex = val;
    }
  },
  emits: ["click", "change"],
  computed: {
    itemStyle() {
      return (index) => {
        const style = {};
        if (this.nextMargin && this.previousMargin) {
          style.borderRadius = addUnit(this.radius);
          if (index !== this.currentIndex)
            style.transform = "scale(0.92)";
        }
        return style;
      };
    }
  },
  methods: {
    addStyle,
    addUnit,
    testObject: test.object,
    testImage: test.image,
    getItemType(item) {
      if (typeof item === "string")
        return test.video(this.getSource(item)) ? "video" : "image";
      if (typeof item === "object" && this.keyName) {
        if (!item.type)
          return test.video(this.getSource(item)) ? "video" : "image";
        if (item.type === "image")
          return "image";
        if (item.type === "video")
          return "video";
        return "image";
      }
    },
    // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
    getSource(item) {
      if (typeof item === "string")
        return item;
      if (typeof item === "object" && this.keyName)
        return item[this.keyName];
      return "";
    },
    // 轮播切换事件
    change(e) {
      const {
        current
      } = e.detail;
      this.pauseVideo(this.currentIndex);
      this.currentIndex = current;
      this.$emit("change", e.detail);
    },
    // 切换轮播时，暂停视频播放
    pauseVideo(index) {
      const lastItem = this.getSource(this.list[index]);
      if (test.video(lastItem)) {
        const video = createVideoContext(`video-${index}`, this);
        video.pause();
      }
    },
    // 当一个轮播item为视频时，获取它的视频海报
    getPoster(item) {
      return typeof item === "object" && item.poster ? item.poster : "";
    },
    // 点击某个item
    clickHandler(index) {
      this.$emit("click", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  const _component_v_uni_view = index$g;
  const _component_v_uni_image = index$q;
  const _component_v_uni_video = index$d;
  const _component_v_uni_text = index$i;
  const _component_v_uni_swiper_item = SwiperItem;
  const _component_v_uni_swiper = Swiper;
  const _component_u_swiper_indicator = resolveEasycom(resolveDynamicComponent("u-swiper-indicator"), __easycom_7);
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-swiper",
    style: normalizeStyle({
      backgroundColor: _ctx.bgColor,
      height: $options.addUnit(_ctx.height),
      borderRadius: $options.addUnit(_ctx.radius)
    })
  }, {
    default: withCtx(() => [
      _ctx.loading ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "u-swiper__loading"
      }, {
        default: withCtx(() => [
          createVNode(_component_u_loading_icon, { mode: "circle" })
        ]),
        _: 1
      })) : (openBlock(), createBlock(_component_v_uni_swiper, {
        key: 1,
        class: "u-swiper__wrapper",
        style: normalizeStyle({
          flex: "1",
          height: $options.addUnit(_ctx.height)
        }),
        onChange: $options.change,
        circular: _ctx.circular,
        interval: _ctx.interval,
        duration: _ctx.duration,
        autoplay: _ctx.autoplay,
        current: _ctx.current,
        currentItemId: _ctx.currentItemId,
        previousMargin: $options.addUnit(_ctx.previousMargin),
        nextMargin: $options.addUnit(_ctx.nextMargin),
        acceleration: _ctx.acceleration,
        displayMultipleItems: _ctx.displayMultipleItems,
        easingFunction: _ctx.easingFunction
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
            return openBlock(), createBlock(_component_v_uni_swiper_item, {
              class: "u-swiper__wrapper__item",
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, {
                  class: "u-swiper__wrapper__item__wrapper",
                  style: normalizeStyle([$options.itemStyle(index)])
                }, {
                  default: withCtx(() => [
                    $options.getItemType(item) === "image" ? (openBlock(), createBlock(_component_v_uni_image, {
                      key: 0,
                      class: "u-swiper__wrapper__item__wrapper__image",
                      src: $options.getSource(item),
                      mode: _ctx.imgMode,
                      onClick: ($event) => $options.clickHandler(index),
                      style: normalizeStyle({
                        height: $options.addUnit(_ctx.height),
                        borderRadius: $options.addUnit(_ctx.radius)
                      })
                    }, null, 8, ["src", "mode", "onClick", "style"])) : createCommentVNode("", true),
                    $options.getItemType(item) === "video" ? (openBlock(), createBlock(_component_v_uni_video, {
                      key: 1,
                      class: "u-swiper__wrapper__item__wrapper__video",
                      id: `video-${index}`,
                      "enable-progress-gesture": false,
                      src: $options.getSource(item),
                      poster: $options.getPoster(item),
                      title: _ctx.showTitle && $options.testObject(item) && item.title ? item.title : "",
                      style: normalizeStyle({
                        height: $options.addUnit(_ctx.height)
                      }),
                      controls: "",
                      onClick: ($event) => $options.clickHandler(index)
                    }, null, 8, ["id", "src", "poster", "title", "style", "onClick"])) : createCommentVNode("", true),
                    _ctx.showTitle && $options.testObject(item) && item.title && $options.testImage($options.getSource(item)) ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 2,
                      class: "u-swiper__wrapper__item__wrapper__title u-line-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["style"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["style", "onChange", "circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
      createVNode(_component_v_uni_view, {
        class: "u-swiper__indicator",
        style: normalizeStyle([$options.addStyle(_ctx.indicatorStyle)])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "indicator", {}, () => [
            !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (openBlock(), createBlock(_component_u_swiper_indicator, {
              key: 0,
              indicatorActiveColor: _ctx.indicatorActiveColor,
              indicatorInactiveColor: _ctx.indicatorInactiveColor,
              length: _ctx.list.length,
              current: $data.currentIndex,
              indicatorMode: _ctx.indicatorMode
            }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : createCommentVNode("", true)
          ], true)
        ]),
        _: 3
      }, 8, ["style"])
    ]),
    _: 3
  }, 8, ["style"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2457dd58"]]);
export {
  __easycom_2 as _
};
