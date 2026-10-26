import { ElInput as u, ElFormItem as f, ElForm as x } from "element-plus/es";
import { defineComponent as w, openBlock as S, createElementBlock as b, Fragment as g, withDirectives as s, createElementVNode as o, toDisplayString as y, unref as e, createVNode as l, withCtx as i, vShow as a, renderSlot as v } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { u as C } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const E = { class: "content-wrap" }, V = { class: "edit-attr-item-wrap" }, T = { class: "mb-[10px]" }, D = { class: "style-wrap" }, j = /* @__PURE__ */ w({
  __name: "edit-shop-search",
  setup(F, { expose: m }) {
    const t = C();
    return t.editComponent.ignore = [], m({}), (d, n) => {
      const p = u, c = f, _ = x;
      return S(), b(g, null, [
        s(o("div", E, [
          o("div", V, [
            o("h3", T, y(e(r)("goodsSearchSet")), 1),
            l(_, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: i(() => [
                l(c, {
                  label: e(r)("goodsSearchText")
                }, {
                  default: i(() => [
                    l(p, {
                      modelValue: e(t).editComponent.text,
                      "onUpdate:modelValue": n[0] || (n[0] = (h) => e(t).editComponent.text = h),
                      modelModifiers: { trim: !0 },
                      placeholder: e(r)("goodsSearchTextPlaceholder"),
                      clearable: "",
                      maxlength: "20",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [a, e(t).editTab == "content"]
        ]),
        s(o("div", D, [
          v(d.$slots, "style")
        ], 512), [
          [a, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  j as default
};
