/* __addonChunkWindiInjected:addon-shop-pages-invoice-invoice_edit_1ae283ba */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-invoice-invoice_edit_1ae283ba",".bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-\\[100rpx\\]{\n  border-radius: 3.125rem;\n}.rounded-\\[var\\(--rounded-big\\)\\]{\n  border-radius: var(--rounded-big);\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.font-500{\n  font-weight: 500;\n}.h-\\[80rpx\\]{\n  height: 2.5rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.leading-\\[80rpx\\]{\n  line-height: 2.5rem;\n}.m-\\[var\\(--top-m\\)\\]{\n  margin: var(--top-m);\n}.mt-\\[10rpx\\]{\n  margin-top: 0.3125rem;\n}.mt-\\[5rpx\\]{\n  margin-top: 0.15625rem;\n}.min-h-screen{\n  min-height: 100vh;\n}.overflow-hidden{\n  overflow: hidden;\n}.px-\\[var\\(--pad-sidebar-m\\)\\]{\n  padding-left: var(--pad-sidebar-m);\n  padding-right: var(--pad-sidebar-m);\n}.px-\\[var\\(--sidebar-m\\)\\]{\n  padding-left: var(--sidebar-m);\n  padding-right: var(--sidebar-m);\n}.py-\\[var\\(--top-m\\)\\]{\n  padding-top: var(--top-m);\n  padding-bottom: var(--top-m);\n}.py-\\[var\\(--pad-top-m\\)\\]{\n  padding-top: var(--pad-top-m);\n  padding-bottom: var(--pad-top-m);\n}.\\!text-\\[\\#fff\\]{\n  --tw-text-opacity: 1 !important;\n  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}.w-full{\n  width: 100%;\n}");
/* __addonChunkCssInjected:72e7a344 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("72e7a344",".addon-wrap-72e7a344 .u-form-item__body__left{align-items:flex-start!important}.addon-wrap-72e7a344 .u-input--square{margin-top:.15625rem!important}");
import { m as getCurrentPages$1, q as navigateBack, i as index$g, a as index$i, d as index$x } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_5, a as __easycom_6 } from "./u-form.5eb516df.js";
import { defineComponent, ref, computed, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, unref, normalizeClass, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, nextTick } from "/wap/assets/shared/vue.js";
import { o as onLoad, r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_0 } from "./u-input.854f14a8.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3 } from "./u-upload.08bd186e.js";
import "./button.fdf0e29d.js";
import { g as getInvoiceConfig } from "./config.38ad711a.js";
import { c as calculateInvoice, g as getInvoiceInfo, e as editInvoice, a as addInvoice } from "./invoice.bda7cbc9.js";
import { i as img, h as uploadImage, l as deepClone, r as redirect } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-icon.ceb3960f.js";
import "./resize-sensor.8ba09891.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-line.46235f11.js";
import "./input.18765527.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./u-loading-icon.8e9029d5.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invoice_edit",
  setup(__props) {
    const orderIds = ref([]);
    const invoiceId = ref("");
    onLoad((option) => {
      if (option.order_ids) {
        orderIds.value = JSON.parse(option.order_ids || []);
        calculateInvoice({ trade_ids: orderIds.value }).then((res) => {
          formData.value.money = res.data.invoice_money;
        });
      }
      if (option.invoice_id) {
        invoiceId.value = option.invoice_id;
        getInvoiceInfo(option.invoice_id).then((res) => {
          for (const key in formData.value) {
            if (res.data[key])
              formData.value[key] = res.data[key];
          }
          formData.value.pay_voucher = res.data.pay_voucher.split(",") || [];
        });
      }
    });
    const config = ref({
      is_invoice: 2,
      invoice_content: []
    });
    const formData = ref({
      header_type: 1,
      header_name: "",
      type: "",
      name: "",
      tax_number: "",
      telephone: "",
      address: "",
      bank_name: "",
      bank_card_number: "",
      pay_voucher: [],
      money: ""
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
    const voucherListPreview = computed(() => {
      return formData.value.pay_voucher.map((item) => {
        return { url: img(item) };
      });
    });
    const afterRead = (event) => {
      event.file.forEach((item) => {
        uploadImage({
          filePath: item.url,
          name: "file"
        }).then((res) => {
          if (formData.value.pay_voucher.length < 9) {
            formData.value.pay_voucher.push(res.data.url);
          }
        });
      });
    };
    const deletePic = (event) => {
      formData.value.pay_voucher.splice(event.index, 1);
    };
    const rules = computed(() => {
      return {
        "header_name": {
          type: "string",
          required: true,
          message: "请输入发票抬头",
          trigger: ["blur", "change"]
        },
        "money": {
          type: "number",
          required: true,
          message: "请输入发票金额",
          trigger: ["blur", "change"]
        },
        "tax_number": [{
          type: "string",
          required: formData.value.header_type == 2,
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
        }],
        "pay_voucher": {
          type: "array",
          required: true,
          message: "请上传支付凭证",
          trigger: ["blur", "change"]
        }
      };
    });
    const confirm = () => {
      formRef.value.validate().then(() => {
        let submitData = deepClone(formData.value);
        submitData.trade_ids = orderIds.value;
        submitData.pay_voucher = submitData.pay_voucher.join(",");
        if (invoiceId.value) {
          delete submitData.trade_ids;
          editInvoice(invoiceId.value, submitData).then((res) => {
            navigateBack$1();
          }).catch((err) => {
          });
        } else {
          addInvoice(submitData).then((res) => {
            navigateBack$1();
          }).catch((err) => {
          });
        }
      });
    };
    const navigateBack$1 = () => {
      if (getCurrentPages$1().length > 1) {
        navigateBack({
          delta: 1
        });
      } else {
        redirect({
          url: "/app/pages/index/index",
          mode: "reLaunch"
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_u_form_item = resolveEasycom(resolveDynamicComponent("u-form-item"), __easycom_5);
      const _component_u_input = resolveEasycom(resolveDynamicComponent("u-input"), __easycom_0);
      const _component_v_uni_text = index$i;
      const _component_u_upload = resolveEasycom(resolveDynamicComponent("u-upload"), __easycom_3);
      const _component_u_form = resolveEasycom(resolveDynamicComponent("u-form"), __easycom_6);
      const _component_v_uni_button = index$x;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "bg-[var(--page-bg-color)] min-h-screen overflow-hidden",
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "m-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] rounded-[var(--rounded-big)] bg-white" }, {
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
                  createVNode(_component_v_uni_view, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_u_form_item, { label: "抬头类型" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "flex" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, {
                                    class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] mr-[20rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": formData.value.header_type == 1 }]),
                                    onClick: _cache[0] || (_cache[0] = ($event) => formData.value.header_type = 1)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("个人 ")
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(_component_v_uni_view, {
                                    class: normalizeClass(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]", { "!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary": formData.value.header_type == 2 }]),
                                    onClick: _cache[1] || (_cache[1] = ($event) => formData.value.header_type = 2)
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
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.header_name = $event),
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
                      createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                        default: withCtx(() => [
                          createVNode(_component_u_form_item, {
                            label: "发票金额",
                            prop: "money"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, { class: "mt-[5rpx]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formData.value.money), 1)
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
                            label: "支付凭证",
                            prop: "pay_voucher"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "mt-[10rpx]" }, {
                                default: withCtx(() => [
                                  createVNode(_component_u_upload, {
                                    fileList: unref(voucherListPreview),
                                    onAfterRead: afterRead,
                                    onDelete: deletePic,
                                    multiple: "",
                                    maxCount: 5
                                  }, null, 8, ["fileList"])
                                ]),
                                _: 1
                              })
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
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.tax_number = $event),
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
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.address = $event),
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
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.telephone = $event),
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
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.bank_name = $event),
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
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.value.bank_card_number = $event),
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
                  })
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "w-full" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "py-[var(--top-m)] px-[var(--sidebar-m)] box-border" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_button, {
                    class: "primary-btn-bg !text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] font-500",
                    onClick: confirm
                  }, {
                    default: withCtx(() => [
                      createTextVNode("提交")
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
const invoice_edit_vue_vue_type_style_index_0_scoped_72e7a344_lang = "";
const invoice_edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72e7a344"]]);
export {
  invoice_edit as default
};
