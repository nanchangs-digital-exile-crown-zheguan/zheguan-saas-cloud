import { defineComponent as Z, ref as c, computed as R, onMounted as ee, resolveComponent as a, openBlock as x, createBlock as $, normalizeClass as j, unref as i, withCtx as n, createVNode as o, createElementVNode as t, createElementBlock as C, Fragment as te, renderList as oe, createTextVNode as B, toDisplayString as u, withDirectives as D, vModelText as M, pushScopeId as Ee, popScopeId as Ue } from "vue";
import ne from "./index-bd0189c7.js";
import se from "./index-9e6046fd.js";
import le from "./index-98e771e5.js";
import ie from "./user-info-ee129a4c.js";
import re from "./index-a7e83895.js";
import { i6 as ae, u as ce, j as de, n as f, t as L, a as ue } from "./core-shared-86a0da16.js";
import { useRoute as pe, useRouter as fe } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./member_head-81b0c11e.js";
import "./index-af0a6713.js";
const me = { class: "left-panel h-full flex items-center" }, _e = { class: "flex items-center h-full pl-[10px] hidden-xs-only" }, he = { class: "right-panel h-full flex items-center justify-end" }, xe = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, ve = { class: "mx-[8px] bg-[#f6f6f6] border-[1px] border-solid border-[#eee] rounded-[4px] px-[9px] py-[6px] flex items-center" }, ge = { class: "mr-[6px] text-[12px] !text-[#333]" }, be = { class: "text-[14px]" }, ye = {
  key: 0,
  class: "text-[14px]"
}, ke = {
  key: 1,
  class: "text-[14px]"
}, we = { class: "navbar-item flex items-center h-full cursor-pointer" }, Se = { class: "dialog-footer" }, Ie = /* @__PURE__ */ Z({
  __name: "index",
  setup(Re) {
    const T = c(), V = c(), W = c(), N = () => {
      var e;
      return (e = T.value) == null ? void 0 : e.open();
    }, z = () => {
      var e;
      return (e = V.value) == null ? void 0 : e.open();
    }, H = () => {
      var e;
      return (e = W.value) == null ? void 0 : e.open();
    }, { toggle: Ce } = ae(), O = ce(), P = pe(), q = fe(), A = c(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), E = de(), d = R(() => E.siteInfo), G = R(() => O.dark), J = c(!1), K = E.routers, Q = (e) => {
      let s = [], l = e == null ? void 0 : e.parent_route;
      for (; l; )
        l.short_title && s.unshift(l.short_title), l = l.parent_route;
      return s.join(" - ");
    }, U = (e, s = null) => {
      let l = [];
      return e.forEach((y) => {
        const { path: k, name: w, meta: p = {}, short_title: S, children: m } = y;
        if (p.type == 1 && p.show == 1) {
          const _ = p.title || S || "", h = Q(p), r = h ? `${h} - ${_}` : _, I = {
            path: k,
            name: w,
            title: _,
            parent_title: h,
            full_title: r
          };
          l.push(I);
        }
        m && m.length > 0 && (l = l.concat(U(m, y)));
      }), l;
    }, Le = U(K), Te = c(""), Ve = (e) => {
      e && (q.push({ name: e }), J.value = !1);
    }, v = c(!1), g = c(""), b = c("");
    f.get("comparisonTokenStorage") && (g.value = f.get("comparisonTokenStorage")), f.get("comparisonSiteIdStorage") && (b.value = f.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (e) => {
      document.visibilityState === "visible" && (b.value != f.get("siteId") || g.value != f.get("token")) && (v.value = !0);
    });
    const X = () => {
      v.value = !1, location.href = `${location.origin}/site/`;
    };
    ee(() => {
      window.onresize = () => (() => {
        A.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      })();
    });
    const Y = R(() => {
      const e = P.matched.filter((s) => s.meta.title);
      return e[0] && e[0].path == "/" && e.splice(0, 1), e;
    });
    return (e, s) => {
      const l = a("el-breadcrumb-item"), y = a("el-breadcrumb"), k = a("el-col"), w = a("el-dropdown-item"), p = a("el-dropdown-menu"), S = a("el-dropdown"), m = a("el-row"), F = a("el-button"), _ = a("el-dialog"), h = a("el-container");
      return x(), $(h, {
        class: j(["h-full px-[10px]", { "layout-header border-b border-color": !i(G) }])
      }, {
        default: n(() => [
          o(m, { class: "w-100 h-full w-full" }, {
            default: n(() => [
              o(k, { span: 10 }, {
                default: n(() => [
                  t("div", me, [
                    t("div", _e, [
                      o(y, { separator: "/" }, {
                        default: n(() => [
                          (x(!0), C(te, null, oe(i(Y), (r, I) => (x(), $(l, {
                            key: I,
                            to: r.path,
                            class: "inter"
                          }, {
                            default: n(() => [
                              B(u(r.meta.title), 1)
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
              o(k, { span: 14 }, {
                default: n(() => [
                  t("div", he, [
                    t("div", xe, [
                      o(S, {
                        trigger: "hover",
                        "hide-on-click": !1,
                        "popper-class": "site-info-wrap",
                        class: "mr-[8px]"
                      }, {
                        dropdown: n(() => [
                          o(p, null, {
                            default: n(() => [
                              o(w, null, {
                                default: n(() => [
                                  t("div", be, "站点编号：" + u(i(d).site_id), 1)
                                ]),
                                _: 1
                              }),
                              o(w, null, {
                                default: n(() => [
                                  i(d).expire_time == 0 ? (x(), C("div", ye, "到期时间：永久")) : (x(), C("div", ke, "到期时间：" + u(i(d).expire_time), 1))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: n(() => [
                          t("div", ve, [
                            t("span", ge, u(i(d).site_name), 1),
                            t("span", {
                              class: j(["!text-[10px] text-[#f56c6c]", { "!text-[#67c23a]": i(d).status == 1, "!text-[#f56c6c]": i(d).status == 3 }])
                            }, u(i(d).status_name), 3)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    t("div", we, [
                      o(se)
                    ]),
                    o(re, { class: "px-[8px]" }),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: N
                    }, [
                      o(le, {
                        ref_key: "taskIndicatorRef",
                        ref: T
                      }, null, 512)
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: z
                    }, [
                      o(ne, {
                        ref_key: "layoutSettingRef",
                        ref: V,
                        "show-tab": !0
                      }, null, 512)
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: H
                    }, [
                      o(ie, {
                        ref_key: "userInfoRef",
                        ref: W
                      }, null, 512)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          D(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[0] || (s[0] = (r) => g.value = r)
          }, null, 512), [
            [M, g.value]
          ]),
          D(t("input", {
            type: "hidden",
            "onUpdate:modelValue": s[1] || (s[1] = (r) => b.value = r)
          }, null, 512), [
            [M, b.value]
          ]),
          o(_, {
            modelValue: v.value,
            "onUpdate:modelValue": s[2] || (s[2] = (r) => v.value = r),
            title: i(L)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1,
            "append-to-body": !0
          }, {
            footer: n(() => [
              t("span", Se, [
                o(F, { onClick: X }, {
                  default: n(() => [
                    B(u(i(L)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: n(() => [
              t("span", null, u(i(L)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const Je = /* @__PURE__ */ ue(Ie, [["__scopeId", "data-v-e49bb78f"]]);
export {
  Je as default
};
