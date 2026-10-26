import { ElInput as L, ElFormItem as S, ElOption as q, ElSelect as O, ElSwitch as R, ElForm as j, ElButton as $, ElDialog as A, ElLoadingDirective as M } from "element-plus/es";
import { _ as T } from "./index-36e25503.js";
import { defineComponent as z, ref as m, reactive as G, computed as H, openBlock as p, createBlock as f, withCtx as r, createElementVNode as J, createVNode as o, createTextVNode as w, toDisplayString as V, unref as n, withDirectives as K, createElementBlock as Q, Fragment as W, renderList as X } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { t as Y, w as Z, x as ee, b as le } from "./goods-d2a56d58.js";
const te = { class: "dialog-footer" }, ue = /* @__PURE__ */ z({
  __name: "category-edit",
  emits: ["complete"],
  setup(ae, { expose: E, emit: C }) {
    const u = m(!1), i = m(!1), g = m(""), v = {
      category_id: "",
      category_name: "",
      image: "",
      pid: 0,
      is_show: 1,
      child_count: 0,
      // sort: 9999,
      level: 1
    }, l = G({ ...v }), y = m(), D = H(() => ({
      category_id: [
        { required: !0, message: a("categoryIdPlaceholder"), trigger: "blur" }
      ],
      category_name: [
        { required: !0, message: a("categoryNamePlaceholder"), trigger: "blur" }
      ],
      pid: [
        { required: !0, message: a("pidPlaceholder"), trigger: "change" }
      ]
    })), b = m([]), x = async (d) => {
      if (i.value || !d)
        return;
      const e = l.category_id ? Y : Z;
      await d.validate(async (s) => {
        s && (i.value = !0, e(l).then((_) => {
          i.value = !1, u.value = !1, C("complete");
        }).catch((_) => {
          i.value = !1;
        }));
      });
    }, F = () => {
      le({
        level: 1
      }).then((d) => {
        b.value = d.data.filter((e) => e.category_id != l.category_id);
      });
    };
    return E({
      showDialog: u,
      setFormData: async (d = null) => {
        if (Object.assign(l, v), i.value = !0, d) {
          g.value = a("updateCategory");
          const e = await (await ee(d.category_id)).data;
          e && Object.keys(l).forEach((s) => {
            e[s] != null && (l[s] = e[s]);
          });
        } else
          g.value = a("addCategory");
        F(), i.value = !1;
      }
    }), (d, e) => {
      const s = L, c = S, _ = q, k = O, N = T, P = R, U = j, h = $, B = A, I = M;
      return p(), f(B, {
        modelValue: u.value,
        "onUpdate:modelValue": e[6] || (e[6] = (t) => u.value = t),
        title: g.value,
        width: "480",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0
      }, {
        footer: r(() => [
          J("span", te, [
            o(h, {
              onClick: e[4] || (e[4] = (t) => u.value = !1)
            }, {
              default: r(() => [
                w(V(n(a)("cancel")), 1)
              ]),
              _: 1
            }),
            o(h, {
              type: "primary",
              loading: i.value,
              onClick: e[5] || (e[5] = (t) => x(y.value))
            }, {
              default: r(() => [
                w(V(n(a)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: r(() => [
          K((p(), f(U, {
            model: l,
            "label-width": "120px",
            ref_key: "formRef",
            ref: y,
            rules: n(D),
            class: "page-form"
          }, {
            default: r(() => [
              o(c, {
                label: n(a)("categoryName"),
                prop: "category_name"
              }, {
                default: r(() => [
                  o(s, {
                    modelValue: l.category_name,
                    "onUpdate:modelValue": e[0] || (e[0] = (t) => l.category_name = t),
                    modelModifiers: { trim: !0 },
                    clearable: "",
                    placeholder: n(a)("categoryNamePlaceholder"),
                    class: "input-width",
                    maxlength: "10",
                    "show-word-limit": ""
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              o(c, {
                label: n(a)("pid"),
                prop: "pid"
              }, {
                default: r(() => [
                  o(k, {
                    modelValue: l.pid,
                    "onUpdate:modelValue": e[1] || (e[1] = (t) => l.pid = t),
                    clearable: "",
                    disabled: l.child_count,
                    placeholder: n(a)("pidPlaceholder"),
                    class: "input-width"
                  }, {
                    default: r(() => [
                      o(_, {
                        label: "顶级分类",
                        value: 0
                      }),
                      (p(!0), Q(W, null, X(b.value, (t) => (p(), f(_, {
                        key: t.category_id,
                        label: t.category_name,
                        value: t.category_id
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              o(c, {
                label: n(a)("image")
              }, {
                default: r(() => [
                  o(N, {
                    modelValue: l.image,
                    "onUpdate:modelValue": e[2] || (e[2] = (t) => l.image = t)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              o(c, {
                label: n(a)("isShow"),
                prop: "is_show"
              }, {
                default: r(() => [
                  o(P, {
                    modelValue: l.is_show,
                    "onUpdate:modelValue": e[3] || (e[3] = (t) => l.is_show = t),
                    class: "input-width",
                    "active-value": 1,
                    "inactive-value": 2
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [I, i.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  ue as _
};
