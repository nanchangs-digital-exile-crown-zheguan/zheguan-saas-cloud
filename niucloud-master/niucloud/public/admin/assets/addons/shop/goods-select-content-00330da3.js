import { ElInput as j, ElFormItem as B, ElButton as G, ElForm as A, ElCheckbox as L, ElTableColumn as H, ElImage as M, ElTable as X, ElPagination as q, ElLoadingDirective as J } from "element-plus/es";
import { defineComponent as K, ref as E, reactive as k, openBlock as m, createElementBlock as f, createVNode as n, withCtx as l, unref as s, createTextVNode as S, toDisplayString as d, withDirectives as Q, createBlock as y, createElementVNode as r, createCommentVNode as P, nextTick as W, pushScopeId as Y, popScopeId as Z } from "vue";
import { _ as V } from "./goods_default-bd0cc1e2.js";
import { t as c } from "/admin/assets/shared/admin-lang.js";
import { I as ee } from "./marketing-f8ec8b08.js";
import { ElMessage as te } from "element-plus";
import { img as ae } from "/admin/assets/shared/core-shared.js";
import { _ as oe } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const ne = (p) => (Y("data-v-873aeb24"), p = p(), Z(), p), le = { class: "flex items-center cursor-pointer" }, ie = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, se = /* @__PURE__ */ ne(() => /* @__PURE__ */ r("div", { class: "image-slot" }, [
  /* @__PURE__ */ r("img", {
    class: "w-[60px] h-[60px]",
    src: V
  })
], -1)), ce = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: V,
  fit: "contain"
}, de = { class: "ml-2" }, re = ["title"], me = { key: 0 }, pe = { key: 1 }, _e = { class: "mt-[16px] flex justify-end" }, ue = /* @__PURE__ */ K({
  __name: "goods-select-content",
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  setup(p, { expose: I }) {
    const D = p, x = E(), T = E(), e = k({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        names: "",
        verify_goods_ids: []
      }
    }), i = k({
      id: D.id
    }), _ = (o = 1) => {
      e.loading = !0, e.page = o, i.id && (e.searchParam.verify_goods_ids = [i.id]), ee({
        page: e.page,
        limit: e.limit,
        ...e.searchParam
      }).then((a) => {
        e.loading = !1, e.data = a.data.data, e.data.forEach((u) => {
          u.checked = u.id == i.id;
        }), e.total = a.data.total, b();
      }).catch(() => {
        e.loading = !1;
      });
    };
    _();
    const N = (o, a) => {
      o ? i.id = a.id : i.id = 0, b();
    }, b = () => {
      W(() => {
        for (let o = 0; o < e.data.length; o++)
          e.data[o].checked = !1, i.id == e.data[o].id && (e.data[o].checked = !0, Object.assign(i, e.data[o]));
      });
    }, U = (o) => {
      o && (o.resetFields(), _());
    };
    return I({
      getData: () => {
        if (i.id == 0) {
          te({
            type: "warning",
            message: `${c("pointExchangeSelectContentTips")}`
          });
          return;
        }
        return {
          name: "SHOP_GOODS_POINT_EXCHANGE",
          title: i.names,
          url: `/addon/shop/pages/point/detail?id=${i.id}`,
          action: "",
          id: i.id
        };
      }
    }), (o, a) => {
      const u = j, C = B, v = G, z = A, F = L, g = H, w = M, O = X, R = q, $ = J;
      return m(), f("div", null, [
        n(z, {
          inline: !0,
          model: e.searchParam,
          ref_key: "searchFormRef",
          ref: x
        }, {
          default: l(() => [
            n(C, {
              label: s(c)("pointExchangeSelectContentTitle"),
              prop: "names",
              class: "form-item-wrap"
            }, {
              default: l(() => [
                n(u, {
                  modelValue: e.searchParam.names,
                  "onUpdate:modelValue": a[0] || (a[0] = (t) => e.searchParam.names = t),
                  modelModifiers: { trim: !0 },
                  placeholder: s(c)("pointExchangeSelectContentTitlePlaceholder")
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            n(C, { class: "form-item-wrap" }, {
              default: l(() => [
                n(v, {
                  type: "primary",
                  onClick: a[1] || (a[1] = (t) => _())
                }, {
                  default: l(() => [
                    S(d(s(c)("search")), 1)
                  ]),
                  _: 1
                }),
                n(v, {
                  onClick: a[2] || (a[2] = (t) => U(x.value))
                }, {
                  default: l(() => [
                    S(d(s(c)("reset")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        Q((m(), y(O, {
          data: e.data,
          size: "large",
          ref_key: "tableRef",
          ref: T
        }, {
          empty: l(() => [
            r("span", null, d(e.loading ? "" : s(c)("emptyData")), 1)
          ]),
          default: l(() => [
            n(g, { "min-width": "7%" }, {
              default: l(({ row: t }) => [
                n(F, {
                  modelValue: t.checked,
                  "onUpdate:modelValue": (h) => t.checked = h,
                  onChange: (h) => N(h, t)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
              ]),
              _: 1
            }),
            n(g, {
              label: s(c)("pointExchangeSelectContentGoodsInfo"),
              "min-width": "30%"
            }, {
              default: l(({ row: t }) => [
                r("div", le, [
                  r("div", ie, [
                    t.goods_cover_thumb_small ? (m(), y(w, {
                      key: 0,
                      class: "w-[60px] h-[60px]",
                      src: s(ae)(t.goods_cover_thumb_small),
                      fit: "contain"
                    }, {
                      error: l(() => [
                        se
                      ]),
                      _: 2
                    }, 1032, ["src"])) : (m(), f("img", ce))
                  ]),
                  r("div", de, [
                    r("span", {
                      title: t.names,
                      class: "multi-hidden"
                    }, d(t.names), 9, re)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["label"]),
            n(g, {
              label: s(c)("pointExchangeSelectContentPrice"),
              "min-width": "20%"
            }, {
              default: l(({ row: t }) => [
                t.point ? (m(), f("p", me, d(t.point) + d(s(c)("pointExchangeSelectContentPointUnit")), 1)) : P("", !0),
                t.price ? (m(), f("p", pe, d(t.price) + d(s(c)("pointExchangeSelectContentPriceUnit")), 1)) : P("", !0)
              ]),
              _: 1
            }, 8, ["label"]),
            n(g, {
              label: s(c)("pointExchangeSelectContentRedeemedAndSurplus"),
              "min-width": "15%"
            }, {
              default: l(({ row: t }) => [
                r("span", null, d(t.total_exchange_num) + "/" + d(t.stock), 1)
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["data"])), [
          [$, e.loading]
        ]),
        r("div", _e, [
          n(R, {
            "current-page": e.page,
            "onUpdate:current-page": a[3] || (a[3] = (t) => e.page = t),
            "page-size": e.limit,
            "onUpdate:page-size": a[4] || (a[4] = (t) => e.limit = t),
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: a[5] || (a[5] = (t) => _()),
            onCurrentChange: _
          }, null, 8, ["current-page", "page-size", "total"])
        ])
      ]);
    };
  }
});
const ye = /* @__PURE__ */ oe(ue, [["__scopeId", "data-v-873aeb24"]]);
export {
  ye as default
};
