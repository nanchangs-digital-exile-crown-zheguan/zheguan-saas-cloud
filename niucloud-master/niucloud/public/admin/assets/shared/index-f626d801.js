import { defineComponent as h, computed as b, resolveComponent as t, openBlock as r, createElementBlock as S, createVNode as e, withCtx as o, createElementVNode as k, unref as m, createBlock as n, KeepAlive as v, resolveDynamicComponent as x, createCommentVNode as y } from "vue";
import C from "./index-5ca67259.js";
import w from "./index-8b49e304.js";
import N from "./tabs-59bf3aa5.js";
import { hS as g, c9 as A, u as B } from "./core-shared-86a0da16.js";
import "./index-bd0189c7.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
import "./index-9e6046fd.js";
import "./index-98e771e5.js";
import "./user-info-ee129a4c.js";
import "./member_head-81b0c11e.js";
import "./index-af0a6713.js";
import "./index-a7e83895.js";
import "./side-e52ad7b0.js";
import "./icon-addon-one-2b9cfff5.js";
import "./menu-item-c267b271.js";
import "./lodash-8c6c2daa.js";
import "./index-6cb448c5.js";
const V = { class: "flex w-full h-screen" }, E = { class: "p-[15px]" }, ne = /* @__PURE__ */ h({
  __name: "index",
  setup(T) {
    const a = g(), l = A(), p = B(), D = b(() => p.dark);
    return (H, K) => {
      const c = t("el-header"), i = t("router-view"), s = t("el-scrollbar"), _ = t("el-main"), u = t("el-container");
      return r(), S("div", V, [
        e(w),
        e(u, null, {
          default: o(() => [
            e(c, null, {
              default: o(() => [
                e(C)
              ]),
              _: 1
            }),
            e(N),
            e(_, { class: "h-full p-0 bg-page" }, {
              default: o(() => [
                e(s, null, {
                  default: o(() => [
                    k("div", E, [
                      m(a).routeRefreshTag ? (r(), n(i, { key: 0 }, {
                        default: o(({ Component: d, route: f }) => [
                          (r(), n(v, {
                            include: m(l).tabNames,
                            max: 15
                          }, [
                            (r(), n(x(d), {
                              key: f.fullPath
                            }))
                          ], 1032, ["include"]))
                        ]),
                        _: 1
                      })) : y("", !0)
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
  ne as default
};
