import { ElFormItem as f, ElForm as g } from "element-plus/es";
import { _ as b } from "./index-36e25503.js";
import { defineComponent as h, openBlock as x, createElementBlock as y, Fragment as w, withDirectives as i, createElementVNode as o, toDisplayString as C, unref as e, createVNode as n, withCtx as l, vShow as p, renderSlot as v } from "vue";
import { t as s } from "/admin/assets/shared/admin-lang.js";
import { u as S } from "./diy-642f6d04.js";
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
const U = { class: "content-wrap" }, V = { class: "edit-attr-item-wrap" }, B = { class: "mb-[10px]" }, E = { class: "style-wrap" }, Q = /* @__PURE__ */ h({
  __name: "edit-shop-exchange-info",
  setup(D, { expose: a }) {
    const t = S();
    return t.editComponent.ignore = ["componentBgColor", "componentBgUrl"], t.editComponent.verify = (m) => ({ code: !0, message: "" }), a({}), (m, r) => {
      const d = b, c = f, _ = g;
      return x(), y(w, null, [
        i(o("div", U, [
          o("div", V, [
            o("h3", B, C(e(s)("memberStyle")), 1),
            n(_, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: l(() => [
                n(c, {
                  label: e(s)("bgUrl")
                }, {
                  default: l(() => [
                    n(d, {
                      modelValue: e(t).editComponent.bgUrl,
                      "onUpdate:modelValue": r[0] || (r[0] = (u) => e(t).editComponent.bgUrl = u),
                      limit: 1
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [p, e(t).editTab == "content"]
        ]),
        i(o("div", E, [
          v(m.$slots, "style")
        ], 512), [
          [p, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  Q as default
};
