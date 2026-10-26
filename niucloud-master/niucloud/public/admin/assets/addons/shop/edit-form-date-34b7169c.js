import { ElRadio as k, ElRadioGroup as w, ElFormItem as v, ElInput as E, ElSwitch as F, ElDatePicker as H, ElForm as T } from "element-plus/es";
import { defineComponent as U, reactive as x, onMounted as P, openBlock as c, createElementBlock as B, Fragment as N, withDirectives as V, createElementVNode as b, renderSlot as Y, createVNode as a, withModifiers as I, withCtx as d, unref as e, createTextVNode as s, toDisplayString as f, createBlock as C, createCommentVNode as M, vShow as g } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { timeTurnTimeStamp as W } from "/admin/assets/shared/core-shared.js";
import { u as R } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const G = { class: "content-wrap" }, O = { class: "style-wrap" }, ee = /* @__PURE__ */ U({
  __name: "edit-form-date",
  setup(j, { expose: S }) {
    const t = R();
    t.editComponent.ignore = ["componentBgUrl"], t.editComponent.verify = (l) => ({ code: !0, message: "" });
    const r = x({
      format1: "",
      format2: "",
      format3: "",
      format4: ""
    });
    P(() => {
      const l = new Date();
      t.editComponent.field.default.date || (t.editComponent.field.default.date = l.toISOString().split("T")[0], t.editComponent.field.default.timestamp = l.getTime() / 1e3);
      const o = l.getFullYear(), n = String(l.getMonth() + 1).padStart(2, "0"), p = String(l.getDate()).padStart(2, "0"), u = String(l.getHours()).padStart(2, "0"), _ = String(l.getMinutes()).padStart(2, "0");
      r.format1 = `${o}年${n}月${p}日`, r.format2 = `${o}-${n}-${p}`, r.format3 = `${o}/${n}/${p}`, r.format4 = `${o}-${n}-${p} ${u}:${_}`;
    });
    const D = (l) => {
      t.editComponent.field.default.date = l, t.editComponent.field.default.timestamp = W(l);
    };
    return S({}), (l, o) => {
      const n = k, p = w, u = v, _ = E, $ = F, y = H, h = T;
      return c(), B(N, null, [
        V(b("div", G, [
          Y(l.$slots, "field"),
          a(h, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: o[6] || (o[6] = I(() => {
            }, ["prevent"]))
          }, {
            default: d(() => [
              a(u, {
                label: e(i)("dataFormat")
              }, {
                default: d(() => [
                  a(p, {
                    modelValue: e(t).editComponent.dateFormat,
                    "onUpdate:modelValue": o[0] || (o[0] = (m) => e(t).editComponent.dateFormat = m),
                    class: "!block"
                  }, {
                    default: d(() => [
                      a(n, {
                        class: "!block",
                        label: "YYYY年M月D日"
                      }, {
                        default: d(() => [
                          s(f(r.format1), 1)
                        ]),
                        _: 1
                      }),
                      a(n, {
                        class: "!block",
                        label: "YYYY-MM-DD"
                      }, {
                        default: d(() => [
                          s(f(r.format2), 1)
                        ]),
                        _: 1
                      }),
                      a(n, {
                        class: "!block",
                        label: "YYYY/MM/DD"
                      }, {
                        default: d(() => [
                          s(f(r.format3), 1)
                        ]),
                        _: 1
                      }),
                      a(n, {
                        class: "!block",
                        label: "YYYY-MM-DD HH:mm"
                      }, {
                        default: d(() => [
                          s(f(r.format4), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(u, {
                label: e(i)("formPlaceholder")
              }, {
                default: d(() => [
                  a(_, {
                    modelValue: e(t).editComponent.placeholder,
                    "onUpdate:modelValue": o[1] || (o[1] = (m) => e(t).editComponent.placeholder = m),
                    modelModifiers: { trim: !0 },
                    placeholder: e(i)("formPlaceholderTips"),
                    clearable: "",
                    maxlength: "15",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(u, {
                label: e(i)("defaultValue")
              }, {
                default: d(() => [
                  a($, {
                    modelValue: e(t).editComponent.defaultControl,
                    "onUpdate:modelValue": o[2] || (o[2] = (m) => e(t).editComponent.defaultControl = m)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              e(t).editComponent.defaultControl ? (c(), C(u, { key: 0 }, {
                default: d(() => [
                  a(p, {
                    modelValue: e(t).editComponent.dateWay,
                    "onUpdate:modelValue": o[3] || (o[3] = (m) => e(t).editComponent.dateWay = m)
                  }, {
                    default: d(() => [
                      a(n, { label: "current" }, {
                        default: d(() => [
                          s(f(e(i)("currentDate")), 1)
                        ]),
                        _: 1
                      }),
                      a(n, { label: "diy" }, {
                        default: d(() => [
                          s(f(e(i)("diyDate")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : M("", !0),
              e(t).editComponent.defaultControl && e(t).editComponent.dateWay == "diy" ? (c(), C(u, { key: 1 }, {
                default: d(() => [
                  e(t).editComponent.dateFormat != "YYYY-MM-DD HH:mm" ? (c(), C(y, {
                    key: 0,
                    modelValue: e(t).editComponent.field.default.date,
                    "onUpdate:modelValue": o[4] || (o[4] = (m) => e(t).editComponent.field.default.date = m),
                    format: "YYYY/MM/DD",
                    "value-format": "YYYY-MM-DD",
                    type: "date",
                    placeholder: e(i)("dataPlaceholder"),
                    onChange: D
                  }, null, 8, ["modelValue", "placeholder"])) : (c(), C(y, {
                    key: 1,
                    modelValue: e(t).editComponent.field.default.date,
                    "onUpdate:modelValue": o[5] || (o[5] = (m) => e(t).editComponent.field.default.date = m),
                    format: "YYYY/MM/DD HH:mm",
                    "value-format": "YYYY-MM-DD HH:mm",
                    type: "datetime",
                    placeholder: e(i)("dataPlaceholder"),
                    onChange: D
                  }, null, 8, ["modelValue", "placeholder"]))
                ]),
                _: 1
              })) : M("", !0)
            ]),
            _: 1
          }),
          Y(l.$slots, "other")
        ], 512), [
          [g, e(t).editTab == "content"]
        ]),
        V(b("div", O, [
          Y(l.$slots, "style-field"),
          Y(l.$slots, "style")
        ], 512), [
          [g, e(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  ee as default
};
