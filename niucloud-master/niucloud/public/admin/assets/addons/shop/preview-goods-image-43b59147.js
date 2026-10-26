import { defineComponent as s, computed as o, openBlock as c, createElementBlock as p, normalizeStyle as a, unref as m, createElementVNode as i } from "vue";
import { _ as u } from "./goods_default-bd0cc1e2.js";
const _ = /* @__PURE__ */ i("img", {
  src: u,
  class: "w-full h-full"
}, null, -1), d = [
  _
], w = /* @__PURE__ */ s({
  __name: "preview-goods-image",
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  setup(n, { expose: l }) {
    const t = n;
    o(() => t.value);
    const r = o(() => {
      let e = "";
      return e += `width: ${t.value.width}px;`, e;
    });
    return l({}), (e, f) => (c(), p("div", {
      class: "pointer-events-none max-w-[720px]",
      style: a(m(r))
    }, d, 4));
  }
});
export {
  w as default
};
