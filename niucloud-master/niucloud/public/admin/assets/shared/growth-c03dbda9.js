import { defineComponent as B, reactive as H, ref as h, resolveComponent as i, resolveDirective as I, openBlock as d, createElementBlock as u, normalizeStyle as A, unref as l, createVNode as a, withCtx as n, createElementVNode as m, toDisplayString as p, Fragment as E, renderList as q, createBlock as T, createTextVNode as f, withDirectives as G } from "vue";
import { _ as J } from "./member_head-81b0c11e.js";
import { t as r, k as K, d8 as O, ds as Q } from "./core-shared-86a0da16.js";
import W from "./member-point-info-12decd43.js";
import { useRoute as X, useRouter as Z } from "vue-router";
import { u as ee } from "./useTablePageHeight-33d60cf6.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
const te = { class: "flex justify-between items-center" }, ae = { class: "text-page-title" }, le = { class: "mt-[16px] table-fill-page__panel" }, oe = { class: "table-fill-page__table" }, re = ["onClick"], ne = ["src"], ie = {
  key: 1,
  class: "w-[50px] h-[50px] mr-[10px] rounded-full",
  src: J,
  alt: ""
}, se = { class: "flex flex-col" }, me = { key: 0 }, pe = { key: 1 }, ce = { class: "mt-[16px] flex justify-end" }, Te = /* @__PURE__ */ B({
  __name: "growth",
  setup(de) {
    const v = X(), P = v.meta.title, { pageRef: L, pageStyle: V } = ee(), F = parseInt(v.query.id || 0), t = H({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        keywords: "",
        from_type: "",
        create_time: "",
        mobile: "",
        member_id: F
      }
    }), y = h([]);
    (async () => {
      y.value = await (await O("growth")).data;
    })();
    const w = h(), z = (s) => {
      s && (s.resetFields(), _());
    }, _ = (s = 1) => {
      t.loading = !0, t.page = s, Q({
        page: t.page,
        limit: t.limit,
        ...t.searchParam
      }).then((o) => {
        t.loading = !1, t.data = o.data.data, t.total = o.data.total;
      }).catch(() => {
        t.loading = !1;
      });
    };
    _();
    const b = h(null), ue = (s) => {
      b.value.setFormData(s), b.value.showDialog = !0;
    }, R = Z(), $ = (s) => {
      R.push(`/member/detail?id=${s}`);
    };
    return (s, o) => {
      const x = i("el-option"), S = i("el-select"), g = i("el-form-item"), M = i("el-date-picker"), k = i("el-button"), N = i("el-form"), D = i("el-card"), c = i("el-table-column"), U = i("el-table"), Y = i("el-pagination"), j = I("loading");
      return d(), u("div", {
        ref_key: "pageRef",
        ref: L,
        class: "main-container table-fill-page",
        style: A(l(V))
      }, [
        a(D, {
          class: "box-card !border-none table-fill-page__card",
          shadow: "never"
        }, {
          default: n(() => [
            m("div", te, [
              m("span", ae, p(l(P)), 1)
            ]),
            a(D, {
              class: "box-card !border-none mb-[10px] table-search-wrap table-fill-page__search",
              shadow: "never"
            }, {
              default: n(() => [
                a(N, {
                  inline: !0,
                  model: t.searchParam,
                  ref_key: "searchFormRef",
                  ref: w
                }, {
                  default: n(() => [
                    a(g, {
                      label: l(r)("fromType"),
                      prop: "from_type"
                    }, {
                      default: n(() => [
                        a(S, {
                          modelValue: t.searchParam.from_type,
                          "onUpdate:modelValue": o[0] || (o[0] = (e) => t.searchParam.from_type = e),
                          clearable: "",
                          placeholder: l(r)("fromTypePlaceholder"),
                          class: "input-width"
                        }, {
                          default: n(() => [
                            a(x, {
                              label: l(r)("selectPlaceholder"),
                              value: ""
                            }, null, 8, ["label"]),
                            (d(!0), u(E, null, q(y.value, (e, C) => (d(), T(x, {
                              label: e.name,
                              value: C
                            }, null, 8, ["label", "value"]))), 256))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(g, {
                      label: l(r)("createTime"),
                      prop: "create_time"
                    }, {
                      default: n(() => [
                        a(M, {
                          modelValue: t.searchParam.create_time,
                          "onUpdate:modelValue": o[1] || (o[1] = (e) => t.searchParam.create_time = e),
                          type: "datetimerange",
                          "value-format": "YYYY-MM-DD HH:mm:ss",
                          "start-placeholder": l(r)("startDate"),
                          "end-placeholder": l(r)("endDate")
                        }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(g, null, {
                      default: n(() => [
                        a(k, {
                          type: "primary",
                          onClick: o[2] || (o[2] = (e) => _())
                        }, {
                          default: n(() => [
                            f(p(l(r)("search")), 1)
                          ]),
                          _: 1
                        }),
                        a(k, {
                          onClick: o[3] || (o[3] = (e) => z(w.value))
                        }, {
                          default: n(() => [
                            f(p(l(r)("reset")), 1)
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
            m("div", le, [
              m("div", oe, [
                G((d(), T(U, {
                  height: "100%",
                  data: t.data,
                  size: "large"
                }, {
                  empty: n(() => [
                    m("span", null, p(t.loading ? "" : l(r)("emptyData")), 1)
                  ]),
                  default: n(() => [
                    a(c, {
                      prop: "member_id",
                      label: l(r)("memberId"),
                      "min-width": "110",
                      "show-overflow-tooltip": !0
                    }, {
                      default: n(({ row: e }) => [
                        f(p(e.member.member_no), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(c, {
                      label: l(r)("memberInfo"),
                      "min-width": "150",
                      "show-overflow-tooltip": !0
                    }, {
                      default: n(({ row: e }) => [
                        m("div", {
                          class: "flex items-center cursor-pointer",
                          onClick: (C) => $(e.member_id)
                        }, [
                          e.member.headimg ? (d(), u("img", {
                            key: 0,
                            class: "w-[50px] h-[50px] mr-[10px]",
                            src: l(K)(e.member.headimg),
                            alt: ""
                          }, null, 8, ne)) : (d(), u("img", ie)),
                          m("div", se, [
                            m("span", null, p(e.member.nickname || ""), 1)
                          ])
                        ], 8, re)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(c, {
                      prop: "mobile",
                      label: l(r)("mobile"),
                      "min-width": "100"
                    }, {
                      default: n(({ row: e }) => [
                        f(p(e.member.mobile || ""), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(c, {
                      prop: "account_data",
                      label: l(r)("accountData"),
                      "min-width": "110",
                      align: "right"
                    }, {
                      default: n(({ row: e }) => [
                        e.account_data >= 0 ? (d(), u("span", me, "+" + p(e.account_data), 1)) : (d(), u("span", pe, p(e.account_data), 1))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(c, {
                      prop: "account_sum",
                      label: l(r)("accountSum"),
                      "min-width": "120",
                      align: "right"
                    }, null, 8, ["label"]),
                    a(c, {
                      prop: "from_type_name",
                      label: l(r)("fromType"),
                      "min-width": "180",
                      align: "center"
                    }, null, 8, ["label"]),
                    a(c, {
                      prop: "memo",
                      label: l(r)("memo"),
                      "min-width": "300",
                      align: "left",
                      "show-overflow-tooltip": !0
                    }, null, 8, ["label"]),
                    a(c, {
                      prop: "create_time",
                      "show-overflow-tooltip": !0,
                      label: l(r)("createTime"),
                      "min-width": "150"
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])), [
                  [j, t.loading]
                ])
              ]),
              m("div", ce, [
                a(Y, {
                  "current-page": t.page,
                  "onUpdate:current-page": o[4] || (o[4] = (e) => t.page = e),
                  "page-size": t.limit,
                  "onUpdate:page-size": o[5] || (o[5] = (e) => t.limit = e),
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: t.total,
                  onSizeChange: o[6] || (o[6] = (e) => _()),
                  onCurrentChange: _
                }, null, 8, ["current-page", "page-size", "total"])
              ])
            ])
          ]),
          _: 1
        }),
        a(W, {
          ref_key: "pointDialog",
          ref: b,
          onComplete: _
        }, null, 512)
      ], 4);
    };
  }
});
export {
  Te as default
};
