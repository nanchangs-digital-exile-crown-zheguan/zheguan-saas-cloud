import { ElCheckbox as b, ElInput as w, ElFormItem as g, ElForm as E } from "element-plus/es";
import { defineComponent as j, ref as d, reactive as C, computed as O, watch as p, openBlock as R, createBlock as U, withCtx as _, createVNode as s, createElementVNode as o, withDirectives as B, vShow as D } from "vue";
import { test as m } from "/admin/assets/shared/core-shared.js";
const F = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "积分抵现", -1), I = { class: "flex" }, M = /* @__PURE__ */ o("span", { class: "el-form-item__label" }, "每", -1), N = { class: "w-[70px]" }, z = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "积分，可抵扣", -1), S = { class: "w-[70px]" }, k = /* @__PURE__ */ o("span", { class: "ml-[10px] el-form-item__label" }, "元", -1), J = /* @__PURE__ */ j({
  __name: "point-rule-orderdeduction",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(f, { expose: v, emit: c }) {
    const y = f, e = d({
      is_use: 0,
      money: "",
      point: ""
    }), i = d(null), V = C({
      money: [
        {
          validator: (u, l, t) => {
            e.value.is_use && (m.empty(e.value.point) && t("请输入积分数量"), m.digits(e.value.point) || t("积分数量格式错误"), e.value.point <= 0 && t("积分数量不能小于等于0"), m.empty(e.value.money) && t("请输入可抵扣金额"), m.amount(e.value.money) || t("抵扣金额格式错误"), e.value.money <= 0 && t("抵扣金额不能小于等于0")), t();
          }
        }
      ]
    }), a = O({
      get() {
        return y.modelValue;
      },
      set(u) {
        c("update:modelValue", u);
      }
    });
    return p(() => a.value, (u, l) => {
      (!l || !Object.keys(l).length) && Object.keys(u).length && (e.value = a.value);
    }, { immediate: !0 }), p(() => e.value, () => {
      a.value = e.value;
    }, { deep: !0 }), v({
      verify: async () => {
        var l;
        let u = !0;
        return await ((l = i.value) == null ? void 0 : l.validate((t) => {
          u = t;
        })), u;
      }
    }), (u, l) => {
      const t = b, r = w, x = g, h = E;
      return R(), U(h, {
        ref_key: "formRef",
        ref: i,
        model: e.value,
        rules: V
      }, {
        default: _(() => [
          s(x, {
            label: "",
            prop: "money"
          }, {
            default: _(() => [
              o("div", null, [
                o("div", null, [
                  s(t, {
                    modelValue: e.value.is_use,
                    "onUpdate:modelValue": l[0] || (l[0] = (n) => e.value.is_use = n),
                    "true-label": 1,
                    "false-label": 0,
                    label: "",
                    size: "large"
                  }, null, 8, ["modelValue"]),
                  F
                ]),
                B(o("div", I, [
                  M,
                  o("div", N, [
                    s(r, {
                      modelValue: e.value.point,
                      "onUpdate:modelValue": l[1] || (l[1] = (n) => e.value.point = n),
                      modelModifiers: { number: !0, trim: !0 },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  z,
                  o("div", S, [
                    s(r, {
                      modelValue: e.value.money,
                      "onUpdate:modelValue": l[2] || (l[2] = (n) => e.value.money = n),
                      modelModifiers: { trim: !0 },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  k
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
  J as default
};
