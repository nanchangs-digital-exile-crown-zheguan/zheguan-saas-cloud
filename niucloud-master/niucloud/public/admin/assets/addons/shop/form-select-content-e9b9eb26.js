import { ElInput as L, ElFormItem as j, ElOption as M, ElSelect as O, ElButton as A, ElForm as G, ElCheckbox as Y, ElTableColumn as q, ElTable as H, ElPagination as J, ElLoadingDirective as K } from "element-plus/es";
import { defineComponent as Q, reactive as g, ref as k, openBlock as f, createElementBlock as S, createVNode as a, withCtx as i, unref as m, Fragment as W, renderList as X, createBlock as T, createTextVNode as E, toDisplayString as y, withDirectives as Z, createElementVNode as x, nextTick as ee } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { getDiyFormSelectPageList as te, getFormType as oe } from "/admin/assets/shared/core-shared.js";
import { ElMessage as le } from "element-plus";
import { _ as ae } from "./_plugin-vue_export-helper-dad06003.js";
const ne = { class: "mt-[16px] flex justify-end" }, re = /* @__PURE__ */ Q({
  __name: "form-select-content",
  props: {
    formId: {
      type: [Number, String],
      default: 0
    }
  },
  setup(V, { expose: F }) {
    const P = V, s = g({}), h = k(), D = k(), e = g({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        title: "",
        type: "",
        verify_form_ids: []
      }
    }), n = g({
      form_id: P.formId
    }), c = (l = 1) => {
      e.loading = !0, e.page = l, n.form_id && (e.searchParam.verify_form_ids = [n.form_id]), te({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((t) => {
        e.loading = !1, e.data = t.data.data, e.data.forEach((d) => {
          d.checked = d.form_id == n.form_id;
        }), e.total = t.data.total, b();
      }).catch(() => {
        e.loading = !1;
      });
    };
    ((l = "") => {
      oe({}).then((t) => {
        for (const d in s)
          delete s[d];
        for (const d in t.data)
          s[d] = t.data[d];
      });
    })(), c();
    const w = (l, t) => {
      l ? n.form_id = t.form_id : n.form_id = 0, b();
    }, b = () => {
      ee(() => {
        for (let l = 0; l < e.data.length; l++)
          e.data[l].checked = !1, n.form_id == e.data[l].form_id && (e.data[l].checked = !0, Object.assign(n, e.data[l]));
      });
    }, I = (l) => {
      l && (l.resetFields(), c());
    };
    return F({
      getData: () => {
        if (n.form_id == 0) {
          le({
            type: "warning",
            message: `${r("formSelectContentTips")}`
          });
          return;
        }
        return {
          name: "DIY_FORM",
          title: n.page_title,
          url: `/app/pages/index/diy_form?form_id=${n.form_id}`,
          action: "",
          formId: n.form_id
        };
      }
    }), (l, t) => {
      const d = L, _ = j, C = M, N = O, v = A, z = G, U = Y, u = q, R = H, $ = J, B = K;
      return f(), S("div", null, [
        a(z, {
          inline: !0,
          model: e.searchParam,
          ref_key: "searchFormRef",
          ref: h
        }, {
          default: i(() => [
            a(_, {
              label: m(r)("formSelectContentTitle"),
              prop: "title",
              class: "form-item-wrap"
            }, {
              default: i(() => [
                a(d, {
                  modelValue: e.searchParam.title,
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.searchParam.title = o),
                  modelModifiers: { trim: !0 },
                  placeholder: m(r)("formSelectContentTitlePlaceholder")
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            a(_, {
              label: m(r)("formSelectContentTypeName"),
              prop: "type",
              class: "form-item-wrap"
            }, {
              default: i(() => [
                a(N, {
                  modelValue: e.searchParam.type,
                  "onUpdate:modelValue": t[1] || (t[1] = (o) => e.searchParam.type = o),
                  placeholder: m(r)("formSelectContentTypeNamePlaceholder")
                }, {
                  default: i(() => [
                    a(C, {
                      label: m(r)("formSelectContentTypeAll"),
                      value: ""
                    }, null, 8, ["label"]),
                    (f(!0), S(W, null, X(s, (o, p) => (f(), T(C, {
                      label: o.title,
                      value: p,
                      key: p
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            a(_, { class: "form-item-wrap" }, {
              default: i(() => [
                a(v, {
                  type: "primary",
                  onClick: t[2] || (t[2] = (o) => c())
                }, {
                  default: i(() => [
                    E(y(m(r)("search")), 1)
                  ]),
                  _: 1
                }),
                a(v, {
                  onClick: t[3] || (t[3] = (o) => I(h.value))
                }, {
                  default: i(() => [
                    E(y(m(r)("reset")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        Z((f(), T(R, {
          data: e.data,
          size: "large",
          ref_key: "tableRef",
          ref: D
        }, {
          empty: i(() => [
            x("span", null, y(e.loading ? "" : m(r)("emptyData")), 1)
          ]),
          default: i(() => [
            a(u, { "min-width": "7%" }, {
              default: i(({ row: o }) => [
                a(U, {
                  modelValue: o.checked,
                  "onUpdate:modelValue": (p) => o.checked = p,
                  onChange: (p) => w(p, o)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
              ]),
              _: 1
            }),
            a(u, {
              prop: "page_title",
              label: m(r)("formSelectContentTitle"),
              "min-width": "65%"
            }, null, 8, ["label"]),
            a(u, {
              prop: "type_name",
              label: m(r)("formSelectContentTypeName"),
              "min-width": "25%"
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["data"])), [
          [B, e.loading]
        ]),
        x("div", ne, [
          a($, {
            "current-page": e.page,
            "onUpdate:current-page": t[4] || (t[4] = (o) => e.page = o),
            "page-size": e.limit,
            "onUpdate:page-size": t[5] || (t[5] = (o) => e.limit = o),
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: t[6] || (t[6] = (o) => c()),
            onCurrentChange: c
          }, null, 8, ["current-page", "page-size", "total"])
        ])
      ]);
    };
  }
});
const ue = /* @__PURE__ */ ae(re, [["__scopeId", "data-v-c4fe5049"]]);
export {
  ue as default
};
