import { ElPageHeader as ce, ElCard as _e, ElInput as ge, ElFormItem as me, ElOption as fe, ElSelect as he, ElRadio as be, ElRadioGroup as ye, ElImage as ve, ElTableColumn as ke, ElTooltip as xe, ElButton as Ve, ElTable as Ee, ElCascader as Ce, ElCheckbox as we, ElCheckboxGroup as Se, ElSwitch as Te, ElForm as Le, ElLoadingDirective as Pe } from "element-plus/es";
import { defineComponent as Re, ref as R, reactive as w, computed as Ge, openBlock as p, createElementBlock as y, createVNode as i, withCtx as n, unref as s, withDirectives as Ue, createBlock as f, Fragment as S, renderList as T, createElementVNode as u, toDisplayString as _, createTextVNode as V, createCommentVNode as L } from "vue";
import { _ as K } from "./goods_default-bd0cc1e2.js";
import { t } from "/admin/assets/shared/admin-lang.js";
import { useRouter as Be, useRoute as je } from "vue-router";
import { ArrowLeft as De } from "@element-plus/icons-vue";
import { ElMessage as D } from "element-plus";
import { T as Ne, U as qe, V as Oe, W as $e } from "./marketing-f8ec8b08.js";
import Ae from "./goods-select-popup-ef80f0be.js";
import { a as Fe, F as Ie, D as Me } from "./goods-d2a56d58.js";
import { img as He, filterNumber as H, deepClone as Ke } from "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "./_plugin-vue_export-helper-dad06003.js";
const ze = { class: "main-container" }, Je = { class: "ml-[120px] mb-[10px] text-[12px] text-[#999] leading-[20px]" }, We = { class: "flex items-center cursor-pointer" }, Qe = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, Xe = /* @__PURE__ */ u("div", { class: "image-slot" }, [
  /* @__PURE__ */ u("img", {
    class: "w-[60px] h-[60px]",
    src: K
  })
], -1), Ye = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: K,
  fit: "contain"
}, Ze = { class: "ml-2" }, eo = ["title"], oo = { class: "text-primary text-[12px]" }, lo = { style: { display: "inline-flex", "align-items": "center" } }, to = { class: "mr-[5px]" }, so = /* @__PURE__ */ u("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), ao = { class: "ml-[10px]" }, ro = { class: "ml-[10px]" }, no = { class: "ml-[10px]" }, io = { class: "fixed-footer-wrap" }, uo = { class: "fixed-footer" }, Lo = /* @__PURE__ */ Re({
  __name: "edit",
  setup(po) {
    const v = Be(), z = je(), b = R(!0), E = z.query.rank_id, h = R([]), l = w({
      name: "",
      goods_source: "all",
      rank_type: "",
      sort: "",
      rule_type: "sale",
      category_ids: [],
      status: 1,
      brand_ids: [],
      label_ids: [],
      goods_json: [],
      goods_ids: []
    }), k = w({
      rankTypeList: [],
      goodsSourceList: [],
      ruleTypeList: []
    }), N = R(), J = Ge(() => ({
      name: [
        { required: !0, message: t("rankNamePlaceholder"), trigger: "blur" }
      ],
      rule_type: [
        {
          required: !0,
          message: t("ruleTypePlaceholder"),
          trigger: "change"
        }
      ],
      rank_type: [
        {
          required: !0,
          message: t("rankTypePlaceholder"),
          trigger: "change"
        }
      ],
      goods_source: [
        {
          required: !0,
          message: t("goodsSourcePlaceholder"),
          trigger: "change"
        }
      ],
      label_ids: [
        {
          validator: (d, e, a) => {
            l.goods_source === "label" && (!e || e.length === 0) ? a(t("labelTips")) : a();
          },
          trigger: "change"
        }
      ],
      brand_ids: [
        {
          required: !0,
          validator: (d, e, a) => {
            l.goods_source === "brand" && (!e || e.length === 0) ? a(t("brandTips")) : a();
          },
          trigger: "change"
        }
      ],
      category_ids: [
        {
          required: !0,
          validator: (d, e, a) => {
            l.goods_source === "category" && (!e || e.length === 0) ? a(t("categoryTips")) : a();
          },
          trigger: "change"
        }
      ],
      goods_json: [
        {
          required: !0,
          trigger: "blur",
          validator: (d, e, a) => {
            l.goods_source == "goods" && (h.value.length == 0 ? a(new Error(t("goodsJsonEmpty"))) : a());
          }
        }
      ]
    }));
    (() => {
      if (Ne().then((d) => {
        b.value = !1, k.rankTypeList = d.data.rank_type, k.goodsSourceList = d.data.goods_source, k.ruleTypeList = d.data.rule_type;
      }), E) {
        b.value = !0;
        const d = Number(E);
        qe(d).then((e) => {
          const a = e.data;
          a && (Object.assign(l, a), l.goods_source == "goods" && (l.goods_ids.splice(0, l.goods_ids.length), l.goods_json.forEach((r) => {
            l.goods_ids.push(r.goods_id);
          })), h.value = a.goods_list.map((r) => ({
            goods_id: r.goods_id,
            sort: r.sort,
            price: r.goodsSku.price,
            goods_type_name: r.goods_type_name,
            goods_name: r.goods_name,
            goods_image: r.goodsSku.sku_image
          })), b.value = !1);
        });
      }
    })();
    const G = w([]), W = {
      multiple: !0
    }, Q = (d) => {
      console.log(d, l.category_ids, l.category_ids.toString());
    }, X = () => {
      const d = v.resolve({
        path: "/shop/goods/category"
      });
      window.open(d.href);
    }, q = (d = !1) => {
      Fe().then((e) => {
        const a = e.data;
        if (a) {
          const r = [];
          a.forEach((m) => {
            const c = [];
            m.child_list && m.child_list.forEach((C) => {
              c.push({
                value: C.category_id,
                label: C.category_name
              });
            }), r.push({
              value: m.category_id,
              label: m.category_name,
              children: c
            });
          }), G.splice(
            0,
            G.length,
            ...r
          ), d && D({
            message: t("refreshSuccess"),
            type: "success"
          });
        }
      });
    };
    q();
    const U = w([]), Y = () => {
      const d = v.resolve({
        path: "/shop/goods/brand"
      });
      window.open(d.href);
    }, O = (d = !1) => {
      Ie({}).then((e) => {
        const a = e.data;
        a && (U.splice(0, U.length, ...a), d && D({
          message: t("refreshSuccess"),
          type: "success"
        }));
      });
    };
    O();
    const B = w([]), Z = () => {
      const d = v.resolve({
        path: "/shop/goods/label"
      });
      window.open(d.href);
    }, $ = (d = !1) => {
      Me({}).then((e) => {
        const a = e.data;
        a && (B.splice(0, B.length, ...a), d && D({
          message: t("refreshSuccess"),
          type: "success"
        }));
      });
    };
    $();
    const ee = (d) => {
      let e = [];
      for (let a in d) {
        let r = d[a], m = {
          goods_id: r.goods_id,
          price: r.goodsSku.price,
          goods_type_name: r.goods_type_name,
          goods_image: r.goods_cover,
          goods_name: r.goods_name
        };
        h.value.length && h.value.forEach((c) => {
          c.goods_id == m.goods_id && (m = Object.assign(m, c));
        }), e.push(Ke(m));
      }
      h.value = e;
    }, oe = (d, e) => {
      h.value.splice(e, 1), l.goods_ids.splice(l.goods_ids.indexOf(d.goods_id), 1);
    }, x = R(!1), le = async () => {
      var d;
      x.value || await ((d = N.value) == null ? void 0 : d.validate(async (e) => {
        if (e) {
          b.value = !0, l.goods_json = h.value.map((r) => ({
            goods_id: r.goods_id,
            // 保留 goods_id
            sort: r.sort
            // 保留 sort 排序号
          }));
          const a = [];
          l.category_ids.forEach((r) => {
            Array.isArray(r) && r.length === 2 ? a.push(r[1]) : Array.isArray(r) && r.length === 1 ? a.push(r[0]) : a.push(r);
          }), l.category_ids = a, E ? (l.id = E, Oe(l).then((r) => {
            b.value = !1, x.value = !1, r.data && v.push("/shop/marketing/goods_rank/list");
          }).catch(() => {
            b.value = !1, x.value = !1;
          })) : $e(l).then((r) => {
            b.value = !1, x.value = !1, r.data && v.push("/shop/marketing/goods_rank/list");
          }).catch(() => {
            b.value = !1, x.value = !1;
          });
        } else
          x.value = !1;
      }));
    }, A = () => {
      v.push("/shop/marketing/goods_rank/list");
    };
    return (d, e) => {
      const a = ce, r = _e, m = ge, c = me, C = fe, F = he, I = be, M = ye, te = ve, P = ke, se = xe, j = Ve, ae = Ee, re = Ce, ne = we, de = Se, ie = Te, ue = Le, pe = Pe;
      return p(), y("div", ze, [
        i(r, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: n(() => [
            i(a, {
              content: s(E) ? s(t)("updateRanking") : s(t)("addRanking"),
              icon: s(De),
              onBack: e[0] || (e[0] = (o) => A())
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        Ue((p(), f(r, {
          class: "box-card mt-[15px] !border-none",
          shadow: "never"
        }, {
          default: n(() => [
            i(ue, {
              model: l,
              "label-width": "120px",
              ref_key: "formRef",
              ref: N,
              rules: s(J),
              class: "page-form"
            }, {
              default: n(() => [
                i(c, {
                  label: s(t)("rankName"),
                  prop: "name"
                }, {
                  default: n(() => [
                    i(m, {
                      modelValue: l.name,
                      "onUpdate:modelValue": e[1] || (e[1] = (o) => l.name = o),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: s(t)("rankNamePlaceholder"),
                      class: "input-width",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: s(t)("rankType"),
                  prop: "rank_type"
                }, {
                  default: n(() => [
                    i(F, {
                      modelValue: l.rank_type,
                      "onUpdate:modelValue": e[2] || (e[2] = (o) => l.rank_type = o),
                      placeholder: s(t)("rankTypePlaceholder"),
                      clearable: ""
                    }, {
                      default: n(() => [
                        (p(!0), y(S, null, T(k.rankTypeList, (o, g) => (p(), f(C, {
                          key: g,
                          label: o,
                          value: g
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u("div", Je, _(s(t)("rankTypeTips")), 1),
                i(c, {
                  label: s(t)("ruleType"),
                  prop: "rule_type"
                }, {
                  default: n(() => [
                    i(M, {
                      modelValue: l.rule_type,
                      "onUpdate:modelValue": e[3] || (e[3] = (o) => l.rule_type = o)
                    }, {
                      default: n(() => [
                        (p(!0), y(S, null, T(k.ruleTypeList, (o, g) => (p(), f(I, {
                          key: g,
                          label: g
                        }, {
                          default: n(() => [
                            V(_(o), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: s(t)("goodsSource"),
                  prop: "goods_source"
                }, {
                  default: n(() => [
                    i(M, {
                      modelValue: l.goods_source,
                      "onUpdate:modelValue": e[4] || (e[4] = (o) => l.goods_source = o)
                    }, {
                      default: n(() => [
                        (p(!0), y(S, null, T(k.goodsSourceList, (o, g) => (p(), f(I, {
                          key: g,
                          label: g
                        }, {
                          default: n(() => [
                            V(_(o), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l.goods_source == "goods" ? (p(), f(c, {
                  key: 0,
                  label: s(t)("selectGoods"),
                  prop: "goods_json"
                }, {
                  default: n(() => [
                    i(Ae, {
                      ref: "goodsSelectPopupRef",
                      modelValue: l.goods_ids,
                      "onUpdate:modelValue": e[5] || (e[5] = (o) => l.goods_ids = o),
                      onGoodsSelect: ee,
                      min: 1,
                      max: 99
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : L("", !0),
                h.value && h.value.length && l.goods_source == "goods" ? (p(), f(c, { key: 1 }, {
                  default: n(() => [
                    i(ae, {
                      data: h.value,
                      size: "large",
                      "max-height": "400"
                    }, {
                      default: n(() => [
                        i(P, {
                          prop: "goods_id",
                          label: s(t)("goodsSelectPopupGoodsInfo"),
                          "min-width": "300"
                        }, {
                          default: n(({ row: o }) => [
                            u("div", We, [
                              u("div", Qe, [
                                o.goods_image ? (p(), f(te, {
                                  key: 0,
                                  class: "w-[60px] h-[60px]",
                                  src: s(He)(o.goods_image),
                                  fit: "contain"
                                }, {
                                  error: n(() => [
                                    Xe
                                  ]),
                                  _: 2
                                }, 1032, ["src"])) : (p(), y("img", Ye))
                              ]),
                              u("div", Ze, [
                                u("span", {
                                  title: o.sku_name,
                                  class: "multi-hidden"
                                }, _(o.sku_name ? o.goods_name + " " + o.sku_name : o.goods_name), 9, eo),
                                u("span", oo, _(o.goods_type_name), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(P, {
                          prop: "price",
                          label: s(t)("goodsSelectPopupPrice"),
                          "min-width": "120"
                        }, {
                          default: n(({ row: o }) => [
                            u("div", null, "￥" + _(o.price), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(P, {
                          prop: "sort",
                          label: s(t)("sort"),
                          "min-width": "120"
                        }, {
                          header: n(() => [
                            u("div", lo, [
                              u("span", to, _(s(t)("sort")), 1),
                              i(se, {
                                class: "box-item",
                                effect: "light",
                                content: s(t)("sortRules"),
                                placement: "top"
                              }, {
                                default: n(() => [
                                  so
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ])
                          ]),
                          default: n(({ row: o }) => [
                            i(m, {
                              onKeyup: e[6] || (e[6] = (g) => s(H)(g)),
                              modelValue: o.sort,
                              "onUpdate:modelValue": (g) => o.sort = g,
                              modelModifiers: { number: !0 },
                              class: "w-[70px]",
                              maxlength: "8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(P, {
                          label: s(t)("operation"),
                          align: "right",
                          "min-width": "160"
                        }, {
                          default: n(({ row: o, $index: g }) => [
                            i(j, {
                              type: "primary",
                              link: "",
                              onClick: (_o) => oe(o, g)
                            }, {
                              default: n(() => [
                                V(_(s(t)("delete")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ]),
                  _: 1
                })) : L("", !0),
                l.goods_source == "category" ? (p(), f(c, {
                  key: 2,
                  label: s(t)("goodsSelectPopupGoodsCategory"),
                  prop: "category_ids"
                }, {
                  default: n(() => [
                    i(re, {
                      modelValue: l.category_ids,
                      "onUpdate:modelValue": e[7] || (e[7] = (o) => l.category_ids = o),
                      options: G,
                      props: W,
                      clearable: "",
                      filterable: "",
                      onChange: Q,
                      "popper-class": "choice"
                    }, null, 8, ["modelValue", "options"]),
                    u("div", ao, [
                      u("span", {
                        class: "cursor-pointer text-primary mr-[10px]",
                        onClick: e[8] || (e[8] = (o) => q(!0))
                      }, _(s(t)("refresh")), 1),
                      u("span", {
                        class: "cursor-pointer text-primary",
                        onClick: X
                      }, _(s(t)("addCategory")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : L("", !0),
                l.goods_source == "brand" ? (p(), f(c, {
                  key: 3,
                  label: s(t)("brand"),
                  prop: "brand_ids"
                }, {
                  default: n(() => [
                    i(F, {
                      modelValue: l.brand_ids,
                      "onUpdate:modelValue": e[9] || (e[9] = (o) => l.brand_ids = o),
                      placeholder: s(t)("brandPlaceholder"),
                      clearable: "",
                      multiple: ""
                    }, {
                      default: n(() => [
                        (p(!0), y(S, null, T(U, (o) => (p(), f(C, {
                          key: o.brand_id,
                          label: o.brand_name,
                          value: o.brand_id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"]),
                    u("div", ro, [
                      u("span", {
                        class: "cursor-pointer text-primary mr-[10px]",
                        onClick: e[10] || (e[10] = (o) => O(!0))
                      }, _(s(t)("refresh")), 1),
                      u("span", {
                        class: "cursor-pointer text-primary",
                        onClick: Y
                      }, _(s(t)("addBrand")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : L("", !0),
                l.goods_source == "label" ? (p(), f(c, {
                  key: 4,
                  label: s(t)("label"),
                  prop: "label_ids"
                }, {
                  default: n(() => [
                    i(de, {
                      modelValue: l.label_ids,
                      "onUpdate:modelValue": e[11] || (e[11] = (o) => l.label_ids = o)
                    }, {
                      default: n(() => [
                        (p(!0), y(S, null, T(B, (o, g) => (p(), f(ne, {
                          label: o.label_id,
                          key: g
                        }, {
                          default: n(() => [
                            V(_(o.label_name), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    u("div", no, [
                      u("span", {
                        class: "cursor-pointer text-primary mr-[10px]",
                        onClick: $
                      }, _(s(t)("refresh")), 1),
                      u("span", {
                        class: "cursor-pointer text-primary",
                        onClick: Z
                      }, _(s(t)("addLabel")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : L("", !0),
                i(c, {
                  label: s(t)("sort"),
                  prop: "sort"
                }, {
                  default: n(() => [
                    i(m, {
                      modelValue: l.sort,
                      "onUpdate:modelValue": e[12] || (e[12] = (o) => l.sort = o),
                      modelModifiers: { number: !0 },
                      clearable: "",
                      placeholder: s(t)("sortPlaceholder"),
                      class: "input-width",
                      maxlength: "8",
                      "show-word-limit": "",
                      onKeyup: e[13] || (e[13] = (o) => s(H)(o)),
                      onBlur: e[14] || (e[14] = (o) => l.sort = o.target.value)
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: s(t)("isShow"),
                  prop: "status"
                }, {
                  default: n(() => [
                    i(ie, {
                      modelValue: l.status,
                      "onUpdate:modelValue": e[15] || (e[15] = (o) => l.status = o),
                      "active-value": 1,
                      "inactive-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        })), [
          [pe, b.value]
        ]),
        u("div", io, [
          u("div", uo, [
            i(j, {
              type: "primary",
              onClick: e[16] || (e[16] = (o) => le())
            }, {
              default: n(() => [
                V(_(s(t)("save")), 1)
              ]),
              _: 1
            }),
            i(j, {
              onClick: e[17] || (e[17] = (o) => A())
            }, {
              default: n(() => [
                V(_(s(t)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export {
  Lo as default
};
