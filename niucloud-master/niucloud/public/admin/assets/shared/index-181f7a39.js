import { defineComponent as h, resolveComponent as t, openBlock as r, createElementBlock as v, createVNode as e, withCtx as o, createElementVNode as a, unref as n, createBlock as i, KeepAlive as x, resolveDynamicComponent as y, createCommentVNode as b, pushScopeId as H, popScopeId as K } from "vue";
import S from "./index-5e6b7a30.js";
import g from "./index-8989886b.js";
import w from "./tabs-622dc2a1.js";
import { hS as k, c9 as C, a as I } from "./core-shared-86a0da16.js";
import "./logo.default-aeaa7888.js";
import "vue-router";
import "./user-info-29ce4e4b.js";
import "./index-af0a6713.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./index-a7e83895.js";
import "./index-bd0189c7.js";
import "./index-98e771e5.js";
import "./index-9e6046fd.js";
import "./menu-item-78d5e5a4.js";
import "./module-0abf3a60.js";
import "./index-6cb448c5.js";
const N = { class: "layout-lightside flex flex-col w-full h-screen" }, B = { class: "layout-lightside__body flex flex-1 min-h-0" }, V = { class: "layout-lightside__content" }, A = /* @__PURE__ */ h({
  __name: "index",
  setup(E) {
    const l = k(), _ = C();
    return (T, $) => {
      const c = t("el-header"), s = t("router-view"), p = t("el-scrollbar"), m = t("el-main"), d = t("el-container");
      return r(), v("div", N, [
        e(c, { class: "layout-lightside__header-wrap" }, {
          default: o(() => [
            e(S)
          ]),
          _: 1
        }),
        a("div", B, [
          e(g),
          e(d, {
            direction: "vertical",
            class: "min-w-0"
          }, {
            default: o(() => [
              e(w),
              e(m, { class: "layout-lightside__main h-full p-0" }, {
                default: o(() => [
                  e(p, null, {
                    default: o(() => [
                      a("div", V, [
                        n(l).routeRefreshTag ? (r(), i(s, { key: 0 }, {
                          default: o(({ Component: f, route: u }) => [
                            (r(), i(x, {
                              include: n(_).tabNames,
                              max: 15
                            }, [
                              (r(), i(y(f), {
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
        ])
      ]);
    };
  }
});
const re = /* @__PURE__ */ I(A, [["__scopeId", "data-v-4b042ff8"]]);
export {
  re as default
};
