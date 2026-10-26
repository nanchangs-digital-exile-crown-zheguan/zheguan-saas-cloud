import { ElRadio as A, ElRadioGroup as I, ElFormItem as P, ElInput as F, ElForm as R, ElButton as C, ElDialog as q, ElLoadingDirective as B } from "element-plus/es";
import { defineComponent as K, ref as f, reactive as L, computed as M, openBlock as V, createBlock as h, unref as t, withCtx as o, createElementVNode as N, createVNode as r, createTextVNode as c, toDisplayString as m, withDirectives as j } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { s as O, c as T } from "./delivery-da6bd7ad.js";
import "/admin/assets/shared/core-shared.js";
const $ = { class: "dialog-footer" }, Y = /* @__PURE__ */ K({
  __name: "local-delivery-service-dada",
  emits: ["complete"],
  setup(G, { expose: D, emit: w }) {
    const p = f(!1), s = f(!0), v = {
      delivery_type: "",
      app_key: "",
      app_secret: "",
      source_id: "",
      is_use: ""
    }, a = L({ ...v }), g = f(), E = M(() => ({
      app_key: [
        { required: !0, message: l("dadaAppKeyPlaceholder"), trigger: "blur" }
      ],
      app_secret: [
        { required: !0, message: l("dadaAppSecretPlaceholder"), trigger: "blur" }
      ],
      source_id: [
        { required: !0, message: l("dadaSourceIdPlaceholder"), trigger: "blur" }
      ]
    })), S = async (u) => {
      s.value || !u || await u.validate(async (e) => {
        e && (s.value = !0, O(a).then((b) => {
          s.value = !1, p.value = !1, w("complete");
        }).catch(() => {
          s.value = !1;
        }));
      });
    };
    return D({
      showDialog: p,
      setFormData: async (u = null) => {
        if (s.value = !0, Object.assign(a, v), u) {
          const e = await (await T(u.delivery_type)).data;
          Object.keys(a).forEach((i) => {
            e[i] != null && (a[i] = e[i]), e.params[i] != null && (a[i] = e.params[i].value);
          });
        }
        s.value = !1;
      }
    }), (u, e) => {
      const i = A, b = I, n = P, _ = F, U = R, y = C, k = q, x = B;
      return V(), h(k, {
        modelValue: p.value,
        "onUpdate:modelValue": e[6] || (e[6] = (d) => p.value = d),
        title: t(l)("dadaThirdDelivery"),
        width: "580px",
        "destroy-on-close": !0
      }, {
        footer: o(() => [
          N("span", $, [
            r(y, {
              onClick: e[4] || (e[4] = (d) => p.value = !1)
            }, {
              default: o(() => [
                c(m(t(l)("cancel")), 1)
              ]),
              _: 1
            }),
            r(y, {
              type: "primary",
              loading: s.value,
              onClick: e[5] || (e[5] = (d) => S(g.value))
            }, {
              default: o(() => [
                c(m(t(l)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: o(() => [
          j((V(), h(U, {
            model: a,
            "label-width": "140px",
            ref_key: "formRef",
            ref: g,
            rules: t(E),
            class: "page-form"
          }, {
            default: o(() => [
              r(n, {
                label: t(l)("isUse")
              }, {
                default: o(() => [
                  r(b, {
                    modelValue: a.is_use,
                    "onUpdate:modelValue": e[0] || (e[0] = (d) => a.is_use = d)
                  }, {
                    default: o(() => [
                      r(i, { label: 1 }, {
                        default: o(() => [
                          c(m(t(l)("startUsing")), 1)
                        ]),
                        _: 1
                      }),
                      r(i, { label: 0 }, {
                        default: o(() => [
                          c(m(t(l)("statusDeactivate")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(n, {
                label: t(l)("dadaAppKey"),
                prop: "app_key"
              }, {
                default: o(() => [
                  r(_, {
                    modelValue: a.app_key,
                    "onUpdate:modelValue": e[1] || (e[1] = (d) => a.app_key = d),
                    modelModifiers: { trim: !0 },
                    placeholder: t(l)("dadaAppKeyPlaceholder"),
                    class: "input-width",
                    "show-word-limit": "",
                    clearable: ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(n, {
                label: t(l)("dadaAppSecret"),
                prop: "app_secret"
              }, {
                default: o(() => [
                  r(_, {
                    modelValue: a.app_secret,
                    "onUpdate:modelValue": e[2] || (e[2] = (d) => a.app_secret = d),
                    modelModifiers: { trim: !0 },
                    placeholder: t(l)("dadaAppSecretPlaceholder"),
                    class: "input-width",
                    clearable: ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(n, {
                label: t(l)("dadaSourceId"),
                prop: "source_id"
              }, {
                default: o(() => [
                  r(_, {
                    modelValue: a.source_id,
                    "onUpdate:modelValue": e[3] || (e[3] = (d) => a.source_id = d),
                    modelModifiers: { trim: !0 },
                    placeholder: t(l)("dadaSourceIdPlaceholder"),
                    class: "input-width",
                    clearable: ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [x, s.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Y as default
};
