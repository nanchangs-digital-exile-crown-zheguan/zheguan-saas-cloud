import { ElCheckbox as D, ElFormItem as L, ElButton as z, ElTableColumn as F, ElInputNumber as I, ElTable as P, ElForm as $ } from "element-plus/es";
import { defineComponent as q, ref as f, reactive as A, computed as G, watch as h, openBlock as u, createBlock as b, withCtx as n, createVNode as t, createElementVNode as m, withDirectives as H, createTextVNode as g, createElementBlock as s, toDisplayString as p, unref as k, createCommentVNode as J, vShow as K } from "vue";
import M from "./coupon-select-popup-e7e055dd.js";
import { ae as Q } from "./marketing-f8ec8b08.js";
import { t as C } from "/admin/assets/shared/admin-lang.js";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const W = { class: "flex items-center" }, X = /* @__PURE__ */ m("span", { class: "ml-[10px] el-form-item__label" }, "送优惠券", -1), Y = { class: "flex-1 max-w-[1000px]" }, Z = {
  key: 0,
  class: "mt-[10px] w-[100%]"
}, ee = { key: 0 }, le = { key: 1 }, te = { key: 0 }, oe = { key: 1 }, re = /* @__PURE__ */ q({
  __name: "gift-coupon",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(E, { expose: w, emit: R }) {
    const U = E, N = f(null), e = f({
      is_use: 0,
      coupon_id: [],
      coupon_list: {}
    }), y = f(null), S = A({
      coupon_id: [
        {
          validator: (o, i, a) => {
            e.value.is_use && (e.value.coupon_id.length || a("请选择优惠券"), e.value.coupon_id.forEach((c) => {
              e.value.coupon_list["id_" + c] || a("请输入赠券数量");
            })), a();
          }
        }
      ]
    }), v = G({
      get() {
        return U.modelValue;
      },
      set(o) {
        R("update:modelValue", o);
      }
    }), _ = f([]);
    h(() => v.value, (o, i) => {
      (!i || !Object.keys(i).length) && Object.keys(o).length && (e.value = v.value);
    }, { immediate: !0 }), h(() => e.value, () => {
      v.value = e.value;
    }, { deep: !0 }), h(() => e.value.coupon_id, () => {
      e.value.coupon_id.length ? Q({ coupon_id: e.value.coupon_id.toString() }).then(({ data: o }) => {
        _.value = o;
      }) : (e.value.coupon_list = {}, _.value = []);
    }, { deep: !0, immediate: !0 });
    const B = async () => {
      var i;
      let o = !0;
      return await ((i = y.value) == null ? void 0 : i.validate((a) => {
        o = a;
      })), o;
    }, O = (o) => {
      delete e.value.coupon_list["id_" + o.id], e.value.coupon_id.splice(e.value.coupon_id.indexOf(o.id), 1);
    };
    return w({
      verify: B
    }), (o, i) => {
      const a = D, c = L, V = z, d = F, x = I, T = P, j = $;
      return u(), b(j, {
        ref_key: "formRef",
        ref: y,
        model: e.value,
        rules: S
      }, {
        default: n(() => [
          t(c, {
            label: "",
            class: "!mb-0"
          }, {
            default: n(() => [
              m("div", W, [
                t(a, {
                  modelValue: e.value.is_use,
                  "onUpdate:modelValue": i[0] || (i[0] = (l) => e.value.is_use = l),
                  label: "",
                  "true-label": 1,
                  "false-label": 0,
                  size: "large",
                  class: "!mr-0"
                }, null, 8, ["modelValue"]),
                X
              ])
            ]),
            _: 1
          }),
          H(t(c, {
            label: "",
            prop: "coupon_id"
          }, {
            default: n(() => [
              m("div", Y, [
                m("div", null, [
                  t(M, {
                    modelValue: e.value.coupon_id,
                    "onUpdate:modelValue": i[1] || (i[1] = (l) => e.value.coupon_id = l),
                    ref_key: "selectCouponRef",
                    ref: N
                  }, {
                    default: n(() => [
                      t(V, {
                        type: "primary",
                        link: ""
                      }, {
                        default: n(() => [
                          g("选择优惠券")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _.value.length ? (u(), s("div", Z, [
                  t(T, {
                    data: _.value,
                    size: "default",
                    ref: "couponListTableRef",
                    "max-height": "400"
                  }, {
                    default: n(() => [
                      t(d, {
                        prop: "title",
                        label: "名称",
                        "min-width": "130"
                      }),
                      t(d, {
                        prop: "type_name",
                        label: "类型",
                        "min-width": "130"
                      }),
                      t(d, {
                        prop: "price",
                        label: "面值",
                        "min-width": "130"
                      }, {
                        default: n(({ row: l }) => [
                          m("span", null, "¥" + p(l.price), 1)
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "使用门槛",
                        "min-width": "130"
                      }, {
                        default: n(({ row: l }) => [
                          l.min_condition_money == "0.00" ? (u(), s("span", ee, "无门槛")) : (u(), s("span", le, "满" + p(l.min_condition_money) + "元可用", 1))
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "有效期",
                        "min-width": "210"
                      }, {
                        default: n(({ row: l }) => [
                          l.valid_type == 1 ? (u(), s("span", te, " 领取之日起" + p(l.length || "") + " 天内有效", 1)) : (u(), s("span", oe, " 使用截止时间至" + p(l.valid_end_time || ""), 1))
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "赠券数",
                        "min-width": "130"
                      }, {
                        default: n(({ row: l }) => [
                          l.limit_count ? (u(), b(x, {
                            key: 0,
                            modelValue: e.value.coupon_list["id_" + l.id],
                            "onUpdate:modelValue": (r) => e.value.coupon_list["id_" + l.id] = r,
                            min: 1,
                            precision: 0,
                            max: l.limit_count,
                            "controls-position": "right",
                            class: "!w-[100px]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])) : (u(), b(x, {
                            key: 1,
                            modelValue: e.value.coupon_list["id_" + l.id],
                            "onUpdate:modelValue": (r) => e.value.coupon_list["id_" + l.id] = r,
                            min: 1,
                            max: 999999,
                            precision: 0,
                            "controls-position": "right",
                            class: "!w-[100px]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: k(C)("operation"),
                        align: "right",
                        fixed: "right"
                      }, {
                        default: n(({ row: l }) => [
                          t(V, {
                            type: "primary",
                            link: "",
                            onClick: (r) => O(l)
                          }, {
                            default: n(() => [
                              g(p(k(C)("delete")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ])) : J("", !0)
              ])
            ]),
            _: 1
          }, 512), [
            [K, e.value.is_use]
          ])
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
});
export {
  re as default
};
