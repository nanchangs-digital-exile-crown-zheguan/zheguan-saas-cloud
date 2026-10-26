import { ElSwitch as g, ElInput as x, ElFormItem as b, ElForm as E } from "element-plus/es";
import { defineComponent as j, ref as d, reactive as O, computed as R, watch as _, openBlock as U, createBlock as B, withCtx as v, createVNode as m, createElementVNode as o, withDirectives as C, vShow as D } from "vue";
import { test as a } from "/admin/assets/shared/core-shared.js";
const F = /* @__PURE__ */ o("span", { class: "el-form-item__label" }, "购买商品", -1), I = { class: "flex mt-[10px]" }, M = /* @__PURE__ */ o("span", { class: "el-form-item__label" }, "每消费", -1), N = { class: "w-[70px]" }, S = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "元，获得", -1), q = { class: "w-[70px]" }, z = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "成长值", -1), K = /* @__PURE__ */ j({
  __name: "growth-rule-buygoods",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(f, { expose: p, emit: c }) {
    const y = f, e = d({
      is_use: 0,
      money: "",
      growth: ""
    }), n = d(null), h = O({
      money: [
        {
          validator: (u, t, l) => {
            e.value.is_use && (a.empty(e.value.money) && l("请输入消费金额"), a.amount(e.value.money) || l("消费金额格式错误"), e.value.money <= 0 && l("消费金额不能小于等于0"), a.empty(e.value.growth) && l("请输入发放成长值数量"), a.digits(e.value.growth) || l("成长值数量格式错误"), e.value.growth <= 0 && l("成长值数量不能小于等于0")), l();
          }
        }
      ]
    }), r = R({
      get() {
        return y.modelValue;
      },
      set(u) {
        c("update:modelValue", u);
      }
    });
    return _(() => r.value, (u, t) => {
      (!t || !Object.keys(t).length) && Object.keys(u).length && (e.value = r.value);
    }, { immediate: !0 }), _(() => e.value, () => {
      r.value = e.value;
    }, { deep: !0 }), p({
      verify: async () => {
        var t;
        let u = !0;
        return await ((t = n.value) == null ? void 0 : t.validate((l) => {
          u = l;
        })), u;
      }
    }), (u, t) => {
      const l = g, i = x, w = b, V = E;
      return U(), B(V, {
        ref_key: "formRef",
        ref: n,
        model: e.value,
        rules: h
      }, {
        default: v(() => [
          m(w, {
            label: "",
            prop: "money"
          }, {
            default: v(() => [
              o("div", null, [
                o("div", null, [
                  F,
                  m(l, {
                    modelValue: e.value.is_use,
                    "onUpdate:modelValue": t[0] || (t[0] = (s) => e.value.is_use = s),
                    "active-value": 1,
                    "inactive-value": 0
                  }, null, 8, ["modelValue"])
                ]),
                C(o("div", I, [
                  M,
                  o("div", N, [
                    m(i, {
                      modelValue: e.value.money,
                      "onUpdate:modelValue": t[1] || (t[1] = (s) => e.value.money = s),
                      modelModifiers: { trim: !0 },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  S,
                  o("div", q, [
                    m(i, {
                      modelValue: e.value.growth,
                      "onUpdate:modelValue": t[2] || (t[2] = (s) => e.value.growth = s),
                      modelModifiers: { number: !0, trim: !0 },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  z
                ], 512), [
                  [D, e.value.is_use]
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
});
export {
  K as default
};
