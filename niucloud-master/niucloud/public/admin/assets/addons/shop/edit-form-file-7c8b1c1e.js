import { ElInput as _, ElFormItem as b, ElForm as w } from "element-plus/es";
import { defineComponent as S, openBlock as h, createElementBlock as y, Fragment as V, withDirectives as r, createElementVNode as m, renderSlot as i, createVNode as n, withModifiers as v, withCtx as s, unref as t, createTextVNode as B, vShow as p } from "vue";
import { t as C } from "/admin/assets/shared/admin-lang.js";
import { u as E } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const g = { class: "content-wrap" }, x = { class: "style-wrap" }, I = /* @__PURE__ */ S({
  __name: "edit-form-file",
  setup(U, { expose: d }) {
    const e = E();
    return e.editComponent.ignore = ["componentBgUrl"], d({}), (o, l) => {
      const a = _, f = b, u = w;
      return h(), y(V, null, [
        r(m("div", g, [
          i(o.$slots, "field"),
          n(u, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: l[1] || (l[1] = v(() => {
            }, ["prevent"]))
          }, {
            default: s(() => [
              n(f, {
                label: t(C)("限制上传大小")
              }, {
                default: s(() => [
                  n(a, {
                    modelValue: t(e).editComponent.limitUploadSize,
                    "onUpdate:modelValue": l[0] || (l[0] = (c) => t(e).editComponent.limitUploadSize = c),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    maxlength: "15"
                  }, null, 8, ["modelValue"]),
                  B(" /单位MB，目前是Bit，要转换，*1024 ")
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }),
          i(o.$slots, "other")
        ], 512), [
          [p, t(e).editTab == "content"]
        ]),
        r(m("div", x, [
          i(o.$slots, "style-field"),
          i(o.$slots, "style")
        ], 512), [
          [p, t(e).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  I as default
};
