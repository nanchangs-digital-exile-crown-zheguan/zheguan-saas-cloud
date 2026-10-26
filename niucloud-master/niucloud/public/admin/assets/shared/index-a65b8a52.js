import { defineComponent as v, ref as C, computed as k, resolveComponent as u, openBlock as V, createBlock as N, unref as a, isRef as P, withCtx as s, createElementVNode as d, createVNode as m, createTextVNode as f, toDisplayString as c } from "vue";
import { t as r, hN as b, hO as B } from "./core-shared-86a0da16.js";
import { useRouter as D } from "vue-router";
import { ElMessage as E } from "element-plus";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const T = { class: "dialog-footer" }, z = /* @__PURE__ */ v({
  __name: "index",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: ""
    },
    searchParam: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:show", "close"],
  setup(h, { emit: n }) {
    const e = h, t = C(!1), p = k({
      get() {
        return e.show;
      },
      set(l) {
        n("update:show", l);
      }
    }), _ = D(), g = () => {
      t.value = !0;
      const l = _.resolve({
        path: "/site/setting/export"
      });
      b(e.type, { page: 1, limit: 1, ...e.searchParam }).then((o) => {
        o.data ? B(e.type, e.searchParam).then(() => {
          t.value = !1, n("close", !1), setTimeout(() => {
            window.open(l.href);
          }, 100);
        }) : (t.value = !1, E.error(o.msg));
      }).catch(() => {
        t.value = !1;
      });
    }, x = () => {
      n("close", !1);
    };
    return (l, o) => {
      const i = u("el-button"), w = u("el-dialog");
      return V(), N(w, {
        modelValue: a(p),
        "onUpdate:modelValue": o[0] || (o[0] = (y) => P(p) ? p.value = y : null),
        title: a(r)("exportTip"),
        width: "300px",
        "close-on-click-modal": !0,
        "close-on-press-escape": !1,
        "show-close": !1
      }, {
        footer: s(() => [
          d("span", T, [
            m(i, { onClick: x }, {
              default: s(() => [
                f(c(a(r)("cancel")), 1)
              ]),
              _: 1
            }),
            m(i, {
              type: "primary",
              onClick: g,
              loading: t.value
            }, {
              default: s(() => [
                f(c(a(r)("exportConfirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: s(() => [
          d("span", null, c(a(r)("exportPlaceholder")), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  z as default
};
