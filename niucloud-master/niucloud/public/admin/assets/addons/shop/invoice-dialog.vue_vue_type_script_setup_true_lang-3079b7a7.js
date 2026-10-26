import { ElInput as E, ElFormItem as N, ElForm as F, ElButton as U, ElDialog as B } from "element-plus/es";
import { _ as R } from "./index-36e25503.js";
import { defineComponent as w, ref as d, computed as M, openBlock as $, createBlock as q, unref as i, withCtx as a, createElementVNode as f, createVNode as t, createTextVNode as b, toDisplayString as g } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { v as L } from "./order-a6ced131.js";
const P = { class: "dialog-footer" }, H = /* @__PURE__ */ w({
  __name: "invoice-dialog",
  emits: ["complete"],
  setup(S, { expose: V, emit: k }) {
    const u = d(!1), o = d({
      invoice_number: "",
      remark: "",
      invoice_voucher: ""
    }), m = d(!1);
    let s = 0;
    const x = async (l = null) => {
      l && (s = l.id, o.value.invoice_number = l.invoice_number, o.value.remark = l.remark, o.value.invoice_voucher = l.invoice_voucher);
    }, y = async (l) => {
      m.value || !l || await l.validate(async (e) => {
        if (e) {
          m.value = !0;
          const v = o.value;
          L(s, v).then((c) => {
            k("complete"), u.value = !1, m.value = !1;
          }).catch(() => {
            m.value = !1;
          });
        }
      });
    }, _ = d(), h = M(() => ({
      invoice_number: [{ required: !0, message: r("invoiceNumberPlaceholder"), trigger: "blur" }]
    }));
    return V({
      invoiceDialog: u,
      setInvoiceData: x
    }), (l, e) => {
      const v = E, c = N, I = R, D = F, p = U, C = B;
      return $(), q(C, {
        modelValue: u.value,
        "onUpdate:modelValue": e[5] || (e[5] = (n) => u.value = n),
        title: i(r)("invoice"),
        width: "420px"
      }, {
        footer: a(() => [
          f("span", P, [
            t(p, {
              onClick: e[3] || (e[3] = (n) => u.value = !1)
            }, {
              default: a(() => [
                b(g(i(r)("cancel")), 1)
              ]),
              _: 1
            }),
            t(p, {
              type: "primary",
              loading: m.value,
              onClick: e[4] || (e[4] = (n) => y(_.value))
            }, {
              default: a(() => [
                b(g(i(r)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: a(() => [
          f("div", null, [
            t(D, {
              model: o.value,
              ref_key: "makeInvoiceFormRef",
              ref: _,
              rules: i(h),
              "label-width": "80px",
              "label-position": "right"
            }, {
              default: a(() => [
                t(c, {
                  label: i(r)("invoiceNumber"),
                  prop: "invoice_number"
                }, {
                  default: a(() => [
                    t(v, {
                      modelValue: o.value.invoice_number,
                      "onUpdate:modelValue": e[0] || (e[0] = (n) => o.value.invoice_number = n),
                      modelModifiers: { trim: !0 },
                      maxlength: "30"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(c, {
                  label: i(r)("invoiceVoucher"),
                  prop: "invoice_voucher"
                }, {
                  default: a(() => [
                    t(I, {
                      modelValue: o.value.invoice_voucher,
                      "onUpdate:modelValue": e[1] || (e[1] = (n) => o.value.invoice_voucher = n)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(c, {
                  label: i(r)("remark"),
                  prop: "remark"
                }, {
                  default: a(() => [
                    t(v, {
                      modelValue: o.value.remark,
                      "onUpdate:modelValue": e[2] || (e[2] = (n) => o.value.remark = n),
                      modelModifiers: { trim: !0 },
                      type: "textarea",
                      maxlength: "200",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  H as _
};
