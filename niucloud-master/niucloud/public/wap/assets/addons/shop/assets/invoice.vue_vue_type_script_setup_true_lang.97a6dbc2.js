/* __addonChunkWindiInjected:invoice_vue_vue_type_script_setup_true_lang_97a6dbc2 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("invoice_vue_vue_type_script_setup_true_lang_97a6dbc2",".flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.h-\\[50vh\\]{\n  height: 50vh;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.mt-\\[10rpx\\]{\n  margin-top: 0.3125rem;\n}.px-\\[var\\(--popup-sidebar-m\\)\\]{\n  padding-left: var(--popup-sidebar-m);\n  padding-right: var(--popup-sidebar-m);\n}.pb-\\[60rpx\\]{\n  padding-bottom: 1.875rem;\n}.pt-0{\n  padding-top: 0px;\n}");
import { i as index$g, S as ScrollView, d as index$x } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_5, a as __easycom_6 } from "./u-form.5eb516df.js";
import { defineComponent, ref, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createTextVNode, unref, normalizeClass, withDirectives, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, vShow, nextTick } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_0 } from "./u-input.854f14a8.js";
import "./scroll-view.29370e9b.js";
import "./button.fdf0e29d.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { g as getInvoiceConfig } from "./config.38ad711a.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invoice",
  emits: ["confirm"],
  setup(__props, { expose, emit: emits }) {
    const invoicePop = ref(false);
    const config = ref({
      is_invoice: 2,
      invoice_content: []
    });
    const need = ref(false);
    ref(false);
    const formData = ref({
      header_type: 1,
      header_name: "",
      type: "",
      name: "",
      tax_number: "",
      telephone: "",
      address: "",
      bank_name: "",
      bank_card_number: ""
    });
    const invoiceOpen = computed(() => {
      return config.value.is_invoice == 1;
    });
    getInvoiceConfig().then(({ data }) => {
      config.value = data;
      data.invoice_content.length && (formData.value.name = data.invoice_content[0]);
    }).catch();
    const inputChange = (e) => {
      nextTick(() => {
        formData.value.tax_number = e.replace(/[^0-9a-zA-Z]/g, "");
      });
    };
    const formRef = ref(null);
    const rules = computed(() => {
      return {
        "header_name": {
          type: "string",
          required: need.value,
          message: "请输入发票抬头",
          trigger: ["blur", "change"]
        },
        "tax_number": [{
          type: "string",
          required: need.value && formData.value.header_type == 2,
          message: "请输入纳税人识别号",
          trigger: ["blur", "change"]
        }, {
          validator(rule, value, callback) {
            const limit = /^[0-9a-zA-Z]+$/;
            if (!limit.test(value) && formData.header_type == 2) {
              callback(new Error("请输入正确的纳税人识别号"));
            } else {
              callback();
            }
          }
        }]
      };
    });
    const open = () => {
      invoicePop.value = true;
    };
    const confirm = () => {
      formRef.value.validate().then(() => {
        const invoice = need.value ? formData.value : {};
        emits("confirm", invoice);
        invoicePop.value = false;
      });
    };
    const closeFn = () => {
      invoicePop.value = false;
    };
    expose({
      open,
      invoiceOpen
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_form_item = resolveEasycom(resolveDynamicComponent("u-form-item"), __easycom_5);
      const _component_u_input = resolveEasycom(resolveDynamicComponent("u-input"), __easycom_0);
      const _component_u_form = resolveEasycom(resolveDynamicComponent("u-form"), __easycom_6);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_button = index$x;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_u_popup, {
        show: invoicePop.value,
        onClose: closeFn,
        mode: "bottom"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "popup-common" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("请填写发票信息")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": true,
                class: "h-[50vh]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "px-[var(--popup-sidebar-m)] pb-[60rpx] pt-0 text-sm" }, {
                    default: withCtx(() => [
                      createVNode(_component_u_form, {
                        labelPosition: "left",
                        model: formData.value,
                        labelWidth: "200rpx",
                        labelStyle: { "font-size": "28rpx" },
                        errorType: "toast",
                        rules: unref(rules),
                        ref_key: "formRef",
                        ref: formRef
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                            default: withCtx(() => [
                              createVNode(_component_u_form_item, {
                                label: "需要发票",
                                leftIconStyle: "text-[28rpx]"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, { class: "flex" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, {
                                        class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] mr-[20rpx] border-[2rpx] border-[var(--temp-bg)] bg-[var(--temp-bg)] border-solid text-[24rpx]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": !need.value }]),
                                        onClick: _cache[0] || (_cache[0] = ($event) => need.value = false)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("不需要")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_v_uni_view, {
                                        class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": need.value }]),
                                        onClick: _cache[1] || (_cache[1] = ($event) => need.value = true)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("需要")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode(_component_v_uni_view, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                default: withCtx(() => [
                                  createVNode(_component_u_form_item, { label: "抬头类型" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, { class: "flex" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_uni_view, {
                                            class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] mr-[20rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": formData.value.header_type == 1 }]),
                                            onClick: _cache[2] || (_cache[2] = ($event) => formData.value.header_type = 1)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("个人 ")
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_v_uni_view, {
                                            class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": formData.value.header_type == 2 }]),
                                            onClick: _cache[3] || (_cache[3] = ($event) => formData.value.header_type = 2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("企业 ")
                                            ]),
                                            _: 1
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                default: withCtx(() => [
                                  createVNode(_component_u_form_item, {
                                    label: "发票内容",
                                    prop: "header_name"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_view, { class: "flex flex-wrap" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(config.value.invoice_content, (item, index) => {
                                            return openBlock(), createBlock(_component_v_uni_view, {
                                              class: normalizeClass(["box-border rounded px-[20rpx] py-[12rpx] leading-[1.4] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)] my-[10rpx]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": formData.value.name == item, "mr-[20rpx]": config.value.invoice_content.length - 1 != index }]),
                                              onClick: ($event) => formData.value.name = item
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
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
                              createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                default: withCtx(() => [
                                  createVNode(_component_u_form_item, {
                                    label: "发票抬头",
                                    prop: "header_name"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_input, {
                                        fontSize: "28rpx",
                                        modelValue: formData.value.header_name,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.header_name = $event),
                                        modelModifiers: { trim: true },
                                        border: "none",
                                        maxlength: "50",
                                        "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                        clearable: "",
                                        placeholder: "请输入发票抬头"
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              formData.value.header_type == 2 ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_form_item, {
                                        label: "纳税人识别号",
                                        prop: "tax_number"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_u_input, {
                                            fontSize: "28rpx",
                                            modelValue: formData.value.tax_number,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.tax_number = $event),
                                            modelModifiers: { trim: true },
                                            border: "none",
                                            clearable: "",
                                            placeholder: "请输入纳税人识别号",
                                            maxlength: "20",
                                            "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                            onChange: inputChange
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_form_item, { label: "注册地址" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_u_input, {
                                            fontSize: "28rpx",
                                            modelValue: formData.value.address,
                                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.address = $event),
                                            "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                            border: "none",
                                            clearable: "",
                                            maxlength: "120",
                                            placeholder: "(选填)请输入企业注册地址"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_form_item, { label: "注册电话" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_u_input, {
                                            fontSize: "28rpx",
                                            modelValue: formData.value.telephone,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.value.telephone = $event),
                                            "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                            border: "none",
                                            clearable: "",
                                            maxlength: "12",
                                            placeholder: "(选填)请输入企业注册电话"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_form_item, { label: "开户银行" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_u_input, {
                                            fontSize: "28rpx",
                                            modelValue: formData.value.bank_name,
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.value.bank_name = $event),
                                            "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                            border: "none",
                                            clearable: "",
                                            maxlength: "50",
                                            placeholder: "(选填)请输入企业开户银行"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_u_form_item, { label: "银行账号" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_u_input, {
                                            fontSize: "28rpx",
                                            modelValue: formData.value.bank_card_number,
                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.value.bank_card_number = $event),
                                            "placeholder-class": "!text-[var(--text-color-light9)] text-[28rpx]",
                                            border: "none",
                                            clearable: "",
                                            maxlength: "25",
                                            placeholder: "(选填)请输入企业开户银行账号"
                                          }, null, 8, ["modelValue"])
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
                          }, 512), [
                            [vShow, need.value]
                          ])
                        ]),
                        _: 1
                      }, 8, ["model", "rules"])
                    ]),
                    _: 1
                  })
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
  _sfc_main as _
};
