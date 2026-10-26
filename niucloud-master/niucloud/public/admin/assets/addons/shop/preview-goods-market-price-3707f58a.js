import { defineComponent as f, computed as l, openBlock as r, createElementBlock as u, normalizeStyle as p, unref as c } from "vue";
const s = /* @__PURE__ */ f({
  __name: "preview-goods-market-price",
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  setup(i, { expose: n }) {
    const e = i;
    l(() => e.value);
    const a = l(() => {
      let t = "";
      t += `font-size: ${e.value.fontSize}px;color: ${e.value.fontColor};line-height: ${e.value.lineHeight + e.value.fontSize}px;`, (e.value.x == "left" || e.value.x == "center" || e.value.x == "right") && (t += `text-align: ${e.value.x};`), e.value.weight && (t += "font-weight: bold;"), (!e.value.fontFamily || e.value.fontFamily == "static/font/OPLUSSANS3-REGULAR.ttf") && (t += "font-family: poster_price_font;");
      const o = document.getElementById(e.value.id);
      return o ? t += `width:${o.offsetWidth}px;height:${o.offsetHeight}px;` : t += `width:${e.value.width}px;height:${e.value.height}px;`, t;
    });
    return n({}), (t, o) => (r(), u("div", {
      class: "overflow-hidden",
      style: p(c(a))
    }, "￥1999.00", 4));
  }
});
export {
  s as default
};
