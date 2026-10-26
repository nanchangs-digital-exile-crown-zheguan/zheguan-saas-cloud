import { ElRadio as I, ElRadioGroup as M, ElFormItem as U, ElInput as z, ElButton as D, ElPopover as F, ElForm as P } from "element-plus/es";
import { defineComponent as K, ref as v, onMounted as A, nextTick as G, openBlock as x, createElementBlock as h, Fragment as O, withDirectives as S, createElementVNode as m, renderSlot as y, createVNode as r, withCtx as a, unref as n, createTextVNode as f, toDisplayString as d, renderList as J, createCommentVNode as L, vShow as E } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { u as j } from "./diy-642f6d04.js";
import { S as H } from "./sortable.esm-fc069a97.js";
import { ElMessage as Q } from "element-plus";
import { r as W } from "./range-47374eec.js";
import "pinia";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const X = { class: "content-wrap" }, Y = ["onClick"], Z = { class: "mb-[5px]" }, ee = { class: "text-[#888] text-[12px] mb-[5px]" }, te = { class: "mt-[10px] text-right" }, oe = { class: "style-wrap" }, fe = /* @__PURE__ */ K({
  __name: "edit-form-checkbox",
  setup(ne, { expose: N }) {
    const e = j();
    e.editComponent.ignore = ["componentBgUrl"], e.editComponent.verify = (o) => {
      const t = { code: !0, message: "" };
      let i = !0;
      for (let p = 0; p < e.value[o].options.length; p++)
        if (!e.value[o].options[p].text) {
          t.code = !1, t.message = l("optionPlaceholder"), i = !1;
          break;
        }
      return i && C(e.value[o].options, "text").length != e.value[o].options.length && (t.code = !1, t.message = l("errorTipsOne")), t;
    }, e.editComponent.options.forEach((o) => {
      o.id || (o.id = e.generateRandom());
    });
    const _ = v(!1), c = v(), T = () => {
      e.editComponent.options.push({
        id: e.generateRandom(),
        text: "选项" + (e.editComponent.options.length + 1)
      });
    }, R = (o) => {
      e.editComponent.options.splice(o, 1);
    }, $ = () => {
      if (c.value.trim()) {
        const o = c.value.split(",").map((s) => ({
          id: e.generateRandom(),
          text: s.trim()
        })).filter((s) => s.text !== ""), i = C(o, "text").filter(
          (s) => !e.editComponent.options.some((p) => p.text === s.text)
        );
        i.length > 0 ? e.editComponent.options.push(...i) : Q({
          message: l("errorTipsTwo"),
          type: "error"
        }), c.value = "", _.value = !1;
      }
    }, C = (o, t) => {
      const i = /* @__PURE__ */ new Set();
      return o.filter((s) => {
        const p = JSON.stringify(s[t]);
        return i.has(p) ? !1 : i.add(p);
      });
    }, b = v();
    return A(() => {
      G(() => {
        const o = H.create(b.value, {
          group: "option-item",
          animation: 200,
          onEnd: (t) => {
            const i = e.editComponent.options[t.oldIndex];
            e.editComponent.options.splice(t.oldIndex, 1), e.editComponent.options.splice(t.newIndex, 0, i), o.sort(
              W(e.editComponent.options.length).map((s) => s.toString())
            );
          }
        });
      });
    }), N({}), (o, t) => {
      const i = I, s = M, p = U, w = z, k = D, q = F, B = P;
      return x(), h(O, null, [
        S(m("div", X, [
          y(o.$slots, "field"),
          r(B, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: a(() => [
              r(p, {
                label: n(l)("style")
              }, {
                default: a(() => [
                  r(s, {
                    modelValue: n(e).editComponent.style,
                    "onUpdate:modelValue": t[0] || (t[0] = (u) => n(e).editComponent.style = u)
                  }, {
                    default: a(() => [
                      r(i, { label: "style-1" }, {
                        default: a(() => [
                          f(d(n(l)("defaultSources")), 1)
                        ]),
                        _: 1
                      }),
                      r(i, { label: "style-2" }, {
                        default: a(() => [
                          f(d(n(l)("listStyle")), 1)
                        ]),
                        _: 1
                      }),
                      r(i, { label: "style-3" }, {
                        default: a(() => [
                          f(d(n(l)("dropDownStyle")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(p, {
                label: n(l)("option")
              }, {
                default: a(() => [
                  m("div", {
                    ref_key: "formCheckboxRef",
                    ref: b
                  }, [
                    (x(!0), h(O, null, J(n(e).editComponent.options, (u, g) => (x(), h("div", {
                      key: u.id,
                      class: "option-item flex items-center mb-[15px]"
                    }, [
                      r(w, {
                        modelValue: n(e).editComponent.options[g].text,
                        "onUpdate:modelValue": (V) => n(e).editComponent.options[g].text = V,
                        class: "!w-[215px]",
                        placeholder: n(l)("optionPlaceholder"),
                        maxlength: "30",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      n(e).editComponent.options.length > 1 ? (x(), h("span", {
                        key: 0,
                        onClick: (V) => R(g),
                        class: "cursor-pointer ml-[5px] nc-iconfont nc-icon-shanchu-yuangaizhiV6xx"
                      }, null, 8, Y)) : L("", !0)
                    ]))), 128))
                  ], 512),
                  m("span", {
                    class: "text-primary cursor-pointer mr-[10px]",
                    onClick: T
                  }, d(n(l)("addSingleOption")), 1),
                  r(q, {
                    visible: _.value,
                    placement: "bottom",
                    width: 300
                  }, {
                    reference: a(() => [
                      m("span", {
                        class: "text-primary cursor-pointer",
                        onClick: t[3] || (t[3] = (u) => _.value = !0)
                      }, d(n(l)("addMultipleOption")), 1)
                    ]),
                    default: a(() => [
                      m("p", Z, d(n(l)("addMultipleOption")), 1),
                      m("p", ee, d(n(l)("addOptionTips")), 1),
                      r(w, {
                        modelValue: c.value,
                        "onUpdate:modelValue": t[1] || (t[1] = (u) => c.value = u),
                        modelModifiers: { trim: !0 },
                        type: "textarea",
                        clearable: "",
                        maxlength: "200",
                        "show-word-limit": ""
                      }, null, 8, ["modelValue"]),
                      m("div", te, [
                        r(k, {
                          size: "small",
                          text: "",
                          onClick: t[2] || (t[2] = (u) => _.value = !1)
                        }, {
                          default: a(() => [
                            f(d(n(l)("cancel")), 1)
                          ]),
                          _: 1
                        }),
                        r(k, {
                          size: "small",
                          type: "primary",
                          onClick: $
                        }, {
                          default: a(() => [
                            f(d(n(l)("confirm")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["visible"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }),
          y(o.$slots, "other")
        ], 512), [
          [E, n(e).editTab == "content"]
        ]),
        S(m("div", oe, [
          y(o.$slots, "style-field"),
          y(o.$slots, "style")
        ], 512), [
          [E, n(e).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  fe as default
};
