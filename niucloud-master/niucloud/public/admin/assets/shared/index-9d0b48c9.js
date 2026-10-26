import { ref as m, onUnmounted as K, defineComponent as ee, watch as X, computed as te, onMounted as ae, resolveComponent as F, resolveDirective as ne, openBlock as S, createBlock as J, withCtx as I, createElementVNode as d, createVNode as $, createElementBlock as N, toDisplayString as O, createCommentVNode as P, createTextVNode as q, withDirectives as se, Fragment as oe, renderList as le, unref as W, normalizeClass as ce, withModifiers as re, pushScopeId as ie, popScopeId as ue } from "vue";
import { useRouter as de } from "vue-router";
import { ElMessage as _e, ElMessageBox as fe } from "element-plus";
import { Close as me } from "@element-plus/icons-vue";
import { i2 as ve, i3 as pe, dJ as ge, dK as he, dL as ye, dH as Q, dI as be, dF as xe, a as we } from "./core-shared-86a0da16.js";
import "axios";
import "vue-i18n";
import "pinia";
const Y = 10 * 1e3, Se = 90 * 1e3, Ee = 20 * 1e3, Z = 5, Ce = 10 * 60 * 1e3, Te = (s) => new Promise((U) => setTimeout(U, s));
function Me(s = {}) {
  const U = m(null), V = m({}), k = m(0), o = m(!1), n = m(!1), v = m("connecting");
  let u = null, A = null, _ = null, p = null, y = null, E = 0, i = 0, g = !1, b = !1, R = "", l = 0;
  const D = (a) => {
    var w;
    v.value !== a && (v.value = a, (w = s.onModeChange) == null || w.call(s, a));
  }, H = () => {
    A && (clearInterval(A), A = null), _ && (clearTimeout(_), _ = null);
  }, x = () => {
    H(), u && (u.close(), u = null), o.value = !1;
  }, L = () => {
    b = !1, y && (y.abort(), y = null);
  }, e = (a) => {
    var w;
    U.value = a, V.value = a.unread || {}, k.value = a.unread_total ?? 0, a.version && (R = a.version), (w = s.onSnapshot) == null || w.call(s, a);
  }, t = () => {
    E = Date.now(), i = 0, n.value = !1, o.value = !0, _ && (clearTimeout(_), _ = null), D("sse");
  }, c = (a) => {
    b || (console.info(`[站内信] SSE 通道不可用（${a}），已自动降级为长轮询`), x(), D("polling"), h(), C());
  }, C = () => {
    p && clearTimeout(p), p = setTimeout(() => {
      !g || document.visibilityState === "hidden" || (L(), i = 0, D("connecting"), f());
    }, Ce);
  }, f = () => {
    if (!g || u || document.visibilityState === "hidden")
      return;
    const a = ++l;
    E = Date.now(), u = new EventSource(ve()), u.onopen = () => {
      a === l && (o.value = !0, n.value = !1, E = Date.now());
    }, u.addEventListener("message", (w) => {
      if (a === l) {
        t();
        try {
          e(JSON.parse(w.data));
        } catch {
        }
      }
    }), u.addEventListener("ping", () => {
      a === l && t();
    }), u.onerror = () => {
      a === l && (o.value = !1, i++, i >= Z && (x(), n.value = !0));
    }, _ = setTimeout(() => {
      _ = null, a === l && Date.now() - E >= Y && c("首帧超时，疑似被压缩或代理缓冲");
    }, Y), A = setInterval(() => {
      a === l && (!u || document.visibilityState === "hidden" || Date.now() - E > Se && (x(), i = 0, f()));
    }, Ee);
  }, h = () => {
    if (!g || b)
      return;
    b = !0;
    const a = ++l;
    (async () => {
      for (; g && b && a === l && document.visibilityState !== "hidden"; ) {
        const j = new AbortController();
        y = j;
        try {
          const M = await pe(R, j.signal);
          if (a !== l)
            return;
          i = 0, n.value = !1, o.value = !0;
          const B = M == null ? void 0 : M.data;
          B && (B.changed ? e(B) : B.version && (R = B.version));
        } catch (M) {
          if (a !== l || j.signal.aborted || (M == null ? void 0 : M.code) === "ERR_CANCELED")
            return;
          if (o.value = !1, i++, i >= Z) {
            n.value = !0, b = !1;
            return;
          }
          await Te(Math.min(3e3 * i, 15e3));
        } finally {
          y === j && (y = null);
        }
      }
    })();
  }, T = () => {
    g = !1, l++, x(), L(), p && (clearTimeout(p), p = null);
  }, z = () => {
    l++, x(), L(), i = 0, R = "", n.value = !1, v.value === "polling" ? h() : (D("connecting"), f());
  }, r = () => {
    var a;
    g && (document.visibilityState === "hidden" ? (x(), L()) : (i = 0, v.value === "polling" ? h() : f(), (a = s.onResume) == null || a.call(s)));
  };
  document.addEventListener("visibilitychange", r);
  const G = () => {
    g = !0, f();
  };
  return K(() => {
    T(), document.removeEventListener("visibilitychange", r);
  }), {
    snapshot: U,
    unread: V,
    unreadTotal: k,
    connected: o,
    dead: n,
    mode: v,
    connect: G,
    stop: T,
    restart: z
  };
}
const ke = (s) => (ie("data-v-8945ae63"), s = s(), ue(), s), Ae = {
  key: 0,
  class: "absolute top-[-3px] right-[-5px] min-w-[12px] h-[12px] px-[3px] rounded-full bg-[#DA203E] text-white text-[12px] leading-[12px] flex justify-center items-center"
}, Re = { class: "message-panel" }, De = { class: "flex items-center justify-between mb-[8px]" }, Le = /* @__PURE__ */ ke(() => /* @__PURE__ */ d("span", { class: "text-[14px] font-bold text-[#1D1F3A]" }, "消息", -1)), Ie = { class: "flex items-center" }, Ne = {
  key: 0,
  class: "message-empty"
}, Oe = ["onClick"], Ue = { class: "flex items-center justify-between" }, Ve = { class: "message-title" }, je = { class: "flex items-center gap-[6px] mt-[2px]" }, Be = { class: "message-category" }, Fe = {
  key: 0,
  class: "message-category"
}, $e = { class: "message-content" }, He = { class: "flex items-center justify-between mt-[4px]" }, Pe = { class: "message-time" }, ze = {
  key: 0,
  class: "w-[6px] h-[6px] rounded-full bg-[#DA203E]"
}, Ge = /* @__PURE__ */ ee({
  __name: "index",
  setup(s) {
    const V = de(), k = m(!1), o = m([]), n = m(0), v = m({}), { unreadTotal: u, snapshot: A, connect: _ } = Me();
    X(u, (e) => {
      typeof e == "number" && (n.value = e);
    }), X(A, (e) => {
      var t;
      (t = e == null ? void 0 : e.latest) != null && t.length && document.visibilityState !== "hidden" && (o.value = e.latest);
    });
    const p = async () => {
      var e;
      k.value = !0;
      try {
        const t = await he({ page: 1, limit: 10 });
        o.value = ((e = t == null ? void 0 : t.data) == null ? void 0 : e.data) ?? [];
      } catch {
        o.value = [];
      } finally {
        k.value = !1;
      }
    }, y = async () => {
      try {
        const e = await ye();
        n.value = E((e == null ? void 0 : e.data) ?? {});
      } catch {
        n.value = 0;
      }
    }, E = (e) => Object.values(e).reduce((t, c) => t + Number((c == null ? void 0 : c.count) ?? 0), 0), i = async (e) => {
      const t = {};
      Object.keys(e).forEach((c) => {
        var C, f;
        t[c] = ((C = e[c]) == null ? void 0 : C.name) ?? c, Object.keys(((f = e[c]) == null ? void 0 : f.sub) ?? {}).forEach((h) => {
          var T;
          t[`${c}.${h}`] = ((T = e[c].sub[h]) == null ? void 0 : T.name) ?? h;
        });
      }), v.value = t;
    }, g = (e) => e.map((t) => ({
      ...t,
      category_name: t.category_name || v.value[t.category] || "",
      sub_category_name: t.sub_category_name || v.value[`${t.category}.${t.sub_category}`] || ""
    })), b = () => {
      p();
    }, R = async (e) => {
      e.is_read || (await Q([e.id]).catch(() => {
      }), e.is_read = !0, n.value = Math.max(n.value - 1, 0)), V.push({ path: "/admin/message/detail", query: { id: e.id } });
    }, l = async () => {
      try {
        await Q([]), n.value = 0, o.value.forEach((e) => e.is_read = !0), _e.success("操作成功");
      } catch {
      }
    }, D = async (e) => {
      try {
        await fe.confirm("确定要删除这条消息吗？", "删除消息", {
          type: "warning",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        });
      } catch {
        return;
      }
      await be([e.id]), e.is_read || (n.value = Math.max(n.value - 1, 0)), o.value = o.value.filter((t) => t.id !== e.id);
    }, H = () => {
      V.push("/admin/message/list");
    }, x = te(() => g(o.value)), L = async () => {
      try {
        const e = await xe();
        await i((e == null ? void 0 : e.data) ?? {});
      } catch {
      }
    };
    return ae(async () => {
      await L(), await p(), await y(), _();
    }), (e, t) => {
      const c = F("icon"), C = F("el-button"), f = F("el-icon"), h = F("el-scrollbar"), T = F("el-popover"), z = ne("loading");
      return S(), J(T, {
        class: "box-item",
        width: 540,
        trigger: "hover",
        "show-after": 200,
        "hide-after": 300,
        offset: 4,
        onShow: b
      }, {
        reference: I(() => [
          d("div", {
            class: "relative cursor-pointer",
            onClick: H
          }, [
            $(c, { name: "iconfont iconFramec-1" }),
            n.value > 0 ? (S(), N("span", Ae, O(n.value > 99 ? "99+" : n.value), 1)) : P("", !0)
          ])
        ]),
        default: I(() => [
          d("div", Re, [
            d("div", De, [
              Le,
              d("div", Ie, [
                $(C, {
                  link: "",
                  type: "primary",
                  size: "small",
                  disabled: n.value === 0,
                  onClick: l
                }, {
                  default: I(() => [
                    q(" 全部已读 ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(C, {
                  link: "",
                  type: "primary",
                  size: "small",
                  onClick: H
                }, {
                  default: I(() => [
                    q("消息中心")
                  ]),
                  _: 1
                })
              ])
            ]),
            se((S(), J(h, { "max-height": "320px" }, {
              default: I(() => [
                o.value.length ? P("", !0) : (S(), N("div", Ne, "暂无消息")),
                (S(!0), N(oe, null, le(W(x), (r) => (S(), N("div", {
                  key: r.id,
                  class: ce(["message-item", { "is-unread": !r.is_read }]),
                  onClick: (G) => R(r)
                }, [
                  d("div", Ue, [
                    d("span", Ve, O(r.title), 1),
                    $(f, {
                      class: "message-close",
                      onClick: re((G) => D(r), ["stop"])
                    }, {
                      default: I(() => [
                        $(W(me))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  d("div", je, [
                    d("span", Be, O(r.category_name), 1),
                    r.sub_category_name ? (S(), N("span", Fe, O(r.sub_category_name), 1)) : P("", !0)
                  ]),
                  d("div", $e, O(W(ge)(r.content)), 1),
                  d("div", He, [
                    d("span", Pe, O(r.create_time), 1),
                    r.is_read ? P("", !0) : (S(), N("span", ze))
                  ])
                ], 10, Oe))), 128))
              ]),
              _: 1
            })), [
              [z, k.value]
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const et = /* @__PURE__ */ we(Ge, [["__scopeId", "data-v-8945ae63"]]);
export {
  et as default
};
