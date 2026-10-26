/* __addonChunkWindiInjected:addon-shop-components-diy-shop-search-index_928d411b */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-search-index_928d411b",".bg-\\[var\\(--temp-bg\\)\\]{\n  background-color: var(--temp-bg);\n}.rounded-\\[32rpx\\]{\n  border-radius: 1rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.h-\\[40rpx\\]{\n  height: 1.25rem;\n}.h-\\[60rpx\\]{\n  height: 1.875rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.ml-\\[24rpx\\]{\n  margin-left: 0.75rem;\n}.opacity-90{\n  opacity: 0.9;\n}.overflow-hidden{\n  overflow: hidden;\n}.py-\\[10rpx\\]{\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n}.pl-\\[38rpx\\]{\n  padding-left: 1.1875rem;\n}.pr-\\[32rpx\\]{\n  padding-right: 1rem;\n}.relative{\n  position: relative;\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.w-\\[40rpx\\]{\n  width: 1.25rem;\n}");
import { c as createSelectorQuery, i as index$g, b as index$q, a as index$i } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import { defineComponent, computed, onMounted, watch, getCurrentInstance, ref, nextTick, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
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
            if (newValue && newValue.componentName == "ShopSearch") {
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
        query.select(".diy-shop-search").boundingClientRect((data) => {
          height.value = data.height;
        }).exec();
      });
    };
    const toLink = (url) => {
      if (diyStore.mode == "decorate")
        return false;
      redirect({ url });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "diy-shop-search relative overflow-hidden flex items-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_image, {
                src: unref(img)("addon/shop/diy/search_01.png"),
                class: "w-[40rpx] h-[40rpx]",
                mode: "widthFix",
                onClick: _cache[0] || (_cache[0] = ($event) => toLink("/addon/shop/pages/goods/category"))
              }, null, 8, ["src"]),
              createVNode(_component_v_uni_view, {
                class: "flex-1 ml-[24rpx] rounded-[32rpx] flex items-center bg-[var(--temp-bg)] opacity-90 py-[10rpx] pl-[38rpx] pr-[32rpx] justify-between h-[60rpx] box-border",
                onClick: _cache[1] || (_cache[1] = ($event) => toLink("/addon/shop/pages/goods/search"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "text-[var(--text-color-light9)] text-[26rpx]" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(diyComponent).text), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-sousuo-duanV6xx1 text-[24rpx]" })
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
export {
  _sfc_main as default
};
