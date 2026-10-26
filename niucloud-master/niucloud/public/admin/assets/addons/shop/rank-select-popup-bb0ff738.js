import { ElButton as q, ElInput as H, ElFormItem as J, ElForm as K, ElTableColumn as Q, ElTable as W, ElPagination as X, ElDialog as Y, ElLoadingDirective as Z } from "element-plus/es";
import { defineComponent as ee, computed as N, ref as x, reactive as R, openBlock as T, createElementBlock as ae, createElementVNode as s, renderSlot as te, createVNode as r, withCtx as p, createTextVNode as h, toDisplayString as d, unref as l, withDirectives as S, vShow as P, createBlock as le, nextTick as ne } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as V } from "element-plus";
import { c as oe } from "./marketing-f8ec8b08.js";
import { c as re } from "./cloneDeep-70d647ec.js";
import { _ as ie } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const se = { class: "inline-block ml-[10px] text-[14px]" }, pe = { class: "text-primary mx-[2px]" }, de = { class: "mt-[16px] flex" }, ce = { class: "flex items-center flex-1" }, me = { class: "mr-[10px]" }, ue = { class: "text-primary mx-[2px]" }, _e = { class: "dialog-footer" }, fe = /* @__PURE__ */ ee({
  __name: "rank-select-popup",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "rankSelect"],
  setup($, { expose: D, emit: b }) {
    const m = $, u = N({
      get() {
        return m.modelValue;
      },
      set(t) {
        b("update:modelValue", t);
      }
    }), g = x(!1), o = R({}), f = N(() => Object.keys(o).length), a = R({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        name: "",
        verify_rank_ids: ""
      }
    }), w = x(), k = x(), z = (t, e) => {
      if (m.max === 1) {
        k.value.clearSelection(), k.value.toggleRowSelection(e, !0);
        for (const i in o)
          delete o[i];
        o["rank_" + e.rank_id] = e;
      } else {
        let i = !1;
        for (let _ = 0; _ < t.length; _++)
          if (t[_].rank_id === e.rank_id) {
            i = !0;
            break;
          }
        i ? o["rank_" + e.rank_id] = e : delete o["rank_" + e.rank_id];
      }
    }, B = (t) => {
      if (m.max == 1) {
        k.value.clearSelection();
        for (const e in o)
          delete o[e];
      } else
        t.length ? t.forEach((e) => {
          o["rank_" + e.rank_id] = e;
        }) : a.data.forEach((e) => {
          delete o["rank_" + e.rank_id];
        });
    }, C = () => {
      ne(() => {
        if (k.value)
          for (let t = 0; t < a.data.length; t++)
            k.value.toggleRowSelection(a.data[t], !1), o["rank_" + a.data[t].rank_id] && k.value.toggleRowSelection(a.data[t], !0);
      });
    }, y = (t = 1, e = null) => {
      a.loading = !0, a.page = t;
      const i = re(a.searchParam);
      oe({
        page: a.page,
        limit: a.limit,
        ...i
      }).then((_) => {
        a.loading = !1, a.data = _.data.data, a.total = _.data.total, e && e(_.data.verify_rank_ids), C();
      }).catch(() => {
        a.loading = !1;
      });
    }, F = (t) => {
      t && (t.resetFields(), a.searchParam.verify_rank_ids = "", a.searchParam.name = "", y());
    }, I = () => {
      a.searchParam.verify_rank_ids = u.value, y(1, (t) => {
        if (u.value) {
          u.value.splice(0, u.value.length, ...t), u.value.forEach((e) => {
            o["rank_" + e] || (o["rank_" + e] = {});
          });
          for (let e = 0; e < a.data.length; e++)
            u.value.indexOf(a.data[e].rank_id) != -1 && (o["rank_" + a.data[e].rank_id] = a.data[e]);
        }
      }), g.value = !0;
    }, L = () => {
      for (const t in o)
        delete o[t];
      C();
    }, G = () => {
      if (m.min && f.value < m.min) {
        V({
          type: "warning",
          message: `${n("rankSelectPopupGoodsMinTip")}${m.min}${n("goodsSelectPopupPiece")}`
        });
        return;
      }
      if (m.max && m.max > 0 && f.value && f.value > m.max) {
        V({
          type: "warning",
          message: `${n("rankSelectPopupGoodsMaxTip")}${m.max}${n("goodsSelectPopupPiece")}`
        });
        return;
      }
      const t = [];
      for (const e in o)
        t.push(parseInt(e.replace("rank_", "")));
      u.value.splice(0, u.value.length, ...t), b("rankSelect", o), g.value = !1;
    };
    return D({
      showDialog: g,
      selectRank: o,
      selectRankNum: f
    }), (t, e) => {
      const i = q, _ = H, E = J, M = K, v = Q, U = W, A = X, j = Y, O = Z;
      return T(), ae("div", null, [
        s("div", { onClick: I }, [
          te(t.$slots, "default", {}, () => [
            r(i, null, {
              default: p(() => [
                h(d(l(n)("rankSelectPopupSelectRankButton")), 1)
              ]),
              _: 1
            }),
            S(s("div", se, [
              s("span", null, d(l(n)("goodsSelectPopupSelect")), 1),
              s("span", pe, d(l(u).length), 1),
              s("span", null, d(l(n)("goodsSelectPopupPiece")), 1)
            ], 512), [
              [P, l(u).length]
            ])
          ], !0)
        ]),
        r(j, {
          modelValue: g.value,
          "onUpdate:modelValue": e[7] || (e[7] = (c) => g.value = c),
          name: l(n)("rankSelect"),
          width: "1000px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: p(() => [
            s("span", _e, [
              r(i, {
                onClick: e[6] || (e[6] = (c) => g.value = !1)
              }, {
                default: p(() => [
                  h(d(l(n)("cancel")), 1)
                ]),
                _: 1
              }),
              r(i, {
                type: "primary",
                onClick: G
              }, {
                default: p(() => [
                  h(d(l(n)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            r(M, {
              inline: !0,
              model: a.searchParam,
              ref_key: "searchFormRef",
              ref: w
            }, {
              default: p(() => [
                r(E, {
                  label: l(n)("rankName"),
                  prop: "keyword",
                  class: "form-item-wrap"
                }, {
                  default: p(() => [
                    r(_, {
                      modelValue: a.searchParam.name,
                      "onUpdate:modelValue": e[0] || (e[0] = (c) => a.searchParam.name = c),
                      modelModifiers: { trim: !0 },
                      placeholder: l(n)("rankNamePlaceholder"),
                      maxlength: "60"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                r(E, { class: "form-item-wrap" }, {
                  default: p(() => [
                    r(i, {
                      type: "primary",
                      onClick: e[1] || (e[1] = (c) => y())
                    }, {
                      default: p(() => [
                        h(d(l(n)("search")), 1)
                      ]),
                      _: 1
                    }),
                    r(i, {
                      onClick: e[2] || (e[2] = (c) => F(w.value))
                    }, {
                      default: p(() => [
                        h(d(l(n)("reset")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            S((T(), le(U, {
              data: a.data,
              size: "large",
              ref_key: "rankListTableRef",
              ref: k,
              "max-height": "400",
              onSelect: z,
              onSelectAll: B
            }, {
              empty: p(() => [
                s("span", null, d(a.loading ? "" : l(n)("emptyData")), 1)
              ]),
              default: p(() => [
                r(v, {
                  type: "selection",
                  width: "55"
                }),
                r(v, {
                  prop: "name",
                  label: l(n)("rankName"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "show_goods_num",
                  label: l(n)("showGoodsNum"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "goods_source_name",
                  label: l(n)("goodsSourceName"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "rule_type_name",
                  label: l(n)("ruleTypeName"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "rank_type_name",
                  label: l(n)("rankTypeName"),
                  "min-width": "130"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [O, a.loading]
            ]),
            s("div", de, [
              s("div", ce, [
                S(s("div", me, [
                  s("span", null, d(l(n)("goodsSelectPopupBeforeTip")), 1),
                  s("span", ue, d(l(f)), 1),
                  s("span", null, d(l(n)("rankSelectPopupAfterTip")), 1)
                ], 512), [
                  [P, l(f)]
                ]),
                S(r(i, {
                  type: "primary",
                  link: "",
                  onClick: L
                }, {
                  default: p(() => [
                    h(d(l(n)("goodsSelectPopupClearGoods")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [P, l(f)]
                ])
              ]),
              r(A, {
                "current-page": a.page,
                "onUpdate:current-page": e[3] || (e[3] = (c) => a.page = c),
                "page-size": a.limit,
                "onUpdate:page-size": e[4] || (e[4] = (c) => a.limit = c),
                layout: "total, sizes, prev, pager, next, jumper",
                total: a.total,
                onSizeChange: e[5] || (e[5] = (c) => y()),
                onCurrentChange: y
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "name"])
      ]);
    };
  }
});
const we = /* @__PURE__ */ ie(fe, [["__scopeId", "data-v-4a62aa8a"]]);
export {
  we as default
};
