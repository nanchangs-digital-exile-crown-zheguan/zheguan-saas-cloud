import { defineComponent as R, watch as E, ref as P, onMounted as W, nextTick as B, resolveComponent as g, openBlock as w, createElementBlock as v, Fragment as y, withDirectives as _, createElementVNode as u, toDisplayString as r, unref as e, createVNode as t, withCtx as o, createTextVNode as s, vShow as f, renderList as G, renderSlot as L, pushScopeId as me, popScopeId as ue } from "vue";
import { t as i, k as H, bf as D, a as j } from "./core-shared-86a0da16.js";
import { r as O } from "./lodash-8c6c2daa.js";
import { u as $ } from "./diy-0ffc5ef1.js";
const q = { class: "content-wrap" }, J = { class: "edit-attr-item-wrap" }, K = { class: "mb-[10px]" }, Q = { class: "edit-attr-item-wrap" }, X = { class: "mb-[10px]" }, Y = { class: "text-sm text-gray-400 mb-[10px]" }, Z = ["onClick"], ee = { class: "style-wrap" }, le = { class: "edit-attr-item-wrap" }, te = { class: "mb-[10px]" }, oe = { class: "edit-attr-item-wrap" }, ae = { class: "mb-[10px]" }, ie = { class: "edit-attr-item-wrap" }, ne = { class: "mb-[10px]" }, de = /* @__PURE__ */ R({
  __name: "edit-graphic-nav",
  setup(pe, { expose: N }) {
    var x;
    const l = $();
    l.editComponent && (l.editComponent.ignore = []), l.editComponent.verify = (p) => {
      var c;
      const a = { code: !0, message: "" }, d = (c = l.value[p]) == null ? void 0 : c.list;
      return Array.isArray(d) && d.forEach((m) => {
        if ((l.value[p].mode === "graphic" || l.value[p].mode === "img") && m.imageUrl === "")
          return a.code = !1, a.message = i("imageUrlTip"), a;
        if ((l.value[p].mode === "graphic" || l.value[p].mode === "text") && m.title === "")
          return a.code = !1, a.message = i("graphicNavTitlePlaceholder"), a;
      }), a;
    }, Array.isArray((x = l.editComponent) == null ? void 0 : x.list) && l.editComponent.list.forEach((p) => {
      p.id || (p.id = l.generateRandom());
    }), E(
      () => {
        var p;
        return (p = l.editComponent) == null ? void 0 : p.list;
      },
      (p) => {
        Array.isArray(p) && p.forEach((a) => {
          if (!(a != null && a.imageUrl))
            return;
          const d = new Image();
          d.src = H(a.imageUrl), d.onload = () => {
            a.imgWidth !== d.width && (a.imgWidth = d.width), a.imgHeight !== d.height && (a.imgHeight = d.height);
          };
        });
      },
      { deep: !0 }
    );
    const U = () => {
      l.editComponent.list.push({
        id: l.generateRandom(),
        title: "",
        imageUrl: "",
        imgWidth: 0,
        imgHeight: 0,
        link: { name: "" },
        label: {
          control: !1,
          text: "热门",
          textColor: "#FFFFFF",
          bgColorStart: "#F83287",
          bgColorEnd: "#FE3423"
        }
      });
    }, V = P();
    W(() => {
      B(() => {
        const p = D.create(V.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (a) => {
            const d = l.editComponent.list[a.oldIndex];
            l.editComponent.list.splice(a.oldIndex, 1), l.editComponent.list.splice(a.newIndex, 0, d), p.sort(
              O(l.editComponent.list.length).map((c) => c.toString())
            );
          }
        });
      });
    });
    const k = (p) => {
      p == "1" ? l.editComponent.showStyle = "singleSlide" : p == "2" && (l.editComponent.showStyle = "fixed");
    };
    return N({}), (p, a) => {
      const d = g("el-radio"), c = g("el-radio-group"), m = g("el-form-item"), b = g("el-form"), I = g("upload-image"), z = g("el-input"), F = g("icon"), A = g("diy-link"), M = g("el-button"), C = g("el-slider"), S = g("el-color-picker");
      return w(), v(y, null, [
        _(u("div", q, [
          u("div", J, [
            u("h3", K, r(e(i)("graphicNavModeTitle")), 1),
            t(b, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(i)("layoutMode")
                }, {
                  default: o(() => [
                    t(c, {
                      modelValue: e(l).editComponent.layout,
                      "onUpdate:modelValue": a[0] || (a[0] = (n) => e(l).editComponent.layout = n)
                    }, {
                      default: o(() => [
                        t(d, { label: "horizontal" }, {
                          default: o(() => [
                            s(r(e(i)("layoutModeHorizontal")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "vertical" }, {
                          default: o(() => [
                            s(r(e(i)("layoutModeVertical")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("graphicNavSelectMode")
                }, {
                  default: o(() => [
                    t(c, {
                      modelValue: e(l).editComponent.mode,
                      "onUpdate:modelValue": a[1] || (a[1] = (n) => e(l).editComponent.mode = n)
                    }, {
                      default: o(() => [
                        t(d, { label: "graphic" }, {
                          default: o(() => [
                            s(r(e(i)("graphicNavModeGraphic")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "img" }, {
                          default: o(() => [
                            s(r(e(i)("graphicNavModeImg")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "text" }, {
                          default: o(() => [
                            s(r(e(i)("graphicNavModeText")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                _(u("view", null, [
                  t(m, {
                    label: e(i)("graphicNavPageCount")
                  }, {
                    default: o(() => [
                      t(c, {
                        modelValue: e(l).editComponent.pageCount,
                        "onUpdate:modelValue": a[2] || (a[2] = (n) => e(l).editComponent.pageCount = n),
                        onChange: k
                      }, {
                        default: o(() => [
                          t(d, { label: 1 }, {
                            default: o(() => [
                              s(r(e(i)("singleLine")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, { label: 2 }, {
                            default: o(() => [
                              s(r(e(i)("multiline")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  t(m, {
                    label: e(i)("graphicNavShowStyle")
                  }, {
                    default: o(() => [
                      t(c, {
                        modelValue: e(l).editComponent.showStyle,
                        "onUpdate:modelValue": a[3] || (a[3] = (n) => e(l).editComponent.showStyle = n),
                        onChange: p.changeShowStyle
                      }, {
                        default: o(() => [
                          t(d, { label: "fixed" }, {
                            default: o(() => [
                              s(r(e(i)("graphicNavStyleFixed")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, { label: "singleSlide" }, {
                            default: o(() => [
                              s(r(e(l).editComponent.pageCount == 2 ? e(i)("graphicNavStyleMultiLine") : e(i)("graphicNavStyleSingleSlide")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, { label: "pageSlide" }, {
                            default: o(() => [
                              s(r(e(i)("graphicNavStylePageSlide")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onChange"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  t(m, {
                    label: e(i)("graphicNavRowCount")
                  }, {
                    default: o(() => [
                      t(c, {
                        modelValue: e(l).editComponent.rowCount,
                        "onUpdate:modelValue": a[4] || (a[4] = (n) => e(l).editComponent.rowCount = n)
                      }, {
                        default: o(() => [
                          t(d, { label: 3 }, {
                            default: o(() => [
                              s("3" + r(e(i)("piece")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, { label: 4 }, {
                            default: o(() => [
                              s("4" + r(e(i)("piece")), 1)
                            ]),
                            _: 1
                          }),
                          t(d, { label: 5 }, {
                            default: o(() => [
                              s("5" + r(e(i)("piece")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ], 512), [
                  [f, e(l).editComponent.layout == "horizontal"]
                ])
              ]),
              _: 1
            })
          ]),
          u("div", Q, [
            u("h3", X, r(e(i)("graphicNavSetLabel")), 1),
            t(b, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                u("p", Y, r(e(i)("graphicNavTips")), 1),
                u("div", {
                  ref_key: "imageBoxRef",
                  ref: V
                }, [
                  (w(!0), v(y, null, G(e(l).editComponent.list, (n, T) => (w(), v("div", {
                    key: n.id,
                    class: "item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"
                  }, [
                    _(t(m, {
                      label: e(i)("image")
                    }, {
                      default: o(() => [
                        t(I, {
                          modelValue: n.imageUrl,
                          "onUpdate:modelValue": (h) => n.imageUrl = h,
                          limit: 1
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["label"]), [
                      [f, e(l).editComponent.mode === "graphic" || e(l).editComponent.mode === "img"]
                    ]),
                    _(t(m, {
                      label: e(i)("graphicNavTitle")
                    }, {
                      default: o(() => [
                        t(z, {
                          modelValue: n.title,
                          "onUpdate:modelValue": (h) => n.title = h,
                          modelModifiers: { trim: !0 },
                          placeholder: e(i)("graphicNavTitlePlaceholder"),
                          clearable: "",
                          maxlength: "20",
                          "show-word-limit": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 2
                    }, 1032, ["label"]), [
                      [f, e(l).editComponent.mode === "graphic" || e(l).editComponent.mode === "text"]
                    ]),
                    _(u("div", {
                      class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                      onClick: (h) => e(l).editComponent.list.splice(T, 1)
                    }, [
                      t(F, {
                        name: "element CircleCloseFilled",
                        color: "#bbb",
                        size: "20px"
                      })
                    ], 8, Z), [
                      [f, e(l).editComponent.list.length > 1]
                    ]),
                    t(m, {
                      label: e(i)("link")
                    }, {
                      default: o(() => [
                        t(A, {
                          modelValue: n.link,
                          "onUpdate:modelValue": (h) => n.link = h
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["label"])
                  ]))), 128))
                ], 512),
                _(t(M, {
                  class: "w-full",
                  onClick: U
                }, {
                  default: o(() => [
                    s(r(e(i)("addGraphicNav")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [f, e(l).editComponent.list.length < 50]
                ])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [f, e(l).editTab == "content"]
        ]),
        _(u("div", ee, [
          _(u("div", le, [
            u("h3", te, r(e(i)("graphicNavImageSet")), 1),
            t(b, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(i)("graphicNavImageSize")
                }, {
                  default: o(() => [
                    t(C, {
                      modelValue: e(l).editComponent.imageSize,
                      "onUpdate:modelValue": a[5] || (a[5] = (n) => e(l).editComponent.imageSize = n),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 20,
                      max: 60
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("graphicNavAroundRadius")
                }, {
                  default: o(() => [
                    t(C, {
                      modelValue: e(l).editComponent.aroundRadius,
                      "onUpdate:modelValue": a[6] || (a[6] = (n) => e(l).editComponent.aroundRadius = n),
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
          ], 512), [
            [f, ["graphic", "img"].includes(e(l).editComponent.mode)]
          ]),
          _(u("div", oe, [
            u("h3", ae, r(e(i)("textSet")), 1),
            t(b, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(i)("textFontSize")
                }, {
                  default: o(() => [
                    t(C, {
                      modelValue: e(l).editComponent.font.size,
                      "onUpdate:modelValue": a[7] || (a[7] = (n) => e(l).editComponent.font.size = n),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 16
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("textFontWeight")
                }, {
                  default: o(() => [
                    t(c, {
                      modelValue: e(l).editComponent.font.weight,
                      "onUpdate:modelValue": a[8] || (a[8] = (n) => e(l).editComponent.font.weight = n)
                    }, {
                      default: o(() => [
                        t(d, { label: "normal" }, {
                          default: o(() => [
                            s(r(e(i)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "bold" }, {
                          default: o(() => [
                            s(r(e(i)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("textColor")
                }, {
                  default: o(() => [
                    t(S, {
                      modelValue: e(l).editComponent.font.color,
                      "onUpdate:modelValue": a[9] || (a[9] = (n) => e(l).editComponent.font.color = n),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ], 512), [
            [f, ["graphic", "text"].includes(e(l).editComponent.mode)]
          ]),
          _(u("div", ie, [
            u("h3", ne, r(e(i)("carouselSearchSwiperIndicatorSet")), 1),
            t(b, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: o(() => [
                t(m, {
                  label: e(i)("carouselSearchSwiperIndicatorStyle")
                }, {
                  default: o(() => [
                    t(c, {
                      modelValue: e(l).editComponent.swiper.indicatorStyle,
                      "onUpdate:modelValue": a[10] || (a[10] = (n) => e(l).editComponent.swiper.indicatorStyle = n)
                    }, {
                      default: o(() => [
                        t(d, { label: "style-1" }, {
                          default: o(() => [
                            s(r(e(i)("carouselSearchSwiperIndicatorStyle1")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "style-2" }, {
                          default: o(() => [
                            s(r(e(i)("carouselSearchSwiperIndicatorStyle2")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "style-3" }, {
                          default: o(() => [
                            s(r(e(i)("carouselSearchSwiperIndicatorStyle3")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("carouselSearchSwiperIndicatorAlign")
                }, {
                  default: o(() => [
                    t(c, {
                      modelValue: e(l).editComponent.swiper.indicatorAlign,
                      "onUpdate:modelValue": a[11] || (a[11] = (n) => e(l).editComponent.swiper.indicatorAlign = n)
                    }, {
                      default: o(() => [
                        t(d, { label: "left" }, {
                          default: o(() => [
                            s(r(e(i)("alignLeft")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "center" }, {
                          default: o(() => [
                            s(r(e(i)("alignCenter")), 1)
                          ]),
                          _: 1
                        }),
                        t(d, { label: "right" }, {
                          default: o(() => [
                            s(r(e(i)("alignRight")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("noColor")
                }, {
                  default: o(() => [
                    t(S, {
                      modelValue: e(l).editComponent.swiper.indicatorColor,
                      "onUpdate:modelValue": a[12] || (a[12] = (n) => e(l).editComponent.swiper.indicatorColor = n),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(i)("selectColor")
                }, {
                  default: o(() => [
                    t(S, {
                      modelValue: e(l).editComponent.swiper.indicatorActiveColor,
                      "onUpdate:modelValue": a[13] || (a[13] = (n) => e(l).editComponent.swiper.indicatorActiveColor = n),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ], 512), [
            [f, e(l).editComponent.showStyle == "pageSlide" && e(l).editComponent.layout == "horizontal"]
          ]),
          L(p.$slots, "style", {}, void 0, !0)
        ], 512), [
          [f, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
const re = /* @__PURE__ */ j(de, [["__scopeId", "data-v-7b3c0745"]]), fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" }));
export {
  fe as _
};
