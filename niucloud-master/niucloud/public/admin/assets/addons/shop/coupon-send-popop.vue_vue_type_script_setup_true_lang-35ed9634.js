import { ElFormItem as W, ElInput as X, ElRadio as Y, ElRadioGroup as Z, ElTableColumn as ee, ElButton as le, ElTable as ae, ElOption as te, ElSelect as re, ElForm as ne, ElDialog as oe, ElLoadingDirective as me } from "element-plus/es";
import { defineComponent as ue, ref as d, computed as ie, openBlock as i, createBlock as p, unref as n, withCtx as o, createElementVNode as b, createVNode as u, createTextVNode as y, toDisplayString as v, withDirectives as de, withModifiers as se, createElementBlock as x, Fragment as k, renderList as C, createCommentVNode as V } from "vue";
import pe from "/admin/assets/shared/core-shared.js";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { img as _e } from "/admin/assets/shared/core-shared.js";
import { j as be, k as ve, s as ce } from "./marketing-f8ec8b08.js";
import { getMemberLabelAll as fe, getMemberLevelAll as ge } from "/admin/assets/shared/core-shared.js";
import he from "./select-member-b04ea04c.js";
const ye = { class: "text-[12px] text-[#999]" }, xe = { class: "flex items-center" }, we = { class: "mr-[10px] rounded-full w-[50px] h-[50px] flex items-center justify-center" }, Ve = ["src"], Ee = {
  key: 1,
  class: "max-w-[50px] max-h-[50px]",
  src: pe,
  alt: ""
}, Te = { class: "flex flex-col" }, ke = { class: "dialog-footer" }, Ue = /* @__PURE__ */ ue({
  __name: "coupon-send-popop",
  emits: ["callback"],
  setup(Ce, { expose: R, emit: q }) {
    const c = d(!1), E = d(), f = d(!1), I = {
      id: "",
      // 优惠券id
      send_num: "",
      // 发放数量
      range_type: "all",
      // 发放范围
      range_param: {
        member_ids: [],
        // 会员
        member_level: [],
        // 等级
        member_label: []
        // 标签
      }
    }, U = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, r = d({ ...I }), w = d(), $ = ie(() => ({
      send_num: [
        {
          required: !0,
          trigger: "blur",
          validator: (e, t, m) => {
            t === "" || t === null || t === void 0 ? m(new Error(a("sendNumTipThree"))) : isNaN(t) || !U.number.test(t) ? m(new Error(a("sendNumTipFive"))) : t <= 0 || t > 10 ? m(new Error(a("sendNumTipFour"))) : m();
          }
        }
      ],
      "range_param.member_label": [
        {
          validator: (e, t, m) => {
            r.value.range_type == "member_label" && t.length == 0 ? m(a("memberLabelTip")) : m();
          },
          required: !0,
          trigger: "change"
        }
      ],
      "range_param.member_level": [
        {
          validator: (e, t, m) => {
            r.value.range_type == "member_level" && t.length == 0 ? m(a("memberLevelTip")) : m();
          },
          required: !0,
          trigger: "change"
        }
      ],
      "range_param.member_ids": [
        {
          required: !0,
          trigger: "blur",
          validator: (e, t, m) => {
            r.value.range_type == "member" && (g.value.length == 0 ? m(new Error(a("memberTip"))) : m());
          }
        }
      ]
    })), B = d(null), g = d([]), j = (s) => {
      var e;
      g.value = Object.values(s), (e = w.value) == null || e.validateField("range_param.member_ids");
    }, O = (s, e) => {
      g.value.splice(e, 1);
      const t = r.value.range_param.member_ids.indexOf(s.member_id);
      t !== -1 && r.value.range_param.member_ids.splice(t, 1);
    }, L = d([]), N = d([]), D = d({}), M = d(""), P = (s) => {
      E.value = s, f.value = !0, fe().then(({ data: e }) => {
        N.value = e;
      }), ge().then(({ data: e }) => {
        L.value = e;
      }), be(E.value).then(({ data: e }) => {
        M.value = e.title, f.value = !1;
      }), ve().then(({ data: e }) => {
        D.value = e.range_type_list;
      }), c.value = !0;
    }, A = async () => {
      var s;
      await ((s = w.value) == null ? void 0 : s.validate(async (e) => {
        e && (r.value.id = E.value, f.value = !0, ce(r.value).then((t) => {
          f.value = !1, c.value = !1, q("callback");
        }).catch(() => {
          f.value = !1, c.value = !1;
        }));
      }));
    };
    return R({
      showDialog: c,
      show: P
    }), (s, e) => {
      const t = W, m = X, z = Y, G = Z, h = ee, T = le, H = ae, S = te, F = re, J = ne, K = oe, Q = me;
      return i(), p(K, {
        modelValue: c.value,
        "onUpdate:modelValue": e[8] || (e[8] = (l) => c.value = l),
        title: n(a)("sendCouponTitle"),
        width: "1000px",
        "destroy-on-close": !0
      }, {
        footer: o(() => [
          b("span", ke, [
            u(T, {
              type: "primary",
              onClick: e[6] || (e[6] = (l) => A(w.value))
            }, {
              default: o(() => [
                y(v(n(a)("confirm")), 1)
              ]),
              _: 1
            }),
            u(T, {
              onClick: e[7] || (e[7] = (l) => c.value = !1)
            }, {
              default: o(() => [
                y(v(n(a)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: o(() => [
          de((i(), p(J, {
            class: "page-form",
            model: r.value,
            onSubmit: e[5] || (e[5] = se(() => {
            }, ["prevent"])),
            "label-width": "120px",
            ref_key: "formRef",
            ref: w,
            rules: n($)
          }, {
            default: o(() => [
              u(t, {
                label: n(a)("selectCoupon"),
                prop: "title"
              }, {
                default: o(() => [
                  b("div", null, v(M.value), 1)
                ]),
                _: 1
              }, 8, ["label"]),
              u(t, {
                label: n(a)("sendNum"),
                prop: "send_num"
              }, {
                default: o(() => [
                  b("div", null, [
                    u(m, {
                      modelValue: r.value.send_num,
                      "onUpdate:modelValue": e[0] || (e[0] = (l) => r.value.send_num = l),
                      modelModifiers: { number: !0 },
                      class: "input-width",
                      maxlength: "6",
                      placeholder: n(a)("sendNumPrompt")
                    }, {
                      append: o(() => [
                        y(v(n(a)("num")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"]),
                    b("div", ye, v(n(a)("sendNumTip")), 1)
                  ])
                ]),
                _: 1
              }, 8, ["label"]),
              u(t, {
                label: n(a)("rangeType"),
                prop: "range_type",
                required: ""
              }, {
                default: o(() => [
                  u(G, {
                    modelValue: r.value.range_type,
                    "onUpdate:modelValue": e[1] || (e[1] = (l) => r.value.range_type = l)
                  }, {
                    default: o(() => [
                      (i(!0), x(k, null, C(D.value, (l, _) => (i(), p(z, {
                        key: _,
                        label: _
                      }, {
                        default: o(() => [
                          y(v(l), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              r.value.range_type == "member" ? (i(), p(t, {
                key: 0,
                label: n(a)(""),
                prop: "range_param.member_ids"
              }, {
                default: o(() => [
                  u(he, {
                    ref_key: "selectMemberRef",
                    ref: B,
                    modelValue: r.value.range_param.member_ids,
                    "onUpdate:modelValue": e[2] || (e[2] = (l) => r.value.range_param.member_ids = l),
                    onMemberSelect: j,
                    min: 1,
                    max: 20
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"])) : V("", !0),
              g.value.length && r.value.range_type == "member" ? (i(), p(t, {
                key: 1,
                prop: "member_data"
              }, {
                default: o(() => [
                  u(H, {
                    data: g.value,
                    size: "large",
                    "max-height": "400"
                  }, {
                    default: o(() => [
                      u(h, {
                        prop: "nickname",
                        "show-overflow-tooltip": !0,
                        label: n(a)("memberInfo"),
                        "min-width": "150"
                      }, {
                        default: o(({ row: l }) => [
                          b("div", xe, [
                            b("div", we, [
                              l.headimg ? (i(), x("img", {
                                key: 0,
                                class: "max-w-[50px] max-h-[50px]",
                                src: n(_e)(l.headimg),
                                alt: ""
                              }, null, 8, Ve)) : (i(), x("img", Ee))
                            ]),
                            b("div", Te, [
                              b("span", null, v(l.nickname || ""), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      u(h, {
                        prop: "mobile",
                        label: n(a)("mobile"),
                        width: "180"
                      }, null, 8, ["label"]),
                      u(h, {
                        prop: "point",
                        label: n(a)("point"),
                        "min-width": "80"
                      }, null, 8, ["label"]),
                      u(h, {
                        prop: "balance",
                        label: n(a)("balance"),
                        "min-width": "80"
                      }, null, 8, ["label"]),
                      u(h, {
                        label: n(a)("operation"),
                        align: "right",
                        "min-width": "160"
                      }, {
                        default: o(({ row: l, $index: _ }) => [
                          u(T, {
                            type: "primary",
                            link: "",
                            onClick: (Le) => O(l, _)
                          }, {
                            default: o(() => [
                              y(v(n(a)("delete")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 1
              })) : V("", !0),
              r.value.range_type == "member_label" ? (i(), p(t, {
                key: 2,
                label: n(a)("memberLabel"),
                prop: "range_param.member_label"
              }, {
                default: o(() => [
                  u(F, {
                    modelValue: r.value.range_param.member_label,
                    "onUpdate:modelValue": e[3] || (e[3] = (l) => r.value.range_param.member_label = l),
                    multiple: "",
                    clearable: "",
                    placeholder: n(a)("memberLabelPlaceholder"),
                    class: "input-width"
                  }, {
                    default: o(() => [
                      (i(!0), x(k, null, C(N.value, (l, _) => (i(), p(S, {
                        label: l.label_name,
                        value: l.label_id,
                        key: _
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])) : V("", !0),
              r.value.range_type == "member_level" ? (i(), p(t, {
                key: 3,
                label: n(a)("memberLevel"),
                prop: "range_param.member_level"
              }, {
                default: o(() => [
                  u(F, {
                    modelValue: r.value.range_param.member_level,
                    "onUpdate:modelValue": e[4] || (e[4] = (l) => r.value.range_param.member_level = l),
                    multiple: "",
                    clearable: "",
                    placeholder: n(a)("memberLevelPlaceholder"),
                    class: "input-width"
                  }, {
                    default: o(() => [
                      (i(!0), x(k, null, C(L.value, (l, _) => (i(), p(S, {
                        label: l.level_name,
                        value: l.level_id,
                        key: _
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])) : V("", !0)
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [Q, f.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Ue as _
};
