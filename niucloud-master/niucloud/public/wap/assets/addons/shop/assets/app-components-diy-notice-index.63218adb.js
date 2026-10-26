/* __addonChunkWindiInjected:app-components-diy-notice-index_63218adb */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-notice-index_63218adb",".bg-\\[var\\(--primary-color-light\\)\\]{\n  background-color: var(--primary-color-light);\n}.rounded-\\[8rpx\\]{\n  border-radius: 0.25rem;\n}.rounded-\\[35rpx\\]{\n  border-radius: 1.09375rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.font-500{\n  font-weight: 500;\n}.h-\\[30rpx\\]{\n  height: 0.9375rem;\n}.h-\\[40rpx\\]{\n  height: 1.25rem;\n}.h-\\[70rpx\\]{\n  height: 2.1875rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-\\[40rpx\\]{\n  line-height: 1.25rem;\n}.leading-\\[70rpx\\]{\n  line-height: 2.1875rem;\n}.mr-\\[20rpx\\]{\n  margin-right: 0.625rem;\n}.mb-\\[20rpx\\]{\n  margin-bottom: 0.625rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}.px-\\[32rpx\\]{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.px-\\[12rpx\\]{\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}.pl-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n}.\\!pt-\\[40rpx\\]{\n  padding-top: 1.25rem !important;\n}.relative{\n  position: relative;\n}.text-\\[var\\(--primary-color\\)\\]{\n  color: var(--primary-color);\n}.\\!text-\\[\\#fff\\]{\n  --tw-text-opacity: 1 !important;\n  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[200rpx\\]{\n  width: 6.25rem;\n}.w-\\[auto\\]{\n  width: auto;\n}.w-\\[570rpx\\]{\n  width: 17.8125rem;\n}.w-\\[480rpx\\]{\n  width: 15rem;\n}");
/* __addonChunkCssInjected:70705aa8 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("70705aa8",".addon-wrap-70705aa8 .main-wrap{display:inline-block;width:calc(100% - 3.125rem);position:relative}.addon-wrap-70705aa8 uni-swiper{height:1.5625rem}.addon-wrap-70705aa8 .beyond-hiding{display:inline-block;width:100%;white-space:nowrap;line-height:1.5625rem}.addon-wrap-70705aa8 .notice-popup{padding:0 .9375rem 1.25rem;background-color:#fff}.addon-wrap-70705aa8 .notice-popup .head-wrap{font-size:1rem;line-height:3.125rem;height:3.125rem;display:block;text-align:center;position:relative;border-bottom:.0625rem solid #eeeeee;margin-bottom:.625rem}.addon-wrap-70705aa8 .notice-popup .head-wrap .iconfont{position:absolute;float:right;right:0;font-size:1rem}.addon-wrap-70705aa8 .notice-popup .content-wrap{max-height:18.75rem;overflow-y:auto}.addon-wrap-70705aa8 .notice-popup uni-button{margin-top:1.25rem}.addon-wrap-70705aa8 .horizontal-wrap{height:1.25rem;display:flex;align-items:center;transform:translateZ(0);animation:marquee-70705aa8 0s 0s linear infinite;transform-style:preserve-3d;backface-visibility:hidden}.addon-wrap-70705aa8 .marquee{display:flex;align-items:center;height:100%;white-space:nowrap;padding-right:30px}.addon-wrap-70705aa8 .marquee .item{flex-shrink:0;line-height:1.25rem!important;height:1.25rem}.addon-wrap-70705aa8 .marquee .item.ml80{margin-left:2.5rem}");
import { c as createSelectorQuery, i as index$g, b as index$q, a as index$i, X as SwiperItem, Y as Swiper, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import "./swiper.dd9c8dc2.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { defineComponent, ref, computed, onMounted, watch, getCurrentInstance, nextTick, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, createCommentVNode, createTextVNode, toDisplayString, normalizeClass, renderList, withModifiers } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-transition.ff7c65da.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-icon.ceb3960f.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-safe-bottom.32b62caf.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const diyStore = useDiyStore();
    const noticeShow = ref(false);
    const noticeContent = ref("");
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
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
    const maskLayer = computed(() => {
      let style = "";
      if (diyComponent.value.componentBgUrl) {
        style += "position:absolute;top:0;width:100%;";
        style += `background: rgba(0,0,0,${diyComponent.value.componentBgAlpha / 10});`;
        style += `height:${height.value}px;`;
        if (diyComponent.value.topRounded)
          style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.topRounded)
          style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      }
      return style;
    });
    const marqueeBodyWidth = ref(0);
    const marqueeOneWidth = ref(0);
    const marqueeStyle = ref("");
    const time = ref(0);
    const delayTime = ref(800);
    const bindCrossSlipEvent = () => {
      if (diyComponent.value.scrollWay == "horizontal") {
        setTimeout(() => {
          nextTick(() => {
            let documentObj = window.document.getElementById("horizontal-body-" + diyComponent.value.id);
            let marqueeOne = window.document.getElementById("marquee-one");
            if (documentObj && marqueeOne) {
              marqueeBodyWidth.value = documentObj.offsetWidth;
              marqueeOneWidth.value = marqueeOne.offsetWidth;
              time.value = Math.ceil(marqueeOneWidth.value * 14);
              if (marqueeBodyWidth.value > marqueeOneWidth.value - 30) {
                marqueeStyle.value = `animation: none;`;
              } else {
                marqueeStyle.value = `animation-duration: ${time.value}ms;animation-delay: ${delayTime.value}ms;`;
              }
            }
          });
        });
      }
    };
    onMounted(() => {
      bindCrossSlipEvent();
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "Notice") {
              bindCrossSlipEvent();
              refresh();
            }
          }
        );
      }
    });
    const instance = getCurrentInstance();
    const height = ref(0);
    const refresh = () => {
      nextTick(() => {
        const query = createSelectorQuery().in(instance);
        query.select(".diy-notice").boundingClientRect((data) => {
          height.value = data.height;
        }).exec();
      });
    };
    const toRedirect = (data) => {
      if (diyStore.mode == "decorate")
        return false;
      if (diyComponent.value.showType == "popup") {
        noticeShow.value = true;
        noticeContent.value = data.text;
      } else {
        diyStore.toRedirect(data.link);
      }
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "diy-notice relative overflow-hidden" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "flex items-center pl-[28rpx] p-[22rpx]" }, {
                default: withCtx(() => [
                  unref(diyComponent).noticeType == "img" ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "min-w-[60rpx] flex items-center"
                  }, {
                    default: withCtx(() => [
                      unref(diyComponent).imgType == "system" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        unref(diyComponent).systemUrl == "style_1" ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 0,
                          src: unref(img)(`static/resource/images/diy/notice/${unref(diyComponent).systemUrl}.png`),
                          class: "h-[40rpx] w-[auto] mr-[20rpx] flex-shrink-0",
                          mode: "heightFix"
                        }, null, 8, ["src"])) : unref(diyComponent).systemUrl == "style_2" ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 1,
                          src: unref(img)(`static/resource/images/diy/notice/${unref(diyComponent).systemUrl}.png`),
                          class: "w-[200rpx] mr-[20rpx] h-[30rpx] flex-shrink-0",
                          mode: "heightFix"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ], 64)) : unref(diyComponent).imgType == "diy" ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 1,
                        src: unref(img)(unref(diyComponent).imageUrl || ""),
                        class: "w-[200rpx] h-[30rpx] mr-[20rpx] flex-shrink-0",
                        mode: "heightFix"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(diyComponent).noticeType == "text" && unref(diyComponent).noticeTitle ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "max-w-[128rpx] px-[12rpx] text-[26rpx] h-[40rpx] leading-[40rpx] text-[var(--primary-color)] bg-[var(--primary-color-light)] truncate rounded-[8rpx] mr-[20rpx] flex-shrink-0"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).noticeTitle), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["flex-1 flex overflow-hidden horizontal-body", { "items-center": unref(diyComponent).scrollWay == "upDown" }]),
                    id: "horizontal-body-" + unref(diyComponent).id
                  }, {
                    default: withCtx(() => [
                      unref(diyComponent).scrollWay == "horizontal" ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "horizontal-wrap",
                        style: normalizeStyle(marqueeStyle.value)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            class: "marquee marquee-one",
                            id: "marquee-one"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                                return openBlock(), createBlock(_component_v_uni_view, {
                                  class: normalizeClass(["item", { "ml80": index2 }]),
                                  key: index2,
                                  onClick: ($event) => toRedirect(item),
                                  style: normalizeStyle({ color: unref(diyComponent).textColor, fontSize: unref(diyComponent).fontSize * 2 + "rpx", fontWeight: unref(diyComponent).fontWeight })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick", "style"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          marqueeBodyWidth.value < marqueeOneWidth.value - 30 ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            class: "marquee"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                                return openBlock(), createBlock(_component_v_uni_view, {
                                  class: normalizeClass(["item", { "ml80": index2 }]),
                                  key: index2,
                                  onClick: ($event) => toRedirect(item),
                                  style: normalizeStyle({ color: unref(diyComponent).textColor, fontSize: unref(diyComponent).fontSize * 2 + "rpx", fontWeight: unref(diyComponent).fontWeight })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick", "style"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true),
                      unref(diyComponent).scrollWay == "upDown" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createVNode(_component_v_uni_swiper, {
                          vertical: true,
                          duration: 500,
                          autoplay: "true",
                          circular: "true",
                          class: "flex-1"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                              return openBlock(), createBlock(_component_v_uni_swiper_item, {
                                key: index2,
                                onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
                                }, ["prevent", "stop"]))
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, {
                                    onClick: ($event) => toRedirect(item),
                                    class: "beyond-hiding truncate",
                                    style: normalizeStyle({ color: unref(diyComponent).textColor, fontSize: unref(diyComponent).fontSize * 2 + "rpx", fontWeight: unref(diyComponent).fontWeight })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick", "style"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_uni_text, {
                          class: "nc-iconfont nc-icon-youV6xx text-[26rpx] -ml-[8rpx] pl-[30rpx]",
                          style: normalizeStyle({ "color": "#999", "fontWeight": unref(diyComponent).fontWeight })
                        }, null, 8, ["style"])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["id", "class"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                onTouchmove: _cache[3] || (_cache[3] = withModifiers(() => {
                }, ["prevent", "stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_popup, {
                    show: noticeShow.value,
                    onClose: _cache[2] || (_cache[2] = ($event) => noticeShow.value = false),
                    mode: "center",
                    round: "var(--rounded-big)",
                    safeAreaInsetBottom: false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "w-[570rpx] px-[32rpx] popup-common center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "title" }, {
                            default: withCtx(() => [
                              createTextVNode("公告")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_scroll_view, {
                            "scroll-y": true,
                            class: "px-[30rpx] box-border h-[260rpx]"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(noticeContent.value.split("\n"), (item) => {
                                return openBlock(), createBlock(_component_v_uni_view, { class: "text-[28rpx] leading-[40rpx] mb-[20rpx]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "btn-wrap !pt-[40rpx]" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_button, {
                                class: "primary-btn-bg w-[480rpx] h-[70rpx] text-[26rpx] leading-[70rpx] rounded-[35rpx] !text-[#fff] font-500",
                                onClick: _cache[1] || (_cache[1] = ($event) => noticeShow.value = false)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("我知道了")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["show"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_70705aa8_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70705aa8"]]);
export {
  index as default
};
