import { ElInput as h, ElFormItem as E, ElCheckbox as C, ElCheckboxGroup as w, ElForm as T } from "element-plus/es";
import { defineComponent as V, openBlock as k, createElementBlock as y, Fragment as L, withDirectives as p, createElementVNode as u, renderSlot as m, createVNode as r, withModifiers as $, withCtx as a, unref as l, vShow as c } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { u as S } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const F = { class: "content-wrap" }, M = { class: "style-wrap" }, j = /* @__PURE__ */ V({
  __name: "edit-form-image",
  setup(N, { expose: f }) {
    const t = S();
    t.editComponent.ignore = ["componentBgUrl"], t.editComponent.verify = (o) => {
      const e = { code: !0, message: "" };
      return t.value[o].limit == "" ? (e.code = !1, e.message = i("imageLimitPlaceholder"), e) : isNaN(t.value[o].limit) || !_.number.test(t.value[o].limit) ? (e.code = !1, e.message = i("imageLimitErrorTips"), e) : t.value[o].limit < 0 ? (e.code = !1, e.message = i("imageLimitErrorTipsTwo"), e) : t.value[o].limit == 0 ? (e.code = !1, e.message = i("imageLimitErrorTipsThree"), e) : (t.value[o].limit > 9 && (e.code = !1, e.message = i("imageLimitErrorTipsFour")), e);
    };
    const _ = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    };
    return f({}), (o, e) => {
      const g = h, n = E, d = C, b = w, v = T;
      return k(), y(L, null, [
        p(u("div", F, [
          m(o.$slots, "field"),
          r(v, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: e[2] || (e[2] = $(() => {
            }, ["prevent"]))
          }, {
            default: a(() => [
              r(n, {
                label: l(i)("imageLimit")
              }, {
                default: a(() => [
                  r(g, {
                    modelValue: l(t).editComponent.limit,
                    "onUpdate:modelValue": e[0] || (e[0] = (s) => l(t).editComponent.limit = s),
                    modelModifiers: { trim: !0 },
                    placeholder: l(i)("imageLimitPlaceholder"),
                    clearable: "",
                    maxlength: "2"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(n, {
                label: l(i)("上传方式")
              }, {
                default: a(() => [
                  r(b, {
                    modelValue: l(t).editComponent.uploadMode,
                    "onUpdate:modelValue": e[1] || (e[1] = (s) => l(t).editComponent.uploadMode = s),
                    min: 1
                  }, {
                    default: a(() => [
                      r(d, {
                        label: "拍照上传",
                        value: "take_pictures"
                      }),
                      r(d, {
                        label: "从相册选择",
                        value: "select_from_album"
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
          m(o.$slots, "other")
        ], 512), [
          [c, l(t).editTab == "content"]
        ]),
        p(u("div", M, [
          m(o.$slots, "style-field"),
          m(o.$slots, "style")
        ], 512), [
          [c, l(t).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  j as default
};
