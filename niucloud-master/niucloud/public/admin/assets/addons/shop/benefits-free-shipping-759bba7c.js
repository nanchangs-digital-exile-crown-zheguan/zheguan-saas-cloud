import { ElCheckbox as h, ElFormItem as y, ElForm as V } from "element-plus/es";
import { defineComponent as k, ref as a, reactive as g, computed as E, watch as r, openBlock as j, createBlock as C, withCtx as m, createVNode as n, createElementVNode as s } from "vue";
const O = { class: "flex items-center" }, R = /* @__PURE__ */ s("span", { class: "ml-[10px] el-form-item__label" }, "包邮", -1), w = /* @__PURE__ */ s("div", { class: "text-sm text-gray-400 mb-[5px]" }, "该包邮仅针对物流配送", -1), z = /* @__PURE__ */ k({
  __name: "benefits-free-shipping",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(u, { expose: c, emit: i }) {
    const _ = u, e = a({
      is_use: 0
    }), d = a(null), f = g({}), o = E({
      get() {
        return _.modelValue;
      },
      set(l) {
        i("update:modelValue", l);
      }
    });
    return r(() => o.value, (l, t) => {
      (!t || !Object.keys(t).length) && Object.keys(l).length && (e.value = o.value);
    }, { immediate: !0 }), r(() => e.value, () => {
      o.value = e.value;
    }, { deep: !0 }), c({
      verify: async () => !0
    }), (l, t) => {
      const p = h, v = y, b = V;
      return j(), C(b, {
        ref_key: "formRef",
        ref: d,
        model: e.value,
        rules: f
      }, {
        default: m(() => [
          n(v, {
            label: "",
            prop: "money",
            class: "!mb-0"
          }, {
            default: m(() => [
              s("div", O, [
                n(p, {
                  modelValue: e.value.is_use,
                  "onUpdate:modelValue": t[0] || (t[0] = (x) => e.value.is_use = x),
                  "true-label": 1,
                  "false-label": 0,
                  label: "",
                  size: "large",
                  class: "!mr-0"
                }, null, 8, ["modelValue"]),
                R
              ])
            ]),
            _: 1
          }),
          w
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
});
export {
  z as default
};
