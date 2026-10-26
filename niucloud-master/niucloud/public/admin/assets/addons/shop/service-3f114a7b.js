import { ElPagination as ne, ElButton as H, ElDropdownItem as oe, ElDropdownMenu as se, ElDropdown as ie, ElInput as ce, ElFormItem as re, ElForm as de, ElCard as ue, ElTableColumn as ge, ElLoadingDirective as me } from "element-plus/es";
import { defineComponent as N, computed as $, openBlock as m, createElementBlock as w, createVNode as l, unref as n, isRef as O, useSlots as pe, createElementVNode as P, renderSlot as F, createTextVNode as g, toDisplayString as p, createCommentVNode as C, withCtx as o, createBlock as B, Fragment as j, pushScopeId as _e, popScopeId as fe, reactive as ve, ref as x, withDirectives as be, nextTick as M } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { aw as he, E as ye, ax as q } from "./goods-d2a56d58.js";
import { ElTable as Se, ElMessageBox as G, ElMessage as Ce } from "element-plus";
import { _ as we } from "./service-edit.vue_vue_type_style_index_0_lang-2e5ad830.js";
import { _ as J } from "./_plugin-vue_export-helper-dad06003.js";
import { _ as Pe } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { getTablePageStorage as A, setTablePageStorage as ke } from "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./index-36e25503.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./sortable.esm-fc069a97.js";
const xe = { class: "table-pagination" }, ze = /* @__PURE__ */ N({
  __name: "index",
  props: {
    currentPage: { default: 1 },
    pageSize: { default: 10 },
    pageSizes: { default: () => [10, 20, 50, 100] },
    total: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    hideOnSinglePage: { type: Boolean, default: !1 },
    layout: { default: "total, sizes, ->, prev, pager, next, jumper" }
  },
  emits: ["update:currentPage", "update:pageSize", "size-change", "current-change"],
  setup(t, { emit: e }) {
    const k = t, _ = $({
      get: () => k.currentPage,
      set: (r) => e("update:currentPage", r)
    }), c = $({
      get: () => k.pageSize,
      set: (r) => e("update:pageSize", r)
    }), y = (r) => e("size-change", r), u = (r) => e("current-change", r);
    return (r, b) => {
      const S = ne;
      return m(), w("div", xe, [
        l(S, {
          "current-page": n(_),
          "onUpdate:current-page": b[0] || (b[0] = (d) => O(_) ? _.value = d : null),
          "page-size": n(c),
          "onUpdate:page-size": b[1] || (b[1] = (d) => O(c) ? c.value = d : null),
          "page-sizes": t.pageSizes,
          total: t.total,
          disabled: t.disabled,
          "hide-on-single-page": t.hideOnSinglePage,
          layout: t.layout,
          onSizeChange: y,
          onCurrentChange: u
        }, null, 8, ["current-page", "page-size", "page-sizes", "total", "disabled", "hide-on-single-page", "layout"])
      ]);
    };
  }
});
const De = /* @__PURE__ */ J(ze, [["__scopeId", "data-v-ac4ce3a5"]]), Ee = (t) => (_e("data-v-7615fa38"), t = t(), fe(), t), Te = { class: "table-toolbar" }, Be = { class: "table-toolbar__title" }, $e = { class: "table-toolbar__content" }, Ie = {
  key: 0,
  class: "table-toolbar__selection"
}, Le = {
  key: 0,
  class: "table-toolbar__selected"
}, Fe = /* @__PURE__ */ Ee(() => /* @__PURE__ */ P("span", { class: "table-toolbar__divider" }, null, -1)), Me = { class: "table-toolbar__batch-actions" }, Ae = {
  key: 0,
  class: "table-toolbar__divider"
}, Ne = { class: "table-toolbar__actions" }, Re = /* @__PURE__ */ N({
  __name: "index",
  props: {
    title: { default: "" },
    selectable: { type: Boolean, default: !0 },
    selectedCount: { default: 0 },
    currentPageCount: { default: 0 },
    totalCount: { default: 0 },
    selectionLoading: { type: Boolean, default: !1 },
    selectionDisabled: { type: Boolean, default: !1 },
    allowSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["select-page", "select-all", "clear-selection"],
  setup(t, { emit: e }) {
    const k = t, _ = pe(), c = $(() => k.selectedCount > 0), y = (u) => {
      u == "page" && e("select-page"), u == "all" && e("select-all");
    };
    return (u, r) => {
      const b = Pe, S = H, d = oe, I = se, L = ie;
      return m(), w("div", Te, [
        P("div", Be, [
          F(u.$slots, "title", {}, () => [
            g(p(t.title), 1)
          ], !0)
        ]),
        P("div", $e, [
          t.selectable ? (m(), w("div", Ie, [
            n(c) ? (m(), w("span", Le, [
              g(" 已选 "),
              P("strong", null, p(t.selectedCount), 1),
              g(" 条 ")
            ])) : C("", !0),
            l(L, {
              trigger: "click",
              disabled: t.selectionDisabled || t.selectionLoading || !t.currentPageCount && !t.totalCount,
              onCommand: y
            }, {
              dropdown: o(() => [
                l(I, null, {
                  default: o(() => [
                    l(d, {
                      command: "page",
                      disabled: t.currentPageCount <= 0
                    }, {
                      default: o(() => [
                        g(" 选择当前页（" + p(t.currentPageCount) + " 条） ", 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    t.allowSelectAll ? (m(), B(d, {
                      key: 0,
                      command: "all",
                      disabled: t.totalCount <= 0
                    }, {
                      default: o(() => [
                        g(" 选择全部筛选结果（" + p(t.totalCount) + " 条） ", 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : C("", !0)
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                l(S, {
                  class: "table-toolbar__selection-trigger",
                  type: "primary",
                  link: "",
                  disabled: t.selectionDisabled,
                  loading: t.selectionLoading
                }, {
                  default: o(() => [
                    g(p(n(c) ? "重新选择" : "选择数据") + " ", 1),
                    t.selectionLoading ? C("", !0) : (m(), B(b, {
                      key: 0,
                      class: "table-toolbar__selection-arrow",
                      name: "element ArrowDown",
                      size: "12px"
                    }))
                  ]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ]),
              _: 1
            }, 8, ["disabled"]),
            n(c) ? (m(), B(S, {
              key: 1,
              class: "table-toolbar__clear",
              link: "",
              disabled: t.selectionDisabled || t.selectionLoading,
              onClick: r[0] || (r[0] = (R) => e("clear-selection"))
            }, {
              default: o(() => [
                g(" 清空 ")
              ]),
              _: 1
            }, 8, ["disabled"])) : C("", !0),
            n(_)["batch-actions"] ? (m(), w(j, { key: 2 }, [
              Fe,
              P("div", Me, [
                F(u.$slots, "batch-actions", {
                  selectedCount: t.selectedCount,
                  hasSelection: n(c)
                }, void 0, !0)
              ])
            ], 64)) : C("", !0)
          ])) : C("", !0),
          n(_).actions ? (m(), w(j, { key: 1 }, [
            t.selectable ? (m(), w("span", Ae)) : C("", !0),
            P("div", Ne, [
              F(u.$slots, "actions", {}, void 0, !0)
            ])
          ], 64)) : C("", !0)
        ])
      ]);
    };
  }
});
const Ve = /* @__PURE__ */ J(Re, [["__scopeId", "data-v-7615fa38"]]), Ue = { class: "main-container" }, Oe = { class: "table-panel mt-[10px]" }, st = /* @__PURE__ */ N({
  __name: "service",
  setup(t) {
    const e = ve({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        service_name: ""
      }
    }), k = x(), _ = x(), c = x([]), y = x(!1), u = x(!1), r = x(!1), b = $(() => c.value.length), S = async () => {
      var s;
      await M(), r.value = !0, (s = _.value) == null || s.clearSelection();
      const a = new Set(c.value);
      e.data.forEach((v) => {
        var f;
        a.has(v.service_id) && ((f = _.value) == null || f.toggleRowSelection(v, !0));
      }), await M(), r.value = !1;
    }, d = (a = 1) => (e.loading = !0, e.page = a, he({
      page: e.page,
      limit: e.limit,
      ...e.searchParam
    }).then(async (s) => {
      e.data = s.data.data, e.total = s.data.total, ke(e.page, e.limit, e.searchParam), await S();
    }).finally(() => {
      e.loading = !1;
    }));
    d(A(e.searchParam).page);
    const I = (a) => {
      if (r.value)
        return;
      const s = new Set(e.data.map((f) => f.service_id)), v = c.value.filter((f) => !s.has(f));
      c.value = Array.from(/* @__PURE__ */ new Set([
        ...v,
        ...a.map((f) => f.service_id)
      ]));
    }, L = () => {
      c.value = e.data.map((a) => a.service_id), S();
    }, R = async () => {
      y.value = !0;
      try {
        const a = await ye({ ...e.searchParam }), s = Array.isArray(a.data) ? a.data : [];
        c.value = s.map((v) => v.service_id), await S();
      } finally {
        y.value = !1;
      }
    }, E = () => {
      var a;
      c.value = [], r.value = !0, (a = _.value) == null || a.clearSelection(), M(() => {
        r.value = !1;
      });
    }, V = () => {
      E(), d();
    }, K = () => {
      d();
    }, Q = () => {
      E(), d(A(e.searchParam).page);
    }, D = x(null), W = () => {
      D.value.setFormData(), D.value.showDialog = !0;
    }, X = (a) => {
      D.value.setFormData(a), D.value.showDialog = !0;
    }, Y = (a) => {
      G.confirm(
        i("serveDeleteTips"),
        i("warning"),
        {
          confirmButtonText: i("confirm"),
          cancelButtonText: i("cancel"),
          type: "warning"
        }
      ).then(() => {
        q(a).then(() => {
          c.value = c.value.filter((s) => s != a), d(A(e.searchParam).page);
        }).catch(() => {
        });
      });
    }, Z = () => {
      const a = [...c.value];
      a.length && G.confirm(i("batchDeleteTips").replace("{count}", String(a.length)), i("warning"), {
        confirmButtonText: i("confirm"),
        cancelButtonText: i("cancel"),
        type: "warning"
      }).then(async () => {
        u.value = !0;
        try {
          await Promise.all(a.map((v) => q(v, !1))), Ce.success(i("batchDeleteSuccess")), E();
          const s = Math.max(1, Math.ceil((e.total - a.length) / e.limit));
          await d(Math.min(e.page, s));
        } finally {
          u.value = !1;
        }
      });
    }, ee = (a) => {
      a && (a.resetFields(), V());
    };
    return (a, s) => {
      const v = ce, f = re, z = H, te = de, U = ue, T = ge, ae = me;
      return m(), w("div", Ue, [
        l(U, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: o(() => [
            l(U, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: o(() => [
                l(te, {
                  inline: !0,
                  model: e.searchParam,
                  ref_key: "searchFormRef",
                  ref: k
                }, {
                  default: o(() => [
                    l(f, {
                      label: n(i)("serviceName"),
                      prop: "service_name"
                    }, {
                      default: o(() => [
                        l(v, {
                          modelValue: e.searchParam.service_name,
                          "onUpdate:modelValue": s[0] || (s[0] = (h) => e.searchParam.service_name = h),
                          modelModifiers: { trim: !0 },
                          placeholder: n(i)("serviceNamePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(f, null, {
                      default: o(() => [
                        l(z, {
                          type: "primary",
                          onClick: V
                        }, {
                          default: o(() => [
                            g(p(n(i)("search")), 1)
                          ]),
                          _: 1
                        }),
                        l(z, {
                          onClick: s[1] || (s[1] = (h) => ee(k.value))
                        }, {
                          default: o(() => [
                            g(p(n(i)("reset")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              _: 1
            }),
            P("div", Oe, [
              l(Ve, {
                title: n(i)("serviceList"),
                "selected-count": n(b),
                "current-page-count": e.data.length,
                "total-count": e.total,
                "selection-loading": y.value,
                "selection-disabled": u.value,
                onSelectPage: L,
                onSelectAll: R,
                onClearSelection: E
              }, {
                "batch-actions": o(() => [
                  l(z, {
                    type: "danger",
                    link: "",
                    disabled: !n(b) || y.value,
                    loading: u.value,
                    onClick: Z
                  }, {
                    default: o(() => [
                      g(p(n(i)("batchDelete")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ]),
                actions: o(() => [
                  l(z, {
                    type: "primary",
                    onClick: W
                  }, {
                    default: o(() => [
                      g(p(n(i)("addServe")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "selected-count", "current-page-count", "total-count", "selection-loading", "selection-disabled"]),
              be((m(), B(n(Se), {
                ref_key: "tableRef",
                ref: _,
                data: e.data,
                "row-key": "service_id",
                size: "large",
                onSelectionChange: I
              }, {
                empty: o(() => [
                  P("span", null, p(e.loading ? "" : n(i)("emptyData")), 1)
                ]),
                default: o(() => [
                  l(T, {
                    type: "selection",
                    width: "48",
                    "reserve-selection": ""
                  }),
                  l(T, {
                    prop: "service_name",
                    label: n(i)("serviceName"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  l(T, {
                    prop: "desc",
                    label: n(i)("desc"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  l(T, {
                    label: n(i)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "120"
                  }, {
                    default: o(({ row: h }) => [
                      l(z, {
                        type: "primary",
                        link: "",
                        onClick: (le) => X(h)
                      }, {
                        default: o(() => [
                          g(p(n(i)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      l(z, {
                        type: "primary",
                        link: "",
                        onClick: (le) => Y(h.service_id)
                      }, {
                        default: o(() => [
                          g(p(n(i)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [ae, e.loading]
              ]),
              l(De, {
                "current-page": e.page,
                "onUpdate:current-page": s[2] || (s[2] = (h) => e.page = h),
                "page-size": e.limit,
                "onUpdate:page-size": s[3] || (s[3] = (h) => e.limit = h),
                total: e.total,
                onSizeChange: K,
                onCurrentChange: d
              }, null, 8, ["current-page", "page-size", "total"])
            ]),
            l(we, {
              ref_key: "editServeDialog",
              ref: D,
              onComplete: Q
            }, null, 512)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  st as default
};
