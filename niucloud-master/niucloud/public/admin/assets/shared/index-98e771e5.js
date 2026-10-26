import { defineComponent as W, ref as x, computed as a, onMounted as $, resolveComponent as u, openBlock as r, createBlock as h, withCtx as p, createElementVNode as n, unref as t, normalizeClass as T, createVNode as f, createElementBlock as v, createCommentVNode as N, createTextVNode as I, toDisplayString as d, pushScopeId as q, popScopeId as G } from "vue";
import { useRouter as H } from "vue-router";
import { Loading as J } from "@element-plus/icons-vue";
import { al as P, hF as Q, ae as X, a as Y } from "./core-shared-86a0da16.js";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const Z = (_) => (q("data-v-44be496a"), _ = _(), G(), _), ee = { class: "navbar-hit relative flex items-center" }, te = { class: "task-panel" }, se = { class: "flex items-center justify-between mb-[8px]" }, ae = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("span", { class: "text-[14px] font-bold text-[#1D1F3A]" }, "进行中的任务", -1)), ne = {
  key: 0,
  class: "task-empty"
}, oe = { class: "flex items-center justify-between gap-[6px]" }, ie = { class: "task-title truncate" }, ce = { class: "task-stage truncate" }, le = { class: "flex items-center justify-between mt-[4px]" }, re = { class: "text-[12px] text-[#a0a3bd]" }, ue = { class: "text-[12px] text-[#6b7280]" }, pe = {
  key: 0,
  class: "task-wait-tip"
}, de = /* @__PURE__ */ W({
  __name: "index",
  setup(_, { expose: K }) {
    const i = P(), z = H(), m = x(!1);
    K({ open: () => {
      m.value = !0;
    } });
    const k = a(() => !!i.activeKey), c = a(() => i.activeKey ? i.runtime(i.activeKey) : null), o = a(() => {
      var e;
      return String(((e = c.value) == null ? void 0 : e.status) ?? "");
    }), b = a(() => {
      var e;
      return Math.max(0, Math.min(100, Number(((e = c.value) == null ? void 0 : e.progress) ?? 0)));
    }), y = a(() => o.value === "waiting_input"), w = x([]), C = x([]);
    function D() {
      Q().then((e) => {
        var s, l;
        w.value = ((s = e == null ? void 0 : e.data) == null ? void 0 : s.status) || [], C.value = ((l = e == null ? void 0 : e.data) == null ? void 0 : l.types) || [];
      }).catch(() => {
      });
    }
    $(D);
    const S = a(() => {
      const e = w.value.find((s) => s.value === o.value);
      return (e == null ? void 0 : e.label) || o.value || "";
    }), V = a(() => o.value === "success" ? "success" : ["failed", "rollback_failed"].includes(o.value) ? "danger" : y.value ? "warning" : ["canceled", "rolled_back"].includes(o.value) ? "info" : "primary"), j = a(() => o.value === "success" ? "success" : ["failed", "rollback_failed"].includes(o.value) ? "exception" : ""), A = a(() => y.value ? "is-waiting" : ["failed", "rollback_failed"].includes(o.value) ? "is-failed" : "is-running"), B = a(() => {
      var l;
      const e = String(((l = c.value) == null ? void 0 : l.taskType) ?? ""), s = C.value.find((g) => g.value === e);
      return (s == null ? void 0 : s.label) || e || "";
    }), M = () => {
      var e;
      i.activeKey && i.openDetail(i.activeKey, String(((e = c.value) == null ? void 0 : e.taskType) ?? ""));
    }, R = () => {
      const e = X() == "admin" ? "admin" : "site";
      z.push(`/${e}/tools/task_records`);
    };
    return (e, s) => {
      const l = u("el-icon"), g = u("icon"), E = u("el-button"), F = u("el-tag"), O = u("el-progress"), L = u("el-popover");
      return r(), h(L, {
        visible: m.value,
        "onUpdate:visible": s[0] || (s[0] = (U) => m.value = U),
        class: "box-item",
        width: 350,
        trigger: "hover",
        "show-after": 200,
        "hide-after": 300,
        offset: 4
      }, {
        reference: p(() => [
          n("div", ee, [
            t(k) ? (r(), h(l, {
              key: 0,
              size: 18,
              class: T(["task-icon", { "is-active": t(k) }])
            }, {
              default: p(() => [
                f(t(J))
              ]),
              _: 1
            }, 8, ["class"])) : (r(), h(g, {
              key: 1,
              name: "iconfont iconrenwu1-copy"
            })),
            t(k) ? (r(), v("span", {
              key: 2,
              class: T(["task-dot", t(A)])
            }, null, 2)) : N("", !0)
          ])
        ]),
        default: p(() => [
          n("div", te, [
            n("div", se, [
              ae,
              f(E, {
                link: "",
                type: "primary",
                size: "small",
                onClick: R
              }, {
                default: p(() => [
                  I("任务列表")
                ]),
                _: 1
              })
            ]),
            t(c) ? (r(), v("div", {
              key: 1,
              class: "task-item",
              onClick: M
            }, [
              n("div", oe, [
                n("span", ie, d(t(c).title || "任务执行中"), 1),
                f(F, {
                  size: "small",
                  effect: "plain",
                  type: t(V)
                }, {
                  default: p(() => [
                    I(d(t(S)), 1)
                  ]),
                  _: 1
                }, 8, ["type"])
              ]),
              n("div", ce, d(t(c).stage || t(S)), 1),
              f(O, {
                percentage: t(b),
                "stroke-width": 5,
                "show-text": !1,
                class: "!mt-[6px]",
                status: t(j)
              }, null, 8, ["percentage", "status"]),
              n("div", le, [
                n("span", re, d(t(B)), 1),
                n("span", ue, d(t(b)) + "%", 1)
              ]),
              t(y) ? (r(), v("div", pe, "任务已暂停，请进入详情处理")) : N("", !0)
            ])) : (r(), v("div", ne, "暂无进行中的任务"))
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
const be = /* @__PURE__ */ Y(de, [["__scopeId", "data-v-44be496a"]]);
export {
  be as default
};
