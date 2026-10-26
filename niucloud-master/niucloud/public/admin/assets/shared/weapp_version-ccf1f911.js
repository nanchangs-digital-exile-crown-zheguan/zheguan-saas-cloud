import { defineComponent as se, computed as N, ref as f, reactive as $, resolveComponent as g, resolveDirective as pe, openBlock as d, createElementBlock as y, Fragment as E, createElementVNode as u, normalizeStyle as re, unref as l, createVNode as i, withCtx as n, renderList as ce, toDisplayString as r, createTextVNode as m, withDirectives as G, createBlock as h, createCommentVNode as v, pushScopeId as de, popScopeId as me } from "vue";
import { useRoute as ue, useRouter as _e } from "vue-router";
import { al as ge, t as o, fG as fe, fH as ve, fI as be, ao as ye, fJ as he, fK as ke, fL as xe, a as Ce } from "./core-shared-86a0da16.js";
import Te from "./index-d9bf0320.js";
import Ve from "./index-49fea3c5.js";
import Re from "./index-7801d241.js";
import Se from "./index-f2ddc453.js";
import { u as we } from "./useTablePageHeight-33d60cf6.js";
import { ElMessageBox as L, ElMessage as F } from "element-plus";
import De from "./index-cbeed3e7.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const ze = (x) => (de("data-v-396686b2"), x = x(), me(), x), Pe = { class: "table-fill-page__card" }, Ue = { class: "table-panel mt-[20px] table-fill-page__panel" }, Ie = { class: "table-fill-page__table" }, We = { key: 0 }, Be = {
  key: 0,
  class: "text-error"
}, Ne = /* @__PURE__ */ ze(() => /* @__PURE__ */ u("div", null, "--", -1)), $e = {
  key: 0,
  class: "text-error flex items-center"
}, Ee = { class: "mt-[16px] flex justify-end" }, Ge = { class: "min-h-[150px]" }, Le = { class: "dialog-footer" }, Fe = /* @__PURE__ */ se({
  __name: "weapp_version",
  setup(x) {
    const C = ge(), A = ue(), Ae = _e(), j = A.meta.title, { pageRef: H, pageStyle: M } = we(), J = N(
      () => String(o("updateTips")).split(`
`).map((a) => a.trim()).filter(Boolean)
    ), K = (a) => [
      { label: o("weappVersionUpdate"), loading: T.value == a.group_id, onClick: () => I(a.group_id) },
      { label: o("weappVersionUpdateRecord"), onClick: () => te(a.group_id) },
      { label: o("siteWeappSync"), onClick: () => ae(a.group_id) }
    ], T = f(0), Q = f({}), S = f(!1), s = $({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        site_group_id: ""
      }
    }), p = $({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {}
    }), U = f(""), w = f(!1), q = (a) => {
      U.value = a.fail_reason, w.value = !0;
    }, O = () => {
      window.open("https://doc.press.niucloud.com/php/saas-framework/use/configFAQ/minWaChatUpload.html");
    }, X = (a) => {
      L.confirm(
        o("delWeappVersionTips"),
        o("warning"),
        {
          confirmButtonText: o("confirm"),
          cancelButtonText: o("cancel"),
          type: "warning"
        }
      ).then(() => {
        ve(a.id).then(() => {
          k();
        });
      });
    };
    fe().then(({ data: a }) => {
      Q.value = a;
    });
    const b = f(!1), V = f(""), Y = N(() => ({ site_group_id: V.value })), D = (a) => a.status == 1 && (!a.template_id || a.template_id == "0"), Z = (a) => {
      be(a.id).then(() => {
        k();
      });
    }, I = (a = "") => {
      b.value || (V.value = a, b.value = !0);
    }, ee = () => {
      b.value = !1;
      const a = V.value;
      V.value = "", T.value = a || 0, C.openPendingDetail("weapp_commit", "正在发起同步"), ye("weapp_commit", { site_group_id: a }).then((t) => {
        var c;
        T.value = 0;
        const _ = (c = t == null ? void 0 : t.data) == null ? void 0 : c.task_key;
        if (!_) {
          C.closePendingDetail(), F.error("同步任务创建失败");
          return;
        }
        C.openDetail(_, "weapp_commit");
      }).catch((t) => {
        T.value = 0, C.closePendingDetail(), F({ message: (t == null ? void 0 : t.msg) || (t == null ? void 0 : t.message) || "同步任务创建失败", type: "error" });
      });
    }, k = (a = 1) => {
      s.loading = !0, s.page = a, he({
        page: s.page,
        limit: s.limit,
        site_group_id: s.searchParam.site_group_id
      }).then((t) => {
        s.loading = !1, s.data = t.data.data, s.total = t.data.total;
      }).catch(() => {
        s.loading = !1;
      });
    }, z = (a = 1) => {
      p.loading = !0, p.page = a, ke({
        page: p.page,
        limit: p.limit
      }).then((t) => {
        p.loading = !1, p.data = t.data.data, p.total = t.data.total;
      }).catch(() => {
        p.loading = !1;
      });
    };
    z();
    const te = (a) => {
      s.searchParam.site_group_id = a, k(), S.value = !0;
    }, ae = (a) => {
      L.confirm(
        o("syncSiteWeappTips"),
        o("warning"),
        {
          confirmButtonText: o("confirm"),
          cancelButtonText: o("cancel"),
          type: "warning"
        }
      ).then(() => {
        xe({ site_group_id: a });
      });
    };
    return (a, t) => {
      const _ = g("el-button"), c = g("el-table-column"), W = g("el-table"), oe = g("Warning"), le = g("el-icon"), ne = g("el-pagination"), P = g("el-dialog"), ie = g("el-scrollbar"), B = pe("loading");
      return d(), y(E, null, [
        u("div", {
          ref_key: "pageRef",
          ref: H,
          class: "main-container table-fill-page",
          style: re(l(M))
        }, [
          u("div", Pe, [
            i(Se, { closable: "" }, {
              default: n(() => [
                (d(!0), y(E, null, ce(l(J), (e, R) => (d(), y("p", { key: R }, r(e), 1))), 128))
              ]),
              _: 1
            }),
            u("div", Ue, [
              i(Re, {
                title: l(j),
                selectable: !1
              }, {
                actions: n(() => [
                  i(_, {
                    type: "primary",
                    onClick: t[0] || (t[0] = (e) => I())
                  }, {
                    default: n(() => [
                      m(r(l(o)("oneClickSync")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"]),
              u("div", Ie, [
                G((d(), h(W, {
                  height: "100%",
                  data: p.data,
                  size: "large"
                }, {
                  empty: n(() => [
                    u("span", null, r(p.loading ? "" : l(o)("emptyData")), 1)
                  ]),
                  default: n(() => [
                    i(c, {
                      prop: "group_name",
                      label: l(o)("groupName")
                    }, null, 8, ["label"]),
                    i(c, {
                      label: l(o)("userVersion"),
                      "show-overflow-tooltip": !0
                    }, {
                      default: n(({ row: e }) => [
                        m(r(e.commit_record.user_version || "--"), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(c, {
                      prop: "create_time",
                      label: l(o)("createTime")
                    }, {
                      default: n(({ row: e }) => [
                        m(r(e.commit_record.create_time || "--"), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(c, {
                      prop: "create_time",
                      label: l(o)("status")
                    }, {
                      default: n(({ row: e }) => [
                        e.commit_record.user_version ? (d(), y("div", We, [
                          m(r(e.commit_record.status_name) + " ", 1),
                          e.commit_record.status == 1 && e.commit_record.template_id == "0" ? (d(), y("div", Be, r(l(o)("syncTemplateError")), 1)) : v("", !0)
                        ])) : v("", !0),
                        Ne
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(c, {
                      prop: "create_time",
                      label: l(o)("templateID")
                    }, {
                      default: n(({ row: e }) => [
                        m(r(e.commit_record.template_id || "--"), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(c, {
                      label: l(o)("operation"),
                      align: "right",
                      fixed: "right",
                      width: "360"
                    }, {
                      default: n(({ row: e }) => [
                        i(Te, {
                          actions: K(e)
                        }, null, 8, ["actions"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])), [
                  [B, p.loading]
                ])
              ])
            ]),
            i(Ve, {
              "current-page": p.page,
              "onUpdate:current-page": t[1] || (t[1] = (e) => p.page = e),
              "page-size": p.limit,
              "onUpdate:page-size": t[2] || (t[2] = (e) => p.limit = e),
              total: p.total,
              onSizeChange: t[3] || (t[3] = (e) => z()),
              onCurrentChange: z
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ], 4),
        i(P, {
          modelValue: S.value,
          "onUpdate:modelValue": t[7] || (t[7] = (e) => S.value = e),
          title: l(o)("weappVersionUpdateRecord"),
          width: "1000px",
          "destroy-on-close": !0
        }, {
          default: n(() => [
            G((d(), h(W, {
              data: s.data,
              size: "large"
            }, {
              empty: n(() => [
                u("span", null, r(s.loading ? "" : l(o)("emptyData")), 1)
              ]),
              default: n(() => [
                i(c, {
                  prop: "user_version",
                  label: l(o)("userVersion")
                }, null, 8, ["label"]),
                i(c, {
                  label: l(o)("status"),
                  prop: "status_name"
                }, {
                  default: n(({ row: e }) => [
                    u("div", null, r(e.status_name), 1),
                    D(e) ? (d(), y("div", $e, [
                      i(le, { class: "mr-[2px]" }, {
                        default: n(() => [
                          i(oe)
                        ]),
                        _: 1
                      }),
                      m(" 尚未同步到模板库 ")
                    ])) : v("", !0)
                  ]),
                  _: 1
                }, 8, ["label"]),
                i(c, {
                  prop: "create_time",
                  label: l(o)("createTime")
                }, null, 8, ["label"]),
                i(c, {
                  label: l(o)("operation"),
                  align: "right",
                  fixed: "right",
                  width: "220"
                }, {
                  default: n(({ row: e }) => [
                    D(e) ? (d(), h(_, {
                      key: 0,
                      type: "primary",
                      link: "",
                      onClick: (R) => Z(e)
                    }, {
                      default: n(() => [
                        m("同步模板库")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : v("", !0),
                    e.status == 0 || e.status == -1 || D(e) ? (d(), h(_, {
                      key: 1,
                      type: "primary",
                      link: "",
                      onClick: (R) => X(e)
                    }, {
                      default: n(() => [
                        m(r(l(o)("delete")), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : v("", !0),
                    e.status == -1 ? (d(), h(_, {
                      key: 2,
                      type: "primary",
                      link: "",
                      onClick: (R) => q(e)
                    }, {
                      default: n(() => [
                        m(r(l(o)("failReason")), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : v("", !0)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [B, s.loading]
            ]),
            u("div", Ee, [
              i(ne, {
                "current-page": s.page,
                "onUpdate:current-page": t[4] || (t[4] = (e) => s.page = e),
                "page-size": s.limit,
                "onUpdate:page-size": t[5] || (t[5] = (e) => s.limit = e),
                layout: "total, sizes, prev, pager, next, jumper",
                total: s.total,
                onSizeChange: t[6] || (t[6] = (e) => k()),
                onCurrentChange: k
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        i(P, {
          modelValue: b.value,
          "onUpdate:modelValue": t[8] || (t[8] = (e) => b.value = e),
          title: "同步前校验",
          width: "580px",
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          "destroy-on-close": !0
        }, {
          default: n(() => [
            u("div", Ge, [
              b.value ? (d(), h(De, {
                key: 0,
                scene: "weapp_commit",
                params: l(Y),
                "auto-next": !0,
                "auto-next-delay": 500,
                "show-prev": !1,
                "next-text": l(o)("nextStep"),
                onNext: ee
              }, null, 8, ["params", "next-text"])) : v("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        i(P, {
          modelValue: w.value,
          "onUpdate:modelValue": t[10] || (t[10] = (e) => w.value = e),
          title: l(o)("failReason"),
          width: "60%"
        }, {
          footer: n(() => [
            u("span", Le, [
              i(_, {
                type: "primary",
                onClick: O
              }, {
                default: n(() => [
                  m(r(l(o)("helpInfo")), 1)
                ]),
                _: 1
              }),
              i(_, {
                onClick: t[9] || (t[9] = (e) => a.failReasonDialogVisible = !1)
              }, {
                default: n(() => [
                  m(r(l(o)("close")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: n(() => [
            i(ie, { class: "h-[60vh] w-full whitespace-pre-wrap p-[20px]" }, {
              default: n(() => [
                m(r(U.value), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const ot = /* @__PURE__ */ Ce(Fe, [["__scopeId", "data-v-396686b2"]]);
export {
  ot as default
};
