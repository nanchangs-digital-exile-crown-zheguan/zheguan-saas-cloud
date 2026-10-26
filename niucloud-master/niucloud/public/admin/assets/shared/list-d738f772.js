import { defineComponent as Le, ref as p, reactive as V, computed as oe, resolveComponent as d, resolveDirective as Ye, openBlock as f, createElementBlock as B, normalizeStyle as Ae, unref as r, createVNode as t, withCtx as o, createElementVNode as _, toDisplayString as u, createTextVNode as m, Fragment as ne, renderList as re, createBlock as b, withDirectives as We, createCommentVNode as E, normalizeClass as He, pushScopeId as St, popScopeId as Tt } from "vue";
import { t as a, bu as x, k as Je, bY as Ze, bM as Ge, bZ as Ke, bx as Qe, b_ as Xe, b$ as se, c0 as et, a as tt } from "./core-shared-86a0da16.js";
import { ElMessageBox as L, ElMessage as lt } from "element-plus";
import { useRoute as at, useRouter as ot } from "vue-router";
import { u as nt } from "./useTablePageHeight-33d60cf6.js";
import rt from "./records-389390aa.js";
import { f as st } from "./form-submit-popup-9aa2d216.js";
import { a as it } from "./form-write-popup-cc99fbd1.js";
import ut from "./index-2ebffc99.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
import "./member_head-81b0c11e.js";
import "./browser-663461d8.js";
const dt = { class: "flex justify-between items-center" }, pt = { class: "text-page-title" }, mt = { class: "mb-[10px] flex items-center" }, ct = { class: "table-fill-page__table" }, ft = { class: "flex items-center justify-end" }, _t = { class: "mt-[16px] flex justify-end" }, gt = { class: "image-selection-container" }, vt = ["onClick"], yt = ["src"], ht = { class: "option-title" }, bt = { class: "dialog-footer" }, kt = { class: "dialog-footer" }, wt = /* @__PURE__ */ Le({
  __name: "list",
  setup(Ct) {
    const ie = at(), I = ot(), ue = ie.meta.title, { pageRef: de, pageStyle: pe } = nt(), k = p(!1), P = V({}), C = V({
      title: "",
      type: ""
    }), M = p(null), me = (n) => {
      const e = { form_id: n.form_id };
      M.value.setFormData(e), M.value.showDialog = !0;
    }, ce = oe(() => ({
      title: [
        { required: !0, message: a("titlePlaceholder"), trigger: "blur" }
      ],
      type: [
        { required: !0, message: a("formTypePlaceholder"), trigger: "blur" }
      ]
    })), Y = p(), S = p(!1), fe = async (n) => {
      n && await n.validate(async (e) => {
        if (e) {
          const i = { type: C.type }, w = I.resolve({
            path: "/decorate/form/edit",
            query: i
          });
          window.open(w.href), S.value = !1, C.title = "", C.type = "";
        }
      });
    }, A = (n) => {
      const e = n.status === 1 ? 0 : 1, i = {
        form_id: n.form_id,
        status: e
      };
      Ze(i).then((w) => {
        n.status = e;
      });
    }, W = (n = "") => {
      Ge({}).then((e) => {
        for (const i in P)
          delete P[i];
        for (const i in e.data)
          P[i] = e.data[i];
        C.type = Object.keys(P)[0];
      });
    };
    W();
    const xt = V({}), Pt = (n) => {
      s.searchParam.type = "", W(n);
    }, s = V({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        title: "",
        type: "",
        mode: "",
        addon_name: ""
      }
    }), H = p(), g = (n = 1) => {
      s.loading = !0, s.page = n, Ke({
        page: s.page,
        limit: s.limit,
        ...s.searchParam
      }).then((e) => {
        s.loading = !1, s.data = e.data.data, s.total = e.data.total, Qe(s.page, s.limit, s.searchParam);
      }).catch(() => {
        s.loading = !1;
      });
    };
    g(x(s.searchParam).page);
    const _e = (n) => {
      C.type = n.toString();
    }, ge = (n) => {
      n && (n.resetFields(), g());
    }, ve = (n) => {
      const e = I.resolve({
        path: "/decorate/form/edit",
        query: { form_id: n.form_id }
      });
      window.open(e.href);
    }, ye = (n) => {
      L.confirm(
        a("diyFormCopyTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        k.value || (k.value = !0, Xe({ form_id: n }).then((e) => {
          e.code == 1 && g(x(s.searchParam).page), k.value = !1;
        }).catch(() => {
          k.value = !1;
        }));
      });
    }, he = (n) => {
      L.confirm(
        a("diyFormDeleteTips"),
        a("warning"),
        {
          confirmButtonText: a("confirm"),
          cancelButtonText: a("cancel"),
          type: "warning"
        }
      ).then(() => {
        se({ form_ids: [n] }).then(() => {
          g(x(s.searchParam).page);
        }).catch(() => {
        });
      });
    }, U = p(), z = p(!1), be = (n) => {
      z.value = !1, J.value.toggleAllSelection();
    }, J = p(), D = p([]), ke = (n) => {
      D.value = n, U.value = !1, D.value.length > 0 && D.value.length < s.data.length ? z.value = !0 : z.value = !1, D.value.length == s.data.length && (U.value = !0);
    }, we = () => {
      if (D.value.length == 0) {
        lt({
          type: "warning",
          message: `${a("batchEmptySelectedFormsTips")}`
        });
        return;
      }
      L.confirm(a("batchFormsDeleteTips"), a("warning"), {
        confirmButtonText: a("confirm"),
        cancelButtonText: a("cancel"),
        type: "warning"
      }).then(() => {
        if (k.value)
          return;
        k.value = !0;
        const n = [];
        D.value.forEach((e) => {
          n.push(e.form_id);
        }), se({
          form_ids: n
        }).then(() => {
          g(x(s.searchParam).page), k.value = !1;
        }).catch(() => {
          k.value = !1;
        });
      });
    }, Dt = (n) => {
      const e = I.resolve({
        path: "/preview/wap",
        query: {
          page: "/app/pages/index/diy_form?form_id=" + n.form_id
        }
      });
      window.open(e.href);
    }, v = p("wechat"), Z = p(""), G = p(0), y = V({
      wechat: {
        title: "",
        desc: "",
        url: ""
      },
      weapp: {
        title: "",
        url: ""
      }
    }), T = p(!1), Ce = oe(() => ({})), K = p(), xe = async (n) => {
      G.value = n.form_id, Z.value = n.title;
      const e = n.share;
      y.wechat = e.wechat, y.weapp = e.weapp, T.value = !0;
    }, Pe = async (n) => {
      n && await n.validate(async (e) => {
        e && et({
          form_id: G.value,
          share: JSON.stringify(y)
        }).then(() => {
          g(x(s.searchParam).page), T.value = !1;
        }).catch(() => {
        });
      });
    }, Q = p(null), De = (n) => {
      var $;
      const e = "/app/pages/index/diy_form", i = [
        { name: "form_id", value: n.form_id }
      ], w = "表单推广", h = "diy_form";
      ($ = Q.value) == null || $.show(e, i, w, h);
    }, N = p(null), Fe = (n) => {
      N.value.setFormData(n), N.value.showDialog = !0;
    }, O = p(null), Ve = (n) => {
      O.value.setFormData(n), O.value.showDialog = !0;
    }, Se = p(null), j = p(!1), Te = (n) => {
      j.value = n;
    }, X = V({
      form_id: 0
    }), $e = (n) => {
      X.form_id = n.form_id, j.value = !0;
    };
    return (n, e) => {
      const i = d("el-button"), w = d("el-input"), h = d("el-form-item"), $ = d("el-option"), Re = d("el-select"), q = d("el-form"), ee = d("el-card"), Ee = d("el-checkbox"), F = d("el-table-column"), te = d("el-tag"), Ue = d("icon"), R = d("el-dropdown-item"), ze = d("el-dropdown-menu"), Be = d("el-dropdown"), Ie = d("el-table"), Me = d("el-pagination"), le = d("el-dialog"), ae = d("el-tab-pane"), Ne = d("el-tabs"), Oe = d("upload-image"), je = d("export-sure"), qe = Ye("loading");
      return f(), B("div", {
        ref_key: "pageRef",
        ref: de,
        class: "main-container table-fill-page",
        style: Ae(r(pe))
      }, [
        t(ee, {
          class: "box-card !border-none table-fill-page__card",
          shadow: "never"
        }, {
          default: o(() => [
            _("div", dt, [
              _("span", pt, u(r(ue)), 1),
              t(i, {
                type: "primary",
                class: "w-[100px]",
                onClick: e[0] || (e[0] = (l) => S.value = !0)
              }, {
                default: o(() => [
                  m(u(r(a)("addDiyForm")), 1)
                ]),
                _: 1
              })
            ]),
            t(ee, {
              class: "box-card !border-none my-[10px] table-search-wrap table-fill-page__search",
              shadow: "never"
            }, {
              default: o(() => [
                t(q, {
                  inline: !0,
                  model: s.searchParam,
                  ref_key: "searchFormDiyFormRef",
                  ref: H
                }, {
                  default: o(() => [
                    t(h, {
                      label: r(a)("title"),
                      prop: "title"
                    }, {
                      default: o(() => [
                        t(w, {
                          modelValue: s.searchParam.title,
                          "onUpdate:modelValue": e[1] || (e[1] = (l) => s.searchParam.title = l),
                          modelModifiers: { trim: !0 },
                          placeholder: r(a)("titlePlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(h, {
                      label: r(a)("typeName"),
                      prop: "type"
                    }, {
                      default: o(() => [
                        t(Re, {
                          modelValue: s.searchParam.type,
                          "onUpdate:modelValue": e[2] || (e[2] = (l) => s.searchParam.type = l),
                          placeholder: r(a)("formTypePlaceholder")
                        }, {
                          default: o(() => [
                            t($, {
                              label: r(a)("all"),
                              value: ""
                            }, null, 8, ["label"]),
                            (f(!0), B(ne, null, re(P, (l, c) => (f(), b($, {
                              label: l.title,
                              value: c,
                              key: c
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(h, null, {
                      default: o(() => [
                        t(i, {
                          type: "primary",
                          onClick: e[3] || (e[3] = (l) => g())
                        }, {
                          default: o(() => [
                            m(u(r(a)("search")), 1)
                          ]),
                          _: 1
                        }),
                        t(i, {
                          onClick: e[4] || (e[4] = (l) => ge(H.value))
                        }, {
                          default: o(() => [
                            m(u(r(a)("reset")), 1)
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
            _("div", mt, [
              t(Ee, {
                modelValue: U.value,
                "onUpdate:modelValue": e[5] || (e[5] = (l) => U.value = l),
                size: "large",
                class: "px-[14px]",
                onChange: be,
                indeterminate: z.value
              }, null, 8, ["modelValue", "indeterminate"]),
              t(i, {
                onClick: we,
                size: "small"
              }, {
                default: o(() => [
                  m(u(r(a)("batchDeletion")), 1)
                ]),
                _: 1
              })
            ]),
            _("div", ct, [
              We((f(), b(Ie, {
                height: "100%",
                data: s.data,
                size: "large",
                ref_key: "diyFormListTableRef",
                ref: J,
                onSelectionChange: ke
              }, {
                empty: o(() => [
                  _("span", null, u(s.loading ? "" : r(a)("emptyData")), 1)
                ]),
                default: o(() => [
                  t(F, {
                    type: "selection",
                    width: "55"
                  }),
                  t(F, {
                    prop: "page_title",
                    label: r(a)("title"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  t(F, {
                    prop: "type_name",
                    label: r(a)("typeName"),
                    "min-width": "80"
                  }, null, 8, ["label"]),
                  t(F, {
                    label: r(a)("status"),
                    "min-width": "80"
                  }, {
                    default: o(({ row: l }) => [
                      l.status == 1 ? (f(), b(te, {
                        key: 0,
                        type: "success",
                        class: "cursor-pointer",
                        onClick: (c) => A(l)
                      }, {
                        default: o(() => [
                          m(u(r(a)("statusOn")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : (f(), b(te, {
                        key: 1,
                        type: "info",
                        class: "cursor-pointer",
                        onClick: (c) => A(l)
                      }, {
                        default: o(() => [
                          m(u(r(a)("statusOff")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  t(F, {
                    prop: "update_time",
                    label: r(a)("updateTime"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  t(F, {
                    label: r(a)("operation"),
                    fixed: "right",
                    align: "right",
                    "min-width": "220"
                  }, {
                    default: o(({ row: l }) => [
                      _("div", ft, [
                        l.status == 1 && l.type == "DIY_FORM" ? (f(), b(i, {
                          key: 0,
                          type: "primary",
                          link: "",
                          onClick: (c) => De(l)
                        }, {
                          default: o(() => [
                            m(u(r(a)("promotion")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : E("", !0),
                        t(i, {
                          type: "primary",
                          link: "",
                          onClick: (c) => ve(l)
                        }, {
                          default: o(() => [
                            m(u(r(a)("edit")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        l.status == 0 ? (f(), b(i, {
                          key: 1,
                          type: "primary",
                          link: "",
                          onClick: (c) => he(l.form_id)
                        }, {
                          default: o(() => [
                            m(u(r(a)("delete")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : E("", !0),
                        t(i, {
                          type: "primary",
                          link: "",
                          onClick: (c) => me(l)
                        }, {
                          default: o(() => [
                            m(u(r(a)("detail")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        t(Be, {
                          placement: "bottom",
                          trigger: "click",
                          class: "ml-[12px]"
                        }, {
                          dropdown: o(() => [
                            t(ze, null, {
                              default: o(() => [
                                l.type == "DIY_FORM" ? (f(), b(R, { key: 0 }, {
                                  default: o(() => [
                                    t(i, {
                                      type: "primary",
                                      class: "w-full",
                                      link: "",
                                      onClick: (c) => Fe(l)
                                    }, {
                                      default: o(() => [
                                        m(u(r(a)("submitSuccess")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)) : E("", !0),
                                t(R, null, {
                                  default: o(() => [
                                    t(i, {
                                      type: "primary",
                                      class: "w-full",
                                      link: "",
                                      onClick: (c) => Ve(l)
                                    }, {
                                      default: o(() => [
                                        m(u(r(a)("writeSet")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                l.type == "DIY_FORM" ? (f(), b(R, { key: 1 }, {
                                  default: o(() => [
                                    t(i, {
                                      type: "primary",
                                      class: "w-full",
                                      link: "",
                                      onClick: (c) => xe(l)
                                    }, {
                                      default: o(() => [
                                        m(u(r(a)("shareSet")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)) : E("", !0),
                                t(R, null, {
                                  default: o(() => [
                                    t(i, {
                                      type: "primary",
                                      class: "w-full",
                                      link: "",
                                      onClick: (c) => $e(l)
                                    }, {
                                      default: o(() => [
                                        m(u(r(a)("export")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                t(R, null, {
                                  default: o(() => [
                                    t(i, {
                                      type: "primary",
                                      class: "w-full",
                                      link: "",
                                      onClick: (c) => ye(l.form_id)
                                    }, {
                                      default: o(() => [
                                        m(u(r(a)("copy")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: o(() => [
                            t(i, {
                              type: "primary",
                              link: ""
                            }, {
                              default: o(() => [
                                t(Ue, { name: "element MoreFilled" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [qe, s.loading]
              ])
            ]),
            _("div", _t, [
              t(Me, {
                "current-page": s.page,
                "onUpdate:current-page": e[6] || (e[6] = (l) => s.page = l),
                "page-size": s.limit,
                "onUpdate:page-size": e[7] || (e[7] = (l) => s.limit = l),
                layout: "total, sizes, prev, pager, next, jumper",
                total: s.total,
                onSizeChange: e[8] || (e[8] = (l) => g()),
                onCurrentChange: g
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }),
        t(le, {
          modelValue: S.value,
          "onUpdate:modelValue": e[11] || (e[11] = (l) => S.value = l),
          title: r(a)("addFormTips"),
          width: "980px"
        }, {
          footer: o(() => [
            _("span", bt, [
              t(i, {
                onClick: e[9] || (e[9] = (l) => S.value = !1)
              }, {
                default: o(() => [
                  m(u(r(a)("cancel")), 1)
                ]),
                _: 1
              }),
              t(i, {
                type: "primary",
                onClick: e[10] || (e[10] = (l) => fe(Y.value))
              }, {
                default: o(() => [
                  m(u(r(a)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            t(q, {
              model: C,
              ref_key: "formRef",
              ref: Y,
              rules: r(ce)
            }, {
              default: o(() => [
                t(h, { prop: "type" }, {
                  default: o(() => [
                    _("div", gt, [
                      (f(!0), B(ne, null, re(P, (l, c) => (f(), B("div", {
                        key: c,
                        class: He(["image-option", { selected: C.type === c }]),
                        onClick: (Ft) => _e(c)
                      }, [
                        _("img", {
                          src: r(Je)(l.preview),
                          class: "option-image"
                        }, null, 8, yt),
                        _("div", ht, u(l.title), 1)
                      ], 10, vt))), 128))
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        t(le, {
          modelValue: T.value,
          "onUpdate:modelValue": e[18] || (e[18] = (l) => T.value = l),
          title: r(a)("shareSet"),
          width: "30%"
        }, {
          footer: o(() => [
            _("span", kt, [
              t(i, {
                onClick: e[16] || (e[16] = (l) => T.value = !1)
              }, {
                default: o(() => [
                  m(u(r(a)("cancel")), 1)
                ]),
                _: 1
              }),
              t(i, {
                type: "primary",
                onClick: e[17] || (e[17] = (l) => Pe(K.value))
              }, {
                default: o(() => [
                  m(u(r(a)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            t(Ne, {
              modelValue: v.value,
              "onUpdate:modelValue": e[12] || (e[12] = (l) => v.value = l)
            }, {
              default: o(() => [
                t(ae, {
                  label: r(a)("wechat"),
                  name: "wechat"
                }, null, 8, ["label"]),
                t(ae, {
                  label: r(a)("weapp"),
                  name: "weapp"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            t(q, {
              model: y[v.value],
              "label-width": "90px",
              ref_key: "shareFormRef",
              ref: K,
              rules: r(Ce)
            }, {
              default: o(() => [
                t(h, {
                  label: r(a)("sharePage")
                }, {
                  default: o(() => [
                    _("span", null, u(Z.value), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(h, {
                  label: r(a)("shareTitle"),
                  prop: "title"
                }, {
                  default: o(() => [
                    t(w, {
                      modelValue: y[v.value].title,
                      "onUpdate:modelValue": e[13] || (e[13] = (l) => y[v.value].title = l),
                      modelModifiers: { trim: !0 },
                      placeholder: r(a)("shareTitlePlaceholder"),
                      clearable: "",
                      maxlength: "30",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                v.value == "wechat" ? (f(), b(h, {
                  key: 0,
                  label: r(a)("shareDesc"),
                  prop: "desc"
                }, {
                  default: o(() => [
                    t(w, {
                      modelValue: y[v.value].desc,
                      "onUpdate:modelValue": e[14] || (e[14] = (l) => y[v.value].desc = l),
                      modelModifiers: { trim: !0 },
                      placeholder: r(a)("shareDescPlaceholder"),
                      type: "textarea",
                      rows: "4",
                      clearable: "",
                      maxlength: "100",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : E("", !0),
                t(h, {
                  label: r(a)("shareImageUrl"),
                  prop: "url"
                }, {
                  default: o(() => [
                    t(Oe, {
                      modelValue: y[v.value].url,
                      "onUpdate:modelValue": e[15] || (e[15] = (l) => y[v.value].url = l),
                      limit: 1
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        t(ut, {
          ref_key: "spreadPopupRef",
          ref: Q
        }, null, 512),
        t(st, {
          ref_key: "formSubmitPopupRef",
          ref: N,
          onComplete: e[19] || (e[19] = (l) => g(r(x)(s.searchParam).page))
        }, null, 512),
        t(it, {
          ref_key: "formWritePopupRef",
          ref: O,
          onComplete: e[20] || (e[20] = (l) => g(r(x)(s.searchParam).page))
        }, null, 512),
        t(rt, {
          ref_key: "recordsDetailDialog",
          ref: M
        }, null, 512),
        t(je, {
          ref_key: "exportSureDialog",
          ref: Se,
          show: j.value,
          type: "diy_form_records",
          searchParam: X,
          onClose: Te
        }, null, 8, ["show", "searchParam"])
      ], 4);
    };
  }
});
const At = /* @__PURE__ */ tt(wt, [["__scopeId", "data-v-8a5ac80b"]]);
export {
  At as default
};
