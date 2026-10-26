import { defineComponent as ie, ref as _, computed as $, onMounted as re, resolveComponent as r, openBlock as c, createBlock as w, normalizeClass as H, unref as i, withCtx as l, createVNode as s, createElementVNode as t, createElementBlock as L, Fragment as O, renderList as P, createTextVNode as F, toDisplayString as d, withDirectives as q, vModelText as G, pushScopeId as ae, popScopeId as ce } from "vue";
import de from "./layout-setting-7a7e275e.js";
import ue from "./user-info-fd03651f.js";
import pe from "./index-a7e83895.js";
import { i6 as me, u as _e, hS as fe, j as he, n as f, t as E, a as xe } from "./core-shared-86a0da16.js";
import { useRoute as ve, useRouter as ge } from "vue-router";
import "./member_head-81b0c11e.js";
import "@element-plus/icons-vue";
import "./index-af0a6713.js";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const be = (y) => (ae("data-v-190dd765"), y = y(), ce(), y), we = { class: "left-panel h-full flex items-center" }, ye = { class: "flex items-center h-full pl-[10px]" }, Se = { class: "right-panel h-full flex items-center justify-end" }, ke = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Ce = { class: "mx-[8px] bg-[#f6f6f6] border-[1px] border-solid border-[#eee] rounded-[4px] px-[9px] py-[6px] flex items-center" }, Ie = { class: "mr-[6px] text-[12px] !text-[#333]" }, Ve = { class: "text-[14px]" }, Re = {
  key: 0,
  class: "text-[14px]"
}, Te = {
  key: 1,
  class: "text-[14px]"
}, Le = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Ee = /* @__PURE__ */ be(() => /* @__PURE__ */ t("i", { class: "iconfont icona-sousuoV6xx-36 cursor-pointer px-[8px] !text-[14px]" }, null, -1)), We = { class: "flex items-center" }, Ue = { class: "navbar-item flex items-center h-full cursor-pointer" }, $e = { class: "navbar-item flex items-center h-full cursor-pointer" }, Fe = { class: "dialog-footer" }, Me = /* @__PURE__ */ ie({
  __name: "index",
  setup(y) {
    const { toggle: De } = me(), h = _e(), M = fe(), J = ve(), K = ge(), D = _(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), j = he(), u = $(() => j.siteInfo), Q = $(() => h.dark), S = _(!1), X = j.routers, Y = (o) => {
      let n = [], a = o == null ? void 0 : o.parent_route;
      for (; a; )
        a.short_title && n.unshift(a.short_title), a = a.parent_route;
      return n.join(" - ");
    }, B = (o, n = null, a = 1) => {
      let m = [];
      return o.forEach((V) => {
        const { path: R, name: T, meta: p = {}, short_title: W, children: x } = V, v = (p.show === void 0 ? 1 : p.show) && a;
        if (p.type === 1 && v === 1) {
          const g = p.title || W || "", b = Y(p), U = b ? `${b} - ${g}` : g, e = {
            path: R,
            name: T,
            title: g,
            parent_title: b,
            full_title: U
          };
          m.push(e);
        }
        x && x.length > 0 && (m = m.concat(B(x, V, v)));
      }), m;
    }, Z = B(X), N = _(""), ee = (o) => {
      o && (K.push({ name: o }), S.value = !1);
    }, k = _(!1), C = _(""), I = _("");
    f.get("comparisonTokenStorage") && (C.value = f.get("comparisonTokenStorage")), f.get("comparisonSiteIdStorage") && (I.value = f.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (o) => {
      document.visibilityState === "visible" && (I.value != f.get("siteId") || C.value != f.get("token")) && (k.value = !0);
    });
    const te = () => {
      k.value = !1, location.href = `${location.origin}/site/`;
    };
    re(() => {
      window.onresize = () => (() => {
        D.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      })();
    });
    const oe = () => {
      h.$patch((o) => {
        D.value < 768 ? (o.menuDrawer = !0, o.menuIsCollapse = !1) : h.toggleMenuCollapse(!h.menuIsCollapse);
      });
    }, ne = () => {
      M.routeRefreshTag && M.refreshRouterView();
    }, le = $(() => {
      const o = J.matched.filter((n) => n.meta.title);
      return o[0] && o[0].path == "/" && o.splice(0, 1), o;
    });
    return (o, n) => {
      const a = r("icon"), m = r("el-breadcrumb-item"), V = r("el-breadcrumb"), R = r("el-col"), T = r("el-dropdown-item"), p = r("el-dropdown-menu"), W = r("el-dropdown"), x = r("el-option"), z = r("el-select"), v = r("el-button"), A = r("el-popover"), g = r("el-row"), b = r("el-dialog"), U = r("el-container");
      return c(), w(U, {
        class: H(["h-full px-[10px]", { "layout-header border-b border-color": !i(Q) }])
      }, {
        default: l(() => [
          s(g, { class: "w-100 h-full w-full" }, {
            default: l(() => [
              s(R, { span: 10 }, {
                default: l(() => [
                  t("div", we, [
                    t("div", {
                      class: "hidden-sm-and-up navbar-item flex items-center h-full cursor-pointer",
                      onClick: oe
                    }, [
                      i(h).menuIsCollapse ? (c(), w(a, {
                        key: 0,
                        name: "element Expand"
                      })) : (c(), w(a, {
                        key: 1,
                        name: "element Fold"
                      }))
                    ]),
                    t("div", {
                      class: "navbar-item flex items-center h-full cursor-pointer",
                      onClick: ne
                    }, [
                      s(a, { name: "element Refresh" })
                    ]),
                    t("div", ye, [
                      s(V, { separator: "/" }, {
                        default: l(() => [
                          (c(!0), L(O, null, P(i(le), (e, se) => (c(), w(m, {
                            to: e.path,
                            class: "inter",
                            key: se
                          }, {
                            default: l(() => [
                              F(d(e.meta.title), 1)
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
              s(R, { span: 14 }, {
                default: l(() => [
                  t("div", Se, [
                    t("div", ke, [
                      s(W, {
                        trigger: "hover",
                        "hide-on-click": !1,
                        "popper-class": "site-info-wrap",
                        class: "mr-[8px]"
                      }, {
                        dropdown: l(() => [
                          s(p, null, {
                            default: l(() => [
                              s(T, null, {
                                default: l(() => [
                                  t("div", Ve, "站点编号：" + d(i(u).site_id), 1)
                                ]),
                                _: 1
                              }),
                              s(T, null, {
                                default: l(() => [
                                  i(u).expire_time == 0 ? (c(), L("div", Re, "到期时间：永久")) : (c(), L("div", Te, "到期时间：" + d(i(u).expire_time), 1))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: l(() => [
                          t("div", Ce, [
                            t("span", Ie, d(i(u).site_name), 1),
                            t("span", {
                              class: H(["!text-[10px] text-[#f56c6c]", { "!text-[#67c23a]": i(u).status == 1, "!text-[#f56c6c]": i(u).status == 3 }])
                            }, d(i(u).status_name), 3)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    t("div", Le, [
                      s(A, {
                        placement: "bottom",
                        width: 330,
                        trigger: "click",
                        visible: S.value,
                        "onUpdate:visible": n[2] || (n[2] = (e) => S.value = e)
                      }, {
                        reference: l(() => [
                          Ee
                        ]),
                        default: l(() => [
                          t("div", We, [
                            s(z, {
                              modelValue: N.value,
                              "onUpdate:modelValue": n[0] || (n[0] = (e) => N.value = e),
                              filterable: "",
                              class: "!w-[250px] mr-[20px] menu-select",
                              teleported: !1,
                              clearable: "",
                              onChange: ee
                            }, {
                              default: l(() => [
                                (c(!0), L(O, null, P(i(Z), (e) => (c(), w(x, {
                                  key: e.name,
                                  label: e.full_title,
                                  value: e.name
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"]),
                            s(v, {
                              type: "primary",
                              link: "",
                              onClick: n[1] || (n[1] = (e) => S.value = !1)
                            }, {
                              default: l(() => [
                                F(d(i(E)("取消")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["visible"])
                    ]),
                    s(pe, { class: "px-[8px]" }),
                    t("div", Ue, [
                      s(de)
                    ]),
                    t("div", $e, [
                      s(ue)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          q(t("input", {
            type: "hidden",
            "onUpdate:modelValue": n[3] || (n[3] = (e) => C.value = e)
          }, null, 512), [
            [G, C.value]
          ]),
          q(t("input", {
            type: "hidden",
            "onUpdate:modelValue": n[4] || (n[4] = (e) => I.value = e)
          }, null, 512), [
            [G, I.value]
          ]),
          s(b, {
            modelValue: k.value,
            "onUpdate:modelValue": n[5] || (n[5] = (e) => k.value = e),
            title: i(E)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1,
            "append-to-body": !0
          }, {
            footer: l(() => [
              t("span", Fe, [
                s(v, { onClick: te }, {
                  default: l(() => [
                    F(d(i(E)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: l(() => [
              t("span", null, d(i(E)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const Xe = /* @__PURE__ */ xe(Me, [["__scopeId", "data-v-190dd765"]]);
export {
  Xe as default
};
