import { ElInput as C, ElFormItem as N, ElForm as R, ElButton as b, ElDialog as B, ElLoadingDirective as I } from "element-plus/es";
import { defineComponent as S, ref as m, reactive as U, computed as $, openBlock as v, createBlock as g, unref as s, withCtx as a, createElementVNode as j, createVNode as i, createTextVNode as y, toDisplayString as k, withDirectives as L } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { s as M } from "./order-a6ced131.js";
const O = { class: "dialog-footer" }, J = /* @__PURE__ */ S({
  __name: "order-notes",
  emits: ["complete"],
  setup(T, { expose: D, emit: V }) {
    const r = m(!1), o = m(!1), u = {
      order_id: 0,
      shop_remark: ""
    }, t = U({ ...u }), _ = m(), h = $(() => ({})), x = async (l) => {
      o.value || !l || await l.validate(async (e) => {
        e && (o.value = !0, M(t).then((f) => {
          o.value = !1, r.value = !1, V("complete");
        }).catch(() => {
          o.value = !1;
        }));
      });
    };
    return D({
      showDialog: r,
      setFormData: async (l = null) => {
        Object.assign(t, u), o.value = !0, l && (t.order_id = l.order_id, t.shop_remark = l.shop_remark), o.value = !1;
      }
    }), (l, e) => {
      const c = C, f = N, w = R, p = b, E = B, F = I;
      return v(), g(E, {
        modelValue: r.value,
        "onUpdate:modelValue": e[3] || (e[3] = (n) => r.value = n),
        title: s(d)("notes"),
        width: "460px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: a(() => [
          j("span", O, [
            i(p, {
              onClick: e[1] || (e[1] = (n) => r.value = !1)
            }, {
              default: a(() => [
                y(k(s(d)("cancel")), 1)
              ]),
              _: 1
            }),
            i(p, {
              type: "primary",
              loading: o.value,
              onClick: e[2] || (e[2] = (n) => x(_.value))
            }, {
              default: a(() => [
                y(k(s(d)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: a(() => [
          L((v(), g(w, {
            model: t,
            ref_key: "formRef",
            ref: _,
            rules: s(h),
            class: "page-form notes-form"
          }, {
            default: a(() => [
              i(f, { class: "mb-0" }, {
                default: a(() => [
                  i(c, {
                    modelValue: t.shop_remark,
                    "onUpdate:modelValue": e[0] || (e[0] = (n) => t.shop_remark = n),
                    modelModifiers: { trim: !0 },
                    rows: 5,
                    type: "textarea",
                    maxlength: "200",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
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
  J as _
};
