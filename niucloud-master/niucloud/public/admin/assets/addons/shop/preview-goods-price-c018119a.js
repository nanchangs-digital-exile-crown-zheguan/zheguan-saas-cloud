import { defineComponent as a, computed as i, openBlock as f, createElementBlock as p, normalizeStyle as u, unref as m } from "vue";
import { u as s } from "./poster-ebe55d2d.js";
import "pinia";
import "/admin/assets/shared/admin-lang.js";

import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const _ = /* @__PURE__ */ a({
  __name: "preview-goods-price",
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  setup(l, { expose: n }) {
    const e = l;
    s(), i(() => e.value);
    const r = i(() => {
      let t = "";
      t += `font-size: ${e.value.fontSize}px;color: ${e.value.fontColor};line-height: ${e.value.lineHeight + e.value.fontSize}px;`, (e.value.x == "left" || e.value.x == "center" || e.value.x == "right") && (t += `text-align: ${e.value.x};`), e.value.weight && (t += "font-weight: bold;"), (!e.value.fontFamily || e.value.fontFamily == "static/font/OPLUSSANS3-REGULAR.ttf") && (t += "font-family: poster_price_font;");
      const o = document.getElementById(e.value.id);
      return o ? t += `width:${o.offsetWidth}px;height:${o.offsetHeight}px;` : t += `width:${e.value.width}px;height:${e.value.height}px;`, t;
    });
    return n({}), (t, o) => (f(), p("div", {
      class: "overflow-hidden",
      style: u(m(r))
    }, "￥980.00", 4));
  }
});
export {
  _ as default
};
