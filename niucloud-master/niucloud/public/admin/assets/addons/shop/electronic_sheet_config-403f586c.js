import { ElTabPane as j, ElTabs as A, ElRadio as F, ElRadioGroup as L, ElButton as z, ElFormItem as H, ElInput as K, ElCard as $, ElAlert as G, ElForm as J, ElLoadingDirective as O } from "element-plus/es";
import { defineComponent as Q, ref as y, reactive as x, openBlock as h, createElementBlock as v, createVNode as t, withCtx as s, createElementVNode as r, toDisplayString as i, unref as o, withDirectives as W, createBlock as X, createTextVNode as u, createCommentVNode as V, pushScopeId as Y, popScopeId as Z } from "vue";
import { t as l } from "/admin/assets/shared/admin-lang.js";
import { useRoute as ee, useRouter as te } from "vue-router";
import { a as le, b as oe } from "./electronic_sheet-e3cd8985.js";
import { _ as re } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const m = (f) => (Y("data-v-99381555"), f = f(), Z(), f), ae = { class: "main-container" }, se = { class: "flex justify-between items-center mb-[5px] h-[32px]" }, ne = { class: "text-lg" }, de = { class: "panel-title !text-sm" }, ie = {
  key: 0,
  class: "text-[12px] text-[#b2b2b2]"
}, pe = { key: 0 }, ce = { class: "text-[12px] text-[#b2b2b2]" }, _e = { class: "text-[12px] text-[#b2b2b2]" }, ue = { class: "panel-title !text-sm" }, me = /* @__PURE__ */ m(() => /* @__PURE__ */ r("p", null, "用双端口加载主JS文件Lodop.js（或CLodopfuncs.js兼容老版本）以防其中某端口被占", -1)), fe = /* @__PURE__ */ m(() => /* @__PURE__ */ r("p", null, "HTTP推荐端口：8000/18000，HTTPS推荐端口：8443", -1)), he = /* @__PURE__ */ m(() => /* @__PURE__ */ r("p", null, "1. 请将打印机连接至本机。 ", -1)), be = /* @__PURE__ */ m(() => /* @__PURE__ */ r("p", null, [
  /* @__PURE__ */ u("2. 在本机上安装打印控件。下载链接："),
  /* @__PURE__ */ r("a", {
    href: "http://www.lodop.net/download.html",
    target: "_blank",
    class: "text-primary"
  }, "http://www.lodop.net/download.html")
], -1)), ve = /* @__PURE__ */ m(() => /* @__PURE__ */ r("p", null, "3. 将打印控件中的打印端口下面的打印端口设为相同。", -1)), ge = { class: "fixed-footer-wrap" }, ke = { class: "fixed-footer" }, we = /* @__PURE__ */ Q({
  __name: "electronic_sheet_config",
  setup(f) {
    const E = ee(), P = te(), T = E.meta.title, p = y(!0), C = (d) => {
      P.push({ path: d });
    }, a = x({
      interface_type: "kdbird",
      kdniao_id: "",
      kdniao_api_key: "",
      server_port1: "8000",
      server_port2: "18000",
      https_port: "8443"
    });
    (async () => {
      const d = await (await le()).data;
      Object.keys(a).forEach((e) => {
        d[e] != null && (a[e] = d[e]);
      }), p.value = !1;
    })();
    const S = (d) => {
      window.open(d, "_blank");
    }, g = y(), I = x({
      server_port1: [
        { required: !0, message: l("serverPort1Placeholder"), trigger: "blur" }
      ],
      server_port2: [
        { required: !0, message: l("serverPort2Placeholder"), trigger: "blur" }
      ],
      https_port: [
        { required: !0, message: l("httpsPortPlaceholder"), trigger: "blur" }
      ]
    }), D = async (d) => {
      p.value || !d || await d.validate(async (e) => {
        e && (p.value = !0, oe(a).then(() => {
          p.value = !1;
        }).catch(() => {
          p.value = !1;
        }));
      });
    };
    return (d, e) => {
      const k = j, B = A, R = F, q = L, w = z, c = H, _ = K, b = $, U = G, M = J, N = O;
      return h(), v("div", ae, [
        t(b, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: s(() => [
            r("div", se, [
              r("span", ne, i(o(T)), 1)
            ]),
            t(B, {
              "model-value": "/shop/delivery/electronic_sheet/config",
              onTabChange: C
            }, {
              default: s(() => [
                t(k, {
                  label: o(l)("tabESTemplate"),
                  name: "/shop/delivery/electronic_sheet"
                }, null, 8, ["label"]),
                t(k, {
                  label: o(l)("tabESConfig"),
                  name: "/shop/delivery/electronic_sheet/config"
                }, null, 8, ["label"])
              ]),
              _: 1
            }),
            W((h(), X(M, {
              class: "page-form",
              model: a,
              rules: I,
              "label-width": "150px",
              ref_key: "formRef",
              ref: g
            }, {
              default: s(() => [
                t(b, {
                  class: "box-card !border-none",
                  shadow: "never"
                }, {
                  default: s(() => [
                    r("h3", de, i(o(l)("apiSet")), 1),
                    t(c, {
                      label: o(l)("interfaceType"),
                      prop: "interface_type"
                    }, {
                      default: s(() => [
                        r("div", null, [
                          t(q, {
                            modelValue: a.interface_type,
                            "onUpdate:modelValue": e[0] || (e[0] = (n) => a.interface_type = n)
                          }, {
                            default: s(() => [
                              t(R, {
                                label: "kdbird",
                                size: "large"
                              }, {
                                default: s(() => [
                                  u(i(o(l)("kdn")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          a.interface_type == "kdbird" ? (h(), v("p", ie, [
                            u(i(o(l)("promptTips1-1")) + " ", 1),
                            t(w, {
                              class: "button-size",
                              type: "primary",
                              link: "",
                              onClick: e[1] || (e[1] = (n) => S("https://www.kdniao.com/reg?from=niucloud"))
                            }, {
                              default: s(() => [
                                u("https://www.kdniao.com")
                              ]),
                              _: 1
                            })
                          ])) : V("", !0)
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a.interface_type == "kdbird" ? (h(), v("div", pe, [
                      t(c, {
                        label: o(l)("kdnEBusinessIDLabel"),
                        class: "input-item"
                      }, {
                        default: s(() => [
                          r("div", null, [
                            t(_, {
                              modelValue: a.kdniao_id,
                              "onUpdate:modelValue": e[2] || (e[2] = (n) => a.kdniao_id = n),
                              modelModifiers: { trim: !0 },
                              placeholder: o(l)("kdnEBusinessIDPlaceholder"),
                              class: "input-width",
                              clearable: ""
                            }, null, 8, ["modelValue", "placeholder"]),
                            r("p", ce, i(o(l)("kdnEBusinessIDTips")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      t(c, {
                        label: "API key",
                        class: "input-item"
                      }, {
                        default: s(() => [
                          r("div", null, [
                            t(_, {
                              modelValue: a.kdniao_api_key,
                              "onUpdate:modelValue": e[3] || (e[3] = (n) => a.kdniao_api_key = n),
                              modelModifiers: { trim: !0 },
                              clearable: "",
                              placeholder: o(l)("kdnAppKeyPlaceholder"),
                              class: "input-width"
                            }, null, 8, ["modelValue", "placeholder"]),
                            r("p", _e, i(o(l)("kdnAppKeyTips")), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ])) : V("", !0)
                  ]),
                  _: 1
                }),
                t(b, {
                  class: "box-card !border-none",
                  shadow: "never"
                }, {
                  default: s(() => [
                    r("h3", ue, i(o(l)("printerSet")), 1),
                    t(U, {
                      type: "warning",
                      closable: !1,
                      class: "!mb-[10px]"
                    }, {
                      default: s(() => [
                        me,
                        fe,
                        he,
                        be,
                        ve
                      ]),
                      _: 1
                    }),
                    t(c, {
                      label: o(l)("serverPort1"),
                      class: "input-item-required",
                      prop: "server_port1"
                    }, {
                      default: s(() => [
                        r("div", null, [
                          t(_, {
                            modelValue: a.server_port1,
                            "onUpdate:modelValue": e[4] || (e[4] = (n) => a.server_port1 = n),
                            modelModifiers: { trim: !0 },
                            placeholder: o(l)("serverPort1Placeholder"),
                            class: "input-width",
                            clearable: ""
                          }, null, 8, ["modelValue", "placeholder"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(c, {
                      label: o(l)("serverPort2"),
                      class: "input-item-required",
                      prop: "server_port2"
                    }, {
                      default: s(() => [
                        r("div", null, [
                          t(_, {
                            modelValue: a.server_port2,
                            "onUpdate:modelValue": e[5] || (e[5] = (n) => a.server_port2 = n),
                            modelModifiers: { trim: !0 },
                            placeholder: o(l)("serverPort2Placeholder"),
                            class: "input-width",
                            clearable: ""
                          }, null, 8, ["modelValue", "placeholder"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    t(c, {
                      label: o(l)("httpsPort"),
                      class: "input-item-required",
                      prop: "https_port"
                    }, {
                      default: s(() => [
                        r("div", null, [
                          t(_, {
                            modelValue: a.https_port,
                            "onUpdate:modelValue": e[6] || (e[6] = (n) => a.https_port = n),
                            modelModifiers: { trim: !0 },
                            placeholder: o(l)("httpsPortPlaceholder"),
                            class: "input-width",
                            clearable: ""
                          }, null, 8, ["modelValue", "placeholder"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])), [
              [N, p.value]
            ]),
            r("div", ge, [
              r("div", ke, [
                t(w, {
                  type: "primary",
                  loading: p.value,
                  onClick: e[7] || (e[7] = (n) => D(g.value))
                }, {
                  default: s(() => [
                    u(i(o(l)("save")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Ie = /* @__PURE__ */ re(we, [["__scopeId", "data-v-99381555"]]);
export {
  Ie as default
};
