import { ElAlert as Y, ElTabPane as Z, ElTabs as ee, ElOption as le, ElSelect as te, ElFormItem as ae, ElTableColumn as ie, ElTable as ne, ElTag as oe, ElButton as re, ElForm as se, ElDialog as ue, ElLoadingDirective as de } from "element-plus/es";
import { defineComponent as ce, ref as h, reactive as _e, computed as pe, openBlock as m, createBlock as E, unref as i, withCtx as l, createElementVNode as s, createVNode as n, createTextVNode as R, toDisplayString as p, withDirectives as me, createElementBlock as D, Fragment as T, renderList as $, createCommentVNode as w } from "vue";
import { t as o } from "/admin/assets/shared/admin-lang.js";
import { a as ve, i as fe, p as he } from "./electronic_sheet-e3cd8985.js";
import { t as ge } from "./order-a6ced131.js";
import { loadCLodop as ye, getLodop as j } from "/admin/assets/shared/core-shared.js";
import { img as be } from "/admin/assets/shared/core-shared.js";
import { ElMessage as ke } from "element-plus";
const xe = /* @__PURE__ */ s("p", null, "注意事项：", -1), Pe = /* @__PURE__ */ s("p", null, "* 配送方式为物流配送的订单支持打印电子面单", -1), Ee = /* @__PURE__ */ s("p", null, "* 无需物流、虚拟发货不支持打印电子面单", -1), De = /* @__PURE__ */ s("p", null, "* 请对应物流公司选择面单模板", -1), Te = /* @__PURE__ */ s("p", null, "* 批量打印时，只能选择一种面单模板", -1), we = /* @__PURE__ */ s("p", null, "* 单个打印时，如果有多个包裹，会展示商品信息，支持多包裹打印电子面单", -1), Se = /* @__PURE__ */ s("p", null, "* 多包裹打印时，请不要重复选择面单模板", -1), Ve = { class: "truncate" }, Ne = { class: "truncate" }, Ce = { class: "flex" }, Ie = { class: "flex items-center w-[50px] h-[50px] mr-[10px]" }, Re = ["src"], Oe = { class: "flex flex-col flex-1" }, Le = { class: "multi-hidden text-[14px]" }, Fe = { class: "text-[12px] text-[#999]" }, Ae = { class: "my-[15px]" }, $e = { class: "dialog-footer" }, Je = /* @__PURE__ */ ce({
  __name: "electronic-sheet-print",
  emits: ["complete"],
  setup(Be, { expose: z, emit: H }) {
    const S = h(!1), V = h(!1), b = h(!1);
    ve().then((u) => {
      u.data && ye(u.data);
    });
    const A = h([]);
    fe({
      status: 1
    }).then((u) => {
      u.data && (A.value = u.data);
    });
    const B = {
      print_type: "multiple",
      order_id: 0,
      electronic_sheet_id: "",
      list: []
    }, r = _e({ ...B }), M = h(), W = pe(() => ({
      electronic_sheet_id: [
        { required: !0, message: o("electronicSheetTemplatePlaceholder"), trigger: "blur" }
      ]
    })), N = h("460px"), k = h([]), g = h(0), O = h(0), x = h([]), v = h({}), q = (u) => {
      g.value = parseInt(u), O.value = r.list[u].delivery_id;
    }, G = async (u = null) => {
      if (V.value = !0, Object.assign(r, B), x.value = [], k.value = [], v.value = {}, g.value = 0, O.value = 0, !!u)
        if (r.order_id = u.order_id, r.print_type = u.print_type, r.list = [], u.print_type == "single") {
          let t = [];
          u.order_goods.forEach((f) => {
            f.delivery_id && t.indexOf(f.delivery_id) == -1 && t.push(f.delivery_id);
          }), t.length > 1 ? ge({
            order_id: r.order_id
          }).then((f) => {
            if (f.data) {
              let C = f.data.filter((_) => {
                if (_.delivery_type == "express" && _.sub_delivery_type == "express")
                  return _;
              });
              k.value.push(...C), k.value.forEach((_) => {
                r.list.push({
                  delivery_id: _.id,
                  electronic_sheet_id: ""
                });
              });
            }
            V.value = !1, N.value = "800px";
          }) : (r.print_type = "multiple", N.value = "460px", V.value = !1);
        } else
          V.value = !1, N.value = "460px";
    }, J = async (u) => {
      if (V.value || !u)
        return;
      let t = j();
      t && await u.validate(async (f) => {
        if (f) {
          let C = !1;
          if (r.print_type == "single") {
            for (let _ = 0; _ < r.list.length; _++)
              if (r.list[_].electronic_sheet_id.length == 0) {
                ke({
                  type: "warning",
                  message: `请选择[包裹${_ + 1}]的面单模板`
                }), g.value = _, C = !0;
                break;
              }
          }
          if (C || b.value)
            return;
          b.value = !0, he({
            print_type: r.print_type,
            order_id: r.order_id,
            electronic_sheet_id: r.electronic_sheet_id,
            list: r.list
          }).then((_) => {
            if (x.value = [], v.value = {}, _.data) {
              let d = _.data, y = {}, P = [], c = !1;
              if (t.PRINT_INIT("打印电子面单"), r.print_type == "single") {
                for (let a = 0; a < d.length; a++)
                  if (v.value["delivery_id_" + d[a].delivery_id] || (v.value["delivery_id_" + d[a].delivery_id] = []), y["delivery_id_" + d[a].delivery_id] || (y["delivery_id_" + d[a].delivery_id] = []), d[a].success) {
                    let I = d[a].print_template;
                    t.ADD_PRINT_HTM(0, 0, "100%", "100%", I), t.NewPage(), c = !0, v.value["delivery_id_" + d[a].delivery_id].push(d[a]);
                  } else
                    y["delivery_id_" + d[a].delivery_id].push(d[a]);
                for (let a in v.value)
                  y[a] && y[a].length && v.value[a].push(...y[a]);
                Object.keys(v.value).length > 1 ? N.value = "800px" : Object.keys(v.value).length == 1 && (S.value = !1);
              } else {
                for (let a = 0; a < d.length; a++)
                  if (d[a].success) {
                    let I = d[a].print_template;
                    t.ADD_PRINT_HTM(0, 0, "100%", "100%", I), t.NewPage(), c = !0, x.value.push(d[a]);
                  } else
                    P.push(d[a]);
                P.length && x.value.push(...P), x.value.length > 1 ? N.value = "800px" : x.value.length == 1 && (S.value = !1);
              }
              c && t.PREVIEW(), b.value = !1;
            }
            H("complete");
          }).catch(() => {
            b.value = !1;
          });
        }
      });
    }, U = (u) => {
      let t = j();
      if (!t || b.value)
        return;
      b.value = !0;
      let f = u.print_template;
      t.PRINT_INIT("打印电子面单"), t.ADD_PRINT_HTM(0, 0, "100%", "100%", f), t.PREVIEW(), b.value = !1;
    };
    return z({
      showDialog: S,
      setFormData: G
    }), (u, t) => {
      const f = Y, C = Z, _ = ee, d = le, y = te, P = ae, c = ie, a = ne, I = oe, L = re, K = se, Q = ue, X = de;
      return m(), E(Q, {
        modelValue: S.value,
        "onUpdate:modelValue": t[5] || (t[5] = (e) => S.value = e),
        title: i(o)("electronicSheetPrintTitle"),
        width: N.value,
        class: "diy-dialog-wrap",
        "destroy-on-close": !0,
        "close-on-click-modal": !1
      }, {
        footer: l(() => [
          s("span", $e, [
            n(L, {
              onClick: t[3] || (t[3] = (e) => S.value = !1)
            }, {
              default: l(() => [
                R(p(i(o)("cancel")), 1)
              ]),
              _: 1
            }),
            n(L, {
              type: "primary",
              loading: b.value,
              onClick: t[4] || (t[4] = (e) => J(M.value))
            }, {
              default: l(() => [
                R(p(i(o)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: l(() => [
          n(f, {
            type: "warning",
            closable: !1,
            class: "!mb-[10px]"
          }, {
            default: l(() => [
              xe,
              Pe,
              Ee,
              De,
              Te,
              we,
              Se
            ]),
            _: 1
          }),
          me((m(), E(K, {
            model: r,
            ref_key: "formRef",
            ref: M,
            rules: i(W),
            class: "page-form es-form"
          }, {
            default: l(() => [
              r.print_type == "single" ? (m(), D(T, { key: 0 }, [
                k.value.length ? (m(), D(T, { key: 0 }, [
                  n(_, {
                    modelValue: g.value,
                    "onUpdate:modelValue": t[0] || (t[0] = (e) => g.value = e),
                    onTabChange: q
                  }, {
                    default: l(() => [
                      (m(!0), D(T, null, $(k.value, (e, F) => (m(), E(C, {
                        label: "包裹" + (F + 1),
                        name: F
                      }, null, 8, ["label", "name"]))), 256))
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  n(P, {
                    label: i(o)("electronicSheetTemplate")
                  }, {
                    default: l(() => [
                      n(y, {
                        modelValue: r.list[g.value].electronic_sheet_id,
                        "onUpdate:modelValue": t[1] || (t[1] = (e) => r.list[g.value].electronic_sheet_id = e),
                        placeholder: i(o)("electronicSheetTemplatePlaceholder"),
                        clearable: "",
                        class: "input-width"
                      }, {
                        default: l(() => [
                          (m(!0), D(T, null, $(A.value, (e) => (m(), E(d, {
                            key: e.id,
                            label: e.template_name,
                            value: e.id
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(P, {
                    label: i(o)("company")
                  }, {
                    default: l(() => [
                      s("div", Ve, p(k.value[g.value].company.company_name), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(P, {
                    label: i(o)("expressNumber")
                  }, {
                    default: l(() => [
                      s("div", Ne, p(k.value[g.value].express_number), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(a, {
                    data: k.value[g.value].order_goods,
                    size: "large"
                  }, {
                    default: l(() => [
                      n(c, {
                        label: i(o)("goodsName"),
                        align: "left",
                        width: "300"
                      }, {
                        default: l(({ row: e }) => [
                          s("div", Ce, [
                            s("div", Ie, [
                              s("img", {
                                class: "w-[50px] h-[50px]",
                                src: i(be)(e.goods_image_thumb_small)
                              }, null, 8, Re)
                            ]),
                            s("div", Oe, [
                              s("p", Le, p(e.goods_name), 1),
                              s("span", Fe, p(e.sku_name), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      n(c, {
                        prop: "price",
                        label: i(o)("price"),
                        "min-width": "50",
                        align: "left"
                      }, null, 8, ["label"]),
                      n(c, {
                        prop: "num",
                        label: i(o)("num"),
                        "min-width": "50",
                        align: "right"
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ], 64)) : w("", !0),
                v.value["delivery_id_" + O.value] && v.value["delivery_id_" + O.value].length ? (m(), D(T, { key: 1 }, [
                  s("h3", Ae, p(i(o)("electronicSheetPrintResult")), 1),
                  n(a, {
                    data: v.value["delivery_id_" + O.value],
                    size: "large",
                    class: "table-top"
                  }, {
                    default: l(() => [
                      n(c, {
                        label: i(o)("deliveryPackageNo"),
                        "min-width": "80"
                      }, {
                        default: l(({ row: e }) => [
                          s("div", null, p(e.delivery_id), 1)
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      n(c, {
                        label: i(o)("printStatus"),
                        "min-width": "80"
                      }, {
                        default: l(({ row: e }) => [
                          n(I, {
                            class: "cursor-pointer",
                            type: e.success ? "success" : "danger"
                          }, {
                            default: l(() => [
                              R(p(e.success ? "成功" : "失败"), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      n(c, {
                        label: i(o)("printResultCode"),
                        "min-width": "80"
                      }, {
                        default: l(({ row: e }) => [
                          s("div", null, p(e.result_code), 1)
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      n(c, {
                        label: i(o)("printRemark"),
                        "min-width": "200"
                      }, {
                        default: l(({ row: e }) => [
                          s("div", null, p(e.reason), 1)
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      n(c, {
                        label: i(o)("operation"),
                        fixed: "right",
                        align: "right",
                        "min-width": "80"
                      }, {
                        default: l(({ row: e }) => [
                          e.success ? (m(), E(L, {
                            key: 0,
                            type: "primary",
                            link: "",
                            onClick: (F) => U(e)
                          }, {
                            default: l(() => [
                              R(p(i(o)("electronicSheetPrintOperation")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : w("", !0)
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ], 64)) : w("", !0)
              ], 64)) : w("", !0),
              r.print_type == "multiple" ? (m(), D(T, { key: 1 }, [
                n(P, {
                  label: i(o)("electronicSheetTemplate"),
                  prop: "electronic_sheet_id"
                }, {
                  default: l(() => [
                    n(y, {
                      modelValue: r.electronic_sheet_id,
                      "onUpdate:modelValue": t[2] || (t[2] = (e) => r.electronic_sheet_id = e),
                      placeholder: i(o)("electronicSheetTemplatePlaceholder"),
                      clearable: "",
                      class: "input-width"
                    }, {
                      default: l(() => [
                        (m(!0), D(T, null, $(A.value, (e) => (m(), E(d, {
                          key: e.id,
                          label: e.template_name,
                          value: e.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                x.value.length > 1 ? (m(), E(a, {
                  key: 0,
                  data: x.value,
                  size: "large",
                  class: "table-top"
                }, {
                  default: l(() => [
                    n(c, {
                      prop: "order_no",
                      label: i(o)("orderNo"),
                      "min-width": "150"
                    }, null, 8, ["label"]),
                    n(c, {
                      label: i(o)("printStatus"),
                      "min-width": "80"
                    }, {
                      default: l(({ row: e }) => [
                        n(I, {
                          class: "cursor-pointer",
                          type: e.success ? "success" : "danger"
                        }, {
                          default: l(() => [
                            R(p(e.success ? "成功" : "失败"), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(c, {
                      label: i(o)("printResultCode"),
                      "min-width": "80"
                    }, {
                      default: l(({ row: e }) => [
                        s("div", null, p(e.result_code), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(c, {
                      label: i(o)("printRemark"),
                      "min-width": "160"
                    }, {
                      default: l(({ row: e }) => [
                        s("div", null, p(e.reason), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    n(c, {
                      label: i(o)("operation"),
                      fixed: "right",
                      align: "right",
                      "min-width": "80"
                    }, {
                      default: l(({ row: e }) => [
                        e.success ? (m(), E(L, {
                          key: 0,
                          type: "primary",
                          link: "",
                          onClick: (F) => U(e)
                        }, {
                          default: l(() => [
                            R(p(i(o)("electronicSheetPrintOperation")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : w("", !0)
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])) : w("", !0)
              ], 64)) : w("", !0)
            ]),
            _: 1
          }, 8, ["model", "rules"])), [
            [X, V.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "width"]);
    };
  }
});
export {
  Je as _
};
