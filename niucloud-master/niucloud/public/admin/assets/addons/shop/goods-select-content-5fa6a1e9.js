import { ElInput as ee, ElFormItem as oe, ElCascader as te, ElOption as ae, ElSelect as se, ElButton as le, ElForm as de, ElCheckbox as ne, ElImage as ie, ElPagination as ce, ElLoadingDirective as re } from "element-plus/es";
import { defineComponent as pe, computed as L, reactive as C, ref as ge, openBlock as m, createElementBlock as y, createVNode as r, withCtx as u, unref as f, Fragment as T, renderList as $, createBlock as j, createTextVNode as A, toDisplayString as x, withDirectives as me, createElementVNode as n, createCommentVNode as F, createStaticVNode as _e, nextTick as ue, pushScopeId as fe, popScopeId as he } from "vue";
import { _ as z } from "./goods_default-bd0cc1e2.js";
import { t as p } from "/admin/assets/shared/admin-lang.js";
import { img as ve, deepClone as ye } from "/admin/assets/shared/core-shared.js";
import { ElMessage as U } from "element-plus";
import { a as xe, c as be, d as ke, e as Pe } from "./goods-d2a56d58.js";
import { c as S } from "./cloneDeep-70d647ec.js";
import { _ as Ce } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const O = (b) => (fe("data-v-63b2d4af"), b = b(), he(), b), Se = { class: "table w-[100%]" }, Ge = /* @__PURE__ */ _e('<div class="table-head flex items-center bg-[#f5f7f9] py-[8px]" data-v-63b2d4af><div class="w-[3%]" data-v-63b2d4af></div><div class="w-[7%]" data-v-63b2d4af></div><div class="w-[50%]" data-v-63b2d4af>商品信息</div><div class="w-[20%]" data-v-63b2d4af>商品价格</div><div class="w-[20%]" data-v-63b2d4af>库存</div></div>', 1), Ee = { class: "table-body h-[350px] overflow-y-auto" }, Ve = { class: "flex items-center border-solid border-[#e5e7eb] py-[5px] border-b-[1px]" }, Ie = /* @__PURE__ */ O(() => /* @__PURE__ */ n("div", { class: "w-[3%]" }, null, -1)), Oe = { class: "w-[7%]" }, we = { class: "flex items-center cursor-pointer w-[50%]" }, Ne = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, De = /* @__PURE__ */ O(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: z
  })
], -1)), Le = {
  key: 1,
  class: "w-[60px] h-[60px]",
  src: z,
  fit: "contain"
}, Te = { class: "ml-2 flex flex-col items-start" }, $e = ["title"], je = { class: "text-primary text-[12px]" }, Ae = {
  key: 0,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, Fe = { class: "w-[20%]" }, Ue = { class: "w-[20%]" }, ze = {
  key: 0,
  class: "h-[60px] flex items-center justify-center border-solid border-[#e5e7eb] py-[12px] border-b-[1px]"
}, Be = { class: "mt-[16px] flex" }, Me = /* @__PURE__ */ O(() => /* @__PURE__ */ n("div", { class: "flex items-center flex-1" }, null, -1)), He = /* @__PURE__ */ pe({
  __name: "goods-select-content",
  props: {
    goodsIds: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    }
  },
  setup(b, { expose: B }) {
    const c = b, h = "goods_", i = L(() => c.goodsIds), d = C({}), _ = C([]), G = L(() => Object.keys(d).length), o = C({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        keyword: "",
        goods_category: [],
        goods_ids: "",
        verify_goods_ids: "",
        goods_type: "",
        is_gift: 0
      }
    }), w = ge(), E = C([]), N = C([]), M = () => {
      xe().then((a) => {
        const e = a.data;
        if (e) {
          const l = [];
          e.forEach((s) => {
            const g = [];
            s.child_list && s.child_list.forEach((v) => {
              g.push({
                value: v.category_id,
                label: v.category_name
              });
            }), l.push({
              value: s.category_id,
              label: s.category_name,
              children: g
            });
          }), E.splice(0, E.length, ...l);
        }
      }), be().then((a) => {
        const e = a.data;
        if (e)
          for (const l in e)
            N.push(e[l]);
      });
    }, H = (a, e) => {
      if (a ? (_.push(e.goods_id), d[h + e.goods_id] = ye(e)) : (_.splice(_.indexOf(e.goods_id), 1), delete d[h + e.goods_id]), c.max && c.max > 0 && Object.keys(d).length > 0 && Object.keys(d).length > c.max) {
        let l = Object.keys(d).length;
        l = l - c.max, S(_).forEach((g, v, D) => {
          if (v < l) {
            let P = _.indexOf(g);
            delete d[h + _[P]], _.splice(P, 1);
          }
        }), V();
      }
    }, k = (a = 1, e = null) => {
      o.loading = !0, o.data = [], o.page = a;
      const l = S(o.searchParam);
      ke({
        page: o.page,
        limit: o.limit,
        ...l
      }).then((s) => {
        let g = S(s.data.data);
        g.forEach((v) => {
          v.secondLevelCheckAll = !1;
        }), e && e(s.data.verify_goods_ids, s.data.select_goods_list), V(), o.data = g, o.total = s.data.total, o.loading = !1;
      }).catch(() => {
        o.loading = !1;
      });
    }, V = () => {
      ue(() => {
        for (let a = 0; a < o.data.length; a++)
          o.data[a].secondLevelCheckAll = !1, d[h + o.data[a].goods_id] && (o.data[a].secondLevelCheckAll = !0);
      });
    }, R = (a) => {
      a && (a.resetFields(), k());
    }, q = () => {
      for (let a in d)
        delete d[a];
      o.searchParam.verify_goods_ids = i.value, J(), k(1, (a) => {
        if (i.value && i.value.length && (i.value.splice(0, i.value.length, ...a), _.splice(0, _.length, ...a), Object.keys(d).length))
          for (let e in d) {
            let l = Number(e.split(h)[1]);
            i.value.indexOf(l) == -1 && delete d[e];
          }
      });
    }, J = () => {
      const a = S(o.searchParam);
      Pe({ ...a }).then((e) => {
        const l = e.data;
        for (let s = 0; s < l.length; s++)
          i.value.indexOf(l[s].goods_id) != -1 && (d[h + l[s].goods_id] = l[s]);
        if (Object.keys(d).length && i.value.length)
          for (let s in d) {
            let g = Number(s.split(h)[1]);
            i.value.indexOf(g) == -1 && delete d[s];
          }
        V();
      });
    };
    return M(), q(), B({
      getData: () => {
        if (c.min && G.value < c.min) {
          U({
            type: "warning",
            message: `${p("goodsSelectPopupGoodsMinTip")}${c.min}${p("goodsSelectPopupPiece")}`
          });
          return;
        }
        if (c.max && c.max > 0 && G.value && G.value > c.max) {
          U({
            type: "warning",
            message: `${p("goodsSelectPopupGoodsMaxTip")}${c.max}${p("goodsSelectPopupPiece")}`
          });
          return;
        }
        let a = [];
        for (let l in d)
          a.push(parseInt(l.replace(h, "")));
        i.value.splice(0, i.value.length, ...a);
        let e = d["goods_" + i.value];
        return {
          name: "SHOP_GOODS_DETAIL",
          title: e.goods_name,
          url: `/addon/shop/pages/goods/detail?goods_id=${e.goods_id}`,
          action: "",
          goodsIds: i.value
        };
      }
    }), (a, e) => {
      const l = ee, s = oe, g = te, v = ae, D = se, P = le, K = de, Q = ne, W = ie, X = ce, Y = re;
      return m(), y("div", null, [
        r(K, {
          inline: !0,
          model: o.searchParam,
          ref_key: "searchFormRef",
          ref: w
        }, {
          default: u(() => [
            r(s, {
              label: f(p)("goodsSelectPopupGoodsName"),
              prop: "keyword",
              class: "form-item-wrap"
            }, {
              default: u(() => [
                r(l, {
                  modelValue: o.searchParam.keyword,
                  "onUpdate:modelValue": e[0] || (e[0] = (t) => o.searchParam.keyword = t),
                  modelModifiers: { trim: !0 },
                  placeholder: f(p)("goodsSelectPopupGoodsNamePlaceholder"),
                  maxlength: "60"
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            r(s, {
              label: f(p)("goodsSelectPopupGoodsCategory"),
              prop: "goods_category",
              class: "form-item-wrap"
            }, {
              default: u(() => [
                r(g, {
                  modelValue: o.searchParam.goods_category,
                  "onUpdate:modelValue": e[1] || (e[1] = (t) => o.searchParam.goods_category = t),
                  options: E,
                  placeholder: f(p)("goodsSelectPopupGoodsCategoryPlaceholder"),
                  clearable: "",
                  props: { value: "value", label: "label", emitPath: !1 }
                }, null, 8, ["modelValue", "options", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            r(s, {
              label: f(p)("goodsSelectPopupGoodsType"),
              prop: "goods_type",
              class: "form-item-wrap"
            }, {
              default: u(() => [
                r(D, {
                  modelValue: o.searchParam.goods_type,
                  "onUpdate:modelValue": e[2] || (e[2] = (t) => o.searchParam.goods_type = t),
                  placeholder: f(p)("goodsSelectPopupGoodsTypePlaceholder"),
                  clearable: ""
                }, {
                  default: u(() => [
                    (m(!0), y(T, null, $(N, (t) => (m(), j(v, {
                      key: t.type,
                      label: t.name,
                      value: t.type
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            r(s, { class: "form-item-wrap" }, {
              default: u(() => [
                r(P, {
                  type: "primary",
                  onClick: e[3] || (e[3] = (t) => k())
                }, {
                  default: u(() => [
                    A(x(f(p)("search")), 1)
                  ]),
                  _: 1
                }),
                r(P, {
                  onClick: e[4] || (e[4] = (t) => R(w.value))
                }, {
                  default: u(() => [
                    A(x(f(p)("reset")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        me((m(), y("div", Se, [
          Ge,
          n("div", Ee, [
            (m(!0), y(T, null, $(o.data, (t, Z) => (m(), y("div", {
              key: Z,
              class: "flex flex-col"
            }, [
              n("div", Ve, [
                Ie,
                n("div", Oe, [
                  r(Q, {
                    modelValue: t.secondLevelCheckAll,
                    "onUpdate:modelValue": (I) => t.secondLevelCheckAll = I,
                    onChange: (I) => H(I, t)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                ]),
                n("div", we, [
                  n("div", Ne, [
                    t.goods_cover_thumb_small ? (m(), j(W, {
                      key: 0,
                      class: "w-[60px] h-[60px]",
                      src: f(ve)(t.goods_cover_thumb_small),
                      fit: "contain"
                    }, {
                      error: u(() => [
                        De
                      ]),
                      _: 2
                    }, 1032, ["src"])) : (m(), y("img", Le))
                  ]),
                  n("div", Te, [
                    n("span", {
                      title: t.goods_name,
                      class: "multi-hidden leading-[1.4]"
                    }, x(t.goods_name), 9, $e),
                    n("span", je, x(t.goods_type_name), 1),
                    t.is_gift == 1 ? (m(), y("span", Ae, "赠品")) : F("", !0)
                  ])
                ]),
                n("div", Fe, "￥" + x(t.goodsSku.price), 1),
                n("div", Ue, x(t.stock), 1)
              ])
            ]))), 128)),
            !o.data.length && !o.loading ? (m(), y("div", ze, "暂无数据")) : F("", !0)
          ])
        ])), [
          [Y, o.loading]
        ]),
        n("div", Be, [
          Me,
          r(X, {
            "current-page": o.page,
            "onUpdate:current-page": e[5] || (e[5] = (t) => o.page = t),
            "page-size": o.limit,
            "onUpdate:page-size": e[6] || (e[6] = (t) => o.limit = t),
            layout: "total, sizes, prev, pager, next, jumper",
            total: o.total,
            onSizeChange: e[7] || (e[7] = (t) => k()),
            onCurrentChange: k
          }, null, 8, ["current-page", "page-size", "total"])
        ])
      ]);
    };
  }
});
const ao = /* @__PURE__ */ Ce(He, [["__scopeId", "data-v-63b2d4af"]]);
export {
  ao as default
};
