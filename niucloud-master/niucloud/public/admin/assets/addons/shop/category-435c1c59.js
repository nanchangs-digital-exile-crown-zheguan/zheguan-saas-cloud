import { ElButton as A, ElTabPane as O, ElTabs as H, ElTableColumn as J, ElImage as K, ElTag as Q, ElTable as U, ElCard as W, ElLoadingDirective as X } from "element-plus/es";
import { defineComponent as Y, reactive as Z, onMounted as ee, nextTick as te, ref as T, openBlock as S, createElementBlock as oe, createVNode as l, withCtx as i, createElementVNode as u, toDisplayString as m, unref as c, createTextVNode as v, withDirectives as ae, createBlock as le, pushScopeId as ne, popScopeId as se } from "vue";
import { _ as re } from "./category_default-8b25c230.js";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { a as ie, u as ce, t as de, v as _e } from "./goods-d2a56d58.js";
import { img as pe } from "/admin/assets/shared/core-shared.js";
import { ElMessageBox as ge } from "element-plus";
import { _ as ue } from "./category-edit.vue_vue_type_style_index_0_lang-b48591fb.js";
import { useRoute as me, useRouter as fe } from "vue-router";
import { S as he } from "./sortable.esm-fc069a97.js";
import { u as ye, _ as ve } from "./index.vue_vue_type_script_setup_true_lang-0600dfed.js";
import { c as I } from "./cloneDeep-70d647ec.js";
import { _ as be } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./index-36e25503.js";
import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./browser-b31b1ebf.js";
import "./isArrayLike-62604998.js";
const B = (b) => (ne("data-v-25f60042"), b = b(), se(), b), xe = { class: "main-container" }, we = { class: "flex justify-between items-center mb-[5px]" }, Ce = { class: "text-page-title" }, ke = { class: "mt-[10px]" }, Ee = /* @__PURE__ */ B(() => /* @__PURE__ */ u("i", { class: "order-0 iconfont icontuodong vues-rank mr-[8px]" }, null, -1)), Te = { class: "order-2" }, Ie = { class: "h-[30px]" }, De = /* @__PURE__ */ B(() => /* @__PURE__ */ u("div", { class: "image-slot" }, [
  /* @__PURE__ */ u("img", {
    class: "w-[30px] h-[30px]",
    src: re
  })
], -1)), Re = /* @__PURE__ */ Y({
  __name: "category",
  setup(b) {
    const $ = me().meta.title, D = ye(), s = Z({
      loading: !0,
      data: []
    });
    ee(() => {
      te(() => {
        N();
      }), x();
    });
    const g = T([]), N = () => {
      const e = D.value.$el.querySelector(".el-table__body-wrapper tbody");
      he.create(e, {
        handle: ".vues-rank",
        animation: 300,
        onMove: ({ dragged: a, related: r }) => {
          const d = g.value[a.rowIndex], _ = g.value[r.rowIndex];
          if (d.pid !== _.pid)
            return !1;
        },
        onStart: () => {
          g.value = P(I(s.data));
        },
        onEnd: (a) => {
          var w;
          const r = g.value[a.oldIndex], d = g.value[a.newIndex];
          if (a.oldIndex === a.newIndex || r.pid !== d.pid || g.value.indexOf(r) < 0)
            return !1;
          const t = g.value.splice(a.oldIndex, 1)[0];
          g.value.splice(a.newIndex, 0, t);
          const C = d.pid, k = (w = g.value.filter((p) => p.pid === C)) == null ? void 0 : w.map((p, h) => {
            if (p.level === 1 && p.category_id === t.category_id && (s.data = s.data.filter((o) => o.category_id !== t.category_id), s.data.splice(h, 0, t)), p.level === 2 && p.category_id === t.category_id) {
              const o = s.data.findIndex((E) => E.category_id === p.pid), y = I(s.data[o].child_list.filter((E) => E.category_id !== t.category_id));
              s.data[o].child_list = [], s.data[o].child_list.push(...y), s.data[o].child_list.splice(h, 0, t);
            }
            return {
              category_id: p.category_id,
              // 当前行的唯一标识
              sort: 9999 - h
            };
          });
          j({ category_sort_array: k });
        }
      });
    }, P = (e, a = "child_list") => {
      const r = [], d = (_) => {
        _ && _.length > 0 && _.filter((t) => t).forEach((t) => {
          r.push(t), d(t[a] || []);
        });
      };
      return d(e), r;
    }, x = () => {
      s.loading = !0, ie().then((e) => {
        s.loading = !1, s.data = e.data;
      }).catch(() => {
        s.loading = !1;
      });
    }, j = (e) => {
      ce(e).then((a) => {
        x();
      });
    }, F = (e) => {
      e.is_show = e.is_show === 1 ? 2 : 1;
      const a = I(e);
      delete a.child_list, de(a);
    }, f = T(null), G = () => {
      f.value.setFormData(), f.value.showDialog = !0;
    }, L = (e) => {
      f.value.setFormData(e), f.value.showDialog = !0;
    }, M = (e) => {
      ge.confirm(
        !e.child_list || !e.child_list.length ? n("categoryDeleteTips") : n("categoryDeleteTips1"),
        n("warning"),
        {
          confirmButtonText: n("confirm"),
          cancelButtonText: n("cancel"),
          type: "warning"
        }
      ).then(() => {
        _e(e.category_id).then(() => {
          x();
        }).catch(() => {
        });
      });
    }, R = T(null), V = (e) => {
      var t;
      const a = "/addon/shop/pages/goods/list", r = [
        { name: "curr_goods_category", value: e.category_id }
      ], d = "商品分类推广", _ = "goods_category";
      (t = R.value) == null || t.show(a, r, d, _);
    }, q = fe(), z = (e) => {
      q.push({ path: e });
    };
    return (e, a) => {
      const r = A, d = O, _ = H, t = J, C = K, k = Q, w = U, p = W, h = X;
      return S(), oe("div", xe, [
        l(p, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: i(() => [
            u("div", we, [
              u("span", Ce, m(c($)), 1),
              l(r, {
                type: "primary",
                onClick: G
              }, {
                default: i(() => [
                  v(m(c(n)("addCategory")), 1)
                ]),
                _: 1
              })
            ]),
            l(_, {
              class: "demo-tabs",
              "model-value": "/shop/goods/category",
              onTabChange: z
            }, {
              default: i(() => [
                l(d, {
                  label: c(n)("tabGoodsCategory"),
                  name: "/shop/goods/category"
                }, null, 8, ["label"]),
                l(d, {
                  label: c(n)("tabGoodsCategoryConfig"),
                  name: "/shop/goods/category/config"
                }, null, 8, ["label"])
              ]),
              _: 1
            }),
            u("div", ke, [
              ae((S(), le(w, {
                data: s.data,
                ref_key: "tableRef",
                ref: D,
                size: "large",
                "row-key": "category_id",
                "tree-props": { hasChildren: "hasChildren", children: "child_list" }
              }, {
                empty: i(() => [
                  u("span", null, m(s.loading ? "" : c(n)("emptyData")), 1)
                ]),
                default: i(() => [
                  l(t, {
                    label: c(n)("categoryName"),
                    "min-width": "120"
                  }, {
                    default: i(({ row: o }) => [
                      Ee,
                      u("span", Te, m(o.category_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(t, {
                    label: c(n)("image"),
                    width: "170",
                    align: "left"
                  }, {
                    default: i(({ row: o }) => [
                      u("div", Ie, [
                        l(C, {
                          class: "w-[30px] h-[30px]",
                          src: c(pe)(o.image),
                          fit: "contain"
                        }, {
                          error: i(() => [
                            De
                          ]),
                          _: 2
                        }, 1032, ["src"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(t, {
                    prop: "is_show",
                    label: c(n)("isShow"),
                    width: "400"
                  }, {
                    default: i(({ row: o }) => [
                      l(k, {
                        class: "cursor-pointer",
                        type: o.is_show != 2 ? "success" : "danger",
                        onClick: (y) => F(o)
                      }, {
                        default: i(() => [
                          v(m(o.is_show != 2 ? "是" : "否"), 1)
                        ]),
                        _: 2
                      }, 1032, ["type", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(t, {
                    prop: "sort",
                    label: c(n)("sort"),
                    width: "120"
                  }, null, 8, ["label"]),
                  l(t, {
                    label: c(n)("operation"),
                    fixed: "right",
                    align: "right",
                    width: "200"
                  }, {
                    default: i(({ row: o }) => [
                      l(r, {
                        type: "primary",
                        link: "",
                        onClick: (y) => V(o)
                      }, {
                        default: i(() => [
                          v(m(c(n)("spreadGoodsCategory")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      l(r, {
                        type: "primary",
                        link: "",
                        onClick: (y) => L(o)
                      }, {
                        default: i(() => [
                          v(m(c(n)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      l(r, {
                        type: "primary",
                        link: "",
                        onClick: (y) => M(o)
                      }, {
                        default: i(() => [
                          v(m(c(n)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [h, s.loading]
              ])
            ]),
            l(ue, {
              ref_key: "editCategoryDialog",
              ref: f,
              onComplete: x
            }, null, 512)
          ]),
          _: 1
        }),
        l(ve, {
          ref_key: "spreadPopupRef",
          ref: R
        }, null, 512)
      ]);
    };
  }
});
const et = /* @__PURE__ */ be(Re, [["__scopeId", "data-v-25f60042"]]);
export {
  et as default
};
