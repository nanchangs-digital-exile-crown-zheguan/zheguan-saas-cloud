import { ElRadio as b, ElRadioGroup as x, ElFormItem as y, ElForm as S } from "element-plus/es";
import { defineComponent as g, openBlock as v, createElementBlock as C, Fragment as E, withDirectives as d, createElementVNode as l, createVNode as o, withCtx as r, unref as e, createTextVNode as m, toDisplayString as p, vShow as _, renderSlot as V } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { u as D } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const F = { class: "content-wrap" }, N = { class: "edit-attr-item-wrap" }, T = { class: "style-wrap" }, z = /* @__PURE__ */ g({
  __name: "edit-shop-goods-detail-sow",
  setup(k, { expose: c }) {
    const t = D();
    return t.editComponent.ignore = [], t.editComponent.verify = (s) => ({ code: !0, message: "" }), c({}), (s, n) => {
      const a = b, u = x, f = y, w = S;
      return v(), C(E, null, [
        d(l("div", F, [
          l("div", N, [
            o(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: r(() => [
                o(f, {
                  label: e(i)("是否显示")
                }, {
                  default: r(() => [
                    o(u, {
                      modelValue: e(t).editComponent.isShow,
                      "onUpdate:modelValue": n[0] || (n[0] = (h) => e(t).editComponent.isShow = h)
                    }, {
                      default: r(() => [
                        o(a, { label: !0 }, {
                          default: r(() => [
                            m(p(e(i)("显示")), 1)
                          ]),
                          _: 1
                        }),
                        o(a, { label: !1 }, {
                          default: r(() => [
                            m(p(e(i)("隐藏")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [_, e(t).editTab == "content"]
        ]),
        d(l("div", T, [
          V(s.$slots, "style")
        ], 512), [
          [_, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  z as default
};
