import { ElInput as P, ElFormItem as F, ElForm as M, ElButton as k, ElDialog as B, ElLoadingDirective as C } from "element-plus/es";
import { defineComponent as I, ref as v, reactive as S, computed as R, openBlock as g, createBlock as b, unref as t, withCtx as d, createElementVNode as U, createVNode as s, createTextVNode as y, toDisplayString as D, withDirectives as $ } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { H as j, I as q, J as O } from "./delivery-da6bd7ad.js";
import { filterNumber as H } from "/admin/assets/shared/core-shared.js";
const J = { class: "dialog-footer" }, W = /* @__PURE__ */ I({
  __name: "delivery-personnel-edit",
  emits: ["complete"],
  setup(K, { expose: V, emit: h }) {
    const m = v(!1), a = v(!1), p = {
      deliver_id: "",
      deliver_name: "",
      deliver_mobile: ""
    }, l = S({ ...p }), f = v(), w = R(() => ({
      deliver_name: [
        { required: !0, message: r("deliverNamePlaceholder"), trigger: "blur" }
      ],
      deliver_mobile: [
        { required: !0, message: r("deliverMobilePlaceholder"), trigger: "blur" },
        { min: 11, max: 11, message: "请输入11位手机号码", trigger: "blur" },
        {
          pattern: /^1[23456789]\d{9}$/,
          message: "请输入正确的手机号码",
          trigger: "blur"
        }
      ]
    })), x = async (n) => {
      if (a.value || !n)
        return;
      const e = l.deliver_id ? j : q;
      await n.validate(async (i) => {
        i && (a.value = !0, e(l).then((c) => {
          a.value = !1, m.value = !1, h("complete");
        }).catch(() => {
          a.value = !1;
        }));
      });
    };
    return V({
      showDialog: m,
      setFormData: async (n = null) => {
        if (Object.assign(l, p), a.value = !0, n) {
          const e = await (await O(n.deliver_id)).data;
          e && Object.keys(l).forEach((i) => {
            e[i] != null && (l[i] = e[i]);
          });
        }
        a.value = !1;
      }
    }), (n, e) => {
      const i = P, u = F, c = M, _ = k, E = B, N = C;
      return g(), b(E, {
        modelValue: m.value,
        "onUpdate:modelValue": e[6] || (e[6] = (o) => m.value = o),
        title: l.deliver_id ? t(r)("updateDeliver") : t(r)("addDeliveryPersonnel"),
        width: "480",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: d(() => [
          U("span", J, [
            s(_, {
              onClick: e[4] || (e[4] = (o) => m.value = !1)
            }, {
              default: d(() => [
                y(D(t(r)("cancel")), 1)
              ]),
              _: 1
            }),
            s(_, {
              type: "primary",
              loading: a.value,
              onClick: e[5] || (e[5] = (o) => x(f.value))
            }, {
              default: d(() => [
                y(D(t(r)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: d(() => [
          $((g(), b(c, {
            model: l,
            "label-width": "120px",
            ref_key: "formRef",
            ref: f,
            rules: t(w),
            class: "page-form"
          }, {
            default: d(() => [
              s(u, {
                label: t(r)("deliverName"),
                prop: "deliver_name"
              }, {
                default: d(() => [
                  s(i, {
                    modelValue: l.deliver_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (o) => l.deliver_name = o),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: t(r)("deliverNamePlaceholder"),
                    class: "input-width",
                    maxlength: "10"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(u, {
                label: t(r)("deliverMobile"),
                prop: "deliver_mobile"
              }, {
                default: d(() => [
                  s(i, {
                    modelValue: l.deliver_mobile,
                    "onUpdate:modelValue": e[1] || (e[1] = (o) => l.deliver_mobile = o),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: t(r)("deliverMobilePlaceholder"),
                    class: "input-width",
                    onKeyup: e[2] || (e[2] = (o) => t(H)(o)),
                    onBlur: e[3] || (e[3] = (o) => l.deliver_mobile = o.target.value)
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [N, a.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  W as _
};
