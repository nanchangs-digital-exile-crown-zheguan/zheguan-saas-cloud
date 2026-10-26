import { ElImage as F, ElInput as z, ElButton as J, ElTableColumn as K, ElTable as q, ElDialog as H, ElLoadingDirective as Q } from "element-plus/es";
import { defineComponent as R, reactive as N, ref as T, openBlock as u, createElementBlock as v, createVNode as r, unref as i, withCtx as s, createElementVNode as p, createTextVNode as g, toDisplayString as c, createBlock as w, createCommentVNode as C, withDirectives as W, pushScopeId as X, popScopeId as Y } from "vue";
import { _ as U } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { img as ee } from "/admin/assets/shared/core-shared.js";
import { ElMessage as _ } from "element-plus";
import { J as te, K as oe, I as ae } from "./goods-d2a56d58.js";
import { _ as le } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const ie = (b) => (X("data-v-52bf5b47"), b = b(), Y(), b), se = { class: "flex items-center mb-[10px]" }, re = { class: "min-w-[70px] h-[70px] flex items-center justify-center" }, de = /* @__PURE__ */ ie(() => /* @__PURE__ */ p("div", { class: "image-slot" }, [
  /* @__PURE__ */ p("img", {
    class: "w-[70px] h-[70px]",
    src: U
  })
], -1)), ne = {
  key: 1,
  class: "w-[70px] h-[70px]",
  src: U,
  fit: "contain"
}, ce = { class: "ml-2" }, pe = ["title"], me = { class: "text-primary text-[12px]" }, ue = {
  key: 0,
  class: "batch-operation-sku"
}, _e = { key: 0 }, fe = { key: 1 }, ge = { class: "dialog-footer" }, ke = /* @__PURE__ */ R({
  __name: "goods-price-edit-popup",
  emits: ["load"],
  setup(b, { expose: B, emit: I }) {
    const m = N({}), P = T(0), k = T(!1), d = N({
      loading: !0,
      data: []
    }), a = N({
      field: "",
      // 当前编辑的字段
      value: ""
      // 输入值
    }), E = (o, t) => {
      a.field = o, a.value = "";
    }, $ = () => {
      a.field = "", a.value = "";
    }, D = () => {
      if (a.value.length == 0) {
        _({
          type: "warning",
          message: `${e(a.field + "Placeholder")}`
        });
        return;
      }
      if (!y.digit.test(a.value)) {
        _({
          type: "warning",
          message: `${e(a.field + "Tips")}`
        });
        return;
      }
      if (a.value < 0) {
        _({
          type: "warning",
          message: `${e(a.field + "NotZeroTips")}`
        });
        return;
      }
      d.data.forEach((o) => {
        o[a.field] = a.value;
      }), $();
    }, G = () => {
      d.loading = !0, ae({
        goods_id: m.goods_id
      }).then((o) => {
        d.loading = !1, d.data = o.data;
      }).catch(() => {
        d.loading = !1;
      });
    }, S = (o) => {
      Object.assign(m, o), M(), G(), k.value = !0;
    }, M = () => {
      te({
        goods_id: m.goods_id
      }).then((o) => {
        P.value = o.data;
      });
    }, y = {
      digit: /^\d{0,10}(.?\d{0,2})$/
    }, L = () => {
      let o = !0;
      for (let t = 0; t < d.data.length; t++) {
        const n = d.data[t];
        if (isNaN(n.price) || !y.digit.test(n.price)) {
          o = !1, _({
            type: "warning",
            message: `${e("priceTips")}`
          });
          break;
        } else if (n.price < 0) {
          o = !1, _({
            type: "warning",
            message: `${e("priceNotZeroTips")}`
          });
          break;
        }
        if (isNaN(n.market_price) || !y.digit.test(n.market_price)) {
          o = !1, _({
            type: "warning",
            message: `${e("marketPriceTips")}`
          });
          break;
        } else if (n.market_price < 0) {
          o = !1, _({
            type: "warning",
            message: `${e("marketPriceNotZeroTips")}`
          });
          break;
        }
        if (isNaN(n.cost_price) || !y.digit.test(n.cost_price)) {
          o = !1, _({
            type: "warning",
            message: `${e("costPriceTips")}`
          });
          break;
        } else if (n.cost_price < 0) {
          o = !1, _({
            type: "warning",
            message: `${e("costPriceNotZeroTips")}`
          });
          break;
        }
      }
      return o;
    }, Z = () => {
      if (L()) {
        let o = [];
        d.data.forEach((t) => {
          o.push({
            sku_id: t.sku_id,
            price: t.price,
            market_price: t.market_price,
            cost_price: t.cost_price
          });
        }), oe({
          goods_id: m.goods_id,
          sku_list: o
        }).then((t) => {
          I("load"), k.value = !1;
        });
      }
    };
    return B({
      showDialog: k,
      show: S
    }), (o, t) => {
      const n = F, x = z, f = J, V = K, O = q, j = H, A = Q;
      return u(), v("div", null, [
        r(j, {
          modelValue: k.value,
          "onUpdate:modelValue": t[5] || (t[5] = (l) => k.value = l),
          title: i(e)("editPricePopupTitle"),
          width: "800px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: s(() => [
            p("span", ge, [
              r(f, {
                onClick: t[4] || (t[4] = (l) => k.value = !1)
              }, {
                default: s(() => [
                  g(c(i(e)("cancel")), 1)
                ]),
                _: 1
              }),
              r(f, {
                type: "primary",
                onClick: Z
              }, {
                default: s(() => [
                  g(c(i(e)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: s(() => [
            p("div", se, [
              p("div", re, [
                m.goods_cover_thumb_small ? (u(), w(n, {
                  key: 0,
                  class: "w-[70px] h-[70px]",
                  src: i(ee)(m.goods_cover_thumb_small),
                  fit: "contain"
                }, {
                  error: s(() => [
                    de
                  ]),
                  _: 1
                }, 8, ["src"])) : (u(), v("img", ne))
              ]),
              p("div", ce, [
                p("span", {
                  title: m.goods_name,
                  class: "multi-hidden"
                }, c(m.goods_name), 9, pe),
                p("span", me, c(m.goods_type_name), 1)
              ])
            ]),
            d.data.length > 1 ? (u(), v("div", ue, [
              p("label", null, c(i(e)("batchOperationSku")), 1),
              a.field ? (u(), v("div", _e, [
                r(x, {
                  modelValue: a.value,
                  "onUpdate:modelValue": t[0] || (t[0] = (l) => a.value = l),
                  modelModifiers: { trim: !0 },
                  clearable: "",
                  placeholder: i(e)(a.field),
                  class: "set-input",
                  maxlength: "8",
                  autofocus: !0
                }, null, 8, ["modelValue", "placeholder"]),
                r(f, {
                  type: "primary",
                  onClick: D
                }, {
                  default: s(() => [
                    g(c(i(e)("confirm")), 1)
                  ]),
                  _: 1
                }),
                r(f, { onClick: $ }, {
                  default: s(() => [
                    g(c(i(e)("cancel")), 1)
                  ]),
                  _: 1
                })
              ])) : (u(), v("div", fe, [
                P.value == 0 ? (u(), w(f, {
                  key: 0,
                  type: "primary",
                  link: "",
                  onClick: t[1] || (t[1] = (l) => E("price"))
                }, {
                  default: s(() => [
                    g(c(i(e)("price")), 1)
                  ]),
                  _: 1
                })) : C("", !0),
                r(f, {
                  type: "primary",
                  link: "",
                  onClick: t[2] || (t[2] = (l) => E("market_price"))
                }, {
                  default: s(() => [
                    g(c(i(e)("marketPrice")), 1)
                  ]),
                  _: 1
                }),
                r(f, {
                  type: "primary",
                  link: "",
                  onClick: t[3] || (t[3] = (l) => E("cost_price"))
                }, {
                  default: s(() => [
                    g(c(i(e)("costPrice")), 1)
                  ]),
                  _: 1
                })
              ]))
            ])) : C("", !0),
            W((u(), w(O, {
              data: d.data,
              size: "large",
              "max-height": "400"
            }, {
              empty: s(() => [
                p("span", null, c(d.loading ? "" : i(e)("emptyData")), 1)
              ]),
              default: s(() => [
                d.data.length > 1 ? (u(), w(V, {
                  key: 0,
                  prop: "sku_name",
                  label: i(e)("skuName"),
                  "min-width": "120"
                }, null, 8, ["label"])) : C("", !0),
                r(V, {
                  prop: "price",
                  label: i(e)("price"),
                  "min-width": "120"
                }, {
                  default: s(({ row: l }) => [
                    r(x, {
                      modelValue: l.price,
                      "onUpdate:modelValue": (h) => l.price = h,
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: "0.00",
                      maxlength: "8",
                      disabled: P.value > 0
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                r(V, {
                  prop: "market_price",
                  label: i(e)("marketPrice"),
                  "min-width": "120"
                }, {
                  default: s(({ row: l }) => [
                    r(x, {
                      modelValue: l.market_price,
                      "onUpdate:modelValue": (h) => l.market_price = h,
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: "0.00",
                      maxlength: "8"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                r(V, {
                  prop: "cost_price",
                  label: i(e)("costPrice"),
                  "min-width": "120"
                }, {
                  default: s(({ row: l }) => [
                    r(x, {
                      modelValue: l.cost_price,
                      "onUpdate:modelValue": (h) => l.cost_price = h,
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: "0.00",
                      maxlength: "8"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [A, d.loading]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const Ne = /* @__PURE__ */ le(ke, [["__scopeId", "data-v-52bf5b47"]]);
export {
  Ne as default
};
