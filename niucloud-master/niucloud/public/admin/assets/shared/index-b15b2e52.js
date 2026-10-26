import { defineComponent as f, resolveComponent as o, openBlock as r, createElementBlock as h, createVNode as e, withCtx as t, normalizeStyle as v, createElementVNode as x, unref as l, createBlock as a, KeepAlive as y, resolveDynamicComponent as S, createCommentVNode as b, pushScopeId as H, popScopeId as K } from "vue";
import g from "./index-9b32fe9d.js";
import k from "./index-85bbaf7b.js";
import w from "./tabs-288cc7ef.js";
import { hS as C, c9 as I, a as N } from "./core-shared-86a0da16.js";
import "./logo.default-aeaa7888.js";
import "vue-router";
import "./user-info-1b980fea.js";
import "./member_head-81b0c11e.js";
import "@element-plus/icons-vue";
import "./index-af0a6713.js";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./index-bd0189c7.js";
import "./index-9d0b48c9.js";
import "./index-9e6046fd.js";
import "./side-3aa47151.js";
import "./menu-item-119b01ad.js";
import "./index-6cb448c5.js";
const A = { class: "flex w-full h-screen" }, B = { class: "p-[15px]" }, V = /* @__PURE__ */ f({
  __name: "index",
  setup(E) {
    const p = C(), c = I();
    return (T, z) => {
      const i = o("el-header"), _ = o("router-view"), m = o("el-scrollbar"), s = o("el-main"), n = o("el-container");
      return r(), h("div", A, [
        e(n, null, {
          default: t(() => [
            e(i, null, {
              default: t(() => [
                e(g)
              ]),
              _: 1
            }),
            e(n, {
              style: v({ height: "calc(100vh - 64px)" })
            }, {
              default: t(() => [
                e(k),
                e(n, { direction: "vertical" }, {
                  default: t(() => [
                    e(w),
                    e(s, { class: "h-full p-0 bg-page" }, {
                      default: t(() => [
                        e(m, null, {
                          default: t(() => [
                            x("div", B, [
                              l(p).routeRefreshTag ? (r(), a(_, { key: 0 }, {
                                default: t(({ Component: d, route: u }) => [
                                  (r(), a(y, {
                                    include: l(c).tabNames,
                                    max: 15
                                  }, [
                                    (r(), a(S(d), {
                                      key: u.fullPath
                                    }))
                                  ], 1032, ["include"]))
                                ]),
                                _: 1
                              })) : b("", !0)
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
            }, 8, ["style"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const re = /* @__PURE__ */ N(V, [["__scopeId", "data-v-02f083f4"]]);
export {
  re as default
};
