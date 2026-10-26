import { ElInput as h, ElFormItem as w, ElForm as b } from "element-plus/es";
import { defineComponent as y, openBlock as v, createElementBlock as C, Fragment as g, withDirectives as i, createElementVNode as m, renderSlot as r, createVNode as n, withModifiers as E, withCtx as s, unref as o, vShow as d } from "vue";
import { t as p } from "/admin/assets/shared/admin-lang.js";
import { u as S } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const V = { class: "content-wrap" }, x = { class: "style-wrap" }, P = /* @__PURE__ */ y({
  __name: "edit-form-wechat-name",
  setup($, { expose: a }) {
    const e = S();
    return e.editComponent.ignore = ["componentBgUrl"], e.editComponent.verify = (t) => ({ code: !0, message: "" }), a({}), (t, l) => {
      const c = h, f = w, u = b;
      return v(), C(g, null, [
        i(m("div", V, [
          r(t.$slots, "field"),
          n(u, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: l[1] || (l[1] = E(() => {
            }, ["prevent"]))
          }, {
            default: s(() => [
              n(f, {
                label: o(p)("formPlaceholder")
              }, {
                default: s(() => [
                  n(c, {
                    modelValue: o(e).editComponent.placeholder,
                    "onUpdate:modelValue": l[0] || (l[0] = (_) => o(e).editComponent.placeholder = _),
                    modelModifiers: { trim: !0 },
                    placeholder: o(p)("formPlaceholderTips"),
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
          r(t.$slots, "other")
        ], 512), [
          [d, o(e).editTab == "content"]
        ]),
        i(m("div", x, [
          r(t.$slots, "style-field"),
          r(t.$slots, "style")
        ], 512), [
          [d, o(e).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  P as default
};
