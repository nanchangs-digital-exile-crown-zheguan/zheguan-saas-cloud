import { ElInput as O, ElFormItem as R, ElForm as z, ElTableColumn as L, ElTooltip as P, ElTable as S, ElButton as $, ElDialog as q } from "element-plus/es";
import { defineComponent as A, ref as f, reactive as G, openBlock as b, createBlock as M, unref as t, withCtx as d, createElementVNode as r, createVNode as a, createTextVNode as v, toDisplayString as p, createCommentVNode as K, createElementBlock as V } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { q as H } from "./order-a6ced131.js";
import { filterDigit as J } from "/admin/assets/shared/core-shared.js";
import { c as Q } from "./cloneDeep-70d647ec.js";
const W = { class: "max-h-[600px] overflow-y-auto" }, X = { class: "panel-title ml-[10px]" }, Y = { class: "mb-[20px]" }, Z = { class: "multi-hidden text-[14px]" }, ee = /* @__PURE__ */ r("text", { class: "nc-iconfont nc-icon-bangzhuV6xx ml-[5px] text-[12px]" }, null, -1), oe = /* @__PURE__ */ r("h3", { class: "panel-title ml-[10px]" }, [
  /* @__PURE__ */ r("span", { class: "text-primary" }, "实际商品金额"),
  /* @__PURE__ */ r("span", null, " = 商品总额 - 优惠金额 + 调价")
], -1), te = { class: "panel-title ml-[10px]" }, le = /* @__PURE__ */ r("span", { class: "text-primary" }, "订单总额", -1), ae = { key: 0 }, ne = { key: 1 }, se = { class: "dialog-footer" }, ce = /* @__PURE__ */ A({
  __name: "adjust-money",
  emits: ["complete"],
  setup(de, { expose: E, emit: w }) {
    const _ = f(!1), y = f(!1), n = G({}), m = f(0), g = f([]), F = (o) => {
      J(o), m.value = o.target.value;
    }, k = (o) => {
      for (const e in n)
        delete n[e];
      Object.assign(n, Q(o)), n.order_goods = n.order_goods.filter((e) => e.is_gift != 1), g.value = [], n.order_goods.forEach((e) => {
        e.adjust_money = "", e.total = (parseFloat(e.goods_money) - parseFloat(e.discount_money)).toFixed(2), g.value.push(e.goods_type);
      }), m.value = n.delivery_money;
    }, C = (o, e, c) => {
      let i = parseFloat(c.goods_money) - parseFloat(c.discount_money);
      o.length == 0 || isNaN(o) ? (o = 0, n.order_goods[e].adjust_money = "") : o = parseFloat(o), parseFloat(o) + i < 0 ? (o = i, n.order_goods[e].adjust_money = -o, i = 0) : i += o, i = Math.round(i * 100) / 100, n.order_goods[e].total = i.toFixed(2);
    }, h = f(!1), D = () => {
      if (y.value = !0, h.value)
        return;
      h.value = !0;
      const o = {};
      n.order_goods.forEach((e) => {
        e.adjust_money && (o[e.order_goods_id] = {
          money: e.adjust_money
        });
      }), H({
        order_id: n.order_id,
        delivery_money: parseFloat(m.value),
        order_goods_data: o
      }).then((e) => {
        h.value = !1, y.value = !1, _.value = !1, w("complete");
      }).catch(() => {
        h.value = !1, y.value = !1;
      });
    };
    return E({
      showDialog: _,
      setFormData: k
    }), (o, e) => {
      const c = O, i = R, T = z, u = L, N = P, U = S, j = $, B = q;
      return b(), M(B, {
        modelValue: _.value,
        "onUpdate:modelValue": e[4] || (e[4] = (s) => _.value = s),
        title: t(l)("adjustMoneyDialogTitle"),
        width: "1000px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: d(() => [
          r("span", se, [
            a(j, {
              onClick: e[2] || (e[2] = (s) => _.value = !1)
            }, {
              default: d(() => [
                v(p(t(l)("cancel")), 1)
              ]),
              _: 1
            }),
            a(j, {
              type: "primary",
              loading: y.value,
              onClick: e[3] || (e[3] = (s) => D(o.formRef))
            }, {
              default: d(() => [
                v(p(t(l)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: d(() => [
          r("div", W, [
            r("h3", X, p(t(l)("adjustMoneyTips")), 1),
            g.value.indexOf("real") != -1 ? (b(), M(T, {
              key: 0,
              "label-width": "50px",
              ref: "formRef",
              class: "page-form"
            }, {
              default: d(() => [
                a(i, {
                  label: t(l)("adjustMoneyDeliveryMoney"),
                  prop: "express_number"
                }, {
                  default: d(() => [
                    a(c, {
                      modelValue: m.value,
                      "onUpdate:modelValue": e[0] || (e[0] = (s) => m.value = s),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: "0.00",
                      class: "!w-[200px]",
                      maxlength: "8",
                      onKeyup: e[1] || (e[1] = (s) => F(s))
                    }, {
                      append: d(() => [
                        v(p(t(l)("adjustMoneyUnit")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 512)) : K("", !0),
            r("div", Y, [
              a(U, {
                data: n.order_goods,
                size: "large"
              }, {
                default: d(() => [
                  a(u, {
                    label: t(l)("adjustMoneyGoodsInfo"),
                    align: "left",
                    width: "200"
                  }, {
                    default: d(({ row: s }) => [
                      r("p", Z, p(s.goods_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(u, {
                    prop: "price",
                    label: t(l)("adjustMoneyPrice"),
                    "min-width": "50",
                    align: "left"
                  }, null, 8, ["label"]),
                  a(u, {
                    prop: "num",
                    label: t(l)("adjustMoneyNum"),
                    "min-width": "50",
                    align: "right"
                  }, null, 8, ["label"]),
                  a(u, {
                    prop: "goods_money",
                    label: t(l)("adjustMoneySubTotal"),
                    "min-width": "50",
                    align: "right"
                  }, null, 8, ["label"]),
                  a(u, {
                    prop: "discount_money",
                    label: t(l)("adjustMoneyDiscountMoney"),
                    "min-width": "50",
                    align: "right"
                  }, null, 8, ["label"]),
                  a(u, {
                    prop: "goods_name",
                    label: t(l)("adjustMoneyLabel"),
                    "min-width": "100"
                  }, {
                    header: d(() => [
                      r("div", null, [
                        r("span", null, p(t(l)("adjustMoneyLabel")), 1),
                        a(N, {
                          effect: "dark",
                          content: "负数表示下调金额，正数表示上调金额",
                          placement: "top"
                        }, {
                          default: d(() => [
                            ee
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: d(({ row: s, $index: I }) => [
                      a(c, {
                        modelValue: s.adjust_money,
                        "onUpdate:modelValue": (x) => s.adjust_money = x,
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: "0.00",
                        maxlength: "6",
                        onChange: (x) => C(x, I, s)
                      }, {
                        append: d(() => [
                          v(p(t(l)("adjustMoneyUnit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(u, {
                    prop: "total",
                    label: t(l)("adjustMoneyTotal"),
                    "min-width": "70",
                    align: "right"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])
            ]),
            oe,
            r("h3", te, [
              le,
              g.value.indexOf("real") != -1 ? (b(), V("span", ae, " = 实际商品金额 + 运费")) : (b(), V("span", ne, " = 实际商品金额"))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  ce as _
};
