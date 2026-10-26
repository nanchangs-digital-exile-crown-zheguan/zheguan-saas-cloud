import { ElPageHeader as ae, ElCard as ne, ElImage as re, ElFormItem as de, ElInput as ue, ElCheckbox as pe, ElButton as me, ElTableColumn as ce, ElTooltip as _e, ElTable as fe, ElRadio as ge, ElRadioGroup as ve, ElForm as he, ElLoadingDirective as be } from "element-plus/es";
import { _ as xe } from "./index.vue_vue_type_script_setup_true_lang-e89081e9.js";
import { _ as ye } from "./index-36e25503.js";
import { defineComponent as Ve, ref as T, reactive as we, computed as Te, onMounted as ke, withDirectives as Ne, openBlock as v, createElementBlock as k, createVNode as i, withCtx as r, unref as l, createElementVNode as d, toDisplayString as p, createBlock as x, createCommentVNode as N, createTextVNode as P, pushScopeId as Ue, popScopeId as Ee } from "vue";
import { _ as B } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { img as L, deepClone as Se } from "/admin/assets/shared/core-shared.js";
import { ElMessage as y } from "element-plus";
import { ArrowLeft as Pe } from "@element-plus/icons-vue";
import { K as Me, L as Ce } from "./marketing-f8ec8b08.js";
import { useRoute as $e, useRouter as Ie } from "vue-router";
import { _ as qe } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./sortable.esm-fc069a97.js";
import "/admin/assets/shared/core-shared.js";
const $ = (I) => (Ue("data-v-cf4a0eba"), I = I(), Ee(), I), Be = { class: "main-container" }, Re = { class: "panel-title !text-sm" }, Fe = {
  key: 0,
  class: "flex min-w-[512px] relative border-[1px] border-[#e7e7e7] border-solid mt-[16px]"
}, De = { class: "min-w-[78px] h-[78px] flex items-center justify-center" }, Oe = /* @__PURE__ */ $(() => /* @__PURE__ */ d("div", { class: "image-slot" }, [
  /* @__PURE__ */ d("img", {
    class: "w-[78px] h-[78px]",
    src: B
  })
], -1)), je = {
  key: 1,
  class: "w-[78px] h-[78px]",
  src: B,
  fit: "contain"
}, Ae = { class: "flex-1 py-[5px] pl-[10px] pr-[30px]" }, Le = { class: "text-[14px]" }, ze = { class: "text-[14px] !text-[var(--el-color-primary)]" }, Je = { class: "panel-title !text-sm" }, Ge = { class: "w-full sku_list" }, He = { class: "flex items-center mb-[15px]" }, Ke = { class: "flex items-center cursor-pointer" }, Qe = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, We = /* @__PURE__ */ $(() => /* @__PURE__ */ d("div", { class: "image-slot" }, [
  /* @__PURE__ */ d("img", {
    class: "w-[60px] h-[60px]",
    src: B
  })
], -1)), Xe = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: B,
  fit: "contain"
}, Ye = { class: "ml-2" }, Ze = ["title"], el = { key: 1 }, ll = { style: { display: "inline-flex", "align-items": "center" } }, tl = { class: "mr-[5px]" }, ol = /* @__PURE__ */ $(() => /* @__PURE__ */ d("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), il = { key: 1 }, sl = { class: "flex justify-center" }, al = { key: 1 }, nl = {
  key: 2,
  class: "mx-[20px]"
}, rl = { class: "panel-title !text-sm" }, dl = { class: "flex justify-center" }, ul = /* @__PURE__ */ $(() => /* @__PURE__ */ d("span", { class: "mx-[20px]" }, "+", -1)), pl = { class: "panel-title !text-sm" }, ml = { class: "flex justify-center" }, cl = /* @__PURE__ */ $(() => /* @__PURE__ */ d("span", { class: "mx-[20px]" }, "+", -1)), _l = { class: "panel-title !text-sm" }, fl = { class: "fixed-footer-wrap" }, gl = { class: "fixed-footer" }, vl = /* @__PURE__ */ Ve({
  __name: "goods_edit",
  setup(I) {
    const R = $e(), D = Ie(), z = R.meta.title, V = T(!0);
    we([
      { name: "商品", type: "goods" }
      // {name:'优惠券',type:'coupon'},
      // {name:'余额',type:'balance'},
    ]);
    const o = T({ ...{
      type: "goods",
      // 名称
      names: "",
      // 标题
      title: "",
      image: "",
      goods_info: {},
      coupon_ids: [],
      product_list: [],
      stock: "",
      limit_num: "",
      point: "",
      price: "",
      balance: "",
      isBalance: 1,
      content: ""
    } }), U = T(), h = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, J = Te(() => ({
      names: [
        { required: !0, message: e("goodsNamePlaceholder"), trigger: "blur" }
      ],
      image: [
        { required: !0, message: e("imagePlaceholder"), trigger: "change" }
      ],
      coupon_ids: [
        { required: !0, message: e("couponSelectPlaceholder"), trigger: "change" }
      ],
      product_list: [
        { required: !0, message: e("goodsSkuPlaceholder"), trigger: "change" }
      ]
    })), G = (m) => {
      V.value = !0, Me(m).then((n) => {
        o.value = Object.assign(o.value, n.data), o.value.type == "goods" ? o.value.product_list = n.data.goods_list : o.value.type == "coupon" ? (o.value.product_list = [], o.value.product_list.push(Se(o.value.coupon_info))) : (o.value.balance = o.value.product_detail[0].balance ? o.value.product_detail[0].balance : o.value.product_detail[0].money, o.value.isBalance = o.value.product_detail[0].balance ? 1 : 0), V.value = !1;
      }).catch(() => {
        V.value = !1;
      });
    };
    ke(() => {
      R.query.id && G(Number(R.query.id));
    });
    const H = (m) => {
      if (m.is_enabled = m.is_enabled ? 0 : 1, o.value.product_list.every((n) => n.is_enabled === 0)) {
        m.is_enabled = 1, y({
          type: "warning",
          message: `${e("noEnabledTip")}`
        });
        return;
      }
      m.stock = "", m.limit_num = "", m.point = "", m.price = "";
    }, u = T({
      stock: "",
      limit_num: "",
      point: "",
      price: ""
    }), M = T(), C = T(!1), K = (m) => {
      C.value = !1, F.value.toggleAllSelection();
    }, F = T(), E = T([]), Q = (m) => {
      E.value = m, M.value = !1, E.value.length > 0 && E.value.length < o.value.product_list.length ? C.value = !0 : C.value = !1, E.value.length == o.value.product_list.length && (M.value = !0);
    }, W = () => {
      if (!E.value.length) {
        y({
          type: "warning",
          message: `${e("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      if (u.value.stock) {
        if (isNaN(Number(u.value.stock)) || !h.number.test(u.value.stock)) {
          y({
            type: "warning",
            message: `${e("stockTips")}`
          });
          return;
        } else if (u.value.stock <= 0) {
          y({
            type: "warning",
            message: `${e("stockTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.limit_num) {
        if (isNaN(u.value.limit_num) || !h.number.test(u.value.limit_num)) {
          y({
            type: "warning",
            message: `${e("limitTips")}`
          });
          return;
        } else if (u.value.limit_num <= 0) {
          y({
            type: "warning",
            message: `${e("limitTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.point) {
        if (isNaN(u.value.point) || !h.number.test(u.value.point)) {
          y({
            type: "warning",
            message: `${e("pointTips")}`
          });
          return;
        } else if (u.value.point <= 0) {
          y({
            type: "warning",
            message: `${e("pointTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.price) {
        if (isNaN(u.value.price) || !h.digit.test(u.value.price)) {
          y({
            type: "warning",
            message: `${e("moneyTips")}`
          });
          return;
        } else if (u.value.price <= 0) {
          y({
            type: "warning",
            message: `${e("moneyTipsTwo")}`
          });
          return;
        }
      }
      o.value.product_list.forEach((m, n) => {
        E.value.forEach((b) => {
          b.sku_id === m.sku_id && (u.value.stock && (m.stock = u.value.stock + ""), u.value.limit_num && (m.limit_num = u.value.limit_num + ""), u.value.point && (m.point = u.value.point + ""), u.value.price && (m.price = u.value.price + ""), U.value && (U.value.validateField("product_list." + n + ".stock"), U.value.validateField("product_list." + n + ".limit_num"), U.value.validateField("product_list." + n + ".point"), U.value.validateField("product_list." + n + ".price")));
        });
      }), C.value = !1, M.value = !1, u.value = {
        stock: "",
        limit_num: "",
        point: "",
        price: ""
      }, F.value.clearSelection();
    }, X = async (m) => {
      V.value || !m || await m.validate(async (n) => {
        n && (V.value = !0, o.value.type == "goods" ? o.value.product_detail = JSON.stringify(o.value.product_list.map((b) => ({
          goods_id: b.goods_id,
          sku_id: b.sku_id,
          point: b.point,
          price: b.price,
          limit_num: b.limit_num,
          stock: b.stock,
          is_enabled: b.is_enabled
        })).filter((b) => b.is_enabled === 1)) : o.value.type == "coupon" ? o.value.product_detail = JSON.stringify(o.value.product_list.map((b) => ({
          coupon_id: b.id
        }))) : o.value.isBalance ? o.value.product_detail = JSON.stringify([{ balance: o.value.balance }]) : o.value.product_detail = JSON.stringify([{ money: o.value.balance }]), Ce(o.value).then((b) => {
          V.value = !1, D.push("/shop/marketing/exchange/goods_list");
        }).catch(() => {
          V.value = !1;
        }));
      });
    }, O = () => {
      D.push("/shop/marketing/exchange/goods_list");
    };
    return (m, n) => {
      const b = ae, S = ne, j = re, c = de, g = ue, Y = ye, Z = pe, q = me, w = ce, ee = _e, le = fe, A = ge, te = ve, oe = xe, ie = he, se = be;
      return Ne((v(), k("div", Be, [
        i(S, {
          class: "card !border-none",
          shadow: "never"
        }, {
          default: r(() => [
            i(b, {
              content: l(z),
              icon: l(Pe),
              onBack: n[0] || (n[0] = (t) => O())
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        i(ie, {
          class: "page-form mt-[15px]",
          model: o.value,
          "label-width": "120px",
          ref_key: "formRef",
          ref: U,
          rules: l(J)
        }, {
          default: r(() => [
            i(S, {
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", Re, p(l(e)("baseInfo")), 1),
                o.value.type == "goods" ? (v(), x(c, {
                  key: 0,
                  label: l(e)("goodsSelect")
                }, {
                  default: r(() => [
                    Object.keys(o.value.goods_info).length ? (v(), k("div", Fe, [
                      d("div", De, [
                        o.value.goods_info.goods_cover ? (v(), x(j, {
                          key: 0,
                          class: "w-[78px] h-[78px]",
                          src: l(L)(o.value.goods_info.goods_cover),
                          fit: "contain"
                        }, {
                          error: r(() => [
                            Oe
                          ]),
                          _: 1
                        }, 8, ["src"])) : (v(), k("img", je))
                      ]),
                      d("div", Ae, [
                        d("div", Le, p(o.value.goods_info.goods_name), 1),
                        d("div", ze, p(o.value.goods_info.goods_price), 1)
                      ])
                    ])) : N("", !0)
                  ]),
                  _: 1
                }, 8, ["label"])) : N("", !0),
                i(c, {
                  label: l(e)("goodsName"),
                  prop: "names"
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.names,
                      "onUpdate:modelValue": n[1] || (n[1] = (t) => o.value.names = t),
                      modelModifiers: { trim: !0 },
                      type: "textarea",
                      clearable: "",
                      placeholder: l(e)("goodsNamePlaceholder"),
                      class: "!w-[512px]",
                      "show-word-limit": "",
                      maxlength: 60
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: l(e)("goodsTitle")
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.title,
                      "onUpdate:modelValue": n[2] || (n[2] = (t) => o.value.title = t),
                      modelModifiers: { trim: !0 },
                      type: "textarea",
                      clearable: "",
                      placeholder: l(e)("goodsTitlePlaceholder"),
                      class: "!w-[512px]",
                      "show-word-limit": "",
                      maxlength: 60
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: l(e)("image"),
                  prop: "image"
                }, {
                  default: r(() => [
                    i(Y, {
                      modelValue: o.value.image,
                      "onUpdate:modelValue": n[3] || (n[3] = (t) => o.value.image = t),
                      limit: 6
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            o.value.type == "goods" ? (v(), x(S, {
              key: 0,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", Je, p(l(e)("redemptionSettings")), 1),
                o.value.product_list.length ? (v(), x(c, { key: 0 }, {
                  default: r(() => [
                    d("div", Ge, [
                      d("div", He, [
                        i(Z, {
                          modelValue: M.value,
                          "onUpdate:modelValue": n[4] || (n[4] = (t) => M.value = t),
                          size: "large",
                          class: "!mr-[15px]",
                          onChange: K,
                          indeterminate: C.value
                        }, {
                          default: r(() => [
                            d("span", null, "已选" + p(E.value.length) + "项", 1)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "indeterminate"]),
                        d("label", null, p(l(e)("batchOperation")), 1),
                        i(g, {
                          modelValue: u.value.stock,
                          "onUpdate:modelValue": n[5] || (n[5] = (t) => u.value.stock = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("stock"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        i(g, {
                          modelValue: u.value.limit_num,
                          "onUpdate:modelValue": n[6] || (n[6] = (t) => u.value.limit_num = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("limit"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        i(g, {
                          modelValue: u.value.point,
                          "onUpdate:modelValue": n[7] || (n[7] = (t) => u.value.point = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("integralUnit"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        i(g, {
                          modelValue: u.value.price,
                          "onUpdate:modelValue": n[8] || (n[8] = (t) => u.value.price = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("newPrice"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        i(q, {
                          class: "ml-[10px]",
                          type: "primary",
                          onClick: W
                        }, {
                          default: r(() => [
                            P(p(l(e)("confirm")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      i(le, {
                        class: "!max-w-[100%]",
                        data: o.value.product_list,
                        size: "large",
                        ref_key: "productListTableRef",
                        ref: F,
                        onSelectionChange: Q
                      }, {
                        empty: r(() => [
                          d("span", null, p(l(e)("emptyData")), 1)
                        ]),
                        default: r(() => [
                          i(w, {
                            type: "selection",
                            width: "55"
                          }),
                          i(w, {
                            label: l(e)("goodsSelectPopupGoodsInfo"),
                            "min-width": "300"
                          }, {
                            default: r(({ row: t }) => {
                              var a;
                              return [
                                d("div", Ke, [
                                  d("div", Qe, [
                                    t.sku_image ? (v(), x(j, {
                                      key: 0,
                                      class: "w-[60px] h-[60px]",
                                      src: l(L)(t.sku_image),
                                      fit: "contain"
                                    }, {
                                      error: r(() => [
                                        We
                                      ]),
                                      _: 2
                                    }, 1032, ["src"])) : (v(), k("img", Xe))
                                  ]),
                                  d("div", Ye, [
                                    d("span", {
                                      title: t.sku_name,
                                      class: "multi-hidden"
                                    }, p(t.sku_name || ((a = t.goods) == null ? void 0 : a.goods_name)), 9, Ze)
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          }, 8, ["label"]),
                          i(w, {
                            prop: "goods_price",
                            label: l(e)("price"),
                            "min-width": "170"
                          }, null, 8, ["label"]),
                          i(w, {
                            prop: "goods_stock",
                            label: l(e)("goodsStock"),
                            "min-width": "170"
                          }, null, 8, ["label"]),
                          i(w, {
                            label: l(e)("stock"),
                            "min-width": "200"
                          }, {
                            default: r(({ row: t, $index: a }) => [
                              t.is_enabled ? (v(), x(c, {
                                key: 0,
                                prop: "product_list." + a + ".stock",
                                rules: [{
                                  trigger: "blur",
                                  validator: (s, _, f) => {
                                    _.length == 0 ? f(l(e)("stockPlaceholder")) : isNaN(_) || !h.number.test(_) ? f(l(e)("stockTips")) : _ <= 0 ? f(l(e)("stockTipsTwo")) : parseInt(_) > parseInt(t.goods_stock) ? f(l(e)("stockTipsThree")) : f();
                                  }
                                }],
                                class: "sku-form-item-wrap"
                              }, {
                                default: r(() => [
                                  i(g, {
                                    modelValue: t.stock,
                                    "onUpdate:modelValue": (s) => t.stock = s,
                                    modelModifiers: { trim: !0 },
                                    class: "!w-[200px]",
                                    clearable: "",
                                    placeholder: "0",
                                    maxlength: "8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop", "rules"])) : (v(), k("span", el, "--"))
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          i(w, {
                            label: l(e)("limit"),
                            "min-width": "200"
                          }, {
                            header: r(() => [
                              d("div", ll, [
                                d("span", tl, p(l(e)("limit")), 1),
                                i(ee, {
                                  class: "box-item",
                                  effect: "light",
                                  content: l(e)("limitRules"),
                                  placement: "top"
                                }, {
                                  default: r(() => [
                                    ol
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ])
                            ]),
                            default: r(({ row: t, $index: a }) => [
                              t.is_enabled ? (v(), x(c, {
                                key: 0,
                                prop: "product_list." + a + ".limit_num",
                                rules: [{
                                  trigger: "blur",
                                  validator: (s, _, f) => {
                                    _.length == 0 ? f(l(e)("limitPlaceholder")) : isNaN(_) || !h.number.test(_) ? f(l(e)("limitTips")) : _ <= 0 ? f(l(e)("limitTipsTwo")) : _ > Number(t.stock) ? f(l(e)("limitTipsThree")) : parseInt(_) > parseInt(t.goods_stock) ? f(l(e)("stockTipsThree")) : f();
                                  }
                                }],
                                class: "sku-form-item-wrap"
                              }, {
                                default: r(() => [
                                  i(g, {
                                    modelValue: t.limit_num,
                                    "onUpdate:modelValue": (s) => t.limit_num = s,
                                    modelModifiers: { trim: !0 },
                                    class: "!w-[200px]",
                                    clearable: "",
                                    placeholder: "0",
                                    maxlength: "8"
                                  }, {
                                    append: r(() => [
                                      d("span", null, p(l(e)("limitUnit")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop", "rules"])) : (v(), k("span", il, "--"))
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          i(w, {
                            label: l(e)("money"),
                            "min-width": "550",
                            align: "center"
                          }, {
                            default: r(({ row: t, $index: a }) => [
                              d("div", sl, [
                                t.is_enabled ? (v(), x(c, {
                                  key: 0,
                                  prop: "product_list." + a + ".point",
                                  rules: [{
                                    trigger: "blur",
                                    validator: (s, _, f) => {
                                      _.length == 0 ? f(l(e)("pointPlaceholder")) : isNaN(_) || !h.number.test(_) ? f(l(e)("pointTips")) : _ <= 0 ? f(l(e)("pointTipsTwo")) : f();
                                    }
                                  }],
                                  class: "sku-form-item-wrap"
                                }, {
                                  default: r(() => [
                                    i(g, {
                                      modelValue: t.point,
                                      "onUpdate:modelValue": (s) => t.point = s,
                                      modelModifiers: { trim: !0 },
                                      class: "!w-[200px]",
                                      clearable: "",
                                      placeholder: "0",
                                      maxlength: "8"
                                    }, {
                                      append: r(() => [
                                        d("span", null, p(l(e)("integralUnit")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1032, ["prop", "rules"])) : (v(), k("span", al, "--")),
                                t.is_enabled ? (v(), k("span", nl, "+")) : N("", !0),
                                t.is_enabled ? (v(), x(c, {
                                  key: 3,
                                  prop: "product_list." + a + ".price",
                                  rules: [{
                                    trigger: "blur",
                                    validator: (s, _, f) => {
                                      _.length ? isNaN(_) || !h.digit.test(_) ? f(l(e)("moneyTips")) : _ < 0 ? f(l(e)("moneyTipsTwo")) : f() : f();
                                    }
                                  }],
                                  class: "sku-form-item-wrap"
                                }, {
                                  default: r(() => [
                                    i(g, {
                                      modelValue: t.price,
                                      "onUpdate:modelValue": (s) => t.price = s,
                                      modelModifiers: { trim: !0 },
                                      class: "!w-[200px]",
                                      clearable: "",
                                      placeholder: "0.00",
                                      maxlength: "8"
                                    }, {
                                      append: r(() => [
                                        d("span", null, p(l(e)("prickUnit")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1032, ["prop", "rules"])) : N("", !0)
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          i(w, {
                            label: l(e)("operation"),
                            fixed: "right",
                            align: "right",
                            "min-width": "160"
                          }, {
                            default: r(({ row: t }) => [
                              i(q, {
                                type: "primary",
                                link: "",
                                onClick: (a) => H(t)
                              }, {
                                default: r(() => [
                                  P(p(t.is_enabled ? l(e)("noEnabled") : l(e)("enabled")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ])
                  ]),
                  _: 1
                })) : N("", !0)
              ]),
              _: 1
            })) : N("", !0),
            o.value.type == "coupon" && o.value.product_list.length ? (v(), x(S, {
              key: 1,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", rl, p(l(e)("redemptionSettings")), 1),
                i(c, {
                  label: l(e)("stock"),
                  prop: "stock",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, a, s) => {
                      a.length == 0 ? s(l(e)("stockPlaceholder")) : isNaN(a) || !h.number.test(a) ? s(l(e)("stockTips")) : a <= 0 ? s(l(e)("stockTipsTwo")) : o.value.product_list[0].remain_count != "-1" && a > o.value.product_list[0].remain_count.remain_count ? s(l(e)("stockTipsThree")) : s();
                    }
                  }]
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.stock,
                      "onUpdate:modelValue": n[9] || (n[9] = (t) => o.value.stock = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("stockPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                i(c, {
                  label: l(e)("limit"),
                  prop: "limit_num",
                  rules: [{
                    trigger: "blur",
                    validator: (t, a, s) => {
                      a ? isNaN(a) || !h.number.test(a) ? s(l(e)("limitTips")) : a <= 0 ? s(l(e)("limitTipsTwo")) : s() : s();
                    }
                  }]
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.limit_num,
                      "onUpdate:modelValue": n[10] || (n[10] = (t) => o.value.limit_num = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("limitPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                i(c, {
                  label: l(e)("money"),
                  required: ""
                }, {
                  default: r(() => [
                    d("div", dl, [
                      i(c, {
                        prop: "point",
                        rules: [{
                          trigger: "blur",
                          validator: (t, a, s) => {
                            a.length == 0 ? s(l(e)("pointPlaceholder")) : a.length ? isNaN(a) || !h.number.test(a) ? s(l(e)("pointTips")) : a <= 0 ? s(l(e)("pointTipsTwo")) : s() : s();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          i(g, {
                            modelValue: o.value.point,
                            "onUpdate:modelValue": n[11] || (n[11] = (t) => o.value.point = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, p(l(e)("integralUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"]),
                      ul,
                      i(c, {
                        prop: "price",
                        rules: [{
                          trigger: "blur",
                          validator: (t, a, s) => {
                            a.length ? isNaN(a) || !h.digit.test(a) ? s(l(e)("moneyTips")) : a < 0 ? s(l(e)("moneyTipsTwo")) : s() : s();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          i(g, {
                            modelValue: o.value.price,
                            "onUpdate:modelValue": n[12] || (n[12] = (t) => o.value.price = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0.00",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, p(l(e)("prickUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })) : N("", !0),
            o.value.type == "balance" ? (v(), x(S, {
              key: 2,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", pl, p(l(e)("redemptionSettings")), 1),
                i(c, {
                  label: l(e)("balance"),
                  prop: "balance",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, a, s) => {
                      a.length == 0 ? s(l(e)("balancePlaceholder")) : isNaN(a) || !h.digit.test(a) ? s(l(e)("balanceTips")) : a <= 0 ? s(l(e)("balanceTipsTwo")) : s();
                    }
                  }]
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.balance,
                      "onUpdate:modelValue": n[13] || (n[13] = (t) => o.value.balance = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("balancePlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                i(c, {
                  label: l(e)("balance")
                }, {
                  default: r(() => [
                    i(te, {
                      modelValue: o.value.isBalance,
                      "onUpdate:modelValue": n[14] || (n[14] = (t) => o.value.isBalance = t),
                      class: "ml-4"
                    }, {
                      default: r(() => [
                        i(A, {
                          label: 0,
                          size: "large"
                        }, {
                          default: r(() => [
                            P("可提现余额")
                          ]),
                          _: 1
                        }),
                        i(A, {
                          label: 1,
                          size: "large"
                        }, {
                          default: r(() => [
                            P("不可提现余额")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  label: l(e)("stock"),
                  prop: "stock",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, a, s) => {
                      a.length == 0 ? s(l(e)("stockPlaceholder")) : isNaN(a) || !h.number.test(a) ? s(l(e)("stockTips")) : a <= 0 ? s(l(e)("stockTipsTwo")) : s();
                    }
                  }]
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.stock,
                      "onUpdate:modelValue": n[15] || (n[15] = (t) => o.value.stock = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("stockPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                i(c, {
                  label: l(e)("limit"),
                  prop: "limit_num",
                  rules: [{
                    trigger: "blur",
                    validator: (t, a, s) => {
                      a ? isNaN(a) || !h.number.test(a) ? s(l(e)("limitTips")) : a <= 0 ? s(l(e)("limitTipsTwo")) : s() : s();
                    }
                  }]
                }, {
                  default: r(() => [
                    i(g, {
                      modelValue: o.value.limit_num,
                      "onUpdate:modelValue": n[16] || (n[16] = (t) => o.value.limit_num = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("limitPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                i(c, {
                  label: l(e)("money"),
                  required: ""
                }, {
                  default: r(() => [
                    d("div", ml, [
                      i(c, {
                        prop: "point",
                        rules: [{
                          trigger: "blur",
                          validator: (t, a, s) => {
                            a.length == 0 ? s(l(e)("pointPlaceholder")) : a.length ? isNaN(a) || !h.number.test(a) ? s(l(e)("pointTips")) : a <= 0 ? s(l(e)("pointTipsTwo")) : s() : s();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          i(g, {
                            modelValue: o.value.point,
                            "onUpdate:modelValue": n[17] || (n[17] = (t) => o.value.point = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, p(l(e)("integralUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"]),
                      cl,
                      i(c, {
                        prop: "price",
                        rules: [{
                          trigger: "blur",
                          validator: (t, a, s) => {
                            a.length ? isNaN(a) || !h.digit.test(a) ? s(l(e)("moneyTips")) : a < 0 ? s(l(e)("moneyTipsTwo")) : s() : s();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          i(g, {
                            modelValue: o.value.price,
                            "onUpdate:modelValue": n[18] || (n[18] = (t) => o.value.price = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0.00",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, p(l(e)("prickUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })) : N("", !0),
            i(S, {
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", _l, p(l(e)("goodsDetail")), 1),
                i(c, null, {
                  default: r(() => [
                    i(oe, {
                      modelValue: o.value.content,
                      "onUpdate:modelValue": n[19] || (n[19] = (t) => o.value.content = t),
                      height: 600,
                      class: "!w-[512px]"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"]),
        d("div", fl, [
          d("div", gl, [
            i(q, {
              type: "primary",
              onClick: n[20] || (n[20] = (t) => X(U.value))
            }, {
              default: r(() => [
                P(p(l(e)("save")), 1)
              ]),
              _: 1
            }),
            i(q, {
              onClick: n[21] || (n[21] = (t) => O())
            }, {
              default: r(() => [
                P(p(l(e)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ])), [
        [se, V.value]
      ]);
    };
  }
});
const Fl = /* @__PURE__ */ qe(vl, [["__scopeId", "data-v-cf4a0eba"]]);
export {
  Fl as default
};
