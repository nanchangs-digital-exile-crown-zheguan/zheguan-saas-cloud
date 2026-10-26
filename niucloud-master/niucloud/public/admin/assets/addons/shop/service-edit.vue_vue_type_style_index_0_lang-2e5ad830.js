import { ElInput as U, ElFormItem as k, ElForm as C, ElButton as B, ElDialog as I, ElLoadingDirective as P } from "element-plus/es";
import { _ as R } from "./index-36e25503.js";
import { defineComponent as j, ref as u, reactive as M, computed as O, openBlock as w, createBlock as V, withCtx as i, createElementVNode as T, createVNode as s, createTextVNode as b, toDisplayString as h, unref as n, withDirectives as $ } from "vue";
import { t } from "/admin/assets/shared/admin-lang.js";
import { S as q, T as L, U as z } from "./goods-d2a56d58.js";
const A = { class: "dialog-footer" }, Y = /* @__PURE__ */ j({
  __name: "service-edit",
  emits: ["complete"],
  setup(G, { expose: y, emit: x }) {
    const m = u(!1), o = u(!1), p = u(""), _ = {
      service_id: "",
      service_name: "",
      image: "",
      desc: ""
    }, l = M({ ..._ }), f = u(), D = O(() => ({
      service_name: [
        { required: !0, message: t("serviceNamePlaceholder"), trigger: "blur" }
      ]
    })), E = async (d) => {
      if (o.value || !d)
        return;
      const e = l.service_id ? q : L;
      await d.validate(async (r) => {
        r && (o.value = !0, e(l).then((v) => {
          o.value = !1, m.value = !1, x("complete");
        }).catch(() => {
          o.value = !1;
        }));
      });
    };
    return y({
      showDialog: m,
      setFormData: async (d = null) => {
        if (Object.assign(l, _), o.value = !0, d) {
          p.value = t("updateServe");
          const e = await (await z(d.service_id)).data;
          e && Object.keys(l).forEach((r) => {
            e[r] != null && (l[r] = e[r]);
          });
        } else
          p.value = t("addServe");
        o.value = !1;
      }
    }), (d, e) => {
      const r = U, c = k, v = R, S = C, g = B, N = I, F = P;
      return w(), V(N, {
        modelValue: m.value,
        "onUpdate:modelValue": e[5] || (e[5] = (a) => m.value = a),
        title: p.value,
        width: "500px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: i(() => [
          T("span", A, [
            s(g, {
              onClick: e[3] || (e[3] = (a) => m.value = !1)
            }, {
              default: i(() => [
                b(h(n(t)("cancel")), 1)
              ]),
              _: 1
            }),
            s(g, {
              type: "primary",
              loading: o.value,
              onClick: e[4] || (e[4] = (a) => E(f.value))
            }, {
              default: i(() => [
                b(h(n(t)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: i(() => [
          $((w(), V(S, {
            model: l,
            "label-width": "120px",
            ref_key: "formRef",
            ref: f,
            rules: n(D),
            class: "page-form"
          }, {
            default: i(() => [
              s(c, {
                label: n(t)("serviceName"),
                prop: "service_name"
              }, {
                default: i(() => [
                  s(r, {
                    modelValue: l.service_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (a) => l.service_name = a),
                    modelModifiers: { trim: !0 },
                    "show-word-limit": "",
                    clearable: "",
                    placeholder: n(t)("serviceNamePlaceholder"),
                    maxlength: 20,
                    class: "input-width"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(c, {
                label: n(t)("image")
              }, {
                default: i(() => [
                  s(v, {
                    modelValue: l.image,
                    "onUpdate:modelValue": e[1] || (e[1] = (a) => l.image = a)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(c, {
                label: n(t)("desc")
              }, {
                default: i(() => [
                  s(r, {
                    modelValue: l.desc,
                    "onUpdate:modelValue": e[2] || (e[2] = (a) => l.desc = a),
                    modelModifiers: { trim: !0 },
                    type: "textarea",
                    rows: "5",
                    "show-word-limit": "",
                    clearable: "",
                    placeholder: n(t)("descPlaceholder"),
                    maxlength: 200,
                    class: "input-width"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [F, o.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Y as _
};
