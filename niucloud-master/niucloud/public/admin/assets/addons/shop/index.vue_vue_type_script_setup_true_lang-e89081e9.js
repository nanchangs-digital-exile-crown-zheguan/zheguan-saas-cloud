import { a as j } from "./index-36e25503.js";
import { defineComponent as A, ref as D, toRef as N, watch as P, nextTick as Y, onDeactivated as F, onBeforeUnmount as x, createVNode as _, computed as M, openBlock as k, createElementBlock as q, Fragment as G, unref as B, isRef as W } from "vue";
import { getToken as z, img as O } from "/admin/assets/shared/core-shared.js";
import { storage as K } from "/admin/assets/shared/core-shared.js";
import { config as V } from "/admin/assets/shared/core-shared.js";
function Q(r) {
  return r.replace(/-(\w)/g, function(e, o) {
    return o ? o.toUpperCase() : "";
  });
}
function Z(r) {
  return r.install = function(e) {
    var o = r, t = o.name;
    e.component(t, r), e.component(Q("-" + t), r);
  }, r;
}
var J = /* @__PURE__ */ function() {
  function r() {
    this.listeners = {};
  }
  var e = r.prototype;
  return e.on = function(t, d) {
    this.listeners[t] === void 0 && (this.listeners[t] = {
      triggered: !1,
      requested: !1,
      cbs: []
    }), this.listeners[t].triggered && d(), this.listeners[t].cbs.push(d);
  }, e.emit = function(t) {
    this.listeners[t] && (this.listeners[t].triggered = !0, this.listeners[t].cbs.forEach(function(d) {
      return d();
    }));
  }, r;
}();
function X(r, e) {
  var o, t = function() {
    for (var m = this, n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    o && clearTimeout(o), o = setTimeout(function() {
      r.apply(m, a);
    }, e);
  };
  return t.cancel = function() {
    o !== void 0 && clearTimeout(o);
  }, t;
}
function ee(r) {
  return r.reduce(function(e, o) {
    return e.then(o);
  }, Promise.resolve());
}
function te(r) {
  for (var e = "abcdefghijklmnopqrstuvwxyz", o = "", t = 0; t < r; t++)
    o += e.charAt(Math.floor(Math.random() * e.length));
  return o;
}
const ne = A({
  name: "vue-ueditor-wrap",
  props: {
    // 手动设置 UEditor ID
    editorId: String,
    // 常用于表单中 http://fex.baidu.com/ueditor/#start-submit
    name: String,
    modelValue: {
      type: String,
      default: ""
    },
    // http://fex.baidu.com/ueditor/#start-config
    config: Object,
    // 监听富文本内容变化的方式
    mode: {
      type: String,
      default: "observer",
      validator: function(e) {
        return ["observer", "listener"].indexOf(e) !== -1;
      }
    },
    // MutationObserver 的配置 https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit
    observerOptions: {
      type: Object,
      default: function() {
        return {
          attributes: !0,
          // 是否监听 DOM 元素的属性变化
          attributeFilter: ["src", "style", "type", "name"],
          // 只有在该数组中的属性值的变化才会监听
          characterData: !0,
          // 是否监听文本节点
          childList: !0,
          // 是否监听子节点
          subtree: !0
          // 是否监听后代元素
        };
      }
    },
    // MutationObserver 的回调函数防抖间隔
    observerDebounceTime: {
      type: Number,
      default: 50,
      validator: function(e) {
        return e >= 20;
      }
    },
    //  SSR 项目，服务端实例化组件时组件内部不会对 UEditor 进行初始化，仅在客户端初始化 UEditor，这个参数设置为 true 可以跳过环境检测，直接初始化
    forceInit: Boolean,
    // 是否在组建销毁时销毁 UEditor 实例
    destroy: {
      type: Boolean,
      default: !0
    },
    // 指定 UEditor 依赖的静态资源，js & css
    editorDependencies: {
      type: Array
    },
    // 检测依赖的静态资源是否加载完成的方法
    editorDependenciesChecker: {
      type: Function
    }
  },
  emits: ["update:modelValue", "before-init", "ready"],
  setup: function(e, o) {
    var t = o.emit, d = {
      UN_READY: "UN_READY",
      // 尚未初始化
      PENDING: "PENDING",
      // 开始初始化但尚未 ready
      READY: "READY"
      // 初始化完成并已 ready
    }, m = d.UN_READY, n, a, s, v = D(), C = ["ueditor.config.js", "ueditor.all.min.js"], y = function() {
      return window.UE && window.UE.getEditor && window.UEDITOR_CONFIG && Object.keys(window.UEDITOR_CONFIG).length !== 0;
    }, R = N(e, "modelValue");
    window.$loadEventBus || (window.$loadEventBus = new J());
    var U = function(i) {
      return new Promise(function(b, p) {
        if (window.$loadEventBus.on(i, b), window.$loadEventBus.listeners[i].requested === !1) {
          window.$loadEventBus.listeners[i].requested = !0;
          var c = document.createElement("script");
          c.src = i, c.onload = function() {
            window.$loadEventBus.emit(i);
          }, c.onerror = p, document.getElementsByTagName("head")[0].appendChild(c);
        }
      });
    }, L = function(i) {
      return new Promise(function(b, p) {
        if (window.$loadEventBus.on(i, b), window.$loadEventBus.listeners[i].requested === !1) {
          window.$loadEventBus.listeners[i].requested = !0;
          var c = document.createElement("link");
          c.type = "text/css", c.rel = "stylesheet", c.href = i, c.onload = function() {
            window.$loadEventBus.emit(i);
          }, c.onerror = p, document.getElementsByTagName("head")[0].appendChild(c);
        }
      });
    }, u = function() {
      return new Promise(function(i, b) {
        if (e.editorDependencies && e.editorDependenciesChecker && e.editorDependenciesChecker()) {
          i();
          return;
        }
        if (!e.editorDependencies && y()) {
          i();
          return;
        }
        var p = (e.editorDependencies || C).reduce(function(h, E) {
          var H = /^((https?:)?\/\/)?[-a-zA-Z0-9]+(\.[-a-zA-Z0-9]+)+\//.test(E);
          if (!H) {
            var T;
            E = (((T = e.config) == null ? void 0 : T.UEDITOR_HOME_URL) || "") + E;
          }
          return E.slice(-3) === ".js" ? h.jsLinks.push(E) : E.slice(-4) === ".css" && h.cssLinks.push(E), h;
        }, {
          jsLinks: [],
          cssLinks: []
        }), c = p.jsLinks, $ = p.cssLinks;
        Promise.all([
          Promise.all($.map(function(h) {
            return L(h);
          })),
          // 依次加载依赖的 JS 文件，JS 执行是有顺序要求的，比如 ueditor.all.js 就要晚于 ueditor.config.js 执行
          // 动态创建 script 是先加载完的先执行，所以不可以一次性创建所有资源的引入脚本
          ee(c.map(function(h) {
            return function() {
              return U(h);
            };
          }))
        ]).then(function() {
          return i();
        }).catch(b);
      });
    }, l = function() {
      s = n.getContent(), t("update:modelValue", s);
    }, g = function() {
      n.addListener("contentChange", l);
    }, w = function() {
      n.document.getElementById("baidu_pastebin") || (s = n.getContent(), t("update:modelValue", s));
    }, S = function() {
      a = new MutationObserver(X(w, e.observerDebounceTime)), a.observe(n.body, e.observerOptions);
    }, I = function() {
      var i = e.editorId || "editor_" + te(8);
      v.value.id = i, t("before-init", i), n = window.UE.getEditor(i, e.config), n.addListener("ready", function() {
        m === d.READY ? n.setContent(e.modelValue) : (m = d.READY, t("ready", n), e.modelValue && n.setContent(e.modelValue)), e.mode === "observer" && window.MutationObserver ? S() : g();
      });
    };
    return P(R, function(f) {
      m === d.UN_READY ? (m = d.PENDING, (e.forceInit || typeof window < "u") && u().then(function() {
        v.value ? I() : Y(function() {
          return I();
        });
      }).catch(function() {
        throw new Error("[vue-ueditor-wrap] UEditor 资源加载失败！请检查资源是否存在，UEDITOR_HOME_URL 是否配置正确！");
      })) : m === d.READY && (f === s || n.setContent(f || ""));
    }, {
      immediate: !0
    }), F(function() {
      n && n.removeListener("contentChange", l), a && a.disconnect();
    }), x(function() {
      a && a.disconnect && a.disconnect(), e.destroy && n && n.destroy && n.destroy();
    }), function() {
      return _("div", null, [_("div", {
        ref: v,
        name: e.name
      }, null)]);
    };
  }
});
var re = Z(ne);
const oe = re, le = /* @__PURE__ */ A({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "simple"
    },
    height: {
      type: Number,
      default: 600
    }
  },
  emits: ["update:modelValue", "handleBlur"],
  setup(r, { emit: e }) {
    const o = r, t = D(), d = D(null), m = D(null), n = M({
      get() {
        return o.modelValue;
      },
      set(u) {
        e("update:modelValue", u);
      }
    });
    let a = null;
    const s = {};
    s[V.VITE_REQUEST_HEADER_TOKEN_KEY] = z(), s[V.VITE_REQUEST_HEADER_SITEID_KEY] = K.get("siteId") || 0;
    const v = V.VITE_APP_BASE_URL || "/adminapi/", C = v.endsWith("/") ? v : `${v}/`, y = D({
      debug: !1,
      UEDITOR_HOME_URL: "/admin/ueditor/",
      UEDITOR_CORS_URL: location.origin + "/admin/ueditor/",
      serverUrl: `${C}sys/ueditor`,
      serverHeaders: s,
      // 编辑器不自动被内容撑高
      autoHeightEnabled: !1,
      // 初始容器高度
      initialFrameHeight: o.height,
      // 初始容器宽度
      initialFrameWidth: "100%",
      wordCount: !0,
      toolbarCallback: function(u, l) {
        switch (a = l, u) {
          case "insertimage":
            return d.value.showDialog = !0, !0;
          case "insertvideo":
            return m.value.showDialog = !0, !0;
        }
      }
    }), R = (u) => {
      u.addListener("blur", () => {
        const l = u.getContent();
        e("update:modelValue", l), e("handleBlur", l);
      }), u.addListener("fullscreenchanged", (l, g) => {
        const w = u.ui.getDom();
        g ? w.classList.add("edui-fullscreen") : w.classList.remove("edui-fullscreen"), console.log("全屏切换", g);
      }), u.getContentLength, u.getContentLength = function() {
        return u.getContent().replace(/[\s\u3000]+/g, "").length;
      };
    }, U = (u) => {
      u.forEach((l) => {
        a == null || a.execCommand("insertHtml", `<img src="${O(l.url)}">`);
      });
    }, L = (u) => {
      a == null || a.execCommand("insertHtml", `<video src="${O(u.url)}">`);
    };
    return (u, l) => {
      const g = j;
      return k(), q(G, null, [
        _(g, {
          type: "image",
          ref_key: "imageRef",
          ref: d,
          limit: "",
          onConfirm: U
        }, null, 512),
        _(g, {
          type: "video",
          ref_key: "videoRef",
          ref: m,
          onConfirm: L
        }, null, 512),
        _(B(oe), {
          modelValue: B(n),
          "onUpdate:modelValue": l[0] || (l[0] = (w) => W(n) ? n.value = w : null),
          config: y.value,
          editorDependencies: ["ueditor.config.js", "ueditor.all.js"],
          ref_key: "editorRef",
          ref: t,
          mode: "observer",
          onReady: R
        }, null, 8, ["modelValue", "config", "editorDependencies"])
      ], 64);
    };
  }
});
export {
  le as _
};
