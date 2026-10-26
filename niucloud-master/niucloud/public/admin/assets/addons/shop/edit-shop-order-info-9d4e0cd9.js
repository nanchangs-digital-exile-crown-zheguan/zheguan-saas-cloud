import { ElInput as w, ElFormItem as g, ElForm as S, ElSlider as v, ElRadio as y, ElRadioGroup as U, ElColorPicker as W } from "element-plus/es";
import { defineComponent as E, openBlock as z, createElementBlock as F, Fragment as B, withDirectives as c, createElementVNode as i, toDisplayString as s, unref as e, createVNode as t, withCtx as o, vShow as h, createTextVNode as u, renderSlot as N } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { u as T } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const k = { class: "content-wrap" }, D = { class: "edit-attr-item-wrap" }, P = { class: "mb-[10px]" }, I = { class: "edit-attr-item-wrap" }, M = { class: "mb-[10px]" }, R = { class: "style-wrap" }, G = { class: "edit-attr-item-wrap" }, $ = { class: "mb-[10px]" }, j = { class: "edit-attr-item-wrap" }, q = { class: "mb-[10px]" }, A = { class: "edit-attr-item-wrap" }, H = { class: "mb-[10px]" }, te = /* @__PURE__ */ E({
  __name: "edit-shop-order-info",
  setup(J, { expose: V }) {
    const l = T();
    return l.editComponent.ignore = ["componentBgUrl"], V({}), (C, d) => {
      const f = w, m = g, r = S, x = v, p = y, b = U, _ = W;
      return z(), F(B, null, [
        c(i("div", k, [
          i("div", D, [
            i("h3", P, s(e(n)("titleContent")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(n)("title")
                }, {
                  default: o(() => [
                    t(f, {
                      modelValue: e(l).editComponent.text,
                      "onUpdate:modelValue": d[0] || (d[0] = (a) => e(l).editComponent.text = a),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("titlePlaceholder"),
                      clearable: "",
                      maxlength: "6",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", I, [
            i("h3", M, s(e(n)("subTitle")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(n)("more")
                }, {
                  default: o(() => [
                    t(f, {
                      modelValue: e(l).editComponent.more.text,
                      "onUpdate:modelValue": d[1] || (d[1] = (a) => e(l).editComponent.more.text = a),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("morePlaceholder"),
                      clearable: "",
                      maxlength: "8",
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
          [h, e(l).editTab == "content"]
        ]),
        c(i("div", R, [
          i("div", G, [
            i("h3", $, s(e(n)("titleStyle")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(n)("textFontSize")
                }, {
                  default: o(() => [
                    t(x, {
                      modelValue: e(l).editComponent.fontSize,
                      "onUpdate:modelValue": d[2] || (d[2] = (a) => e(l).editComponent.fontSize = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 30
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(n)("textFontWeight")
                }, {
                  default: o(() => [
                    t(b, {
                      modelValue: e(l).editComponent.fontWeight,
                      "onUpdate:modelValue": d[3] || (d[3] = (a) => e(l).editComponent.fontWeight = a)
                    }, {
                      default: o(() => [
                        t(p, { label: "normal" }, {
                          default: o(() => [
                            u(s(e(n)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "bold" }, {
                          default: o(() => [
                            u(s(e(n)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(n)("textColor")
                }, {
                  default: o(() => [
                    t(_, {
                      modelValue: e(l).editComponent.textColor,
                      "onUpdate:modelValue": d[4] || (d[4] = (a) => e(l).editComponent.textColor = a)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", j, [
            i("h3", q, s(e(n)("subTitleStyle")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(n)("textColor")
                }, {
                  default: o(() => [
                    t(_, {
                      modelValue: e(l).editComponent.more.color,
                      "onUpdate:modelValue": d[5] || (d[5] = (a) => e(l).editComponent.more.color = a)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", A, [
            i("h3", H, s(e(n)("textSet")), 1),
            t(r, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(n)("textFontSize")
                }, {
                  default: o(() => [
                    t(x, {
                      modelValue: e(l).editComponent.item.fontSize,
                      "onUpdate:modelValue": d[6] || (d[6] = (a) => e(l).editComponent.item.fontSize = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 16
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(n)("textFontWeight")
                }, {
                  default: o(() => [
                    t(b, {
                      modelValue: e(l).editComponent.item.fontWeight,
                      "onUpdate:modelValue": d[7] || (d[7] = (a) => e(l).editComponent.item.fontWeight = a)
                    }, {
                      default: o(() => [
                        t(p, { label: "normal" }, {
                          default: o(() => [
                            u(s(e(n)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "bold" }, {
                          default: o(() => [
                            u(s(e(n)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(n)("textColor")
                }, {
                  default: o(() => [
                    t(_, {
                      modelValue: e(l).editComponent.item.color,
                      "onUpdate:modelValue": d[8] || (d[8] = (a) => e(l).editComponent.item.color = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          N(C.$slots, "style")
        ], 512), [
          [h, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  te as default
};
