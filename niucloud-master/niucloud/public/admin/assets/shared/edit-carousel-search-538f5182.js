import { defineComponent as Fe, computed as I, reactive as Y, ref as W, onMounted as Ce, nextTick as $e, watch as Oe, resolveComponent as b, resolveDirective as Ge, openBlock as _, createElementBlock as y, Fragment as R, withDirectives as V, createElementVNode as i, toDisplayString as p, unref as e, createVNode as t, withModifiers as j, withCtx as d, isRef as ge, createBlock as D, createCommentVNode as z, createTextVNode as f, vShow as T, renderList as F, normalizeClass as Ke } from "vue";
import { t as n, bf as Z, bg as qe, k as _e } from "./core-shared-86a0da16.js";
import { u as Je } from "./diy-0ffc5ef1.js";
import { useRoute as Qe } from "vue-router";
import { ElTable as Xe } from "element-plus";
import { r as ee, c as Ye } from "./lodash-8c6c2daa.js";
const Ze = { class: "content-wrap" }, el = { class: "edit-attr-item-wrap" }, ll = { class: "mb-[10px]" }, tl = { class: "text-sm text-gray-400 leading-[1.5]" }, ol = { class: "edit-attr-item-wrap" }, al = { class: "mb-[10px]" }, nl = {
  key: 0,
  class: "text-sm text-gray-400 mb-[10px]"
}, dl = { class: "edit-attr-item-wrap" }, rl = { class: "mb-[10px]" }, il = { class: "text-sm text-gray-400 mb-[10px]" }, sl = { class: "text-sm text-gray-400 mt-[10px] leading-[1.5]" }, pl = { class: "flex flex-wrap" }, ul = ["onClick"], ml = ["src"], cl = { class: "dialog-footer" }, hl = { class: "edit-attr-item-wrap mb-[20px]" }, bl = { class: "mb-[10px]" }, fl = { class: "text-sm text-gray-400 mb-[10px]" }, Cl = ["onClick"], gl = { class: "edit-attr-item-wrap" }, _l = { class: "text-sm text-gray-400 mb-[10px]" }, xl = ["onClick"], yl = ["onClick"], wl = { class: "mt-[16px] flex justify-end" }, Sl = { class: "flex items-center justify-end mt-[15px]" }, Vl = { class: "text-sm text-gray-400 mb-[10px]" }, vl = ["onClick"], Tl = { class: "style-wrap" }, kl = {
  key: 0,
  class: "edit-attr-item-wrap"
}, Ul = { class: "mb-[10px]" }, Il = {
  key: 1,
  class: "edit-attr-item-wrap"
}, Wl = { class: "mb-[10px]" }, Pl = { class: "edit-attr-item-wrap" }, Hl = { class: "mb-[10px]" }, Bl = { class: "edit-attr-item-wrap" }, Al = { class: "mb-[10px]" }, Rl = { class: "edit-attr-item-wrap" }, Dl = { class: "mb-[10px]" }, zl = { class: "edit-attr-item-wrap" }, El = { class: "mb-[10px]" }, Ml = /* @__PURE__ */ Fe({
  __name: "edit-carousel-search",
  setup(Nl, { expose: xe }) {
    var re, ie, se, pe, ue, me, ce;
    const l = Je(), ye = Qe();
    l.editComponent.ignore = ["componentBgColor", "componentBgUrl", "marginTop", "marginBottom", "topRounded", "bottomRounded", "pageBgColor", "marginBoth"];
    const we = {
      backIsShow: !1,
      // 返回箭头
      titleIsShow: !1,
      // 标题
      title: (() => ({
        mall: "商城"
      })[ye.meta.addon || ""] || "商城")(),
      // 标题文字
      positionIsShow: !0,
      // 地址定位
      textColor: "#333333",
      // 文字颜色
      iconColor: "#333333"
      // 图标颜色
    };
    l.editComponent.header = Object.assign({}, we, l.editComponent.header || {});
    const Se = I(() => {
      const s = l.editComponent.search.style;
      return s == "style-1" || s == "style-2" || s == "style-3";
    }), $ = I(() => Se.value), O = I(() => l.editComponent.search.style == "style-1"), Ve = I(() => O.value), G = I({
      get: () => $.value ? !1 : l.editComponent.header.titleIsShow,
      set: (s) => {
        l.editComponent.header.titleIsShow = s;
      }
    }), K = I({
      get: () => O.value ? !1 : l.editComponent.header.positionIsShow,
      set: (s) => {
        l.editComponent.header.positionIsShow = s;
      }
    }), ve = I(() => {
      const s = l.editComponent.search.style;
      return s == "style-1" ? "carouselSearchHeaderStyle1Tips" : s == "style-2" ? "carouselSearchHeaderStyle2Tips" : "carouselSearchHeaderTips";
    });
    l.editComponent.verify = (s) => {
      var m, c, C, v, A;
      const o = { code: !0, message: "" }, h = l.value[s];
      if (!h)
        return o;
      const r = (c = (m = h.search) == null ? void 0 : m.hotWord) == null ? void 0 : c.list;
      Array.isArray(r) && r.forEach((w) => {
        if (w.text == "")
          return o.code = !1, o.message = n("carouselSearchHotWordTextPlaceholder"), o;
      });
      const u = (C = h.tab) == null ? void 0 : C.list;
      if (Array.isArray(u) && u.forEach((w) => {
        if (w.text == "")
          return o.code = !1, o.message = n("carouselSearchTabCategoryTextPlaceholder"), o;
      }), (v = h.swiper) != null && v.control) {
        const w = (A = h.swiper) == null ? void 0 : A.list;
        Array.isArray(w) && w.forEach((M) => {
          if (M.imageUrl == "")
            return o.code = !1, o.message = n("imageUrlTip"), o;
        });
      }
      return o;
    };
    const k = Y({
      title: l.editComponent.search.styleName,
      value: l.editComponent.search.style
    }), P = W(!1), le = () => {
      P.value = !0, k.title = l.editComponent.search.styleName, k.value = l.editComponent.search.style;
    }, Te = (s) => {
      k.title = s.title, k.value = s.value;
    }, ke = () => {
      l.editComponent.search.styleName = k.title, l.editComponent.search.style = k.value, P.value = !1;
    }, Ue = Y([
      {
        url: "static/resource/images/diy/carousel_search/style_1.png",
        title: "风格1",
        value: "style-1"
      },
      {
        url: "static/resource/images/diy/carousel_search/style_2.png",
        title: "风格2",
        value: "style-2"
      }
    ]), q = (s) => {
      Array.isArray(s) && s.forEach((o) => {
        o.id || (o.id = l.generateRandom());
      });
    };
    q((se = (ie = (re = l.editComponent) == null ? void 0 : re.search) == null ? void 0 : ie.hotWord) == null ? void 0 : se.list), q((ue = (pe = l.editComponent) == null ? void 0 : pe.tab) == null ? void 0 : ue.list), q((ce = (me = l.editComponent) == null ? void 0 : me.swiper) == null ? void 0 : ce.list);
    const te = W(["tab", "swiper"]), Ie = (s) => {
    };
    Ce(() => {
      J();
    });
    const We = () => {
      l.editComponent.search.hotWord.list.push({
        id: l.generateRandom(),
        text: "关键词"
      });
    }, Pe = (s) => {
      l.editComponent.tab.list[s].diy_id = 0, l.editComponent.tab.list[s].diy_title = "";
    }, He = () => {
      l.editComponent.tab.list.push({
        id: l.generateRandom(),
        text: "分类名称",
        // 最多4个字
        source: "diy_page",
        // 数据源类型，微页面：diy_page
        diy_id: "",
        diy_title: ""
      });
    }, oe = W(), ae = W(), ne = W();
    Ce(() => {
      $e(() => {
        const s = Z.create(oe.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (r) => {
            const u = l.editComponent.search.hotWord.list[r.oldIndex];
            l.editComponent.search.hotWord.list.splice(r.oldIndex, 1), l.editComponent.search.hotWord.list.splice(r.newIndex, 0, u), o.sort(
              ee(l.editComponent.search.hotWord.list.length).map((m) => m.toString())
            );
          }
        }), o = Z.create(ae.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (r) => {
            const u = l.editComponent.tab.list[r.oldIndex];
            l.editComponent.tab.list.splice(r.oldIndex, 1), l.editComponent.tab.list.splice(r.newIndex, 0, u), o.sort(
              ee(l.editComponent.tab.list.length).map((m) => m.toString())
            );
          }
        }), h = Z.create(ne.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (r) => {
            const u = l.editComponent.swiper.list[r.oldIndex];
            l.editComponent.swiper.list.splice(r.oldIndex, 1), l.editComponent.swiper.list.splice(r.newIndex, 0, u), h.sort(
              ee(l.editComponent.swiper.list.length).map((m) => m.toString())
            ), E(!0);
          }
        });
      });
    });
    const H = W(!1), g = Y({
      page: 1,
      limit: 10,
      total: 0,
      loading: !0,
      data: [],
      searchParam: {}
    }), de = W(), J = (s = 1) => {
      g.loading = !0, g.page = s, qe({
        page: g.page,
        limit: g.limit,
        ...g.searchParam
      }).then((o) => {
        g.loading = !1;
        const h = o.data.data;
        let r = [], u = 0;
        if (l.id)
          for (let m = 0; m < h.length; m++)
            h[m].id == l.id ? u++ : r.push(h[m]);
        else
          r = Ye(h);
        u && (o.data.total = o.data.total - u), g.data = r, g.total = o.data.total;
      }).catch(() => {
        g.loading = !1;
      });
    };
    let B = {}, Q = 0;
    const Be = (s) => {
      B = s;
    }, Ae = () => {
      l.editComponent.tab.list[Q].diy_id = B.id, l.editComponent.tab.list[Q].diy_title = B.title, H.value = !1;
    }, Re = (s) => {
      H.value = !0, Q = s, B && setTimeout(() => {
        de.value.setCurrentRow(B);
      }, 200);
    };
    Oe(
      () => {
        var s, o;
        return (o = (s = l.editComponent) == null ? void 0 : s.swiper) == null ? void 0 : o.list;
      },
      (s) => {
        Array.isArray(s) && E();
      },
      { deep: !0 }
    );
    const De = () => {
      l.editComponent.swiper.list.push({
        id: l.generateRandom(),
        imageUrl: "",
        imgWidth: 0,
        imgHeight: 0,
        link: { name: "" }
      });
    }, ze = (s) => {
      E(!0);
    }, Ee = (s) => {
      E(!0);
    }, E = (s = !1) => {
      var h, r;
      const o = (r = (h = l.editComponent) == null ? void 0 : h.swiper) == null ? void 0 : r.list;
      Array.isArray(o) && o.forEach((u, m) => {
        if (!(u != null && u.imageUrl))
          return;
        const c = new Image();
        c.src = _e(u.imageUrl), c.onload = () => {
          if (u.imgWidth !== c.width && (u.imgWidth = c.width), u.imgHeight !== c.height && (u.imgHeight = c.height), s && m == 0) {
            const C = u.imgHeight / u.imgWidth;
            l.editComponent.swiper.swiperStyle == "style-1" ? u.width = 375 * 0.92 : u.width = 355, u.height = u.width * C, l.editComponent.swiper.imageHeight = parseInt(u.height);
          }
        };
      });
    };
    return xe({}), (s, o) => {
      const h = b("el-switch"), r = b("el-form-item"), u = b("el-input"), m = b("el-color-picker"), c = b("el-form"), C = b("el-radio"), v = b("el-radio-group"), A = b("ArrowRight"), w = b("el-icon"), M = b("upload-image"), he = b("diy-link"), U = b("el-button"), be = b("el-dialog"), N = b("el-slider"), L = b("icon"), Me = b("Close"), X = b("el-table-column"), Ne = b("el-pagination"), fe = b("el-collapse-item"), Le = b("el-collapse"), je = Ge("loading");
      return _(), y(R, null, [
        V(i("div", Ze, [
          i("div", el, [
            i("h3", ll, p(e(n)("carouselSearchHeaderSet")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]",
              onSubmit: o[6] || (o[6] = j(() => {
              }, ["prevent"]))
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchHeaderBackIsShow")
                }, {
                  default: d(() => [
                    t(h, {
                      modelValue: e(l).editComponent.header.backIsShow,
                      "onUpdate:modelValue": o[0] || (o[0] = (a) => e(l).editComponent.header.backIsShow = a)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchHeaderTitleIsShow")
                }, {
                  default: d(() => [
                    t(h, {
                      modelValue: e(G),
                      "onUpdate:modelValue": o[1] || (o[1] = (a) => ge(G) ? G.value = a : null),
                      disabled: e($)
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(l).editComponent.header.titleIsShow && !e($) ? (_(), D(r, {
                  key: 0,
                  label: e(n)("carouselSearchHeaderTitle")
                }, {
                  default: d(() => [
                    t(u, {
                      modelValue: e(l).editComponent.header.title,
                      "onUpdate:modelValue": o[2] || (o[2] = (a) => e(l).editComponent.header.title = a),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("carouselSearchHeaderTitlePlaceholder"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : z("", !0),
                t(r, {
                  label: e(n)("carouselSearchHeaderPositionIsShow")
                }, {
                  default: d(() => [
                    t(h, {
                      modelValue: e(K),
                      "onUpdate:modelValue": o[3] || (o[3] = (a) => ge(K) ? K.value = a : null),
                      disabled: e(O)
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchHeaderTextColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.header.textColor,
                      "onUpdate:modelValue": o[4] || (o[4] = (a) => e(l).editComponent.header.textColor = a),
                      disabled: e(Ve),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "disabled", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchHeaderIconColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.header.iconColor,
                      "onUpdate:modelValue": o[5] || (o[5] = (a) => e(l).editComponent.header.iconColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i("div", tl, p(e(n)(e(ve))), 1)
              ]),
              _: 1
            })
          ]),
          i("div", ol, [
            i("h3", al, p(e(n)("carouselSearchShowPosition")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchShowWay")
                }, {
                  default: d(() => [
                    t(v, {
                      modelValue: e(l).editComponent.positionWay,
                      "onUpdate:modelValue": o[7] || (o[7] = (a) => e(l).editComponent.positionWay = a)
                    }, {
                      default: d(() => [
                        t(C, { label: "static" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchShowWayStatic")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "fixed" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchShowWayFixed")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    e(l).editComponent.positionWay == "fixed" ? (_(), y("div", nl, "滑动页面查看效果")) : z("", !0)
                  ]),
                  _: 1
                }, 8, ["label"]),
                V(t(r, {
                  label: e(n)("carouselSearchFixedBgColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.fixedBgColor,
                      "onUpdate:modelValue": o[8] || (o[8] = (a) => e(l).editComponent.fixedBgColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [T, e(l).editComponent.positionWay == "fixed"]
                ]),
                t(r, {
                  label: e(n)("carouselSearchBgGradient")
                }, {
                  default: d(() => [
                    t(v, {
                      modelValue: e(l).editComponent.bgGradient,
                      "onUpdate:modelValue": o[9] || (o[9] = (a) => e(l).editComponent.bgGradient = a)
                    }, {
                      default: d(() => [
                        t(C, { label: !0 }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchOpen")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: !1 }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchClose")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", dl, [
            i("h3", rl, p(e(n)("carouselSearchSet")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]",
              onSubmit: o[14] || (o[14] = j(() => {
              }, ["prevent"]))
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("selectStyle"),
                  class: "flex"
                }, {
                  default: d(() => [
                    i("span", {
                      class: "text-primary flex-1 cursor-pointer",
                      onClick: le
                    }, p(e(l).editComponent.search.styleName), 1),
                    t(w, {
                      onClick: le,
                      class: "cursor-pointer"
                    }, {
                      default: d(() => [
                        t(A)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(l).editComponent.search.style == "style-2" ? (_(), D(r, {
                  key: 0,
                  label: e(n)("carouselSearchSubTitle")
                }, {
                  default: d(() => [
                    t(u, {
                      modelValue: e(l).editComponent.search.subTitle.text,
                      "onUpdate:modelValue": o[10] || (o[10] = (a) => e(l).editComponent.search.subTitle.text = a),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("carouselSearchSubTitlePlaceholder"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : z("", !0),
                t(r, {
                  label: e(n)("logo")
                }, {
                  default: d(() => [
                    t(M, {
                      modelValue: e(l).editComponent.search.logo,
                      "onUpdate:modelValue": o[11] || (o[11] = (a) => e(l).editComponent.search.logo = a),
                      limit: 1
                    }, null, 8, ["modelValue"]),
                    i("div", il, p(e(n)("carouselSearchLogoTips")), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchText")
                }, {
                  default: d(() => [
                    i("div", null, [
                      t(u, {
                        modelValue: e(l).editComponent.search.text,
                        "onUpdate:modelValue": o[12] || (o[12] = (a) => e(l).editComponent.search.text = a),
                        modelModifiers: { trim: !0 },
                        placeholder: e(n)("carouselSearchPlaceholder"),
                        clearable: "",
                        maxlength: "20",
                        "show-word-limit": ""
                      }, null, 8, ["modelValue", "placeholder"]),
                      i("p", sl, p(e(n)("carouselSearchTextTips")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("link")
                }, {
                  default: d(() => [
                    t(he, {
                      modelValue: e(l).editComponent.search.link,
                      "onUpdate:modelValue": o[13] || (o[13] = (a) => e(l).editComponent.search.link = a)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }),
            t(be, {
              modelValue: P.value,
              "onUpdate:modelValue": o[16] || (o[16] = (a) => P.value = a),
              title: e(n)("selectStyle"),
              width: "500px"
            }, {
              footer: d(() => [
                i("span", cl, [
                  t(U, {
                    onClick: o[15] || (o[15] = (a) => P.value = !1)
                  }, {
                    default: d(() => [
                      f(p(e(n)("cancel")), 1)
                    ]),
                    _: 1
                  }),
                  t(U, {
                    type: "primary",
                    onClick: ke
                  }, {
                    default: d(() => [
                      f(p(e(n)("confirm")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: d(() => [
                i("div", pl, [
                  (_(!0), y(R, null, F(Ue, (a, S) => (_(), y("div", {
                    key: S,
                    class: Ke([{ "border-primary": k.value == a.value }, "flex items-center justify-center overflow-hidden w-[200px] h-[100px] m-[6px] cursor-pointer border bg-[#eee]"]),
                    onClick: (x) => Te(a)
                  }, [
                    i("img", {
                      src: e(_e)(a.url)
                    }, null, 8, ml)
                  ], 10, ul))), 128))
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "title"])
          ]),
          i("div", hl, [
            i("h3", bl, p(e(n)("carouselSearchHotWordSet")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchHotWordInterval")
                }, {
                  default: d(() => [
                    t(N, {
                      modelValue: e(l).editComponent.search.hotWord.interval,
                      "onUpdate:modelValue": o[17] || (o[17] = (a) => e(l).editComponent.search.hotWord.interval = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 1,
                      max: 10
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                i("p", fl, p(e(n)("dragMouseAdjustOrder")), 1),
                i("div", {
                  ref_key: "searchHotWordTabBoxRef",
                  ref: oe
                }, [
                  (_(!0), y(R, null, F(e(l).editComponent.search.hotWord.list, (a, S) => (_(), y("div", {
                    key: a.id,
                    class: "item-wrap p-[10px] relative border border-dashed border-gray-300 mb-[16px]"
                  }, [
                    t(r, {
                      label: e(n)("carouselSearchHotWordText"),
                      class: "!mb-0"
                    }, {
                      default: d(() => [
                        t(u, {
                          modelValue: a.text,
                          "onUpdate:modelValue": (x) => a.text = x,
                          modelModifiers: { trim: !0 },
                          placeholder: e(n)("carouselSearchHotWordTextPlaceholder"),
                          clearable: "",
                          maxlength: "4",
                          "show-word-limit": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    i("div", {
                      class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                      onClick: (x) => e(l).editComponent.search.hotWord.list.splice(S, 1)
                    }, [
                      t(L, {
                        name: "element CircleCloseFilled",
                        color: "#bbb",
                        size: "20px"
                      })
                    ], 8, Cl)
                  ]))), 128)),
                  V(t(U, {
                    class: "w-full",
                    onClick: We
                  }, {
                    default: d(() => [
                      f(p(e(n)("carouselSearchAddHotWordItem")), 1)
                    ]),
                    _: 1
                  }, 512), [
                    [T, e(l).editComponent.search.hotWord.list.length < 50]
                  ])
                ], 512)
              ]),
              _: 1
            })
          ]),
          t(Le, {
            modelValue: te.value,
            "onUpdate:modelValue": o[26] || (o[26] = (a) => te.value = a),
            onChange: Ie,
            class: "collapse-wrap"
          }, {
            default: d(() => [
              t(fe, {
                title: e(n)("carouselSearchTabSet"),
                name: "tab"
              }, {
                default: d(() => [
                  i("div", gl, [
                    t(c, {
                      "label-width": "100px",
                      class: "px-[10px]",
                      onSubmit: o[23] || (o[23] = j(() => {
                      }, ["prevent"]))
                    }, {
                      default: d(() => [
                        t(r, {
                          label: e(n)("carouselSearchTabControl")
                        }, {
                          default: d(() => [
                            t(h, {
                              modelValue: e(l).editComponent.tab.control,
                              "onUpdate:modelValue": o[18] || (o[18] = (a) => e(l).editComponent.tab.control = a)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        i("p", _l, p(e(n)("dragMouseAdjustOrder")), 1),
                        i("div", {
                          ref_key: "tabBoxRef",
                          ref: ae
                        }, [
                          (_(!0), y(R, null, F(e(l).editComponent.tab.list, (a, S) => (_(), y("div", {
                            key: a.id,
                            class: "item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"
                          }, [
                            t(r, {
                              label: e(n)("carouselSearchTabCategoryText")
                            }, {
                              default: d(() => [
                                t(u, {
                                  modelValue: a.text,
                                  "onUpdate:modelValue": (x) => a.text = x,
                                  modelModifiers: { trim: !0 },
                                  placeholder: e(n)("carouselSearchTabCategoryTextPlaceholder"),
                                  clearable: "",
                                  maxlength: "4",
                                  "show-word-limit": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["label"]),
                            t(r, {
                              label: e(n)("dataSources")
                            }, {
                              default: d(() => [
                                t(u, {
                                  modelValue: a.diy_title,
                                  "onUpdate:modelValue": (x) => a.diy_title = x,
                                  modelModifiers: { trim: !0 },
                                  placeholder: e(n)("selectDiyPagePlaceholder"),
                                  readonly: "",
                                  class: "select-diy-page-input",
                                  onClick: (x) => Re(S)
                                }, {
                                  suffix: d(() => [
                                    i("div", {
                                      onClick: j((x) => Pe(S), ["stop"])
                                    }, [
                                      a.diy_title ? (_(), D(w, { key: 0 }, {
                                        default: d(() => [
                                          t(Me)
                                        ]),
                                        _: 1
                                      })) : (_(), D(w, { key: 1 }, {
                                        default: d(() => [
                                          t(A)
                                        ]),
                                        _: 1
                                      }))
                                    ], 8, xl)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                              ]),
                              _: 2
                            }, 1032, ["label"]),
                            V(i("div", {
                              class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                              onClick: (x) => e(l).editComponent.tab.list.splice(S, 1)
                            }, [
                              t(L, {
                                name: "element CircleCloseFilled",
                                color: "#bbb",
                                size: "20px"
                              })
                            ], 8, yl), [
                              [T, e(l).editComponent.tab.list.length > 1]
                            ])
                          ]))), 128)),
                          V(t(U, {
                            class: "w-full",
                            onClick: He
                          }, {
                            default: d(() => [
                              f(p(e(n)("carouselSearchAddTabItem")), 1)
                            ]),
                            _: 1
                          }, 512), [
                            [T, e(l).editComponent.tab.list.length < 50]
                          ])
                        ], 512),
                        t(be, {
                          modelValue: H.value,
                          "onUpdate:modelValue": o[22] || (o[22] = (a) => H.value = a),
                          title: e(n)("selectSourcesDiyPage"),
                          width: "1000px",
                          "close-on-press-escape": !0,
                          "destroy-on-close": !0,
                          "close-on-click-modal": !1
                        }, {
                          default: d(() => [
                            V((_(), D(e(Xe), {
                              data: g.data,
                              ref_key: "diyPageTableRef",
                              ref: de,
                              size: "large",
                              height: "490px",
                              onCurrentChange: Be,
                              "row-key": "id",
                              "highlight-current-row": ""
                            }, {
                              empty: d(() => [
                                i("span", null, p(g.loading ? "" : e(n)("emptyData")), 1)
                              ]),
                              default: d(() => [
                                t(X, {
                                  prop: "page_title",
                                  label: e(n)("diyPageTitle"),
                                  "min-width": "120"
                                }, null, 8, ["label"]),
                                t(X, {
                                  prop: "addon_name",
                                  label: e(n)("diyPageTypeName"),
                                  "min-width": "80"
                                }, null, 8, ["label"]),
                                t(X, {
                                  prop: "type_name",
                                  label: e(n)("diyPageForAddon"),
                                  "min-width": "80"
                                }, null, 8, ["label"])
                              ]),
                              _: 1
                            }, 8, ["data"])), [
                              [je, g.loading]
                            ]),
                            i("div", wl, [
                              t(Ne, {
                                "current-page": g.page,
                                "onUpdate:current-page": o[19] || (o[19] = (a) => g.page = a),
                                "page-size": g.limit,
                                "onUpdate:page-size": o[20] || (o[20] = (a) => g.limit = a),
                                layout: "total, sizes, prev, pager, next, jumper",
                                total: g.total,
                                onSizeChange: J,
                                onCurrentChange: J
                              }, null, 8, ["current-page", "page-size", "total"])
                            ]),
                            i("div", Sl, [
                              t(U, {
                                type: "primary",
                                onClick: Ae
                              }, {
                                default: d(() => [
                                  f(p(e(n)("confirm")), 1)
                                ]),
                                _: 1
                              }),
                              t(U, {
                                onClick: o[21] || (o[21] = (a) => H.value = !1)
                              }, {
                                default: d(() => [
                                  f(p(e(n)("cancel")), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "title"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["title"]),
              t(fe, {
                title: e(n)("carouselSearchSwiperSet"),
                name: "swiper"
              }, {
                default: d(() => [
                  t(c, {
                    "label-width": "100px",
                    class: "px-[10px]"
                  }, {
                    default: d(() => [
                      t(r, {
                        label: e(n)("carouselSearchSwiperControl")
                      }, {
                        default: d(() => [
                          t(h, {
                            modelValue: e(l).editComponent.swiper.control,
                            "onUpdate:modelValue": o[24] || (o[24] = (a) => e(l).editComponent.swiper.control = a)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      t(r, {
                        label: e(n)("carouselSearchSwiperInterval")
                      }, {
                        default: d(() => [
                          t(N, {
                            modelValue: e(l).editComponent.swiper.interval,
                            "onUpdate:modelValue": o[25] || (o[25] = (a) => e(l).editComponent.swiper.interval = a),
                            "show-input": "",
                            size: "small",
                            class: "ml-[10px] diy-nav-slider",
                            min: 1,
                            max: 10
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      i("div", Vl, p(e(n)("carouselSearchSwiperTips")), 1),
                      i("div", {
                        ref_key: "imageBoxRef",
                        ref: ne
                      }, [
                        (_(!0), y(R, null, F(e(l).editComponent.swiper.list, (a, S) => (_(), y("div", {
                          key: a.id,
                          class: "item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"
                        }, [
                          t(r, {
                            label: e(n)("image")
                          }, {
                            default: d(() => [
                              t(M, {
                                modelValue: a.imageUrl,
                                "onUpdate:modelValue": (x) => a.imageUrl = x,
                                limit: 1,
                                onChange: ze
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["label"]),
                          V(i("div", {
                            class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                            onClick: (x) => e(l).editComponent.swiper.list.splice(S, 1)
                          }, [
                            t(L, {
                              name: "element CircleCloseFilled",
                              color: "#bbb",
                              size: "20px"
                            })
                          ], 8, vl), [
                            [T, e(l).editComponent.swiper.list.length > 1]
                          ]),
                          t(r, {
                            label: e(n)("link")
                          }, {
                            default: d(() => [
                              t(he, {
                                modelValue: a.link,
                                "onUpdate:modelValue": (x) => a.link = x
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["label"])
                        ]))), 128))
                      ], 512),
                      V(t(U, {
                        class: "w-full",
                        onClick: De
                      }, {
                        default: d(() => [
                          f(p(e(n)("addImageAd")), 1)
                        ]),
                        _: 1
                      }, 512), [
                        [T, e(l).editComponent.swiper.list.length < 10]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 512), [
          [T, e(l).editTab == "content"]
        ]),
        V(i("div", Tl, [
          e(l).editComponent.search.style == "style-2" ? (_(), y("div", kl, [
            i("h3", Ul, p(e(n)("carouselSearchPositionStyle")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchTextColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.positionColor,
                      "onUpdate:modelValue": o[27] || (o[27] = (a) => e(l).editComponent.search.positionColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])) : z("", !0),
          e(l).editComponent.search.style == "style-2" ? (_(), y("div", Il, [
            i("h3", Wl, p(e(n)("carouselSearchSubTitleStyle")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchTextColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.subTitle.textColor,
                      "onUpdate:modelValue": o[28] || (o[28] = (a) => e(l).editComponent.search.subTitle.textColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchBgColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.subTitle.startColor,
                      "onUpdate:modelValue": o[29] || (o[29] = (a) => e(l).editComponent.search.subTitle.startColor = a),
                      predefine: e(l).predefineColors,
                      "show-alpha": ""
                    }, null, 8, ["modelValue", "predefine"]),
                    t(L, {
                      name: "iconfont iconmap-connect",
                      size: "20px",
                      class: "block !text-gray-400 mx-[5px]"
                    }),
                    t(m, {
                      modelValue: e(l).editComponent.search.subTitle.endColor,
                      "onUpdate:modelValue": o[30] || (o[30] = (a) => e(l).editComponent.search.subTitle.endColor = a),
                      predefine: e(l).predefineColors,
                      "show-alpha": ""
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])) : z("", !0),
          i("div", Pl, [
            i("h3", Hl, p(e(n)("carouselSearchStyle")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchTextColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.color,
                      "onUpdate:modelValue": o[31] || (o[31] = (a) => e(l).editComponent.search.color = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchBgColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.bgColor,
                      "onUpdate:modelValue": o[32] || (o[32] = (a) => e(l).editComponent.search.bgColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchBtnColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.btnColor,
                      "onUpdate:modelValue": o[33] || (o[33] = (a) => e(l).editComponent.search.btnColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchBtnBgColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.search.btnBgColor,
                      "onUpdate:modelValue": o[34] || (o[34] = (a) => e(l).editComponent.search.btnBgColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", Bl, [
            i("h3", Al, p(e(n)("carouselSearchTabStyle")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("noColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.tab.noColor,
                      "onUpdate:modelValue": o[35] || (o[35] = (a) => e(l).editComponent.tab.noColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("selectColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.tab.selectColor,
                      "onUpdate:modelValue": o[36] || (o[36] = (a) => e(l).editComponent.tab.selectColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("fixedNoColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.tab.fixedNoColor,
                      "onUpdate:modelValue": o[37] || (o[37] = (a) => e(l).editComponent.tab.fixedNoColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("fixedSelectColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.tab.fixedSelectColor,
                      "onUpdate:modelValue": o[38] || (o[38] = (a) => e(l).editComponent.tab.fixedSelectColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", Rl, [
            i("h3", Dl, p(e(n)("carouselSearchSwiperSet")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchSwiperStyle"),
                  onChange: Ee
                }, {
                  default: d(() => [
                    t(v, {
                      modelValue: e(l).editComponent.swiper.swiperStyle,
                      "onUpdate:modelValue": o[39] || (o[39] = (a) => e(l).editComponent.swiper.swiperStyle = a)
                    }, {
                      default: d(() => [
                        t(C, { label: "style-1" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle1")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "style-2" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle2")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "style-3" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle3")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("topRounded")
                }, {
                  default: d(() => [
                    t(N, {
                      modelValue: e(l).editComponent.swiper.topRounded,
                      "onUpdate:modelValue": o[40] || (o[40] = (a) => e(l).editComponent.swiper.topRounded = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("bottomRounded")
                }, {
                  default: d(() => [
                    t(N, {
                      modelValue: e(l).editComponent.swiper.bottomRounded,
                      "onUpdate:modelValue": o[41] || (o[41] = (a) => e(l).editComponent.swiper.bottomRounded = a),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          i("div", zl, [
            i("h3", El, p(e(n)("carouselSearchSwiperIndicatorSet")), 1),
            t(c, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                t(r, {
                  label: e(n)("carouselSearchSwiperIndicatorStyle")
                }, {
                  default: d(() => [
                    t(v, {
                      modelValue: e(l).editComponent.swiper.indicatorStyle,
                      "onUpdate:modelValue": o[42] || (o[42] = (a) => e(l).editComponent.swiper.indicatorStyle = a)
                    }, {
                      default: d(() => [
                        t(C, { label: "style-1" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle1")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "style-2" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle2")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "style-3" }, {
                          default: d(() => [
                            f(p(e(n)("carouselSearchSwiperIndicatorStyle3")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("carouselSearchSwiperIndicatorAlign")
                }, {
                  default: d(() => [
                    t(v, {
                      modelValue: e(l).editComponent.swiper.indicatorAlign,
                      "onUpdate:modelValue": o[43] || (o[43] = (a) => e(l).editComponent.swiper.indicatorAlign = a)
                    }, {
                      default: d(() => [
                        t(C, { label: "left" }, {
                          default: d(() => [
                            f(p(e(n)("alignLeft")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "center" }, {
                          default: d(() => [
                            f(p(e(n)("alignCenter")), 1)
                          ]),
                          _: 1
                        }),
                        t(C, { label: "right" }, {
                          default: d(() => [
                            f(p(e(n)("alignRight")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("noColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.swiper.indicatorColor,
                      "onUpdate:modelValue": o[44] || (o[44] = (a) => e(l).editComponent.swiper.indicatorColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(r, {
                  label: e(n)("selectColor")
                }, {
                  default: d(() => [
                    t(m, {
                      modelValue: e(l).editComponent.swiper.indicatorActiveColor,
                      "onUpdate:modelValue": o[45] || (o[45] = (a) => e(l).editComponent.swiper.indicatorActiveColor = a),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [T, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
const ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ml
}, Symbol.toStringTag, { value: "Module" }));
export {
  ql as _
};
