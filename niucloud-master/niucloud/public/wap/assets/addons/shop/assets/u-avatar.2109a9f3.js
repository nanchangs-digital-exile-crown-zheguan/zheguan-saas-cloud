/* __addonChunkCssInjected:96ebbd2f */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("96ebbd2f",".addon-wrap-96ebbd2f .u-empty,.addon-wrap-96ebbd2f .u-empty__wrap,.addon-wrap-96ebbd2f .u-tabs,.addon-wrap-96ebbd2f .u-tabs__wrapper,.addon-wrap-96ebbd2f .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-96ebbd2f .u-tabs__wrapper__scroll-view,.addon-wrap-96ebbd2f .u-tabs__wrapper__nav,.addon-wrap-96ebbd2f .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-96ebbd2f .u-avatar{display:flex;flex-direction:row;align-items:center;justify-content:center}.addon-wrap-96ebbd2f .u-avatar--circle{border-radius:100px}.addon-wrap-96ebbd2f .u-avatar--square{border-radius:4px}.addon-wrap-96ebbd2f .u-avatar__image--circle{border-radius:100px;overflow:hidden}.addon-wrap-96ebbd2f .u-avatar__image--square{border-radius:4px}");
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, renderSlot, createElementBlock, Fragment } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3$1 } from "./u-text.ae347f6f.js";
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { t as test, a as addStyle, b as addUnit, k as random } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 头像图片路径(不能为相对路径)
    src: {
      type: String,
      default: () => defProps.avatar.src
    },
    // 头像形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: () => defProps.avatar.shape
    },
    // 头像尺寸
    size: {
      type: [String, Number],
      default: () => defProps.avatar.size
    },
    // 裁剪模式
    mode: {
      type: String,
      default: () => defProps.avatar.mode
    },
    // 显示的文字
    text: {
      type: String,
      default: () => defProps.avatar.text
    },
    // 背景色
    bgColor: {
      type: String,
      default: () => defProps.avatar.bgColor
    },
    // 文字颜色
    color: {
      type: String,
      default: () => defProps.avatar.color
    },
    // 文字大小
    fontSize: {
      type: [String, Number],
      default: () => defProps.avatar.fontSize
    },
    // 显示的图标
    icon: {
      type: String,
      default: () => defProps.avatar.icon
    },
    // 显示小程序头像，只对百度，微信，QQ小程序有效
    mpAvatar: {
      type: Boolean,
      default: () => defProps.avatar.mpAvatar
    },
    // 是否使用随机背景色
    randomBgColor: {
      type: Boolean,
      default: () => defProps.avatar.randomBgColor
    },
    // 加载失败的默认头像(组件有内置默认图片)
    defaultUrl: {
      type: String,
      default: () => defProps.avatar.defaultUrl
    },
    // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
    colorIndex: {
      type: [String, Number],
      // 校验参数规则，索引在0-19之间
      validator(n) {
        return test.range(n, [0, 19]) || n === "";
      },
      default: () => defProps.avatar.colorIndex
    },
    // 组件标识符
    name: {
      type: String,
      default: () => defProps.avatar.name
    }
  }
};
const uAvatar_vue_vue_type_style_index_0_scoped_96ebbd2f_lang = "";
const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
const _sfc_main = {
  name: "u-avatar",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 如果配置randomBgColor参数为true，在图标或者文字的模式下，会随机从中取出一个颜色值当做背景色
      colors: [
        "#ffb34b",
        "#f2bba9",
        "#f7a196",
        "#f18080",
        "#88a867",
        "#bfbf39",
        "#89c152",
        "#94d554",
        "#f19ec2",
        "#afaae4",
        "#e1b0df",
        "#c38cc1",
        "#72dcdc",
        "#9acdcb",
        "#77b1cc",
        "#448aca",
        "#86cefa",
        "#98d1ee",
        "#73d1f1",
        "#80a7dc"
      ],
      avatarUrl: this.src,
      allowMp: false
    };
  },
  watch: {
    // 监听头像src的变化，赋值给内部的avatarUrl变量，因为图片加载失败时，需要修改图片的src为默认值
    // 而组件内部不能直接修改props的值，所以需要一个中间变量
    src: {
      immediate: true,
      handler(newVal) {
        this.avatarUrl = newVal;
        if (!newVal) {
          this.errorHandler();
        }
      }
    }
  },
  computed: {
    imageStyle() {
      const style = {};
      return style;
    }
  },
  created() {
    this.init();
  },
  emits: ["click"],
  methods: {
    addStyle,
    addUnit,
    random,
    init() {
    },
    // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
    isImg() {
      return this.src.indexOf("/") !== -1;
    },
    // 图片加载时失败时触发
    errorHandler() {
      this.avatarUrl = this.defaultUrl || base64Avatar;
    },
    clickHandler() {
      this.$emit("click", this.name);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_3$1);
  const _component_v_uni_image = index$q;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
    style: normalizeStyle([{
      backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : $options.random(0, 19)] : _ctx.bgColor : "transparent",
      width: $options.addUnit(_ctx.size),
      height: $options.addUnit(_ctx.size)
    }, $options.addStyle(_ctx.customStyle)]),
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _ctx.mpAvatar && $data.allowMp ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : _ctx.icon ? (openBlock(), createBlock(_component_u_icon, {
          key: 1,
          name: _ctx.icon,
          size: _ctx.fontSize,
          color: _ctx.color
        }, null, 8, ["name", "size", "color"])) : _ctx.text ? (openBlock(), createBlock(_component_up_text, {
          key: 2,
          text: _ctx.text,
          size: _ctx.fontSize,
          color: _ctx.color,
          align: "center",
          customStyle: "justify-content: center"
        }, null, 8, ["text", "size", "color"])) : (openBlock(), createBlock(_component_v_uni_image, {
          key: 3,
          class: normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
          src: $data.avatarUrl || _ctx.defaultUrl,
          mode: _ctx.mode,
          onError: $options.errorHandler,
          style: normalizeStyle([{
            width: $options.addUnit(_ctx.size),
            height: $options.addUnit(_ctx.size)
          }])
        }, null, 8, ["class", "src", "mode", "onError", "style"]))
      ], true)
    ]),
    _: 3
  }, 8, ["class", "style", "onClick"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-96ebbd2f"]]);
export {
  __easycom_0 as _
};
