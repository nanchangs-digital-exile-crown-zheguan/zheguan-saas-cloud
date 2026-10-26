import { defineComponent as j, reactive as L, ref as N, resolveComponent as i, resolveDirective as O, openBlock as _, createElementBlock as k, normalizeStyle as q, unref as a, createVNode as t, withCtx as n, Fragment as z, renderList as F, createBlock as D, createTextVNode as P, toDisplayString as f, createElementVNode as w, withDirectives as A } from "vue";
import { t as o, fx as G, f$ as I } from "./core-shared-86a0da16.js";
import J from "./sms-records-info-f7395cd1.js";
import Q from "./index-49fea3c5.js";
import W from "./index-7801d241.js";
import { useRoute as X } from "vue-router";
import { u as Z } from "./useTablePageHeight-33d60cf6.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const ee = { class: "table-panel mt-[10px] table-fill-page__panel" }, le = { class: "table-fill-page__table" }, ge = /* @__PURE__ */ j({
  __name: "sms_records",
  setup(te) {
    const R = X().meta.title, { pageRef: $, pageStyle: S } = Z(), l = L({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        key: "",
        mobile: "",
        create_time: []
      }
    }), d = L({
      buyer: {
        label: o("buyerNotice"),
        list: []
      },
      seller: {
        label: o("sellerNotice"),
        list: []
      }
    });
    (async () => {
      G({}).then((s) => {
        d.buyer.list = [], d.seller.list = [], s.data.forEach((e) => {
          if (e.notice.length) {
            const u = [], c = [];
            Object.keys(e.notice).forEach((h, x) => {
              const m = e.notice[h];
              m.addon_name = e.title, m.receiver_type == 1 ? u.push({ name: m.name, value: m.key }) : c.push({ name: m.name, value: m.key });
            }), u.length && (u.unshift({ name: e.title, value: e.key, disabled: !0 }), d.buyer.list = d.buyer.list.concat(u)), c.length && (c.unshift({ name: e.title, value: e.key, disabled: !0 }), d.seller.list = d.seller.list.concat(c));
          }
        });
      }).catch((s) => {
      });
    })();
    const V = N(), p = (s = 1) => {
      l.loading = !0, l.page = s, I({
        page: l.page,
        limit: l.limit,
        ...l.searchParam
      }).then((e) => {
        l.loading = !1, l.data = e.data.data, l.total = e.data.total;
      }).catch(() => {
        l.loading = !1;
      });
    };
    p();
    const U = (s) => {
      s && (s.resetFields(), p());
    }, g = N(null), E = (s) => {
      g.value.setFormData(s), g.value.showDialog = !0;
    };
    return (s, e) => {
      const u = i("el-input"), c = i("el-form-item"), h = i("el-option"), x = i("el-option-group"), m = i("el-select"), Y = i("el-date-picker"), y = i("el-button"), B = i("el-form"), C = i("el-card"), b = i("el-table-column"), H = i("el-table"), K = O("loading");
      return _(), k("div", {
        ref_key: "pageRef",
        ref: $,
        class: "main-container table-fill-page",
        style: q(a(S))
      }, [
        t(C, {
          class: "box-card !border-none table-fill-page__card",
          shadow: "never"
        }, {
          default: n(() => [
            t(C, {
              class: "box-card !border-none my-[10px] table-search-wrap table-fill-page__search",
              shadow: "never"
            }, {
              default: n(() => [
                t(B, {
                  inline: !0,
                  model: l.searchParam,
                  ref_key: "searchFormRef",
                  ref: V
                }, {
                  default: n(() => [
                    t(c, {
                      label: a(o)("searchReceiver"),
                      prop: "mobile"
                    }, {
                      default: n(() => [
                        t(u, {
                          modelValue: l.searchParam.mobile,
                          "onUpdate:modelValue": e[0] || (e[0] = (r) => l.searchParam.mobile = r),
                          modelModifiers: { trim: !0 },
                          placeholder: a(o)("receiverPlaceholder")
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(c, {
                      label: a(o)("noticeKey"),
                      prop: "key"
                    }, {
                      default: n(() => [
                        t(m, {
                          modelValue: l.searchParam.key,
                          "onUpdate:modelValue": e[1] || (e[1] = (r) => l.searchParam.key = r),
                          clearable: "",
                          placeholder: a(o)("noticeKeyPlaceholder"),
                          class: "input-width"
                        }, {
                          default: n(() => [
                            (_(!0), k(z, null, F(d, (r, T) => (_(), D(x, {
                              key: T,
                              label: r.label
                            }, {
                              default: n(() => [
                                (_(!0), k(z, null, F(r.list, (v, M) => (_(), D(h, {
                                  label: v.name,
                                  value: v.value,
                                  disabled: v.disabled ?? !1,
                                  key: M
                                }, null, 8, ["label", "value", "disabled"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(c, {
                      label: a(o)("createTime"),
                      prop: "create_time"
                    }, {
                      default: n(() => [
                        t(Y, {
                          modelValue: l.searchParam.create_time,
                          "onUpdate:modelValue": e[2] || (e[2] = (r) => l.searchParam.create_time = r),
                          type: "datetimerange",
                          "value-format": "YYYY-MM-DD HH:mm:ss",
                          "start-placeholder": a(o)("startDate"),
                          "end-placeholder": a(o)("endDate")
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(c, null, {
                      default: n(() => [
                        t(y, {
                          type: "primary",
                          onClick: e[3] || (e[3] = (r) => p())
                        }, {
                          default: n(() => [
                            P(f(a(o)("search")), 1)
                          ]),
                          _: 1
                        }),
                        t(y, {
                          onClick: e[4] || (e[4] = (r) => U(V.value))
                        }, {
                          default: n(() => [
                            P(f(a(o)("reset")), 1)
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
            w("div", ee, [
              t(W, {
                title: a(R),
                selectable: !1
              }, null, 8, ["title"]),
              w("div", le, [
                A((_(), D(H, {
                  height: "100%",
                  data: l.data,
                  size: "large"
                }, {
                  empty: n(() => [
                    w("span", null, f(l.loading ? "" : a(o)("emptyData")), 1)
                  ]),
                  default: n(() => [
                    t(b, {
                      prop: "name",
                      label: a(o)("noticeKey"),
                      "min-width": "120"
                    }, null, 8, ["label"]),
                    t(b, {
                      prop: "sms_type_name",
                      label: a(o)("smsType"),
                      "min-width": "120"
                    }, null, 8, ["label"]),
                    t(b, {
                      prop: "mobile",
                      label: a(o)("receiver"),
                      "min-width": "120"
                    }, null, 8, ["label"]),
                    t(b, {
                      prop: "create_time",
                      label: a(o)("createTime"),
                      "min-width": "140"
                    }, null, 8, ["label"]),
                    t(b, {
                      label: a(o)("operation"),
                      align: "right",
                      fixed: "right",
                      width: "100"
                    }, {
                      default: n(({ row: r }) => [
                        t(y, {
                          type: "primary",
                          link: "",
                          onClick: (T) => E(r)
                        }, {
                          default: n(() => [
                            P(f(a(o)("info")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])), [
                  [K, l.loading]
                ])
              ]),
              t(Q, {
                "current-page": l.page,
                "onUpdate:current-page": e[5] || (e[5] = (r) => l.page = r),
                "page-size": l.limit,
                "onUpdate:page-size": e[6] || (e[6] = (r) => l.limit = r),
                total: l.total,
                onSizeChange: e[7] || (e[7] = (r) => p()),
                onCurrentChange: p
              }, null, 8, ["current-page", "page-size", "total"])
            ]),
            t(J, {
              ref_key: "recordsDialog",
              ref: g,
              onComplete: p
            }, null, 512)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
export {
  ge as default
};
