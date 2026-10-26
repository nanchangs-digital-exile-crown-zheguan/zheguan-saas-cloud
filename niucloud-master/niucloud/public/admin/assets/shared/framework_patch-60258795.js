import { defineComponent as X, ref as g, reactive as R, resolveComponent as _, resolveDirective as Y, openBlock as u, createElementBlock as y, normalizeStyle as Z, unref as o, createElementVNode as l, createVNode as n, withCtx as d, createTextVNode as p, toDisplayString as i, withDirectives as $, createBlock as T, Fragment as ee, normalizeClass as le, createCommentVNode as B, pushScopeId as Be, popScopeId as Ie } from "vue";
import { t, hm as te, hn as ae, ho as oe, hp as se, a as ne } from "./core-shared-86a0da16.js";
import { ElMessage as V, ElMessageBox as ie } from "element-plus";
import { Close as de } from "@element-plus/icons-vue";
import ce from "./index-d9bf0320.js";
import re from "./index-49fea3c5.js";
import _e from "./index-7801d241.js";
import { useRoute as ue } from "vue-router";
import { u as pe } from "./useTablePageHeight-33d60cf6.js";
import "axios";
import "vue-i18n";
import "pinia";
const me = { class: "table-fill-page__card" }, ve = { class: "table-panel table-fill-page__panel" }, fe = { class: "table-fill-page__table" }, he = { class: "patch-detail" }, be = { class: "patch-detail__head" }, ge = { class: "patch-detail__head-main" }, ye = { class: "patch-detail__ident" }, ke = ["title"], we = { class: "flex items-center flex-wrap gap-[8px] mt-[8px]" }, Ne = { class: "patch-detail__body" }, xe = { class: "patch-detail__meta" }, Te = { class: "patch-detail__desc" }, Ce = { class: "patch-detail__desc-label" }, Pe = {
  key: 0,
  class: "patch-content-box"
}, Ve = ["innerHTML"], ze = {
  key: 1,
  class: "patch-content-box"
}, De = { class: "patch-detail__actions" }, Fe = /* @__PURE__ */ X({
  __name: "framework_patch",
  setup(Se) {
    const I = ue().meta.title, { pageRef: L, pageStyle: M } = pe(), z = g(), r = R({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: []
    }), m = R({
      title: "",
      is_resolved: ""
    }), k = g(!1), h = g(!1), w = g(!1), c = g({}), U = (a) => {
      a && (a.resetFields(), v());
    }, A = (a) => [
      { label: t("patchDetail"), onClick: () => H(a) },
      // { label: t('download'), show: !!row.attach_url, onClick: () => downloadAttach(row) },
      { label: t("markResolved"), type: "success", show: Number(a.is_resolved) !== 1, onClick: () => D(a) }
    ], v = (a = 1) => {
      r.loading = !0, a && (r.page = a);
      const e = m.is_resolved;
      te({
        page: r.page,
        limit: r.limit,
        title: m.title,
        is_resolved: e === 0 || e === 1 ? e : ""
      }).then((N) => {
        r.data = N.data.data, r.total = N.data.total, r.loading = !1;
      }).catch(() => {
        r.loading = !1;
      });
    }, E = () => {
      k.value || (k.value = !0, ae().then((a) => {
        const e = (a == null ? void 0 : a.data) ?? {};
        V({
          message: Number(e.new) > 0 ? `${t("syncPatchTip")}：新增 ${e.new} 条（共 ${e.total ?? 0} 条）` : t("syncPatchNone"),
          type: "success"
        }), v();
      }).catch((a) => {
        V({ message: (a == null ? void 0 : a.msg) || (a == null ? void 0 : a.message) || t("syncPatchFail"), type: "error" });
      }).finally(() => {
        k.value = !1;
      }));
    }, D = (a) => {
      Number(a.is_resolved) !== 1 && ie.confirm(t("markResolvedTips"), t("warning"), {
        confirmButtonText: t("confirm"),
        cancelButtonText: t("cancel"),
        type: "warning"
      }).then(() => {
        oe(Number(a.id), 1).then(() => {
          v(), h.value && c.value.id === Number(a.id) && F(Number(a.id));
        }).catch((e) => {
          V({ message: (e == null ? void 0 : e.msg) || (e == null ? void 0 : e.message) || t("resolveFail"), type: "error" });
        });
      }).catch(() => {
      });
    }, F = (a) => {
      w.value = !0, se(a).then((e) => {
        c.value = (e == null ? void 0 : e.data) ?? {}, w.value = !1;
      }).catch(() => {
        c.value = {}, w.value = !1;
      });
    }, H = (a) => {
      c.value = {}, h.value = !0, F(Number(a.id));
    }, j = (a) => {
      a.attach_url && window.open(a.attach_url, "_blank");
    };
    return v(), (a, e) => {
      const N = _("el-input"), C = _("el-form-item"), P = _("el-option"), q = _("el-select"), b = _("el-button"), G = _("el-form"), J = _("el-card"), f = _("el-table-column"), x = _("el-tag"), K = _("el-table"), O = _("el-icon"), Q = _("el-empty"), W = _("el-drawer"), S = Y("loading");
      return u(), y("div", {
        ref_key: "pageRef",
        ref: L,
        class: "main-container table-fill-page",
        style: Z(o(M))
      }, [
        l("div", me, [
          n(J, {
            class: "box-card !border-none table-search-wrap table-search-wrap--panel table-fill-page__search",
            shadow: "never"
          }, {
            default: d(() => [
              n(G, {
                inline: !0,
                model: m,
                ref_key: "searchFormRef",
                ref: z
              }, {
                default: d(() => [
                  n(C, {
                    label: o(t)("patchTitle"),
                    prop: "title"
                  }, {
                    default: d(() => [
                      n(N, {
                        modelValue: m.title,
                        "onUpdate:modelValue": e[0] || (e[0] = (s) => m.title = s),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: o(t)("patchTitlePlaceholder")
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(C, {
                    label: o(t)("resolveStatus"),
                    prop: "is_resolved"
                  }, {
                    default: d(() => [
                      n(q, {
                        modelValue: m.is_resolved,
                        "onUpdate:modelValue": e[1] || (e[1] = (s) => m.is_resolved = s),
                        clearable: "",
                        placeholder: o(t)("resolveStatusPlaceholder")
                      }, {
                        default: d(() => [
                          n(P, {
                            label: o(t)("all"),
                            value: ""
                          }, null, 8, ["label"]),
                          n(P, {
                            label: o(t)("unresolved"),
                            value: 0
                          }, null, 8, ["label"]),
                          n(P, {
                            label: o(t)("resolved"),
                            value: 1
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(C, null, {
                    default: d(() => [
                      n(b, {
                        type: "primary",
                        onClick: e[2] || (e[2] = (s) => v())
                      }, {
                        default: d(() => [
                          p(i(o(t)("search")), 1)
                        ]),
                        _: 1
                      }),
                      n(b, {
                        onClick: e[3] || (e[3] = (s) => U(z.value))
                      }, {
                        default: d(() => [
                          p(i(o(t)("reset")), 1)
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
          l("div", ve, [
            n(_e, {
              title: o(I),
              selectable: !1
            }, {
              actions: d(() => [
                n(b, {
                  type: "primary",
                  loading: k.value,
                  onClick: E
                }, {
                  default: d(() => [
                    p(i(o(t)("syncPatch")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            }, 8, ["title"]),
            l("div", fe, [
              $((u(), T(K, {
                height: "100%",
                data: r.data,
                size: "large"
              }, {
                empty: d(() => [
                  l("span", null, i(r.loading ? "" : o(t)("emptyData")), 1)
                ]),
                default: d(() => [
                  n(f, {
                    label: o(t)("patchNo"),
                    "min-width": "120"
                  }, {
                    default: d(({ row: s }) => [
                      l("span", null, i(s.patch_no || "-"), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("appName"),
                    "min-width": "130"
                  }, {
                    default: d(({ row: s }) => [
                      l("span", null, i(s.app_key || "-"), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("patchTitle"),
                    "min-width": "200",
                    "show-overflow-tooltip": ""
                  }, {
                    default: d(({ row: s }) => [
                      l("span", null, i(s.title || "-"), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("frameworkVersion"),
                    "min-width": "120"
                  }, {
                    default: d(({ row: s }) => [
                      l("span", null, i(s.app_version || s.framework_version_no || "-"), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("releaseTime"),
                    "min-width": "160"
                  }, {
                    default: d(({ row: s }) => [
                      l("span", null, i(s.release_time || "-"), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("resolveStatus"),
                    "min-width": "110"
                  }, {
                    default: d(({ row: s }) => [
                      n(x, {
                        type: Number(s.is_resolved) === 1 ? "success" : "warning",
                        size: "small",
                        effect: "light"
                      }, {
                        default: d(() => [
                          p(i(s.resolve_name), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(f, {
                    label: o(t)("operation"),
                    align: "right",
                    fixed: "right",
                    width: "220"
                  }, {
                    default: d(({ row: s }) => [
                      n(ce, {
                        actions: A(s)
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [S, r.loading]
              ])
            ]),
            n(re, {
              "current-page": r.page,
              "onUpdate:current-page": e[4] || (e[4] = (s) => r.page = s),
              "page-size": r.limit,
              "onUpdate:page-size": e[5] || (e[5] = (s) => r.limit = s),
              total: r.total,
              onSizeChange: e[6] || (e[6] = (s) => v()),
              onCurrentChange: v
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ]),
        n(W, {
          modelValue: h.value,
          "onUpdate:modelValue": e[10] || (e[10] = (s) => h.value = s),
          class: "patch-drawer",
          "with-header": !1,
          size: "560px"
        }, {
          default: d(() => [
            $((u(), y("div", he, [
              c.value.id ? (u(), y(ee, { key: 0 }, [
                l("div", be, [
                  l("div", ge, [
                    l("div", ye, [
                      l("h2", {
                        class: "patch-detail__title",
                        title: c.value.title || "-"
                      }, i(c.value.title || "-"), 9, ke),
                      l("div", we, [
                        n(x, {
                          size: "small",
                          effect: "plain"
                        }, {
                          default: d(() => [
                            p(i(c.value.patch_no || "-"), 1)
                          ]),
                          _: 1
                        }),
                        n(x, {
                          size: "small",
                          effect: "plain"
                        }, {
                          default: d(() => [
                            p(i(c.value.app_key || "-"), 1)
                          ]),
                          _: 1
                        }),
                        n(x, {
                          size: "small",
                          effect: "plain",
                          type: Number(c.value.is_resolved) === 1 ? "success" : "warning"
                        }, {
                          default: d(() => [
                            p(i(c.value.resolve_name), 1)
                          ]),
                          _: 1
                        }, 8, ["type"])
                      ])
                    ])
                  ]),
                  l("button", {
                    type: "button",
                    class: "patch-detail__close",
                    "aria-label": "关闭",
                    onClick: e[7] || (e[7] = (s) => h.value = !1)
                  }, [
                    n(O, null, {
                      default: d(() => [
                        n(o(de))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                l("div", Ne, [
                  l("dl", xe, [
                    l("div", null, [
                      l("dt", null, i(o(t)("appName")), 1),
                      l("dd", null, i(c.value.app_key || "-"), 1)
                    ]),
                    l("div", null, [
                      l("dt", null, i(o(t)("frameworkVersion")), 1),
                      l("dd", null, i(c.value.app_version || c.value.framework_version_no || "-"), 1)
                    ]),
                    l("div", null, [
                      l("dt", null, i(o(t)("releaseTime")), 1),
                      l("dd", null, i(c.value.release_time || "-"), 1)
                    ]),
                    l("div", null, [
                      l("dt", null, i(o(t)("syncTime")), 1),
                      l("dd", null, i(c.value.create_time || "-"), 1)
                    ]),
                    l("div", null, [
                      l("dt", null, i(o(t)("resolveStatus")), 1),
                      l("dd", {
                        class: le(Number(c.value.is_resolved) === 1 ? "is-resolved" : "is-unresolved")
                      }, i(c.value.resolve_name), 3)
                    ]),
                    l("div", null, [
                      l("dt", null, i(o(t)("resolvedTime")), 1),
                      l("dd", null, i(Number(c.value.is_resolved) === 1 && c.value.resolved_time || "-"), 1)
                    ])
                  ]),
                  l("div", Te, [
                    l("div", Ce, i(o(t)("patchDesc")), 1),
                    c.value.description ? (u(), y("div", Pe, [
                      l("div", {
                        innerHTML: c.value.description
                      }, null, 8, Ve)
                    ])) : (u(), y("div", ze, i(o(t)("noPatchDesc")), 1))
                  ]),
                  l("div", De, [
                    c.value.attach_url ? (u(), T(b, {
                      key: 0,
                      type: "primary",
                      onClick: e[8] || (e[8] = (s) => j(c.value))
                    }, {
                      default: d(() => [
                        p(i(o(t)("downloadPatch")), 1)
                      ]),
                      _: 1
                    })) : B("", !0),
                    Number(c.value.is_resolved) !== 1 ? (u(), T(b, {
                      key: 1,
                      onClick: e[9] || (e[9] = (s) => D(c.value))
                    }, {
                      default: d(() => [
                        p(i(o(t)("markResolved")), 1)
                      ]),
                      _: 1
                    })) : B("", !0)
                  ])
                ])
              ], 64)) : (u(), T(Q, {
                key: 1,
                description: o(t)("emptyData")
              }, null, 8, ["description"]))
            ])), [
              [S, w.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
const Oe = /* @__PURE__ */ ne(Fe, [["__scopeId", "data-v-0f7d1991"]]);
export {
  Oe as default
};
