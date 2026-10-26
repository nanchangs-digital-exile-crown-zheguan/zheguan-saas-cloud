import { ElMessage as Se, ElRadio as we, ElRadioGroup as ke, ElFormItem as Ue, ElSlider as Ee, ElForm as Le, ElIcon as Be, ElInput as Re, ElButton as Ie, ElTableColumn as Ae, ElImage as Te, ElDialog as Ne, ElCheckbox as Ge, ElSwitch as Pe, ElColorPicker as De, ElLoadingDirective as je } from "element-plus/es";
import { _ as ze } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { _ as We } from "./index-36e25503.js";
import { defineComponent as Me, ref as E, reactive as H, onMounted as $e, nextTick as P, resolveComponent as ie, openBlock as u, createElementBlock as g, Fragment as L, withDirectives as v, createElementVNode as s, toDisplayString as i, unref as e, createVNode as a, withCtx as d, createTextVNode as _, vShow as V, withModifiers as Fe, createBlock as y, renderList as M, createCommentVNode as h, normalizeStyle as Oe, normalizeClass as $, renderSlot as qe, pushScopeId as He, popScopeId as Je } from "vue";
import { _ as D } from "./category_default-8b25c230.js";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { img as J } from "/admin/assets/shared/core-shared.js";
import { u as Ke } from "./diy-642f6d04.js";
import { ElTable as Qe } from "element-plus";
import { S as Xe } from "./sortable.esm-fc069a97.js";
import { a as Ye, b as Ze } from "./goods-d2a56d58.js";
import eo from "./goods-select-popup-ef80f0be.js";
import { r as oo } from "./range-47374eec.js";
import { _ as lo } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "pinia";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "/admin/assets/shared/core-shared.js";
import "./goods_default-bd0cc1e2.js";
const k = (j) => (He("data-v-12ca3d7d"), j = j(), Je(), j), to = { class: "content-wrap" }, ao = { class: "edit-attr-item-wrap" }, no = { class: "mb-[10px]" }, so = { class: "edit-attr-item-wrap" }, io = { class: "mb-[10px]" }, ro = { class: "edit-attr-item-wrap" }, mo = { class: "mb-[10px]" }, uo = { class: "edit-attr-item-wrap" }, co = { class: "mb-[10px]" }, po = ["onClick"], _o = { class: "text-sm text-gray-400 mb-[10px]" }, go = { class: "flex items-center w-full" }, fo = ["onClick"], yo = { class: "text-[var(--el-color-primary)]" }, ho = /* @__PURE__ */ k(() => /* @__PURE__ */ s("span", { class: "iconfont iconxiangyoujiantou" }, null, -1)), Co = ["onClick"], bo = { class: "order-2" }, xo = { class: "h-[30px]" }, vo = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "image-slot" }, [
  /* @__PURE__ */ s("img", {
    class: "w-[30px] h-[30px]",
    src: D
  })
], -1)), Vo = { class: "flex items-center justify-end mt-[15px]" }, So = { class: "table w-[100%] mt-[15px]" }, wo = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "w-[6%]" }, null, -1)), ko = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "w-[10%]" }, null, -1)), Uo = { class: "w-[50%]" }, Eo = { class: "w-[34%] h-[30px] leading-[30px]" }, Lo = { class: "flex items-center border-solid border-[#e5e7eb] py-[10px] border-b-[1px]" }, Bo = ["onClick"], Ro = {
  key: 1,
  class: "w-[6%]"
}, Io = { class: "w-[10%]" }, Ao = { class: "ml-2 flex flex-col items-start w-[50%]" }, To = ["title"], No = { class: "flex items-center cursor-pointer w-[34%]" }, Go = { class: "min-w-[30px] h-[30px] flex items-center justify-center" }, Po = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "image-slot" }, [
  /* @__PURE__ */ s("img", {
    class: "w-[30px] h-[30px]",
    src: D
  })
], -1)), Do = {
  key: 1,
  class: "w-[30px] h-[30px]",
  src: D,
  fit: "contain"
}, jo = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "w-[9%]" }, null, -1)), zo = { class: "w-[7%]" }, Wo = { class: "ml-2 flex flex-col items-start w-[50%]" }, Mo = ["title"], $o = { class: "flex items-center cursor-pointer w-[34%]" }, Fo = { class: "min-w-[30px] h-[30px] flex items-center justify-center" }, Oo = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "image-slot" }, [
  /* @__PURE__ */ s("img", {
    class: "w-[30px] h-[30px]",
    src: D
  })
], -1)), qo = {
  key: 1,
  class: "w-[30px] h-[30px]",
  src: D,
  fit: "contain"
}, Ho = {
  key: 0,
  class: "h-[60px] flex items-center justify-center border-solid border-[#e5e7eb] py-[12px] border-b-[1px]"
}, Jo = { class: "flex items-center justify-end mt-[15px]" }, Ko = { class: "edit-attr-item-wrap mt-[20px]" }, Qo = { class: "mb-[10px]" }, Xo = { class: "flex" }, Yo = ["onClick"], Zo = ["onClick"], el = { class: "edit-attr-item-wrap" }, ol = { class: "mb-[10px]" }, ll = { class: "style-wrap" }, tl = { class: "edit-attr-item-wrap" }, al = { class: "mb-[10px]" }, dl = /* @__PURE__ */ k(() => /* @__PURE__ */ s("div", { class: "mr-[20px]" }, null, -1)), nl = {
  key: 0,
  class: "edit-attr-item-wrap"
}, sl = { class: "mb-[10px]" }, il = /* @__PURE__ */ Me({
  __name: "edit-many-goods-list",
  setup(j, { expose: re }) {
    const l = Ke();
    l.editComponent.ignore = ["componentBgUrl"], l.editComponent.verify = (m) => {
      const t = { code: !0, message: "" };
      if (l.value[m].source == "custom")
        l.value[m].list.forEach((r) => {
          if (r.source === "category") {
            if (r.goods_category == "")
              return t.code = !1, t.message = n("goodsCategoryPlaceholder"), t;
          } else
            r.source == "custom" && r.goods_ids.length == 0 && (t.code = !1, t.message = n("goodsPlaceholder"));
        });
      else if (l.value[m].source == "goods_category" && l.value[m].goods_category == "")
        return t.code = !1, t.message = n("goodsCategoryPlaceholder"), t;
      return t;
    }, l.editComponent.list.forEach((m) => {
      m.id || (m.id = l.generateRandom());
    });
    const B = E(!1), S = H({
      loading: !0,
      data: [],
      searchParam: {
        level: 1
      }
    }), K = E(), me = () => {
      S.loading = !0, Ze({
        ...S.searchParam
      }).then((m) => {
        S.loading = !1, S.data = m.data;
      }).catch(() => {
        S.loading = !1;
      });
    }, ue = () => {
      l.editComponent.goods_category = R.category_id, l.editComponent.goods_category_name = R.category_name, B.value = !1;
    }, ce = () => {
      B.value = !0, R && setTimeout(() => {
        K.value.setCurrentRow(R);
      }, 200);
    }, pe = H([
      {
        isShow: !0,
        type: "button",
        title: l.editComponent.btnStyle.text,
        value: "button"
      },
      {
        isShow: !0,
        type: "icon",
        title: "nc-icon-jiahaoV6xx",
        value: "nc-icon-jiahaoV6xx"
      },
      {
        isShow: !0,
        type: "icon",
        title: "nc-icon-gouwuche1",
        value: "nc-icon-gouwuche1"
      }
    ]);
    l.editComponent.btnStyle.style = "nc-icon-jiahaoV6xx";
    const Q = (m) => {
      l.editComponent.btnStyle.style = m.value;
    }, _e = () => {
      l.editComponent.goods_category = "", l.editComponent.goods_category_name = "";
    };
    let R = {};
    const ge = (m) => {
      R = m;
    }, I = E(!1), X = E(), C = H({
      loading: !0,
      data: []
    });
    $e(() => {
      fe(), me(), P(() => {
        const m = Xe.create(X.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (t) => {
            const r = l.editComponent.list[t.oldIndex];
            l.editComponent.list.splice(t.oldIndex, 1), l.editComponent.list.splice(t.newIndex, 0, r), m.sort(
              oo(l.editComponent.list.length).map((x) => x.toString())
            );
          }
        });
      }), window.addEventListener("resize", F);
    });
    const fe = () => {
      C.loading = !0, Ye().then((m) => {
        C.loading = !1, C.data = m.data, C.data.forEach((t) => {
          t.isShow = !1, t.isSecondLevelIndeterminate = !1, t.secondLevelCheckAll = !1, t.child_list && t.child_list.length && t.child_list.forEach((r) => {
            r.threeLevelCheckAll = !1;
          });
        });
      }).catch(() => {
        C.loading = !1;
      });
    }, ye = () => {
      l.editComponent.list.push({
        id: l.generateRandom(),
        title: "分类",
        desc: "分类描述",
        source: "all",
        goods_category: "",
        goods_category_name: "请选择",
        goods_ids: [],
        imageUrl: ""
      });
    }, Y = E(0), z = E(null), F = () => {
      P(() => {
        z.value && (Y.value = z.value.offsetWidth - z.value.clientWidth);
      });
    };
    let f = 0;
    const b = E({}), he = (m) => {
      m.isShow = !m.isShow, P(() => F());
    }, Ce = () => {
      const m = b.value[f];
      if (!m || !m.category_id) {
        Se({
          type: "warning",
          message: n("请选择分类")
        });
        return;
      }
      l.editComponent.list[f].goods_category = b.value[f].category_id, l.editComponent.list[f].goods_category_name = b.value[f].category_name, I.value = !1;
    }, Z = () => {
      C.data.forEach((m) => {
        m.secondLevelCheckAll = !1, m.child_list && m.child_list.forEach((t) => {
          t.threeLevelCheckAll = !1;
        });
      });
    }, be = (m) => {
      f = m, Z(), C.data.forEach((t) => {
        t.isShow = !1;
      }), b.value[f] || (b.value[f] = {}), P(() => {
        const t = l.editComponent.list[f];
        b.value[f] || (b.value[f] = {}, b.value[f].category_id = t.goods_category, b.value[f].category_name = t.goods_category_name), t && C.data.forEach((r) => {
          r.category_id === t.goods_category && (r.secondLevelCheckAll = !0, r.isShow = !0), r.child_list && r.child_list.forEach((x) => {
            x.category_id === t.goods_category && (x.threeLevelCheckAll = !0, r.isShow = !0);
          });
        });
      }), P(() => F()), I.value = !0;
    }, ee = (m, t, r) => {
      Z(), m ? r ? (t.threeLevelCheckAll = m, b.value[f] = t, r.isShow = !0) : (t.secondLevelCheckAll = m, b.value[f] = t, t.isShow = !0) : delete b.value[f];
    };
    return re({}), (m, t) => {
      const r = we, x = ke, c = Ue, A = Ee, w = Le, xe = ie("Close"), oe = Be, ve = ie("ArrowRight"), W = Re, Ve = We, le = ze, T = Ie, te = Ae, O = Te, ae = Ne, de = Ge, N = Pe, U = De, ne = je;
      return u(), g(L, null, [
        v(s("div", to, [
          s("div", ao, [
            s("h3", no, i(e(n)("selectStyle")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("styleLabel")
                }, {
                  default: d(() => [
                    a(x, {
                      modelValue: e(l).editComponent.headStyle,
                      "onUpdate:modelValue": t[0] || (t[0] = (o) => e(l).editComponent.headStyle = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "style-1" }, {
                          default: d(() => [
                            _(i(e(n)("headStyle1")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "style-2" }, {
                          default: d(() => [
                            _(i(e(n)("headStyle2")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "style-3" }, {
                          default: d(() => [
                            _(i(e(n)("headStyle3")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "style-4" }, {
                          default: d(() => [
                            _(i(e(n)("headStyle4")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                v(a(c, {
                  label: e(n)("manyGoodsListAroundRadius")
                }, {
                  default: d(() => [
                    a(A, {
                      modelValue: e(l).editComponent.aroundRadius,
                      "onUpdate:modelValue": t[1] || (t[1] = (o) => e(l).editComponent.aroundRadius = o),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [V, e(l).editComponent.headStyle == "style-3"]
                ])
              ]),
              _: 1
            })
          ]),
          s("div", so, [
            s("h3", io, i(e(n)("goodsSet")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("sortWay")
                }, {
                  default: d(() => [
                    a(x, {
                      modelValue: e(l).editComponent.sortWay,
                      "onUpdate:modelValue": t[2] || (t[2] = (o) => e(l).editComponent.sortWay = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "default" }, {
                          default: d(() => [
                            _(i(e(n)("default")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "sale_num" }, {
                          default: d(() => [
                            _(i(e(n)("sales")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "price" }, {
                          default: d(() => [
                            _(i(e(n)("price")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("goodsNum")
                }, {
                  default: d(() => [
                    a(A, {
                      "show-input": "",
                      class: "diy-nav-slider",
                      modelValue: e(l).editComponent.num,
                      "onUpdate:modelValue": t[3] || (t[3] = (o) => e(l).editComponent.num = o),
                      min: 1,
                      max: "20",
                      size: "small"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          s("div", ro, [
            s("h3", mo, i(e(n)("图片展示模式")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("模式")
                }, {
                  default: d(() => [
                    a(x, {
                      modelValue: e(l).editComponent.mode,
                      "onUpdate:modelValue": t[4] || (t[4] = (o) => e(l).editComponent.mode = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "aspectFill" }, {
                          default: d(() => [
                            _(i(e(n)("短边完整，长边裁剪")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "aspectFit" }, {
                          default: d(() => [
                            _(i(e(n)("长边适配，等比缩放")), 1)
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
          s("div", uo, [
            s("h3", co, i(e(n)("manyGoodsListCategorySet")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("dataSources")
                }, {
                  default: d(() => [
                    a(x, {
                      modelValue: e(l).editComponent.source,
                      "onUpdate:modelValue": t[5] || (t[5] = (o) => e(l).editComponent.source = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "custom" }, {
                          default: d(() => [
                            _(i(e(n)("manyGoodsListSourceDiy")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "goods_category" }, {
                          default: d(() => [
                            _(i(e(n)("manyGoodsListSourceCategory")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                v(a(c, {
                  label: e(n)("goodsCategoryTitle")
                }, {
                  default: d(() => [
                    a(W, {
                      modelValue: e(l).editComponent.goods_category_name,
                      "onUpdate:modelValue": t[6] || (t[6] = (o) => e(l).editComponent.goods_category_name = o),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("selectCategory"),
                      readonly: "",
                      class: "select-diy-page-input",
                      onClick: t[7] || (t[7] = (o) => ce())
                    }, {
                      suffix: d(() => [
                        s("div", {
                          onClick: Fe(_e, ["stop"])
                        }, [
                          e(l).editComponent.goods_category_name ? (u(), y(oe, { key: 0 }, {
                            default: d(() => [
                              a(xe)
                            ]),
                            _: 1
                          })) : (u(), y(oe, { key: 1 }, {
                            default: d(() => [
                              a(ve)
                            ]),
                            _: 1
                          }))
                        ], 8, po)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [V, e(l).editComponent.source == "goods_category"]
                ]),
                v(s("div", null, [
                  s("p", _o, i(e(n)("dragMouseAdjustOrder")), 1),
                  s("div", {
                    ref_key: "goodsBoxRef",
                    ref: X
                  }, [
                    (u(!0), g(L, null, M(e(l).editComponent.list, (o, G) => (u(), g("div", {
                      key: o.id,
                      class: "item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"
                    }, [
                      a(c, {
                        label: e(n)("manyGoodsListCategoryName")
                      }, {
                        default: d(() => [
                          a(W, {
                            modelValue: o.title,
                            "onUpdate:modelValue": (p) => o.title = p,
                            modelModifiers: { trim: !0 },
                            clearable: "",
                            maxlength: "4",
                            "show-word-limit": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"]),
                      v(a(c, {
                        label: e(n)("manyGoodsListSubTitle")
                      }, {
                        default: d(() => [
                          a(W, {
                            modelValue: o.desc,
                            "onUpdate:modelValue": (p) => o.desc = p,
                            modelModifiers: { trim: !0 },
                            clearable: "",
                            maxlength: "5",
                            "show-word-limit": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"]), [
                        [V, e(l).editComponent.headStyle == "style-1"]
                      ]),
                      a(c, {
                        label: e(n)("goodsSelectPopupSelectGoodsButton")
                      }, {
                        default: d(() => [
                          a(x, {
                            modelValue: o.source,
                            "onUpdate:modelValue": (p) => o.source = p
                          }, {
                            default: d(() => [
                              a(r, { label: "all" }, {
                                default: d(() => [
                                  _(i(e(n)("goodsSelectPopupAllGoods")), 1)
                                ]),
                                _: 1
                              }),
                              a(r, { label: "category" }, {
                                default: d(() => [
                                  _(i(e(n)("selectCategory")), 1)
                                ]),
                                _: 1
                              }),
                              a(r, { label: "custom" }, {
                                default: d(() => [
                                  _(i(e(n)("manualSelectionSources")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"]),
                      o.source == "category" ? (u(), y(c, {
                        key: 0,
                        label: e(n)("selectCategory")
                      }, {
                        default: d(() => [
                          s("div", go, [
                            s("div", {
                              class: "cursor-pointer ml-auto",
                              onClick: (p) => be(G)
                            }, [
                              s("span", yo, i(o.goods_category_name), 1),
                              ho
                            ], 8, fo)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label"])) : h("", !0),
                      o.source == "custom" ? (u(), y(c, {
                        key: 1,
                        label: e(n)("customGoods")
                      }, {
                        default: d(() => [
                          a(eo, {
                            ref_for: !0,
                            ref: "goodsSelectPopupRef",
                            modelValue: o.goods_ids,
                            "onUpdate:modelValue": (p) => o.goods_ids = p,
                            min: 1,
                            max: 99
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"])) : h("", !0),
                      v(a(c, {
                        label: e(n)("image")
                      }, {
                        default: d(() => [
                          a(Ve, {
                            modelValue: o.imageUrl,
                            "onUpdate:modelValue": (p) => o.imageUrl = p,
                            limit: 1
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"]), [
                        [V, e(l).editComponent.headStyle == "style-3"]
                      ]),
                      v(s("div", {
                        class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                        onClick: (p) => e(l).editComponent.list.splice(G, 1)
                      }, [
                        a(le, {
                          name: "element CircleCloseFilled",
                          color: "#bbb",
                          size: "20px"
                        })
                      ], 8, Co), [
                        [V, e(l).editComponent.list.length > 1]
                      ])
                    ]))), 128))
                  ], 512),
                  a(T, {
                    class: "w-full",
                    onClick: ye
                  }, {
                    default: d(() => [
                      _(i(e(n)("manyGoodsLisAddItem")), 1)
                    ]),
                    _: 1
                  })
                ], 512), [
                  [V, e(l).editComponent.source == "custom"]
                ])
              ]),
              _: 1
            }),
            a(ae, {
              modelValue: B.value,
              "onUpdate:modelValue": t[9] || (t[9] = (o) => B.value = o),
              title: e(n)("goodsCategoryTitle"),
              width: "750px",
              "destroy-on-close": !0,
              "close-on-click-modal": !1
            }, {
              default: d(() => [
                v((u(), y(e(Qe), {
                  data: S.data,
                  ref_key: "firstCategoryTableRef",
                  ref: K,
                  size: "large",
                  height: "450px",
                  onCurrentChange: ge,
                  "row-key": "category_id",
                  "highlight-current-row": ""
                }, {
                  empty: d(() => [
                    s("span", null, i(S.loading ? "" : e(n)("emptyData")), 1)
                  ]),
                  default: d(() => [
                    a(te, {
                      label: e(n)("categoryName"),
                      "min-width": "120"
                    }, {
                      default: d(({ row: o }) => [
                        s("span", bo, i(o.category_name), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    a(te, {
                      label: e(n)("categoryImage"),
                      width: "170",
                      align: "left"
                    }, {
                      default: d(({ row: o }) => [
                        s("div", xo, [
                          a(O, {
                            class: "w-[30px] h-[30px]",
                            src: e(J)(o.image),
                            fit: "contain"
                          }, {
                            error: d(() => [
                              vo
                            ]),
                            _: 2
                          }, 1032, ["src"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])), [
                  [ne, S.loading]
                ]),
                s("div", Vo, [
                  a(T, {
                    type: "primary",
                    onClick: ue
                  }, {
                    default: d(() => [
                      _(i(e(n)("confirm")), 1)
                    ]),
                    _: 1
                  }),
                  a(T, {
                    onClick: t[8] || (t[8] = (o) => B.value = !1)
                  }, {
                    default: d(() => [
                      _(i(e(n)("cancel")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "title"]),
            a(ae, {
              modelValue: I.value,
              "onUpdate:modelValue": t[11] || (t[11] = (o) => I.value = o),
              title: e(n)("goodsCategoryTitle"),
              width: "750px",
              "destroy-on-close": !0,
              "close-on-click-modal": !1
            }, {
              default: d(() => [
                v((u(), g("div", So, [
                  s("div", {
                    class: "table-head flex items-center bg-[#f5f7f9] py-[10px] text-[14px]",
                    style: Oe({ paddingRight: Y.value + "px" })
                  }, [
                    wo,
                    ko,
                    s("div", Uo, i(e(n)("categoryName")), 1),
                    s("div", Eo, i(e(n)("categoryImage")), 1)
                  ], 4),
                  s("div", {
                    class: "table-body max-h-[500px] overflow-y-auto",
                    ref_key: "tableBodyRef",
                    ref: z
                  }, [
                    (u(!0), g(L, null, M(C.data, (o, G) => (u(), g("div", {
                      key: G,
                      class: "flex flex-col"
                    }, [
                      s("div", Lo, [
                        o.child_list && o.child_list.length ? (u(), g("div", {
                          key: 0,
                          class: $(["w-[6%] cursor-pointer text-center !text-[10px]", { "iconfont iconxiangyoujiantou": o.child_list.length, "arrow-show": o.isShow }]),
                          onClick: (p) => he(o)
                        }, null, 10, Bo)) : (u(), g("div", Ro)),
                        s("div", Io, [
                          a(de, {
                            modelValue: o.secondLevelCheckAll,
                            "onUpdate:modelValue": (p) => o.secondLevelCheckAll = p,
                            indeterminate: o.isSecondLevelIndeterminate,
                            onChange: (p) => ee(p, o)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onChange"])
                        ]),
                        s("div", Ao, [
                          s("span", {
                            title: o.category_name,
                            class: "multi-hidden leading-[1.4] mr-5 text-[14px] text-[#666]"
                          }, i(o.category_name), 9, To)
                        ]),
                        s("div", No, [
                          s("div", Go, [
                            o.img ? (u(), y(O, {
                              key: 0,
                              class: "w-[30px] h-[30px]",
                              src: e(J)(o.img),
                              fit: "contain"
                            }, {
                              error: d(() => [
                                Po
                              ]),
                              _: 2
                            }, 1032, ["src"])) : (u(), g("img", Do))
                          ])
                        ])
                      ]),
                      v(s("div", null, [
                        (u(!0), g(L, null, M(o.child_list, (p, se) => (u(), g("div", {
                          key: se,
                          class: $(["flex items-center py-[10px] border-solid border-b-[1px]", { hidden: !o.isShow, "border-[#e5e7eb]": se == o.child_list.length - 1 }])
                        }, [
                          jo,
                          s("div", zo, [
                            a(de, {
                              modelValue: p.threeLevelCheckAll,
                              "onUpdate:modelValue": (q) => p.threeLevelCheckAll = q,
                              onChange: (q) => ee(q, p, o)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          s("div", Wo, [
                            s("span", {
                              title: p.category_name,
                              class: "multi-hidden leading-[1.4] mr-5 text-[14px] text-[#666]"
                            }, i(p.category_name), 9, Mo)
                          ]),
                          s("div", $o, [
                            s("div", Fo, [
                              o.img ? (u(), y(O, {
                                key: 0,
                                class: "w-[30px] h-[30px]",
                                src: e(J)(o.img),
                                fit: "contain"
                              }, {
                                error: d(() => [
                                  Oo
                                ]),
                                _: 2
                              }, 1032, ["src"])) : (u(), g("img", qo))
                            ])
                          ])
                        ], 2))), 128))
                      ], 512), [
                        [V, o.child_list && o.isShow]
                      ])
                    ]))), 128)),
                    !C.data.length && !C.loading ? (u(), g("div", Ho, i(e(n)("emptyData")), 1)) : h("", !0)
                  ], 512)
                ])), [
                  [ne, C.loading]
                ]),
                s("div", Jo, [
                  a(T, {
                    type: "primary",
                    onClick: Ce
                  }, {
                    default: d(() => [
                      _(i(e(n)("confirm")), 1)
                    ]),
                    _: 1
                  }),
                  a(T, {
                    onClick: t[10] || (t[10] = (o) => I.value = !1)
                  }, {
                    default: d(() => [
                      _(i(e(n)("cancel")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "title"])
          ]),
          s("div", Ko, [
            s("h3", Qo, i(e(n)("goodsBuyBtn")), 1),
            a(w, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("goodsBtnIsShow")
                }, {
                  default: d(() => [
                    a(N, {
                      modelValue: e(l).editComponent.btnStyle.control,
                      "onUpdate:modelValue": t[12] || (t[12] = (o) => e(l).editComponent.btnStyle.control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(l).editComponent.btnStyle.control ? (u(), y(c, {
                  key: 0,
                  label: e(n)("goodsCartIncident")
                }, {
                  default: d(() => [
                    a(x, {
                      modelValue: e(l).editComponent.btnStyle.cartEvent,
                      "onUpdate:modelValue": t[13] || (t[13] = (o) => e(l).editComponent.btnStyle.cartEvent = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "detail" }, {
                          default: d(() => [
                            _(i(e(n)("goodsDetail")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "cart" }, {
                          default: d(() => [
                            _(i(e(n)("goodsAddCart")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0),
                e(l).editComponent.btnStyle.control ? (u(), y(c, {
                  key: 1,
                  label: e(n)("goodsBtnStyle"),
                  class: "!items-center"
                }, {
                  default: d(() => [
                    s("div", Xo, [
                      (u(!0), g(L, null, M(pe, (o, G) => (u(), g(L, null, [
                        o.isShow == !0 ? (u(), g("div", {
                          key: 0,
                          class: $(["cursor-pointer flex items-center justify-center border-[1px] border-solid border-transparent rounded-[6px] py-[5px] px-[8px] mr-[10px]", { "!border-[var(--el-color-primary)]": e(l).editComponent.btnStyle.style == o.value }])
                        }, [
                          o.type == "icon" ? (u(), g("div", {
                            key: 0,
                            class: $(["nc-iconfont !text-[25px] text-[var(--el-color-primary)]", o.title]),
                            onClick: (p) => Q(o)
                          }, null, 10, Yo)) : h("", !0),
                          o.type == "button" ? (u(), g("div", {
                            key: 1,
                            class: "leading-[1] text-[12px] px-[10px] py-[8px] text-[#fff] rounded-[20px] bg-[var(--el-color-primary)]",
                            onClick: (p) => Q(o)
                          }, i(o.title), 9, Zo)) : h("", !0)
                        ], 2)) : h("", !0)
                      ], 64))), 256))
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0),
                e(l).editComponent.btnStyle.control && e(l).editComponent.btnStyle.style == "button" ? (u(), y(c, {
                  key: 2,
                  label: e(n)("goodsBtnText")
                }, {
                  default: d(() => [
                    a(W, {
                      modelValue: e(l).editComponent.btnStyle.text,
                      "onUpdate:modelValue": t[14] || (t[14] = (o) => e(l).editComponent.btnStyle.text = o),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("goodsBtnTextPlaceholder"),
                      clearable: "",
                      maxlength: "4",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0)
              ]),
              _: 1
            })
          ]),
          s("div", el, [
            s("h3", ol, i(e(n)("goodsShowContent")), 1),
            a(w, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                e(l).editComponent.goodsNameStyle.isShow ? (u(), y(c, {
                  key: 0,
                  label: e(n)("goodsSelectPopupGoodsName")
                }, {
                  default: d(() => [
                    a(N, {
                      modelValue: e(l).editComponent.goodsNameStyle.control,
                      "onUpdate:modelValue": t[15] || (t[15] = (o) => e(l).editComponent.goodsNameStyle.control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0),
                e(l).editComponent.priceStyle.isShow ? (u(), y(c, {
                  key: 1,
                  label: e(n)("goodsPriceColor")
                }, {
                  default: d(() => [
                    a(N, {
                      modelValue: e(l).editComponent.priceStyle.control,
                      "onUpdate:modelValue": t[16] || (t[16] = (o) => e(l).editComponent.priceStyle.control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0),
                e(l).editComponent.saleStyle.isShow ? (u(), y(c, {
                  key: 2,
                  label: e(n)("goodsSaleNum")
                }, {
                  default: d(() => [
                    a(N, {
                      modelValue: e(l).editComponent.saleStyle.control,
                      "onUpdate:modelValue": t[17] || (t[17] = (o) => e(l).editComponent.saleStyle.control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0),
                e(l).editComponent.labelStyle.isShow ? (u(), y(c, {
                  key: 3,
                  label: e(n)("goodsLabel")
                }, {
                  default: d(() => [
                    a(N, {
                      modelValue: e(l).editComponent.labelStyle.control,
                      "onUpdate:modelValue": t[18] || (t[18] = (o) => e(l).editComponent.labelStyle.control = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : h("", !0)
              ]),
              _: 1
            })
          ])
        ], 512), [
          [V, e(l).editTab == "content"]
        ]),
        v(s("div", ll, [
          s("div", tl, [
            s("h3", al, i(e(n)("goodsStyle")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("goodsBgColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.elementBgColor,
                      "onUpdate:modelValue": t[19] || (t[19] = (o) => e(l).editComponent.elementBgColor = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("goodsNameColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.goodsNameStyle.color,
                      "onUpdate:modelValue": t[20] || (t[20] = (o) => e(l).editComponent.goodsNameStyle.color = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    dl,
                    a(x, {
                      modelValue: e(l).editComponent.goodsNameStyle.fontWeight,
                      "onUpdate:modelValue": t[21] || (t[21] = (o) => e(l).editComponent.goodsNameStyle.fontWeight = o)
                    }, {
                      default: d(() => [
                        a(r, { label: "normal" }, {
                          default: d(() => [
                            _(i(e(n)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        a(r, { label: "bold" }, {
                          default: d(() => [
                            _(i(e(n)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("imageRounded")
                }, {
                  default: d(() => [
                    a(A, {
                      modelValue: e(l).editComponent.imgElementRounded,
                      "onUpdate:modelValue": t[22] || (t[22] = (o) => e(l).editComponent.imgElementRounded = o),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("goodsPriceColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.priceStyle.color,
                      "onUpdate:modelValue": t[23] || (t[23] = (o) => e(l).editComponent.priceStyle.color = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("goodsSaleColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.saleStyle.color,
                      "onUpdate:modelValue": t[24] || (t[24] = (o) => e(l).editComponent.saleStyle.color = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("topRounded")
                }, {
                  default: d(() => [
                    a(A, {
                      modelValue: e(l).editComponent.topElementRounded,
                      "onUpdate:modelValue": t[25] || (t[25] = (o) => e(l).editComponent.topElementRounded = o),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("bottomRounded")
                }, {
                  default: d(() => [
                    a(A, {
                      modelValue: e(l).editComponent.bottomElementRounded,
                      "onUpdate:modelValue": t[26] || (t[26] = (o) => e(l).editComponent.bottomElementRounded = o),
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
          e(l).editComponent.btnStyle.control ? (u(), g("div", nl, [
            s("h3", sl, i(e(n)("goodsBuyBtn")), 1),
            a(w, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: d(() => [
                a(c, {
                  label: e(n)("goodsTextColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.btnStyle.textColor,
                      "onUpdate:modelValue": t[27] || (t[27] = (o) => e(l).editComponent.btnStyle.textColor = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(c, {
                  label: e(n)("listFrameColor")
                }, {
                  default: d(() => [
                    a(U, {
                      modelValue: e(l).editComponent.btnStyle.startBgColor,
                      "onUpdate:modelValue": t[28] || (t[28] = (o) => e(l).editComponent.btnStyle.startBgColor = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    a(le, {
                      name: "iconfont iconmap-connect",
                      size: "20px",
                      class: "block !text-gray-400 mx-[5px]"
                    }),
                    a(U, {
                      modelValue: e(l).editComponent.btnStyle.endBgColor,
                      "onUpdate:modelValue": t[29] || (t[29] = (o) => e(l).editComponent.btnStyle.endBgColor = o),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])) : h("", !0),
          qe(m.$slots, "style", {}, void 0, !0)
        ], 512), [
          [V, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
const Al = /* @__PURE__ */ lo(il, [["__scopeId", "data-v-12ca3d7d"]]);
export {
  Al as default
};
