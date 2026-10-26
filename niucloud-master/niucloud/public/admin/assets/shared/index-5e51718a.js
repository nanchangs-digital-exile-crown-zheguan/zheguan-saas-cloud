import { defineComponent as ie, ref as o, watch as pe, resolveComponent as A, openBlock as P, createElementBlock as G, Fragment as de, createVNode as r, withCtx as i, createElementVNode as c, createBlock as H, unref as g, createCommentVNode as I, createTextVNode as b, toDisplayString as p, pushScopeId as re, popScopeId as ce, nextTick as fe } from "vue";
import { al as ve, o as _e, t as m, am as ge, an as me, ao as ke, a as xe } from "./core-shared-86a0da16.js";
import { c as ye } from "./module-0abf3a60.js";
import he from "./index-cbeed3e7.js";
import { ElMessage as y } from "element-plus";
import { useRouter as be } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const Ve = (V) => (re("data-v-0efefb60"), V = V(), ce(), V), we = { class: "min-h-[150px]" }, Ce = {
  key: 0,
  class: "p-[16px] border-[1px] rounded-[8px] border border-solid border-[#ebeef5]"
}, Ne = { class: "flex justify-between items-center" }, Ae = { class: "text-[14px] text-[#374151] mt-[10px] mb-[10px]" }, Pe = { class: "text-[14px] text-[#9699B6]" }, Be = { class: "dialog-footer" }, Ue = /* @__PURE__ */ Ve(() => /* @__PURE__ */ c("div", { class: "flex items-center" }, [
  /* @__PURE__ */ c("span", null, "如需升级框架，请点击升级框架操作。")
], -1)), Te = { class: "dialog-footer" }, Se = /* @__PURE__ */ ie({
  __name: "index",
  emits: ["complete"],
  setup(V, { expose: J, emit: Q }) {
    const X = be(), f = ve(), j = "880px", v = o(!1), h = o(!1), n = o(null);
    let B = null;
    const U = o(!0), T = o(""), s = o(!1), w = o({
      is_need_backup: !1,
      is_need_cloudbuild: !1
    }), k = o(!1), x = o(!1), E = o(""), F = o(""), $ = o("app"), C = o("");
    _e().then((l) => {
      C.value = l.data.version.version;
    });
    const N = o("");
    ye().then(({ data: l }) => {
      N.value = l.last_version;
    });
    const Y = (l, e) => isNaN(parseInt(e.replaceAll(".", ""))) || isNaN(parseInt(l.replaceAll(".", ""))) ? !1 : parseInt(e.replaceAll(".", "")) > parseInt(l.replaceAll(".", "")), Z = (l) => (l || []).map((e) => {
      const a = (e == null ? void 0 : e.app) || {};
      return {
        ...e,
        icon: a.icon || a.app_icon || a.logo || "",
        type_label: a.app_type === "app" ? "应用" : "插件"
      };
    }), K = ["success", "failed", "canceled", "rolled_back", "rollback_failed"], L = (l) => ge().then(({ data: e }) => (Array.isArray(e == null ? void 0 : e.list) && e.list.length ? e.list : e != null && e.task_key ? [e] : []).find((t) => (t == null ? void 0 : t.task_type) === l && !K.includes(String((t == null ? void 0 : t.status) ?? ""))) ?? null), R = (l = "", e = null, a = {}) => {
      L("upgrade").then((t) => {
        if (t) {
          S(t.task_key), e && e();
          return;
        }
        if (l && l.indexOf("niucloud-admin") == -1 && C.value != N.value && Y(C.value, N.value)) {
          E.value = a.install_info.version, F.value = a.version, $.value = a.type, x.value = !0, e && e();
          return;
        }
        s.value || (s.value = !0, T.value = l === "niucloud-admin" ? "" : l, ee(), B = me(l).then(({ data: d }) => {
          var O, W;
          s.value = !1, n.value = d, n.value.content = Z(n.value.content);
          const _ = ((W = (O = n.value) == null ? void 0 : O.upgrade_apps) == null ? void 0 : W.join(",")) ?? "";
          T.value = _ === "niucloud-admin" ? "" : _;
          const ue = (n.value.content || []).filter((D) => {
            var q;
            return (q = D == null ? void 0 : D.version_list) == null ? void 0 : q.length;
          }).length;
          U.value = ue > 0, e && e();
        }).catch(() => {
          s.value = !1, e && e();
        }));
      }).catch((t) => {
        s.value = !1, y({ message: (t == null ? void 0 : t.msg) || (t == null ? void 0 : t.message) || "获取升级任务状态失败，请稍后重试", type: "error" }), e && e();
      });
    }, S = (l) => {
      l && f.openDetail(l, "upgrade");
    }, ee = () => {
      k.value = !1, h.value = !0;
    }, le = async () => {
      var e;
      k.value = !0;
      const l = !n.value;
      if (fe(() => {
        h.value = !1, l && f.openPendingDetail("upgrade", "正在获取升级内容");
      }), B && await B.catch(() => null), !n.value) {
        l && f.closePendingDetail(), y({ message: "获取升级内容失败，请重新发起升级", type: "error" });
        return;
      }
      if (!U.value) {
        l && f.closePendingDetail();
        const a = (((e = n.value) == null ? void 0 : e.not_support_apps) || []).map((t) => (t == null ? void 0 : t.app_name) || (t == null ? void 0 : t.app_key)).filter(Boolean);
        y({
          message: a.length ? `${a.join("、")} 未上架应用市场，暂不支持在线升级` : "暂无可升级的内容",
          type: "warning"
        });
        return;
      }
      if (!n.value.last_backup) {
        z();
        return;
      }
      l && f.closePendingDetail(), v.value = !0;
    }, z = () => {
      var a;
      if (!k.value || s.value)
        return;
      s.value = !0, v.value = !1;
      const l = ((a = n.value) == null ? void 0 : a.upgrade_apps) || [], e = l.join(",") != "niucloud-admin" ? l.join(",") : "";
      f.openPendingDetail("upgrade", "正在发起升级"), ke("upgrade", { addon: e, data: w.value }).then((t) => {
        var _;
        s.value = !1, Q("complete");
        const d = (_ = t == null ? void 0 : t.data) == null ? void 0 : _.task_key;
        if (!d) {
          f.closePendingDetail(), y({ message: "升级任务创建失败", type: "error" });
          return;
        }
        S(d);
      }).catch((t) => {
        s.value = !1, f.closePendingDetail(), y({ message: (t == null ? void 0 : t.msg) || (t == null ? void 0 : t.message) || "升级发起失败", type: "error" });
      });
    };
    let M = null;
    const De = () => {
      L("upgrade").then((l) => {
        l && (M && M.close(), S(l.task_key));
      }).catch((l) => {
        y({ message: (l == null ? void 0 : l.msg) || (l == null ? void 0 : l.message) || "获取升级任务状态失败，请稍后重试", type: "error" });
      });
    }, te = () => {
      x.value = !1, R("niucloud-admin");
    }, ae = (l) => {
      l();
    }, oe = (l) => {
      x.value = !1, l();
    };
    pe(
      () => v.value,
      () => {
        v.value || ne();
      }
    );
    const ne = () => {
      s.value = !1, k.value = !1, w.value = {
        is_need_backup: !0,
        is_need_cloudbuild: !1
      };
    }, Ie = o(0), se = () => {
      const l = X.resolve({
        path: "/tools/task_records"
      });
      window.open(l.href, "_blank");
    };
    return J({
      open: R,
      loading: s
    }), (l, e) => {
      const a = A("el-dialog"), t = A("el-checkbox"), d = A("el-button"), _ = A("el-scrollbar");
      return P(), G(de, null, [
        r(a, {
          modelValue: h.value,
          "onUpdate:modelValue": e[2] || (e[2] = (u) => h.value = u),
          title: "升级前校验",
          width: j,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1
        }, {
          default: i(() => [
            c("div", we, [
              h.value ? (P(), H(he, {
                key: 0,
                scene: "upgrade",
                params: { addon: T.value },
                "auto-next": !0,
                "auto-next-delay": 500,
                "show-prev": !1,
                "next-text": g(m)("nextStep"),
                onNext: le,
                onPassed: e[0] || (e[0] = (u) => k.value = !0),
                onFailed: e[1] || (e[1] = (u) => k.value = !1)
              }, null, 8, ["params", "next-text"])) : I("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        r(a, {
          modelValue: v.value,
          "onUpdate:modelValue": e[5] || (e[5] = (u) => v.value = u),
          title: "升级",
          width: j,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          "before-close": ae
        }, {
          footer: i(() => [
            c("div", Be, [
              r(d, {
                onClick: e[4] || (e[4] = (u) => v.value = !1)
              }, {
                default: i(() => [
                  b(p(g(m)("cancel")), 1)
                ]),
                _: 1
              }),
              r(d, {
                type: "primary",
                loading: s.value,
                disabled: !U.value,
                onClick: z
              }, {
                default: i(() => [
                  b(p(g(m)("upgrade.upgradeButton")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])
          ]),
          default: i(() => [
            n.value ? (P(), H(_, {
              key: 0,
              "max-height": "50vh"
            }, {
              default: i(() => [
                n.value.last_backup ? (P(), G("div", Ce, [
                  c("div", Ne, [
                    r(t, {
                      modelValue: w.value.is_need_backup,
                      "onUpdate:modelValue": e[3] || (e[3] = (u) => w.value.is_need_backup = u),
                      label: g(m)("upgrade.isNeedBackup"),
                      "true-value": !0,
                      "false-value": !1,
                      size: "large"
                    }, null, 8, ["modelValue", "label"]),
                    r(d, {
                      link: "",
                      type: "primary",
                      class: "!text-[#9699B6]",
                      onClick: se
                    }, {
                      default: i(() => [
                        b(p(g(m)("upgrade.isNeedBackupBtn")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  c("div", Ae, p(g(m)("upgrade.isNeedBackupTips")), 1),
                  c("div", Pe, p(g(m)("上次备份时间：")) + p(n.value.last_backup.complete_time), 1)
                ])) : I("", !0)
              ]),
              _: 1
            })) : I("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        r(a, {
          modelValue: x.value,
          "onUpdate:modelValue": e[7] || (e[7] = (u) => x.value = u),
          title: "升级提示",
          width: "500",
          "before-close": oe
        }, {
          footer: i(() => [
            c("div", Te, [
              r(d, {
                type: "primary",
                onClick: te
              }, {
                default: i(() => [
                  b("升级框架")
                ]),
                _: 1
              }),
              r(d, {
                onClick: e[6] || (e[6] = (u) => x.value = !1)
              }, {
                default: i(() => [
                  b("取消")
                ]),
                _: 1
              })
            ])
          ]),
          default: i(() => [
            c("p", null, "您当前使用的" + p($.value == "app" ? "应用" : "插件") + "版本是 " + p(E.value) + "，若想升级到 " + p(F.value) + " 版本，需要先把框架从 v" + p(C.value) + " 升级到 v" + p(N.value) + " 。", 1),
            Ue
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const qe = /* @__PURE__ */ xe(Se, [["__scopeId", "data-v-0efefb60"]]);
export {
  qe as default
};
