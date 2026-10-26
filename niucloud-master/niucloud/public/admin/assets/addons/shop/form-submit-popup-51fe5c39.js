import { ElIcon as j, ElTooltip as L, ElRadio as q, ElRadioGroup as G, ElInput as K, ElDatePicker as $, ElOption as H, ElSelect as J, ElFormItem as Q, ElCheckbox as W, ElButton as X, ElDialog as Y } from "element-plus/es";
import { defineComponent as Z, ref as m, reactive as P, resolveComponent as ee, openBlock as p, createElementBlock as d, createVNode as o, unref as t, withCtx as c, createElementVNode as e, createTextVNode as w, toDisplayString as a, createCommentVNode as r, createBlock as E, Fragment as U, renderList as te, pushScopeId as le, popScopeId as se } from "vue";
import oe from "/admin/assets/shared/core-shared.js";
import ae from "/admin/assets/shared/core-shared.js";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as ie } from "element-plus";
import "./browser-b31b1ebf.js";
import { filterNumber as ne } from "/admin/assets/shared/core-shared.js";
import { getFormSubmitConfig as ce, editDiyFormSubmitConfig as pe } from "/admin/assets/shared/core-shared.js";
import { _ as de } from "./_plugin-vue_export-helper-dad06003.js";
const h = (v) => (le("data-v-c42021fd"), v = v(), se(), v), _e = { class: "flex flex-1 mt-[24px] mx-[24px] mb-0" }, me = { class: "preview-wrap" }, re = /* @__PURE__ */ h(() => /* @__PURE__ */ e("div", { class: "absolute z-1 left-0 top-0" }, [
  /* @__PURE__ */ e("img", {
    src: oe,
    class: "w-[324px]"
  })
], -1)), ue = /* @__PURE__ */ h(() => /* @__PURE__ */ e("div", { class: "absolute z-1 left-0 bottom-0" }, [
  /* @__PURE__ */ e("img", {
    src: ae,
    class: "w-[324px]"
  })
], -1)), xe = { class: "page-wrap" }, fe = { class: "px-[13px] flex flex-col items-center flex-1" }, be = { class: "flex items-center justify-center w-[48px] h-[48px] text-[40px] p-[4px] mt-[32px] mb-[16px] mx-auto rounded-[50%]" }, he = { class: "record-name" }, ve = {
  key: 0,
  class: "text-[#1E1E1E] font-bold text-[24px]"
}, ye = {
  key: 1,
  class: "text-[#1E1E1E] font-bold text-[16px]"
}, ke = { class: "to-detail" }, we = { class: "text-[14px] mt-[16px] py-[4px] px[8px] text-[#576b95]" }, ge = { class: "relative pt-[8px] pb-[48px] h-[112px]" }, Ve = {
  key: 0,
  class: "!mt-[16px] rounded-[3px] mx-auto text-[15px] w-[100px] min-w-[160px] h-[32px] leading-[32px] text-center max-w-[274px] truncate bg-[#20bf64] text-[#ffffff]"
}, Te = { class: "text-[15px]" }, Ee = {
  key: 1,
  class: "!mt-[16px] rounded-[3px] mx-auto text-[15px] w-[100px] min-w-[160px] h-[32px] leading-[32px] text-center max-w-[274px] truncate bg-[#f2f2f2] text-[#353535]"
}, Se = { class: "text-[14px]" }, Ce = { class: "flex-1" }, Pe = { class: "item-wrap" }, Ue = { class: "text-[16px] h-[24px] font-bold text-[#262626] mb-[16px] w-[140px] mr-[32px] flex-shrink-0" }, De = { class: "mr-[3px]" }, Fe = /* @__PURE__ */ h(() => /* @__PURE__ */ e("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Ie = {
  key: 0,
  class: "item-wrap"
}, Be = { class: "text-[16px] h-[24px] font-bold text-[#262626] mb-[16px] w-[140px] mr-[32px] flex-shrink-0" }, Me = { class: "mr-[3px]" }, Ne = { class: "!text-[#999] text-[12px] ml-[8px]" }, Oe = { class: "item-wrap" }, ze = { class: "text-[16px] h-[24px] font-bold text-[#262626] mb-[16px] w-[140px] mr-[32px] flex-shrink-0" }, Ae = { class: "mr-[3px]" }, Re = /* @__PURE__ */ h(() => /* @__PURE__ */ e("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), je = { class: "mr-[3px]" }, Le = { class: "w-[250px]" }, qe = /* @__PURE__ */ h(() => /* @__PURE__ */ e("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Ge = {
  key: 1,
  class: "flex items-center mt-[5px]"
}, Ke = { class: "item-wrap" }, $e = { class: "text-[16px] h-[24px] font-bold text-[#262626] mb-[16px] w-[140px] mr-[32px] flex-shrink-0" }, He = { class: "text-primary cursor-pointer mr-[10px]" }, Je = { class: "text-primary cursor-pointer" }, Qe = { class: "block" }, We = { class: "text-[#999] ml-[22px]" }, Xe = { class: "item-wrap" }, Ye = { class: "text-[16px] h-[24px] font-bold text-[#262626] mb-[16px] w-[140px] mr-[32px] flex-shrink-0" }, Ze = { class: "content-list-wrap" }, et = { class: "text-[#333]" }, tt = { class: "text-[#999] text-[12px] pl-[24px] mt-[4px]" }, lt = { class: "text-[#333]" }, st = { class: "text-[#999] text-[12px] pl-[24px] mt-[4px]" }, ot = { class: "dialog-footer" }, at = /* @__PURE__ */ Z({
  __name: "form-submit-popup",
  emits: ["complete"],
  setup(v, { expose: D, emit: F }) {
    const x = m(!1), y = m(!1), S = {
      id: 0,
      form_id: 0,
      submit_after_action: "text",
      // 填表人提交后操作，text：文字信息，voucher：核销凭证
      tips_type: "default",
      // 提示内容类型，default：默认提示，diy：自定义提示
      tips_text: "",
      // 自定义提示内容
      time_limit_type: "no_limit",
      // 核销凭证有效期限制类型，no_limit：不限制，specify_time：指定固定开始结束时间，submission_time：按提交时间设置有效期
      // 核销凭证时间限制规则，json格式 todo 结构待定，后续完善
      time_limit_rule: {
        validity_time: [],
        // 指定固定开始结束时间
        submission_time_value: "",
        // 按提交时间设置有效期
        timeUnit: "day"
        // 提交时间单位
      },
      // 核销凭证内容，json格式 todo 结构待定，后续完善
      voucher_content_rule: {},
      // 填写成功后续操作
      success_after_action: {
        share: !1,
        // 转发填写内容
        finish: !0,
        // 完成
        goback: !0
        // 返回
      }
    }, s = P({ ...S });
    m(""), m(""), m(""), m(""), m("");
    const I = P([
      {
        text: "天",
        value: "day"
      },
      {
        text: "周",
        value: "week"
      },
      {
        text: "月",
        value: "month"
      },
      {
        text: "年",
        value: "year"
      },
      {
        text: "分钟",
        value: "minutes"
      }
    ]), B = async (k = null) => {
      if (Object.assign(s, S), k) {
        const i = await (await ce(k.form_id)).data;
        i && Object.keys(s).forEach((f) => {
          i[f] != null && (s[f] = i[f]);
        });
      }
    }, M = () => {
      if (s.tips_type == "diy" && !s.tips_text) {
        ie.error("提示不能为空");
        return;
      }
      if (y.value)
        return;
      y.value = !0, pe(s).then((i) => {
        y.value = !1, x.value = !1, F("complete");
      }).catch((i) => {
        y.value = !1;
      });
    };
    return D({
      showDialog: x,
      setFormData: B
    }), (k, i) => {
      const f = ee("SuccessFilled"), N = j, g = L, u = q, V = G, b = K, O = $, z = H, A = J, T = Q, _ = W, C = X, R = Y;
      return p(), d("div", null, [
        o(R, {
          modelValue: x.value,
          "onUpdate:modelValue": i[11] || (i[11] = (n) => x.value = n),
          title: t(l)("submitSuccess"),
          width: "850px",
          "close-on-press-escape": !0,
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: c(() => [
            e("div", ot, [
              o(C, {
                onClick: i[10] || (i[10] = (n) => x.value = !1)
              }, {
                default: c(() => [
                  w(a(t(l)("cancel")), 1)
                ]),
                _: 1
              }),
              o(C, {
                type: "primary",
                onClick: M
              }, {
                default: c(() => [
                  w(a(t(l)("save")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: c(() => [
            e("div", _e, [
              e("div", me, [
                re,
                ue,
                e("div", xe, [
                  e("div", fe, [
                    e("div", be, [
                      o(N, null, {
                        default: c(() => [
                          o(f, { color: "#20bf64" })
                        ]),
                        _: 1
                      })
                    ]),
                    e("div", he, [
                      s.tips_type == "default" ? (p(), d("span", ve, a(t(l)("writeSuccess")), 1)) : s.tips_type == "diy" ? (p(), d("span", ye, a(s.tips_text ? s.tips_text : "填写成功"), 1)) : r("", !0)
                    ]),
                    e("div", ke, [
                      e("div", we, a(t(l)("viewFillingDetails")), 1)
                    ])
                  ]),
                  e("div", ge, [
                    s.success_after_action.finish ? (p(), d("div", Ve, [
                      e("div", Te, a(t(l)("finish")), 1)
                    ])) : r("", !0),
                    s.success_after_action.goback ? (p(), d("div", Ee, [
                      e("div", Se, a(t(l)("back")), 1)
                    ])) : r("", !0)
                  ])
                ])
              ]),
              e("div", Ce, [
                e("div", Pe, [
                  e("div", Ue, a(t(l)("afterSubmission")), 1),
                  o(V, {
                    modelValue: s.submit_after_action,
                    "onUpdate:modelValue": i[0] || (i[0] = (n) => s.submit_after_action = n),
                    class: "!block"
                  }, {
                    default: c(() => [
                      o(u, {
                        label: "text",
                        class: "!flex"
                      }, {
                        default: c(() => [
                          e("span", De, a(t(l)("displayTextMessages")), 1),
                          o(g, {
                            effect: "light",
                            placement: "top"
                          }, {
                            content: c(() => [
                              e("p", null, a(t(l)("displayTextMessagesTips")), 1)
                            ]),
                            default: c(() => [
                              Fe
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                s.submit_after_action == "text" ? (p(), d("div", Ie, [
                  e("div", Be, a(t(l)("promptText")), 1),
                  e("div", null, [
                    o(V, {
                      modelValue: s.tips_type,
                      "onUpdate:modelValue": i[1] || (i[1] = (n) => s.tips_type = n),
                      class: "!block"
                    }, {
                      default: c(() => [
                        o(u, {
                          label: "default",
                          class: "!block"
                        }, {
                          default: c(() => [
                            e("span", Me, a(t(l)("defaultPrompt")), 1),
                            e("span", Ne, a(t(l)("defaultPromptTips")), 1)
                          ]),
                          _: 1
                        }),
                        o(u, {
                          label: "diy",
                          class: "!block"
                        }, {
                          default: c(() => [
                            w(a(t(l)("diyPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    s.tips_type == "diy" ? (p(), E(b, {
                      key: 0,
                      modelValue: s.tips_text,
                      "onUpdate:modelValue": i[2] || (i[2] = (n) => s.tips_text = n),
                      modelModifiers: { trim: !0 },
                      placeholder: t(l)("tipsTextPlaceholder"),
                      class: "w-[350px]",
                      maxlength: "30",
                      clearable: "",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])) : r("", !0)
                  ])
                ])) : s.submit_after_action == "voucher" ? (p(), d(U, { key: 1 }, [
                  e("div", Oe, [
                    e("div", ze, a(t(l)("validityPeriodOfVoucher")), 1),
                    e("div", null, [
                      o(V, {
                        modelValue: s.time_limit_type,
                        "onUpdate:modelValue": i[3] || (i[3] = (n) => s.time_limit_type = n),
                        class: "!block"
                      }, {
                        default: c(() => [
                          o(u, {
                            label: "no_limit",
                            class: "!block"
                          }, {
                            default: c(() => [
                              w(a(t(l)("noLimit")), 1)
                            ]),
                            _: 1
                          }),
                          o(u, {
                            label: "specify_time",
                            class: "!block"
                          }, {
                            default: c(() => [
                              e("span", Ae, a(t(l)("specifyTime")), 1),
                              o(g, {
                                effect: "light",
                                placement: "top"
                              }, {
                                content: c(() => [
                                  e("p", null, a(t(l)("specifyTimeTips")), 1)
                                ]),
                                default: c(() => [
                                  Re
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          o(u, {
                            label: "submission_time",
                            class: "!block"
                          }, {
                            default: c(() => [
                              e("span", je, a(t(l)("submissionTime")), 1),
                              o(g, {
                                effect: "light",
                                placement: "top"
                              }, {
                                content: c(() => [
                                  e("p", Le, a(t(l)("submissionTimeTips")), 1)
                                ]),
                                default: c(() => [
                                  qe
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      s.time_limit_type == "specify_time" ? (p(), E(O, {
                        key: 0,
                        modelValue: s.validity_time,
                        "onUpdate:modelValue": i[4] || (i[4] = (n) => s.validity_time = n),
                        type: "datetimerange",
                        "range-separator": "至",
                        "start-placeholder": "开始时间",
                        "end-placeholder": "结束时间"
                      }, null, 8, ["modelValue"])) : r("", !0),
                      s.time_limit_type == "submission_time" ? (p(), d("div", Ge, [
                        e("span", null, a(t(l)("afterSubmissionRecords")), 1),
                        o(b, {
                          modelValue: s.submission_time_value,
                          "onUpdate:modelValue": i[5] || (i[5] = (n) => s.submission_time_value = n),
                          modelModifiers: { trim: !0 },
                          onKeyup: i[6] || (i[6] = (n) => t(ne)(n)),
                          size: "small",
                          clearable: "",
                          class: "!w-[100px] px-[5px]",
                          maxlength: "3"
                        }, null, 8, ["modelValue"]),
                        o(A, {
                          modelValue: s.timeUnit,
                          "onUpdate:modelValue": i[7] || (i[7] = (n) => s.timeUnit = n),
                          clearable: "",
                          class: "!w-[100px] pr-[5px]",
                          size: "small"
                        }, {
                          default: c(() => [
                            (p(!0), d(U, null, te(I, (n, it) => (p(), E(z, {
                              key: n.value,
                              label: n.text,
                              value: n.value
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"]),
                        e("span", null, a(t(l)("effective")), 1)
                      ])) : r("", !0)
                    ])
                  ]),
                  e("div", Ke, [
                    e("div", $e, a(t(l)("voucherStyle")), 1),
                    e("div", null, [
                      o(T, {
                        label: t(l)("titleAboveTheCode")
                      }, {
                        default: c(() => [
                          o(b, {
                            clearable: "",
                            placeholder: t(l)("titleAboveTheCodePlaceholder"),
                            class: "input-width",
                            maxlength: 20
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      o(T, {
                        label: t(l)("contentAboveTheCode")
                      }, {
                        default: c(() => [
                          o(b, {
                            clearable: "",
                            placeholder: t(l)("contentAboveTheCodePlaceholder"),
                            class: "input-width",
                            maxlength: 20
                          }, null, 8, ["placeholder"]),
                          e("div", null, [
                            e("span", He, a(t(l)("addLinefeeds")), 1),
                            e("span", Je, a(t(l)("addFields")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      o(T, {
                        label: t(l)("contentBelowTheCode")
                      }, {
                        default: c(() => [
                          e("div", Qe, [
                            o(_, {
                              class: "!block",
                              label: t(l)("submissionRecordTime"),
                              value: ""
                            }, null, 8, ["label"]),
                            o(_, {
                              class: "!block !h-[20px]",
                              label: t(l)("currentTime"),
                              value: ""
                            }, null, 8, ["label"]),
                            e("div", We, a(t(l)("currentTimeTips")), 1),
                            o(_, {
                              class: "!block",
                              label: t(l)("dispalyPromptText"),
                              value: ""
                            }, null, 8, ["label"]),
                            o(b, {
                              class: "ml-[22px]",
                              rows: 4,
                              type: "textarea",
                              placeholder: t(l)("tipsTextPlaceholder"),
                              maxlength: "100"
                            }, null, 8, ["placeholder"]),
                            o(_, {
                              class: "!block",
                              label: t(l)("voucherDeadline"),
                              value: ""
                            }, null, 8, ["label"]),
                            o(_, {
                              class: "!block",
                              label: t(l)("saveVoucher"),
                              value: ""
                            }, null, 8, ["label"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])
                  ])
                ], 64)) : r("", !0),
                e("div", Xe, [
                  e("div", Ye, [
                    e("span", null, a(t(l)("subsequentPperationButtons")), 1)
                  ]),
                  e("div", Ze, [
                    o(_, {
                      modelValue: s.success_after_action.finish,
                      "onUpdate:modelValue": i[8] || (i[8] = (n) => s.success_after_action.finish = n),
                      label: t(l)("finish"),
                      value: "finish"
                    }, {
                      default: c(() => [
                        e("div", et, a(t(l)("finish")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label"]),
                    e("p", tt, a(t(l)("finishTips")), 1),
                    o(_, {
                      modelValue: s.success_after_action.goback,
                      "onUpdate:modelValue": i[9] || (i[9] = (n) => s.success_after_action.goback = n),
                      label: t(l)("back"),
                      value: "goback"
                    }, {
                      default: c(() => [
                        e("div", lt, a(t(l)("back")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label"]),
                    e("p", st, a(t(l)("backTips")), 1)
                  ])
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const bt = /* @__PURE__ */ de(at, [["__scopeId", "data-v-c42021fd"]]);
export {
  bt as default
};
