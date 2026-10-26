import { ElTooltip as A, ElStatistic as E, ElCol as q, ElRow as D, ElCard as M } from "element-plus/es";
import { defineComponent as B, ref as _, openBlock as G, createElementBlock as V, createVNode as e, withCtx as s, createElementVNode as t, toDisplayString as d, unref as a } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import x from "/admin/assets/shared/core-shared.js";
import { i as k } from "./index-8da315d4.js";
import { useRouter as F } from "vue-router";
function L() {
  return x.get("shop/stat/total");
}
function Y() {
  return x.get("shop/stat/today");
}
function I() {
  return x.get("shop/stat/yesterday");
}
function P() {
  return x.get("shop/stat");
}
function R() {
  return x.get("shop/stat/order");
}
function H() {
  return x.get("shop/stat/goods");
}
const j = { class: "main-container" }, z = { class: "text-lg font-extrabold mr-[10px]" }, J = { class: "text-sm text-[#a19f98]" }, K = { class: "text-sm text-[#a19f98]" }, Q = { class: "ml-[10px]" }, U = { class: "text-sm text-[#a19f98] leading-8" }, W = { style: { display: "inline-flex", "align-items": "center" } }, X = { class: "mr-[5px]" }, Z = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), tt = { class: "text-sm text-[#a19f98] leading-8" }, et = { class: "text-sm text-[#a19f98] leading-8 mt-[15px]" }, st = { class: "ml-[10px]" }, at = { class: "text-sm text-[#a19f98] leading-8" }, nt = { style: { display: "inline-flex", "align-items": "center" } }, ot = { class: "mr-[5px]" }, lt = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), it = { class: "text-sm text-[#a19f98] leading-8" }, dt = { class: "text-sm text-[#a19f98] leading-8 mt-[15px]" }, rt = { class: "ml-[10px]" }, ut = { class: "text-sm text-[#a19f98] leading-8" }, ct = { style: { display: "inline-flex", "align-items": "center" } }, _t = { class: "mr-[5px]" }, pt = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), vt = { class: "text-sm text-[#a19f98] leading-8" }, mt = { class: "text-sm text-[#a19f98] leading-8 mt-[15px]" }, ft = { class: "ml-[10px]" }, xt = { class: "text-sm text-[#a19f98] leading-8" }, ht = { style: { display: "inline-flex", "align-items": "center" } }, yt = { class: "mr-[5px]" }, gt = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), wt = { class: "text-sm text-[#a19f98] leading-8" }, Ct = { class: "text-sm text-[#a19f98] leading-8 mt-[15px]" }, bt = { class: "text-lg font-extrabold" }, St = { class: "ml-[10px]" }, Tt = { style: { display: "inline-flex", "align-items": "center" } }, Ot = { class: "mr-[5px]" }, kt = /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1), $t = { style: { display: "inline-flex", "align-items": "center" } }, Nt = { style: { display: "inline-flex", "align-items": "center" } }, At = /* @__PURE__ */ t("div", { style: { display: "inline-flex", "align-items": "center" } }, "退款订单", -1), Et = { style: { display: "inline-flex", "align-items": "center" } }, qt = { style: { display: "inline-flex", "align-items": "center" } }, Dt = /* @__PURE__ */ t("span", { class: "text-lg font-extrabold" }, "订单量趋势", -1), Mt = /* @__PURE__ */ t("span", { class: "text-lg font-extrabold" }, "销售额（元）", -1), Ht = /* @__PURE__ */ B({
  __name: "index",
  setup(Bt) {
    const f = F(), C = _(null), b = _(null), h = _([]), u = _([]), y = _([]), g = _([]), w = _([]), S = _([]);
    (async () => {
      let r = await (await L()).data;
      for (let l in r)
        r[l] = Number(r[l]);
      h.value = r, u.value = await (await Y()).data, u.value.sale_money = u.value.sale_money == "0.00" ? 0 : Number(u.value.sale_money), u.value.refund_money = u.value.refund_money == "0.00" ? 0 : Number(u.value.refund_money), u.value.order_num = Number(u.value.order_num), u.value.access_sum = Number(u.value.access_sum), y.value = await (await I()).data, w.value = await (await R()).data, S.value = await (await H()).data, g.value = await (await P()).data, setTimeout(() => {
        $(""), N("");
      }, 20);
    })();
    const $ = (r) => {
      let l = g.value.order_num;
      if (r && (l = r), !C.value)
        return;
      const c = k(C.value), o = _({
        // title: {
        //     text: '订单量趋势'
        // },
        legend: {},
        xAxis: {
          data: []
        },
        yAxis: {},
        tooltip: {
          trigger: "axis",
          formatter: (i) => {
            if (!i.length)
              return "";
            const v = i[0].axisValue, p = i[0].data;
            return `${v}<br/>订单量: ${p} 单`;
          }
        },
        series: [
          {
            type: "line",
            data: []
          }
        ]
      });
      o.value.xAxis.data = g.value.time, o.value.series[0].data = l, c.setOption(o.value);
    }, N = (r) => {
      let l = g.value.sale_money;
      if (r && (l = r), !b.value)
        return;
      const c = k(b.value), o = _({
        // title: {
        //     text: '销售额（元）'
        // },
        legend: {},
        xAxis: {
          data: []
        },
        yAxis: {},
        tooltip: {
          trigger: "axis",
          formatter: (i) => {
            if (!i.length)
              return "";
            const v = i[0].axisValue, p = i[0].data;
            return `${v}<br/>销售额: ${p} 元`;
          }
        },
        series: [
          {
            type: "line",
            data: []
          }
        ]
      });
      o.value.xAxis.data = g.value.time, o.value.series[0].data = l, c.setOption(o.value);
    }, O = _("");
    return (() => {
      const r = new Date(), l = r.getFullYear(), c = r.getMonth() + 1, o = r.getDate(), i = m(r.getHours()), v = m(r.getMinutes()), p = m(r.getSeconds());
      function m(T) {
        return T < 10 ? "0" + T : T;
      }
      O.value = l + "-" + c + "-" + o + " " + i + ":" + v + ":" + p;
    })(), (r, l) => {
      const c = A, o = E, i = q, v = D, p = M;
      return G(), V("div", j, [
        e(p, {
          shadow: "never",
          class: "!border-none"
        }, {
          header: s(() => [
            t("span", z, d(a(n)("realtimeOverview")), 1),
            t("span", J, d(a(n)("updateTime")), 1),
            t("span", K, d(O.value), 1)
          ]),
          default: s(() => [
            e(v, null, {
              default: s(() => [
                e(i, { span: 6 }, {
                  default: s(() => [
                    t("div", Q, [
                      t("div", U, [
                        e(o, {
                          value: u.value.order_num
                        }, {
                          title: s(() => [
                            t("div", W, [
                              t("span", X, d(a(n)("todayOrderCount")), 1),
                              e(c, {
                                class: "box-item",
                                effect: "light",
                                content: a(n)("todayOrderCount"),
                                placement: "top"
                              }, {
                                default: s(() => [
                                  Z
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      t("div", tt, [
                        t("span", null, d(a(n)("yesterday")), 1),
                        t("span", null, d(y.value.order_num), 1)
                      ]),
                      t("div", et, [
                        e(o, {
                          title: a(n)("orderCount"),
                          value: h.value.order_num
                        }, null, 8, ["title", "value"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                e(i, { span: 6 }, {
                  default: s(() => [
                    t("div", st, [
                      t("div", at, [
                        e(o, {
                          value: u.value.sale_money
                        }, {
                          title: s(() => [
                            t("div", nt, [
                              t("span", ot, d(a(n)("todayOrderSale")), 1),
                              e(c, {
                                class: "box-item",
                                effect: "light",
                                content: a(n)("todayOrderSale"),
                                placement: "top"
                              }, {
                                default: s(() => [
                                  lt
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      t("div", it, [
                        t("span", null, d(a(n)("yesterday")), 1),
                        t("span", null, d(y.value.sale_money), 1)
                      ]),
                      t("div", dt, [
                        e(o, {
                          title: a(n)("salesTotal"),
                          value: h.value.sale_money
                        }, null, 8, ["title", "value"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                e(i, { span: 6 }, {
                  default: s(() => [
                    t("div", rt, [
                      t("div", ut, [
                        e(o, {
                          value: u.value.refund_money
                        }, {
                          title: s(() => [
                            t("div", ct, [
                              t("span", _t, d(a(n)("todayAddMemberCount")), 1),
                              e(c, {
                                class: "box-item",
                                effect: "light",
                                content: a(n)("todayAddMemberCount"),
                                placement: "top"
                              }, {
                                default: s(() => [
                                  pt
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      t("div", vt, [
                        t("span", null, d(a(n)("yesterday")), 1),
                        t("span", null, d(y.value.refund_money), 1)
                      ]),
                      t("div", mt, [
                        e(o, {
                          title: a(n)("memberTotal"),
                          value: h.value.refund_money
                        }, null, 8, ["title", "value"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                e(i, { span: 6 }, {
                  default: s(() => [
                    t("div", ft, [
                      t("div", xt, [
                        e(o, {
                          value: u.value.access_sum
                        }, {
                          title: s(() => [
                            t("div", ht, [
                              t("span", yt, d(a(n)("todayBrowseCount")), 1),
                              e(c, {
                                class: "box-item",
                                effect: "light",
                                content: a(n)("todayBrowseCount"),
                                placement: "top"
                              }, {
                                default: s(() => [
                                  gt
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      t("div", wt, [
                        t("span", null, d(a(n)("yesterday")), 1),
                        t("span", null, d(y.value.access_sum), 1)
                      ]),
                      t("div", Ct, [
                        e(o, {
                          title: a(n)("browseTotal"),
                          value: h.value.access_sum
                        }, null, 8, ["title", "value"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(p, {
          shadow: "never",
          class: "mt-[15px] !border-none"
        }, {
          header: s(() => [
            t("span", bt, d(a(n)("agentMatters")), 1)
          ]),
          default: s(() => [
            e(v, null, {
              default: s(() => [
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[0] || (l[0] = (m) => a(f).push({ path: "/shop/order/index", query: { status: 1 } }))
                }, {
                  default: s(() => [
                    t("div", St, [
                      e(o, {
                        value: w.value.wait_pay_order
                      }, {
                        title: s(() => [
                          t("div", Tt, [
                            t("span", Ot, d(a(n)("waitPayOrder")), 1),
                            e(c, {
                              class: "box-item",
                              effect: "light",
                              content: a(n)("waitPayOrder"),
                              placement: "top"
                            }, {
                              default: s(() => [
                                kt
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ])
                  ]),
                  _: 1
                }),
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[1] || (l[1] = (m) => a(f).push({ path: "/shop/order/index", query: { status: 2 } }))
                }, {
                  default: s(() => [
                    e(o, {
                      value: w.value.wait_delivery_order
                    }, {
                      title: s(() => [
                        t("div", $t, d(a(n)("waitDeliveryOrder")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[2] || (l[2] = (m) => a(f).push({ path: "/shop/order/index", query: { status: 3 } }))
                }, {
                  default: s(() => [
                    e(o, {
                      value: w.value.wait_take_order
                    }, {
                      title: s(() => [
                        t("div", Nt, d(a(n)("waitTakeOrder")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[3] || (l[3] = (m) => a(f).push({ path: "/shop/order/refund" }))
                }, {
                  default: s(() => [
                    e(o, {
                      value: w.value.refund_order
                    }, {
                      title: s(() => [
                        At
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[4] || (l[4] = (m) => a(f).push({ path: "/shop/goods/list" }))
                }, {
                  default: s(() => [
                    e(o, {
                      value: S.value.sale_goods_num
                    }, {
                      title: s(() => [
                        t("div", Et, d(a(n)("saleGoodsNum")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                e(i, {
                  span: 4,
                  class: "cursor-pointer",
                  onClick: l[5] || (l[5] = (m) => a(f).push({ path: "/shop/goods/list", query: { status: 0 } }))
                }, {
                  default: s(() => [
                    e(o, {
                      value: S.value.warehouse_goods_num
                    }, {
                      title: s(() => [
                        t("div", qt, d(a(n)("warehouseGoodsNum")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(v, {
          gutter: 15,
          class: "mt-[15px]"
        }, {
          default: s(() => [
            e(i, { span: 12 }, {
              default: s(() => [
                e(p, {
                  shadow: "never",
                  class: "!border-none"
                }, {
                  header: s(() => [
                    Dt
                  ]),
                  default: s(() => [
                    t("div", {
                      ref_key: "visitStat",
                      ref: C,
                      style: { width: "100%", height: "300px" }
                    }, null, 512)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(i, { span: 12 }, {
              default: s(() => [
                e(p, {
                  shadow: "never",
                  class: "!border-none"
                }, {
                  header: s(() => [
                    Mt
                  ]),
                  default: s(() => [
                    t("div", {
                      ref_key: "hourStat",
                      ref: b,
                      style: { width: "100%", height: "300px" }
                    }, null, 512)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  Ht as default
};
