/* __addonChunkWindiInjected:address-list_vue_vue_type_script_setup_true_lang_058fa4e7 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("address-list_vue_vue_type_script_setup_true_lang_058fa4e7",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.h-\\[50vh\\]{\n  height: 50vh;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[36rpx\\]{\n  font-size: 1.125rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.text-\\[32rpx\\]{\n  font-size: 1rem;\n}.leading-\\[1\\.5\\]{\n  line-height: 1.5;\n}.mx-\\[20rpx\\]{\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n}.mt-\\[12rpx\\]{\n  margin-top: 0.375rem;\n}.ml-auto{\n  margin-left: auto;\n}.mr-\\[8rpx\\]{\n  margin-right: 0.25rem;\n}.max-w-\\[300rpx\\]{\n  max-width: 9.375rem;\n}.text-center{\n  text-align: center;\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.w-\\[480rpx\\]{\n  width: 15rem;\n}");
import { s as showToast, k as setStorage, i as index$g, a as index$i, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, withModifiers, createTextVNode, toDisplayString, unref, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { T as getAddressList, t, r as redirect } from "./common.f536f441.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "address-list",
  props: ["back"],
  emits: ["confirm"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const show = ref(false);
    const loading = ref(false);
    const currAddressId = ref("");
    const propData = ref({});
    const addressList = ref([]);
    const open = (data) => {
      show.value = true;
      propData.value = data;
      currAddressId.value = data.id;
    };
    getAddressList({}).then(({ data }) => {
      addressList.value = data;
      loading.value = false;
    });
    const selectAddress = (index) => {
      let data = addressList.value[index];
      if (propData.value.delivery == "local_delivery" && !data.lat && !data.lng) {
        showToast({
          title: "缺少经纬度，请在地图上重新选点",
          icon: "none"
        });
      } else {
        let obj = {};
        obj.address_id = addressList.value[index].id;
        obj.delivery = propData.value.delivery;
        emits("confirm", obj);
      }
      show.value = false;
    };
    const editAddressFn = (data) => {
      if (propData.value.delivery == "local_delivery" && !data.lat && !data.lng) {
        editAddress(data, 1);
      } else {
        editAddress(data, 2);
      }
    };
    const editAddress = (data, isSelectMap = 2) => {
      setStorage({
        key: "selectAddressCallback",
        data: {
          back: props.back,
          delivery: propData.value.delivery
        },
        success() {
          redirect({
            url: "/app/pages/member/address_edit",
            param: { id: data.id, source: "shop_order_payment", isSelectMap }
          });
        }
      });
    };
    const addAddress = () => {
      setStorage({
        key: "selectAddressCallback",
        data: {
          back: props.back,
          delivery: propData.value.delivery
        },
        success() {
          redirect({ url: "/app/pages/member/address_edit", param: { source: "shop_order_payment" } });
        }
      });
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
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
                  createTextVNode(toDisplayString(unref(t)("selectAddress")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "h-[50vh]"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(addressList.value, (item, index) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: item.id,
                      class: normalizeClass(["flex items-center mx-[var(--popup-sidebar-m)] border-1 border-[#eee] border-solid rounded-[var(--rounded-mid)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)]", { "mb-[var(--top-m)]": addressList.value.length - 1 != index, "text-[var(--primary-color)] !border-[var(--primary-color)]": item.id == currAddressId.value }]),
                      onClick: ($event) => selectAddress(index)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-dingweiV6xx-1 text-[36rpx]" }),
                        createVNode(_component_v_uni_view, { class: "flex flex-col mx-[20rpx] w-[480rpx]" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex items-center truncate leading-[1.5]" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_text, { class: "mr-[8rpx] text-[30rpx] truncate max-w-[300rpx]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_uni_text, { class: "text-[30rpx]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.mobile), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "truncate text-[26rpx] leading-[1.5] mt-[12rpx]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.full_address), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, {
                          class: "nc-iconfont nc-icon-xiugaiV6xx text-[32rpx] ml-auto",
                          onClick: withModifiers(($event) => editAddressFn(item), ["stop"])
                        }, null, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128)),
                  !addressList.value || addressList.value && !addressList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "text-[var(--text-color-light6)] text-[28rpx] text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("emptyAddress")), 1)
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
                    onClick: addAddress
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("addAddress")), 1)
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
  _sfc_main as _
};
