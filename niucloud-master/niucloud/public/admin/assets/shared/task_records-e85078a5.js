import { defineComponent as de, ref as c, reactive as fe, onMounted as _e, resolveComponent as i, resolveDirective as me, openBlock as p, createElementBlock as U, normalizeStyle as ke, unref as K, createElementVNode as u, createVNode as l, withCtx as n, withModifiers as ge, Fragment as F, renderList as H, createBlock as y, withKeys as ye, createTextVNode as d, withDirectives as ve, toDisplayString as v, normalizeClass as be, createCommentVNode as L, pushScopeId as he, popScopeId as xe } from "vue";
import { ElMessageBox as I, ElMessage as C } from "element-plus";
import { Refresh as Ce } from "@element-plus/icons-vue";
import { al as Te, hF as Ve, hG as Se, ao as ze, hH as Be, hI as Re, a as De } from "./core-shared-86a0da16.js";
import Pe from "./index-49fea3c5.js";
import Ne from "./index-7801d241.js";
import Oe from "./index-cbeed3e7.js";
import { u as Ue } from "./useTablePageHeight-33d60cf6.js";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
const Ie = (b) => (he("data-v-326e3f5f"), b = b(), xe(), b), Me = { class: "table-fill-page__card" }, $e = { class: "table-panel table-fill-page__panel" }, Ee = { class: "table-fill-page__table" }, je = { class: "text-[13px]" }, Ke = { class: "flex flex-col" }, Fe = { class: "font-medium" }, He = { class: "text-[12px] text-[#94a3b8]" }, Le = { class: "flex items-center gap-[6px]" }, Ae = /* @__PURE__ */ Ie(() => /* @__PURE__ */ u("div", { class: "py-[30px] text-[13px] text-[#94a3b8]" }, "暂无任务记录", -1)), Ge = /* @__PURE__ */ de({
  __name: "task_records",
  setup(b) {
    const h = Te(), { pageRef: A, pageStyle: G } = Ue(), J = (e) => {
      I.confirm("确认删除该任务？", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        j(e);
      }).catch(() => {
      });
    }, Je = (e) => [
      { label: "详情", onClick: () => N(e) },
      { label: "恢复", show: M(e), onClick: () => E(e) },
      { label: "删除", type: "danger", disabled: !e.is_terminal, onClick: () => J(e) }
    ], T = c([]), V = c([]);
    function q() {
      Ve().then((e) => {
        var a, s;
        T.value = ((a = e.data) == null ? void 0 : a.types) || [], V.value = ((s = e.data) == null ? void 0 : s.status) || [];
      }).catch(() => {
        T.value = [], V.value = [];
      });
    }
    const o = fe({
      task_type: "",
      status: "",
      keyword: ""
    }), S = c([]), z = c(!1), m = c(1), B = c(10), R = c(0);
    function Q(e) {
      return e === "success" ? "success" : e === "failed" || e === "rollback_failed" ? "danger" : e === "canceled" || e === "rolled_back" ? "info" : e === "waiting_input" ? "warning" : e === "created" ? "info" : "primary";
    }
    function W(e) {
      return e.status === "created" ? "排队中" : e.status_name || e.status || "-";
    }
    function X(e) {
      return e.fail_reason && typeof e.fail_reason == "object" ? e.fail_reason.Message || e.fail_reason.message || Object.values(e.fail_reason).join(" ") : e.fail_reason ? String(e.fail_reason) : e.stage || "";
    }
    function Y(e) {
      if (!e || !e.params)
        return {};
      try {
        return typeof e.params == "string" ? JSON.parse(e.params) : e.params;
      } catch {
        return {};
      }
    }
    function M(e) {
      return e.task_type === "backup" && !!e.is_terminal && e.status === "success" && Y(e).mode === "backup";
    }
    function r() {
      z.value = !0;
      const e = { page: m.value, limit: B.value };
      o.task_type && (e.task_type = o.task_type), o.status && (e.status = o.status), o.keyword && (e.keyword = o.keyword), Se(e).then((a) => {
        S.value = a.data.data || [], R.value = a.data.total || 0;
      }).catch(() => {
        S.value = [], R.value = 0;
      }).finally(() => {
        z.value = !1;
      });
    }
    function D() {
      m.value = 1, r();
    }
    function Z() {
      o.task_type = "", o.status = "", o.keyword = "", D();
    }
    function w() {
      m.value = 1, r();
    }
    const k = c(!1), ee = c(null), P = c(null);
    function $(e) {
      P.value = e, k.value = !0;
    }
    function te() {
      const e = P.value;
      k.value = !1, P.value = null, e && ae(e);
    }
    function ae(e) {
      h.openPendingDetail("backup", e.mode === "restore" ? "正在发起恢复" : "正在发起备份"), ze("backup", e).then((a) => {
        var g;
        const s = (g = a == null ? void 0 : a.data) == null ? void 0 : g.task_key;
        if (!s) {
          h.closePendingDetail(), C.error("任务创建失败");
          return;
        }
        r(), N({
          task_key: s,
          task_type: "backup",
          title: e.mode === "restore" ? "系统恢复" : "系统备份"
        });
      }).catch((a) => {
        h.closePendingDetail(), C({ message: (a == null ? void 0 : a.msg) || (a == null ? void 0 : a.message) || "任务创建失败", type: "error" });
      });
    }
    function qe() {
      $({ mode: "backup" });
    }
    function E(e) {
      I.confirm(
        "确认使用该备份进行恢复？恢复将覆盖当前系统代码与数据，请谨慎操作。",
        "提示",
        {
          confirmButtonText: "确认恢复",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        $({ mode: "restore", backup_key: e.task_key });
      }).catch(() => {
      });
    }
    function N(e) {
      if (!(e != null && e.task_key)) {
        C.warning("该记录缺少任务标识");
        return;
      }
      h.openDetail(String(e.task_key), String(e.task_type || ""));
    }
    function j(e) {
      Be([e.id]).then(() => {
        r();
      });
    }
    function le(e) {
      const a = e.status === "created" ? "确认取消该排队中的任务？" : "确认取消该任务？";
      I.confirm(a, "提示", {
        confirmButtonText: "确认取消",
        cancelButtonText: "关闭",
        type: "warning"
      }).then(() => {
        Re(String(e.task_key)).then(() => {
          r();
        }).catch((s) => {
          C({ message: (s == null ? void 0 : s.msg) || (s == null ? void 0 : s.message) || "任务取消失败", type: "error" });
        });
      }).catch(() => {
      });
    }
    return _e(() => {
      q(), r();
    }), (e, a) => {
      const s = i("el-option"), g = i("el-select"), x = i("el-form-item"), ne = i("el-input"), f = i("el-button"), oe = i("el-form"), se = i("el-card"), _ = i("el-table-column"), ie = i("el-tag"), ce = i("el-popconfirm"), ue = i("el-table"), re = i("el-dialog"), pe = me("loading");
      return p(), U("div", {
        ref_key: "pageRef",
        ref: A,
        class: "main-container w-full table-fill-page",
        style: ke(K(G))
      }, [
        u("div", Me, [
          l(se, {
            class: "box-card !border-none table-search-wrap table-search-wrap--panel table-fill-page__search",
            shadow: "never"
          }, {
            default: n(() => [
              l(oe, {
                inline: !0,
                onSubmit: a[3] || (a[3] = ge(() => {
                }, ["prevent"]))
              }, {
                default: n(() => [
                  l(x, { label: "任务类型" }, {
                    default: n(() => [
                      l(g, {
                        modelValue: o.task_type,
                        "onUpdate:modelValue": a[0] || (a[0] = (t) => o.task_type = t),
                        placeholder: "全部",
                        clearable: "",
                        class: "!w-[150px]"
                      }, {
                        default: n(() => [
                          (p(!0), U(F, null, H(T.value, (t) => (p(), y(s, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  l(x, { label: "任务状态" }, {
                    default: n(() => [
                      l(g, {
                        modelValue: o.status,
                        "onUpdate:modelValue": a[1] || (a[1] = (t) => o.status = t),
                        placeholder: "全部",
                        clearable: "",
                        class: "!w-[150px]"
                      }, {
                        default: n(() => [
                          (p(!0), U(F, null, H(V.value, (t) => (p(), y(s, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  l(x, { label: "关键字" }, {
                    default: n(() => [
                      l(ne, {
                        modelValue: o.keyword,
                        "onUpdate:modelValue": a[2] || (a[2] = (t) => o.keyword = t),
                        placeholder: "任务标题 / 任务编号",
                        clearable: "",
                        class: "!w-[220px]",
                        onKeyup: ye(D, ["enter"])
                      }, null, 8, ["modelValue", "onKeyup"])
                    ]),
                    _: 1
                  }),
                  l(x, null, {
                    default: n(() => [
                      l(f, {
                        type: "primary",
                        onClick: D
                      }, {
                        default: n(() => [
                          d("查询")
                        ]),
                        _: 1
                      }),
                      l(f, { onClick: Z }, {
                        default: n(() => [
                          d("重置")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          u("div", $e, [
            l(Ne, {
              title: "任务管理",
              selectable: !1
            }, {
              actions: n(() => [
                l(f, {
                  icon: K(Ce),
                  onClick: r
                }, {
                  default: n(() => [
                    d("刷新")
                  ]),
                  _: 1
                }, 8, ["icon"])
              ]),
              _: 1
            }),
            u("div", Ee, [
              ve((p(), y(ue, {
                height: "100%",
                data: S.value
              }, {
                empty: n(() => [
                  Ae
                ]),
                default: n(() => [
                  l(_, {
                    label: "类型",
                    width: "110"
                  }, {
                    default: n(({ row: t }) => [
                      u("span", je, v(t.task_type_name || t.task_type || "-"), 1)
                    ]),
                    _: 1
                  }),
                  l(_, {
                    label: "目标/版本",
                    "min-width": "200",
                    "show-overflow-tooltip": ""
                  }, {
                    default: n(({ row: t }) => [
                      u("div", Ke, [
                        u("span", Fe, v(t.title || t.task_key), 1),
                        u("span", He, v(t.task_key), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  l(_, {
                    label: "状态",
                    width: "140"
                  }, {
                    default: n(({ row: t }) => [
                      u("div", Le, [
                        l(ie, {
                          type: Q(t.status),
                          size: "small",
                          effect: "light"
                        }, {
                          default: n(() => [
                            d(v(W(t)), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ])
                    ]),
                    _: 1
                  }),
                  l(_, {
                    prop: "create_time",
                    label: "创建时间",
                    width: "170"
                  }),
                  l(_, {
                    label: "信息",
                    "min-width": "220",
                    "show-overflow-tooltip": ""
                  }, {
                    default: n(({ row: t }) => [
                      u("span", {
                        class: be(["text-[13px]", t.status === "failed" || t.status === "rollback_failed" ? "text-[#f56c6c]" : "text-[var(--el-text-color-regular)]"])
                      }, v(X(t) || "-"), 3)
                    ]),
                    _: 1
                  }),
                  l(_, {
                    label: "操作",
                    width: "220",
                    fixed: "right"
                  }, {
                    default: n(({ row: t }) => [
                      l(f, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: (O) => N(t)
                      }, {
                        default: n(() => [
                          d("详情")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      M(t) ? (p(), y(f, {
                        key: 0,
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: (O) => E(t)
                      }, {
                        default: n(() => [
                          d("恢复")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : L("", !0),
                      t.is_terminal ? L("", !0) : (p(), y(f, {
                        key: 1,
                        link: "",
                        type: "danger",
                        size: "small",
                        onClick: (O) => le(t)
                      }, {
                        default: n(() => [
                          d("取消")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])),
                      l(ce, {
                        title: "确认删除该任务？",
                        "confirm-button-text": "删除",
                        "cancel-button-text": "取消",
                        "confirm-button-type": "danger",
                        onConfirm: (O) => j(t)
                      }, {
                        reference: n(() => [
                          l(f, {
                            link: "",
                            type: "danger",
                            size: "small",
                            disabled: !t.is_terminal
                          }, {
                            default: n(() => [
                              d("删除")
                            ]),
                            _: 2
                          }, 1032, ["disabled"])
                        ]),
                        _: 2
                      }, 1032, ["onConfirm"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])), [
                [pe, z.value]
              ])
            ]),
            l(Pe, {
              "current-page": m.value,
              "onUpdate:current-page": a[4] || (a[4] = (t) => m.value = t),
              "page-size": B.value,
              "onUpdate:page-size": a[5] || (a[5] = (t) => B.value = t),
              total: R.value,
              "page-sizes": [10, 20, 50],
              layout: "total, sizes, prev, pager, next",
              onCurrentChange: r,
              onSizeChange: w
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ]),
        l(re, {
          modelValue: k.value,
          "onUpdate:modelValue": a[7] || (a[7] = (t) => k.value = t),
          title: "备份环境校验",
          width: "580px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1,
          "append-to-body": ""
        }, {
          default: n(() => [
            l(Oe, {
              ref_key: "checkRef",
              ref: ee,
              scene: "backup",
              "auto-next": !0,
              "prev-text": "取消",
              "next-text": "开始备份",
              onNext: te,
              onPrev: a[6] || (a[6] = (t) => k.value = !1)
            }, null, 512)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
const st = /* @__PURE__ */ De(Ge, [["__scopeId", "data-v-326e3f5f"]]);
export {
  st as default
};
