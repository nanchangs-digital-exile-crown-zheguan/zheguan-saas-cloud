import { ElInput as g, ElFormItem as w, ElTooltip as V, ElForm as v } from "element-plus/es";
import { defineComponent as x, openBlock as C, createElementBlock as y, Fragment as E, withDirectives as f, createElementVNode as a, renderSlot as s, createVNode as i, withModifiers as S, withCtx as r, unref as l, toDisplayString as T, vShow as c } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { u as $ } from "./diy-642f6d04.js";
import { filterDigit as M } from "/admin/assets/shared/core-shared.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const D = { class: "content-wrap" }, N = { class: "flex items-center" }, P = { class: "mr-[3px]" }, U = /* @__PURE__ */ a("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), B = { class: "style-wrap" }, H = /* @__PURE__ */ x({
  __name: "edit-form-number",
  setup(F, { expose: h }) {
    const t = $();
    t.editComponent.ignore = ["componentBgUrl"], t.editComponent.verify = (o) => {
      const e = { code: !0, message: "" };
      return t.value[o].field.default && (isNaN(t.value[o].field.default) || !_.digit.test(t.value[o].field.default) ? (e.code = !1, e.message = d("defaultErrorTips")) : t.value[o].field.default < 0 && (e.code = !1, e.message = d("defaultMustZeroTips"))), e;
    };
    const _ = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    };
    return h({}), (o, e) => {
      const m = g, p = w, b = V, u = v;
      return C(), y(E, null, [
        f(a("div", D, [
          s(o.$slots, "field"),
          i(u, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: e[4] || (e[4] = S(() => {
            }, ["prevent"]))
          }, {
            default: r(() => [
              i(p, {
                label: l(d)("formPlaceholder")
              }, {
                default: r(() => [
                  i(m, {
                    modelValue: l(t).editComponent.placeholder,
                    "onUpdate:modelValue": e[0] || (e[0] = (n) => l(t).editComponent.placeholder = n),
                    modelModifiers: { trim: !0 },
                    placeholder: l(d)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              i(p, {
                label: l(d)("unit")
              }, {
                default: r(() => [
                  i(m, {
                    modelValue: l(t).editComponent.unit,
                    "onUpdate:modelValue": e[1] || (e[1] = (n) => l(t).editComponent.unit = n),
                    modelModifiers: { trim: !0 },
                    placeholder: l(d)("unitPlaceholder"),
                    clearable: "",
                    maxlength: "5",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              i(p, null, {
                label: r(() => [
                  a("div", N, [
                    a("span", P, T(l(d)("defaultValue")), 1),
                    i(b, {
                      effect: "light",
                      content: l(d)("defaultValueTips"),
                      placement: "top"
                    }, {
                      default: r(() => [
                        U
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ])
                ]),
                default: r(() => [
                  i(m, {
                    modelValue: l(t).editComponent.field.default,
                    "onUpdate:modelValue": e[2] || (e[2] = (n) => l(t).editComponent.field.default = n),
                    modelModifiers: { trim: !0 },
                    placeholder: l(d)("defaultValuePlaceholder"),
                    onKeyup: e[3] || (e[3] = (n) => l(M)(n)),
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
          s(o.$slots, "other"),
          i(u, {
            "label-width": "100px",
            class: "px-[10px]"
          })
        ], 512), [
          [c, l(t).editTab == "content"]
        ]),
        f(a("div", B, [
          s(o.$slots, "style-field"),
          s(o.$slots, "style")
        ], 512), [
          [c, l(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  H as default
};
