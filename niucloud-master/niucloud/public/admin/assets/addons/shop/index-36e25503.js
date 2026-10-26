import { ElInput as Tt, ElButton as dt, ElPopover as oi, ElDropdownItem as li, ElDropdownMenu as ci, ElDropdown as ui, ElScrollbar as di, ElUpload as fi, ElCol as hi, ElRow as mi, ElImage as xt, ElTooltip as gi, ElCheckbox as vi, ElPagination as pi, ElOption as yi, ElSelect as _i, ElFormItem as Ei, ElForm as Ti, ElDialog as bt, ElImageViewer as St, ElLoadingDirective as xi } from "element-plus/es";
import { computed as Ae, openBlock as W, createElementBlock as Q, normalizeClass as Le, normalizeStyle as Fe, unref as U, pushScopeId as Ge, popScopeId as je, createTextVNode as ce, defineComponent as Ce, withDirectives as Ee, createElementVNode as j, createVNode as Y, toDisplayString as J, vShow as be, useCssVars as ft, ref as pe, getCurrentInstance as bi, createCommentVNode as ne, reactive as _e, watch as Xe, onMounted as ht, onUnmounted as Lt, Transition as ot, withCtx as Z, Fragment as ke, renderList as Ne, nextTick as tt, withModifiers as kt, useAttrs as Si, mergeProps as At, createBlock as me, withKeys as Je, renderSlot as Dt, isRef as Li, toRaw as Ie } from "vue";
import { debounce as mt, img as Pe, getToken as ki, deepClone as Ai } from "/admin/assets/shared/core-shared.js";
import { t as ee } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as lt, ElMessageBox as gt } from "element-plus";
import { _ as Rt } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import Di from "/admin/assets/shared/core-shared.js";
import { getAttachmentCategoryList as Ri, getAttachmentList as Ii, addAttachmentCategory as wi, editAttachmentCategory as Ci, deleteAttachmentCategory as Oi, deleteAttachment as Pi, moveAttachment as Fi } from "/admin/assets/shared/core-shared.js";
import { Plus as Mi, Upload as Vi, Edit as Ni, Check as Bi } from "@element-plus/icons-vue";
import { storage as Ui } from "/admin/assets/shared/core-shared.js";
import { config as rt } from "/admin/assets/shared/core-shared.js";
import { _ as It } from "./_plugin-vue_export-helper-dad06003.js";
import { S as Gi } from "./sortable.esm-fc069a97.js";
var ji = Object.defineProperty, Ki = Object.defineProperties, Hi = Object.getOwnPropertyDescriptors, vt = Object.getOwnPropertySymbols, zi = Object.prototype.hasOwnProperty, Wi = Object.prototype.propertyIsEnumerable, pt = (V, I, f) => I in V ? ji(V, I, { enumerable: !0, configurable: !0, writable: !0, value: f }) : V[I] = f, ct = (V, I) => {
  for (var f in I || (I = {}))
    zi.call(I, f) && pt(V, f, I[f]);
  if (vt)
    for (var f of vt(I))
      Wi.call(I, f) && pt(V, f, I[f]);
  return V;
}, ut = (V, I) => Ki(V, Hi(I));
function yt(V, I, f, D) {
  var y, S = !1, k = 0;
  function R() {
    y && clearTimeout(y);
  }
  function L() {
    for (var a = arguments.length, b = new Array(a), v = 0; v < a; v++)
      b[v] = arguments[v];
    var h = this, E = Date.now() - k;
    function _() {
      k = Date.now(), f.apply(h, b);
    }
    function l() {
      y = void 0;
    }
    S || (D && !y && _(), R(), D === void 0 && E > V ? _() : I !== !0 && (y = setTimeout(D ? l : _, D === void 0 ? V - E : V)));
  }
  return typeof I != "boolean" && (D = f, f = I, I = void 0), L.cancel = function() {
    R(), S = !0;
  }, L;
}
function _t(V, I, f) {
  return f === void 0 ? yt(V, I, !1) : yt(V, f, I !== !1);
}
function qi(V) {
  return V && V.__esModule && Object.prototype.hasOwnProperty.call(V, "default") ? V.default : V;
}
var wt = { exports: {} };
typeof window < "u" && (wt.exports = function(V) {
  var I = {};
  function f(D) {
    if (I[D])
      return I[D].exports;
    var y = I[D] = { i: D, l: !1, exports: {} };
    return V[D].call(y.exports, y, y.exports, f), y.l = !0, y.exports;
  }
  return f.m = V, f.c = I, f.d = function(D, y, S) {
    f.o(D, y) || Object.defineProperty(D, y, { enumerable: !0, get: S });
  }, f.r = function(D) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(D, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(D, "__esModule", { value: !0 });
  }, f.t = function(D, y) {
    if (1 & y && (D = f(D)), 8 & y || 4 & y && typeof D == "object" && D && D.__esModule)
      return D;
    var S = /* @__PURE__ */ Object.create(null);
    if (f.r(S), Object.defineProperty(S, "default", { enumerable: !0, value: D }), 2 & y && typeof D != "string")
      for (var k in D)
        f.d(S, k, function(R) {
          return D[R];
        }.bind(null, k));
    return S;
  }, f.n = function(D) {
    var y = D && D.__esModule ? function() {
      return D.default;
    } : function() {
      return D;
    };
    return f.d(y, "a", y), y;
  }, f.o = function(D, y) {
    return Object.prototype.hasOwnProperty.call(D, y);
  }, f.p = "/dist/", f(f.s = "./src/hls.ts");
}({ "./node_modules/eventemitter3/index.js": function(V, I, f) {
  var D = Object.prototype.hasOwnProperty, y = "~";
  function S() {
  }
  function k(b, v, h) {
    this.fn = b, this.context = v, this.once = h || !1;
  }
  function R(b, v, h, E, _) {
    if (typeof h != "function")
      throw new TypeError("The listener must be a function");
    var l = new k(h, E || b, _), e = y ? y + v : v;
    return b._events[e] ? b._events[e].fn ? b._events[e] = [b._events[e], l] : b._events[e].push(l) : (b._events[e] = l, b._eventsCount++), b;
  }
  function L(b, v) {
    --b._eventsCount == 0 ? b._events = new S() : delete b._events[v];
  }
  function a() {
    this._events = new S(), this._eventsCount = 0;
  }
  Object.create && (S.prototype = /* @__PURE__ */ Object.create(null), new S().__proto__ || (y = !1)), a.prototype.eventNames = function() {
    var b, v, h = [];
    if (this._eventsCount === 0)
      return h;
    for (v in b = this._events)
      D.call(b, v) && h.push(y ? v.slice(1) : v);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(b)) : h;
  }, a.prototype.listeners = function(b) {
    var v = y ? y + b : b, h = this._events[v];
    if (!h)
      return [];
    if (h.fn)
      return [h.fn];
    for (var E = 0, _ = h.length, l = new Array(_); E < _; E++)
      l[E] = h[E].fn;
    return l;
  }, a.prototype.listenerCount = function(b) {
    var v = y ? y + b : b, h = this._events[v];
    return h ? h.fn ? 1 : h.length : 0;
  }, a.prototype.emit = function(b, v, h, E, _, l) {
    var e = y ? y + b : b;
    if (!this._events[e])
      return !1;
    var s, t, o = this._events[e], u = arguments.length;
    if (o.fn) {
      switch (o.once && this.removeListener(b, o.fn, void 0, !0), u) {
        case 1:
          return o.fn.call(o.context), !0;
        case 2:
          return o.fn.call(o.context, v), !0;
        case 3:
          return o.fn.call(o.context, v, h), !0;
        case 4:
          return o.fn.call(o.context, v, h, E), !0;
        case 5:
          return o.fn.call(o.context, v, h, E, _), !0;
        case 6:
          return o.fn.call(o.context, v, h, E, _, l), !0;
      }
      for (t = 1, s = new Array(u - 1); t < u; t++)
        s[t - 1] = arguments[t];
      o.fn.apply(o.context, s);
    } else {
      var n, c = o.length;
      for (t = 0; t < c; t++)
        switch (o[t].once && this.removeListener(b, o[t].fn, void 0, !0), u) {
          case 1:
            o[t].fn.call(o[t].context);
            break;
          case 2:
            o[t].fn.call(o[t].context, v);
            break;
          case 3:
            o[t].fn.call(o[t].context, v, h);
            break;
          case 4:
            o[t].fn.call(o[t].context, v, h, E);
            break;
          default:
            if (!s)
              for (n = 1, s = new Array(u - 1); n < u; n++)
                s[n - 1] = arguments[n];
            o[t].fn.apply(o[t].context, s);
        }
    }
    return !0;
  }, a.prototype.on = function(b, v, h) {
    return R(this, b, v, h, !1);
  }, a.prototype.once = function(b, v, h) {
    return R(this, b, v, h, !0);
  }, a.prototype.removeListener = function(b, v, h, E) {
    var _ = y ? y + b : b;
    if (!this._events[_])
      return this;
    if (!v)
      return L(this, _), this;
    var l = this._events[_];
    if (l.fn)
      l.fn !== v || E && !l.once || h && l.context !== h || L(this, _);
    else {
      for (var e = 0, s = [], t = l.length; e < t; e++)
        (l[e].fn !== v || E && !l[e].once || h && l[e].context !== h) && s.push(l[e]);
      s.length ? this._events[_] = s.length === 1 ? s[0] : s : L(this, _);
    }
    return this;
  }, a.prototype.removeAllListeners = function(b) {
    var v;
    return b ? (v = y ? y + b : b, this._events[v] && L(this, v)) : (this._events = new S(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = y, a.EventEmitter = a, V.exports = a;
}, "./node_modules/url-toolkit/src/url-toolkit.js": function(V, I, f) {
  var D, y, S, k, R;
  D = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, y = /^([^\/?#]*)([^]*)$/, S = /(?:\/|^)\.(?=\/)/g, k = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, R = { buildAbsoluteURL: function(L, a, b) {
    if (b = b || {}, L = L.trim(), !(a = a.trim())) {
      if (!b.alwaysNormalize)
        return L;
      var v = R.parseURL(L);
      if (!v)
        throw new Error("Error trying to parse base URL.");
      return v.path = R.normalizePath(v.path), R.buildURLFromParts(v);
    }
    var h = R.parseURL(a);
    if (!h)
      throw new Error("Error trying to parse relative URL.");
    if (h.scheme)
      return b.alwaysNormalize ? (h.path = R.normalizePath(h.path), R.buildURLFromParts(h)) : a;
    var E = R.parseURL(L);
    if (!E)
      throw new Error("Error trying to parse base URL.");
    if (!E.netLoc && E.path && E.path[0] !== "/") {
      var _ = y.exec(E.path);
      E.netLoc = _[1], E.path = _[2];
    }
    E.netLoc && !E.path && (E.path = "/");
    var l = { scheme: E.scheme, netLoc: h.netLoc, path: null, params: h.params, query: h.query, fragment: h.fragment };
    if (!h.netLoc && (l.netLoc = E.netLoc, h.path[0] !== "/"))
      if (h.path) {
        var e = E.path, s = e.substring(0, e.lastIndexOf("/") + 1) + h.path;
        l.path = R.normalizePath(s);
      } else
        l.path = E.path, h.params || (l.params = E.params, h.query || (l.query = E.query));
    return l.path === null && (l.path = b.alwaysNormalize ? R.normalizePath(h.path) : h.path), R.buildURLFromParts(l);
  }, parseURL: function(L) {
    var a = D.exec(L);
    return a ? { scheme: a[1] || "", netLoc: a[2] || "", path: a[3] || "", params: a[4] || "", query: a[5] || "", fragment: a[6] || "" } : null;
  }, normalizePath: function(L) {
    for (L = L.split("").reverse().join("").replace(S, ""); L.length !== (L = L.replace(k, "")).length; )
      ;
    return L.split("").reverse().join("");
  }, buildURLFromParts: function(L) {
    return L.scheme + L.netLoc + L.path + L.params + L.query + L.fragment;
  } }, V.exports = R;
}, "./node_modules/webworkify-webpack/index.js": function(V, I, f) {
  function D(a) {
    var b = {};
    function v(E) {
      if (b[E])
        return b[E].exports;
      var _ = b[E] = { i: E, l: !1, exports: {} };
      return a[E].call(_.exports, _, _.exports, v), _.l = !0, _.exports;
    }
    v.m = a, v.c = b, v.i = function(E) {
      return E;
    }, v.d = function(E, _, l) {
      v.o(E, _) || Object.defineProperty(E, _, { configurable: !1, enumerable: !0, get: l });
    }, v.r = function(E) {
      Object.defineProperty(E, "__esModule", { value: !0 });
    }, v.n = function(E) {
      var _ = E && E.__esModule ? function() {
        return E.default;
      } : function() {
        return E;
      };
      return v.d(_, "a", _), _;
    }, v.o = function(E, _) {
      return Object.prototype.hasOwnProperty.call(E, _);
    }, v.p = "/", v.oe = function(E) {
      throw console.error(E), E;
    };
    var h = v(v.s = ENTRY_MODULE);
    return h.default || h;
  }
  var y = "[\\.|\\-|\\+|\\w|/|@]+", S = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
  function k(a) {
    return (a + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  function R(a, b, v) {
    var h = {};
    h[v] = [];
    var E = b.toString(), _ = E.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
    if (!_)
      return h;
    for (var l, e = _[1], s = new RegExp("(\\\\n|\\W)" + k(e) + S, "g"); l = s.exec(E); )
      l[3] !== "dll-reference" && h[v].push(l[3]);
    for (s = new RegExp("\\(" + k(e) + '\\("(dll-reference\\s(' + y + '))"\\)\\)' + S, "g"); l = s.exec(E); )
      a[l[2]] || (h[v].push(l[1]), a[l[2]] = f(l[1]).m), h[l[2]] = h[l[2]] || [], h[l[2]].push(l[4]);
    for (var t, o = Object.keys(h), u = 0; u < o.length; u++)
      for (var n = 0; n < h[o[u]].length; n++)
        t = h[o[u]][n], isNaN(1 * t) || (h[o[u]][n] = 1 * h[o[u]][n]);
    return h;
  }
  function L(a) {
    return Object.keys(a).reduce(function(b, v) {
      return b || a[v].length > 0;
    }, !1);
  }
  V.exports = function(a, b) {
    b = b || {};
    var v = { main: f.m }, h = b.all ? { main: Object.keys(v.main) } : function(s, t) {
      for (var o = { main: [t] }, u = { main: [] }, n = { main: {} }; L(o); )
        for (var c = Object.keys(o), p = 0; p < c.length; p++) {
          var m = c[p], g = o[m].pop();
          if (n[m] = n[m] || {}, !n[m][g] && s[m][g]) {
            n[m][g] = !0, u[m] = u[m] || [], u[m].push(g);
            for (var i = R(s, s[m][g], m), r = Object.keys(i), d = 0; d < r.length; d++)
              o[r[d]] = o[r[d]] || [], o[r[d]] = o[r[d]].concat(i[r[d]]);
          }
        }
      return u;
    }(v, a), E = "";
    Object.keys(h).filter(function(s) {
      return s !== "main";
    }).forEach(function(s) {
      for (var t = 0; h[s][t]; )
        t++;
      h[s].push(t), v[s][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", E = E + "var " + s + " = (" + D.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + h[s].map(function(o) {
        return JSON.stringify(o) + ": " + v[s][o].toString();
      }).join(",") + `});
`;
    }), E = E + "new ((" + D.toString().replace("ENTRY_MODULE", JSON.stringify(a)) + ")({" + h.main.map(function(s) {
      return JSON.stringify(s) + ": " + v.main[s].toString();
    }).join(",") + "}))(self);";
    var _ = new window.Blob([E], { type: "text/javascript" });
    if (b.bare)
      return _;
    var l = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(_), e = new window.Worker(l);
    return e.objectURL = l, e;
  };
}, "./src/config.ts": function(V, I, f) {
  f.r(I), f.d(I, "hlsDefaultConfig", function() {
    return c;
  }), f.d(I, "mergeConfig", function() {
    return p;
  }), f.d(I, "enableStreamingMode", function() {
    return m;
  });
  var D = f("./src/controller/abr-controller.ts"), y = f("./src/controller/audio-stream-controller.ts"), S = f("./src/controller/audio-track-controller.ts"), k = f("./src/controller/subtitle-stream-controller.ts"), R = f("./src/controller/subtitle-track-controller.ts"), L = f("./src/controller/buffer-controller.ts"), a = f("./src/controller/timeline-controller.ts"), b = f("./src/controller/cap-level-controller.ts"), v = f("./src/controller/fps-controller.ts"), h = f("./src/controller/eme-controller.ts"), E = f("./src/utils/xhr-loader.ts"), _ = f("./src/utils/fetch-loader.ts"), l = f("./src/utils/cues.ts"), e = f("./src/utils/mediakeys-helper.ts"), s = f("./src/utils/logger.ts");
  function t() {
    return (t = Object.assign || function(g) {
      for (var i = 1; i < arguments.length; i++) {
        var r = arguments[i];
        for (var d in r)
          Object.prototype.hasOwnProperty.call(r, d) && (g[d] = r[d]);
      }
      return g;
    }).apply(this, arguments);
  }
  function o(g, i) {
    var r = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(g);
      i && (d = d.filter(function(x) {
        return Object.getOwnPropertyDescriptor(g, x).enumerable;
      })), r.push.apply(r, d);
    }
    return r;
  }
  function u(g) {
    for (var i = 1; i < arguments.length; i++) {
      var r = arguments[i] != null ? arguments[i] : {};
      i % 2 ? o(Object(r), !0).forEach(function(d) {
        n(g, d, r[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(d) {
        Object.defineProperty(g, d, Object.getOwnPropertyDescriptor(r, d));
      });
    }
    return g;
  }
  function n(g, i, r) {
    return i in g ? Object.defineProperty(g, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : g[i] = r, g;
  }
  var c = u(u({ autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, maxBufferSize: 6e7, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: !1, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: !0, enableSoftwareAES: !0, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: E.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: D.default, bufferController: L.default, capLevelController: b.default, fpsController: v.default, stretchShortVideoTrack: !1, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: !1, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: !1, widevineLicenseUrl: void 0, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: e.requestMediaKeySystemAccess, testBandwidth: !0, progressive: !1, lowLatencyMode: !0 }, { cueHandler: l.default, enableCEA708Captions: !0, enableWebVTT: !0, enableIMSC1: !0, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: !0 }), {}, { subtitleStreamController: k.SubtitleStreamController, subtitleTrackController: R.default, timelineController: a.TimelineController, audioStreamController: y.default, audioTrackController: S.default, emeController: h.default });
  function p(g, i) {
    if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration))
      throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
    if (i.liveMaxLatencyDurationCount !== void 0 && (i.liveSyncDurationCount === void 0 || i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount))
      throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
    if (i.liveMaxLatencyDuration !== void 0 && (i.liveSyncDuration === void 0 || i.liveMaxLatencyDuration <= i.liveSyncDuration))
      throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
    return t({}, g, i);
  }
  function m(g) {
    var i = g.loader;
    i !== _.default && i !== E.default ? (s.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), g.progressive = !1) : Object(_.fetchSupported)() && (g.loader = _.default, g.progressive = !0, g.enableSoftwareAES = !0, s.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
  }
}, "./src/controller/abr-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/ewma-bandwidth-estimator.ts"), S = f("./src/events.ts"), k = f("./src/utils/buffer-helper.ts"), R = f("./src/errors.ts"), L = f("./src/types/loader.ts"), a = f("./src/utils/logger.ts");
  function b(h, E) {
    for (var _ = 0; _ < E.length; _++) {
      var l = E[_];
      l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(h, l.key, l);
    }
  }
  var v = function() {
    function h(e) {
      this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = e;
      var s = e.config;
      this.bwEstimator = new y.default(s.abrEwmaSlowVoD, s.abrEwmaFastVoD, s.abrEwmaDefaultEstimate), this.registerListeners();
    }
    var E, _, l = h.prototype;
    return l.registerListeners = function() {
      var e = this.hls;
      e.on(S.Events.FRAG_LOADING, this.onFragLoading, this), e.on(S.Events.FRAG_LOADED, this.onFragLoaded, this), e.on(S.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.on(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.Events.ERROR, this.onError, this);
    }, l.unregisterListeners = function() {
      var e = this.hls;
      e.off(S.Events.FRAG_LOADING, this.onFragLoading, this), e.off(S.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(S.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.off(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.Events.ERROR, this.onError, this);
    }, l.destroy = function() {
      this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
    }, l.onFragLoading = function(e, s) {
      var t, o = s.frag;
      o.type === L.PlaylistLevelType.MAIN && (this.timer || (this.fragCurrent = o, this.partCurrent = (t = s.part) != null ? t : null, this.timer = self.setInterval(this.onCheck, 100)));
    }, l.onLevelLoaded = function(e, s) {
      var t = this.hls.config;
      s.details.live ? this.bwEstimator.update(t.abrEwmaSlowLive, t.abrEwmaFastLive) : this.bwEstimator.update(t.abrEwmaSlowVoD, t.abrEwmaFastVoD);
    }, l._abandonRulesCheck = function() {
      var e = this.fragCurrent, s = this.partCurrent, t = this.hls, o = t.autoLevelEnabled, u = t.config, n = t.media;
      if (e && n) {
        var c = s ? s.stats : e.stats, p = s ? s.duration : e.duration;
        if (c.aborted)
          return a.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void (this._nextAutoLevel = -1);
        if (o && !n.paused && n.playbackRate && n.readyState) {
          var m = performance.now() - c.loading.start, g = Math.abs(n.playbackRate);
          if (!(m <= 500 * p / g)) {
            var i = t.levels, r = t.minAutoLevel, d = i[e.level], x = c.total || Math.max(c.loaded, Math.round(p * d.maxBitrate / 8)), T = Math.max(1, c.bwEstimate ? c.bwEstimate / 8 : 1e3 * c.loaded / m), A = (x - c.loaded) / T, C = n.currentTime, w = (k.BufferHelper.bufferInfo(n, C, u.maxBufferHole).end - C) / g;
            if (!(w >= 2 * p / g || A <= w)) {
              var O, P = Number.POSITIVE_INFINITY;
              for (O = e.level - 1; O > r && !((P = p * i[O].maxBitrate / (6.4 * T)) < w); O--)
                ;
              if (!(P >= A)) {
                var F = this.bwEstimator.getEstimate();
                a.logger.warn("Fragment " + e.sn + (s ? " part " + s.index : "") + " of level " + e.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + O + `
      Current BW estimate: ` + (Object(D.isFiniteNumber)(F) ? (F / 1024).toFixed(3) : "Unknown") + ` Kb/s
      Estimated load time for current fragment: ` + A.toFixed(3) + ` s
      Estimated load time for the next fragment: ` + P.toFixed(3) + ` s
      Time to underbuffer: ` + w.toFixed(3) + " s"), t.nextLoadLevel = O, this.bwEstimator.sample(m, c.loaded), this.clearTimer(), e.loader && (this.fragCurrent = this.partCurrent = null, e.loader.abort()), t.trigger(S.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: e, part: s, stats: c });
              }
            }
          }
        }
      }
    }, l.onFragLoaded = function(e, s) {
      var t = s.frag, o = s.part;
      if (t.type === L.PlaylistLevelType.MAIN && Object(D.isFiniteNumber)(t.sn)) {
        var u = o ? o.stats : t.stats, n = o ? o.duration : t.duration;
        if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
          var c = this.hls.levels[t.level], p = (c.loaded ? c.loaded.bytes : 0) + u.loaded, m = (c.loaded ? c.loaded.duration : 0) + n;
          c.loaded = { bytes: p, duration: m }, c.realBitrate = Math.round(8 * p / m);
        }
        if (t.bitrateTest) {
          var g = { stats: u, frag: t, part: o, id: t.type };
          this.onFragBuffered(S.Events.FRAG_BUFFERED, g), t.bitrateTest = !1;
        }
      }
    }, l.onFragBuffered = function(e, s) {
      var t = s.frag, o = s.part, u = o ? o.stats : t.stats;
      if (!u.aborted && t.type === L.PlaylistLevelType.MAIN && t.sn !== "initSegment") {
        var n = u.parsing.end - u.loading.start;
        this.bwEstimator.sample(n, u.loaded), u.bwEstimate = this.bwEstimator.getEstimate(), t.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0;
      }
    }, l.onError = function(e, s) {
      switch (s.details) {
        case R.ErrorDetails.FRAG_LOAD_ERROR:
        case R.ErrorDetails.FRAG_LOAD_TIMEOUT:
          this.clearTimer();
      }
    }, l.clearTimer = function() {
      self.clearInterval(this.timer), this.timer = void 0;
    }, l.getNextABRAutoLevel = function() {
      var e = this.fragCurrent, s = this.partCurrent, t = this.hls, o = t.maxAutoLevel, u = t.config, n = t.minAutoLevel, c = t.media, p = s ? s.duration : e ? e.duration : 0, m = c ? c.currentTime : 0, g = c && c.playbackRate !== 0 ? Math.abs(c.playbackRate) : 1, i = this.bwEstimator ? this.bwEstimator.getEstimate() : u.abrEwmaDefaultEstimate, r = (k.BufferHelper.bufferInfo(c, m, u.maxBufferHole).end - m) / g, d = this.findBestLevel(i, n, o, r, u.abrBandWidthFactor, u.abrBandWidthUpFactor);
      if (d >= 0)
        return d;
      a.logger.trace((r ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
      var x = p ? Math.min(p, u.maxStarvationDelay) : u.maxStarvationDelay, T = u.abrBandWidthFactor, A = u.abrBandWidthUpFactor;
      if (!r) {
        var C = this.bitrateTestDelay;
        C && (x = (p ? Math.min(p, u.maxLoadingDelay) : u.maxLoadingDelay) - C, a.logger.trace("bitrate test took " + Math.round(1e3 * C) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * x) + " ms"), T = A = 1);
      }
      return d = this.findBestLevel(i, n, o, r + x, T, A), Math.max(d, 0);
    }, l.findBestLevel = function(e, s, t, o, u, n) {
      for (var c, p = this.fragCurrent, m = this.partCurrent, g = this.lastLoadedFragLevel, i = this.hls.levels, r = i[g], d = !(r == null || (c = r.details) === null || c === void 0 || !c.live), x = r == null ? void 0 : r.codecSet, T = m ? m.duration : p ? p.duration : 0, A = t; A >= s; A--) {
        var C = i[A];
        if (C && (!x || C.codecSet === x)) {
          var w = C.details, O = (m ? w == null ? void 0 : w.partTarget : w == null ? void 0 : w.averagetargetduration) || T, P = void 0;
          P = A <= g ? u * e : n * e;
          var F = i[A].maxBitrate, B = F * O / P;
          if (a.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + A + "/" + Math.round(P) + "/" + F + "/" + O + "/" + o + "/" + B), P > F && (!B || d && !this.bitrateTestDelay || B < o))
            return A;
        }
      }
      return -1;
    }, E = h, (_ = [{ key: "nextAutoLevel", get: function() {
      var e = this._nextAutoLevel, s = this.bwEstimator;
      if (!(e === -1 || s && s.canEstimate()))
        return e;
      var t = this.getNextABRAutoLevel();
      return e !== -1 && (t = Math.min(e, t)), t;
    }, set: function(e) {
      this._nextAutoLevel = e;
    } }]) && b(E.prototype, _), h;
  }();
  I.default = v;
}, "./src/controller/audio-stream-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/polyfills/number.ts"), y = f("./src/controller/base-stream-controller.ts"), S = f("./src/events.ts"), k = f("./src/utils/buffer-helper.ts"), R = f("./src/controller/fragment-tracker.ts"), L = f("./src/types/level.ts"), a = f("./src/types/loader.ts"), b = f("./src/loader/fragment.ts"), v = f("./src/demux/chunk-cache.ts"), h = f("./src/demux/transmuxer-interface.ts"), E = f("./src/types/transmuxer.ts"), _ = f("./src/controller/fragment-finders.ts"), l = f("./src/utils/discontinuities.ts"), e = f("./src/errors.ts"), s = f("./src/utils/logger.ts");
  function t() {
    return (t = Object.assign || function(n) {
      for (var c = 1; c < arguments.length; c++) {
        var p = arguments[c];
        for (var m in p)
          Object.prototype.hasOwnProperty.call(p, m) && (n[m] = p[m]);
      }
      return n;
    }).apply(this, arguments);
  }
  function o(n, c) {
    return (o = Object.setPrototypeOf || function(p, m) {
      return p.__proto__ = m, p;
    })(n, c);
  }
  var u = function(n) {
    var c, p;
    function m(i, r) {
      var d;
      return (d = n.call(this, i, r, "[audio-stream-controller]") || this).videoBuffer = null, d.videoTrackCC = -1, d.waitingVideoCC = -1, d.audioSwitch = !1, d.trackId = -1, d.waitingData = null, d.mainDetails = null, d.bufferFlushed = !1, d._registerListeners(), d;
    }
    p = n, (c = m).prototype = Object.create(p.prototype), c.prototype.constructor = c, o(c, p);
    var g = m.prototype;
    return g.onHandlerDestroying = function() {
      this._unregisterListeners(), this.mainDetails = null;
    }, g._registerListeners = function() {
      var i = this.hls;
      i.on(S.Events.MEDIA_ATTACHED, this.onMediaAttached, this), i.on(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), i.on(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), i.on(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.on(S.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), i.on(S.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), i.on(S.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), i.on(S.Events.ERROR, this.onError, this), i.on(S.Events.BUFFER_RESET, this.onBufferReset, this), i.on(S.Events.BUFFER_CREATED, this.onBufferCreated, this), i.on(S.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), i.on(S.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), i.on(S.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, g._unregisterListeners = function() {
      var i = this.hls;
      i.off(S.Events.MEDIA_ATTACHED, this.onMediaAttached, this), i.off(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), i.off(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), i.off(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.off(S.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), i.off(S.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), i.off(S.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), i.off(S.Events.ERROR, this.onError, this), i.off(S.Events.BUFFER_RESET, this.onBufferReset, this), i.off(S.Events.BUFFER_CREATED, this.onBufferCreated, this), i.off(S.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), i.off(S.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), i.off(S.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, g.onInitPtsFound = function(i, r) {
      var d = r.frag, x = r.id, T = r.initPTS;
      if (x === "main") {
        var A = d.cc;
        this.initPTS[d.cc] = T, this.log("InitPTS for cc: " + A + " found from main: " + T), this.videoTrackCC = A, this.state === y.State.WAITING_INIT_PTS && this.tick();
      }
    }, g.startLoad = function(i) {
      if (!this.levels)
        return this.startPosition = i, void (this.state = y.State.STOPPED);
      var r = this.lastCurrentTime;
      this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, r > 0 && i === -1 ? (this.log("Override startPosition with lastCurrentTime @" + r.toFixed(3)), this.state = y.State.IDLE) : (this.loadedmetadata = !1, this.state = y.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = i, this.tick();
    }, g.doTick = function() {
      switch (this.state) {
        case y.State.IDLE:
          this.doTickIdle();
          break;
        case y.State.WAITING_TRACK:
          var i, r = this.levels, d = this.trackId, x = r == null || (i = r[d]) === null || i === void 0 ? void 0 : i.details;
          if (x) {
            if (this.waitForCdnTuneIn(x))
              break;
            this.state = y.State.WAITING_INIT_PTS;
          }
          break;
        case y.State.FRAG_LOADING_WAITING_RETRY:
          var T, A = performance.now(), C = this.retryDate;
          (!C || A >= C || (T = this.media) !== null && T !== void 0 && T.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = y.State.IDLE);
          break;
        case y.State.WAITING_INIT_PTS:
          var w = this.waitingData;
          if (w) {
            var O = w.frag, P = w.part, F = w.cache, B = w.complete;
            if (this.initPTS[O.cc] !== void 0) {
              this.waitingData = null, this.waitingVideoCC = -1, this.state = y.State.FRAG_LOADING;
              var N = { frag: O, part: P, payload: F.flush(), networkDetails: null };
              this._handleFragmentLoadProgress(N), B && n.prototype._handleFragmentLoadComplete.call(this, N);
            } else if (this.videoTrackCC !== this.waitingVideoCC)
              s.logger.log("Waiting fragment cc (" + O.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
            else {
              var M = this.getLoadPosition(), G = k.BufferHelper.bufferInfo(this.mediaBuffer, M, this.config.maxBufferHole);
              Object(_.fragmentWithinToleranceTest)(G.end, this.config.maxFragLookUpTolerance, O) < 0 && (s.logger.log("Waiting fragment cc (" + O.cc + ") @ " + O.start + " cancelled because another fragment at " + G.end + " is needed"), this.clearWaitingFragment());
            }
          } else
            this.state = y.State.IDLE;
      }
      this.onTickEnd();
    }, g.clearWaitingFragment = function() {
      var i = this.waitingData;
      i && (this.fragmentTracker.removeFragment(i.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = y.State.IDLE);
    }, g.onTickEnd = function() {
      var i = this.media;
      if (i && i.readyState) {
        var r = (this.mediaBuffer ? this.mediaBuffer : i).buffered;
        !this.loadedmetadata && r.length && (this.loadedmetadata = !0), this.lastCurrentTime = i.currentTime;
      }
    }, g.doTickIdle = function() {
      var i, r, d = this.hls, x = this.levels, T = this.media, A = this.trackId, C = d.config;
      if (x && x[A] && (T || !this.startFragRequested && C.startFragPrefetch)) {
        var w = x[A].details;
        if (!w || w.live && this.levelLastLoaded !== A || this.waitForCdnTuneIn(w))
          this.state = y.State.WAITING_TRACK;
        else {
          this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, b.ElementaryStreamTypes.AUDIO, a.PlaylistLevelType.AUDIO));
          var O = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, a.PlaylistLevelType.AUDIO);
          if (O !== null) {
            var P = O.len, F = this.getMaxBufferLength(), B = this.audioSwitch;
            if (!(P >= F) || B) {
              if (!B && this._streamEnded(O, w))
                return d.trigger(S.Events.BUFFER_EOS, { type: "audio" }), void (this.state = y.State.ENDED);
              var N = w.fragments[0].start, M = O.end;
              if (B) {
                var G = this.getLoadPosition();
                M = G, w.PTSKnown && G < N && (O.end > N || O.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), T.currentTime = N + 0.05);
              }
              var K = this.getNextFragment(M, w);
              K ? ((i = K.decryptdata) === null || i === void 0 ? void 0 : i.keyFormat) !== "identity" || (r = K.decryptdata) !== null && r !== void 0 && r.key ? this.loadFragment(K, w, M) : this.loadKey(K, w) : this.bufferFlushed = !0;
            }
          }
        }
      }
    }, g.getMaxBufferLength = function() {
      var i = n.prototype.getMaxBufferLength.call(this), r = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, a.PlaylistLevelType.MAIN);
      return r === null ? i : Math.max(i, r.len);
    }, g.onMediaDetaching = function() {
      this.videoBuffer = null, n.prototype.onMediaDetaching.call(this);
    }, g.onAudioTracksUpdated = function(i, r) {
      var d = r.audioTracks;
      this.resetTransmuxer(), this.levels = d.map(function(x) {
        return new L.Level(x);
      });
    }, g.onAudioTrackSwitching = function(i, r) {
      var d = !!r.url;
      this.trackId = r.id;
      var x = this.fragCurrent;
      x != null && x.loader && x.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), d ? this.setInterval(100) : this.resetTransmuxer(), d ? (this.audioSwitch = !0, this.state = y.State.IDLE) : this.state = y.State.STOPPED, this.tick();
    }, g.onManifestLoading = function() {
      this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1;
    }, g.onLevelLoaded = function(i, r) {
      this.mainDetails = r.details;
    }, g.onAudioTrackLoaded = function(i, r) {
      var d, x = this.levels, T = r.details, A = r.id;
      if (x) {
        this.log("Track " + A + " loaded [" + T.startSN + "," + T.endSN + "],duration:" + T.totalduration);
        var C = x[A], w = 0;
        if (T.live || (d = C.details) !== null && d !== void 0 && d.live) {
          var O = this.mainDetails;
          if (T.fragments[0] || (T.deltaUpdateFailed = !0), T.deltaUpdateFailed || !O)
            return;
          !C.details && T.hasProgramDateTime && O.hasProgramDateTime ? (Object(l.alignPDT)(T, O), w = T.fragments[0].start) : w = this.alignPlaylists(T, C.details);
        }
        C.details = T, this.levelLastLoaded = A, this.startFragRequested || !this.mainDetails && T.live || this.setStartPosition(C.details, w), this.state !== y.State.WAITING_TRACK || this.waitForCdnTuneIn(T) || (this.state = y.State.IDLE), this.tick();
      } else
        this.warn("Audio tracks were reset while loading level " + A);
    }, g._handleFragmentLoadProgress = function(i) {
      var r, d = i.frag, x = i.part, T = i.payload, A = this.config, C = this.trackId, w = this.levels;
      if (w) {
        var O = w[C];
        console.assert(O, "Audio track is defined on fragment load progress");
        var P = O.details;
        console.assert(P, "Audio track details are defined on fragment load progress");
        var F = A.defaultAudioCodec || O.audioCodec || "mp4a.40.2", B = this.transmuxer;
        B || (B = this.transmuxer = new h.default(this.hls, a.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
        var N = this.initPTS[d.cc], M = (r = d.initSegment) === null || r === void 0 ? void 0 : r.data;
        if (N !== void 0) {
          var G = x ? x.index : -1, K = G !== -1, H = new E.ChunkMetadata(d.level, d.sn, d.stats.chunkCount, T.byteLength, G, K);
          B.push(T, M, F, "", d, x, P.totalduration, !1, H, N);
        } else
          s.logger.log("Unknown video PTS for cc " + d.cc + ", waiting for video PTS before demuxing audio frag " + d.sn + " of [" + P.startSN + " ," + P.endSN + "],track " + C), (this.waitingData = this.waitingData || { frag: d, part: x, cache: new v.default(), complete: !1 }).cache.push(new Uint8Array(T)), this.waitingVideoCC = this.videoTrackCC, this.state = y.State.WAITING_INIT_PTS;
      } else
        this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + d.sn + " of level " + d.level + " will not be buffered");
    }, g._handleFragmentLoadComplete = function(i) {
      this.waitingData ? this.waitingData.complete = !0 : n.prototype._handleFragmentLoadComplete.call(this, i);
    }, g.onBufferReset = function() {
      this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
    }, g.onBufferCreated = function(i, r) {
      var d = r.tracks.audio;
      d && (this.mediaBuffer = d.buffer), r.tracks.video && (this.videoBuffer = r.tracks.video.buffer);
    }, g.onFragBuffered = function(i, r) {
      var d = r.frag, x = r.part;
      d.type === a.PlaylistLevelType.AUDIO && (this.fragContextChanged(d) ? this.warn("Fragment " + d.sn + (x ? " p: " + x.index : "") + " of level " + d.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : (d.sn !== "initSegment" && (this.fragPrevious = d, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(S.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))), this.fragBufferedComplete(d, x)));
    }, g.onError = function(i, r) {
      switch (r.details) {
        case e.ErrorDetails.FRAG_LOAD_ERROR:
        case e.ErrorDetails.FRAG_LOAD_TIMEOUT:
        case e.ErrorDetails.KEY_LOAD_ERROR:
        case e.ErrorDetails.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(a.PlaylistLevelType.AUDIO, r);
          break;
        case e.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
        case e.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
          this.state !== y.State.ERROR && this.state !== y.State.STOPPED && (this.state = r.fatal ? y.State.ERROR : y.State.IDLE, this.warn(r.details + " while loading frag, switching to " + this.state + " state"));
          break;
        case e.ErrorDetails.BUFFER_FULL_ERROR:
          if (r.parent === "audio" && (this.state === y.State.PARSING || this.state === y.State.PARSED)) {
            var d = !0, x = this.getFwdBufferInfo(this.mediaBuffer, a.PlaylistLevelType.AUDIO);
            x && x.len > 0.5 && (d = !this.reduceMaxBufferLength(x.len)), d && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, n.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState();
          }
      }
    }, g.onBufferFlushed = function(i, r) {
      r.type === b.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0);
    }, g._handleTransmuxComplete = function(i) {
      var r, d = "audio", x = this.hls, T = i.remuxResult, A = i.chunkMeta, C = this.getCurrentContext(A);
      if (!C)
        return this.warn("The loading context changed while buffering fragment " + A.sn + " of level " + A.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(A.level);
      var w = C.frag, O = C.part, P = T.audio, F = T.text, B = T.id3, N = T.initSegment;
      if (!this.fragContextChanged(w)) {
        if (this.state = y.State.PARSING, this.audioSwitch && P && this.completeAudioSwitch(), N != null && N.tracks && (this._bufferInitSegment(N.tracks, w, A), x.trigger(S.Events.FRAG_PARSING_INIT_SEGMENT, { frag: w, id: d, tracks: N.tracks })), P) {
          var M = P.startPTS, G = P.endPTS, K = P.startDTS, H = P.endDTS;
          O && (O.elementaryStreams[b.ElementaryStreamTypes.AUDIO] = { startPTS: M, endPTS: G, startDTS: K, endDTS: H }), w.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO, M, G, K, H), this.bufferFragmentData(P, w, O, A);
        }
        if (B != null && (r = B.samples) !== null && r !== void 0 && r.length) {
          var z = t({ frag: w, id: d }, B);
          x.trigger(S.Events.FRAG_PARSING_METADATA, z);
        }
        if (F) {
          var q = t({ frag: w, id: d }, F);
          x.trigger(S.Events.FRAG_PARSING_USERDATA, q);
        }
      }
    }, g._bufferInitSegment = function(i, r, d) {
      if (this.state === y.State.PARSING) {
        i.video && delete i.video;
        var x = i.audio;
        if (x) {
          x.levelCodec = x.codec, x.id = "audio", this.log("Init audio buffer, container:" + x.container + ", codecs[parsed]=[" + x.codec + "]"), this.hls.trigger(S.Events.BUFFER_CODECS, i);
          var T = x.initSegment;
          if (T != null && T.byteLength) {
            var A = { type: "audio", frag: r, part: null, chunkMeta: d, parent: r.type, data: T };
            this.hls.trigger(S.Events.BUFFER_APPENDING, A);
          }
          this.tick();
        }
      }
    }, g.loadFragment = function(i, r, d) {
      var x = this.fragmentTracker.getState(i);
      this.fragCurrent = i, (this.audioSwitch || x === R.FragmentState.NOT_LOADED || x === R.FragmentState.PARTIAL) && (i.sn === "initSegment" ? this._loadInitSegment(i) : r.live && !Object(D.isFiniteNumber)(this.initPTS[i.cc]) ? (this.log("Waiting for video PTS in continuity counter " + i.cc + " of live stream before loading audio fragment " + i.sn + " of level " + this.trackId), this.state = y.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, n.prototype.loadFragment.call(this, i, r, d)));
    }, g.completeAudioSwitch = function() {
      var i = this.hls, r = this.media, d = this.trackId;
      r && (this.log("Switching audio track : flushing all audio"), n.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, i.trigger(S.Events.AUDIO_TRACK_SWITCHED, { id: d });
    }, m;
  }(y.default);
  I.default = u;
}, "./src/controller/audio-track-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts"), y = f("./src/errors.ts"), S = f("./src/controller/base-playlist-controller.ts"), k = f("./src/types/loader.ts");
  function R(b, v) {
    for (var h = 0; h < v.length; h++) {
      var E = v[h];
      E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(b, E.key, E);
    }
  }
  function L(b, v) {
    return (L = Object.setPrototypeOf || function(h, E) {
      return h.__proto__ = E, h;
    })(b, v);
  }
  var a = function(b) {
    var v, h;
    function E(s) {
      var t;
      return (t = b.call(this, s, "[audio-track-controller]") || this).tracks = [], t.groupId = null, t.tracksInGroup = [], t.trackId = -1, t.trackName = "", t.selectDefaultTrack = !0, t.registerListeners(), t;
    }
    h = b, (v = E).prototype = Object.create(h.prototype), v.prototype.constructor = v, L(v, h);
    var _, l, e = E.prototype;
    return e.registerListeners = function() {
      var s = this.hls;
      s.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), s.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), s.on(D.Events.LEVEL_LOADING, this.onLevelLoading, this), s.on(D.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), s.on(D.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), s.on(D.Events.ERROR, this.onError, this);
    }, e.unregisterListeners = function() {
      var s = this.hls;
      s.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), s.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), s.off(D.Events.LEVEL_LOADING, this.onLevelLoading, this), s.off(D.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), s.off(D.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), s.off(D.Events.ERROR, this.onError, this);
    }, e.destroy = function() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, b.prototype.destroy.call(this);
    }, e.onManifestLoading = function() {
      this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0;
    }, e.onManifestParsed = function(s, t) {
      this.tracks = t.audioTracks || [];
    }, e.onAudioTrackLoaded = function(s, t) {
      var o = t.id, u = t.details, n = this.tracksInGroup[o];
      if (n) {
        var c = n.details;
        n.details = t.details, this.log("audioTrack " + o + " loaded [" + u.startSN + "-" + u.endSN + "]"), o === this.trackId && (this.retryCount = 0, this.playlistLoaded(o, t, c));
      } else
        this.warn("Invalid audio track id " + o);
    }, e.onLevelLoading = function(s, t) {
      this.switchLevel(t.level);
    }, e.onLevelSwitching = function(s, t) {
      this.switchLevel(t.level);
    }, e.switchLevel = function(s) {
      var t = this.hls.levels[s];
      if (t != null && t.audioGroupIds) {
        var o = t.audioGroupIds[t.urlId];
        if (this.groupId !== o) {
          this.groupId = o;
          var u = this.tracks.filter(function(c) {
            return !o || c.groupId === o;
          });
          this.selectDefaultTrack && !u.some(function(c) {
            return c.default;
          }) && (this.selectDefaultTrack = !1), this.tracksInGroup = u;
          var n = { audioTracks: u };
          this.log("Updating audio tracks, " + u.length + ' track(s) found in "' + o + '" group-id'), this.hls.trigger(D.Events.AUDIO_TRACKS_UPDATED, n), this.selectInitialTrack();
        }
      }
    }, e.onError = function(s, t) {
      b.prototype.onError.call(this, s, t), !t.fatal && t.context && t.context.type === k.PlaylistContextType.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t);
    }, e.setAudioTrack = function(s) {
      var t = this.tracksInGroup;
      if (s < 0 || s >= t.length)
        this.warn("Invalid id passed to audio-track controller");
      else {
        this.clearTimer();
        var o = t[this.trackId];
        this.log("Now switching to audio-track index " + s);
        var u = t[s], n = u.id, c = u.groupId, p = c === void 0 ? "" : c, m = u.name, g = u.type, i = u.url;
        if (this.trackId = s, this.trackName = m, this.selectDefaultTrack = !1, this.hls.trigger(D.Events.AUDIO_TRACK_SWITCHING, { id: n, groupId: p, name: m, type: g, url: i }), !u.details || u.details.live) {
          var r = this.switchParams(u.url, o == null ? void 0 : o.details);
          this.loadPlaylist(r);
        }
      }
    }, e.selectInitialTrack = function() {
      var s = this.tracksInGroup;
      console.assert(s.length, "Initial audio track should be selected when tracks are known");
      var t = this.trackName, o = this.findTrackId(t) || this.findTrackId();
      o !== -1 ? this.setAudioTrack(o) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: !0 }));
    }, e.findTrackId = function(s) {
      for (var t = this.tracksInGroup, o = 0; o < t.length; o++) {
        var u = t[o];
        if ((!this.selectDefaultTrack || u.default) && (!s || s === u.name))
          return u.id;
      }
      return -1;
    }, e.loadPlaylist = function(s) {
      var t = this.tracksInGroup[this.trackId];
      if (this.shouldLoadTrack(t)) {
        var o = t.id, u = t.groupId, n = t.url;
        if (s)
          try {
            n = s.addDirectives(n);
          } catch (c) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + c);
          }
        this.log("loading audio-track playlist for id: " + o), this.clearTimer(), this.hls.trigger(D.Events.AUDIO_TRACK_LOADING, { url: n, id: o, groupId: u, deliveryDirectives: s || null });
      }
    }, _ = E, (l = [{ key: "audioTracks", get: function() {
      return this.tracksInGroup;
    } }, { key: "audioTrack", get: function() {
      return this.trackId;
    }, set: function(s) {
      this.selectDefaultTrack = !1, this.setAudioTrack(s);
    } }]) && R(_.prototype, l), E;
  }(S.default);
  I.default = a;
}, "./src/controller/base-playlist-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return L;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/types/level.ts"), S = f("./src/controller/level-helper.ts"), k = f("./src/utils/logger.ts"), R = f("./src/errors.ts"), L = function() {
    function a(v, h) {
      this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = k.logger.log.bind(k.logger, h + ":"), this.warn = k.logger.warn.bind(k.logger, h + ":"), this.hls = v;
    }
    var b = a.prototype;
    return b.destroy = function() {
      this.clearTimer(), this.hls = this.log = this.warn = null;
    }, b.onError = function(v, h) {
      h.fatal && h.type === R.ErrorTypes.NETWORK_ERROR && this.clearTimer();
    }, b.clearTimer = function() {
      clearTimeout(this.timer), this.timer = -1;
    }, b.startLoad = function() {
      this.canLoad = !0, this.retryCount = 0, this.loadPlaylist();
    }, b.stopLoad = function() {
      this.canLoad = !1, this.clearTimer();
    }, b.switchParams = function(v, h) {
      var E = h == null ? void 0 : h.renditionReports;
      if (E)
        for (var _ = 0; _ < E.length; _++) {
          var l = E[_], e = "" + l.URI;
          if (e === v.substr(-e.length)) {
            var s = parseInt(l["LAST-MSN"]), t = parseInt(l["LAST-PART"]);
            if (h && this.hls.config.lowLatencyMode) {
              var o = Math.min(h.age - h.partTarget, h.targetduration);
              t !== void 0 && o > h.partTarget && (t += 1);
            }
            if (Object(D.isFiniteNumber)(s))
              return new y.HlsUrlParameters(s, Object(D.isFiniteNumber)(t) ? t : void 0, y.HlsSkip.No);
          }
        }
    }, b.loadPlaylist = function(v) {
    }, b.shouldLoadTrack = function(v) {
      return this.canLoad && v && !!v.url && (!v.details || v.details.live);
    }, b.playlistLoaded = function(v, h, E) {
      var _ = this, l = h.details, e = h.stats, s = e.loading.end ? Math.max(0, self.performance.now() - e.loading.end) : 0;
      if (l.advancedDateTime = Date.now() - s, l.live || E != null && E.live) {
        if (l.reloaded(E), E && this.log("live playlist " + v + " " + (l.advanced ? "REFRESHED " + l.lastPartSn + "-" + l.lastPartIndex : "MISSED")), E && l.fragments.length > 0 && Object(S.mergeDetails)(E, l), !this.canLoad || !l.live)
          return;
        var t, o = void 0, u = void 0;
        if (l.canBlockReload && l.endSN && l.advanced) {
          var n = this.hls.config.lowLatencyMode, c = l.lastPartSn, p = l.endSN, m = l.lastPartIndex, g = c === p;
          m !== -1 ? (o = g ? p + 1 : c, u = g ? n ? 0 : m : m + 1) : o = p + 1;
          var i = l.age, r = i + l.ageHeader, d = Math.min(r - l.partTarget, 1.5 * l.targetduration);
          if (d > 0) {
            if (E && d > E.tuneInGoal)
              this.warn("CDN Tune-in goal increased from: " + E.tuneInGoal + " to: " + d + " with playlist age: " + l.age), d = 0;
            else {
              var x = Math.floor(d / l.targetduration);
              o += x, u !== void 0 && (u += Math.round(d % l.targetduration / l.partTarget)), this.log("CDN Tune-in age: " + l.ageHeader + "s last advanced " + i.toFixed(2) + "s goal: " + d + " skip sn " + x + " to part " + u);
            }
            l.tuneInGoal = d;
          }
          if (t = this.getDeliveryDirectives(l, h.deliveryDirectives, o, u), n || !g)
            return void this.loadPlaylist(t);
        } else
          t = this.getDeliveryDirectives(l, h.deliveryDirectives, o, u);
        var T = Object(S.computeReloadInterval)(l, e);
        o !== void 0 && l.canBlockReload && (T -= l.partTarget || 1), this.log("reload live playlist " + v + " in " + Math.round(T) + " ms"), this.timer = self.setTimeout(function() {
          return _.loadPlaylist(t);
        }, T);
      } else
        this.clearTimer();
    }, b.getDeliveryDirectives = function(v, h, E, _) {
      var l = Object(y.getSkipValue)(v, E);
      return h != null && h.skip && v.deltaUpdateFailed && (E = h.msn, _ = h.part, l = y.HlsSkip.No), new y.HlsUrlParameters(E, _, l);
    }, b.retryLoadingOrFail = function(v) {
      var h, E = this, _ = this.hls.config, l = this.retryCount < _.levelLoadingMaxRetry;
      if (l)
        if (this.retryCount++, v.details.indexOf("LoadTimeOut") > -1 && (h = v.context) !== null && h !== void 0 && h.deliveryDirectives)
          this.warn("retry playlist loading #" + this.retryCount + ' after "' + v.details + '"'), this.loadPlaylist();
        else {
          var e = Math.min(Math.pow(2, this.retryCount) * _.levelLoadingRetryDelay, _.levelLoadingMaxRetryTimeout);
          this.timer = self.setTimeout(function() {
            return E.loadPlaylist();
          }, e), this.warn("retry playlist loading #" + this.retryCount + " in " + e + ' ms after "' + v.details + '"');
        }
      else
        this.warn('cannot recover from error "' + v.details + '"'), this.clearTimer(), v.fatal = !0;
      return l;
    }, a;
  }();
}, "./src/controller/base-stream-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "State", function() {
    return n;
  }), f.d(I, "default", function() {
    return c;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/task-loop.ts"), S = f("./src/controller/fragment-tracker.ts"), k = f("./src/utils/buffer-helper.ts"), R = f("./src/utils/logger.ts"), L = f("./src/events.ts"), a = f("./src/errors.ts"), b = f("./src/types/transmuxer.ts"), v = f("./src/utils/mp4-tools.ts"), h = f("./src/utils/discontinuities.ts"), E = f("./src/controller/fragment-finders.ts"), _ = f("./src/controller/level-helper.ts"), l = f("./src/loader/fragment-loader.ts"), e = f("./src/crypt/decrypter.ts"), s = f("./src/utils/time-ranges.ts"), t = f("./src/types/loader.ts");
  function o(p, m) {
    for (var g = 0; g < m.length; g++) {
      var i = m[g];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
    }
  }
  function u(p, m) {
    return (u = Object.setPrototypeOf || function(g, i) {
      return g.__proto__ = i, g;
    })(p, m);
  }
  var n = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BACKTRACKING: "BACKTRACKING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" }, c = function(p) {
    var m, g;
    function i(T, A, C) {
      var w;
      return (w = p.call(this) || this).hls = void 0, w.fragPrevious = null, w.fragCurrent = null, w.fragmentTracker = void 0, w.transmuxer = null, w._state = n.STOPPED, w.media = void 0, w.mediaBuffer = void 0, w.config = void 0, w.bitrateTest = !1, w.lastCurrentTime = 0, w.nextLoadPosition = 0, w.startPosition = 0, w.loadedmetadata = !1, w.fragLoadError = 0, w.retryDate = 0, w.levels = null, w.fragmentLoader = void 0, w.levelLastLoaded = null, w.startFragRequested = !1, w.decrypter = void 0, w.initPTS = [], w.onvseeking = null, w.onvended = null, w.logPrefix = "", w.log = void 0, w.warn = void 0, w.logPrefix = C, w.log = R.logger.log.bind(R.logger, C + ":"), w.warn = R.logger.warn.bind(R.logger, C + ":"), w.hls = T, w.fragmentLoader = new l.default(T.config), w.fragmentTracker = A, w.config = T.config, w.decrypter = new e.default(T, T.config), T.on(L.Events.KEY_LOADED, w.onKeyLoaded, function(O) {
        if (O === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O;
      }(w)), w;
    }
    g = p, (m = i).prototype = Object.create(g.prototype), m.prototype.constructor = m, u(m, g);
    var r, d, x = i.prototype;
    return x.doTick = function() {
      this.onTickEnd();
    }, x.onTickEnd = function() {
    }, x.startLoad = function(T) {
    }, x.stopLoad = function() {
      this.fragmentLoader.abort();
      var T = this.fragCurrent;
      T && this.fragmentTracker.removeFragment(T), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = n.STOPPED;
    }, x._streamEnded = function(T, A) {
      var C = this.fragCurrent, w = this.fragmentTracker;
      if (!A.live && C && C.sn === A.endSN && !T.nextStart) {
        var O = w.getState(C);
        return O === S.FragmentState.PARTIAL || O === S.FragmentState.OK;
      }
      return !1;
    }, x.onMediaAttached = function(T, A) {
      var C = this.media = this.mediaBuffer = A.media;
      this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), C.addEventListener("seeking", this.onvseeking), C.addEventListener("ended", this.onvended);
      var w = this.config;
      this.levels && w.autoStartLoad && this.state === n.STOPPED && this.startLoad(w.startPosition);
    }, x.onMediaDetaching = function() {
      var T = this.media;
      T != null && T.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), T && (T.removeEventListener("seeking", this.onvseeking), T.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }, x.onMediaSeeking = function() {
      var T = this.config, A = this.fragCurrent, C = this.media, w = this.mediaBuffer, O = this.state, P = C ? C.currentTime : 0, F = k.BufferHelper.bufferInfo(w || C, P, T.maxBufferHole);
      if (this.log("media seeking to " + (Object(D.isFiniteNumber)(P) ? P.toFixed(3) : P) + ", state: " + O), O === n.ENDED)
        this.resetLoadingState();
      else if (A && !F.len) {
        var B = T.maxFragLookUpTolerance, N = A.start - B, M = P > A.start + A.duration + B;
        (P < N || M) && (M && A.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), A.loader.abort()), this.resetLoadingState());
      }
      C && (this.lastCurrentTime = P), this.loadedmetadata || F.len || (this.nextLoadPosition = this.startPosition = P), this.tickImmediate();
    }, x.onMediaEnded = function() {
      this.startPosition = this.lastCurrentTime = 0;
    }, x.onKeyLoaded = function(T, A) {
      if (this.state === n.KEY_LOADING && A.frag === this.fragCurrent && this.levels) {
        this.state = n.IDLE;
        var C = this.levels[A.frag.level].details;
        C && this.loadFragment(A.frag, C, A.frag.start);
      }
    }, x.onHandlerDestroying = function() {
      this.stopLoad(), p.prototype.onHandlerDestroying.call(this);
    }, x.onHandlerDestroyed = function() {
      this.state = n.STOPPED, this.hls.off(L.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, p.prototype.onHandlerDestroyed.call(this);
    }, x.loadKey = function(T, A) {
      this.log("Loading key for " + T.sn + " of [" + A.startSN + "-" + A.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + T.level), this.state = n.KEY_LOADING, this.fragCurrent = T, this.hls.trigger(L.Events.KEY_LOADING, { frag: T });
    }, x.loadFragment = function(T, A, C) {
      this._loadFragForPlayback(T, A, C);
    }, x._loadFragForPlayback = function(T, A, C) {
      var w = this;
      this._doFragLoad(T, A, C, function(O) {
        if (w.fragContextChanged(T))
          return w.warn("Fragment " + T.sn + (O.part ? " p: " + O.part.index : "") + " of level " + T.level + " was dropped during download."), void w.fragmentTracker.removeFragment(T);
        T.stats.chunkCount++, w._handleFragmentLoadProgress(O);
      }).then(function(O) {
        if (O) {
          w.fragLoadError = 0;
          var P = w.state;
          if (!w.fragContextChanged(T))
            return "payload" in O && (w.log("Loaded fragment " + T.sn + " of level " + T.level), w.hls.trigger(L.Events.FRAG_LOADED, O), w.state === n.BACKTRACKING) ? (w.fragmentTracker.backtrack(T, O), void w.resetFragmentLoading(T)) : void w._handleFragmentLoadComplete(O);
          (P === n.FRAG_LOADING || P === n.BACKTRACKING || !w.fragCurrent && P === n.PARSING) && (w.fragmentTracker.removeFragment(T), w.state = n.IDLE);
        }
      }).catch(function(O) {
        w.warn(O), w.resetFragmentLoading(T);
      });
    }, x.flushMainBuffer = function(T, A, C) {
      if (C === void 0 && (C = null), T - A) {
        var w = { startOffset: T, endOffset: A, type: C };
        this.fragLoadError = 0, this.hls.trigger(L.Events.BUFFER_FLUSHING, w);
      }
    }, x._loadInitSegment = function(T) {
      var A = this;
      this._doFragLoad(T).then(function(C) {
        if (!C || A.fragContextChanged(T) || !A.levels)
          throw new Error("init load aborted");
        return C;
      }).then(function(C) {
        var w = A.hls, O = C.payload, P = T.decryptdata;
        if (O && O.byteLength > 0 && P && P.key && P.iv && P.method === "AES-128") {
          var F = self.performance.now();
          return A.decrypter.webCryptoDecrypt(new Uint8Array(O), P.key.buffer, P.iv.buffer).then(function(B) {
            var N = self.performance.now();
            return w.trigger(L.Events.FRAG_DECRYPTED, { frag: T, payload: B, stats: { tstart: F, tdecrypt: N } }), C.payload = B, C;
          });
        }
        return C;
      }).then(function(C) {
        var w = A.fragCurrent, O = A.hls, P = A.levels;
        if (!P)
          throw new Error("init load aborted, missing levels");
        var F = P[T.level].details;
        console.assert(F, "Level details are defined when init segment is loaded");
        var B = T.stats;
        A.state = n.IDLE, A.fragLoadError = 0, T.data = new Uint8Array(C.payload), B.parsing.start = B.buffering.start = self.performance.now(), B.parsing.end = B.buffering.end = self.performance.now(), C.frag === w && O.trigger(L.Events.FRAG_BUFFERED, { stats: B, frag: w, part: null, id: T.type }), A.tick();
      }).catch(function(C) {
        A.warn(C), A.resetFragmentLoading(T);
      });
    }, x.fragContextChanged = function(T) {
      var A = this.fragCurrent;
      return !T || !A || T.level !== A.level || T.sn !== A.sn || T.urlId !== A.urlId;
    }, x.fragBufferedComplete = function(T, A) {
      var C = this.mediaBuffer ? this.mediaBuffer : this.media;
      this.log("Buffered " + T.type + " sn: " + T.sn + (A ? " part: " + A.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + T.level + " " + s.default.toString(k.BufferHelper.getBuffered(C))), this.state = n.IDLE, this.tick();
    }, x._handleFragmentLoadComplete = function(T) {
      var A = this.transmuxer;
      if (A) {
        var C = T.frag, w = T.part, O = T.partsLoaded, P = !O || O.length === 0 || O.some(function(B) {
          return !B;
        }), F = new b.ChunkMetadata(C.level, C.sn, C.stats.chunkCount + 1, 0, w ? w.index : -1, !P);
        A.flush(F);
      }
    }, x._handleFragmentLoadProgress = function(T) {
    }, x._doFragLoad = function(T, A, C, w) {
      var O = this;
      if (C === void 0 && (C = null), !this.levels)
        throw new Error("frag load aborted, missing levels");
      if (C = Math.max(T.start, C || 0), this.config.lowLatencyMode && A) {
        var P = A.partList;
        if (P && w) {
          C > T.end && A.fragmentHint && (T = A.fragmentHint);
          var F = this.getNextPart(P, T, C);
          if (F > -1) {
            var B = P[F];
            return this.log("Loading part sn: " + T.sn + " p: " + B.index + " cc: " + T.cc + " of playlist [" + A.startSN + "-" + A.endSN + "] parts [0-" + F + "-" + (P.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + T.level + ", target: " + parseFloat(C.toFixed(3))), this.nextLoadPosition = B.start + B.duration, this.state = n.FRAG_LOADING, this.hls.trigger(L.Events.FRAG_LOADING, { frag: T, part: P[F], targetBufferTime: C }), this.doFragPartsLoad(T, P, F, w).catch(function(N) {
              return O.handleFragLoadError(N);
            });
          }
          if (!T.url || this.loadedEndOfParts(P, C))
            return Promise.resolve(null);
        }
      }
      return this.log("Loading fragment " + T.sn + " cc: " + T.cc + " " + (A ? "of [" + A.startSN + "-" + A.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + T.level + ", target: " + parseFloat(C.toFixed(3))), Object(D.isFiniteNumber)(T.sn) && !this.bitrateTest && (this.nextLoadPosition = T.start + T.duration), this.state = n.FRAG_LOADING, this.hls.trigger(L.Events.FRAG_LOADING, { frag: T, targetBufferTime: C }), this.fragmentLoader.load(T, w).catch(function(N) {
        return O.handleFragLoadError(N);
      });
    }, x.doFragPartsLoad = function(T, A, C, w) {
      var O = this;
      return new Promise(function(P, F) {
        var B = [];
        (function N(M) {
          var G = A[M];
          O.fragmentLoader.loadPart(T, G, w).then(function(K) {
            B[G.index] = K;
            var H = K.part;
            O.hls.trigger(L.Events.FRAG_LOADED, K);
            var z = A[M + 1];
            if (!z || z.fragment !== T)
              return P({ frag: T, part: H, partsLoaded: B });
            N(M + 1);
          }).catch(F);
        })(C);
      });
    }, x.handleFragLoadError = function(T) {
      var A = T.data;
      return A && A.details === a.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(A.frag, A.part) : this.hls.trigger(L.Events.ERROR, A), null;
    }, x._handleTransmuxerFlush = function(T) {
      var A = this.getCurrentContext(T);
      if (A && this.state === n.PARSING) {
        var C = A.frag, w = A.part, O = A.level, P = self.performance.now();
        C.stats.parsing.end = P, w && (w.stats.parsing.end = P), this.updateLevelTiming(C, w, O, T.partial);
      } else
        this.fragCurrent || (this.state = n.IDLE);
    }, x.getCurrentContext = function(T) {
      var A = this.levels, C = T.level, w = T.sn, O = T.part;
      if (!A || !A[C])
        return this.warn("Levels object was unset while buffering fragment " + w + " of level " + C + ". The current chunk will not be buffered."), null;
      var P = A[C], F = O > -1 ? Object(_.getPartWith)(P, w, O) : null, B = F ? F.fragment : Object(_.getFragmentWithSN)(P, w, this.fragCurrent);
      return B ? { frag: B, part: F, level: P } : null;
    }, x.bufferFragmentData = function(T, A, C, w) {
      if (T && this.state === n.PARSING) {
        var O = T.data1, P = T.data2, F = O;
        if (O && P && (F = Object(v.appendUint8Array)(O, P)), F && F.length) {
          var B = { type: T.type, frag: A, part: C, chunkMeta: w, parent: A.type, data: F };
          this.hls.trigger(L.Events.BUFFER_APPENDING, B), T.dropped && T.independent && !C && this.flushBufferGap(A);
        }
      }
    }, x.flushBufferGap = function(T) {
      var A = this.media;
      if (A)
        if (k.BufferHelper.isBuffered(A, A.currentTime)) {
          var C = A.currentTime, w = k.BufferHelper.bufferInfo(A, C, 0), O = T.duration, P = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * O), F = Math.max(Math.min(T.start - P, w.end - P), C + P);
          T.start - F > P && this.flushMainBuffer(F, T.start);
        } else
          this.flushMainBuffer(0, T.start);
    }, x.getFwdBufferInfo = function(T, A) {
      var C = this.config, w = this.getLoadPosition();
      if (!Object(D.isFiniteNumber)(w))
        return null;
      var O = k.BufferHelper.bufferInfo(T, w, C.maxBufferHole);
      if (O.len === 0 && O.nextStart !== void 0) {
        var P = this.fragmentTracker.getBufferedFrag(w, A);
        if (P && O.nextStart < P.end)
          return k.BufferHelper.bufferInfo(T, w, Math.max(O.nextStart, C.maxBufferHole));
      }
      return O;
    }, x.getMaxBufferLength = function(T) {
      var A, C = this.config;
      return A = T ? Math.max(8 * C.maxBufferSize / T, C.maxBufferLength) : C.maxBufferLength, Math.min(A, C.maxMaxBufferLength);
    }, x.reduceMaxBufferLength = function(T) {
      var A = this.config, C = T || A.maxBufferLength;
      return A.maxMaxBufferLength >= C && (A.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + A.maxMaxBufferLength + "s"), !0);
    }, x.getNextFragment = function(T, A) {
      var C, w, O = A.fragments, P = O.length;
      if (!P)
        return null;
      var F, B = this.config, N = O[0].start;
      if (A.live) {
        var M = B.initialLiveManifestSize;
        if (P < M)
          return this.warn("Not enough fragments to start playback (have: " + P + ", need: " + M + ")"), null;
        A.PTSKnown || this.startFragRequested || this.startPosition !== -1 || (F = this.getInitialLiveFragment(A, O), this.startPosition = F ? this.hls.liveSyncPosition || F.start : T);
      } else
        T <= N && (F = O[0]);
      if (!F) {
        var G = B.lowLatencyMode ? A.partEnd : A.fragmentEnd;
        F = this.getFragmentAtPosition(T, G, A);
      }
      return (C = F) === null || C === void 0 || !C.initSegment || (w = F) !== null && w !== void 0 && w.initSegment.data || this.bitrateTest || (F = F.initSegment), F;
    }, x.getNextPart = function(T, A, C) {
      for (var w = -1, O = !1, P = !0, F = 0, B = T.length; F < B; F++) {
        var N = T[F];
        if (P = P && !N.independent, w > -1 && C < N.start)
          break;
        var M = N.loaded;
        !M && (O || N.independent || P) && N.fragment === A && (w = F), O = M;
      }
      return w;
    }, x.loadedEndOfParts = function(T, A) {
      var C = T[T.length - 1];
      return C && A > C.start && C.loaded;
    }, x.getInitialLiveFragment = function(T, A) {
      var C = this.fragPrevious, w = null;
      if (C) {
        if (T.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + C.programDateTime), w = Object(E.findFragmentByPDT)(A, C.endProgramDateTime, this.config.maxFragLookUpTolerance)), !w) {
          var O = C.sn + 1;
          if (O >= T.startSN && O <= T.endSN) {
            var P = A[O - T.startSN];
            C.cc === P.cc && (w = P, this.log("Live playlist, switching playlist, load frag with next SN: " + w.sn));
          }
          w || (w = Object(E.findFragWithCC)(A, C.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + w.sn);
        }
      } else {
        var F = this.hls.liveSyncPosition;
        F !== null && (w = this.getFragmentAtPosition(F, this.bitrateTest ? T.fragmentEnd : T.edge, T));
      }
      return w;
    }, x.getFragmentAtPosition = function(T, A, C) {
      var w, O = this.config, P = this.fragPrevious, F = C.fragments, B = C.endSN, N = C.fragmentHint, M = O.maxFragLookUpTolerance, G = !!(O.lowLatencyMode && C.partList && N);
      if (G && N && !this.bitrateTest && (F = F.concat(N), B = N.sn), T < A) {
        var K = T > A - M ? 0 : M;
        w = Object(E.findFragmentByPTS)(P, F, T, K);
      } else
        w = F[F.length - 1];
      if (w) {
        var H = w.sn - C.startSN, z = P && w.level === P.level, q = F[H + 1];
        if (this.fragmentTracker.getState(w) === S.FragmentState.BACKTRACKED) {
          w = null;
          for (var $ = H; F[$] && this.fragmentTracker.getState(F[$]) === S.FragmentState.BACKTRACKED; )
            w = P ? F[$--] : F[--$];
          w || (w = q);
        } else
          P && w.sn === P.sn && !G && z && (w.sn < B && this.fragmentTracker.getState(q) !== S.FragmentState.OK ? (this.log("SN " + w.sn + " just loaded, load next one: " + q.sn), w = q) : w = null);
      }
      return w;
    }, x.synchronizeToLiveEdge = function(T) {
      var A = this.config, C = this.media;
      if (C) {
        var w = this.hls.liveSyncPosition, O = C.currentTime, P = T.fragments[0].start, F = T.edge, B = O >= P - A.maxFragLookUpTolerance && O <= F;
        if (w !== null && C.duration > w && (O < w || !B)) {
          var N = A.liveMaxLatencyDuration !== void 0 ? A.liveMaxLatencyDuration : A.liveMaxLatencyDurationCount * T.targetduration;
          (!B && C.readyState < 4 || O < F - N) && (this.loadedmetadata || (this.nextLoadPosition = w), C.readyState && (this.warn("Playback: " + O.toFixed(3) + " is located too far from the end of live sliding playlist: " + F + ", reset currentTime to : " + w.toFixed(3)), C.currentTime = w));
        }
      }
    }, x.alignPlaylists = function(T, A) {
      var C = this.levels, w = this.levelLastLoaded, O = this.fragPrevious, P = w !== null ? C[w] : null, F = T.fragments.length;
      if (!F)
        return this.warn("No fragments in live playlist"), 0;
      var B = T.fragments[0].start, N = !A, M = T.alignedSliding && Object(D.isFiniteNumber)(B);
      if (N || !M && !B) {
        Object(h.alignStream)(O, P, T);
        var G = T.fragments[0].start;
        return this.log("Live playlist sliding: " + G.toFixed(2) + " start-sn: " + (A ? A.startSN : "na") + "->" + T.startSN + " prev-sn: " + (O ? O.sn : "na") + " fragments: " + F), G;
      }
      return B;
    }, x.waitForCdnTuneIn = function(T) {
      return T.live && T.canBlockReload && T.tuneInGoal > Math.max(T.partHoldBack, 3 * T.partTarget);
    }, x.setStartPosition = function(T, A) {
      var C = this.startPosition;
      if (C < A && (C = -1), C === -1 || this.lastCurrentTime === -1) {
        var w = T.startTimeOffset;
        Object(D.isFiniteNumber)(w) ? (C = A + w, w < 0 && (C += T.totalduration), C = Math.min(Math.max(A, C), A + T.totalduration), this.log("Start time offset " + w + " found in playlist, adjust startPosition to " + C), this.startPosition = C) : T.live ? C = this.hls.liveSyncPosition || A : this.startPosition = C = 0, this.lastCurrentTime = C;
      }
      this.nextLoadPosition = C;
    }, x.getLoadPosition = function() {
      var T = this.media, A = 0;
      return this.loadedmetadata && T ? A = T.currentTime : this.nextLoadPosition && (A = this.nextLoadPosition), A;
    }, x.handleFragLoadAborted = function(T, A) {
      this.transmuxer && T.sn !== "initSegment" && T.stats.aborted && (this.warn("Fragment " + T.sn + (A ? " part" + A.index : "") + " of level " + T.level + " was aborted"), this.resetFragmentLoading(T));
    }, x.resetFragmentLoading = function(T) {
      this.fragCurrent && this.fragContextChanged(T) || (this.state = n.IDLE);
    }, x.onFragmentOrKeyLoadError = function(T, A) {
      if (!A.fatal) {
        var C = A.frag;
        if (C && C.type === T) {
          var w = this.fragCurrent;
          console.assert(w && C.sn === w.sn && C.level === w.level && C.urlId === w.urlId, "Frag load error must match current frag to retry");
          var O = this.config;
          if (this.fragLoadError + 1 <= O.fragLoadingMaxRetry) {
            if (this.resetLiveStartWhenNotLoaded(C.level))
              return;
            var P = Math.min(Math.pow(2, this.fragLoadError) * O.fragLoadingRetryDelay, O.fragLoadingMaxRetryTimeout);
            this.warn("Fragment " + C.sn + " of " + T + " " + C.level + " failed to load, retrying in " + P + "ms"), this.retryDate = self.performance.now() + P, this.fragLoadError++, this.state = n.FRAG_LOADING_WAITING_RETRY;
          } else
            A.levelRetry ? (T === t.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = n.IDLE) : (R.logger.error(A.details + " reaches max retry, redispatch as fatal ..."), A.fatal = !0, this.hls.stopLoad(), this.state = n.ERROR);
        }
      }
    }, x.afterBufferFlushed = function(T, A, C) {
      if (T) {
        var w = k.BufferHelper.getBuffered(T);
        this.fragmentTracker.detectEvictedFragments(A, w, C), this.state === n.ENDED && this.resetLoadingState();
      }
    }, x.resetLoadingState = function() {
      this.fragCurrent = null, this.fragPrevious = null, this.state = n.IDLE;
    }, x.resetLiveStartWhenNotLoaded = function(T) {
      if (!this.loadedmetadata) {
        this.startFragRequested = !1;
        var A = this.levels ? this.levels[T].details : null;
        if (A != null && A.live)
          return this.startPosition = -1, this.setStartPosition(A, 0), this.resetLoadingState(), !0;
        this.nextLoadPosition = this.startPosition;
      }
      return !1;
    }, x.updateLevelTiming = function(T, A, C, w) {
      var O = this, P = C.details;
      console.assert(!!P, "level.details must be defined"), Object.keys(T.elementaryStreams).reduce(function(F, B) {
        var N = T.elementaryStreams[B];
        if (N) {
          var M = N.endPTS - N.startPTS;
          if (M <= 0)
            return O.warn("Could not parse fragment " + T.sn + " " + B + " duration reliably (" + M + ") resetting transmuxer to fallback to playlist timing"), O.resetTransmuxer(), F || !1;
          var G = w ? 0 : Object(_.updateFragPTSDTS)(P, T, N.startPTS, N.endPTS, N.startDTS, N.endDTS);
          return O.hls.trigger(L.Events.LEVEL_PTS_UPDATED, { details: P, level: C, drift: G, type: B, frag: T, start: N.startPTS, end: N.endPTS }), !0;
        }
        return F;
      }, !1) ? (this.state = n.PARSED, this.hls.trigger(L.Events.FRAG_PARSED, { frag: T, part: A })) : this.resetLoadingState();
    }, x.resetTransmuxer = function() {
      this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
    }, r = i, (d = [{ key: "state", get: function() {
      return this._state;
    }, set: function(T) {
      var A = this._state;
      A !== T && (this._state = T, this.log(A + "->" + T));
    } }]) && o(r.prototype, d), i;
  }(y.default);
}, "./src/controller/buffer-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return E;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/events.ts"), S = f("./src/utils/logger.ts"), k = f("./src/errors.ts"), R = f("./src/utils/buffer-helper.ts"), L = f("./src/utils/mediasource-helper.ts"), a = f("./src/loader/fragment.ts"), b = f("./src/controller/buffer-operation-queue.ts"), v = Object(L.getMediaSource)(), h = /([ha]vc.)(?:\.[^.,]+)+/, E = function() {
    function _(e) {
      var s = this;
      this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
        var t = s.hls, o = s.media, u = s.mediaSource;
        S.logger.log("[buffer-controller]: Media source opened"), o && (s.updateMediaElementDuration(), t.trigger(y.Events.MEDIA_ATTACHED, { media: o })), u && u.removeEventListener("sourceopen", s._onMediaSourceOpen), s.checkPendingTracks();
      }, this._onMediaSourceClose = function() {
        S.logger.log("[buffer-controller]: Media source closed");
      }, this._onMediaSourceEnded = function() {
        S.logger.log("[buffer-controller]: Media source ended");
      }, this.hls = e, this._initSourceBuffer(), this.registerListeners();
    }
    var l = _.prototype;
    return l.hasSourceTypes = function() {
      return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
    }, l.destroy = function() {
      this.unregisterListeners(), this.details = null;
    }, l.registerListeners = function() {
      var e = this.hls;
      e.on(y.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.Events.BUFFER_RESET, this.onBufferReset, this), e.on(y.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.on(y.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.on(y.Events.BUFFER_EOS, this.onBufferEos, this), e.on(y.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.Events.FRAG_PARSED, this.onFragParsed, this), e.on(y.Events.FRAG_CHANGED, this.onFragChanged, this);
    }, l.unregisterListeners = function() {
      var e = this.hls;
      e.off(y.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.Events.BUFFER_RESET, this.onBufferReset, this), e.off(y.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.off(y.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.Events.BUFFER_EOS, this.onBufferEos, this), e.off(y.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.Events.FRAG_PARSED, this.onFragParsed, this), e.off(y.Events.FRAG_CHANGED, this.onFragChanged, this);
    }, l._initSourceBuffer = function() {
      this.sourceBuffer = {}, this.operationQueue = new b.default(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] };
    }, l.onManifestParsed = function(e, s) {
      var t = 2;
      (s.audio && !s.video || !s.altAudio) && (t = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = t, this.details = null, S.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
    }, l.onMediaAttaching = function(e, s) {
      var t = this.media = s.media;
      if (t && v) {
        var o = this.mediaSource = new v();
        o.addEventListener("sourceopen", this._onMediaSourceOpen), o.addEventListener("sourceended", this._onMediaSourceEnded), o.addEventListener("sourceclose", this._onMediaSourceClose), t.src = self.URL.createObjectURL(o), this._objectUrl = t.src;
      }
    }, l.onMediaDetaching = function() {
      var e = this.media, s = this.mediaSource, t = this._objectUrl;
      if (s) {
        if (S.logger.log("[buffer-controller]: media source detaching"), s.readyState === "open")
          try {
            s.endOfStream();
          } catch (o) {
            S.logger.warn("[buffer-controller]: onMediaDetaching: " + o.message + " while calling endOfStream");
          }
        this.onBufferReset(), s.removeEventListener("sourceopen", this._onMediaSourceOpen), s.removeEventListener("sourceended", this._onMediaSourceEnded), s.removeEventListener("sourceclose", this._onMediaSourceClose), e && (t && self.URL.revokeObjectURL(t), e.src === t ? (e.removeAttribute("src"), e.load()) : S.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
      }
      this.hls.trigger(y.Events.MEDIA_DETACHED, void 0);
    }, l.onBufferReset = function() {
      var e = this;
      this.getSourceBufferTypes().forEach(function(s) {
        var t = e.sourceBuffer[s];
        try {
          t && (e.removeBufferListeners(s), e.mediaSource && e.mediaSource.removeSourceBuffer(t), e.sourceBuffer[s] = void 0);
        } catch (o) {
          S.logger.warn("[buffer-controller]: Failed to reset the " + s + " buffer", o);
        }
      }), this._initSourceBuffer();
    }, l.onBufferCodecs = function(e, s) {
      var t = this, o = this.getSourceBufferTypes().length;
      Object.keys(s).forEach(function(u) {
        if (o) {
          var n = t.tracks[u];
          if (n && typeof n.buffer.changeType == "function") {
            var c = s[u], p = c.codec, m = c.levelCodec, g = c.container;
            if ((n.levelCodec || n.codec).replace(h, "$1") !== (m || p).replace(h, "$1")) {
              var i = g + ";codecs=" + (m || p);
              t.appendChangeType(u, i);
            }
          }
        } else
          t.pendingTracks[u] = s[u];
      }), o || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
    }, l.appendChangeType = function(e, s) {
      var t = this, o = this.operationQueue, u = { execute: function() {
        var n = t.sourceBuffer[e];
        n && (S.logger.log("[buffer-controller]: changing " + e + " sourceBuffer type to " + s), n.changeType(s)), o.shiftAndExecuteNext(e);
      }, onStart: function() {
      }, onComplete: function() {
      }, onError: function(n) {
        S.logger.warn("[buffer-controller]: Failed to change " + e + " SourceBuffer type", n);
      } };
      o.append(u, e);
    }, l.onBufferAppending = function(e, s) {
      var t = this, o = this.hls, u = this.operationQueue, n = this.tracks, c = s.data, p = s.type, m = s.frag, g = s.part, i = s.chunkMeta, r = i.buffering[p], d = self.performance.now();
      r.start = d;
      var x = m.stats.buffering, T = g ? g.stats.buffering : null;
      x.start === 0 && (x.start = d), T && T.start === 0 && (T.start = d);
      var A = n.audio, C = p === "audio" && i.id === 1 && (A == null ? void 0 : A.container) === "audio/mpeg", w = { execute: function() {
        if (r.executeStart = self.performance.now(), C) {
          var O = t.sourceBuffer[p];
          if (O) {
            var P = m.start - O.timestampOffset;
            Math.abs(P) >= 0.1 && (S.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + m.start + " (delta: " + P + ") sn: " + m.sn + ")"), O.timestampOffset = m.start);
          }
        }
        t.appendExecutor(c, p);
      }, onStart: function() {
      }, onComplete: function() {
        var O = self.performance.now();
        r.executeEnd = r.end = O, x.first === 0 && (x.first = O), T && T.first === 0 && (T.first = O);
        var P = t.sourceBuffer, F = {};
        for (var B in P)
          F[B] = R.BufferHelper.getBuffered(P[B]);
        t.appendError = 0, t.hls.trigger(y.Events.BUFFER_APPENDED, { type: p, frag: m, part: g, chunkMeta: i, parent: m.type, timeRanges: F });
      }, onError: function(O) {
        S.logger.error("[buffer-controller]: Error encountered while trying to append to the " + p + " SourceBuffer", O);
        var P = { type: k.ErrorTypes.MEDIA_ERROR, parent: m.type, details: k.ErrorDetails.BUFFER_APPEND_ERROR, err: O, fatal: !1 };
        O.code === DOMException.QUOTA_EXCEEDED_ERR ? P.details = k.ErrorDetails.BUFFER_FULL_ERROR : (t.appendError++, P.details = k.ErrorDetails.BUFFER_APPEND_ERROR, t.appendError > o.config.appendErrorMaxRetry && (S.logger.error("[buffer-controller]: Failed " + o.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), P.fatal = !0)), o.trigger(y.Events.ERROR, P);
      } };
      u.append(w, p);
    }, l.onBufferFlushing = function(e, s) {
      var t = this, o = this.operationQueue, u = function(n) {
        return { execute: t.removeExecutor.bind(t, n, s.startOffset, s.endOffset), onStart: function() {
        }, onComplete: function() {
          t.hls.trigger(y.Events.BUFFER_FLUSHED, { type: n });
        }, onError: function(c) {
          S.logger.warn("[buffer-controller]: Failed to remove from " + n + " SourceBuffer", c);
        } };
      };
      s.type ? o.append(u(s.type), s.type) : this.getSourceBufferTypes().forEach(function(n) {
        o.append(u(n), n);
      });
    }, l.onFragParsed = function(e, s) {
      var t = this, o = s.frag, u = s.part, n = [], c = u ? u.elementaryStreams : o.elementaryStreams;
      c[a.ElementaryStreamTypes.AUDIOVIDEO] ? n.push("audiovideo") : (c[a.ElementaryStreamTypes.AUDIO] && n.push("audio"), c[a.ElementaryStreamTypes.VIDEO] && n.push("video")), n.length === 0 && S.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + o.type + " level: " + o.level + " sn: " + o.sn), this.blockBuffers(function() {
        var p = self.performance.now();
        o.stats.buffering.end = p, u && (u.stats.buffering.end = p);
        var m = u ? u.stats : o.stats;
        t.hls.trigger(y.Events.FRAG_BUFFERED, { frag: o, part: u, stats: m, id: o.type });
      }, n);
    }, l.onFragChanged = function(e, s) {
      this.flushBackBuffer();
    }, l.onBufferEos = function(e, s) {
      var t = this;
      this.getSourceBufferTypes().reduce(function(o, u) {
        var n = t.sourceBuffer[u];
        return s.type && s.type !== u || n && !n.ended && (n.ended = !0, S.logger.log("[buffer-controller]: " + u + " sourceBuffer now EOS")), o && !(n && !n.ended);
      }, !0) && this.blockBuffers(function() {
        var o = t.mediaSource;
        o && o.readyState === "open" && o.endOfStream();
      });
    }, l.onLevelUpdated = function(e, s) {
      var t = s.details;
      t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
    }, l.flushBackBuffer = function() {
      var e = this.hls, s = this.details, t = this.media, o = this.sourceBuffer;
      if (t && s !== null) {
        var u = this.getSourceBufferTypes();
        if (u.length) {
          var n = s.live && e.config.liveBackBufferLength !== null ? e.config.liveBackBufferLength : e.config.backBufferLength;
          if (Object(D.isFiniteNumber)(n) && !(n < 0)) {
            var c = t.currentTime, p = s.levelTargetDuration, m = Math.max(n, p), g = Math.floor(c / p) * p - m;
            u.forEach(function(i) {
              var r = o[i];
              if (r) {
                var d = R.BufferHelper.getBuffered(r);
                d.length > 0 && g > d.start(0) && (e.trigger(y.Events.BACK_BUFFER_REACHED, { bufferEnd: g }), s.live && e.trigger(y.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: g }), e.trigger(y.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: g, type: i }));
              }
            });
          }
        }
      }
    }, l.updateMediaElementDuration = function() {
      if (this.details && this.media && this.mediaSource && this.mediaSource.readyState === "open") {
        var e = this.details, s = this.hls, t = this.media, o = this.mediaSource, u = e.fragments[0].start + e.totalduration, n = t.duration, c = Object(D.isFiniteNumber)(o.duration) ? o.duration : 0;
        e.live && s.config.liveDurationInfinity ? (S.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), o.duration = 1 / 0, this.updateSeekableRange(e)) : (u > c && u > n || !Object(D.isFiniteNumber)(n)) && (S.logger.log("[buffer-controller]: Updating Media Source duration to " + u.toFixed(3)), o.duration = u);
      }
    }, l.updateSeekableRange = function(e) {
      var s = this.mediaSource, t = e.fragments;
      if (t.length && e.live && s != null && s.setLiveSeekableRange) {
        var o = Math.max(0, t[0].start), u = Math.max(o, o + e.totalduration);
        s.setLiveSeekableRange(o, u);
      }
    }, l.checkPendingTracks = function() {
      var e = this.bufferCodecEventsExpected, s = this.operationQueue, t = this.pendingTracks, o = Object.keys(t).length;
      if (o && !e || o === 2) {
        this.createSourceBuffers(t), this.pendingTracks = {};
        var u = this.getSourceBufferTypes();
        if (u.length === 0)
          return void this.hls.trigger(y.Events.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: !0, reason: "could not create source buffer for media codec(s)" });
        u.forEach(function(n) {
          s.executeNext(n);
        });
      }
    }, l.createSourceBuffers = function(e) {
      var s = this.sourceBuffer, t = this.mediaSource;
      if (!t)
        throw Error("createSourceBuffers called when mediaSource was null");
      var o = 0;
      for (var u in e)
        if (!s[u]) {
          var n = e[u];
          if (!n)
            throw Error("source buffer exists for track " + u + ", however track does not");
          var c = n.levelCodec || n.codec, p = n.container + ";codecs=" + c;
          S.logger.log("[buffer-controller]: creating sourceBuffer(" + p + ")");
          try {
            var m = s[u] = t.addSourceBuffer(p), g = u;
            this.addBufferListener(g, "updatestart", this._onSBUpdateStart), this.addBufferListener(g, "updateend", this._onSBUpdateEnd), this.addBufferListener(g, "error", this._onSBUpdateError), this.tracks[u] = { buffer: m, codec: c, container: n.container, levelCodec: n.levelCodec, id: n.id }, o++;
          } catch (i) {
            S.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + i.message), this.hls.trigger(y.Events.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: !1, error: i, mimeType: p });
          }
        }
      o && this.hls.trigger(y.Events.BUFFER_CREATED, { tracks: this.tracks });
    }, l._onSBUpdateStart = function(e) {
      this.operationQueue.current(e).onStart();
    }, l._onSBUpdateEnd = function(e) {
      var s = this.operationQueue;
      s.current(e).onComplete(), s.shiftAndExecuteNext(e);
    }, l._onSBUpdateError = function(e, s) {
      S.logger.error("[buffer-controller]: " + e + " SourceBuffer error", s), this.hls.trigger(y.Events.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1 });
      var t = this.operationQueue.current(e);
      t && t.onError(s);
    }, l.removeExecutor = function(e, s, t) {
      var o = this.media, u = this.mediaSource, n = this.operationQueue, c = this.sourceBuffer[e];
      if (!o || !u || !c)
        return S.logger.warn("[buffer-controller]: Attempting to remove from the " + e + " SourceBuffer, but it does not exist"), void n.shiftAndExecuteNext(e);
      var p = Object(D.isFiniteNumber)(o.duration) ? o.duration : 1 / 0, m = Object(D.isFiniteNumber)(u.duration) ? u.duration : 1 / 0, g = Math.max(0, s), i = Math.min(t, p, m);
      i > g ? (S.logger.log("[buffer-controller]: Removing [" + g + "," + i + "] from the " + e + " SourceBuffer"), console.assert(!c.updating, e + " sourceBuffer must not be updating"), c.remove(g, i)) : n.shiftAndExecuteNext(e);
    }, l.appendExecutor = function(e, s) {
      var t = this.operationQueue, o = this.sourceBuffer[s];
      if (!o)
        return S.logger.warn("[buffer-controller]: Attempting to append to the " + s + " SourceBuffer, but it does not exist"), void t.shiftAndExecuteNext(s);
      o.ended = !1, console.assert(!o.updating, s + " sourceBuffer must not be updating"), o.appendBuffer(e);
    }, l.blockBuffers = function(e, s) {
      var t = this;
      if (s === void 0 && (s = this.getSourceBufferTypes()), !s.length)
        return S.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve(e);
      var o = this.operationQueue, u = s.map(function(n) {
        return o.appendBlocker(n);
      });
      Promise.all(u).then(function() {
        e(), s.forEach(function(n) {
          var c = t.sourceBuffer[n];
          c && c.updating || o.shiftAndExecuteNext(n);
        });
      });
    }, l.getSourceBufferTypes = function() {
      return Object.keys(this.sourceBuffer);
    }, l.addBufferListener = function(e, s, t) {
      var o = this.sourceBuffer[e];
      if (o) {
        var u = t.bind(this, e);
        this.listeners[e].push({ event: s, listener: u }), o.addEventListener(s, u);
      }
    }, l.removeBufferListeners = function(e) {
      var s = this.sourceBuffer[e];
      s && this.listeners[e].forEach(function(t) {
        s.removeEventListener(t.event, t.listener);
      });
    }, _;
  }();
}, "./src/controller/buffer-operation-queue.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return y;
  });
  var D = f("./src/utils/logger.ts"), y = function() {
    function S(R) {
      this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = R;
    }
    var k = S.prototype;
    return k.append = function(R, L) {
      var a = this.queues[L];
      a.push(R), a.length === 1 && this.buffers[L] && this.executeNext(L);
    }, k.insertAbort = function(R, L) {
      this.queues[L].unshift(R), this.executeNext(L);
    }, k.appendBlocker = function(R) {
      var L, a = new Promise(function(v) {
        L = v;
      }), b = { execute: L, onStart: function() {
      }, onComplete: function() {
      }, onError: function() {
      } };
      return this.append(b, R), a;
    }, k.executeNext = function(R) {
      var L = this.buffers, a = this.queues, b = L[R], v = a[R];
      if (v.length) {
        var h = v[0];
        try {
          h.execute();
        } catch (E) {
          D.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), h.onError(E), b && b.updating || (v.shift(), this.executeNext(R));
        }
      }
    }, k.shiftAndExecuteNext = function(R) {
      this.queues[R].shift(), this.executeNext(R);
    }, k.current = function(R) {
      return this.queues[R][0];
    }, S;
  }();
}, "./src/controller/cap-level-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts");
  function y(k, R) {
    for (var L = 0; L < R.length; L++) {
      var a = R[L];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(k, a.key, a);
    }
  }
  var S = function() {
    function k(v) {
      this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = v, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
    }
    var R, L, a, b = k.prototype;
    return b.setStreamController = function(v) {
      this.streamController = v;
    }, b.destroy = function() {
      this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
    }, b.registerListeners = function() {
      var v = this.hls;
      v.on(D.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), v.on(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), v.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), v.on(D.Events.BUFFER_CODECS, this.onBufferCodecs, this), v.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
    }, b.unregisterListener = function() {
      var v = this.hls;
      v.off(D.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), v.off(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), v.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), v.off(D.Events.BUFFER_CODECS, this.onBufferCodecs, this), v.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
    }, b.onFpsDropLevelCapping = function(v, h) {
      k.isLevelAllowed(h.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(h.droppedLevel);
    }, b.onMediaAttaching = function(v, h) {
      this.media = h.media instanceof HTMLVideoElement ? h.media : null;
    }, b.onManifestParsed = function(v, h) {
      var E = this.hls;
      this.restrictedLevels = [], this.firstLevel = h.firstLevel, E.config.capLevelToPlayerSize && h.video && this.startCapping();
    }, b.onBufferCodecs = function(v, h) {
      this.hls.config.capLevelToPlayerSize && h.video && this.startCapping();
    }, b.onMediaDetaching = function() {
      this.stopCapping();
    }, b.detectPlayerSize = function() {
      if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
        var v = this.hls.levels;
        if (v.length) {
          var h = this.hls;
          h.autoLevelCapping = this.getMaxLevel(v.length - 1), h.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = h.autoLevelCapping;
        }
      }
    }, b.getMaxLevel = function(v) {
      var h = this, E = this.hls.levels;
      if (!E.length)
        return -1;
      var _ = E.filter(function(l, e) {
        return k.isLevelAllowed(e, h.restrictedLevels) && e <= v;
      });
      return this.clientRect = null, k.getMaxLevelByMediaSize(_, this.mediaWidth, this.mediaHeight);
    }, b.startCapping = function() {
      this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
    }, b.stopCapping = function() {
      this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
    }, b.getDimensions = function() {
      if (this.clientRect)
        return this.clientRect;
      var v = this.media, h = { width: 0, height: 0 };
      if (v) {
        var E = v.getBoundingClientRect();
        h.width = E.width, h.height = E.height, h.width || h.height || (h.width = E.right - E.left || v.width || 0, h.height = E.bottom - E.top || v.height || 0);
      }
      return this.clientRect = h, h;
    }, k.isLevelAllowed = function(v, h) {
      return h === void 0 && (h = []), h.indexOf(v) === -1;
    }, k.getMaxLevelByMediaSize = function(v, h, E) {
      if (!v || !v.length)
        return -1;
      for (var _, l, e = v.length - 1, s = 0; s < v.length; s += 1) {
        var t = v[s];
        if ((t.width >= h || t.height >= E) && (_ = t, !(l = v[s + 1]) || _.width !== l.width || _.height !== l.height)) {
          e = s;
          break;
        }
      }
      return e;
    }, R = k, a = [{ key: "contentScaleFactor", get: function() {
      var v = 1;
      try {
        v = self.devicePixelRatio;
      } catch {
      }
      return v;
    } }], (L = [{ key: "mediaWidth", get: function() {
      return this.getDimensions().width * k.contentScaleFactor;
    } }, { key: "mediaHeight", get: function() {
      return this.getDimensions().height * k.contentScaleFactor;
    } }]) && y(R.prototype, L), a && y(R, a), k;
  }();
  I.default = S;
}, "./src/controller/eme-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts"), y = f("./src/errors.ts"), S = f("./src/utils/logger.ts"), k = f("./src/utils/mediakeys-helper.ts");
  function R(a, b) {
    for (var v = 0; v < b.length; v++) {
      var h = b[v];
      h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
    }
  }
  var L = function() {
    function a(E) {
      this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = E, this._config = E.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
    }
    var b, v, h = a.prototype;
    return h.destroy = function() {
      this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null;
    }, h._registerListeners = function() {
      this.hls.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(D.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this);
    }, h._unregisterListeners = function() {
      this.hls.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(D.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this);
    }, h.getLicenseServerUrl = function(E) {
      switch (E) {
        case k.KeySystems.WIDEVINE:
          if (!this._widevineLicenseUrl)
            break;
          return this._widevineLicenseUrl;
      }
      throw new Error('no license server URL configured for key-system "' + E + '"');
    }, h._attemptKeySystemAccess = function(E, _, l) {
      var e = this, s = function(o, u, n, c) {
        switch (o) {
          case k.KeySystems.WIDEVINE:
            return function(p, m, g) {
              var i = { audioCapabilities: [], videoCapabilities: [] };
              return p.forEach(function(r) {
                i.audioCapabilities.push({ contentType: 'audio/mp4; codecs="' + r + '"', robustness: g.audioRobustness || "" });
              }), m.forEach(function(r) {
                i.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + r + '"', robustness: g.videoRobustness || "" });
              }), [i];
            }(u, n, c);
          default:
            throw new Error("Unknown key-system: " + o);
        }
      }(E, _, l, this._drmSystemOptions);
      S.logger.log("Requesting encrypted media key-system access");
      var t = this.requestMediaKeySystemAccess(E, s);
      this.mediaKeysPromise = t.then(function(o) {
        return e._onMediaKeySystemAccessObtained(E, o);
      }), t.catch(function(o) {
        S.logger.error('Failed to obtain key-system "' + E + '" access:', o);
      });
    }, h._onMediaKeySystemAccessObtained = function(E, _) {
      var l = this;
      S.logger.log('Access for key-system "' + E + '" obtained');
      var e = { mediaKeysSessionInitialized: !1, mediaKeySystemAccess: _, mediaKeySystemDomain: E };
      this._mediaKeysList.push(e);
      var s = Promise.resolve().then(function() {
        return _.createMediaKeys();
      }).then(function(t) {
        return e.mediaKeys = t, S.logger.log('Media-keys created for key-system "' + E + '"'), l._onMediaKeysCreated(), t;
      });
      return s.catch(function(t) {
        S.logger.error("Failed to create media-keys:", t);
      }), s;
    }, h._onMediaKeysCreated = function() {
      var E = this;
      this._mediaKeysList.forEach(function(_) {
        _.mediaKeysSession || (_.mediaKeysSession = _.mediaKeys.createSession(), E._onNewMediaKeySession(_.mediaKeysSession));
      });
    }, h._onNewMediaKeySession = function(E) {
      var _ = this;
      S.logger.log("New key-system session " + E.sessionId), E.addEventListener("message", function(l) {
        _._onKeySessionMessage(E, l.message);
      }, !1);
    }, h._onKeySessionMessage = function(E, _) {
      S.logger.log("Got EME message event, creating license request"), this._requestLicense(_, function(l) {
        S.logger.log("Received license data (length: " + (l && l.byteLength) + "), updating key-session"), E.update(l);
      });
    }, h.onMediaEncrypted = function(E) {
      var _ = this;
      if (S.logger.log('Media is encrypted using "' + E.initDataType + '" init data type'), !this.mediaKeysPromise)
        return S.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: !0 });
      var l = function(e) {
        _._media && (_._attemptSetMediaKeys(e), _._generateRequestWithPreferredKeySession(E.initDataType, E.initData));
      };
      this.mediaKeysPromise.then(l).catch(l);
    }, h._attemptSetMediaKeys = function(E) {
      if (!this._media)
        throw new Error("Attempted to set mediaKeys without first attaching a media element");
      if (!this._hasSetMediaKeys) {
        var _ = this._mediaKeysList[0];
        if (!_ || !_.mediaKeys)
          return S.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: !0 });
        S.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(_.mediaKeys), this._hasSetMediaKeys = !0;
      }
    }, h._generateRequestWithPreferredKeySession = function(E, _) {
      var l = this, e = this._mediaKeysList[0];
      if (!e)
        return S.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
      if (e.mediaKeysSessionInitialized)
        S.logger.warn("Key-Session already initialized but requested again");
      else {
        var s = e.mediaKeysSession;
        if (!s)
          return S.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: !0 });
        if (!_)
          return S.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA, fatal: !0 });
        S.logger.log('Generating key-session request for "' + E + '" init data type'), e.mediaKeysSessionInitialized = !0, s.generateRequest(E, _).then(function() {
          S.logger.debug("Key-session generation succeeded");
        }).catch(function(t) {
          S.logger.error("Error generating key-session request:", t), l.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: !1 });
        });
      }
    }, h._createLicenseXhr = function(E, _, l) {
      var e = new XMLHttpRequest();
      e.responseType = "arraybuffer", e.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, e, E, _, l);
      var s = this._licenseXhrSetup;
      if (s)
        try {
          s.call(this.hls, e, E), s = void 0;
        } catch (t) {
          S.logger.error(t);
        }
      try {
        e.readyState || e.open("POST", E, !0), s && s.call(this.hls, e, E);
      } catch (t) {
        throw new Error("issue setting up KeySystem license XHR " + t);
      }
      return e;
    }, h._onLicenseRequestReadyStageChange = function(E, _, l, e) {
      switch (E.readyState) {
        case 4:
          if (E.status === 200) {
            this._requestLicenseFailureCount = 0, S.logger.log("License request succeeded");
            var s = E.response, t = this._licenseResponseCallback;
            if (t)
              try {
                s = t.call(this.hls, E, _);
              } catch (u) {
                S.logger.error(u);
              }
            e(s);
          } else {
            if (S.logger.error("License Request XHR failed (" + _ + "). Status: " + E.status + " (" + E.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3)
              return void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 });
            var o = 3 - this._requestLicenseFailureCount + 1;
            S.logger.warn("Retrying license request, " + o + " attempts left"), this._requestLicense(l, e);
          }
      }
    }, h._generateLicenseRequestChallenge = function(E, _) {
      switch (E.mediaKeySystemDomain) {
        case k.KeySystems.WIDEVINE:
          return _;
      }
      throw new Error("unsupported key-system: " + E.mediaKeySystemDomain);
    }, h._requestLicense = function(E, _) {
      S.logger.log("Requesting content license for key-system");
      var l = this._mediaKeysList[0];
      if (!l)
        return S.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
      try {
        var e = this.getLicenseServerUrl(l.mediaKeySystemDomain), s = this._createLicenseXhr(e, E, _);
        S.logger.log("Sending license request to URL: " + e);
        var t = this._generateLicenseRequestChallenge(l, E);
        s.send(t);
      } catch (o) {
        S.logger.error("Failure requesting DRM license: " + o), this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.KEY_SYSTEM_ERROR, details: y.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 });
      }
    }, h.onMediaAttached = function(E, _) {
      if (this._emeEnabled) {
        var l = _.media;
        this._media = l, l.addEventListener("encrypted", this._onMediaEncrypted);
      }
    }, h.onMediaDetached = function() {
      var E = this._media, _ = this._mediaKeysList;
      E && (E.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(_.map(function(l) {
        if (l.mediaKeysSession)
          return l.mediaKeysSession.close().catch(function() {
          });
      })).then(function() {
        return E.setMediaKeys(null);
      }).catch(function() {
      }));
    }, h.onManifestParsed = function(E, _) {
      if (this._emeEnabled) {
        var l = _.levels.map(function(s) {
          return s.audioCodec;
        }).filter(function(s) {
          return !!s;
        }), e = _.levels.map(function(s) {
          return s.videoCodec;
        }).filter(function(s) {
          return !!s;
        });
        this._attemptKeySystemAccess(k.KeySystems.WIDEVINE, l, e);
      }
    }, b = a, (v = [{ key: "requestMediaKeySystemAccess", get: function() {
      if (!this._requestMediaKeySystemAccess)
        throw new Error("No requestMediaKeySystemAccess function configured");
      return this._requestMediaKeySystemAccess;
    } }]) && R(b.prototype, v), a;
  }();
  I.default = L;
}, "./src/controller/fps-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts"), y = f("./src/utils/logger.ts"), S = function() {
    function k(L) {
      this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = L, this.registerListeners();
    }
    var R = k.prototype;
    return R.setStreamController = function(L) {
      this.streamController = L;
    }, R.registerListeners = function() {
      this.hls.on(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
    }, R.unregisterListeners = function() {
      this.hls.off(D.Events.MEDIA_ATTACHING, this.onMediaAttaching);
    }, R.destroy = function() {
      this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
    }, R.onMediaAttaching = function(L, a) {
      var b = this.hls.config;
      if (b.capLevelOnFPSDrop) {
        var v = a.media instanceof self.HTMLVideoElement ? a.media : null;
        this.media = v, v && typeof v.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), b.fpsDroppedMonitoringPeriod);
      }
    }, R.checkFPS = function(L, a, b) {
      var v = performance.now();
      if (a) {
        if (this.lastTime) {
          var h = v - this.lastTime, E = b - this.lastDroppedFrames, _ = a - this.lastDecodedFrames, l = 1e3 * E / h, e = this.hls;
          if (e.trigger(D.Events.FPS_DROP, { currentDropped: E, currentDecoded: _, totalDroppedFrames: b }), l > 0 && E > e.config.fpsDroppedMonitoringThreshold * _) {
            var s = e.currentLevel;
            y.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + s), s > 0 && (e.autoLevelCapping === -1 || e.autoLevelCapping >= s) && (s -= 1, e.trigger(D.Events.FPS_DROP_LEVEL_CAPPING, { level: s, droppedLevel: e.currentLevel }), e.autoLevelCapping = s, this.streamController.nextLevelSwitch());
          }
        }
        this.lastTime = v, this.lastDroppedFrames = b, this.lastDecodedFrames = a;
      }
    }, R.checkFPSInterval = function() {
      var L = this.media;
      if (L)
        if (this.isVideoPlaybackQualityAvailable) {
          var a = L.getVideoPlaybackQuality();
          this.checkFPS(L, a.totalVideoFrames, a.droppedVideoFrames);
        } else
          this.checkFPS(L, L.webkitDecodedFrameCount, L.webkitDroppedFrameCount);
    }, k;
  }();
  I.default = S;
}, "./src/controller/fragment-finders.ts": function(V, I, f) {
  f.r(I), f.d(I, "findFragmentByPDT", function() {
    return S;
  }), f.d(I, "findFragmentByPTS", function() {
    return k;
  }), f.d(I, "fragmentWithinToleranceTest", function() {
    return R;
  }), f.d(I, "pdtWithinToleranceTest", function() {
    return L;
  }), f.d(I, "findFragWithCC", function() {
    return a;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/binary-search.ts");
  function S(b, v, h) {
    if (v === null || !Array.isArray(b) || !b.length || !Object(D.isFiniteNumber)(v) || v < (b[0].programDateTime || 0) || v >= (b[b.length - 1].endProgramDateTime || 0))
      return null;
    h = h || 0;
    for (var E = 0; E < b.length; ++E) {
      var _ = b[E];
      if (L(v, h, _))
        return _;
    }
    return null;
  }
  function k(b, v, h, E) {
    h === void 0 && (h = 0), E === void 0 && (E = 0);
    var _ = null;
    if (b ? _ = v[b.sn - v[0].sn + 1] || null : h === 0 && v[0].start === 0 && (_ = v[0]), _ && R(h, E, _) === 0)
      return _;
    var l = y.default.search(v, R.bind(null, h, E));
    return l || _;
  }
  function R(b, v, h) {
    b === void 0 && (b = 0), v === void 0 && (v = 0);
    var E = Math.min(v, h.duration + (h.deltaPTS ? h.deltaPTS : 0));
    return h.start + h.duration - E <= b ? 1 : h.start - E > b && h.start ? -1 : 0;
  }
  function L(b, v, h) {
    var E = 1e3 * Math.min(v, h.duration + (h.deltaPTS ? h.deltaPTS : 0));
    return (h.endProgramDateTime || 0) - E > b;
  }
  function a(b, v) {
    return y.default.search(b, function(h) {
      return h.cc < v ? 1 : h.cc > v ? -1 : 0;
    });
  }
}, "./src/controller/fragment-tracker.ts": function(V, I, f) {
  f.r(I), f.d(I, "FragmentState", function() {
    return D;
  }), f.d(I, "FragmentTracker", function() {
    return R;
  });
  var D, y, S = f("./src/events.ts"), k = f("./src/types/loader.ts");
  (y = D || (D = {})).NOT_LOADED = "NOT_LOADED", y.BACKTRACKED = "BACKTRACKED", y.APPENDING = "APPENDING", y.PARTIAL = "PARTIAL", y.OK = "OK";
  var R = function() {
    function b(h) {
      this.activeFragment = null, this.activeParts = null, this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hls = h, this._registerListeners();
    }
    var v = b.prototype;
    return v._registerListeners = function() {
      var h = this.hls;
      h.on(S.Events.BUFFER_APPENDED, this.onBufferAppended, this), h.on(S.Events.FRAG_BUFFERED, this.onFragBuffered, this), h.on(S.Events.FRAG_LOADED, this.onFragLoaded, this);
    }, v._unregisterListeners = function() {
      var h = this.hls;
      h.off(S.Events.BUFFER_APPENDED, this.onBufferAppended, this), h.off(S.Events.FRAG_BUFFERED, this.onFragBuffered, this), h.off(S.Events.FRAG_LOADED, this.onFragLoaded, this);
    }, v.destroy = function() {
      this._unregisterListeners(), this.fragments = this.timeRanges = null;
    }, v.getAppendedFrag = function(h, E) {
      if (E === k.PlaylistLevelType.MAIN) {
        var _ = this.activeFragment, l = this.activeParts;
        if (!_)
          return null;
        if (l)
          for (var e = l.length; e--; ) {
            var s = l[e], t = s ? s.end : _.appendedPTS;
            if (s.start <= h && t !== void 0 && h <= t)
              return e > 9 && (this.activeParts = l.slice(e - 9)), s;
          }
        else if (_.start <= h && _.appendedPTS !== void 0 && h <= _.appendedPTS)
          return _;
      }
      return this.getBufferedFrag(h, E);
    }, v.getBufferedFrag = function(h, E) {
      for (var _ = this.fragments, l = Object.keys(_), e = l.length; e--; ) {
        var s = _[l[e]];
        if ((s == null ? void 0 : s.body.type) === E && s.buffered) {
          var t = s.body;
          if (t.start <= h && h <= t.end)
            return t;
        }
      }
      return null;
    }, v.detectEvictedFragments = function(h, E, _) {
      var l = this;
      Object.keys(this.fragments).forEach(function(e) {
        var s = l.fragments[e];
        if (s)
          if (s.buffered) {
            var t = s.range[h];
            t && t.time.some(function(o) {
              var u = !l.isTimeBuffered(o.startPTS, o.endPTS, E);
              return u && l.removeFragment(s.body), u;
            });
          } else
            s.body.type === _ && l.removeFragment(s.body);
      });
    }, v.detectPartialFragments = function(h) {
      var E = this, _ = this.timeRanges, l = h.frag, e = h.part;
      if (_ && l.sn !== "initSegment") {
        var s = a(l), t = this.fragments[s];
        t && (Object.keys(_).forEach(function(o) {
          var u = l.elementaryStreams[o];
          if (u) {
            var n = _[o], c = e !== null || u.partial === !0;
            t.range[o] = E.getBufferedTimes(l, e, c, n);
          }
        }), t.backtrack = t.loaded = null, Object.keys(t.range).length ? t.buffered = !0 : this.removeFragment(t.body));
      }
    }, v.fragBuffered = function(h) {
      var E = a(h), _ = this.fragments[E];
      _ && (_.backtrack = _.loaded = null, _.buffered = !0);
    }, v.getBufferedTimes = function(h, E, _, l) {
      for (var e = { time: [], partial: _ }, s = E ? E.start : h.start, t = E ? E.end : h.end, o = h.minEndPTS || t, u = h.maxStartPTS || s, n = 0; n < l.length; n++) {
        var c = l.start(n) - this.bufferPadding, p = l.end(n) + this.bufferPadding;
        if (u >= c && o <= p) {
          e.time.push({ startPTS: Math.max(s, l.start(n)), endPTS: Math.min(t, l.end(n)) });
          break;
        }
        if (s < p && t > c)
          e.partial = !0, e.time.push({ startPTS: Math.max(s, l.start(n)), endPTS: Math.min(t, l.end(n)) });
        else if (t <= c)
          break;
      }
      return e;
    }, v.getPartialFragment = function(h) {
      var E, _, l, e = null, s = 0, t = this.bufferPadding, o = this.fragments;
      return Object.keys(o).forEach(function(u) {
        var n = o[u];
        n && L(n) && (_ = n.body.start - t, l = n.body.end + t, h >= _ && h <= l && (E = Math.min(h - _, l - h), s <= E && (e = n.body, s = E)));
      }), e;
    }, v.getState = function(h) {
      var E = a(h), _ = this.fragments[E];
      return _ ? _.buffered ? L(_) ? D.PARTIAL : D.OK : _.backtrack ? D.BACKTRACKED : D.APPENDING : D.NOT_LOADED;
    }, v.backtrack = function(h, E) {
      var _ = a(h), l = this.fragments[_];
      if (!l || l.backtrack)
        return null;
      var e = l.backtrack = E || l.loaded;
      return l.loaded = null, e;
    }, v.getBacktrackData = function(h) {
      var E = a(h), _ = this.fragments[E];
      if (_) {
        var l, e = _.backtrack;
        if (e != null && (l = e.payload) !== null && l !== void 0 && l.byteLength)
          return e;
        this.removeFragment(h);
      }
      return null;
    }, v.isTimeBuffered = function(h, E, _) {
      for (var l, e, s = 0; s < _.length; s++) {
        if (l = _.start(s) - this.bufferPadding, e = _.end(s) + this.bufferPadding, h >= l && E <= e)
          return !0;
        if (E <= l)
          return !1;
      }
      return !1;
    }, v.onFragLoaded = function(h, E) {
      var _ = E.frag, l = E.part;
      if (_.sn !== "initSegment" && !_.bitrateTest && !l) {
        var e = a(_);
        this.fragments[e] = { body: _, loaded: E, backtrack: null, buffered: !1, range: /* @__PURE__ */ Object.create(null) };
      }
    }, v.onBufferAppended = function(h, E) {
      var _ = this, l = E.frag, e = E.part, s = E.timeRanges;
      if (l.type === k.PlaylistLevelType.MAIN)
        if (this.activeFragment = l, e) {
          var t = this.activeParts;
          t || (this.activeParts = t = []), t.push(e);
        } else
          this.activeParts = null;
      this.timeRanges = s, Object.keys(s).forEach(function(o) {
        var u = s[o];
        if (_.detectEvictedFragments(o, u), !e)
          for (var n = 0; n < u.length; n++)
            l.appendedPTS = Math.max(u.end(n), l.appendedPTS || 0);
      });
    }, v.onFragBuffered = function(h, E) {
      this.detectPartialFragments(E);
    }, v.hasFragment = function(h) {
      var E = a(h);
      return !!this.fragments[E];
    }, v.removeFragmentsInRange = function(h, E, _) {
      var l = this;
      Object.keys(this.fragments).forEach(function(e) {
        var s = l.fragments[e];
        if (s && s.buffered) {
          var t = s.body;
          t.type === _ && t.start < E && t.end > h && l.removeFragment(t);
        }
      });
    }, v.removeFragment = function(h) {
      var E = a(h);
      h.stats.loaded = 0, h.clearElementaryStreamInfo(), delete this.fragments[E];
    }, v.removeAllFragments = function() {
      this.fragments = /* @__PURE__ */ Object.create(null), this.activeFragment = null, this.activeParts = null;
    }, b;
  }();
  function L(b) {
    var v, h;
    return b.buffered && (((v = b.range.video) === null || v === void 0 ? void 0 : v.partial) || ((h = b.range.audio) === null || h === void 0 ? void 0 : h.partial));
  }
  function a(b) {
    return b.type + "_" + b.level + "_" + b.urlId + "_" + b.sn;
  }
}, "./src/controller/gap-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "STALL_MINIMUM_DURATION_MS", function() {
    return R;
  }), f.d(I, "MAX_START_GAP_JUMP", function() {
    return L;
  }), f.d(I, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
    return a;
  }), f.d(I, "SKIP_BUFFER_RANGE_START", function() {
    return b;
  }), f.d(I, "default", function() {
    return v;
  });
  var D = f("./src/utils/buffer-helper.ts"), y = f("./src/errors.ts"), S = f("./src/events.ts"), k = f("./src/utils/logger.ts"), R = 250, L = 2, a = 0.1, b = 0.05, v = function() {
    function h(_, l, e, s) {
      this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = _, this.media = l, this.fragmentTracker = e, this.hls = s;
    }
    var E = h.prototype;
    return E.destroy = function() {
      this.hls = this.fragmentTracker = this.media = null;
    }, E.poll = function(_) {
      var l = this.config, e = this.media, s = this.stalled, t = e.currentTime, o = e.seeking, u = this.seeking && !o, n = !this.seeking && o;
      if (this.seeking = o, t === _) {
        if ((n || u) && (this.stalled = null), !e.paused && !e.ended && e.playbackRate !== 0 && D.BufferHelper.getBuffered(e).length) {
          var c = D.BufferHelper.bufferInfo(e, t, 0), p = c.len > 0, m = c.nextStart || 0;
          if (p || m) {
            if (o) {
              var g = c.len > L, i = !m || m - t > L && !this.fragmentTracker.getPartialFragment(t);
              if (g || i)
                return;
              this.moved = !1;
            }
            if (!this.moved && this.stalled !== null) {
              var r, d = Math.max(m, c.start || 0) - t, x = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, T = !(x == null || (r = x.details) === null || r === void 0) && r.live ? 2 * x.details.targetduration : L;
              if (d > 0 && d <= T)
                return void this._trySkipBufferHole(null);
            }
            var A = self.performance.now();
            if (s !== null) {
              var C = A - s;
              !o && C >= R && this._reportStall(c.len);
              var w = D.BufferHelper.bufferInfo(e, t, l.maxBufferHole);
              this._tryFixBufferStall(w, C);
            } else
              this.stalled = A;
          }
        }
      } else if (this.moved = !0, s !== null) {
        if (this.stallReported) {
          var O = self.performance.now() - s;
          k.logger.warn("playback not stuck anymore @" + t + ", after " + Math.round(O) + "ms"), this.stallReported = !1;
        }
        this.stalled = null, this.nudgeRetry = 0;
      }
    }, E._tryFixBufferStall = function(_, l) {
      var e = this.config, s = this.fragmentTracker, t = this.media.currentTime, o = s.getPartialFragment(t);
      o && this._trySkipBufferHole(o) || _.len > e.maxBufferHole && l > 1e3 * e.highBufferWatchdogPeriod && (k.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
    }, E._reportStall = function(_) {
      var l = this.hls, e = this.media;
      this.stallReported || (this.stallReported = !0, k.logger.warn("Playback stalling at @" + e.currentTime + " due to low buffer (buffer=" + _ + ")"), l.trigger(S.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !1, buffer: _ }));
    }, E._trySkipBufferHole = function(_) {
      for (var l = this.config, e = this.hls, s = this.media, t = s.currentTime, o = 0, u = D.BufferHelper.getBuffered(s), n = 0; n < u.length; n++) {
        var c = u.start(n);
        if (t + l.maxBufferHole >= o && t < c) {
          var p = Math.max(c + b, s.currentTime + a);
          return k.logger.warn("skipping hole, adjusting currentTime from " + t + " to " + p), this.moved = !0, this.stalled = null, s.currentTime = p, _ && e.trigger(S.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: !1, reason: "fragment loaded with buffer holes, seeking from " + t + " to " + p, frag: _ }), p;
        }
        o = u.end(n);
      }
      return 0;
    }, E._tryNudgeBuffer = function() {
      var _ = this.config, l = this.hls, e = this.media, s = e.currentTime, t = (this.nudgeRetry || 0) + 1;
      if (this.nudgeRetry = t, t < _.nudgeMaxRetry) {
        var o = s + t * _.nudgeOffset;
        k.logger.warn("Nudging 'currentTime' from " + s + " to " + o), e.currentTime = o, l.trigger(S.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: !1 });
      } else
        k.logger.error("Playhead still not moving while enough data buffered @" + s + " after " + _.nudgeMaxRetry + " nudges"), l.trigger(S.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !0 });
    }, h;
  }();
}, "./src/controller/id3-track-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts"), y = f("./src/utils/texttrack-utils.ts"), S = f("./src/demux/id3.ts"), k = function() {
    function R(a) {
      this.hls = void 0, this.id3Track = null, this.media = null, this.hls = a, this._registerListeners();
    }
    var L = R.prototype;
    return L.destroy = function() {
      this._unregisterListeners();
    }, L._registerListeners = function() {
      var a = this.hls;
      a.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), a.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), a.on(D.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), a.on(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, L._unregisterListeners = function() {
      var a = this.hls;
      a.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), a.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), a.off(D.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), a.off(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, L.onMediaAttached = function(a, b) {
      this.media = b.media;
    }, L.onMediaDetaching = function() {
      this.id3Track && (Object(y.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null);
    }, L.getID3Track = function(a) {
      if (this.media) {
        for (var b = 0; b < a.length; b++) {
          var v = a[b];
          if (v.kind === "metadata" && v.label === "id3")
            return Object(y.sendAddTrackEvent)(v, this.media), v;
        }
        return this.media.addTextTrack("metadata", "id3");
      }
    }, L.onFragParsingMetadata = function(a, b) {
      if (this.media) {
        var v = b.frag, h = b.samples;
        this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
        for (var E = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, _ = 0; _ < h.length; _++) {
          var l = S.getID3Frames(h[_].data);
          if (l) {
            var e = h[_].pts, s = _ < h.length - 1 ? h[_ + 1].pts : v.end;
            s - e <= 0 && (s = e + 0.25);
            for (var t = 0; t < l.length; t++) {
              var o = l[t];
              if (!S.isTimeStampFrame(o)) {
                var u = new E(e, s, "");
                u.value = o, this.id3Track.addCue(u);
              }
            }
          }
        }
      }
    }, L.onBufferFlushing = function(a, b) {
      var v = b.startOffset, h = b.endOffset, E = b.type;
      if (!E || E === "audio") {
        var _ = this.id3Track;
        _ && Object(y.removeCuesInRange)(_, v, h);
      }
    }, R;
  }();
  I.default = k;
}, "./src/controller/latency-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return R;
  });
  var D = f("./src/errors.ts"), y = f("./src/events.ts"), S = f("./src/utils/logger.ts");
  function k(L, a) {
    for (var b = 0; b < a.length; b++) {
      var v = a[b];
      v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(L, v.key, v);
    }
  }
  var R = function() {
    function L(h) {
      var E = this;
      this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
        return E.timeupdate();
      }, this.hls = h, this.config = h.config, this.registerListeners();
    }
    var a, b, v = L.prototype;
    return v.destroy = function() {
      this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
    }, v.registerListeners = function() {
      this.hls.on(y.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(y.Events.ERROR, this.onError, this);
    }, v.unregisterListeners = function() {
      this.hls.off(y.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(y.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(y.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(y.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(y.Events.ERROR, this.onError);
    }, v.onMediaAttached = function(h, E) {
      this.media = E.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
    }, v.onMediaDetaching = function() {
      this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
    }, v.onManifestLoading = function() {
      this.levelDetails = null, this._latency = null, this.stallCount = 0;
    }, v.onLevelUpdated = function(h, E) {
      var _ = E.details;
      this.levelDetails = _, _.advanced && this.timeupdate(), !_.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
    }, v.onError = function(h, E) {
      E.details === D.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, S.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
    }, v.timeupdate = function() {
      var h = this.media, E = this.levelDetails;
      if (h && E) {
        this.currentTime = h.currentTime;
        var _ = this.computeLatency();
        if (_ !== null) {
          this._latency = _;
          var l = this.config, e = l.lowLatencyMode, s = l.maxLiveSyncPlaybackRate;
          if (e && s !== 1) {
            var t = this.targetLatency;
            if (t !== null) {
              var o = _ - t, u = o < Math.min(this.maxLatency, t + E.targetduration);
              if (E.live && u && o > 0.05 && this.forwardBufferLength > 1) {
                var n = Math.min(2, Math.max(1, s)), c = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
                h.playbackRate = Math.min(n, Math.max(1, c));
              } else
                h.playbackRate !== 1 && h.playbackRate !== 0 && (h.playbackRate = 1);
            }
          }
        }
      }
    }, v.estimateLiveEdge = function() {
      var h = this.levelDetails;
      return h === null ? null : h.edge + h.age;
    }, v.computeLatency = function() {
      var h = this.estimateLiveEdge();
      return h === null ? null : h - this.currentTime;
    }, a = L, (b = [{ key: "latency", get: function() {
      return this._latency || 0;
    } }, { key: "maxLatency", get: function() {
      var h = this.config, E = this.levelDetails;
      return h.liveMaxLatencyDuration !== void 0 ? h.liveMaxLatencyDuration : E ? h.liveMaxLatencyDurationCount * E.targetduration : 0;
    } }, { key: "targetLatency", get: function() {
      var h = this.levelDetails;
      if (h === null)
        return null;
      var E = h.holdBack, _ = h.partHoldBack, l = h.targetduration, e = this.config, s = e.liveSyncDuration, t = e.liveSyncDurationCount, o = e.lowLatencyMode, u = this.hls.userConfig, n = o && _ || E;
      (u.liveSyncDuration || u.liveSyncDurationCount || n === 0) && (n = s !== void 0 ? s : t * l);
      var c = l;
      return n + Math.min(1 * this.stallCount, c);
    } }, { key: "liveSyncPosition", get: function() {
      var h = this.estimateLiveEdge(), E = this.targetLatency, _ = this.levelDetails;
      if (h === null || E === null || _ === null)
        return null;
      var l = _.edge, e = h - E - this.edgeStalled, s = l - _.totalduration, t = l - (this.config.lowLatencyMode && _.partTarget || _.targetduration);
      return Math.min(Math.max(s, e), t);
    } }, { key: "drift", get: function() {
      var h = this.levelDetails;
      return h === null ? 1 : h.drift;
    } }, { key: "edgeStalled", get: function() {
      var h = this.levelDetails;
      if (h === null)
        return 0;
      var E = 3 * (this.config.lowLatencyMode && h.partTarget || h.targetduration);
      return Math.max(h.age - E, 0);
    } }, { key: "forwardBufferLength", get: function() {
      var h = this.media, E = this.levelDetails;
      if (!h || !E)
        return 0;
      var _ = h.buffered.length;
      return _ ? h.buffered.end(_ - 1) : E.edge - this.currentTime;
    } }]) && k(a.prototype, b), L;
  }();
}, "./src/controller/level-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return _;
  });
  var D = f("./src/types/level.ts"), y = f("./src/events.ts"), S = f("./src/errors.ts"), k = f("./src/utils/codecs.ts"), R = f("./src/controller/level-helper.ts"), L = f("./src/controller/base-playlist-controller.ts"), a = f("./src/types/loader.ts");
  function b() {
    return (b = Object.assign || function(l) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e];
        for (var t in s)
          Object.prototype.hasOwnProperty.call(s, t) && (l[t] = s[t]);
      }
      return l;
    }).apply(this, arguments);
  }
  function v(l, e) {
    for (var s = 0; s < e.length; s++) {
      var t = e[s];
      t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(l, t.key, t);
    }
  }
  function h(l, e) {
    return (h = Object.setPrototypeOf || function(s, t) {
      return s.__proto__ = t, s;
    })(l, e);
  }
  var E = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), _ = function(l) {
    var e, s;
    function t(c) {
      var p;
      return (p = l.call(this, c, "[level-controller]") || this)._levels = [], p._firstLevel = -1, p._startLevel = void 0, p.currentLevelIndex = -1, p.manualLevelIndex = -1, p.onParsedComplete = void 0, p._registerListeners(), p;
    }
    s = l, (e = t).prototype = Object.create(s.prototype), e.prototype.constructor = e, h(e, s);
    var o, u, n = t.prototype;
    return n._registerListeners = function() {
      var c = this.hls;
      c.on(y.Events.MANIFEST_LOADED, this.onManifestLoaded, this), c.on(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), c.on(y.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), c.on(y.Events.FRAG_LOADED, this.onFragLoaded, this), c.on(y.Events.ERROR, this.onError, this);
    }, n._unregisterListeners = function() {
      var c = this.hls;
      c.off(y.Events.MANIFEST_LOADED, this.onManifestLoaded, this), c.off(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), c.off(y.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), c.off(y.Events.FRAG_LOADED, this.onFragLoaded, this), c.off(y.Events.ERROR, this.onError, this);
    }, n.destroy = function() {
      this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, l.prototype.destroy.call(this);
    }, n.startLoad = function() {
      this._levels.forEach(function(c) {
        c.loadError = 0;
      }), l.prototype.startLoad.call(this);
    }, n.onManifestLoaded = function(c, p) {
      var m, g, i = [], r = [], d = [], x = {}, T = !1, A = !1, C = !1;
      if (p.levels.forEach(function(F) {
        var B = F.attrs;
        T = T || !(!F.width || !F.height), A = A || !!F.videoCodec, C = C || !!F.audioCodec, E && F.audioCodec && F.audioCodec.indexOf("mp4a.40.34") !== -1 && (F.audioCodec = void 0);
        var N = F.bitrate + "-" + F.attrs.RESOLUTION + "-" + F.attrs.CODECS;
        (g = x[N]) ? g.url.push(F.url) : (g = new D.Level(F), x[N] = g, i.push(g)), B && (B.AUDIO && Object(R.addGroupId)(g, "audio", B.AUDIO), B.SUBTITLES && Object(R.addGroupId)(g, "text", B.SUBTITLES));
      }), (T || A) && C && (i = i.filter(function(F) {
        var B = F.videoCodec, N = F.width, M = F.height;
        return !!B || !(!N || !M);
      })), i = i.filter(function(F) {
        var B = F.audioCodec, N = F.videoCodec;
        return (!B || Object(k.isCodecSupportedInMp4)(B, "audio")) && (!N || Object(k.isCodecSupportedInMp4)(N, "video"));
      }), p.audioTracks && (r = p.audioTracks.filter(function(F) {
        return !F.audioCodec || Object(k.isCodecSupportedInMp4)(F.audioCodec, "audio");
      }), Object(R.assignTrackIdsByGroup)(r)), p.subtitles && (d = p.subtitles, Object(R.assignTrackIdsByGroup)(d)), i.length > 0) {
        m = i[0].bitrate, i.sort(function(F, B) {
          return F.bitrate - B.bitrate;
        }), this._levels = i;
        for (var w = 0; w < i.length; w++)
          if (i[w].bitrate === m) {
            this._firstLevel = w, this.log("manifest loaded, " + i.length + " level(s) found, first bitrate: " + m);
            break;
          }
        var O = C && !A, P = { levels: i, audioTracks: r, subtitleTracks: d, firstLevel: this._firstLevel, stats: p.stats, audio: C, video: A, altAudio: !O && r.some(function(F) {
          return !!F.url;
        }) };
        this.hls.trigger(y.Events.MANIFEST_PARSED, P), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
      } else
        this.hls.trigger(y.Events.ERROR, { type: S.ErrorTypes.MEDIA_ERROR, details: S.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: p.url, reason: "no level with compatible codecs found in manifest" });
    }, n.onError = function(c, p) {
      if (l.prototype.onError.call(this, c, p), !p.fatal) {
        var m = p.context, g = this._levels[this.currentLevelIndex];
        if (m && (m.type === a.PlaylistContextType.AUDIO_TRACK && g.audioGroupIds && m.groupId === g.audioGroupIds[g.urlId] || m.type === a.PlaylistContextType.SUBTITLE_TRACK && g.textGroupIds && m.groupId === g.textGroupIds[g.urlId]))
          this.redundantFailover(this.currentLevelIndex);
        else {
          var i, r = !1, d = !0;
          switch (p.details) {
            case S.ErrorDetails.FRAG_LOAD_ERROR:
            case S.ErrorDetails.FRAG_LOAD_TIMEOUT:
            case S.ErrorDetails.KEY_LOAD_ERROR:
            case S.ErrorDetails.KEY_LOAD_TIMEOUT:
              if (p.frag) {
                var x = this._levels[p.frag.level];
                x ? (x.fragmentError++, x.fragmentError > this.hls.config.fragLoadingMaxRetry && (i = p.frag.level)) : i = p.frag.level;
              }
              break;
            case S.ErrorDetails.LEVEL_LOAD_ERROR:
            case S.ErrorDetails.LEVEL_LOAD_TIMEOUT:
              m && (m.deliveryDirectives && (d = !1), i = m.level), r = !0;
              break;
            case S.ErrorDetails.REMUX_ALLOC_ERROR:
              i = p.level, r = !0;
          }
          i !== void 0 && this.recoverLevel(p, i, r, d);
        }
      }
    }, n.recoverLevel = function(c, p, m, g) {
      var i = c.details, r = this._levels[p];
      if (r.loadError++, m) {
        if (!this.retryLoadingOrFail(c))
          return void (this.currentLevelIndex = -1);
        c.levelRetry = !0;
      }
      if (g) {
        var d = r.url.length;
        if (d > 1 && r.loadError < d)
          c.levelRetry = !0, this.redundantFailover(p);
        else if (this.manualLevelIndex === -1) {
          var x = p === 0 ? this._levels.length - 1 : p - 1;
          this.currentLevelIndex !== x && this._levels[x].loadError === 0 && (this.warn(i + ": switch to " + x), c.levelRetry = !0, this.hls.nextAutoLevel = x);
        }
      }
    }, n.redundantFailover = function(c) {
      var p = this._levels[c], m = p.url.length;
      if (m > 1) {
        var g = (p.urlId + 1) % m;
        this.warn("Switching to redundant URL-id " + g), this._levels.forEach(function(i) {
          i.urlId = g;
        }), this.level = c;
      }
    }, n.onFragLoaded = function(c, p) {
      var m = p.frag;
      if (m !== void 0 && m.type === a.PlaylistLevelType.MAIN) {
        var g = this._levels[m.level];
        g !== void 0 && (g.fragmentError = 0, g.loadError = 0);
      }
    }, n.onLevelLoaded = function(c, p) {
      var m, g, i = p.level, r = p.details, d = this._levels[i];
      if (!d)
        return this.warn("Invalid level index " + i), void ((g = p.deliveryDirectives) !== null && g !== void 0 && g.skip && (r.deltaUpdateFailed = !0));
      i === this.currentLevelIndex ? (d.fragmentError === 0 && (d.loadError = 0, this.retryCount = 0), this.playlistLoaded(i, p, d.details)) : (m = p.deliveryDirectives) !== null && m !== void 0 && m.skip && (r.deltaUpdateFailed = !0);
    }, n.onAudioTrackSwitched = function(c, p) {
      var m = this.hls.levels[this.currentLevelIndex];
      if (m && m.audioGroupIds) {
        for (var g = -1, i = this.hls.audioTracks[p.id].groupId, r = 0; r < m.audioGroupIds.length; r++)
          if (m.audioGroupIds[r] === i) {
            g = r;
            break;
          }
        g !== m.urlId && (m.urlId = g, this.startLoad());
      }
    }, n.loadPlaylist = function(c) {
      var p = this.currentLevelIndex, m = this._levels[p];
      if (this.canLoad && m && m.url.length > 0) {
        var g = m.urlId, i = m.url[g];
        if (c)
          try {
            i = c.addDirectives(i);
          } catch (r) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + r);
          }
        this.log("Attempt loading level index " + p + (c ? " at sn " + c.msn + " part " + c.part : "") + " with URL-id " + g + " " + i), this.clearTimer(), this.hls.trigger(y.Events.LEVEL_LOADING, { url: i, level: p, id: g, deliveryDirectives: c || null });
      }
    }, n.removeLevel = function(c, p) {
      var m = function(i, r) {
        return r !== p;
      }, g = this._levels.filter(function(i, r) {
        return r !== c || i.url.length > 1 && p !== void 0 && (i.url = i.url.filter(m), i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(m)), i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(m)), i.urlId = 0, !0);
      }).map(function(i, r) {
        var d = i.details;
        return d != null && d.fragments && d.fragments.forEach(function(x) {
          x.level = r;
        }), i;
      });
      this._levels = g, this.hls.trigger(y.Events.LEVELS_UPDATED, { levels: g });
    }, o = t, (u = [{ key: "levels", get: function() {
      return this._levels.length === 0 ? null : this._levels;
    } }, { key: "level", get: function() {
      return this.currentLevelIndex;
    }, set: function(c) {
      var p, m = this._levels;
      if (m.length !== 0 && (this.currentLevelIndex !== c || (p = m[c]) === null || p === void 0 || !p.details)) {
        if (c < 0 || c >= m.length) {
          var g = c < 0;
          if (this.hls.trigger(y.Events.ERROR, { type: S.ErrorTypes.OTHER_ERROR, details: S.ErrorDetails.LEVEL_SWITCH_ERROR, level: c, fatal: g, reason: "invalid level idx" }), g)
            return;
          c = Math.min(c, m.length - 1);
        }
        this.clearTimer();
        var i = this.currentLevelIndex, r = m[i], d = m[c];
        this.log("switching to level " + c + " from " + i), this.currentLevelIndex = c;
        var x = b({}, d, { level: c, maxBitrate: d.maxBitrate, uri: d.uri, urlId: d.urlId });
        delete x._urlId, this.hls.trigger(y.Events.LEVEL_SWITCHING, x);
        var T = d.details;
        if (!T || T.live) {
          var A = this.switchParams(d.uri, r == null ? void 0 : r.details);
          this.loadPlaylist(A);
        }
      }
    } }, { key: "manualLevel", get: function() {
      return this.manualLevelIndex;
    }, set: function(c) {
      this.manualLevelIndex = c, this._startLevel === void 0 && (this._startLevel = c), c !== -1 && (this.level = c);
    } }, { key: "firstLevel", get: function() {
      return this._firstLevel;
    }, set: function(c) {
      this._firstLevel = c;
    } }, { key: "startLevel", get: function() {
      if (this._startLevel === void 0) {
        var c = this.hls.config.startLevel;
        return c !== void 0 ? c : this._firstLevel;
      }
      return this._startLevel;
    }, set: function(c) {
      this._startLevel = c;
    } }, { key: "nextLoadLevel", get: function() {
      return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
    }, set: function(c) {
      this.level = c, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = c);
    } }]) && v(o.prototype, u), t;
  }(L.default);
}, "./src/controller/level-helper.ts": function(V, I, f) {
  f.r(I), f.d(I, "addGroupId", function() {
    return S;
  }), f.d(I, "assignTrackIdsByGroup", function() {
    return k;
  }), f.d(I, "updatePTS", function() {
    return R;
  }), f.d(I, "updateFragPTSDTS", function() {
    return a;
  }), f.d(I, "mergeDetails", function() {
    return b;
  }), f.d(I, "mapPartIntersection", function() {
    return v;
  }), f.d(I, "mapFragmentIntersection", function() {
    return h;
  }), f.d(I, "adjustSliding", function() {
    return E;
  }), f.d(I, "addSliding", function() {
    return _;
  }), f.d(I, "computeReloadInterval", function() {
    return l;
  }), f.d(I, "getFragmentWithSN", function() {
    return e;
  }), f.d(I, "getPartWith", function() {
    return s;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/logger.ts");
  function S(t, o, u) {
    switch (o) {
      case "audio":
        t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(u);
        break;
      case "text":
        t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(u);
    }
  }
  function k(t) {
    var o = {};
    t.forEach(function(u) {
      var n = u.groupId || "";
      u.id = o[n] = o[n] || 0, o[n]++;
    });
  }
  function R(t, o, u) {
    L(t[o], t[u]);
  }
  function L(t, o) {
    var u = o.startPTS;
    if (Object(D.isFiniteNumber)(u)) {
      var n, c = 0;
      o.sn > t.sn ? (c = u - t.start, n = t) : (c = t.start - u, n = o), n.duration !== c && (n.duration = c);
    } else
      o.sn > t.sn ? t.cc === o.cc && t.minEndPTS ? o.start = t.start + (t.minEndPTS - t.start) : o.start = t.start + t.duration : o.start = Math.max(t.start - o.duration, 0);
  }
  function a(t, o, u, n, c, p) {
    n - u <= 0 && (y.logger.warn("Fragment should have a positive duration", o), n = u + o.duration, p = c + o.duration);
    var m = u, g = n, i = o.startPTS, r = o.endPTS;
    if (Object(D.isFiniteNumber)(i)) {
      var d = Math.abs(i - u);
      Object(D.isFiniteNumber)(o.deltaPTS) ? o.deltaPTS = Math.max(d, o.deltaPTS) : o.deltaPTS = d, m = Math.max(u, i), u = Math.min(u, i), c = Math.min(c, o.startDTS), g = Math.min(n, r), n = Math.max(n, r), p = Math.max(p, o.endDTS);
    }
    o.duration = n - u;
    var x = u - o.start;
    o.appendedPTS = n, o.start = o.startPTS = u, o.maxStartPTS = m, o.startDTS = c, o.endPTS = n, o.minEndPTS = g, o.endDTS = p;
    var T, A = o.sn;
    if (!t || A < t.startSN || A > t.endSN)
      return 0;
    var C = A - t.startSN, w = t.fragments;
    for (w[C] = o, T = C; T > 0; T--)
      L(w[T], w[T - 1]);
    for (T = C; T < w.length - 1; T++)
      L(w[T], w[T + 1]);
    return t.fragmentHint && L(w[w.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, x;
  }
  function b(t, o) {
    for (var u = null, n = t.fragments, c = n.length - 1; c >= 0; c--) {
      var p = n[c].initSegment;
      if (p) {
        u = p;
        break;
      }
    }
    t.fragmentHint && delete t.fragmentHint.endPTS;
    var m, g = 0;
    if (h(t, o, function(A, C) {
      var w;
      A.relurl && (g = A.cc - C.cc), Object(D.isFiniteNumber)(A.startPTS) && Object(D.isFiniteNumber)(A.endPTS) && (C.start = C.startPTS = A.startPTS, C.startDTS = A.startDTS, C.appendedPTS = A.appendedPTS, C.maxStartPTS = A.maxStartPTS, C.endPTS = A.endPTS, C.endDTS = A.endDTS, C.minEndPTS = A.minEndPTS, C.duration = A.endPTS - A.startPTS, C.duration && (m = C), o.PTSKnown = o.alignedSliding = !0), C.elementaryStreams = A.elementaryStreams, C.loader = A.loader, C.stats = A.stats, C.urlId = A.urlId, A.initSegment ? (C.initSegment = A.initSegment, u = A.initSegment) : C.initSegment && C.initSegment.relurl != ((w = u) === null || w === void 0 ? void 0 : w.relurl) || (C.initSegment = u);
    }), o.skippedSegments && (o.deltaUpdateFailed = o.fragments.some(function(A) {
      return !A;
    }), o.deltaUpdateFailed)) {
      y.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (var i = o.skippedSegments; i--; )
        o.fragments.shift();
      o.startSN = o.fragments[0].sn, o.startCC = o.fragments[0].cc;
    }
    var r = o.fragments;
    if (g) {
      y.logger.warn("discontinuity sliding from playlist, take drift into account");
      for (var d = 0; d < r.length; d++)
        r[d].cc += g;
    }
    o.skippedSegments && (o.startCC = o.fragments[0].cc), v(t.partList, o.partList, function(A, C) {
      C.elementaryStreams = A.elementaryStreams, C.stats = A.stats;
    }), m ? a(o, m, m.startPTS, m.endPTS, m.startDTS, m.endDTS) : E(t, o), r.length && (o.totalduration = o.edge - r[0].start), o.driftStartTime = t.driftStartTime, o.driftStart = t.driftStart;
    var x = o.advancedDateTime;
    if (o.advanced && x) {
      var T = o.edge;
      o.driftStart || (o.driftStartTime = x, o.driftStart = T), o.driftEndTime = x, o.driftEnd = T;
    } else
      o.driftEndTime = t.driftEndTime, o.driftEnd = t.driftEnd, o.advancedDateTime = t.advancedDateTime;
  }
  function v(t, o, u) {
    if (t && o)
      for (var n = 0, c = 0, p = t.length; c <= p; c++) {
        var m = t[c], g = o[c + n];
        m && g && m.index === g.index && m.fragment.sn === g.fragment.sn ? u(m, g) : n--;
      }
  }
  function h(t, o, u) {
    for (var n = o.skippedSegments, c = Math.max(t.startSN, o.startSN) - o.startSN, p = (t.fragmentHint ? 1 : 0) + (n ? o.endSN : Math.min(t.endSN, o.endSN)) - o.startSN, m = o.startSN - t.startSN, g = o.fragmentHint ? o.fragments.concat(o.fragmentHint) : o.fragments, i = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, r = c; r <= p; r++) {
      var d = i[m + r], x = g[r];
      n && !x && r < n && (x = o.fragments[r] = d), d && x && u(d, x);
    }
  }
  function E(t, o) {
    var u = o.startSN + o.skippedSegments - t.startSN, n = t.fragments;
    u < 0 || u >= n.length || _(o, n[u].start);
  }
  function _(t, o) {
    if (o) {
      for (var u = t.fragments, n = t.skippedSegments; n < u.length; n++)
        u[n].start += o;
      t.fragmentHint && (t.fragmentHint.start += o);
    }
  }
  function l(t, o) {
    var u, n = 1e3 * t.levelTargetDuration, c = n / 2, p = t.age, m = p > 0 && p < 3 * n, g = o.loading.end - o.loading.start, i = t.availabilityDelay;
    if (t.updated === !1)
      if (m) {
        var r = 333 * t.misses;
        u = Math.max(Math.min(c, 2 * g), r), t.availabilityDelay = (t.availabilityDelay || 0) + u;
      } else
        u = c;
    else
      m ? (i = Math.min(i || n / 2, p), t.availabilityDelay = i, u = i + n - p) : u = n - g;
    return Math.round(u);
  }
  function e(t, o, u) {
    if (!t || !t.details)
      return null;
    var n = t.details, c = n.fragments[o - n.startSN];
    return c || ((c = n.fragmentHint) && c.sn === o ? c : o < n.startSN && u && u.sn === o ? u : null);
  }
  function s(t, o, u) {
    if (!t || !t.details)
      return null;
    var n = t.details.partList;
    if (n)
      for (var c = n.length; c--; ) {
        var p = n[c];
        if (p.index === u && p.fragment.sn === o)
          return p;
      }
    return null;
  }
}, "./src/controller/stream-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return t;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/controller/base-stream-controller.ts"), S = f("./src/is-supported.ts"), k = f("./src/events.ts"), R = f("./src/utils/buffer-helper.ts"), L = f("./src/controller/fragment-tracker.ts"), a = f("./src/types/loader.ts"), b = f("./src/loader/fragment.ts"), v = f("./src/demux/transmuxer-interface.ts"), h = f("./src/types/transmuxer.ts"), E = f("./src/controller/gap-controller.ts"), _ = f("./src/errors.ts"), l = f("./src/utils/logger.ts");
  function e(o, u) {
    for (var n = 0; n < u.length; n++) {
      var c = u[n];
      c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(o, c.key, c);
    }
  }
  function s(o, u) {
    return (s = Object.setPrototypeOf || function(n, c) {
      return n.__proto__ = c, n;
    })(o, u);
  }
  var t = function(o) {
    var u, n;
    function c(i, r) {
      var d;
      return (d = o.call(this, i, r, "[stream-controller]") || this).audioCodecSwap = !1, d.gapController = null, d.level = -1, d._forceStartLoad = !1, d.altAudio = !1, d.audioOnly = !1, d.fragPlaying = null, d.onvplaying = null, d.onvseeked = null, d.fragLastKbps = 0, d.stalled = !1, d.couldBacktrack = !1, d.audioCodecSwitch = !1, d.videoBuffer = null, d._registerListeners(), d;
    }
    n = o, (u = c).prototype = Object.create(n.prototype), u.prototype.constructor = u, s(u, n);
    var p, m, g = c.prototype;
    return g._registerListeners = function() {
      var i = this.hls;
      i.on(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), i.on(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), i.on(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), i.on(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), i.on(k.Events.LEVEL_LOADING, this.onLevelLoading, this), i.on(k.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.on(k.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), i.on(k.Events.ERROR, this.onError, this), i.on(k.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), i.on(k.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), i.on(k.Events.BUFFER_CREATED, this.onBufferCreated, this), i.on(k.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), i.on(k.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), i.on(k.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, g._unregisterListeners = function() {
      var i = this.hls;
      i.off(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), i.off(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), i.off(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), i.off(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), i.off(k.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.off(k.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), i.off(k.Events.ERROR, this.onError, this), i.off(k.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), i.off(k.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), i.off(k.Events.BUFFER_CREATED, this.onBufferCreated, this), i.off(k.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), i.off(k.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), i.off(k.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, g.onHandlerDestroying = function() {
      this._unregisterListeners(), this.onMediaDetaching();
    }, g.startLoad = function(i) {
      if (this.levels) {
        var r = this.lastCurrentTime, d = this.hls;
        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
          var x = d.startLevel;
          x === -1 && (d.config.testBandwidth ? (x = 0, this.bitrateTest = !0) : x = d.nextAutoLevel), this.level = d.nextLoadLevel = x, this.loadedmetadata = !1;
        }
        r > 0 && i === -1 && (this.log("Override startPosition with lastCurrentTime @" + r.toFixed(3)), i = r), this.state = y.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = i, this.tick();
      } else
        this._forceStartLoad = !0, this.state = y.State.STOPPED;
    }, g.stopLoad = function() {
      this._forceStartLoad = !1, o.prototype.stopLoad.call(this);
    }, g.doTick = function() {
      switch (this.state) {
        case y.State.IDLE:
          this.doTickIdle();
          break;
        case y.State.WAITING_LEVEL:
          var i, r = this.levels, d = this.level, x = r == null || (i = r[d]) === null || i === void 0 ? void 0 : i.details;
          if (x && (!x.live || this.levelLastLoaded === this.level)) {
            if (this.waitForCdnTuneIn(x))
              break;
            this.state = y.State.IDLE;
            break;
          }
          break;
        case y.State.FRAG_LOADING_WAITING_RETRY:
          var T, A = self.performance.now(), C = this.retryDate;
          (!C || A >= C || (T = this.media) !== null && T !== void 0 && T.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = y.State.IDLE);
      }
      this.onTickEnd();
    }, g.onTickEnd = function() {
      o.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
    }, g.doTickIdle = function() {
      var i, r, d = this.hls, x = this.levelLastLoaded, T = this.levels, A = this.media, C = d.config, w = d.nextLoadLevel;
      if (x !== null && (A || !this.startFragRequested && C.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && T && T[w]) {
        var O = T[w];
        this.level = d.nextLoadLevel = w;
        var P = O.details;
        if (!P || this.state === y.State.WAITING_LEVEL || P.live && this.levelLastLoaded !== w)
          this.state = y.State.WAITING_LEVEL;
        else {
          var F = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : A, a.PlaylistLevelType.MAIN);
          if (F !== null && !(F.len >= this.getMaxBufferLength(O.maxBitrate))) {
            if (this._streamEnded(F, P)) {
              var B = {};
              return this.altAudio && (B.type = "video"), this.hls.trigger(k.Events.BUFFER_EOS, B), void (this.state = y.State.ENDED);
            }
            var N = F.end, M = this.getNextFragment(N, P);
            if (this.couldBacktrack && !this.fragPrevious && M && M.sn !== "initSegment") {
              var G = M.sn - P.startSN;
              G > 1 && (M = P.fragments[G - 1], this.fragmentTracker.removeFragment(M));
            }
            if (M && this.fragmentTracker.getState(M) === L.FragmentState.OK && this.nextLoadPosition > N) {
              var K = this.audioOnly && !this.altAudio ? b.ElementaryStreamTypes.AUDIO : b.ElementaryStreamTypes.VIDEO;
              this.afterBufferFlushed(A, K, a.PlaylistLevelType.MAIN), M = this.getNextFragment(this.nextLoadPosition, P);
            }
            M && (!M.initSegment || M.initSegment.data || this.bitrateTest || (M = M.initSegment), ((i = M.decryptdata) === null || i === void 0 ? void 0 : i.keyFormat) !== "identity" || (r = M.decryptdata) !== null && r !== void 0 && r.key ? this.loadFragment(M, P, N) : this.loadKey(M, P));
          }
        }
      }
    }, g.loadFragment = function(i, r, d) {
      var x, T = this.fragmentTracker.getState(i);
      if (this.fragCurrent = i, T === L.FragmentState.BACKTRACKED) {
        var A = this.fragmentTracker.getBacktrackData(i);
        if (A)
          return this._handleFragmentLoadProgress(A), void this._handleFragmentLoadComplete(A);
        T = L.FragmentState.NOT_LOADED;
      }
      T === L.FragmentState.NOT_LOADED || T === L.FragmentState.PARTIAL ? i.sn === "initSegment" ? this._loadInitSegment(i) : this.bitrateTest ? (i.bitrateTest = !0, this.log("Fragment " + i.sn + " of level " + i.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(i)) : (this.startFragRequested = !0, o.prototype.loadFragment.call(this, i, r, d)) : T === L.FragmentState.APPENDING ? this.reduceMaxBufferLength(i.duration) && this.fragmentTracker.removeFragment(i) : ((x = this.media) === null || x === void 0 ? void 0 : x.buffered.length) === 0 && this.fragmentTracker.removeAllFragments();
    }, g.getAppendedFrag = function(i) {
      var r = this.fragmentTracker.getAppendedFrag(i, a.PlaylistLevelType.MAIN);
      return r && "fragment" in r ? r.fragment : r;
    }, g.getBufferedFrag = function(i) {
      return this.fragmentTracker.getBufferedFrag(i, a.PlaylistLevelType.MAIN);
    }, g.followingBufferedFrag = function(i) {
      return i ? this.getBufferedFrag(i.end + 0.5) : null;
    }, g.immediateLevelSwitch = function() {
      this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
    }, g.nextLevelSwitch = function() {
      var i = this.levels, r = this.media;
      if (r != null && r.readyState) {
        var d, x = this.getAppendedFrag(r.currentTime);
        if (x && x.start > 1 && this.flushMainBuffer(0, x.start - 1), !r.paused && i) {
          var T = i[this.hls.nextLoadLevel], A = this.fragLastKbps;
          d = A && this.fragCurrent ? this.fragCurrent.duration * T.maxBitrate / (1e3 * A) + 1 : 0;
        } else
          d = 0;
        var C = this.getBufferedFrag(r.currentTime + d);
        if (C) {
          var w = this.followingBufferedFrag(C);
          if (w) {
            this.abortCurrentFrag();
            var O = w.maxStartPTS ? w.maxStartPTS : w.start, P = w.duration, F = Math.max(C.end, O + Math.min(Math.max(P - this.config.maxFragLookUpTolerance, 0.5 * P), 0.75 * P));
            this.flushMainBuffer(F, Number.POSITIVE_INFINITY);
          }
        }
      }
    }, g.abortCurrentFrag = function() {
      var i = this.fragCurrent;
      this.fragCurrent = null, i != null && i.loader && i.loader.abort(), this.state === y.State.KEY_LOADING && (this.state = y.State.IDLE), this.nextLoadPosition = this.getLoadPosition();
    }, g.flushMainBuffer = function(i, r) {
      o.prototype.flushMainBuffer.call(this, i, r, this.altAudio ? "video" : null);
    }, g.onMediaAttached = function(i, r) {
      o.prototype.onMediaAttached.call(this, i, r);
      var d = r.media;
      this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), d.addEventListener("playing", this.onvplaying), d.addEventListener("seeked", this.onvseeked), this.gapController = new E.default(this.config, d, this.fragmentTracker, this.hls);
    }, g.onMediaDetaching = function() {
      var i = this.media;
      i && (i.removeEventListener("playing", this.onvplaying), i.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), o.prototype.onMediaDetaching.call(this);
    }, g.onMediaPlaying = function() {
      this.tick();
    }, g.onMediaSeeked = function() {
      var i = this.media, r = i ? i.currentTime : null;
      Object(D.isFiniteNumber)(r) && this.log("Media seeked to " + r.toFixed(3)), this.tick();
    }, g.onManifestLoading = function() {
      this.log("Trigger BUFFER_RESET"), this.hls.trigger(k.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
    }, g.onManifestParsed = function(i, r) {
      var d, x = !1, T = !1;
      r.levels.forEach(function(A) {
        (d = A.audioCodec) && (d.indexOf("mp4a.40.2") !== -1 && (x = !0), d.indexOf("mp4a.40.5") !== -1 && (T = !0));
      }), this.audioCodecSwitch = x && T && !Object(S.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = r.levels, this.startFragRequested = !1;
    }, g.onLevelLoading = function(i, r) {
      var d = this.levels;
      if (d && this.state === y.State.IDLE) {
        var x = d[r.level];
        (!x.details || x.details.live && this.levelLastLoaded !== r.level || this.waitForCdnTuneIn(x.details)) && (this.state = y.State.WAITING_LEVEL);
      }
    }, g.onLevelLoaded = function(i, r) {
      var d, x = this.levels, T = r.level, A = r.details, C = A.totalduration;
      if (x) {
        this.log("Level " + T + " loaded [" + A.startSN + "," + A.endSN + "], cc [" + A.startCC + ", " + A.endCC + "] duration:" + C);
        var w = this.fragCurrent;
        !w || this.state !== y.State.FRAG_LOADING && this.state !== y.State.FRAG_LOADING_WAITING_RETRY || w.level !== r.level && w.loader && (this.state = y.State.IDLE, w.loader.abort());
        var O = x[T], P = 0;
        if (A.live || (d = O.details) !== null && d !== void 0 && d.live) {
          if (A.fragments[0] || (A.deltaUpdateFailed = !0), A.deltaUpdateFailed)
            return;
          P = this.alignPlaylists(A, O.details);
        }
        if (O.details = A, this.levelLastLoaded = T, this.hls.trigger(k.Events.LEVEL_UPDATED, { details: A, level: T }), this.state === y.State.WAITING_LEVEL) {
          if (this.waitForCdnTuneIn(A))
            return;
          this.state = y.State.IDLE;
        }
        this.startFragRequested ? A.live && this.synchronizeToLiveEdge(A) : this.setStartPosition(A, P), this.tick();
      } else
        this.warn("Levels were reset while loading level " + T);
    }, g._handleFragmentLoadProgress = function(i) {
      var r, d = i.frag, x = i.part, T = i.payload, A = this.levels;
      if (A) {
        var C = A[d.level], w = C.details;
        if (w) {
          var O = C.videoCodec, P = w.PTSKnown || !w.live, F = (r = d.initSegment) === null || r === void 0 ? void 0 : r.data, B = this._getAudioCodec(C), N = this.transmuxer = this.transmuxer || new v.default(this.hls, a.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), M = x ? x.index : -1, G = M !== -1, K = new h.ChunkMetadata(d.level, d.sn, d.stats.chunkCount, T.byteLength, M, G), H = this.initPTS[d.cc];
          N.push(T, F, B, O, d, x, w.totalduration, P, K, H);
        } else
          this.warn("Dropping fragment " + d.sn + " of level " + d.level + " after level details were reset");
      } else
        this.warn("Levels were reset while fragment load was in progress. Fragment " + d.sn + " of level " + d.level + " will not be buffered");
    }, g.onAudioTrackSwitching = function(i, r) {
      var d = this.altAudio, x = !!r.url, T = r.id;
      if (!x) {
        if (this.mediaBuffer !== this.media) {
          this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
          var A = this.fragCurrent;
          A != null && A.loader && (this.log("Switching to main audio track, cancel main fragment load"), A.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
        } else
          this.audioOnly && this.resetTransmuxer();
        var C = this.hls;
        d && C.trigger(k.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), C.trigger(k.Events.AUDIO_TRACK_SWITCHED, { id: T });
      }
    }, g.onAudioTrackSwitched = function(i, r) {
      var d = r.id, x = !!this.hls.audioTracks[d].url;
      if (x) {
        var T = this.videoBuffer;
        T && this.mediaBuffer !== T && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = T);
      }
      this.altAudio = x, this.tick();
    }, g.onBufferCreated = function(i, r) {
      var d, x, T = r.tracks, A = !1;
      for (var C in T) {
        var w = T[C];
        if (w.id === "main") {
          if (x = C, d = w, C === "video") {
            var O = T[C];
            O && (this.videoBuffer = O.buffer);
          }
        } else
          A = !0;
      }
      A && d ? (this.log("Alternate track found, use " + x + ".buffered to schedule main fragment loading"), this.mediaBuffer = d.buffer) : this.mediaBuffer = this.media;
    }, g.onFragBuffered = function(i, r) {
      var d = r.frag, x = r.part;
      if (!d || d.type === a.PlaylistLevelType.MAIN) {
        if (this.fragContextChanged(d))
          return this.warn("Fragment " + d.sn + (x ? " p: " + x.index : "") + " of level " + d.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === y.State.PARSED && (this.state = y.State.IDLE));
        var T = x ? x.stats : d.stats;
        this.fragLastKbps = Math.round(8 * T.total / (T.buffering.end - T.loading.first)), d.sn !== "initSegment" && (this.fragPrevious = d), this.fragBufferedComplete(d, x);
      }
    }, g.onError = function(i, r) {
      switch (r.details) {
        case _.ErrorDetails.FRAG_LOAD_ERROR:
        case _.ErrorDetails.FRAG_LOAD_TIMEOUT:
        case _.ErrorDetails.KEY_LOAD_ERROR:
        case _.ErrorDetails.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(a.PlaylistLevelType.MAIN, r);
          break;
        case _.ErrorDetails.LEVEL_LOAD_ERROR:
        case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:
          this.state !== y.State.ERROR && (r.fatal ? (this.warn("" + r.details), this.state = y.State.ERROR) : r.levelRetry || this.state !== y.State.WAITING_LEVEL || (this.state = y.State.IDLE));
          break;
        case _.ErrorDetails.BUFFER_FULL_ERROR:
          if (r.parent === "main" && (this.state === y.State.PARSING || this.state === y.State.PARSED)) {
            var d = !0, x = this.getFwdBufferInfo(this.media, a.PlaylistLevelType.MAIN);
            x && x.len > 0.5 && (d = !this.reduceMaxBufferLength(x.len)), d && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState();
          }
      }
    }, g.checkBuffer = function() {
      var i = this.media, r = this.gapController;
      if (i && r && i.readyState) {
        var d = R.BufferHelper.getBuffered(i);
        !this.loadedmetadata && d.length ? (this.loadedmetadata = !0, this.seekToStartPos()) : r.poll(this.lastCurrentTime), this.lastCurrentTime = i.currentTime;
      }
    }, g.onFragLoadEmergencyAborted = function() {
      this.state = y.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
    }, g.onBufferFlushed = function(i, r) {
      var d = r.type;
      if (d !== b.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
        var x = (d === b.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        this.afterBufferFlushed(x, d, a.PlaylistLevelType.MAIN);
      }
    }, g.onLevelsUpdated = function(i, r) {
      this.levels = r.levels;
    }, g.swapAudioCodec = function() {
      this.audioCodecSwap = !this.audioCodecSwap;
    }, g.seekToStartPos = function() {
      var i = this.media, r = i.currentTime, d = this.startPosition;
      if (d >= 0 && r < d) {
        if (i.seeking)
          return void l.logger.log("could not seek to " + d + ", already seeking at " + r);
        var x = R.BufferHelper.getBuffered(i), T = (x.length ? x.start(0) : 0) - d;
        T > 0 && T < this.config.maxBufferHole && (l.logger.log("adjusting start position by " + T + " to match buffer start"), d += T, this.startPosition = d), this.log("seek to target start position " + d + " from current time " + r), i.currentTime = d;
      }
    }, g._getAudioCodec = function(i) {
      var r = this.config.defaultAudioCodec || i.audioCodec;
      return this.audioCodecSwap && r && (this.log("Swapping audio codec"), r = r.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), r;
    }, g._loadBitrateTestFrag = function(i) {
      var r = this;
      this._doFragLoad(i).then(function(d) {
        var x = r.hls;
        if (d && !x.nextLoadLevel && !r.fragContextChanged(i)) {
          r.fragLoadError = 0, r.state = y.State.IDLE, r.startFragRequested = !1, r.bitrateTest = !1;
          var T = i.stats;
          T.parsing.start = T.parsing.end = T.buffering.start = T.buffering.end = self.performance.now(), x.trigger(k.Events.FRAG_LOADED, d);
        }
      });
    }, g._handleTransmuxComplete = function(i) {
      var r, d = "main", x = this.hls, T = i.remuxResult, A = i.chunkMeta, C = this.getCurrentContext(A);
      if (!C)
        return this.warn("The loading context changed while buffering fragment " + A.sn + " of level " + A.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(A.level);
      var w = C.frag, O = C.part, P = C.level, F = T.video, B = T.text, N = T.id3, M = T.initSegment, G = this.altAudio ? void 0 : T.audio;
      if (!this.fragContextChanged(w)) {
        if (this.state = y.State.PARSING, M) {
          M.tracks && (this._bufferInitSegment(P, M.tracks, w, A), x.trigger(k.Events.FRAG_PARSING_INIT_SEGMENT, { frag: w, id: d, tracks: M.tracks }));
          var K = M.initPTS, H = M.timescale;
          Object(D.isFiniteNumber)(K) && (this.initPTS[w.cc] = K, x.trigger(k.Events.INIT_PTS_FOUND, { frag: w, id: d, initPTS: K, timescale: H }));
        }
        if (F && T.independent !== !1) {
          if (P.details) {
            var z = F.startPTS, q = F.endPTS, $ = F.startDTS, ae = F.endDTS;
            if (O)
              O.elementaryStreams[F.type] = { startPTS: z, endPTS: q, startDTS: $, endDTS: ae };
            else if (F.firstKeyFrame && F.independent && (this.couldBacktrack = !0), F.dropped && F.independent) {
              if (this.getLoadPosition() + this.config.maxBufferHole < z)
                return void this.backtrack(w);
              w.setElementaryStreamInfo(F.type, w.start, q, w.start, ae, !0);
            }
            w.setElementaryStreamInfo(F.type, z, q, $, ae), this.bufferFragmentData(F, w, O, A);
          }
        } else if (T.independent === !1)
          return void this.backtrack(w);
        if (G) {
          var te = G.startPTS, oe = G.endPTS, re = G.startDTS, fe = G.endDTS;
          O && (O.elementaryStreams[b.ElementaryStreamTypes.AUDIO] = { startPTS: te, endPTS: oe, startDTS: re, endDTS: fe }), w.setElementaryStreamInfo(b.ElementaryStreamTypes.AUDIO, te, oe, re, fe), this.bufferFragmentData(G, w, O, A);
        }
        if (N != null && (r = N.samples) !== null && r !== void 0 && r.length) {
          var ie = { frag: w, id: d, samples: N.samples };
          x.trigger(k.Events.FRAG_PARSING_METADATA, ie);
        }
        if (B) {
          var se = { frag: w, id: d, samples: B.samples };
          x.trigger(k.Events.FRAG_PARSING_USERDATA, se);
        }
      }
    }, g._bufferInitSegment = function(i, r, d, x) {
      var T = this;
      if (this.state === y.State.PARSING) {
        this.audioOnly = !!r.audio && !r.video, this.altAudio && !this.audioOnly && delete r.audio;
        var A = r.audio, C = r.video, w = r.audiovideo;
        if (A) {
          var O = i.audioCodec, P = navigator.userAgent.toLowerCase();
          this.audioCodecSwitch && (O && (O = O.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), A.metadata.channelCount !== 1 && P.indexOf("firefox") === -1 && (O = "mp4a.40.5")), P.indexOf("android") !== -1 && A.container !== "audio/mpeg" && (O = "mp4a.40.2", this.log("Android: force audio codec to " + O)), i.audioCodec && i.audioCodec !== O && this.log('Swapping manifest audio codec "' + i.audioCodec + '" for "' + O + '"'), A.levelCodec = O, A.id = "main", this.log("Init audio buffer, container:" + A.container + ", codecs[selected/level/parsed]=[" + (O || "") + "/" + (i.audioCodec || "") + "/" + A.codec + "]");
        }
        C && (C.levelCodec = i.videoCodec, C.id = "main", this.log("Init video buffer, container:" + C.container + ", codecs[level/parsed]=[" + (i.videoCodec || "") + "/" + C.codec + "]")), w && this.log("Init audiovideo buffer, container:" + w.container + ", codecs[level/parsed]=[" + (i.attrs.CODECS || "") + "/" + w.codec + "]"), this.hls.trigger(k.Events.BUFFER_CODECS, r), Object.keys(r).forEach(function(F) {
          var B = r[F].initSegment;
          B != null && B.byteLength && T.hls.trigger(k.Events.BUFFER_APPENDING, { type: F, data: B, frag: d, part: null, chunkMeta: x, parent: d.type });
        }), this.tick();
      }
    }, g.backtrack = function(i) {
      this.couldBacktrack = !0, this.resetTransmuxer(), this.flushBufferGap(i);
      var r = this.fragmentTracker.backtrack(i);
      this.fragPrevious = null, this.nextLoadPosition = i.start, r ? this.resetFragmentLoading(i) : this.state = y.State.BACKTRACKING;
    }, g.checkFragmentChanged = function() {
      var i = this.media, r = null;
      if (i && i.readyState > 1 && i.seeking === !1) {
        var d = i.currentTime;
        if (R.BufferHelper.isBuffered(i, d) ? r = this.getAppendedFrag(d) : R.BufferHelper.isBuffered(i, d + 0.1) && (r = this.getAppendedFrag(d + 0.1)), r) {
          var x = this.fragPlaying, T = r.level;
          x && r.sn === x.sn && x.level === T && r.urlId === x.urlId || (this.hls.trigger(k.Events.FRAG_CHANGED, { frag: r }), x && x.level === T || this.hls.trigger(k.Events.LEVEL_SWITCHED, { level: T }), this.fragPlaying = r);
        }
      }
    }, p = c, (m = [{ key: "nextLevel", get: function() {
      var i = this.nextBufferedFrag;
      return i ? i.level : -1;
    } }, { key: "currentLevel", get: function() {
      var i = this.media;
      if (i) {
        var r = this.getAppendedFrag(i.currentTime);
        if (r)
          return r.level;
      }
      return -1;
    } }, { key: "nextBufferedFrag", get: function() {
      var i = this.media;
      if (i) {
        var r = this.getAppendedFrag(i.currentTime);
        return this.followingBufferedFrag(r);
      }
      return null;
    } }, { key: "forceStartLoad", get: function() {
      return this._forceStartLoad;
    } }]) && e(p.prototype, m), c;
  }(y.default);
}, "./src/controller/subtitle-stream-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "SubtitleStreamController", function() {
    return l;
  });
  var D = f("./src/events.ts"), y = f("./src/utils/logger.ts"), S = f("./src/utils/buffer-helper.ts"), k = f("./src/controller/fragment-finders.ts"), R = f("./src/utils/discontinuities.ts"), L = f("./src/controller/level-helper.ts"), a = f("./src/controller/fragment-tracker.ts"), b = f("./src/controller/base-stream-controller.ts"), v = f("./src/types/loader.ts"), h = f("./src/types/level.ts");
  function E(e, s) {
    for (var t = 0; t < s.length; t++) {
      var o = s[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  function _(e, s) {
    return (_ = Object.setPrototypeOf || function(t, o) {
      return t.__proto__ = o, t;
    })(e, s);
  }
  var l = function(e) {
    var s, t;
    function o(p, m) {
      var g;
      return (g = e.call(this, p, m, "[subtitle-stream-controller]") || this).levels = [], g.currentTrackId = -1, g.tracksBuffered = [], g.mainDetails = null, g._registerListeners(), g;
    }
    t = e, (s = o).prototype = Object.create(t.prototype), s.prototype.constructor = s, _(s, t);
    var u, n, c = o.prototype;
    return c.onHandlerDestroying = function() {
      this._unregisterListeners(), this.mainDetails = null;
    }, c._registerListeners = function() {
      var p = this.hls;
      p.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), p.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), p.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), p.on(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), p.on(D.Events.ERROR, this.onError, this), p.on(D.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), p.on(D.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), p.on(D.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), p.on(D.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), p.on(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, c._unregisterListeners = function() {
      var p = this.hls;
      p.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), p.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), p.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), p.off(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), p.off(D.Events.ERROR, this.onError, this), p.off(D.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), p.off(D.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), p.off(D.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), p.off(D.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), p.off(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, c.startLoad = function() {
      this.stopLoad(), this.state = b.State.IDLE, this.setInterval(500), this.tick();
    }, c.onManifestLoading = function() {
      this.mainDetails = null, this.fragmentTracker.removeAllFragments();
    }, c.onLevelLoaded = function(p, m) {
      this.mainDetails = m.details;
    }, c.onSubtitleFragProcessed = function(p, m) {
      var g = m.frag, i = m.success;
      if (this.fragPrevious = g, this.state = b.State.IDLE, i) {
        var r = this.tracksBuffered[this.currentTrackId];
        if (r) {
          for (var d, x = g.start, T = 0; T < r.length; T++)
            if (x >= r[T].start && x <= r[T].end) {
              d = r[T];
              break;
            }
          var A = g.start + g.duration;
          d ? d.end = A : (d = { start: x, end: A }, r.push(d)), this.fragmentTracker.fragBuffered(g);
        }
      }
    }, c.onBufferFlushing = function(p, m) {
      var g = m.startOffset, i = m.endOffset;
      if (g === 0 && i !== Number.POSITIVE_INFINITY) {
        var r = this.currentTrackId, d = this.levels;
        if (!d.length || !d[r] || !d[r].details)
          return;
        var x = i - d[r].details.targetduration;
        if (x <= 0)
          return;
        m.endOffsetSubtitles = Math.max(0, x), this.tracksBuffered.forEach(function(T) {
          for (var A = 0; A < T.length; )
            if (T[A].end <= x)
              T.shift();
            else {
              if (!(T[A].start < x))
                break;
              T[A].start = x, A++;
            }
        }), this.fragmentTracker.removeFragmentsInRange(g, x, v.PlaylistLevelType.SUBTITLE);
      }
    }, c.onError = function(p, m) {
      var g, i = m.frag;
      i && i.type === v.PlaylistLevelType.SUBTITLE && ((g = this.fragCurrent) !== null && g !== void 0 && g.loader && this.fragCurrent.loader.abort(), this.state = b.State.IDLE);
    }, c.onSubtitleTracksUpdated = function(p, m) {
      var g = this, i = m.subtitleTracks;
      this.tracksBuffered = [], this.levels = i.map(function(r) {
        return new h.Level(r);
      }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(r) {
        g.tracksBuffered[r.id] = [];
      }), this.mediaBuffer = null;
    }, c.onSubtitleTrackSwitch = function(p, m) {
      if (this.currentTrackId = m.id, this.levels.length && this.currentTrackId !== -1) {
        var g = this.levels[this.currentTrackId];
        g != null && g.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, this.setInterval(500)) : this.mediaBuffer = null;
      } else
        this.clearInterval();
    }, c.onSubtitleTrackLoaded = function(p, m) {
      var g, i = m.details, r = m.id, d = this.currentTrackId, x = this.levels;
      if (x.length) {
        var T = x[d];
        if (!(r >= x.length || r !== d) && T) {
          if (this.mediaBuffer = this.mediaBufferTimeRanges, i.live || (g = T.details) !== null && g !== void 0 && g.live) {
            var A = this.mainDetails;
            if (i.deltaUpdateFailed || !A)
              return;
            var C = A.fragments[0];
            T.details ? this.alignPlaylists(i, T.details) === 0 && C && Object(L.addSliding)(i, C.start) : i.hasProgramDateTime && A.hasProgramDateTime ? Object(R.alignPDT)(i, A) : C && Object(L.addSliding)(i, C.start);
          }
          T.details = i, this.levelLastLoaded = r, this.tick(), i.live && !this.fragCurrent && this.media && this.state === b.State.IDLE && (Object(k.findFragmentByPTS)(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), T.details = void 0));
        }
      }
    }, c._handleFragmentLoadComplete = function(p) {
      var m = p.frag, g = p.payload, i = m.decryptdata, r = this.hls;
      if (!this.fragContextChanged(m) && g && g.byteLength > 0 && i && i.key && i.iv && i.method === "AES-128") {
        var d = performance.now();
        this.decrypter.webCryptoDecrypt(new Uint8Array(g), i.key.buffer, i.iv.buffer).then(function(x) {
          var T = performance.now();
          r.trigger(D.Events.FRAG_DECRYPTED, { frag: m, payload: x, stats: { tstart: d, tdecrypt: T } });
        });
      }
    }, c.doTick = function() {
      if (this.media) {
        if (this.state === b.State.IDLE) {
          var p, m = this.currentTrackId, g = this.levels;
          if (!g.length || !g[m] || !g[m].details)
            return;
          var i = g[m].details, r = i.targetduration, d = this.config, x = this.media, T = S.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, x.currentTime - r, d.maxBufferHole), A = T.end;
          if (T.len > this.getMaxBufferLength() + r)
            return;
          console.assert(i, "Subtitle track details are defined on idle subtitle stream controller tick");
          var C, w = i.fragments, O = w.length, P = i.edge, F = this.fragPrevious;
          if (A < P) {
            var B = d.maxFragLookUpTolerance;
            F && i.hasProgramDateTime && (C = Object(k.findFragmentByPDT)(w, F.endProgramDateTime, B)), C || !(C = Object(k.findFragmentByPTS)(F, w, A, B)) && F && F.start < w[0].start && (C = w[0]);
          } else
            C = w[O - 1];
          (p = C) !== null && p !== void 0 && p.encrypted ? (y.logger.log("Loading key for " + C.sn), this.state = b.State.KEY_LOADING, this.hls.trigger(D.Events.KEY_LOADING, { frag: C })) : C && this.fragmentTracker.getState(C) === a.FragmentState.NOT_LOADED && this.loadFragment(C, i, A);
        }
      } else
        this.state = b.State.IDLE;
    }, c.loadFragment = function(p, m, g) {
      this.fragCurrent = p, e.prototype.loadFragment.call(this, p, m, g);
    }, u = o, (n = [{ key: "mediaBufferTimeRanges", get: function() {
      return this.tracksBuffered[this.currentTrackId] || [];
    } }]) && E(u.prototype, n), o;
  }(b.default);
}, "./src/controller/subtitle-track-controller.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/events.ts"), y = f("./src/utils/texttrack-utils.ts"), S = f("./src/controller/base-playlist-controller.ts"), k = f("./src/types/loader.ts");
  function R(v, h) {
    for (var E = 0; E < h.length; E++) {
      var _ = h[E];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(v, _.key, _);
    }
  }
  function L(v, h) {
    return (L = Object.setPrototypeOf || function(E, _) {
      return E.__proto__ = _, E;
    })(v, h);
  }
  var a = function(v) {
    var h, E;
    function _(t) {
      var o;
      return (o = v.call(this, t, "[subtitle-track-controller]") || this).media = null, o.tracks = [], o.groupId = null, o.tracksInGroup = [], o.trackId = -1, o.selectDefaultTrack = !0, o.queuedDefaultTrack = -1, o.trackChangeListener = function() {
        return o.onTextTracksChanged();
      }, o.asyncPollTrackChange = function() {
        return o.pollTrackChange(0);
      }, o.useTextTrackPolling = !1, o.subtitlePollingInterval = -1, o.subtitleDisplay = !0, o.registerListeners(), o;
    }
    E = v, (h = _).prototype = Object.create(E.prototype), h.prototype.constructor = h, L(h, E);
    var l, e, s = _.prototype;
    return s.destroy = function() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, v.prototype.destroy.call(this);
    }, s.registerListeners = function() {
      var t = this.hls;
      t.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(D.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(D.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(D.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(D.Events.ERROR, this.onError, this);
    }, s.unregisterListeners = function() {
      var t = this.hls;
      t.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(D.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(D.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(D.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(D.Events.ERROR, this.onError, this);
    }, s.onMediaAttached = function(t, o) {
      this.media = o.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
    }, s.pollTrackChange = function(t) {
      self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t);
    }, s.onMediaDetaching = function() {
      this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), b(this.media.textTracks).forEach(function(t) {
        Object(y.clearCurrentCues)(t);
      }), this.subtitleTrack = -1, this.media = null);
    }, s.onManifestLoading = function() {
      this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0;
    }, s.onManifestParsed = function(t, o) {
      this.tracks = o.subtitleTracks;
    }, s.onSubtitleTrackLoaded = function(t, o) {
      var u = o.id, n = o.details, c = this.trackId, p = this.tracksInGroup[c];
      if (p) {
        var m = p.details;
        p.details = o.details, this.log("subtitle track " + u + " loaded [" + n.startSN + "-" + n.endSN + "]"), u === this.trackId && (this.retryCount = 0, this.playlistLoaded(u, o, m));
      } else
        this.warn("Invalid subtitle track id " + u);
    }, s.onLevelLoading = function(t, o) {
      this.switchLevel(o.level);
    }, s.onLevelSwitching = function(t, o) {
      this.switchLevel(o.level);
    }, s.switchLevel = function(t) {
      var o = this.hls.levels[t];
      if (o != null && o.textGroupIds) {
        var u = o.textGroupIds[o.urlId];
        if (this.groupId !== u) {
          var n = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, c = this.tracks.filter(function(g) {
            return !u || g.groupId === u;
          });
          this.tracksInGroup = c;
          var p = this.findTrackId(n == null ? void 0 : n.name) || this.findTrackId();
          this.groupId = u;
          var m = { subtitleTracks: c };
          this.log("Updating subtitle tracks, " + c.length + ' track(s) found in "' + u + '" group-id'), this.hls.trigger(D.Events.SUBTITLE_TRACKS_UPDATED, m), p !== -1 && this.setSubtitleTrack(p, n);
        }
      }
    }, s.findTrackId = function(t) {
      for (var o = this.tracksInGroup, u = 0; u < o.length; u++) {
        var n = o[u];
        if ((!this.selectDefaultTrack || n.default) && (!t || t === n.name))
          return n.id;
      }
      return -1;
    }, s.onError = function(t, o) {
      v.prototype.onError.call(this, t, o), !o.fatal && o.context && o.context.type === k.PlaylistContextType.SUBTITLE_TRACK && o.context.id === this.trackId && o.context.groupId === this.groupId && this.retryLoadingOrFail(o);
    }, s.loadPlaylist = function(t) {
      var o = this.tracksInGroup[this.trackId];
      if (this.shouldLoadTrack(o)) {
        var u = o.id, n = o.groupId, c = o.url;
        if (t)
          try {
            c = t.addDirectives(c);
          } catch (p) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + p);
          }
        this.log("Loading subtitle playlist for id " + u), this.hls.trigger(D.Events.SUBTITLE_TRACK_LOADING, { url: c, id: u, groupId: n, deliveryDirectives: t || null });
      }
    }, s.toggleTrackModes = function(t) {
      var o = this, u = this.media, n = this.subtitleDisplay, c = this.trackId;
      if (u) {
        var p = b(u.textTracks), m = p.filter(function(r) {
          return r.groupId === o.groupId;
        });
        if (t === -1)
          [].slice.call(p).forEach(function(r) {
            r.mode = "disabled";
          });
        else {
          var g = m[c];
          g && (g.mode = "disabled");
        }
        var i = m[t];
        i && (i.mode = n ? "showing" : "hidden");
      }
    }, s.setSubtitleTrack = function(t, o) {
      var u, n = this.tracksInGroup;
      if (this.media) {
        if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (t === -1 || (u = n[t]) !== null && u !== void 0 && u.details) || t < -1 || t >= n.length)) {
          this.clearTimer();
          var c = n[t];
          if (this.log("Switching to subtitle track " + t), this.trackId = t, c) {
            var p = c.id, m = c.groupId, g = m === void 0 ? "" : m, i = c.name, r = c.type, d = c.url;
            this.hls.trigger(D.Events.SUBTITLE_TRACK_SWITCH, { id: p, groupId: g, name: i, type: r, url: d });
            var x = this.switchParams(c.url, o == null ? void 0 : o.details);
            this.loadPlaylist(x);
          } else
            this.hls.trigger(D.Events.SUBTITLE_TRACK_SWITCH, { id: t });
        }
      } else
        this.queuedDefaultTrack = t;
    }, s.onTextTracksChanged = function() {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
        for (var t = -1, o = b(this.media.textTracks), u = 0; u < o.length; u++)
          if (o[u].mode === "hidden")
            t = u;
          else if (o[u].mode === "showing") {
            t = u;
            break;
          }
        this.subtitleTrack !== t && (this.subtitleTrack = t);
      }
    }, l = _, (e = [{ key: "subtitleTracks", get: function() {
      return this.tracksInGroup;
    } }, { key: "subtitleTrack", get: function() {
      return this.trackId;
    }, set: function(t) {
      this.selectDefaultTrack = !1;
      var o = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
      this.setSubtitleTrack(t, o);
    } }]) && R(l.prototype, e), _;
  }(S.default);
  function b(v) {
    for (var h = [], E = 0; E < v.length; E++) {
      var _ = v[E];
      _.kind === "subtitles" && _.label && h.push(v[E]);
    }
    return h;
  }
  I.default = a;
}, "./src/controller/timeline-controller.ts": function(V, I, f) {
  f.r(I), f.d(I, "TimelineController", function() {
    return h;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/events.ts"), S = f("./src/utils/cea-608-parser.ts"), k = f("./src/utils/output-filter.ts"), R = f("./src/utils/webvtt-parser.ts"), L = f("./src/utils/texttrack-utils.ts"), a = f("./src/utils/imsc1-ttml-parser.ts"), b = f("./src/types/loader.ts"), v = f("./src/utils/logger.ts"), h = function() {
    function _(e) {
      if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }, this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, this.config.enableCEA708Captions) {
        var s = new k.default(this, "textTrack1"), t = new k.default(this, "textTrack2"), o = new k.default(this, "textTrack3"), u = new k.default(this, "textTrack4");
        this.cea608Parser1 = new S.default(1, s, t), this.cea608Parser2 = new S.default(3, o, u);
      }
      e.on(y.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(y.Events.FRAG_LOADING, this.onFragLoading, this), e.on(y.Events.FRAG_LOADED, this.onFragLoaded, this), e.on(y.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(y.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(y.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(y.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(y.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    var l = _.prototype;
    return l.destroy = function() {
      var e = this.hls;
      e.off(y.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(y.Events.FRAG_LOADING, this.onFragLoading, this), e.off(y.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(y.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(y.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(y.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(y.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(y.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
    }, l.addCues = function(e, s, t, o, u) {
      for (var n, c, p, m, g = !1, i = u.length; i--; ) {
        var r = u[i], d = (n = r[0], c = r[1], p = s, m = t, Math.min(c, m) - Math.max(n, p));
        if (d >= 0 && (r[0] = Math.min(r[0], s), r[1] = Math.max(r[1], t), g = !0, d / (t - s) > 0.5))
          return;
      }
      if (g || u.push([s, t]), this.config.renderTextTracksNatively) {
        var x = this.captionsTracks[e];
        this.Cues.newCue(x, s, t, o);
      } else {
        var T = this.Cues.newCue(null, s, t, o);
        this.hls.trigger(y.Events.CUES_PARSED, { type: "captions", cues: T, track: e });
      }
    }, l.onInitPtsFound = function(e, s) {
      var t = this, o = s.frag, u = s.id, n = s.initPTS, c = s.timescale, p = this.unparsedVttFrags;
      u === "main" && (this.initPTS[o.cc] = n, this.timescale[o.cc] = c), p.length && (this.unparsedVttFrags = [], p.forEach(function(m) {
        t.onFragLoaded(y.Events.FRAG_LOADED, m);
      }));
    }, l.getExistingTrack = function(e) {
      var s = this.media;
      if (s)
        for (var t = 0; t < s.textTracks.length; t++) {
          var o = s.textTracks[t];
          if (o[e])
            return o;
        }
      return null;
    }, l.createCaptionsTrack = function(e) {
      this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
    }, l.createNativeTrack = function(e) {
      if (!this.captionsTracks[e]) {
        var s = this.captionsProperties, t = this.captionsTracks, o = this.media, u = s[e], n = u.label, c = u.languageCode, p = this.getExistingTrack(e);
        if (p)
          t[e] = p, Object(L.clearCurrentCues)(t[e]), Object(L.sendAddTrackEvent)(t[e], o);
        else {
          var m = this.createTextTrack("captions", n, c);
          m && (m[e] = !0, t[e] = m);
        }
      }
    }, l.createNonNativeTrack = function(e) {
      if (!this.nonNativeCaptionsTracks[e]) {
        var s = this.captionsProperties[e];
        if (s) {
          var t = { _id: e, label: s.label, kind: "captions", default: !!s.media && !!s.media.default, closedCaptions: s.media };
          this.nonNativeCaptionsTracks[e] = t, this.hls.trigger(y.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [t] });
        }
      }
    }, l.createTextTrack = function(e, s, t) {
      var o = this.media;
      if (o)
        return o.addTextTrack(e, s, t);
    }, l.onMediaAttaching = function(e, s) {
      this.media = s.media, this._cleanTracks();
    }, l.onMediaDetaching = function() {
      var e = this.captionsTracks;
      Object.keys(e).forEach(function(s) {
        Object(L.clearCurrentCues)(e[s]), delete e[s];
      }), this.nonNativeCaptionsTracks = {};
    }, l.onManifestLoading = function() {
      this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
    }, l._cleanTracks = function() {
      var e = this.media;
      if (e) {
        var s = e.textTracks;
        if (s)
          for (var t = 0; t < s.length; t++)
            Object(L.clearCurrentCues)(s[t]);
      }
    }, l.onSubtitleTracksUpdated = function(e, s) {
      var t = this;
      this.textTracks = [];
      var o = s.subtitleTracks || [], u = o.some(function(m) {
        return m.textCodec === a.IMSC1_CODEC;
      });
      if (this.config.enableWebVTT || u && this.config.enableIMSC1) {
        var n = this.tracks && o && this.tracks.length === o.length;
        if (this.tracks = o || [], this.config.renderTextTracksNatively) {
          var c = this.media ? this.media.textTracks : [];
          this.tracks.forEach(function(m, g) {
            var i;
            if (g < c.length) {
              for (var r = null, d = 0; d < c.length; d++)
                if (E(c[d], m)) {
                  r = c[d];
                  break;
                }
              r && (i = r);
            }
            i ? Object(L.clearCurrentCues)(i) : (i = t.createTextTrack("subtitles", m.name, m.lang)) && (i.mode = "disabled"), i && (i.groupId = m.groupId, t.textTracks.push(i));
          });
        } else if (!n && this.tracks && this.tracks.length) {
          var p = this.tracks.map(function(m) {
            return { label: m.name, kind: m.type.toLowerCase(), default: m.default, subtitleTrack: m };
          });
          this.hls.trigger(y.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: p });
        }
      }
    }, l.onManifestLoaded = function(e, s) {
      var t = this;
      this.config.enableCEA708Captions && s.captions && s.captions.forEach(function(o) {
        var u = /(?:CC|SERVICE)([1-4])/.exec(o.instreamId);
        if (u) {
          var n = "textTrack" + u[1], c = t.captionsProperties[n];
          c && (c.label = o.name, o.lang && (c.languageCode = o.lang), c.media = o);
        }
      });
    }, l.onFragLoading = function(e, s) {
      var t = this.cea608Parser1, o = this.cea608Parser2, u = this.lastSn;
      if (this.enabled && t && o && s.frag.type === b.PlaylistLevelType.MAIN) {
        var n = s.frag.sn;
        n !== u + 1 && (t.reset(), o.reset()), this.lastSn = n;
      }
    }, l.onFragLoaded = function(e, s) {
      var t = s.frag, o = s.payload, u = this.initPTS, n = this.unparsedVttFrags;
      if (t.type === b.PlaylistLevelType.SUBTITLE)
        if (o.byteLength) {
          if (!Object(D.isFiniteNumber)(u[t.cc]))
            return n.push(s), void (u.length && this.hls.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: new Error("Missing initial subtitle PTS") }));
          var c = t.decryptdata;
          if (c == null || c.key == null || c.method !== "AES-128") {
            var p = this.tracks[t.level], m = this.vttCCs;
            m[t.cc] || (m[t.cc] = { start: t.start, prevCC: this.prevCC, new: !0 }, this.prevCC = t.cc), p && p.textCodec === a.IMSC1_CODEC ? this._parseIMSC1(t, o) : this._parseVTTs(t, o, m);
          }
        } else
          this.hls.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: new Error("Empty subtitle payload") });
    }, l._parseIMSC1 = function(e, s) {
      var t = this, o = this.hls;
      Object(a.parseIMSC1)(s, this.initPTS[e.cc], this.timescale[e.cc], function(u) {
        t._appendCues(u, e.level), o.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
      }, function(u) {
        v.logger.log("Failed to parse IMSC1: " + u), o.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e, error: u });
      });
    }, l._parseVTTs = function(e, s, t) {
      var o = this, u = this.hls;
      Object(R.parseWebVTT)(s, this.initPTS[e.cc], this.timescale[e.cc], t, e.cc, e.start, function(n) {
        o._appendCues(n, e.level), u.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
      }, function(n) {
        o._fallbackToIMSC1(e, s), v.logger.log("Failed to parse VTT cue: " + n), u.trigger(y.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e, error: n });
      });
    }, l._fallbackToIMSC1 = function(e, s) {
      var t = this, o = this.tracks[e.level];
      o.textCodec || Object(a.parseIMSC1)(s, this.initPTS[e.cc], this.timescale[e.cc], function() {
        o.textCodec = a.IMSC1_CODEC, t._parseIMSC1(e, s);
      }, function() {
        o.textCodec = "wvtt";
      });
    }, l._appendCues = function(e, s) {
      var t = this.hls;
      if (this.config.renderTextTracksNatively) {
        var o = this.textTracks[s];
        if (o.mode === "disabled")
          return;
        e.forEach(function(n) {
          return Object(L.addCueToTrack)(o, n);
        });
      } else {
        var u = this.tracks[s].default ? "default" : "subtitles" + s;
        t.trigger(y.Events.CUES_PARSED, { type: "subtitles", cues: e, track: u });
      }
    }, l.onFragDecrypted = function(e, s) {
      var t = s.frag;
      if (t.type === b.PlaylistLevelType.SUBTITLE) {
        if (!Object(D.isFiniteNumber)(this.initPTS[t.cc]))
          return void this.unparsedVttFrags.push(s);
        this.onFragLoaded(y.Events.FRAG_LOADED, s);
      }
    }, l.onSubtitleTracksCleared = function() {
      this.tracks = [], this.captionsTracks = {};
    }, l.onFragParsingUserdata = function(e, s) {
      var t = this.cea608Parser1, o = this.cea608Parser2;
      if (this.enabled && t && o)
        for (var u = 0; u < s.samples.length; u++) {
          var n = s.samples[u].bytes;
          if (n) {
            var c = this.extractCea608Data(n);
            t.addData(s.samples[u].pts, c[0]), o.addData(s.samples[u].pts, c[1]);
          }
        }
    }, l.onBufferFlushing = function(e, s) {
      var t = s.startOffset, o = s.endOffset, u = s.endOffsetSubtitles, n = s.type, c = this.media;
      if (c && !(c.currentTime < o)) {
        if (!n || n === "video") {
          var p = this.captionsTracks;
          Object.keys(p).forEach(function(g) {
            return Object(L.removeCuesInRange)(p[g], t, o);
          });
        }
        if (this.config.renderTextTracksNatively && t === 0 && u !== void 0) {
          var m = this.textTracks;
          Object.keys(m).forEach(function(g) {
            return Object(L.removeCuesInRange)(m[g], t, u);
          });
        }
      }
    }, l.extractCea608Data = function(e) {
      for (var s = 31 & e[0], t = 2, o = [[], []], u = 0; u < s; u++) {
        var n = e[t++], c = 127 & e[t++], p = 127 & e[t++], m = 3 & n;
        c === 0 && p === 0 || 4 & n && (m !== 0 && m !== 1 || (o[m].push(c), o[m].push(p)));
      }
      return o;
    }, _;
  }();
  function E(_, l) {
    return _ && _.label === l.name && !(_.textTrack1 || _.textTrack2);
  }
}, "./src/crypt/aes-crypto.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return D;
  });
  var D = function() {
    function y(S, k) {
      this.subtle = void 0, this.aesIV = void 0, this.subtle = S, this.aesIV = k;
    }
    return y.prototype.decrypt = function(S, k) {
      return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, k, S);
    }, y;
  }();
}, "./src/crypt/aes-decryptor.ts": function(V, I, f) {
  f.r(I), f.d(I, "removePadding", function() {
    return y;
  }), f.d(I, "default", function() {
    return S;
  });
  var D = f("./src/utils/typed-array.ts");
  function y(k) {
    var R = k.byteLength, L = R && new DataView(k.buffer).getUint8(R - 1);
    return L ? Object(D.sliceUint8)(k, 0, R - L) : k;
  }
  var S = function() {
    function k() {
      this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
    }
    var R = k.prototype;
    return R.uint8ArrayToUint32Array_ = function(L) {
      for (var a = new DataView(L), b = new Uint32Array(4), v = 0; v < 4; v++)
        b[v] = a.getUint32(4 * v);
      return b;
    }, R.initTable = function() {
      var L = this.sBox, a = this.invSBox, b = this.subMix, v = b[0], h = b[1], E = b[2], _ = b[3], l = this.invSubMix, e = l[0], s = l[1], t = l[2], o = l[3], u = new Uint32Array(256), n = 0, c = 0, p = 0;
      for (p = 0; p < 256; p++)
        u[p] = p < 128 ? p << 1 : p << 1 ^ 283;
      for (p = 0; p < 256; p++) {
        var m = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
        m = m >>> 8 ^ 255 & m ^ 99, L[n] = m, a[m] = n;
        var g = u[n], i = u[g], r = u[i], d = 257 * u[m] ^ 16843008 * m;
        v[n] = d << 24 | d >>> 8, h[n] = d << 16 | d >>> 16, E[n] = d << 8 | d >>> 24, _[n] = d, d = 16843009 * r ^ 65537 * i ^ 257 * g ^ 16843008 * n, e[m] = d << 24 | d >>> 8, s[m] = d << 16 | d >>> 16, t[m] = d << 8 | d >>> 24, o[m] = d, n ? (n = g ^ u[u[u[r ^ g]]], c ^= u[u[c]]) : n = c = 1;
      }
    }, R.expandKey = function(L) {
      for (var a = this.uint8ArrayToUint32Array_(L), b = !0, v = 0; v < a.length && b; )
        b = a[v] === this.key[v], v++;
      if (!b) {
        this.key = a;
        var h = this.keySize = a.length;
        if (h !== 4 && h !== 6 && h !== 8)
          throw new Error("Invalid aes key size=" + h);
        var E, _, l, e, s = this.ksRows = 4 * (h + 6 + 1), t = this.keySchedule = new Uint32Array(s), o = this.invKeySchedule = new Uint32Array(s), u = this.sBox, n = this.rcon, c = this.invSubMix, p = c[0], m = c[1], g = c[2], i = c[3];
        for (E = 0; E < s; E++)
          E < h ? l = t[E] = a[E] : (e = l, E % h == 0 ? (e = u[(e = e << 8 | e >>> 24) >>> 24] << 24 | u[e >>> 16 & 255] << 16 | u[e >>> 8 & 255] << 8 | u[255 & e], e ^= n[E / h | 0] << 24) : h > 6 && E % h == 4 && (e = u[e >>> 24] << 24 | u[e >>> 16 & 255] << 16 | u[e >>> 8 & 255] << 8 | u[255 & e]), t[E] = l = (t[E - h] ^ e) >>> 0);
        for (_ = 0; _ < s; _++)
          E = s - _, e = 3 & _ ? t[E] : t[E - 4], o[_] = _ < 4 || E <= 4 ? e : p[u[e >>> 24]] ^ m[u[e >>> 16 & 255]] ^ g[u[e >>> 8 & 255]] ^ i[u[255 & e]], o[_] = o[_] >>> 0;
      }
    }, R.networkToHostOrderSwap = function(L) {
      return L << 24 | (65280 & L) << 8 | (16711680 & L) >> 8 | L >>> 24;
    }, R.decrypt = function(L, a, b) {
      for (var v, h, E, _, l, e, s, t, o, u, n, c, p, m, g = this.keySize + 6, i = this.invKeySchedule, r = this.invSBox, d = this.invSubMix, x = d[0], T = d[1], A = d[2], C = d[3], w = this.uint8ArrayToUint32Array_(b), O = w[0], P = w[1], F = w[2], B = w[3], N = new Int32Array(L), M = new Int32Array(N.length), G = this.networkToHostOrderSwap; a < N.length; ) {
        for (o = G(N[a]), u = G(N[a + 1]), n = G(N[a + 2]), c = G(N[a + 3]), l = o ^ i[0], e = c ^ i[1], s = n ^ i[2], t = u ^ i[3], p = 4, m = 1; m < g; m++)
          v = x[l >>> 24] ^ T[e >> 16 & 255] ^ A[s >> 8 & 255] ^ C[255 & t] ^ i[p], h = x[e >>> 24] ^ T[s >> 16 & 255] ^ A[t >> 8 & 255] ^ C[255 & l] ^ i[p + 1], E = x[s >>> 24] ^ T[t >> 16 & 255] ^ A[l >> 8 & 255] ^ C[255 & e] ^ i[p + 2], _ = x[t >>> 24] ^ T[l >> 16 & 255] ^ A[e >> 8 & 255] ^ C[255 & s] ^ i[p + 3], l = v, e = h, s = E, t = _, p += 4;
        v = r[l >>> 24] << 24 ^ r[e >> 16 & 255] << 16 ^ r[s >> 8 & 255] << 8 ^ r[255 & t] ^ i[p], h = r[e >>> 24] << 24 ^ r[s >> 16 & 255] << 16 ^ r[t >> 8 & 255] << 8 ^ r[255 & l] ^ i[p + 1], E = r[s >>> 24] << 24 ^ r[t >> 16 & 255] << 16 ^ r[l >> 8 & 255] << 8 ^ r[255 & e] ^ i[p + 2], _ = r[t >>> 24] << 24 ^ r[l >> 16 & 255] << 16 ^ r[e >> 8 & 255] << 8 ^ r[255 & s] ^ i[p + 3], M[a] = G(v ^ O), M[a + 1] = G(_ ^ P), M[a + 2] = G(E ^ F), M[a + 3] = G(h ^ B), O = o, P = u, F = n, B = c, a += 4;
      }
      return M.buffer;
    }, k;
  }();
}, "./src/crypt/decrypter.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return a;
  });
  var D = f("./src/crypt/aes-crypto.ts"), y = f("./src/crypt/fast-aes-key.ts"), S = f("./src/crypt/aes-decryptor.ts"), k = f("./src/utils/logger.ts"), R = f("./src/utils/mp4-tools.ts"), L = f("./src/utils/typed-array.ts"), a = function() {
    function b(h, E, _) {
      var l = (_ === void 0 ? {} : _).removePKCS7Padding, e = l === void 0 || l;
      if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = h, this.config = E, this.removePKCS7Padding = e, e)
        try {
          var s = self.crypto;
          s && (this.subtle = s.subtle || s.webkitSubtle);
        } catch {
        }
      this.subtle === null && (this.config.enableSoftwareAES = !0);
    }
    var v = b.prototype;
    return v.destroy = function() {
      this.observer = null;
    }, v.isSync = function() {
      return this.config.enableSoftwareAES;
    }, v.flush = function() {
      var h = this.currentResult;
      if (h) {
        var E = new Uint8Array(h);
        return this.reset(), this.removePKCS7Padding ? Object(S.removePadding)(E) : E;
      }
      this.reset();
    }, v.reset = function() {
      this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
    }, v.decrypt = function(h, E, _, l) {
      if (this.config.enableSoftwareAES) {
        this.softwareDecrypt(new Uint8Array(h), E, _);
        var e = this.flush();
        e && l(e.buffer);
      } else
        this.webCryptoDecrypt(new Uint8Array(h), E, _).then(l);
    }, v.softwareDecrypt = function(h, E, _) {
      var l = this.currentIV, e = this.currentResult, s = this.remainderData;
      this.logOnce("JS AES decrypt"), s && (h = Object(R.appendUint8Array)(s, h), this.remainderData = null);
      var t = this.getValidChunk(h);
      if (!t.length)
        return null;
      l && (_ = l);
      var o = this.softwareDecrypter;
      o || (o = this.softwareDecrypter = new S.default()), o.expandKey(E);
      var u = e;
      return this.currentResult = o.decrypt(t.buffer, 0, _), this.currentIV = Object(L.sliceUint8)(t, -16).buffer, u || null;
    }, v.webCryptoDecrypt = function(h, E, _) {
      var l = this, e = this.subtle;
      return this.key === E && this.fastAesKey || (this.key = E, this.fastAesKey = new y.default(e, E)), this.fastAesKey.expandKey().then(function(s) {
        return e ? new D.default(e, _).decrypt(h.buffer, s) : Promise.reject(new Error("web crypto not initialized"));
      }).catch(function(s) {
        return l.onWebCryptoError(s, h, E, _);
      });
    }, v.onWebCryptoError = function(h, E, _, l) {
      return k.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", h), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(E, _, l);
    }, v.getValidChunk = function(h) {
      var E = h, _ = h.length - h.length % 16;
      return _ !== h.length && (E = Object(L.sliceUint8)(h, 0, _), this.remainderData = Object(L.sliceUint8)(h, _)), E;
    }, v.logOnce = function(h) {
      this.logEnabled && (k.logger.log("[decrypter.ts]: " + h), this.logEnabled = !1);
    }, b;
  }();
}, "./src/crypt/fast-aes-key.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return D;
  });
  var D = function() {
    function y(S, k) {
      this.subtle = void 0, this.key = void 0, this.subtle = S, this.key = k;
    }
    return y.prototype.expandKey = function() {
      return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]);
    }, y;
  }();
}, "./src/demux/aacdemuxer.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/demux/base-audio-demuxer.ts"), y = f("./src/demux/adts.ts"), S = f("./src/utils/logger.ts"), k = f("./src/demux/id3.ts");
  function R(a, b) {
    return (R = Object.setPrototypeOf || function(v, h) {
      return v.__proto__ = h, v;
    })(a, b);
  }
  var L = function(a) {
    var b, v;
    function h(_, l) {
      var e;
      return (e = a.call(this) || this).observer = void 0, e.config = void 0, e.observer = _, e.config = l, e;
    }
    v = a, (b = h).prototype = Object.create(v.prototype), b.prototype.constructor = b, R(b, v);
    var E = h.prototype;
    return E.resetInitSegment = function(_, l, e) {
      a.prototype.resetInitSegment.call(this, _, l, e), this._audioTrack = { container: "audio/adts", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: !0, samples: [], manifestCodec: _, duration: e, inputTimeScale: 9e4, dropped: 0 };
    }, h.probe = function(_) {
      if (!_)
        return !1;
      for (var l = (k.getID3Data(_, 0) || []).length, e = _.length; l < e; l++)
        if (y.probe(_, l))
          return S.logger.log("ADTS sync word found !"), !0;
      return !1;
    }, E.canParse = function(_, l) {
      return y.canParse(_, l);
    }, E.appendFrame = function(_, l, e) {
      y.initTrackConfig(_, this.observer, l, e, _.manifestCodec);
      var s = y.appendFrame(_, l, e, this.initPTS, this.frameIndex);
      if (s && s.missing === 0)
        return s;
    }, h;
  }(D.default);
  L.minProbeByteLength = 9, I.default = L;
}, "./src/demux/adts.ts": function(V, I, f) {
  f.r(I), f.d(I, "getAudioConfig", function() {
    return k;
  }), f.d(I, "isHeaderPattern", function() {
    return R;
  }), f.d(I, "getHeaderLength", function() {
    return L;
  }), f.d(I, "getFullFrameLength", function() {
    return a;
  }), f.d(I, "canGetFrameLength", function() {
    return b;
  }), f.d(I, "isHeader", function() {
    return v;
  }), f.d(I, "canParse", function() {
    return h;
  }), f.d(I, "probe", function() {
    return E;
  }), f.d(I, "initTrackConfig", function() {
    return _;
  }), f.d(I, "getFrameDuration", function() {
    return l;
  }), f.d(I, "parseFrameHeader", function() {
    return e;
  }), f.d(I, "appendFrame", function() {
    return s;
  });
  var D = f("./src/utils/logger.ts"), y = f("./src/errors.ts"), S = f("./src/events.ts");
  function k(t, o, u, n) {
    var c, p, m, g, i = navigator.userAgent.toLowerCase(), r = n, d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    c = 1 + ((192 & o[u + 2]) >>> 6);
    var x = (60 & o[u + 2]) >>> 2;
    if (!(x > d.length - 1))
      return m = (1 & o[u + 2]) << 2, m |= (192 & o[u + 3]) >>> 6, D.logger.log("manifest codec:" + n + ", ADTS type:" + c + ", samplingIndex:" + x), /firefox/i.test(i) ? x >= 6 ? (c = 5, g = new Array(4), p = x - 3) : (c = 2, g = new Array(2), p = x) : i.indexOf("android") !== -1 ? (c = 2, g = new Array(2), p = x) : (c = 5, g = new Array(4), n && (n.indexOf("mp4a.40.29") !== -1 || n.indexOf("mp4a.40.5") !== -1) || !n && x >= 6 ? p = x - 3 : ((n && n.indexOf("mp4a.40.2") !== -1 && (x >= 6 && m === 1 || /vivaldi/i.test(i)) || !n && m === 1) && (c = 2, g = new Array(2)), p = x)), g[0] = c << 3, g[0] |= (14 & x) >> 1, g[1] |= (1 & x) << 7, g[1] |= m << 3, c === 5 && (g[1] |= (14 & p) >> 1, g[2] = (1 & p) << 7, g[2] |= 8, g[3] = 0), { config: g, samplerate: d[x], channelCount: m, codec: "mp4a.40." + c, manifestCodec: r };
    t.trigger(S.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + x });
  }
  function R(t, o) {
    return t[o] === 255 && (246 & t[o + 1]) == 240;
  }
  function L(t, o) {
    return 1 & t[o + 1] ? 7 : 9;
  }
  function a(t, o) {
    return (3 & t[o + 3]) << 11 | t[o + 4] << 3 | (224 & t[o + 5]) >>> 5;
  }
  function b(t, o) {
    return o + 5 < t.length;
  }
  function v(t, o) {
    return o + 1 < t.length && R(t, o);
  }
  function h(t, o) {
    return b(t, o) && R(t, o) && a(t, o) <= t.length - o;
  }
  function E(t, o) {
    if (v(t, o)) {
      var u = L(t, o);
      if (o + u >= t.length)
        return !1;
      var n = a(t, o);
      if (n <= u)
        return !1;
      var c = o + n;
      return c === t.length || v(t, c);
    }
    return !1;
  }
  function _(t, o, u, n, c) {
    if (!t.samplerate) {
      var p = k(o, u, n, c);
      if (!p)
        return;
      t.config = p.config, t.samplerate = p.samplerate, t.channelCount = p.channelCount, t.codec = p.codec, t.manifestCodec = p.manifestCodec, D.logger.log("parsed codec:" + t.codec + ", rate:" + p.samplerate + ", channels:" + p.channelCount);
    }
  }
  function l(t) {
    return 9216e4 / t;
  }
  function e(t, o, u, n, c) {
    var p = L(t, o), m = a(t, o);
    if ((m -= p) > 0)
      return { headerLength: p, frameLength: m, stamp: u + n * c };
  }
  function s(t, o, u, n, c) {
    var p = e(o, u, n, c, l(t.samplerate));
    if (p) {
      var m, g = p.frameLength, i = p.headerLength, r = p.stamp, d = i + g, x = Math.max(0, u + d - o.length);
      x ? (m = new Uint8Array(d - i)).set(o.subarray(u + i, o.length), 0) : m = o.subarray(u + i, u + d);
      var T = { unit: m, pts: r };
      return x || t.samples.push(T), { sample: T, length: d, missing: x };
    }
  }
}, "./src/demux/base-audio-demuxer.ts": function(V, I, f) {
  f.r(I), f.d(I, "initPTSFn", function() {
    return a;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/demux/id3.ts"), S = f("./src/demux/dummy-demuxed-track.ts"), k = f("./src/utils/mp4-tools.ts"), R = f("./src/utils/typed-array.ts"), L = function() {
    function b() {
      this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null;
    }
    var v = b.prototype;
    return v.resetInitSegment = function(h, E, _) {
      this._id3Track = { type: "id3", id: 0, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
    }, v.resetTimeStamp = function() {
    }, v.resetContiguity = function() {
    }, v.canParse = function(h, E) {
      return !1;
    }, v.appendFrame = function(h, E, _) {
    }, v.demux = function(h, E) {
      this.cachedData && (h = Object(k.appendUint8Array)(this.cachedData, h), this.cachedData = null);
      var _, l, e = y.getID3Data(h, 0), s = e ? e.length : 0, t = this._audioTrack, o = this._id3Track, u = e ? y.getTimeStamp(e) : void 0, n = h.length;
      for (this.frameIndex !== 0 && this.initPTS !== null || (this.initPTS = a(u, E)), e && e.length > 0 && o.samples.push({ pts: this.initPTS, dts: this.initPTS, data: e }), l = this.initPTS; s < n; ) {
        if (this.canParse(h, s)) {
          var c = this.appendFrame(t, h, s);
          c ? (this.frameIndex++, l = c.sample.pts, _ = s += c.length) : s = n;
        } else
          y.canParse(h, s) ? (e = y.getID3Data(h, s), o.samples.push({ pts: l, dts: l, data: e }), _ = s += e.length) : s++;
        if (s === n && _ !== n) {
          var p = Object(R.sliceUint8)(h, _);
          this.cachedData ? this.cachedData = Object(k.appendUint8Array)(this.cachedData, p) : this.cachedData = p;
        }
      }
      return { audioTrack: t, avcTrack: Object(S.dummyTrack)(), id3Track: o, textTrack: Object(S.dummyTrack)() };
    }, v.demuxSampleAes = function(h, E, _) {
      return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
    }, v.flush = function(h) {
      var E = this.cachedData;
      return E && (this.cachedData = null, this.demux(E, 0)), this.frameIndex = 0, { audioTrack: this._audioTrack, avcTrack: Object(S.dummyTrack)(), id3Track: this._id3Track, textTrack: Object(S.dummyTrack)() };
    }, v.destroy = function() {
    }, b;
  }(), a = function(b, v) {
    return Object(D.isFiniteNumber)(b) ? 90 * b : 9e4 * v;
  };
  I.default = L;
}, "./src/demux/chunk-cache.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return D;
  });
  var D = function() {
    function y() {
      this.chunks = [], this.dataLength = 0;
    }
    var S = y.prototype;
    return S.push = function(k) {
      this.chunks.push(k), this.dataLength += k.length;
    }, S.flush = function() {
      var k, R = this.chunks, L = this.dataLength;
      return R.length ? (k = R.length === 1 ? R[0] : function(a, b) {
        for (var v = new Uint8Array(b), h = 0, E = 0; E < a.length; E++) {
          var _ = a[E];
          v.set(_, h), h += _.length;
        }
        return v;
      }(R, L), this.reset(), k) : new Uint8Array(0);
    }, S.reset = function() {
      this.chunks.length = 0, this.dataLength = 0;
    }, y;
  }();
}, "./src/demux/dummy-demuxed-track.ts": function(V, I, f) {
  function D() {
    return { type: "", id: -1, pid: -1, inputTimeScale: 9e4, sequenceNumber: -1, samples: [], dropped: 0 };
  }
  f.r(I), f.d(I, "dummyTrack", function() {
    return D;
  });
}, "./src/demux/exp-golomb.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/utils/logger.ts"), y = function() {
    function S(R) {
      this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = R, this.bytesAvailable = R.byteLength, this.word = 0, this.bitsAvailable = 0;
    }
    var k = S.prototype;
    return k.loadWord = function() {
      var R = this.data, L = this.bytesAvailable, a = R.byteLength - L, b = new Uint8Array(4), v = Math.min(4, L);
      if (v === 0)
        throw new Error("no bytes available");
      b.set(R.subarray(a, a + v)), this.word = new DataView(b.buffer).getUint32(0), this.bitsAvailable = 8 * v, this.bytesAvailable -= v;
    }, k.skipBits = function(R) {
      var L;
      this.bitsAvailable > R ? (this.word <<= R, this.bitsAvailable -= R) : (R -= this.bitsAvailable, R -= (L = R >> 3) >> 3, this.bytesAvailable -= L, this.loadWord(), this.word <<= R, this.bitsAvailable -= R);
    }, k.readBits = function(R) {
      var L = Math.min(this.bitsAvailable, R), a = this.word >>> 32 - L;
      return R > 32 && D.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= L, this.bitsAvailable > 0 ? this.word <<= L : this.bytesAvailable > 0 && this.loadWord(), (L = R - L) > 0 && this.bitsAvailable ? a << L | this.readBits(L) : a;
    }, k.skipLZ = function() {
      var R;
      for (R = 0; R < this.bitsAvailable; ++R)
        if (this.word & 2147483648 >>> R)
          return this.word <<= R, this.bitsAvailable -= R, R;
      return this.loadWord(), R + this.skipLZ();
    }, k.skipUEG = function() {
      this.skipBits(1 + this.skipLZ());
    }, k.skipEG = function() {
      this.skipBits(1 + this.skipLZ());
    }, k.readUEG = function() {
      var R = this.skipLZ();
      return this.readBits(R + 1) - 1;
    }, k.readEG = function() {
      var R = this.readUEG();
      return 1 & R ? 1 + R >>> 1 : -1 * (R >>> 1);
    }, k.readBoolean = function() {
      return this.readBits(1) === 1;
    }, k.readUByte = function() {
      return this.readBits(8);
    }, k.readUShort = function() {
      return this.readBits(16);
    }, k.readUInt = function() {
      return this.readBits(32);
    }, k.skipScalingList = function(R) {
      for (var L = 8, a = 8, b = 0; b < R; b++)
        a !== 0 && (a = (L + this.readEG() + 256) % 256), L = a === 0 ? L : a;
    }, k.readSPS = function() {
      var R, L, a, b = 0, v = 0, h = 0, E = 0, _ = this.readUByte.bind(this), l = this.readBits.bind(this), e = this.readUEG.bind(this), s = this.readBoolean.bind(this), t = this.skipBits.bind(this), o = this.skipEG.bind(this), u = this.skipUEG.bind(this), n = this.skipScalingList.bind(this);
      _();
      var c = _();
      if (l(5), t(3), _(), u(), c === 100 || c === 110 || c === 122 || c === 244 || c === 44 || c === 83 || c === 86 || c === 118 || c === 128) {
        var p = e();
        if (p === 3 && t(1), u(), u(), t(1), s())
          for (L = p !== 3 ? 8 : 12, a = 0; a < L; a++)
            s() && n(a < 6 ? 16 : 64);
      }
      u();
      var m = e();
      if (m === 0)
        e();
      else if (m === 1)
        for (t(1), o(), o(), R = e(), a = 0; a < R; a++)
          o();
      u(), t(1);
      var g = e(), i = e(), r = l(1);
      r === 0 && t(1), t(1), s() && (b = e(), v = e(), h = e(), E = e());
      var d = [1, 1];
      if (s() && s())
        switch (_()) {
          case 1:
            d = [1, 1];
            break;
          case 2:
            d = [12, 11];
            break;
          case 3:
            d = [10, 11];
            break;
          case 4:
            d = [16, 11];
            break;
          case 5:
            d = [40, 33];
            break;
          case 6:
            d = [24, 11];
            break;
          case 7:
            d = [20, 11];
            break;
          case 8:
            d = [32, 11];
            break;
          case 9:
            d = [80, 33];
            break;
          case 10:
            d = [18, 11];
            break;
          case 11:
            d = [15, 11];
            break;
          case 12:
            d = [64, 33];
            break;
          case 13:
            d = [160, 99];
            break;
          case 14:
            d = [4, 3];
            break;
          case 15:
            d = [3, 2];
            break;
          case 16:
            d = [2, 1];
            break;
          case 255:
            d = [_() << 8 | _(), _() << 8 | _()];
        }
      return { width: Math.ceil(16 * (g + 1) - 2 * b - 2 * v), height: (2 - r) * (i + 1) * 16 - (r ? 2 : 4) * (h + E), pixelRatio: d };
    }, k.readSliceType = function() {
      return this.readUByte(), this.readUEG(), this.readUEG();
    }, S;
  }();
  I.default = y;
}, "./src/demux/id3.ts": function(V, I, f) {
  f.r(I), f.d(I, "isHeader", function() {
    return y;
  }), f.d(I, "isFooter", function() {
    return S;
  }), f.d(I, "getID3Data", function() {
    return k;
  }), f.d(I, "canParse", function() {
    return L;
  }), f.d(I, "getTimeStamp", function() {
    return a;
  }), f.d(I, "isTimeStampFrame", function() {
    return b;
  }), f.d(I, "getID3Frames", function() {
    return h;
  }), f.d(I, "decodeFrame", function() {
    return E;
  }), f.d(I, "utf8ArrayToStr", function() {
    return t;
  }), f.d(I, "testables", function() {
    return o;
  });
  var D, y = function(u, n) {
    return n + 10 <= u.length && u[n] === 73 && u[n + 1] === 68 && u[n + 2] === 51 && u[n + 3] < 255 && u[n + 4] < 255 && u[n + 6] < 128 && u[n + 7] < 128 && u[n + 8] < 128 && u[n + 9] < 128;
  }, S = function(u, n) {
    return n + 10 <= u.length && u[n] === 51 && u[n + 1] === 68 && u[n + 2] === 73 && u[n + 3] < 255 && u[n + 4] < 255 && u[n + 6] < 128 && u[n + 7] < 128 && u[n + 8] < 128 && u[n + 9] < 128;
  }, k = function(u, n) {
    for (var c = n, p = 0; y(u, n); )
      p += 10, p += R(u, n + 6), S(u, n + 10) && (p += 10), n += p;
    if (p > 0)
      return u.subarray(c, c + p);
  }, R = function(u, n) {
    var c = 0;
    return c = (127 & u[n]) << 21, c |= (127 & u[n + 1]) << 14, c |= (127 & u[n + 2]) << 7, c |= 127 & u[n + 3];
  }, L = function(u, n) {
    return y(u, n) && R(u, n + 6) + 10 <= u.length - n;
  }, a = function(u) {
    for (var n = h(u), c = 0; c < n.length; c++) {
      var p = n[c];
      if (b(p))
        return s(p);
    }
  }, b = function(u) {
    return u && u.key === "PRIV" && u.info === "com.apple.streaming.transportStreamTimestamp";
  }, v = function(u) {
    var n = String.fromCharCode(u[0], u[1], u[2], u[3]), c = R(u, 4);
    return { type: n, size: c, data: u.subarray(10, 10 + c) };
  }, h = function(u) {
    for (var n = 0, c = []; y(u, n); ) {
      for (var p = R(u, n + 6), m = (n += 10) + p; n + 8 < m; ) {
        var g = v(u.subarray(n)), i = E(g);
        i && c.push(i), n += g.size + 10;
      }
      S(u, n) && (n += 10);
    }
    return c;
  }, E = function(u) {
    return u.type === "PRIV" ? _(u) : u.type[0] === "W" ? e(u) : l(u);
  }, _ = function(u) {
    if (!(u.size < 2)) {
      var n = t(u.data, !0), c = new Uint8Array(u.data.subarray(n.length + 1));
      return { key: u.type, info: n, data: c.buffer };
    }
  }, l = function(u) {
    if (!(u.size < 2)) {
      if (u.type === "TXXX") {
        var n = 1, c = t(u.data.subarray(n), !0);
        n += c.length + 1;
        var p = t(u.data.subarray(n));
        return { key: u.type, info: c, data: p };
      }
      var m = t(u.data.subarray(1));
      return { key: u.type, data: m };
    }
  }, e = function(u) {
    if (u.type === "WXXX") {
      if (u.size < 2)
        return;
      var n = 1, c = t(u.data.subarray(n), !0);
      n += c.length + 1;
      var p = t(u.data.subarray(n));
      return { key: u.type, info: c, data: p };
    }
    var m = t(u.data);
    return { key: u.type, data: m };
  }, s = function(u) {
    if (u.data.byteLength === 8) {
      var n = new Uint8Array(u.data), c = 1 & n[3], p = (n[4] << 23) + (n[5] << 15) + (n[6] << 7) + n[7];
      return p /= 45, c && (p += 4772185884e-2), Math.round(p);
    }
  }, t = function(u, n) {
    n === void 0 && (n = !1);
    var c = (D || self.TextDecoder === void 0 || (D = new self.TextDecoder("utf-8")), D);
    if (c) {
      var p = c.decode(u);
      if (n) {
        var m = p.indexOf("\0");
        return m !== -1 ? p.substring(0, m) : p;
      }
      return p.replace(/\0/g, "");
    }
    for (var g, i, r, d = u.length, x = "", T = 0; T < d; ) {
      if ((g = u[T++]) === 0 && n)
        return x;
      if (g !== 0 && g !== 3)
        switch (g >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            x += String.fromCharCode(g);
            break;
          case 12:
          case 13:
            i = u[T++], x += String.fromCharCode((31 & g) << 6 | 63 & i);
            break;
          case 14:
            i = u[T++], r = u[T++], x += String.fromCharCode((15 & g) << 12 | (63 & i) << 6 | (63 & r) << 0);
        }
    }
    return x;
  }, o = { decodeTextFrame: l };
}, "./src/demux/mp3demuxer.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/demux/base-audio-demuxer.ts"), y = f("./src/demux/id3.ts"), S = f("./src/utils/logger.ts"), k = f("./src/demux/mpegaudio.ts");
  function R(a, b) {
    return (R = Object.setPrototypeOf || function(v, h) {
      return v.__proto__ = h, v;
    })(a, b);
  }
  var L = function(a) {
    var b, v;
    function h() {
      return a.apply(this, arguments) || this;
    }
    v = a, (b = h).prototype = Object.create(v.prototype), b.prototype.constructor = b, R(b, v);
    var E = h.prototype;
    return E.resetInitSegment = function(_, l, e) {
      a.prototype.resetInitSegment.call(this, _, l, e), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: !1, samples: [], manifestCodec: _, duration: e, inputTimeScale: 9e4, dropped: 0 };
    }, h.probe = function(_) {
      if (!_)
        return !1;
      for (var l = (y.getID3Data(_, 0) || []).length, e = _.length; l < e; l++)
        if (k.probe(_, l))
          return S.logger.log("MPEG Audio sync word found !"), !0;
      return !1;
    }, E.canParse = function(_, l) {
      return k.canParse(_, l);
    }, E.appendFrame = function(_, l, e) {
      if (this.initPTS !== null)
        return k.appendFrame(_, l, e, this.initPTS, this.frameIndex);
    }, h;
  }(D.default);
  L.minProbeByteLength = 4, I.default = L;
}, "./src/demux/mp4demuxer.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/utils/mp4-tools.ts"), y = f("./src/demux/dummy-demuxed-track.ts"), S = function() {
    function k(L, a) {
      this.remainderData = null, this.config = void 0, this.config = a;
    }
    var R = k.prototype;
    return R.resetTimeStamp = function() {
    }, R.resetInitSegment = function() {
    }, R.resetContiguity = function() {
    }, k.probe = function(L) {
      return Object(D.findBox)({ data: L, start: 0, end: Math.min(L.length, 16384) }, ["moof"]).length > 0;
    }, R.demux = function(L) {
      var a = L, b = Object(y.dummyTrack)();
      if (this.config.progressive) {
        this.remainderData && (a = Object(D.appendUint8Array)(this.remainderData, L));
        var v = Object(D.segmentValidRange)(a);
        this.remainderData = v.remainder, b.samples = v.valid || new Uint8Array();
      } else
        b.samples = a;
      return { audioTrack: Object(y.dummyTrack)(), avcTrack: b, id3Track: Object(y.dummyTrack)(), textTrack: Object(y.dummyTrack)() };
    }, R.flush = function() {
      var L = Object(y.dummyTrack)();
      return L.samples = this.remainderData || new Uint8Array(), this.remainderData = null, { audioTrack: Object(y.dummyTrack)(), avcTrack: L, id3Track: Object(y.dummyTrack)(), textTrack: Object(y.dummyTrack)() };
    }, R.demuxSampleAes = function(L, a, b) {
      return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
    }, R.destroy = function() {
    }, k;
  }();
  S.minProbeByteLength = 1024, I.default = S;
}, "./src/demux/mpegaudio.ts": function(V, I, f) {
  f.r(I), f.d(I, "appendFrame", function() {
    return L;
  }), f.d(I, "parseHeader", function() {
    return a;
  }), f.d(I, "isHeaderPattern", function() {
    return b;
  }), f.d(I, "isHeader", function() {
    return v;
  }), f.d(I, "canParse", function() {
    return h;
  }), f.d(I, "probe", function() {
    return E;
  });
  var D = null, y = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], S = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], k = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], R = [0, 1, 1, 4];
  function L(_, l, e, s, t) {
    if (!(e + 24 > l.length)) {
      var o = a(l, e);
      if (o && e + o.frameLength <= l.length) {
        var u = s + t * (9e4 * o.samplesPerFrame / o.sampleRate), n = { unit: l.subarray(e, e + o.frameLength), pts: u, dts: u };
        return _.config = [], _.channelCount = o.channelCount, _.samplerate = o.sampleRate, _.samples.push(n), { sample: n, length: o.frameLength, missing: 0 };
      }
    }
  }
  function a(_, l) {
    var e = _[l + 1] >> 3 & 3, s = _[l + 1] >> 1 & 3, t = _[l + 2] >> 4 & 15, o = _[l + 2] >> 2 & 3;
    if (e !== 1 && t !== 0 && t !== 15 && o !== 3) {
      var u = _[l + 2] >> 1 & 1, n = _[l + 3] >> 6, c = 1e3 * y[14 * (e === 3 ? 3 - s : s === 3 ? 3 : 4) + t - 1], p = S[3 * (e === 3 ? 0 : e === 2 ? 1 : 2) + o], m = n === 3 ? 1 : 2, g = k[e][s], i = R[s], r = 8 * g * i, d = Math.floor(g * c / p + u) * i;
      if (D === null) {
        var x = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        D = x ? parseInt(x[1]) : 0;
      }
      return D && D <= 87 && s === 2 && c >= 224e3 && n === 0 && (_[l + 3] = 128 | _[l + 3]), { sampleRate: p, channelCount: m, frameLength: d, samplesPerFrame: r };
    }
  }
  function b(_, l) {
    return _[l] === 255 && (224 & _[l + 1]) == 224 && (6 & _[l + 1]) != 0;
  }
  function v(_, l) {
    return l + 1 < _.length && b(_, l);
  }
  function h(_, l) {
    return b(_, l) && 4 <= _.length - l;
  }
  function E(_, l) {
    if (l + 1 < _.length && b(_, l)) {
      var e = a(_, l), s = 4;
      e != null && e.frameLength && (s = e.frameLength);
      var t = l + s;
      return t === _.length || v(_, t);
    }
    return !1;
  }
}, "./src/demux/sample-aes.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/crypt/decrypter.ts"), y = f("./src/demux/tsdemuxer.ts"), S = function() {
    function k(L, a, b) {
      this.keyData = void 0, this.decrypter = void 0, this.keyData = b, this.decrypter = new D.default(L, a, { removePKCS7Padding: !1 });
    }
    var R = k.prototype;
    return R.decryptBuffer = function(L, a) {
      this.decrypter.decrypt(L, this.keyData.key.buffer, this.keyData.iv.buffer, a);
    }, R.decryptAacSample = function(L, a, b, v) {
      var h = L[a].unit, E = h.subarray(16, h.length - h.length % 16), _ = E.buffer.slice(E.byteOffset, E.byteOffset + E.length), l = this;
      this.decryptBuffer(_, function(e) {
        var s = new Uint8Array(e);
        h.set(s, 16), v || l.decryptAacSamples(L, a + 1, b);
      });
    }, R.decryptAacSamples = function(L, a, b) {
      for (; ; a++) {
        if (a >= L.length)
          return void b();
        if (!(L[a].unit.length < 32)) {
          var v = this.decrypter.isSync();
          if (this.decryptAacSample(L, a, b, v), !v)
            return;
        }
      }
    }, R.getAvcEncryptedData = function(L) {
      for (var a = 16 * Math.floor((L.length - 48) / 160) + 16, b = new Int8Array(a), v = 0, h = 32; h <= L.length - 16; h += 160, v += 16)
        b.set(L.subarray(h, h + 16), v);
      return b;
    }, R.getAvcDecryptedUnit = function(L, a) {
      for (var b = new Uint8Array(a), v = 0, h = 32; h <= L.length - 16; h += 160, v += 16)
        L.set(b.subarray(v, v + 16), h);
      return L;
    }, R.decryptAvcSample = function(L, a, b, v, h, E) {
      var _ = Object(y.discardEPB)(h.data), l = this.getAvcEncryptedData(_), e = this;
      this.decryptBuffer(l.buffer, function(s) {
        h.data = e.getAvcDecryptedUnit(_, s), E || e.decryptAvcSamples(L, a, b + 1, v);
      });
    }, R.decryptAvcSamples = function(L, a, b, v) {
      if (L instanceof Uint8Array)
        throw new Error("Cannot decrypt samples of type Uint8Array");
      for (; ; a++, b = 0) {
        if (a >= L.length)
          return void v();
        for (var h = L[a].units; !(b >= h.length); b++) {
          var E = h[b];
          if (!(E.data.length <= 48 || E.type !== 1 && E.type !== 5)) {
            var _ = this.decrypter.isSync();
            if (this.decryptAvcSample(L, a, b, v, E, _), !_)
              return;
          }
        }
      }
    }, k;
  }();
  I.default = S;
}, "./src/demux/transmuxer-interface.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return v;
  });
  var D = f("./node_modules/webworkify-webpack/index.js"), y = f("./src/events.ts"), S = f("./src/demux/transmuxer.ts"), k = f("./src/utils/logger.ts"), R = f("./src/errors.ts"), L = f("./src/utils/mediasource-helper.ts"), a = f("./node_modules/eventemitter3/index.js"), b = Object(L.getMediaSource)() || { isTypeSupported: function() {
    return !1;
  } }, v = function() {
    function h(_, l, e, s) {
      var t = this;
      this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = _, this.id = l, this.onTransmuxComplete = e, this.onFlush = s;
      var o = _.config, u = function(m, g) {
        (g = g || {}).frag = t.frag, g.id = t.id, _.trigger(m, g);
      };
      this.observer = new a.EventEmitter(), this.observer.on(y.Events.FRAG_DECRYPTED, u), this.observer.on(y.Events.ERROR, u);
      var n = { mp4: b.isTypeSupported("video/mp4"), mpeg: b.isTypeSupported("audio/mpeg"), mp3: b.isTypeSupported('audio/mp4; codecs="mp3"') }, c = navigator.vendor;
      if (o.enableWorker && typeof Worker < "u") {
        var p;
        k.logger.log("demuxing in webworker");
        try {
          p = this.worker = D("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), p.addEventListener("message", this.onwmsg), p.onerror = function(m) {
            _.trigger(y.Events.ERROR, { type: R.ErrorTypes.OTHER_ERROR, details: R.ErrorDetails.INTERNAL_EXCEPTION, fatal: !0, event: "demuxerWorker", error: new Error(m.message + "  (" + m.filename + ":" + m.lineno + ")") });
          }, p.postMessage({ cmd: "init", typeSupported: n, vendor: c, id: l, config: JSON.stringify(o) });
        } catch (m) {
          k.logger.warn("Error in worker:", m), k.logger.error("Error while initializing DemuxerWorker, fallback to inline"), p && self.URL.revokeObjectURL(p.objectURL), this.transmuxer = new S.default(this.observer, n, o, c, l), this.worker = null;
        }
      } else
        this.transmuxer = new S.default(this.observer, n, o, c, l);
    }
    var E = h.prototype;
    return E.destroy = function() {
      var _ = this.worker;
      if (_)
        _.removeEventListener("message", this.onwmsg), _.terminate(), this.worker = null;
      else {
        var l = this.transmuxer;
        l && (l.destroy(), this.transmuxer = null);
      }
      var e = this.observer;
      e && e.removeAllListeners(), this.observer = null;
    }, E.push = function(_, l, e, s, t, o, u, n, c, p) {
      var m = this;
      c.transmuxing.start = self.performance.now();
      var g = this.transmuxer, i = this.worker, r = o ? o.start : t.start, d = t.decryptdata, x = this.frag, T = !(x && t.cc === x.cc), A = !(x && c.level === x.level), C = x ? c.sn - x.sn : -1, w = this.part ? c.part - this.part.index : 1, O = !A && (C === 1 || C === 0 && w === 1), P = self.performance.now();
      (A || C || t.stats.parsing.start === 0) && (t.stats.parsing.start = P), !o || !w && O || (o.stats.parsing.start = P);
      var F = new S.TransmuxState(T, O, n, A, r);
      if (!O || T) {
        k.logger.log("[transmuxer-interface, " + t.type + "]: Starting new transmux session for sn: " + c.sn + " p: " + c.part + " level: " + c.level + " id: " + c.id + `
        discontinuity: ` + T + `
        trackSwitch: ` + A + `
        contiguous: ` + O + `
        accurateTimeOffset: ` + n + `
        timeOffset: ` + r);
        var B = new S.TransmuxConfig(e, s, l, u, p);
        this.configureTransmuxer(B);
      }
      if (this.frag = t, this.part = o, i)
        i.postMessage({ cmd: "demux", data: _, decryptdata: d, chunkMeta: c, state: F }, _ instanceof ArrayBuffer ? [_] : []);
      else if (g) {
        var N = g.push(_, d, c, F);
        Object(S.isPromise)(N) ? N.then(function(M) {
          m.handleTransmuxComplete(M);
        }) : this.handleTransmuxComplete(N);
      }
    }, E.flush = function(_) {
      var l = this;
      _.transmuxing.start = self.performance.now();
      var e = this.transmuxer, s = this.worker;
      if (s)
        s.postMessage({ cmd: "flush", chunkMeta: _ });
      else if (e) {
        var t = e.flush(_);
        Object(S.isPromise)(t) ? t.then(function(o) {
          l.handleFlushResult(o, _);
        }) : this.handleFlushResult(t, _);
      }
    }, E.handleFlushResult = function(_, l) {
      var e = this;
      _.forEach(function(s) {
        e.handleTransmuxComplete(s);
      }), this.onFlush(l);
    }, E.onWorkerMessage = function(_) {
      var l = _.data, e = this.hls;
      switch (l.event) {
        case "init":
          self.URL.revokeObjectURL(this.worker.objectURL);
          break;
        case "transmuxComplete":
          this.handleTransmuxComplete(l.data);
          break;
        case "flush":
          this.onFlush(l.data);
          break;
        default:
          l.data = l.data || {}, l.data.frag = this.frag, l.data.id = this.id, e.trigger(l.event, l.data);
      }
    }, E.configureTransmuxer = function(_) {
      var l = this.worker, e = this.transmuxer;
      l ? l.postMessage({ cmd: "configure", config: _ }) : e && e.configure(_);
    }, E.handleTransmuxComplete = function(_) {
      _.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(_);
    }, h;
  }();
}, "./src/demux/transmuxer-worker.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return R;
  });
  var D = f("./src/demux/transmuxer.ts"), y = f("./src/events.ts"), S = f("./src/utils/logger.ts"), k = f("./node_modules/eventemitter3/index.js");
  function R(v) {
    var h = new k.EventEmitter(), E = function(_, l) {
      v.postMessage({ event: _, data: l });
    };
    h.on(y.Events.FRAG_DECRYPTED, E), h.on(y.Events.ERROR, E), v.addEventListener("message", function(_) {
      var l = _.data;
      switch (l.cmd) {
        case "init":
          var e = JSON.parse(l.config);
          v.transmuxer = new D.default(h, l.typeSupported, e, l.vendor, l.id), Object(S.enableLogs)(e.debug), E("init", null);
          break;
        case "configure":
          v.transmuxer.configure(l.config);
          break;
        case "demux":
          var s = v.transmuxer.push(l.data, l.decryptdata, l.chunkMeta, l.state);
          Object(D.isPromise)(s) ? s.then(function(u) {
            L(v, u);
          }) : L(v, s);
          break;
        case "flush":
          var t = l.chunkMeta, o = v.transmuxer.flush(t);
          Object(D.isPromise)(o) ? o.then(function(u) {
            b(v, u, t);
          }) : b(v, o, t);
      }
    });
  }
  function L(v, h) {
    if ((E = h.remuxResult).audio || E.video || E.text || E.id3 || E.initSegment) {
      var E, _ = [], l = h.remuxResult, e = l.audio, s = l.video;
      e && a(_, e), s && a(_, s), v.postMessage({ event: "transmuxComplete", data: h }, _);
    }
  }
  function a(v, h) {
    h.data1 && v.push(h.data1.buffer), h.data2 && v.push(h.data2.buffer);
  }
  function b(v, h, E) {
    h.forEach(function(_) {
      L(v, _);
    }), v.postMessage({ event: "flush", data: E });
  }
}, "./src/demux/transmuxer.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return t;
  }), f.d(I, "isPromise", function() {
    return u;
  }), f.d(I, "TransmuxConfig", function() {
    return n;
  }), f.d(I, "TransmuxState", function() {
    return c;
  });
  var D, y = f("./src/events.ts"), S = f("./src/errors.ts"), k = f("./src/crypt/decrypter.ts"), R = f("./src/demux/aacdemuxer.ts"), L = f("./src/demux/mp4demuxer.ts"), a = f("./src/demux/tsdemuxer.ts"), b = f("./src/demux/mp3demuxer.ts"), v = f("./src/remux/mp4-remuxer.ts"), h = f("./src/remux/passthrough-remuxer.ts"), E = f("./src/demux/chunk-cache.ts"), _ = f("./src/utils/mp4-tools.ts"), l = f("./src/utils/logger.ts");
  try {
    D = self.performance.now.bind(self.performance);
  } catch {
    l.logger.debug("Unable to use Performance API on this environment"), D = self.Date.now;
  }
  var e = [{ demux: a.default, remux: v.default }, { demux: L.default, remux: h.default }, { demux: R.default, remux: v.default }, { demux: b.default, remux: v.default }], s = 1024;
  e.forEach(function(p) {
    var m = p.demux;
    s = Math.max(s, m.minProbeByteLength);
  });
  var t = function() {
    function p(g, i, r, d, x) {
      this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new E.default(), this.observer = g, this.typeSupported = i, this.config = r, this.vendor = d, this.id = x;
    }
    var m = p.prototype;
    return m.configure = function(g) {
      this.transmuxConfig = g, this.decrypter && this.decrypter.reset();
    }, m.push = function(g, i, r, d) {
      var x = this, T = r.transmuxing;
      T.executeStart = D();
      var A = new Uint8Array(g), C = this.cache, w = this.config, O = this.currentTransmuxState, P = this.transmuxConfig;
      d && (this.currentTransmuxState = d);
      var F = function(de, le) {
        var ye = null;
        return de.byteLength > 0 && le != null && le.key != null && le.iv !== null && le.method != null && (ye = le), ye;
      }(A, i);
      if (F && F.method === "AES-128") {
        var B = this.getDecrypter();
        if (!w.enableSoftwareAES)
          return this.decryptionPromise = B.webCryptoDecrypt(A, F.key.buffer, F.iv.buffer).then(function(de) {
            var le = x.push(de, null, r);
            return x.decryptionPromise = null, le;
          }), this.decryptionPromise;
        var N = B.softwareDecrypt(A, F.key.buffer, F.iv.buffer);
        if (!N)
          return T.executeEnd = D(), o(r);
        A = new Uint8Array(N);
      }
      var M = d || O, G = M.contiguous, K = M.discontinuity, H = M.trackSwitch, z = M.accurateTimeOffset, q = M.timeOffset, $ = P.audioCodec, ae = P.videoCodec, te = P.defaultInitPts, oe = P.duration, re = P.initSegmentData;
      if ((K || H) && this.resetInitSegment(re, $, ae, oe), K && this.resetInitialTimestamp(te), G || this.resetContiguity(), this.needsProbing(A, K, H)) {
        if (C.dataLength) {
          var fe = C.flush();
          A = Object(_.appendUint8Array)(fe, A);
        }
        this.configureTransmuxer(A, P);
      }
      var ie = this.transmux(A, F, q, z, r), se = this.currentTransmuxState;
      return se.contiguous = !0, se.discontinuity = !1, se.trackSwitch = !1, T.executeEnd = D(), ie;
    }, m.flush = function(g) {
      var i = this, r = g.transmuxing;
      r.executeStart = D();
      var d = this.decrypter, x = this.cache, T = this.currentTransmuxState, A = this.decryptionPromise;
      if (A)
        return A.then(function() {
          return i.flush(g);
        });
      var C = [], w = T.timeOffset;
      if (d) {
        var O = d.flush();
        O && C.push(this.push(O, null, g));
      }
      var P = x.dataLength;
      x.reset();
      var F = this.demuxer, B = this.remuxer;
      if (!F || !B)
        return P >= s && this.observer.emit(y.Events.ERROR, y.Events.ERROR, { type: S.ErrorTypes.MEDIA_ERROR, details: S.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" }), r.executeEnd = D(), [o(g)];
      var N = F.flush(w);
      return u(N) ? N.then(function(M) {
        return i.flushRemux(C, M, g), C;
      }) : (this.flushRemux(C, N, g), C);
    }, m.flushRemux = function(g, i, r) {
      var d = i.audioTrack, x = i.avcTrack, T = i.id3Track, A = i.textTrack, C = this.currentTransmuxState, w = C.accurateTimeOffset, O = C.timeOffset;
      l.logger.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
      var P = this.remuxer.remux(d, x, T, A, O, w, !0, this.id);
      g.push({ remuxResult: P, chunkMeta: r }), r.transmuxing.executeEnd = D();
    }, m.resetInitialTimestamp = function(g) {
      var i = this.demuxer, r = this.remuxer;
      i && r && (i.resetTimeStamp(g), r.resetTimeStamp(g));
    }, m.resetContiguity = function() {
      var g = this.demuxer, i = this.remuxer;
      g && i && (g.resetContiguity(), i.resetNextTimestamp());
    }, m.resetInitSegment = function(g, i, r, d) {
      var x = this.demuxer, T = this.remuxer;
      x && T && (x.resetInitSegment(i, r, d), T.resetInitSegment(g, i, r));
    }, m.destroy = function() {
      this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
    }, m.transmux = function(g, i, r, d, x) {
      return i && i.method === "SAMPLE-AES" ? this.transmuxSampleAes(g, i, r, d, x) : this.transmuxUnencrypted(g, r, d, x);
    }, m.transmuxUnencrypted = function(g, i, r, d) {
      var x = this.demuxer.demux(g, i, !1, !this.config.progressive), T = x.audioTrack, A = x.avcTrack, C = x.id3Track, w = x.textTrack;
      return { remuxResult: this.remuxer.remux(T, A, C, w, i, r, !1, this.id), chunkMeta: d };
    }, m.transmuxSampleAes = function(g, i, r, d, x) {
      var T = this;
      return this.demuxer.demuxSampleAes(g, i, r).then(function(A) {
        return { remuxResult: T.remuxer.remux(A.audioTrack, A.avcTrack, A.id3Track, A.textTrack, r, d, !1, T.id), chunkMeta: x };
      });
    }, m.configureTransmuxer = function(g, i) {
      for (var r, d = this.config, x = this.observer, T = this.typeSupported, A = this.vendor, C = i.audioCodec, w = i.defaultInitPts, O = i.duration, P = i.initSegmentData, F = i.videoCodec, B = 0, N = e.length; B < N; B++)
        if (e[B].demux.probe(g)) {
          r = e[B];
          break;
        }
      r || (l.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r = { demux: L.default, remux: h.default });
      var M = this.demuxer, G = this.remuxer, K = r.remux, H = r.demux;
      G && G instanceof K || (this.remuxer = new K(x, d, T, A)), M && M instanceof H || (this.demuxer = new H(x, d, T), this.probe = H.probe), this.resetInitSegment(P, C, F, O), this.resetInitialTimestamp(w);
    }, m.needsProbing = function(g, i, r) {
      return !this.demuxer || !this.remuxer || i || r;
    }, m.getDecrypter = function() {
      var g = this.decrypter;
      return g || (g = this.decrypter = new k.default(this.observer, this.config)), g;
    }, p;
  }(), o = function(p) {
    return { remuxResult: {}, chunkMeta: p };
  };
  function u(p) {
    return "then" in p && p.then instanceof Function;
  }
  var n = function(p, m, g, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = p, this.videoCodec = m, this.initSegmentData = g, this.duration = i, this.defaultInitPts = r;
  }, c = function(p, m, g, i, r) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = p, this.contiguous = m, this.accurateTimeOffset = g, this.trackSwitch = i, this.timeOffset = r;
  };
}, "./src/demux/tsdemuxer.ts": function(V, I, f) {
  f.r(I), f.d(I, "discardEPB", function() {
    return u;
  });
  var D = f("./src/demux/adts.ts"), y = f("./src/demux/mpegaudio.ts"), S = f("./src/demux/exp-golomb.ts"), k = f("./src/demux/id3.ts"), R = f("./src/demux/sample-aes.ts"), L = f("./src/events.ts"), a = f("./src/utils/mp4-tools.ts"), b = f("./src/utils/logger.ts"), v = f("./src/errors.ts"), h = { video: 1, audio: 2, id3: 3, text: 4 }, E = function() {
    function n(p, m, g) {
      this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = p, this.config = m, this.typeSupported = g;
    }
    n.probe = function(p) {
      var m = n.syncOffset(p);
      return !(m < 0 || (m && b.logger.warn("MPEG2-TS detected but first sync word found @ offset " + m + ", junk ahead ?"), 0));
    }, n.syncOffset = function(p) {
      for (var m = Math.min(1e3, p.length - 564), g = 0; g < m; ) {
        if (p[g] === 71 && p[g + 188] === 71 && p[g + 376] === 71)
          return g;
        g++;
      }
      return -1;
    }, n.createTrack = function(p, m) {
      return { container: p === "video" || p === "audio" ? "video/mp2t" : void 0, type: p, id: h[p], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: p === "audio" ? m : void 0 };
    };
    var c = n.prototype;
    return c.resetInitSegment = function(p, m, g) {
      this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = n.createTrack("video", g), this._audioTrack = n.createTrack("audio", g), this._id3Track = n.createTrack("id3", g), this._txtTrack = n.createTrack("text", g), this._audioTrack.isAAC = !0, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = p, this.videoCodec = m, this._duration = g;
    }, c.resetTimeStamp = function() {
    }, c.resetContiguity = function() {
      var p = this._audioTrack, m = this._avcTrack, g = this._id3Track;
      p && (p.pesData = null), m && (m.pesData = null), g && (g.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null;
    }, c.demux = function(p, m, g, i) {
      var r;
      g === void 0 && (g = !1), i === void 0 && (i = !1), g || (this.sampleAes = null);
      var d = this._avcTrack, x = this._audioTrack, T = this._id3Track, A = d.pid, C = d.pesData, w = x.pid, O = T.pid, P = x.pesData, F = T.pesData, B = !1, N = this.pmtParsed, M = this._pmtId, G = p.length;
      if (this.remainderData && (G = (p = Object(a.appendUint8Array)(this.remainderData, p)).length, this.remainderData = null), G < 188 && !i)
        return this.remainderData = p, { audioTrack: x, avcTrack: d, id3Track: T, textTrack: this._txtTrack };
      var K = Math.max(0, n.syncOffset(p));
      (G -= (G + K) % 188) < p.byteLength && !i && (this.remainderData = new Uint8Array(p.buffer, G, p.buffer.byteLength - G));
      for (var H = K; H < G; H += 188)
        if (p[H] === 71) {
          var z = !!(64 & p[H + 1]), q = ((31 & p[H + 1]) << 8) + p[H + 2], $ = void 0;
          if ((48 & p[H + 3]) >> 4 > 1) {
            if (($ = H + 5 + p[H + 4]) === H + 188)
              continue;
          } else
            $ = H + 4;
          switch (q) {
            case A:
              z && (C && (r = s(C)) && this.parseAVCPES(r, !1), C = { data: [], size: 0 }), C && (C.data.push(p.subarray($, H + 188)), C.size += H + 188 - $);
              break;
            case w:
              z && (P && (r = s(P)) && (x.isAAC ? this.parseAACPES(r) : this.parseMPEGPES(r)), P = { data: [], size: 0 }), P && (P.data.push(p.subarray($, H + 188)), P.size += H + 188 - $);
              break;
            case O:
              z && (F && (r = s(F)) && this.parseID3PES(r), F = { data: [], size: 0 }), F && (F.data.push(p.subarray($, H + 188)), F.size += H + 188 - $);
              break;
            case 0:
              z && ($ += p[$] + 1), M = this._pmtId = l(p, $);
              break;
            case M:
              z && ($ += p[$] + 1);
              var ae = e(p, $, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0, g);
              (A = ae.avc) > 0 && (d.pid = A), (w = ae.audio) > 0 && (x.pid = w, x.isAAC = ae.isAAC), (O = ae.id3) > 0 && (T.pid = O), B && !N && (b.logger.log("reparse from beginning"), B = !1, H = K - 188), N = this.pmtParsed = !0;
              break;
            case 17:
            case 8191:
              break;
            default:
              B = !0;
          }
        } else
          this.observer.emit(L.Events.ERROR, L.Events.ERROR, { type: v.ErrorTypes.MEDIA_ERROR, details: v.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });
      d.pesData = C, x.pesData = P, T.pesData = F;
      var te = { audioTrack: x, avcTrack: d, id3Track: T, textTrack: this._txtTrack };
      return i && this.extractRemainingSamples(te), te;
    }, c.flush = function() {
      var p, m = this.remainderData;
      return this.remainderData = null, p = m ? this.demux(m, -1, !1, !0) : { audioTrack: this._audioTrack, avcTrack: this._avcTrack, textTrack: this._txtTrack, id3Track: this._id3Track }, this.extractRemainingSamples(p), this.sampleAes ? this.decrypt(p, this.sampleAes) : p;
    }, c.extractRemainingSamples = function(p) {
      var m, g = p.audioTrack, i = p.avcTrack, r = p.id3Track, d = i.pesData, x = g.pesData, T = r.pesData;
      d && (m = s(d)) ? (this.parseAVCPES(m, !0), i.pesData = null) : i.pesData = d, x && (m = s(x)) ? (g.isAAC ? this.parseAACPES(m) : this.parseMPEGPES(m), g.pesData = null) : (x != null && x.size && b.logger.log("last AAC PES packet truncated,might overlap between fragments"), g.pesData = x), T && (m = s(T)) ? (this.parseID3PES(m), r.pesData = null) : r.pesData = T;
    }, c.demuxSampleAes = function(p, m, g) {
      var i = this.demux(p, g, !0, !this.config.progressive), r = this.sampleAes = new R.default(this.observer, this.config, m);
      return this.decrypt(i, r);
    }, c.decrypt = function(p, m) {
      return new Promise(function(g) {
        var i = p.audioTrack, r = p.avcTrack;
        i.samples && i.isAAC ? m.decryptAacSamples(i.samples, 0, function() {
          r.samples ? m.decryptAvcSamples(r.samples, 0, 0, function() {
            g(p);
          }) : g(p);
        }) : r.samples && m.decryptAvcSamples(r.samples, 0, 0, function() {
          g(p);
        });
      });
    }, c.destroy = function() {
      this._initPTS = this._initDTS = null, this._duration = 0;
    }, c.parseAVCPES = function(p, m) {
      var g, i = this, r = this._avcTrack, d = this.parseAVCNALu(p.data), x = this.avcSample, T = !1;
      p.data = null, x && d.length && !r.audFound && (t(x, r), x = this.avcSample = _(!1, p.pts, p.dts, "")), d.forEach(function(A) {
        switch (A.type) {
          case 1:
            g = !0, x || (x = i.avcSample = _(!0, p.pts, p.dts, "")), x.frame = !0;
            var C = A.data;
            if (T && C.length > 4) {
              var w = new S.default(C).readSliceType();
              w !== 2 && w !== 4 && w !== 7 && w !== 9 || (x.key = !0);
            }
            break;
          case 5:
            g = !0, x || (x = i.avcSample = _(!0, p.pts, p.dts, "")), x.key = !0, x.frame = !0;
            break;
          case 6:
            g = !0;
            var O = new S.default(u(A.data));
            O.readUByte();
            for (var P = 0, F = 0, B = !1, N = 0; !B && O.bytesAvailable > 1; ) {
              P = 0;
              do
                P += N = O.readUByte();
              while (N === 255);
              F = 0;
              do
                F += N = O.readUByte();
              while (N === 255);
              if (P === 4 && O.bytesAvailable !== 0) {
                if (B = !0, O.readUByte() === 181 && O.readUShort() === 49 && O.readUInt() === 1195456820 && O.readUByte() === 3) {
                  for (var M = O.readUByte(), G = 31 & M, K = [M, O.readUByte()], H = 0; H < G; H++)
                    K.push(O.readUByte()), K.push(O.readUByte()), K.push(O.readUByte());
                  o(i._txtTrack.samples, { type: 3, pts: p.pts, bytes: K });
                }
              } else if (P === 5 && O.bytesAvailable !== 0) {
                if (B = !0, F > 16) {
                  for (var z = [], q = 0; q < 16; q++)
                    z.push(O.readUByte().toString(16)), q !== 3 && q !== 5 && q !== 7 && q !== 9 || z.push("-");
                  for (var $ = F - 16, ae = new Uint8Array($), te = 0; te < $; te++)
                    ae[te] = O.readUByte();
                  o(i._txtTrack.samples, { pts: p.pts, payloadType: P, uuid: z.join(""), userData: Object(k.utf8ArrayToStr)(ae), userDataBytes: ae });
                }
              } else if (F < O.bytesAvailable)
                for (var oe = 0; oe < F; oe++)
                  O.readUByte();
            }
            break;
          case 7:
            if (g = !0, T = !0, !r.sps) {
              var re = new S.default(A.data).readSPS();
              r.width = re.width, r.height = re.height, r.pixelRatio = re.pixelRatio, r.sps = [A.data], r.duration = i._duration;
              for (var fe = A.data.subarray(1, 4), ie = "avc1.", se = 0; se < 3; se++) {
                var de = fe[se].toString(16);
                de.length < 2 && (de = "0" + de), ie += de;
              }
              r.codec = ie;
            }
            break;
          case 8:
            g = !0, r.pps || (r.pps = [A.data]);
            break;
          case 9:
            g = !1, r.audFound = !0, x && t(x, r), x = i.avcSample = _(!1, p.pts, p.dts, "");
            break;
          case 12:
            g = !1;
            break;
          default:
            g = !1, x && (x.debug += "unknown NAL " + A.type + " ");
        }
        x && g && x.units.push(A);
      }), m && x && (t(x, r), this.avcSample = null);
    }, c.getLastNalUnit = function() {
      var p, m, g = this.avcSample;
      if (!g || g.units.length === 0) {
        var i = this._avcTrack.samples;
        g = i[i.length - 1];
      }
      if ((p = g) !== null && p !== void 0 && p.units) {
        var r = g.units;
        m = r[r.length - 1];
      }
      return m;
    }, c.parseAVCNALu = function(p) {
      var m, g, i = p.byteLength, r = this._avcTrack, d = r.naluState || 0, x = d, T = [], A = 0, C = -1, w = 0;
      for (d === -1 && (C = 0, w = 31 & p[0], d = 0, A = 1); A < i; )
        if (m = p[A++], d)
          if (d !== 1)
            if (m)
              if (m === 1) {
                if (C >= 0) {
                  var O = { data: p.subarray(C, A - d - 1), type: w };
                  T.push(O);
                } else {
                  var P = this.getLastNalUnit();
                  if (P && (x && A <= 4 - x && P.state && (P.data = P.data.subarray(0, P.data.byteLength - x)), (g = A - d - 1) > 0)) {
                    var F = new Uint8Array(P.data.byteLength + g);
                    F.set(P.data, 0), F.set(p.subarray(0, g), P.data.byteLength), P.data = F;
                  }
                }
                A < i ? (C = A, w = 31 & p[A], d = 0) : d = -1;
              } else
                d = 0;
            else
              d = 3;
          else
            d = m ? 0 : 2;
        else
          d = m ? 0 : 1;
      if (C >= 0 && d >= 0) {
        var B = { data: p.subarray(C, i), type: w, state: d };
        T.push(B);
      }
      if (T.length === 0) {
        var N = this.getLastNalUnit();
        if (N) {
          var M = new Uint8Array(N.data.byteLength + p.byteLength);
          M.set(N.data, 0), M.set(p, N.data.byteLength), N.data = M;
        }
      }
      return r.naluState = d, T;
    }, c.parseAACPES = function(p) {
      var m, g, i, r, d, x = 0, T = this._audioTrack, A = this.aacOverFlow, C = p.data;
      if (A) {
        this.aacOverFlow = null;
        var w = A.sample.unit.byteLength, O = Math.min(A.missing, w), P = w - O;
        A.sample.unit.set(C.subarray(0, O), P), T.samples.push(A.sample), x = A.missing;
      }
      for (m = x, g = C.length; m < g - 1 && !D.isHeader(C, m); m++)
        ;
      if (m === x || (m < g - 1 ? (i = "AAC PES did not start with ADTS header,offset:" + m, r = !1) : (i = "no ADTS header found in AAC PES", r = !0), b.logger.warn("parsing error:" + i), this.observer.emit(L.Events.ERROR, L.Events.ERROR, { type: v.ErrorTypes.MEDIA_ERROR, details: v.ErrorDetails.FRAG_PARSING_ERROR, fatal: r, reason: i }), !r)) {
        if (D.initTrackConfig(T, this.observer, C, m, this.audioCodec), p.pts !== void 0)
          d = p.pts;
        else {
          if (!A)
            return void b.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
          var F = D.getFrameDuration(T.samplerate);
          d = A.sample.pts + F;
        }
        for (var B = 0; m < g; ) {
          if (D.isHeader(C, m)) {
            if (m + 5 < g) {
              var N = D.appendFrame(T, C, m, d, B);
              if (N) {
                if (!N.missing) {
                  m += N.length, B++;
                  continue;
                }
                this.aacOverFlow = N;
              }
            }
            break;
          }
          m++;
        }
      }
    }, c.parseMPEGPES = function(p) {
      var m = p.data, g = m.length, i = 0, r = 0, d = p.pts;
      if (d !== void 0)
        for (; r < g; )
          if (y.isHeader(m, r)) {
            var x = y.appendFrame(this._audioTrack, m, r, d, i);
            if (!x)
              break;
            r += x.length, i++;
          } else
            r++;
      else
        b.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
    }, c.parseID3PES = function(p) {
      p.pts !== void 0 ? this._id3Track.samples.push(p) : b.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
    }, n;
  }();
  function _(n, c, p, m) {
    return { key: n, frame: !1, pts: c, dts: p, units: [], debug: m, length: 0 };
  }
  function l(n, c) {
    return (31 & n[c + 10]) << 8 | n[c + 11];
  }
  function e(n, c, p, m) {
    var g = { audio: -1, avc: -1, id3: -1, isAAC: !0 }, i = c + 3 + ((15 & n[c + 1]) << 8 | n[c + 2]) - 4;
    for (c += 12 + ((15 & n[c + 10]) << 8 | n[c + 11]); c < i; ) {
      var r = (31 & n[c + 1]) << 8 | n[c + 2];
      switch (n[c]) {
        case 207:
          if (!m) {
            b.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
            break;
          }
        case 15:
          g.audio === -1 && (g.audio = r);
          break;
        case 21:
          g.id3 === -1 && (g.id3 = r);
          break;
        case 219:
          if (!m) {
            b.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
            break;
          }
        case 27:
          g.avc === -1 && (g.avc = r);
          break;
        case 3:
        case 4:
          p ? g.audio === -1 && (g.audio = r, g.isAAC = !1) : b.logger.log("MPEG audio found, not supported in this browser");
          break;
        case 36:
          b.logger.warn("Unsupported HEVC stream type found");
      }
      c += 5 + ((15 & n[c + 3]) << 8 | n[c + 4]);
    }
    return g;
  }
  function s(n) {
    var c, p, m, g, i, r = 0, d = n.data;
    if (!n || n.size === 0)
      return null;
    for (; d[0].length < 19 && d.length > 1; ) {
      var x = new Uint8Array(d[0].length + d[1].length);
      x.set(d[0]), x.set(d[1], d[0].length), d[0] = x, d.splice(1, 1);
    }
    if (((c = d[0])[0] << 16) + (c[1] << 8) + c[2] === 1) {
      if ((p = (c[4] << 8) + c[5]) && p > n.size - 6)
        return null;
      var T = c[7];
      192 & T && (g = 536870912 * (14 & c[9]) + 4194304 * (255 & c[10]) + 16384 * (254 & c[11]) + 128 * (255 & c[12]) + (254 & c[13]) / 2, 64 & T ? g - (i = 536870912 * (14 & c[14]) + 4194304 * (255 & c[15]) + 16384 * (254 & c[16]) + 128 * (255 & c[17]) + (254 & c[18]) / 2) > 54e5 && (b.logger.warn(Math.round((g - i) / 9e4) + "s delta between PTS and DTS, align them"), g = i) : i = g);
      var A = (m = c[8]) + 9;
      if (n.size <= A)
        return null;
      n.size -= A;
      for (var C = new Uint8Array(n.size), w = 0, O = d.length; w < O; w++) {
        var P = (c = d[w]).byteLength;
        if (A) {
          if (A > P) {
            A -= P;
            continue;
          }
          c = c.subarray(A), P -= A, A = 0;
        }
        C.set(c, r), r += P;
      }
      return p && (p -= m + 3), { data: C, pts: g, dts: i, len: p };
    }
    return null;
  }
  function t(n, c) {
    if (n.units.length && n.frame) {
      if (n.pts === void 0) {
        var p = c.samples, m = p.length;
        if (!m)
          return void c.dropped++;
        var g = p[m - 1];
        n.pts = g.pts, n.dts = g.dts;
      }
      c.samples.push(n);
    }
    n.debug.length && b.logger.log(n.pts + "/" + n.dts + ":" + n.debug);
  }
  function o(n, c) {
    var p = n.length;
    if (p > 0) {
      if (c.pts >= n[p - 1].pts)
        n.push(c);
      else
        for (var m = p - 1; m >= 0; m--)
          if (c.pts < n[m].pts) {
            n.splice(m, 0, c);
            break;
          }
    } else
      n.push(c);
  }
  function u(n) {
    for (var c = n.byteLength, p = [], m = 1; m < c - 2; )
      n[m] === 0 && n[m + 1] === 0 && n[m + 2] === 3 ? (p.push(m + 2), m += 2) : m++;
    if (p.length === 0)
      return n;
    var g = c - p.length, i = new Uint8Array(g), r = 0;
    for (m = 0; m < g; r++, m++)
      r === p[0] && (r++, p.shift()), i[m] = n[r];
    return i;
  }
  E.minProbeByteLength = 188, I.default = E;
}, "./src/errors.ts": function(V, I, f) {
  var D, y, S, k;
  f.r(I), f.d(I, "ErrorTypes", function() {
    return D;
  }), f.d(I, "ErrorDetails", function() {
    return S;
  }), (y = D || (D = {})).NETWORK_ERROR = "networkError", y.MEDIA_ERROR = "mediaError", y.KEY_SYSTEM_ERROR = "keySystemError", y.MUX_ERROR = "muxError", y.OTHER_ERROR = "otherError", (k = S || (S = {})).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", k.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", k.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", k.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", k.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", k.MANIFEST_LOAD_ERROR = "manifestLoadError", k.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", k.MANIFEST_PARSING_ERROR = "manifestParsingError", k.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", k.LEVEL_EMPTY_ERROR = "levelEmptyError", k.LEVEL_LOAD_ERROR = "levelLoadError", k.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", k.LEVEL_SWITCH_ERROR = "levelSwitchError", k.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", k.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", k.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", k.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", k.FRAG_LOAD_ERROR = "fragLoadError", k.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", k.FRAG_DECRYPT_ERROR = "fragDecryptError", k.FRAG_PARSING_ERROR = "fragParsingError", k.REMUX_ALLOC_ERROR = "remuxAllocError", k.KEY_LOAD_ERROR = "keyLoadError", k.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", k.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", k.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", k.BUFFER_APPEND_ERROR = "bufferAppendError", k.BUFFER_APPENDING_ERROR = "bufferAppendingError", k.BUFFER_STALLED_ERROR = "bufferStalledError", k.BUFFER_FULL_ERROR = "bufferFullError", k.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", k.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", k.INTERNAL_EXCEPTION = "internalException", k.INTERNAL_ABORTED = "aborted", k.UNKNOWN = "unknown";
}, "./src/events.ts": function(V, I, f) {
  var D, y;
  f.r(I), f.d(I, "Events", function() {
    return D;
  }), (y = D || (D = {})).MEDIA_ATTACHING = "hlsMediaAttaching", y.MEDIA_ATTACHED = "hlsMediaAttached", y.MEDIA_DETACHING = "hlsMediaDetaching", y.MEDIA_DETACHED = "hlsMediaDetached", y.BUFFER_RESET = "hlsBufferReset", y.BUFFER_CODECS = "hlsBufferCodecs", y.BUFFER_CREATED = "hlsBufferCreated", y.BUFFER_APPENDING = "hlsBufferAppending", y.BUFFER_APPENDED = "hlsBufferAppended", y.BUFFER_EOS = "hlsBufferEos", y.BUFFER_FLUSHING = "hlsBufferFlushing", y.BUFFER_FLUSHED = "hlsBufferFlushed", y.MANIFEST_LOADING = "hlsManifestLoading", y.MANIFEST_LOADED = "hlsManifestLoaded", y.MANIFEST_PARSED = "hlsManifestParsed", y.LEVEL_SWITCHING = "hlsLevelSwitching", y.LEVEL_SWITCHED = "hlsLevelSwitched", y.LEVEL_LOADING = "hlsLevelLoading", y.LEVEL_LOADED = "hlsLevelLoaded", y.LEVEL_UPDATED = "hlsLevelUpdated", y.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", y.LEVELS_UPDATED = "hlsLevelsUpdated", y.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", y.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", y.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", y.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", y.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", y.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", y.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", y.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", y.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", y.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", y.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", y.CUES_PARSED = "hlsCuesParsed", y.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", y.INIT_PTS_FOUND = "hlsInitPtsFound", y.FRAG_LOADING = "hlsFragLoading", y.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", y.FRAG_LOADED = "hlsFragLoaded", y.FRAG_DECRYPTED = "hlsFragDecrypted", y.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", y.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", y.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", y.FRAG_PARSED = "hlsFragParsed", y.FRAG_BUFFERED = "hlsFragBuffered", y.FRAG_CHANGED = "hlsFragChanged", y.FPS_DROP = "hlsFpsDrop", y.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", y.ERROR = "hlsError", y.DESTROYING = "hlsDestroying", y.KEY_LOADING = "hlsKeyLoading", y.KEY_LOADED = "hlsKeyLoaded", y.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", y.BACK_BUFFER_REACHED = "hlsBackBufferReached";
}, "./src/hls.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return t;
  });
  var D = f("./node_modules/url-toolkit/src/url-toolkit.js"), y = f("./src/loader/playlist-loader.ts"), S = f("./src/loader/key-loader.ts"), k = f("./src/controller/id3-track-controller.ts"), R = f("./src/controller/latency-controller.ts"), L = f("./src/controller/level-controller.ts"), a = f("./src/controller/fragment-tracker.ts"), b = f("./src/controller/stream-controller.ts"), v = f("./src/is-supported.ts"), h = f("./src/utils/logger.ts"), E = f("./src/config.ts"), _ = f("./node_modules/eventemitter3/index.js"), l = f("./src/events.ts"), e = f("./src/errors.ts");
  function s(o, u) {
    for (var n = 0; n < u.length; n++) {
      var c = u[n];
      c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(o, c.key, c);
    }
  }
  var t = function() {
    function o(m) {
      m === void 0 && (m = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new _.EventEmitter(), this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this._media = null, this.url = null;
      var g = this.config = Object(E.mergeConfig)(o.DefaultConfig, m);
      this.userConfig = m, Object(h.enableLogs)(g.debug), this._autoLevelCapping = -1, g.progressive && Object(E.enableStreamingMode)(g);
      var i = g.abrController, r = g.bufferController, d = g.capLevelController, x = g.fpsController, T = this.abrController = new i(this), A = this.bufferController = new r(this), C = this.capLevelController = new d(this), w = new x(this), O = new y.default(this), P = new S.default(this), F = new k.default(this), B = this.levelController = new L.default(this), N = new a.FragmentTracker(this), M = this.streamController = new b.default(this, N);
      C.setStreamController(M), w.setStreamController(M);
      var G = [B, M];
      this.networkControllers = G;
      var K = [O, P, T, A, C, w, F, N];
      this.audioTrackController = this.createController(g.audioTrackController, null, G), this.createController(g.audioStreamController, N, G), this.subtitleTrackController = this.createController(g.subtitleTrackController, null, G), this.createController(g.subtitleStreamController, N, G), this.createController(g.timelineController, null, K), this.emeController = this.createController(g.emeController, null, K), this.latencyController = this.createController(R.default, null, K), this.coreComponents = K;
    }
    o.isSupported = function() {
      return Object(v.isSupported)();
    };
    var u, n, c, p = o.prototype;
    return p.createController = function(m, g, i) {
      if (m) {
        var r = g ? new m(this, g) : new m(this);
        return i && i.push(r), r;
      }
      return null;
    }, p.on = function(m, g, i) {
      i === void 0 && (i = this), this._emitter.on(m, g, i);
    }, p.once = function(m, g, i) {
      i === void 0 && (i = this), this._emitter.once(m, g, i);
    }, p.removeAllListeners = function(m) {
      this._emitter.removeAllListeners(m);
    }, p.off = function(m, g, i, r) {
      i === void 0 && (i = this), this._emitter.off(m, g, i, r);
    }, p.listeners = function(m) {
      return this._emitter.listeners(m);
    }, p.emit = function(m, g, i) {
      return this._emitter.emit(m, g, i);
    }, p.trigger = function(m, g) {
      if (this.config.debug)
        return this.emit(m, m, g);
      try {
        return this.emit(m, m, g);
      } catch (i) {
        h.logger.error("An internal error happened while handling event " + m + '. Error message: "' + i.message + '". Here is a stacktrace:', i), this.trigger(l.Events.ERROR, { type: e.ErrorTypes.OTHER_ERROR, details: e.ErrorDetails.INTERNAL_EXCEPTION, fatal: !1, event: m, error: i });
      }
      return !1;
    }, p.listenerCount = function(m) {
      return this._emitter.listenerCount(m);
    }, p.destroy = function() {
      h.logger.log("destroy"), this.trigger(l.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(m) {
        return m.destroy();
      }), this.networkControllers.length = 0, this.coreComponents.forEach(function(m) {
        return m.destroy();
      }), this.coreComponents.length = 0;
    }, p.attachMedia = function(m) {
      h.logger.log("attachMedia"), this._media = m, this.trigger(l.Events.MEDIA_ATTACHING, { media: m });
    }, p.detachMedia = function() {
      h.logger.log("detachMedia"), this.trigger(l.Events.MEDIA_DETACHING, void 0), this._media = null;
    }, p.loadSource = function(m) {
      this.stopLoad();
      var g = this.media, i = this.url, r = this.url = D.buildAbsoluteURL(self.location.href, m, { alwaysNormalize: !0 });
      h.logger.log("loadSource:" + r), g && i && i !== r && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(g)), this.trigger(l.Events.MANIFEST_LOADING, { url: m });
    }, p.startLoad = function(m) {
      m === void 0 && (m = -1), h.logger.log("startLoad(" + m + ")"), this.networkControllers.forEach(function(g) {
        g.startLoad(m);
      });
    }, p.stopLoad = function() {
      h.logger.log("stopLoad"), this.networkControllers.forEach(function(m) {
        m.stopLoad();
      });
    }, p.swapAudioCodec = function() {
      h.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
    }, p.recoverMediaError = function() {
      h.logger.log("recoverMediaError");
      var m = this._media;
      this.detachMedia(), m && this.attachMedia(m);
    }, p.removeLevel = function(m, g) {
      g === void 0 && (g = 0), this.levelController.removeLevel(m, g);
    }, u = o, c = [{ key: "version", get: function() {
      return "1.0.10";
    } }, { key: "Events", get: function() {
      return l.Events;
    } }, { key: "ErrorTypes", get: function() {
      return e.ErrorTypes;
    } }, { key: "ErrorDetails", get: function() {
      return e.ErrorDetails;
    } }, { key: "DefaultConfig", get: function() {
      return o.defaultConfig ? o.defaultConfig : E.hlsDefaultConfig;
    }, set: function(m) {
      o.defaultConfig = m;
    } }], (n = [{ key: "levels", get: function() {
      var m = this.levelController.levels;
      return m || [];
    } }, { key: "currentLevel", get: function() {
      return this.streamController.currentLevel;
    }, set: function(m) {
      h.logger.log("set currentLevel:" + m), this.loadLevel = m, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
    } }, { key: "nextLevel", get: function() {
      return this.streamController.nextLevel;
    }, set: function(m) {
      h.logger.log("set nextLevel:" + m), this.levelController.manualLevel = m, this.streamController.nextLevelSwitch();
    } }, { key: "loadLevel", get: function() {
      return this.levelController.level;
    }, set: function(m) {
      h.logger.log("set loadLevel:" + m), this.levelController.manualLevel = m;
    } }, { key: "nextLoadLevel", get: function() {
      return this.levelController.nextLoadLevel;
    }, set: function(m) {
      this.levelController.nextLoadLevel = m;
    } }, { key: "firstLevel", get: function() {
      return Math.max(this.levelController.firstLevel, this.minAutoLevel);
    }, set: function(m) {
      h.logger.log("set firstLevel:" + m), this.levelController.firstLevel = m;
    } }, { key: "startLevel", get: function() {
      return this.levelController.startLevel;
    }, set: function(m) {
      h.logger.log("set startLevel:" + m), m !== -1 && (m = Math.max(m, this.minAutoLevel)), this.levelController.startLevel = m;
    } }, { key: "capLevelToPlayerSize", get: function() {
      return this.config.capLevelToPlayerSize;
    }, set: function(m) {
      var g = !!m;
      g !== this.config.capLevelToPlayerSize && (g ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = g);
    } }, { key: "autoLevelCapping", get: function() {
      return this._autoLevelCapping;
    }, set: function(m) {
      this._autoLevelCapping !== m && (h.logger.log("set autoLevelCapping:" + m), this._autoLevelCapping = m);
    } }, { key: "bandwidthEstimate", get: function() {
      var m = this.abrController.bwEstimator;
      return m ? m.getEstimate() : NaN;
    } }, { key: "autoLevelEnabled", get: function() {
      return this.levelController.manualLevel === -1;
    } }, { key: "manualLevel", get: function() {
      return this.levelController.manualLevel;
    } }, { key: "minAutoLevel", get: function() {
      var m = this.levels, g = this.config.minAutoBitrate;
      if (!m)
        return 0;
      for (var i = m.length, r = 0; r < i; r++)
        if (m[r].maxBitrate > g)
          return r;
      return 0;
    } }, { key: "maxAutoLevel", get: function() {
      var m = this.levels, g = this.autoLevelCapping;
      return g === -1 && m && m.length ? m.length - 1 : g;
    } }, { key: "nextAutoLevel", get: function() {
      return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
    }, set: function(m) {
      this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, m);
    } }, { key: "audioTracks", get: function() {
      var m = this.audioTrackController;
      return m ? m.audioTracks : [];
    } }, { key: "audioTrack", get: function() {
      var m = this.audioTrackController;
      return m ? m.audioTrack : -1;
    }, set: function(m) {
      var g = this.audioTrackController;
      g && (g.audioTrack = m);
    } }, { key: "subtitleTracks", get: function() {
      var m = this.subtitleTrackController;
      return m ? m.subtitleTracks : [];
    } }, { key: "subtitleTrack", get: function() {
      var m = this.subtitleTrackController;
      return m ? m.subtitleTrack : -1;
    }, set: function(m) {
      var g = this.subtitleTrackController;
      g && (g.subtitleTrack = m);
    } }, { key: "media", get: function() {
      return this._media;
    } }, { key: "subtitleDisplay", get: function() {
      var m = this.subtitleTrackController;
      return !!m && m.subtitleDisplay;
    }, set: function(m) {
      var g = this.subtitleTrackController;
      g && (g.subtitleDisplay = m);
    } }, { key: "lowLatencyMode", get: function() {
      return this.config.lowLatencyMode;
    }, set: function(m) {
      this.config.lowLatencyMode = m;
    } }, { key: "liveSyncPosition", get: function() {
      return this.latencyController.liveSyncPosition;
    } }, { key: "latency", get: function() {
      return this.latencyController.latency;
    } }, { key: "maxLatency", get: function() {
      return this.latencyController.maxLatency;
    } }, { key: "targetLatency", get: function() {
      return this.latencyController.targetLatency;
    } }, { key: "drift", get: function() {
      return this.latencyController.drift;
    } }, { key: "forceStartLoad", get: function() {
      return this.streamController.forceStartLoad;
    } }]) && s(u.prototype, n), c && s(u, c), o;
  }();
  t.defaultConfig = void 0;
}, "./src/is-supported.ts": function(V, I, f) {
  f.r(I), f.d(I, "isSupported", function() {
    return S;
  }), f.d(I, "changeTypeSupported", function() {
    return k;
  });
  var D = f("./src/utils/mediasource-helper.ts");
  function y() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
  }
  function S() {
    var R = Object(D.getMediaSource)();
    if (!R)
      return !1;
    var L = y(), a = R && typeof R.isTypeSupported == "function" && R.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), b = !L || L.prototype && typeof L.prototype.appendBuffer == "function" && typeof L.prototype.remove == "function";
    return !!a && !!b;
  }
  function k() {
    var R, L = y();
    return typeof (L == null || (R = L.prototype) === null || R === void 0 ? void 0 : R.changeType) == "function";
  }
}, "./src/loader/fragment-loader.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return v;
  }), f.d(I, "LoadError", function() {
    return E;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/errors.ts");
  function S(_) {
    var l = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return (S = function(e) {
      if (e === null || (s = e, Function.toString.call(s).indexOf("[native code]") === -1))
        return e;
      var s;
      if (typeof e != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (l !== void 0) {
        if (l.has(e))
          return l.get(e);
        l.set(e, t);
      }
      function t() {
        return k(e, arguments, a(this).constructor);
      }
      return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), L(t, e);
    })(_);
  }
  function k(_, l, e) {
    return (k = R() ? Reflect.construct : function(s, t, o) {
      var u = [null];
      u.push.apply(u, t);
      var n = new (Function.bind.apply(s, u))();
      return o && L(n, o.prototype), n;
    }).apply(null, arguments);
  }
  function R() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function L(_, l) {
    return (L = Object.setPrototypeOf || function(e, s) {
      return e.__proto__ = s, e;
    })(_, l);
  }
  function a(_) {
    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    })(_);
  }
  var b = Math.pow(2, 17), v = function() {
    function _(e) {
      this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
    }
    var l = _.prototype;
    return l.destroy = function() {
      this.loader && (this.loader.destroy(), this.loader = null);
    }, l.abort = function() {
      this.loader && this.loader.abort();
    }, l.load = function(e, s) {
      var t = this, o = e.url;
      if (!o)
        return Promise.reject(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: e, networkDetails: null }, "Fragment does not have a " + (o ? "part list" : "url")));
      this.abort();
      var u = this.config, n = u.fLoader, c = u.loader;
      return new Promise(function(p, m) {
        t.loader && t.loader.destroy();
        var g = t.loader = e.loader = n ? new n(u) : new c(u), i = h(e), r = { timeout: u.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: u.fragLoadingMaxRetryTimeout, highWaterMark: b };
        e.stats = g.stats, g.load(i, r, { onSuccess: function(d, x, T, A) {
          t.resetLoader(e, g), p({ frag: e, part: null, payload: d.data, networkDetails: A });
        }, onError: function(d, x, T) {
          t.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: e, response: d, networkDetails: T }));
        }, onAbort: function(d, x, T) {
          t.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.INTERNAL_ABORTED, fatal: !1, frag: e, networkDetails: T }));
        }, onTimeout: function(d, x, T) {
          t.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: !1, frag: e, networkDetails: T }));
        }, onProgress: function(d, x, T, A) {
          s && s({ frag: e, part: null, payload: T, networkDetails: A });
        } });
      });
    }, l.loadPart = function(e, s, t) {
      var o = this;
      this.abort();
      var u = this.config, n = u.fLoader, c = u.loader;
      return new Promise(function(p, m) {
        o.loader && o.loader.destroy();
        var g = o.loader = e.loader = n ? new n(u) : new c(u), i = h(e, s), r = { timeout: u.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: u.fragLoadingMaxRetryTimeout, highWaterMark: b };
        s.stats = g.stats, g.load(i, r, { onSuccess: function(d, x, T, A) {
          o.resetLoader(e, g), o.updateStatsFromPart(e, s);
          var C = { frag: e, part: s, payload: d.data, networkDetails: A };
          t(C), p(C);
        }, onError: function(d, x, T) {
          o.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: e, part: s, response: d, networkDetails: T }));
        }, onAbort: function(d, x, T) {
          e.stats.aborted = s.stats.aborted, o.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.INTERNAL_ABORTED, fatal: !1, frag: e, part: s, networkDetails: T }));
        }, onTimeout: function(d, x, T) {
          o.resetLoader(e, g), m(new E({ type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: !1, frag: e, part: s, networkDetails: T }));
        } });
      });
    }, l.updateStatsFromPart = function(e, s) {
      var t = e.stats, o = s.stats, u = o.total;
      if (t.loaded += o.loaded, u) {
        var n = Math.round(e.duration / s.duration), c = Math.min(Math.round(t.loaded / u), n), p = (n - c) * Math.round(t.loaded / c);
        t.total = t.loaded + p;
      } else
        t.total = Math.max(t.loaded, t.total);
      var m = t.loading, g = o.loading;
      m.start ? m.first += g.first - g.start : (m.start = g.start, m.first = g.first), m.end = g.end;
    }, l.resetLoader = function(e, s) {
      e.loader = null, this.loader === s && (self.clearTimeout(this.partLoadTimeout), this.loader = null), s.destroy();
    }, _;
  }();
  function h(_, l) {
    l === void 0 && (l = null);
    var e = l || _, s = { frag: _, part: l, responseType: "arraybuffer", url: e.url, rangeStart: 0, rangeEnd: 0 }, t = e.byteRangeStartOffset, o = e.byteRangeEndOffset;
    return Object(D.isFiniteNumber)(t) && Object(D.isFiniteNumber)(o) && (s.rangeStart = t, s.rangeEnd = o), s;
  }
  var E = function(_) {
    var l, e;
    function s(t) {
      for (var o, u = arguments.length, n = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++)
        n[c - 1] = arguments[c];
      return (o = _.call.apply(_, [this].concat(n)) || this).data = void 0, o.data = t, o;
    }
    return e = _, (l = s).prototype = Object.create(e.prototype), l.prototype.constructor = l, L(l, e), s;
  }(S(Error));
}, "./src/loader/fragment.ts": function(V, I, f) {
  f.r(I), f.d(I, "ElementaryStreamTypes", function() {
    return D;
  }), f.d(I, "BaseSegment", function() {
    return _;
  }), f.d(I, "Fragment", function() {
    return l;
  }), f.d(I, "Part", function() {
    return e;
  });
  var D, y, S = f("./src/polyfills/number.ts"), k = f("./node_modules/url-toolkit/src/url-toolkit.js"), R = f("./src/utils/logger.ts"), L = f("./src/loader/level-key.ts"), a = f("./src/loader/load-stats.ts");
  function b(s, t) {
    s.prototype = Object.create(t.prototype), s.prototype.constructor = s, v(s, t);
  }
  function v(s, t) {
    return (v = Object.setPrototypeOf || function(o, u) {
      return o.__proto__ = u, o;
    })(s, t);
  }
  function h(s, t) {
    for (var o = 0; o < t.length; o++) {
      var u = t[o];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(s, u.key, u);
    }
  }
  function E(s, t, o) {
    return t && h(s.prototype, t), o && h(s, o), s;
  }
  (y = D || (D = {})).AUDIO = "audio", y.VIDEO = "video", y.AUDIOVIDEO = "audiovideo";
  var _ = function() {
    function s(t) {
      var o;
      this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((o = {})[D.AUDIO] = null, o[D.VIDEO] = null, o[D.AUDIOVIDEO] = null, o), this.baseurl = t;
    }
    return s.prototype.setByteRange = function(t, o) {
      var u = t.split("@", 2), n = [];
      u.length === 1 ? n[0] = o ? o.byteRangeEndOffset : 0 : n[0] = parseInt(u[1]), n[1] = parseInt(u[0]) + n[0], this._byteRange = n;
    }, E(s, [{ key: "byteRange", get: function() {
      return this._byteRange ? this._byteRange : [];
    } }, { key: "byteRangeStartOffset", get: function() {
      return this.byteRange[0];
    } }, { key: "byteRangeEndOffset", get: function() {
      return this.byteRange[1];
    } }, { key: "url", get: function() {
      return !this._url && this.baseurl && this.relurl && (this._url = Object(k.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url || "";
    }, set: function(t) {
      this._url = t;
    } }]), s;
  }(), l = function(s) {
    function t(u, n) {
      var c;
      return (c = s.call(this, n) || this)._decryptdata = null, c.rawProgramDateTime = null, c.programDateTime = null, c.tagList = [], c.duration = 0, c.sn = 0, c.levelkey = void 0, c.type = void 0, c.loader = null, c.level = -1, c.cc = 0, c.startPTS = void 0, c.endPTS = void 0, c.appendedPTS = void 0, c.startDTS = void 0, c.endDTS = void 0, c.start = 0, c.deltaPTS = void 0, c.maxStartPTS = void 0, c.minEndPTS = void 0, c.stats = new a.LoadStats(), c.urlId = 0, c.data = void 0, c.bitrateTest = !1, c.title = null, c.initSegment = null, c.type = u, c;
    }
    b(t, s);
    var o = t.prototype;
    return o.createInitializationVector = function(u) {
      for (var n = new Uint8Array(16), c = 12; c < 16; c++)
        n[c] = u >> 8 * (15 - c) & 255;
      return n;
    }, o.setDecryptDataFromLevelKey = function(u, n) {
      var c = u;
      return (u == null ? void 0 : u.method) === "AES-128" && u.uri && !u.iv && ((c = L.LevelKey.fromURI(u.uri)).method = u.method, c.iv = this.createInitializationVector(n), c.keyFormat = "identity"), c;
    }, o.setElementaryStreamInfo = function(u, n, c, p, m, g) {
      g === void 0 && (g = !1);
      var i = this.elementaryStreams, r = i[u];
      r ? (r.startPTS = Math.min(r.startPTS, n), r.endPTS = Math.max(r.endPTS, c), r.startDTS = Math.min(r.startDTS, p), r.endDTS = Math.max(r.endDTS, m)) : i[u] = { startPTS: n, endPTS: c, startDTS: p, endDTS: m, partial: g };
    }, o.clearElementaryStreamInfo = function() {
      var u = this.elementaryStreams;
      u[D.AUDIO] = null, u[D.VIDEO] = null, u[D.AUDIOVIDEO] = null;
    }, E(t, [{ key: "decryptdata", get: function() {
      if (!this.levelkey && !this._decryptdata)
        return null;
      if (!this._decryptdata && this.levelkey) {
        var u = this.sn;
        typeof u != "number" && (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv && R.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), u = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, u);
      }
      return this._decryptdata;
    } }, { key: "end", get: function() {
      return this.start + this.duration;
    } }, { key: "endProgramDateTime", get: function() {
      if (this.programDateTime === null || !Object(S.isFiniteNumber)(this.programDateTime))
        return null;
      var u = Object(S.isFiniteNumber)(this.duration) ? this.duration : 0;
      return this.programDateTime + 1e3 * u;
    } }, { key: "encrypted", get: function() {
      var u;
      return !((u = this.decryptdata) === null || u === void 0 || !u.keyFormat || !this.decryptdata.uri);
    } }]), t;
  }(_), e = function(s) {
    function t(o, u, n, c, p) {
      var m;
      (m = s.call(this, n) || this).fragOffset = 0, m.duration = 0, m.gap = !1, m.independent = !1, m.relurl = void 0, m.fragment = void 0, m.index = void 0, m.stats = new a.LoadStats(), m.duration = o.decimalFloatingPoint("DURATION"), m.gap = o.bool("GAP"), m.independent = o.bool("INDEPENDENT"), m.relurl = o.enumeratedString("URI"), m.fragment = u, m.index = c;
      var g = o.enumeratedString("BYTERANGE");
      return g && m.setByteRange(g, p), p && (m.fragOffset = p.fragOffset + p.duration), m;
    }
    return b(t, s), E(t, [{ key: "start", get: function() {
      return this.fragment.start + this.fragOffset;
    } }, { key: "end", get: function() {
      return this.start + this.duration;
    } }, { key: "loaded", get: function() {
      var o = this.elementaryStreams;
      return !!(o.audio || o.video || o.audiovideo);
    } }]), t;
  }(_);
}, "./src/loader/key-loader.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return k;
  });
  var D = f("./src/events.ts"), y = f("./src/errors.ts"), S = f("./src/utils/logger.ts"), k = function() {
    function R(a) {
      this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = a, this._registerListeners();
    }
    var L = R.prototype;
    return L._registerListeners = function() {
      this.hls.on(D.Events.KEY_LOADING, this.onKeyLoading, this);
    }, L._unregisterListeners = function() {
      this.hls.off(D.Events.KEY_LOADING, this.onKeyLoading);
    }, L.destroy = function() {
      for (var a in this._unregisterListeners(), this.loaders) {
        var b = this.loaders[a];
        b && b.destroy();
      }
      this.loaders = {};
    }, L.onKeyLoading = function(a, b) {
      var v = b.frag, h = v.type, E = this.loaders[h];
      if (v.decryptdata) {
        var _ = v.decryptdata.uri;
        if (_ !== this.decrypturl || this.decryptkey === null) {
          var l = this.hls.config;
          if (E && (S.logger.warn("abort previous key loader for type:" + h), E.abort()), !_)
            return void S.logger.warn("key uri is falsy");
          var e = l.loader, s = v.loader = this.loaders[h] = new e(l);
          this.decrypturl = _, this.decryptkey = null;
          var t = { url: _, frag: v, responseType: "arraybuffer" }, o = { timeout: l.fragLoadingTimeOut, maxRetry: 0, retryDelay: l.fragLoadingRetryDelay, maxRetryDelay: l.fragLoadingMaxRetryTimeout, highWaterMark: 0 }, u = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
          s.load(t, o, u);
        } else
          this.decryptkey && (v.decryptdata.key = this.decryptkey, this.hls.trigger(D.Events.KEY_LOADED, { frag: v }));
      } else
        S.logger.warn("Missing decryption data on fragment in onKeyLoading");
    }, L.loadsuccess = function(a, b, v) {
      var h = v.frag;
      h.decryptdata ? (this.decryptkey = h.decryptdata.key = new Uint8Array(a.data), h.loader = null, delete this.loaders[h.type], this.hls.trigger(D.Events.KEY_LOADED, { frag: h })) : S.logger.error("after key load, decryptdata unset");
    }, L.loaderror = function(a, b) {
      var v = b.frag, h = v.loader;
      h && h.abort(), delete this.loaders[v.type], this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.KEY_LOAD_ERROR, fatal: !1, frag: v, response: a });
    }, L.loadtimeout = function(a, b) {
      var v = b.frag, h = v.loader;
      h && h.abort(), delete this.loaders[v.type], this.hls.trigger(D.Events.ERROR, { type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: !1, frag: v });
    }, R;
  }();
}, "./src/loader/level-details.ts": function(V, I, f) {
  f.r(I), f.d(I, "LevelDetails", function() {
    return S;
  });
  var D = f("./src/polyfills/number.ts");
  function y(k, R) {
    for (var L = 0; L < R.length; L++) {
      var a = R[L];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(k, a.key, a);
    }
  }
  var S = function() {
    function k(a) {
      this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = a;
    }
    var R, L;
    return k.prototype.reloaded = function(a) {
      if (!a)
        return this.advanced = !0, void (this.updated = !0);
      var b = this.lastPartSn - a.lastPartSn, v = this.lastPartIndex - a.lastPartIndex;
      this.updated = this.endSN !== a.endSN || !!v || !!b, this.advanced = this.endSN > a.endSN || b > 0 || b === 0 && v > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * a.misses) : this.misses = a.misses + 1, this.availabilityDelay = a.availabilityDelay;
    }, R = k, (L = [{ key: "hasProgramDateTime", get: function() {
      return !!this.fragments.length && Object(D.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime);
    } }, { key: "levelTargetDuration", get: function() {
      return this.averagetargetduration || this.targetduration || 10;
    } }, { key: "drift", get: function() {
      var a = this.driftEndTime - this.driftStartTime;
      return a > 0 ? 1e3 * (this.driftEnd - this.driftStart) / a : 1;
    } }, { key: "edge", get: function() {
      return this.partEnd || this.fragmentEnd;
    } }, { key: "partEnd", get: function() {
      var a;
      return (a = this.partList) !== null && a !== void 0 && a.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
    } }, { key: "fragmentEnd", get: function() {
      var a;
      return (a = this.fragments) !== null && a !== void 0 && a.length ? this.fragments[this.fragments.length - 1].end : 0;
    } }, { key: "age", get: function() {
      return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
    } }, { key: "lastPartIndex", get: function() {
      var a;
      return (a = this.partList) !== null && a !== void 0 && a.length ? this.partList[this.partList.length - 1].index : -1;
    } }, { key: "lastPartSn", get: function() {
      var a;
      return (a = this.partList) !== null && a !== void 0 && a.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
    } }]) && y(R.prototype, L), k;
  }();
}, "./src/loader/level-key.ts": function(V, I, f) {
  f.r(I), f.d(I, "LevelKey", function() {
    return S;
  });
  var D = f("./node_modules/url-toolkit/src/url-toolkit.js");
  function y(k, R) {
    for (var L = 0; L < R.length; L++) {
      var a = R[L];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(k, a.key, a);
    }
  }
  var S = function() {
    function k(a, b) {
      this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = b ? Object(D.buildAbsoluteURL)(a, b, { alwaysNormalize: !0 }) : a;
    }
    var R, L;
    return k.fromURL = function(a, b) {
      return new k(a, b);
    }, k.fromURI = function(a) {
      return new k(a);
    }, R = k, (L = [{ key: "uri", get: function() {
      return this._uri;
    } }]) && y(R.prototype, L), k;
  }();
}, "./src/loader/load-stats.ts": function(V, I, f) {
  f.r(I), f.d(I, "LoadStats", function() {
    return D;
  });
  var D = function() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
  };
}, "./src/loader/m3u8-parser.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return e;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./node_modules/url-toolkit/src/url-toolkit.js"), S = f("./src/loader/fragment.ts"), k = f("./src/loader/level-details.ts"), R = f("./src/loader/level-key.ts"), L = f("./src/utils/attr-list.ts"), a = f("./src/utils/logger.ts"), b = f("./src/utils/codecs.ts"), v = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, h = /#EXT-X-MEDIA:(.*)/g, E = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), _ = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), l = /\.(mp4|m4s|m4v|m4a)$/i, e = function() {
    function u() {
    }
    return u.findGroup = function(n, c) {
      for (var p = 0; p < n.length; p++) {
        var m = n[p];
        if (m.id === c)
          return m;
      }
    }, u.convertAVC1ToAVCOTI = function(n) {
      var c = n.split(".");
      if (c.length > 2) {
        var p = c.shift() + ".";
        return p += parseInt(c.shift()).toString(16), p += ("000" + parseInt(c.shift()).toString(16)).substr(-4);
      }
      return n;
    }, u.resolve = function(n, c) {
      return y.buildAbsoluteURL(c, n, { alwaysNormalize: !0 });
    }, u.parseMasterPlaylist = function(n, c) {
      var p, m = [], g = {}, i = !1;
      for (v.lastIndex = 0; (p = v.exec(n)) != null; )
        if (p[1]) {
          var r = new L.AttrList(p[1]), d = { attrs: r, bitrate: r.decimalInteger("AVERAGE-BANDWIDTH") || r.decimalInteger("BANDWIDTH"), name: r.NAME, url: u.resolve(p[2], c) }, x = r.decimalResolution("RESOLUTION");
          x && (d.width = x.width, d.height = x.height), s((r.CODECS || "").split(/[ ,]+/).filter(function(A) {
            return A;
          }), d), d.videoCodec && d.videoCodec.indexOf("avc1") !== -1 && (d.videoCodec = u.convertAVC1ToAVCOTI(d.videoCodec)), m.push(d);
        } else if (p[3]) {
          var T = new L.AttrList(p[3]);
          T["DATA-ID"] && (i = !0, g[T["DATA-ID"]] = T);
        }
      return { levels: m, sessionData: i ? g : null };
    }, u.parseMasterPlaylistMedia = function(n, c, p, m) {
      var g;
      m === void 0 && (m = []);
      var i = [], r = 0;
      for (h.lastIndex = 0; (g = h.exec(n)) !== null; ) {
        var d = new L.AttrList(g[1]);
        if (d.TYPE === p) {
          var x = { attrs: d, bitrate: 0, id: r++, groupId: d["GROUP-ID"], instreamId: d["INSTREAM-ID"], name: d.NAME || d.LANGUAGE || "", type: p, default: d.bool("DEFAULT"), autoselect: d.bool("AUTOSELECT"), forced: d.bool("FORCED"), lang: d.LANGUAGE, url: d.URI ? u.resolve(d.URI, c) : "" };
          if (m.length) {
            var T = u.findGroup(m, x.groupId) || m[0];
            t(x, T, "audioCodec"), t(x, T, "textCodec");
          }
          i.push(x);
        }
      }
      return i;
    }, u.parseLevelPlaylist = function(n, c, p, m, g) {
      var i, r, d, x = new k.LevelDetails(c), T = x.fragments, A = null, C = 0, w = 0, O = 0, P = 0, F = null, B = new S.Fragment(m, c), N = -1, M = !1;
      for (E.lastIndex = 0, x.m3u8 = n; (i = E.exec(n)) !== null; ) {
        M && (M = !1, (B = new S.Fragment(m, c)).start = O, B.sn = C, B.cc = P, B.level = p, A && (B.initSegment = A, B.rawProgramDateTime = A.rawProgramDateTime));
        var G = i[1];
        if (G) {
          B.duration = parseFloat(G);
          var K = (" " + i[2]).slice(1);
          B.title = K || null, B.tagList.push(K ? ["INF", G, K] : ["INF", G]);
        } else if (i[3])
          Object(D.isFiniteNumber)(B.duration) && (B.start = O, d && (B.levelkey = d), B.sn = C, B.level = p, B.cc = P, B.urlId = g, T.push(B), B.relurl = (" " + i[3]).slice(1), o(B, F), F = B, O += B.duration, C++, w = 0, M = !0);
        else if (i[4]) {
          var H = (" " + i[4]).slice(1);
          F ? B.setByteRange(H, F) : B.setByteRange(H);
        } else if (i[5])
          B.rawProgramDateTime = (" " + i[5]).slice(1), B.tagList.push(["PROGRAM-DATE-TIME", B.rawProgramDateTime]), N === -1 && (N = T.length);
        else {
          if (!(i = i[0].match(_))) {
            a.logger.warn("No matches on slow regex match for level playlist!");
            continue;
          }
          for (r = 1; r < i.length && i[r] === void 0; r++)
            ;
          var z = (" " + i[r]).slice(1), q = (" " + i[r + 1]).slice(1), $ = i[r + 2] ? (" " + i[r + 2]).slice(1) : "";
          switch (z) {
            case "PLAYLIST-TYPE":
              x.type = q.toUpperCase();
              break;
            case "MEDIA-SEQUENCE":
              C = x.startSN = parseInt(q);
              break;
            case "SKIP":
              var ae = new L.AttrList(q), te = ae.decimalInteger("SKIPPED-SEGMENTS");
              if (Object(D.isFiniteNumber)(te)) {
                x.skippedSegments = te;
                for (var oe = te; oe--; )
                  T.unshift(null);
                C += te;
              }
              var re = ae.enumeratedString("RECENTLY-REMOVED-DATERANGES");
              re && (x.recentlyRemovedDateranges = re.split("	"));
              break;
            case "TARGETDURATION":
              x.targetduration = parseFloat(q);
              break;
            case "VERSION":
              x.version = parseInt(q);
              break;
            case "EXTM3U":
              break;
            case "ENDLIST":
              x.live = !1;
              break;
            case "#":
              (q || $) && B.tagList.push($ ? [q, $] : [q]);
              break;
            case "DIS":
              P++;
            case "GAP":
              B.tagList.push([z]);
              break;
            case "BITRATE":
              B.tagList.push([z, q]);
              break;
            case "DISCONTINUITY-SEQ":
              P = parseInt(q);
              break;
            case "KEY":
              var fe, ie = new L.AttrList(q), se = ie.enumeratedString("METHOD"), de = ie.URI, le = ie.hexadecimalInteger("IV"), ye = ie.enumeratedString("KEYFORMATVERSIONS"), Te = ie.enumeratedString("KEYID"), xe = (fe = ie.enumeratedString("KEYFORMAT")) != null ? fe : "identity";
              if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(xe) > -1) {
                a.logger.warn("Keyformat " + xe + " is not supported from the manifest");
                continue;
              }
              if (xe !== "identity")
                continue;
              se && (d = R.LevelKey.fromURL(c, de), de && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(se) >= 0 && (d.method = se, d.keyFormat = xe, Te && (d.keyID = Te), ye && (d.keyFormatVersions = ye), d.iv = le));
              break;
            case "START":
              var De = new L.AttrList(q).decimalFloatingPoint("TIME-OFFSET");
              Object(D.isFiniteNumber)(De) && (x.startTimeOffset = De);
              break;
            case "MAP":
              var ge = new L.AttrList(q);
              B.relurl = ge.URI, ge.BYTERANGE && B.setByteRange(ge.BYTERANGE), B.level = p, B.sn = "initSegment", d && (B.levelkey = d), B.initSegment = null, A = B, M = !0;
              break;
            case "SERVER-CONTROL":
              var ve = new L.AttrList(q);
              x.canBlockReload = ve.bool("CAN-BLOCK-RELOAD"), x.canSkipUntil = ve.optionalFloat("CAN-SKIP-UNTIL", 0), x.canSkipDateRanges = x.canSkipUntil > 0 && ve.bool("CAN-SKIP-DATERANGES"), x.partHoldBack = ve.optionalFloat("PART-HOLD-BACK", 0), x.holdBack = ve.optionalFloat("HOLD-BACK", 0);
              break;
            case "PART-INF":
              var Be = new L.AttrList(q);
              x.partTarget = Be.decimalFloatingPoint("PART-TARGET");
              break;
            case "PART":
              var Re = x.partList;
              Re || (Re = x.partList = []);
              var X = w > 0 ? Re[Re.length - 1] : void 0, ue = w++, he = new S.Part(new L.AttrList(q), B, c, ue, X);
              Re.push(he), B.duration += he.duration;
              break;
            case "PRELOAD-HINT":
              var Me = new L.AttrList(q);
              x.preloadHint = Me;
              break;
            case "RENDITION-REPORT":
              var Qe = new L.AttrList(q);
              x.renditionReports = x.renditionReports || [], x.renditionReports.push(Qe);
              break;
            default:
              a.logger.warn("line parsed but not handled: " + i);
          }
        }
      }
      F && !F.relurl ? (T.pop(), O -= F.duration, x.partList && (x.fragmentHint = F)) : x.partList && (o(B, F), B.cc = P, x.fragmentHint = B);
      var qe = T.length, Ve = T[0], Ze = T[qe - 1];
      if ((O += x.skippedSegments * x.targetduration) > 0 && qe && Ze) {
        x.averagetargetduration = O / qe;
        var Ye = Ze.sn;
        x.endSN = Ye !== "initSegment" ? Ye : 0, Ve && (x.startCC = Ve.cc, Ve.initSegment || x.fragments.every(function(Ke) {
          return Ke.relurl && (Ue = Ke.relurl, l.test((He = (Oe = y.parseURL(Ue)) === null || Oe === void 0 ? void 0 : Oe.path) != null ? He : ""));
          var Ue, He, Oe;
        }) && (a.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (B = new S.Fragment(m, c)).relurl = Ze.relurl, B.level = p, B.sn = "initSegment", Ve.initSegment = B, x.needSidxRanges = !0));
      } else
        x.endSN = 0, x.startCC = 0;
      return x.fragmentHint && (O += x.fragmentHint.duration), x.totalduration = O, x.endCC = P, N > 0 && function(Ke, Ue) {
        for (var He = Ke[Ue], Oe = Ue; Oe--; ) {
          var ze = Ke[Oe];
          if (!ze)
            return;
          ze.programDateTime = He.programDateTime - 1e3 * ze.duration, He = ze;
        }
      }(T, N), x;
    }, u;
  }();
  function s(u, n) {
    ["video", "audio", "text"].forEach(function(c) {
      var p = u.filter(function(g) {
        return Object(b.isCodecType)(g, c);
      });
      if (p.length) {
        var m = p.filter(function(g) {
          return g.lastIndexOf("avc1", 0) === 0 || g.lastIndexOf("mp4a", 0) === 0;
        });
        n[c + "Codec"] = m.length > 0 ? m[0] : p[0], u = u.filter(function(g) {
          return p.indexOf(g) === -1;
        });
      }
    }), n.unknownCodecs = u;
  }
  function t(u, n, c) {
    var p = n[c];
    p && (u[c] = p);
  }
  function o(u, n) {
    u.rawProgramDateTime ? u.programDateTime = Date.parse(u.rawProgramDateTime) : n != null && n.programDateTime && (u.programDateTime = n.endProgramDateTime), Object(D.isFiniteNumber)(u.programDateTime) || (u.programDateTime = null, u.rawProgramDateTime = null);
  }
}, "./src/loader/playlist-loader.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/polyfills/number.ts"), y = f("./src/events.ts"), S = f("./src/errors.ts"), k = f("./src/utils/logger.ts"), R = f("./src/utils/mp4-tools.ts"), L = f("./src/loader/m3u8-parser.ts"), a = f("./src/types/loader.ts"), b = f("./src/utils/attr-list.ts");
  function v(E, _) {
    var l = E.url;
    return l !== void 0 && l.indexOf("data:") !== 0 || (l = _.url), l;
  }
  var h = function() {
    function E(l) {
      this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.hls = l, this.registerListeners();
    }
    var _ = E.prototype;
    return _.registerListeners = function() {
      var l = this.hls;
      l.on(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), l.on(y.Events.LEVEL_LOADING, this.onLevelLoading, this), l.on(y.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), l.on(y.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
    }, _.unregisterListeners = function() {
      var l = this.hls;
      l.off(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), l.off(y.Events.LEVEL_LOADING, this.onLevelLoading, this), l.off(y.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), l.off(y.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
    }, _.createInternalLoader = function(l) {
      var e = this.hls.config, s = e.pLoader, t = e.loader, o = new (s || t)(e);
      return l.loader = o, this.loaders[l.type] = o, o;
    }, _.getInternalLoader = function(l) {
      return this.loaders[l.type];
    }, _.resetInternalLoader = function(l) {
      this.loaders[l] && delete this.loaders[l];
    }, _.destroyInternalLoaders = function() {
      for (var l in this.loaders) {
        var e = this.loaders[l];
        e && e.destroy(), this.resetInternalLoader(l);
      }
    }, _.destroy = function() {
      this.unregisterListeners(), this.destroyInternalLoaders();
    }, _.onManifestLoading = function(l, e) {
      var s = e.url;
      this.load({ id: null, groupId: null, level: 0, responseType: "text", type: a.PlaylistContextType.MANIFEST, url: s, deliveryDirectives: null });
    }, _.onLevelLoading = function(l, e) {
      var s = e.id, t = e.level, o = e.url, u = e.deliveryDirectives;
      this.load({ id: s, groupId: null, level: t, responseType: "text", type: a.PlaylistContextType.LEVEL, url: o, deliveryDirectives: u });
    }, _.onAudioTrackLoading = function(l, e) {
      var s = e.id, t = e.groupId, o = e.url, u = e.deliveryDirectives;
      this.load({ id: s, groupId: t, level: null, responseType: "text", type: a.PlaylistContextType.AUDIO_TRACK, url: o, deliveryDirectives: u });
    }, _.onSubtitleTrackLoading = function(l, e) {
      var s = e.id, t = e.groupId, o = e.url, u = e.deliveryDirectives;
      this.load({ id: s, groupId: t, level: null, responseType: "text", type: a.PlaylistContextType.SUBTITLE_TRACK, url: o, deliveryDirectives: u });
    }, _.load = function(l) {
      var e, s, t, o, u, n, c = this.hls.config, p = this.getInternalLoader(l);
      if (p) {
        var m = p.context;
        if (m && m.url === l.url)
          return void k.logger.trace("[playlist-loader]: playlist request ongoing");
        k.logger.log("[playlist-loader]: aborting previous loader for type: " + l.type), p.abort();
      }
      switch (l.type) {
        case a.PlaylistContextType.MANIFEST:
          s = c.manifestLoadingMaxRetry, t = c.manifestLoadingTimeOut, o = c.manifestLoadingRetryDelay, u = c.manifestLoadingMaxRetryTimeout;
          break;
        case a.PlaylistContextType.LEVEL:
        case a.PlaylistContextType.AUDIO_TRACK:
        case a.PlaylistContextType.SUBTITLE_TRACK:
          s = 0, t = c.levelLoadingTimeOut;
          break;
        default:
          s = c.levelLoadingMaxRetry, t = c.levelLoadingTimeOut, o = c.levelLoadingRetryDelay, u = c.levelLoadingMaxRetryTimeout;
      }
      if (p = this.createInternalLoader(l), (e = l.deliveryDirectives) !== null && e !== void 0 && e.part && (l.type === a.PlaylistContextType.LEVEL && l.level !== null ? n = this.hls.levels[l.level].details : l.type === a.PlaylistContextType.AUDIO_TRACK && l.id !== null ? n = this.hls.audioTracks[l.id].details : l.type === a.PlaylistContextType.SUBTITLE_TRACK && l.id !== null && (n = this.hls.subtitleTracks[l.id].details), n)) {
        var g = n.partTarget, i = n.targetduration;
        g && i && (t = Math.min(1e3 * Math.max(3 * g, 0.8 * i), t));
      }
      var r = { timeout: t, maxRetry: s, retryDelay: o, maxRetryDelay: u, highWaterMark: 0 }, d = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
      p.load(l, r, d);
    }, _.loadsuccess = function(l, e, s, t) {
      if (t === void 0 && (t = null), s.isSidxRequest)
        return this.handleSidxRequest(l, s), void this.handlePlaylistLoaded(l, e, s, t);
      this.resetInternalLoader(s.type);
      var o = l.data;
      o.indexOf("#EXTM3U") === 0 ? (e.parsing.start = performance.now(), o.indexOf("#EXTINF:") > 0 || o.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(l, e, s, t) : this.handleMasterPlaylist(l, e, s, t)) : this.handleManifestParsingError(l, s, "no EXTM3U delimiter", t);
    }, _.loaderror = function(l, e, s) {
      s === void 0 && (s = null), this.handleNetworkError(e, s, !1, l);
    }, _.loadtimeout = function(l, e, s) {
      s === void 0 && (s = null), this.handleNetworkError(e, s, !0);
    }, _.handleMasterPlaylist = function(l, e, s, t) {
      var o = this.hls, u = l.data, n = v(l, s), c = L.default.parseMasterPlaylist(u, n), p = c.levels, m = c.sessionData;
      if (p.length) {
        var g = p.map(function(T) {
          return { id: T.attrs.AUDIO, audioCodec: T.audioCodec };
        }), i = p.map(function(T) {
          return { id: T.attrs.SUBTITLES, textCodec: T.textCodec };
        }), r = L.default.parseMasterPlaylistMedia(u, n, "AUDIO", g), d = L.default.parseMasterPlaylistMedia(u, n, "SUBTITLES", i), x = L.default.parseMasterPlaylistMedia(u, n, "CLOSED-CAPTIONS");
        r.length && (r.some(function(T) {
          return !T.url;
        }) || !p[0].audioCodec || p[0].attrs.AUDIO || (k.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), r.unshift({ type: "main", name: "main", default: !1, autoselect: !1, forced: !1, id: -1, attrs: new b.AttrList({}), bitrate: 0, url: "" }))), o.trigger(y.Events.MANIFEST_LOADED, { levels: p, audioTracks: r, subtitles: d, captions: x, url: n, stats: e, networkDetails: t, sessionData: m });
      } else
        this.handleManifestParsingError(l, s, "no level found in manifest", t);
    }, _.handleTrackOrLevelPlaylist = function(l, e, s, t) {
      var o = this.hls, u = s.id, n = s.level, c = s.type, p = v(l, s), m = Object(D.isFiniteNumber)(u) ? u : 0, g = Object(D.isFiniteNumber)(n) ? n : m, i = function(A) {
        switch (A.type) {
          case a.PlaylistContextType.AUDIO_TRACK:
            return a.PlaylistLevelType.AUDIO;
          case a.PlaylistContextType.SUBTITLE_TRACK:
            return a.PlaylistLevelType.SUBTITLE;
          default:
            return a.PlaylistLevelType.MAIN;
        }
      }(s), r = L.default.parseLevelPlaylist(l.data, p, g, i, m);
      if (r.fragments.length) {
        if (c === a.PlaylistContextType.MANIFEST) {
          var d = { attrs: new b.AttrList({}), bitrate: 0, details: r, name: "", url: p };
          o.trigger(y.Events.MANIFEST_LOADED, { levels: [d], audioTracks: [], url: p, stats: e, networkDetails: t, sessionData: null });
        }
        if (e.parsing.end = performance.now(), r.needSidxRanges) {
          var x, T = (x = r.fragments[0].initSegment) === null || x === void 0 ? void 0 : x.url;
          this.load({ url: T, isSidxRequest: !0, type: c, level: n, levelDetails: r, id: u, groupId: null, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer", deliveryDirectives: null });
        } else
          s.levelDetails = r, this.handlePlaylistLoaded(l, e, s, t);
      } else
        o.trigger(y.Events.ERROR, { type: S.ErrorTypes.NETWORK_ERROR, details: S.ErrorDetails.LEVEL_EMPTY_ERROR, fatal: !1, url: p, reason: "no fragments found in level", level: typeof s.level == "number" ? s.level : void 0 });
    }, _.handleSidxRequest = function(l, e) {
      var s = Object(R.parseSegmentIndex)(new Uint8Array(l.data));
      if (s) {
        var t = s.references, o = e.levelDetails;
        t.forEach(function(u, n) {
          var c = u.info, p = o.fragments[n];
          p.byteRange.length === 0 && p.setByteRange(String(1 + c.end - c.start) + "@" + String(c.start)), p.initSegment && p.initSegment.setByteRange(String(s.moovEndOffset) + "@0");
        });
      }
    }, _.handleManifestParsingError = function(l, e, s, t) {
      this.hls.trigger(y.Events.ERROR, { type: S.ErrorTypes.NETWORK_ERROR, details: S.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: e.type === a.PlaylistContextType.MANIFEST, url: l.url, reason: s, response: l, context: e, networkDetails: t });
    }, _.handleNetworkError = function(l, e, s, t) {
      s === void 0 && (s = !1), k.logger.warn("[playlist-loader]: A network " + (s ? "timeout" : "error") + " occurred while loading " + l.type + " level: " + l.level + " id: " + l.id + ' group-id: "' + l.groupId + '"');
      var o = S.ErrorDetails.UNKNOWN, u = !1, n = this.getInternalLoader(l);
      switch (l.type) {
        case a.PlaylistContextType.MANIFEST:
          o = s ? S.ErrorDetails.MANIFEST_LOAD_TIMEOUT : S.ErrorDetails.MANIFEST_LOAD_ERROR, u = !0;
          break;
        case a.PlaylistContextType.LEVEL:
          o = s ? S.ErrorDetails.LEVEL_LOAD_TIMEOUT : S.ErrorDetails.LEVEL_LOAD_ERROR, u = !1;
          break;
        case a.PlaylistContextType.AUDIO_TRACK:
          o = s ? S.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : S.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, u = !1;
          break;
        case a.PlaylistContextType.SUBTITLE_TRACK:
          o = s ? S.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : S.ErrorDetails.SUBTITLE_LOAD_ERROR, u = !1;
      }
      n && this.resetInternalLoader(l.type);
      var c = { type: S.ErrorTypes.NETWORK_ERROR, details: o, fatal: u, url: l.url, loader: n, context: l, networkDetails: e };
      t && (c.response = t), this.hls.trigger(y.Events.ERROR, c);
    }, _.handlePlaylistLoaded = function(l, e, s, t) {
      var o = s.type, u = s.level, n = s.id, c = s.groupId, p = s.loader, m = s.levelDetails, g = s.deliveryDirectives;
      if (m != null && m.targetduration) {
        if (p)
          switch (m.live && (p.getCacheAge && (m.ageHeader = p.getCacheAge() || 0), p.getCacheAge && !isNaN(m.ageHeader) || (m.ageHeader = 0)), o) {
            case a.PlaylistContextType.MANIFEST:
            case a.PlaylistContextType.LEVEL:
              this.hls.trigger(y.Events.LEVEL_LOADED, { details: m, level: u || 0, id: n || 0, stats: e, networkDetails: t, deliveryDirectives: g });
              break;
            case a.PlaylistContextType.AUDIO_TRACK:
              this.hls.trigger(y.Events.AUDIO_TRACK_LOADED, { details: m, id: n || 0, groupId: c || "", stats: e, networkDetails: t, deliveryDirectives: g });
              break;
            case a.PlaylistContextType.SUBTITLE_TRACK:
              this.hls.trigger(y.Events.SUBTITLE_TRACK_LOADED, { details: m, id: n || 0, groupId: c || "", stats: e, networkDetails: t, deliveryDirectives: g });
          }
      } else
        this.handleManifestParsingError(l, s, "invalid target duration", t);
    }, E;
  }();
  I.default = h;
}, "./src/polyfills/number.ts": function(V, I, f) {
  f.r(I), f.d(I, "isFiniteNumber", function() {
    return D;
  }), f.d(I, "MAX_SAFE_INTEGER", function() {
    return y;
  });
  var D = Number.isFinite || function(S) {
    return typeof S == "number" && isFinite(S);
  }, y = Number.MAX_SAFE_INTEGER || 9007199254740991;
}, "./src/remux/aac-helper.ts": function(V, I, f) {
  f.r(I);
  var D = function() {
    function y() {
    }
    return y.getSilentFrame = function(S, k) {
      switch (S) {
        case "mp4a.40.2":
          if (k === 1)
            return new Uint8Array([0, 200, 0, 128, 35, 128]);
          if (k === 2)
            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
          if (k === 3)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
          if (k === 4)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
          if (k === 5)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
          if (k === 6)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          break;
        default:
          if (k === 1)
            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          if (k === 2)
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          if (k === 3)
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      }
    }, y;
  }();
  I.default = D;
}, "./src/remux/mp4-generator.ts": function(V, I, f) {
  f.r(I);
  var D = Math.pow(2, 32) - 1, y = function() {
    function S() {
    }
    return S.init = function() {
      var k;
      for (k in S.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, S.types)
        S.types.hasOwnProperty(k) && (S.types[k] = [k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2), k.charCodeAt(3)]);
      var R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
      S.HDLR_TYPES = { video: R, audio: L };
      var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), b = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
      S.STTS = S.STSC = S.STCO = b, S.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), S.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), S.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), S.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
      var v = new Uint8Array([105, 115, 111, 109]), h = new Uint8Array([97, 118, 99, 49]), E = new Uint8Array([0, 0, 0, 1]);
      S.FTYP = S.box(S.types.ftyp, v, E, v, h), S.DINF = S.box(S.types.dinf, S.box(S.types.dref, a));
    }, S.box = function(k) {
      for (var R = 8, L = arguments.length, a = new Array(L > 1 ? L - 1 : 0), b = 1; b < L; b++)
        a[b - 1] = arguments[b];
      for (var v = a.length, h = v; v--; )
        R += a[v].byteLength;
      var E = new Uint8Array(R);
      for (E[0] = R >> 24 & 255, E[1] = R >> 16 & 255, E[2] = R >> 8 & 255, E[3] = 255 & R, E.set(k, 4), v = 0, R = 8; v < h; v++)
        E.set(a[v], R), R += a[v].byteLength;
      return E;
    }, S.hdlr = function(k) {
      return S.box(S.types.hdlr, S.HDLR_TYPES[k]);
    }, S.mdat = function(k) {
      return S.box(S.types.mdat, k);
    }, S.mdhd = function(k, R) {
      R *= k;
      var L = Math.floor(R / (D + 1)), a = Math.floor(R % (D + 1));
      return S.box(S.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, k >> 24 & 255, k >> 16 & 255, k >> 8 & 255, 255 & k, L >> 24, L >> 16 & 255, L >> 8 & 255, 255 & L, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]));
    }, S.mdia = function(k) {
      return S.box(S.types.mdia, S.mdhd(k.timescale, k.duration), S.hdlr(k.type), S.minf(k));
    }, S.mfhd = function(k) {
      return S.box(S.types.mfhd, new Uint8Array([0, 0, 0, 0, k >> 24, k >> 16 & 255, k >> 8 & 255, 255 & k]));
    }, S.minf = function(k) {
      return k.type === "audio" ? S.box(S.types.minf, S.box(S.types.smhd, S.SMHD), S.DINF, S.stbl(k)) : S.box(S.types.minf, S.box(S.types.vmhd, S.VMHD), S.DINF, S.stbl(k));
    }, S.moof = function(k, R, L) {
      return S.box(S.types.moof, S.mfhd(k), S.traf(L, R));
    }, S.moov = function(k) {
      for (var R = k.length, L = []; R--; )
        L[R] = S.trak(k[R]);
      return S.box.apply(null, [S.types.moov, S.mvhd(k[0].timescale, k[0].duration)].concat(L).concat(S.mvex(k)));
    }, S.mvex = function(k) {
      for (var R = k.length, L = []; R--; )
        L[R] = S.trex(k[R]);
      return S.box.apply(null, [S.types.mvex].concat(L));
    }, S.mvhd = function(k, R) {
      R *= k;
      var L = Math.floor(R / (D + 1)), a = Math.floor(R % (D + 1)), b = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, k >> 24 & 255, k >> 16 & 255, k >> 8 & 255, 255 & k, L >> 24, L >> 16 & 255, L >> 8 & 255, 255 & L, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
      return S.box(S.types.mvhd, b);
    }, S.sdtp = function(k) {
      var R, L, a = k.samples || [], b = new Uint8Array(4 + a.length);
      for (R = 0; R < a.length; R++)
        L = a[R].flags, b[R + 4] = L.dependsOn << 4 | L.isDependedOn << 2 | L.hasRedundancy;
      return S.box(S.types.sdtp, b);
    }, S.stbl = function(k) {
      return S.box(S.types.stbl, S.stsd(k), S.box(S.types.stts, S.STTS), S.box(S.types.stsc, S.STSC), S.box(S.types.stsz, S.STSZ), S.box(S.types.stco, S.STCO));
    }, S.avc1 = function(k) {
      var R, L, a, b = [], v = [];
      for (R = 0; R < k.sps.length; R++)
        a = (L = k.sps[R]).byteLength, b.push(a >>> 8 & 255), b.push(255 & a), b = b.concat(Array.prototype.slice.call(L));
      for (R = 0; R < k.pps.length; R++)
        a = (L = k.pps[R]).byteLength, v.push(a >>> 8 & 255), v.push(255 & a), v = v.concat(Array.prototype.slice.call(L));
      var h = S.box(S.types.avcC, new Uint8Array([1, b[3], b[4], b[5], 255, 224 | k.sps.length].concat(b).concat([k.pps.length]).concat(v))), E = k.width, _ = k.height, l = k.pixelRatio[0], e = k.pixelRatio[1];
      return S.box(S.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, E >> 8 & 255, 255 & E, _ >> 8 & 255, 255 & _, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), h, S.box(S.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), S.box(S.types.pasp, new Uint8Array([l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e])));
    }, S.esds = function(k) {
      var R = k.config.length;
      return new Uint8Array([0, 0, 0, 0, 3, 23 + R, 0, 1, 0, 4, 15 + R, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([R]).concat(k.config).concat([6, 1, 2]));
    }, S.mp4a = function(k) {
      var R = k.samplerate;
      return S.box(S.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, k.channelCount, 0, 16, 0, 0, 0, 0, R >> 8 & 255, 255 & R, 0, 0]), S.box(S.types.esds, S.esds(k)));
    }, S.mp3 = function(k) {
      var R = k.samplerate;
      return S.box(S.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, k.channelCount, 0, 16, 0, 0, 0, 0, R >> 8 & 255, 255 & R, 0, 0]));
    }, S.stsd = function(k) {
      return k.type === "audio" ? k.isAAC || k.codec !== "mp3" ? S.box(S.types.stsd, S.STSD, S.mp4a(k)) : S.box(S.types.stsd, S.STSD, S.mp3(k)) : S.box(S.types.stsd, S.STSD, S.avc1(k));
    }, S.tkhd = function(k) {
      var R = k.id, L = k.duration * k.timescale, a = k.width, b = k.height, v = Math.floor(L / (D + 1)), h = Math.floor(L % (D + 1));
      return S.box(S.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, R >> 24 & 255, R >> 16 & 255, R >> 8 & 255, 255 & R, 0, 0, 0, 0, v >> 24, v >> 16 & 255, v >> 8 & 255, 255 & v, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, b >> 8 & 255, 255 & b, 0, 0]));
    }, S.traf = function(k, R) {
      var L = S.sdtp(k), a = k.id, b = Math.floor(R / (D + 1)), v = Math.floor(R % (D + 1));
      return S.box(S.types.traf, S.box(S.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), S.box(S.types.tfdt, new Uint8Array([1, 0, 0, 0, b >> 24, b >> 16 & 255, b >> 8 & 255, 255 & b, v >> 24, v >> 16 & 255, v >> 8 & 255, 255 & v])), S.trun(k, L.length + 16 + 20 + 8 + 16 + 8 + 8), L);
    }, S.trak = function(k) {
      return k.duration = k.duration || 4294967295, S.box(S.types.trak, S.tkhd(k), S.mdia(k));
    }, S.trex = function(k) {
      var R = k.id;
      return S.box(S.types.trex, new Uint8Array([0, 0, 0, 0, R >> 24, R >> 16 & 255, R >> 8 & 255, 255 & R, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
    }, S.trun = function(k, R) {
      var L, a, b, v, h, E, _ = k.samples || [], l = _.length, e = 12 + 16 * l, s = new Uint8Array(e);
      for (R += 8 + e, s.set([0, 0, 15, 1, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, R >>> 24 & 255, R >>> 16 & 255, R >>> 8 & 255, 255 & R], 0), L = 0; L < l; L++)
        b = (a = _[L]).duration, v = a.size, h = a.flags, E = a.cts, s.set([b >>> 24 & 255, b >>> 16 & 255, b >>> 8 & 255, 255 & b, v >>> 24 & 255, v >>> 16 & 255, v >>> 8 & 255, 255 & v, h.isLeading << 2 | h.dependsOn, h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync, 61440 & h.degradPrio, 15 & h.degradPrio, E >>> 24 & 255, E >>> 16 & 255, E >>> 8 & 255, 255 & E], 12 + 16 * L);
      return S.box(S.types.trun, s);
    }, S.initSegment = function(k) {
      S.types || S.init();
      var R = S.moov(k), L = new Uint8Array(S.FTYP.byteLength + R.byteLength);
      return L.set(S.FTYP), L.set(R, S.FTYP.byteLength), L;
    }, S;
  }();
  y.types = void 0, y.HDLR_TYPES = void 0, y.STTS = void 0, y.STSC = void 0, y.STCO = void 0, y.STSZ = void 0, y.VMHD = void 0, y.SMHD = void 0, y.STSD = void 0, y.FTYP = void 0, y.DINF = void 0, I.default = y;
}, "./src/remux/mp4-remuxer.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return l;
  }), f.d(I, "normalizePts", function() {
    return e;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/remux/aac-helper.ts"), S = f("./src/remux/mp4-generator.ts"), k = f("./src/events.ts"), R = f("./src/errors.ts"), L = f("./src/utils/logger.ts"), a = f("./src/types/loader.ts"), b = f("./src/utils/timescale-conversion.ts");
  function v() {
    return (v = Object.assign || function(o) {
      for (var u = 1; u < arguments.length; u++) {
        var n = arguments[u];
        for (var c in n)
          Object.prototype.hasOwnProperty.call(n, c) && (o[c] = n[c]);
      }
      return o;
    }).apply(this, arguments);
  }
  var h = null, E = null, _ = !1, l = function() {
    function o(n, c, p, m) {
      if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = n, this.config = c, this.typeSupported = p, this.ISGenerated = !1, h === null) {
        var g = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        h = g ? parseInt(g[1]) : 0;
      }
      if (E === null) {
        var i = navigator.userAgent.match(/Safari\/(\d+)/i);
        E = i ? parseInt(i[1]) : 0;
      }
      _ = !!h && h < 75 || !!E && E < 600;
    }
    var u = o.prototype;
    return u.destroy = function() {
    }, u.resetTimeStamp = function(n) {
      L.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = n;
    }, u.resetNextTimestamp = function() {
      L.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
    }, u.resetInitSegment = function() {
      L.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1;
    }, u.getVideoStartPts = function(n) {
      var c = !1, p = n.reduce(function(m, g) {
        var i = g.pts - m;
        return i < -4294967296 ? (c = !0, e(m, g.pts)) : i > 0 ? m : g.pts;
      }, n[0].pts);
      return c && L.logger.debug("PTS rollover detected"), p;
    }, u.remux = function(n, c, p, m, g, i, r, d) {
      var x, T, A, C, w, O, P = g, F = g, B = n.pid > -1, N = c.pid > -1, M = c.samples.length, G = n.samples.length > 0, K = M > 1;
      if ((!B || G) && (!N || K) || this.ISGenerated || r) {
        this.ISGenerated || (A = this.generateIS(n, c, g));
        var H = this.isVideoContiguous, z = -1;
        if (K && (z = function(oe) {
          for (var re = 0; re < oe.length; re++)
            if (oe[re].key)
              return re;
          return -1;
        }(c.samples), !H && this.config.forceKeyFrameOnDiscontinuity))
          if (O = !0, z > 0) {
            L.logger.warn("[mp4-remuxer]: Dropped " + z + " out of " + M + " video samples due to a missing keyframe");
            var q = this.getVideoStartPts(c.samples);
            c.samples = c.samples.slice(z), c.dropped += z, F += (c.samples[0].pts - q) / (c.timescale || 9e4);
          } else
            z === -1 && (L.logger.warn("[mp4-remuxer]: No keyframe found out of " + M + " video samples"), O = !1);
        if (this.ISGenerated) {
          if (G && K) {
            var $ = this.getVideoStartPts(c.samples), ae = (e(n.samples[0].pts, $) - $) / c.inputTimeScale;
            P += Math.max(0, ae), F += Math.max(0, -ae);
          }
          if (G) {
            if (n.samplerate || (L.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), A = this.generateIS(n, c, g)), T = this.remuxAudio(n, P, this.isAudioContiguous, i, N || K || d === a.PlaylistLevelType.AUDIO ? F : void 0), K) {
              var te = T ? T.endPTS - T.startPTS : 0;
              c.inputTimeScale || (L.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), A = this.generateIS(n, c, g)), x = this.remuxVideo(c, F, H, te);
            }
          } else
            K && (x = this.remuxVideo(c, F, H, 0));
          x && (x.firstKeyFrame = z, x.independent = z !== -1);
        }
      }
      return this.ISGenerated && (p.samples.length && (w = this.remuxID3(p, g)), m.samples.length && (C = this.remuxText(m, g))), { audio: T, video: x, initSegment: A, independent: O, text: C, id3: w };
    }, u.generateIS = function(n, c, p) {
      var m, g, i, r = n.samples, d = c.samples, x = this.typeSupported, T = {}, A = !Object(D.isFiniteNumber)(this._initPTS), C = "audio/mp4";
      if (A && (m = g = 1 / 0), n.config && r.length && (n.timescale = n.samplerate, n.isAAC || (x.mpeg ? (C = "audio/mpeg", n.codec = "") : x.mp3 && (n.codec = "mp3")), T.audio = { id: "audio", container: C, codec: n.codec, initSegment: !n.isAAC && x.mpeg ? new Uint8Array(0) : S.default.initSegment([n]), metadata: { channelCount: n.channelCount } }, A && (i = n.inputTimeScale, m = g = r[0].pts - Math.round(i * p))), c.sps && c.pps && d.length && (c.timescale = c.inputTimeScale, T.video = { id: "main", container: "video/mp4", codec: c.codec, initSegment: S.default.initSegment([c]), metadata: { width: c.width, height: c.height } }, A)) {
        i = c.inputTimeScale;
        var w = this.getVideoStartPts(d), O = Math.round(i * p);
        g = Math.min(g, e(d[0].dts, w) - O), m = Math.min(m, w - O);
      }
      if (Object.keys(T).length)
        return this.ISGenerated = !0, A && (this._initPTS = m, this._initDTS = g), { tracks: T, initPTS: m, timescale: i };
    }, u.remuxVideo = function(n, c, p, m) {
      var g, i, r, d = n.inputTimeScale, x = n.samples, T = [], A = x.length, C = this._initPTS, w = this.nextAvcDts, O = 8, P = Number.POSITIVE_INFINITY, F = Number.NEGATIVE_INFINITY, B = 0, N = !1;
      p && w !== null || (w = c * d - (x[0].pts - e(x[0].dts, x[0].pts)));
      for (var M = 0; M < A; M++) {
        var G = x[M];
        G.pts = e(G.pts - C, w), G.dts = e(G.dts - C, w), G.dts > G.pts && (B = Math.max(Math.min(B, G.pts - G.dts), -18e3)), G.dts < x[M > 0 ? M - 1 : M].dts && (N = !0);
      }
      N && x.sort(function(Oe, ze) {
        var ai = Oe.dts - ze.dts, si = Oe.pts - ze.pts;
        return ai || si;
      }), i = x[0].dts, r = x[x.length - 1].dts;
      var K = Math.round((r - i) / (A - 1));
      if (B < 0) {
        if (B < -2 * K) {
          L.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(b.toMsFromMpegTsClock)(-K, !0) + " ms");
          for (var H = B, z = 0; z < A; z++)
            x[z].dts = H = Math.max(H, x[z].pts - K), x[z].pts = Math.max(H, x[z].pts);
        } else {
          L.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(b.toMsFromMpegTsClock)(B, !0) + " ms to overcome this issue");
          for (var q = 0; q < A; q++)
            x[q].dts = x[q].dts + B;
        }
        i = x[0].dts;
      }
      if (p) {
        var $ = i - w, ae = $ > K;
        if (ae || $ < -1) {
          ae ? L.logger.warn("AVC: " + Object(b.toMsFromMpegTsClock)($, !0) + " ms (" + $ + "dts) hole between fragments detected, filling it") : L.logger.warn("AVC: " + Object(b.toMsFromMpegTsClock)(-$, !0) + " ms (" + $ + "dts) overlapping between fragments detected"), i = w;
          var te = x[0].pts - $;
          x[0].dts = i, x[0].pts = te, L.logger.log("Video: First PTS/DTS adjusted: " + Object(b.toMsFromMpegTsClock)(te, !0) + "/" + Object(b.toMsFromMpegTsClock)(i, !0) + ", delta: " + Object(b.toMsFromMpegTsClock)($, !0) + " ms");
        }
      }
      _ && (i = Math.max(0, i));
      for (var oe = 0, re = 0, fe = 0; fe < A; fe++) {
        for (var ie = x[fe], se = ie.units, de = se.length, le = 0, ye = 0; ye < de; ye++)
          le += se[ye].data.length;
        re += le, oe += de, ie.length = le, ie.dts = Math.max(ie.dts, i), ie.pts = Math.max(ie.pts, ie.dts, 0), P = Math.min(ie.pts, P), F = Math.max(ie.pts, F);
      }
      r = x[A - 1].dts;
      var Te, xe = re + 4 * oe + 8;
      try {
        Te = new Uint8Array(xe);
      } catch {
        return void this.observer.emit(k.Events.ERROR, k.Events.ERROR, { type: R.ErrorTypes.MUX_ERROR, details: R.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: xe, reason: "fail allocating video mdat " + xe });
      }
      var De = new DataView(Te.buffer);
      De.setUint32(0, xe), Te.set(S.default.types.mdat, 4);
      for (var ge = 0; ge < A; ge++) {
        for (var ve = x[ge], Be = ve.units, Re = 0, X = 0, ue = Be.length; X < ue; X++) {
          var he = Be[X], Me = he.data, Qe = he.data.byteLength;
          De.setUint32(O, Qe), O += 4, Te.set(Me, O), O += Qe, Re += 4 + Qe;
        }
        if (ge < A - 1)
          g = x[ge + 1].dts - ve.dts;
        else {
          var qe = this.config, Ve = ve.dts - x[ge > 0 ? ge - 1 : ge].dts;
          if (qe.stretchShortVideoTrack && this.nextAudioPts !== null) {
            var Ze = Math.floor(qe.maxBufferHole * d), Ye = (m ? P + m * d : this.nextAudioPts) - ve.pts;
            Ye > Ze ? ((g = Ye - Ve) < 0 && (g = Ve), L.logger.log("[mp4-remuxer]: It is approximately " + Ye / 90 + " ms to the next segment; using duration " + g / 90 + " ms for the last video frame.")) : g = Ve;
          } else
            g = Ve;
        }
        var Ke = Math.round(ve.pts - ve.dts);
        T.push(new s(ve.key, g, Re, Ke));
      }
      if (T.length && h && h < 70) {
        var Ue = T[0].flags;
        Ue.dependsOn = 2, Ue.isNonSync = 0;
      }
      console.assert(g !== void 0, "mp4SampleDuration must be computed"), this.nextAvcDts = w = r + g, this.isVideoContiguous = !0;
      var He = { data1: S.default.moof(n.sequenceNumber++, i, v({}, n, { samples: T })), data2: Te, startPTS: P / d, endPTS: (F + g) / d, startDTS: i / d, endDTS: w / d, type: "video", hasAudio: !1, hasVideo: !0, nb: T.length, dropped: n.dropped };
      return n.samples = [], n.dropped = 0, console.assert(Te.length, "MDAT length must not be zero"), He;
    }, u.remuxAudio = function(n, c, p, m, g) {
      var i = n.inputTimeScale, r = i / (n.samplerate ? n.samplerate : i), d = n.isAAC ? 1024 : 1152, x = d * r, T = this._initPTS, A = !n.isAAC && this.typeSupported.mpeg, C = [], w = n.samples, O = A ? 0 : 8, P = this.nextAudioPts || -1, F = c * i;
      if (this.isAudioContiguous = p = p || w.length && P > 0 && (m && Math.abs(F - P) < 9e3 || Math.abs(e(w[0].pts - T, F) - P) < 20 * x), w.forEach(function(Me) {
        Me.pts = e(Me.pts - T, F);
      }), !p || P < 0) {
        if (!(w = w.filter(function(Me) {
          return Me.pts >= 0;
        })).length)
          return;
        P = g === 0 ? 0 : m ? Math.max(0, F) : w[0].pts;
      }
      if (n.isAAC)
        for (var B = g !== void 0, N = this.config.maxAudioFramesDrift, M = 0, G = P; M < w.length; M++) {
          var K = w[M], H = K.pts, z = H - G, q = Math.abs(1e3 * z / i);
          if (z <= -N * x && B)
            M === 0 && (L.logger.warn("Audio frame @ " + (H / i).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * z / i) + " ms."), this.nextAudioPts = P = G = H);
          else if (z >= N * x && q < 1e4 && B) {
            var $ = Math.round(z / x);
            (G = H - $ * x) < 0 && ($--, G += x), M === 0 && (this.nextAudioPts = P = G), L.logger.warn("[mp4-remuxer]: Injecting " + $ + " audio frame @ " + (G / i).toFixed(3) + "s due to " + Math.round(1e3 * z / i) + " ms gap.");
            for (var ae = 0; ae < $; ae++) {
              var te = Math.max(G, 0), oe = y.default.getSilentFrame(n.manifestCodec || n.codec, n.channelCount);
              oe || (L.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), oe = K.unit.subarray()), w.splice(M, 0, { unit: oe, pts: te }), G += x, M++;
            }
          }
          K.pts = G, G += x;
        }
      for (var re, fe = null, ie = null, se = 0, de = w.length; de--; )
        se += w[de].unit.byteLength;
      for (var le = 0, ye = w.length; le < ye; le++) {
        var Te = w[le], xe = Te.unit, De = Te.pts;
        if (ie !== null)
          C[le - 1].duration = Math.round((De - ie) / r);
        else {
          if (p && n.isAAC && (De = P), fe = De, !(se > 0))
            return;
          se += O;
          try {
            re = new Uint8Array(se);
          } catch {
            return void this.observer.emit(k.Events.ERROR, k.Events.ERROR, { type: R.ErrorTypes.MUX_ERROR, details: R.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: se, reason: "fail allocating audio mdat " + se });
          }
          A || (new DataView(re.buffer).setUint32(0, se), re.set(S.default.types.mdat, 4));
        }
        re.set(xe, O);
        var ge = xe.byteLength;
        O += ge, C.push(new s(!0, d, ge, 0)), ie = De;
      }
      var ve = C.length;
      if (ve) {
        var Be = C[C.length - 1];
        this.nextAudioPts = P = ie + r * Be.duration;
        var Re = A ? new Uint8Array(0) : S.default.moof(n.sequenceNumber++, fe / r, v({}, n, { samples: C }));
        n.samples = [];
        var X = fe / i, ue = P / i, he = { data1: Re, data2: re, startPTS: X, endPTS: ue, startDTS: X, endDTS: ue, type: "audio", hasAudio: !0, hasVideo: !1, nb: ve };
        return this.isAudioContiguous = !0, console.assert(re.length, "MDAT length must not be zero"), he;
      }
    }, u.remuxEmptyAudio = function(n, c, p, m) {
      var g = n.inputTimeScale, i = g / (n.samplerate ? n.samplerate : g), r = this.nextAudioPts, d = (r !== null ? r : m.startDTS * g) + this._initDTS, x = m.endDTS * g + this._initDTS, T = 1024 * i, A = Math.ceil((x - d) / T), C = y.default.getSilentFrame(n.manifestCodec || n.codec, n.channelCount);
      if (L.logger.warn("[mp4-remuxer]: remux empty Audio"), C) {
        for (var w = [], O = 0; O < A; O++) {
          var P = d + O * T;
          w.push({ unit: C, pts: P, dts: P });
        }
        return n.samples = w, this.remuxAudio(n, c, p, !1);
      }
      L.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
    }, u.remuxID3 = function(n, c) {
      var p = n.samples.length;
      if (p) {
        for (var m = n.inputTimeScale, g = this._initPTS, i = this._initDTS, r = 0; r < p; r++) {
          var d = n.samples[r];
          d.pts = e(d.pts - g, c * m) / m, d.dts = e(d.dts - i, c * m) / m;
        }
        var x = n.samples;
        return n.samples = [], { samples: x };
      }
    }, u.remuxText = function(n, c) {
      var p = n.samples.length;
      if (p) {
        for (var m = n.inputTimeScale, g = this._initPTS, i = 0; i < p; i++) {
          var r = n.samples[i];
          r.pts = e(r.pts - g, c * m) / m;
        }
        n.samples.sort(function(x, T) {
          return x.pts - T.pts;
        });
        var d = n.samples;
        return n.samples = [], { samples: d };
      }
    }, o;
  }();
  function e(o, u) {
    var n;
    if (u === null)
      return o;
    for (n = u < o ? -8589934592 : 8589934592; Math.abs(o - u) > 4294967296; )
      o += n;
    return o;
  }
  var s = function(o, u, n, c) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = u, this.size = n, this.cts = c, this.flags = new t(o);
  }, t = function(o) {
    this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = o ? 2 : 1, this.isNonSync = o ? 0 : 1;
  };
}, "./src/remux/passthrough-remuxer.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/mp4-tools.ts"), S = f("./src/loader/fragment.ts"), k = f("./src/utils/logger.ts"), R = function() {
    function b() {
      this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null;
    }
    var v = b.prototype;
    return v.destroy = function() {
    }, v.resetTimeStamp = function(h) {
      this.initPTS = h, this.lastEndDTS = null;
    }, v.resetNextTimestamp = function() {
      this.lastEndDTS = null;
    }, v.resetInitSegment = function(h, E, _) {
      this.audioCodec = E, this.videoCodec = _, this.generateInitSegment(h), this.emitInitSegment = !0;
    }, v.generateInitSegment = function(h) {
      var E = this.audioCodec, _ = this.videoCodec;
      if (!h || !h.byteLength)
        return this.initTracks = void 0, void (this.initData = void 0);
      var l = this.initData = Object(y.parseInitSegment)(h);
      E || (E = a(l.audio, S.ElementaryStreamTypes.AUDIO)), _ || (_ = a(l.video, S.ElementaryStreamTypes.VIDEO));
      var e = {};
      l.audio && l.video ? e.audiovideo = { container: "video/mp4", codec: E + "," + _, initSegment: h, id: "main" } : l.audio ? e.audio = { container: "audio/mp4", codec: E, initSegment: h, id: "audio" } : l.video ? e.video = { container: "video/mp4", codec: _, initSegment: h, id: "main" } : k.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = e;
    }, v.remux = function(h, E, _, l, e) {
      var s = this.initPTS, t = this.lastEndDTS, o = { audio: void 0, video: void 0, text: l, id3: _, initSegment: void 0 };
      Object(D.isFiniteNumber)(t) || (t = this.lastEndDTS = e || 0);
      var u = E.samples;
      if (!u || !u.length)
        return o;
      var n = { initPTS: void 0, timescale: 1 }, c = this.initData;
      if (c && c.length || (this.generateInitSegment(u), c = this.initData), !c || !c.length)
        return k.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), o;
      this.emitInitSegment && (n.tracks = this.initTracks, this.emitInitSegment = !1), Object(D.isFiniteNumber)(s) || (this.initPTS = n.initPTS = s = L(c, u, t));
      var p = Object(y.getDuration)(u, c), m = t, g = p + m;
      Object(y.offsetStartDTS)(c, u, s), p > 0 ? this.lastEndDTS = g : (k.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
      var i = !!c.audio, r = !!c.video, d = "";
      i && (d += "audio"), r && (d += "video");
      var x = { data1: u, startPTS: m, startDTS: m, endPTS: g, endDTS: g, type: d, hasAudio: i, hasVideo: r, nb: 1, dropped: 0 };
      return o.audio = x.type === "audio" ? x : void 0, o.video = x.type !== "audio" ? x : void 0, o.text = l, o.id3 = _, o.initSegment = n, o;
    }, b;
  }(), L = function(b, v, h) {
    return Object(y.getStartDTS)(b, v) - h;
  };
  function a(b, v) {
    var h = b == null ? void 0 : b.codec;
    return h && h.length > 4 ? h : h === "hvc1" ? "hvc1.1.c.L120.90" : h === "av01" ? "av01.0.04M.08" : h === "avc1" || v === S.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
  }
  I.default = R;
}, "./src/task-loop.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return D;
  });
  var D = function() {
    function y() {
      this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
    }
    var S = y.prototype;
    return S.destroy = function() {
      this.onHandlerDestroying(), this.onHandlerDestroyed();
    }, S.onHandlerDestroying = function() {
      this.clearNextTick(), this.clearInterval();
    }, S.onHandlerDestroyed = function() {
    }, S.hasInterval = function() {
      return !!this._tickInterval;
    }, S.hasNextTick = function() {
      return !!this._tickTimer;
    }, S.setInterval = function(k) {
      return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, k), !0);
    }, S.clearInterval = function() {
      return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0);
    }, S.clearNextTick = function() {
      return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0);
    }, S.tick = function() {
      this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
    }, S.tickImmediate = function() {
      this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
    }, S.doTick = function() {
    }, y;
  }();
}, "./src/types/level.ts": function(V, I, f) {
  function D(a, b) {
    for (var v = 0; v < b.length; v++) {
      var h = b[v];
      h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
    }
  }
  var y, S;
  function k(a, b) {
    var v = a.canSkipUntil, h = a.canSkipDateRanges, E = a.endSN;
    return v && (b !== void 0 ? b - E : 0) < v ? h ? y.v2 : y.Yes : y.No;
  }
  f.r(I), f.d(I, "HlsSkip", function() {
    return y;
  }), f.d(I, "getSkipValue", function() {
    return k;
  }), f.d(I, "HlsUrlParameters", function() {
    return R;
  }), f.d(I, "Level", function() {
    return L;
  }), (S = y || (y = {})).No = "", S.Yes = "YES", S.v2 = "v2";
  var R = function() {
    function a(b, v, h) {
      this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = b, this.part = v, this.skip = h;
    }
    return a.prototype.addDirectives = function(b) {
      var v = new self.URL(b);
      return this.msn !== void 0 && v.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && v.searchParams.set("_HLS_part", this.part.toString()), this.skip && v.searchParams.set("_HLS_skip", this.skip), v.toString();
    }, a;
  }(), L = function() {
    function a(h) {
      this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [h.url], this.attrs = h.attrs, this.bitrate = h.bitrate, h.details && (this.details = h.details), this.id = h.id || 0, this.name = h.name, this.width = h.width || 0, this.height = h.height || 0, this.audioCodec = h.audioCodec, this.videoCodec = h.videoCodec, this.unknownCodecs = h.unknownCodecs, this.codecSet = [h.videoCodec, h.audioCodec].filter(function(E) {
        return E;
      }).join(",").replace(/\.[^.,]+/g, "");
    }
    var b, v;
    return b = a, (v = [{ key: "maxBitrate", get: function() {
      return Math.max(this.realBitrate, this.bitrate);
    } }, { key: "uri", get: function() {
      return this.url[this._urlId] || "";
    } }, { key: "urlId", get: function() {
      return this._urlId;
    }, set: function(h) {
      var E = h % this.url.length;
      this._urlId !== E && (this.details = void 0, this._urlId = E);
    } }]) && D(b.prototype, v), a;
  }();
}, "./src/types/loader.ts": function(V, I, f) {
  var D, y, S, k;
  f.r(I), f.d(I, "PlaylistContextType", function() {
    return D;
  }), f.d(I, "PlaylistLevelType", function() {
    return S;
  }), (y = D || (D = {})).MANIFEST = "manifest", y.LEVEL = "level", y.AUDIO_TRACK = "audioTrack", y.SUBTITLE_TRACK = "subtitleTrack", (k = S || (S = {})).MAIN = "main", k.AUDIO = "audio", k.SUBTITLE = "subtitle";
}, "./src/types/transmuxer.ts": function(V, I, f) {
  f.r(I), f.d(I, "ChunkMetadata", function() {
    return D;
  });
  var D = function(y, S, k, R, L, a) {
    R === void 0 && (R = 0), L === void 0 && (L = -1), a === void 0 && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, this.buffering = { audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 } }, this.level = y, this.sn = S, this.id = k, this.size = R, this.part = L, this.partial = a;
  };
}, "./src/utils/attr-list.ts": function(V, I, f) {
  f.r(I), f.d(I, "AttrList", function() {
    return S;
  });
  var D = /^(\d+)x(\d+)$/, y = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, S = function() {
    function k(L) {
      for (var a in typeof L == "string" && (L = k.parseAttrList(L)), L)
        L.hasOwnProperty(a) && (this[a] = L[a]);
    }
    var R = k.prototype;
    return R.decimalInteger = function(L) {
      var a = parseInt(this[L], 10);
      return a > Number.MAX_SAFE_INTEGER ? 1 / 0 : a;
    }, R.hexadecimalInteger = function(L) {
      if (this[L]) {
        var a = (this[L] || "0x").slice(2);
        a = (1 & a.length ? "0" : "") + a;
        for (var b = new Uint8Array(a.length / 2), v = 0; v < a.length / 2; v++)
          b[v] = parseInt(a.slice(2 * v, 2 * v + 2), 16);
        return b;
      }
      return null;
    }, R.hexadecimalIntegerAsNumber = function(L) {
      var a = parseInt(this[L], 16);
      return a > Number.MAX_SAFE_INTEGER ? 1 / 0 : a;
    }, R.decimalFloatingPoint = function(L) {
      return parseFloat(this[L]);
    }, R.optionalFloat = function(L, a) {
      var b = this[L];
      return b ? parseFloat(b) : a;
    }, R.enumeratedString = function(L) {
      return this[L];
    }, R.bool = function(L) {
      return this[L] === "YES";
    }, R.decimalResolution = function(L) {
      var a = D.exec(this[L]);
      if (a !== null)
        return { width: parseInt(a[1], 10), height: parseInt(a[2], 10) };
    }, k.parseAttrList = function(L) {
      var a, b = {};
      for (y.lastIndex = 0; (a = y.exec(L)) !== null; ) {
        var v = a[2];
        v.indexOf('"') === 0 && v.lastIndexOf('"') === v.length - 1 && (v = v.slice(1, -1)), b[a[1]] = v;
      }
      return b;
    }, k;
  }();
}, "./src/utils/binary-search.ts": function(V, I, f) {
  f.r(I), I.default = { search: function(D, y) {
    for (var S = 0, k = D.length - 1, R = null, L = null; S <= k; ) {
      var a = y(L = D[R = (S + k) / 2 | 0]);
      if (a > 0)
        S = R + 1;
      else {
        if (!(a < 0))
          return L;
        k = R - 1;
      }
    }
    return null;
  } };
}, "./src/utils/buffer-helper.ts": function(V, I, f) {
  f.r(I), f.d(I, "BufferHelper", function() {
    return S;
  });
  var D = f("./src/utils/logger.ts"), y = { length: 0, start: function() {
    return 0;
  }, end: function() {
    return 0;
  } }, S = function() {
    function k() {
    }
    return k.isBuffered = function(R, L) {
      try {
        if (R) {
          for (var a = k.getBuffered(R), b = 0; b < a.length; b++)
            if (L >= a.start(b) && L <= a.end(b))
              return !0;
        }
      } catch {
      }
      return !1;
    }, k.bufferInfo = function(R, L, a) {
      try {
        if (R) {
          var b, v = k.getBuffered(R), h = [];
          for (b = 0; b < v.length; b++)
            h.push({ start: v.start(b), end: v.end(b) });
          return this.bufferedInfo(h, L, a);
        }
      } catch {
      }
      return { len: 0, start: L, end: L, nextStart: void 0 };
    }, k.bufferedInfo = function(R, L, a) {
      L = Math.max(0, L), R.sort(function(n, c) {
        var p = n.start - c.start;
        return p || c.end - n.end;
      });
      var b = [];
      if (a)
        for (var v = 0; v < R.length; v++) {
          var h = b.length;
          if (h) {
            var E = b[h - 1].end;
            R[v].start - E < a ? R[v].end > E && (b[h - 1].end = R[v].end) : b.push(R[v]);
          } else
            b.push(R[v]);
        }
      else
        b = R;
      for (var _, l = 0, e = L, s = L, t = 0; t < b.length; t++) {
        var o = b[t].start, u = b[t].end;
        if (L + a >= o && L < u)
          e = o, l = (s = u) - L;
        else if (L + a < o) {
          _ = o;
          break;
        }
      }
      return { len: l, start: e || 0, end: s || 0, nextStart: _ };
    }, k.getBuffered = function(R) {
      try {
        return R.buffered;
      } catch (L) {
        return D.logger.log("failed to get media.buffered", L), y;
      }
    }, k;
  }();
}, "./src/utils/cea-608-parser.ts": function(V, I, f) {
  f.r(I), f.d(I, "Row", function() {
    return o;
  }), f.d(I, "CaptionScreen", function() {
    return u;
  });
  var D, y, S = f("./src/utils/logger.ts"), k = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, R = function(g) {
    var i = g;
    return k.hasOwnProperty(g) && (i = k[g]), String.fromCharCode(i);
  }, L = 15, a = 100, b = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, v = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, h = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, E = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, _ = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
  (y = D || (D = {}))[y.ERROR = 0] = "ERROR", y[y.TEXT = 1] = "TEXT", y[y.WARNING = 2] = "WARNING", y[y.INFO = 2] = "INFO", y[y.DEBUG = 3] = "DEBUG", y[y.DATA = 3] = "DATA";
  var l = function() {
    function g() {
      this.time = null, this.verboseLevel = D.ERROR;
    }
    return g.prototype.log = function(i, r) {
      this.verboseLevel >= i && S.logger.log(this.time + " [" + i + "] " + r);
    }, g;
  }(), e = function(g) {
    for (var i = [], r = 0; r < g.length; r++)
      i.push(g[r].toString(16));
    return i;
  }, s = function() {
    function g(r, d, x, T, A) {
      this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = r || "white", this.underline = d || !1, this.italics = x || !1, this.background = T || "black", this.flash = A || !1;
    }
    var i = g.prototype;
    return i.reset = function() {
      this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
    }, i.setStyles = function(r) {
      for (var d = ["foreground", "underline", "italics", "background", "flash"], x = 0; x < d.length; x++) {
        var T = d[x];
        r.hasOwnProperty(T) && (this[T] = r[T]);
      }
    }, i.isDefault = function() {
      return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
    }, i.equals = function(r) {
      return this.foreground === r.foreground && this.underline === r.underline && this.italics === r.italics && this.background === r.background && this.flash === r.flash;
    }, i.copy = function(r) {
      this.foreground = r.foreground, this.underline = r.underline, this.italics = r.italics, this.background = r.background, this.flash = r.flash;
    }, i.toString = function() {
      return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
    }, g;
  }(), t = function() {
    function g(r, d, x, T, A, C) {
      this.uchar = void 0, this.penState = void 0, this.uchar = r || " ", this.penState = new s(d, x, T, A, C);
    }
    var i = g.prototype;
    return i.reset = function() {
      this.uchar = " ", this.penState.reset();
    }, i.setChar = function(r, d) {
      this.uchar = r, this.penState.copy(d);
    }, i.setPenState = function(r) {
      this.penState.copy(r);
    }, i.equals = function(r) {
      return this.uchar === r.uchar && this.penState.equals(r.penState);
    }, i.copy = function(r) {
      this.uchar = r.uchar, this.penState.copy(r.penState);
    }, i.isEmpty = function() {
      return this.uchar === " " && this.penState.isDefault();
    }, g;
  }(), o = function() {
    function g(r) {
      this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
      for (var d = 0; d < a; d++)
        this.chars.push(new t());
      this.logger = r, this.pos = 0, this.currPenState = new s();
    }
    var i = g.prototype;
    return i.equals = function(r) {
      for (var d = !0, x = 0; x < a; x++)
        if (!this.chars[x].equals(r.chars[x])) {
          d = !1;
          break;
        }
      return d;
    }, i.copy = function(r) {
      for (var d = 0; d < a; d++)
        this.chars[d].copy(r.chars[d]);
    }, i.isEmpty = function() {
      for (var r = !0, d = 0; d < a; d++)
        if (!this.chars[d].isEmpty()) {
          r = !1;
          break;
        }
      return r;
    }, i.setCursor = function(r) {
      this.pos !== r && (this.pos = r), this.pos < 0 ? (this.logger.log(D.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > a && (this.logger.log(D.DEBUG, "Too large cursor position " + this.pos), this.pos = a);
    }, i.moveCursor = function(r) {
      var d = this.pos + r;
      if (r > 1)
        for (var x = this.pos + 1; x < d + 1; x++)
          this.chars[x].setPenState(this.currPenState);
      this.setCursor(d);
    }, i.backSpace = function() {
      this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
    }, i.insertChar = function(r) {
      r >= 144 && this.backSpace();
      var d = R(r);
      this.pos >= a ? this.logger.log(D.ERROR, "Cannot insert " + r.toString(16) + " (" + d + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(d, this.currPenState), this.moveCursor(1));
    }, i.clearFromPos = function(r) {
      var d;
      for (d = r; d < a; d++)
        this.chars[d].reset();
    }, i.clear = function() {
      this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
    }, i.clearToEndOfRow = function() {
      this.clearFromPos(this.pos);
    }, i.getTextString = function() {
      for (var r = [], d = !0, x = 0; x < a; x++) {
        var T = this.chars[x].uchar;
        T !== " " && (d = !1), r.push(T);
      }
      return d ? "" : r.join("");
    }, i.setPenStyles = function(r) {
      this.currPenState.setStyles(r), this.chars[this.pos].setPenState(this.currPenState);
    }, g;
  }(), u = function() {
    function g(r) {
      this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
      for (var d = 0; d < L; d++)
        this.rows.push(new o(r));
      this.logger = r, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
    }
    var i = g.prototype;
    return i.reset = function() {
      for (var r = 0; r < L; r++)
        this.rows[r].clear();
      this.currRow = 14;
    }, i.equals = function(r) {
      for (var d = !0, x = 0; x < L; x++)
        if (!this.rows[x].equals(r.rows[x])) {
          d = !1;
          break;
        }
      return d;
    }, i.copy = function(r) {
      for (var d = 0; d < L; d++)
        this.rows[d].copy(r.rows[d]);
    }, i.isEmpty = function() {
      for (var r = !0, d = 0; d < L; d++)
        if (!this.rows[d].isEmpty()) {
          r = !1;
          break;
        }
      return r;
    }, i.backSpace = function() {
      this.rows[this.currRow].backSpace();
    }, i.clearToEndOfRow = function() {
      this.rows[this.currRow].clearToEndOfRow();
    }, i.insertChar = function(r) {
      this.rows[this.currRow].insertChar(r);
    }, i.setPen = function(r) {
      this.rows[this.currRow].setPenStyles(r);
    }, i.moveCursor = function(r) {
      this.rows[this.currRow].moveCursor(r);
    }, i.setCursor = function(r) {
      this.logger.log(D.INFO, "setCursor: " + r), this.rows[this.currRow].setCursor(r);
    }, i.setPAC = function(r) {
      this.logger.log(D.INFO, "pacData = " + JSON.stringify(r));
      var d = r.row - 1;
      if (this.nrRollUpRows && d < this.nrRollUpRows - 1 && (d = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== d) {
        for (var x = 0; x < L; x++)
          this.rows[x].clear();
        var T = this.currRow + 1 - this.nrRollUpRows, A = this.lastOutputScreen;
        if (A) {
          var C = A.rows[T].cueStartTime, w = this.logger.time;
          if (C && w !== null && C < w)
            for (var O = 0; O < this.nrRollUpRows; O++)
              this.rows[d - this.nrRollUpRows + O + 1].copy(A.rows[T + O]);
        }
      }
      this.currRow = d;
      var P = this.rows[this.currRow];
      if (r.indent !== null) {
        var F = r.indent, B = Math.max(F - 1, 0);
        P.setCursor(r.indent), r.color = P.chars[B].penState.foreground;
      }
      var N = { foreground: r.color, underline: r.underline, italics: r.italics, background: "black", flash: !1 };
      this.setPen(N);
    }, i.setBkgData = function(r) {
      this.logger.log(D.INFO, "bkgData = " + JSON.stringify(r)), this.backSpace(), this.setPen(r), this.insertChar(32);
    }, i.setRollUpRows = function(r) {
      this.nrRollUpRows = r;
    }, i.rollUp = function() {
      if (this.nrRollUpRows !== null) {
        this.logger.log(D.TEXT, this.getDisplayText());
        var r = this.currRow + 1 - this.nrRollUpRows, d = this.rows.splice(r, 1)[0];
        d.clear(), this.rows.splice(this.currRow, 0, d), this.logger.log(D.INFO, "Rolling up");
      } else
        this.logger.log(D.DEBUG, "roll_up but nrRollUpRows not set yet");
    }, i.getDisplayText = function(r) {
      r = r || !1;
      for (var d = [], x = "", T = -1, A = 0; A < L; A++) {
        var C = this.rows[A].getTextString();
        C && (T = A + 1, r ? d.push("Row " + T + ": '" + C + "'") : d.push(C.trim()));
      }
      return d.length > 0 && (x = r ? "[" + d.join(" | ") + "]" : d.join(`
`)), x;
    }, i.getTextAndFormat = function() {
      return this.rows;
    }, g;
  }(), n = function() {
    function g(r, d, x) {
      this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = r, this.outputFilter = d, this.mode = null, this.verbose = 0, this.displayedMemory = new u(x), this.nonDisplayedMemory = new u(x), this.lastOutputScreen = new u(x), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = x;
    }
    var i = g.prototype;
    return i.reset = function() {
      this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
    }, i.getHandler = function() {
      return this.outputFilter;
    }, i.setHandler = function(r) {
      this.outputFilter = r;
    }, i.setPAC = function(r) {
      this.writeScreen.setPAC(r);
    }, i.setBkgData = function(r) {
      this.writeScreen.setBkgData(r);
    }, i.setMode = function(r) {
      r !== this.mode && (this.mode = r, this.logger.log(D.INFO, "MODE=" + r), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = r);
    }, i.insertChars = function(r) {
      for (var d = 0; d < r.length; d++)
        this.writeScreen.insertChar(r[d]);
      var x = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
      this.logger.log(D.INFO, x + ": " + this.writeScreen.getDisplayText(!0)), this.mode !== "MODE_PAINT-ON" && this.mode !== "MODE_ROLL-UP" || (this.logger.log(D.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
    }, i.ccRCL = function() {
      this.logger.log(D.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
    }, i.ccBS = function() {
      this.logger.log(D.INFO, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
    }, i.ccAOF = function() {
    }, i.ccAON = function() {
    }, i.ccDER = function() {
      this.logger.log(D.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
    }, i.ccRU = function(r) {
      this.logger.log(D.INFO, "RU(" + r + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(r);
    }, i.ccFON = function() {
      this.logger.log(D.INFO, "FON - Flash On"), this.writeScreen.setPen({ flash: !0 });
    }, i.ccRDC = function() {
      this.logger.log(D.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
    }, i.ccTR = function() {
      this.logger.log(D.INFO, "TR"), this.setMode("MODE_TEXT");
    }, i.ccRTD = function() {
      this.logger.log(D.INFO, "RTD"), this.setMode("MODE_TEXT");
    }, i.ccEDM = function() {
      this.logger.log(D.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
    }, i.ccCR = function() {
      this.logger.log(D.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
    }, i.ccENM = function() {
      this.logger.log(D.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
    }, i.ccEOC = function() {
      if (this.logger.log(D.INFO, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
        var r = this.displayedMemory;
        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = r, this.writeScreen = this.nonDisplayedMemory, this.logger.log(D.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
      }
      this.outputDataUpdate(!0);
    }, i.ccTO = function(r) {
      this.logger.log(D.INFO, "TO(" + r + ") - Tab Offset"), this.writeScreen.moveCursor(r);
    }, i.ccMIDROW = function(r) {
      var d = { flash: !1 };
      if (d.underline = r % 2 == 1, d.italics = r >= 46, d.italics)
        d.foreground = "white";
      else {
        var x = Math.floor(r / 2) - 16;
        d.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][x];
      }
      this.logger.log(D.INFO, "MIDROW: " + JSON.stringify(d)), this.writeScreen.setPen(d);
    }, i.outputDataUpdate = function(r) {
      r === void 0 && (r = !1);
      var d = this.logger.time;
      d !== null && this.outputFilter && (this.cueStartTime !== null || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, d, this.lastOutputScreen), r && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : d) : this.cueStartTime = d, this.lastOutputScreen.copy(this.displayedMemory));
    }, i.cueSplitAtTime = function(r) {
      this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, r, this.displayedMemory), this.cueStartTime = r));
    }, g;
  }(), c = function() {
    function g(r, d, x) {
      this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
      var T = new l();
      this.channels = [null, new n(r, d, T), new n(r + 1, x, T)], this.cmdHistory = { a: null, b: null }, this.logger = T;
    }
    var i = g.prototype;
    return i.getHandler = function(r) {
      return this.channels[r].getHandler();
    }, i.setHandler = function(r, d) {
      this.channels[r].setHandler(d);
    }, i.addData = function(r, d) {
      var x, T, A, C = !1;
      this.logger.time = r;
      for (var w = 0; w < d.length; w += 2)
        if (T = 127 & d[w], A = 127 & d[w + 1], T !== 0 || A !== 0) {
          if (this.logger.log(D.DATA, "[" + e([d[w], d[w + 1]]) + "] -> (" + e([T, A]) + ")"), (x = this.parseCmd(T, A)) || (x = this.parseMidrow(T, A)), x || (x = this.parsePAC(T, A)), x || (x = this.parseBackgroundAttributes(T, A)), !x && (C = this.parseChars(T, A))) {
            var O = this.currentChannel;
            O && O > 0 ? this.channels[O].insertChars(C) : this.logger.log(D.WARNING, "No channel found yet. TEXT-MODE?");
          }
          x || C || this.logger.log(D.WARNING, "Couldn't parse cleaned data " + e([T, A]) + " orig: " + e([d[w], d[w + 1]]));
        }
    }, i.parseCmd = function(r, d) {
      var x = this.cmdHistory;
      if (!((r === 20 || r === 28 || r === 21 || r === 29) && d >= 32 && d <= 47 || (r === 23 || r === 31) && d >= 33 && d <= 35))
        return !1;
      if (m(r, d, x))
        return p(null, null, x), this.logger.log(D.DEBUG, "Repeated command (" + e([r, d]) + ") is dropped"), !0;
      var T = r === 20 || r === 21 || r === 23 ? 1 : 2, A = this.channels[T];
      return r === 20 || r === 21 || r === 28 || r === 29 ? d === 32 ? A.ccRCL() : d === 33 ? A.ccBS() : d === 34 ? A.ccAOF() : d === 35 ? A.ccAON() : d === 36 ? A.ccDER() : d === 37 ? A.ccRU(2) : d === 38 ? A.ccRU(3) : d === 39 ? A.ccRU(4) : d === 40 ? A.ccFON() : d === 41 ? A.ccRDC() : d === 42 ? A.ccTR() : d === 43 ? A.ccRTD() : d === 44 ? A.ccEDM() : d === 45 ? A.ccCR() : d === 46 ? A.ccENM() : d === 47 && A.ccEOC() : A.ccTO(d - 32), p(r, d, x), this.currentChannel = T, !0;
    }, i.parseMidrow = function(r, d) {
      var x = 0;
      if ((r === 17 || r === 25) && d >= 32 && d <= 47) {
        if ((x = r === 17 ? 1 : 2) !== this.currentChannel)
          return this.logger.log(D.ERROR, "Mismatch channel in midrow parsing"), !1;
        var T = this.channels[x];
        return !!T && (T.ccMIDROW(d), this.logger.log(D.DEBUG, "MIDROW (" + e([r, d]) + ")"), !0);
      }
      return !1;
    }, i.parsePAC = function(r, d) {
      var x, T = this.cmdHistory;
      if (!((r >= 17 && r <= 23 || r >= 25 && r <= 31) && d >= 64 && d <= 127 || (r === 16 || r === 24) && d >= 64 && d <= 95))
        return !1;
      if (m(r, d, T))
        return p(null, null, T), !0;
      var A = r <= 23 ? 1 : 2;
      x = d >= 64 && d <= 95 ? A === 1 ? b[r] : h[r] : A === 1 ? v[r] : E[r];
      var C = this.channels[A];
      return !!C && (C.setPAC(this.interpretPAC(x, d)), p(r, d, T), this.currentChannel = A, !0);
    }, i.interpretPAC = function(r, d) {
      var x, T = { color: null, italics: !1, indent: null, underline: !1, row: r };
      return x = d > 95 ? d - 96 : d - 64, T.underline = (1 & x) == 1, x <= 13 ? T.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(x / 2)] : x <= 15 ? (T.italics = !0, T.color = "white") : T.indent = 4 * Math.floor((x - 16) / 2), T;
    }, i.parseChars = function(r, d) {
      var x, T, A = null, C = null;
      if (r >= 25 ? (x = 2, C = r - 8) : (x = 1, C = r), C >= 17 && C <= 19 ? (T = C === 17 ? d + 80 : C === 18 ? d + 112 : d + 144, this.logger.log(D.INFO, "Special char '" + R(T) + "' in channel " + x), A = [T]) : r >= 32 && r <= 127 && (A = d === 0 ? [r] : [r, d]), A) {
        var w = e(A);
        this.logger.log(D.DEBUG, "Char codes =  " + w.join(",")), p(r, d, this.cmdHistory);
      }
      return A;
    }, i.parseBackgroundAttributes = function(r, d) {
      var x;
      if (!((r === 16 || r === 24) && d >= 32 && d <= 47 || (r === 23 || r === 31) && d >= 45 && d <= 47))
        return !1;
      var T = {};
      r === 16 || r === 24 ? (x = Math.floor((d - 32) / 2), T.background = _[x], d % 2 == 1 && (T.background = T.background + "_semi")) : d === 45 ? T.background = "transparent" : (T.foreground = "black", d === 47 && (T.underline = !0));
      var A = r <= 23 ? 1 : 2;
      return this.channels[A].setBkgData(T), p(r, d, this.cmdHistory), !0;
    }, i.reset = function() {
      for (var r = 0; r < Object.keys(this.channels).length; r++) {
        var d = this.channels[r];
        d && d.reset();
      }
      this.cmdHistory = { a: null, b: null };
    }, i.cueSplitAtTime = function(r) {
      for (var d = 0; d < this.channels.length; d++) {
        var x = this.channels[d];
        x && x.cueSplitAtTime(r);
      }
    }, g;
  }();
  function p(g, i, r) {
    r.a = g, r.b = i;
  }
  function m(g, i, r) {
    return r.a === g && r.b === i;
  }
  I.default = c;
}, "./src/utils/codecs.ts": function(V, I, f) {
  f.r(I), f.d(I, "isCodecType", function() {
    return y;
  }), f.d(I, "isCodecSupportedInMp4", function() {
    return S;
  });
  var D = { audio: { a3ds: !0, "ac-3": !0, "ac-4": !0, alac: !0, alaw: !0, dra1: !0, "dts+": !0, "dts-": !0, dtsc: !0, dtse: !0, dtsh: !0, "ec-3": !0, enca: !0, g719: !0, g726: !0, m4ae: !0, mha1: !0, mha2: !0, mhm1: !0, mhm2: !0, mlpa: !0, mp4a: !0, "raw ": !0, Opus: !0, samr: !0, sawb: !0, sawp: !0, sevc: !0, sqcp: !0, ssmv: !0, twos: !0, ulaw: !0 }, video: { avc1: !0, avc2: !0, avc3: !0, avc4: !0, avcp: !0, av01: !0, drac: !0, dvav: !0, dvhe: !0, encv: !0, hev1: !0, hvc1: !0, mjp2: !0, mp4v: !0, mvc1: !0, mvc2: !0, mvc3: !0, mvc4: !0, resv: !0, rv60: !0, s263: !0, svc1: !0, svc2: !0, "vc-1": !0, vp08: !0, vp09: !0 }, text: { stpp: !0, wvtt: !0 } };
  function y(k, R) {
    var L = D[R];
    return !!L && L[k.slice(0, 4)] === !0;
  }
  function S(k, R) {
    return MediaSource.isTypeSupported((R || "video") + '/mp4;codecs="' + k + '"');
  }
}, "./src/utils/cues.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/utils/vttparser.ts"), y = f("./src/utils/webvtt-parser.ts"), S = f("./src/utils/texttrack-utils.ts"), k = /\s/, R = { newCue: function(L, a, b, v) {
    for (var h, E, _, l, e, s = [], t = self.VTTCue || self.TextTrackCue, o = 0; o < v.rows.length; o++)
      if (_ = !0, l = 0, e = "", !(h = v.rows[o]).isEmpty()) {
        for (var u = 0; u < h.chars.length; u++)
          k.test(h.chars[u].uchar) && _ ? l++ : (e += h.chars[u].uchar, _ = !1);
        h.cueStartTime = a, a === b && (b += 1e-4), l >= 16 ? l-- : l++;
        var n = Object(D.fixLineBreaks)(e.trim()), c = Object(y.generateCueId)(a, b, n);
        L && L.cues && L.cues.getCueById(c) || ((E = new t(a, b, n)).id = c, E.line = o + 1, E.align = "left", E.position = 10 + Math.min(80, 10 * Math.floor(8 * l / 32)), s.push(E));
      }
    return L && s.length && (s.sort(function(p, m) {
      return p.line === "auto" || m.line === "auto" ? 0 : p.line > 8 && m.line > 8 ? m.line - p.line : p.line - m.line;
    }), s.forEach(function(p) {
      return Object(S.addCueToTrack)(L, p);
    })), s;
  } };
  I.default = R;
}, "./src/utils/discontinuities.ts": function(V, I, f) {
  f.r(I), f.d(I, "findFirstFragWithCC", function() {
    return k;
  }), f.d(I, "shouldAlignOnDiscontinuities", function() {
    return R;
  }), f.d(I, "findDiscontinuousReferenceFrag", function() {
    return L;
  }), f.d(I, "adjustSlidingStart", function() {
    return b;
  }), f.d(I, "alignStream", function() {
    return v;
  }), f.d(I, "alignPDT", function() {
    return h;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/logger.ts"), S = f("./src/controller/level-helper.ts");
  function k(E, _) {
    for (var l = null, e = 0, s = E.length; e < s; e++) {
      var t = E[e];
      if (t && t.cc === _) {
        l = t;
        break;
      }
    }
    return l;
  }
  function R(E, _, l) {
    return !(!_.details || !(l.endCC > l.startCC || E && E.cc < l.startCC));
  }
  function L(E, _) {
    var l = E.fragments, e = _.fragments;
    if (e.length && l.length) {
      var s = k(l, e[0].cc);
      if (s && (!s || s.startPTS))
        return s;
      y.logger.log("No frag in previous level to align on");
    } else
      y.logger.log("No fragments to align");
  }
  function a(E, _) {
    if (E) {
      var l = E.start + _;
      E.start = E.startPTS = l, E.endPTS = l + E.duration;
    }
  }
  function b(E, _) {
    for (var l = _.fragments, e = 0, s = l.length; e < s; e++)
      a(l[e], E);
    _.fragmentHint && a(_.fragmentHint, E), _.alignedSliding = !0;
  }
  function v(E, _, l) {
    _ && (function(e, s, t) {
      if (R(e, t, s)) {
        var o = L(t.details, s);
        o && Object(D.isFiniteNumber)(o.start) && (y.logger.log("Adjusting PTS using last level due to CC increase within current level " + s.url), b(o.start, s));
      }
    }(E, l, _), !l.alignedSliding && _.details && h(l, _.details), l.alignedSliding || !_.details || l.skippedSegments || Object(S.adjustSliding)(_.details, l));
  }
  function h(E, _) {
    if (_.fragments.length && E.hasProgramDateTime && _.hasProgramDateTime) {
      var l = _.fragments[0].programDateTime, e = E.fragments[0].programDateTime, s = (e - l) / 1e3 + _.fragments[0].start;
      s && Object(D.isFiniteNumber)(s) && (y.logger.log("Adjusting PTS using programDateTime delta " + (e - l) + "ms, sliding:" + s.toFixed(3) + " " + E.url + " "), b(s, E));
    }
  }
}, "./src/utils/ewma-bandwidth-estimator.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/utils/ewma.ts"), y = function() {
    function S(R, L, a) {
      this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = a, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new D.default(R), this.fast_ = new D.default(L);
    }
    var k = S.prototype;
    return k.update = function(R, L) {
      var a = this.slow_, b = this.fast_;
      this.slow_.halfLife !== R && (this.slow_ = new D.default(R, a.getEstimate(), a.getTotalWeight())), this.fast_.halfLife !== L && (this.fast_ = new D.default(L, b.getEstimate(), b.getTotalWeight()));
    }, k.sample = function(R, L) {
      var a = (R = Math.max(R, this.minDelayMs_)) / 1e3, b = 8 * L / a;
      this.fast_.sample(a, b), this.slow_.sample(a, b);
    }, k.canEstimate = function() {
      var R = this.fast_;
      return R && R.getTotalWeight() >= this.minWeight_;
    }, k.getEstimate = function() {
      return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
    }, k.destroy = function() {
    }, S;
  }();
  I.default = y;
}, "./src/utils/ewma.ts": function(V, I, f) {
  f.r(I);
  var D = function() {
    function y(k, R, L) {
      R === void 0 && (R = 0), L === void 0 && (L = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = k, this.alpha_ = k ? Math.exp(Math.log(0.5) / k) : 0, this.estimate_ = R, this.totalWeight_ = L;
    }
    var S = y.prototype;
    return S.sample = function(k, R) {
      var L = Math.pow(this.alpha_, k);
      this.estimate_ = R * (1 - L) + L * this.estimate_, this.totalWeight_ += k;
    }, S.getTotalWeight = function() {
      return this.totalWeight_;
    }, S.getEstimate = function() {
      if (this.alpha_) {
        var k = 1 - Math.pow(this.alpha_, this.totalWeight_);
        if (k)
          return this.estimate_ / k;
      }
      return this.estimate_;
    }, y;
  }();
  I.default = D;
}, "./src/utils/fetch-loader.ts": function(V, I, f) {
  f.r(I), f.d(I, "fetchSupported", function() {
    return v;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/loader/load-stats.ts"), S = f("./src/demux/chunk-cache.ts");
  function k(l) {
    var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return (k = function(s) {
      if (s === null || (t = s, Function.toString.call(t).indexOf("[native code]") === -1))
        return s;
      var t;
      if (typeof s != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (e !== void 0) {
        if (e.has(s))
          return e.get(s);
        e.set(s, o);
      }
      function o() {
        return R(s, arguments, b(this).constructor);
      }
      return o.prototype = Object.create(s.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), a(o, s);
    })(l);
  }
  function R(l, e, s) {
    return (R = L() ? Reflect.construct : function(t, o, u) {
      var n = [null];
      n.push.apply(n, o);
      var c = new (Function.bind.apply(t, n))();
      return u && a(c, u.prototype), c;
    }).apply(null, arguments);
  }
  function L() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function a(l, e) {
    return (a = Object.setPrototypeOf || function(s, t) {
      return s.__proto__ = t, s;
    })(l, e);
  }
  function b(l) {
    return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(l);
  }
  function v() {
    if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
      try {
        return new self.ReadableStream({}), !0;
      } catch {
      }
    return !1;
  }
  var h = function() {
    function l(s) {
      this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = s.fetchSetup || E, this.controller = new self.AbortController(), this.stats = new y.LoadStats();
    }
    var e = l.prototype;
    return e.destroy = function() {
      this.loader = this.callbacks = null, this.abortInternal();
    }, e.abortInternal = function() {
      var s = this.response;
      s && s.ok || (this.stats.aborted = !0, this.controller.abort());
    }, e.abort = function() {
      var s;
      this.abortInternal(), (s = this.callbacks) !== null && s !== void 0 && s.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
    }, e.load = function(s, t, o) {
      var u = this, n = this.stats;
      if (n.loading.start)
        throw new Error("Loader can only be used once.");
      n.loading.start = self.performance.now();
      var c = function(i, r) {
        var d = { method: "GET", mode: "cors", credentials: "same-origin", signal: r };
        return i.rangeEnd && (d.headers = new self.Headers({ Range: "bytes=" + i.rangeStart + "-" + String(i.rangeEnd - 1) })), d;
      }(s, this.controller.signal), p = o.onProgress, m = s.responseType === "arraybuffer", g = m ? "byteLength" : "length";
      this.context = s, this.config = t, this.callbacks = o, this.request = this.fetchSetup(s, c), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
        u.abortInternal(), o.onTimeout(n, s, u.response);
      }, t.timeout), self.fetch(this.request).then(function(i) {
        if (u.response = u.loader = i, !i.ok) {
          var r = i.status, d = i.statusText;
          throw new _(d || "fetch, bad network response", r, i);
        }
        return n.loading.first = Math.max(self.performance.now(), n.loading.start), n.total = parseInt(i.headers.get("Content-Length") || "0"), p && Object(D.isFiniteNumber)(t.highWaterMark) ? u.loadProgressively(i, n, s, t.highWaterMark, p) : m ? i.arrayBuffer() : i.text();
      }).then(function(i) {
        var r = u.response;
        self.clearTimeout(u.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first), n.loaded = n.total = i[g];
        var d = { url: r.url, data: i };
        p && !Object(D.isFiniteNumber)(t.highWaterMark) && p(n, s, i, r), o.onSuccess(d, n, s, r);
      }).catch(function(i) {
        if (self.clearTimeout(u.requestTimeout), !n.aborted) {
          var r = i.code || 0;
          o.onError({ code: r, text: i.message }, s, i.details);
        }
      });
    }, e.getCacheAge = function() {
      var s = null;
      if (this.response) {
        var t = this.response.headers.get("age");
        s = t ? parseFloat(t) : null;
      }
      return s;
    }, e.loadProgressively = function(s, t, o, u, n) {
      u === void 0 && (u = 0);
      var c = new S.default(), p = s.body.getReader();
      return function m() {
        return p.read().then(function(g) {
          if (g.done)
            return c.dataLength && n(t, o, c.flush(), s), Promise.resolve(new ArrayBuffer(0));
          var i = g.value, r = i.length;
          return t.loaded += r, r < u || c.dataLength ? (c.push(i), c.dataLength >= u && n(t, o, c.flush(), s)) : n(t, o, i, s), m();
        }).catch(function() {
          return Promise.reject();
        });
      }();
    }, l;
  }();
  function E(l, e) {
    return new self.Request(l.url, e);
  }
  var _ = function(l) {
    var e, s;
    function t(o, u, n) {
      var c;
      return (c = l.call(this, o) || this).code = void 0, c.details = void 0, c.code = u, c.details = n, c;
    }
    return s = l, (e = t).prototype = Object.create(s.prototype), e.prototype.constructor = e, a(e, s), t;
  }(k(Error));
  I.default = h;
}, "./src/utils/imsc1-ttml-parser.ts": function(V, I, f) {
  f.r(I), f.d(I, "IMSC1_CODEC", function() {
    return b;
  }), f.d(I, "parseIMSC1", function() {
    return _;
  });
  var D = f("./src/utils/mp4-tools.ts"), y = f("./src/utils/vttparser.ts"), S = f("./src/utils/vttcue.ts"), k = f("./src/demux/id3.ts"), R = f("./src/utils/timescale-conversion.ts"), L = f("./src/utils/webvtt-parser.ts");
  function a() {
    return (a = Object.assign || function(n) {
      for (var c = 1; c < arguments.length; c++) {
        var p = arguments[c];
        for (var m in p)
          Object.prototype.hasOwnProperty.call(p, m) && (n[m] = p[m]);
      }
      return n;
    }).apply(this, arguments);
  }
  var b = "stpp.ttml.im1t", v = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, h = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, E = { left: "start", center: "center", right: "end", start: "start", end: "end" };
  function _(n, c, p, m, g) {
    var i = Object(D.findBox)(new Uint8Array(n), ["mdat"]);
    if (i.length !== 0) {
      var r = i[0], d = Object(k.utf8ArrayToStr)(new Uint8Array(n, r.start, r.end - r.start)), x = Object(R.toTimescaleFromScale)(c, 1, p);
      try {
        m(function(T, A) {
          var C = new DOMParser().parseFromString(T, "text/xml").getElementsByTagName("tt")[0];
          if (!C)
            throw new Error("Invalid ttml");
          var w = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, O = Object.keys(w).reduce(function(M, G) {
            return M[G] = C.getAttribute("ttp:" + G) || w[G], M;
          }, {}), P = C.getAttribute("xml:space") !== "preserve", F = e(l(C, "styling", "style")), B = e(l(C, "layout", "region")), N = l(C, "body", "[begin]");
          return [].map.call(N, function(M) {
            var G = s(M, P);
            if (!G || !M.hasAttribute("begin"))
              return null;
            var K = u(M.getAttribute("begin"), O), H = u(M.getAttribute("dur"), O), z = u(M.getAttribute("end"), O);
            if (K === null)
              throw o(M);
            if (z === null) {
              if (H === null)
                throw o(M);
              z = K + H;
            }
            var q = new S.default(K - A, z - A, G);
            q.id = Object(L.generateCueId)(q.startTime, q.endTime, q.text);
            var $ = B[M.getAttribute("region")], ae = F[M.getAttribute("style")];
            q.position = 10, q.size = 80;
            var te = function(fe, ie) {
              var se = "http://www.w3.org/ns/ttml#styling";
              return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce(function(de, le) {
                var ye = t(ie, se, le) || t(fe, se, le);
                return ye && (de[le] = ye), de;
              }, {});
            }($, ae), oe = te.textAlign;
            if (oe) {
              var re = E[oe];
              re && (q.lineAlign = re), q.align = oe;
            }
            return a(q, te), q;
          }).filter(function(M) {
            return M !== null;
          });
        }(d, x));
      } catch (T) {
        g(T);
      }
    } else
      g(new Error("Could not parse IMSC1 mdat"));
  }
  function l(n, c, p) {
    var m = n.getElementsByTagName(c)[0];
    return m ? [].slice.call(m.querySelectorAll(p)) : [];
  }
  function e(n) {
    return n.reduce(function(c, p) {
      var m = p.getAttribute("xml:id");
      return m && (c[m] = p), c;
    }, {});
  }
  function s(n, c) {
    return [].slice.call(n.childNodes).reduce(function(p, m, g) {
      var i;
      return m.nodeName === "br" && g ? p + `
` : (i = m.childNodes) !== null && i !== void 0 && i.length ? s(m, c) : c ? p + m.textContent.trim().replace(/\s+/g, " ") : p + m.textContent;
    }, "");
  }
  function t(n, c, p) {
    return n.hasAttributeNS(c, p) ? n.getAttributeNS(c, p) : null;
  }
  function o(n) {
    return new Error("Could not parse ttml timestamp " + n);
  }
  function u(n, c) {
    if (!n)
      return null;
    var p = Object(y.parseTimeStamp)(n);
    return p === null && (v.test(n) ? p = function(m, g) {
      var i = v.exec(m), r = (0 | i[4]) + (0 | i[5]) / g.subFrameRate;
      return 3600 * (0 | i[1]) + 60 * (0 | i[2]) + (0 | i[3]) + r / g.frameRate;
    }(n, c) : h.test(n) && (p = function(m, g) {
      var i = h.exec(m), r = Number(i[1]);
      switch (i[2]) {
        case "h":
          return 3600 * r;
        case "m":
          return 60 * r;
        case "ms":
          return 1e3 * r;
        case "f":
          return r / g.frameRate;
        case "t":
          return r / g.tickRate;
      }
      return r;
    }(n, c))), p;
  }
}, "./src/utils/logger.ts": function(V, I, f) {
  f.r(I), f.d(I, "enableLogs", function() {
    return R;
  }), f.d(I, "logger", function() {
    return L;
  });
  var D = function() {
  }, y = { trace: D, debug: D, log: D, warn: D, info: D, error: D }, S = y;
  function k(a) {
    var b = self.console[a];
    return b ? b.bind(self.console, "[" + a + "] >") : D;
  }
  function R(a) {
    if (self.console && a === !0 || typeof a == "object") {
      (function(b) {
        for (var v = arguments.length, h = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
          h[E - 1] = arguments[E];
        h.forEach(function(_) {
          S[_] = b[_] ? b[_].bind(b) : k(_);
        });
      })(a, "debug", "log", "info", "warn", "error");
      try {
        S.log();
      } catch {
        S = y;
      }
    } else
      S = y;
  }
  var L = y;
}, "./src/utils/mediakeys-helper.ts": function(V, I, f) {
  var D, y;
  f.r(I), f.d(I, "KeySystems", function() {
    return D;
  }), f.d(I, "requestMediaKeySystemAccess", function() {
    return S;
  }), (y = D || (D = {})).WIDEVINE = "com.widevine.alpha", y.PLAYREADY = "com.microsoft.playready";
  var S = typeof self < "u" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}, "./src/utils/mediasource-helper.ts": function(V, I, f) {
  function D() {
    return self.MediaSource || self.WebKitMediaSource;
  }
  f.r(I), f.d(I, "getMediaSource", function() {
    return D;
  });
}, "./src/utils/mp4-tools.ts": function(V, I, f) {
  f.r(I), f.d(I, "bin2str", function() {
    return R;
  }), f.d(I, "readUint16", function() {
    return L;
  }), f.d(I, "readUint32", function() {
    return a;
  }), f.d(I, "writeUint32", function() {
    return b;
  }), f.d(I, "findBox", function() {
    return v;
  }), f.d(I, "parseSegmentIndex", function() {
    return h;
  }), f.d(I, "parseInitSegment", function() {
    return E;
  }), f.d(I, "getStartDTS", function() {
    return _;
  }), f.d(I, "getDuration", function() {
    return l;
  }), f.d(I, "computeRawDurationFromSamples", function() {
    return e;
  }), f.d(I, "offsetStartDTS", function() {
    return s;
  }), f.d(I, "segmentValidRange", function() {
    return t;
  }), f.d(I, "appendUint8Array", function() {
    return o;
  });
  var D = f("./src/utils/typed-array.ts"), y = f("./src/loader/fragment.ts"), S = Math.pow(2, 32) - 1, k = [].push;
  function R(u) {
    return String.fromCharCode.apply(null, u);
  }
  function L(u, n) {
    "data" in u && (n += u.start, u = u.data);
    var c = u[n] << 8 | u[n + 1];
    return c < 0 ? 65536 + c : c;
  }
  function a(u, n) {
    "data" in u && (n += u.start, u = u.data);
    var c = u[n] << 24 | u[n + 1] << 16 | u[n + 2] << 8 | u[n + 3];
    return c < 0 ? 4294967296 + c : c;
  }
  function b(u, n, c) {
    "data" in u && (n += u.start, u = u.data), u[n] = c >> 24, u[n + 1] = c >> 16 & 255, u[n + 2] = c >> 8 & 255, u[n + 3] = 255 & c;
  }
  function v(u, n) {
    var c, p, m, g = [];
    if (!n.length)
      return g;
    "data" in u ? (c = u.data, p = u.start, m = u.end) : (p = 0, m = (c = u).byteLength);
    for (var i = p; i < m; ) {
      var r = a(c, i), d = r > 1 ? i + r : m;
      if (R(c.subarray(i + 4, i + 8)) === n[0])
        if (n.length === 1)
          g.push({ data: c, start: i + 8, end: d });
        else {
          var x = v({ data: c, start: i + 8, end: d }, n.slice(1));
          x.length && k.apply(g, x);
        }
      i = d;
    }
    return g;
  }
  function h(u) {
    var n = v(u, ["moov"])[0], c = n ? n.end : null, p = v(u, ["sidx"]);
    if (!p || !p[0])
      return null;
    var m = [], g = p[0], i = g.data[0], r = i === 0 ? 8 : 16, d = a(g, r);
    r += 4, r += i === 0 ? 8 : 16, r += 2;
    var x = g.end + 0, T = L(g, r);
    r += 2;
    for (var A = 0; A < T; A++) {
      var C = r, w = a(g, C);
      C += 4;
      var O = 2147483647 & w;
      if ((2147483648 & w) >>> 31 == 1)
        return console.warn("SIDX has hierarchical references (not supported)"), null;
      var P = a(g, C);
      C += 4, m.push({ referenceSize: O, subsegmentDuration: P, info: { duration: P / d, start: x, end: x + O - 1 } }), x += O, r = C += 4;
    }
    return { earliestPresentationTime: 0, timescale: d, version: i, referencesCount: T, references: m, moovEndOffset: c };
  }
  function E(u) {
    for (var n = [], c = v(u, ["moov", "trak"]), p = 0; p < c.length; p++) {
      var m = c[p], g = v(m, ["tkhd"])[0];
      if (g) {
        var i = g.data[g.start], r = i === 0 ? 12 : 20, d = a(g, r), x = v(m, ["mdia", "mdhd"])[0];
        if (x) {
          var T = a(x, r = (i = x.data[x.start]) === 0 ? 12 : 20), A = v(m, ["mdia", "hdlr"])[0];
          if (A) {
            var C = R(A.data.subarray(A.start + 8, A.start + 12)), w = { soun: y.ElementaryStreamTypes.AUDIO, vide: y.ElementaryStreamTypes.VIDEO }[C];
            if (w) {
              var O = v(m, ["mdia", "minf", "stbl", "stsd"])[0], P = void 0;
              O && (P = R(O.data.subarray(O.start + 12, O.start + 16))), n[d] = { timescale: T, type: w }, n[w] = { timescale: T, id: d, codec: P };
            }
          }
        }
      }
    }
    return v(u, ["moov", "mvex", "trex"]).forEach(function(F) {
      var B = a(F, 4), N = n[B];
      N && (N.default = { duration: a(F, 12), flags: a(F, 20) });
    }), n;
  }
  function _(u, n) {
    return v(n, ["moof", "traf"]).reduce(function(c, p) {
      var m = v(p, ["tfdt"])[0], g = m.data[m.start], i = v(p, ["tfhd"]).reduce(function(r, d) {
        var x = a(d, 4), T = u[x];
        if (T) {
          var A = a(m, 4);
          g === 1 && (A *= Math.pow(2, 32), A += a(m, 8));
          var C = A / (T.timescale || 9e4);
          if (isFinite(C) && (r === null || C < r))
            return C;
        }
        return r;
      }, null);
      return i !== null && isFinite(i) && (c === null || i < c) ? i : c;
    }, null) || 0;
  }
  function l(u, n) {
    for (var c = 0, p = 0, m = 0, g = v(u, ["moof", "traf"]), i = 0; i < g.length; i++) {
      var r = g[i], d = v(r, ["tfhd"])[0], x = n[a(d, 4)];
      if (x) {
        var T = x.default, A = a(d, 0) | (T == null ? void 0 : T.flags), C = T == null ? void 0 : T.duration;
        8 & A && (C = a(d, 2 & A ? 12 : 8));
        for (var w = x.timescale || 9e4, O = v(r, ["trun"]), P = 0; P < O.length; P++)
          c = C ? C * a(O[P], 4) : e(O[P]), x.type === y.ElementaryStreamTypes.VIDEO ? p += c / w : x.type === y.ElementaryStreamTypes.AUDIO && (m += c / w);
      }
    }
    if (p === 0 && m === 0) {
      var F = h(u);
      if (F != null && F.references)
        return F.references.reduce(function(B, N) {
          return B + N.info.duration || 0;
        }, 0);
    }
    return p || m;
  }
  function e(u) {
    var n = a(u, 0), c = 8;
    1 & n && (c += 4), 4 & n && (c += 4);
    for (var p = 0, m = a(u, 4), g = 0; g < m; g++)
      256 & n && (p += a(u, c), c += 4), 512 & n && (c += 4), 1024 & n && (c += 4), 2048 & n && (c += 4);
    return p;
  }
  function s(u, n, c) {
    v(n, ["moof", "traf"]).forEach(function(p) {
      v(p, ["tfhd"]).forEach(function(m) {
        var g = a(m, 4), i = u[g];
        if (i) {
          var r = i.timescale || 9e4;
          v(p, ["tfdt"]).forEach(function(d) {
            var x = d.data[d.start], T = a(d, 4);
            if (x === 0)
              b(d, 4, T - c * r);
            else {
              T *= Math.pow(2, 32), T += a(d, 8), T -= c * r, T = Math.max(T, 0);
              var A = Math.floor(T / (S + 1)), C = Math.floor(T % (S + 1));
              b(d, 4, A), b(d, 8, C);
            }
          });
        }
      });
    });
  }
  function t(u) {
    var n = { valid: null, remainder: null }, c = v(u, ["moof"]);
    if (!c)
      return n;
    if (c.length < 2)
      return n.remainder = u, n;
    var p = c[c.length - 1];
    return n.valid = Object(D.sliceUint8)(u, 0, p.start - 8), n.remainder = Object(D.sliceUint8)(u, p.start - 8), n;
  }
  function o(u, n) {
    var c = new Uint8Array(u.length + n.length);
    return c.set(u), c.set(n, u.length), c;
  }
}, "./src/utils/output-filter.ts": function(V, I, f) {
  f.r(I), f.d(I, "default", function() {
    return D;
  });
  var D = function() {
    function y(k, R) {
      this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = k, this.trackName = R;
    }
    var S = y.prototype;
    return S.dispatchCue = function() {
      this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
    }, S.newCue = function(k, R, L) {
      (this.startTime === null || this.startTime > k) && (this.startTime = k), this.endTime = R, this.screen = L, this.timelineController.createCaptionsTrack(this.trackName);
    }, S.reset = function() {
      this.cueRanges = [];
    }, y;
  }();
}, "./src/utils/texttrack-utils.ts": function(V, I, f) {
  f.r(I), f.d(I, "sendAddTrackEvent", function() {
    return y;
  }), f.d(I, "addCueToTrack", function() {
    return S;
  }), f.d(I, "clearCurrentCues", function() {
    return k;
  }), f.d(I, "removeCuesInRange", function() {
    return R;
  }), f.d(I, "getCuesInRange", function() {
    return L;
  });
  var D = f("./src/utils/logger.ts");
  function y(a, b) {
    var v;
    try {
      v = new Event("addtrack");
    } catch {
      (v = document.createEvent("Event")).initEvent("addtrack", !1, !1);
    }
    v.track = a, b.dispatchEvent(v);
  }
  function S(a, b) {
    var v = a.mode;
    if (v === "disabled" && (a.mode = "hidden"), a.cues && !a.cues.getCueById(b.id))
      try {
        if (a.addCue(b), !a.cues.getCueById(b.id))
          throw new Error("addCue is failed for: " + b);
      } catch (E) {
        D.logger.debug("[texttrack-utils]: " + E);
        var h = new self.TextTrackCue(b.startTime, b.endTime, b.text);
        h.id = b.id, a.addCue(h);
      }
    v === "disabled" && (a.mode = v);
  }
  function k(a) {
    var b = a.mode;
    if (b === "disabled" && (a.mode = "hidden"), a.cues)
      for (var v = a.cues.length; v--; )
        a.removeCue(a.cues[v]);
    b === "disabled" && (a.mode = b);
  }
  function R(a, b, v) {
    var h = a.mode;
    if (h === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0)
      for (var E = L(a.cues, b, v), _ = 0; _ < E.length; _++)
        a.removeCue(E[_]);
    h === "disabled" && (a.mode = h);
  }
  function L(a, b, v) {
    var h = [], E = function(s, t) {
      if (t < s[0].startTime)
        return 0;
      var o = s.length - 1;
      if (t > s[o].endTime)
        return -1;
      for (var u = 0, n = o; u <= n; ) {
        var c = Math.floor((n + u) / 2);
        if (t < s[c].startTime)
          n = c - 1;
        else {
          if (!(t > s[c].startTime && u < o))
            return c;
          u = c + 1;
        }
      }
      return s[u].startTime - t < t - s[n].startTime ? u : n;
    }(a, b);
    if (E > -1)
      for (var _ = E, l = a.length; _ < l; _++) {
        var e = a[_];
        if (e.startTime >= b && e.endTime <= v)
          h.push(e);
        else if (e.startTime > v)
          return h;
      }
    return h;
  }
}, "./src/utils/time-ranges.ts": function(V, I, f) {
  f.r(I), I.default = { toString: function(D) {
    for (var y = "", S = D.length, k = 0; k < S; k++)
      y += "[" + D.start(k).toFixed(3) + "," + D.end(k).toFixed(3) + "]";
    return y;
  } };
}, "./src/utils/timescale-conversion.ts": function(V, I, f) {
  function D(R, L, a, b) {
    a === void 0 && (a = 1), b === void 0 && (b = !1);
    var v = R * L * a;
    return b ? Math.round(v) : v;
  }
  function y(R, L, a, b) {
    return a === void 0 && (a = 1), b === void 0 && (b = !1), D(R, L, 1 / a, b);
  }
  function S(R, L) {
    return L === void 0 && (L = !1), D(R, 1e3, 1 / 9e4, L);
  }
  function k(R, L) {
    return L === void 0 && (L = 1), D(R, 9e4, 1 / L);
  }
  f.r(I), f.d(I, "toTimescaleFromBase", function() {
    return D;
  }), f.d(I, "toTimescaleFromScale", function() {
    return y;
  }), f.d(I, "toMsFromMpegTsClock", function() {
    return S;
  }), f.d(I, "toMpegTsClockFromTimescale", function() {
    return k;
  });
}, "./src/utils/typed-array.ts": function(V, I, f) {
  function D(y, S, k) {
    return Uint8Array.prototype.slice ? y.slice(S, k) : new Uint8Array(Array.prototype.slice.call(y, S, k));
  }
  f.r(I), f.d(I, "sliceUint8", function() {
    return D;
  });
}, "./src/utils/vttcue.ts": function(V, I, f) {
  f.r(I), I.default = function() {
    if (typeof self < "u" && self.VTTCue)
      return self.VTTCue;
    var D = ["", "lr", "rl"], y = ["start", "middle", "end", "left", "right"];
    function S(a, b) {
      if (typeof b != "string" || !Array.isArray(a))
        return !1;
      var v = b.toLowerCase();
      return !!~a.indexOf(v) && v;
    }
    function k(a) {
      return S(y, a);
    }
    function R(a) {
      for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), h = 1; h < b; h++)
        v[h - 1] = arguments[h];
      for (var E = 1; E < arguments.length; E++) {
        var _ = arguments[E];
        for (var l in _)
          a[l] = _[l];
      }
      return a;
    }
    function L(a, b, v) {
      var h = this, E = { enumerable: !0 };
      h.hasBeenReset = !1;
      var _ = "", l = !1, e = a, s = b, t = v, o = null, u = "", n = !0, c = "auto", p = "start", m = 50, g = "middle", i = 50, r = "middle";
      Object.defineProperty(h, "id", R({}, E, { get: function() {
        return _;
      }, set: function(d) {
        _ = "" + d;
      } })), Object.defineProperty(h, "pauseOnExit", R({}, E, { get: function() {
        return l;
      }, set: function(d) {
        l = !!d;
      } })), Object.defineProperty(h, "startTime", R({}, E, { get: function() {
        return e;
      }, set: function(d) {
        if (typeof d != "number")
          throw new TypeError("Start time must be set to a number.");
        e = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "endTime", R({}, E, { get: function() {
        return s;
      }, set: function(d) {
        if (typeof d != "number")
          throw new TypeError("End time must be set to a number.");
        s = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "text", R({}, E, { get: function() {
        return t;
      }, set: function(d) {
        t = "" + d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "region", R({}, E, { get: function() {
        return o;
      }, set: function(d) {
        o = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "vertical", R({}, E, { get: function() {
        return u;
      }, set: function(d) {
        var x = function(T) {
          return S(D, T);
        }(d);
        if (x === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        u = x, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "snapToLines", R({}, E, { get: function() {
        return n;
      }, set: function(d) {
        n = !!d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "line", R({}, E, { get: function() {
        return c;
      }, set: function(d) {
        if (typeof d != "number" && d !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        c = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "lineAlign", R({}, E, { get: function() {
        return p;
      }, set: function(d) {
        var x = k(d);
        if (!x)
          throw new SyntaxError("An invalid or illegal string was specified.");
        p = x, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "position", R({}, E, { get: function() {
        return m;
      }, set: function(d) {
        if (d < 0 || d > 100)
          throw new Error("Position must be between 0 and 100.");
        m = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "positionAlign", R({}, E, { get: function() {
        return g;
      }, set: function(d) {
        var x = k(d);
        if (!x)
          throw new SyntaxError("An invalid or illegal string was specified.");
        g = x, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "size", R({}, E, { get: function() {
        return i;
      }, set: function(d) {
        if (d < 0 || d > 100)
          throw new Error("Size must be between 0 and 100.");
        i = d, this.hasBeenReset = !0;
      } })), Object.defineProperty(h, "align", R({}, E, { get: function() {
        return r;
      }, set: function(d) {
        var x = k(d);
        if (!x)
          throw new SyntaxError("An invalid or illegal string was specified.");
        r = x, this.hasBeenReset = !0;
      } })), h.displayState = void 0;
    }
    return L.prototype.getCueAsHTML = function() {
      return self.WebVTT.convertCueToDOMTree(self, this.text);
    }, L;
  }();
}, "./src/utils/vttparser.ts": function(V, I, f) {
  f.r(I), f.d(I, "parseTimeStamp", function() {
    return S;
  }), f.d(I, "fixLineBreaks", function() {
    return v;
  }), f.d(I, "VTTParser", function() {
    return h;
  });
  var D = f("./src/utils/vttcue.ts"), y = function() {
    function E() {
    }
    return E.prototype.decode = function(_, l) {
      if (!_)
        return "";
      if (typeof _ != "string")
        throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(_));
    }, E;
  }();
  function S(E) {
    function _(e, s, t, o) {
      return 3600 * (0 | e) + 60 * (0 | s) + (0 | t) + parseFloat(o || 0);
    }
    var l = E.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return l ? parseFloat(l[2]) > 59 ? _(l[2], l[3], 0, l[4]) : _(l[1], l[2], l[3], l[4]) : null;
  }
  var k = function() {
    function E() {
      this.values = /* @__PURE__ */ Object.create(null);
    }
    var _ = E.prototype;
    return _.set = function(l, e) {
      this.get(l) || e === "" || (this.values[l] = e);
    }, _.get = function(l, e, s) {
      return s ? this.has(l) ? this.values[l] : e[s] : this.has(l) ? this.values[l] : e;
    }, _.has = function(l) {
      return l in this.values;
    }, _.alt = function(l, e, s) {
      for (var t = 0; t < s.length; ++t)
        if (e === s[t]) {
          this.set(l, e);
          break;
        }
    }, _.integer = function(l, e) {
      /^-?\d+$/.test(e) && this.set(l, parseInt(e, 10));
    }, _.percent = function(l, e) {
      if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
        var s = parseFloat(e);
        if (s >= 0 && s <= 100)
          return this.set(l, s), !0;
      }
      return !1;
    }, E;
  }();
  function R(E, _, l, e) {
    var s = e ? E.split(e) : [E];
    for (var t in s)
      if (typeof s[t] == "string") {
        var o = s[t].split(l);
        o.length === 2 && _(o[0], o[1]);
      }
  }
  var L = new D.default(0, 0, ""), a = L.align === "middle" ? "middle" : "center";
  function b(E, _, l) {
    var e = E;
    function s() {
      var o = S(E);
      if (o === null)
        throw new Error("Malformed timestamp: " + e);
      return E = E.replace(/^[^\sa-zA-Z-]+/, ""), o;
    }
    function t() {
      E = E.replace(/^\s+/, "");
    }
    if (t(), _.startTime = s(), t(), E.substr(0, 3) !== "-->")
      throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + e);
    E = E.substr(3), t(), _.endTime = s(), t(), function(o, u) {
      var n = new k();
      R(o, function(m, g) {
        var i;
        switch (m) {
          case "region":
            for (var r = l.length - 1; r >= 0; r--)
              if (l[r].id === g) {
                n.set(m, l[r].region);
                break;
              }
            break;
          case "vertical":
            n.alt(m, g, ["rl", "lr"]);
            break;
          case "line":
            i = g.split(","), n.integer(m, i[0]), n.percent(m, i[0]) && n.set("snapToLines", !1), n.alt(m, i[0], ["auto"]), i.length === 2 && n.alt("lineAlign", i[1], ["start", a, "end"]);
            break;
          case "position":
            i = g.split(","), n.percent(m, i[0]), i.length === 2 && n.alt("positionAlign", i[1], ["start", a, "end", "line-left", "line-right", "auto"]);
            break;
          case "size":
            n.percent(m, g);
            break;
          case "align":
            n.alt(m, g, ["start", a, "end", "left", "right"]);
        }
      }, /:/, /\s/), u.region = n.get("region", null), u.vertical = n.get("vertical", "");
      var c = n.get("line", "auto");
      c === "auto" && L.line === -1 && (c = -1), u.line = c, u.lineAlign = n.get("lineAlign", "start"), u.snapToLines = n.get("snapToLines", !0), u.size = n.get("size", 100), u.align = n.get("align", a);
      var p = n.get("position", "auto");
      p === "auto" && L.position === 50 && (p = u.align === "start" || u.align === "left" ? 0 : u.align === "end" || u.align === "right" ? 100 : 50), u.position = p;
    }(E, _);
  }
  function v(E) {
    return E.replace(/<br(?: \/)?>/gi, `
`);
  }
  var h = function() {
    function E() {
      this.state = "INITIAL", this.buffer = "", this.decoder = new y(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
    }
    var _ = E.prototype;
    return _.parse = function(l) {
      var e = this;
      function s() {
        var c = e.buffer, p = 0;
        for (c = v(c); p < c.length && c[p] !== "\r" && c[p] !== `
`; )
          ++p;
        var m = c.substr(0, p);
        return c[p] === "\r" && ++p, c[p] === `
` && ++p, e.buffer = c.substr(p), m;
      }
      l && (e.buffer += e.decoder.decode(l, { stream: !0 }));
      try {
        var t = "";
        if (e.state === "INITIAL") {
          if (!/\r\n|\n/.test(e.buffer))
            return this;
          var o = (t = s()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
          if (!o || !o[0])
            throw new Error("Malformed WebVTT signature.");
          e.state = "HEADER";
        }
        for (var u = !1; e.buffer; ) {
          if (!/\r\n|\n/.test(e.buffer))
            return this;
          switch (u ? u = !1 : t = s(), e.state) {
            case "HEADER":
              /:/.test(t) ? R(t, function(c, p) {
              }, /:/) : t || (e.state = "ID");
              continue;
            case "NOTE":
              t || (e.state = "ID");
              continue;
            case "ID":
              if (/^NOTE($|[ \t])/.test(t)) {
                e.state = "NOTE";
                break;
              }
              if (!t)
                continue;
              if (e.cue = new D.default(0, 0, ""), e.state = "CUE", t.indexOf("-->") === -1) {
                e.cue.id = t;
                continue;
              }
            case "CUE":
              if (!e.cue) {
                e.state = "BADCUE";
                continue;
              }
              try {
                b(t, e.cue, e.regionList);
              } catch {
                e.cue = null, e.state = "BADCUE";
                continue;
              }
              e.state = "CUETEXT";
              continue;
            case "CUETEXT":
              var n = t.indexOf("-->") !== -1;
              if (!t || n && (u = !0)) {
                e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                continue;
              }
              if (e.cue === null)
                continue;
              e.cue.text && (e.cue.text += `
`), e.cue.text += t;
              continue;
            case "BADCUE":
              t || (e.state = "ID");
          }
        }
      } catch {
        e.state === "CUETEXT" && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = e.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
      }
      return this;
    }, _.flush = function() {
      var l = this;
      try {
        if ((l.cue || l.state === "HEADER") && (l.buffer += `

`, l.parse()), l.state === "INITIAL" || l.state === "BADWEBVTT")
          throw new Error("Malformed WebVTT signature.");
      } catch (e) {
        l.onparsingerror && l.onparsingerror(e);
      }
      return l.onflush && l.onflush(), this;
    }, E;
  }();
}, "./src/utils/webvtt-parser.ts": function(V, I, f) {
  f.r(I), f.d(I, "generateCueId", function() {
    return v;
  }), f.d(I, "parseWebVTT", function() {
    return h;
  });
  var D = f("./src/polyfills/number.ts"), y = f("./src/utils/vttparser.ts"), S = f("./src/demux/id3.ts"), k = f("./src/utils/timescale-conversion.ts"), R = f("./src/remux/mp4-remuxer.ts"), L = /\r\n|\n\r|\n|\r/g, a = function(E, _, l) {
    return l === void 0 && (l = 0), E.substr(l, _.length) === _;
  }, b = function(E) {
    for (var _ = 5381, l = E.length; l; )
      _ = 33 * _ ^ E.charCodeAt(--l);
    return (_ >>> 0).toString();
  };
  function v(E, _, l) {
    return b(E.toString()) + b(_.toString()) + b(l);
  }
  function h(E, _, l, e, s, t, o, u) {
    var n, c = new y.VTTParser(), p = Object(S.utf8ArrayToStr)(new Uint8Array(E)).trim().replace(L, `
`).split(`
`), m = [], g = Object(k.toMpegTsClockFromTimescale)(_, l), i = "00:00.000", r = 0, d = 0, x = !0, T = !1;
    c.oncue = function(A) {
      var C = e[s], w = e.ccOffset, O = (r - g) / 9e4;
      if (C != null && C.new && (d !== void 0 ? w = e.ccOffset = C.start : function(N, M, G) {
        var K = N[M], H = N[K.prevCC];
        if (!H || !H.new && K.new)
          return N.ccOffset = N.presentationOffset = K.start, void (K.new = !1);
        for (; (z = H) !== null && z !== void 0 && z.new; ) {
          var z;
          N.ccOffset += K.start - H.start, K.new = !1, H = N[(K = H).prevCC];
        }
        N.presentationOffset = G;
      }(e, s, O)), O && (w = O - e.presentationOffset), T) {
        var P = A.endTime - A.startTime, F = Object(R.normalizePts)(9e4 * (A.startTime + w - d), 9e4 * t) / 9e4;
        A.startTime = F, A.endTime = F + P;
      }
      var B = A.text.trim();
      A.text = decodeURIComponent(encodeURIComponent(B)), A.id || (A.id = v(A.startTime, A.endTime, B)), A.endTime > 0 && m.push(A);
    }, c.onparsingerror = function(A) {
      n = A;
    }, c.onflush = function() {
      n ? u(n) : o(m);
    }, p.forEach(function(A) {
      if (x) {
        if (a(A, "X-TIMESTAMP-MAP=")) {
          x = !1, T = !0, A.substr(16).split(",").forEach(function(C) {
            a(C, "LOCAL:") ? i = C.substr(6) : a(C, "MPEGTS:") && (r = parseInt(C.substr(7)));
          });
          try {
            d = function(C) {
              var w = parseInt(C.substr(-3)), O = parseInt(C.substr(-6, 2)), P = parseInt(C.substr(-9, 2)), F = C.length > 9 ? parseInt(C.substr(0, C.indexOf(":"))) : 0;
              if (!(Object(D.isFiniteNumber)(w) && Object(D.isFiniteNumber)(O) && Object(D.isFiniteNumber)(P) && Object(D.isFiniteNumber)(F)))
                throw Error("Malformed X-TIMESTAMP-MAP: Local:" + C);
              return w += 1e3 * O, (w += 6e4 * P) + 36e5 * F;
            }(i) / 1e3;
          } catch (C) {
            T = !1, n = C;
          }
          return;
        }
        A === "" && (x = !1);
      }
      c.parse(A + `
`);
    }), c.flush();
  }
}, "./src/utils/xhr-loader.ts": function(V, I, f) {
  f.r(I);
  var D = f("./src/utils/logger.ts"), y = f("./src/loader/load-stats.ts"), S = /^age:\s*[\d.]+\s*$/m, k = function() {
    function R(a) {
      this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = a ? a.xhrSetup : null, this.stats = new y.LoadStats(), this.retryDelay = 0;
    }
    var L = R.prototype;
    return L.destroy = function() {
      this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
    }, L.abortInternal = function() {
      var a = this.loader;
      self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), a && (a.onreadystatechange = null, a.onprogress = null, a.readyState !== 4 && (this.stats.aborted = !0, a.abort()));
    }, L.abort = function() {
      var a;
      this.abortInternal(), (a = this.callbacks) !== null && a !== void 0 && a.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
    }, L.load = function(a, b, v) {
      if (this.stats.loading.start)
        throw new Error("Loader can only be used once.");
      this.stats.loading.start = self.performance.now(), this.context = a, this.config = b, this.callbacks = v, this.retryDelay = b.retryDelay, this.loadInternal();
    }, L.loadInternal = function() {
      var a = this.config, b = this.context;
      if (a) {
        var v = this.loader = new self.XMLHttpRequest(), h = this.stats;
        h.loading.first = 0, h.loaded = 0;
        var E = this.xhrSetup;
        try {
          if (E)
            try {
              E(v, b.url);
            } catch {
              v.open("GET", b.url, !0), E(v, b.url);
            }
          v.readyState || v.open("GET", b.url, !0);
        } catch (_) {
          return void this.callbacks.onError({ code: v.status, text: _.message }, b, v);
        }
        b.rangeEnd && v.setRequestHeader("Range", "bytes=" + b.rangeStart + "-" + (b.rangeEnd - 1)), v.onreadystatechange = this.readystatechange.bind(this), v.onprogress = this.loadprogress.bind(this), v.responseType = b.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), a.timeout), v.send();
      }
    }, L.readystatechange = function() {
      var a = this.context, b = this.loader, v = this.stats;
      if (a && b) {
        var h = b.readyState, E = this.config;
        if (!v.aborted && h >= 2)
          if (self.clearTimeout(this.requestTimeout), v.loading.first === 0 && (v.loading.first = Math.max(self.performance.now(), v.loading.start)), h === 4) {
            b.onreadystatechange = null, b.onprogress = null;
            var _ = b.status;
            if (_ >= 200 && _ < 300) {
              var l, e;
              if (v.loading.end = Math.max(self.performance.now(), v.loading.first), e = a.responseType === "arraybuffer" ? (l = b.response).byteLength : (l = b.responseText).length, v.loaded = v.total = e, !this.callbacks)
                return;
              var s = this.callbacks.onProgress;
              if (s && s(v, a, l, b), !this.callbacks)
                return;
              var t = { url: b.responseURL, data: l };
              this.callbacks.onSuccess(t, v, a, b);
            } else
              v.retry >= E.maxRetry || _ >= 400 && _ < 499 ? (D.logger.error(_ + " while loading " + a.url), this.callbacks.onError({ code: _, text: b.statusText }, a, b)) : (D.logger.warn(_ + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, E.maxRetryDelay), v.retry++);
          } else
            self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), E.timeout);
      }
    }, L.loadtimeout = function() {
      D.logger.warn("timeout while loading " + this.context.url);
      var a = this.callbacks;
      a && (this.abortInternal(), a.onTimeout(this.stats, this.context, this.loader));
    }, L.loadprogress = function(a) {
      var b = this.stats;
      b.loaded = a.loaded, a.lengthComputable && (b.total = a.total);
    }, L.getCacheAge = function() {
      var a = null;
      if (this.loader && S.test(this.loader.getAllResponseHeaders())) {
        var b = this.loader.getResponseHeader("age");
        a = b ? parseFloat(b) : null;
      }
      return a;
    }, R;
  }();
  I.default = k;
} }).default);
var at = qi(wt.exports);
const Yi = { name: "d-icon" }, we = Object.assign(Yi, { props: { icon: String, size: [Number, String] }, setup: function(V) {
  const I = V, f = Ae(() => ({ fontSize: /^\d+$/.test(I.size) ? I.size + "px" : I.size }));
  return (D, y) => (W(), Q("i", { class: Le(["d-icon iconfont", V.icon]), style: Fe(U(f)) }, null, 6));
} });
we.__scopeId = "data-v-0c690e66";
Ge("data-v-4cb76d59");
const Xi = { class: "d-player-top" }, $i = { class: "top-title" }, Qi = { class: "top-title" };
je();
const Zi = { props: { title: { default: "" } }, setup(V) {
  Date.prototype.format = function(D) {
    let y = { "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds() };
    for (var S in y)
      new RegExp("(" + S + ")").test(D) && (D = D.replace(RegExp.$1, RegExp.$1.length == 1 ? y[S] : ("00" + y[S]).substr(("" + y[S]).length)));
    return D;
  };
  let I = pe("00:00:00");
  I.value = new Date().format("hh:mm:ss");
  let f = null;
  return f = setInterval(() => {
    I.value = new Date().format("hh:mm:ss");
  }, 1e3), Lt(() => {
    clearInterval(f);
  }), (D, y) => (W(), Q("div", Xi, [j("p", $i, J(V.title || ""), 1), j("p", Qi, J(U(I)), 1)]));
}, __scopeId: "data-v-4cb76d59" };
Ge("data-v-ac2469ec");
const Ji = { class: "d-status" }, en = { class: "d-flex-center" }, tn = { class: "d-flex-center" }, nn = ce("5X速播放中 ");
je();
var Ct = Ce({ props: ["state"], setup: (V) => (I, f) => Ee((W(), Q("div", Ji, [Ee(j("li", en, [Y(we, { size: "18", class: "d-status-icon", icon: "icon-volume-" + (V.state.volume == 0 ? "mute" : V.state.volume > 0.5 ? "up" : "down") }, null, 8, ["icon"]), ce(" " + J(~~(100 * V.state.volume)) + "% ", 1)], 512), [[be, V.state.handleType == "volume"]]), Ee(j("li", tn, [Y(we, { size: "12", icon: "icon-play" }), Y(we, { size: "12", icon: "icon-play", style: { "margin-right": "5px" } }), nn], 512), [[be, V.state.handleType == "playbackRate" || V.state.isMultiplesPlay]])], 512)), [[be, V.state.handleType || V.state.isMultiplesPlay]]) });
Ct.__scopeId = "data-v-ac2469ec", Ge("data-v-385f7870");
const rn = ["checked", "true-value", "false-value"], an = j("span", { class: "d-switch_action" }, null, -1);
je();
var nt = Ce({ props: { modelValue: { type: [Number, String, Boolean] }, width: { type: String, default: "40px" }, trueValue: { type: [Number, String, Boolean], default: !0 }, falseValue: { type: [Number, String, Boolean], default: !0 }, activeColor: { type: [String], default: "#409EFF" } }, emits: ["update:modelValue", "change"], setup(V, { emit: I }) {
  const f = V;
  ft((k) => ({ "014e5dc0": V.width, e4e32852: V.activeColor }));
  const D = pe(null), y = Ae(() => f.modelValue === f.trueValue), S = () => {
    tt(() => {
      const k = D.value.checked;
      I("update:modelValue", k), I("change", k);
    });
  };
  return (k, R) => (W(), Q("div", { class: Le(["d-switch", { "is-checked": U(y) }]) }, [j("input", { class: "d-switch__input", ref: D, type: "checkbox", checked: U(y), onChange: S, "true-value": V.trueValue, "false-value": V.falseValue }, null, 40, rn), an], 2));
} });
nt.__scopeId = "data-v-385f7870", Ge("data-v-b2384226");
const sn = { key: 0 }, on = j("i", { class: "rotating iconfont icon-loading f50" }, null, -1), ln = [j("i", { class: "rotating iconfont icon-loading f50" }, null, -1), j("p", null, "正在缓冲...", -1)], cn = [j("i", { class: "iconfont icon-replay f24 mr5" }, null, -1), ce("重新播放 ")], un = [j("i", { class: "iconfont icon-replay f24 mr5" }, null, -1), ce("请求错误 ")];
je();
var Ot = Ce({ props: { loadType: String, text: { type: String, default: "" } }, setup(V) {
  const I = V, { proxy: f } = bi(), D = ["loadstart", "waiting", "ended", "error", "stalled"], y = () => {
    f.$parent.play();
  }, S = Ae(() => {
    let k = "background: rgba(0, 0, 0, .1);z-index:1";
    return I.loadType == "loadstart" && (k = "background: rgba(0, 0, 0, 1);;z-index:3"), k;
  });
  return (k, R) => Ee((W(), Q("div", { class: "d-loading", style: Fe(U(S)) }, [j("div", null, [V.loadType == "loadstart" ? (W(), Q("span", sn, [on, j("p", null, J(V.text), 1)])) : ne("", !0), Ee(j("span", null, ln, 512), [[be, V.loadType == "waiting"]]), Ee(j("span", null, [j("p", { onClick: y, class: "d-flex-x d-pointer" }, cn)], 512), [[be, V.loadType == "ended"]]), Ee(j("span", null, [j("p", { onClick: y, class: "d-flex-x d-pointer" }, un)], 512), [[be, V.loadType == "error" || V.loadType == "stalled"]])])], 4)), [[be, D.includes(V.loadType)]]);
} });
Ot.__scopeId = "data-v-b2384226";
const We = function(V, I, f, D = !1) {
  V && I && f && V.addEventListener(I, f, D);
}, Se = function(V, I, f, D = !1) {
  V && I && f && V.removeEventListener(I, f, D);
};
Ge("data-v-5a794390");
const dn = ["onMousedown"];
je();
var $e = Ce(ut(ct({}, { name: "DSlider" }), { props: { modelValue: { required: !0, type: Number, default: 0 }, disabled: { type: Boolean, default: !1 }, vertical: { type: Boolean, default: !1 }, hover: { type: Boolean, default: !0 }, hoverText: { type: String, default: "" }, preload: { type: Number, default: 0 }, size: { type: String, default: "10px" } }, emits: ["update:modelValue", "change", "onMousemove"], setup: function(V, { emit: I }) {
  const f = V;
  ft((e) => ({ "5242b67b": V.size }));
  const D = pe(null), y = pe(null), S = _e({ dragging: !1, hoverPosition: 0, hoverTipsLeft: "50%" }), k = Ae(() => {
    let e = f.modelValue < 0 ? 0 : f.modelValue > 1 ? 1 : f.modelValue;
    return f.vertical ? `height:${100 * e}%` : `width:${100 * e}%`;
  }), R = Ae(() => {
    let e = f.preload < 0 ? 0 : f.preload > 1 ? 1 : f.preload;
    return f.vertical ? `height:${100 * e}%` : `width:${100 * e}%`;
  }), L = Ae(() => {
    let e = S.hoverPosition < 0 ? 0 : S.hoverPosition > 1 ? 1 : S.hoverPosition;
    return f.vertical ? `bottom:${100 * e}%` : `left:${100 * e}%`;
  }), a = (e) => {
    e.preventDefault();
  }, b = (e) => {
    f.disabled || (e.preventDefault(), S.dragging = !0, h(e), We(window, "mousemove", _), We(window, "touchmove", _), We(window, "mouseup", l), We(window, "touchend", l));
  }, v = (e) => {
    if (!f.hover)
      return;
    let s = E(e);
    if (I("onMousemove", e, s), S.hoverPosition = s, f.vertical)
      return;
    let t = D.value, o = y.value.clientWidth / 2, u = e.clientX - t.getBoundingClientRect().left;
    u < o ? S.hoverTipsLeft = o - u + "px" : t.clientWidth - u < o ? S.hoverTipsLeft = t.clientWidth - u - o + "px" : S.hoverTipsLeft = "50%";
  }, h = (e) => {
    let s = E(e);
    I("update:modelValue", s), I("change", e, s);
  }, E = (e) => {
    let s = D.value, t = 0;
    if (f.vertical) {
      let o = s.clientHeight;
      t = (s.getBoundingClientRect().bottom - e.clientY) / o;
    } else
      t = (e.clientX - s.getBoundingClientRect().left) / s.clientWidth;
    return t < 0 ? 0 : t > 1 ? 1 : t;
  }, _ = (e) => {
    h(e);
  }, l = (e) => {
    S.dragging && (Se(window, "mousemove", _), Se(window, "touchmove", _), Se(window, "mouseup", l), Se(window, "touchend", l), Se(window, "contextmenu", l), setTimeout(() => {
      S.dragging = !1;
    }, 0));
  };
  return (e, s) => (W(), Q("div", { ref: D, class: Le(["d-slider", { "is-vertical": f.vertical }]), onMousedown: kt(b, ["stop"]), onContextmenu: a }, [j("div", { class: "d-slider__runway", onMousemove: v }, [Ee(j("div", { class: "d-slider__cursor", style: Fe(U(L)) }, [Ee(j("div", { class: "d-slider__tips", ref: y, style: Fe({ left: U(S).hoverTipsLeft }) }, J(f.hoverText), 5), [[be, f.hoverText]])], 4), [[be, f.hover]]), j("div", { class: "d-slider__preload", style: Fe(U(R)) }, null, 4), j("div", { class: "d-slider__bar", style: Fe(U(k)) }, null, 4)], 32)], 42, dn));
} }));
$e.__scopeId = "data-v-5a794390";
Ge("data-v-570fa0d1");
const fn = { key: 0, class: "d-player-dialog" }, hn = { class: "d-player-dialog-body" }, mn = { class: "d-player-dialog-title" }, gn = { class: "d-player-hotkey-panel" }, vn = { class: "d-player-filter-panel" }, pn = { class: "d-player-filter-panel-item" }, yn = j("span", null, "饱和度", -1), _n = { class: "d-player-filter-panel-item" }, En = j("span", null, "亮度", -1), Tn = { class: "d-player-filter-panel-item" }, xn = j("span", null, "对比度", -1), bn = { key: 0, class: "d-player-contextmenu" }, Sn = ["dplayerKeyCode"], Ln = j("input", { class: "d-player-copyText" }, null, -1);
je();
var Pt = Ce({ setup(V) {
  const I = _e({ show: !1, dialogType: "", dialogTitle: "", version: "1.3.1-beta.6", mouseX: 0, mouseY: 0 }), f = [{ label: "视频色彩调整", key: "filter" }, { label: "快捷键说明", key: "hotkey" }, { label: "复制视频网址", key: "copy" }, { label: "版本：1.3.1-beta.6", key: "version" }], D = [{ key: "Space", label: "播放/暂停" }, { key: "→", label: "单次快进10s，长按5倍速播放" }, { key: "←", label: "快退5s" }, { key: "↑", label: "音量增加10%" }, { key: "↓", label: "音量增加降低10%" }, { key: "Esc", label: "退出全屏/退出网页全屏" }, { key: "F", label: "全屏/退出全屏" }], y = _e({ saturate: 0.392, brightness: 0.392, contrast: 0.392 }), S = Ae(() => ({ left: I.mouseX + "px", top: I.mouseY + "px" }));
  Xe(y, (b) => {
    let v = document.querySelector("#dPlayerVideo"), h = (2.55 * b.saturate).toFixed(2), E = (2.55 * b.brightness).toFixed(2), _ = (2.55 * b.contrast).toFixed(2);
    v.style.filter = `saturate(${h}) brightness(${E}) contrast(${_})`;
  });
  const k = () => {
    y.saturate = 0.392, y.brightness = 0.392, y.contrast = 0.392;
  }, R = (b) => {
    b.key == "Escape" && a(0);
  }, L = (b) => {
    b.preventDefault(), We(window, "keydown", R), We(window, "click", a);
    let v = document.querySelector("#refPlayerWrap"), h = v.clientWidth;
    v.clientHeight, I.mouseX = b.clientX - v.getBoundingClientRect().left, h - I.mouseX < 130 && (I.mouseX = I.mouseX + (h - I.mouseX - 130)), I.mouseY = b.clientY - v.getBoundingClientRect().top, I.show = !0;
  }, a = (b) => {
    let v = b.path[0].tagName == "LI", h = b.path[0].attributes.dplayerKeyCode && b.path[0].attributes.dplayerKeyCode.value, E = f.map((_) => _.key);
    if (v && E.includes(h))
      if (I.dialogTitle = b.path[0].innerText, I.dialogType = h, h == "copy") {
        let _ = document.querySelector(".d-player-copyText");
        _.value = window.location.href, _.select(), document.execCommand("copy"), I.dialogType = "";
      } else
        h == "version" && (I.dialogType = "");
    I.show = !1, Se(window, "keydown", R), Se(window, "click", a);
  };
  return ht(() => {
    let b = document.querySelector("#refPlayerWrap");
    Se(window, "keydown", R), Se(window, "click", a), Se(b, "contextmenu", L), We(b, "contextmenu", L);
  }), Lt(() => {
    let b = document.querySelector("#refPlayerWrap");
    Se(window, "keydown", R), Se(window, "click", a), Se(b, "contextmenu", L);
  }), (b, v) => (W(), Q("div", null, [Y(ot, { name: "d-fade-in" }, { default: Z(() => [U(I).dialogType ? (W(), Q("div", fn, [j("div", hn, [j("h5", mn, [ce(J(U(I).dialogTitle) + " ", 1), j("i", { onClick: v[0] || (v[0] = (h) => U(I).dialogType = !1), class: "icon icon-close" }, "X")]), Ee(j("ul", gn, [(W(), Q(ke, null, Ne(D, (h) => j("li", { class: "d-player-hotkey-panel-item", key: h.key }, [j("span", null, J(h.key), 1), j("span", null, J(h.label), 1)])), 64))], 512), [[be, U(I).dialogType == "hotkey"]]), Ee(j("ul", vn, [j("li", pn, [yn, Y($e, { class: "filter-panel-slider", size: "5px", modelValue: U(y).saturate, "onUpdate:modelValue": v[1] || (v[1] = (h) => U(y).saturate = h) }, null, 8, ["modelValue"]), j("span", null, J(Math.round(255 * U(y).saturate)), 1)]), j("li", _n, [En, Y($e, { class: "filter-panel-slider", size: "5px", modelValue: U(y).brightness, "onUpdate:modelValue": v[2] || (v[2] = (h) => U(y).brightness = h) }, null, 8, ["modelValue"]), j("span", null, J(Math.round(255 * U(y).brightness)), 1)]), j("li", Tn, [xn, Y($e, { class: "filter-panel-slider", size: "5px", modelValue: U(y).contrast, "onUpdate:modelValue": v[3] || (v[3] = (h) => U(y).contrast = h) }, null, 8, ["modelValue"]), j("span", null, J(Math.round(255 * U(y).contrast)), 1)]), j("span", { onClick: k, title: "重置", "aria-label": "重置", class: "d-player-filter-reset" }, "重置")], 512), [[be, U(I).dialogType == "filter"]])])])) : ne("", !0)]), _: 1 }), U(I).show ? (W(), Q("div", bn, [j("ul", { class: "d-player-contextmenu-body", style: Fe(U(S)) }, [(W(), Q(ke, null, Ne(f, (h) => j("li", { dplayerKeyCode: h.key, key: h.key }, J(h.label), 9, Sn)), 64))], 4), Ln])) : ne("", !0)]));
} });
Pt.__scopeId = "data-v-570fa0d1";
const st = (V) => {
  let I = ~~(V / 3600), f = ~~(V % 3600 / 60), D = ~~(V % 60);
  return I = I < 10 ? "0" + I : I, f = f < 10 ? "0" + f : f, D = D < 10 ? "0" + D : D, `${I}:${f}:${D}`;
}, et = "ontouchstart" in window, Et = ["loadstart", "play", "pause", "playing", "seeking", "seeked", "waiting", "durationchange", "progress", "canplay", "timeupdate", "ended", "error", "stalled"], kn = { width: { type: String, default: "800px" }, height: { type: String, default: "450px" }, color: { type: String, default: "#409eff" }, src: { required: !0, type: String, default: "" }, title: { type: String, default: "" }, type: { type: String, default: "video/mp4" }, poster: { type: String, default: "" }, webFullScreen: { type: Boolean, default: !1 }, speed: { type: Boolean, default: !0 }, currentTime: { type: Number, default: 0 }, playsinline: { type: Boolean, default: !1 }, muted: { type: Boolean, default: !1 }, speedRate: { type: Array, default: () => ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"] }, autoPlay: { type: Boolean, default: !1 }, loop: { type: Boolean, default: !1 }, mirror: { type: Boolean, default: !1 }, ligthOff: { type: Boolean, default: !1 }, volume: { type: [String, Number], default: 0.3 }, control: { type: Boolean, default: !0 }, controlBtns: { type: Array, default: ["audioTrack", "quality", "speedRate", "volume", "setting", "pip", "pageFullScreen", "fullScreen"] }, preload: { type: String, default: "auto" } };
Ge("data-v-01791e9e");
const An = { class: "d-player-video", id: "dPlayerVideo" }, Dn = ["controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"], Rn = { class: "d-player-lightoff" }, In = { key: 1, class: "d-player-state" }, wn = { class: "d-play-btn" }, Cn = ["onKeyup", "onKeydown"], On = { class: "d-control-progress" }, Pn = { class: "d-tool-bar" }, Fn = { key: 0, class: "d-tool-item d-tool-time audioTrack-btn" }, Mn = j("span", { style: { margin: "0 3px" } }, "/", -1), Vn = { class: "total-time" }, Nn = { class: "d-tool-bar" }, Bn = { key: 0, class: "d-tool-item quality-btn" }, Un = { class: "d-tool-item-main" }, Gn = { class: "speed-main", style: { "text-align": "center" } }, jn = ["onClick"], Kn = { key: 1, class: "d-tool-item speedRate-btn" }, Hn = { class: "d-tool-item-main" }, zn = { class: "speed-main" }, Wn = ["onClick"], qn = { key: 2, class: "d-tool-item volume-btn" }, Yn = { class: "d-tool-item-main volume-box", style: { width: "52px" } }, Xn = { class: "volume-text-size" }, $n = { key: 3, class: "d-tool-item setting-btn" }, Qn = { class: "d-tool-item-main" }, Zn = { class: "speed-main" }, Jn = ce(" 镜像画面 "), er = ce(" 循环播放 "), tr = ce(" 关灯模式 "), ir = j("div", { class: "d-tool-item-main" }, "画中画", -1), nr = j("div", { class: "d-tool-item-main" }, "网页全屏", -1), rr = j("div", { class: "d-tool-item-main" }, "全屏", -1);
je();
var it = Ce(ut(ct({}, { name: "vue3VideoPlay", inheritAttrs: !1 }), { props: kn, emits: [...Et, "mirrorChange", "loopChange", "lightOffChange"], setup: function(V, { expose: I, emit: f }) {
  const D = V;
  ft((w) => ({ "51d4439c": U(E), "77e758a6": w.width, b8a1afc0: w.height }));
  const y = new at({ fragLoadingTimeOut: 2e3 }), S = pe(null), k = pe(null), R = pe(null), L = pe(null), a = _e(ut(ct({ dVideo: null }, D), { muted: D.muted, playBtnState: D.autoPlay ? "pause" : "play", loadStateType: "loadstart", fullScreen: !1, handleType: "", currentTime: "00:00:00", preloadBar: 0, totalTime: "00:00:00", isVideoHovering: !0, speedActive: "1.0", playProgress: 0, isMultiplesPlay: !1, longPressTimeout: null, progressCursorTime: "00:00:00", qualityLevels: [], currentLevel: 0 })), b = (...w) => (O) => w.reverse().reduce((P, F) => F(P), O), v = Et.reduce((w, O) => {
    var P;
    return w[`on${P = O, P.charAt(0).toUpperCase() + P.slice(1)}`] = (F) => {
      a.loadStateType = O, f(O, F);
    }, w;
  }, {});
  v.onCanplay = b(v.onCanplay, () => {
    a.playBtnState != "play" && a.dVideo.play(), a.autoPlay && (a.dVideo.play(), a.playBtnState = "pause");
  }), v.onEnded = b(v.onEnded, () => {
    a.playBtnState = "replay";
  }), v.onDurationchange = (w) => {
    f("durationchange", w), D.currentTime != 0 && (a.dVideo.currentTime = D.currentTime), v.onTimeupdate(w);
  }, v.onProgress = (w) => {
    console.log("缓冲中..."), f("progress", w);
    let O = w.target.duration, P = w.target.buffered, F = w.target.buffered.length && w.target.buffered.end(P - 1);
    a.preloadBar = F / O;
  }, v.onTimeupdate = (w) => {
    f("timeupdate", w);
    let O = w.duration || w.target.duration || 0, P = w.currentTime || w.target.currentTime;
    a.playProgress = P / O, a.currentTime = st(P), a.totalTime = st(O);
  }, v.onError = b(v.onError, () => {
    a.playBtnState = "replay";
  });
  let h = Si();
  for (let w in h)
    v[w] = h[w];
  const E = (_ = a.color, `${parseInt("0x" + _.slice(1, 3))},${parseInt("0x" + _.slice(3, 5))},${parseInt("0x" + _.slice(5, 7))}`);
  var _;
  const l = _t(500, () => {
    a.handleType = "";
  }), e = (w) => {
    w.preventDefault(), w.code == "ArrowUp" ? a.volume = a.volume + 0.1 > 1 ? 1 : a.volume + 0.1 : a.volume = a.volume - 0.1 < 0 ? 0 : a.volume - 0.1, a.muted = !1, a.handleType = "volume", l();
  }, s = (w) => {
    D.speed && (a.dVideo.currentTime = a.dVideo.currentTime < 10 ? 0.1 : a.dVideo.currentTime - 10, v.onTimeupdate(a.dVideo), u());
  }, t = (w) => {
    w.preventDefault();
    let O = w.type;
    if (w.key == "ArrowRight") {
      if (u(), O == "keyup") {
        if (clearTimeout(a.longPressTimeout), !D.speed && !a.longPressTimeout)
          return;
        a.isMultiplesPlay ? (a.dVideo.playbackRate = a.speedActive, a.isMultiplesPlay = !1) : (a.dVideo.currentTime = a.dVideo.currentTime + 10, v.onTimeupdate(a.dVideo));
      } else if (O == "keydown") {
        if (!D.speed)
          return;
        a.isMultiplesPlay && clearTimeout(a.longPressTimeout), a.longPressTimeout = setTimeout(() => {
          a.isMultiplesPlay = !0, a.dVideo.playbackRate = 5, a.handleType = "playbackRate", l();
        }, 500);
      }
    }
  }, o = () => {
    et || L.value.focus();
  }, u = () => {
    a.loadStateType = "play", a.dVideo.play().catch(() => {
      setTimeout(() => {
        a.playBtnState = "replay", a.loadStateType = "error";
      }, 500);
    }), a.playBtnState = "pause";
  }, n = () => {
    a.dVideo.pause(), a.playBtnState = "play";
  }, c = (w) => {
    w && w.preventDefault(), a.playBtnState == "play" || a.playBtnState == "replay" ? u() : a.playBtnState == "pause" && n();
  }, p = () => {
    a.muted = !a.muted, a.volume == 0 && (a.volume = 0.05);
  }, m = (w, O) => {
    let P = a.dVideo.duration || a.dVideo.target.duration;
    a.dVideo.currentTime = P * O, a.playBtnState == "play" && (a.dVideo.play(), a.playBtnState = "pause");
  }, g = (w, O) => {
    a.progressCursorTime = st(a.dVideo.duration * O);
  }, i = _t(2500, () => {
    a.isVideoHovering = !1;
  }), r = (w) => {
    a.isVideoHovering = !0, i();
  }, d = (w) => {
    f("mirrorChange", w, a.dVideo);
  }, x = (w) => {
    f("loopChange", w, a.dVideo);
  }, T = (w) => {
    f("lightOffChange", w, a.dVideo);
  }, A = () => {
    var w;
    w = a.dVideo, document.pictureInPictureElement ? document.exitPictureInPicture().catch((O) => {
      console.log(O, "Video failed to leave Picture-in-Picture mode.");
    }) : w.requestPictureInPicture().catch((O) => {
      console.log(O, "Video failed to enter Picture-in-Picture mode.");
    });
  }, C = () => {
    a.fullScreen = ((w) => {
      let O = document, P = O.webkitIsFullScreen || O.fullscreen;
      return P ? (document.exitFullscreen || O.webkitExitFullScreen).call(O) : (w.requestFullscreen || w.webkitRequestFullScreen).call(w), !P;
    })(S.value);
  };
  return Xe(() => D.src, () => {
    tt(() => {
      a.dVideo.canPlayType(D.type) || a.dVideo.canPlayType("application/vnd.apple.mpegurl") ? a.muted = D.autoPlay : at.isSupported() && (y.detachMedia(), y.attachMedia(a.dVideo), y.on(at.Events.MEDIA_ATTACHED, () => {
        y.loadSource(D.src), y.on("hlsManifestParsed", (w, O) => {
          console.log(O), a.currentLevel = O.level, a.qualityLevels = O.levels || [];
        });
      }), y.on("hlsLevelSwitching", (w, O) => {
        console.log(O), console.log("LEVEL_SWITCHING");
      }), y.on("hlsLevelSwitched", (w, O) => {
        a.currentLevel = O.level, console.log("LEVEL_SWITCHED");
      }));
    });
  }, { immediate: !0 }), ht(() => {
    a.dVideo = k, o();
  }), I({ play: u, pause: n, togglePlay: c }), (w, O) => (W(), Q("div", { ref: S, id: "refPlayerWrap", class: Le(["d-player-wrap", { "web-full-screen": U(a).webFullScreen, "is-lightoff": U(a).lightOff, "d-player-wrap-hover": U(a).playBtnState == "play" || U(a).isVideoHovering }]), onMousemove: r }, [j("div", An, [j("video", At({ ref: k, class: ["d-player-video-main", { "video-mirror": U(a).mirror }], id: "dPlayerVideoMain", controls: !(!U(et) || !U(a).speed), "webkit-playsinline": D.playsinline, playsinline: D.playsinline }, U(v), { volume: U(a).volume, muted: U(a).muted, loop: U(a).loop, preload: w.preload, width: "100%", height: "100%", src: D.src, poster: D.poster }), "您的浏览器不支持Video标签。", 16, Dn)]), Y(ot, { name: "d-fade-in" }, { default: Z(() => [Ee(j("div", Rn, null, 512), [[be, U(a).lightOff]])]), _: 1 }), U(a).fullScreen ? (W(), me(Zi, { key: 0, title: D.title }, null, 8, ["title"])) : ne("", !0), U(et) ? ne("", !0) : (W(), Q("div", In, [Y(ot, { name: "d-scale-out" }, { default: Z(() => [Ee(j("div", wn, [Y(we, { icon: "icon-play", size: 40 })], 512), [[be, U(a).playBtnState == "play"]])]), _: 1 }), Y(Ct, { state: U(a) }, null, 8, ["state"])])), U(et) ? ne("", !0) : (W(), Q("input", { key: 2, type: "input", readonly: "readonly", ref: L, onDblclick: C, onKeyup: [Je(C, ["f"]), O[0] || (O[0] = Je((P) => U(a).webFullScreen = !1, ["esc"])), t], onClick: c, onKeydown: [Je(c, ["space"]), Je(s, ["arrow-left"]), Je(e, ["arrow-up", "arrow-down"]), t], class: "d-player-input", maxlength: "0" }, null, 40, Cn)), Y(Ot, { loadType: U(a).loadStateType }, null, 8, ["loadType"]), Y(Pt), !U(et) && U(a).control ? (W(), Q("div", { key: 3, class: "d-player-control", ref: R }, [j("div", On, [Y($e, { class: "d-progress-bar", onOnMousemove: g, onChange: m, disabled: !U(a).speed, hoverText: U(a).progressCursorTime, modelValue: U(a).playProgress, "onUpdate:modelValue": O[1] || (O[1] = (P) => U(a).playProgress = P), preload: U(a).preloadBar }, null, 8, ["disabled", "hoverText", "modelValue", "preload"])]), j("div", { class: "d-control-tool", onClick: o }, [j("div", Pn, [j("div", { class: "d-tool-item", onClick: c }, [Y(we, { size: "24", icon: `icon-${U(a).playBtnState}` }, null, 8, ["icon"])]), D.controlBtns.includes("audioTrack") ? (W(), Q("div", Fn, [j("span", null, J(U(a).currentTime), 1), Mn, j("span", Vn, J(U(a).totalTime), 1)])) : ne("", !0)]), j("div", Nn, [U(a).qualityLevels.length && D.controlBtns.includes("quality") ? (W(), Q("div", Bn, [ce(J(U(a).qualityLevels.length && (U(a).qualityLevels[U(a).currentLevel] || {}).height) + "P ", 1), j("div", Un, [j("ul", Gn, [(W(!0), Q(ke, null, Ne(U(a).qualityLevels, (P, F) => (W(), Q("li", { class: Le({ "speed-active": U(a).currentLevel == F }), onClick: (B) => ((N, M) => {
    y.currentLevel = M, a.currentLevel = M;
  })(0, F), key: P }, J(P.height) + "P", 11, jn))), 128))])])])) : ne("", !0), D.controlBtns.includes("speedRate") ? (W(), Q("div", Kn, [ce(J(U(a).speedActive == "1.0" ? "倍速" : U(a).speedActive + "x") + " ", 1), j("div", Hn, [j("ul", zn, [(W(!0), Q(ke, null, Ne(U(a).speedRate, (P) => (W(), Q("li", { class: Le({ "speed-active": U(a).speedActive == P }), onClick: (F) => ((B) => {
    a.speedActive = B, a.dVideo.playbackRate = B;
  })(P), key: P }, J(P) + "x", 11, Wn))), 128))])])])) : ne("", !0), D.controlBtns.includes("volume") ? (W(), Q("div", qn, [j("div", Yn, [j("div", { class: Le(["volume-main", { "is-muted": U(a).muted }]) }, [j("span", Xn, J(U(a).muted ? 0 : ~~(100 * U(a).volume)) + "%", 1), Y($e, { onChange: O[2] || (O[2] = (P) => U(a).muted = !1), hover: !1, size: "5px", vertical: !0, modelValue: U(a).volume, "onUpdate:modelValue": O[3] || (O[3] = (P) => U(a).volume = P) }, null, 8, ["modelValue"])], 2)]), j("span", { onClick: p, style: { display: "flex" } }, [Y(we, { size: "20", icon: "icon-volume-" + (U(a).volume == 0 || U(a).muted ? "mute" : U(a).volume > 0.5 ? "up" : "down") }, null, 8, ["icon"])])])) : ne("", !0), D.controlBtns.includes("setting") ? (W(), Q("div", $n, [Y(we, { size: "20", class: "rotateHover", icon: "icon-settings" }), j("div", Qn, [j("ul", Zn, [j("li", null, [Jn, Y(nt, { onChange: d, modelValue: U(a).mirror, "onUpdate:modelValue": O[4] || (O[4] = (P) => U(a).mirror = P) }, null, 8, ["modelValue"])]), j("li", null, [er, Y(nt, { onChange: x, modelValue: U(a).loop, "onUpdate:modelValue": O[5] || (O[5] = (P) => U(a).loop = P) }, null, 8, ["modelValue"])]), j("li", null, [tr, Y(nt, { onChange: T, modelValue: U(a).lightOff, "onUpdate:modelValue": O[6] || (O[6] = (P) => U(a).lightOff = P) }, null, 8, ["modelValue"])])])])])) : ne("", !0), D.controlBtns.includes("pip") ? (W(), Q("div", { key: 4, class: "d-tool-item pip-btn", onClick: A }, [Y(we, { size: "20", icon: "icon-pip" }), ir])) : ne("", !0), D.controlBtns.includes("pageFullScreen") ? (W(), Q("div", { key: 5, class: "d-tool-item pip-btn", onClick: O[7] || (O[7] = (P) => U(a).webFullScreen = !U(a).webFullScreen) }, [Y(we, { size: "20", icon: "icon-web-screen" }), nr])) : ne("", !0), D.controlBtns.includes("fullScreen") ? (W(), Q("div", { key: 6, class: "d-tool-item fullScreen-btn", onClick: C }, [rr, Y(we, { size: "20", icon: "icon-screen" })])) : ne("", !0)])])], 512)) : ne("", !0)], 34));
} }));
function ar(V) {
  V.component(it.name, it);
}
it.__scopeId = "data-v-01791e9e", it.install = ar;
const sr = /* @__PURE__ */ Ce({
  __name: "index",
  setup(V) {
    return (I, f) => (W(), me(U(it)));
  }
}), or = { class: "text-right mt-[15px]" }, lr = /* @__PURE__ */ Ce({
  __name: "index",
  props: {
    width: {
      type: String,
      default: "350px"
    },
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: !0
    },
    maxlength: {
      type: Number,
      default: 10
    }
  },
  emits: ["confirm"],
  setup(V, { emit: I }) {
    const f = V, D = Ae({
      get() {
        return f.modelValue;
      },
      set(k) {
        I("update:modelValue", k);
      }
    }), y = pe(!1), S = () => {
      if (!/[\S]+/.test(D.value)) {
        lt.error(f.placeholder || "不能为空");
        return;
      }
      I("confirm", D.value), y.value = !1;
    };
    return (k, R) => {
      const L = Tt, a = dt, b = oi;
      return W(), me(b, {
        placement: "top",
        trigger: "click",
        width: f.width,
        visible: y.value,
        "onUpdate:visible": R[2] || (R[2] = (v) => y.value = v)
      }, {
        reference: Z(() => [
          Dt(k.$slots, "default")
        ]),
        default: Z(() => [
          Y(L, {
            modelValue: U(D),
            "onUpdate:modelValue": R[0] || (R[0] = (v) => Li(D) ? D.value = v : null),
            placeholder: f.placeholder,
            clearable: "",
            class: "mr-[10px]",
            maxlength: f.maxlength,
            "show-word-limit": !0
          }, null, 8, ["modelValue", "placeholder", "maxlength"]),
          j("div", or, [
            Y(a, {
              onClick: R[1] || (R[1] = (v) => y.value = !1)
            }, {
              default: Z(() => [
                ce(J(U(ee)("cancel")), 1)
              ]),
              _: 1
            }),
            Y(a, {
              type: "primary",
              onClick: S
            }, {
              default: Z(() => [
                ce(J(U(ee)("confirm")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 8, ["width", "visible"]);
    };
  }
}), Ft = "4412516", Mt = "上门服务", Vt = "o2o", Nt = "o2o-icon-", Bt = "", Ut = [
  {
    icon_id: "30621139",
    name: "单行滑动",
    font_class: "danhanghuadong",
    unicode: "e66f",
    unicode_decimal: 58991
  },
  {
    icon_id: "7149037",
    name: "圆角",
    font_class: "yuanjiao",
    unicode: "e6c0",
    unicode_decimal: 59072
  },
  {
    icon_id: "7594344",
    name: "20gl-square",
    font_class: "gl-square",
    unicode: "ea92",
    unicode_decimal: 60050
  },
  {
    icon_id: "10133070",
    name: "搜索",
    font_class: "sousuo12",
    unicode: "e699",
    unicode_decimal: 59033
  },
  {
    icon_id: "14652583",
    name: "搜索",
    font_class: "sousuo11",
    unicode: "e6d4",
    unicode_decimal: 59092
  },
  {
    icon_id: "6818781",
    name: "技师",
    font_class: "jishi",
    unicode: "e600",
    unicode_decimal: 58880
  }
], cr = {
  id: Ft,
  name: Mt,
  font_family: Vt,
  css_prefix_text: Nt,
  description: Bt,
  glyphs: Ut
}, ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css_prefix_text: Nt,
  default: cr,
  description: Bt,
  font_family: Vt,
  glyphs: Ut,
  id: Ft,
  name: Mt
}, Symbol.toStringTag, { value: "Module" })), Gt = "4412516", jt = "上门服务", Kt = "o2o", Ht = "o2o-icon-", zt = "", Wt = [
  {
    icon_id: "30621139",
    name: "单行滑动",
    font_class: "danhanghuadong",
    unicode: "e66f",
    unicode_decimal: 58991
  },
  {
    icon_id: "7149037",
    name: "圆角",
    font_class: "yuanjiao",
    unicode: "e6c0",
    unicode_decimal: 59072
  },
  {
    icon_id: "7594344",
    name: "20gl-square",
    font_class: "gl-square",
    unicode: "ea92",
    unicode_decimal: 60050
  },
  {
    icon_id: "10133070",
    name: "搜索",
    font_class: "sousuo12",
    unicode: "e699",
    unicode_decimal: 59033
  },
  {
    icon_id: "14652583",
    name: "搜索",
    font_class: "sousuo11",
    unicode: "e6d4",
    unicode_decimal: 59092
  },
  {
    icon_id: "6818781",
    name: "技师",
    font_class: "jishi",
    unicode: "e600",
    unicode_decimal: 58880
  }
], dr = {
  id: Gt,
  name: jt,
  font_family: Kt,
  css_prefix_text: Ht,
  description: zt,
  glyphs: Wt
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css_prefix_text: Ht,
  default: dr,
  description: zt,
  font_family: Kt,
  glyphs: Wt,
  id: Gt,
  name: jt
}, Symbol.toStringTag, { value: "Module" })), qt = "4137250", Yt = "旅游业", Xt = "tourism", $t = "tourism-icon-", Qt = "", Zt = [
  {
    icon_id: "1443",
    name: "飞机",
    font_class: "feiji",
    unicode: "e600",
    unicode_decimal: 58880
  },
  {
    icon_id: "446824",
    name: "旅游",
    font_class: "lvyou",
    unicode: "e6a9",
    unicode_decimal: 59049
  },
  {
    icon_id: "1167173",
    name: "旅游产品",
    font_class: "lvyouchanpin",
    unicode: "e63b",
    unicode_decimal: 58939
  },
  {
    icon_id: "1354920",
    name: "旅游",
    font_class: "lvyou1",
    unicode: "e623",
    unicode_decimal: 58915
  },
  {
    icon_id: "1505555",
    name: "旅游",
    font_class: "lvyou2",
    unicode: "e601",
    unicode_decimal: 58881
  },
  {
    icon_id: "2121726",
    name: "旅游",
    font_class: "lvyou3",
    unicode: "e60c",
    unicode_decimal: 58892
  },
  {
    icon_id: "2357494",
    name: "旅游包车订单",
    font_class: "lvyoubaochedingdan",
    unicode: "e612",
    unicode_decimal: 58898
  },
  {
    icon_id: "3944019",
    name: "旅游",
    font_class: "lvyou4",
    unicode: "e653",
    unicode_decimal: 58963
  },
  {
    icon_id: "4838220",
    name: "旅游",
    font_class: "lvyou5",
    unicode: "e610",
    unicode_decimal: 58896
  },
  {
    icon_id: "7444178",
    name: "旅游观光",
    font_class: "lvyouguanguang",
    unicode: "e87e",
    unicode_decimal: 59518
  },
  {
    icon_id: "9748082",
    name: "旅游",
    font_class: "lvyou6",
    unicode: "e642",
    unicode_decimal: 58946
  }
], hr = {
  id: qt,
  name: Yt,
  font_family: Xt,
  css_prefix_text: $t,
  description: Qt,
  glyphs: Zt
}, mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css_prefix_text: $t,
  default: hr,
  description: Qt,
  font_family: Xt,
  glyphs: Zt,
  id: qt,
  name: Yt
}, Symbol.toStringTag, { value: "Module" })), Jt = "4567203", ei = "系统", ti = "nc-iconfont", ii = "nc-icon-", ni = "系统图标", ri = [
  {
    icon_id: "40606187",
    name: "会员等级V6xx",
    font_class: "huiyuandengjiV6xx1",
    unicode: "e761",
    unicode_decimal: 59233
  },
  {
    icon_id: "40609384",
    name: "个人中心V6xx",
    font_class: "gerenzhongxinV6xx",
    unicode: "e762",
    unicode_decimal: 59234
  },
  {
    icon_id: "40609386",
    name: "个人中心V6mm",
    font_class: "gerenzhongxinV6mm1",
    unicode: "e763",
    unicode_decimal: 59235
  },
  {
    icon_id: "40613812",
    name: "床V6xx",
    font_class: "chuangV6xx",
    unicode: "e764",
    unicode_decimal: 59236
  },
  {
    icon_id: "40613814",
    name: "足迹V6xx",
    font_class: "zujiV6xx",
    unicode: "e765",
    unicode_decimal: 59237
  },
  {
    icon_id: "40613873",
    name: "购物车V6xx",
    font_class: "gouwucheV6xx2",
    unicode: "e766",
    unicode_decimal: 59238
  },
  {
    icon_id: "40614619",
    name: "点赞V6mm",
    font_class: "dianzanV6mm",
    unicode: "e767",
    unicode_decimal: 59239
  },
  {
    icon_id: "40614621",
    name: "拼团V6xx",
    font_class: "pintuanV6xx",
    unicode: "e768",
    unicode_decimal: 59240
  },
  {
    icon_id: "40615664",
    name: "拼团V6mm",
    font_class: "pintuanV6mm",
    unicode: "e769",
    unicode_decimal: 59241
  },
  {
    icon_id: "40615759",
    name: "足迹V6mm",
    font_class: "zujiV6mm1",
    unicode: "e76b",
    unicode_decimal: 59243
  },
  {
    icon_id: "40616434",
    name: "定位V6mm",
    font_class: "dingweiV6mm",
    unicode: "e76f",
    unicode_decimal: 59247
  },
  {
    icon_id: "40616436",
    name: "定位V6mm-2",
    font_class: "dingweiV6mm-2",
    unicode: "e76d",
    unicode_decimal: 59245
  },
  {
    icon_id: "40605099",
    name: "笑脸-2",
    font_class: "xiaolian-2",
    unicode: "e6e8",
    unicode_decimal: 59112
  },
  {
    icon_id: "40605100",
    name: "笑脸-1",
    font_class: "xiaolian-1",
    unicode: "e6e9",
    unicode_decimal: 59113
  },
  {
    icon_id: "40587255",
    name: "搜索-短V6xx",
    font_class: "sousuo-duanV6xx1",
    unicode: "e6f1",
    unicode_decimal: 59121
  },
  {
    icon_id: "40584987",
    name: "删除-圆盖直V6xx",
    font_class: "shanchu-yuangaizhiV6xx",
    unicode: "e6e7",
    unicode_decimal: 59111
  },
  {
    icon_id: "40585348",
    name: "定位V6xx",
    font_class: "dingweiV6xx1",
    unicode: "e6f0",
    unicode_decimal: 59120
  },
  {
    icon_id: "40585349",
    name: "定位V6xx-1",
    font_class: "dingweiV6xx-1",
    unicode: "e6ef",
    unicode_decimal: 59119
  },
  {
    icon_id: "40582714",
    name: "搜索V6xx",
    font_class: "sousuoV6xx1",
    unicode: "e6e5",
    unicode_decimal: 59109
  },
  {
    icon_id: "40582715",
    name: "搜索-短V6xx",
    font_class: "sousuo-duanV6xx",
    unicode: "e6e4",
    unicode_decimal: 59108
  },
  {
    icon_id: "40582755",
    name: "购物车V6mm",
    font_class: "gouwucheV6mm1",
    unicode: "e6e3",
    unicode_decimal: 59107
  },
  {
    icon_id: "40582798",
    name: "购物车V6xx",
    font_class: "gouwucheV6xx1",
    unicode: "e6e2",
    unicode_decimal: 59106
  },
  {
    icon_id: "40583279",
    name: "定位V6xx",
    font_class: "dingweiV6xx",
    unicode: "e6e6",
    unicode_decimal: 59110
  },
  {
    icon_id: "40574653",
    name: "余额V6xx",
    font_class: "yueV6xx1",
    unicode: "e641",
    unicode_decimal: 58945
  },
  {
    icon_id: "40574650",
    name: "优惠V6xx",
    font_class: "youhuiV6xx1",
    unicode: "e642",
    unicode_decimal: 58946
  },
  {
    icon_id: "40574651",
    name: "设置-1V6xx",
    font_class: "shezhi-1V6xx",
    unicode: "e643",
    unicode_decimal: 58947
  },
  {
    icon_id: "40574652",
    name: "优惠券V6xx",
    font_class: "youhuiquanV6xx1",
    unicode: "e644",
    unicode_decimal: 58948
  },
  {
    icon_id: "40574648",
    name: "优惠券V6xx-1",
    font_class: "youhuiquanV6xx-11",
    unicode: "e645",
    unicode_decimal: 58949
  },
  {
    icon_id: "40574649",
    name: "我的收藏V6xx",
    font_class: "wodeshoucangV6xx1",
    unicode: "e646",
    unicode_decimal: 58950
  },
  {
    icon_id: "40574646",
    name: "收藏V6xx-1",
    font_class: "shoucangV6xx-11",
    unicode: "e647",
    unicode_decimal: 58951
  },
  {
    icon_id: "40574637",
    name: "编辑V6xx",
    font_class: "bianjiV6xx",
    unicode: "e648",
    unicode_decimal: 58952
  },
  {
    icon_id: "40574647",
    name: "退款V6xx",
    font_class: "tuikuanV6xx1",
    unicode: "e649",
    unicode_decimal: 58953
  },
  {
    icon_id: "40574643",
    name: "文档V6xx",
    font_class: "wendangV6xx1",
    unicode: "e64a",
    unicode_decimal: 58954
  },
  {
    icon_id: "40574641",
    name: "筛选V6xx",
    font_class: "shaixuanV6xx1",
    unicode: "e64b",
    unicode_decimal: 58955
  },
  {
    icon_id: "40574636",
    name: "积分兑换V6xx",
    font_class: "jifenduihuanV6xx1",
    unicode: "e64c",
    unicode_decimal: 58956
  },
  {
    icon_id: "40574633",
    name: "分享V6xx",
    font_class: "fenxiangV6xx1",
    unicode: "e64d",
    unicode_decimal: 58957
  },
  {
    icon_id: "40574642",
    name: "收藏V6xx",
    font_class: "shoucangV6xx1",
    unicode: "e64e",
    unicode_decimal: 58958
  },
  {
    icon_id: "40574640",
    name: "链接V6xx",
    font_class: "lianjieV6xx1",
    unicode: "e64f",
    unicode_decimal: 58959
  },
  {
    icon_id: "40574639",
    name: "设置V6xx",
    font_class: "shezhiV6xx1",
    unicode: "e650",
    unicode_decimal: 58960
  },
  {
    icon_id: "40574634",
    name: "分销V6xx",
    font_class: "fenxiaoV6xx1",
    unicode: "e651",
    unicode_decimal: 58961
  },
  {
    icon_id: "40574629",
    name: "查看V6xx",
    font_class: "chakanV6xx",
    unicode: "e653",
    unicode_decimal: 58963
  },
  {
    icon_id: "40574863",
    name: "我的等级V6xx",
    font_class: "wodedengjiV6xx1",
    unicode: "e652",
    unicode_decimal: 58962
  },
  {
    icon_id: "40574862",
    name: "短信V6xx",
    font_class: "duanxinV6xx1",
    unicode: "e654",
    unicode_decimal: 58964
  },
  {
    icon_id: "40574861",
    name: "列表V6xx",
    font_class: "liebiaoV6xx",
    unicode: "e655",
    unicode_decimal: 58965
  },
  {
    icon_id: "40574860",
    name: "标签V6xx",
    font_class: "biaoqianV6xx1",
    unicode: "e656",
    unicode_decimal: 58966
  },
  {
    icon_id: "40574859",
    name: "入住人V6xx",
    font_class: "ruzhurenV6xx",
    unicode: "e657",
    unicode_decimal: 58967
  },
  {
    icon_id: "40575573",
    name: "修改V6xx",
    font_class: "xiugaiV6xx",
    unicode: "e658",
    unicode_decimal: 58968
  },
  {
    icon_id: "40575574",
    name: "编辑V6xx",
    font_class: "bianjiV6xx1",
    unicode: "e659",
    unicode_decimal: 58969
  },
  {
    icon_id: "40575910",
    name: "首页V6xx",
    font_class: "shouyeV6xx1",
    unicode: "e65a",
    unicode_decimal: 58970
  },
  {
    icon_id: "40575927",
    name: "帮助V6mm",
    font_class: "bangzhuV6mm",
    unicode: "e65b",
    unicode_decimal: 58971
  },
  {
    icon_id: "40575926",
    name: "叹号V6mm-1",
    font_class: "tanhaoV6mm-1",
    unicode: "e65c",
    unicode_decimal: 58972
  },
  {
    icon_id: "40575925",
    name: "帮助V6mm-1",
    font_class: "bangzhuV6mm-1",
    unicode: "e65d",
    unicode_decimal: 58973
  },
  {
    icon_id: "40575922",
    name: "叹号V6mm",
    font_class: "tanhaoV6mm",
    unicode: "e65e",
    unicode_decimal: 58974
  },
  {
    icon_id: "40575924",
    name: "注意V6mm",
    font_class: "zhuyiV6mm",
    unicode: "e65f",
    unicode_decimal: 58975
  },
  {
    icon_id: "40575923",
    name: "添加V6mm",
    font_class: "tianjiaV6mm",
    unicode: "e660",
    unicode_decimal: 58976
  },
  {
    icon_id: "40575921",
    name: "对号V6mm",
    font_class: "duihaoV6mm",
    unicode: "e661",
    unicode_decimal: 58977
  },
  {
    icon_id: "40575920",
    name: "减少V6mm",
    font_class: "jianshaoV6mm",
    unicode: "e662",
    unicode_decimal: 58978
  },
  {
    icon_id: "40575919",
    name: "错号V6mm",
    font_class: "cuohaoV6mm",
    unicode: "e663",
    unicode_decimal: 58979
  },
  {
    icon_id: "40575969",
    name: "购物车V6mm-1",
    font_class: "gouwucheV6mm-1",
    unicode: "e664",
    unicode_decimal: 58980
  },
  {
    icon_id: "40575967",
    name: "历史记录V6mm",
    font_class: "lishijiluV6mm",
    unicode: "e665",
    unicode_decimal: 58981
  },
  {
    icon_id: "40575968",
    name: "加盟V6mm",
    font_class: "jiamengV6mm",
    unicode: "e666",
    unicode_decimal: 58982
  },
  {
    icon_id: "40575965",
    name: "核销台V6mm",
    font_class: "hexiaotaiV6mm",
    unicode: "e667",
    unicode_decimal: 58983
  },
  {
    icon_id: "40575961",
    name: "应用中心V6mm",
    font_class: "yingyongzhongxinV6mm",
    unicode: "e668",
    unicode_decimal: 58984
  },
  {
    icon_id: "40575966",
    name: "交换V6mm",
    font_class: "jiaohuanV6mm",
    unicode: "e669",
    unicode_decimal: 58985
  },
  {
    icon_id: "40575964",
    name: "购物车V6mm",
    font_class: "gouwucheV6mm",
    unicode: "e66a",
    unicode_decimal: 58986
  },
  {
    icon_id: "40575963",
    name: "应用中心V6mm-1",
    font_class: "yingyongzhongxinV6mm-1",
    unicode: "e66b",
    unicode_decimal: 58987
  },
  {
    icon_id: "40575962",
    name: "分类V6mm",
    font_class: "fenleiV6mm",
    unicode: "e66c",
    unicode_decimal: 58988
  },
  {
    icon_id: "40575957",
    name: "列表V6mm",
    font_class: "liebiaoV6mm",
    unicode: "e66d",
    unicode_decimal: 58989
  },
  {
    icon_id: "40575960",
    name: "应用V6mm",
    font_class: "yingyongV6mm",
    unicode: "e66e",
    unicode_decimal: 58990
  },
  {
    icon_id: "40575959",
    name: "应用列表V6mm",
    font_class: "yingyongliebiaoV6mm",
    unicode: "e66f",
    unicode_decimal: 58991
  },
  {
    icon_id: "40575956",
    name: "向右V6mm",
    font_class: "xiangyouV6mm",
    unicode: "e670",
    unicode_decimal: 58992
  },
  {
    icon_id: "40575958",
    name: "向左V6mm",
    font_class: "xiangzuoV6mm",
    unicode: "e671",
    unicode_decimal: 58993
  },
  {
    icon_id: "40575954",
    name: "入住人V6mm",
    font_class: "ruzhurenV6mm",
    unicode: "e672",
    unicode_decimal: 58994
  },
  {
    icon_id: "40575955",
    name: "向下V6mm",
    font_class: "xiangxiaV6mm",
    unicode: "e673",
    unicode_decimal: 58995
  },
  {
    icon_id: "40575953",
    name: "向上V6mm",
    font_class: "xiangshangV6mm",
    unicode: "e674",
    unicode_decimal: 58996
  },
  {
    icon_id: "40575952",
    name: "首页V6mm",
    font_class: "shouyeV6mm",
    unicode: "e675",
    unicode_decimal: 58997
  },
  {
    icon_id: "40576029",
    name: "设置V6mm-2",
    font_class: "shezhiV6mm-2",
    unicode: "e676",
    unicode_decimal: 58998
  },
  {
    icon_id: "40576035",
    name: "邮件V6mm",
    font_class: "youjianV6mm",
    unicode: "e677",
    unicode_decimal: 58999
  },
  {
    icon_id: "40576034",
    name: "消息V6mm",
    font_class: "xiaoxiV6mm",
    unicode: "e678",
    unicode_decimal: 59e3
  },
  {
    icon_id: "40576033",
    name: "信息V6mm",
    font_class: "xinxiV6mm",
    unicode: "e679",
    unicode_decimal: 59001
  },
  {
    icon_id: "40576028",
    name: "我V6mm",
    font_class: "woV6mm",
    unicode: "e67a",
    unicode_decimal: 59002
  },
  {
    icon_id: "40576024",
    name: "设置V6mm",
    font_class: "shezhiV6mm",
    unicode: "e67b",
    unicode_decimal: 59003
  },
  {
    icon_id: "40576026",
    name: "我的V6mm",
    font_class: "wodeV6mm",
    unicode: "e67c",
    unicode_decimal: 59004
  },
  {
    icon_id: "40576023",
    name: "设置V6mm-1",
    font_class: "shezhiV6mm-1",
    unicode: "e67d",
    unicode_decimal: 59005
  },
  {
    icon_id: "40576017",
    name: "客服V6mm-1",
    font_class: "kefuV6mm-1",
    unicode: "e67e",
    unicode_decimal: 59006
  },
  {
    icon_id: "40576019",
    name: "客服-话筒V6mm",
    font_class: "kefu-huatongV6mm",
    unicode: "e67f",
    unicode_decimal: 59007
  },
  {
    icon_id: "40576022",
    name: "求职人员V6mm",
    font_class: "qiuzhirenyuanV6mm",
    unicode: "e680",
    unicode_decimal: 59008
  },
  {
    icon_id: "40576020",
    name: "票信息V6mm",
    font_class: "piaoxinxiV6mm",
    unicode: "e681",
    unicode_decimal: 59009
  },
  {
    icon_id: "40576021",
    name: "联系客服V6mm",
    font_class: "lianxikefuV6mm",
    unicode: "e682",
    unicode_decimal: 59010
  },
  {
    icon_id: "40576018",
    name: "客服-耳机V6mm",
    font_class: "kefu-erjiV6mm",
    unicode: "e683",
    unicode_decimal: 59011
  },
  {
    icon_id: "40576011",
    name: "点信息V6mm",
    font_class: "dianxinxiV6mm",
    unicode: "e684",
    unicode_decimal: 59012
  },
  {
    icon_id: "40576016",
    name: "客服V6mm-2",
    font_class: "kefuV6mm-2",
    unicode: "e685",
    unicode_decimal: 59013
  },
  {
    icon_id: "40576012",
    name: "短信V6mm-1",
    font_class: "duanxinV6mm-1",
    unicode: "e686",
    unicode_decimal: 59014
  },
  {
    icon_id: "40576015",
    name: "个人中心V6mm",
    font_class: "gerenzhongxinV6mm",
    unicode: "e687",
    unicode_decimal: 59015
  },
  {
    icon_id: "40576014",
    name: "客服V6mm",
    font_class: "kefuV6mm",
    unicode: "e688",
    unicode_decimal: 59016
  },
  {
    icon_id: "40576013",
    name: "分享V6mm",
    font_class: "fenxiangV6mm",
    unicode: "e689",
    unicode_decimal: 59017
  },
  {
    icon_id: "40576010",
    name: "短信V6mm",
    font_class: "duanxinV6mm",
    unicode: "e68a",
    unicode_decimal: 59018
  },
  {
    icon_id: "40576102",
    name: "相机V6mm-1",
    font_class: "xiangjiV6mm-1",
    unicode: "e68b",
    unicode_decimal: 59019
  },
  {
    icon_id: "40576105",
    name: "我的V6mm",
    font_class: "wodeV6mm1",
    unicode: "e68c",
    unicode_decimal: 59020
  },
  {
    icon_id: "40576104",
    name: "刷新V6mm",
    font_class: "shuaxinV6mm",
    unicode: "e68d",
    unicode_decimal: 59021
  },
  {
    icon_id: "40576103",
    name: "相机V6mm",
    font_class: "xiangjiV6mm",
    unicode: "e68e",
    unicode_decimal: 59022
  },
  {
    icon_id: "40576101",
    name: "搜索V6mm",
    font_class: "sousuoV6mm",
    unicode: "e68f",
    unicode_decimal: 59023
  },
  {
    icon_id: "40576144",
    name: "收藏V6mm-1",
    font_class: "shoucangV6mm-1",
    unicode: "e690",
    unicode_decimal: 59024
  },
  {
    icon_id: "40576143",
    name: "喜欢V6mm",
    font_class: "xihuanV6mm",
    unicode: "e691",
    unicode_decimal: 59025
  },
  {
    icon_id: "40576142",
    name: "我的收藏V6mm",
    font_class: "wodeshoucangV6mm",
    unicode: "e692",
    unicode_decimal: 59026
  },
  {
    icon_id: "40576140",
    name: "时钟V6mm",
    font_class: "shizhongV6mm",
    unicode: "e693",
    unicode_decimal: 59027
  },
  {
    icon_id: "40576141",
    name: "收藏V6mm",
    font_class: "shoucangV6mm",
    unicode: "e694",
    unicode_decimal: 59028
  },
  {
    icon_id: "40576139",
    name: "闹铃V6mm",
    font_class: "naolingV6mm",
    unicode: "e695",
    unicode_decimal: 59029
  },
  {
    icon_id: "40576138",
    name: "时间V6mm",
    font_class: "shijianV6mm",
    unicode: "e696",
    unicode_decimal: 59030
  },
  {
    icon_id: "40576137",
    name: "闹钟V6mm",
    font_class: "naozhongV6mm",
    unicode: "e697",
    unicode_decimal: 59031
  },
  {
    icon_id: "40576135",
    name: "标签V6mm",
    font_class: "biaoqianV6mm",
    unicode: "e698",
    unicode_decimal: 59032
  },
  {
    icon_id: "40576136",
    name: "铃铛V6mm",
    font_class: "lingdangV6mm",
    unicode: "e699",
    unicode_decimal: 59033
  },
  {
    icon_id: "40576131",
    name: "标签V6mm-1",
    font_class: "biaoqianV6mm-1",
    unicode: "e69a",
    unicode_decimal: 59034
  },
  {
    icon_id: "40576133",
    name: "历史记录V6mm",
    font_class: "lishijiluV6mm1",
    unicode: "e69b",
    unicode_decimal: 59035
  },
  {
    icon_id: "40576134",
    name: "待发货V6mm",
    font_class: "daifahuoV6mm",
    unicode: "e69c",
    unicode_decimal: 59036
  },
  {
    icon_id: "40576132",
    name: "记事本V6mm",
    font_class: "jishibenV6mm",
    unicode: "e69d",
    unicode_decimal: 59037
  },
  {
    icon_id: "40576130",
    name: "便签V6mm",
    font_class: "bianqianV6mm",
    unicode: "e69e",
    unicode_decimal: 59038
  },
  {
    icon_id: "40576129",
    name: "编辑V6mm",
    font_class: "bianjiV6mm",
    unicode: "e69f",
    unicode_decimal: 59039
  },
  {
    icon_id: "40576127",
    name: "笔记V6mm",
    font_class: "bijiV6mm",
    unicode: "e6a0",
    unicode_decimal: 59040
  },
  {
    icon_id: "40576128",
    name: "笔记V6mm-1",
    font_class: "bijiV6mm-1",
    unicode: "e6a1",
    unicode_decimal: 59041
  },
  {
    icon_id: "40576163",
    name: "优惠券V6mm",
    font_class: "youhuiquanV6mm",
    unicode: "e6a2",
    unicode_decimal: 59042
  },
  {
    icon_id: "40576161",
    name: "优惠V6mm",
    font_class: "youhuiV6mm",
    unicode: "e6a3",
    unicode_decimal: 59043
  },
  {
    icon_id: "40576162",
    name: "商城V6mm",
    font_class: "shangchengV6mm",
    unicode: "e6a4",
    unicode_decimal: 59044
  },
  {
    icon_id: "40576159",
    name: "折扣券V6mm",
    font_class: "zhekouquanV6mm",
    unicode: "e6a5",
    unicode_decimal: 59045
  },
  {
    icon_id: "40576158",
    name: "优惠券V6mm-1",
    font_class: "youhuiquanV6mm-1",
    unicode: "e6a6",
    unicode_decimal: 59046
  },
  {
    icon_id: "40576160",
    name: "余额V6mm",
    font_class: "yueV6mm",
    unicode: "e6a7",
    unicode_decimal: 59047
  },
  {
    icon_id: "40576157",
    name: "钱包余额V6mm",
    font_class: "qianbaoyueV6mm",
    unicode: "e6a8",
    unicode_decimal: 59048
  },
  {
    icon_id: "40576156",
    name: "钱包V6mm",
    font_class: "qianbaoV6mm",
    unicode: "e6a9",
    unicode_decimal: 59049
  },
  {
    icon_id: "40576154",
    name: "礼物V6mm",
    font_class: "liwuV6mm",
    unicode: "e6aa",
    unicode_decimal: 59050
  },
  {
    icon_id: "40576155",
    name: "积分兑换V6mm",
    font_class: "jifenduihuanV6mm",
    unicode: "e6ab",
    unicode_decimal: 59051
  },
  {
    icon_id: "40576152",
    name: "标签V6mm",
    font_class: "biaoqianV6mm1",
    unicode: "e6ac",
    unicode_decimal: 59052
  },
  {
    icon_id: "40576153",
    name: "礼包V6mm",
    font_class: "libaoV6mm",
    unicode: "e6ad",
    unicode_decimal: 59053
  },
  {
    icon_id: "40576151",
    name: "金融V6mm",
    font_class: "jinrongV6mm",
    unicode: "e6ae",
    unicode_decimal: 59054
  },
  {
    icon_id: "40576180",
    name: "我的推广V6mm",
    font_class: "wodetuiguangV6mm",
    unicode: "e6af",
    unicode_decimal: 59055
  },
  {
    icon_id: "40576179",
    name: "我的等级V6mm",
    font_class: "wodedengjiV6mm",
    unicode: "e6b0",
    unicode_decimal: 59056
  },
  {
    icon_id: "40576178",
    name: "推广V6mm",
    font_class: "tuiguangV6mm",
    unicode: "e6b1",
    unicode_decimal: 59057
  },
  {
    icon_id: "40576177",
    name: "银行卡V6mm",
    font_class: "yinhangkaV6mm",
    unicode: "e6b2",
    unicode_decimal: 59058
  },
  {
    icon_id: "40576175",
    name: "会员等级V6mm",
    font_class: "huiyuandengjiV6mm",
    unicode: "e6b3",
    unicode_decimal: 59059
  },
  {
    icon_id: "40576176",
    name: "每日签到V6mm",
    font_class: "meiriqiandaoV6mm",
    unicode: "e6b4",
    unicode_decimal: 59060
  },
  {
    icon_id: "40576169",
    name: "待发货V6mm",
    font_class: "daifahuoV6mm1",
    unicode: "e6b5",
    unicode_decimal: 59061
  },
  {
    icon_id: "40576174",
    name: "日历V6mm",
    font_class: "riliV6mm",
    unicode: "e6b6",
    unicode_decimal: 59062
  },
  {
    icon_id: "40576173",
    name: "待发货V6mm-1",
    font_class: "daifahuoV6mm-1",
    unicode: "e6b7",
    unicode_decimal: 59063
  },
  {
    icon_id: "40576172",
    name: "分销V6mm",
    font_class: "fenxiaoV6mm",
    unicode: "e6b8",
    unicode_decimal: 59064
  },
  {
    icon_id: "40576171",
    name: "待收货V6mm",
    font_class: "daishouhuoV6mm",
    unicode: "e6b9",
    unicode_decimal: 59065
  },
  {
    icon_id: "40576170",
    name: "地址V6mm",
    font_class: "dizhiV6mm",
    unicode: "e6ba",
    unicode_decimal: 59066
  },
  {
    icon_id: "40576203",
    name: "链接V6mm",
    font_class: "lianjieV6mm",
    unicode: "e6bb",
    unicode_decimal: 59067
  },
  {
    icon_id: "40576202",
    name: "电话V6mm",
    font_class: "dianhuaV6mm",
    unicode: "e6bc",
    unicode_decimal: 59068
  },
  {
    icon_id: "40576201",
    name: "积分V6mm",
    font_class: "jifenV6mm",
    unicode: "e6bd",
    unicode_decimal: 59069
  },
  {
    icon_id: "40576200",
    name: "核销台V6mm",
    font_class: "hexiaotaiV6mm1",
    unicode: "e6be",
    unicode_decimal: 59070
  },
  {
    icon_id: "40576199",
    name: "扫码V6mm",
    font_class: "saomaV6mm",
    unicode: "e6bf",
    unicode_decimal: 59071
  },
  {
    icon_id: "40576197",
    name: "交换V6mm",
    font_class: "jiaohuanV6mm1",
    unicode: "e6c0",
    unicode_decimal: 59072
  },
  {
    icon_id: "40576198",
    name: "扩展V6mm",
    font_class: "kuozhanV6mm",
    unicode: "e6c1",
    unicode_decimal: 59073
  },
  {
    icon_id: "40576196",
    name: "楼层V6mm",
    font_class: "loucengV6mm",
    unicode: "e6c2",
    unicode_decimal: 59074
  },
  {
    icon_id: "40576194",
    name: "二维码V6mm-1",
    font_class: "erweimaV6mm-1",
    unicode: "e6c3",
    unicode_decimal: 59075
  },
  {
    icon_id: "40576193",
    name: "复制V6mm",
    font_class: "fuzhiV6mm",
    unicode: "e6c4",
    unicode_decimal: 59076
  },
  {
    icon_id: "40576195",
    name: "二维码V6mm",
    font_class: "erweimaV6mm",
    unicode: "e6c5",
    unicode_decimal: 59077
  },
  {
    icon_id: "40576189",
    name: "长箭头V6mm",
    font_class: "changjiantouV6mm",
    unicode: "e6c6",
    unicode_decimal: 59078
  },
  {
    icon_id: "40576192",
    name: "足迹V6mm",
    font_class: "zujiV6mm",
    unicode: "e6c7",
    unicode_decimal: 59079
  },
  {
    icon_id: "40576191",
    name: "查看V6mm",
    font_class: "chakanV6mm",
    unicode: "e6c8",
    unicode_decimal: 59080
  },
  {
    icon_id: "40576186",
    name: "每日签到V6mm",
    font_class: "meiriqiandaoV6mm1",
    unicode: "e6c9",
    unicode_decimal: 59081
  },
  {
    icon_id: "40576190",
    name: "笔记V6mm",
    font_class: "bijiV6mm1",
    unicode: "e6ca",
    unicode_decimal: 59082
  },
  {
    icon_id: "40576187",
    name: "上下箭头V6mm",
    font_class: "shangxiajiantouV6mm",
    unicode: "e6cb",
    unicode_decimal: 59083
  },
  {
    icon_id: "40576188",
    name: "条形码V6mm",
    font_class: "tiaoxingmaV6mm",
    unicode: "e6cc",
    unicode_decimal: 59084
  },
  {
    icon_id: "40576315",
    name: "下一步V6xx",
    font_class: "xiayibuV6xx",
    unicode: "e6cd",
    unicode_decimal: 59085
  },
  {
    icon_id: "40576312",
    name: "对V6mm",
    font_class: "duiV6mm",
    unicode: "e6ce",
    unicode_decimal: 59086
  },
  {
    icon_id: "40576314",
    name: "上一步V6xx",
    font_class: "shangyibuV6xx",
    unicode: "e6cf",
    unicode_decimal: 59087
  },
  {
    icon_id: "40576321",
    name: "联系电话V6mm",
    font_class: "lianxidianhuaV6mm",
    unicode: "e6d0",
    unicode_decimal: 59088
  },
  {
    icon_id: "40576319",
    name: "联系电话V6xx",
    font_class: "lianxidianhuaV6xx",
    unicode: "e6d1",
    unicode_decimal: 59089
  },
  {
    icon_id: "40576318",
    name: "对V6xx",
    font_class: "duiV6xx",
    unicode: "e6d2",
    unicode_decimal: 59090
  },
  {
    icon_id: "40576387",
    name: "朋友圈V6mm-1",
    font_class: "pengyouquanV6mm-1",
    unicode: "e6d3",
    unicode_decimal: 59091
  },
  {
    icon_id: "40576390",
    name: "支付宝-圆V6mm",
    font_class: "zhifubao-yuanV6mm",
    unicode: "e6d4",
    unicode_decimal: 59092
  },
  {
    icon_id: "40576388",
    name: "微信V6mm-1",
    font_class: "weixinV6mm-1",
    unicode: "e6d5",
    unicode_decimal: 59093
  },
  {
    icon_id: "40576385",
    name: "微信V6mm",
    font_class: "weixinV6mm",
    unicode: "e6d6",
    unicode_decimal: 59094
  },
  {
    icon_id: "40576386",
    name: "支付宝V6mm",
    font_class: "zhifubaoV6mm",
    unicode: "e6d7",
    unicode_decimal: 59095
  },
  {
    icon_id: "40576389",
    name: "支付宝-方V6mm",
    font_class: "zhifubao-fangV6mm",
    unicode: "e6d8",
    unicode_decimal: 59096
  },
  {
    icon_id: "40576384",
    name: "朋友圈V6mm",
    font_class: "pengyouquanV6mm",
    unicode: "e6d9",
    unicode_decimal: 59097
  },
  {
    icon_id: "40576470",
    name: "首页-笑脸V6xx",
    font_class: "shouye-xiaolianV6xx",
    unicode: "e6da",
    unicode_decimal: 59098
  },
  {
    icon_id: "40576469",
    name: "核销V6xx",
    font_class: "hexiaoV6xx",
    unicode: "e6db",
    unicode_decimal: 59099
  },
  {
    icon_id: "40576468",
    name: "核销V6mm",
    font_class: "hexiaoV6mm",
    unicode: "e6dc",
    unicode_decimal: 59100
  },
  {
    icon_id: "40576467",
    name: "开发者联盟V6xx",
    font_class: "kaifazhelianmengV6xx",
    unicode: "e6dd",
    unicode_decimal: 59101
  },
  {
    icon_id: "40576466",
    name: "开发者联盟V6xx-1",
    font_class: "kaifazhelianmengV6xx-1",
    unicode: "e6de",
    unicode_decimal: 59102
  },
  {
    icon_id: "40576465",
    name: "个人资料V6xx",
    font_class: "gerenziliaoV6xx",
    unicode: "e6df",
    unicode_decimal: 59103
  },
  {
    icon_id: "40576464",
    name: "个人资料V6mm",
    font_class: "gerenziliaoV6mm",
    unicode: "e6e0",
    unicode_decimal: 59104
  },
  {
    icon_id: "40576475",
    name: "房子V6xx",
    font_class: "fangziV6xx",
    unicode: "e6e1",
    unicode_decimal: 59105
  },
  {
    icon_id: "40568864",
    name: "关闭V6xx",
    font_class: "guanbiV6xx",
    unicode: "e621",
    unicode_decimal: 58913
  },
  {
    icon_id: "40568863",
    name: "对号V6xx-1",
    font_class: "duihaoV6xx-1",
    unicode: "e622",
    unicode_decimal: 58914
  },
  {
    icon_id: "40568861",
    name: "帮助V6xx",
    font_class: "bangzhuV6xx",
    unicode: "e623",
    unicode_decimal: 58915
  },
  {
    icon_id: "40568860",
    name: "对号V6xx",
    font_class: "duihaoV6xx",
    unicode: "e624",
    unicode_decimal: 58916
  },
  {
    icon_id: "40568859",
    name: "错号V6xx",
    font_class: "cuohaoV6xx",
    unicode: "e625",
    unicode_decimal: 58917
  },
  {
    icon_id: "40568928",
    name: "加号V6xx",
    font_class: "jiahaoV6xx",
    unicode: "e626",
    unicode_decimal: 58918
  },
  {
    icon_id: "40568926",
    name: "注意V6xx",
    font_class: "zhuyiV6xx",
    unicode: "e627",
    unicode_decimal: 58919
  },
  {
    icon_id: "40568927",
    name: "减少V6xx",
    font_class: "jianshaoV6xx",
    unicode: "e628",
    unicode_decimal: 58920
  },
  {
    icon_id: "40568925",
    name: "减V6xx",
    font_class: "jianV6xx",
    unicode: "e629",
    unicode_decimal: 58921
  },
  {
    icon_id: "40568923",
    name: "指向-右箭头V6xx",
    font_class: "zhixiang-youjiantouV6xx",
    unicode: "e62a",
    unicode_decimal: 58922
  },
  {
    icon_id: "40568924",
    name: "左V6xx",
    font_class: "zuoV6xx",
    unicode: "e62b",
    unicode_decimal: 58923
  },
  {
    icon_id: "40568922",
    name: "左V6xx-1",
    font_class: "zuoV6xx-1",
    unicode: "e62c",
    unicode_decimal: 58924
  },
  {
    icon_id: "40568921",
    name: "长箭头V6xx",
    font_class: "changjiantouV6xx",
    unicode: "e62d",
    unicode_decimal: 58925
  },
  {
    icon_id: "40568916",
    name: "向下V6xx-1",
    font_class: "xiangxiaV6xx-1",
    unicode: "e62e",
    unicode_decimal: 58926
  },
  {
    icon_id: "40568920",
    name: "向左V6xx",
    font_class: "xiangzuoV6xx",
    unicode: "e62f",
    unicode_decimal: 58927
  },
  {
    icon_id: "40568918",
    name: "向左V6xx-1",
    font_class: "xiangzuoV6xx-1",
    unicode: "e630",
    unicode_decimal: 58928
  },
  {
    icon_id: "40568919",
    name: "右V6xx",
    font_class: "youV6xx",
    unicode: "e631",
    unicode_decimal: 58929
  },
  {
    icon_id: "40568917",
    name: "向右V6xx-1",
    font_class: "xiangyouV6xx-1",
    unicode: "e632",
    unicode_decimal: 58930
  },
  {
    icon_id: "40568914",
    name: "向右V6xx",
    font_class: "xiangyouV6xx",
    unicode: "e633",
    unicode_decimal: 58931
  },
  {
    icon_id: "40568915",
    name: "向右V6xx-2",
    font_class: "xiangyouV6xx-2",
    unicode: "e634",
    unicode_decimal: 58932
  },
  {
    icon_id: "40568912",
    name: "下V6xx-1",
    font_class: "xiaV6xx-1",
    unicode: "e635",
    unicode_decimal: 58933
  },
  {
    icon_id: "40568913",
    name: "向下V6xx",
    font_class: "xiangxiaV6xx",
    unicode: "e636",
    unicode_decimal: 58934
  },
  {
    icon_id: "40568908",
    name: "添加V6xx",
    font_class: "tianjiaV6xx",
    unicode: "e637",
    unicode_decimal: 58935
  },
  {
    icon_id: "40568909",
    name: "叹号V6xx",
    font_class: "tanhaoV6xx",
    unicode: "e638",
    unicode_decimal: 58936
  },
  {
    icon_id: "40568911",
    name: "向上V6xx",
    font_class: "xiangshangV6xx",
    unicode: "e639",
    unicode_decimal: 58937
  },
  {
    icon_id: "40568910",
    name: "向上V6xx-1",
    font_class: "xiangshangV6xx-1",
    unicode: "e63a",
    unicode_decimal: 58938
  },
  {
    icon_id: "40568907",
    name: "下V6xx",
    font_class: "xiaV6xx",
    unicode: "e63b",
    unicode_decimal: 58939
  },
  {
    icon_id: "40568905",
    name: "叹号V6xx-1",
    font_class: "tanhaoV6xx-1",
    unicode: "e63c",
    unicode_decimal: 58940
  },
  {
    icon_id: "40568906",
    name: "上V6xx",
    font_class: "shangV6xx",
    unicode: "e63d",
    unicode_decimal: 58941
  },
  {
    icon_id: "40568904",
    name: "上下选择V6xx",
    font_class: "shangxiaxuanzeV6xx",
    unicode: "e63e",
    unicode_decimal: 58942
  },
  {
    icon_id: "40568903",
    name: "上V6xx-1",
    font_class: "shangV6xx-1",
    unicode: "e63f",
    unicode_decimal: 58943
  },
  {
    icon_id: "40568902",
    name: "上下箭头V6xx",
    font_class: "shangxiajiantouV6xx",
    unicode: "e640",
    unicode_decimal: 58944
  },
  {
    icon_id: "40569437",
    name: "加盟V6xx",
    font_class: "jiamengV6xx",
    unicode: "e6f9",
    unicode_decimal: 59129
  },
  {
    icon_id: "40569383",
    name: "应用中心V6xx-1",
    font_class: "yingyongzhongxinV6xx-1",
    unicode: "e6f5",
    unicode_decimal: 59125
  },
  {
    icon_id: "40569385",
    name: "应用中心V6xx",
    font_class: "yingyongzhongxinV6xx",
    unicode: "e6fd",
    unicode_decimal: 59133
  },
  {
    icon_id: "40569384",
    name: "应用V6xx",
    font_class: "yingyongV6xx",
    unicode: "e6f4",
    unicode_decimal: 59124
  },
  {
    icon_id: "40569382",
    name: "购物车V6xx-2",
    font_class: "gouwucheV6xx-2",
    unicode: "e6fe",
    unicode_decimal: 59134
  },
  {
    icon_id: "40569381",
    name: "首页V6xx",
    font_class: "shouyeV6xx",
    unicode: "e6ff",
    unicode_decimal: 59135
  },
  {
    icon_id: "40569380",
    name: "应用列表V6xx",
    font_class: "yingyongliebiaoV6xx",
    unicode: "e700",
    unicode_decimal: 59136
  },
  {
    icon_id: "40569379",
    name: "购物车V6xx-1",
    font_class: "gouwucheV6xx-1",
    unicode: "e701",
    unicode_decimal: 59137
  },
  {
    icon_id: "40569378",
    name: "购物车V6xx",
    font_class: "gouwucheV6xx",
    unicode: "e702",
    unicode_decimal: 59138
  },
  {
    icon_id: "40569377",
    name: "分类V6xx",
    font_class: "fenleiV6xx",
    unicode: "e703",
    unicode_decimal: 59139
  },
  {
    icon_id: "40569505",
    name: "加盟V6xx",
    font_class: "jiamengV6xx1",
    unicode: "e704",
    unicode_decimal: 59140
  },
  {
    icon_id: "40569507",
    name: "我的V6xx",
    font_class: "wodeV6xx1",
    unicode: "e705",
    unicode_decimal: 59141
  },
  {
    icon_id: "40569506",
    name: "我的V6xx-1",
    font_class: "wodeV6xx-11",
    unicode: "e706",
    unicode_decimal: 59142
  },
  {
    icon_id: "40569501",
    name: "求职人员V6xx",
    font_class: "qiuzhirenyuanV6xx1",
    unicode: "e707",
    unicode_decimal: 59143
  },
  {
    icon_id: "40569502",
    name: "个人中心V6xx",
    font_class: "gerenzhongxinV6xx2",
    unicode: "e708",
    unicode_decimal: 59144
  },
  {
    icon_id: "40569503",
    name: "我V6xx",
    font_class: "woV6xx1",
    unicode: "e709",
    unicode_decimal: 59145
  },
  {
    icon_id: "40569504",
    name: "入住人V6xx",
    font_class: "ruzhurenV6xx1",
    unicode: "e70a",
    unicode_decimal: 59146
  },
  {
    icon_id: "40569492",
    name: "相机V6xx",
    font_class: "xiangjiV6xx",
    unicode: "e70b",
    unicode_decimal: 59147
  },
  {
    icon_id: "40569491",
    name: "设置V6xx-1",
    font_class: "shezhiV6xx-1",
    unicode: "e70c",
    unicode_decimal: 59148
  },
  {
    icon_id: "40569487",
    name: "搜索V6xx",
    font_class: "sousuoV6xx",
    unicode: "e70d",
    unicode_decimal: 59149
  },
  {
    icon_id: "40569490",
    name: "相机V6xx-1",
    font_class: "xiangjiV6xx-1",
    unicode: "e70e",
    unicode_decimal: 59150
  },
  {
    icon_id: "40569489",
    name: "刷新V6xx",
    font_class: "shuaxinV6xx",
    unicode: "e70f",
    unicode_decimal: 59151
  },
  {
    icon_id: "40569488",
    name: "设置V6xx-2",
    font_class: "shezhiV6xx-2",
    unicode: "e710",
    unicode_decimal: 59152
  },
  {
    icon_id: "40569485",
    name: "筛选V6xx",
    font_class: "shaixuanV6xx",
    unicode: "e711",
    unicode_decimal: 59153
  },
  {
    icon_id: "40569486",
    name: "设置V6xx",
    font_class: "shezhiV6xx",
    unicode: "e712",
    unicode_decimal: 59154
  },
  {
    icon_id: "40569483",
    name: "分享V6xx-1",
    font_class: "fenxiangV6xx-1",
    unicode: "e713",
    unicode_decimal: 59155
  },
  {
    icon_id: "40569484",
    name: "分享V6xx-2",
    font_class: "fenxiangV6xx-2",
    unicode: "e714",
    unicode_decimal: 59156
  },
  {
    icon_id: "40569482",
    name: "分享V6xx",
    font_class: "fenxiangV6xx",
    unicode: "e715",
    unicode_decimal: 59157
  },
  {
    icon_id: "40569833",
    name: "消息V6xx",
    font_class: "xiaoxiV6xx",
    unicode: "e716",
    unicode_decimal: 59158
  },
  {
    icon_id: "40569832",
    name: "短信V6xx-1",
    font_class: "duanxinV6xx-1",
    unicode: "e717",
    unicode_decimal: 59159
  },
  {
    icon_id: "40569831",
    name: "信息V6xx",
    font_class: "xinxiV6xx",
    unicode: "e718",
    unicode_decimal: 59160
  },
  {
    icon_id: "40569830",
    name: "客服V6xx",
    font_class: "kefuV6xx",
    unicode: "e719",
    unicode_decimal: 59161
  },
  {
    icon_id: "40569828",
    name: "联系客服V6xx",
    font_class: "lianxikefuV6xx",
    unicode: "e71a",
    unicode_decimal: 59162
  },
  {
    icon_id: "40569829",
    name: "票信息V6xx",
    font_class: "piaoxinxiV6xx",
    unicode: "e71b",
    unicode_decimal: 59163
  },
  {
    icon_id: "40569826",
    name: "客服V6xx-4",
    font_class: "kefuV6xx-4",
    unicode: "e71c",
    unicode_decimal: 59164
  },
  {
    icon_id: "40569827",
    name: "客服V6xx-2",
    font_class: "kefuV6xx-2",
    unicode: "e71d",
    unicode_decimal: 59165
  },
  {
    icon_id: "40569825",
    name: "客服V6xx-1",
    font_class: "kefuV6xx-1",
    unicode: "e71e",
    unicode_decimal: 59166
  },
  {
    icon_id: "40569824",
    name: "打开信息V6xx",
    font_class: "dakaixinxiV6xx",
    unicode: "e71f",
    unicode_decimal: 59167
  },
  {
    icon_id: "40569822",
    name: "点信息V6xx",
    font_class: "dianxinxiV6xx",
    unicode: "e720",
    unicode_decimal: 59168
  },
  {
    icon_id: "40569823",
    name: "客服V6xx-3",
    font_class: "kefuV6xx-3",
    unicode: "e721",
    unicode_decimal: 59169
  },
  {
    icon_id: "40569821",
    name: "短信V6xx",
    font_class: "duanxinV6xx",
    unicode: "e722",
    unicode_decimal: 59170
  },
  {
    icon_id: "40570015",
    name: "我的收藏V6xx",
    font_class: "wodeshoucangV6xx",
    unicode: "e723",
    unicode_decimal: 59171
  },
  {
    icon_id: "40570014",
    name: "闹铃V6xx",
    font_class: "naolingV6xx",
    unicode: "e724",
    unicode_decimal: 59172
  },
  {
    icon_id: "40570011",
    name: "收藏V6xx",
    font_class: "shoucangV6xx",
    unicode: "e725",
    unicode_decimal: 59173
  },
  {
    icon_id: "40570013",
    name: "收藏V6xx-1",
    font_class: "shoucangV6xx-1",
    unicode: "e726",
    unicode_decimal: 59174
  },
  {
    icon_id: "40570012",
    name: "时间V6xx",
    font_class: "shijianV6xx",
    unicode: "e727",
    unicode_decimal: 59175
  },
  {
    icon_id: "40570009",
    name: "铃铛V6xx",
    font_class: "lingdangV6xx",
    unicode: "e728",
    unicode_decimal: 59176
  },
  {
    icon_id: "40570010",
    name: "时钟V6xx",
    font_class: "shizhongV6xx",
    unicode: "e729",
    unicode_decimal: 59177
  },
  {
    icon_id: "40570008",
    name: "关注V6xx",
    font_class: "guanzhuV6xx",
    unicode: "e72a",
    unicode_decimal: 59178
  },
  {
    icon_id: "40570007",
    name: "闹钟V6xx",
    font_class: "naozhongV6xx",
    unicode: "e72b",
    unicode_decimal: 59179
  },
  {
    icon_id: "40570006",
    name: "待发货V6xx",
    font_class: "daifahuoV6xx",
    unicode: "e72c",
    unicode_decimal: 59180
  },
  {
    icon_id: "40570095",
    name: "商城V6xx",
    font_class: "shangchengV6xx",
    unicode: "e72d",
    unicode_decimal: 59181
  },
  {
    icon_id: "40570093",
    name: "优惠V6xx",
    font_class: "youhuiV6xx",
    unicode: "e72e",
    unicode_decimal: 59182
  },
  {
    icon_id: "40570094",
    name: "总积分V6xx",
    font_class: "zongjifenV6xx",
    unicode: "e72f",
    unicode_decimal: 59183
  },
  {
    icon_id: "40570092",
    name: "折扣券V6xx",
    font_class: "zhekouquanV6xx",
    unicode: "e730",
    unicode_decimal: 59184
  },
  {
    icon_id: "40570091",
    name: "积分V6xx",
    font_class: "jifenV6xx",
    unicode: "e731",
    unicode_decimal: 59185
  },
  {
    icon_id: "40570090",
    name: "优惠券V6xx-2",
    font_class: "youhuiquanV6xx-2",
    unicode: "e732",
    unicode_decimal: 59186
  },
  {
    icon_id: "40570089",
    name: "优惠券V6xx-1",
    font_class: "youhuiquanV6xx-1",
    unicode: "e733",
    unicode_decimal: 59187
  },
  {
    icon_id: "40570088",
    name: "积分兑换V6xx",
    font_class: "jifenduihuanV6xx",
    unicode: "e734",
    unicode_decimal: 59188
  },
  {
    icon_id: "40570087",
    name: "优惠券V6xx",
    font_class: "youhuiquanV6xx",
    unicode: "e735",
    unicode_decimal: 59189
  },
  {
    icon_id: "40570086",
    name: "礼包V6xx",
    font_class: "libaoV6xx",
    unicode: "e736",
    unicode_decimal: 59190
  },
  {
    icon_id: "40570085",
    name: "礼物V6xx",
    font_class: "liwuV6xx",
    unicode: "e737",
    unicode_decimal: 59191
  },
  {
    icon_id: "40570084",
    name: "标签V6xx",
    font_class: "biaoqianV6xx",
    unicode: "e738",
    unicode_decimal: 59192
  },
  {
    icon_id: "40570499",
    name: "钱包余额V6xx",
    font_class: "qianbaoyueV6xx",
    unicode: "e739",
    unicode_decimal: 59193
  },
  {
    icon_id: "40570498",
    name: "退款V6xx",
    font_class: "tuikuanV6xx",
    unicode: "e73a",
    unicode_decimal: 59194
  },
  {
    icon_id: "40570497",
    name: "钱包V6xx",
    font_class: "qianbaoV6xx",
    unicode: "e73b",
    unicode_decimal: 59195
  },
  {
    icon_id: "40570496",
    name: "余额V6xx",
    font_class: "yueV6xx",
    unicode: "e73c",
    unicode_decimal: 59196
  },
  {
    icon_id: "40570495",
    name: "金融V6xx",
    font_class: "jinrongV6xx",
    unicode: "e73d",
    unicode_decimal: 59197
  },
  {
    icon_id: "40570479",
    name: "日历V6xx",
    font_class: "riliV6xx",
    unicode: "e73e",
    unicode_decimal: 59198
  },
  {
    icon_id: "40570478",
    name: "我的等级V6xx",
    font_class: "wodedengjiV6xx",
    unicode: "e73f",
    unicode_decimal: 59199
  },
  {
    icon_id: "40570477",
    name: "推广V6xx",
    font_class: "tuiguangV6xx",
    unicode: "e740",
    unicode_decimal: 59200
  },
  {
    icon_id: "40570475",
    name: "会员等级V6xx",
    font_class: "huiyuandengjiV6xx",
    unicode: "e741",
    unicode_decimal: 59201
  },
  {
    icon_id: "40570476",
    name: "我的推广V6xx",
    font_class: "wodetuiguangV6xx",
    unicode: "e742",
    unicode_decimal: 59202
  },
  {
    icon_id: "40570473",
    name: "分销V6xx",
    font_class: "fenxiaoV6xx",
    unicode: "e743",
    unicode_decimal: 59203
  },
  {
    icon_id: "40570474",
    name: "每日签到V6xx",
    font_class: "meiriqiandaoV6xx",
    unicode: "e744",
    unicode_decimal: 59204
  },
  {
    icon_id: "40570472",
    name: "地址管理V6xx",
    font_class: "dizhiguanliV6xx",
    unicode: "e745",
    unicode_decimal: 59205
  },
  {
    icon_id: "40570988",
    name: "待收货V6xx",
    font_class: "daishouhuoV6xx",
    unicode: "e746",
    unicode_decimal: 59206
  },
  {
    icon_id: "40570985",
    name: "待收货V6xx-3",
    font_class: "daishouhuoV6xx-3",
    unicode: "e747",
    unicode_decimal: 59207
  },
  {
    icon_id: "40570984",
    name: "待发货V6xx-2",
    font_class: "daifahuoV6xx-2",
    unicode: "e748",
    unicode_decimal: 59208
  },
  {
    icon_id: "40570986",
    name: "银行卡V6xx",
    font_class: "yinhangkaV6xx",
    unicode: "e749",
    unicode_decimal: 59209
  },
  {
    icon_id: "40570983",
    name: "待发货V6xx-1",
    font_class: "daifahuoV6xx-1",
    unicode: "e74a",
    unicode_decimal: 59210
  },
  {
    icon_id: "40570982",
    name: "待发货V6xx-3",
    font_class: "daifahuoV6xx-3",
    unicode: "e74b",
    unicode_decimal: 59211
  },
  {
    icon_id: "40571056",
    name: "展开-右缩进V6xx",
    font_class: "zhankai-yousuojinV6xx",
    unicode: "e74c",
    unicode_decimal: 59212
  },
  {
    icon_id: "40571055",
    name: "收起-左缩进V6xx",
    font_class: "shouqi-zuosuojinV6xx",
    unicode: "e74d",
    unicode_decimal: 59213
  },
  {
    icon_id: "40571054",
    name: "文档V6xx",
    font_class: "wendangV6xx",
    unicode: "e74e",
    unicode_decimal: 59214
  },
  {
    icon_id: "40571053",
    name: "笑脸V6xx",
    font_class: "xiaolianV6xx",
    unicode: "e74f",
    unicode_decimal: 59215
  },
  {
    icon_id: "40571052",
    name: "交换V6xx",
    font_class: "jiaohuanV6xx",
    unicode: "e750",
    unicode_decimal: 59216
  },
  {
    icon_id: "40571051",
    name: "圆圈V6xx",
    font_class: "yuanquanV6xx",
    unicode: "e751",
    unicode_decimal: 59217
  },
  {
    icon_id: "40571042",
    name: "Group 840V6xx",
    font_class: "a-Group840V6xx",
    unicode: "e752",
    unicode_decimal: 59218
  },
  {
    icon_id: "40571050",
    name: "楼层V6xx",
    font_class: "loucengV6xx",
    unicode: "e753",
    unicode_decimal: 59219
  },
  {
    icon_id: "40571044",
    name: "扩展V6xx",
    font_class: "kuozhanV6xx",
    unicode: "e754",
    unicode_decimal: 59220
  },
  {
    icon_id: "40571049",
    name: "扫一扫V6xx",
    font_class: "saoyisaoV6xx",
    unicode: "e755",
    unicode_decimal: 59221
  },
  {
    icon_id: "40571048",
    name: "扫条形码V6xx",
    font_class: "saotiaoxingmaV6xx",
    unicode: "e756",
    unicode_decimal: 59222
  },
  {
    icon_id: "40571047",
    name: "扫条形码V6xx-1",
    font_class: "saotiaoxingmaV6xx-1",
    unicode: "e757",
    unicode_decimal: 59223
  },
  {
    icon_id: "40571041",
    name: "二维码V6xx-1",
    font_class: "erweimaV6xx-1",
    unicode: "e758",
    unicode_decimal: 59224
  },
  {
    icon_id: "40571046",
    name: "复制V6xx",
    font_class: "fuzhiV6xx",
    unicode: "e759",
    unicode_decimal: 59225
  },
  {
    icon_id: "40571045",
    name: "链接V6xx",
    font_class: "lianjieV6xx",
    unicode: "e75a",
    unicode_decimal: 59226
  },
  {
    icon_id: "40571043",
    name: "电话V6xx",
    font_class: "dianhuaV6xx",
    unicode: "e75b",
    unicode_decimal: 59227
  },
  {
    icon_id: "40571040",
    name: "核销台V6xx",
    font_class: "hexiaotaiV6xx",
    unicode: "e75c",
    unicode_decimal: 59228
  },
  {
    icon_id: "40571037",
    name: "分隔符V6xx",
    font_class: "fengefuV6xx",
    unicode: "e75d",
    unicode_decimal: 59229
  },
  {
    icon_id: "40571038",
    name: "放大V6xx",
    font_class: "fangdaV6xx",
    unicode: "e75e",
    unicode_decimal: 59230
  },
  {
    icon_id: "40571039",
    name: "二维码V6xx",
    font_class: "erweimaV6xx",
    unicode: "e75f",
    unicode_decimal: 59231
  },
  {
    icon_id: "40571017",
    name: "待发货V6xx-4",
    font_class: "daifahuoV6xx-4",
    unicode: "e760",
    unicode_decimal: 59232
  }
], gr = {
  id: Jt,
  name: ei,
  font_family: ti,
  css_prefix_text: ii,
  description: ni,
  glyphs: ri
}, vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css_prefix_text: ii,
  default: gr,
  description: ni,
  font_family: ti,
  glyphs: ri,
  id: Jt,
  name: ei
}, Symbol.toStringTag, { value: "Module" })), pr = (V) => (Ge("data-v-4075dbe1"), V = V(), je(), V), yr = { class: "group-wrap w-[180px] p-[15px] h-full border-r border-color flex flex-col" }, _r = { class: "group-list flex-1 my-[10px] h-0" }, Er = ["onClick"], Tr = {
  key: 0,
  class: "leading-none operate py-[10px]"
}, xr = { class: "text-center w-full" }, br = { class: "attachment-list-wrap flex flex-col p-[15px] flex-1 overflow-hidden" }, Sr = { class: "flex items-center" }, Lr = { key: 1 }, kr = { class: "flex-1 mb-[15px] mt-[10px] h-0" }, Ar = {
  key: 0,
  class: "flex flex-wrap attachment-grid"
}, Dr = ["onClick"], Rr = ["src"], Ir = { class: "absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60" }, wr = { class: "file-box-active absolute z-[1] bottom-0 right-0 w-full h-full" }, Cr = { class: "absolute bottom-[2px] right-[2px] text-white z-[2] leading-none" }, Or = { class: "flex items-center" }, Pr = { class: "attachment-file-name truncate my-[10px] cursor-pointer text-base flex-1 text-center h-[20px] leading-[20px]" }, Fr = { class: "text-center w-full" }, Mr = { class: "text-center w-full" }, Vr = { class: "text-center w-full" }, Nr = { class: "text-center w-full" }, Br = {
  key: 1,
  class: "flex flex-wrap attachment-grid"
}, Ur = { class: "attachment-wrap attachment-thumb w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center h-[120px]" }, Gr = ["src", "onClick"], jr = { class: "flex items-center" }, Kr = { class: "attachment-file-name truncate my-[10px] cursor-pointer text-base flex-1 text-center" }, Hr = {
  key: 2,
  class: "flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center"
}, zr = {
  key: 0,
  class: "flex flex-col items-center"
}, Wr = /* @__PURE__ */ pr(() => /* @__PURE__ */ j("img", {
  src: Di,
  class: "max-w-[160px] max-h-[120px] mb-[15px]"
}, null, -1)), qr = { class: "text-[var(--el-text-color-secondary)] text-[14px]" }, Yr = { class: "attachment-footer" }, Xr = {
  key: 0,
  class: "attachment-footer__left"
}, $r = { class: "attachment-footer__right" }, Qr = { class: "dialog-footer" }, Zr = /* @__PURE__ */ Ce({
  __name: "attachment",
  props: {
    // 选择数量限制
    limit: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "image"
    },
    // 场景
    scene: {
      type: String,
      default: "select"
      // select 选择图片 attachment 素材中心
    }
  },
  setup(V, { expose: I }) {
    const f = V, D = pe(""), y = pe(!1), S = pe(!1), k = _e({}), R = _e([]), L = _e({
      data: []
    }), a = _e({
      loading: !0,
      page: 1,
      total: 0,
      limit: f.scene == "select" ? 18 : 20,
      data: []
    });
    f.scene == "select" ? (a.limit = 18, f.type == "icon" && (a.limit = 20)) : (a.limit = 20, f.type == "icon" && (a.limit = 30));
    const b = _e({
      name: ""
    }), v = _e({
      real_name: "",
      cate_id: 0
    }), h = /* @__PURE__ */ Object.assign({ "../../styles/icon/addon/home_service/iconfont.json": ur, "../../styles/icon/addon/o2o/iconfont.json": fr, "../../styles/icon/addon/tourism/iconfont.json": mr, "../../styles/icon/official-iconfont.json": vr }), E = {
      0: []
    }, _ = (N) => new Promise((M, G) => {
      try {
        const K = {
          code: 1,
          data: []
        };
        Object.keys(h).reverse().forEach((H) => {
          const z = h[H].default;
          N.name && z.name.indexOf(N.name) != -1 ? K.data.push(z) : N.name || K.data.push(z), E[z.id] || (z.glyphs = z.glyphs.map((q) => (q.url = `${z.font_family} ${z.css_prefix_text}${q.font_class}`, q.real_name = q.name, q.att_id = q.icon_id, q)), E[0].push(...z.glyphs), E[z.id] = z.glyphs);
        }), M(K);
      } catch (K) {
        console.error(K), G(K);
      }
    }), l = (N) => new Promise((M, G) => {
      try {
        const K = {
          code: 1,
          data: {
            current_page: N.page,
            per_page: 1,
            total: 0,
            data: []
          }
        };
        let H = JSON.parse(JSON.stringify(E[N.cate_id]));
        N.real_name && (H = H.filter((z) => z.real_name.indexOf(N.real_name) != -1)), K.data.total = H.length, K.data.data = H.splice((N.page - 1) * N.limit, N.limit), K.data.per_page = Math.ceil(H.length / N.limit), M(K);
      } catch (K) {
        console.error(K), G(K);
      }
    }), e = mt(() => {
      (f.type == "icon" ? _ : Ri)({
        type: f.type,
        ...b
      }).then((M) => {
        L.data = M.data;
      }).catch(() => {
      });
    });
    e();
    const s = mt((N = 1) => {
      const M = f.type == "icon" ? l : Ii;
      a.loading = !0, a.page = N, M({
        page: a.page,
        limit: a.limit,
        att_type: f.type,
        ...v
      }).then((G) => {
        if (a.data = G.data.data, a.total = G.data.total, a.loading = !1, f.scene == "attachment" && i(), f.type != "icon")
          for (let K = 0; K < a.data.length; K++)
            a.data[K].image_list = [], a.data[K].image_list.push(Pe(G.data.data[K].thumb));
      }).catch((G) => {
        f.type == "image" && G.response.status == 500 && m({ message: 'php脚本内存不足请加大php配置中memory_limit的数值, <a style="text-decoration: underline;" href="https://doc.press.niucloud.com/php/saas-framework/use/installFAQ/memorySizeExhausted.html" target="blank">点击查看相关手册</a>', type: "error", dangerouslyUseHTMLString: !0 }), a.loading = !1;
      });
    });
    s(), Xe(() => v.cate_id, () => {
      s();
    });
    const t = (N) => {
      S.value || (S.value = !0, wi({
        type: f.type,
        name: N
      }).then((M) => {
        S.value = !1, D.value = "", e(1);
      }).catch(() => {
        S.value = !1;
      }));
    }, o = (N, M) => {
      S.value || (S.value = !0, Ci({
        id: L.data[M].id,
        name: N
      }).then((G) => {
        S.value = !1, L.data[M].name = N;
      }).catch(() => {
        S.value = !1;
      }));
    }, u = (N) => {
      S.value || (S.value = !0, gt.confirm(
        ee("upload.deleteCategoryTips"),
        ee("warning"),
        {
          confirmButtonText: ee("confirm"),
          cancelButtonText: ee("cancel"),
          type: "warning"
        }
      ).then(() => {
        Oi(L.data[N].id).then(() => {
          L.data.splice(N, 1), S.value = !1;
        }).catch(() => {
          S.value = !1;
        });
      }));
    }, n = pe(null), c = Ae(() => {
      const N = {};
      N[rt.VITE_REQUEST_HEADER_TOKEN_KEY] = ki(), N[rt.VITE_REQUEST_HEADER_SITEID_KEY] = Ui.get("siteId") || 0;
      const M = rt.VITE_APP_BASE_URL || "";
      return {
        action: `${M.endsWith("/") ? M : `${M}/`}sys/${f.type}`,
        multiple: !0,
        data: {
          cate_id: v.cate_id
        },
        headers: N,
        onSuccess: (K, H, z) => {
          var q, $;
          K.code >= 1 ? (s(), (q = n.value) == null || q.handleRemove(H)) : (m({ message: K.msg || ee("upload.fail"), type: "error" }), ($ = n.value) == null || $.handleRemove(H));
        },
        onError: (K, H) => {
          var z;
          m({ message: ee("upload.fail"), type: "error" }), (z = n.value) == null || z.handleRemove(H);
        }
      };
    }), p = /* @__PURE__ */ new Map(), m = (N) => {
      const M = N.message, G = p.get(M);
      (!G || Date.now() - G.timestamp > 5e3) && (p.set(M, { timestamp: Date.now() }), lt(N));
    }, g = pe(!1);
    Xe(g, () => {
      if (g.value) {
        const N = Object.keys(Ie(k));
        a.data.forEach((M) => {
          N.includes(M.att_id) || (k[M.att_id] = Ie(M), R.push(M.att_id));
        });
      } else
        i();
    });
    const i = () => {
      const N = Object.keys(Ie(k));
      N.length && (N.forEach((M) => {
        delete k[M], R.splice(R.indexOf(M), 1);
      }), g.value = !1);
    }, r = (N) => {
      if (k[N.att_id])
        delete k[N.att_id], R.splice(R.indexOf(N.att_id), 1);
      else if (f.scene == "select") {
        const M = Object.keys(Ie(k)), G = M.length;
        if (f.limit == 1 && G == f.limit)
          delete k[M[0]], R.splice(R.indexOf(M[0]), 1);
        else if (f.limit && G >= f.limit) {
          lt.info(ee("upload.triggerUpperLimit"));
          return;
        }
        k[N.att_id] = Ie(N), R.push(N.att_id);
      } else
        k[N.att_id] = Ie(N), R.push(N.att_id);
    }, d = (N) => {
      const M = R.indexOf(N);
      return M == -1 ? 0 : M + 1;
    }, x = (N = null) => {
      const M = N === null ? Object.keys(Ie(k)) : [a.data[N].att_id];
      gt.confirm(
        ee("upload.deleteAttachmentTips"),
        ee("warning"),
        {
          confirmButtonText: ee("confirm"),
          cancelButtonText: ee("cancel"),
          type: "warning"
        }
      ).then(() => {
        Pi({ att_ids: M }).then(() => {
          s();
        }).catch(() => {
        });
      });
    }, T = _e({
      cateId: "",
      loading: !1,
      visible: !1
    }), A = (N = null) => {
      const M = N === null ? Object.keys(Ie(k)) : [a.data[N].att_id];
      T.visible = !0, T.cateId = L.data[0].id, T.confirm = () => {
        T.loading = !0, Fi({ cate_id: T.cateId, att_ids: M }).then(() => {
          T.visible = !1, T.loading = !1, s();
        }).catch(() => {
          T.loading = !1;
        });
      };
    }, C = pe(!0);
    Xe(k, () => {
      C.value = Object.keys(Ie(k)).length == 0;
    });
    const w = _e({
      show: !1,
      index: 0
    }), O = (N) => {
      w.show = !0, w.index = N;
    }, P = Ae(() => Ie(a.data).map((N) => Pe(N.thumb))), F = _e({
      visible: !1,
      src: ""
    }), B = (N) => {
      F.visible = !0, F.src = Pe(a.data[N].thumb);
    };
    return I({
      selectedFile: k,
      selectedFileIndex: R
    }), (N, M) => {
      const G = Tt, K = Rt, H = lr, z = li, q = ci, $ = ui, ae = di, te = dt, oe = fi, re = hi, fe = mi, ie = xt, se = gi, de = vi, le = pi, ye = yi, Te = _i, xe = Ei, De = Ti, ge = bt, ve = St, Be = sr, Re = xi;
      return W(), Q("div", {
        class: Le(["flex border-t border-b main-wrap border-color w-full attachment-wrap", [V.scene == "select" ? "h-[546px]" : "h-full", V.scene == "attachment" ? "attachment-wrap--manage" : ""]])
      }, [
        j("div", yr, [
          Y(G, {
            modelValue: b.name,
            "onUpdate:modelValue": M[0] || (M[0] = (X) => b.name = X),
            class: "m-0",
            placeholder: U(ee)("upload.attachmentCategoryPlaceholder"),
            clearable: "",
            "prefix-icon": "Search",
            onInput: M[1] || (M[1] = (X) => U(e)())
          }, null, 8, ["modelValue", "placeholder"]),
          j("div", _r, [
            Y(ae, null, {
              default: Z(() => [
                j("div", {
                  class: Le(["group-item p-[10px] leading-none text-xs rounded cursor-pointer", { active: v.cate_id == 0 }]),
                  onClick: M[2] || (M[2] = (X) => v.cate_id = 0)
                }, J(U(ee)("selectPlaceholder")), 3),
                (W(!0), Q(ke, null, Ne(L.data, (X, ue) => (W(), Q("div", {
                  class: Le(["group-item px-[10px] text-xs rounded cursor-pointer flex", { active: v.cate_id == X.id }]),
                  key: ue
                }, [
                  j("div", {
                    class: "flex-1 leading-none truncate py-[10px]",
                    onClick: (he) => v.cate_id = X.id
                  }, J(X.name), 9, Er),
                  V.scene == "attachment" && f.type != "icon" ? (W(), Q("div", Tr, [
                    V.scene == "attachment" ? (W(), me($, {
                      key: 0,
                      "hide-on-click": !1
                    }, {
                      dropdown: Z(() => [
                        Y(q, null, {
                          default: Z(() => [
                            Y(z, { class: "text-center" }, {
                              default: Z(() => [
                                Y(H, {
                                  placeholder: U(ee)("upload.attachmentCategoryPlaceholder"),
                                  onConfirm: (he) => o(he, ue),
                                  modelValue: X.name,
                                  "onUpdate:modelValue": (he) => X.name = he
                                }, {
                                  default: Z(() => [
                                    j("span", null, J(U(ee)("edit")), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["placeholder", "onConfirm", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            Y(z, {
                              onClick: (he) => u(ue)
                            }, {
                              default: Z(() => [
                                j("div", xr, J(U(ee)("delete")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: Z(() => [
                        Y(K, {
                          name: "element MoreFilled",
                          class: "cursor-pointer ml-[10px]",
                          size: "14px"
                        })
                      ]),
                      _: 2
                    }, 1024)) : ne("", !0)
                  ])) : ne("", !0)
                ], 2))), 128))
              ]),
              _: 1
            })
          ]),
          f.type != "icon" ? (W(), me(H, {
            key: 0,
            placeholder: U(ee)("upload.attachmentCategoryPlaceholder"),
            width: "280px",
            onConfirm: t,
            modelValue: D.value,
            "onUpdate:modelValue": M[3] || (M[3] = (X) => D.value = X)
          }, {
            default: Z(() => [
              Y(te, {
                class: "add-group-btn",
                icon: U(Mi)
              }, {
                default: Z(() => [
                  ce(J(U(ee)("upload.addAttachmentCategory")), 1)
                ]),
                _: 1
              }, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["placeholder", "modelValue"])) : ne("", !0)
        ]),
        j("div", br, [
          Y(fe, {
            gutter: 15,
            class: "toolbar-row"
          }, {
            default: Z(() => [
              Y(re, { span: 10 }, {
                default: Z(() => [
                  j("div", Sr, [
                    f.type != "icon" ? (W(), me(oe, At({ key: 0 }, U(c), {
                      ref_key: "uploadRef",
                      ref: n
                    }), {
                      default: Z(() => [
                        Y(te, {
                          type: "primary",
                          icon: U(Vi)
                        }, {
                          default: Z(() => [
                            ce(J(U(ee)("upload.upload" + V.type)), 1)
                          ]),
                          _: 1
                        }, 8, ["icon"])
                      ]),
                      _: 1
                    }, 16)) : ne("", !0),
                    V.scene == "attachment" && f.type != "icon" ? (W(), Q("div", Lr, [
                      y.value === !1 ? (W(), me(te, {
                        key: 0,
                        class: "ml-[10px]",
                        icon: U(Ni),
                        onClick: M[4] || (M[4] = (X) => y.value = !0)
                      }, {
                        default: Z(() => [
                          ce(J(U(ee)("edit")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"])) : (W(), me(te, {
                        key: 1,
                        class: "ml-[10px]",
                        icon: U(Bi),
                        onClick: M[5] || (M[5] = (X) => y.value = !1)
                      }, {
                        default: Z(() => [
                          ce(J(U(ee)("complete")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]))
                    ])) : ne("", !0)
                  ])
                ]),
                _: 1
              }),
              Y(re, {
                span: 14,
                class: "text-right"
              }, {
                default: Z(() => [
                  Y(G, {
                    modelValue: v.real_name,
                    "onUpdate:modelValue": M[6] || (M[6] = (X) => v.real_name = X),
                    class: "m-0 !w-[200px]",
                    clearable: "",
                    placeholder: U(ee)("upload.placeholder" + V.type + "Name"),
                    "prefix-icon": "Search",
                    onInput: M[7] || (M[7] = (X) => U(s)())
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ee((W(), Q("div", kr, [
            Y(ae, null, {
              default: Z(() => [
                a.data.length && (y.value === !0 || V.scene != "attachment") ? (W(), Q("div", Ar, [
                  (W(!0), Q(ke, null, Ne(a.data, (X, ue) => (W(), Q("div", {
                    class: Le(["attachment-item relative mr-[10px] mt-[6px]", [V.scene == "select" ? "w-[100px]" : "w-[120px]", { "is-selected": k[X.att_id] }]]),
                    key: ue
                  }, [
                    j("div", {
                      class: Le(["attachment-wrap attachment-thumb w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center", V.scene == "select" ? "h-[100px]" : "h-[120px]"]),
                      onClick: (he) => r(X)
                    }, [
                      V.type == "image" ? (W(), me(ie, {
                        key: 0,
                        src: U(Pe)(X.thumb),
                        fit: "contain"
                      }, null, 8, ["src"])) : V.type == "video" ? (W(), Q("video", {
                        key: 1,
                        src: U(Pe)(X.thumb)
                      }, null, 8, Rr)) : V.type == "icon" ? (W(), me(K, {
                        key: 2,
                        name: X.url,
                        size: "24px"
                      }, null, 8, ["name"])) : ne("", !0),
                      Ee(j("div", Ir, [
                        Y(K, {
                          name: "element Select",
                          color: "#fff",
                          size: "40px"
                        }),
                        j("div", wr, [
                          j("span", Cr, J(d(X.att_id)), 1)
                        ])
                      ], 512), [
                        [be, k[X.att_id]]
                      ])
                    ], 10, Dr),
                    V.type != "icon" && !y.value ? (W(), me(K, {
                      key: 0,
                      name: "element CircleCloseFilled",
                      onClick: (he) => x(ue),
                      class: "top-[-6px] right-[-6px] absolute z-[3] del-icon hidden cursor-pointer opacity-[0.8]"
                    }, null, 8, ["onClick"])) : ne("", !0),
                    j("div", Or, [
                      Y(se, { placement: "top" }, {
                        content: Z(() => [
                          ce(J(X.real_name), 1)
                        ]),
                        default: Z(() => [
                          j("div", Pr, J(X.real_name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      V.scene == "attachment" ? (W(), me($, {
                        key: 0,
                        "hide-on-click": !1,
                        class: "attachment-action hidden"
                      }, {
                        dropdown: Z(() => [
                          Y(q, null, {
                            default: Z(() => [
                              X.att_type == "image" ? (W(), me(z, {
                                key: 0,
                                class: "text-center",
                                onClick: (he) => O(ue)
                              }, {
                                default: Z(() => [
                                  j("div", Fr, J(U(ee)("lookOver")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : ne("", !0),
                              X.att_type == "video" ? (W(), me(z, {
                                key: 1,
                                class: "text-center",
                                onClick: (he) => B(ue)
                              }, {
                                default: Z(() => [
                                  j("div", Mr, J(U(ee)("lookOver")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : ne("", !0),
                              Y(z, {
                                class: "text-center",
                                onClick: (he) => A(ue)
                              }, {
                                default: Z(() => [
                                  j("div", Vr, J(U(ee)("upload.move")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              Y(z, {
                                onClick: (he) => x(ue)
                              }, {
                                default: Z(() => [
                                  j("div", Nr, J(U(ee)("delete")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: Z(() => [
                          Y(K, {
                            name: "element MoreFilled",
                            class: "cursor-pointer ml-[8px]",
                            size: "14px"
                          })
                        ]),
                        _: 2
                      }, 1024)) : ne("", !0)
                    ])
                  ], 2))), 128))
                ])) : a.data.length && y.value === !1 ? (W(), Q("div", Br, [
                  (W(!0), Q(ke, null, Ne(a.data, (X, ue) => (W(), Q("div", {
                    class: "attachment-item relative mr-[10px] mt-[6px] w-[120px]",
                    key: ue
                  }, [
                    j("div", Ur, [
                      V.type == "image" ? (W(), me(ie, {
                        key: 0,
                        src: U(Pe)(X.thumb),
                        fit: "contain",
                        "preview-src-list": X.image_list
                      }, null, 8, ["src", "preview-src-list"])) : V.type == "video" ? (W(), Q("video", {
                        key: 1,
                        src: U(Pe)(X.thumb),
                        onClick: (he) => B(ue)
                      }, null, 8, Gr)) : V.type == "icon" ? (W(), me(K, {
                        key: 2,
                        name: X.url,
                        size: "24px"
                      }, null, 8, ["name"])) : ne("", !0)
                    ]),
                    j("div", jr, [
                      Y(se, { placement: "top" }, {
                        content: Z(() => [
                          ce(J(X.real_name), 1)
                        ]),
                        default: Z(() => [
                          j("div", Kr, J(X.real_name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    V.type != "icon" ? (W(), me(K, {
                      key: 0,
                      name: "element CircleCloseFilled",
                      onClick: (he) => x(ue),
                      class: "top-[-6px] right-[-6px] absolute z-[3] del-icon hidden cursor-pointer opacity-[0.8]"
                    }, null, 8, ["onClick"])) : ne("", !0)
                  ]))), 128))
                ])) : (W(), Q("div", Hr, [
                  a.loading ? ne("", !0) : (W(), Q("div", zr, [
                    Wr,
                    j("span", qr, J(V.type == "icon" ? U(ee)("upload.iconEmpty") : U(ee)("upload.attachmentEmpty")), 1)
                  ]))
                ]))
              ]),
              _: 1
            })
          ])), [
            [Re, a.loading]
          ]),
          j("div", Yr, [
            V.scene == "attachment" && y.value === !0 ? (W(), Q("div", Xr, [
              Y(de, {
                modelValue: g.value,
                "onUpdate:modelValue": M[8] || (M[8] = (X) => g.value = X),
                label: U(ee)("selectAll"),
                size: "large"
              }, null, 8, ["modelValue", "label"]),
              Y(te, {
                disabled: C.value,
                onClick: M[9] || (M[9] = (X) => x())
              }, {
                default: Z(() => [
                  ce(J(U(ee)("delete")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              Y(te, {
                disabled: C.value,
                onClick: M[10] || (M[10] = (X) => A())
              }, {
                default: Z(() => [
                  ce(J(U(ee)("upload.move")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])) : ne("", !0),
            j("div", $r, [
              Y(le, {
                "current-page": a.page,
                "onUpdate:current-page": M[11] || (M[11] = (X) => a.page = X),
                small: !0,
                "page-size": a.limit,
                "onUpdate:page-size": M[12] || (M[12] = (X) => a.limit = X),
                "page-sizes": [10, 20, 30, 40, 60],
                layout: "total, sizes, prev, pager, next, jumper",
                total: a.total,
                onSizeChange: M[13] || (M[13] = (X) => U(s)()),
                onCurrentChange: U(s)
              }, null, 8, ["current-page", "page-size", "total", "onCurrentChange"])
            ])
          ])
        ]),
        V.scene == "attachment" ? (W(), Q(ke, { key: 0 }, [
          Y(ge, {
            modelValue: T.visible,
            "onUpdate:modelValue": M[17] || (M[17] = (X) => T.visible = X),
            title: U(ee)("upload.moveCategory"),
            width: "350px"
          }, {
            footer: Z(() => [
              j("span", Qr, [
                Y(te, {
                  onClick: M[15] || (M[15] = (X) => T.visible = !1)
                }, {
                  default: Z(() => [
                    ce(J(U(ee)("cancel")), 1)
                  ]),
                  _: 1
                }),
                Y(te, {
                  type: "primary",
                  loading: T.loading,
                  onClick: M[16] || (M[16] = (X) => T.confirm())
                }, {
                  default: Z(() => [
                    ce(J(U(ee)("confirm")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ]),
            default: Z(() => [
              Y(De, { "label-width": "60px" }, {
                default: Z(() => [
                  Y(xe, {
                    label: U(ee)("upload.moveTo"),
                    style: { "margin-bottom": "0" }
                  }, {
                    default: Z(() => [
                      Y(Te, {
                        modelValue: T.cateId,
                        "onUpdate:modelValue": M[14] || (M[14] = (X) => T.cateId = X),
                        class: "input-width"
                      }, {
                        default: Z(() => [
                          (W(!0), Q(ke, null, Ne(L.data, (X, ue) => (W(), me(ye, {
                            label: X.name,
                            value: X.id,
                            key: ue
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "title"]),
          w.show ? (W(), me(ve, {
            key: 0,
            "url-list": U(P),
            onClose: M[18] || (M[18] = (X) => w.show = !1),
            "initial-index": w.index,
            "zoom-rate": 1
          }, null, 8, ["url-list", "initial-index"])) : ne("", !0),
          Y(ge, {
            modelValue: F.visible,
            "onUpdate:modelValue": M[19] || (M[19] = (X) => F.visible = X),
            width: "50%",
            "align-center": "",
            "destroy-on-close": !0,
            "custom-class": "video-preview"
          }, {
            default: Z(() => [
              Y(Be, {
                src: F.src,
                width: "100%"
              }, null, 8, ["src"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 64)) : ne("", !0)
      ], 2);
    };
  }
});
const Jr = /* @__PURE__ */ It(Zr, [["__scopeId", "data-v-4075dbe1"]]), ea = { class: "dialog-footer" }, ta = /* @__PURE__ */ Ce({
  __name: "index",
  props: {
    // 选择数量限制
    limit: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "image"
    }
  },
  emits: ["confirm"],
  setup(V, { expose: I, emit: f }) {
    const D = V, y = pe(!1), S = pe(null), k = () => {
      y.value = !0;
    }, R = () => {
      y.value = !1;
      let L = (S == null ? void 0 : S.value.selectedFile) || {}, a = (S == null ? void 0 : S.value.selectedFileIndex) || {}, b = [];
      Object.values(a).forEach((v, h) => {
        for (let E in L)
          v == E && b.push(Ai(L[E]));
      }), f("confirm", D.limit == 1 ? b[0] ?? null : b);
    };
    return I({
      showDialog: y
    }), (L, a) => {
      const b = dt, v = bt;
      return W(), Q(ke, null, [
        j("span", {
          onClick: k,
          class: "cursor-pointer"
        }, [
          Dt(L.$slots, "default")
        ]),
        Y(v, {
          modelValue: y.value,
          "onUpdate:modelValue": a[1] || (a[1] = (h) => y.value = h),
          title: U(ee)("upload.select" + V.type),
          width: "920px",
          class: "attachment-dialog",
          "destroy-on-close": !0
        }, {
          footer: Z(() => [
            j("span", ea, [
              Y(b, {
                onClick: a[0] || (a[0] = (h) => y.value = !1)
              }, {
                default: Z(() => [
                  ce(J(U(ee)("cancel")), 1)
                ]),
                _: 1
              }),
              Y(b, {
                type: "primary",
                onClick: R
              }, {
                default: Z(() => [
                  ce(J(U(ee)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: Z(() => [
            Y(Jr, {
              limit: V.limit,
              type: V.type,
              ref_key: "attachmentRef",
              ref: S
            }, null, 8, ["limit", "type"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const ia = { class: "flex flex-wrap" }, na = {
  key: 0,
  class: "w-full h-full relative"
}, ra = { class: "w-full h-full flex items-center justify-center" }, aa = { class: "absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation" }, sa = { class: "w-full h-full flex items-center justify-center flex-col content-wrap" }, oa = { class: "leading-none text-xs mt-[10px] text-secondary" }, la = { class: "w-full h-full relative" }, ca = { class: "w-full h-full flex items-center justify-center" }, ua = { class: "absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation" }, da = { class: "w-full h-full flex items-center justify-center flex-col content-wrap" }, fa = { class: "leading-none text-xs mt-[10px] text-secondary" }, ha = /* @__PURE__ */ Ce({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "image"
    },
    imageFit: {
      type: String,
      default: "contain"
    },
    modelValue: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "100px"
    },
    imageText: {
      type: String
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(V, { emit: I }) {
    const f = V, D = Ae({
      get() {
        return f.modelValue;
      },
      set(l) {
        I("update:modelValue", l);
      }
    }), y = _e({
      data: []
    });
    let S = _e([]);
    const k = () => {
      D.value = Ie(y.data).toString(), S = Ie(y.data).map((l) => l.indexOf("data:image") != -1 ? l : Pe(l));
    }, R = Ae(() => f.limit - y.data.length);
    Xe(() => D.value, () => {
      D.value.indexOf("data:image") != -1 ? y.data = [D.value] : y.data = [
        ...D.value.split(",").filter((l) => l)
      ], k();
    }, { immediate: !0 });
    const L = Ae(() => ({
      width: f.width,
      height: f.height
    })), a = (l) => {
      f.limit == 1 ? (y.data.splice(0, 1), l && y.data.push(l.url)) : (l.forEach((e) => {
        y.data.length < f.limit && y.data.push(e.url);
      }), tt(() => {
        _();
      })), k(), tt(() => {
        I("change", D.value);
      });
    }, b = (l = 0) => {
      y.data.splice(l, 1), k();
    }, v = _e({
      show: !1,
      index: 0
    }), h = (l = 0) => {
      v.show = !0, v.index = l;
    }, E = pe(null);
    ht(() => {
      tt(() => {
        _();
      });
    });
    const _ = () => {
      f.limit != 1 && Gi.create(E.value, {
        group: "image-wrap",
        animation: 300,
        onEnd: (l) => {
          const e = y.data[l.oldIndex];
          y.data.splice(l.oldIndex, 1), y.data.splice(l.newIndex, 0, e), k();
        }
      });
    };
    return (l, e) => {
      const s = xt, t = Rt, o = ta, u = St;
      return W(), Q(ke, null, [
        j("div", ia, [
          V.limit == 1 ? (W(), Q("div", {
            key: 0,
            class: Le(["cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px]", { "rounded-full": V.type == "avatar" }]),
            style: Fe(U(L))
          }, [
            y.data.length ? (W(), Q("div", na, [
              j("div", ra, [
                Y(s, {
                  class: "w-full h-full",
                  src: y.data[0].indexOf("data:image") != -1 ? y.data[0] : U(Pe)(y.data[0]),
                  fit: V.imageFit
                }, null, 8, ["src", "fit"])
              ]),
              j("div", aa, [
                Y(t, {
                  name: "element ZoomIn",
                  color: "#fff",
                  size: "18px",
                  class: "mr-[10px]",
                  onClick: e[0] || (e[0] = (n) => h())
                }),
                Y(t, {
                  name: "element Delete",
                  color: "#fff",
                  size: "18px",
                  onClick: kt(b, ["stop"])
                }, null, 8, ["onClick"])
              ])
            ])) : (W(), me(o, {
              key: 1,
              limit: U(R),
              onConfirm: a
            }, {
              default: Z(() => [
                j("div", sa, [
                  Y(t, {
                    name: "element Plus",
                    size: "20px",
                    color: "var(--el-text-color-secondary)"
                  }),
                  j("div", oa, J(V.imageText || U(ee)("upload.root")), 1)
                ])
              ]),
              _: 1
            }, 8, ["limit"]))
          ], 6)) : (W(), Q(ke, { key: 1 }, [
            j("div", {
              class: "flex flex-wrap",
              ref_key: "imgListRef",
              ref: E
            }, [
              (W(!0), Q(ke, null, Ne(y.data, (n, c) => (W(), Q("div", {
                class: "cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px] mb-[10px]",
                style: Fe(U(L)),
                key: n + c
              }, [
                j("div", la, [
                  j("div", ca, [
                    Y(s, {
                      src: U(Pe)(n),
                      fit: "contain"
                    }, null, 8, ["src"])
                  ]),
                  j("div", ua, [
                    Y(t, {
                      name: "element ZoomIn",
                      color: "#fff",
                      size: "18px",
                      class: "mr-[10px]",
                      onClick: (p) => h(c)
                    }, null, 8, ["onClick"]),
                    Y(t, {
                      name: "element Delete",
                      color: "#fff",
                      size: "18px",
                      onClick: (p) => b(c)
                    }, null, 8, ["onClick"])
                  ])
                ])
              ], 4))), 128))
            ], 512),
            y.data.length < V.limit ? (W(), Q("div", {
              key: 0,
              class: "cursor-pointer overflow-hidden relative border border-dashed border-color image-wrap",
              style: Fe(U(L))
            }, [
              Y(o, {
                limit: U(R),
                onConfirm: a
              }, {
                default: Z(() => [
                  j("div", da, [
                    Y(t, {
                      name: "element Plus",
                      size: "20px",
                      color: "var(--el-text-color-secondary)"
                    }),
                    j("div", fa, J(V.imageText || U(ee)("upload.root")), 1)
                  ])
                ]),
                _: 1
              }, 8, ["limit"])
            ], 4)) : ne("", !0)
          ], 64))
        ]),
        v.show ? (W(), me(u, {
          key: 0,
          "url-list": U(S),
          onClose: e[1] || (e[1] = (n) => v.show = !1),
          "initial-index": v.index,
          "zoom-rate": 1
        }, null, 8, ["url-list", "initial-index"])) : ne("", !0)
      ], 64);
    };
  }
});
const Aa = /* @__PURE__ */ It(ha, [["__scopeId", "data-v-98c38425"]]);
export {
  Aa as _,
  ta as a,
  sr as b
};
