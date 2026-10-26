import { ElSwitch as b, ElFormItem as V, ElCard as E, ElForm as C, ElButton as D, ElLoadingDirective as k } from "element-plus/es";
import { defineComponent as S, ref as u, reactive as B, openBlock as f, createElementBlock as N, createElementVNode as o, toDisplayString as v, unref as r, withDirectives as R, createBlock as j, withCtx as i, createVNode as a, createTextVNode as F } from "vue";
import { t as c } from "/admin/assets/shared/admin-lang.js";
import { m as U, n as I } from "./delivery-da6bd7ad.js";
import { useRoute as L } from "vue-router";
import "/admin/assets/shared/core-shared.js";
const O = { class: "main-container bg-[#fff] rounded-[4px]" }, P = { class: "flex ml-[18px] justify-between items-center pt-[20px]" }, T = { class: "text-page-title" }, $ = /* @__PURE__ */ o("div", { class: "text-[12px] text-[#999]" }, "不开启时将默认选择就近配送门店，开启后同城配送下单时可主动选择配送门店", -1), q = /* @__PURE__ */ o("div", { class: "text-[12px] text-[#999]" }, '此功能需耗费配额,需要具备"驾车路线规划"接口的调用权限和配额方可使用', -1), z = { class: "fixed-footer-wrap" }, A = { class: "fixed-footer" }, Y = /* @__PURE__ */ S({
  __name: "local_config",
  setup(G) {
    const p = L().meta.title, e = u(!0), l = B({
      is_local_delivery_store_select: 1,
      is_show_polyline: 1
    }), _ = u();
    U().then((s) => {
      Object.assign(l, s.data), e.value = !1;
    }).catch(() => {
      e.value = !1;
    });
    const x = async (s) => {
      e.value || !s || await s.validate(async (t) => {
        t && (e.value = !0, I(l).then(() => {
          e.value = !1;
        }).catch(() => {
          e.value = !1;
        }));
      });
    };
    return (s, t) => {
      const d = b, m = V, h = E, y = C, g = D, w = k;
      return f(), N("div", O, [
        o("div", P, [
          o("span", T, v(r(p)), 1)
        ]),
        R((f(), j(y, {
          model: l,
          "label-width": "150px",
          ref_key: "formRef",
          ref: _,
          class: "page-form"
        }, {
          default: i(() => [
            a(h, {
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: i(() => [
                a(m, {
                  label: r(c)("isStoreSelect")
                }, {
                  default: i(() => [
                    o("div", null, [
                      a(d, {
                        modelValue: l.is_local_delivery_store_select,
                        "onUpdate:modelValue": t[0] || (t[0] = (n) => l.is_local_delivery_store_select = n),
                        "active-value": 1,
                        "inactive-value": 0
                      }, null, 8, ["modelValue"]),
                      $
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: r(c)("isShowPolyline")
                }, {
                  default: i(() => [
                    o("div", null, [
                      a(d, {
                        modelValue: l.is_show_polyline,
                        "onUpdate:modelValue": t[1] || (t[1] = (n) => l.is_show_polyline = n),
                        "active-value": 1,
                        "inactive-value": 0
                      }, null, 8, ["modelValue"]),
                      q
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])), [
          [w, e.value]
        ]),
        o("div", z, [
          o("div", A, [
            a(g, {
              type: "primary",
              loading: e.value,
              onClick: t[2] || (t[2] = (n) => x(_.value))
            }, {
              default: i(() => [
                F(v(r(c)("save")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
});
export {
  Y as default
};
