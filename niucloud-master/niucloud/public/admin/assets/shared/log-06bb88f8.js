import { defineComponent as i, computed as m, openBlock as l, createElementBlock as n, normalizeStyle as s, unref as e, createElementVNode as t, createVNode as c } from "vue";
import { useRoute as _ } from "vue-router";
import { u as d } from "./useTablePageHeight-33d60cf6.js";
import f from "./log-list-3098e236.js";
import "./index-49fea3c5.js";
import "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const u = { class: "table-fill-page__card" }, g = { class: "flex-1 min-h-0" }, z = /* @__PURE__ */ i({
  __name: "log",
  setup(h) {
    const { pageRef: o, pageStyle: r } = d(), p = _(), a = m(() => p.query.app_id || "");
    return (y, b) => (l(), n("div", {
      ref_key: "pageRef",
      ref: o,
      class: "main-container table-fill-page",
      style: s(e(r))
    }, [
      t("div", u, [
        t("div", g, [
          c(f, { "app-id": e(a) }, null, 8, ["app-id"])
        ])
      ])
    ], 4));
  }
});
export {
  z as default
};
