import { ElSwitch as w, ElInput as g, ElFormItem as b, ElForm as E } from "element-plus/es";
import { defineComponent as j, ref as d, reactive as O, computed as R, watch as p, openBlock as U, createBlock as B, withCtx as _, createVNode as s, createElementVNode as o, withDirectives as C, vShow as D } from "vue";
import { test as m } from "/admin/assets/shared/core-shared.js";
const F = /* @__PURE__ */ o("span", { class: "el-form-item__label" }, "购买商品", -1), I = { class: "flex mt-[10px]" }, M = /* @__PURE__ */ o("span", { class: "el-form-item__label" }, "每消费", -1), N = { class: "w-[100px]" }, S = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "元，获得", -1), q = { class: "w-[100px]" }, z = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "积分", -1), K = /* @__PURE__ */ j({
  __name: "point-rule-buygoods",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(v, { expose: f, emit: c }) {
    const y = v, e = d({
      is_use: 0,
      money: "",
      point: ""
    }), i = d(null), V = O({
      money: [
        {
          validator: (u, t, l) => {
            e.value.is_use && (m.empty(e.value.money) && l("请输入消费金额"), m.amount(e.value.money) || l("消费金额格式错误"), e.value.money <= 0 && l("消费金额不能小于等于0"), m.empty(e.value.point) && l("请输入发放积分数量"), m.digits(e.value.point) || l("积分数量格式错误"), e.value.point <= 0 && l("积分数量不能小于等于0")), l();
          }
        }
      ]
    }), a = R({
      get() {
        return y.modelValue;
      },
      set(u) {
        c("update:modelValue", u);
      }
    });
    return p(() => a.value, (u, t) => {
      (!t || !Object.keys(t).length) && Object.keys(u).length && (e.value = a.value);
    }, { immediate: !0 }), p(() => e.value, () => {
      a.value = e.value;
    }, { deep: !0 }), f({
      verify: async () => {
        var t;
        let u = !0;
        return await ((t = i.value) == null ? void 0 : t.validate((l) => {
          u = l;
        })), u;
      }
    }), (u, t) => {
      const l = w, r = g, h = b, x = E;
      return U(), B(x, {
        ref_key: "formRef",
        ref: i,
        model: e.value,
        rules: V
      }, {
        default: _(() => [
          s(h, {
            label: "",
            prop: "money"
          }, {
            default: _(() => [
              o("div", null, [
                o("div", null, [
                  F,
                  s(l, {
                    modelValue: e.value.is_use,
                    "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value.is_use = n),
                    "active-value": 1,
                    "inactive-value": 0
                  }, null, 8, ["modelValue"])
                ]),
                C(o("div", I, [
                  M,
                  o("div", N, [
                    s(r, {
                      modelValue: e.value.money,
                      "onUpdate:modelValue": t[1] || (t[1] = (n) => e.value.money = n),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      maxlength: "8"
                    }, null, 8, ["modelValue"])
                  ]),
                  S,
                  o("div", q, [
                    s(r, {
                      modelValue: e.value.point,
                      "onUpdate:modelValue": t[2] || (t[2] = (n) => e.value.point = n),
                      modelModifiers: { number: !0, trim: !0 },
                      clearable: "",
                      maxlength: "8"
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
