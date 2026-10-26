import { ElButton as Z, ElInput as J, ElFormItem as K, ElForm as j, ElCard as W, ElTableColumn as N, ElImage as T, ElTable as V, ElPagination as U, ElLoadingDirective as P } from "element-plus/es";
import { defineComponent as z, reactive as O, ref as B, openBlock as x, createElementBlock as Y, createVNode as a, withCtx as r, createElementVNode as d, toDisplayString as s, unref as i, createTextVNode as g, withDirectives as G, createBlock as X, normalizeStyle as q } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { n as H, o as _, p as $ } from "./goods-d2a56d58.js";
import { getTablePageStorage as f, debounce as ee, img as te, setTablePageStorage as oe } from "/admin/assets/shared/core-shared.js";
import { ElMessage as ae, ElMessageBox as ne } from "element-plus";
import { _ as re } from "./brand-edit.vue_vue_type_style_index_0_lang-67c5c050.js";
import { useRoute as le } from "vue-router";
import "/admin/assets/shared/core-shared.js";
import "./index-36e25503.js";
import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./sortable.esm-fc069a97.js";
const ie = "data:image/png;base64,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", se = { class: "main-container" }, de = { class: "flex justify-between items-center" }, me = { class: "text-page-title" }, pe = { class: "mt-[10px]" }, ce = { key: 1 }, ge = { class: "h-[30px]" }, ue = /* @__PURE__ */ d("div", { class: "image-slot" }, [
  /* @__PURE__ */ d("img", {
    class: "w-[30px] h-[30px]",
    src: ie
  })
], -1), be = { class: "mt-[16px] flex justify-end" }, Ze = /* @__PURE__ */ z({
  __name: "brand_list",
  setup(xe) {
    const M = le().meta.title, e = O({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        brand_name: "",
        order: "",
        sort: ""
      }
    }), h = B(), w = (n) => {
      let o = "";
      n.order == "ascending" ? o = "asc" : n.order == "descending" && (o = "desc"), o && (e.searchParam.order = n.prop, e.searchParam.sort = o), m();
    }, m = (n = 1) => {
      e.loading = !0, e.page = n, _({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((o) => {
        e.loading = !1, e.data = o.data.data, e.total = o.data.total, oe(e.page, e.limit, e.searchParam);
      }).catch(() => {
        e.loading = !1;
      });
    };
    m(f(e.searchParam).page);
    const c = B(null), I = () => {
      c.value.setFormData(), c.value.showDialog = !0;
    }, y = (n) => {
      c.value.setFormData(n), c.value.showDialog = !0;
    }, F = (n) => {
      ne.confirm(
        l("brandDeleteTips"),
        l("warning"),
        {
          confirmButtonText: l("confirm"),
          cancelButtonText: l("cancel"),
          type: "warning"
        }
      ).then(() => {
        $(n).then(() => {
          m(f(e.searchParam).page);
        }).catch(() => {
        });
      });
    }, D = ee((n, o) => {
      if (isNaN(n) || !/^\d{0,8}$/.test(n)) {
        ae({
          type: "warning",
          message: `${l("sortTips")}`
        });
        return;
      }
      n > 99999999 && (o.sort = 99999999), H({
        brand_id: o.brand_id,
        sort: n
      }).then((p) => {
      });
    }), v = (n) => {
      n && (n.resetFields(), m());
    };
    return (n, o) => {
      const p = Z, A = J, E = K, S = j, C = W, u = N, L = T, R = V, k = U, Q = P;
      return x(), Y("div", se, [
        a(C, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: r(() => [
            d("div", de, [
              d("span", me, s(i(M)), 1),
              a(p, {
                type: "primary",
                onClick: I
              }, {
                default: r(() => [
                  g(s(i(l)("addBrand")), 1)
                ]),
                _: 1
              })
            ]),
            a(C, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: r(() => [
                a(S, {
                  inline: !0,
                  model: e.searchParam,
                  ref_key: "searchFormRef",
                  ref: h
                }, {
                  default: r(() => [
                    a(E, {
                      label: i(l)("brandName"),
                      prop: "brand_name"
                    }, {
                      default: r(() => [
                        a(A, {
                          modelValue: e.searchParam.brand_name,
                          "onUpdate:modelValue": o[0] || (o[0] = (t) => e.searchParam.brand_name = t),
                          modelModifiers: { trim: !0 },
                          placeholder: i(l)("brandNamePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(E, null, {
                      default: r(() => [
                        a(p, {
                          type: "primary",
                          onClick: o[1] || (o[1] = (t) => m())
                        }, {
                          default: r(() => [
                            g(s(i(l)("search")), 1)
                          ]),
                          _: 1
                        }),
                        a(p, {
                          onClick: o[2] || (o[2] = (t) => v(h.value))
                        }, {
                          default: r(() => [
                            g(s(i(l)("reset")), 1)
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
            d("div", pe, [
              G((x(), X(R, {
                data: e.data,
                size: "large",
                onSortChange: w
              }, {
                empty: r(() => [
                  d("span", null, s(e.loading ? "" : i(l)("emptyData")), 1)
                ]),
                default: r(() => [
                  a(u, {
                    prop: "brand_name",
                    label: i(l)("brandName"),
                    "min-width": "120"
                  }, {
                    default: r(({ row: t }) => [
                      t.color_json ? (x(), Y("div", {
                        key: 0,
                        class: "inline-block px-[10px] text-[12px] rounded-[4px] box-border whitespace-nowrap h-[28px] leading-[28px]",
                        style: q({ color: t.color_json.text_color, backgroundColor: t.color_json.bg_color, border: t.color_json.border_color ? "1px solid " + t.color_json.border_color : "none" })
                      }, [
                        d("span", null, s(t.brand_name), 1)
                      ], 4)) : (x(), Y("div", ce, s(t.brand_name), 1))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(u, {
                    label: i(l)("logo"),
                    "min-width": "120"
                  }, {
                    default: r(({ row: t }) => [
                      d("div", ge, [
                        a(L, {
                          class: "w-[30px] h-[30px]",
                          src: i(te)(t.logo),
                          fit: "contain"
                        }, {
                          error: r(() => [
                            ue
                          ]),
                          _: 2
                        }, 1032, ["src"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(u, {
                    prop: "sort",
                    label: i(l)("sort"),
                    "min-width": "120",
                    sortable: "custom"
                  }, {
                    default: r(({ row: t }) => [
                      a(A, {
                        modelValue: t.sort,
                        "onUpdate:modelValue": (b) => t.sort = b,
                        modelModifiers: { trim: !0 },
                        class: "!w-[100px]",
                        maxlength: "8",
                        onBlur: (b) => i(D)(t.sort, t)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(u, {
                    label: i(l)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "120"
                  }, {
                    default: r(({ row: t }) => [
                      a(p, {
                        type: "primary",
                        link: "",
                        onClick: (b) => y(t)
                      }, {
                        default: r(() => [
                          g(s(i(l)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      a(p, {
                        type: "primary",
                        link: "",
                        onClick: (b) => F(t.brand_id)
                      }, {
                        default: r(() => [
                          g(s(i(l)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [Q, e.loading]
              ]),
              d("div", be, [
                a(k, {
                  "current-page": e.page,
                  "onUpdate:current-page": o[3] || (o[3] = (t) => e.page = t),
                  "page-size": e.limit,
                  "onUpdate:page-size": o[4] || (o[4] = (t) => e.limit = t),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: e.total,
                  onSizeChange: o[5] || (o[5] = (t) => m()),
                  onCurrentChange: m
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ]),
            a(re, {
              ref_key: "editBrandDialog",
              ref: c,
              onComplete: o[6] || (o[6] = (t) => m(i(f)(e.searchParam).page))
            }, null, 512)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  Ze as default
};
