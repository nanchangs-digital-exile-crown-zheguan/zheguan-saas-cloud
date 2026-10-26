import { ElFormItem as f, ElForm as V, ElSwitch as w, ElColorPicker as h } from "element-plus/es";
import { _ as S } from "./index-36e25503.js";
import { defineComponent as U, openBlock as g, createElementBlock as y, Fragment as T, withDirectives as s, createElementVNode as i, toDisplayString as u, unref as e, createVNode as o, withCtx as n, vShow as _, renderSlot as v } from "vue";
import { t as p } from "/admin/assets/shared/admin-lang.js";
import { u as E } from "./diy-642f6d04.js";
import "/admin/assets/shared/core-shared.js";

import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./sortable.esm-fc069a97.js";
import "pinia";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const k = { class: "content-wrap" }, A = { class: "edit-attr-item-wrap" }, I = { class: "mb-[10px]" }, B = { class: "style-wrap" }, D = { class: "edit-attr-item-wrap" }, F = { class: "mb-[10px]" }, ee = /* @__PURE__ */ U({
  __name: "edit-shop-member-info",
  setup(M, { expose: c }) {
    const t = E();
    return t.editComponent.ignore = ["componentBgUrl"], c({}), (b, l) => {
      const x = S, r = f, d = V, C = w, a = h;
      return g(), y(T, null, [
        s(i("div", k, [
          i("div", A, [
            i("h3", I, u(e(p)("memberStyle")), 1),
            o(d, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                o(r, {
                  label: e(p)("bgUrl")
                }, {
                  default: n(() => [
                    o(x, {
                      modelValue: e(t).editComponent.bgUrl,
                      "onUpdate:modelValue": l[0] || (l[0] = (m) => e(t).editComponent.bgUrl = m),
                      limit: 1
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            o(d, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                o(r, {
                  label: e(p)("shopMemberInfoComponentAccount")
                }, {
                  default: n(() => [
                    o(C, {
                      modelValue: e(t).editComponent.isShowAccount,
                      "onUpdate:modelValue": l[1] || (l[1] = (m) => e(t).editComponent.isShowAccount = m)
                    }, null, 8, ["modelValue"])
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
        s(i("div", B, [
          i("div", D, [
            i("h3", F, u(e(p)("memberStyle")), 1),
            o(d, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                o(r, {
                  label: e(p)("textColor")
                }, {
                  default: n(() => [
                    o(a, {
                      modelValue: e(t).editComponent.textColor,
                      "onUpdate:modelValue": l[2] || (l[2] = (m) => e(t).editComponent.textColor = m)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            o(d, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                o(r, {
                  label: e(p)("shopMemberInfoComponentUidTextColor")
                }, {
                  default: n(() => [
                    o(a, {
                      modelValue: e(t).editComponent.uidTextColor,
                      "onUpdate:modelValue": l[3] || (l[3] = (m) => e(t).editComponent.uidTextColor = m)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            o(d, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                o(r, {
                  label: e(p)("shopMemberInfoComponentAccountTextColor")
                }, {
                  default: n(() => [
                    o(a, {
                      modelValue: e(t).editComponent.accountTextColor,
                      "onUpdate:modelValue": l[4] || (l[4] = (m) => e(t).editComponent.accountTextColor = m)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          v(b.$slots, "style")
        ], 512), [
          [_, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  ee as default
};
