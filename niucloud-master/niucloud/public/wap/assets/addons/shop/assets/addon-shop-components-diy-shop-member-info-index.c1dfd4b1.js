/* __addonChunkWindiInjected:addon-shop-components-diy-shop-member-info-index_c1dfd4b1 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-components-diy-shop-member-info-index_c1dfd4b1",".border-\\[\\#E3E4E9\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(227, 228, 233, var(--tw-border-opacity));\n}.rounded-\\[8rpx\\]{\n  border-radius: 0.25rem;\n}.border-solid{\n  border-style: solid;\n}.border-\\[1rpx\\]{\n  border-width: 0.03125rem;\n}.flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.items-baseline{\n  align-items: baseline;\n}.flex-1{\n  flex: 1 1 0%;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.h-\\[34rpx\\]{\n  height: 1.0625rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[36rpx\\]{\n  font-size: 1.125rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[38rpx\\]{\n  font-size: 1.1875rem;\n}.text-\\[32rpx\\]{\n  font-size: 1rem;\n}.leading-\\[28rpx\\]{\n  line-height: 0.875rem;\n}.leading-\\[38rpx\\]{\n  line-height: 1.1875rem;\n}.mt-\\[14rpx\\]{\n  margin-top: 0.4375rem;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.mt-\\[40rpx\\]{\n  margin-top: 1.25rem;\n}.mb-\\[20rpx\\]{\n  margin-bottom: 0.625rem;\n}.max-w-\\[320rpx\\]{\n  max-width: 10rem;\n}.px-\\[6rpx\\]{\n  padding-left: 0.1875rem;\n  padding-right: 0.1875rem;\n}.text-center{\n  text-align: center;\n}.text-\\[\\#666\\]{\n  --tw-text-opacity: 1;\n  color: rgba(102, 102, 102, var(--tw-text-opacity));\n}.text-\\[\\#ffffff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}");
import { s as showToast, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_0 } from "./u-avatar.2109a9f3.js";
import { defineComponent, computed, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, normalizeClass, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { a as useSystemStore, m as useConfigStore, k as useDiyStore, i as img, u as useMemberStore, W as urlDeconstruction, n as isWeixinBrowser, X as wechatSync, o as moneyFormat, t, r as redirect, b as useLogin } from "./common.f536f441.js";
import { h as getMyCouponCount } from "./coupon.7849a6e4.js";
import { b as bindMobile } from "./bind-mobile.8d23c7c5.js";
import "./u-icon.ceb3960f.js";
import "./resize-sensor.8ba09891.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-text.ae347f6f.js";
import "./button.fdf0e29d.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
import "./input.18765527.js";
import "./u-form.5eb516df.js";
import "./u-line.46235f11.js";
import "./u-input.854f14a8.js";
import "./u-modal.93bf424d.js";
import "./u-loading-icon.8e9029d5.js";
import "./u-popup.37f81450.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-safe-bottom.32b62caf.js";
import "./u-checkbox-group.67ae69b1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "global"],
  setup(__props) {
    const props = __props;
    useSystemStore();
    const configStore = useConfigStore();
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
      if (diyComponent.value.bgUrl) {
        style += "background-image:url(" + img(diyComponent.value.bgUrl) + ");";
        style += "background-size: 100%;";
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
    const memberStore = useMemberStore();
    const { query } = urlDeconstruction(location.href);
    if (query.code && isWeixinBrowser()) {
      setTimeout(() => {
        wechatSync({ code: query.code }).then((res) => {
          memberStore.getMemberInfo();
        });
      }, 1500);
    }
    const info = computed(() => {
      if (diyStore.mode == "decorate") {
        return {
          headimg: "",
          nickname: "昵称",
          member_level_name: "普通会员",
          balance: 0,
          point: 0,
          money: 0,
          mobile: "155****0549",
          member_no: "NIU0000021"
        };
      } else {
        getMyCouponCountFn();
        const data = memberStore ? memberStore.info : null;
        return data;
      }
    });
    const money = computed(() => {
      if (info.value) {
        let m = parseFloat(info.value.balance) + parseFloat(info.value.money);
        return moneyFormat(m.toString());
      } else {
        return 0;
      }
    });
    const toLogin = () => {
      let normalLogin = !configStore.login.is_username && !configStore.login.is_mobile && !configStore.login.is_bind_mobile;
      let authRegisterLogin = !configStore.login.is_auth_register;
      if (isWeixinBrowser()) {
        if (normalLogin && authRegisterLogin) {
          showToast({ title: "商家未开启登录注册", icon: "none" });
        } else if (configStore.login.is_username || configStore.login.is_mobile || configStore.login.is_bind_mobile) {
          useLogin().setLoginBack({ url: "/addon/shop/pages/member/index" });
        } else if (normalLogin && configStore.login.is_auth_register && configStore.login.is_force_access_user_info) {
          useLogin().getAuthCode({ scopes: "snsapi_userinfo" });
        } else if (normalLogin && configStore.login.is_auth_register && !configStore.login.is_force_access_user_info) {
          useLogin().getAuthCode({ scopes: "snsapi_base" });
        }
      } else {
        if (normalLogin) {
          showToast({ title: "商家未开启登录注册", icon: "none" });
        } else if (configStore.login.is_username || configStore.login.is_mobile || configStore.login.is_bind_mobile) {
          useLogin().setLoginBack({ url: "/addon/shop/pages/member/index" });
        }
      }
    };
    ref(false);
    const clickAvatar = () => {
      if (isWeixinBrowser()) {
        useLogin().getAuthCode({ scopes: "snsapi_userinfo" });
      } else {
        redirect({ url: "/app/pages/member/personal" });
      }
    };
    const couponCount = ref(0);
    const getMyCouponCountFn = async () => {
      try {
        const res = await getMyCouponCount({ status: 1 });
        couponCount.value = res.data;
      } catch (e) {
        couponCount.value = 0;
      }
    };
    const bindMobileRef = ref(null);
    const bindMobileFn = () => {
      bindMobileRef.value.open();
    };
    computed(() => {
      let style = "";
      return style;
    });
    return (_ctx, _cache) => {
      const _component_u_avatar = resolveEasycom(resolveDynamicComponent("u-avatar"), __easycom_0);
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: normalizeClass(["px-[30rpx] pt-[30rpx] box-border pb-[30rpx]", { "!pb-[120rpx]": unref(diyComponent).isShowAccount }])
          }, {
            default: withCtx(() => [
              unref(info) ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "flex items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_avatar, {
                    src: unref(img)(unref(info).headimg),
                    size: "110rpx",
                    leftIcon: "none",
                    "default-url": unref(img)("static/resource/images/default_headimg.png"),
                    onClick: clickAvatar
                  }, null, 8, ["src", "default-url"]),
                  createVNode(_component_v_uni_view, { class: "ml-[20rpx] flex-1" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "text-[#ffffff] flex items-baseline flex-wrap",
                        style: normalizeStyle({ color: unref(diyComponent).textColor })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[32rpx] truncate max-w-[320rpx] font-500 leading-[38rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(info).nickname), 1)
                            ]),
                            _: 1
                          }),
                          unref(info).mobile ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            class: "text-[26rpx] font-400 leading-[28rpx] ml-[10rpx]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(info).mobile.replace(unref(info).mobile.substring(3, 7), "****")), 1)
                            ]),
                            _: 1
                          })) : !unref(info).mobile ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 1,
                            onClick: bindMobileFn,
                            class: "text-[22rpx] ml-[10rpx] px-[6rpx] border-[1rpx] border-solid border-[#E3E4E9] rounded-[8rpx] h-[34rpx] flex-center",
                            style: normalizeStyle(unref(diyComponent).textColor ? { boxShadow: "0 0 0 1rpx " + unref(diyComponent).textColor, border: "none" } : {})
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("bindMobile")), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["style"]),
                      createVNode(_component_v_uni_view, {
                        class: "text-[#666] text-[24rpx] font-400 leading-[28rpx] mt-[14rpx]",
                        style: normalizeStyle({ color: unref(diyComponent).uidTextColor })
                      }, {
                        default: withCtx(() => [
                          createTextVNode("UID：" + toDisplayString(unref(info).member_no), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(redirect)({ url: "/app/pages/setting/index" })),
                    class: "nc-iconfont nc-icon-shezhiV6xx1 text-[38rpx] ml-[10rpx]",
                    style: normalizeStyle({ color: unref(diyComponent).textColor })
                  }, null, 8, ["style"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "flex items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_avatar, {
                    src: unref(img)("static/resource/images/default_headimg.png"),
                    size: "100rpx",
                    onClick: toLogin
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_view, {
                    class: "ml-[20rpx] flex-1",
                    onClick: toLogin
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "text-[32rpx] font-500 leading-[38rpx]",
                        style: normalizeStyle({ color: unref(diyComponent).textColor })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("login")) + "/" + toDisplayString(unref(t)("register")), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(redirect)({ url: "/app/pages/setting/index" }))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, {
                        class: "nc-iconfont nc-icon-shezhiV6xx1 text-[38rpx] ml-[10rpx]",
                        style: normalizeStyle({ color: unref(diyComponent).textColor })
                      }, null, 8, ["style"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              unref(diyComponent).isShowAccount ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 2,
                class: "flex mt-[40rpx] items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "text-center w-[33.333%] flex-shrink-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[36rpx] mb-[20rpx] font-500 price-font" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[2] || (_cache[2] = ($event) => unref(redirect)({ url: "/app/pages/member/balance" })),
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(money)), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "text-[22rpx] font-400" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[3] || (_cache[3] = ($event) => unref(redirect)({ url: "/app/pages/member/balance" })),
                            style: normalizeStyle({ color: unref(diyComponent).accountTextColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("balance")), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "text-center w-[33.333%] flex-shrink-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[36rpx] mb-[20rpx] font-500 price-font" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[4] || (_cache[4] = ($event) => unref(redirect)({ url: "/app/pages/member/point" })),
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString(parseInt((_a = unref(info)) == null ? void 0 : _a.point) || 0), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "text-[22rpx] font-400" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[5] || (_cache[5] = ($event) => unref(redirect)({ url: "/app/pages/member/point" })),
                            style: normalizeStyle({ color: unref(diyComponent).accountTextColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("point")), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "text-center w-[33.333%] flex-shrink-0",
                    onClick: _cache[6] || (_cache[6] = ($event) => unref(redirect)({ url: "/addon/shop/pages/member/my_coupon" }))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[36rpx] mb-[20rpx] font-500 price-font" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(couponCount.value), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "text-[22rpx] font-400" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            style: normalizeStyle({ color: unref(diyComponent).accountTextColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("coupon")), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(bindMobile, {
            ref_key: "bindMobileRef",
            ref: bindMobileRef
          }, null, 512)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
