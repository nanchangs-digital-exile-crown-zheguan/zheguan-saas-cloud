import { ElFormItem as R, ElTableColumn as G, ElInput as U, ElButton as q, ElTable as D, ElForm as F } from "element-plus/es";
import { defineComponent as M, ref as k, reactive as z, computed as Z, watch as C, openBlock as _, createBlock as E, withCtx as o, createVNode as n, unref as i, createElementVNode as f, toDisplayString as m, createElementBlock as b, createTextVNode as I, createCommentVNode as A } from "vue";
import H from "./coupon-select-popup-e7e055dd.js";
import { deepClone as J } from "/admin/assets/shared/core-shared.js";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.js";

import "./marketing-f8ec8b08.js";
import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const L = { class: "mt-[-10px] mb-[10px] text-[#999] ml-[120px] text-[12px]" }, Q = { class: "coupon_list" }, W = { key: 0 }, X = { key: 1 }, Y = { key: 0 }, ee = { key: 1 }, te = /* @__PURE__ */ M({
  __name: "recharge-gift-coupon",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(N, { expose: w, emit: T }) {
    const O = N, t = k({
      coupon_id: [],
      value: []
    }), x = k(null), S = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, $ = z({}), B = (l, u) => {
      const p = [];
      for (const r in l) {
        const d = l[r];
        let c = {
          price: d.price,
          title: d.title,
          type_name: d.type_name,
          coupon_id: d.id,
          min_condition_money: d.min_condition_money,
          valid_type: d.valid_type,
          valid_end_time: d.valid_end_time,
          length: d.length,
          num: 1
        };
        t.value.value.length && t.value.value.forEach((v) => {
          v.coupon_id == c.coupon_id && (c = Object.assign(c, v));
        }), p.push(J(c));
      }
      t.value.value = p;
    }, j = (l, u) => {
      const p = t.value.value.findIndex((d) => d.coupon_id === l.coupon_id);
      p !== -1 && t.value.value.splice(p, 1);
      const r = t.value.coupon_id.indexOf(l.coupon_id);
      p !== -1 && t.value.coupon_id.splice(r, 1);
    }, y = Z({
      get() {
        return O.modelValue;
      },
      set(l) {
        T("update:modelValue", l);
      }
    });
    return C(() => y.value, (l, u) => {
      (!u || !Object.keys(u).length) && Object.keys(l).length && (t.value = y.value);
    }, { immediate: !0 }), C(() => t.value, () => {
      y.value = t.value;
    }, { deep: !0 }), w({
      verify: async () => {
        var u;
        let l = !0;
        return await ((u = x.value) == null ? void 0 : u.validate((p) => {
          l = p;
        })), l;
      }
    }), (l, u) => {
      const p = R, r = G, d = U, c = q, v = D, P = F;
      return _(), E(P, {
        ref_key: "formRef",
        ref: x,
        "label-width": "120px",
        model: t.value,
        rules: $
      }, {
        default: o(() => [
          n(p, {
            label: i(a)("coupon"),
            prop: "coupon"
          }, {
            default: o(() => [
              n(H, {
                ref: "couponSelectPopupRef",
                onCouponSelect: u[0] || (u[0] = (e) => B(e, l.index)),
                modelValue: t.value.coupon_id,
                "onUpdate:modelValue": u[1] || (u[1] = (e) => t.value.coupon_id = e),
                min: 1,
                max: 99
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["label"]),
          f("div", L, m(i(a)("giveCouponTips")), 1),
          t.value.value && t.value.value.length ? (_(), E(p, {
            key: 0,
            class: "mt-[15px]"
          }, {
            default: o(() => [
              f("div", Q, [
                n(v, {
                  data: t.value.value,
                  size: "large",
                  "max-height": "400",
                  "row-style": { height: "80px" }
                }, {
                  default: o(() => [
                    n(r, {
                      prop: "title",
                      label: i(a)("name"),
                      "min-width": "120"
                    }, {
                      default: o(({ row: e }) => [
                        f("div", null, m(e.title), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      prop: "type_name",
                      label: i(a)("type"),
                      "min-width": "120"
                    }, {
                      default: o(({ row: e }) => [
                        f("div", null, m(e.type_name), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      prop: "price",
                      label: i(a)("couponPrice"),
                      "min-width": "120"
                    }, {
                      default: o(({ row: e }) => [
                        f("div", null, "￥" + m(e.price), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      label: i(a)("useThreshold"),
                      "min-width": "130"
                    }, {
                      default: o(({ row: e }) => [
                        e.min_condition_money == "0.00" ? (_(), b("span", W, "无门槛")) : (_(), b("span", X, "满" + m(e.min_condition_money) + "元可用", 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      label: i(a)("termOfValidity"),
                      "min-width": "210"
                    }, {
                      default: o(({ row: e }) => [
                        e.valid_type == 1 ? (_(), b("span", Y, " 领取之日起" + m(e.length || "") + " 天内有效", 1)) : (_(), b("span", ee, " 使用截止时间至" + m(e.valid_end_time || ""), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      prop: "num",
                      label: i(a)("giveNum"),
                      "min-width": "180"
                    }, {
                      default: o(({ row: e, $index: V }) => [
                        n(p, {
                          prop: `value.${V}.num`,
                          rules: [{ required: !0, trigger: "blur", validator: (g, s, h) => {
                            s === null || s === "" ? h(i(a)("giveNumPlaceholder")) : isNaN(s) || !S.number.test(s) ? h(i(a)("limitTips")) : s <= 0 ? h(i(a)("giveNumMustBeGreaterThanZero")) : h();
                          } }]
                        }, {
                          default: o(() => [
                            n(d, {
                              modelValue: e.num,
                              "onUpdate:modelValue": (g) => e.num = g,
                              modelModifiers: { number: !0 },
                              class: "w-[70px]",
                              maxlength: "6",
                              clearable: ""
                            }, {
                              append: o(() => [
                                I("张")
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["prop", "rules"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(r, {
                      label: i(a)("operation"),
                      align: "right",
                      "min-width": "160"
                    }, {
                      default: o(({ row: e, $index: V }) => [
                        n(c, {
                          type: "primary",
                          link: "",
                          onClick: (g) => j(e, l.index)
                        }, {
                          default: o(() => [
                            I(m(i(a)("delete")), 1)
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
const se = /* @__PURE__ */ K(te, [["__scopeId", "data-v-3ccbeab3"]]);
export {
  se as default
};
