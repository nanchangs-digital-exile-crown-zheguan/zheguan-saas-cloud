import { ElRadio as k, ElRadioGroup as B, ElFormItem as P, ElForm as G, ElInput as I, ElColorPicker as z, ElButton as N, ElSlider as M } from "element-plus/es";
import { _ as D } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { defineComponent as $, ref as A, onMounted as L, nextTick as j, openBlock as _, createElementBlock as F, Fragment as U, withDirectives as h, createElementVNode as m, toDisplayString as u, unref as e, createVNode as l, withCtx as a, createTextVNode as b, createBlock as O, createCommentVNode as q, renderList as H, vShow as x, renderSlot as J } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { u as K } from "./diy-642f6d04.js";
import Q from "./goods-select-popup-ef80f0be.js";
import { S as W } from "./sortable.esm-fc069a97.js";
import { r as X } from "./range-47374eec.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "./goods_default-bd0cc1e2.js";
import "/admin/assets/shared/core-shared.js";
import "./goods-d2a56d58.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
const Y = { class: "content-wrap" }, Z = { class: "edit-attr-item-wrap" }, ee = { class: "mb-[10px]" }, oe = { class: "edit-attr-item-wrap" }, le = { class: "mb-[10px]" }, te = { class: "edit-attr-item-wrap" }, de = { class: "mb-[10px]" }, ne = { class: "text-sm text-gray-400 mb-[10px]" }, ae = ["onClick"], se = { class: "style-wrap" }, re = { class: "edit-attr-item-wrap" }, ie = { class: "mb-[10px]" }, Ee = /* @__PURE__ */ $({
  __name: "edit-shop-goods-recommend",
  setup(me, { expose: S }) {
    const o = K();
    o.editComponent.ignore = ["componentBgUrl"], o.editComponent.verify = (i) => {
      const n = { code: !0, message: "" };
      return o.value[i].list.forEach((p) => {
        if (!p.title.text)
          return n.code = !1, n.message = d("activeCubeTitlePlaceholder"), n;
        if (!p.moreTitle.text)
          return n.code = !1, n.message = d("shopGoodsRecommendComponentTagPlaceholder"), n;
        if (!p.button.text)
          return n.code = !1, n.message = d("activeCubeButtonPlaceholder"), n;
      }), o.value[i].source == "custom" && o.value[i].goods_ids.length < o.value[i].list.length && (n.code = !1, n.message = d("goodsPlaceholder")), n;
    }, o.editComponent.list.forEach((i) => {
      i.id || (i.id = o.generateRandom());
    });
    const v = A();
    L(() => {
      j(() => {
        const i = W.create(v.value, {
          group: "item-wrap",
          animation: 200,
          onEnd: (f) => {
            const r = o.editComponent.list[f.oldIndex];
            o.editComponent.list.splice(f.oldIndex, 1), o.editComponent.list.splice(f.newIndex, 0, r), i.sort(
              X(o.editComponent.list.length).map((C) => C.toString())
            );
          }
        }), n = o.editComponent.list.length, p = o.editComponent.goods_ids.length;
        o.editComponent.goods_ids.splice(n, p);
      });
    });
    const T = () => {
      o.editComponent.list.push({
        id: o.generateRandom(),
        title: {
          text: "标题",
          textColor: "#303133"
        },
        moreTitle: {
          text: "精选",
          startColor: "#FF7234",
          endColor: "#FF213F"
        },
        listFrame: {
          startColor: "#FFE5E5",
          endColor: "#FFF5F0"
        },
        button: {
          text: "首单",
          textColor: "#FFFFFF",
          color: "#FF1128"
        },
        goodsId: []
      });
    }, E = (i) => {
      o.editComponent.list.splice(i, 1), o.editComponent.goods_ids.splice(i, 1);
    };
    return S({}), (i, n) => {
      const p = k, f = B, r = P, C = G, V = I, c = z, g = D, y = N, w = M;
      return _(), F(U, null, [
        h(m("div", Y, [
          m("div", Z, [
            m("h3", ee, u(e(d)("selectSource")), 1),
            l(C, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                l(r, {
                  label: e(d)("goodsSelectPopupSelectGoodsButton")
                }, {
                  default: a(() => [
                    l(f, {
                      modelValue: e(o).editComponent.source,
                      "onUpdate:modelValue": n[0] || (n[0] = (t) => e(o).editComponent.source = t),
                      title: e(d)("goodsSelectPopupSelectGoodsButton")
                    }, {
                      default: a(() => [
                        l(p, { label: "all" }, {
                          default: a(() => [
                            b(u(e(d)("defaultGoodsSelect")), 1)
                          ]),
                          _: 1
                        }),
                        l(p, { label: "custom" }, {
                          default: a(() => [
                            b(u(e(d)("manualSelectionSources")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "title"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(o).editComponent.source == "custom" ? (_(), O(r, {
                  key: 0,
                  label: e(d)("customGoods")
                }, {
                  default: a(() => [
                    l(Q, {
                      ref: "goodsSelectPopupRef",
                      modelValue: e(o).editComponent.goods_ids,
                      "onUpdate:modelValue": n[1] || (n[1] = (t) => e(o).editComponent.goods_ids = t),
                      min: e(o).editComponent.list.length,
                      max: e(o).editComponent.list.length
                    }, null, 8, ["modelValue", "min", "max"])
                  ]),
                  _: 1
                }, 8, ["label"])) : q("", !0)
              ]),
              _: 1
            })
          ]),
          m("div", oe, [
            m("h3", le, u(e(d)("图片展示模式")), 1),
            l(C, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                l(r, {
                  label: e(d)("模式")
                }, {
                  default: a(() => [
                    l(f, {
                      modelValue: e(o).editComponent.mode,
                      "onUpdate:modelValue": n[2] || (n[2] = (t) => e(o).editComponent.mode = t)
                    }, {
                      default: a(() => [
                        l(p, { label: "aspectFill" }, {
                          default: a(() => [
                            b(u(e(d)("短边完整，长边裁剪")), 1)
                          ]),
                          _: 1
                        }),
                        l(p, { label: "aspectFit" }, {
                          default: a(() => [
                            b(u(e(d)("长边适配，等比缩放")), 1)
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
          m("div", te, [
            l(C, {
              "label-width": "120px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                m("h3", de, u(e(d)("activeCubeBlockContent")), 1),
                m("p", ne, u(e(d)("dragMouseAdjustOrder")), 1),
                m("div", {
                  ref_key: "blockBoxRef",
                  ref: v
                }, [
                  (_(!0), F(U, null, H(e(o).editComponent.list, (t, R) => (_(), F("div", {
                    key: t.id,
                    class: "item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"
                  }, [
                    l(r, {
                      label: e(d)("activeCubeTitle")
                    }, {
                      default: a(() => [
                        l(V, {
                          modelValue: t.title.text,
                          "onUpdate:modelValue": (s) => t.title.text = s,
                          modelModifiers: { trim: !0 },
                          placeholder: e(d)("activeCubeTitlePlaceholder"),
                          clearable: "",
                          maxlength: "4",
                          "show-word-limit": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("shopGoodsRecommendComponentTag")
                    }, {
                      default: a(() => [
                        l(V, {
                          modelValue: t.moreTitle.text,
                          "onUpdate:modelValue": (s) => t.moreTitle.text = s,
                          modelModifiers: { trim: !0 },
                          placeholder: e(d)("shopGoodsRecommendComponentTagPlaceholder"),
                          clearable: "",
                          maxlength: "2",
                          "show-word-limit": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("activeCubeButton")
                    }, {
                      default: a(() => [
                        l(V, {
                          modelValue: t.button.text,
                          "onUpdate:modelValue": (s) => t.button.text = s,
                          modelModifiers: { trim: !0 },
                          placeholder: e(d)("activeCubeButtonPlaceholder"),
                          clearable: "",
                          maxlength: "2",
                          "show-word-limit": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("activeCubeSubTitleTextColor")
                    }, {
                      default: a(() => [
                        l(c, {
                          modelValue: t.title.textColor,
                          "onUpdate:modelValue": (s) => t.title.textColor = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("shopGoodsRecommendComponentTagColor")
                    }, {
                      default: a(() => [
                        l(c, {
                          modelValue: t.moreTitle.startColor,
                          "onUpdate:modelValue": (s) => t.moreTitle.startColor = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"]),
                        l(g, {
                          name: "iconfont iconmap-connect",
                          size: "20px",
                          class: "block !text-gray-400 mx-[5px]"
                        }),
                        l(c, {
                          modelValue: t.moreTitle.endColor,
                          "onUpdate:modelValue": (s) => t.moreTitle.endColor = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("activeCubeButtonColor")
                    }, {
                      default: a(() => [
                        l(c, {
                          modelValue: t.button.color,
                          "onUpdate:modelValue": (s) => t.button.color = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    l(r, {
                      label: e(d)("activeListFrameColor")
                    }, {
                      default: a(() => [
                        l(c, {
                          modelValue: t.listFrame.startColor,
                          "onUpdate:modelValue": (s) => t.listFrame.startColor = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"]),
                        l(g, {
                          name: "iconfont iconmap-connect",
                          size: "20px",
                          class: "block !text-gray-400 mx-[5px]"
                        }),
                        l(c, {
                          modelValue: t.listFrame.endColor,
                          "onUpdate:modelValue": (s) => t.listFrame.endColor = s,
                          "show-alpha": "",
                          predefine: e(o).predefineColors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "predefine"])
                      ]),
                      _: 2
                    }, 1032, ["label"]),
                    h(m("div", {
                      class: "del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",
                      onClick: (s) => E(R)
                    }, [
                      l(g, {
                        name: "element CircleCloseFilled",
                        color: "#bbb",
                        size: "20px"
                      })
                    ], 8, ae), [
                      [x, e(o).editComponent.list.length > 1]
                    ])
                  ]))), 128))
                ], 512),
                h(l(y, {
                  class: "w-full",
                  onClick: T
                }, {
                  default: a(() => [
                    b(u(e(d)("activeCubeAddItem")), 1)
                  ]),
                  _: 1
                }, 512), [
                  [x, e(o).editComponent.list.length < 10]
                ])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [x, e(o).editTab == "content"]
        ]),
        h(m("div", se, [
          m("div", re, [
            m("h3", ie, u(e(d)("goodsStyle")), 1),
            l(C, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                l(r, {
                  label: e(d)("goodsPriceColor")
                }, {
                  default: a(() => [
                    l(c, {
                      modelValue: e(o).editComponent.priceStyle.mainColor,
                      "onUpdate:modelValue": n[3] || (n[3] = (t) => e(o).editComponent.priceStyle.mainColor = t),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(r, {
                  label: e(d)("imageRounded")
                }, {
                  default: a(() => [
                    l(w, {
                      modelValue: e(o).editComponent.imgElementRounded,
                      "onUpdate:modelValue": n[4] || (n[4] = (t) => e(o).editComponent.imgElementRounded = t),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(r, {
                  label: e(d)("topRounded")
                }, {
                  default: a(() => [
                    l(w, {
                      modelValue: e(o).editComponent.topElementRounded,
                      "onUpdate:modelValue": n[5] || (n[5] = (t) => e(o).editComponent.topElementRounded = t),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(r, {
                  label: e(d)("bottomRounded")
                }, {
                  default: a(() => [
                    l(w, {
                      modelValue: e(o).editComponent.bottomElementRounded,
                      "onUpdate:modelValue": n[6] || (n[6] = (t) => e(o).editComponent.bottomElementRounded = t),
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
          J(i.$slots, "style")
        ], 512), [
          [x, e(o).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  Ee as default
};
