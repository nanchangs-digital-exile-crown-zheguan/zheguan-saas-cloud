import { defineComponent as De, reactive as V, ref as _, computed as U, resolveComponent as p, resolveDirective as Ve, openBlock as k, createElementBlock as P, normalizeStyle as Ee, unref as c, createElementVNode as r, createBlock as E, createCommentVNode as j, createVNode as n, withCtx as l, withKeys as Re, createTextVNode as d, toDisplayString as S, withDirectives as Ae, resolveDynamicComponent as Oe, Fragment as Te, renderList as Pe, nextTick as B } from "vue";
import { ElTable as ze, ElMessage as $, ElMessageBox as w } from "element-plus";
import { u as Ke } from "./useTablePageHeight-33d60cf6.js";
import { ae as Me, dV as Ne, dW as Le, dX as Ie, dY as Ue, dZ as Q, d_ as je, d$ as Be, e0 as Fe, e1 as He } from "./core-shared-86a0da16.js";
import Ye from "./index-d9bf0320.js";
import We from "./index-49fea3c5.js";
import Xe from "./index-7801d241.js";
import { Hide as Ze, View as qe } from "@element-plus/icons-vue";
import Ge from "./app-form-drawer-be7d2965.js";
import Je from "./batch-secret-dialog-599a01df.js";
import Qe from "./log-drawer-62cf7b07.js";
import et from "./secret-dialog-9635f8e9.js";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
import "./domain-auth-4f8b6c3d.js";
import "./log-list-3098e236.js";
const tt = { class: "table-fill-page__card" }, at = { class: "table-search-wrap table-search-wrap--panel flex justify-between items-center" }, nt = { class: "flex justify-end items-center flex-1" }, lt = { class: "flex items-center" }, ot = /* @__PURE__ */ r("span", { class: "text-[14px] mr-[10px] flex items-center" }, [
  /* @__PURE__ */ d(" 开放平台功能 "),
  /* @__PURE__ */ r("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" })
], -1), st = { class: "table-panel table-fill-page__panel" }, it = { class: "table-fill-page__table" }, ct = { class: "font-medium" }, rt = {
  key: 0,
  class: "text-xs text-gray-400"
}, dt = { class: "flex items-center gap-2" }, pt = { class: "font-mono text-xs" }, ut = { class: "flex items-center gap-1" }, mt = { class: "font-mono text-xs" }, ft = {
  key: 1,
  class: "text-gray-400"
}, Pt = /* @__PURE__ */ De({
  __name: "list",
  setup(_t) {
    const { pageRef: ee, pageStyle: te } = Ke(), ae = {
      auth: "授权",
      common: "公共",
      goods: "商品",
      order: "订单",
      member: "会员"
    }, o = V({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: []
    }), g = V({
      name: "",
      status: ""
    }), z = _(), K = _(), F = _(), H = _(), R = _(), h = _([]), A = _(!1), D = _(!1), Y = U(() => h.value.length), ne = async () => {
      var t;
      await B(), D.value = !0, (t = R.value) == null || t.clearSelection();
      const e = new Set(h.value);
      o.data.forEach((s) => {
        var i;
        e.has(s.id) && ((i = R.value) == null || i.toggleRowSelection(s, !0));
      }), await B(), D.value = !1;
    }, le = (e) => {
      if (D.value)
        return;
      const t = new Set(o.data.map((i) => i.id)), s = h.value.filter((i) => !t.has(i));
      h.value = Array.from(/* @__PURE__ */ new Set([
        ...s,
        ...e.map((i) => i.id)
      ]));
    }, oe = () => {
      h.value = o.data.map((e) => e.id), ne();
    }, W = () => {
      var e;
      h.value = [], D.value = !0, (e = R.value) == null || e.clearSelection(), B(() => {
        D.value = !1;
      });
    }, M = Me() === "admin", C = V({ is_open: "1" }), O = _(!1), m = U(() => C.is_open === "1"), se = U(() => M ? "关闭后所有开放接口立即停止服务（含已签发的令牌），后台仅可查看" : "由平台统一控制，如需调整请联系平台管理员"), ie = () => {
      Ne().then((e) => {
        var t;
        C.is_open = String(((t = e.data) == null ? void 0 : t.is_open) ?? "1");
      }).catch(() => {
        C.is_open = "1";
      });
    }, X = (e) => {
      O.value = !0, Le({ is_open: e }).then(() => {
        O.value = !1, C.is_open = e, $.success(e === "1" ? "开放平台已开启" : "开放平台已关闭");
      }).catch(() => {
        O.value = !1, C.is_open = e === "1" ? "0" : "1";
      });
    }, ce = (e) => {
      const t = String(e);
      if (t === "1") {
        X(t);
        return;
      }
      w.confirm("关闭后所有开放接口将立即停止服务（含已签发的令牌），确认关闭吗？", "关闭开放平台", { type: "warning" }).then(() => X(t)).catch(() => {
        C.is_open = "1";
      });
    }, T = _(!1), re = () => {
      w.confirm(
        "数据加密密钥为全平台共用，刷新后会重新加密所有站点（含各店铺）的开放账号 Secret Key，对接方无需改动。请勿中断操作，确认继续？",
        "刷新加密密钥",
        { type: "warning" }
      ).then(() => {
        T.value = !0, Ie().then((e) => {
          var t;
          T.value = !1, $.success(`密钥已刷新，全平台共重新加密 ${((t = e.data) == null ? void 0 : t.app_count) ?? 0} 个开放账号（含平台与各店铺）`);
        }).catch(() => {
          T.value = !1;
        });
      }).catch(() => {
      });
    }, de = () => {
      h.value.length && w.confirm(
        `确定要重置所选 ${h.value.length} 个账号的密钥吗？重置后原 Secret Key 立即失效，这些账号的全部令牌将作废，需对接方重新配置。`,
        "批量重置密钥",
        { type: "warning" }
      ).then(() => {
        A.value = !0, Ue(h.value).then((e) => {
          A.value = !1;
          const t = e.data || [];
          t.length && H.value.show(t), $.success(`已重置 ${t.length} 个账号的密钥`), W(), u();
        }).catch(() => {
          A.value = !1;
        });
      }).catch(() => {
      });
    }, v = V({}), f = V({}), pe = (e) => ae[e] || e, Z = (e) => {
      if (!e)
        return "--";
      const t = new Date(e * 1e3), s = (i) => String(i).padStart(2, "0");
      return `${t.getFullYear()}-${s(t.getMonth() + 1)}-${s(t.getDate())} ${s(t.getHours())}:${s(t.getMinutes())}`;
    }, N = (e) => {
      var t;
      (t = navigator.clipboard) == null || t.writeText(e).then(() => $.success("已复制到剪贴板"));
    }, ue = (e) => {
      if (v[e.id]) {
        v[e.id] = !1;
        return;
      }
      if (f[e.id]) {
        v[e.id] = !0;
        return;
      }
      Q(e.id).then((t) => {
        var s;
        f[e.id] = ((s = t.data) == null ? void 0 : s.app_secret) || "", v[e.id] = !0;
      });
    }, me = (e) => {
      if (f[e.id]) {
        N(f[e.id]);
        return;
      }
      Q(e.id).then((t) => {
        var s;
        f[e.id] = ((s = t.data) == null ? void 0 : s.app_secret) || "", f[e.id] && N(f[e.id]);
      });
    }, fe = () => {
      Object.keys(v).forEach((e) => delete v[e]), Object.keys(f).forEach((e) => delete f[e]);
    }, u = (e) => {
      e && (o.page = e), o.loading = !0, je({
        page: o.page,
        limit: o.limit,
        name: g.name,
        status: g.status
      }).then((t) => {
        o.loading = !1, o.data = t.data.data || [], o.total = t.data.total || 0, fe();
      }).catch(() => {
        o.loading = !1;
      });
    };
    u(), ie();
    const _e = () => {
      g.name = "", g.status = "", u(1);
    }, ge = (e) => [
      { label: "编辑", disabled: !m.value, onClick: () => z.value.show(e) },
      { label: "日志", onClick: () => Se(e) },
      { label: "删除", type: "danger", disabled: !m.value, onClick: () => ke(e) }
    ], he = () => z.value.show(), ve = (e) => {
      e != null && e.app_key && (e != null && e.app_secret) && K.value.show(e.app_key, e.app_secret), u();
    }, ye = (e, t) => {
      const s = Number(t), i = s === 1 ? "启用" : "禁用";
      w.confirm(`确定要${i}账号「${e.name}」吗？${s === 0 ? "禁用后其已签发的令牌将立即失效。" : ""}`, "提示", { type: "warning" }).then(() => {
        Be(e.id, s).then(() => {
          $.success(`${i}成功`), u();
        });
      }).catch(() => {
      });
    }, be = (e) => {
      w.confirm(`重置后原 Secret Key 立即失效，账号「${e.name}」的全部令牌将作废，需重新获取。`, "重置密钥", { type: "warning" }).then(() => {
        Fe(e.id).then((t) => {
          K.value.show(t.data.app_key, t.data.app_secret), u();
        });
      }).catch(() => {
      });
    }, ke = (e) => {
      w.confirm(`确定要删除账号「${e.name}」吗？`, "删除账号", { type: "warning" }).then(() => {
        He(e.id).then(() => {
          $.success("删除成功"), u();
        });
      }).catch(() => {
      });
    }, Se = (e) => {
      F.value.show(e.id, e.name);
    };
    return (e, t) => {
      const s = p("el-alert"), i = p("el-input"), L = p("el-form-item"), q = p("el-option"), Ce = p("el-select"), y = p("el-button"), xe = p("el-form"), I = p("el-tooltip"), G = p("el-switch"), J = p("el-tag"), b = p("el-table-column"), $e = p("el-icon"), we = Ve("loading");
      return k(), P("div", {
        ref_key: "pageRef",
        ref: ee,
        class: "main-container table-fill-page",
        style: Ee(c(te))
      }, [
        r("div", tt, [
          c(m) ? j("", !0) : (k(), E(s, {
            key: 0,
            type: "warning",
            closable: !1,
            "show-icon": "",
            title: "开放平台功能已关闭：对外接口已全部停止服务（含已签发的令牌），当前仅可查看账号与调用日志"
          })),
          r("div", at, [
            n(xe, {
              inline: !0,
              model: g
            }, {
              default: l(() => [
                n(L, { label: "账号名称" }, {
                  default: l(() => [
                    n(i, {
                      modelValue: g.name,
                      "onUpdate:modelValue": t[0] || (t[0] = (a) => g.name = a),
                      modelModifiers: { trim: !0 },
                      class: "input-width",
                      placeholder: "请输入账号名称",
                      clearable: "",
                      onKeyup: t[1] || (t[1] = Re((a) => u(1), ["enter"]))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                n(L, { label: "状态" }, {
                  default: l(() => [
                    n(Ce, {
                      modelValue: g.status,
                      "onUpdate:modelValue": t[2] || (t[2] = (a) => g.status = a),
                      class: "input-width",
                      placeholder: "全部",
                      clearable: ""
                    }, {
                      default: l(() => [
                        n(q, {
                          label: "启用",
                          value: 1
                        }),
                        n(q, {
                          label: "禁用",
                          value: 0
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                n(L, null, {
                  default: l(() => [
                    n(y, {
                      type: "primary",
                      onClick: t[3] || (t[3] = (a) => u(1))
                    }, {
                      default: l(() => [
                        d("搜索")
                      ]),
                      _: 1
                    }),
                    n(y, { onClick: _e }, {
                      default: l(() => [
                        d("重置")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            r("div", nt, [
              r("div", lt, [
                M ? (k(), E(I, {
                  key: 0,
                  class: "box-item",
                  effect: "dark",
                  placement: "top-start",
                  content: "重新生成全平台共用的数据加密密钥，并重新加密所有站点（含各店铺）的开放账号 Secret Key；对接方无需改动"
                }, {
                  default: l(() => [
                    n(y, {
                      link: "",
                      type: "primary",
                      class: "mr-[16px]",
                      loading: T.value,
                      onClick: re
                    }, {
                      default: l(() => [
                        d("刷新加密密钥")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })) : j("", !0),
                n(I, {
                  class: "box-item",
                  effect: "dark",
                  content: c(se),
                  placement: "top-start"
                }, {
                  default: l(() => [
                    ot
                  ]),
                  _: 1
                }, 8, ["content"]),
                n(G, {
                  modelValue: C.is_open,
                  "onUpdate:modelValue": t[4] || (t[4] = (a) => C.is_open = a),
                  "active-value": "1",
                  "inactive-value": "0",
                  disabled: !M,
                  loading: O.value,
                  onChange: ce
                }, null, 8, ["modelValue", "disabled", "loading"]),
                n(J, {
                  type: c(m) ? "success" : "danger",
                  size: "small",
                  class: "ml-[10px]"
                }, {
                  default: l(() => [
                    d(S(c(m) ? "已开启" : "已关闭"), 1)
                  ]),
                  _: 1
                }, 8, ["type"])
              ])
            ])
          ]),
          r("div", st, [
            n(Xe, {
              title: "开放账号",
              "selected-count": c(Y),
              "current-page-count": o.data.length,
              "total-count": o.total,
              "selection-loading": A.value,
              "selection-disabled": !c(m),
              "allow-select-all": !1,
              onSelectPage: oe,
              onClearSelection: W
            }, {
              "batch-actions": l(() => [
                n(y, {
                  link: "",
                  type: "primary",
                  disabled: !c(Y) || !c(m),
                  onClick: de
                }, {
                  default: l(() => [
                    d("批量重置密钥")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              actions: l(() => [
                n(y, {
                  type: "primary",
                  disabled: !c(m),
                  onClick: he
                }, {
                  default: l(() => [
                    d("创建开放账号")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["selected-count", "current-page-count", "total-count", "selection-loading", "selection-disabled"]),
            r("div", it, [
              Ae((k(), E(c(ze), {
                ref_key: "tableRef",
                ref: R,
                height: "100%",
                data: o.data,
                size: "large",
                "row-key": "id",
                onSelectionChange: le
              }, {
                empty: l(() => [
                  r("span", null, S(o.loading ? "" : "还没有开放账号，点击右上角创建"), 1)
                ]),
                default: l(() => [
                  n(b, {
                    type: "selection",
                    width: "55",
                    "reserve-selection": ""
                  }),
                  n(b, {
                    label: "账号名称",
                    "min-width": "170",
                    "show-overflow-tooltip": ""
                  }, {
                    default: l(({ row: a }) => [
                      r("div", ct, S(a.name), 1),
                      a.remark ? (k(), P("div", rt, S(a.remark), 1)) : j("", !0)
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "Access Key",
                    "min-width": "230"
                  }, {
                    default: l(({ row: a }) => [
                      r("div", dt, [
                        r("span", pt, S(a.app_key), 1),
                        n(y, {
                          link: "",
                          type: "primary",
                          onClick: (x) => N(a.app_key)
                        }, {
                          default: l(() => [
                            d("复制")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "Secret Key",
                    width: "250"
                  }, {
                    default: l(({ row: a }) => [
                      r("div", ut, [
                        r("span", mt, S(v[a.id] ? f[a.id] : "••••••••"), 1),
                        n(I, {
                          content: v[a.id] ? "隐藏" : "查看",
                          placement: "top"
                        }, {
                          default: l(() => [
                            n(y, {
                              link: "",
                              type: "primary",
                              onClick: (x) => ue(a)
                            }, {
                              default: l(() => [
                                n($e, null, {
                                  default: l(() => [
                                    (k(), E(Oe(v[a.id] ? c(Ze) : c(qe))))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["content"]),
                        n(y, {
                          link: "",
                          type: "primary",
                          onClick: (x) => me(a)
                        }, {
                          default: l(() => [
                            d("复制")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        n(y, {
                          link: "",
                          type: "danger",
                          disabled: !c(m),
                          onClick: (x) => be(a)
                        }, {
                          default: l(() => [
                            d("重置")
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "状态",
                    width: "90",
                    align: "center"
                  }, {
                    default: l(({ row: a }) => [
                      n(G, {
                        "model-value": a.status,
                        "active-value": 1,
                        "inactive-value": 0,
                        disabled: !c(m),
                        onChange: (x) => ye(a, x)
                      }, null, 8, ["model-value", "disabled", "onChange"])
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "已授权模块",
                    "min-width": "190"
                  }, {
                    default: l(({ row: a }) => [
                      (a.auth_domains || []).length ? (k(!0), P(Te, { key: 0 }, Pe(a.auth_domains, (x) => (k(), E(J, {
                        key: x,
                        size: "small",
                        class: "mr-1 mb-1",
                        type: "primary"
                      }, {
                        default: l(() => [
                          d(S(pe(x)), 1)
                        ]),
                        _: 2
                      }, 1024))), 128)) : (k(), P("span", ft, "未授权"))
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "有效期",
                    width: "120",
                    align: "center"
                  }, {
                    default: l(({ row: a }) => [
                      d(S(a.expire_time ? Z(a.expire_time) : "长期有效"), 1)
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "最近调用",
                    width: "160",
                    align: "center"
                  }, {
                    default: l(({ row: a }) => [
                      d(S(a.last_visit_time ? Z(a.last_visit_time) : "从未调用"), 1)
                    ]),
                    _: 1
                  }),
                  n(b, {
                    label: "操作",
                    align: "right",
                    fixed: "right",
                    width: "210"
                  }, {
                    default: l(({ row: a }) => [
                      n(Ye, {
                        actions: ge(a)
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])), [
                [we, o.loading]
              ])
            ]),
            n(We, {
              "current-page": o.page,
              "onUpdate:current-page": t[5] || (t[5] = (a) => o.page = a),
              "page-size": o.limit,
              "onUpdate:page-size": t[6] || (t[6] = (a) => o.limit = a),
              total: o.total,
              onSizeChange: t[7] || (t[7] = (a) => u()),
              onCurrentChange: u
            }, null, 8, ["current-page", "page-size", "total"])
          ]),
          n(Ge, {
            ref_key: "formDrawerRef",
            ref: z,
            onComplete: ve
          }, null, 512),
          n(et, {
            ref_key: "secretDialogRef",
            ref: K
          }, null, 512),
          n(Je, {
            ref_key: "batchSecretDialogRef",
            ref: H
          }, null, 512),
          n(Qe, {
            ref_key: "logDrawerRef",
            ref: F
          }, null, 512)
        ])
      ], 4);
    };
  }
});
export {
  Pt as default
};
