import { ElTableColumn as ie, ElImage as se, ElInput as le, ElFormItem as ne, ElButton as ae, ElTable as ue, ElCheckbox as oe, ElOption as de, ElSelect as ce, ElPagination as re, ElForm as pe, ElDrawer as me } from "element-plus/es";
import { defineComponent as _e, ref as k, reactive as fe, openBlock as g, createBlock as V, unref as l, withCtx as d, createElementVNode as f, createVNode as o, createTextVNode as S, toDisplayString as y, createElementBlock as B, createCommentVNode as D, nextTick as z, pushScopeId as ye, popScopeId as ge } from "vue";
import { _ as R } from "./goods_default-bd0cc1e2.js";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { img as ve, deepClone as he } from "/admin/assets/shared/core-shared.js";
import { ElMessage as v } from "element-plus";
import { _ as be } from "./_plugin-vue_export-helper-dad06003.js";
const xe = ($) => (ye("data-v-6d1ef30b"), $ = $(), ge(), $), ke = { class: "w-full sku_list" }, Ne = { class: "flex items-center cursor-pointer" }, Te = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, Ve = /* @__PURE__ */ xe(() => /* @__PURE__ */ f("div", { class: "image-slot" }, [
  /* @__PURE__ */ f("img", {
    class: "w-[60px] h-[60px]",
    src: R
  })
], -1)), Fe = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: R,
  fit: "contain"
}, Me = { class: "ml-2" }, Ee = ["title"], $e = { key: 1 }, Ce = { key: 1 }, Le = { key: 1 }, Se = { class: "flex items-center justify-between mt-[15px] !w-[1400px] !max-w-[100%]" }, Be = { class: "flex items-center mb-[15px]" }, Ue = { class: "dialog-footer" }, Ie = /* @__PURE__ */ _e({
  __name: "goods-sku-popup",
  emits: ["skuSave"],
  setup($, { expose: j, emit: G }) {
    const F = k(!1), c = k({ skuList: [] }), N = k(), h = {
      number: /^\d{0,10}(.?\d{0,1})$/,
      digit: /^\d{0,10}(.?\d{0,2})$/
    }, O = (e) => {
      c.value = he(e), c.value.skuList.forEach((s, u) => {
        s.index = u;
      }), P(), F.value = !0;
    }, a = fe({
      page: 1,
      limit: 5,
      total: 0,
      data: [],
      list: []
    }), P = (e = 1) => {
      c.value.skuList.length ? (a.data = A(c.value.skuList, a.limit), a.list = a.data[e - 1], a.total = parseInt(c.value.skuList.length.toString()), z(() => {
        n.value.discountNumber = "", x.value = [], C.value && C.value.clearSelection(), E.value && (E.value = !1), M.value && (M.value = !1);
      })) : (a.data = [], a.list = [], a.total = 0, a.page = 1);
    }, A = (e, s) => {
      const u = [];
      for (let b = 0; b < e.length; b += s)
        u.push(e.slice(b, b + s));
      return u;
    }, n = k({
      discount_type: "discount",
      discountNumber: ""
    }), M = k(), E = k(!1), q = (e) => {
      E.value = !1, C.value.toggleAllSelection();
    }, C = k(), x = k([]), H = (e) => {
      x.value = e, M.value = !1, x.value.length > 0 && x.value.length < a.list.length ? E.value = !0 : E.value = !1, x.value.length == a.list.length && (M.value = !0);
    }, J = () => {
      if (!x.value.length) {
        v({
          type: "warning",
          message: `${i("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      if (n.value.discount_type == "discount") {
        if (n.value.discountNumber.length == 0) {
          v({
            type: "warning",
            message: `${i("discountsPlaceholder")}`
          });
          return;
        } else if (isNaN(n.value.discountNumber) || !h.number.test(n.value.discountNumber)) {
          v({
            type: "warning",
            message: `${i("discountsTips")}`
          });
          return;
        } else if (n.value.discountNumber < 0) {
          v({
            type: "warning",
            message: `${i("discountsTipsTwo")}`
          });
          return;
        } else if (n.value.discountNumber > 9.9) {
          v({
            type: "warning",
            message: `${i("discountsTipsThree")}`
          });
          return;
        }
      } else if (n.value.discount_type == "reduce") {
        if (n.value.discountNumber.length == 0) {
          v({
            type: "warning",
            message: `${i("reduceMoneyPlaceholder")}`
          });
          return;
        } else if (isNaN(n.value.discountNumber) || !h.digit.test(n.value.discountNumber)) {
          v({
            type: "warning",
            message: `${i("reduceMoneyTips")}`
          });
          return;
        } else if (n.value.discountNumber < 0) {
          v({
            type: "warning",
            message: `${i("reduceMoneyTipsTwo")}`
          });
          return;
        }
      } else if (n.value.discountNumber.length == 0) {
        v({
          type: "warning",
          message: `${i("promotionalPlaceholder")}`
        });
        return;
      } else if (isNaN(n.value.discountNumber) || !h.digit.test(n.value.discountNumber)) {
        v({
          type: "warning",
          message: `${i("promotionalTips")}`
        });
        return;
      } else if (n.value.discountNumber < 0) {
        v({
          type: "warning",
          message: `${i("promotionalTipsTwo")}`
        });
        return;
      }
      c.value.skuList.forEach((e, s) => {
        x.value.forEach((u) => {
          u.sku_id === e.sku_id && e.is_enabled === 1 && (n.value.discount_type == "discount" ? (e.discount_rate = n.value.discountNumber + "", e.specify_price = (e.price * (n.value.discountNumber / 10)).toFixed(2), e.discount_price = (e.price * (n.value.discountNumber / 10)).toFixed(2), e.reduce_money = (e.price - e.specify_price).toFixed(2)) : n.value.discount_type == "reduce" ? (e.reduce_money = n.value.discountNumber + "", e.specify_price = (e.price - e.reduce_money).toFixed(2), e.discount_price = (e.price - e.reduce_money).toFixed(2), e.discount_rate = (e.specify_price / e.price * 10).toFixed(1)) : (e.specify_price = n.value.discountNumber + "", e.discount_price = n.value.discountNumber + "", e.reduce_money = (e.price - e.specify_price).toFixed(2), e.discount_rate = (e.specify_price / e.price * 10).toFixed(1)), e.discount_type = n.value.discount_type + "", N.value && (N.value.validateField("skuList." + s + ".discount_rate"), N.value.validateField("skuList." + s + ".specify_price"), N.value.validateField("skuList." + s + ".reduce_money")));
        });
      });
    }, U = (e, s, u) => {
      s == "discount" ? e.discount_rate.length && (e.specify_price = (e.price * (e.discount_rate / 10)).toFixed(2), e.discount_price = (e.price * (e.discount_rate / 10)).toFixed(2), e.reduce_money = (e.price - e.specify_price).toFixed(2)) : s == "reduce" ? e.reduce_money.length && (e.specify_price = (e.price - e.reduce_money).toFixed(2), e.discount_price = (e.price - e.reduce_money).toFixed(2), e.discount_rate = (e.specify_price / e.price * 10).toFixed(1)) : e.specify_price.length && (e.discount_price = e.specify_price + "", e.reduce_money = (e.price - e.specify_price).toFixed(2), e.discount_rate = (e.specify_price / e.price * 10).toFixed(1)), e.discount_type = s + "", N.value;
    }, K = (e) => {
      e.is_enabled = e.is_enabled ? 0 : 1, e.is_enabled ? (e.discount_type = "discount", e.discount_rate = "", e.reduce_money = "", e.specify_price = "") : (e.discount_type = "discount", e.discount_rate = "10", e.reduce_money = "0", e.specify_price = e.price + "");
    }, Q = (e) => e.is_enabled === 0 ? !0 : e.discount_rate.length == 0 || isNaN(e.discount_rate) || !h.number.test(e.discount_rate) || e.discount_rate < 0 || e.discount_rate > 9.9 || e.reduce_money.length == 0 || isNaN(e.reduce_money) || !h.digit.test(e.reduce_money) || e.reduce_money < 0 || e.reduce_money > parseFloat(e.price) || e.specify_price.length == 0 || isNaN(e.specify_price) || !h.digit.test(e.specify_price) || e.specify_price < 0 ? !1 : !(e.specify_price > parseFloat(e.price)), W = (e) => {
      if (e) {
        for (let s = 0; s < c.value.skuList.length; s++)
          if (!Q(c.value.skuList[s])) {
            const u = Math.ceil(s + 1 <= a.limit ? 1 : (s + 1) / a.limit);
            a.list = a.data[u - 1], a.page = u;
            break;
          }
        z(async () => {
          await e.validate((s) => {
            if (s) {
              c.value.valid = !0;
              const u = c.value.skuList.filter((m) => m.is_enabled === 1).map((m) => Number(m.discount_rate)), b = c.value.skuList.filter((m) => m.is_enabled === 1).map((m) => Number(m.reduce_money)), T = c.value.skuList.filter((m) => m.is_enabled === 1).map((m) => Number(m.specify_price));
              c.value.max_discount_rate = Math.max(...u), c.value.min_discount_rate = Math.min(...u), c.value.max_reduce_money = Math.max(...b), c.value.min_reduce_money = Math.min(...b), c.value.max_specify_price = Math.max(...T), c.value.min_specify_price = Math.min(...T), G("skuSave", c.value), F.value = !1;
            }
          });
        });
      }
    };
    return j({
      show: O
    }), (e, s) => {
      const u = ie, b = se, T = le, m = ne, L = ae, X = ue, Y = oe, I = de, Z = ce, w = re, ee = pe, te = me;
      return g(), V(te, {
        modelValue: F.value,
        "onUpdate:modelValue": s[8] || (s[8] = (t) => F.value = t),
        title: l(i)("skuDiscountSettings"),
        size: "60%"
      }, {
        footer: d(() => [
          f("span", Ue, [
            o(L, {
              onClick: s[6] || (s[6] = (t) => F.value = !1)
            }, {
              default: d(() => [
                S(y(l(i)("cancel")), 1)
              ]),
              _: 1
            }),
            o(L, {
              type: "primary",
              onClick: s[7] || (s[7] = (t) => W(N.value))
            }, {
              default: d(() => [
                S(y(l(i)("confirm")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: d(() => [
          F.value ? (g(), V(ee, {
            key: 0,
            model: c.value,
            "label-width": "120px",
            ref_key: "formRef",
            ref: N,
            class: "page-form"
          }, {
            default: d(() => [
              f("div", ke, [
                a.list.length ? (g(), V(X, {
                  key: 0,
                  class: "!w-[1400px] !max-w-[100%]",
                  data: a.list,
                  size: "large",
                  ref_key: "goods_listTableRef",
                  ref: C,
                  onSelectionChange: H
                }, {
                  empty: d(() => [
                    f("span", null, y(l(i)("emptyData")), 1)
                  ]),
                  default: d(() => [
                    o(u, {
                      type: "selection",
                      width: "55"
                    }),
                    o(u, {
                      label: l(i)("goodsSelectPopupGoodsInfo"),
                      "min-width": "300"
                    }, {
                      default: d(({ row: t }) => {
                        var _;
                        return [
                          f("div", Ne, [
                            f("div", Te, [
                              t.sku_image ? (g(), V(b, {
                                key: 0,
                                class: "w-[60px] h-[60px]",
                                src: l(ve)(t.sku_image),
                                fit: "contain"
                              }, {
                                error: d(() => [
                                  Ve
                                ]),
                                _: 2
                              }, 1032, ["src"])) : (g(), B("img", Fe))
                            ]),
                            f("div", Me, [
                              f("span", {
                                title: t.sku_name,
                                class: "multi-hidden"
                              }, y(t.sku_name || ((_ = t.goods) == null ? void 0 : _.goods_name)), 9, Ee)
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, ["label"]),
                    o(u, {
                      prop: "price",
                      label: l(i)("price"),
                      "min-width": "130"
                    }, null, 8, ["label"]),
                    o(u, {
                      label: l(i)("discounts"),
                      width: "170"
                    }, {
                      default: d(({ row: t }) => [
                        t.is_enabled ? (g(), V(m, {
                          key: t.sku_id,
                          prop: "skuList." + t.index + ".discount_rate",
                          rules: [{
                            trigger: "blur",
                            validator: (_, r, p) => {
                              r.length == 0 ? p(l(i)("discountsPlaceholder")) : isNaN(r) || !h.number.test(r) ? p(l(i)("discountsTips")) : r < 0 ? p(l(i)("discountsTipsTwo")) : r > 9.9 ? p(l(i)("discountsTipsThree")) : p();
                            }
                          }],
                          class: "sku-form-item-wrap"
                        }, {
                          default: d(() => [
                            o(T, {
                              modelValue: t.discount_rate,
                              "onUpdate:modelValue": (_) => t.discount_rate = _,
                              modelModifiers: { trim: !0 },
                              onBlur: (_) => U(t, "discount", t.index),
                              clearable: "",
                              placeholder: "0",
                              maxlength: "8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1032, ["prop", "rules"])) : (g(), B("span", $e, y(t.discount_rate), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    o(u, {
                      label: l(i)("reduceMoney"),
                      width: "170"
                    }, {
                      default: d(({ row: t }) => [
                        t.is_enabled ? (g(), V(m, {
                          key: t.sku_id,
                          prop: "skuList." + t.index + ".reduce_money",
                          rules: [{
                            trigger: "blur",
                            validator: (_, r, p) => {
                              r.length == 0 ? p(l(i)("reduceMoneyPlaceholder")) : isNaN(r) || !h.digit.test(r) ? p(l(i)("reduceMoneyTips")) : r < 0 ? p(l(i)("reduceMoneyTipsTwo")) : r > parseFloat(t.price) ? p(l(i)("reduceMoneyTipsThree")) : p();
                            }
                          }],
                          class: "sku-form-item-wrap"
                        }, {
                          default: d(() => [
                            o(T, {
                              modelValue: t.reduce_money,
                              "onUpdate:modelValue": (_) => t.reduce_money = _,
                              modelModifiers: { trim: !0 },
                              onBlur: (_) => U(t, "reduce", t.index),
                              clearable: "",
                              placeholder: "0.00",
                              maxlength: "8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1032, ["prop", "rules"])) : (g(), B("span", Ce, y(t.reduce_money), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    o(u, {
                      label: l(i)("promotional"),
                      width: "170"
                    }, {
                      default: d(({ row: t }) => [
                        t.is_enabled ? (g(), V(m, {
                          key: t.sku_id,
                          prop: "skuList." + t.index + ".specify_price",
                          rules: [{
                            trigger: "blur",
                            validator: (_, r, p) => {
                              r.length == 0 ? p(l(i)("promotionalPlaceholder")) : isNaN(r) || !h.digit.test(r) ? p(l(i)("promotionalTips")) : r < 0 ? p(l(i)("promotionalTipsTwo")) : r > parseFloat(t.price) ? p(l(i)("promotionalTipsThree")) : p();
                            }
                          }],
                          class: "sku-form-item-wrap"
                        }, {
                          default: d(() => [
                            o(T, {
                              modelValue: t.specify_price,
                              "onUpdate:modelValue": (_) => t.specify_price = _,
                              modelModifiers: { trim: !0 },
                              clearable: "",
                              onBlur: (_) => U(t, "specify", t.index),
                              placeholder: "0.00",
                              maxlength: "8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1032, ["prop", "rules"])) : (g(), B("span", Le, y(t.specify_price), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    o(u, {
                      label: l(i)("discountType"),
                      width: "130"
                    }, {
                      default: d(({ row: t }) => [
                        f("span", null, y(t.discount_type == "discount" ? l(i)("discounts") : t.discount_type == "reduce" ? l(i)("reduceMoney") : l(i)("promotional")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    o(u, {
                      label: l(i)("operation"),
                      fixed: "right",
                      align: "right",
                      "min-width": "160"
                    }, {
                      default: d(({ row: t }) => [
                        o(L, {
                          type: "primary",
                          link: "",
                          onClick: (_) => K(t)
                        }, {
                          default: d(() => [
                            S(y(t.is_enabled ? l(i)("noEnabled") : l(i)("enabled")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])) : D("", !0),
                f("div", Se, [
                  f("div", Be, [
                    o(Y, {
                      modelValue: M.value,
                      "onUpdate:modelValue": s[0] || (s[0] = (t) => M.value = t),
                      size: "large",
                      class: "!mr-[15px]",
                      onChange: q,
                      indeterminate: E.value
                    }, {
                      default: d(() => [
                        f("span", null, "已选" + y(x.value.length) + "项", 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "indeterminate"]),
                    f("label", null, y(l(i)("batchOperation")), 1),
                    o(Z, {
                      modelValue: n.value.discount_type,
                      "onUpdate:modelValue": s[1] || (s[1] = (t) => n.value.discount_type = t),
                      class: "!w-[130px] ml-[10px]",
                      onChange: s[2] || (s[2] = (t) => n.value.discountNumber = "")
                    }, {
                      default: d(() => [
                        o(I, {
                          label: l(i)("discounts"),
                          value: "discount"
                        }, null, 8, ["label"]),
                        o(I, {
                          label: l(i)("reduceMoney"),
                          value: "reduce"
                        }, null, 8, ["label"]),
                        o(I, {
                          label: l(i)("promotional"),
                          value: "specify"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    o(T, {
                      modelValue: n.value.discountNumber,
                      "onUpdate:modelValue": s[3] || (s[3] = (t) => n.value.discountNumber = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: n.value.discount_type == "discount" ? l(i)("discounts") : n.value.discount_type == "reduce" ? l(i)("reduceMoney") : l(i)("promotional"),
                      class: "!w-[130px] ml-[10px]",
                      maxlength: "8"
                    }, null, 8, ["modelValue", "placeholder"]),
                    o(L, {
                      class: "ml-[10px]",
                      type: "primary",
                      onClick: J
                    }, {
                      default: d(() => [
                        S(y(l(i)("confirm")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  o(w, {
                    "current-page": a.page,
                    "onUpdate:current-page": s[4] || (s[4] = (t) => a.page = t),
                    "page-size": a.limit,
                    "onUpdate:page-size": s[5] || (s[5] = (t) => a.limit = t),
                    layout: "total, prev, pager, next, jumper",
                    total: a.total,
                    onCurrentChange: P
                  }, null, 8, ["current-page", "page-size", "total"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["model"])) : D("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const Ae = /* @__PURE__ */ be(Ie, [["__scopeId", "data-v-6d1ef30b"]]);
export {
  Ae as default
};
