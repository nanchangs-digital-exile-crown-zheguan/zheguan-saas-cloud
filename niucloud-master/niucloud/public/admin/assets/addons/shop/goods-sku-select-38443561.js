import { ElTableColumn as I, ElImage as N, ElTable as G, ElButton as j, ElDialog as z } from "element-plus/es";
import { defineComponent as L, ref as u, openBlock as p, createElementBlock as b, createVNode as l, unref as s, withCtx as a, createElementVNode as n, createTextVNode as S, toDisplayString as f, createBlock as P, nextTick as U } from "vue";
import { _ as w } from "./goods_default-bd0cc1e2.js";
import { t as c } from "/admin/assets/shared/admin-lang.js";
import { img as $ } from "/admin/assets/shared/core-shared.js";
import { I as q } from "./goods-d2a56d58.js";
import "/admin/assets/shared/core-shared.js";
const A = { class: "flex items-center cursor-pointer" }, F = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, H = /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: w
  })
], -1), J = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: w,
  fit: "contain"
}, K = { class: "ml-2" }, M = ["title"], O = { class: "dialog-footer" }, oe = /* @__PURE__ */ L({
  __name: "goods-sku-select",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  emits: ["skuSelect"],
  setup(y, { expose: E, emit: C }) {
    const V = y, d = u(!1), g = u(!1), r = u(), k = u(), T = (m) => {
      d.value = !0, g.value = !0;
      let i = m.map((t) => t.sku_id);
      q({
        goods_id: V.id
      }).then((t) => {
        k.value = t.data.map((e) => (e.goods_stock = e.stock + "", e.goods_price = e.price + "", e.limit_num = "", e.stock = "", e.point = "", e.price = "", e)), U(() => {
          t.data.forEach((e) => {
            var _;
            (_ = r.value) == null || _.toggleRowSelection(e, !1), i.includes(e.sku_id) && r.value.toggleRowSelection(e, !0);
          }), g.value = !1;
        });
      });
    }, h = u([]), B = (m) => {
      h.value = m;
    }, D = () => {
      C("skuSelect", h.value), d.value = !1, r.value && r.value.clearSelection();
    };
    return E({
      show: T
    }), (m, i) => {
      const t = I, e = N, _ = G, v = j, R = z;
      return p(), b("div", null, [
        l(R, {
          modelValue: d.value,
          "onUpdate:modelValue": i[1] || (i[1] = (o) => d.value = o),
          title: s(c)("goodsSkuTitle"),
          width: "60%",
          "destroy-on-close": !0
        }, {
          footer: a(() => [
            n("span", O, [
              l(v, {
                onClick: i[0] || (i[0] = (o) => d.value = !1)
              }, {
                default: a(() => [
                  S(f(s(c)("cancel")), 1)
                ]),
                _: 1
              }),
              l(v, {
                type: "primary",
                onClick: D
              }, {
                default: a(() => [
                  S(f(s(c)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: a(() => [
            l(_, {
              class: "!max-w-[100%]",
              data: k.value,
              size: "large",
              ref_key: "tableRef",
              ref: r,
              onSelectionChange: B
            }, {
              default: a(() => [
                l(t, {
                  type: "selection",
                  width: "55"
                }),
                l(t, {
                  label: s(c)("goodsSelectPopupGoodsInfo"),
                  "min-width": "300"
                }, {
                  default: a(({ row: o }) => {
                    var x;
                    return [
                      n("div", A, [
                        n("div", F, [
                          o.sku_image ? (p(), P(e, {
                            key: 0,
                            class: "w-[60px] h-[60px]",
                            src: s($)(o.sku_image),
                            fit: "contain"
                          }, {
                            error: a(() => [
                              H
                            ]),
                            _: 2
                          }, 1032, ["src"])) : (p(), b("img", J))
                        ]),
                        n("div", K, [
                          n("span", {
                            title: o.sku_name,
                            class: "multi-hidden"
                          }, f(o.sku_name || ((x = o.goods) == null ? void 0 : x.goods_name)), 9, M)
                        ])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["label"]),
                l(t, {
                  prop: "goods_price",
                  label: s(c)("price"),
                  "min-width": "170"
                }, null, 8, ["label"]),
                l(t, {
                  prop: "goods_stock",
                  label: s(c)("goodsStock"),
                  "min-width": "170"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
export {
  oe as default
};
