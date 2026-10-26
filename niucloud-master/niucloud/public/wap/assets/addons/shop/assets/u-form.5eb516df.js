/* __addonChunkCssInjected:8f4b359a */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("8f4b359a",".addon-wrap-8f4b359a .u-empty,.addon-wrap-8f4b359a .u-empty__wrap,.addon-wrap-8f4b359a .u-tabs,.addon-wrap-8f4b359a .u-tabs__wrapper,.addon-wrap-8f4b359a .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-8f4b359a .u-tabs__wrapper__scroll-view,.addon-wrap-8f4b359a .u-tabs__wrapper__nav,.addon-wrap-8f4b359a .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-8f4b359a .u-form-item{display:flex;flex-direction:column;font-size:14px;color:#303133}.addon-wrap-8f4b359a .u-form-item__body{display:flex;flex-direction:row;padding:10px 0}.addon-wrap-8f4b359a .u-form-item__body__left{display:flex;flex-direction:row;align-items:center}.addon-wrap-8f4b359a .u-form-item__body__left__content{position:relative;display:flex;flex-direction:row;align-items:center;padding-right:.3125rem;flex:1}.addon-wrap-8f4b359a .u-form-item__body__left__content__icon{margin-right:.25rem}.addon-wrap-8f4b359a .u-form-item__body__left__content__required{position:absolute;left:-9px;color:#f56c6c;line-height:20px;font-size:20px;top:3px}.addon-wrap-8f4b359a .u-form-item__body__left__content__label{display:flex;flex-direction:row;align-items:center;flex:1;color:#303133;font-size:15px}.addon-wrap-8f4b359a .u-form-item__body__right{flex:1}.addon-wrap-8f4b359a .u-form-item__body__right__content{display:flex;flex-direction:row;align-items:center;flex:1}.addon-wrap-8f4b359a .u-form-item__body__right__content__slot{flex:1;display:flex;flex-direction:row;align-items:center}.addon-wrap-8f4b359a .u-form-item__body__right__content__icon{margin-left:.3125rem;color:#c0c4cc;font-size:.9375rem}.addon-wrap-8f4b359a .u-form-item__body__right__message{font-size:12px;line-height:12px;color:#f56c6c}");
import "./text.99ce2b32.js";
import { a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, normalizeStyle, renderSlot, createTextVNode, createCommentVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_3$1 } from "./u-line.46235f11.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { n as color, a as addStyle, b as addUnit, q as getProperty, u as setProperty, v as deepClone, t as test, j as toast } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props$1 = {
  props: {
    // input的label提示语
    label: {
      type: String,
      default: () => defProps.formItem.label
    },
    // 绑定的值
    prop: {
      type: String,
      default: () => defProps.formItem.prop
    },
    // 绑定的规则
    rule: {
      type: String,
      default: () => defProps.formItem.rule
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [String, Boolean],
      default: () => defProps.formItem.borderBottom
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: () => defProps.formItem.labelPosition
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: () => defProps.formItem.labelWidth
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: () => defProps.formItem.rightIcon
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: () => defProps.formItem.leftIcon
    },
    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: () => defProps.formItem.required
    },
    leftIconStyle: {
      type: [String, Object],
      default: () => defProps.formItem.leftIconStyle
    }
  }
};
const uFormItem_vue_vue_type_style_index_0_scoped_8f4b359a_lang = "";
const _sfc_main$1 = {
  name: "u-form-item",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      // 错误提示语
      message: "",
      parentData: {
        // 提示文本的位置
        labelPosition: "left",
        // 提示文本对齐方式
        labelAlign: "left",
        // 提示文本的样式
        labelStyle: {},
        // 提示文本的宽度
        labelWidth: 45,
        // 错误提示方式
        errorType: "message"
      },
      color
    };
  },
  // 组件创建完成时，将当前实例保存到u-form中
  computed: {
    propsLine() {
      return defProps.line;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["click"],
  methods: {
    addStyle,
    addUnit,
    init() {
      this.updateParentData();
      if (!this.parent)
        ;
    },
    // 获取父组件的参数
    updateParentData() {
      this.getParentData("u-form");
    },
    // 移除u-form-item的校验结果
    clearValidate() {
      this.message = null;
    },
    // 清空当前的组件的校验结果，并重置为初始值
    resetField() {
      const value = getProperty(this.parent.originalModel, this.prop);
      setProperty(this.parent.model, this.prop, value);
      this.message = null;
    },
    // 点击组件
    clickHandler() {
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_v_uni_view = index$g;
  const _component_u_line = resolveEasycom(resolveDynamicComponent("u-line"), __easycom_3$1);
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-form-item" }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, {
        class: "u-form-item__body",
        onClick: $options.clickHandler,
        style: normalizeStyle([$options.addStyle(_ctx.customStyle), {
          flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
        }])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "label", {}, () => [
            _ctx.required || _ctx.leftIcon || _ctx.label ? (openBlock(), createBlock(_component_v_uni_view, {
              key: 0,
              class: "u-form-item__body__left",
              style: normalizeStyle({
                width: $options.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
                marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
              })
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, { class: "u-form-item__body__left__content" }, {
                  default: withCtx(() => [
                    _ctx.required ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 0,
                      class: "u-form-item__body__left__content__required"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("*")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _ctx.leftIcon ? (openBlock(), createBlock(_component_v_uni_view, {
                      key: 1,
                      class: "u-form-item__body__left__content__icon"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          name: _ctx.leftIcon,
                          "custom-style": _ctx.leftIconStyle
                        }, null, 8, ["name", "custom-style"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_v_uni_text, {
                      class: "u-form-item__body__left__content__label",
                      style: normalizeStyle([$data.parentData.labelStyle, {
                        justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                      }])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["style"])) : createCommentVNode("", true)
          ], true),
          createVNode(_component_v_uni_view, { class: "u-form-item__body__right" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "u-form-item__body__right__content" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "u-form-item__body__right__content__slot" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  _ctx.$slots.right ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "item__body__right__content__icon"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "right", {}, void 0, true)
                    ]),
                    _: 3
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["onClick", "style"]),
      renderSlot(_ctx.$slots, "error", {}, () => [
        !!$data.message && $data.parentData.errorType === "message" ? (openBlock(), createBlock(_component_v_uni_text, {
          key: 0,
          class: "u-form-item__body__right__message",
          style: normalizeStyle({
            marginLeft: $options.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
          })
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($data.message), 1)
          ]),
          _: 1
        }, 8, ["style"])) : createCommentVNode("", true)
      ], true),
      _ctx.borderBottom ? (openBlock(), createBlock(_component_u_line, {
        key: 0,
        color: $data.message && $data.parentData.errorType === "border-bottom" ? $data.color.error : $options.propsLine.color,
        customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8f4b359a"]]);
const props = {
  props: {
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: () => defProps.form.model
    },
    // 验证规则
    rules: {
      type: [Object, Function, Array],
      default: () => defProps.form.rules
    },
    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: () => defProps.form.errorType
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: () => defProps.form.borderBottom
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: () => defProps.form.labelPosition
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: () => defProps.form.labelWidth
    },
    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: () => defProps.form.labelAlign
    },
    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: () => defProps.form.labelStyle
    }
  }
};
const formatRegExp = /%[sdj%]/g;
let warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type2, errors) {
    if (typeof console !== "undefined" && console.warn) {
      if (errors.every((e) => typeof e === "string")) {
        console.warn(type2, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  const fields = {};
  errors.forEach((error) => {
    const { field } = error;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  let i = 1;
  const f = args[0];
  const len = args.length;
  if (typeof f === "function") {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === "string") {
    let str = String(f).replace(formatRegExp, (x) => {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    for (let arg = args[i]; i < len; arg = args[++i]) {
      str += ` ${arg}`;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type2) {
  return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
}
function isEmptyValue(value, type2) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type2 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type2) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  const results = [];
  let total = 0;
  const arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach((a) => {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  let index = 0;
  const arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    const original = index;
    index += 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  const ret = [];
  Object.keys(objArr).forEach((k) => {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    const _pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        callback(errors);
        return errors.length ? reject({
          errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      const flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending.catch((e) => e);
    return _pending;
  }
  let firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  const objArrKeys = Object.keys(objArr);
  const objArrLength = objArrKeys.length;
  let total = 0;
  const results = [];
  const pending = new Promise((resolve, reject) => {
    const next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach((key) => {
      const arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch((e) => e);
  return pending;
}
function complementError(rule) {
  return function(oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (const s in source) {
      if (source.hasOwnProperty(s)) {
        const value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = { ...target[s], ...value };
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
function required(rule, value, source, errors, options, type2) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
const pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
    "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
    "i"
  ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return /^(-)?\d+$/.test(value);
  },
  float: function float(value) {
    return /^(-)?\d+(\.\d+)?$/.test(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof +value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === "string" && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern.hex);
  }
};
function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required(rule, value, source, errors, options);
    return;
  }
  const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  const ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
function range(rule, value, source, errors, options) {
  const len = typeof rule.len === "number";
  const min = typeof rule.min === "number";
  const max = typeof rule.max === "number";
  const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  let val = value;
  let key = null;
  const num = typeof value === "number";
  const str = typeof value === "string";
  const arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
const ENUM = "enum";
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
}
function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
const rules = {
  required,
  whitespace,
  type,
  range,
  enum: enumerable,
  pattern: pattern$1
};
function string(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}
function method2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function number2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function _boolean(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function regexp2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function integer2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function floatFn(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function array2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "array") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (!isEmptyValue(value, "array")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function object2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
const ENUM$1 = "enum";
function enumerable$1(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function pattern$2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date2(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      let dateObject;
      if (typeof value === "number") {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  const errors = [];
  const type2 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type2);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  const ruleType = rule.type;
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function any(rule, value, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
const validators = {
  string,
  method: method2,
  number: number2,
  boolean: _boolean,
  regexp: regexp2,
  integer: integer2,
  float: floatFn,
  array: array2,
  object: object2,
  enum: enumerable$1,
  pattern: pattern$2,
  date: date2,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any
};
function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      const cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
const messages = newMessages();
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules2) {
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    let z;
    let item;
    for (z in rules2) {
      if (rules2.hasOwnProperty(z)) {
        item = rules2[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    const _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    let source = source_;
    let options = o;
    let callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      let i;
      let errors = [];
      let fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          let _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      let messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    let arr;
    let value;
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach((z) => {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach((r) => {
        let rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = { ...source };
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = { ...rule };
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    const errorFields = {};
    return asyncMap(series, options, (data, doIt) => {
      const { rule } = data;
      let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return { ...schema, fullField: `${rule.fullField}.${key}` };
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        let errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning("async-validator:", errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          let fieldsSchema = {};
          if (rule.defaultField) {
            for (const k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = { ...fieldsSchema, ...data.rule.fields };
          for (const f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              const fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          const schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, (errs) => {
            const finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      let res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || `${rule.field} fails`);
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(() => cb(), (e) => cb(e));
      }
    }, (results) => {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type2, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type2] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.warning = function() {
};
const _sfc_main = {
  name: "u-form",
  mixins: [mpMixin, mixin, props],
  provide() {
    return {
      uForm: this
    };
  },
  data() {
    return {
      formRules: {},
      // 规则校验器
      validator: {},
      // 原始的model快照，用于resetFields方法重置表单时使用
      originalModel: null
    };
  },
  watch: {
    // 监听规则的变化
    rules: {
      immediate: true,
      handler(n) {
        this.setRules(n);
      }
    },
    // 监听属性的变化，通知子组件u-form-item重新获取信息
    propsChange(n) {
      var _a;
      if ((_a = this.children) == null ? void 0 : _a.length) {
        this.children.map((child) => {
          typeof child.updateParentData == "function" && child.updateParentData();
        });
      }
    },
    // 监听model的初始值作为重置表单的快照
    model: {
      immediate: true,
      handler(n) {
        if (!this.originalModel) {
          this.originalModel = deepClone(n);
        }
      }
    }
  },
  computed: {
    propsChange() {
      return [
        this.errorType,
        this.borderBottom,
        this.labelPosition,
        this.labelWidth,
        this.labelAlign,
        this.labelStyle
      ];
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
    setRules(rules2) {
      if (Object.keys(rules2).length === 0)
        return;
      this.formRules = rules2;
      this.validator = new Schema(rules2);
    },
    // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
    resetFields() {
      this.resetModel();
    },
    // 重置model为初始值的快照
    resetModel(obj) {
      this.children.map((child) => {
        const prop = child == null ? void 0 : child.prop;
        const value = getProperty(this.originalModel, prop);
        setProperty(this.model, prop, value);
      });
    },
    // 清空校验结果
    clearValidate(props2) {
      props2 = [].concat(props2);
      this.children.map((child) => {
        if (props2[0] === void 0 || props2.includes(child.prop)) {
          child.message = null;
        }
      });
    },
    // 对部分表单字段进行校验
    async validateField(value, callback, event = null) {
      this.$nextTick(() => {
        const errorsRes = [];
        value = [].concat(value);
        this.children.map((child) => {
          const childErrors = [];
          if (value.includes(child.prop)) {
            const propertyVal = getProperty(
              this.model,
              child.prop
            );
            const propertyChain = child.prop.split(".");
            const propertyName = propertyChain[propertyChain.length - 1];
            const rule = this.formRules[child.rule || child.prop];
            if (!rule)
              return;
            const rules2 = [].concat(rule);
            for (let i = 0; i < rules2.length; i++) {
              const ruleItem = rules2[i];
              const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
              if (event && !trigger.includes(event))
                continue;
              const validator = new Schema({
                [propertyName]: ruleItem
              });
              validator.validate(
                {
                  [propertyName]: propertyVal
                },
                (errors, fields) => {
                  var _a;
                  if (test.array(errors)) {
                    errorsRes.push(...errors);
                    childErrors.push(...errors);
                  }
                  child.message = ((_a = childErrors[0]) == null ? void 0 : _a.message) ? childErrors[0].message : null;
                }
              );
            }
          }
        });
        typeof callback === "function" && callback(errorsRes);
      });
    },
    // 校验全部数据
    validate(callback) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const formItemProps = this.children.map(
            (item) => item.prop
          );
          this.validateField(formItemProps, (errors) => {
            if (errors.length) {
              this.errorType === "toast" && toast(errors[0].message);
              reject(errors);
            } else {
              resolve(true);
            }
          });
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-form" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __easycom_5 as _,
  __easycom_6 as a
};
