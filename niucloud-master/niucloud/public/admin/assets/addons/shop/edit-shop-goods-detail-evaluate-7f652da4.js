import { ElRadio as b, ElRadioGroup as v, ElFormItem as x, ElForm as y } from "element-plus/es";
import { defineComponent as S, openBlock as g, createElementBlock as C, Fragment as E, withDirectives as d, createElementVNode as n, createVNode as o, withCtx as r, unref as e, createTextVNode as m, toDisplayString as p, vShow as _, renderSlot as V } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { u as D } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const F = { class: "content-wrap" }, N = { class: "edit-attr-item-wrap" }, T = { class: "style-wrap" }, z = /* @__PURE__ */ S({
  __name: "edit-shop-goods-detail-evaluate",
  setup(k, { expose: c }) {
    const t = D();
    return t.editComponent.ignore = [], t.editComponent.verify = (a) => ({ code: !0, message: "" }), c({}), (a, l) => {
      const s = b, u = v, f = x, h = y;
      return g(), C(E, null, [
        d(n("div", F, [
          n("div", N, [
            o(h, {
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
                      "onUpdate:modelValue": l[0] || (l[0] = (w) => e(t).editComponent.isShow = w)
                    }, {
                      default: r(() => [
                        o(s, { label: !0 }, {
                          default: r(() => [
                            m(p(e(i)("显示")), 1)
                          ]),
                          _: 1
                        }),
                        o(s, { label: !1 }, {
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
        d(n("div", T, [
          V(a.$slots, "style")
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
