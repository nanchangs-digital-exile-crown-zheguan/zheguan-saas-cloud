import { ElTabPane as X, ElTabs as Y, ElImage as Z, ElButton as ee, ElInput as te, ElDialog as ne } from "element-plus/es";
import { ref as i, readonly as oe, unref as y, getCurrentScope as ae, onScopeDispose as se, getCurrentInstance as le, onMounted as re, nextTick as ue, computed as ie, onBeforeUpdate as ce, watch as G, defineComponent as pe, reactive as de, openBlock as w, createBlock as A, withCtx as C, createVNode as b, createElementBlock as P, createElementVNode as x, toDisplayString as O, createTextVNode as fe, createCommentVNode as L } from "vue";
import { t as h } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as B } from "element-plus";
import { b as me } from "./browser-b31b1ebf.js";
import "/admin/assets/shared/core-shared.js";
import { getUrl as ve, getQrcode as _e } from "/admin/assets/shared/core-shared.js";
import { img as D } from "/admin/assets/shared/core-shared.js";
var $;
const Q = typeof window < "u", ge = (e) => typeof e == "string", ye = () => {
};
Q && (($ = window == null ? void 0 : window.navigator) != null && $.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function R(e) {
  return typeof e == "function" ? e() : y(e);
}
function he(e) {
  return e;
}
function q(e) {
  return ae() ? (se(e), !0) : !1;
}
function xe(e, t = !0) {
  le() ? re(e) : t ? e() : ue(e);
}
function we(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, l = i(!1);
  let r = null;
  function d() {
    r && (clearTimeout(r), r = null);
  }
  function c() {
    l.value = !1, d();
  }
  function _(...m) {
    d(), l.value = !0, r = setTimeout(() => {
      l.value = !1, r = null, e(...m);
    }, R(t));
  }
  return a && (l.value = !0, Q && _()), q(c), {
    isPending: oe(l),
    start: _,
    stop: c
  };
}
function be(e) {
  var t;
  const n = R(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Oe = Q ? window : void 0, Ce = Q ? window.navigator : void 0;
function Ie(...e) {
  let t, n, a, l;
  if (ge(e[0]) || Array.isArray(e[0]) ? ([n, a, l] = e, t = Oe) : [t, n, a, l] = e, !t)
    return ye;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], d = () => {
    r.forEach((u) => u()), r.length = 0;
  }, c = (u, v, g) => (u.addEventListener(v, g, l), () => u.removeEventListener(v, g, l)), _ = G(() => be(t), (u) => {
    d(), u && r.push(...n.flatMap((v) => a.map((g) => c(u, v, g))));
  }, { immediate: !0, flush: "post" }), m = () => {
    _(), d();
  };
  return q(m), m;
}
function Ee(e, t = !1) {
  const n = i(), a = () => n.value = Boolean(e());
  return a(), xe(a, t), n;
}
function Te(e = {}) {
  const {
    navigator: t = Ce,
    read: n = !1,
    source: a,
    copiedDuring: l = 1500,
    legacy: r = !1
  } = e, d = ["copy", "cut"], c = Ee(() => t && "clipboard" in t), _ = ie(() => c.value || r), m = i(""), u = i(!1), v = we(() => u.value = !1, l);
  function g() {
    c.value ? t.clipboard.readText().then((s) => {
      m.value = s;
    }) : m.value = k();
  }
  if (_.value && n)
    for (const s of d)
      Ie(s, g);
  async function I(s = R(a)) {
    _.value && s != null && (c.value ? await t.clipboard.writeText(s) : N(s), m.value = s, u.value = !0, v.start());
  }
  function N(s) {
    const f = document.createElement("textarea");
    f.value = s ?? "", f.style.position = "absolute", f.style.opacity = "0", document.body.appendChild(f), f.select(), document.execCommand("copy"), f.remove();
  }
  function k() {
    var s, f, E;
    return (E = (f = (s = document == null ? void 0 : document.getSelection) == null ? void 0 : s.call(document)) == null ? void 0 : f.toString()) != null ? E : "";
  }
  return {
    isSupported: _,
    text: m,
    copied: u,
    copy: I
  };
}
const W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, j = "__vueuse_ssr_handlers__";
W[j] = W[j] || {};
var F;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(F || (F = {}));
function Ye() {
  const e = i([]);
  return e.value.set = (t) => {
    t && e.value.push(t);
  }, ce(() => {
    e.value.length = 0;
  }), e;
}
var Se = Object.defineProperty, H = Object.getOwnPropertySymbols, Pe = Object.prototype.hasOwnProperty, Qe = Object.prototype.propertyIsEnumerable, M = (e, t, n) => t in e ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ne = (e, t) => {
  for (var n in t || (t = {}))
    Pe.call(t, n) && M(e, n, t[n]);
  if (H)
    for (var n of H(t))
      Qe.call(t, n) && M(e, n, t[n]);
  return e;
};
const ke = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Ne({
  linear: he
}, ke);
const Ue = {
  key: 0,
  class: "promote-flex flex"
}, Le = { class: "promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]" }, Re = { class: "px-[20px] flex-1" }, Ve = { class: "mb-[10px]" }, Ae = ["href"], Be = {
  key: 1,
  class: "promote-flex flex"
}, De = { class: "promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]" }, $e = { class: "w-[150px] h-[150px] text-[14px] text-center leading-[150px]" }, We = {
  key: 1,
  class: "w-[150px] h-[150px] text-[14px] text-center leading-[150px]"
}, je = {
  key: 0,
  class: "px-[20px] flex-1"
}, Fe = ["href"], Ze = /* @__PURE__ */ pe({
  __name: "index",
  setup(e, { expose: t }) {
    const n = i(!1), a = i("h5"), l = i("");
    i("");
    const r = i(""), d = i(""), c = de({
      path: ""
    });
    ve().then((p) => {
      l.value = p.data.wap_url;
    });
    const _ = () => {
      console.log(v.value);
      const p = v.value.map((o) => `${encodeURIComponent(o.name)}=${encodeURIComponent(o.value)}`).join("&");
      d.value = `${l.value}${u.value}${p ? "?" + p : ""}`, me.toDataURL(d.value, {
        errorCorrectionLevel: "L",
        margin: 0,
        width: 120
      }).then((o) => {
        r.value = o;
      });
    }, m = () => {
      let p = u.value;
      p.startsWith("/") && (p = p.slice(1)), _e({
        page: p,
        folder: I.value,
        // 转换参数格式为接口要求的 { column_name, column_value }
        params: v.value.map((o) => ({
          column_name: o.name,
          column_value: o.value
        }))
      }).then((o) => {
        o.data && (c.path = o.data.weapp_path);
      });
    }, u = i(""), v = i([]), g = i(""), I = i(""), N = (p, o, T, U) => {
      u.value = p, v.value = o, g.value = T, I.value = U, _(), m(), n.value = !0;
    }, { copy: k, isSupported: s, copied: f } = Te(), E = (p) => {
      s.value || B({
        message: h("notSupportCopy"),
        type: "warning"
      }), k(p);
    };
    return G(f, () => {
      f.value && B({
        message: h("copySuccess"),
        type: "success"
      });
    }), t({
      show: N
    }), (p, o) => {
      const T = X, U = Y, V = Z, K = ee, z = te, J = ne;
      return w(), A(J, {
        modelValue: n.value,
        "onUpdate:modelValue": o[2] || (o[2] = (S) => n.value = S),
        title: g.value,
        width: "500px",
        "destroy-on-close": !0
      }, {
        default: C(() => [
          b(U, {
            modelValue: a.value,
            "onUpdate:modelValue": o[0] || (o[0] = (S) => a.value = S),
            class: "mb-[10px]"
          }, {
            default: C(() => [
              b(T, {
                label: "H5",
                name: "h5"
              }),
              b(T, {
                label: "微信小程序",
                name: "weapp"
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          a.value === "h5" ? (w(), P("div", Ue, [
            x("div", Le, [
              b(V, { src: r.value }, null, 8, ["src"])
            ]),
            x("div", Re, [
              x("div", Ve, O(y(h)("promoteUrl")), 1),
              b(z, {
                class: "mb-[10px]",
                readonly: "",
                value: d.value
              }, {
                append: C(() => [
                  b(K, {
                    onClick: o[1] || (o[1] = (S) => E(d.value))
                  }, {
                    default: C(() => [
                      fe(O(y(h)("copy")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"]),
              x("a", {
                class: "text-primary",
                href: r.value,
                download: ""
              }, O(y(h)("downLoadQRCode")), 9, Ae)
            ])
          ])) : L("", !0),
          a.value === "weapp" ? (w(), P("div", Be, [
            x("div", De, [
              c.path ? (w(), A(V, {
                key: 0,
                src: y(D)(c.path),
                class: "w-[150px] h-[150px]"
              }, {
                error: C(() => [
                  x("div", $e, O(y(h)("configureFailed")), 1)
                ]),
                _: 1
              }, 8, ["src"])) : (w(), P("div", We, O(y(h)("configureFailed")), 1))
            ]),
            c.path ? (w(), P("div", je, [
              x("a", {
                class: "text-primary",
                href: y(D)(c.path),
                target: "_blank",
                download: ""
              }, O(y(h)("downLoadQRCode")), 9, Fe)
            ])) : L("", !0)
          ])) : L("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Ze as _,
  Ye as u
};
