import { defineComponent as q, ref as p, reactive as E, resolveComponent as n, openBlock as x, createBlock as V, withCtx as i, createVNode as o, createTextVNode as k, createElementVNode as u, createCommentVNode as P } from "vue";
import { dM as j, dN as B, dO as I } from "./core-shared-86a0da16.js";
import M from "./domain-auth-4f8b6c3d.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const z = { class: "mb-5" }, D = /* @__PURE__ */ u("div", { class: "font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100" }, "基础信息", -1), F = { class: "mb-5" }, X = /* @__PURE__ */ u("div", { class: "font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100" }, "安全策略", -1), $ = /* @__PURE__ */ u("div", { class: "font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100" }, "能力授权", -1), ee = /* @__PURE__ */ q({
  __name: "app-form-drawer",
  emits: ["complete"],
  setup(G, { expose: h, emit: g }) {
    const s = p(!1), _ = p(!1), d = p(!1), v = p(), c = p(), t = E({
      id: 0,
      name: "",
      status: 1,
      auth_domains: [],
      ip_white: "",
      expire_time: 0,
      token_expire: 7200,
      remark: ""
    }), y = {
      name: [{ required: !0, message: "请输入开放账号名称", trigger: "blur" }]
    }, w = () => {
      j().then((l) => {
        var e;
        (e = c.value) == null || e.setTree(l.data || []);
      });
    }, U = (l) => {
      s.value = !0, w(), l && (d.value = !!l.expire_time, Object.assign(t, {
        id: l.id,
        name: l.name,
        status: l.status,
        auth_domains: [...l.auth_domains || []],
        ip_white: l.ip_white,
        expire_time: l.expire_time,
        token_expire: l.token_expire,
        remark: l.remark
      }));
    }, A = () => {
      var l;
      (l = v.value) == null || l.validate((e) => {
        if (!e)
          return;
        _.value = !0;
        const r = { ...t, auth_domains: [...t.auth_domains], expire_time: d.value ? t.expire_time : 0 };
        (t.id ? B(t.id, r) : I(r)).then((f) => {
          _.value = !1, s.value = !1, g("complete", f.data);
        }).catch(() => {
          _.value = !1;
        });
      });
    }, C = () => {
      var l;
      (l = v.value) == null || l.resetFields(), Object.assign(t, {
        id: 0,
        name: "",
        status: 1,
        auth_domains: [],
        ip_white: "",
        expire_time: 0,
        token_expire: 7200,
        remark: ""
      }), d.value = !1;
    };
    return h({ show: U }), (l, e) => {
      const r = n("el-input"), m = n("el-form-item"), f = n("el-switch"), O = n("el-date-picker"), N = n("el-input-number"), R = n("el-form"), b = n("el-button"), T = n("el-drawer");
      return x(), V(T, {
        modelValue: s.value,
        "onUpdate:modelValue": e[9] || (e[9] = (a) => s.value = a),
        title: t.id ? "编辑开放账号" : "创建开放账号",
        size: "520px",
        onClosed: C
      }, {
        footer: i(() => [
          o(b, {
            onClick: e[8] || (e[8] = (a) => s.value = !1)
          }, {
            default: i(() => [
              k("取消")
            ]),
            _: 1
          }),
          o(b, {
            type: "primary",
            loading: _.value,
            onClick: A
          }, {
            default: i(() => [
              k("保存")
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        default: i(() => [
          o(R, {
            ref_key: "formRef",
            ref: v,
            model: t,
            rules: y,
            "label-position": "top"
          }, {
            default: i(() => [
              u("div", z, [
                D,
                o(m, {
                  label: "账号名称",
                  prop: "name"
                }, {
                  default: i(() => [
                    o(r, {
                      modelValue: t.name,
                      "onUpdate:modelValue": e[0] || (e[0] = (a) => t.name = a),
                      modelModifiers: { trim: !0 },
                      placeholder: "例如：ERP对接-上海店",
                      maxlength: "100",
                      "show-word-limit": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                o(m, { label: "有效期" }, {
                  default: i(() => [
                    o(f, {
                      modelValue: d.value,
                      "onUpdate:modelValue": e[1] || (e[1] = (a) => d.value = a),
                      "active-text": "设置过期时间"
                    }, null, 8, ["modelValue"]),
                    d.value ? (x(), V(O, {
                      key: 0,
                      modelValue: t.expire_time,
                      "onUpdate:modelValue": e[2] || (e[2] = (a) => t.expire_time = a),
                      type: "datetime",
                      "value-format": "X",
                      placeholder: "选择过期时间",
                      class: "w-full mt-2"
                    }, null, 8, ["modelValue"])) : P("", !0)
                  ]),
                  _: 1
                }),
                o(m, { label: "备注" }, {
                  default: i(() => [
                    o(r, {
                      modelValue: t.remark,
                      "onUpdate:modelValue": e[3] || (e[3] = (a) => t.remark = a),
                      type: "textarea",
                      rows: 2,
                      maxlength: "255",
                      placeholder: "用途说明，便于后续排查问题"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              u("div", F, [
                X,
                o(m, { label: "IP 白名单" }, {
                  default: i(() => [
                    o(r, {
                      modelValue: t.ip_white,
                      "onUpdate:modelValue": e[4] || (e[4] = (a) => t.ip_white = a),
                      type: "textarea",
                      rows: 2,
                      placeholder: "每行一个或逗号分隔，留空表示不限制来源 IP"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                o(m, { label: "令牌有效期（秒）" }, {
                  default: i(() => [
                    o(N, {
                      modelValue: t.token_expire,
                      "onUpdate:modelValue": e[5] || (e[5] = (a) => t.token_expire = a),
                      min: 0,
                      step: 600,
                      class: "w-full"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                o(m, { label: "状态" }, {
                  default: i(() => [
                    o(f, {
                      modelValue: t.status,
                      "onUpdate:modelValue": e[6] || (e[6] = (a) => t.status = a),
                      "active-value": 1,
                      "inactive-value": 0,
                      "active-text": "启用",
                      "inactive-text": "禁用"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              u("div", null, [
                $,
                o(M, {
                  ref_key: "domainAuthRef",
                  ref: c,
                  modelValue: t.auth_domains,
                  "onUpdate:modelValue": e[7] || (e[7] = (a) => t.auth_domains = a)
                }, null, 8, ["modelValue"])
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  ee as default
};
