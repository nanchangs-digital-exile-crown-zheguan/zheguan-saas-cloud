import { defineComponent as w, ref as v, resolveComponent as m, resolveDirective as M, withDirectives as P, openBlock as u, createElementBlock as h, createVNode as i, unref as t, createElementVNode as e, toDisplayString as a, createCommentVNode as I, normalizeClass as E, withCtx as o, createTextVNode as _, Fragment as H, createBlock as f, pushScopeId as J, popScopeId as K } from "vue";
import { _ as O } from "./member_head-81b0c11e.js";
import { gk as Q, gB as W, k as X, t as s, gC as Y, gD as Z, a as ee } from "./core-shared-86a0da16.js";
import { useRoute as te, useRouter as se } from "vue-router";
import { ArrowLeft as ae } from "@element-plus/icons-vue";
import le from "./create-site-limit-9efe507b.js";
import { ElMessageBox as ie } from "element-plus";
import "axios";
import "vue-i18n";
import "pinia";
const F = (b) => (J("data-v-83e42754"), b = b(), K(), b), oe = { class: "user-detail" }, ne = { class: "user-card user-header" }, _e = { class: "user-identity" }, re = ["src"], ue = {
  key: 1,
  class: "user-avatar",
  src: O,
  alt: ""
}, ce = { class: "user-identity__text" }, de = { class: "user-title-row" }, me = { class: "user-name" }, pe = {
  key: 0,
  class: "user-tag"
}, ve = { class: "user-sub" }, fe = { class: "user-sub__label" }, he = { class: "user-sub__value" }, be = { class: "user-meta" }, ge = { class: "user-meta__item" }, ye = { class: "user-meta__label" }, ke = { class: "user-meta__value" }, Ce = /* @__PURE__ */ F(() => /* @__PURE__ */ e("i", { class: "user-meta__divider" }, null, -1)), Se = { class: "user-meta__item" }, xe = { class: "user-meta__label" }, Le = { class: "user-meta__value" }, Ie = /* @__PURE__ */ F(() => /* @__PURE__ */ e("i", { class: "user-meta__divider" }, null, -1)), Te = { class: "user-meta__item" }, Be = { class: "user-meta__label" }, Ne = { class: "user-meta__value" }, De = { class: "user-card" }, Ve = { class: "user-section-title" }, Ue = { class: "user-info-grid" }, $e = { class: "user-info-col" }, Ee = { class: "user-field" }, Fe = { class: "user-field__label" }, Re = { class: "user-field__value" }, qe = { class: "user-field" }, ze = { class: "user-field__label" }, Ae = { class: "user-info-col" }, Ge = { class: "user-field" }, je = { class: "user-field__label" }, we = { class: "user-field__value" }, Me = { class: "user-field" }, Pe = { class: "user-field__label" }, He = { class: "user-card user-tab-card" }, Je = { class: "table-panel" }, Ke = { class: "flex justify-end mb-[16px]" }, Oe = { class: "table-panel" }, Qe = /* @__PURE__ */ w({
  __name: "user_info",
  setup(b) {
    const S = te(), T = se(), R = S.meta.title, q = () => {
      T.push("/admin/site/user");
    }, g = parseInt(S.query.uid || 0), B = v(!0), n = v({}), N = v(S.query.tab || "siteInfo"), p = v({}), D = v([]), x = v(null);
    Q(g).then(({ data: c }) => {
      n.value = c, B.value = !1;
    }).catch(), W({ uid: g }).then(({ data: c }) => {
      const d = {};
      c.forEach((y) => {
        d[y.group_id] = y;
      }), p.value = d;
    });
    const L = () => {
      Y(g).then(({ data: c }) => {
        D.value = c;
      });
    };
    L();
    const z = (c) => {
      T.push({ path: "/admin/site/info", query: { id: c.site_id } });
    }, A = (c) => {
      ie.confirm(
        s("createSiteTimeLimitDeleteTips"),
        s("warning"),
        {
          confirmButtonText: s("confirm"),
          cancelButtonText: s("cancel"),
          type: "warning"
        }
      ).then(() => {
        Z(c).then(() => {
          L();
        }).catch(() => {
        });
      });
    };
    return (c, d) => {
      const y = m("el-page-header"), r = m("el-table-column"), k = m("el-tag"), C = m("el-button"), V = m("el-table"), U = m("el-tab-pane"), G = m("el-tabs"), j = M("loading");
      return P((u(), h("div", oe, [
        i(y, {
          content: t(R),
          icon: t(ae),
          onBack: d[0] || (d[0] = (l) => q())
        }, null, 8, ["content", "icon"]),
        e("section", ne, [
          e("div", _e, [
            n.value.head_img ? (u(), h("img", {
              key: 0,
              class: "user-avatar",
              src: t(X)(n.value.head_img),
              alt: ""
            }, null, 8, re)) : (u(), h("img", ue)),
            e("div", ce, [
              e("div", de, [
                e("span", me, a(n.value.username), 1),
                n.value.is_super_admin ? (u(), h("span", pe, "超级管理员")) : I("", !0)
              ]),
              e("div", ve, [
                e("span", fe, a(t(s)("uid")), 1),
                e("span", he, a(n.value.uid), 1)
              ])
            ])
          ]),
          e("div", be, [
            e("div", ge, [
              e("span", ye, a(t(s)("addTime")), 1),
              e("span", ke, a(n.value.create_time), 1)
            ]),
            Ce,
            e("div", Se, [
              e("span", xe, a(t(s)("lastLoginTime")), 1),
              e("span", Le, a(n.value.last_time || ""), 1)
            ]),
            Ie,
            e("div", Te, [
              e("span", Be, a(t(s)("lastLoginIP")), 1),
              e("span", Ne, a(n.value.last_ip || ""), 1)
            ])
          ])
        ]),
        e("section", De, [
          e("h2", Ve, a(t(s)("userInfo")), 1),
          e("div", Ue, [
            e("div", $e, [
              e("div", Ee, [
                e("span", Fe, a(t(s)("uid")), 1),
                e("span", Re, a(n.value.uid), 1)
              ]),
              e("div", qe, [
                e("span", ze, a(t(s)("realname")), 1),
                e("span", {
                  class: E(["user-field__value", { "is-empty": !n.value.real_name }])
                }, a(n.value.real_name || "--"), 3)
              ])
            ]),
            e("div", Ae, [
              e("div", Ge, [
                e("span", je, a(t(s)("username")), 1),
                e("span", we, a(n.value.username), 1)
              ]),
              e("div", Me, [
                e("span", Pe, a(t(s)("手机号")), 1),
                e("span", {
                  class: E(["user-field__value", { "is-empty": !n.value.mobile }])
                }, a(n.value.mobile || "--"), 3)
              ])
            ])
          ])
        ]),
        e("section", He, [
          i(G, {
            modelValue: N.value,
            "onUpdate:modelValue": d[2] || (d[2] = (l) => N.value = l),
            class: "user-tabs"
          }, {
            default: o(() => [
              i(U, {
                label: t(s)("siteInfo"),
                name: "siteInfo"
              }, {
                default: o(() => [
                  e("div", Je, [
                    i(V, {
                      data: n.value.roles,
                      size: "large"
                    }, {
                      default: o(() => [
                        i(r, {
                          prop: "site_id",
                          label: t(s)("siteId"),
                          width: "100px"
                        }, null, 8, ["label"]),
                        i(r, {
                          prop: "site_name",
                          label: t(s)("siteName")
                        }, null, 8, ["label"]),
                        i(r, {
                          prop: "is_admin",
                          label: t(s)("isAdmin"),
                          "min-width": "180",
                          align: "center"
                        }, {
                          default: o(({ row: l }) => [
                            _(a(l.is_admin ? t(s)("yes") : t(s)("no")), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(r, {
                          label: t(s)("status"),
                          "min-width": "80",
                          align: "center"
                        }, {
                          default: o(({ row: l }) => [
                            l.site_status_name ? (u(), h(H, { key: 0 }, [
                              l.site_status == 1 ? (u(), f(k, {
                                key: 0,
                                class: "ml-2",
                                type: "success"
                              }, {
                                default: o(() => [
                                  _(a(l.site_status_name), 1)
                                ]),
                                _: 2
                              }, 1024)) : l.site_status == 3 ? (u(), f(k, {
                                key: 1,
                                class: "ml-2",
                                type: "error"
                              }, {
                                default: o(() => [
                                  _(a(l.site_status_name), 1)
                                ]),
                                _: 2
                              }, 1024)) : (u(), f(k, {
                                key: 2,
                                class: "ml-2",
                                type: "error"
                              }, {
                                default: o(() => [
                                  _(a(l.site_status_name), 1)
                                ]),
                                _: 2
                              }, 1024))
                            ], 64)) : (u(), f(k, {
                              key: 1,
                              class: "ml-2",
                              type: "error"
                            }, {
                              default: o(() => [
                                _(a(t(s)("siteEmpty")), 1)
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(r, {
                          prop: "expire_time",
                          label: t(s)("expireTime")
                        }, null, 8, ["label"]),
                        i(r, {
                          label: t(s)("operation"),
                          align: "right",
                          fixed: "right"
                        }, {
                          default: o(({ row: l }) => [
                            l.site_status_name ? (u(), f(C, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: ($) => z(l)
                            }, {
                              default: o(() => [
                                _(a(t(s)("info")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : I("", !0)
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ])
                ]),
                _: 1
              }, 8, ["label"]),
              n.value.is_super_admin ? I("", !0) : (u(), f(U, {
                key: 0,
                label: t(s)("userCreateSiteLimit"),
                name: "userCreateSiteLimit"
              }, {
                default: o(() => [
                  e("div", Ke, [
                    i(C, {
                      type: "primary",
                      onClick: d[1] || (d[1] = (l) => x.value.setFormData())
                    }, {
                      default: o(() => [
                        _(a(t(s)("addSserCreateSiteLimit")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  e("div", Oe, [
                    i(V, {
                      data: D.value,
                      size: "large"
                    }, {
                      default: o(() => [
                        i(r, {
                          label: t(s)("siteGroup")
                        }, {
                          default: o(({ row: l }) => [
                            _(a(p.value[l.group_id] ? p.value[l.group_id].group_name : ""), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(r, {
                          label: t(s)("createdSiteNum")
                        }, {
                          default: o(({ row: l }) => [
                            _(a(p.value[l.group_id] ? p.value[l.group_id].site_num : 0), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(r, {
                          prop: "num",
                          label: t(s)("createSiteNum"),
                          align: "center"
                        }, null, 8, ["label"]),
                        i(r, {
                          prop: "month",
                          label: t(s)("createSiteTimeLimit"),
                          align: "center"
                        }, {
                          default: o(({ row: l }) => [
                            _(a(l.month) + "个" + a(t(s)("month")), 1)
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i(r, {
                          label: t(s)("operation"),
                          align: "right",
                          fixed: "right"
                        }, {
                          default: o(({ row: l }) => [
                            i(C, {
                              type: "primary",
                              link: "",
                              onClick: ($) => x.value.setFormData(l.id)
                            }, {
                              default: o(() => [
                                _(a(t(s)("edit")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            i(C, {
                              type: "primary",
                              link: "",
                              onClick: ($) => A(l.id)
                            }, {
                              default: o(() => [
                                _(a(t(s)("delete")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ])
                ]),
                _: 1
              }, 8, ["label"]))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        i(le, {
          ref_key: "createSiteLimitRef",
          ref: x,
          "site-group": p.value,
          uid: t(g),
          onComplete: L
        }, null, 8, ["site-group", "uid"])
      ])), [
        [j, B.value]
      ]);
    };
  }
});
const ot = /* @__PURE__ */ ee(Qe, [["__scopeId", "data-v-83e42754"]]);
export {
  ot as default
};
