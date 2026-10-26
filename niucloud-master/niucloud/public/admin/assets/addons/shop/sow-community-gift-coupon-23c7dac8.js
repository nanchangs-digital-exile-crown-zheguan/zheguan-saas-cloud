import { ElFormItem as R, ElTableColumn as G, ElInput as U, ElButton as q, ElTable as D, ElForm as F } from "element-plus/es";
import { defineComponent as M, ref as C, reactive as z, computed as Z, watch as k, openBlock as s, createBlock as w, withCtx as l, createVNode as n, unref as i, createElementVNode as f, toDisplayString as r, createElementBlock as h, createTextVNode as E, createCommentVNode as A } from "vue";
import H from "./coupon-select-popup-e7e055dd.js";
import { deepClone as J } from "/admin/assets/shared/core-shared.js";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.js";

import "./marketing-f8ec8b08.js";
import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const L = { class: "mt-[-10px] mb-[10px] text-[#999] ml-[120px] text-[12px]" }, Q = { class: "coupon_list" }, W = { key: 0 }, X = { key: 1 }, Y = { key: 0 }, ee = { key: 1 }, te = /* @__PURE__ */ M({
  __name: "sow-community-gift-coupon",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(I, { expose: N, emit: T }) {
    const O = I, t = C({
      coupon_id: [],
      value: []
    }), g = C(null), S = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, $ = z({}), B = (o, u) => {
      const d = [];
      for (const m in o) {
        const p = o[m];
        let _ = {
          price: p.price,
          title: p.title,
          type_name: p.type_name,
          coupon_id: p.id,
          min_condition_money: p.min_condition_money,
          valid_type: p.valid_type,
          valid_end_time: p.valid_end_time,
          length: p.length,
          num: 1
        };
        t.value.value.length && t.value.value.forEach((v) => {
          v.coupon_id == _.coupon_id && (_ = Object.assign(_, v));
        }), d.push(J(_));
      }
      t.value.value = d;
    }, j = (o, u) => {
      const d = t.value.value.findIndex((p) => p.coupon_id === o.coupon_id);
      d !== -1 && t.value.value.splice(d, 1);
      const m = t.value.coupon_id.indexOf(o.coupon_id);
      d !== -1 && t.value.coupon_id.splice(m, 1);
    }, b = Z({
      get() {
        return O.modelValue;
      },
      set(o) {
        T("update:modelValue", o);
      }
    });
    return k(() => b.value, (o, u) => {
      (!u || !Object.keys(u).length) && Object.keys(o).length && (t.value = b.value);
    }, { immediate: !0 }), k(() => t.value, () => {
      b.value = t.value;
    }, { deep: !0 }), N({
      verify: async () => {
        var u;
        let o = !0;
        return await ((u = g.value) == null ? void 0 : u.validate((d) => {
          o = d;
        })), o;
      }
    }), (o, u) => {
      const d = R, m = G, p = U, _ = q, v = D, P = F;
      return s(), w(P, {
        ref_key: "formRef",
        ref: g,
        "label-width": "120px",
        model: t.value,
        rules: $
      }, {
        default: l(() => [
          n(d, {
            label: i(a)("赠送优惠券"),
            prop: "coupon"
          }, {
            default: l(() => [
              n(H, {
                ref: "couponSelectPopupRef",
                onCouponSelect: u[0] || (u[0] = (e) => B(e, o.index)),
                modelValue: t.value.coupon_id,
                "onUpdate:modelValue": u[1] || (u[1] = (e) => t.value.coupon_id = e),
                min: 1,
                max: 99
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["label"]),
          f("div", L, r(i(a)("giveCouponTips")), 1),
          t.value.value && t.value.value.length ? (s(), w(d, {
            key: 0,
            class: "mt-[15px]"
          }, {
            default: l(() => [
              f("div", Q, [
                n(v, {
                  data: t.value.value,
                  size: "large",
                  "max-height": "400",
                  "row-style": { height: "80px" }
                }, {
                  default: l(() => [
                    n(m, {
                      prop: "title",
                      label: i(a)("name"),
                      "min-width": "120"
                    }, {
                      default: l(({ row: e }) => [
                        f("div", null, r(e.title), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      prop: "type_name",
                      label: i(a)("type"),
                      "min-width": "120"
                    }, {
                      default: l(({ row: e }) => [
                        f("div", null, r(e.type_name), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      prop: "price",
                      label: i(a)("couponPrice"),
                      "min-width": "120"
                    }, {
                      default: l(({ row: e }) => [
                        f("div", null, "￥" + r(e.price), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      label: i(a)("useThreshold"),
                      "min-width": "130"
                    }, {
                      default: l(({ row: e }) => [
                        e.min_condition_money == "0.00" ? (s(), h("span", W, "无门槛")) : (s(), h("span", X, "满" + r(e.min_condition_money) + "元可用", 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      label: i(a)("termOfValidity"),
                      "min-width": "210"
                    }, {
                      default: l(({ row: e }) => [
                        e.valid_type == 1 ? (s(), h("span", Y, " 领取之日起" + r(e.length || "") + " 天内有效", 1)) : (s(), h("span", ee, " 使用截止时间至" + r(e.valid_end_time || ""), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      prop: "num",
                      label: i(a)("giveNum"),
                      "min-width": "180"
                    }, {
                      default: l(({ row: e, $index: V }) => [
                        n(d, {
                          prop: `value.${V}.num`,
                          rules: [{ required: !0, trigger: "blur", validator: (x, c, y) => {
                            c === null || c === "" ? y(i(a)("giveNumPlaceholder")) : isNaN(c) || !S.number.test(c) ? y(i(a)("limitTips")) : c <= 0 ? y(i(a)("giveNumMustBeGreaterThanZero")) : y();
                          } }]
                        }, {
                          default: l(() => [
                            n(p, {
                              modelValue: e.num,
                              "onUpdate:modelValue": (x) => e.num = x,
                              modelModifiers: { number: !0 },
                              class: "w-[70px]",
                              maxlength: "6",
                              clearable: ""
                            }, {
                              append: l(() => [
                                E("张")
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["prop", "rules"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(m, {
                      label: i(a)("operation"),
                      align: "right",
                      "min-width": "160"
                    }, {
                      default: l(({ row: e, $index: V }) => [
                        n(_, {
                          type: "primary",
                          link: "",
                          onClick: (x) => j(e, o.index)
                        }, {
                          default: l(() => [
                            E(r(i(a)("delete")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])
              ])
            ]),
            _: 1
          })) : A("", !0)
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
});
const ce = /* @__PURE__ */ K(te, [["__scopeId", "data-v-a0d7a57b"]]);
export {
  ce as default
};
