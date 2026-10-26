import { defineComponent as le, computed as R, ref as d, resolveComponent as i, openBlock as _, createBlock as L, withCtx as l, createElementVNode as t, normalizeClass as z, unref as o, createVNode as n, createElementBlock as M, Fragment as ie, renderList as ae, createTextVNode as H, toDisplayString as g, withDirectives as A, vModelText as O, pushScopeId as re, popScopeId as ce } from "vue";
import { _ as ue } from "./logo.default-aeaa7888.js";
import { u as de, j as pe, n as p, k as me, t as E, a as _e } from "./core-shared-86a0da16.js";
import { useRoute as fe, useRouter as he } from "vue-router";
import ge from "./user-info-29ce4e4b.js";
import ve from "./index-a7e83895.js";
import xe from "./index-bd0189c7.js";
import ye from "./index-98e771e5.js";
import ke from "./index-9e6046fd.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./index-af0a6713.js";
const j = (y) => (re("data-v-429577ae"), y = y(), ce(), y), we = { class: "left-panel flex min-w-0 items-center text-[14px] leading-[1]" }, Se = /* @__PURE__ */ j(() => /* @__PURE__ */ t("img", {
  src: ue,
  alt: ""
}, null, -1)), be = { class: "flex items-center h-full pl-[10px] hidden-xs-only" }, Ie = { class: "right-panel h-full flex items-center justify-end" }, Ce = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Re = ["title"], Le = { class: "site-status__name" }, Te = { class: "text-[14px]" }, Ve = {
  key: 0,
  class: "text-[14px]"
}, Ue = {
  key: 1,
  class: "text-[14px]"
}, Me = { class: "header-search flex items-center h-full" }, Ee = /* @__PURE__ */ j(() => /* @__PURE__ */ t("span", { class: "header-divider" }, null, -1)), je = /* @__PURE__ */ j(() => /* @__PURE__ */ t("span", { class: "header-divider" }, null, -1)), De = { class: "dialog-footer" }, Ne = /* @__PURE__ */ le({
  __name: "index",
  setup(y) {
    const c = de(), P = fe(), q = he(), f = pe(), G = f.routers, h = R(() => f.siteInfo), J = R(() => f.siteInfo.icon ? f.siteInfo.icon : c.website.icon), K = R(() => f.siteInfo.logo ? f.siteInfo.logo : c.website.logo), k = d(!1), w = d(""), S = d("");
    p.get("comparisonTokenStorage") && (w.value = p.get("comparisonTokenStorage")), p.get("comparisonSiteIdStorage") && (S.value = p.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (e) => {
      document.visibilityState === "visible" && (S.value != p.get("siteId") || w.value != p.get("token")) && (k.value = !0);
    });
    const Q = (e) => {
      let s = [], a = e == null ? void 0 : e.parent_route;
      for (; a; )
        a.short_title && s.unshift(a.short_title), a = a.parent_route;
      return s.join(" - ");
    }, D = (e, s = null, a = 1) => {
      let u = [];
      return e.forEach((b) => {
        const { path: T, name: I, meta: m = {}, short_title: V, children: v } = b, C = (m.show === void 0 ? 1 : m.show) && a;
        if (m.type === 1 && C === 1) {
          const x = m.title || V || "", U = Q(m), ne = U ? `${U} - ${x}` : x, se = {
            path: T,
            name: I,
            title: x,
            parent_title: U,
            full_title: ne
          };
          u.push(se);
        }
        v && v.length > 0 && (u = u.concat(D(v, b, C)));
      }), u;
    }, W = d(!1), Be = d(""), Fe = D(G), $e = (e) => {
      e && (q.push({ name: e }), W.value = !1);
    }, X = () => {
      k.value = !1, location.reload();
    }, Y = R(() => {
      const e = P.matched.filter((s) => s.meta.title);
      return e[0] && e[0].path == "/" && e.splice(0, 1), e;
    });
    p.set({ key: "currHeadMenuName", data: "" }), c.toggleMenuCollapse(p.get("menuiscollapse") || !1);
    const Z = () => {
      c.toggleMenuCollapse(!c.menuIsCollapse);
    }, N = d(), B = d(), F = d(), ee = () => {
      var e;
      return (e = N.value) == null ? void 0 : e.open();
    }, te = () => {
      var e;
      return (e = B.value) == null ? void 0 : e.open();
    }, oe = () => {
      var e;
      return (e = F.value) == null ? void 0 : e.open();
    };
    return (e, s) => {
      const a = i("el-image"), u = i("icon"), b = i("el-breadcrumb-item"), T = i("el-breadcrumb"), I = i("el-dropdown-item"), m = i("el-dropdown-menu"), V = i("el-dropdown"), v = i("el-button"), $ = i("el-dialog"), C = i("el-container");
      return _(), L(C, { class: "layout-lightside__header w-full flex items-center justify-between" }, {
        default: l(() => [
          t("div", we, [
            t("div", {
              class: z(["header-logo", { "is-expanded": o(c).menuIsCollapse }])
            }, [
              n(a, {
                class: "header-logo__image",
                src: o(me)(o(c).menuIsCollapse ? o(K) : o(J)),
                fit: "contain"
              }, {
                error: l(() => [
                  Se
                ]),
                _: 1
              }, 8, ["src"])
            ], 2),
            t("div", {
              class: "navbar-item flex items-center h-full cursor-pointer",
              onClick: Z
            }, [
              o(c).menuIsCollapse ? (_(), L(u, {
                key: 0,
                name: "element Fold"
              })) : (_(), L(u, {
                key: 1,
                name: "element Expand"
              }))
            ]),
            t("div", be, [
              n(T, { separator: "/" }, {
                default: l(() => [
                  (_(!0), M(ie, null, ae(o(Y), (r, x) => (_(), L(b, {
                    key: x,
                    to: r.path,
                    class: "inter"
                  }, {
                    default: l(() => [
                      H(g(r.meta.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]))), 128))
                ]),
                _: 1
              })
            ])
          ]),
          t("div", null, [
            t("div", Ie, [
              t("div", Ce, [
                n(V, {
                  trigger: "hover",
                  "hide-on-click": !1,
                  "popper-class": "site-info-wrap",
                  class: "mr-[8px]"
                }, {
                  dropdown: l(() => [
                    n(m, null, {
                      default: l(() => [
                        n(I, null, {
                          default: l(() => [
                            t("div", Te, "站点编号：" + g(o(h).site_id), 1)
                          ]),
                          _: 1
                        }),
                        n(I, null, {
                          default: l(() => [
                            o(h).expire_time == 0 ? (_(), M("div", Ve, "到期时间：永久")) : (_(), M("div", Ue, "到期时间：" + g(o(h).expire_time), 1))
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
                      title: o(h).status_name
                    }, [
                      t("span", {
                        class: z(["site-status__dot", o(h).status == 1 ? "is-success" : "is-danger"])
                      }, null, 2),
                      t("span", Le, g(o(h).site_name), 1),
                      n(u, {
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
              t("div", Me, [
                n(ke)
              ]),
              Ee,
              n(ve, { class: "navbar-item" }),
              t("div", {
                class: "navbar-item flex items-center h-full cursor-pointer",
                onClick: ee
              }, [
                n(ye, {
                  ref_key: "taskIndicatorRef",
                  ref: N
                }, null, 512)
              ]),
              t("div", {
                class: "navbar-item flex items-center h-full cursor-pointer",
                onClick: te
              }, [
                n(xe, {
                  ref_key: "layoutSettingRef",
                  ref: B,
                  "show-tab": !0
                }, null, 512)
              ]),
              je,
              t("div", {
                class: "navbar-item navbar-item--user flex items-center h-full cursor-pointer",
                onClick: oe
              }, [
                n(ge, {
                  ref_key: "userInfoRef",
                  ref: F
                }, null, 512)
              ])
            ])
          ]),
          A(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[0] || (s[0] = (r) => w.value = r)
          }, null, 512), [
            [O, w.value]
          ]),
          A(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[1] || (s[1] = (r) => S.value = r)
          }, null, 512), [
            [O, S.value]
          ]),
          n($, {
            modelValue: k.value,
            "onUpdate:modelValue": s[2] || (s[2] = (r) => k.value = r),
            title: o(E)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1,
            "append-to-body": !0
          }, {
            footer: l(() => [
              t("span", De, [
                n(v, { onClick: X }, {
                  default: l(() => [
                    H(g(o(E)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: l(() => [
              t("span", null, g(o(E)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      });
    };
  }
});
const tt = /* @__PURE__ */ _e(Ne, [["__scopeId", "data-v-429577ae"]]);
export {
  tt as default
};
