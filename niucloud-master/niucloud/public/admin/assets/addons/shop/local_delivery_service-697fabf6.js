import { ElTableColumn as S, ElTag as F, ElButton as O, ElTable as $, ElCard as z, ElLoadingDirective as A } from "element-plus/es";
import { defineComponent as U, ref as q, reactive as G, openBlock as a, createElementBlock as c, createVNode as s, withCtx as n, createElementVNode as d, toDisplayString as p, unref as r, withDirectives as H, createBlock as y, createTextVNode as m, Fragment as g, createCommentVNode as b, renderList as I, resolveDynamicComponent as J, defineAsyncComponent as K } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { o as M } from "./delivery-da6bd7ad.js";
import { useRoute as P, useRouter as Q } from "vue-router";
import "/admin/assets/shared/core-shared.js";
const W = { class: "main-container" }, X = { class: "flex justify-between items-center" }, Y = { class: "text-page-title" }, Z = { class: "mt-[20px]" }, se = /* @__PURE__ */ U({
  __name: "local_delivery_service",
  setup(ee) {
    const C = P(), D = Q(), w = C.meta.title, u = q([]), l = G({
      loading: !0,
      data: []
    }), E = /* @__PURE__ */ Object.assign({ "/src/addon/shop/views/delivery/components/delivery-personnel-edit.vue": () => import("./delivery-personnel-edit-045da5eb.js"), "/src/addon/shop/views/delivery/components/local-delivery-service-dada.vue": () => import("./local-delivery-service-dada-e3b13f69.js"), "/src/addon/shop/views/delivery/components/local_record_detail.vue": () => import("./local_record_detail-a3662dc0.js"), "/src/addon/shop/views/delivery/components/shop_record_detail.vue": () => import("./shop_record_detail-2b6b1599.js") }), k = () => {
      l.loading = !0, M().then(({ data: t }) => {
        Object.keys(t).forEach((e) => {
          t[e].component && (t[e].component = K(E[t[e].component]));
        }), l.data = t, l.loading = !1;
      }).catch(() => {
        l.loading = !1;
      });
    }, T = (t, e) => {
      u.value[e] = t;
    };
    k();
    const x = (t, e) => {
      u.value[e].setFormData(t), u.value[e].showDialog = !0;
    }, N = () => {
      D.push("/shop/delivery/staff");
    }, L = () => {
      D.push("/shop/delivery/merchant/record");
    };
    return (t, e) => {
      const _ = S, R = F, v = O, B = $, V = z, j = A;
      return a(), c("div", W, [
        s(V, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: n(() => [
            d("div", X, [
              d("span", Y, p(r(w)), 1)
            ]),
            d("div", Z, [
              H((a(), y(B, {
                data: l.data,
                size: "large"
              }, {
                empty: n(() => [
                  d("span", null, p(l.loading ? "" : r(i)("emptyData")), 1)
                ]),
                default: n(() => [
                  s(_, {
                    prop: "name",
                    label: r(i)("name"),
                    "min-width": "100",
                    "show-overflow-tooltip": !0
                  }, null, 8, ["label"]),
                  s(_, {
                    label: r(i)("isUse"),
                    "min-width": "180",
                    align: "center"
                  }, {
                    default: n(({ row: o }) => [
                      s(R, {
                        class: "ml-2",
                        type: o.is_use == 1 ? "success" : "error"
                      }, {
                        default: n(() => [
                          m(p(o.is_use == 1 ? r(i)("statusNormal") : r(i)("statusDeactivate")), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: r(i)("operation"),
                    align: "right",
                    fixed: "right",
                    "min-width": "200"
                  }, {
                    default: n(({ row: o, $index: f }) => [
                      o.is_merchant ? (a(), c(g, { key: 0 }, [
                        s(v, {
                          type: "primary",
                          link: "",
                          onClick: N
                        }, {
                          default: n(() => [
                            m("配送员")
                          ]),
                          _: 1
                        }),
                        s(v, {
                          type: "primary",
                          link: "",
                          onClick: L
                        }, {
                          default: n(() => [
                            m("配送记录")
                          ]),
                          _: 1
                        })
                      ], 64)) : b("", !0),
                      o.is_merchant ? b("", !0) : (a(), y(v, {
                        key: 1,
                        type: "primary",
                        link: "",
                        onClick: (h) => x(o, f)
                      }, {
                        default: n(() => [
                          m(p(r(i)("config")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [j, l.loading]
              ])
            ]),
            (a(!0), c(g, null, I(l.data, (o, f) => (a(), c(g, null, [
              o.component ? (a(), y(J(o.component), {
                key: 0,
                ref_for: !0,
                ref: (h) => T(h, f),
                onComplete: e[0] || (e[0] = (h) => k())
              }, null, 544)) : b("", !0)
            ], 64))), 256))
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  se as default
};
