import { ElPageHeader as _e, ElCard as fe, ElInput as me, ElFormItem as ce, ElRadio as ve, ElRadioGroup as he, ElTableColumn as ge, ElButton as ye, ElTable as be, ElSwitch as Ve, ElForm as ke, ElScrollbar as Se, ElDialog as Ee, ElLoadingDirective as we } from "element-plus/es";
import { defineComponent as xe, ref as S, reactive as Ce, computed as A, openBlock as U, createElementBlock as O, Fragment as Ue, createElementVNode as b, createVNode as l, withCtx as n, unref as t, withDirectives as I, createBlock as H, createTextVNode as h, toDisplayString as v, createCommentVNode as De, vShow as J } from "vue";
import { t as r } from "/admin/assets/shared/admin-lang.js";
import { ElTree as Ae, ElMessage as Q } from "element-plus";
import { ArrowLeft as Be } from "@element-plus/icons-vue";
import { S as Ne, T as Te, U as Pe } from "./delivery-da6bd7ad.js";
import { useRoute as Me, useRouter as Re } from "vue-router";
import { getAreatree as ze } from "/admin/assets/shared/core-shared.js";
import { filterDigit as x } from "/admin/assets/shared/core-shared.js";
import { test as j } from "/admin/assets/shared/core-shared.js";
import { _ as Ke } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const Fe = { class: "main-container" }, Oe = { class: "area-input" }, Ie = ["onClick"], je = { key: 1 }, Le = { class: "mt-[10px]" }, qe = { class: "area-input" }, We = { class: "form-tip" }, Ze = { class: "mt-[10px]" }, Ge = { class: "area-input" }, He = { class: "mt-[10px]" }, Je = { class: "fixed-footer-wrap" }, Qe = { class: "fixed-footer" }, Xe = { class: "dialog-footer" }, Ye = /* @__PURE__ */ xe({
  __name: "template_edit",
  setup($e) {
    const C = S(!1), B = Me(), L = Re(), V = S(!1), X = {
      template_id: "",
      template_name: "",
      fee_type: "num",
      area: [],
      no_delivery: 0,
      is_free_shipping: 0,
      fee_data: [],
      free_shipping_data: [],
      no_delivery_data: []
    }, Y = B.meta.title, p = Ce({ ...X }), q = S(), N = S([]);
    B.query.id && (V.value = !0, Ne(B.query.id).then(({ data: u }) => {
      u && (Object.keys(p).forEach((e) => {
        u[e] != null && (p[e] = u[e]);
      }), f.value = u.fee_data, y.value = u.no_delivery_data, m.value = u.free_shipping_data), V.value = !1;
    }).catch(() => {
      V.value = !1;
    })), ze(2).then((u) => {
      N.value = u.data;
    }).catch();
    const $ = A(() => ({
      template_name: [
        { required: !0, message: r("templateNamePlaceholder"), trigger: "blur" }
      ],
      fee_data: [{ validator: ee }],
      free_shipping_data: [{ validator: ae }],
      no_delivery_data: [{ validator: le }]
    })), ee = (u, e, o) => {
      for (let _ = 0; _ < f.value.length; _++) {
        const s = f.value[_];
        if (!s.area_ids.length) {
          o(new Error(r("areaPlaceholder")));
          break;
        }
        if (j.empty(s.snum) || s.snum < 0) {
          o(new Error(D.value.first + r("notUnderZero")));
          break;
        }
        if (j.empty(s.xnum) || s.snum < 0) {
          o(new Error(D.value.continue + r("notUnderZero")));
          break;
        }
      }
      o();
    }, ae = (u, e, o) => {
      if (p.is_free_shipping) {
        for (let _ = 0; _ < m.value.length; _++) {
          const s = m.value[_];
          if (!s.area_ids.length) {
            o(new Error(r("freeShippingPlaceholder")));
            break;
          }
          if (j.empty(s.free_shipping_num) || s.free_shipping_num < 0) {
            o(new Error(W.value + r("notUnderZero")));
            break;
          }
        }
        o();
      } else
        o();
    }, le = (u, e, o) => {
      if (p.no_delivery) {
        for (let _ = 0; _ < y.value.length; _++)
          if (!y.value[_].area_ids.length) {
            o(new Error(r("noDeliveryPlaceholder")));
            break;
          }
        o();
      } else
        o();
    }, D = A(() => ({
      num: {
        first: r("firstNum"),
        continue: r("continueNum")
      },
      weight: {
        first: r("firstWeight"),
        continue: r("continueWeight")
      },
      volume: {
        first: r("firstVolume"),
        continue: r("continueVolume")
      }
    })[p.fee_type]), W = A(() => ({
      num: r("freeShippingNum"),
      weight: r("freeShippingWeight"),
      volume: r("freeShippingVolume")
    })[p.fee_type]), f = S([
      { area_ids: [0], fee_area_names: "全国", snum: 1, sprice: 0, xnum: 1, xprice: 0 }
    ]), m = S([]), y = S([]), T = (u) => {
      switch (u) {
        case "fee":
          f.value.push({ area_ids: [], fee_area_names: "", snum: 1, sprice: 0, xnum: 1, xprice: 0 });
          break;
        case "free_shipping":
          m.value.push({ area_ids: [], free_shipping_area_names: "", free_shipping_num: 0, free_shipping_price: 0 });
          break;
        case "no_delivery":
          y.value.push({ area_ids: [], no_delivery_area_names: "" });
          break;
      }
    }, P = (u, e) => {
      switch (u) {
        case "fee":
          f.value.splice(e, 1);
          break;
        case "free_shipping":
          m.value.splice(e, 1);
          break;
        case "no_delivery":
          y.value.splice(e, 1);
          break;
      }
    };
    let M = [];
    const R = S([]);
    let E = { type: "", index: 0 };
    const z = (u, e) => {
      E = { type: u, index: e };
      let o = [];
      switch (u) {
        case "fee":
          o = f.value;
          break;
        case "free_shipping":
          o = m.value;
          break;
        case "no_delivery":
          o = y.value;
          break;
      }
      M = o[e].area_ids, R.value = [], o.forEach((_, s) => {
        e != s && R.value.push(..._.area_ids);
      }), C.value = !0;
    }, re = A(() => (N.value.forEach((u) => {
      u && Array.isArray(u.child) && u.child.forEach((e) => {
        var o;
        e.disabled = ((o = R.value) == null ? void 0 : o.includes(e.id)) || !1;
      });
    }), N.value)), K = S(), te = () => {
      const u = K.value.getCheckedNodes(!1, !1), e = [], o = [];
      switch (u.forEach((_) => {
        _.level == 2 && (e.push(_.id), o.push(_.name));
      }), E.type) {
        case "fee":
          f.value[E.index].area_ids = e, f.value[E.index].fee_area_names = o.toString();
          break;
        case "free_shipping":
          m.value[E.index].area_ids = e, m.value[E.index].free_shipping_area_names = o.toString();
          break;
        case "no_delivery":
          y.value[E.index].area_ids = e, y.value[E.index].no_delivery_area_names = o.toString();
          break;
      }
      C.value = !1;
    }, ie = () => {
      K.value.setCheckedKeys(M, !1);
    }, ne = async (u) => {
      if (V.value || !u)
        return;
      const e = p.template_id ? Te : Pe;
      await u.validate(async (o) => {
        if (o) {
          if (p.is_free_shipping && m.value.length == 0) {
            Q.error(r("freeShippingPlaceholder"));
            return;
          }
          if (p.no_delivery && y.value.length == 0) {
            Q.error("noDeliveryPlaceholder");
            return;
          }
          V.value = !0;
          const _ = {
            template_id: p.template_id,
            template_name: p.template_name,
            fee_type: p.fee_type,
            no_delivery: p.no_delivery,
            is_free_shipping: p.is_free_shipping
          }, s = {};
          f.value.forEach((d) => {
            d.area_ids.forEach((c) => {
              s["city_" + c] = { city_id: c, fee_area_ids: d.area_ids.toString(), fee_area_names: d.fee_area_names, snum: d.snum, sprice: d.sprice, xnum: d.xnum, xprice: d.xprice };
            });
          }), m.value.forEach((d) => {
            d.area_ids.forEach((c) => {
              s["city_" + c] ? Object.assign(s["city_" + c], { free_shipping_area_ids: d.area_ids.toString(), free_shipping_area_names: d.free_shipping_area_names, free_shipping_num: d.free_shipping_num, free_shipping_price: d.free_shipping_price }) : s["city_" + c] = { city_id: c, free_shipping_area_ids: d.area_ids.toString(), free_shipping_area_names: d.free_shipping_area_names, free_shipping_num: d.free_shipping_num, free_shipping_price: d.free_shipping_price };
            });
          }), y.value.forEach((d) => {
            d.area_ids.forEach((c) => {
              s["city_" + c] ? Object.assign(s["city_" + c], { no_delivery_area_ids: d.area_ids.toString(), no_delivery_area_names: d.no_delivery_area_names }) : s["city_" + c] = { city_id: c, no_delivery_area_ids: d.area_ids.toString(), no_delivery_area_names: d.no_delivery_area_names };
            });
          }), _.area = Object.values(s), e(_).then(() => {
            V.value = !1, L.push({ path: "/shop/shipping/template" });
          }).catch(() => {
            V.value = !1;
          });
        }
      });
    }, Z = () => {
      L.push({ path: "/shop/shipping/template" });
    };
    return (u, e) => {
      const o = _e, _ = fe, s = me, d = ce, c = ve, oe = he, g = ge, k = ye, F = be, G = Ve, se = ke, de = Se, ue = Ee, pe = we;
      return U(), O(Ue, null, [
        b("div", Fe, [
          l(_, {
            class: "card !border-none",
            shadow: "never"
          }, {
            default: n(() => [
              l(o, {
                content: t(Y),
                icon: t(Be),
                onBack: Z
              }, null, 8, ["content", "icon"])
            ]),
            _: 1
          }),
          l(_, {
            class: "box-card mt-[15px] !border-none",
            shadow: "never"
          }, {
            default: n(() => [
              I((U(), H(se, {
                model: p,
                "label-width": "120px",
                ref_key: "formRef",
                ref: q,
                rules: t($),
                class: "page-form"
              }, {
                default: n(() => [
                  l(d, {
                    label: t(r)("templateName"),
                    prop: "template_name"
                  }, {
                    default: n(() => [
                      l(s, {
                        modelValue: p.template_name,
                        "onUpdate:modelValue": e[0] || (e[0] = (a) => p.template_name = a),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: t(r)("templateNamePlaceholder"),
                        class: "input-width",
                        maxlength: "60"
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(d, {
                    label: t(r)("feeTypeName"),
                    prop: "fee_type"
                  }, {
                    default: n(() => [
                      l(oe, {
                        modelValue: p.fee_type,
                        "onUpdate:modelValue": e[1] || (e[1] = (a) => p.fee_type = a)
                      }, {
                        default: n(() => [
                          l(c, {
                            label: "num",
                            size: "large"
                          }, {
                            default: n(() => [
                              h(v(t(r)("num")), 1)
                            ]),
                            _: 1
                          }),
                          l(c, {
                            label: "weight",
                            size: "large"
                          }, {
                            default: n(() => [
                              h(v(t(r)("weight")), 1)
                            ]),
                            _: 1
                          }),
                          l(c, {
                            label: "volume",
                            size: "large"
                          }, {
                            default: n(() => [
                              h(v(t(r)("volume")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(d, {
                    label: t(r)("feeSetting"),
                    prop: "fee_data"
                  }, {
                    default: n(() => [
                      l(F, {
                        data: f.value,
                        style: { width: "100%" },
                        size: "default"
                      }, {
                        default: n(() => [
                          l(g, {
                            label: t(r)("deliveryArea")
                          }, {
                            default: n(({ row: a, $index: i }) => [
                              b("div", Oe, [
                                i ? (U(), O("span", {
                                  key: 0,
                                  onClick: (w) => z("fee", i),
                                  class: "cursor-pointer"
                                }, v(a.fee_area_names ? a.fee_area_names : t(r)("areaPlaceholder")), 9, Ie)) : (U(), O("span", je, v(a.fee_area_names ? a.fee_area_names : t(r)("areaPlaceholder")), 1))
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(D).first
                          }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: f.value[a].snum,
                                "onUpdate:modelValue": (i) => f.value[a].snum = i,
                                modelModifiers: { trim: !0 },
                                maxlength: "8",
                                onKeyup: e[2] || (e[2] = (i) => t(x)(i)),
                                onBlur: (i) => f.value[a].snum = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("fee")
                          }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: f.value[a].sprice,
                                "onUpdate:modelValue": (i) => f.value[a].sprice = i,
                                modelModifiers: { trim: !0 },
                                maxlength: "8",
                                onKeyup: e[3] || (e[3] = (i) => t(x)(i)),
                                onBlur: (i) => f.value[a].sprice = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(D).continue
                          }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: f.value[a].xnum,
                                "onUpdate:modelValue": (i) => f.value[a].xnum = i,
                                modelModifiers: { trim: !0 },
                                maxlength: "8",
                                onKeyup: e[4] || (e[4] = (i) => t(x)(i)),
                                onBlur: (i) => f.value[a].xnum = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("continueFee")
                          }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: f.value[a].xprice,
                                "onUpdate:modelValue": (i) => f.value[a].xprice = i,
                                modelModifiers: { trim: !0 },
                                onKeyup: e[5] || (e[5] = (i) => t(x)(i)),
                                maxlength: "8",
                                onBlur: (i) => f.value[a].xprice = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("operation"),
                            align: "right",
                            width: "150"
                          }, {
                            default: n(({ $index: a }) => [
                              a ? (U(), H(k, {
                                key: 0,
                                type: "primary",
                                onClick: (i) => P("fee", a),
                                link: ""
                              }, {
                                default: n(() => [
                                  h(v(t(r)("delete")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : De("", !0)
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["data"]),
                      b("div", Le, [
                        l(k, {
                          type: "primary",
                          onClick: e[6] || (e[6] = (a) => T("fee"))
                        }, {
                          default: n(() => [
                            h(v(t(r)("addDeliveryArea")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  l(d, {
                    label: t(r)("freeShipping"),
                    prop: "is_free_shipping"
                  }, {
                    default: n(() => [
                      l(G, {
                        modelValue: p.is_free_shipping,
                        "onUpdate:modelValue": e[7] || (e[7] = (a) => p.is_free_shipping = a),
                        size: "small",
                        "inactive-value": 0,
                        "active-value": 1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  I(l(d, { prop: "free_shipping_data" }, {
                    default: n(() => [
                      l(F, {
                        data: m.value,
                        style: { width: "100%" },
                        size: "default"
                      }, {
                        default: n(() => [
                          l(g, {
                            label: t(r)("freeShippingArea")
                          }, {
                            default: n(({ row: a, $index: i }) => [
                              b("div", qe, [
                                l(s, {
                                  modelValue: a.free_shipping_area_names,
                                  "onUpdate:modelValue": (w) => a.free_shipping_area_names = w,
                                  modelModifiers: { trim: !0 },
                                  placeholder: t(r)("areaPlaceholder"),
                                  readonly: "",
                                  onClick: (w) => z("free_shipping", i)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, { label: t(W) }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: m.value[a].free_shipping_num,
                                "onUpdate:modelValue": (i) => m.value[a].free_shipping_num = i,
                                modelModifiers: { trim: !0 },
                                onKeyup: e[8] || (e[8] = (i) => t(x)(i)),
                                maxlength: "8",
                                onBlur: (i) => m.value[a].free_shipping_num = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("freeShippingPrice")
                          }, {
                            default: n(({ $index: a }) => [
                              l(s, {
                                modelValue: m.value[a].free_shipping_price,
                                "onUpdate:modelValue": (i) => m.value[a].free_shipping_price = i,
                                modelModifiers: { trim: !0 },
                                onKeyup: e[9] || (e[9] = (i) => t(x)(i)),
                                maxlength: "8",
                                onBlur: (i) => m.value[a].free_shipping_price = i.target.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("operation"),
                            align: "right",
                            width: "150"
                          }, {
                            default: n(({ $index: a }) => [
                              l(k, {
                                type: "primary",
                                onClick: (i) => P("free_shipping", a),
                                link: ""
                              }, {
                                default: n(() => [
                                  h(v(t(r)("delete")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["data"]),
                      b("div", We, v(t(r)("freeShippingAreaTips")), 1),
                      b("div", Ze, [
                        l(k, {
                          type: "primary",
                          onClick: e[10] || (e[10] = (a) => T("free_shipping"))
                        }, {
                          default: n(() => [
                            h(v(t(r)("addFreeShippingArea")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 512), [
                    [J, p.is_free_shipping]
                  ]),
                  l(d, {
                    label: t(r)("noDelivery"),
                    prop: "no_delivery"
                  }, {
                    default: n(() => [
                      l(G, {
                        modelValue: p.no_delivery,
                        "onUpdate:modelValue": e[11] || (e[11] = (a) => p.no_delivery = a),
                        size: "small",
                        "inactive-value": 0,
                        "active-value": 1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  I(l(d, { prop: "no_delivery_data" }, {
                    default: n(() => [
                      l(F, {
                        data: y.value,
                        style: { width: "100%" },
                        size: "default"
                      }, {
                        default: n(() => [
                          l(g, {
                            label: t(r)("noDelivery")
                          }, {
                            default: n(({ row: a, $index: i }) => [
                              b("div", Ge, [
                                l(s, {
                                  modelValue: a.no_delivery_area_names,
                                  "onUpdate:modelValue": (w) => a.no_delivery_area_names = w,
                                  modelModifiers: { trim: !0 },
                                  readonly: "",
                                  onClick: (w) => z("no_delivery", i),
                                  placeholder: t(r)("areaPlaceholder")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick", "placeholder"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(g, {
                            label: t(r)("operation"),
                            align: "right",
                            width: "150"
                          }, {
                            default: n(({ $index: a }) => [
                              l(k, {
                                type: "primary",
                                onClick: (i) => P("no_delivery", a),
                                link: ""
                              }, {
                                default: n(() => [
                                  h(v(t(r)("delete")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["data"]),
                      b("div", He, [
                        l(k, {
                          type: "primary",
                          onClick: e[12] || (e[12] = (a) => T("no_delivery"))
                        }, {
                          default: n(() => [
                            h(v(t(r)("addNoDelivery")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 512), [
                    [J, p.no_delivery]
                  ])
                ]),
                _: 1
              }, 8, ["model", "rules"])), [
                [pe, V.value]
              ])
            ]),
            _: 1
          }),
          b("div", Je, [
            b("div", Qe, [
              l(k, {
                type: "primary",
                onClick: e[13] || (e[13] = (a) => ne(q.value)),
                disabled: V.value
              }, {
                default: n(() => [
                  h(v(t(r)("save")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              l(k, {
                onClick: e[14] || (e[14] = (a) => Z())
              }, {
                default: n(() => [
                  h(v(t(r)("cancel")), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        l(ue, {
          modelValue: C.value,
          "onUpdate:modelValue": e[16] || (e[16] = (a) => C.value = a),
          title: t(r)("selectArea"),
          width: "80%",
          class: "diy-dialog-wrap",
          "destroy-on-close": !0,
          onOpened: ie
        }, {
          footer: n(() => [
            b("span", Xe, [
              l(k, {
                onClick: e[15] || (e[15] = (a) => C.value = !1)
              }, {
                default: n(() => [
                  h(v(t(r)("cancel")), 1)
                ]),
                _: 1
              }),
              l(k, {
                type: "primary",
                loading: V.value,
                onClick: te
              }, {
                default: n(() => [
                  h(v(t(r)("confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          default: n(() => [
            l(de, { height: "50vh" }, {
              default: n(() => [
                l(t(Ae), {
                  data: t(re),
                  props: { children: "child", label: "name" },
                  "default-expand-all": "",
                  "show-checkbox": "",
                  ref_key: "areaTreeRef",
                  ref: K,
                  "default-checked-keys": t(M),
                  "node-key": "id"
                }, null, 8, ["data", "default-checked-keys"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const _a = /* @__PURE__ */ Ke(Ye, [["__scopeId", "data-v-4637e7f3"]]);
export {
  _a as default
};
