/* __addonChunkWindiInjected:select-store_vue_vue_type_script_setup_true_lang_7f6e195f */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("select-store_vue_vue_type_script_setup_true_lang_7f6e195f",".bg-\\[\\#ddd\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(221, 221, 221, var(--tw-bg-opacity));\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.font-normal{\n  font-weight: 400;\n}.h-\\[50vh\\]{\n  height: 50vh;\n}.h-\\[42rpx\\]{\n  height: 1.3125rem;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.leading-\\[1\\.4\\]{\n  line-height: 1.4;\n}.mx-\\[24rpx\\]{\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}.mr-\\[20rpx\\]{\n  margin-right: 0.625rem;\n}.mt-\\[12rpx\\]{\n  margin-top: 0.375rem;\n}.mr-\\[12rpx\\]{\n  margin-right: 0.375rem;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.mb-\\[20rpx\\]{\n  margin-bottom: 0.625rem;\n}.p-\\[var\\(--popup-sidebar-m\\)\\]{\n  padding: var(--popup-sidebar-m);\n}.pt-0{\n  padding-top: 0px;\n}.text-\\[\\#666\\]{\n  --tw-text-opacity: 1;\n  color: rgba(102, 102, 102, var(--tw-text-opacity));\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.w-\\[1rpx\\]{\n  width: 0.03125rem;\n}.w-\\[42rpx\\]{\n  width: 1.3125rem;\n}");
/* __addonChunkCssInjected:394143d6 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("394143d6",".addon-wrap-394143d6 .u-empty,.addon-wrap-394143d6 .u-empty__wrap,.addon-wrap-394143d6 .u-tabs,.addon-wrap-394143d6 .u-tabs__wrapper,.addon-wrap-394143d6 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-394143d6 .u-tabs__wrapper__scroll-view,.addon-wrap-394143d6 .u-tabs__wrapper__nav,.addon-wrap-394143d6 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-394143d6 .u-empty{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center}.addon-wrap-394143d6 .u-empty__text,.addon-wrap-394143d6 .u-slot-wrap{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:.625rem}");
import { b as index$q, a as index$i, i as index$g, G as makePhoneCall, j as getStorageSync, a4 as getLocation, s as showToast, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, createCommentVNode, defineComponent, ref, reactive, createElementBlock, Fragment, renderList, normalizeClass, unref } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3$1 } from "./u-icon.ceb3960f.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, e as deepMerge, a as addStyle } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { c as getStoreList } from "./order.b87aedbd.js";
import { n as isWeixinBrowser, i as img } from "./common.f536f441.js";
import { w as wechat } from "./wechat.1afe9cea.js";
const props = {
  props: {
    // 内置图标名称，或图片路径，建议绝对路径
    icon: {
      type: String,
      default: () => defProps.empty.icon
    },
    // 提示文字
    text: {
      type: String,
      default: () => defProps.empty.text
    },
    // 文字颜色
    textColor: {
      type: String,
      default: () => defProps.empty.textColor
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: () => defProps.empty.textSize
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: () => defProps.empty.iconColor
    },
    // 图标的大小
    iconSize: {
      type: [String, Number],
      default: () => defProps.empty.iconSize
    },
    // 选择预置的图标类型
    mode: {
      type: String,
      default: () => defProps.empty.mode
    },
    //  图标宽度，单位px
    width: {
      type: [String, Number],
      default: () => defProps.empty.width
    },
    // 图标高度，单位px
    height: {
      type: [String, Number],
      default: () => defProps.empty.height
    },
    // 是否显示组件
    show: {
      type: Boolean,
      default: () => defProps.empty.show
    },
    // 组件距离上一个元素之间的距离，默认px单位
    marginTop: {
      type: [String, Number],
      default: () => defProps.empty.marginTop
    }
  }
};
const uEmpty_vue_vue_type_style_index_0_scoped_394143d6_lang = "";
const _sfc_main$1 = {
  name: "u-empty",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      icons: {
        car: "购物车为空",
        page: "页面不存在",
        search: "没有搜索结果",
        address: "没有收货地址",
        wifi: "没有WiFi",
        order: "订单为空",
        coupon: "没有优惠券",
        favor: "暂无收藏",
        permission: "无权限",
        history: "无历史记录",
        news: "无新闻列表",
        message: "消息列表为空",
        list: "列表为空",
        data: "数据为空",
        comment: "暂无评论"
      }
    };
  },
  computed: {
    // 组件样式
    emptyStyle() {
      const style = {};
      style.marginTop = addUnit(this.marginTop);
      return deepMerge(addStyle(this.customStyle), style);
    },
    // 文本样式
    textStyle() {
      const style = {};
      style.color = this.textColor;
      style.fontSize = addUnit(this.textSize);
      return style;
    },
    // 判断icon是否图片路径
    isSrc() {
      return this.icon.indexOf("/") >= 0;
    }
  },
  methods: {
    addUnit
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3$1);
  const _component_v_uni_image = index$q;
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return _ctx.show ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: "u-empty",
    style: normalizeStyle([$options.emptyStyle])
  }, {
    default: withCtx(() => [
      !$options.isSrc ? (openBlock(), createBlock(_component_u_icon, {
        key: 0,
        name: _ctx.mode === "message" ? "chat" : `empty-${_ctx.mode}`,
        size: _ctx.iconSize,
        color: _ctx.iconColor,
        "margin-top": "14"
      }, null, 8, ["name", "size", "color"])) : (openBlock(), createBlock(_component_v_uni_image, {
        key: 1,
        style: normalizeStyle({
          width: $options.addUnit(_ctx.width),
          height: $options.addUnit(_ctx.height)
        }),
        src: _ctx.icon,
        mode: "widthFix"
      }, null, 8, ["style", "src"])),
      createVNode(_component_v_uni_text, {
        class: "u-empty__text",
        style: normalizeStyle([$options.textStyle])
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]), 1)
        ]),
        _: 1
      }, 8, ["style"]),
      _ctx.$slots.default || _ctx.$slots.$default ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 2,
        class: "u-empty__wrap"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      })) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["style"])) : createCommentVNode("", true);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-394143d6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select-store",
  emits: ["confirm"],
  setup(__props, { expose, emit: emits }) {
    const show = ref(false);
    const loaded = ref(false);
    const loading = ref(true);
    const storeList = ref([]);
    const store = ref(null);
    const latlng = reactive({
      lat: 0,
      lng: 0
    });
    const distanceFn = (distance) => {
      const dist = typeof distance === "string" ? parseFloat(distance) : distance;
      if (isNaN(dist))
        return distance.toString();
      return dist < 1 ? parseInt((dist * 1e3).toString()) + "m" : dist.toFixed(1) + "km";
    };
    const distanceVal = (item) => {
      if (item == null ? void 0 : item.distance) {
        return distanceFn(item.distance);
      }
      return "";
    };
    if (isWeixinBrowser()) {
      wechat.init();
    }
    const getAddress = (data) => {
      if (isWeixinBrowser()) {
        wechat.openLocation({
          latitude: Number(data.latitude),
          longitude: Number(data.longitude),
          name: data.full_address,
          address: data.full_address
        });
      }
    };
    const callFn = (data) => {
      makePhoneCall({
        phoneNumber: data,
        success: (res) => {
        },
        fail: (res) => {
        }
      });
    };
    const open = (data) => {
      storeList.value = data.store_list || [];
      store.value = data.take_store || storeList.value[0] || null;
      loading.value = false;
      show.value = true;
    };
    const getStoreListFn = (callback) => {
      if (!loaded.value) {
        loaded.value = true;
        if (getStorageSync("location_address")) {
          let location_address = getStorageSync("location_address");
          latlng.lat = location_address.latitude;
          latlng.lng = location_address.longitude;
        } else {
          getLocation({
            type: "gcj02",
            success: (res) => {
              latlng.lat = res.latitude;
              latlng.lng = res.longitude;
            },
            fail: (res) => {
              if (res.errno) {
                if (res.errno == 104) {
                  let msg = "用户未授权隐私权限，获取位置失败";
                  console.log(msg);
                } else if (res.errno == 112) {
                  let msg = "隐私协议中未声明，获取位置失败";
                  console.log(msg);
                }
              }
              if (res.errMsg) {
                if (res.errMsg.indexOf("getLocation:fail") != -1 || res.errMsg.indexOf("deny") != -1 || res.errMsg.indexOf("denied") != -1) {
                  let msg = "用户未授权获取位置权限，将无法提供距离最近的门店";
                  console.log(msg);
                } else {
                  console.log(res.errMsg);
                }
              }
            }
          });
        }
        setTimeout(() => {
          getStoreList({ latlng }).then(({ data }) => {
            storeList.value = data;
            if (data.length) {
              selectStore(data[0]);
            }
            if (typeof callback == "function") {
              callback(data);
            }
            loading.value = false;
          }).catch(() => {
            loading.value = false;
          });
        }, 1500);
      }
    };
    const selectStore = (data) => {
      if (store.value) {
        store.value = store.value.store_id != data.store_id ? data : null;
      } else {
        store.value = data;
      }
    };
    const confirm = () => {
      if (!store.value) {
        showToast({ title: "请选择自提点", icon: "none" });
        return;
      }
      emits("confirm", store.value);
      store.value = null;
      show.value = false;
    };
    expose({
      open,
      getData: getStoreListFn
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
      const _component_u_empty = resolveEasycom(resolveDynamicComponent("u-empty"), __easycom_3);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        onClose: _cache[0] || (_cache[0] = ($event) => show.value = false),
        mode: "bottom",
        round: 10
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "popup-common" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("请选择门店")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "h-[50vh]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "p-[var(--popup-sidebar-m)] pt-0 text-sm" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(storeList.value, (item) => {
                        return openBlock(), createBlock(_component_v_uni_view, {
                          class: normalizeClass(["card-template mt-[var(--top-m)] border-1 border-[#eee] border-solid mb-[var(--top-m)]", { "!border-primary bg-[var(--primary-color-light2)]": store.value && store.value.store_id == item.store_id }]),
                          onClick: ($event) => selectStore(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex items-center mb-[20rpx]" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "flex-1 using-hidden text-[30rpx] text-[#333]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.store_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                item.hasOwnProperty("distance") ? (openBlock(), createBlock(_component_v_uni_view, {
                                  key: 0,
                                  class: "flex-shrink-0 ml-[20rpx] text-[#999] text-[24rpx] font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(distanceVal(item)), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "flex items-center justify-between" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_view, { class: "text-[22rpx] leading-[1.4] text-[#666]" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-dizhiguanliV6xx text-[26rpx] mr-[12rpx]" }),
                                        createVNode(_component_v_uni_text, { class: "flex-shrink-0" }, {
                                          default: withCtx(() => [
                                            createTextVNode("门店地址：")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_uni_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.full_address), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_uni_view, { class: "mt-[12rpx] text-[22rpx] text-[#666]" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-shijianV6xx text-[26rpx] mr-[12rpx]" }),
                                        createVNode(_component_v_uni_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode("营业时间：" + toDisplayString(item.trade_time), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_uni_view, { class: "w-[1rpx] h-[42rpx] bg-[#ddd] mx-[24rpx]" }),
                                createVNode(_component_v_uni_view, { class: "flex-shrink-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_image, {
                                      onClick: ($event) => callFn(item.store_mobile),
                                      class: "w-[42rpx] h-[42rpx] mr-[20rpx]",
                                      src: unref(img)("addon/shop/payment/phone.png"),
                                      mode: "heightFix"
                                    }, null, 8, ["onClick", "src"]),
                                    createVNode(_component_v_uni_image, {
                                      onClick: ($event) => getAddress(item),
                                      class: "w-[42rpx] h-[42rpx]",
                                      src: unref(img)("addon/shop/payment/navigation.png"),
                                      mode: "heightFix"
                                    }, null, 8, ["onClick", "src"])
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
                    _: 1
                  }),
                  loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "h-[50vh] flex items-center flex-col justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_loading_icon, { vertical: true })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !loading.value && !storeList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "h-[95%] flex items-center flex-col justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_empty, {
                        text: "没有可选择的门店",
                        width: "214",
                        icon: unref(img)("static/resource/images/empty.png")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "btn-wrap" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, {
                    class: "primary-btn-bg btn",
                    onClick: confirm
                  }, {
                    default: withCtx(() => [
                      createTextVNode("确认")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
export {
  _sfc_main as _,
  __easycom_3 as a
};
