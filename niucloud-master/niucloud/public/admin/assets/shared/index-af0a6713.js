import { defineComponent as y, reactive as w, ref as f, resolveComponent as u, openBlock as S, createBlock as F, unref as n, withCtx as a, createElementVNode as b, createVNode as t, createTextVNode as h, toDisplayString as p } from "vue";
import { j, t as r, au as B, av as R, Z as $ } from "./core-shared-86a0da16.js";
import "@element-plus/icons-vue";
import "axios";
import "element-plus";
import "vue-i18n";
import "pinia";
import "vue-router";
const D = { class: "flex justify-end" }, H = /* @__PURE__ */ y({
  __name: "index",
  setup(M, { expose: U }) {
    const _ = j(), l = w({}), c = f(), m = f(!0), i = f(!1), v = () => {
      B().then((d) => {
        m.value = !1;
        const e = d.data;
        l.head_img = e.head_img, l.real_name = e.real_name, l.username = e.username;
      });
    };
    v();
    const x = () => {
      i.value = !0, v();
    }, I = (d) => {
      m.value || !d || d.validate((e) => {
        if (e)
          m.value = !0, R(l).then((g) => {
            m.value = !1, i.value = !1;
            let s = $(_.userInfo);
            s.head_img = l.head_img, _.setUserInfo(s);
          }).catch(() => {
            m.value = !1;
          });
        else
          return !1;
      });
    };
    return U({
      open: x
    }), (d, e) => {
      const g = u("upload-image"), s = u("el-form-item"), C = u("el-input"), N = u("el-form"), V = u("el-button"), k = u("el-dialog");
      return S(), F(k, {
        modelValue: i.value,
        "onUpdate:modelValue": e[4] || (e[4] = (o) => i.value = o),
        title: n(r)("accountSettings"),
        width: "500"
      }, {
        footer: a(() => [
          b("div", D, [
            t(V, {
              type: "primary",
              onClick: e[2] || (e[2] = (o) => I(c.value)),
              loading: m.value
            }, {
              default: a(() => [
                h(p(n(r)("save")), 1)
              ]),
              _: 1
            }, 8, ["loading"]),
            t(V, {
              onClick: e[3] || (e[3] = (o) => i.value = !1)
            }, {
              default: a(() => [
                h(p(n(r)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: a(() => [
          t(N, {
            model: l,
            "label-width": "90px",
            ref_key: "formRef",
            ref: c,
            class: "page-form"
          }, {
            default: a(() => [
              t(s, {
                label: n(r)("headImg")
              }, {
                default: a(() => [
                  t(g, {
                    modelValue: l.head_img,
                    "onUpdate:modelValue": e[0] || (e[0] = (o) => l.head_img = o),
                    limit: 1,
                    imageFit: "cover"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              t(s, {
                label: n(r)("userName")
              }, {
                default: a(() => [
                  b("span", null, p(l.username), 1)
                ]),
                _: 1
              }, 8, ["label"]),
              t(s, {
                label: n(r)("realName")
              }, {
                default: a(() => [
                  t(C, {
                    modelValue: l.real_name,
                    "onUpdate:modelValue": e[1] || (e[1] = (o) => l.real_name = o),
                    modelModifiers: { trim: !0 },
                    placeholder: n(r)("realNamePlaceholder"),
                    clearable: "",
                    class: "input-width"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
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
  H as default
};
