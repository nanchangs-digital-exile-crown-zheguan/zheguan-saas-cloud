import { defineComponent as B, ref as v, computed as R, watch as F, resolveComponent as s, resolveDirective as M, openBlock as p, createBlock as g, unref as r, withCtx as a, createElementVNode as C, createVNode as m, createTextVNode as b, toDisplayString as c, withDirectives as T, createElementBlock as y, Fragment as Z, renderList as $, createCommentVNode as j } from "vue";
import { t as l, gb as E, gc as I, gd as O } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const z = {
  key: 0,
  class: "text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"
}, A = { class: "dialog-footer" }, te = /* @__PURE__ */ B({
  __name: "create-site-limit",
  props: {
    siteGroup: {
      type: Object,
      default: () => ({})
    },
    uid: {
      type: Number,
      default: 0
    }
  },
  emits: ["complete"],
  setup(w, { expose: L, emit: S }) {
    const f = w, u = v(!1), V = v(null), t = v({
      id: 0,
      uid: f.uid,
      group_id: "",
      num: 1,
      month: 1
    }), d = v(!1), N = R(() => ({
      group_id: [
        { required: !0, message: l("siteGroupPlaceholder"), trigger: "blur" }
      ],
      num: [
        { required: !0, message: l("numPlaceholder"), trigger: "blur" },
        {
          validator: (i, e, n) => {
            e <= 0 && n(l("numCannotLtZero")), n();
          }
        }
      ],
      month: [
        { required: !0, message: l("monthPlaceholder"), trigger: "blur" },
        {
          validator: (i, e, n) => {
            e <= 0 && n(l("monthCannotLtZero")), n();
          }
        }
      ]
    })), U = async (i) => {
      d.value || !i || await i.validate(async (e) => {
        e && (d.value = !0, (t.value.id ? E : I)(t.value).then(() => {
          d.value = !1, u.value = !1, S("complete");
        }).catch(() => {
          d.value = !1;
        }));
      });
    }, D = (i = 0) => {
      i ? O(i).then(({ data: e }) => {
        t.value = e, u.value = !0;
      }) : u.value = !0;
    };
    return F(() => u.value, () => {
      u.value || (t.value = {
        id: 0,
        uid: f.uid,
        group_id: "",
        num: 1,
        month: 1
      });
    }), L({
      setFormData: D,
      loading: d
    }), (i, e) => {
      const n = s("el-option"), G = s("el-select"), _ = s("el-form-item"), h = s("el-input"), k = s("el-form"), x = s("el-button"), P = s("el-dialog"), q = M("loading");
      return p(), g(P, {
        modelValue: u.value,
        "onUpdate:modelValue": e[5] || (e[5] = (o) => u.value = o),
        title: r(l)("userCreateSiteLimit"),
        width: "700px",
        "destroy-on-close": !0
      }, {
        footer: a(() => [
          C("span", A, [
            m(x, {
              onClick: e[3] || (e[3] = (o) => u.value = !1)
            }, {
              default: a(() => [
                b(c(r(l)("cancel")), 1)
              ]),
              _: 1
            }),
            m(x, {
              type: "primary",
              loading: d.value,
              onClick: e[4] || (e[4] = (o) => U(V.value))
            }, {
              default: a(() => [
                b(c(r(l)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: a(() => [
          T((p(), g(k, {
            model: t.value,
            "label-width": "130px",
            ref_key: "formRef",
            ref: V,
            rules: r(N),
            class: "page-form",
            autocomplete: "off"
          }, {
            default: a(() => [
              m(_, {
                label: r(l)("siteGroup"),
                prop: "group_id"
              }, {
                default: a(() => [
                  m(G, {
                    modelValue: t.value.group_id,
                    "onUpdate:modelValue": e[0] || (e[0] = (o) => t.value.group_id = o),
                    placeholder: r(l)("siteGroupPlaceholder"),
                    disabled: t.value.id
                  }, {
                    default: a(() => [
                      (p(!0), y(Z, null, $(f.siteGroup, (o) => (p(), g(n, {
                        label: o.group_name,
                        value: o.group_id
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "disabled"])
                ]),
                _: 1
              }, 8, ["label"]),
              m(_, {
                label: r(l)("createSiteNum"),
                prop: "num"
              }, {
                default: a(() => [
                  C("div", null, [
                    m(h, {
                      modelValue: t.value.num,
                      "onUpdate:modelValue": e[1] || (e[1] = (o) => t.value.num = o),
                      modelModifiers: { number: !0, trim: !0 },
                      class: "!w-[150px]"
                    }, null, 8, ["modelValue"]),
                    t.value.group_id ? (p(), y("p", z, c(r(l)("createdSiteNum")) + "：" + c(f.siteGroup[t.value.group_id].site_num), 1)) : j("", !0)
                  ])
                ]),
                _: 1
              }, 8, ["label"]),
              m(_, {
                label: r(l)("createSiteTimeLimit"),
                prop: "month"
              }, {
                default: a(() => [
                  m(h, {
                    modelValue: t.value.month,
                    "onUpdate:modelValue": e[2] || (e[2] = (o) => t.value.month = o),
                    modelModifiers: { number: !0, trim: !0 },
                    class: "!w-[150px]"
                  }, {
                    append: a(() => [
                      b(c(r(l)("month")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [q, d.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  te as default
};
