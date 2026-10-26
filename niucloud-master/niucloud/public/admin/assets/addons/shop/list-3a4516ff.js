import { ElMessage as I, ElButton as ue, ElInput as pe, ElFormItem as de, ElForm as me, ElCard as _e, ElTabPane as he, ElTabs as fe, ElCheckbox as ge, ElTableColumn as ve, ElTooltip as ye, ElTable as be, ElPagination as ke, ElLoadingDirective as Ce } from "element-plus/es";
import { defineComponent as xe, ref as f, reactive as Te, openBlock as r, createElementBlock as p, createVNode as s, withCtx as c, createElementVNode as u, toDisplayString as l, unref as a, createTextVNode as d, Fragment as j, renderList as Pe, createBlock as y, createCommentVNode as b, withDirectives as Ee } from "vue";
import { useRouter as Re, useRoute as Se } from "vue-router";
import { n as $e, o as De, p as G, q as M } from "./marketing-f8ec8b08.js";
import { ElMessageBox as E } from "element-plus";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { setTablePageStorage as Be, getTablePageStorage as k } from "/admin/assets/shared/core-shared.js";
import { _ as Ve } from "./coupon-collection.vue_vue_type_style_index_0_lang-bb8cdcdf.js";
import { _ as Fe } from "./coupon-send-records.vue_vue_type_style_index_0_lang-ccbf77d6.js";
import { _ as Le } from "./coupon-send-popop.vue_vue_type_script_setup_true_lang-35ed9634.js";
import { _ as we } from "./index.vue_vue_type_script_setup_true_lang-0600dfed.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./select-member-b04ea04c.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./browser-b31b1ebf.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
const ze = { class: "main-container" }, Ne = { class: "flex justify-between items-center" }, Ue = { class: "text-page-title" }, Ie = { class: "mt-[10px]" }, je = { class: "mb-[10px] flex items-center" }, Ge = { key: 0 }, Me = { key: 1 }, Ae = { style: { display: "inline-flex", "align-items": "center" } }, qe = { class: "mr-[5px]" }, He = /* @__PURE__ */ u("br", null, null, -1), Je = /* @__PURE__ */ u("br", null, null, -1), Ke = /* @__PURE__ */ u("br", null, null, -1), Oe = /* @__PURE__ */ u("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), Qe = { style: { "white-space": "normal" } }, We = { key: 0 }, Xe = { key: 1 }, Ye = { key: 0 }, Ze = { key: 1 }, et = { key: 0 }, tt = { key: 1 }, nt = { key: 1 }, at = { key: 0 }, lt = {
  key: 0,
  class: "flex flex-col"
}, ot = { key: 1 }, st = { key: 1 }, it = { class: "mt-[16px] flex justify-end" }, Vt = /* @__PURE__ */ xe({
  __name: "list",
  setup(ct) {
    const D = Re(), A = Se().meta.title, B = f(null), n = Te({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        title: "",
        status: ""
      }
    }), V = f(), q = (o, i) => {
      n.searchParam.status = o.props.name, h();
    }, C = f(), x = f(!1), H = (o) => {
      x.value = !1, F.value.toggleAllSelection();
    }, F = f(), g = f([]), J = (o) => {
      g.value = o, C.value = !1, g.value.length > 0 && g.value.length < n.data.length ? x.value = !0 : x.value = !1, g.value.length == n.data.length && n.data.length && g.value.length && (C.value = !0);
    };
    (() => {
      $e().then((o) => {
        B.value = o.data;
      });
    })();
    const h = (o = 1) => {
      n.loading = !0, n.page = o, De({
        page: n.page,
        limit: n.limit,
        ...n.searchParam
      }).then((i) => {
        n.loading = !1, n.data = i.data.data, n.total = i.data.total, Be(n.page, n.limit, n.searchParam);
      }).catch(() => {
        n.loading = !1;
      });
    }, L = () => {
      h(k(n.searchParam).page);
    };
    L();
    const R = f(null), w = f(null), K = (o) => {
      var P;
      const i = "/addon/shop/pages/coupon/detail", m = [
        { name: "coupon_id", value: o.id }
      ], $ = "优惠券推广", T = "coupon";
      (P = w.value) == null || P.show(i, m, $, T);
    }, O = () => {
      D.push("/shop/marketing/coupon/add");
    }, Q = (o) => {
      D.push("/shop/marketing/coupon/edit?id=" + o.id);
    }, z = f(null), W = (o) => {
      z.value.show(o.id);
    }, X = (o) => {
      const i = { id: o.id };
      R.value.setFormData(i), R.value.showDialog = !0;
    }, S = f(null), Y = (o) => {
      const i = { id: o.id };
      S.value.setFormData(i), S.value.showDialog = !0;
    }, Z = (o) => {
      E.confirm(
        e("couponDeleteTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel"),
          type: "warning"
        }
      ).then(() => {
        G({ ids: [o.id] }).then(() => {
          h(k(n.searchParam).page);
        }).catch(() => {
        });
      });
    }, ee = (o) => {
      E.confirm(
        e("couponCloseTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel"),
          type: "warning"
        }
      ).then(() => {
        M({ ids: [o.id] }).then(() => {
          h(k(n.searchParam).page);
        }).catch(() => {
        });
      });
    }, te = () => {
      if (g.value.length == 0) {
        I({
          type: "warning",
          message: `${e("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      E.confirm(e("batchDeleteTips"), e("warning"), {
        confirmButtonText: e("confirm"),
        cancelButtonText: e("cancel"),
        type: "warning"
      }).then(() => {
        const o = [];
        g.value.forEach((i) => {
          o.push(i.id);
        }), G({
          ids: o
        }).then(() => {
          h(k(n.searchParam).page);
        }).catch(() => {
        });
      });
    }, ne = () => {
      if (g.value.length == 0) {
        I({
          type: "warning",
          message: `${e("batchEmptySelectedGoodsTips")}`
        });
        return;
      }
      E.confirm(e("batchCloseTips"), e("warning"), {
        confirmButtonText: e("confirm"),
        cancelButtonText: e("cancel"),
        type: "warning"
      }).then(() => {
        const o = [];
        g.value.forEach((i) => {
          o.push(i.id);
        }), M({
          ids: o
        }).then(() => {
          h(k(n.searchParam).page);
        }).catch(() => {
        });
      });
    }, ae = (o) => {
      o && (o.resetFields(), h());
    };
    return (o, i) => {
      const m = ue, $ = pe, T = de, P = me, N = _e, U = he, le = fe, oe = ge, _ = ve, se = ye, ie = be, ce = ke, re = Ce;
      return r(), p("div", ze, [
        s(N, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: c(() => [
            u("div", Ne, [
              u("span", Ue, l(a(A)), 1),
              s(m, {
                type: "primary",
                onClick: O
              }, {
                default: c(() => [
                  d(l(a(e)("addCoupon")), 1)
                ]),
                _: 1
              })
            ]),
            s(N, {
              class: "box-card !border-none my-[20px] table-search-wrap",
              shadow: "never"
            }, {
              default: c(() => [
                s(P, {
                  inline: !0,
                  model: n.searchParam,
                  ref_key: "searchFormRef",
                  ref: V
                }, {
                  default: c(() => [
                    s(T, {
                      label: a(e)("title"),
                      prop: "title"
                    }, {
                      default: c(() => [
                        s($, {
                          modelValue: n.searchParam.title,
                          "onUpdate:modelValue": i[0] || (i[0] = (t) => n.searchParam.title = t),
                          modelModifiers: { trim: !0 },
                          placeholder: a(e)("titlePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    s(T, null, {
                      default: c(() => [
                        s(m, {
                          type: "primary",
                          onClick: i[1] || (i[1] = (t) => h())
                        }, {
                          default: c(() => [
                            d(l(a(e)("search")), 1)
                          ]),
                          _: 1
                        }),
                        s(m, {
                          onClick: i[2] || (i[2] = (t) => ae(V.value))
                        }, {
                          default: c(() => [
                            d(l(a(e)("reset")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              _: 1
            }),
            u("div", Ie, [
              s(le, {
                modelValue: n.searchParam.status,
                "onUpdate:modelValue": i[3] || (i[3] = (t) => n.searchParam.status = t),
                class: "goods-tabs",
                onTabClick: q
              }, {
                default: c(() => [
                  s(U, {
                    label: a(e)("全部"),
                    name: ""
                  }, null, 8, ["label"]),
                  (r(!0), p(j, null, Pe(B.value, (t, v) => (r(), y(U, {
                    key: v,
                    label: t,
                    name: v
                  }, null, 8, ["label", "name"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              u("div", je, [
                s(oe, {
                  modelValue: C.value,
                  "onUpdate:modelValue": i[4] || (i[4] = (t) => C.value = t),
                  size: "large",
                  class: "px-[14px]",
                  onChange: H,
                  indeterminate: x.value
                }, null, 8, ["modelValue", "indeterminate"]),
                n.searchParam.status !== 1 || n.searchParam.status === "" || n.searchParam.status === null ? (r(), y(m, {
                  key: 0,
                  onClick: te,
                  size: "small"
                }, {
                  default: c(() => [
                    d(l(a(e)("batchDelete")), 1)
                  ]),
                  _: 1
                })) : b("", !0),
                n.searchParam.status === 1 || n.searchParam.status === "" || n.searchParam.status === null ? (r(), y(m, {
                  key: 1,
                  onClick: ne,
                  size: "small"
                }, {
                  default: c(() => [
                    d(l(a(e)("batchClose")), 1)
                  ]),
                  _: 1
                })) : b("", !0)
              ]),
              Ee((r(), y(ie, {
                data: n.data,
                size: "large",
                ref_key: "couponsListTableRef",
                ref: F,
                onSelectionChange: J
              }, {
                empty: c(() => [
                  u("span", null, l(n.loading ? "" : a(e)("emptyData")), 1)
                ]),
                default: c(() => [
                  s(_, {
                    type: "selection",
                    width: "55"
                  }),
                  s(_, {
                    prop: "title",
                    label: a(e)("title"),
                    "min-width": "130"
                  }, null, 8, ["label"]),
                  s(_, {
                    prop: "type_name",
                    label: a(e)("type"),
                    "min-width": "98"
                  }, null, 8, ["label"]),
                  s(_, {
                    prop: "price",
                    label: a(e)("price"),
                    "min-width": "100"
                  }, {
                    default: c(({ row: t }) => [
                      u("span", null, "¥" + l(t.price), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: a(e)("receiveType"),
                    "min-width": "130"
                  }, {
                    default: c(({ row: t }) => [
                      t.receive_type == 1 ? (r(), p("span", Ge, "是")) : (r(), p("span", Me, "否"))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: a(e)("count"),
                    "min-width": "240",
                    "show-overflow-tooltip": !0
                  }, {
                    header: c(() => [
                      u("div", Ae, [
                        u("span", qe, l(a(e)("count")), 1),
                        s(se, {
                          class: "box-item",
                          effect: "light",
                          placement: "top"
                        }, {
                          content: c(() => [
                            d(l(a(e)("countTips1")), 1),
                            He,
                            d(l(a(e)("countTips2")), 1),
                            Je,
                            d(l(a(e)("countTips3")), 1),
                            Ke,
                            d(l(a(e)("countTips4")), 1)
                          ]),
                          default: c(() => [
                            Oe
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: c(({ row: t }) => [
                      u("div", Qe, [
                        t.receive_type == 1 && t.sum_count != "-1" ? (r(), p("div", We, l(a(e)("sumCount")) + "：" + l(t.remain_count || 0) + " / " + l(t.sum_count || 0) + " 张", 1)) : (r(), p("div", Xe, l(a(e)("sumCount")) + "：" + l(a(e)("noLimit")), 1)),
                        u("div", null, l(a(e)("receiveCount")) + "：" + l(t.receive_count || 0) + " 张", 1),
                        u("div", null, l(a(e)("giveCount")) + "：" + l(t.give_count || 0) + " 张", 1),
                        u("div", null, l(a(e)("receiveUseCount")) + "：" + l(t.receive_use_count || 0) + " 张", 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: a(e)("threshold"),
                    "min-width": "130"
                  }, {
                    default: c(({ row: t }) => [
                      t.min_condition_money == "0.00" ? (r(), p("span", Ye, "无门槛")) : (r(), p("span", Ze, "满" + l(t.min_condition_money) + "元可用", 1))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: a(e)("validType"),
                    "min-width": "190"
                  }, {
                    default: c(({ row: t }) => [
                      t.receive_type == 1 ? (r(), p(j, { key: 0 }, [
                        t.valid_type == 1 ? (r(), p("span", et, " 领取之日起" + l(t.length || "") + " 天内有效", 1)) : (r(), p("span", tt, " 使用截止时间至" + l(t.valid_end_time || ""), 1))
                      ], 64)) : (r(), p("span", nt, "--"))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    label: a(e)("receiveTypeTime"),
                    "min-width": "210"
                  }, {
                    default: c(({ row: t }) => [
                      t.receive_type == 1 ? (r(), p("div", at, [
                        parseInt(t.start_time) != 0 && parseInt(t.end_time) != 0 ? (r(), p("div", lt, [
                          u("span", null, "开始时间：" + l(t.start_time), 1),
                          u("span", null, "结束时间：" + l(t.end_time), 1)
                        ])) : (r(), p("div", ot, "不限时"))
                      ])) : (r(), p("span", st, "--"))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(_, {
                    prop: "status_name",
                    label: a(e)("statusName"),
                    "min-width": "98"
                  }, null, 8, ["label"]),
                  s(_, {
                    label: a(e)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "160"
                  }, {
                    default: c(({ row: t }) => [
                      t.status == 1 ? (r(), y(m, {
                        key: 0,
                        type: "primary",
                        link: "",
                        onClick: (v) => K(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("spreadGoods")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : b("", !0),
                      t.status == 0 || t.status == 1 ? (r(), y(m, {
                        key: 1,
                        type: "primary",
                        link: "",
                        onClick: (v) => Q(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : b("", !0),
                      t.status != 1 ? (r(), y(m, {
                        key: 2,
                        type: "primary",
                        link: "",
                        onClick: (v) => Z(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : b("", !0),
                      t.status == 1 ? (r(), y(m, {
                        key: 3,
                        type: "primary",
                        link: "",
                        onClick: (v) => ee(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("close")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : b("", !0),
                      s(m, {
                        type: "primary",
                        link: "",
                        onClick: (v) => X(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("receive")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      t.status == 1 ? (r(), y(m, {
                        key: 4,
                        type: "primary",
                        link: "",
                        onClick: (v) => W(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("send")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : b("", !0),
                      s(m, {
                        type: "primary",
                        link: "",
                        onClick: (v) => Y(t)
                      }, {
                        default: c(() => [
                          d(l(a(e)("sendRecord")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [re, n.loading]
              ]),
              u("div", it, [
                s(ce, {
                  "current-page": n.page,
                  "onUpdate:current-page": i[5] || (i[5] = (t) => n.page = t),
                  "page-size": n.limit,
                  "onUpdate:page-size": i[6] || (i[6] = (t) => n.limit = t),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: n.total,
                  onSizeChange: i[7] || (i[7] = (t) => h()),
                  onCurrentChange: h
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        }),
        s(we, {
          ref_key: "spreadPopupRef",
          ref: w
        }, null, 512),
        s(Ve, {
          ref_key: "couponCollectionRef",
          ref: R
        }, null, 512),
        s(Fe, {
          ref_key: "couponSendRecordRef",
          ref: S
        }, null, 512),
        s(Le, {
          ref_key: "couponSendPopupRef",
          ref: z,
          onCallback: L
        }, null, 512)
      ]);
    };
  }
});
export {
  Vt as default
};
