import { ElRadio as v, ElRadioGroup as y, ElFormItem as E, ElForm as S, ElInput as T, ElColorPicker as U, ElSwitch as P, ElSlider as N } from "element-plus/es";
import { defineComponent as R, openBlock as k, createElementBlock as F, Fragment as D, withDirectives as b, createElementVNode as a, createVNode as l, withCtx as m, unref as e, createTextVNode as f, toDisplayString as s, vShow as _, withModifiers as V, renderSlot as M } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { u as z } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const I = { class: "content-wrap" }, G = { class: "edit-attr-item-wrap" }, $ = { class: "text-sm text-gray-400 mb-[10px] leading-[1.4]" }, j = { class: "edit-attr-item-wrap" }, q = { class: "mb-[10px]" }, A = { class: "edit-attr-item-wrap" }, H = { class: "mb-[10px]" }, J = { class: "style-wrap" }, K = { class: "edit-attr-item-wrap" }, L = { class: "mb-[10px]" }, le = /* @__PURE__ */ R({
  __name: "edit-form-submit",
  setup(O, { expose: B }) {
    const o = z();
    o.editComponent.ignore = ["componentBgUrl"];
    const g = (r) => {
      r == "hover_screen_bottom" && (o.editComponent.margin.bottom = 0, o.editComponent.margin.both = 0, o.editComponent.margin.top = 0);
    };
    return o.editComponent.verify = (r) => {
      const t = { code: !0, message: "" };
      return o.value[r].submitBtn.text == "" ? (t.code = !1, t.message = n("submitBtnNamePlaceholder"), t) : (o.value[r].resetBtn.text == "" && (t.code = !1, t.message = n("resetBtnNamePlaceholder")), t);
    }, B({}), (r, t) => {
      const c = v, w = y, i = E, p = S, x = T, u = U, h = P, C = N;
      return k(), F(D, null, [
        b(a("div", I, [
          a("div", G, [
            l(p, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: m(() => [
                l(i, {
                  label: e(n)("floatBtnButton"),
                  class: "display-block"
                }, {
                  default: m(() => [
                    l(w, {
                      modelValue: e(o).editComponent.btnPosition,
                      "onUpdate:modelValue": t[0] || (t[0] = (d) => e(o).editComponent.btnPosition = d),
                      onChange: g
                    }, {
                      default: m(() => [
                        l(c, { label: "follow_content" }, {
                          default: m(() => [
                            f(s(e(n)("followContent")), 1)
                          ]),
                          _: 1
                        }),
                        l(c, { label: "hover_screen_bottom" }, {
                          default: m(() => [
                            f(s(e(n)("hoverScreenBottom")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    b(a("div", { class: "text-sm text-gray-400 mb-[5px] leading-[1.4]" }, s(e(n)("btnTips")), 513), [
                      [_, e(o).editComponent.btnPosition == "follow_content"]
                    ]),
                    b(a("div", { class: "text-sm text-gray-400 mb-[5px]" }, s(e(n)("btnTipsTwo")), 513), [
                      [_, e(o).editComponent.btnPosition == "hover_screen_bottom"]
                    ]),
                    a("div", $, s(e(n)("btnTipsThree")), 1)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          a("div", j, [
            a("h3", q, s(e(n)("submitBtn")), 1),
            l(p, {
              "label-width": "80px",
              class: "px-[10px]",
              onSubmit: t[4] || (t[4] = V(() => {
              }, ["prevent"]))
            }, {
              default: m(() => [
                l(i, {
                  label: e(n)("submitBtnName")
                }, {
                  default: m(() => [
                    l(x, {
                      modelValue: e(o).editComponent.submitBtn.text,
                      "onUpdate:modelValue": t[1] || (t[1] = (d) => e(o).editComponent.submitBtn.text = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("btnNamePlaceholder"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("textColor")
                }, {
                  default: m(() => [
                    l(u, {
                      modelValue: e(o).editComponent.submitBtn.color,
                      "onUpdate:modelValue": t[2] || (t[2] = (d) => e(o).editComponent.submitBtn.color = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("subTextBgColor")
                }, {
                  default: m(() => [
                    l(u, {
                      modelValue: e(o).editComponent.submitBtn.bgColor,
                      "onUpdate:modelValue": t[3] || (t[3] = (d) => e(o).editComponent.submitBtn.bgColor = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          a("div", A, [
            a("h3", H, s(e(n)("resetBtn")), 1),
            l(p, {
              "label-width": "80px",
              class: "px-[10px]",
              onSubmit: t[9] || (t[9] = V(() => {
              }, ["prevent"]))
            }, {
              default: m(() => [
                l(i, {
                  label: e(n)("carouselSearchTabControl")
                }, {
                  default: m(() => [
                    l(h, {
                      modelValue: e(o).editComponent.resetBtn.control,
                      "onUpdate:modelValue": t[5] || (t[5] = (d) => e(o).editComponent.resetBtn.control = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("submitBtnName")
                }, {
                  default: m(() => [
                    l(x, {
                      modelValue: e(o).editComponent.resetBtn.text,
                      "onUpdate:modelValue": t[6] || (t[6] = (d) => e(o).editComponent.resetBtn.text = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("btnNamePlaceholder"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("textColor")
                }, {
                  default: m(() => [
                    l(u, {
                      modelValue: e(o).editComponent.resetBtn.color,
                      "onUpdate:modelValue": t[7] || (t[7] = (d) => e(o).editComponent.resetBtn.color = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("subTextBgColor")
                }, {
                  default: m(() => [
                    l(u, {
                      modelValue: e(o).editComponent.resetBtn.bgColor,
                      "onUpdate:modelValue": t[8] || (t[8] = (d) => e(o).editComponent.resetBtn.bgColor = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [_, e(o).editTab == "content"]
        ]),
        b(a("div", J, [
          a("div", K, [
            a("h3", L, s(e(n)("btnStyle")), 1),
            l(p, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: m(() => [
                l(i, {
                  label: e(n)("topRounded")
                }, {
                  default: m(() => [
                    l(C, {
                      modelValue: e(o).editComponent.topElementRounded,
                      "onUpdate:modelValue": t[10] || (t[10] = (d) => e(o).editComponent.topElementRounded = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(n)("bottomRounded")
                }, {
                  default: m(() => [
                    l(C, {
                      modelValue: e(o).editComponent.bottomElementRounded,
                      "onUpdate:modelValue": t[11] || (t[11] = (d) => e(o).editComponent.bottomElementRounded = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          M(r.$slots, "style")
        ], 512), [
          [_, e(o).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  le as default
};
