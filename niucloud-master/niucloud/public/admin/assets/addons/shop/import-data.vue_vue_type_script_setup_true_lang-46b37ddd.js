import { ElInput as O, ElUpload as L, ElRadio as M, ElRadioGroup as G, ElFormItem as P, ElForm as K, ElButton as z, ElDialog as H } from "element-plus/es";
import { defineComponent as k, computed as D, openBlock as F, createBlock as $, mergeProps as Q, unref as e, withCtx as l, renderSlot as Y, createVNode as n, isRef as q, createTextVNode as v, toDisplayString as m, ref as E, createElementVNode as V, withDirectives as w, vShow as S } from "vue";
import { t as a } from "/admin/assets/shared/admin-lang.js";
import { getToken as W } from "/admin/assets/shared/core-shared.js";
import { ElMessage as U } from "element-plus";
import { storage as j } from "/admin/assets/shared/core-shared.js";
import { config as g } from "/admin/assets/shared/core-shared.js";
import { p as J } from "./order-a6ced131.js";
const X = /* @__PURE__ */ k({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    api: {
      type: String,
      default: "sys/document/document"
    },
    accept: {
      type: String,
      default: ".doc,.docx,.xml,.txt,.pem,.zip,.rar,.7z,.crt,.key,.xls,.xlsx"
    }
  },
  emits: ["update:modelValue"],
  setup(b, { emit: x }) {
    const _ = b, r = D({
      get() {
        return _.modelValue;
      },
      set(d) {
        x("update:modelValue", d);
      }
    }), o = D(() => {
      const d = {};
      d[g.VITE_REQUEST_HEADER_TOKEN_KEY] = W(), d[g.VITE_REQUEST_HEADER_SITEID_KEY] = j.get("siteId") || 0;
      const p = g.VITE_APP_BASE_URL || "/adminapi/";
      return {
        action: `${p.endsWith("/") ? p : `${p}/`}${_.api}`,
        showFileList: !1,
        accept: _.accept,
        headers: d,
        onSuccess: (i, f) => {
          if (i.code != null && i.code != 1) {
            U({ message: i.msg, type: "error" });
            return;
          }
          r.value = i.data.url, U({ message: a("upload.success"), type: "success" });
        }
      };
    });
    return (d, p) => {
      const u = O, i = L;
      return F(), $(i, Q(e(o), { class: "w-full upload-file" }), {
        default: l(() => [
          Y(d.$slots, "default", {}, () => [
            n(u, {
              modelValue: e(r),
              "onUpdate:modelValue": p[0] || (p[0] = (f) => q(r) ? r.value = f : null),
              class: "w-full",
              readonly: !0,
              title: e(r)
            }, {
              append: l(() => [
                v(m(e(a)("upload.root")), 1)
              ]),
              _: 1
            }, 8, ["modelValue", "title"])
          ])
        ]),
        _: 3
      }, 16);
    };
  }
});
const Z = { class: "dialog-footer" }, pe = /* @__PURE__ */ k({
  __name: "import-data",
  emits: ["complete"],
  setup(b, { expose: x, emit: _ }) {
    const r = E(!1), o = E({
      type: "order",
      path: ""
    }), d = () => {
      o.value.type = "order", o.value.path = "", u.value = !1;
    }, p = () => {
      d(), r.value = !0;
    }, u = E(!1), i = async (c) => {
      u.value || !c || await c.validate(async (t) => {
        if (t) {
          u.value = !0;
          const y = { data: o.value };
          J(y).then((T) => {
            _("complete"), r.value = !1;
          }).catch(() => {
            u.value = !1;
          });
        }
      });
    }, f = E(), h = () => {
      let c = `${g.VITE_IMG_DOMAIN || location.origin}/addon/shop/batch/batch_delivery_order.xls`;
      o.value.type == "order_goods" && (c = `${g.VITE_IMG_DOMAIN || location.origin}/addon/shop/batch/batch_delivery_order_goods.xls`), window.open(c);
    }, C = D(() => ({
      path: [{ required: !0, message: a("uploadFilePlaceholder"), trigger: "blur" }]
    }));
    return x({
      open: p
    }), (c, t) => {
      const y = M, T = G, I = P, A = X, B = K, R = z, N = H;
      return F(), $(N, {
        modelValue: r.value,
        "onUpdate:modelValue": t[4] || (t[4] = (s) => r.value = s),
        title: e(a)("importData"),
        width: "420px"
      }, {
        footer: l(() => [
          V("span", Z, [
            n(R, {
              onClick: t[2] || (t[2] = (s) => r.value = !1)
            }, {
              default: l(() => [
                v(m(e(a)("cancel")), 1)
              ]),
              _: 1
            }),
            n(R, {
              type: "primary",
              loading: u.value,
              onClick: t[3] || (t[3] = (s) => i(f.value))
            }, {
              default: l(() => [
                v(m(e(a)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: l(() => [
          V("div", null, [
            n(B, {
              model: o.value,
              ref_key: "importDataFormRef",
              ref: f,
              rules: e(C),
              "label-width": "80px",
              "label-position": "left"
            }, {
              default: l(() => [
                n(I, {
                  label: e(a)("templateType"),
                  prop: "type"
                }, {
                  default: l(() => [
                    n(T, {
                      modelValue: o.value.type,
                      "onUpdate:modelValue": t[0] || (t[0] = (s) => o.value.type = s)
                    }, {
                      default: l(() => [
                        n(y, { label: "order" }, {
                          default: l(() => [
                            v(m(e(a)("fullOrderDelivery")), 1)
                          ]),
                          _: 1
                        }),
                        n(y, { label: "order_goods" }, {
                          default: l(() => [
                            v(m(e(a)("openOrderDelivery")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    w(V("div", {
                      onClick: h,
                      class: "form-tip mt-[5px] cursor-pointer !text-[var(--el-color-primary)]"
                    }, m(e(a)("orderTemplate")), 513), [
                      [S, o.value.type == "order"]
                    ]),
                    w(V("div", {
                      onClick: h,
                      class: "form-tip mt-[5px] !text-[var(--el-color-primary)] cursor-pointer"
                    }, m(e(a)("orderGoodsTemplate")), 513), [
                      [S, o.value.type == "order_goods"]
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n(I, {
                  label: e(a)("uploadFile"),
                  prop: "path"
                }, {
                  default: l(() => [
                    n(A, {
                      modelValue: o.value.path,
                      "onUpdate:modelValue": t[1] || (t[1] = (s) => o.value.path = s),
                      api: "sys/document/excel"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  pe as _
};
