import { defineComponent as B, ref as D, computed as x, resolveComponent as m, openBlock as a, createElementBlock as l, createElementVNode as t, createTextVNode as p, toDisplayString as c, unref as v, createVNode as d, withCtx as u, Fragment as k, renderList as b, normalizeClass as E, pushScopeId as F, popScopeId as L } from "vue";
import { Files as M } from "@element-plus/icons-vue";
import { a as U } from "./core-shared-86a0da16.js";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const q = (i) => (F("data-v-7d80f58f"), i = i(), L(), i), G = { class: "flex items-center justify-between mb-3" }, H = { class: "text-sm text-gray-500" }, J = { class: "text-primary" }, K = {
  key: 0,
  class: "auth-empty"
}, O = /* @__PURE__ */ q(() => /* @__PURE__ */ t("span", null, "暂无可授权的开放接口", -1)), P = {
  key: 1,
  class: "flex flex-col gap-3"
}, Q = { class: "flex items-center justify-between" }, R = { class: "font-medium" }, W = { class: "text-xs text-gray-400" }, X = { class: "mt-2 pl-6 flex flex-col gap-1.5" }, Y = { class: "text-gray-700 shrink-0" }, Z = { class: "font-mono text-gray-400 truncate" }, $ = /* @__PURE__ */ B({
  __name: "domain-auth",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(i, { expose: C, emit: f }) {
    const h = i, _ = D([]), V = (e) => {
      _.value = e || [];
    }, y = x(() => h.modelValue || []), w = x(() => y.value.length), g = (e) => y.value.includes(e), A = (e, o) => {
      const r = new Set(h.modelValue || []);
      o ? r.add(e) : r.delete(e), f("update:modelValue", Array.from(r));
    }, S = () => f("update:modelValue", _.value.map((e) => e.domain)), I = () => f("update:modelValue", []), N = (e) => {
      const o = (e || "get").toLowerCase();
      return o === "get" ? "success" : o === "post" ? "primary" : o === "put" ? "warning" : o === "delete" ? "danger" : "info";
    };
    return C({ setTree: V }), (e, o) => {
      const r = m("el-button"), T = m("el-icon"), j = m("el-checkbox"), z = m("el-tag");
      return a(), l("div", null, [
        t("div", G, [
          t("span", H, [
            p(" 已授权 "),
            t("b", J, c(v(w)), 1),
            p(" / " + c(_.value.length) + " 个模块 ", 1)
          ]),
          t("div", null, [
            d(r, {
              link: "",
              type: "primary",
              onClick: S
            }, {
              default: u(() => [
                p("全选")
              ]),
              _: 1
            }),
            d(r, {
              link: "",
              type: "danger",
              onClick: I
            }, {
              default: u(() => [
                p("清空")
              ]),
              _: 1
            })
          ])
        ]),
        _.value.length ? (a(), l("div", P, [
          (a(!0), l(k, null, b(_.value, (s) => (a(), l("div", {
            key: s.group_key,
            class: E(["border rounded-lg p-3 transition-colors", g(s.domain) ? "border-primary bg-primary/5" : "border-gray-200"])
          }, [
            t("div", Q, [
              d(j, {
                "model-value": g(s.domain),
                onChange: (n) => A(s.domain, n)
              }, {
                default: u(() => [
                  t("span", R, c(s.group_name), 1)
                ]),
                _: 2
              }, 1032, ["model-value", "onChange"]),
              t("span", W, "含 " + c(s.items.length) + " 个接口", 1)
            ]),
            t("div", X, [
              (a(!0), l(k, null, b(s.items, (n) => (a(), l("div", {
                key: n.api_key,
                class: "flex items-center gap-2 text-xs"
              }, [
                d(z, {
                  size: "small",
                  type: N(n.method),
                  class: "shrink-0"
                }, {
                  default: u(() => [
                    p(c((n.method || "get").toUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["type"]),
                t("span", Y, c(n.name), 1),
                t("span", Z, c(n.path), 1)
              ]))), 128))
            ])
          ], 2))), 128))
        ])) : (a(), l("div", K, [
          d(T, { class: "auth-empty__icon" }, {
            default: u(() => [
              d(v(M))
            ]),
            _: 1
          }),
          O
        ]))
      ]);
    };
  }
});
const re = /* @__PURE__ */ U($, [["__scopeId", "data-v-7d80f58f"]]);
export {
  re as default
};
