/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-detail-evaluate-index_151c3715 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-detail-evaluate-index_151c3715",".flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.h-\\[40rpx\\]{\n  height: 1.25rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-\\[36rpx\\]{\n  line-height: 1.125rem;\n}.mt-\\[16rpx\\]{\n  margin-top: 0.5rem;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.\\!mb-\\[0\\]{\n  margin-bottom: 0 !important;\n}.mr-\\[50rpx\\]{\n  margin-right: 1.5625rem;\n}.max-h-\\[72rpx\\]{\n  max-height: 2.25rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.w-full{\n  width: 100%;\n}.w-\\[540rpx\\]{\n  width: 16.875rem;\n}.w-\\[80rpx\\]{\n  width: 2.5rem;\n}");
/* __addonChunkCssInjected:ee3d7faf */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("ee3d7faf",".addon-wrap-ee3d7faf .card-template,.addon-wrap-ee3d7faf .card-template[data-v-eb88db48],.addon-wrap-ee3d7faf .card-template[data-v-13afdc84]{background-color:transparent!important;border-radius:0!important}");
import { f as previewImage, a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./text.99ce2b32.js";
import { _ as __easycom_0 } from "./u-avatar.2109a9f3.js";
import { defineComponent, computed, ref, onMounted, watch, resolveDynamicComponent, unref, openBlock, createBlock, normalizeStyle, withCtx, createVNode, normalizeClass, createTextVNode, toDisplayString, createCommentVNode, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { m as getEvaluateList } from "./goods.3180989e.js";
import { u as useGoodsDetailStore } from "./goodsDetail.65390551.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-text.ae347f6f.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./button.fdf0e29d.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
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
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        const obj = {
          evaluate_is_show: true,
          goods: { goods_type: "real" },
          goods_id: ""
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
    const evaluate = ref({
      count: 0
    });
    const getEvaluateListFn = () => {
      getEvaluateList(diyComponent.value.goods_id).then((res) => {
        evaluate.value = res.data;
      });
    };
    const toLink = () => {
      redirect({ url: "/addon/shop/pages/evaluate/list", param: { goods_id: diyComponent.value.goods_id } });
    };
    const imgListPreview = (item, index2) => {
      if (Array.isArray(item)) {
        if (!item.length)
          return false;
        var urlList = item;
        previewImage({
          indicator: "number",
          current: index2,
          loop: true,
          urls: urlList
        });
      } else {
        if (item === "")
          return false;
        var urlList = [];
        urlList.push(img(item));
        previewImage({
          indicator: "number",
          loop: true,
          urls: urlList
        });
      }
    };
    onMounted(() => {
      if (diyStore.mode == "decorate") {
        evaluate.value = {
          list: [
            {
              member_head: "",
              member_name: "用户01",
              content: "超级良心，值得信赖！",
              image_mid: []
            },
            {
              member_head: "",
              member_name: "用户01",
              content: "质量非常棒，服务也很到位！",
              image_mid: []
            }
          ],
          count: 2
        };
      } else {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailEvaluate") {
              if (!diyComponent.value.isShow) {
                emits("update:componentIsShow", false);
              } else {
                emits("update:componentIsShow", true);
              }
            }
          },
          { immediate: true }
        );
        getEvaluateListFn();
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_u_avatar = resolveEasycom(resolveDynamicComponent("u-avatar"), __easycom_0);
      const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      return unref(diyComponent) && unref(diyComponent).goods && Object.keys(unref(diyComponent).goods).length ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          unref(diyComponent).evaluate_is_show ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "card-template"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: normalizeClass(["flex items-center justify-between min-h-[40rpx]", { "mb-[30rpx]": evaluate.value && evaluate.value.list && evaluate.value.list.length }])
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "title !mb-[0]" }, {
                    default: withCtx(() => [
                      createTextVNode("宝贝评价(" + toDisplayString(evaluate.value.count) + ")", 1)
                    ]),
                    _: 1
                  }),
                  evaluate.value.count ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "h-[40rpx] flex items-center",
                    onClick: _cache[0] || (_cache[0] = ($event) => toLink(unref(diyComponent).goods_id))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, { class: "text-[24rpx] text-[var(--text-color-light9)]" }, {
                        default: withCtx(() => [
                          createTextVNode("查看全部")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)]" })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !evaluate.value.count ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 1,
                    class: "text-[24rpx] text-[var(--text-color-light6)]"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("暂无评价")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(evaluate.value.list, (item, index2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: normalizeClass({ "pb-[34rpx]": index2 != evaluate.value.list.length - 1 }),
                      key: index2
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "flex items-center w-full" }, {
                          default: withCtx(() => [
                            createVNode(_component_u_avatar, {
                              "default-url": unref(img)("static/resource/images/default_headimg.png"),
                              src: unref(img)(item.member_head),
                              size: "50rpx",
                              leftIcon: "none"
                            }, null, 8, ["default-url", "src"]),
                            createVNode(_component_v_uni_text, { class: "ml-[10rpx] text-[28rpx] text-[#333]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.member_name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, { class: "flex justify-between w-full mt-[16rpx]" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex-1 w-[540rpx] text-[26rpx] text-[#333] max-h-[72rpx] leading-[36rpx] multi-hidden mr-[50rpx]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.content), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "w-[80rpx] shrink-0" }, {
                              default: withCtx(() => [
                                item.image_mid && item.image_mid.length ? (openBlock(), createBlock(_component_up_image, {
                                  key: 0,
                                  width: "80rpx",
                                  height: "80rpx",
                                  radius: "var(--goods-rounded-mid)",
                                  src: unref(img)(item.image_mid[0]),
                                  model: "aspectFill",
                                  onClick: ($event) => imgListPreview(item.images[0])
                                }, {
                                  error: withCtx(() => [
                                    createVNode(_component_u_icon, {
                                      name: "photo",
                                      color: "#999",
                                      size: "50"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["src", "onClick"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ee3d7faf_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee3d7faf"]]);
export {
  index as default
};
