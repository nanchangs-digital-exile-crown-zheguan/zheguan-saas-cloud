/* __addonChunkWindiInjected:addon-shop-pages-order-components-delivery-record-delivery-record_622ba03e */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-order-components-delivery-record-delivery-record_622ba03e",".bg-\\[\\#999\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(153, 153, 153, var(--tw-bg-opacity));\n}.bg-\\[\\#ccc\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(204, 204, 204, var(--tw-bg-opacity));\n}.rounded-full{\n  border-radius: 9999px;\n}.flex{\n  display: flex;\n}.items-start{\n  align-items: flex-start;\n}.justify-between{\n  justify-content: space-between;\n}.flex-1{\n  flex: 1 1 0%;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.h-\\[60rpx\\]{\n  height: 1.875rem;\n}.h-\\[50vh\\]{\n  height: 50vh;\n}.h-\\[8rpx\\]{\n  height: 0.25rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.leading-\\[34rpx\\]{\n  line-height: 1.0625rem;\n}.my-\\[20rpx\\]{\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}.mx-auto{\n  margin-left: auto;\n  margin-right: auto;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.ml-\\[30rpx\\]{\n  margin-left: 0.9375rem;\n}.mt-\\[-10rpx\\]{\n  margin-top: -0.3125rem;\n}.\\!mt-0{\n  margin-top: 0px !important;\n}.px-\\[20rpx\\]{\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}.py-\\[40rpx\\]{\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}.w-\\[2rpx\\]{\n  width: 0.0625rem;\n}.w-\\[8rpx\\]{\n  width: 0.25rem;\n}");
/* __addonChunkCssInjected:b482e4f3 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("b482e4f3",".addon-wrap-b482e4f3 .empty-height{height:calc(100% - 3.125rem)}");
import { i as index$g, a as index$i, b as index$q, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./resize-sensor.8ba09891.js";
import "./scroll-view.29370e9b.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, withModifiers, createTextVNode, createElementBlock, Fragment, renderList, createCommentVNode, toDisplayString, unref } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { i as img } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-transition.ff7c65da.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-icon.ceb3960f.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-safe-bottom.32b62caf.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "delivery-record",
  setup(__props, { expose }) {
    const show = ref(false);
    const deliveryRecord2 = ref(null);
    const activeStep = ref(0);
    const open = (data) => {
      show.value = true;
      deliveryRecord2.value = data;
      activeStep.value = deliveryRecord2.value ? deliveryRecord2.value.length - 1 : 0;
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        onClose: _cache[1] || (_cache[1] = ($event) => show.value = false),
        mode: "bottom",
        round: 10
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["prevent", "stop"])),
            class: "popup-common"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("配送记录")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "h-[50vh]"
              }, {
                default: withCtx(() => [
                  deliveryRecord2.value && deliveryRecord2.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "px-[20rpx] py-[40rpx]"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(deliveryRecord2.value, (item, index) => {
                        return openBlock(), createBlock(_component_v_uni_view, {
                          class: "flex",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex-shrink-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "w-[8rpx] h-[8rpx] mx-auto bg-[#999] rounded-full" }),
                                index + 1 != deliveryRecord2.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                                  key: 0,
                                  class: "w-[2rpx] h-[60rpx] bg-[#ccc] mx-auto my-[20rpx]"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "flex-1 ml-[20rpx]" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[26rpx] flex items-start justify-between mt-[-10rpx]" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_view, { class: "leading-[34rpx] multi-hidden" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_uni_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.operate_desc), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        item.main_type == "rider" ? (openBlock(), createBlock(_component_v_uni_text, { key: 0 }, {
                                          default: withCtx(() => [
                                            createTextVNode("，配送员：" + toDisplayString(item.main_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_uni_text, { class: "flex-shrink-0 ml-[30rpx]" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.create_time), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: "empty-page-popup !mt-0 empty-height"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "img",
                        src: unref(img)("static/resource/images/system/empty.png"),
                        model: "aspectFit"
                      }, null, 8, ["src"]),
                      createVNode(_component_v_uni_view, { class: "desc" }, {
                        default: withCtx(() => [
                          createTextVNode("暂无配送记录")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
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
const deliveryRecord_vue_vue_type_style_index_0_scoped_b482e4f3_lang = "";
const deliveryRecord = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b482e4f3"]]);
export {
  deliveryRecord as default
};
