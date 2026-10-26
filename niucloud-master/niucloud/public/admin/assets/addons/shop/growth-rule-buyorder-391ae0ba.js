import { ElSwitch as y, ElInput as x, ElFormItem as b, ElForm as E } from "element-plus/es";
import { defineComponent as j, ref as m, reactive as O, computed as R, watch as n, openBlock as B, createBlock as C, withCtx as d, createVNode as a, createElementVNode as u, withDirectives as D, vShow as F } from "vue";
import { test as _ } from "/admin/assets/shared/core-shared.js";
const I = /* @__PURE__ */ u("span", { class: "el-form-item__label" }, "完成下单", -1), N = { class: "flex mt-[10px]" }, S = /* @__PURE__ */ u("span", { class: "el-form-item__label" }, "每完成一单可获得", -1), U = { class: "w-[70px]" }, k = /* @__PURE__ */ u("span", { class: "ml-[10px] el-form-item__label" }, "成长值", -1), G = /* @__PURE__ */ j({
  __name: "growth-rule-buyorder",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(v, { expose: f, emit: p }) {
    const c = v, e = m({
      is_use: 0,
      growth: ""
    }), i = m(null), h = O({
      growth: [
        {
          validator: (o, t, l) => {
            e.value.is_use && (_.empty(e.value.growth) && l("请输入发放成长值数量"), _.digits(e.value.growth) || l("成长值数量格式错误"), e.value.growth <= 0 && l("成长值数量不能小于等于0")), l();
          }
        }
      ]
    }), r = R({
      get() {
        return c.modelValue;
      },
      set(o) {
        p("update:modelValue", o);
      }
    });
    return n(() => r.value, (o, t) => {
      (!t || !Object.keys(t).length) && Object.keys(o).length && (e.value = r.value);
    }, { immediate: !0 }), n(() => e.value, () => {
      r.value = e.value;
    }, { deep: !0 }), f({
      verify: async () => {
        var t;
        let o = !0;
        return await ((t = i.value) == null ? void 0 : t.validate((l) => {
          o = l;
        })), o;
      }
    }), (o, t) => {
      const l = y, w = x, g = b, V = E;
      return B(), C(V, {
        ref_key: "formRef",
        ref: i,
        model: e.value,
        rules: h
      }, {
        default: d(() => [
          a(g, {
            label: "",
            prop: "growth"
          }, {
            default: d(() => [
              u("div", null, [
                u("div", null, [
                  I,
                  a(l, {
                    modelValue: e.value.is_use,
                    "onUpdate:modelValue": t[0] || (t[0] = (s) => e.value.is_use = s),
                    "active-value": 1,
                    "inactive-value": 0
                  }, null, 8, ["modelValue"])
                ]),
                D(u("div", N, [
                  S,
                  u("div", U, [
                    a(w, {
                      modelValue: e.value.growth,
                      "onUpdate:modelValue": t[1] || (t[1] = (s) => e.value.growth = s),
                      modelModifiers: { number: !0, trim: !0 },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  k
                ], 512), [
                  [F, e.value.is_use]
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
  G as default
};
