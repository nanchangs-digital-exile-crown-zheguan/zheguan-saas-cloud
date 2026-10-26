import { ElRadio as w, ElRadioGroup as C, ElFormItem as k, ElForm as V, ElTooltip as g, ElSwitch as E } from "element-plus/es";
import { defineComponent as F, watch as S, openBlock as T, createElementBlock as $, Fragment as B, withDirectives as u, createElementVNode as i, renderSlot as p, createVNode as o, withCtx as t, unref as e, createTextVNode as c, toDisplayString as d, vShow as b } from "vue";
import { t as s } from "/admin/assets/shared/admin-lang.js";
import { u as D } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const N = { class: "content-wrap" }, P = { class: "flex items-center" }, U = { class: "mr-[3px]" }, R = /* @__PURE__ */ i("p", null, "会自动将提交的个人信息做加密展示。", -1), G = /* @__PURE__ */ i("p", null, "适用于公开展示收集的数据且不暴露用户隐私。", -1), I = /* @__PURE__ */ i("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), j = { class: "text-sm text-gray-400" }, q = { class: "style-wrap" }, W = /* @__PURE__ */ F({
  __name: "edit-form-address",
  setup(z, { expose: y }) {
    const l = D();
    return l.editComponent.ignore = ["componentBgUrl"], l.editComponent.verify = (n) => ({ code: !0, message: "" }), S(
      () => l.editComponent.addressFormat,
      (n) => {
        n !== "province/city/district/address" && (l.editComponent.field.privacyProtection = !1);
      },
      { immediate: !0 }
    ), y({}), (n, a) => {
      const r = w, v = C, _ = k, f = V, h = g, x = E;
      return T(), $(B, null, [
        u(i("div", N, [
          p(n.$slots, "field"),
          o(f, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: t(() => [
              o(_, {
                label: e(s)("地址格式")
              }, {
                default: t(() => [
                  o(v, {
                    modelValue: e(l).editComponent.addressFormat,
                    "onUpdate:modelValue": a[0] || (a[0] = (m) => e(l).editComponent.addressFormat = m),
                    class: "!block"
                  }, {
                    default: t(() => [
                      o(r, {
                        class: "!block",
                        label: "province/city/district/address"
                      }, {
                        default: t(() => [
                          c(d(e(s)("省/市/区/街道/详细地址")), 1)
                        ]),
                        _: 1
                      }),
                      o(r, {
                        class: "!block",
                        label: "province/city/district/street"
                      }, {
                        default: t(() => [
                          c(d(e(s)("省/市/区/街道(镇)")), 1)
                        ]),
                        _: 1
                      }),
                      o(r, {
                        class: "!block",
                        label: "province/city/district"
                      }, {
                        default: t(() => [
                          c(d(e(s)("省/市/区(县)")), 1)
                        ]),
                        _: 1
                      }),
                      o(r, {
                        class: "!block",
                        label: "province/city"
                      }, {
                        default: t(() => [
                          c(d(e(s)("省/市")), 1)
                        ]),
                        _: 1
                      }),
                      o(r, {
                        class: "!block",
                        label: "province"
                      }, {
                        default: t(() => [
                          c(d(e(s)("省")), 1)
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
          p(n.$slots, "other"),
          o(f, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: t(() => [
              o(_, { class: "display-block" }, {
                label: t(() => [
                  i("div", P, [
                    i("span", U, d(e(s)("隐私保护")), 1),
                    o(h, {
                      effect: "light",
                      placement: "top"
                    }, {
                      content: t(() => [
                        R,
                        G
                      ]),
                      default: t(() => [
                        I
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: t(() => [
                  o(x, {
                    modelValue: e(l).editComponent.field.privacyProtection,
                    "onUpdate:modelValue": a[1] || (a[1] = (m) => e(l).editComponent.field.privacyProtection = m),
                    disabled: e(l).editComponent.addressFormat != "province/city/district/address"
                  }, null, 8, ["modelValue", "disabled"]),
                  i("div", j, d(e(s)("提交后自动隐藏地址，仅管理员可查看")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [b, e(l).editTab == "content"]
        ]),
        u(i("div", q, [
          p(n.$slots, "style-field"),
          p(n.$slots, "style")
        ], 512), [
          [b, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  W as default
};
