/* __addonChunkWindiInjected:app-components-diy-text-index_6398e107 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-text-index_6398e107",".flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.h-\\[24rpx\\]{\n  height: 0.75rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.leading-\\[1\\]{\n  line-height: 1;\n}.mx-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n  margin-right: 0.3125rem;\n}.ml-auto{\n  margin-left: auto;\n}.max-w-\\[200rpx\\]{\n  max-width: 6.25rem;\n}.max-w-\\[300rpx\\]{\n  max-width: 9.375rem;\n}.px-\\[20rpx\\]{\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}.px-\\[var\\(--pad-sidebar-m\\)\\]{\n  padding-left: var(--pad-sidebar-m);\n  padding-right: var(--pad-sidebar-m);\n}.relative{\n  position: relative;\n}.text-right{\n  text-align: right;\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[2rpx\\]{\n  width: 0.0625rem;\n}");
import { c as createSelectorQuery, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { defineComponent, computed, onMounted, watch, getCurrentInstance, ref, nextTick, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
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
    const textStyle1 = computed(() => {
      return {
        fontSize: diyComponent.value.fontSize * 2 + "rpx",
        color: diyComponent.value.textColor,
        fontWeight: diyComponent.value.fontWeight === "normal" ? 500 : diyComponent.value.fontWeight,
        textAlign: diyComponent.value.textAlign
      };
    });
    const textStyle2 = computed(() => {
      return {
        fontSize: diyComponent.value.fontSize * 2 + "rpx",
        color: diyComponent.value.textColor,
        fontWeight: diyComponent.value.fontWeight === "normal" ? 500 : diyComponent.value.fontWeight
      };
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
            if (newValue && newValue.componentName == "Text") {
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
        query.select(".diy-text").boundingClientRect((data) => {
          height.value = data.height;
        }).exec();
      });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "diy-text relative" }, {
            default: withCtx(() => [
              unref(diyComponent).style == "style-1" ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "px-[var(--pad-sidebar-m)]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).link))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "leading-[1]",
                        style: normalizeStyle(unref(textStyle1))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).text), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(diyComponent).style == "style-2" ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "px-[20rpx] flex items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).link))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "max-w-[200rpx] truncate leading-[1]",
                        style: normalizeStyle(unref(textStyle2))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).text), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }),
                  unref(diyComponent).subTitle.text ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 0,
                    style: normalizeStyle({ background: unref(diyComponent).subTitle.color }),
                    class: "mx-[10rpx] w-[2rpx] h-[24rpx] opacity-70"
                  }, null, 8, ["style"])) : createCommentVNode("", true),
                  createVNode(_component_v_uni_text, {
                    class: "max-w-[300rpx] truncate",
                    style: normalizeStyle({ color: unref(diyComponent).subTitle.color, fontSize: unref(diyComponent).subTitle.fontSize * 2 + "rpx" })
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).subTitle.text), 1)
                    ]),
                    _: 1
                  }, 8, ["style"]),
                  unref(diyComponent).more.isShow ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "ml-auto text-right",
                    style: normalizeStyle({ color: unref(diyComponent).more.color })
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        onClick: _cache[2] || (_cache[2] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).more.link)),
                        class: "flex items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, { class: "max-w-[200rpx] truncate text-[26rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(diyComponent).more.text), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_text, {
                            class: "nc-iconfont nc-icon-youV6xx text-[24rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).more.color })
                          }, null, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
