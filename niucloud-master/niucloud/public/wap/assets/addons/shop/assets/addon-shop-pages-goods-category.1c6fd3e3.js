/* __addonChunkWindiInjected:addon-shop-pages-goods-category_1c6fd3e3 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-goods-category_1c6fd3e3",".relative{\n  position: relative;\n}");
/* __addonChunkCssInjected:8dd09de1 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("8dd09de1",".addon-wrap-8dd09de1 .category .detail .mescroll-body{padding-bottom:calc(50px + constant(safe-area-inset-bottom))!important;padding-bottom:calc(50px + env(safe-area-inset-bottom))!important}.addon-wrap-8dd09de1 .category .cart .mescroll-body{padding-bottom:calc(3.125rem + 50px + constant(safe-area-inset-bottom))!important;padding-bottom:calc(3.125rem + 50px + env(safe-area-inset-bottom))!important}.addon-wrap-8dd09de1 .mescroll-upwarp{box-sizing:border-box;padding-left:5.6875rem}.addon-wrap-8dd09de1 .tab-bar-placeholder,.addon-wrap-8dd09de1 .u-tabbar__placeholder{display:none!important}.addon-wrap-8dd09de1 uni-button:after{border:0!important}.addon-wrap-8dd09de1 .part .mescroll-empty{width:16.9375rem;height:16.9375rem;margin-top:0;margin-left:0;margin-right:0;padding-top:1.5625rem}");
import { l as setNavigationBarTitle, i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_4 } from "./tabbar.5b67b6e8.js";
import { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createCommentVNode } from "/wap/assets/shared/vue.js";
import { o as onLoad, d as onShow, r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import categoryTemplateTwoOne from "./addon-shop-pages-goods-components-category-template-two-one.8b2b302e.js";
import categoryTemplateOneOne from "./addon-shop-pages-goods-components-category-template-one-one.3b0ab2ad.js";
import categoryTemplateTwoTwo from "./addon-shop-pages-goods-components-category-template-two-two.8a31518a.js";
import { a as getGoodsCategoryConfig } from "./goods.3180989e.js";
import { t as topTabar } from "./topTabbar.64b07bae.js";
import { a as useSystemStore } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./u-icon.ceb3960f.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import "./mixin.62d4081a.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-badge.c0af0a5e.js";
import "./u-tabbar.b646ecf0.js";
import "./u-safe-bottom.32b62caf.js";
import "./input.18765527.js";
import "./scroll-view.29370e9b.js";
import "./u-image.e50bbaf1.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import "./loading-page.vue_vue_type_script_setup_true_lang.0e84ab2d.js";
import "./u-loading-icon.8e9029d5.js";
import "./mescroll-empty.3c956fab.js";
import "./button.fdf0e29d.js";
import "./mescroll-body.c6b16bb3.js";
import "./useMescroll.fedc684a.js";
import "./addon-shop-pages-goods-components-add-cart-popup.84598982.js";
import "./u-number-box.bbd2bdce.js";
import "./u-popup.37f81450.js";
import "./cart.2fc95a47.js";
import "/wap/assets/shared/pinia.js";
import "./bind-mobile.8d23c7c5.js";
import "./u-form.5eb516df.js";
import "./u-line.46235f11.js";
import "./u-input.854f14a8.js";
import "./u-modal.93bf424d.js";
import "./u-checkbox-group.67ae69b1.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "category",
  setup(__props) {
    useSystemStore();
    const config = ref({});
    const categoryId = ref(0);
    const topTabarObj = topTabar();
    let topTabbarData = ref(topTabarObj.setTopTabbarParam({ title: "商品分类", topStatusBar: { textColor: "#333" } }));
    const getGoodsCategoryConfigFn = () => {
      getGoodsCategoryConfig().then((res) => {
        config.value = res.data;
        topTabbarData.value.title = config.value.page_title;
        setNavigationBarTitle({
          title: config.value.page_title
        });
      });
    };
    onLoad((options) => {
      categoryId.value = options.category_id || 0;
      getGoodsCategoryConfigFn();
    });
    onShow(() => {
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_tabbar = resolveEasycom(resolveDynamicComponent("tabbar"), __easycom_4);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "relative" }, {
            default: withCtx(() => [
              config.value.level === 1 && config.value.template === "style-1" ? (openBlock(), createBlock(categoryTemplateOneOne, {
                key: 0,
                class: "category",
                categoryId: categoryId.value,
                config: config.value
              }, null, 8, ["categoryId", "config"])) : createCommentVNode("", true),
              config.value.level === 2 && config.value.template === "style-1" ? (openBlock(), createBlock(categoryTemplateTwoOne, {
                key: 1,
                categoryId: categoryId.value,
                config: config.value
              }, null, 8, ["categoryId", "config"])) : createCommentVNode("", true),
              config.value.level === 2 && config.value.template === "style-2" ? (openBlock(), createBlock(categoryTemplateTwoTwo, {
                key: 2,
                class: "category",
                categoryId: categoryId.value,
                config: config.value
              }, null, 8, ["categoryId", "config"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_tabbar, { addon: "shop" })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const category_vue_vue_type_style_index_0_scoped_8dd09de1_lang = "";
const category_vue_vue_type_style_index_1_scoped_8dd09de1_lang = "";
const category = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8dd09de1"]]);
export {
  category as default
};
