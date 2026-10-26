import { ElRadio as E, ElRadioGroup as P, ElFormItem as R, ElButton as N, ElForm as k, ElColorPicker as U, ElSlider as B } from "element-plus/es";
import { defineComponent as W, ref as G, openBlock as b, createElementBlock as V, withDirectives as S, createElementVNode as m, toDisplayString as s, unref as e, createVNode as l, withCtx as n, createTextVNode as p, createBlock as F, vShow as y, createCommentVNode as x, renderSlot as z } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { u as D } from "./diy-642f6d04.js";
import { _ as T } from "./goods-select-popup.vue_vue_type_script_setup_true_lang-0c011b76.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "./goods_default-bd0cc1e2.js";
import "/admin/assets/shared/core-shared.js";
import "./marketing-f8ec8b08.js";
import "/admin/assets/shared/core-shared.js";
const $ = { class: "content-wrap" }, A = { class: "edit-attr-item-wrap" }, I = { class: "mb-[10px]" }, j = { class: "inline-block ml-[10px] text-[14px]" }, q = { class: "text-primary mx-[2px]" }, H = { class: "edit-attr-item-wrap" }, J = { class: "mb-[10px]" }, K = {
  key: 0,
  class: "style-wrap"
}, L = { class: "edit-attr-item-wrap" }, M = { class: "mb-[10px]" }, O = /* @__PURE__ */ m("div", { class: "mr-[20px]" }, null, -1), pe = /* @__PURE__ */ W({
  __name: "edit-shop-exchange-goods",
  setup(Q, { expose: h }) {
    const o = D();
    o.editComponent.ignore = [], o.editComponent.verify = (r) => {
      const t = { code: !0, message: "" };
      return o.value[r].source == "category" ? o.value[r].goods_category == "" && (t.code = !1, t.message = d("goodsCategoryPlaceholder")) : o.value[r].source == "custom" && o.value[r].goods_ids.length == 0 && (t.code = !1, t.message = d("goodsPlaceholder")), t;
    };
    const C = G(), v = (r) => {
      o.editComponent.goods_ids = r.map((t) => t.id);
    };
    return h({}), (r, t) => {
      const u = E, c = P, i = R, w = N, _ = k, f = U, g = B;
      return b(), V("div", null, [
        S(m("div", $, [
          m("div", A, [
            m("h3", I, s(e(d)("selectSource")), 1),
            l(_, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                l(i, {
                  label: e(d)("sortWay")
                }, {
                  default: n(() => [
                    l(c, {
                      modelValue: e(o).editComponent.sortWay,
                      "onUpdate:modelValue": t[0] || (t[0] = (a) => e(o).editComponent.sortWay = a)
                    }, {
                      default: n(() => [
                        l(u, { label: "total_order_num" }, {
                          default: n(() => [
                            p(s(e(d)("default")), 1)
                          ]),
                          _: 1
                        }),
                        l(u, { label: "total_exchange_num" }, {
                          default: n(() => [
                            p(s(e(d)("sales")), 1)
                          ]),
                          _: 1
                        }),
                        l(u, { label: "price" }, {
                          default: n(() => [
                            p(s(e(d)("price")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("goodsSelectPopupSelectGoodsButton")
                }, {
                  default: n(() => [
                    l(c, {
                      modelValue: e(o).editComponent.source,
                      "onUpdate:modelValue": t[1] || (t[1] = (a) => e(o).editComponent.source = a),
                      title: e(d)("goodsSelectPopupSelectGoodsButton")
                    }, {
                      default: n(() => [
                        l(u, { label: "all" }, {
                          default: n(() => [
                            p(s(e(d)("goodsSelectPopupAllGoods")), 1)
                          ]),
                          _: 1
                        }),
                        l(u, { label: "custom" }, {
                          default: n(() => [
                            p(s(e(d)("manualSelectionSources")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "title"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(o).editComponent.source == "custom" ? (b(), F(i, {
                  key: 0,
                  label: e(d)("customGoods")
                }, {
                  default: n(() => [
                    l(w, {
                      type: "primary",
                      onClick: t[2] || (t[2] = (a) => C.value.show(e(o).editComponent.goods_ids))
                    }, {
                      default: n(() => [
                        p(s(e(d)("goodsSelectPopupSelectGoodsButton")), 1)
                      ]),
                      _: 1
                    }),
                    S(m("div", j, [
                      m("span", null, s(e(d)("goodsSelectPopupSelect")), 1),
                      m("span", q, s(e(o).editComponent.goods_ids.length), 1),
                      m("span", null, s(e(d)("goodsSelectPopupPiece")), 1)
                    ], 512), [
                      [y, e(o).editComponent.goods_ids.length]
                    ]),
                    l(T, {
                      ref_key: "goodsSelectPopupRef",
                      ref: C,
                      min: 1,
                      onSelect: v
                    }, null, 512)
                  ]),
                  _: 1
                }, 8, ["label"])) : x("", !0)
              ]),
              _: 1
            })
          ]),
          m("div", H, [
            m("h3", J, s(e(d)("图片展示模式")), 1),
            l(_, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                l(i, {
                  label: e(d)("模式")
                }, {
                  default: n(() => [
                    l(c, {
                      modelValue: e(o).editComponent.mode,
                      "onUpdate:modelValue": t[3] || (t[3] = (a) => e(o).editComponent.mode = a)
                    }, {
                      default: n(() => [
                        l(u, { label: "aspectFill" }, {
                          default: n(() => [
                            p(s(e(d)("短边完整，长边裁剪")), 1)
                          ]),
                          _: 1
                        }),
                        l(u, { label: "aspectFit" }, {
                          default: n(() => [
                            p(s(e(d)("长边适配，等比缩放")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [y, e(o).editTab == "content"]
        ]),
        e(o).editTab == "style" ? (b(), V("div", K, [
          m("div", L, [
            m("h3", M, s(e(d)("goodsStyle")), 1),
            l(_, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: n(() => [
                l(i, {
                  label: e(d)("goodsNameColor")
                }, {
                  default: n(() => [
                    l(f, {
                      modelValue: e(o).editComponent.goodsNameStyle.color,
                      "onUpdate:modelValue": t[4] || (t[4] = (a) => e(o).editComponent.goodsNameStyle.color = a),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    O,
                    l(c, {
                      modelValue: e(o).editComponent.goodsNameStyle.fontWeight,
                      "onUpdate:modelValue": t[5] || (t[5] = (a) => e(o).editComponent.goodsNameStyle.fontWeight = a)
                    }, {
                      default: n(() => [
                        l(u, { label: "normal" }, {
                          default: n(() => [
                            p(s(e(d)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        l(u, { label: "bold" }, {
                          default: n(() => [
                            p(s(e(d)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("imageRounded")
                }, {
                  default: n(() => [
                    l(g, {
                      modelValue: e(o).editComponent.imgElementRounded,
                      "onUpdate:modelValue": t[6] || (t[6] = (a) => e(o).editComponent.imgElementRounded = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("goodsNumColor")
                }, {
                  default: n(() => [
                    l(f, {
                      modelValue: e(o).editComponent.saleStyle.color,
                      "onUpdate:modelValue": t[7] || (t[7] = (a) => e(o).editComponent.saleStyle.color = a),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("goodsPriceColor")
                }, {
                  default: n(() => [
                    l(f, {
                      modelValue: e(o).editComponent.priceStyle.mainColor,
                      "onUpdate:modelValue": t[8] || (t[8] = (a) => e(o).editComponent.priceStyle.mainColor = a),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("topRounded")
                }, {
                  default: n(() => [
                    l(g, {
                      modelValue: e(o).editComponent.topElementRounded,
                      "onUpdate:modelValue": t[9] || (t[9] = (a) => e(o).editComponent.topElementRounded = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(i, {
                  label: e(d)("bottomRounded")
                }, {
                  default: n(() => [
                    l(g, {
                      modelValue: e(o).editComponent.bottomElementRounded,
                      "onUpdate:modelValue": t[10] || (t[10] = (a) => e(o).editComponent.bottomElementRounded = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          z(r.$slots, "style")
        ])) : x("", !0)
      ]);
    };
  }
});
export {
  pe as default
};
