import { ElInput as w, ElFormItem as y, ElForm as b, ElTooltip as T, ElSwitch as V } from "element-plus/es";
import { defineComponent as C, openBlock as g, createElementBlock as P, Fragment as E, withDirectives as _, createElementVNode as t, renderSlot as d, createVNode as n, withModifiers as S, withCtx as o, unref as e, toDisplayString as p, vShow as h } from "vue";
import { t as s } from "/admin/assets/shared/admin-lang.js";
import { u as D } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const F = { class: "content-wrap" }, U = { class: "flex items-center" }, $ = { class: "mr-[3px]" }, k = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), B = { class: "flex items-center" }, q = { class: "mr-[3px]" }, I = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), M = { class: "text-sm text-gray-400" }, N = { class: "style-wrap" }, Q = /* @__PURE__ */ C({
  __name: "edit-form-mobile",
  setup(O, { expose: v }) {
    const l = D();
    return l.editComponent.ignore = ["componentBgUrl"], l.editComponent.verify = (r) => ({ code: !0, message: "" }), v({}), (r, i) => {
      const x = w, c = y, m = b, u = T, f = V;
      return g(), P(E, null, [
        _(t("div", F, [
          d(r.$slots, "field"),
          n(m, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: i[1] || (i[1] = S(() => {
            }, ["prevent"]))
          }, {
            default: o(() => [
              n(c, {
                label: e(s)("formPlaceholder")
              }, {
                default: o(() => [
                  n(x, {
                    modelValue: e(l).editComponent.placeholder,
                    "onUpdate:modelValue": i[0] || (i[0] = (a) => e(l).editComponent.placeholder = a),
                    modelModifiers: { trim: !0 },
                    placeholder: e(s)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }),
          d(r.$slots, "other"),
          n(m, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: o(() => [
              n(c, null, {
                label: o(() => [
                  t("div", U, [
                    t("span", $, p(e(s)("preventDuplication")), 1),
                    n(u, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: o(() => [
                        t("p", null, p(e(s)("preventDuplicationTipsOne")), 1),
                        t("p", null, p(e(s)("preventDuplicationTipsTwo")), 1)
                      ]),
                      default: o(() => [
                        k
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: o(() => [
                  n(f, {
                    modelValue: e(l).editComponent.field.unique,
                    "onUpdate:modelValue": i[2] || (i[2] = (a) => e(l).editComponent.field.unique = a)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              n(c, { class: "display-block" }, {
                label: o(() => [
                  t("div", B, [
                    t("span", q, p(e(s)("privacyProtection")), 1),
                    n(u, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: o(() => [
                        t("p", null, p(e(s)("privacyProtectionTipsOne")), 1),
                        t("p", null, p(e(s)("privacyProtectionTipsTwo")), 1)
                      ]),
                      default: o(() => [
                        I
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: o(() => [
                  n(f, {
                    modelValue: e(l).editComponent.field.privacyProtection,
                    "onUpdate:modelValue": i[3] || (i[3] = (a) => e(l).editComponent.field.privacyProtection = a)
                  }, null, 8, ["modelValue"]),
                  t("div", M, p(e(s)("privacyProtectionTipsFive")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [h, e(l).editTab == "content"]
        ]),
        _(t("div", N, [
          d(r.$slots, "style-field"),
          d(r.$slots, "style")
        ], 512), [
          [h, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  Q as default
};
