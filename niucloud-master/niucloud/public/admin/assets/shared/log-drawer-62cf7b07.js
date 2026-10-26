import { defineComponent as u, ref as t, computed as m, resolveComponent as f, openBlock as v, createBlock as w, unref as g, withCtx as x, createElementVNode as h, createVNode as y, pushScopeId as S, popScopeId as b } from "vue";
import I from "./log-list-3098e236.js";
import { a as L } from "./core-shared-86a0da16.js";
import "./index-49fea3c5.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const V = { class: "log-drawer__body" }, k = /* @__PURE__ */ u({
  __name: "log-drawer",
  setup(C, { expose: s }) {
    const a = t(!1), l = t(""), r = t(""), p = t(), d = m(() => r.value ? `调用日志 - ${r.value}` : "调用日志"), n = (e, o) => {
      l.value = e ?? "", r.value = o ?? "", a.value = !0;
    }, _ = () => {
      var e;
      (e = p.value) == null || e.refresh();
    };
    return s({ show: n }), (e, o) => {
      const c = f("el-drawer");
      return v(), w(c, {
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a.value = i),
        title: g(d),
        size: "960px",
        "destroy-on-close": "",
        onOpened: _
      }, {
        default: x(() => [
          h("div", V, [
            y(I, {
              ref_key: "logListRef",
              ref: p,
              "app-id": l.value,
              "auto-load": !1
            }, null, 8, ["app-id"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const q = /* @__PURE__ */ L(k, [["__scopeId", "data-v-5a8d113a"]]);
export {
  q as default
};
