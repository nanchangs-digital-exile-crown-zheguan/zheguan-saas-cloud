import { defineComponent as ce, ref as u, computed as D, onMounted as ue, resolveComponent as a, openBlock as c, createBlock as x, normalizeClass as H, unref as i, withCtx as l, createVNode as n, createElementVNode as t, createElementBlock as L, Fragment as O, renderList as P, createTextVNode as q, toDisplayString as m, withDirectives as G, vModelText as J, pushScopeId as de, popScopeId as pe } from "vue";
import _e from "./index-bd0189c7.js";
import me from "./index-98e771e5.js";
import fe from "./user-info-57016e12.js";
import he from "./index-a7e83895.js";
import { i6 as ve, u as ge, j as be, n as f, t as T, a as xe } from "./core-shared-86a0da16.js";
import { useRoute as we, useRouter as ye } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./index-af0a6713.js";
const K = (w) => (de("data-v-51b0b943"), w = w(), pe(), w), ke = { class: "left-panel h-full flex items-center" }, Se = { class: "flex items-center h-full pl-[10px]" }, Ie = { class: "right-panel h-full flex items-center justify-end" }, Ce = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Re = ["title"], Ve = { class: "site-status__name" }, Le = { class: "text-[14px]" }, Te = {
  key: 0,
  class: "text-[14px]"
}, Ee = {
  key: 1,
  class: "text-[14px]"
}, We = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Ue = /* @__PURE__ */ K(() => /* @__PURE__ */ t("span", { class: "header-divider" }, null, -1)), De = /* @__PURE__ */ K(() => /* @__PURE__ */ t("span", { class: "header-divider" }, null, -1)), Fe = { class: "dialog-footer" }, $e = /* @__PURE__ */ ce({
  __name: "index",
  setup(w) {
    const F = u(), $ = u(), M = u(), Q = () => {
      var e;
      return (e = F.value) == null ? void 0 : e.open();
    }, X = () => {
      var e;
      return (e = $.value) == null ? void 0 : e.open();
    }, Y = () => {
      var e;
      return (e = M.value) == null ? void 0 : e.open();
    }, { toggle: Me } = ve(), h = ge(), Z = we(), ee = ye(), j = u(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), z = be(), p = D(() => z.siteInfo), te = D(() => h.dark), oe = z.routers, ne = (e) => {
      let s = [], r = e == null ? void 0 : e.parent_route;
      for (; r; )
        r.short_title && s.unshift(r.short_title), r = r.parent_route;
      return s.join(" - ");
    }, B = (e, s = null, r = 1) => {
      let _ = [];
      return e.forEach((I) => {
        const { path: C, name: R, meta: d = {}, short_title: W, children: v } = I, V = (d.show === void 0 ? 1 : d.show) && r;
        if (d.type === 1 && V === 1) {
          const g = d.title || W || "", b = ne(d), o = b ? `${b} - ${g}` : g, U = {
            path: C,
            name: R,
            title: g,
            parent_title: b,
            full_title: o
          };
          _.push(U);
        }
        v && v.length > 0 && (_ = _.concat(B(v, I, V)));
      }), _;
    }, le = B(oe), E = u(""), se = (e) => {
      e && ee.push({ name: e }), E.value = "";
    }, y = u(!1), k = u(""), S = u("");
    f.get("comparisonTokenStorage") && (k.value = f.get("comparisonTokenStorage")), f.get("comparisonSiteIdStorage") && (S.value = f.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (e) => {
      document.visibilityState === "visible" && (S.value != f.get("siteId") || k.value != f.get("token")) && (y.value = !0);
    });
    const ie = () => {
      y.value = !1, location.href = `${location.origin}/site/`;
    };
    ue(() => {
      window.onresize = () => (() => {
        j.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      })();
    });
    const ae = () => {
      h.$patch((e) => {
        j.value < 768 ? (e.menuDrawer = !0, e.menuIsCollapse = !1) : h.toggleMenuCollapse(!h.menuIsCollapse);
      });
    }, re = D(() => {
      const e = Z.matched.filter((s) => s.meta.title);
      return e[0] && e[0].path == "/" && e.splice(0, 1), e;
    });
    return (e, s) => {
      const r = a("icon"), _ = a("el-breadcrumb-item"), I = a("el-breadcrumb"), C = a("el-col"), R = a("el-dropdown-item"), d = a("el-dropdown-menu"), W = a("el-dropdown"), v = a("el-option"), N = a("el-select"), V = a("el-row"), A = a("el-button"), g = a("el-dialog"), b = a("el-container");
      return c(), x(b, {
        class: H(["layout-header h-full", { "border-b border-color": !i(te) }])
      }, {
        default: l(() => [
          n(V, { class: "w-100 h-full w-full" }, {
            default: l(() => [
              n(C, { span: 10 }, {
                default: l(() => [
                  t("div", ke, [
                    t("div", {
                      class: "hidden-sm-and-up navbar-item flex items-center h-full cursor-pointer",
                      onClick: ae
                    }, [
                      i(h).menuIsCollapse ? (c(), x(r, {
                        key: 0,
                        name: "element Expand"
                      })) : (c(), x(r, {
                        key: 1,
                        name: "element Fold"
                      }))
                    ]),
                    t("div", Se, [
                      n(I, { separator: "/" }, {
                        default: l(() => [
                          (c(!0), L(O, null, P(i(re), (o, U) => (c(), x(_, {
                            to: o.path,
                            class: "inter",
                            key: U
                          }, {
                            default: l(() => [
                              q(m(o.meta.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]))), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              n(C, { span: 14 }, {
                default: l(() => [
                  t("div", Ie, [
                    t("div", Ce, [
                      n(W, {
                        trigger: "hover",
                        "hide-on-click": !1,
                        "popper-class": "site-info-wrap",
                        class: "mr-[8px]"
                      }, {
                        dropdown: l(() => [
                          n(d, null, {
                            default: l(() => [
                              n(R, null, {
                                default: l(() => [
                                  t("div", Le, "站点编号：" + m(i(p).site_id), 1)
                                ]),
                                _: 1
                              }),
                              n(R, null, {
                                default: l(() => [
                                  i(p).expire_time == 0 ? (c(), L("div", Te, "到期时间：永久")) : (c(), L("div", Ee, "到期时间：" + m(i(p).expire_time), 1))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: l(() => [
                          t("div", {
                            class: "site-status flex items-center",
                            title: i(p).status_name
                          }, [
                            t("span", {
                              class: H(["site-status__dot", i(p).status == 1 ? "is-success" : "is-danger"])
                            }, null, 2),
                            t("span", Ve, m(i(p).site_name), 1),
                            n(r, {
                              name: "element ArrowDown",
                              size: "14px",
                              color: "var(--sys-color-text-placeholder)",
                              class: "site-status__arrow"
                            })
                          ], 8, Re)
                        ]),
                        _: 1
                      })
                    ]),
                    t("div", We, [
                      n(N, {
                        modelValue: E.value,
                        "onUpdate:modelValue": s[0] || (s[0] = (o) => E.value = o),
                        class: "menu-search-select",
                        placeholder: i(T)("search"),
                        filterable: "",
                        onChange: se
                      }, {
                        default: l(() => [
                          (c(!0), L(O, null, P(i(le), (o) => (c(), x(v, {
                            key: o.name,
                            label: o.full_title,
                            value: o.name
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"])
                    ]),
                    Ue,
                    n(he, { class: "navbar-item" }),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: Q
                    }, [
                      n(me, {
                        ref_key: "taskIndicatorRef",
                        ref: F
                      }, null, 512)
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: X
                    }, [
                      n(_e, {
                        ref_key: "layoutSettingRef",
                        ref: $,
                        "show-tab": !0
                      }, null, 512)
                    ]),
                    De,
                    t("div", {
                      class: "navbar-item navbar-item--user flex items-center h-full cursor-pointer",
                      onClick: Y
                    }, [
                      n(fe, {
                        ref_key: "userInfoRef",
                        ref: M
                      }, null, 512)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          G(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[1] || (s[1] = (o) => k.value = o)
          }, null, 512), [
            [J, k.value]
          ]),
          G(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[2] || (s[2] = (o) => S.value = o)
          }, null, 512), [
            [J, S.value]
          ]),
          n(g, {
            modelValue: y.value,
            "onUpdate:modelValue": s[3] || (s[3] = (o) => y.value = o),
            title: i(T)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1
          }, {
            footer: l(() => [
              t("span", Fe, [
                n(A, { onClick: ie }, {
                  default: l(() => [
                    q(m(i(T)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: l(() => [
              t("span", null, m(i(T)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const Xe = /* @__PURE__ */ xe($e, [["__scopeId", "data-v-51b0b943"]]);
export {
  Xe as default
};
