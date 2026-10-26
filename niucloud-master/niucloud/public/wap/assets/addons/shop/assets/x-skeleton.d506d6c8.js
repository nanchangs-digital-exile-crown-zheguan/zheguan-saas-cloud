/* __addonChunkCssInjected:3c484d49 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("3c484d49",".addon-wrap-3c484d49 .x-skeleton{width:100%;box-sizing:border-box}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper{display:flex;flex-direction:column}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper__rows{display:flex;align-items:center;justify-content:space-between}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper__columns{display:flex;align-items:center;flex:1}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper__head{width:100%;background:linear-gradient(90deg,#EAEDF5 25%,#F9FAFF 37%,#EAEDF5 50%);background-size:400% 100%}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper__text{flex:1;width:100%}.addon-wrap-3c484d49 .x-skeleton .x-skeleton__wrapper__text__row{background:linear-gradient(90deg,#EAEDF5 25%,#F9FAFF 37%,#EAEDF5 50%);background-size:400% 100%}.addon-wrap-3c484d49 .x-skeleton .fade-out{opacity:0;animation:fadeOutAnim-3c484d49 .5s}.addon-wrap-3c484d49 }.x-skeleton .animate{animation:skeletonAnim-3c484d49 1.8s ease infinite}");
import { i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, ref, computed, watch, openBlock, createBlock, normalizeStyle, unref, withCtx, normalizeClass, createElementBlock, Fragment, renderList, createCommentVNode, renderSlot } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function bannerConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 1,
    gridColumns: 1,
    gridRowsGap: "40rpx",
    gridColumnsGap: "24rpx",
    itemDirection: "row",
    itemGap: "30rpx",
    itemAlign: "center",
    headShow: true,
    headWidth: "100%",
    headHeight: "300rpx",
    headBorderRadius: "20rpx",
    textShow: false,
    textRows: 3,
    textRowsGap: "20rpx",
    textWidth: "100%",
    textHeight: "30rpx",
    textBorderRadius: "6rpx",
    ...config
  };
}
function infoConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 1,
    gridColumns: 1,
    gridRowsGap: "50rpx",
    gridColumnsGap: "24rpx",
    itemDirection: "row",
    itemGap: "30rpx",
    itemAlign: "flex-start",
    headShow: true,
    headWidth: "100rpx",
    headHeight: "100rpx",
    headBorderRadius: "50%",
    textShow: true,
    textRows: 4,
    textRowsGap: "30rpx",
    textWidth: ["50%", "100%", "100%", "80%"],
    textHeight: ["40rpx", "24rpx", "24rpx", "24rpx"],
    textBorderRadius: "6rpx",
    ...config
  };
}
function textConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 1,
    gridColumns: 1,
    gridRowsGap: "50rpx",
    gridColumnsGap: "24rpx",
    itemDirection: "row",
    itemGap: "30rpx",
    itemAlign: "flex-start",
    headShow: false,
    headWidth: "100rpx",
    headHeight: "100rpx",
    headBorderRadius: "50%",
    textShow: true,
    textRows: 4,
    textRowsGap: "30rpx",
    textWidth: ["50%", "100%", "100%", "80%"],
    textHeight: "30rpx",
    textBorderRadius: "6rpx",
    ...config
  };
}
function menuConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 2,
    gridColumns: 5,
    gridRowsGap: "40rpx",
    gridColumnsGap: "40rpx",
    itemDirection: "column",
    itemGap: "16rpx",
    itemAlign: "center",
    headShow: true,
    headWidth: "100rpx",
    headHeight: "100rpx",
    headBorderRadius: "50%",
    textShow: true,
    textRows: 1,
    textRowsGap: "0rpx",
    textWidth: "100%",
    textHeight: "24rpx",
    textBorderRadius: "6rpx",
    ...config
  };
}
function listConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 2,
    gridColumns: 1,
    gridRowsGap: "50rpx",
    gridColumnsGap: "24rpx",
    itemDirection: "row",
    itemGap: "30rpx",
    itemAlign: "flex-start",
    headShow: true,
    headWidth: "200rpx",
    headHeight: "200rpx",
    headBorderRadius: "16rpx",
    textShow: true,
    textRows: 4,
    textRowsGap: "30rpx",
    textWidth: ["50%", "100%", "100%", "80%"],
    textHeight: ["38rpx", "24rpx", "24rpx", "24rpx"],
    textBorderRadius: "6rpx",
    ...config
  };
}
function waterfallConfig(config) {
  return {
    padding: "20rpx",
    gridRows: 2,
    gridColumns: 2,
    gridRowsGap: "40rpx",
    gridColumnsGap: "24rpx",
    itemDirection: "column",
    itemGap: "16rpx",
    itemAlign: "center",
    headShow: true,
    headWidth: "100%",
    headHeight: "400rpx",
    headBorderRadius: "12rpx",
    textShow: true,
    textRows: 3,
    textRowsGap: "12rpx",
    textWidth: ["40%", "85%", "60%"],
    textHeight: ["30rpx", "20rpx", "20rpx"],
    textBorderRadius: "6rpx",
    ...config
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "x-skeleton",
  props: {
    // 骨架屏类型
    type: {
      type: String,
      default: "",
      //banner 轮播图、info 个人信息、text 段落、menu 菜单、list 列表、waterfall 瀑布流
      required: true
    },
    // 是否展示骨架组件
    loading: {
      type: Boolean,
      default: true
    },
    // 是否开启动画效果
    animate: {
      type: Boolean,
      default: true
    },
    // 动画效果持续时间，单位秒
    animateTime: {
      type: Number,
      default: 1.8
    },
    // 是否开启淡出动画
    fadeOut: {
      type: Boolean,
      default: true
    },
    // 淡出效果持续时间，单位秒
    fadeOutTime: {
      type: Number,
      default: 0.5
    },
    // 骨架的背景色
    bgColor: {
      type: String,
      default: "#EAEDF5"
      // #EAEDF5
    },
    // 骨架的动画高亮背景色
    highlightBgColor: {
      type: String,
      default: "#F9FAFF"
      // #F9FAFF
    },
    // 自定义配置
    config: {
      type: Object,
      default: () => {
        return {
          // padding: '30rpx',		   				  //内边距
          // gridRows: 3, 			 	   			  //行数
          // gridColumns: 2,	  		  	   			  //列数
          // gridRowsGap: '40rpx',		   			  //行间隔
          // gridColumnsGap: '24rpx',	   			  	  //竖间距
          // itemDirection: 'column',   				  //head与text之间的排列方向（row、column）
          // itemGap: '16rpx', 				  		  //head与text之间的间隔
          // itemAlign: 'center',  	   				  //head与text之间的纵轴对齐方式（center、flex-start、flex-end、baseline）
          // headShow: true,		 	   				  //head是否展示
          // headWidth: '100%',	  	   				  //head宽度，支持百分比
          // headHeight: '400rpx',	   				  //head高度
          // headBorderRadius: '12rpx', 				  //head圆角，支持百分比
          // textShow: true,		   				      //文本是否展示
          // textRows: 3,		 	   				  	  //文本的行数
          // textRowsGap: '12rpx',		   			  //文本间距
          // textWidth: ['40%', '85%', '60%'], 		  //文本的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度
          // textHeight: ['30rpx', '20rpx', '20rpx'],   //文本的高度，可以为数值，带单位字符串等，可通过数组传入指定每个段落行的高度
          // textBorderRadius: '6rpx',  			      //文本的圆角，支持百分比
        };
      }
    }
  },
  setup(__props) {
    const props = __props;
    const skeletonConfig = ref(props.config || {});
    const skeletonLoading = ref(props.loading);
    const startFadeOut = ref(false);
    ref(0);
    const gridRowsArr = computed(() => {
      var _a;
      return new Array(Number(((_a = skeletonConfig.value) == null ? void 0 : _a.gridRows) || []));
    });
    const gridColumnsArr = computed(() => {
      var _a;
      return new Array(Number(((_a = skeletonConfig.value) == null ? void 0 : _a.gridColumns) || []));
    });
    const textRowsArr = computed(() => {
      var _a;
      if (!((_a = skeletonConfig.value) == null ? void 0 : _a.textShow))
        return [];
      if (/%$/.test(skeletonConfig.value.textHeight)) {
        console.error("x-skeleton: textHeight参数不支持百分比单位");
      }
      const rows = [];
      for (let i = 0; i < skeletonConfig.value.textRows; i++) {
        const { gridRows, textWidth, textHeight } = skeletonConfig.value;
        let item = {}, rowWidth = isArray(textWidth) ? textWidth[i] || (i === gridRows - 1 ? "70%" : "100%") : i === gridRows - 1 ? "70%" : textWidth, rowHeight = isArray(textHeight) ? textHeight[i] || "30rpx" : textHeight;
        if (/%$/.test(rowWidth)) {
          item.width = rowWidth;
        } else {
          item.width = addUnit(rowWidth);
        }
        item.height = addUnit(rowHeight);
        rows.push(item);
      }
      return rows;
    });
    const variableStr = computed(() => {
      let keys = ["animateTime", "fadeOutTime", "bgColor", "highlightBgColor"];
      let str = keys.map((item) => {
        if (item.indexOf("Time") > -1) {
          return `--${item}:${props[item]}s`;
        } else {
          return `--${item}:${props[item]}`;
        }
      }).join(";");
      return str;
    });
    watch(
      () => props.loading,
      (value) => {
        if (value) {
          skeletonLoading.value = true;
        } else {
          if (props.fadeOut) {
            startFadeOut.value = true;
            setTimeout(() => {
              skeletonLoading.value = false;
              startFadeOut.value = false;
            }, props.fadeOutTime * 1e3);
          } else {
            skeletonLoading.value = false;
          }
        }
      },
      { immediate: true }
    );
    watch(
      () => props.type,
      (value) => {
        if (value === "banner") {
          skeletonConfig.value = bannerConfig(props.config);
        } else if (value === "info") {
          skeletonConfig.value = infoConfig(props.config);
        } else if (value === "text") {
          skeletonConfig.value = textConfig(props.config);
        } else if (value === "menu") {
          skeletonConfig.value = menuConfig(props.config);
        } else if (value === "list") {
          skeletonConfig.value = listConfig(props.config);
        } else if (value === "waterfall") {
          skeletonConfig.value = waterfallConfig(props.config);
        } else {
          skeletonConfig.value = props.config || {};
        }
      },
      { immediate: true }
    );
    const isArray = (value) => {
      if (typeof Array.isArray === "function") {
        return Array.isArray(value);
      }
      return Object.prototype.toString.call(value) === "[object Array]";
    };
    const addUnit = (value = "auto", unit = "px") => {
      value = String(value);
      return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value) ? `${value}${unit}` : value;
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "x-skeleton",
        style: normalizeStyle(unref(variableStr))
      }, {
        default: withCtx(() => [
          skeletonLoading.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: normalizeClass(["x-skeleton__wrapper", [startFadeOut.value && "fade-out"]]),
            style: normalizeStyle({ padding: skeletonConfig.value.padding })
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(gridRowsArr), (row, rowIndex) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: rowIndex,
                  class: "x-skeleton__wrapper__rows",
                  style: normalizeStyle({ marginBottom: rowIndex < unref(gridRowsArr).length - 1 ? skeletonConfig.value.gridRowsGap : 0 })
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(gridColumnsArr), (column, columnIndex) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: columnIndex,
                        class: "x-skeleton__wrapper__columns",
                        style: normalizeStyle({ flexDirection: skeletonConfig.value.itemDirection, alignItems: skeletonConfig.value.itemAlign, marginRight: columnIndex < unref(gridColumnsArr).length - 1 ? skeletonConfig.value.gridColumnsGap : 0 })
                      }, {
                        default: withCtx(() => [
                          skeletonConfig.value.headShow ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            class: normalizeClass(["x-skeleton__wrapper__head", [__props.animate && "animate"]]),
                            style: normalizeStyle({ width: skeletonConfig.value.headWidth, height: skeletonConfig.value.headHeight, borderRadius: skeletonConfig.value.headBorderRadius, marginRight: skeletonConfig.value.itemDirection == "row" && skeletonConfig.value.textShow ? skeletonConfig.value.itemGap : 0, marginBottom: skeletonConfig.value.itemDirection == "column" && skeletonConfig.value.textShow ? skeletonConfig.value.itemGap : 0 })
                          }, null, 8, ["class", "style"])) : createCommentVNode("", true),
                          skeletonConfig.value.textShow ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 1,
                            class: "x-skeleton__wrapper__text"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(textRowsArr), (text, textIndex) => {
                                return openBlock(), createBlock(_component_v_uni_view, {
                                  key: textIndex,
                                  class: normalizeClass(["x-skeleton__wrapper__text__row", [__props.animate && "animate"]]),
                                  style: normalizeStyle({ width: text.width, height: text.height, borderRadius: skeletonConfig.value.textBorderRadius, marginBottom: textIndex < unref(textRowsArr).length - 1 ? skeletonConfig.value.textRowsGap : 0 })
                                }, null, 8, ["class", "style"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["style"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["style"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["class", "style"])) : (openBlock(), createBlock(_component_v_uni_view, { key: 1 }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }))
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
const xSkeleton_vue_vue_type_style_index_0_scoped_3c484d49_lang = "";
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c484d49"]]);
export {
  __easycom_5 as _
};
