import { ElFormItem as E, ElColorPicker as R, ElCard as y, ElForm as B, ElButton as U } from "element-plus/es";
import { _ as D } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { _ as N } from "./index-36e25503.js";
import { defineComponent as P, ref as _, computed as S, openBlock as j, createElementBlock as q, createVNode as l, withCtx as a, createElementVNode as c, toDisplayString as v, unref as r, createTextVNode as I } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { useRoute as z } from "vue-router";
import { R as O, S as T } from "./marketing-f8ec8b08.js";
import "/admin/assets/shared/core-shared.js";

import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./sortable.esm-fc069a97.js";
import "/admin/assets/shared/core-shared.js";
const $ = { class: "flex justify-between items-center mb-[10px]" }, A = { class: "text-page-title" }, G = { class: "fixed-footer-wrap" }, H = { class: "fixed-footer h-[48px]" }, ie = /* @__PURE__ */ P({
  __name: "config",
  setup(J) {
    const b = z().meta.title, o = _({
      // rank_name: "",
      // rank_remark: "",
      no_color: "#FFFCF5",
      select_color: "#FF4142",
      select_bg_color_start: "#FFFFFF",
      select_bg_color_end: "#FFEBD7",
      rank_images: ""
    }), d = _(), V = S(() => ({
      // rank_name: [
      //     { required: true, message: t("rankNamePlaceholder"), trigger: "blur" },
      // ],
      rank_images: [
        {
          required: !0,
          message: n("imagePlaceholder"),
          trigger: "change"
        }
      ]
    })), p = () => {
      O().then((s) => {
        Object.keys(o.value).forEach((e) => {
          s.data[e] && (o.value[e] = s.data[e]);
        });
      });
    };
    p();
    const m = _(!1), x = async () => {
      var s;
      m.value || await ((s = d.value) == null ? void 0 : s.validate(async (e) => {
        e && (m.value = !0, T(o.value).then(() => {
          p(), m.value = !1;
        }).catch(() => {
          m.value = !1;
        }));
      }));
    };
    return (s, e) => {
      const F = N, u = E, i = R, h = D, f = y, k = B, C = U;
      return j(), q("div", null, [
        l(f, {
          class: "box-card !border-none main-container",
          shadow: "never"
        }, {
          default: a(() => [
            c("div", $, [
              c("span", A, v(r(b)), 1)
            ]),
            l(k, {
              model: o.value,
              "label-width": "120px",
              ref_key: "formRef",
              ref: d,
              rules: r(V),
              class: "page-form"
            }, {
              default: a(() => [
                l(f, {
                  class: "box-card !border-none",
                  shadow: "never"
                }, {
                  default: a(() => [
                    l(u, {
                      label: r(n)("rankImages"),
                      prop: "rank_images",
                      rules: [{
                        required: !0,
                        trigger: "change",
                        validator: (t, w, g) => {
                          w || g(r(n)("imagePlaceholder")), g();
                        }
                      }]
                    }, {
                      default: a(() => [
                        l(F, {
                          modelValue: o.value.rank_images,
                          "onUpdate:modelValue": e[0] || (e[0] = (t) => o.value.rank_images = t),
                          limit: 1
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label", "rules"]),
                    l(u, {
                      label: r(n)("noColor")
                    }, {
                      default: a(() => [
                        l(i, {
                          modelValue: o.value.no_color,
                          "onUpdate:modelValue": e[1] || (e[1] = (t) => o.value.no_color = t),
                          "show-alpha": ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(u, {
                      label: r(n)("selectedColor")
                    }, {
                      default: a(() => [
                        l(i, {
                          modelValue: o.value.select_color,
                          "onUpdate:modelValue": e[2] || (e[2] = (t) => o.value.select_color = t),
                          "show-alpha": ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(u, {
                      label: r(n)("selectedBgColor")
                    }, {
                      default: a(() => [
                        l(i, {
                          modelValue: o.value.select_bg_color_start,
                          "onUpdate:modelValue": e[3] || (e[3] = (t) => o.value.select_bg_color_start = t),
                          "show-alpha": ""
                        }, null, 8, ["modelValue"]),
                        l(h, {
                          name: "iconfont iconmap-connect",
                          size: "20px",
                          class: "block !text-gray-400 mx-[5px]"
                        }),
                        l(i, {
                          modelValue: o.value.select_bg_color_end,
                          "onUpdate:modelValue": e[4] || (e[4] = (t) => o.value.select_bg_color_end = t),
                          "show-alpha": ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }),
        c("div", G, [
          c("div", H, [
            l(C, {
              type: "primary",
              onClick: x
            }, {
              default: a(() => [
                I(v(r(n)("save")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export {
  ie as default
};
