/* __addonChunkCssInjected:2d10e721 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("2d10e721",".addon-wrap-2d10e721 .u-empty,.addon-wrap-2d10e721 .u-empty__wrap,.addon-wrap-2d10e721 .u-tabs,.addon-wrap-2d10e721 .u-tabs__wrapper,.addon-wrap-2d10e721 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-2d10e721 .u-tabs__wrapper__scroll-view,.addon-wrap-2d10e721 .u-tabs__wrapper__nav,.addon-wrap-2d10e721 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-2d10e721 .u-icon{display:flex;align-items:center}.addon-wrap-2d10e721 .u-icon--left{flex-direction:row-reverse;align-items:center}.addon-wrap-2d10e721 .u-icon--right{flex-direction:row;align-items:center}.addon-wrap-2d10e721 .u-icon--top{flex-direction:column-reverse;justify-content:center}.addon-wrap-2d10e721 .u-icon--bottom{flex-direction:column;justify-content:center}.addon-wrap-2d10e721 .u-icon__icon{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.addon-wrap-2d10e721 .u-icon__icon--primary{color:var(--primary-color)}.addon-wrap-2d10e721 .u-icon__icon--success{color:#5ac725}.addon-wrap-2d10e721 .u-icon__icon--error{color:#f56c6c}.addon-wrap-2d10e721 .u-icon__icon--warning{color:#f9ae3d}.addon-wrap-2d10e721 .u-icon__icon--info{color:#909399}.addon-wrap-2d10e721 .u-icon__img{height:auto;will-change:transform}.addon-wrap-2d10e721 .u-icon__label{line-height:1}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { i as config, b as addUnit, a as addStyle } from "./route.c60967f7.js";
import { openBlock, createBlock, normalizeClass, withCtx, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const icons = {
  "uicon-level": "",
  "uicon-column-line": "",
  "uicon-checkbox-mark": "",
  "uicon-folder": "",
  "uicon-movie": "",
  "uicon-star-fill": "",
  "uicon-star": "",
  "uicon-phone-fill": "",
  "uicon-phone": "",
  "uicon-apple-fill": "",
  "uicon-chrome-circle-fill": "",
  "uicon-backspace": "",
  "uicon-attach": "",
  "uicon-cut": "",
  "uicon-empty-car": "",
  "uicon-empty-coupon": "",
  "uicon-empty-address": "",
  "uicon-empty-favor": "",
  "uicon-empty-permission": "",
  "uicon-empty-news": "",
  "uicon-empty-search": "",
  "uicon-github-circle-fill": "",
  "uicon-rmb": "",
  "uicon-person-delete-fill": "",
  "uicon-reload": "",
  "uicon-order": "",
  "uicon-server-man": "",
  "uicon-search": "",
  "uicon-fingerprint": "",
  "uicon-more-dot-fill": "",
  "uicon-scan": "",
  "uicon-share-square": "",
  "uicon-map": "",
  "uicon-map-fill": "",
  "uicon-tags": "",
  "uicon-tags-fill": "",
  "uicon-bookmark-fill": "",
  "uicon-bookmark": "",
  "uicon-eye": "",
  "uicon-eye-fill": "",
  "uicon-mic": "",
  "uicon-mic-off": "",
  "uicon-calendar": "",
  "uicon-calendar-fill": "",
  "uicon-trash": "",
  "uicon-trash-fill": "",
  "uicon-play-left": "",
  "uicon-play-right": "",
  "uicon-minus": "",
  "uicon-plus": "",
  "uicon-info": "",
  "uicon-info-circle": "",
  "uicon-info-circle-fill": "",
  "uicon-question": "",
  "uicon-error": "",
  "uicon-close": "",
  "uicon-checkmark": "",
  "uicon-android-circle-fill": "",
  "uicon-android-fill": "",
  "uicon-ie": "",
  "uicon-IE-circle-fill": "",
  "uicon-google": "",
  "uicon-google-circle-fill": "",
  "uicon-setting-fill": "",
  "uicon-setting": "",
  "uicon-minus-square-fill": "",
  "uicon-plus-square-fill": "",
  "uicon-heart": "",
  "uicon-heart-fill": "",
  "uicon-camera": "",
  "uicon-camera-fill": "",
  "uicon-more-circle": "",
  "uicon-more-circle-fill": "",
  "uicon-chat": "",
  "uicon-chat-fill": "",
  "uicon-bag-fill": "",
  "uicon-bag": "",
  "uicon-error-circle-fill": "",
  "uicon-error-circle": "",
  "uicon-close-circle": "",
  "uicon-close-circle-fill": "",
  "uicon-checkmark-circle": "",
  "uicon-checkmark-circle-fill": "",
  "uicon-question-circle-fill": "",
  "uicon-question-circle": "",
  "uicon-share": "",
  "uicon-share-fill": "",
  "uicon-shopping-cart": "",
  "uicon-shopping-cart-fill": "",
  "uicon-bell": "",
  "uicon-bell-fill": "",
  "uicon-list": "",
  "uicon-list-dot": "",
  "uicon-zhihu": "",
  "uicon-zhihu-circle-fill": "",
  "uicon-zhifubao": "",
  "uicon-zhifubao-circle-fill": "",
  "uicon-weixin-circle-fill": "",
  "uicon-weixin-fill": "",
  "uicon-twitter-circle-fill": "",
  "uicon-twitter": "",
  "uicon-taobao-circle-fill": "",
  "uicon-taobao": "",
  "uicon-weibo-circle-fill": "",
  "uicon-weibo": "",
  "uicon-qq-fill": "",
  "uicon-qq-circle-fill": "",
  "uicon-moments-circel-fill": "",
  "uicon-moments": "",
  "uicon-qzone": "",
  "uicon-qzone-circle-fill": "",
  "uicon-baidu-circle-fill": "",
  "uicon-baidu": "",
  "uicon-facebook-circle-fill": "",
  "uicon-facebook": "",
  "uicon-car": "",
  "uicon-car-fill": "",
  "uicon-warning-fill": "",
  "uicon-warning": "",
  "uicon-clock-fill": "",
  "uicon-clock": "",
  "uicon-edit-pen": "",
  "uicon-edit-pen-fill": "",
  "uicon-email": "",
  "uicon-email-fill": "",
  "uicon-minus-circle": "",
  "uicon-minus-circle-fill": "",
  "uicon-plus-circle": "",
  "uicon-plus-circle-fill": "",
  "uicon-file-text": "",
  "uicon-file-text-fill": "",
  "uicon-pushpin": "",
  "uicon-pushpin-fill": "",
  "uicon-grid": "",
  "uicon-grid-fill": "",
  "uicon-play-circle": "",
  "uicon-play-circle-fill": "",
  "uicon-pause-circle-fill": "",
  "uicon-pause": "",
  "uicon-pause-circle": "",
  "uicon-eye-off": "",
  "uicon-eye-off-outline": "",
  "uicon-gift-fill": "",
  "uicon-gift": "",
  "uicon-rmb-circle-fill": "",
  "uicon-rmb-circle": "",
  "uicon-kefu-ermai": "",
  "uicon-server-fill": "",
  "uicon-coupon-fill": "",
  "uicon-coupon": "",
  "uicon-integral": "",
  "uicon-integral-fill": "",
  "uicon-home-fill": "",
  "uicon-home": "",
  "uicon-hourglass-half-fill": "",
  "uicon-hourglass": "",
  "uicon-account": "",
  "uicon-plus-people-fill": "",
  "uicon-minus-people-fill": "",
  "uicon-account-fill": "",
  "uicon-thumb-down-fill": "",
  "uicon-thumb-down": "",
  "uicon-thumb-up": "",
  "uicon-thumb-up-fill": "",
  "uicon-lock-fill": "",
  "uicon-lock-open": "",
  "uicon-lock-opened-fill": "",
  "uicon-lock": "",
  "uicon-red-packet-fill": "",
  "uicon-photo-fill": "",
  "uicon-photo": "",
  "uicon-volume-off-fill": "",
  "uicon-volume-off": "",
  "uicon-volume-fill": "",
  "uicon-volume": "",
  "uicon-red-packet": "",
  "uicon-download": "",
  "uicon-arrow-up-fill": "",
  "uicon-arrow-down-fill": "",
  "uicon-play-left-fill": "",
  "uicon-play-right-fill": "",
  "uicon-rewind-left-fill": "",
  "uicon-rewind-right-fill": "",
  "uicon-arrow-downward": "",
  "uicon-arrow-leftward": "",
  "uicon-arrow-rightward": "",
  "uicon-arrow-upward": "",
  "uicon-arrow-down": "",
  "uicon-arrow-right": "",
  "uicon-arrow-left": "",
  "uicon-arrow-up": "",
  "uicon-skip-back-left": "",
  "uicon-skip-forward-right": "",
  "uicon-rewind-right": "",
  "uicon-rewind-left": "",
  "uicon-arrow-right-double": "",
  "uicon-arrow-left-double": "",
  "uicon-wifi-off": "",
  "uicon-wifi": "",
  "uicon-empty-data": "",
  "uicon-empty-history": "",
  "uicon-empty-list": "",
  "uicon-empty-page": "",
  "uicon-empty-order": "",
  "uicon-man": "",
  "uicon-woman": "",
  "uicon-man-add": "",
  "uicon-man-add-fill": "",
  "uicon-man-delete": "",
  "uicon-man-delete-fill": "",
  "uicon-zh": "",
  "uicon-en": ""
};
const props = {
  props: {
    // 图标类名
    name: {
      type: String,
      default: () => defProps.icon.name
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: () => defProps.icon.color
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: () => defProps.icon.size
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: () => defProps.icon.bold
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: () => defProps.icon.index
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: () => defProps.icon.hoverClass
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: () => defProps.icon.customPrefix
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: () => defProps.icon.label
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: () => defProps.icon.labelPos
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: () => defProps.icon.labelSize
    },
    // label的颜色
    labelColor: {
      type: String,
      default: () => defProps.icon.labelColor
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: () => defProps.icon.space
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: () => defProps.icon.imgMode
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: () => defProps.icon.width
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: () => defProps.icon.height
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: () => defProps.icon.top
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: () => defProps.icon.stop
    }
  }
};
const _sfc_main = {
  name: "u-icon",
  data() {
    return {};
  },
  emits: ["click"],
  mixins: [mpMixin, mixin, props],
  computed: {
    uClasses() {
      let classes = [];
      classes.push(this.customPrefix + "-" + this.name);
      if (this.customPrefix == "uicon") {
        classes.push("u-iconfont");
      } else {
        classes.push(this.customPrefix);
      }
      if (this.color && config.type.includes(this.color))
        classes.push("u-icon__icon--" + this.color);
      return classes;
    },
    iconStyle() {
      let style = {};
      style = {
        fontSize: addUnit(this.size),
        lineHeight: addUnit(this.size),
        fontWeight: this.bold ? "bold" : "normal",
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: addUnit(this.top)
      };
      if (this.color && !config.type.includes(this.color))
        style.color = this.color;
      return style;
    },
    // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
    isImg() {
      return this.name.indexOf("/") !== -1;
    },
    imgStyle() {
      let style = {};
      style.width = this.width ? addUnit(this.width) : addUnit(this.size);
      style.height = this.height ? addUnit(this.height) : addUnit(this.size);
      return style;
    },
    // 通过图标名，查找对应的图标
    icon() {
      if (this.customPrefix !== "uicon")
        return "";
      return icons["uicon-" + this.name] || this.name;
    }
  },
  methods: {
    addStyle,
    addUnit,
    clickHandler(e) {
      this.$emit("click", this.index);
      this.stop && this.preventEvent(e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      $options.isImg ? (openBlock(), createBlock(_component_v_uni_image, {
        key: 0,
        class: "u-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: normalizeStyle([$options.imgStyle, $options.addStyle(_ctx.customStyle)])
      }, null, 8, ["src", "mode", "style"])) : (openBlock(), createBlock(_component_v_uni_text, {
        key: 1,
        class: normalizeClass(["u-icon__icon", $options.uClasses]),
        style: normalizeStyle([$options.iconStyle, $options.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($options.icon), 1)
        ]),
        _: 1
      }, 8, ["class", "style", "hover-class"])),
      _ctx.label !== "" ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 2,
        class: "u-icon__label",
        style: normalizeStyle({
          color: _ctx.labelColor,
          fontSize: $options.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? $options.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? $options.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? $options.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? $options.addUnit(_ctx.space) : 0
        })
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onClick", "class"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d10e721"]]);
export {
  __easycom_3 as _
};
