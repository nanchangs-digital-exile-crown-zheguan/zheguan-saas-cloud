import { ElImage as d } from "element-plus/es";
import { defineComponent as p, computed as u, openBlock as t, createElementBlock as l, Fragment as _, renderList as f, createBlock as g, unref as n, normalizeClass as h } from "vue";
import { img as i } from "/admin/assets/shared/core-shared.js";
const z = /* @__PURE__ */ p({
  __name: "detail-form-image",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(o) {
    const e = o, c = u(() => e.data.handle_field_value.map((a) => i(a)));
    return (a, x) => {
      const m = d;
      return t(), l("div", null, [
        (t(!0), l(_, null, f(e.data.handle_field_value, (s, r) => (t(), g(m, {
          src: n(i)(s),
          class: h(["w-[70px] h-[70px]", { "mr-[5px]": r + 1 < e.data.handle_field_value.length }]),
          fit: "contain",
          "preview-src-list": n(c),
          "zoom-rate": 1.2,
          "max-scale": 7,
          "min-scale": 0.2,
          "initial-index": r,
          "hide-on-click-modal": !0
        }, null, 8, ["src", "class", "preview-src-list", "zoom-rate", "min-scale", "initial-index"]))), 256))
      ]);
    };
  }
});
export {
  z as default
};
