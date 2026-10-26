import { ElInput as w, ElFormItem as C, ElTooltip as V, ElForm as b } from "element-plus/es";
import { defineComponent as x, openBlock as g, createElementBlock as y, Fragment as v, withDirectives as u, createElementVNode as a, renderSlot as m, createVNode as l, withModifiers as E, withCtx as r, unref as e, toDisplayString as S, vShow as c } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { u as T } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const M = { class: "content-wrap" }, P = { class: "flex items-center" }, U = { class: "mr-[3px]" }, $ = /* @__PURE__ */ a("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), B = { class: "style-wrap" }, G = /* @__PURE__ */ x({
  __name: "edit-form-textarea",
  setup(D, { expose: f }) {
    const o = T();
    return o.editComponent.ignore = ["componentBgUrl"], o.editComponent.verify = (d) => ({ code: !0, message: "" }), f({}), (d, t) => {
      const s = w, p = C, h = V, _ = b;
      return g(), y(v, null, [
        u(a("div", M, [
          m(d.$slots, "field"),
          l(_, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: t[3] || (t[3] = E(() => {
            }, ["prevent"]))
          }, {
            default: r(() => [
              l(p, {
                label: e(n)("formPlaceholder")
              }, {
                default: r(() => [
                  l(s, {
                    modelValue: e(o).editComponent.placeholder,
                    "onUpdate:modelValue": t[0] || (t[0] = (i) => e(o).editComponent.placeholder = i),
                    modelModifiers: { trim: !0 },
                    placeholder: e(n)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              l(p, null, {
                label: r(() => [
                  a("div", P, [
                    a("span", U, S(e(n)("defaultValue")), 1),
                    l(h, {
                      effect: "light",
                      content: e(n)("defaultValueTips"),
                      placement: "top"
                    }, {
                      default: r(() => [
                        $
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ])
                ]),
                default: r(() => [
                  l(s, {
                    modelValue: e(o).editComponent.field.default,
                    "onUpdate:modelValue": t[1] || (t[1] = (i) => e(o).editComponent.field.default = i),
                    modelModifiers: { trim: !0 },
                    placeholder: e(n)("defaultValuePlaceholder"),
                    clearable: "",
                    maxlength: "18",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }),
              l(p, {
                label: e(n)("rowCount")
              }, {
                default: r(() => [
                  l(s, {
                    modelValue: e(o).editComponent.rowCount,
                    "onUpdate:modelValue": t[2] || (t[2] = (i) => e(o).editComponent.rowCount = i),
                    modelModifiers: { trim: !0 },
                    placeholder: e(n)("rowCountPlaceholder"),
                    clearable: "",
                    maxlength: "2",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }),
          m(d.$slots, "other")
        ], 512), [
          [c, e(o).editTab == "content"]
        ]),
        u(a("div", B, [
          m(d.$slots, "style-field"),
          m(d.$slots, "style")
        ], 512), [
          [c, e(o).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  G as default
};
