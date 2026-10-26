import { a as Pe } from "./add-theme-28e40c20.js";
import { _ as Ae } from "./edit-active-cube-78be2313.js";
import { _ as $e } from "./edit-carousel-search-538f5182.js";
import { _ as Re } from "./edit-float-btn-customer-74fae00c.js";
import { _ as je } from "./edit-float-btn-43beaa7b.js";
import { _ as Ee } from "./edit-graphic-nav-54b688fd.js";
import { _ as Le } from "./edit-horz-blank-0e4fcbdb.js";
import { _ as Me } from "./edit-horz-line-03261bce.js";
import { _ as Je } from "./edit-hot-area-5938ce0e.js";
import { _ as Ge } from "./edit-image-ads-494f2c1f.js";
import { _ as Fe } from "./edit-member-info-ebb82724.js";
import { _ as Ke } from "./edit-member-level-0eeb9929.js";
import { _ as He } from "./edit-notice-ef8f80f2.js";
import { _ as We } from "./edit-page-b3c3367c.js";
import { _ as Ye } from "./edit-picture-show-6e90af81.js";
import { _ as Qe } from "./edit-rich-text-eb8c66c7.js";
import { _ as Xe } from "./edit-rubik-cube-74d58a7c.js";
import { _ as Ze } from "./edit-text-2a59af11.js";
import { a as eo } from "./edit-theme-fdcd4606.js";
import { _ as oo } from "./tabbar-select-popup-ce8837e9.js";
import { _ as to } from "./theme-list-6a68e022.js";
import "./_addon-external_empty-b652abd0.js";
import { defineComponent as io, inject as no, computed as lo, ref as f, reactive as te, toRaw as T, watch as fe, defineAsyncComponent as so, resolveComponent as m, openBlock as _, createElementBlock as y, createVNode as i, withCtx as a, createElementVNode as l, unref as o, toDisplayString as r, Fragment as Y, renderList as ie, createBlock as g, createCommentVNode as c, createTextVNode as S, normalizeClass as ne, normalizeStyle as D, resolveDynamicComponent as ye, withDirectives as he, vShow as we, isRef as ao, pushScopeId as _o, popScopeId as ro } from "vue";
import { bn as co, t as n, k as xe, bo as po, n as mo, bp as uo, bq as vo, a as go } from "./core-shared-86a0da16.js";
import { ArrowLeft as bo, View as fo, Hide as yo } from "@element-plus/icons-vue";
import { useRoute as ho, useRouter as wo } from "vue-router";
import { c as le } from "./lodash-8c6c2daa.js";
import { ElMessageBox as Ce, ElMessage as xo } from "element-plus";
import { u as Co } from "./diy-0ffc5ef1.js";
import "axios";
import "vue-i18n";
import "pinia";
const Q = (R) => (_o("data-v-90a43823"), R = R(), ro(), R), ko = { class: "main-container flex-1" }, So = { class: "pl-[5px] text-[14px]" }, Bo = { class: "text-white ml-[10px] mr-[20px] flex items-center" }, Vo = /* @__PURE__ */ Q(() => /* @__PURE__ */ l("span", { class: "mr-[5px] text-[rgba(255,255,255,.5)]" }, "｜", -1)), To = { class: "mr-[5px] text-[14px]" }, Io = {
  key: 0,
  class: "flex items-center"
}, Do = { class: "text-white mr-[10px] text-base" }, Uo = { class: "w-[180px]" }, Oo = /* @__PURE__ */ Q(() => /* @__PURE__ */ l("div", { class: "flex-1" }, null, -1)), zo = { class: "full-container flex flex-row flex-1 bg-page" }, No = { class: "component-list w-[290px]" }, qo = { class: "flex flex-row flex-wrap" }, Po = ["title", "onClick"], Ao = { class: "block text-[12px] truncate" }, $o = { class: "preview-wrap flex-1 relative mt-[20px]" }, Ro = { class: "diy-view-wrap w-[375px] shadow-lg mx-auto" }, jo = {
  key: 0,
  class: "content-wrap"
}, Eo = {
  key: 1,
  class: "content-wrap"
}, Lo = {
  key: 0,
  class: "h-[28px] max-w-[150px] mr-[8px]"
}, Mo = ["src"], Jo = {
  key: 2,
  class: "content-wrap"
}, Go = {
  key: 0,
  class: "title-wrap"
}, Fo = ["src"], Ko = { class: "search" }, Ho = /* @__PURE__ */ Q(() => /* @__PURE__ */ l("span", { class: "nc-iconfont nc-icon-sousuo-duanV6xx1 !text-[12px] absolute left-[10px]" }, null, -1)), Wo = { class: "text-[12px]" }, Yo = {
  key: 3,
  class: "content-wrap"
}, Qo = { class: "preview-block relative" }, Xo = { class: "quick-action absolute text-center -right-[70px] top-[20px] w-[42px] rounded shadow-md" }, Zo = ["src"], et = { class: "preview-iframe w-[375px] pt-[20px] px-[20px]" }, ot = { class: "font-bold text-xl mb-[40px]" }, tt = { class: "mb-[20px] flex flex-col" }, it = { class: "mb-[10px]" }, nt = { class: "edit-attribute-wrap w-[400px]" }, lt = { class: "card-header flex justify-between items-center" }, st = { class: "title flex-1" }, at = {
  key: 0,
  class: "tab-wrap flex rounded-[50px] bg-gray-100 text-[14px]"
}, dt = { class: "edit-component-wrap" }, _t = {
  key: 0,
  class: "edit-attr-item-wrap"
}, rt = { class: "mb-[10px]" }, ct = { class: "flex items-center" }, pt = { class: "mr-[3px]" }, mt = /* @__PURE__ */ Q(() => /* @__PURE__ */ l("span", { class: "iconfont iconwenhao text-[#999] !text-[14px]" }, null, -1)), ut = { class: "edit-attr-item-wrap" }, vt = { class: "mb-[10px]" }, gt = { class: "text-sm text-gray-400 ml-[90px] mb-[10px]" }, bt = /* @__PURE__ */ io({
  __name: "edit",
  setup(R) {
    no("setLayout")("decorate");
    const e = Co(), p = ho(), se = wo(), I = lo({
      get: () => {
        var d;
        return e.currentIndex >= 0 && ((d = e.editComponent) == null ? void 0 : d.isShow) !== !1;
      },
      set: (d) => {
        e.currentIndex >= 0 && e.editComponent && e.editComponent.componentName && (e.editComponent.isShow = d);
      }
    });
    p.query.id = p.query.id || 0, p.query.name = p.query.name || "", p.query.url = p.query.url || "", p.query.type = p.query.type || "", p.query.title = p.query.title || "", p.query.back = p.query.back || "/site/diy/list";
    const j = p.query.back, U = f(""), ae = f(""), E = f(""), q = f(""), X = f(""), L = f(!1), M = f(!1), de = f(0), _e = f(0), B = f([]), re = te([]), Z = f(""), ce = f(re), ke = (d) => {
    }, O = te({
      id: e.id,
      name: e.name,
      pageTitle: e.pageTitle,
      title: e.global.title,
      value: JSON.stringify({
        global: T(e.global),
        value: T(e.value)
      })
    }), ee = f(!0), Se = () => {
      ee.value ? (location.href = `${location.origin}${j}`, se.push(j)) : Ce.confirm(
        n("leavePageTitleTips"),
        n("leavePageContentTips"),
        {
          confirmButtonText: n("confirm"),
          cancelButtonText: n("cancel"),
          type: "warning",
          autofocus: !1
        }
      ).then(() => {
        location.href = `${location.origin}${j}`;
      }).catch(() => {
      });
    }, Be = /* @__PURE__ */ Object.assign({ "./components/add-theme.vue": Pe, "./components/edit-active-cube.vue": Ae, "./components/edit-carousel-search.vue": $e, "./components/edit-float-btn-customer.vue": Re, "./components/edit-float-btn.vue": je, "./components/edit-graphic-nav.vue": Ee, "./components/edit-horz-blank.vue": Le, "./components/edit-horz-line.vue": Me, "./components/edit-hot-area.vue": Je, "./components/edit-image-ads.vue": Ge, "./components/edit-member-info.vue": Fe, "./components/edit-member-level.vue": Ke, "./components/edit-notice.vue": He, "./components/edit-page.vue": We, "./components/edit-picture-show.vue": Ye, "./components/edit-rich-text.vue": Qe, "./components/edit-rubik-cube.vue": Xe, "./components/edit-text.vue": Ze, "./components/edit-theme.vue": eo, "./components/tabbar-select-popup.vue": oo, "./components/theme-list.vue": to }), J = {};
    for (const [d, t] of Object.entries(Be)) {
      const C = d.split("/").pop().split(".")[0];
      J[C] = t.default;
    }
    const G = te({}), Ve = (d) => {
      po({
        type: d,
        mode: "diy"
      }).then((t) => {
        for (const h in t.data)
          G[h] = t.data[h];
      });
    };
    fe(
      () => U.value,
      (d, t) => {
        ae.value = t;
      }
    );
    const Te = (d) => {
      if (e.value.length)
        Ce.confirm(n("changeTemplatePageTips"), n("warning"), {
          confirmButtonText: n("confirm"),
          cancelButtonText: n("cancel"),
          type: "warning"
        }).then(() => {
          if (e.changeCurrentIndex(-99), e.init(), d) {
            let t = le(G[d].data);
            e.global = t.global, e.ensureTemplateIsShow(), t.value.length && (e.value = t.value, e.normalizeComponentIsShow());
          } else
            p.query.title && (e.global.title = e.typeName);
        }).catch(() => {
          U.value = ae.value;
        });
      else if (e.init(), d) {
        let t = le(G[d].data);
        e.global = t.global, e.ensureTemplateIsShow(), t.value.length && (e.value = t.value, e.normalizeComponentIsShow());
      } else
        p.query.title && (e.global.title = e.typeName);
    };
    fe(
      () => e,
      (d, t) => {
        const h = {
          id: d.id,
          name: d.name,
          pageTitle: d.pageTitle,
          title: d.global.title,
          value: JSON.stringify({
            global: T(d.global),
            value: T(d.value)
          })
        };
        e.postMessage(), ee.value = JSON.stringify(h) == JSON.stringify(O);
      },
      { deep: !0 }
    ), co({
      id: p.query.id,
      name: p.query.name,
      url: p.query.url,
      type: p.query.type,
      title: p.query.title
    }).then(async (d) => {
      var C;
      const t = d.data;
      if (e.init(), e.id = t.id || 0, e.name = t.name, e.pageTitle = t.page_title, e.type = t.type, e.typeName = t.type_name, e.templateName = t.template, U.value = t.template, e.isDefault = t.is_default, e.pageMode = t.mode, t.global)
        for (const u in t.global)
          if (t.global[u])
            for (const w in t.global[u])
              e.global[u][w] = t.global[u][w];
          else
            e.global[u] = t.global[u];
      if (t.value) {
        const u = JSON.parse(t.value);
        e.global = u.global, e.ensureTemplateIsShow(), u.value.length && (e.value = u.value, e.normalizeComponentIsShow());
      } else
        e.global.title = t.title;
      O.id = e.id, O.name = e.name, O.pageTitle = e.pageTitle, O.title = e.global.title, O.value = JSON.stringify({
        global: T(e.global),
        value: T(e.value)
      }), B.value = t.component;
      for (const u in B.value) {
        re.push(u);
        for (const w in B.value[u].list) {
          const v = le(B.value[u].list[w]);
          v.id = e.generateRandom(), v.componentName = w, v.componentTitle = v.title, Object.assign(v, v.value), delete v.name, delete v.title, delete v.value, delete v.type, delete v.icon, e.components.push(v);
        }
      }
      if (B.value) {
        const { loadAddonComponent: u, getInstalledAddonKeys: w } = await import("./core-shared-86a0da16.js").then((b) => b.k4), v = w();
        for (const b of Object.values(B.value))
          if (b.list)
            for (const F of Object.keys(b.list)) {
              const K = b.list[F], V = ((C = K.value) == null ? void 0 : C.path) || K.path || F;
              J[V] || (J[V] = so(
                () => (async () => {
                  for (const k of v) {
                    const oe = u(k, "diy/components", V);
                    try {
                      const z = await oe();
                      if (z != null && z.default)
                        return z.default;
                    } catch {
                    }
                  }
                  throw new Error(`DIY component "${V}" not found in any addon`);
                })()
              ));
            }
      }
      console.log(B.value), Ve(t.type), q.value = t.domain_url.wap_domain, E.value = t.domain_url.wap_url, Z.value = t.page, !0 && me();
    });
    const pe = f(!1);
    window.addEventListener("message", (d) => {
      try {
        let t = {
          type: ""
        };
        if (typeof d.data == "string" ? t = JSON.parse(d.data) : typeof d.data == "object" && (t = d.data), !t.type)
          return;
        switch (t.type) {
          case "appOnLaunch":
          case "appOnReady":
            M.value = !1, L.value = !0;
            let h = new Date().getTime();
            _e.value = h - de.value, pe.value = !0;
            break;
          case "init":
            e.load = !0, e.postMessage();
            break;
          case "change":
            e.changeCurrentIndex(t.index, t.component);
            break;
          case "data":
            e.changeCurrentIndex(t.index, t.component), e.global = t.global, e.value = t.value, e.normalizeComponentIsShow();
            break;
        }
      } catch (t) {
        console.log("diy edit 后台接受数据错误", t);
      }
    }, !1);
    const Ie = () => {
      if (q.value.trim().length == 0) {
        xo({
          type: "warning",
          message: `${n("wapDomainPlaceholder")}`
        });
        return;
      }
      E.value = q.value + "/wap", me(), mo.set({ key: "wap_domain", data: E.value }), L.value = !0, M.value = !1;
    }, me = () => {
      X.value = `${E.value}${Z.value}?mode=decorate`;
      const d = () => {
        de.value = new Date().getTime(), De();
      };
      d();
      let t = 0, h = setInterval(() => {
        if (pe.value || t >= 50) {
          clearInterval(h);
          return;
        }
        d(), t++;
      }, 200);
      setTimeout(() => {
        _e.value == 0 && Ue();
      }, 1e3 * 10);
    }, De = () => {
      const d = JSON.stringify({
        type: "appOnReady",
        message: "加载完成"
      });
      window.previewIframe && window.previewIframe.contentWindow.postMessage(d, "*");
    }, Ue = () => {
      M.value = !0, L.value = !1, X.value = "";
    }, P = f(!1), ue = (d) => {
      if (!e.verify() || P.value)
        return;
      P.value = !0, e.templateName = U.value;
      let t = {
        id: e.id,
        name: e.name,
        page_title: e.pageTitle,
        title: e.global.title,
        type: e.type,
        template: e.templateName,
        is_default: e.isDefault,
        is_change: ee.value ? 0 : 1,
        value: JSON.stringify({
          global: T(e.global),
          value: T(e.value)
        })
      };
      (e.id ? uo : vo)(t).then((C) => {
        P.value = !1, C.code == 1 && (e.id ? P.value = !1 : location.href = `${location.origin}${j}`, d && d(C.data.id));
      }).catch(() => {
        P.value = !1;
      });
    }, Oe = () => {
      ue((d) => {
        d = e.id || d;
        const t = se.resolve({
          path: "/site/preview/wap",
          query: {
            page: Z.value + "?id=" + d
          }
        });
        window.open(t.href);
      });
    }, ze = () => {
      window.open("https://doc.press.niucloud.com/php/saas-framework/dev/pluginDev/configLocalDevEnv.html");
    };
    return (d, t) => {
      const h = m("el-icon"), C = m("el-option"), u = m("el-select"), w = m("el-button"), v = m("el-header"), b = m("icon"), F = m("el-collapse-item"), K = m("el-collapse"), V = m("el-scrollbar"), k = m("el-tooltip"), oe = m("el-input"), z = m("el-switch"), x = m("el-form-item"), ve = m("el-form"), H = m("el-color-picker"), W = m("el-radio"), ge = m("el-radio-group"), Ne = m("upload-image"), N = m("el-slider"), qe = m("el-card");
      return _(), y("div", ko, [
        i(v, { class: "flex items-center h-[60px] bg-primary px-[20px]" }, {
          default: a(() => [
            l("div", {
              class: "text-white cursor-pointer flex items-center",
              onClick: Se
            }, [
              i(h, { size: "14" }, {
                default: a(() => [
                  i(o(bo))
                ]),
                _: 1
              }),
              l("span", So, r(o(n)("back")), 1)
            ]),
            l("div", Bo, [
              Vo,
              l("span", To, r(o(n)("decorating")) + "：" + r(o(e).typeName), 1)
            ]),
            o(e).type && o(e).type != "DIY_PAGE" ? (_(), y("div", Io, [
              l("span", Do, r(o(n)("templatePagePlaceholder")), 1),
              l("div", Uo, [
                i(u, {
                  size: "small",
                  modelValue: U.value,
                  "onUpdate:modelValue": t[0] || (t[0] = (s) => U.value = s),
                  placeholder: o(n)("templatePagePlaceholder"),
                  onChange: Te
                }, {
                  default: a(() => [
                    i(C, {
                      label: o(n)("templatePageEmpty"),
                      value: ""
                    }, null, 8, ["label"]),
                    (_(!0), y(Y, null, ie(G, (s, A) => (_(), g(C, {
                      label: s.title,
                      value: A,
                      key: A
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ])
            ])) : c("", !0),
            Oo,
            i(w, {
              onClick: t[1] || (t[1] = (s) => Oe())
            }, {
              default: a(() => [
                S(r(o(n)("preview")), 1)
              ]),
              _: 1
            }),
            i(w, {
              onClick: t[2] || (t[2] = (s) => ue())
            }, {
              default: a(() => [
                S(r(o(n)("save")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        l("div", zo, [
          l("div", No, [
            i(V, { class: "px-[10px]" }, {
              default: a(() => [
                i(K, {
                  modelValue: ce.value,
                  "onUpdate:modelValue": t[3] || (t[3] = (s) => ce.value = s),
                  onChange: ke
                }, {
                  default: a(() => [
                    (_(!0), y(Y, null, ie(B.value, (s, A) => (_(), g(F, {
                      key: A,
                      title: s.title,
                      name: A
                    }, {
                      default: a(() => [
                        l("ul", qo, [
                          (_(!0), y(Y, null, ie(s.list, ($, be) => (_(), y("li", {
                            key: be,
                            class: "w-2/6 text-center cursor-pointer h-[65px]",
                            title: $.title,
                            onClick: (yt) => o(e).addComponent(be, $)
                          }, [
                            $.icon ? (_(), g(b, {
                              key: 0,
                              name: $.icon,
                              size: "20px",
                              class: "inline-block mt-[3px]"
                            }, null, 8, ["name"])) : (_(), g(b, {
                              key: 1,
                              name: "iconfont iconkaifazujian",
                              size: "20px",
                              class: "inline-block mt-[3px]"
                            })),
                            l("span", Ao, r($.title), 1)
                          ], 8, Po))), 128))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["title", "name"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          l("div", $o, [
            i(V, null, {
              default: a(() => [
                i(w, {
                  class: "page-btn absolute right-[20px]",
                  onClick: t[4] || (t[4] = (s) => o(e).changeCurrentIndex(-99))
                }, {
                  default: a(() => [
                    S(r(o(n)("pageSet")), 1)
                  ]),
                  _: 1
                }),
                l("div", Ro, [
                  l("div", {
                    class: ne(["preview-head bg-no-repeat bg-center bg-cover cursor-pointer h-[64px]", [o(e).global.topStatusBar.style]]),
                    style: D({ backgroundColor: o(e).global.topStatusBar.bgColor }),
                    onClick: t[5] || (t[5] = (s) => o(e).changeCurrentIndex(-99))
                  }, [
                    o(e).global.topStatusBar.style == "style-1" && o(e).global.topStatusBar.isShow ? (_(), y("div", jo, [
                      l("div", {
                        class: "title-wrap",
                        style: D({ fontSize: "14px", color: o(e).global.topStatusBar.textColor, textAlign: o(e).global.topStatusBar.textAlign })
                      }, r(o(e).global.title), 5)
                    ])) : c("", !0),
                    o(e).global.topStatusBar.style == "style-2" && o(e).global.topStatusBar.isShow ? (_(), y("div", Eo, [
                      l("div", {
                        class: "title-wrap",
                        style: D({ color: o(e).global.topStatusBar.textColor })
                      }, [
                        o(e).global.topStatusBar.imgUrl ? (_(), y("div", Lo, [
                          l("img", {
                            class: "max-w-[100%] max-h-[100%]",
                            src: o(xe)(o(e).global.topStatusBar.imgUrl),
                            mode: "heightFix"
                          }, null, 8, Mo)
                        ])) : c("", !0),
                        l("div", {
                          style: D({ color: o(e).global.topStatusBar.textColor })
                        }, r(o(e).global.title), 5)
                      ], 4)
                    ])) : c("", !0),
                    o(e).global.topStatusBar.style == "style-3" && o(e).global.topStatusBar.isShow ? (_(), y("div", Jo, [
                      o(e).global.topStatusBar.imgUrl ? (_(), y("div", Go, [
                        l("img", {
                          class: "max-w-[100%] max-h-[100%]",
                          src: o(xe)(o(e).global.topStatusBar.imgUrl)
                        }, null, 8, Fo)
                      ])) : c("", !0),
                      l("div", Ko, [
                        Ho,
                        l("span", Wo, r(o(e).global.topStatusBar.inputPlaceholder), 1)
                      ])
                    ])) : c("", !0),
                    o(e).global.topStatusBar.style == "style-4" && o(e).global.topStatusBar.isShow ? (_(), y("div", Yo, [
                      l("span", {
                        class: "iconfont iconxiazai19 !text-[14px]",
                        style: D({ color: o(e).global.topStatusBar.textColor })
                      }, null, 4),
                      l("div", {
                        class: "title-wrap",
                        style: D({ color: o(e).global.topStatusBar.textColor })
                      }, "我的位置", 4),
                      l("span", {
                        class: "iconfont iconxiangyoujiantou !text-[12px]",
                        style: D({ color: o(e).global.topStatusBar.textColor })
                      }, null, 4)
                    ])) : c("", !0)
                  ], 6),
                  l("div", Qo, [
                    l("ul", Xo, [
                      i(k, {
                        effect: "light",
                        content: o(n)("moveUpComponent"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(b, {
                            name: "iconfont iconjiantoushang",
                            size: "20px",
                            class: "block cursor-pointer leading-[40px]",
                            onClick: o(e).moveUpComponent
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      i(k, {
                        effect: "light",
                        content: o(n)("moveDownComponent"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(b, {
                            name: "iconfont iconjiantouxia",
                            size: "20px",
                            class: "block cursor-pointer leading-[40px]",
                            onClick: o(e).moveDownComponent
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      i(k, {
                        effect: "light",
                        content: o(n)("copyComponent"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(b, {
                            name: "iconfont iconcopy-line",
                            size: "20px",
                            class: "block cursor-pointer leading-[40px]",
                            onClick: o(e).copyComponent
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      i(k, {
                        effect: "light",
                        content: o(n)("delComponent"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(b, {
                            name: "iconfont icondelete-line",
                            size: "20px",
                            class: "block cursor-pointer leading-[40px]",
                            onClick: o(e).delComponent
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      i(k, {
                        effect: "light",
                        content: o(n)("resetComponent"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(b, {
                            name: "iconfont iconloader-line",
                            size: "20px",
                            class: "block cursor-pointer leading-[40px]",
                            onClick: o(e).resetComponent
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      i(k, {
                        effect: "light",
                        content: o(I) ? o(n)("componentHideAction") : o(n)("componentShowAction"),
                        placement: "right"
                      }, {
                        default: a(() => [
                          i(h, {
                            size: 20,
                            class: "block flex items-center justify-center cursor-pointer leading-[40px] mx-auto h-[40px]",
                            onClick: t[6] || (t[6] = (s) => I.value = !o(I))
                          }, {
                            default: a(() => [
                              (_(), g(ye(o(I) ? o(fo) : o(yo))))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ]),
                    he(l("iframe", {
                      id: "previewIframe",
                      src: X.value,
                      frameborder: "0",
                      class: "preview-iframe w-[375px]"
                    }, null, 8, Zo), [
                      [we, L.value]
                    ]),
                    he(l("div", et, [
                      l("div", ot, r(o(n)("developTitle")), 1),
                      l("div", tt, [
                        l("text", it, r(o(n)("wapDomain")), 1),
                        i(oe, {
                          modelValue: q.value,
                          "onUpdate:modelValue": t[7] || (t[7] = (s) => q.value = s),
                          modelModifiers: { trim: !0 },
                          placeholder: o(n)("wapDomainPlaceholder"),
                          clearable: ""
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      i(w, {
                        type: "primary",
                        onClick: Ie
                      }, {
                        default: a(() => [
                          S(r(o(n)("confirm")), 1)
                        ]),
                        _: 1
                      }),
                      i(w, {
                        type: "primary",
                        onClick: t[8] || (t[8] = (s) => ze()),
                        plain: ""
                      }, {
                        default: a(() => [
                          S(r(o(n)("settingTips")), 1)
                        ]),
                        _: 1
                      })
                    ], 512), [
                      [we, M.value]
                    ])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          l("div", nt, [
            i(V, null, {
              default: a(() => [
                i(qe, {
                  class: "box-card",
                  shadow: "never"
                }, {
                  header: a(() => [
                    l("div", lt, [
                      l("span", st, r(o(e).currentIndex == -99 ? o(n)("pageSet") : o(e).editComponent.componentTitle), 1),
                      o(e).currentComponent ? (_(), y("div", at, [
                        l("span", {
                          class: ne(["cursor-pointer rounded-[50px] py-[5px] px-[15px]", { "bg-primary text-white": o(e).editTab == "content" }]),
                          onClick: t[9] || (t[9] = (s) => o(e).editTab = "content")
                        }, r(o(n)("tabEditContent")), 3),
                        l("span", {
                          class: ne(["cursor-pointer rounded-[50px] py-[5px] px-[15px]", { "bg-primary text-white": o(e).editTab == "style" }]),
                          onClick: t[10] || (t[10] = (s) => o(e).editTab = "style")
                        }, r(o(n)("tabEditStyle")), 3)
                      ])) : c("", !0)
                    ])
                  ]),
                  default: a(() => [
                    l("div", dt, [
                      o(e).currentIndex >= 0 && o(e).editTab == "style" ? (_(), y("div", _t, [
                        l("h3", rt, r(o(n)("componentIsShowTitle")), 1),
                        i(ve, {
                          "label-width": "90px",
                          class: "px-[10px]"
                        }, {
                          default: a(() => [
                            i(x, null, {
                              label: a(() => [
                                l("div", ct, [
                                  l("span", pt, r(o(n)("componentIsShow")), 1),
                                  i(k, {
                                    effect: "light",
                                    placement: "top"
                                  }, {
                                    content: a(() => [
                                      l("p", null, r(o(n)("componentIsShowTips")), 1)
                                    ]),
                                    default: a(() => [
                                      mt
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              default: a(() => [
                                i(z, {
                                  modelValue: o(I),
                                  "onUpdate:modelValue": t[11] || (t[11] = (s) => ao(I) ? I.value = s : null)
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])) : c("", !0),
                      o(e).currentComponent ? (_(), g(ye(J[o(e).currentComponent]), {
                        key: o(e).currentIndex,
                        value: o(e).value[o(e).currentIndex]
                      }, {
                        style: a(() => [
                          l("div", ut, [
                            l("h3", vt, r(o(n)("componentStyleTitle")), 1),
                            i(ve, {
                              "label-width": "90px",
                              class: "px-[10px]"
                            }, {
                              default: a(() => [
                                o(e).editComponent.ignore.indexOf("pageBgColor") == -1 ? (_(), y(Y, { key: 0 }, [
                                  i(x, {
                                    label: o(n)("bottomBgColor")
                                  }, {
                                    default: a(() => [
                                      i(H, {
                                        modelValue: o(e).editComponent.pageStartBgColor,
                                        "onUpdate:modelValue": t[12] || (t[12] = (s) => o(e).editComponent.pageStartBgColor = s),
                                        "show-alpha": "",
                                        predefine: o(e).predefineColors
                                      }, null, 8, ["modelValue", "predefine"]),
                                      i(b, {
                                        name: "iconfont iconmap-connect",
                                        size: "20px",
                                        class: "block !text-gray-400 mx-[5px]"
                                      }),
                                      i(H, {
                                        modelValue: o(e).editComponent.pageEndBgColor,
                                        "onUpdate:modelValue": t[13] || (t[13] = (s) => o(e).editComponent.pageEndBgColor = s),
                                        "show-alpha": "",
                                        predefine: o(e).predefineColors
                                      }, null, 8, ["modelValue", "predefine"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  l("div", gt, r(o(n)("bottomBgTips")), 1)
                                ], 64)) : c("", !0),
                                o(e).editComponent.ignore.indexOf("pageBgColor") == -1 ? (_(), g(x, {
                                  key: 1,
                                  label: o(n)("bgGradientAngle")
                                }, {
                                  default: a(() => [
                                    i(ge, {
                                      modelValue: o(e).editComponent.pageGradientAngle,
                                      "onUpdate:modelValue": t[14] || (t[14] = (s) => o(e).editComponent.pageGradientAngle = s)
                                    }, {
                                      default: a(() => [
                                        i(W, { label: "to bottom" }, {
                                          default: a(() => [
                                            S(r(o(n)("topToBottom")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        i(W, { label: "to right" }, {
                                          default: a(() => [
                                            S(r(o(n)("leftToRight")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("componentBgUrl") == -1 ? (_(), g(x, {
                                  key: 2,
                                  label: o(n)("componentBgUrl")
                                }, {
                                  default: a(() => [
                                    i(Ne, {
                                      modelValue: o(e).editComponent.componentBgUrl,
                                      "onUpdate:modelValue": t[15] || (t[15] = (s) => o(e).editComponent.componentBgUrl = s),
                                      limit: 1
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("componentBgUrl") == -1 && o(e).editComponent.componentBgUrl ? (_(), g(x, {
                                  key: 3,
                                  label: o(n)("componentBgAlpha")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.componentBgAlpha,
                                      "onUpdate:modelValue": t[16] || (t[16] = (s) => o(e).editComponent.componentBgAlpha = s),
                                      "show-input": "",
                                      size: "small",
                                      min: 0,
                                      max: 10,
                                      class: "ml-[10px] diy-nav-slider"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("componentBgColor") == -1 ? (_(), g(x, {
                                  key: 4,
                                  label: o(n)("componentBgColor")
                                }, {
                                  default: a(() => [
                                    i(H, {
                                      modelValue: o(e).editComponent.componentStartBgColor,
                                      "onUpdate:modelValue": t[17] || (t[17] = (s) => o(e).editComponent.componentStartBgColor = s),
                                      "show-alpha": "",
                                      predefine: o(e).predefineColors
                                    }, null, 8, ["modelValue", "predefine"]),
                                    i(b, {
                                      name: "iconfont iconmap-connect",
                                      size: "20px",
                                      class: "block !text-gray-400 mx-[5px]"
                                    }),
                                    i(H, {
                                      modelValue: o(e).editComponent.componentEndBgColor,
                                      "onUpdate:modelValue": t[18] || (t[18] = (s) => o(e).editComponent.componentEndBgColor = s),
                                      "show-alpha": "",
                                      predefine: o(e).predefineColors
                                    }, null, 8, ["modelValue", "predefine"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("componentBgColor") == -1 ? (_(), g(x, {
                                  key: 5,
                                  label: o(n)("bgGradientAngle")
                                }, {
                                  default: a(() => [
                                    i(ge, {
                                      modelValue: o(e).editComponent.componentGradientAngle,
                                      "onUpdate:modelValue": t[19] || (t[19] = (s) => o(e).editComponent.componentGradientAngle = s)
                                    }, {
                                      default: a(() => [
                                        i(W, { label: "to bottom" }, {
                                          default: a(() => [
                                            S(r(o(n)("topToBottom")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        i(W, { label: "to right" }, {
                                          default: a(() => [
                                            S(r(o(n)("leftToRight")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("marginTop") == -1 ? (_(), g(x, {
                                  key: 6,
                                  label: o(n)("marginTop")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.margin.top,
                                      "onUpdate:modelValue": t[20] || (t[20] = (s) => o(e).editComponent.margin.top = s),
                                      "show-input": "",
                                      size: "small",
                                      min: -100,
                                      class: "ml-[10px] diy-nav-slider"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("marginBottom") == -1 ? (_(), g(x, {
                                  key: 7,
                                  label: o(n)("marginBottom")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.margin.bottom,
                                      "onUpdate:modelValue": t[21] || (t[21] = (s) => o(e).editComponent.margin.bottom = s),
                                      "show-input": "",
                                      size: "small",
                                      class: "ml-[10px] diy-nav-slider",
                                      min: -100
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("marginBoth") == -1 ? (_(), g(x, {
                                  key: 8,
                                  label: o(n)("marginBoth")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.margin.both,
                                      "onUpdate:modelValue": t[22] || (t[22] = (s) => o(e).editComponent.margin.both = s),
                                      "show-input": "",
                                      size: "small",
                                      class: "ml-[10px] diy-nav-slider"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("topRounded") == -1 ? (_(), g(x, {
                                  key: 9,
                                  label: o(n)("topRounded")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.topRounded,
                                      "onUpdate:modelValue": t[23] || (t[23] = (s) => o(e).editComponent.topRounded = s),
                                      "show-input": "",
                                      size: "small",
                                      class: "ml-[10px] diy-nav-slider",
                                      max: 100
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0),
                                o(e).editComponent.ignore.indexOf("bottomRounded") == -1 ? (_(), g(x, {
                                  key: 10,
                                  label: o(n)("bottomRounded")
                                }, {
                                  default: a(() => [
                                    i(N, {
                                      modelValue: o(e).editComponent.bottomRounded,
                                      "onUpdate:modelValue": t[24] || (t[24] = (s) => o(e).editComponent.bottomRounded = s),
                                      "show-input": "",
                                      size: "small",
                                      class: "ml-[10px] diy-nav-slider",
                                      max: 100
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : c("", !0)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["value"])) : c("", !0)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const Zt = /* @__PURE__ */ go(bt, [["__scopeId", "data-v-90a43823"]]);
export {
  Zt as default
};
