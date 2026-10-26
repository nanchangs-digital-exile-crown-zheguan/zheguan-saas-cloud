/* __addonChunkWindiInjected:app-components-diy-picture-show-index_d0ac4ace */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-picture-show-index_d0ac4ace",".bg-\\[\\#fff\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.rounded-\\[30rpx\\]{\n  border-radius: 0.9375rem;\n}.rounded-\\[12rpx\\]{\n  border-radius: 0.375rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.h-\\[28rpx\\]{\n  height: 0.875rem;\n}.h-\\[22rpx\\]{\n  height: 0.6875rem;\n}.h-\\[44rpx\\]{\n  height: 1.375rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.mx-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n  margin-right: 0.3125rem;\n}.mb-\\[16rpx\\]{\n  margin-bottom: 0.5rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.p-\\[20rpx\\]{\n  padding: 0.625rem;\n}.pt-\\[6rpx\\]{\n  padding-top: 0.1875rem;\n}.pb-\\[30rpx\\]{\n  padding-bottom: 0.9375rem;\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[2rpx\\]{\n  width: 0.0625rem;\n}.w-\\[auto\\]{\n  width: auto;\n}.w-\\[102rpx\\]{\n  width: 3.1875rem;\n}");
/* __addonChunkCssInjected:ca5708fb */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("ca5708fb",".addon-wrap-ca5708fb }.mr10{margin-right:.3125rem}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { defineComponent, computed, onMounted, watch, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createCommentVNode, createTextVNode, toDisplayString, createElementBlock, Fragment, renderList, normalizeClass } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
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
  props: ["component", "index", "global", "scrollBool"],
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
    const warpCss = computed(() => {
      let style = "";
      if (diyComponent.value.componentStartBgColor) {
        if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
          style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
        else
          style += "background-color:" + diyComponent.value.componentStartBgColor + ";";
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
    const moduleOneCss = computed(() => {
      let style = "";
      if (diyComponent.value.moduleOne.listFrame) {
        if (diyComponent.value.moduleOne.listFrame.startColor && diyComponent.value.moduleOne.listFrame.endColor)
          style += `background:linear-gradient(${diyComponent.value.moduleOne.listFrame.startColor},${diyComponent.value.moduleOne.listFrame.endColor});`;
      }
      if (diyComponent.value.moduleRounded.topRounded)
        style += "border-top-left-radius:" + diyComponent.value.moduleRounded.topRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.topRounded)
        style += "border-top-right-radius:" + diyComponent.value.moduleRounded.topRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.bottomRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.moduleRounded.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.bottomRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.moduleRounded.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        style += "width: calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 20rpx) / 2);";
      else
        style += "width: calc((100vw - 20rpx) / 2 );";
      return style;
    });
    const moduleTwoCss = computed(() => {
      let style = "";
      if (diyComponent.value.moduleTwo.listFrame) {
        if (diyComponent.value.moduleTwo.listFrame.startColor && diyComponent.value.moduleTwo.listFrame.endColor)
          style += `background:linear-gradient(${diyComponent.value.moduleTwo.listFrame.startColor},${diyComponent.value.moduleTwo.listFrame.endColor});`;
      }
      if (diyComponent.value.moduleRounded.topRounded)
        style += "border-top-left-radius:" + diyComponent.value.moduleRounded.topRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.topRounded)
        style += "border-top-right-radius:" + diyComponent.value.moduleRounded.topRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.bottomRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.moduleRounded.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.moduleRounded.bottomRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.moduleRounded.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.margin && diyComponent.value.margin.both)
        style += "width: calc((100vw - " + diyComponent.value.margin.both * 4 + "rpx - 20rpx) / 2);";
      else
        style += "width: calc((100vw - 20rpx) / 2 );";
      return style;
    });
    const moduleBtnCss = (data) => {
      let style = "";
      if (data.btnTitle.color) {
        style += "color:" + data.btnTitle.color + ";";
      }
      if (diyComponent.value.moduleTwo.listFrame.startColor && diyComponent.value.moduleTwo.listFrame.endColor)
        style += `background:linear-gradient(${data.btnTitle.startColor},${data.btnTitle.endColor});`;
      return style;
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "PictureShow") {
              refresh();
            }
          }
        );
      }
    });
    const refresh = () => {
    };
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "flex justify-between overflow-hidden"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "p-[20rpx] box-border overflow-hidden",
            style: normalizeStyle(unref(moduleOneCss))
          }, {
            default: withCtx(() => [
              unref(diyComponent).moduleOne.head.textImg || unref(diyComponent).moduleOne.head.subText ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "flex items-center pb-[30rpx] pt-[6rpx]"
              }, {
                default: withCtx(() => [
                  unref(diyComponent).moduleOne.head.textImg ? (openBlock(), createBlock(_component_v_uni_image, {
                    key: 0,
                    class: "h-[28rpx]",
                    src: unref(img)(unref(diyComponent).moduleOne.head.textImg),
                    mode: "heightFix"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  unref(diyComponent).moduleOne.head.textImg && unref(diyComponent).moduleOne.head.subText ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 1,
                    class: "w-[2rpx] mx-[10rpx] h-[22rpx]",
                    style: normalizeStyle({ "backgroundColor": unref(diyComponent).moduleOne.head.subTextColor })
                  }, null, 8, ["style"])) : createCommentVNode("", true),
                  unref(diyComponent).moduleOne.head.subText ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 2,
                    class: "text-[22rpx] truncate max-w-[164rpx]",
                    style: normalizeStyle({ color: unref(diyComponent).moduleOne.head.subTextColor })
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).moduleOne.head.subText), 1)
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).moduleOne.list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: index2,
                      class: normalizeClass(["flex flex-col items-center", { "mr10": index2 == 0 }]),
                      onClick: ($event) => unref(diyStore).toRedirect(item.link)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "bg-[#fff] flex items-center justify-center w-[148rpx] h-[148rpx] rounded-[12rpx] mb-[16rpx]" }, {
                          default: withCtx(() => [
                            item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                              key: 0,
                              class: "w-[102rpx] h-[102rpx]",
                              src: unref(img)(item.imageUrl),
                              mode: "aspectFill"
                            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_u_icon, {
                              key: 1,
                              name: "photo",
                              color: "#999",
                              size: "50"
                            }))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, {
                          class: "w-[132rpx] h-[44rpx] rounded-[30rpx] flex items-center justify-center text-[22rpx]",
                          style: normalizeStyle(moduleBtnCss(item))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.btnTitle.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"]),
          createVNode(_component_v_uni_view, {
            class: "p-[20rpx] box-border overflow-hidden",
            style: normalizeStyle(unref(moduleTwoCss))
          }, {
            default: withCtx(() => [
              unref(diyComponent).moduleTwo.head.textImg || unref(diyComponent).moduleTwo.head.subText ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "flex items-center pb-[30rpx] pt-[6rpx]"
              }, {
                default: withCtx(() => [
                  unref(diyComponent).moduleTwo.head.textImg ? (openBlock(), createBlock(_component_v_uni_image, {
                    key: 0,
                    class: "h-[28rpx] w-[auto]",
                    src: unref(img)(unref(diyComponent).moduleTwo.head.textImg),
                    mode: "heightFix"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  unref(diyComponent).moduleTwo.head.textImg && unref(diyComponent).moduleTwo.head.subText ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 1,
                    class: "w-[2rpx] mx-[10rpx] h-[22rpx]",
                    style: normalizeStyle({ "backgroundColor": unref(diyComponent).moduleTwo.head.subTextColor })
                  }, null, 8, ["style"])) : createCommentVNode("", true),
                  unref(diyComponent).moduleTwo.head.subText ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 2,
                    class: "text-[22rpx] truncate max-w-[164rpx]",
                    style: normalizeStyle({ color: unref(diyComponent).moduleTwo.head.subTextColor })
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).moduleTwo.head.subText), 1)
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).moduleTwo.list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: index2,
                      class: normalizeClass(["flex flex-col items-center", { "mr10": index2 == 0 }]),
                      onClick: ($event) => unref(diyStore).toRedirect(item.link)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "bg-[#fff] flex items-center justify-center w-[148rpx] h-[148rpx] rounded-[12rpx] mb-[16rpx]" }, {
                          default: withCtx(() => [
                            item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                              key: 0,
                              class: "w-[102rpx] h-[102rpx]",
                              src: unref(img)(item.imageUrl),
                              mode: "aspectFill"
                            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_u_icon, {
                              key: 1,
                              name: "photo",
                              color: "#999",
                              size: "50"
                            }))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, {
                          class: "w-[132rpx] h-[44rpx] rounded-[30rpx] flex items-center justify-center text-[22rpx]",
                          style: normalizeStyle(moduleBtnCss(item))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.btnTitle.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ca5708fb_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca5708fb"]]);
export {
  index as default
};
