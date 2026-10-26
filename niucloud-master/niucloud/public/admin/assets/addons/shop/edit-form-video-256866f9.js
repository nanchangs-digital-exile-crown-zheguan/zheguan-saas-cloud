import { ElTooltip as w, ElRadio as E, ElRadioGroup as g, ElFormItem as v, ElForm as V } from "element-plus/es";
import { defineComponent as C, openBlock as S, createElementBlock as T, Fragment as $, withDirectives as m, createElementVNode as n, renderSlot as i, createVNode as t, withCtx as e, toDisplayString as r, unref as o, createTextVNode as _, vShow as c } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { u as B } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const D = { class: "content-wrap" }, F = { class: "flex items-center" }, N = { class: "mr-[3px]" }, k = /* @__PURE__ */ n("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), M = { class: "style-wrap" }, J = /* @__PURE__ */ C({
  __name: "edit-form-video",
  setup(R, { expose: u }) {
    const l = B();
    return l.editComponent.ignore = ["componentBgUrl"], u({}), (s, d) => {
      const f = w, p = E, h = g, x = v, y = V;
      return S(), T($, null, [
        m(n("div", D, [
          i(s.$slots, "field"),
          t(y, {
            "label-width": "100px",
            class: "px-[10px]"
          }, {
            default: e(() => [
              t(x, null, {
                label: e(() => [
                  n("div", F, [
                    n("span", N, r(o(a)("上传方式")), 1),
                    t(f, {
                      effect: "light",
                      content: o(a)("拍摄时长限制1分钟，从相册上传不限制时长。"),
                      placement: "top"
                    }, {
                      default: e(() => [
                        k
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ])
                ]),
                default: e(() => [
                  t(h, {
                    modelValue: o(l).editComponent.uploadMode,
                    "onUpdate:modelValue": d[0] || (d[0] = (b) => o(l).editComponent.uploadMode = b)
                  }, {
                    default: e(() => [
                      t(p, { label: "shoot_and_album" }, {
                        default: e(() => [
                          _(r(o(a)("拍摄和相册")), 1)
                        ]),
                        _: 1
                      }),
                      t(p, { label: "shoot_only" }, {
                        default: e(() => [
                          _(r(o(a)("只允许拍摄")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          i(s.$slots, "other")
        ], 512), [
          [c, o(l).editTab == "content"]
        ]),
        m(n("div", M, [
          i(s.$slots, "style-field"),
          i(s.$slots, "style")
        ], 512), [
          [c, o(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  J as default
};
