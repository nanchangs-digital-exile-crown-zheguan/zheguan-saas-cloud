/* __addonChunkWindiInjected:addon-shop-components-diy-shop-goods-detail-bottom-index_9f6d0687 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-goods-detail-bottom-index_9f6d0687",".\\!bg-\\[\\#ccc\\]{\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(204, 204, 204, var(--tw-bg-opacity)) !important;\n}.rounded-full{\n  border-radius: 9999px;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.\\!h-\\[70rpx\\]{\n  height: 2.1875rem !important;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[36rpx\\]{\n  font-size: 1.125rem;\n}.text-\\[38rpx\\]{\n  font-size: 1.1875rem;\n}.text-\\[18rpx\\]{\n  font-size: 0.5625rem;\n}.leading-\\[70rpx\\]{\n  line-height: 2.1875rem;\n}.\\!m-0{\n  margin: 0px !important;\n}.mt-\\[6rpx\\]{\n  margin-top: 0.1875rem;\n}.mr-\\[38rpx\\]{\n  margin-right: 1.1875rem;\n}.\\!mr-\\[16rpx\\]{\n  margin-right: 0.5rem !important;\n}.overflow-hidden{\n  overflow: hidden;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.bottom-0{\n  bottom: 0px;\n}.left-0{\n  left: 0px;\n}.right-0{\n  right: 0px;\n}.top-0{\n  top: 0px;\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.\\!text-\\[\\#fff\\]{\n  --tw-text-opacity: 1 !important;\n  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}.\\!w-\\[420rpx\\]{\n  width: 13.125rem !important;\n}.z-10{\n  z-index: 10;\n}");
/* __addonChunkCssInjected:9b8d9d79 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("9b8d9d79",".addon-wrap-9b8d9d79 .kefu-unread-wrap{position:relative;display:inline-flex;line-height:1}.addon-wrap-9b8d9d79 .kefu-unread-badge{position:absolute;top:-.25rem;right:-.3125rem;min-width:.75rem;height:.75rem;line-height:.75rem;padding:0 .1875rem;font-size:.5625rem;color:#fff;text-align:center;background:#FF0000;border-radius:.875rem;box-sizing:border-box;z-index:1}");
import { a as index$i, i as index$g, s as showToast, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./button.fdf0e29d.js";
import { ref, computed, watch, defineComponent, onMounted, openBlock, createBlock, withCtx, renderSlot, unref, createTextVNode, toDisplayString, createCommentVNode, nextTick, createVNode, normalizeStyle, normalizeClass, createElementBlock, Fragment } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, a as useSystemStore, u as useMemberStore, d as request, i as img, r as redirect } from "./common.f536f441.js";
import { c as cancelCollect, o as collect } from "./goods.3180989e.js";
import { u as useGoodsDetailStore } from "./goodsDetail.65390551.js";
import { d as onShow } from "./uni-app.es.9cb86cc0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
function isShopCustomerInstalled() {
  const systemStore = useSystemStore();
  const siteInfo = systemStore.site || {};
  const keys = [];
  [...siteInfo.apps || [], ...siteInfo.site_addons || []].forEach((item) => {
    if (typeof item === "string")
      keys.push(item);
    else if (item == null ? void 0 : item.key)
      keys.push(item.key);
  });
  if (typeof siteInfo.app == "string" && siteInfo.app) {
    keys.push(...siteInfo.app.split(","));
  }
  const siteApps = systemStore.siteApps;
  if (typeof siteApps === "string" && siteApps) {
    keys.push(...siteApps.split(","));
  } else if (Array.isArray(siteApps)) {
    siteApps.forEach((k) => {
      if (typeof k === "string")
        keys.push(k);
      else if (k == null ? void 0 : k.key)
        keys.push(k.key);
    });
  }
  if (Array.isArray(systemStore.siteAddons)) {
    keys.push(...systemStore.siteAddons.filter(Boolean));
  }
  return keys.includes("shop_customer");
}
function useShopCustomerUnread(options) {
  const kefuUnread = ref(0);
  const diyStore = useDiyStore();
  const systemStore = useSystemStore();
  const memberStore = useMemberStore();
  const userInfo = computed(() => memberStore.info);
  const loadKefuUnread = async () => {
    var _a;
    if (diyStore.mode == "decorate" || !isShopCustomerInstalled() || !userInfo.value) {
      kefuUnread.value = 0;
      return;
    }
    try {
      const res = await request.get("shop_customer/unread_count");
      kefuUnread.value = Number((_a = res.data) == null ? void 0 : _a.count) || 0;
    } catch {
      kefuUnread.value = 0;
    }
  };
  if ((options == null ? void 0 : options.autoOnShow) !== false) {
    onShow(() => {
      loadKefuUnread();
    });
  }
  watch(
    () => [systemStore.site, systemStore.initStatus, userInfo.value],
    () => {
      if (systemStore.initStatus === "finish" && userInfo.value && isShopCustomerInstalled()) {
        loadKefuUnread();
      }
    },
    { immediate: true }
  );
  return { kefuUnread, loadKefuUnread, isShopCustomerInstalled };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "kefu-unread-badge",
  setup(__props) {
    const { kefuUnread, loadKefuUnread } = useShopCustomerUnread();
    onMounted(() => {
      loadKefuUnread();
    });
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { class: "kefu-unread-wrap" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          unref(kefuUnread) > 0 ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 0,
            class: "kefu-unread-badge"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(kefuUnread) > 99 ? "99+" : unref(kefuUnread)), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const kefuUnreadBadge_vue_vue_type_style_index_0_scoped_9b8d9d79_lang = "";
const KefuUnreadBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9b8d9d79"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "value", "global"],
  emits: ["loadingFn", "update:componentIsShow"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const diyStore = useDiyStore();
    const sendMessageTitle = ref("");
    const sendMessagePath = ref("");
    const sendMessageImg = ref("");
    const memberStore = useMemberStore();
    const userInfo = computed(() => memberStore.info);
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        const obj = {
          goods: {
            sow_show_list: ""
          }
        };
        return Object.assign({}, obj, diyStore.value[props.index]);
      } else {
        return Object.assign({}, props.component, useGoodsDetailStore().goodsDetail);
      }
    });
    const diyGlobal = computed(() => {
      return props.global;
    });
    const warpCss = computed(() => {
      let style = "";
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
    const buyBtnStyle = computed(() => {
      let style = "";
      if (diyComponent.value.buyStyle.startColor && diyComponent.value.buyStyle.endColor)
        style += `background:linear-gradient(${diyComponent.value.buyStyle.gradientAngle},${diyComponent.value.buyStyle.startColor},${diyComponent.value.buyStyle.endColor});`;
      else
        style += "background-color:" + (diyComponent.value.buyStyle.startColor || diyComponent.value.buyStyle.endColor) + ";";
      if (diyComponent.value.buyStyle.textColor)
        style += "color:" + diyComponent.value.buyStyle.textColor + ";";
      if (diyComponent.value.buyStyle.fontSize)
        style += "font-size:" + diyComponent.value.buyStyle.fontSize * 2 + "rpx;";
      if (diyComponent.value.goods.goods_type == "real" || diyComponent.value.goods.goods_type == "virtual" && diyComponent.value.goods.virtual_receive_type != "verify") {
        style += "width:200rpx !important;";
      } else {
        style += "width:400rpx !important;";
      }
      return style;
    });
    const cartBtnStyle = computed(() => {
      let style = "";
      if (diyComponent.value.cartStyle.startColor && diyComponent.value.cartStyle.endColor)
        style += `background:linear-gradient(${diyComponent.value.cartStyle.gradientAngle}, ${diyComponent.value.cartStyle.startColor},${diyComponent.value.cartStyle.endColor});`;
      else
        style += "background-color:" + (diyComponent.value.cartStyle.startColor || diyComponent.value.cartStyle.endColor) + ";";
      if (diyComponent.value.cartStyle.textColor)
        style += "color:" + diyComponent.value.cartStyle.textColor + ";";
      if (diyComponent.value.cartStyle.fontSize)
        style += "font-size:" + diyComponent.value.cartStyle.fontSize * 2 + "rpx;";
      return style;
    });
    const isCollect = ref(0);
    const collectFn = () => {
      if (!userInfo.value) {
        showToast({
          title: "未登录，请先登录后再收藏商品",
          icon: "none"
        });
        return false;
      }
      let api = isCollect.value ? cancelCollect({ goods_ids: [diyComponent.value.goods_id] }) : collect(diyComponent.value.goods_id);
      api.then((res) => {
        isCollect.value = !isCollect.value;
        if (isCollect.value) {
          showToast({
            title: "收藏成功",
            icon: "none"
          });
        } else {
          showToast({
            title: "取消收藏",
            icon: "none"
          });
        }
      });
    };
    const maxBuy = ref(-1);
    const goodsMaxBuy = (data = {}) => {
      if (data.goods.is_limit && userInfo.value && data.goods.stock > 0) {
        if (data.goods.max_buy) {
          let max_buy = 0;
          if (data.goods.limit_type == 1) {
            max_buy = data.goods.max_buy;
          } else {
            let buyVal = data.goods.max_buy - (data.goods.has_buy || 0);
            max_buy = buyVal > 0 ? buyVal : 0;
          }
          if (max_buy > data.goods.stock) {
            maxBuy.value = data.goods.stock;
          } else if (max_buy <= data.goods.stock) {
            maxBuy.value = max_buy;
          }
        }
      }
    };
    const isShowSingleSku = computed(() => {
      let isSingleSpec = false;
      diyComponent.value.skuList.forEach((item, index2) => {
        if (item.sku_spec_format) {
          isSingleSpec = true;
        }
      });
      if (!isSingleSpec && diyComponent.value.stock <= 0) {
        return false;
      } else if (!isSingleSpec && diyComponent.value.stock > 0) {
        return true;
      }
      return true;
    });
    const buyFn = (type) => {
      useGoodsDetailStore().setGoodsDetail({ isOpenSkuBuy: true, skuBuyType: type });
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailBottom") {
              nextTick(() => {
                var _a, _b, _c;
                menuContent.value = typeof ((_a = diyComponent.value) == null ? void 0 : _a.menuContent) == "object" ? (_b = diyComponent.value) == null ? void 0 : _b.menuContent : (_c = diyComponent.value) == null ? void 0 : _c.menuContent.split(",");
              });
            }
          }
        );
      } else {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
          }
        );
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "ShopGoodsDetailBottom") {
              refresh();
              emits("update:componentIsShow", true);
            }
          },
          { immediate: true }
        );
        initFn();
      }
      goodsMaxBuy(diyComponent.value);
    });
    const menuContent = ref([]);
    const initFn = () => {
      var _a, _b, _c;
      isCollect.value = diyComponent.value.goods.is_collect;
      sendMessageTitle.value = diyComponent.value.goods.goods_name;
      sendMessagePath.value = "/addon/shop/pages/goods/detail?sku_id=" + diyComponent.value.sku_id;
      if (diyComponent.value.type) {
        sendMessagePath.value += "&type=" + diyComponent.value.type;
      }
      sendMessageImg.value = img(diyComponent.value.goods.goods_cover_thumb_mid);
      menuContent.value = typeof ((_a = diyComponent.value) == null ? void 0 : _a.menuContent) == "object" ? (_b = diyComponent.value) == null ? void 0 : _b.menuContent : (_c = diyComponent.value) == null ? void 0 : _c.menuContent.split(",");
    };
    const openShareFn = () => {
      useGoodsDetailStore().setGoodsDetail({ isOpenSharePoster: true });
    };
    const refresh = () => {
      var _a, _b, _c;
      menuContent.value = typeof ((_a = diyComponent.value) == null ? void 0 : _a.menuContent) == "object" ? (_b = diyComponent.value) == null ? void 0 : _b.menuContent : (_c = diyComponent.value) == null ? void 0 : _c.menuContent.split(",");
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_button = index$x;
      return unref(diyComponent) && unref(diyComponent).goods && Object.keys(unref(diyComponent).goods).length ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "overflow-hidden relative"
      }, {
        default: withCtx(() => [
          unref(diyStore).mode != "decorate" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "tab-bar-placeholder"
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(warpCss)),
            class: normalizeClass(["border-[0] border-t-[2rpx] border-solid border-[#f5f5f5] w-[100%] flex justify-between pl-[32rpx] pr-[4rpx] box-border tab-bar z-10 items-center", { "fixed left-0 bottom-0": unref(diyStore).mode != "decorate" }])
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "flex items-center" }, {
                default: withCtx(() => [
                  menuContent.value.includes("index") ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "flex flex-col justify-center items-center mr-[38rpx]",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(redirect)({ url: "/addon/shop/pages/index", mode: "reLaunch" }))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "nc-iconfont nc-icon-shouyeV6xx11 text-[36rpx]" }),
                      createVNode(_component_v_uni_text, { class: "text-[18rpx] mt-[6rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode("首页")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  menuContent.value.includes("service") ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "flex flex-col justify-center items-center mr-[38rpx]",
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(redirect)({ url: "/app/pages/member/contact", param: { send_title: sendMessageTitle.value, send_path: encodeURIComponent(sendMessagePath.value), send_img: encodeURIComponent(sendMessageImg.value) } }))
                  }, {
                    default: withCtx(() => [
                      createVNode(KefuUnreadBadge, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, { class: "nc-iconfont text-[36rpx] nc-icon-kefuV6xx-1 text-[#303133]" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, { class: "text-[18rpx] mt-[6rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode("客服")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  menuContent.value.includes("cart") ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 2,
                    class: "flex flex-col justify-center items-center mr-[38rpx]",
                    onClick: _cache[2] || (_cache[2] = ($event) => unref(redirect)({ url: "/addon/shop/pages/goods/cart" }))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "iconfont icongouwuche2 text-[38rpx]" }),
                      createVNode(_component_v_uni_text, { class: "text-[18rpx] mt-[6rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode("购物车")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  menuContent.value.includes("collect") ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 3,
                    class: "flex flex-col justify-center items-center mr-[38rpx]",
                    onClick: collectFn
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, {
                        class: normalizeClass(["nc-iconfont text-[36rpx]", { "text-[#ff0000] nc-icon-xihuanV6mm": isCollect.value, "text-[#303133] nc-icon-guanzhuV6xx": !isCollect.value }])
                      }, null, 8, ["class"]),
                      createVNode(_component_v_uni_text, { class: "text-[18rpx] mt-[6rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode("收藏")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  menuContent.value.includes("share") ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 4,
                    class: "flex flex-col justify-center items-center mr-[38rpx]",
                    onClick: openShareFn
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, { class: "nc-iconfont text-[36rpx] nc-icon-fenxiangV6xx text-[#303133]" }),
                      createVNode(_component_v_uni_text, { class: "text-[18rpx] mt-[6rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode("分享")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              unref(diyComponent).goods.status == 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "flex flex-1"
              }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    unref(diyComponent).goods.is_gift ? (openBlock(), createBlock(_component_v_uni_button, {
                      key: 0,
                      class: "!w-[420rpx] flex-1 !h-[70rpx] font-500 text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[70rpx] rounded-full remove-border"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("商品为赠品不可购买")
                      ]),
                      _: 1
                    })) : maxBuy.value > 0 || maxBuy.value == -1 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      ((_b = (_a = unref(diyGlobal)) == null ? void 0 : _a.goodsParameter) == null ? void 0 : _b.type) != "newcomer_discount" && (unref(diyComponent).goods.goods_type == "real" || unref(diyComponent).goods.goods_type == "virtual" && unref(diyComponent).goods.virtual_receive_type != "verify") && unref(diyComponent).cartIsShow ? (openBlock(), createBlock(_component_v_uni_button, {
                        key: 0,
                        class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !m-0 !mr-[16rpx] leading-[70rpx] rounded-full remove-border",
                        onClick: _cache[3] || (_cache[3] = ($event) => buyFn("join_cart")),
                        style: normalizeStyle(unref(cartBtnStyle))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).cartName), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true),
                      unref(isShowSingleSku) ? (openBlock(), createBlock(_component_v_uni_button, {
                        key: 1,
                        class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !m-0 !mr-[16rpx] leading-[70rpx] rounded-full remove-border",
                        style: normalizeStyle(unref(buyBtnStyle)),
                        onClick: _cache[4] || (_cache[4] = ($event) => buyFn("buy_now"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).buyName), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])) : (openBlock(), createBlock(_component_v_uni_button, {
                        key: 2,
                        style: normalizeStyle({ width: unref(diyComponent).goods.goods_type == "real" || unref(diyComponent).goods.goods_type == "virtual" && unref(diyComponent).goods.virtual_receive_type != "verify" ? "200rpx" : "400rpx!important" }),
                        class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 !mr-[16rpx] leading-[70rpx] rounded-full remove-border"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("已售罄")
                        ]),
                        _: 1
                      }, 8, ["style"]))
                    ], 64)) : maxBuy.value == 0 ? (openBlock(), createBlock(_component_v_uni_button, {
                      key: 2,
                      style: { width: "420rpx!important" },
                      class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[70rpx] rounded-full remove-border"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("已达限购数量")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              })) : unref(diyStore).mode == "decorate" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                unref(diyComponent).cartIsShow ? (openBlock(), createBlock(_component_v_uni_button, {
                  key: 0,
                  class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !m-0 !mr-[16rpx] leading-[70rpx] rounded-full remove-border",
                  style: normalizeStyle(unref(cartBtnStyle))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(diyComponent).cartName), 1)
                  ]),
                  _: 1
                }, 8, ["style"])) : createCommentVNode("", true),
                createVNode(_component_v_uni_button, {
                  class: "flex-1 !h-[70rpx] font-500 text-[26rpx] !m-0 !mr-[16rpx] leading-[70rpx] rounded-full remove-border",
                  style: normalizeStyle(unref(buyBtnStyle)),
                  onClick: _cache[5] || (_cache[5] = ($event) => buyFn("buy_now"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(diyComponent).buyName), 1)
                  ]),
                  _: 1
                }, 8, ["style"])
              ], 64)) : (openBlock(), createBlock(_component_v_uni_view, {
                key: 2,
                class: "flex flex-1"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, { class: "w-[100%] !h-[70rpx] font-500 text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[70rpx] rounded-full remove-border" }, {
                    default: withCtx(() => [
                      createTextVNode("该商品已下架")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ]),
            _: 1
          }, 8, ["style", "class"]),
          unref(diyStore).mode == "decorate" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "absolute z-10 top-0 right-0 bottom-0 left-0"
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_40b5e3f5_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40b5e3f5"]]);
export {
  index as default
};
