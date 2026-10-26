import { ElCheckbox as g, ElCheckboxGroup as b, ElFormItem as h, ElForm as x } from "element-plus/es";
import { defineComponent as y, ref as w, openBlock as k, createElementBlock as E, Fragment as S, withDirectives as a, createElementVNode as i, createVNode as o, withCtx as c, unref as l, toDisplayString as V, vShow as m, renderSlot as D } from "vue";
import { t as p } from "/admin/assets/shared/admin-lang.js";
import { u as F } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const B = { class: "content-wrap" }, N = { class: "edit-attr-item-wrap" }, T = { class: "text-sm text-gray-400" }, j = { class: "style-wrap" }, K = /* @__PURE__ */ y({
  __name: "edit-shop-goods-detail-purchase-service",
  setup(G, { expose: d }) {
    const e = F();
    e.editComponent.ignore = [];
    const s = w([]);
    e.editComponent.serviceConfig && (s.value = typeof e.editComponent.serviceConfig == "object" ? e.editComponent.serviceConfig : e.editComponent.serviceConfig.split(","));
    const _ = (n) => {
      e.editComponent.serviceConfig = n;
    };
    return e.editComponent.verify = (n) => ({ code: !0, message: "" }), d({}), (n, r) => {
      const t = g, u = b, v = h, f = x;
      return k(), E(S, null, [
        a(i("div", B, [
          i("div", N, [
            o(f, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: c(() => [
                o(v, {
                  label: l(p)("是否显示")
                }, {
                  default: c(() => [
                    o(u, {
                      modelValue: s.value,
                      "onUpdate:modelValue": r[0] || (r[0] = (C) => s.value = C),
                      onChange: _,
                      min: 2
                    }, {
                      default: c(() => [
                        o(t, {
                          label: "商品服务",
                          value: "goods_service"
                        }),
                        o(t, {
                          label: "规格选择",
                          value: "spec_select"
                        }),
                        o(t, {
                          label: "配送信息",
                          value: "delivery_info"
                        }),
                        o(t, {
                          label: "领券（领取优惠券）",
                          value: "coupons"
                        }),
                        o(t, {
                          label: "优惠活动展示",
                          value: "activity"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    i("div", T, V(l(p)("商品服务最少选择2个")), 1)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [m, l(e).editTab == "content"]
        ]),
        a(i("div", j, [
          D(n.$slots, "style")
        ], 512), [
          [m, l(e).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  K as default
};
