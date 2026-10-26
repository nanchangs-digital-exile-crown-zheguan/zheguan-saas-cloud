/* __addonChunkCssInjected:f934e801 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("f934e801",".addon-wrap-f934e801 .share-popup .share-content{border-top-left-radius:1.25rem;border-top-right-radius:1.25rem;overflow:hidden;display:flex;display:-webkit-flex;-o-flex-wrap:wrap;flex-wrap:wrap;padding:1.25rem .46875rem;background-color:#fff}.addon-wrap-f934e801 .share-popup .share-content .share-box{flex:1;text-align:center}.addon-wrap-f934e801 .share-popup .share-content .share-box .share-btn{margin:0;padding:0;border:none;line-height:1;height:auto;background:none}.addon-wrap-f934e801 .share-popup .share-content .share-box .share-btn uni-text{margin-top:.625rem;font-size:.75rem;display:block;color:#333}.addon-wrap-f934e801 .share-popup .share-content .share-box uni-image{width:2.5rem;height:2.5rem}.addon-wrap-f934e801 .share-popup .share-content .share-box .iconfont{font-size:2.5rem;line-height:initial}.addon-wrap-f934e801 .share-popup .share-content .share-box .icon-fuzhilianjie,.addon-wrap-f934e801 .share-popup .share-content .share-box .icon-pengyouquan,.addon-wrap-f934e801 .share-popup .share-content .share-box .icon-haowuquan,.addon-wrap-f934e801 .share-popup .share-content .share-box .icon-share-friend{color:#07c160}.addon-wrap-f934e801 .share-popup .share-footer{background-color:#fff;height:2.8125rem;line-height:2.8125rem;border-top:.0625rem solid #eee;text-align:center;font-size:.8125rem}.addon-wrap-f934e801 .poster-img-wrap{position:fixed;top:0;left:0;bottom:calc(constant(safe-area-inset-bottom) + 9.375rem);bottom:calc(env(safe-area-inset-bottom) + 9.375rem);right:0;display:flex;justify-content:center;align-items:center}.addon-wrap-f934e801 .poster-img-wrap .poster-img{width:80%;height:80%}.addon-wrap-f934e801 .poster-img-wrap .poster-animation{width:60%;height:65%}.addon-wrap-f934e801 .dialog-popup{width:18.125rem;background:#fff;box-sizing:border-box;border-radius:.3125rem;overflow:hidden;height:initial}.addon-wrap-f934e801 .dialog-popup .title{padding:.9375rem .9375rem 0;text-align:center;font-size:1rem;font-weight:700}.addon-wrap-f934e801 .dialog-popup .message{padding:0 .9375rem;color:#666;text-align:center;line-height:1.3;margin-top:.9375rem}.addon-wrap-f934e801 .dialog-popup .action-wrap{margin-top:1.5625rem;height:2.5rem;display:flex;border-top:.0625rem solid #eee}.addon-wrap-f934e801 .dialog-popup .action-wrap>uni-view{flex:1;text-align:center;line-height:2.5rem}.addon-wrap-f934e801 .dialog-popup .action-wrap>uni-view:first-child{border-right:.0625rem solid #eee;color:#999}.addon-wrap-f934e801 .dialog-popup .action-wrap>uni-view uni-button{border:none;line-height:2.5rem;padding:0;margin:0;width:100%;height:100%}.addon-wrap-f934e801 .dialog-popup .authorization-btn{background-color:#07c160;color:#fff;font-size:.875rem;border-radius:0}");
import "./resize-sensor.8ba09891.js";
import { b as index$q, i as index$g, a as index$i, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withModifiers, withCtx, createVNode, normalizeStyle, unref, createCommentVNode, createTextVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { a as useSystemStore, i as img, M as copy, N as getPoster } from "./common.f536f441.js";
import "./wechat.1afe9cea.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "share-poster",
  props: {
    posterId: {
      type: [String, Number],
      default: 0
    },
    posterType: {
      type: String,
      default: ""
    },
    posterParam: {
      type: Object,
      default: {}
    },
    copyUrl: {
      // 例 "/wap/addon/shop/pages/goods"
      type: String,
      default: ""
    },
    copyUrlParam: {
      type: String,
      default: ""
    },
    isPreload: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const sharePopupShow = ref(false);
    const posterType = ref(props.posterType);
    const copyUrl = () => {
      let data = "";
      if (props.copyUrl) {
        let pathName = location.pathname;
        let packageArr = ["/app/", "/addon/"];
        for (let i = 0; i < packageArr.length; i++) {
          if (pathName.indexOf(packageArr[i]) != -1) {
            pathName = pathName.substr(0, pathName.indexOf(packageArr[i]));
          }
        }
        data = location.origin + pathName + props.copyUrl + props.copyUrlParam;
      } else {
        data = location.origin + location.pathname + props.copyUrlParam;
      }
      copy(data, () => {
        sharePopupShow.value = false;
      });
    };
    const openShare = (data) => {
      posterType.value = (data == null ? void 0 : data.type) || posterType.value || "";
      sharePopupShow.value = true;
      loadPoster();
    };
    const isPosterAnimation = ref(false);
    const isPosterImg = ref(false);
    const poster = ref("");
    const loadPoster = () => {
      if (poster.value && props.isPreload) {
        isPosterAnimation.value = false;
        isPosterImg.value = true;
      } else {
        isPosterAnimation.value = true;
        isPosterImg.value = false;
        let obj = {
          id: props.posterId,
          type: posterType.value,
          param: props.posterParam
        };
        let startTime = Date.parse(new Date());
        getPoster(obj).then((res) => {
          poster.value = res.data && img(res.data) || "";
          let endTime = Date.parse(new Date());
          let time = endTime - startTime;
          let periodTime = 2200;
          if (time < periodTime) {
            setTimeout(() => {
              isPosterAnimation.value = false;
              isPosterImg.value = true;
            }, periodTime - time);
          } else {
            isPosterAnimation.value = false;
            isPosterImg.value = true;
          }
        }).catch(() => {
          sharePopupClose();
        });
      }
    };
    const show = ref(false);
    const closeDialog = () => {
      show.value = false;
    };
    const shareTop = ref(0);
    useSystemStore();
    const sharePopupClose = () => {
      sharePopupShow.value = false;
      isPosterAnimation.value = false;
      isPosterImg.value = false;
      emits("close");
    };
    expose({
      openShare,
      loadPoster
    });
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_v_uni_view, {
        onTouchmove: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent", "stop"])),
        class: "share-popup"
      }, {
        default: withCtx(() => [
          createVNode(_component_u_popup, {
            show: sharePopupShow.value,
            onClose: sharePopupClose,
            overlayOpacity: "0.8"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["prevent", "stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "poster-img-wrap",
                    style: normalizeStyle({ "top": shareTop.value })
                  }, {
                    default: withCtx(() => [
                      isPosterAnimation.value ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 0,
                        class: "poster-animation",
                        src: unref(img)("addon/shop/poster_animation.gif"),
                        mode: "aspectFit"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      isPosterImg.value ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 1,
                        class: "poster-img",
                        src: unref(img)(poster.value),
                        mode: "aspectFit",
                        "show-menu-by-longpress": true
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["style"]),
                  createVNode(_component_v_uni_view, { class: "share-content" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "share-box",
                        onClick: copyUrl
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_button, {
                            class: "share-btn",
                            plain: true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "text-[#07c160] iconfont iconfuzhilianjie" }),
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode("复制链接")
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
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "share-footer",
                    onClick: sharePopupClose
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode("取消分享")
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
          }, 8, ["show"]),
          createVNode(_component_u_popup, {
            show: show.value,
            mode: "center",
            round: 10,
            closeable: true,
            onClose: _cache[1] || (_cache[1] = ($event) => show.value = false),
            "safe-area-inset-bottom": false
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "dialog-popup" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "title" }, {
                    default: withCtx(() => [
                      createTextVNode("提示")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "message" }, {
                    default: withCtx(() => [
                      createTextVNode("您拒绝了保存图片到相册的授权请求，无法保存图片到相册，如需正常使用，请授权之后再进行操作。")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "action-wrap" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { onClick: closeDialog }, {
                        default: withCtx(() => [
                          createTextVNode("取消")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_button, {
                            type: "default",
                            class: "authorization-btn",
                            "open-type": "openSetting",
                            onOpensetting: closeDialog,
                            "hover-class": "none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("立即授权")
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
          }, 8, ["show"])
        ]),
        _: 1
      });
    };
  }
});
const sharePoster_vue_vue_type_style_index_0_scoped_f934e801_lang = "";
const sharePoster = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f934e801"]]);
export {
  sharePoster as s
};
