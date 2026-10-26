import { _ as E } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { ElCheckbox as T, ElCheckboxGroup as z, ElFormItem as N, ElRadio as A, ElRadioGroup as I, ElInput as R, ElForm as G, ElSlider as D, ElColorPicker as F } from "element-plus/es";
import { defineComponent as M, ref as P, onMounted as $, openBlock as h, createElementBlock as w, Fragment as j, withDirectives as y, createElementVNode as r, createVNode as t, withCtx as a, unref as e, toDisplayString as i, createTextVNode as u, vShow as x, createCommentVNode as q, renderSlot as H } from "vue";
import { t as d } from "/admin/assets/shared/admin-lang.js";
import { u as J } from "./diy-642f6d04.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const K = { class: "content-wrap goods-detail-bottom" }, L = { class: "edit-attr-item-wrap" }, O = { class: "text-sm text-gray-400" }, Q = { class: "text-sm text-gray-400" }, W = { class: "style-wrap" }, X = {
  key: 0,
  class: "edit-attr-item-wrap"
}, Y = { class: "mb-[10px]" }, Z = { class: "edit-attr-item-wrap" }, ee = { class: "mb-[10px]" }, se = /* @__PURE__ */ M({
  __name: "edit-shop-goods-detail-bottom",
  setup(oe, { expose: v }) {
    const o = J();
    o.editComponent.ignore = ["pageBgColor", "componentBgUrl", "marginTop", "marginBottom", "marginBoth", "topRounded", "bottomRounded"], o.editComponent.verify = (b) => ({ code: !0, message: "" });
    const U = () => {
      o.editComponent.menuContent && (f.value = typeof o.editComponent.menuContent == "object" ? o.editComponent.menuContent : o.editComponent.menuContent.split(","));
    }, f = P([]), k = (b) => {
      o.editComponent.menuContent = b;
    };
    return $(() => {
      U();
    }), v({}), (b, l) => {
      const C = T, B = z, m = N, p = A, _ = I, V = R, c = G, g = D, s = F, S = E;
      return h(), w(j, null, [
        y(r("div", K, [
          r("div", L, [
            t(c, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(m, {
                  label: e(d)("是否显示")
                }, {
                  default: a(() => [
                    t(B, {
                      modelValue: f.value,
                      "onUpdate:modelValue": l[0] || (l[0] = (n) => f.value = n),
                      onChange: k,
                      min: 1,
                      max: 3
                    }, {
                      default: a(() => [
                        t(C, {
                          label: "首页",
                          value: "index"
                        }),
                        t(C, {
                          label: "客服",
                          value: "service"
                        }),
                        t(C, {
                          label: "购物车",
                          value: "cart"
                        }),
                        t(C, {
                          label: "收藏",
                          value: "collect"
                        }),
                        t(C, {
                          label: "分享",
                          value: "share"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    r("div", O, i(e(d)("菜单内容最多选择3个，最少选择1个")), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(d)("购物车按钮")
                }, {
                  default: a(() => [
                    t(_, {
                      modelValue: e(o).editComponent.cartIsShow,
                      "onUpdate:modelValue": l[1] || (l[1] = (n) => e(o).editComponent.cartIsShow = n)
                    }, {
                      default: a(() => [
                        t(p, { label: !0 }, {
                          default: a(() => [
                            u(i(e(d)("显示")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: !1 }, {
                          default: a(() => [
                            u(i(e(d)("隐藏")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    r("div", Q, i(e(d)("注意：该设置在实物商品或虚拟商品且不核销的情况下生效")), 1)
                  ]),
                  _: 1
                }, 8, ["label"]),
                y(t(m, {
                  label: e(d)("购物车名称")
                }, {
                  default: a(() => [
                    t(V, {
                      modelValue: e(o).editComponent.cartName,
                      "onUpdate:modelValue": l[2] || (l[2] = (n) => e(o).editComponent.cartName = n),
                      modelModifiers: { trim: !0 },
                      placeholder: e(d)("goodsBtnTextPlaceholder"),
                      clearable: "",
                      maxlength: "5",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [x, e(o).editComponent.cartIsShow]
                ]),
                t(m, {
                  label: e(d)("购买名称")
                }, {
                  default: a(() => [
                    t(V, {
                      modelValue: e(o).editComponent.buyName,
                      "onUpdate:modelValue": l[3] || (l[3] = (n) => e(o).editComponent.buyName = n),
                      modelModifiers: { trim: !0 },
                      placeholder: e(d)("goodsBtnTextPlaceholder"),
                      clearable: "",
                      maxlength: "5",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])
        ], 512), [
          [x, e(o).editTab == "content"]
        ]),
        y(r("div", W, [
          e(o).editComponent.cartIsShow ? (h(), w("div", X, [
            r("h3", Y, i(e(d)("加入购物车")), 1),
            t(c, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(m, {
                  label: e(d)("文字大小")
                }, {
                  default: a(() => [
                    t(g, {
                      modelValue: e(o).editComponent.cartStyle.fontSize,
                      "onUpdate:modelValue": l[4] || (l[4] = (n) => e(o).editComponent.cartStyle.fontSize = n),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 15
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(d)("textColor")
                }, {
                  default: a(() => [
                    t(s, {
                      modelValue: e(o).editComponent.cartStyle.textColor,
                      "onUpdate:modelValue": l[5] || (l[5] = (n) => e(o).editComponent.cartStyle.textColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(d)("bgGradientAngle")
                }, {
                  default: a(() => [
                    t(_, {
                      modelValue: e(o).editComponent.cartStyle.gradientAngle,
                      "onUpdate:modelValue": l[6] || (l[6] = (n) => e(o).editComponent.cartStyle.gradientAngle = n)
                    }, {
                      default: a(() => [
                        t(p, { label: "to bottom" }, {
                          default: a(() => [
                            u(i(e(d)("topToBottom")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "to right" }, {
                          default: a(() => [
                            u(i(e(d)("leftToRight")), 1)
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
                  label: e(d)("背景颜色")
                }, {
                  default: a(() => [
                    t(s, {
                      modelValue: e(o).editComponent.cartStyle.startColor,
                      "onUpdate:modelValue": l[7] || (l[7] = (n) => e(o).editComponent.cartStyle.startColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    t(S, {
                      name: "iconfont iconmap-connect",
                      size: "20px",
                      class: "block !text-gray-400 mx-[5px]"
                    }),
                    t(s, {
                      modelValue: e(o).editComponent.cartStyle.endColor,
                      "onUpdate:modelValue": l[8] || (l[8] = (n) => e(o).editComponent.cartStyle.endColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])) : q("", !0),
          r("div", Z, [
            r("h3", ee, i(e(d)("立即购买")), 1),
            t(c, {
              "label-width": "90px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(m, {
                  label: e(d)("文字大小")
                }, {
                  default: a(() => [
                    t(g, {
                      modelValue: e(o).editComponent.buyStyle.fontSize,
                      "onUpdate:modelValue": l[9] || (l[9] = (n) => e(o).editComponent.buyStyle.fontSize = n),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 15
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(d)("textColor")
                }, {
                  default: a(() => [
                    t(s, {
                      modelValue: e(o).editComponent.buyStyle.textColor,
                      "onUpdate:modelValue": l[10] || (l[10] = (n) => e(o).editComponent.buyStyle.textColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(m, {
                  label: e(d)("bgGradientAngle")
                }, {
                  default: a(() => [
                    t(_, {
                      modelValue: e(o).editComponent.buyStyle.gradientAngle,
                      "onUpdate:modelValue": l[11] || (l[11] = (n) => e(o).editComponent.buyStyle.gradientAngle = n)
                    }, {
                      default: a(() => [
                        t(p, { label: "to bottom" }, {
                          default: a(() => [
                            u(i(e(d)("topToBottom")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "to right" }, {
                          default: a(() => [
                            u(i(e(d)("leftToRight")), 1)
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
                  label: e(d)("背景颜色")
                }, {
                  default: a(() => [
                    t(s, {
                      modelValue: e(o).editComponent.buyStyle.startColor,
                      "onUpdate:modelValue": l[12] || (l[12] = (n) => e(o).editComponent.buyStyle.startColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    t(S, {
                      name: "iconfont iconmap-connect",
                      size: "20px",
                      class: "block !text-gray-400 mx-[5px]"
                    }),
                    t(s, {
                      modelValue: e(o).editComponent.buyStyle.endColor,
                      "onUpdate:modelValue": l[13] || (l[13] = (n) => e(o).editComponent.buyStyle.endColor = n),
                      "show-alpha": "",
                      predefine: e(o).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          H(b.$slots, "style")
        ], 512), [
          [x, e(o).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  se as default
};
