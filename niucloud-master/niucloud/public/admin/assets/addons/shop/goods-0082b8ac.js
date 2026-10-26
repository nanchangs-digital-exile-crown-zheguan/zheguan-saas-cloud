import { ElInput as B, ElImage as N, ElButton as I, ElEmpty as K } from "element-plus/es";
import { defineComponent as D, inject as G, ref as i, onMounted as H, openBlock as l, createElementBlock as d, createElementVNode as t, createVNode as v, withKeys as L, Fragment as P, renderList as $, unref as k, toDisplayString as u, withCtx as j, createTextVNode as z, createBlock as A, createCommentVNode as b } from "vue";
import { ElMessage as F } from "element-plus";
import { img as C } from "/admin/assets/shared/core-shared.js";
import { g as T } from "./goods-d2a56d58.js";
import { _ as U } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
const q = { class: "panel-goods" }, J = { class: "panel-goods-search" }, O = { class: "search-box" }, Q = { class: "goods-info" }, R = { class: "goods-name" }, W = { class: "goods-bottom" }, X = { class: "goods-price" }, Y = { class: "goods-stock" }, Z = { class: "goods-sale" }, ee = { class: "goods-action" }, oe = {
  key: 1,
  class: "loading-tip"
}, se = {
  key: 2,
  class: "loading-tip"
}, te = /* @__PURE__ */ D({
  __name: "goods",
  setup(ae) {
    const h = G("shopCustomerChatSender", null), x = (e, o) => {
      var a;
      return h ? h(e, o) : ((a = window.parent) == null || a.postMessage({ type: "shop_customer_send_message", msg_type: e, content: o }, "*"), !0);
    }, E = (e) => {
      var a;
      x("goods", {
        addon: "shop",
        goods_id: e.goods_id,
        name: e.goods_name,
        image: e.goods_cover || e.goods_cover_thumb_small || "",
        price: String(e.price ?? ((a = e.goodsSku) == null ? void 0 : a.price) ?? ""),
        page: `/addon/shop/pages/goods/detail?goods_id=${e.goods_id}`
      }) && F.success("商品已发送");
    }, n = i([]), c = i(!1), r = i(!1), _ = i(1), f = 10, p = i(""), m = () => {
      c.value || r.value || (c.value = !0, T({
        goods_name: p.value,
        page: _.value,
        limit: f
      }).then((e) => {
        const o = e.data.data || [];
        n.value = n.value.concat(o), _.value >= (e.data.last_page || 1) || o.length < f ? r.value = !0 : _.value++;
      }).finally(() => {
        c.value = !1;
      }));
    }, g = () => {
      n.value = [], _.value = 1, r.value = !1, m();
    }, S = (e) => {
      const o = e.target;
      o.scrollHeight - o.scrollTop - o.clientHeight < 30 && m();
    };
    return H(() => {
      m();
    }), (e, o) => {
      const a = B, V = N, w = I, M = K;
      return l(), d("div", q, [
        t("div", J, [
          t("div", O, [
            v(a, {
              modelValue: p.value,
              "onUpdate:modelValue": o[0] || (o[0] = (s) => p.value = s),
              class: "search-input",
              clearable: "",
              type: "text",
              placeholder: "搜索商品名称",
              onKeyup: L(g, ["enter"]),
              onClear: g
            }, null, 8, ["modelValue", "onKeyup"]),
            t("button", {
              type: "button",
              class: "search-btn",
              onClick: g
            }, "搜索")
          ])
        ]),
        t("div", {
          class: "panel-goods-list",
          onScroll: S
        }, [
          (l(!0), d(P, null, $(n.value, (s) => {
            var y;
            return l(), d("div", {
              key: s.goods_id,
              class: "goods-card"
            }, [
              v(V, {
                class: "goods-img",
                src: k(C)(s.goods_cover_thumb_small || s.goods_cover),
                fit: "cover"
              }, null, 8, ["src"]),
              t("div", Q, [
                t("div", R, u(s.goods_name), 1),
                t("div", W, [
                  t("span", X, "￥" + u(s.price ?? ((y = s.goodsSku) == null ? void 0 : y.price)), 1),
                  t("span", Y, "库存：" + u(s.stock), 1)
                ]),
                t("div", Z, "销量：" + u(s.sale_num || 0), 1)
              ]),
              t("div", ee, [
                v(w, {
                  type: "primary",
                  link: "",
                  size: "small",
                  onClick: (ne) => E(s)
                }, {
                  default: j(() => [
                    z("推送")
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]);
          }), 128)),
          !n.value.length && !c.value ? (l(), A(M, {
            key: 0,
            image: k(C)("static/resource/images/empty_default.png"),
            description: "暂无商品"
          }, null, 8, ["image"])) : b("", !0),
          c.value ? (l(), d("div", oe, "加载中...")) : r.value && n.value.length ? (l(), d("div", se, "没有更多了")) : b("", !0)
        ], 32)
      ]);
    };
  }
});
const pe = /* @__PURE__ */ U(te, [["__scopeId", "data-v-f23ddc96"]]);
export {
  pe as default
};
