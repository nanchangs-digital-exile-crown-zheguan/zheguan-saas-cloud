/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-detail-sow-index_40ee4d28 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-detail-sow-index_40ee4d28",".rounded-\\[20rpx\\]{\n  border-radius: 0.625rem;\n}.flex{\n  display: flex;\n}.grid{\n  display: grid;\n}.items-center{\n  align-items: center;\n}.justify-between{\n  justify-content: space-between;\n}.h-\\[160rpx\\]{\n  height: 5rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.ml-\\[6rpx\\]{\n  margin-left: 0.1875rem;\n}.mt-\\[24rpx\\]{\n  margin-top: 0.75rem;\n}.ml-\\[8rpx\\]{\n  margin-left: 0.25rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.w-\\[160rpx\\]{\n  width: 5rem;\n}.gap-\\[15rpx\\]{\n  gap: 0.46875rem;\n}.grid-cols-4{\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}");
/* __addonChunkCssInjected:13afdc84 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("13afdc84",".addon-wrap-13afdc84 .card-template[data-v-ee3d7faf],.addon-wrap-13afdc84 .card-template[data-v-eb88db48],.addon-wrap-13afdc84 .card-template{background-color:transparent!important;border-radius:0!important}");
import "./text.99ce2b32.js";
import { a as index$i, i as index$g, b as index$q } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { defineComponent, ref, computed, onMounted, watch, nextTick, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { u as useGoodsDetailStore } from "./goodsDetail.65390551.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "value"],
  emits: ["update:componentIsShow"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const diyStore = useDiyStore();
    const treasureId = ref(null);
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        const obj = {
          sow_show_list: {
            count: 2,
            list: [
              {
                content_cover: "static/resource/images/diy/shop_default.jpg"
              },
              {
                content_cover: "static/resource/images/diy/shop_default.jpg"
              }
            ]
          }
        };
        return Object.assign({}, obj, diyStore.value[props.index]);
      } else {
        return Object.assign({}, props.component, useGoodsDetailStore().goodsDetail);
      }
    });
    const warpCss = computed(() => {
      let style = "";
      style += "position:relative;";
      if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
        style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
      else
        style += "background-color:" + (diyComponent.value.componentStartBgColor || diyComponent.value.componentEndBgColor) + ";";
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
    const extractTreasureId = (url) => {
      const match = url.match(/treasure_id=(\d+)/);
      return match ? match[1] : null;
    };
    const toLink = () => {
      redirect({ url: "/addon/sow_community/pages/sow_show", param: { treasure_id: treasureId.value } });
    };
    const handleClick = (item) => {
      if (item.content_type == 1) {
        redirect({ url: "/addon/sow_community/pages/image/detail", param: { content_id: item.content_id } });
      } else {
        redirect({ url: "/addon/sow_community/pages/video/detail", param: { content_id: item.content_id } });
      }
    };
    onMounted(() => {
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            emits("update:componentIsShow", false);
            if (newValue && newValue.componentName == "ShopGoodsDetailSow") {
              nextTick(() => {
              });
            }
          }
        );
      } else {
        if (diyComponent.value.sow_show_list && diyComponent.value.sow_show_list.url) {
          treasureId.value = extractTreasureId(diyComponent.value.sow_show_list.url);
        }
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailSow") {
              if (diyComponent.value.sow_show_list && Object.keys(diyComponent.value.sow_show_list).length && diyComponent.value.sow_show_list.list && Object.keys(diyComponent.value.sow_show_list.list).length) {
                emits("update:componentIsShow", true);
              } else {
                emits("update:componentIsShow", false);
              }
            }
          },
          { immediate: true }
        );
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          unref(diyComponent).sow_show_list && unref(diyComponent).sow_show_list.list && unref(diyComponent).sow_show_list.list.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "card-template"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "flex justify-between items-center",
                onClick: toLink
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "text-[30rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode("种草秀")
                        ]),
                        _: 1
                      }),
                      unref(diyComponent).sow_show_list.count ? (openBlock(), createBlock(_component_v_uni_text, {
                        key: 0,
                        class: "ml-[6rpx] text-[24rpx] text-[var(--text-color-light9)]"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" (" + toDisplayString(unref(diyComponent).sow_show_list.count) + ") ", 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light6)] ml-[8rpx]" })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "grid grid-cols-4 gap-[15rpx] mt-[24rpx]" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).sow_show_list.list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: "w-[160rpx] h-[160rpx]",
                      key: index2,
                      onClick: ($event) => handleClick(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_image, {
                          src: unref(img)(item.content_cover),
                          mode: "aspectFill",
                          class: "w-[160rpx] h-[160rpx] rounded-[20rpx]"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_13afdc84_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13afdc84"]]);
export {
  index as default
};
