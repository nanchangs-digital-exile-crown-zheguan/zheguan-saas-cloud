import { defineComponent as nt, markRaw as q, ref as d, reactive as re, computed as de, watch as st, onMounted as it, onBeforeUnmount as ct, resolveComponent as v, resolveDirective as rt, openBlock as r, createElementBlock as _, createVNode as a, withCtx as n, createTextVNode as u, createElementVNode as s, unref as y, withDirectives as ue, Fragment as T, renderList as N, normalizeStyle as pe, createBlock as h, resolveDynamicComponent as Re, toDisplayString as p, createCommentVNode as b, normalizeClass as dt, Teleport as ut, Transition as pt, pushScopeId as _t, popScopeId as mt } from "vue";
import { ElMessage as V, ElMessageBox as vt } from "element-plus";
import { Monitor as ft, Iphone as kt, ChatDotRound as gt, Box as Le, Refresh as _e, ArrowDown as De, CircleCheckFilled as yt } from "@element-plus/icons-vue";
import { al as ht, gY as Ne, gZ as bt, g_ as xt, g$ as wt, ao as Ct, am as Vt, h0 as $t, h1 as zt, h2 as Tt, a as St } from "./core-shared-86a0da16.js";
import { a as Mt } from "./addon-67a0bf34.js";
import Bt from "./index-49fea3c5.js";
import Ue from "./index-7801d241.js";
import Rt from "./index-f2ddc453.js";
import Lt from "./index-cbeed3e7.js";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
const U = (P) => (_t("data-v-17b04bb9"), P = P(), mt(), P), Dt = { class: "main-container page-sections w-full" }, Nt = { class: "flex items-center justify-between mb-4" }, Ut = /* @__PURE__ */ U(() => /* @__PURE__ */ s("span", { class: "text-[16px] font-bold" }, "编译端口", -1)), Pt = { class: "grid grid-cols-2 gap-[12px]" }, Et = { class: "port-layer-base" }, It = { class: "port-card" }, At = { class: "min-w-0 flex-1" }, Ft = { class: "port-title" }, jt = { class: "port-desc" }, Ot = {
  key: 0,
  class: "port-version"
}, Ht = { class: "port-card-side" }, Kt = { class: "flex items-center gap-[8px]" }, Yt = ["onMouseenter"], qt = {
  key: 0,
  class: "col-span-2 py-[20px] text-center text-[13px] text-[#94a3b8]"
}, Gt = {
  key: 0,
  class: "table-panel"
}, Zt = { class: "flex flex-col" }, Jt = { class: "font-medium" }, Qt = { class: "text-[12px] text-[#94a3b8]" }, Wt = { class: "flex items-center gap-[8px]" }, Xt = { class: "w-[38px] text-right text-[12px] text-[#6b7280]" }, el = { class: "text-[13px] text-[var(--el-text-color-regular)]" }, tl = { class: "table-panel" }, ll = { class: "flex items-center gap-[6px]" }, ol = { class: "text-[12px] text-[var(--el-text-color-regular)]" }, al = /* @__PURE__ */ U(() => /* @__PURE__ */ s("div", { class: "py-[30px] text-[13px] text-[#94a3b8]" }, "暂无版本记录", -1)), nl = /* @__PURE__ */ U(() => /* @__PURE__ */ s("div", { class: "dialog-section-title" }, "选择编译范围", -1)), sl = { class: "scope-list" }, il = ["onClick"], cl = { class: "min-w-0 flex-1" }, rl = { class: "scope-label" }, dl = { class: "scope-desc" }, ul = {
  key: 1,
  class: "scope-radio"
}, pl = /* @__PURE__ */ U(() => /* @__PURE__ */ s("div", { class: "dialog-section-title mt-[14px]" }, [
  /* @__PURE__ */ u(" 选择插件"),
  /* @__PURE__ */ s("span", { class: "ml-[6px] text-[12px] font-normal text-[#8b90a7]" }, "（可多选）")
], -1)), _l = {
  key: 0,
  class: "flex h-full flex-col"
}, ml = { class: "port-card" }, vl = { class: "min-w-0 flex-1" }, fl = { class: "port-title" }, kl = { class: "port-desc" }, gl = {
  key: 0,
  class: "port-version"
}, yl = { class: "port-card-side" }, hl = { class: "flex items-center gap-[8px]" }, bl = { class: "port-command-trigger" }, xl = { class: "port-command-panel is-open" }, wl = { class: "port-command-body" }, Cl = /* @__PURE__ */ U(() => /* @__PURE__ */ s("div", { class: "port-command-head" }, "编译命令", -1)), Vl = { class: "flex items-center justify-between gap-[8px]" }, $l = { class: "port-command-scope" }, zl = { class: "port-command-text" }, Tl = {
  key: 0,
  class: "port-command-empty"
}, Sl = /* @__PURE__ */ nt({
  __name: "cloud_compile",
  setup(P) {
    const C = ht(), Pe = {
      Monitor: q(ft),
      Iphone: q(kt),
      ChatDotRound: q(gt),
      Box: q(Le)
    }, me = (e) => Pe[e] || Le, m = d(null), ve = d({});
    let S = null;
    const Ee = (e, t) => {
      if ($(), m.value && m.value.key === e.key)
        return;
      const i = t.currentTarget.closest(".port-card-wrap");
      if (!i)
        return;
      const c = i.getBoundingClientRect(), w = i.querySelector(".port-card"), D = w ? w.getBoundingClientRect().height : c.height, z = Math.floor(window.innerHeight - c.top - c.height - 16);
      m.value = e, ve.value = {
        position: "fixed",
        zIndex: "2000",
        boxSizing: "border-box",
        left: `${c.left}px`,
        top: `${Math.max(8, c.top)}px`,
        width: `${c.width}px`,
        minHeight: `${c.height}px`,
        "--port-card-h": `${D}px`,
        "--port-panel-max": `${Math.min(Math.max(z, 150), 460)}px`
      };
    }, $ = () => {
      S !== null && (clearTimeout(S), S = null);
    }, fe = (e) => {
      const t = e == null ? void 0 : e.relatedTarget;
      t instanceof Element && t.closest(".port-float") || ($(), S = window.setTimeout(() => {
        m.value = null, S = null;
      }, 120));
    }, ke = (e) => {
      $();
      const t = m.value;
      m.value = null, t && e(t);
    }, E = () => {
      $(), m.value = null;
    }, Ie = (e) => {
      if (!e)
        return;
      const t = () => V.success("命令已复制");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(e).then(t).catch(() => ge(e, t));
        return;
      }
      ge(e, t);
    }, ge = (e, t) => {
      const o = document.createElement("textarea");
      o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.appendChild(o), o.select();
      try {
        document.execCommand("copy") ? t() : V.warning("复制失败，请手动选择复制");
      } catch {
        V.warning("复制失败，请手动选择复制");
      } finally {
        document.body.removeChild(o);
      }
    }, M = d([]), I = d(!1), A = d(!1), F = () => {
      I.value = !0, wt().then((e) => {
        M.value = (e == null ? void 0 : e.data) ?? [];
      }).catch(() => {
        M.value = [];
      }).finally(() => {
        I.value = !1;
      });
    }, B = d(!1), Ae = d(null), ye = d({}), G = d(null), he = (e, t = {}, o = {}) => {
      G.value = { port: e, options: t, versionInfo: o }, ye.value = {
        scope: t.scope || "all",
        port: e != null && e.key ? [e.key] : [],
        addon: t.addon || []
      }, B.value = !0;
    }, Fe = () => {
      const e = G.value;
      B.value = !1, G.value = null, e && be(e.port, e.options, e.versionInfo);
    }, be = (e, t = {}, o = {}) => {
      !e || !e.key || (A.value = !0, C.openPendingDetail("cloud_build", "正在发起编译"), Ct("cloud_build", {
        scope: t.scope || "all",
        port: [e.key],
        addon: t.addon || [],
        ...o
      }).then(async (i) => {
        var w;
        const c = (w = i == null ? void 0 : i.data) == null ? void 0 : w.task_key;
        if (!c) {
          C.closePendingDetail(), V.error("任务创建失败");
          return;
        }
        await C.start(c), await H(), X({ task_key: c });
      }).catch((i) => {
        C.closePendingDetail();
      }).finally(() => {
        A.value = !1;
      }));
    }, R = d(!1), Z = d(null), xe = d(null), g = re({ version: "", remark: "" }), je = {
      version: [{ required: !0, message: "请输入版本号", trigger: "blur" }]
    }, Oe = () => {
      const e = new Date(), t = (o) => String(o).padStart(2, "0");
      return `${e.getFullYear()}.${t(e.getMonth() + 1)}.${t(e.getDate())}.${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}`;
    }, we = (e) => {
      e && (Z.value = e, g.version = Oe(), g.remark = "", R.value = !0);
    }, He = () => {
      var e;
      (e = xe.value) == null || e.validate((t) => {
        t && (he(Z.value, { scope: "all", addon: [] }, {
          version: g.version,
          remark: g.remark
        }), R.value = !1);
      });
    }, L = d(!1), j = d(null), O = d([]), J = d(!1), Ke = de(() => {
      var e;
      return ((e = j.value) == null ? void 0 : e.scopes) ?? [];
    }), k = re({ scope: "all", addon: [] }), Ye = () => {
      O.value.length > 0 || (J.value = !0, Mt().then((e) => {
        const t = Array.isArray(e == null ? void 0 : e.data) ? e.data : Object.values((e == null ? void 0 : e.data) || {});
        O.value = t.map((o) => ({
          key: o.key ?? o.addon,
          label: o.title || o.name || o.key
        })).filter((o) => !!o.key);
      }).catch(() => {
        O.value = [];
      }).finally(() => {
        J.value = !1;
      }));
    }, Ce = (e) => {
      var o, i, c;
      if (!e)
        return;
      j.value = e;
      const t = (e == null ? void 0 : e.scopes) ?? [];
      if (t.length <= 1) {
        const w = (e == null ? void 0 : e.default_scope) || ((o = t[0]) == null ? void 0 : o.value) || "all", D = ((i = t[0]) == null ? void 0 : i.label) || "整体编译", z = e.label || e.name || e.key || "";
        vt.confirm(
          `确定对「${z}」发起云编译（${D}）吗？`,
          "云编译",
          { confirmButtonText: "开始编译", cancelButtonText: "取消", type: "warning" }
        ).then(() => {
          be(e, { scope: (e == null ? void 0 : e.default_scope) || "all", addon: [] });
        }).catch(() => {
        });
        return;
      }
      k.scope = (e == null ? void 0 : e.default_scope) || ((c = t[0]) == null ? void 0 : c.value) || "all", k.addon = [], L.value = !0, Ye();
    }, qe = () => {
      if (k.scope === "plugin" && !k.addon.length) {
        V.warning("请选择要编译的插件");
        return;
      }
      he(j.value, { scope: k.scope, addon: k.addon }), L.value = !1;
    }, Q = d(!1), W = de(() => Object.values(C.tasks).find(
      (t) => (t == null ? void 0 : t.taskType) === "cloud_build" && !Ne.includes(String((t == null ? void 0 : t.status) ?? ""))
    ) ?? null), Ve = de(() => W.value ? [W.value] : []), H = async () => {
      Q.value = !0;
      try {
        const e = await Vt(), t = e == null ? void 0 : e.data, i = (Array.isArray(t == null ? void 0 : t.list) && t.list.length ? t.list : t != null && t.task_key ? [t] : []).find((c) => (c == null ? void 0 : c.task_type) === "cloud_build" && !Ne.includes(String((c == null ? void 0 : c.status) ?? "")));
        i != null && i.task_key && await C.attach(String(i.task_key));
      } catch {
      } finally {
        Q.value = !1;
      }
    };
    st(() => {
      var e;
      return ((e = W.value) == null ? void 0 : e.taskKey) ?? "";
    }, (e, t) => {
      t && !e && (x(), F());
    });
    function Ge(e) {
      return e === "success" ? "success" : e === "failed" || e === "rollback_failed" ? "danger" : e === "canceled" || e === "rolled_back" ? "info" : e === "waiting_input" ? "warning" : "primary";
    }
    function Ze(e) {
      return {
        created: "已创建",
        running: "执行中",
        waiting_input: "等待决策",
        rolling_back: "回滚中",
        success: "成功",
        failed: "失败",
        canceled: "已取消",
        rolled_back: "已回滚",
        rollback_failed: "回滚失败"
      }[e] ?? e ?? "-";
    }
    function Je(e) {
      return e === "success" ? "success" : e === "failed" || e === "rollback_failed" ? "exception" : "";
    }
    const X = (e) => {
      const t = (e == null ? void 0 : e.task_key) ?? (e == null ? void 0 : e.taskKey);
      t && C.openDetail(String(t), "cloud_build");
    }, ee = d([]), te = d(!1), le = d(1), K = d(10), oe = d(0), ae = re({ port_key: "" }), x = () => {
      te.value = !0, bt({
        page: le.value,
        limit: K.value,
        port_key: ae.port_key
      }).then((e) => {
        const t = (e == null ? void 0 : e.data) ?? {};
        ee.value = t.data ?? [], oe.value = t.total ?? 0;
      }).catch(() => {
        ee.value = [];
      }).finally(() => {
        te.value = !1;
      });
    }, Ml = (e) => {
      $t(e.id, e.release_status === 1 ? 0 : 1).then(() => x());
    }, Qe = (e) => {
      zt([e.id]).then(() => x());
    }, We = (e) => X({ task_key: e.task_key }), Xe = async (e) => {
      try {
        const t = await Tt(e.task_key);
        if (!t)
          return;
        if (t != null && t.type && String(t.type).indexOf("application/json") !== -1) {
          V.error("产物不存在或已被清理");
          return;
        }
        const o = URL.createObjectURL(t), i = document.createElement("a");
        i.href = o, i.download = `${e.port_key}-${e.version}.zip`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(o);
      } catch {
        V.error("下载失败");
      }
    }, ne = d(!1), Y = d({}), Bl = (e) => {
      Y.value = e, ne.value = !0;
    }, et = () => {
      H(), x(), F();
    };
    function se(e) {
      if (!e)
        return "-";
      if (typeof e == "string" && (e.includes("-") || e.includes("/")))
        return e;
      const t = Number(e);
      if (!t || Number.isNaN(t))
        return "-";
      const o = new Date(t * 1e3), i = (c) => String(c).padStart(2, "0");
      return `${o.getFullYear()}-${i(o.getMonth() + 1)}-${i(o.getDate())} ${i(o.getHours())}:${i(o.getMinutes())}:${i(o.getSeconds())}`;
    }
    function tt(e) {
      const t = Number(e ?? 0);
      if (t <= 0)
        return "0 B";
      const o = ["B", "KB", "MB", "GB", "TB"], i = Math.min(Math.floor(Math.log(t) / Math.log(1024)), o.length - 1);
      return (i === 0 ? String(t) : (t / Math.pow(1024, i)).toFixed(2)) + " " + o[i];
    }
    return it(() => {
      F(), H(), x(), window.addEventListener("scroll", E, !0), window.addEventListener("resize", E);
    }), ct(() => {
      $(), window.removeEventListener("scroll", E, !0), window.removeEventListener("resize", E);
    }), (e, t) => {
      var Me, Be;
      const o = v("el-button"), i = v("el-icon"), c = v("el-table-column"), w = v("el-tag"), D = v("el-progress"), z = v("el-table"), $e = v("el-option"), ze = v("el-select"), lt = v("el-popconfirm"), Te = v("el-input"), Se = v("el-form-item"), ot = v("el-form"), ie = v("el-dialog"), at = v("el-drawer"), ce = rt("loading");
      return r(), _("div", Dt, [
        a(Rt, null, {
          default: n(() => [
            u(" 发版与云编译都会发起一次云编译任务（全局同时只能执行一个任务）。区别：发版固定按「整体编译」执行并需填写版本信息，编译成功后会生成版本记录；云编译可选择编译范围，不生成版本记录。 ")
          ]),
          _: 1
        }),
        s("div", null, [
          s("div", Nt, [
            Ut,
            a(o, {
              link: "",
              type: "primary",
              size: "small",
              icon: y(_e),
              onClick: F
            }, {
              default: n(() => [
                u("刷新")
              ]),
              _: 1
            }, 8, ["icon"])
          ]),
          ue((r(), _("div", Pt, [
            (r(!0), _(T, null, N(M.value, (l) => (r(), _("div", {
              key: l.key,
              class: "port-card-wrap",
              onMouseleave: fe
            }, [
              s("div", Et, [
                s("div", It, [
                  s("span", {
                    class: "port-icon",
                    style: pe({ color: l.color || "var(--sys-color-primary)" })
                  }, [
                    a(i, { size: 18 }, {
                      default: n(() => [
                        (r(), h(Re(me(l.icon))))
                      ]),
                      _: 2
                    }, 1024)
                  ], 4),
                  s("div", At, [
                    s("div", Ft, p(l.label), 1),
                    s("div", jt, p(l.desc || "-"), 1),
                    l.last_version ? (r(), _("div", Ot, " 最近版本 " + p(l.last_version.version) + " · " + p(se(l.last_version.complete_time)), 1)) : b("", !0)
                  ]),
                  s("div", Ht, [
                    s("div", Kt, [
                      a(o, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: (f) => we(l)
                      }, {
                        default: n(() => [
                          u("发版")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      a(o, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: (f) => Ce(l)
                      }, {
                        default: n(() => [
                          u("云编译")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    s("span", {
                      class: "port-command-trigger",
                      onMouseenter: (f) => Ee(l, f)
                    }, [
                      u(" 编译命令 "),
                      a(i, { size: 12 }, {
                        default: n(() => [
                          a(y(De))
                        ]),
                        _: 1
                      })
                    ], 40, Yt)
                  ])
                ])
              ])
            ], 32))), 128)),
            !M.value.length && !I.value ? (r(), _("div", qt, " 暂无可用端口 ")) : b("", !0)
          ])), [
            [ce, I.value]
          ])
        ]),
        y(Ve).length ? (r(), _("div", Gt, [
          a(Ue, {
            title: "构建任务",
            selectable: !1
          }, {
            actions: n(() => [
              a(o, {
                link: "",
                type: "primary",
                size: "small",
                icon: y(_e),
                onClick: H
              }, {
                default: n(() => [
                  u("刷新")
                ]),
                _: 1
              }, 8, ["icon"])
            ]),
            _: 1
          }),
          ue((r(), h(z, { data: y(Ve) }, {
            default: n(() => [
              a(c, {
                label: "目标/版本",
                "min-width": "180",
                "show-overflow-tooltip": ""
              }, {
                default: n(({ row: l }) => [
                  s("div", Zt, [
                    s("span", Jt, p(l.title || l.taskKey), 1),
                    s("span", Qt, p(l.taskKey), 1)
                  ])
                ]),
                _: 1
              }),
              a(c, {
                label: "状态",
                width: "100"
              }, {
                default: n(({ row: l }) => [
                  a(w, {
                    type: Ge(l.status),
                    size: "small",
                    effect: "light"
                  }, {
                    default: n(() => [
                      u(p(Ze(l.status)), 1)
                    ]),
                    _: 2
                  }, 1032, ["type"])
                ]),
                _: 1
              }),
              a(c, {
                label: "进度",
                "min-width": "170"
              }, {
                default: n(({ row: l }) => [
                  s("div", Wt, [
                    a(D, {
                      percentage: Number(l.progress ?? 0),
                      "stroke-width": 6,
                      "show-text": !1,
                      class: "flex-1",
                      status: Je(l.status)
                    }, null, 8, ["percentage", "status"]),
                    s("span", Xt, p(Number(l.progress ?? 0)) + "%", 1)
                  ])
                ]),
                _: 1
              }),
              a(c, {
                label: "信息",
                "min-width": "180",
                "show-overflow-tooltip": ""
              }, {
                default: n(({ row: l }) => [
                  s("span", el, p(l.stage || "-"), 1)
                ]),
                _: 1
              }),
              a(c, {
                label: "操作",
                width: "90",
                fixed: "right"
              }, {
                default: n(({ row: l }) => [
                  a(o, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: (f) => X(l)
                  }, {
                    default: n(() => [
                      u("详情")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])), [
            [ce, Q.value]
          ])
        ])) : b("", !0),
        s("div", tl, [
          a(Ue, {
            title: "构建版本",
            selectable: !1
          }, {
            actions: n(() => [
              a(ze, {
                modelValue: ae.port_key,
                "onUpdate:modelValue": t[0] || (t[0] = (l) => ae.port_key = l),
                placeholder: "全部端口",
                clearable: "",
                size: "small",
                class: "!w-[140px]",
                onChange: x
              }, {
                default: n(() => [
                  (r(!0), _(T, null, N(M.value, (l) => (r(), h($e, {
                    key: l.key,
                    label: l.label,
                    value: l.key
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              a(o, {
                link: "",
                type: "primary",
                size: "small",
                icon: y(_e),
                onClick: x
              }, {
                default: n(() => [
                  u("刷新")
                ]),
                _: 1
              }, 8, ["icon"])
            ]),
            _: 1
          }),
          ue((r(), h(z, { data: ee.value }, {
            empty: n(() => [
              al
            ]),
            default: n(() => [
              a(c, {
                prop: "port_name",
                label: "端口",
                width: "120"
              }),
              a(c, {
                prop: "version",
                label: "版本",
                width: "150",
                "show-overflow-tooltip": ""
              }),
              a(c, {
                prop: "remark",
                label: "版本说明",
                "min-width": "180",
                "show-overflow-tooltip": ""
              }),
              a(c, {
                label: "产物",
                width: "220"
              }, {
                default: n(({ row: l }) => [
                  s("div", ll, [
                    s("span", ol, p(l.artifact_count) + " 个文件 · " + p(tt(l.artifact_size)), 1),
                    a(o, {
                      link: "",
                      type: "primary",
                      size: "small",
                      onClick: (f) => Xe(l)
                    }, {
                      default: n(() => [
                        u("下载")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              a(c, {
                label: "生成时间",
                width: "170"
              }, {
                default: n(({ row: l }) => [
                  u(p(se(l.complete_time)), 1)
                ]),
                _: 1
              }),
              a(c, {
                label: "操作",
                width: "200",
                fixed: "right"
              }, {
                default: n(({ row: l }) => [
                  a(o, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: (f) => We(l)
                  }, {
                    default: n(() => [
                      u("任务详情")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  a(lt, {
                    title: "确认删除该版本记录？",
                    "confirm-button-text": "删除",
                    "cancel-button-text": "取消",
                    "confirm-button-type": "danger",
                    onConfirm: (f) => Qe(l)
                  }, {
                    reference: n(() => [
                      a(o, {
                        link: "",
                        type: "danger",
                        size: "small"
                      }, {
                        default: n(() => [
                          u("删除")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onConfirm"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])), [
            [ce, te.value]
          ]),
          oe.value > K.value ? (r(), h(Bt, {
            key: 0,
            "current-page": le.value,
            "onUpdate:current-page": t[1] || (t[1] = (l) => le.value = l),
            "page-size": K.value,
            "onUpdate:page-size": t[2] || (t[2] = (l) => K.value = l),
            total: oe.value,
            "page-sizes": [10],
            layout: "total, prev, pager, next",
            onCurrentChange: x
          }, null, 8, ["current-page", "page-size", "total"])) : b("", !0)
        ]),
        a(ie, {
          modelValue: R.value,
          "onUpdate:modelValue": t[6] || (t[6] = (l) => R.value = l),
          title: `新建${((Me = Z.value) == null ? void 0 : Me.label) ?? ""}版本`,
          width: "480px"
        }, {
          footer: n(() => [
            a(o, {
              onClick: t[5] || (t[5] = (l) => R.value = !1)
            }, {
              default: n(() => [
                u("取消")
              ]),
              _: 1
            }),
            a(o, {
              type: "primary",
              loading: A.value,
              onClick: He
            }, {
              default: n(() => [
                u("提交构建")
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          default: n(() => [
            a(ot, {
              ref_key: "releaseFormRef",
              ref: xe,
              model: g,
              rules: je,
              "label-position": "top"
            }, {
              default: n(() => [
                a(Se, {
                  label: "版本号",
                  prop: "version"
                }, {
                  default: n(() => [
                    a(Te, {
                      modelValue: g.version,
                      "onUpdate:modelValue": t[3] || (t[3] = (l) => g.version = l),
                      placeholder: "如 2026.09.16.171304",
                      maxlength: "64"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                a(Se, { label: "版本说明" }, {
                  default: n(() => [
                    a(Te, {
                      modelValue: g.remark,
                      "onUpdate:modelValue": t[4] || (t[4] = (l) => g.remark = l),
                      type: "textarea",
                      rows: 4,
                      maxlength: "200",
                      "show-word-limit": "",
                      placeholder: "本次版本的主要改动",
                      resize: "none"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        a(ie, {
          modelValue: L.value,
          "onUpdate:modelValue": t[9] || (t[9] = (l) => L.value = l),
          title: `云编译 - ${((Be = j.value) == null ? void 0 : Be.label) ?? ""}`,
          width: "520px"
        }, {
          footer: n(() => [
            a(o, {
              onClick: t[8] || (t[8] = (l) => L.value = !1)
            }, {
              default: n(() => [
                u("取消")
              ]),
              _: 1
            }),
            a(o, {
              type: "primary",
              loading: A.value,
              onClick: qe
            }, {
              default: n(() => [
                u("开始编译")
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          default: n(() => [
            nl,
            s("div", sl, [
              (r(!0), _(T, null, N(y(Ke), (l) => (r(), _("div", {
                key: l.value,
                class: dt(["scope-item", { "is-active": k.scope === l.value }]),
                onClick: (f) => k.scope = l.value
              }, [
                s("div", cl, [
                  s("div", rl, p(l.label), 1),
                  s("div", dl, p(l.desc), 1)
                ]),
                a(i, { class: "scope-check" }, {
                  default: n(() => [
                    k.scope === l.value ? (r(), h(y(yt), { key: 0 })) : (r(), _("span", ul))
                  ]),
                  _: 2
                }, 1024)
              ], 10, il))), 128))
            ]),
            k.scope === "plugin" ? (r(), _(T, { key: 0 }, [
              pl,
              a(ze, {
                modelValue: k.addon,
                "onUpdate:modelValue": t[7] || (t[7] = (l) => k.addon = l),
                multiple: "",
                "collapse-tags": "",
                "collapse-tags-tooltip": "",
                placeholder: "请选择插件",
                class: "w-full mt-[8px]",
                loading: J.value
              }, {
                default: n(() => [
                  (r(!0), _(T, null, N(O.value, (l) => (r(), h($e, {
                    key: l.key,
                    label: l.label,
                    value: l.key
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "loading"])
            ], 64)) : b("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        a(ie, {
          modelValue: B.value,
          "onUpdate:modelValue": t[11] || (t[11] = (l) => B.value = l),
          title: "编译环境校验",
          width: "65vw",
          "destroy-on-close": !0,
          "close-on-click-modal": !1,
          "append-to-body": ""
        }, {
          default: n(() => [
            a(Lt, {
              ref_key: "checkRef",
              ref: Ae,
              scene: "cloud_build",
              params: ye.value,
              "auto-next": !0,
              "prev-text": "取消",
              "next-text": "开始编译",
              onNext: Fe,
              onPrev: t[10] || (t[10] = (l) => B.value = !1)
            }, null, 8, ["params"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        a(at, {
          modelValue: ne.value,
          "onUpdate:modelValue": t[12] || (t[12] = (l) => ne.value = l),
          title: Y.value.title || "任务详情",
          size: "60%",
          "destroy-on-close": !0
        }, {
          default: n(() => [
            Y.value.task_key ? (r(), _("div", _l, [
              a(xt, {
                "task-key": Y.value.task_key,
                class: "h-full",
                onCompleted: et
              }, null, 8, ["task-key"])
            ])) : b("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        (r(), h(ut, { to: "body" }, [
          a(pt, { name: "port-float" }, {
            default: n(() => [
              m.value ? (r(), _("div", {
                key: 0,
                class: "port-float",
                style: pe(ve.value),
                onMouseenter: $,
                onMouseleave: fe
              }, [
                s("div", ml, [
                  s("span", {
                    class: "port-icon",
                    style: pe({ color: m.value.color || "var(--sys-color-primary)" })
                  }, [
                    a(i, { size: 18 }, {
                      default: n(() => [
                        (r(), h(Re(me(m.value.icon))))
                      ]),
                      _: 1
                    })
                  ], 4),
                  s("div", vl, [
                    s("div", fl, p(m.value.label), 1),
                    s("div", kl, p(m.value.desc || "-"), 1),
                    m.value.last_version ? (r(), _("div", gl, " 最近版本 " + p(m.value.last_version.version) + " · " + p(se(m.value.last_version.complete_time)), 1)) : b("", !0)
                  ]),
                  s("div", yl, [
                    s("div", hl, [
                      a(o, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: t[13] || (t[13] = (l) => ke((f) => we(f)))
                      }, {
                        default: n(() => [
                          u(" 发版 ")
                        ]),
                        _: 1
                      }),
                      a(o, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: t[14] || (t[14] = (l) => ke((f) => Ce(f)))
                      }, {
                        default: n(() => [
                          u(" 云编译 ")
                        ]),
                        _: 1
                      })
                    ]),
                    s("span", bl, [
                      u(" 编译命令 "),
                      a(i, { size: 12 }, {
                        default: n(() => [
                          a(y(De))
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                s("div", xl, [
                  s("div", wl, [
                    Cl,
                    (r(!0), _(T, null, N(m.value.commands, (l) => (r(), _("div", {
                      key: l.scope,
                      class: "port-command-item"
                    }, [
                      s("div", Vl, [
                        s("span", $l, p(l.scope_label), 1),
                        a(o, {
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: (f) => Ie(l.command)
                        }, {
                          default: n(() => [
                            u("复制")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      s("div", zl, p(l.command), 1)
                    ]))), 128)),
                    !m.value.commands || !m.value.commands.length ? (r(), _("div", Tl, " 暂无编译命令 ")) : b("", !0)
                  ])
                ])
              ], 36)) : b("", !0)
            ]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
const Kl = /* @__PURE__ */ St(Sl, [["__scopeId", "data-v-17b04bb9"]]);
export {
  Kl as default
};
