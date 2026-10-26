import { defineComponent as $e, ref as f, reactive as Z, computed as ee, watch as Me, resolveComponent as v, resolveDirective as Ae, openBlock as _, createElementBlock as w, normalizeStyle as Ee, unref as t, createVNode as o, withCtx as i, createElementVNode as r, toDisplayString as p, createTextVNode as c, createCommentVNode as g, withDirectives as Se, createBlock as V, nextTick as Fe } from "vue";
import { al as Ne, aB as We, t as e, aD as Ie, aE as He, ao as le, aF as Le, ae as je, aG as qe, aH as Ge } from "./core-shared-86a0da16.js";
import { useRoute as Ke, useRouter as Qe } from "vue-router";
import { a as Je } from "./module-0abf3a60.js";
import { ElMessage as E, ElMessageBox as C } from "element-plus";
import Oe from "./index-cbeed3e7.js";
import { u as Xe } from "./useTablePageHeight-33d60cf6.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const Ye = { class: "flex justify-between items-center" }, Ze = { class: "text-page-title" }, el = { key: 0 }, ll = { key: 1 }, al = {
  key: 2,
  class: "text-[14px]"
}, tl = { class: "flex items-center" }, ol = { key: 0 }, nl = { class: "mr-10 text-primary" }, il = { key: 1 }, sl = { class: "flex items-center" }, dl = {
  key: 0,
  class: "mt-2"
}, ul = { class: "mr-10 text-primary" }, pl = {
  key: 1,
  class: "mt-2"
}, rl = { class: "table-fill-page__table mt-[15px]" }, cl = { class: "mt-[16px] flex justify-end" }, ml = { class: "dialog-footer" }, fl = /* @__PURE__ */ r("div", { class: "mt-[10px] text-[12px] text-[#999] leading-[20px]" }, "默认为列表版本号递增，自定义则为手动输入版本号进行上传，首位必须大于1", -1), vl = { class: "flex items-end" }, _l = { class: "mx-[10px]" }, gl = { class: "mx-[10px]" }, hl = { class: "dialog-footer" }, bl = ["innerHTML"], yl = { class: "dialog-footer" }, kl = { class: "min-h-[150px]" }, Ml = /* @__PURE__ */ $e({
  __name: "code",
  setup(xl) {
    const h = Ne(), ae = Ke(), S = Qe(), te = ae.meta.title, { pageRef: oe, pageStyle: ne } = Xe(), F = f(!1), D = f(!0), d = Z({
      page: 1,
      limit: 10,
      total: 0,
      loading: !1,
      data: [],
      version_info: {}
    }), u = f({
      type: 1,
      version: "",
      code1: "1",
      code2: "0",
      code3: "0"
    }), N = f("");
    Je().then((a) => {
      a.data.data && a.data.data.auth_code && (N.value = a.data.data.auth_code, j()), D.value = !1;
    }).catch(() => {
      D.value = !1;
    });
    const W = f({
      app_id: "",
      app_secret: "",
      is_authorization: 0
    });
    We().then((a) => {
      W.value = a.data;
    });
    const I = f("/channel/weapp/code"), ie = (a) => {
      S.push({ path: I.value });
    }, G = f(null), K = f(null), se = Z({
      code1: [
        {
          validator: (a, l, s) => {
            l < 1 ? s(new Error(e("必须大于1"))) : s();
          },
          trigger: "blur"
        }
      ],
      code2: [
        {
          validator: (a, l, s) => {
            l < 0 ? s(new Error(e("必须大于0"))) : s();
          },
          trigger: "blur"
        }
      ],
      code3: [
        {
          validator: (a, l, s) => {
            l < 0 ? s(new Error(e("必须大于0"))) : s();
          },
          trigger: "blur"
        }
      ],
      version: [
        {
          required: !0,
          validator: (a, l, s) => {
            u.value.type == 2 && (!u.value.code1 || !u.value.code2 || !u.value.code3) ? s(new Error(e("请填写版本号"))) : s();
          }
        }
      ]
    }), de = ee(() => {
      const a = d.version_info || {};
      return !!(a.release_version || a.release_time || a.exp_version || a.exp_time);
    }), y = (a) => (d.loading = !0, a && (d.page = a), He({
      page: d.page,
      limit: d.limit
    }).then((l) => {
      d.loading = !1, d.data = l.data.data, d.total = l.data.total, d.version_info = l.data.version_info;
    }).catch(() => {
      d.loading = !1;
    }));
    y();
    const ue = () => {
      if (!N.value) {
        _e();
        return;
      }
      if (!W.value.app_id) {
        ge();
        return;
      }
      u.value = {
        type: 1,
        version: "",
        code1: "1",
        code2: "0",
        code3: "0"
      }, B.value = !0;
    }, pe = () => {
      G.value.clearValidate();
    }, B = f(!1), H = () => {
      B.value = !1, u.value = {
        type: 1,
        version: "",
        code1: "1",
        code2: "0",
        code3: "0"
      };
    }, b = f(!1), R = f(""), T = f(!1), L = f("upload"), P = f(""), re = ee(() => ({
      version: P.value,
      mode: L.value
    })), Q = (a, l = "") => {
      T.value || (L.value = a, P.value = l, T.value = !0);
    }, ce = () => {
      Fe(() => {
        T.value = !1;
      });
      const a = L.value, l = P.value;
      if (P.value = "", a === "commit") {
        me();
        return;
      }
      z.value = "", b.value = !0, h.openPendingDetail("weapp_upload", "正在发起发布"), le("weapp_upload", { version: l }).then((s) => {
        var m;
        b.value = !1;
        const k = (m = s == null ? void 0 : s.data) == null ? void 0 : m.task_key;
        if (!k) {
          h.closePendingDetail(), E.error("发布任务创建失败");
          return;
        }
        h.openDetail(k, "weapp_upload"), R.value = k, y();
      }).catch((s) => {
        b.value = !1, h.closePendingDetail(), E({ message: (s == null ? void 0 : s.msg) || (s == null ? void 0 : s.message) || "发布任务创建失败", type: "error" });
      });
    }, me = () => {
      b.value = !0, Le().then(() => {
        y(), j(), b.value = !1;
      }).catch(() => {
        b.value = !1;
      });
    }, fe = () => {
      K.value.validate((a) => {
        if (a) {
          const l = u.value.type == 2 ? `${u.value.code1}.${u.value.code2}.${u.value.code3}` : "";
          B.value = !1, H(), Q("upload", l);
        }
      });
    }, ve = () => {
      C.alert(e("localInsertTips"), e("warning"), {
        confirmButtonText: e("confirm")
      });
    }, z = f(""), j = () => {
      N.value && Ie().then((a) => {
        a.data && (z.value = `<img src="${a.data}" class="w-[150px]">`);
      }).catch();
    }, _e = () => {
      je() == "admin" ? C.confirm(
        e("authTips"),
        e("warning"),
        {
          distinguishCancelAndClose: !0,
          confirmButtonText: e("toBind"),
          cancelButtonText: e("toNiucloud")
        }
      ).then(() => {
        S.push({ path: "/app/authorize" });
      }).catch((a) => {
        a === "cancel" && window.open("https://www.niucloud.com/app");
      }) : C.alert(e("siteAuthTips"), e("warning"));
    }, ge = () => {
      C.confirm(
        e("weappTips"),
        e("warning"),
        {
          confirmButtonText: e("toSetting"),
          cancelButtonText: e("cancel")
        }
      ).then(() => {
        S.push({ path: "/channel/weapp/config" });
      });
    }, he = (a) => {
      C.confirm(
        e("undoAuditTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel")
        }
      ).then(() => {
        qe({ id: a.id }).then(() => {
          y();
        });
      });
    }, be = (a) => Number(a.status) === 1 && !!a.source_zip, ye = (a) => {
      C.confirm(
        `确认回退到版本 ${a.version}？${e("rollbackTips")}`,
        e("rollback"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel"),
          type: "warning"
        }
      ).then(() => {
        h.openPendingDetail("weapp_upload", "正在发起回退"), le("weapp_upload", {
          version: a.version,
          source_zip: a.source_zip
        }).then((l) => {
          var k;
          const s = (k = l == null ? void 0 : l.data) == null ? void 0 : k.task_key;
          if (!s) {
            h.closePendingDetail(), E.error("回退任务创建失败");
            return;
          }
          h.openDetail(s, "weapp_upload"), R.value = s, y();
        }).catch((l) => {
          h.closePendingDetail(), E({ message: (l == null ? void 0 : l.msg) || (l == null ? void 0 : l.message) || "回退任务创建失败", type: "error" });
        });
      }).catch(() => {
      });
    }, ke = (a) => {
      C.confirm(
        e("versionDeleteTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel")
        }
      ).then(() => {
        Ge(a.id).then(() => {
          y();
        });
      }).catch(() => {
      });
    }, xe = f(""), q = f(!1), we = (a) => {
      h.openDetail(String(a.upload_task_key), "weapp_upload");
    }, Ve = () => {
      window.open("https://doc.press.niucloud.com/php/saas-framework/use/configFAQ/minWaChatUpload.html");
    }, J = () => {
      b.value || Q("commit");
    };
    return Me(() => {
      var a;
      return R.value ? String(((a = h.tasks[R.value]) == null ? void 0 : a.status) ?? "") : "";
    }, (a) => {
      a && ["success", "failed", "canceled"].includes(a) && (y(), j(), R.value = "");
    }), (a, l) => {
      const s = v("el-tab-pane"), k = v("el-tabs"), m = v("el-button"), $ = v("el-table-column"), Ce = v("el-tooltip"), Te = v("el-table"), De = v("el-pagination"), Be = v("el-card"), U = v("el-input"), x = v("el-form-item"), Re = v("upload-file"), O = v("el-form"), M = v("el-dialog"), X = v("el-radio"), Ue = v("el-radio-group"), Pe = v("el-scrollbar"), ze = Ae("loading");
      return _(), w("div", {
        ref_key: "pageRef",
        ref: oe,
        class: "main-container table-fill-page",
        style: Ee(t(ne))
      }, [
        o(Be, {
          class: "card !border-none table-fill-page__card",
          shadow: "never"
        }, {
          default: i(() => [
            r("div", Ye, [
              r("span", Ze, p(t(te)), 1)
            ]),
            o(k, {
              modelValue: I.value,
              "onUpdate:modelValue": l[0] || (l[0] = (n) => I.value = n),
              onTabChange: ie
            }, {
              default: i(() => [
                o(s, {
                  label: t(e)("weappAccessFlow"),
                  name: "/channel/weapp"
                }, null, 8, ["label"]),
                o(s, {
                  label: t(e)("subscribeMessage"),
                  name: "/channel/weapp/message"
                }, null, 8, ["label"]),
                o(s, {
                  label: t(e)("weappRelease"),
                  name: "/channel/weapp/code"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            W.value.is_authorization ? (_(), w("div", ll, [
              o(m, {
                type: "primary",
                onClick: J,
                loading: b.value,
                disabled: D.value
              }, {
                default: i(() => [
                  c(p(t(e)("uploadWeapp")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : (_(), w("div", el, [
              o(m, {
                type: "primary",
                onClick: ue,
                loading: b.value,
                disabled: D.value
              }, {
                default: i(() => [
                  c(p(t(e)("cloudRelease")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              o(m, {
                onClick: ve,
                disabled: D.value
              }, {
                default: i(() => [
                  c(p(t(e)("localRelease")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])),
            t(de) ? (_(), w("div", al, [
              r("div", tl, [
                d.version_info.release_version ? (_(), w("div", ol, [
                  c(" 线上版本: "),
                  r("span", nl, p(d.version_info.release_version), 1)
                ])) : g("", !0),
                d.version_info.release_time ? (_(), w("div", il, [
                  c(" 发布时间: "),
                  r("span", null, p(d.version_info.release_time), 1)
                ])) : g("", !0)
              ]),
              r("div", sl, [
                d.version_info.exp_version ? (_(), w("div", dl, [
                  c(" 体验版本: "),
                  r("span", ul, p(d.version_info.exp_version), 1)
                ])) : g("", !0),
                d.version_info.exp_time ? (_(), w("div", pl, [
                  c(" 过期时间: "),
                  r("span", null, p(d.version_info.exp_time), 1)
                ])) : g("", !0)
              ])
            ])) : g("", !0),
            r("div", rl, [
              Se((_(), V(Te, {
                height: "100%",
                data: d.data,
                size: "default"
              }, {
                empty: i(() => [
                  r("span", null, p(t(e)("emptyData")), 1)
                ]),
                default: i(() => [
                  o($, {
                    prop: "version",
                    label: t(e)("code"),
                    align: "left"
                  }, null, 8, ["label"]),
                  o($, {
                    prop: "status_name",
                    label: t(e)("status"),
                    align: "left"
                  }, {
                    default: i(({ row: n }) => [
                      r("div", null, p(n.status_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  o($, {
                    prop: "create_time",
                    label: t(e)("createTime"),
                    align: "center"
                  }, null, 8, ["label"]),
                  o($, {
                    label: t(e)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "250"
                  }, {
                    default: i(({ row: n, $index: Y }) => [
                      z.value && Y == 0 && (n.status == 1 || n.status == 2) && d.page == 1 ? (_(), V(Ce, {
                        key: 0,
                        content: z.value,
                        "raw-content": "",
                        effect: "light"
                      }, {
                        default: i(() => [
                          o(m, {
                            type: "primary",
                            link: ""
                          }, {
                            default: i(() => [
                              c(p(t(e)("preview")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["content"])) : g("", !0),
                      o(m, {
                        type: "primary",
                        link: "",
                        onClick: (A) => we(n)
                      }, {
                        default: i(() => [
                          c(p(t(e)("detail")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      (Y > 0 || d.page > 1) && be(n) ? (_(), V(m, {
                        key: 1,
                        type: "primary",
                        link: "",
                        onClick: (A) => ye(n)
                      }, {
                        default: i(() => [
                          c(p(t(e)("rollback")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : g("", !0),
                      n.status == -2 ? (_(), V(m, {
                        key: 2,
                        type: "primary",
                        link: "",
                        onClick: (A) => J(n),
                        loading: b.value
                      }, {
                        default: i(() => [
                          c(p(t(e)("againUpload")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "loading"])) : g("", !0),
                      n.status == 2 ? (_(), V(m, {
                        key: 3,
                        type: "primary",
                        link: "",
                        onClick: (A) => he(n)
                      }, {
                        default: i(() => [
                          c(p(t(e)("undoAudit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : g("", !0),
                      o(m, {
                        class: "table-delete",
                        link: "",
                        onClick: (A) => ke(n)
                      }, {
                        default: i(() => [
                          c(p(t(e)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [ze, d.loading]
              ])
            ]),
            r("div", cl, [
              o(De, {
                "current-page": d.page,
                "onUpdate:current-page": l[1] || (l[1] = (n) => d.page = n),
                "page-size": d.limit,
                "onUpdate:page-size": l[2] || (l[2] = (n) => d.limit = n),
                layout: "total, sizes, prev, pager, next, jumper",
                total: d.total,
                onSizeChange: l[3] || (l[3] = (n) => y()),
                onCurrentChange: y
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }),
        o(M, {
          modelValue: F.value,
          "onUpdate:modelValue": l[8] || (l[8] = (n) => F.value = n),
          title: t(e)("codeDownTwoDesc"),
          width: "30%",
          "before-close": pe
        }, {
          footer: i(() => [
            r("span", ml, [
              o(m, {
                onClick: l[7] || (l[7] = (n) => F.value = !1)
              }, {
                default: i(() => [
                  c(p(t(e)("cancel")), 1)
                ]),
                _: 1
              }),
              o(m, {
                type: "primary",
                onClick: a.insert
              }, {
                default: i(() => [
                  c(p(t(e)("confirm")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          default: i(() => [
            o(O, {
              ref_key: "ruleFormRef",
              ref: G,
              model: u.value,
              "label-width": "120px"
            }, {
              default: i(() => [
                o(x, {
                  prop: "code",
                  label: t(e)("code")
                }, {
                  default: i(() => [
                    o(U, {
                      modelValue: u.value.code,
                      "onUpdate:modelValue": l[4] || (l[4] = (n) => u.value.code = n),
                      modelModifiers: { trim: !0 },
                      placeholder: t(e)("codePlaceholder"),
                      onkeyup: "this.value = this.value.replace(/[^\\d\\.]/g,'');"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                o(x, {
                  prop: "path",
                  label: t(e)("path")
                }, {
                  default: i(() => [
                    o(Re, {
                      modelValue: u.value.path,
                      "onUpdate:modelValue": l[5] || (l[5] = (n) => u.value.path = n),
                      api: "weapp/upload",
                      accept: ".zip"
                    }, null, 8, ["modelValue", "accept"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                o(x, {
                  label: t(e)("content")
                }, {
                  default: i(() => [
                    o(U, {
                      type: "textarea",
                      modelValue: u.value.content,
                      "onUpdate:modelValue": l[6] || (l[6] = (n) => u.value.content = n),
                      modelModifiers: { trim: !0 },
                      placeholder: t(e)("contentPlaceholder")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        o(M, {
          modelValue: B.value,
          "onUpdate:modelValue": l[13] || (l[13] = (n) => B.value = n),
          title: t(e)("codeDownTwoDesc"),
          width: "600px",
          "before-close": H
        }, {
          footer: i(() => [
            r("span", hl, [
              o(m, { onClick: H }, {
                default: i(() => [
                  c(p(t(e)("cancel")), 1)
                ]),
                _: 1
              }),
              o(m, {
                type: "primary",
                onClick: fe
              }, {
                default: i(() => [
                  c(p(t(e)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: i(() => [
            o(O, {
              ref_key: "cloudRuleFormRef",
              ref: K,
              model: u.value,
              rules: se,
              "label-width": "120px"
            }, {
              default: i(() => [
                o(x, {
                  prop: "type",
                  label: t(e)("版本号类型")
                }, {
                  default: i(() => [
                    r("div", null, [
                      o(Ue, {
                        modelValue: u.value.type,
                        "onUpdate:modelValue": l[9] || (l[9] = (n) => u.value.type = n)
                      }, {
                        default: i(() => [
                          o(X, { label: 1 }, {
                            default: i(() => [
                              c(p(t(e)("默认")), 1)
                            ]),
                            _: 1
                          }),
                          o(X, { label: 2 }, {
                            default: i(() => [
                              c(p(t(e)("自定义")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      fl
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u.value.type == 2 ? (_(), V(x, {
                  key: 0,
                  prop: "version",
                  label: t(e)("code")
                }, {
                  default: i(() => [
                    r("div", vl, [
                      o(x, { prop: "code1" }, {
                        default: i(() => [
                          o(U, {
                            modelValue: u.value.code1,
                            "onUpdate:modelValue": l[10] || (l[10] = (n) => u.value.code1 = n),
                            modelModifiers: { number: !0 },
                            class: "!w-[70px]",
                            placeholder: t(e)("codePlaceholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }),
                      r("span", _l, p(t(e)("weappUploadDot")), 1),
                      o(x, { prop: "code2" }, {
                        default: i(() => [
                          o(U, {
                            modelValue: u.value.code2,
                            "onUpdate:modelValue": l[11] || (l[11] = (n) => u.value.code2 = n),
                            modelModifiers: { number: !0 },
                            class: "!w-[70px]",
                            placeholder: t(e)("codePlaceholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }),
                      r("span", gl, p(t(e)("weappUploadDot")), 1),
                      o(x, { prop: "code3" }, {
                        default: i(() => [
                          o(U, {
                            modelValue: u.value.code3,
                            "onUpdate:modelValue": l[12] || (l[12] = (n) => u.value.code3 = n),
                            modelModifiers: { number: !0 },
                            class: "!w-[70px]",
                            placeholder: t(e)("codePlaceholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : g("", !0)
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        o(M, {
          modelValue: q.value,
          "onUpdate:modelValue": l[15] || (l[15] = (n) => q.value = n),
          title: t(e)("failReason"),
          width: "60%"
        }, {
          footer: i(() => [
            r("span", yl, [
              o(m, {
                type: "primary",
                onClick: Ve
              }, {
                default: i(() => [
                  c(p(t(e)("helpInfo")), 1)
                ]),
                _: 1
              }),
              o(m, {
                onClick: l[14] || (l[14] = (n) => q.value = !1)
              }, {
                default: i(() => [
                  c(p(t(e)("close")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: i(() => [
            o(Pe, { class: "h-[60vh] w-full whitespace-pre-wrap p-[20px]" }, {
              default: i(() => [
                r("div", { innerHTML: xe.value }, null, 8, bl)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        o(M, {
          modelValue: T.value,
          "onUpdate:modelValue": l[16] || (l[16] = (n) => T.value = n),
          title: "发布前校验",
          width: "580px",
          "close-on-click-modal": !1,
          "close-on-press-escape": !1
        }, {
          default: i(() => [
            r("div", kl, [
              T.value ? (_(), V(Oe, {
                key: 0,
                scene: "weapp_upload",
                params: t(re),
                "auto-next": !0,
                "auto-next-delay": 500,
                "show-prev": !1,
                "next-text": t(e)("nextStep"),
                onNext: ce
              }, null, 8, ["params", "next-text"])) : g("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
export {
  Ml as default
};
