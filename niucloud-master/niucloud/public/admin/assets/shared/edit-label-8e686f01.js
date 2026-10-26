import { defineComponent as U, ref as c, reactive as E, computed as F, resolveComponent as u, resolveDirective as R, openBlock as V, createBlock as h, unref as r, withCtx as i, createElementVNode as T, createVNode as s, createTextVNode as y, toDisplayString as x, withDirectives as j } from "vue";
import { t, bN as k, dn as q, dp as B, dq as S } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const $ = { class: "dialog-footer" }, Y = /* @__PURE__ */ U({
  __name: "edit-label",
  emits: ["complete"],
  setup(I, { expose: D, emit: M }) {
    const d = c(!1), n = c(!1), f = c(!1);
    let b = "";
    const _ = {
      label_id: "",
      label_name: "",
      memo: "",
      sort: 0
    }, o = E({ ..._ }), v = c(), N = F(() => ({
      label_name: [
        { required: !0, message: t("labelNamePlaceholder"), trigger: "blur" }
      ],
      sort: [
        { validator: C, trigger: "blur" }
      ]
    })), C = (m, e, l) => {
      e < 0 ? l(new Error(t("sortVerifyOne"))) : e.toString().indexOf(".") != -1 ? l(new Error(t("sortVerifyTwo"))) : l();
    }, L = async (m) => {
      if (n.value || !m)
        return;
      const e = o.label_id ? q : B;
      await m.validate(async (l) => {
        if (l) {
          if (n.value = !0, f.value)
            return;
          f.value = !0, e(o).then((g) => {
            n.value = !1, f.value = !1, d.value = !1, M("complete");
          }).catch(() => {
            n.value = !1, f.value = !1;
          });
        }
      });
    };
    return D({
      showDialog: d,
      setFormData: async (m = null) => {
        if (n.value = !0, Object.assign(o, _), b = t("addMemberLabel"), m) {
          b = t("updateMemberLabel");
          const e = await (await S(m.label_id)).data;
          e && Object.keys(o).forEach((l) => {
            e[l] != null && (o[l] = e[l]);
          });
        }
        n.value = !1;
      }
    }), (m, e) => {
      const l = u("el-input"), p = u("el-form-item"), g = u("el-form"), w = u("el-button"), O = u("el-dialog"), P = R("loading");
      return V(), h(O, {
        modelValue: d.value,
        "onUpdate:modelValue": e[6] || (e[6] = (a) => d.value = a),
        title: r(b),
        width: "500px",
        "destroy-on-close": !0
      }, {
        footer: i(() => [
          T("span", $, [
            s(w, {
              onClick: e[4] || (e[4] = (a) => d.value = !1)
            }, {
              default: i(() => [
                y(x(r(t)("cancel")), 1)
              ]),
              _: 1
            }),
            s(w, {
              type: "primary",
              loading: n.value,
              onClick: e[5] || (e[5] = (a) => L(v.value))
            }, {
              default: i(() => [
                y(x(r(t)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: i(() => [
          j((V(), h(g, {
            model: o,
            "label-width": "90px",
            ref_key: "formRef",
            ref: v,
            rules: r(N),
            class: "page-form"
          }, {
            default: i(() => [
              s(p, {
                label: r(t)("labelName"),
                prop: "label_name"
              }, {
                default: i(() => [
                  s(l, {
                    modelValue: o.label_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (a) => o.label_name = a),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: r(t)("labelNamePlaceholder"),
                    class: "input-width"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(p, {
                label: r(t)("memo")
              }, {
                default: i(() => [
                  s(l, {
                    modelValue: o.memo,
                    "onUpdate:modelValue": e[1] || (e[1] = (a) => o.memo = a),
                    modelModifiers: { trim: !0 },
                    type: "textarea",
                    rows: "4",
                    clearable: "",
                    placeholder: r(t)("memoPlaceholder"),
                    class: "input-width",
                    maxlength: "200",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(p, {
                label: r(t)("sort"),
                prop: "sort"
              }, {
                default: i(() => [
                  s(l, {
                    modelValue: o.sort,
                    "onUpdate:modelValue": e[2] || (e[2] = (a) => o.sort = a),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    maxlength: "8",
                    "show-word-limit": "",
                    placeholder: r(t)("sortPlaceholder"),
                    class: "input-width",
                    onKeyup: e[3] || (e[3] = (a) => r(k)(a))
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [P, n.value]
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
