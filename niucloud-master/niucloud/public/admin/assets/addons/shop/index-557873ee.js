import { ElImage as y, ElCard as k, ElLoadingDirective as b } from "element-plus/es";
import { defineComponent as L, ref as C, reactive as I, withDirectives as E, openBlock as t, createElementBlock as o, Fragment as l, renderList as d, createBlock as S, withCtx as _, createElementVNode as e, toDisplayString as m, createVNode as j, unref as A, createCommentVNode as B, pushScopeId as D, popScopeId as N } from "vue";
import V from "/admin/assets/shared/core-shared.js";
import { a0 as F } from "./marketing-f8ec8b08.js";
import { img as M } from "/admin/assets/shared/core-shared.js";
import { useRouter as R } from "vue-router";
import { storage as $ } from "/admin/assets/shared/core-shared.js";
import { _ as q } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const z = (s) => (D("data-v-97075f19"), s = s(), N(), s), G = { class: "main-container w-full" }, H = { class: "flex justify-between items-center" }, J = { class: "text-page-title" }, K = { class: "flex flex-wrap plug-list pb-10 plug-large" }, O = { class: "relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary" }, P = ["onClick"], Q = { class: "flex justify-center items-center" }, T = /* @__PURE__ */ z(() => /* @__PURE__ */ e("div", { class: "image-slot" }, [
  /* @__PURE__ */ e("img", {
    class: "w-[50px] h-[50px]",
    src: V
  })
], -1)), U = { class: "flex flex-col justify-between text-left w-[190px]" }, W = { class: "app-text w-[190px] text-[17px] text-[#222] pl-3" }, X = /* @__PURE__ */ L({
  __name: "index",
  setup(s) {
    const f = R(), n = C(!0), a = I({
      appList: []
    });
    (async () => {
      const r = $.get("menuAppStorage"), p = await F({ addon: r });
      a.appList = p.data, n.value = !1;
    })();
    const u = (r) => {
      f.push(r);
    };
    return (r, p) => {
      const x = y, v = k, g = b;
      return E((t(), o("div", G, [
        (t(!0), o(l, null, d(a.appList, (i, h) => (t(), o("div", { key: h }, [
          i.child != "" ? (t(), S(v, {
            key: 0,
            class: "box-card !border-none",
            shadow: "never"
          }, {
            default: _(() => [
              e("div", H, [
                e("span", J, m(i.name), 1)
              ]),
              e("div", K, [
                (t(!0), o(l, null, d(i.child, (c, w) => (t(), o("div", { key: w }, [
                  e("div", O, [
                    e("div", {
                      onClick: (Z) => u(c.url),
                      class: "flex py-5 items-center"
                    }, [
                      e("div", Q, [
                        j(x, {
                          class: "w-[40px] h-[40px]",
                          src: A(M)(c.icon),
                          fit: "contain"
                        }, {
                          error: _(() => [
                            T
                          ]),
                          _: 2
                        }, 1032, ["src"])
                      ]),
                      e("div", U, [
                        e("p", W, m(c.title), 1)
                      ])
                    ], 8, P)
                  ])
                ]))), 128))
              ])
            ]),
            _: 2
          }, 1024)) : B("", !0)
        ]))), 128))
      ])), [
        [g, n.value]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ q(X, [["__scopeId", "data-v-97075f19"]]);
export {
  pe as default
};
