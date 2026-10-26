import { defineComponent as r, watch as a, resolveComponent as n, openBlock as _, createBlock as p, withCtx as c, createVNode as i } from "vue";
import { useRoute as m } from "vue-router";
import d from "./side-96563d29.js";
import { u, a as l } from "./core-shared-86a0da16.js";
import "./icon-addon-one-2b9cfff5.js";
import "./menu-item-097b0fb9.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const f = /* @__PURE__ */ r({
  __name: "index",
  setup(x) {
    const t = u(), o = m();
    return a(o, () => {
      t.$patch((e) => {
        e.menuDrawer = !1;
      });
    }), (e, y) => {
      const s = n("el-aside");
      return _(), p(s, { class: "h-screen layout-aside w-auto" }, {
        default: c(() => [
          i(d, { class: "hidden-xs-only" })
        ]),
        _: 1
      });
    };
  }
});
const N = /* @__PURE__ */ l(f, [["__scopeId", "data-v-46908aed"]]);
export {
  N as default
};
