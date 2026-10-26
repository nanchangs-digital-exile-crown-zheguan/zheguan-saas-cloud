import { ElInput as J, ElPopover as q, ElFormItem as H, ElSwitch as P, ElForm as A } from "element-plus/es";
import { defineComponent as G, ref as p, onMounted as K, reactive as Q, openBlock as i, createElementBlock as u, Fragment as D, withDirectives as F, createElementVNode as o, renderSlot as V, createVNode as d, withModifiers as W, withCtx as _, unref as e, renderList as T, normalizeClass as X, createCommentVNode as b, toDisplayString as y, createBlock as U, vShow as E, pushScopeId as Z, popScopeId as ee } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { u as te } from "./diy-642f6d04.js";
import { _ as oe } from "./_plugin-vue_export-helper-dad06003.js";
import "pinia";

import "./cloneDeep-70d647ec.js";
import "./isArrayLike-62604998.js";
const m = (C) => (Z("data-v-6943b994"), C = C(), ee(), C), ne = { class: "content-wrap" }, le = { class: "flex items-center justify-between" }, se = { class: "flex" }, ae = { class: "flex" }, re = ["onClick"], ie = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", { class: "cursor-pointer ml-[5px] nc-iconfont nc-icon-xiaV6xx" }, null, -1)), de = {
  key: 0,
  class: "flex"
}, ce = { class: "text-[#999] mr-3" }, pe = ["onClick"], ue = {
  key: 1,
  class: "flex"
}, me = ["onClick"], _e = {
  key: 2,
  class: "flex"
}, ve = /* @__PURE__ */ m(() => /* @__PURE__ */ o("div", { class: "text-[#999] mr-3" }, "精确到详细地址", -1)), fe = ["onClick"], he = { class: "text-primary cursor-pointer mr-[10px]" }, be = ["onClick"], ye = { class: "py-1 text-[var(--el-text-color-primary]" }, xe = { class: "flex items-center" }, Ce = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "默认显示", -1)), ge = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "项", -1)), Ve = { class: "flex items-center my-1" }, we = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "最少填写", -1)), Se = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "项", -1)), $e = { class: "flex items-center" }, ke = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "最多填写", -1)), Ie = /* @__PURE__ */ m(() => /* @__PURE__ */ o("span", null, "项", -1)), Le = /* @__PURE__ */ m(() => /* @__PURE__ */ o("div", null, null, -1)), De = { class: "style-wrap" }, Fe = /* @__PURE__ */ G({
  __name: "edit-form-table",
  setup(C, { expose: B }) {
    const n = te();
    n.editComponent.ignore = ["componentBgUrl"], n.editComponent.verify = (l) => ({ code: !0, message: "" });
    const M = p([
      { label: "单选项", value: "radio" },
      { label: "文本", value: "text" },
      { label: "数字", value: "number" },
      { label: "手机号", value: "mobile" },
      { label: "地址", value: "address" },
      { label: "身份证", value: "idcard" },
      { label: "性别", value: "gender" },
      { label: "日期", value: "date" }
    ]), N = (l) => {
      switch (l) {
        case "radio":
          return "icona-duihaopc30";
        case "text":
          return "icona-danhangwenben-1pc30";
        case "number":
          return "icona-shuzipc30-1";
        case "mobile":
          return "icona-shoujipc30";
        case "address":
          return "iconbiaotipc";
        case "idcard":
          return "icona-shenfenzhengpc30";
        case "gender":
          return "el-icon-s-opportunity";
        case "date":
          return "icona-riqipc30";
        default:
          return "";
      }
    }, O = p(), w = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5), Y = (l) => {
      const s = {
        id: w(),
        name: l.label,
        type: l.value,
        // 列类型
        value: ""
        // 默认值（可选）
      };
      l.value === "radio" && (s.options = [
        { id: w(), label: "选项1" },
        { id: w(), label: "选项2" }
      ]), l.value === "date" && (s.dateFormat = "YYYY年M月D日"), l.value === "address" && (s.addressFormat = "province/city/district/address"), n.editComponent.columnList.push(s);
    }, z = (l) => {
      n.editComponent.columnList.splice(l, 1);
    };
    K(() => {
      console.log(n.editComponent.columnList);
    });
    const R = p({}), S = p({}), j = p(0), $ = p(!1);
    p(), p(""), p(!1);
    const g = Q({
      format1: "",
      format2: "",
      format3: "",
      format4: ""
    }), k = (l, s) => {
      if (j.value = s, R.value = l, S.value = JSON.parse(JSON.stringify(l)), l.type == "radio")
        S.value.options || (S.value.options = []), $.value = !0;
      else if (l.type == "date") {
        const r = new Date(), v = r.getFullYear(), c = String(r.getMonth() + 1).padStart(2, "0"), f = String(r.getDate()).padStart(2, "0"), I = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
        g.format1 = `${v}年${c}月${f}日`, g.format2 = `${v}-${c}-${f}`, g.format3 = `${v}/${c}/${f}`, g.format4 = `${v}-${c}-${f} ${I}:${t}`, $.value = !0;
      } else
        l.type == "address" && ($.value = !0);
    };
    return B({}), (l, s) => {
      const r = J, v = q, c = H, f = P, I = A;
      return i(), u(D, null, [
        F(o("div", ne, [
          V(l.$slots, "field", {}, void 0, !0),
          d(I, {
            "label-width": "100px",
            class: "px-[10px]",
            onSubmit: s[5] || (s[5] = W(() => {
            }, ["prevent"]))
          }, {
            default: _(() => [
              d(c, {
                label: e(a)("列设置")
              }, {
                default: _(() => [
                  o("div", {
                    ref_key: "imageBoxRef",
                    ref: O
                  }, [
                    (i(!0), u(D, null, T(e(n).editComponent.columnList, (t, h) => {
                      var L;
                      return i(), u("div", {
                        key: t.id,
                        class: "border-b-[1px] border-[#e0e0e0] py-1"
                      }, [
                        o("div", le, [
                          o("div", se, [
                            o("span", {
                              class: X(["iconfont", "ml-[5px]", "cursor-pointer", N(t.type)])
                            }, null, 2),
                            d(r, {
                              modelValue: t.name,
                              "onUpdate:modelValue": (x) => t.name = x,
                              class: "input-style",
                              "input-style": { boxShadow: "none" },
                              placeholder: e(a)("请输入列名")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ]),
                          o("div", ae, [
                            e(n).editComponent.columnList.length > 1 ? (i(), u("span", {
                              key: 0,
                              onClick: (x) => z(h),
                              class: "cursor-pointer ml-[5px] nc-iconfont nc-icon-shanchu-yuangaizhiV6xx"
                            }, null, 8, re)) : b("", !0),
                            ie
                          ])
                        ]),
                        t.type == "radio" ? (i(), u("div", de, [
                          o("div", ce, y(((L = t.options) == null ? void 0 : L.length) || 0) + "个选项", 1),
                          o("span", {
                            class: "text-primary cursor-pointer mr-[10px]",
                            onClick: (x) => k(t, h)
                          }, y(e(a)("编辑")), 9, pe)
                        ])) : b("", !0),
                        t.type == "date" ? (i(), u("div", ue, [
                          o("span", {
                            class: "text-primary cursor-pointer mr-[10px]",
                            onClick: (x) => k(t, h)
                          }, y(e(a)("设置日期格式")), 9, me)
                        ])) : b("", !0),
                        t.type == "address" ? (i(), u("div", _e, [
                          ve,
                          o("span", {
                            class: "text-primary cursor-pointer mr-[10px]",
                            onClick: (x) => k(t, h)
                          }, y(e(a)("设置")), 9, fe)
                        ])) : b("", !0)
                      ]);
                    }), 128))
                  ], 512),
                  d(v, {
                    placement: "bottom",
                    width: 50,
                    trigger: "hover"
                  }, {
                    reference: _(() => [
                      o("span", he, y(e(a)("添加")), 1)
                    ]),
                    default: _(() => [
                      (i(!0), u(D, null, T(M.value, (t, h) => (i(), u("div", {
                        key: h,
                        onClick: (L) => Y(t),
                        class: "cursor-pointer hover:bg-[#d1e1ff] rounded text-center"
                      }, [
                        o("div", ye, y(t.label), 1)
                      ], 8, be))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"]),
              d(c, {
                label: e(a)("是否自增")
              }, {
                default: _(() => [
                  d(f, {
                    modelValue: e(n).editComponent.autoIncrementControl,
                    "onUpdate:modelValue": s[0] || (s[0] = (t) => e(n).editComponent.autoIncrementControl = t)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              e(n).editComponent.autoIncrementControl ? (i(), U(c, {
                key: 0,
                label: e(a)("填写限制")
              }, {
                default: _(() => [
                  o("div", xe, [
                    Ce,
                    d(r, {
                      modelValue: e(n).editComponent.writeLimit.default,
                      "onUpdate:modelValue": s[1] || (s[1] = (t) => e(n).editComponent.writeLimit.default = t),
                      class: "input-short",
                      placeholder: e(a)("")
                    }, null, 8, ["modelValue", "placeholder"]),
                    ge
                  ]),
                  o("div", Ve, [
                    we,
                    d(r, {
                      modelValue: e(n).editComponent.writeLimit.min,
                      "onUpdate:modelValue": s[2] || (s[2] = (t) => e(n).editComponent.writeLimit.min = t),
                      class: "input-short",
                      placeholder: e(a)("")
                    }, null, 8, ["modelValue", "placeholder"]),
                    Se
                  ]),
                  o("div", $e, [
                    ke,
                    d(r, {
                      modelValue: e(n).editComponent.writeLimit.max,
                      "onUpdate:modelValue": s[3] || (s[3] = (t) => e(n).editComponent.writeLimit.max = t),
                      class: "input-short",
                      placeholder: e(a)("")
                    }, null, 8, ["modelValue", "placeholder"]),
                    Ie
                  ])
                ]),
                _: 1
              }, 8, ["label"])) : b("", !0),
              e(n).editComponent.autoIncrementControl ? (i(), U(c, {
                key: 1,
                label: e(a)("按钮名称")
              }, {
                default: _(() => [
                  d(r, {
                    modelValue: e(n).editComponent.btnText,
                    "onUpdate:modelValue": s[4] || (s[4] = (t) => e(n).editComponent.btnText = t),
                    placeholder: e(a)("请输入按钮名称")
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])) : b("", !0)
            ]),
            _: 1
          }),
          Le,
          V(l.$slots, "other", {}, void 0, !0)
        ], 512), [
          [E, e(n).editTab == "content"]
        ]),
        F(o("div", De, [
          V(l.$slots, "style-field", {}, void 0, !0),
          V(l.$slots, "style", {}, void 0, !0)
        ], 512), [
          [E, e(n).editTab == "style"]
        ])
      ], 64);
    };
  }
});
const Re = /* @__PURE__ */ oe(Fe, [["__scopeId", "data-v-6943b994"]]);
export {
  Re as default
};
