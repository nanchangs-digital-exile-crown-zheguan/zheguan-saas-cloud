import { defineComponent as te, ref as c, computed as L, onMounted as oe, resolveComponent as r, openBlock as p, createBlock as S, normalizeClass as j, unref as s, withCtx as n, createVNode as o, createElementVNode as t, createElementBlock as T, Fragment as ne, renderList as le, createTextVNode as B, toDisplayString as m, withDirectives as N, vModelText as z, pushScopeId as Me, popScopeId as Ue } from "vue";
import se from "./index-bd0189c7.js";
import ie from "./index-9e6046fd.js";
import re from "./index-98e771e5.js";
import ae from "./user-info-5883eb2b.js";
import ce from "./index-a7e83895.js";
import { i6 as de, u as ue, j as pe, n as f, t as V, a as me } from "./core-shared-86a0da16.js";
import { useRoute as fe, useRouter as _e } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./member_head-81b0c11e.js";
import "./index-af0a6713.js";
const he = { class: "left-panel h-full flex items-center" }, xe = { class: "flex items-center h-full pl-[10px]" }, ve = { class: "right-panel h-full flex items-center justify-end" }, ge = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, ye = { class: "mx-[8px] bg-[#f6f6f6] border-[1px] border-solid border-[#eee] rounded-[4px] px-[9px] py-[6px] flex items-center" }, be = { class: "mr-[6px] text-[12px] !text-[#333]" }, ke = { class: "text-[14px]" }, we = {
  key: 0,
  class: "text-[14px]"
}, Se = {
  key: 1,
  class: "text-[14px]"
}, Ie = { class: "navbar-item flex items-center h-full cursor-pointer" }, Ce = { class: "dialog-footer" }, Re = /* @__PURE__ */ te({
  __name: "index",
  setup(Le) {
    const E = c(), W = c(), F = c(), H = () => {
      var e;
      return (e = E.value) == null ? void 0 : e.open();
    }, O = () => {
      var e;
      return (e = W.value) == null ? void 0 : e.open();
    }, P = () => {
      var e;
      return (e = F.value) == null ? void 0 : e.open();
    }, { toggle: Te } = de(), _ = ue(), q = fe(), A = _e(), M = c(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), U = pe(), d = L(() => U.siteInfo), G = L(() => _.dark), J = c(!1), K = U.routers, Q = (e) => {
      let i = [], l = e == null ? void 0 : e.parent_route;
      for (; l; )
        l.short_title && i.unshift(l.short_title), l = l.parent_route;
      return i.join(" - ");
    }, $ = (e, i = null) => {
      let l = [];
      return e.forEach((k) => {
        const { path: I, name: w, meta: u = {}, short_title: C, children: h } = k;
        if (u.type == 1 && u.show == 1) {
          const x = u.title || C || "", v = Q(u), R = v ? `${v} - ${x}` : x, a = {
            path: I,
            name: w,
            title: x,
            parent_title: v,
            full_title: R
          };
          l.push(a);
        }
        h && h.length > 0 && (l = l.concat($(h, k)));
      }), l;
    }, Ve = $(K), Ee = c(""), We = (e) => {
      e && (A.push({ name: e }), J.value = !1);
    }, g = c(!1), y = c(""), b = c("");
    f.get("comparisonTokenStorage") && (y.value = f.get("comparisonTokenStorage")), f.get("comparisonSiteIdStorage") && (b.value = f.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (e) => {
      document.visibilityState === "visible" && (b.value != f.get("siteId") || y.value != f.get("token")) && (g.value = !0);
    });
    const X = () => {
      g.value = !1, location.href = `${location.origin}/site/`;
    };
    oe(() => {
      window.onresize = () => (() => {
        M.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      })();
    });
    const Y = () => {
      _.$patch((e) => {
        M.value < 768 ? (e.menuDrawer = !0, e.menuIsCollapse = !1) : _.toggleMenuCollapse(!_.menuIsCollapse);
      });
    }, Z = L(() => {
      const e = q.matched.filter((i) => i.meta.title);
      return e[0] && e[0].path == "/" && e.splice(0, 1), e;
    });
    return (e, i) => {
      const l = r("icon"), k = r("el-breadcrumb-item"), I = r("el-breadcrumb"), w = r("el-col"), u = r("el-dropdown-item"), C = r("el-dropdown-menu"), h = r("el-dropdown"), D = r("el-row"), x = r("el-button"), v = r("el-dialog"), R = r("el-container");
      return p(), S(R, {
        class: j(["h-full px-[10px]", { "layout-header border-b border-color": !s(G) }])
      }, {
        default: n(() => [
          o(D, { class: "w-100 h-full w-full" }, {
            default: n(() => [
              o(w, { span: 10 }, {
                default: n(() => [
                  t("div", he, [
                    t("div", {
                      class: "hidden-sm-and-up navbar-item flex items-center h-full cursor-pointer",
                      onClick: Y
                    }, [
                      s(_).menuIsCollapse ? (p(), S(l, {
                        key: 0,
                        name: "element Expand"
                      })) : (p(), S(l, {
                        key: 1,
                        name: "element Fold"
                      }))
                    ]),
                    t("div", xe, [
                      o(I, { separator: "/" }, {
                        default: n(() => [
                          (p(!0), T(ne, null, le(s(Z), (a, ee) => (p(), S(k, {
                            key: ee,
                            to: a.path,
                            class: "inter"
                          }, {
                            default: n(() => [
                              B(m(a.meta.title), 1)
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
              o(w, { span: 14 }, {
                default: n(() => [
                  t("div", ve, [
                    t("div", ge, [
                      o(h, {
                        trigger: "hover",
                        "hide-on-click": !1,
                        "popper-class": "site-info-wrap",
                        class: "mr-[8px]"
                      }, {
                        dropdown: n(() => [
                          o(C, null, {
                            default: n(() => [
                              o(u, null, {
                                default: n(() => [
                                  t("div", ke, "站点编号：" + m(s(d).site_id), 1)
                                ]),
                                _: 1
                              }),
                              o(u, null, {
                                default: n(() => [
                                  s(d).expire_time == 0 ? (p(), T("div", we, "到期时间：永久")) : (p(), T("div", Se, "到期时间：" + m(s(d).expire_time), 1))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: n(() => [
                          t("div", ye, [
                            t("span", be, m(s(d).site_name), 1),
                            t("span", {
                              class: j(["!text-[10px] text-[#f56c6c]", { "!text-[#67c23a]": s(d).status == 1, "!text-[#f56c6c]": s(d).status == 3 }])
                            }, m(s(d).status_name), 3)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    t("div", Ie, [
                      o(ie)
                    ]),
                    o(ce, { class: "px-[8px]" }),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: H
                    }, [
                      o(re, {
                        ref_key: "taskIndicatorRef",
                        ref: E
                      }, null, 512)
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: O
                    }, [
                      o(se, {
                        ref_key: "layoutSettingRef",
                        ref: W,
                        "show-tab": !0
                      }, null, 512)
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: P
                    }, [
                      o(ae, {
                        ref_key: "userInfoRef",
                        ref: F
                      }, null, 512)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          N(t("input", {
            type: "hidden",
            "onUpdate:modelValue": i[0] || (i[0] = (a) => y.value = a)
          }, null, 512), [
            [z, y.value]
          ]),
          N(t("input", {
            type: "hidden",
            "onUpdate:modelValue": i[1] || (i[1] = (a) => b.value = a)
          }, null, 512), [
            [z, b.value]
          ]),
          o(v, {
            modelValue: g.value,
            "onUpdate:modelValue": i[2] || (i[2] = (a) => g.value = a),
            title: s(V)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1,
            "append-to-body": !0
          }, {
            footer: n(() => [
              t("span", Ce, [
                o(x, { onClick: X }, {
                  default: n(() => [
                    B(m(s(V)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: n(() => [
              t("span", null, m(s(V)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const Qe = /* @__PURE__ */ me(Re, [["__scopeId", "data-v-c675aa43"]]);
export {
  Qe as default
};
