/* __addonChunkWindiInjected:addon-shop-pages-invoice-list_8cc00923 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-invoice-list_8cc00923",".bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.border-\\[\\#ccc\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(204, 204, 204, var(--tw-border-opacity));\n}.rounded-full{\n  border-radius: 9999px;\n}.border-solid{\n  border-style: solid;\n}.border-\\[2rpx\\]{\n  border-width: 0.0625rem;\n}.border-\\[0\\]{\n  border-width: 0;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-end{\n  align-items: flex-end;\n}.items-center{\n  align-items: center;\n}.justify-end{\n  justify-content: flex-end;\n}.justify-between{\n  justify-content: space-between;\n}.\\!justify-evenly{\n  justify-content: space-evenly !important;\n}.font-500{\n  font-weight: 500;\n}.font-400{\n  font-weight: 400;\n}.h-\\[56rpx\\]{\n  height: 1.75rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.text-\\[34rpx\\]{\n  font-size: 1.0625rem;\n}.leading-\\[36rpx\\]{\n  line-height: 1.125rem;\n}.leading-\\[52rpx\\]{\n  line-height: 1.625rem;\n}.leading-none{\n  line-height: 1;\n}.ml-\\[10rpx\\]{\n  margin-left: 0.3125rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.ml-\\[20rpx\\]{\n  margin-left: 0.625rem;\n}.mb-\\[var\\(--top-m\\)\\]{\n  margin-bottom: var(--top-m);\n}.min-h-screen{\n  min-height: 100vh;\n}.min-w-\\[150rpx\\]{\n  min-width: 4.6875rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[3rpx\\]{\n  padding-left: 0.09375rem;\n  padding-right: 0.09375rem;\n}.pt-\\[var\\(--top-m\\)\\]{\n  padding-top: var(--top-m);\n}.tab-style-2{\n  tab-size: 2;\n}.fixed{\n  position: fixed;\n}.left-0{\n  left: 0px;\n}.right-0{\n  right: 0px;\n}.top-0{\n  top: 0px;\n}.text-center{\n  text-align: center;\n}.text-\\[\\#303133\\]{\n  --tw-text-opacity: 1;\n  color: rgba(48, 49, 51, var(--tw-text-opacity));\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.text-\\[\\#333\\]{\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light3\\)\\]{\n  color: var(--text-color-light3);\n}.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.z-10{\n  z-index: 10;\n}");
/* __addonChunkCssInjected:14eab0c7 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("14eab0c7",".addon-wrap-14eab0c7 .u-empty,.addon-wrap-14eab0c7 .u-empty__wrap,.addon-wrap-14eab0c7 .u-tabs,.addon-wrap-14eab0c7 .u-tabs__wrapper,.addon-wrap-14eab0c7 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-14eab0c7 .u-tabs__wrapper__scroll-view,.addon-wrap-14eab0c7 .u-tabs__wrapper__nav,.addon-wrap-14eab0c7 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-14eab0c7 .u-divider{display:flex;flex-direction:row;align-items:center;margin:15px 0}.addon-wrap-14eab0c7 .u-divider__text{margin:0 15px}.addon-wrap-14eab0c7 .u-divider__dot{font-size:12px;margin:0 12px;color:#c0c4cc}");
import { a as index$i, i as index$g, o as showModal, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./modal.8c1bc6e1.js";
import "./scroll-view.29370e9b.js";
import { _ as __easycom_3 } from "./u-line.46235f11.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, defineComponent, ref, nextTick, createElementBlock, Fragment, renderList, normalizeClass, unref, withModifiers } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom, o as onLoad, d as onShow, a as onReachBottom, b as onPageScroll } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, a as addStyle } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { a as useSystemStore, m as useConfigStore, r as redirect } from "./common.f536f441.js";
import { b as getInvoiceList, d as cancelInvoice } from "./invoice.bda7cbc9.js";
import { M as MescrollBody } from "./mescroll-body.c6b16bb3.js";
import { M as MescrollEmpty } from "./mescroll-empty.3c956fab.js";
import { u as useMescroll } from "./useMescroll.fedc684a.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
import "./resize-sensor.8ba09891.js";
const props = {
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: () => defProps.divider.dashed
    },
    // 是否细线
    hairline: {
      type: Boolean,
      default: () => defProps.divider.hairline
    },
    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: () => defProps.divider.dot
    },
    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: () => defProps.divider.textPosition
    },
    // 文本内容
    text: {
      type: [String, Number],
      default: () => defProps.divider.text
    },
    // 文本大小
    textSize: {
      type: [String, Number],
      default: () => defProps.divider.textSize
    },
    // 文本颜色
    textColor: {
      type: String,
      default: () => defProps.divider.textColor
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: () => defProps.divider.lineColor
    }
  }
};
const uDivider_vue_vue_type_style_index_0_scoped_14eab0c7_lang = "";
const _sfc_main$1 = {
  name: "u-divider",
  mixins: [mpMixin, mixin, props],
  computed: {
    textStyle() {
      const style = {};
      style.fontSize = addUnit(this.textSize);
      style.color = this.textColor;
      return style;
    },
    // 左边线条的的样式
    leftLineStyle() {
      const style = {};
      if (this.textPosition === "left") {
        style.width = "80rpx";
      } else {
        style.flex = 1;
      }
      return style;
    },
    // 右边线条的的样式
    rightLineStyle() {
      const style = {};
      if (this.textPosition === "right") {
        style.width = "80rpx";
      } else {
        style.flex = 1;
      }
      return style;
    }
  },
  emits: ["click"],
  methods: {
    addStyle,
    // divider组件被点击时触发
    click() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_line = resolveEasycom(resolveDynamicComponent("u-line"), __easycom_3);
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-divider",
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)]),
    onClick: $options.click
  }, {
    default: withCtx(() => [
      createVNode(_component_u_line, {
        color: _ctx.lineColor,
        customStyle: $options.leftLineStyle,
        hairline: _ctx.hairline,
        dashed: _ctx.dashed
      }, null, 8, ["color", "customStyle", "hairline", "dashed"]),
      _ctx.dot ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 0,
        class: "u-divider__dot"
      }, {
        default: withCtx(() => [
          createTextVNode("●")
        ]),
        _: 1
      })) : _ctx.text ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 1,
        class: "u-divider__text",
        style: normalizeStyle([$options.textStyle])
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["style"])) : createCommentVNode("", true),
      createVNode(_component_u_line, {
        color: _ctx.lineColor,
        customStyle: $options.rightLineStyle,
        hairline: _ctx.hairline,
        dashed: _ctx.dashed
      }, null, 8, ["color", "customStyle", "hairline", "dashed"])
    ]),
    _: 1
  }, 8, ["style", "onClick"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-14eab0c7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  setup(__props) {
    const { mescrollInit, downCallback, getMescroll } = useMescroll(onPageScroll, onReachBottom);
    const list2 = ref([]);
    const loading = ref(false);
    ref(false);
    const orderState = ref("");
    const orderStateList = ref([
      {
        name: "全部",
        status: ""
      },
      {
        name: "待开票",
        status: 0
      },
      {
        name: "已开票",
        status: 1
      }
    ]);
    ref();
    const mch_id = ref("");
    const isTradeManaged = ref(false);
    useSystemStore();
    ref(null);
    onLoad((option) => {
      orderState.value = option.status || "";
    });
    onShow(() => {
      nextTick(() => {
        if (getMescroll()) {
          getMescroll().resetUpScroll();
        }
      });
    });
    const getShopOrderFn = (mescroll) => {
      loading.value = false;
      let data = {
        page: mescroll.num,
        limit: mescroll.size,
        status: orderState.value
      };
      getInvoiceList(data).then((res) => {
        let newArr = res.data.data;
        if (mescroll.num == 1) {
          list2.value = [];
        }
        list2.value = list2.value.concat(newArr);
        mescroll.endSuccess(newArr.length);
        mch_id.value = res.data.mch_id;
        isTradeManaged.value = res.data.is_trade_managed;
        loading.value = true;
      }).catch(() => {
        loading.value = true;
        mescroll.endErr();
      });
    };
    const cancelFn = (item) => {
      showModal({
        title: "提示",
        content: "您确定要取消申请吗？",
        confirmColor: useConfigStore().themeColor["--primary-color"],
        success: (res) => {
          if (res.confirm) {
            cancelInvoice(item.id).then((data) => {
              getMescroll().resetUpScroll();
            });
          }
        }
      });
    };
    const editFn = (item) => {
      redirect({ url: "/addon/shop/pages/invoice/invoice_edit", param: { invoice_id: item.id } });
    };
    const toLink = (data) => {
      redirect({ url: "/addon/shop/pages/invoice/detail", param: { invoice_id: data.id } });
    };
    const orderStateFn = (status) => {
      orderState.value = status.toString();
      list2.value = [];
      getMescroll().resetUpScroll();
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_u_divider = resolveEasycom(resolveDynamicComponent("u-divider"), __easycom_2);
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "bg-[var(--page-bg-color)] min-h-screen overflow-hidden order-list",
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "fixed left-0 top-0 right-0 z-10" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_scroll_view, {
                "scroll-x": true,
                class: "tab-style-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "tab-content !justify-evenly" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(orderStateList.value, (item, index) => {
                        return openBlock(), createBlock(_component_v_uni_view, {
                          class: normalizeClass(["tab-items", { "class-select": orderState.value === item.status.toString() }]),
                          onClick: ($event) => orderStateFn(item.status)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(MescrollBody, {
            ref: "mescrollRef",
            top: "88rpx",
            onInit: unref(mescrollInit),
            down: { use: false },
            onUp: getShopOrderFn
          }, {
            default: withCtx(() => [
              list2.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "sidebar-margin pt-[var(--top-m)]"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(list2.value, (item, index) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: index,
                      class: "mb-[var(--top-m)] card-template",
                      onClick: withModifiers(($event) => toLink(item), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "flex justify-between items-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[#303133] text-[24rpx] font-400 leading-[36rpx] flex items-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_view, { class: "text-[#333] text-[26rpx] px-[3rpx]" }, {
                                      default: withCtx(() => [
                                        createTextVNode("电子发票")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_uni_view, { class: "ml-[10rpx] text-[26rpx]" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.create_time), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_uni_view, {
                                  class: normalizeClass(["text-[#303133] text-[26rpx] leading-[34rpx]", { "text-[var(--text-color-light9)]": item.is_invoice == 1, "!text-primary": item.is_invoice == 0 || item.is_invoice == 2 }])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.invoice_type_name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_u_divider, { lineColor: "#f6f6f6" }),
                        createVNode(_component_v_uni_view, { class: "leading-none" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.header_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, {
                          class: normalizeClass(["mt-[20rpx] grid grid-cols-[1fr,1fr,auto] gap-[20rpx]", { "grid-cols-[1fr,auto]": item.is_invoice != 1 }])
                        }, {
                          default: withCtx(() => [
                            item.is_invoice == 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "truncate"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[#999]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 发票代码 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#333] mt-[20rpx] truncate" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.invoice_number), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createVNode(_component_v_uni_view, { class: "truncate" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[#999]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 开票类型 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#333] mt-[20rpx] truncate" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.header_type_name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "truncate flex flex-col justify-end items-end" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_view, { class: "text-[34rpx] text-[#333] mt-[20rpx] truncate price-font" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ￥" + toDisplayString(item.money), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(_component_v_uni_view, { class: "flex justify-end text-[28rpx] mt-[20rpx] items-center" }, {
                          default: withCtx(() => [
                            item.is_invoice == 2 ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              class: "text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[#ccc] rounded-full text-[var(--text-color-light3)] box-border",
                              onClick: withModifiers(($event) => cancelFn(item), ["stop"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode("取消申请")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            item.is_invoice == 2 ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 1,
                              class: "text-[24rpx] font-500 flex-center h-[56rpx] min-w-[150rpx] text-center border-[0] text-[#fff] primary-btn-bg rounded-full ml-[20rpx] box-border",
                              onClick: withModifiers(($event) => editFn(item), ["stop"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode("修改申请")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              !list2.value.length && loading.value ? (openBlock(), createBlock(MescrollEmpty, {
                key: 1,
                option: { tip: "暂无数据" }
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onInit"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const list_vue_vue_type_style_index_0_scoped_ab4a64b7_lang = "";
const list_vue_vue_type_style_index_1_scoped_ab4a64b7_lang = "";
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab4a64b7"]]);
export {
  list as default
};
