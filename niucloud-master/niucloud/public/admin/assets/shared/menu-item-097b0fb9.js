import { defineComponent as E, computed as x, resolveComponent as S, unref as o, openBlock as r, createElementBlock as c, Fragment as f, createBlock as i, withCtx as m, createElementVNode as y, toDisplayString as h, renderList as A, normalizeClass as k, createCommentVNode as g, pushScopeId as N, popScopeId as O } from "vue";
import { useRouter as B, useRoute as J } from "vue-router";
import { j as L, hX as V, n as b, a as j } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const q = {
  class: /* @__PURE__ */ k(["ml-[10px]"])
}, D = {
  key: 2,
  class: "!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"
}, R = /* @__PURE__ */ E({
  __name: "menu-item",
  props: {
    routes: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const l = e, C = B(), M = J(), a = L().siteInfo, n = x(() => l.routes.meta), { handleMenuJump: I } = V(), _ = x(() => !l.routes.children || !Array.isArray(l.routes.children) ? !1 : l.routes.children.some((s) => {
      var t;
      return ((t = s.meta) == null ? void 0 : t.show) === 1;
    })), F = x(() => {
      const s = {};
      return a == null || a.apps.forEach((t) => {
        s[t.key] = t;
      }), a == null || a.site_addons.forEach((t) => {
        s[t.key] = t;
      }), s;
    }), v = (s) => {
      const t = b.get("specialMenuNames"), d = b.get("specialMenuNamesLevel1");
      if (t.includes(s) || b.remove("activeAppKey"), d.includes(s) && (s = "addon_list"), I(s, n.value))
        return;
      const u = M.name === s ? { refresh: Date.now() } : {};
      C.push({ name: s, query: u });
    };
    return (s, t) => {
      const d = S("el-sub-menu"), p = S("el-menu-item");
      return o(n).show ? (r(), c(f, { key: 0 }, [
        o(_) ? (r(), i(d, {
          key: 0,
          index: String(e.routes.name)
        }, {
          title: m(() => [
            y("span", q, h(o(n).title), 1)
          ]),
          default: m(() => [
            (r(!0), c(f, null, A(e.routes.children, (u, w) => (r(), i($, {
              routes: u,
              key: w
            }, null, 8, ["routes"]))), 128))
          ]),
          _: 1
        }, 8, ["index"])) : (r(), c(f, { key: 1 }, [
          o(n).addon && o(n).parent_route && o(n).parent_route.addon == "" ? (r(), i(p, {
            key: 0,
            index: String(e.routes.name),
            onClick: t[0] || (t[0] = (u) => v(e.routes.name))
          }, {
            title: m(() => [
              y("span", {
                class: k([{ "text-[15px]": e.routes.meta.class == 1 }, { "text-[14px]": e.routes.meta.class != 1 }, { "ml-[10px]": e.routes.meta.class == 2, "ml-[15px]": e.routes.meta.class == 3 }])
              }, h(o(n).title), 3)
            ]),
            _: 1
          }, 8, ["index"])) : (r(), i(p, {
            key: 1,
            index: String(e.routes.name),
            onClick: t[1] || (t[1] = (u) => v(e.routes.name))
          }, {
            title: m(() => [
              y("span", {
                class: k([{ "text-[15px]": e.routes.meta.class == 1 }, { "text-[14px]": e.routes.meta.class != 1 }, { "ml-[10px]": e.routes.meta.class == 2, "ml-[15px]": e.routes.meta.class == 3 }])
              }, h(o(n).title), 3)
            ]),
            _: 1
          }, 8, ["index"]))
        ], 64)),
        e.routes.is_border ? (r(), c("div", D)) : g("", !0)
      ], 64)) : g("", !0);
    };
  }
});
const $ = /* @__PURE__ */ j(R, [["__scopeId", "data-v-18bb1d75"]]);
export {
  $ as default
};
