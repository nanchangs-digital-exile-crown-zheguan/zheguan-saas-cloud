/* __addonChunkWindiInjected:app-components-diy-graphic-nav-index_5feecfcc */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-graphic-nav-index_5feecfcc",".box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.inline-flex{\n  display: inline-flex;\n}.flex-col{\n  flex-direction: column;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.text-xs{\n  font-size: 0.75rem;\n  line-height: 1rem;\n}.leading-normal{\n  line-height: 1.5;\n}.mr-\\[20rpx\\]{\n  margin-right: 0.625rem;\n}.pt-\\[10rpx\\]{\n  padding-top: 0.3125rem;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.text-white{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.whitespace-nowrap{\n  white-space: nowrap;\n}.w-full{\n  width: 100%;\n}.transform{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n}");
/* __addonChunkCssInjected:404b1788 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("404b1788",".addon-wrap-404b1788 .graphic-nav-fixed .uni-scroll-view-content{display:flex;flex-wrap:wrap}.addon-wrap-404b1788 .graphic-nav-singleSlide .uni-scroll-view-content{display:flex}.addon-wrap-404b1788 .multiple-lines.graphic-nav-singleSlide .uni-scroll-view-content{display:block}.addon-wrap-404b1788 .graphic-nav-indicator-dot{width:95%;margin:auto}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap{white-space:nowrap;display:flex;align-items:center;justify-content:center}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap.left{justify-content:flex-start;padding-left:.9375rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap.right{justify-content:flex-end;padding-right:.9375rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot{display:inline-block;width:.375rem;height:.375rem;cursor:pointer;transition-property:background-color;transition-timing-function:ease;background:rgba(0,0,0,.3);border-radius:50%;margin-right:.5rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot:last-child{margin-right:0}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot.style-2{width:.5625rem;height:.1875rem;border-radius:.125rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dotdot-active.style-2{width:1.125rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot.style-3{width:.3125rem;height:.3125rem!important;border-radius:.375rem;margin-right:.4375rem}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot.style-3:last-of-type{margin-right:0}.addon-wrap-404b1788 .graphic-nav-indicator-dot .dots-wrap .dot.dot-active.style-3{width:1rem}.addon-wrap-404b1788 .pt16{padding-top:.5rem}");
import { j as getStorageSync, c as createSelectorQuery, n as setStorageSync, i as index$g, b as index$q, a as index$i, X as SwiperItem, Y as Swiper, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { defineComponent, computed, ref, onMounted, watch, getCurrentInstance, nextTick, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, renderList, normalizeClass, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./swiper.dd9c8dc2.js";
import "./scroll-view.29370e9b.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const diyStore = useDiyStore();
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
    });
    const shouldShowIndicator = computed(() => {
      const totalItems = diyComponent.value.list.length;
      const itemsPerPage = diyComponent.value.pageCount * diyComponent.value.rowCount;
      return totalItems > itemsPerPage;
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
    const horizontalSingleSlideItemStyle = (index2) => {
      let style = { width: "" };
      style.width = `${100 / diyComponent.value.rowCount}%`;
      return style;
    };
    const swiperIndex = ref(0);
    const swiperChange = (e) => {
      swiperIndex.value = e.detail.current;
    };
    const swiperCondition = (index2, numItem) => {
      let count = diyComponent.value.pageCount * diyComponent.value.rowCount;
      let result = index2 >= [(numItem - 1) * count] && index2 < [numItem * count];
      return result;
    };
    const storageKey = "graphic_nav_horizontal_page_slide_swiperheight_" + props.index + "_" + diyComponent.value.list.length;
    const swiperHeight = ref(getStorageSync(storageKey) || "");
    const handleData = () => {
      if (diyComponent.value.layout == "horizontal" && diyComponent.value.showStyle == "pageSlide") {
        let height2 = 0;
        const query = createSelectorQuery().in(instance);
        query.select(".graphic-nav-item").boundingClientRect((data) => {
          let len = 1;
          if (diyComponent.value.pageCount == 2) {
            len = diyComponent.value.list.length / diyComponent.value.rowCount > 1 ? 2 : 1;
          }
          height2 = data.height * len;
          swiperHeight.value = height2 + "px";
          setStorageSync(storageKey, swiperHeight.value);
        }).exec();
      }
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "GraphicNav") {
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
        handleData();
        const query = createSelectorQuery().in(instance);
        query.select(".diy-graphic-nav").boundingClientRect((data) => {
          if (data)
            height.value = data.height;
        }).exec();
      });
    };
    const getSlideRowNum = () => {
      let num = 1;
      if (diyComponent.value.pageCount == 2) {
        num = diyComponent.value.list.length > diyComponent.value.rowCount ? 2 : 1;
      }
      return num;
    };
    const isShowSlideTemp = (index2, numItem) => {
      let indent = index2 + 1;
      if (diyComponent.value.pageCount == 2) {
        let num = Math.ceil(diyComponent.value.list.length / diyComponent.value.rowCount);
        for (let i = 1; i <= num; i++) {
          if (numItem == 1 && i % 2 != 0) {
            if (indent > (i - 1) * diyComponent.value.rowCount && indent <= i * diyComponent.value.rowCount) {
              return true;
            }
          }
          if (numItem == 2 && i % 2 == 0) {
            if (indent > (i - 1) * diyComponent.value.rowCount && indent <= i * diyComponent.value.rowCount) {
              return true;
            }
          }
        }
      }
      return false;
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_v_uni_scroll_view = ScrollView;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "diy-graphic-nav relative" }, {
            default: withCtx(() => [
              unref(diyComponent).layout == "vertical" ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "graphic-nav"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: "graphic-nav-item",
                      key: item.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, {
                          onClick: ($event) => unref(diyStore).toRedirect(item.link),
                          class: normalizeClass(["flex items-center justify-between py-3 px-4", index2 == 0 ? "border-t-0" : "border-t"])
                        }, {
                          default: withCtx(() => [
                            unref(diyComponent).mode != "text" ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "graphic-img relative flex items-center w-10 h-10 mr-[20rpx]",
                              style: normalizeStyle({ width: unref(diyComponent).imageSize * 2 + "rpx", height: unref(diyComponent).imageSize * 2 + "rpx" })
                            }, {
                              default: withCtx(() => [
                                item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 0,
                                  src: unref(img)(item.imageUrl),
                                  mode: "aspectFill",
                                  style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 1,
                                  src: unref(img)("static/resource/images/diy/figure.png"),
                                  mode: "aspectFill",
                                  style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                }, null, 8, ["src", "style"])),
                                item.label.control ? (openBlock(), createBlock(_component_v_uni_text, {
                                  key: 2,
                                  class: "tag absolute -top-[10rpx] -right-[24rpx] text-white rounded-[24rpx] rounded-bl-none transform scale-80 py-1 px-2 text-xs",
                                  style: normalizeStyle({ color: item.label.textColor, backgroundImage: "linear-gradient(" + item.label.bgColorStart + "," + item.label.bgColorEnd + ")" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["style"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["style"])) : createCommentVNode("", true),
                            unref(diyComponent).mode != "img" ? (openBlock(), createBlock(_component_v_uni_text, {
                              key: 1,
                              class: "graphic-text w-full truncate leading-normal",
                              style: normalizeStyle({ fontSize: unref(diyComponent).font.size * 2 + "rpx", fontWeight: unref(diyComponent).font.weight, color: unref(diyComponent).font.color })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["style"])) : createCommentVNode("", true),
                            createVNode(_component_u_icon, {
                              name: "arrow-right",
                              color: "#999999",
                              size: "12"
                            })
                          ]),
                          _: 2
                        }, 1032, ["onClick", "class"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : unref(diyComponent).layout == "horizontal" && unref(diyComponent).showStyle == "pageSlide" ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "pt-[10rpx]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_swiper, {
                    class: "graphic-nav swiper relative",
                    style: normalizeStyle({ height: swiperHeight.value, width: "95%", margin: "0 auto", opacity: swiperHeight.value ? 1 : 0 }),
                    circular: "",
                    onChange: swiperChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(unref(diyComponent).list.length / (unref(diyComponent).pageCount * unref(diyComponent).rowCount)), (numItem, numIndex) => {
                        return openBlock(), createBlock(_component_v_uni_swiper_item, { class: "graphic-nav-wrap flex flex-wrap" }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                              return openBlock(), createElementBlock(Fragment, null, [
                                swiperCondition(index2, numItem) ? (openBlock(), createBlock(_component_v_uni_view, {
                                  class: normalizeClass([unref(diyComponent).mode]),
                                  key: item.id,
                                  style: normalizeStyle({ width: 100 / unref(diyComponent).rowCount + "%" })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_view, {
                                      onClick: ($event) => unref(diyStore).toRedirect(item.link),
                                      class: "graphic-nav-item flex flex-col items-center py-2"
                                    }, {
                                      default: withCtx(() => [
                                        unref(diyComponent).mode != "text" ? (openBlock(), createBlock(_component_v_uni_view, {
                                          key: 0,
                                          class: "graphic-img relative flex items-center justify-center w-10 h-10",
                                          style: normalizeStyle({ width: unref(diyComponent).imageSize * 2 + "rpx", height: unref(diyComponent).imageSize * 2 + "rpx" })
                                        }, {
                                          default: withCtx(() => [
                                            item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                              key: 0,
                                              src: unref(img)(item.imageUrl),
                                              mode: "aspectFill",
                                              style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                            }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                              key: 1,
                                              src: unref(img)("static/resource/images/diy/figure.png"),
                                              mode: "aspectFill",
                                              style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                            }, null, 8, ["src", "style"])),
                                            item.label.control ? (openBlock(), createBlock(_component_v_uni_text, {
                                              key: 2,
                                              class: "tag absolute -top-[10rpx] -right-[24rpx] text-white rounded-[24rpx] rounded-bl-none transform scale-80 py-1 px-2 text-xs",
                                              style: normalizeStyle({ color: item.label.textColor, backgroundImage: "linear-gradient(" + item.label.bgColorStart + "," + item.label.bgColorEnd + ")" })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label.text), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["style"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["style"])) : createCommentVNode("", true),
                                        unref(diyComponent).mode != "img" ? (openBlock(), createBlock(_component_v_uni_text, {
                                          key: 1,
                                          class: normalizeClass(["graphic-text w-full text-center truncate leading-normal", { "pt16": unref(diyComponent).mode != "text" }]),
                                          style: normalizeStyle({ fontSize: unref(diyComponent).font.size * 2 + "rpx", fontWeight: unref(diyComponent).font.weight, color: unref(diyComponent).font.color })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "style"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"])) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  }, 8, ["style"]),
                  unref(shouldShowIndicator) && swiperHeight.value ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "graphic-nav-indicator-dot"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: normalizeClass(["dots-wrap", [unref(diyComponent).swiper.indicatorAlign]])
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(unref(diyComponent).list.length / (unref(diyComponent).pageCount * unref(diyComponent).rowCount)), (item, index2) => {
                            return openBlock(), createBlock(_component_v_uni_view, {
                              class: normalizeClass(["dot", index2 == swiperIndex.value ? "dot-active" : "", unref(diyComponent).swiper.indicatorStyle]),
                              style: normalizeStyle({ background: index2 == swiperIndex.value ? unref(diyComponent).swiper.indicatorActiveColor : unref(diyComponent).swiper.indicatorColor })
                            }, null, 8, ["class", "style"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })) : unref(diyComponent).layout == "horizontal" && unref(diyComponent).pageCount == 2 && unref(diyComponent).showStyle == "singleSlide" ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 2,
                style: { width: "98%", margin: "0 auto" },
                class: normalizeClass([["graphic-nav multiple-lines", "graphic-nav-" + unref(diyComponent).showStyle], "py-[10rpx]"])
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getSlideRowNum(), (numItem, numIndex) => {
                    return openBlock(), createBlock(_component_v_uni_scroll_view, {
                      class: "graphic-nav-wrap whitespace-nowrap",
                      "scroll-x": unref(diyComponent).showStyle == "singleSlide"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                          return openBlock(), createElementBlock(Fragment, null, [
                            isShowSlideTemp(index2, numItem) ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              onClick: ($event) => unref(diyStore).toRedirect(item.link),
                              style: normalizeStyle(horizontalSingleSlideItemStyle()),
                              class: "graphic-nav-item inline-flex flex-col items-center box-border py-2"
                            }, {
                              default: withCtx(() => [
                                unref(diyComponent).mode != "text" ? (openBlock(), createBlock(_component_v_uni_view, {
                                  key: 0,
                                  class: "graphic-img relative flex items-center justify-center w-10 h-10",
                                  style: normalizeStyle({ width: unref(diyComponent).imageSize * 2 + "rpx", height: unref(diyComponent).imageSize * 2 + "rpx" })
                                }, {
                                  default: withCtx(() => [
                                    item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                      key: 0,
                                      src: unref(img)(item.imageUrl),
                                      mode: "aspectFill",
                                      style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                    }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                      key: 1,
                                      src: unref(img)("static/resource/images/diy/figure.png"),
                                      mode: "aspectFill",
                                      style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                    }, null, 8, ["src", "style"])),
                                    item.label.control ? (openBlock(), createBlock(_component_v_uni_text, {
                                      key: 2,
                                      class: normalizeClass(["tag absolute -top-[10rpx] -right-[24rpx] text-white rounded-[24rpx] rounded-bl-none transform scale-80 py-1 px-2 text-xs"]),
                                      style: normalizeStyle({ color: item.label.textColor, backgroundImage: "linear-gradient(" + item.label.bgColorStart + "," + item.label.bgColorEnd + ")" })
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label.text), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["style"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["style"])) : createCommentVNode("", true),
                                unref(diyComponent).mode != "img" ? (openBlock(), createBlock(_component_v_uni_text, {
                                  key: 1,
                                  class: normalizeClass(["graphic-text w-full text-center truncate leading-normal", { "pt16": unref(diyComponent).mode != "text" }]),
                                  style: normalizeStyle({ fontSize: unref(diyComponent).font.size * 2 + "rpx", fontWeight: unref(diyComponent).font.weight, color: unref(diyComponent).font.color })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "style"])) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      _: 2
                    }, 1032, ["scroll-x"]);
                  }), 256))
                ]),
                _: 1
              }, 8, ["class"])) : (openBlock(), createBlock(_component_v_uni_scroll_view, {
                key: 3,
                "scroll-x": unref(diyComponent).showStyle == "singleSlide",
                class: normalizeClass([["graphic-nav", "graphic-nav-" + unref(diyComponent).showStyle], "py-[10rpx]"])
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: normalizeClass(["graphic-nav-item", { "flex-shrink-0": unref(diyComponent).showStyle == "singleSlide" }]),
                      key: item.id,
                      style: normalizeStyle({ width: 100 / unref(diyComponent).rowCount + "%" })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, {
                          onClick: ($event) => unref(diyStore).toRedirect(item.link),
                          class: "flex flex-col items-center box-border py-2"
                        }, {
                          default: withCtx(() => [
                            unref(diyComponent).mode != "text" ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "graphic-img relative flex items-center justify-center w-10 h-10",
                              style: normalizeStyle({ width: unref(diyComponent).imageSize * 2 + "rpx", height: unref(diyComponent).imageSize * 2 + "rpx" })
                            }, {
                              default: withCtx(() => [
                                item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 0,
                                  src: unref(img)(item.imageUrl),
                                  mode: "aspectFill",
                                  style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 1,
                                  src: unref(img)("static/resource/images/diy/figure.png"),
                                  mode: "aspectFill",
                                  style: normalizeStyle({ maxWidth: unref(diyComponent).imageSize * 2 + "rpx", maxHeight: unref(diyComponent).imageSize * 2 + "rpx", borderRadius: unref(diyComponent).aroundRadius * 2 + "rpx" })
                                }, null, 8, ["src", "style"])),
                                item.label.control ? (openBlock(), createBlock(_component_v_uni_text, {
                                  key: 2,
                                  class: normalizeClass(["tag absolute -top-[10rpx] -right-[24rpx] text-white rounded-[24rpx] rounded-bl-none transform scale-80 py-1 px-2 text-xs"]),
                                  style: normalizeStyle({ color: item.label.textColor, backgroundImage: "linear-gradient(" + item.label.bgColorStart + "," + item.label.bgColorEnd + ")" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["style"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["style"])) : createCommentVNode("", true),
                            unref(diyComponent).mode != "img" ? (openBlock(), createBlock(_component_v_uni_text, {
                              key: 1,
                              class: normalizeClass(["graphic-text w-full text-center truncate leading-normal", { "pt16": unref(diyComponent).mode != "text" }]),
                              style: normalizeStyle({ fontSize: unref(diyComponent).font.size * 2 + "rpx", fontWeight: unref(diyComponent).font.weight, color: unref(diyComponent).font.color })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "style"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["class", "style"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["scroll-x", "class"]))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_404b1788_lang = "";
const index_vue_vue_type_style_index_1_scoped_404b1788_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-404b1788"]]);
export {
  index as default
};
