import { ElButton as H, ElInput as J, ElFormItem as K, ElForm as Q, ElTableColumn as W, ElTable as X, ElPagination as Y, ElDialog as Z, ElLoadingDirective as ee } from "element-plus/es";
import { defineComponent as te, computed as D, ref as S, reactive as N, openBlock as h, createElementBlock as b, createElementVNode as d, renderSlot as le, createVNode as i, withCtx as r, createTextVNode as y, toDisplayString as s, unref as o, withDirectives as C, vShow as E, createBlock as oe, nextTick as ae } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as T } from "element-plus";
import { g as ne } from "./marketing-f8ec8b08.js";
import { c as ie } from "./cloneDeep-70d647ec.js";
import { _ as se } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const pe = { class: "inline-block ml-[10px] text-[14px]" }, re = { class: "text-primary mx-[2px]" }, de = { key: 0 }, ue = { key: 1 }, ce = { key: 0 }, me = { key: 1 }, _e = { class: "mt-[16px] flex" }, fe = { class: "flex items-center flex-1" }, ge = { class: "mr-[10px]" }, ve = { class: "text-primary mx-[2px]" }, he = { class: "dialog-footer" }, ye = /* @__PURE__ */ te({
  __name: "coupon-select-popup",
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
    }
  },
  emits: ["update:modelValue", "couponSelect"],
  setup(z, { expose: F, emit: w }) {
    const _ = z, c = D({
      get() {
        return _.modelValue;
      },
      set(l) {
        w("update:modelValue", l);
      }
    }), g = S(!1), p = N({}), f = D(() => Object.keys(p).length), t = N({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        title: "",
        status: 1,
        verify_coupon_ids: ""
      }
    }), V = S(), k = S(), I = (l, e) => {
      let u = !1;
      for (let m = 0; m < l.length; m++)
        if (l[m].id == e.id) {
          u = !0;
          break;
        }
      u ? p["coupon_" + e.id] = e : delete p["coupon_" + e.id];
    }, R = (l) => {
      l.length ? l.forEach((e) => {
        p["coupon_" + e.id] = e;
      }) : t.data.forEach((e) => {
        delete p["coupon_" + e.id];
      });
    }, x = (l = 1, e = null) => {
      t.loading = !0, t.page = l;
      const u = ie(t.searchParam);
      ne({
        page: t.page,
        limit: t.limit,
        ...u
      }).then((m) => {
        t.loading = !1, t.data = m.data.data, t.total = m.data.total, e && e(m.data.verify_coupon_ids), $();
      }).catch(() => {
        t.loading = !1;
      });
    }, $ = () => {
      ae(() => {
        if (k.value)
          for (let l = 0; l < t.data.length; l++)
            k.value.toggleRowSelection(t.data[l], !1), p["coupon_" + t.data[l].id] && k.value.toggleRowSelection(t.data[l], !0);
      });
    }, L = (l) => {
      l && (l.resetFields(), x());
    }, B = () => {
      t.searchParam.verify_coupon_ids = c.value, x(1, (l) => {
        if (c.value) {
          c.value.splice(0, c.value.length, ...l);
          for (let e in p) {
            const u = e.replace("coupon_", "");
            c.value.includes(Number(u)) || delete p[e];
          }
          c.value.forEach((e) => {
            p["coupon_" + e] || (p["coupon_" + e] = {});
          });
          for (let e = 0; e < t.data.length; e++)
            c.value.indexOf(t.data[e].id) != -1 && (p["coupon_" + t.data[e].id] = t.data[e]);
        }
      }), g.value = !0;
    }, U = () => {
      for (let l in p)
        delete p[l];
      $();
    }, j = () => {
      if (_.min && f.value < _.min) {
        T({
          type: "warning",
          message: `${a("所选优惠券数量不能少于")}${_.min}${a("张")}`
        });
        return;
      }
      if (_.max && _.max > 0 && f.value && f.value > _.max) {
        T({
          type: "warning",
          message: `${a("所选优惠券数量不能超过")}${_.max}${a("张")}`
        });
        return;
      }
      let l = [];
      for (let e in p)
        l.push(parseInt(e.replace("coupon_", "")));
      c.value.splice(0, c.value.length, ...l), w("couponSelect", p), g.value = !1;
    };
    return F({
      showDialog: g,
      selectCoupon: p,
      selectCouponNum: f
    }), (l, e) => {
      const u = H, m = J, P = K, A = Q, v = W, M = X, O = Y, q = Z, G = ee;
      return h(), b("div", null, [
        d("div", { onClick: B }, [
          le(l.$slots, "default", {}, () => [
            i(u, null, {
              default: r(() => [
                y(s(o(a)("选择优惠券")), 1)
              ]),
              _: 1
            }),
            C(d("div", pe, [
              d("span", null, s(o(a)("已选")), 1),
              d("span", re, s(o(c).length), 1),
              d("span", null, s(o(a)("张")), 1)
            ], 512), [
              [E, o(c).length]
            ])
          ], !0)
        ]),
        i(q, {
          modelValue: g.value,
          "onUpdate:modelValue": e[7] || (e[7] = (n) => g.value = n),
          title: o(a)("优惠券选择"),
          width: "1000px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: r(() => [
            d("span", he, [
              i(u, {
                onClick: e[6] || (e[6] = (n) => g.value = !1)
              }, {
                default: r(() => [
                  y(s(o(a)("cancel")), 1)
                ]),
                _: 1
              }),
              i(u, {
                type: "primary",
                onClick: j
              }, {
                default: r(() => [
                  y(s(o(a)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            i(A, {
              inline: !0,
              model: t.searchParam,
              ref_key: "searchFormRef",
              ref: V
            }, {
              default: r(() => [
                i(P, {
                  label: o(a)("优惠券名称"),
                  prop: "keyword",
                  class: "form-item-wrap"
                }, {
                  default: r(() => [
                    i(m, {
                      modelValue: t.searchParam.title,
                      "onUpdate:modelValue": e[0] || (e[0] = (n) => t.searchParam.title = n),
                      modelModifiers: { trim: !0 },
                      placeholder: o(a)("请输入优惠券名称"),
                      maxlength: "60"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(P, { class: "form-item-wrap" }, {
                  default: r(() => [
                    i(u, {
                      type: "primary",
                      onClick: e[1] || (e[1] = (n) => x())
                    }, {
                      default: r(() => [
                        y(s(o(a)("search")), 1)
                      ]),
                      _: 1
                    }),
                    i(u, {
                      onClick: e[2] || (e[2] = (n) => L(V.value))
                    }, {
                      default: r(() => [
                        y(s(o(a)("reset")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            C((h(), oe(M, {
              data: t.data,
              size: "large",
              ref_key: "couponListTableRef",
              ref: k,
              "max-height": "400",
              onSelect: I,
              onSelectAll: R
            }, {
              empty: r(() => [
                d("span", null, s(t.loading ? "" : o(a)("emptyData")), 1)
              ]),
              default: r(() => [
                i(v, {
                  type: "selection",
                  width: "55"
                }),
                i(v, {
                  prop: "title",
                  label: o(a)("名称"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                i(v, {
                  prop: "type_name",
                  label: o(a)("类型"),
                  "min-width": "130"
                }, null, 8, ["label"]),
                i(v, {
                  prop: "price",
                  label: o(a)("面值"),
                  "min-width": "130"
                }, {
                  default: r(({ row: n }) => [
                    d("span", null, "¥" + s(n.price), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(v, {
                  label: o(a)("使用门槛"),
                  "min-width": "130"
                }, {
                  default: r(({ row: n }) => [
                    n.min_condition_money == "0.00" ? (h(), b("span", de, "无门槛")) : (h(), b("span", ue, "满" + s(n.min_condition_money) + "元可用", 1))
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(v, {
                  label: o(a)("有效期"),
                  "min-width": "210"
                }, {
                  default: r(({ row: n }) => [
                    n.valid_type == 1 ? (h(), b("span", ce, " 领取之日起" + s(n.length || "") + " 天内有效", 1)) : (h(), b("span", me, " 使用截止时间至" + s(n.valid_end_time || ""), 1))
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [G, t.loading]
            ]),
            d("div", _e, [
              d("div", fe, [
                C(d("div", ge, [
                  d("span", null, s(o(a)("已选择")), 1),
                  d("span", ve, s(o(f)), 1),
                  d("span", null, s(o(a)("张优惠券")), 1)
                ], 512), [
                  [E, o(f)]
                ]),
                C(i(u, {
                  type: "primary",
                  link: "",
                  onClick: U
                }, {
                  default: r(() => [
                    y(s(o(a)("取消选择")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [E, o(f)]
                ])
              ]),
              i(O, {
                "current-page": t.page,
                "onUpdate:current-page": e[3] || (e[3] = (n) => t.page = n),
                "page-size": t.limit,
                "onUpdate:page-size": e[4] || (e[4] = (n) => t.limit = n),
                layout: "total, sizes, prev, pager, next, jumper",
                total: t.total,
                onSizeChange: e[5] || (e[5] = (n) => x()),
                onCurrentChange: x
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const Pe = /* @__PURE__ */ se(ye, [["__scopeId", "data-v-fb2f7662"]]);
export {
  Pe as default
};
