/* __addonChunkWindiInjected:upload-img_vue_vue_type_script_setup_true_lang_6ff96bc0 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("upload-img_vue_vue_type_script_setup_true_lang_6ff96bc0",".bg-\\[\\#373737\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 55, 55, var(--tw-bg-opacity));\n}.border-\\[\\#ddd\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(221, 221, 221, var(--tw-border-opacity));\n}.rounded-\\[10rpx\\]{\n  border-radius: 0.3125rem;\n}.rounded-\\[var\\(--goods-rounded-big\\)\\]{\n  border-radius: var(--goods-rounded-big);\n}.rounded-bl-\\[40rpx\\]{\n  border-bottom-left-radius: 1.25rem;\n}.border-dashed{\n  border-style: dashed;\n}.border-\\[2rpx\\]{\n  border-width: 0.0625rem;\n}.flex{\n  display: flex;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.justify-end{\n  justify-content: flex-end;\n}.justify-center{\n  justify-content: center;\n}.h-\\[28rpx\\]{\n  height: 0.875rem;\n}.h-\\[140rpx\\]{\n  height: 4.375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.\\!text-\\[20rpx\\]{\n  font-size: 0.625rem !important;\n}.text-\\[50rpx\\]{\n  font-size: 1.5625rem;\n}.mt-\\[12rpx\\]{\n  margin-top: 0.375rem;\n}.mr-\\[2rpx\\]{\n  margin-right: 0.0625rem;\n}.mt-\\[2rpx\\]{\n  margin-top: 0.0625rem;\n}.overflow-hidden{\n  overflow: hidden;\n}.absolute{\n  position: absolute;\n}.top-0{\n  top: 0px;\n}.right-\\[0\\]{\n  right: 0;\n}.text-center{\n  text-align: center;\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.w-\\[140rpx\\]{\n  width: 4.375rem;\n}.w-\\[28rpx\\]{\n  width: 0.875rem;\n}");
import { s as showToast, f as previewImage, a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { defineComponent, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, unref, normalizeClass, createVNode, withModifiers, withDirectives, createTextVNode, toDisplayString, vShow } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_5 } from "./u-image.e50bbaf1.js";
import "./text.99ce2b32.js";
import { _ as __easycom_3$1 } from "./u-upload.08bd186e.js";
import { i as img, h as uploadImage } from "./common.f536f441.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload-img",
  props: {
    modelValue: {
      type: String || Array
    },
    maxCount: {
      type: Number,
      default: 9
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const prop = __props;
    const value = computed({
      get() {
        return prop.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    const maxCount = computed(() => {
      return prop.maxCount;
    });
    const afterRead = (event) => {
      if (prop.multiple) {
        event.file.forEach((file) => {
          upload({ file });
        });
      } else {
        upload(event);
      }
    };
    const upload = (event) => {
      var _a;
      if (((_a = value.value) == null ? void 0 : _a.length) >= maxCount.value) {
        showToast({ title: `最多允许上传${maxCount.value}张图片`, icon: "none" });
        return false;
      }
      uploadImage({
        filePath: event.file.url,
        name: "file"
      }).then((res) => {
        var _a2;
        if (((_a2 = value.value) == null ? void 0 : _a2.length) < maxCount.value)
          value.value.push(res.data.url);
      }).catch(() => {
      });
    };
    const deleteImg = (index) => {
      value.value.splice(index, 1);
    };
    const imgListPreview = (item) => {
      if (item === "")
        return false;
      const urlList = [];
      urlList.push(img(item));
      previewImage({
        indicator: "number",
        loop: true,
        urls: urlList
      });
    };
    return (_ctx, _cache) => {
      const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
      const _component_u__image = resolveEasycom(resolveDynamicComponent("u--image"), __easycom_5);
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_u_upload = resolveEasycom(resolveDynamicComponent("u-upload"), __easycom_3$1);
      return openBlock(), createBlock(_component_v_uni_view, { class: "flex flex-wrap" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(value), (item, index) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              class: normalizeClass(["mb-[18rpx] relative", { "mr-[18rpx]": (index + 1) % 4 != 0 }])
            }, {
              default: withCtx(() => [
                createVNode(_component_u__image, {
                  class: "rounded-[10rpx] overflow-hidden",
                  width: "140rpx",
                  height: "140rpx",
                  src: unref(img)(item || ""),
                  model: "aspectFill",
                  onClick: ($event) => imgListPreview(item)
                }, {
                  error: withCtx(() => [
                    createVNode(_component_u_icon, {
                      name: "photo",
                      color: "#999",
                      size: "50"
                    })
                  ]),
                  _: 2
                }, 1032, ["src", "onClick"]),
                createVNode(_component_v_uni_view, {
                  class: "absolute top-0 right-[0] bg-[#373737] flex justify-end h-[28rpx] w-[28rpx] rounded-bl-[40rpx]",
                  onClick: withModifiers(($event) => deleteImg(index), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-guanbiV6xx !text-[20rpx] mt-[2rpx] mr-[2rpx] text-[#fff]" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 256)),
          withDirectives(createVNode(_component_v_uni_view, { class: "w-[140rpx] h-[140rpx]" }, {
            default: withCtx(() => [
              createVNode(_component_u_upload, {
                onAfterRead: afterRead,
                maxCount: unref(maxCount),
                multiple: prop.multiple
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "flex items-center justify-center w-[140rpx] h-[140rpx] border-[2rpx] border-dashed border-[#ddd] text-center text-[var(--text-color-light9)] rounded-[var(--goods-rounded-big)]" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "nc-iconfont nc-icon-xiangjiV6xx text-[50rpx]" }),
                          createVNode(_component_v_uni_view, { class: "text-[24rpx] mt-[12rpx]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(value).length) + "/" + toDisplayString(unref(maxCount)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["maxCount", "multiple"])
            ]),
            _: 1
          }, 512), [
            [vShow, unref(value).length < unref(maxCount)]
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _
};
