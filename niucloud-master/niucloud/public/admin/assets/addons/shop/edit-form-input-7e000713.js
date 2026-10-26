import { ElInput as V, ElFormItem as b, ElTooltip as v, ElForm as C, ElSwitch as g } from "element-plus/es";
import { defineComponent as y, openBlock as T, createElementBlock as E, Fragment as S, withDirectives as _, createElementVNode as n, renderSlot as p, createVNode as l, withModifiers as D, withCtx as o, unref as e, toDisplayString as r, vShow as h } from "vue";
import { t as s } from "/admin/assets/shared/admin-lang.js";
import { u as U } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const $ = { class: "content-wrap" }, B = { class: "flex items-center" }, F = { class: "mr-[3px]" }, M = /* @__PURE__ */ n("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), P = { class: "flex items-center" }, k = { class: "mr-[3px]" }, q = /* @__PURE__ */ n("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), I = { class: "style-wrap" }, L = /* @__PURE__ */ y({
  __name: "edit-form-input",
  setup(N, { expose: x }) {
    const t = U();
    return t.editComponent.ignore = ["componentBgUrl"], t.editComponent.verify = (d) => ({ code: !0, message: "" }), x({}), (d, i) => {
      const u = V, m = b, c = v, f = C, w = g;
      return T(), E(S, null, [
        _(n("div", $, [
          p(d.$slots, "field"),
          l(f, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: i[2] || (i[2] = D(() => {
            }, ["prevent"]))
          }, {
            default: o(() => [
              l(m, {
                label: e(s)("formPlaceholder")
              }, {
                default: o(() => [
                  l(u, {
                    modelValue: e(t).editComponent.placeholder,
                    "onUpdate:modelValue": i[0] || (i[0] = (a) => e(t).editComponent.placeholder = a),
                    modelModifiers: { trim: !0 },
                    placeholder: e(s)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              l(m, null, {
                label: o(() => [
                  n("div", B, [
                    n("span", F, r(e(s)("defaultValue")), 1),
                    l(c, {
                      effect: "light",
                      content: e(s)("defaultValueTips"),
                      placement: "top"
                    }, {
                      default: o(() => [
                        M
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ])
                ]),
                default: o(() => [
                  l(u, {
                    modelValue: e(t).editComponent.field.default,
                    "onUpdate:modelValue": i[1] || (i[1] = (a) => e(t).editComponent.field.default = a),
                    modelModifiers: { trim: !0 },
                    placeholder: e(s)("defaultValuePlaceholder"),
                    clearable: "",
                    maxlength: "18",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(d.$slots, "other"),
          l(f, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: o(() => [
              l(m, null, {
                label: o(() => [
                  n("div", P, [
                    n("span", k, r(e(s)("preventDuplication")), 1),
                    l(c, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: o(() => [
                        n("p", null, r(e(s)("preventDuplicationTipsOne")), 1),
                        n("p", null, r(e(s)("preventDuplicationTipsTwo")), 1)
                      ]),
                      default: o(() => [
                        q
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: o(() => [
                  l(w, {
                    modelValue: e(t).editComponent.field.unique,
                    "onUpdate:modelValue": i[3] || (i[3] = (a) => e(t).editComponent.field.unique = a)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [h, e(t).editTab == "content"]
        ]),
        _(n("div", I, [
          p(d.$slots, "style-field"),
          p(d.$slots, "style")
        ], 512), [
          [h, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  L as default
};
