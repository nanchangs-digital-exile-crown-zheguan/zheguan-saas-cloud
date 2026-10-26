/* __addonChunkCssInjected:f8fc7712 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("f8fc7712",".addon-wrap-f8fc7712 .rubik-cube{overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-between}.addon-wrap-f8fc7712 .rubik-cube .item{text-align:center;line-height:0;overflow:hidden}.addon-wrap-f8fc7712 .rubik-cube .item uni-image{width:100%;max-width:100%;height:100%}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of2{box-sizing:border-box;margin-top:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of2:nth-child(1){margin-left:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of2:nth-child(2){margin-right:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of3{box-sizing:border-box;margin-top:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of3:nth-child(1){margin-left:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of3:nth-child(3){margin-right:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of4{box-sizing:border-box;margin-top:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of4:nth-child(1){margin-left:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-of4:nth-child(4){margin-right:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row2-lt-of2-rt{display:inline-block;box-sizing:border-box}.addon-wrap-f8fc7712 .rubik-cube .item.row2-lt-of2-rt:nth-child(1){margin-left:0!important;margin-top:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row2-lt-of2-rt:nth-child(2){margin-right:0!important;margin-top:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row2-lt-of2-rt:nth-child(3){margin-left:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row2-lt-of2-rt:nth-child(4){margin-right:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .template-left,.addon-wrap-f8fc7712 .rubik-cube .template-right{box-sizing:border-box}.addon-wrap-f8fc7712 .rubik-cube .template-left .item.row1-lt-of2-rt:nth-child(1){margin-bottom:0}.addon-wrap-f8fc7712 .rubik-cube .template-right .item.row1-lt-of2-rt:nth-child(2){margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube.row1-lt-of2-rt .template-right{display:flex;flex-direction:column;justify-content:space-between}.addon-wrap-f8fc7712 .rubik-cube .item.row1-tp-of2-bm:nth-child(1){width:100%;box-sizing:border-box;margin-top:0!important;margin-left:0!important;margin-right:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-tp-of2-bm:nth-child(2){box-sizing:border-box;margin-left:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .item.row1-tp-of2-bm:nth-child(3){box-sizing:border-box;margin-right:0!important;margin-bottom:0!important}.addon-wrap-f8fc7712 .rubik-cube .template-left .item.row1-lt-of1-tp-of2-bm{width:100%;box-sizing:border-box}.addon-wrap-f8fc7712 .rubik-cube .template-bottom{display:flex;align-items:center;justify-content:space-between}.addon-wrap-f8fc7712 .rubik-cube .template-bottom .item:nth-child(2){margin-right:0!important}");
import { J as getSystemInfoSync, c as createSelectorQuery, u as upx2px, i as index$g, b as index$q } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import { defineComponent, computed, onMounted, watch, getCurrentInstance, ref, nextTick, openBlock, createBlock, normalizeStyle, unref, withCtx, createVNode, normalizeClass, createElementBlock, Fragment, renderList, createCommentVNode } from "/wap/assets/shared/vue.js";
import { k as useDiyStore, a as useSystemStore, i as img } from "./common.f536f441.js";
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
      } else {
        return props.component;
      }
    });
    const systemStore = useSystemStore();
    systemStore.systemInfo = getSystemInfoSync();
    const upx2px$1 = (rpx) => {
      return upx2px(rpx) + 1;
    };
    const warpCss = computed(() => {
      let style = "";
      style += "position:relative;";
      if (diyComponent.value.componentStartBgColor) {
        if (diyComponent.value.componentStartBgColor && diyComponent.value.componentEndBgColor)
          style += `background:linear-gradient(${diyComponent.value.componentGradientAngle},${diyComponent.value.componentStartBgColor},${diyComponent.value.componentEndBgColor});`;
        else
          style += "background-color:" + diyComponent.value.componentStartBgColor + ";";
      }
      if (diyComponent.value.componentBgUrl) {
        style += `background-image:url('${img(diyComponent.value.componentBgUrl)}');`;
        style += "background-size: cover;background-repeat: no-repeat;";
      }
      if (diyComponent.value.topRounded)
        style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.topRounded)
        style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      if (diyComponent.value.bottomRounded)
        style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      return style;
    });
    const maskLayer = computed(() => {
      let style = "";
      if (diyComponent.value.componentBgUrl) {
        style += "position:absolute;top:0;width:100%;";
        style += `background: rgba(0,0,0,${diyComponent.value.componentBgAlpha / 10});`;
        style += `height:${height.value}px;`;
        if (diyComponent.value.topRounded)
          style += "border-top-left-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.topRounded)
          style += "border-top-right-radius:" + diyComponent.value.topRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-left-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
        if (diyComponent.value.bottomRounded)
          style += "border-bottom-right-radius:" + diyComponent.value.bottomRounded * 2 + "rpx;";
      }
      return style;
    });
    const countBorderRadius = (type, index2) => {
      let obj = "";
      if (diyComponent.value.elementAngle == "right") {
        return obj;
      }
      const defaultData = {
        "row1-lt-of2-rt": [
          ["border-top-right-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-top-right-radius"]
        ],
        "row1-lt-of1-tp-of2-bm": [
          ["border-top-right-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-bottom-right-radius"],
          ["border-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-top-right-radius"]
        ],
        "row1-tp-of2-bm": [
          ["border-bottom-left-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-right-radius", "border-top-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-top-right-radius"]
        ],
        "row2-lt-of2-rt": [
          ["border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-right-radius", "border-bottom-left-radius"],
          ["border-top-left-radius", "border-bottom-right-radius", "border-top-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius", "border-top-right-radius"]
        ],
        "row1-of4": [
          ["border-top-right-radius", "border-bottom-right-radius"],
          ["border-radius"],
          ["border-radius"],
          ["border-top-left-radius", "border-bottom-left-radius"]
        ],
        "row1-of3": [
          ["border-top-right-radius", "border-bottom-right-radius"],
          ["border-radius"],
          ["border-top-left-radius", "border-bottom-left-radius"]
        ],
        "row1-of2": [
          ["border-top-right-radius", "border-bottom-right-radius"],
          ["border-top-left-radius", "border-bottom-left-radius"]
        ]
      };
      defaultData[type][index2].forEach((item, index22) => {
        obj += "border-top-left-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
        obj += "border-top-right-radius:" + diyComponent.value.topElementRounded * 2 + "rpx;";
        obj += "border-bottom-left-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
        obj += "border-bottom-right-radius:" + diyComponent.value.bottomElementRounded * 2 + "rpx;";
      });
      return obj;
    };
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "RubikCube") {
              refresh();
            }
          }
        );
      } else {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            refresh();
          }
        );
      }
    });
    const instance = getCurrentInstance();
    const height = ref(0);
    const refresh = () => {
      if (diyStore.mode == "decorate") {
        diyComponent.value.list.forEach((item) => {
          if (item.imageUrl == "") {
            item.imgWidth = 690;
            item.imgHeight = 330;
          }
        });
      }
      if (window.self != window.parent && !window.frameElement.offsetWidth) {
        let getOffsetWidthInterval = setInterval(() => {
          var _a;
          if (window.frameElement.offsetWidth) {
            systemStore.systemInfo.windowWidth = (_a = window.frameElement) == null ? void 0 : _a.offsetWidth;
            handleData();
            clearInterval(getOffsetWidthInterval);
          }
        }, 100);
      } else {
        handleData();
      }
      handleData();
      nextTick(() => {
        const query = createSelectorQuery().in(instance);
        query.select(".rubik-cube").boundingClientRect((data) => {
          height.value = data.height;
        }).exec();
      });
    };
    const handleData = () => {
      const singleRow = {
        "row1-of2": {
          ratio: 2,
          width: "calc((100% - " + upx2px$1(diyComponent.value.imageGap * 2) + "px) / 2)"
        },
        "row1-of3": {
          ratio: 3,
          width: "calc((100% - " + upx2px$1(diyComponent.value.imageGap * 4) + "px) / 3)"
        },
        "row1-of4": {
          ratio: 4,
          width: "calc((100% - " + upx2px$1(diyComponent.value.imageGap * 6) + "px) / 4)"
        }
      };
      diyComponent.value.list.forEach((item, index2) => {
        item.pageItemStyle = countBorderRadius(diyComponent.value.mode, index2);
      });
      if (singleRow[diyComponent.value.mode]) {
        calcSingleRow(singleRow[diyComponent.value.mode]);
      } else if (diyComponent.value.mode == "row2-lt-of2-rt") {
        calcFourSquare();
      } else if (diyComponent.value.mode == "row1-lt-of2-rt") {
        calcRowOneLeftOfTwoRight();
      } else if (diyComponent.value.mode == "row1-tp-of2-bm") {
        calcRowOneTopOfTwoBottom();
      } else if (diyComponent.value.mode == "row1-lt-of1-tp-of2-bm") {
        calcRowOneLeftOfOneTopOfTwoBottom();
      }
    };
    const calcSingleRow = (params) => {
      let maxHeight = 0;
      diyComponent.value.list.forEach((item, index2) => {
        const ratio = item.imgHeight / item.imgWidth;
        let width = systemStore.systemInfo.windowWidth - upx2px$1(diyComponent.value.margin.both * 2);
        if (diyComponent.value.imageGap > 0) {
          width -= upx2px$1(params.ratio * diyComponent.value.imageGap * 2);
        }
        item.imgWidth = width / params.ratio;
        item.imgHeight = item.imgWidth * ratio;
        if (maxHeight == 0 || maxHeight < item.imgHeight)
          maxHeight = item.imgHeight;
      });
      diyComponent.value.list.forEach((item, index2) => {
        item.widthStyle = params.width;
        item.imgHeight = maxHeight;
      });
    };
    const calcFourSquare = () => {
      let maxHeightFirst = 0;
      let maxHeightTwo = 0;
      diyComponent.value.list.forEach((item, index2) => {
        const ratio = item.imgHeight / item.imgWidth;
        item.imgWidth = systemStore.systemInfo.windowWidth;
        item.imgWidth -= upx2px$1(diyComponent.value.margin.both * 4);
        if (diyComponent.value.imageGap > 0) {
          item.imgWidth -= upx2px$1(diyComponent.value.imageGap * 2);
        }
        item.imgWidth = item.imgWidth / 2;
        item.imgHeight = item.imgWidth * ratio;
        if (index2 <= 1) {
          if (maxHeightFirst == 0 || maxHeightFirst < item.imgHeight) {
            maxHeightFirst = item.imgHeight;
          }
        } else if (index2 > 1) {
          if (maxHeightTwo == 0 || maxHeightTwo < item.imgHeight) {
            maxHeightTwo = item.imgHeight;
          }
        }
      });
      diyComponent.value.list.forEach((item, index2) => {
        item.widthStyle = "calc((100% - " + upx2px$1(diyComponent.value.imageGap * 2) + "px) / 2)";
        if (index2 <= 1) {
          item.imgHeight = maxHeightFirst;
        } else if (index2 > 1) {
          item.imgHeight = maxHeightTwo;
        }
      });
    };
    const calcRowOneLeftOfTwoRight = () => {
      let rightHeight = 0;
      if (diyComponent.value.list[1].imgWidth === diyComponent.value.list[2].imgWidth)
        ;
      diyComponent.value.list.forEach((item, index2) => {
        if (index2 == 0) {
          const ratio = item.imgHeight / item.imgWidth;
          item.imgWidth = systemStore.systemInfo.windowWidth - upx2px$1(diyComponent.value.margin.both * 4) - upx2px$1(diyComponent.value.imageGap * 2);
          item.imgWidth = item.imgWidth / 2;
          item.imgHeight = item.imgWidth * ratio;
          rightHeight = (item.imgHeight - upx2px$1(diyComponent.value.imageGap * 2)) / 2;
          item.imgWidth += "px";
        } else {
          item.imgWidth = diyComponent.value.list[0].imgWidth;
          item.imgHeight = rightHeight;
        }
      });
    };
    const calcRowOneTopOfTwoBottom = () => {
      let maxHeight = 0;
      diyComponent.value.list.forEach((item, index2) => {
        const ratio = item.imgHeight / item.imgWidth;
        if (index2 == 0) {
          item.imgWidth = systemStore.systemInfo.windowWidth - upx2px$1(diyComponent.value.margin.both * 4);
        } else if (index2 > 0) {
          item.imgWidth = systemStore.systemInfo.windowWidth - upx2px$1(diyComponent.value.margin.both * 4) - upx2px$1(diyComponent.value.imageGap * 2);
          item.imgWidth = item.imgWidth / 2;
        }
        item.imgHeight = item.imgWidth * ratio;
        if (index2 > 0 && (maxHeight == 0 || maxHeight < item.imgHeight))
          maxHeight = item.imgHeight;
      });
      diyComponent.value.list.forEach((item, index2) => {
        item.imgWidth += "px";
        item.widthStyle = item.imgWidth;
        if (index2 > 0)
          item.imgHeight = maxHeight;
      });
    };
    const calcRowOneLeftOfOneTopOfTwoBottom = () => {
      diyComponent.value.list.forEach((item, index2) => {
        if (index2 == 0) {
          const ratio = item.imgHeight / item.imgWidth;
          item.imgWidth = systemStore.systemInfo.windowWidth - upx2px$1(diyComponent.value.margin.both * 4) - upx2px$1(diyComponent.value.imageGap * 2);
          item.imgWidth = item.imgWidth / 2;
          item.imgHeight = item.imgWidth * ratio;
        } else if (index2 == 1) {
          item.imgWidth = diyComponent.value.list[0].imgWidth;
          item.imgHeight = (diyComponent.value.list[0].imgHeight - upx2px$1(diyComponent.value.imageGap * 2)) / 2;
        } else if (index2 > 1) {
          item.imgWidth = (diyComponent.value.list[0].imgWidth - upx2px$1(diyComponent.value.imageGap * 2)) / 2;
          item.imgHeight = diyComponent.value.list[1].imgHeight;
        }
      });
      diyComponent.value.list.forEach((item, index2) => {
        item.imgWidth += "px";
      });
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            style: normalizeStyle(unref(maskLayer))
          }, null, 8, ["style"]),
          createVNode(_component_v_uni_view, {
            class: normalizeClass(["rubik-cube relative", unref(diyStore).mode])
          }, {
            default: withCtx(() => [
              unref(diyComponent).mode == "row1-lt-of2-rt" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(_component_v_uni_view, { class: "template-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, {
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).list[0].link)),
                      class: normalizeClass(["item", unref(diyComponent).mode]),
                      style: normalizeStyle({ marginRight: unref(diyComponent).imageGap * 2 + "rpx", width: unref(diyComponent).list[0].imgWidth, height: unref(diyComponent).list[0].imgHeight + "px" })
                    }, {
                      default: withCtx(() => [
                        unref(diyComponent).list[0].imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 0,
                          src: unref(img)(unref(diyComponent).list[0].imageUrl),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[0].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                          key: 1,
                          src: unref(img)("static/resource/images/diy/figure.png"),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[0].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"]))
                      ]),
                      _: 1
                    }, 8, ["class", "style"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "template-right" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                      return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                        index2 > 0 ? (openBlock(), createBlock(_component_v_uni_view, {
                          key: 0,
                          onClick: ($event) => unref(diyStore).toRedirect(item.link),
                          class: normalizeClass(["item", unref(diyComponent).mode]),
                          style: normalizeStyle({ marginBottom: unref(diyComponent).imageGap * 2 + "rpx", width: item.imgWidth, height: item.imgHeight + "px" })
                        }, {
                          default: withCtx(() => [
                            item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                              key: 0,
                              src: unref(img)(item.imageUrl),
                              mode: "scaleToFill",
                              style: normalizeStyle(item.pageItemStyle),
                              "show-menu-by-longpress": true
                            }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                              key: 1,
                              src: unref(img)("static/resource/images/diy/figure.png"),
                              mode: "scaleToFill",
                              style: normalizeStyle(item.pageItemStyle),
                              "show-menu-by-longpress": true
                            }, null, 8, ["src", "style"]))
                          ]),
                          _: 2
                        }, 1032, ["onClick", "class", "style"])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                })
              ], 64)) : unref(diyComponent).mode == "row1-lt-of1-tp-of2-bm" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(_component_v_uni_view, { class: "template-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, {
                      onClick: _cache[1] || (_cache[1] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).list[0].link)),
                      class: normalizeClass(["item", unref(diyComponent).mode]),
                      style: normalizeStyle({ marginRight: unref(diyComponent).imageGap * 2 + "rpx", width: unref(diyComponent).list[0].imgWidth, height: unref(diyComponent).list[0].imgHeight + "px" })
                    }, {
                      default: withCtx(() => [
                        unref(diyComponent).list[0].imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 0,
                          src: unref(img)(unref(diyComponent).list[0].imageUrl),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[0].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                          key: 1,
                          src: unref(img)("static/resource/images/diy/figure.png"),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[0].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"]))
                      ]),
                      _: 1
                    }, 8, ["class", "style"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "template-right" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, {
                      onClick: _cache[2] || (_cache[2] = ($event) => unref(diyStore).toRedirect(unref(diyComponent).list[1].link)),
                      class: normalizeClass(["item", unref(diyComponent).mode]),
                      style: normalizeStyle({ marginBottom: unref(diyComponent).imageGap * 2 + "rpx", width: unref(diyComponent).list[1].imgWidth, height: unref(diyComponent).list[1].imgHeight + "px" })
                    }, {
                      default: withCtx(() => [
                        unref(diyComponent).list[1].imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 0,
                          src: unref(img)(unref(diyComponent).list[1].imageUrl),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[1].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                          key: 1,
                          src: unref(img)("static/resource/images/diy/figure.png"),
                          mode: "scaleToFill",
                          style: normalizeStyle(unref(diyComponent).list[1].pageItemStyle),
                          "show-menu-by-longpress": true
                        }, null, 8, ["src", "style"]))
                      ]),
                      _: 1
                    }, 8, ["class", "style"]),
                    createVNode(_component_v_uni_view, { class: "template-bottom" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).list, (item, index2) => {
                          return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                            index2 > 1 ? (openBlock(), createBlock(_component_v_uni_view, {
                              key: 0,
                              onClick: ($event) => unref(diyStore).toRedirect(item.link),
                              class: normalizeClass(["item", unref(diyComponent).mode]),
                              style: normalizeStyle({ marginRight: unref(diyComponent).imageGap * 2 + "rpx", width: item.imgWidth, height: item.imgHeight + "px" })
                            }, {
                              default: withCtx(() => [
                                item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 0,
                                  src: unref(img)(item.imageUrl),
                                  mode: "scaleToFill",
                                  style: normalizeStyle(item.pageItemStyle),
                                  "show-menu-by-longpress": true
                                }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                                  key: 1,
                                  src: unref(img)("static/resource/images/diy/figure.png"),
                                  mode: "scaleToFill",
                                  style: normalizeStyle(item.pageItemStyle),
                                  "show-menu-by-longpress": true
                                }, null, 8, ["src", "style"]))
                              ]),
                              _: 2
                            }, 1032, ["onClick", "class", "style"])) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(diyComponent).list, (item, index2) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  class: normalizeClass(["item", unref(diyComponent).mode]),
                  key: index2,
                  onClick: ($event) => unref(diyStore).toRedirect(item.link),
                  style: normalizeStyle({ marginRight: unref(diyComponent).imageGap * 2 + "rpx", marginBottom: unref(diyComponent).imageGap * 2 + "rpx", width: item.widthStyle, height: item.imgHeight + "px" })
                }, {
                  default: withCtx(() => [
                    item.imageUrl ? (openBlock(), createBlock(_component_v_uni_image, {
                      key: 0,
                      src: unref(img)(item.imageUrl),
                      mode: "scaleToFill",
                      style: normalizeStyle(item.pageItemStyle),
                      "show-menu-by-longpress": true
                    }, null, 8, ["src", "style"])) : (openBlock(), createBlock(_component_v_uni_image, {
                      key: 1,
                      src: unref(img)("static/resource/images/diy/figure.png"),
                      mode: "scaleToFill",
                      style: normalizeStyle(item.pageItemStyle),
                      "show-menu-by-longpress": true
                    }, null, 8, ["src", "style"]))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick", "style"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f8fc7712_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8fc7712"]]);
export {
  index as default
};
