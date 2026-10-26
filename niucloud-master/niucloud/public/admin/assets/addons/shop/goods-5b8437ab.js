import { ElDatePicker as X, ElFormItem as Z, ElButton as ee, ElForm as te, ElTooltip as ae, ElStatistic as se, ElCard as oe, ElInput as ne, ElCascader as le, ElOption as ce, ElSelect as ie, ElImage as de, ElTableColumn as re, ElTable as pe, ElPagination as ue, ElLoadingDirective as me } from "element-plus/es";
import { defineComponent as _e, ref as D, reactive as T, openBlock as b, createElementBlock as C, createVNode as a, withCtx as c, createElementVNode as t, toDisplayString as u, unref as s, createTextVNode as P, Fragment as fe, renderList as he, createBlock as N, withDirectives as xe, createCommentVNode as ge, pushScopeId as ve, popScopeId as be } from "vue";
import { _ as R } from "./goods_default-bd0cc1e2.js";
import { img as ye } from "/admin/assets/shared/core-shared.js";
import { t as o } from "/admin/assets/shared/admin-lang.js";
import { i as we } from "./index-8da315d4.js";
import { useRouter as De } from "vue-router";
import { a as Te } from "./goods-d2a56d58.js";
import k from "/admin/assets/shared/core-shared.js";
import { _ as Ce } from "./_plugin-vue_export-helper-dad06003.js";
function ke(_) {
  return k.get("shop/goods/statistics/basic", { params: _ });
}
function Ee(_) {
  return k.get("shop/goods/statistics/trend", { params: _ });
}
function Ve() {
  return k.get("shop/goods/statistics/type");
}
function Fe(_) {
  return k.get("shop/goods/statistics/rank", { params: _ });
}
const p = (_) => (ve("data-v-5d404826"), _ = _(), be(), _), Pe = { class: "main-container" }, Ne = { class: "flex justify-between items-start" }, je = { class: "text-lg font-extrabold mr-[10px]" }, Se = { class: "flex items-center" }, ze = { class: "flex flex-wrap" }, Me = { class: "w-[25%] flex flex-shrink-0 mb-[30px]" }, Ye = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#1890ff] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-a-Group840V6xx text-[#fff]" })
], -1)), Ae = { class: "flex items-center" }, Re = { class: "mr-[5px] text-[14px]" }, Ie = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Le = { class: "w-[25%] flex flex-shrink-0 mb-[30px]" }, Ge = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#00c050] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-a-zuji34 text-[#fff]" })
], -1)), Ue = { class: "flex items-center" }, $e = { class: "mr-[5px] text-[14px]" }, Be = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Oe = { class: "w-[25%] flex flex-shrink-0 mb-[30px]" }, qe = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#ffab2b] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-gouwucheV6xx-11 text-[#fff]" })
], -1)), He = { class: "flex items-center" }, Je = { class: "mr-[5px] text-[14px]" }, Ke = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), Qe = { class: "w-[25%] flex flex-shrink-0 mb-[30px]" }, We = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#b37feb] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-xiadanjianshu text-[#fff]" })
], -1)), Xe = { class: "flex items-center" }, Ze = { class: "mr-[5px] text-[14px]" }, et = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), tt = { class: "w-[25%] flex flex-shrink-0 mb-[30px]" }, at = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#627DFE] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-zhifujianshu text-[#fff]" })
], -1)), st = { class: "flex items-center" }, ot = { class: "mr-[5px] text-[14px]" }, nt = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), lt = { class: "w-[25%] flex flex-shrink-0" }, ct = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#F76A6C] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-zhifujine text-[#fff]" })
], -1)), it = { class: "flex items-center" }, dt = { class: "mr-[5px] text-[14px]" }, rt = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), pt = { class: "w-[25%] flex flex-shrink-0" }, ut = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#43C5FF] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-tuikuanjine text-[#fff]" })
], -1)), mt = { class: "flex items-center" }, _t = { class: "mr-[5px] text-[14px]" }, ft = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), ht = { class: "w-[25%] flex flex-shrink-0" }, xt = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "w-[32px] h-[32px] bg-[#11D0EA] rounded-full flex justify-center items-center mr-[15px]" }, [
  /* @__PURE__ */ t("span", { class: "nc-iconfont nc-icon-tuikuanjianshu text-[#fff]" })
], -1)), gt = { class: "flex items-center" }, vt = { class: "mr-[5px] text-[14px]" }, bt = /* @__PURE__ */ p(() => /* @__PURE__ */ t("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), yt = { class: "bg-[white] mt-[20px]" }, wt = { class: "text-lg font-extrabold mb-[20px]" }, Dt = ["onClick"], Tt = { class: "min-w-[70px] h-[70px] flex items-center justify-center" }, Ct = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "image-slot" }, [
  /* @__PURE__ */ t("img", {
    class: "w-[70px] h-[70px]",
    src: R
  })
], -1)), kt = {
  key: 1,
  class: "w-[70px] h-[70px]",
  src: R,
  fit: "contain"
}, Et = { class: "ml-2 flex flex-col items-start" }, Vt = ["title"], Ft = {
  key: 0,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, Pt = { class: "mt-[16px] flex justify-end" }, Nt = /* @__PURE__ */ _e({
  __name: "goods",
  setup(_) {
    const I = De(), L = () => {
      const n = new Date(), e = new Date();
      e.setTime(e.getTime() - 3600 * 1e3 * 24 * 29);
      const l = (r) => {
        const m = r.getFullYear(), v = r.getMonth() + 1, f = r.getDate();
        return m + "/" + v + "/" + f;
      };
      return [l(e), l(n)];
    }, w = D([]);
    w.value = L();
    const j = [
      {
        text: "今天",
        value: new Date()
      },
      {
        text: "昨天",
        value: () => {
          const n = new Date(), e = new Date();
          return e.setTime(e.getTime() - 3600 * 1e3 * 24), [e, n];
        }
      },
      {
        text: "最近7天",
        value: () => {
          const n = new Date(), e = new Date();
          return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 7), [e, n];
        }
      },
      {
        text: "最近30天",
        value: () => {
          const n = new Date(), e = new Date();
          return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 29), [e, n];
        }
      },
      {
        text: "上月",
        value: () => {
          const n = new Date(), e = n.getFullYear(), l = n.getMonth(), r = new Date(e, l - 1, 1), m = new Date(e, l, 0);
          return [r, m];
        }
      },
      {
        text: "本月",
        value: () => {
          const n = new Date(), e = n.getFullYear(), l = n.getMonth(), r = new Date(e, l, 1), m = new Date();
          return [r, m];
        }
      },
      {
        text: "本年",
        value: () => {
          const e = new Date().getFullYear(), l = new Date(e, 0, 1), r = new Date();
          return [l, r];
        }
      }
    ], h = D([]), E = D([]), S = async () => {
      const n = w.value ? w.value.join("-") : "";
      h.value = await (await ke({ date: n })).data, E.value = await (await Ee({ date: n })).data, setTimeout(() => {
        G();
      }, 20);
    };
    S();
    const V = D(null), G = () => {
      const n = T([]), e = T([]);
      if (E.value.data.forEach((l) => {
        l.name == "goods_visit_member_count" ? (n.push({
          name: "商品访客数",
          type: "line",
          smooth: !0,
          data: l.data
        }), e.push("商品访客数")) : l.name == "access_count" ? (n.push({
          name: "浏览量",
          type: "line",
          smooth: !0,
          data: l.data
        }), e.push("浏览量")) : l.name == "cart_num" ? (n.push({
          name: "加购件数",
          type: "bar",
          data: l.data
        }), e.push("加购件数")) : l.name == "sale_num" ? (n.push({
          name: "下单件数",
          type: "bar",
          data: l.data
        }), e.push("下单件数")) : l.name == "pay_num" ? (n.push({
          name: "支付件数",
          type: "bar",
          data: l.data
        }), e.push("支付件数")) : l.name == "pay_money" ? (n.push({
          name: "支付金额",
          type: "bar",
          data: l.data
        }), e.push("支付金额")) : l.name == "refund_money" ? (n.push({
          name: "退款金额",
          type: "bar",
          data: l.data
        }), e.push("退款金额")) : l.name == "refund_num" && (n.push({
          name: "退款件数",
          type: "bar",
          data: l.data
        }), e.push("退款件数"));
      }), V.value !== null) {
        const l = we(V.value), r = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            }
          },
          color: ["#1890ff", "#00c050", "#F76A6C", "#43C5FF", "#ffab2b", "#b37feb", "#627DFE", "#11D0EA"],
          legend: {
            data: [],
            selected: {
              加购件数: !1,
              下单件数: !1,
              支付件数: !1,
              退款件数: !1
            }
          },
          xAxis: {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: 45
            },
            data: E.value.xAxis
          },
          yAxis: {
            type: "value"
          },
          grid: [{
            left: "3%",
            right: "3%",
            bottom: "40",
            containLabel: !0
          }],
          series: []
        };
        r.series = n, r.legend.data = e, l.setOption(r), l.resize({
          width: "auto"
        }), window.addEventListener("resize", () => {
          l.resize();
        });
      }
    }, F = T([]), z = T([]);
    (() => {
      Te().then((n) => {
        const e = n.data;
        if (e) {
          const l = [];
          l.push({
            value: "",
            label: "全部",
            children: []
          }), e.forEach((r) => {
            const m = [];
            r.child_list && (m.push({
              value: r.category_id,
              label: "全部"
            }), r.child_list.forEach((v) => {
              m.push({
                value: v.category_id,
                label: v.category_name
              });
            })), l.push({
              value: r.category_id,
              label: r.category_name,
              children: m
            });
          }), F.splice(0, F.length, ...l);
        }
      }), Ve().then((n) => {
        if (n.data)
          for (const e in n.data)
            z.push({
              label: n.data[e],
              value: e
            });
      });
    })();
    const i = T({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        goods_name: "",
        date: [],
        category_ids: "",
        type: ""
      }
    }), y = (n = 1) => {
      i.loading = !0, i.page = n;
      const e = {
        page: i.page,
        limit: i.limit,
        goods_name: i.searchParam.goods_name,
        type: i.searchParam.type,
        date: i.searchParam.date ? i.searchParam.date.join("-") : "",
        category_ids: i.searchParam.category_ids ? [i.searchParam.category_ids] : []
      };
      Fe(e).then((l) => {
        i.data = l.data.data, i.total = l.data.total, i.loading = !1;
      });
    };
    y();
    const M = () => {
      y();
    }, Y = D(), U = (n) => {
      n && (n.resetFields(), y());
    }, $ = (n) => {
      const e = I.resolve({
        path: "/preview/wap",
        query: {
          page: `/addon/shop/pages/goods/detail?goods_id=${n.goods_id}`
        }
      });
      window.open(e.href);
    };
    return (n, e) => {
      const l = X, r = Z, m = ee, v = te, f = ae, x = se, A = oe, B = ne, O = le, q = ce, H = ie, J = de, g = re, K = pe, Q = ue, W = me;
      return b(), C("div", Pe, [
        a(A, {
          shadow: "never",
          class: "!border-none goods-stat"
        }, {
          header: c(() => [
            t("div", Ne, [
              t("span", je, u(s(o)("goodsOverview")), 1),
              t("div", Se, [
                a(v, { inline: !0 }, {
                  default: c(() => [
                    a(r, {
                      label: s(o)("timeFilter"),
                      prop: "date"
                    }, {
                      default: c(() => [
                        a(l, {
                          modelValue: w.value,
                          "onUpdate:modelValue": e[0] || (e[0] = (d) => w.value = d),
                          type: "daterange",
                          "value-format": "YYYY/MM/DD",
                          "start-placeholder": s(o)("startTime"),
                          "end-placeholder": s(o)("endTime"),
                          shortcuts: j
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(r, null, {
                      default: c(() => [
                        a(m, {
                          type: "primary",
                          onClick: e[1] || (e[1] = (d) => S())
                        }, {
                          default: c(() => [
                            P(u(s(o)("search")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          default: c(() => [
            t("div", ze, [
              t("div", Me, [
                Ye,
                a(x, {
                  value: h.value.access_num
                }, {
                  title: c(() => [
                    t("div", Ae, [
                      t("span", Re, u(s(o)("goodsAccessNum")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("goodsAccessNumTip"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          Ie
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", Le, [
                Ge,
                a(x, {
                  value: h.value.goods_visit_member_count
                }, {
                  title: c(() => [
                    t("div", Ue, [
                      t("span", $e, u(s(o)("goodsVisitCount")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("goodsVisitCountTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          Be
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", Oe, [
                qe,
                a(x, {
                  value: h.value.cart_num
                }, {
                  title: c(() => [
                    t("div", He, [
                      t("span", Je, u(s(o)("cartNum")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("cartNumTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          Ke
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", Qe, [
                We,
                a(x, {
                  value: h.value.sale_num
                }, {
                  title: c(() => [
                    t("div", Xe, [
                      t("span", Ze, u(s(o)("saleNum")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("saleNumTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          et
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", tt, [
                at,
                a(x, {
                  value: h.value.pay_num
                }, {
                  title: c(() => [
                    t("div", st, [
                      t("span", ot, u(s(o)("payNum")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("payNumTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          nt
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", lt, [
                ct,
                a(x, {
                  value: h.value.pay_money,
                  class: "flex-1",
                  precision: "2"
                }, {
                  title: c(() => [
                    t("div", it, [
                      t("span", dt, u(s(o)("payMoney")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("payMoneyTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          rt
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", pt, [
                ut,
                a(x, {
                  value: h.value.refund_money,
                  class: "flex-1",
                  precision: "2"
                }, {
                  title: c(() => [
                    t("div", mt, [
                      t("span", _t, u(s(o)("refundMoney")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("refundMoneyTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          ft
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              t("div", ht, [
                xt,
                a(x, {
                  value: h.value.refund_num
                }, {
                  title: c(() => [
                    t("div", gt, [
                      t("span", vt, u(s(o)("refundNum")), 1),
                      a(f, {
                        class: "box-item",
                        effect: "light",
                        content: s(o)("refundNumTips"),
                        placement: "top"
                      }, {
                        default: c(() => [
                          bt
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }),
        t("div", yt, [
          t("div", {
            ref_key: "incomeChartRef",
            ref: V,
            class: "h-[400px] w-full pt-[30px]"
          }, null, 512)
        ]),
        a(A, {
          shadow: "never",
          class: "!border-none goods-stat mt-[20px]"
        }, {
          header: c(() => [
            t("div", null, [
              t("div", wt, u(s(o)("goodsRank")), 1),
              a(v, {
                inline: !0,
                model: i.searchParam,
                ref_key: "searchFormRef",
                ref: Y
              }, {
                default: c(() => [
                  a(r, {
                    label: s(o)("goodsName"),
                    prop: "goods_name"
                  }, {
                    default: c(() => [
                      a(B, {
                        modelValue: i.searchParam.goods_name,
                        "onUpdate:modelValue": e[2] || (e[2] = (d) => i.searchParam.goods_name = d),
                        modelModifiers: { trim: !0 },
                        placeholder: s(o)("goodsNamePlaceholder"),
                        maxlength: "60"
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(r, {
                    label: s(o)("goodsCategory"),
                    prop: "category_ids"
                  }, {
                    default: c(() => [
                      a(O, {
                        modelValue: i.searchParam.category_ids,
                        "onUpdate:modelValue": e[3] || (e[3] = (d) => i.searchParam.category_ids = d),
                        options: F,
                        placeholder: s(o)("all"),
                        clearable: "",
                        props: { value: "value", label: "label", emitPath: !1 },
                        onChange: M
                      }, null, 8, ["modelValue", "options", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(r, {
                    label: s(o)("totalType"),
                    prop: "type"
                  }, {
                    default: c(() => [
                      a(H, {
                        modelValue: i.searchParam.type,
                        "onUpdate:modelValue": e[4] || (e[4] = (d) => i.searchParam.type = d),
                        placeholder: s(o)("totalTypePlaceholder"),
                        clearable: "",
                        onChange: M
                      }, {
                        default: c(() => [
                          (b(!0), C(fe, null, he(z, (d) => (b(), N(q, {
                            key: d.value,
                            label: d.label,
                            value: d.value
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(r, {
                    label: s(o)("timeFilter"),
                    prop: "date"
                  }, {
                    default: c(() => [
                      a(l, {
                        modelValue: i.searchParam.date,
                        "onUpdate:modelValue": e[5] || (e[5] = (d) => i.searchParam.date = d),
                        type: "daterange",
                        "value-format": "YYYY/MM/DD",
                        "start-placeholder": s(o)("startTime"),
                        "end-placeholder": s(o)("endTime"),
                        shortcuts: j
                      }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(r, null, {
                    default: c(() => [
                      a(m, {
                        type: "primary",
                        onClick: e[6] || (e[6] = (d) => y())
                      }, {
                        default: c(() => [
                          P(u(s(o)("search")), 1)
                        ]),
                        _: 1
                      }),
                      a(m, {
                        onClick: e[7] || (e[7] = (d) => U(Y.value))
                      }, {
                        default: c(() => [
                          P(u(s(o)("reset")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ])
          ]),
          default: c(() => [
            t("div", null, [
              xe((b(), N(K, {
                data: i.data,
                size: "large",
                ref: "goodsListTableRef"
              }, {
                empty: c(() => [
                  t("span", null, u(i.loading ? "" : s(o)("emptyData")), 1)
                ]),
                default: c(() => [
                  a(g, {
                    label: s(o)("goodsInfo"),
                    "min-width": "300"
                  }, {
                    default: c(({ row: d }) => [
                      t("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: (St) => $(d)
                      }, [
                        t("div", Tt, [
                          d.goods_cover_thumb_small ? (b(), N(J, {
                            key: 0,
                            class: "w-[70px] h-[70px]",
                            src: s(ye)(d.goods_cover_thumb_small),
                            fit: "contain"
                          }, {
                            error: c(() => [
                              Ct
                            ]),
                            _: 2
                          }, 1032, ["src"])) : (b(), C("img", kt))
                        ]),
                        t("div", Et, [
                          t("span", {
                            title: d.goods_name,
                            class: "multi-hidden"
                          }, u(d.goods_name), 9, Vt),
                          d.is_gift == 1 ? (b(), C("span", Ft, "赠品")) : ge("", !0)
                        ])
                      ], 8, Dt)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  a(g, {
                    prop: "access_num",
                    label: s(o)("accessNum"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "goods_visit_member_count",
                    label: s(o)("visitCount"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "cart_num",
                    label: s(o)("cartNumber"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "sale_num",
                    label: s(o)("saleNumber"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "pay_num",
                    label: s(o)("payNum"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "pay_money",
                    label: s(o)("payTotal"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  a(g, {
                    prop: "collect_num",
                    label: s(o)("collectNum"),
                    "min-width": "100"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [W, i.loading]
              ]),
              t("div", Pt, [
                a(Q, {
                  "current-page": i.page,
                  "onUpdate:current-page": e[8] || (e[8] = (d) => i.page = d),
                  "page-size": i.limit,
                  "onUpdate:page-size": e[9] || (e[9] = (d) => i.limit = d),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: i.total,
                  onSizeChange: e[10] || (e[10] = (d) => y()),
                  onCurrentChange: y
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Bt = /* @__PURE__ */ Ce(Nt, [["__scopeId", "data-v-5d404826"]]);
export {
  Bt as default
};
