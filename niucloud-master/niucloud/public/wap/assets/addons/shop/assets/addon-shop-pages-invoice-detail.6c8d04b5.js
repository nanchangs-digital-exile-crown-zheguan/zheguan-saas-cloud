/* __addonChunkWindiInjected:addon-shop-pages-invoice-detail_6c8d04b5 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-invoice-detail_6c8d04b5",".bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-\\[8rpx\\]{\n  border-radius: 0.25rem;\n}.flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.\\!items-start{\n  align-items: flex-start !important;\n}.items-center{\n  align-items: center;\n}.justify-between{\n  justify-content: space-between;\n}.h-full{\n  height: 100%;\n}.h-\\[86rpx\\]{\n  height: 2.6875rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.leading-1{\n  line-height: 0.25rem;\n}.leading-\\[35rpx\\]{\n  line-height: 1.09375rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.mb-\\[10rpx\\]{\n  margin-bottom: 0.3125rem;\n}.mt-\\[var\\(--top-m\\)\\]{\n  margin-top: var(--top-m);\n}.mr-\\[15rpx\\]{\n  margin-right: 0.46875rem;\n}.mt-\\[15rpx\\]{\n  margin-top: 0.46875rem;\n}.min-h-screen{\n  min-height: 100vh;\n}.min-w-\\[190rpx\\]{\n  min-width: 5.9375rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.pb-20rpx{\n  padding-bottom: 0.625rem;\n}.text-\\[var\\(--price-text-color\\)\\]{\n  color: var(--price-text-color);\n}.text-\\[\\#666\\]{\n  --tw-text-opacity: 1;\n  color: rgba(102, 102, 102, var(--tw-text-opacity));\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.w-full{\n  width: 100%;\n}.w-\\[86rpx\\]{\n  width: 2.6875rem;\n}");
import { e as closePreviewImage, f as previewImage, i as index$g, a as index$i, b as index$q } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./text.99ce2b32.js";
import { _ as _sfc_main$1 } from "./loading-page.vue_vue_type_script_setup_true_lang.0e84ab2d.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createTextVNode, normalizeClass, toDisplayString, createCommentVNode, createElementBlock, Fragment, renderList, unref } from "/wap/assets/shared/vue.js";
import { o as onLoad, c as onUnload, r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { g as goback, i as img, r as redirect } from "./common.f536f441.js";
import { g as getInvoiceInfo } from "./invoice.bda7cbc9.js";
import "./u-loading-icon.8e9029d5.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  setup(__props) {
    const loading = ref(true);
    const invoiceId = ref("");
    onLoad((option) => {
      if (option.invoice_id) {
        invoiceId.value = option.invoice_id;
        getInvoiceInfoFn();
      } else {
        let parameter = {
          url: "/addon/shop/pages/order/list",
          title: "缺少订单id"
        };
        goback(parameter);
      }
    });
    const detail = ref({});
    const getInvoiceInfoFn = () => {
      loading.value = true;
      getInvoiceInfo(invoiceId.value).then((res) => {
        loading.value = false;
        detail.value = res.data;
        detail.value.pay_voucher = detail.value.pay_voucher.split(",");
      });
    };
    const toLink = (item) => {
      redirect({ url: "/addon/shop/pages/invoice/invoice_order", param: { invoice_id: item.id } });
    };
    const openInvoicePopup = () => {
      if (detail.value.is_invoice == 1 && detail.value.invoice_voucher) {
        imgListPreview(detail.value.invoice_voucher);
      }
    };
    const imgListPreview = (current, all) => {
      const urlList = (all == null ? void 0 : all.length) ? all.map(img) : current ? [img(current)] : [];
      if (urlList.length === 0)
        return;
      const currentUrl = current ? img(current) : urlList[0];
      previewImage({
        current: currentUrl,
        urls: urlList,
        indicator: "number",
        loop: true
      });
    };
    onUnload(() => {
      try {
        closePreviewImage();
      } catch (e) {
      }
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_loading_page = resolveEasycom(resolveDynamicComponent("loading-page"), _sfc_main$1);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          !loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "bg-[var(--page-bg-color)] min-h-screen overflow-hidden"
          }, {
            default: withCtx(() => [
              !loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "pb-20rpx"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "sidebar-margin mt-[var(--top-m)] card-template" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "justify-between card-template-item" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(" 电子发票 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, {
                            class: "text-[28rpx] text-[#999] flex items-center",
                            onClick: _cache[0] || (_cache[0] = ($event) => openInvoicePopup())
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, {
                                class: normalizeClass({ "text-primary": detail.value.is_invoice == 1 })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(detail.value.invoice_type_name), 1)
                                ]),
                                _: 1
                              }, 8, ["class"]),
                              detail.value.is_invoice == 1 ? (openBlock(), createBlock(_component_v_uni_text, {
                                key: 0,
                                class: "iconfont iconyouV6xx text-[#666] text-[30rpx]"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "sidebar-margin mt-[var(--top-m)] card-template" }, {
                    default: withCtx(() => [
                      detail.value.header_name ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("发票抬头")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.header_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.header_type_name ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 1,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("抬头类型")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.header_type_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.name ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 2,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("发票内容")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.tax_number ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 3,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("纳税人识别号")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.tax_number), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.pay_voucher_thumb_small && detail.value.pay_voucher_thumb_small.length > 0 ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 4,
                        class: "card-template-item !items-start"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("支付凭证")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] flex flex-wrap" }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.pay_voucher_thumb_small, (item, index) => {
                                return openBlock(), createBlock(_component_v_uni_view, {
                                  key: index,
                                  class: "w-[86rpx] h-[86rpx] rounded-[8rpx] overflow-hidden mr-[15rpx] mb-[10rpx]"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_image, {
                                      src: unref(img)(item),
                                      mode: "aspectFill",
                                      onClick: ($event) => imgListPreview(detail.value.pay_voucher[index], detail.value.pay_voucher),
                                      class: "w-full h-full"
                                    }, null, 8, ["src", "onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.money ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 5,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("开票金额")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] price-font text-[var(--price-text-color)]" }, {
                            default: withCtx(() => [
                              createTextVNode("￥" + toDisplayString(detail.value.money), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.invoice_time ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 6,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("开票时间")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.invoice_time), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.bank_name ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 7,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("开户银行")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.bank_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.bank_card_number ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 8,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("开户行账号")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.bank_card_number), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.address ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 9,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("注册地址")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.address), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.telephone ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 10,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("联系电话")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.telephone), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.create_time ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 11,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("创建时间")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.create_time), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      detail.value.remark ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 12,
                        class: "card-template-item"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("备注")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] leading-[35rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.remark), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "sidebar-margin mt-[var(--top-m)] card-template" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "justify-between card-template-item" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx]" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "text-[30rpx]" }, {
                                default: withCtx(() => [
                                  createTextVNode("1张发票，含" + toDisplayString(detail.value.order_list.length) + "个订单", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_uni_view, { class: "text-[24rpx] text-[#999] mt-[15rpx]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(detail.value.create_time), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, {
                            class: "flex items-center text-[#999]",
                            onClick: _cache[1] || (_cache[1] = ($event) => toLink(detail.value))
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "text-[24rpx] leading-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("查看")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_uni_text, { class: "iconfont iconyouV6xx text-[30rpx]" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  detail.value.email ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "sidebar-margin mt-[var(--top-m)] card-template"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "text-[30rpx]" }, {
                        default: withCtx(() => [
                          createTextVNode(" 接收信息 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "card-template-item mt-[20rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "text-[28rpx] text-[#666] min-w-[190rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode("电子邮件")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, { class: "text-[28rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(detail.value.email), 1)
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
              })) : createCommentVNode("", true),
              createVNode(_component_v_uni_view, { class: "tab-bar-placeholder" })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_loading_page, { loading: loading.value }, null, 8, ["loading"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as default
};
