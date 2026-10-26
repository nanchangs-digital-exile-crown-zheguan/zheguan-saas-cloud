import { ElInput as O, ElFormItem as q, ElOption as H, ElSelect as J, ElButton as K, ElForm as Q, ElTableColumn as W, ElImage as X, ElTable as Y, ElPagination as Z, ElDialog as ee, ElLoadingDirective as te } from "element-plus/es";
import { defineComponent as oe, ref as d, reactive as le, openBlock as p, createBlock as v, unref as n, withCtx as l, createElementVNode as r, createVNode as s, createTextVNode as P, toDisplayString as i, createElementBlock as x, Fragment as ae, renderList as ne, withDirectives as se, createCommentVNode as w, nextTick as ie } from "vue";
import { _ as G } from "./goods_default-bd0cc1e2.js";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { img as re } from "/admin/assets/shared/core-shared.js";
import { a as ce, b as pe } from "./marketing-f8ec8b08.js";
import { ElMessage as de } from "element-plus";
const me = { class: "mt-[10px]" }, ue = { class: "flex items-center cursor-pointer" }, ge = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, _e = /* @__PURE__ */ r("div", { class: "image-slot" }, [
  /* @__PURE__ */ r("img", {
    class: "w-[60px] h-[60px]",
    src: G
  })
], -1), fe = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: G,
  fit: "contain"
}, he = { class: "ml-2" }, ve = ["title"], Pe = { key: 0 }, xe = { key: 1 }, Se = { class: "mt-[16px] flex justify-end" }, be = { class: "dialog-footer" }, Fe = /* @__PURE__ */ oe({
  __name: "goods-select-popup",
  props: {
    max: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    }
  },
  emits: ["select"],
  setup(D, { expose: F, emit: N }) {
    const S = D, m = d(!1), u = d(), t = le({
      page: 1,
      limit: 10,
      total: 0,
      loading: !1,
      data: [],
      searchParam: {
        name: "",
        status: "",
        create_time: []
      }
    }), k = d(), g = (c = 1) => {
      t.loading = !0, t.page = c, ce({
        page: t.page,
        limit: t.limit,
        ...t.searchParam
      }).then((o) => {
        t.loading = !1, t.data = o.data.data, t.total = o.data.total, b.value.length && ie(() => {
          t.data.forEach((_) => {
            b.value.includes(_.id) && u.value.toggleRowSelection(_, !0);
          });
        });
      }).catch(() => {
        t.loading = !1;
      });
    }, C = d([]);
    (() => {
      pe().then((c) => {
        C.value = c.data;
      });
    })();
    const b = d([]), U = (c) => {
      b.value = c, m.value = !0, g();
    }, y = d([]), $ = (c) => {
      y.value = c;
    }, z = () => {
      if (S.min && y.value.length < S.min) {
        de({
          type: "warning",
          message: `${a("goodsSelectPopupGoodsMinTip")}${S.min}${a("goodsSelectPopupPiece")}`
        });
        return;
      }
      N("select", y.value), m.value = !1, u.value && u.value.clearSelection();
    };
    return F({
      show: U
    }), (c, o) => {
      const _ = O, E = q, R = H, T = J, f = K, A = Q, h = W, B = X, I = Y, L = Z, j = ee, M = te;
      return p(), v(j, {
        modelValue: m.value,
        "onUpdate:modelValue": o[8] || (o[8] = (e) => m.value = e),
        title: n(a)("goodsSelectPopupSelectGoodsDialog"),
        width: "60%",
        "destroy-on-close": !0
      }, {
        footer: l(() => [
          r("span", be, [
            s(f, {
              onClick: o[7] || (o[7] = (e) => m.value = !1)
            }, {
              default: l(() => [
                P(i(n(a)("cancel")), 1)
              ]),
              _: 1
            }),
            s(f, {
              type: "primary",
              onClick: z
            }, {
              default: l(() => [
                P(i(n(a)("confirm")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: l(() => [
          s(A, {
            inline: !0,
            model: t.searchParam,
            ref_key: "searchFormRef",
            ref: k
          }, {
            default: l(() => [
              s(E, {
                label: n(a)("goodsSelectPopupGoodsName"),
                prop: "active_name"
              }, {
                default: l(() => [
                  s(_, {
                    modelValue: t.searchParam.name,
                    "onUpdate:modelValue": o[0] || (o[0] = (e) => t.searchParam.name = e),
                    modelModifiers: { trim: !0 },
                    placeholder: n(a)("goodsSelectPopupGoodsNamePlaceholder")
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(E, {
                label: n(a)("status"),
                prop: "status"
              }, {
                default: l(() => [
                  s(T, {
                    modelValue: t.searchParam.status,
                    "onUpdate:modelValue": o[1] || (o[1] = (e) => t.searchParam.status = e),
                    clearable: "",
                    placeholder: n(a)("goodsSelectPopupGoodsStatusPlaceholder"),
                    class: "input-item"
                  }, {
                    default: l(() => [
                      (p(!0), x(ae, null, ne(C.value, (e, V) => (p(), v(R, {
                        key: V,
                        label: e,
                        value: V
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(E, null, {
                default: l(() => [
                  s(f, {
                    type: "primary",
                    onClick: o[2] || (o[2] = (e) => g())
                  }, {
                    default: l(() => [
                      P(i(n(a)("search")), 1)
                    ]),
                    _: 1
                  }),
                  s(f, {
                    onClick: o[3] || (o[3] = (e) => c.resetForm(k.value))
                  }, {
                    default: l(() => [
                      P(i(n(a)("reset")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"]),
          r("div", me, [
            se((p(), v(I, {
              data: t.data,
              ref_key: "tableRef",
              ref: u,
              "row-key": "id",
              size: "large",
              onSelectionChange: $,
              "max-height": "500"
            }, {
              empty: l(() => [
                r("span", null, i(t.loading ? "" : n(a)("emptyData")), 1)
              ]),
              default: l(() => [
                s(h, {
                  type: "selection",
                  width: "55",
                  "reserve-selection": ""
                }),
                s(h, {
                  label: n(a)("goodsSelectPopupGoodsInfo"),
                  "min-width": "130"
                }, {
                  default: l(({ row: e }) => [
                    r("div", ue, [
                      r("div", ge, [
                        e.image ? (p(), v(B, {
                          key: 0,
                          class: "w-[60px] h-[60px]",
                          src: n(re)(e.image),
                          fit: "contain"
                        }, {
                          error: l(() => [
                            _e
                          ]),
                          _: 2
                        }, 1032, ["src"])) : (p(), x("img", fe))
                      ]),
                      r("div", he, [
                        r("span", {
                          title: e.names,
                          class: "multi-hidden"
                        }, i(e.names), 9, ve)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                s(h, {
                  label: n(a)("goodsSelectPopupPrice"),
                  "min-width": "130"
                }, {
                  default: l(({ row: e }) => [
                    e.point ? (p(), x("p", Pe, i(e.point) + i(n(a)("goodsSelectPopupGoodsPointUnit")), 1)) : w("", !0),
                    e.price ? (p(), x("p", xe, i(e.price) + i(n(a)("goodsSelectPopupGoodsPriceUnit")), 1)) : w("", !0)
                  ]),
                  _: 1
                }, 8, ["label"]),
                s(h, {
                  label: n(a)("goodsSelectPopupStock"),
                  "min-width": "130",
                  align: "right"
                }, {
                  default: l(({ row: e }) => [
                    r("span", null, i(e.stock), 1)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [M, t.loading]
            ]),
            r("div", Se, [
              s(L, {
                "current-page": t.page,
                "onUpdate:current-page": o[4] || (o[4] = (e) => t.page = e),
                "page-size": t.limit,
                "onUpdate:page-size": o[5] || (o[5] = (e) => t.limit = e),
                layout: "total, sizes, prev, pager, next, jumper",
                total: t.total,
                onSizeChange: o[6] || (o[6] = (e) => g()),
                onCurrentChange: g
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  Fe as _
};
