import { ElAlert as z, ElFormItem as L, ElTableColumn as j, ElTooltip as q, ElTable as H, ElInput as J, ElForm as K, ElButton as O, ElDialog as Q, ElLoadingDirective as W } from "element-plus/es";
import { defineComponent as X, ref as m, reactive as Y, openBlock as p, createBlock as Z, unref as r, withCtx as a, createElementVNode as n, createVNode as d, createTextVNode as w, toDisplayString as i, withDirectives as ee, createElementBlock as v, createCommentVNode as F, nextTick as oe } from "vue";
import { t as _ } from "/admin/assets/shared/admin-lang.js";
import { img as te } from "/admin/assets/shared/core-shared.js";
import { ElMessage as le } from "element-plus";
import { f as ne } from "./order-a6ced131.js";
import { c as se } from "./cloneDeep-70d647ec.js";
const ae = /* @__PURE__ */ n("p", null, "商家主动退款功能仅作为退款售后业务的补充功能，请勿过度依赖和使用。此功能支持多次退款操作。", -1), de = /* @__PURE__ */ n("p", null, "如果订单项全部退款，运费将在最后一次退款时一并退还，同时使用的优惠券也将返还给用户，退款金额将原路返还至用户的支付账户。", -1), re = { class: "text-[red]" }, _e = {
  key: 0,
  class: "text-[#999] text-[24rpx]"
}, ie = { class: "flex cursor-pointer" }, ue = { class: "flex items-center min-w-[50px] mr-[10px]" }, fe = ["src"], ce = {
  key: 1,
  class: "w-[50px] h-[50px]",
  src: "",
  alt: ""
}, me = { class: "flex flex-col items-start" }, pe = { class: "max-w-[250px]" }, ye = { class: "multi-hidden text-[14px]" }, xe = { class: "text-[12px] text-[#999] truncate" }, ve = {
  key: 0,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, he = { class: "flex flex-col" }, ge = { class: "text-[13px]" }, be = { class: "flex flex-col" }, ke = { class: "text-[13px]" }, Ee = { class: "flex flex-col" }, we = { class: "text-[13px] mt-[5px]" }, Fe = { class: "dialog-footer" }, Re = /* @__PURE__ */ X({
  __name: "shop-active-refund",
  emits: ["complete"],
  setup(De, { expose: D, emit: T }) {
    const y = m(!1), f = m(!1), V = {
      order_goods_ids: [],
      refund_money: 0,
      shop_active_refund_remark: ""
    }, g = m([]), b = m(null), e = Y({ ...V }), k = m();
    let h = 0, c = m(!1);
    const C = (l, o) => {
      e.refund_money = 0, c.value = !1, e.order_goods_ids = [], l.forEach((s, u) => {
        e.refund_money += s.refund_money, e.order_goods_ids.push(s.order_goods_id);
      }), l.length == h && (e.refund_money += parseFloat(e.delivery_money), c.value = !0), e.refund_money = e.refund_money.toFixed(2);
    }, S = (l) => {
      e.refund_money = 0, c.value = !1, e.order_goods_ids = [], l.forEach((o, s) => {
        e.refund_money += o.refund_money, e.order_goods_ids.push(o.order_goods_id);
      }), l.length == h && (e.refund_money += parseFloat(e.delivery_money), c.value = !0), e.refund_money = e.refund_money.toFixed(2);
    }, A = (l, o) => {
      let s = !1;
      return l.status == 1 && (s = !0), l.is_gift == 1 && (s = !1), s;
    }, I = async (l) => {
      if (!(f.value || !l)) {
        if (e.order_goods_ids.length <= 0) {
          le({
            message: _("refundGoodsPlaceholder"),
            type: "warning"
          });
          return;
        }
        await l.validate(async (o) => {
          if (o) {
            f.value = !0;
            const s = se(e);
            s.shop_active_refund_money = e.refund_money, delete s.refund_money, ne(s).then((u) => {
              f.value = !1, y.value = !1, T("complete"), R();
            }).catch((u) => {
            });
          }
        });
      }
    }, N = async (l = null) => {
      f.value = !0, l && (h = 0, e.refund_money = 0, e.order_goods_ids = [], g.value = l.order_goods, g.value.forEach((o, s, u) => {
        u[s].refund_money = o.goods_money - o.discount_money, o.status == 1 && (h++, e.refund_money += u[s].refund_money, e.order_goods_ids.push(o.order_goods_id));
      }), e.delivery_money = l.delivery_money, e.refund_money += parseFloat(l.delivery_money), c.value = !0, e.refund_money = e.refund_money.toFixed(2), e.shop_active_refund_remark = ""), oe(() => {
        setTimeout(() => {
          b.value.toggleAllSelection();
        }, 100);
      }), f.value = !1;
    }, R = () => {
      e.order_goods_id = 0, e.refund_money = 0, e.shop_active_refund_status = "partial_refund", e.shop_active_money_type = "back_refund", e.shop_active_refund_remark = "";
    };
    return D({
      showDialog: y,
      setFormData: N
    }), (l, o) => {
      const s = z, u = L, x = j, G = q, B = H, P = J, M = K, E = O, U = Q, $ = W;
      return p(), Z(U, {
        modelValue: y.value,
        "onUpdate:modelValue": o[3] || (o[3] = (t) => y.value = t),
        title: r(_)("refundTitle"),
        width: "800px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: a(() => [
          n("span", Fe, [
            d(E, {
              onClick: o[1] || (o[1] = (t) => y.value = !1)
            }, {
              default: a(() => [
                w(i(r(_)("cancel")), 1)
              ]),
              _: 1
            }),
            d(E, {
              type: "primary",
              loading: f.value,
              onClick: o[2] || (o[2] = (t) => I(k.value))
            }, {
              default: a(() => [
                w(i(r(_)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: a(() => [
          ee((p(), v("div", null, [
            d(s, {
              type: "warning",
              closable: !1,
              class: "!mb-[10px]"
            }, {
              default: a(() => [
                ae,
                de
              ]),
              _: 1
            }),
            d(M, {
              model: e,
              "label-width": "100px",
              ref_key: "formRef",
              ref: k,
              class: "page-form mb-[30px]"
            }, {
              default: a(() => [
                d(u, {
                  label: r(_)("refundMoney")
                }, {
                  default: a(() => [
                    n("div", re, [
                      n("span", null, "￥" + i(e.refund_money), 1),
                      r(c) ? (p(), v("span", _e, "（运费:￥" + i(e.delivery_money) + "）", 1)) : F("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(u, {
                  label: r(_)("refundGoodsItem")
                }, {
                  default: a(() => [
                    d(B, {
                      data: g.value,
                      size: "large",
                      ref_key: "refundTableRef",
                      ref: b,
                      onSelect: C,
                      onSelectAll: S
                    }, {
                      default: a(() => [
                        d(x, {
                          type: "selection",
                          width: "40",
                          selectable: A
                        }),
                        d(x, {
                          align: "left",
                          "min-width": "200",
                          label: r(_)("refundGoodsInfo")
                        }, {
                          default: a(({ row: t }) => [
                            n("div", ie, [
                              n("div", ue, [
                                t.goods_image ? (p(), v("img", {
                                  key: 0,
                                  class: "w-[50px] h-[50px]",
                                  src: r(te)(t.goods_image),
                                  alt: ""
                                }, null, 8, fe)) : (p(), v("img", ce))
                              ]),
                              n("div", me, [
                                d(G, {
                                  class: "box-item",
                                  effect: "light",
                                  placement: "top"
                                }, {
                                  content: a(() => [
                                    n("div", pe, i(t.goods_name), 1)
                                  ]),
                                  default: a(() => [
                                    n("p", ye, i(t.goods_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                n("span", xe, i(t.sku_name), 1),
                                t.is_gift == 1 ? (p(), v("span", ve, "赠品")) : F("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        d(x, {
                          "min-width": "60",
                          label: r(_)("refundPayPrice")
                        }, {
                          default: a(({ row: t }) => [
                            n("div", he, [
                              n("span", ge, "￥" + i(t.refund_money.toFixed(2)), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        d(x, {
                          "min-width": "80",
                          label: r(_)("refundGoodsPrice")
                        }, {
                          default: a(({ row: t }) => [
                            n("div", be, [
                              n("span", ke, "￥" + i(t.price), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        d(x, {
                          "min-width": "60",
                          label: r(_)("refundGoodsNum")
                        }, {
                          default: a(({ row: t }) => [
                            n("div", Ee, [
                              n("span", we, i(t.num) + i(r(_)("piece")), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(u, {
                  label: r(_)("refundInstructions"),
                  prop: "shop_active_refund_remark"
                }, {
                  default: a(() => [
                    d(P, {
                      modelValue: e.shop_active_refund_remark,
                      "onUpdate:modelValue": o[0] || (o[0] = (t) => e.shop_active_refund_remark = t),
                      modelModifiers: { trim: !0 },
                      rows: 5,
                      type: "textarea",
                      maxlength: "200",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model"])
          ])), [
            [$, f.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Re as _
};
