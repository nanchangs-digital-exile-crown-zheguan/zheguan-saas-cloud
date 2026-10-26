import { defineComponent as w, ref as C, computed as p, resolveComponent as i, openBlock as D, createElementBlock as I, createVNode as n, unref as a, withCtx as x, createElementVNode as o, toDisplayString as _, isRef as v, pushScopeId as J, popScopeId as K } from "vue";
import { u as T, h$ as U, i0 as j, i1 as g, n as $, t as r, a as B } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const E = { class: "flex" }, N = { class: "setting-item flex items-center justify-between mb-[10px]" }, z = { class: "title text-base text-tx-secondary" }, M = { class: "setting-item flex items-center justify-between mb-[10px]" }, R = { class: "title text-base text-tx-secondary" }, q = { class: "setting-item flex items-center justify-between mb-[10px]" }, A = { class: "title text-base text-tx-secondary" }, F = /* @__PURE__ */ w({
  __name: "layout-setting",
  setup(G) {
    const d = C(!1), t = T(), y = U(), k = j(y), u = p({
      get() {
        return t.dark;
      },
      set(l) {
        t.setTheme("dark", l), k(l), g(t.theme, t.dark ? "dark" : "light");
      }
    }), m = p({
      get() {
        return t.tab;
      },
      set(l) {
        t.$patch((e) => {
          e.tab = l, $.set({ key: "tab", data: l });
        });
      }
    }), c = p({
      get() {
        return t.theme;
      },
      set(l) {
        t.setTheme("theme", l), g(t.theme, t.dark ? "dark" : "light");
      }
    });
    return (l, e) => {
      const b = i("icon"), f = i("el-switch"), h = i("el-color-picker"), V = i("el-scrollbar"), S = i("el-drawer");
      return D(), I("div", E, [
        n(b, {
          name: "element Setting",
          onClick: e[0] || (e[0] = (s) => d.value = !0)
        }),
        n(S, {
          modelValue: d.value,
          "onUpdate:modelValue": e[4] || (e[4] = (s) => d.value = s),
          title: a(r)("layout.layoutSetting"),
          size: "300px"
        }, {
          default: x(() => [
            n(V, null, {
              default: x(() => [
                o("div", N, [
                  o("div", z, _(a(r)("layout.darkMode")), 1),
                  o("div", null, [
                    n(f, {
                      modelValue: a(u),
                      "onUpdate:modelValue": e[1] || (e[1] = (s) => v(u) ? u.value = s : null),
                      "active-value": !0,
                      "inactive-value": !1
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                o("div", M, [
                  o("div", R, _(a(r)("layout.themeColor")), 1),
                  o("div", null, [
                    n(h, {
                      modelValue: a(c),
                      "onUpdate:modelValue": e[2] || (e[2] = (s) => v(c) ? c.value = s : null)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                o("div", q, [
                  o("div", A, _(a(r)("layout.tab")), 1),
                  o("div", null, [
                    n(f, {
                      modelValue: a(m),
                      "onUpdate:modelValue": e[3] || (e[3] = (s) => v(m) ? m.value = s : null),
                      "active-value": !0,
                      "inactive-value": !1
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const Z = /* @__PURE__ */ B(F, [["__scopeId", "data-v-5eeda2f8"]]);
export {
  Z as default
};
