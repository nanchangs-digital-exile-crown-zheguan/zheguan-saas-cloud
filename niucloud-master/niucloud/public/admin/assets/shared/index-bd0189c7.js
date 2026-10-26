import { defineComponent as $, ref as x, computed as h, resolveComponent as i, openBlock as r, createElementBlock as d, createVNode as n, unref as s, withCtx as b, createElementVNode as t, toDisplayString as m, isRef as g, createCommentVNode as w, Fragment as E, renderList as F, normalizeClass as M, pushScopeId as re, popScopeId as de } from "vue";
import { k as V, n as f, u as R, h$ as q, i0 as A, i1 as S, t as u, a as G } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const H = { class: "layout-setting-trigger navbar-hit" }, J = { class: "setting-item flex items-center justify-between mb-[10px]" }, K = { class: "title text-base text-tx-secondary" }, O = { class: "setting-item flex items-center justify-between mb-[10px]" }, P = { class: "title text-base text-tx-secondary" }, Q = {
  key: 0,
  class: "setting-item flex items-center justify-between mb-[10px]"
}, W = { class: "title text-base text-tx-secondary" }, X = {
  key: 1,
  class: "setting-item mb-[10px]"
}, Y = { class: "title text-base text-tx-secondary" }, Z = { class: "flex mt-[10px] layout-style flex-wrap" }, ee = ["onClick"], te = ["src"], oe = /* @__PURE__ */ $({
  __name: "index",
  props: {
    /** 展示「标签栏」开关 */
    showTab: { type: Boolean, default: !1 },
    /** 展示「布局风格」选择（admin 系布局） */
    showLayoutStyle: { type: Boolean, default: !1 },
    /** 图标颜色，默认跟随主题变量 */
    iconColor: { type: String, default: "var(--color)" }
  },
  setup(c, { expose: C }) {
    const ae = c, T = x([
      { key: "admin", image: V("static/resource/images/system/layout_bussiness.png") },
      { key: "admin_simplicity", image: V("static/resource/images/system/layout_darkside.png") }
    ]), L = x(f.get("admin_layout") || "admin"), p = x(!1), o = R(), B = q(), D = A(B), _ = h({
      get() {
        return o.dark;
      },
      set(a) {
        o.setTheme("dark", a), D(a), S(o.theme, o.dark ? "dark" : "light");
      }
    }), y = h({
      get() {
        return o.tab;
      },
      set(a) {
        o.$patch((l) => {
          l.tab = a, f.set({ key: "tab", data: a });
        });
      }
    }), v = h({
      get() {
        return o.theme;
      },
      set(a) {
        o.setTheme("theme", a), S(o.theme, o.dark ? "dark" : "light");
      }
    }), I = (a) => {
      f.set({ key: "admin_layout", data: a }), location.reload();
    };
    return C({ open: () => {
      p.value = !0;
    } }), (a, l) => {
      const U = i("icon"), k = i("el-switch"), j = i("el-color-picker"), z = i("el-scrollbar"), N = i("el-drawer");
      return r(), d("div", H, [
        n(U, {
          name: "iconfont iconshezhi1",
          color: c.iconColor
        }, null, 8, ["color"]),
        n(N, {
          modelValue: p.value,
          "onUpdate:modelValue": l[3] || (l[3] = (e) => p.value = e),
          title: s(u)("layout.layoutSetting"),
          size: "300px"
        }, {
          default: b(() => [
            n(z, null, {
              default: b(() => [
                t("div", J, [
                  t("div", K, m(s(u)("layout.darkMode")), 1),
                  t("div", null, [
                    n(k, {
                      modelValue: s(_),
                      "onUpdate:modelValue": l[0] || (l[0] = (e) => g(_) ? _.value = e : null),
                      "active-value": !0,
                      "inactive-value": !1
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                t("div", O, [
                  t("div", P, m(s(u)("layout.themeColor")), 1),
                  t("div", null, [
                    n(j, {
                      modelValue: s(v),
                      "onUpdate:modelValue": l[1] || (l[1] = (e) => g(v) ? v.value = e : null)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                c.showTab ? (r(), d("div", Q, [
                  t("div", W, m(s(u)("layout.tab")), 1),
                  t("div", null, [
                    n(k, {
                      modelValue: s(y),
                      "onUpdate:modelValue": l[2] || (l[2] = (e) => g(y) ? y.value = e : null),
                      "active-value": !0,
                      "inactive-value": !1
                    }, null, 8, ["modelValue"])
                  ])
                ])) : w("", !0),
                c.showLayoutStyle ? (r(), d("div", X, [
                  t("div", Y, m(s(u)("layout.layoutStyle")), 1),
                  t("div", Z, [
                    (r(!0), d(E, null, F(T.value, (e, se) => (r(), d("div", {
                      class: M(["relative w-[125px] h-[100px] border mr-[10px] mb-[10px] hover:border-primary", { "border-primary": L.value == e.key }]),
                      onClick: (ne) => I(e.key)
                    }, [
                      t("img", {
                        src: e.image,
                        alt: "",
                        class: "w-full h-full"
                      }, null, 8, te)
                    ], 10, ee))), 256))
                  ])
                ])) : w("", !0)
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
const xe = /* @__PURE__ */ G(oe, [["__scopeId", "data-v-a2a029da"]]);
export {
  xe as default
};
