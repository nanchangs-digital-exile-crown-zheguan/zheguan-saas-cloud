import { ElRadio as b, ElRadioGroup as g, ElFormItem as C, ElForm as V, ElTooltip as E, ElSwitch as T } from "element-plus/es";
import { defineComponent as P, openBlock as S, createElementBlock as F, Fragment as $, withDirectives as u, createElementVNode as n, renderSlot as c, createVNode as o, withCtx as t, unref as e, createTextVNode as f, toDisplayString as s, vShow as h } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { u as k } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const B = { class: "content-wrap" }, D = { class: "flex items-center" }, N = { class: "mr-[3px]" }, U = /* @__PURE__ */ n("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), z = { class: "text-sm text-gray-400" }, R = { class: "style-wrap" }, J = /* @__PURE__ */ P({
  __name: "edit-form-location",
  setup(G, { expose: y }) {
    const l = k();
    return l.editComponent.ignore = ["componentBgUrl"], l.editComponent.verify = (a) => ({ code: !0, message: "" }), y({}), (a, r) => {
      const d = b, x = g, m = C, _ = V, v = E, w = T;
      return S(), F($, null, [
        u(n("div", B, [
          c(a.$slots, "field"),
          o(_, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: t(() => [
              o(m, {
                label: e(i)("access")
              }, {
                default: t(() => [
                  o(x, {
                    modelValue: e(l).editComponent.mode,
                    "onUpdate:modelValue": r[0] || (r[0] = (p) => e(l).editComponent.mode = p)
                  }, {
                    default: t(() => [
                      o(d, {
                        class: "!mr-[20px]",
                        label: "authorized_wechat_location"
                      }, {
                        default: t(() => [
                          f(s(e(i)("authorizeWeChatLocation")), 1)
                        ]),
                        _: 1
                      }),
                      o(d, { label: "open_choose_location" }, {
                        default: t(() => [
                          f(s(e(i)("manuallySelectPositioning")), 1)
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
          }),
          c(a.$slots, "other"),
          o(_, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: t(() => [
              o(m, { class: "display-block" }, {
                label: t(() => [
                  n("div", D, [
                    n("span", N, s(e(i)("privacyProtection")), 1),
                    o(v, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: t(() => [
                        n("p", null, s(e(i)("privacyProtectionTipsOne")), 1),
                        n("p", null, s(e(i)("privacyProtectionTipsTwo")), 1)
                      ]),
                      default: t(() => [
                        U
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: t(() => [
                  o(w, {
                    modelValue: e(l).editComponent.field.privacyProtection,
                    "onUpdate:modelValue": r[1] || (r[1] = (p) => e(l).editComponent.field.privacyProtection = p)
                  }, null, 8, ["modelValue"]),
                  n("div", z, s(e(i)("privacyProtectionTipsFour")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [h, e(l).editTab == "content"]
        ]),
        u(n("div", R, [
          c(a.$slots, "style-field"),
          c(a.$slots, "style")
        ], 512), [
          [h, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  J as default
};
