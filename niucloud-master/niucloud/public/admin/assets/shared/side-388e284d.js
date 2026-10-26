import { defineComponent as U, ref as p, computed as h, onMounted as j, resolveComponent as o, openBlock as d, createBlock as g, withCtx as t, createVNode as u, createElementVNode as _, normalizeClass as q, unref as a, createElementBlock as v, toDisplayString as z, createCommentVNode as I, Fragment as W, renderList as $ } from "vue";
import { _ as G } from "./icon-addon-one-2b9cfff5.js";
import { useRoute as H } from "vue-router";
import { u as J, j as K, hW as O, cC as y, k as P, m as Q, n as k, i5 as T } from "./core-shared-86a0da16.js";
import X from "./menu-item-741d6745.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const Y = /* @__PURE__ */ _("img", {
  class: "logo__image",
  src: G,
  alt: ""
}, null, -1), Z = {
  key: 0,
  class: "logo__name"
}, ee = /* @__PURE__ */ _("div", { class: "h-[48px]" }, null, -1), _e = /* @__PURE__ */ U({
  __name: "side",
  setup(se) {
    const l = J(), r = K(), ne = H(), n = r.siteInfo, { menuActive: x } = O(), S = r.routers, w = r.addonIndexRoute, c = p([]), i = {}, C = h(() => {
      var s;
      const e = l.website;
      return ((s = r.siteInfo) == null ? void 0 : s.icon) || (e == null ? void 0 : e.icon);
    }), L = h(() => {
      var s;
      const e = l.website;
      return (e == null ? void 0 : e.site_name) || ((s = r.siteInfo) == null ? void 0 : s.site_name) || "";
    }), m = p([]), A = async () => {
      const e = await Q();
      m.value = e.data, k.set({ key: "defaultAppList", data: m.value });
    }, f = p([]), E = async () => {
      const e = await T();
      f.value = e.data.list, k.set({ key: "specialAppList", data: f.value });
    };
    if (j(() => {
      A(), E();
    }), S.forEach((e) => {
      e.original_name = e.name, e.meta.addon == "" ? e.meta.attr == "" && e.name != "sign" && e.name != "verify" && (e.children && e.children.length && (e.name = y(e.children)), c.value.push(e)) : e.meta.addon != "" && (n == null ? void 0 : n.apps.length) == 1 && (n == null ? void 0 : n.apps[0].key) == e.meta.addon && e.meta.show ? e.children ? (e.children.forEach((s) => {
        s.original_name = s.name, s.children && s.children.length && (s.name = y(s.children));
      }), c.value.unshift(...e.children)) : c.value.unshift(e) : i[e.meta.addon] = e;
    }), (n == null ? void 0 : n.apps.length) > 1) {
      const e = [];
      n == null || n.apps.forEach((s) => {
        i[s.key] && (i[s.key].name = w[s.key], e.push(i[s.key]));
      }), c.value.unshift(...e);
    }
    return (e, s) => {
      const R = o("el-image"), M = o("el-header"), N = o("el-menu"), V = o("el-scrollbar"), b = o("el-main"), B = o("el-container");
      return d(), g(B, { class: "aside-sidebar h-screen layout-aside flex flex-col" }, {
        default: t(() => [
          u(M, { class: "logo-wrap flex items-center" }, {
            default: t(() => [
              _("div", {
                class: q(["logo flex items-center min-w-0", { "is-collapse": a(l).menuIsCollapse }])
              }, [
                u(R, {
                  class: "logo__image",
                  src: a(P)(a(C)),
                  fit: "contain"
                }, {
                  error: t(() => [
                    Y
                  ]),
                  _: 1
                }, 8, ["src"]),
                a(l).menuIsCollapse ? I("", !0) : (d(), v("span", Z, z(a(L)), 1))
              ], 2)
            ]),
            _: 1
          }),
          u(b, { class: "menu-wrap" }, {
            default: t(() => [
              u(V, null, {
                default: t(() => [
                  u(N, {
                    "default-active": a(x),
                    router: !1,
                    class: "aside-menu h-full",
                    "unique-opened": !0,
                    collapse: a(l).menuIsCollapse
                  }, {
                    default: t(() => [
                      (d(!0), v(W, null, $(c.value, (D, F) => (d(), g(X, {
                        routes: D,
                        key: F
                      }, null, 8, ["routes"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["default-active", "collapse"]),
                  ee
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _e as default
};
