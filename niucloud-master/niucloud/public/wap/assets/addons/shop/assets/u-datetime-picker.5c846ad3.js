/* __addonChunkCssInjected:0fd00ea6 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("0fd00ea6",".addon-wrap-0fd00ea6 .u-empty,.addon-wrap-0fd00ea6 .u-empty__wrap,.addon-wrap-0fd00ea6 .u-tabs,.addon-wrap-0fd00ea6 .u-tabs__wrapper,.addon-wrap-0fd00ea6 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-0fd00ea6 .u-tabs__wrapper__scroll-view,.addon-wrap-0fd00ea6 .u-tabs__wrapper__nav,.addon-wrap-0fd00ea6 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-0fd00ea6 .u-toolbar{height:42px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.addon-wrap-0fd00ea6 .u-toolbar__wrapper__cancel{color:#909193;font-size:15px;padding:0 15px}.addon-wrap-0fd00ea6 .u-toolbar__title{color:#303133;padding:0 1.875rem;font-size:16px;flex:1;text-align:center}.addon-wrap-0fd00ea6 .u-toolbar__wrapper__confirm{color:var(--primary-color);font-size:15px;padding:0 15px}");
import { a as index$i, i as index$g, P as PickerViewColumn, h as PickerView, s as showToast } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_0$1 } from "./u-input.854f14a8.js";
import { openBlock, createBlock, withModifiers, withCtx, createVNode, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "./picker-view.e9d3c544.js";
import "./resize-sensor.8ba09891.js";
import { _ as __easycom_4 } from "./u-loading-icon.8e9029d5.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { b as addUnit, t as test, v as deepClone, s as sleep, x as padZero, l as error, r as range } from "./route.c60967f7.js";
import { d as dayjs } from "./index.1599740b.js";
const props$2 = {
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: () => defProps.toolbar.show
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: () => defProps.toolbar.cancelText
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: () => defProps.toolbar.confirmText
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: () => defProps.toolbar.cancelColor
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: () => defProps.toolbar.confirmColor
    },
    // 标题文字
    title: {
      type: String,
      default: () => defProps.toolbar.title
    }
  }
};
const uToolbar_vue_vue_type_style_index_0_scoped_0fd00ea6_lang = "";
const _sfc_main$2 = {
  name: "u-toolbar",
  mixins: [mpMixin, mixin, props$2],
  emits: ["confirm", "cancel"],
  methods: {
    // 点击取消按钮
    cancel() {
      this.$emit("cancel");
    },
    // 点击确定按钮
    confirm() {
      this.$emit("confirm");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return _ctx.show ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: "u-toolbar",
    onTouchmove: withModifiers(_ctx.noop, ["stop", "prevent"])
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: "u-toolbar__cancel__wrapper",
        "hover-class": "u-hover-class"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_text, {
            class: "u-toolbar__wrapper__cancel",
            onClick: $options.cancel,
            style: normalizeStyle({
              color: _ctx.cancelColor
            })
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.cancelText), 1)
            ]),
            _: 1
          }, 8, ["onClick", "style"])
        ]),
        _: 1
      }),
      _ctx.title ? (openBlock(), createBlock(_component_v_uni_text, {
        key: 0,
        class: "u-toolbar__title u-line-1"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(_component_v_uni_view, {
        class: "u-toolbar__confirm__wrapper",
        "hover-class": "u-hover-class"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_text, {
            class: "u-toolbar__wrapper__confirm",
            onClick: $options.confirm,
            style: normalizeStyle({
              color: _ctx.confirmColor
            })
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.confirmText), 1)
            ]),
            _: 1
          }, 8, ["onClick", "style"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onTouchmove"])) : createCommentVNode("", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-0fd00ea6"]]);
const props$1 = {
  props: {
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: () => defProps.picker.show
    },
    // 弹出的方向，可选值为 top bottom right left center
    popupMode: {
      type: String,
      default: () => defProps.picker.popupMode
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: () => defProps.picker.showToolbar
    },
    // 顶部标题
    title: {
      type: String,
      default: () => defProps.picker.title
    },
    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: () => defProps.picker.columns
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: () => defProps.picker.loading
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: () => defProps.picker.itemHeight
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: () => defProps.picker.cancelText
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: () => defProps.picker.confirmText
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: () => defProps.picker.cancelColor
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: () => defProps.picker.confirmColor
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: () => defProps.picker.visibleItemCount
    },
    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: () => defProps.picker.keyName
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.picker.closeOnClickOverlay
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: () => defProps.picker.defaultIndex
    },
    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: () => defProps.picker.immediateChange
    }
  }
};
const uPicker_vue_vue_type_style_index_0_scoped_ab1af1cc_lang = "";
const _sfc_main$1 = {
  name: "u-picker",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      // 上一次选择的列索引
      lastIndex: [],
      // 索引值 ，对应picker-view的value
      innerIndex: [],
      // 各列的值
      innerColumns: [],
      // 上一次的变化列索引
      columnIndex: 0
    };
  },
  watch: {
    // 监听默认索引的变化，重新设置对应的值
    defaultIndex: {
      immediate: true,
      handler(n) {
        this.setIndexs(n, true);
      }
    },
    // 监听columns参数的变化
    columns: {
      immediate: true,
      deep: true,
      handler(n) {
        this.setColumns(n);
      }
    }
  },
  emits: ["close", "cancel", "confirm", "change"],
  methods: {
    addUnit,
    testArray: test.array,
    // 获取item需要显示的文字，判别为对象还是文本
    getItemText(item) {
      if (test.object(item)) {
        return item[this.keyName];
      } else {
        return item;
      }
    },
    // 关闭选择器
    closeHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      this.$emit("cancel");
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("confirm", {
        indexs: this.innerIndex,
        value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
        values: this.innerColumns
      });
    },
    // 选择器某一列的数据发生变化时触发
    changeHandler(e) {
      const {
        value
      } = e.detail;
      let index = 0, columnIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (this.lastIndex[i] || 0)) {
          columnIndex = i;
          index = item;
          break;
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      this.setLastIndex(value);
      this.setIndexs(value);
      this.$emit("change", {
        // 微信小程序不能传递this，会因为循环引用而报错
        // picker: this,
        value: this.innerColumns.map((item, index2) => item[value[index2]]),
        index,
        indexs: value,
        // values为当前变化列的数组内容
        values,
        columnIndex
      });
    },
    // 设置index索引，此方法可被外部调用设置
    setIndexs(index, setLastIndex) {
      this.innerIndex = deepClone(index);
      if (setLastIndex) {
        this.setLastIndex(index);
      }
    },
    // 记录上一次的各列索引位置
    setLastIndex(index) {
      this.lastIndex = deepClone(index);
    },
    // 设置对应列选项的所有值
    setColumnValues(columnIndex, values) {
      this.innerColumns.splice(columnIndex, 1, values);
      this.setLastIndex(this.innerIndex.slice(0, columnIndex));
      let tmpIndex = deepClone(this.innerIndex);
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      this.setIndexs(tmpIndex);
    },
    // 获取对应列的所有选项
    getColumnValues(columnIndex) {
      (async () => {
        await sleep();
      })();
      return this.innerColumns[columnIndex];
    },
    // 设置整体各列的columns的值
    setColumns(columns) {
      this.innerColumns = deepClone(columns);
      if (this.innerIndex.length === 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    // 获取各列选中值对应的索引
    getIndexs() {
      return this.innerIndex;
    },
    // 获取各列选中的值
    getValues() {
      (async () => {
        await sleep();
      })();
      return this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_toolbar = resolveEasycom(resolveDynamicComponent("u-toolbar"), __easycom_0);
  const _component_v_uni_view = index$g;
  const _component_v_uni_picker_view_column = PickerViewColumn;
  const _component_v_uni_picker_view = PickerView;
  const _component_u_loading_icon = resolveEasycom(resolveDynamicComponent("u-loading-icon"), __easycom_4);
  const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
  return openBlock(), createBlock(_component_u_popup, {
    show: _ctx.show,
    mode: _ctx.popupMode,
    onClose: $options.closeHandler
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-picker" }, {
        default: withCtx(() => [
          _ctx.showToolbar ? (openBlock(), createBlock(_component_u_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : createCommentVNode("", true),
          createVNode(_component_v_uni_picker_view, {
            class: "u-picker__view",
            indicatorStyle: `height: ${$options.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: normalizeStyle({
              height: `${$options.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`
            }),
            onChange: $options.changeHandler
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.innerColumns, (item, index) => {
                return openBlock(), createBlock(_component_v_uni_picker_view_column, {
                  key: index,
                  class: "u-picker__view__column"
                }, {
                  default: withCtx(() => [
                    $options.testArray(item) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item, (item1, index1) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        class: "u-picker__view__column__item u-line-1",
                        key: index1,
                        style: normalizeStyle({
                          height: $options.addUnit(_ctx.itemHeight),
                          lineHeight: $options.addUnit(_ctx.itemHeight),
                          fontWeight: index1 === $data.innerIndex[index] ? "bold" : "normal",
                          display: "block"
                        })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($options.getItemText(item1)), 1)
                        ]),
                        _: 2
                      }, 1032, ["style"]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["indicatorStyle", "value", "immediateChange", "style", "onChange"]),
          _ctx.loading ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "u-picker--loading"
          }, {
            default: withCtx(() => [
              createVNode(_component_u_loading_icon, { mode: "circle" })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show", "mode", "onClose"]);
}
const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ab1af1cc"]]);
const props = {
  props: {
    // 是否显示input
    hasInput: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => "请选择"
    },
    format: {
      type: String,
      default: () => ""
    },
    // 是否打开组件
    show: {
      type: Boolean,
      default: () => defProps.datetimePicker.show
    },
    // 弹出的方向，可选值为 top bottom right left center
    popupMode: {
      type: String,
      default: () => defProps.picker.popupMode
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: () => defProps.datetimePicker.showToolbar
    },
    // 绑定值
    modelValue: {
      type: [String, Number],
      default: () => defProps.datetimePicker.value
    },
    // 顶部标题
    title: {
      type: String,
      default: () => defProps.datetimePicker.title
    },
    // 展示格式，mode=date为日期选择，mode=time为时间选择，mode=year-month为年月选择，mode=datetime为日期时间选择
    mode: {
      type: String,
      default: () => defProps.datetimePicker.mode
    },
    // 可选的最大时间
    maxDate: {
      type: Number,
      // 最大默认值为后10年
      default: () => defProps.datetimePicker.maxDate
    },
    // 可选的最小时间
    minDate: {
      type: Number,
      // 最小默认值为前10年
      default: () => defProps.datetimePicker.minDate
    },
    // 可选的最小小时，仅mode=time有效
    minHour: {
      type: Number,
      default: () => defProps.datetimePicker.minHour
    },
    // 可选的最大小时，仅mode=time有效
    maxHour: {
      type: Number,
      default: () => defProps.datetimePicker.maxHour
    },
    // 可选的最小分钟，仅mode=time有效
    minMinute: {
      type: Number,
      default: () => defProps.datetimePicker.minMinute
    },
    // 可选的最大分钟，仅mode=time有效
    maxMinute: {
      type: Number,
      default: () => defProps.datetimePicker.maxMinute
    },
    // 选项过滤函数
    filter: {
      type: [Function, null],
      default: () => defProps.datetimePicker.filter
    },
    // 选项格式化函数
    formatter: {
      type: [Function, null],
      default: () => defProps.datetimePicker.formatter
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: () => defProps.datetimePicker.loading
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: () => defProps.datetimePicker.itemHeight
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: () => defProps.datetimePicker.cancelText
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: () => defProps.datetimePicker.confirmText
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: () => defProps.datetimePicker.cancelColor
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: () => defProps.datetimePicker.confirmColor
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: () => defProps.datetimePicker.visibleItemCount
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: () => defProps.datetimePicker.closeOnClickOverlay
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: () => defProps.datetimePicker.defaultIndex
    }
  }
};
const uDatetimePicker_vue_vue_type_style_index_0_scoped_d603ed3a_lang = "";
function times(n, iteratee) {
  let index = -1;
  const result = Array(n < 0 ? 0 : n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
const _sfc_main = {
  name: "datetime-picker",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 原来的日期选择器不方便，这里增加一个hasInput选项支持类似element的自带输入框的功能。
      inputValue: "",
      // 表单显示值
      showByClickInput: false,
      // 是否在hasInput模式下显示日期选择弹唱
      columns: [],
      innerDefaultIndex: [],
      innerFormatter: (type, value) => value
    };
  },
  watch: {
    show(newValue, oldValue) {
      if (newValue) {
        this.updateColumnValue(this.innerValue);
      }
    },
    modelValue(newValue) {
      this.init();
    },
    propsChange() {
      this.init();
    }
  },
  computed: {
    // 如果以下这些变量发生了变化，意味着需要重新初始化各列的值
    propsChange() {
      return [this.mode, this.maxDate, this.minDate, this.minHour, this.maxHour, this.minMinute, this.maxMinute, this.filter];
    }
  },
  mounted() {
    this.init();
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  methods: {
    getInputValue(newValue) {
      if (newValue == "" || !newValue || newValue == void 0) {
        this.inputValue = "";
        return;
      }
      if (this.mode == "time") {
        this.inputValue = newValue;
      } else {
        if (this.format) {
          this.inputValue = dayjs(newValue).format(this.format);
        } else {
          let format = "";
          switch (this.mode) {
            case "date":
              format = "YYYY-MM-DD";
              break;
            case "year-month":
              format = "YYYY-MM";
              break;
            case "datetime":
              format = "YYYY-MM-DD HH:mm";
              break;
            case "time":
              format = "HH:mm";
              break;
          }
          this.inputValue = dayjs(newValue).format(format);
        }
      }
    },
    init() {
      this.innerValue = this.correctValue(this.modelValue);
      this.updateColumnValue(this.innerValue);
      this.getInputValue(this.innerValue);
    },
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // 关闭选择器
    close() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("cancel");
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("confirm", {
        value: this.innerValue,
        mode: this.mode
      });
      this.$emit("update:modelValue", this.innerValue);
      if (this.hasInput) {
        this.getInputValue(this.innerValue);
        this.showByClickInput = false;
      }
    },
    //用正则截取输出值,当出现多组数字时,抛出错误
    intercept(e, type) {
      let judge = e.match(/\d+/g);
      if (judge.length > 1) {
        return 0;
      } else if (type && judge[0].length == 4) {
        return judge[0];
      } else if (judge[0].length > 2) {
        return 0;
      } else {
        return judge[0];
      }
    },
    // 列发生变化时触发
    change(e) {
      const { indexs, values } = e;
      let selectValue = "";
      if (this.mode === "time") {
        selectValue = `${this.intercept(values[0][indexs[0]])}:${this.intercept(values[1][indexs[1]])}`;
      } else {
        const year = parseInt(this.intercept(values[0][indexs[0]], "year"));
        const month = parseInt(this.intercept(values[1][indexs[1]]));
        let date = parseInt(values[2] ? this.intercept(values[2][indexs[2]]) : 1);
        let hour = 0, minute = 0;
        const maxDate = dayjs(`${year}-${month}`).daysInMonth();
        if (this.mode === "year-month") {
          date = 1;
        }
        date = Math.min(maxDate, date);
        if (this.mode === "datetime") {
          hour = parseInt(this.intercept(values[3][indexs[3]]));
          minute = parseInt(this.intercept(values[4][indexs[4]]));
        }
        selectValue = Number(new Date(year, month - 1, date, hour, minute));
      }
      selectValue = this.correctValue(selectValue);
      this.innerValue = selectValue;
      this.updateColumnValue(selectValue);
      this.$emit("change", {
        value: selectValue,
        // 微信小程序不能传递this实例，会因为循环引用而报错
        // picker: this.$refs.picker,
        mode: this.mode
      });
    },
    // 更新各列的值，进行补0、格式化等操作
    updateColumnValue(value) {
      this.innerValue = value;
      this.updateColumns();
      setTimeout(() => {
        this.updateIndexs(value);
      }, 0);
    },
    // 更新索引
    updateIndexs(value) {
      let values = [];
      const formatter = this.formatter || this.innerFormatter;
      if (this.mode === "time") {
        const timeArr = value.split(":");
        values = [formatter("hour", timeArr[0]), formatter("minute", timeArr[1])];
      } else {
        values = [
          formatter("year", `${dayjs(value).year()}`),
          // 月份补0
          formatter("month", padZero(dayjs(value).month() + 1))
        ];
        if (this.mode === "date") {
          values.push(formatter("day", padZero(dayjs(value).date())));
        }
        if (this.mode === "datetime") {
          values.push(formatter("day", padZero(dayjs(value).date())), formatter("hour", padZero(dayjs(value).hour())), formatter("minute", padZero(dayjs(value).minute())));
        }
      }
      const indexs = this.columns.map((column, index) => {
        return Math.max(0, column.findIndex((item) => item === values[index]));
      });
      this.innerDefaultIndex = indexs;
    },
    // 更新各列的值
    updateColumns() {
      const formatter = this.formatter || this.innerFormatter;
      const results = this.getOriginColumns().map((column) => column.values.map((value) => formatter(column.type, value)));
      this.columns = results;
    },
    getOriginColumns() {
      const results = this.getRanges().map(({ type, range: range2 }) => {
        let values = times(range2[1] - range2[0] + 1, (index) => {
          let value = range2[0] + index;
          value = type === "year" ? `${value}` : padZero(value);
          return value;
        });
        if (this.filter) {
          values = this.filter(type, values);
          if (!values || values && values.length == 0) {
            showToast({
              title: "日期filter结果不能为空",
              icon: "error",
              mask: true
            });
          }
        }
        return { type, values };
      });
      return results;
    },
    // 通过最大值和最小值生成数组
    generateArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    // 得出合法的时间
    correctValue(value) {
      const isDateMode = this.mode !== "time";
      if (isDateMode && !test.date(value)) {
        value = this.minDate;
      } else if (!isDateMode && !value) {
        value = `${padZero(this.minHour)}:${padZero(this.minMinute)}`;
      }
      if (!isDateMode) {
        if (String(value).indexOf(":") === -1)
          return error();
        let [hour, minute] = value.split(":");
        hour = padZero(range(this.minHour, this.maxHour, Number(hour)));
        minute = padZero(range(this.minMinute, this.maxMinute, Number(minute)));
        return `${hour}:${minute}`;
      } else {
        value = dayjs(value).isBefore(dayjs(this.minDate)) ? this.minDate : value;
        value = dayjs(value).isAfter(dayjs(this.maxDate)) ? this.maxDate : value;
        return value;
      }
    },
    // 获取每列的最大和最小值
    getRanges() {
      if (this.mode === "time") {
        return [
          {
            type: "hour",
            range: [this.minHour, this.maxHour]
          },
          {
            type: "minute",
            range: [this.minMinute, this.maxMinute]
          }
        ];
      }
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary("max", this.innerValue);
      const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary("min", this.innerValue);
      const result = [
        {
          type: "year",
          range: [minYear, maxYear]
        },
        {
          type: "month",
          range: [minMonth, maxMonth]
        },
        {
          type: "day",
          range: [minDate, maxDate]
        },
        {
          type: "hour",
          range: [minHour, maxHour]
        },
        {
          type: "minute",
          range: [minMinute, maxMinute]
        }
      ];
      if (this.mode === "date")
        result.splice(3, 2);
      if (this.mode === "year-month")
        result.splice(2, 3);
      return result;
    },
    // 根据minDate、maxDate、minHour、maxHour等边界值，判断各列的开始和结束边界值
    getBoundary(type, innerValue) {
      const value = new Date(innerValue);
      const boundary = new Date(this[`${type}Date`]);
      const year = dayjs(boundary).year();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;
      if (type === "max") {
        month = 12;
        date = dayjs(value).daysInMonth();
        hour = 23;
        minute = 59;
      }
      if (dayjs(value).year() === year) {
        month = dayjs(boundary).month() + 1;
        if (dayjs(value).month() + 1 === month) {
          date = dayjs(boundary).date();
          if (dayjs(value).date() === date) {
            hour = dayjs(boundary).hour();
            if (dayjs(value).hour() === hour) {
              minute = dayjs(boundary).minute();
            }
          }
        }
      }
      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_input = resolveEasycom(resolveDynamicComponent("u-input"), __easycom_0$1);
  const _component_v_uni_view = index$g;
  const _component_u_picker = resolveEasycom(resolveDynamicComponent("u-picker"), __easycom_2$1);
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.hasInput ? (openBlock(), createBlock(_component_v_uni_view, {
      key: 0,
      class: "u-datetime-picker"
    }, {
      default: withCtx(() => [
        createVNode(_component_u_input, {
          placeholder: _ctx.placeholder,
          border: "surround",
          modelValue: $data.inputValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputValue = $event),
          onClick: _cache[1] || (_cache[1] = ($event) => $data.showByClickInput = !$data.showByClickInput)
        }, null, 8, ["placeholder", "modelValue"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createVNode(_component_u_picker, {
      ref: "picker",
      show: _ctx.show || _ctx.hasInput && $data.showByClickInput,
      popupMode: _ctx.popupMode,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      columns: $data.columns,
      title: _ctx.title,
      itemHeight: _ctx.itemHeight,
      showToolbar: _ctx.showToolbar,
      visibleItemCount: _ctx.visibleItemCount,
      defaultIndex: $data.innerDefaultIndex,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      onClose: $options.close,
      onCancel: $options.cancel,
      onConfirm: $options.confirm,
      onChange: $options.change
    }, null, 8, ["show", "popupMode", "closeOnClickOverlay", "columns", "title", "itemHeight", "showToolbar", "visibleItemCount", "defaultIndex", "cancelText", "confirmText", "cancelColor", "confirmColor", "onClose", "onCancel", "onConfirm", "onChange"])
  ], 64);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d603ed3a"]]);
export {
  __easycom_2 as _
};
