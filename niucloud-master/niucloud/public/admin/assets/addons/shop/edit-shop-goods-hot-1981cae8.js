import { _ as T } from "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import { ElRadio as k, ElRadioGroup as B, ElFormItem as E, ElInput as F, ElForm as N, ElSlider as I, ElColorPicker as R } from "element-plus/es";
import { _ as W } from "./index.vue_vue_type_style_index_0_lang-e3c3c8cf.js";
import { _ as M } from "./index-36e25503.js";
import { defineComponent as D, openBlock as _, createElementBlock as U, Fragment as G, withDirectives as x, createElementVNode as m, toDisplayString as s, unref as e, createVNode as t, withCtx as a, createTextVNode as u, vShow as S, createBlock as v, createCommentVNode as g, renderSlot as P } from "vue";
import { t as n } from "/admin/assets/shared/admin-lang.js";
import { u as $ } from "./diy-642f6d04.js";
import H from "./goods-select-popup-ef80f0be.js";
import "/admin/assets/shared/core-shared.js";

import "/admin/assets/shared/core-shared.js";
import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "@element-plus/icons-vue";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./sortable.esm-fc069a97.js";
import "pinia";
import "./goods_default-bd0cc1e2.js";
import "./goods-d2a56d58.js";
import "/admin/assets/shared/core-shared.js";
const j = { class: "content-wrap" }, q = { class: "edit-attr-item-wrap" }, A = { class: "mb-[10px]" }, J = { class: "edit-attr-item-wrap" }, K = { class: "mb-[10px]" }, L = { class: "edit-attr-item-wrap" }, O = { class: "mb-[10px]" }, Q = { class: "edit-attr-item-wrap" }, X = { class: "mb-[10px]" }, Y = { class: "edit-attr-item-wrap" }, Z = { class: "mb-[10px]" }, ee = { class: "style-wrap" }, le = {
  key: 0,
  class: "edit-attr-item-wrap"
}, te = { class: "mb-[10px]" }, oe = { class: "edit-attr-item-wrap" }, de = { class: "mb-[10px]" }, ne = { class: "edit-attr-item-wrap" }, ae = { class: "mb-[10px]" }, ie = { class: "edit-attr-item-wrap" }, me = { class: "mb-[10px]" }, Re = /* @__PURE__ */ D({
  __name: "edit-shop-goods-hot",
  setup(se, { expose: h }) {
    const l = $();
    return l.editComponent.ignore = [], l.editComponent.verify = (V) => {
      const o = { code: !0, message: "" };
      return l.value[V].goodsStyle.source == "custom" && !l.value[V].goodsStyle.goodsIds.length && (o.code = !1, o.message = n("请选择商品")), o;
    }, h({}), (V, o) => {
      const p = k, C = B, i = E, y = F, z = M, w = W, r = N, f = I, b = R, c = T;
      return _(), U(G, null, [
        x(m("div", j, [
          m("div", q, [
            m("h3", A, s(e(n)("标题内容")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("标题风格")
                }, {
                  default: a(() => [
                    t(C, {
                      modelValue: e(l).editComponent.titleStyle.way,
                      "onUpdate:modelValue": o[0] || (o[0] = (d) => e(l).editComponent.titleStyle.way = d)
                    }, {
                      default: a(() => [
                        t(p, { value: "text" }, {
                          default: a(() => [
                            u(s(e(n)("文字")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { value: "img" }, {
                          default: a(() => [
                            u(s(e(n)("图片")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                x(t(i, {
                  label: e(n)("标题")
                }, {
                  default: a(() => [
                    t(y, {
                      modelValue: e(l).editComponent.titleStyle.text,
                      "onUpdate:modelValue": o[1] || (o[1] = (d) => e(l).editComponent.titleStyle.text = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("请输入标题"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [S, e(l).editComponent.titleStyle.way == "text"]
                ]),
                x(t(i, {
                  label: e(n)("image")
                }, {
                  default: a(() => [
                    t(z, {
                      modelValue: e(l).editComponent.titleStyle.imgUrl,
                      "onUpdate:modelValue": o[2] || (o[2] = (d) => e(l).editComponent.titleStyle.imgUrl = d),
                      limit: 1
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [S, e(l).editComponent.titleStyle.way == "img"]
                ]),
                t(i, {
                  label: e(n)("link")
                }, {
                  default: a(() => [
                    t(w, {
                      modelValue: e(l).editComponent.titleStyle.link,
                      "onUpdate:modelValue": o[3] || (o[3] = (d) => e(l).editComponent.titleStyle.link = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          m("div", J, [
            m("h3", K, s(e(n)("副标题内容")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("副标题")
                }, {
                  default: a(() => [
                    t(y, {
                      modelValue: e(l).editComponent.subTitleStyle.text,
                      "onUpdate:modelValue": o[4] || (o[4] = (d) => e(l).editComponent.subTitleStyle.text = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("请输入副标题"),
                      clearable: "",
                      maxlength: "10",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          m("div", L, [
            m("h3", O, s(e(n)("按钮内容")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("按钮名称")
                }, {
                  default: a(() => [
                    t(y, {
                      modelValue: e(l).editComponent.btnStyle.text,
                      "onUpdate:modelValue": o[5] || (o[5] = (d) => e(l).editComponent.btnStyle.text = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("请输入按钮名称"),
                      clearable: "",
                      maxlength: "4",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("link")
                }, {
                  default: a(() => [
                    t(w, {
                      modelValue: e(l).editComponent.btnStyle.link,
                      "onUpdate:modelValue": o[6] || (o[6] = (d) => e(l).editComponent.btnStyle.link = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          m("div", Q, [
            m("h3", X, s(e(n)("selectSource")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("商品标签")
                }, {
                  default: a(() => [
                    t(y, {
                      modelValue: e(l).editComponent.goodsStyle.labelText,
                      "onUpdate:modelValue": o[7] || (o[7] = (d) => e(l).editComponent.goodsStyle.labelText = d),
                      modelModifiers: { trim: !0 },
                      placeholder: e(n)("请输入名称"),
                      clearable: "",
                      maxlength: "4",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("选择商品")
                }, {
                  default: a(() => [
                    t(C, {
                      modelValue: e(l).editComponent.goodsStyle.source,
                      "onUpdate:modelValue": o[8] || (o[8] = (d) => e(l).editComponent.goodsStyle.source = d),
                      title: e(n)("选择商品")
                    }, {
                      default: a(() => [
                        t(p, { label: "all" }, {
                          default: a(() => [
                            u(s(e(n)("全部")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "custom" }, {
                          default: a(() => [
                            u(s(e(n)("手动选择")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "title"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e(l).editComponent.goodsStyle.source == "all" ? (_(), v(i, {
                  key: 0,
                  label: e(n)("goodsNum")
                }, {
                  default: a(() => [
                    t(f, {
                      class: "goods-list-slider",
                      "show-input": "",
                      modelValue: e(l).editComponent.goodsStyle.num,
                      "onUpdate:modelValue": o[9] || (o[9] = (d) => e(l).editComponent.goodsStyle.num = d),
                      min: 1,
                      max: "20",
                      size: "small"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : g("", !0),
                e(l).editComponent.goodsStyle.source == "custom" ? (_(), v(i, {
                  key: 1,
                  label: e(n)("customGoods")
                }, {
                  default: a(() => [
                    t(H, {
                      ref: "goodsSelectPopupRef",
                      modelValue: e(l).editComponent.goodsStyle.goodsIds,
                      "onUpdate:modelValue": o[10] || (o[10] = (d) => e(l).editComponent.goodsStyle.goodsIds = d),
                      min: 1,
                      max: 99
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : g("", !0)
              ]),
              _: 1
            })
          ]),
          m("div", Y, [
            m("h3", Z, s(e(n)("图片展示模式")), 1),
            t(r, {
              "label-width": "80px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("模式")
                }, {
                  default: a(() => [
                    t(C, {
                      modelValue: e(l).editComponent.mode,
                      "onUpdate:modelValue": o[11] || (o[11] = (d) => e(l).editComponent.mode = d)
                    }, {
                      default: a(() => [
                        t(p, { label: "aspectFill" }, {
                          default: a(() => [
                            u(s(e(n)("短边完整，长边裁剪")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { label: "aspectFit" }, {
                          default: a(() => [
                            u(s(e(n)("长边适配，等比缩放")), 1)
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
          ])
        ], 512), [
          [S, e(l).editTab == "content"]
        ]),
        x(m("div", ee, [
          e(l).editComponent.titleStyle.way == "text" ? (_(), U("div", le, [
            m("h3", te, s(e(n)("标题样式")), 1),
            t(r, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("textFontSize")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.titleStyle.fontSize,
                      "onUpdate:modelValue": o[12] || (o[12] = (d) => e(l).editComponent.titleStyle.fontSize = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 20
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("textFontWeight")
                }, {
                  default: a(() => [
                    t(C, {
                      modelValue: e(l).editComponent.titleStyle.fontWeight,
                      "onUpdate:modelValue": o[13] || (o[13] = (d) => e(l).editComponent.titleStyle.fontWeight = d)
                    }, {
                      default: a(() => [
                        t(p, { value: "normal" }, {
                          default: a(() => [
                            u(s(e(n)("fontWeightNormal")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { value: "bold" }, {
                          default: a(() => [
                            u(s(e(n)("fontWeightBold")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("textColor")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.titleStyle.textColor,
                      "onUpdate:modelValue": o[14] || (o[14] = (d) => e(l).editComponent.titleStyle.textColor = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ])) : g("", !0),
          m("div", oe, [
            m("h3", de, s(e(n)("副标题样式")), 1),
            t(r, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("textFontSize")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.subTitleStyle.fontSize,
                      "onUpdate:modelValue": o[15] || (o[15] = (d) => e(l).editComponent.subTitleStyle.fontSize = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 12,
                      max: 30
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("textColor")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.subTitleStyle.textColor,
                      "onUpdate:modelValue": o[16] || (o[16] = (d) => e(l).editComponent.subTitleStyle.textColor = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("背景色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.subTitleStyle.bgColor,
                      "onUpdate:modelValue": o[17] || (o[17] = (d) => e(l).editComponent.subTitleStyle.bgColor = d)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("标题圆角")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.subTitleStyle.rounded,
                      "onUpdate:modelValue": o[18] || (o[18] = (d) => e(l).editComponent.subTitleStyle.rounded = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 0,
                      max: 30
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })
          ]),
          m("div", ne, [
            m("h3", ae, s(e(n)("按钮样式")), 1),
            t(r, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("文字大小")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.btnStyle.fontSize,
                      "onUpdate:modelValue": o[19] || (o[19] = (d) => e(l).editComponent.btnStyle.fontSize = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 10,
                      max: 15
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("文字颜色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.btnStyle.textColor,
                      "onUpdate:modelValue": o[20] || (o[20] = (d) => e(l).editComponent.btnStyle.textColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("背景色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.btnStyle.startBgColor,
                      "onUpdate:modelValue": o[21] || (o[21] = (d) => e(l).editComponent.btnStyle.startBgColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"]),
                    t(c, {
                      name: "iconfont iconmap-connect",
                      size: "20px",
                      class: "block !text-gray-400 mx-[5px]"
                    }),
                    t(b, {
                      modelValue: e(l).editComponent.btnStyle.endBgColor,
                      "onUpdate:modelValue": o[22] || (o[22] = (d) => e(l).editComponent.btnStyle.endBgColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("渐变方式")
                }, {
                  default: a(() => [
                    t(C, {
                      modelValue: e(l).editComponent.btnStyle.gradientType,
                      "onUpdate:modelValue": o[23] || (o[23] = (d) => e(l).editComponent.btnStyle.gradientType = d)
                    }, {
                      default: a(() => [
                        t(p, { value: "linear" }, {
                          default: a(() => [
                            u(s(e(n)("线性渐变")), 1)
                          ]),
                          _: 1
                        }),
                        t(p, { value: "radial" }, {
                          default: a(() => [
                            u(s(e(n)("径向渐变")), 1)
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
          m("div", ie, [
            m("h3", me, s(e(n)("商品样式")), 1),
            t(r, {
              "label-width": "100px",
              class: "px-[10px]"
            }, {
              default: a(() => [
                t(i, {
                  label: e(n)("标签大小")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.goodsStyle.labelSize,
                      "onUpdate:modelValue": o[24] || (o[24] = (d) => e(l).editComponent.goodsStyle.labelSize = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      min: 10,
                      max: 15
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("标签文字色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.goodsStyle.labelColor,
                      "onUpdate:modelValue": o[25] || (o[25] = (d) => e(l).editComponent.goodsStyle.labelColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("标签背景色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.goodsStyle.labelBgColor,
                      "onUpdate:modelValue": o[26] || (o[26] = (d) => e(l).editComponent.goodsStyle.labelBgColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("背景色")
                }, {
                  default: a(() => [
                    t(b, {
                      modelValue: e(l).editComponent.goodsStyle.bgColor,
                      "onUpdate:modelValue": o[27] || (o[27] = (d) => e(l).editComponent.goodsStyle.bgColor = d),
                      "show-alpha": "",
                      predefine: e(l).predefineColors
                    }, null, 8, ["modelValue", "predefine"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("商品圆角")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.goodsStyle.rounded,
                      "onUpdate:modelValue": o[28] || (o[28] = (d) => e(l).editComponent.goodsStyle.rounded = d),
                      "show-input": "",
                      size: "small",
                      class: "ml-[10px] diy-nav-slider",
                      max: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                t(i, {
                  label: e(n)("图片圆角")
                }, {
                  default: a(() => [
                    t(f, {
                      modelValue: e(l).editComponent.goodsStyle.imgRounded,
                      "onUpdate:modelValue": o[29] || (o[29] = (d) => e(l).editComponent.goodsStyle.imgRounded = d),
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
          P(V.$slots, "style")
        ], 512), [
          [S, e(l).editTab == "style"]
        ])
      ], 64);
    };
  }
});
export {
  Re as default
};
