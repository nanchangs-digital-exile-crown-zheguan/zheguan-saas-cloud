import { defineComponent as w, ref as _, resolveComponent as s, openBlock as C, createBlock as $, withCtx as l, createVNode as o, createTextVNode as r, createElementVNode as m, toDisplayString as u } from "vue";
import { ElMessage as K } from "element-plus";
const V = { class: "font-mono text-xs break-all" }, A = { class: "font-mono text-xs break-all" }, T = /* @__PURE__ */ w({
  __name: "batch-secret-dialog",
  setup(S, { expose: f }) {
    const c = _(!1), n = _([]), b = (e) => {
      n.value = e || [], c.value = !0;
    }, d = (e) => {
      var t;
      e && ((t = navigator.clipboard) == null || t.writeText(e).then(() => K.success("已复制到剪贴板")));
    }, y = (e) => {
      d(`${e.name}
Access Key: ${e.app_key}
Secret Key: ${e.app_secret}`);
    }, h = () => {
      const e = (n.value || []).map((t) => `${t.name}
Access Key: ${t.app_key}
Secret Key: ${t.app_secret}`).join(`

`);
      d(e);
    }, v = () => {
      n.value = [];
    };
    return f({ show: b }), (e, t) => {
      const k = s("el-alert"), i = s("el-table-column"), p = s("el-button"), g = s("el-table"), x = s("el-dialog");
      return C(), $(x, {
        modelValue: c.value,
        "onUpdate:modelValue": t[1] || (t[1] = (a) => c.value = a),
        title: "批量重置密钥结果",
        width: "820px",
        "close-on-click-modal": !1,
        onClosed: v
      }, {
        footer: l(() => [
          o(p, {
            disabled: !n.value.length,
            onClick: h
          }, {
            default: l(() => [
              r("复制全部")
            ]),
            _: 1
          }, 8, ["disabled"]),
          o(p, {
            type: "primary",
            onClick: t[0] || (t[0] = (a) => c.value = !1)
          }, {
            default: l(() => [
              r("知道了")
            ]),
            _: 1
          })
        ]),
        default: l(() => [
          o(k, {
            type: "warning",
            closable: !1,
            "show-icon": "",
            class: "mb-4",
            title: "以下为新生成的密钥，请立即复制并妥善保存；关闭后仍可在账号列表中逐个点击眼睛查看"
          }),
          o(g, {
            data: n.value,
            size: "small",
            border: "",
            "max-height": "380"
          }, {
            default: l(() => [
              o(i, {
                prop: "name",
                label: "账号名称",
                "min-width": "140",
                "show-overflow-tooltip": ""
              }),
              o(i, {
                label: "Access Key",
                "min-width": "220"
              }, {
                default: l(({ row: a }) => [
                  m("span", V, u(a.app_key), 1)
                ]),
                _: 1
              }),
              o(i, {
                label: "Secret Key",
                "min-width": "240"
              }, {
                default: l(({ row: a }) => [
                  m("span", A, u(a.app_secret), 1)
                ]),
                _: 1
              }),
              o(i, {
                label: "操作",
                width: "90",
                align: "right"
              }, {
                default: l(({ row: a }) => [
                  o(p, {
                    link: "",
                    type: "primary",
                    onClick: (N) => y(a)
                  }, {
                    default: l(() => [
                      r("复制")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  T as default
};
