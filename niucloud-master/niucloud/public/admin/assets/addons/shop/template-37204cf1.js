import { ElPageHeader as V, ElCard as $, ElInput as D, ElFormItem as R, ElButton as L, ElForm as j, ElTableColumn as U, ElTable as I, ElPagination as M, ElLoadingDirective as q } from "element-plus/es";
import { defineComponent as A, reactive as H, ref as Q, openBlock as b, createElementBlock as G, createVNode as t, withCtx as o, unref as l, createElementVNode as _, createTextVNode as s, toDisplayString as p, withDirectives as J, createBlock as K } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { Q as O, R as W } from "./delivery-da6bd7ad.js";
import { ElMessageBox as X } from "element-plus";
import { ArrowLeft as Y } from "@element-plus/icons-vue";
import { useRoute as Z, useRouter as ee } from "vue-router";
import { getTablePageStorage as v, setTablePageStorage as te } from "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
const ae = { class: "main-container" }, le = { class: "flex justify-between items-center" }, ne = { class: "mt-[10px]" }, oe = { class: "mt-[16px] flex justify-end" }, fe = /* @__PURE__ */ A({
  __name: "template",
  setup(re) {
    const y = Z(), u = ee(), x = y.meta.title, e = H({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        template_name: ""
      }
    }), f = Q(), m = (i = 1) => {
      e.loading = !0, e.page = i, O({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((n) => {
        e.loading = !1, e.data = n.data.data, e.total = n.data.total, te(e.page, e.limit, e.searchParam);
      }).catch(() => {
        e.loading = !1;
      });
    };
    m(v(e.searchParam).page);
    const E = () => {
      u.push({ path: "/shop/shipping/template_edit" });
    }, T = (i) => {
      u.push({ path: "/shop/shipping/template_edit", query: { id: i.template_id } });
    }, k = (i) => {
      X.confirm(
        a("templateDeleteTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        W(i).then(() => {
          m(v(e.searchParam).page);
        }).catch(() => {
        });
      });
    }, w = (i) => {
      i && (i.resetFields(), m());
    };
    return (i, n) => {
      const C = V, g = $, P = D, h = R, d = L, B = j, c = U, N = I, S = M, z = q;
      return b(), G("div", ae, [
        t(g, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: o(() => [
            t(C, {
              content: l(x),
              icon: l(Y),
              onBack: n[0] || (n[0] = (r) => l(u).push("/shop/delivery/config"))
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        t(g, {
          class: "box-card mt-[15px] !border-none",
          shadow: "never"
        }, {
          default: o(() => [
            t(g, {
              class: "box-card !border-none my-[10px] pt-0 table-search-wrap",
              shadow: "never"
            }, {
              default: o(() => [
                _("div", le, [
                  t(B, {
                    inline: !0,
                    model: e.searchParam,
                    ref_key: "searchFormRef",
                    ref: f
                  }, {
                    default: o(() => [
                      t(h, {
                        label: l(a)("templateName"),
                        prop: "template_name"
                      }, {
                        default: o(() => [
                          t(P, {
                            modelValue: e.searchParam.template_name,
                            "onUpdate:modelValue": n[1] || (n[1] = (r) => e.searchParam.template_name = r),
                            modelModifiers: { trim: !0 },
                            placeholder: l(a)("templateNamePlaceholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      t(h, null, {
                        default: o(() => [
                          t(d, {
                            type: "primary",
                            onClick: n[2] || (n[2] = (r) => m())
                          }, {
                            default: o(() => [
                              s(p(l(a)("search")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, {
                            onClick: n[3] || (n[3] = (r) => w(f.value))
                          }, {
                            default: o(() => [
                              s(p(l(a)("reset")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model"]),
                  t(d, {
                    type: "primary",
                    onClick: E
                  }, {
                    default: o(() => [
                      s(p(l(a)("addTemplate")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            _("div", ne, [
              J((b(), K(N, {
                data: e.data,
                size: "large"
              }, {
                empty: o(() => [
                  _("span", null, p(e.loading ? "" : l(a)("emptyData")), 1)
                ]),
                default: o(() => [
                  t(c, {
                    prop: "template_name",
                    label: l(a)("templateName"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  t(c, {
                    prop: "fee_type_name",
                    label: l(a)("feeTypeName"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  t(c, {
                    label: l(a)("freeShipping"),
                    "min-width": "120",
                    align: "center"
                  }, {
                    default: o(({ row: r }) => [
                      s(p(r.is_free_shipping ? l(a)("open") : l(a)("close")), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  t(c, {
                    prop: "create_time",
                    label: l(a)("createTime"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  t(c, {
                    label: l(a)("operation"),
                    fixed: "right",
                    "min-width": "120",
                    align: "right"
                  }, {
                    default: o(({ row: r }) => [
                      t(d, {
                        type: "primary",
                        link: "",
                        onClick: (F) => T(r)
                      }, {
                        default: o(() => [
                          s(p(l(a)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      t(d, {
                        type: "primary",
                        link: "",
                        onClick: (F) => k(r.template_id)
                      }, {
                        default: o(() => [
                          s(p(l(a)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [z, e.loading]
              ]),
              _("div", oe, [
                t(S, {
                  "current-page": e.page,
                  "onUpdate:current-page": n[4] || (n[4] = (r) => e.page = r),
                  "page-size": e.limit,
                  "onUpdate:page-size": n[5] || (n[5] = (r) => e.limit = r),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: e.total,
                  onSizeChange: n[6] || (n[6] = (r) => m()),
                  onCurrentChange: m
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  fe as default
};
