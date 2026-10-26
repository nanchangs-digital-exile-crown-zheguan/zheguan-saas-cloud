import { defineComponent as h, computed as v, resolveComponent as t, openBlock as r, createElementBlock as y, createVNode as e, withCtx as o, createElementVNode as S, unref as n, createBlock as a, KeepAlive as x, resolveDynamicComponent as b, createCommentVNode as k, pushScopeId as R, popScopeId as j } from "vue";
import w from "./index-69131e29.js";
import C from "./index-397a3b58.js";
import I from "./tabs-8f2909e2.js";
import { hS as N, c9 as B, u as V, a as g } from "./core-shared-86a0da16.js";
import "./index-bd0189c7.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
import "./index-98e771e5.js";
import "./user-info-57016e12.js";
import "./index-af0a6713.js";
import "./index-a7e83895.js";
import "./side-388e284d.js";
import "./icon-addon-one-2b9cfff5.js";
import "./menu-item-741d6745.js";
import "./index-6cb448c5.js";
const A = { class: "layout-default flex w-full h-screen" }, E = { class: "layout-default__content" }, T = /* @__PURE__ */ h({
  __name: "index",
  setup($) {
    const c = N(), _ = B(), l = V(), D = v(() => l.dark);
    return (H, K) => {
      const s = t("el-header"), m = t("router-view"), p = t("el-scrollbar"), d = t("el-main"), i = t("el-container");
      return r(), y("div", A, [
        e(C),
        e(i, null, {
          default: o(() => [
            e(s, null, {
              default: o(() => [
                e(w)
              ]),
              _: 1
            }),
            e(I),
            e(d, { class: "layout-default__main h-full p-0" }, {
              default: o(() => [
                e(p, null, {
                  default: o(() => [
                    S("div", E, [
                      n(c).routeRefreshTag ? (r(), a(m, { key: 0 }, {
                        default: o(({ Component: u, route: f }) => [
                          (r(), a(x, {
                            include: n(_).tabNames,
                            max: 15
                          }, [
                            (r(), a(b(u), {
                              key: f.fullPath
                            }))
                          ], 1032, ["include"]))
                        ]),
                        _: 1
                      })) : k("", !0)
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
      ]);
    };
  }
});
const ne = /* @__PURE__ */ g(T, [["__scopeId", "data-v-4a4d0ded"]]);
export {
  ne as default
};
