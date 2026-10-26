import { ElMessage as R, ElButton as ge, ElInput as ve, ElFormItem as he, ElOption as xe, ElSelect as ye, ElForm as be, ElCard as ke, ElCheckbox as Ee, ElTableColumn as Ce, ElImage as we, ElRate as Te, ElTable as Pe, ElPagination as Ve, ElDialog as Se, ElLoadingDirective as De } from "element-plus/es";
import { defineComponent as Fe, reactive as q, ref as v, computed as Be, openBlock as u, createElementBlock as x, createVNode as s, withCtx as o, createElementVNode as p, toDisplayString as c, unref as n, createTextVNode as m, Fragment as O, renderList as W, createBlock as h, withDirectives as $e, createCommentVNode as b, pushScopeId as Re, popScopeId as ze } from "vue";
import { _ as F } from "./goods_default-bd0cc1e2.js";
import { t as e } from "/admin/assets/shared/admin-lang.js";
import { V as Ue, W as Ne, X as Ie, Y as Ae, Z as Le, _ as Me, $ as je, a0 as qe, a1 as Oe, a2 as We, a3 as Xe } from "./goods-d2a56d58.js";
import { _ as Ye } from "./evaluate-add.vue_vue_type_style_index_0_lang-4d5442c3.js";
import { getTablePageStorage as g, img as D, setTablePageStorage as Ze } from "/admin/assets/shared/core-shared.js";
import { ElMessageBox as w } from "element-plus";
import { useRoute as Ge } from "vue-router";
import { _ as He } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./index-36e25503.js";
import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./sortable.esm-fc069a97.js";
import "./goods-select-popup-ef80f0be.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const X = (T) => (Re("data-v-dfa9108e"), T = T(), ze(), T), Je = { class: "main-container" }, Ke = { class: "flex justify-between items-center" }, Qe = { class: "text-page-title" }, et = { class: "mt-[10px]" }, tt = { class: "mb-[10px] flex items-center" }, at = { class: "flex cursor-pointer" }, lt = { class: "flex items-center min-w-[50px] mr-[10px]" }, nt = /* @__PURE__ */ X(() => /* @__PURE__ */ p("div", { class: "image-slot" }, [
  /* @__PURE__ */ p("img", {
    class: "w-[50px] h-[50px]",
    src: F
  })
], -1)), ot = {
  key: 1,
  class: "w-[50px] h-[50px]",
  src: F,
  fit: "contain"
}, st = { class: "flex" }, it = { class: "multi-hidden" }, rt = { class: "text-[14px]" }, ct = {
  key: 0,
  class: "flex flex-wrap mt-[10px]"
}, pt = /* @__PURE__ */ X(() => /* @__PURE__ */ p("div", { class: "image-slot" }, [
  /* @__PURE__ */ p("img", {
    class: "w-[40px] h-[40px]",
    src: F
  })
], -1)), ut = {
  key: 1,
  class: "w-[40px] h-[40px]",
  src: F
}, dt = {
  key: 1,
  class: "mt-[15px] text-[14px]"
}, mt = { class: "text-[#ff7f5b]" }, _t = { class: "mt-[16px] flex justify-end" }, ft = { class: "dialog-footer" }, gt = /* @__PURE__ */ Fe({
  __name: "evaluate",
  setup(T) {
    const Y = Ge().meta.title, l = q({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        goods_name: "",
        status: ""
      }
    }), z = v(), d = (i = 1) => {
      l.loading = !0, l.page = i, Ue({
        page: l.page,
        limit: l.limit,
        ...l.searchParam
      }).then((a) => {
        l.loading = !1, l.data = a.data.data, l.total = a.data.total, l.data.map((r) => (r.previewList = r.images.map((C) => D(C)), r)), Ze(l.page, l.limit, l.searchParam);
      }).catch(() => {
        l.loading = !1;
      });
    };
    d(g(l.searchParam).page);
    const U = v([]);
    (() => {
      Ne().then((i) => {
        U.value = i.data;
      });
    })();
    const B = v(null), Z = () => {
      B.value.setFormData(), B.value.showDialog = !0;
    }, P = v(), V = v(!1), G = (i) => {
      V.value = !1, N.value.toggleAllSelection();
    }, N = v(), f = v([]), H = (i) => {
      f.value = i, P.value = !1, f.value.length > 0 && f.value.length < l.data.length ? V.value = !0 : V.value = !1, f.value.length == l.data.length && l.data.length && f.value.length && (P.value = !0);
    }, J = () => {
      if (f.value.length == 0) {
        R({
          type: "warning",
          message: `${e("batchEmptySelectedCommentsTips")}`
        });
        return;
      }
      w.confirm(e("batchDeleteTips"), e("warning"), {
        confirmButtonText: e("confirm"),
        cancelButtonText: e("cancel"),
        type: "warning"
      }).then(() => {
        const i = [];
        f.value.forEach((a) => {
          i.push(a.evaluate_id);
        }), Ie({
          evaluate_ids: i
        }).then(() => {
          d(g(l.searchParam).page);
        }).catch(() => {
        });
      });
    }, K = (i) => {
      if (f.value.length == 0) {
        R({
          type: "warning",
          message: e("batchEmptySelectedCommentsTips")
        });
        return;
      }
      w.confirm(e("batchAdoptTips"), e("warning"), {
        confirmButtonText: e("confirm"),
        cancelButtonText: e("cancel"),
        type: "warning"
      }).then(() => {
        const a = [];
        f.value.forEach((r) => {
          a.push(r.evaluate_id);
        }), Ae({
          evaluate_ids: a
        }).then(() => {
          d(g(l.searchParam).page);
        }).catch(() => {
        });
      });
    }, Q = (i) => {
      if (f.value.length == 0) {
        R({
          type: "warning",
          message: e("batchEmptySelectedCommentsTips")
        });
        return;
      }
      w.confirm(e("batchRefuseTips"), e("warning"), {
        confirmButtonText: e("confirm"),
        cancelButtonText: e("cancel"),
        type: "warning"
      }).then(() => {
        const a = [];
        f.value.forEach((r) => {
          a.push(r.evaluate_id);
        }), Le({
          evaluate_ids: a
        }).then(() => {
          d(g(l.searchParam).page);
        }).catch(() => {
        });
      });
    }, ee = (i) => {
      w.confirm(
        e("evaluateDeleteTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel"),
          type: "warning"
        }
      ).then(() => {
        Me(i).then(() => {
          d(g(l.searchParam).page);
        }).catch(() => {
        });
      });
    }, te = (i) => {
      w.confirm(
        e("auditAdoptTips"),
        e("warning"),
        {
          confirmButtonText: e("confirm"),
          cancelButtonText: e("cancel"),
          type: "warning"
        }
      ).then(() => {
        je(i).then(() => {
          d(g(l.searchParam).page);
        });
      });
    }, ae = (i) => {
      qe(i).then(() => {
        d(g(l.searchParam).page);
      });
    }, I = (i, a) => {
      a == "topping" ? Oe(i).then(() => {
        d(g(l.searchParam).page);
      }) : We(i).then(() => {
        d(g(l.searchParam).page);
      });
    }, k = v(!1), E = q({ ...{
      evaluate_id: 0,
      explain_first: ""
    } }), A = v(), le = (i) => {
      E.evaluate_id = i, E.explain_first = "", k.value = !0;
    }, ne = Be(() => ({
      explain_first: [
        { required: !0, message: e("explainFirstPlaceholder"), trigger: "blur" }
      ]
    })), oe = async (i) => {
      i && await i.validate(async (a) => {
        a && Xe(E).then((C) => {
          d(g(l.searchParam).page), k.value = !1;
        }).catch(() => {
          k.value = !1;
        });
      });
    }, se = (i) => {
      i && (i.resetFields(), d());
    };
    return (i, a) => {
      const r = ge, C = ve, S = he, ie = xe, re = ye, L = be, M = ke, ce = Ee, y = Ce, j = we, pe = Te, ue = Pe, de = Ve, me = Se, _e = De;
      return u(), x("div", Je, [
        s(M, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: o(() => [
            p("div", Ke, [
              p("span", Qe, c(n(Y)), 1),
              s(r, {
                type: "primary",
                onClick: Z
              }, {
                default: o(() => [
                  m(c(n(e)("addEvaluate")), 1)
                ]),
                _: 1
              })
            ]),
            s(M, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: o(() => [
                s(L, {
                  inline: !0,
                  model: l.searchParam,
                  ref_key: "searchFormRef",
                  ref: z
                }, {
                  default: o(() => [
                    s(S, {
                      label: n(e)("goodsName"),
                      prop: "goods_name"
                    }, {
                      default: o(() => [
                        s(C, {
                          modelValue: l.searchParam.goods_name,
                          "onUpdate:modelValue": a[0] || (a[0] = (t) => l.searchParam.goods_name = t),
                          modelModifiers: { trim: !0 },
                          placeholder: n(e)("goodsNamePlaceholder"),
                          class: "input-width",
                          maxlength: "60"
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    s(S, {
                      label: n(e)("status"),
                      prop: "status"
                    }, {
                      default: o(() => [
                        s(re, {
                          modelValue: l.searchParam.status,
                          "onUpdate:modelValue": a[1] || (a[1] = (t) => l.searchParam.status = t),
                          placeholder: n(e)("statusPlaceholder"),
                          clearable: ""
                        }, {
                          default: o(() => [
                            (u(!0), x(O, null, W(U.value, (t, _) => (u(), h(ie, {
                              key: _,
                              label: t,
                              value: _
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    s(S, null, {
                      default: o(() => [
                        s(r, {
                          type: "primary",
                          onClick: a[2] || (a[2] = (t) => d())
                        }, {
                          default: o(() => [
                            m(c(n(e)("search")), 1)
                          ]),
                          _: 1
                        }),
                        s(r, {
                          onClick: a[3] || (a[3] = (t) => se(z.value))
                        }, {
                          default: o(() => [
                            m(c(n(e)("reset")), 1)
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
            p("div", et, [
              p("div", tt, [
                s(ce, {
                  modelValue: P.value,
                  "onUpdate:modelValue": a[4] || (a[4] = (t) => P.value = t),
                  size: "large",
                  class: "px-[14px]",
                  onChange: G,
                  indeterminate: V.value
                }, null, 8, ["modelValue", "indeterminate"]),
                s(r, {
                  onClick: J,
                  size: "small"
                }, {
                  default: o(() => [
                    m(c(n(e)("batchDelete")), 1)
                  ]),
                  _: 1
                }),
                s(r, {
                  onClick: K,
                  size: "small"
                }, {
                  default: o(() => [
                    m(c(n(e)("batchAdopt")), 1)
                  ]),
                  _: 1
                }),
                s(r, {
                  onClick: Q,
                  size: "small"
                }, {
                  default: o(() => [
                    m(c(n(e)("batchRefuse")), 1)
                  ]),
                  _: 1
                })
              ]),
              $e((u(), h(ue, {
                data: l.data,
                size: "large",
                ref_key: "evaluateTableRef",
                ref: N,
                onSelectionChange: H
              }, {
                empty: o(() => [
                  p("span", null, c(l.loading ? "" : n(e)("emptyData")), 1)
                ]),
                default: o(() => [
                  s(y, {
                    type: "selection",
                    width: "55"
                  }),
                  s(y, {
                    label: n(e)("goodsInfo"),
                    "min-width": "120",
                    align: "left"
                  }, {
                    default: o(({ row: t }) => [
                      p("div", at, [
                        p("div", lt, [
                          t.goods.goods_cover_thumb_small ? (u(), h(j, {
                            key: 0,
                            class: "w-[50px] h-[50px]",
                            src: n(D)(t.goods.goods_cover_thumb_small),
                            fit: "contain"
                          }, {
                            error: o(() => [
                              nt
                            ]),
                            _: 2
                          }, 1032, ["src"])) : (u(), x("img", ot))
                        ]),
                        p("div", st, [
                          p("p", it, c(t.goods.goods_name), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(y, {
                    label: n(e)("content"),
                    "min-width": "240",
                    align: "left"
                  }, {
                    default: o(({ row: t }) => {
                      var _;
                      return [
                        p("div", null, [
                          p("p", rt, c(t.content), 1),
                          ((_ = t.images) == null ? void 0 : _.length) > 0 ? (u(), x("div", ct, [
                            (u(!0), x(O, null, W(t.images, ($, fe) => (u(), x("div", {
                              key: fe,
                              class: "mr-4"
                            }, [
                              $ ? (u(), h(j, {
                                key: 0,
                                class: "w-[40px] h-[40px]",
                                src: n(D)($),
                                fit: "contain",
                                "preview-src-list": [n(D)($)],
                                "zoom-rate": 1.2,
                                "max-scale": 7,
                                "min-scale": 0.2
                              }, {
                                error: o(() => [
                                  pt
                                ]),
                                _: 2
                              }, 1032, ["src", "preview-src-list", "zoom-rate", "min-scale"])) : (u(), x("img", ut))
                            ]))), 128))
                          ])) : b("", !0),
                          t.explain_first ? (u(), x("p", dt, [
                            p("span", mt, c(n(e)("explainFirst")) + "：", 1),
                            m(c(t.explain_first), 1)
                          ])) : b("", !0)
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["label"]),
                  s(y, {
                    label: n(e)("scores"),
                    "min-width": "110",
                    align: "left"
                  }, {
                    default: o(({ row: t }) => [
                      s(pe, {
                        modelValue: t.scores,
                        "onUpdate:modelValue": (_) => t.scores = _,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s(y, {
                    prop: "audit_name",
                    label: n(e)("auditName"),
                    "min-width": "80"
                  }, null, 8, ["label"]),
                  s(y, {
                    prop: "create_time",
                    label: n(e)("createTime"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  s(y, {
                    label: n(e)("operation"),
                    fixed: "right",
                    "min-width": "100",
                    align: "right"
                  }, {
                    default: o(({ row: t }) => [
                      p("div", null, [
                        t.is_audit == 1 ? (u(), h(r, {
                          key: 0,
                          type: "primary",
                          link: "",
                          onClick: (_) => te(t.evaluate_id)
                        }, {
                          default: o(() => [
                            m(c(n(e)("adopt")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : b("", !0),
                        t.is_audit == 1 ? (u(), h(r, {
                          key: 1,
                          type: "primary",
                          link: "",
                          onClick: (_) => ae(t.evaluate_id)
                        }, {
                          default: o(() => [
                            m(c(n(e)("refuse")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : b("", !0),
                        t.explain_first == "" ? (u(), h(r, {
                          key: 2,
                          type: "primary",
                          link: "",
                          onClick: (_) => le(t.evaluate_id)
                        }, {
                          default: o(() => [
                            m(c(n(e)("reply")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : b("", !0),
                        s(r, {
                          type: "primary",
                          link: "",
                          onClick: (_) => ee(t.evaluate_id)
                        }, {
                          default: o(() => [
                            m(c(n(e)("delete")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        t.is_audit == 2 && t.topping == 0 ? (u(), h(r, {
                          key: 3,
                          type: "primary",
                          link: "",
                          onClick: (_) => I(t.evaluate_id, "topping")
                        }, {
                          default: o(() => [
                            m(c(n(e)("topping")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : b("", !0),
                        t.topping == 1 ? (u(), h(r, {
                          key: 4,
                          type: "primary",
                          link: "",
                          onClick: (_) => I(t.evaluate_id, "cancel_topping")
                        }, {
                          default: o(() => [
                            m(c(n(e)("cancelTopping")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : b("", !0)
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [_e, l.loading]
              ]),
              p("div", _t, [
                s(de, {
                  "current-page": l.page,
                  "onUpdate:current-page": a[5] || (a[5] = (t) => l.page = t),
                  "page-size": l.limit,
                  "onUpdate:page-size": a[6] || (a[6] = (t) => l.limit = t),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: l.total,
                  onSizeChange: a[7] || (a[7] = (t) => d()),
                  onCurrentChange: d
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        }),
        s(Ye, {
          ref_key: "editEvaluateDialog",
          ref: B,
          onComplete: a[8] || (a[8] = (t) => d(n(g)(l.searchParam).page))
        }, null, 512),
        s(me, {
          modelValue: k.value,
          "onUpdate:modelValue": a[12] || (a[12] = (t) => k.value = t),
          title: n(e)("explainFirst"),
          width: "460px",
          class: "diy-dialog-wrap",
          "destroy-on-close": !0
        }, {
          footer: o(() => [
            p("span", ft, [
              s(r, {
                onClick: a[10] || (a[10] = (t) => k.value = !1)
              }, {
                default: o(() => [
                  m(c(n(e)("cancel")), 1)
                ]),
                _: 1
              }),
              s(r, {
                type: "primary",
                onClick: a[11] || (a[11] = (t) => oe(A.value))
              }, {
                default: o(() => [
                  m(c(n(e)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            s(L, {
              model: E,
              "label-width": "90px",
              ref_key: "formRef",
              ref: A,
              rules: n(ne),
              class: "page-form"
            }, {
              default: o(() => [
                s(S, {
                  label: n(e)("explainFirst"),
                  prop: "explain_first"
                }, {
                  default: o(() => [
                    s(C, {
                      modelValue: E.explain_first,
                      "onUpdate:modelValue": a[9] || (a[9] = (t) => E.explain_first = t),
                      modelModifiers: { trim: !0 },
                      type: "textarea",
                      rows: "4",
                      clearable: "",
                      placeholder: n(e)("explainFirstPlaceholder"),
                      class: "input-width",
                      maxlength: "200",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const jt = /* @__PURE__ */ He(gt, [["__scopeId", "data-v-dfa9108e"]]);
export {
  jt as default
};
