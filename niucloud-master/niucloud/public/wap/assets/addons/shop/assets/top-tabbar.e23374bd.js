/* __addonChunkWindiInjected:top-tabbar_e23374bd */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("top-tabbar_e23374bd",".text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.absolute{\n  position: absolute;\n}");
/* __addonChunkCssInjected:8eebd269 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("8eebd269",".addon-wrap-8eebd269 .style-1,.addon-wrap-8eebd269 .style-2,.addon-wrap-8eebd269 .style-3{display:none}.addon-wrap-8eebd269 .u-navbar{width:100%;transition:background .3s;left:0;right:0;top:0;z-index:991}.addon-wrap-8eebd269 .navbar-inner{display:flex;justify-content:space-between;position:relative;align-items:center}.addon-wrap-8eebd269 .back-wrap{padding-right:.3125rem;line-height:1;margin-left:-.5rem;font-size:.8125rem}.addon-wrap-8eebd269 .back-wrap .iconfont{font-size:1.25rem}.addon-wrap-8eebd269 .content-wrap{display:flex;align-items:center;justify-content:flex-start;flex:1;position:absolute;left:0;right:0;top:0;height:1.875rem;text-align:center;flex-shrink:0}.addon-wrap-8eebd269 .title-wrap{line-height:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:1rem;color:#000}.addon-wrap-8eebd269 .ns-navbar-wrap.style-2 .content-wrap .title-wrap{display:flex;align-items:center;text-align:left}.addon-wrap-8eebd269 .ns-navbar-wrap.style-2 .content-wrap .title-wrap>uni-view{height:1.75rem;line-height:1.75rem;max-width:9.375rem;font-size:.875rem}.addon-wrap-8eebd269 .ns-navbar-wrap.style-2 .content-wrap .title-wrap>uni-view uni-image{width:100%;height:100%;margin-right:.625rem}.addon-wrap-8eebd269 .ns-navbar-wrap.style-2 .content-wrap .title-wrap>uni-view:last-child{max-width:9.375rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.addon-wrap-8eebd269 .ns-navbar-wrap.style-3 .content-wrap .title-wrap{height:1.4375rem;max-width:9.375rem;flex:initial;text-align:center;margin-right:.3125rem}.addon-wrap-8eebd269 .ns-navbar-wrap.style-3 .content-wrap .title-wrap uni-image{height:100%;width:100%}.addon-wrap-8eebd269 .ns-navbar-wrap.style-3 .content-wrap .search{flex:1;padding-right:.625rem;padding-left:1.9375rem;position:relative;background-color:#fff;text-align:left;border-radius:1.875rem;height:1.875rem;line-height:1.875rem;border:1px solid #eeeeee;color:#666;display:flex;align-items:center;margin-right:.3125rem;overflow:hidden;box-sizing:border-box}.addon-wrap-8eebd269 .ns-navbar-wrap.style-3 .content-wrap .search uni-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.addon-wrap-8eebd269 .ns-navbar-wrap.style-3 .content-wrap .search .iconfont{color:#909399;font-size:1rem;margin-right:.3125rem}.addon-wrap-8eebd269 .ns-navbar-wrap.style-4 .content-wrap{top:0;text-align:left;padding-left:.9375rem;padding-top:.3125rem;padding-bottom:.3125rem}.addon-wrap-8eebd269 .ns-navbar-wrap.style-4 .content-wrap .title-wrap{flex:none;margin:0 .3125rem;max-width:11.25rem;font-size:.84375rem;line-height:normal}.addon-wrap-8eebd269 .ns-navbar-wrap.style-4 .content-wrap .nearby-store-name{margin:0 .3125rem;background:rgba(0,0,0,.2);font-size:.6875rem;border-radius:1.25rem;padding:.3125rem .625rem;line-height:1}");
import { z as removeStorageSync, j as getStorageSync, n as setStorageSync, m as getCurrentPages$1, q as navigateBack, c as createSelectorQuery, i as index$g, b as index$q, a as index$i } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import { defineComponent, computed, ref, getCurrentInstance, onMounted, unref, openBlock, createBlock, normalizeClass, withCtx, createVNode, normalizeStyle, createCommentVNode, createTextVNode, toDisplayString, withModifiers, nextTick } from "/wap/assets/shared/vue.js";
import { a as useSystemStore, n as isWeixinBrowser, O as getAddressByLatlng, P as openMapSelector, k as useDiyStore, e as currRoute, i as img, r as redirect } from "./common.f536f441.js";
import { o as onLoad } from "./uni-app.es.9cb86cc0.js";
import { w as wechat } from "./wechat.1afe9cea.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function useLocation(isOpenLocation) {
  const systemStore = useSystemStore();
  let isOpen = isOpenLocation;
  if (systemStore.mapConfig.is_open != 1) {
    isOpen = false;
  }
  const onLoadLifeCycle = (callback = "") => {
    onLoad((option) => {
      if (option && option.latng) {
        getAddressByLatlngFn(option.latng);
      }
      removeStorageSync("manually_select_location_from_map");
      typeof callback == "function" && callback(option);
    });
  };
  const init = () => {
    if (!isOpen)
      return false;
    if (!getStorageSync("manually_select_location_from_map")) {
      if (isWeixinBrowser() && systemStore.mapConfig.is_open && !getStorageSync("location_address")) {
        wechat.init(() => {
          wechat.getLocation((res) => {
            let latlng = res.latitude + "," + res.longitude;
            getAddressByLatlngFn(latlng);
          });
        });
      }
    }
  };
  const refreshLocation = () => {
    if (!isOpen)
      return false;
    if (!getStorageSync("manually_select_location_from_map") && getStorageSync("location_address")) {
      if (locationStorage() && !locationStorage().is_expired) {
        systemStore.setAddressInfo(getStorageSync("location_address"));
      } else {
        removeStorageSync("location_address");
      }
    }
    if (!getStorageSync("manually_select_location_from_map") && locationStorage() && locationStorage().is_expired) {
      init();
    }
  };
  const getAddressByLatlngFn = (latlng = "") => {
    if (!isOpen)
      return false;
    let data = { latlng: "" };
    if (latlng) {
      data.latlng = latlng;
    } else {
      data.latlng = systemStore.diyAddressInfo.latitude + "," + systemStore.diyAddressInfo.longitude;
    }
    getAddressByLatlng(data).then((res) => {
      if (res.data && Object.keys(res.data).length) {
        let obj = {};
        let latlngArr = data.latlng.split(",");
        obj.latitude = latlngArr[0];
        obj.longitude = latlngArr[1];
        obj.full_address = res.data.province != void 0 ? res.data.province : "";
        obj.full_address += res.data.city != void 0 ? res.data.city : "";
        obj.full_address += res.data.district != void 0 ? res.data.district : "";
        obj.full_address += res.data.community != void 0 ? res.data.community : "";
        obj.province_id = res.data.province_id;
        obj.province = res.data.province;
        obj.city_id = res.data.city_id;
        obj.city = res.data.city;
        obj.district_id = res.data.district_id;
        obj.district = res.data.district;
        obj.community = res.data.community;
        obj.formatted_addresses = res.data.formatted_addresses;
        systemStore.setAddressInfo(obj);
      } else {
        systemStore.setAddressInfo();
      }
      setTimeout(() => {
        removeStorageSync("manually_select_location_from_map");
      }, 500);
    });
  };
  const reposition = () => {
    if (!isOpen)
      return false;
    let latitude = systemStore.diyAddressInfo ? systemStore.diyAddressInfo.latitude : "";
    let longitude = systemStore.diyAddressInfo ? systemStore.diyAddressInfo.longitude : "";
    setStorageSync("manually_select_location_from_map", true);
    let backurl = location.origin + location.pathname;
    let params = "";
    if (latitude && longitude) {
      params = `latng=${latitude},${longitude}`;
    }
    openMapSelector(backurl, params);
  };
  const locationStorage = () => {
    let data = getStorageSync("location_address");
    if (data) {
      const date = new Date();
      if (systemStore.mapConfig.valid_time > 0) {
        data.is_expired = date.getTime() / 1e3 > data.valid_time;
      } else {
        data.is_expired = false;
      }
    } else {
      data = {
        is_expired: false
      };
    }
    return data;
  };
  return {
    init,
    onLoad: onLoadLifeCycle,
    refresh: refreshLocation,
    reposition
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "top-tabbar",
  props: {
    data: {
      type: Object,
      default: {}
    },
    // 标题的颜色
    titleColor: {
      type: String,
      default: "#606266"
    },
    // 自定义返回逻辑
    customBack: {
      type: Function,
      default: null
    },
    scrollBool: {
      type: [String, Number],
      default: -1
    },
    // 是否显示导航栏左边返回图标和辅助文字
    isBack: {
      type: Boolean,
      default: true
    },
    isFill: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const systemStore = useSystemStore();
    systemStore.systemInfo.platform;
    const diyStore = useDiyStore();
    const isFill = computed(() => {
      let bool = true;
      if (diyStore.imageAdsSameScreen) {
        bool = false;
      } else {
        bool = props.isFill;
      }
      return bool;
    });
    const data = computed(() => {
      return props.data;
    });
    const topStatusBarData = computed(() => {
      if (props.data && props.data.topStatusBar)
        return props.data.topStatusBar;
    });
    const navbarInnerStyle = computed(() => {
      let style = "";
      if (isBackShow) {
        style += "padding-left: 30rpx;";
        if (topStatusBarData.value.style == "style-1")
          style += "padding-right:" + (40 + 30) + "rpx;";
      } else {
        if (topStatusBarData.value.style == "style-1")
          style += "padding-right: 30rpx;";
        style += "padding-left: 30rpx;";
      }
      return style;
    });
    const styleOneFontSize = computed(() => {
      let style = "";
      style += "font-size: 28rpx;";
      style += `color: ${titleTextColor.value};`;
      if (topStatusBarData.value.style == "style-1") {
        style += `text-align: ${topStatusBarData.value.textAlign};`;
      }
      return style;
    });
    const titleTextColor = computed(() => {
      let color = "";
      if (props.scrollBool == 1) {
        color = topStatusBarData.value.rollTextColor;
      } else {
        color = topStatusBarData.value.textColor;
      }
      return color;
    });
    const bgColor = computed(() => {
      let color = "";
      if (props.scrollBool == 1) {
        color = topStatusBarData.value.rollBgColor;
      } else {
        color = topStatusBarData.value.bgColor;
      }
      return color;
    });
    let componentsScrollVal = getStorageSync("componentsScrollValGroup");
    if (componentsScrollVal) {
      componentsScrollVal.TopTabbar = 0;
      setStorageSync("componentsScrollValGroup", componentsScrollVal);
    } else {
      let obj = {
        TopTabbar: 0
      };
      setStorageSync("componentsScrollValGroup", obj);
    }
    let pages = getCurrentPages$1();
    const isBackShow = computed(() => {
      let bool = false;
      if (props.isBack && pages.length > 1) {
        bool = true;
      } else if (currRoute() == "app/pages/auth/index" || currRoute() == "app/pages/auth/login") {
        bool = true;
      }
      return bool;
    });
    const goBack = () => {
      if (!isBackShow.value)
        return;
      if (typeof props.customBack === "function") {
        props.customBack();
      } else {
        if (getCurrentPages$1().length > 1) {
          navigateBack();
        } else {
          redirect({
            url: "/addon/shop/pages/index",
            mode: "reLaunch"
          });
        }
      }
    };
    const capsuleWidth = computed(() => {
      let width = "0px";
      return width;
    });
    const placeholderHeight = ref(0);
    const instance = getCurrentInstance();
    const navbarPlaceholderHeight = () => {
      nextTick(() => {
        const query = createSelectorQuery().in(instance);
        query.select(".ns-navbar-wrap .u-navbar .content-wrap").boundingClientRect((data2) => {
          placeholderHeight.value = data2 ? data2.height : 0;
          systemStore.setTopTabbar({ height: placeholderHeight.value });
          diyStore.$patch((state) => {
            state.topTabarHeight = placeholderHeight.value;
          });
        }).exec();
      });
    };
    let isOpenLocation = false;
    if (topStatusBarData.value && topStatusBarData.value.style == "style-4") {
      isOpenLocation = true;
    }
    const locationVal = useLocation(isOpenLocation);
    locationVal.onLoad();
    locationVal.init();
    onMounted(() => {
      navbarPlaceholderHeight();
      locationVal.refresh();
    });
    const refresh = () => {
      locationVal.refresh();
    };
    expose({
      refresh
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      return unref(diyStore).mode != "decorate" && unref(topStatusBarData) ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: normalizeClass(["ns-navbar-wrap", unref(topStatusBarData).style])
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: normalizeClass(["u-navbar z-100", { "fixed": props.scrollBool != -1, "absolute": props.scrollBool == -1 }]),
            style: normalizeStyle({ backgroundColor: unref(bgColor) })
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "navbar-inner",
                style: normalizeStyle({ width: "100%", height: placeholderHeight.value + "px" })
              }, {
                default: withCtx(() => [
                  unref(topStatusBarData).style == "style-1" ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: normalizeClass(["content-wrap", [unref(topStatusBarData).textAlign]]),
                    style: normalizeStyle(unref(navbarInnerStyle))
                  }, {
                    default: withCtx(() => [
                      unref(isBackShow) ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["back-wrap nc-iconfont nc-icon-zuoV6xx", { "!text-transparent": !unref(isBackShow) }]),
                        style: normalizeStyle({ color: unref(titleTextColor) }),
                        onClick: goBack
                      }, null, 8, ["class", "style"])) : createCommentVNode("", true),
                      createVNode(_component_v_uni_view, {
                        class: "title-wrap",
                        style: normalizeStyle(unref(styleOneFontSize))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(data).title), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }, 8, ["class", "style"])) : createCommentVNode("", true),
                  unref(topStatusBarData).style == "style-2" ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "content-wrap",
                    style: normalizeStyle(unref(navbarInnerStyle)),
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(topStatusBarData).link))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: normalizeClass(["back-wrap nc-iconfont nc-icon-zuoV6xx", { "!text-transparent": !unref(isBackShow) }]),
                        style: normalizeStyle({ color: unref(titleTextColor) }),
                        onClick: goBack
                      }, null, 8, ["style", "class"]),
                      createVNode(_component_v_uni_view, {
                        class: "title-wrap",
                        style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_image, {
                                src: unref(img)(unref(topStatusBarData).imgUrl),
                                mode: "heightFix"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, {
                            style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(data).title), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true),
                  unref(topStatusBarData).style == "style-3" ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 2,
                    style: normalizeStyle(unref(navbarInnerStyle)),
                    class: "content-wrap"
                  }, {
                    default: withCtx(() => [
                      unref(isBackShow) ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: normalizeClass(["back-wrap nc-iconfont nc-icon-zuoV6xx", { "!text-transparent": !unref(isBackShow) }]),
                        style: normalizeStyle({ color: unref(titleTextColor) }),
                        onClick: goBack
                      }, null, 8, ["style", "class"])) : createCommentVNode("", true),
                      createVNode(_component_v_uni_view, {
                        class: "title-wrap",
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(diyStore).toRedirect(unref(topStatusBarData).link))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            src: unref(img)(unref(topStatusBarData).imgUrl),
                            mode: "heightFix"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, {
                        class: "search",
                        onClick: _cache[2] || (_cache[2] = ($event) => unref(diyStore).toRedirect(unref(topStatusBarData).link)),
                        style: normalizeStyle({ height: unref(systemStore).menuButtonInfo.height - 2 + "px", lineHeight: unref(systemStore).menuButtonInfo.height - 2 + "px" })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-sousuo-duanV6xx1 text-[24rpx] absolute left-[20rpx]" }),
                          createVNode(_component_v_uni_text, { class: "text-[24rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(topStatusBarData).inputPlaceholder), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["style"]),
                      createVNode(_component_v_uni_view, {
                        style: normalizeStyle({ "width": unref(capsuleWidth) })
                      }, null, 8, ["style"])
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true),
                  unref(topStatusBarData).style == "style-4" ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 3,
                    style: normalizeStyle(unref(navbarInnerStyle)),
                    class: "content-wrap"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: normalizeClass(["back-wrap nc-iconfont nc-icon-zuoV6xx", { "!text-transparent": !unref(isBackShow) }]),
                        style: normalizeStyle({ color: unref(titleTextColor) }),
                        onClick: goBack
                      }, null, 8, ["style", "class"]),
                      createVNode(_component_v_uni_text, {
                        class: "nc-iconfont nc-icon-dizhiguanliV6xx text-[28rpx]",
                        style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                      }, null, 8, ["style"]),
                      unref(systemStore).diyAddressInfo ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "title-wrap",
                        onClick: _cache[3] || (_cache[3] = withModifiers(($event) => unref(locationVal).reposition(), ["stop"])),
                        style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(systemStore).diyAddressInfo.community), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])) : (openBlock(), createBlock(_component_v_uni_view, {
                        key: 1,
                        class: "title-wrap",
                        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => unref(locationVal).reposition(), ["stop"])),
                        style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(systemStore).defaultPositionAddress), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])),
                      createVNode(_component_v_uni_text, {
                        class: "nc-iconfont nc-icon-youV6xx text-[26rpx]",
                        onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(locationVal).reposition(), ["stop"])),
                        style: normalizeStyle({ color: unref(topStatusBarData).textColor })
                      }, null, 8, ["style"])
                    ]),
                    _: 1
                  }, 8, ["style"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["style"])
            ]),
            _: 1
          }, 8, ["class", "style"]),
          unref(isFill) ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "u-navbar-placeholder",
            style: normalizeStyle({ width: "100%", paddingTop: placeholderHeight.value + "px" })
          }, null, 8, ["style"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("", true);
    };
  }
});
const topTabbar_vue_vue_type_style_index_0_scoped_8eebd269_lang = "";
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8eebd269"]]);
export {
  __easycom_4 as _,
  useLocation as u
};
