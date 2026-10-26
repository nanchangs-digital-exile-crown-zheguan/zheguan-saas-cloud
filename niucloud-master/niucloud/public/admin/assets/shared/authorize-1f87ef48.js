import { defineComponent as D, ref as r, computed as j, onMounted as P, onUnmounted as q, resolveComponent as L, resolveDirective as K, openBlock as m, createElementBlock as g, withDirectives as G, createBlock as S, normalizeStyle as b, withCtx as C, createElementVNode as J, unref as k, createCommentVNode as M, createVNode as z, createTextVNode as Q, toDisplayString as X, pushScopeId as _e, popScopeId as he } from "vue";
import { t as a, b as Y, c as Z, s as ee, d as te, e as ne, h as ce, a as re } from "./core-shared-86a0da16.js";
import { ElMessageBox as oe, ElMessage as B } from "element-plus";
import { Loading as se } from "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
const ae = { class: "main-container" }, ue = ["src"], ie = {
  key: 1,
  class: "absolute inset-0 flex flex-col items-center justify-center bg-[#F5F7FB] text-[#9699B6] text-[13px]"
}, le = /* @__PURE__ */ D({
  __name: "authorize",
  setup(de) {
    const x = r(!1), u = r(!1), o = r(""), h = r(""), v = r(null), s = r(""), d = r(!1), p = r(720), l = r(!1), _ = r(720), $ = j(() => Math.max(p.value, _.value)), f = () => {
      const e = document.querySelector(".main-container"), t = (e == null ? void 0 : e.getBoundingClientRect().top) || 120;
      _.value = Math.max(480, Math.round(window.innerHeight - t));
    }, F = async () => {
      var e, t, n, i;
      try {
        const c = await Y();
        u.value = !!((e = c == null ? void 0 : c.data) != null && e.bound), l.value = !!((t = c == null ? void 0 : c.data) != null && t.has_token), o.value = ((i = (n = c == null ? void 0 : c.data) == null ? void 0 : n.authorization) == null ? void 0 : i.auth_code) || "";
      } catch {
        u.value = !1, l.value = !1;
      }
    }, w = async (e) => {
      var i;
      const t = await Z({ mode: e, origin: window.location.origin });
      let n = ((i = t == null ? void 0 : t.data) == null ? void 0 : i.url) || "";
      if (n) {
        try {
          const c = new URL(n);
          c.searchParams.set("host", window.location.origin), c.searchParams.set("domain", window.location.hostname), n = c.toString();
        } catch {
        }
        try {
          s.value = new URL(n).origin;
        } catch {
          s.value = "";
        }
        o.value && (n += (n.indexOf("?") > -1 ? "&" : "?") + `current_auth=${encodeURIComponent(o.value)}`), d.value = !1, h.value = n, setTimeout(() => {
          d.value = !0;
        }, 2e3);
      }
    }, R = () => {
      setTimeout(() => {
        d.value = !0;
      }, 800);
    }, E = (e) => {
      try {
        return new URL(e).host.replace(/^www\./i, "").toLowerCase();
      } catch {
        return "";
      }
    }, U = (e) => {
      if (!e)
        return !1;
      if (s.value && e === s.value)
        return !0;
      const t = E(s.value);
      return !!t && E(e) === t;
    }, T = async (e) => {
      var n;
      if (!U(e.origin))
        return;
      const t = e.data || {};
      if (t.source === "niucloud-embed")
        switch (t.type) {
          case "niucloud:ready":
            d.value = !0, I(t.payload);
            break;
          case "niucloud:resize":
            (n = t.payload) != null && n.height && (p.value = Math.max(600, Math.min(1400, Number(t.payload.height))));
            break;
          case "niucloud:token":
            await N(t.payload);
            break;
          case "niucloud:selected":
            await O(t.payload);
            break;
          case "niucloud:cancel_selected":
            await V(t.payload);
            break;
          case "niucloud:logout":
            await W();
            break;
        }
    }, I = (e) => {
      if (!(e != null && e.hasToken) || l.value)
        return;
      const t = v.value;
      !(t != null && t.contentWindow) || !s.value || t.contentWindow.postMessage(
        { source: "niucloud-parent", type: "niucloud:need_token", payload: {} },
        s.value
      );
    }, N = async (e) => {
      if (!(!(e != null && e.token) && !(e != null && e.refresh_token)))
        try {
          await ee({
            token: e.token || "",
            expires_time: Number(e.expires_time || 0),
            refresh_token: e.refresh_token || "",
            refresh_expires_time: Number(e.refresh_expires_time || 0)
          }), l.value = !0;
        } catch (t) {
          console.error("[embed] 保存官网登录态失败（下次进入需重新登录）：", t);
        }
    }, H = (e) => {
      const t = String(e || "");
      if (!t)
        return "";
      const n = t.length;
      return n > 10 ? `${t.slice(0, 6)}${"*".repeat(n - 10)}${t.slice(-4)}` : n > 4 ? `${t.slice(0, 2)}${"*".repeat(n - 4)}${t.slice(-2)}` : "*".repeat(n);
    }, y = async (e) => {
      if (!u.value || !o.value || String(o.value) === String(e))
        return !0;
      try {
        return await oe.confirm(
          `${a("currentAuthCode")}${H(o.value)}；${a("replaceAuthTip")}`,
          a("replaceAuthTitle"),
          {
            type: "warning",
            confirmButtonText: a("confirm"),
            cancelButtonText: a("cancel")
          }
        ), !0;
      } catch {
        return !1;
      }
    }, O = async (e) => {
      if (!(!(e != null && e.auth_code) || !(e != null && e.auth_secret)) && await y(e.auth_code))
        try {
          await te({
            auth_code: e.auth_code,
            auth_secret: e.auth_secret,
            site_address: e.site_address || "",
            company_name: e.company_name || "",
            product_key_name: e.product_key_name || ""
          }), u.value = !0, o.value = e.auth_code || "", B.success(a("selectSuccess")), await w("account");
        } catch {
        }
    }, A = (e, t) => {
      const n = v.value;
      !(n != null && n.contentWindow) || !s.value || n.contentWindow.postMessage(
        { source: "niucloud-parent", type: e, payload: t },
        s.value
      );
    }, V = async (e) => {
      try {
        await ne({
          auth_code: (e == null ? void 0 : e.auth_code) || "",
          site_address: (e == null ? void 0 : e.site_address) || "",
          company_name: (e == null ? void 0 : e.company_name) || "",
          product_key_name: (e == null ? void 0 : e.product_key_name) || ""
        }), u.value = !1, o.value = "", B.success(a("cancelAuthSuccess")), A("niucloud:cancel_result", { success: !0 });
      } catch (t) {
        console.error("[embed] 取消选用授权失败：", t), A("niucloud:cancel_result", { success: !1 });
      }
    }, W = async () => {
      try {
        await ce();
      } catch {
      }
      l.value = !1, u.value = !1, o.value = "", await w("login");
    };
    return P(async () => {
      window.addEventListener("message", T), window.addEventListener("resize", f), f(), await F(), x.value = !0, await w(l.value || u.value ? "account" : "login");
    }), q(() => {
      window.removeEventListener("message", T), window.removeEventListener("resize", f);
    }), (e, t) => {
      const n = L("el-card"), i = L("el-icon"), c = K("loading");
      return m(), g("div", ae, [
        x.value ? (m(), S(n, {
          key: 1,
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: C(() => [
            J("div", {
              class: "relative overflow-hidden border border-[#EBEEF7]",
              style: b({ minHeight: _.value + "px" })
            }, [
              h.value ? (m(), g("iframe", {
                key: 0,
                ref_key: "embedFrame",
                ref: v,
                src: h.value,
                class: "w-full block",
                style: b({ height: k($) + "px", border: "0" }),
                referrerpolicy: "no-referrer",
                onLoad: R
              }, null, 44, ue)) : M("", !0),
              d.value ? M("", !0) : (m(), g("div", ie, [
                z(i, { class: "is-loading text-[22px] mb-[10px]" }, {
                  default: C(() => [
                    z(k(se))
                  ]),
                  _: 1
                }),
                Q(" " + X(k(a)("loadingEmbed")), 1)
              ]))
            ], 4)
          ]),
          _: 1
        })) : G((m(), S(n, {
          key: 0,
          class: "box-card !border-none",
          shadow: "never",
          style: b({ height: _.value + "px" })
        }, null, 8, ["style"])), [
          [c, !0]
        ])
      ]);
    };
  }
});
const pe = /* @__PURE__ */ re(le, [["__scopeId", "data-v-ab4f6c87"]]);
export {
  pe as default
};
