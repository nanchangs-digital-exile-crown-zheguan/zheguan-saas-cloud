import { defineComponent as f, resolveComponent as t, openBlock as r, createElementBlock as h, createVNode as e, withCtx as o, createElementVNode as v, unref as c, createBlock as p, KeepAlive as x, resolveDynamicComponent as b, createCommentVNode as S, pushScopeId as H, popScopeId as K } from "vue";
import y from "./index-9c69f378.js";
import w from "./index-4750931f.js";
import k from "./tabs-83674988.js";
import { hS as C, c9 as g, a as I } from "./core-shared-86a0da16.js";
import "./icon-addon-90fccbab.js";
import "./index-bd0189c7.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
import "./index-9e6046fd.js";
import "./index-98e771e5.js";
import "./user-info-529bc57a.js";
import "./site_empty-63fceac6.js";
import "./index-af0a6713.js";
import "./index-a7e83895.js";
import "./side-8b95d35d.js";
import "./menu-item-b5957800.js";
import "./lodash-8c6c2daa.js";
import "./index-6cb448c5.js";
const N = { class: "min-w-[1500px]" }, A = { class: "p-[10px]" }, B = /* @__PURE__ */ f({
  __name: "index",
  setup(V) {
    const n = C(), i = g();
    return (E, T) => {
      const l = t("el-header"), m = t("router-view"), _ = t("el-scrollbar"), s = t("el-main"), a = t("el-container");
      return r(), h("div", N, [
        e(l, null, {
          default: o(() => [
            e(y)
          ]),
          _: 1
        }),
        e(a, null, {
          default: o(() => [
            e(w, { class: "h-[calc(100vh-60px)]" }),
            e(a, { direction: "vertical" }, {
              default: o(() => [
                e(k),
                e(s, { class: "main-wrap h-[calc(100vh-60px)] p-0 bg-page relative" }, {
                  default: o(() => [
                    e(_, null, {
                      default: o(() => [
                        v("div", A, [
                          c(n).routeRefreshTag ? (r(), p(m, { key: 0 }, {
                            default: o(({ Component: d, route: u }) => [
                              (r(), p(x, {
                                include: c(i).tabNames
                              }, [
                                (r(), p(b(d), {
                                  key: u.fullPath
                                }))
                              ], 1032, ["include"]))
                            ]),
                            _: 1
                          })) : S("", !0)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const pe = /* @__PURE__ */ I(B, [["__scopeId", "data-v-57fe0cb0"]]);
export {
  pe as default
};
