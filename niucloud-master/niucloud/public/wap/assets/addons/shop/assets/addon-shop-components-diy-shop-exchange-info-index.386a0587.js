/* __addonChunkWindiInjected:addon-shop-components-diy-shop-exchange-info-index_386a0587 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-exchange-info-index_386a0587",".box-border{\n  box-sizing: border-box;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[34rpx\\]{\n  font-size: 1.0625rem;\n}.text-\\[80rpx\\]{\n  font-size: 2.5rem;\n}.leading-\\[48rpx\\]{\n  line-height: 1.5rem;\n}.leading-\\[112rpx\\]{\n  line-height: 3.5rem;\n}.leading-\\[34rpx\\]{\n  line-height: 1.0625rem;\n}.leading-\\[36rpx\\]{\n  line-height: 1.125rem;\n}.mt-\\[10rpx\\]{\n  margin-top: 0.3125rem;\n}.min-h-\\[382rpx\\]{\n  min-height: 11.9375rem;\n}.pl-\\[60rpx\\]{\n  padding-left: 1.875rem;\n}.pt-\\[71rpx\\]{\n  padding-top: 2.21875rem;\n}.pb-\\[133rpx\\]{\n  padding-bottom: 4.15625rem;\n}.pt-\\[42rpx\\]{\n  padding-top: 1.3125rem;\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-\\[\\#FEF2C0\\]{\n  --tw-text-opacity: 1;\n  color: rgba(254, 242, 192, var(--tw-text-opacity));\n}");
/* __addonChunkCssInjected:c8e4b206 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("c8e4b206",".addon-wrap-c8e4b206 .title{width:7.5rem;height:1.8125rem;font-family:FZLanTingHei-EB-GBK;font-weight:700;font-size:1.5rem;line-height:1.75rem;text-align:left;color:transparent;background:linear-gradient(90.0000273208deg,#FFFDF0 5%,#FEF1B9 88%);-webkit-background-clip:text;background-clip:text}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, ref, computed, onMounted, watch, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { d as getExchangePoint } from "./point.12d84476.js";
import { a as useSystemStore, k as useDiyStore, i as img, c as getToken } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "global"],
  setup(__props) {
    const props = __props;
    useSystemStore();
    const diyStore = useDiyStore();
    const loading = ref(true);
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      } else {
        return props.component;
      }
    });
    const warpCss = computed(() => {
      let style = "";
      if (diyComponent.value.bgUrl) {
        style += "background-image:url(" + img(diyComponent.value.bgUrl) + ");";
        style += "background-size: 100%;";
        style += "backgroundPosition: bottom;";
        style += "background-repeat: no-repeat;";
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
    onMounted(() => {
      refresh();
    });
    watch(
      () => diyComponent.value,
      (newValue, oldValue) => {
        refresh();
      },
      { deep: true }
    );
    const memberPoint = ref({});
    const token = ref(getToken());
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        memberPoint.value = {
          point: 10500,
          today_point: 500
        };
      } else {
        if (!token) {
          return;
        }
        getExchangePointFn();
      }
    };
    const getExchangePointFn = async () => {
      const res = await getExchangePoint();
      memberPoint.value = res.data;
      loading.value = false;
    };
    computed(() => {
      let style = "";
      return style;
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "shop-exchange-info-wrap"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "pl-[60rpx] pt-[71rpx] pb-[133rpx] min-h-[382rpx] box-border text-[#fff]" }, {
            default: withCtx(() => [
              token.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(_component_v_uni_view, { class: "text-[34rpx] leading-[48rpx]" }, {
                  default: withCtx(() => [
                    createTextVNode("我的积分")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "text-[80rpx] font-500 price-font leading-[112rpx]" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(memberPoint.value.point || 0), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "text-[24rpx] font-400 leading-[34rpx]" }, {
                  default: withCtx(() => [
                    createTextVNode("今日获得：" + toDisplayString(memberPoint.value.today_point || 0), 1)
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(_component_v_uni_view, { class: "pt-[42rpx] title" }, {
                  default: withCtx(() => [
                    createTextVNode("积分当钱花")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "text-[26rpx] leading-[36rpx] text-[#FEF2C0] mt-[10rpx]" }, {
                  default: withCtx(() => [
                    createTextVNode("做任务可领积分")
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
const index_vue_vue_type_style_index_0_scoped_c8e4b206_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8e4b206"]]);
export {
  index as default
};
