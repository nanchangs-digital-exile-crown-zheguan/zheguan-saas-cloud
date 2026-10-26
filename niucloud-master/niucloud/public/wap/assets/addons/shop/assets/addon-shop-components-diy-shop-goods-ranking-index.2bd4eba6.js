/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-ranking-index_2bd4eba6 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-ranking-index_2bd4eba6",".border-\\[var\\(--primary-color\\)\\]{\n  border-color: var(--primary-color);\n}.rounded-\\[var\\(--goods-rounded-big\\)\\]{\n  border-radius: var(--goods-rounded-big);\n}.border-solid{\n  border-style: solid;\n}.border-\\[2rpx\\]{\n  border-width: 0.0625rem;\n}.inline-block{\n  display: inline-block;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-start{\n  align-items: flex-start;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.font-500{\n  font-weight: 500;\n}.font-bold{\n  font-weight: 700;\n}.h-\\[130rpx\\]{\n  height: 4.0625rem;\n}.h-\\[36rpx\\]{\n  height: 1.125rem;\n}.h-\\[50rpx\\]{\n  height: 1.5625rem;\n}.h-\\[30rpx\\]{\n  height: 0.9375rem;\n}.text-\\[20rpx\\]{\n  font-size: 0.625rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.text-\\[40rpx\\]{\n  font-size: 1.25rem;\n}.\\!text-\\[24rpx\\]{\n  font-size: 0.75rem !important;\n}.leading-\\[1\\.3\\]{\n  line-height: 1.3;\n}.mt-\\[auto\\]{\n  margin-top: auto;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.mt-\\[24rpx\\]{\n  margin-top: 0.75rem;\n}.mt-\\[6rpx\\]{\n  margin-top: 0.1875rem;\n}.mr-\\[16rpx\\]{\n  margin-right: 0.5rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.p-\\[6rpx\\]{\n  padding: 0.1875rem;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.top-\\[2rpx\\]{\n  top: 0.0625rem;\n}.top-\\[6rpx\\]{\n  top: 0.1875rem;\n}.left-\\[8rpx\\]{\n  left: 0.25rem;\n}.left-\\[-3rpx\\]{\n  left: -0.09375rem;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-\\[var\\(--primary-color\\)\\]{\n  color: var(--primary-color);\n}.whitespace-normal{\n  white-space: normal;\n}.whitespace-nowrap{\n  white-space: nowrap;\n}.w-\\[290rpx\\]{\n  width: 9.0625rem;\n}.w-\\[30rpx\\]{\n  width: 0.9375rem;\n}.w-\\[130rpx\\]{\n  width: 4.0625rem;\n}.w-\\[50rpx\\]{\n  width: 1.5625rem;\n}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, a as index$i, i as index$g, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import { defineComponent, computed, watch, reactive, onMounted, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./scroll-view.29370e9b.js";
import { k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { c as getRankComponentsGoodsList } from "./rank.38c04b78.js";
import { u as useGoods } from "./useGoods.5d805636.js";
import "./u-icon.ceb3960f.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const diyGoods = useGoods();
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
    const swiperItemCss = (data) => {
      let style = "";
      if (data.listFrame.startColor) {
        if (data.listFrame.startColor && data.listFrame.endColor)
          style += "background: linear-gradient(90deg, " + data.listFrame.startColor + ", " + data.listFrame.endColor + ");";
        else
          style = "background-color:" + data.listFrame.startColor + ";";
      }
      if (data.bgUrl) {
        style += "background-image:url(" + img(data.bgUrl) + ");";
        style += "background-size: 100%;";
        style += "background-repeat: no-repeat;";
      }
      if (diyComponent.value.topElementRounded)
        style += "border-top-left-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
      if (diyComponent.value.topElementRounded)
        style += "border-top-right-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
      if (diyComponent.value.bottomElementRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
      if (diyComponent.value.bottomElementRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
      return style;
    };
    watch(
      () => diyComponent.value,
      (newValue, oldValue) => {
        refresh();
      },
      { deep: true }
    );
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        if (diyComponent.value && diyComponent.value.componentName == "ShopGoodsRanking") {
          const fakeGoods = {
            goods_name: "商品名称",
            goods_cover_thumb_mid: "",
            goodsSku: {
              show_price: 10
            },
            rank_num: 0
            // 初始化为 0，后续会递增
          };
          diyComponent.value.list.forEach((item) => {
            if (!item.goodsList) {
              item.goodsList = [];
            }
            if (item.goodsList.length === 0) {
              const fakeGoodsList = [];
              for (let i = 0; i < 3; i++) {
                const newItem = { ...fakeGoods, rank_num: i + 1 };
                fakeGoodsList.push(newItem);
              }
              listGoods[item.rankIds[0]] = fakeGoodsList;
            }
          });
        }
      } else {
        getRankGoodsListFn();
      }
    };
    const listGoods = reactive({});
    const listGoodsNames = reactive({});
    const getRankGoodsListFn = () => {
      diyComponent.value.list.forEach((item) => {
        const rank_id = Array.isArray(item.rankIds) ? item.rankIds[0] : 0;
        const data = {
          rank_id: item.source === "custom" ? rank_id : 0
        };
        getRankComponentsGoodsList(data).then((res) => {
          if (res.data && res.data.goods_list && res.data.goods_list.length > 0) {
            listGoods[item.rankIds[0]] = res.data.goods_list;
            listGoodsNames[item.rankIds[0]] = res.data.name;
          }
        }).catch((error) => {
          console.error("获取商品数据失败:", error);
        });
      });
    };
    function getRankBadge(sort) {
      switch (sort) {
        case 1:
          return img("addon/shop/rank/rank_first.png");
        case 2:
          return img("addon/shop/rank/rank_second.png");
        case 3:
          return img("addon/shop/rank/rank_third.png");
        default:
          return img("addon/shop/rank/rank.png");
      }
    }
    const toDetail = (id) => {
      redirect({ url: "/addon/shop/pages/goods/detail", param: { goods_id: id }, mode: "navigateTo" });
    };
    onMounted(() => {
      refresh();
    });
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_5);
      const _component_v_uni_scroll_view = ScrollView;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "overflow-hidden"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_scroll_view, {
            "scroll-x": "true",
            class: "w-[100%] whitespace-nowrap"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "flex items-start" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      class: "inline-block",
                      key: index
                    }, {
                      default: withCtx(() => [
                        listGoods[item.rankIds[0]] && listGoods[item.rankIds[0]].length > 0 ? (openBlock(), createBlock(_component_v_uni_view, {
                          key: 0,
                          class: normalizeClass(["w-[460rpx] px-[20rpx] pb-[20rpx] pt-[20rpx] flex flex-col items-start", { "mr-[20rpx]": unref(diyComponent).list.length - 1 != index }]),
                          style: normalizeStyle(swiperItemCss(item))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex items-center h-[50rpx]" }, {
                              default: withCtx(() => [
                                item.imgUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 0,
                                  class: "w-[30rpx] h-[30rpx] mr-[10rpx]",
                                  src: unref(img)(item.imgUrl),
                                  mode: "aspectFill"
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode(_component_v_uni_view, {
                                  style: normalizeStyle({ "color": item.textColor })
                                }, {
                                  default: withCtx(() => [
                                    item.text ? (openBlock(), createBlock(_component_v_uni_text, {
                                      key: 0,
                                      class: "text-[30rpx] font-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock(_component_v_uni_text, {
                                      key: 1,
                                      class: "text-[30rpx] font-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(listGoodsNames[item.rankIds[0]]), 1)
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ]),
                                  _: 2
                                }, 1032, ["style"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, {
                              class: "flex items-center mt-[6rpx]",
                              style: normalizeStyle({ "color": item.subTitle.textColor }),
                              onClick: ($event) => unref(diyStore).toRedirect(item.subTitle.link)
                            }, {
                              default: withCtx(() => [
                                item.subTitle.text ? (openBlock(), createBlock(_component_v_uni_text, {
                                  key: 0,
                                  class: "text-[24rpx] font-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.subTitle.text), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                item.subTitle.text ? (openBlock(), createBlock(_component_v_uni_text, {
                                  key: 1,
                                  class: "iconfont iconyouV6xx !text-[24rpx]"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["style", "onClick"]),
                            createVNode(_component_v_uni_view, { class: "mt-[24rpx]" }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(listGoods[item.rankIds[0]], (goods, gIndex) => {
                                  return openBlock(), createBlock(_component_v_uni_view, {
                                    class: normalizeClass(["flex bg-[rgba(255,255,255,0.94)] p-[10rpx] rounded-[16rpx] mb-[16rpx]", { "mb-0": gIndex === listGoods[item.rankIds[0]].length - 1 }]),
                                    onClick: ($event) => toDetail(goods.goods_id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, { class: "relative w-[130rpx] h-[130rpx] mr-[16rpx]" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_uni_image, {
                                            class: "absolute top-[6rpx] left-[8rpx] w-[30rpx] h-[36rpx]",
                                            style: { zIndex: 2 },
                                            src: getRankBadge(goods.rank_num),
                                            mode: "aspectFill"
                                          }, null, 8, ["src"]),
                                          createVNode(_component_v_uni_view, {
                                            class: "absolute top-[2rpx] left-[-3rpx] flex items-center justify-center w-[50rpx] h-[50rpx]",
                                            style: { zIndex: 3 }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_text, { class: "text-[20rpx] font-bold text-[#fff]" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(goods.rank_num), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_up_image, {
                                            radius: "var(--goods-rounded-big)",
                                            width: "130rpx",
                                            height: "130rpx",
                                            src: unref(img)(goods.goods_cover_thumb_mid || ""),
                                            mode: unref(diyComponent).mode
                                          }, {
                                            error: withCtx(() => [
                                              createVNode(_component_v_uni_image, {
                                                class: "w-[130rpx] h-[130rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",
                                                src: unref(img)("static/resource/images/diy/shop_default.jpg"),
                                                mode: "aspectFill"
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1032, ["src", "mode"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_uni_view, { class: "flex flex-col" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_uni_view, { class: "leading-[1.3] multi-hidden w-[290rpx] text-[28rpx] whitespace-normal" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(goods.goods_name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_uni_view, { class: "flex items-center justify-between mt-[auto]" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_uni_view, { class: "text-[var(--price-text-color)] price-font flex items-baseline" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_uni_text, { class: "text-[24rpx] font-500" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("￥")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_uni_text, { class: "text-[40rpx] font-500" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(diyGoods).goodsPrice(goods).toFixed(2).split(".")[0]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_uni_text, { class: "text-[24rpx] font-500" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("." + toDisplayString(unref(diyGoods).goodsPrice(goods).toFixed(2).split(".")[1]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_uni_view, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_uni_text, { class: "iconfont icongouwuche3 text-[var(--primary-color)] border-[2rpx] border-solid border-[var(--primary-color)] rounded-[50%] text-[22rpx] p-[6rpx]" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["class", "style"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
