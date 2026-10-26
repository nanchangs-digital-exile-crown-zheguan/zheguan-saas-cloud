import { ElInput as de, ElFormItem as ue, ElOption as pe, ElSelect as me, ElDatePicker as _e, ElButton as fe, ElForm as ve, ElCard as ye, ElTableColumn as he, ElTable as ge, ElPagination as be, ElDialog as ke, ElLoadingDirective as xe } from "element-plus/es";
import { defineComponent as Ve, reactive as A, ref as b, computed as Ce, resolveComponent as De, openBlock as u, createElementBlock as D, createVNode as n, withCtx as o, createElementVNode as m, toDisplayString as c, unref as t, Fragment as w, renderList as G, createBlock as y, createTextVNode as v, withDirectives as J, createCommentVNode as x, pushScopeId as Re, popScopeId as Pe } from "vue";
import { ElMessageBox as K } from "element-plus";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { distance as we } from "/admin/assets/shared/core-shared.js";
import { useRoute as Ee, useRouter as Se } from "vue-router";
import { p as Ne, q as Le, r as Te, t as Fe, u as $e, v as Ue } from "./delivery-da6bd7ad.js";
import { _ as Be } from "./local_record_detail.vue_vue_type_style_index_0_lang-063aa39e.js";
import { _ as Ie } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const Q = (C) => (Re("data-v-0f231654"), C = C(), Pe(), C), Me = { class: "main-container" }, ze = { class: "flex justify-between items-center" }, qe = { class: "right" }, je = { class: "mt-[10px]" }, Oe = ["onClick"], Ye = /* @__PURE__ */ Q(() => /* @__PURE__ */ m("span", { class: "text-primary ml-[4px] nc-iconfont nc-icon-chakandituV6xx" }, null, -1)), He = ["onClick"], Ae = /* @__PURE__ */ Q(() => /* @__PURE__ */ m("span", { class: "text-primary ml-[4px] nc-iconfont nc-icon-chakandituV6xx" }, null, -1)), Ge = { class: "mt-[16px] flex justify-end" }, Je = { class: "dialog-footer" }, Ke = /* @__PURE__ */ Ve({
  __name: "local_record",
  setup(C) {
    const R = Ee();
    Se();
    const W = R.meta.title, i = A({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        delivery_no: "",
        trade_no: R.query.trade_no || "",
        trade_type: R.query.trade_type || "",
        status: "",
        create_time: ""
      }
    }), E = b([]), S = b();
    (() => {
      Ne().then((r) => {
        E.value = r.data;
      });
    })();
    const h = (r = 1) => {
      i.loading = !0, i.page = r, Le({
        page: i.page,
        limit: i.limit,
        ...i.searchParam
      }).then((a) => {
        i.loading = !1, i.data = a.data.data, i.total = a.data.total;
      }).catch(() => {
        i.loading = !1;
      });
    };
    h();
    const N = b(), X = (r) => {
      var a;
      (a = N.value) == null || a.setFormData(r);
    }, L = b(), T = (r, a) => {
      var _;
      const d = {};
      a == "start" ? (d.taker_latitude = r.delivery_start_lat, d.taker_longitude = r.delivery_start_lng, d.taker_address = r.delivery_start) : (d.taker_latitude = r.delivery_end_lat, d.taker_longitude = r.delivery_start_lng, d.taker_address = r.delivery_end), (_ = L.value) == null || _.setFormData(d);
    }, Z = (r) => {
      K.confirm(
        l("syncTips"),
        l("warning"),
        {
          confirmButtonText: l("confirm"),
          cancelButtonText: l("cancel"),
          type: "warning"
        }
      ).then(() => {
        Te(r.id).then(() => {
          h();
        });
      });
    }, ee = (r) => {
      K.confirm(
        l("finishTips"),
        l("warning"),
        {
          confirmButtonText: l("confirm"),
          cancelButtonText: l("cancel"),
          type: "warning"
        }
      ).then(() => {
        Fe(r.id).then(() => {
          h();
        });
      });
    }, V = b(!1), F = b([]), k = b(!1), s = A({
      id: "",
      cancel_reason_id: "",
      cancel_reason: "",
      cancel_type: ""
    }), $ = b(), le = async (r) => {
      s.id = r.id, s.cancel_type = r.delivery_service, r.delivery_service != "merchant" && (F.value = await (await $e({ service: r.delivery_service })).data), V.value = !0;
    }, ae = Ce(() => ({
      cancel_reason_id: [
        { required: s.cancel_type != "merchant", message: l("cancelReasonSelectPlaceholder"), trigger: "blur" }
      ],
      cancel_reason: [
        { required: s.cancel_reason_id == 1e4 || s.cancel_type == "merchant", message: l("cancelReasonPlaceholder"), trigger: "blur" }
      ]
    })), te = async (r) => {
      k.value || !r || await r.validate(async (a) => {
        a && (k.value = !0, Ue(s).then((d) => {
          k.value = !1, V.value = !1, setTimeout(() => {
            h();
          }, 1500);
        }).catch(() => {
          k.value = !1;
        }));
      });
    }, ne = (r) => {
      r && (r.resetFields(), h());
    };
    return (r, a) => {
      const d = de, _ = ue, U = pe, B = me, oe = _e, g = fe, I = ve, M = ye, p = he, re = ge, ie = be, se = De("map-info"), ce = ke, z = xe;
      return u(), D("div", Me, [
        n(M, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: o(() => [
            m("div", ze, [
              m("span", qe, c(t(W)), 1)
            ]),
            n(M, {
              class: "box-card !border-none my-[10px] table-search-wrap",
              shadow: "never"
            }, {
              default: o(() => [
                n(I, {
                  inline: !0,
                  model: i.searchParam,
                  ref_key: "searchFormRef",
                  ref: S
                }, {
                  default: o(() => [
                    n(_, {
                      label: t(l)("deliveryNo"),
                      prop: "delivery_no"
                    }, {
                      default: o(() => [
                        n(d, {
                          modelValue: i.searchParam.delivery_no,
                          "onUpdate:modelValue": a[0] || (a[0] = (e) => i.searchParam.delivery_no = e),
                          modelModifiers: { trim: !0 },
                          placeholder: t(l)("deliveryNoPlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(_, {
                      label: t(l)("tradeNo"),
                      prop: "trade_no"
                    }, {
                      default: o(() => [
                        n(d, {
                          modelValue: i.searchParam.trade_no,
                          "onUpdate:modelValue": a[1] || (a[1] = (e) => i.searchParam.trade_no = e),
                          modelModifiers: { trim: !0 },
                          placeholder: t(l)("tradeNoPlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(_, {
                      label: t(l)("deliveryStatus"),
                      prop: "status"
                    }, {
                      default: o(() => [
                        n(B, {
                          modelValue: i.searchParam.status,
                          "onUpdate:modelValue": a[2] || (a[2] = (e) => i.searchParam.status = e),
                          placeholder: t(l)("deliveryStatusPlaceholder"),
                          clearable: ""
                        }, {
                          default: o(() => [
                            (u(!0), D(w, null, G(E.value, (e, f) => (u(), y(U, {
                              key: f,
                              label: e,
                              value: f
                            }, null, 8, ["label", "value"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(_, {
                      label: t(l)("createTime"),
                      prop: "create_time"
                    }, {
                      default: o(() => [
                        n(oe, {
                          modelValue: i.searchParam.create_time,
                          "onUpdate:modelValue": a[3] || (a[3] = (e) => i.searchParam.create_time = e),
                          type: "datetimerange",
                          "value-format": "YYYY-MM-DD HH:mm:ss",
                          "start-placeholder": t(l)("startDate"),
                          "end-placeholder": t(l)("endDate")
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(_, null, {
                      default: o(() => [
                        n(g, {
                          type: "primary",
                          onClick: a[4] || (a[4] = (e) => h())
                        }, {
                          default: o(() => [
                            v(c(t(l)("search")), 1)
                          ]),
                          _: 1
                        }),
                        n(g, {
                          onClick: a[5] || (a[5] = (e) => ne(S.value))
                        }, {
                          default: o(() => [
                            v(c(t(l)("reset")), 1)
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
            m("div", je, [
              J((u(), y(re, {
                data: i.data,
                size: "large"
              }, {
                empty: o(() => [
                  m("span", null, c(i.loading ? "" : t(l)("emptyData")), 1)
                ]),
                default: o(() => [
                  n(p, {
                    prop: "delivery_service_name",
                    label: t(l)("deliveryServiceName"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "body",
                    label: t(l)("goodsInfo"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "delivery_no",
                    label: t(l)("deliveryNo"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "trade_no",
                    label: t(l)("tradeNo"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "delivery_start",
                    label: t(l)("deliveryStart"),
                    "min-width": "120"
                  }, {
                    default: o(({ row: e }) => [
                      m("div", {
                        class: "cursor-pointer",
                        onClick: (f) => T(e, "start")
                      }, [
                        m("span", null, c(e.delivery_start), 1),
                        Ye
                      ], 8, Oe)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(p, {
                    prop: "delivery_end",
                    label: t(l)("deliveryEnd"),
                    "min-width": "120"
                  }, {
                    default: o(({ row: e }) => [
                      m("div", {
                        class: "cursor-pointer",
                        onClick: (f) => T(e, "end")
                      }, [
                        m("span", null, c(e.delivery_end), 1),
                        Ae
                      ], 8, He)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(p, {
                    prop: "status_name",
                    label: t(l)("deliveryStatus"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "",
                    label: t(l)("deliveryDistance"),
                    "min-width": "120"
                  }, {
                    default: o(({ row: e }) => [
                      v(c(t(we)(e.delivery_distance)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(p, {
                    label: t(l)("deliveryMoney"),
                    "min-width": "120"
                  }, {
                    default: o(({ row: e }) => [
                      v(" ￥" + c(e.delivery_money), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(p, {
                    prop: "create_time",
                    label: t(l)("createTime"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    prop: "remark",
                    label: t(l)("remark"),
                    "min-width": "120"
                  }, null, 8, ["label"]),
                  n(p, {
                    label: t(l)("operation"),
                    fixed: "right",
                    "min-width": "120",
                    align: "right"
                  }, {
                    default: o(({ row: e }) => {
                      var f, q, j, O, Y, H;
                      return [
                        n(g, {
                          type: "primary",
                          link: "",
                          onClick: (P) => X(e)
                        }, {
                          default: o(() => [
                            v(c(t(l)("detail")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        (f = e.pre_status_name) != null && f.sync && ((q = e.pre_status_name) == null ? void 0 : q.sync.indexOf(Number(e.status))) != -1 ? (u(), y(g, {
                          key: 0,
                          type: "primary",
                          link: "",
                          onClick: (P) => Z(e)
                        }, {
                          default: o(() => [
                            v(c(t(l)("sync")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : x("", !0),
                        (j = e.pre_status_name) != null && j.finish && ((O = e.pre_status_name) == null ? void 0 : O.finish.indexOf(Number(e.status))) != -1 ? (u(), y(g, {
                          key: 1,
                          type: "primary",
                          link: "",
                          onClick: (P) => ee(e)
                        }, {
                          default: o(() => [
                            v(c(t(l)("finish")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : x("", !0),
                        (Y = e.pre_status_name) != null && Y.cancel && ((H = e.pre_status_name) == null ? void 0 : H.cancel.indexOf(Number(e.status))) != -1 ? (u(), y(g, {
                          key: 2,
                          type: "primary",
                          link: "",
                          onClick: (P) => le(e)
                        }, {
                          default: o(() => [
                            v(c(t(l)("cancel")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : x("", !0)
                      ];
                    }),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [z, i.loading]
              ]),
              m("div", Ge, [
                n(ie, {
                  "current-page": i.page,
                  "onUpdate:current-page": a[6] || (a[6] = (e) => i.page = e),
                  "page-size": i.limit,
                  "onUpdate:page-size": a[7] || (a[7] = (e) => i.limit = e),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: i.total,
                  onSizeChange: a[8] || (a[8] = (e) => h()),
                  onCurrentChange: h
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        }),
        n(Be, {
          ref_key: "localRecordDetailRef",
          ref: N
        }, null, 512),
        n(se, {
          ref_key: "mapInfoRef",
          ref: L
        }, null, 512),
        n(ce, {
          modelValue: V.value,
          "onUpdate:modelValue": a[14] || (a[14] = (e) => V.value = e),
          title: t(l)("deliveryCancel"),
          width: "480",
          class: "diy-dialog-wrap",
          "destroy-on-close": !0
        }, {
          footer: o(() => [
            m("span", Je, [
              n(g, {
                onClick: a[12] || (a[12] = (e) => V.value = !1)
              }, {
                default: o(() => [
                  v(c(t(l)("cancel")), 1)
                ]),
                _: 1
              }),
              n(g, {
                type: "primary",
                loading: k.value,
                onClick: a[13] || (a[13] = (e) => te($.value))
              }, {
                default: o(() => [
                  v(c(t(l)("confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          default: o(() => [
            J((u(), y(I, {
              model: s,
              "label-width": "120px",
              ref_key: "formRef",
              ref: $,
              rules: t(ae),
              class: "page-form"
            }, {
              default: o(() => [
                s.cancel_type != "merchant" ? (u(), D(w, { key: 0 }, [
                  n(_, {
                    label: t(l)("cancelReason"),
                    prop: "cancel_reason_id"
                  }, {
                    default: o(() => [
                      n(B, {
                        modelValue: s.cancel_reason_id,
                        "onUpdate:modelValue": a[9] || (a[9] = (e) => s.cancel_reason_id = e),
                        clearable: "",
                        class: "input-item",
                        placeholder: t(l)("cancelReasonSelectPlaceholder")
                      }, {
                        default: o(() => [
                          (u(!0), D(w, null, G(F.value, (e, f) => (u(), y(U, {
                            key: f,
                            label: e,
                            value: f
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  s.cancel_reason_id == 1e4 ? (u(), y(_, {
                    key: 0,
                    prop: "cancel_reason"
                  }, {
                    default: o(() => [
                      n(d, {
                        modelValue: s.cancel_reason,
                        "onUpdate:modelValue": a[10] || (a[10] = (e) => s.cancel_reason = e),
                        type: "textarea",
                        rows: "4",
                        maxlength: "200",
                        clearable: "",
                        class: "input-width",
                        placeholder: t(l)("cancelReasonPlaceholder")
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  })) : x("", !0)
                ], 64)) : x("", !0),
                s.cancel_type == "merchant" ? (u(), y(_, {
                  key: 1,
                  label: t(l)("cancelReason"),
                  prop: "cancel_reason"
                }, {
                  default: o(() => [
                    n(d, {
                      modelValue: s.cancel_reason,
                      "onUpdate:modelValue": a[11] || (a[11] = (e) => s.cancel_reason = e),
                      type: "textarea",
                      rows: "4",
                      maxlength: "200",
                      clearable: "",
                      class: "input-width",
                      placeholder: t(l)("cancelReasonPlaceholder")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : x("", !0)
              ]),
              _: 1
            }, 8, ["model", "rules"])), [
              [z, k.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const il = /* @__PURE__ */ Ie(Ke, [["__scopeId", "data-v-0f231654"]]);
export {
  il as default
};
