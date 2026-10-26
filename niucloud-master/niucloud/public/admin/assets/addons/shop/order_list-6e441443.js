import { ElOption as Q, ElSelect as W, ElInput as X, ElFormItem as Z, ElDatePicker as ee, ElButton as ae, ElForm as te, ElCard as le, ElTabPane as oe, ElTabs as re, ElTableColumn as ne, ElTable as se, ElTooltip as de, ElPagination as ie, ElLoadingDirective as pe } from "element-plus/es";
import { defineComponent as me, ref as x, reactive as ce, openBlock as p, createElementBlock as m, createVNode as a, withCtx as s, createElementVNode as d, toDisplayString as r, unref as e, Fragment as w, renderList as V, createBlock as Y, createTextVNode as v, withDirectives as _e, createCommentVNode as T, pushScopeId as ue, popScopeId as he } from "vue";
import { _ as be } from "./goods_default-bd0cc1e2.js";
import { t } from "/admin/assets/shared/admin-lang.js";
import { h as fe, i as ge, j as ye, k as xe } from "./order-a6ced131.js";
import { getTablePageStorage as ve, img as ke, setTablePageStorage as Pe } from "/admin/assets/shared/core-shared.js";
import { useRoute as we, useRouter as Ve } from "vue-router";
import { _ as Te } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const De = (k) => (ue("data-v-8dc81cda"), k = k(), he(), k), Ee = { class: "main-container" }, Ce = { class: "flex justify-between items-center" }, Fe = { class: "text-page-title" }, Ne = { class: "table-body min-h-[150px]" }, Se = { key: 0 }, Ue = { class: "flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]" }, Me = { class: "ml-5" }, Ye = {
  key: 0,
  class: "ml-5"
}, ze = ["onClick"], Ie = { class: "flex items-center min-w-[50px] mr-[10px]" }, Oe = ["src"], je = {
  key: 1,
  class: "w-[50px] h-[50px]",
  src: be,
  alt: ""
}, Be = { class: "flex flex-col" }, $e = { class: "multi-hidden text-[14px]" }, He = { class: "text-[12px] text-[#999]" }, Le = { style: { display: "inline-flex", "align-items": "center" } }, Re = { class: "mr-[5px]" }, qe = /* @__PURE__ */ De(() => /* @__PURE__ */ d("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Ge = { class: "flex flex-col" }, Ae = { class: "text-[13px]" }, Je = {
  key: 0,
  class: "text-[13px] mt-[5px]"
}, Ke = { key: 0 }, Qe = { class: "text-[#999]" }, We = { key: 1 }, Xe = {
  key: 1,
  class: "text-[13px] mt-[5px]"
}, Ze = { class: "text-[14px]" }, ea = { class: "text-[14px]" }, aa = { class: "mt-[16px] flex justify-end" }, ta = /* @__PURE__ */ me({
  __name: "order_list",
  setup(k) {
    const z = we(), I = Ve(), O = z.meta.title, D = x(""), j = x([]), E = x([]), C = x([]);
    (async () => {
      j.value = await (await fe()).data, E.value = await (await ge()).data, C.value = await (await ye()).data;
    })();
    const l = ce({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        search_type: "order_no",
        search_name: "",
        pay_type: "",
        order_from: "",
        status: "",
        create_time: [],
        pay_time: [],
        activity_type: "newcomer_discount"
      }
    }), F = x(), b = (c = 1) => {
      l.loading = !0, l.page = c, xe({
        page: l.page,
        limit: l.limit,
        ...l.searchParam
      }).then((n) => {
        l.loading = !1, l.data = n.data.data.map((_) => (_.order_goods.forEach((h) => {
          h.rowNum = _.order_goods.length;
        }), _)), l.total = n.data.total, Pe(l.page, l.limit, l.searchParam);
      }).catch(() => {
        l.loading = !1;
      });
    };
    b(ve(l.searchParam).page);
    const B = ({
      row: c,
      column: n,
      rowIndex: _,
      columnIndex: h
    }) => _ === 0 ? h > 1 ? [c.rowNum, 1] : [1, 1] : h > 1 ? [0, 0] : [1, 1], $ = (c) => {
      l.searchParam.status = c, b();
    }, N = (c) => {
      const n = I.resolve({
        path: "/shop/order/detail",
        query: {
          order_id: c.order_id
        }
      });
      window.open(n.href);
    }, H = (c) => {
      c && (c.resetFields(), b());
    };
    return (c, n) => {
      const _ = Q, h = W, L = X, f = Z, S = ee, P = ae, R = te, U = le, y = oe, q = re, u = ne, M = se, G = de, A = ie, J = pe;
      return p(), m("div", Ee, [
        a(U, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            d("div", Ce, [
              d("span", Fe, r(e(O)), 1)
            ]),
            a(U, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: s(() => [
                a(R, {
                  inline: !0,
                  model: l.searchParam,
                  ref_key: "searchFormRef",
                  ref: F
                }, {
                  default: s(() => [
                    a(f, {
                      label: e(t)("orderInfo"),
                      prop: "search_name"
                    }, {
                      default: s(() => [
                        a(h, {
                          modelValue: l.searchParam.search_type,
                          "onUpdate:modelValue": n[0] || (n[0] = (o) => l.searchParam.search_type = o),
                          clearable: "",
                          class: "input-item"
                        }, {
                          default: s(() => [
                            a(_, {
                              label: e(t)("orderNo"),
                              value: "order_no"
                            }, null, 8, ["label"]),
                            a(_, {
                              label: e(t)("outTradeNo"),
                              value: "out_trade_no"
                            }, null, 8, ["label"])
                          ]),
                          _: 1
                        }, 8, ["modelValue"]),
                        a(L, {
                          class: "input-item ml-3",
                          modelValue: l.searchParam.search_name,
                          "onUpdate:modelValue": n[1] || (n[1] = (o) => l.searchParam.search_name = o),
                          modelModifiers: { trim: !0 }
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(f, {
                      label: e(t)("payType"),
                      prop: "pay_type"
                    }, {
                      default: s(() => [
                        a(h, {
                          modelValue: l.searchParam.pay_type,
                          "onUpdate:modelValue": n[2] || (n[2] = (o) => l.searchParam.pay_type = o),
                          clearable: "",
                          class: "input-item"
                        }, {
                          default: s(() => [
                            (p(!0), m(w, null, V(E.value, (o, g) => (p(), Y(_, {
                              key: g,
                              label: o.name,
                              value: o.key
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(f, {
                      label: e(t)("fromType"),
                      prop: "order_from"
                    }, {
                      default: s(() => [
                        a(h, {
                          modelValue: l.searchParam.order_from,
                          "onUpdate:modelValue": n[3] || (n[3] = (o) => l.searchParam.order_from = o),
                          clearable: "",
                          class: "input-item"
                        }, {
                          default: s(() => [
                            (p(!0), m(w, null, V(C.value, (o, g) => (p(), Y(_, {
                              key: g,
                              label: o,
                              value: g
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(f, {
                      label: e(t)("createTime"),
                      prop: "create_time"
                    }, {
                      default: s(() => [
                        a(S, {
                          modelValue: l.searchParam.create_time,
                          "onUpdate:modelValue": n[4] || (n[4] = (o) => l.searchParam.create_time = o),
                          type: "datetimerange",
                          "value-format": "YYYY-MM-DD HH:mm:ss",
                          "start-placeholder": e(t)("startDate"),
                          "end-placeholder": e(t)("endDate")
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(f, {
                      label: e(t)("payTime"),
                      prop: "pay_time"
                    }, {
                      default: s(() => [
                        a(S, {
                          modelValue: l.searchParam.pay_time,
                          "onUpdate:modelValue": n[5] || (n[5] = (o) => l.searchParam.pay_time = o),
                          type: "datetimerange",
                          "value-format": "YYYY-MM-DD HH:mm:ss",
                          "start-placeholder": e(t)("startDate"),
                          "end-placeholder": e(t)("endDate")
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(f, null, {
                      default: s(() => [
                        a(P, {
                          type: "primary",
                          onClick: n[6] || (n[6] = (o) => b())
                        }, {
                          default: s(() => [
                            v(r(e(t)("search")), 1)
                          ]),
                          _: 1
                        }),
                        a(P, {
                          onClick: n[7] || (n[7] = (o) => H(F.value))
                        }, {
                          default: s(() => [
                            v(r(e(t)("reset")), 1)
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
            a(q, {
              modelValue: D.value,
              "onUpdate:modelValue": n[8] || (n[8] = (o) => D.value = o),
              class: "demo-tabs",
              onTabChange: $
            }, {
              default: s(() => [
                a(y, {
                  label: e(t)("all"),
                  name: ""
                }, null, 8, ["label"]),
                a(y, {
                  label: e(t)("toBeShipped"),
                  name: "2"
                }, null, 8, ["label"]),
                a(y, {
                  label: e(t)("shipped"),
                  name: "3"
                }, null, 8, ["label"]),
                a(y, {
                  label: e(t)("completed"),
                  name: "5"
                }, null, 8, ["label"]),
                a(y, {
                  label: e(t)("closed"),
                  name: "-1"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            d("div", null, [
              a(M, {
                data: l.data,
                size: "large",
                class: "table-top"
              }, {
                default: s(() => [
                  a(u, {
                    label: e(t)("orderGoods"),
                    "min-width": "200"
                  }, null, 8, ["label"]),
                  a(u, {
                    label: e(t)("goodsPriceNumber"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  a(u, {
                    label: e(t)("orderMoney"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  a(u, {
                    label: e(t)("orderStatus"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(u, {
                    label: e(t)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "100"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])
            ]),
            _e((p(), m("div", Ne, [
              l.loading ? T("", !0) : (p(), m("div", Se, [
                l.data.length ? (p(!0), m(w, { key: 0 }, V(l.data, (o, g) => (p(), m("div", { key: g }, [
                  d("div", Ue, [
                    d("div", null, [
                      d("span", null, r(e(t)("orderNo")) + "：" + r(o.order_no), 1),
                      d("span", Me, r(e(t)("createTime")) + "：" + r(o.create_time), 1),
                      o.pay ? (p(), m("span", Ye, r(e(t)("payType")) + "：" + r(o.pay.type_name), 1)) : T("", !0)
                    ])
                  ]),
                  a(M, {
                    data: o.order_goods,
                    size: "large",
                    "show-header": !1,
                    "span-method": B
                  }, {
                    empty: s(() => [
                      d("span", null, r(l.loading ? "" : e(t)("emptyData")), 1)
                    ]),
                    default: s(() => [
                      a(u, { "min-width": "200" }, {
                        default: s(({ row: i }) => [
                          d("div", {
                            class: "flex cursor-pointer",
                            onClick: (K) => N(i)
                          }, [
                            d("div", Ie, [
                              i.goods_image_thumb_small ? (p(), m("img", {
                                key: 0,
                                class: "w-[50px] h-[50px]",
                                src: e(ke)(i.goods_image_thumb_small),
                                alt: ""
                              }, null, 8, Oe)) : (p(), m("img", je))
                            ]),
                            d("div", Be, [
                              d("p", $e, r(i.goods_name), 1),
                              d("span", He, r(i.sku_name), 1)
                            ])
                          ], 8, ze)
                        ]),
                        _: 1
                      }),
                      a(u, { "min-width": "150" }, {
                        header: s(() => [
                          d("div", Le, [
                            d("span", Re, r(e(t)("goodsPriceNumber")), 1),
                            a(G, {
                              class: "box-item",
                              effect: "light",
                              placement: "top"
                            }, {
                              content: s(() => [
                                v(r(e(t)("goodsPriceNumberTips")), 1)
                              ]),
                              default: s(() => [
                                qe
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        default: s(({ row: i }) => [
                          d("div", Ge, [
                            d("span", Ae, "￥" + r(i.price), 1),
                            i.extend && i.extend.newcomer_price ? (p(), m("span", Je, [
                              parseFloat(i.extend.newcomer_price) && i.num > 1 ? (p(), m("span", Ke, [
                                v(r(i.num) + r(e(t)("piece")), 1),
                                d("span", Qe, "（第1" + r(e(t)("piece")) + "，￥" + r(parseFloat(i.extend.newcomer_price).toFixed(2)) + "/" + r(e(t)("piece")) + "；第" + r(i.num > 2 ? "2~" + i.num : "2") + r(e(t)("piece")) + "，￥" + r(parseFloat(i.price).toFixed(2)) + "/" + r(e(t)("piece")) + "）", 1)
                              ])) : (p(), m("span", We, r(i.num) + r(e(t)("piece")), 1))
                            ])) : (p(), m("span", Xe, r(i.num) + r(e(t)("piece")), 1))
                          ])
                        ]),
                        _: 1
                      }),
                      a(u, {
                        label: e(t)("orderMoney"),
                        "min-width": "150",
                        "class-name": "border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"
                      }, {
                        default: s(({ row: i }) => [
                          d("span", Ze, "￥" + r(o.order_money), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]),
                      a(u, {
                        label: e(t)("orderStatus"),
                        "min-width": "100"
                      }, {
                        default: s(({ row: i }) => [
                          d("span", ea, r(o.status_name.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]),
                      a(u, {
                        label: e(t)("operation"),
                        fixed: "right",
                        align: "right",
                        "min-width": "100"
                      }, {
                        default: s(({ row: i }) => [
                          a(P, {
                            type: "primary",
                            link: "",
                            onClick: (K) => N(o)
                          }, {
                            default: s(() => [
                              v(r(e(t)("info")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["label"])
                    ]),
                    _: 2
                  }, 1032, ["data"])
                ]))), 128)) : T("", !0)
              ]))
            ])), [
              [J, l.loading]
            ]),
            d("div", aa, [
              a(A, {
                "current-page": l.page,
                "onUpdate:current-page": n[9] || (n[9] = (o) => l.page = o),
                "page-size": l.limit,
                "onUpdate:page-size": n[10] || (n[10] = (o) => l.limit = o),
                layout: "total, sizes, prev, pager, next, jumper",
                total: l.total,
                onSizeChange: n[11] || (n[11] = (o) => b()),
                onCurrentChange: b
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _a = /* @__PURE__ */ Te(ta, [["__scopeId", "data-v-8dc81cda"]]);
export {
  _a as default
};
