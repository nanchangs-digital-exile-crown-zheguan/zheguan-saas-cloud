import { ElButton as ye, ElOption as xe, ElSelect as Ce, ElFormItem as be, ElInput as Se, ElCascader as Le, ElForm as Pe, ElCheckbox as Ve, ElImage as Ee, ElPagination as we, ElDialog as Ae, ElLoadingDirective as Ge } from "element-plus/es";
import { defineComponent as Oe, ref as G, computed as ee, reactive as O, openBlock as v, createElementBlock as x, createElementVNode as n, renderSlot as Ne, createVNode as _, withCtx as f, createTextVNode as w, toDisplayString as h, unref as u, withDirectives as N, vShow as j, Fragment as R, renderList as q, createBlock as J, createCommentVNode as $, normalizeClass as oe, nextTick as Te, pushScopeId as Ie, popScopeId as je } from "vue";
import { _ as z } from "./goods_default-bd0cc1e2.js";
import { t as p } from "/admin/assets/shared/admin-lang.js";
import { img as se, deepClone as U } from "/admin/assets/shared/core-shared.js";
import { ElMessage as K } from "element-plus";
import { a as $e, c as Ue } from "./goods-d2a56d58.js";
import { d as Fe, e as ze } from "./marketing-f8ec8b08.js";
import { c as F } from "./cloneDeep-70d647ec.js";
import { _ as Be } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const b = (A) => (Ie("data-v-1afa7a4c"), A = A(), je(), A), Me = { class: "inline-block ml-[10px] text-[14px]" }, De = { class: "text-primary mx-[2px]" }, He = { class: "table w-[100%]" }, Re = { class: "table-head flex items-center bg-[#f5f7f9] py-[8px]" }, qe = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "w-[3%]" }, null, -1)), Je = { class: "w-[7%]" }, Ke = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "w-[50%]" }, "商品信息", -1)), Qe = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "w-[20%]" }, "商品价格", -1)), We = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "w-[20%]" }, "库存", -1)), Xe = { class: "table-body h-[350px] overflow-y-auto" }, Ye = { class: "flex items-center border-solid border-[#e5e7eb] py-[8px] border-b-[1px]" }, Ze = {
  key: 0,
  class: "w-[3%]"
}, eo = ["onClick"], oo = {
  key: 2,
  class: "w-[3%]"
}, so = { class: "w-[7%]" }, lo = { class: "flex items-center cursor-pointer w-[50%]" }, to = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, ao = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: z
  })
], -1)), no = {
  key: 1,
  class: "w-[60px] h-[60px]",
  src: z,
  fit: "contain"
}, io = { class: "ml-2" }, co = ["title"], ro = { class: "text-primary text-[12px]" }, uo = { class: "w-[20%]" }, po = { class: "w-[20%]" }, _o = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "w-[6%]" }, null, -1)), go = { class: "w-[4%]" }, mo = { class: "flex items-center cursor-pointer w-[50%]" }, ho = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, fo = /* @__PURE__ */ b(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: z
  })
], -1)), vo = {
  key: 1,
  class: "w-[60px] h-[60px]",
  src: z,
  fit: "contain"
}, ko = { class: "ml-2" }, yo = ["title"], xo = { class: "text-primary text-[12px]" }, Co = { class: "w-[20%] flex" }, bo = { class: "w-[20%] flex" }, So = {
  key: 0,
  class: "h-[60px] flex items-center justify-center border-solid border-[#e5e7eb] py-[12px] border-b-[1px]"
}, Lo = { class: "mt-[16px] flex" }, Po = { class: "flex items-center flex-1" }, Vo = { class: "mr-[10px]" }, Eo = { class: "text-primary mx-[2px]" }, wo = { class: "dialog-footer" }, Ao = /* @__PURE__ */ Oe({
  __name: "newcomer-goods-select-popup",
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
    },
    mode: {
      type: String,
      default: "spu"
      // spu：按商品，sku：按多规格
    },
    way: {
      type: String,
      default: ""
      // 选择方式，空：代表全部， single：单一
    }
  },
  emits: ["update:modelValue", "goodsSelect"],
  setup(A, { expose: le, emit: Q }) {
    const r = A;
    let c = r.mode == "sku" ? "sku_" : "goods_";
    const S = G(!1), L = G(!1), k = ee({
      get() {
        return r.modelValue;
      },
      set(l) {
        Q("update:modelValue", l);
      }
    }), P = G(!1), d = O({}), g = O([]), C = ee(() => Object.keys(d).length), s = O({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        keyword: "",
        goods_category: [],
        select_type: "all",
        goods_ids: "",
        verify_goods_ids: "",
        verify_sku_ids: "",
        goods_type: ""
      }
    }), W = G(), te = (l) => {
      V();
    }, B = O([]), X = O([]);
    (() => {
      $e().then((l) => {
        const e = l.data;
        if (e) {
          const o = [];
          e.forEach((a) => {
            const i = [];
            a.child_list && a.child_list.forEach((m) => {
              i.push({
                value: m.category_id,
                label: m.category_name
              });
            }), o.push({
              value: a.category_id,
              label: a.category_name,
              children: i
            });
          }), B.splice(0, B.length, ...o);
        }
      }), Ue().then((l) => {
        const e = l.data;
        if (e)
          for (const o in e)
            X.push(e[o]);
      });
    })(), G();
    const ae = (l) => {
      l.isShow = !l.isShow;
    }, de = (l) => {
      S.value = !1, s.data.forEach((e, o) => {
        e.secondLevelCheckAll = l, e.skuList.forEach((a, i) => {
          a.threeLevelCheckAll = l;
        });
      }), l ? s.data.forEach((e) => {
        r.mode == "spu" ? (d[c + e.goods_id] = e, g.push(e.goods_id)) : e.skuList.forEach((o) => {
          g.push(o.sku_id), d[c + o.sku_id] = U(o), d[c + o.sku_id].goods_name = e.goods_name, d[c + o.sku_id].goods_type_name = e.goods_type_name, d[c + o.sku_id].goods_type = e.goods_type;
        });
      }) : s.data.forEach((e) => {
        r.mode == "spu" ? (g.splice(g.indexOf(e.goods_id), 1), delete d[c + e.goods_id]) : e.skuList.forEach((o) => {
          g.splice(g.indexOf(o.sku_id), 1), delete d[c + o.sku_id];
        });
      });
    }, ne = (l, e) => {
      if (e.skuList.forEach((o, a) => {
        o.threeLevelCheckAll = l;
      }), M(), r.mode == "spu" ? l ? (g.push(e.goods_id), d[c + e.goods_id] = U(e)) : (g.splice(g.indexOf(e.goods_id), 1), delete d[c + e.goods_id]) : l ? e.skuList.forEach((o, a) => {
        g.push(o.sku_id), d[c + o.sku_id] = U(o), d[c + o.sku_id].goods_name = e.goods_name, d[c + o.sku_id].goods_type_name = e.goods_type_name, d[c + o.sku_id].goods_type = e.goods_type;
      }) : e.skuList.forEach((o, a) => {
        g.splice(g.indexOf(o.sku_id), 1), delete d[c + o.sku_id];
      }), r.max && r.max > 0 && Object.keys(d).length > 0 && Object.keys(d).length > r.max) {
        let o = Object.keys(d).length;
        o = o - r.max, F(g).forEach((i, m, E) => {
          if (m < o) {
            let I = g.indexOf(i);
            delete d[c + g[I]], g.splice(I, 1);
          }
        }), T();
      }
    }, ie = (l, e, o) => {
      let a = 0;
      e.skuList.forEach((m, E) => {
        m.threeLevelCheckAll && a++;
      }), a > 0 && a != e.skuList.length ? (e.secondLevelCheckAll = !1, e.isSecondLevelIndeterminate = !0) : a == e.skuList.length ? (e.isSecondLevelIndeterminate = !1, e.secondLevelCheckAll = !0) : (e.isSecondLevelIndeterminate = !1, e.secondLevelCheckAll = !1), M();
      let i = U(o);
      l ? (g.push(i.sku_id), i.goods_name = e.goods_name, i.goods_type_name = e.goods_type_name, i.goods_type = e.goods_type, d[c + i.sku_id] = i) : (g.splice(g.indexOf(i.sku_id), 1), delete d[c + i.sku_id]);
    }, M = () => {
      let l = 0;
      s.data.forEach((e, o) => {
        e.secondLevelCheckAll && l++;
      }), l > 0 && l != s.data.length ? (L.value = !1, S.value = !0) : l > 0 && l == s.data.length ? (S.value = !1, L.value = !0) : (S.value = !1, L.value = !1);
    }, V = (l = 1, e = null) => {
      S.value = !1, L.value = !1, s.loading = !0, s.data = [], s.page = l;
      const o = F(s.searchParam);
      if (o.select_type == "selected") {
        const a = [];
        for (let i in d)
          a.push(parseInt(i.replace(c, "")));
        o[c + "ids"] = a;
      } else
        o[c + "ids"] = "";
      Fe({
        page: s.page,
        limit: s.limit,
        ...o
      }).then((a) => {
        let i = F(a.data.data);
        i.forEach((m) => {
          m.isShow = !1, m.isSecondLevelIndeterminate = !1, m.secondLevelCheckAll = !1;
        }), r.mode == "sku" && i.forEach((m) => {
          m.skuList.length && m.skuList.forEach((E) => {
            E.threeLevelCheckAll = !1, E.goods_type = m.goods_type;
          });
        }), e && e(r.mode == "spu" ? a.data.verify_goods_ids : a.data.verify_sku_ids, a.data.select_goods_list), T(), s.data = i, s.total = a.data.total, s.loading = !1;
      }).catch(() => {
        s.loading = !1;
      });
    }, T = () => {
      Te(() => {
        if (r.mode == "spu")
          for (let l = 0; l < s.data.length; l++)
            s.data[l].secondLevelCheckAll = !1, d[c + s.data[l].goods_id] && (s.data[l].secondLevelCheckAll = !0);
        else {
          let l = !0;
          for (let e = 0; e < s.data.length; e++)
            s.data[e].secondLevelCheckAll = !1, l = !0, s.data[e].isSecondLevelIndeterminate = !1, s.data[e].skuList.forEach((o, a) => {
              o.threeLevelCheckAll = !1, d[c + o.sku_id] ? (s.data[e].isSecondLevelIndeterminate = !0, o.threeLevelCheckAll = !0) : l = !1;
            }), l && (s.data[e].isSecondLevelIndeterminate = !1, s.data[e].secondLevelCheckAll = !0);
        }
        M();
      });
    }, ce = (l) => {
      l && (l.resetFields(), V());
    }, re = () => {
      for (let l in d)
        delete d[l];
      c = r.mode == "sku" ? "sku_" : "goods_", r.mode == "sku" ? s.searchParam.verify_sku_ids = k.value : s.searchParam.verify_goods_ids = k.value, ue(), V(1, (l) => {
        if (k.value && k.value.length && (k.value.splice(0, k.value.length, ...l), g.splice(0, g.length, ...l), Object.keys(d).length))
          for (let e in d) {
            let o = Number(e.split(c)[1]);
            k.value.indexOf(o) == -1 && delete d[e];
          }
      }), P.value = !0;
    }, ue = () => {
      const l = F(s.searchParam);
      ze({ ...l }).then((e) => {
        const o = e.data;
        if (r.mode == "sku")
          for (let a = 0; a < o.length; a++)
            o[a].skuList.forEach((i) => {
              k.value.indexOf(i.sku_id) != -1 && (i.goods_name = o[a].goods_name, i.goods_type_name = o[a].goods_type_name, i.goods_type = o[a].goods_type, d[c + i.sku_id] = i);
            });
        else
          for (let a = 0; a < o.length; a++)
            k.value.indexOf(o[a].goods_id) != -1 && (d[c + o[a].goods_id] = o[a]);
        if (Object.keys(d).length && k.value.length)
          for (let a in d) {
            let i = Number(a.split(c)[1]);
            k.value.indexOf(i) == -1 && delete d[a];
          }
        T();
      });
    }, pe = () => {
      for (let l in d)
        delete d[l];
      T();
    }, _e = () => {
      if (r.min && C.value < r.min) {
        K({
          type: "warning",
          message: `${p("goodsSelectPopupGoodsMinTip")}${r.min}${p("goodsSelectPopupPiece")}`
        });
        return;
      }
      if (r.max && r.max > 0 && C.value && C.value > r.max) {
        K({
          type: "warning",
          message: `${p("goodsSelectPopupGoodsMaxTip")}${r.max}${p("goodsSelectPopupPiece")}`
        });
        return;
      }
      if (r.way == "single") {
        let e = 0, o = 0;
        for (let a in d)
          d[a].goods_type == "virtual" ? o++ : d[a].goods_type == "real" && e++;
        if (e != Object.keys(d).length && o != Object.keys(d).length) {
          K({
            type: "warning",
            message: `${p("wayPlaceholder")}`
          });
          return;
        }
      }
      let l = [];
      for (let e in d)
        l.push(parseInt(e.replace(c, "")));
      k.value.splice(0, k.value.length, ...l), Q("goodsSelect", d), ge(), P.value = !1;
    }, ge = () => {
      s.searchParam.keyword = "", s.searchParam.goods_category = [], s.searchParam.select_type = "all", s.searchParam.goods_ids = "", s.searchParam.verify_goods_ids = "", s.searchParam.verify_sku_ids = "", s.searchParam.goods_type = "";
    };
    return le({
      showDialog: P,
      selectGoods: d,
      selectGoodsNum: C
    }), (l, e) => {
      const o = ye, a = xe, i = Ce, m = be, E = Se, I = Le, me = Pe, D = Ve, Y = Ee, he = we, fe = Ae, ve = Ge;
      return v(), x("div", null, [
        n("div", { onClick: re }, [
          Ne(l.$slots, "default", {}, () => [
            _(o, null, {
              default: f(() => [
                w(h(u(p)("goodsSelectPopupSelectGoodsButton")), 1)
              ]),
              _: 1
            }),
            N(n("div", Me, [
              n("span", null, h(u(p)("goodsSelectPopupSelect")), 1),
              n("span", De, h(u(k).length), 1),
              n("span", null, h(u(p)("goodsSelectPopupPiece")), 1)
            ], 512), [
              [j, u(k).length]
            ])
          ], !0)
        ]),
        _(fe, {
          modelValue: P.value,
          "onUpdate:modelValue": e[11] || (e[11] = (t) => P.value = t),
          title: u(p)("goodsSelectPopupSelectGoodsDialog"),
          width: "1000px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: f(() => [
            n("span", wo, [
              _(o, {
                onClick: e[10] || (e[10] = (t) => P.value = !1)
              }, {
                default: f(() => [
                  w(h(u(p)("cancel")), 1)
                ]),
                _: 1
              }),
              _(o, {
                type: "primary",
                onClick: _e
              }, {
                default: f(() => [
                  w(h(u(p)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: f(() => [
            _(me, {
              inline: !0,
              model: s.searchParam,
              ref_key: "searchFormRef",
              ref: W
            }, {
              default: f(() => [
                _(m, {
                  prop: "select_type",
                  class: "form-item-wrap"
                }, {
                  default: f(() => [
                    _(i, {
                      modelValue: s.searchParam.select_type,
                      "onUpdate:modelValue": e[0] || (e[0] = (t) => s.searchParam.select_type = t),
                      onChange: te
                    }, {
                      default: f(() => [
                        _(a, {
                          label: u(p)("goodsSelectPopupAllGoods"),
                          value: "all"
                        }, null, 8, ["label"]),
                        _(a, {
                          label: u(p)("goodsSelectPopupSelectedGoods"),
                          value: "selected"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _(m, {
                  label: u(p)("goodsSelectPopupGoodsName"),
                  prop: "keyword",
                  class: "form-item-wrap"
                }, {
                  default: f(() => [
                    _(E, {
                      modelValue: s.searchParam.keyword,
                      "onUpdate:modelValue": e[1] || (e[1] = (t) => s.searchParam.keyword = t),
                      modelModifiers: { trim: !0 },
                      placeholder: u(p)("goodsSelectPopupGoodsNamePlaceholder"),
                      maxlength: "60"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                _(m, {
                  label: u(p)("goodsSelectPopupGoodsCategory"),
                  prop: "goods_category",
                  class: "form-item-wrap"
                }, {
                  default: f(() => [
                    _(I, {
                      modelValue: s.searchParam.goods_category,
                      "onUpdate:modelValue": e[2] || (e[2] = (t) => s.searchParam.goods_category = t),
                      options: B,
                      placeholder: u(p)("goodsSelectPopupGoodsCategoryPlaceholder"),
                      clearable: "",
                      props: { value: "value", label: "label", emitPath: !1 }
                    }, null, 8, ["modelValue", "options", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                _(m, {
                  label: u(p)("goodsSelectPopupGoodsType"),
                  prop: "goods_type",
                  class: "form-item-wrap"
                }, {
                  default: f(() => [
                    _(i, {
                      modelValue: s.searchParam.goods_type,
                      "onUpdate:modelValue": e[3] || (e[3] = (t) => s.searchParam.goods_type = t),
                      placeholder: u(p)("goodsSelectPopupGoodsTypePlaceholder"),
                      clearable: ""
                    }, {
                      default: f(() => [
                        (v(!0), x(R, null, q(X, (t) => (v(), J(a, {
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
                _(m, { class: "form-item-wrap" }, {
                  default: f(() => [
                    _(o, {
                      type: "primary",
                      onClick: e[4] || (e[4] = (t) => V())
                    }, {
                      default: f(() => [
                        w(h(u(p)("search")), 1)
                      ]),
                      _: 1
                    }),
                    _(o, {
                      onClick: e[5] || (e[5] = (t) => ce(W.value))
                    }, {
                      default: f(() => [
                        w(h(u(p)("reset")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            N((v(), x("div", He, [
              n("div", Re, [
                qe,
                n("div", Je, [
                  _(D, {
                    modelValue: L.value,
                    "onUpdate:modelValue": e[6] || (e[6] = (t) => L.value = t),
                    indeterminate: S.value,
                    onChange: de
                  }, null, 8, ["modelValue", "indeterminate"])
                ]),
                Ke,
                Qe,
                We
              ]),
              n("div", Xe, [
                (v(!0), x(R, null, q(s.data, (t, ke) => (v(), x("div", {
                  key: ke,
                  class: "flex flex-col"
                }, [
                  n("div", Ye, [
                    r.mode == "spu" ? (v(), x("div", Ze)) : $("", !0),
                    r.mode == "sku" && t.skuList.length > 1 ? (v(), x("div", {
                      key: 1,
                      class: oe(["w-[3%] cursor-pointer text-center !text-[10px]", { "iconfont iconxiangyoujiantou": t.skuList.length, "arrow-show": t.isShow }]),
                      onClick: (y) => ae(t)
                    }, null, 10, eo)) : $("", !0),
                    r.mode == "sku" && t.skuList.length <= 1 ? (v(), x("div", oo)) : $("", !0),
                    n("div", so, [
                      _(D, {
                        modelValue: t.secondLevelCheckAll,
                        "onUpdate:modelValue": (y) => t.secondLevelCheckAll = y,
                        indeterminate: t.isSecondLevelIndeterminate,
                        onChange: (y) => ne(y, t)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onChange"])
                    ]),
                    n("div", lo, [
                      n("div", to, [
                        t.goods_cover_thumb_small ? (v(), J(Y, {
                          key: 0,
                          class: "w-[60px] h-[60px]",
                          src: u(se)(t.goods_cover_thumb_small),
                          fit: "contain"
                        }, {
                          error: f(() => [
                            ao
                          ]),
                          _: 2
                        }, 1032, ["src"])) : (v(), x("img", no))
                      ]),
                      n("div", io, [
                        n("span", {
                          title: t.goods_name,
                          class: "multi-hidden leading-[1.4]"
                        }, h(t.goods_name), 9, co),
                        n("span", ro, h(t.goods_type_name), 1)
                      ])
                    ]),
                    n("div", uo, "￥" + h(t.skuList.length > 1 ? t.goodsSku.price : t.goodsSku.newcomer_price), 1),
                    n("div", po, h(t.stock), 1)
                  ]),
                  N(n("div", null, [
                    (v(!0), x(R, null, q(t.skuList, (y, Z) => (v(), x("div", {
                      key: Z,
                      class: oe(["flex items-center py-[8px] border-solid border-transparent border-b-[1px]", { hidden: !t.isShow, "border-[#e5e7eb]": Z == t.skuList.length - 1 }])
                    }, [
                      _o,
                      n("div", go, [
                        _(D, {
                          modelValue: y.threeLevelCheckAll,
                          "onUpdate:modelValue": (H) => y.threeLevelCheckAll = H,
                          onChange: (H) => ie(H, t, y)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ]),
                      n("div", mo, [
                        n("div", ho, [
                          y.sku_image ? (v(), J(Y, {
                            key: 0,
                            class: "w-[60px] h-[60px]",
                            src: u(se)(y.sku_image),
                            fit: "contain"
                          }, {
                            error: f(() => [
                              fo
                            ]),
                            _: 2
                          }, 1032, ["src"])) : (v(), x("img", vo))
                        ]),
                        n("div", ko, [
                          n("span", {
                            title: y.sku_name || t.goods_name,
                            class: "multi-hidden leading-[1.4]"
                          }, h(y.sku_name || t.goods_name), 9, yo),
                          n("span", xo, h(t.goods_type_name), 1)
                        ])
                      ]),
                      n("div", Co, "￥" + h(y.newcomer_price), 1),
                      n("div", bo, h(y.stock), 1)
                    ], 2))), 128))
                  ], 512), [
                    [j, r.mode == "sku" && t.skuList.length > 1]
                  ])
                ]))), 128)),
                !s.data.length && !s.loading ? (v(), x("div", So, "暂无数据")) : $("", !0)
              ])
            ])), [
              [ve, s.loading]
            ]),
            n("div", Lo, [
              n("div", Po, [
                N(n("div", Vo, [
                  n("span", null, h(u(p)("goodsSelectPopupBeforeTip")), 1),
                  n("span", Eo, h(u(C)), 1),
                  n("span", null, h(u(p)("goodsSelectPopupAfterTip")), 1)
                ], 512), [
                  [j, u(C)]
                ]),
                N(_(o, {
                  type: "primary",
                  link: "",
                  onClick: pe
                }, {
                  default: f(() => [
                    w(h(u(p)("goodsSelectPopupClearGoods")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [j, u(C)]
                ])
              ]),
              _(he, {
                "current-page": s.page,
                "onUpdate:current-page": e[7] || (e[7] = (t) => s.page = t),
                "page-size": s.limit,
                "onUpdate:page-size": e[8] || (e[8] = (t) => s.limit = t),
                layout: "total, sizes, prev, pager, next, jumper",
                total: s.total,
                onSizeChange: e[9] || (e[9] = (t) => V()),
                onCurrentChange: V
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const Ho = /* @__PURE__ */ Be(Ao, [["__scopeId", "data-v-1afa7a4c"]]);
export {
  Ho as default
};
