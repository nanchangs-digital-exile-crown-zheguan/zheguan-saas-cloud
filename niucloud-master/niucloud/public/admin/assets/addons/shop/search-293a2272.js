import { ElPageHeader as M, ElTableColumn as O, ElTag as P, ElButton as q, ElTable as J, ElCard as K, ElSwitch as Q, ElFormItem as W, ElRadio as X, ElRadioGroup as Y, ElInput as Z, ElForm as ee, ElDialog as le, ElLoadingDirective as ae } from "element-plus/es";
import { defineComponent as te, ref as v, reactive as oe, openBlock as s, createElementBlock as _, createVNode as o, withCtx as a, unref as n, withDirectives as U, createBlock as d, createTextVNode as f, toDisplayString as m, Fragment as E, renderList as V, createElementVNode as ne } from "vue";
import { ArrowLeft as se } from "@element-plus/icons-vue";
import { t as u } from "/admin/assets/shared/admin-lang.js";
import { useRouter as re, useRoute as ue } from "vue-router";
import { C as ie, D as ce, E as de } from "./delivery-da6bd7ad.js";
import "/admin/assets/shared/core-shared.js";
const me = { class: "main-container" }, pe = { class: "w-full" }, we = /* @__PURE__ */ te({
  __name: "search",
  setup(_e) {
    const B = re(), L = ue().meta.title, g = v(!1), c = v(!1), p = v(!1), h = v([]), t = oe({ type: "", name: "", is_use: 0, params: {} }), w = async () => {
      g.value = !0;
      try {
        const { data: i } = await ie();
        h.value = i;
      } finally {
        g.value = !1;
      }
    }, N = async (i) => {
      c.value = !0, p.value = !0;
      try {
        const { data: l } = await ce(i);
        t.type = l.type, t.name = l.name, t.is_use = l.is_use, t.params = l.params;
      } finally {
        c.value = !1;
      }
    }, S = async () => {
      c.value = !0;
      try {
        const i = { is_use: t.is_use };
        Object.keys(t.params).forEach((l) => {
          i[l] = t.params[l].value;
        }), await de(t.type, i), p.value = !1, await w();
      } finally {
        c.value = !1;
      }
    };
    return w(), (i, l) => {
      const T = M, y = O, R = P, b = q, F = J, $ = K, I = Q, k = W, j = X, z = Y, A = Z, G = ee, H = le, x = ae;
      return s(), _("div", me, [
        o($, {
          class: "card !border-none",
          shadow: "never"
        }, {
          default: a(() => [
            o(T, {
              content: n(L),
              icon: n(se),
              onBack: l[0] || (l[0] = (e) => n(B).push({ path: "/shop/delivery/config" }))
            }, null, 8, ["content", "icon"]),
            U((s(), d(F, {
              class: "mt-[20px]",
              data: h.value,
              size: "large"
            }, {
              default: a(() => [
                o(y, {
                  prop: "name",
                  label: n(u)("interfaceType"),
                  "min-width": "180"
                }, null, 8, ["label"]),
                o(y, {
                  label: n(u)("isUse"),
                  align: "center",
                  "min-width": "160"
                }, {
                  default: a(({ row: e }) => [
                    o(R, {
                      type: e.is_use ? "success" : "error"
                    }, {
                      default: a(() => [
                        f(m(e.is_use ? n(u)("statusNormal") : n(u)("statusDeactivate")), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                o(y, {
                  label: n(u)("operation"),
                  align: "right",
                  width: "100"
                }, {
                  default: a(({ row: e }) => [
                    o(b, {
                      type: "primary",
                      link: "",
                      onClick: (C) => N(e.type)
                    }, {
                      default: a(() => [
                        f(m(n(u)("config")), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [x, g.value]
            ])
          ]),
          _: 1
        }),
        o(H, {
          modelValue: p.value,
          "onUpdate:modelValue": l[3] || (l[3] = (e) => p.value = e),
          title: t.name,
          width: "560px",
          "destroy-on-close": ""
        }, {
          footer: a(() => [
            o(b, {
              onClick: l[2] || (l[2] = (e) => p.value = !1)
            }, {
              default: a(() => [
                f(m(n(u)("cancel")), 1)
              ]),
              _: 1
            }),
            o(b, {
              type: "primary",
              loading: c.value,
              onClick: S
            }, {
              default: a(() => [
                f(m(n(u)("save")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          default: a(() => [
            U((s(), d(G, { "label-width": "130px" }, {
              default: a(() => [
                o(k, {
                  label: n(u)("isUse")
                }, {
                  default: a(() => [
                    o(I, {
                      modelValue: t.is_use,
                      "onUpdate:modelValue": l[1] || (l[1] = (e) => t.is_use = e),
                      "active-value": 1,
                      "inactive-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                (s(!0), _(E, null, V(t.params, (e, C) => (s(), d(k, {
                  key: C,
                  label: e.name
                }, {
                  default: a(() => {
                    var D;
                    return [
                      ne("div", pe, [
                        (D = e.options) != null && D.length ? (s(), d(z, {
                          key: 0,
                          modelValue: e.value,
                          "onUpdate:modelValue": (r) => e.value = r
                        }, {
                          default: a(() => [
                            (s(!0), _(E, null, V(e.options, (r) => (s(), d(j, {
                              key: r.label,
                              label: r.label
                            }, {
                              default: a(() => [
                                f(m(r.text), 1)
                              ]),
                              _: 2
                            }, 1032, ["label"]))), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])) : (s(), d(A, {
                          key: 1,
                          modelValue: e.value,
                          "onUpdate:modelValue": (r) => e.value = r,
                          modelModifiers: { trim: !0 },
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                        (s(!0), _(E, null, V(e.tips, (r) => (s(), _("p", {
                          key: r,
                          class: "mt-[8px] text-[12px] leading-[20px] text-[#999]"
                        }, m(r), 1))), 128))
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 1
            })), [
              [x, c.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
export {
  we as default
};
