/* __addonChunkWindiInjected:app-components-diy-form-table-index_496e6cce */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("app-components-diy-form-table-index_496e6cce",".border-solid{\n  border-style: solid;\n}.border-\\[0\\]{\n  border-width: 0;\n}.border-b-\\[2rpx\\]{\n  border-bottom-width: 0.0625rem;\n}.box-border{\n  box-sizing: border-box;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.p-\\[10rpx\\]{\n  padding: 0.3125rem;\n}.p-\\[15rpx\\]{\n  padding: 0.46875rem;\n}.py-\\[20rpx\\]{\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}.px-\\[14rpx\\]{\n  padding-left: 0.4375rem;\n  padding-right: 0.4375rem;\n}.relative{\n  position: relative;\n}");
/* __addonChunkCssInjected:72d2fb6e */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("72d2fb6e",".addon-wrap-72d2fb6e .u-empty,.addon-wrap-72d2fb6e .u-empty__wrap,.addon-wrap-72d2fb6e .u-tabs,.addon-wrap-72d2fb6e .u-tabs__wrapper,.addon-wrap-72d2fb6e .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-72d2fb6e .u-tabs__wrapper__scroll-view,.addon-wrap-72d2fb6e .u-tabs__wrapper__nav,.addon-wrap-72d2fb6e .u-tabs__wrapper__nav__line,.addon-wrap-72d2fb6e .u-empty[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-empty__wrap[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs__wrapper[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs__wrapper__scroll-view-wrapper[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs__wrapper__scroll-view[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs__wrapper__nav[data-v-ad7e8d01],.addon-wrap-72d2fb6e .u-tabs__wrapper__nav__line[data-v-ad7e8d01]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}");
import "./text.99ce2b32.js";
import { i as index$g, a as index$i, S as ScrollView } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_2, a as __easycom_3$2 } from "./u-radio-group.7a8ec641.js";
import { openBlock, createBlock, normalizeStyle, resolveDynamicComponent, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, createCommentVNode, renderSlot, createElementBlock, Fragment, renderList, defineComponent, ref, computed, onMounted, watch, unref } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./scroll-view.29370e9b.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { _ as __easycom_3$1 } from "./u-line.46235f11.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { b as addUnit, e as deepMerge, a as addStyle } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { _ as __easycom_7$1 } from "./area-select.b46ccb5e.js";
import { _ as __easycom_8 } from "./u-calendar.2167a72c.js";
import { _ as __easycom_2$1 } from "./u-datetime-picker.5c846ad3.js";
import { k as useDiyStore, a1 as timeTurnTimeStamp, i as img, a2 as timeStampTurnTime } from "./common.f536f441.js";
import "./u-transition.ff7c65da.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-safe-bottom.32b62caf.js";
import "./resize-sensor.8ba09891.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./button.fdf0e29d.js";
import "./index.1599740b.js";
import "./u-input.854f14a8.js";
import "./input.18765527.js";
import "./picker-view.e9d3c544.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const button = {
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String
  }
};
const openType = {
  props: {
    openType: String
  },
  methods: {
    onGetUserInfo(event) {
      this.$emit("getuserinfo", event.detail);
    },
    onContact(event) {
      this.$emit("contact", event.detail);
    },
    onGetPhoneNumber(event) {
      this.$emit("getphonenumber", event.detail);
    },
    onError(event) {
      this.$emit("error", event.detail);
    },
    onLaunchApp(event) {
      this.$emit("launchapp", event.detail);
    },
    onOpenSetting(event) {
      this.$emit("opensetting", event.detail);
    }
  }
};
const props$1 = {
  props: {
    // 背景颜色（默认transparent）
    bgColor: {
      type: String,
      default: () => defProps.gap.bgColor
    },
    // 分割槽高度，单位px（默认30）
    height: {
      type: [String, Number],
      default: () => defProps.gap.height
    },
    // 与上一个组件的距离
    marginTop: {
      type: [String, Number],
      default: () => defProps.gap.marginTop
    },
    // 与下一个组件的距离
    marginBottom: {
      type: [String, Number],
      default: () => defProps.gap.marginBottom
    }
  }
};
const uGap_vue_vue_type_style_index_0_scoped_72d2fb6e_lang = "";
const _sfc_main$2 = {
  name: "u-gap",
  mixins: [mpMixin, mixin, props$1],
  computed: {
    gapStyle() {
      const style = {
        backgroundColor: this.bgColor,
        height: addUnit(this.height),
        marginTop: addUnit(this.marginTop),
        marginBottom: addUnit(this.marginBottom)
      };
      return deepMerge(style, addStyle(this.customStyle));
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-gap",
    style: normalizeStyle([$options.gapStyle])
  }, null, 8, ["style"]);
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-72d2fb6e"]]);
const props = {
  props: {
    // 操作菜单是否展示 （默认false）
    show: {
      type: Boolean,
      default: () => defProps.actionSheet.show
    },
    // 标题
    title: {
      type: String,
      default: () => defProps.actionSheet.title
    },
    // 选项上方的描述信息
    description: {
      type: String,
      default: () => defProps.actionSheet.description
    },
    // 数据
    actions: {
      type: Array,
      default: () => defProps.actionSheet.actions
    },
    // 取消按钮的文字，不为空时显示按钮
    cancelText: {
      type: String,
      default: () => defProps.actionSheet.cancelText
    },
    // 点击某个菜单项时是否关闭弹窗
    closeOnClickAction: {
      type: Boolean,
      default: () => defProps.actionSheet.closeOnClickAction
    },
    // 处理底部安全区（默认true）
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => defProps.actionSheet.safeAreaInsetBottom
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: () => defProps.actionSheet.openType
    },
    // 点击遮罩是否允许关闭 (默认true)
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.actionSheet.closeOnClickOverlay
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: () => defProps.actionSheet.round
    }
  }
};
const uActionSheet_vue_vue_type_style_index_0_scoped_ad7e8d01_lang = "";
const _sfc_main$1 = {
  name: "u-action-sheet",
  // 一些props参数和methods方法，通过mixin混入，因为其他文件也会用到
  mixins: [openType, button, mixin, props],
  data() {
    return {};
  },
  computed: {
    // 操作项目的样式
    itemStyle() {
      return (index2) => {
        let style = {};
        if (this.actions[index2].color)
          style.color = this.actions[index2].color;
        if (this.actions[index2].fontSize)
          style.fontSize = addUnit(this.actions[index2].fontSize);
        if (this.actions[index2].disabled)
          style.color = "#c0c4cc";
        return style;
      };
    }
  },
  emits: ["close", "select"],
  methods: {
    closeHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    // 点击取消按钮
    cancel() {
      this.$emit("close");
    },
    selectHandler(index2) {
      const item = this.actions[index2];
      if (item && !item.disabled && !item.loading) {
        this.$emit("select", item);
        if (this.closeOnClickAction) {
          this.$emit("close");
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_view = index$g;
  const _component_u_line = resolveEasycom(resolveDynamicComponent("u-line"), __easycom_3$1);
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  const _component_u_gap = resolveEasycom(resolveDynamicComponent("u-gap"), __easycom_5);
  const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
  return openBlock(), createBlock(_component_u_popup, {
    show: _ctx.show,
    mode: "bottom",
    onClose: $options.closeHandler,
    safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
    round: _ctx.round
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-action-sheet" }, {
        default: withCtx(() => [
          _ctx.title ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "u-action-sheet__header"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "u-action-sheet__header__title u-line-1" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "u-action-sheet__header__icon-wrap",
                onClick: withModifiers($options.cancel, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_u_icon, {
                    name: "close",
                    size: "17",
                    color: "#c8c9cc",
                    bold: ""
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _ctx.description ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 1,
            class: "u-action-sheet__description",
            style: normalizeStyle([{
              marginTop: `${_ctx.title && _ctx.description ? 0 : "18px"}`
            }])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ]),
            _: 1
          }, 8, ["style"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.description ? (openBlock(), createBlock(_component_u_line, { key: 0 })) : createCommentVNode("", true),
            createVNode(_component_v_uni_view, { class: "u-action-sheet__item-wrap" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (item, index2) => {
                  return openBlock(), createBlock(_component_v_uni_view, { key: index2 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, {
                        class: "u-action-sheet__item-wrap__item",
                        onClick: withModifiers(($event) => $options.selectHandler(index2), ["stop"]),
                        "hover-class": !item.disabled && !item.loading ? "u-action-sheet--hover" : "",
                        "hover-stay-time": 150
                      }, {
                        default: withCtx(() => [
                          !item.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createVNode(_component_v_uni_text, {
                              class: "u-action-sheet__item-wrap__item__name",
                              style: normalizeStyle([$options.itemStyle(index2)])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["style"]),
                            item.subname ? (openBlock(), createBlock(_component_v_uni_text, {
                              key: 0,
                              class: "u-action-sheet__item-wrap__item__subname"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.subname), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64)) : (openBlock(), createBlock(_component_u_loading_icon, {
                            key: 1,
                            "custom-class": "van-action-sheet__loading",
                            size: "18",
                            mode: "circle"
                          }))
                        ]),
                        _: 2
                      }, 1032, ["onClick", "hover-class"]),
                      index2 !== _ctx.actions.length - 1 ? (openBlock(), createBlock(_component_u_line, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ], true),
          _ctx.cancelText ? (openBlock(), createBlock(_component_u_gap, {
            key: 2,
            bgColor: "#eaeaec",
            height: "6"
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, {
            class: "u-action-sheet__item-wrap__item u-action-sheet__cancel",
            "hover-class": "u-action-sheet--hover"
          }, {
            default: withCtx(() => [
              _ctx.cancelText ? (openBlock(), createBlock(_component_v_uni_text, {
                key: 0,
                onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop", "prevent"])),
                "hover-stay-time": 150,
                class: "u-action-sheet__cancel-text",
                onClick: $options.cancel
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.cancelText), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["show", "onClose", "safeAreaInsetBottom", "round"]);
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-ad7e8d01"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["component", "index", "global"],
  setup(__props, { expose }) {
    const props2 = __props;
    const diyStore = useDiyStore();
    const formData = ref({
      id: 0,
      name: "",
      mobile: "",
      province_id: 0,
      city_id: 0,
      district_id: 0,
      lat: "",
      lng: "",
      address: "",
      address_name: "",
      full_address: "",
      is_default: 0,
      area: ""
    });
    const selectShow = ref(Array(10).fill(false));
    const diyComponent = computed(() => {
      if (diyStore.mode == "decorate") {
        return diyStore.value[props2.index];
      } else {
        return props2.component;
      }
    });
    computed(() => {
      return diyStore.mode === "decorate";
    });
    const pullDownConfirmFn = (columnIndex, option) => {
      diyComponent.value.columnList[columnIndex].value = option.id;
      selectShow.value[columnIndex] = false;
    };
    const groupChange = (columnIndex) => {
      const column = diyComponent.value.columnList[columnIndex];
      if (!column || !column.value)
        return;
      selectShow.value[columnIndex] = false;
    };
    const currentColumn = ref(null);
    const sexSheetShow = ref(false);
    const sexList = computed(() => [
      { name: "男", value: 1 },
      { name: "女", value: 2 }
    ]);
    const updateSex = (e) => {
      if (currentColumn.value) {
        currentColumn.value.value = e.value;
      }
      sexSheetShow.value = false;
    };
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    const maxDate = ref(currentDate.getTime());
    let currentDateTime = new Date();
    const minDate = ref(currentDateTime.getTime());
    const calendarShow = ref(false);
    const show = ref(false);
    computed(() => {
      if (!currentColumn.value || !currentColumn.value.value) {
        return diyComponent.value.placeholder || "请选择日期";
      }
      return getDateFn(currentColumn.value.value, currentColumn.value.dateFormat);
    });
    const confirm = (e) => {
      if (currentColumn.value) {
        currentColumn.value.value = e[0];
      }
      calendarShow.value = false;
    };
    const calendarConfirm = (e) => {
      if (currentColumn.value) {
        currentColumn.value.value = e.value;
      }
      show.value = false;
    };
    const formatter = (day) => {
      timeStampTurnTime(Date.parse(day.date) / 1e3, "year_month_day");
      return day;
    };
    const getDateFn = (data = "", type) => {
      console.log(data, type);
      let timestamp = type == "YYYY-MM-DD HH:mm" ? data : timeTurnTimeStamp(data);
      let date = timestamp > 9999999999 ? new Date(timestamp) : new Date(timestamp * 1e3);
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let day = String(date.getDate()).padStart(2, "0");
      console.log(year);
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      let str = "";
      if (type == "YYYY年M月D日") {
        str = `${year}年${month}月${day}日`;
      } else if (type == "YYYY-MM-DD") {
        str = `${year}-${month}-${day}`;
      } else if (type == "YYYY/MM/DD") {
        str = `${year}/${month}/${day}`;
      } else if (type == "YYYY-MM-DD HH:mm") {
        str = `${year}-${month}-${day} ${hours}:${minutes}`;
      }
      return str;
    };
    const areaRef = ref();
    const isSelectAddress = ref(false);
    const areaSelectComplete = (event) => {
      if (isSelectAddress.value && (formData.value.province_id == event.province.id || formData.value.city_id != event.city.id || formData.value.district_id != event.district.id)) {
        formData.value.lat = "";
        formData.value.lng = "";
      }
      formData.value.province_id = event.province.id || 0;
      formData.value.city_id = event.city.id || 0;
      formData.value.district_id = event.district.id || 0;
      formData.value.area = `${event.province.name || ""}${event.city.name || ""}${event.district.name || ""}`;
      currentColumn.value.value = formData.value.area;
      isSelectAddress.value = false;
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
    onMounted(() => {
      refresh();
      if (diyStore.mode == "decorate") {
        watch(
          () => diyComponent.value,
          (newValue, oldValue) => {
            if (newValue && newValue.componentName == "FormTable") {
              refresh();
            }
          }
        );
      }
      console.log(diyComponent.value);
    });
    const refresh = () => {
    };
    const verify = () => {
      const res = { code: true, message: "" };
      return res;
    };
    const reset = () => {
    };
    expose({
      verify,
      reset
    });
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_u_radio = resolveEasycom(resolveDynamicComponent("u-radio"), __easycom_2);
      const _component_u_radio_group = resolveEasycom(resolveDynamicComponent("u-radio-group"), __easycom_3$2);
      const _component_v_uni_scroll_view = ScrollView;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      const _component_u_action_sheet = resolveEasycom(resolveDynamicComponent("u-action-sheet"), __easycom_6);
      const _component_area_select = resolveEasycom(resolveDynamicComponent("area-select"), __easycom_7$1);
      const _component_u_calendar = resolveEasycom(resolveDynamicComponent("u-calendar"), __easycom_8);
      const _component_u_datetime_picker = resolveEasycom(resolveDynamicComponent("u-datetime-picker"), __easycom_2$1);
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(unref(warpCss)),
        class: "form-item-frame"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "relative base-layout-one" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "p-[10rpx] flex items-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "w-[27%] mr-[10rpx] flex items-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, {
                        class: "text-overflow-ellipsis",
                        style: normalizeStyle({ "color": unref(diyComponent).textColor, "font-size": unref(diyComponent).fontSize * 2 + "rpx", "font-weight": unref(diyComponent).fontWeight })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).field.name), 1)
                        ]),
                        _: 1
                      }, 8, ["style"]),
                      createVNode(_component_v_uni_text, { class: "text-[#ec0003]" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(diyComponent).field.required ? "*" : ""), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diyComponent).columnList, (column, columnIndex) => {
            return openBlock(), createBlock(_component_u_popup, {
              key: "popup-" + columnIndex,
              show: selectShow.value[columnIndex],
              mode: "bottom",
              onClose: ($event) => selectShow.value[columnIndex] = false
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, { class: "p-[15rpx]" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_scroll_view, {
                      "scroll-y": "true",
                      class: "max-h-[450rpx] px-[14rpx] box-border"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_u_radio_group, {
                          modelValue: column.value,
                          "onUpdate:modelValue": ($event) => column.value = $event,
                          placement: "column",
                          onChange: ($event) => groupChange(columnIndex),
                          iconPlacement: "right"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(column.options, (option, optionIndex) => {
                              return openBlock(), createBlock(_component_v_uni_view, {
                                class: "border-solid border-[0] border-b-[2rpx] border-[#e6e6e6] py-[20rpx]",
                                key: optionIndex,
                                onClick: withModifiers(($event) => pullDownConfirmFn(columnIndex, option), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_u_radio, {
                                    activeColor: "var(--primary-color)",
                                    labelSize: unref(diyComponent).fontSize * 2 + "rpx",
                                    labelColor: unref(diyComponent).textColor,
                                    style: { "width": "100%" },
                                    label: option.label,
                                    name: option.id
                                  }, null, 8, ["labelSize", "labelColor", "label", "name"])
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["show", "onClose"]);
          }), 128)),
          createVNode(_component_u_action_sheet, {
            actions: unref(sexList),
            show: sexSheetShow.value,
            closeOnClickOverlay: true,
            safeAreaInsetBottom: true,
            onClose: _cache[0] || (_cache[0] = ($event) => sexSheetShow.value = false),
            onSelect: updateSex
          }, null, 8, ["actions", "show"]),
          createVNode(_component_area_select, {
            ref_key: "areaRef",
            ref: areaRef,
            onComplete: areaSelectComplete,
            "area-id": formData.value.district_id
          }, null, 8, ["area-id"]),
          createVNode(_component_v_uni_view, { class: "calendar-wrap" }, {
            default: withCtx(() => [
              createVNode(_component_u_calendar, {
                show: calendarShow.value,
                mode: "single",
                onConfirm: confirm,
                onClose: _cache[1] || (_cache[1] = ($event) => calendarShow.value = false),
                closeOnClickOverlay: "true",
                formatter,
                confirmDisabledText: "禁止选择",
                color: "var(--primary-color)",
                ref: "calendar",
                maxDate: maxDate.value
              }, null, 8, ["show", "maxDate"]),
              createVNode(_component_u_datetime_picker, {
                show: show.value,
                mode: "datetime",
                onCancel: _cache[2] || (_cache[2] = ($event) => show.value = false),
                closeOnClickOverlay: "true",
                onConfirm: calendarConfirm,
                onClose: _cache[3] || (_cache[3] = ($event) => show.value = false),
                minDate: minDate.value
              }, null, 8, ["show", "minDate"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9ba67640_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ba67640"]]);
export {
  index as default
};
