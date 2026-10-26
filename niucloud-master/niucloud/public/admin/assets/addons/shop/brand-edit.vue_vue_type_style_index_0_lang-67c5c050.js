import { ElInput as k, ElFormItem as P, ElColorPicker as T, ElForm as I, ElButton as M, ElDialog as R, ElLoadingDirective as q } from "element-plus/es";
import { _ as A } from "./index-36e25503.js";
import { defineComponent as O, ref as p, reactive as $, computed as K, openBlock as F, createBlock as h, withCtx as n, createElementVNode as c, createVNode as r, createTextVNode as y, toDisplayString as f, unref as t, withDirectives as L } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { filterNumber as S } from "/admin/assets/shared/core-shared.js";
import { q as z, r as G, s as H } from "./goods-d2a56d58.js";
const J = { class: "form-tip" }, Q = { class: "form-tip" }, W = { class: "form-tip" }, X = { class: "dialog-footer" }, ne = /* @__PURE__ */ O({
  __name: "brand-edit",
  emits: ["complete"],
  setup(Y, { expose: C, emit: B }) {
    const m = p(!1), s = p(!1), _ = p(""), V = {
      brand_id: "",
      brand_name: "",
      logo: "",
      color_json: {
        text_color: "rgba(255, 255, 255, 1)",
        bg_color: "rgba(255, 65, 66, 1)",
        border_color: ""
      },
      desc: "",
      sort: ""
    }, o = $({ ...V }), b = p([
      "#F4391c",
      "#ff4500",
      "#ff8c00",
      "#FFD009",
      "#ffd700",
      "#19C650",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "#FF407E",
      "#CFAF70",
      "#A253FF",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577"
    ]), w = p(), D = K(() => ({
      brand_name: [
        { required: !0, message: a("brandNamePlaceholder"), trigger: "blur" }
      ]
    })), E = async (u) => {
      if (s.value || !u)
        return;
      const e = o.brand_id ? z : G;
      await u.validate(async (d) => {
        d && (s.value = !0, e(o).then((g) => {
          s.value = !1, m.value = !1, B("complete");
        }).catch((g) => {
          s.value = !1;
        }));
      });
    };
    return C({
      showDialog: m,
      setFormData: async (u = null) => {
        if (Object.assign(o, V), s.value = !0, u) {
          const e = await (await H(u.brand_id)).data;
          _.value = a("updateBrand"), e && Object.keys(o).forEach((d) => {
            e[d] != null && (o[d] = e[d]);
          });
        } else
          _.value = a("addBrand");
        s.value = !1;
      }
    }), (u, e) => {
      const d = k, i = P, g = A, v = T, j = I, x = M, U = R, N = q;
      return F(), h(U, {
        modelValue: m.value,
        "onUpdate:modelValue": e[12] || (e[12] = (l) => m.value = l),
        title: _.value,
        width: "500px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: n(() => [
          c("span", X, [
            r(x, {
              onClick: e[10] || (e[10] = (l) => m.value = !1)
            }, {
              default: n(() => [
                y(f(t(a)("cancel")), 1)
              ]),
              _: 1
            }),
            r(x, {
              type: "primary",
              loading: s.value,
              onClick: e[11] || (e[11] = (l) => E(w.value))
            }, {
              default: n(() => [
                y(f(t(a)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: n(() => [
          L((F(), h(j, {
            model: o,
            "label-width": "120px",
            ref_key: "formRef",
            ref: w,
            rules: t(D),
            class: "page-form"
          }, {
            default: n(() => [
              r(i, {
                label: t(a)("brandName"),
                prop: "brand_name"
              }, {
                default: n(() => [
                  r(d, {
                    modelValue: o.brand_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (l) => o.brand_name = l),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: t(a)("brandNamePlaceholder"),
                    class: "input-width",
                    maxlength: "10",
                    onBlur: e[1] || (e[1] = (l) => o.brand_name = l.target.value)
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("logo")
              }, {
                default: n(() => [
                  r(g, {
                    modelValue: o.logo,
                    "onUpdate:modelValue": e[2] || (e[2] = (l) => o.logo = l)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("textColor")
              }, {
                default: n(() => [
                  r(v, {
                    modelValue: o.color_json.text_color,
                    "onUpdate:modelValue": e[3] || (e[3] = (l) => o.color_json.text_color = l),
                    "show-alpha": "",
                    predefine: b.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", J, f(t(a)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("bgColor")
              }, {
                default: n(() => [
                  r(v, {
                    modelValue: o.color_json.bg_color,
                    "onUpdate:modelValue": e[4] || (e[4] = (l) => o.color_json.bg_color = l),
                    "show-alpha": "",
                    predefine: b.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", Q, f(t(a)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("borderColor")
              }, {
                default: n(() => [
                  r(v, {
                    modelValue: o.color_json.border_color,
                    "onUpdate:modelValue": e[5] || (e[5] = (l) => o.color_json.border_color = l),
                    "show-alpha": "",
                    predefine: b.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", W, f(t(a)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("desc")
              }, {
                default: n(() => [
                  r(d, {
                    modelValue: o.desc,
                    "onUpdate:modelValue": e[6] || (e[6] = (l) => o.desc = l),
                    modelModifiers: { trim: !0 },
                    type: "textarea",
                    clearable: "",
                    placeholder: t(a)("descPlaceholder"),
                    class: "input-width",
                    maxlength: "200"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(i, {
                label: t(a)("sort")
              }, {
                default: n(() => [
                  r(d, {
                    modelValue: o.sort,
                    "onUpdate:modelValue": e[7] || (e[7] = (l) => o.sort = l),
                    modelModifiers: { trim: !0 },
                    maxlength: "8",
                    "show-word-limit": "",
                    clearable: "",
                    placeholder: t(a)("sortPlaceholder"),
                    class: "input-width",
                    onKeyup: e[8] || (e[8] = (l) => t(S)(l)),
                    onBlur: e[9] || (e[9] = (l) => o.sort = l.target.value)
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [N, s.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  ne as _
};
