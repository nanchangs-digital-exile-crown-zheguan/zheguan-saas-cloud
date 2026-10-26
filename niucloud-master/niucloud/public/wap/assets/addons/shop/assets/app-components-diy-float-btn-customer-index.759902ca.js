/* __addonChunkCssInjected:f48ffb2d */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("f48ffb2d",".addon-wrap-f48ffb2d .float-btn-customer{position:fixed;z-index:1000}.addon-wrap-f48ffb2d .float-btn-customer.middleRight{top:50%;right:0;left:auto;bottom:auto}.addon-wrap-f48ffb2d .float-btn-customer.is-decorate{outline:.125rem dashed var(--primary-color);outline-offset:.25rem}.addon-wrap-f48ffb2d .z-1000{z-index:1000}.addon-wrap-f48ffb2d .fc-btn{position:relative;display:flex;align-items:center;justify-content:center;margin:.875rem}.addon-wrap-f48ffb2d .fc-ripple{position:absolute;left:50%;top:50%;border-radius:50%;border:.25rem solid var(--primary-color);box-sizing:border-box;transform:translate(-50%,-50%) scale(1);opacity:0;pointer-events:none;animation:fc-pulse-f48ffb2d 2s ease-out infinite}.addon-wrap-f48ffb2d .fc-ripple--delay{animation-delay:1s}.addon-wrap-f48ffb2d .fc-avatar{position:relative;z-index:1;overflow:hidden;border-radius:50%;border:.125rem solid var(--primary-color);box-sizing:border-box;background:#fff;box-shadow:0 .1875rem .5625rem rgba(0,0,0,.1)}.addon-wrap-f48ffb2d .fc-avatar__img{display:block;width:100%;height:100%}.addon-wrap-f48ffb2d .fc-label{position:absolute;left:0;right:0;bottom:0;height:20%;display:flex;align-items:center;justify-content:center;background:var(--primary-color);color:#fff;font-size:.4375rem;line-height:1;font-weight:500}");
import { i as index$g, b as index$q } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { defineComponent, computed, openBlock, createBlock, normalizeClass, unref, normalizeStyle, withCtx, createElementBlock, Fragment, renderList, createVNode, createTextVNode } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, i as img } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index"],
  setup(__props) {
    const props = __props;
    const diyStore = useDiyStore();
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props.index];
      }
      return props.component;
    });
    const list = computed(() => {
      var _a;
      return ((_a = diyComponent.value) == null ? void 0 : _a.list) || [];
    });
    const btnSizeCss = computed(() => {
      var _a;
      const size = (((_a = diyComponent.value) == null ? void 0 : _a.imageSize) || 40) * 2;
      return `width:${size}rpx;height:${size}rpx;`;
    });
    const wrapCss = computed(() => {
      var _a, _b;
      const offset = Number((_a = diyComponent.value) == null ? void 0 : _a.offset) || 0;
      const lateral = Number((_b = diyComponent.value) == null ? void 0 : _b.lateralOffset) || 0;
      let transform = `translateY(-50%)`;
      if (offset)
        transform += ` translateY(${-offset * 2}rpx)`;
      if (lateral)
        transform += ` translateX(${-lateral * 2}rpx)`;
      return `transform:${transform};`;
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: normalizeClass(["float-btn-customer middleRight", [unref(diyStore).mode == "decorate" ? "is-decorate" : ""]]),
        style: normalizeStyle(unref(wrapCss))
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index2) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              key: index2,
              class: normalizeClass(["fc-btn", { "mb-[20rpx]": unref(list).length != index2 + 1 }]),
              style: normalizeStyle(unref(btnSizeCss)),
              onClick: ($event) => unref(diyStore).toRedirect(item.link)
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, {
                  class: "fc-ripple",
                  style: normalizeStyle(unref(btnSizeCss))
                }, null, 8, ["style"]),
                createVNode(_component_v_uni_view, {
                  class: "fc-ripple fc-ripple--delay",
                  style: normalizeStyle(unref(btnSizeCss))
                }, null, 8, ["style"]),
                createVNode(_component_v_uni_view, {
                  class: "fc-avatar",
                  style: normalizeStyle(unref(btnSizeCss))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "fc-avatar__img",
                      src: item.imageUrl ? unref(img)(item.imageUrl) : unref(img)("static/resource/images/diy/kefu_default.png"),
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "fc-label" }, {
                      default: withCtx(() => [
                        createTextVNode("客服")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["style"])
              ]),
              _: 2
            }, 1032, ["class", "style", "onClick"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class", "style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f48ffb2d_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f48ffb2d"]]);
export {
  index as default
};
