import { defineComponent as L, ref as s, resolveComponent as _, resolveDirective as S, withDirectives as T, openBlock as n, createElementBlock as i, createVNode as f, withCtx as c, createElementVNode as t, toDisplayString as r, unref as y, Fragment as R, renderList as N, createBlock as h, createTextVNode as m, resolveDynamicComponent as A, createCommentVNode as I } from "vue";
import { useRoute as O } from "vue-router";
import { fj as q, c6 as z, t as j, fk as H, aI as J, fl as K } from "./core-shared-86a0da16.js";
import { c as M } from "./lodash-8c6c2daa.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const P = { class: "main-container" }, Q = { class: "flex justify-between items-center" }, W = { class: "text-page-title" }, X = { class: "mt-[20px]" }, Y = /* @__PURE__ */ t("div", { class: "flex items-center bg" }, [
  /* @__PURE__ */ t("span", { class: "p-[15px] w-[25%] text-[14px]" }, "规则名称"),
  /* @__PURE__ */ t("span", { class: "p-[15px] w-[15%] text-[14px]" }, "所属应用"),
  /* @__PURE__ */ t("span", { class: "p-[15px] w-[35%] text-[14px]" }, "规则详情"),
  /* @__PURE__ */ t("span", { class: "p-[15px] w-[15%] text-[14px]" }, "是否启用"),
  /* @__PURE__ */ t("span", { class: "p-[15px] w-[10%] text-[14px]" }, "操作")
], -1), Z = { class: "p-[15px] w-[25%] text-[14px]" }, ee = { class: "p-[15px] w-[15%] text-[14px]" }, te = { class: "p-[15px] w-[35%] text-[14px] text-[#666]" }, oe = { class: "p-[15px] w-[15%] text-[14px] text-[#666]" }, le = ["onClick"], se = { class: "dialog-footer" }, me = /* @__PURE__ */ L({
  __name: "growth_rule",
  setup(ne) {
    const B = O().meta.title, x = s({}), a = s({}), d = s({}), w = s(null), g = s(!0);
    q().then(({ data: o }) => {
      Object.keys(o).forEach((l) => {
        o[l].component && (o[l].component = z(o[l].component));
      }), x.value = o;
    });
    const k = () => {
      H().then(({ data: o }) => {
        !J.empty(o) && (a.value = o), g.value = !1;
      }).catch(() => {
        g.value = !1;
      });
    };
    k();
    const v = s(!1), E = async () => {
      if (await w.value[0].verify()) {
        if (v.value)
          return;
        v.value = !0, K(d.value).then(() => {
          p.value = !1, v.value = !1, k();
        }).catch(() => {
          v.value = !1;
        });
      }
    }, p = s(!1), C = s(""), F = (o) => {
      d.value = M(a.value), p.value = !0, C.value = o;
    };
    return (o, l) => {
      const V = _("el-tag"), D = _("el-button"), G = _("el-dialog"), U = _("el-card"), $ = S("loading");
      return T((n(), i("div", P, [
        f(U, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: c(() => [
            t("div", Q, [
              t("span", W, r(y(B)), 1)
            ]),
            t("div", X, [
              Y,
              (n(!0), i(R, null, N(x.value, (e, u) => (n(), i("div", {
                key: u,
                class: "flex items-center"
              }, [
                t("span", Z, r(e.name), 1),
                t("span", ee, r(e.addon_name), 1),
                t("span", te, r(a.value[e.key] && a.value[e.key].content ? a.value[e.key].content : "--"), 1),
                t("span", oe, [
                  a.value[e.key] && a.value[e.key].is_use ? (n(), h(V, {
                    key: 0,
                    type: "success"
                  }, {
                    default: c(() => [
                      m("已启用")
                    ]),
                    _: 1
                  })) : (n(), h(V, {
                    key: 1,
                    type: "danger"
                  }, {
                    default: c(() => [
                      m("未启用")
                    ]),
                    _: 1
                  }))
                ]),
                t("span", {
                  class: "p-[15px] w-[10%] text-[14px] text-[#666] text-[var(--el-color-primary)] cursor-pointer",
                  onClick: (b) => F(u)
                }, "配置", 8, le)
              ]))), 128))
            ]),
            f(G, {
              modelValue: p.value,
              "onUpdate:modelValue": l[2] || (l[2] = (e) => p.value = e),
              title: "规则配置",
              width: "600px",
              "destroy-on-close": !0,
              "close-on-click-modal": !1
            }, {
              footer: c(() => [
                t("span", se, [
                  f(D, {
                    onClick: l[0] || (l[0] = (e) => p.value = !1)
                  }, {
                    default: c(() => [
                      m(r(y(j)("cancel")), 1)
                    ]),
                    _: 1
                  }),
                  f(D, {
                    type: "primary",
                    onClick: l[1] || (l[1] = (e) => E())
                  }, {
                    default: c(() => [
                      m(r(y(j)("confirm")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: c(() => [
                (n(!0), i(R, null, N(x.value, (e, u) => (n(), i("div", {
                  key: u,
                  class: "pl-[60px]"
                }, [
                  e.component && C.value == u ? (n(), h(A(e.component), {
                    key: 0,
                    modelValue: d.value[e.key],
                    "onUpdate:modelValue": (b) => d.value[e.key] = b,
                    ref_for: !0,
                    ref_key: "ruleRefs",
                    ref: w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : I("", !0)
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })
      ])), [
        [$, g.value]
      ]);
    };
  }
});
export {
  me as default
};
