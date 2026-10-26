import { defineComponent as ve, ref as u, computed as _e, reactive as X, resolveComponent as _, resolveDirective as ke, openBlock as T, createElementBlock as E, normalizeStyle as be, unref as o, createElementVNode as y, createVNode as n, withCtx as s, createTextVNode as x, toDisplayString as m, withDirectives as j, createBlock as F, createCommentVNode as he, pushScopeId as Xe, popScopeId as je, nextTick as I } from "vue";
import { al as ye, t as a, gU as xe, ao as q, gV as we, gW as Te, gX as G, a as Se } from "./core-shared-86a0da16.js";
import { ElTable as Ce, ElMessageBox as R, ElMessage as S } from "element-plus";
import De from "./index-d9bf0320.js";
import Be from "./index-49fea3c5.js";
import Pe from "./index-7801d241.js";
import { useRoute as Ve } from "vue-router";
import { u as Re } from "./useTablePageHeight-33d60cf6.js";
import Ee from "./index-cbeed3e7.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const Fe = { class: "table-fill-page__card" }, Ie = { class: "table-panel table-fill-page__panel" }, Ue = { class: "table-fill-page__table" }, ze = { class: "multi-hidden" }, Ne = {
  key: 0,
  class: "multi-hidden"
}, $e = { key: 1 }, Me = { class: "min-h-[150px]" }, Ae = { class: "dialog-footer" }, Le = /* @__PURE__ */ ve({
  __name: "backup_records",
  setup(He) {
    const f = ye(), J = Ve().meta.title, { pageRef: O, pageStyle: Q } = Re(), U = u(), P = u(), g = u(!1), d = u([]), z = u(!1), C = u(!1), N = _e(() => d.value.length), l = X({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        content: ""
      }
    }), k = u(!1), v = u(!1), $ = u(""), V = u(0), Y = (e) => e === "手动备份" ? "primary" : e === "自动备份" ? "success" : "warning", Z = (e) => {
      e && (e.resetFields(), p());
    }, M = async () => {
      var t;
      await I(), C.value = !0, (t = P.value) == null || t.clearSelection();
      const e = new Set(d.value);
      l.data.forEach((c) => {
        var r;
        e.has(c.id) && ((r = P.value) == null || r.toggleRowSelection(c, !0));
      }), await I(), C.value = !1;
    }, ee = (e) => {
      if (C.value)
        return;
      const t = new Set(l.data.map((r) => r.id)), c = d.value.filter((r) => !t.has(r));
      d.value = Array.from(/* @__PURE__ */ new Set([
        ...c,
        ...e.map((r) => r.id)
      ]));
    }, te = () => {
      d.value = l.data.map((e) => e.id), M();
    }, A = () => {
      var e;
      d.value = [], C.value = !0, (e = P.value) == null || e.clearSelection(), I(() => {
        C.value = !1;
      });
    }, ae = (e) => [
      { label: a("detail"), onClick: () => oe(e) },
      { label: a("restore"), onClick: () => re(e) },
      { label: a("remark"), onClick: () => ue(e) },
      { label: a("delete"), type: "danger", onClick: () => pe(e.id) }
    ], p = (e = 1) => (l.loading = !0, l.page = e, xe({
      page: l.page,
      limit: l.limit,
      ...l.searchParam
    }).then(async (t) => {
      l.data = t.data.data, l.total = t.data.total, await M();
    }).catch(() => {
    }).finally(() => {
      l.loading = !1;
    }));
    p();
    const le = () => {
      R.confirm(
        a("manualBackupTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        V.value = 1, v.value = !1, k.value = !0;
      });
    }, ne = () => {
      V.value == 1 ? ie() : se($.value);
    }, L = (e) => {
      e && f.openDetail(e, "backup");
    }, oe = (e) => {
      if (!(e != null && e.backup_key)) {
        S.warning("该记录缺少任务标识");
        return;
      }
      f.openDetail(String(e.backup_key));
    }, ie = () => {
      v.value = !0, f.openPendingDetail("backup", "正在发起备份"), q("backup", { mode: "backup" }).then((e) => {
        var c;
        v.value = !1;
        const t = (c = e == null ? void 0 : e.data) == null ? void 0 : c.task_key;
        if (!t) {
          f.closePendingDetail(), S.error("备份任务创建失败");
          return;
        }
        k.value = !1, p(), L(t);
      }).catch((e) => {
        v.value = !1, f.closePendingDetail(), S({ message: (e == null ? void 0 : e.msg) || (e == null ? void 0 : e.message) || "备份发起失败", type: "error" });
      });
    }, se = (e) => {
      v.value = !0, f.openPendingDetail("backup", "正在发起恢复"), q("backup", { mode: "restore", backup_key: e }).then((t) => {
        var r;
        v.value = !1;
        const c = (r = t == null ? void 0 : t.data) == null ? void 0 : r.task_key;
        if (!c) {
          f.closePendingDetail(), S.error("恢复任务创建失败");
          return;
        }
        k.value = !1, p(), L(c);
      }).catch((t) => {
        v.value = !1, f.closePendingDetail(), S({ message: (t == null ? void 0 : t.msg) || (t == null ? void 0 : t.message) || "恢复发起失败", type: "error" });
      });
    }, re = (e) => {
      R.confirm(
        a("restoreTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        V.value = 2, $.value = e.backup_key, ce(e.id);
      });
    }, ce = (e) => {
      we({ id: e }).then(({ data: t }) => {
        t && (v.value = !1, k.value = !0);
      });
    }, D = u(!1), B = u(!1), b = X({
      id: 0,
      remark: ""
    }), ue = (e) => {
      b.id = e.id, b.remark = e.remark, D.value = !0;
    }, de = () => {
      B.value = !0, Te({
        id: b.id,
        remark: b.remark
      }).then(() => {
        D.value = !1, B.value = !1, p();
      }).catch(() => {
        B.value = !1;
      });
    }, pe = (e) => {
      R.confirm(
        a("deleteTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        g.value || (g.value = !0, l.loading = !0, G({
          ids: e
        }).then(() => {
          d.value = d.value.filter((t) => t != e), p(), g.value = !1;
        }).catch(() => {
          g.value = !1, l.loading = !1;
        }));
      });
    }, me = () => {
      if (d.value.length == 0) {
        S({
          type: "warning",
          message: `${a("batchEmptySelectedTips")}`
        });
        return;
      }
      R.confirm(
        a("deleteTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        if (l.loading = !0, g.value)
          return;
        g.value = !0;
        const e = [...d.value];
        G({
          ids: e
        }).then(() => {
          A(), p(), g.value = !1;
        }).catch(() => {
          g.value = !1, l.loading = !1;
        });
      });
    };
    return (e, t) => {
      const c = _("el-input"), r = _("el-form-item"), w = _("el-button"), H = _("el-form"), fe = _("el-card"), h = _("el-table-column"), ge = _("el-tag"), K = _("el-dialog"), W = ke("loading");
      return T(), E("div", {
        ref_key: "pageRef",
        ref: O,
        class: "main-container table-fill-page",
        style: be(o(Q))
      }, [
        y("div", Fe, [
          n(fe, {
            class: "box-card !border-none table-search-wrap table-search-wrap--panel table-fill-page__search",
            shadow: "never"
          }, {
            default: s(() => [
              n(H, {
                inline: !0,
                model: l.searchParam,
                ref_key: "searchFormRef",
                ref: U
              }, {
                default: s(() => [
                  n(r, {
                    label: o(a)("content"),
                    prop: "content"
                  }, {
                    default: s(() => [
                      n(c, {
                        modelValue: l.searchParam.content,
                        "onUpdate:modelValue": t[0] || (t[0] = (i) => l.searchParam.content = i),
                        modelModifiers: { trim: !0 },
                        placeholder: o(a)("contentPlaceholder")
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(r, null, {
                    default: s(() => [
                      n(w, {
                        type: "primary",
                        onClick: t[1] || (t[1] = (i) => p())
                      }, {
                        default: s(() => [
                          x(m(o(a)("search")), 1)
                        ]),
                        _: 1
                      }),
                      n(w, {
                        onClick: t[2] || (t[2] = (i) => Z(U.value))
                      }, {
                        default: s(() => [
                          x(m(o(a)("reset")), 1)
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
          y("div", Ie, [
            n(Pe, {
              title: o(J),
              "selected-count": o(N),
              "current-page-count": l.data.length,
              "total-count": l.total,
              "selection-loading": z.value,
              "allow-select-all": !1,
              onSelectPage: te,
              onClearSelection: A
            }, {
              "batch-actions": s(() => [
                n(w, {
                  class: "table-delete",
                  link: "",
                  disabled: !o(N) || z.value,
                  onClick: me
                }, {
                  default: s(() => [
                    x(m(o(a)("batchDelete")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              actions: s(() => [
                n(w, {
                  type: "primary",
                  onClick: le
                }, {
                  default: s(() => [
                    x(m(o(a)("manualBackup")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "selected-count", "current-page-count", "total-count", "selection-loading"]),
            y("div", Ue, [
              j((T(), F(o(Ce), {
                height: "100%",
                data: l.data,
                size: "large",
                ref_key: "tableRef",
                ref: P,
                "row-key": "id",
                onSelectionChange: ee
              }, {
                empty: s(() => [
                  y("span", null, m(l.loading ? "" : o(a)("emptyData")), 1)
                ]),
                default: s(() => [
                  n(h, {
                    type: "selection",
                    width: "55",
                    "reserve-selection": ""
                  }),
                  n(h, {
                    prop: "content",
                    label: o(a)("操作"),
                    width: "120",
                    align: "left"
                  }, {
                    default: s(({ row: i }) => [
                      y("span", ze, [
                        n(ge, {
                          type: Y(i.content),
                          size: "small",
                          effect: "light"
                        }, {
                          default: s(() => [
                            x(m(i.content), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(h, {
                    prop: "version",
                    label: o(a)("currentVersion"),
                    width: "120"
                  }, null, 8, ["label"]),
                  n(h, {
                    prop: "backup_dir",
                    label: o(a)("backupDir"),
                    width: "220"
                  }, null, 8, ["label"]),
                  n(h, {
                    prop: "complete_time",
                    label: o(a)("completeTime"),
                    width: "220"
                  }, null, 8, ["label"]),
                  n(h, {
                    prop: "remark",
                    label: o(a)("remark")
                  }, {
                    default: s(({ row: i }) => [
                      i.remark ? (T(), E("span", Ne, m(i.remark), 1)) : (T(), E("span", $e, m(o(a)("remarkEmpty")), 1))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(h, {
                    label: o(a)("operation"),
                    align: "right",
                    fixed: "right",
                    width: "200"
                  }, {
                    default: s(({ row: i }) => [
                      n(De, {
                        actions: ae(i)
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [W, l.loading]
              ])
            ]),
            n(Be, {
              "current-page": l.page,
              "onUpdate:current-page": t[3] || (t[3] = (i) => l.page = i),
              "page-size": l.limit,
              "onUpdate:page-size": t[4] || (t[4] = (i) => l.limit = i),
              total: l.total,
              onSizeChange: t[5] || (t[5] = (i) => p()),
              onCurrentChange: p
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ]),
        n(K, {
          modelValue: k.value,
          "onUpdate:modelValue": t[6] || (t[6] = (i) => k.value = i),
          title: V.value == 1 ? o(a)("manualBackupTitle") : o(a)("restoreTitle"),
          width: "580px",
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          "destroy-on-close": !0
        }, {
          default: s(() => [
            y("div", Me, [
              k.value ? (T(), F(Ee, {
                key: 0,
                scene: "backup",
                "auto-next": !0,
                "show-prev": !1,
                "next-text": o(a)("nextStep"),
                onNext: ne
              }, null, 8, ["next-text"])) : he("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        n(K, {
          modelValue: D.value,
          "onUpdate:modelValue": t[10] || (t[10] = (i) => D.value = i),
          title: o(a)("remark"),
          width: "460px",
          "destroy-on-close": !0
        }, {
          footer: s(() => [
            y("span", Ae, [
              n(w, {
                onClick: t[8] || (t[8] = (i) => D.value = !1)
              }, {
                default: s(() => [
                  x(m(o(a)("cancel")), 1)
                ]),
                _: 1
              }),
              n(w, {
                type: "primary",
                loading: B.value,
                onClick: t[9] || (t[9] = (i) => de())
              }, {
                default: s(() => [
                  x(m(o(a)("confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          default: s(() => [
            j((T(), F(H, {
              model: b,
              ref: "formRef",
              class: "page-form"
            }, {
              default: s(() => [
                n(r, { class: "mb-0" }, {
                  default: s(() => [
                    n(c, {
                      modelValue: b.remark,
                      "onUpdate:modelValue": t[7] || (t[7] = (i) => b.remark = i),
                      modelModifiers: { trim: !0 },
                      rows: 5,
                      type: "textarea",
                      maxlength: "200",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])), [
              [W, B.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 4);
    };
  }
});
const ot = /* @__PURE__ */ Se(Le, [["__scopeId", "data-v-777269e5"]]);
export {
  ot as default
};
