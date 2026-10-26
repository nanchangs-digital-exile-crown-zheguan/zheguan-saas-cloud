/* __addonChunkCssInjected:a33a03e2 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("a33a03e2",".addon-wrap-a33a03e2 .u-empty,.addon-wrap-a33a03e2 .u-empty__wrap,.addon-wrap-a33a03e2 .u-tabs,.addon-wrap-a33a03e2 .u-tabs__wrapper,.addon-wrap-a33a03e2 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-a33a03e2 .u-tabs__wrapper__scroll-view,.addon-wrap-a33a03e2 .u-tabs__wrapper__nav,.addon-wrap-a33a03e2 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-a33a03e2 .u-upload{display:flex;flex-direction:column;flex:1}.addon-wrap-a33a03e2 .u-upload__wrap{display:flex;flex-direction:row;flex-wrap:wrap;flex:1}.addon-wrap-a33a03e2 .u-upload__wrap__preview{border-radius:2px;margin:0 8px 8px 0;position:relative;overflow:hidden;display:flex;flex-direction:row}.addon-wrap-a33a03e2 .u-upload__wrap__preview__image{width:80px;height:80px}.addon-wrap-a33a03e2 .u-upload__wrap__preview__other{width:80px;height:80px;background-color:#f2f2f2;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.addon-wrap-a33a03e2 .u-upload__wrap__preview__other__text{font-size:11px;color:#909193;margin-top:2px}.addon-wrap-a33a03e2 .u-upload__deletable{position:absolute;top:0;right:0;background-color:#373737;height:14px;width:14px;display:flex;flex-direction:row;border-bottom-left-radius:100px;align-items:center;justify-content:center;z-index:3}.addon-wrap-a33a03e2 .u-upload__deletable__icon{position:absolute;transform:scale(.7);top:0px;right:0px;top:1px;right:0}.addon-wrap-a33a03e2 .u-upload__success{position:absolute;bottom:0;right:0;display:flex;flex-direction:row;border-style:solid;border-top-color:transparent;border-left-color:transparent;border-bottom-color:#5ac725;border-right-color:#5ac725;border-width:9px;align-items:center;justify-content:center}.addon-wrap-a33a03e2 .u-upload__success__icon{position:absolute;transform:scale(.7);bottom:-10px;right:-10px}.addon-wrap-a33a03e2 .u-upload__status{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:center;justify-content:center}.addon-wrap-a33a03e2 .u-upload__status__icon{position:relative;z-index:1}.addon-wrap-a33a03e2 .u-upload__status__message{font-size:12px;color:#fff;margin-top:5px}.addon-wrap-a33a03e2 .u-upload__button{display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:80px;background-color:#f4f5f7;border-radius:2px;margin:0 8px 8px 0;box-sizing:border-box}.addon-wrap-a33a03e2 .u-upload__button__text{font-size:11px;color:#909193;margin-top:2px}.addon-wrap-a33a03e2 .u-upload__button--hover{background-color:#e6e7e9}.addon-wrap-a33a03e2 .u-upload__button--disabled{opacity:.5}");
import { Z as chooseFile$1, _ as chooseVideo, a0 as chooseImage, f as previewImage, b as index$q, a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import { _ as __easycom_3$1 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, withModifiers, renderSlot, normalizeClass } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { b as addUnit, a as addStyle, t as test, j as toast } from "./route.c60967f7.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function pickExclude(obj, keys) {
  if (!["[object Object]", "[object File]"].includes(Object.prototype.toString.call(obj))) {
    return {};
  }
  return Object.keys(obj).reduce((prev, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
function formatImage(res) {
  return res.tempFiles.map((item) => ({
    ...pickExclude(item, ["path"]),
    type: "image",
    url: item.path,
    thumb: item.path,
    size: item.size,
    name: item.name
  }));
}
function formatVideo(res) {
  return [
    {
      ...pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"]),
      type: "video",
      url: res.tempFilePath,
      thumb: res.thumbTempFilePath,
      size: res.size,
      name: res.name
    }
  ];
}
function formatFile(res) {
  return res.tempFiles.map((item) => ({
    ...pickExclude(item, ["path"]),
    url: item.path,
    size: item.size,
    name: item.name,
    type: item.type
  }));
}
function chooseFile({
  accept,
  multiple,
  capture,
  compressed,
  maxDuration,
  sizeType,
  camera,
  maxCount
}) {
  return new Promise((resolve, reject) => {
    switch (accept) {
      case "image":
        chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType,
          success: (res) => resolve(formatImage(res)),
          fail: reject
        });
        break;
      case "video":
        chooseVideo({
          sourceType: capture,
          compressed,
          maxDuration,
          camera,
          success: (res) => resolve(formatVideo(res)),
          fail: reject
        });
        break;
      case "file":
        chooseFile$1({
          count: multiple ? maxCount : 1,
          type: accept,
          success: (res) => resolve(formatFile(res)),
          fail: reject
        });
        break;
      default:
        chooseFile$1({
          count: multiple ? maxCount : 1,
          type: "all",
          success: (res) => resolve(formatFile(res)),
          fail: reject
        });
    }
  });
}
const mixinUp = {
  watch: {
    // 监听accept的变化，判断是否符合个平台要求
    // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
    accept: {
      immediate: true,
      handler(val) {
      }
    }
  }
};
const props = {
  props: {
    // 接受的文件类型, 可选值为all media image file video
    accept: {
      type: String,
      default: () => defProps.upload.accept
    },
    // 	图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
    capture: {
      type: [String, Array],
      default: () => defProps.upload.capture
    },
    // 当accept为video时生效，是否压缩视频，默认为true
    compressed: {
      type: Boolean,
      default: () => defProps.upload.compressed
    },
    // 当accept为video时生效，可选值为back或front
    camera: {
      type: String,
      default: () => defProps.upload.camera
    },
    // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
    maxDuration: {
      type: Number,
      default: () => defProps.upload.maxDuration
    },
    // 上传区域的图标，只能内置图标
    uploadIcon: {
      type: String,
      default: () => defProps.upload.uploadIcon
    },
    // 上传区域的图标的颜色，默认
    uploadIconColor: {
      type: String,
      default: () => defProps.upload.uploadIconColor
    },
    // 是否开启文件读取前事件
    useBeforeRead: {
      type: Boolean,
      default: () => defProps.upload.useBeforeRead
    },
    // 读取后的处理函数
    afterRead: {
      type: Function,
      default: null
    },
    // 读取前的处理函数
    beforeRead: {
      type: Function,
      default: null
    },
    // 是否显示组件自带的图片预览功能
    previewFullImage: {
      type: Boolean,
      default: () => defProps.upload.previewFullImage
    },
    // 最大上传数量
    maxCount: {
      type: [String, Number],
      default: () => defProps.upload.maxCount
    },
    // 是否启用
    disabled: {
      type: Boolean,
      default: () => defProps.upload.disabled
    },
    // 预览上传的图片时的裁剪模式，和image组件mode属性一致
    imageMode: {
      type: String,
      default: () => defProps.upload.imageMode
    },
    // 标识符，可以在回调函数的第二项参数中获取
    name: {
      type: String,
      default: () => defProps.upload.name
    },
    // 所选的图片的尺寸, 可选值为original compressed
    sizeType: {
      type: Array,
      default: () => defProps.upload.sizeType
    },
    // 是否开启图片多选，部分安卓机型不支持
    multiple: {
      type: Boolean,
      default: () => defProps.upload.multiple
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: () => defProps.upload.deletable
    },
    // 文件大小限制，单位为byte
    maxSize: {
      type: [String, Number],
      default: () => defProps.upload.maxSize
    },
    // 显示已上传的文件列表
    fileList: {
      type: Array,
      default: () => defProps.upload.fileList
    },
    // 上传区域的提示文字
    uploadText: {
      type: String,
      default: () => defProps.upload.uploadText
    },
    // 内部预览图片区域和选择图片按钮的区域宽度
    width: {
      type: [String, Number],
      default: () => defProps.upload.width
    },
    // 内部预览图片区域和选择图片按钮的区域高度
    height: {
      type: [String, Number],
      default: () => defProps.upload.height
    },
    // 是否在上传完成后展示预览图
    previewImage: {
      type: Boolean,
      default: () => defProps.upload.previewImage
    }
  }
};
const uUpload_vue_vue_type_style_index_0_scoped_a33a03e2_lang = "";
const _sfc_main = {
  name: "u-upload",
  mixins: [mpMixin, mixin, mixinUp, props],
  data() {
    return {
      lists: [],
      isInCount: true
    };
  },
  watch: {
    // 监听文件列表的变化，重新整理内部数据
    fileList: {
      handler() {
        this.formatFileList();
      },
      immediate: true,
      deep: true
    }
  },
  emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview"],
  methods: {
    addUnit,
    addStyle,
    formatFileList() {
      const {
        fileList = [],
        maxCount
      } = this;
      const lists = fileList.map(
        (item) => Object.assign(Object.assign({}, item), {
          // 如果item.url为本地选择的blob文件的话，无法判断其为video还是image，此处优先通过accept做判断处理
          isImage: this.accept === "image" || test.image(item.url || item.thumb),
          isVideo: this.accept === "video" || test.video(item.url || item.thumb),
          deletable: typeof item.deletable === "boolean" ? item.deletable : this.deletable
        })
      );
      this.lists = lists;
      this.isInCount = lists.length < maxCount;
    },
    chooseFile() {
      const {
        maxCount,
        multiple,
        lists,
        disabled
      } = this;
      if (disabled)
        return;
      let capture;
      try {
        capture = test.array(this.capture) ? this.capture : this.capture.split(",");
      } catch (e) {
        capture = [];
      }
      chooseFile(
        Object.assign({
          accept: this.accept,
          multiple: this.multiple,
          capture,
          compressed: this.compressed,
          maxDuration: this.maxDuration,
          sizeType: this.sizeType,
          camera: this.camera
        }, {
          maxCount: maxCount - lists.length
        })
      ).then((res) => {
        this.onBeforeRead(multiple ? res : res[0]);
      }).catch((error) => {
        this.$emit("error", error);
      });
    },
    // 文件读取之前
    onBeforeRead(file) {
      const {
        beforeRead,
        useBeforeRead
      } = this;
      let res = true;
      if (test.func(beforeRead)) {
        res = beforeRead(file, this.getDetail());
      }
      if (useBeforeRead) {
        res = new Promise((resolve, reject) => {
          this.$emit(
            "beforeRead",
            Object.assign(Object.assign({
              file
            }, this.getDetail()), {
              callback: (ok) => {
                ok ? resolve() : reject();
              }
            })
          );
        });
      }
      if (!res) {
        return;
      }
      if (test.promise(res)) {
        res.then((data) => this.onAfterRead(data || file));
      } else {
        this.onAfterRead(file);
      }
    },
    getDetail(index) {
      return {
        name: this.name,
        index: index == null ? this.fileList.length : index
      };
    },
    onAfterRead(file) {
      const {
        maxSize,
        afterRead
      } = this;
      const oversize = Array.isArray(file) ? file.some((item) => item.size > maxSize) : file.size > maxSize;
      if (oversize) {
        this.$emit("oversize", Object.assign({
          file
        }, this.getDetail()));
        return;
      }
      if (typeof afterRead === "function") {
        afterRead(file, this.getDetail());
      }
      this.$emit("afterRead", Object.assign({
        file
      }, this.getDetail()));
    },
    deleteItem(index) {
      this.$emit(
        "delete",
        Object.assign(Object.assign({}, this.getDetail(index)), {
          file: this.fileList[index]
        })
      );
    },
    // 预览图片
    onPreviewImage(item) {
      if (!item.isImage || !this.previewFullImage)
        return;
      previewImage({
        // 先filter找出为图片的item，再返回filter结果中的图片url
        urls: this.lists.filter((item2) => this.accept === "image" || test.image(item2.url || item2.thumb)).map((item2) => item2.url || item2.thumb),
        current: item.url || item.thumb,
        fail() {
          toast("预览图片失败");
        }
      });
    },
    onPreviewVideo(event) {
      if (!this.data.previewFullImage)
        return;
      event.currentTarget.dataset;
      this.data;
    },
    onClickPreview(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const item = this.data.lists[index];
      if (!this.data.previewFullImage)
        return;
      switch (item.type) {
        case "video":
          this.onPreviewVideo(event);
          break;
      }
      this.$emit(
        "clickPreview",
        Object.assign(Object.assign({}, item), this.getDetail(index))
      );
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3$1);
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-upload",
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-upload__wrap" }, {
        default: withCtx(() => [
          _ctx.previewImage ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.lists, (item, index) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              class: "u-upload__wrap__preview",
              key: index
            }, {
              default: withCtx(() => [
                item.isImage || item.type && item.type === "image" ? (openBlock(), createBlock(_component_v_uni_image, {
                  key: 0,
                  src: item.thumb || item.url,
                  mode: _ctx.imageMode,
                  class: "u-upload__wrap__preview__image",
                  onClick: ($event) => $options.onPreviewImage(item),
                  style: normalizeStyle([{
                    width: $options.addUnit(_ctx.width),
                    height: $options.addUnit(_ctx.height)
                  }])
                }, null, 8, ["src", "mode", "onClick", "style"])) : (openBlock(), createBlock(_component_v_uni_view, {
                  key: 1,
                  class: "u-upload__wrap__preview__other",
                  onClick: ($event) => $options.onClickPreview($event, item)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_u_icon, {
                      color: "#80CBF9",
                      size: "26",
                      name: item.isVideo || item.type && item.type === "video" ? "movie" : "folder"
                    }, null, 8, ["name"]),
                    createVNode(_component_v_uni_text, { class: "u-upload__wrap__preview__other__text" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.isVideo || item.type && item.type === "video" ? "视频" : "文件"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"])),
                item.status === "uploading" || item.status === "failed" ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 2,
                  class: "u-upload__status"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "u-upload__status__icon" }, {
                      default: withCtx(() => [
                        item.status === "failed" ? (openBlock(), createBlock(_component_u_icon, {
                          key: 0,
                          name: "close-circle",
                          color: "#ffffff",
                          size: "25"
                        })) : (openBlock(), createBlock(_component_u_loading_icon, {
                          key: 1,
                          size: "22",
                          mode: "circle",
                          color: "#ffffff"
                        }))
                      ]),
                      _: 2
                    }, 1024),
                    item.message ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 0,
                      class: "u-upload__status__message"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.message), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                item.status !== "uploading" && (_ctx.deletable || item.deletable) ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 3,
                  class: "u-upload__deletable",
                  onClick: withModifiers(($event) => $options.deleteItem(index), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "u-upload__deletable__icon" }, {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          name: "close",
                          color: "#ffffff",
                          size: "10"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                item.status === "success" ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 4,
                  class: "u-upload__success"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "u-upload__success__icon" }, {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          name: "checkmark",
                          color: "#ffffff",
                          size: "12"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024);
          }), 128)) : createCommentVNode("", true),
          $data.isInCount ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            _ctx.$slots.default || _ctx.$slots.$default ? (openBlock(), createBlock(_component_v_uni_view, {
              key: 0,
              onClick: $options.chooseFile
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              _: 3
            }, 8, ["onClick"])) : (openBlock(), createBlock(_component_v_uni_view, {
              key: 1,
              class: normalizeClass(["u-upload__button", [_ctx.disabled && "u-upload__button--disabled"]]),
              "hover-class": !_ctx.disabled ? "u-upload__button--hover" : "",
              "hover-stay-time": "150",
              onClick: $options.chooseFile,
              style: normalizeStyle([{
                width: $options.addUnit(_ctx.width),
                height: $options.addUnit(_ctx.height)
              }])
            }, {
              default: withCtx(() => [
                createVNode(_component_u_icon, {
                  name: _ctx.uploadIcon,
                  size: "26",
                  color: _ctx.uploadIconColor
                }, null, 8, ["name", "color"]),
                _ctx.uploadText ? (openBlock(), createBlock(_component_v_uni_text, {
                  key: 0,
                  class: "u-upload__button__text"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.uploadText), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["hover-class", "onClick", "class", "style"]))
          ], 64)) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["style"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a33a03e2"]]);
export {
  __easycom_3 as _
};
