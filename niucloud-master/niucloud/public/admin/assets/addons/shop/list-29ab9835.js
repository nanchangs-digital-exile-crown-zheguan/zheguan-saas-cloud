import { ElButton as J, ElInput as K, ElFormItem as O, ElForm as Q, ElCard as W, ElCheckbox as ee, ElTableColumn as te, ElTag as ae, ElTooltip as ne, ElTable as le, ElPagination as oe, ElLoadingDirective as se } from "element-plus/es";
import { defineComponent as re, ref as _, reactive as ie, openBlock as P, createElementBlock as de, createVNode as l, withCtx as r, createElementVNode as c, toDisplayString as i, unref as s, createTextVNode as u, withDirectives as ce, createBlock as me } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { useRouter as pe, useRoute as ue } from "vue-router";
import { X as ge, Y as _e, Z as fe, _ as he, $ as be } from "./marketing-f8ec8b08.js";
import { ElMessage as S, ElMessageBox as B } from "element-plus";
import { getTablePageStorage as v, debounce as ke, setTablePageStorage as ve } from "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
const xe = { class: "main-container" }, ye = { class: "flex justify-between items-center" }, Ce = { class: "text-page-title" }, we = { class: "mb-[10px] flex items-center" }, Ee = { style: { display: "inline-flex", "align-items": "center" } }, Te = { class: "mr-[5px]" }, Pe = /* @__PURE__ */ c("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), Se = { class: "mt-[16px] flex justify-end" }, Ue = /* @__PURE__ */ re({
  __name: "list",
  setup(Be) {
    const x = pe(), R = ue().meta.title, h = _(!1), y = _(), e = ie({
      page: 1,
      limit: 10,
      total: 0,
      loading: !1,
      data: [],
      searchParam: {
        name: "",
        order: "",
        sort: ""
      }
    }), m = (t = 1) => {
      e.loading = !0, e.page = t, _e({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((a) => {
        e.loading = !1, e.data = a.data.data, e.total = a.data.total, ve(e.page, e.limit, e.searchParam);
      }).catch(() => {
        e.loading = !1;
      });
    };
    m(v(e.searchParam).page);
    const V = (t) => {
      t && (t.resetFields(), e.searchParam.name = "", m());
    }, $ = () => {
      x.push("/shop/marketing/goods_rank/edit");
    }, N = (t) => {
      x.push("/shop/marketing/goods_rank/edit?rank_id=" + t.rank_id);
    }, D = (t) => {
      t.status = t.status === 1 ? 0 : 1;
      const a = {
        rank_id: t.rank_id,
        status: t.status
      };
      fe(a);
    }, z = (t) => {
      B.confirm(n("deleteTips"), n("warning"), {
        confirmButtonText: n("confirm"),
        cancelButtonText: n("cancel"),
        type: "warning"
      }).then(() => {
        he(t).then(() => {
          m(v(e.searchParam).page);
        });
      });
    }, F = (t) => {
      let a = "";
      t.order == "ascending" ? a = "asc" : t.order == "descending" && (a = "desc"), a && (e.searchParam.order = t.prop, e.searchParam.sort = a), m();
    }, b = _(), k = _(!1), G = (t) => {
      k.value = !1, C.value.toggleAllSelection();
    }, C = _(), g = _([]), L = (t) => {
      g.value = t, b.value = !1, g.value.length > 0 && g.value.length < e.data.length ? k.value = !0 : k.value = !1, g.value.length == e.data.length && (b.value = !0);
    }, U = () => {
      if (g.value.length == 0) {
        S({
          type: "warning",
          message: `${n("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      B.confirm(n("batchGoodsDeleteTips"), n("warning"), {
        confirmButtonText: n("confirm"),
        cancelButtonText: n("cancel"),
        type: "warning"
      }).then(() => {
        if (h.value)
          return;
        h.value = !0;
        const t = [];
        g.value.forEach((a) => {
          t.push(a.rank_id);
        }), be({
          rank_id: t
        }).then(() => {
          m(v(e.searchParam).page), h.value = !1;
        }).catch(() => {
          h.value = !1;
        });
      });
    }, I = {
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/
    }, j = ke((t, a) => {
      if (isNaN(t) || !I.number.test(t)) {
        S({
          type: "warning",
          message: `${n("sortTips")}`
        });
        return;
      }
      t > 99999999 && (a.sort = 99999999), ge({
        rank_id: a.rank_id,
        sort: t
      }).then((p) => {
        m(v(e.searchParam).page);
      });
    });
    return (t, a) => {
      const p = J, w = K, E = O, M = Q, T = W, A = ee, d = te, X = ae, Y = ne, Z = le, q = oe, H = se;
      return P(), de("div", xe, [
        l(T, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: r(() => [
            c("div", ye, [
              c("span", Ce, i(s(R)), 1),
              l(p, {
                type: "primary",
                onClick: $
              }, {
                default: r(() => [
                  u(i(s(n)("addRanking")), 1)
                ]),
                _: 1
              })
            ]),
            l(T, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: r(() => [
                l(M, {
                  inline: !0,
                  model: e.searchParam,
                  ref_key: "searchFormRef",
                  ref: y
                }, {
                  default: r(() => [
                    l(E, {
                      label: s(n)("rankName"),
                      prop: "rankName"
                    }, {
                      default: r(() => [
                        l(w, {
                          modelValue: e.searchParam.name,
                          "onUpdate:modelValue": a[0] || (a[0] = (o) => e.searchParam.name = o),
                          modelModifiers: { trim: !0 },
                          placeholder: s(n)("rankNamePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    l(E, null, {
                      default: r(() => [
                        l(p, {
                          type: "primary",
                          onClick: a[1] || (a[1] = (o) => m())
                        }, {
                          default: r(() => [
                            u(i(s(n)("search")), 1)
                          ]),
                          _: 1
                        }),
                        l(p, {
                          onClick: a[2] || (a[2] = (o) => V(y.value))
                        }, {
                          default: r(() => [
                            u(i(s(n)("reset")), 1)
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
            c("div", null, [
              c("div", we, [
                l(A, {
                  modelValue: b.value,
                  "onUpdate:modelValue": a[3] || (a[3] = (o) => b.value = o),
                  size: "large",
                  class: "px-[14px]",
                  onChange: G,
                  indeterminate: k.value
                }, null, 8, ["modelValue", "indeterminate"]),
                l(p, {
                  onClick: U,
                  size: "small"
                }, {
                  default: r(() => [
                    u(i(s(n)("batchDeletion")), 1)
                  ]),
                  _: 1
                })
              ]),
              ce((P(), me(Z, {
                data: e.data,
                size: "large",
                ref_key: "goodBankListTableRef",
                ref: C,
                onSortChange: F,
                onSelectionChange: L
              }, {
                empty: r(() => [
                  c("span", null, i(e.loading ? "" : s(n)("emptyData")), 1)
                ]),
                default: r(() => [
                  l(d, {
                    type: "selection",
                    width: "55"
                  }),
                  l(d, {
                    prop: "name",
                    label: s(n)("rankName"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  l(d, {
                    prop: "show_goods_num",
                    label: s(n)("showGoodsNum"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  l(d, {
                    prop: "goods_source_name",
                    label: s(n)("goodsSource"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  l(d, {
                    prop: "rule_type_name",
                    label: s(n)("ruleType"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  l(d, {
                    prop: "rank_type_name",
                    label: s(n)("rankType"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  l(d, {
                    prop: "status",
                    label: s(n)("isShow"),
                    width: "130"
                  }, {
                    default: r(({ row: o }) => [
                      l(X, {
                        class: "cursor-pointer",
                        type: o.status != 0 ? "success" : "danger",
                        onClick: (f) => D(o)
                      }, {
                        default: r(() => [
                          u(i(o.status != 0 ? "开启" : "关闭"), 1)
                        ]),
                        _: 2
                      }, 1032, ["type", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(d, {
                    prop: "sort",
                    "min-width": "120",
                    "show-overflow-tooltip": !0,
                    sortable: "custom"
                  }, {
                    header: r(() => [
                      c("div", Ee, [
                        c("span", Te, i(s(n)("sort")), 1),
                        l(Y, {
                          class: "box-item",
                          effect: "light",
                          content: s(n)("sortRules"),
                          placement: "top"
                        }, {
                          default: r(() => [
                            Pe
                          ]),
                          _: 1
                        }, 8, ["content"])
                      ])
                    ]),
                    default: r(({ row: o }) => [
                      l(w, {
                        modelValue: o.sort,
                        "onUpdate:modelValue": (f) => o.sort = f,
                        modelModifiers: { number: !0 },
                        class: "w-[70px]",
                        maxlength: "8",
                        onBlur: (f) => s(j)(o.sort, o)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  }),
                  l(d, {
                    prop: "create_time",
                    label: s(n)("createTime"),
                    "min-width": "150",
                    sortable: "custom"
                  }, {
                    default: r(({ row: o }) => [
                      c("div", null, i(o.create_time), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(d, {
                    label: s(n)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "120"
                  }, {
                    default: r(({ row: o }) => [
                      l(p, {
                        type: "primary",
                        link: "",
                        onClick: (f) => N(o)
                      }, {
                        default: r(() => [
                          u(i(s(n)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      l(p, {
                        type: "primary",
                        link: "",
                        onClick: (f) => z(o.rank_id)
                      }, {
                        default: r(() => [
                          u(i(s(n)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [H, e.loading]
              ]),
              c("div", Se, [
                l(q, {
                  "current-page": e.page,
                  "onUpdate:current-page": a[4] || (a[4] = (o) => e.page = o),
                  "page-size": e.limit,
                  "onUpdate:page-size": a[5] || (a[5] = (o) => e.limit = o),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: e.total,
                  onSizeChange: a[6] || (a[6] = (o) => m()),
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
  Ue as default
};
