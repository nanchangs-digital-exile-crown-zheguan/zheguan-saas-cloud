import { ElTableColumn as V, ElTable as w, ElFormItem as E, ElForm as C } from "element-plus/es";
import { defineComponent as D, ref as s, computed as O, watch as f, openBlock as c, createBlock as j, withCtx as t, createVNode as l, unref as o, createElementVNode as m, toDisplayString as a, createElementBlock as u } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { _ as B } from "./_plugin-vue_export-helper-dad06003.js";
const T = { class: "coupon_list" }, F = { key: 0 }, I = { key: 1 }, N = { key: 0 }, R = { key: 1 }, z = /* @__PURE__ */ D({
  __name: "recharge-detail-coupon",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(h, { emit: b }) {
    const v = h, i = s({
      coupon_id: [],
      value: []
    }), y = s(null), p = O({
      get() {
        return v.modelValue;
      },
      set(d) {
        b("update:modelValue", d);
      }
    });
    return f(() => p.value, (d, r) => {
      (!r || !Object.keys(r).length) && Object.keys(d).length && (i.value = p.value);
    }, { immediate: !0 }), f(() => i.value, () => {
      p.value = i.value;
    }, { deep: !0 }), (d, r) => {
      const _ = V, g = w, k = E, x = C;
      return c(), j(x, {
        ref_key: "formRef",
        ref: y,
        "label-width": "120px",
        model: i.value,
        "label-position": "left"
      }, {
        default: t(() => [
          l(k, {
            class: "mt-[15px]",
            label: o(n)("coupon")
          }, {
            default: t(() => [
              m("div", T, [
                l(g, {
                  data: i.value.value,
                  size: "large",
                  "max-height": "600"
                }, {
                  default: t(() => [
                    l(_, {
                      prop: "title",
                      label: o(n)("name"),
                      "min-width": "120"
                    }, {
                      default: t(({ row: e }) => [
                        m("div", null, a(e.title), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(_, {
                      prop: "type_name",
                      label: o(n)("type"),
                      "min-width": "120"
                    }, {
                      default: t(({ row: e }) => [
                        m("div", null, a(e.type_name), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(_, {
                      prop: "price",
                      label: o(n)("couponPrice"),
                      "min-width": "120"
                    }, {
                      default: t(({ row: e }) => [
                        m("div", null, "￥" + a(e.price), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(_, {
                      label: o(n)("useThreshold"),
                      "min-width": "130"
                    }, {
                      default: t(({ row: e }) => [
                        e.min_condition_money == "0.00" ? (c(), u("span", F, "无门槛")) : (c(), u("span", I, "满" + a(e.min_condition_money) + "元可用", 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(_, {
                      label: o(n)("termOfValidity"),
                      "min-width": "210"
                    }, {
                      default: t(({ row: e }) => [
                        e.valid_type == 1 ? (c(), u("span", N, " 领取之日起" + a(e.length || "") + " 天内有效", 1)) : (c(), u("span", R, " 使用截止时间至" + a(e.valid_end_time || ""), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(_, {
                      prop: "num",
                      label: o(n)("num"),
                      "min-width": "120"
                    }, {
                      default: t(({ row: e }) => [
                        m("div", null, a(e.num), 1)
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])
              ])
            ]),
            _: 1
          }, 8, ["label"])
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
});
const G = /* @__PURE__ */ B(z, [["__scopeId", "data-v-956366cc"]]);
export {
  G as default
};
