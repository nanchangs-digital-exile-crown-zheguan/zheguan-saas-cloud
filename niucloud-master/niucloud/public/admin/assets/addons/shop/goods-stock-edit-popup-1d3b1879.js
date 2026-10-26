import { ElImage as j, ElInput as Z, ElButton as z, ElTableColumn as q, ElTable as A, ElDialog as F, ElLoadingDirective as H } from "element-plus/es";
import { defineComponent as J, reactive as v, ref as S, openBlock as _, createElementBlock as b, createVNode as c, unref as a, withCtx as n, createElementVNode as l, createTextVNode as x, toDisplayString as r, createBlock as y, createCommentVNode as N, withDirectives as K, pushScopeId as Q, popScopeId as R } from "vue";
import { _ as T } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { img as W } from "/admin/assets/shared/core-shared.js";
import { ElMessage as g } from "element-plus";
import { L as X, I as Y } from "./goods-d2a56d58.js";
import { _ as ee } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const te = (f) => (Q("data-v-3476896f"), f = f(), R(), f), oe = { class: "flex items-center mb-[10px]" }, se = { class: "min-w-[70px] h-[70px] flex items-center justify-center" }, ae = /* @__PURE__ */ te(() => /* @__PURE__ */ l("div", { class: "image-slot" }, [
  /* @__PURE__ */ l("img", {
    class: "w-[70px] h-[70px]",
    src: T
  })
], -1)), le = {
  key: 1,
  class: "w-[70px] h-[70px]",
  src: T,
  fit: "contain"
}, ne = { class: "ml-2" }, ie = ["title"], ce = { class: "text-primary text-[12px]" }, de = {
  key: 0,
  class: "batch-operation-sku"
}, re = { class: "dialog-footer" }, pe = /* @__PURE__ */ J({
  __name: "goods-stock-edit-popup",
  emits: ["load"],
  setup(f, { expose: C, emit: $ }) {
    const i = v({}), w = S(0), p = S(!1), s = v({
      loading: !0,
      data: []
    }), m = v({
      value: ""
      // 输入值
    }), I = () => {
      if (m.value.length == 0) {
        g({
          type: "warning",
          message: `${e("stockPlaceholder")}`
        });
        return;
      }
      if (!E.number.test(m.value)) {
        g({
          type: "warning",
          message: `${e("stockTips")}`
        });
        return;
      }
      if (m.value < 0) {
        g({
          type: "warning",
          message: `${e("stockNotZeroTips")}`
        });
        return;
      }
      s.data.forEach((t) => {
        t.stock = m.value;
      });
    }, D = () => {
      s.loading = !0, Y({
        goods_id: i.goods_id
      }).then((t) => {
        s.loading = !1, s.data = t.data;
      }).catch(() => {
        s.loading = !1;
      });
    }, B = (t) => {
      Object.assign(i, t), D(), p.value = !0;
    }, E = {
      number: /^\d{0,10}$/
    }, L = () => {
      let t = !0;
      for (let o = 0; o < s.data.length; o++) {
        let u = s.data[o];
        if (u.stock.length == 0) {
          t = !1, g({
            type: "warning",
            message: `${e("stockPlaceholder")}`
          });
          break;
        } else if (isNaN(u.stock) || !E.number.test(u.stock)) {
          t = !1, g({
            type: "warning",
            message: `${e("stockTips")}`
          });
          break;
        } else if (u.stock < 0) {
          t = !1, g({
            type: "warning",
            message: `${e("stockNotZeroTips")}`
          });
          break;
        }
      }
      return t;
    }, P = () => {
      if (L()) {
        const t = [];
        s.data.forEach((o) => {
          t.push({
            sku_id: o.sku_id,
            stock: o.stock
          });
        }), X({
          goods_id: i.goods_id,
          sku_list: t
        }).then((o) => {
          $("load"), p.value = !1;
        });
      }
    };
    return C({
      showDialog: p,
      show: B
    }), (t, o) => {
      const u = j, V = Z, h = z, k = q, G = A, U = F, M = H;
      return _(), b("div", null, [
        c(U, {
          modelValue: p.value,
          "onUpdate:modelValue": o[2] || (o[2] = (d) => p.value = d),
          title: a(e)("editStockPopupTitle"),
          width: "600px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: n(() => [
            l("span", re, [
              c(h, {
                onClick: o[1] || (o[1] = (d) => p.value = !1)
              }, {
                default: n(() => [
                  x(r(a(e)("cancel")), 1)
                ]),
                _: 1
              }),
              c(h, {
                type: "primary",
                onClick: P
              }, {
                default: n(() => [
                  x(r(a(e)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: n(() => [
            l("div", oe, [
              l("div", se, [
                i.goods_cover_thumb_small ? (_(), y(u, {
                  key: 0,
                  class: "w-[70px] h-[70px]",
                  src: a(W)(i.goods_cover_thumb_small),
                  fit: "contain"
                }, {
                  error: n(() => [
                    ae
                  ]),
                  _: 1
                }, 8, ["src"])) : (_(), b("img", le))
              ]),
              l("div", ne, [
                l("span", {
                  title: i.goods_name,
                  class: "multi-hidden"
                }, r(i.goods_name), 9, ie),
                l("span", ce, r(i.goods_type_name), 1)
              ])
            ]),
            w.value == 0 && s.data.length > 1 ? (_(), b("div", de, [
              l("label", null, r(a(e)("batchOperationSku")), 1),
              c(V, {
                modelValue: m.value,
                "onUpdate:modelValue": o[0] || (o[0] = (d) => m.value = d),
                modelModifiers: { trim: !0 },
                clearable: "",
                placeholder: a(e)("stock"),
                class: "set-input",
                maxlength: "8",
                autofocus: !0
              }, null, 8, ["modelValue", "placeholder"]),
              c(h, {
                type: "primary",
                onClick: I
              }, {
                default: n(() => [
                  x(r(a(e)("confirm")), 1)
                ]),
                _: 1
              })
            ])) : N("", !0),
            K((_(), y(G, {
              data: s.data,
              size: "large",
              "max-height": "400"
            }, {
              empty: n(() => [
                l("span", null, r(s.loading ? "" : a(e)("emptyData")), 1)
              ]),
              default: n(() => [
                s.data.length > 1 ? (_(), y(k, {
                  key: 0,
                  prop: "sku_name",
                  label: a(e)("skuName"),
                  "min-width": "120"
                }, null, 8, ["label"])) : N("", !0),
                c(k, {
                  prop: "price",
                  label: a(e)("price"),
                  "min-width": "120"
                }, null, 8, ["label"]),
                c(k, {
                  prop: "stock",
                  label: a(e)("stock"),
                  "min-width": "120"
                }, {
                  default: n(({ row: d }) => [
                    c(V, {
                      modelValue: d.stock,
                      "onUpdate:modelValue": (O) => d.stock = O,
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: "0",
                      maxlength: "8",
                      disabled: w.value > 0
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [M, s.loading]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const xe = /* @__PURE__ */ ee(pe, [["__scopeId", "data-v-3476896f"]]);
export {
  xe as default
};
