/* __addonChunkCssInjected:9e5550f1 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("9e5550f1",".addon-wrap-9e5550f1 .u-empty,.addon-wrap-9e5550f1 .u-empty__wrap,.addon-wrap-9e5550f1 .u-tabs,.addon-wrap-9e5550f1 .u-tabs__wrapper,.addon-wrap-9e5550f1 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-9e5550f1 .u-tabs__wrapper__scroll-view,.addon-wrap-9e5550f1 .u-tabs__wrapper__nav,.addon-wrap-9e5550f1 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-9e5550f1 .u-swipe-action-item{position:relative;overflow:hidden;touch-action:pan-y}.addon-wrap-9e5550f1 .u-swipe-action-item__content{transform:translate(0);background-color:#fff;z-index:10}.addon-wrap-9e5550f1 .u-swipe-action-item__right{position:absolute;top:0;bottom:0;right:0;display:flex;flex-direction:row}.addon-wrap-9e5550f1 .u-swipe-action-item__right__button{display:flex;flex-direction:row;justify-content:center;overflow:hidden;align-items:center}.addon-wrap-9e5550f1 .u-swipe-action-item__right__button__wrapper{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 15px}.addon-wrap-9e5550f1 .u-swipe-action-item__right__button__wrapper__text{display:flex;flex-direction:row;align-items:center;color:#fff;font-size:15px;text-align:center;justify-content:center}");
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, renderSlot, createElementBlock, Fragment, renderList, normalizeStyle, createCommentVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, c as getPx, s as sleep } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
const touch = {
  methods: {
    getTouchPoint(e) {
      if (!e) {
        return {
          x: 0,
          y: 0
        };
      }
      if (e.touches && e.touches[0]) {
        return {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      }
      if (e.changedTouches && e.changedTouches[0]) {
        return {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        };
      }
      return {
        x: e.clientX || 0,
        y: e.clientY || 0
      };
    },
    resetTouchStatus() {
      this.direction = "";
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    touchStart(event) {
      this.resetTouchStatus();
      const touch2 = this.getTouchPoint(event);
      this.startX = touch2.x;
      this.startY = touch2.y;
    },
    touchMove(event) {
      const touch2 = this.getTouchPoint(event);
      this.deltaX = touch2.x - this.startX;
      this.deltaY = touch2.y - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    }
  }
};
const props$1 = {
  props: {
    // 控制打开或者关闭
    show: {
      type: Boolean,
      default: () => defProps.swipeActionItem.show
    },
    // 标识符，如果是v-for，可用index索引值
    name: {
      type: [String, Number],
      default: () => defProps.swipeActionItem.name
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => defProps.swipeActionItem.disabled
    },
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: () => defProps.swipeActionItem.autoClose
    },
    // 滑动距离阈值，只有大于此值，才被认为是要打开菜单
    threshold: {
      type: Number,
      default: () => defProps.swipeActionItem.threshold
    },
    // 右侧按钮内容
    options: {
      type: Array,
      default() {
        return defProps.swipeActionItem.rightOptions;
      }
    },
    // 动画过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: () => defProps.swipeActionItem.duration
    }
  }
};
const wxs = {
  methods: {
    // 关闭时执行
    closeHandler() {
      this.status = "close";
    },
    setState(status) {
      this.status = status;
    },
    closeOther() {
      this.parent && this.parent.closeOther(this);
    }
  }
};
const uSwipeActionItem_vue_vue_type_style_index_0_scoped_9e5550f1_lang = "";
function touchstart(event, ownerInstance) {
  var instance = event.instance;
  var state = instance.getState();
  if (state.disabled)
    return;
  var touches = event.touches;
  if (touches && touches.length > 1)
    return;
  state.moving = true;
  state.startX = touches[0].pageX;
  state.startY = touches[0].pageY;
  ownerInstance.callMethod("closeOther");
}
function touchmove(event, ownerInstance) {
  var instance = event.instance;
  var state = instance.getState();
  if (state.disabled || !state.moving)
    return;
  var touches = event.touches;
  var pageX = touches[0].pageX;
  var pageY = touches[0].pageY;
  var moveX = pageX - state.startX;
  var moveY = pageY - state.startY;
  var buttonsWidth = state.buttonsWidth;
  if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > state.threshold) {
    event.preventDefault && event.preventDefault();
    event.stopPropagation && event.stopPropagation();
  }
  if (Math.abs(moveX) < Math.abs(moveY))
    return;
  if (state.status === "open") {
    if (moveX < 0)
      moveX = 0;
    if (moveX > buttonsWidth)
      moveX = buttonsWidth;
    moveSwipeAction(-buttonsWidth + moveX, instance, ownerInstance);
  } else {
    if (moveX > 0)
      moveX = 0;
    if (Math.abs(moveX) > buttonsWidth)
      moveX = -buttonsWidth;
    moveSwipeAction(moveX, instance, ownerInstance);
  }
}
function touchend(event, ownerInstance) {
  var instance = event.instance;
  var state = instance.getState();
  if (!state.moving || state.disabled)
    return;
  var touches = event.changedTouches ? event.changedTouches[0] : {};
  var pageX = touches.pageX;
  touches.pageY;
  var moveX = pageX - state.startX;
  if (state.status === "open") {
    if (moveX < 0)
      return;
    if (moveX === 0) {
      return closeSwipeAction(instance, ownerInstance);
    }
    if (Math.abs(moveX) < state.threshold) {
      openSwipeAction(instance, ownerInstance);
    } else {
      closeSwipeAction(instance, ownerInstance);
    }
  } else {
    if (moveX > 0)
      return;
    if (Math.abs(moveX) < state.threshold) {
      closeSwipeAction(instance, ownerInstance);
    } else {
      openSwipeAction(instance, ownerInstance);
    }
  }
}
function getDuration(value) {
  if (value.toString().indexOf("s") >= 0)
    return value;
  return value > 30 ? value + "ms" : value + "s";
}
function moveSwipeAction(moveX, instance, ownerInstance) {
  instance.getState();
  ownerInstance.selectAllComponents(".u-swipe-action-item__right__button");
  instance.requestAnimationFrame(function() {
    instance.setStyle({
      // 设置translateX的值
      "transition": "none",
      transform: "translateX(" + moveX + "px)",
      "-webkit-transform": "translateX(" + moveX + "px)"
    });
  });
}
function openSwipeAction(instance, ownerInstance) {
  var state = instance.getState();
  ownerInstance.selectAllComponents(".u-swipe-action-item__right__button");
  var duration = getDuration(state.duration);
  var buttonsWidth = -state.buttonsWidth;
  instance.requestAnimationFrame(function() {
    instance.setStyle({
      "transition": "transform " + duration,
      "transform": "translateX(" + buttonsWidth + "px)",
      "-webkit-transform": "translateX(" + buttonsWidth + "px)"
    });
  });
  setStatus("open", instance, ownerInstance);
}
function setStatus(status, instance, ownerInstance) {
  var state = instance.getState();
  state.status = status;
  ownerInstance.callMethod("setState", status);
}
function closeSwipeAction(instance, ownerInstance) {
  var state = instance.getState();
  var buttons = ownerInstance.selectAllComponents(".u-swipe-action-item__right__button");
  var len = buttons.length;
  var duration = getDuration(state.duration);
  instance.requestAnimationFrame(function() {
    instance.setStyle({
      "transition": "transform " + duration,
      "transform": "translateX(0px)",
      "-webkit-transform": "translateX(0px)"
    });
    for (var i = len - 1; i >= 0; i--) {
      buttons[i].setStyle({
        "transition": "transform " + duration,
        "transform": "translateX(0px)",
        "-webkit-transform": "translateX(0px)"
      });
    }
  });
  setStatus("close", instance, ownerInstance);
}
function statusChange(newValue, oldValue, ownerInstance, instance) {
  var state = instance.getState();
  if (state.disabled)
    return;
  if (newValue === "close" && state.status === "open") {
    closeSwipeAction(instance, ownerInstance);
  } else if (newValue === "open" && state.status === "close") {
    openSwipeAction(instance, ownerInstance);
  }
}
function sizeChange(newValue, oldValue, ownerInstance, instance) {
  var state = instance.getState();
  if (!state || !newValue) {
    return;
  }
  state.disabled = newValue.disabled;
  state.duration = newValue.duration;
  state.show = newValue.show;
  state.threshold = newValue.threshold;
  state.buttons = newValue.buttons;
  if (state.buttons) {
    var len = state.buttons.length;
    var buttonsWidth = 0;
    var buttons = newValue.buttons;
    for (var i = 0; i < len; i++) {
      buttonsWidth += buttons[i].width;
    }
  }
  state.buttonsWidth = buttonsWidth;
}
const _sfc_wxs = {
  touchstart,
  touchmove,
  touchend,
  sizeChange,
  statusChange
};
const block0 = (Comp) => {
  if (!Comp.$wxs) {
    Comp.$wxs = [];
  }
  Comp.$wxs.push("wxs");
  if (!Comp.mixins) {
    Comp.mixins = [];
  }
  Comp.mixins.push({ beforeCreate() {
    this["wxs"] = _sfc_wxs;
  } });
};
const _sfc_main$1 = {
  name: "u-swipe-action-item",
  emits: ["click"],
  mixins: [
    mpMixin,
    mixin,
    touch,
    wxs,
    props$1
  ],
  data() {
    return {
      // 按钮的尺寸信息
      size: {},
      // 父组件u-swipe-action的参数
      parentData: {
        autoClose: true
      },
      // 当前状态，open-打开，close-关闭
      status: "close",
      sliderStyle: {}
    };
  },
  watch: {
    // 由于wxs无法直接读取外部的值，需要在外部值变化时，重新执行赋值逻辑
    wxsInit(newValue, oldValue) {
      this.queryRect();
    }
  },
  computed: {
    wxsInit() {
      return [this.disabled, this.autoClose, this.threshold, this.options, this.duration];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit,
    getPx,
    init() {
      this.updateParentData();
      sleep().then(() => {
        this.queryRect();
      });
    },
    updateParentData() {
      this.getParentData("u-swipe-action");
    },
    // 查询节点
    queryRect() {
      this.$uGetRect(".u-swipe-action-item__right__button", true).then((buttons) => {
        this.size = {
          buttons,
          show: this.show,
          disabled: this.disabled,
          threshold: this.threshold,
          duration: this.duration
        };
      });
    },
    // 按钮被点击
    buttonClickHandler(item, index) {
      this.$emit("click", {
        index,
        name: this.name
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-swipe-action-item",
    ref: "u-swipe-action-item"
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-swipe-action-item__right" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "button", {}, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
              return openBlock(), createBlock(_component_v_uni_view, {
                key: index,
                class: "u-swipe-action-item__right__button",
                ref_for: true,
                ref: `u-swipe-action-item__right__button-${index}`,
                style: normalizeStyle([{
                  alignItems: item.style && item.style.borderRadius ? "center" : "stretch"
                }]),
                onClick: ($event) => $options.buttonClickHandler(item, index)
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "u-swipe-action-item__right__button__wrapper",
                    style: normalizeStyle([{
                      backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
                      borderRadius: item.style && item.style.borderRadius ? item.style.borderRadius : "0",
                      padding: item.style && item.style.borderRadius ? "0" : "0 15px"
                    }, item.style])
                  }, {
                    default: withCtx(() => [
                      item.icon ? (openBlock(), createBlock(_component_u_icon, {
                        key: 0,
                        name: item.icon,
                        color: item.style && item.style.color ? item.style.color : "#ffffff",
                        size: item.iconSize ? $options.addUnit(item.iconSize) : item.style && item.style.fontSize ? $options.getPx(item.style.fontSize) * 1.2 : 17,
                        customStyle: {
                          marginRight: item.text ? "2px" : 0
                        }
                      }, null, 8, ["name", "color", "size", "customStyle"])) : createCommentVNode("", true),
                      item.text ? (openBlock(), createBlock(_component_v_uni_text, {
                        key: 1,
                        class: "u-swipe-action-item__right__button__wrapper__text u-line-1",
                        style: normalizeStyle([{
                          color: item.style && item.style.color ? item.style.color : "#ffffff",
                          fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px",
                          lineHeight: item.style && item.style.fontSize ? item.style.fontSize : "16px"
                        }])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["style"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["style"])
                ]),
                _: 2
              }, 1032, ["style", "onClick"]);
            }), 128))
          ], true)
        ]),
        _: 3
      }),
      createVNode(_component_v_uni_view, {
        class: "u-swipe-action-item__content",
        onTouchstart: _ctx.wxs.touchstart,
        onTouchmove: _ctx.wxs.touchmove,
        onTouchend: _ctx.wxs.touchend,
        status: $data.status,
        "change:status": _ctx.wxs.statusChange,
        size: $data.size,
        "change:size": _ctx.wxs.sizeChange
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["onTouchstart", "onTouchmove", "onTouchend", "status", "change:status", "size", "change:size"])
    ]),
    _: 3
  }, 512);
}
if (typeof block0 === "function")
  block0(_sfc_main$1);
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-9e5550f1"]]);
const props = {
  props: {
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: () => defProps.swipeAction.autoClose
    }
  }
};
const _sfc_main = {
  name: "u-swipe-action",
  mixins: [mpMixin, mixin, props],
  data() {
    return {};
  },
  provide() {
    return {
      swipeAction: this
    };
  },
  computed: {
    // 这里computed的变量，都是子组件u-swipe-action-item需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(u-swipe-action-item)
    // 拉取父组件新的变化后的参数
    parentData() {
      return [this.autoClose];
    }
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentData() {
      if (this.children.length) {
        this.children.map((child) => {
          typeof child.updateParentData === "function" && child.updateParentData();
        });
      }
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    closeOther(child) {
      if (this.autoClose) {
        this.children.map((item, index) => {
          if (child !== item) {
            item.closeHandler();
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-swipe-action" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __easycom_4 as _,
  __easycom_5 as a
};
