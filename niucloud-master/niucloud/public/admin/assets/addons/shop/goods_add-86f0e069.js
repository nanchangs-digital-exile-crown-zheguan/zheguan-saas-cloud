import { ElPageHeader as pe, ElCard as me, ElImage as ce, ElIcon as _e, ElFormItem as fe, ElInput as ge, ElCheckbox as ve, ElButton as he, ElTableColumn as be, ElTooltip as xe, ElTable as ye, ElRadio as Ve, ElRadioGroup as ke, ElForm as we, ElLoadingDirective as Te } from "element-plus/es";
import { _ as Ne } from "./index.vue_vue_type_script_setup_true_lang-e89081e9.js";
import { _ as Ue } from "./index-36e25503.js";
import { defineComponent as Se, ref as w, reactive as Ee, computed as Pe, resolveComponent as Ce, withDirectives as Me, openBlock as h, createElementBlock as N, createVNode as s, withCtx as r, unref as l, createElementVNode as d, toDisplayString as m, createBlock as y, createCommentVNode as U, createTextVNode as E, pushScopeId as Ie, popScopeId as $e } from "vue";
import { _ as q } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { img as j, deepClone as G } from "/admin/assets/shared/core-shared.js";
import { ElMessage as V } from "element-plus";
import { ArrowLeft as Re } from "@element-plus/icons-vue";
import { J as qe } from "./marketing-f8ec8b08.js";
import Be from "./goods-select-popup-ef80f0be.js";
import { useRoute as Fe, useRouter as De } from "vue-router";
import { _ as Oe } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./sortable.esm-fc069a97.js";
import "/admin/assets/shared/core-shared.js";
import "./goods-d2a56d58.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const I = ($) => (Ie("data-v-b8140342"), $ = $(), $e(), $), je = { class: "main-container" }, Ge = { class: "panel-title !text-sm" }, ze = {
  key: 0,
  class: "flex min-w-[512px] relative border-[1px] border-[#e7e7e7] border-solid mt-[16px]"
}, Je = { class: "min-w-[78px] h-[78px] flex items-center justify-center" }, Le = /* @__PURE__ */ I(() => /* @__PURE__ */ d("div", { class: "image-slot" }, [
  /* @__PURE__ */ d("img", {
    class: "w-[78px] h-[78px]",
    src: q
  })
], -1)), Ae = {
  key: 1,
  class: "w-[78px] h-[78px]",
  src: q,
  fit: "contain"
}, He = { class: "flex-1 py-[5px] pl-[10px] pr-[30px]" }, Ke = { class: "text-[14px]" }, Qe = { class: "text-[14px] !text-[var(--el-color-primary)]" }, We = { class: "panel-title !text-sm" }, Xe = { class: "w-full sku_list" }, Ye = { class: "flex items-center mb-[15px]" }, Ze = { class: "flex items-center cursor-pointer" }, el = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, ll = /* @__PURE__ */ I(() => /* @__PURE__ */ d("div", { class: "image-slot" }, [
  /* @__PURE__ */ d("img", {
    class: "w-[60px] h-[60px]",
    src: q
  })
], -1)), tl = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: q,
  fit: "contain"
}, ol = { class: "ml-2" }, il = ["title"], sl = { key: 1 }, al = { style: { display: "inline-flex", "align-items": "center" } }, nl = { class: "mr-[5px]" }, rl = /* @__PURE__ */ I(() => /* @__PURE__ */ d("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), dl = { key: 1 }, ul = { class: "flex justify-center" }, pl = { key: 1 }, ml = {
  key: 2,
  class: "mx-[20px]"
}, cl = { class: "panel-title !text-sm" }, _l = { class: "flex justify-center" }, fl = /* @__PURE__ */ I(() => /* @__PURE__ */ d("span", { class: "mx-[20px]" }, "+", -1)), gl = { class: "panel-title !text-sm" }, vl = { class: "flex justify-center" }, hl = /* @__PURE__ */ I(() => /* @__PURE__ */ d("span", { class: "mx-[20px]" }, "+", -1)), bl = { class: "panel-title !text-sm" }, xl = { class: "fixed-footer-wrap" }, yl = { class: "fixed-footer" }, Vl = /* @__PURE__ */ Se({
  __name: "goods_add",
  setup($) {
    const z = Fe(), J = De(), L = z.meta.title, P = w(!1);
    Ee([
      { name: "商品", type: "goods" }
      // {name:'优惠券',type:'coupon'},
      // {name:'余额',type:'balance'},
    ]);
    const o = w({ ...{
      type: "goods",
      // 名称
      names: "",
      // 标题
      title: "",
      image: "",
      goods_ids: [],
      coupon_ids: [],
      product_list: [],
      stock: "",
      limit_num: "",
      point: "",
      price: "",
      balance: "",
      isBalance: 1,
      content: ""
    } }), k = w(), b = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, A = Pe(() => ({
      names: [
        { required: !0, message: e("goodsNamePlaceholder"), trigger: "blur" }
      ],
      image: [
        { required: !0, message: e("imagePlaceholder"), trigger: "change" }
      ],
      product_list: [
        { required: !0, message: e("selectGoodsPlaceholder"), trigger: "change" }
      ],
      coupon_ids: [
        { required: !0, message: e("couponSelectPlaceholder"), trigger: "change" }
      ]
    })), H = () => {
      delete o.value.goods_info, o.value.goods_ids = [], o.value.product_list = [];
    }, K = (c) => {
      if (c.is_enabled = c.is_enabled ? 0 : 1, o.value.product_list.every((i) => i.is_enabled === 0)) {
        c.is_enabled = 1, V({
          type: "warning",
          message: `${e("noEnabledTip")}`
        });
        return;
      }
      c.stock = "", c.limit_num = "", c.point = "", c.price = "";
    }, Q = w(), W = (c) => {
      const i = Object.values(G(c))[0];
      o.value.product_list = G(i.skuList.map((x) => (x.goods_stock = x.stock + "", x.goods_price = x.price + "", x.limit_num = "", x.stock = "", x.point = "", x.price = "", x.is_enabled = 1, x))), o.value.goods_info = {
        goods_name: i.goods_name,
        goods_cover: i.goods_cover,
        goods_price: i.goodsSku.price,
        goods_id: i.goods_id
      }, o.value.image = i.goods_image, o.value.names = i.goods_name, o.value.title = i.sub_title, o.value.content = i.goods_desc, k.value && k.value.validateField("product_list").catch(() => {
      });
    }, u = w({
      stock: "",
      limit_num: "",
      point: "",
      price: ""
    }), C = w(), M = w(!1), X = (c) => {
      M.value = !1, B.value.toggleAllSelection();
    }, B = w(), S = w([]), Y = (c) => {
      S.value = c, C.value = !1, S.value.length > 0 && S.value.length < o.value.product_list.length ? M.value = !0 : M.value = !1, S.value.length == o.value.product_list.length && (C.value = !0);
    }, Z = () => {
      if (!S.value.length) {
        V({
          type: "warning",
          message: `${e("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      if (u.value.stock) {
        if (isNaN(u.value.stock) || !b.number.test(u.value.stock)) {
          V({
            type: "warning",
            message: `${e("stockTips")}`
          });
          return;
        } else if (u.value.stock <= 0) {
          V({
            type: "warning",
            message: `${e("stockTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.limit_num) {
        if (isNaN(u.value.limit_num) || !b.number.test(u.value.limit_num)) {
          V({
            type: "warning",
            message: `${e("limitTips")}`
          });
          return;
        } else if (u.value.limit_num <= 0) {
          V({
            type: "warning",
            message: `${e("limitTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.point) {
        if (isNaN(u.value.point) || !b.number.test(u.value.point)) {
          V({
            type: "warning",
            message: `${e("pointTips")}`
          });
          return;
        } else if (u.value.point <= 0) {
          V({
            type: "warning",
            message: `${e("pointTipsTwo")}`
          });
          return;
        }
      }
      if (u.value.price) {
        if (isNaN(u.value.price) || !b.digit.test(u.value.price)) {
          V({
            type: "warning",
            message: `${e("moneyTips")}`
          });
          return;
        } else if (u.value.price < 0) {
          V({
            type: "warning",
            message: `${e("moneyTipsTwo")}`
          });
          return;
        }
      }
      o.value.product_list.forEach((c, i) => {
        S.value.forEach((x) => {
          x.sku_id === c.sku_id && (u.value.stock && (c.stock = u.value.stock + ""), u.value.limit_num && (c.limit_num = u.value.limit_num + ""), u.value.point && (c.point = u.value.point + ""), u.value.price && (c.price = u.value.price + ""), k.value && (k.value.validateField("product_list." + i + ".stock").catch(() => {
          }), k.value.validateField("product_list." + i + ".limit_num").catch(() => {
          }), k.value.validateField("product_list." + i + ".point").catch(() => {
          }), k.value.validateField("product_list." + i + ".price").catch(() => {
          })));
        });
      }), M.value = !1, C.value = !1, u.value = {
        stock: "",
        limit_num: "",
        point: "",
        price: ""
      }, B.value.clearSelection();
    }, ee = async (c) => {
      P.value || !c || await c.validate(async (i) => {
        i && (P.value = !0, o.value.type == "goods" ? o.value.product_detail = JSON.stringify(o.value.product_list.map((g) => ({
          goods_id: g.goods_id,
          sku_id: g.sku_id,
          point: g.point || "0",
          price: g.price || "0",
          limit_num: g.limit_num || "0",
          stock: g.stock || "0",
          is_enabled: g.is_enabled
        })).filter((g) => g.is_enabled === 1)) : o.value.type == "coupon" ? o.value.product_detail = JSON.stringify(o.value.product_list.map((g) => ({
          coupon_id: g.id
        }))) : o.value.isBalance ? o.value.product_detail = JSON.stringify([{ balance: o.value.balance }]) : o.value.product_detail = JSON.stringify([{ money: o.value.balance }]), qe(o.value).then((g) => {
          P.value = !1, history.back();
        }).catch(() => {
          P.value = !1;
        }));
      });
    }, F = () => {
      J.push("/shop/marketing/exchange/goods_list");
    };
    return (c, i) => {
      const x = pe, g = me, D = ce, le = Ce("Close"), te = _e, p = fe, v = ge, oe = Ue, ie = ve, R = he, T = be, se = xe, ae = ye, O = Ve, ne = ke, re = Ne, de = we, ue = Te;
      return Me((h(), N("div", je, [
        s(g, {
          class: "card !border-none",
          shadow: "never"
        }, {
          default: r(() => [
            s(x, {
              content: l(L),
              icon: l(Re),
              onBack: i[0] || (i[0] = (t) => F())
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        s(de, {
          class: "page-form mt-[15px]",
          model: o.value,
          "label-width": "120px",
          ref_key: "formRef",
          ref: k,
          rules: l(A)
        }, {
          default: r(() => [
            s(g, {
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", Ge, m(l(e)("baseInfo")), 1),
                o.value.type == "goods" ? (h(), y(p, {
                  key: 0,
                  label: l(e)("goodsSelect"),
                  class: "!m-0"
                }, {
                  default: r(() => [
                    d("div", null, [
                      s(Be, {
                        ref_key: "goodsSelectPopupRef",
                        ref: Q,
                        modelValue: o.value.goods_ids,
                        "onUpdate:modelValue": i[1] || (i[1] = (t) => o.value.goods_ids = t),
                        onGoodsSelect: W,
                        min: 1,
                        max: 1
                      }, null, 8, ["modelValue"]),
                      o.value.goods_ids.length ? (h(), N("div", ze, [
                        d("div", Je, [
                          o.value.goods_info.goods_cover ? (h(), y(D, {
                            key: 0,
                            class: "w-[78px] h-[78px]",
                            src: l(j)(o.value.goods_info.goods_cover),
                            fit: "contain"
                          }, {
                            error: r(() => [
                              Le
                            ]),
                            _: 1
                          }, 8, ["src"])) : (h(), N("img", Ae))
                        ]),
                        d("div", He, [
                          d("div", Ke, m(o.value.goods_info.goods_name), 1),
                          d("div", Qe, m(o.value.goods_info.goods_price), 1)
                        ]),
                        s(te, {
                          class: "absolute right-[10px] top-[10px] cursor-pointer",
                          onClick: H
                        }, {
                          default: r(() => [
                            s(le, {
                              size: "24px",
                              color: "#999"
                            })
                          ]),
                          _: 1
                        })
                      ])) : U("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : U("", !0),
                o.value.type == "goods" ? (h(), y(p, {
                  key: 1,
                  prop: "product_list"
                })) : U("", !0),
                s(p, {
                  label: l(e)("goodsName"),
                  prop: "names"
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.names,
                      "onUpdate:modelValue": i[2] || (i[2] = (t) => o.value.names = t),
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
                s(p, {
                  label: l(e)("goodsTitle")
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.title,
                      "onUpdate:modelValue": i[3] || (i[3] = (t) => o.value.title = t),
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
                s(p, {
                  label: l(e)("image"),
                  prop: "image"
                }, {
                  default: r(() => [
                    s(oe, {
                      modelValue: o.value.image,
                      "onUpdate:modelValue": i[4] || (i[4] = (t) => o.value.image = t),
                      limit: 6
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            o.value.type == "goods" && o.value.goods_info && o.value.product_list.length ? (h(), y(g, {
              key: 0,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", We, m(l(e)("redemptionSettings")), 1),
                s(p, null, {
                  default: r(() => [
                    d("div", Xe, [
                      d("div", Ye, [
                        s(ie, {
                          modelValue: C.value,
                          "onUpdate:modelValue": i[5] || (i[5] = (t) => C.value = t),
                          size: "large",
                          class: "!mr-[15px]",
                          onChange: X,
                          indeterminate: M.value
                        }, {
                          default: r(() => [
                            d("span", null, "已选" + m(S.value.length) + "项", 1)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "indeterminate"]),
                        d("label", null, m(l(e)("batchOperation")), 1),
                        s(v, {
                          modelValue: u.value.stock,
                          "onUpdate:modelValue": i[6] || (i[6] = (t) => u.value.stock = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("stock"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        s(v, {
                          modelValue: u.value.limit_num,
                          "onUpdate:modelValue": i[7] || (i[7] = (t) => u.value.limit_num = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("limit"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        s(v, {
                          modelValue: u.value.point,
                          "onUpdate:modelValue": i[8] || (i[8] = (t) => u.value.point = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("integralUnit"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        s(v, {
                          modelValue: u.value.price,
                          "onUpdate:modelValue": i[9] || (i[9] = (t) => u.value.price = t),
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: l(e)("newPrice"),
                          class: "!w-[130px] ml-[10px]",
                          maxlength: "8"
                        }, null, 8, ["modelValue", "placeholder"]),
                        s(R, {
                          class: "ml-[10px]",
                          type: "primary",
                          onClick: Z
                        }, {
                          default: r(() => [
                            E(m(l(e)("confirm")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      s(ae, {
                        class: "!max-w-[100%]",
                        data: o.value.product_list,
                        size: "large",
                        ref_key: "productListTableRef",
                        ref: B,
                        onSelectionChange: Y
                      }, {
                        empty: r(() => [
                          d("span", null, m(l(e)("emptyData")), 1)
                        ]),
                        default: r(() => [
                          s(T, {
                            type: "selection",
                            width: "55"
                          }),
                          s(T, {
                            label: l(e)("goodsSelectPopupGoodsInfo"),
                            "min-width": "300"
                          }, {
                            default: r(({ row: t }) => {
                              var n;
                              return [
                                d("div", Ze, [
                                  d("div", el, [
                                    t.sku_image ? (h(), y(D, {
                                      key: 0,
                                      class: "w-[60px] h-[60px]",
                                      src: l(j)(t.sku_image),
                                      fit: "contain"
                                    }, {
                                      error: r(() => [
                                        ll
                                      ]),
                                      _: 2
                                    }, 1032, ["src"])) : (h(), N("img", tl))
                                  ]),
                                  d("div", ol, [
                                    d("span", {
                                      title: t.sku_name,
                                      class: "multi-hidden"
                                    }, m(t.sku_name || ((n = t.goods) == null ? void 0 : n.goods_name)), 9, il)
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          }, 8, ["label"]),
                          s(T, {
                            prop: "goods_price",
                            label: l(e)("price"),
                            "min-width": "170"
                          }, null, 8, ["label"]),
                          s(T, {
                            prop: "goods_stock",
                            label: l(e)("goodsStock"),
                            "min-width": "170"
                          }, null, 8, ["label"]),
                          s(T, {
                            label: l(e)("stock"),
                            "min-width": "200"
                          }, {
                            default: r(({ row: t, $index: n }) => [
                              t.is_enabled ? (h(), y(p, {
                                key: 0,
                                prop: "product_list." + n + ".stock",
                                rules: [{
                                  trigger: "blur",
                                  validator: (a, _, f) => {
                                    _.length == 0 ? f(l(e)("stockPlaceholder")) : isNaN(_) || !b.number.test(_) ? f(l(e)("stockTips")) : _ <= 0 ? f(l(e)("stockTipsTwo")) : parseInt(_) > parseInt(t.goods_stock) ? f(l(e)("stockTipsThree")) : f();
                                  }
                                }],
                                class: "sku-form-item-wrap"
                              }, {
                                default: r(() => [
                                  s(v, {
                                    modelValue: t.stock,
                                    "onUpdate:modelValue": (a) => t.stock = a,
                                    modelModifiers: { trim: !0 },
                                    class: "!w-[200px]",
                                    clearable: "",
                                    placeholder: "0",
                                    maxlength: "8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop", "rules"])) : (h(), N("span", sl, "--"))
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          s(T, {
                            label: l(e)("limit"),
                            "min-width": "200"
                          }, {
                            header: r(() => [
                              d("div", al, [
                                d("span", nl, m(l(e)("limit")), 1),
                                s(se, {
                                  class: "box-item",
                                  effect: "light",
                                  content: l(e)("limitRules"),
                                  placement: "top"
                                }, {
                                  default: r(() => [
                                    rl
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ])
                            ]),
                            default: r(({ row: t, $index: n }) => [
                              t.is_enabled ? (h(), y(p, {
                                key: 0,
                                prop: "product_list." + n + ".limit_num",
                                rules: [{
                                  trigger: "blur",
                                  validator: (a, _, f) => {
                                    _.length == 0 ? f(l(e)("limitPlaceholder")) : isNaN(_) || !b.number.test(_) ? f(l(e)("limitTips")) : _ <= 0 ? f(l(e)("limitTipsTwo")) : _ > Number(t.stock) ? f(l(e)("limitTipsThree")) : parseInt(_) > parseInt(t.goods_stock) ? f(l(e)("stockTipsThree")) : f();
                                  }
                                }],
                                class: "sku-form-item-wrap"
                              }, {
                                default: r(() => [
                                  s(v, {
                                    modelValue: t.limit_num,
                                    "onUpdate:modelValue": (a) => t.limit_num = a,
                                    modelModifiers: { trim: !0 },
                                    class: "!w-[200px]",
                                    clearable: "",
                                    placeholder: "0",
                                    maxlength: "8"
                                  }, {
                                    append: r(() => [
                                      d("span", null, m(l(e)("limitUnit")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop", "rules"])) : (h(), N("span", dl, "--"))
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          s(T, {
                            label: l(e)("money"),
                            "min-width": "550",
                            align: "center"
                          }, {
                            default: r(({ row: t, $index: n }) => [
                              d("div", ul, [
                                t.is_enabled ? (h(), y(p, {
                                  key: 0,
                                  prop: "product_list." + n + ".point",
                                  rules: [{
                                    trigger: "blur",
                                    validator: (a, _, f) => {
                                      _.length == 0 ? f(l(e)("pointPlaceholder")) : isNaN(_) || !b.number.test(_) ? f(l(e)("pointTips")) : _ <= 0 ? f(l(e)("pointTipsTwo")) : f();
                                    }
                                  }],
                                  class: "sku-form-item-wrap"
                                }, {
                                  default: r(() => [
                                    s(v, {
                                      modelValue: t.point,
                                      "onUpdate:modelValue": (a) => t.point = a,
                                      modelModifiers: { trim: !0 },
                                      class: "!w-[200px]",
                                      clearable: "",
                                      placeholder: "0",
                                      maxlength: "8"
                                    }, {
                                      append: r(() => [
                                        d("span", null, m(l(e)("integralUnit")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1032, ["prop", "rules"])) : (h(), N("span", pl, "--")),
                                t.is_enabled ? (h(), N("span", ml, "+")) : U("", !0),
                                t.is_enabled ? (h(), y(p, {
                                  key: 3,
                                  prop: "product_list." + n + ".price",
                                  rules: [{
                                    trigger: "blur",
                                    validator: (a, _, f) => {
                                      _.length ? isNaN(_) || !b.digit.test(_) ? f(l(e)("moneyTips")) : _ < 0 ? f(l(e)("moneyTipsTwo")) : f() : f();
                                    }
                                  }],
                                  class: "sku-form-item-wrap"
                                }, {
                                  default: r(() => [
                                    s(v, {
                                      modelValue: t.price,
                                      "onUpdate:modelValue": (a) => t.price = a,
                                      modelModifiers: { trim: !0 },
                                      class: "!w-[200px]",
                                      clearable: "",
                                      placeholder: "0.00",
                                      maxlength: "8"
                                    }, {
                                      append: r(() => [
                                        d("span", null, m(l(e)("prickUnit")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1032, ["prop", "rules"])) : U("", !0)
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          s(T, {
                            label: l(e)("operation"),
                            fixed: "right",
                            align: "right",
                            "min-width": "160"
                          }, {
                            default: r(({ row: t }) => [
                              s(R, {
                                type: "primary",
                                link: "",
                                onClick: (n) => K(t)
                              }, {
                                default: r(() => [
                                  E(m(t.is_enabled ? l(e)("noEnabled") : l(e)("enabled")), 1)
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
                })
              ]),
              _: 1
            })) : U("", !0),
            o.value.type == "coupon" && o.value.product_list.length ? (h(), y(g, {
              key: 1,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", cl, m(l(e)("redemptionSettings")), 1),
                s(p, {
                  label: l(e)("stock"),
                  prop: "stock",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, n, a) => {
                      n.length == 0 ? a(l(e)("stockPlaceholder")) : isNaN(n) || !b.number.test(n) ? a(l(e)("stockTips")) : n <= 0 ? a(l(e)("stockTipsTwo")) : o.value.product_list[0].sum_count != "-1" && parseInt(n) > parseInt(o.value.product_list[0].sum_count.sum_count) ? a(l(e)("stockTipsThree")) : a();
                    }
                  }]
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.stock,
                      "onUpdate:modelValue": i[10] || (i[10] = (t) => o.value.stock = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("stockPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                s(p, {
                  label: l(e)("limit"),
                  prop: "limit_num",
                  rules: [{
                    trigger: "blur",
                    validator: (t, n, a) => {
                      n ? isNaN(n) || !b.number.test(n) ? a(l(e)("limitTips")) : n <= 0 ? a(l(e)("limitTipsTwo")) : a() : a();
                    }
                  }]
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.limit_num,
                      "onUpdate:modelValue": i[11] || (i[11] = (t) => o.value.limit_num = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("limitPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                s(p, {
                  label: l(e)("money"),
                  required: ""
                }, {
                  default: r(() => [
                    d("div", _l, [
                      s(p, {
                        prop: "point",
                        rules: [{
                          trigger: "blur",
                          validator: (t, n, a) => {
                            n.length == 0 && a(l(e)("pointPlaceholder")), isNaN(n) || !b.number.test(n) ? a(l(e)("pointTips")) : n <= 0 ? a(l(e)("pointTipsTwo")) : a();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          s(v, {
                            modelValue: o.value.point,
                            "onUpdate:modelValue": i[12] || (i[12] = (t) => o.value.point = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, m(l(e)("integralUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"]),
                      fl,
                      s(p, {
                        prop: "price",
                        rules: [{
                          trigger: "blur",
                          validator: (t, n, a) => {
                            n.length ? isNaN(n) || !b.digit.test(n) ? a(l(e)("moneyTips")) : n < 0 ? a(l(e)("moneyTipsTwo")) : a() : a();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          s(v, {
                            modelValue: o.value.price,
                            "onUpdate:modelValue": i[13] || (i[13] = (t) => o.value.price = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0.00",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, m(l(e)("prickUnit")), 1)
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
            })) : U("", !0),
            o.value.type == "balance" ? (h(), y(g, {
              key: 2,
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", gl, m(l(e)("redemptionSettings")), 1),
                s(p, {
                  label: l(e)("balance"),
                  prop: "balance",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, n, a) => {
                      n.length == 0 ? a(l(e)("balancePlaceholder")) : isNaN(n) || !b.digit.test(n) ? a(l(e)("balanceTips")) : n <= 0 ? a(l(e)("balanceTipsTwo")) : a();
                    }
                  }]
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.balance,
                      "onUpdate:modelValue": i[14] || (i[14] = (t) => o.value.balance = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("balancePlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                s(p, {
                  label: l(e)("balance")
                }, {
                  default: r(() => [
                    s(ne, {
                      modelValue: o.value.isBalance,
                      "onUpdate:modelValue": i[15] || (i[15] = (t) => o.value.isBalance = t),
                      class: "ml-4"
                    }, {
                      default: r(() => [
                        s(O, {
                          label: 0,
                          size: "large"
                        }, {
                          default: r(() => [
                            E("可提现余额")
                          ]),
                          _: 1
                        }),
                        s(O, {
                          label: 1,
                          size: "large"
                        }, {
                          default: r(() => [
                            E("不可提现余额")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                s(p, {
                  label: l(e)("stock"),
                  prop: "stock",
                  rules: [{
                    required: !0,
                    trigger: "blur",
                    validator: (t, n, a) => {
                      n.length == 0 ? a(l(e)("stockPlaceholder")) : isNaN(n) || !b.number.test(n) ? a(l(e)("stockTips")) : n <= 0 ? a(l(e)("stockTipsTwo")) : a();
                    }
                  }]
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.stock,
                      "onUpdate:modelValue": i[16] || (i[16] = (t) => o.value.stock = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("stockPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                s(p, {
                  label: l(e)("limit"),
                  prop: "limit_num",
                  rules: [{
                    trigger: "blur",
                    validator: (t, n, a) => {
                      n ? isNaN(n) || !b.number.test(n) ? a(l(e)("limitTips")) : n <= 0 ? a(l(e)("limitTipsTwo")) : a() : a();
                    }
                  }]
                }, {
                  default: r(() => [
                    s(v, {
                      modelValue: o.value.limit_num,
                      "onUpdate:modelValue": i[17] || (i[17] = (t) => o.value.limit_num = t),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: l(e)("limitPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"]),
                s(p, {
                  label: l(e)("money"),
                  required: ""
                }, {
                  default: r(() => [
                    d("div", vl, [
                      s(p, {
                        prop: "point",
                        rules: [{
                          trigger: "blur",
                          validator: (t, n, a) => {
                            n.length == 0 ? a(l(e)("pointPlaceholder")) : n.length ? isNaN(n) || !b.number.test(n) ? a(l(e)("pointTips")) : n <= 0 ? a(l(e)("pointTipsTwo")) : a() : a();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          s(v, {
                            modelValue: o.value.point,
                            "onUpdate:modelValue": i[18] || (i[18] = (t) => o.value.point = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, m(l(e)("integralUnit")), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["rules"]),
                      hl,
                      s(p, {
                        prop: "price",
                        rules: [{
                          trigger: "blur",
                          validator: (t, n, a) => {
                            n.length ? isNaN(n) || !b.digit.test(n) ? a(l(e)("moneyTips")) : n < 0 ? a(l(e)("moneyTipsTwo")) : a() : a();
                          }
                        }],
                        class: "sku-form-item-wrap"
                      }, {
                        default: r(() => [
                          s(v, {
                            modelValue: o.value.price,
                            "onUpdate:modelValue": i[19] || (i[19] = (t) => o.value.price = t),
                            modelModifiers: { trim: !0 },
                            class: "!w-[200px]",
                            clearable: "",
                            placeholder: "0.00",
                            maxlength: "8"
                          }, {
                            append: r(() => [
                              d("span", null, m(l(e)("prickUnit")), 1)
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
            })) : U("", !0),
            s(g, {
              class: "box-card !border-none",
              shadow: "never"
            }, {
              default: r(() => [
                d("h3", bl, m(l(e)("goodsDetail")), 1),
                s(p, null, {
                  default: r(() => [
                    s(re, {
                      modelValue: o.value.content,
                      "onUpdate:modelValue": i[20] || (i[20] = (t) => o.value.content = t),
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
        d("div", xl, [
          d("div", yl, [
            s(R, {
              type: "primary",
              onClick: i[21] || (i[21] = (t) => ee(k.value))
            }, {
              default: r(() => [
                E(m(l(e)("save")), 1)
              ]),
              _: 1
            }),
            s(R, {
              onClick: i[22] || (i[22] = (t) => F())
            }, {
              default: r(() => [
                E(m(l(e)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ])), [
        [ue, P.value]
      ]);
    };
  }
});
const Hl = /* @__PURE__ */ Oe(Vl, [["__scopeId", "data-v-b8140342"]]);
export {
  Hl as default
};
