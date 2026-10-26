import { ElTooltip as E, ElTabPane as Y, ElDatePicker as A, ElButton as I, ElDialog as T, ElTabs as j } from "element-plus/es";
import { defineComponent as M, ref as C, reactive as N, onMounted as S, openBlock as l, createElementBlock as i, createVNode as c, withCtx as s, createTextVNode as k, createElementVNode as e, Fragment as _, renderList as p, normalizeClass as u, nextTick as U, pushScopeId as P, popScopeId as R } from "vue";
import { i as L } from "./index-8da315d4.js";
import { _ as O } from "./_plugin-vue_export-helper-dad06003.js";
const o = (w) => (P("data-v-a4ffbda7"), w = w(), R(), w), q = { class: "min-w-[100px] min-h-[650px] p-[15px] bg-white tab-index" }, G = { class: "flex w-full justify-between flex-wrap" }, J = ["onClick"], K = { class: "flex items-center" }, Q = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "预计收入", -1)), W = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "ml-[5px] text-[14px]" }, "(元)", -1)), X = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), Z = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0.00", -1)), ee = ["onClick"], te = { class: "flex items-center" }, oe = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "访客人数", -1)), se = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), ne = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0", -1)), le = { class: "flex w-full justify-between flex-wrap" }, ie = ["onClick"], ce = { class: "flex items-center" }, de = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "预计收入", -1)), ae = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "ml-[5px] text-[14px]" }, "(元)", -1)), re = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), xe = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0.00", -1)), _e = ["onClick"], pe = { class: "flex items-center" }, ue = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "访客人数", -1)), fe = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), ve = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0", -1)), he = { class: "flex w-full justify-between flex-wrap" }, be = ["onClick"], me = { class: "flex items-center" }, Ce = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "预计收入", -1)), we = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "ml-[5px] text-[14px]" }, "(元)", -1)), ge = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), ke = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0.00", -1)), Be = ["onClick"], Ve = { class: "flex items-center" }, Fe = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "访客人数", -1)), ye = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), ze = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0", -1)), He = { class: "flex w-full justify-between flex-wrap" }, $e = ["onClick"], De = { class: "flex items-center" }, Ee = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "预计收入", -1)), Ye = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "ml-[5px] text-[14px]" }, "(元)", -1)), Ae = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), Ie = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0.00", -1)), Te = ["onClick"], je = { class: "flex items-center" }, Me = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "访客人数", -1)), Ne = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), Se = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0", -1)), Ue = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px] color-[#333] h-[42px] leading-[42px]" }, "自定义时间选择", -1)), Pe = { class: "flex items-center" }, Re = /* @__PURE__ */ o(() => /* @__PURE__ */ e("span", { class: "mr-[10px]" }, "选择时间:", -1)), Le = { class: "dialog-footer" }, Oe = { class: "flex w-full justify-between flex-wrap" }, qe = ["onClick"], Ge = { class: "flex items-center" }, Je = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "预计收入", -1)), Ke = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "ml-[5px] text-[14px]" }, "(元)", -1)), Qe = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), We = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0.00", -1)), Xe = ["onClick"], Ze = { class: "flex items-center" }, et = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[14px]" }, "访客人数", -1)), tt = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "nc-iconfont nc-icon-bangzhuV6xx wenHao text-[#666] ml-[12px]" }, null, -1)), ot = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "text-[25px] font-bold" }, "0", -1)), st = /* @__PURE__ */ M({
  __name: "index",
  setup(w) {
    const B = C("first"), m = C(!1), V = C(""), z = (h, d) => {
      h.props.name == "fifth" && (m.value = !0), U(() => {
        F();
      });
    }, r = N([
      { content: "盒子 1", id: 1 },
      { content: "盒子 2", id: 2 },
      { content: "盒子 3", id: 3 },
      { content: "盒子 1", id: 4 },
      { content: "盒子 2", id: 5 },
      { content: "盒子 3", id: 6 },
      { content: "盒子 3", id: 7 }
    ]), n = C(-1), x = (h) => {
      n.value = h.id;
    }, g = C(null), F = () => {
      if (g.value !== null) {
        const h = L(g.value), b = {
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["预计收入"]
          },
          xAxis: {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [{
            name: "预计收入",
            type: "line",
            data: [0, -20, -50, 134, 90, 230, 210]
          }]
        };
        h.setOption(b), h.resize({
          width: "auto"
        });
      }
    };
    return S(() => {
      F();
    }), (h, d) => {
      const a = E, b = Y, H = A, y = I, $ = T, D = j;
      return l(), i("div", q, [
        c(D, {
          modelValue: B.value,
          "onUpdate:modelValue": d[4] || (d[4] = (t) => B.value = t),
          class: "demo-tabs",
          onTabClick: z,
          type: "card"
        }, {
          default: s(() => [
            c(b, { name: "first" }, {
              label: s(() => [
                k("今日")
              ]),
              default: s(() => [
                e("div", G, [
                  (l(!0), i(_, null, p(r.slice(0, 3), (t, f) => (l(), i("div", {
                    class: u(["w-[32%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", K, [
                      Q,
                      W,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，店铺收入金额减去支出的金额",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          X
                        ]),
                        _: 1
                      })
                    ]),
                    Z
                  ], 10, J))), 256)),
                  (l(!0), i(_, null, p(r.slice(3), (t, f) => (l(), i("div", {
                    class: u(["w-[23%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] mt-[20px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", te, [
                      oe,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，站点访问人数",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          se
                        ]),
                        _: 1
                      })
                    ]),
                    ne
                  ], 10, ee))), 256))
                ])
              ]),
              _: 1
            }),
            c(b, {
              label: "昨日",
              name: "second"
            }, {
              default: s(() => [
                e("div", le, [
                  (l(!0), i(_, null, p(r.slice(0, 3), (t, f) => (l(), i("div", {
                    class: u(["w-[32%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", ce, [
                      de,
                      ae,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，店铺收入金额减去支出的金额",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          re
                        ]),
                        _: 1
                      })
                    ]),
                    xe
                  ], 10, ie))), 256)),
                  (l(!0), i(_, null, p(r.slice(3), (t, f) => (l(), i("div", {
                    class: u(["w-[23%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] mt-[20px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", pe, [
                      ue,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，站点访问人数",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          fe
                        ]),
                        _: 1
                      })
                    ]),
                    ve
                  ], 10, _e))), 256))
                ])
              ]),
              _: 1
            }),
            c(b, {
              label: "7日内",
              name: "third"
            }, {
              default: s(() => [
                e("div", he, [
                  (l(!0), i(_, null, p(r.slice(0, 3), (t, f) => (l(), i("div", {
                    class: u(["w-[32%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", me, [
                      Ce,
                      we,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，店铺收入金额减去支出的金额",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          ge
                        ]),
                        _: 1
                      })
                    ]),
                    ke
                  ], 10, be))), 256)),
                  (l(!0), i(_, null, p(r.slice(3), (t, f) => (l(), i("div", {
                    class: u(["w-[23%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] mt-[20px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", Ve, [
                      Fe,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，站点访问人数",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          ye
                        ]),
                        _: 1
                      })
                    ]),
                    ze
                  ], 10, Be))), 256))
                ])
              ]),
              _: 1
            }),
            c(b, {
              label: "30日内",
              name: "fourth"
            }, {
              default: s(() => [
                e("div", He, [
                  (l(!0), i(_, null, p(r.slice(0, 3), (t, f) => (l(), i("div", {
                    class: u(["w-[32%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", De, [
                      Ee,
                      Ye,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，店铺收入金额减去支出的金额",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          Ae
                        ]),
                        _: 1
                      })
                    ]),
                    Ie
                  ], 10, $e))), 256)),
                  (l(!0), i(_, null, p(r.slice(3), (t, f) => (l(), i("div", {
                    class: u(["w-[23%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] mt-[20px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", je, [
                      Me,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，站点访问人数",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          Ne
                        ]),
                        _: 1
                      })
                    ]),
                    Se
                  ], 10, Te))), 256))
                ])
              ]),
              _: 1
            }),
            c(b, {
              label: "自定义",
              name: "fifth"
            }, {
              default: s(() => [
                c($, {
                  modelValue: m.value,
                  "onUpdate:modelValue": d[3] || (d[3] = (t) => m.value = t),
                  width: "520",
                  draggable: "true"
                }, {
                  header: s(() => [
                    Ue
                  ]),
                  footer: s(() => [
                    e("div", Le, [
                      c(y, {
                        type: "primary",
                        onClick: d[1] || (d[1] = (t) => m.value = !1)
                      }, {
                        default: s(() => [
                          k("确认")
                        ]),
                        _: 1
                      }),
                      c(y, {
                        onClick: d[2] || (d[2] = (t) => m.value = !1)
                      }, {
                        default: s(() => [
                          k("取消")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: s(() => [
                    e("div", Pe, [
                      Re,
                      c(H, {
                        modelValue: V.value,
                        "onUpdate:modelValue": d[0] || (d[0] = (t) => V.value = t),
                        class: "w-[100px]",
                        type: "datetimerange",
                        "start-placeholder": "开始时间",
                        "end-placeholder": "结束时间",
                        format: "YYYY-MM-DD HH:mm:ss",
                        "date-format": "YYYY/MM/DD ddd",
                        "time-format": "A hh:mm:ss"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                e("div", Oe, [
                  (l(!0), i(_, null, p(r.slice(0, 3), (t, f) => (l(), i("div", {
                    class: u(["w-[32%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", Ge, [
                      Je,
                      Ke,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，店铺收入金额减去支出的金额",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          Qe
                        ]),
                        _: 1
                      })
                    ]),
                    We
                  ], 10, qe))), 256)),
                  (l(!0), i(_, null, p(r.slice(3), (t, f) => (l(), i("div", {
                    class: u(["w-[23%] border-[#eee] border-solid border-[1px] h-[90px] p-[15px] mt-[20px] cursor-pointer", { "border-[#105CFB]": n.value == t.id, "text-[#105CFB]": n.value == t.id }]),
                    onClick: (v) => x(t)
                  }, [
                    e("div", Ze, [
                      et,
                      c(a, {
                        class: "box-item",
                        effect: "light",
                        content: "统计时间内，站点访问人数",
                        placement: "top-start"
                      }, {
                        default: s(() => [
                          tt
                        ]),
                        _: 1
                      })
                    ]),
                    ot
                  ], 10, Xe))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        e("div", {
          ref_key: "incomeChartRef",
          ref: g,
          class: "h-[400px] mt-[60px] ml-[-90px]"
        }, null, 512)
      ]);
    };
  }
});
const dt = /* @__PURE__ */ O(st, [["__scopeId", "data-v-a4ffbda7"]]);
export {
  dt as default
};
