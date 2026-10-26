import { ElPageHeader as ve, ElCard as xe, ElInput as Ve, ElFormItem as ke, ElDatePicker as je, ElRadio as Te, ElRadioGroup as Ue, ElCheckbox as we, ElTableColumn as Se, ElButton as Ee, ElTable as Ne, ElImage as Ie, ElOption as Pe, ElSelect as Ce, ElForm as Me, ElLoadingDirective as Ge } from "element-plus/es";
import { defineComponent as qe, ref as q, reactive as ee, computed as Oe, openBlock as g, createElementBlock as S, createVNode as i, withCtx as s, unref as o, withDirectives as $e, createBlock as k, createElementVNode as n, createTextVNode as x, toDisplayString as u, createCommentVNode as j, Fragment as R, renderList as A, pushScopeId as Le, popScopeId as Be } from "vue";
import { _ as B } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { useRouter as De, useRoute as Re } from "vue-router";
import { a2 as Ae, a3 as Je, a4 as Fe, a5 as Ze } from "./marketing-f8ec8b08.js";
import { ElMessage as P } from "element-plus";
import { ArrowLeft as ze } from "@element-plus/icons-vue";
import { getMemberLabelAll as He, getMemberLevelAll as Ke } from "/admin/assets/shared/core-shared.js";
import oe from "./goods-select-popup-ef80f0be.js";
import Qe from "./coupon-select-popup-e7e055dd.js";
import { img as te, deepClone as J } from "/admin/assets/shared/core-shared.js";
import { _ as We } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./goods-d2a56d58.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const C = ($) => (Le("data-v-5cdb2bcb"), $ = $(), Be(), $), Xe = { class: "main-container" }, Ye = { class: "w-[180px]" }, eo = {
  key: 0,
  class: "ml-[120px] mb-[10px] mt-[-10px] text-[12px] text-[#999] leading-[20px]"
}, oo = {
  key: 1,
  class: "ml-[120px] mb-[10px] mt-[-10px] text-[12px] text-[#999] leading-[20px]"
}, to = { class: "el-form-item__content" }, lo = { class: "level-header" }, so = { class: "font-bold text-[#333]" }, io = ["onClick"], ao = { class: "level-section flex" }, no = { class: "flex items-center ml-[10px]" }, ro = /* @__PURE__ */ C(() => /* @__PURE__ */ n("span", { class: "mr-[10px]" }, "满", -1)), uo = { class: "ml-[10px]" }, _o = { class: "level-section" }, mo = { class: "vertical-checkbox-group" }, po = { class: "condition-item" }, co = {
  key: 0,
  class: "dynamic-content"
}, go = { class: "flex items-center" }, fo = { class: "mr-[10px]" }, bo = { class: "ml-[10px]" }, ho = { class: "condition-item" }, yo = { class: "mt-[-10px] text-[#999] text-[12px]" }, vo = { class: "condition-item" }, xo = { class: "dynamic-content flex items-center" }, Vo = /* @__PURE__ */ C(() => /* @__PURE__ */ n("span", { class: "mr-[10px]" }, "送", -1)), ko = /* @__PURE__ */ C(() => /* @__PURE__ */ n("span", { class: "ml-[10px]" }, "积分", -1)), jo = { class: "condition-item" }, To = { class: "dynamic-content flex items-center" }, Uo = /* @__PURE__ */ C(() => /* @__PURE__ */ n("span", { class: "mr-[10px]" }, "送", -1)), wo = /* @__PURE__ */ C(() => /* @__PURE__ */ n("span", { class: "ml-[10px]" }, "余额", -1)), So = { class: "condition-item" }, Eo = { class: "mt-[-10px] text-[#999] text-[12px]" }, No = { class: "w-full sku_list" }, Io = { class: "condition-item" }, Po = { class: "mt-[-10px] text-[#999] text-[12px]" }, Co = { class: "w-full sku_list" }, Mo = { class: "flex items-center cursor-pointer" }, Go = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, qo = /* @__PURE__ */ C(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: B
  })
], -1)), Oo = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: B,
  fit: "contain"
}, $o = { class: "ml-2" }, Lo = ["title"], Bo = { class: "text-primary text-[12px]" }, Do = { class: "flex items-center cursor-pointer" }, Ro = { class: "min-w-[60px] h-[60px] flex items-center justify-center" }, Ao = /* @__PURE__ */ C(() => /* @__PURE__ */ n("div", { class: "image-slot" }, [
  /* @__PURE__ */ n("img", {
    class: "w-[60px] h-[60px]",
    src: B
  })
], -1)), Jo = {
  key: 1,
  class: "w-[70px] h-[60px]",
  src: B,
  fit: "contain"
}, Fo = { class: "ml-2" }, Zo = ["title"], zo = { class: "text-primary text-[12px]" }, Ho = {
  key: 0,
  class: "text-red-500 text-sm ml-[10px] mt-5"
}, Ko = {
  key: 1,
  class: "text-red-500 text-sm ml-[10px] mt-5"
}, Qo = { class: "fixed-footer-wrap" }, Wo = { class: "fixed-footer" }, Xo = /* @__PURE__ */ qe({
  __name: "edit",
  setup($) {
    const le = De(), N = Re().query.id, F = new Date(), Z = new Date(new Date().setMinutes(new Date().getMinutes() + 10)), E = q(!1), z = q(null), se = ee({
      manjian_name: "",
      // 名称
      start_time: "",
      goods_type: "all_goods",
      condition_type: "over_n_yuan",
      rule_type: "ladder",
      join_member_type: "all_member",
      end_time: "",
      goods_data: [],
      goods_ids: [],
      rule_json: [
        {
          limit: "",
          // 优惠门槛
          is_discount: !1,
          // 是否订单金额优惠
          is_free_shipping: !1,
          // 是否包邮
          is_give_point: !1,
          // 是否送积分
          is_give_coupon: !1,
          // 是否送优惠券
          is_give_goods: !1,
          // 是否送赠品
          is_give_balance: !1,
          // 是否送余额
          discount_type: 1,
          discount_money: "",
          // 优惠金额
          point: "",
          // 积分
          balance: "",
          // 余额
          goods_ids: [],
          goods: [],
          couponIds: [],
          coupon: []
        }
      ],
      manjian_time: [F, Z]
    }), t = ee({ ...se }), H = q(), ie = Oe(() => ({
      manjian_name: [
        { required: !0, message: e("namePlaceholder"), trigger: "blur" }
      ],
      manjian_time: [
        { required: !0, validator: ae, trigger: "change" }
      ],
      goods_data: [
        {
          required: !0,
          trigger: "blur",
          validator: (r, p, f) => {
            t.goods_type != "all_goods" && (t.goods_data.length == 0 ? f(new Error(e("goodsJsonEmpty"))) : f());
          }
        }
      ]
    })), ae = (b, r, p) => {
      !t.manjian_time || t.manjian_time && !t.manjian_time[0] && !t.manjian_time[1] ? p(new Error(e("selectActivityTime"))) : t.manjian_time[0] ? t.manjian_time[1] ? t.manjian_time[1] <= t.manjian_time[0] && p(new Error(e("selectActivityTimeTips"))) : p(new Error(e("selectActivityEndTime"))) : p(new Error(e("selectActivityStartTime"))), p();
    }, de = () => {
      if (t.rule_json.length >= 5) {
        P.error(e("addLevelLimit"));
        return;
      }
      t.rule_json.push({
        limit: "",
        // 优惠门槛
        is_discount: !1,
        // 是否订单金额优惠
        is_free_shipping: !1,
        // 是否包邮
        is_give_point: !1,
        // 是否送积分
        is_give_coupon: !1,
        // 是否送优惠券
        is_give_goods: !1,
        // 是否送赠品
        is_give_balance: !1,
        // 是否送余额
        discount_type: 1,
        discount_money: "",
        // 优惠金额
        point: "",
        // 积分
        balance: "",
        // 余额
        goods_ids: [],
        goods: [],
        couponIds: [],
        coupon: []
      });
    }, I = {
      required: /[\S]+/,
      number: /^\d{0,10}$/,
      digit: /^\d{0,10}(.?\d{0,2})$/,
      special: /^\d{0,10}(.?\d{0,3})$/
    }, ne = (b) => {
      t.rule_json.splice(b, 1);
    }, K = q([]), Q = q([]), h = q(!1);
    (() => {
      He().then(({ data: b }) => {
        Q.value = b;
      }), Ke().then(({ data: b }) => {
        K.value = b;
      }), N && (h.value = !0, E.value = !0, Ae({
        manjian_id: N
      }).then((r) => {
        const p = r.data.manjian_info;
        t.goods_data = r.data.manjian_goods, t.goods_ids.splice(0, t.goods_ids.length), t.goods_data.forEach((f) => {
          t.goods_ids.push(f.sku_id);
        }), Object.assign(t, p), t.manjian_time = [p.start_time, p.end_time], E.value = !1;
      }));
    })();
    const re = (b, r) => {
      t.goods_data.splice(r, 1), t.goods_ids.splice(t.goods_ids.indexOf(b.sku_id), 1);
    }, ue = (b, r) => {
      const p = t.rule_json[r], f = p.goods.findIndex((d) => d.sku_id === b.sku_id);
      f !== -1 && p.goods.splice(f, 1);
      const _ = p.goods_ids.indexOf(b.sku_id);
      _ !== -1 && p.goods_ids.splice(_, 1);
    }, _e = (b, r) => {
      const p = t.rule_json[r], f = p.coupon.findIndex((d) => d.coupon_id === b.coupon_id);
      f !== -1 && p.coupon.splice(f, 1);
      const _ = p.couponIds.indexOf(b.coupon_id);
      f !== -1 && p.couponIds.splice(_, 1);
    }, me = (b) => {
      let r = [];
      for (let f in b) {
        let _ = b[f], d = {
          goods_id: _.goods_id,
          sku_id: _.sku_id,
          goods_type_name: _.goods_type_name,
          price: _.price,
          sku_image: _.sku_image,
          goods_name: _.goods_name,
          sku_name: _.sku_name,
          stock: _.stock
        };
        t.goods_data.length && t.goods_data.forEach((y) => {
          y.sku_id == d.sku_id && (d = Object.assign(d, y));
        }), r.push(J(d));
      }
      t.goods_data = r;
      let p = {
        manjian_id: N ? Number(N) : "",
        goods_ids: t.goods_data.map((f) => f.goods_id),
        goods_type: t.goods_type,
        start_time: t.manjian_time[0] ? t.manjian_time[0] : F,
        end_time: t.manjian_time[1] ? t.manjian_time[1] : Z
      };
      Je(p).then((f) => {
        f.data.code == -1 && P({
          message: e("goodOnlyOne"),
          type: "error"
        });
        const _ = f.data.data;
        t.goods_data.forEach((d) => {
          const y = _.find((V) => V.goods_id === d.goods_id);
          y && (d.error_msg = y.error_msg);
        });
      });
    }, pe = (b, r) => {
      const p = t.rule_json[r];
      let f = [];
      for (let _ in b) {
        let d = b[_], y = {
          goods_id: d.goods_id,
          sku_id: d.sku_id,
          goods_type_name: d.goods_type_name,
          price: d.price,
          sku_image: d.sku_image,
          goods_name: d.goods_name,
          sku_name: d.sku_name,
          stock: d.stock,
          num: 1
        };
        p.goods.length && p.goods.forEach((V) => {
          V.sku_id == y.sku_id && (y = Object.assign(y, V));
        }), f.push(J(y));
      }
      p.goods = f;
    }, ce = (b, r) => {
      const p = t.rule_json[r];
      let f = [];
      for (let _ in b) {
        let d = b[_], y = {
          price: d.price,
          title: d.title,
          type_name: d.type_name,
          coupon_id: d.id,
          num: 1
        };
        p.coupon.length && p.coupon.forEach((V) => {
          V.coupon_id == y.coupon_id && (y = Object.assign(y, V));
        }), f.push(J(y));
      }
      p.coupon = f;
    }, ge = async () => {
      var f;
      const b = JSON.parse(JSON.stringify(t.rule_json)), r = JSON.parse(JSON.stringify(t.goods_data));
      t.rule_json.some((_, d) => !_.is_discount && !_.is_free_shipping && !_.is_give_point && !_.is_give_coupon && !_.is_give_goods && !_.is_give_balance ? (P.error(e(`第 ${d + 1} 层级的优惠内容至少选择一项`)), !0) : !1) || await ((f = H.value) == null ? void 0 : f.validate(async (_) => {
        _ ? (E.value = !0, t.start_time = t.manjian_time[0], t.end_time = t.manjian_time[1], t.rule_json.forEach((d) => {
          d.goods && (d.goods = d.goods.map((y) => ({
            ...y,
            num: y.num
          }))), d.coupon && (d.coupon = d.coupon.map((y) => ({
            ...y,
            num: y.num
          })));
        }), N ? (t.id = N, Fe(t).then((d) => {
          d.data.code == 1 ? (E.value = !1, L(), P({
            message: e("updateSuccess"),
            type: "success"
          })) : (E.value = !1, P({
            message: e("goodOnlyOne"),
            type: "error"
          }));
        }).catch(() => {
          t.rule_json = b, t.goods_data = r, E.value = !1;
        })) : Ze(t).then((d) => {
          d.data.code == 1 ? (E.value = !1, L(), P({
            message: e("addSuccess"),
            type: "success"
          })) : (E.value = !1, P({
            message: e("goodOnlyOne"),
            type: "error"
          }));
        }).catch(() => {
          t.rule_json = b, t.goods_data = r, E.value = !1;
        })) : document.getElementsByClassName("is-error")[0].scrollIntoView();
      }));
    }, L = () => {
      le.push("/shop/marketing/manjian/list");
    };
    return (b, r) => {
      const p = ve, f = xe, _ = Ve, d = ke, y = je, V = Te, O = Ue, M = we, U = Se, G = Ee, D = Ne, W = Ie, X = Pe, Y = Ce, fe = Me, be = Ge;
      return g(), S("div", Xe, [
        i(f, {
          class: "card !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            i(p, {
              content: o(N) ? o(e)("editFullDiscountBonus") : o(e)("addFullDiscountBonus"),
              icon: o(ze),
              onBack: r[0] || (r[0] = (l) => L())
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        $e((g(), k(f, {
          class: "box-card mt-[15px] !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            i(fe, {
              model: t,
              "label-width": "120px",
              ref_key: "formRef",
              ref: H,
              rules: o(ie),
              "scroll-to-error": "",
              class: "page-form"
            }, {
              default: s(() => [
                i(d, {
                  label: o(e)("activeName"),
                  prop: "manjian_name"
                }, {
                  default: s(() => [
                    n("div", null, [
                      i(_, {
                        modelValue: t.manjian_name,
                        "onUpdate:modelValue": r[1] || (r[1] = (l) => t.manjian_name = l),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: o(e)("namePlaceholder"),
                        class: "input-width",
                        maxlength: 20,
                        "show-word-limit": ""
                      }, null, 8, ["modelValue", "placeholder"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(d, {
                  label: o(e)("activityTime"),
                  prop: "manjian_time"
                }, {
                  default: s(() => [
                    n("div", Ye, [
                      i(y, {
                        modelValue: t.manjian_time,
                        "onUpdate:modelValue": r[2] || (r[2] = (l) => t.manjian_time = l),
                        type: "datetimerange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(d, {
                  label: o(e)("conditionType"),
                  prop: "condition_type",
                  required: ""
                }, {
                  default: s(() => [
                    i(O, {
                      modelValue: t.condition_type,
                      "onUpdate:modelValue": r[3] || (r[3] = (l) => t.condition_type = l),
                      disabled: h.value
                    }, {
                      default: s(() => [
                        i(V, { label: "over_n_yuan" }, {
                          default: s(() => [
                            x(u(o(e)("overNyuan")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "over_n_piece" }, {
                          default: s(() => [
                            x(u(o(e)("overNgoods")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(d, {
                  label: o(e)("ruleType"),
                  prop: "rule_type",
                  required: ""
                }, {
                  default: s(() => [
                    i(O, {
                      modelValue: t.rule_type,
                      "onUpdate:modelValue": r[4] || (r[4] = (l) => t.rule_type = l),
                      disabled: h.value
                    }, {
                      default: s(() => [
                        i(V, { label: "ladder" }, {
                          default: s(() => [
                            x(u(o(e)("ladder")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "cycle" }, {
                          default: s(() => [
                            x(u(o(e)("cycle")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t.rule_type === "ladder" ? (g(), S("div", eo, u(o(e)("ruleTypeTips")), 1)) : j("", !0),
                t.rule_type === "cycle" ? (g(), S("div", oo, u(o(e)("ruleTypeTipsTwo")), 1)) : j("", !0),
                i(d, {
                  label: o(e)("ruleJson"),
                  prop: "rule_json",
                  required: ""
                }, {
                  default: s(() => [
                    n("div", to, [
                      (g(!0), S(R, null, A(t.rule_type === "cycle" ? [t.rule_json[0]] : t.rule_json, (l, v) => (g(), S("div", {
                        key: v,
                        class: "activity-level"
                      }, [
                        n("div", lo, [
                          n("div", so, u(o(e)("activityLevel")) + u(v + 1), 1),
                          t.rule_json.length > 1 && v !== 0 && !h.value ? (g(), S("span", {
                            key: 0,
                            class: "cursor-pointer text-primary mr-[10px]",
                            onClick: (a) => ne(v)
                          }, u(o(e)("delete")), 9, io)) : j("", !0)
                        ]),
                        n("div", ao, [
                          i(d, {
                            class: "limit-input",
                            label: o(e)("discountThreshold"),
                            prop: `rule_json.${v}.limit`,
                            rules: [{
                              required: !0,
                              trigger: "blur",
                              validator: (a, m, c) => {
                                var T;
                                if (m === null || m === "")
                                  c(o(e)("limitPlaceholder"));
                                else if (isNaN(m) || !I.digit.test(m) && t.condition_type == "over_n_yuan")
                                  c(o(e)("limitTips"));
                                else if (isNaN(m) || !I.number.test(m) && t.condition_type == "over_n_piece")
                                  c(o(e)("limitTips"));
                                else if (m <= 0)
                                  c(o(e)("valueMustBeGreaterThanZero"));
                                else {
                                  const w = (T = t.rule_json[v - 1]) == null ? void 0 : T.limit;
                                  w !== void 0 && m <= Number(w) ? c(o(e)("limitTipsThree")) : t.rule_json.map((he, ye) => ye !== v && he.limit).includes(m) ? c(o(e)("limitTipsTwo")) : c();
                                }
                              }
                            }]
                          }, {
                            default: s(() => [
                              n("div", no, [
                                ro,
                                i(_, {
                                  clearable: "",
                                  class: "input-width-short",
                                  maxlength: "8",
                                  modelValue: l.limit,
                                  "onUpdate:modelValue": (a) => l.limit = a,
                                  placeholder: t.condition_type === "over_n_yuan" ? "0.00" : "0",
                                  disabled: h.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"]),
                                n("span", uo, u(t.condition_type === "over_n_yuan" ? "元" : "件"), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label", "prop", "rules"])
                        ]),
                        n("div", _o, [
                          i(d, {
                            class: "limit-input",
                            label: o(e)("discountContent"),
                            required: ""
                          }, {
                            default: s(() => [
                              n("div", mo, [
                                n("div", po, [
                                  i(M, {
                                    modelValue: l.is_discount,
                                    "onUpdate:modelValue": (a) => l.is_discount = a,
                                    disabled: h.value,
                                    label: "is_discount"
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("discountMoney")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                  i(d, { class: "limit-input" }, {
                                    default: s(() => [
                                      l.is_discount ? (g(), S("div", co, [
                                        t.rule_type == "ladder" ? (g(), k(O, {
                                          key: 0,
                                          modelValue: l.discount_type,
                                          "onUpdate:modelValue": (a) => l.discount_type = a,
                                          disabled: h.value
                                        }, {
                                          default: s(() => [
                                            i(V, { label: 1 }, {
                                              default: s(() => [
                                                x(u(o(e)("reduce")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            i(V, { label: 2 }, {
                                              default: s(() => [
                                                x(u(o(e)("discountRate")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])) : j("", !0),
                                        i(d, {
                                          prop: `rule_json.${v}.discount_money`,
                                          rules: [{
                                            required: !0,
                                            trigger: "blur",
                                            validator: (a, m, c) => {
                                              m === null || m === "" ? c(o(e)("discountsPlaceholder")) : isNaN(m) || !I.digit.test(m) ? c(o(e)("limitTips")) : m <= 0 ? c(o(e)("discountMustBeGreaterThanZero")) : l.discount_type === 1 && t.condition_type == "over_n_yuan" && m > Number(l.limit) ? c(o(e)("discountLimit")) : l.discount_type === 2 && (m > 9.9 || m < 0.1) ? c(o(e)("discountMustBeGreaterThanNine")) : c();
                                            }
                                          }]
                                        }, {
                                          default: s(() => [
                                            n("div", go, [
                                              n("span", fo, u(l.discount_type === 1 ? "减" : "打"), 1),
                                              l.discount_type === 1 ? (g(), k(_, {
                                                key: 0,
                                                disabled: h.value,
                                                clearable: "",
                                                class: "input-width-short",
                                                maxlength: "8",
                                                modelValue: l.discount_money,
                                                "onUpdate:modelValue": (a) => l.discount_money = a,
                                                placeholder: "0.00"
                                              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])) : (g(), k(_, {
                                                key: 1,
                                                disabled: h.value,
                                                modelValue: l.discount_money,
                                                "onUpdate:modelValue": (a) => l.discount_money = a,
                                                clearable: "",
                                                class: "input-width-short",
                                                maxlength: "8",
                                                max: 9.9,
                                                placeholder: "0.00"
                                              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "max"])),
                                              n("span", bo, u(l.discount_type === 1 ? "元" : "折"), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["prop", "rules"])
                                      ])) : j("", !0)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                n("div", ho, [
                                  i(M, {
                                    modelValue: l.is_free_shipping,
                                    "onUpdate:modelValue": (a) => l.is_free_shipping = a,
                                    disabled: h.value,
                                    label: "is_free_shipping"
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("freeShipping")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                  n("div", yo, u(o(e)("freeTips")), 1)
                                ]),
                                n("div", vo, [
                                  i(M, {
                                    disabled: h.value,
                                    modelValue: l.is_give_point,
                                    "onUpdate:modelValue": (a) => l.is_give_point = a,
                                    label: "is_give_point"
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("givePoint")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                  l.is_give_point ? (g(), k(d, {
                                    key: 0,
                                    class: "limit-input",
                                    prop: `rule_json.${v}.point`,
                                    rules: [{
                                      required: !0,
                                      trigger: "blur",
                                      validator: (a, m, c) => {
                                        m === null || m === "" ? c(o(e)("pointPlaceholder")) : isNaN(m) || !I.number.test(m) ? c(o(e)("limitTips")) : m <= 0 ? c(o(e)("pointMustBeGreaterThanZero")) : c();
                                      }
                                    }]
                                  }, {
                                    default: s(() => [
                                      n("div", xo, [
                                        Vo,
                                        i(_, {
                                          disabled: h.value,
                                          clearable: "",
                                          class: "input-width-short",
                                          maxlength: "8",
                                          modelValue: l.point,
                                          "onUpdate:modelValue": (a) => l.point = a,
                                          placeholder: "0"
                                        }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                        ko
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["prop", "rules"])) : j("", !0)
                                ]),
                                n("div", jo, [
                                  i(M, {
                                    disabled: h.value,
                                    modelValue: l.is_give_balance,
                                    "onUpdate:modelValue": (a) => l.is_give_balance = a,
                                    label: "is_give_balance"
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("giveBalance")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                  l.is_give_balance ? (g(), k(d, {
                                    key: 0,
                                    class: "limit-input",
                                    prop: `rule_json.${v}.balance`,
                                    rules: [{
                                      required: !0,
                                      trigger: "blur",
                                      validator: (a, m, c) => {
                                        m === null || m === "" ? c(o(e)("balancePlaceholder")) : isNaN(m) || !I.digit.test(m) ? c(o(e)("limitTips")) : m <= 0 ? c(o(e)("balanceMustBeGreaterThanZero")) : c();
                                      }
                                    }]
                                  }, {
                                    default: s(() => [
                                      n("div", To, [
                                        Uo,
                                        i(_, {
                                          disabled: h.value,
                                          clearable: "",
                                          class: "input-width-short",
                                          maxlength: "8",
                                          modelValue: l.balance,
                                          "onUpdate:modelValue": (a) => l.balance = a,
                                          placeholder: "0.00"
                                        }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                        wo
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["prop", "rules"])) : j("", !0)
                                ]),
                                n("div", So, [
                                  i(M, {
                                    label: "is_give_coupon",
                                    disabled: h.value,
                                    modelValue: l.is_give_coupon,
                                    "onUpdate:modelValue": (a) => l.is_give_coupon = a
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("giveCoupon")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                  n("div", Eo, u(o(e)("giveCouponTips")), 1),
                                  l.is_give_coupon && !h.value ? (g(), k(d, {
                                    key: 0,
                                    prop: `rule_json.${v}.coupon`,
                                    class: "dynamic-content",
                                    rules: [{ required: !0, message: o(e)("couponPlaceholder"), trigger: "blur" }]
                                  }, {
                                    default: s(() => [
                                      i(Qe, {
                                        ref_for: !0,
                                        ref: "couponSelectPopupRef",
                                        onCouponSelect: (a) => ce(a, v),
                                        modelValue: l.couponIds,
                                        "onUpdate:modelValue": (a) => l.couponIds = a,
                                        min: 1,
                                        max: 10,
                                        "is-gift": 1
                                      }, null, 8, ["onCouponSelect", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                  }, 1032, ["prop", "rules"])) : j("", !0),
                                  l.coupon && l.coupon.length && l.is_give_coupon ? (g(), k(d, {
                                    key: 1,
                                    class: "mt-[15px]"
                                  }, {
                                    default: s(() => [
                                      n("div", No, [
                                        i(D, {
                                          data: l.coupon,
                                          size: "large",
                                          "max-height": "400",
                                          "row-style": { height: "80px" }
                                        }, {
                                          default: s(() => [
                                            i(U, {
                                              prop: "title",
                                              label: o(e)("name"),
                                              "min-width": "120"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", null, u(a.title), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "type_name",
                                              label: o(e)("type"),
                                              "min-width": "120"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", null, u(a.type_name), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "price",
                                              label: o(e)("couponPrice"),
                                              "min-width": "120"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", null, "￥" + u(a.price), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "num",
                                              label: o(e)("giveNum"),
                                              "min-width": "140"
                                            }, {
                                              default: s(({ row: a, $index: m }) => [
                                                i(d, {
                                                  prop: "rule_json[" + v + "].coupon[" + m + "].num",
                                                  rules: [{ required: !0, trigger: "blur", validator: (c, T, w) => {
                                                    T === null || T === "" ? w(o(e)("giveNumPlaceholder")) : isNaN(T) || !I.number.test(T) ? w(o(e)("limitTips")) : T <= 0 ? w(o(e)("giveNumMustBeGreaterThanZero")) : w();
                                                  } }]
                                                }, {
                                                  default: s(() => [
                                                    i(_, {
                                                      disabled: h.value,
                                                      modelValue: a.num,
                                                      "onUpdate:modelValue": (c) => a.num = c,
                                                      modelModifiers: { number: !0 },
                                                      class: "w-[70px]",
                                                      clearable: "",
                                                      maxlength: "5"
                                                    }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["prop", "rules"])
                                              ]),
                                              _: 2
                                            }, 1032, ["label"]),
                                            i(U, {
                                              label: o(e)("operation"),
                                              align: "right",
                                              "min-width": "160"
                                            }, {
                                              default: s(({ row: a, $index: m }) => [
                                                i(G, {
                                                  type: "primary",
                                                  link: "",
                                                  onClick: (c) => _e(a, v),
                                                  disabled: h.value
                                                }, {
                                                  default: s(() => [
                                                    x(u(o(e)("delete")), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick", "disabled"])
                                              ]),
                                              _: 2
                                            }, 1032, ["label"])
                                          ]),
                                          _: 2
                                        }, 1032, ["data"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)) : j("", !0)
                                ]),
                                n("div", Io, [
                                  i(M, {
                                    disabled: h.value,
                                    label: "is_give_goods",
                                    modelValue: l.is_give_goods,
                                    "onUpdate:modelValue": (a) => l.is_give_goods = a
                                  }, {
                                    default: s(() => [
                                      x(u(o(e)("giveGoods")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "modelValue", "onUpdate:modelValue"]),
                                  n("div", Po, u(o(e)("giveGoodsTips")), 1),
                                  l.is_give_goods && !h.value ? (g(), k(d, {
                                    key: 0,
                                    prop: `rule_json.${v}.goods`,
                                    class: "dynamic-content",
                                    rules: [{ required: !0, message: o(e)("goodsJsonEmpty"), trigger: "blur" }]
                                  }, {
                                    default: s(() => [
                                      i(oe, {
                                        ref_for: !0,
                                        ref_key: "goodsSelectPopupRef",
                                        ref: z,
                                        modelValue: l.goods_ids,
                                        "onUpdate:modelValue": (a) => l.goods_ids = a,
                                        mode: "sku",
                                        onGoodsSelect: (a) => pe(a, v),
                                        min: 1,
                                        max: 10,
                                        "is-gift": 1
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onGoodsSelect"])
                                    ]),
                                    _: 2
                                  }, 1032, ["prop", "rules"])) : j("", !0),
                                  l.goods && l.goods.length && l.is_give_goods ? (g(), k(d, {
                                    key: 1,
                                    class: "mt-[15px]"
                                  }, {
                                    default: s(() => [
                                      n("div", Co, [
                                        i(D, {
                                          data: l.goods,
                                          size: "large",
                                          "max-height": "400"
                                        }, {
                                          default: s(() => [
                                            i(U, {
                                              prop: "goods_id",
                                              label: o(e)("goodsSelectPopupGoodsInfo"),
                                              "min-width": "300"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", Mo, [
                                                  n("div", Go, [
                                                    a.sku_image ? (g(), k(W, {
                                                      key: 0,
                                                      class: "w-[60px] h-[60px]",
                                                      src: o(te)(a.sku_image),
                                                      fit: "contain"
                                                    }, {
                                                      error: s(() => [
                                                        qo
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["src"])) : (g(), S("img", Oo))
                                                  ]),
                                                  n("div", $o, [
                                                    n("span", {
                                                      title: a.sku_name,
                                                      class: "multi-hidden"
                                                    }, u(a.sku_name ? a.goods_name + " " + a.sku_name : a.goods_name), 9, Lo),
                                                    n("span", Bo, u(a.goods_type_name), 1)
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "price",
                                              label: o(e)("goodsSelectPopupPrice"),
                                              "min-width": "120"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", null, "￥" + u(a.price), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "stock",
                                              label: o(e)("stock"),
                                              "min-width": "120"
                                            }, {
                                              default: s(({ row: a }) => [
                                                n("div", null, u(a.stock), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["label"]),
                                            i(U, {
                                              prop: "num",
                                              label: o(e)("giveNum"),
                                              "min-width": "180"
                                            }, {
                                              default: s(({ row: a, $index: m }) => [
                                                i(d, {
                                                  prop: "rule_json[" + v + "].goods[" + m + "].num",
                                                  rules: [{ required: !0, trigger: "blur", validator: (c, T, w) => {
                                                    T === null || T === "" ? w(o(e)("giveNumPlaceholder")) : isNaN(T) || !I.number.test(T) ? w(o(e)("limitTips")) : T <= 0 ? w(o(e)("giveNumMustBeGreaterThanZero")) : T > a.stock ? w(o(e)("giveNumMustBeGreaterThanStock")) : w();
                                                  } }]
                                                }, {
                                                  default: s(() => [
                                                    i(_, {
                                                      disabled: h.value,
                                                      modelValue: a.num,
                                                      "onUpdate:modelValue": (c) => a.num = c,
                                                      modelModifiers: { number: !0 },
                                                      class: "w-[70px]",
                                                      clearable: ""
                                                    }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["prop", "rules"])
                                              ]),
                                              _: 2
                                            }, 1032, ["label"]),
                                            i(U, {
                                              label: o(e)("operation"),
                                              align: "right",
                                              "min-width": "160"
                                            }, {
                                              default: s(({ row: a, $index: m }) => [
                                                i(G, {
                                                  type: "primary",
                                                  link: "",
                                                  onClick: (c) => ue(a, v),
                                                  disabled: h.value
                                                }, {
                                                  default: s(() => [
                                                    x(u(o(e)("delete")), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick", "disabled"])
                                              ]),
                                              _: 2
                                            }, 1032, ["label"])
                                          ]),
                                          _: 2
                                        }, 1032, ["data"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)) : j("", !0)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label"])
                        ])
                      ]))), 128)),
                      t.rule_type == "ladder" && t.rule_json.length < 5 ? (g(), k(G, {
                        key: 0,
                        disabled: h.value,
                        type: "primary",
                        plain: "",
                        onClick: de,
                        class: "mt-[20px]"
                      }, {
                        default: s(() => [
                          x(u(o(e)("addActivityLevel")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])) : j("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(d, {
                  label: o(e)("joinMemberType"),
                  prop: "join_member_type",
                  required: ""
                }, {
                  default: s(() => [
                    i(O, {
                      modelValue: t.join_member_type,
                      "onUpdate:modelValue": r[5] || (r[5] = (l) => t.join_member_type = l)
                    }, {
                      default: s(() => [
                        i(V, { label: "all_member" }, {
                          default: s(() => [
                            x(u(o(e)("allMember")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "selected_member_level" }, {
                          default: s(() => [
                            x(u(o(e)("selectedMemberLevel")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "selected_member_label" }, {
                          default: s(() => [
                            x(u(o(e)("selectedMemberLabel")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t.join_member_type == "selected_member_label" ? (g(), k(d, {
                  key: 2,
                  label: o(e)("memberLabel"),
                  prop: "label_ids",
                  rules: [{ required: !0, message: o(e)("labelTips"), trigger: "blur" }]
                }, {
                  default: s(() => [
                    i(Y, {
                      modelValue: t.label_ids,
                      "onUpdate:modelValue": r[6] || (r[6] = (l) => t.label_ids = l),
                      clearable: "",
                      multiple: "",
                      placeholder: o(e)("memberLabelPlaceholder"),
                      class: "input-width"
                    }, {
                      default: s(() => [
                        (g(!0), S(R, null, A(Q.value, (l, v) => (g(), k(X, {
                          label: l.label_name,
                          value: l.label_id,
                          key: v
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"])) : j("", !0),
                t.join_member_type == "selected_member_level" ? (g(), k(d, {
                  key: 3,
                  label: o(e)("memberLevel"),
                  prop: "level_ids",
                  rules: [{ required: !0, message: o(e)("levelTips"), trigger: "blur" }]
                }, {
                  default: s(() => [
                    i(Y, {
                      modelValue: t.level_ids,
                      "onUpdate:modelValue": r[7] || (r[7] = (l) => t.level_ids = l),
                      clearable: "",
                      multiple: "",
                      placeholder: o(e)("memberLevelPlaceholder"),
                      class: "input-width"
                    }, {
                      default: s(() => [
                        (g(!0), S(R, null, A(K.value, (l, v) => (g(), k(X, {
                          label: l.level_name,
                          value: l.level_id,
                          key: v
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "rules"])) : j("", !0),
                i(d, {
                  label: o(e)("goodsType"),
                  prop: "goods_type",
                  required: ""
                }, {
                  default: s(() => [
                    i(O, {
                      modelValue: t.goods_type,
                      "onUpdate:modelValue": r[8] || (r[8] = (l) => t.goods_type = l),
                      disabled: h.value
                    }, {
                      default: s(() => [
                        i(V, { label: "all_goods" }, {
                          default: s(() => [
                            x(u(o(e)("allGoods")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "selected_goods" }, {
                          default: s(() => [
                            x(u(o(e)("selectedGoods")), 1)
                          ]),
                          _: 1
                        }),
                        i(V, { label: "selected_goods_not" }, {
                          default: s(() => [
                            x(u(o(e)("selectedGoodsNot")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t.goods_type != "all_goods" ? (g(), k(d, {
                  key: 4,
                  label: o(e)("selectGoods"),
                  prop: "goods_data"
                }, {
                  default: s(() => [
                    i(oe, {
                      ref_key: "goodsSelectPopupRef",
                      ref: z,
                      modelValue: t.goods_ids,
                      "onUpdate:modelValue": r[9] || (r[9] = (l) => t.goods_ids = l),
                      mode: "sku",
                      onGoodsSelect: me,
                      min: 1,
                      max: 99
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : j("", !0),
                t.goods_data && t.goods_data.length && t.goods_type != "all_goods" ? (g(), k(d, {
                  key: 5,
                  class: "mt-[15px]"
                }, {
                  default: s(() => [
                    i(D, {
                      data: t.goods_data,
                      size: "large",
                      "max-height": "400"
                    }, {
                      default: s(() => [
                        i(U, {
                          prop: "goods_id",
                          label: o(e)("goodsSelectPopupGoodsInfo"),
                          "min-width": "300"
                        }, {
                          default: s(({ row: l }) => [
                            n("div", Do, [
                              n("div", Ro, [
                                l.sku_image ? (g(), k(W, {
                                  key: 0,
                                  class: "w-[60px] h-[60px]",
                                  src: o(te)(l.sku_image),
                                  fit: "contain"
                                }, {
                                  error: s(() => [
                                    Ao
                                  ]),
                                  _: 2
                                }, 1032, ["src"])) : (g(), S("img", Jo))
                              ]),
                              n("div", Fo, [
                                n("span", {
                                  title: l.sku_name,
                                  class: "multi-hidden"
                                }, u(l.sku_name ? l.goods_name + " " + l.sku_name : l.goods_name), 9, Zo),
                                n("span", zo, u(l.goods_type_name), 1)
                              ]),
                              l.error_msg ? (g(), S("div", Ho, u(l.error_msg), 1)) : j("", !0),
                              l.status == 0 ? (g(), S("div", Ko, u(o(e)("goodsOffTips")), 1)) : j("", !0)
                            ])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(U, {
                          prop: "price",
                          label: o(e)("goodsSelectPopupPrice"),
                          "min-width": "120"
                        }, {
                          default: s(({ row: l }) => [
                            n("div", null, "￥" + u(l.price), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(U, {
                          label: o(e)("operation"),
                          align: "right",
                          "min-width": "160"
                        }, {
                          default: s(({ row: l, $index: v }) => [
                            i(G, {
                              type: "primary",
                              link: "",
                              onClick: (a) => re(l, v)
                            }, {
                              default: s(() => [
                                x(u(o(e)("delete")), 1)
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
                })) : j("", !0),
                i(d, {
                  label: o(e)("remark"),
                  prop: "remark"
                }, {
                  default: s(() => [
                    i(_, {
                      modelValue: t.remark,
                      "onUpdate:modelValue": r[10] || (r[10] = (l) => t.remark = l),
                      placeholder: o(e)("rankRemarkPlaceholder"),
                      type: "textarea",
                      maxlength: "500",
                      "show-word-limit": "",
                      rows: "5",
                      class: "!w-[400px]",
                      clearable: ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        })), [
          [be, E.value]
        ]),
        n("div", Qo, [
          n("div", Wo, [
            i(G, {
              type: "primary",
              onClick: r[11] || (r[11] = (l) => ge())
            }, {
              default: s(() => [
                x(u(o(e)("save")), 1)
              ]),
              _: 1
            }),
            i(G, {
              onClick: r[12] || (r[12] = (l) => L())
            }, {
              default: s(() => [
                x(u(o(e)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const yt = /* @__PURE__ */ We(Xo, [["__scopeId", "data-v-5cdb2bcb"]]);
export {
  yt as default
};
