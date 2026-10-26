/* __addonChunkWindiInjected:app-components-diy-rich-text-index_9c8e3dd3 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-rich-text-index_9c8e3dd3",".font-bold{\n  font-weight: 700;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.pl-\\[10rpx\\]{\n  padding-left: 0.3125rem;\n}.relative{\n  position: relative;\n}.italic{\n  font-style: italic;\n}.line-through{\n  text-decoration-line: line-through;\n}");
import { c as createSelectorQuery, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_1 } from "./u-parse.86a7da80.js";
import { defineComponent, computed, onMounted, watch, getCurrentInstance, ref, nextTick, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, createTextVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./video.aeba19b1.js";
import "./_plugin-vue_export-helper.cc2b3d55.js";
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
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "RichText") {
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
        query.select(".diy-rich-text").boundingClientRect((data) => {
          height.value = data.height;
        }).exec();
      });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_parse = resolveEasycom(resolveDynamicComponent("u-parse"), __easycom_1);
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "diy-rich-text relative" }, {
            default: withCtx(() => [
              unref(diyComponent).html && unref(diyComponent).html != "<p><br></p>" ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_u_parse, {
                    content: unref(diyComponent).html,
                    tagStyle: { img: "vertical-align: top;" }
                  }, null, 8, ["content"])
                ]),
                _: 1
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(_component_v_uni_view, null, {
                  default: withCtx(() => [
                    createTextVNode("点此编辑『富文本』内容 ——>")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("你可以对文字进行")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("加粗")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "italic" }, {
                      default: withCtx(() => [
                        createTextVNode("斜体")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "underline" }, {
                      default: withCtx(() => [
                        createTextVNode("下划线")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "line-through" }, {
                      default: withCtx(() => [
                        createTextVNode("删除线")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、文字")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { style: { "color": "rgb(0, 176, 240)" } }, {
                      default: withCtx(() => [
                        createTextVNode("颜色")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { style: { "background-color": "rgb(255, 192, 0)", "color": "rgb(255, 255, 255)" } }, {
                      default: withCtx(() => [
                        createTextVNode("背景色")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("、以及字号")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode("大")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "text-sm" }, {
                      default: withCtx(() => [
                        createTextVNode("小")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { class: "pl-[10rpx]" }, {
                      default: withCtx(() => [
                        createTextVNode("等简单排版操作。")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, null, {
                  default: withCtx(() => [
                    createTextVNode("也可在这里插入图片、并对图片加上超级链接，方便用户点击。")
                  ]),
                  _: 1
                })
              ], 64))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
