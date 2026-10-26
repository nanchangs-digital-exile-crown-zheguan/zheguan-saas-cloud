import { defineComponent as v, ref as b, reactive as g, resolveComponent as c, openBlock as k, createBlock as C, withCtx as s, createVNode as p, createTextVNode as i, createElementVNode as o, toDisplayString as _ } from "vue";
import { ElMessage as h } from "element-plus";
const V = { class: "mb-4" }, w = /* @__PURE__ */ o("div", { class: "text-sm text-gray-500 mb-2" }, "Access Key", -1), N = { class: "flex items-center gap-2 bg-gray-900 text-gray-100 rounded px-3 py-2" }, $ = { class: "flex-1 font-mono text-base break-all" }, B = { class: "mb-2" }, E = /* @__PURE__ */ o("div", { class: "text-sm text-gray-500 mb-2" }, "Secret Key", -1), K = { class: "flex items-center gap-2 bg-gray-900 text-gray-100 rounded px-3 py-2" }, S = { class: "flex-1 font-mono text-base break-all" }, M = /* @__PURE__ */ v({
  __name: "secret-dialog",
  setup(T, { expose: m }) {
    const a = b(!1), t = g({
      app_key: "",
      app_secret: ""
    }), y = (l, e) => {
      t.app_key = l, t.app_secret = e, a.value = !0;
    }, d = (l) => {
      var e;
      (e = navigator.clipboard) == null || e.writeText(l).then(() => {
        h.success("已复制到剪贴板");
      });
    }, f = () => {
      t.app_key = "", t.app_secret = "";
    };
    return m({ show: y }), (l, e) => {
      const u = c("el-alert"), r = c("el-button"), x = c("el-dialog");
      return k(), C(x, {
        modelValue: a.value,
        "onUpdate:modelValue": e[3] || (e[3] = (n) => a.value = n),
        title: "开放账号密钥",
        width: "560px",
        "close-on-click-modal": !1,
        onClosed: f
      }, {
        footer: s(() => [
          p(r, {
            type: "primary",
            onClick: e[2] || (e[2] = (n) => a.value = !1)
          }, {
            default: s(() => [
              i("知道了")
            ]),
            _: 1
          })
        ]),
        default: s(() => [
          p(u, {
            type: "info",
            closable: !1,
            "show-icon": "",
            class: "mb-4",
            title: "密钥已生成，可在账号列表中点击眼睛图标随时查看；建议复制后妥善保存"
          }),
          o("div", V, [
            w,
            o("div", N, [
              o("span", $, _(t.app_key), 1),
              p(r, {
                link: "",
                type: "primary",
                onClick: e[0] || (e[0] = (n) => d(t.app_key))
              }, {
                default: s(() => [
                  i("复制")
                ]),
                _: 1
              })
            ])
          ]),
          o("div", B, [
            E,
            o("div", K, [
              o("span", S, _(t.app_secret), 1),
              p(r, {
                link: "",
                type: "primary",
                onClick: e[1] || (e[1] = (n) => d(t.app_secret))
              }, {
                default: s(() => [
                  i("复制")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  M as default
};
