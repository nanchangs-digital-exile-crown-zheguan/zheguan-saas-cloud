import { defineComponent as me, reactive as j, ref as v, computed as R, resolveComponent as _, resolveDirective as pe, openBlock as p, createElementBlock as V, normalizeStyle as ce, unref as i, createElementVNode as b, createVNode as n, withCtx as r, toDisplayString as c, Fragment as T, renderList as $, createBlock as y, createTextVNode as g, withDirectives as G, createCommentVNode as D } from "vue";
import { t as a, hs as fe, ht as _e, hu as ye, hv as ge, hw as he, hx as ve, hy as be, hz as ke, hA as we } from "./core-shared-86a0da16.js";
import { ElMessageBox as F } from "element-plus";
import Ve from "./index-d9bf0320.js";
import xe from "./index-49fea3c5.js";
import Ce from "./index-7801d241.js";
import Te from "./index-f2ddc453.js";
import { useRoute as $e } from "vue-router";
import De from "./schedule_log-3443c383.js";
import { u as Pe } from "./useTablePageHeight-33d60cf6.js";
import Le from "./cron-info-6cb10abc.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const Ue = { class: "table-fill-page__card" }, Be = { class: "flex justify-between" }, Ee = { class: "table-panel table-fill-page__panel" }, Re = { class: "table-fill-page__table" }, Fe = {
  key: 4,
  class: "w-full text-xs text-[var(--el-text-color-secondary)]"
}, ze = { class: "input-width flex items-center text-sm" }, Ne = { class: "dialog-footer" }, ot = /* @__PURE__ */ me({
  __name: "schedule",
  setup(Me) {
    const H = $e().meta.title, { pageRef: W, pageStyle: J } = Pe(), K = (e) => [
      { label: a("edit"), onClick: () => le(e) },
      { label: a("cronLog"), onClick: () => re(e.id) },
      { label: a("doOne"), onClick: () => oe(e) },
      { label: a("delete"), type: "danger", onClick: () => ae(e.id) }
    ], u = j({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        type: "",
        status: "all"
      }
    }), L = v([]), Q = R(() => {
      const e = [], t = {};
      return L.value.forEach((s) => {
        const d = s.addon || "";
        t[d] === void 0 && (t[d] = e.length, e.push({
          addon: d,
          label: s.addon_name || d,
          list: []
        })), e[t[d]].list.push(s);
      }), e;
    }), z = v([]), U = v({}), N = v(), X = (e) => {
      e && (e.resetFields(), k());
    };
    (async () => {
      L.value = await (await fe()).data, z.value = await (await _e()).data, U.value = await (await ye()).data;
    })();
    const k = (e = 1) => {
      u.loading = !0, u.page = e, ge({
        page: u.page,
        limit: u.limit,
        ...u.searchParam
      }).then((t) => {
        u.loading = !1, u.data = t.data.data, u.total = t.data.total;
      }).catch(() => {
        u.loading = !1;
      });
    };
    k();
    const x = v(!1), o = j({ ...{
      id: 0,
      key: "",
      status: 2,
      time: {
        type: "min",
        week: "",
        day: "",
        hour: "",
        min: ""
      }
    } }), M = v(), Y = () => {
      o.id = 0, o.key = "", o.status = 2, o.time.type = "min", o.time.week = "", o.time.day = "", o.time.hour = "", o.time.min = "", x.value = !0;
    }, Z = R(() => ({
      key: [
        { required: !0, message: a("titlePlaceholder"), trigger: "blur" }
      ],
      timeDate: [
        { required: !0, validator: ee, trigger: "blur" }
      ]
    })), ee = (e, t, s) => {
      const d = o.time, m = (w) => /^[1-9]\d*$/.test(w), f = () => s(new Error(a("cronTimeTips")));
      switch (d.type) {
        case "min":
          return m(d.min) ? s() : f();
        case "hour":
          return m(d.hour) && m(d.min) ? s() : f();
        case "day":
          return m(d.day) && m(d.hour) && m(d.min) ? s() : f();
        case "week":
          return d.week !== "" && m(d.hour) && m(d.min) ? s() : f();
        case "month":
          return m(d.day) && m(d.hour) && m(d.min) ? s() : f();
        default:
          return f();
      }
    }, S = R(() => {
      const e = o.time, t = (s) => /^[1-9]\d*$/.test(String(s ?? ""));
      switch (e.type) {
        case "min":
          return t(e.min) ? `每隔${e.min}分钟执行一次` : "";
        case "hour":
          return t(e.hour) && t(e.min) ? `每隔${e.hour}小时的${e.min}分执行一次` : "";
        case "day":
          return t(e.day) && t(e.hour) && t(e.min) ? `每隔${e.day}天的${e.hour}时${e.min}分执行一次` : "";
        case "week": {
          const s = U.value[e.week] ?? "";
          return s && t(e.hour) && t(e.min) ? `每周的${s}的${e.hour}时${e.min}分执行一次` : "";
        }
        case "month":
          return t(e.day) && t(e.hour) && t(e.min) ? `每月的${e.day}号的${e.hour}时${e.min}分执行一次` : "";
        default:
          return "";
      }
    }), P = v(!1), te = async (e) => {
      P.value || !e || await e.validate(async (t) => {
        if (t) {
          P.value = !0;
          const s = o;
          (o.id > 0 ? he : ve)(s).then((m) => {
            P.value = !1, x.value = !1, k();
          }).catch(() => {
            P.value = !1;
          });
        }
      });
    }, le = (e) => {
      o.id = e.id, o.key = e.key, o.status = e.status, o.time = e.time, x.value = !0;
    }, ae = (e) => {
      F.confirm(
        a("cronDeleteTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        be(e).then(() => {
          k();
        }).catch(() => {
        });
      });
    }, oe = (e) => {
      F.confirm(
        a(`确认要立即执行一次"${e.name}"任务吗？`),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        ke({ id: e.id }).then((t) => {
        }).catch(() => {
        });
      });
    }, ne = (e) => {
      F.confirm(
        a("确认要重置计划任务吗？"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        we().then((t) => {
          ElMessage.success(t.msg);
        }).catch(() => {
        });
      });
    }, B = v(null), qe = (e) => {
      B.value.setFormData(e), B.value.showDialog = !0;
    }, O = v(null), re = (e) => {
      var t;
      (t = O.value) == null || t.open(e);
    };
    return (e, t) => {
      const s = _("el-option"), d = _("el-option-group"), m = _("el-select"), f = _("el-form-item"), w = _("el-button"), A = _("el-form"), ie = _("el-card"), C = _("el-table-column"), se = _("el-table"), E = _("el-input"), q = _("el-radio"), ue = _("el-radio-group"), de = _("el-dialog"), I = pe("loading");
      return p(), V("div", {
        ref_key: "pageRef",
        ref: W,
        class: "main-container table-fill-page",
        style: ce(i(J))
      }, [
        b("div", Ue, [
          n(Te, { closable: "" }, {
            default: r(() => [
              b("p", null, c(i(a)("cronTipsOne")), 1),
              b("p", null, c(i(a)("cronTipsTwo")), 1)
            ]),
            _: 1
          }),
          n(ie, {
            class: "box-card !border-none table-search-wrap table-search-wrap--panel table-fill-page__search",
            shadow: "never"
          }, {
            default: r(() => [
              b("div", Be, [
                n(A, {
                  inline: !0,
                  model: u.searchParam,
                  ref_key: "searchFormRef",
                  ref: N
                }, {
                  default: r(() => [
                    n(f, {
                      label: i(a)("title"),
                      prop: "key"
                    }, {
                      default: r(() => [
                        n(m, {
                          modelValue: u.searchParam.key,
                          "onUpdate:modelValue": t[0] || (t[0] = (l) => u.searchParam.key = l),
                          placeholder: "全部",
                          filterable: "",
                          clearable: "",
                          "popper-class": "schedule-name-select"
                        }, {
                          default: r(() => [
                            (p(!0), V(T, null, $(i(Q), (l) => (p(), y(d, {
                              key: l.addon,
                              label: l.label
                            }, {
                              default: r(() => [
                                (p(!0), V(T, null, $(l.list, (h) => (p(), y(s, {
                                  key: h.key,
                                  label: h.name,
                                  value: h.key
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(f, {
                      label: i(a)("status"),
                      prop: "status"
                    }, {
                      default: r(() => [
                        n(m, {
                          modelValue: u.searchParam.status,
                          "onUpdate:modelValue": t[1] || (t[1] = (l) => u.searchParam.status = l),
                          placeholder: "全部",
                          clearable: ""
                        }, {
                          default: r(() => [
                            n(s, {
                              label: "全部",
                              value: "all"
                            }),
                            n(s, {
                              label: "启用",
                              value: "1"
                            }),
                            n(s, {
                              label: "关闭",
                              value: "0"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(f, null, {
                      default: r(() => [
                        n(w, {
                          type: "primary",
                          onClick: t[2] || (t[2] = (l) => k())
                        }, {
                          default: r(() => [
                            g(c(i(a)("search")), 1)
                          ]),
                          _: 1
                        }),
                        n(w, {
                          onClick: t[3] || (t[3] = (l) => X(N.value))
                        }, {
                          default: r(() => [
                            g(c(i(a)("reset")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ])
            ]),
            _: 1
          }),
          b("div", Ee, [
            n(Ce, {
              title: i(H),
              selectable: !1
            }, {
              actions: r(() => [
                n(w, {
                  type: "primary",
                  onClick: Y
                }, {
                  default: r(() => [
                    g(c(i(a)("addCron")), 1)
                  ]),
                  _: 1
                }),
                n(w, {
                  type: "primary",
                  onClick: ne
                }, {
                  default: r(() => [
                    g(c(i(a)("重置计划任务")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"]),
            b("div", Re, [
              G((p(), y(se, {
                height: "100%",
                data: u.data,
                size: "large"
              }, {
                empty: r(() => [
                  b("span", null, c(u.loading ? "" : i(a)("emptyData")), 1)
                ]),
                default: r(() => [
                  n(C, {
                    prop: "name",
                    label: i(a)("title"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  n(C, {
                    prop: "key",
                    label: i(a)("key"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  n(C, {
                    label: i(a)("crondType"),
                    "min-width": "150"
                  }, {
                    default: r(({ row: l }) => [
                      g(c(l.crontab_content), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(C, {
                    prop: "status_name",
                    label: i(a)("openStatus"),
                    "min-width": "100"
                  }, null, 8, ["label"]),
                  n(C, {
                    label: i(a)("operation"),
                    align: "right",
                    fixed: "right",
                    width: "200"
                  }, {
                    default: r(({ row: l }) => [
                      n(Ve, {
                        actions: K(l)
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [I, u.loading]
              ])
            ]),
            n(xe, {
              "current-page": u.page,
              "onUpdate:current-page": t[4] || (t[4] = (l) => u.page = l),
              "page-size": u.limit,
              "onUpdate:page-size": t[5] || (t[5] = (l) => u.limit = l),
              total: u.total,
              onSizeChange: t[6] || (t[6] = (l) => k()),
              onCurrentChange: k
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ]),
        n(Le, {
          ref_key: "cronDialog",
          ref: B,
          onComplete: k
        }, null, 512),
        n(De, {
          ref_key: "scheduleLogRef",
          ref: O
        }, null, 512),
        n(de, {
          modelValue: x.value,
          "onUpdate:modelValue": t[15] || (t[15] = (l) => x.value = l),
          title: i(a)("editCron"),
          width: "750px",
          "destroy-on-close": !0
        }, {
          footer: r(() => [
            b("span", Ne, [
              n(w, {
                type: "primary",
                onClick: t[14] || (t[14] = (l) => te(M.value))
              }, {
                default: r(() => [
                  g(c(i(a)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            G((p(), y(A, {
              model: o,
              "label-width": "110px",
              ref_key: "formRef",
              ref: M,
              rules: i(Z),
              class: "page-form"
            }, {
              default: r(() => [
                n(f, {
                  label: i(a)("cronTemplate"),
                  class: "items-center",
                  prop: "key"
                }, {
                  default: r(() => [
                    n(m, {
                      modelValue: o.key,
                      "onUpdate:modelValue": t[7] || (t[7] = (l) => o.key = l)
                    }, {
                      default: r(() => [
                        (p(!0), V(T, null, $(L.value, (l) => (p(), y(s, {
                          key: l.key,
                          label: l.name,
                          value: l.key
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n(f, {
                  label: i(a)("cronTime"),
                  prop: "timeDate",
                  class: "schedule-cron-time"
                }, {
                  default: r(() => [
                    n(m, {
                      modelValue: o.time.type,
                      "onUpdate:modelValue": t[8] || (t[8] = (l) => o.time.type = l),
                      class: "!w-[150px]"
                    }, {
                      default: r(() => [
                        (p(!0), V(T, null, $(z.value, (l, h) => (p(), y(s, {
                          key: h,
                          label: l,
                          value: h
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    o.time.type == "week" ? (p(), y(m, {
                      key: 0,
                      modelValue: o.time.week,
                      "onUpdate:modelValue": t[9] || (t[9] = (l) => o.time.week = l),
                      class: "!w-[120px]"
                    }, {
                      default: r(() => [
                        (p(!0), V(T, null, $(U.value, (l, h) => (p(), y(s, {
                          key: h,
                          label: l,
                          value: h
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])) : D("", !0),
                    ["month", "day"].indexOf(o.time.type) != -1 ? (p(), y(E, {
                      key: 1,
                      modelValue: o.time.day,
                      "onUpdate:modelValue": t[10] || (t[10] = (l) => o.time.day = l),
                      modelModifiers: { trim: !0 },
                      class: "!w-[120px]"
                    }, {
                      append: r(() => [
                        g(c(i(a)("day")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])) : D("", !0),
                    ["month", "day", "hour", "week"].indexOf(o.time.type) != -1 ? (p(), y(E, {
                      key: 2,
                      modelValue: o.time.hour,
                      "onUpdate:modelValue": t[11] || (t[11] = (l) => o.time.hour = l),
                      modelModifiers: { trim: !0 },
                      class: "!w-[120px]"
                    }, {
                      append: r(() => [
                        g(c(i(a)("hour")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])) : D("", !0),
                    ["month", "day", "hour", "week", "min"].indexOf(o.time.type) != -1 ? (p(), y(E, {
                      key: 3,
                      modelValue: o.time.min,
                      "onUpdate:modelValue": t[12] || (t[12] = (l) => o.time.min = l),
                      modelModifiers: { trim: !0 },
                      class: "!w-[120px]"
                    }, {
                      append: r(() => [
                        g(c(i(a)("min")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])) : D("", !0),
                    i(S) ? (p(), V("div", Fe, c(i(a)("cronTimePreview")) + c(i(S)), 1)) : D("", !0)
                  ]),
                  _: 1
                }, 8, ["label"]),
                n(f, {
                  label: i(a)("isopen")
                }, {
                  default: r(() => [
                    b("div", ze, [
                      n(ue, {
                        modelValue: o.status,
                        "onUpdate:modelValue": t[13] || (t[13] = (l) => o.status = l)
                      }, {
                        default: r(() => [
                          n(q, { label: 1 }, {
                            default: r(() => [
                              g(c(i(a)("yes")), 1)
                            ]),
                            _: 1
                          }),
                          n(q, { label: 2 }, {
                            default: r(() => [
                              g(c(i(a)("no")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])), [
              [I, e.loading]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 4);
    };
  }
});
export {
  ot as default
};
