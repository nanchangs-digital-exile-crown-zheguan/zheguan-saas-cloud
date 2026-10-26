import { defineComponent as f, resolveComponent as t, openBlock as r, createElementBlock as h, createVNode as e, withCtx as o, createElementVNode as v, unref as _, createBlock as n, KeepAlive as y, resolveDynamicComponent as x, createCommentVNode as b, pushScopeId as D, popScopeId as H } from "vue";
import S from "./index-22da3231.js";
import k from "./index-ff1ba58d.js";
import w from "./tabs-f3012f49.js";
import { hS as C, c9 as I, a as N } from "./core-shared-86a0da16.js";
import "./logo.default-aeaa7888.js";
import "vue-router";
import "./user-info-0f3ea98c.js";
import "./index-af0a6713.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./index-bd0189c7.js";
import "./index-9d0b48c9.js";
import "./index-9e6046fd.js";
import "./index-98e771e5.js";
import "./menu-item-0e9cbbad.js";
import "./addon-67a0bf34.js";
import "./module-0abf3a60.js";
import "./index-6cb448c5.js";
const B = { class: "layout-admin flex w-full h-screen" }, V = { class: "layout-admin__content" }, g = /* @__PURE__ */ f({
  __name: "index",
  setup(A) {
    const l = C(), c = I();
    return (E, T) => {
      const i = t("el-header"), m = t("router-view"), p = t("el-scrollbar"), s = t("el-main"), a = t("el-container");
      return r(), h("div", B, [
        e(a, null, {
          default: o(() => [
            e(i, null, {
              default: o(() => [
                e(S)
              ]),
              _: 1
            }),
            e(a, { class: "layout-admin__body" }, {
              default: o(() => [
                e(k),
                e(a, { direction: "vertical" }, {
                  default: o(() => [
                    e(w),
                    e(s, { class: "layout-admin__main h-full p-0" }, {
                      default: o(() => [
                        e(p, null, {
                          default: o(() => [
                            v("div", V, [
                              _(l).routeRefreshTag ? (r(), n(m, { key: 0 }, {
                                default: o(({ Component: d, route: u }) => [
                                  (r(), n(y, {
                                    include: _(c).tabNames,
                                    max: 15
                                  }, [
                                    (r(), n(x(d), {
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
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const re = /* @__PURE__ */ N(g, [["__scopeId", "data-v-a3dd73f8"]]);
export {
  re as default
};
