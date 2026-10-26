import { defineComponent as r, openBlock as o, createElementBlock as n, toDisplayString as _ } from "vue";
import { _ as a } from "./_plugin-vue_export-helper-dad06003.js";
const d = { class: "form-render" }, s = /* @__PURE__ */ r({
  __name: "detail-form-render",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    return (c, p) => (o(), n("div", d, _(t.data.render_value), 1));
  }
});
const m = /* @__PURE__ */ a(s, [["__scopeId", "data-v-2b402684"]]);
export {
  m as default
};
