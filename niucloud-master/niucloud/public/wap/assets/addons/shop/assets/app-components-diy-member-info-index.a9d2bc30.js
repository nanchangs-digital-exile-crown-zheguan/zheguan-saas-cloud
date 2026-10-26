/* __addonChunkWindiInjected:app-components-diy-member-info-index_a9d2bc30 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-member-info-index_a9d2bc30",".border-solid{\n  border-style: solid;\n}.flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-bold{\n  font-weight: 700;\n}.h-\\[60rpx\\]{\n  height: 1.875rem;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[40rpx\\]{\n  font-size: 1.25rem;\n}.mt-\\[10rpx\\]{\n  margin-top: 0.3125rem;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.mb-0{\n  margin-bottom: 0px;\n}.mr-\\[16rpx\\]{\n  margin-right: 0.5rem;\n}.ml-\\[32rpx\\]{\n  margin-left: 1rem;\n}.max-w-\\[320rpx\\]{\n  max-width: 10rem;\n}.py-\\[30rpx\\]{\n  padding-top: 0.9375rem;\n  padding-bottom: 0.9375rem;\n}.pr-\\[50rpx\\]{\n  padding-right: 1.5625rem;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.right-0{\n  right: 0px;\n}.text-center{\n  text-align: center;\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}");
import { s as showToast, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_0 } from "./u-avatar.2109a9f3.js";
import { defineComponent, computed, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { m as useConfigStore, k as useDiyStore, i as img, u as useMemberStore, W as urlDeconstruction, n as isWeixinBrowser, c as getToken, X as wechatSync, o as moneyFormat, r as redirect, t, b as useLogin } from "./common.f536f441.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "global"],
  setup(__props) {
    const props = __props;
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
    if (query.code && isWeixinBrowser() && getToken()) {
      wechatSync({ code: query.code }).then((res) => {
        memberStore.getMemberInfo();
      });
    }
    const info = computed(() => {
      if (diyStore.mode == "decorate") {
        return {
          headimg: "",
          nickname: "昵称",
          balance: 0,
          point: 0,
          money: 0,
          member_no: "NIU0000021"
        };
      } else {
        return memberStore.info;
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
          useLogin().setLoginBack({ url: "/app/pages/member/index" });
        } else if (normalLogin && configStore.login.is_auth_register && configStore.login.is_force_access_user_info) {
          useLogin().getAuthCode({ scopes: "snsapi_userinfo" });
        } else if (normalLogin && configStore.login.is_auth_register && !configStore.login.is_force_access_user_info) {
          useLogin().getAuthCode({ scopes: "snsapi_base" });
        }
      } else {
        if (normalLogin) {
          showToast({ title: "商家未开启登录注册", icon: "none" });
        } else if (configStore.login.is_username || configStore.login.is_mobile || configStore.login.is_bind_mobile) {
          useLogin().setLoginBack({ url: "/app/pages/member/index" });
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
    return (_ctx, _cache) => {
      const _component_u_avatar = resolveEasycom(resolveDynamicComponent("u-avatar"), __easycom_0);
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "pt-[34rpx] member-info" }, {
            default: withCtx(() => [
              unref(info) ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "flex ml-[32rpx] mr-[52rpx] items-center relative"
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_avatar, {
                    src: unref(img)(unref(info).headimg),
                    size: "55",
                    leftIcon: "none",
                    "default-url": unref(img)("static/resource/images/default_headimg.png"),
                    onClick: clickAvatar
                  }, null, 8, ["src", "default-url"]),
                  createVNode(_component_v_uni_view, { class: "ml-[22rpx]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[#222222] flex pr-[50rpx] flex-wrap items-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            class: "text-[#222222] truncate max-w-[320rpx] font-bold text-lg mr-[16rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(info).nickname), 1)
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, {
                        class: "text-[#696B70] text-[24rpx] mt-[10rpx]",
                        style: normalizeStyle({ color: unref(diyComponent).textColor })
                      }, {
                        default: withCtx(() => [
                          createTextVNode("UID：" + toDisplayString(unref(info).member_no), 1)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "set-icon flex items-center absolute right-0 top-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(redirect)({ url: "/app/pages/setting/index" }))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, {
                            class: "nc-iconfont nc-icon-shezhiV6xx-1 text-[40rpx] ml-[10rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, null, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "flex ml-[32rpx] mr-[52rpx] items-center relative"
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_avatar, {
                    src: unref(img)("static/resource/images/default_headimg.png"),
                    size: "55",
                    onClick: toLogin
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_view, {
                    class: "ml-[22rpx]",
                    onClick: toLogin
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "text-[#222222] font-bold text-lg",
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
                    class: "set-icon flex items-center absolute right-0 top-2",
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(redirect)({ url: "/app/pages/setting/index" }))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, {
                            class: "nc-iconfont nc-icon-shezhiV6xx-1 text-[40rpx] ml-[10rpx]",
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
                          }, null, 8, ["style"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              createVNode(_component_v_uni_view, { class: "flex m-[30rpx] mb-0 py-[30rpx] items-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "flex-1 text-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[2] || (_cache[2] = ($event) => unref(redirect)({ url: unref(info) ? "/app/pages/member/balance" : "" })),
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
                      createVNode(_component_v_uni_view, { class: "text-sm mt-[10rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[3] || (_cache[3] = ($event) => unref(redirect)({ url: unref(info) ? "/app/pages/member/balance" : "" })),
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
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
                  createVNode(_component_v_uni_view, { class: "border-solid border-white border-l border-b-0 border-t-0 border-r-0 h-[60rpx]" }),
                  createVNode(_component_v_uni_view, { class: "flex-1 text-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[4] || (_cache[4] = ($event) => unref(redirect)({ url: unref(info) ? "/app/pages/member/point" : "" })),
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
                      createVNode(_component_v_uni_view, { class: "text-sm mt-[10rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            onClick: _cache[5] || (_cache[5] = ($event) => unref(redirect)({ url: unref(info) ? "/app/pages/member/point" : "" })),
                            style: normalizeStyle({ color: unref(diyComponent).textColor })
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
                  })
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
