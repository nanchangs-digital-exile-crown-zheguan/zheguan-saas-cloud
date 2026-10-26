import { ElInput as se, ElImage as oe, ElEmpty as ae, ElButton as ne, ElDialog as le } from "element-plus/es";
import { defineComponent as ie, ref as r, onMounted as ce, openBlock as n, createElementBlock as i, createElementVNode as t, Fragment as x, renderList as S, normalizeClass as re, toDisplayString as c, createVNode as d, withKeys as ue, unref as O, createCommentVNode as u, createTextVNode as V, createBlock as _e, withCtx as D, pushScopeId as de, popScopeId as me } from "vue";
import { ElMessageBox as pe, ElMessage as T } from "element-plus";
import { useRoute as ve } from "vue-router";
import { img as K } from "/admin/assets/shared/core-shared.js";
import ye from "/admin/assets/shared/core-shared.js";
import { g as N, o as fe, a as he } from "./order-a6ced131.js";
import { _ as be } from "./delivery-action.vue_vue_type_style_index_0_lang-d3ec871d.js";
import { _ as ge } from "./order-notes.vue_vue_type_style_index_0_lang-f64bd6e6.js";
import { _ as ke } from "./shop-active-refund.vue_vue_type_style_index_0_lang-bfeb8771.js";
import { _ as Ce } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/admin-lang.js";
import "./delivery-da6bd7ad.js";
import "/admin/assets/shared/core-shared.js";
import "./electronic_sheet-e3cd8985.js";
import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
function we(m) {
  return ye.get("shop/customer_panel/order", { params: m });
}
const I = (m) => (de("data-v-330b1f1d"), m = m(), me(), m), De = { class: "panel-order" }, Ne = { class: "panel-order-tabs" }, Fe = ["onClick"], $e = { class: "panel-order-search" }, Ee = { class: "search-box" }, xe = { class: "order-card-head" }, Se = ["title"], Ve = { class: "order-status" }, Ie = { class: "goods-info" }, Re = { class: "goods-name" }, Ae = {
  key: 0,
  class: "goods-sku"
}, Be = { class: "goods-bottom" }, Me = { class: "goods-price" }, Oe = { class: "goods-num" }, Te = { class: "order-card-meta" }, Ke = { class: "meta-row" }, qe = { class: "meta-label" }, He = { class: "meta-value" }, Le = { class: "meta-row" }, Ue = /* @__PURE__ */ I(() => /* @__PURE__ */ t("span", { class: "meta-label" }, "订单金额", -1)), ze = { class: "meta-value" }, Pe = { class: "pay-money" }, je = {
  key: 0,
  class: "meta-row"
}, Ge = /* @__PURE__ */ I(() => /* @__PURE__ */ t("span", { class: "meta-label" }, "备注", -1)), Je = ["title"], Qe = { class: "order-card-actions" }, We = ["onClick"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], et = ["onClick"], tt = ["onClick"], st = ["onClick"], ot = {
  key: 1,
  class: "loading-tip"
}, at = {
  key: 2,
  class: "loading-tip"
}, nt = /* @__PURE__ */ I(() => /* @__PURE__ */ t("span", null, "确认该订单已收到货？", -1)), lt = /* @__PURE__ */ ie({
  __name: "order",
  props: {
    memberId: { type: [Number, String], default: 0 }
  },
  setup(m) {
    const q = m, H = ve(), L = Number(q.memberId || H.query.member_id || 0), U = {
      1: "余额支付",
      2: "微信支付",
      3: "支付宝支付",
      4: "银联支付",
      5: "货到付款",
      6: "无需支付"
    }, z = [
      { label: "全部", value: "" },
      { label: "待付款", value: 1 },
      { label: "待发货", value: 2 },
      { label: "待收货", value: 3 },
      { label: "已完成", value: 5 },
      { label: "已关闭", value: -1 }
    ], _ = r([]), y = r(!1), p = r(!1), v = r(1), R = 10, k = r(""), F = r(""), f = r(!1), C = r(null), P = (s) => typeof s == "string" ? s : s && typeof s.name == "string" ? s.name : "", h = () => {
      y.value || p.value || (y.value = !0, we({
        member_id: L,
        status: k.value,
        order_no: F.value,
        page: v.value,
        limit: R
      }).then((s) => {
        const o = s.data.data || [];
        o.forEach((a) => {
          !a.pay_type_name && a.pay_type && (a.pay_type_name = U[Number(a.pay_type)] || "");
        }), _.value = _.value.concat(o), v.value >= (s.data.last_page || 1) || o.length < R ? p.value = !0 : v.value++;
      }).finally(() => {
        y.value = !1;
      }));
    }, j = (s) => {
      k.value !== s && (k.value = s, _.value = [], v.value = 1, p.value = !1, h());
    }, A = () => {
      _.value = [], v.value = 1, p.value = !1, h();
    }, G = (s) => {
      const o = s.target;
      o.scrollHeight - o.scrollTop - o.clientHeight < 30 && h();
    }, b = r(null), $ = r(null), E = r(null), B = async (s, o) => {
      var w;
      const a = await N(s.order_id);
      (w = b.value) == null || w.setFormData(a.data, o), b.value.showDialog = !0;
    }, J = async (s) => {
      var a;
      const o = await N(s.order_id);
      (a = b.value) == null || a.setFormData(o.data, "edit"), b.value.showDialog = !0;
    }, Q = async (s) => {
      var a;
      const o = await N(s.order_id);
      (a = $.value) == null || a.setFormData(o.data), $.value.showDialog = !0;
    }, W = (s) => {
      pe.confirm("确定关闭此订单？", "提示", { type: "warning" }).then(async () => {
        await fe(s.order_id), T.success("订单已关闭"), g();
      });
    }, X = (s) => {
      C.value = s, f.value = !0;
    }, Y = async () => {
      C.value && (await he(C.value.order_id), T.success("收货成功"), f.value = !1, C.value = null, g());
    }, Z = async (s) => {
      var a;
      const o = await N(s.order_id);
      (a = E.value) == null || a.setFormData(o.data), E.value.showDialog = !0;
    }, g = () => {
      _.value = [], v.value = 1, p.value = !1, h();
    };
    return ce(() => {
      h();
    }), (s, o) => {
      const a = se, w = oe, ee = ae, M = ne, te = le;
      return n(), i("div", De, [
        t("div", Ne, [
          (n(), i(x, null, S(z, (e) => t("span", {
            key: String(e.value),
            class: re(["panel-order-tab", { active: k.value === e.value }]),
            onClick: (l) => j(e.value)
          }, c(e.label), 11, Fe)), 64))
        ]),
        t("div", $e, [
          t("div", Ee, [
            d(a, {
              modelValue: F.value,
              "onUpdate:modelValue": o[0] || (o[0] = (e) => F.value = e),
              class: "search-input",
              clearable: "",
              type: "text",
              placeholder: "搜索订单编号",
              onKeyup: ue(A, ["enter"])
            }, null, 8, ["modelValue", "onKeyup"]),
            t("button", {
              type: "button",
              class: "search-btn",
              onClick: A
            }, "搜索")
          ])
        ]),
        t("div", {
          class: "panel-order-list",
          onScroll: G
        }, [
          (n(!0), i(x, null, S(_.value, (e) => (n(), i("div", {
            key: e.order_id,
            class: "order-card"
          }, [
            t("div", xe, [
              t("span", {
                class: "order-no",
                title: e.order_no
              }, c(e.order_no), 9, Se),
              t("span", Ve, c(P(e.status_name)), 1)
            ]),
            (n(!0), i(x, null, S(e.order_goods || [], (l) => (n(), i("div", {
              key: l.order_goods_id,
              class: "order-goods"
            }, [
              d(w, {
                class: "goods-img",
                src: O(K)(l.goods_image_thumb_small || l.goods_image),
                fit: "cover"
              }, null, 8, ["src"]),
              t("div", Ie, [
                t("div", Re, c(l.goods_name), 1),
                l.sku_name ? (n(), i("div", Ae, c(l.sku_name), 1)) : u("", !0),
                t("div", Be, [
                  t("span", Me, "¥" + c(l.price), 1),
                  t("span", Oe, "*" + c(l.num), 1)
                ])
              ])
            ]))), 128)),
            t("div", Te, [
              t("div", Ke, [
                t("span", qe, c(e.delivery_type_name || "配送方式"), 1),
                t("span", He, c(e.create_time), 1)
              ]),
              t("div", Le, [
                Ue,
                t("span", ze, [
                  V(" ¥" + c(e.order_money) + " ", 1),
                  t("em", Pe, "(实付" + c(e.pay_money || e.order_money) + ")", 1)
                ])
              ]),
              e.shop_remark ? (n(), i("div", je, [
                Ge,
                t("span", {
                  class: "meta-value meta-remark",
                  title: e.shop_remark
                }, c(e.shop_remark), 9, Je)
              ])) : u("", !0)
            ]),
            t("div", Qe, [
              Number(e.status) === 1 ? (n(), i("button", {
                key: 0,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => W(e)
              }, "关闭", 8, We)) : u("", !0),
              [1, 2].includes(Number(e.status)) && e.delivery_type !== "virtual" && e.delivery_type !== "store" && e.activity_type !== "giftcard" ? (n(), i("button", {
                key: 1,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => J(e)
              }, "修改地址", 8, Xe)) : u("", !0),
              Number(e.status) === 2 && e.delivery_type !== "store" ? (n(), i("button", {
                key: 2,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => B(e, "add")
              }, "发货", 8, Ye)) : u("", !0),
              Number(e.status) === 3 && e.delivery_type !== "store" && e.delivery_type !== "virtual" ? (n(), i("button", {
                key: 3,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => B(e, "edit")
              }, "修改发货", 8, Ze)) : u("", !0),
              Number(e.status) === 3 ? (n(), i("button", {
                key: 4,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => X(e)
              }, "确认收货", 8, et)) : u("", !0),
              Number(e.status) !== 1 && Number(e.status) !== -1 ? (n(), i("button", {
                key: 5,
                type: "button",
                class: "order-action-btn",
                onClick: (l) => Z(e)
              }, "退款", 8, tt)) : u("", !0),
              t("button", {
                type: "button",
                class: "order-action-btn",
                onClick: (l) => Q(e)
              }, "备注", 8, st)
            ])
          ]))), 128)),
          !_.value.length && !y.value ? (n(), _e(ee, {
            key: 0,
            image: O(K)("static/resource/images/empty_default.png"),
            description: "暂无订单"
          }, null, 8, ["image"])) : u("", !0),
          y.value ? (n(), i("div", ot, "加载中...")) : p.value && _.value.length ? (n(), i("div", at, "没有更多了")) : u("", !0)
        ], 32),
        d(be, {
          ref_key: "deliveryActionDialog",
          ref: b,
          onComplete: g
        }, null, 512),
        d(ge, {
          ref_key: "orderNotesDialog",
          ref: $,
          onComplete: g
        }, null, 512),
        d(ke, {
          ref_key: "activeRefundDialog",
          ref: E,
          onComplete: g
        }, null, 512),
        d(te, {
          modelValue: f.value,
          "onUpdate:modelValue": o[2] || (o[2] = (e) => f.value = e),
          title: "确认收货",
          width: "360px",
          "destroy-on-close": ""
        }, {
          footer: D(() => [
            d(M, {
              onClick: o[1] || (o[1] = (e) => f.value = !1)
            }, {
              default: D(() => [
                V("取消")
              ]),
              _: 1
            }),
            d(M, {
              type: "primary",
              onClick: Y
            }, {
              default: D(() => [
                V("确定")
              ]),
              _: 1
            })
          ]),
          default: D(() => [
            nt
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const Nt = /* @__PURE__ */ Ce(lt, [["__scopeId", "data-v-330b1f1d"]]);
export {
  Nt as default
};
