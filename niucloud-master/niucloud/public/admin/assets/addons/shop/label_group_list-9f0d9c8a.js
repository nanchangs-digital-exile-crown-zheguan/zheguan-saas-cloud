import { ElButton as M, ElTabPane as R, ElTabs as j, ElInput as I, ElFormItem as q, ElForm as A, ElCard as H, ElTableColumn as J, ElTable as K, ElPagination as O, ElLoadingDirective as Q } from "element-plus/es";
import { defineComponent as W, reactive as X, ref as C, openBlock as E, createElementBlock as Y, createVNode as o, withCtx as s, createElementVNode as u, toDisplayString as p, unref as r, createTextVNode as c, withDirectives as Z, createBlock as ee } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { a4 as te, a5 as ae, a6 as oe } from "./goods-d2a56d58.js";
import { ElMessage as le, ElMessageBox as ne } from "element-plus";
import { _ as re } from "./label-group-edit.vue_vue_type_style_index_0_lang-ae7a19af.js";
import { useRoute as se, useRouter as ie } from "vue-router";
import { getTablePageStorage as f, debounce as pe, setTablePageStorage as de } from "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
const me = { class: "main-container" }, ue = { class: "flex justify-between items-center" }, ce = { class: "text-page-title" }, ge = { class: "mt-[10px]" }, _e = { class: "mt-[16px] flex justify-end" }, Le = /* @__PURE__ */ W({
  __name: "label_group_list",
  setup(fe) {
    const P = se(), k = ie(), L = P.meta.title, T = (a) => {
      k.push({ path: a });
    }, e = X({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        group_name: "",
        order: "",
        sort: ""
      }
    }), b = C(), D = (a) => {
      let t = "";
      a.order == "ascending" ? t = "asc" : a.order == "descending" && (t = "desc"), t && (e.searchParam.order = a.prop, e.searchParam.sort = t), i();
    }, i = (a = 1) => {
      e.loading = !0, e.page = a, ae({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((t) => {
        e.loading = !1, e.data = t.data.data, e.total = t.data.total, de(e.page, e.limit, e.searchParam);
      }).catch(() => {
        e.loading = !1;
      });
    };
    i(f(e.searchParam).page);
    const m = C(null), G = () => {
      m.value.setFormData(), m.value.showDialog = !0;
    }, w = (a) => {
      m.value.setFormData(a), m.value.showDialog = !0;
    }, V = (a) => {
      ne.confirm(
        l("labelGroupDeleteTips"),
        l("warning"),
        {
          confirmButtonText: l("confirm"),
          cancelButtonText: l("cancel"),
          type: "warning"
        }
      ).then(() => {
        oe(a).then(() => {
          i(f(e.searchParam).page);
        }).catch(() => {
        });
      });
    }, $ = pe((a, t) => {
      if (isNaN(a) || !/^\d{0,8}$/.test(a)) {
        le({
          type: "warning",
          message: `${l("sortTips")}`
        });
        return;
      }
      a > 99999999 && (t.sort = 99999999), te({
        group_id: t.group_id,
        sort: a
      }).then((d) => {
      });
    }), B = (a) => {
      a && (a.resetFields(), i());
    };
    return (a, t) => {
      const d = M, h = R, N = j, v = I, y = q, F = A, x = H, _ = J, z = K, S = O, U = Q;
      return E(), Y("div", me, [
        o(x, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            u("div", ue, [
              u("span", ce, p(r(L)), 1),
              o(d, {
                type: "primary",
                onClick: G
              }, {
                default: s(() => [
                  c(p(r(l)("addLabelGroup")), 1)
                ]),
                _: 1
              })
            ]),
            o(N, {
              "model-value": "/shop/goods/label/group",
              onTabChange: T
            }, {
              default: s(() => [
                o(h, {
                  label: r(l)("tabGoodsLabel"),
                  name: "/shop/goods/label"
                }, null, 8, ["label"]),
                o(h, {
                  label: r(l)("tabGoodsLabelGroup"),
                  name: "/shop/goods/label/group"
                }, null, 8, ["label"])
              ]),
              _: 1
            }),
            o(x, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: s(() => [
                o(F, {
                  inline: !0,
                  model: e.searchParam,
                  ref_key: "searchFormRef",
                  ref: b
                }, {
                  default: s(() => [
                    o(y, {
                      label: r(l)("groupName"),
                      prop: "group_name"
                    }, {
                      default: s(() => [
                        o(v, {
                          modelValue: e.searchParam.group_name,
                          "onUpdate:modelValue": t[0] || (t[0] = (n) => e.searchParam.group_name = n),
                          modelModifiers: { trim: !0 },
                          placeholder: r(l)("groupNamePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    o(y, null, {
                      default: s(() => [
                        o(d, {
                          type: "primary",
                          onClick: t[1] || (t[1] = (n) => i())
                        }, {
                          default: s(() => [
                            c(p(r(l)("search")), 1)
                          ]),
                          _: 1
                        }),
                        o(d, {
                          onClick: t[2] || (t[2] = (n) => B(b.value))
                        }, {
                          default: s(() => [
                            c(p(r(l)("reset")), 1)
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
            u("div", ge, [
              Z((E(), ee(z, {
                data: e.data,
                size: "large",
                onSortChange: D
              }, {
                empty: s(() => [
                  u("span", null, p(e.loading ? "" : r(l)("emptyData")), 1)
                ]),
                default: s(() => [
                  o(_, {
                    prop: "group_name",
                    label: r(l)("groupName"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  o(_, {
                    prop: "sort",
                    label: r(l)("sort"),
                    "min-width": "120",
                    sortable: "custom"
                  }, {
                    default: s(({ row: n }) => [
                      o(v, {
                        modelValue: n.sort,
                        "onUpdate:modelValue": (g) => n.sort = g,
                        modelModifiers: { trim: !0 },
                        class: "!w-[100px]",
                        maxlength: "8",
                        onBlur: (g) => r($)(n.sort, n)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  o(_, {
                    label: r(l)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "120"
                  }, {
                    default: s(({ row: n }) => [
                      o(d, {
                        type: "primary",
                        link: "",
                        onClick: (g) => w(n)
                      }, {
                        default: s(() => [
                          c(p(r(l)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      o(d, {
                        type: "primary",
                        link: "",
                        onClick: (g) => V(n.group_id)
                      }, {
                        default: s(() => [
                          c(p(r(l)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [U, e.loading]
              ]),
              u("div", _e, [
                o(S, {
                  "current-page": e.page,
                  "onUpdate:current-page": t[3] || (t[3] = (n) => e.page = n),
                  "page-size": e.limit,
                  "onUpdate:page-size": t[4] || (t[4] = (n) => e.limit = n),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: e.total,
                  onSizeChange: t[5] || (t[5] = (n) => i()),
                  onCurrentChange: i
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ]),
            o(re, {
              ref_key: "editLabelGroupDialog",
              ref: m,
              onComplete: t[6] || (t[6] = (n) => i(r(f)(e.searchParam).page))
            }, null, 512)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  Le as default
};
