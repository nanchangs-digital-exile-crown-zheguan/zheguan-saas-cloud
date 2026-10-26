import { ElFormItem as V, ElForm as C, ElDrawer as S, ElLoadingDirective as I } from "element-plus/es";
import { defineComponent as j, ref as x, openBlock as r, createBlock as h, withCtx as a, withDirectives as M, createElementBlock as _, createVNode as s, createElementVNode as e, unref as o, toDisplayString as t, createCommentVNode as c, Fragment as R, renderList as T } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { distance as q } from "/admin/assets/shared/core-shared.js";
import { B as U } from "./delivery-da6bd7ad.js";
import { useRouter as z } from "vue-router";
const A = { class: "main-container" }, G = { class: "row-bg px-[20px] mb-[20px] multiple-layout" }, H = { class: "input-width" }, J = { class: "input-width" }, K = { class: "input-width" }, O = { class: "input-width" }, P = { class: "input-width" }, Q = { class: "input-width" }, W = { class: "input-width" }, X = { class: "input-width" }, Y = { class: "input-width" }, Z = { class: "input-width" }, $ = { class: "input-width" }, ee = { class: "input-width" }, le = {
  key: 0,
  class: "mt-[50px] mb-[20px]"
}, te = {
  key: 1,
  class: "mb-[100px]",
  style: { "min-height": "100px" }
}, ae = { class: "mr-[20px] min-w-[71px]" }, oe = { class: "leading-[1] w-full text-[14px] w-[100px] flex justify-end" }, ie = { class: "leading-[1] w-full text-[14px] w-[100px] flex justify-end mt-[15px]" }, de = /* @__PURE__ */ e("div", { class: "w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]" }, [
  /* @__PURE__ */ e("div", { class: "w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]" })
], -1), se = {
  key: 0,
  class: "w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"
}, re = { class: "leading-[1] ml-[20px] text-[14px]" }, ne = { class: "leading-[1] ml-[20px] text-[14px] mt-[15px]" }, fe = /* @__PURE__ */ j({
  __name: "shop_record_detail",
  setup(_e, { expose: y }) {
    const w = z(), u = x(!1), p = x(!1), g = "配送详情", l = x({});
    let f = "";
    const k = (v) => {
      u.value = !1;
    }, D = async () => {
      p.value = !0, f && (l.value = await (await U(f)).data), p.value = !1, u.value = !0;
    }, F = async (v = null) => {
      f = v.id, D();
    }, E = () => {
      const v = "/shop/order/detail", m = w.resolve({
        path: v,
        query: {
          order_id: l.value.trade_id
        }
      });
      window.open(m.href);
    };
    return y({
      showDialog: u,
      setFormData: F
    }), (v, m) => {
      const i = V, L = C, N = S, B = I;
      return r(), h(N, {
        modelValue: u.value,
        "onUpdate:modelValue": m[0] || (m[0] = (n) => u.value = n),
        title: g,
        direction: "rtl",
        "before-close": k,
        class: "local-record-detail-drawer"
      }, {
        default: a(() => [
          M((r(), _("div", A, [
            s(L, {
              model: l.value,
              "label-width": "100px",
              ref: "formRef",
              class: "page-form",
              "label-position": "left"
            }, {
              default: a(() => [
                e("div", G, [
                  s(i, {
                    label: o(d)("deliveryNo")
                  }, {
                    default: a(() => [
                      e("div", H, t(l.value.delivery_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("goodsInfo")
                  }, {
                    default: a(() => [
                      e("div", J, t(l.value.body), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("tradeNo")
                  }, {
                    default: a(() => [
                      e("div", {
                        class: "input-width text-primary cursor-pointer",
                        onClick: E
                      }, t(l.value.trade_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("deliveryStart")
                  }, {
                    default: a(() => [
                      e("div", K, t(l.value.delivery_start), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("deliveryEnd")
                  }, {
                    default: a(() => [
                      e("div", O, t(l.value.delivery_end), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("deliveryStatus")
                  }, {
                    default: a(() => [
                      e("div", P, t(l.value.status_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("deliveryDistance")
                  }, {
                    default: a(() => [
                      e("div", Q, t(o(q)(l.value.delivery_distance)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("deliveryMoney")
                  }, {
                    default: a(() => [
                      e("div", W, "￥" + t(l.value.delivery_money), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l.value.cancel_time ? (r(), h(i, {
                    key: 0,
                    label: o(d)("cancelTime")
                  }, {
                    default: a(() => [
                      e("div", X, t(l.value.cancel_time), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  l.value.rider_name ? (r(), h(i, {
                    key: 1,
                    label: o(d)("riderName")
                  }, {
                    default: a(() => [
                      e("div", Y, t(l.value.rider_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  l.value.rider_mobile ? (r(), h(i, {
                    key: 2,
                    label: o(d)("riderMobile")
                  }, {
                    default: a(() => [
                      e("div", Z, t(l.value.rider_mobile), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  s(i, {
                    label: o(d)("outDeliveryNo")
                  }, {
                    default: a(() => [
                      e("div", $, t(l.value.out_delivery_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(i, {
                    label: o(d)("remark")
                  }, {
                    default: a(() => [
                      e("div", ee, t(l.value.remark), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])
                ])
              ]),
              _: 1
            }, 8, ["model"]),
            e("div", null, [
              l.value.orderLog.length > 0 ? (r(), _("h3", le, "配送日志")) : c("", !0),
              l.value.orderLog.length > 0 ? (r(), _("div", te, [
                (r(!0), _(R, null, T(l.value.orderLog, (n, b) => (r(), _("div", {
                  class: "flex",
                  key: b
                }, [
                  e("div", ae, [
                    e("div", oe, t(n.create_time && n.create_time.split(" ")[0]), 1),
                    e("div", ie, t(n.create_time && n.create_time.split(" ")[1]), 1)
                  ]),
                  e("div", null, [
                    de,
                    b + 1 != l.value.orderLog.length ? (r(), _("div", se)) : c("", !0)
                  ]),
                  e("div", null, [
                    e("div", re, t(n.main_type_name) + t(n.main_name), 1),
                    e("div", ne, [
                      e("span", null, t(n.remark), 1)
                    ])
                  ])
                ]))), 128))
              ])) : c("", !0)
            ])
          ])), [
            [B, p.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  fe as _
};
