import { defineComponent as P, reactive as b, watch as z, resolveComponent as s, resolveDirective as N, openBlock as v, createElementBlock as U, createElementVNode as d, createVNode as a, withCtx as l, withKeys as E, createTextVNode as m, withDirectives as M, createBlock as Y, toDisplayString as r, normalizeClass as B, pushScopeId as O, popScopeId as H } from "vue";
import K from "./index-49fea3c5.js";
import { dP as j, a as F } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const G = (g) => (O("data-v-a8645f26"), g = g(), H(), g), J = { class: "log-list" }, q = { class: "table-search-wrap table-search-wrap--panel log-list__search" }, A = { class: "table-panel log-list__panel" }, Q = { class: "log-list__table" }, R = { class: "px-6 py-2" }, W = /* @__PURE__ */ G(() => /* @__PURE__ */ d("div", { class: "text-xs text-gray-400 mb-1" }, "请求参数（已脱敏）", -1)), X = { class: "text-xs bg-gray-50 p-3 rounded overflow-auto" }, Z = { class: "font-mono text-xs" }, ee = /* @__PURE__ */ P({
  __name: "log-list",
  props: {
    appId: null,
    autoLoad: { type: Boolean }
  },
  setup(g, { expose: w }) {
    const f = g, o = b({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: []
    }), i = b({
      api_key: "",
      code: "",
      create_time: []
    }), x = (n) => {
      if (!n)
        return "--";
      if (typeof n == "string")
        return n.slice(0, 19);
      const t = new Date(n * 1e3);
      if (Number.isNaN(t.getTime()))
        return "--";
      const _ = (u) => String(u).padStart(2, "0");
      return `${t.getFullYear()}-${_(t.getMonth() + 1)}-${_(t.getDate())} ${_(t.getHours())}:${_(t.getMinutes())}:${_(t.getSeconds())}`;
    }, k = (n) => {
      if (!n || Object.keys(n).length === 0)
        return "无";
      try {
        return JSON.stringify(n, null, 2);
      } catch (t) {
        return console.error(t), String(n);
      }
    }, S = (n) => ({
      GET: "success",
      POST: "primary",
      PUT: "warning",
      DELETE: "danger"
    })[String(n).toUpperCase()] || "info", p = (n) => {
      n && (o.page = n), o.loading = !0, j({
        page: o.page,
        limit: o.limit,
        app_id: f.appId || "",
        api_key: i.api_key,
        code: i.code,
        create_time: i.create_time
      }).then((t) => {
        o.loading = !1, o.data = t.data.data || [], o.total = t.data.total || 0;
      }).catch(() => {
        o.loading = !1;
      });
    }, V = () => {
      i.api_key = "", i.code = "", i.create_time = [], p(1);
    };
    return z(() => f.appId, () => p(1)), f.autoLoad !== !1 && p(), w({ refresh: () => p(1) }), (n, t) => {
      const _ = s("el-date-picker"), u = s("el-form-item"), C = s("el-input"), h = s("el-option"), T = s("el-select"), y = s("el-button"), D = s("el-form"), c = s("el-table-column"), $ = s("el-tag"), I = s("el-table"), L = N("loading");
      return v(), U("div", J, [
        d("div", q, [
          a(D, {
            inline: !0,
            model: i
          }, {
            default: l(() => [
              a(u, { label: "时间范围" }, {
                default: l(() => [
                  a(_, {
                    modelValue: i.create_time,
                    "onUpdate:modelValue": t[0] || (t[0] = (e) => i.create_time = e),
                    type: "datetimerange",
                    "value-format": "YYYY-MM-DD HH:mm:ss",
                    "range-separator": "至",
                    "start-placeholder": "开始时间",
                    "end-placeholder": "结束时间"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              a(u, { label: "接口" }, {
                default: l(() => [
                  a(C, {
                    modelValue: i.api_key,
                    "onUpdate:modelValue": t[1] || (t[1] = (e) => i.api_key = e),
                    modelModifiers: { trim: !0 },
                    class: "input-width",
                    placeholder: "接口标识",
                    clearable: "",
                    onKeyup: t[2] || (t[2] = E((e) => p(1), ["enter"]))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              a(u, { label: "响应码" }, {
                default: l(() => [
                  a(T, {
                    modelValue: i.code,
                    "onUpdate:modelValue": t[3] || (t[3] = (e) => i.code = e),
                    class: "input-width",
                    placeholder: "全部",
                    clearable: ""
                  }, {
                    default: l(() => [
                      a(h, {
                        label: "成功",
                        value: 1
                      }),
                      a(h, {
                        label: "失败",
                        value: 0
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              a(u, null, {
                default: l(() => [
                  a(y, {
                    type: "primary",
                    onClick: t[4] || (t[4] = (e) => p(1))
                  }, {
                    default: l(() => [
                      m("搜索")
                    ]),
                    _: 1
                  }),
                  a(y, { onClick: V }, {
                    default: l(() => [
                      m("重置")
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
        d("div", A, [
          d("div", Q, [
            M((v(), Y(I, {
              height: "100%",
              data: o.data,
              size: "large"
            }, {
              empty: l(() => [
                d("span", null, r(o.loading ? "" : "暂无调用记录"), 1)
              ]),
              default: l(() => [
                a(c, { type: "expand" }, {
                  default: l(({ row: e }) => [
                    d("div", R, [
                      W,
                      d("pre", X, r(k(e.params)), 1)
                    ])
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "时间",
                  width: "170"
                }, {
                  default: l(({ row: e }) => [
                    m(r(x(e.create_time)), 1)
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "账号",
                  "min-width": "160",
                  "show-overflow-tooltip": ""
                }, {
                  default: l(({ row: e }) => [
                    d("span", Z, r(e.app_key || "--"), 1)
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "接口",
                  "min-width": "200",
                  "show-overflow-tooltip": ""
                }, {
                  default: l(({ row: e }) => [
                    m(r(e.api_key || e.url), 1)
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "方法",
                  width: "90",
                  align: "center"
                }, {
                  default: l(({ row: e }) => [
                    a($, {
                      size: "small",
                      type: S(e.method)
                    }, {
                      default: l(() => [
                        m(r(e.method), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "耗时(ms)",
                  width: "100",
                  align: "center"
                }, {
                  default: l(({ row: e }) => [
                    m(r(e.cost_ms), 1)
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "响应码",
                  width: "100",
                  align: "center"
                }, {
                  default: l(({ row: e }) => [
                    d("span", {
                      class: B(e.code === 1 ? "text-green-600" : "text-red-500")
                    }, r(e.code), 3)
                  ]),
                  _: 1
                }),
                a(c, {
                  label: "来源 IP",
                  width: "140"
                }, {
                  default: l(({ row: e }) => [
                    m(r(e.ip), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [L, o.loading]
            ])
          ]),
          a(K, {
            "current-page": o.page,
            "onUpdate:current-page": t[5] || (t[5] = (e) => o.page = e),
            "page-size": o.limit,
            "onUpdate:page-size": t[6] || (t[6] = (e) => o.limit = e),
            total: o.total,
            onSizeChange: t[7] || (t[7] = (e) => p()),
            onCurrentChange: p
          }, null, 8, ["current-page", "page-size", "total"])
        ])
      ]);
    };
  }
});
const pe = /* @__PURE__ */ F(ee, [["__scopeId", "data-v-a8645f26"]]);
export {
  pe as default
};
