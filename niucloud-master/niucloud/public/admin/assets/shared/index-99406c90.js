import { defineComponent as h, computed as b, resolveComponent as t, openBlock as r, createElementBlock as y, createVNode as e, withCtx as o, createElementVNode as S, unref as a, createBlock as n, KeepAlive as k, resolveDynamicComponent as v, createCommentVNode as x } from "vue";
import C from "./index-8188a977.js";
import w from "./index-acd89bd1.js";
import N from "./tabs-dae43cfe.js";
import { hS as g, c9 as A, u as B } from "./core-shared-86a0da16.js";
import "./layout-setting-7a7e275e.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
import "./user-info-fd03651f.js";
import "./member_head-81b0c11e.js";
import "./index-af0a6713.js";
import "./index-a7e83895.js";
import "./side-4f59149f.js";
import "./icon-addon-one-2b9cfff5.js";
import "./menu-item-5e8239fa.js";
const T = { class: "flex w-full h-screen" }, V = { class: "p-[15px]" }, ee = /* @__PURE__ */ h({
  __name: "index",
  setup(E) {
    const l = g(), m = A(), c = B(), D = b(() => c.dark);
    return (H, K) => {
      const p = t("el-header"), s = t("router-view"), i = t("el-scrollbar"), _ = t("el-main"), u = t("el-container");
      return r(), y("div", T, [
        e(w),
        e(u, null, {
          default: o(() => [
            e(p, null, {
              default: o(() => [
                e(C)
              ]),
              _: 1
            }),
            e(N),
            e(_, { class: "h-full p-0 bg-page" }, {
              default: o(() => [
                e(i, null, {
                  default: o(() => [
                    S("div", V, [
                      a(l).routeRefreshTag ? (r(), n(s, { key: 0 }, {
                        default: o(({ Component: d, route: f }) => [
                          (r(), n(k, {
                            include: a(m).tabNames,
                            max: 15
                          }, [
                            (r(), n(v(d), {
                              key: f.fullPath
                            }))
                          ], 1032, ["include"]))
                        ]),
                        _: 1
                      })) : x("", !0)
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
export {
  ee as default
};
