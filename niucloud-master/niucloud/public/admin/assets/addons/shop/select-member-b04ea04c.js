import { ElButton as G, ElInput as H, ElFormItem as J, ElForm as Q, ElTableColumn as W, ElTable as X, ElPagination as Y, ElDialog as Z, ElLoadingDirective as ee } from "element-plus/es";
import { defineComponent as te, computed as D, ref as w, reactive as I, openBlock as y, createElementBlock as C, createElementVNode as n, renderSlot as le, createVNode as r, withCtx as s, createTextVNode as g, toDisplayString as d, unref as a, withDirectives as k, vShow as E, withKeys as ae, withModifiers as oe, createBlock as ne, nextTick as re } from "vue";
import me from "/admin/assets/shared/core-shared.js";
import { t as o } from "/admin/assets/shared/admin-lang.js";
import { ElMessage as P } from "element-plus";
import { img as ie } from "/admin/assets/shared/core-shared.js";
import { getMemberList as se } from "/admin/assets/shared/core-shared.js";
import { c as de } from "./cloneDeep-70d647ec.js";
import { _ as ce } from "./_plugin-vue_export-helper-dad06003.js";
import "./isArrayLike-62604998.js";
const pe = { class: "inline-block ml-[10px] text-[14px]" }, ue = { class: "text-primary mx-[2px]" }, _e = { class: "flex items-center" }, fe = { class: "mr-[10px] rounded-full w-[50px] h-[50px] flex items-center justify-center" }, be = ["src"], ge = {
  key: 1,
  class: "max-w-[50px] max-h-[50px]",
  src: me,
  alt: ""
}, he = { class: "flex flex-col" }, ve = { class: "mt-[16px] flex" }, xe = { class: "flex items-center flex-1" }, ye = { class: "mr-[10px]" }, ke = { class: "text-primary mx-[2px]" }, we = { class: "dialog-footer" }, Ce = /* @__PURE__ */ te({
  __name: "select-member",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "memberSelect"],
  setup(N, { expose: T, emit: S }) {
    const _ = N, p = D({
      get() {
        return _.modelValue;
      },
      set(l) {
        S("update:modelValue", l);
      }
    }), b = w(!1), m = I({}), f = D(() => Object.keys(m).length), t = I({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        keyword: "",
        verify_member_ids: ""
      }
    }), V = w(), x = w(), z = (l, e) => {
      let c = !1;
      for (let u = 0; u < l.length; u++)
        if (l[u].member_id == e.member_id) {
          c = !0;
          break;
        }
      c ? m["member_" + e.member_id] = e : delete m["member_" + e.member_id];
    }, F = (l) => {
      l.length ? l.forEach((e) => {
        m["member_" + e.member_id] = e;
      }) : t.data.forEach((e) => {
        delete m["member_" + e.member_id];
      });
    }, h = (l = 1, e = null) => {
      t.loading = !0, t.page = l;
      const c = de(t.searchParam);
      se({
        page: t.page,
        limit: t.limit,
        ...c
      }).then((u) => {
        t.loading = !1, t.data = u.data.data, t.total = u.data.total, e && e(u.data.verify_member_ids), $();
      }).catch(() => {
        t.loading = !1;
      });
    }, $ = () => {
      re(() => {
        if (x.value)
          for (let l = 0; l < t.data.length; l++)
            x.value.toggleRowSelection(t.data[l], !1), m["member_" + t.data[l].member_id] && x.value.toggleRowSelection(t.data[l], !0);
      });
    }, R = (l) => {
      l && (l.resetFields(), h());
    }, L = () => {
      t.searchParam.verify_member_ids = p.value, h(1, (l) => {
        if (p.value) {
          for (const e in m) {
            const c = e.replace("member_", "");
            p.value.includes(Number(c)) || delete m[e];
          }
          p.value.forEach((e) => {
            m["member_" + e] || (m["member_" + e] = {});
          });
          for (let e = 0; e < t.data.length; e++)
            p.value.indexOf(t.data[e].member_id) != -1 && (m["member_" + t.data[e].member_id] = t.data[e]);
        }
      }), b.value = !0;
    }, B = () => {
      for (const l in m)
        delete m[l];
      $();
    }, U = () => {
      if (_.min && f.value < _.min) {
        P({
          type: "warning",
          message: `${o("所选会员数量不能少于")}${_.min}${o("个")}`
        });
        return;
      }
      if (_.max && _.max > 0 && f.value && f.value > _.max) {
        P({
          type: "warning",
          message: `${o("所选会员数量不能超过")}${_.max}${o("个")}`
        });
        return;
      }
      const l = [];
      for (const e in m)
        l.push(parseInt(e.replace("member_", "")));
      p.value.splice(0, p.value.length, ...l), S("memberSelect", m), b.value = !1;
    };
    return T({
      showDialog: b,
      selectMember: m,
      selectMemberNum: f
    }), (l, e) => {
      const c = G, u = H, M = J, j = Q, v = W, A = X, K = Y, O = Z, q = ee;
      return y(), C("div", null, [
        n("div", { onClick: L }, [
          le(l.$slots, "default", {}, () => [
            r(c, null, {
              default: s(() => [
                g(d(a(o)("选择会员")), 1)
              ]),
              _: 1
            }),
            k(n("div", pe, [
              n("span", null, d(a(o)("已选")), 1),
              n("span", ue, d(a(p).length), 1),
              n("span", null, d(a(o)("个")), 1)
            ], 512), [
              [E, a(p).length]
            ])
          ], !0)
        ]),
        r(O, {
          modelValue: b.value,
          "onUpdate:modelValue": e[8] || (e[8] = (i) => b.value = i),
          title: a(o)("会员选择"),
          width: "1000px",
          "destroy-on-close": !0,
          "close-on-click-modal": !1
        }, {
          footer: s(() => [
            n("span", we, [
              r(c, {
                onClick: e[7] || (e[7] = (i) => b.value = !1)
              }, {
                default: s(() => [
                  g(d(a(o)("cancel")), 1)
                ]),
                _: 1
              }),
              r(c, {
                type: "primary",
                onClick: U
              }, {
                default: s(() => [
                  g(d(a(o)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: s(() => [
            r(j, {
              inline: !0,
              model: t.searchParam,
              ref_key: "searchFormRef",
              ref: V
            }, {
              default: s(() => [
                r(M, {
                  label: a(o)("会员名称"),
                  prop: "keyword",
                  class: "form-item-wrap"
                }, {
                  default: s(() => [
                    r(u, {
                      modelValue: t.searchParam.keyword,
                      "onUpdate:modelValue": e[0] || (e[0] = (i) => t.searchParam.keyword = i),
                      modelModifiers: { trim: !0 },
                      placeholder: a(o)("memberInfoPlaceholder"),
                      maxlength: "60",
                      onKeydown: e[1] || (e[1] = ae(oe(() => {
                      }, ["prevent"]), ["enter", "native"]))
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                r(M, { class: "form-item-wrap" }, {
                  default: s(() => [
                    r(c, {
                      type: "primary",
                      onClick: e[2] || (e[2] = (i) => h())
                    }, {
                      default: s(() => [
                        g(d(a(o)("search")), 1)
                      ]),
                      _: 1
                    }),
                    r(c, {
                      onClick: e[3] || (e[3] = (i) => R(V.value))
                    }, {
                      default: s(() => [
                        g(d(a(o)("reset")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"]),
            k((y(), ne(A, {
              data: t.data,
              size: "large",
              ref_key: "memberListTableRef",
              ref: x,
              "max-height": "400",
              onSelect: z,
              onSelectAll: F
            }, {
              empty: s(() => [
                n("span", null, d(t.loading ? "" : a(o)("emptyData")), 1)
              ]),
              default: s(() => [
                r(v, {
                  type: "selection",
                  width: "55"
                }),
                r(v, {
                  prop: "nickname",
                  "show-overflow-tooltip": !0,
                  label: a(o)("memberInfo"),
                  "min-width": "150"
                }, {
                  default: s(({ row: i }) => [
                    n("div", _e, [
                      n("div", fe, [
                        i.headimg ? (y(), C("img", {
                          key: 0,
                          class: "max-w-[50px] max-h-[50px]",
                          src: a(ie)(i.headimg),
                          alt: ""
                        }, null, 8, be)) : (y(), C("img", ge))
                      ]),
                      n("div", he, [
                        n("span", null, d(i.nickname || ""), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                r(v, {
                  prop: "mobile",
                  label: a(o)("mobile"),
                  width: "180"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "point",
                  label: a(o)("point"),
                  "min-width": "80"
                }, null, 8, ["label"]),
                r(v, {
                  prop: "balance",
                  label: a(o)("balance"),
                  "min-width": "80"
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [q, t.loading]
            ]),
            n("div", ve, [
              n("div", xe, [
                k(n("div", ye, [
                  n("span", null, d(a(o)("已选择")), 1),
                  n("span", ke, d(a(f)), 1),
                  n("span", null, d(a(o)("个会员")), 1)
                ], 512), [
                  [E, a(f)]
                ]),
                k(r(c, {
                  type: "primary",
                  link: "",
                  onClick: B
                }, {
                  default: s(() => [
                    g(d(a(o)("取消选择")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [E, a(f)]
                ])
              ]),
              r(K, {
                "current-page": t.page,
                "onUpdate:current-page": e[4] || (e[4] = (i) => t.page = i),
                "page-size": t.limit,
                "onUpdate:page-size": e[5] || (e[5] = (i) => t.limit = i),
                layout: "total, sizes, prev, pager, next, jumper",
                total: t.total,
                onSizeChange: e[6] || (e[6] = (i) => h()),
                onCurrentChange: h
              }, null, 8, ["current-page", "page-size", "total"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const ze = /* @__PURE__ */ ce(Ce, [["__scopeId", "data-v-c8882e3e"]]);
export {
  ze as default
};
