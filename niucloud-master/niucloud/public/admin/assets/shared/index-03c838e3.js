import { defineComponent as I, ref as u, reactive as J, onMounted as Q, resolveComponent as i, resolveDirective as W, openBlock as h, createElementBlock as E, createVNode as l, withCtx as s, createElementVNode as n, toDisplayString as c, unref as d, createTextVNode as X, withDirectives as Y, createBlock as g, createCommentVNode as Z } from "vue";
import { bu as A, hf as ee, bx as te, t as o, H as ae, hg as oe, hd as ne, he as se, k as le, hh as ce } from "./core-shared-86a0da16.js";
import { ElMessageBox as j, ElMessage as ie } from "element-plus";
import de from "./add-table-e49812f0.js";
import { useRoute as re, useRouter as pe } from "vue-router";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const _e = { class: "main-container" }, ue = { class: "flex justify-between items-center" }, me = { class: "text-page-title" }, he = { class: "text-[14px] font-[700]" }, fe = { class: "text-[#999]" }, ve = { class: "mt-[20px] mb-[40px] h-[32px]" }, ge = { class: "text-[14px] font-[700]" }, xe = { class: "text-[#999]" }, be = /* @__PURE__ */ n("div", { class: "mt-[20px] mb-[40px] h-[32px]" }, null, -1), we = { class: "text-[14px] font-[700]" }, ye = { class: "text-[#999]" }, ke = /* @__PURE__ */ n("div", { class: "mt-[20px] mb-[40px] h-[32px]" }, null, -1), Te = { class: "text-[14px] font-[700]" }, De = { class: "text-[#999]" }, Fe = /* @__PURE__ */ n("div", { class: "mt-[20px] mb-[40px] h-[32px]" }, null, -1), Ce = { class: "text-[14px] font-[700]" }, Ne = { class: "text-[#999]" }, Pe = /* @__PURE__ */ n("div", { class: "mt-[20px] mb-[40px] h-[32px]" }, null, -1), Ae = { class: "flex h-[50vh]" }, Be = { class: "flex items-center" }, Ve = { class: "pl-[5px]" }, Ee = {
  class: "ml-[20px]",
  style: { width: "calc(100% - 285px)" }
}, Ye = /* @__PURE__ */ I({
  __name: "index",
  setup(je) {
    const L = re().meta.title, S = pe(), G = u("codeGeneration"), a = J({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        table_name: "",
        table_content: "",
        addon_name: ""
      }
    }), Se = u(), Ge = (e) => {
      e && (e.resetFields(), x());
    };
    Q(() => {
      window.codeActiveName && (G.value = window.codeActiveName + "", window.codeActiveName = null), x(A(a.searchParam).page);
    });
    const x = (e = 1) => {
      a.loading = !0, a.page = e, ee({
        page: a.page,
        limit: a.limit,
        ...a.searchParam
      }).then((t) => {
        a.loading = !1, a.data = t.data.data, a.total = t.data.total, te(a.page, a.limit, a.searchParam);
      }).catch(() => {
        a.loading = !1;
      });
    }, O = u([]), Oe = (e) => {
      ae({ search: e }).then((t) => {
        O.value = t.data;
      });
    }, F = u(null), R = () => {
      F.value.setFormData(), F.value.showDialog = !0;
    }, Re = (e) => {
      j.confirm(
        o("codeDeleteTips"),
        o("warning"),
        {
          confirmButtonText: o("confirm"),
          cancelButtonText: o("cancel"),
          type: "warning"
        }
      ).then(() => {
        oe(e).then(() => {
          x(A(a.searchParam).page);
        }).catch(() => {
        });
      });
    }, Me = (e) => {
      S.push("/tools/code/edit?id=" + e.id);
    }, He = (e) => {
      ne({ id: e }).then((t) => {
        a.loading = !1, j.confirm(
          t.msg != "2" ? o("saveAndSyncText") : o("saveAndSyncText1"),
          o("warning"),
          {
            confirmButtonText: o("confirm"),
            cancelButtonText: o("cancel")
          }
        ).then(() => {
          M(e, 3);
        }).catch(() => {
        });
      }).catch(() => {
        a.loading = !1;
      });
    }, M = (e, t) => {
      a.loading = !0, se({ id: e, generate_type: t }).then((r) => {
        ie({
          type: "success",
          message: "操作成功"
        }), t != 3 ? (a.loading = !1, window.open(le(r.data.file), "_blank")) : x(A(a.searchParam).page);
      }).catch(() => {
        a.loading = !1;
      });
    }, C = u([]), N = u(!1), b = u([]), w = u(!1), y = u(""), k = u(""), Ke = (e) => {
      N.value = !0, w.value = !0, y.value = "", b.value = [], k.value = "", ce(e).then((t) => {
        C.value = t.data, b.value = K(t.data.map((r) => r.file_dir + r.name)), y.value = C.value[0].content, w.value = !1;
      }).catch(() => {
        w.value = !1;
      });
    }, H = (e) => {
      C.value.forEach((t) => {
        e.path === t.file_dir + t.name && (y.value = t.content);
      });
    }, K = (e) => {
      const t = [];
      if (Array.isArray(e))
        for (let p = 0; p < e.length; ++p) {
          const T = e[p].split("/");
          let f = t;
          for (let v = 0; v < T.length; ++v) {
            const m = T[v];
            let _ = null;
            for (var r = 0; r < f.length; ++r) {
              const D = f[r];
              if (D.name === m) {
                _ = D;
                break;
              }
            }
            _ || (_ = { name: m, path: m.indexOf(".") < 0 ? "" : e[p], key: "k" + p + v + r }, m.indexOf(".") < 0 && (_.children = []), _.path === e[0] && (k.value = _.key), f.push(_)), _.children && (f = _.children);
          }
        }
      return t;
    };
    return (e, t) => {
      const r = i("el-button"), p = i("el-step"), T = i("el-steps"), f = i("Folder"), v = i("FolderOpened"), m = i("el-icon"), _ = i("Document"), D = i("el-tree"), B = i("el-scrollbar"), U = i("highlightjs"), $ = i("el-dialog"), q = i("el-card"), z = W("loading");
      return h(), E("div", _e, [
        l(q, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            n("div", ue, [
              n("span", me, c(d(L)), 1)
            ]),
            l(T, {
              active: 5,
              direction: "vertical",
              class: "mt-[20px]"
            }, {
              default: s(() => [
                l(p, null, {
                  title: s(() => [
                    n("p", he, c(d(o)("step1")), 1)
                  ]),
                  description: s(() => [
                    n("span", fe, c(d(o)("describe1")), 1),
                    n("div", ve, [
                      l(r, {
                        type: "primary",
                        class: "w-[100px]",
                        onClick: R
                      }, {
                        default: s(() => [
                          X(c(d(o)("btn1")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                l(p, null, {
                  title: s(() => [
                    n("p", ge, c(d(o)("step2")), 1)
                  ]),
                  description: s(() => [
                    n("span", xe, c(d(o)("describe2")), 1),
                    be
                  ]),
                  _: 1
                }),
                l(p, null, {
                  title: s(() => [
                    n("p", we, c(d(o)("step3")), 1)
                  ]),
                  description: s(() => [
                    n("span", ye, c(d(o)("describe3")), 1),
                    ke
                  ]),
                  _: 1
                }),
                l(p, null, {
                  title: s(() => [
                    n("p", Te, c(d(o)("step4")), 1)
                  ]),
                  description: s(() => [
                    n("span", De, c(d(o)("describe4")), 1),
                    Fe
                  ]),
                  _: 1
                }),
                l(p, null, {
                  title: s(() => [
                    n("p", Ce, c(d(o)("step5")), 1)
                  ]),
                  description: s(() => [
                    n("span", Ne, c(d(o)("describe5")), 1),
                    Pe
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l(de, {
              ref_key: "addCodeDialog",
              ref: F
            }, null, 512),
            l($, {
              modelValue: N.value,
              "onUpdate:modelValue": t[0] || (t[0] = (P) => N.value = P),
              class: "dialog-visible",
              width: "70%",
              title: "代码预览"
            }, {
              default: s(() => [
                Y((h(), E("div", Ae, [
                  l(B, { class: "h-[100%] w-[270px]" }, {
                    default: s(() => [
                      b.value.length && k.value != "" ? (h(), g(D, {
                        key: 0,
                        data: b.value,
                        props: { label: "name", value: "key" },
                        "node-key": "key",
                        "current-node-key": k.value,
                        "expand-on-click-node": !1,
                        "highlight-current": "",
                        "default-expand-all": "",
                        ref: "treeRef",
                        onNodeClick: H
                      }, {
                        default: s(({ node: P, data: V }) => [
                          n("div", Be, [
                            V.children ? (h(), g(m, { key: 0 }, {
                              default: s(() => [
                                P.expanded ? (h(), g(v, { key: 1 })) : (h(), g(f, { key: 0 }))
                              ]),
                              _: 2
                            }, 1024)) : (h(), g(m, { key: 1 }, {
                              default: s(() => [
                                l(_)
                              ]),
                              _: 1
                            })),
                            n("span", Ve, c(V.name), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["data", "current-node-key"])) : Z("", !0)
                    ]),
                    _: 1
                  }),
                  n("div", Ee, [
                    l(B, { class: "h-[100%] w-[100%]" }, {
                      default: s(() => [
                        l(U, {
                          autodetect: "",
                          class: "h-[100%]",
                          code: y.value
                        }, null, 8, ["code"])
                      ]),
                      _: 1
                    })
                  ])
                ])), [
                  [z, w.value]
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  Ye as default
};
