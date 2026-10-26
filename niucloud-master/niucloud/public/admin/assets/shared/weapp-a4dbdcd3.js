import { defineComponent as W, reactive as T, ref as v, computed as j, resolveComponent as d, resolveDirective as A, openBlock as V, createElementBlock as G, normalizeStyle as I, unref as r, createElementVNode as c, createVNode as o, withCtx as s, createTextVNode as b, toDisplayString as f, withDirectives as x, createBlock as E } from "vue";
import { t, g8 as J, g9 as K, ga as O, aH as Q } from "./core-shared-86a0da16.js";
import { ElMessageBox as X } from "element-plus";
import Y from "./index-49fea3c5.js";
import Z from "./index-7801d241.js";
import { useRoute as ee } from "vue-router";
import { u as te } from "./useTablePageHeight-33d60cf6.js";
import ae from "./cron-info-6cb10abc.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const le = { class: "table-fill-page__card" }, oe = { class: "table-panel mt-[20px] table-fill-page__panel" }, ne = { class: "table-fill-page__table" }, ie = { class: "dialog-footer" }, Ce = /* @__PURE__ */ W({
  __name: "weapp",
  setup(re) {
    const P = ee().meta.title, { pageRef: z, pageStyle: B } = te(), a = T({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {
        title: "",
        type: "",
        last_time: ""
      }
    }), u = (n = 1) => {
      a.loading = !0, a.page = n, J({
        page: a.page,
        limit: a.limit,
        ...a.searchParam
      }).then((e) => {
        a.loading = !1, a.data = e.data.data, a.total = e.data.total;
      }).catch(() => {
        a.loading = !1;
      });
    };
    u();
    const m = v(!1), l = T({ ...{
      id: 0,
      desc: "",
      path: "",
      version: "",
      type: "weapp"
    } }), w = v(), R = () => {
      l.id = 0, l.desc = "", l.path = "", l.version = "", m.value = !0;
    }, U = j(() => ({
      version: [
        { required: !0, message: t("versionPlaceholder"), trigger: "blur" }
      ],
      path: [
        { required: !0, validator: $, trigger: "blur" }
      ]
    })), $ = (n, e, p) => l.path == "" ? p(new Error(t("filePlaceholder"))) : p(), g = v(!1), N = async (n) => {
      g.value || !n || await n.validate(async (e) => {
        if (e) {
          g.value = !0;
          const p = l;
          (l.id > 0 ? K : O)(p).then((C) => {
            g.value = !1, m.value = !1, u();
          }).catch(() => {
            g.value = !1;
          });
        }
      });
    }, S = (n) => {
      l.id = n.id, l.desc = n.desc, l.path = n.path, l.version = n.version, m.value = !0;
    }, F = (n) => {
      X.confirm(
        t("weappVersionDeleteTips"),
        t("warning"),
        {
          confirmButtonText: t("confirm"),
          cancelButtonText: t("cancel"),
          type: "warning"
        }
      ).then(() => {
        Q(n).then(() => {
          u();
        }).catch(() => {
        });
      });
    }, h = v(null), de = (n) => {
      h.value.setFormData(n), h.value.showDialog = !0;
    };
    return (n, e) => {
      const p = d("el-button"), _ = d("el-table-column"), C = d("el-table"), D = d("el-input"), y = d("el-form-item"), M = d("upload-file"), q = d("el-form"), H = d("el-dialog"), k = A("loading");
      return V(), G("div", {
        ref_key: "pageRef",
        ref: z,
        class: "main-container table-fill-page",
        style: I(r(B))
      }, [
        c("div", le, [
          c("div", oe, [
            o(Z, {
              title: r(P),
              selectable: !1
            }, {
              actions: s(() => [
                o(p, {
                  type: "primary",
                  onClick: R
                }, {
                  default: s(() => [
                    b(f(r(t)("addVersion")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"]),
            c("div", ne, [
              x((V(), E(C, {
                height: "100%",
                data: a.data,
                size: "large"
              }, {
                empty: s(() => [
                  c("span", null, f(a.loading ? "" : r(t)("emptyData")), 1)
                ]),
                default: s(() => [
                  o(_, {
                    prop: "version",
                    label: r(t)("version"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  o(_, {
                    prop: "create_time",
                    label: r(t)("createTime"),
                    "min-width": "150"
                  }, null, 8, ["label"]),
                  o(_, {
                    label: r(t)("operation"),
                    align: "right",
                    fixed: "right",
                    width: "130"
                  }, {
                    default: s(({ row: i }) => [
                      o(p, {
                        type: "primary",
                        link: "",
                        onClick: (L) => S(i)
                      }, {
                        default: s(() => [
                          b(f(r(t)("edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      o(p, {
                        type: "primary",
                        link: "",
                        onClick: (L) => F(i.id)
                      }, {
                        default: s(() => [
                          b(f(r(t)("delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["data"])), [
                [k, a.loading]
              ])
            ]),
            o(Y, {
              "current-page": a.page,
              "onUpdate:current-page": e[0] || (e[0] = (i) => a.page = i),
              "page-size": a.limit,
              "onUpdate:page-size": e[1] || (e[1] = (i) => a.limit = i),
              total: a.total,
              onSizeChange: e[2] || (e[2] = (i) => u()),
              onCurrentChange: u
            }, null, 8, ["current-page", "page-size", "total"])
          ])
        ]),
        o(ae, {
          ref_key: "cronDialog",
          ref: h,
          onComplete: a
        }, null, 8, ["onComplete"]),
        o(H, {
          modelValue: m.value,
          "onUpdate:modelValue": e[7] || (e[7] = (i) => m.value = i),
          title: r(t)("editVersion"),
          width: "550px",
          "destroy-on-close": !0
        }, {
          footer: s(() => [
            c("span", ie, [
              o(p, {
                type: "primary",
                onClick: e[6] || (e[6] = (i) => N(w.value))
              }, {
                default: s(() => [
                  b(f(r(t)("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: s(() => [
            x((V(), E(q, {
              model: l,
              "label-width": "110px",
              ref_key: "formRef",
              ref: w,
              rules: r(U),
              class: "page-form"
            }, {
              default: s(() => [
                o(y, {
                  label: r(t)("version"),
                  prop: "version"
                }, {
                  default: s(() => [
                    o(D, {
                      modelValue: l.version,
                      "onUpdate:modelValue": e[3] || (e[3] = (i) => l.version = i),
                      modelModifiers: { trim: !0 },
                      placeholder: r(t)("versionPlaceholder"),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                o(y, {
                  label: r(t)("file"),
                  prop: "path"
                }, {
                  default: s(() => [
                    o(M, {
                      modelValue: l.path,
                      "onUpdate:modelValue": e[4] || (e[4] = (i) => l.path = i),
                      class: "input-width",
                      api: "applet/upload"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                o(y, {
                  label: r(t)("desc")
                }, {
                  default: s(() => [
                    o(D, {
                      type: "textarea",
                      modelValue: l.desc,
                      "onUpdate:modelValue": e[5] || (e[5] = (i) => l.desc = i),
                      modelModifiers: { trim: !0 },
                      class: "input-width",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])), [
              [k, n.loading]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 4);
    };
  }
});
export {
  Ce as default
};
