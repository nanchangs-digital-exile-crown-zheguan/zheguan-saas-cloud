import { inject, getCurrentInstance, createVNode, mergeProps, withModifiers, defineComponent, ref, onBeforeUnmount, computed, reactive, onMounted, watch, withDirectives, vModelDynamic, vShow, provide, nextTick, onActivated, watchEffect, onUnmounted, Comment, createTextVNode, renderList, Fragment, renderSlot, openBlock, createBlock, withCtx, shallowRef, isVNode, onBeforeMount, markRaw, h, createApp, Transition, effectScope } from "/wap/assets/shared/vue.js";
/* __wap-addon-uni-h5-patched */
function __wapDelegateUniApi(name){
return function(arg){
var u=globalThis.uni;
if(u&&typeof u[name]==="function")return u[name](arg);
return Promise.reject({errMsg:name+":fail page not found"});
};
}
function __wapGetCurrentPages(){
var fn=globalThis.getCurrentPages;
if(typeof fn==="function"){try{return fn()}catch(e){}}
return [];
}
var __wapNavigateTo=__wapDelegateUniApi("navigateTo");
var __wapRedirectTo=__wapDelegateUniApi("redirectTo");
var __wapSwitchTab=__wapDelegateUniApi("switchTab");
var __wapReLaunch=__wapDelegateUniApi("reLaunch");
var __wapNavigateBack=__wapDelegateUniApi("navigateBack");
var __wapSetNavigationBarTitle=__wapDelegateUniApi("setNavigationBarTitle");
var __wapPageScrollTo=__wapDelegateUniApi("pageScrollTo");
var __wapSetLocale=__wapDelegateUniApi("setLocale");
const view = "";
const toast = "";
const extend = Object.assign;
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const LINEFEED = "\n";
const UNI_STORAGE_LOCALE = "UNI_LOCALE";
const I18N_JSON_DELIMITERS = ["%", "%"];
const PRIMARY_COLOR = "#007aff";
const SCHEME_RE = /^([a-z-]+:)?\/\//i;
const DATA_RE = /^data:.*,.*/;
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_THEME_CHANGE = "onThemeChange";
const ON_LOAD = "onLoad";
const ON_UNLOAD = "onUnload";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_NAVIGATION_BAR_CHANGE = "onNavigationBarChange";
function isComponentInternalInstance(vm) {
  return !!vm.appContext;
}
function resolveComponentInstance(instance) {
  return instance && (isComponentInternalInstance(instance) ? instance.proxy : instance);
}
function getLen(str = "") {
  return ("" + str).replace(/[^\x00-\xff]/g, "**").length;
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
function removeLeadingSlash(str) {
  return hasLeadingSlash(str) ? str.slice(1) : str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function updateElementStyle(element, styles) {
  for (const attrName in styles) {
    element.style[attrName] = styles[attrName];
  }
}
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function callOptions(options, data) {
  options = options || {};
  if (isString(data)) {
    data = {
      errMsg: data
    };
  }
  if (/:ok$/.test(data.errMsg)) {
    if (isFunction(options.success)) {
      options.success(data);
    }
  } else {
    if (isFunction(options.fail)) {
      options.fail(data);
    }
  }
  if (isFunction(options.complete)) {
    options.complete(data);
  }
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
function getCustomDataset(el) {
  return extend({}, el.dataset, el.__uniDataset);
}
function passive(passive2) {
  return { passive: passive2 };
}
function normalizeTarget(el) {
  const { id: id2, offsetTop, offsetLeft } = el;
  return {
    id: id2,
    dataset: getCustomDataset(el),
    offsetTop,
    offsetLeft
  };
}
function scrollTo(scrollTop, duration, isH5) {
  if (isString(scrollTop)) {
    const el = document.querySelector(scrollTop);
    if (el) {
      const { height, top } = el.getBoundingClientRect();
      scrollTop = top + window.pageYOffset;
      if (isH5) {
        scrollTop -= height;
      }
    }
  }
  if (scrollTop < 0) {
    scrollTop = 0;
  }
  const documentElement = document.documentElement;
  const { clientHeight, scrollHeight } = documentElement;
  scrollTop = Math.min(scrollTop, scrollHeight - clientHeight);
  if (duration === 0) {
    documentElement.scrollTop = document.body.scrollTop = scrollTop;
    return;
  }
  if (window.scrollY === scrollTop) {
    return;
  }
  const scrollTo2 = (duration2) => {
    if (duration2 <= 0) {
      window.scrollTo(0, scrollTop);
      return;
    }
    const distaince = scrollTop - window.scrollY;
    requestAnimationFrame(function() {
      window.scrollTo(0, window.scrollY + distaince / duration2 * 10);
      scrollTo2(duration2 - 10);
    });
  };
  scrollTo2(duration);
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
const PLUS_RE = /\+/g;
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    let eqPos = searchParam.indexOf("=");
    let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function parseUrl(url) {
  const [path, querystring] = url.split("?", 2);
  return {
    path,
    query: parseQuery(querystring || "")
  };
}
function debounce(fn, delay, { clearTimeout: clearTimeout2, setTimeout: setTimeout2 }) {
  let timeout;
  const newFn = function() {
    clearTimeout2(timeout);
    const timerFn = () => fn.apply(this, arguments);
    timeout = setTimeout2(timerFn, delay);
  };
  newFn.cancel = function() {
    clearTimeout2(timeout);
  };
  return newFn;
}
class EventChannel {
  constructor(id2, events) {
    this.id = id2;
    this.listener = {};
    this.emitCache = [];
    if (events) {
      Object.keys(events).forEach((name) => {
        this.on(name, events[name]);
      });
    }
  }
  emit(eventName, ...args) {
    const fns = this.listener[eventName];
    if (!fns) {
      return this.emitCache.push({
        eventName,
        args
      });
    }
    fns.forEach((opt) => {
      opt.fn.apply(opt.fn, args);
    });
    this.listener[eventName] = fns.filter((opt) => opt.type !== "once");
  }
  on(eventName, fn) {
    this._addListener(eventName, "on", fn);
    this._clearCache(eventName);
  }
  once(eventName, fn) {
    this._addListener(eventName, "once", fn);
    this._clearCache(eventName);
  }
  off(eventName, fn) {
    const fns = this.listener[eventName];
    if (!fns) {
      return;
    }
    if (fn) {
      for (let i = 0; i < fns.length; ) {
        if (fns[i].fn === fn) {
          fns.splice(i, 1);
          i--;
        }
        i++;
      }
    } else {
      delete this.listener[eventName];
    }
  }
  _clearCache(eventName) {
    for (let index = 0; index < this.emitCache.length; index++) {
      const cache = this.emitCache[index];
      const _name = eventName ? cache.eventName === eventName ? eventName : null : cache.eventName;
      if (!_name)
        continue;
      const location = this.emit.apply(this, [_name, ...cache.args]);
      if (typeof location === "number") {
        this.emitCache.pop();
        continue;
      }
      this.emitCache.splice(index, 1);
      index--;
    }
  }
  _addListener(eventName, type, fn) {
    (this.listener[eventName] || (this.listener[eventName] = [])).push({
      fn,
      type
    });
  }
}
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self = this;
    function listener2() {
      self.off(name, listener2);
      callback.apply(ctx, arguments);
    }
    listener2._ = callback;
    return this.on(name, listener2, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const borderStyles = {
  black: "rgba(0,0,0,0.4)",
  white: "rgba(255,255,255,0.4)"
};
function normalizeTabBarStyles(borderStyle) {
  if (borderStyle && borderStyle in borderStyles) {
    return borderStyles[borderStyle];
  }
  return borderStyle;
}
function normalizeTitleColor(titleColor) {
  return titleColor === "black" ? "#000000" : "#ffffff";
}
function normalizeStyles(pageStyle, themeConfig = {}, mode = "light") {
  const modeStyle = themeConfig[mode];
  const styles = {};
  if (!modeStyle) {
    return pageStyle;
  }
  Object.keys(pageStyle).forEach((key) => {
    let styleItem = pageStyle[key];
    styles[key] = (() => {
      if (isPlainObject(styleItem)) {
        return normalizeStyles(styleItem, themeConfig, mode);
      } else if (isArray(styleItem)) {
        return styleItem.map((item) => isPlainObject(item) ? normalizeStyles(item, themeConfig, mode) : item);
      } else if (isString(styleItem) && styleItem.startsWith("@")) {
        const _key = styleItem.replace("@", "");
        let _styleItem = modeStyle[_key] || styleItem;
        switch (key) {
          case "titleColor":
            _styleItem = normalizeTitleColor(_styleItem);
            break;
          case "borderStyle":
            _styleItem = normalizeTabBarStyles(_styleItem);
            break;
        }
        return _styleItem;
      }
      return styleItem;
    })();
  });
  return styles;
}
const isObject = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ Object.create(null);
  }
  interpolate(message, values, delimiters = defaultDelimiters) {
    if (!values) {
      return [message];
    }
    let tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, [startDelimiter, endDelimiter]) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      let sub = "";
      char = format[position++];
      while (char !== void 0 && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      const isClosed = char === endDelimiter;
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type });
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile(tokens, values) {
  const compiled = [];
  let index = 0;
  const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        }
        break;
    }
    index++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  const lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
class I18n {
  constructor({ locale, fallbackLocale, messages, watcher, formater }) {
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  setLocale(locale) {
    const oldLocale = this.locale;
    this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
    if (!this.messages[this.locale]) {
      this.messages[this.locale] = {};
    }
    this.message = this.messages[this.locale];
    if (oldLocale !== this.locale) {
      this.watchers.forEach((watcher) => {
        watcher(this.locale, oldLocale);
      });
    }
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(fn) {
    const index = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index, 1);
    };
  }
  add(locale, message, override = true) {
    const curMessages = this.messages[locale];
    if (curMessages) {
      if (override) {
        Object.assign(curMessages, message);
      } else {
        Object.keys(message).forEach((key) => {
          if (!hasOwn(curMessages, key)) {
            curMessages[key] = message[key];
          }
        });
      }
    } else {
      this.messages[locale] = message;
    }
  }
  f(message, values, delimiters) {
    return this.formater.interpolate(message, values, delimiters).join("");
  }
  t(key, locale, values) {
    let message = this.message;
    if (typeof locale === "string") {
      locale = normalizeLocale(locale, this.messages);
      locale && (message = this.messages[locale]);
    } else {
      values = locale;
    }
    if (!hasOwn(message, key)) {
      console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
      return key;
    }
    return this.formater.interpolate(message[key], values).join("");
  }
}
function getDefaultLocale() {
  if (typeof uni !== "undefined" && getLocale) {
    return getLocale();
  }
  if (typeof global !== "undefined" && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
  if (typeof locale !== "string") {
    [locale, messages] = [
      messages,
      locale
    ];
  }
  if (typeof locale !== "string") {
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== "string") {
    fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  const i18n2 = new I18n({
    locale,
    fallbackLocale,
    messages,
    watcher
  });
  let t2 = (key, values) => {
    if (typeof getApp$1 !== "function") {
      t2 = function(key2, values2) {
        return i18n2.t(key2, values2);
      };
    } else {
      t2 = function(key2, values2) {
        getApp$1().$vm;
        return i18n2.t(key2, values2);
      };
    }
    return t2(key, values);
  };
  return {
    i18n: i18n2,
    f(message, values, delimiters) {
      return i18n2.f(message, values, delimiters);
    },
    t(key, values) {
      return t2(key, values);
    },
    add(locale2, message, override = true) {
      return i18n2.add(locale2, message, override);
    },
    watch(fn) {
      return i18n2.watchLocale(fn);
    },
    getLocale() {
      return i18n2.getLocale();
    },
    setLocale(newLocale) {
      return i18n2.setLocale(newLocale);
    }
  };
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const routeLocationKey = Symbol("");
function useRoute(_name) {
  return inject(routeLocationKey);
}
const isEnableLocale = /* @__PURE__ */ once(
  () => typeof __uniConfig !== "undefined" && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length
);
let i18n;
function getLocaleMessage() {
  const locale = getLocale();
  const locales = __uniConfig.locales;
  return locales[locale] || locales[__uniConfig.fallbackLocale] || locales.en || {};
}
function formatI18n(message) {
  if (isI18nStr(message, I18N_JSON_DELIMITERS)) {
    return useI18n().f(message, getLocaleMessage(), I18N_JSON_DELIMITERS);
  }
  return message;
}
function resolveJsonObj(jsonObj, names) {
  if (names.length === 1) {
    if (jsonObj) {
      const _isI18nStr = (value2) => isString(value2) && isI18nStr(value2, I18N_JSON_DELIMITERS);
      const _name = names[0];
      let filterJsonObj = [];
      if (isArray(jsonObj) && (filterJsonObj = jsonObj.filter((item) => _isI18nStr(item[_name]))).length) {
        return filterJsonObj;
      }
      const value = jsonObj[names[0]];
      if (_isI18nStr(value)) {
        return jsonObj;
      }
    }
    return;
  }
  const name = names.shift();
  return resolveJsonObj(jsonObj && jsonObj[name], names);
}
function defineI18nProperties(obj, names) {
  return names.map((name) => defineI18nProperty(obj, name));
}
function defineI18nProperty(obj, names) {
  const jsonObj = resolveJsonObj(obj, names);
  if (!jsonObj) {
    return false;
  }
  const prop = names[names.length - 1];
  if (isArray(jsonObj)) {
    jsonObj.forEach((item) => defineI18nProperty(item, [prop]));
  } else {
    let value = jsonObj[prop];
    Object.defineProperty(jsonObj, prop, {
      get() {
        return formatI18n(value);
      },
      set(v2) {
        value = v2;
      }
    });
  }
  return true;
}
function useI18n() {
  if (!i18n) {
    let locale;
    {
      {
        locale = navigator.cookieEnabled && window.localStorage && localStorage[UNI_STORAGE_LOCALE] || __uniConfig.locale || navigator.language;
      }
    }
    i18n = initVueI18n(locale);
    if (isEnableLocale()) {
      const localeKeys = Object.keys(__uniConfig.locales || {});
      if (localeKeys.length) {
        localeKeys.forEach(
          (locale2) => i18n.add(locale2, __uniConfig.locales[locale2])
        );
      }
      i18n.setLocale(locale);
    }
  }
  return i18n;
}
function normalizeMessages(module, keys, values) {
  return keys.reduce((res, name, index2) => {
    res[module + name] = values[index2];
    return res;
  }, {});
}
const initI18nShowToastMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.showToast.";
  const keys = ["unpaired"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "Please note showToast must be paired with hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "Tenga en cuenta que showToast debe estar emparejado con hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "Veuillez noter que showToast doit être associé à hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, [
        "请注意 showToast 与 hideToast 必须配对使用"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, [
        "請注意 showToast 與 hideToast 必須配對使用"
      ]),
      false
    );
  }
});
const initI18nShowLoadingMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.showLoading.";
  const keys = ["unpaired"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "Please note showLoading must be paired with hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "Tenga en cuenta que showLoading debe estar emparejado con hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "Veuillez noter que showLoading doit être associé à hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, [
        "请注意 showLoading 与 hideLoading 必须配对使用"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, [
        "請注意 showLoading 與 hideLoading 必須配對使用"
      ]),
      false
    );
  }
});
const initI18nShowModalMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.showModal.";
  const keys = ["cancel", "confirm"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, ["Cancel", "OK"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, ["Cancelar", "OK"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, ["Annuler", "OK"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["取消", "确定"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["取消", "確定"]),
      false
    );
  }
});
const initI18nChooseFileMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.chooseFile.";
  const keys = ["notUserActivation"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "File chooser dialog can only be shown with a user activation"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "El cuadro de diálogo del selector de archivos solo se puede mostrar con la activación del usuario"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "La boîte de dialogue du sélecteur de fichier ne peut être affichée qu'avec une activation par l'utilisateur"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["文件选择器对话框只能在由用户激活时显示"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["文件選擇器對話框只能在由用戶激活時顯示"]),
      false
    );
  }
});
const initI18nVideoMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.video.";
  const keys = ["danmu", "volume"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, ["Danmu", "Volume"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, ["Danmu", "Volumen"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, ["Danmu", "Le Volume"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["弹幕", "音量"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["彈幕", "音量"]),
      false
    );
  }
});
function initNavigationBarI18n(navigationBar) {
  if (isEnableLocale()) {
    return defineI18nProperties(navigationBar, [
      ["titleText"],
      ["searchInput", "placeholder"],
      ["buttons", "text"]
    ]);
  }
}
function initBridge(subscribeNamespace) {
  const emitter2 = new E$1();
  return {
    on(event, callback) {
      return emitter2.on(event, callback);
    },
    once(event, callback) {
      return emitter2.once(event, callback);
    },
    off(event, callback) {
      return emitter2.off(event, callback);
    },
    emit(event, ...args) {
      return emitter2.emit(event, ...args);
    },
    subscribe(event, callback, once2 = false) {
      emitter2[once2 ? "once" : "on"](`${subscribeNamespace}.${event}`, callback);
    },
    unsubscribe(event, callback) {
      emitter2.off(`${subscribeNamespace}.${event}`, callback);
    },
    subscribeHandler(event, args, pageId) {
      emitter2.emit(`${subscribeNamespace}.${event}`, args, pageId);
    }
  };
}
const INVOKE_VIEW_API = "invokeViewApi";
const INVOKE_SERVICE_API = "invokeServiceApi";
let invokeServiceMethodId = 1;
const invokeServiceMethod = (name, args, callback) => {
  const { subscribe, publishHandler } = UniViewJSBridge$1;
  const id2 = callback ? invokeServiceMethodId++ : 0;
  callback && subscribe(INVOKE_SERVICE_API + "." + id2, callback, true);
  publishHandler(INVOKE_SERVICE_API, { id: id2, name, args });
};
const viewMethods = /* @__PURE__ */ Object.create(null);
function normalizeViewMethodName(pageId, name) {
  return pageId + "." + name;
}
function registerViewMethod(pageId, name, fn) {
  name = normalizeViewMethodName(pageId, name);
  if (!viewMethods[name]) {
    viewMethods[name] = fn;
  }
}
function unregisterViewMethod(pageId, name) {
  name = normalizeViewMethodName(pageId, name);
  delete viewMethods[name];
}
const ViewJSBridge = /* @__PURE__ */ extend(
  /* @__PURE__ */ initBridge("service"),
  {
    invokeServiceMethod
  }
);
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var attrs = ["top", "left", "right", "bottom"];
var inited$1;
var elementComputedStyle = {};
var support;
function getSupport() {
  if (!("CSS" in window) || typeof CSS.supports != "function") {
    support = "";
  } else if (CSS.supports("top: env(safe-area-inset-top)")) {
    support = "env";
  } else if (CSS.supports("top: constant(safe-area-inset-top)")) {
    support = "constant";
  } else {
    support = "";
  }
  return support;
}
function init() {
  support = typeof support === "string" ? support : getSupport();
  if (!support) {
    attrs.forEach(function(attr2) {
      elementComputedStyle[attr2] = 0;
    });
    return;
  }
  function setStyle(el, style) {
    var elStyle = el.style;
    Object.keys(style).forEach(function(key) {
      var val = style[key];
      elStyle[key] = val;
    });
  }
  var cbs = [];
  function parentReady(callback) {
    if (callback) {
      cbs.push(callback);
    } else {
      cbs.forEach(function(cb) {
        cb();
      });
    }
  }
  var passiveEvents = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        passiveEvents = { passive: true };
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e2) {
  }
  function addChild(parent, attr2) {
    var a1 = document.createElement("div");
    var a2 = document.createElement("div");
    var a1Children = document.createElement("div");
    var a2Children = document.createElement("div");
    var W = 100;
    var MAX = 1e4;
    var aStyle = {
      position: "absolute",
      width: W + "px",
      height: "200px",
      boxSizing: "border-box",
      overflow: "hidden",
      paddingBottom: support + "(safe-area-inset-" + attr2 + ")"
    };
    setStyle(a1, aStyle);
    setStyle(a2, aStyle);
    setStyle(a1Children, {
      transition: "0s",
      animation: "none",
      width: "400px",
      height: "400px"
    });
    setStyle(a2Children, {
      transition: "0s",
      animation: "none",
      width: "250%",
      height: "250%"
    });
    a1.appendChild(a1Children);
    a2.appendChild(a2Children);
    parent.appendChild(a1);
    parent.appendChild(a2);
    parentReady(function() {
      a1.scrollTop = a2.scrollTop = MAX;
      var a1LastScrollTop = a1.scrollTop;
      var a2LastScrollTop = a2.scrollTop;
      function onScroll() {
        if (this.scrollTop === (this === a1 ? a1LastScrollTop : a2LastScrollTop)) {
          return;
        }
        a1.scrollTop = a2.scrollTop = MAX;
        a1LastScrollTop = a1.scrollTop;
        a2LastScrollTop = a2.scrollTop;
        attrChange(attr2);
      }
      a1.addEventListener("scroll", onScroll, passiveEvents);
      a2.addEventListener("scroll", onScroll, passiveEvents);
    });
    var computedStyle = getComputedStyle(a1);
    Object.defineProperty(elementComputedStyle, attr2, {
      configurable: true,
      get: function() {
        return parseFloat(computedStyle.paddingBottom);
      }
    });
  }
  var parentDiv = document.createElement("div");
  setStyle(parentDiv, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "0",
    height: "0",
    zIndex: "-1",
    overflow: "hidden",
    visibility: "hidden"
  });
  attrs.forEach(function(key) {
    addChild(parentDiv, key);
  });
  document.body.appendChild(parentDiv);
  parentReady();
  inited$1 = true;
}
function getAttr(attr2) {
  if (!inited$1) {
    init();
  }
  return elementComputedStyle[attr2];
}
var changeAttrs = [];
function attrChange(attr2) {
  if (!changeAttrs.length) {
    setTimeout(function() {
      var style = {};
      changeAttrs.forEach(function(attr3) {
        style[attr3] = elementComputedStyle[attr3];
      });
      changeAttrs.length = 0;
      callbacks.forEach(function(callback) {
        callback(style);
      });
    }, 0);
  }
  changeAttrs.push(attr2);
}
var callbacks = [];
function onChange(callback) {
  if (!getSupport()) {
    return;
  }
  if (!inited$1) {
    init();
  }
  if (typeof callback === "function") {
    callbacks.push(callback);
  }
}
function offChange(callback) {
  var index2 = callbacks.indexOf(callback);
  if (index2 >= 0) {
    callbacks.splice(index2, 1);
  }
}
var safeAreaInsets = {
  get support() {
    return (typeof support === "string" ? support : getSupport()).length != 0;
  },
  get top() {
    return getAttr("top");
  },
  get left() {
    return getAttr("left");
  },
  get right() {
    return getAttr("right");
  },
  get bottom() {
    return getAttr("bottom");
  },
  onChange,
  offChange
};
var out = safeAreaInsets;
const safeAreaInsets$1 = /* @__PURE__ */ getDefaultExportFromCjs(out);
const onEventPrevent = /* @__PURE__ */ withModifiers(() => {
}, ["prevent"]);
const onEventStop = /* @__PURE__ */ withModifiers(() => {
}, ["stop"]);
function getWindowOffsetCssVar(style, name) {
  return parseInt((style.getPropertyValue(name).match(/\d+/) || ["0"])[0]);
}
function getWindowTop() {
  const style = document.documentElement.style;
  const top = getWindowOffsetCssVar(style, "--window-top");
  return top ? top + safeAreaInsets$1.top : 0;
}
function getWindowOffset() {
  const style = document.documentElement.style;
  const top = getWindowTop();
  const bottom = getWindowOffsetCssVar(style, "--window-bottom");
  const left = getWindowOffsetCssVar(style, "--window-left");
  const right = getWindowOffsetCssVar(style, "--window-right");
  const topWindowHeight = getWindowOffsetCssVar(style, "--top-window-height");
  return {
    top,
    bottom: bottom ? bottom + safeAreaInsets$1.bottom : 0,
    left: left ? left + safeAreaInsets$1.left : 0,
    right: right ? right + safeAreaInsets$1.right : 0,
    topWindowHeight: topWindowHeight || 0
  };
}
function PolySymbol(name) {
  return Symbol(name);
}
function hasRpx(str) {
  str = str + "";
  return str.indexOf("rpx") !== -1 || str.indexOf("upx") !== -1;
}
function rpx2px(str, replace = false) {
  if (replace) {
    return rpx2pxWithReplace(str);
  }
  if (isString(str)) {
    const res = parseInt(str) || 0;
    if (hasRpx(str)) {
      return upx2px(res);
    }
    return res;
  }
  return str;
}
function rpx2pxWithReplace(str) {
  if (!hasRpx(str)) {
    return str;
  }
  return str.replace(/(\d+(\.\d+)?)[ru]px/g, (_a, b) => {
    return upx2px(parseFloat(b)) + "px";
  });
}
const ICON_PATH_SUCCESS_NO_CIRCLE = "M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z";
const ICON_PATH_WARN = "M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z";
const ICON_PATH_BACK = "M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z";
const ICON_PATH_CLOSE = "M17.25 16.156l7.375-7.313q0.281-0.281 0.281-0.641t-0.281-0.641q-0.25-0.25-0.625-0.25t-0.625 0.25l-7.375 7.344-7.313-7.344q-0.25-0.25-0.625-0.25t-0.625 0.25q-0.281 0.25-0.281 0.625t0.281 0.625l7.313 7.344-7.375 7.344q-0.281 0.25-0.281 0.625t0.281 0.625q0.125 0.125 0.281 0.188t0.344 0.063q0.156 0 0.328-0.063t0.297-0.188l7.375-7.344 7.375 7.406q0.125 0.156 0.297 0.219t0.328 0.063q0.188 0 0.344-0.078t0.281-0.203q0.281-0.25 0.281-0.609t-0.281-0.641l-7.375-7.406z";
function createSvgIconVNode(path, color = "#000", size = 27) {
  return createVNode(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 32 32"
    },
    [
      createVNode(
        "path",
        {
          d: path,
          fill: color
        },
        null,
        8,
        ["d", "fill"]
      )
    ],
    8,
    ["width", "height"]
  );
}
function useCurrentPageId() {
  {
    const { $pageInstance } = getCurrentInstance();
    return $pageInstance && $pageInstance.proxy.$page.id;
  }
}
function getPageIdByVm(instance2) {
  const vm = resolveComponentInstance(instance2);
  if (vm.$page) {
    return vm.$page.id;
  }
  if (!vm.$) {
    return;
  }
  {
    const { $pageInstance } = vm.$;
    return $pageInstance && $pageInstance.proxy.$page.id;
  }
}
function getCurrentPage() {
  const pages = getCurrentPages$1();
  const len = pages.length;
  if (len) {
    return pages[len - 1];
  }
}
function getCurrentPageMeta() {
  const page = getCurrentPage();
  if (page) {
    return page.$page.meta;
  }
}
function getCurrentPageId() {
  const meta = getCurrentPageMeta();
  if (meta) {
    return meta.id;
  }
  return -1;
}
function getCurrentPageVm() {
  const page = getCurrentPage();
  if (page) {
    return page.$vm;
  }
}
const PAGE_META_KEYS = ["navigationBar", "pullToRefresh"];
function initGlobalStyle() {
  return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
}
function initRouteMeta(pageMeta, id2) {
  const globalStyle = initGlobalStyle();
  const res = extend({ id: id2 }, globalStyle, pageMeta);
  PAGE_META_KEYS.forEach((name) => {
    res[name] = extend({}, globalStyle[name], pageMeta[name]);
  });
  const { navigationBar } = res;
  navigationBar.titleText && navigationBar.titleImage && (navigationBar.titleText = "");
  return res;
}
function invokeHook(vm, name, args) {
  if (isString(vm)) {
    args = name;
    name = vm;
    vm = getCurrentPageVm();
  } else if (typeof vm === "number") {
    const page = getCurrentPages$1().find((page2) => page2.$page.id === vm);
    if (page) {
      vm = page.$vm;
    } else {
      vm = getCurrentPageVm();
    }
  }
  if (!vm) {
    return;
  }
  const hooks = vm.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
function normalizeRoute(toRoute) {
  if (toRoute.indexOf("/") === 0) {
    return toRoute;
  }
  let fromRoute = "";
  const pages = getCurrentPages$1();
  if (pages.length) {
    fromRoute = pages[pages.length - 1].$page.route;
  }
  return getRealRoute(fromRoute, toRoute);
}
function getRealRoute(fromRoute, toRoute) {
  if (toRoute.indexOf("/") === 0) {
    return toRoute;
  }
  if (toRoute.indexOf("./") === 0) {
    return getRealRoute(fromRoute, toRoute.slice(2));
  }
  const toRouteArray = toRoute.split("/");
  const toRouteLength = toRouteArray.length;
  let i = 0;
  for (; i < toRouteLength && toRouteArray[i] === ".."; i++) {
  }
  toRouteArray.splice(0, i);
  toRoute = toRouteArray.join("/");
  const fromRouteArray = fromRoute.length > 0 ? fromRoute.split("/") : [];
  fromRouteArray.splice(fromRouteArray.length - i - 1, i + 1);
  return addLeadingSlash(fromRouteArray.concat(toRouteArray).join("/"));
}
function getRouteOptions(path, alias = false) {
  if (alias) {
    return __uniRoutes.find(
      (route) => route.path === path || route.alias === path
    );
  }
  return __uniRoutes.find((route) => route.path === path);
}
const invokeOnCallback = (name, res) => UniServiceJSBridge$1.emit("api." + name, res);
let invokeViewMethodId = 1;
function publishViewMethodName(pageId) {
  return (pageId || getCurrentPageId()) + "." + INVOKE_VIEW_API;
}
const invokeViewMethod = (name, args, pageId, callback) => {
  const { subscribe, publishHandler } = UniServiceJSBridge$1;
  const id2 = callback ? invokeViewMethodId++ : 0;
  callback && subscribe(INVOKE_VIEW_API + "." + id2, callback, true);
  publishHandler(publishViewMethodName(pageId), { id: id2, name, args }, pageId);
};
const invokeViewMethodKeepAlive = (name, args, callback, pageId) => {
  const { subscribe, unsubscribe, publishHandler } = UniServiceJSBridge$1;
  const id2 = invokeViewMethodId++;
  const subscribeName = INVOKE_VIEW_API + "." + id2;
  subscribe(subscribeName, callback);
  publishHandler(publishViewMethodName(pageId), { id: id2, name, args }, pageId);
  return () => {
    unsubscribe(subscribeName);
  };
};
const ServiceJSBridge = /* @__PURE__ */ extend(
  /* @__PURE__ */ initBridge(
    "view"
    /* view 指的是 service 层订阅的是 view 层事件 */
  ),
  {
    invokeOnCallback,
    invokeViewMethod,
    invokeViewMethodKeepAlive
  }
);
function converPx(value) {
  if (/^-?\d+[ur]px$/i.test(value)) {
    return value.replace(/(^-?\d+)[ur]px$/i, (text2, num) => {
      return `${upx2px(parseFloat(num))}px`;
    });
  } else if (/^-?[\d\.]+$/.test(value)) {
    return `${value}px`;
  }
  return value || "";
}
function converType(type) {
  return type.replace(/[A-Z]/g, (text2) => {
    return `-${text2.toLowerCase()}`;
  }).replace("webkit", "-webkit");
}
function getStyle(action) {
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "scale",
    "scale3d",
    "rotate3d",
    "skew",
    "translate",
    "translate3d"
  ];
  const animateTypes2 = [
    "scaleX",
    "scaleY",
    "scaleZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skewX",
    "skewY",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes3 = ["opacity", "background-color"];
  const animateTypes4 = ["width", "height", "left", "right", "top", "bottom"];
  const animates = action.animates;
  const option = action.option;
  const transition = option.transition;
  const style = {};
  const transform = [];
  animates.forEach((animate) => {
    let type = animate.type;
    let args = [...animate.args];
    if (animateTypes1.concat(animateTypes2).includes(type)) {
      if (type.startsWith("rotate") || type.startsWith("skew")) {
        args = args.map((value) => parseFloat(value) + "deg");
      } else if (type.startsWith("translate")) {
        args = args.map(converPx);
      }
      if (animateTypes2.indexOf(type) >= 0) {
        args.length = 1;
      }
      transform.push(`${type}(${args.join(",")})`);
    } else if (animateTypes3.concat(animateTypes4).includes(args[0])) {
      type = args[0];
      const value = args[1];
      style[type] = animateTypes4.includes(type) ? converPx(value) : value;
    }
  });
  style.transform = style.webkitTransform = transform.join(" ");
  style.transition = style.webkitTransition = Object.keys(style).map(
    (type) => `${converType(type)} ${transition.duration}ms ${transition.timingFunction} ${transition.delay}ms`
  ).join(",");
  style.transformOrigin = style.webkitTransformOrigin = option.transformOrigin;
  return style;
}
function startAnimation(context) {
  const animation2 = context.animation;
  if (!animation2 || !animation2.actions || !animation2.actions.length) {
    return;
  }
  let index2 = 0;
  const actions = animation2.actions;
  const length = animation2.actions.length;
  function animate() {
    const action = actions[index2];
    const transition = action.option.transition;
    const style = getStyle(action);
    Object.keys(style).forEach((key) => {
      context.$el.style[key] = style[key];
    });
    index2 += 1;
    if (index2 < length) {
      setTimeout(animate, transition.duration + transition.delay);
    }
  }
  setTimeout(() => {
    animate();
  }, 0);
}
const animation = {
  props: ["animation"],
  watch: {
    animation: {
      deep: true,
      handler() {
        startAnimation(this);
      }
    }
  },
  mounted() {
    startAnimation(this);
  }
};
const defineBuiltInComponent = (options) => {
  options.__reserved = true;
  const { props: props2, mixins } = options;
  if (!props2 || !props2.animation) {
    (mixins || (options.mixins = [])).push(animation);
  }
  return defineSystemComponent(options);
};
const defineSystemComponent = (options) => {
  options.__reserved = true;
  options.compatConfig = {
    MODE: 3
    // 标记为vue3
  };
  return defineComponent(options);
};
const hoverProps = {
  hoverClass: {
    type: String,
    default: "none"
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 400
  }
};
function useHover(props2) {
  const hovering = ref(false);
  let hoverTouch = false;
  let hoverStartTimer;
  let hoverStayTimer;
  function hoverReset() {
    requestAnimationFrame(() => {
      clearTimeout(hoverStayTimer);
      hoverStayTimer = setTimeout(() => {
        hovering.value = false;
      }, parseInt(props2.hoverStayTime));
    });
  }
  function onTouchstartPassive(evt) {
    if (evt.touches.length > 1) {
      return;
    }
    handleHoverStart(evt);
  }
  function onMousedown(evt) {
    if (hoverTouch) {
      return;
    }
    handleHoverStart(evt);
    window.addEventListener("mouseup", handlePCHoverEnd);
  }
  function handleHoverStart(evt) {
    if (evt._hoverPropagationStopped) {
      return;
    }
    if (!props2.hoverClass || props2.hoverClass === "none" || props2.disabled) {
      return;
    }
    if (props2.hoverStopPropagation) {
      evt._hoverPropagationStopped = true;
    }
    hoverTouch = true;
    hoverStartTimer = setTimeout(() => {
      hovering.value = true;
      if (!hoverTouch) {
        hoverReset();
      }
    }, parseInt(props2.hoverStartTime));
  }
  function onTouchend() {
    handleHoverEnd();
  }
  function onMouseup() {
    if (!hoverTouch) {
      return;
    }
    handlePCHoverEnd();
  }
  function handleHoverEnd() {
    hoverTouch = false;
    if (hovering.value) {
      hoverReset();
    }
  }
  function handlePCHoverEnd() {
    handleHoverEnd();
    window.removeEventListener("mouseup", handlePCHoverEnd);
  }
  function onTouchcancel() {
    hoverTouch = false;
    hovering.value = false;
    clearTimeout(hoverStartTimer);
  }
  return {
    hovering,
    binding: {
      onTouchstartPassive,
      onMousedown,
      onTouchend,
      onMouseup,
      onTouchcancel
    }
  };
}
function useBooleanAttr(props2, keys) {
  if (isString(keys)) {
    keys = [keys];
  }
  return keys.reduce((res, key) => {
    if (props2[key]) {
      res[key] = true;
    }
    return res;
  }, /* @__PURE__ */ Object.create(null));
}
function withWebEvent(fn) {
  return fn.__wwe = true, fn;
}
function useCustomEvent(ref2, emit2) {
  return (name, evt, detail) => {
    if (ref2.value) {
      emit2(name, normalizeCustomEvent(name, evt, ref2.value, detail || {}));
    }
  };
}
function normalizeCustomEvent(name, domEvt, el, detail) {
  const target = normalizeTarget(el);
  return {
    type: detail.type || name,
    timeStamp: domEvt.timeStamp || 0,
    target,
    currentTarget: target,
    detail
  };
}
const uniFormKey = PolySymbol("uf");
const uniLabelKey = PolySymbol("ul");
function useListeners$1(props2, listeners2) {
  _addListeners(props2.id, listeners2);
  watch(
    () => props2.id,
    (newId, oldId) => {
      _removeListeners(oldId, listeners2, true);
      _addListeners(newId, listeners2, true);
    }
  );
  onUnmounted(() => {
    _removeListeners(props2.id, listeners2);
  });
}
function _addListeners(id2, listeners2, watch2) {
  const pageId = useCurrentPageId();
  if (watch2 && !id2) {
    return;
  }
  if (!isPlainObject(listeners2)) {
    return;
  }
  Object.keys(listeners2).forEach((name) => {
    if (watch2) {
      if (name.indexOf("@") !== 0 && name.indexOf("uni-") !== 0) {
        UniViewJSBridge$1.on(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    } else {
      if (name.indexOf("uni-") === 0) {
        UniViewJSBridge$1.on(name, listeners2[name]);
      } else if (id2) {
        UniViewJSBridge$1.on(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    }
  });
}
function _removeListeners(id2, listeners2, watch2) {
  const pageId = useCurrentPageId();
  if (watch2 && !id2) {
    return;
  }
  if (!isPlainObject(listeners2)) {
    return;
  }
  Object.keys(listeners2).forEach((name) => {
    if (watch2) {
      if (name.indexOf("@") !== 0 && name.indexOf("uni-") !== 0) {
        UniViewJSBridge$1.off(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    } else {
      if (name.indexOf("uni-") === 0) {
        UniViewJSBridge$1.off(name, listeners2[name]);
      } else if (id2) {
        UniViewJSBridge$1.off(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    }
  });
}
const buttonProps = {
  id: {
    type: String,
    default: ""
  },
  hoverClass: {
    type: String,
    default: "button-hover"
  },
  hoverStartTime: {
    type: [Number, String],
    default: 20
  },
  hoverStayTime: {
    type: [Number, String],
    default: 70
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  formType: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: ""
  },
  loading: {
    type: [Boolean, String],
    default: false
  },
  plain: {
    type: [Boolean, String],
    default: false
  }
};
const index$x = /* @__PURE__ */ defineBuiltInComponent({
  name: "Button",
  props: buttonProps,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const uniForm = inject(uniFormKey, false);
    const {
      hovering,
      binding
    } = useHover(props2);
    useI18n();
    const onClick = withWebEvent((e2, isLabelClick) => {
      if (props2.disabled) {
        return e2.stopImmediatePropagation();
      }
      if (isLabelClick) {
        rootRef.value.click();
      }
      const formType = props2.formType;
      if (formType) {
        if (!uniForm) {
          return;
        }
        if (formType === "submit") {
          uniForm.submit(e2);
        } else if (formType === "reset") {
          uniForm.reset(e2);
        }
        return;
      }
    });
    const uniLabel = inject(uniLabelKey, false);
    if (uniLabel) {
      uniLabel.addHandler(onClick);
      onBeforeUnmount(() => {
        uniLabel.removeHandler(onClick);
      });
    }
    useListeners$1(props2, {
      "label-click": onClick
    });
    return () => {
      const hoverClass = props2.hoverClass;
      const booleanAttrs = useBooleanAttr(props2, "disabled");
      const loadingAttrs = useBooleanAttr(props2, "loading");
      const plainAttrs = useBooleanAttr(props2, "plain");
      const hasHoverClass = hoverClass && hoverClass !== "none";
      return createVNode("uni-button", mergeProps({
        "ref": rootRef,
        "onClick": onClick,
        "class": hasHoverClass && hovering.value ? hoverClass : ""
      }, hasHoverClass && binding, booleanAttrs, loadingAttrs, plainAttrs), [slots.default && slots.default()], 16, ["onClick"]);
    };
  }
});
function findElem(vm) {
  return vm.$el;
}
function addBase(filePath) {
  const { base: baseUrl } = __uniConfig.router;
  if (addLeadingSlash(filePath).indexOf(baseUrl) === 0) {
    return addLeadingSlash(filePath);
  }
  return baseUrl + filePath;
}
function getRealPath(filePath) {
  const { base, assets } = __uniConfig.router;
  if (base === "./") {
    if (filePath.indexOf("./static/") === 0 || assets && filePath.indexOf("./" + assets + "/") === 0) {
      filePath = filePath.slice(1);
    }
  }
  if (filePath.indexOf("/") === 0) {
    if (filePath.indexOf("//") === 0) {
      filePath = "https:" + filePath;
    } else {
      return addBase(filePath.slice(1));
    }
  }
  if (SCHEME_RE.test(filePath) || DATA_RE.test(filePath) || filePath.indexOf("blob:") === 0) {
    return filePath;
  }
  const pages = getCurrentPages$1();
  if (pages.length) {
    return addBase(
      getRealRoute(pages[pages.length - 1].$page.route, filePath).slice(1)
    );
  }
  return filePath;
}
const ua = navigator.userAgent;
const isAndroid = /* @__PURE__ */ /android/i.test(ua);
const isIOS$1 = /* @__PURE__ */ /iphone|ipad|ipod/i.test(ua);
const isWindows = /* @__PURE__ */ ua.match(/Windows NT ([\d|\d.\d]*)/i);
const isMac = /* @__PURE__ */ /Macintosh|Mac/i.test(ua);
const isLinux = /* @__PURE__ */ /Linux|X11/i.test(ua);
const isIPadOS = isMac && navigator.maxTouchPoints > 0;
function getScreenFix() {
  return /^Apple/.test(navigator.vendor) && typeof window.orientation === "number";
}
function isLandscape(screenFix) {
  return screenFix && Math.abs(window.orientation) === 90;
}
function getScreenWidth(screenFix, landscape) {
  return screenFix ? Math[landscape ? "max" : "min"](screen.width, screen.height) : screen.width;
}
function getScreenHeight(screenFix, landscape) {
  return screenFix ? Math[landscape ? "min" : "max"](screen.height, screen.width) : screen.height;
}
function getWindowWidth(screenWidth) {
  return Math.min(
    window.innerWidth,
    document.documentElement.clientWidth,
    screenWidth
  ) || screenWidth;
}
function getBaseSystemInfo() {
  const screenFix = getScreenFix();
  const windowWidth = getWindowWidth(
    getScreenWidth(screenFix, isLandscape(screenFix))
  );
  return {
    platform: isIOS$1 ? "ios" : "other",
    pixelRatio: window.devicePixelRatio,
    windowWidth
  };
}
function operateVideoPlayer(videoId, pageId, type, data) {
  UniServiceJSBridge$1.invokeViewMethod(
    "video." + videoId,
    {
      videoId,
      type,
      data
    },
    pageId
  );
}
function operateMap(id2, pageId, type, data, operateMapCallback2) {
  UniServiceJSBridge$1.invokeViewMethod(
    "map." + id2,
    {
      type,
      data
    },
    pageId,
    operateMapCallback2
  );
}
function getRootInfo(fields2) {
  const info = {};
  if (fields2.id) {
    info.id = "";
  }
  if (fields2.dataset) {
    info.dataset = {};
  }
  if (fields2.rect) {
    info.left = 0;
    info.right = 0;
    info.top = 0;
    info.bottom = 0;
  }
  if (fields2.size) {
    info.width = document.documentElement.clientWidth;
    info.height = document.documentElement.clientHeight;
  }
  if (fields2.scrollOffset) {
    const documentElement2 = document.documentElement;
    const body = document.body;
    info.scrollLeft = documentElement2.scrollLeft || body.scrollLeft || 0;
    info.scrollTop = documentElement2.scrollTop || body.scrollTop || 0;
    info.scrollHeight = documentElement2.scrollHeight || body.scrollHeight || 0;
    info.scrollWidth = documentElement2.scrollWidth || body.scrollWidth || 0;
  }
  return info;
}
function getNodeInfo(el, fields2) {
  const info = {};
  const { top, topWindowHeight } = getWindowOffset();
  if (fields2.id) {
    info.id = el.id;
  }
  if (fields2.dataset) {
    info.dataset = getCustomDataset(el);
  }
  if (fields2.rect || fields2.size) {
    const rect = el.getBoundingClientRect();
    if (fields2.rect) {
      info.left = rect.left;
      info.right = rect.right;
      info.top = rect.top - top - topWindowHeight;
      info.bottom = rect.bottom - top - topWindowHeight;
    }
    if (fields2.size) {
      info.width = rect.width;
      info.height = rect.height;
    }
  }
  if (isArray(fields2.properties)) {
    fields2.properties.forEach((prop) => {
      prop = prop.replace(/-([a-z])/g, function(e2, t2) {
        return t2.toUpperCase();
      });
    });
  }
  if (fields2.scrollOffset) {
    if (el.tagName === "UNI-SCROLL-VIEW") {
      const scroll = el.children[0].children[0];
      info.scrollLeft = scroll.scrollLeft;
      info.scrollTop = scroll.scrollTop;
      info.scrollHeight = scroll.scrollHeight;
      info.scrollWidth = scroll.scrollWidth;
    } else {
      info.scrollLeft = 0;
      info.scrollTop = 0;
      info.scrollHeight = 0;
      info.scrollWidth = 0;
    }
  }
  if (isArray(fields2.computedStyle)) {
    const sytle = getComputedStyle(el);
    fields2.computedStyle.forEach((name) => {
      info[name] = sytle[name];
    });
  }
  if (fields2.context) {
    info.contextInfo = getContextInfo(el);
  }
  return info;
}
function findElm(component, pageVm) {
  if (!component) {
    return pageVm.$el;
  }
  return component.$el;
}
function matches(element, selectors) {
  const matches2 = element.matches || element.matchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector || function(selectors2) {
    const matches3 = this.parentElement.querySelectorAll(
      selectors2
    );
    let i = matches3.length;
    while (--i >= 0 && matches3.item(i) !== this) {
    }
    return i > -1;
  };
  return matches2.call(element, selectors);
}
function getNodesInfo(pageVm, component, selector, single, fields2) {
  const selfElement = findElm(component, pageVm);
  const parentElement = selfElement.parentElement;
  if (!parentElement) {
    return single ? null : [];
  }
  const { nodeType } = selfElement;
  const maybeFragment = nodeType === 3 || nodeType === 8;
  if (single) {
    const node = maybeFragment ? parentElement.querySelector(selector) : matches(selfElement, selector) ? selfElement : selfElement.querySelector(selector);
    if (node) {
      return getNodeInfo(node, fields2);
    }
    return null;
  } else {
    let infos = [];
    const nodeList = (maybeFragment ? parentElement : selfElement).querySelectorAll(selector);
    if (nodeList && nodeList.length) {
      [].forEach.call(nodeList, (node) => {
        infos.push(getNodeInfo(node, fields2));
      });
    }
    if (!maybeFragment && matches(selfElement, selector)) {
      infos.unshift(getNodeInfo(selfElement, fields2));
    }
    return infos;
  }
}
function requestComponentInfo(page, reqs, callback) {
  const result = [];
  reqs.forEach(({ component, selector, single, fields: fields2 }) => {
    if (component === null) {
      result.push(getRootInfo(fields2));
    } else {
      result.push(getNodesInfo(page, component, selector, single, fields2));
    }
  });
  callback(result);
}
const CHOOSE_SIZE_TYPES = ["original", "compressed"];
const CHOOSE_SOURCE_TYPES = ["album", "camera"];
const HTTP_METHODS = [
  "GET",
  "OPTIONS",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "TRACE",
  "CONNECT",
  "PATCH"
];
function elemInArray(str, arr) {
  if (!str || arr.indexOf(str) === -1) {
    return arr[0];
  }
  return str;
}
function elemsInArray(strArr, optionalVal) {
  if (!isArray(strArr) || strArr.length === 0 || strArr.find((val) => optionalVal.indexOf(val) === -1)) {
    return optionalVal;
  }
  return strArr;
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id2, name, callback, keepAlive = false) {
  invokeCallbacks[id2] = {
    name,
    keepAlive,
    callback
  };
  return id2;
}
function invokeCallback(id2, res, extras) {
  if (typeof id2 === "number") {
    const opts = invokeCallbacks[id2];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id2];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
function findInvokeCallbackByName(name) {
  for (const key in invokeCallbacks) {
    if (invokeCallbacks[key].name === name) {
      return true;
    }
  }
  return false;
}
function removeKeepAliveApiCallback(name, callback) {
  for (const key in invokeCallbacks) {
    const item = invokeCallbacks[key];
    if (item.callback === callback && item.name === name) {
      delete invokeCallbacks[key];
    }
  }
}
function offKeepAliveApiCallback(name) {
  UniServiceJSBridge$1.off("api." + name);
}
function onKeepAliveApiCallback(name) {
  UniServiceJSBridge$1.on("api." + name, (res) => {
    for (const key in invokeCallbacks) {
      const opts = invokeCallbacks[key];
      if (opts.name === name) {
        opts.callback(res);
      }
    }
  });
}
function createKeepAliveApiCallback(name, callback) {
  return addInvokeCallback(invokeCallbackId++, name, callback, true);
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg$1(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg$1(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue(hooks, data, params) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(
          scopedInterceptor[hook]
        );
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api2, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      const res = queue(interceptor.invoke, options);
      return res.then((options2) => {
        return api2(
          wrapperOptions(getApiInterceptorHooks(method), options2),
          ...params
        );
      });
    } else {
      return api2(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api2(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find(
    (cb) => isFunction(args[cb])
  )) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(
      name,
      handlePromise(
        new Promise((resolve, reject) => {
          invokeApi(
            name,
            fn,
            extend(args, { success: resolve, fail: reject }),
            rest
          );
        })
      )
    );
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn$1(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id2, name, res) {
  return invokeCallback(
    id2,
    extend(res || {}, { errMsg: name + ":ok" })
  );
}
function invokeFail(id2, name, errMsg, errRes) {
  return invokeCallback(
    id2,
    extend({ errMsg: name + ":fail" + (errMsg ? " " + errMsg : "") }, errRes)
  );
}
function beforeInvokeApi(name, args, protocol, options) {
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function checkCallback(callback) {
  if (!isFunction(callback)) {
    throw new Error(
      'Invalid args: type check failed for args "callback". Expected Function'
    );
  }
}
function wrapperOnApi(name, fn, options) {
  return (callback) => {
    checkCallback(callback);
    const errMsg = beforeInvokeApi(name, [callback], void 0, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    const isFirstInvokeOnApi = !findInvokeCallbackByName(name);
    createKeepAliveApiCallback(name, callback);
    if (isFirstInvokeOnApi) {
      onKeepAliveApiCallback(name);
      fn();
    }
  };
}
function wrapperOffApi(name, fn, options) {
  return (callback) => {
    checkCallback(callback);
    const errMsg = beforeInvokeApi(name, [callback], void 0, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    name = name.replace("off", "on");
    removeKeepAliveApiCallback(name, callback);
    const hasInvokeOnApi = findInvokeCallbackByName(name);
    if (!hasInvokeOnApi) {
      offKeepAliveApiCallback(name);
      fn();
    }
  };
}
function normalizeErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + LINEFEED + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id2 = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id2, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id2, name, res),
      reject: (errMsg2, errRes) => invokeFail(id2, name, normalizeErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineOnApi(name, fn, options) {
  return wrapperOnApi(name, fn, options);
}
function defineOffApi(name, fn, options) {
  return wrapperOffApi(name, fn, options);
}
function defineTaskApi(name, fn, protocol, options) {
  return promisify(
    name,
    wrapperTaskApi(name, fn, void 0, options)
  );
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(
    name,
    fn,
    void 0,
    options
  );
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify(
    name,
    wrapperAsyncApi(name, fn, void 0, options)
  );
}
const API_UPX2PX = "upx2px";
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
let maxWidth = 960;
let baseWidth = 375;
let includeWidth = 750;
function checkDeviceWidth() {
  const { platform, pixelRatio: pixelRatio2, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio2;
  isIOS = platform === "ios";
}
function checkValue(value, defaultValue) {
  const newValue = Number(value);
  return isNaN(newValue) ? defaultValue : newValue;
}
function checkMaxWidth() {
  const config = __uniConfig.globalStyle || {};
  maxWidth = checkValue(config.rpxCalcMaxDeviceWidth, 960);
  baseWidth = checkValue(config.rpxCalcBaseDeviceWidth, 375);
  includeWidth = checkValue(config.rpxCalcBaseDeviceWidth, 750);
}
const upx2px = /* @__PURE__ */ defineSyncApi(
  API_UPX2PX,
  (number, newDeviceWidth) => {
    if (deviceWidth === 0) {
      checkDeviceWidth();
      {
        checkMaxWidth();
      }
    }
    number = Number(number);
    if (number === 0) {
      return 0;
    }
    let width = newDeviceWidth || deviceWidth;
    {
      width = number === includeWidth || width <= maxWidth ? width : baseWidth;
    }
    let result = number / BASE_DEVICE_WIDTH * width;
    if (result < 0) {
      result = -result;
    }
    result = Math.floor(result + EPS);
    if (result === 0) {
      if (deviceDPR === 1 || !isIOS) {
        result = 1;
      } else {
        result = 0.5;
      }
    }
    return number < 0 ? -result : result;
  }
);
const API_ON = "$on";
const API_OFF = "$off";
const API_EMIT = "$emit";
const emitter = new E$1();
const $on = /* @__PURE__ */ defineSyncApi(
  API_ON,
  (name, callback) => {
    emitter.on(name, callback);
    return () => emitter.off(name, callback);
  }
);
const $off = /* @__PURE__ */ defineSyncApi(
  API_OFF,
  (name, callback) => {
    if (!name) {
      emitter.e = {};
      return;
    }
    if (!isArray(name))
      name = [name];
    name.forEach((n) => emitter.off(n, callback));
  }
);
const $emit = /* @__PURE__ */ defineSyncApi(
  API_EMIT,
  (name, ...args) => {
    emitter.emit(name, ...args);
  }
);
const API_CREATE_VIDEO_CONTEXT = "createVideoContext";
const RATES = [0.5, 0.8, 1, 1.25, 1.5, 2];
class VideoContext {
  constructor(id2, pageId) {
    this.id = id2;
    this.pageId = pageId;
  }
  play() {
    operateVideoPlayer(this.id, this.pageId, "play");
  }
  pause() {
    operateVideoPlayer(this.id, this.pageId, "pause");
  }
  stop() {
    operateVideoPlayer(this.id, this.pageId, "stop");
  }
  seek(position) {
    operateVideoPlayer(this.id, this.pageId, "seek", {
      position
    });
  }
  sendDanmu(args) {
    operateVideoPlayer(this.id, this.pageId, "sendDanmu", args);
  }
  playbackRate(rate) {
    if (!~RATES.indexOf(rate)) {
      rate = 1;
    }
    operateVideoPlayer(this.id, this.pageId, "playbackRate", {
      rate
    });
  }
  requestFullScreen(args = {}) {
    operateVideoPlayer(this.id, this.pageId, "requestFullScreen", args);
  }
  exitFullScreen() {
    operateVideoPlayer(this.id, this.pageId, "exitFullScreen");
  }
  showStatusBar() {
    operateVideoPlayer(this.id, this.pageId, "showStatusBar");
  }
  hideStatusBar() {
    operateVideoPlayer(this.id, this.pageId, "hideStatusBar");
  }
}
const createVideoContext = /* @__PURE__ */ defineSyncApi(
  API_CREATE_VIDEO_CONTEXT,
  (id2, context) => {
    if (context) {
      return new VideoContext(id2, getPageIdByVm(context));
    }
    return new VideoContext(id2, getPageIdByVm(getCurrentPageVm()));
  }
);
const operateMapCallback = (options, res) => {
  const errMsg = res.errMsg || "";
  if (new RegExp("\\:\\s*fail").test(errMsg)) {
    options.fail && options.fail(res);
  } else {
    options.success && options.success(res);
  }
  options.complete && options.complete(res);
};
const operateMapWrap = (id2, pageId, type, options) => {
  operateMap(id2, pageId, type, options, (res) => {
    options && operateMapCallback(options, res);
  });
};
class MapContext {
  constructor(id2, pageId) {
    this.id = id2;
    this.pageId = pageId;
  }
  getCenterLocation(options) {
    operateMapWrap(this.id, this.pageId, "getCenterLocation", options);
  }
  moveToLocation(options) {
    operateMapWrap(this.id, this.pageId, "moveToLocation", options);
  }
  getScale(options) {
    operateMapWrap(this.id, this.pageId, "getScale", options);
  }
  getRegion(options) {
    operateMapWrap(this.id, this.pageId, "getRegion", options);
  }
  includePoints(options) {
    operateMapWrap(this.id, this.pageId, "includePoints", options);
  }
  translateMarker(options) {
    operateMapWrap(this.id, this.pageId, "translateMarker", options);
  }
  $getAppMap() {
  }
  addCustomLayer(options) {
    operateMapWrap(this.id, this.pageId, "addCustomLayer", options);
  }
  removeCustomLayer(options) {
    operateMapWrap(this.id, this.pageId, "removeCustomLayer", options);
  }
  addGroundOverlay(options) {
    operateMapWrap(this.id, this.pageId, "addGroundOverlay", options);
  }
  removeGroundOverlay(options) {
    operateMapWrap(this.id, this.pageId, "removeGroundOverlay", options);
  }
  updateGroundOverlay(options) {
    operateMapWrap(this.id, this.pageId, "updateGroundOverlay", options);
  }
  initMarkerCluster(options) {
    operateMapWrap(this.id, this.pageId, "initMarkerCluster", options);
  }
  addMarkers(options) {
    operateMapWrap(this.id, this.pageId, "addMarkers", options);
  }
  removeMarkers(options) {
    operateMapWrap(this.id, this.pageId, "removeMarkers", options);
  }
  moveAlong(options) {
    operateMapWrap(this.id, this.pageId, "moveAlong", options);
  }
  setLocMarkerIcon(options) {
    operateMapWrap(this.id, this.pageId, "setLocMarkerIcon", options);
  }
  openMapApp(options) {
    operateMapWrap(this.id, this.pageId, "openMapApp", options);
  }
  on(options) {
    operateMapWrap(this.id, this.pageId, "on", options);
  }
}
function operateCanvas(canvasId, pageId, type, data, callback) {
  UniServiceJSBridge$1.invokeViewMethod(
    `canvas.${canvasId}`,
    {
      type,
      data
    },
    pageId,
    (data2) => {
      if (callback)
        callback(data2);
    }
  );
}
function measureText(text2, font2) {
  const canvas = document.createElement("canvas");
  const c2d = canvas.getContext("2d");
  c2d.font = font2;
  return c2d.measureText(text2).width || 0;
}
const predefinedColor = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
  transparent: "#00000000"
};
function checkColor(e2) {
  e2 = e2 || "#000000";
  var t2 = null;
  if ((t2 = /^#([0-9|A-F|a-f]{6})$/.exec(e2)) != null) {
    const n = parseInt(t2[1].slice(0, 2), 16);
    const o2 = parseInt(t2[1].slice(2, 4), 16);
    const r = parseInt(t2[1].slice(4), 16);
    return [n, o2, r, 255];
  }
  if ((t2 = /^#([0-9|A-F|a-f]{3})$/.exec(e2)) != null) {
    let n = t2[1].slice(0, 1);
    let o2 = t2[1].slice(1, 2);
    let r = t2[1].slice(2, 3);
    n = parseInt(n + n, 16);
    o2 = parseInt(o2 + o2, 16);
    r = parseInt(r + r, 16);
    return [n, o2, r, 255];
  }
  if ((t2 = /^rgb\((.+)\)$/.exec(e2)) != null) {
    return t2[1].split(",").map(function(e22) {
      return Math.min(255, parseInt(e22.trim()));
    }).concat(255);
  }
  if ((t2 = /^rgba\((.+)\)$/.exec(e2)) != null) {
    return t2[1].split(",").map(function(e22, t22) {
      return t22 === 3 ? Math.floor(255 * parseFloat(e22.trim())) : Math.min(255, parseInt(e22.trim()));
    });
  }
  var i = e2.toLowerCase();
  if (hasOwn$1(predefinedColor, i)) {
    t2 = /^#([0-9|A-F|a-f]{6,8})$/.exec(predefinedColor[i]);
    const n = parseInt(t2[1].slice(0, 2), 16);
    const o2 = parseInt(t2[1].slice(2, 4), 16);
    const r = parseInt(t2[1].slice(4, 6), 16);
    let a2 = parseInt(t2[1].slice(6, 8), 16);
    a2 = a2 >= 0 ? a2 : 255;
    return [n, o2, r, a2];
  }
  console.error("unsupported color:" + e2);
  return [0, 0, 0, 255];
}
class CanvasGradient {
  constructor(type, data) {
    this.type = type;
    this.data = data;
    this.colorStop = [];
  }
  addColorStop(position, color) {
    this.colorStop.push([position, checkColor(color)]);
  }
}
class Pattern {
  constructor(image2, repetition) {
    this.type = "pattern";
    this.data = image2;
    this.colorStop = repetition;
  }
}
class TextMetrics {
  constructor(width) {
    this.width = width;
  }
}
class CanvasContext {
  constructor(id2, pageId) {
    this.id = id2;
    this.pageId = pageId;
    this.actions = [];
    this.path = [];
    this.subpath = [];
    this.drawingState = [];
    this.state = {
      lineDash: [0, 0],
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 0,
      shadowColor: [0, 0, 0, 0],
      font: "10px sans-serif",
      fontSize: 10,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif"
    };
  }
  draw(reserve = false, callback) {
    var actions = [...this.actions];
    this.actions = [];
    this.path = [];
    operateCanvas(
      this.id,
      this.pageId,
      "actionsChanged",
      {
        actions,
        reserve
      },
      callback
    );
  }
  createLinearGradient(x0, y0, x1, y1) {
    return new CanvasGradient("linear", [x0, y0, x1, y1]);
  }
  createCircularGradient(x, y, r) {
    return new CanvasGradient("radial", [x, y, r]);
  }
  createPattern(image2, repetition) {
    if (void 0 === repetition) {
      console.error(
        "Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present."
      );
    } else if (["repeat", "repeat-x", "repeat-y", "no-repeat"].indexOf(repetition) < 0) {
      console.error(
        "Failed to execute 'createPattern' on 'CanvasContext': The provided type ('" + repetition + "') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'."
      );
    } else {
      return new Pattern(image2, repetition);
    }
  }
  measureText(text2) {
    const font2 = this.state.font;
    let width = 0;
    {
      width = measureText(text2, font2);
    }
    return new TextMetrics(width);
  }
  save() {
    this.actions.push({
      method: "save",
      data: []
    });
    this.drawingState.push(this.state);
  }
  restore() {
    this.actions.push({
      method: "restore",
      data: []
    });
    this.state = this.drawingState.pop() || {
      lineDash: [0, 0],
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 0,
      shadowColor: [0, 0, 0, 0],
      font: "10px sans-serif",
      fontSize: 10,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif"
    };
  }
  beginPath() {
    this.path = [];
    this.subpath = [];
    this.path.push({
      method: "beginPath",
      data: []
    });
  }
  moveTo(x, y) {
    this.path.push({
      method: "moveTo",
      data: [x, y]
    });
    this.subpath = [[x, y]];
  }
  lineTo(x, y) {
    if (this.path.length === 0 && this.subpath.length === 0) {
      this.path.push({
        method: "moveTo",
        data: [x, y]
      });
    } else {
      this.path.push({
        method: "lineTo",
        data: [x, y]
      });
    }
    this.subpath.push([x, y]);
  }
  quadraticCurveTo(cpx, cpy, x, y) {
    this.path.push({
      method: "quadraticCurveTo",
      data: [cpx, cpy, x, y]
    });
    this.subpath.push([x, y]);
  }
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.path.push({
      method: "bezierCurveTo",
      data: [cp1x, cp1y, cp2x, cp2y, x, y]
    });
    this.subpath.push([x, y]);
  }
  arc(x, y, r, sAngle, eAngle, counterclockwise = false) {
    this.path.push({
      method: "arc",
      data: [x, y, r, sAngle, eAngle, counterclockwise]
    });
    this.subpath.push([x, y]);
  }
  rect(x, y, width, height) {
    this.path.push({
      method: "rect",
      data: [x, y, width, height]
    });
    this.subpath = [[x, y]];
  }
  arcTo(x1, y1, x2, y2, radius) {
    this.path.push({
      method: "arcTo",
      data: [x1, y1, x2, y2, radius]
    });
    this.subpath.push([x2, y2]);
  }
  clip() {
    this.actions.push({
      method: "clip",
      data: [...this.path]
    });
  }
  closePath() {
    this.path.push({
      method: "closePath",
      data: []
    });
    if (this.subpath.length) {
      this.subpath = [this.subpath.shift()];
    }
  }
  clearActions() {
    this.actions = [];
    this.path = [];
    this.subpath = [];
  }
  getActions() {
    var actions = [...this.actions];
    this.clearActions();
    return actions;
  }
  set lineDashOffset(value) {
    this.actions.push({
      method: "setLineDashOffset",
      data: [value]
    });
  }
  set globalCompositeOperation(type) {
    this.actions.push({
      method: "setGlobalCompositeOperation",
      data: [type]
    });
  }
  set shadowBlur(level) {
    this.actions.push({
      method: "setShadowBlur",
      data: [level]
    });
  }
  set shadowColor(color) {
    this.actions.push({
      method: "setShadowColor",
      data: [color]
    });
  }
  set shadowOffsetX(x) {
    this.actions.push({
      method: "setShadowOffsetX",
      data: [x]
    });
  }
  set shadowOffsetY(y) {
    this.actions.push({
      method: "setShadowOffsetY",
      data: [y]
    });
  }
  set font(value) {
    var self = this;
    this.state.font = value;
    var fontFormat = value.match(
      /^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/
    );
    if (fontFormat) {
      var style = fontFormat[1].trim().split(/\s/);
      var fontSize = parseFloat(fontFormat[3]);
      var fontFamily = fontFormat[7];
      var actions = [];
      style.forEach(function(value2, index2) {
        if (["italic", "oblique", "normal"].indexOf(value2) > -1) {
          actions.push({
            method: "setFontStyle",
            data: [value2]
          });
          self.state.fontStyle = value2;
        } else if (["bold", "normal"].indexOf(value2) > -1) {
          actions.push({
            method: "setFontWeight",
            data: [value2]
          });
          self.state.fontWeight = value2;
        } else if (index2 === 0) {
          actions.push({
            method: "setFontStyle",
            data: ["normal"]
          });
          self.state.fontStyle = "normal";
        } else if (index2 === 1) {
          pushAction();
        }
      });
      if (style.length === 1) {
        pushAction();
      }
      style = actions.map(function(action) {
        return action.data[0];
      }).join(" ");
      this.state.fontSize = fontSize;
      this.state.fontFamily = fontFamily;
      this.actions.push({
        method: "setFont",
        data: [`${style} ${fontSize}px ${fontFamily}`]
      });
    } else {
      console.warn("Failed to set 'font' on 'CanvasContext': invalid format.");
    }
    function pushAction() {
      actions.push({
        method: "setFontWeight",
        data: ["normal"]
      });
      self.state.fontWeight = "normal";
    }
  }
  get font() {
    return this.state.font;
  }
  set fillStyle(color) {
    this.setFillStyle(color);
  }
  set strokeStyle(color) {
    this.setStrokeStyle(color);
  }
  set globalAlpha(value) {
    value = Math.floor(255 * parseFloat(value));
    this.actions.push({
      method: "setGlobalAlpha",
      data: [value]
    });
  }
  set textAlign(align2) {
    this.actions.push({
      method: "setTextAlign",
      data: [align2]
    });
  }
  set lineCap(type) {
    this.actions.push({
      method: "setLineCap",
      data: [type]
    });
  }
  set lineJoin(type) {
    this.actions.push({
      method: "setLineJoin",
      data: [type]
    });
  }
  set lineWidth(value) {
    this.actions.push({
      method: "setLineWidth",
      data: [value]
    });
  }
  set miterLimit(value) {
    this.actions.push({
      method: "setMiterLimit",
      data: [value]
    });
  }
  set textBaseline(type) {
    this.actions.push({
      method: "setTextBaseline",
      data: [type]
    });
  }
}
const defaultOptions = {
  thresholds: [0],
  initialRatio: 0,
  observeAll: false
};
const MARGINS = ["top", "right", "bottom", "left"];
let reqComponentObserverId$1 = 1;
function normalizeRootMargin(margins = {}) {
  return MARGINS.map(
    (name) => `${Number(margins[name]) || 0}px`
  ).join(" ");
}
class ServiceIntersectionObserver {
  constructor(component, options) {
    this._pageId = getPageIdByVm(component);
    this._component = component;
    this._options = extend({}, defaultOptions, options);
  }
  relativeTo(selector, margins) {
    this._options.relativeToSelector = selector;
    this._options.rootMargin = normalizeRootMargin(margins);
    return this;
  }
  relativeToViewport(margins) {
    this._options.relativeToSelector = void 0;
    this._options.rootMargin = normalizeRootMargin(margins);
    return this;
  }
  observe(selector, callback) {
    if (!isFunction(callback)) {
      return;
    }
    this._options.selector = selector;
    this._reqId = reqComponentObserverId$1++;
    addIntersectionObserver(
      {
        reqId: this._reqId,
        component: this._component,
        options: this._options,
        callback
      },
      this._pageId
    );
  }
  disconnect() {
    this._reqId && removeIntersectionObserver(
      { reqId: this._reqId, component: this._component },
      this._pageId
    );
  }
}
const createIntersectionObserver = /* @__PURE__ */ defineSyncApi("createIntersectionObserver", (context, options) => {
  context = resolveComponentInstance(context);
  if (context && !getPageIdByVm(context)) {
    options = context;
    context = null;
  }
  if (context) {
    return new ServiceIntersectionObserver(context, options);
  }
  return new ServiceIntersectionObserver(getCurrentPageVm(), options);
});
let index$w = 0;
let optionsCache = {};
function operateEditor(componentId, pageId, type, options) {
  const data = { options };
  const needCallOptions = options && ("success" in options || "fail" in options || "complete" in options);
  if (needCallOptions) {
    const callbackId = String(index$w++);
    data.callbackId = callbackId;
    optionsCache[callbackId] = options;
  }
  UniServiceJSBridge$1.invokeViewMethod(
    `editor.${componentId}`,
    {
      type,
      data
    },
    pageId,
    ({ callbackId, data: data2 }) => {
      if (needCallOptions) {
        callOptions(optionsCache[callbackId], data2);
        delete optionsCache[callbackId];
      }
    }
  );
}
class EditorContext {
  constructor(id2, pageId) {
    this.id = id2;
    this.pageId = pageId;
  }
  format(name, value) {
    this._exec("format", {
      name,
      value
    });
  }
  insertDivider() {
    this._exec("insertDivider");
  }
  insertImage(options) {
    this._exec("insertImage", options);
  }
  insertText(options) {
    this._exec("insertText", options);
  }
  setContents(options) {
    this._exec("setContents", options);
  }
  getContents(options) {
    this._exec("getContents", options);
  }
  clear(options) {
    this._exec("clear", options);
  }
  removeFormat(options) {
    this._exec("removeFormat", options);
  }
  undo(options) {
    this._exec("undo", options);
  }
  redo(options) {
    this._exec("redo", options);
  }
  blur(options) {
    this._exec("blur", options);
  }
  getSelectionText(options) {
    this._exec("getSelectionText", options);
  }
  scrollIntoView(options) {
    this._exec("scrollIntoView", options);
  }
  _exec(method, options) {
    operateEditor(this.id, this.pageId, method, options);
  }
}
const ContextClasss = {
  canvas: CanvasContext,
  map: MapContext,
  video: VideoContext,
  editor: EditorContext
};
function convertContext(result) {
  if (result && result.contextInfo) {
    const { id: id2, type, page } = result.contextInfo;
    const ContextClass = ContextClasss[type];
    result.context = new ContextClass(id2, page);
    delete result.contextInfo;
  }
}
class NodesRef {
  constructor(selectorQuery, component, selector, single) {
    this._selectorQuery = selectorQuery;
    this._component = component;
    this._selector = selector;
    this._single = single;
  }
  boundingClientRect(callback) {
    this._selectorQuery._push(
      this._selector,
      this._component,
      this._single,
      {
        id: true,
        dataset: true,
        rect: true,
        size: true
      },
      callback
    );
    return this._selectorQuery;
  }
  fields(fields2, callback) {
    this._selectorQuery._push(
      this._selector,
      this._component,
      this._single,
      fields2,
      callback
    );
    return this._selectorQuery;
  }
  scrollOffset(callback) {
    this._selectorQuery._push(
      this._selector,
      this._component,
      this._single,
      {
        id: true,
        dataset: true,
        scrollOffset: true
      },
      callback
    );
    return this._selectorQuery;
  }
  context(callback) {
    this._selectorQuery._push(
      this._selector,
      this._component,
      this._single,
      {
        context: true
      },
      callback
    );
    return this._selectorQuery;
  }
  node(_callback) {
    return this._selectorQuery;
  }
}
class SelectorQuery {
  constructor(page) {
    this._component = void 0;
    this._page = page;
    this._queue = [];
    this._queueCb = [];
  }
  exec(callback) {
    requestComponentInfo(
      this._page,
      this._queue,
      (res) => {
        const queueCbs = this._queueCb;
        res.forEach((result, index2) => {
          if (isArray(result)) {
            result.forEach(convertContext);
          } else {
            convertContext(result);
          }
          const queueCb = queueCbs[index2];
          if (isFunction(queueCb)) {
            queueCb.call(this, result);
          }
        });
        if (isFunction(callback)) {
          callback.call(this, res);
        }
      }
    );
    return this._nodesRef;
  }
  in(component) {
    this._component = resolveComponentInstance(component);
    return this;
  }
  select(selector) {
    return this._nodesRef = new NodesRef(
      this,
      this._component,
      selector,
      true
    );
  }
  selectAll(selector) {
    return this._nodesRef = new NodesRef(
      this,
      this._component,
      selector,
      false
    );
  }
  selectViewport() {
    return this._nodesRef = new NodesRef(this, null, "", true);
  }
  _push(selector, component, single, fields2, callback) {
    this._queue.push({
      component,
      selector,
      single,
      fields: fields2
    });
    this._queueCb.push(callback);
  }
}
const createSelectorQuery = /* @__PURE__ */ defineSyncApi("createSelectorQuery", (context) => {
  context = resolveComponentInstance(context);
  if (context && !getPageIdByVm(context)) {
    context = null;
  }
  return new SelectorQuery(context || getCurrentPageVm());
});
const API_GET_LOCALE = "getLocale";
const getLocale = /* @__PURE__ */ defineSyncApi(
  API_GET_LOCALE,
  () => {
    return useI18n().getLocale();
  }
);
const API_MAKE_PHONE_CALL = "makePhoneCall";
const API_ON_COMPASS = "onCompass";
const API_OFF_COMPASS = "offCompass";
const API_START_COMPASS = "startCompass";
const API_STOP_COMPASS = "stopCompass";
const API_GET_STORAGE = "getStorage";
const API_GET_STORAGE_SYNC = "getStorageSync";
const API_SET_STORAGE = "setStorage";
const API_SET_STORAGE_SYNC = "setStorageSync";
const API_REMOVE_STORAGE = "removeStorage";
const API_HIDE_KEYBOARD = "hideKeyboard";
const API_GET_LOCATION = "getLocation";
const coordTypes$1 = ["wgs84", "gcj02"];
const GetLocationOptions = {
  formatArgs: {
    type(value, params) {
      value = (value || "").toLowerCase();
      if (coordTypes$1.indexOf(value) === -1) {
        params.type = coordTypes$1[0];
      } else {
        params.type = value;
      }
    },
    altitude(value, params) {
      params.altitude = value ? value : false;
    }
  }
};
const GetLocationProtocol = {
  type: String,
  altitude: Boolean
};
const API_OPEN_LOCATION = "openLocation";
const checkProps = (key, value) => {
  if (value === void 0) {
    return `${key} should not be empty.`;
  }
  if (typeof value !== "number") {
    let receivedType = typeof value;
    receivedType = receivedType[0].toUpperCase() + receivedType.substring(1);
    return `Expected Number, got ${receivedType} with value ${JSON.stringify(
      value
    )}.`;
  }
};
const OpenLocationOptions = {
  formatArgs: {
    latitude(value, params) {
      const checkedInfo = checkProps("latitude", value);
      if (checkedInfo) {
        return checkedInfo;
      }
      params.latitude = value;
    },
    longitude(value, params) {
      const checkedInfo = checkProps("longitude", value);
      if (checkedInfo) {
        return checkedInfo;
      }
      params.longitude = value;
    },
    scale(value, params) {
      value = Math.floor(value);
      params.scale = value >= 5 && value <= 18 ? value : 18;
    }
  }
};
const OpenLocationProtocol = {
  latitude: Number,
  longitude: Number,
  scale: Number,
  name: String,
  address: String
};
const API_CHOOSE_IMAGE = "chooseImage";
const ChooseImageOptions = {
  formatArgs: {
    count(value, params) {
      if (!value || value <= 0) {
        params.count = 9;
      }
    },
    sizeType(sizeType, params) {
      params.sizeType = elemsInArray(sizeType, CHOOSE_SIZE_TYPES);
    },
    sourceType(sourceType, params) {
      params.sourceType = elemsInArray(sourceType, CHOOSE_SOURCE_TYPES);
    },
    extension(extension, params) {
      if (extension instanceof Array && extension.length === 0) {
        return "param extension should not be empty.";
      }
      if (!extension)
        params.extension = ["*"];
    }
  }
};
const ChooseImageProtocol = {
  count: Number,
  sizeType: [Array, String],
  sourceType: Array,
  extension: Array
};
const API_CHOOSE_VIDEO = "chooseVideo";
const ChooseVideoOptions = {
  formatArgs: {
    sourceType(sourceType, params) {
      params.sourceType = elemsInArray(sourceType, CHOOSE_SOURCE_TYPES);
    },
    compressed: true,
    maxDuration: 60,
    camera: "back",
    extension(extension, params) {
      if (extension instanceof Array && extension.length === 0) {
        return "param extension should not be empty.";
      }
      if (!extension)
        params.extension = ["*"];
    }
  }
};
const ChooseVideoProtocol = {
  sourceType: Array,
  compressed: Boolean,
  maxDuration: Number,
  camera: String,
  extension: Array
};
const API_CHOOSE_FILE = "chooseFile";
const CHOOSE_MEDIA_TYPE = [
  "all",
  "image",
  "video"
];
const ChooseFileOptions = {
  formatArgs: {
    count(count, params) {
      if (!count || count <= 0) {
        params.count = 100;
      }
    },
    sourceType(sourceType, params) {
      params.sourceType = elemsInArray(sourceType, CHOOSE_SOURCE_TYPES);
    },
    type(type, params) {
      params.type = elemInArray(type, CHOOSE_MEDIA_TYPE);
    },
    extension(extension, params) {
      if (extension instanceof Array && extension.length === 0) {
        return "param extension should not be empty.";
      }
      if (!extension)
        params.extension = [""];
    }
  }
};
const ChooseFileProtocol = {
  count: Number,
  sourceType: Array,
  type: String,
  extension: Array
};
const API_PREVIEW_IMAGE = "previewImage";
const PreviewImageOptions = {
  formatArgs: {
    urls(urls, params) {
      params.urls = urls.map(
        (url) => isString(url) && url ? getRealPath(url) : ""
      );
    },
    current(current, params) {
      if (typeof current === "number") {
        params.current = current > 0 && current < params.urls.length ? current : 0;
      } else if (isString(current) && current) {
        params.current = getRealPath(current);
      }
    }
  }
};
const PreviewImageProtocol = {
  urls: {
    type: Array,
    required: true
  },
  current: {
    type: [Number, String]
  }
};
const API_CLOSE_PREVIEW_IMAGE = "closePreviewImage";
const API_REQUEST = "request";
const dataType = {
  JSON: "json"
};
const RESPONSE_TYPE = ["text", "arraybuffer"];
const DEFAULT_RESPONSE_TYPE = "text";
const encode = encodeURIComponent;
function stringifyQuery(url, data) {
  let str = url.split("#");
  const hash = str[1] || "";
  str = str[0].split("?");
  let query = str[1] || "";
  url = str[0];
  const search = query.split("&").filter((item) => item);
  const params = {};
  search.forEach((item) => {
    const part = item.split("=");
    params[part[0]] = part[1];
  });
  for (const key in data) {
    if (hasOwn$1(data, key)) {
      let v2 = data[key];
      if (typeof v2 === "undefined" || v2 === null) {
        v2 = "";
      } else if (isPlainObject(v2)) {
        v2 = JSON.stringify(v2);
      }
      params[encode(key)] = encode(v2);
    }
  }
  query = Object.keys(params).map((item) => `${item}=${params[item]}`).join("&");
  return url + (query ? "?" + query : "") + (hash ? "#" + hash : "");
}
const RequestProtocol = {
  method: String,
  data: [Object, String, Array, ArrayBuffer],
  url: {
    type: String,
    required: true
  },
  header: Object,
  dataType: String,
  responseType: String,
  withCredentials: Boolean
};
const RequestOptions = {
  formatArgs: {
    method(value, params) {
      params.method = elemInArray(
        (value || "").toUpperCase(),
        HTTP_METHODS
      );
    },
    data(value, params) {
      params.data = value || "";
    },
    url(value, params) {
      if (params.method === HTTP_METHODS[0] && isPlainObject(params.data) && Object.keys(params.data).length) {
        params.url = stringifyQuery(value, params.data);
      }
    },
    header(value, params) {
      const header = params.header = value || {};
      if (params.method !== HTTP_METHODS[0]) {
        if (!Object.keys(header).find(
          (key) => key.toLowerCase() === "content-type"
        )) {
          header["Content-Type"] = "application/json";
        }
      }
    },
    dataType(value, params) {
      params.dataType = (value || dataType.JSON).toLowerCase();
    },
    responseType(value, params) {
      params.responseType = (value || "").toLowerCase();
      if (RESPONSE_TYPE.indexOf(params.responseType) === -1) {
        params.responseType = DEFAULT_RESPONSE_TYPE;
      }
    }
  }
};
const API_UPLOAD_FILE = "uploadFile";
const UploadFileOptions = {
  formatArgs: {
    filePath(filePath, params) {
      if (filePath) {
        params.filePath = getRealPath(filePath);
      }
    },
    header(value, params) {
      params.header = value || {};
    },
    formData(value, params) {
      params.formData = value || {};
    }
  }
};
const UploadFileProtocol = {
  url: {
    type: String,
    required: true
  },
  files: Array,
  filePath: String,
  name: String,
  header: Object,
  formData: Object,
  timeout: Number
};
function encodeQueryString(url) {
  if (!isString(url)) {
    return url;
  }
  const index2 = url.indexOf("?");
  if (index2 === -1) {
    return url;
  }
  const query = url.slice(index2 + 1).trim().replace(/^(\?|#|&)/, "");
  if (!query) {
    return url;
  }
  url = url.slice(0, index2);
  const params = [];
  query.split("&").forEach((param) => {
    const parts = param.replace(/\+/g, " ").split("=");
    const key = parts.shift();
    const val = parts.length > 0 ? parts.join("=") : "";
    params.push(key + "=" + encodeURIComponent(val));
  });
  return params.length ? url + "?" + params.join("&") : url;
}
const ANIMATION_IN$1 = [
  "slide-in-right",
  "slide-in-left",
  "slide-in-top",
  "slide-in-bottom",
  "fade-in",
  "zoom-out",
  "zoom-fade-out",
  "pop-in",
  "none"
];
const ANIMATION_OUT$1 = [
  "slide-out-right",
  "slide-out-left",
  "slide-out-top",
  "slide-out-bottom",
  "fade-out",
  "zoom-in",
  "zoom-fade-in",
  "pop-out",
  "none"
];
const BaseRouteProtocol = {
  url: {
    type: String,
    required: true
  }
};
const API_NAVIGATE_TO = "navigateTo";
const API_REDIRECT_TO = "redirectTo";
const API_RE_LAUNCH = "reLaunch";
const API_SWITCH_TAB = "switchTab";
const API_NAVIGATE_BACK = "navigateBack";
const API_PRELOAD_PAGE = "preloadPage";
const API_UN_PRELOAD_PAGE = "unPreloadPage";
const NavigateToProtocol = /* @__PURE__ */ extend(
  {},
  BaseRouteProtocol,
  createAnimationProtocol(ANIMATION_IN$1)
);
const NavigateBackProtocol = /* @__PURE__ */ extend(
  {
    delta: {
      type: Number
    }
  },
  createAnimationProtocol(ANIMATION_OUT$1)
);
const RedirectToProtocol = BaseRouteProtocol;
const ReLaunchProtocol = BaseRouteProtocol;
const SwitchTabProtocol = BaseRouteProtocol;
const NavigateToOptions = /* @__PURE__ */ createRouteOptions(API_NAVIGATE_TO);
const RedirectToOptions = /* @__PURE__ */ createRouteOptions(API_REDIRECT_TO);
const ReLaunchOptions = /* @__PURE__ */ createRouteOptions(API_RE_LAUNCH);
const SwitchTabOptions = /* @__PURE__ */ createRouteOptions(API_SWITCH_TAB);
const NavigateBackOptions = {
  formatArgs: {
    delta(value, params) {
      value = parseInt(value + "") || 1;
      params.delta = Math.min(getCurrentPages$1().length - 1, value);
    }
  }
};
function createAnimationProtocol(animationTypes) {
  return {
    animationType: {
      type: String,
      validator(type) {
        if (type && animationTypes.indexOf(type) === -1) {
          return "`" + type + "` is not supported for `animationType` (supported values are: `" + animationTypes.join("`|`") + "`)";
        }
      }
    },
    animationDuration: {
      type: Number
    }
  };
}
let navigatorLock;
function beforeRoute() {
  navigatorLock = "";
}
function createRouteOptions(type) {
  return {
    formatArgs: {
      url: createNormalizeUrl(type)
    },
    beforeAll: beforeRoute
  };
}
function createNormalizeUrl(type) {
  return function normalizeUrl(url, params) {
    if (!url) {
      return `Missing required args: "url"`;
    }
    url = normalizeRoute(url);
    const pagePath = url.split("?")[0];
    const routeOptions = getRouteOptions(pagePath, true);
    if (!routeOptions) {
      return "page `" + url + "` is not found";
    }
    if (type === API_NAVIGATE_TO || type === API_REDIRECT_TO) {
      if (routeOptions.meta.isTabBar) {
        return `can not ${type} a tabbar page`;
      }
    } else if (type === API_SWITCH_TAB) {
      if (!routeOptions.meta.isTabBar) {
        return "can not switch to no-tabBar page";
      }
    }
    if ((type === API_SWITCH_TAB || type === API_PRELOAD_PAGE) && routeOptions.meta.isTabBar && params.openType !== "appLaunch") {
      url = pagePath;
    }
    if (routeOptions.meta.isEntry) {
      url = url.replace(routeOptions.alias, "/");
    }
    params.url = encodeQueryString(url);
    if (type === API_UN_PRELOAD_PAGE) {
      return;
    } else if (type === API_PRELOAD_PAGE) {
      if (routeOptions.meta.isTabBar) {
        const pages = getCurrentPages$1();
        const tabBarPagePath = routeOptions.path.slice(1);
        if (pages.find((page) => page.route === tabBarPagePath)) {
          return "tabBar page `" + tabBarPagePath + "` already exists";
        }
      }
      return;
    }
    if (navigatorLock === url && params.openType !== "appLaunch") {
      return `${navigatorLock} locked`;
    }
    if (__uniConfig.ready) {
      navigatorLock = url;
    }
  };
}
const API_HIDE_LOADING = "hideLoading";
const API_SET_NAVIGATION_BAR_COLOR = "setNavigationBarColor";
const API_SET_NAVIGATION_BAR_TITLE = "setNavigationBarTitle";
const API_SHOW_NAVIGATION_BAR_LOADING = "showNavigationBarLoading";
const API_HIDE_NAVIGATION_BAR_LOADING = "hideNavigationBarLoading";
const API_PAGE_SCROLL_TO = "pageScrollTo";
const PageScrollToProtocol = {
  scrollTop: Number,
  selector: String,
  duration: Number
};
const PageScrollToOptions = {
  formatArgs: {
    duration: 300
  }
};
const API_SHOW_LOADING = "showLoading";
const ShowLoadingProtocol = {
  title: String,
  mask: Boolean
};
const ShowLoadingOptions = {
  formatArgs: {
    title: "",
    mask: false
  }
};
const API_SHOW_MODAL = "showModal";
const ShowModalProtocol = {
  title: String,
  content: String,
  showCancel: Boolean,
  cancelText: String,
  cancelColor: String,
  confirmText: String,
  confirmColor: String
};
const ShowModalOptions = {
  beforeInvoke() {
    initI18nShowModalMsgsOnce();
  },
  formatArgs: {
    title: "",
    content: "",
    placeholderText: "",
    showCancel: true,
    editable: false,
    cancelText(_value, params) {
      if (!hasOwn$1(params, "cancelText")) {
        const { t: t2 } = useI18n();
        params.cancelText = t2("uni.showModal.cancel");
      }
    },
    cancelColor: "#000",
    confirmText(_value, params) {
      if (!hasOwn$1(params, "confirmText")) {
        const { t: t2 } = useI18n();
        params.confirmText = t2("uni.showModal.confirm");
      }
    },
    confirmColor: PRIMARY_COLOR
  }
};
const API_SHOW_TOAST = "showToast";
const SHOW_TOAST_ICON = [
  "success",
  "loading",
  "none",
  "error"
];
const ShowToastProtocol = {
  title: String,
  icon: String,
  image: String,
  duration: Number,
  mask: Boolean
};
const ShowToastOptions = {
  formatArgs: {
    title: "",
    icon(type, params) {
      params.icon = elemInArray(type, SHOW_TOAST_ICON);
    },
    image(value, params) {
      if (value) {
        params.image = getRealPath(value);
      } else {
        params.image = "";
      }
    },
    duration: 1500,
    mask: false
  }
};
const API_START_PULL_DOWN_REFRESH = "startPullDownRefresh";
const API_STOP_PULL_DOWN_REFRESH = "stopPullDownRefresh";
const IndexOptions = {
  beforeInvoke() {
    const pageMeta = getCurrentPageMeta();
    if (pageMeta && !pageMeta.isTabBar) {
      return "not TabBar page";
    }
  },
  formatArgs: {
    index(value) {
      if (!__uniConfig.tabBar.list[value]) {
        return "tabbar item not found";
      }
    }
  }
};
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend(
    {
      pagePath(value, params) {
        if (value) {
          params.pagePath = removeLeadingSlash(value);
        }
      }
    },
    IndexOptions.formatArgs
  )
});
const GRADIENT_RE = /^(linear|radial)-gradient\(.+?\);?$/;
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: {
    backgroundImage(value, params) {
      if (value && !GRADIENT_RE.test(value)) {
        params.backgroundImage = getRealPath(value);
      }
    },
    borderStyle(value, params) {
      if (value) {
        params.borderStyle = value === "white" ? "white" : "black";
      }
    }
  }
});
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend(
    {
      text(value, params) {
        if (getLen(value) >= 4) {
          params.text = "...";
        }
      }
    },
    IndexOptions.formatArgs
  )
});
const initIntersectionObserverPolyfill = function() {
  if (typeof window !== "object") {
    return;
  }
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(
        window.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function() {
            return this.intersectionRatio > 0;
          }
        }
      );
    }
    return;
  }
  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e2) {
      return null;
    }
  }
  var document2 = function(startDoc) {
    var doc = startDoc;
    var frame = getFrameElement(doc);
    while (frame) {
      doc = frame.ownerDocument;
      frame = getFrameElement(doc);
    }
    return doc;
  }(window.document);
  var registry = [];
  var crossOriginUpdater = null;
  var crossOriginRect = null;
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(
      entry.intersectionRect || getEmptyRect()
    );
    this.isIntersecting = !!entry.intersectionRect;
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    if (targetArea) {
      this.intersectionRatio = Number(
        (intersectionArea / targetArea).toFixed(4)
      );
    } else {
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  function IntersectionObserver2(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback != "function") {
      throw new Error("callback must be a function");
    }
    if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) {
      throw new Error("root must be a Document or Element");
    }
    this._checkForIntersections = throttle2(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    );
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(" ");
    this._monitoringDocuments = [];
    this._monitoringUnsubscribes = [];
  }
  IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver2.prototype.POLL_INTERVAL = null;
  IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
  IntersectionObserver2._setupCrossOriginUpdater = function() {
    if (!crossOriginUpdater) {
      crossOriginUpdater = function(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(
            boundingClientRect,
            intersectionRect
          );
        }
        registry.forEach(function(observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };
  IntersectionObserver2._resetCrossOriginUpdater = function() {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };
  IntersectionObserver2.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error("target must be an Element");
    }
    this._registerInstance();
    this._observationTargets.push({ element: target, entry: null });
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };
  IntersectionObserver2.prototype.unobserve = function(target) {
    this._observationTargets = this._observationTargets.filter(function(item) {
      return item.element != target;
    });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };
  IntersectionObserver2.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };
  IntersectionObserver2.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold))
      threshold = [threshold];
    return threshold.sort().filter(function(t2, i, a2) {
      if (typeof t2 != "number" || isNaN(t2) || t2 < 0 || t2 > 1) {
        throw new Error(
          "threshold must be a number between 0 and 1 inclusively"
        );
      }
      return t2 !== a2[i - 1];
    });
  };
  IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || "0px";
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error("rootMargin must be specified in pixels or percent");
      }
      return { value: parseFloat(parts[1]), unit: parts[2] };
    });
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  IntersectionObserver2.prototype._monitorIntersections = function(doc) {
    var win = doc.defaultView;
    if (!win) {
      return;
    }
    if (this._monitoringDocuments.indexOf(doc) != -1) {
      return;
    }
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, "resize", callback, true);
      addEvent(doc, "scroll", callback, true);
      if (this.USE_MUTATION_OBSERVER && "MutationObserver" in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
    this._monitoringDocuments.push(doc);
    this._monitoringUnsubscribes.push(function() {
      var win2 = doc.defaultView;
      if (win2) {
        if (monitoringInterval) {
          win2.clearInterval(monitoringInterval);
        }
        removeEvent(win2, "resize", callback, true);
      }
      removeEvent(doc, "scroll", callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorIntersections = function(doc) {
    var index2 = this._monitoringDocuments.indexOf(doc);
    if (index2 == -1) {
      return;
    }
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    var hasDependentTargets = this._observationTargets.some(function(item) {
      var itemDoc = item.element.ownerDocument;
      if (itemDoc == doc) {
        return true;
      }
      while (itemDoc && itemDoc != rootDoc) {
        var frame2 = getFrameElement(itemDoc);
        itemDoc = frame2 && frame2.ownerDocument;
        if (itemDoc == doc) {
          return true;
        }
      }
      return false;
    });
    if (hasDependentTargets) {
      return;
    }
    var unsubscribe = this._monitoringUnsubscribes[index2];
    this._monitoringDocuments.splice(index2, 1);
    this._monitoringUnsubscribes.splice(index2, 1);
    unsubscribe();
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorAllIntersections = function() {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };
  IntersectionObserver2.prototype._checkForIntersections = function() {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      return;
    }
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
      var rootBounds = null;
      if (!this._rootContainsTarget(target)) {
        rootBounds = getEmptyRect();
      } else if (!crossOriginUpdater || this.root) {
        rootBounds = rootRect;
      }
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target,
        boundingClientRect: targetRect,
        rootBounds,
        intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
    if (window.getComputedStyle(target).display == "none")
      return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      if (parentComputedStyle.display == "none")
        return null;
      if (parent == this.root || parent.nodeType == /* DOCUMENT */
      9) {
        atRoot = true;
        if (parent == this.root || parent == document2) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        var doc = parent.ownerDocument;
        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != "visible") {
          parentRect = getBoundingClientRect(parent);
        }
      }
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect)
        break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };
  IntersectionObserver2.prototype._getRootRect = function() {
    var rootRect;
    if (this.root && !isDoc(this.root)) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      var doc = isDoc(this.root) ? this.root : document2;
      var html = doc.documentElement;
      var body = doc.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    if (oldRatio === newRatio)
      return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  IntersectionObserver2.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document2, this.root);
  };
  IntersectionObserver2.prototype._rootContainsTarget = function(target) {
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
  };
  IntersectionObserver2.prototype._registerInstance = function() {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  IntersectionObserver2.prototype._unregisterInstance = function() {
    var index2 = registry.indexOf(this);
    if (index2 != -1)
      registry.splice(index2, 1);
  };
  function now() {
    return window.performance && performance.now && performance.now();
  }
  function throttle2(fn, timeout) {
    var timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == "function") {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == "function") {
      node.attachEvent("on" + event, fn);
    }
  }
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == "function") {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == "function") {
      node.detatchEvent("on" + event, fn);
    }
  }
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top,
      bottom,
      left,
      right,
      width,
      height
    } || null;
  }
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
    }
    if (!rect)
      return getEmptyRect();
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function ensureDOMRect(rect) {
    if (!rect || "x" in rect) {
      return rect;
    }
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top,
      left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent)
        return true;
      node = getParentNode(node);
    }
    return false;
  }
  function getParentNode(node) {
    var parent = node.parentNode;
    if (node.nodeType == /* DOCUMENT */
    9 && node != document2) {
      return getFrameElement(node);
    }
    if (parent && parent.assignedSlot) {
      parent = parent.assignedSlot.parentNode;
    }
    if (parent && parent.nodeType == 11 && parent.host) {
      return parent.host;
    }
    return parent;
  }
  function isDoc(node) {
    return node && node.nodeType === 9;
  }
  window.IntersectionObserver = IntersectionObserver2;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
};
function normalizeRect(rect) {
  const { bottom, height, left, right, top, width } = rect || {};
  return {
    bottom,
    height,
    left,
    right,
    top,
    width
  };
}
function rectifyIntersectionRatio(entrie) {
  const {
    intersectionRatio,
    boundingClientRect: { height: overAllHeight, width: overAllWidth },
    intersectionRect: { height: intersectionHeight, width: intersectionWidth }
  } = entrie;
  if (intersectionRatio !== 0)
    return intersectionRatio;
  return intersectionHeight === overAllHeight ? intersectionWidth / overAllWidth : intersectionHeight / overAllHeight;
}
function requestComponentObserver($el, options, callback) {
  initIntersectionObserverPolyfill();
  const root = options.relativeToSelector ? $el.querySelector(options.relativeToSelector) : null;
  const intersectionObserver = new IntersectionObserver(
    (entries2) => {
      entries2.forEach((entrie) => {
        callback({
          intersectionRatio: rectifyIntersectionRatio(entrie),
          intersectionRect: normalizeRect(entrie.intersectionRect),
          boundingClientRect: normalizeRect(entrie.boundingClientRect),
          relativeRect: normalizeRect(entrie.rootBounds),
          time: Date.now(),
          dataset: getCustomDataset(entrie.target),
          id: entrie.target.id
        });
      });
    },
    {
      root,
      rootMargin: options.rootMargin,
      threshold: options.thresholds
    }
  );
  if (options.observeAll) {
    intersectionObserver.USE_MUTATION_OBSERVER = true;
    const nodeList = $el.querySelectorAll(options.selector);
    for (let i = 0; i < nodeList.length; i++) {
      intersectionObserver.observe(nodeList[i]);
    }
  } else {
    intersectionObserver.USE_MUTATION_OBSERVER = false;
    const el = $el.querySelector(options.selector);
    if (!el) {
      console.warn(
        `Node ${options.selector} is not found. Intersection observer will not trigger.`
      );
    } else {
      intersectionObserver.observe(el);
    }
  }
  return intersectionObserver;
}
function addIntersectionObserver({ reqId, component, options, callback }, _pageId) {
  const $el = findElem(component);
  ($el.__io || ($el.__io = {}))[reqId] = requestComponentObserver(
    $el,
    options,
    callback
  );
}
function removeIntersectionObserver({ reqId, component }, _pageId) {
  const $el = findElem(component);
  const intersectionObserver = $el.__io && $el.__io[reqId];
  if (intersectionObserver) {
    intersectionObserver.disconnect();
    delete $el.__io[reqId];
  }
}
const files = {};
function urlToFile(url, local) {
  const file = files[url];
  if (file) {
    return Promise.resolve(file);
  }
  if (/^data:[a-z-]+\/[a-z-]+;base64,/.test(url)) {
    return Promise.resolve(base64ToFile(url));
  }
  if (local) {
    return Promise.reject(new Error("not find"));
  }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function() {
      resolve(this.response);
    };
    xhr.onerror = reject;
    xhr.send();
  });
}
function base64ToFile(base64) {
  const base64Array = base64.split(",");
  const res = base64Array[0].match(/:(.*?);/);
  const type = res ? res[1] : "";
  const str = atob(base64Array[1]);
  let n = str.length;
  const array = new Uint8Array(n);
  while (n--) {
    array[n] = str.charCodeAt(n);
  }
  return blobToFile(array, type);
}
function getExtname(type) {
  const extname = type.split("/")[1];
  return extname ? `.${extname}` : "";
}
function blobToFile(blob, type) {
  let file;
  if (blob instanceof File) {
    file = blob;
  } else {
    type = type || blob.type || "";
    const filename = `${Date.now()}${getExtname(type)}`;
    try {
      file = new File([blob], filename, { type });
    } catch (error) {
      blob = blob instanceof Blob ? blob : new Blob([blob], { type });
      file = blob;
      file.name = file.name || filename;
    }
  }
  return file;
}
function fileToUrl(file) {
  for (const key in files) {
    if (hasOwn$1(files, key)) {
      const oldFile = files[key];
      if (oldFile === file) {
        return key;
      }
    }
  }
  var url = (window.URL || window.webkitURL).createObjectURL(file);
  files[url] = file;
  return url;
}
function revokeObjectURL(url) {
  const URL = window.URL || window.webkitURL;
  URL.revokeObjectURL(url);
  delete files[url];
}
const ResizeSensor = /* @__PURE__ */ defineBuiltInComponent({
  name: "ResizeSensor",
  props: {
    initial: {
      type: Boolean,
      default: false
    }
  },
  emits: ["resize"],
  setup(props2, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    const reset = useResizeSensorReset(rootRef);
    const update = useResizeSensorUpdate(rootRef, emit2, reset);
    useResizeSensorLifecycle(rootRef, props2, update, reset);
    return () => createVNode("uni-resize-sensor", {
      "ref": rootRef,
      "onAnimationstartOnce": update
    }, [createVNode("div", {
      "onScroll": update
    }, [createVNode("div", null, null)], 40, ["onScroll"]), createVNode("div", {
      "onScroll": update
    }, [createVNode("div", null, null)], 40, ["onScroll"])], 40, ["onAnimationstartOnce"]);
  }
});
function useResizeSensorUpdate(rootRef, emit2, reset) {
  const size = reactive({
    width: -1,
    height: -1
  });
  watch(() => extend({}, size), (value) => emit2("resize", value));
  return () => {
    const rootEl = rootRef.value;
    size.width = rootEl.offsetWidth;
    size.height = rootEl.offsetHeight;
    reset();
  };
}
function useResizeSensorReset(rootRef) {
  return () => {
    const {
      firstElementChild,
      lastElementChild
    } = rootRef.value;
    firstElementChild.scrollLeft = 1e5;
    firstElementChild.scrollTop = 1e5;
    lastElementChild.scrollLeft = 1e5;
    lastElementChild.scrollTop = 1e5;
  };
}
function useResizeSensorLifecycle(rootRef, props2, update, reset) {
  onActivated(reset);
  onMounted(() => {
    if (props2.initial) {
      nextTick(update);
    }
    const rootEl = rootRef.value;
    if (rootEl.offsetParent !== rootEl.parentElement) {
      rootEl.parentElement.style.position = "relative";
    }
    if (!("AnimationEvent" in window)) {
      reset();
    }
  });
}
let resetTimer;
function iosHideKeyboard() {
}
const props$u = {
  cursorSpacing: {
    type: [Number, String],
    default: 0
  },
  showConfirmBar: {
    type: [Boolean, String],
    default: "auto"
  },
  adjustPosition: {
    type: [Boolean, String],
    default: true
  },
  autoBlur: {
    type: [Boolean, String],
    default: false
  }
};
const emit$1 = ["keyboardheightchange"];
function useKeyboard$1(props2, elRef, trigger) {
  function initKeyboard(el) {
    const isApple = computed(
      () => String(navigator.vendor).indexOf("Apple") === 0
    );
    el.addEventListener("focus", () => {
      clearTimeout(resetTimer);
      document.addEventListener("click", iosHideKeyboard, false);
    });
    const onKeyboardHide = () => {
      document.removeEventListener("click", iosHideKeyboard, false);
      if (isApple.value) {
        document.documentElement.scrollTo(
          document.documentElement.scrollLeft,
          document.documentElement.scrollTop
        );
      }
    };
    el.addEventListener("blur", () => {
      if (isApple.value) {
        el.blur();
      }
      onKeyboardHide();
    });
  }
  watch(
    () => elRef.value,
    (el) => el && initKeyboard(el)
  );
}
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
var empty = /* @__PURE__ */ makeMap(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
);
var block = /* @__PURE__ */ makeMap(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
);
var inline = /* @__PURE__ */ makeMap(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
);
var closeSelf = /* @__PURE__ */ makeMap(
  "colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"
);
var fillAttrs = /* @__PURE__ */ makeMap(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
);
var special = /* @__PURE__ */ makeMap("script,style");
function HTMLParser(html, handler) {
  var index2;
  var chars2;
  var match;
  var stack = [];
  var last = html;
  stack.last = function() {
    return this[this.length - 1];
  };
  while (html) {
    chars2 = true;
    if (!stack.last() || !special[stack.last()]) {
      if (html.indexOf("<!--") == 0) {
        index2 = html.indexOf("-->");
        if (index2 >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index2));
          }
          html = html.substring(index2 + 3);
          chars2 = false;
        }
      } else if (html.indexOf("</") == 0) {
        match = html.match(endTag);
        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(endTag, parseEndTag);
          chars2 = false;
        }
      } else if (html.indexOf("<") == 0) {
        match = html.match(startTag);
        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(startTag, parseStartTag);
          chars2 = false;
        }
      }
      if (chars2) {
        index2 = html.indexOf("<");
        var text2 = index2 < 0 ? html : html.substring(0, index2);
        html = index2 < 0 ? "" : html.substring(index2);
        if (handler.chars) {
          handler.chars(text2);
        }
      }
    } else {
      html = html.replace(
        new RegExp("([\\s\\S]*?)</" + stack.last() + "[^>]*>"),
        function(all, text3) {
          text3 = text3.replace(
            /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
            "$1$2"
          );
          if (handler.chars) {
            handler.chars(text3);
          }
          return "";
        }
      );
      parseEndTag("", stack.last());
    }
    if (html == last) {
      throw "Parse Error: " + html;
    }
    last = html;
  }
  parseEndTag();
  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();
    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag("", stack.last());
      }
    }
    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag("", tagName);
    }
    unary = empty[tagName] || !!unary;
    if (!unary) {
      stack.push(tagName);
    }
    if (handler.start) {
      var attrs2 = [];
      rest.replace(attr, function(match2, name) {
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";
        attrs2.push({
          name,
          value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"')
          // "
        });
      });
      if (handler.start) {
        handler.start(tagName, attrs2, unary);
      }
    }
  }
  function parseEndTag(tag, tagName) {
    if (!tagName) {
      var pos = 0;
    } else {
      for (var pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos] == tagName) {
          break;
        }
      }
    }
    if (pos >= 0) {
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      }
      stack.length = pos;
    }
  }
}
function makeMap(str) {
  var obj = {};
  var items = str.split(",");
  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }
  return obj;
}
const props$s = {
  src: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: "scaleToFill"
  },
  lazyLoad: {
    type: [Boolean, String],
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  }
};
const FIX_MODES = {
  widthFix: ["offsetWidth", "height", (value, ratio) => value / ratio],
  heightFix: ["offsetHeight", "width", (value, ratio) => value * ratio]
};
const IMAGE_MODES = {
  aspectFit: ["center center", "contain"],
  aspectFill: ["center center", "cover"],
  widthFix: [, "100% 100%"],
  heightFix: [, "100% 100%"],
  top: ["center top"],
  bottom: ["center bottom"],
  center: ["center center"],
  left: ["left center"],
  right: ["right center"],
  "top left": ["left top"],
  "top right": ["right top"],
  "bottom left": ["left bottom"],
  "bottom right": ["right bottom"]
};
const index$q = /* @__PURE__ */ defineBuiltInComponent({
  name: "Image",
  props: props$s,
  setup(props2, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    const state2 = useImageState(rootRef, props2);
    const trigger = useCustomEvent(rootRef, emit2);
    const {
      fixSize
    } = useImageSize(rootRef, props2, state2);
    useImageLoader(state2, props2, rootRef, fixSize, trigger);
    return () => {
      return createVNode("uni-image", {
        "ref": rootRef
      }, [createVNode("div", {
        "style": state2.modeStyle
      }, null, 4), FIX_MODES[props2.mode] ? (
        // @ts-ignore
        createVNode(ResizeSensor, {
          "onResize": fixSize
        }, null, 8, ["onResize"])
      ) : createVNode("span", null, null)], 512);
    };
  }
});
function useImageState(rootRef, props2) {
  const imgSrc = ref("");
  const modeStyleRef = computed(() => {
    let size = "auto";
    let position = "";
    const opts = IMAGE_MODES[props2.mode];
    if (!opts) {
      position = "0% 0%";
      size = "100% 100%";
    } else {
      opts[0] && (position = opts[0]);
      opts[1] && (size = opts[1]);
    }
    return `background-image:${imgSrc.value ? 'url("' + imgSrc.value + '")' : "none"};background-position:${position};background-size:${size};`;
  });
  const state2 = reactive({
    rootEl: rootRef,
    src: computed(() => props2.src ? getRealPath(props2.src) : ""),
    origWidth: 0,
    origHeight: 0,
    origStyle: {
      width: "",
      height: ""
    },
    modeStyle: modeStyleRef,
    imgSrc
  });
  onMounted(() => {
    const rootEl = rootRef.value;
    const style = rootEl.style;
    state2.origWidth = Number(style.width) || 0;
    state2.origHeight = Number(style.height) || 0;
  });
  return state2;
}
function useImageLoader(state2, props2, rootRef, fixSize, trigger) {
  let img;
  let draggableImg;
  const setState = (width = 0, height = 0, imgSrc = "") => {
    state2.origWidth = width;
    state2.origHeight = height;
    state2.imgSrc = imgSrc;
  };
  const loadImage = (src) => {
    if (!src) {
      resetImage();
      setState();
      return;
    }
    img = img || new Image();
    img.onload = (evt) => {
      const {
        width,
        height
      } = img;
      setState(width, height, src);
      fixSize();
      img.draggable = props2.draggable;
      if (draggableImg) {
        draggableImg.remove();
      }
      draggableImg = img;
      rootRef.value.appendChild(img);
      resetImage();
      trigger("load", evt, {
        width,
        height
      });
    };
    img.onerror = (evt) => {
      setState();
      resetImage();
      trigger("error", evt, {
        errMsg: `GET ${state2.src} 404 (Not Found)`
      });
    };
    img.src = src;
  };
  const resetImage = () => {
    if (img) {
      img.onload = null;
      img.onerror = null;
      img = null;
    }
  };
  watch(() => state2.src, (value) => loadImage(value));
  watch(() => state2.imgSrc, (value) => {
    if (!value && draggableImg) {
      draggableImg.remove();
      draggableImg = null;
    }
  });
  onMounted(() => loadImage(state2.src));
  onBeforeUnmount(() => resetImage());
}
const isChrome = navigator.vendor === "Google Inc.";
function fixNumber(num) {
  if (isChrome && num > 10) {
    num = Math.round(num / 2) * 2;
  }
  return num;
}
function useImageSize(rootRef, props2, state2) {
  const fixSize = () => {
    const {
      mode: mode2
    } = props2;
    const names = FIX_MODES[mode2];
    if (!names) {
      return;
    }
    const {
      origWidth,
      origHeight
    } = state2;
    const ratio = origWidth && origHeight ? origWidth / origHeight : 0;
    if (!ratio) {
      return;
    }
    const rootEl = rootRef.value;
    const value = rootEl[names[0]];
    if (value) {
      rootEl.style[names[1]] = fixNumber(names[2](value, ratio)) + "px";
    }
  };
  const resetSize = () => {
    const {
      style
    } = rootRef.value;
    const {
      origStyle: {
        width,
        height
      }
    } = state2;
    style.width = width;
    style.height = height;
  };
  watch(() => props2.mode, (value, oldValue) => {
    if (FIX_MODES[oldValue]) {
      resetSize();
    }
    if (FIX_MODES[value]) {
      fixSize();
    }
  });
  return {
    fixSize,
    resetSize
  };
}
function throttle(fn, wait) {
  let last = 0;
  let timeout;
  let waitCallback;
  const newFn = function(...arg) {
    const now = Date.now();
    clearTimeout(timeout);
    waitCallback = () => {
      waitCallback = null;
      last = now;
      fn.apply(this, arg);
    };
    if (now - last < wait) {
      timeout = setTimeout(waitCallback, wait - (now - last));
      return;
    }
    waitCallback();
  };
  newFn.cancel = function() {
    clearTimeout(timeout);
    waitCallback = null;
  };
  newFn.flush = function() {
    clearTimeout(timeout);
    waitCallback && waitCallback();
  };
  return newFn;
}
const passiveOptions$1 = /* @__PURE__ */ passive(true);
const states = [];
let userInteract = 0;
let inited;
const setUserAction = (userAction) => states.forEach((vm) => vm.userAction = userAction);
function addInteractListener(vm = { userAction: false }) {
  if (!inited) {
    const eventNames = [
      "touchstart",
      "touchmove",
      "touchend",
      "mousedown",
      "mouseup"
    ];
    eventNames.forEach((eventName) => {
      document.addEventListener(
        eventName,
        function() {
          !userInteract && setUserAction(true);
          userInteract++;
          setTimeout(() => {
            !--userInteract && setUserAction(false);
          }, 0);
        },
        passiveOptions$1
      );
    });
    inited = true;
  }
  states.push(vm);
}
function removeInteractListener(vm) {
  const index2 = states.indexOf(vm);
  if (index2 >= 0) {
    states.splice(index2, 1);
  }
}
const getInteractStatus = () => !!userInteract;
function useUserAction() {
  const state2 = reactive({
    /**
     * 是否用户激活
     */
    userAction: false
  });
  onMounted(() => {
    addInteractListener(state2);
  });
  onBeforeUnmount(() => {
    removeInteractListener(state2);
  });
  return {
    state: state2
  };
}
function useScopedAttrs() {
  const state2 = reactive({
    attrs: {}
  });
  onMounted(() => {
    let instance2 = getCurrentInstance();
    while (instance2) {
      const scopeId = instance2.type.__scopeId;
      if (scopeId) {
        state2.attrs[scopeId] = "";
      }
      instance2 = instance2.proxy && instance2.proxy.$mpType === "page" ? null : instance2.parent;
    }
  });
  return {
    state: state2
  };
}
function useFormField(nameKey, value) {
  const uniForm = inject(
    uniFormKey,
    false
    // remove warning
  );
  if (!uniForm) {
    return;
  }
  const instance2 = getCurrentInstance();
  const ctx = {
    submit() {
      const proxy = instance2.proxy;
      return [
        proxy[nameKey],
        isString(value) ? proxy[value] : value.value
      ];
    },
    reset() {
      if (isString(value)) {
        instance2.proxy[value] = "";
      } else {
        value.value = "";
      }
    }
  };
  uniForm.addField(ctx);
  onBeforeUnmount(() => {
    uniForm.removeField(ctx);
  });
}
function getSelectedTextRange(_, resolve) {
  const activeElement = document.activeElement;
  if (!activeElement) {
    return resolve({});
  }
  const data = {};
  if (["input", "textarea"].includes(activeElement.tagName.toLowerCase())) {
    data.start = activeElement.selectionStart;
    data.end = activeElement.selectionEnd;
  }
  resolve(data);
}
const UniViewJSBridgeSubscribe = function() {
  registerViewMethod(
    getCurrentPageId(),
    "getSelectedTextRange",
    getSelectedTextRange
  );
};
function getValueString(value, type) {
  if (type === "number" && isNaN(Number(value))) {
    value = "";
  }
  return value === null ? "" : String(value);
}
const INPUT_MODES = [
  "none",
  "text",
  "decimal",
  "numeric",
  "tel",
  "search",
  "email",
  "url"
];
const props$r = /* @__PURE__ */ extend(
  {},
  {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    /**
     * 已废弃属性，用于历史兼容
     */
    autoFocus: {
      type: [Boolean, String],
      default: false
    },
    focus: {
      type: [Boolean, String],
      default: false
    },
    cursor: {
      type: [Number, String],
      default: -1
    },
    selectionStart: {
      type: [Number, String],
      default: -1
    },
    selectionEnd: {
      type: [Number, String],
      default: -1
    },
    type: {
      type: String,
      default: "text"
    },
    password: {
      type: [Boolean, String],
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    placeholderClass: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    confirmType: {
      type: String,
      default: "done"
    },
    confirmHold: {
      type: Boolean,
      default: false
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    step: {
      type: String,
      default: "0.000000000000000001"
    },
    inputmode: {
      type: String,
      default: void 0,
      validator: (value) => !!~INPUT_MODES.indexOf(value)
    }
  },
  props$u
);
const emit = [
  "input",
  "focus",
  "blur",
  "update:value",
  "update:modelValue",
  "update:focus",
  "compositionstart",
  "compositionupdate",
  "compositionend",
  ...emit$1
];
function useBase(props2, rootRef, emit2) {
  const fieldRef = ref(null);
  const trigger = useCustomEvent(rootRef, emit2);
  const selectionStart = computed(() => {
    const selectionStart2 = Number(props2.selectionStart);
    return isNaN(selectionStart2) ? -1 : selectionStart2;
  });
  const selectionEnd = computed(() => {
    const selectionEnd2 = Number(props2.selectionEnd);
    return isNaN(selectionEnd2) ? -1 : selectionEnd2;
  });
  const cursor = computed(() => {
    const cursor2 = Number(props2.cursor);
    return isNaN(cursor2) ? -1 : cursor2;
  });
  const maxlength = computed(() => {
    var maxlength2 = Number(props2.maxlength);
    return isNaN(maxlength2) ? 140 : maxlength2;
  });
  const value = getValueString(props2.modelValue, props2.type) || getValueString(props2.value, props2.type);
  const state2 = reactive({
    value,
    valueOrigin: value,
    maxlength,
    focus: props2.focus,
    composing: false,
    selectionStart,
    selectionEnd,
    cursor
  });
  watch(
    () => state2.focus,
    (val) => emit2("update:focus", val)
  );
  watch(
    () => state2.maxlength,
    (val) => state2.value = state2.value.slice(0, val)
  );
  return {
    fieldRef,
    state: state2,
    trigger
  };
}
function useValueSync(props2, state2, emit2, trigger) {
  const valueChangeFn = debounce(
    (val) => {
      state2.value = getValueString(val, props2.type);
    },
    100,
    { setTimeout, clearTimeout }
  );
  watch(() => props2.modelValue, valueChangeFn);
  watch(() => props2.value, valueChangeFn);
  const triggerInputFn = throttle((event, detail) => {
    valueChangeFn.cancel();
    emit2("update:modelValue", detail.value);
    emit2("update:value", detail.value);
    trigger("input", event, detail);
  }, 100);
  const triggerInput = (event, detail, force) => {
    valueChangeFn.cancel();
    triggerInputFn(event, detail);
    if (force) {
      triggerInputFn.flush();
    }
  };
  onBeforeMount(() => {
    valueChangeFn.cancel();
    triggerInputFn.cancel();
  });
  return {
    trigger,
    triggerInput
  };
}
function useAutoFocus(props2, fieldRef) {
  useUserAction();
  const needFocus = computed(() => props2.autoFocus || props2.focus);
  function focus() {
    if (!needFocus.value) {
      return;
    }
    const field = fieldRef.value;
    if (!field || false) {
      setTimeout(focus, 100);
      return;
    }
    {
      field.focus();
    }
  }
  function blur() {
    const field = fieldRef.value;
    if (field) {
      field.blur();
    }
  }
  watch(
    () => props2.focus,
    (value) => {
      if (value) {
        focus();
      } else {
        blur();
      }
    }
  );
  onMounted(() => {
    if (needFocus.value) {
      nextTick(focus);
    }
  });
}
function useEvent(fieldRef, state2, props2, trigger, triggerInput, beforeInput) {
  function checkSelection() {
    const field = fieldRef.value;
    if (field && state2.focus && state2.selectionStart > -1 && state2.selectionEnd > -1 && field.type !== "number") {
      field.selectionStart = state2.selectionStart;
      field.selectionEnd = state2.selectionEnd;
    }
  }
  function checkCursor() {
    const field = fieldRef.value;
    if (field && state2.focus && state2.selectionStart < 0 && state2.selectionEnd < 0 && state2.cursor > -1 && field.type !== "number") {
      field.selectionEnd = field.selectionStart = state2.cursor;
    }
  }
  function getFieldSelectionEnd(field) {
    if (field.type === "number") {
      return null;
    } else {
      return field.selectionEnd;
    }
  }
  function initField() {
    const field = fieldRef.value;
    if (!field)
      return;
    const onFocus = function(event) {
      state2.focus = true;
      trigger("focus", event, {
        value: state2.value
      });
      checkSelection();
      checkCursor();
    };
    const onInput = function(event, force) {
      event.stopPropagation();
      if (isFunction(beforeInput) && beforeInput(event, state2) === false) {
        return;
      }
      state2.value = field.value;
      if (!state2.composing || !props2.ignoreCompositionEvent) {
        triggerInput(
          event,
          {
            value: field.value,
            cursor: getFieldSelectionEnd(field)
          },
          force
        );
      }
    };
    const onBlur = function(event) {
      if (state2.composing) {
        state2.composing = false;
        onInput(event, true);
      }
      state2.focus = false;
      trigger("blur", event, {
        value: state2.value,
        cursor: getFieldSelectionEnd(event.target)
      });
    };
    field.addEventListener("change", (event) => event.stopPropagation());
    field.addEventListener("focus", onFocus);
    field.addEventListener("blur", onBlur);
    field.addEventListener("input", onInput);
    field.addEventListener("compositionstart", (event) => {
      event.stopPropagation();
      state2.composing = true;
      _onComposition(event);
    });
    field.addEventListener("compositionend", (event) => {
      event.stopPropagation();
      if (state2.composing) {
        state2.composing = false;
        onInput(event);
      }
      _onComposition(event);
    });
    field.addEventListener("compositionupdate", _onComposition);
    function _onComposition(event) {
      if (!props2.ignoreCompositionEvent) {
        trigger(event.type, event, {
          value: event.data
        });
      }
    }
  }
  watch([() => state2.selectionStart, () => state2.selectionEnd], checkSelection);
  watch(() => state2.cursor, checkCursor);
  watch(() => fieldRef.value, initField);
}
function useField(props2, rootRef, emit2, beforeInput) {
  UniViewJSBridgeSubscribe();
  const { fieldRef, state: state2, trigger } = useBase(props2, rootRef, emit2);
  const { triggerInput } = useValueSync(props2, state2, emit2, trigger);
  useAutoFocus(props2, fieldRef);
  useKeyboard$1(props2, fieldRef);
  const { state: scopedAttrsState } = useScopedAttrs();
  useFormField("name", state2);
  useEvent(fieldRef, state2, props2, trigger, triggerInput, beforeInput);
  const fixDisabledColor = String(navigator.vendor).indexOf("Apple") === 0 && CSS.supports("image-orientation:from-image");
  return {
    fieldRef,
    state: state2,
    scopedAttrsState,
    fixDisabledColor,
    trigger
  };
}
const props$q = /* @__PURE__ */ extend({}, props$r, {
  placeholderClass: {
    type: String,
    default: "input-placeholder"
  },
  textContentType: {
    type: String,
    default: ""
  }
});
const Input = /* @__PURE__ */ defineBuiltInComponent({
  name: "Input",
  props: props$q,
  emits: ["confirm", ...emit],
  setup(props2, {
    emit: emit2
  }) {
    const INPUT_TYPES = ["text", "number", "idcard", "digit", "password", "tel"];
    const AUTOCOMPLETES = ["off", "one-time-code"];
    const type = computed(() => {
      let type2 = "";
      switch (props2.type) {
        case "text":
          if (props2.confirmType === "search") {
            type2 = "search";
          }
          break;
        case "idcard":
          type2 = "text";
          break;
        case "digit":
          type2 = "number";
          break;
        default:
          type2 = ~INPUT_TYPES.includes(props2.type) ? props2.type : "text";
          break;
      }
      return props2.password ? "password" : type2;
    });
    const autocomplete = computed(() => {
      const camelizeIndex = AUTOCOMPLETES.indexOf(props2.textContentType);
      const kebabCaseIndex = AUTOCOMPLETES.indexOf(hyphenate(props2.textContentType));
      const index2 = camelizeIndex !== -1 ? camelizeIndex : kebabCaseIndex !== -1 ? kebabCaseIndex : 0;
      return AUTOCOMPLETES[index2];
    });
    let cache = ref("");
    let resetCache;
    const rootRef = ref(null);
    const {
      fieldRef,
      state: state2,
      scopedAttrsState,
      fixDisabledColor,
      trigger
    } = useField(props2, rootRef, emit2, (event, state3) => {
      const input = event.target;
      if (type.value === "number") {
        if (resetCache) {
          input.removeEventListener("blur", resetCache);
          resetCache = null;
        }
        if (input.validity && !input.validity.valid) {
          if ((!cache.value || !input.value) && event.data === "-" || cache.value[0] === "-" && event.inputType === "deleteContentBackward") {
            cache.value = "-";
            state3.value = "";
            resetCache = () => {
              cache.value = input.value = "";
            };
            input.addEventListener("blur", resetCache);
            return false;
          }
          if (cache.value) {
            if (cache.value.indexOf(".") !== -1) {
              if (event.data !== "." && event.inputType === "deleteContentBackward") {
                const dotIndex = cache.value.indexOf(".");
                cache.value = input.value = state3.value = cache.value.slice(0, dotIndex);
                return true;
              }
            } else if (event.data === ".") {
              cache.value += ".";
              resetCache = () => {
                cache.value = input.value = cache.value.slice(0, -1);
              };
              input.addEventListener("blur", resetCache);
              return false;
            }
          }
          cache.value = state3.value = input.value = cache.value === "-" ? "" : cache.value;
          return false;
        } else {
          cache.value = input.value;
        }
        const maxlength = state3.maxlength;
        if (maxlength > 0 && input.value.length > maxlength) {
          input.value = input.value.slice(0, maxlength);
          state3.value = input.value;
          return false;
        }
      }
    });
    watch(() => state2.value, (value) => {
      if (props2.type === "number" && !(cache.value === "-" && value === "")) {
        cache.value = value;
      }
    });
    const NUMBER_TYPES = ["number", "digit"];
    const step = computed(() => NUMBER_TYPES.includes(props2.type) ? props2.step : "");
    function onKeyUpEnter(event) {
      if (event.key !== "Enter") {
        return;
      }
      const input = event.target;
      event.stopPropagation();
      trigger("confirm", event, {
        value: input.value
      });
      !props2.confirmHold && input.blur();
    }
    return () => {
      let inputNode = props2.disabled && fixDisabledColor ? createVNode("input", {
        "key": "disabled-input",
        "ref": fieldRef,
        "value": state2.value,
        "tabindex": "-1",
        "readonly": !!props2.disabled,
        "type": type.value,
        "maxlength": state2.maxlength,
        "step": step.value,
        "class": "uni-input-input",
        "onFocus": (event) => event.target.blur()
      }, null, 40, ["value", "readonly", "type", "maxlength", "step", "onFocus"]) : withDirectives(createVNode("input", {
        "key": "input",
        "ref": fieldRef,
        "onUpdate:modelValue": ($event) => state2.value = $event,
        "disabled": !!props2.disabled,
        "type": type.value,
        "maxlength": state2.maxlength,
        "step": step.value,
        "enterkeyhint": props2.confirmType,
        "pattern": props2.type === "number" ? "[0-9]*" : void 0,
        "class": "uni-input-input",
        "autocomplete": autocomplete.value,
        "onKeyup": onKeyUpEnter,
        "inputmode": props2.inputmode
      }, null, 40, ["onUpdate:modelValue", "disabled", "type", "maxlength", "step", "enterkeyhint", "pattern", "autocomplete", "onKeyup", "inputmode"]), [[vModelDynamic, state2.value]]);
      return createVNode("uni-input", {
        "ref": rootRef
      }, [createVNode("div", {
        "class": "uni-input-wrapper"
      }, [withDirectives(createVNode("div", mergeProps(scopedAttrsState.attrs, {
        "style": props2.placeholderStyle,
        "class": ["uni-input-placeholder", props2.placeholderClass]
      }), [props2.placeholder], 16), [[vShow, !(state2.value.length || cache.value === "-")]]), props2.confirmType === "search" ? createVNode("form", {
        "action": "",
        "onSubmit": (event) => event.preventDefault(),
        "class": "uni-input-form"
      }, [inputNode], 40, ["onSubmit"]) : inputNode])], 512);
    };
  }
});
function entries(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]+/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const instance2 = getCurrentInstance();
  const attrs2 = shallowRef({});
  const listeners2 = shallowRef({});
  const excludeAttrs = shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance2.attrs = reactive(instance2.attrs);
  watchEffect(() => {
    const res = entries(instance2.attrs).reduce(
      (acc, [key, val]) => {
        if (allExcludeKeys.includes(key)) {
          acc.exclude[key] = val;
        } else if (LISTENER_PREFIX.test(key)) {
          if (!excludeListeners) {
            acc.attrs[key] = val;
          }
          acc.listeners[key] = val;
        } else {
          acc.attrs[key] = val;
        }
        return acc;
      },
      {
        exclude: {},
        attrs: {},
        listeners: {}
      }
    );
    attrs2.value = res.attrs;
    listeners2.value = res.listeners;
    excludeAttrs.value = res.exclude;
  });
  return { $attrs: attrs2, $listeners: listeners2, $excludeAttrs: excludeAttrs };
};
function flatVNode(nodes) {
  const array = [];
  if (isArray(nodes)) {
    nodes.forEach((vnode) => {
      if (isVNode(vnode)) {
        if (vnode.type === Fragment) {
          array.push(...flatVNode(vnode.children));
        } else {
          array.push(vnode);
        }
      } else if (isArray(vnode)) {
        array.push(...flatVNode(vnode));
      }
    });
  }
  return array;
}
const movableAreaProps = {
  scaleArea: {
    type: Boolean,
    default: false
  }
};
const MovableArea = /* @__PURE__ */ defineBuiltInComponent({
  inheritAttrs: false,
  name: "MovableArea",
  props: movableAreaProps,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const _isMounted = ref(false);
    let {
      setContexts,
      events: movableAreaEvents
    } = useMovableAreaState(props2, rootRef);
    const {
      $listeners,
      $attrs,
      $excludeAttrs
    } = useAttrs();
    const _listeners = $listeners.value;
    let events = ["onTouchstart", "onTouchmove", "onTouchend"];
    events.forEach((event) => {
      let existing = _listeners[event];
      let ours = movableAreaEvents[`_${event}`];
      _listeners[event] = existing ? [].concat(existing, ours) : ours;
    });
    onMounted(() => {
      movableAreaEvents._resize();
      _isMounted.value = true;
    });
    let movableViewItems = [];
    const originMovableViewContexts = [];
    function updateMovableViewContexts() {
      const contexts = [];
      for (let index2 = 0; index2 < movableViewItems.length; index2++) {
        let movableViewItem = movableViewItems[index2];
        {
          movableViewItem = movableViewItem.el;
        }
        const movableViewContext = originMovableViewContexts.find((context) => movableViewItem === context.rootRef.value);
        if (movableViewContext) {
          contexts.push(markRaw(movableViewContext));
        }
      }
      setContexts(contexts);
    }
    const addMovableViewContext = (movableViewContext) => {
      originMovableViewContexts.push(movableViewContext);
      updateMovableViewContexts();
    };
    const removeMovableViewContext = (movableViewContext) => {
      const index2 = originMovableViewContexts.indexOf(movableViewContext);
      if (index2 >= 0) {
        originMovableViewContexts.splice(index2, 1);
        updateMovableViewContexts();
      }
    };
    provide("_isMounted", _isMounted);
    provide("movableAreaRootRef", rootRef);
    provide("addMovableViewContext", addMovableViewContext);
    provide("removeMovableViewContext", removeMovableViewContext);
    return () => {
      const defaultSlots = slots.default && slots.default();
      {
        movableViewItems = flatVNode(defaultSlots);
      }
      return createVNode("uni-movable-area", mergeProps({
        "ref": rootRef
      }, $attrs.value, $excludeAttrs.value, _listeners), [createVNode(ResizeSensor, {
        "onResize": movableAreaEvents._resize
      }, null, 8, ["onResize"]), movableViewItems], 16);
    };
  }
});
function calc(e2) {
  return Math.sqrt(e2.x * e2.x + e2.y * e2.y);
}
function useMovableAreaState(props2, rootRef) {
  const width = ref(0);
  const height = ref(0);
  const gapV = reactive({
    x: null,
    y: null
  });
  const pinchStartLen = ref(null);
  let _scaleMovableView = null;
  let movableViewContexts = [];
  function _updateScale(e2) {
    if (e2 && e2 !== 1) {
      if (props2.scaleArea) {
        movableViewContexts.forEach(function(item) {
          item._setScale(e2);
        });
      } else {
        if (_scaleMovableView) {
          _scaleMovableView._setScale(e2);
        }
      }
    }
  }
  function _find(target, items = movableViewContexts) {
    let root = rootRef.value;
    function get(node) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (node === item.rootRef.value) {
          return item;
        }
      }
      if (node === root || node === document.body || node === document) {
        return null;
      }
      return get(node.parentNode);
    }
    return get(target);
  }
  const _onTouchstart = withWebEvent((t2) => {
    let i = t2.touches;
    if (i) {
      if (i.length > 1) {
        let r = {
          x: i[1].pageX - i[0].pageX,
          y: i[1].pageY - i[0].pageY
        };
        pinchStartLen.value = calc(r);
        gapV.x = r.x;
        gapV.y = r.y;
        if (!props2.scaleArea) {
          let touch0 = _find(i[0].target);
          let touch1 = _find(i[1].target);
          _scaleMovableView = touch0 && touch0 === touch1 ? touch0 : null;
        }
      }
    }
  });
  const _onTouchmove = withWebEvent((t2) => {
    let n = t2.touches;
    if (n) {
      if (n.length > 1) {
        t2.preventDefault();
        let i = {
          x: n[1].pageX - n[0].pageX,
          y: n[1].pageY - n[0].pageY
        };
        if (gapV.x !== null && pinchStartLen.value && pinchStartLen.value > 0) {
          let r = calc(i) / pinchStartLen.value;
          _updateScale(r);
        }
        gapV.x = i.x;
        gapV.y = i.y;
      }
    }
  });
  const _onTouchend = withWebEvent((e2) => {
    let t2 = e2.touches;
    if (!(t2 && t2.length)) {
      if (e2.changedTouches) {
        gapV.x = 0;
        gapV.y = 0;
        pinchStartLen.value = null;
        if (props2.scaleArea) {
          movableViewContexts.forEach(function(item) {
            item._endScale();
          });
        } else {
          if (_scaleMovableView) {
            _scaleMovableView._endScale();
          }
        }
      }
    }
  });
  function _resize() {
    _getWH();
    movableViewContexts.forEach(function(item, index2) {
      item.setParent();
    });
  }
  function _getWH() {
    let style = window.getComputedStyle(rootRef.value);
    let rect = rootRef.value.getBoundingClientRect();
    width.value = rect.width - ["Left", "Right"].reduce(function(all, item) {
      const LEFT = "border" + item + "Width";
      const RIGHT = "padding" + item;
      return all + parseFloat(style[LEFT]) + parseFloat(style[RIGHT]);
    }, 0);
    height.value = rect.height - ["Top", "Bottom"].reduce(function(all, item) {
      const TOP = "border" + item + "Width";
      const BOTTOM = "padding" + item;
      return all + parseFloat(style[TOP]) + parseFloat(style[BOTTOM]);
    }, 0);
  }
  provide("movableAreaWidth", width);
  provide("movableAreaHeight", height);
  return {
    setContexts(contexts) {
      movableViewContexts = contexts;
    },
    events: {
      _onTouchstart,
      _onTouchmove,
      _onTouchend,
      _resize
    }
  };
}
const addListenerToElement = function(element, type, callback, capture) {
  element.addEventListener(
    type,
    ($event) => {
      if (isFunction(callback)) {
        if (callback($event) === false) {
          if (typeof $event.cancelable !== "undefined" ? $event.cancelable : true) {
            $event.preventDefault();
          }
          $event.stopPropagation();
        }
      }
    },
    {
      passive: false
    }
  );
};
let __mouseMoveEventListener;
let __mouseUpEventListener;
function useTouchtrack(element, method, useCancel) {
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", __mouseMoveEventListener);
    document.removeEventListener("mouseup", __mouseUpEventListener);
  });
  let x0 = 0;
  let y0 = 0;
  let x1 = 0;
  let y1 = 0;
  const fn = function($event, state2, x, y) {
    if (method({
      // @ts-expect-error
      cancelable: $event.cancelable,
      target: $event.target,
      currentTarget: $event.currentTarget,
      preventDefault: $event.preventDefault.bind($event),
      stopPropagation: $event.stopPropagation.bind($event),
      touches: $event.touches,
      changedTouches: $event.changedTouches,
      detail: {
        state: state2,
        x,
        y,
        dx: x - x0,
        dy: y - y0,
        ddx: x - x1,
        ddy: y - y1,
        timeStamp: $event.timeStamp
      }
    }) === false) {
      return false;
    }
  };
  let $eventOld = null;
  let hasTouchStart;
  let hasMouseDown;
  addListenerToElement(element, "touchstart", function($event) {
    hasTouchStart = true;
    if ($event.touches.length === 1 && !$eventOld) {
      $eventOld = $event;
      x0 = x1 = $event.touches[0].pageX;
      y0 = y1 = $event.touches[0].pageY;
      return fn($event, "start", x0, y0);
    }
  });
  addListenerToElement(element, "mousedown", function($event) {
    hasMouseDown = true;
    if (!hasTouchStart && !$eventOld) {
      $eventOld = $event;
      x0 = x1 = $event.pageX;
      y0 = y1 = $event.pageY;
      return fn($event, "start", x0, y0);
    }
  });
  addListenerToElement(element, "touchmove", function($event) {
    if ($event.touches.length === 1 && $eventOld) {
      const res = fn(
        $event,
        "move",
        $event.touches[0].pageX,
        $event.touches[0].pageY
      );
      x1 = $event.touches[0].pageX;
      y1 = $event.touches[0].pageY;
      return res;
    }
  });
  const mouseMoveEventListener = __mouseMoveEventListener = function($event) {
    if (!hasTouchStart && hasMouseDown && $eventOld) {
      const res = fn($event, "move", $event.pageX, $event.pageY);
      x1 = $event.pageX;
      y1 = $event.pageY;
      return res;
    }
  };
  document.addEventListener("mousemove", mouseMoveEventListener);
  addListenerToElement(element, "touchend", function($event) {
    if ($event.touches.length === 0 && $eventOld) {
      hasTouchStart = false;
      $eventOld = null;
      return fn(
        $event,
        "end",
        $event.changedTouches[0].pageX,
        $event.changedTouches[0].pageY
      );
    }
  });
  const mouseUpEventListener = __mouseUpEventListener = function($event) {
    hasMouseDown = false;
    if (!hasTouchStart && $eventOld) {
      $eventOld = null;
      return fn($event, "end", $event.pageX, $event.pageY);
    }
  };
  document.addEventListener("mouseup", mouseUpEventListener);
  addListenerToElement(element, "touchcancel", function($event) {
    if ($eventOld) {
      hasTouchStart = false;
      const $eventTemp = $eventOld;
      $eventOld = null;
      return fn(
        $event,
        useCancel ? "cancel" : "end",
        $eventTemp.touches[0].pageX,
        $eventTemp.touches[0].pageY
      );
    }
  });
}
function e(e2, t2, n) {
  return e2 > t2 - n && e2 < t2 + n;
}
function t(t2, n) {
  return e(t2, 0, n);
}
function Decline() {
}
Decline.prototype.x = function(e2) {
  return Math.sqrt(e2);
};
function Friction$1(e2, t2) {
  this._m = e2;
  this._f = 1e3 * t2;
  this._startTime = 0;
  this._v = 0;
}
Friction$1.prototype.setV = function(x, y) {
  const n = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
  this._x_v = x;
  this._y_v = y;
  this._x_a = -this._f * this._x_v / n;
  this._y_a = -this._f * this._y_v / n;
  this._t = Math.abs(x / this._x_a) || Math.abs(y / this._y_a);
  this._lastDt = null;
  this._startTime = (/* @__PURE__ */ new Date()).getTime();
};
Friction$1.prototype.setS = function(x, y) {
  this._x_s = x;
  this._y_s = y;
};
Friction$1.prototype.s = function(t2) {
  if (void 0 === t2) {
    t2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  if (t2 > this._t) {
    t2 = this._t;
    this._lastDt = t2;
  }
  let x = this._x_v * t2 + 0.5 * this._x_a * Math.pow(t2, 2) + this._x_s;
  let y = this._y_v * t2 + 0.5 * this._y_a * Math.pow(t2, 2) + this._y_s;
  if (this._x_a > 0 && x < this._endPositionX || this._x_a < 0 && x > this._endPositionX) {
    x = this._endPositionX;
  }
  if (this._y_a > 0 && y < this._endPositionY || this._y_a < 0 && y > this._endPositionY) {
    y = this._endPositionY;
  }
  return {
    x,
    y
  };
};
Friction$1.prototype.ds = function(t2) {
  if (void 0 === t2) {
    t2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  if (t2 > this._t) {
    t2 = this._t;
  }
  return {
    dx: this._x_v + this._x_a * t2,
    dy: this._y_v + this._y_a * t2
  };
};
Friction$1.prototype.delta = function() {
  return {
    x: -1.5 * Math.pow(this._x_v, 2) / this._x_a || 0,
    y: -1.5 * Math.pow(this._y_v, 2) / this._y_a || 0
  };
};
Friction$1.prototype.dt = function() {
  return -this._x_v / this._x_a;
};
Friction$1.prototype.done = function() {
  const t2 = e(this.s().x, this._endPositionX) || e(this.s().y, this._endPositionY) || this._lastDt === this._t;
  this._lastDt = null;
  return t2;
};
Friction$1.prototype.setEnd = function(x, y) {
  this._endPositionX = x;
  this._endPositionY = y;
};
Friction$1.prototype.reconfigure = function(m, f2) {
  this._m = m;
  this._f = 1e3 * f2;
};
function Spring$1(m, k, c) {
  this._m = m;
  this._k = k;
  this._c = c;
  this._solution = null;
  this._endPosition = 0;
  this._startTime = 0;
}
Spring$1.prototype._solve = function(e2, t2) {
  const n = this._c;
  const i = this._m;
  const r = this._k;
  const o2 = n * n - 4 * i * r;
  if (o2 === 0) {
    const a2 = -n / (2 * i);
    const s = e2;
    const l = t2 / (a2 * e2);
    return {
      x: function(e3) {
        return (s + l * e3) * Math.pow(Math.E, a2 * e3);
      },
      dx: function(e3) {
        const t3 = Math.pow(Math.E, a2 * e3);
        return a2 * (s + l * e3) * t3 + l * t3;
      }
    };
  }
  if (o2 > 0) {
    const c = (-n - Math.sqrt(o2)) / (2 * i);
    const u = (-n + Math.sqrt(o2)) / (2 * i);
    const d = (t2 - c * e2) / (u - c);
    const h2 = e2 - d;
    return {
      x: function(e3) {
        let t3;
        let n2;
        if (e3 === this._t) {
          t3 = this._powER1T;
          n2 = this._powER2T;
        }
        this._t = e3;
        if (!t3) {
          t3 = this._powER1T = Math.pow(Math.E, c * e3);
        }
        if (!n2) {
          n2 = this._powER2T = Math.pow(Math.E, u * e3);
        }
        return h2 * t3 + d * n2;
      },
      dx: function(e3) {
        let t3;
        let n2;
        if (e3 === this._t) {
          t3 = this._powER1T;
          n2 = this._powER2T;
        }
        this._t = e3;
        if (!t3) {
          t3 = this._powER1T = Math.pow(Math.E, c * e3);
        }
        if (!n2) {
          n2 = this._powER2T = Math.pow(Math.E, u * e3);
        }
        return h2 * c * t3 + d * u * n2;
      }
    };
  }
  const p2 = Math.sqrt(4 * i * r - n * n) / (2 * i);
  const f2 = -n / 2 * i;
  const v2 = e2;
  const g2 = (t2 - f2 * e2) / p2;
  return {
    x: function(e3) {
      return Math.pow(Math.E, f2 * e3) * (v2 * Math.cos(p2 * e3) + g2 * Math.sin(p2 * e3));
    },
    dx: function(e3) {
      const t3 = Math.pow(Math.E, f2 * e3);
      const n2 = Math.cos(p2 * e3);
      const i2 = Math.sin(p2 * e3);
      return t3 * (g2 * p2 * n2 - v2 * p2 * i2) + f2 * t3 * (g2 * i2 + v2 * n2);
    }
  };
};
Spring$1.prototype.x = function(e2) {
  if (void 0 === e2) {
    e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  return this._solution ? this._endPosition + this._solution.x(e2) : 0;
};
Spring$1.prototype.dx = function(e2) {
  if (void 0 === e2) {
    e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  return this._solution ? this._solution.dx(e2) : 0;
};
Spring$1.prototype.setEnd = function(e2, n, i) {
  if (!i) {
    i = (/* @__PURE__ */ new Date()).getTime();
  }
  if (e2 !== this._endPosition || !t(n, 0.1)) {
    n = n || 0;
    let r = this._endPosition;
    if (this._solution) {
      if (t(n, 0.1)) {
        n = this._solution.dx((i - this._startTime) / 1e3);
      }
      r = this._solution.x((i - this._startTime) / 1e3);
      if (t(n, 0.1)) {
        n = 0;
      }
      if (t(r, 0.1)) {
        r = 0;
      }
      r += this._endPosition;
    }
    if (!(this._solution && t(r - e2, 0.1) && t(n, 0.1))) {
      this._endPosition = e2;
      this._solution = this._solve(r - this._endPosition, n);
      this._startTime = i;
    }
  }
};
Spring$1.prototype.snap = function(e2) {
  this._startTime = (/* @__PURE__ */ new Date()).getTime();
  this._endPosition = e2;
  this._solution = {
    x: function() {
      return 0;
    },
    dx: function() {
      return 0;
    }
  };
};
Spring$1.prototype.done = function(n) {
  if (!n) {
    n = (/* @__PURE__ */ new Date()).getTime();
  }
  return e(this.x(), this._endPosition, 0.1) && t(this.dx(), 0.1);
};
Spring$1.prototype.reconfigure = function(m, t2, c) {
  this._m = m;
  this._k = t2;
  this._c = c;
  if (!this.done()) {
    this._solution = this._solve(this.x() - this._endPosition, this.dx());
    this._startTime = (/* @__PURE__ */ new Date()).getTime();
  }
};
Spring$1.prototype.springConstant = function() {
  return this._k;
};
Spring$1.prototype.damping = function() {
  return this._c;
};
Spring$1.prototype.configuration = function() {
  function e2(e3, t3) {
    e3.reconfigure(1, t3, e3.damping());
  }
  function t2(e3, t3) {
    e3.reconfigure(1, e3.springConstant(), t3);
  }
  return [
    {
      label: "Spring Constant",
      read: this.springConstant.bind(this),
      write: e2.bind(this, this),
      min: 100,
      max: 1e3
    },
    {
      label: "Damping",
      read: this.damping.bind(this),
      write: t2.bind(this, this),
      min: 1,
      max: 500
    }
  ];
};
function STD(e2, t2, n) {
  this._springX = new Spring$1(e2, t2, n);
  this._springY = new Spring$1(e2, t2, n);
  this._springScale = new Spring$1(e2, t2, n);
  this._startTime = 0;
}
STD.prototype.setEnd = function(e2, t2, n, i) {
  const r = (/* @__PURE__ */ new Date()).getTime();
  this._springX.setEnd(e2, i, r);
  this._springY.setEnd(t2, i, r);
  this._springScale.setEnd(n, i, r);
  this._startTime = r;
};
STD.prototype.x = function() {
  const e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  return {
    x: this._springX.x(e2),
    y: this._springY.x(e2),
    scale: this._springScale.x(e2)
  };
};
STD.prototype.done = function() {
  const e2 = (/* @__PURE__ */ new Date()).getTime();
  return this._springX.done(e2) && this._springY.done(e2) && this._springScale.done(e2);
};
STD.prototype.reconfigure = function(e2, t2, n) {
  this._springX.reconfigure(e2, t2, n);
  this._springY.reconfigure(e2, t2, n);
  this._springScale.reconfigure(e2, t2, n);
};
const movableViewProps = {
  direction: {
    type: String,
    default: "none"
  },
  inertia: {
    type: [Boolean, String],
    default: false
  },
  outOfBounds: {
    type: [Boolean, String],
    default: false
  },
  x: {
    type: [Number, String],
    default: 0
  },
  y: {
    type: [Number, String],
    default: 0
  },
  damping: {
    type: [Number, String],
    default: 20
  },
  friction: {
    type: [Number, String],
    default: 2
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  scale: {
    type: [Boolean, String],
    default: false
  },
  scaleMin: {
    type: [Number, String],
    default: 0.5
  },
  scaleMax: {
    type: [Number, String],
    default: 10
  },
  scaleValue: {
    type: [Number, String],
    default: 1
  },
  animation: {
    type: [Boolean, String],
    default: true
  }
};
function v(a2, b) {
  return +((1e3 * a2 - 1e3 * b) / 1e3).toFixed(1);
}
const MovableView = /* @__PURE__ */ defineBuiltInComponent({
  name: "MovableView",
  props: movableViewProps,
  emits: ["change", "scale"],
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const trigger = useCustomEvent(rootRef, emit2);
    const {
      setParent
    } = useMovableViewState(props2, trigger, rootRef);
    return () => {
      return createVNode("uni-movable-view", {
        "ref": rootRef
      }, [createVNode(ResizeSensor, {
        "onResize": setParent
      }, null, 8, ["onResize"]), slots.default && slots.default()], 512);
    };
  }
});
let requesting = false;
function _requestAnimationFrame(e2) {
  if (!requesting) {
    requesting = true;
    requestAnimationFrame(function() {
      e2();
      requesting = false;
    });
  }
}
function p(t2, n) {
  if (t2 === n) {
    return 0;
  }
  let i = t2.offsetLeft;
  return t2.offsetParent ? i += p(t2.offsetParent, n) : 0;
}
function f(t2, n) {
  if (t2 === n) {
    return 0;
  }
  let i = t2.offsetTop;
  return t2.offsetParent ? i += f(t2.offsetParent, n) : 0;
}
function g(friction, execute, endCallback) {
  let record = {
    id: 0,
    cancelled: false
  };
  let cancel = function(record2) {
    if (record2 && record2.id) {
      cancelAnimationFrame(record2.id);
    }
    if (record2) {
      record2.cancelled = true;
    }
  };
  function fn(record2, friction2, execute2, endCallback2) {
    if (!record2 || !record2.cancelled) {
      execute2(friction2);
      let isDone = friction2.done();
      if (!isDone) {
        if (!record2.cancelled) {
          record2.id = requestAnimationFrame(fn.bind(null, record2, friction2, execute2, endCallback2));
        }
      }
      if (isDone && endCallback2) {
        endCallback2(friction2);
      }
    }
  }
  fn(record, friction, execute, endCallback);
  return {
    cancel: cancel.bind(null, record),
    model: friction
  };
}
function _getPx(val) {
  if (/\d+[ur]px$/i.test(val)) {
    return upx2px(parseFloat(val));
  }
  return Number(val) || 0;
}
function useMovableViewLayout(rootRef, _scale, _adjustScale) {
  const movableAreaWidth = inject("movableAreaWidth", ref(0));
  const movableAreaHeight = inject("movableAreaHeight", ref(0));
  const movableAreaRootRef = inject("movableAreaRootRef");
  const _offset = {
    x: 0,
    y: 0
  };
  const _scaleOffset = {
    x: 0,
    y: 0
  };
  const width = ref(0);
  const height = ref(0);
  const minX = ref(0);
  const minY = ref(0);
  const maxX = ref(0);
  const maxY = ref(0);
  function _updateBoundary() {
    let x = 0 - _offset.x + _scaleOffset.x;
    let _width = movableAreaWidth.value - width.value - _offset.x - _scaleOffset.x;
    minX.value = Math.min(x, _width);
    maxX.value = Math.max(x, _width);
    let y = 0 - _offset.y + _scaleOffset.y;
    let _height = movableAreaHeight.value - height.value - _offset.y - _scaleOffset.y;
    minY.value = Math.min(y, _height);
    maxY.value = Math.max(y, _height);
  }
  function _updateOffset() {
    _offset.x = p(rootRef.value, movableAreaRootRef.value);
    _offset.y = f(rootRef.value, movableAreaRootRef.value);
  }
  function _updateWH(scale) {
    scale = scale || _scale.value;
    scale = _adjustScale(scale);
    let rect = rootRef.value.getBoundingClientRect();
    height.value = rect.height / _scale.value;
    width.value = rect.width / _scale.value;
    let _height = height.value * scale;
    let _width = width.value * scale;
    _scaleOffset.x = (_width - width.value) / 2;
    _scaleOffset.y = (_height - height.value) / 2;
  }
  return {
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY
  };
}
function useMovableViewTransform(rootRef, props2, _scaleOffset, _scale, maxX, maxY, minX, minY, _translateX, _translateY, _SFA, _FA, _adjustScale, trigger) {
  const dampingNumber = computed(() => {
    let val = Number(props2.damping);
    return isNaN(val) ? 20 : val;
  });
  const xMove = computed(() => props2.direction === "all" || props2.direction === "horizontal");
  const yMove = computed(() => props2.direction === "all" || props2.direction === "vertical");
  const xSync = ref(_getPx(props2.x));
  const ySync = ref(_getPx(props2.y));
  watch(() => props2.x, (val) => {
    xSync.value = _getPx(val);
  });
  watch(() => props2.y, (val) => {
    ySync.value = _getPx(val);
  });
  watch(xSync, (val) => {
    _setX(val);
  });
  watch(ySync, (val) => {
    _setY(val);
  });
  const _STD = new STD(1, 9 * Math.pow(dampingNumber.value, 2) / 40, dampingNumber.value);
  function _getLimitXY(x, y) {
    let outOfBounds = false;
    if (x > maxX.value) {
      x = maxX.value;
      outOfBounds = true;
    } else {
      if (x < minX.value) {
        x = minX.value;
        outOfBounds = true;
      }
    }
    if (y > maxY.value) {
      y = maxY.value;
      outOfBounds = true;
    } else {
      if (y < minY.value) {
        y = minY.value;
        outOfBounds = true;
      }
    }
    return {
      x,
      y,
      outOfBounds
    };
  }
  function FAandSFACancel() {
    if (_FA) {
      _FA.cancel();
    }
    if (_SFA) {
      _SFA.cancel();
    }
  }
  function _animationTo(x, y, scale, source, r, o2) {
    FAandSFACancel();
    if (!xMove.value) {
      x = _translateX.value;
    }
    if (!yMove.value) {
      y = _translateY.value;
    }
    if (!props2.scale) {
      scale = _scale.value;
    }
    let limitXY = _getLimitXY(x, y);
    x = limitXY.x;
    y = limitXY.y;
    if (!props2.animation) {
      _setTransform(x, y, scale, source, r, o2);
      return;
    }
    _STD._springX._solution = null;
    _STD._springY._solution = null;
    _STD._springScale._solution = null;
    _STD._springX._endPosition = _translateX.value;
    _STD._springY._endPosition = _translateY.value;
    _STD._springScale._endPosition = _scale.value;
    _STD.setEnd(x, y, scale, 1);
    _SFA = g(_STD, function() {
      let data = _STD.x();
      let x2 = data.x;
      let y2 = data.y;
      let scale2 = data.scale;
      _setTransform(x2, y2, scale2, source, r, o2);
    }, function() {
      _SFA.cancel();
    });
  }
  function _setTransform(x, y, scale, source = "", r, o2) {
    if (!(x !== null && x.toString() !== "NaN" && typeof x === "number")) {
      x = _translateX.value || 0;
    }
    if (!(y !== null && y.toString() !== "NaN" && typeof y === "number")) {
      y = _translateY.value || 0;
    }
    x = Number(x.toFixed(1));
    y = Number(y.toFixed(1));
    scale = Number(scale.toFixed(1));
    if (!(_translateX.value === x && _translateY.value === y)) {
      if (!r) {
        trigger("change", {}, {
          x: v(x, _scaleOffset.x),
          y: v(y, _scaleOffset.y),
          source
        });
      }
    }
    if (!props2.scale) {
      scale = _scale.value;
    }
    scale = _adjustScale(scale);
    scale = +scale.toFixed(3);
    if (o2 && scale !== _scale.value) {
      trigger("scale", {}, {
        x,
        y,
        scale
      });
    }
    let transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(0px) scale(" + scale + ")";
    if (rootRef.value) {
      rootRef.value.style.transform = transform;
      rootRef.value.style.webkitTransform = transform;
      _translateX.value = x;
      _translateY.value = y;
      _scale.value = scale;
    }
  }
  function _revise(source) {
    let limitXY = _getLimitXY(_translateX.value, _translateY.value);
    let x = limitXY.x;
    let y = limitXY.y;
    let outOfBounds = limitXY.outOfBounds;
    if (outOfBounds) {
      _animationTo(x, y, _scale.value, source);
    }
    return outOfBounds;
  }
  function _setX(val) {
    if (xMove.value) {
      if (val + _scaleOffset.x === _translateX.value) {
        return _translateX;
      } else {
        if (_SFA) {
          _SFA.cancel();
        }
        _animationTo(val + _scaleOffset.x, ySync.value + _scaleOffset.y, _scale.value);
      }
    }
    return val;
  }
  function _setY(val) {
    if (yMove.value) {
      if (val + _scaleOffset.y === _translateY.value) {
        return _translateY;
      } else {
        if (_SFA) {
          _SFA.cancel();
        }
        _animationTo(xSync.value + _scaleOffset.x, val + _scaleOffset.y, _scale.value);
      }
    }
    return val;
  }
  return {
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  };
}
function useMovableViewInit(props2, rootRef, trigger, _scale, _oldScale, _isScaling, _translateX, _translateY, _SFA, _FA) {
  const scaleMinNumber = computed(() => {
    let val = Number(props2.scaleMin);
    return isNaN(val) ? 0.5 : val;
  });
  const scaleMaxNumber = computed(() => {
    let val = Number(props2.scaleMax);
    return isNaN(val) ? 10 : val;
  });
  const scaleValueSync = ref(Number(props2.scaleValue) || 1);
  watch(scaleValueSync, (val) => {
    _setScaleValue(val);
  });
  watch(scaleMinNumber, () => {
    _setScaleMinOrMax();
  });
  watch(scaleMaxNumber, () => {
    _setScaleMinOrMax();
  });
  watch(() => props2.scaleValue, (val) => {
    scaleValueSync.value = Number(val) || 0;
  });
  const {
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY
  } = useMovableViewLayout(rootRef, _scale, _adjustScale);
  const {
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  } = useMovableViewTransform(rootRef, props2, _scaleOffset, _scale, maxX, maxY, minX, minY, _translateX, _translateY, _SFA, _FA, _adjustScale, trigger);
  function _updateScale(scale, animat) {
    if (props2.scale) {
      scale = _adjustScale(scale);
      _updateWH(scale);
      _updateBoundary();
      const limitXY = _getLimitXY(_translateX.value, _translateY.value);
      const x = limitXY.x;
      const y = limitXY.y;
      if (animat) {
        _animationTo(x, y, scale, "", true, true);
      } else {
        _requestAnimationFrame(function() {
          _setTransform(x, y, scale, "", true, true);
        });
      }
    }
  }
  function _beginScale() {
    _isScaling.value = true;
  }
  function _updateOldScale(scale) {
    _oldScale.value = scale;
  }
  function _adjustScale(scale) {
    scale = Math.max(0.5, scaleMinNumber.value, scale);
    scale = Math.min(10, scaleMaxNumber.value, scale);
    return scale;
  }
  function _setScaleMinOrMax() {
    if (!props2.scale) {
      return false;
    }
    _updateScale(_scale.value, true);
    _updateOldScale(_scale.value);
  }
  function _setScaleValue(scale) {
    if (!props2.scale) {
      return false;
    }
    scale = _adjustScale(scale);
    _updateScale(scale, true);
    _updateOldScale(scale);
    return scale;
  }
  function _endScale() {
    _isScaling.value = false;
    _updateOldScale(_scale.value);
  }
  function _setScale(scale) {
    if (scale) {
      scale = _oldScale.value * scale;
      _beginScale();
      _updateScale(scale);
    }
  }
  return {
    // scale
    _updateOldScale,
    _endScale,
    _setScale,
    scaleValueSync,
    // layout
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY,
    // transform
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  };
}
function useMovableViewState(props2, trigger, rootRef) {
  const _isMounted = inject("_isMounted", ref(false));
  const addMovableViewContext = inject("addMovableViewContext", () => {
  });
  const removeMovableViewContext = inject("removeMovableViewContext", () => {
  });
  let _scale = ref(1);
  let _oldScale = ref(1);
  let _isScaling = ref(false);
  let _translateX = ref(0);
  let _translateY = ref(0);
  let _SFA = null;
  let _FA = null;
  let _isTouching = false;
  let __baseX;
  let __baseY;
  let _checkCanMove = null;
  let _firstMoveDirection = null;
  const _declineX = new Decline();
  const _declineY = new Decline();
  const __touchInfo = {
    historyX: [0, 0],
    historyY: [0, 0],
    historyT: [0, 0]
  };
  const frictionNumber = computed(() => {
    let val = Number(props2.friction);
    return isNaN(val) || val <= 0 ? 2 : val;
  });
  const _friction = new Friction$1(1, frictionNumber.value);
  watch(() => props2.disabled, () => {
    __handleTouchStart();
  });
  const {
    // scale
    _updateOldScale,
    _endScale,
    _setScale,
    scaleValueSync,
    // layout
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY,
    // transform
    FAandSFACancel,
    _getLimitXY,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  } = useMovableViewInit(props2, rootRef, trigger, _scale, _oldScale, _isScaling, _translateX, _translateY, _SFA, _FA);
  function __handleTouchStart() {
    if (!_isScaling.value) {
      if (!props2.disabled) {
        FAandSFACancel();
        __touchInfo.historyX = [0, 0];
        __touchInfo.historyY = [0, 0];
        __touchInfo.historyT = [0, 0];
        if (xMove.value) {
          __baseX = _translateX.value;
        }
        if (yMove.value) {
          __baseY = _translateY.value;
        }
        rootRef.value.style.willChange = "transform";
        _checkCanMove = null;
        _firstMoveDirection = null;
        _isTouching = true;
      }
    }
  }
  function __handleTouchMove(event) {
    if (!_isScaling.value && !props2.disabled && _isTouching) {
      let x = _translateX.value;
      let y = _translateY.value;
      if (_firstMoveDirection === null) {
        _firstMoveDirection = Math.abs(event.detail.dx / event.detail.dy) > 1 ? "htouchmove" : "vtouchmove";
      }
      if (xMove.value) {
        x = event.detail.dx + __baseX;
        __touchInfo.historyX.shift();
        __touchInfo.historyX.push(x);
        if (!yMove.value && _checkCanMove === null) {
          _checkCanMove = Math.abs(event.detail.dx / event.detail.dy) < 1;
        }
      }
      if (yMove.value) {
        y = event.detail.dy + __baseY;
        __touchInfo.historyY.shift();
        __touchInfo.historyY.push(y);
        if (!xMove.value && _checkCanMove === null) {
          _checkCanMove = Math.abs(event.detail.dy / event.detail.dx) < 1;
        }
      }
      __touchInfo.historyT.shift();
      __touchInfo.historyT.push(event.detail.timeStamp);
      if (!_checkCanMove) {
        event.preventDefault();
        let source = "touch";
        if (x < minX.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            x = minX.value - _declineX.x(minX.value - x);
          } else {
            x = minX.value;
          }
        } else if (x > maxX.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            x = maxX.value + _declineX.x(x - maxX.value);
          } else {
            x = maxX.value;
          }
        }
        if (y < minY.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            y = minY.value - _declineY.x(minY.value - y);
          } else {
            y = minY.value;
          }
        } else {
          if (y > maxY.value) {
            if (props2.outOfBounds) {
              source = "touch-out-of-bounds";
              y = maxY.value + _declineY.x(y - maxY.value);
            } else {
              y = maxY.value;
            }
          }
        }
        _requestAnimationFrame(function() {
          _setTransform(x, y, _scale.value, source);
        });
      }
    }
  }
  function __handleTouchEnd() {
    if (!_isScaling.value && !props2.disabled && _isTouching) {
      rootRef.value.style.willChange = "auto";
      _isTouching = false;
      if (!_checkCanMove && !_revise("out-of-bounds") && props2.inertia) {
        const xv = 1e3 * (__touchInfo.historyX[1] - __touchInfo.historyX[0]) / (__touchInfo.historyT[1] - __touchInfo.historyT[0]);
        const yv = 1e3 * (__touchInfo.historyY[1] - __touchInfo.historyY[0]) / (__touchInfo.historyT[1] - __touchInfo.historyT[0]);
        const __translateX = _translateX.value;
        const __translateY = _translateY.value;
        _friction.setV(xv, yv);
        _friction.setS(__translateX, __translateY);
        const x0 = _friction.delta().x;
        const y0 = _friction.delta().y;
        let x = x0 + __translateX;
        let y = y0 + __translateY;
        if (x < minX.value) {
          x = minX.value;
          y = __translateY + (minX.value - __translateX) * y0 / x0;
        } else {
          if (x > maxX.value) {
            x = maxX.value;
            y = __translateY + (maxX.value - __translateX) * y0 / x0;
          }
        }
        if (y < minY.value) {
          y = minY.value;
          x = __translateX + (minY.value - __translateY) * x0 / y0;
        } else {
          if (y > maxY.value) {
            y = maxY.value;
            x = __translateX + (maxY.value - __translateY) * x0 / y0;
          }
        }
        _friction.setEnd(x, y);
        _FA = g(_friction, function() {
          let t2 = _friction.s();
          let x2 = t2.x;
          let y2 = t2.y;
          _setTransform(x2, y2, _scale.value, "friction");
        }, function() {
          _FA.cancel();
        });
      }
    }
    if (!props2.outOfBounds && !props2.inertia) {
      FAandSFACancel();
    }
  }
  function setParent() {
    if (!_isMounted.value) {
      return;
    }
    FAandSFACancel();
    let scale = props2.scale ? scaleValueSync.value : 1;
    _updateOffset();
    _updateWH(scale);
    _updateBoundary();
    let limitXY = _getLimitXY(xSync.value + _scaleOffset.x, ySync.value + _scaleOffset.y);
    let x = limitXY.x;
    let y = limitXY.y;
    _setTransform(x, y, scale, "", true);
    _updateOldScale(scale);
  }
  onMounted(() => {
    useTouchtrack(rootRef.value, (event) => {
      switch (event.detail.state) {
        case "start":
          __handleTouchStart();
          break;
        case "move":
          __handleTouchMove(event);
          break;
        case "end":
          __handleTouchEnd();
      }
    });
    setParent();
    _friction.reconfigure(1, frictionNumber.value);
    _STD.reconfigure(1, 9 * Math.pow(dampingNumber.value, 2) / 40, dampingNumber.value);
    rootRef.value.style.transformOrigin = "center";
    const context = {
      rootRef,
      setParent,
      _endScale,
      _setScale
    };
    addMovableViewContext(context);
    onUnmounted(() => {
      removeMovableViewContext(context);
    });
  });
  onUnmounted(() => {
    FAandSFACancel();
  });
  return {
    setParent
  };
}
const OPEN_TYPES = [
  "navigate",
  "redirect",
  "switchTab",
  "reLaunch",
  "navigateBack"
];
const ANIMATION_IN = [
  "slide-in-right",
  "slide-in-left",
  "slide-in-top",
  "slide-in-bottom",
  "fade-in",
  "zoom-out",
  "zoom-fade-out",
  "pop-in",
  "none"
];
const ANIMATION_OUT = [
  "slide-out-right",
  "slide-out-left",
  "slide-out-top",
  "slide-out-bottom",
  "fade-out",
  "zoom-in",
  "zoom-fade-in",
  "pop-out",
  "none"
];
const navigatorProps = {
  hoverClass: {
    type: String,
    default: "navigator-hover"
  },
  url: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: "navigate",
    validator(value) {
      return Boolean(~OPEN_TYPES.indexOf(value));
    }
  },
  delta: {
    type: Number,
    default: 1
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 600
  },
  exists: {
    type: String,
    default: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  animationType: {
    type: String,
    default: "",
    validator(value) {
      return !value || ANIMATION_IN.concat(ANIMATION_OUT).includes(value);
    }
  },
  animationDuration: {
    type: [String, Number],
    default: 300
  }
};
function createNavigatorOnClick(props2) {
  return () => {
    if (props2.openType !== "navigateBack" && !props2.url) {
      console.error(
        "<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab"
      );
      return;
    }
    const animationDuration = parseInt(props2.animationDuration);
    switch (props2.openType) {
      case "navigate":
        navigateTo({
          url: props2.url,
          animationType: props2.animationType || "pop-in",
          animationDuration
        });
        break;
      case "redirect":
        redirectTo({
          url: props2.url,
          // @ts-ignore
          exists: props2.exists
        });
        break;
      case "switchTab":
        switchTab({
          url: props2.url
        });
        break;
      case "reLaunch":
        reLaunch({
          url: props2.url
        });
        break;
      case "navigateBack":
        navigateBack({
          delta: props2.delta,
          animationType: props2.animationType || "pop-out",
          animationDuration
        });
        break;
    }
  };
}
/* @__PURE__ */ defineBuiltInComponent({
  name: "Navigator",
  inheritAttrs: false,
  compatConfig: {
    MODE: 3
  },
  props: extend({}, navigatorProps, {
    renderLink: {
      type: Boolean,
      default: true
    }
  }),
  setup(props2, {
    slots
  }) {
    const vm = getCurrentInstance();
    const __scopeId = vm && vm.vnode.scopeId || "";
    const {
      hovering,
      binding
    } = useHover(props2);
    const onClick = createNavigatorOnClick(props2);
    return () => {
      const {
        hoverClass,
        url
      } = props2;
      const hasHoverClass = props2.hoverClass && props2.hoverClass !== "none";
      const navigatorTsx = createVNode("uni-navigator", mergeProps({
        "class": hasHoverClass && hovering.value ? hoverClass : ""
      }, hasHoverClass && binding, vm ? vm.attrs : {}, {
        [__scopeId]: ""
      }, {
        "onClick": onClick
      }), [slots.default && slots.default()], 16, ["onClick"]);
      return props2.renderLink ? createVNode("a", {
        "class": "navigator-wrap",
        "href": url,
        "onClick": onEventPrevent,
        "onMousedown": onEventPrevent
      }, [navigatorTsx], 40, ["href", "onClick", "onMousedown"]) : navigatorTsx;
    };
  }
});
const pickerViewProps = {
  value: {
    type: Array,
    default() {
      return [];
    },
    validator: function(val) {
      return isArray(val) && val.filter((val2) => typeof val2 === "number").length === val.length;
    }
  },
  indicatorStyle: {
    type: String,
    default: ""
  },
  indicatorClass: {
    type: String,
    default: ""
  },
  maskStyle: {
    type: String,
    default: ""
  },
  maskClass: {
    type: String,
    default: ""
  }
};
function useState$4(props2) {
  const value = reactive([...props2.value]);
  const state2 = reactive({
    value,
    height: 34
  });
  watch(() => props2.value, (val, oldVal) => {
    {
      state2.value.length = val.length;
      val.forEach((val2, index2) => {
        if (val2 !== state2.value[index2]) {
          state2.value.splice(index2, 1, val2);
        }
      });
    }
  });
  return state2;
}
const PickerView = /* @__PURE__ */ defineBuiltInComponent({
  name: "PickerView",
  props: pickerViewProps,
  emits: ["change", "pickstart", "pickend", "update:value"],
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const wrapperRef = ref(null);
    const trigger = useCustomEvent(rootRef, emit2);
    const state2 = useState$4(props2);
    const resizeSensorRef = ref(null);
    const onMountedCallback = () => {
      const resizeSensor = resizeSensorRef.value;
      resizeSensor && (state2.height = resizeSensor.$el.offsetHeight);
    };
    {
      onMounted(onMountedCallback);
    }
    let ColumnsPreRef = ref([]);
    let columnsRef = ref([]);
    function getItemIndex(vnode) {
      let columnVNodes = columnsRef.value;
      {
        columnVNodes = columnVNodes.filter((vnode2) => vnode2.type !== Comment);
      }
      let index2 = columnVNodes.indexOf(vnode);
      return index2 !== -1 ? index2 : ColumnsPreRef.value.indexOf(vnode);
    }
    const getPickerViewColumn = function(columnInstance) {
      const ref2 = computed({
        get() {
          const index2 = getItemIndex(columnInstance.vnode);
          return state2.value[index2] || 0;
        },
        set(current) {
          const index2 = getItemIndex(columnInstance.vnode);
          if (index2 < 0) {
            return;
          }
          const oldCurrent = state2.value[index2];
          if (oldCurrent !== current) {
            state2.value[index2] = current;
            const value = state2.value.map((val) => val);
            emit2("update:value", value);
            trigger("change", {}, {
              value
            });
          }
        }
      });
      return ref2;
    };
    provide("getPickerViewColumn", getPickerViewColumn);
    provide("pickerViewProps", props2);
    provide("pickerViewState", state2);
    return () => {
      const defaultSlots = slots.default && slots.default();
      {
        const vnode = flatVNode(defaultSlots);
        ColumnsPreRef.value = vnode;
        nextTick(() => {
          columnsRef.value = vnode;
        });
      }
      return createVNode("uni-picker-view", {
        "ref": rootRef
      }, [createVNode(ResizeSensor, {
        "ref": resizeSensorRef,
        "onResize": ({
          height
        }) => state2.height = height
      }, null, 8, ["onResize"]), createVNode("div", {
        "ref": wrapperRef,
        "class": "uni-picker-view-wrapper"
      }, [defaultSlots], 512)], 512);
    };
  }
});
class Friction {
  constructor(drag) {
    this._drag = drag;
    this._dragLog = Math.log(drag);
    this._x = 0;
    this._v = 0;
    this._startTime = 0;
  }
  set(x, v2) {
    this._x = x;
    this._v = v2;
    this._startTime = (/* @__PURE__ */ new Date()).getTime();
  }
  setVelocityByEnd(e2) {
    this._v = (e2 - this._x) * this._dragLog / (Math.pow(this._drag, 100) - 1);
  }
  x(e2) {
    if (e2 === void 0) {
      e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
    }
    const t2 = e2 === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, e2);
    this._dt = e2;
    return this._x + this._v * t2 / this._dragLog - this._v / this._dragLog;
  }
  dx(e2) {
    if (e2 === void 0) {
      e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
    }
    const t2 = e2 === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, e2);
    this._dt = e2;
    return this._v * t2;
  }
  done() {
    return Math.abs(this.dx()) < 3;
  }
  reconfigure(e2) {
    const t2 = this.x();
    const n = this.dx();
    this._drag = e2;
    this._dragLog = Math.log(e2);
    this.set(t2, n);
  }
  configuration() {
    const e2 = this;
    return [
      {
        label: "Friction",
        read: function() {
          return e2._drag;
        },
        write: function(t2) {
          e2.reconfigure(t2);
        },
        min: 1e-3,
        max: 0.1,
        step: 1e-3
      }
    ];
  }
}
function o(e2, t2, n) {
  return e2 > t2 - n && e2 < t2 + n;
}
function a(e2, t2) {
  return o(e2, 0, t2);
}
class Spring {
  constructor(m, k, c) {
    this._m = m;
    this._k = k;
    this._c = c;
    this._solution = null;
    this._endPosition = 0;
    this._startTime = 0;
  }
  _solve(e2, t2) {
    const n = this._c;
    const i = this._m;
    const r = this._k;
    const o2 = n * n - 4 * i * r;
    if (o2 === 0) {
      const a3 = -n / (2 * i);
      const s2 = e2;
      const l2 = t2 / (a3 * e2);
      return {
        x: function(e22) {
          return (s2 + l2 * e22) * Math.pow(Math.E, a3 * e22);
        },
        dx: function(e22) {
          const t22 = Math.pow(Math.E, a3 * e22);
          return a3 * (s2 + l2 * e22) * t22 + l2 * t22;
        }
      };
    }
    if (o2 > 0) {
      const c = (-n - Math.sqrt(o2)) / (2 * i);
      const u = (-n + Math.sqrt(o2)) / (2 * i);
      const l2 = (t2 - c * e2) / (u - c);
      const s2 = e2 - l2;
      return {
        x: function(e22) {
          let t22;
          let n2;
          if (e22 === this._t) {
            t22 = this._powER1T;
            n2 = this._powER2T;
          }
          this._t = e22;
          if (!t22) {
            t22 = this._powER1T = Math.pow(Math.E, c * e22);
          }
          if (!n2) {
            n2 = this._powER2T = Math.pow(Math.E, u * e22);
          }
          return s2 * t22 + l2 * n2;
        },
        dx: function(e22) {
          let t22;
          let n2;
          if (e22 === this._t) {
            t22 = this._powER1T;
            n2 = this._powER2T;
          }
          this._t = e22;
          if (!t22) {
            t22 = this._powER1T = Math.pow(Math.E, c * e22);
          }
          if (!n2) {
            n2 = this._powER2T = Math.pow(Math.E, u * e22);
          }
          return s2 * c * t22 + l2 * u * n2;
        }
      };
    }
    const d = Math.sqrt(4 * i * r - n * n) / (2 * i);
    const a2 = -n / 2 * i;
    const s = e2;
    const l = (t2 - a2 * e2) / d;
    return {
      x: function(e22) {
        return Math.pow(Math.E, a2 * e22) * (s * Math.cos(d * e22) + l * Math.sin(d * e22));
      },
      dx: function(e22) {
        const t22 = Math.pow(Math.E, a2 * e22);
        const n2 = Math.cos(d * e22);
        const i2 = Math.sin(d * e22);
        return t22 * (l * d * n2 - s * d * i2) + a2 * t22 * (l * i2 + s * n2);
      }
    };
  }
  x(e2) {
    if (e2 === void 0) {
      e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
    }
    return this._solution ? this._endPosition + this._solution.x(e2) : 0;
  }
  dx(e2) {
    if (e2 === void 0) {
      e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
    }
    return this._solution ? this._solution.dx(e2) : 0;
  }
  setEnd(e2, t2, n) {
    if (!n) {
      n = (/* @__PURE__ */ new Date()).getTime();
    }
    if (e2 !== this._endPosition || !a(t2, 0.4)) {
      t2 = t2 || 0;
      let i = this._endPosition;
      if (this._solution) {
        if (a(t2, 0.4)) {
          t2 = this._solution.dx((n - this._startTime) / 1e3);
        }
        i = this._solution.x((n - this._startTime) / 1e3);
        if (a(t2, 0.4)) {
          t2 = 0;
        }
        if (a(i, 0.4)) {
          i = 0;
        }
        i += this._endPosition;
      }
      if (!(this._solution && a(i - e2, 0.4) && a(t2, 0.4))) {
        this._endPosition = e2;
        this._solution = this._solve(i - this._endPosition, t2);
        this._startTime = n;
      }
    }
  }
  snap(e2) {
    this._startTime = (/* @__PURE__ */ new Date()).getTime();
    this._endPosition = e2;
    this._solution = {
      x: function() {
        return 0;
      },
      dx: function() {
        return 0;
      }
    };
  }
  done(e2) {
    if (!e2) {
      e2 = (/* @__PURE__ */ new Date()).getTime();
    }
    return o(this.x(), this._endPosition, 0.4) && a(this.dx(), 0.4);
  }
  reconfigure(e2, t2, n) {
    this._m = e2;
    this._k = t2;
    this._c = n;
    if (!this.done()) {
      this._solution = this._solve(this.x() - this._endPosition, this.dx());
      this._startTime = (/* @__PURE__ */ new Date()).getTime();
    }
  }
  springConstant() {
    return this._k;
  }
  damping() {
    return this._c;
  }
  configuration() {
    function e2(e22, t22) {
      e22.reconfigure(1, t22, e22.damping());
    }
    function t2(e22, t22) {
      e22.reconfigure(1, e22.springConstant(), t22);
    }
    return [
      {
        label: "Spring Constant",
        read: this.springConstant.bind(this),
        write: e2.bind(this, this),
        min: 100,
        max: 1e3
      },
      {
        label: "Damping",
        read: this.damping.bind(this),
        write: t2.bind(this, this),
        min: 1,
        max: 500
      }
    ];
  }
}
class Scroll {
  constructor(extent, friction, spring) {
    this._extent = extent;
    this._friction = friction || new Friction(0.01);
    this._spring = spring || new Spring(1, 90, 20);
    this._startTime = 0;
    this._springing = false;
    this._springOffset = 0;
  }
  snap(e2, t2) {
    this._springOffset = 0;
    this._springing = true;
    this._spring.snap(e2);
    this._spring.setEnd(t2);
  }
  set(e2, t2) {
    this._friction.set(e2, t2);
    if (e2 > 0 && t2 >= 0) {
      this._springOffset = 0;
      this._springing = true;
      this._spring.snap(e2);
      this._spring.setEnd(0);
    } else {
      if (e2 < -this._extent && t2 <= 0) {
        this._springOffset = 0;
        this._springing = true;
        this._spring.snap(e2);
        this._spring.setEnd(-this._extent);
      } else {
        this._springing = false;
      }
    }
    this._startTime = (/* @__PURE__ */ new Date()).getTime();
  }
  x(e2) {
    if (!this._startTime) {
      return 0;
    }
    if (!e2) {
      e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
    }
    if (this._springing) {
      return this._spring.x() + this._springOffset;
    }
    let t2 = this._friction.x(e2);
    let n = this.dx(e2);
    if (t2 > 0 && n >= 0 || t2 < -this._extent && n <= 0) {
      this._springing = true;
      this._spring.setEnd(0, n);
      if (t2 < -this._extent) {
        this._springOffset = -this._extent;
      } else {
        this._springOffset = 0;
      }
      t2 = this._spring.x() + this._springOffset;
    }
    return t2;
  }
  dx(e2) {
    let t2;
    if (this._lastTime === e2) {
      t2 = this._lastDx;
    } else {
      t2 = this._springing ? this._spring.dx(e2) : this._friction.dx(e2);
    }
    this._lastTime = e2;
    this._lastDx = t2;
    return t2;
  }
  done() {
    return this._springing ? this._spring.done() : this._friction.done();
  }
  setVelocityByEnd(e2) {
    this._friction.setVelocityByEnd(e2);
  }
  configuration() {
    const e2 = this._friction.configuration();
    e2.push.apply(e2, this._spring.configuration());
    return e2;
  }
}
function createAnimation(scroll, onScroll, onEnd) {
  const state2 = {
    id: 0,
    cancelled: false
  };
  function startAnimation2(state22, scroll2, onScroll2, onEnd2) {
    if (!state22 || !state22.cancelled) {
      onScroll2(scroll2);
      const isDone = scroll2.done();
      if (!isDone) {
        if (!state22.cancelled) {
          state22.id = requestAnimationFrame(
            startAnimation2.bind(null, state22, scroll2, onScroll2, onEnd2)
          );
        }
      }
      if (isDone && onEnd2) {
        onEnd2(scroll2);
      }
    }
  }
  function cancel(state22) {
    if (state22 && state22.id) {
      cancelAnimationFrame(state22.id);
    }
    if (state22) {
      state22.cancelled = true;
    }
  }
  startAnimation2(state2, scroll, onScroll, onEnd);
  return {
    cancel: cancel.bind(null, state2),
    model: scroll
  };
}
class Scroller {
  constructor(element, options) {
    options = options || {};
    this._element = element;
    this._options = options;
    this._enableSnap = options.enableSnap || false;
    this._itemSize = options.itemSize || 0;
    this._enableX = options.enableX || false;
    this._enableY = options.enableY || false;
    this._shouldDispatchScrollEvent = !!options.onScroll;
    if (this._enableX) {
      this._extent = (options.scrollWidth || this._element.offsetWidth) - this._element.parentElement.offsetWidth;
      this._scrollWidth = options.scrollWidth;
    } else {
      this._extent = (options.scrollHeight || this._element.offsetHeight) - this._element.parentElement.offsetHeight;
      this._scrollHeight = options.scrollHeight;
    }
    this._position = 0;
    this._scroll = new Scroll(this._extent, options.friction, options.spring);
    this._onTransitionEnd = this.onTransitionEnd.bind(this);
    this.updatePosition();
  }
  onTouchStart() {
    this._startPosition = this._position;
    this._lastChangePos = this._startPosition;
    if (this._startPosition > 0) {
      this._startPosition /= 0.5;
    } else {
      if (this._startPosition < -this._extent) {
        this._startPosition = (this._startPosition + this._extent) / 0.5 - this._extent;
      }
    }
    if (this._animation) {
      this._animation.cancel();
      this._scrolling = false;
    }
    this.updatePosition();
  }
  onTouchMove(x, y) {
    let startPosition = this._startPosition;
    if (this._enableX) {
      startPosition += x;
    } else if (this._enableY) {
      startPosition += y;
    }
    if (startPosition > 0) {
      startPosition *= 0.5;
    } else if (startPosition < -this._extent) {
      startPosition = 0.5 * (startPosition + this._extent) - this._extent;
    }
    this._position = startPosition;
    this.updatePosition();
    this.dispatchScroll();
  }
  onTouchEnd(x, y, o2) {
    if (this._enableSnap && this._position > -this._extent && this._position < 0) {
      if (this._enableY && (Math.abs(y) < this._itemSize && Math.abs(o2.y) < 300 || Math.abs(o2.y) < 150)) {
        this.snap();
        return;
      }
      if (this._enableX && (Math.abs(x) < this._itemSize && Math.abs(o2.x) < 300 || Math.abs(o2.x) < 150)) {
        this.snap();
        return;
      }
    }
    if (this._enableX) {
      this._scroll.set(this._position, o2.x);
    } else if (this._enableY) {
      this._scroll.set(this._position, o2.y);
    }
    let c;
    if (this._enableSnap) {
      const s = this._scroll._friction.x(100);
      const l = s % this._itemSize;
      c = Math.abs(l) > this._itemSize / 2 ? s - (this._itemSize - Math.abs(l)) : s - l;
      if (c <= 0 && c >= -this._extent) {
        this._scroll.setVelocityByEnd(c);
      }
    }
    this._lastTime = Date.now();
    this._lastDelay = 0;
    this._scrolling = true;
    this._lastChangePos = this._position;
    this._lastIdx = Math.floor(Math.abs(this._position / this._itemSize));
    this._animation = createAnimation(
      this._scroll,
      () => {
        const e2 = Date.now();
        const i = (e2 - this._scroll._startTime) / 1e3;
        const r = this._scroll.x(i);
        this._position = r;
        this.updatePosition();
        const o22 = this._scroll.dx(i);
        if (this._shouldDispatchScrollEvent && e2 - this._lastTime > this._lastDelay) {
          this.dispatchScroll();
          this._lastDelay = Math.abs(2e3 / o22);
          this._lastTime = e2;
        }
      },
      () => {
        if (this._enableSnap) {
          if (c <= 0 && c >= -this._extent) {
            this._position = c;
            this.updatePosition();
          }
          if (isFunction(this._options.onSnap)) {
            this._options.onSnap(
              Math.floor(Math.abs(this._position) / this._itemSize)
            );
          }
        }
        if (this._shouldDispatchScrollEvent) {
          this.dispatchScroll();
        }
        this._scrolling = false;
      }
    );
  }
  onTransitionEnd() {
    this._element.style.webkitTransition = "";
    this._element.style.transition = "";
    this._element.removeEventListener("transitionend", this._onTransitionEnd);
    if (this._snapping) {
      this._snapping = false;
    }
    this.dispatchScroll();
  }
  snap() {
    const itemSize = this._itemSize;
    const position = this._position % itemSize;
    const i = Math.abs(position) > this._itemSize / 2 ? this._position - (itemSize - Math.abs(position)) : this._position - position;
    if (this._position !== i) {
      this._snapping = true;
      this.scrollTo(-i);
      if (isFunction(this._options.onSnap)) {
        this._options.onSnap(
          Math.floor(Math.abs(this._position) / this._itemSize)
        );
      }
    }
  }
  scrollTo(position, time) {
    if (this._animation) {
      this._animation.cancel();
      this._scrolling = false;
    }
    if (typeof position === "number") {
      this._position = -position;
    }
    if (this._position < -this._extent) {
      this._position = -this._extent;
    } else {
      if (this._position > 0) {
        this._position = 0;
      }
    }
    const transition = "transform " + (time || 0.2) + "s ease-out";
    this._element.style.webkitTransition = "-webkit-" + transition;
    this._element.style.transition = transition;
    this.updatePosition();
    this._element.addEventListener("transitionend", this._onTransitionEnd);
  }
  dispatchScroll() {
    if (isFunction(this._options.onScroll) && Math.round(Number(this._lastPos)) !== Math.round(this._position)) {
      this._lastPos = this._position;
      const event = {
        target: {
          scrollLeft: this._enableX ? -this._position : 0,
          scrollTop: this._enableY ? -this._position : 0,
          scrollHeight: this._scrollHeight || this._element.offsetHeight,
          scrollWidth: this._scrollWidth || this._element.offsetWidth,
          offsetHeight: this._element.parentElement.offsetHeight,
          offsetWidth: this._element.parentElement.offsetWidth
        }
      };
      this._options.onScroll(event);
    }
  }
  update(height, scrollHeight, itemSize) {
    let extent = 0;
    const position = this._position;
    if (this._enableX) {
      extent = this._element.childNodes.length ? (scrollHeight || this._element.offsetWidth) - this._element.parentElement.offsetWidth : 0;
      this._scrollWidth = scrollHeight;
    } else {
      extent = this._element.childNodes.length ? (scrollHeight || this._element.offsetHeight) - this._element.parentElement.offsetHeight : 0;
      this._scrollHeight = scrollHeight;
    }
    if (typeof height === "number") {
      this._position = -height;
    }
    if (this._position < -extent) {
      this._position = -extent;
    } else {
      if (this._position > 0) {
        this._position = 0;
      }
    }
    this._itemSize = itemSize || this._itemSize;
    this.updatePosition();
    if (position !== this._position) {
      this.dispatchScroll();
      if (isFunction(this._options.onSnap)) {
        this._options.onSnap(
          Math.floor(Math.abs(this._position) / this._itemSize)
        );
      }
    }
    this._extent = extent;
    this._scroll._extent = extent;
  }
  updatePosition() {
    let transform = "";
    if (this._enableX) {
      transform = "translateX(" + this._position + "px) translateZ(0)";
    } else {
      if (this._enableY) {
        transform = "translateY(" + this._position + "px) translateZ(0)";
      }
    }
    this._element.style.webkitTransform = transform;
    this._element.style.transform = transform;
  }
  isScrolling() {
    return this._scrolling || this._snapping;
  }
}
function useScroller(element, options) {
  const touchInfo = {
    trackingID: -1,
    maxDy: 0,
    maxDx: 0
  };
  const scroller = new Scroller(element, options);
  function findDelta(event) {
    const touchtrackEvent = event;
    const mouseEvent = event;
    return touchtrackEvent.detail.state === "move" || touchtrackEvent.detail.state === "end" ? {
      x: touchtrackEvent.detail.dx,
      y: touchtrackEvent.detail.dy
    } : {
      x: mouseEvent.screenX - touchInfo.x,
      y: mouseEvent.screenY - touchInfo.y
    };
  }
  function handleTouchStart(event) {
    const touchtrackEvent = event;
    const mouseEvent = event;
    if (touchtrackEvent.detail.state === "start") {
      touchInfo.trackingID = "touch";
      touchInfo.x = touchtrackEvent.detail.x;
      touchInfo.y = touchtrackEvent.detail.y;
    } else {
      touchInfo.trackingID = "mouse";
      touchInfo.x = mouseEvent.screenX;
      touchInfo.y = mouseEvent.screenY;
    }
    touchInfo.maxDx = 0;
    touchInfo.maxDy = 0;
    touchInfo.historyX = [0];
    touchInfo.historyY = [0];
    touchInfo.historyTime = [
      touchtrackEvent.detail.timeStamp || mouseEvent.timeStamp
    ];
    touchInfo.listener = scroller;
    if (scroller.onTouchStart) {
      scroller.onTouchStart();
    }
    if (typeof event.cancelable !== "boolean" || event.cancelable)
      event.preventDefault();
  }
  function handleTouchMove(event) {
    const touchtrackEvent = event;
    const mouseEvent = event;
    if (touchInfo.trackingID !== -1) {
      if (typeof event.cancelable !== "boolean" || event.cancelable)
        event.preventDefault();
      const delta = findDelta(event);
      if (delta) {
        for (touchInfo.maxDy = Math.max(touchInfo.maxDy, Math.abs(delta.y)), touchInfo.maxDx = Math.max(touchInfo.maxDx, Math.abs(delta.x)), touchInfo.historyX.push(delta.x), touchInfo.historyY.push(delta.y), touchInfo.historyTime.push(
          touchtrackEvent.detail.timeStamp || mouseEvent.timeStamp
        ); touchInfo.historyTime.length > 10; ) {
          touchInfo.historyTime.shift();
          touchInfo.historyX.shift();
          touchInfo.historyY.shift();
        }
        if (touchInfo.listener && touchInfo.listener.onTouchMove) {
          touchInfo.listener.onTouchMove(delta.x, delta.y);
        }
      }
    }
  }
  function handleTouchEnd(event) {
    if (touchInfo.trackingID !== -1) {
      event.preventDefault();
      const delta = findDelta(event);
      if (delta) {
        const listener2 = touchInfo.listener;
        touchInfo.trackingID = -1;
        touchInfo.listener = null;
        const length = touchInfo.historyTime.length;
        const o2 = {
          x: 0,
          y: 0
        };
        if (length > 2) {
          for (let i = touchInfo.historyTime.length - 1, time1 = touchInfo.historyTime[i], x = touchInfo.historyX[i], y = touchInfo.historyY[i]; i > 0; ) {
            i--;
            const time0 = touchInfo.historyTime[i];
            const time = time1 - time0;
            if (time > 30 && time < 50) {
              o2.x = (x - touchInfo.historyX[i]) / (time / 1e3);
              o2.y = (y - touchInfo.historyY[i]) / (time / 1e3);
              break;
            }
          }
        }
        touchInfo.historyTime = [];
        touchInfo.historyX = [];
        touchInfo.historyY = [];
        if (listener2 && listener2.onTouchEnd) {
          listener2.onTouchEnd(delta.x, delta.y, o2);
        }
      }
    }
  }
  return {
    scroller,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}
let scopedIndex = 0;
function useScopedClass(indicatorHeightRef) {
  const className = `uni-picker-view-content-${scopedIndex++}`;
  function updateStyle2() {
    const style = document.createElement("style");
    style.innerText = `.uni-picker-view-content.${className}>*{height: ${indicatorHeightRef.value}px;overflow: hidden;}`;
    document.head.appendChild(style);
  }
  watch(() => indicatorHeightRef.value, updateStyle2);
  return className;
}
function useCustomClick(dom) {
  const MAX_MOVE = 20;
  let x = 0;
  let y = 0;
  dom.addEventListener("touchstart", (event) => {
    const info = event.changedTouches[0];
    x = info.clientX;
    y = info.clientY;
  });
  dom.addEventListener("touchend", (event) => {
    const info = event.changedTouches[0];
    if (Math.abs(info.clientX - x) < MAX_MOVE && Math.abs(info.clientY - y) < MAX_MOVE) {
      const options = {
        bubbles: true,
        cancelable: true,
        target: event.target,
        currentTarget: event.currentTarget
      };
      const customClick = new CustomEvent("click", options);
      const props2 = ["screenX", "screenY", "clientX", "clientY", "pageX", "pageY"];
      props2.forEach((key) => {
        customClick[key] = info[key];
      });
      event.target.dispatchEvent(customClick);
    }
  });
}
const PickerViewColumn = /* @__PURE__ */ defineBuiltInComponent({
  name: "PickerViewColumn",
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const contentRef = ref(null);
    const getPickerViewColumn = inject("getPickerViewColumn");
    const instance2 = getCurrentInstance();
    const currentRef = getPickerViewColumn ? getPickerViewColumn(instance2) : ref(0);
    const pickerViewProps2 = inject("pickerViewProps");
    const pickerViewState = inject("pickerViewState");
    const indicatorHeight = ref(34);
    const resizeSensorRef = ref(null);
    const initIndicatorHeight = () => {
      const resizeSensor = resizeSensorRef.value;
      indicatorHeight.value = resizeSensor.$el.offsetHeight;
    };
    {
      onMounted(initIndicatorHeight);
    }
    const maskSize = computed(() => (pickerViewState.height - indicatorHeight.value) / 2);
    const {
      state: scopedAttrsState
    } = useScopedAttrs();
    const className = useScopedClass(indicatorHeight);
    let scroller;
    const state2 = reactive({
      current: currentRef.value,
      length: 0
    });
    let updatesScrollerRequest;
    function updatesScroller() {
      if (scroller && !updatesScrollerRequest) {
        updatesScrollerRequest = true;
        nextTick(() => {
          updatesScrollerRequest = false;
          let current = Math.min(state2.current, state2.length - 1);
          current = Math.max(current, 0);
          scroller.update(current * indicatorHeight.value, void 0, indicatorHeight.value);
        });
      }
    }
    watch(() => currentRef.value, (current) => {
      if (current !== state2.current) {
        state2.current = current;
        updatesScroller();
      }
    });
    watch(() => state2.current, (current) => currentRef.value = current);
    watch([() => indicatorHeight.value, () => state2.length, () => pickerViewState.height], updatesScroller);
    let oldDeltaY = 0;
    function handleWheel(event) {
      const deltaY = oldDeltaY + event.deltaY;
      if (Math.abs(deltaY) > 10) {
        oldDeltaY = 0;
        let current = Math.min(state2.current + (deltaY < 0 ? -1 : 1), state2.length - 1);
        state2.current = current = Math.max(current, 0);
        scroller.scrollTo(current * indicatorHeight.value);
      } else {
        oldDeltaY = deltaY;
      }
      event.preventDefault();
    }
    function handleTap({
      clientY
    }) {
      const el = rootRef.value;
      if (!scroller.isScrolling()) {
        const rect = el.getBoundingClientRect();
        const r = clientY - rect.top - pickerViewState.height / 2;
        const o2 = indicatorHeight.value / 2;
        if (!(Math.abs(r) <= o2)) {
          const a2 = Math.ceil((Math.abs(r) - o2) / indicatorHeight.value);
          const s = r < 0 ? -a2 : a2;
          let current = Math.min(state2.current + s, state2.length - 1);
          state2.current = current = Math.max(current, 0);
          scroller.scrollTo(current * indicatorHeight.value);
        }
      }
    }
    const initScroller = () => {
      const el = rootRef.value;
      const content = contentRef.value;
      const {
        scroller: scrollerOrigin,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
      } = useScroller(content, {
        enableY: true,
        enableX: false,
        enableSnap: true,
        itemSize: indicatorHeight.value,
        friction: new Friction(1e-4),
        spring: new Spring(2, 90, 20),
        onSnap: (index2) => {
          if (!isNaN(index2) && index2 !== state2.current) {
            state2.current = index2;
          }
        }
      });
      scroller = scrollerOrigin;
      useTouchtrack(el, (e2) => {
        switch (e2.detail.state) {
          case "start":
            handleTouchStart(e2);
            break;
          case "move":
            handleTouchMove(e2);
            e2.stopPropagation();
            break;
          case "end":
          case "cancel":
            handleTouchEnd(e2);
        }
      }, true);
      useCustomClick(el);
      updatesScroller();
    };
    {
      onMounted(initScroller);
    }
    return () => {
      const defaultSlots = slots.default && slots.default();
      {
        state2.length = flatVNode(defaultSlots).length;
      }
      const padding = `${maskSize.value}px 0`;
      return createVNode("uni-picker-view-column", {
        "ref": rootRef
      }, [createVNode("div", {
        "onWheel": handleWheel,
        "onClick": handleTap,
        "class": "uni-picker-view-group"
      }, [createVNode("div", mergeProps(scopedAttrsState.attrs, {
        "class": ["uni-picker-view-mask", pickerViewProps2.maskClass],
        "style": `background-size: 100% ${maskSize.value}px;${pickerViewProps2.maskStyle}`
      }), null, 16), createVNode("div", mergeProps(scopedAttrsState.attrs, {
        "class": ["uni-picker-view-indicator", pickerViewProps2.indicatorClass],
        "style": pickerViewProps2.indicatorStyle
      }), [createVNode(ResizeSensor, {
        "ref": resizeSensorRef,
        "onResize": ({
          height
        }) => indicatorHeight.value = height
      }, null, 8, ["onResize"])], 16), createVNode("div", {
        "ref": contentRef,
        "class": ["uni-picker-view-content", className],
        "style": {
          padding
        }
      }, [defaultSlots], 6)], 40, ["onWheel", "onClick"])], 512);
    };
  }
});
const FONT_SIZE = 16;
const PROGRESS_VALUES = {
  activeColor: PRIMARY_COLOR,
  backgroundColor: "#EBEBEB",
  activeMode: "backwards"
};
const progressProps = {
  percent: {
    type: [Number, String],
    default: 0,
    validator(value) {
      return !isNaN(parseFloat(value));
    }
  },
  fontSize: {
    type: [String, Number],
    default: FONT_SIZE
  },
  showInfo: {
    type: [Boolean, String],
    default: false
  },
  strokeWidth: {
    type: [Number, String],
    default: 6,
    validator(value) {
      return !isNaN(parseFloat(value));
    }
  },
  color: {
    type: String,
    default: PROGRESS_VALUES.activeColor
  },
  activeColor: {
    type: String,
    default: PROGRESS_VALUES.activeColor
  },
  backgroundColor: {
    type: String,
    default: PROGRESS_VALUES.backgroundColor
  },
  active: {
    type: [Boolean, String],
    default: false
  },
  activeMode: {
    type: String,
    default: PROGRESS_VALUES.activeMode
  },
  duration: {
    type: [Number, String],
    default: 30,
    validator(value) {
      return !isNaN(parseFloat(value));
    }
  },
  borderRadius: {
    type: [Number, String],
    default: 0
  }
};
const index$o = /* @__PURE__ */ defineBuiltInComponent({
  name: "Progress",
  props: progressProps,
  setup(props2) {
    const state2 = useProgressState(props2);
    _activeAnimation(state2, props2);
    watch(() => state2.realPercent, (newValue, oldValue) => {
      state2.strokeTimer && clearInterval(state2.strokeTimer);
      state2.lastPercent = oldValue || 0;
      _activeAnimation(state2, props2);
    });
    return () => {
      const {
        showInfo
      } = props2;
      const {
        outerBarStyle,
        innerBarStyle,
        currentPercent
      } = state2;
      return createVNode("uni-progress", {
        "class": "uni-progress"
      }, [createVNode("div", {
        "style": outerBarStyle,
        "class": "uni-progress-bar"
      }, [createVNode("div", {
        "style": innerBarStyle,
        "class": "uni-progress-inner-bar"
      }, null, 4)], 4), showInfo ? (
        // {currentPercent}% 的写法会影响 SSR Hydration (tsx插件的问题)
        createVNode("p", {
          "class": "uni-progress-info"
        }, [currentPercent + "%"])
      ) : ""]);
    };
  }
});
function useProgressState(props2) {
  const currentPercent = ref(0);
  const outerBarStyle = computed(() => `background-color: ${props2.backgroundColor}; height: ${props2.strokeWidth}px;`);
  const innerBarStyle = computed(() => {
    const backgroundColor = props2.color !== PROGRESS_VALUES.activeColor && props2.activeColor === PROGRESS_VALUES.activeColor ? props2.color : props2.activeColor;
    return `width: ${currentPercent.value}%;background-color: ${backgroundColor}`;
  });
  const realPercent = computed(() => {
    let realValue = parseFloat(props2.percent);
    realValue < 0 && (realValue = 0);
    realValue > 100 && (realValue = 100);
    return realValue;
  });
  const state2 = reactive({
    outerBarStyle,
    innerBarStyle,
    realPercent,
    currentPercent,
    strokeTimer: 0,
    lastPercent: 0
  });
  return state2;
}
function _activeAnimation(state2, props2) {
  if (props2.active) {
    state2.currentPercent = props2.activeMode === PROGRESS_VALUES.activeMode ? 0 : state2.lastPercent;
    state2.strokeTimer = setInterval(() => {
      if (state2.currentPercent + 1 > state2.realPercent) {
        state2.currentPercent = state2.realPercent;
        state2.strokeTimer && clearInterval(state2.strokeTimer);
      } else {
        state2.currentPercent += 1;
      }
    }, parseFloat(props2.duration));
  } else {
    state2.currentPercent = state2.realPercent;
  }
}
const TAGS = {
  a: "",
  abbr: "",
  address: "",
  article: "",
  aside: "",
  b: "",
  bdi: "",
  bdo: ["dir"],
  big: "",
  blockquote: "",
  br: "",
  caption: "",
  center: "",
  cite: "",
  code: "",
  col: ["span", "width"],
  colgroup: ["span", "width"],
  dd: "",
  del: "",
  div: "",
  dl: "",
  dt: "",
  em: "",
  fieldset: "",
  font: "",
  footer: "",
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  header: "",
  hr: "",
  i: "",
  img: ["alt", "src", "height", "width"],
  ins: "",
  label: "",
  legend: "",
  li: "",
  mark: "",
  nav: "",
  ol: ["start", "type"],
  p: "",
  pre: "",
  q: "",
  rt: "",
  ruby: "",
  s: "",
  section: "",
  small: "",
  span: "",
  strong: "",
  sub: "",
  sup: "",
  table: ["width"],
  tbody: "",
  td: ["colspan", "height", "rowspan", "width"],
  tfoot: "",
  th: ["colspan", "height", "rowspan", "width"],
  thead: "",
  tr: ["colspan", "height", "rowspan", "width"],
  tt: "",
  u: "",
  ul: ""
};
const CHARS = {
  amp: "&",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
  apos: "'",
  ldquo: "“",
  rdquo: "”",
  yen: "￥",
  radic: "√",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  hellip: "…"
};
function decodeEntities(htmlString) {
  return htmlString.replace(
    /&(([a-zA-Z]+)|(#x{0,1}[\da-zA-Z]+));/gi,
    function(match, stage) {
      if (hasOwn$1(CHARS, stage) && CHARS[stage]) {
        return CHARS[stage];
      }
      if (/^#[0-9]{1,4}$/.test(stage)) {
        return String.fromCharCode(stage.slice(1));
      }
      if (/^#x[0-9a-f]{1,4}$/i.test(stage)) {
        return String.fromCharCode(0 + stage.slice(1));
      }
      return match;
    }
  );
}
function processClickEvent(node, triggerItemClick) {
  if (["a", "img"].includes(node.name) && triggerItemClick) {
    return {
      onClick: (e2) => {
        triggerItemClick(e2, { node });
        e2.stopPropagation();
        e2.preventDefault();
        e2.returnValue = false;
      }
    };
  }
}
function normalizeAttrs(tagName, attrs2) {
  if (!isPlainObject(attrs2))
    return;
  for (const key in attrs2) {
    if (hasOwn$1(attrs2, key)) {
      const value = attrs2[key];
      if (tagName === "img" && key === "src")
        attrs2[key] = getRealPath(value);
    }
  }
}
const nodeList2VNode = (scopeId, triggerItemClick, nodeList) => {
  if (!nodeList || isArray(nodeList) && !nodeList.length)
    return [];
  return nodeList.map((node) => {
    if (!isPlainObject(node)) {
      return;
    }
    if (!hasOwn$1(node, "type") || node.type === "node") {
      let nodeProps = { [scopeId]: "" };
      const tagName = node.name.toLowerCase();
      if (!hasOwn$1(TAGS, tagName)) {
        return;
      }
      normalizeAttrs(tagName, node.attrs);
      nodeProps = extend(
        nodeProps,
        processClickEvent(node, triggerItemClick),
        node.attrs
      );
      return h(
        node.name,
        nodeProps,
        nodeList2VNode(scopeId, triggerItemClick, node.children)
      );
    }
    if (node.type === "text" && isString(node.text) && node.text !== "")
      return createTextVNode(decodeEntities(node.text || ""));
  });
};
function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*>\n/, "").replace(/<!DOCTYPE.*>\n/, "");
}
function parseAttrs(attrs2) {
  return attrs2.reduce(function(pre, attr2) {
    let value = attr2.value;
    const name = attr2.name;
    if (value.match(/ /) && ["style", "src"].indexOf(name) === -1) {
      value = value.split(" ");
    }
    if (pre[name]) {
      if (Array.isArray(pre[name])) {
        pre[name].push(value);
      } else {
        pre[name] = [pre[name], value];
      }
    } else {
      pre[name] = value;
    }
    return pre;
  }, {});
}
function parseHtml(html) {
  html = removeDOCTYPE(html);
  const stacks = [];
  const results = {
    node: "root",
    children: []
  };
  HTMLParser(html, {
    start: function(tag, attrs2, unary) {
      const node = {
        name: tag
      };
      if (attrs2.length !== 0) {
        node.attrs = parseAttrs(attrs2);
      }
      if (unary) {
        const parent = stacks[0] || results;
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      } else {
        stacks.unshift(node);
      }
    },
    end: function(tag) {
      const node = stacks.shift();
      if (node.name !== tag)
        console.error("invalid state: mismatch end tag");
      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        const parent = stacks[0];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      }
    },
    chars: function(text2) {
      const node = {
        type: "text",
        text: text2
      };
      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        const parent = stacks[0];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      }
    },
    comment: function(text2) {
      const node = {
        node: "comment",
        text: text2
      };
      const parent = stacks[0];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(node);
    }
  });
  return results.children;
}
const props$n = {
  nodes: {
    type: [Array, String],
    default: function() {
      return [];
    }
  }
};
const index$l = /* @__PURE__ */ defineBuiltInComponent({
  name: "RichText",
  compatConfig: {
    MODE: 3
  },
  props: props$n,
  emits: ["click", "touchstart", "touchmove", "touchcancel", "touchend", "longpress", "itemclick"],
  setup(props2, {
    emit: emit2
  }) {
    const vm = getCurrentInstance();
    const scopeId = vm && vm.vnode.scopeId || "";
    const rootRef = ref(null);
    const _vnode = ref([]);
    const trigger = useCustomEvent(rootRef, emit2);
    function triggerItemClick(e2, detail = {}) {
      trigger("itemclick", e2, detail);
    }
    function renderVNode() {
      let nodeList = props2.nodes;
      if (isString(nodeList)) {
        nodeList = parseHtml(props2.nodes);
      }
      _vnode.value = nodeList2VNode(scopeId, triggerItemClick, nodeList);
    }
    watch(() => props2.nodes, renderVNode, {
      immediate: true
    });
    return () => h("uni-rich-text", {
      ref: rootRef
    }, h("div", {}, _vnode.value));
  }
});
const passiveOptions = /* @__PURE__ */ passive(true);
const props$m = {
  scrollX: {
    type: [Boolean, String],
    default: false
  },
  scrollY: {
    type: [Boolean, String],
    default: false
  },
  upperThreshold: {
    type: [Number, String],
    default: 50
  },
  lowerThreshold: {
    type: [Number, String],
    default: 50
  },
  scrollTop: {
    type: [Number, String],
    default: 0
  },
  scrollLeft: {
    type: [Number, String],
    default: 0
  },
  scrollIntoView: {
    type: String,
    default: ""
  },
  scrollWithAnimation: {
    type: [Boolean, String],
    default: false
  },
  enableBackToTop: {
    type: [Boolean, String],
    default: false
  },
  refresherEnabled: {
    type: [Boolean, String],
    default: false
  },
  refresherThreshold: {
    type: Number,
    default: 45
  },
  refresherDefaultStyle: {
    type: String,
    default: "back"
  },
  refresherBackground: {
    type: String,
    default: "#fff"
  },
  refresherTriggered: {
    type: [Boolean, String],
    default: false
  }
};
const ScrollView = /* @__PURE__ */ defineBuiltInComponent({
  name: "ScrollView",
  compatConfig: {
    MODE: 3
  },
  props: props$m,
  emits: ["scroll", "scrolltoupper", "scrolltolower", "refresherrefresh", "refresherrestore", "refresherpulling", "refresherabort", "update:refresherTriggered"],
  setup(props2, {
    emit: emit2,
    slots
  }) {
    const rootRef = ref(null);
    const main = ref(null);
    const wrap = ref(null);
    const content = ref(null);
    const refresherinner = ref(null);
    const trigger = useCustomEvent(rootRef, emit2);
    const {
      state: state2,
      scrollTopNumber,
      scrollLeftNumber
    } = useScrollViewState(props2);
    useScrollViewLoader(props2, state2, scrollTopNumber, scrollLeftNumber, trigger, rootRef, main, content, emit2);
    const mainStyle = computed(() => {
      let style = "";
      props2.scrollX ? style += "overflow-x:auto;" : style += "overflow-x:hidden;";
      props2.scrollY ? style += "overflow-y:auto;" : style += "overflow-y:hidden;";
      return style;
    });
    return () => {
      const {
        refresherEnabled,
        refresherBackground,
        refresherDefaultStyle
      } = props2;
      const {
        refresherHeight,
        refreshState,
        refreshRotate
      } = state2;
      return createVNode("uni-scroll-view", {
        "ref": rootRef
      }, [createVNode("div", {
        "ref": wrap,
        "class": "uni-scroll-view"
      }, [createVNode("div", {
        "ref": main,
        "style": mainStyle.value,
        "class": "uni-scroll-view"
      }, [createVNode("div", {
        "ref": content,
        "class": "uni-scroll-view-content"
      }, [refresherEnabled ? createVNode("div", {
        "ref": refresherinner,
        "style": {
          backgroundColor: refresherBackground,
          height: refresherHeight + "px"
        },
        "class": "uni-scroll-view-refresher"
      }, [refresherDefaultStyle !== "none" ? createVNode("div", {
        "class": "uni-scroll-view-refresh"
      }, [createVNode("div", {
        "class": "uni-scroll-view-refresh-inner"
      }, [refreshState == "pulling" ? createVNode("svg", {
        "key": "refresh__icon",
        "style": {
          transform: "rotate(" + refreshRotate + "deg)"
        },
        "fill": "#2BD009",
        "class": "uni-scroll-view-refresh__icon",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24"
      }, [createVNode("path", {
        "d": "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      }, null), createVNode("path", {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }, null)], 4) : null, refreshState == "refreshing" ? createVNode("svg", {
        "key": "refresh__spinner",
        "class": "uni-scroll-view-refresh__spinner",
        "width": "24",
        "height": "24",
        "viewBox": "25 25 50 50"
      }, [createVNode("circle", {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none",
        "style": "color: #2bd009",
        "stroke-width": "3"
      }, null)]) : null])]) : null, refresherDefaultStyle == "none" ? slots.refresher && slots.refresher() : null], 4) : null, slots.default && slots.default()], 512)], 4)], 512)], 512);
    };
  }
});
function useScrollViewState(props2) {
  const scrollTopNumber = computed(() => {
    return Number(props2.scrollTop) || 0;
  });
  const scrollLeftNumber = computed(() => {
    return Number(props2.scrollLeft) || 0;
  });
  const state2 = reactive({
    lastScrollTop: scrollTopNumber.value,
    lastScrollLeft: scrollLeftNumber.value,
    lastScrollToUpperTime: 0,
    lastScrollToLowerTime: 0,
    refresherHeight: 0,
    refreshRotate: 0,
    refreshState: ""
  });
  return {
    state: state2,
    scrollTopNumber,
    scrollLeftNumber
  };
}
function useScrollViewLoader(props2, state2, scrollTopNumber, scrollLeftNumber, trigger, rootRef, main, content, emit2) {
  let beforeRefreshing = false;
  let toUpperNumber = 0;
  let triggerAbort = false;
  let __transitionEnd = () => {
  };
  const upperThresholdNumber = computed(() => {
    let val = Number(props2.upperThreshold);
    return isNaN(val) ? 50 : val;
  });
  const lowerThresholdNumber = computed(() => {
    let val = Number(props2.lowerThreshold);
    return isNaN(val) ? 50 : val;
  });
  function scrollTo2(scrollToValue, direction2) {
    const container = main.value;
    let transformValue = 0;
    let transform = "";
    scrollToValue < 0 ? scrollToValue = 0 : direction2 === "x" && scrollToValue > container.scrollWidth - container.offsetWidth ? scrollToValue = container.scrollWidth - container.offsetWidth : direction2 === "y" && scrollToValue > container.scrollHeight - container.offsetHeight && (scrollToValue = container.scrollHeight - container.offsetHeight);
    direction2 === "x" ? transformValue = container.scrollLeft - scrollToValue : direction2 === "y" && (transformValue = container.scrollTop - scrollToValue);
    if (transformValue === 0)
      return;
    let _content = content.value;
    _content.style.transition = "transform .3s ease-out";
    _content.style.webkitTransition = "-webkit-transform .3s ease-out";
    if (direction2 === "x") {
      transform = "translateX(" + transformValue + "px) translateZ(0)";
    } else {
      direction2 === "y" && (transform = "translateY(" + transformValue + "px) translateZ(0)");
    }
    _content.removeEventListener("transitionend", __transitionEnd);
    _content.removeEventListener("webkitTransitionEnd", __transitionEnd);
    __transitionEnd = () => _transitionEnd(scrollToValue, direction2);
    _content.addEventListener("transitionend", __transitionEnd);
    _content.addEventListener("webkitTransitionEnd", __transitionEnd);
    if (direction2 === "x") {
      container.style.overflowX = "hidden";
    } else if (direction2 === "y") {
      container.style.overflowY = "hidden";
    }
    _content.style.transform = transform;
    _content.style.webkitTransform = transform;
  }
  function _handleScroll($event) {
    const target = $event.target;
    trigger("scroll", $event, {
      scrollLeft: target.scrollLeft,
      scrollTop: target.scrollTop,
      scrollHeight: target.scrollHeight,
      scrollWidth: target.scrollWidth,
      deltaX: state2.lastScrollLeft - target.scrollLeft,
      deltaY: state2.lastScrollTop - target.scrollTop
    });
    if (props2.scrollY) {
      if (target.scrollTop <= upperThresholdNumber.value && state2.lastScrollTop - target.scrollTop > 0 && $event.timeStamp - state2.lastScrollToUpperTime > 200) {
        trigger("scrolltoupper", $event, {
          direction: "top"
        });
        state2.lastScrollToUpperTime = $event.timeStamp;
      }
      if (target.scrollTop + target.offsetHeight + lowerThresholdNumber.value >= target.scrollHeight && state2.lastScrollTop - target.scrollTop < 0 && $event.timeStamp - state2.lastScrollToLowerTime > 200) {
        trigger("scrolltolower", $event, {
          direction: "bottom"
        });
        state2.lastScrollToLowerTime = $event.timeStamp;
      }
    }
    if (props2.scrollX) {
      if (target.scrollLeft <= upperThresholdNumber.value && state2.lastScrollLeft - target.scrollLeft > 0 && $event.timeStamp - state2.lastScrollToUpperTime > 200) {
        trigger("scrolltoupper", $event, {
          direction: "left"
        });
        state2.lastScrollToUpperTime = $event.timeStamp;
      }
      if (target.scrollLeft + target.offsetWidth + lowerThresholdNumber.value >= target.scrollWidth && state2.lastScrollLeft - target.scrollLeft < 0 && $event.timeStamp - state2.lastScrollToLowerTime > 200) {
        trigger("scrolltolower", $event, {
          direction: "right"
        });
        state2.lastScrollToLowerTime = $event.timeStamp;
      }
    }
    state2.lastScrollTop = target.scrollTop;
    state2.lastScrollLeft = target.scrollLeft;
  }
  function _scrollTopChanged(val) {
    if (props2.scrollY) {
      {
        if (props2.scrollWithAnimation) {
          scrollTo2(val, "y");
        } else {
          main.value.scrollTop = val;
        }
      }
    }
  }
  function _scrollLeftChanged(val) {
    if (props2.scrollX) {
      {
        if (props2.scrollWithAnimation) {
          scrollTo2(val, "x");
        } else {
          main.value.scrollLeft = val;
        }
      }
    }
  }
  function _scrollIntoViewChanged(val) {
    if (val) {
      if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(val)) {
        console.error(`id error: scroll-into-view=${val}`);
        return;
      }
      let element = rootRef.value.querySelector("#" + val);
      if (element) {
        let mainRect = main.value.getBoundingClientRect();
        let elRect = element.getBoundingClientRect();
        if (props2.scrollX) {
          let left = elRect.left - mainRect.left;
          let scrollLeft = main.value.scrollLeft;
          let x = scrollLeft + left;
          if (props2.scrollWithAnimation) {
            scrollTo2(x, "x");
          } else {
            main.value.scrollLeft = x;
          }
        }
        if (props2.scrollY) {
          let top = elRect.top - mainRect.top;
          let scrollTop = main.value.scrollTop;
          let y = scrollTop + top;
          if (props2.scrollWithAnimation) {
            scrollTo2(y, "y");
          } else {
            main.value.scrollTop = y;
          }
        }
      }
    }
  }
  function _transitionEnd(val, direction2) {
    content.value.style.transition = "";
    content.value.style.webkitTransition = "";
    content.value.style.transform = "";
    content.value.style.webkitTransform = "";
    let _main = main.value;
    if (direction2 === "x") {
      _main.style.overflowX = props2.scrollX ? "auto" : "hidden";
      _main.scrollLeft = val;
    } else if (direction2 === "y") {
      _main.style.overflowY = props2.scrollY ? "auto" : "hidden";
      _main.scrollTop = val;
    }
    content.value.removeEventListener("transitionend", __transitionEnd);
    content.value.removeEventListener("webkitTransitionEnd", __transitionEnd);
  }
  function _setRefreshState(_state) {
    if (!props2.refresherEnabled)
      return;
    switch (_state) {
      case "refreshing":
        state2.refresherHeight = props2.refresherThreshold;
        if (!beforeRefreshing) {
          beforeRefreshing = true;
          trigger("refresherrefresh", {}, {});
          emit2("update:refresherTriggered", true);
        }
        break;
      case "restore":
      case "refresherabort":
        beforeRefreshing = false;
        state2.refresherHeight = toUpperNumber = 0;
        if (_state === "restore") {
          triggerAbort = false;
          trigger("refresherrestore", {}, {});
        }
        if (_state === "refresherabort" && triggerAbort) {
          triggerAbort = false;
          trigger("refresherabort", {}, {});
        }
        break;
    }
    state2.refreshState = _state;
  }
  onMounted(() => {
    nextTick(() => {
      _scrollTopChanged(scrollTopNumber.value);
      _scrollLeftChanged(scrollLeftNumber.value);
    });
    _scrollIntoViewChanged(props2.scrollIntoView);
    let __handleScroll = function(event) {
      event.preventDefault();
      event.stopPropagation();
      _handleScroll(event);
    };
    let touchStart = {
      x: 0,
      y: 0
    };
    let needStop = null;
    let __handleTouchMove = function(event) {
      if (touchStart === null)
        return;
      let x = event.touches[0].pageX;
      let y = event.touches[0].pageY;
      let _main = main.value;
      if (Math.abs(x - touchStart.x) > Math.abs(y - touchStart.y)) {
        if (props2.scrollX) {
          if (_main.scrollLeft === 0 && x > touchStart.x) {
            needStop = false;
            return;
          } else if (_main.scrollWidth === _main.offsetWidth + _main.scrollLeft && x < touchStart.x) {
            needStop = false;
            return;
          }
          needStop = true;
        } else {
          needStop = false;
        }
      } else {
        if (props2.scrollY) {
          if (_main.scrollTop === 0 && y > touchStart.y) {
            needStop = false;
            if (props2.refresherEnabled && event.cancelable !== false)
              event.preventDefault();
          } else if (_main.scrollHeight === _main.offsetHeight + _main.scrollTop && y < touchStart.y) {
            needStop = false;
            return;
          } else {
            needStop = true;
          }
        } else {
          needStop = false;
        }
      }
      if (needStop) {
        event.stopPropagation();
      }
      if (_main.scrollTop === 0 && event.touches.length === 1) {
        _setRefreshState("pulling");
      }
      if (props2.refresherEnabled && state2.refreshState === "pulling") {
        const dy = y - touchStart.y;
        if (toUpperNumber === 0) {
          toUpperNumber = y;
        }
        if (!beforeRefreshing) {
          state2.refresherHeight = y - toUpperNumber;
          if (state2.refresherHeight > 0) {
            triggerAbort = true;
            trigger("refresherpulling", event, {
              deltaY: dy
            });
          }
        } else {
          state2.refresherHeight = dy + props2.refresherThreshold;
          triggerAbort = false;
        }
        const route = state2.refresherHeight / props2.refresherThreshold;
        state2.refreshRotate = (route > 1 ? 1 : route) * 360;
      }
    };
    let __handleTouchStart = function(event) {
      if (event.touches.length === 1) {
        touchStart = {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY
        };
      }
    };
    let __handleTouchEnd = function(event) {
      touchStart = null;
      if (state2.refresherHeight >= props2.refresherThreshold) {
        _setRefreshState("refreshing");
      } else {
        _setRefreshState("refresherabort");
      }
    };
    main.value.addEventListener("touchstart", __handleTouchStart, passiveOptions);
    main.value.addEventListener("touchmove", __handleTouchMove, passive(false));
    main.value.addEventListener("scroll", __handleScroll, passive(false));
    main.value.addEventListener("touchend", __handleTouchEnd, passiveOptions);
    onBeforeUnmount(() => {
      main.value.removeEventListener("touchstart", __handleTouchStart);
      main.value.removeEventListener("touchmove", __handleTouchMove);
      main.value.removeEventListener("scroll", __handleScroll);
      main.value.removeEventListener("touchend", __handleTouchEnd);
    });
  });
  onActivated(() => {
    props2.scrollY && (main.value.scrollTop = state2.lastScrollTop);
    props2.scrollX && (main.value.scrollLeft = state2.lastScrollLeft);
  });
  watch(scrollTopNumber, (val) => {
    _scrollTopChanged(val);
  });
  watch(scrollLeftNumber, (val) => {
    _scrollLeftChanged(val);
  });
  watch(() => props2.scrollIntoView, (val) => {
    _scrollIntoViewChanged(val);
  });
  watch(() => props2.refresherTriggered, (val) => {
    if (val === true) {
      _setRefreshState("refreshing");
    } else if (val === false) {
      _setRefreshState("restore");
    }
  });
}
const props$k = {
  indicatorDots: {
    type: [Boolean, String],
    default: false
  },
  vertical: {
    type: [Boolean, String],
    default: false
  },
  autoplay: {
    type: [Boolean, String],
    default: false
  },
  circular: {
    type: [Boolean, String],
    default: false
  },
  interval: {
    type: [Number, String],
    default: 5e3
  },
  duration: {
    type: [Number, String],
    default: 500
  },
  current: {
    type: [Number, String],
    default: 0
  },
  indicatorColor: {
    type: String,
    default: ""
  },
  indicatorActiveColor: {
    type: String,
    default: ""
  },
  previousMargin: {
    type: String,
    default: ""
  },
  nextMargin: {
    type: String,
    default: ""
  },
  currentItemId: {
    type: String,
    default: ""
  },
  skipHiddenItemLayout: {
    type: [Boolean, String],
    default: false
  },
  displayMultipleItems: {
    type: [Number, String],
    default: 1
  },
  disableTouch: {
    type: [Boolean, String],
    default: false
  },
  navigation: {
    type: [Boolean, String],
    default: false
  },
  navigationColor: {
    type: String,
    default: "#fff"
  },
  navigationActiveColor: {
    type: String,
    default: "rgba(53, 53, 53, 0.6)"
  }
};
function useState$3(props2) {
  const interval = computed(() => {
    const interval2 = Number(props2.interval);
    return isNaN(interval2) ? 5e3 : interval2;
  });
  const duration = computed(() => {
    const duration2 = Number(props2.duration);
    return isNaN(duration2) ? 500 : duration2;
  });
  const displayMultipleItems = computed(() => {
    const displayMultipleItems2 = Math.round(props2.displayMultipleItems);
    return isNaN(displayMultipleItems2) ? 1 : displayMultipleItems2;
  });
  const state2 = reactive({
    interval,
    duration,
    displayMultipleItems,
    current: Math.round(props2.current) || 0,
    currentItemId: props2.currentItemId,
    userTracking: false
  });
  return state2;
}
function useLayout(props2, state2, swiperContexts, slideFrameRef, emit2, trigger) {
  function cancelSchedule() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  let timer = null;
  let invalid = true;
  let viewportPosition = 0;
  let viewportMoveRatio = 1;
  let animating = null;
  let requestedAnimation = false;
  let contentTrackViewport = 0;
  let transitionStart;
  let currentChangeSource = "";
  let animationFrame;
  const swiperEnabled = computed(() => swiperContexts.value.length > state2.displayMultipleItems);
  const circularEnabled = computed(() => props2.circular && swiperEnabled.value);
  function checkCircularLayout(index2) {
    if (!invalid) {
      for (let items = swiperContexts.value, n = items.length, i = index2 + state2.displayMultipleItems, r = 0; r < n; r++) {
        const item = items[r];
        const s = Math.floor(index2 / n) * n + r;
        const l = s + n;
        const c = s - n;
        const u = Math.max(index2 - (s + 1), s - i, 0);
        const d = Math.max(index2 - (l + 1), l - i, 0);
        const h2 = Math.max(index2 - (c + 1), c - i, 0);
        const p2 = Math.min(u, d, h2);
        const position = [s, l, c][[u, d, h2].indexOf(p2)];
        item.updatePosition(position, props2.vertical);
      }
    }
  }
  function updateViewport(index2) {
    if (!(Math.floor(2 * viewportPosition) === Math.floor(2 * index2) && Math.ceil(2 * viewportPosition) === Math.ceil(2 * index2))) {
      if (circularEnabled.value) {
        checkCircularLayout(index2);
      }
    }
    const x = props2.vertical ? "0" : 100 * -index2 * viewportMoveRatio + "%";
    const y = props2.vertical ? 100 * -index2 * viewportMoveRatio + "%" : "0";
    const transform = "translate(" + x + ", " + y + ") translateZ(0)";
    const slideFrame = slideFrameRef.value;
    if (slideFrame) {
      slideFrame.style.webkitTransform = transform;
      slideFrame.style.transform = transform;
    }
    viewportPosition = index2;
    if (!transitionStart) {
      if (index2 % 1 === 0) {
        return;
      }
      transitionStart = index2;
    }
    index2 -= Math.floor(transitionStart);
    const items = swiperContexts.value;
    if (index2 <= -(items.length - 1)) {
      index2 += items.length;
    } else if (index2 >= items.length) {
      index2 -= items.length;
    }
    index2 = transitionStart % 1 > 0.5 || transitionStart < 0 ? index2 - 1 : index2;
    trigger("transition", {}, {
      dx: props2.vertical ? 0 : index2 * slideFrame.offsetWidth,
      dy: props2.vertical ? index2 * slideFrame.offsetHeight : 0
    });
  }
  function endViewportAnimation() {
    if (animating) {
      updateViewport(animating.toPos);
      animating = null;
    }
  }
  function normalizeCurrentValue(current) {
    const length = swiperContexts.value.length;
    if (!length) {
      return -1;
    }
    const index2 = (Math.round(current) % length + length) % length;
    if (circularEnabled.value) {
      if (length <= state2.displayMultipleItems) {
        return 0;
      }
    } else if (index2 > length - state2.displayMultipleItems) {
      return length - state2.displayMultipleItems;
    }
    return index2;
  }
  function cancelViewportAnimation() {
    animating = null;
  }
  function animateFrameFuncProto() {
    if (!animating) {
      requestedAnimation = false;
      return;
    }
    const _animating = animating;
    const toPos = _animating.toPos;
    const acc = _animating.acc;
    const endTime = _animating.endTime;
    const source = _animating.source;
    const time = endTime - Date.now();
    if (time <= 0) {
      updateViewport(toPos);
      animating = null;
      requestedAnimation = false;
      transitionStart = null;
      const item = swiperContexts.value[state2.current];
      if (item) {
        const currentItemId = item.getItemId();
        trigger("animationfinish", {}, {
          current: state2.current,
          currentItemId,
          source
        });
      }
      return;
    }
    const s = acc * time * time / 2;
    const l = toPos + s;
    updateViewport(l);
    animationFrame = requestAnimationFrame(animateFrameFuncProto);
  }
  function animateViewport(current, source, n) {
    cancelViewportAnimation();
    const duration = state2.duration;
    const length = swiperContexts.value.length;
    let position = viewportPosition;
    if (circularEnabled.value) {
      if (n < 0) {
        for (; position < current; ) {
          position += length;
        }
        for (; position - length > current; ) {
          position -= length;
        }
      } else if (n > 0) {
        for (; position > current; ) {
          position -= length;
        }
        for (; position + length < current; ) {
          position += length;
        }
        if (position + length - current < current - position) {
          position += length;
        }
      } else {
        for (; position + length < current; ) {
          position += length;
        }
        for (; position - length > current; ) {
          position -= length;
        }
        if (position + length - current < current - position) {
          position += length;
        }
      }
    } else if (source === "click") {
      current = current + state2.displayMultipleItems - 1 < length ? current : 0;
    }
    animating = {
      toPos: current,
      acc: 2 * (position - current) / (duration * duration),
      endTime: Date.now() + duration,
      source
    };
    if (!requestedAnimation) {
      requestedAnimation = true;
      animationFrame = requestAnimationFrame(animateFrameFuncProto);
    }
  }
  function scheduleAutoplay() {
    cancelSchedule();
    const items = swiperContexts.value;
    const callback = function() {
      timer = null;
      currentChangeSource = "autoplay";
      if (circularEnabled.value) {
        state2.current = normalizeCurrentValue(state2.current + 1);
      } else {
        state2.current = state2.current + state2.displayMultipleItems < items.length ? state2.current + 1 : 0;
      }
      animateViewport(state2.current, "autoplay", circularEnabled.value ? 1 : 0);
      timer = setTimeout(callback, state2.interval);
    };
    if (!(invalid || items.length <= state2.displayMultipleItems)) {
      timer = setTimeout(callback, state2.interval);
    }
  }
  function resetLayout() {
    cancelSchedule();
    endViewportAnimation();
    const items = swiperContexts.value;
    for (let i = 0; i < items.length; i++) {
      items[i].updatePosition(i, props2.vertical);
    }
    viewportMoveRatio = 1;
    const slideFrameEl = slideFrameRef.value;
    if (state2.displayMultipleItems === 1 && items.length) {
      const itemRect = items[0].getBoundingClientRect();
      const slideFrameRect = slideFrameEl.getBoundingClientRect();
      viewportMoveRatio = itemRect.width / slideFrameRect.width;
      if (!(viewportMoveRatio > 0 && viewportMoveRatio < 1)) {
        viewportMoveRatio = 1;
      }
    }
    const position = viewportPosition;
    viewportPosition = -2;
    const current = state2.current;
    if (current >= 0) {
      invalid = false;
      if (state2.userTracking) {
        updateViewport(position + current - contentTrackViewport);
        contentTrackViewport = current;
      } else {
        updateViewport(current);
        if (props2.autoplay) {
          scheduleAutoplay();
        }
      }
    } else {
      invalid = true;
      updateViewport(-state2.displayMultipleItems - 1);
    }
  }
  watch([() => props2.current, () => props2.currentItemId, () => [...swiperContexts.value]], () => {
    let current = -1;
    if (props2.currentItemId) {
      for (let i = 0, items = swiperContexts.value; i < items.length; i++) {
        const itemId = items[i].getItemId();
        if (itemId === props2.currentItemId) {
          current = i;
          break;
        }
      }
    }
    if (current < 0) {
      current = Math.round(props2.current) || 0;
    }
    current = current < 0 ? 0 : current;
    if (state2.current !== current) {
      currentChangeSource = "";
      state2.current = current;
    }
  });
  watch([() => props2.vertical, () => circularEnabled.value, () => state2.displayMultipleItems, () => [...swiperContexts.value]], resetLayout);
  watch(() => state2.interval, () => {
    if (timer) {
      cancelSchedule();
      scheduleAutoplay();
    }
  });
  function currentChanged(current, history2) {
    const source = currentChangeSource;
    currentChangeSource = "";
    const items = swiperContexts.value;
    if (!source) {
      const length = items.length;
      animateViewport(current, "", circularEnabled.value && history2 + (length - current) % length > length / 2 ? 1 : 0);
    }
    const item = items[current];
    if (item) {
      const currentItemId = state2.currentItemId = item.getItemId();
      trigger("change", {}, {
        current: state2.current,
        currentItemId,
        source
      });
    }
  }
  watch(() => state2.current, (val, oldVal) => {
    currentChanged(val, oldVal);
    emit2("update:current", val);
  });
  watch(() => state2.currentItemId, (val) => {
    emit2("update:currentItemId", val);
  });
  function inintAutoplay(enable) {
    if (enable) {
      scheduleAutoplay();
    } else {
      cancelSchedule();
    }
  }
  watch(() => props2.autoplay && !state2.userTracking, inintAutoplay);
  inintAutoplay(props2.autoplay && !state2.userTracking);
  onMounted(() => {
    let userDirectionChecked = false;
    let contentTrackSpeed = 0;
    let contentTrackT = 0;
    function handleTrackStart() {
      cancelSchedule();
      contentTrackViewport = viewportPosition;
      contentTrackSpeed = 0;
      contentTrackT = Date.now();
      cancelViewportAnimation();
    }
    function handleTrackMove(data) {
      const oldContentTrackT = contentTrackT;
      contentTrackT = Date.now();
      const length = swiperContexts.value.length;
      const other = length - state2.displayMultipleItems;
      function calc2(val) {
        return 0.5 - 0.25 / (val + 0.5);
      }
      function move(oldVal, newVal) {
        let val = contentTrackViewport + oldVal;
        contentTrackSpeed = 0.6 * contentTrackSpeed + 0.4 * newVal;
        if (!circularEnabled.value) {
          if (val < 0 || val > other) {
            if (val < 0) {
              val = -calc2(-val);
            } else {
              if (val > other) {
                val = other + calc2(val - other);
              }
            }
            contentTrackSpeed = 0;
          }
        }
        updateViewport(val);
      }
      const time = contentTrackT - oldContentTrackT || 1;
      const slideFrameEl = slideFrameRef.value;
      if (props2.vertical) {
        move(-data.dy / slideFrameEl.offsetHeight, -data.ddy / time);
      } else {
        move(-data.dx / slideFrameEl.offsetWidth, -data.ddx / time);
      }
    }
    function handleTrackEnd(isCancel) {
      state2.userTracking = false;
      const t2 = contentTrackSpeed / Math.abs(contentTrackSpeed);
      let n = 0;
      if (!isCancel && Math.abs(contentTrackSpeed) > 0.2) {
        n = 0.5 * t2;
      }
      const current = normalizeCurrentValue(viewportPosition + n);
      if (isCancel) {
        updateViewport(contentTrackViewport);
      } else {
        currentChangeSource = "touch";
        state2.current = current;
        animateViewport(current, "touch", n !== 0 ? n : current === 0 && circularEnabled.value && viewportPosition >= 1 ? 1 : 0);
      }
    }
    useTouchtrack(slideFrameRef.value, (event) => {
      if (props2.disableTouch) {
        return;
      }
      if (!invalid) {
        if (event.detail.state === "start") {
          state2.userTracking = true;
          userDirectionChecked = false;
          return handleTrackStart();
        }
        if (event.detail.state === "end") {
          return handleTrackEnd(false);
        }
        if (event.detail.state === "cancel") {
          return handleTrackEnd(true);
        }
        if (state2.userTracking) {
          if (!userDirectionChecked) {
            userDirectionChecked = true;
            const t2 = Math.abs(event.detail.dx);
            const n = Math.abs(event.detail.dy);
            if (t2 >= n && props2.vertical) {
              state2.userTracking = false;
            } else {
              if (t2 <= n && !props2.vertical) {
                state2.userTracking = false;
              }
            }
            if (!state2.userTracking) {
              if (props2.autoplay) {
                scheduleAutoplay();
              }
              return;
            }
          }
          handleTrackMove(event.detail);
          return false;
        }
      }
    });
  });
  onUnmounted(() => {
    cancelSchedule();
    cancelAnimationFrame(animationFrame);
  });
  function onSwiperDotClick(index2) {
    animateViewport(state2.current = index2, currentChangeSource = "click", circularEnabled.value ? 1 : 0);
  }
  return {
    onSwiperDotClick,
    circularEnabled,
    swiperEnabled
  };
}
const Swiper = /* @__PURE__ */ defineBuiltInComponent({
  name: "Swiper",
  props: props$k,
  emits: ["change", "transition", "animationfinish", "update:current", "update:currentItemId"],
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const trigger = useCustomEvent(rootRef, emit2);
    const slidesWrapperRef = ref(null);
    const slideFrameRef = ref(null);
    const state2 = useState$3(props2);
    const slidesStyle = computed(() => {
      let style = {};
      if (props2.nextMargin || props2.previousMargin) {
        style = props2.vertical ? {
          left: 0,
          right: 0,
          top: rpx2px(props2.previousMargin, true),
          bottom: rpx2px(props2.nextMargin, true)
        } : {
          top: 0,
          bottom: 0,
          left: rpx2px(props2.previousMargin, true),
          right: rpx2px(props2.nextMargin, true)
        };
      }
      return style;
    });
    const slideFrameStyle = computed(() => {
      const value = Math.abs(100 / state2.displayMultipleItems) + "%";
      return {
        width: props2.vertical ? "100%" : value,
        height: !props2.vertical ? "100%" : value
      };
    });
    let swiperItems = [];
    const originSwiperContexts = [];
    const swiperContexts = ref([]);
    function updateSwiperContexts() {
      const contexts = [];
      for (let index2 = 0; index2 < swiperItems.length; index2++) {
        let swiperItem = swiperItems[index2];
        if (!(swiperItem instanceof Element)) {
          swiperItem = swiperItem.el;
        }
        const swiperContext = originSwiperContexts.find((context) => swiperItem === context.rootRef.value);
        if (swiperContext) {
          contexts.push(markRaw(swiperContext));
        }
      }
      swiperContexts.value = contexts;
    }
    const addSwiperContext = function(swiperContext) {
      originSwiperContexts.push(swiperContext);
      updateSwiperContexts();
    };
    provide("addSwiperContext", addSwiperContext);
    const removeSwiperContext = function(swiperContext) {
      const index2 = originSwiperContexts.indexOf(swiperContext);
      if (index2 >= 0) {
        originSwiperContexts.splice(index2, 1);
        updateSwiperContexts();
      }
    };
    provide("removeSwiperContext", removeSwiperContext);
    const {
      onSwiperDotClick,
      circularEnabled,
      swiperEnabled
    } = useLayout(props2, state2, swiperContexts, slideFrameRef, emit2, trigger);
    let createNavigationTsx = () => null;
    {
      createNavigationTsx = useSwiperNavigation(rootRef, props2, state2, onSwiperDotClick, swiperContexts, circularEnabled, swiperEnabled);
    }
    return () => {
      const defaultSlots = slots.default && slots.default();
      swiperItems = flatVNode(defaultSlots);
      return createVNode("uni-swiper", {
        "ref": rootRef
      }, [createVNode("div", {
        "ref": slidesWrapperRef,
        "class": "uni-swiper-wrapper"
      }, [createVNode("div", {
        "class": "uni-swiper-slides",
        "style": slidesStyle.value
      }, [createVNode("div", {
        "ref": slideFrameRef,
        "class": "uni-swiper-slide-frame",
        "style": slideFrameStyle.value
      }, [defaultSlots], 4)], 4), props2.indicatorDots && createVNode("div", {
        "class": ["uni-swiper-dots", props2.vertical ? "uni-swiper-dots-vertical" : "uni-swiper-dots-horizontal"]
      }, [swiperContexts.value.map((_, index2, array) => createVNode("div", {
        "onClick": () => onSwiperDotClick(index2),
        "class": {
          "uni-swiper-dot": true,
          "uni-swiper-dot-active": index2 < state2.current + state2.displayMultipleItems && index2 >= state2.current || index2 < state2.current + state2.displayMultipleItems - array.length
        },
        "style": {
          background: index2 === state2.current ? props2.indicatorActiveColor : props2.indicatorColor
        }
      }, null, 14, ["onClick"]))], 2), createNavigationTsx()], 512)], 512);
    };
  }
});
const useSwiperNavigation = (rootRef, props2, state2, onSwiperDotClick, swiperContext, circularEnabled, swiperEnabled) => {
  let isNavigationAuto = false;
  let prevDisabled = false;
  let nextDisabled = false;
  let hideNavigation = ref(false);
  watchEffect(() => {
    isNavigationAuto = props2.navigation === "auto";
    hideNavigation.value = props2.navigation !== true || isNavigationAuto;
    swiperAddMouseEvent();
  });
  watchEffect(() => {
    const swiperItemLength = swiperContext.value.length;
    const notCircular = !circularEnabled.value;
    prevDisabled = state2.current === 0 && notCircular;
    nextDisabled = state2.current === swiperItemLength - 1 && notCircular || notCircular && state2.current + state2.displayMultipleItems >= swiperItemLength;
    if (!swiperEnabled.value) {
      prevDisabled = true;
      nextDisabled = true;
      isNavigationAuto && (hideNavigation.value = true);
    }
  });
  function navigationHover(event, type) {
    const target = event.currentTarget;
    if (!target)
      return;
    target.style.backgroundColor = type === "over" ? props2.navigationActiveColor : "";
  }
  const navigationAttr = {
    onMouseover: (event) => navigationHover(event, "over"),
    onMouseout: (event) => navigationHover(event, "out")
  };
  function navigationClick($event, type, disabled) {
    $event.stopPropagation();
    if (disabled)
      return;
    const swiperItemLength = swiperContext.value.length;
    let _current = state2.current;
    switch (type) {
      case "prev":
        _current--;
        if (_current < 0 && circularEnabled.value) {
          _current = swiperItemLength - 1;
        }
        break;
      case "next":
        _current++;
        if (_current >= swiperItemLength && circularEnabled.value) {
          _current = 0;
        }
        break;
    }
    onSwiperDotClick(_current);
  }
  const createNavigationSVG = () => createSvgIconVNode(ICON_PATH_BACK, props2.navigationColor, 26);
  let setHideNavigationTimer;
  const _mousemove = (e2) => {
    clearTimeout(setHideNavigationTimer);
    const {
      clientX,
      clientY
    } = e2;
    const {
      left,
      right,
      top,
      bottom,
      width,
      height
    } = rootRef.value.getBoundingClientRect();
    let hide = false;
    if (props2.vertical) {
      hide = !(clientY - top < height / 3 || bottom - clientY < height / 3);
    } else {
      hide = !(clientX - left < width / 3 || right - clientX < width / 3);
    }
    if (hide) {
      return setHideNavigationTimer = setTimeout(() => {
        hideNavigation.value = hide;
      }, 300);
    }
    hideNavigation.value = hide;
  };
  const _mouseleave = () => {
    hideNavigation.value = true;
  };
  function swiperAddMouseEvent() {
    if (rootRef.value) {
      rootRef.value.removeEventListener("mousemove", _mousemove);
      rootRef.value.removeEventListener("mouseleave", _mouseleave);
      if (isNavigationAuto) {
        rootRef.value.addEventListener("mousemove", _mousemove);
        rootRef.value.addEventListener("mouseleave", _mouseleave);
      }
    }
  }
  onMounted(swiperAddMouseEvent);
  function createNavigationTsx() {
    const navigationClass = {
      "uni-swiper-navigation-hide": hideNavigation.value,
      "uni-swiper-navigation-vertical": props2.vertical
    };
    if (props2.navigation) {
      return createVNode(Fragment, null, [createVNode("div", mergeProps({
        "class": ["uni-swiper-navigation uni-swiper-navigation-prev", extend({
          "uni-swiper-navigation-disabled": prevDisabled
        }, navigationClass)],
        "onClick": (e2) => navigationClick(e2, "prev", prevDisabled)
      }, navigationAttr), [createNavigationSVG()], 16, ["onClick"]), createVNode("div", mergeProps({
        "class": ["uni-swiper-navigation uni-swiper-navigation-next", extend({
          "uni-swiper-navigation-disabled": nextDisabled
        }, navigationClass)],
        "onClick": (e2) => navigationClick(e2, "next", nextDisabled)
      }, navigationAttr), [createNavigationSVG()], 16, ["onClick"])]);
    }
    return null;
  }
  return createNavigationTsx;
};
const props$j = {
  itemId: {
    type: String,
    default: ""
  }
};
const SwiperItem = /* @__PURE__ */ defineBuiltInComponent({
  name: "SwiperItem",
  props: props$j,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const context = {
      rootRef,
      getItemId() {
        return props2.itemId;
      },
      getBoundingClientRect() {
        const el = rootRef.value;
        return el.getBoundingClientRect();
      },
      updatePosition(position, vertical) {
        const x = vertical ? "0" : 100 * position + "%";
        const y = vertical ? 100 * position + "%" : "0";
        const rootEl = rootRef.value;
        const value = `translate(${x},${y}) translateZ(0)`;
        if (rootEl) {
          rootEl.style.webkitTransform = value;
          rootEl.style.transform = value;
        }
      }
    };
    onMounted(() => {
      const addSwiperContext = inject("addSwiperContext");
      if (addSwiperContext) {
        addSwiperContext(context);
      }
    });
    onUnmounted(() => {
      const removeSwiperContext = inject("removeSwiperContext");
      if (removeSwiperContext) {
        removeSwiperContext(context);
      }
    });
    return () => {
      return createVNode("uni-swiper-item", {
        "ref": rootRef,
        "style": {
          position: "absolute",
          width: "100%",
          height: "100%"
        }
      }, [slots.default && slots.default()], 512);
    };
  }
});
const SPACE_UNICODE = {
  ensp: " ",
  emsp: " ",
  nbsp: " "
};
function parseText(text2, options) {
  return text2.replace(/\\n/g, LINEFEED).split(LINEFEED).map((text22) => {
    return normalizeText(text22, options);
  });
}
function normalizeText(text2, { space, decode: decode2 }) {
  if (!text2) {
    return text2;
  }
  if (space && SPACE_UNICODE[space]) {
    text2 = text2.replace(/ /g, SPACE_UNICODE[space]);
  }
  if (!decode2) {
    return text2;
  }
  return text2.replace(/&nbsp;/g, SPACE_UNICODE.nbsp).replace(/&ensp;/g, SPACE_UNICODE.ensp).replace(/&emsp;/g, SPACE_UNICODE.emsp).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}
const index$i = /* @__PURE__ */ defineBuiltInComponent({
  name: "Text",
  props: {
    selectable: {
      type: [Boolean, String],
      default: false
    },
    space: {
      type: String,
      default: ""
    },
    decode: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props2, {
    slots
  }) {
    return () => {
      const children = [];
      if (slots.default) {
        slots.default().forEach((vnode) => {
          if (vnode.shapeFlag & 8 && vnode.type !== Comment) {
            const lines = parseText(vnode.children, {
              space: props2.space,
              decode: props2.decode
            });
            const len = lines.length - 1;
            lines.forEach((line, index2) => {
              if (index2 === 0 && !line)
                ;
              else {
                children.push(createTextVNode(line));
              }
              if (index2 !== len) {
                children.push(createVNode("br"));
              }
            });
          } else {
            children.push(vnode);
          }
        });
      }
      return createVNode("uni-text", {
        "selectable": props2.selectable ? true : null
      }, [createVNode("span", null, children)], 8, ["selectable"]);
    };
  }
});
const props$h = /* @__PURE__ */ extend({}, props$r, {
  placeholderClass: {
    type: String,
    default: "input-placeholder"
  },
  autoHeight: {
    type: [Boolean, String],
    default: false
  },
  confirmType: {
    type: String,
    default: "return",
    validator(val) {
      return ConfirmTypes.concat("return").includes(val);
    }
  }
});
let fixMargin = false;
const ConfirmTypes = ["done", "go", "next", "search", "send"];
function setFixMargin() {
  const DARK_TEST_STRING = "(prefers-color-scheme: dark)";
  fixMargin = String(navigator.platform).indexOf("iP") === 0 && String(navigator.vendor).indexOf("Apple") === 0 && window.matchMedia(DARK_TEST_STRING).media !== DARK_TEST_STRING;
}
const index$h = /* @__PURE__ */ defineBuiltInComponent({
  name: "Textarea",
  props: props$h,
  emits: ["confirm", "linechange", ...emit],
  setup(props2, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    const wrapperRef = ref(null);
    const {
      fieldRef,
      state: state2,
      scopedAttrsState,
      fixDisabledColor,
      trigger
    } = useField(props2, rootRef, emit2);
    const valueCompute = computed(() => state2.value.split(LINEFEED));
    const isDone = computed(() => ConfirmTypes.includes(props2.confirmType));
    const heightRef = ref(0);
    const lineRef = ref(null);
    watch(() => heightRef.value, (height) => {
      const el = rootRef.value;
      const lineEl = lineRef.value;
      const wrapper2 = wrapperRef.value;
      let lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      if (isNaN(lineHeight)) {
        lineHeight = lineEl.offsetHeight;
      }
      var lineCount = Math.round(height / lineHeight);
      trigger("linechange", {}, {
        height,
        heightRpx: 750 / window.innerWidth * height,
        lineCount
      });
      if (props2.autoHeight) {
        el.style.height = "auto";
        wrapper2.style.height = height + "px";
      }
    });
    function onResize2({
      height
    }) {
      heightRef.value = height;
    }
    function confirm(event) {
      trigger("confirm", event, {
        value: state2.value
      });
    }
    function onKeyDownEnter(event) {
      if (event.key !== "Enter") {
        return;
      }
      if (isDone.value) {
        event.preventDefault();
      }
    }
    function onKeyUpEnter(event) {
      if (event.key !== "Enter") {
        return;
      }
      if (isDone.value) {
        confirm(event);
        const textarea = event.target;
        !props2.confirmHold && textarea.blur();
      }
    }
    {
      setFixMargin();
    }
    return () => {
      let textareaNode = props2.disabled && fixDisabledColor ? createVNode("textarea", {
        "key": "disabled-textarea",
        "ref": fieldRef,
        "value": state2.value,
        "tabindex": "-1",
        "readonly": !!props2.disabled,
        "maxlength": state2.maxlength,
        "class": {
          "uni-textarea-textarea": true,
          "uni-textarea-textarea-fix-margin": fixMargin
        },
        "style": {
          overflowY: props2.autoHeight ? "hidden" : "auto"
        },
        "onFocus": (event) => event.target.blur()
      }, null, 46, ["value", "readonly", "maxlength", "onFocus"]) : createVNode("textarea", {
        "key": "textarea",
        "ref": fieldRef,
        "value": state2.value,
        "disabled": !!props2.disabled,
        "maxlength": state2.maxlength,
        "enterkeyhint": props2.confirmType,
        "inputmode": props2.inputmode,
        "class": {
          "uni-textarea-textarea": true,
          "uni-textarea-textarea-fix-margin": fixMargin
        },
        "style": {
          overflowY: props2.autoHeight ? "hidden" : "auto"
        },
        "onKeydown": onKeyDownEnter,
        "onKeyup": onKeyUpEnter
      }, null, 46, ["value", "disabled", "maxlength", "enterkeyhint", "inputmode", "onKeydown", "onKeyup"]);
      return createVNode("uni-textarea", {
        "ref": rootRef
      }, [createVNode("div", {
        "ref": wrapperRef,
        "class": "uni-textarea-wrapper"
      }, [withDirectives(createVNode("div", mergeProps(scopedAttrsState.attrs, {
        "style": props2.placeholderStyle,
        "class": ["uni-textarea-placeholder", props2.placeholderClass]
      }), [props2.placeholder], 16), [[vShow, !state2.value.length]]), createVNode("div", {
        "ref": lineRef,
        "class": "uni-textarea-line"
      }, [" "], 512), createVNode("div", {
        "class": "uni-textarea-compute"
      }, [valueCompute.value.map((item) => createVNode("div", null, [item.trim() ? item : "."])), createVNode(ResizeSensor, {
        "initial": true,
        "onResize": onResize2
      }, null, 8, ["initial", "onResize"])]), props2.confirmType === "search" ? createVNode("form", {
        "action": "",
        "onSubmit": () => false,
        "class": "uni-input-form"
      }, [textareaNode], 40, ["onSubmit"]) : textareaNode], 512)], 512);
    };
  }
});
const index$g = /* @__PURE__ */ defineBuiltInComponent({
  name: "View",
  props: extend({}, hoverProps),
  setup(props2, {
    slots
  }) {
    const {
      hovering,
      binding
    } = useHover(props2);
    return () => {
      const hoverClass = props2.hoverClass;
      if (hoverClass && hoverClass !== "none") {
        return createVNode("uni-view", mergeProps({
          "class": hovering.value ? hoverClass : ""
        }, binding), [slots.default && slots.default()], 16);
      }
      return createVNode("uni-view", null, [slots.default && slots.default()]);
    };
  }
});
function normalizeEvent(vm, id2) {
  if (!id2) {
    id2 = vm.id;
  }
  if (!id2) {
    return;
  }
  return vm.$options.name.toLowerCase() + "." + id2;
}
function addSubscribe(name, callback, pageId) {
  if (!name) {
    return;
  }
  registerViewMethod(
    pageId || getCurrentPageId(),
    name,
    ({ type, data }, resolve) => {
      callback(type, data, resolve);
    }
  );
}
function removeSubscribe(name, pageId) {
  if (!name) {
    return;
  }
  unregisterViewMethod(pageId || getCurrentPageId(), name);
}
function useSubscribe(callback, name, multiple, pageId) {
  const instance2 = getCurrentInstance();
  const vm = instance2.proxy;
  onMounted(() => {
    addSubscribe(name || normalizeEvent(vm), callback, pageId);
    if (multiple || !name) {
      watch(
        () => vm.id,
        (value, oldValue) => {
          addSubscribe(normalizeEvent(vm, value), callback, pageId);
          removeSubscribe(oldValue && normalizeEvent(vm, oldValue));
        }
      );
    }
  });
  onBeforeUnmount(() => {
    removeSubscribe(name || normalizeEvent(vm), pageId);
  });
}
let index$f = 0;
function useContextInfo(_id) {
  const page = useCurrentPageId();
  const instance2 = getCurrentInstance();
  const vm = instance2.proxy;
  const type = vm.$options.name.toLowerCase();
  const id2 = _id || vm.id || `context${index$f++}`;
  onMounted(() => {
    const el = vm.$el;
    el.__uniContextInfo = {
      id: id2,
      type,
      page
    };
  });
  return `${type}.${id2}`;
}
function getContextInfo(el) {
  return el.__uniContextInfo;
}
const pageMetaKey = PolySymbol("upm");
function usePageMeta() {
  return inject(pageMetaKey);
}
function providePageMeta(id2) {
  const pageMeta = initPageMeta(id2);
  provide(pageMetaKey, pageMeta);
  return pageMeta;
}
function initPageMeta(id2) {
  {
    return reactive(
      normalizePageMeta(
        JSON.parse(
          JSON.stringify(
            initRouteMeta(
              useRoute().meta,
              id2
            )
          )
        )
      )
    );
  }
}
function normalizePageMeta(pageMeta) {
  {
    const { navigationBar } = pageMeta;
    const { titleSize, titleColor, backgroundColor } = navigationBar;
    navigationBar.titleText = navigationBar.titleText || "";
    navigationBar.type = navigationBar.type || "default";
    navigationBar.titleSize = titleSize || "16px";
    navigationBar.titleColor = titleColor || "#000000";
    navigationBar.backgroundColor = backgroundColor || "#F8F8F8";
    initNavigationBarI18n(navigationBar);
  }
  if (history.state) {
    const type = history.state.__type__;
    if ((type === "redirectTo" || type === "reLaunch") && getCurrentPages$1().length === 0) {
      pageMeta.isEntry = true;
      pageMeta.isQuit = true;
    }
  }
  return pageMeta;
}
function getStateId() {
  return history.state && history.state.__id__ || 1;
}
const SEP = "$$";
const currentPagesMap = /* @__PURE__ */ new Map();
function pruneCurrentPages() {
  currentPagesMap.forEach((page, id2) => {
    if (page.$.isUnmounted) {
      currentPagesMap.delete(id2);
    }
  });
}
function getCurrentPagesMap() {
  return currentPagesMap;
}
function getCurrentPages$1() {
  var ext = globalThis.getCurrentPages;
  if (typeof ext === "function") {
    try {
      var extPages = ext();
      if (extPages) return extPages;
    } catch (e) {
    }
  }
  const curPages = [];
  const pages = currentPagesMap.values();
  for (const page of pages) {
    if (page.$.__isTabBar) {
      if (page.$.__isActive) {
        curPages.push(page);
      }
    } else {
      curPages.push(page);
    }
  }
  return curPages;
}
function removeRouteCache(routeKey) {
  const vnode = pageCacheMap.get(routeKey);
  if (vnode) {
    pageCacheMap.delete(routeKey);
    routeCache.pruneCacheEntry(vnode);
  }
}
function removePage(routeKey, removeRouteCaches = true) {
  const pageVm = currentPagesMap.get(routeKey);
  pageVm.$.__isUnload = true;
  invokeHook(pageVm, ON_UNLOAD);
  currentPagesMap.delete(routeKey);
  removeRouteCaches && removeRouteCache(routeKey);
}
let id = /* @__PURE__ */ getStateId();
function createPageState(type, __id__) {
  return {
    __id__: __id__ || ++id,
    __type__: type
  };
}
function normalizeRouteKey(path, id2) {
  return path + SEP + id2;
}
const pageCacheMap = /* @__PURE__ */ new Map();
const routeCache = {
  get(key) {
    return pageCacheMap.get(key);
  },
  set(key, value) {
    pruneRouteCache(key);
    pageCacheMap.set(key, value);
  },
  delete(key) {
    const vnode = pageCacheMap.get(key);
    if (!vnode) {
      return;
    }
    pageCacheMap.delete(key);
  },
  forEach(fn) {
    pageCacheMap.forEach(fn);
  }
};
function isTabBarVNode(vnode) {
  return vnode.props.type === "tabBar";
}
function pruneRouteCache(key) {
  const pageId = parseInt(key.split(SEP)[1]);
  if (!pageId) {
    return;
  }
  routeCache.forEach((vnode, key2) => {
    const cPageId = parseInt(key2.split(SEP)[1]);
    if (cPageId && cPageId > pageId) {
      if (isTabBarVNode(vnode)) {
        return;
      }
      routeCache.delete(key2);
      routeCache.pruneCacheEntry(vnode);
      nextTick(() => pruneCurrentPages());
    }
  });
}
let appVm;
function getApp$1() {
  var fn = globalThis.getApp;
  if (typeof fn === "function") {
    try {
      var app = fn();
      if (app) return app;
    } catch (e) {
    }
  }
  return appVm;
}
function formatTime(val) {
  val = val > 0 && val < Infinity ? val : 0;
  const h2 = Math.floor(val / 3600);
  const m = Math.floor(val % 3600 / 60);
  const s = Math.floor(val % 3600 % 60);
  const hStr = (h2 < 10 ? "0" : "") + h2;
  const mStr = (m < 10 ? "0" : "") + m;
  const sStr = (s < 10 ? "0" : "") + s;
  let str = mStr + ":" + sStr;
  if (hStr !== "00") {
    str = hStr + ":" + str;
  }
  return str;
}
function useGesture(props2, videoRef, fullscreenState) {
  const state2 = reactive({
    gestureType: "none",
    volumeOld: 0,
    volumeNew: 0,
    currentTimeOld: 0,
    currentTimeNew: 0
  });
  const touchStartOrigin = {
    x: 0,
    y: 0
  };
  function onTouchstart(event) {
    const toucher = event.targetTouches[0];
    touchStartOrigin.x = toucher.pageX;
    touchStartOrigin.y = toucher.pageY;
    state2.gestureType = "none";
    state2.volumeOld = 0;
    state2.currentTimeOld = state2.currentTimeNew = 0;
  }
  function onTouchmove(event) {
    function stop() {
      event.stopPropagation();
      event.preventDefault();
    }
    if (fullscreenState.fullscreen) {
      stop();
    }
    const gestureType = state2.gestureType;
    if (gestureType === "stop") {
      return;
    }
    const toucher = event.targetTouches[0];
    const pageX = toucher.pageX;
    const pageY = toucher.pageY;
    const origin = touchStartOrigin;
    const video = videoRef.value;
    if (gestureType === "progress") {
      changeProgress(pageX - origin.x);
    } else if (gestureType === "volume") {
      changeVolume(pageY - origin.y);
    }
    if (gestureType !== "none") {
      return;
    }
    if (Math.abs(pageX - origin.x) > Math.abs(pageY - origin.y)) {
      if (!props2.enableProgressGesture) {
        state2.gestureType = "stop";
        return;
      }
      state2.gestureType = "progress";
      state2.currentTimeOld = state2.currentTimeNew = video.currentTime;
      if (!fullscreenState.fullscreen) {
        stop();
      }
    } else {
      if (!props2.pageGesture) {
        state2.gestureType = "stop";
        return;
      }
      state2.gestureType = "volume";
      state2.volumeOld = video.volume;
      if (!fullscreenState.fullscreen) {
        stop();
      }
    }
  }
  function onTouchend(event) {
    const video = videoRef.value;
    if (state2.gestureType !== "none" && state2.gestureType !== "stop") {
      event.stopPropagation();
      event.preventDefault();
    }
    if (state2.gestureType === "progress" && state2.currentTimeOld !== state2.currentTimeNew) {
      video.currentTime = state2.currentTimeNew;
    }
    state2.gestureType = "none";
  }
  function changeProgress(x) {
    const video = videoRef.value;
    const duration = video.duration;
    let currentTimeNew = x / 600 * duration + state2.currentTimeOld;
    if (currentTimeNew < 0) {
      currentTimeNew = 0;
    } else if (currentTimeNew > duration) {
      currentTimeNew = duration;
    }
    state2.currentTimeNew = currentTimeNew;
  }
  function changeVolume(y) {
    const video = videoRef.value;
    const valueOld = state2.volumeOld;
    let value;
    if (typeof valueOld === "number") {
      value = valueOld - y / 200;
      if (value < 0) {
        value = 0;
      } else if (value > 1) {
        value = 1;
      }
      video.volume = value;
      state2.volumeNew = value;
    }
  }
  return {
    state: state2,
    onTouchstart,
    onTouchmove,
    onTouchend
  };
}
function useFullscreen(trigger, containerRef, videoRef, userActionState, rootRef) {
  const state2 = reactive({
    fullscreen: false
  });
  const isSafari = /^Apple/.test(navigator.vendor);
  function onFullscreenChange($event, webkit) {
    if (webkit && document.fullscreenEnabled) {
      return;
    }
    emitFullscreenChange(!!(document.fullscreenElement || document.webkitFullscreenElement));
  }
  function emitFullscreenChange(val) {
    state2.fullscreen = val;
    trigger("fullscreenchange", {}, {
      fullScreen: val,
      direction: "vertical"
    });
  }
  function toggleFullscreen(val) {
    const root = rootRef.value;
    const container = containerRef.value;
    const video = videoRef.value;
    let mockFullScreen;
    if (val) {
      if ((document.fullscreenEnabled || document.webkitFullscreenEnabled) && (!isSafari || userActionState.userAction)) {
        container[document.fullscreenEnabled ? "requestFullscreen" : "webkitRequestFullscreen"]();
      } else if (video.webkitEnterFullScreen) {
        video.webkitEnterFullScreen();
      } else {
        mockFullScreen = true;
        container.remove();
        container.classList.add("uni-video-type-fullscreen");
        document.body.appendChild(container);
      }
    } else {
      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
          document.webkitExitFullscreen();
        }
      } else if (video.webkitExitFullScreen) {
        video.webkitExitFullScreen();
      } else {
        mockFullScreen = true;
        container.remove();
        container.classList.remove("uni-video-type-fullscreen");
        root.appendChild(container);
      }
    }
    if (mockFullScreen) {
      emitFullscreenChange(val);
    }
  }
  function requestFullScreen() {
    toggleFullscreen(true);
  }
  function exitFullScreen() {
    toggleFullscreen(false);
  }
  onBeforeUnmount(exitFullScreen);
  return {
    state: state2,
    onFullscreenChange,
    emitFullscreenChange,
    toggleFullscreen,
    requestFullScreen,
    exitFullScreen
  };
}
function useVideo(props2, attrs2, trigger) {
  const videoRef = ref(null);
  const src = computed(() => getRealPath(props2.src));
  const state2 = reactive({
    start: false,
    src,
    playing: false,
    currentTime: 0,
    duration: 0,
    progress: 0,
    buffered: 0
  });
  watch(() => src.value, () => {
    state2.playing = false;
    state2.currentTime = 0;
  });
  watch(() => state2.buffered, (buffered) => {
    trigger("progress", {}, {
      buffered
    });
  });
  function onDurationChange({
    target
  }) {
    state2.duration = target.duration;
  }
  function onLoadedMetadata($event) {
    const initialTime = Number(props2.initialTime) || 0;
    const video = $event.target;
    if (initialTime > 0) {
      video.currentTime = initialTime;
    }
    trigger("loadedmetadata", $event, {
      width: video.videoWidth,
      height: video.videoHeight,
      duration: video.duration
    });
    onProgress($event);
  }
  function onProgress($event) {
    const video = $event.target;
    const buffered = video.buffered;
    if (buffered.length) {
      state2.buffered = buffered.end(buffered.length - 1) / video.duration * 100;
    }
  }
  function onWaiting($event) {
    trigger("waiting", $event, {});
  }
  function onVideoError($event) {
    state2.playing = false;
    trigger("error", $event, {});
  }
  function onPlay($event) {
    state2.start = true;
    state2.playing = true;
    trigger("play", $event, {});
  }
  function onPause($event) {
    state2.playing = false;
    trigger("pause", $event, {});
  }
  function onEnded($event) {
    state2.playing = false;
    trigger("ended", $event, {});
  }
  function onTimeUpdate($event) {
    const video = $event.target;
    const currentTime = state2.currentTime = video.currentTime;
    trigger("timeupdate", $event, {
      currentTime,
      duration: video.duration
    });
  }
  function toggle() {
    const video = videoRef.value;
    if (state2.playing) {
      video.pause();
    } else {
      video.play();
    }
  }
  function play() {
    const video = videoRef.value;
    state2.start = true;
    video.play();
  }
  function pause() {
    const video = videoRef.value;
    video.pause();
  }
  function seek(position) {
    const video = videoRef.value;
    position = Number(position);
    if (typeof position === "number" && !isNaN(position)) {
      video.currentTime = position;
    }
  }
  function playbackRate(rate) {
    const video = videoRef.value;
    video.playbackRate = rate;
  }
  return {
    videoRef,
    state: state2,
    play,
    pause,
    seek,
    playbackRate,
    toggle,
    onDurationChange,
    onLoadedMetadata,
    onProgress,
    onWaiting,
    onVideoError,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate
  };
}
function useControls(props2, videoState, seek) {
  const progressRef = ref(null);
  const ballRef = ref(null);
  const centerPlayBtnShow = computed(() => props2.showCenterPlayBtn && !videoState.start);
  const controlsVisible = ref(true);
  const controlsShow = computed(() => !centerPlayBtnShow.value && props2.controls && controlsVisible.value);
  const state2 = reactive({
    touching: false,
    controlsTouching: false,
    centerPlayBtnShow,
    controlsShow,
    controlsVisible
  });
  function clickProgress(event) {
    const $progress = progressRef.value;
    let element = event.target;
    let x = event.offsetX;
    while (element && element !== $progress) {
      x += element.offsetLeft;
      element = element.parentNode;
    }
    const w = $progress.offsetWidth;
    let progress = 0;
    if (x >= 0 && x <= w) {
      progress = x / w;
      seek(videoState.duration * progress);
    }
  }
  function toggleControls() {
    state2.controlsVisible = !state2.controlsVisible;
  }
  let hideTiming;
  function autoHideStart() {
    hideTiming = setTimeout(() => {
      state2.controlsVisible = false;
    }, 3e3);
  }
  function autoHideEnd() {
    if (hideTiming) {
      clearTimeout(hideTiming);
      hideTiming = null;
    }
  }
  onBeforeUnmount(() => {
    if (hideTiming) {
      clearTimeout(hideTiming);
    }
  });
  watch(() => state2.controlsShow && videoState.playing && !state2.controlsTouching, (val) => {
    if (val) {
      autoHideStart();
    } else {
      autoHideEnd();
    }
  });
  watch([() => videoState.currentTime, () => {
    props2.duration;
  }], function updateProgress() {
    if (!state2.touching) {
      videoState.progress = videoState.currentTime / videoState.duration * 100;
    }
  });
  onMounted(() => {
    const passiveOptions2 = passive(false);
    let originX;
    let originY;
    let moveOnce = true;
    let originProgress;
    const ball = ballRef.value;
    function touchmove2(event) {
      const toucher = event.targetTouches[0];
      const pageX = toucher.pageX;
      const pageY = toucher.pageY;
      if (moveOnce && Math.abs(pageX - originX) < Math.abs(pageY - originY)) {
        touchend(event);
        return;
      }
      moveOnce = false;
      const progressEl = progressRef.value;
      const w = progressEl.offsetWidth;
      let progress = originProgress + (pageX - originX) / w * 100;
      if (progress < 0) {
        progress = 0;
      } else if (progress > 100) {
        progress = 100;
      }
      videoState.progress = progress;
      event.preventDefault();
      event.stopPropagation();
    }
    function touchend(event) {
      state2.controlsTouching = false;
      if (state2.touching) {
        ball.removeEventListener("touchmove", touchmove2, passiveOptions2);
        if (!moveOnce) {
          event.preventDefault();
          event.stopPropagation();
          seek(videoState.duration * videoState.progress / 100);
        }
        state2.touching = false;
      }
    }
    ball.addEventListener("touchstart", (event) => {
      state2.controlsTouching = true;
      const toucher = event.targetTouches[0];
      originX = toucher.pageX;
      originY = toucher.pageY;
      originProgress = videoState.progress;
      moveOnce = true;
      state2.touching = true;
      ball.addEventListener("touchmove", touchmove2, passiveOptions2);
    });
    ball.addEventListener("touchend", touchend);
    ball.addEventListener("touchcancel", touchend);
  });
  return {
    state: state2,
    progressRef,
    ballRef,
    clickProgress,
    toggleControls,
    autoHideStart,
    autoHideEnd
  };
}
function useDanmu(props2, videoState) {
  const danmuRef = ref(null);
  const state2 = reactive({
    enable: Boolean(props2.enableDanmu)
  });
  let danmuIndex = {
    time: 0,
    index: -1
  };
  const danmuList = isArray(props2.danmuList) ? JSON.parse(JSON.stringify(props2.danmuList)) : [];
  danmuList.sort(function(a2, b) {
    return (a2.time || 0) - (b.time || 0);
  });
  function toggleDanmu() {
    state2.enable = !state2.enable;
  }
  function updateDanmu(event) {
    const video = event.target;
    const currentTime = video.currentTime;
    const oldDanmuIndex = danmuIndex;
    const newDanmuIndex = {
      time: currentTime,
      index: oldDanmuIndex.index
    };
    if (currentTime > oldDanmuIndex.time) {
      for (let index2 = oldDanmuIndex.index + 1; index2 < danmuList.length; index2++) {
        const element = danmuList[index2];
        if (currentTime >= (element.time || 0)) {
          newDanmuIndex.index = index2;
          if (videoState.playing && state2.enable) {
            playDanmu(element);
          }
        } else {
          break;
        }
      }
    } else if (currentTime < oldDanmuIndex.time) {
      for (let index2 = oldDanmuIndex.index - 1; index2 > -1; index2--) {
        const element = danmuList[index2];
        if (currentTime <= (element.time || 0)) {
          newDanmuIndex.index = index2 - 1;
        } else {
          break;
        }
      }
    }
    danmuIndex = newDanmuIndex;
  }
  function playDanmu(danmu) {
    const p2 = document.createElement("p");
    p2.className = "uni-video-danmu-item";
    p2.innerText = danmu.text;
    let style = `bottom: ${Math.random() * 100}%;color: ${danmu.color};`;
    p2.setAttribute("style", style);
    const danmuEl = danmuRef.value;
    danmuEl.appendChild(p2);
    setTimeout(function() {
      style += "left: 0;-webkit-transform: translateX(-100%);transform: translateX(-100%);";
      p2.setAttribute("style", style);
      setTimeout(function() {
        p2.remove();
      }, 4e3);
    }, 17);
  }
  function sendDanmu(danmu) {
    danmuList.splice(danmuIndex.index + 1, 0, {
      text: String(danmu.text),
      color: danmu.color,
      time: videoState.currentTime || 0
    });
  }
  return {
    state: state2,
    danmuRef,
    updateDanmu,
    toggleDanmu,
    sendDanmu
  };
}
function useContext(play, pause, seek, sendDanmu, playbackRate, requestFullScreen, exitFullScreen) {
  const methods = {
    play,
    pause,
    seek,
    sendDanmu,
    playbackRate,
    requestFullScreen,
    exitFullScreen
  };
  const id2 = useContextInfo();
  useSubscribe((type, data) => {
    let options;
    switch (type) {
      case "seek":
        options = data.position;
        break;
      case "sendDanmu":
        options = data;
        break;
      case "playbackRate":
        options = data.rate;
        break;
    }
    if (type in methods) {
      methods[type](options);
    }
  }, id2, true);
}
const props$g = {
  id: {
    type: String,
    default: ""
  },
  src: {
    type: String,
    default: ""
  },
  duration: {
    type: [Number, String],
    default: ""
  },
  controls: {
    type: [Boolean, String],
    default: true
  },
  danmuList: {
    type: Array,
    default() {
      return [];
    }
  },
  danmuBtn: {
    type: [Boolean, String],
    default: false
  },
  enableDanmu: {
    type: [Boolean, String],
    default: false
  },
  autoplay: {
    type: [Boolean, String],
    default: false
  },
  loop: {
    type: [Boolean, String],
    default: false
  },
  muted: {
    type: [Boolean, String],
    default: false
  },
  objectFit: {
    type: String,
    default: "contain"
  },
  poster: {
    type: String,
    default: ""
  },
  direction: {
    type: [String, Number],
    default: ""
  },
  showProgress: {
    type: Boolean,
    default: true
  },
  initialTime: {
    type: [String, Number],
    default: 0
  },
  showFullscreenBtn: {
    type: [Boolean, String],
    default: true
  },
  pageGesture: {
    type: [Boolean, String],
    default: false
  },
  enableProgressGesture: {
    type: [Boolean, String],
    default: true
  },
  showPlayBtn: {
    type: [Boolean, String],
    default: true
  },
  showCenterPlayBtn: {
    type: [Boolean, String],
    default: true
  }
};
const index$d = /* @__PURE__ */ defineBuiltInComponent({
  name: "Video",
  props: props$g,
  emits: ["fullscreenchange", "progress", "loadedmetadata", "waiting", "error", "play", "pause", "ended", "timeupdate"],
  setup(props2, {
    emit: emit2,
    attrs: attrs2,
    slots
  }) {
    const rootRef = ref(null);
    const containerRef = ref(null);
    const trigger = useCustomEvent(rootRef, emit2);
    const {
      state: userActionState
    } = useUserAction();
    const {
      $attrs: videoAttrs
    } = useAttrs({
      excludeListeners: true
    });
    const {
      t: t2
    } = useI18n();
    initI18nVideoMsgsOnce();
    const {
      videoRef,
      state: videoState,
      play,
      pause,
      seek,
      playbackRate,
      toggle,
      onDurationChange,
      onLoadedMetadata,
      onProgress,
      onWaiting,
      onVideoError,
      onPlay,
      onPause,
      onEnded,
      onTimeUpdate
    } = useVideo(props2, attrs2, trigger);
    const {
      state: danmuState,
      danmuRef,
      updateDanmu,
      toggleDanmu,
      sendDanmu
    } = useDanmu(props2, videoState);
    const {
      state: fullscreenState,
      onFullscreenChange,
      emitFullscreenChange,
      toggleFullscreen,
      requestFullScreen,
      exitFullScreen
    } = useFullscreen(trigger, containerRef, videoRef, userActionState, rootRef);
    const {
      state: gestureState,
      onTouchstart,
      onTouchend,
      onTouchmove
    } = useGesture(props2, videoRef, fullscreenState);
    const {
      state: controlsState,
      progressRef,
      ballRef,
      clickProgress,
      toggleControls
    } = useControls(props2, videoState, seek);
    useContext(play, pause, seek, sendDanmu, playbackRate, requestFullScreen, exitFullScreen);
    return () => {
      return createVNode("uni-video", {
        "ref": rootRef,
        "id": props2.id
      }, [createVNode("div", {
        "ref": containerRef,
        "class": "uni-video-container",
        "onTouchstart": onTouchstart,
        "onTouchend": onTouchend,
        "onTouchmove": onTouchmove,
        "onFullscreenchange": withModifiers(onFullscreenChange, ["stop"]),
        "onWebkitfullscreenchange": withModifiers(($event) => onFullscreenChange($event, true), ["stop"])
      }, [createVNode("video", mergeProps({
        "ref": videoRef,
        "style": {
          "object-fit": props2.objectFit
        },
        "muted": !!props2.muted,
        "loop": !!props2.loop,
        "src": videoState.src,
        "poster": props2.poster,
        "autoplay": !!props2.autoplay
      }, videoAttrs.value, {
        "class": "uni-video-video",
        "webkit-playsinline": true,
        "playsinline": true,
        "onClick": toggleControls,
        "onDurationchange": onDurationChange,
        "onLoadedmetadata": onLoadedMetadata,
        "onProgress": onProgress,
        "onWaiting": onWaiting,
        "onError": onVideoError,
        "onPlay": onPlay,
        "onPause": onPause,
        "onEnded": onEnded,
        "onTimeupdate": (event) => {
          onTimeUpdate(event);
          updateDanmu(event);
        },
        "onWebkitbeginfullscreen": () => emitFullscreenChange(true),
        "onX5videoenterfullscreen": () => emitFullscreenChange(true),
        "onWebkitendfullscreen": () => emitFullscreenChange(false),
        "onX5videoexitfullscreen": () => emitFullscreenChange(false)
      }), null, 16, ["muted", "loop", "src", "poster", "autoplay", "webkit-playsinline", "playsinline", "onClick", "onDurationchange", "onLoadedmetadata", "onProgress", "onWaiting", "onError", "onPlay", "onPause", "onEnded", "onTimeupdate", "onWebkitbeginfullscreen", "onX5videoenterfullscreen", "onWebkitendfullscreen", "onX5videoexitfullscreen"]), withDirectives(createVNode("div", {
        "class": "uni-video-bar uni-video-bar-full",
        "onClick": withModifiers(() => {
        }, ["stop"])
      }, [createVNode("div", {
        "class": "uni-video-controls"
      }, [withDirectives(createVNode("div", {
        "class": {
          "uni-video-control-button": true,
          "uni-video-control-button-play": !videoState.playing,
          "uni-video-control-button-pause": videoState.playing
        },
        "onClick": withModifiers(toggle, ["stop"])
      }, null, 10, ["onClick"]), [[vShow, props2.showPlayBtn]]), withDirectives(createVNode("div", {
        "class": "uni-video-current-time"
      }, [formatTime(videoState.currentTime)], 512), [[vShow, props2.showProgress]]), withDirectives(createVNode("div", {
        "ref": progressRef,
        "class": "uni-video-progress-container",
        "onClick": withModifiers(clickProgress, ["stop"])
      }, [createVNode("div", {
        "class": "uni-video-progress"
      }, [createVNode("div", {
        "style": {
          width: videoState.buffered + "%"
        },
        "class": "uni-video-progress-buffered"
      }, null, 4), createVNode("div", {
        "ref": ballRef,
        "style": {
          left: videoState.progress + "%"
        },
        "class": "uni-video-ball"
      }, [createVNode("div", {
        "class": "uni-video-inner"
      }, null)], 4)])], 8, ["onClick"]), [[vShow, props2.showProgress]]), withDirectives(createVNode("div", {
        "class": "uni-video-duration"
      }, [formatTime(Number(props2.duration) || videoState.duration)], 512), [[vShow, props2.showProgress]])]), withDirectives(createVNode("div", {
        "class": {
          "uni-video-danmu-button": true,
          "uni-video-danmu-button-active": danmuState.enable
        },
        "onClick": withModifiers(toggleDanmu, ["stop"])
      }, [t2("uni.video.danmu")], 10, ["onClick"]), [[vShow, props2.danmuBtn]]), withDirectives(createVNode("div", {
        "class": {
          "uni-video-fullscreen": true,
          "uni-video-type-fullscreen": fullscreenState.fullscreen
        },
        "onClick": withModifiers(() => toggleFullscreen(!fullscreenState.fullscreen), ["stop"])
      }, null, 10, ["onClick"]), [[vShow, props2.showFullscreenBtn]])], 8, ["onClick"]), [[vShow, controlsState.controlsShow]]), withDirectives(createVNode("div", {
        "ref": danmuRef,
        "style": "z-index: 0;",
        "class": "uni-video-danmu"
      }, null, 512), [[vShow, videoState.start && danmuState.enable]]), controlsState.centerPlayBtnShow && createVNode("div", {
        "class": "uni-video-cover",
        "onClick": withModifiers(() => {
        }, ["stop"])
      }, [createVNode("div", {
        "class": "uni-video-cover-play-button",
        "onClick": withModifiers(play, ["stop"])
      }, null, 8, ["onClick"]), createVNode("p", {
        "class": "uni-video-cover-duration"
      }, [formatTime(Number(props2.duration) || videoState.duration)])], 8, ["onClick"]), createVNode("div", {
        "class": {
          "uni-video-toast": true,
          "uni-video-toast-volume": gestureState.gestureType === "volume"
        }
      }, [createVNode("div", {
        "class": "uni-video-toast-title"
      }, [t2("uni.video.volume")]), createVNode("svg", {
        "class": "uni-video-toast-icon",
        "width": "200px",
        "height": "200px",
        "viewBox": "0 0 1024 1024",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [createVNode("path", {
        "d": "M475.400704 201.19552l0 621.674496q0 14.856192-10.856448 25.71264t-25.71264 10.856448-25.71264-10.856448l-190.273536-190.273536-149.704704 0q-14.856192 0-25.71264-10.856448t-10.856448-25.71264l0-219.414528q0-14.856192 10.856448-25.71264t25.71264-10.856448l149.704704 0 190.273536-190.273536q10.856448-10.856448 25.71264-10.856448t25.71264 10.856448 10.856448 25.71264zm219.414528 310.837248q0 43.425792-24.28416 80.851968t-64.2816 53.425152q-5.71392 2.85696-14.2848 2.85696-14.856192 0-25.71264-10.570752t-10.856448-25.998336q0-11.999232 6.856704-20.284416t16.570368-14.2848 19.427328-13.142016 16.570368-20.284416 6.856704-32.569344-6.856704-32.569344-16.570368-20.284416-19.427328-13.142016-16.570368-14.2848-6.856704-20.284416q0-15.427584 10.856448-25.998336t25.71264-10.570752q8.57088 0 14.2848 2.85696 39.99744 15.427584 64.2816 53.139456t24.28416 81.137664zm146.276352 0q0 87.422976-48.56832 161.41824t-128.5632 107.707392q-7.428096 2.85696-14.2848 2.85696-15.427584 0-26.284032-10.856448t-10.856448-25.71264q0-22.284288 22.284288-33.712128 31.997952-16.570368 43.425792-25.141248 42.283008-30.855168 65.995776-77.423616t23.712768-99.136512-23.712768-99.136512-65.995776-77.423616q-11.42784-8.57088-43.425792-25.141248-22.284288-11.42784-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 79.99488 33.712128 128.5632 107.707392t48.56832 161.41824zm146.276352 0q0 131.42016-72.566784 241.41312t-193.130496 161.989632q-7.428096 2.85696-14.856192 2.85696-14.856192 0-25.71264-10.856448t-10.856448-25.71264q0-20.570112 22.284288-33.712128 3.999744-2.285568 12.85632-5.999616t12.85632-5.999616q26.284032-14.2848 46.854144-29.140992 70.281216-51.996672 109.707264-129.705984t39.426048-165.132288-39.426048-165.132288-109.707264-129.705984q-20.570112-14.856192-46.854144-29.140992-3.999744-2.285568-12.85632-5.999616t-12.85632-5.999616q-22.284288-13.142016-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 120.563712 51.996672 193.130496 161.989632t72.566784 241.41312z"
      }, null)]), createVNode("div", {
        "class": "uni-video-toast-value"
      }, [createVNode("div", {
        "style": {
          width: gestureState.volumeNew * 100 + "%"
        },
        "class": "uni-video-toast-value-content"
      }, [createVNode("div", {
        "class": "uni-video-toast-volume-grids"
      }, [renderList(10, () => createVNode("div", {
        "class": "uni-video-toast-volume-grids-item"
      }, null))])], 4)])], 2), createVNode("div", {
        "class": {
          "uni-video-toast": true,
          "uni-video-toast-progress": gestureState.gestureType === "progress"
        }
      }, [createVNode("div", {
        "class": "uni-video-toast-title"
      }, [formatTime(gestureState.currentTimeNew), " / ", formatTime(videoState.duration)])], 2), createVNode("div", {
        "class": "uni-video-slots"
      }, [slots.default && slots.default()])], 40, ["onTouchstart", "onTouchend", "onTouchmove", "onFullscreenchange", "onWebkitfullscreenchange"])], 8, ["id"]);
    };
  }
});
let index$b = 0;
function getJSONP(url, options, success, error) {
  var js = document.createElement("script");
  var callbackKey = options.callback || "callback";
  var callbackName = "__uni_jsonp_callback_" + index$b++;
  var timeout = options.timeout || 3e4;
  var timing;
  function end() {
    clearTimeout(timing);
    delete window[callbackName];
    js.remove();
  }
  window[callbackName] = (res) => {
    if (isFunction(success)) {
      success(res);
    }
    end();
  };
  js.onerror = () => {
    if (isFunction(error)) {
      error();
    }
    end();
  };
  timing = setTimeout(function() {
    if (isFunction(error)) {
      error();
    }
    end();
  }, timeout);
  js.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + callbackKey + "=" + callbackName;
  document.body.appendChild(js);
}
const ICON_PATH_LOCTAION = "M13.3334375 16 q0.033125 1.1334375 0.783125 1.8834375 q0.75 0.75 1.8834375 0.75 q1.1334375 0 1.8834375 -0.75 q0.75 -0.75 0.75 -1.8834375 q0 -1.1334375 -0.75 -1.8834375 q-0.75 -0.75 -1.8834375 -0.75 q-1.1334375 0 -1.8834375 0.75 q-0.75 0.75 -0.783125 1.8834375 ZM30.9334375 14.9334375 l-1.1334375 0 q-0.5 -5.2 -4.0165625 -8.716875 q-3.516875 -3.5165625 -8.716875 -4.0165625 l0 -1.1334375 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 l0 1.1334375 q-5.2 0.5 -8.716875 4.0165625 q-3.5165625 3.516875 -4.0165625 8.716875 l-1.1334375 0 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 l1.1334375 0 q0.5 5.2 4.0165625 8.716875 q3.516875 3.5165625 8.716875 4.0165625 l0 1.1334375 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 l0 -1.1334375 q5.2 -0.5 8.716875 -4.0165625 q3.5165625 -3.516875 4.0165625 -8.716875 l1.1334375 0 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 ZM17.0665625 27.6665625 l0 -2.0665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 l0 2.0665625 q-4.3 -0.4665625 -7.216875 -3.383125 q-2.916875 -2.916875 -3.3834375 -7.216875 l2.0665625 0 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 l-2.0665625 0 q0.4665625 -4.3 3.3834375 -7.216875 q2.9165625 -2.916875 7.216875 -3.3834375 l0 2.0665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 l0 -2.0665625 q4.3 0.4665625 7.216875 3.3834375 q2.9165625 2.9165625 3.383125 7.216875 l-2.0665625 0 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 l2.0665625 0 q-0.4665625 4.3 -3.383125 7.216875 q-2.916875 2.9165625 -7.216875 3.383125 Z";
const ICON_PATH_ORIGIN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAC01BMVEUAAAAAef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef96quGStdqStdpbnujMzMzCyM7Gyc7Ky83MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwAef8GfP0yjfNWnOp0qOKKsdyYt9mju9aZt9mMstx1qeJYnekyjvIIfP0qivVmouaWttnMzMyat9lppOUujPQKffxhoOfNzc3Y2Njh4eHp6enu7u7y8vL19fXv7+/i4uLZ2dnOzs6auNgOf/sKff15quHR0dHx8fH9/f3////j4+N6quFdn+iywdPb29vw8PD+/v7c3NyywtLa2tr29vbS0tLd3d38/Pzf39/o6Ojc7f+q0v+HwP9rsf9dqv9Hnv9Vpv/q6urj8P+Vx/9Am/8Pgf8Iff/z8/OAvP95uf/n5+c5l//V6f+52v+y1//7+/vt7e0rkP/09PTQ0NDq9P8Whf+cy//W1tbe3t7A3v/m5ubs7OxOov/r6+vk5OQiaPjKAAAAknRSTlMACBZ9oB71/jiqywJBZATT6hBukRXv+zDCAVrkDIf4JbQsTb7eVeJLbwfa8Rh4G/OlPS/6/kxQ9/xdmZudoJxNVhng7B6wtWdzAtQOipcF1329wS44doK/BAkyP1pvgZOsrbnGXArAg34G2IsD1eMRe7bi7k5YnqFT9V0csyPedQyYD3p/Fje+hDpskq/MwpRBC6yKp2MAAAQdSURBVHja7Zn1exMxGIAPHbrhDsPdneHuNtzd3d3dIbjLh93o2o4i7TpgG1Jk0g0mMNwd/gTa5rq129reHnK5e/bk/TFNk/dJ7r5894XjGAwGg8GgTZasCpDIll1+hxw5vXLJLpEboTx5ZXbIhyzkl9fB28cqUaCgrBKFkI3CcjoUKYolihWXUSI7EihRUjaHXF52CVRKLoe8eZIdUOkyMknkRw6UlcehYAFHiXK+skgURk6Ul8OhQjFnCVRRBolKqRxQ5SzUHaqgNGSj7VCmalqJnDkoS5RF6ZCbroNvufQkUD6qEuXTdUA+3hQdqiEXVKfnUKOmK4latalJ1EEuoZZ6162HJ9x/4OChw0eOHj12/MTJU6dxG7XUu751tjNnz4ET5y9ctLZTSr0beKFLl89bpuUDrqgC1RqNWqsKuqqzNFw7e51S6u3tc+OmZUJ9kCHY6ECwOkRvab51iUrqXej2HYDQsHBjWgx3Ae7dppB6N2wEcF9jdMGDUIDGTaR2aNoM9FqjG7QmaN5CWgc/gIePjG559BigpZQOrYB/4jBfRGRUtDkmJjY6KjLCofkpD62lc2gDfMpWPIuLdwyV8XEpHgaddBZ+wBuSFcwJqSN2ovmZ/dfnOvCTxqGtwzq8SEjv4EhISn48eWgnhUP7DvDSvgzxrs6vV6+FLiro2EkCic4QKkzwJsH1KYreCp0eQhfyDl1B/w4P/xa5JVJ4U03QjbRD9x7wXlgH5IE3wmMBHXoSlugFAcI6f/AkkSi8q6HQm6xDn77wEQ8djTwSj3tqAMguRTe4ikeOQyJ4YV+KfkQl+oNW5GbY4gWOWgbwJ+kwAD6Fi90MK2ZsrIeBBCUGwRXbqJ+/iJMQliIEBhOU6AJhtlG/IpHE2bqrYQg5h6HA4yQiRqwEfkGCdTCMmMRw+IbPDCQaHCsCYAQxiZHw3TbmD/ESOHgHwShiEqPhp/gggYkSztIxxCRawy/bmEniJaJtfwiEscQkxkFgRqJESqQwwHhiEuMBp3Vm8RK/cZoHEzKXhCK2QxEPpiJe0YlKCFaKCNv/cYBNUsBRPlkJSc0U+dM7E9H0ThGJbgZT/iR7yj+VqMS06Qr4+OFm2JdCxIa8lugzkJs5K6MfxAaYPUcBpYG5khZJEkUUSb7DPCnKRfPBXj6M8FwuegoLpCgXcQszVjhbJFUJUee2hBhLoYTIcYtB57KY+opSMdVqwatSlZVj05aV//CwJLMX2DluaUcwhXm4ali2XOoLjxUrPV26zFtF4f5p0Gp310+z13BUWNvbehEXona6iAtX/zVZmtfN4WixfsNky4S6gCCVVq3RPLdfSfpv3MRRZfPoLc6Xs/5bt3EyMGzE9h07/Xft2t15z6i9+zgGg8FgMBgMBoPBYDAYDAYj8/APG67Rie8pUDsAAAAASUVORK5CYII=";
const ICON_PATH_TARGET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACcCAMAAAC3Fl5oAAAB3VBMVEVMaXH/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/EhL/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/Dw//AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/GRn/NTX/Dw//Fhb/AAD/AAD/AAD/GRn/GRn/Y2P/AAD/AAD/ExP/Ghr/AAD/AAD/MzP/GRn/AAD/Hh7/AAD/RUX/AAD/AAD/AAD/AAD/AAD/AAD/Dg7/AAD/HR3/Dw//FRX/SUn/AAD/////kJD/DQ3/Zmb/+/v/wMD/mJj/6en/vb3/1NT//Pz/ODj/+fn/3Nz/nJz/j4//9/f/7e3/9vb/7Oz/2Nj/x8f/Ozv/+Pj/3d3/nZ3/2dn//f3/6Oj/2tr/v7//09P/vr7/mZn/l5cdSvP3AAAAe3RSTlMAAhLiZgTb/vztB/JMRhlp6lQW86g8mQ4KFPs3UCH5U8huwlesWtTYGI7RsdVeJGfTW5rxnutLsvXWF8vQNdo6qQbuz7D4hgVIx2xtw8GC1TtZaIw0i84P98tU0/fsj7PKaAgiZZxeVfo8Z52eg1P0nESrENnjXVPUgw/uuSmDAAADsUlEQVR42u3aZ3cTRxgF4GtbYleSLdnGcsENG2ODjbExEHrvhAQCIb1Bem+QdkeuuFMNBBJIfmuOckzZI8/srHYmH3Lm+QNXK632LTvQ03Tu/IWeU/tTGTKT2n+q58L5c00wpXJd47DHEt5w47pKxLbhdLdPKb/7dBYxVLxw1GcI/2h1BcpzKNFHLX2JQ4gumaiitqpEEhEdOMJI9h5AFC3feYzI+7IF2tpSLEOqDXpObPRYFm/jCWho/4Ble7MdoT7fzhhq9yHEz28wltU1UPrJZ0wd66HwicfYvEFIfePTAP8tSLTupBHvtGJFH9bSkNrNWEHzERrT34xSH9Ogr1CijkbVAUH1KRqVqkdQAw07iIAaGlcTqI+/0LjeJJ5J0IIEnkpXMdzs4sTtW9dnZq7fuj2xOMtwVWk88RHDjBYejYvnjD8qjOpfQsUqhvj7oSjxcJIhVj3pyKqpNjYvVjQ/RrXq5YABKi3MCYm5BSrtWO5v11DlmlC4RpU1WRS9SJU7QukOVbpQ9JLu549+Dd0AUOlTbkGEuk85vxLAK5QbuytC3R2j3HoAjZSbFxrmKTcCoJdSk0LLJKV6gSaPMqNTQsvUKGW8JrxKqUWhaZFSeWyh1LTQNE2pHF6mzOy40DQ+S5mLimJcENoKlOnBWsr8KbRNUGYt5LXgd6HtD3lNQIoyN4S2G5RJIUOZm0LbTcqsBqVmhLYZSlkPsP4VWf+Rrd+m1v9o9h8Vv5p42C1R5qL1x7WRglOgVN52yfwNOBu76P+lLPoYidu23KPciIHGa07ZeIW1jvcNtI7q5vexCPGYCmf+m/Y9a3sAwQ5bI9T7ukPgPcn9GToEao+xk1OixJT+GIsvNAbx6eAgPq0xiF+KtkpYKhRXCQ8eFFcJhSWGu3rZ8jJkCM8kz9K4TUnrC6mAgzTsB9tLwQ2W15qfosQ2GrQNpZr7aczbzVjBZsvLcaC1g0bsbIVEnU8DOr6H1KDH2LwtUBi0/JII6Dxm9zUXkH+XMWzfh1Dte1i2Pe3QkC77Zel7aehpO8wyHG6Dtt0NjKxhN6I4uSli/TqJiJJDUQ4NDCURXTrXRy1XcumyD24M+AzhD1RXIIZsl/LoyZmurJHDM7s8lvB2FQ/PmPJ6PseAXP5HGMYAAC7ABbgAF+ACXIALcAEuwAW4ABfgAlyAC3ABLsAFuID/d8Cx4NEt8/byOf0wLnis8zjMq9/Kp7bWw4JOj8u8TlhRl+G/Mp2wpOX48GffvvZ1CyL4B53LAS6zb08EAAAAAElFTkSuQmCC";
var MapType = /* @__PURE__ */ ((MapType2) => {
  MapType2["QQ"] = "qq";
  MapType2["GOOGLE"] = "google";
  MapType2["AMAP"] = "AMap";
  MapType2["UNKNOWN"] = "";
  return MapType2;
})(MapType || {});
function getMapInfo() {
  if (__uniConfig.qqMapKey) {
    return {
      type: "qq",
      key: __uniConfig.qqMapKey
    };
  }
  if (__uniConfig.googleMapKey) {
    return {
      type: "google",
      key: __uniConfig.googleMapKey
    };
  }
  if (__uniConfig.aMapKey) {
    return {
      type: "AMap",
      key: __uniConfig.aMapKey,
      securityJsCode: __uniConfig.aMapSecurityJsCode,
      serviceHost: __uniConfig.aMapServiceHost
    };
  }
  return {
    type: "",
    key: ""
  };
}
let IS_AMAP = false;
let hasGetIsAMap = false;
const getIsAMap = () => {
  if (hasGetIsAMap) {
    return IS_AMAP;
  } else {
    hasGetIsAMap = true;
    return IS_AMAP = getMapInfo().type === "AMap";
  }
};
function translateCoordinateSystem(type, coords, skip) {
  const mapInfo = getMapInfo();
  const wgs84Map = [
    "google"
    /* GOOGLE */
  ];
  if (type && type.toUpperCase() === "WGS84" || wgs84Map.includes(mapInfo.type) || skip) {
    return Promise.resolve(coords);
  }
  if (mapInfo.type === "qq") {
    return new Promise((resolve) => {
      getJSONP(
        `https://apis.map.qq.com/jsapi?qt=translate&type=1&points=${coords.longitude},${coords.latitude}&key=${mapInfo.key}&output=jsonp&pf=jsapi&ref=jsapi`,
        {
          callback: "cb"
        },
        (res) => {
          if ("detail" in res && "points" in res.detail && res.detail.points.length) {
            const { lng, lat } = res.detail.points[0];
            resolve({
              longitude: lng,
              latitude: lat,
              altitude: coords.altitude,
              accuracy: coords.accuracy,
              altitudeAccuracy: coords.altitudeAccuracy,
              heading: coords.heading,
              speed: coords.speed
            });
          } else {
            resolve(coords);
          }
        },
        () => resolve(coords)
      );
    });
  }
  if (mapInfo.type === "AMap") {
    return new Promise((resolve) => {
      loadMaps([], () => {
        window.AMap.convertFrom(
          [coords.longitude, coords.latitude],
          "gps",
          (_, res) => {
            if (res.info === "ok" && res.locations.length) {
              const { lat, lng } = res.locations[0];
              resolve({
                longitude: lng,
                latitude: lat,
                altitude: coords.altitude,
                accuracy: coords.accuracy,
                altitudeAccuracy: coords.altitudeAccuracy,
                heading: coords.heading,
                speed: coords.speed
              });
            } else {
              resolve(coords);
            }
          }
        );
      });
    });
  }
  return Promise.reject(new Error("translate coordinate system faild"));
}
function createCallout(maps2) {
  function onAdd() {
    const div = this.div;
    const panes = this.getPanes();
    panes.floatPane.appendChild(div);
  }
  function onRemove() {
    const parentNode = this.div.parentNode;
    if (parentNode) {
      parentNode.removeChild(this.div);
    }
  }
  function createAMapText() {
    const option = this.option;
    this.Text = new maps2.Text({
      text: option.content,
      anchor: "bottom-center",
      // 设置文本标记锚点
      offset: new maps2.Pixel(0, option.offsetY - 16),
      style: {
        padding: (option.padding || 8) + "px",
        "line-height": (option.fontSize || 14) + "px",
        "border-radius": (option.borderRadius || 0) + "px",
        "border-color": `${option.bgColor || "#fff"} transparent transparent`,
        "background-color": option.bgColor || "#fff",
        "box-shadow": "0 2px 6px 0 rgba(114, 124, 245, .5)",
        "text-align": "center",
        "font-size": (option.fontSize || 14) + "px",
        color: option.color || "#000"
      },
      position: option.position
    });
    const event = maps2.event || maps2.Event;
    event.addListener(this.Text, "click", () => {
      this.callback();
    });
    this.Text.setMap(option.map);
  }
  function removeAMapText() {
    if (this.Text) {
      this.option.map.remove(this.Text);
    }
  }
  class Callout {
    constructor(option = {}, callback) {
      this.createAMapText = createAMapText;
      this.removeAMapText = removeAMapText;
      this.onAdd = onAdd;
      this.construct = onAdd;
      this.onRemove = onRemove;
      this.destroy = onRemove;
      this.option = option || {};
      const visible = this.visible = this.alwaysVisible = option.display === "ALWAYS";
      if (getIsAMap()) {
        this.callback = callback;
        if (this.visible) {
          this.createAMapText();
        }
      } else {
        const map = option.map;
        this.position = option.position;
        this.index = 1;
        const div = this.div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "absolute";
        divStyle.whiteSpace = "nowrap";
        divStyle.transform = "translateX(-50%) translateY(-100%)";
        divStyle.zIndex = "1";
        divStyle.boxShadow = option.boxShadow || "none";
        divStyle.display = visible ? "block" : "none";
        const triangle = this.triangle = document.createElement("div");
        triangle.setAttribute(
          "style",
          "position: absolute;white-space: nowrap;border-width: 4px;border-style: solid;border-color: #fff transparent transparent;border-image: initial;font-size: 12px;padding: 0px;background-color: transparent;width: 0px;height: 0px;transform: translate(-50%, 100%);left: 50%;bottom: 0;"
        );
        this.setStyle(option);
        div.appendChild(triangle);
        if (map) {
          this.setMap(map);
        }
      }
    }
    set onclick(callback) {
      this.div.onclick = callback;
    }
    get onclick() {
      return this.div.onclick;
    }
    setOption(option) {
      this.option = option;
      if (option.display === "ALWAYS") {
        this.alwaysVisible = this.visible = true;
      } else {
        this.alwaysVisible = false;
      }
      if (getIsAMap()) {
        if (this.visible) {
          this.createAMapText();
        }
      } else {
        this.setPosition(option.position);
        this.setStyle(option);
      }
    }
    setStyle(option) {
      const div = this.div;
      const divStyle = div.style;
      div.innerText = option.content || "";
      divStyle.lineHeight = (option.fontSize || 14) + "px";
      divStyle.fontSize = (option.fontSize || 14) + "px";
      divStyle.padding = (option.padding || 8) + "px";
      divStyle.color = option.color || "#000";
      divStyle.borderRadius = (option.borderRadius || 0) + "px";
      divStyle.backgroundColor = option.bgColor || "#fff";
      divStyle.marginTop = "-" + ((option.top || 0) + 5) + "px";
      this.triangle.style.borderColor = `${option.bgColor || "#fff"} transparent transparent`;
    }
    setPosition(position) {
      this.position = position;
      this.draw();
    }
    draw() {
      const overlayProjection = this.getProjection();
      if (!this.position || !this.div || !overlayProjection) {
        return;
      }
      const pixel = overlayProjection.fromLatLngToDivPixel(
        this.position
      );
      const divStyle = this.div.style;
      divStyle.left = pixel.x + "px";
      divStyle.top = pixel.y + "px";
    }
    changed() {
      const divStyle = this.div.style;
      divStyle.display = this.visible ? "block" : "none";
    }
  }
  if (!getIsAMap()) {
    const overlay = new (maps2.OverlayView || maps2.Overlay)();
    Callout.prototype.setMap = overlay.setMap;
    Callout.prototype.getMap = overlay.getMap;
    Callout.prototype.getPanes = overlay.getPanes;
    Callout.prototype.getProjection = overlay.getProjection;
    Callout.prototype.map_changed = overlay.map_changed;
    Callout.prototype.set = overlay.set;
    Callout.prototype.get = overlay.get;
    Callout.prototype.setOptions = overlay.setValues;
    Callout.prototype.bindTo = overlay.bindTo;
    Callout.prototype.bindsTo = overlay.bindsTo;
    Callout.prototype.notify = overlay.notify;
    Callout.prototype.setValues = overlay.setValues;
    Callout.prototype.unbind = overlay.unbind;
    Callout.prototype.unbindAll = overlay.unbindAll;
    Callout.prototype.addListener = overlay.addListener;
  }
  return Callout;
}
let maps;
const callbacksMap = {};
const GOOGLE_MAP_CALLBACKNAME = "__map_callback__";
function loadMaps(libraries, callback) {
  const mapInfo = getMapInfo();
  if (!mapInfo.key) {
    console.error("Map key not configured.");
    return;
  }
  const callbacks2 = callbacksMap[mapInfo.type] = callbacksMap[mapInfo.type] || [];
  if (maps) {
    callback(maps);
  } else if (window[mapInfo.type] && window[mapInfo.type].maps) {
    maps = getIsAMap() ? window[mapInfo.type] : window[mapInfo.type].maps;
    maps.Callout = maps.Callout || createCallout(maps);
    callback(maps);
  } else if (callbacks2.length) {
    callbacks2.push(callback);
  } else {
    callbacks2.push(callback);
    const globalExt = window;
    const callbackName = GOOGLE_MAP_CALLBACKNAME + mapInfo.type;
    globalExt[callbackName] = function() {
      delete globalExt[callbackName];
      maps = getIsAMap() ? window[mapInfo.type] : window[mapInfo.type].maps;
      maps.Callout = createCallout(maps);
      callbacks2.forEach((callback2) => callback2(maps));
      callbacks2.length = 0;
    };
    if (getIsAMap()) {
      handleAMapSecurityPolicy(mapInfo);
    }
    const script = document.createElement("script");
    let src = getScriptBaseUrl(mapInfo.type);
    if (mapInfo.type === MapType.QQ) {
      libraries.push("geometry");
    }
    if (libraries.length) {
      src += `libraries=${libraries.join("%2C")}&`;
    }
    script.src = `${src}key=${mapInfo.key}&callback=${callbackName}`;
    script.onerror = function() {
      console.error("Map load failed.");
    };
    document.body.appendChild(script);
  }
}
const getScriptBaseUrl = (mapType) => {
  const urlMap = {
    qq: "https://map.qq.com/api/js?v=2.exp&",
    google: "https://maps.googleapis.com/maps/api/js?",
    AMap: "https://webapi.amap.com/maps?v=2.0&"
  };
  return urlMap[mapType];
};
function handleAMapSecurityPolicy(mapInfo) {
  window._AMapSecurityConfig = {
    securityJsCode: mapInfo.securityJsCode || "",
    serviceHost: mapInfo.serviceHost || ""
  };
}
const props$e = {
  id: {
    type: [Number, String],
    default: ""
  },
  latitude: {
    type: [Number, String],
    require: true
  },
  longitude: {
    type: [Number, String],
    require: true
  },
  title: {
    type: String,
    default: ""
  },
  iconPath: {
    type: String,
    require: true
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  alpha: {
    type: [Number, String],
    default: 1
  },
  width: {
    type: [Number, String],
    default: ""
  },
  height: {
    type: [Number, String],
    default: ""
  },
  callout: {
    type: Object,
    default: null
  },
  label: {
    type: Object,
    default: null
  },
  anchor: {
    type: Object,
    default: null
  },
  clusterId: {
    type: [Number, String],
    default: ""
  },
  customCallout: {
    type: Object,
    default: null
  },
  ariaLabel: {
    type: String,
    default: ""
  }
};
function useMarkerLabelStyle(id2) {
  const className = "uni-map-marker-label-" + id2;
  const styleEl = document.createElement("style");
  styleEl.id = className;
  document.head.appendChild(styleEl);
  onUnmounted(() => {
    styleEl.remove();
  });
  return function updateMarkerLabelStyle(style) {
    const newStyle = Object.assign({}, style, {
      position: "absolute",
      top: "70px",
      borderStyle: "solid"
    });
    const div = document.createElement("div");
    Object.keys(newStyle).forEach((key) => {
      div.style[key] = newStyle[key] || "";
    });
    styleEl.innerText = `.${className}{${div.getAttribute("style")}}`;
    return className;
  };
}
const MapMarker = /* @__PURE__ */ defineSystemComponent({
  name: "MapMarker",
  props: props$e,
  setup(props2) {
    const id2 = String(!isNaN(Number(props2.id)) ? props2.id : "");
    const onMapReady = inject("onMapReady");
    const updateMarkerLabelStyle = useMarkerLabelStyle(id2);
    let marker;
    function removeMarker() {
      if (marker) {
        if (marker.label && "setMap" in marker.label) {
          marker.label.setMap(null);
        }
        if (marker.callout) {
          removeMarkerCallout(marker.callout);
        }
        marker.setMap(null);
      }
    }
    function removeMarkerCallout(callout) {
      if (getIsAMap()) {
        callout.removeAMapText();
      } else {
        callout.setMap(null);
      }
    }
    onMapReady((map, maps2, trigger) => {
      function updateMarker(option) {
        const title = option.title;
        const position = getIsAMap() ? new maps2.LngLat(option.longitude, option.latitude) : new maps2.LatLng(option.latitude, option.longitude);
        const img = new Image();
        let imgHeight = 0;
        img.onload = () => {
          const anchor = option.anchor || {};
          let icon;
          let w;
          let h2;
          let top;
          let x = typeof anchor.x === "number" ? anchor.x : 0.5;
          let y = typeof anchor.y === "number" ? anchor.y : 1;
          if (option.iconPath && (option.width || option.height)) {
            w = option.width || img.width / img.height * option.height;
            h2 = option.height || img.height / img.width * option.width;
          } else {
            w = img.width / 2;
            h2 = img.height / 2;
          }
          imgHeight = h2;
          top = h2 - (h2 - y * h2);
          if ("MarkerImage" in maps2) {
            icon = new maps2.MarkerImage(img.src, null, null, new maps2.Point(x * w, y * h2), new maps2.Size(w, h2));
          } else if ("Icon" in maps2) {
            icon = new maps2.Icon({
              image: img.src,
              size: new maps2.Size(w, h2),
              imageSize: new maps2.Size(w, h2),
              imageOffset: new maps2.Pixel(x * w, y * h2)
            });
          } else {
            icon = {
              url: img.src,
              anchor: new maps2.Point(x, y),
              size: new maps2.Size(w, h2)
            };
          }
          marker.setPosition(position);
          marker.setIcon(icon);
          if ("setRotation" in marker) {
            marker.setRotation(option.rotate || 0);
          }
          const labelOpt = option.label || {};
          if ("label" in marker) {
            marker.label.setMap(null);
            delete marker.label;
          }
          let label;
          if (labelOpt.content) {
            const labelStyle = {
              borderColor: labelOpt.borderColor,
              borderWidth: (Number(labelOpt.borderWidth) || 0) + "px",
              padding: (Number(labelOpt.padding) || 0) + "px",
              borderRadius: (Number(labelOpt.borderRadius) || 0) + "px",
              backgroundColor: labelOpt.bgColor,
              color: labelOpt.color,
              fontSize: (labelOpt.fontSize || 14) + "px",
              lineHeight: (labelOpt.fontSize || 14) + "px",
              marginLeft: (Number(labelOpt.anchorX || labelOpt.x) || 0) + "px",
              marginTop: (Number(labelOpt.anchorY || labelOpt.y) || 0) + "px"
            };
            if ("Label" in maps2) {
              label = new maps2.Label({
                position,
                map,
                clickable: false,
                content: labelOpt.content,
                style: labelStyle
              });
              marker.label = label;
            } else if ("setLabel" in marker) {
              if (getIsAMap()) {
                const content = `<div style="
                  margin-left:${labelStyle.marginLeft};
                  margin-top:${labelStyle.marginTop};
                  padding:${labelStyle.padding};
                  background-color:${labelStyle.backgroundColor};
                  border-radius:${labelStyle.borderRadius};
                  line-height:${labelStyle.lineHeight};
                  color:${labelStyle.color};
                  font-size:${labelStyle.fontSize};

                  ">
                  ${labelOpt.content}
                <div>`;
                marker.setLabel({
                  content,
                  direction: "bottom-right"
                });
              } else {
                const className = updateMarkerLabelStyle(labelStyle);
                marker.setLabel({
                  text: labelOpt.content,
                  color: labelStyle.color,
                  fontSize: labelStyle.fontSize,
                  className
                });
              }
            }
          }
          const calloutOpt = option.callout || {};
          let callout = marker.callout;
          let calloutStyle;
          if (calloutOpt.content || title) {
            if (getIsAMap() && calloutOpt.content) {
              calloutOpt.content = calloutOpt.content.replaceAll("\n", "<br/>");
            }
            const boxShadow = "0px 0px 3px 1px rgba(0,0,0,0.5)";
            let offsetY = -imgHeight / 2;
            if (option.width || option.height) {
              offsetY += 14 - imgHeight / 2;
            }
            calloutStyle = calloutOpt.content ? {
              position,
              map,
              top,
              // handle AMap callout offset
              offsetY,
              content: calloutOpt.content,
              color: calloutOpt.color,
              fontSize: calloutOpt.fontSize,
              borderRadius: calloutOpt.borderRadius,
              bgColor: calloutOpt.bgColor,
              padding: calloutOpt.padding,
              boxShadow: calloutOpt.boxShadow || boxShadow,
              display: calloutOpt.display
            } : {
              position,
              map,
              top,
              // handle AMap callout offset
              offsetY,
              content: title,
              boxShadow
            };
            if (callout) {
              callout.setOption(calloutStyle);
            } else {
              if (getIsAMap()) {
                const callback = (id3) => {
                  if (id3 !== "") {
                    trigger("callouttap", {}, {
                      markerId: Number(id3)
                    });
                  }
                };
                callout = marker.callout = new maps2.Callout(calloutStyle, callback);
              } else {
                callout = marker.callout = new maps2.Callout(calloutStyle);
                callout.div.onclick = function($event) {
                  if (id2 !== "") {
                    trigger("callouttap", $event, {
                      markerId: Number(id2)
                    });
                  }
                  $event.stopPropagation();
                  $event.preventDefault();
                };
                if (getMapInfo().type === MapType.GOOGLE) {
                  callout.div.ontouchstart = function($event) {
                    $event.stopPropagation();
                  };
                  callout.div.onpointerdown = function($event) {
                    $event.stopPropagation();
                  };
                }
              }
            }
          } else {
            if (callout) {
              removeMarkerCallout(callout);
              delete marker.callout;
            }
          }
        };
        if (option.iconPath) {
          img.src = getRealPath(option.iconPath);
        } else {
          console.error("Marker.iconPath is required.");
        }
      }
      function addMarker(props3) {
        marker = new maps2.Marker({
          map,
          flat: true,
          autoRotation: false
        });
        updateMarker(props3);
        const MapsEvent = maps2.event || maps2.Event;
        MapsEvent.addListener(marker, "click", () => {
          const callout = marker.callout;
          if (callout && !callout.alwaysVisible) {
            if (getIsAMap()) {
              callout.visible = !callout.visible;
              if (callout.visible) {
                marker.callout.createAMapText();
              } else {
                marker.callout.removeAMapText();
              }
            } else {
              callout.set("visible", !callout.visible);
              if (callout.visible) {
                const div = callout.div;
                const parent = div.parentNode;
                parent.removeChild(div);
                parent.appendChild(div);
              }
            }
          }
          if (id2) {
            trigger("markertap", {}, {
              markerId: Number(id2),
              latitude: props3.latitude,
              longitude: props3.longitude
            });
          }
        });
      }
      addMarker(props2);
      watch(props2, updateMarker);
    });
    if (id2) {
      const addMapChidlContext = inject("addMapChidlContext");
      const removeMapChidlContext = inject("removeMapChidlContext");
      const context = {
        id: id2,
        translate(data) {
          onMapReady((map, maps2, trigger) => {
            const destination = data.destination;
            const duration = data.duration;
            const autoRotate = !!data.autoRotate;
            let rotate = Number(data.rotate) || 0;
            let rotation = 0;
            if ("getRotation" in marker) {
              rotation = marker.getRotation();
            }
            const a2 = marker.getPosition();
            const b = new maps2.LatLng(destination.latitude, destination.longitude);
            const distance2 = maps2.geometry.spherical.computeDistanceBetween(a2, b) / 1e3;
            const time = (typeof duration === "number" ? duration : 1e3) / (1e3 * 60 * 60);
            const speed = distance2 / time;
            const MapsEvent = maps2.event || maps2.Event;
            const movingEvent = MapsEvent.addListener(marker, "moving", (e2) => {
              const latLng = e2.latLng;
              const label = marker.label;
              if (label) {
                label.setPosition(latLng);
              }
              const callout = marker.callout;
              if (callout) {
                callout.setPosition(latLng);
              }
            });
            const event = MapsEvent.addListener(marker, "moveend", () => {
              event.remove();
              movingEvent.remove();
              marker.lastPosition = a2;
              marker.setPosition(b);
              const label = marker.label;
              if (label) {
                label.setPosition(b);
              }
              const callout = marker.callout;
              if (callout) {
                callout.setPosition(b);
              }
              const cb = data.animationEnd;
              if (isFunction(cb)) {
                cb();
              }
            });
            let lastRtate = 0;
            if (autoRotate) {
              if (marker.lastPosition) {
                lastRtate = maps2.geometry.spherical.computeHeading(marker.lastPosition, a2);
              }
              rotate = maps2.geometry.spherical.computeHeading(a2, b) - lastRtate;
            }
            if ("setRotation" in marker) {
              marker.setRotation(rotation + rotate);
            }
            if ("moveTo" in marker) {
              marker.moveTo(b, speed);
            } else {
              marker.setPosition(b);
              MapsEvent.trigger(marker, "moveend", {});
            }
          });
        }
      };
      addMapChidlContext(context);
      onUnmounted(() => removeMapChidlContext(context));
    }
    onUnmounted(removeMarker);
    return () => {
      return null;
    };
  }
});
function hexToRgba(hex) {
  if (!hex) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
  }
  let tmpHex = hex.slice(1);
  const tmpHexLen = tmpHex.length;
  if (![3, 4, 6, 8].includes(tmpHexLen)) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
  }
  if (tmpHexLen === 3 || tmpHexLen === 4) {
    tmpHex = tmpHex.replace(/(\w{1})/g, "$1$1");
  }
  let [sr, sg, sb, sa] = tmpHex.match(/(\w{2})/g);
  const r = parseInt(sr, 16), g2 = parseInt(sg, 16), b = parseInt(sb, 16);
  if (!sa) {
    return { r, g: g2, b, a: 1 };
  }
  return {
    r,
    g: g2,
    b,
    a: (`0x100${sa}` - 65536) / 255
  };
}
const props$d = {
  points: {
    type: Array,
    require: true
  },
  color: {
    type: String,
    default: "#000000"
  },
  width: {
    type: [Number, String],
    default: ""
  },
  dottedLine: {
    type: [Boolean, String],
    default: false
  },
  arrowLine: {
    type: [Boolean, String],
    default: false
  },
  arrowIconPath: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: "#000000"
  },
  borderWidth: {
    type: [Number, String],
    default: ""
  },
  colorList: {
    type: Array,
    default() {
      return [];
    }
  },
  level: {
    type: String,
    default: ""
  }
};
const MapPolyline = /* @__PURE__ */ defineSystemComponent({
  name: "MapPolyline",
  props: props$d,
  setup(props2) {
    const onMapReady = inject("onMapReady");
    let polyline;
    let polylineBorder;
    function removePolyline() {
      if (polyline) {
        polyline.setMap(null);
      }
      if (polylineBorder) {
        polylineBorder.setMap(null);
      }
    }
    onMapReady((map, maps2) => {
      function updatePolyline(option) {
        removePolyline();
        addPolyline(option);
      }
      function addPolyline(option) {
        const path = [];
        option.points.forEach((point) => {
          const pointPosition = getIsAMap() ? [point.longitude, point.latitude] : new maps2.LatLng(point.latitude, point.longitude);
          path.push(pointPosition);
        });
        const strokeWeight = Number(option.width) || 1;
        const {
          r: sr,
          g: sg,
          b: sb,
          a: sa
        } = hexToRgba(option.color);
        const {
          r: br,
          g: bg,
          b: bb,
          a: ba
        } = hexToRgba(option.borderColor);
        const polylineOptions = {
          map,
          clickable: false,
          path,
          strokeWeight,
          strokeColor: option.color || void 0,
          strokeDashStyle: option.dottedLine ? "dash" : "solid"
        };
        const borderWidth = Number(option.borderWidth) || 0;
        const polylineBorderOptions = {
          map,
          clickable: false,
          path,
          strokeWeight: strokeWeight + borderWidth * 2,
          strokeColor: option.borderColor || void 0,
          strokeDashStyle: option.dottedLine ? "dash" : "solid"
        };
        if ("Color" in maps2) {
          polylineOptions.strokeColor = new maps2.Color(sr, sg, sb, sa);
          polylineBorderOptions.strokeColor = new maps2.Color(br, bg, bb, ba);
        } else {
          polylineOptions.strokeColor = `rgb(${sr}, ${sg}, ${sb})`;
          polylineOptions.strokeOpacity = sa;
          polylineBorderOptions.strokeColor = `rgb(${br}, ${bg}, ${bb})`;
          polylineBorderOptions.strokeOpacity = ba;
        }
        if (borderWidth) {
          polylineBorder = new maps2.Polyline(polylineBorderOptions);
        }
        polyline = new maps2.Polyline(polylineOptions);
      }
      addPolyline(props2);
      watch(props2, updatePolyline);
    });
    onUnmounted(removePolyline);
    return () => {
      return null;
    };
  }
});
const props$c = {
  latitude: {
    type: [Number, String],
    require: true
  },
  longitude: {
    type: [Number, String],
    require: true
  },
  color: {
    type: String,
    default: "#000000"
  },
  fillColor: {
    type: String,
    default: "#00000000"
  },
  radius: {
    type: [Number, String],
    require: true
  },
  strokeWidth: {
    type: [Number, String],
    default: ""
  },
  level: {
    type: String,
    default: ""
  }
};
const MapCircle = /* @__PURE__ */ defineSystemComponent({
  name: "MapCircle",
  props: props$c,
  setup(props2) {
    const onMapReady = inject("onMapReady");
    let circle;
    function removeCircle() {
      if (circle) {
        circle.setMap(null);
      }
    }
    onMapReady((map, maps2) => {
      function updateCircle(option) {
        removeCircle();
        addCircle(option);
      }
      function addCircle(option) {
        const center = getIsAMap() ? [option.longitude, option.latitude] : new maps2.LatLng(option.latitude, option.longitude);
        const circleOptions = {
          map,
          center,
          clickable: false,
          radius: option.radius,
          strokeWeight: Number(option.strokeWidth) || 1,
          strokeDashStyle: "solid"
        };
        if (getIsAMap()) {
          circleOptions.strokeColor = option.color;
          circleOptions.fillColor = option.fillColor || "#000";
          circleOptions.fillOpacity = 1;
        } else {
          const {
            r: fr,
            g: fg,
            b: fb,
            a: fa
          } = hexToRgba(option.fillColor);
          const {
            r: sr,
            g: sg,
            b: sb,
            a: sa
          } = hexToRgba(option.color);
          if ("Color" in maps2) {
            circleOptions.fillColor = new maps2.Color(fr, fg, fb, fa);
            circleOptions.strokeColor = new maps2.Color(sr, sg, sb, sa);
          } else {
            circleOptions.fillColor = `rgb(${fr}, ${fg}, ${fb})`;
            circleOptions.fillOpacity = fa;
            circleOptions.strokeColor = `rgb(${sr}, ${sg}, ${sb})`;
            circleOptions.strokeOpacity = sa;
          }
        }
        circle = new maps2.Circle(circleOptions);
        if (getIsAMap()) {
          map.add(circle);
        }
      }
      addCircle(props2);
      watch(props2, updateCircle);
    });
    onUnmounted(removeCircle);
    return () => {
      return null;
    };
  }
});
const props$b = {
  id: {
    type: [Number, String],
    default: ""
  },
  position: {
    type: Object,
    required: true
  },
  iconPath: {
    type: String,
    required: true
  },
  clickable: {
    type: [Boolean, String],
    default: ""
  },
  trigger: {
    type: Function,
    required: true
  }
};
const MapControl = /* @__PURE__ */ defineSystemComponent({
  name: "MapControl",
  props: props$b,
  setup(props2) {
    const imgPath = computed(() => getRealPath(props2.iconPath));
    const positionStyle = computed(() => {
      let positionStyle2 = `top:${props2.position.top || 0}px;left:${props2.position.left || 0}px;`;
      if (props2.position.width) {
        positionStyle2 += `width:${props2.position.width}px;`;
      }
      if (props2.position.height) {
        positionStyle2 += `height:${props2.position.height}px;`;
      }
      return positionStyle2;
    });
    const handleClick = ($event) => {
      if (props2.clickable) {
        props2.trigger("controltap", $event, {
          controlId: props2.id
        });
      }
    };
    return () => {
      return createVNode("div", {
        "class": "uni-map-control"
      }, [createVNode("img", {
        "src": imgPath.value,
        "style": positionStyle.value,
        "class": "uni-map-control-icon",
        "onClick": handleClick
      }, null, 12, ["src", "onClick"])]);
    };
  }
});
const makePhoneCall = /* @__PURE__ */ defineAsyncApi(
  API_MAKE_PHONE_CALL,
  ({ phoneNumber }, { resolve }) => {
    window.location.href = `tel:${phoneNumber}`;
    return resolve();
  }
);
const UUID_KEY = "__DC_STAT_UUID";
const storage = navigator.cookieEnabled && (window.localStorage || window.sessionStorage) || {};
let deviceId;
function deviceId$1() {
  deviceId = deviceId || storage[UUID_KEY];
  if (!deviceId) {
    deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
    try {
      storage[UUID_KEY] = deviceId;
    } catch (error) {
    }
  }
  return deviceId;
}
function IEVersion() {
  const userAgent = navigator.userAgent;
  const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
  const isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion > 6) {
      return fIEVersion;
    } else {
      return 6;
    }
  } else if (isEdge) {
    return -1;
  } else if (isIE11) {
    return 11;
  } else {
    return -1;
  }
}
function getTheme() {
  if (__uniConfig.darkmode !== true)
    return isString(__uniConfig.darkmode) ? __uniConfig.darkmode : "light";
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch (error) {
    return "light";
  }
}
function getBrowserInfo() {
  let osname;
  let osversion = "0";
  let model = "";
  let deviceType = "phone";
  const language = navigator.language;
  if (isIOS$1) {
    osname = "iOS";
    const osversionFind = ua.match(/OS\s([\w_]+)\slike/);
    if (osversionFind) {
      osversion = osversionFind[1].replace(/_/g, ".");
    }
    const modelFind = ua.match(/\(([a-zA-Z]+);/);
    if (modelFind) {
      model = modelFind[1];
    }
  } else if (isAndroid) {
    osname = "Android";
    const osversionFind = ua.match(/Android[\s/]([\w\.]+)[;\s]/);
    if (osversionFind) {
      osversion = osversionFind[1];
    }
    const infoFind = ua.match(/\((.+?)\)/);
    const infos = infoFind ? infoFind[1].split(";") : ua.split(" ");
    const otherInfo = [
      /\bAndroid\b/i,
      /\bLinux\b/i,
      /\bU\b/i,
      /^\s?[a-z][a-z]$/i,
      /^\s?[a-z][a-z]-[a-z][a-z]$/i,
      /\bwv\b/i,
      /\/[\d\.,]+$/,
      /^\s?[\d\.,]+$/,
      /\bBrowser\b/i,
      /\bMobile\b/i
    ];
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i];
      if (info.indexOf("Build") > 0) {
        model = info.split("Build")[0].trim();
        break;
      }
      let other;
      for (let o2 = 0; o2 < otherInfo.length; o2++) {
        if (otherInfo[o2].test(info)) {
          other = true;
          break;
        }
      }
      if (!other) {
        model = info.trim();
        break;
      }
    }
  } else if (isIPadOS) {
    model = "iPad";
    osname = "iOS";
    deviceType = "pad";
    osversion = isFunction(window.BigInt) ? "14.0" : "13.0";
  } else if (isWindows || isMac || isLinux) {
    model = "PC";
    osname = "PC";
    deviceType = "pc";
    osversion = "0";
    let osversionFind = ua.match(/\((.+?)\)/)[1];
    if (isWindows) {
      osname = "Windows";
      switch (isWindows[1]) {
        case "5.1":
          osversion = "XP";
          break;
        case "6.0":
          osversion = "Vista";
          break;
        case "6.1":
          osversion = "7";
          break;
        case "6.2":
          osversion = "8";
          break;
        case "6.3":
          osversion = "8.1";
          break;
        case "10.0":
          osversion = "10";
          break;
      }
      const framework = osversionFind && osversionFind.match(/[Win|WOW]([\d]+)/);
      if (framework) {
        osversion += ` x${framework[1]}`;
      }
    } else if (isMac) {
      osname = "macOS";
      const _osversion = osversionFind && osversionFind.match(/Mac OS X (.+)/) || "";
      if (osversion) {
        osversion = _osversion[1].replace(/_/g, ".");
        if (osversion.indexOf(";") !== -1) {
          osversion = osversion.split(";")[0];
        }
      }
    } else if (isLinux) {
      osname = "Linux";
      const _osversion = osversionFind && osversionFind.match(/Linux (.*)/) || "";
      if (_osversion) {
        osversion = _osversion[1];
        if (osversion.indexOf(";") !== -1) {
          osversion = osversion.split(";")[0];
        }
      }
    }
  } else {
    osname = "Other";
    osversion = "0";
    deviceType = "unknown";
  }
  const system = `${osname} ${osversion}`;
  const platform = osname.toLocaleLowerCase();
  let browserName = "";
  let browserVersion = String(IEVersion());
  if (browserVersion !== "-1") {
    browserName = "IE";
  } else {
    const browseVendors = ["Version", "Firefox", "Chrome", "Edge{0,1}"];
    const vendors = ["Safari", "Firefox", "Chrome", "Edge"];
    for (let index2 = 0; index2 < browseVendors.length; index2++) {
      const vendor = browseVendors[index2];
      const reg = new RegExp(`(${vendor})/(\\S*)\\b`);
      if (reg.test(ua)) {
        browserName = vendors[index2];
        browserVersion = ua.match(reg)[2];
      }
    }
  }
  let deviceOrientation = "portrait";
  const orientation = typeof window.screen.orientation === "undefined" ? window.orientation : window.screen.orientation.angle;
  deviceOrientation = Math.abs(orientation) === 90 ? "landscape" : "portrait";
  return {
    deviceBrand: void 0,
    brand: void 0,
    deviceModel: model,
    deviceOrientation,
    model,
    system,
    platform,
    browserName: browserName.toLocaleLowerCase(),
    browserVersion,
    language,
    deviceType,
    ua,
    osname,
    osversion,
    theme: getTheme()
  };
}
const getWindowInfo = /* @__PURE__ */ defineSyncApi(
  "getWindowInfo",
  () => {
    const pixelRatio2 = window.devicePixelRatio;
    const screenFix = getScreenFix();
    const landscape = isLandscape(screenFix);
    const screenWidth = getScreenWidth(screenFix, landscape);
    const screenHeight = getScreenHeight(screenFix, landscape);
    const windowWidth = getWindowWidth(screenWidth);
    let windowHeight = window.innerHeight;
    const statusBarHeight = safeAreaInsets$1.top;
    const safeArea = {
      left: safeAreaInsets$1.left,
      right: windowWidth - safeAreaInsets$1.right,
      top: safeAreaInsets$1.top,
      bottom: windowHeight - safeAreaInsets$1.bottom,
      width: windowWidth - safeAreaInsets$1.left - safeAreaInsets$1.right,
      height: windowHeight - safeAreaInsets$1.top - safeAreaInsets$1.bottom
    };
    const { top: windowTop, bottom: windowBottom } = getWindowOffset();
    windowHeight -= windowTop;
    windowHeight -= windowBottom;
    return {
      windowTop,
      windowBottom,
      windowWidth,
      windowHeight,
      pixelRatio: pixelRatio2,
      screenWidth,
      screenHeight,
      statusBarHeight,
      safeArea,
      safeAreaInsets: {
        top: safeAreaInsets$1.top,
        right: safeAreaInsets$1.right,
        bottom: safeAreaInsets$1.bottom,
        left: safeAreaInsets$1.left
      },
      screenTop: screenHeight - windowHeight
    };
  }
);
let browserInfo;
let _initBrowserInfo = true;
function initBrowserInfo() {
  if (!_initBrowserInfo)
    return;
  browserInfo = getBrowserInfo();
}
const getDeviceInfo = /* @__PURE__ */ defineSyncApi(
  "getDeviceInfo",
  () => {
    initBrowserInfo();
    const {
      deviceBrand,
      deviceModel,
      brand,
      model,
      platform,
      system,
      deviceOrientation,
      deviceType
    } = browserInfo;
    return {
      brand,
      deviceBrand,
      deviceModel,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: deviceId$1(),
      deviceOrientation,
      deviceType,
      model,
      platform,
      system
    };
  }
);
const getAppBaseInfo = /* @__PURE__ */ defineSyncApi(
  "getAppBaseInfo",
  () => {
    initBrowserInfo();
    const { theme, language, browserName, browserVersion } = browserInfo;
    return {
      appId: __uniConfig.appId,
      appName: __uniConfig.appName,
      appVersion: __uniConfig.appVersion,
      appVersionCode: __uniConfig.appVersionCode,
      appLanguage: getLocale ? getLocale() : language,
      enableDebug: false,
      hostSDKVersion: void 0,
      hostPackageName: void 0,
      hostFontSizeSetting: void 0,
      hostName: browserName,
      hostVersion: browserVersion,
      hostTheme: theme,
      hostLanguage: language,
      language,
      SDKVersion: "",
      theme,
      version: ""
    };
  }
);
const getSystemInfoSync = /* @__PURE__ */ defineSyncApi(
  "getSystemInfoSync",
  () => {
    _initBrowserInfo = true;
    initBrowserInfo();
    _initBrowserInfo = false;
    const windowInfo = getWindowInfo();
    const deviceInfo = getDeviceInfo();
    const appBaseInfo = getAppBaseInfo();
    _initBrowserInfo = true;
    const { ua: ua2, browserName, browserVersion, osname, osversion } = browserInfo;
    const systemInfo = extend(
      windowInfo,
      deviceInfo,
      appBaseInfo,
      {
        ua: ua2,
        browserName,
        browserVersion,
        uniPlatform: "web",
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        fontSizeSetting: void 0,
        osName: osname.toLocaleLowerCase(),
        osVersion: osversion,
        osLanguage: void 0,
        osTheme: void 0
      }
    );
    delete systemInfo.screenTop;
    delete systemInfo.enableDebug;
    if (!__uniConfig.darkmode)
      delete systemInfo.theme;
    return sortObject(systemInfo);
  }
);
let listener = null;
const onCompassChange = /* @__PURE__ */ defineOnApi(
  API_ON_COMPASS,
  () => {
    startCompass();
  }
);
const offCompassChange = /* @__PURE__ */ defineOffApi(
  API_OFF_COMPASS,
  () => {
    stopCompass();
  }
);
const startCompass = /* @__PURE__ */ defineAsyncApi(
  API_START_COMPASS,
  (_, { resolve, reject }) => {
    if (!window.DeviceOrientationEvent) {
      reject();
      return;
    }
    function addEventListener() {
      listener = function(event) {
        const direction2 = 360 - (event.alpha !== null ? event.alpha : 360);
        UniServiceJSBridge$1.invokeOnCallback(API_ON_COMPASS, {
          direction: direction2
        });
      };
      window.addEventListener("deviceorientation", listener, false);
    }
    if (!listener) {
      if (DeviceOrientationEvent.requestPermission) {
        DeviceOrientationEvent.requestPermission().then((res) => {
          if (res === "granted") {
            addEventListener();
            resolve();
          } else {
            reject(`${res}`);
          }
        }).catch((error) => {
          reject(`${error}`);
        });
        return;
      }
      addEventListener();
    }
    resolve();
  }
);
const stopCompass = /* @__PURE__ */ defineAsyncApi(
  API_STOP_COMPASS,
  (_, { resolve }) => {
    if (listener) {
      window.removeEventListener("deviceorientation", listener, false);
      listener = null;
    }
    resolve();
  }
);
function parseValue(value) {
  const types = ["object", "string", "number", "boolean", "undefined"];
  try {
    const object = isString(value) ? JSON.parse(value) : value;
    const type = object.type;
    if (types.indexOf(type) >= 0) {
      const keys = Object.keys(object);
      if (keys.length === 2 && "data" in object) {
        if (typeof object.data === type) {
          return object.data;
        }
        if (type === "object" && /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(object.data)) {
          return new Date(object.data);
        }
      } else if (keys.length === 1) {
        return "";
      }
    }
  } catch (error) {
  }
}
const setStorageSync = /* @__PURE__ */ defineSyncApi(
  API_SET_STORAGE_SYNC,
  (key, data) => {
    const type = typeof data;
    const value = type === "string" ? data : JSON.stringify({
      type,
      data
    });
    localStorage.setItem(key, value);
  }
);
const setStorage = /* @__PURE__ */ defineAsyncApi(
  API_SET_STORAGE,
  ({ key, data }, { resolve, reject }) => {
    try {
      setStorageSync(key, data);
      resolve();
    } catch (error) {
      reject(error.message);
    }
  }
);
function getStorageOrigin(key) {
  const value = localStorage && localStorage.getItem(key);
  if (!isString(value)) {
    throw new Error("data not found");
  }
  let data = value;
  try {
    const object = JSON.parse(value);
    const result = parseValue(object);
    if (result !== void 0) {
      data = result;
    }
  } catch (error) {
  }
  return data;
}
const getStorageSync = /* @__PURE__ */ defineSyncApi(
  API_GET_STORAGE_SYNC,
  (key) => {
    try {
      return getStorageOrigin(key);
    } catch (error) {
      return "";
    }
  }
);
const getStorage = /* @__PURE__ */ defineAsyncApi(
  API_GET_STORAGE,
  ({ key }, { resolve, reject }) => {
    try {
      const data = getStorageOrigin(key);
      resolve({
        data
      });
    } catch (error) {
      reject(error.message);
    }
  }
);
const removeStorageSync = /* @__PURE__ */ defineSyncApi(
  API_REMOVE_STORAGE,
  (key) => {
    if (localStorage) {
      localStorage.removeItem(key);
    }
  }
);
const removeStorage = /* @__PURE__ */ defineAsyncApi(
  API_REMOVE_STORAGE,
  ({ key }, { resolve }) => {
    removeStorageSync(key);
    resolve();
  }
);
const hideKeyboard = /* @__PURE__ */ defineAsyncApi(
  API_HIDE_KEYBOARD,
  (args, { resolve, reject }) => {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT")) {
      activeElement.blur();
      resolve();
    }
  }
);
const MIMEType = {
  /**
   * 关于图片常见的MIME类型
   */
  image: {
    jpg: "jpeg",
    jpe: "jpeg",
    pbm: "x-portable-bitmap",
    pgm: "x-portable-graymap",
    pnm: "x-portable-anymap",
    ppm: "x-portable-pixmap",
    psd: "vnd.adobe.photoshop",
    pic: "x-pict",
    rgb: "x-rgb",
    svg: "svg+xml",
    svgz: "svg+xml",
    tif: "tiff",
    xif: "vnd.xiff",
    wbmp: "vnd.wap.wbmp",
    wdp: "vnd.ms-photo",
    xbm: "x-xbitmap",
    ico: "x-icon"
  },
  /**
   * 关于视频常见的MIME类型
   */
  video: {
    "3g2": "3gpp2",
    "3gp": "3gpp",
    avi: "x-msvideo",
    f4v: "x-f4v",
    flv: "x-flv",
    jpgm: "jpm",
    jpgv: "jpeg",
    m1v: "mpeg",
    m2v: "mpeg",
    mpe: "mpeg",
    mpg: "mpeg",
    mpg4: "mpeg",
    m4v: "x-m4v",
    mkv: "x-matroska",
    mov: "quicktime",
    qt: "quicktime",
    movie: "x-sgi-movie",
    mp4v: "mp4",
    ogv: "ogg",
    smv: "x-smv",
    wm: "x-ms-wm",
    wmv: "x-ms-wmv",
    wmx: "x-ms-wmx",
    wvx: "x-ms-wvx"
  }
};
const MIMEType$1 = MIMEType;
const ALL = "all";
addInteractListener();
function isWXEnv() {
  const ua2 = window.navigator.userAgent.toLowerCase();
  const matchUA = ua2.match(/MicroMessenger/i);
  return !!(matchUA && matchUA[0] === "micromessenger");
}
function _createInput({
  count,
  sourceType,
  type,
  extension
}) {
  const inputEl = document.createElement("input");
  inputEl.type = "file";
  updateElementStyle(inputEl, {
    position: "absolute",
    visibility: "hidden",
    zIndex: "-999",
    width: "0",
    height: "0",
    top: "0",
    left: "0"
  });
  inputEl.accept = extension.map((item) => {
    if (type !== ALL) {
      const MIMEKey = item.replace(".", "");
      return `${type}/${MIMEType$1[type][MIMEKey] || MIMEKey}`;
    } else {
      if (isWXEnv()) {
        return ".";
      }
      return item.indexOf(".") === 0 ? item : `.${item}`;
    }
  }).join(",");
  if (count && count > 1) {
    inputEl.multiple = true;
  }
  if (type !== ALL && sourceType instanceof Array && sourceType.length === 1 && sourceType[0] === "camera") {
    inputEl.setAttribute("capture", "camera");
  }
  return inputEl;
}
let fileInput = null;
const chooseFile = /* @__PURE__ */ defineAsyncApi(
  API_CHOOSE_FILE,
  ({
    // sizeType,
    count,
    sourceType,
    type,
    extension
  }, { resolve, reject }) => {
    initI18nChooseFileMsgsOnce();
    const { t: t2 } = useI18n();
    if (fileInput) {
      document.body.removeChild(fileInput);
      fileInput = null;
    }
    fileInput = _createInput({
      count,
      sourceType,
      type,
      extension
    });
    document.body.appendChild(fileInput);
    fileInput.addEventListener("change", function(event) {
      const eventTarget = event.target;
      const tempFiles = [];
      if (eventTarget && eventTarget.files) {
        const fileCount = eventTarget.files.length;
        for (let i = 0; i < fileCount; i++) {
          const file = eventTarget.files[i];
          let filePath;
          Object.defineProperty(file, "path", {
            get() {
              filePath = filePath || fileToUrl(file);
              return filePath;
            }
          });
          if (i < count)
            tempFiles.push(file);
        }
      }
      const res = {
        get tempFilePaths() {
          return tempFiles.map(({ path }) => path);
        },
        tempFiles
      };
      resolve(res);
    });
    fileInput.click();
    if (!getInteractStatus()) {
      console.warn(t2("uni.chooseFile.notUserActivation"));
    }
  },
  ChooseFileProtocol,
  ChooseFileOptions
);
let imageInput = null;
const chooseImage = /* @__PURE__ */ defineAsyncApi(
  API_CHOOSE_IMAGE,
  ({
    count,
    // sizeType,
    sourceType,
    extension
  }, { resolve, reject }) => {
    initI18nChooseFileMsgsOnce();
    const { t: t2 } = useI18n();
    if (imageInput) {
      document.body.removeChild(imageInput);
      imageInput = null;
    }
    imageInput = _createInput({
      count,
      sourceType,
      extension,
      type: "image"
    });
    document.body.appendChild(imageInput);
    imageInput.addEventListener("change", function(event) {
      const eventTarget = event.target;
      const tempFiles = [];
      if (eventTarget && eventTarget.files) {
        const fileCount = eventTarget.files.length;
        for (let i = 0; i < fileCount; i++) {
          const file = eventTarget.files[i];
          let filePath;
          Object.defineProperty(file, "path", {
            get() {
              filePath = filePath || fileToUrl(file);
              return filePath;
            }
          });
          if (i < count)
            tempFiles.push(file);
        }
      }
      const res = {
        get tempFilePaths() {
          return tempFiles.map(({ path }) => path);
        },
        tempFiles
      };
      resolve(res);
    });
    imageInput.click();
    if (!getInteractStatus()) {
      console.warn(t2("uni.chooseFile.notUserActivation"));
    }
  },
  ChooseImageProtocol,
  ChooseImageOptions
);
const KEY_MAPS = {
  esc: ["Esc", "Escape"],
  // tab: ['Tab'],
  enter: ["Enter"]
  // space: [' ', 'Spacebar'],
  // up: ['Up', 'ArrowUp'],
  // left: ['Left', 'ArrowLeft'],
  // right: ['Right', 'ArrowRight'],
  // down: ['Down', 'ArrowDown'],
  // delete: ['Backspace', 'Delete', 'Del'],
};
const KEYS = Object.keys(KEY_MAPS);
function useKeyboard() {
  const key = ref("");
  const disable = ref(false);
  const onKeyup = (evt) => {
    if (disable.value) {
      return;
    }
    const res = KEYS.find(
      (key2) => KEY_MAPS[key2].indexOf(evt.key) !== -1
    );
    if (res) {
      key.value = res;
    }
    nextTick(() => key.value = "");
  };
  onMounted(() => {
    document.addEventListener("keyup", onKeyup);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("keyup", onKeyup);
  });
  return {
    key,
    disable
  };
}
const VNODE_MASK = /* @__PURE__ */ createVNode(
  "div",
  { class: "uni-mask" },
  null,
  -1
  /* HOISTED */
);
function createRootApp(component, rootState, callback) {
  rootState.onClose = (...args) => (rootState.visible = false, callback.apply(null, args));
  return createApp(
    defineComponent({
      setup() {
        return () => (openBlock(), createBlock(
          component,
          rootState,
          null,
          16
          /* FULL_PROPS */
        ));
      }
    })
  );
}
function ensureRoot(id2) {
  let rootEl = document.getElementById(id2);
  if (!rootEl) {
    rootEl = document.createElement("div");
    rootEl.id = id2;
    document.body.append(rootEl);
  }
  return rootEl;
}
function usePopup(props2, {
  onEsc,
  onEnter
}) {
  const visible = ref(props2.visible);
  const { key, disable } = useKeyboard();
  watch(
    () => props2.visible,
    (value) => visible.value = value
  );
  watch(
    () => visible.value,
    (value) => disable.value = !value
  );
  watchEffect(() => {
    const { value } = key;
    if (value === "esc") {
      onEsc && onEsc();
    } else if (value === "enter") {
      onEnter && onEnter();
    }
  });
  return visible;
}
let index$a = 0;
let overflow = "";
function preventScroll(prevent) {
  let before = index$a;
  index$a += prevent ? 1 : -1;
  index$a = Math.max(0, index$a);
  if (index$a > 0) {
    if (before === 0) {
      overflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  } else {
    document.body.style.overflow = overflow;
    overflow = "";
  }
}
function usePreventScroll() {
  onMounted(() => preventScroll(true));
  onUnmounted(() => preventScroll(false));
}
const props$a = {
  src: {
    type: String,
    default: ""
  }
};
const ImageView = /* @__PURE__ */ defineSystemComponent({
  name: "ImageView",
  props: props$a,
  setup(props2) {
    const state2 = reactive({
      direction: "none"
    });
    let scale = 1;
    let imgWidth = 0;
    let imgHeight = 0;
    let width = 0;
    let height = 0;
    function onScale({
      detail
    }) {
      scale = detail.scale;
    }
    function onImgLoad(event) {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      imgWidth = rect.width;
      imgHeight = rect.height;
    }
    function onTouchStart(event) {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      checkDirection(event);
    }
    function onTouchEnd(event) {
      const horizontal = scale * imgWidth > width;
      const vertical = scale * imgHeight > height;
      if (horizontal && vertical) {
        state2.direction = "all";
      } else if (horizontal) {
        state2.direction = "horizontal";
      } else if (vertical) {
        state2.direction = "vertical";
      } else {
        state2.direction = "none";
      }
      checkDirection(event);
    }
    function checkDirection(event) {
      if (state2.direction === "all" || state2.direction === "horizontal") {
        event.stopPropagation();
      }
    }
    return () => {
      const viewStyle = {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%"
      };
      return createVNode(MovableArea, {
        "style": viewStyle,
        "onTouchstart": withWebEvent(onTouchStart),
        "onTouchmove": withWebEvent(checkDirection),
        "onTouchend": withWebEvent(onTouchEnd)
      }, {
        default: () => [createVNode(MovableView, {
          "style": viewStyle,
          "direction": state2.direction,
          "inertia": true,
          "scale": true,
          "scale-min": "1",
          "scale-max": "4",
          "onScale": onScale
        }, {
          default: () => [createVNode("img", {
            "src": props2.src,
            "style": {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "100%",
              maxWidth: "100%"
            },
            "onLoad": onImgLoad
          }, null, 40, ["src", "onLoad"])]
        }, 8, ["style", "direction", "inertia", "scale", "onScale"])]
      }, 8, ["style", "onTouchstart", "onTouchmove", "onTouchend"]);
    };
  }
});
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const props$9 = {
  urls: {
    type: Array,
    default() {
      return [];
    }
  },
  current: {
    type: [Number, String],
    default: 0
  }
};
function getIndex(props2) {
  let index2 = typeof props2.current === "number" ? props2.current : props2.urls.indexOf(props2.current);
  index2 = index2 < 0 ? 0 : index2;
  return index2;
}
const ImagePreview = /* @__PURE__ */ defineSystemComponent({
  name: "ImagePreview",
  props: props$9,
  emits: ["close"],
  setup(props2, {
    emit: emit2
  }) {
    usePreventScroll();
    const rootRef = ref(null);
    const indexRef = ref(getIndex(props2));
    watch(() => props2.current, () => indexRef.value = getIndex(props2));
    let preventDefault;
    onMounted(() => {
      const el = rootRef.value;
      const MAX_MOVE = 20;
      let x = 0;
      let y = 0;
      el.addEventListener("mousedown", (event) => {
        preventDefault = false;
        x = event.clientX;
        y = event.clientY;
      });
      el.addEventListener("mouseup", (event) => {
        if (Math.abs(event.clientX - x) > MAX_MOVE || Math.abs(event.clientY - y) > MAX_MOVE) {
          preventDefault = true;
        }
      });
    });
    function onClick() {
      if (!preventDefault) {
        nextTick(() => {
          emit2("close");
        });
      }
    }
    function onChange2(event) {
      indexRef.value = event.detail.current;
    }
    const closeBtnStyle = {
      position: "absolute",
      "box-sizing": "border-box",
      top: "0",
      right: "0",
      width: "60px",
      height: "44px",
      padding: "6px",
      "line-height": "32px",
      "font-size": "26px",
      color: "white",
      "text-align": "center",
      cursor: "pointer"
    };
    return () => {
      let _slot;
      return createVNode("div", {
        "ref": rootRef,
        "style": {
          display: "block",
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: 999,
          background: "rgba(0,0,0,0.8)"
        },
        "onClick": onClick
      }, [createVNode(Swiper, {
        "navigation": "auto",
        "current": indexRef.value,
        "onChange": onChange2,
        "indicator-dots": false,
        "autoplay": false,
        "style": {
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%"
        }
      }, _isSlot$2(_slot = props2.urls.map((src) => createVNode(SwiperItem, null, {
        default: () => [createVNode(ImageView, {
          "src": src
        }, null, 8, ["src"])]
      }))) ? _slot : {
        default: () => [_slot],
        _: 1
      }, 8, ["current", "onChange"]), createVNode("div", {
        "style": closeBtnStyle
      }, [createSvgIconVNode(ICON_PATH_CLOSE, "#ffffff", 26)], 4)], 8, ["onClick"]);
    };
  }
});
let state$2 = null;
let imagePreviewInstance;
const closePreviewImageView = () => {
  state$2 = null;
  nextTick(() => {
    imagePreviewInstance == null ? void 0 : imagePreviewInstance.unmount();
    imagePreviewInstance = null;
  });
};
const previewImage = /* @__PURE__ */ defineAsyncApi(
  API_PREVIEW_IMAGE,
  (args, { resolve }) => {
    if (!state$2) {
      state$2 = reactive(args);
      nextTick(() => {
        imagePreviewInstance = createRootApp(
          ImagePreview,
          state$2,
          closePreviewImageView
        );
        imagePreviewInstance.mount(ensureRoot("u-a-p"));
      });
    } else {
      extend(state$2, args);
    }
    resolve();
  },
  PreviewImageProtocol,
  PreviewImageOptions
);
const closePreviewImage = /* @__PURE__ */ defineAsyncApi(
  API_CLOSE_PREVIEW_IMAGE,
  (_, { resolve, reject }) => {
    if (imagePreviewInstance) {
      closePreviewImageView();
      resolve();
    } else {
      reject();
    }
  }
);
let videoInput = null;
const chooseVideo = /* @__PURE__ */ defineAsyncApi(
  API_CHOOSE_VIDEO,
  ({ sourceType, extension }, { resolve, reject }) => {
    initI18nChooseFileMsgsOnce();
    const { t: t2 } = useI18n();
    if (videoInput) {
      document.body.removeChild(videoInput);
      videoInput = null;
    }
    videoInput = _createInput({
      sourceType,
      extension,
      type: "video"
    });
    document.body.appendChild(videoInput);
    videoInput.addEventListener("change", function(event) {
      const eventTarget = event.target;
      const file = eventTarget.files[0];
      let filePath = "";
      const callbackResult = {
        tempFilePath: filePath,
        tempFile: file,
        size: file.size,
        duration: 0,
        width: 0,
        height: 0,
        name: file.name
      };
      Object.defineProperty(callbackResult, "tempFilePath", {
        get() {
          filePath = filePath || fileToUrl(this.tempFile);
          return filePath;
        }
      });
      const video = document.createElement("video");
      if (video.onloadedmetadata !== void 0) {
        const filePath2 = fileToUrl(file);
        video.onloadedmetadata = function() {
          revokeObjectURL(filePath2);
          resolve(
            extend(callbackResult, {
              duration: video.duration || 0,
              width: video.videoWidth || 0,
              height: video.videoHeight || 0
            })
          );
        };
        setTimeout(() => {
          video.onloadedmetadata = null;
          revokeObjectURL(filePath2);
          resolve(callbackResult);
        }, 300);
        video.src = filePath2;
      } else {
        resolve(callbackResult);
      }
    });
    videoInput.click();
    if (!getInteractStatus()) {
      console.warn(t2("uni.chooseFile.notUserActivation"));
    }
  },
  ChooseVideoProtocol,
  ChooseVideoOptions
);
const request = /* @__PURE__ */ defineTaskApi(
  API_REQUEST,
  ({
    url,
    data,
    header,
    method,
    dataType: dataType2,
    responseType,
    withCredentials,
    timeout = __uniConfig.networkTimeout.request
  }, { resolve, reject }) => {
    let body = null;
    const contentType = normalizeContentType(header);
    if (method !== "GET") {
      if (isString(data) || data instanceof ArrayBuffer) {
        body = data;
      } else {
        if (contentType === "json") {
          try {
            body = JSON.stringify(data);
          } catch (error) {
            body = data.toString();
          }
        } else if (contentType === "urlencoded") {
          const bodyArray = [];
          for (const key in data) {
            if (hasOwn$1(data, key)) {
              bodyArray.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
              );
            }
          }
          body = bodyArray.join("&");
        } else {
          body = data.toString();
        }
      }
    }
    const xhr = new XMLHttpRequest();
    const requestTask = new RequestTask(xhr);
    xhr.open(method, url);
    for (const key in header) {
      if (hasOwn$1(header, key)) {
        xhr.setRequestHeader(key, header[key]);
      }
    }
    const timer = setTimeout(function() {
      xhr.onload = xhr.onabort = xhr.onerror = null;
      requestTask.abort();
      reject("timeout");
    }, timeout);
    xhr.responseType = responseType;
    xhr.onload = function() {
      clearTimeout(timer);
      const statusCode = xhr.status;
      let res = responseType === "text" ? xhr.responseText : xhr.response;
      if (responseType === "text" && dataType2 === "json") {
        try {
          res = JSON.parse(res);
        } catch (error) {
        }
      }
      resolve({
        data: res,
        statusCode,
        header: parseHeaders(xhr.getAllResponseHeaders()),
        cookies: []
      });
    };
    xhr.onabort = function() {
      clearTimeout(timer);
      reject("abort");
    };
    xhr.onerror = function() {
      clearTimeout(timer);
      reject();
    };
    xhr.withCredentials = withCredentials;
    xhr.send(body);
    return requestTask;
  },
  RequestProtocol,
  RequestOptions
);
function normalizeContentType(header) {
  const name = Object.keys(header).find(
    (name2) => name2.toLowerCase() === "content-type"
  );
  if (!name) {
    return;
  }
  const contentType = header[name];
  if (contentType.indexOf("application/json") === 0) {
    return "json";
  } else if (contentType.indexOf("application/x-www-form-urlencoded") === 0) {
    return "urlencoded";
  }
  return "string";
}
class RequestTask {
  constructor(xhr) {
    this._xhr = xhr;
  }
  abort() {
    if (this._xhr) {
      this._xhr.abort();
      delete this._xhr;
    }
  }
  onHeadersReceived(callback) {
    throw new Error("Method not implemented.");
  }
  offHeadersReceived(callback) {
    throw new Error("Method not implemented.");
  }
}
function parseHeaders(headers) {
  const headersObject = {};
  headers.split(LINEFEED).forEach((header) => {
    const find = header.match(/(\S+\s*):\s*(.*)/);
    if (!find || find.length !== 3) {
      return;
    }
    headersObject[find[1]] = find[2];
  });
  return headersObject;
}
class UploadTask {
  constructor(xhr) {
    this._callbacks = [];
    this._xhr = xhr;
  }
  /**
   * 监听上传进度
   * @param callback 回调
   */
  onProgressUpdate(callback) {
    if (!isFunction(callback)) {
      return;
    }
    this._callbacks.push(callback);
  }
  offProgressUpdate(callback) {
    const index2 = this._callbacks.indexOf(callback);
    if (index2 >= 0) {
      this._callbacks.splice(index2, 1);
    }
  }
  /**
   * 中断上传任务
   */
  abort() {
    this._isAbort = true;
    if (this._xhr) {
      this._xhr.abort();
      delete this._xhr;
    }
  }
  onHeadersReceived(callback) {
    throw new Error("Method not implemented.");
  }
  offHeadersReceived(callback) {
    throw new Error("Method not implemented.");
  }
}
const uploadFile = /* @__PURE__ */ defineTaskApi(
  API_UPLOAD_FILE,
  ({
    url,
    file,
    filePath,
    name,
    files: files2,
    header,
    formData,
    timeout = __uniConfig.networkTimeout.uploadFile
  }, { resolve, reject }) => {
    var uploadTask = new UploadTask();
    if (!isArray(files2) || !files2.length) {
      files2 = [
        {
          name,
          file,
          uri: filePath
        }
      ];
    }
    function upload(realFiles) {
      var xhr = new XMLHttpRequest();
      var form = new FormData();
      var timer;
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });
      Object.values(files2).forEach(({ name: name2 }, index2) => {
        const file2 = realFiles[index2];
        form.append(name2 || "file", file2, file2.name || `file-${Date.now()}`);
      });
      xhr.open("POST", url);
      Object.keys(header).forEach((key) => {
        xhr.setRequestHeader(key, header[key]);
      });
      xhr.upload.onprogress = function(event) {
        uploadTask._callbacks.forEach((callback) => {
          var totalBytesSent = event.loaded;
          var totalBytesExpectedToSend = event.total;
          var progress = Math.round(
            totalBytesSent / totalBytesExpectedToSend * 100
          );
          callback({
            progress,
            totalBytesSent,
            totalBytesExpectedToSend
          });
        });
      };
      xhr.onerror = function() {
        clearTimeout(timer);
        reject();
      };
      xhr.onabort = function() {
        clearTimeout(timer);
        reject("abort");
      };
      xhr.onload = function() {
        clearTimeout(timer);
        const statusCode = xhr.status;
        resolve({
          statusCode,
          data: xhr.responseText || xhr.response
        });
      };
      if (!uploadTask._isAbort) {
        timer = setTimeout(function() {
          xhr.upload.onprogress = xhr.onload = xhr.onabort = xhr.onerror = null;
          uploadTask.abort();
          reject("timeout");
        }, timeout);
        xhr.send(form);
        uploadTask._xhr = xhr;
      } else {
        reject("abort");
      }
    }
    Promise.all(
      files2.map(
        ({ file: file2, uri }) => file2 instanceof Blob ? Promise.resolve(blobToFile(file2)) : urlToFile(uri)
      )
    ).then(upload).catch(() => {
      setTimeout(() => {
        reject("file error");
      }, 0);
    });
    return uploadTask;
  },
  UploadFileProtocol,
  UploadFileOptions
);
const getLocation = /* @__PURE__ */ defineAsyncApi(
  API_GET_LOCATION,
  ({ type, altitude, highAccuracyExpireTime, isHighAccuracy }, { resolve, reject }) => {
    const mapInfo = getMapInfo();
    new Promise((resolve2, reject2) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (res) => resolve2({ coords: res.coords }),
          reject2,
          {
            enableHighAccuracy: isHighAccuracy || altitude,
            timeout: highAccuracyExpireTime || 1e3 * 100
          }
        );
      } else {
        reject2(new Error("device nonsupport geolocation"));
      }
    }).catch((error) => {
      return new Promise(
        (resolve2, reject2) => {
          if (mapInfo.type === MapType.QQ) {
            getJSONP(
              `https://apis.map.qq.com/ws/location/v1/ip?output=jsonp&key=${mapInfo.key}`,
              {
                callback: "callback"
              },
              (res) => {
                if ("result" in res && res.result.location) {
                  const location2 = res.result.location;
                  resolve2({
                    coords: {
                      latitude: location2.lat,
                      longitude: location2.lng
                    },
                    skip: true
                  });
                } else {
                  reject2(new Error(res.message || JSON.stringify(res)));
                }
              },
              () => reject2(new Error("network error"))
            );
          } else if (mapInfo.type === MapType.GOOGLE) {
            request({
              method: "POST",
              url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${mapInfo.key}`,
              success(res) {
                const data = res.data;
                if ("location" in data) {
                  resolve2({
                    coords: {
                      latitude: data.location.lat,
                      longitude: data.location.lng,
                      accuracy: data.accuracy
                    },
                    skip: true
                  });
                } else {
                  reject2(
                    new Error(
                      data.error && data.error.message || JSON.stringify(res)
                    )
                  );
                }
              },
              fail() {
                reject2(new Error("network error"));
              }
            });
          } else if (mapInfo.type === MapType.AMAP) {
            loadMaps([], () => {
              window.AMap.plugin("AMap.Geolocation", () => {
                const geolocation = new window.AMap.Geolocation({
                  enableHighAccuracy: true,
                  timeout: 1e4
                });
                geolocation.getCurrentPosition(
                  (status, data) => {
                    if (status === "complete") {
                      resolve2({
                        coords: {
                          latitude: data.position.lat,
                          longitude: data.position.lng,
                          accuracy: data.accuracy
                        },
                        skip: true
                      });
                    } else {
                      reject2(new Error(data.message));
                    }
                  }
                );
              });
            });
          } else {
            reject2(error);
          }
        }
      );
    }).then(({ coords, skip }) => {
      translateCoordinateSystem(type, coords, skip).then((coords2) => {
        resolve({
          latitude: coords2.latitude,
          longitude: coords2.longitude,
          accuracy: coords2.accuracy,
          speed: coords2.altitude || 0,
          altitude: coords2.altitude || 0,
          verticalAccuracy: coords2.altitudeAccuracy || 0,
          // 无专门水平精度，使用位置精度替代
          horizontalAccuracy: coords2.accuracy || 0
        });
      }).catch((error) => {
        reject(error.message);
      });
    }).catch((error) => {
      reject(error.message || JSON.stringify(error));
    });
  },
  GetLocationProtocol,
  GetLocationOptions
);
const ICON_PATH_NAV = "M28 17c-6.49396875 0-12.13721875 2.57040625-15 6.34840625V5.4105l6.29859375 6.29859375c0.387875 0.387875 1.02259375 0.387875 1.4105 0 0.387875-0.387875 0.387875-1.02259375 0-1.4105L12.77853125 2.36803125a0.9978125 0.9978125 0 0 0-0.0694375-0.077125c-0.1944375-0.1944375-0.45090625-0.291375-0.70721875-0.290875l-0.00184375-0.0000625-0.00184375 0.0000625c-0.2563125-0.0005-0.51278125 0.09640625-0.70721875 0.290875a0.9978125 0.9978125 0 0 0-0.0694375 0.077125l-7.930625 7.9305625c-0.387875 0.387875-0.387875 1.02259375 0 1.4105 0.387875 0.387875 1.02259375 0.387875 1.4105 0L11 5.4105V29c0 0.55 0.45 1 1 1s1-0.45 1-1c0-5.52284375 6.71571875-10 15-10 0.55228125 0 1-0.44771875 1-1 0-0.55228125-0.44771875-1-1-1z";
const props$8 = {
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  scale: {
    type: Number,
    default: 18
  },
  name: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  }
};
function useState$2(props2) {
  const state2 = reactive({
    center: {
      latitude: 0,
      longitude: 0
    },
    marker: {
      id: 1,
      latitude: 0,
      longitude: 0,
      iconPath: ICON_PATH_TARGET,
      width: 32,
      height: 52
    },
    location: {
      id: 2,
      latitude: 0,
      longitude: 0,
      iconPath: ICON_PATH_ORIGIN,
      width: 44,
      height: 44
    }
  });
  function updatePosition() {
    if (props2.latitude && props2.longitude) {
      state2.center.latitude = props2.latitude;
      state2.center.longitude = props2.longitude;
      state2.marker.latitude = props2.latitude;
      state2.marker.longitude = props2.longitude;
    }
  }
  watch([() => props2.latitude, () => props2.longitude], updatePosition);
  updatePosition();
  return state2;
}
const LocationView = /* @__PURE__ */ defineSystemComponent({
  name: "LocationView",
  props: props$8,
  emits: ["close"],
  setup(props2, {
    emit: emit2
  }) {
    const state2 = useState$2(props2);
    usePreventScroll();
    getLocation({
      type: "gcj02",
      success: ({
        latitude,
        longitude
      }) => {
        state2.location.latitude = latitude;
        state2.location.longitude = longitude;
      }
    });
    function onRegionChange(event) {
      const centerLocation = event.detail.centerLocation;
      if (centerLocation) {
        state2.center.latitude = centerLocation.latitude;
        state2.center.longitude = centerLocation.longitude;
      }
    }
    function nav() {
      const mapInfo = getMapInfo();
      let url = "";
      if (mapInfo.type === MapType.GOOGLE) {
        const origin = state2.location.latitude ? `&origin=${state2.location.latitude}%2C${state2.location.longitude}` : "";
        url = `https://www.google.com/maps/dir/?api=1${origin}&destination=${props2.latitude}%2C${props2.longitude}`;
      } else if (mapInfo.type === MapType.QQ) {
        const fromcoord = state2.location.latitude ? `&fromcoord=${state2.location.latitude}%2C${state2.location.longitude}&from=${encodeURIComponent("我的位置")}` : "";
        url = `https://apis.map.qq.com/uri/v1/routeplan?type=drive${fromcoord}&tocoord=${props2.latitude}%2C${props2.longitude}&to=${encodeURIComponent(props2.name || "目的地")}&ref=${mapInfo.key}`;
      } else if (mapInfo.type === MapType.AMAP) {
        const from = state2.location.latitude ? `from=${state2.location.longitude},${state2.location.latitude},${encodeURIComponent("我的位置")}&` : "";
        url = `https://uri.amap.com/navigation?${from}to=${props2.longitude},${props2.latitude},${encodeURIComponent(props2.name || "目的地")}`;
      }
      window.open(url);
    }
    function back() {
      emit2("close");
    }
    function setCenter({
      latitude,
      longitude
    }) {
      state2.center.latitude = latitude;
      state2.center.longitude = longitude;
    }
    return () => {
      return createVNode("div", {
        "class": "uni-system-open-location"
      }, [createVNode(Map$1, {
        "latitude": state2.center.latitude,
        "longitude": state2.center.longitude,
        "class": "map",
        "markers": [state2.marker, state2.location],
        "onRegionchange": onRegionChange
      }, {
        default: () => [createVNode("div", {
          "class": "map-move",
          "onClick": () => setCenter(state2.location)
        }, [createSvgIconVNode(ICON_PATH_LOCTAION, "#000000", 24)], 8, ["onClick"])]
      }, 8, ["latitude", "longitude", "markers", "onRegionchange"]), createVNode("div", {
        "class": "info"
      }, [createVNode("div", {
        "class": "name",
        "onClick": () => setCenter(state2.marker)
      }, [props2.name], 8, ["onClick"]), createVNode("div", {
        "class": "address",
        "onClick": () => setCenter(state2.marker)
      }, [props2.address], 8, ["onClick"]), createVNode("div", {
        "class": "nav",
        "onClick": nav
      }, [createSvgIconVNode(ICON_PATH_NAV, "#ffffff", 26)], 8, ["onClick"])]), createVNode("div", {
        "class": "nav-btn-back",
        "onClick": back
      }, [createSvgIconVNode(ICON_PATH_BACK, "#ffffff", 26)], 8, ["onClick"])]);
    };
  }
});
let state$1 = null;
const openLocation = /* @__PURE__ */ defineAsyncApi(
  API_OPEN_LOCATION,
  (args, { resolve }) => {
    if (!state$1) {
      state$1 = reactive(args);
      nextTick(() => {
        const app = createRootApp(LocationView, state$1, () => {
          state$1 = null;
          nextTick(() => {
            app.unmount();
          });
        });
        app.mount(ensureRoot("u-a-o"));
      });
    } else {
      extend(state$1, args);
    }
    resolve();
  },
  OpenLocationProtocol,
  OpenLocationOptions
);
const navigateBack = /* @__PURE__ */ defineAsyncApi(
  API_NAVIGATE_BACK,
  (args, { resolve, reject }) => {
    let canBack = true;
    if (invokeHook(ON_BACK_PRESS, {
      from: args.from || "navigateBack"
    }) === true) {
      canBack = false;
    }
    if (!canBack) {
      return reject(ON_BACK_PRESS);
    }
    (function(){var g=globalThis;if(typeof g.getApp==="function"){try{var ga=g.getApp();if(ga&&ga.$router)return ga.$router}catch(e){}}var a=getApp$1();return a&&a.$router})().go(-args.delta);
    return resolve();
  },
  NavigateBackProtocol,
  NavigateBackOptions
);
function navigate({ type, url, tabBarText, events }, __id__) {
  const router = (function(){var g=globalThis;if(typeof g.getApp==="function"){try{var ga=g.getApp();if(ga&&ga.$router)return ga.$router}catch(e){}}var a=getApp$1();return a&&a.$router})();
  const { path, query } = parseUrl(url);
  return new Promise((resolve, reject) => {
    const state2 = createPageState(type, __id__);
    router[type === "navigateTo" ? "push" : "replace"]({
      path,
      query,
      state: state2,
      force: true
    }).then((failure) => {
      if (isNavigationFailure(failure)) {
        return reject(failure.message);
      }
      if (type === "switchTab") {
        router.currentRoute.value.meta.tabBarText = tabBarText;
      }
      if (type === "navigateTo") {
        const meta = router.currentRoute.value.meta;
        if (!meta.eventChannel) {
          meta.eventChannel = new EventChannel(state2.__id__, events);
        }
        return resolve({
          eventChannel: meta.eventChannel
        });
      }
      return resolve();
    });
  });
}
const navigateTo=function(a){var u=globalThis.uni;return u&&u.navigateTo?u.navigateTo(a):Promise.reject({errMsg:"navigateTo:fail"})};
function removeLastPage() {
  const page = getCurrentPage();
  if (!page) {
    return;
  }
  const $page = page.$page;
  removePage(normalizeRouteKey($page.path, $page.id));
}
const redirectTo=function(a){var u=globalThis.uni;return u&&u.redirectTo?u.redirectTo(a):Promise.reject({errMsg:"redirectTo:fail"})};
function removeAllPages() {
  const keys = getCurrentPagesMap().keys();
  for (const routeKey of keys) {
    removePage(routeKey);
  }
}
const reLaunch=function(a){var u=globalThis.uni;return u&&u.reLaunch?u.reLaunch(a):Promise.reject({errMsg:"reLaunch:fail"})};
function removeNonTabBarPages() {
  const curTabBarPageVm = getCurrentPageVm();
  if (!curTabBarPageVm) {
    return;
  }
  const pagesMap = getCurrentPagesMap();
  const keys = pagesMap.keys();
  for (const routeKey of keys) {
    const page = pagesMap.get(routeKey);
    if (!page.$.__isTabBar) {
      removePage(routeKey);
    } else {
      page.$.__isActive = false;
    }
  }
  if (curTabBarPageVm.$.__isTabBar) {
    curTabBarPageVm.$.__isVisible = false;
    invokeHook(curTabBarPageVm, ON_HIDE);
  }
}
function isSamePage(url, $page) {
  return url === $page.fullPath || url === "/" && $page.meta.isEntry;
}
function getTabBarPageId(url) {
  const pages = getCurrentPagesMap().values();
  for (const page of pages) {
    const $page = page.$page;
    if (isSamePage(url, $page)) {
      page.$.__isActive = true;
      return $page.id;
    }
  }
}
const switchTab = /* @__PURE__ */ defineAsyncApi(
  API_SWITCH_TAB,
  // @ts-ignore
  ({ url, tabBarText }, { resolve, reject }) => {
    return removeNonTabBarPages(), navigate({ type: API_SWITCH_TAB, url, tabBarText }, getTabBarPageId(url)).then(resolve).catch(reject);
  },
  SwitchTabProtocol,
  SwitchTabOptions
);
function onThemeChange(callback) {
  if (__uniConfig.darkmode) {
    UniServiceJSBridge$1.on(ON_THEME_CHANGE, callback);
  }
}
function offThemeChange(callback) {
  UniServiceJSBridge$1.off(ON_THEME_CHANGE, callback);
}
function parseTheme(pageStyle) {
  let parsedStyle = {};
  if (__uniConfig.darkmode) {
    parsedStyle = normalizeStyles(
      pageStyle,
      __uniConfig.themeConfig,
      getTheme()
    );
  }
  return __uniConfig.darkmode ? parsedStyle : pageStyle;
}
const ModalTheme = {
  light: {
    cancelColor: "#000000"
  },
  dark: {
    cancelColor: "rgb(170, 170, 170)"
  }
};
const setCancelColor = (theme, cancelColor) => cancelColor.value = ModalTheme[theme].cancelColor;
const props$6 = {
  title: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: "Cancel"
  },
  cancelColor: {
    type: String,
    default: "#000000"
  },
  confirmText: {
    type: String,
    default: "OK"
  },
  confirmColor: {
    type: String,
    default: "#007aff"
  },
  visible: {
    type: Boolean
  },
  editable: {
    type: Boolean,
    default: false
  },
  placeholderText: {
    type: String,
    default: ""
  }
};
const modal = /* @__PURE__ */ defineComponent({
  props: props$6,
  setup(props2, {
    emit: emit2
  }) {
    const editContent = ref("");
    const close = () => visible.value = false;
    const cancel = () => (close(), emit2("close", "cancel"));
    const confirm = () => (close(), emit2("close", "confirm", editContent.value));
    const visible = usePopup(props2, {
      onEsc: cancel,
      onEnter: () => {
        !props2.editable && confirm();
      }
    });
    const cancelColor = useOnThemeChange$1(props2);
    return () => {
      const {
        title,
        content,
        showCancel,
        confirmText,
        confirmColor,
        editable,
        placeholderText
      } = props2;
      editContent.value = content;
      return createVNode(Transition, {
        "name": "uni-fade"
      }, {
        default: () => [withDirectives(createVNode("uni-modal", {
          "onTouchmove": onEventPrevent
        }, [VNODE_MASK, createVNode("div", {
          "class": "uni-modal"
        }, [title && createVNode("div", {
          "class": "uni-modal__hd"
        }, [createVNode("strong", {
          "class": "uni-modal__title",
          "textContent": title
        }, null, 8, ["textContent"])]), editable ? createVNode("textarea", {
          "class": "uni-modal__textarea",
          "rows": "1",
          "placeholder": placeholderText,
          "value": content,
          "onInput": (e2) => editContent.value = e2.target.value
        }, null, 40, ["placeholder", "value", "onInput"]) : createVNode("div", {
          "class": "uni-modal__bd",
          "onTouchmovePassive": onEventStop,
          "textContent": content
        }, null, 40, ["onTouchmovePassive", "textContent"]), createVNode("div", {
          "class": "uni-modal__ft"
        }, [showCancel && createVNode("div", {
          "style": {
            color: cancelColor.value
          },
          "class": "uni-modal__btn uni-modal__btn_default",
          "onClick": cancel
        }, [props2.cancelText], 12, ["onClick"]), createVNode("div", {
          "style": {
            color: confirmColor
          },
          "class": "uni-modal__btn uni-modal__btn_primary",
          "onClick": confirm
        }, [confirmText], 12, ["onClick"])])])], 40, ["onTouchmove"]), [[vShow, visible.value]])]
      });
    };
  }
});
function useOnThemeChange$1(props2) {
  const cancelColor = ref(props2.cancelColor);
  const _onThemeChange = ({
    theme
  }) => {
    setCancelColor(theme, cancelColor);
  };
  watchEffect(() => {
    if (props2.visible) {
      cancelColor.value = props2.cancelColor;
      if (props2.cancelColor === "#000") {
        if (getTheme() === "dark")
          _onThemeChange({
            theme: "dark"
          });
        onThemeChange(_onThemeChange);
      }
    } else {
      offThemeChange(_onThemeChange);
    }
  });
  return cancelColor;
}
let showModalState;
const onHidePopupOnce$1 = /* @__PURE__ */ once(() => {
  UniServiceJSBridge$1.on("onHidePopup", () => showModalState.visible = false);
});
let currentShowModalResolve;
function onModalClose(type, content) {
  const isConfirm = type === "confirm";
  const res = {
    confirm: isConfirm,
    cancel: type === "cancel"
  };
  isConfirm && showModalState.editable && (res.content = content);
  currentShowModalResolve && currentShowModalResolve(res);
}
const showModal = /* @__PURE__ */ defineAsyncApi(
  API_SHOW_MODAL,
  (args, { resolve }) => {
    onHidePopupOnce$1();
    currentShowModalResolve = resolve;
    if (!showModalState) {
      showModalState = reactive(args);
      nextTick(
        () => (createRootApp(modal, showModalState, onModalClose).mount(
          ensureRoot("u-a-m")
        ), //下一帧执行，确保首次显示时有动画效果
        nextTick(() => showModalState.visible = true))
      );
    } else {
      extend(showModalState, args);
      showModalState.visible = true;
    }
  },
  ShowModalProtocol,
  ShowModalOptions
);
const props$5 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    default: "success",
    validator(value) {
      return SHOW_TOAST_ICON.indexOf(value) !== -1;
    }
  },
  image: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 1500
  },
  mask: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean
  }
};
const ToastIconClassName = "uni-toast__icon";
const ICONCOLOR = {
  light: "#fff",
  dark: "rgba(255,255,255,0.9)"
};
const getIconColor = (theme) => ICONCOLOR[theme];
const Toast = /* @__PURE__ */ defineComponent({
  name: "Toast",
  props: props$5,
  setup(props2) {
    initI18nShowToastMsgsOnce();
    initI18nShowLoadingMsgsOnce();
    const {
      Icon
    } = useToastIcon(props2);
    const visible = usePopup(props2, {});
    return () => {
      const {
        mask,
        duration,
        title,
        image: image2
      } = props2;
      return createVNode(Transition, {
        "name": "uni-fade"
      }, {
        default: () => [withDirectives(createVNode("uni-toast", {
          "data-duration": duration
        }, [mask ? createVNode("div", {
          "class": "uni-mask",
          "style": "background: transparent;",
          "onTouchmove": onEventPrevent
        }, null, 40, ["onTouchmove"]) : "", !image2 && !Icon.value ? createVNode("div", {
          "class": "uni-sample-toast"
        }, [createVNode("p", {
          "class": "uni-simple-toast__text"
        }, [title])]) : createVNode("div", {
          "class": "uni-toast"
        }, [image2 ? createVNode("img", {
          "src": image2,
          "class": ToastIconClassName
        }, null, 10, ["src"]) : Icon.value, createVNode("p", {
          "class": "uni-toast__content"
        }, [title])])], 8, ["data-duration"]), [[vShow, visible.value]])]
      });
    };
  }
});
function useToastIcon(props2) {
  const iconColor = ref(getIconColor(getTheme()));
  const _onThemeChange = ({
    theme
  }) => iconColor.value = getIconColor(theme);
  watchEffect(() => {
    if (props2.visible) {
      onThemeChange(_onThemeChange);
    } else {
      offThemeChange(_onThemeChange);
    }
  });
  const Icon = computed(() => {
    switch (props2.icon) {
      case "success":
        return createVNode(createSvgIconVNode(ICON_PATH_SUCCESS_NO_CIRCLE, iconColor.value, 38), {
          class: ToastIconClassName
        });
      case "error":
        return createVNode(createSvgIconVNode(ICON_PATH_WARN, iconColor.value, 38), {
          class: ToastIconClassName
        });
      case "loading":
        return createVNode("i", {
          "class": [ToastIconClassName, "uni-loading"]
        }, null, 2);
      default:
        return null;
    }
  });
  return {
    Icon
  };
}
let showToastState;
let showType = "";
let timeoutId;
const scope = /* @__PURE__ */ effectScope();
function watchVisible() {
  scope.run(() => {
    watch(
      [() => showToastState.visible, () => showToastState.duration],
      ([visible, duration]) => {
        if (visible) {
          timeoutId && clearTimeout(timeoutId);
          if (showType === "onShowLoading")
            return;
          timeoutId = setTimeout(() => {
            hidePopup("onHideToast");
          }, duration);
        } else {
          timeoutId && clearTimeout(timeoutId);
        }
      }
    );
  });
}
function createToast(args) {
  if (!showToastState) {
    showToastState = reactive(extend(args, { visible: false }));
    nextTick(() => {
      watchVisible();
      UniServiceJSBridge$1.on("onHidePopup", () => hidePopup("onHidePopup"));
      createRootApp(Toast, showToastState, () => {
      }).mount(ensureRoot("u-a-t"));
    });
  } else {
    extend(showToastState, args);
  }
  setTimeout(() => {
    showToastState.visible = true;
  }, 10);
}
const showToast = /* @__PURE__ */ defineAsyncApi(
  API_SHOW_TOAST,
  (args, { resolve, reject }) => {
    createToast(args);
    showType = "onShowToast";
    resolve();
  },
  ShowToastProtocol,
  ShowToastOptions
);
const showLoadingDefaultState = {
  icon: "loading",
  duration: 1e8,
  image: ""
};
const showLoading = /* @__PURE__ */ defineAsyncApi(
  API_SHOW_LOADING,
  (args, { resolve, reject }) => {
    extend(args, showLoadingDefaultState);
    createToast(args);
    showType = "onShowLoading";
    resolve();
  },
  ShowLoadingProtocol,
  ShowLoadingOptions
);
const hideLoading = /* @__PURE__ */ defineAsyncApi(
  API_HIDE_LOADING,
  (args, { resolve, reject }) => {
    hidePopup("onHideLoading");
    resolve();
  }
);
function hidePopup(type) {
  const { t: t2 } = useI18n();
  if (!showType) {
    return;
  }
  let warnMsg = "";
  if (type === "onHideToast" && showType !== "onShowToast") {
    warnMsg = t2("uni.showToast.unpaired");
  } else if (type === "onHideLoading" && showType !== "onShowLoading") {
    warnMsg = t2("uni.showLoading.unpaired");
  }
  if (warnMsg) {
    return console.warn(warnMsg);
  }
  showType = "";
  setTimeout(() => {
    showToastState.visible = false;
  }, 10);
}
function updateDocumentTitle(title) {
  {
    document.title = title;
  }
  UniServiceJSBridge$1.emit(ON_NAVIGATION_BAR_CHANGE, { titleText: title });
}
function useDocumentTitle(pageMeta) {
  function update() {
    updateDocumentTitle(pageMeta.navigationBar.titleText);
  }
  watchEffect(update);
  onActivated(update);
}
function setNavigationBar(pageMeta, type, args, resolve, reject) {
  if (!pageMeta) {
    return reject("page not found");
  }
  const { navigationBar } = pageMeta;
  switch (type) {
    case API_SET_NAVIGATION_BAR_COLOR:
      const { frontColor, backgroundColor, animation: animation2 } = args;
      const { duration, timingFunc } = animation2;
      if (frontColor) {
        navigationBar.titleColor = frontColor === "#000000" ? "#000000" : "#ffffff";
      }
      if (backgroundColor) {
        navigationBar.backgroundColor = backgroundColor;
      }
      navigationBar.duration = duration + "ms";
      navigationBar.timingFunc = timingFunc;
      break;
    case API_SHOW_NAVIGATION_BAR_LOADING:
      navigationBar.loading = true;
      break;
    case API_HIDE_NAVIGATION_BAR_LOADING:
      navigationBar.loading = false;
      break;
    case API_SET_NAVIGATION_BAR_TITLE:
      const { title } = args;
      navigationBar.titleText = title;
      break;
  }
  resolve();
}
const setNavigationBarTitle = /* @__PURE__ */ defineAsyncApi(
  API_SET_NAVIGATION_BAR_TITLE,
  (args, { resolve, reject }) => {
    setNavigationBar(
      getCurrentPageMeta(),
      API_SET_NAVIGATION_BAR_TITLE,
      args,
      resolve,
      reject
    );
  }
);
const pageScrollTo = /* @__PURE__ */ defineAsyncApi(
  API_PAGE_SCROLL_TO,
  ({ scrollTop, selector, duration }, { resolve }) => {
    scrollTo(selector || scrollTop || 0, duration, true);
    resolve();
  },
  PageScrollToProtocol,
  PageScrollToOptions
);
const startPullDownRefresh = /* @__PURE__ */ defineAsyncApi(
  API_START_PULL_DOWN_REFRESH,
  (_args, { resolve }) => {
    UniServiceJSBridge$1.invokeViewMethod(
      API_START_PULL_DOWN_REFRESH,
      {},
      getCurrentPageId()
    );
    resolve();
  }
);
const stopPullDownRefresh = /* @__PURE__ */ defineAsyncApi(
  API_STOP_PULL_DOWN_REFRESH,
  (_args, { resolve }) => {
    UniServiceJSBridge$1.invokeViewMethod(
      API_STOP_PULL_DOWN_REFRESH,
      {},
      getCurrentPageId()
    );
    resolve();
  }
);
const CONTEXT_ID = "MAP_LOCATION";
const MapLocation = /* @__PURE__ */ defineSystemComponent({
  name: "MapLocation",
  setup() {
    const state2 = reactive({
      latitude: 0,
      longitude: 0,
      rotate: 0
    });
    {
      let compassChangeHandler = function(res) {
        state2.rotate = res.direction;
      }, updateLocation = function() {
        getLocation({
          type: "gcj02",
          success: (res) => {
            state2.latitude = res.latitude;
            state2.longitude = res.longitude;
          },
          complete: () => {
            timer = setTimeout(updateLocation, 3e4);
          }
        });
      }, removeLocation = function() {
        if (timer) {
          clearTimeout(timer);
        }
        offCompassChange(compassChangeHandler);
      };
      const onMapReady = inject("onMapReady");
      let timer;
      onCompassChange(compassChangeHandler);
      onMapReady(updateLocation);
      onUnmounted(removeLocation);
      const addMapChidlContext = inject("addMapChidlContext");
      const removeMapChidlContext = inject("removeMapChidlContext");
      const context = {
        id: CONTEXT_ID,
        state: state2
      };
      addMapChidlContext(context);
      onUnmounted(() => removeMapChidlContext(context));
    }
    return () => {
      return state2.latitude ? createVNode(MapMarker, mergeProps({
        "anchor": {
          x: 0.5,
          y: 0.5
        },
        "width": "44",
        "height": "44",
        "iconPath": ICON_PATH_ORIGIN
      }, state2), null, 16, ["iconPath"]) : null;
    };
  }
});
const props$3 = {
  // 边框虚线，腾讯地图支持，google 高德 地图不支持，默认值为[0, 0] 为实线，非 [0, 0] 为虚线，H5 端无法像微信小程序一样控制虚线的间隔像素大小
  dashArray: {
    type: Array,
    default: () => [0, 0]
  },
  // 经纬度数组，[{latitude: 0, longitude: 0}]
  points: {
    type: Array,
    required: true
  },
  // 描边的宽度
  strokeWidth: {
    type: Number,
    default: 1
  },
  // 描边的颜色，十六进制
  strokeColor: {
    type: String,
    default: "#000000"
  },
  // 填充颜色，十六进制
  fillColor: {
    type: String,
    default: "#00000000"
  },
  // 设置多边形 Z 轴数值
  zIndex: {
    type: Number,
    default: 0
  }
};
const MapPolygon = /* @__PURE__ */ defineSystemComponent({
  name: "MapPolygon",
  props: props$3,
  setup(props2) {
    let polygonIns;
    const onMapReady = inject("onMapReady");
    onMapReady((map, maps2, trigger) => {
      function drawPolygon() {
        const {
          points,
          strokeWidth,
          strokeColor,
          dashArray,
          fillColor,
          zIndex
        } = props2;
        const path = points.map((item) => {
          const {
            latitude,
            longitude
          } = item;
          return getIsAMap() ? [longitude, latitude] : new maps2.LatLng(latitude, longitude);
        });
        const {
          r: fcR,
          g: fcG,
          b: fcB,
          a: fcA
        } = hexToRgba(fillColor);
        const {
          r: scR,
          g: scG,
          b: scB,
          a: scA
        } = hexToRgba(strokeColor);
        const polygonOptions = {
          //多边形是否可点击。
          clickable: true,
          //鼠标在多边形内的光标样式。
          cursor: "crosshair",
          //多边形是否可编辑。
          editable: false,
          // 地图实例，即要显示多边形的地图
          // @ts-ignore
          map,
          // 区域填充色
          fillColor: "",
          //多边形的路径，以经纬度坐标数组构成。
          path,
          // 区域边框
          strokeColor: "",
          //多边形的边框样式。实线是solid，虚线是dash。
          strokeDashStyle: dashArray.some((item) => item > 0) ? "dash" : "solid",
          //多边形的边框线宽。
          strokeWeight: strokeWidth,
          //多边形是否可见。
          visible: true,
          //多边形的zIndex值。
          zIndex
        };
        if (maps2.Color) {
          polygonOptions.fillColor = new maps2.Color(fcR, fcG, fcB, fcA);
          polygonOptions.strokeColor = new maps2.Color(scR, scG, scB, scA);
        } else {
          polygonOptions.fillColor = `rgb(${fcR}, ${fcG}, ${fcB})`;
          polygonOptions.fillOpacity = fcA;
          polygonOptions.strokeColor = `rgb(${scR}, ${scG}, ${scB})`;
          polygonOptions.strokeOpacity = scA;
        }
        if (polygonIns) {
          polygonIns.setOptions(polygonOptions);
          return;
        }
        polygonIns = new maps2.Polygon(polygonOptions);
      }
      drawPolygon();
      watch(props2, drawPolygon);
    });
    onUnmounted(() => {
      polygonIns.setMap(null);
    });
    return () => null;
  }
});
const props$2 = {
  id: {
    type: String,
    default: ""
  },
  latitude: {
    type: [String, Number],
    default: 0
  },
  longitude: {
    type: [String, Number],
    default: 0
  },
  scale: {
    type: [String, Number],
    default: 16
  },
  markers: {
    type: Array,
    default() {
      return [];
    }
  },
  includePoints: {
    type: Array,
    default() {
      return [];
    }
  },
  polyline: {
    type: Array,
    default() {
      return [];
    }
  },
  circles: {
    type: Array,
    default() {
      return [];
    }
  },
  controls: {
    type: Array,
    default() {
      return [];
    }
  },
  showLocation: {
    type: [Boolean, String],
    default: false
  },
  libraries: {
    type: Array,
    default() {
      return [];
    }
  },
  polygons: {
    type: Array,
    default: () => []
  }
};
function getPoints(points) {
  const newPoints = [];
  if (isArray(points)) {
    points.forEach((point) => {
      if (point && point.latitude && point.longitude) {
        newPoints.push({
          latitude: point.latitude,
          longitude: point.longitude
        });
      }
    });
  }
  return newPoints;
}
function getAMapPosition(maps2, latitude, longitude) {
  return new maps2.LngLat(longitude, latitude);
}
function getGoogleOrQQMapPosition(maps2, latitude, longitude) {
  return new maps2.LatLng(latitude, longitude);
}
function getMapPosition(maps2, latitude, longitude) {
  return getIsAMap() ? getAMapPosition(maps2, latitude, longitude) : getGoogleOrQQMapPosition(maps2, latitude, longitude);
}
function getLat(latLng) {
  if ("getLat" in latLng) {
    return latLng.getLat();
  } else {
    return latLng.lat();
  }
}
function getLng(latLng) {
  if ("getLng" in latLng) {
    return latLng.getLng();
  } else {
    return latLng.lng();
  }
}
function useMap(props2, rootRef, emit2) {
  const trigger = useCustomEvent(rootRef, emit2);
  const mapRef = ref(null);
  let maps2;
  let map;
  const state2 = reactive({
    latitude: Number(props2.latitude),
    longitude: Number(props2.longitude),
    includePoints: getPoints(props2.includePoints)
  });
  const onMapReadyCallbacks = [];
  let isMapReady;
  function onMapReady(callback) {
    if (isMapReady) {
      callback(map, maps2, trigger);
    } else {
      onMapReadyCallbacks.push(callback);
    }
  }
  function emitMapReady() {
    isMapReady = true;
    onMapReadyCallbacks.forEach((callback) => callback(map, maps2, trigger));
    onMapReadyCallbacks.length = 0;
  }
  let isBoundsReady;
  const onBoundsReadyCallbacks = [];
  function onBoundsReady(callback) {
    if (isBoundsReady) {
      callback();
    } else {
      onMapReadyCallbacks.push(callback);
    }
  }
  const contexts = {};
  function addMapChidlContext(context) {
    contexts[context.id] = context;
  }
  function removeMapChidlContext(context) {
    delete contexts[context.id];
  }
  watch([() => props2.latitude, () => props2.longitude], ([latitudeVlaue, longitudeVlaue]) => {
    const latitude = Number(latitudeVlaue);
    const longitude = Number(longitudeVlaue);
    if (latitude !== state2.latitude || longitude !== state2.longitude) {
      state2.latitude = latitude;
      state2.longitude = longitude;
      if (map) {
        const centerPosition = getMapPosition(maps2, state2.latitude, state2.longitude);
        map.setCenter(centerPosition);
      }
    }
  });
  watch(() => props2.includePoints, (points) => {
    state2.includePoints = getPoints(points);
    if (isBoundsReady) {
      updateBounds();
    }
  }, {
    deep: true
  });
  function emitBoundsReady() {
    isBoundsReady = true;
    onBoundsReadyCallbacks.forEach((callback) => callback());
    onBoundsReadyCallbacks.length = 0;
  }
  function getMapInfo2() {
    const center = map.getCenter();
    return {
      scale: map.getZoom(),
      centerLocation: {
        latitude: getLat(center),
        longitude: getLng(center)
      }
    };
  }
  function updateCenter() {
    const centerPosition = getMapPosition(maps2, state2.latitude, state2.longitude);
    map.setCenter(centerPosition);
  }
  function updateBounds() {
    if (getIsAMap()) {
      const points = [];
      state2.includePoints.forEach((point) => {
        points.push([point.longitude, point.latitude]);
      });
      const bounds = new maps2.Bounds(...points);
      map.setBounds(bounds);
    } else {
      const bounds = new maps2.LatLngBounds();
      state2.includePoints.forEach(({
        latitude,
        longitude
      }) => {
        const latLng = new maps2.LatLng(latitude, longitude);
        bounds.extend(latLng);
      });
      map.fitBounds(bounds);
    }
  }
  function initMap() {
    const mapEl = mapRef.value;
    const center = getMapPosition(maps2, state2.latitude, state2.longitude);
    const event = maps2.event || maps2.Event;
    const map2 = new maps2.Map(mapEl, {
      center,
      zoom: Number(props2.scale),
      // scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      panControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      keyboardShortcuts: false,
      minZoom: 5,
      maxZoom: 18,
      draggable: true
    });
    watch(() => props2.scale, (scale) => {
      map2.setZoom(Number(scale) || 16);
    });
    onBoundsReady(() => {
      if (state2.includePoints.length) {
        updateBounds();
        updateCenter();
      }
    });
    const boundsChangedEvent = event.addListener(map2, "bounds_changed", () => {
      boundsChangedEvent.remove();
      emitBoundsReady();
    });
    event.addListener(map2, "click", () => {
      trigger("tap", {}, {});
      trigger("click", {}, {});
    });
    event.addListener(map2, "dragstart", () => {
      trigger("regionchange", {}, {
        type: "begin",
        causedBy: "gesture"
      });
    });
    event.addListener(map2, "dragend", () => {
      trigger("regionchange", {}, extend({
        type: "end",
        causedBy: "drag"
      }, getMapInfo2()));
    });
    const zoomChangedCallback = () => {
      emit2("update:scale", map2.getZoom());
      trigger("regionchange", {}, extend({
        type: "end",
        causedBy: "scale"
      }, getMapInfo2()));
    };
    event.addListener(map2, "zoom_changed", zoomChangedCallback);
    event.addListener(map2, "zoomend", zoomChangedCallback);
    event.addListener(map2, "center_changed", () => {
      const center2 = map2.getCenter();
      const latitude = getLat(center2);
      const longitude = getLng(center2);
      emit2("update:latitude", latitude);
      emit2("update:longitude", longitude);
    });
    return map2;
  }
  try {
    const id2 = useContextInfo();
    useSubscribe((type, data = {}) => {
      switch (type) {
        case "getCenterLocation":
          onMapReady(() => {
            const center = map.getCenter();
            callOptions(data, {
              latitude: getLat(center),
              longitude: getLng(center),
              errMsg: `${type}:ok`
            });
          });
          break;
        case "moveToLocation":
          {
            let latitude = Number(data.latitude);
            let longitude = Number(data.longitude);
            if (!latitude || !longitude) {
              const context = contexts[CONTEXT_ID];
              if (context) {
                latitude = context.state.latitude;
                longitude = context.state.longitude;
              }
            }
            if (latitude && longitude) {
              state2.latitude = latitude;
              state2.longitude = longitude;
              if (map) {
                const centerPosition = getMapPosition(maps2, latitude, longitude);
                map.setCenter(centerPosition);
              }
              onMapReady(() => {
                callOptions(data, `${type}:ok`);
              });
            } else {
              callOptions(data, `${type}:fail`);
            }
          }
          break;
        case "translateMarker":
          onMapReady(() => {
            const context = contexts[data.markerId];
            if (context) {
              try {
                context.translate(data);
              } catch (error) {
                callOptions(data, `${type}:fail ${error.message}`);
              }
              callOptions(data, `${type}:ok`);
            } else {
              callOptions(data, `${type}:fail not found`);
            }
          });
          break;
        case "includePoints":
          state2.includePoints = getPoints(data.includePoints);
          if (isBoundsReady || getIsAMap()) {
            updateBounds();
          }
          onBoundsReady(() => {
            callOptions(data, `${type}:ok`);
          });
          break;
        case "getRegion":
          onBoundsReady(() => {
            const latLngBounds = map.getBounds();
            const southwest = latLngBounds.getSouthWest();
            const northeast = latLngBounds.getNorthEast();
            callOptions(data, {
              southwest: {
                latitude: getLat(southwest),
                longitude: getLng(southwest)
              },
              northeast: {
                latitude: getLat(northeast),
                longitude: getLng(northeast)
              },
              errMsg: `${type}:ok`
            });
          });
          break;
        case "getScale":
          onMapReady(() => {
            callOptions(data, {
              scale: map.getZoom(),
              errMsg: `${type}:ok`
            });
          });
          break;
      }
    }, id2, true);
  } catch (error) {
  }
  onMounted(() => {
    loadMaps(props2.libraries, (result) => {
      maps2 = result;
      map = initMap();
      emitMapReady();
      trigger("updated", {}, {});
    });
  });
  provide("onMapReady", onMapReady);
  provide("addMapChidlContext", addMapChidlContext);
  provide("removeMapChidlContext", removeMapChidlContext);
  return {
    state: state2,
    mapRef,
    trigger
  };
}
const Map$1 = /* @__PURE__ */ defineBuiltInComponent({
  name: "Map",
  props: props$2,
  emits: ["markertap", "labeltap", "callouttap", "controltap", "regionchange", "tap", "click", "updated", "update:scale", "update:latitude", "update:longitude"],
  setup(props2, {
    emit: emit2,
    slots
  }) {
    const rootRef = ref(null);
    const {
      mapRef,
      trigger
    } = useMap(props2, rootRef, emit2);
    return () => {
      return createVNode("uni-map", {
        "ref": rootRef,
        "id": props2.id
      }, [createVNode("div", {
        "ref": mapRef,
        "style": "width: 100%; height: 100%; position: relative; overflow: hidden"
      }, null, 512), props2.markers.map((item) => createVNode(MapMarker, mergeProps({
        "key": item.id
      }, item), null, 16)), props2.polyline.map((item) => createVNode(MapPolyline, item, null, 16)), props2.circles.map((item) => createVNode(MapCircle, item, null, 16)), props2.controls.map((item) => createVNode(MapControl, mergeProps(item, {
        "trigger": trigger
      }), null, 16, ["trigger"])), props2.showLocation && createVNode(MapLocation, null, null), props2.polygons.map((item) => createVNode(MapPolygon, item, null, 16)), createVNode("div", {
        "style": "position: absolute;top: 0;width: 100%;height: 100%;overflow: hidden;pointer-events: none;"
      }, [slots.default && slots.default()])], 8, ["id"]);
    };
  }
});
const UniViewJSBridge$1 = /* @__PURE__ */ extend(ViewJSBridge, {
  publishHandler(event, args, pageId) {
    UniServiceJSBridge$1.subscribeHandler(event, args, pageId);
  }
});
const UniServiceJSBridge$1 = /* @__PURE__ */ extend(ServiceJSBridge, {
  publishHandler(event, args, pageId) {
    UniViewJSBridge$1.subscribeHandler(event, args, pageId);
  }
});
const PageHead = /* @__PURE__ */ defineSystemComponent({
  name: "PageHead",
  setup() {
    const headRef = ref(null);
    const pageMeta = usePageMeta();
    const navigationBar = reactive(parseTheme(pageMeta.navigationBar));
    const {
      clazz: clazz2,
      style
    } = usePageHead(navigationBar);
    onThemeChange(() => {
      const _navigationBar = parseTheme(pageMeta.navigationBar);
      navigationBar.backgroundColor = _navigationBar.backgroundColor;
      navigationBar.titleColor = _navigationBar.titleColor;
    });
    return () => {
      const backButtonTsx = createBackButtonTsx(navigationBar, pageMeta.isQuit);
      const leftButtonsTsx = [];
      const rightButtonsTsx = [];
      const type = navigationBar.type || "default";
      const placeholderTsx = type !== "transparent" && type !== "float" && createVNode("div", {
        "class": {
          "uni-placeholder": true,
          "uni-placeholder-titlePenetrate": navigationBar.titlePenetrate
        }
      }, null, 2);
      return createVNode("uni-page-head", {
        "uni-page-head-type": type
      }, [createVNode("div", {
        "ref": headRef,
        "class": clazz2.value,
        "style": style.value
      }, [createVNode("div", {
        "class": "uni-page-head-hd"
      }, [backButtonTsx, ...leftButtonsTsx]), createPageHeadBdTsx(navigationBar), createVNode("div", {
        "class": "uni-page-head-ft"
      }, [...rightButtonsTsx])], 6), placeholderTsx], 8, ["uni-page-head-type"]);
    };
  }
});
function createBackButtonTsx(navigationBar, isQuit) {
  if (!isQuit) {
    return createVNode("div", {
      "class": "uni-page-head-btn",
      "onClick": onPageHeadBackButton
    }, [createSvgIconVNode(ICON_PATH_BACK, navigationBar.type === "transparent" ? "#fff" : navigationBar.titleColor, 27)], 8, ["onClick"]);
  }
}
function createPageHeadBdTsx(navigationBar, searchInput) {
  {
    return createPageHeadTitleTextTsx(navigationBar);
  }
}
function createPageHeadTitleTextTsx({
  type,
  loading,
  titleSize,
  titleText,
  titleImage
}) {
  return createVNode("div", {
    "class": "uni-page-head-bd"
  }, [createVNode("div", {
    "style": {
      fontSize: titleSize,
      opacity: type === "transparent" ? 0 : 1
    },
    "class": "uni-page-head__title"
  }, [loading ? createVNode("i", {
    "class": "uni-loading"
  }, null) : titleImage ? createVNode("img", {
    "src": titleImage,
    "class": "uni-page-head__title_image"
  }, null, 8, ["src"]) : titleText], 4)]);
}
function onPageHeadBackButton() {
  if (getCurrentPages$1().length === 1) {
    reLaunch({
      url: "/"
    });
  } else {
    navigateBack({
      from: "backbutton",
      success() {
      }
      // 传入空方法，避免返回Promise，因为onBackPress可能导致fail
    });
  }
}
function usePageHead(navigationBar) {
  const clazz2 = computed(() => {
    const {
      type,
      titlePenetrate,
      shadowColorType
    } = navigationBar;
    const clazz3 = {
      "uni-page-head": true,
      "uni-page-head-transparent": type === "transparent",
      "uni-page-head-titlePenetrate": titlePenetrate === "YES",
      "uni-page-head-shadow": !!shadowColorType
    };
    if (shadowColorType) {
      clazz3[`uni-page-head-shadow-${shadowColorType}`] = true;
    }
    return clazz3;
  });
  const style = computed(() => {
    const backgroundColor = navigationBar.backgroundColor;
    return {
      backgroundColor,
      color: navigationBar.titleColor,
      transitionDuration: navigationBar.duration,
      transitionTimingFunction: navigationBar.timingFunc
    };
  });
  return {
    clazz: clazz2,
    style
  };
}
const PageBody = defineSystemComponent({
  name: "PageBody",
  setup(props2, ctx) {
    const pageRefresh = null;
    return () => {
      const pageRefreshTsx = false;
      return createVNode(Fragment, null, [pageRefreshTsx, createVNode("uni-page-wrapper", pageRefresh, [createVNode("uni-page-body", null, [renderSlot(ctx.slots, "default")])], 16)]);
    };
  }
});
defineSystemComponent({
  name: "Page",
  setup(_props, ctx) {
    const pageMeta = providePageMeta(getStateId());
    const navigationBar = pageMeta.navigationBar;
    useDocumentTitle(pageMeta);
    return () => createVNode(
      "uni-page",
      { "data-page": pageMeta.route },
      navigationBar.style !== "custom" ? [createVNode(PageHead), createPageBodyVNode(ctx)] : [createPageBodyVNode(ctx)]
    );
  }
});
function createPageBodyVNode(ctx) {
  return openBlock(), createBlock(
    PageBody,
    { key: 0 },
    {
      default: withCtx(() => [renderSlot(ctx.slots, "page")]),
      _: 3
    }
  );
}
export {
  $emit as $,
  showLoading as A,
  hideLoading as B,
  getLocale as C,
  uploadFile as D,
  request as E,
  getStorage as F,
  makePhoneCall as G,
  hideKeyboard as H,
  Input as I,
  getSystemInfoSync as J,
  __wapNavigateTo as K,
  __wapRedirectTo as L,
  __wapSwitchTab as M,
  __wapReLaunch as N,
  ON_SHOW as O,
  PickerViewColumn as P,
  startPullDownRefresh as Q,
  stopPullDownRefresh as R,
  ScrollView as S,
  $on as T,
  $off as U,
  createVideoContext as V,
  index$d as W,
  SwiperItem as X,
  Swiper as Y,
  chooseFile as Z,
  chooseVideo as _,
  index$i as a,
  chooseImage as a0,
  createIntersectionObserver as a1,
  index$l as a2,
  Map$1 as a3,
  getLocation as a4,
  openLocation as a5,
  removeStorage as a6,
  index$o as a7,
  index$q as b,
  createSelectorQuery as c,
  index$x as d,
  closePreviewImage as e,
  previewImage as f,
  index$h as g,
  PickerView as h,
  index$g as i,
  getStorageSync as j,
  setStorage as k,
  __wapSetNavigationBarTitle as l,
  __wapGetCurrentPages as m,
  setStorageSync as n,
  showModal as o,
  __wapPageScrollTo as p,
  __wapNavigateBack as q,
  isString as r,
  showToast as s,
  ON_HIDE as t,
  upx2px as u,
  ON_LOAD as v,
  ON_UNLOAD as w,
  ON_PAGE_SCROLL as x,
  ON_REACH_BOTTOM as y,
  removeStorageSync as z
};
