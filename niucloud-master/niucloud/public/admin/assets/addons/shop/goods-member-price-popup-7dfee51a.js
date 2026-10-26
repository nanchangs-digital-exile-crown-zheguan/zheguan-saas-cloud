import { ElRadio as ae, ElRadioGroup as ne, ElFormItem as ie, ElTableColumn as se, ElTable as de, ElCheckbox as re, ElButton as ue, ElInput as _e, ElForm as ce, ElDialog as me, ElLoadingDirective as fe } from "element-plus/es";
import { defineComponent as pe, ref as b, reactive as B, openBlock as c, createElementBlock as k, createVNode as n, unref as a, withCtx as o, createElementVNode as y, createTextVNode as v, toDisplayString as u, createCommentVNode as M, createBlock as x, withDirectives as Q, Fragment as G, renderList as N } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { filterDigit as W, deepClone as X } from "/admin/assets/shared/core-shared.js";
import { ElMessage as U } from "element-plus";
import { H as ve, I as be } from "./goods-d2a56d58.js";
import { _ as ge } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const xe = {
  key: 0,
  class: "text-[12px] text-[#999] leading-[20px]"
}, he = {
  key: 1,
  class: "text-[12px] text-[#999] leading-[20px]"
}, ke = { class: "mb-[10px] flex items-center" }, ye = { class: "dialog-footer" }, Ve = { class: "dialog-footer" }, Ee = /* @__PURE__ */ pe({
  __name: "goods-member-price-popup",
  emits: ["load"],
  setup($e, { expose: Y, emit: Z }) {
    const j = b(), p = B({
      member_discount: ""
    }), C = B({}), g = b(!1), V = b(""), s = B({
      loading: !0,
      data: [],
      member_level: []
    }), I = () => {
      s.loading = !0, be({
        goods_id: C.goods_id
      }).then((r) => {
        s.loading = !1, s.data = r.data, s.data.forEach((e, l, _) => {
          e.sku_name || (_[l].sku_name = C.goods_name), s.member_level.forEach((d, m) => {
            if (!e.member_price)
              _[l][`level_${d.level_id}`] = parseFloat(e.price).toFixed(2);
            else if (e.member_price) {
              const f = JSON.parse(e.member_price);
              f[`level_${d.level_id}`] ? _[l][`level_${d.level_id}`] = parseFloat(f[`level_${d.level_id}`]).toFixed(2) : _[l][`level_${d.level_id}`] = parseFloat(e.price).toFixed(2);
            }
          });
        });
      }).catch(() => {
        s.loading = !1;
      });
    }, P = b([]), A = (r, e) => {
      Object.assign(C, r), s.member_level = [], Object.assign(s.member_level, e), p.member_discount = r.member_discount, P.value = X(e), P.value.forEach((l, _, d) => {
        !l.level_benefits || l.level_benefits == null ? d[_].level_benefits = {
          discount: {
            discount: "原价"
          }
        } : l.level_benefits && l.level_benefits != null && !l.level_benefits.discount ? d[_].level_benefits.discount = {
          discount: "原价"
        } : l.level_benefits && l.level_benefits != null && l.level_benefits.discount && !l.level_benefits.discount.discount ? d[_].level_benefits.discount.discount = "原价" : d[_].level_benefits.discount.discount += "折";
      }), I(), g.value = !0, L = !1;
    }, F = b(), D = b(!1), ee = (r) => {
      D.value = !1, j.value.toggleAllSelection();
    }, h = b([]), z = (r) => {
      h.value = X(r), F.value = !1, h.value.length > 0 && h.value.length < s.data.length ? D.value = !0 : D.value = !1, h.value.length == s.data.length && (F.value = !0);
    }, O = b(""), le = (r) => {
      if (!h.value.length)
        return U({
          message: "请选择要操作的商品",
          type: "warning"
        }), !1;
      O.value = r, E.value = !0;
    }, E = b(!1), oe = () => {
      if (!V.value)
        return U.warning("请输入会员价"), !1;
      const r = h.value.map((e) => e.sku_id);
      s.data.forEach((e, l, _) => {
        r.indexOf(e.sku_id) > -1 && (_[l][`level_${O.value}`] = parseFloat(V.value).toFixed(2));
      }), V.value = "", E.value = !1;
    };
    let L = !1;
    const te = () => {
      const r = [];
      let e = !0;
      if (p.member_discount == "fixed_price" && (s.data.forEach((l, _, d) => {
        const m = {};
        m.sku_id = l.sku_id, m.member_price = {}, s.member_level.forEach((f, R) => {
          e && (m.member_price[`level_${f.level_id}`] = l[`level_${f.level_id}`], parseFloat(l[`level_${f.level_id}`]) <= 0 && (e = !1, U.warning(`[${l.sku_name}][${f.level_name}]的指定价格不能小于等于零`)), parseFloat(l[`level_${f.level_id}`]) > parseFloat(l.price) && (e = !1, U.warning(`[${l.sku_name}][${f.level_name}]的指定价格不能大于商品原价`)));
        }), r.push(m);
      }), !e) || L)
        return !1;
      L = !0, ve({
        goods_id: C.goods_id,
        member_discount: p.member_discount,
        sku_list: r
      }).then((l) => {
        g.value = !1, Z("load");
      }).catch(() => {
        L = !1, g.value = !1;
      });
    };
    return Y({
      showDialog: g,
      show: A
    }), (r, e) => {
      const l = ae, _ = ne, d = ie, m = se, f = de, R = re, $ = ue, H = _e, K = ce, J = me, q = fe;
      return c(), k("div", null, [
        n(J, {
          modelValue: g.value,
          "onUpdate:modelValue": e[8] || (e[8] = (t) => g.value = t),
          title: a(i)("editMemberPricePopupTitle"),
          width: "1100px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: o(() => [
            y("span", Ve, [
              n($, {
                onClick: e[7] || (e[7] = (t) => g.value = !1)
              }, {
                default: o(() => [
                  v(u(a(i)("cancel")), 1)
                ]),
                _: 1
              }),
              n($, {
                type: "primary",
                onClick: te
              }, {
                default: o(() => [
                  v(u(a(i)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            n(K, {
              model: p,
              "label-width": "120px",
              class: "page-form"
            }, {
              default: o(() => [
                n(d, {
                  label: a(i)("memberDiscount")
                }, {
                  default: o(() => [
                    y("div", null, [
                      n(_, {
                        modelValue: p.member_discount,
                        "onUpdate:modelValue": e[0] || (e[0] = (t) => p.member_discount = t)
                      }, {
                        default: o(() => [
                          n(l, { label: "" }, {
                            default: o(() => [
                              v(u(a(i)("nonparticipation")), 1)
                            ]),
                            _: 1
                          }),
                          n(l, { label: "discount" }, {
                            default: o(() => [
                              v(u(a(i)("discount")), 1)
                            ]),
                            _: 1
                          }),
                          n(l, { label: "fixed_price" }, {
                            default: o(() => [
                              v(u(a(i)("fixedPrice")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      p.member_discount == "discount" ? (c(), k("div", xe, u(a(i)("discountHint")), 1)) : M("", !0),
                      p.member_discount == "fixed_price" ? (c(), k("div", he, u(a(i)("fixedPriceHint")), 1)) : M("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                p.member_discount == "discount" && P.value.length ? (c(), x(d, { key: 0 }, {
                  default: o(() => [
                    Q((c(), x(f, {
                      data: [{}],
                      size: "large",
                      "max-height": "450",
                      onSelectionChange: z
                    }, {
                      empty: o(() => [
                        y("span", null, u(s.loading ? "" : a(i)("emptyData")), 1)
                      ]),
                      default: o(() => [
                        n(m, {
                          fixed: "",
                          prop: "sku_name",
                          label: a(i)("memberLevel"),
                          width: "150"
                        }, {
                          default: o(() => [
                            v(u(a(i)("memberEnjoyDiscount")), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        (c(!0), k(G, null, N(P.value, (t, w) => (c(), x(m, {
                          key: w,
                          label: t.level_name
                        }, {
                          default: o(({ row: S }) => [
                            v(u(t.level_benefits.discount.discount), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    })), [
                      [q, s.loading]
                    ])
                  ]),
                  _: 1
                })) : M("", !0),
                p.member_discount == "fixed_price" ? (c(), x(d, { key: 1 }, {
                  default: o(() => [
                    y("div", ke, [
                      n(R, {
                        modelValue: F.value,
                        "onUpdate:modelValue": e[1] || (e[1] = (t) => F.value = t),
                        onChange: ee,
                        size: "large",
                        class: "px-[14px]",
                        indeterminate: D.value
                      }, null, 8, ["modelValue", "indeterminate"]),
                      (c(!0), k(G, null, N(s.member_level, (t, w) => (c(), x($, {
                        key: w,
                        size: "small",
                        onClick: (S) => le(t.level_id)
                      }, {
                        default: o(() => [
                          v(u(t.level_name), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))), 128))
                    ]),
                    Q((c(), x(f, {
                      data: s.data,
                      size: "large",
                      "max-height": "450",
                      onSelectionChange: z,
                      ref_key: "goodsListTableRef",
                      ref: j
                    }, {
                      empty: o(() => [
                        y("span", null, u(s.loading ? "" : a(i)("emptyData")), 1)
                      ]),
                      default: o(() => [
                        n(m, {
                          type: "selection",
                          width: "55"
                        }),
                        n(m, {
                          fixed: "",
                          prop: "sku_name",
                          label: a(i)("goodsSku"),
                          width: "150"
                        }, null, 8, ["label"]),
                        n(m, {
                          fixed: "",
                          prop: "price",
                          label: a(i)("skuPrice"),
                          width: "120"
                        }, null, 8, ["label"]),
                        (c(!0), k(G, null, N(s.member_level, (t, w) => (c(), x(m, {
                          key: w,
                          label: t.level_name,
                          width: "190"
                        }, {
                          default: o(({ row: S }) => [
                            n(H, {
                              modelValue: S[`level_${t.level_id}`],
                              "onUpdate:modelValue": (T) => S[`level_${t.level_id}`] = T,
                              modelModifiers: { trim: !0 },
                              maxlength: "8",
                              clearable: "",
                              class: "w-full",
                              onKeyup: e[2] || (e[2] = (T) => a(W)(T))
                            }, {
                              append: o(() => [
                                v(u(a(i)("yuanUnit")), 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["data"])), [
                      [q, s.loading]
                    ])
                  ]),
                  _: 1
                })) : M("", !0)
              ]),
              _: 1
            }, 8, ["model"]),
            n(J, {
              modelValue: E.value,
              "onUpdate:modelValue": e[6] || (e[6] = (t) => E.value = t),
              title: a(i)("editMemberPrice"),
              width: "400px",
              "destroy-on-close": !0,
              "close-on-click-modal": !1
            }, {
              footer: o(() => [
                y("span", ye, [
                  n($, {
                    onClick: e[5] || (e[5] = (t) => E.value = !1)
                  }, {
                    default: o(() => [
                      v(u(a(i)("cancel")), 1)
                    ]),
                    _: 1
                  }),
                  n($, {
                    type: "primary",
                    onClick: oe
                  }, {
                    default: o(() => [
                      v(u(a(i)("confirm")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: o(() => [
                n(K, {
                  model: p,
                  "label-width": "80px",
                  class: "page-form"
                }, {
                  default: o(() => [
                    n(d, {
                      label: a(i)("memberPrice"),
                      prop: "member_price"
                    }, {
                      default: o(() => [
                        n(H, {
                          modelValue: V.value,
                          "onUpdate:modelValue": e[3] || (e[3] = (t) => V.value = t),
                          modelModifiers: { trim: !0 },
                          placeholder: a(i)("memberPricePlaceholder"),
                          maxlength: "8",
                          clearable: "",
                          onKeyup: e[4] || (e[4] = (t) => a(W)(t))
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              _: 1
            }, 8, ["modelValue", "title"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const Ue = /* @__PURE__ */ ge(Ee, [["__scopeId", "data-v-241b1882"]]);
export {
  Ue as default
};
