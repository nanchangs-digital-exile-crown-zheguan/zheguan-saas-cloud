import { defineComponent as B, ref as r, onMounted as V, watch as F, resolveComponent as m, openBlock as f, createBlock as y, withCtx as v, createVNode as L, unref as x, createElementBlock as J, Fragment as R, renderList as W, createCommentVNode as U, pushScopeId as q, popScopeId as z, createElementVNode as D } from "vue";
import { useRoute as G } from "vue-router";
import H from "./menu-item-b5957800.js";
import { hW as P, u as Q, j as T, n as i, i4 as X, m as Y, i5 as Z, a as $ } from "./core-shared-86a0da16.js";
import { c as ee } from "./lodash-8c6c2daa.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const te = (p) => (q("data-v-3043f0df"), p = p(), z(), p), ae = /* @__PURE__ */ te(() => /* @__PURE__ */ D("div", { class: "h-[48px]" }, null, -1)), se = /* @__PURE__ */ B({
  __name: "side",
  setup(p) {
    const o = G(), { menuActive: N } = P(), E = Q(), u = T().siteInfo, A = r(null), n = r([]), c = r(o.matched[1].name), C = async () => {
      const e = await Y();
      A.value = e.data, i.set({ key: "defaultAppList", data: A.value });
    }, S = r([]), K = async () => {
      const e = await Z();
      S.value = e.data.list, i.set({ key: "specialAppList", data: S.value });
    }, M = r([]), g = r([]);
    V(() => {
      C(), K();
      const e = w();
      M.value = O(e), g.value = j(e), i.set({ key: "specialMenuNames", data: M.value }), i.set({ key: "specialMenuNamesLevel1", data: g.value });
    });
    const h = r([]), I = () => {
      if (h.value = [], c.value !== "active" && c.value !== "addon" && n.value && Object.values(n.value).length) {
        const e = ee(n.value);
        for (const a in e)
          h.value.push(e[a].name);
      }
    }, b = (e) => {
      if (!e || typeof e != "object")
        return [];
      const a = [];
      return Object.values(e).forEach((t) => {
        Array.isArray(t.list) && t.list.forEach((l) => {
          l.key && a.push(l.key);
        });
      }), a;
    }, w = () => {
      const e = i.get("specialAppList");
      if (Array.isArray(e) && e.length) {
        const a = JSON.parse(JSON.stringify(e)), t = i.get("activeAppKey");
        a.forEach((s) => {
          s.children && Array.isArray(s.children) && ((_) => {
            _.forEach((d) => {
              d && d.is_show !== void 0 && (d.is_show = d.menu_key === t ? 1 : 0);
            });
          })(s.children);
        });
        const l = a.filter((s) => s.children && s.children.length > 0);
        return X(l);
      }
      return [];
    };
    F(o, () => {
      if (o.meta.attr != "")
        c.value = o.matched[1].name, n.value = o.matched[1].children ?? [];
      else if ((u == null ? void 0 : u.apps.length) > 1)
        n.value = o.matched[2].children, c.value = o.matched[2].name;
      else {
        const t = o.matched[2];
        t.meta.addon == "" ? (c.value = o.matched[2].name, n.value = o.matched[2].children ?? []) : t.meta.addon == (u == null ? void 0 : u.apps[0].key) ? (c.value = o.matched[3].name, n.value = o.matched[3].children ?? []) : (c.value = o.matched[2].name, n.value = o.matched[2].children ?? []);
      }
      I();
      const e = i.get("defaultAppList"), a = b(e);
      if (n.value = n.value.filter((t) => !t.name || !a.includes(t.name)), c.value == "addon") {
        const t = w();
        if (t.length) {
          const l = n.value.findIndex(
            (s) => s.name === "addon_list"
          );
          l !== -1 ? n.value.splice(
            l + 1,
            0,
            ...t
          ) : n.value.push(...t);
        }
      }
    }, { immediate: !0 });
    const O = (e) => {
      const a = [], t = (l) => {
        l.forEach((s) => {
          s.name && a.push(s.name), s.children && Array.isArray(s.children) && t(s.children);
        });
      };
      return e.forEach((l) => {
        l.children && Array.isArray(l.children) && t(l.children);
      }), a;
    }, j = (e) => {
      const a = [];
      return e.forEach((t) => {
        t.name && a.push(t.name);
      }), a;
    };
    return (e, a) => {
      const t = m("el-menu"), l = m("el-scrollbar"), s = m("el-main"), k = m("el-container");
      return f(), y(k, { class: "w-100 h-[100%]" }, {
        default: v(() => [
          L(s, { class: "p-0 flex" }, {
            default: v(() => [
              n.value.length ? (f(), y(l, {
                key: 0,
                class: "two-menu w-[200px]"
              }, {
                default: v(() => [
                  L(t, {
                    class: "aside-menu",
                    "default-active": x(N),
                    "default-openeds": h.value,
                    router: !1,
                    collapse: x(E).menuIsCollapse
                  }, {
                    default: v(() => [
                      (f(!0), J(R, null, W(n.value, (_, d) => (f(), y(H, {
                        routes: _,
                        key: d
                      }, null, 8, ["routes"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["default-active", "default-openeds", "collapse"]),
                  ae
                ]),
                _: 1
              })) : U("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const ve = /* @__PURE__ */ $(se, [["__scopeId", "data-v-3043f0df"]]);
export {
  ve as default
};
