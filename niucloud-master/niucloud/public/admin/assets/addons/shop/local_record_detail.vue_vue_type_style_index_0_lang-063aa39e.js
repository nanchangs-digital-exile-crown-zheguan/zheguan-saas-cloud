import { ElFormItem as B, ElForm as C, ElDrawer as I, ElLoadingDirective as S } from "element-plus/es";
import { defineComponent as j, ref as f, openBlock as r, createBlock as m, withCtx as a, withDirectives as M, createElementBlock as _, createVNode as s, createElementVNode as e, unref as i, toDisplayString as t, createCommentVNode as c, Fragment as R, renderList as T } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { distance as q } from "/admin/assets/shared/core-shared.js";
import { w as U } from "./delivery-da6bd7ad.js";
import { useRouter as z } from "vue-router";
const A = { class: "main-container" }, G = { class: "row-bg px-[20px] mb-[20px] multiple-layout" }, H = { class: "input-width" }, J = { class: "input-width" }, K = { class: "input-width" }, O = { class: "input-width" }, P = { class: "input-width" }, Q = { class: "input-width" }, W = { class: "input-width" }, X = { class: "input-width" }, Y = { class: "input-width" }, Z = { class: "input-width" }, $ = { class: "input-width" }, ee = { class: "input-width" }, le = { class: "input-width" }, te = {
  key: 0,
  class: "mt-[50px] mb-[20px]"
}, ae = {
  key: 1,
  class: "mb-[100px]",
  style: { "min-height": "100px" }
}, ie = { class: "mr-[20px] min-w-[71px]" }, oe = { class: "leading-[1] w-full text-[14px] w-[100px] flex justify-end" }, de = { class: "leading-[1] w-full text-[14px] w-[100px] flex justify-end mt-[15px]" }, se = /* @__PURE__ */ e("div", { class: "w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]" }, [
  /* @__PURE__ */ e("div", { class: "w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]" })
], -1), re = {
  key: 0,
  class: "w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"
}, ne = { class: "leading-[1] ml-[20px] text-[14px]" }, _e = { class: "leading-[1] ml-[20px] text-[14px] mt-[15px]" }, be = /* @__PURE__ */ j({
  __name: "local_record_detail",
  setup(ce, { expose: y }) {
    const w = z(), u = f(!1), p = f(!1), g = "配送详情", l = f({});
    let h = "";
    const k = (v) => {
      u.value = !1;
    }, D = async () => {
      p.value = !0, h && (l.value = await (await U(h)).data), p.value = !1, u.value = !0;
    }, F = async (v = null) => {
      h = v.id, D();
    }, E = () => {
      const v = w.resolve({
        path: "/shop/order/detail",
        query: {
          order_id: l.value.trade_id
        }
      });
      window.open(v.href);
    };
    return y({
      showDialog: u,
      setFormData: F
    }), (v, b) => {
      const o = B, L = C, N = I, V = S;
      return r(), m(N, {
        modelValue: u.value,
        "onUpdate:modelValue": b[0] || (b[0] = (n) => u.value = n),
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
                  s(o, {
                    label: i(d)("deliveryServiceName")
                  }, {
                    default: a(() => [
                      e("div", H, t(l.value.delivery_service_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("goodsInfo")
                  }, {
                    default: a(() => [
                      e("div", J, t(l.value.body), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryNo")
                  }, {
                    default: a(() => [
                      e("div", K, t(l.value.delivery_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("tradeNo")
                  }, {
                    default: a(() => [
                      e("div", {
                        class: "input-width text-primary cursor-pointer",
                        onClick: E
                      }, t(l.value.trade_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryStart")
                  }, {
                    default: a(() => [
                      e("div", O, t(l.value.delivery_start), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryEnd")
                  }, {
                    default: a(() => [
                      e("div", P, t(l.value.delivery_end), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryStatus")
                  }, {
                    default: a(() => [
                      e("div", Q, t(l.value.status_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryDistance")
                  }, {
                    default: a(() => [
                      e("div", W, t(i(q)(l.value.delivery_distance)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("deliveryMoney")
                  }, {
                    default: a(() => [
                      e("div", X, "￥" + t(l.value.delivery_money), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l.value.cancel_time ? (r(), m(o, {
                    key: 0,
                    label: i(d)("cancelTime")
                  }, {
                    default: a(() => [
                      e("div", Y, t(l.value.cancel_time), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  l.value.rider_name ? (r(), m(o, {
                    key: 1,
                    label: i(d)("riderName")
                  }, {
                    default: a(() => [
                      e("div", Z, t(l.value.rider_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  l.value.rider_mobile ? (r(), m(o, {
                    key: 2,
                    label: i(d)("riderMobile")
                  }, {
                    default: a(() => [
                      e("div", $, t(l.value.rider_mobile), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : c("", !0),
                  s(o, {
                    label: i(d)("outDeliveryNo")
                  }, {
                    default: a(() => [
                      e("div", ee, t(l.value.out_delivery_no), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(o, {
                    label: i(d)("remark")
                  }, {
                    default: a(() => [
                      e("div", le, t(l.value.remark), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])
                ])
              ]),
              _: 1
            }, 8, ["model"]),
            e("div", null, [
              l.value.orderLog.length > 0 ? (r(), _("h3", te, "配送日志")) : c("", !0),
              l.value.orderLog.length > 0 ? (r(), _("div", ae, [
                (r(!0), _(R, null, T(l.value.orderLog, (n, x) => (r(), _("div", {
                  class: "flex",
                  key: x
                }, [
                  e("div", ie, [
                    e("div", oe, t(n.create_time && n.create_time.split(" ")[0]), 1),
                    e("div", de, t(n.create_time && n.create_time.split(" ")[1]), 1)
                  ]),
                  e("div", null, [
                    se,
                    x + 1 != l.value.orderLog.length ? (r(), _("div", re)) : c("", !0)
                  ]),
                  e("div", null, [
                    e("div", ne, t(n.main_type_name) + t(n.main_name), 1),
                    e("div", _e, [
                      e("span", null, t(n.remark), 1)
                    ])
                  ])
                ]))), 128))
              ])) : c("", !0)
            ])
          ])), [
            [V, p.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  be as _
};
