import { ElDialog as lt } from "element-plus/es";
import { a as ct, b as dt } from "./index-36e25503.js";
import { _ as pt } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { defineComponent as ut, computed as _e, reactive as m, watch as _t, openBlock as D, createElementBlock as $, normalizeStyle as ne, unref as q, Fragment as ae, createElementVNode as O, createVNode as N, createBlock as ft, withCtx as le, renderSlot as Ee, renderList as gt, createCommentVNode as mt, toRaw as ht, ref as Y, nextTick as ce } from "vue";
import { img as de, debounce as Te, deepClone as pe, getImageDimensions as yt } from "/admin/assets/shared/core-shared.js";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as f } from "element-plus";
import { S as vt } from "./sortable.esm-fc069a97.js";
import { useRoute as kt, useRouter as bt } from "vue-router";
import { test as De } from "/admin/assets/shared/core-shared.js";
import { c as wt, a as xt, F as St, G as Nt, D as Ct, E as Et, al as Tt, am as Dt, an as Oe, s as Ot } from "./goods-d2a56d58.js";
import { getPosterList as Rt } from "/admin/assets/shared/core-shared.js";
import { getDiyFormList as It } from "/admin/assets/shared/core-shared.js";
import { c as ue } from "./cloneDeep-70d647ec.js";
import { r as Pt } from "./range-47374eec.js";
const $t = { class: "flex flex-wrap" }, At = { class: "w-full h-full relative flex items-center overflow-hidden rounded" }, Vt = ["src"], Ft = { class: "absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation" }, jt = { class: "w-full h-full flex items-center justify-center flex-col" }, Gt = { class: "w-full h-full relative flex items-center overflow-hidden rounded" }, Lt = ["src"], Bt = { class: "absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation" }, zt = { class: "w-full h-full flex items-center justify-center flex-col" }, ls = /* @__PURE__ */ ut({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "100px"
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue"],
  setup(b, { emit: J }) {
    const v = b, C = _e({
      get() {
        return v.modelValue;
      },
      set(y) {
        J("update:modelValue", y);
      }
    }), r = m({
      data: []
    }), G = () => {
      C.value = ht(r.data).toString();
    };
    _t(() => C.value, () => {
      r.data = [
        ...C.value.split(",").filter((y) => y)
      ], G();
    }, { immediate: !0 });
    const w = _e(() => ({
      width: v.width,
      height: v.height
    })), L = (y) => {
      v.limit == 1 ? (r.data.splice(0, 1), y && r.data.push(y.url)) : y.forEach((E) => {
        r.data.length < v.limit && r.data.push(E.url);
      }), G();
    }, B = (y = 0) => {
      r.data.splice(y, 1), G();
    }, x = m({
      visible: !1,
      src: ""
    }), R = (y = 0) => {
      x.visible = !0, x.src = de(r.data[y]);
    };
    return (y, E) => {
      const T = pt, I = ct, K = dt, M = lt;
      return D(), $("div", $t, [
        b.limit == 1 ? (D(), $("div", {
          key: 0,
          class: "rounded cursor-pointer relative bg-page video-wrap mr-[10px]",
          style: ne(q(w))
        }, [
          r.data.length ? (D(), $(ae, { key: 0 }, [
            O("div", At, [
              O("video", {
                src: q(de)(r.data[0]),
                class: "w-full"
              }, null, 8, Vt),
              O("div", Ft, [
                N(T, {
                  name: "iconfont icon24gf-playCircle",
                  color: "#fff",
                  size: "25px",
                  onClick: E[0] || (E[0] = (A) => R())
                })
              ])
            ]),
            N(T, {
              name: "element CircleCloseFilled",
              color: "#bbb",
              size: "18px",
              onClick: B,
              class: "!absolute z-[2] top-[-9px] right-[-9px]"
            })
          ], 64)) : (D(), ft(I, {
            key: 1,
            limit: b.limit,
            type: "video",
            onConfirm: L
          }, {
            default: le(() => [
              O("div", jt, [
                Ee(y.$slots, "icon", {}, () => [
                  N(T, {
                    name: "iconfont icon24gf-playCircle",
                    size: "25px",
                    color: "var(--el-text-color-secondary)"
                  })
                ])
              ])
            ]),
            _: 3
          }, 8, ["limit"]))
        ], 4)) : (D(), $(ae, { key: 1 }, [
          (D(!0), $(ae, null, gt(r.data, (A, P) => (D(), $("div", {
            class: "rounded cursor-pointer relative bg-page video-wrap mr-[10px]",
            style: ne(q(w)),
            key: P
          }, [
            O("div", Gt, [
              O("video", {
                src: q(de)(A),
                class: "w-full"
              }, null, 8, Lt),
              O("div", Bt, [
                N(T, {
                  name: "iconfont icon24gf-playCircle",
                  color: "#fff",
                  size: "25px",
                  onClick: (U) => R(P)
                }, null, 8, ["onClick"])
              ])
            ]),
            N(T, {
              name: "element CircleCloseFilled",
              color: "#bbb",
              size: "18px",
              onClick: (U) => B(P),
              class: "absolute z-[2] top-[-9px] right-[-9px]"
            }, null, 8, ["onClick"])
          ], 4))), 128)),
          r.data.length < b.limit ? (D(), $("div", {
            key: 0,
            class: "rounded cursor-pointer relative bg-page video-wrap mr-[10px]",
            style: ne(q(w))
          }, [
            N(I, {
              limit: b.limit,
              type: "video",
              onConfirm: L
            }, {
              default: le(() => [
                O("div", zt, [
                  Ee(y.$slots, "icon", {}, () => [
                    N(T, {
                      name: "iconfont icon24gf-playCircle",
                      size: "25px",
                      color: "var(--el-text-color-secondary)"
                    })
                  ])
                ])
              ]),
              _: 3
            }, 8, ["limit"])
          ], 4)) : mt("", !0)
        ], 64)),
        N(M, {
          modelValue: x.visible,
          "onUpdate:modelValue": E[1] || (E[1] = (A) => x.visible = A),
          width: "50%",
          "align-center": "",
          "destroy-on-close": !0,
          "custom-class": "video-preview"
        }, {
          default: le(() => [
            N(K, {
              src: x.src,
              width: "100%"
            }, null, 8, ["src"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
function cs(b = {}) {
  const J = kt(), v = bt(), C = Y(!1), r = m({
    goods_id: "",
    goods_type: "real",
    // 基础信息
    goods_name: "",
    sub_title: "",
    goods_image: "",
    goods_video: "",
    goods_category: "",
    brand_id: "",
    poster_id: "",
    diy_detail_id: "",
    form_id: "",
    label_ids: [],
    service_ids: [],
    supplier_id: "",
    status: "1",
    is_gift: 0,
    sort: "",
    addon_shop_supplier: [],
    // 价格库存
    spec_type: "single",
    price: "",
    market_price: "",
    cost_price: "",
    stock: "",
    sku_no: "",
    unit: "",
    virtual_sale_num: "",
    member_discount: "",
    is_limit: 0,
    limit_type: 1,
    max_buy: "",
    min_buy: "",
    // 商品参数
    attr_ids: [],
    attr_format: [],
    // 商品详情
    goods_desc: "",
    skuCheckAll: !1,
    // 是否全选
    skuIsIndeterminate: !1,
    // 是否部分选中
    skuCheckedCities: []
    // 选中的规格
  });
  Object.assign(r, b.formData), r.goods_id = Y(J.query.goods_id);
  const G = b.appendFormData;
  Object.assign(r, G);
  const w = b.appendRefreshGoodsSkuData || {}, L = b.appendSingleGoodsData, B = b.getFormRules, x = m({}), R = b.getFormRef, y = m([]);
  ce(() => {
    let e = R();
    for (let o in e)
      x[o] = e[o];
    b.getVerify && y.splice(0, y.length, ...b.getVerify());
  });
  const E = b.editApi, T = b.addApi, I = Y("basic"), K = (e, o) => {
  }, M = m([]), A = (e) => {
    let o = "/shop/goods/" + e.type + "_add";
    v.push(o);
  };
  wt().then((e) => {
    const o = e.data;
    if (o)
      for (const t in o)
        M.push(o[t]);
  });
  const P = m([]), U = {
    multiple: !0
  }, Re = (e) => {
  }, Ie = () => {
    const e = v.resolve({
      path: "/shop/goods/category"
    });
    window.open(e.href);
  }, fe = (e = !1) => {
    xt().then((o) => {
      const t = o.data;
      if (t) {
        const s = [];
        t.forEach((i) => {
          const a = [];
          i.child_list && i.child_list.forEach((d) => {
            a.push({
              value: d.category_id,
              label: d.category_name
            });
          }), s.push({
            value: i.category_id,
            label: i.category_name,
            children: a
          });
        }), P.splice(0, P.length, ...s), e && f({
          message: n("refreshSuccess"),
          type: "success"
        });
      }
    });
  };
  fe();
  const V = m([]);
  let H = null;
  const Pe = () => {
    const e = v.resolve({
      path: "/shop/goods/brand"
    });
    window.open(e.href);
  }, ge = (e = "", o = !1) => (H = St({ brand_name: e }).then((t) => {
    const s = t.data;
    return s && (V.splice(0, V.length, ...s), o && f({
      message: n("refreshSuccess"),
      type: "success"
    })), s;
  }), H);
  ge();
  const Q = m([]), $e = () => {
    const e = v.resolve({
      path: "/poster/list"
    });
    window.open(e.href);
  }, me = (e = !1) => {
    Rt({
      type: "shop_goods"
    }).then((o) => {
      const t = o.data;
      t && (Q.splice(0, Q.length, ...t), e && f({
        message: n("refreshSuccess"),
        type: "success"
      }));
    });
  };
  me();
  const W = m([]), Ae = () => {
    const e = v.resolve({
      path: "/diy/list"
    });
    window.open(e.href);
  }, he = (e = !1) => {
    Nt({
      type: "DIY_SHOP_GOODS_DETAIL"
    }).then((o) => {
      const t = o.data;
      t && (W.splice(0, W.length, ...t), e && f({
        message: n("refreshSuccess"),
        type: "success"
      }));
    });
  };
  he();
  const X = m([]), Ve = () => {
    const e = v.resolve({
      path: "/diy_form/list"
    });
    window.open(e.href);
  }, ye = (e = !1) => {
    It({
      type: "DIY_FORM_GOODS_DETAIL",
      status: 1
    }).then((o) => {
      const t = o.data;
      t && (X.splice(0, X.length, ...t), e && f({
        message: n("refreshSuccess"),
        type: "success"
      }));
    });
  };
  ye();
  const ee = m([]), Fe = () => {
    const e = v.resolve({
      path: "/shop/goods/label"
    });
    window.open(e.href);
  }, ve = () => {
    Ct({}).then((e) => {
      const o = e.data;
      o && ee.splice(0, ee.length, ...o);
    });
  };
  ve();
  const te = m([]), je = () => {
    const e = v.resolve({
      path: "/shop/goods/service"
    });
    window.open(e.href);
  }, ke = () => {
    Et({}).then((e) => {
      const o = e.data;
      o && te.splice(0, te.length, ...o);
    });
  };
  ke();
  const se = m([]), Ge = () => {
    const e = v.resolve({
      path: "/shop_supplier/supplier"
    });
    window.open(e.href);
  }, be = () => {
    Tt({}).then((e) => {
      const o = e.data;
      o && se.splice(0, se.length, ...o);
    });
  }, g = m([]), c = m({}), oe = m([]), we = Y(0), F = () => we.value > 0, Le = (e) => {
    if (r.addon_shop_supplier = e.addon_shop_supplier, r.addon_shop_supplier && r.addon_shop_supplier.status == 1 && be(), e.default_sort && (r.sort = e.default_sort), r.goods_id && e.goods_info) {
      we.value = e.goods_info.active_goods_count, r.goods_name = e.goods_info.goods_name, r.sub_title = e.goods_info.sub_title, r.goods_type = e.goods_info.goods_type, r.goods_image = e.goods_info.goods_image, r.goods_video = e.goods_info.goods_video, r.goods_category = e.goods_info.goods_category;
      const o = async () => {
        const t = e.goods_info.brand_id;
        if (!t) {
          r.brand_id = t;
          return;
        }
        if (V.find((i) => i.brand_id == t))
          r.brand_id = t;
        else
          try {
            const i = await Ot(t);
            i.data && (V.push(i.data), r.brand_id = t);
          } catch {
            r.brand_id = t;
          }
      };
      if (V.length > 0 ? o() : H && H.then(() => {
        o();
      }), r.poster_id = e.goods_info.poster_id, r.form_id = e.goods_info.form_id, r.diy_detail_id = e.goods_info.diy_detail_id, r.label_ids = e.goods_info.label_ids, r.service_ids = e.goods_info.service_ids, r.supplier_id = e.goods_info.supplier_id, r.status = e.goods_info.status, r.sort = e.goods_info.sort, r.is_gift = e.goods_info.is_gift, r.attr_format = e.goods_info.attr_format, r.attr_ids = e.goods_info.attr_ids, Ce(r.attr_ids, !0), r.spec_type = e.goods_info.spec_type, r.stock = e.goods_info.stock, r.spec_type == "single") {
        const t = e.goods_info.sku_list[0];
        r.price = t.price, r.market_price = t.market_price, r.cost_price = t.cost_price, r.sku_no = t.sku_no, L && Object.assign(r, L(t));
      } else if (r.spec_type == "multi") {
        e.goods_info.spec_list.forEach((i) => {
          const a = [];
          i.spec_values = i.spec_values.split(","), i.spec_values.forEach((d) => {
            a.push({
              id: j(),
              spec_value_name: d
            });
          }), g.push({
            id: j(),
            spec_id: i.spec_id,
            goods_id: i.goods_id,
            spec_name: i.spec_name,
            values: a
          });
        }), z();
        const s = e.goods_info.sku_list;
        for (let i in c)
          for (let a = 0; a < s.length; a++) {
            let d = s[a];
            if (c[i].spec_name == d.sku_spec_format.replace(/,/g, " ")) {
              c[i].sku_id = d.sku_id, c[i].sku_image = d.sku_image, c[i].price = d.price, c[i].market_price = d.market_price, c[i].cost_price = d.cost_price;
              for (let l in w)
                c[i][l] = d[l];
              c[i].stock = d.stock, c[i].sku_id = d.sku_id, c[i].sku_no = d.sku_no, c[i].is_default = d.is_default;
              break;
            }
          }
        ce(() => {
          Z(), xe();
        });
      }
      r.member_discount = e.goods_info.member_discount, r.unit = e.goods_info.unit, r.virtual_sale_num = e.goods_info.virtual_sale_num, r.is_limit = e.goods_info.is_limit, r.limit_type = e.goods_info.limit_type, r.max_buy = e.goods_info.max_buy, r.min_buy = e.goods_info.min_buy, r.goods_desc = e.goods_info.goods_desc;
    }
  }, xe = () => {
    if (!F() && R().specValueRef)
      for (let e = 0; e < R().specValueRef.length; e++) {
        const o = R().specValueRef[e], t = vt.create(o, {
          group: "draggable-element-" + e,
          animation: 200,
          // 结束拖拽
          onEnd: (s) => {
            const i = g[e].values[s.oldIndex];
            g[e].values.splice(s.oldIndex, 1), g[e].values.splice(s.newIndex, 0, i), ce(() => {
              t.sort(
                Pt(g[e].values.length).map((a) => a.toString())
              ), z(), Z();
            });
          }
        });
      }
  }, j = (e = 5) => Number(Math.random().toString().substr(3, e) + Date.now()).toString(36), Be = () => {
    if (F()) {
      f({
        type: "warning",
        message: `${n("participateInActiveDisableTips")}`
      });
      return;
    }
    if (g.length > 4) {
      f({
        type: "warning",
        message: `${n("maxAddSpecTips")}`
      });
      return;
    }
    g.push({
      id: j(),
      spec_name: "",
      values: [
        {
          id: j(),
          spec_value_name: ""
        }
      ]
    });
  }, ze = (e) => {
    if (F()) {
      f({
        type: "warning",
        message: `${n("participateInActiveDisableTips")}`
      });
      return;
    }
    g.splice(e, 1), z(), Z(), re();
  }, Ze = (e) => {
    if (F()) {
      f({
        type: "warning",
        message: `${n("participateInActiveDisableTips")}`
      });
      return;
    }
    g[e].values.push({
      id: j(),
      spec_value_name: ""
    }), xe();
  }, qe = Te((e) => {
    z(), Z();
  }), Me = (e, o) => {
    if (F()) {
      f({
        type: "warning",
        message: `${n("participateInActiveDisableTips")}`
      });
      return;
    }
    g[e].values.splice(o, 1), z(), Z(), re();
  }, He = (e, o) => {
    for (const t in c)
      t == o ? c[t].is_default = e : c[t].is_default = 0;
  }, re = Te(() => {
    let e = 0;
    for (const o in c)
      c[o].stock && (e += parseInt(c[o].stock));
    r.stock = e;
  }), z = () => {
    const e = g, o = ue(c);
    let t = {}, s = 0;
    for (const a of e) {
      let d = {};
      if (Object.keys(t).length > 0)
        for (const l in t)
          for (let _ of a.values) {
            let u = ue(t[l].sku_spec);
            u.push(_), d["sku_" + s] = {
              spec_name: `${t[l].spec_name} ${_.spec_value_name}`,
              sku_spec: u,
              sku_image: "",
              price: "",
              market_price: "",
              cost_price: "",
              stock: "",
              sku_no: "",
              is_default: 0
            };
            for (let S in w)
              d["sku_" + s][S] = w[S].value;
            s++;
          }
      else
        for (let l of a.values) {
          let _ = l.spec_value_name;
          d["sku_" + s] = {
            spec_name: _,
            sku_spec: [l],
            sku_image: "",
            price: "",
            market_price: "",
            cost_price: "",
            stock: "",
            sku_no: "",
            is_default: 0
          };
          for (let u in w)
            d["sku_" + s][u] = w[u].value;
          s++;
        }
      t = Object.keys(d).length > 0 ? d : t;
    }
    for (const a in o)
      for (const d in t)
        if (Ye(o[a].sku_spec, t[d].sku_spec) === t[d].sku_spec.length) {
          const _ = t[d].spec_name, u = t[d].sku_spec;
          Object.assign(t[d], o[a]), t[d].spec_name = _, t[d].sku_spec = u;
          break;
        }
    for (const a in c)
      delete c[a];
    let i = "";
    for (const a in t)
      i == "" ? (i = a, t[a].is_default = 1) : t[a].is_default = 0, c[a] = t[a];
    r.skuCheckAll = !1, r.skuIsIndeterminate = !1, r.skuCheckedCities = [];
  }, Ye = (e, o) => {
    let t = 0;
    for (let s = 0; s < e.length; s++)
      for (let i = 0; i < o.length; i++)
        if (e[s].id === o[i].id) {
          t++;
          break;
        }
    return t;
  }, Z = () => {
    let e = 0;
    for (let s = 0; s < g.length; s++)
      g[s].spec_name != "" && g[s].values.length > 0 && e++;
    let o = 1;
    const t = [];
    for (let s = e - 1; s >= 0; s--) {
      for (let i = 0; i < Object.keys(c).length; )
        if (g[s].values.length > 0)
          for (let a of g[s].values)
            t.push({
              index: i,
              colSpan: s,
              rowSpan: o,
              spec_value_name: a.spec_value_name
            }), i = i + o;
        else
          i++;
      o = o * g[s].values.length;
    }
    t.reverse(), oe.splice(0, oe.length, ...t);
  }, p = m({
    spec: "",
    // 所选规格id，空为全部
    price: "",
    // 销售价
    market_price: "",
    // 划线价
    cost_price: "",
    // 成本价
    stock: "",
    // 库存
    sku_no: ""
    // 商品编码
  }), Se = {};
  for (let e in w)
    Se[e] = w[e].value;
  Object.assign(p, Se);
  const Je = (e) => {
    r.skuIsIndeterminate = !1, e ? r.skuCheckedCities = Object.keys(c) : r.skuCheckedCities = [];
  }, Ke = (e) => {
    const o = e.length;
    r.skuCheckAll = o === Object.keys(c).length, r.skuIsIndeterminate = o > 0 && o < Object.keys(c).length;
  }, Ue = () => {
    if (r.skuCheckedCities.length == 0) {
      f({
        type: "warning",
        message: `${n("pleaseSelectSku")}`
      });
      return;
    }
    if (p.price && (isNaN(p.price) || !h.digit.test(p.price))) {
      f({
        type: "warning",
        message: `${n("priceTips")}`
      });
      return;
    }
    if (p.market_price && (isNaN(p.market_price) || !h.digit.test(p.market_price))) {
      f({
        type: "warning",
        message: `${n("marketPriceTips")}`
      });
      return;
    }
    if (p.cost_price && (isNaN(p.cost_price) || !h.digit.test(p.cost_price))) {
      f({
        type: "warning",
        message: `${n("costPriceTips")}`
      });
      return;
    }
    if (p.stock && (isNaN(p.stock) || !h.number.test(p.stock))) {
      f({
        type: "warning",
        message: `${n("stockTips")}`
      });
      return;
    }
    for (let e in w) {
      let o = h[w[e].regExp], t = w[e].message;
      if (p[e] && (isNaN(p[e]) || !o.test(p[e]))) {
        f({
          type: "warning",
          message: t
        });
        return;
      }
    }
    r.skuCheckedCities.forEach((e) => {
      p.price && (c[e].price = p.price), p.market_price && (c[e].market_price = p.market_price), p.cost_price && (c[e].cost_price = p.cost_price), p.stock && (c[e].stock = p.stock);
      for (let o in w)
        p[o] && (c[e][o] = p[o]);
      p.sku_no && (c[e].sku_no = p.sku_no);
    }), p.price = "", p.market_price = "", p.cost_price = "", p.stock = "", p.sku_no = "";
    for (let e in w)
      p[e] = "";
  }, h = {
    required: /[\S]+/,
    number: /^\d{0,10}$/,
    digit: /^\d{0,10}(.?\d{0,2})$/,
    special: /^\d{0,10}(.?\d{0,3})$/
  }, Qe = _e(() => {
    let e = {
      goods_name: [
        {
          required: !0,
          trigger: "blur",
          validator: (o, t, s) => {
            t === "" && s(new Error(n("goodsNamePlaceholder"))), t.length > 60 ? s(new Error(n("goodsNameMaxLengthTips"))) : s();
          }
        }
      ],
      sub_title: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            t.length > 100 ? s(new Error(n("subTitleMaxLengthTips"))) : s();
          }
        }
      ],
      goods_image: [
        { required: !0, message: n("goodsImagePlaceholder"), trigger: "blur" }
      ],
      goods_category: [
        { required: !0, message: n("goodsCategoryPlaceholder"), trigger: "blur" }
      ],
      sort: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            isNaN(t) || !h.number.test(t) ? s(new Error(n("sortTips"))) : s();
          }
        }
      ],
      // unit: [
      //     {required: true, message: t('unitPlaceholder'), trigger: 'blur'}
      // ],
      // 单规格
      price: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "single" ? t === "" ? s(new Error(n("pricePlaceholder"))) : isNaN(t) || !h.digit.test(t) ? s(new Error(n("priceTips"))) : t < 0 ? s(new Error(n("priceNotZeroTips"))) : s() : s();
          }
        }
      ],
      market_price: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "single" ? isNaN(t) || !h.digit.test(t) ? s(new Error(n("marketPriceTips"))) : t < 0 ? s(new Error(n("marketPriceNotZeroTips"))) : s() : s();
          }
        }
      ],
      cost_price: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "single" ? isNaN(t) || !h.digit.test(t) ? s(new Error(n("costPriceTips"))) : t < 0 ? s(new Error(n("costPriceNotZeroTips"))) : s() : s();
          }
        }
      ],
      stock: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "single" ? t === "" ? s(new Error(n("stockPlaceholder"))) : isNaN(t) || !h.number.test(t) ? s(new Error(n("stockTips"))) : t < 0 ? s(new Error(n("stockNotZeroTips"))) : s() : s();
          }
        }
      ],
      virtual_sale_num: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "single" ? isNaN(t) || !h.number.test(t) ? s(new Error(n("virtualSaleNumTips"))) : t < 0 ? s(new Error(n("virtualSaleNumNotZeroTips"))) : s() : s();
          }
        }
      ],
      // 多规格
      spec_type: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            r.spec_type == "multi" && Object.keys(c).length == 0 && s(new Error(n("pleaseEditSpecPlaceholder"))), s();
          }
        }
      ],
      max_buy: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            t === "" ? s(new Error(n("maxBuyPlaceholder"))) : isNaN(t) || !h.number.test(t) ? s(new Error(n("maxBuyTips"))) : t < 1 ? s(new Error(n("maxBuyNotZeroTips"))) : s();
          }
        }
      ],
      min_buy: [
        {
          trigger: "blur",
          validator: (o, t, s) => {
            isNaN(t) || !h.number.test(t) ? s(new Error(n("minBuyFormatErrorTips"))) : t < 0 ? s(new Error(n("minBuyNotZeroTips"))) : r.is_limit == 1 && t > Number(r.max_buy) ? s(new Error(n("minBuyGreaterThanMaxBuyTips"))) : s();
          }
        }
      ],
      goods_desc: [
        {
          required: !0,
          trigger: ["blur", "change"],
          validator: (o, t, s) => {
            if (t === "")
              s(new Error(n("goodsDescPlaceholder")));
            else {
              if (t.length < 5 || t.length > 5e4)
                return s(new Error(n("goodsDescMaxTips"))), !1;
              s();
            }
          }
        }
      ]
    };
    return B && Object.assign(e, B(r, h)), e;
  }), We = () => [{
    trigger: "blur",
    validator: (e, o, t) => {
      r.spec_type == "multi" ? o.length == 0 ? t(n("pricePlaceholder")) : isNaN(o) || !h.digit.test(o) ? t(n("priceTips")) : o < 0 ? t(n("priceNotZeroTips")) : t() : t();
    }
  }], Xe = () => [{
    trigger: "blur",
    validator: (e, o, t) => {
      r.spec_type == "multi" ? isNaN(o) || !h.digit.test(o) ? t(n("marketPriceTips")) : o < 0 ? t(n("marketPriceNotZeroTips")) : t() : t();
    }
  }], et = () => [{
    trigger: "blur",
    validator: (e, o, t) => {
      r.spec_type == "multi" ? isNaN(o) || !h.digit.test(o) ? t(n("costPriceTips")) : o < 0 ? t(n("costPriceNotZeroTips")) : t() : t();
    }
  }], tt = () => [{
    trigger: "blur",
    validator: (e, o, t) => {
      r.spec_type == "multi" ? o.length == 0 ? t(n("stockPlaceholder")) : isNaN(o) || !h.number.test(o) ? t(n("stockTips")) : o < 0 ? t(n("stockNotZeroTips")) : t() : t();
    }
  }], st = (e) => {
    let o = [
      {
        key: "basic",
        verify: !1,
        ref: x.basicFormRef
      },
      {
        key: "price_stock",
        verify: !1,
        ref: x.priceStockFormRef
      },
      {
        key: "price_stock",
        verify: !1,
        ref: x.skuFormRef
      },
      {
        key: "price_stock",
        verify: !1,
        ref: x.priceStockCommonFormRef
      }
    ];
    o = o.concat(y);
    let t = {
      key: "detail",
      verify: !1,
      ref: x.detailFormRef
    };
    if (o.push(t), o.forEach((s, i) => {
      s.ref.validate((a) => {
        s.verify = a;
      });
    }), r.spec_type == "multi") {
      let s = !0, i = [], a = [];
      for (let l = 0; l < g.length; l++) {
        const _ = g[l];
        if (De.require(_.spec_name)) {
          s = !1, f({ type: "warning", message: `${n("specNameRequire")}` });
          break;
        }
        if (i.indexOf(_.spec_name) > -1) {
          s = !1, f({ type: "warning", message: `${n("specNameRepeat")}` });
          break;
        } else
          i.push(_.spec_name);
        if (_.values.length)
          for (let u = 0; u < _.values.length; u++) {
            const S = _.values[u];
            if (De.require(S.spec_value_name)) {
              s = !1, f({ type: "warning", message: `${n("specValueRequire")}` });
              break;
            }
            if (a.indexOf(S.spec_value_name) > -1) {
              s = !1, f({ type: "warning", message: `${n("specValueNameRepeat")}` });
              break;
            } else
              a.push(S.spec_value_name);
          }
        else
          s = !1, f({ type: "warning", message: `${n("specValueRequire")}` });
        if (!s)
          break;
      }
      if (!s) {
        I.value = "price_stock";
        return;
      }
      let d = !1;
      for (const l in c)
        c[l].is_default && (d = !0);
      if (!d) {
        I.value = "price_stock", f({ type: "warning", message: `${n("lackDefaultSpec")}` });
        return;
      }
    }
    setTimeout(() => {
      let s = !0;
      for (let i = 0; i < o.length; i++)
        if (o[i].verify == !1) {
          I.value = o[i].key, s = !1;
          break;
        }
      s && e && e();
    }, 10);
  }, ot = (e = null) => {
    st(async () => {
      if (C.value)
        return;
      C.value = !0;
      const o = r.goods_id ? E : T, t = ue(r), s = t.goods_image.split(",")[0], i = await yt(s);
      if (t.goods_image_width = i ? i.width : 800, t.goods_image_height = i ? i.height : 800, t.spec_type == "multi") {
        t.stock = 0;
        for (const l in c)
          c[l].stock && (t.stock += parseInt(c[l].stock));
      }
      const a = [];
      t.goods_category.forEach((l) => {
        typeof l == "object" ? l.forEach((_) => {
          a.indexOf(_) == -1 && a.push(_);
        }) : a.indexOf(l) == -1 && a.push(l);
      }), t.goods_category = a, t.goods_sku_data = c, t.goods_spec_format = g, t.attr_format = [], pe(k).forEach((l, _) => {
        if (l.attr_value_name && l.select_child_val || l.attr_value_id > 0) {
          let u = {};
          u.attr_id = l.attr_id, u.attr_value_id = l.attr_value_id, u.attr_value_name = l.attr_value_name, u.type = l.type, u.sort = l.sort ? l.sort : 0, u.attr_child_value_id = l.select_child_name, u.attr_child_value_name = l.select_child_val, t.attr_format.push(u);
        }
      }), t.attr_format.sort((l, _) => _.sort - l.sort), e && Object.assign(t, e(t)), o(t).then((l) => {
        C.value = !1, v.push("/shop/goods/list");
      }).catch(() => {
        C.value = !1;
      });
    });
  }, rt = () => {
    v.push("/shop/goods/list");
  }, it = (e) => {
    e.target.value = e.target.value.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g, ""), e.target.value = e.target.value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, "");
  }, nt = (e) => {
    var o;
    (o = x.detailFormRef) == null || o.validateField("goods_desc");
  }, at = (e) => {
    if (!e.target.value)
      return !1;
    const o = {
      goods_id: r.goods_id,
      sku_no: e.target.value
    };
    Dt(o).then((t) => {
    });
  }, ie = m([]), Ne = () => {
    Oe({}).then((e) => {
      ie.splice(0, ie.length, ...e.data);
    });
  };
  Ne();
  const k = m([]), Ce = (e = [], o = !1) => {
    if (e.length == 0) {
      let s = pe(k);
      s = s.filter((i) => i.attr_value_id < 0), k.splice(0, k.length, ...s);
    }
    const t = () => {
      if (o) {
        k.forEach((s) => {
          for (let i = 0; i < r.attr_format.length; i++)
            if (r.attr_format[i].attr_value_id == s.attr_value_id) {
              s.select_child_name = r.attr_format[i].attr_child_value_id, s.select_child_val = r.attr_format[i].attr_child_value_name, s.sort = r.attr_format[i].sort;
              break;
            }
        });
        for (let s = 0; s < r.attr_format.length; s++)
          if (r.attr_format[s].attr_value_id < 0) {
            let i = r.attr_format[s], a = {
              attr_id: i.attr_id,
              attr_value_id: i.attr_value_id,
              attr_value_name: i.attr_value_name,
              sort: i.sort ? i.sort : 0,
              type: "text",
              select_child_name: i.attr_child_value_id,
              select_child_val: i.attr_child_value_name
            };
            k.push(a);
          }
      }
    };
    e.length ? Oe({
      attr_id_arr: e
    }).then((s) => {
      let i = s.data;
      if (i && Object.keys(i).length) {
        let a = pe(k);
        a = a.filter((l) => l.attr_value_id > 0 ? e.indexOf(l.attr_id) != -1 : !0);
        let d = a.map((l) => l.attr_value_id);
        i.forEach((l) => {
          if (l.attr_value_format) {
            let _ = JSON.parse(l.attr_value_format);
            d.length && d.forEach((u) => {
              _ = _.filter((S) => S.attr_value_id != u);
            }), _.filter((u) => {
              u.attr_id = l.attr_id, u.select_child_name = u.type == "checkbox" ? [] : "", u.select_child_val = u.type == "checkbox" ? [] : "";
            }), _.sort((u, S) => S.sort - u.sort), a = a.concat(_), k.splice(0, k.length, ...a);
          }
        }), t();
      }
    }) : t();
  };
  return {
    formData: r,
    activeName: I,
    tabHandleClick: K,
    goodsType: M,
    changeGoodsType: A,
    goodsCategoryOptions: P,
    goodsCategoryProps: U,
    categoryHandleChange: Re,
    toGoodsCategoryEvent: Ie,
    refreshGoodsCategory: fe,
    brandOptions: V,
    toGoodsBrandEvent: Pe,
    refreshGoodsBrand: ge,
    posterOptions: Q,
    toPosterEvent: $e,
    refreshGoodsPoster: me,
    detailTemplateOptions: W,
    toDetailTemplateEvent: Ae,
    refreshDetailTemplate: he,
    diyFormOptions: X,
    toDiyFormEvent: Ve,
    refreshDiyForm: ye,
    labelOptions: ee,
    toGoodsLabelEvent: Fe,
    refreshGoodsLabel: ve,
    serviceOptions: te,
    toGoodsServiceEvent: je,
    refreshGoodsService: ke,
    supplierOptions: se,
    toSupplierEvent: Ge,
    refreshSupplier: be,
    goodsSpecFormat: g,
    goodsSkuData: c,
    specData: oe,
    generateRandom: j,
    isDisabledPrice: F,
    addSpec: Be,
    deleteSpec: ze,
    addSpecValue: Ze,
    specValueNameInputListener: qe,
    deleteSpecValue: Me,
    specValueIsDefaultChangeListener: He,
    specStockSum: re,
    batchOperation: p,
    skuHandleCheckAllChange: Je,
    handleCheckedCitiesChange: Ke,
    saveBatch: Ue,
    regExp: h,
    formRules: Qe,
    skuPriceRules: We,
    skuMarketPriceRules: Xe,
    skuCostPriceRules: et,
    skuStockRules: tt,
    handleGoodsInit: Le,
    save: ot,
    back: rt,
    filterSpecial: it,
    handleBlur: nt,
    attrOptions: ie,
    attrChange: Ce,
    getAttrListFn: Ne,
    attrTableData: k,
    addAttr: () => {
      let e = {
        attr_id: "",
        attr_value_id: "",
        attr_value_name: "",
        child: {
          id: 1,
          name: ""
        },
        sort: 0,
        type: "text",
        select_child_name: "",
        select_child_val: ""
      };
      e.attr_value_id = -Math.floor(new Date().getSeconds() + Math.floor(new Date().getMilliseconds())), e.sort = k.length + 1, k.push(e);
    },
    delAttr: (e) => {
      k.splice(e, 1);
    },
    attrRadioChange: (e, o) => {
      k.forEach((t, s, i) => (t.type == "radio" && t.child.forEach((a, d) => {
        a.id == o && (i[s].select_child_name = a.id, i[s].select_child_val = a.name);
      }), t));
    },
    attrCheckboxChange: (e, o) => {
      k[e].select_child_val = [], k[e].child.forEach((t, s) => {
        o.indexOf(t.id) > -1 && k[e].select_child_val.push(t.name);
      });
    },
    goodsVerifyFn: at
  };
}
export {
  ls as _,
  cs as u
};
