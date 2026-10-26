import { defineComponent as ue, ref as oe, computed as p, resolveComponent as T, resolveDirective as fe, withDirectives as me, openBlock as u, createElementBlock as m, createElementVNode as e, toDisplayString as t, unref as s, createVNode as k, withCtx as C, createTextVNode as V, normalizeClass as D, Fragment as y, renderList as z, createBlock as pe, resolveDynamicComponent as he, createCommentVNode as ae, pushScopeId as xe, popScopeId as be } from "vue";
import { t as o, hk as ge, hl as ke, a as ye } from "./core-shared-86a0da16.js";
import { DataLine as ze, Coin as le, Cpu as we, Refresh as Me } from "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const P = ($) => (xe("data-v-9a8aa235"), $ = $(), be(), $), Be = { class: "main-container page-sections min-h-[70vh]" }, Se = { class: "flex justify-between items-start flex-wrap" }, Ce = { class: "flex items-center flex-wrap" }, $e = { class: "text-[20px] font-bold mr-2" }, qe = { class: "text-[14px] text-[#909399] mt-1" }, Te = { class: "flex flex-wrap grid-cols-4 gap-[16px] mt-4" }, De = { class: "form-section !border-[var(--sys-color-border-default)] flex-1" }, Pe = { class: "text-[13px] text-[#909399] mb-2" }, je = { class: "form-section !border-[var(--sys-color-border-default)] flex-1 box-border" }, Ne = { class: "text-[13px] text-[#909399] mb-2" }, Ue = { class: "text-[22px] font-bold" }, Ve = { class: "form-section !border-[var(--sys-color-border-default)] flex-1 box-border" }, Ee = { class: "text-[13px] text-[#909399] mb-2" }, Ie = { class: "form-section !border-[var(--sys-color-border-default)] flex-1 box-border" }, He = { class: "text-[13px] text-[#909399] mb-2" }, Le = { class: "mb-4" }, Qe = { class: "text-[16px] font-bold mr-2" }, Ae = { class: "text-[13px] text-[#909399]" }, Fe = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]" }, Je = { class: "flex items-center justify-center w-[34px] h-[34px] rounded-md bg-[#f2f3f5] shrink-0" }, Oe = { class: "min-w-0" }, Re = { class: "text-[13px] text-[#909399]" }, Ge = { class: "text-[17px] font-bold my-1 break-all" }, Ke = { class: "text-[12px] text-[#909399] break-all" }, We = { class: "mb-4" }, Xe = { class: "text-[16px] font-bold mr-2" }, Ye = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, Ze = { class: "form-section !border-[var(--sys-color-border-default)]" }, es = { class: "flex items-center justify-between min-h-[130px]" }, ss = { class: "flex flex-col gap-2 text-right" }, ts = { class: "text-[20px] font-bold" }, os = { class: "text-[13px] text-[#909399]" }, as = { class: "text-[13px] text-[#909399]" }, ls = { class: "text-[13px] text-[#909399] mt-2" }, ns = { class: "form-section !border-[var(--sys-color-border-default)]" }, is = { class: "flex items-center justify-between min-h-[130px]" }, cs = { class: "flex flex-col gap-2 text-right" }, ds = { class: "text-[20px] font-bold" }, rs = { class: "text-[13px] text-[#909399]" }, _s = { class: "text-[13px] text-[#909399]" }, vs = { class: "text-[13px] text-[#909399] mt-2" }, us = { class: "form-section !border-[var(--sys-color-border-default)]" }, fs = { class: "flex flex-col justify-center gap-3 min-h-[130px]" }, ms = { class: "rounded-md px-4" }, ps = { class: "text-[13px] text-[#909399]" }, hs = { class: "text-[20px] font-bold mt-1" }, xs = { class: "rounded-md px-4" }, bs = { class: "text-[13px] text-[#909399]" }, gs = { class: "text-[20px] font-bold mt-1" }, ks = { class: "text-[13px] text-[#909399] mt-2" }, ys = { class: "mb-4" }, zs = { class: "text-[16px] font-bold mr-2" }, ws = { class: "grid grid-cols-1 lg:grid-cols-3 gap-4" }, Ms = { class: "form-section !border-[var(--sys-color-border-default)]" }, Bs = { class: "text-[14px] font-bold mb-3" }, Ss = { class: "grid grid-cols-2 gap-3" }, Cs = { class: "text-[13px] text-[#909399]" }, $s = { class: "text-[19px] font-bold mt-1 break-all" }, qs = { class: "form-section !border-[var(--sys-color-border-default)]" }, Ts = { class: "text-[14px] font-bold mb-3" }, Ds = { class: "grid grid-cols-2 gap-3" }, Ps = { class: "text-[13px] text-[#909399]" }, js = { class: "text-[19px] font-bold mt-1 break-all" }, Ns = {
  key: 0,
  class: "text-[12px] text-[#f56c6c] mt-2"
}, Us = { class: "form-section !border-[var(--sys-color-border-default)]" }, Vs = { class: "text-[14px] font-bold mb-3" }, Es = { class: "grid grid-cols-2 gap-3" }, Is = { class: "text-[13px] text-[#909399]" }, Hs = { class: "text-[19px] font-bold mt-1 break-all" }, Ls = { key: 0 }, Qs = { class: "mb-4" }, As = { class: "text-[16px] font-bold mr-2" }, Fs = { class: "form-section !border-[var(--sys-color-border-default)] flex flex-col gap-2" }, Js = { class: "min-w-0" }, Os = { class: "text-[14px] font-bold truncate" }, Rs = { class: "text-[12px] text-[#909399] truncate" }, Gs = { class: "text-[14px] font-bold shrink-0 ml-3" }, Ks = { class: "mb-4" }, Ws = { class: "text-[16px] font-bold" }, Xs = { class: "grid grid-cols-1 lg:grid-cols-2 gap-4" }, Ys = { class: "form-section !border-[var(--sys-color-border-default)]" }, Zs = { class: "text-[14px] font-bold mb-3" }, et = { class: "info-kv-list" }, st = { class: "info-kv-item" }, tt = { class: "info-kv-label" }, ot = { class: "info-kv-value" }, at = { class: "info-kv-item" }, lt = { class: "info-kv-label" }, nt = { class: "info-kv-value" }, it = { class: "info-kv-item" }, ct = { class: "info-kv-label" }, dt = { class: "info-kv-value" }, rt = { class: "info-kv-item" }, _t = { class: "info-kv-label" }, vt = { class: "info-kv-value" }, ut = { class: "info-kv-item" }, ft = { class: "info-kv-label" }, mt = { class: "info-kv-value" }, pt = { class: "form-section !border-[var(--sys-color-border-default)]" }, ht = { class: "text-[14px] font-bold mb-3" }, xt = { class: "info-kv-list" }, bt = { class: "info-kv-item" }, gt = { class: "info-kv-label" }, kt = { class: "info-kv-value" }, yt = { class: "info-kv-item" }, zt = { class: "info-kv-label" }, wt = { class: "info-kv-value" }, Mt = { class: "info-kv-item" }, Bt = { class: "info-kv-label" }, St = { class: "info-kv-value" }, Ct = { class: "info-kv-item" }, $t = { class: "info-kv-label" }, qt = { class: "info-kv-value" }, Tt = { class: "info-kv-item" }, Dt = { class: "info-kv-label" }, Pt = { class: "info-kv-value" }, jt = { class: "mb-4" }, Nt = { class: "text-[16px] font-bold" }, Ut = { class: "form-section !border-[var(--sys-color-border-default)]" }, Vt = { class: "grid grid-cols-1 md:grid-cols-2 gap-x-10" }, Et = { class: "info-kv-item" }, It = /* @__PURE__ */ P(() => /* @__PURE__ */ e("span", { class: "info-kv-label" }, "memory_limit", -1)), Ht = { class: "info-kv-value" }, Lt = { class: "info-kv-item" }, Qt = /* @__PURE__ */ P(() => /* @__PURE__ */ e("span", { class: "info-kv-label" }, "upload_max_filesize", -1)), At = { class: "info-kv-value" }, Ft = { class: "info-kv-item" }, Jt = /* @__PURE__ */ P(() => /* @__PURE__ */ e("span", { class: "info-kv-label" }, "post_max_size", -1)), Ot = { class: "info-kv-value" }, Rt = { class: "info-kv-item" }, Gt = /* @__PURE__ */ P(() => /* @__PURE__ */ e("span", { class: "info-kv-label" }, "max_execution_time", -1)), Kt = { class: "info-kv-value" }, Wt = { class: "info-kv-label" }, Xt = /* @__PURE__ */ ue({
  __name: "detection",
  setup($) {
    const w = oe(!0), q = oe({}), i = p(() => q.value.environment || {}), j = p(() => i.value.performance || {}), x = p(() => j.value.memory || {}), b = p(() => j.value.disk || {}), c = p(() => i.value.database || {}), v = p(() => i.value.redis || {}), ne = p(() => {
      const a = j.value.load_average || [];
      return a.length > 0 ? a.map((n) => Number(n).toFixed(2)).join(" / ") : "-";
    }), N = p(() => {
      var n;
      const a = ((n = c.value.storage) == null ? void 0 : n.large_tables) || [];
      return a.length ? a : [
        { table_name: "ns_sys_user_log", rows: 1e4, data_size_formatted: "37.2 MB", index_size_formatted: "7240.1 B", total_size_formatted: "37.2 MB" },
        { table_name: "ns_sys_schedule_log", rows: 1e4, data_size_formatted: "27.54 MB", index_size_formatted: "7244.5 B", total_size_formatted: "27.54 MB" },
        { table_name: "ns_div_page", rows: 941, data_size_formatted: "14.62 MB", index_size_formatted: "1.0 B", total_size_formatted: "14.62 MB" },
        { table_name: "ns_dy_form_records", rows: 5e3, data_size_formatted: "5.82 MB", index_size_formatted: "351.0 B", total_size_formatted: "5.82 MB" },
        { table_name: "ns_sys_attachment", rows: 5099, data_size_formatted: "4.12 MB", index_size_formatted: "624.4 B", total_size_formatted: "4.12 MB" },
        { table_name: "ns_shop_coupon_member", rows: 20768, data_size_formatted: "3.69 MB", index_size_formatted: "1.17 MB", total_size_formatted: "3.69 MB" },
        { table_name: "ns_sys_poster", rows: 5407, data_size_formatted: "2.52 MB", index_size_formatted: "0.0 B", total_size_formatted: "2.52 MB" },
        { table_name: "ns_pintuan_order", rows: 500, data_size_formatted: "2.52 MB", index_size_formatted: "0.0 B", total_size_formatted: "2.52 MB" }
      ];
    }), M = p(() => {
      var g;
      const a = x.value.usage_percent || 0, n = b.value.usage_percent || 0, d = ((g = c.value.connections) == null ? void 0 : g.usage_percent) || 0, r = v.value.connected ? 0 : 25, f = Math.max(0, Math.min(
        100,
        100 - Math.max(0, a - 60) * 0.7 - Math.max(0, n - 70) * 0.6 - Math.max(0, d - 60) * 0.5 - r
      )), _ = Math.round(f), h = _ >= 75 ? "success" : _ >= 60 ? "warning" : "exception";
      return {
        label: _ >= 90 ? o("excellent") : _ >= 75 ? o("stable") : _ >= 60 ? o("attention") : o("alarm"),
        score: _,
        status: h
      };
    }), ie = p(() => {
      var d, r, f, _, h, g, B, S;
      const a = (q.value.process || [])[0] || {}, n = N.value[0];
      return [
        {
          icon: ze,
          label: o("mySql"),
          value: `${((d = c.value.queries) == null ? void 0 : d.qps) || 0} QPS`,
          meta: `${o("connectCount")} ${((r = c.value.connections) == null ? void 0 : r.current) || 0}/${((f = c.value.connections) == null ? void 0 : f.max) || 0}`,
          borderClass: U(((_ = c.value.connections) == null ? void 0 : _.usage_percent) || 0) == "success" ? "border-[#f0f0f0]" : "border-[#fde2e2]"
        },
        {
          icon: le,
          label: o("redis"),
          value: v.value.connected ? `${((h = v.value.stats) == null ? void 0 : h.ops_per_sec) || 0} OPS` : o("abnormal"),
          meta: v.value.connected ? `${o("clients")} ${((g = v.value.clients) == null ? void 0 : g.connected) || 0}/${((B = v.value.clients) == null ? void 0 : B.max) || 0}` : v.value.error || o("connectError"),
          borderClass: v.value.connected ? "border-[#f0f0f0]" : "border-[#fde2e2]"
        },
        {
          icon: we,
          label: o("queueProcess"),
          value: a.checked === !1 ? o("checking") : a.status ? o("normal") : o("abnormal"),
          meta: a.name || "php think workerman",
          borderClass: a.status ? "border-[#f0f0f0]" : "border-[#fde2e2]"
        },
        {
          icon: le,
          label: o("dbCapacity"),
          value: ((S = c.value.storage) == null ? void 0 : S.total_size_formatted) || "-",
          meta: n ? `${o("maxTable")} ${n.table_name}` : o("noTableData"),
          borderClass: "border-[#f0f0f0]"
        }
      ];
    }), ce = p(() => {
      var a, n, d, r, f, _, h;
      return [
        { label: o("connectUsage"), value: `${((a = c.value.connections) == null ? void 0 : a.usage_percent) || 0}%` },
        { label: o("connectCount"), value: `${((n = c.value.connections) == null ? void 0 : n.current) || 0} / ${((d = c.value.connections) == null ? void 0 : d.max) || 0}` },
        { label: "QPS", value: ((r = c.value.queries) == null ? void 0 : r.qps) || 0 },
        { label: o("slowQuery"), value: ((f = c.value.queries) == null ? void 0 : f.slow) || 0 },
        { label: o("bufferHit"), value: `${((_ = c.value.innodb) == null ? void 0 : _.buffer_hit_rate) || 0}%` },
        { label: o("runTime"), value: _e(((h = c.value.queries) == null ? void 0 : h.uptime_seconds) || 0) }
      ];
    }), de = p(() => {
      var a, n, d, r, f, _;
      return [
        { label: o("connectStatus"), value: v.value.connected ? o("normal") : o("abnormal") },
        { label: o("clients"), value: `${((a = v.value.clients) == null ? void 0 : a.connected) || 0} / ${((n = v.value.clients) == null ? void 0 : n.max) || 0}` },
        { label: "OPS", value: ((d = v.value.stats) == null ? void 0 : d.ops_per_sec) || 0 },
        { label: o("keys"), value: ((f = (r = v.value.keyspace) == null ? void 0 : r.selected_stats) == null ? void 0 : f.keys) || 0 },
        { label: o("usedMemory"), value: ((_ = v.value.memory) == null ? void 0 : _.used_formatted) || "-" }
      ];
    }), re = p(() => {
      var a, n, d, r, f;
      return [
        { label: o("tableCount"), value: ((a = c.value.storage) == null ? void 0 : a.tables) || 0 },
        { label: o("totalUsed"), value: ((n = c.value.storage) == null ? void 0 : n.total_size_formatted) || "-" },
        { label: o("dataSize"), value: ((d = c.value.storage) == null ? void 0 : d.data_size_formatted) || "-" },
        { label: o("indexSize"), value: ((r = c.value.storage) == null ? void 0 : r.index_size_formatted) || "-" },
        { label: o("avgTableSize"), value: ((f = c.value.storage) == null ? void 0 : f.avg_table_size_formatted) || "-" }
      ];
    }), U = (a) => a >= 85 ? "exception" : a >= 65 ? "warning" : "success", _e = (a = 0) => {
      if (!a)
        return "-";
      const n = Math.floor(a / 86400), d = Math.floor(a % 86400 / 3600), r = Math.floor(a % 3600 / 60);
      return `${n}${o("day")} ${d}${o("hour")} ${r}${o("minute")}`;
    }, ve = () => {
      const a = q.value.process || [];
      !a.length || a[0].checked === !0 || ge().then((n) => {
        a[0].status = !!n.data, a[0].checked = !0;
      }).catch(() => {
      });
    }, E = () => {
      w.value = !0, ke().then((a) => {
        q.value = a.data, w.value = !1, ve();
      }).catch(() => {
        w.value = !1;
      });
    };
    return E(), (a, n) => {
      var g, B, S, I, H, L, Q, A, F, J, O, R, G, K, W, X, Y, Z, ee, se, te;
      const d = T("el-tag"), r = T("el-icon"), f = T("el-button"), _ = T("el-progress"), h = fe("loading");
      return me((u(), m("div", Be, [
        e("div", null, [
          e("div", Se, [
            e("div", null, [
              e("div", Ce, [
                e("span", $e, t(s(o)("pageTitle")), 1),
                k(d, {
                  type: s(M).status == "success" ? "success" : s(M).status == "warning" ? "warning" : "danger",
                  effect: "light",
                  round: ""
                }, {
                  default: C(() => [
                    V(t(s(o)("health")) + t(s(M).label), 1)
                  ]),
                  _: 1
                }, 8, ["type"])
              ]),
              e("div", qe, [
                e("span", null, t(s(o)("serverTime")) + "：" + t(((g = s(i).runtime) == null ? void 0 : g.server_time) || "-"), 1)
              ])
            ]),
            k(f, {
              loading: w.value,
              onClick: E
            }, {
              default: C(() => [
                k(r, { class: "mr-1" }, {
                  default: C(() => [
                    k(s(Me))
                  ]),
                  _: 1
                }),
                V(t(s(o)("refresh")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          e("div", Te, [
            e("div", De, [
              e("div", Pe, t(s(o)("healthScore")), 1),
              e("div", {
                class: D(["text-[22px] font-bold", s(M).status == "success" ? "!text-[#67c23a]" : "!text-[#f56c6c]"])
              }, t(s(M).score), 3)
            ]),
            e("div", je, [
              e("div", Ne, t(s(o)("cpuCores")), 1),
              e("div", Ue, t(((B = s(i).performance) == null ? void 0 : B.cpu_cores) || "-"), 1)
            ]),
            e("div", Ve, [
              e("div", Ee, t(s(o)("memoryUsage")), 1),
              e("div", {
                class: D(["text-[22px] font-bold", { "!text-[#f56c6c]": (s(x).usage_percent || 0) >= 85 }])
              }, t(s(x).usage_percent || 0) + "%", 3)
            ]),
            e("div", Ie, [
              e("div", He, t(s(o)("diskUsage")), 1),
              e("div", {
                class: D(["text-[22px] font-bold", { "!text-[#f56c6c]": (s(b).usage_percent || 0) >= 85 }])
              }, t(s(b).usage_percent || 0) + "%", 3)
            ])
          ])
        ]),
        e("div", null, [
          e("div", Le, [
            e("span", Qe, t(s(o)("keyService")), 1),
            e("span", Ae, t(s(o)("keyServiceDesc")), 1)
          ]),
          e("div", Fe, [
            (u(!0), m(y, null, z(s(ie), (l) => (u(), m("div", {
              key: l.label,
              class: D(["form-section !border-[var(--sys-color-border-default)] flex items-start gap-3", l.borderClass])
            }, [
              e("div", Je, [
                k(r, { class: "text-[18px]" }, {
                  default: C(() => [
                    (u(), pe(he(l.icon)))
                  ]),
                  _: 2
                }, 1024)
              ]),
              e("div", Oe, [
                e("div", Re, t(l.label), 1),
                e("div", Ge, t(l.value), 1),
                e("div", Ke, t(l.meta), 1)
              ])
            ], 2))), 128))
          ])
        ]),
        e("div", null, [
          e("div", We, [
            e("span", Xe, t(s(o)("resourceUsage")), 1)
          ]),
          e("div", Ye, [
            e("div", Ze, [
              e("div", es, [
                k(_, {
                  type: "dashboard",
                  percentage: s(x).usage_percent || 0,
                  status: U(s(x).usage_percent || 0),
                  width: 110
                }, null, 8, ["percentage", "status"]),
                e("div", ss, [
                  e("div", ts, t(s(x).used_formatted || "-"), 1),
                  e("div", os, t(s(o)("total")) + " " + t(s(x).total_formatted || "-"), 1),
                  e("div", as, t(s(o)("available")) + " " + t(s(x).available_formatted || "-"), 1)
                ])
              ]),
              e("div", ls, t(s(o)("memory")), 1)
            ]),
            e("div", ns, [
              e("div", is, [
                k(_, {
                  type: "dashboard",
                  percentage: s(b).usage_percent || 0,
                  status: U(s(b).usage_percent || 0),
                  width: 110
                }, null, 8, ["percentage", "status"]),
                e("div", cs, [
                  e("div", ds, t(s(b).used_formatted || "-"), 1),
                  e("div", rs, t(s(o)("total")) + " " + t(s(b).total_formatted || "-"), 1),
                  e("div", _s, t(s(o)("remaining")) + " " + t(s(b).free_formatted || "-"), 1)
                ])
              ]),
              e("div", vs, t(s(o)("disk")), 1)
            ]),
            e("div", us, [
              e("div", fs, [
                e("div", ms, [
                  e("div", ps, t(s(o)("cpuCores")), 1),
                  e("div", hs, t(((S = s(i).performance) == null ? void 0 : S.cpu_cores) || "-"), 1)
                ]),
                e("div", xs, [
                  e("div", bs, t(s(o)("loadAvg")), 1),
                  e("div", gs, t(s(ne)), 1)
                ])
              ]),
              e("div", ks, t(s(o)("cpuLoad")), 1)
            ])
          ])
        ]),
        e("div", null, [
          e("div", ys, [
            e("span", zs, t(s(o)("serviceDetail")), 1)
          ]),
          e("div", ws, [
            e("div", Ms, [
              e("div", Bs, t(s(o)("mysqlDetail")), 1),
              e("div", Ss, [
                (u(!0), m(y, null, z(s(ce), (l) => (u(), m("div", {
                  key: l.label,
                  class: "rounded-md"
                }, [
                  e("div", Cs, t(l.label), 1),
                  e("div", $s, t(l.value), 1)
                ]))), 128))
              ])
            ]),
            e("div", qs, [
              e("div", Ts, t(s(o)("redisDetail")), 1),
              e("div", Ds, [
                (u(!0), m(y, null, z(s(de), (l) => (u(), m("div", {
                  key: l.label,
                  class: "rounded-md"
                }, [
                  e("div", Ps, t(l.label), 1),
                  e("div", js, t(l.value), 1)
                ]))), 128))
              ]),
              !s(v).connected && s(v).error ? (u(), m("div", Ns, t(s(v).error), 1)) : ae("", !0)
            ]),
            e("div", Us, [
              e("div", Vs, t(s(o)("dbStorage")), 1),
              e("div", Es, [
                (u(!0), m(y, null, z(s(re), (l) => (u(), m("div", {
                  key: l.label,
                  class: "rounded-md"
                }, [
                  e("div", Is, t(l.label), 1),
                  e("div", Hs, t(l.value), 1)
                ]))), 128))
              ])
            ])
          ])
        ]),
        s(N).length ? (u(), m("div", Ls, [
          e("div", Qs, [
            e("span", As, t(s(o)("tableTop")), 1)
          ]),
          e("div", Fs, [
            (u(!0), m(y, null, z(s(N), (l) => (u(), m("div", {
              key: l.table_name,
              class: "flex items-center justify-between rounded-md border-b border-solid border-[var(--cmp-form-section-header-border)] p-2"
            }, [
              e("div", Js, [
                e("div", Os, t(l.table_name), 1),
                e("div", Rs, t(l.rows) + " " + t(s(o)("rows")) + " · " + t(s(o)("dataSize")) + " " + t(l.data_size_formatted) + " · " + t(s(o)("indexSize")) + " " + t(l.index_size_formatted), 1)
              ]),
              e("div", Gs, t(l.total_size_formatted), 1)
            ]))), 128))
          ])
        ])) : ae("", !0),
        e("div", null, [
          e("div", Ks, [
            e("span", Ws, t(s(o)("runtime")), 1)
          ]),
          e("div", Xs, [
            e("div", Ys, [
              e("div", Zs, t(s(o)("serverEnv")), 1),
              e("div", et, [
                e("div", st, [
                  e("span", tt, t(s(o)("os")), 1),
                  e("span", ot, t(((I = s(i).runtime) == null ? void 0 : I.os) || "-"), 1)
                ]),
                e("div", at, [
                  e("span", lt, t(s(o)("phpVersion")), 1),
                  e("span", nt, t(((H = s(i).runtime) == null ? void 0 : H.php_version) || "-"), 1)
                ]),
                e("div", it, [
                  e("span", ct, t(s(o)("runMode")), 1),
                  e("span", dt, t(((L = s(i).runtime) == null ? void 0 : L.sapi) || "-"), 1)
                ]),
                e("div", rt, [
                  e("span", _t, t(s(o)("serverTime")), 1),
                  e("span", vt, t(((Q = s(i).runtime) == null ? void 0 : Q.server_time) || "-"), 1)
                ]),
                e("div", ut, [
                  e("span", ft, t(s(o)("timezone")), 1),
                  e("span", mt, t(((A = s(i).runtime) == null ? void 0 : A.timezone) || "-"), 1)
                ])
              ])
            ]),
            e("div", pt, [
              e("div", ht, t(s(o)("database")), 1),
              e("div", xt, [
                e("div", bt, [
                  e("span", gt, t(s(o)("driver")), 1),
                  e("span", kt, t(((F = s(i).database) == null ? void 0 : F.driver) || "-"), 1)
                ]),
                e("div", yt, [
                  e("span", zt, t(s(o)("version")), 1),
                  e("span", wt, t(((J = s(i).database) == null ? void 0 : J.version) || "-"), 1)
                ]),
                e("div", Mt, [
                  e("span", Bt, t(s(o)("distribution")), 1),
                  e("span", St, t(((R = (O = s(i).database) == null ? void 0 : O.variables) == null ? void 0 : R.version_comment) || "-"), 1)
                ]),
                e("div", Ct, [
                  e("span", $t, t(s(o)("inflow")), 1),
                  e("span", qt, t(((K = (G = s(i).database) == null ? void 0 : G.traffic) == null ? void 0 : K.received_formatted) || "-"), 1)
                ]),
                e("div", Tt, [
                  e("span", Dt, t(s(o)("outflow")), 1),
                  e("span", Pt, t(((X = (W = s(i).database) == null ? void 0 : W.traffic) == null ? void 0 : X.sent_formatted) || "-"), 1)
                ])
              ])
            ])
          ])
        ]),
        e("div", null, [
          e("div", jt, [
            e("span", Nt, t(s(o)("phpConfig")), 1)
          ]),
          e("div", Ut, [
            e("div", Vt, [
              e("div", Et, [
                It,
                e("span", Ht, t(((Y = s(i).php) == null ? void 0 : Y.memory_limit) || "-"), 1)
              ]),
              e("div", Lt, [
                Qt,
                e("span", At, t(((Z = s(i).php) == null ? void 0 : Z.upload_max_filesize) || "-"), 1)
              ]),
              e("div", Ft, [
                Jt,
                e("span", Ot, t(((ee = s(i).php) == null ? void 0 : ee.post_max_size) || "-"), 1)
              ]),
              e("div", Rt, [
                Gt,
                e("span", Kt, t(((se = s(i).php) == null ? void 0 : se.max_execution_time) || "-"), 1)
              ]),
              (u(!0), m(y, null, z(((te = s(i).php) == null ? void 0 : te.extensions) || [], (l) => (u(), m("div", {
                key: l.name,
                class: "info-kv-item"
              }, [
                e("span", Wt, t(l.name), 1),
                k(d, {
                  size: "small",
                  effect: "light",
                  type: l.status ? "success" : "danger"
                }, {
                  default: C(() => [
                    V(t(l.status ? s(o)("enabled") : s(o)("disabled")), 1)
                  ]),
                  _: 2
                }, 1032, ["type"])
              ]))), 128))
            ])
          ])
        ])
      ])), [
        [h, w.value]
      ]);
    };
  }
});
const no = /* @__PURE__ */ ye(Xt, [["__scopeId", "data-v-9a8aa235"]]);
export {
  no as default
};
