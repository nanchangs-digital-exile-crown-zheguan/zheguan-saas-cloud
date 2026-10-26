import { ElInput as q, ElFormItem as A, ElOption as $, ElSelect as G, ElRadio as K, ElRadioGroup as z, ElColorPicker as H, ElSwitch as J, ElForm as Q, ElButton as W, ElDialog as X, ElLoadingDirective as Y } from "element-plus/es";
import { _ as Z } from "./index-36e25503.js";
import { defineComponent as ee, ref as _, reactive as le, computed as oe, openBlock as b, createBlock as E, withCtx as d, createElementVNode as c, createVNode as a, createTextVNode as g, toDisplayString as u, unref as r, withDirectives as f, createElementBlock as te, Fragment as ae, renderList as re, vShow as v } from "vue";
import { t } from "/admin/assets/shared/admin-lang.js";
import { filterNumber as de } from "/admin/assets/shared/core-shared.js";
import { M as ne, N as se, O as ie } from "./goods-d2a56d58.js";
const ue = { class: "form-tip" }, me = { class: "form-tip" }, pe = { class: "form-tip" }, _e = { class: "form-tip" }, ce = { class: "dialog-footer" }, he = /* @__PURE__ */ ee({
  __name: "label-edit",
  props: {
    groupList: {
      type: Object,
      default: []
    }
  },
  emits: ["complete"],
  setup(N, { expose: U, emit: j }) {
    const L = N, p = _(!1), i = _(!1), y = _(""), x = {
      label_id: "",
      label_name: "",
      group_id: "",
      style_type: "diy",
      color_json: {
        text_color: "rgba(255, 255, 255, 1)",
        bg_color: "rgba(255, 65, 66, 1)",
        border_color: ""
      },
      icon: "",
      memo: "",
      sort: "",
      status: 1
    }, V = _([
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
    ]), l = le({ ...x }), F = _(), k = oe(() => ({
      label_name: [
        { required: !0, message: t("labelNamePlaceholder"), trigger: "blur" }
      ],
      group_id: [
        { required: !0, message: t("groupNamePlaceholder"), trigger: "blur" }
      ]
    })), B = async (m) => {
      if (i.value || !m)
        return;
      const e = l.label_id ? ne : se;
      await m.validate(async (s) => {
        s && (i.value = !0, e(l).then((w) => {
          i.value = !1, p.value = !1, j("complete");
        }).catch((w) => {
          i.value = !1;
        }));
      });
    };
    return U({
      showDialog: p,
      setFormData: async (m = null) => {
        if (Object.assign(l, x), i.value = !0, m) {
          const e = await (await ie(m.label_id)).data;
          y.value = t("updateLabel"), e && Object.keys(l).forEach((s) => {
            e[s] != null && (l[s] = e[s]);
          });
        } else
          y.value = t("addLabel");
        i.value = !1;
      }
    }), (m, e) => {
      const s = q, n = A, w = $, P = G, C = K, T = z, h = H, O = Z, R = J, I = Q, D = W, M = X, S = Y;
      return b(), E(M, {
        modelValue: p.value,
        "onUpdate:modelValue": e[14] || (e[14] = (o) => p.value = o),
        title: y.value,
        width: "500px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: d(() => [
          c("span", ce, [
            a(D, {
              onClick: e[12] || (e[12] = (o) => p.value = !1)
            }, {
              default: d(() => [
                g(u(r(t)("cancel")), 1)
              ]),
              _: 1
            }),
            a(D, {
              type: "primary",
              loading: i.value,
              onClick: e[13] || (e[13] = (o) => B(F.value))
            }, {
              default: d(() => [
                g(u(r(t)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: d(() => [
          f((b(), E(I, {
            model: l,
            "label-width": "120px",
            ref_key: "formRef",
            ref: F,
            rules: r(k),
            class: "page-form"
          }, {
            default: d(() => [
              a(n, {
                label: r(t)("labelName"),
                prop: "label_name"
              }, {
                default: d(() => [
                  a(s, {
                    modelValue: l.label_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (o) => l.label_name = o),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: r(t)("labelNamePlaceholder"),
                    class: "input-width",
                    maxlength: "10"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(n, {
                label: r(t)("groupName"),
                prop: "group_id"
              }, {
                default: d(() => [
                  a(P, {
                    modelValue: l.group_id,
                    "onUpdate:modelValue": e[1] || (e[1] = (o) => l.group_id = o),
                    placeholder: r(t)("groupNamePlaceholder"),
                    clearable: "",
                    class: "input-width"
                  }, {
                    default: d(() => [
                      (b(!0), te(ae, null, re(L.groupList, (o) => (b(), E(w, {
                        key: o.group_id,
                        label: o.group_name,
                        value: o.group_id
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(n, {
                label: r(t)("styleType")
              }, {
                default: d(() => [
                  a(T, {
                    modelValue: l.style_type,
                    "onUpdate:modelValue": e[2] || (e[2] = (o) => l.style_type = o)
                  }, {
                    default: d(() => [
                      a(C, { label: "diy" }, {
                        default: d(() => [
                          g(u(r(t)("styleByDiy")), 1)
                        ]),
                        _: 1
                      }),
                      a(C, { label: "icon" }, {
                        default: d(() => [
                          g(u(r(t)("styleByIcon")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(a(n, {
                label: r(t)("textColor")
              }, {
                default: d(() => [
                  a(h, {
                    modelValue: l.color_json.text_color,
                    "onUpdate:modelValue": e[3] || (e[3] = (o) => l.color_json.text_color = o),
                    "show-alpha": "",
                    predefine: V.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", ue, u(r(t)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]), [
                [v, l.style_type == "diy"]
              ]),
              f(a(n, {
                label: r(t)("bgColor")
              }, {
                default: d(() => [
                  a(h, {
                    modelValue: l.color_json.bg_color,
                    "onUpdate:modelValue": e[4] || (e[4] = (o) => l.color_json.bg_color = o),
                    "show-alpha": "",
                    predefine: V.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", me, u(r(t)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]), [
                [v, l.style_type == "diy"]
              ]),
              f(a(n, {
                label: r(t)("borderColor")
              }, {
                default: d(() => [
                  a(h, {
                    modelValue: l.color_json.border_color,
                    "onUpdate:modelValue": e[5] || (e[5] = (o) => l.color_json.border_color = o),
                    "show-alpha": "",
                    predefine: V.value
                  }, null, 8, ["modelValue", "predefine"]),
                  c("div", pe, u(r(t)("colorTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]), [
                [v, l.style_type == "diy"]
              ]),
              f(a(n, {
                label: r(t)("icon")
              }, {
                default: d(() => [
                  a(O, {
                    modelValue: l.icon,
                    "onUpdate:modelValue": e[6] || (e[6] = (o) => l.icon = o)
                  }, null, 8, ["modelValue"]),
                  c("div", _e, u(r(t)("iconTips")), 1)
                ]),
                _: 1
              }, 8, ["label"]), [
                [v, l.style_type == "icon"]
              ]),
              a(n, {
                label: r(t)("status")
              }, {
                default: d(() => [
                  a(R, {
                    modelValue: l.status,
                    "onUpdate:modelValue": e[7] || (e[7] = (o) => l.status = o),
                    "active-value": 1,
                    "inactive-value": 0
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(n, {
                label: r(t)("memo")
              }, {
                default: d(() => [
                  a(s, {
                    modelValue: l.memo,
                    "onUpdate:modelValue": e[8] || (e[8] = (o) => l.memo = o),
                    modelModifiers: { trim: !0 },
                    type: "textarea",
                    clearable: "",
                    placeholder: r(t)("memoPlaceholder"),
                    class: "input-width",
                    maxlength: "50"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              a(n, {
                label: r(t)("sort")
              }, {
                default: d(() => [
                  a(s, {
                    modelValue: l.sort,
                    "onUpdate:modelValue": e[9] || (e[9] = (o) => l.sort = o),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: r(t)("sortPlaceholder"),
                    class: "input-width",
                    onKeyup: e[10] || (e[10] = (o) => r(de)(o)),
                    maxlength: "8",
                    "show-word-limit": "",
                    onBlur: e[11] || (e[11] = (o) => l.sort = o.target.value)
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [S, i.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  he as _
};
