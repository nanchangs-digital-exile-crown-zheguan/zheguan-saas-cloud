import { ElButton as ke, ElOption as xe, ElSelect as be, ElFormItem as Ce, ElInput as Se, ElCascader as Pe, ElForm as Le, ElCheckbox as Ee, ElImage as Ve, ElPagination as Ae, ElDialog as Ge, ElLoadingDirective as we } from "element-plus/es";
import { defineComponent as Te, ref as T, computed as ee, reactive as O, openBlock as h, createElementBlock as x, createElementVNode as n, renderSlot as Oe, createVNode as g, withCtx as y, createTextVNode as G, toDisplayString as m, unref as p, withDirectives as N, vShow as U, createBlock as I, Fragment as q, renderList as J, createCommentVNode as C, normalizeClass as oe, nextTick as Ne, pushScopeId as Ie, popScopeId as je } from "vue";
import { _ as z } from "./goods_default-bd0cc1e2.js";
import { t as u } from "/admin/assets/shared/admin-lang.js";
import { img as se, deepClone as F } from "/admin/assets/shared/core-shared.js";
import { ElMessage as K } from "element-plus";
import { a as $e, c as Ue, d as Fe, e as Be } from "./goods-d2a56d58.js";
import { c as B } from "./cloneDeep-70d647ec.js";
import { _ as ze } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const S = (w) => (Ie("data-v-8dbf989c"), w = w(), je(), w), Me = { class: "inline-block ml-[10px] text-[14px]" }, De = { class: "text-primary mx-[2px]" }, He = { class: "table w-[100%]" }, Re = { class: "table-head flex items-center bg-[#f5f7f9] py-[8px]" }, qe = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "w-[3%]" }, null, -1)), Je = { class: "w-[7%]" }, Ke = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "w-[50%]" }, "商品信息", -1)), Qe = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "w-[20%]" }, "商品价格", -1)), We = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "w-[20%]" }, "库存", -1)), Xe = { class: "table-body h-[350px] overflow-y-auto" }, Ye = { class: "flex items-center border-solid border-[#e5e7eb] py-[8px] border-b-[1px]" }, Ze = {
  key: 0,
  class: "w-[3%]"
}, eo = ["onClick"], oo = {
  key: 2,
  class: "w-[3%]"
}, so = { class: "w-[7%]" }, lo = { class: "flex items-center cursor-pointer w-[50%] pr-[25px]" }, to = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, ao = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: z
  })
], -1)), no = {
  key: 1,
  class: "w-[60px] h-[60px]",
  src: z,
  fit: "contain"
}, io = { class: "ml-2 flex flex-col items-start" }, co = ["title"], ro = { class: "text-primary text-[12px]" }, po = {
  key: 0,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, uo = { class: "w-[20%]" }, _o = { class: "w-[20%]" }, go = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "w-[6%]" }, null, -1)), fo = { class: "w-[4%]" }, mo = { class: "flex items-center cursor-pointer w-[50%]" }, ho = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, yo = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: z
  })
], -1)), vo = {
  key: 1,
  class: "w-[60px] h-[60px]",
  src: z,
  fit: "contain"
}, ko = { class: "ml-2" }, xo = ["title"], bo = { class: "text-primary text-[12px]" }, Co = { class: "w-[20%] flex" }, So = { class: "w-[20%] flex" }, Po = {
  key: 0,
  class: "h-[60px] flex items-center justify-center border-solid border-[#e5e7eb] py-[12px] border-b-[1px]"
}, Lo = { class: "mt-[16px] flex" }, Eo = { class: "flex items-center flex-1" }, Vo = { class: "mr-[10px]" }, Ao = { class: "text-primary mx-[2px]" }, Go = { class: "dialog-footer" }, wo = /* @__PURE__ */ Te({
  __name: "goods-select-popup",
  props: {
    modelValue: {
      type: [String, Array],
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
    },
    isGift: {
      type: [String, Number],
      default: 0
      // 查询是否赠品，0：不查赠品，1：查询赠品
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    goodsType: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "goodsSelect"],
  setup(w, { expose: le, emit: Q }) {
    const i = w;
    let r = i.mode == "sku" ? "sku_" : "goods_";
    const P = T(!1), L = T(!1), v = ee({
      get() {
        return i.modelValue;
      },
      set(l) {
        Q("update:modelValue", l);
      }
    }), E = T(!1), d = O({}), _ = O([]), b = ee(() => Object.keys(d).length), s = O({
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
        goods_type: "",
        is_gift: 0
      }
    });
    s.searchParam.is_gift = i.isGift ? i.isGift : 0, s.searchParam.goods_type = i.goodsType ? i.goodsType : "";
    const W = T(), te = (l) => {
      V();
    }, M = O([]), X = O([]);
    (() => {
      $e().then((l) => {
        const e = l.data;
        if (e) {
          const o = [];
          e.forEach((t) => {
            const c = [];
            t.child_list && t.child_list.forEach((f) => {
              c.push({
                value: f.category_id,
                label: f.category_name
              });
            }), o.push({
              value: t.category_id,
              label: t.category_name,
              children: c
            });
          }), M.splice(0, M.length, ...o);
        }
      }), Ue().then((l) => {
        const e = l.data;
        if (e)
          for (const o in e)
            X.push(e[o]);
      });
    })(), T();
    const ae = (l) => {
      l.isShow = !l.isShow;
    }, de = (l) => {
      P.value = !1, s.data.forEach((e, o) => {
        e.secondLevelCheckAll = l, e.skuList.forEach((t, c) => {
          t.threeLevelCheckAll = l;
        });
      }), l ? s.data.forEach((e) => {
        i.mode == "spu" ? (d[r + e.goods_id] = e, _.push(e.goods_id)) : e.skuList.forEach((o) => {
          _.push(o.sku_id), d[r + o.sku_id] = F(o), d[r + o.sku_id].goods_name = e.goods_name, d[r + o.sku_id].goods_type_name = e.goods_type_name, d[r + o.sku_id].goods_type = e.goods_type;
        });
      }) : s.data.forEach((e) => {
        i.mode == "spu" ? (_.splice(_.indexOf(e.goods_id), 1), delete d[r + e.goods_id]) : e.skuList.forEach((o) => {
          _.splice(_.indexOf(o.sku_id), 1), delete d[r + o.sku_id];
        });
      });
    }, ne = (l, e) => {
      if (e.skuList.forEach((o, t) => {
        o.threeLevelCheckAll = l;
      }), D(), i.mode == "spu" ? l ? (_.push(e.goods_id), d[r + e.goods_id] = F(e)) : (_.splice(_.indexOf(e.goods_id), 1), delete d[r + e.goods_id]) : l ? e.skuList.forEach((o, t) => {
        _.push(o.sku_id), d[r + o.sku_id] = F(o), d[r + o.sku_id].goods_name = e.goods_name, d[r + o.sku_id].goods_type_name = e.goods_type_name, d[r + o.sku_id].goods_type = e.goods_type;
      }) : e.skuList.forEach((o, t) => {
        _.splice(_.indexOf(o.sku_id), 1), delete d[r + o.sku_id];
      }), i.max && i.max > 0 && Object.keys(d).length > 0 && Object.keys(d).length > i.max) {
        let o = Object.keys(d).length;
        o = o - i.max, B(_).forEach((c, f, A) => {
          if (f < o) {
            let $ = _.indexOf(c);
            delete d[r + _[$]], _.splice($, 1);
          }
        }), j();
      }
    }, ie = (l, e, o) => {
      let t = 0;
      e.skuList.forEach((f, A) => {
        f.threeLevelCheckAll && t++;
      }), t > 0 && t != e.skuList.length ? (e.secondLevelCheckAll = !1, e.isSecondLevelIndeterminate = !0) : t == e.skuList.length ? (e.isSecondLevelIndeterminate = !1, e.secondLevelCheckAll = !0) : (e.isSecondLevelIndeterminate = !1, e.secondLevelCheckAll = !1), D();
      let c = F(o);
      l ? (_.push(c.sku_id), c.goods_name = e.goods_name, c.goods_type_name = e.goods_type_name, c.goods_type = e.goods_type, d[r + c.sku_id] = c) : (_.splice(_.indexOf(c.sku_id), 1), delete d[r + c.sku_id]);
    }, D = () => {
      let l = 0;
      s.data.forEach((e, o) => {
        e.secondLevelCheckAll && l++;
      }), l > 0 && l != s.data.length ? (L.value = !1, P.value = !0) : l > 0 && l == s.data.length ? (P.value = !1, L.value = !0) : (P.value = !1, L.value = !1);
    }, V = (l = 1, e = null) => {
      P.value = !1, L.value = !1, s.loading = !0, s.data = [], s.page = l;
      const o = B(s.searchParam);
      if (o.select_type == "selected") {
        const t = [];
        for (let c in d)
          t.push(parseInt(c.replace(r, "")));
        o[r + "ids"] = t;
      } else
        o[r + "ids"] = "";
      Fe({
        page: s.page,
        limit: s.limit,
        ...o
      }).then((t) => {
        let c = B(t.data.data);
        c.forEach((f) => {
          f.isShow = !1, f.isSecondLevelIndeterminate = !1, f.secondLevelCheckAll = !1;
        }), i.mode == "sku" && c.forEach((f) => {
          f.skuList.length && f.skuList.forEach((A) => {
            A.threeLevelCheckAll = !1, A.goods_type = f.goods_type;
          });
        }), e && e(i.mode == "spu" ? t.data.verify_goods_ids : t.data.verify_sku_ids, t.data.select_goods_list), j(), s.data = c, s.total = t.data.total, s.loading = !1;
      }).catch(() => {
        s.loading = !1;
      });
    }, j = () => {
      Ne(() => {
        if (i.mode == "spu")
          for (let l = 0; l < s.data.length; l++)
            s.data[l].secondLevelCheckAll = !1, d[r + s.data[l].goods_id] && (s.data[l].secondLevelCheckAll = !0);
        else {
          let l = !0;
          for (let e = 0; e < s.data.length; e++)
            s.data[e].secondLevelCheckAll = !1, l = !0, s.data[e].isSecondLevelIndeterminate = !1, s.data[e].skuList.forEach((o, t) => {
              o.threeLevelCheckAll = !1, d[r + o.sku_id] ? (s.data[e].isSecondLevelIndeterminate = !0, o.threeLevelCheckAll = !0) : l = !1;
            }), l && (s.data[e].isSecondLevelIndeterminate = !1, s.data[e].secondLevelCheckAll = !0);
        }
        D();
      });
    }, ce = (l) => {
      l && (l.resetFields(), V());
    }, re = () => {
      for (let l in d)
        delete d[l];
      r = i.mode == "sku" ? "sku_" : "goods_", i.mode == "sku" ? s.searchParam.verify_sku_ids = v.value : s.searchParam.verify_goods_ids = v.value, pe(), V(1, (l) => {
        if (v.value && v.value.length && (v.value.splice(0, v.value.length, ...l), _.splice(0, _.length, ...l), Object.keys(d).length))
          for (let e in d) {
            let o = Number(e.split(r)[1]);
            v.value.indexOf(o) == -1 && delete d[e];
          }
      }), E.value = !0;
    }, pe = () => {
      const l = B(s.searchParam);
      v.value.forEach((e, o, t) => {
        t[o] = Number(e);
      }), Be({ ...l }).then((e) => {
        const o = e.data;
        if (i.mode == "sku")
          for (let t = 0; t < o.length; t++)
            o[t].skuList.forEach((c) => {
              v.value.indexOf(c.sku_id) != -1 && (c.goods_name = o[t].goods_name, c.goods_type_name = o[t].goods_type_name, c.goods_type = o[t].goods_type, d[r + c.sku_id] = c);
            });
        else
          for (let t = 0; t < o.length; t++)
            v.value.indexOf(o[t].goods_id) != -1 && (d[r + o[t].goods_id] = o[t]);
        if (Object.keys(d).length && v.value.length)
          for (let t in d) {
            let c = Number(t.split(r)[1]);
            v.value.indexOf(c) == -1 && delete d[t];
          }
        j();
      });
    }, ue = () => {
      for (let l in d)
        delete d[l];
      j();
    }, _e = () => {
      if (i.min && b.value < i.min) {
        K({
          type: "warning",
          message: `${u("goodsSelectPopupGoodsMinTip")}${i.min}${u("goodsSelectPopupPiece")}`
        });
        return;
      }
      if (i.max && i.max > 0 && b.value && b.value > i.max) {
        K({
          type: "warning",
          message: `${u("goodsSelectPopupGoodsMaxTip")}${i.max}${u("goodsSelectPopupPiece")}`
        });
        return;
      }
      if (i.way == "single") {
        let e = 0, o = 0;
        for (let t in d)
          d[t].goods_type == "virtual" ? o++ : d[t].goods_type == "real" && e++;
        if (e != Object.keys(d).length && o != Object.keys(d).length) {
          K({
            type: "warning",
            message: `${u("wayPlaceholder")}`
          });
          return;
        }
      }
      let l = [];
      for (let e in d)
        l.push(parseInt(e.replace(r, "")));
      v.value.splice(0, v.value.length, ...l), Q("goodsSelect", d), ge(), E.value = !1;
    }, ge = () => {
      s.searchParam.keyword = "", s.searchParam.goods_category = [], s.searchParam.select_type = "all", s.searchParam.goods_ids = "", s.searchParam.verify_goods_ids = "", s.searchParam.verify_sku_ids = "", s.searchParam.goods_type = "";
    };
    return le({
      showDialog: E,
      selectGoods: d,
      selectGoodsNum: b
    }), (l, e) => {
      const o = ke, t = xe, c = be, f = Ce, A = Se, $ = Pe, fe = Le, H = Ee, Y = Ve, me = Ae, he = Ge, ye = we;
      return h(), x("div", null, [
        n("div", {
          class: "leading-[1]",
          onClick: re
        }, [
          Oe(l.$slots, "default", {}, () => [
            g(o, {
              disabled: i.disabled
            }, {
              default: y(() => [
                G(m(p(u)("goodsSelectPopupSelectGoodsButton")), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            N(n("div", Me, [
              n("span", null, m(p(u)("goodsSelectPopupSelect")), 1),
              n("span", De, m(p(v).length), 1),
              n("span", null, m(p(u)("goodsSelectPopupPiece")), 1)
            ], 512), [
              [U, p(v).length]
            ])
          ], !0)
        ]),
        g(he, {
          modelValue: E.value,
          "onUpdate:modelValue": e[11] || (e[11] = (a) => E.value = a),
          title: p(u)("goodsSelectPopupSelectGoodsDialog"),
          width: "1000px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: y(() => [
            n("span", Go, [
              g(o, {
                onClick: e[10] || (e[10] = (a) => E.value = !1)
              }, {
                default: y(() => [
                  G(m(p(u)("cancel")), 1)
                ]),
                _: 1
              }),
              g(o, {
                type: "primary",
                onClick: _e
              }, {
                default: y(() => [
                  G(m(p(u)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: y(() => [
            g(fe, {
              inline: !0,
              model: s.searchParam,
              ref_key: "searchFormRef",
              ref: W
            }, {
              default: y(() => [
                g(f, {
                  prop: "select_type",
                  class: "form-item-wrap"
                }, {
                  default: y(() => [
                    g(c, {
                      modelValue: s.searchParam.select_type,
                      "onUpdate:modelValue": e[0] || (e[0] = (a) => s.searchParam.select_type = a),
                      onChange: te
                    }, {
                      default: y(() => [
                        g(t, {
                          label: p(u)("goodsSelectPopupAllGoods"),
                          value: "all"
                        }, null, 8, ["label"]),
                        g(t, {
                          label: p(u)("goodsSelectPopupSelectedGoods"),
                          value: "selected"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(f, {
                  label: p(u)("goodsSelectPopupGoodsName"),
                  prop: "keyword",
                  class: "form-item-wrap"
                }, {
                  default: y(() => [
                    g(A, {
                      modelValue: s.searchParam.keyword,
                      "onUpdate:modelValue": e[1] || (e[1] = (a) => s.searchParam.keyword = a),
                      modelModifiers: { trim: !0 },
                      placeholder: p(u)("goodsSelectPopupGoodsNamePlaceholder"),
                      maxlength: "60"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(f, {
                  label: p(u)("goodsSelectPopupGoodsCategory"),
                  prop: "goods_category",
                  class: "form-item-wrap"
                }, {
                  default: y(() => [
                    g($, {
                      modelValue: s.searchParam.goods_category,
                      "onUpdate:modelValue": e[2] || (e[2] = (a) => s.searchParam.goods_category = a),
                      options: M,
                      placeholder: p(u)("goodsSelectPopupGoodsCategoryPlaceholder"),
                      clearable: "",
                      props: { value: "value", label: "label", emitPath: !1 }
                    }, null, 8, ["modelValue", "options", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i.goodsType ? C("", !0) : (h(), I(f, {
                  key: 0,
                  label: p(u)("goodsSelectPopupGoodsType"),
                  prop: "goods_type",
                  class: "form-item-wrap"
                }, {
                  default: y(() => [
                    g(c, {
                      modelValue: s.searchParam.goods_type,
                      "onUpdate:modelValue": e[3] || (e[3] = (a) => s.searchParam.goods_type = a),
                      placeholder: p(u)("goodsSelectPopupGoodsTypePlaceholder"),
                      clearable: ""
                    }, {
                      default: y(() => [
                        (h(!0), x(q, null, J(X, (a) => (h(), I(t, {
                          key: a.type,
                          label: a.name,
                          value: a.type
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])),
                g(f, { class: "form-item-wrap" }, {
                  default: y(() => [
                    g(o, {
                      type: "primary",
                      onClick: e[4] || (e[4] = (a) => V())
                    }, {
                      default: y(() => [
                        G(m(p(u)("search")), 1)
                      ]),
                      _: 1
                    }),
                    g(o, {
                      onClick: e[5] || (e[5] = (a) => ce(W.value))
                    }, {
                      default: y(() => [
                        G(m(p(u)("reset")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            N((h(), x("div", He, [
              n("div", Re, [
                qe,
                n("div", Je, [
                  i.max > 1 ? (h(), I(H, {
                    key: 0,
                    modelValue: L.value,
                    "onUpdate:modelValue": e[6] || (e[6] = (a) => L.value = a),
                    indeterminate: P.value,
                    onChange: de
                  }, null, 8, ["modelValue", "indeterminate"])) : C("", !0)
                ]),
                Ke,
                Qe,
                We
              ]),
              n("div", Xe, [
                (h(!0), x(q, null, J(s.data, (a, ve) => (h(), x("div", {
                  key: ve,
                  class: "flex flex-col"
                }, [
                  n("div", Ye, [
                    i.mode == "spu" ? (h(), x("div", Ze)) : C("", !0),
                    i.mode == "sku" && a.skuList.length > 1 ? (h(), x("div", {
                      key: 1,
                      class: oe(["w-[3%] cursor-pointer text-center !text-[10px]", { "iconfont iconxiangyoujiantou": a.skuList.length, "arrow-show": a.isShow }]),
                      onClick: (k) => ae(a)
                    }, null, 10, eo)) : C("", !0),
                    i.mode == "sku" && a.skuList.length <= 1 ? (h(), x("div", oo)) : C("", !0),
                    n("div", so, [
                      g(H, {
                        modelValue: a.secondLevelCheckAll,
                        "onUpdate:modelValue": (k) => a.secondLevelCheckAll = k,
                        indeterminate: a.isSecondLevelIndeterminate,
                        onChange: (k) => ne(k, a)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onChange"])
                    ]),
                    n("div", lo, [
                      n("div", to, [
                        a.goods_cover_thumb_small ? (h(), I(Y, {
                          key: 0,
                          class: "w-[60px] h-[60px]",
                          src: p(se)(a.goods_cover_thumb_small),
                          fit: "contain"
                        }, {
                          error: y(() => [
                            ao
                          ]),
                          _: 2
                        }, 1032, ["src"])) : (h(), x("img", no))
                      ]),
                      n("div", io, [
                        n("span", {
                          title: a.goods_name,
                          class: "multi-hidden leading-[1.4]"
                        }, m(a.goods_name), 9, co),
                        n("span", ro, m(a.goods_type_name), 1),
                        a.is_gift == 1 ? (h(), x("span", po, "赠品")) : C("", !0)
                      ])
                    ]),
                    n("div", uo, "￥" + m(a.goodsSku.price), 1),
                    n("div", _o, m(a.stock), 1)
                  ]),
                  N(n("div", null, [
                    (h(!0), x(q, null, J(a.skuList, (k, Z) => (h(), x("div", {
                      key: Z,
                      class: oe(["flex items-center py-[8px] border-solid border-transparent border-b-[1px]", { hidden: !a.isShow, "border-[#e5e7eb]": Z == a.skuList.length - 1 }])
                    }, [
                      go,
                      n("div", fo, [
                        g(H, {
                          modelValue: k.threeLevelCheckAll,
                          "onUpdate:modelValue": (R) => k.threeLevelCheckAll = R,
                          onChange: (R) => ie(R, a, k)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ]),
                      n("div", mo, [
                        n("div", ho, [
                          k.sku_image ? (h(), I(Y, {
                            key: 0,
                            class: "w-[60px] h-[60px]",
                            src: p(se)(k.sku_image),
                            fit: "contain"
                          }, {
                            error: y(() => [
                              yo
                            ]),
                            _: 2
                          }, 1032, ["src"])) : (h(), x("img", vo))
                        ]),
                        n("div", ko, [
                          n("span", {
                            title: k.sku_name || a.goods_name,
                            class: "multi-hidden leading-[1.4]"
                          }, m(k.sku_name || a.goods_name), 9, xo),
                          n("span", bo, m(a.goods_type_name), 1)
                        ])
                      ]),
                      n("div", Co, "￥" + m(k.price), 1),
                      n("div", So, m(k.stock), 1)
                    ], 2))), 128))
                  ], 512), [
                    [U, i.mode == "sku" && a.skuList.length > 1]
                  ])
                ]))), 128)),
                !s.data.length && !s.loading ? (h(), x("div", Po, "暂无数据")) : C("", !0)
              ])
            ])), [
              [ye, s.loading]
            ]),
            n("div", Lo, [
              n("div", Eo, [
                N(n("div", Vo, [
                  n("span", null, m(p(u)("goodsSelectPopupBeforeTip")), 1),
                  n("span", Ao, m(p(b)), 1),
                  n("span", null, m(p(u)("goodsSelectPopupAfterTip")), 1)
                ], 512), [
                  [U, p(b)]
                ]),
                N(g(o, {
                  type: "primary",
                  link: "",
                  onClick: ue
                }, {
                  default: y(() => [
                    G(m(p(u)("goodsSelectPopupClearGoods")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [U, p(b)]
                ])
              ]),
              g(me, {
                "current-page": s.page,
                "onUpdate:current-page": e[7] || (e[7] = (a) => s.page = a),
                "page-size": s.limit,
                "onUpdate:page-size": e[8] || (e[8] = (a) => s.limit = a),
                layout: "total, sizes, prev, pager, next, jumper",
                total: s.total,
                onSizeChange: e[9] || (e[9] = (a) => V()),
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
const Ho = /* @__PURE__ */ ze(wo, [["__scopeId", "data-v-8dbf989c"]]);
export {
  Ho as default
};
