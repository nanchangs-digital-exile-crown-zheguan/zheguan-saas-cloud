import { defineComponent as he, ref as c, computed as V, onMounted as _e, watch as ve, resolveComponent as v, openBlock as x, createBlock as xe, normalizeClass as j, unref as l, withCtx as u, createElementVNode as s, createVNode as d, createElementBlock as y, toDisplayString as g, Fragment as q, renderList as ge, createCommentVNode as ye, withDirectives as G, vModelText as Q, createTextVNode as ke, pushScopeId as Se, popScopeId as we } from "vue";
import { _ as Ie } from "./icon-addon-90fccbab.js";
import be from "./index-bd0189c7.js";
import Me from "./index-9e6046fd.js";
import Ce from "./index-98e771e5.js";
import Re from "./user-info-529bc57a.js";
import Ae from "./index-a7e83895.js";
import { i6 as Ee, u as Le, hS as Te, hX as Ve, j as je, n as p, cC as Y, i4 as Ne, k as We, t as N, a as Ue } from "./core-shared-86a0da16.js";
import { useRoute as Fe, useRouter as Je } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "./site_empty-63fceac6.js";
import "./index-af0a6713.js";
const Z = (b) => (Se("data-v-e032f49f"), b = b(), we(), b), $e = { class: "flex items-center h-full px-[10px] w-full box-border" }, De = { class: "left-panel h-full flex items-center" }, Ke = { class: "flex items-center justify-center min-w-0 max-w-full" }, Be = {
  key: 0,
  class: "logo flex items-center shrink-0"
}, Oe = /* @__PURE__ */ Z(() => /* @__PURE__ */ s("div", { class: "flex justify-center items-center w-full h-[30px] rounded-[6px]" }, [
  /* @__PURE__ */ s("img", {
    class: "max-w-[30px]",
    src: Ie,
    alt: "",
    "object-fit": "contain"
  })
], -1)), ze = {
  key: 1,
  class: "logo flex items-center justify-center shrink-0"
}, He = /* @__PURE__ */ Z(() => /* @__PURE__ */ s("i", { class: "text-3xl iconfont iconyunkongjian" }, null, -1)), Pe = [
  He
], Xe = { class: "ml-[10px] text-[20px] text-[#333] min-w-0 using-hidden" }, qe = { class: "flex items-center gap-[8px] h-[var(--layout-header-height)] text-[var(--layout-header-text-color)]" }, Ge = ["onClick"], Qe = { class: "ml-auto right-panel h-full flex items-center justify-end" }, Ye = { class: "flex items-center flex-shrink-0 hidden-xs-only" }, Ze = { class: "mx-[8px] bg-[#f6f6f6] border-[1px] border-solid border-[#eee] rounded-[4px] px-[9px] py-[6px] flex items-center" }, et = { class: "mr-[6px] text-[12px] !text-[#333]" }, tt = { class: "text-[14px]" }, nt = {
  key: 0,
  class: "text-[14px]"
}, ot = {
  key: 1,
  class: "text-[14px]"
}, st = { class: "navbar-item flex items-center h-full cursor-pointer" }, at = { class: "dialog-footer" }, lt = /* @__PURE__ */ he({
  __name: "index",
  setup(b) {
    var O, z, H;
    const W = c(), U = c(), F = c(), ee = () => {
      var e;
      return (e = W.value) == null ? void 0 : e.open();
    }, te = () => {
      var e;
      return (e = U.value) == null ? void 0 : e.open();
    }, ne = () => {
      var e;
      return (e = F.value) == null ? void 0 : e.open();
    }, { toggle: rt } = Ee(), L = Le(), it = Te(), m = Fe(), J = Je(), { handleMenuJump: oe } = Ve(), se = c(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), S = je(), i = V(() => S.siteInfo), ae = S.addonIndexRoute, le = V(() => L.dark), re = c(!1), $ = S.routers, D = V(() => S.siteInfo.logo ? S.siteInfo.logo : L.website.logo), M = c(!1), C = c(""), R = c("");
    p.get("comparisonTokenStorage") && (C.value = p.get("comparisonTokenStorage")), p.get("comparisonSiteIdStorage") && (R.value = p.get("comparisonSiteIdStorage")), document.addEventListener("visibilitychange", (e) => {
      document.visibilityState === "visible" && (R.value != p.get("siteId") || C.value != p.get("token")) && (M.value = !0);
    });
    const ie = () => {
      M.value = !1, location.href = `${location.origin}/site/`;
    }, T = c([]), K = c([]);
    _e(() => {
      const e = de();
      T.value = ue(e), K.value = pe(e), p.set({ key: "specialMenuNames", data: T.value }), p.set({ key: "specialMenuNamesLevel1", data: K.value }), window.onresize = () => (() => {
        se.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      })();
    });
    const f = c([]), A = {};
    if ($.forEach((e) => {
      var t, n;
      e.original_name = e.name, e.meta.addon == "" ? e.meta.attr == "" && (e.children && e.children.length && (e.name = Y(e.children)), f.value.push(e)) : e.meta.addon != "" && ((t = i.value) == null ? void 0 : t.apps.length) <= 1 && ((n = i.value) == null ? void 0 : n.apps[0].key) == e.meta.addon && e.meta.show ? e.children ? (e.children.forEach((o) => {
        o.original_name = o.name, o.children && o.children.length && (o.name = Y(o.children));
      }), f.value.unshift(...e.children)) : f.value.unshift(e) : A[e.meta.addon] = e, f.value.sort((o, a) => o.meta.sort && a.meta.sort ? a.meta.sort - o.meta.sort : o.meta.sort ? -1 : a.meta.sort ? 1 : 0);
    }), ((O = i.value) == null ? void 0 : O.apps.length) > 1) {
      const e = [];
      (z = i.value) == null || z.apps.forEach((t) => {
        A[t.key] && (A[t.key].name = ae[t.key], e.push(A[t.key]));
      }), f.value.unshift(...e), f.value.sort((t, n) => t.meta.sort && n.meta.sort ? n.meta.sort - t.meta.sort : t.meta.sort ? -1 : n.meta.sort ? 1 : 0);
    }
    const k = c(((H = f.value[0]) == null ? void 0 : H.name) || "");
    ve(m, () => {
      var e, t;
      if (m.meta.attr != "")
        k.value = m.matched[1].name;
      else if (((e = i.value) == null ? void 0 : e.apps.length) > 1)
        k.value = m.matched[2].name;
      else {
        const n = m.matched[2];
        n.meta.addon == "" ? k.value = m.matched[2].name : n.meta.addon == ((t = i.value) == null ? void 0 : t.apps[0].key) ? k.value = m.matched[3].name : k.value = m.matched[2].name;
      }
    }, { immediate: !0 });
    const ce = (e) => {
      T.value.includes(e) || p.remove("activeAppKey");
      const n = f.value.find((o) => o.name === e);
      oe(e, n == null ? void 0 : n.meta) || J.push({ name: e });
    }, de = () => {
      const e = p.get("specialAppList");
      if (Array.isArray(e) && e.length) {
        const t = JSON.parse(JSON.stringify(e)), n = p.get("activeAppKey");
        t.forEach((a) => {
          a.children && Array.isArray(a.children) && ((h) => {
            h.forEach((_) => {
              _ && _.is_show !== void 0 && (_.is_show = _.menu_key === n ? 1 : 0);
            });
          })(a.children);
        });
        const o = t.filter((a) => a.children && a.children.length > 0);
        return Ne(o);
      }
      return [];
    }, ue = (e) => {
      const t = [], n = (o) => {
        o.forEach((a) => {
          a.name && t.push(a.name), a.children && Array.isArray(a.children) && n(a.children);
        });
      };
      return e.forEach((o) => {
        o.children && Array.isArray(o.children) && n(o.children);
      }), t;
    }, pe = (e) => {
      const t = [];
      return e.forEach((n) => {
        n.name && t.push(n.name);
      }), t;
    }, fe = (e) => {
      const t = [];
      let n = e == null ? void 0 : e.parent_route;
      for (; n; )
        n.short_title && t.unshift(n.short_title), n = n.parent_route;
      return t.join(" - ");
    }, B = (e, t = null) => {
      let n = [];
      return e.forEach((o) => {
        const { path: a, name: E, meta: h = {}, short_title: _, children: w } = o;
        if (h.type == 1 && h.show == 1) {
          const r = h.title || _ || "", I = fe(h), X = I ? `${I} - ${r}` : r, me = {
            path: a,
            name: E,
            title: r,
            parent_title: I,
            full_title: X
          };
          n.push(me);
        }
        w && w.length > 0 && (n = n.concat(B(w, o)));
      }), n;
    }, ct = B($), dt = c(""), ut = (e) => {
      e && (J.push({ name: e }), re.value = !1);
    };
    return (e, t) => {
      const n = v("el-image"), o = v("el-header"), a = v("el-dropdown-item"), E = v("el-dropdown-menu"), h = v("el-dropdown"), _ = v("el-button"), w = v("el-dialog"), P = v("el-container");
      return x(), xe(P, {
        class: j(["h-full bg-[var(--layout-header-bg)]", { "layout-header border-b border-color": !l(le) }])
      }, {
        default: u(() => [
          s("div", $e, [
            s("div", De, [
              d(o, { class: "logo-wrap flex items-center justify-center w-[190px]" }, {
                default: u(() => [
                  s("div", Ke, [
                    l(L).menuIsCollapse ? (x(), y("div", ze, Pe)) : (x(), y("div", Be, [
                      d(n, {
                        style: { width: "30px", height: "30px" },
                        class: "rounded-[6px]",
                        src: l(We)(l(D) ? l(D) : ""),
                        fit: "contain"
                      }, {
                        error: u(() => [
                          Oe
                        ]),
                        _: 1
                      }, 8, ["src"])
                    ])),
                    s("div", Xe, g(l(i).site_name), 1)
                  ])
                ]),
                _: 1
              })
            ]),
            s("div", qe, [
              (x(!0), y(q, null, ge(f.value, (r, I) => (x(), y(q, { key: I }, [
                r.meta.show ? (x(), y("div", {
                  key: 0,
                  class: "flex items-center cursor-pointer",
                  onClick: (X) => ce(r.name)
                }, [
                  s("span", {
                    class: j(["px-[14px] truncate text-[14px] text-[#333] h-[60px] leading-[60px] rounded-[4px] hover:text-primary", { "!text-primary font-bold oneMenu": k.value === r.original_name }])
                  }, g(r.meta.short_title || r.meta.title), 3)
                ], 8, Ge)) : ye("", !0)
              ], 64))), 128))
            ]),
            s("div", Qe, [
              s("div", Ye, [
                d(h, {
                  trigger: "hover",
                  "hide-on-click": !1,
                  "popper-class": "site-info-wrap",
                  class: "mr-[8px]"
                }, {
                  dropdown: u(() => [
                    d(E, null, {
                      default: u(() => [
                        d(a, null, {
                          default: u(() => [
                            s("div", tt, "站点编号：" + g(l(i).site_id), 1)
                          ]),
                          _: 1
                        }),
                        d(a, null, {
                          default: u(() => [
                            l(i).expire_time == 0 ? (x(), y("div", nt, "到期时间：永久")) : (x(), y("div", ot, "到期时间：" + g(l(i).expire_time), 1))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: u(() => [
                    s("div", Ze, [
                      s("span", et, g(l(i).site_name), 1),
                      s("span", {
                        class: j(["!text-[10px] text-[#f56c6c]", { "!text-[#67c23a]": l(i).status == 1, "!text-[#f56c6c]": l(i).status == 3 }])
                      }, g(l(i).status_name), 3)
                    ])
                  ]),
                  _: 1
                })
              ]),
              s("div", st, [
                d(Me)
              ]),
              d(Ae, { class: "navbar-item text-[#333]" }),
              s("div", {
                class: "navbar-item flex items-center h-full cursor-pointer",
                onClick: ee
              }, [
                d(Ce, {
                  ref_key: "taskIndicatorRef",
                  ref: W
                }, null, 512)
              ]),
              s("div", {
                class: "navbar-item flex items-center h-full cursor-pointer",
                onClick: te
              }, [
                d(be, {
                  ref_key: "layoutSettingRef",
                  ref: U,
                  "icon-color": "#333"
                }, null, 512)
              ]),
              s("div", {
                class: "navbar-item flex items-center h-full cursor-pointer",
                onClick: ne
              }, [
                d(Re, {
                  ref_key: "userInfoRef",
                  ref: F
                }, null, 512)
              ])
            ])
          ]),
          G(s("input", {
            type: "hidden",
            "onUpdate:modelValue": t[0] || (t[0] = (r) => C.value = r)
          }, null, 512), [
            [Q, C.value]
          ]),
          G(s("input", {
            type: "hidden",
            "onUpdate:modelValue": t[1] || (t[1] = (r) => R.value = r)
          }, null, 512), [
            [Q, R.value]
          ]),
          d(w, {
            modelValue: M.value,
            "onUpdate:modelValue": t[2] || (t[2] = (r) => M.value = r),
            title: l(N)("layout.detectionLoginTip"),
            width: "30%",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "show-close": !1,
            "append-to-body": !0
          }, {
            footer: u(() => [
              s("span", at, [
                d(_, { onClick: ie }, {
                  default: u(() => [
                    ke(g(l(N)("layout.detectionLoginOperation")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: u(() => [
              s("span", null, g(l(N)("layout.detectionLoginContent")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const Rt = /* @__PURE__ */ Ue(lt, [["__scopeId", "data-v-e032f49f"]]);
export {
  Rt as default
};
