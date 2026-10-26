/* __addonChunkWindiInjected:app-components-diy-image-ads-index_7641a651 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-image-ads-index_7641a651",".h-full{\n  height: 100%;\n}.leading-0{\n  line-height: 0rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.w-full{\n  width: 100%;\n}.\\!w-full{\n  width: 100% !important;\n}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g, X as SwiperItem, Y as Swiper } from "./uni-h5.es.7545a186.js";
import "./swiper.dd9c8dc2.js";
import { defineComponent, computed, ref, onMounted, watch, onBeforeUnmount, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { a as useSystemStore, k as useDiyStore, i as img } from "./common.f536f441.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
var process = {};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    if (typeof setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = "";
process.versions = {};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
  return [];
};
process.binding = function(name) {
  throw new Error("process.binding is not supported");
};
process.cwd = function() {
  return "/";
};
process.chdir = function(dir) {
  throw new Error("process.chdir is not supported");
};
process.umask = function() {
  return 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const systemStore = useSystemStore();
    const diyStore = useDiyStore();
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
    });
    const imageAdsTempStyle = computed(() => {
      let style = "";
      if (diyComponent.value.isSameScreen && props.index == 0) {
        if (systemStore.systemInfo.platform === "ios") {
          style = "margin-top: -55px;";
        } else {
          style = "margin-top: -44.5px;";
        }
      }
      return style;
    });
    const warpCss = computed(() => {
      let style = "";
      style += "position:relative;";
      if (diyComponent.value.componentStartBgColor) {
        if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
          style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
        else
          style += "background-color:" + diyComponent.value.componentStartBgColor + ";";
      }
      if (diyComponent.value.componentBgUrl) {
        style += `background-image:url('${img(diyComponent.value.componentBgUrl)}');`;
        style += "background-size: cover;background-repeat: no-repeat;";
      }
      return style;
    });
    const swiperWarpCss = computed(() => {
      let style = "";
      if (diyComponent.value.topRounded)
        style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.topRounded)
        style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      return style;
    });
    const imgHeight = computed(() => {
      return diyComponent.value.imageHeight * 2 + "rpx";
    });
    const swiperIndex = ref(0);
    const swiperChange = (e) => {
      swiperIndex.value = e.detail.current;
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ImageAds") {
              refresh();
            }
          }
        );
      }
    });
    onBeforeUnmount(() => {
      diyStore.imageAdsSameScreen = false;
    });
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        diyComponent.value.list.forEach((item) => {
          if (item.imageUrl == "") {
            item.imgWidth = 690;
            item.imgHeight = 330;
          }
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "diy-image-ads",
            style: normalizeStyle(unref(imageAdsTempStyle))
          }, {
            default: withCtx(() => [
              unref(diyComponent).list.length == 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "leading-0 overflow-hidden",
                style: normalizeStyle(unref(swiperWarpCss))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).list[0].link))
                  }, {
                    default: withCtx(() => [
                      unref(diyComponent).list[0].imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 0,
                        src: unref(img)(unref(diyComponent).list[0].imageUrl),
                        style: normalizeStyle({ height: unref(imgHeight) }),
                        mode: "heightFix",
                        class: "!w-full",
                        "show-menu-by-longpress": true
                      }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                        key: 1,
                        src: unref(img)("static/resource/images/diy/figure.png"),
                        style: normalizeStyle({ height: unref(imgHeight) }),
                        mode: "heightFix",
                        class: "!w-full",
                        "show-menu-by-longpress": true
                      }, null, 8, ["src", "style"]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["style"])) : (openBlock(), createBlock(_component_v_uni_swiper, {
                key: 1,
                class: "swiper",
                style: normalizeStyle({ height: unref(imgHeight) }),
                autoplay: "true",
                circular: "true",
                onChange: swiperChange
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item) => {
                    return openBlock(), createBlock(_component_v_uni_swiper_item, {
                      class: "swiper-item",
                      key: item.id,
                      style: normalizeStyle(unref(swiperWarpCss))
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, {
                          onClick: ($event) => unref(diyStore).toRedirect(item.link)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, {
                              class: "item",
                              style: normalizeStyle({ height: unref(imgHeight) })
                            }, {
                              default: withCtx(() => [
                                item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 0,
                                  src: unref(img)(item.imageUrl),
                                  mode: "scaleToFill",
                                  class: "w-full h-full",
                                  "show-menu-by-longpress": true
                                }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 1,
                                  src: unref(img)("static/resource/images/diy/figure.png"),
                                  mode: "scaleToFill",
                                  class: "w-full h-full",
                                  "show-menu-by-longpress": true
                                }, null, 8, ["src"]))
                              ]),
                              _: 2
                            }, 1032, ["style"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["style"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["style"]))
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
