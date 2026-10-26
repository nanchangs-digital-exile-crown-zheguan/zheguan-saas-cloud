import { defineComponent as pe, ref as b, computed as C, reactive as _e, onMounted as me, resolveComponent as k, openBlock as d, createElementBlock as r, createElementVNode as t, createVNode as l, withCtx as c, unref as _, Fragment as S, renderList as B, toDisplayString as i, normalizeClass as ve, createTextVNode as h, createBlock as T, createCommentVNode as V, pushScopeId as he, popScopeId as fe } from "vue";
import Q from "axios";
import { ElMessage as I } from "element-plus";
import { Files as ye, Pointer as ge, VideoPlay as ke, Refresh as be } from "@element-plus/icons-vue";
import { dQ as xe, dR as we, dS as Ve, dT as Ce, dU as Se, a as Te } from "./core-shared-86a0da16.js";
import "vue-i18n";
import "pinia";
import "vue-router";
const x = (U) => (he("data-v-110bc147"), U = U(), fe(), U), Ie = { class: "main-container doc-page" }, Ue = { class: "doc-tabs" }, ze = { class: "doc-body" }, Ae = { class: "doc-aside" }, Le = { class: "doc-aside__head" }, $e = { class: "doc-aside__body" }, De = {
  key: 0,
  class: "doc-empty doc-empty--sm"
}, Oe = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "doc-empty__text" }, "暂无接口", -1)), Be = { class: "doc-group__title" }, Ne = { class: "text-xs text-gray-400" }, Pe = ["onClick"], Ee = { class: "doc-api__name" }, Me = { class: "doc-main" }, qe = {
  key: 0,
  class: "doc-empty"
}, je = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "doc-empty__text" }, "请选择左侧接口查看详情", -1)), Ke = { class: "doc-detail__head" }, Re = { class: "flex items-center justify-between gap-2 flex-wrap" }, Fe = { class: "flex items-center gap-2 flex-wrap" }, Je = { class: "text-lg font-medium" }, Ze = { class: "text-sm text-gray-500 mt-2" }, He = { class: "doc-path mt-3" }, Qe = { class: "font-mono break-all" }, Xe = { class: "flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-gray-500" }, Ye = { key: 0 }, Ge = { class: "doc-section" }, We = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "doc-section__title" }, "请求参数", -1)), et = {
  key: 1,
  class: "text-gray-400"
}, tt = {
  key: 1,
  class: "text-sm text-gray-400"
}, at = { class: "doc-section" }, st = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "doc-section__title" }, "返回示例", -1)), ot = {
  key: 0,
  class: "doc-code"
}, lt = {
  key: 1,
  class: "text-sm text-gray-400"
}, nt = { class: "doc-debug" }, dt = { class: "doc-debug__api" }, ct = { class: "flex items-center gap-2 flex-wrap" }, it = { class: "font-medium" }, ut = { class: "doc-path mt-2" }, rt = { class: "font-mono break-all" }, pt = { class: "text-xs text-gray-400 mb-3" }, _t = { class: "flex flex-wrap gap-3 items-end mb-3" }, mt = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "text-xs text-gray-500 mb-1" }, "接口地址前缀", -1)), vt = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "text-xs text-gray-500 mb-1" }, "开放账号", -1)), ht = { class: "flex items-center gap-2" }, ft = {
  key: 0,
  class: "mb-3"
}, yt = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "text-xs text-gray-500 mb-1" }, "访问令牌（获得后可手工修改）", -1)), gt = {
  key: 1,
  class: "mb-3"
}, kt = /* @__PURE__ */ x(() => /* @__PURE__ */ t("div", { class: "text-xs text-gray-500 mb-1" }, "参数值", -1)), bt = { class: "flex flex-col gap-2" }, xt = { class: "doc-param-name" }, wt = {
  key: 0,
  class: "text-red-500"
}, Vt = {
  key: 2,
  class: "mt-4"
}, Ct = { class: "doc-section__title" }, St = /* @__PURE__ */ x(() => /* @__PURE__ */ t("span", null, "响应结果", -1)), Tt = { class: "text-xs font-normal text-gray-400" }, It = { class: "doc-code doc-code--response" }, Ut = /* @__PURE__ */ pe({
  __name: "doc",
  setup(U) {
    const X = {
      admin: "平台端(开放)",
      site: "站点端(开放)"
    }, Y = (a) => X[a] || a || "-", z = b("admin"), N = b(""), A = b([]), o = b(null), P = b([]), E = b(!1), G = C(() => o.value ? `${o.value.name} - 在线调试` : "在线调试"), W = () => {
      E.value = !0;
    }, n = _e({
      base: "",
      appId: "",
      token: "",
      params: {}
    }), L = b(!1), M = b(!1), $ = b(!1), g = b(null), ee = C(() => (P.value || []).filter((a) => a.app_type === z.value)), R = C(() => {
      const a = N.value.toLowerCase();
      return a ? A.value.map((e) => {
        const m = (e.items || []).filter(
          (p) => (p.name || "").toLowerCase().includes(a) || (p.path || "").toLowerCase().includes(a) || (p.api_key || "").toLowerCase().includes(a)
        );
        return { ...e, items: m };
      }).filter((e) => e.items.length > 0) : A.value;
    }), D = C(() => {
      var e;
      const a = ((e = o.value) == null ? void 0 : e.params) || {};
      return Object.keys(a).map((m) => {
        const p = a[m] || {};
        return {
          name: m,
          type: p.type || "string",
          required: !!p.required,
          desc: p.name && p.name !== m ? p.name : ""
        };
      });
    }), te = C(() => {
      var e;
      const a = (e = o.value) == null ? void 0 : e.response;
      return a ? Array.isArray(a) ? a.length > 0 : Object.keys(a).length > 0 : !1;
    }), ae = C(() => {
      var a;
      try {
        return JSON.stringify(((a = o.value) == null ? void 0 : a.response) ?? {}, null, 2);
      } catch {
        return "";
      }
    }), F = C(() => o.value ? `${q(n.base)}/${o.value.path}` : ""), q = (a) => (a || "/openapi").replace(/\/+$/, ""), j = (a) => {
      const e = (a || "get").toLowerCase();
      return e === "get" ? "success" : e === "post" ? "primary" : e === "put" ? "warning" : e === "delete" ? "danger" : "info";
    }, K = (a) => {
      var e;
      a && ((e = navigator.clipboard) == null || e.writeText(a).then(() => I.success("已复制到剪贴板")));
    }, J = () => {
      xe(z.value).then((a) => {
        A.value = a.data || [], se();
      });
    }, se = () => {
      var e, m;
      const a = (m = (e = A.value[0]) == null ? void 0 : e.items) == null ? void 0 : m[0];
      a ? H(a.api_key) : (o.value = null, g.value = null);
    }, oe = () => {
      o.value = null, g.value = null, n.appId = "", n.token = "", J();
    }, Z = () => {
      M.value = !0, we().then((a) => {
        P.value = a.data || [], n.appId && !P.value.some((e) => e.id === n.appId) && (n.appId = "", n.token = "");
      }).finally(() => {
        M.value = !1;
      });
    }, le = () => {
      Ve().then((a) => {
        var e;
        n.base = ((e = a.data) == null ? void 0 : e.openapi_base) || "/openapi";
      });
    }, H = (a) => {
      Ce(a).then((e) => {
        o.value = e.data || null, g.value = null, n.params = {};
      });
    }, ne = () => {
      if (!n.appId) {
        I.warning("请先选择开放账号");
        return;
      }
      L.value = !0, Se(n.appId).then((a) => {
        const { app_key: e, app_secret: m } = a.data || {};
        return Q.post(
          `${q(n.base)}/v1/auth/token`,
          { app_key: e, app_secret: m },
          { timeout: 3e4, validateStatus: () => !0 }
        ).then((p) => {
          var y;
          L.value = !1;
          const f = p.data || {};
          f.code === 1 && ((y = f.data) != null && y.access_token) ? (n.token = f.data.access_token, I.success("获取令牌成功")) : I.error(f.msg || "获取令牌失败");
        });
      }).catch((a) => {
        L.value = !1, I.error((a == null ? void 0 : a.msg) || "获取令牌失败");
      });
    }, de = () => {
      if (!o.value)
        return;
      $.value = !0, g.value = null;
      const a = Date.now(), e = {}, m = (o.value.path || "").replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, (u, v) => (e[v] = !0, encodeURIComponent(n.params[v] ?? ""))), p = {};
      Object.keys(n.params).forEach((u) => {
        const v = n.params[u];
        !e[u] && v !== "" && v !== void 0 && v !== null && (p[u] = v);
      });
      const f = (o.value.method || "get").toLowerCase(), y = {
        url: `${q(n.base)}/${m}`,
        method: f,
        timeout: 3e4,
        validateStatus: () => !0,
        headers: {}
      };
      o.value.need_auth && n.token && (y.headers.Authorization = `Bearer ${n.token}`, y.headers["X-Openapi-Key"] = n.token), f === "get" ? y.params = p : y.data = p, Q.request(y).then((u) => {
        $.value = !1, g.value = {
          ok: u.status >= 200 && u.status < 300,
          status: u.status,
          cost: Date.now() - a,
          body: JSON.stringify(u.data, null, 2)
        };
      }).catch((u) => {
        $.value = !1, g.value = {
          ok: !1,
          status: 0,
          cost: Date.now() - a,
          body: (u == null ? void 0 : u.message) || "请求失败，请检查接口地址前缀是否正确"
        };
      });
    };
    return me(() => {
      J(), Z(), le();
    }), (a, e) => {
      const m = k("el-tab-pane"), p = k("el-tabs"), f = k("el-input"), y = k("el-icon"), u = k("el-tag"), v = k("el-button"), O = k("el-table-column"), ce = k("el-table"), ie = k("el-option"), ue = k("el-select"), re = k("el-drawer");
      return d(), r("div", Ie, [
        t("div", Ue, [
          l(p, {
            modelValue: z.value,
            "onUpdate:modelValue": e[0] || (e[0] = (s) => z.value = s),
            onTabChange: oe
          }, {
            default: c(() => [
              l(m, {
                label: "平台端(开放)",
                name: "admin"
              }),
              l(m, {
                label: "站点端(开放)",
                name: "site"
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        t("div", ze, [
          t("aside", Ae, [
            t("div", Le, [
              l(f, {
                modelValue: N.value,
                "onUpdate:modelValue": e[1] || (e[1] = (s) => N.value = s),
                modelModifiers: { trim: !0 },
                placeholder: "搜索接口名称 / 路径",
                clearable: "",
                "prefix-icon": "Search"
              }, null, 8, ["modelValue"])
            ]),
            t("div", $e, [
              _(R).length ? (d(!0), r(S, { key: 1 }, B(_(R), (s) => (d(), r("div", {
                key: s.group_key,
                class: "doc-group"
              }, [
                t("div", Be, [
                  t("span", null, i(s.group_name), 1),
                  t("span", Ne, i(s.items.length), 1)
                ]),
                (d(!0), r(S, null, B(s.items, (w) => (d(), r("div", {
                  key: w.api_key,
                  class: ve(["doc-api", { "is-active": o.value && o.value.api_key === w.api_key }]),
                  onClick: (zt) => H(w.api_key)
                }, [
                  l(u, {
                    size: "small",
                    type: j(w.method),
                    class: "shrink-0"
                  }, {
                    default: c(() => [
                      h(i((w.method || "get").toUpperCase()), 1)
                    ]),
                    _: 2
                  }, 1032, ["type"]),
                  t("span", Ee, i(w.name), 1)
                ], 10, Pe))), 128))
              ]))), 128)) : (d(), r("div", De, [
                l(y, { class: "doc-empty__icon" }, {
                  default: c(() => [
                    l(_(ye))
                  ]),
                  _: 1
                }),
                Oe
              ]))
            ])
          ]),
          t("section", Me, [
            o.value ? (d(), r(S, { key: 1 }, [
              t("div", Ke, [
                t("div", Re, [
                  t("div", Fe, [
                    l(u, {
                      type: j(o.value.method)
                    }, {
                      default: c(() => [
                        h(i((o.value.method || "get").toUpperCase()), 1)
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    t("span", Je, i(o.value.name), 1),
                    o.value.need_auth ? V("", !0) : (d(), T(u, {
                      key: 0,
                      size: "small",
                      type: "warning"
                    }, {
                      default: c(() => [
                        h("免鉴权")
                      ]),
                      _: 1
                    }))
                  ]),
                  l(v, {
                    type: "primary",
                    onClick: W
                  }, {
                    default: c(() => [
                      l(y, { class: "mr-1" }, {
                        default: c(() => [
                          l(_(ke))
                        ]),
                        _: 1
                      }),
                      h(" 在线调试 ")
                    ]),
                    _: 1
                  })
                ]),
                t("div", Ze, i(o.value.desc || "暂无接口说明"), 1),
                t("div", He, [
                  t("span", Qe, i(o.value.path), 1),
                  l(v, {
                    link: "",
                    type: "primary",
                    onClick: e[2] || (e[2] = (s) => K(_(F)))
                  }, {
                    default: c(() => [
                      h("复制地址")
                    ]),
                    _: 1
                  })
                ]),
                t("div", Xe, [
                  t("span", null, "所属模块：" + i(o.value.group_name), 1),
                  t("span", null, "接口标识：" + i(o.value.api_key), 1),
                  o.value.addon ? (d(), r("span", Ye, "所属插件：" + i(o.value.addon), 1)) : V("", !0),
                  t("span", null, "端类型：" + i(Y(o.value.app_type)), 1)
                ])
              ]),
              t("div", Ge, [
                We,
                _(D).length ? (d(), T(ce, {
                  key: 0,
                  data: _(D),
                  size: "small",
                  border: ""
                }, {
                  default: c(() => [
                    l(O, {
                      prop: "name",
                      label: "参数名",
                      "min-width": "150"
                    }),
                    l(O, {
                      prop: "type",
                      label: "类型",
                      width: "100"
                    }),
                    l(O, {
                      label: "必填",
                      width: "80",
                      align: "center"
                    }, {
                      default: c(({ row: s }) => [
                        s.required ? (d(), T(u, {
                          key: 0,
                          size: "small",
                          type: "danger"
                        }, {
                          default: c(() => [
                            h("是")
                          ]),
                          _: 1
                        })) : (d(), r("span", et, "否"))
                      ]),
                      _: 1
                    }),
                    l(O, {
                      prop: "desc",
                      label: "说明",
                      "min-width": "180"
                    }, {
                      default: c(({ row: s }) => [
                        t("span", null, i(s.desc || s.name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])) : (d(), r("div", tt, "该接口无请求参数"))
              ]),
              t("div", at, [
                st,
                _(te) ? (d(), r("pre", ot, i(_(ae)), 1)) : (d(), r("div", lt, "暂无静态返回示例，可点击右上角「在线调试」查看真实响应"))
              ]),
              l(re, {
                modelValue: E.value,
                "onUpdate:modelValue": e[8] || (e[8] = (s) => E.value = s),
                title: _(G),
                size: "640px"
              }, {
                default: c(() => [
                  t("div", nt, [
                    t("div", dt, [
                      t("div", ct, [
                        l(u, {
                          type: j(o.value.method)
                        }, {
                          default: c(() => [
                            h(i((o.value.method || "get").toUpperCase()), 1)
                          ]),
                          _: 1
                        }, 8, ["type"]),
                        t("span", it, i(o.value.name), 1),
                        o.value.need_auth ? V("", !0) : (d(), T(u, {
                          key: 0,
                          size: "small",
                          type: "warning"
                        }, {
                          default: c(() => [
                            h("免鉴权")
                          ]),
                          _: 1
                        }))
                      ]),
                      t("div", ut, [
                        t("span", rt, i(o.value.path), 1),
                        l(v, {
                          link: "",
                          type: "primary",
                          onClick: e[3] || (e[3] = (s) => K(_(F)))
                        }, {
                          default: c(() => [
                            h("复制地址")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    t("div", pt, i(o.value.need_auth ? "由浏览器直接请求开放平台接口，需携带访问令牌（AK/SK 换取）" : "该接口免鉴权，无需访问令牌"), 1),
                    t("div", _t, [
                      t("div", null, [
                        mt,
                        l(f, {
                          modelValue: n.base,
                          "onUpdate:modelValue": e[4] || (e[4] = (s) => n.base = s),
                          modelModifiers: { trim: !0 },
                          class: "input-base",
                          placeholder: "/openapi"
                        }, null, 8, ["modelValue"])
                      ]),
                      o.value.need_auth ? (d(), r(S, { key: 0 }, [
                        t("div", null, [
                          vt,
                          t("div", ht, [
                            l(ue, {
                              modelValue: n.appId,
                              "onUpdate:modelValue": e[5] || (e[5] = (s) => n.appId = s),
                              placeholder: "选择开放账号",
                              class: "input-app",
                              clearable: ""
                            }, {
                              default: c(() => [
                                (d(!0), r(S, null, B(_(ee), (s) => (d(), T(ie, {
                                  key: s.id,
                                  label: s.site_id === 0 ? s.name + "（平台）" : s.name + "（站点 " + s.site_id + "）",
                                  value: s.id
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"]),
                            l(v, {
                              icon: _(be),
                              loading: M.value,
                              title: "刷新开放账号",
                              onClick: Z
                            }, null, 8, ["icon", "loading"])
                          ])
                        ]),
                        l(v, {
                          type: "primary",
                          loading: L.value,
                          onClick: ne
                        }, {
                          default: c(() => [
                            h("获取令牌")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ], 64)) : V("", !0)
                    ]),
                    o.value.need_auth ? (d(), r("div", ft, [
                      yt,
                      l(f, {
                        modelValue: n.token,
                        "onUpdate:modelValue": e[7] || (e[7] = (s) => n.token = s),
                        modelModifiers: { trim: !0 },
                        placeholder: "Bearer Token",
                        clearable: ""
                      }, {
                        append: c(() => [
                          l(v, {
                            onClick: e[6] || (e[6] = (s) => K(n.token))
                          }, {
                            default: c(() => [
                              h("复制")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])) : V("", !0),
                    _(D).length ? (d(), r("div", gt, [
                      kt,
                      t("div", bt, [
                        (d(!0), r(S, null, B(_(D), (s) => (d(), r("div", {
                          key: s.name,
                          class: "flex items-center gap-3"
                        }, [
                          t("span", xt, [
                            h(i(s.name), 1),
                            s.required ? (d(), r("span", wt, " *")) : V("", !0)
                          ]),
                          l(f, {
                            modelValue: n.params[s.name],
                            "onUpdate:modelValue": (w) => n.params[s.name] = w,
                            placeholder: s.desc || s.name,
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]))), 128))
                      ])
                    ])) : V("", !0),
                    l(v, {
                      type: "primary",
                      loading: $.value,
                      onClick: de
                    }, {
                      default: c(() => [
                        h("发送请求")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    g.value ? (d(), r("div", Vt, [
                      t("div", Ct, [
                        St,
                        l(u, {
                          size: "small",
                          type: g.value.ok ? "success" : "danger"
                        }, {
                          default: c(() => [
                            h(" HTTP " + i(g.value.status), 1)
                          ]),
                          _: 1
                        }, 8, ["type"]),
                        t("span", Tt, i(g.value.cost) + " ms", 1)
                      ]),
                      t("pre", It, i(g.value.body), 1)
                    ])) : V("", !0)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "title"])
            ], 64)) : (d(), r("div", qe, [
              l(y, { class: "doc-empty__icon" }, {
                default: c(() => [
                  l(_(ge))
                ]),
                _: 1
              }),
              je
            ]))
          ])
        ])
      ]);
    };
  }
});
const Et = /* @__PURE__ */ Te(Ut, [["__scopeId", "data-v-110bc147"]]);
export {
  Et as default
};
