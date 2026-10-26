import { ElInput as D, ElFormItem as k, ElSwitch as v, ElRadio as H, ElRadioGroup as T, ElTimePicker as M, ElForm as x } from "element-plus/es";
import { defineComponent as U, onMounted as B, watch as N, openBlock as u, createElementBlock as P, Fragment as W, withDirectives as f, createElementVNode as c, renderSlot as s, createVNode as n, withModifiers as F, withCtx as r, unref as o, createBlock as _, createTextVNode as C, toDisplayString as g, createCommentVNode as y, vShow as S } from "vue";
import { t as m } from "/admin/assets/shared/admin-lang.js";
import { u as I } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const R = { class: "content-wrap" }, G = { class: "style-wrap" }, X = /* @__PURE__ */ U({
  __name: "edit-form-time",
  setup(j, { expose: h }) {
    const e = I();
    e.editComponent.ignore = ["componentBgUrl"], e.editComponent.verify = (l) => ({ code: !0, message: "" }), B(() => {
      if (!e.editComponent.field.default) {
        const l = new Date(), t = String(l.getHours()).padStart(2, "0"), a = String(l.getMinutes()).padStart(2, "0");
        e.editComponent.field.default = `${t}:${a}`;
      }
    });
    const V = (l) => {
      if (l) {
        const t = new Date(), a = String(t.getHours()).padStart(2, "0"), d = String(t.getMinutes()).padStart(2, "0");
        e.editComponent.field.default = `${a}:${d}`;
      }
    };
    return N(
      () => e.editComponent.timeWay,
      (l) => {
        const t = new Date(), a = String(t.getHours()).padStart(2, "0"), d = String(t.getMinutes()).padStart(2, "0");
        e.editComponent.field.default = `${a}:${d}`;
      }
    ), h({}), (l, t) => {
      const a = D, d = k, w = v, p = H, b = T, $ = M, E = x;
      return u(), P(W, null, [
        f(c("div", R, [
          s(l.$slots, "field"),
          n(E, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: t[4] || (t[4] = F(() => {
            }, ["prevent"]))
          }, {
            default: r(() => [
              n(d, {
                label: o(m)("formPlaceholder")
              }, {
                default: r(() => [
                  n(a, {
                    modelValue: o(e).editComponent.placeholder,
                    "onUpdate:modelValue": t[0] || (t[0] = (i) => o(e).editComponent.placeholder = i),
                    modelModifiers: { trim: !0 },
                    placeholder: o(m)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(d, {
                label: o(m)("defaultValue")
              }, {
                default: r(() => [
                  n(w, {
                    modelValue: o(e).editComponent.defaultControl,
                    "onUpdate:modelValue": t[1] || (t[1] = (i) => o(e).editComponent.defaultControl = i),
                    onChange: V
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              o(e).editComponent.defaultControl ? (u(), _(d, { key: 0 }, {
                default: r(() => [
                  n(b, {
                    modelValue: o(e).editComponent.timeWay,
                    "onUpdate:modelValue": t[2] || (t[2] = (i) => o(e).editComponent.timeWay = i)
                  }, {
                    default: r(() => [
                      n(p, { label: "current" }, {
                        default: r(() => [
                          C(g(o(m)("currentTime")), 1)
                        ]),
                        _: 1
                      }),
                      n(p, { label: "diy" }, {
                        default: r(() => [
                          C(g(o(m)("diyTime")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : y("", !0),
              o(e).editComponent.defaultControl && o(e).editComponent.timeWay == "diy" ? (u(), _(d, { key: 1 }, {
                default: r(() => [
                  n($, {
                    modelValue: o(e).editComponent.field.default,
                    "onUpdate:modelValue": t[3] || (t[3] = (i) => o(e).editComponent.field.default = i),
                    placeholder: o(m)("timePlaceholder"),
                    format: "HH:mm",
                    "value-format": "HH:mm"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              })) : y("", !0)
            ]),
            _: 1
          }),
          s(l.$slots, "other")
        ], 512), [
          [S, o(e).editTab == "content"]
        ]),
        f(c("div", G, [
          s(l.$slots, "style-field"),
          s(l.$slots, "style")
        ], 512), [
          [S, o(e).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  X as default
};
