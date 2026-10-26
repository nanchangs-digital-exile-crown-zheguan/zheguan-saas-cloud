import { defineComponent as ae, computed as A, ref as b, resolveComponent as g, resolveDirective as ne, openBlock as u, createElementBlock as _, Fragment as R, createVNode as r, unref as x, isRef as oe, withCtx as c, createTextVNode as k, toDisplayString as n, withDirectives as ie, createElementVNode as i, createBlock as y, renderList as M, createCommentVNode as V, normalizeClass as ce, pushScopeId as We, popScopeId as qe } from "vue";
import { ElMessage as $, ElMessageBox as q } from "element-plus";
import { WarningFilled as re, CircleCheckFilled as ue } from "@element-plus/icons-vue";
import { i as de, cF as pe, cM as _e, cN as fe, a as me } from "./core-shared-86a0da16.js";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
const he = { class: "min-h-[200px]" }, ge = ["title"], ke = { class: "backup-files" }, ve = { class: "mb-[8px] flex items-center justify-between px-[4px]" }, be = { class: "flex items-center gap-[8px]" }, xe = { class: "max-h-[260px] overflow-y-auto rounded-[6px] bg-[#fafafa] p-[6px]" }, ye = ["title"], Ce = { class: "shrink-0 text-[12px] text-[#909399]" }, Se = { class: "flex items-center gap-[6px]" }, Be = ["title"], Te = { class: "flex items-center justify-center gap-[8px]" }, De = { class: "restore-result" }, Fe = { class: "restore-result__summary-text" }, Re = {
  key: 0,
  class: "restore-result__backup"
}, Ve = { class: "restore-result__refresh" }, $e = {
  key: 1,
  class: "restore-result__section"
}, Ne = { class: "restore-result__section-title is-failed" }, Ie = { class: "restore-result__list" }, Le = ["title"], Ae = { class: "restore-result__msg is-failed" }, Me = {
  key: 2,
  class: "restore-result__section"
}, ze = { class: "restore-result__section-title" }, Ee = { class: "restore-result__list" }, Oe = ["title"], je = { class: "restore-result__msg" }, Ue = /* @__PURE__ */ ae({
  __name: "index",
  props: {
    show: { type: Boolean },
    target: null
  },
  emits: ["update:show"],
  setup(G, { emit: H }) {
    const N = G, l = (e) => {
      var a, o, p;
      const t = (p = (o = (a = de) == null ? void 0 : a.global) == null ? void 0 : o.t) == null ? void 0 : p.call(o, e);
      return t == null ? e : String(t);
    }, C = A({
      get: () => N.show,
      set: (e) => H("update:show", e)
    }), S = b(!1), B = b([]), I = b(""), T = b(0), v = b(!1), f = b(null), D = b(!1), z = A(() => {
      var e, t;
      return ((t = (e = f.value) == null ? void 0 : e.failed) == null ? void 0 : t.length) || 0;
    }), J = A(() => {
      var t, a, o;
      const e = f.value;
      return e ? l("backupSummary").replace("%ok%", String(((t = e.restored) == null ? void 0 : t.length) || 0)).replace("%skip%", String(((a = e.skipped) == null ? void 0 : a.length) || 0)).replace("%fail%", String(((o = e.failed) == null ? void 0 : o.length) || 0)) : "";
    }), L = () => {
      S.value = !0, B.value = [], pe().then((e) => {
        const t = e.data || {};
        I.value = t.root || "", T.value = Number(t.max_files || 0);
        let a = t.list || [];
        N.target && (a = a.filter((o) => o.target === N.target)), B.value = a.map((o) => ({
          ...o,
          id: `${o.stamp}|${o.target}`,
          files: o.files || [],
          checked: []
        }));
      }).finally(() => {
        S.value = !1;
      });
    }, E = (e) => e ? e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB` : "0 B", P = (e) => e.files.length > 0 && e.checked.length === e.files.length, Q = (e) => e.checked.length > 0 && e.checked.length < e.files.length, X = (e, t) => {
      e.checked = t ? e.files.map((a) => a.file) : [];
    }, Y = (e, t, a) => {
      const o = new Set(e.checked);
      a ? o.add(t) : o.delete(t), e.checked = [...o];
    }, O = (e, t) => {
      const a = t ? [] : [...e.checked];
      if (!t && !a.length) {
        $.warning(l("backupSelectTip"));
        return;
      }
      if (T.value > 0 && (t ? e.file_count : a.length) > T.value) {
        $.warning(
          l("backupMaxFilesTip").replace("%max%", String(T.value)).replace("%count%", String(t ? e.file_count : a.length))
        );
        return;
      }
      q.confirm(l("backupConfirmText"), l("backupConfirmTitle"), {
        type: "warning",
        confirmButtonText: l("backupConfirmOk"),
        cancelButtonText: l("cancel")
      }).then(() => {
        Z(e, a);
      }).catch(() => {
      });
    }, Z = (e, t) => {
      v.value = !0, _e({
        stamp: e.stamp,
        target: e.target,
        files: t
      }).then((a) => {
        f.value = a.data || null, D.value = !0, L();
      }).finally(() => {
        v.value = !1;
      });
    }, j = (e, t) => {
      const a = t ? [] : [...e.checked];
      if (!t && !a.length) {
        $.warning(l("backupSelectTip"));
        return;
      }
      q.confirm(
        t ? l("backupDeleteConfirmAll").replace("%count%", String(e.file_count)) : l("backupDeleteConfirmSelected").replace("%count%", String(a.length)),
        l("backupDeleteConfirmTitle"),
        {
          type: "warning",
          confirmButtonText: l("backupDeleteOk"),
          cancelButtonText: l("cancel")
        }
      ).then(() => {
        v.value = !0, fe({
          stamp: e.stamp,
          target: e.target,
          files: a
        }).then((o) => {
          var m;
          const p = Number(((m = o.data) == null ? void 0 : m.deleted) || 0);
          $.success(t ? l("backupDeletedBatch") : l("backupDeleted").replace("%count%", String(p))), L();
        }).finally(() => {
          v.value = !1;
        });
      }).catch(() => {
      });
    };
    return (e, t) => {
      const a = g("el-alert"), o = g("el-checkbox"), p = g("el-button"), m = g("el-table-column"), w = g("el-tag"), ee = g("el-tooltip"), te = g("el-table"), U = g("el-dialog"), le = g("el-icon"), se = ne("loading");
      return u(), _(R, null, [
        r(U, {
          modelValue: x(C),
          "onUpdate:modelValue": t[1] || (t[1] = (s) => oe(C) ? C.value = s : null),
          title: l("backupManageTitle"),
          width: "780px",
          top: "6vh",
          "append-to-body": "",
          "close-on-click-modal": !1,
          onOpen: L
        }, {
          footer: c(() => [
            r(p, {
              onClick: t[0] || (t[0] = (s) => C.value = !1)
            }, {
              default: c(() => [
                k(n(l("close")), 1)
              ]),
              _: 1
            })
          ]),
          default: c(() => [
            ie((u(), _("div", he, [
              i("div", {
                class: "mb-[10px] truncate text-[12px] text-[#909399]",
                title: I.value
              }, n(l("backupRootLabel")) + "  " + n(I.value || "-"), 9, ge),
              !S.value && !B.value.length ? (u(), y(a, {
                key: 0,
                type: "info",
                closable: !1,
                "show-icon": "",
                title: l("backupEmpty")
              }, null, 8, ["title"])) : (u(), y(te, {
                key: 1,
                data: B.value,
                border: "",
                "row-key": "id"
              }, {
                default: c(() => [
                  r(m, { type: "expand" }, {
                    default: c(({ row: s }) => [
                      i("div", ke, [
                        i("div", ve, [
                          r(o, {
                            "model-value": P(s),
                            indeterminate: Q(s),
                            onChange: (d) => X(s, d)
                          }, {
                            default: c(() => [
                              k(n(l("backupSelectAll")), 1)
                            ]),
                            _: 2
                          }, 1032, ["model-value", "indeterminate", "onChange"]),
                          i("div", be, [
                            r(p, {
                              size: "small",
                              type: "primary",
                              disabled: !s.checked.length || v.value,
                              onClick: (d) => O(s, !1)
                            }, {
                              default: c(() => [
                                k(n(l("backupRestoreSelected")) + " (" + n(s.checked.length) + ") ", 1)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"]),
                            r(p, {
                              size: "small",
                              type: "danger",
                              plain: "",
                              disabled: !s.checked.length || v.value,
                              onClick: (d) => j(s, !1)
                            }, {
                              default: c(() => [
                                k(n(l("backupDeleteSelected")) + " (" + n(s.checked.length) + ") ", 1)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ])
                        ]),
                        i("div", xe, [
                          (u(!0), _(R, null, M(s.files, (d) => (u(), _("div", {
                            key: d.file,
                            class: "flex items-center gap-[8px] rounded-[4px] px-[4px] py-[3px] hover:bg-white"
                          }, [
                            r(o, {
                              "model-value": s.checked.includes(d.file),
                              class: "!h-[22px] !mr-0",
                              onChange: (F) => Y(s, d.file, F)
                            }, null, 8, ["model-value", "onChange"]),
                            i("span", {
                              class: "min-w-0 flex-1 truncate text-[12px] text-[#303133]",
                              title: d.file
                            }, n(d.file), 9, ye),
                            i("span", Ce, n(E(d.size)), 1)
                          ]))), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  r(m, {
                    label: l("backupColTime"),
                    prop: "time",
                    width: "165"
                  }, null, 8, ["label"]),
                  r(m, {
                    label: l("backupColTarget"),
                    "min-width": "150"
                  }, {
                    default: c(({ row: s }) => [
                      i("div", Se, [
                        i("span", {
                          class: "truncate",
                          title: s.target_name
                        }, n(s.target_name), 9, Be),
                        s.restorable ? V("", !0) : (u(), y(ee, {
                          key: 0,
                          content: l("backupNotRestorableTip"),
                          placement: "top"
                        }, {
                          default: c(() => [
                            r(w, {
                              size: "small",
                              type: "info",
                              effect: "light"
                            }, {
                              default: c(() => [
                                k(n(l("backupNotRestorable")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["content"]))
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  r(m, {
                    label: l("backupColCount"),
                    prop: "file_count",
                    width: "75",
                    align: "center"
                  }, null, 8, ["label"]),
                  r(m, {
                    label: l("backupColSize"),
                    width: "90",
                    align: "right"
                  }, {
                    default: c(({ row: s }) => [
                      k(n(E(s.total_size)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  r(m, {
                    label: l("backupColAction"),
                    width: "130",
                    align: "center"
                  }, {
                    default: c(({ row: s }) => [
                      i("div", Te, [
                        r(p, {
                          size: "small",
                          disabled: !s.restorable || !s.file_count || v.value,
                          onClick: (d) => O(s, !0)
                        }, {
                          default: c(() => [
                            k(n(l("restoreAction")), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"]),
                        r(p, {
                          size: "small",
                          type: "danger",
                          plain: "",
                          disabled: !s.file_count || v.value,
                          onClick: (d) => j(s, !0)
                        }, {
                          default: c(() => [
                            k(n(l("delete")), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"]))
            ])), [
              [se, S.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        r(U, {
          modelValue: D.value,
          "onUpdate:modelValue": t[3] || (t[3] = (s) => D.value = s),
          title: l("backupResultTitle"),
          width: "560px",
          "append-to-body": "",
          "close-on-click-modal": !1
        }, {
          footer: c(() => [
            r(p, {
              type: "primary",
              class: "!px-[28px]",
              onClick: t[2] || (t[2] = (s) => D.value = !1)
            }, {
              default: c(() => [
                k(n(l("restoreDoneOk")), 1)
              ]),
              _: 1
            })
          ]),
          default: c(() => {
            var s, d, F, K, W;
            return [
              i("div", De, [
                i("div", {
                  class: ce(["restore-result__summary", x(z) ? "is-warning" : "is-success"])
                }, [
                  r(le, { class: "restore-result__summary-icon" }, {
                    default: c(() => [
                      x(z) ? (u(), y(x(re), { key: 0 })) : (u(), y(x(ue), { key: 1 }))
                    ]),
                    _: 1
                  }),
                  i("span", Fe, n(x(J)), 1)
                ], 2),
                (s = f.value) != null && s.rollback_backup_dir ? (u(), _("div", Re, n(l("backupRollbackDirLabel")) + "  " + n(f.value.rollback_backup_dir), 1)) : V("", !0),
                i("div", Ve, n(l("restoreRefreshTip")), 1),
                (F = (d = f.value) == null ? void 0 : d.failed) != null && F.length ? (u(), _("div", $e, [
                  i("div", Ne, n(l("restoreFailedList")), 1),
                  i("div", Ie, [
                    (u(!0), _(R, null, M(f.value.failed, (h) => (u(), _("div", {
                      key: "f" + h.file,
                      class: "restore-result__item"
                    }, [
                      i("div", {
                        class: "restore-result__file",
                        title: h.file
                      }, n(h.file), 9, Le),
                      i("div", Ae, n(h.message), 1)
                    ]))), 128))
                  ])
                ])) : V("", !0),
                (W = (K = f.value) == null ? void 0 : K.skipped) != null && W.length ? (u(), _("div", Me, [
                  i("div", ze, n(l("restoreSkippedList")), 1),
                  i("div", Ee, [
                    (u(!0), _(R, null, M(f.value.skipped, (h) => (u(), _("div", {
                      key: "s" + h.file,
                      class: "restore-result__item"
                    }, [
                      i("div", {
                        class: "restore-result__file",
                        title: h.file
                      }, n(h.file), 9, Oe),
                      i("div", je, n(h.message), 1)
                    ]))), 128))
                  ])
                ])) : V("", !0)
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const Ze = /* @__PURE__ */ me(Ue, [["__scopeId", "data-v-67d0437f"]]);
export {
  Ze as default
};
