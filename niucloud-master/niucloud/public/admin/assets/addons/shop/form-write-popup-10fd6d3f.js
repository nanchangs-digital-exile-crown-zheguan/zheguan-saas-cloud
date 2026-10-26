import { ElRadio as A, ElRadioGroup as Q, ElFormItem as G, ElOption as J, ElSelect as X, ElInput as Y, ElTooltip as Z, ElDatePicker as ee, ElTimePicker as le, ElForm as te, ElButton as ie, ElDialog as oe, ElLoadingDirective as me } from "element-plus/es";
import { defineComponent as re, ref as g, reactive as R, computed as ae, openBlock as n, createBlock as y, unref as a, withCtx as i, createElementVNode as s, createVNode as m, createTextVNode as f, toDisplayString as d, withDirectives as ne, createElementBlock as V, Fragment as T, renderList as h, createCommentVNode as v, normalizeClass as z } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { filterNumber as D } from "/admin/assets/shared/core-shared.js";
import { getMemberLabelAll as _e, getMemberLevelAll as ue } from "/admin/assets/shared/core-shared.js";
import { getFormWriteConfig as de, editDiyFormWriteConfig as se } from "/admin/assets/shared/core-shared.js";
const pe = { class: "flex items-center" }, fe = /* @__PURE__ */ s("span", null, "每", -1), ye = /* @__PURE__ */ s("span", null, "可填写", -1), be = /* @__PURE__ */ s("span", null, "次", -1), ce = { class: "flex items-center" }, ve = /* @__PURE__ */ s("span", null, "每", -1), we = /* @__PURE__ */ s("span", null, "可填写", -1), xe = /* @__PURE__ */ s("span", { class: "mr-[5px]" }, "次", -1), ge = { class: "w-[250px]" }, Ve = /* @__PURE__ */ s("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), Ee = {
  key: 1,
  class: "flex items-center mt-[5px]"
}, Le = /* @__PURE__ */ s("span", { class: "mr-[5px]" }, "每天", -1), Ue = /* @__PURE__ */ s("span", { class: "ml-[5px]" }, "可填写", -1), Te = { class: "dialog-footer" }, Re = /* @__PURE__ */ re({
  __name: "form-write-popup",
  emits: ["complete"],
  setup(he, { expose: N, emit: O }) {
    const w = g(!1), b = g(!1), k = {
      id: 0,
      form_id: 0,
      // 万能表单id
      write_way: "no_limit",
      // 填写方式，no_limit：不限制，scan：仅限微信扫一扫，url：仅限链接进入
      join_member_type: "all_member",
      // 参与会员，all_member：所有会员参与，selected_member_level：指定会员等级，selected_member_label：指定会员标签
      level_ids: [],
      // 会员等级id集合
      label_ids: [],
      // 会员标签id集合
      member_write_type: "no_limit",
      // 每人可填写次数，no_limit：不限制，diy：自定义
      // 每人可填写次数自定义规则
      member_write_rule: {
        time_value: 1,
        // 时间
        time_unit: "day",
        // 时间单位
        num: 1
        // 可填写次数
      },
      form_write_type: "no_limit",
      // 表单可填写数量，no_limit：不限制，diy：自定义
      // 表单可填写总数自定义规则
      form_write_rule: {
        time_value: 1,
        // 时间
        time_unit: "day",
        // 时间单位
        num: 1
        // 可填写次数
      },
      time_limit_type: "no_limit",
      // 填写时间限制类型，no_limit：不限制，specify_time：指定开始结束时间，open_day_time：设置每日开启时间
      // 填写时间限制规则
      time_limit_rule: {
        specify_time: [],
        // 指定开始结束时间
        open_day_time: []
        // 设置每日开启时间
      },
      is_allow_update_content: 0,
      // 是否允许修改自己填写的内容，0：否，1：是
      write_instruction: ""
      // 表单填写须知
    }, t = R({ ...k }), C = g(), P = ae(() => ({
      label_ids: [
        { required: !0, message: r("labelTips"), trigger: "blur" }
      ],
      level_ids: [
        { required: !0, message: r("levelTips"), trigger: "blur" }
      ],
      member_write_rule: [
        {
          validator: (_, e, o) => {
            let p = "";
            E.forEach((u, c) => {
              u.value == e.time_unit && (p = u.text);
            }), t.member_write_type == "diy" ? e.time_value ? e.num ? o() : o(new Error(r("numCannotNull"))) : o(new Error(`${p}数不能为空`)) : o();
          },
          trigger: ["blur", "change"]
        }
      ],
      form_write_rule: [
        {
          validator: (_, e, o) => {
            let p = "";
            E.forEach((u, c) => {
              u.value == e.time_unit && (p = u.text);
            }), t.member_write_type == "diy" ? e.time_value ? e.num ? o() : o(new Error(r("numCannotNull"))) : o(new Error(`${p}数不能为空`)) : o();
          },
          trigger: ["blur", "change"]
        }
      ],
      time_limit_rule: [
        {
          validator: (_, e, o) => {
            t.time_limit_type == "specify_time" && (!e.specify_time || !e.specify_time.length) ? o(new Error(r("timeLimitRuleOne"))) : t.time_limit_type == "open_day_time" && (!e.open_day_time || !e.open_day_time.length) ? o(new Error(r("timeLimitRuleTwo"))) : t.time_limit_type == "open_day_time" && e.open_day_time && e.open_day_time.length && e.open_day_time[0] == e.open_day_time[1] ? o(new Error(r("timeLimitRuleThree"))) : o();
          },
          trigger: ["blur", "change"]
        }
      ]
    })), M = g([]), j = g([]);
    _e().then(({ data: _ }) => {
      j.value = _;
    }), ue().then(({ data: _ }) => {
      M.value = _;
    });
    const E = R([
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
      }
    ]), S = async (_ = null) => {
      if (Object.assign(t, k), b.value = !0, _) {
        const e = await (await de(_.form_id)).data;
        e && Object.keys(e).length ? Object.keys(t).forEach((o) => {
          e[o] != null && (t[o] = e[o]);
        }) : t.form_id = _.form_id;
      }
      b.value = !1;
    }, B = async (_) => {
      b.value || !_ || await _.validate(async (e) => {
        e && (b.value = !0, se(t).then((p) => {
          b.value = !1, w.value = !1, O("complete");
        }).catch((p) => {
          b.value = !1;
        }));
      });
    };
    return N({
      showDialog: w,
      setFormData: S
    }), (_, e) => {
      const o = A, p = Q, u = G, c = J, L = X, U = Y, H = Z, K = ee, $ = le, I = te, F = ie, W = oe, q = me;
      return n(), y(W, {
        modelValue: w.value,
        "onUpdate:modelValue": e[20] || (e[20] = (l) => w.value = l),
        title: a(r)("writeSet"),
        width: "600px",
        class: "diy-dialog-wrap",
        "close-on-press-escape": !0,
        "destroy-on-close": !0,
        "close-on-click-modal": !1
      }, {
        footer: i(() => [
          s("span", Te, [
            m(F, {
              onClick: e[18] || (e[18] = (l) => w.value = !1)
            }, {
              default: i(() => [
                f(d(a(r)("cancel")), 1)
              ]),
              _: 1
            }),
            m(F, {
              type: "primary",
              loading: b.value,
              onClick: e[19] || (e[19] = (l) => B(C.value))
            }, {
              default: i(() => [
                f(d(a(r)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: i(() => [
          ne((n(), y(I, {
            model: t,
            "label-width": "120px",
            ref_key: "formRef",
            ref: C,
            rules: a(P),
            class: "page-form"
          }, {
            default: i(() => [
              m(u, {
                label: a(r)("joinMemberType")
              }, {
                default: i(() => [
                  m(p, {
                    modelValue: t.join_member_type,
                    "onUpdate:modelValue": e[0] || (e[0] = (l) => t.join_member_type = l)
                  }, {
                    default: i(() => [
                      m(o, { label: "all_member" }, {
                        default: i(() => [
                          f(d(a(r)("allMember")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "selected_member_level" }, {
                        default: i(() => [
                          f(d(a(r)("selectedMemberLevel")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "selected_member_label" }, {
                        default: i(() => [
                          f(d(a(r)("selectedMemberLabel")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              t.join_member_type == "selected_member_label" ? (n(), y(u, {
                key: 0,
                label: a(r)("memberLabel"),
                prop: "label_ids"
              }, {
                default: i(() => [
                  m(L, {
                    modelValue: t.label_ids,
                    "onUpdate:modelValue": e[1] || (e[1] = (l) => t.label_ids = l),
                    clearable: "",
                    multiple: "",
                    placeholder: a(r)("memberLabelPlaceholder"),
                    class: "input-width"
                  }, {
                    default: i(() => [
                      (n(!0), V(T, null, h(j.value, (l, x) => (n(), y(c, {
                        label: l.label_name,
                        value: l.label_id,
                        key: x
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])) : v("", !0),
              t.join_member_type == "selected_member_level" ? (n(), y(u, {
                key: 1,
                label: a(r)("memberLevel"),
                prop: "level_ids"
              }, {
                default: i(() => [
                  m(L, {
                    modelValue: t.level_ids,
                    "onUpdate:modelValue": e[2] || (e[2] = (l) => t.level_ids = l),
                    clearable: "",
                    multiple: "",
                    placeholder: a(r)("memberLevelPlaceholder"),
                    class: "input-width"
                  }, {
                    default: i(() => [
                      (n(!0), V(T, null, h(M.value, (l, x) => (n(), y(c, {
                        label: l.level_name,
                        value: l.level_id,
                        key: x
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])) : v("", !0),
              m(u, {
                label: a(r)("apieceFillQuantity"),
                class: z({ "!mb-[5px]": t.member_write_type == "diy" })
              }, {
                default: i(() => [
                  m(p, {
                    modelValue: t.member_write_type,
                    "onUpdate:modelValue": e[3] || (e[3] = (l) => t.member_write_type = l)
                  }, {
                    default: i(() => [
                      m(o, { label: "no_limit" }, {
                        default: i(() => [
                          f(d(a(r)("noLimit")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "diy" }, {
                        default: i(() => [
                          f(d(a(r)("diy")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "class"]),
              t.member_write_type == "diy" ? (n(), y(u, {
                key: 2,
                label: " ",
                prop: "member_write_rule"
              }, {
                default: i(() => [
                  s("div", pe, [
                    fe,
                    m(U, {
                      modelValue: t.member_write_rule.time_value,
                      "onUpdate:modelValue": e[4] || (e[4] = (l) => t.member_write_rule.time_value = l),
                      modelModifiers: { trim: !0 },
                      onKeyup: e[5] || (e[5] = (l) => a(D)(l)),
                      size: "small",
                      class: "!w-[50px] px-[5px]",
                      maxlength: "3"
                    }, null, 8, ["modelValue"]),
                    m(L, {
                      modelValue: t.member_write_rule.time_unit,
                      "onUpdate:modelValue": e[6] || (e[6] = (l) => t.member_write_rule.time_unit = l),
                      class: "!w-[60px] pr-[5px]",
                      size: "small"
                    }, {
                      default: i(() => [
                        (n(!0), V(T, null, h(E, (l, x) => (n(), y(c, {
                          key: l.value,
                          label: l.text,
                          value: l.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    ye,
                    m(U, {
                      modelValue: t.member_write_rule.num,
                      "onUpdate:modelValue": e[7] || (e[7] = (l) => t.member_write_rule.num = l),
                      modelModifiers: { trim: !0 },
                      onKeyup: e[8] || (e[8] = (l) => a(D)(l)),
                      size: "small",
                      class: "!w-[50px] px-[5px]",
                      maxlength: "3"
                    }, null, 8, ["modelValue"]),
                    be
                  ])
                ]),
                _: 1
              })) : v("", !0),
              m(u, {
                label: a(r)("fillQuantityTotal"),
                class: z({ "!mb-[5px]": t.form_write_type == "diy" })
              }, {
                default: i(() => [
                  m(p, {
                    modelValue: t.form_write_type,
                    "onUpdate:modelValue": e[9] || (e[9] = (l) => t.form_write_type = l)
                  }, {
                    default: i(() => [
                      m(o, { label: "no_limit" }, {
                        default: i(() => [
                          f(d(a(r)("noLimit")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "diy" }, {
                        default: i(() => [
                          f(d(a(r)("diy")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "class"]),
              t.form_write_type == "diy" ? (n(), y(u, {
                key: 3,
                label: " ",
                prop: "form_write_rule"
              }, {
                default: i(() => [
                  s("div", ce, [
                    ve,
                    m(U, {
                      modelValue: t.form_write_rule.time_value,
                      "onUpdate:modelValue": e[10] || (e[10] = (l) => t.form_write_rule.time_value = l),
                      modelModifiers: { trim: !0 },
                      onKeyup: e[11] || (e[11] = (l) => a(D)(l)),
                      size: "small",
                      class: "!w-[50px] px-[5px]",
                      maxlength: "3"
                    }, null, 8, ["modelValue"]),
                    m(L, {
                      modelValue: t.form_write_rule.time_unit,
                      "onUpdate:modelValue": e[12] || (e[12] = (l) => t.form_write_rule.time_unit = l),
                      class: "!w-[60px] pr-[5px]",
                      size: "small"
                    }, {
                      default: i(() => [
                        (n(!0), V(T, null, h(E, (l, x) => (n(), y(c, {
                          key: l.value,
                          label: l.text,
                          value: l.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    we,
                    m(U, {
                      modelValue: t.form_write_rule.num,
                      "onUpdate:modelValue": e[13] || (e[13] = (l) => t.form_write_rule.num = l),
                      modelModifiers: { trim: !0 },
                      onKeyup: e[14] || (e[14] = (l) => a(D)(l)),
                      size: "small",
                      class: "!w-[50px] px-[5px]",
                      maxlength: "3"
                    }, null, 8, ["modelValue"]),
                    xe,
                    m(H, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: i(() => [
                        s("p", ge, d(a(r)("writeTips")), 1)
                      ]),
                      default: i(() => [
                        Ve
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : v("", !0),
              m(u, {
                label: a(r)("fillInTheTimePeriod"),
                prop: "time_limit_rule"
              }, {
                default: i(() => [
                  m(p, {
                    modelValue: t.time_limit_type,
                    "onUpdate:modelValue": e[15] || (e[15] = (l) => t.time_limit_type = l)
                  }, {
                    default: i(() => [
                      m(o, { label: "no_limit" }, {
                        default: i(() => [
                          f(d(a(r)("noLimit")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "specify_time" }, {
                        default: i(() => [
                          f(d(a(r)("setSpecifyTime")), 1)
                        ]),
                        _: 1
                      }),
                      m(o, { label: "open_day_time" }, {
                        default: i(() => [
                          f(d(a(r)("openDayTime")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  t.time_limit_type == "specify_time" ? (n(), y(K, {
                    key: 0,
                    modelValue: t.time_limit_rule.specify_time,
                    "onUpdate:modelValue": e[16] || (e[16] = (l) => t.time_limit_rule.specify_time = l),
                    type: "datetimerange",
                    "range-separator": "至",
                    "start-placeholder": "开始时间",
                    "end-placeholder": "结束时间"
                  }, null, 8, ["modelValue"])) : v("", !0),
                  t.time_limit_type == "open_day_time" ? (n(), V("div", Ee, [
                    Le,
                    m($, {
                      class: "!w-[180px]",
                      modelValue: t.time_limit_rule.open_day_time,
                      "onUpdate:modelValue": e[17] || (e[17] = (l) => t.time_limit_rule.open_day_time = l),
                      format: "HH:mm",
                      "value-format": "HH:mm",
                      "is-range": "",
                      "range-separator": "-",
                      "start-placeholder": "开始时间",
                      "end-placeholder": "结束时间"
                    }, null, 8, ["modelValue"]),
                    Ue
                  ])) : v("", !0)
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [q, b.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Re as default
};
