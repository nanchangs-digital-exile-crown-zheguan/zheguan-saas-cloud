import { ElInput as L, ElFormItem as F, ElForm as k, ElButton as B, ElDialog as C, ElLoadingDirective as P } from "element-plus/es";
import { defineComponent as R, ref as m, reactive as I, computed as U, openBlock as b, createBlock as w, withCtx as u, createElementVNode as j, createVNode as s, createTextVNode as V, toDisplayString as y, unref as n, withDirectives as M } from "vue";
import { t } from "/admin/assets/shared/admin-lang.js";
import { filterNumber as O } from "/admin/assets/shared/core-shared.js";
import { P as $, Q as q, R as K } from "./goods-d2a56d58.js";
const Q = { class: "dialog-footer" }, X = /* @__PURE__ */ R({
  __name: "label-group-edit",
  emits: ["complete"],
  setup(S, { expose: x, emit: D }) {
    const d = m(!1), a = m(!1), p = m(""), _ = {
      group_id: "",
      group_name: "",
      sort: ""
    }, o = I({ ..._ }), g = m(), h = U(() => ({
      group_name: [
        { required: !0, message: t("groupNamePlaceholder"), trigger: "blur" }
      ]
    })), E = async (i) => {
      if (a.value || !i)
        return;
      const e = o.group_id ? $ : q;
      await i.validate(async (r) => {
        r && (a.value = !0, e(o).then((c) => {
          a.value = !1, d.value = !1, D("complete");
        }).catch((c) => {
          a.value = !1;
        }));
      });
    };
    return x({
      showDialog: d,
      setFormData: async (i = null) => {
        if (Object.assign(o, _), a.value = !0, i) {
          const e = await (await K(i.group_id)).data;
          p.value = t("updateLabelGroup"), e && Object.keys(o).forEach((r) => {
            e[r] != null && (o[r] = e[r]);
          });
        } else
          p.value = t("addLabelGroup");
        a.value = !1;
      }
    }), (i, e) => {
      const r = L, f = F, c = k, v = B, N = C, G = P;
      return b(), w(N, {
        modelValue: d.value,
        "onUpdate:modelValue": e[6] || (e[6] = (l) => d.value = l),
        title: p.value,
        width: "500px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: u(() => [
          j("span", Q, [
            s(v, {
              onClick: e[4] || (e[4] = (l) => d.value = !1)
            }, {
              default: u(() => [
                V(y(n(t)("cancel")), 1)
              ]),
              _: 1
            }),
            s(v, {
              type: "primary",
              loading: a.value,
              onClick: e[5] || (e[5] = (l) => E(g.value))
            }, {
              default: u(() => [
                V(y(n(t)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: u(() => [
          M((b(), w(c, {
            model: o,
            "label-width": "120px",
            ref_key: "formRef",
            ref: g,
            rules: n(h),
            class: "page-form"
          }, {
            default: u(() => [
              s(f, {
                label: n(t)("groupName"),
                prop: "group_name"
              }, {
                default: u(() => [
                  s(r, {
                    modelValue: o.group_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (l) => o.group_name = l),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: n(t)("groupNamePlaceholder"),
                    class: "input-width",
                    maxlength: "10"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(f, {
                label: n(t)("sort")
              }, {
                default: u(() => [
                  s(r, {
                    modelValue: o.sort,
                    "onUpdate:modelValue": e[1] || (e[1] = (l) => o.sort = l),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: n(t)("sortPlaceholder"),
                    class: "input-width",
                    onKeyup: e[2] || (e[2] = (l) => n(O)(l)),
                    maxlength: "8",
                    "show-word-limit": "",
                    onBlur: e[3] || (e[3] = (l) => o.sort = l.target.value)
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [G, a.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  X as _
};
