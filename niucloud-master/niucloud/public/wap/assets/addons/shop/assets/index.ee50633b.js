/* __addonChunkWindiInjected:index_ee50633b */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("index_ee50633b",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.h-\\[28rpx\\]{\n  height: 0.875rem;\n}.text-\\[22rpx\\]{\n  font-size: 0.6875rem;\n}.mr-\\[10rpx\\]{\n  margin-right: 0.3125rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.mt-\\[50rpx\\]{\n  margin-top: 1.5625rem;\n}.max-h-\\[60rpx\\]{\n  max-height: 1.875rem;\n}.pt-\\[20rpx\\]{\n  padding-top: 0.625rem;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.text-\\[\\#fff\\]{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.w-full{\n  width: 100%;\n}.w-\\[28rpx\\]{\n  width: 0.875rem;\n}.z-1{\n  z-index: 1;\n}");
/* __addonChunkCssInjected:565c1aba */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("565c1aba",".addon-wrap-565c1aba .ignore-draggable-element.decorate:hover:before,.addon-wrap-565c1aba .draggable-element.decorate:hover:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border:.125rem dotted var(--primary-color);z-index:10;pointer-events:none;cursor:move}.addon-wrap-565c1aba .ignore-draggable-element.decorate.selected:before,.addon-wrap-565c1aba .draggable-element.decorate.selected:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border:.125rem solid var(--primary-color);z-index:10;pointer-events:none;cursor:move}.addon-wrap-565c1aba .diy-component-hidden{opacity:.45}");
import { i as index$g, z as removeStorageSync, j as getStorageSync, n as setStorageSync, b as index$q, a as index$i } from "./uni-h5.es.7545a186.js";
import { reactive, defineComponent, h, getCurrentInstance, inject, ref, nextTick, onUnmounted, useAttrs, shallowRef, computed, onMounted, watch, unref, openBlock, createBlock, resolveDynamicComponent, mergeProps, createCommentVNode, withCtx, normalizeStyle, createTextVNode, createElementBlock, toDisplayString, createElementVNode, withModifiers, createVNode, Fragment, renderList, withDirectives, normalizeClass, vShow } from "/wap/assets/shared/vue.js";
import { A as isObjectLike, B as baseGetTag, C as isObject, D as isArrayLike, E as isIndex, F as eq, G as ensureAddonProdReady, H as getInstalledAddonKeys, I as markAddonInstalled, J as loadAddonModule, K as isAddonInstalled, L as ensureAddonStyles, a as useSystemStore, k as useDiyStore, i as img, r as redirect } from "./common.f536f441.js";
import { g as getRegisteredAddonModule } from "./entry.172aa559.js";
import { r as resolveEasycom, d as onShow, e as onHide, b as onPageScroll } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_4$1 } from "./tabbar.5b67b6e8.js";
import { _ as __easycom_4 } from "./top-tabbar.e23374bd.js";
import "./resize-sensor.8ba09891.js";
import "./text.99ce2b32.js";
import { _ as __easycom_7 } from "./u-popup.37f81450.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function isIterateeCall(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var nativeCeil = Math.ceil, nativeMax = Math.max;
function baseRange(start, end, step, fromRight) {
  var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
  while (length--) {
    result[fromRight ? length : ++index2] = start;
    start += step;
  }
  return result;
}
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
      end = step = void 0;
    }
    start = toFinite(start);
    if (end === void 0) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}
var range = createRange();
const range$1 = range;
const DIY_COMPONENT_MAP = {
  "ActiveCube": { "vueComponentName": "ActiveCube", "scope": "app", "folder": "active-cube", "scrollBool": false, "formRef": false },
  "Article": { "vueComponentName": "Article", "scope": "addon", "addonKey": "cms", "folder": "article", "scrollBool": true, "formRef": true },
  "CardList": { "vueComponentName": "CardList", "scope": "addon", "addonKey": "home_service", "folder": "card-list", "scrollBool": true, "formRef": true },
  "CarouselSearch": { "vueComponentName": "CarouselSearch", "scope": "app", "folder": "carousel-search", "scrollBool": true, "formRef": false },
  "FenxiaoGoodsList": { "vueComponentName": "FenxiaoGoodsList", "scope": "addon", "addonKey": "shop_fenxiao", "folder": "fenxiao-goods-list", "scrollBool": true, "formRef": true },
  "FloatBtn": { "vueComponentName": "FloatBtn", "scope": "app", "folder": "float-btn", "scrollBool": false, "formRef": false },
  "FloatBtnCustomer": { "vueComponentName": "FloatBtnCustomer", "scope": "app", "folder": "float-btn-customer", "scrollBool": false, "formRef": false },
  "FormAddress": { "vueComponentName": "FormAddress", "scope": "app", "folder": "form-address", "scrollBool": false, "formRef": true },
  "FormCheckbox": { "vueComponentName": "FormCheckbox", "scope": "app", "folder": "form-checkbox", "scrollBool": false, "formRef": true },
  "FormDate": { "vueComponentName": "FormDate", "scope": "app", "folder": "form-date", "scrollBool": false, "formRef": true },
  "FormDateScope": { "vueComponentName": "FormDateScope", "scope": "app", "folder": "form-date-scope", "scrollBool": false, "formRef": true },
  "FormEmail": { "vueComponentName": "FormEmail", "scope": "app", "folder": "form-email", "scrollBool": false, "formRef": true },
  "FormFile": { "vueComponentName": "FormFile", "scope": "app", "folder": "form-file", "scrollBool": false, "formRef": true },
  "FormIdentity": { "vueComponentName": "FormIdentity", "scope": "app", "folder": "form-identity", "scrollBool": false, "formRef": true },
  "FormIdentityPrivacy": { "vueComponentName": "FormIdentityPrivacy", "scope": "app", "folder": "form-identity-privacy", "scrollBool": false, "formRef": true },
  "FormImage": { "vueComponentName": "FormImage", "scope": "app", "folder": "form-image", "scrollBool": false, "formRef": true },
  "FormInput": { "vueComponentName": "FormInput", "scope": "app", "folder": "form-input", "scrollBool": false, "formRef": true },
  "FormLocation": { "vueComponentName": "FormLocation", "scope": "app", "folder": "form-location", "scrollBool": false, "formRef": true },
  "FormMobile": { "vueComponentName": "FormMobile", "scope": "app", "folder": "form-mobile", "scrollBool": false, "formRef": true },
  "FormNumber": { "vueComponentName": "FormNumber", "scope": "app", "folder": "form-number", "scrollBool": false, "formRef": true },
  "FormPrivacy": { "vueComponentName": "FormPrivacy", "scope": "app", "folder": "form-privacy", "scrollBool": false, "formRef": true },
  "FormPrivacyPop": { "vueComponentName": "FormPrivacyPop", "scope": "app", "folder": "form-privacy-pop", "scrollBool": false, "formRef": true },
  "FormRadio": { "vueComponentName": "FormRadio", "scope": "app", "folder": "form-radio", "scrollBool": false, "formRef": true },
  "FormSubmit": { "vueComponentName": "FormSubmit", "scope": "app", "folder": "form-submit", "scrollBool": false, "formRef": false },
  "FormTable": { "vueComponentName": "FormTable", "scope": "app", "folder": "form-table", "scrollBool": false, "formRef": true },
  "FormTextarea": { "vueComponentName": "FormTextarea", "scope": "app", "folder": "form-textarea", "scrollBool": false, "formRef": true },
  "FormTime": { "vueComponentName": "FormTime", "scope": "app", "folder": "form-time", "scrollBool": false, "formRef": true },
  "FormTimeScope": { "vueComponentName": "FormTimeScope", "scope": "app", "folder": "form-time-scope", "scrollBool": false, "formRef": true },
  "FormVideo": { "vueComponentName": "FormVideo", "scope": "app", "folder": "form-video", "scrollBool": false, "formRef": true },
  "FormWechatName": { "vueComponentName": "FormWechatName", "scope": "app", "folder": "form-wechat-name", "scrollBool": false, "formRef": true },
  "FriendHelpActivityGoodsDetailBasicInfo": { "vueComponentName": "FriendHelpActivityGoodsDetailBasicInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailBottom": { "vueComponentName": "FriendHelpActivityGoodsDetailBottom", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailDesc": { "vueComponentName": "FriendHelpActivityGoodsDetailDesc", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-desc", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailFriendHelpInfo": { "vueComponentName": "FriendHelpActivityGoodsDetailFriendHelpInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-friend-help-info", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailGameplay": { "vueComponentName": "FriendHelpActivityGoodsDetailGameplay", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-gameplay", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailGoodsInfo": { "vueComponentName": "FriendHelpActivityGoodsDetailGoodsInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-goods-info", "scrollBool": true, "formRef": true },
  "FriendHelpActivityGoodsDetailProgress": { "vueComponentName": "FriendHelpActivityGoodsDetailProgress", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-activity-goods-detail-progress", "scrollBool": true, "formRef": true },
  "FriendHelpCarousel": { "vueComponentName": "FriendHelpCarousel", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-carousel", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailBasicInfo": { "vueComponentName": "FriendHelpGoodsDetailBasicInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailBottom": { "vueComponentName": "FriendHelpGoodsDetailBottom", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailDesc": { "vueComponentName": "FriendHelpGoodsDetailDesc", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-desc", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailGameplay": { "vueComponentName": "FriendHelpGoodsDetailGameplay", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-gameplay", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailProgress": { "vueComponentName": "FriendHelpGoodsDetailProgress", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-progress", "scrollBool": true, "formRef": true },
  "FriendHelpGoodsDetailPurchaseService": { "vueComponentName": "FriendHelpGoodsDetailPurchaseService", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-goods-detail-purchase-service", "scrollBool": true, "formRef": true },
  "FriendHelpHot": { "vueComponentName": "FriendHelpHot", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-hot", "scrollBool": true, "formRef": true },
  "FriendHelpList": { "vueComponentName": "FriendHelpList", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-list", "scrollBool": true, "formRef": true },
  "FriendHelpMemberInfo": { "vueComponentName": "FriendHelpMemberInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-member-info", "scrollBool": true, "formRef": true },
  "FriendHelpOrderInfo": { "vueComponentName": "FriendHelpOrderInfo", "scope": "addon", "addonKey": "friend_help", "folder": "friend-help-order-info", "scrollBool": true, "formRef": true },
  "GiftcardList": { "vueComponentName": "GiftcardList", "scope": "addon", "addonKey": "shop_giftcard", "folder": "giftcard-list", "scrollBool": true, "formRef": true },
  "GoodsCoupon": { "vueComponentName": "GoodsCoupon", "scope": "addon", "addonKey": "shop", "folder": "goods-coupon", "scrollBool": true, "formRef": true },
  "GoodsList": { "vueComponentName": "GoodsList", "scope": "addon", "addonKey": "shop", "folder": "goods-list", "scrollBool": true, "formRef": true },
  "GraphicNav": { "vueComponentName": "GraphicNav", "scope": "app", "folder": "graphic-nav", "scrollBool": false, "formRef": false },
  "HomeServiceBanner": { "vueComponentName": "HomeServiceBanner", "scope": "addon", "addonKey": "home_service", "folder": "homeService-banner", "scrollBool": true, "formRef": true },
  "HomeServiceCard": { "vueComponentName": "HomeServiceCard", "scope": "addon", "addonKey": "home_service", "folder": "homeService-card", "scrollBool": true, "formRef": true },
  "HomeServiceCardList": { "vueComponentName": "HomeServiceCardList", "scope": "addon", "addonKey": "home_service", "folder": "homeService-cardList", "scrollBool": true, "formRef": true },
  "HomeServiceCarouselSearch": { "vueComponentName": "HomeServiceCarouselSearch", "scope": "addon", "addonKey": "home_service", "folder": "homeService-carousel-search", "scrollBool": true, "formRef": true },
  "HomeServiceGoodsList": { "vueComponentName": "HomeServiceGoodsList", "scope": "addon", "addonKey": "home_service", "folder": "homeService-goods-list", "scrollBool": true, "formRef": true },
  "HomeServiceGuarantee": { "vueComponentName": "HomeServiceGuarantee", "scope": "addon", "addonKey": "home_service", "folder": "homeService-guarantee", "scrollBool": true, "formRef": true },
  "HomeServiceLowCost": { "vueComponentName": "HomeServiceLowCost", "scope": "addon", "addonKey": "home_service", "folder": "homeService-lowCost", "scrollBool": true, "formRef": true },
  "HomeServiceManyGoodsList": { "vueComponentName": "HomeServiceManyGoodsList", "scope": "addon", "addonKey": "home_service", "folder": "homeService-manyGoodsList", "scrollBool": true, "formRef": true },
  "HomeServiceMemberInfo": { "vueComponentName": "HomeServiceMemberInfo", "scope": "addon", "addonKey": "home_service", "folder": "homeService-member-info", "scrollBool": true, "formRef": true },
  "HomeServiceOrderInfo": { "vueComponentName": "HomeServiceOrderInfo", "scope": "addon", "addonKey": "home_service", "folder": "homeService-order-info", "scrollBool": true, "formRef": true },
  "HomeServicePanicBuying": { "vueComponentName": "HomeServicePanicBuying", "scope": "addon", "addonKey": "home_service", "folder": "homeService-panicBuying", "scrollBool": true, "formRef": true },
  "HomeServiceRubikCube": { "vueComponentName": "HomeServiceRubikCube", "scope": "addon", "addonKey": "home_service", "folder": "homeService-rubikCube", "scrollBool": true, "formRef": true },
  "HomeServiceSearch": { "vueComponentName": "HomeServiceSearch", "scope": "addon", "addonKey": "home_service", "folder": "homeService-search", "scrollBool": true, "formRef": true },
  "HomeServiceSettle": { "vueComponentName": "HomeServiceSettle", "scope": "addon", "addonKey": "home_service", "folder": "homeService-settle", "scrollBool": true, "formRef": true },
  "HomeServiceSubguarantee": { "vueComponentName": "HomeServiceSubguarantee", "scope": "addon", "addonKey": "home_service", "folder": "homeService-subguarantee", "scrollBool": true, "formRef": true },
  "HomeServiceTechnician": { "vueComponentName": "HomeServiceTechnician", "scope": "addon", "addonKey": "home_service", "folder": "homeService-technician", "scrollBool": true, "formRef": true },
  "HomeServiceTechnicianList": { "vueComponentName": "HomeServiceTechnicianList", "scope": "addon", "addonKey": "home_service", "folder": "homeService-technician-list", "scrollBool": true, "formRef": true },
  "HomeServiceTechnicianListRecommed": { "vueComponentName": "HomeServiceTechnicianListRecommed", "scope": "addon", "addonKey": "home_service", "folder": "homeService-technician-list-recommed", "scrollBool": true, "formRef": true },
  "HorzBlank": { "vueComponentName": "HorzBlank", "scope": "app", "folder": "horz-blank", "scrollBool": false, "formRef": false },
  "HorzLine": { "vueComponentName": "HorzLine", "scope": "app", "folder": "horz-line", "scrollBool": false, "formRef": false },
  "HotArea": { "vueComponentName": "HotArea", "scope": "app", "folder": "hot-area", "scrollBool": false, "formRef": false },
  "ImageAds": { "vueComponentName": "ImageAds", "scope": "app", "folder": "image-ads", "scrollBool": false, "formRef": false },
  "ManyGoodsList": { "vueComponentName": "ManyGoodsList", "scope": "addon", "addonKey": "shop", "folder": "many-goods-list", "scrollBool": true, "formRef": true },
  "MemberInfo": { "vueComponentName": "MemberInfo", "scope": "app", "folder": "member-info", "scrollBool": false, "formRef": false },
  "MemberLevel": { "vueComponentName": "MemberLevel", "scope": "app", "folder": "member-level", "scrollBool": false, "formRef": false },
  "Notice": { "vueComponentName": "Notice", "scope": "app", "folder": "notice", "scrollBool": false, "formRef": false },
  "O2oGoodsList": { "vueComponentName": "O2oGoodsList", "scope": "addon", "addonKey": "o2o", "folder": "o2o-goods-list", "scrollBool": true, "formRef": true },
  "O2oMemberInfo": { "vueComponentName": "O2oMemberInfo", "scope": "addon", "addonKey": "o2o", "folder": "o2o-member-info", "scrollBool": true, "formRef": true },
  "O2oOrderInfo": { "vueComponentName": "O2oOrderInfo", "scope": "addon", "addonKey": "o2o", "folder": "o2o-order-info", "scrollBool": true, "formRef": true },
  "O2oSearch": { "vueComponentName": "O2oSearch", "scope": "addon", "addonKey": "o2o", "folder": "o2o-search", "scrollBool": true, "formRef": true },
  "O2oTechnician": { "vueComponentName": "O2oTechnician", "scope": "addon", "addonKey": "o2o", "folder": "o2o-technician", "scrollBool": true, "formRef": true },
  "PictureShow": { "vueComponentName": "PictureShow", "scope": "app", "folder": "picture-show", "scrollBool": false, "formRef": false },
  "PintuanActivityGoodsDetailBasicInfo": { "vueComponentName": "PintuanActivityGoodsDetailBasicInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailBottom": { "vueComponentName": "PintuanActivityGoodsDetailBottom", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailDesc": { "vueComponentName": "PintuanActivityGoodsDetailDesc", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-desc", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailGameplay": { "vueComponentName": "PintuanActivityGoodsDetailGameplay", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-gameplay", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailGoodsInfo": { "vueComponentName": "PintuanActivityGoodsDetailGoodsInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-goods-info", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailPintuanInfo": { "vueComponentName": "PintuanActivityGoodsDetailPintuanInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-pintuan-info", "scrollBool": true, "formRef": true },
  "PintuanActivityGoodsDetailProgress": { "vueComponentName": "PintuanActivityGoodsDetailProgress", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-activity-goods-detail-progress", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailBasicInfo": { "vueComponentName": "PintuanGoodsDetailBasicInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailBottom": { "vueComponentName": "PintuanGoodsDetailBottom", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailDesc": { "vueComponentName": "PintuanGoodsDetailDesc", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-desc", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailGameplay": { "vueComponentName": "PintuanGoodsDetailGameplay", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-gameplay", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailProgress": { "vueComponentName": "PintuanGoodsDetailProgress", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-progress", "scrollBool": true, "formRef": true },
  "PintuanGoodsDetailPurchaseService": { "vueComponentName": "PintuanGoodsDetailPurchaseService", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-goods-detail-purchase-service", "scrollBool": true, "formRef": true },
  "PintuanHot": { "vueComponentName": "PintuanHot", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-hot", "scrollBool": true, "formRef": true },
  "PintuanImmediately": { "vueComponentName": "PintuanImmediately", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-immediately", "scrollBool": true, "formRef": true },
  "PintuanLimit": { "vueComponentName": "PintuanLimit", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-limit", "scrollBool": true, "formRef": true },
  "PintuanList": { "vueComponentName": "PintuanList", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-list", "scrollBool": true, "formRef": true },
  "PintuanMemberInfo": { "vueComponentName": "PintuanMemberInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-member-info", "scrollBool": true, "formRef": true },
  "PintuanOrderInfo": { "vueComponentName": "PintuanOrderInfo", "scope": "addon", "addonKey": "pintuan", "folder": "pintuan-order-info", "scrollBool": true, "formRef": true },
  "RelayGoodsList": { "vueComponentName": "RelayGoodsList", "scope": "addon", "addonKey": "relay", "folder": "relay-goods-list", "scrollBool": true, "formRef": true },
  "RichText": { "vueComponentName": "RichText", "scope": "app", "folder": "rich-text", "scrollBool": false, "formRef": false },
  "RubikCube": { "vueComponentName": "RubikCube", "scope": "app", "folder": "rubik-cube", "scrollBool": false, "formRef": false },
  "SeckillActivityGoodsDetailBasicInfo": { "vueComponentName": "SeckillActivityGoodsDetailBasicInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-activity-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "SeckillActivityGoodsDetailBottom": { "vueComponentName": "SeckillActivityGoodsDetailBottom", "scope": "addon", "addonKey": "seckill", "folder": "seckill-activity-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "SeckillActivityGoodsDetailDesc": { "vueComponentName": "SeckillActivityGoodsDetailDesc", "scope": "addon", "addonKey": "seckill", "folder": "seckill-activity-goods-detail-desc", "scrollBool": true, "formRef": true },
  "SeckillActivityGoodsDetailGoodsInfo": { "vueComponentName": "SeckillActivityGoodsDetailGoodsInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-activity-goods-detail-goods-info", "scrollBool": true, "formRef": true },
  "SeckillActivityGoodsDetailSeckillInfo": { "vueComponentName": "SeckillActivityGoodsDetailSeckillInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-activity-goods-detail-seckill-info", "scrollBool": true, "formRef": true },
  "SeckillGoods": { "vueComponentName": "SeckillGoods", "scope": "addon", "addonKey": "seckill", "folder": "seckill-goods", "scrollBool": true, "formRef": true },
  "SeckillGoodsDetailBasicInfo": { "vueComponentName": "SeckillGoodsDetailBasicInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "SeckillGoodsDetailBottom": { "vueComponentName": "SeckillGoodsDetailBottom", "scope": "addon", "addonKey": "seckill", "folder": "seckill-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "SeckillGoodsDetailDesc": { "vueComponentName": "SeckillGoodsDetailDesc", "scope": "addon", "addonKey": "seckill", "folder": "seckill-goods-detail-desc", "scrollBool": true, "formRef": true },
  "SeckillGoodsDetailPurchaseService": { "vueComponentName": "SeckillGoodsDetailPurchaseService", "scope": "addon", "addonKey": "seckill", "folder": "seckill-goods-detail-purchase-service", "scrollBool": true, "formRef": true },
  "SeckillHot": { "vueComponentName": "SeckillHot", "scope": "addon", "addonKey": "seckill", "folder": "seckill-hot", "scrollBool": true, "formRef": true },
  "SeckillMemberInfo": { "vueComponentName": "SeckillMemberInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-member-info", "scrollBool": true, "formRef": true },
  "SeckillOrderInfo": { "vueComponentName": "SeckillOrderInfo", "scope": "addon", "addonKey": "seckill", "folder": "seckill-order-info", "scrollBool": true, "formRef": true },
  "SeckillRubikCube": { "vueComponentName": "SeckillRubikCube", "scope": "addon", "addonKey": "seckill", "folder": "seckill-rubik-cube", "scrollBool": true, "formRef": true },
  "SeckillSpecialOffer": { "vueComponentName": "SeckillSpecialOffer", "scope": "addon", "addonKey": "seckill", "folder": "seckill-special-offer", "scrollBool": true, "formRef": true },
  "ShopExchangeGoods": { "vueComponentName": "ShopExchangeGoods", "scope": "addon", "addonKey": "shop", "folder": "shop-exchange-goods", "scrollBool": true, "formRef": true },
  "ShopExchangeInfo": { "vueComponentName": "ShopExchangeInfo", "scope": "addon", "addonKey": "shop", "folder": "shop-exchange-info", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailAttr": { "vueComponentName": "ShopGoodsDetailAttr", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-attr", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailBasicInfo": { "vueComponentName": "ShopGoodsDetailBasicInfo", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-basic-info", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailBottom": { "vueComponentName": "ShopGoodsDetailBottom", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-bottom", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailDesc": { "vueComponentName": "ShopGoodsDetailDesc", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-desc", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailEvaluate": { "vueComponentName": "ShopGoodsDetailEvaluate", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-evaluate", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailPurchaseService": { "vueComponentName": "ShopGoodsDetailPurchaseService", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-purchase-service", "scrollBool": true, "formRef": true },
  "ShopGoodsDetailSow": { "vueComponentName": "ShopGoodsDetailSow", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-detail-sow", "scrollBool": true, "formRef": true },
  "ShopGoodsHot": { "vueComponentName": "ShopGoodsHot", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-hot", "scrollBool": true, "formRef": true },
  "ShopGoodsRanking": { "vueComponentName": "ShopGoodsRanking", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-ranking", "scrollBool": true, "formRef": true },
  "ShopGoodsRecommend": { "vueComponentName": "ShopGoodsRecommend", "scope": "addon", "addonKey": "shop", "folder": "shop-goods-recommend", "scrollBool": true, "formRef": true },
  "ShopMemberInfo": { "vueComponentName": "ShopMemberInfo", "scope": "addon", "addonKey": "shop", "folder": "shop-member-info", "scrollBool": true, "formRef": true },
  "ShopNewcomer": { "vueComponentName": "ShopNewcomer", "scope": "addon", "addonKey": "shop", "folder": "shop-newcomer", "scrollBool": true, "formRef": true },
  "ShopOrderInfo": { "vueComponentName": "ShopOrderInfo", "scope": "addon", "addonKey": "shop", "folder": "shop-order-info", "scrollBool": true, "formRef": true },
  "ShopSearch": { "vueComponentName": "ShopSearch", "scope": "addon", "addonKey": "shop", "folder": "shop-search", "scrollBool": true, "formRef": true },
  "SingleRecommend": { "vueComponentName": "SingleRecommend", "scope": "addon", "addonKey": "shop", "folder": "single-recommend", "scrollBool": true, "formRef": true },
  "Text": { "vueComponentName": "Text", "scope": "app", "folder": "text", "scrollBool": false, "formRef": false },
  "TourismHotel": { "vueComponentName": "TourismHotel", "scope": "addon", "addonKey": "tourism", "folder": "tourism-hotel", "scrollBool": true, "formRef": true },
  "TourismTickets": { "vueComponentName": "TourismTickets", "scope": "addon", "addonKey": "tourism", "folder": "tourism-tickets", "scrollBool": true, "formRef": true },
  "TourismTravel": { "vueComponentName": "TourismTravel", "scope": "addon", "addonKey": "tourism", "folder": "tourism-travel", "scrollBool": true, "formRef": true },
  "VipcardCard": { "vueComponentName": "VipcardCard", "scope": "addon", "addonKey": "vipcard", "folder": "vipcard-card", "scrollBool": true, "formRef": true },
  "VipcardReserve": { "vueComponentName": "VipcardReserve", "scope": "addon", "addonKey": "vipcard", "folder": "vipcard-reserve", "scrollBool": true, "formRef": true },
  "VipcardStore": { "vueComponentName": "VipcardStore", "scope": "addon", "addonKey": "vipcard", "folder": "vipcard-store", "scrollBool": true, "formRef": true }
};
const runtimeDiyMap = reactive({});
const kebabToPascal = (s) => s.split(/[-_/]/).filter(Boolean).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
function registeredAddonKeys() {
  const g = globalThis;
  return Object.keys(g.__WAP_ADDON_MODULES__ || {});
}
let scanPromise = null;
async function ensureRuntimeDiyRegistry() {
  if (scanPromise)
    return scanPromise;
  scanPromise = (async () => {
    await ensureAddonProdReady();
    const keys = new Set(getInstalledAddonKeys());
    for (const k of registeredAddonKeys())
      keys.add(k);
    await Promise.all(
      [...keys].map(async (key) => {
        markAddonInstalled(key);
        try {
          const mod = await loadAddonModule(key);
          const diy = mod == null ? void 0 : mod.diyComponents;
          if (!diy)
            return;
          for (const folder of Object.keys(diy)) {
            const vueComponentName = kebabToPascal(folder);
            if (!runtimeDiyMap[vueComponentName]) {
              runtimeDiyMap[vueComponentName] = {
                vueComponentName,
                scope: "addon",
                addonKey: key,
                folder
              };
            }
          }
        } catch (e) {
          console.warn("[diy-runtime] 加载插件装修组件失败:", key, e);
        }
      })
    );
  })().finally(() => {
    scanPromise = null;
  });
  return scanPromise;
}
function resolveRuntimeDiyMeta(componentName) {
  var _a;
  if (!componentName)
    return null;
  if (runtimeDiyMap[componentName])
    return runtimeDiyMap[componentName];
  const modules = globalThis.__WAP_ADDON_MODULES__ || {};
  for (const key of Object.keys(modules)) {
    const diy = (_a = modules[key]) == null ? void 0 : _a.diyComponents;
    if (!diy)
      continue;
    if (diy[componentName]) {
      const meta = { vueComponentName: componentName, scope: "addon", addonKey: key, folder: componentName };
      runtimeDiyMap[componentName] = meta;
      return meta;
    }
    for (const folder of Object.keys(diy)) {
      if (kebabToPascal(folder) === componentName) {
        const meta = { vueComponentName: componentName, scope: "addon", addonKey: key, folder };
        runtimeDiyMap[componentName] = meta;
        return meta;
      }
    }
  }
  return null;
}
{
  const builtinKeys = /* @__PURE__ */ new Set();
  for (const meta of Object.values(DIY_COMPONENT_MAP)) {
    if (meta.addonKey && getRegisteredAddonModule(meta.addonKey))
      builtinKeys.add(meta.addonKey);
  }
  for (const key of builtinKeys)
    markAddonInstalled(key);
}
function resolveDiyMeta$1(componentName) {
  if (!componentName)
    return null;
  return DIY_COMPONENT_MAP[componentName] ?? resolveRuntimeDiyMeta(componentName);
}
function resolveDiyMeta(componentName) {
  return resolveDiyMeta$1(componentName);
}
const appDiyLoaders = /* @__PURE__ */ Object.assign({ "../app/components/diy/active-cube/index.vue": () => import("./app-components-diy-active-cube-index.e54ade86.js"), "../app/components/diy/carousel-search/index.vue": () => import("./app-components-diy-carousel-search-index.d2e44333.js"), "../app/components/diy/float-btn-customer/index.vue": () => import("./app-components-diy-float-btn-customer-index.759902ca.js"), "../app/components/diy/float-btn/index.vue": () => import("./app-components-diy-float-btn-index.901217cd.js"), "../app/components/diy/form-address/index.vue": () => import("./app-components-diy-form-address-index.0c6ff425.js"), "../app/components/diy/form-checkbox/index.vue": () => import("./app-components-diy-form-checkbox-index.f9ffbd81.js"), "../app/components/diy/form-date-scope/index.vue": () => import("./app-components-diy-form-date-scope-index.6e1283d9.js"), "../app/components/diy/form-date/index.vue": () => import("./app-components-diy-form-date-index.76e0517e.js"), "../app/components/diy/form-email/index.vue": () => import("./app-components-diy-form-email-index.0774611b.js"), "../app/components/diy/form-file/index.vue": () => import("./app-components-diy-form-file-index.809c2eae.js"), "../app/components/diy/form-identity-privacy/index.vue": () => import("./app-components-diy-form-identity-privacy-index.dd915035.js"), "../app/components/diy/form-identity/index.vue": () => import("./app-components-diy-form-identity-index.70083e98.js"), "../app/components/diy/form-image/index.vue": () => import("./app-components-diy-form-image-index.936e71a0.js"), "../app/components/diy/form-input/index.vue": () => import("./app-components-diy-form-input-index.33caefe5.js"), "../app/components/diy/form-location/index.vue": () => import("./app-components-diy-form-location-index.fef71f76.js"), "../app/components/diy/form-mobile/index.vue": () => import("./app-components-diy-form-mobile-index.d2fd0f5e.js"), "../app/components/diy/form-number/index.vue": () => import("./app-components-diy-form-number-index.50eb844a.js"), "../app/components/diy/form-privacy-pop/index.vue": () => import("./app-components-diy-form-privacy-pop-index.175e616e.js"), "../app/components/diy/form-privacy/index.vue": () => import("./app-components-diy-form-privacy-index.f687467a.js"), "../app/components/diy/form-radio/index.vue": () => import("./app-components-diy-form-radio-index.73436b12.js"), "../app/components/diy/form-submit/index.vue": () => import("./app-components-diy-form-submit-index.82ad6b63.js"), "../app/components/diy/form-table/index.vue": () => import("./app-components-diy-form-table-index.496e6cce.js"), "../app/components/diy/form-textarea/index.vue": () => import("./app-components-diy-form-textarea-index.e0f951dc.js"), "../app/components/diy/form-time-scope/index.vue": () => import("./app-components-diy-form-time-scope-index.ded629e4.js"), "../app/components/diy/form-time/index.vue": () => import("./app-components-diy-form-time-index.e0e51eda.js"), "../app/components/diy/form-video/index.vue": () => import("./app-components-diy-form-video-index.22cab086.js"), "../app/components/diy/form-wechat-name/index.vue": () => import("./app-components-diy-form-wechat-name-index.51153a42.js"), "../app/components/diy/graphic-nav/index.vue": () => import("./app-components-diy-graphic-nav-index.5feecfcc.js"), "../app/components/diy/horz-blank/index.vue": () => import("./app-components-diy-horz-blank-index.b8e4a2d5.js"), "../app/components/diy/horz-line/index.vue": () => import("./app-components-diy-horz-line-index.b65ddf95.js"), "../app/components/diy/hot-area/index.vue": () => import("./app-components-diy-hot-area-index.7923a96e.js"), "../app/components/diy/image-ads/index.vue": () => import("./app-components-diy-image-ads-index.7641a651.js"), "../app/components/diy/member-info/index.vue": () => import("./app-components-diy-member-info-index.a9d2bc30.js"), "../app/components/diy/member-level/index.vue": () => import("./app-components-diy-member-level-index.9d4fc4fa.js"), "../app/components/diy/notice/index.vue": () => import("./app-components-diy-notice-index.63218adb.js"), "../app/components/diy/picture-show/index.vue": () => import("./app-components-diy-picture-show-index.d0ac4ace.js"), "../app/components/diy/rich-text/index.vue": () => import("./app-components-diy-rich-text-index.9c8e3dd3.js"), "../app/components/diy/rubik-cube/index.vue": () => import("./app-components-diy-rubik-cube-index.f3d6e089.js"), "../app/components/diy/text/index.vue": () => import("./app-components-diy-text-index.6398e107.js") });
function appDiyGlobKey(folder) {
  return `../app/components/diy/${folder}/index.vue`;
}
function getAppDiyLoader(folder) {
  return appDiyLoaders[appDiyGlobKey(folder)];
}
const ADDON_PAGE_QUERY_KEY = Symbol("addonPageQuery");
const BRIDGE_ADDON_INSTANCE_KEY = Symbol("bridgeAddonInstance");
const WRAPPED = Symbol("addonLifecycleWrapped");
function addonWrapClass(scopeId) {
  if (!(scopeId == null ? void 0 : scopeId.startsWith("data-v-")))
    return "";
  return `addon-wrap-${scopeId.slice("data-v-".length)}`;
}
function runWithDeferredUniHooks(instance, fn) {
  const inst = instance;
  const savedPageInstance = inst.$pageInstance;
  inst.$pageInstance = instance;
  try {
    return fn();
  } finally {
    inst.$pageInstance = savedPageInstance;
  }
}
function invokeAddonPageHooks(instance, hook, args) {
  const hooks = instance[hook];
  if (!Array.isArray(hooks) || hooks.length === 0)
    return;
  for (const raw of hooks) {
    const fn = typeof raw === "function" ? raw : raw.__weh;
    if (typeof fn === "function")
      fn(args);
  }
}
function bindAddonInstance(bridgeRef, instance) {
  if (bridgeRef)
    bridgeRef.value = instance;
}
function unbindAddonInstance(bridgeRef, instance) {
  if (bridgeRef && bridgeRef.value === instance) {
    bridgeRef.value = null;
  }
}
function scheduleInitialPageHooks(instance, pageQuery, bridgeRef, includeLoad) {
  const run = () => {
    bindAddonInstance(bridgeRef, instance);
    if (includeLoad) {
      invokeAddonPageHooks(instance, "onLoad", pageQuery.value);
    }
    invokeAddonPageHooks(instance, "onShow");
  };
  queueMicrotask(() => {
    nextTick(run);
  });
}
function scheduleFragmentHooks(instance, bridgeRef) {
  queueMicrotask(() => {
    nextTick(() => {
      bindAddonInstance(bridgeRef, instance);
      invokeAddonPageHooks(instance, "onShow");
    });
  });
}
function patchSetupOnTarget(target, mode) {
  const originalSetup = target.setup;
  if (!originalSetup)
    return false;
  target.setup = (props, ctx) => {
    const instance = getCurrentInstance();
    const pageQuery = mode === "page" ? inject(ADDON_PAGE_QUERY_KEY, ref({})) : ref({});
    const bridgeRef = mode === "page" ? inject(BRIDGE_ADDON_INSTANCE_KEY, void 0) : void 0;
    const setupResult = runWithDeferredUniHooks(
      instance,
      () => originalSetup.call(target, props, ctx)
    );
    const finish = () => {
      if (mode === "page") {
        scheduleInitialPageHooks(instance, pageQuery, bridgeRef, true);
      } else {
        scheduleFragmentHooks(instance, bridgeRef);
      }
    };
    if (setupResult instanceof Promise) {
      setupResult.then(() => nextTick(finish));
    } else {
      finish();
    }
    onUnmounted(() => unbindAddonInstance(bridgeRef, instance));
    return setupResult;
  };
  return true;
}
function wrapAddonPageComponent(Comp, mode = "page") {
  if (!Comp || Comp[WRAPPED]) {
    return Comp;
  }
  const comp = Comp;
  const target = comp.__vccOpts || comp;
  if (!patchSetupOnTarget(target, mode))
    return Comp;
  Comp[WRAPPED] = true;
  const wrapClass = addonWrapClass(target.__scopeId || comp.__scopeId);
  if (!wrapClass)
    return Comp;
  const Inner = Comp;
  return defineComponent({
    name: mode === "page" ? "AddonPageShell" : "AddonFragmentShell",
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
      return () => h(
        "div",
        {
          class: wrapClass,
          style: mode === "page" ? { minHeight: "100%" } : void 0
        },
        [h(Inner, attrs, slots)]
      );
    }
  });
}
const emptyDiyLoad = (reason, addonKey, componentName) => {
  console.warn("[addon-loader]", reason, addonKey, componentName);
  return async () => ({ default: null });
};
function loadAddonDiyComponent(addonKey, componentName) {
  return async () => {
    await ensureAddonProdReady();
    if (!isAddonInstalled(addonKey)) {
      return emptyDiyLoad("diy skip, addon not installed", addonKey, componentName)();
    }
    ensureAddonStyles(addonKey);
    const mod = await loadAddonModule(addonKey);
    if (!mod) {
      return emptyDiyLoad("diy skip, addon module missing", addonKey, componentName)();
    }
    const diyMap = mod.diyComponents;
    const loader = diyMap == null ? void 0 : diyMap[componentName];
    if (!loader) {
      return emptyDiyLoad(
        "diy skip, component not in map",
        addonKey,
        componentName
      )();
    }
    try {
      const compMod = await loader();
      const comp = (compMod == null ? void 0 : compMod.default) || compMod;
      if (!comp || typeof comp !== "object" && typeof comp !== "function") {
        return emptyDiyLoad("diy skip, empty component export", addonKey, componentName)();
      }
      return { default: wrapAddonPageComponent(comp, "fragment") };
    } catch (err) {
      console.error("[addon-loader] diy chunk load failed:", addonKey, componentName, err);
      return { default: null };
    }
  };
}
async function loadDiyComponent$1(meta) {
  try {
    if (meta.scope === "app") {
      const loader = getAppDiyLoader(meta.folder);
      if (!loader) {
        console.warn("[diy-loader] app component missing:", meta.folder);
        return null;
      }
      const mod2 = await loader();
      return mod2.default ?? null;
    }
    await ensureAddonProdReady();
    const mod = await loadAddonDiyComponent(meta.addonKey, meta.folder)();
    if (!(mod == null ? void 0 : mod.default)) {
      console.warn(
        "[diy-loader] addon diy missing:",
        meta.addonKey,
        meta.folder,
        meta.vueComponentName
      );
      return null;
    }
    return mod.default;
  } catch (err) {
    console.error("[diy-loader] load failed:", meta.vueComponentName, err);
    return null;
  }
}
async function loadDiyComponent(meta) {
  return loadDiyComponent$1(meta);
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "diy-dynamic-bridge",
  props: {
    componentName: null,
    component: null,
    global: null,
    index: null,
    scrollBool: null
  },
  setup(__props, { expose, emit }) {
    const props = __props;
    const attrs = useAttrs();
    const Comp = shallowRef(null);
    const innerRef = shallowRef(null);
    const retried = ref(false);
    const meta = computed(() => resolveDiyMeta(props.componentName || ""));
    function setInnerRef(el) {
      innerRef.value = el;
    }
    async function loadComp() {
      Comp.value = null;
      innerRef.value = null;
      const entry = meta.value;
      if (!entry) {
        if (props.componentName) {
          console.warn("[diy-dynamic-bridge] unknown componentName:", props.componentName);
        }
        if (!retried.value) {
          retried.value = true;
          void ensureRuntimeDiyRegistry().finally(loadComp);
        }
        return;
      }
      const loaded = await loadDiyComponent(entry);
      if (!loaded) {
        console.warn(
          "[diy-dynamic-bridge] load empty:",
          props.componentName,
          entry.addonKey,
          entry.folder
        );
      }
      Comp.value = loaded;
    }
    onMounted(loadComp);
    watch(() => props.componentName, loadComp);
    watch(meta, loadComp);
    expose({
      getInnerRef: () => innerRef.value
    });
    return (_ctx, _cache) => {
      return unref(Comp) ? (openBlock(), createBlock(resolveDynamicComponent(unref(Comp)), mergeProps({
        key: 0,
        ref: setInnerRef
      }, unref(attrs), {
        component: __props.component,
        global: __props.global,
        index: __props.index,
        scrollBool: __props.scrollBool,
        "onUpdate:componentIsShow": _cache[0] || (_cache[0] = ($event) => emit("update:componentIsShow", $event)),
        onLoadingFn: _cache[1] || (_cache[1] = ($event) => emit("loadingFn", $event))
      }), null, 16, ["component", "global", "index", "scrollBool"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "copy-right",
  props: {
    textColor: {
      type: String,
      default: "#ccc"
    }
  },
  setup(__props) {
    const systemStore = useSystemStore();
    const diyStore = useDiyStore();
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, null, {
        default: withCtx(() => [
          unref(diyStore).mode == "decorate" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "flex flex-col justify-center items-center p-[30rpx] text-[22rpx]",
            style: normalizeStyle({ color: __props.textColor })
          }, {
            default: withCtx(() => [
              createTextVNode(" 示例版权信息 ")
            ]),
            _: 1
          }, 8, ["style"])) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "flex flex-col justify-center items-center p-[30rpx]",
            style: normalizeStyle({ color: __props.textColor })
          }, {
            default: withCtx(() => {
              var _a, _b, _c, _d;
              return [
                ((_a = unref(systemStore).copyright) == null ? void 0 : _a.logo) ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: unref(img)(unref(systemStore).copyright.logo),
                  mode: "heightFix",
                  class: "max-h-[60rpx]"
                }, null, 8, ["src"])) : createCommentVNode("", true),
                ((_b = unref(systemStore).copyright) == null ? void 0 : _b.copyright_desc) ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 1,
                  class: "text-[22rpx] mt-[20rpx]",
                  onClick: _cache[0] || (_cache[0] = ($event) => {
                    var _a2;
                    return ((_a2 = unref(systemStore).copyright) == null ? void 0 : _a2.copyright_link) && unref(redirect)({ url: unref(systemStore).copyright.copyright_link });
                  })
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(systemStore).copyright.copyright_desc), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                ((_c = unref(systemStore).copyright) == null ? void 0 : _c.icp) ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 2,
                  class: "text-[22rpx] mt-[20rpx]"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 备案号：" + toDisplayString(unref(systemStore).copyright.icp), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                ((_d = unref(systemStore).copyright) == null ? void 0 : _d.gov_record) ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 3,
                  class: "text-[22rpx] mt-[20rpx] flex items-center",
                  onClick: _cache[1] || (_cache[1] = ($event) => {
                    var _a2;
                    return ((_a2 = unref(systemStore).copyright) == null ? void 0 : _a2.gov_url) && unref(redirect)({ url: unref(systemStore).copyright.gov_url });
                  })
                }, {
                  default: withCtx(() => [
                    createElementVNode("img", {
                      src: unref(img)("static/resource/images/copy_right.png"),
                      mode: "heightFix",
                      class: "w-[28rpx] h-[28rpx] mr-[10rpx]"
                    }, null, 8, ["src"]),
                    createTextVNode(" " + toDisplayString(unref(systemStore).copyright.gov_record), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }),
            _: 1
          }, 8, ["style"]))
        ]),
        _: 1
      });
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "pop-ads",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const diyStore = useDiyStore();
    const data = computed(() => {
      return props.data.popWindow;
    });
    const adsPopShow = ref(false);
    onMounted(() => {
      nextTick(() => {
        if (data.value.count == "always") {
          removeStorageSync(data.value.id + "_pop_window_count");
        }
        if (getStorageSync("isOnLoad")) {
          adsPopupShow();
          removeStorageSync("isOnLoad");
        }
      });
    });
    const popWindowStyle = () => {
      const MAX_WIDTH = 290;
      const MAX_HEIGHT = 410;
      const REFER_WIDTH = 290;
      const REFER_HEIGHT = 290;
      const scale = data.value.imgHeight / data.value.imgWidth;
      let width, height;
      if (scale <= REFER_HEIGHT / REFER_WIDTH) {
        width = MAX_WIDTH;
        height = width * scale;
      } else {
        height = MAX_HEIGHT;
        width = height / scale;
      }
      return `height:${height * 2}rpx;width:${width * 2}rpx;`;
    };
    const adsPopupShow = () => {
      if (diyStore.mode == "decorate" || !data.value.show)
        return false;
      const popWindowCount = getStorageSync(data.value.id + "_pop_window_count");
      if (popWindowCount === "always" || popWindowCount == "") {
        adsPopShow.value = true;
      }
    };
    const adsPopupClose = () => {
      adsPopShow.value = false;
      setStorageSync(data.value.id + "_pop_window_count", data.value.count);
    };
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7);
      return openBlock(), createBlock(_component_v_uni_view, {
        onTouchmove: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent", "stop"])),
        class: "share-popup"
      }, {
        default: withCtx(() => [
          createVNode(_component_u_popup, {
            show: adsPopShow.value,
            mode: "center",
            onClose: adsPopupClose,
            overlayOpacity: "0.3",
            bgColor: "transparent"
          }, {
            default: withCtx(() => [
              unref(data) && unref(data).imgUrl ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["prevent", "stop"])),
                class: "flex flex-col items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    src: unref(img)(unref(data).imgUrl),
                    style: normalizeStyle(popWindowStyle()),
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(diyStore).toRedirect(unref(data).link))
                  }, null, 8, ["src", "style"]),
                  createVNode(_component_v_uni_text, {
                    onClick: adsPopupClose,
                    class: "mt-[50rpx] nc-iconfont nc-icon-cuohaoV6xx1 !text-[50rpx] text-[#fff]"
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      });
    };
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.15.6";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function getChildContainingRectFromElement(container, options, ghostEl2) {
  var rect = {};
  Array.from(container.children).forEach(function(child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl2)
      return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, "pointerup", _this._onDrop);
        !this.nativeDraggable && on(ownerDocument, "pointercancel", _this._onDrop);
      } else {
        on(ownerDocument, "mouseup", _this._onDrop);
        on(ownerDocument, "touchend", _this._onDrop);
        on(ownerDocument, "touchcancel", _this._onDrop);
      }
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        if (options.supportPointer) {
          on(ownerDocument, "pointerup", _this._disableDelayedDrag);
          on(ownerDocument, "pointercancel", _this._disableDelayedDrag);
        } else {
          on(ownerDocument, "mouseup", _this._disableDelayedDrag);
          on(ownerDocument, "touchend", _this._disableDelayedDrag);
          on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        }
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "pointerup", this._disableDelayedDrag);
    off(ownerDocument, "pointercancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "pointercancel", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild,
  expando
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
function useDiyGroup(params = {}) {
  const showCopyright = ref(false);
  let scrollVal = "";
  const componentsScrollBool = ref({});
  const diyStore = useDiyStore();
  const positionFixed = ref(["fixed", "top_fixed", "right_fixed", "bottom_fixed", "left_fixed"]);
  const data = computed(() => {
    if (diyStore.mode == "decorate") {
      return diyStore;
    }
    return params.data;
  });
  watch(
    () => [diyStore.mode, diyStore.pageMode, diyStore.global, diyStore.value],
    () => {
      if (diyStore.mode !== "decorate" || !params.data)
        return;
      params.data.pageMode = diyStore.pageMode;
      params.data.global = diyStore.global;
      params.data.value = diyStore.value;
    },
    { deep: true, immediate: true }
  );
  const getComponentClass = (index2, component) => {
    const obj = {
      relative: true,
      selected: diyStore.currentIndex == index2,
      decorate: diyStore.mode == "decorate"
    };
    obj["top-fixed-" + diyStore.topFixedStatus] = true;
    if (component.position && positionFixed.value.indexOf(component.position) != -1) {
      obj["ignore-draggable-element"] = true;
    } else {
      obj["draggable-element"] = true;
    }
    if (component.componentName == "ImageAds") {
      obj["overflow-hidden"] = true;
    }
    return obj;
  };
  const isShowPlaceHolder = (index2, component) => {
    if (diyStore.mode == "decorate") {
      const el = document.getElementById("componentList");
      if (el && el.children.length && el.children[index2]) {
        const height = el.children[index2].offsetHeight;
        let top = 0;
        if (component.margin.top < 0) {
          top = component.margin.top * 2 * -1;
          if (top > height) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  const onMountedLifeCycle = () => {
    onMounted(() => {
      if (diyStore.mode == "decorate") {
        const el = document.getElementById("componentList");
        const sortable = Sortable.create(el, {
          draggable: ".draggable-element",
          animation: 200,
          onEnd: (event) => {
            const temp = diyStore.value[event.oldIndex];
            diyStore.value.splice(event.oldIndex, 1);
            diyStore.value.splice(event.newIndex, 0, temp);
            nextTick(() => {
              sortable.sort(range$1(diyStore.value.length).map((value) => {
                return value.toString();
              }));
              diyStore.postMessage(event.newIndex, diyStore.value[event.newIndex]);
            });
          }
        });
      }
      nextTick(() => {
        setTimeout(() => {
          scrollVal = getStorageSync("componentsScrollValGroup");
          if (scrollVal) {
            for (const key in scrollVal) {
              componentsScrollBool.value[key] = -1;
            }
          }
          showCopyright.value = true;
        }, 500);
      });
    });
  };
  const refresh = () => {
    nextTick(() => {
      let time = null;
      const fn = () => {
        var _a;
        diyStore.componentRefs = params.getFormRef().componentRefs;
        data.value.componentRefs = params.getFormRef().componentRefs;
        (_a = params.getFormRef().componentRefs.topTabbarRef) == null ? void 0 : _a.refresh();
        if (time)
          clearInterval(time);
      };
      const getPass = () => {
        let pass = false;
        try {
          params.getFormRef();
          pass = true;
        } catch (e) {
          pass = false;
        }
        if (pass) {
          fn();
        }
        return pass;
      };
      if (!getPass()) {
        time = setInterval(() => {
          getPass();
        }, 100);
      }
    });
  };
  const placeholderEvent = () => {
  };
  const isPagesHide = ref(false);
  onShow(() => {
    isPagesHide.value = false;
  });
  onHide(() => {
    isPagesHide.value = true;
    diyStore.global.bottomTabBar.isShow = false;
  });
  const scrollValStr = ref();
  const onPageScrollLifeCycle = () => {
    onPageScroll((e) => {
      if (scrollVal && !isPagesHide.value) {
        for (const key in scrollVal) {
          if (e.scrollTop <= 0) {
            componentsScrollBool.value[key] = -1;
          } else if (e.scrollTop > scrollVal[key]) {
            componentsScrollBool.value[key] = 1;
          } else {
            componentsScrollBool.value[key] = 2;
          }
        }
      }
    });
  };
  return {
    scrollV: scrollValStr,
    data,
    componentsScrollBool,
    showCopyright,
    placeholderEvent,
    refresh,
    isShowPlaceHolder,
    getComponentClass,
    onPageScroll: onPageScrollLifeCycle,
    onMounted: onMountedLifeCycle
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["data"],
  setup(__props, { expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const getFormRef = () => {
      return {
        componentRefs: instance.refs
      };
    };
    const diyStore = useDiyStore();
    const diyGroup2 = useDiyGroup({
      ...props,
      getFormRef
    });
    const data = diyGroup2.data;
    function scrollBoolFor(name) {
      const box = diyGroup2.componentsScrollBool;
      const val = (box == null ? void 0 : box.value) ?? box;
      return val == null ? void 0 : val[name];
    }
    function getScrollBool(componentName) {
      const meta = resolveDiyMeta(componentName);
      if (!(meta == null ? void 0 : meta.scrollBool))
        return void 0;
      return scrollBoolFor(meta.vueComponentName);
    }
    function bindDiyRef(componentName, bridgeEl) {
      var _a;
      if (!(instance == null ? void 0 : instance.refs) || !bridgeEl)
        return;
      const key = `diy${componentName}Ref`;
      const inner = ((_a = bridgeEl.getInnerRef) == null ? void 0 : _a.call(bridgeEl)) ?? null;
      if (!inner)
        return;
      const refs = instance.refs;
      if (!refs[key]) {
        refs[key] = inner;
        return;
      }
      if (Array.isArray(refs[key])) {
        if (!refs[key].includes(inner))
          refs[key].push(inner);
        return;
      }
      refs[key] = [refs[key], inner];
    }
    diyGroup2.onMounted();
    diyGroup2.onPageScroll();
    ensureRuntimeDiyRegistry().catch(() => {
    });
    expose({
      refresh: diyGroup2.refresh,
      getFormRef
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_diy_dynamic_bridge = resolveEasycom(resolveDynamicComponent("diy-dynamic-bridge"), _sfc_main$3);
      const _component_copy_right = resolveEasycom(resolveDynamicComponent("copy-right"), _sfc_main$2);
      const _component_tabbar = resolveEasycom(resolveDynamicComponent("tabbar"), __easycom_4$1);
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "diy-group",
        id: "componentList"
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            unref(data).global && Object.keys(unref(data).global).length && unref(data).global.topStatusBar && unref(data).global.topStatusBar.isShow ? (openBlock(), createBlock(__easycom_4, {
              key: 0,
              scrollBool: scrollBoolFor("TopTabbar"),
              ref: "topTabbarRef",
              data: unref(data).global
            }, null, 8, ["scrollBool", "data"])) : createCommentVNode("", true),
            unref(data).global && Object.keys(unref(data).global).length && unref(data).global.popWindow && unref(data).global.popWindow.show ? (openBlock(), createBlock(_sfc_main$1, {
              key: 1,
              ref: "popAbsRef",
              data: unref(data).global
            }, null, 8, ["data"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data).value, (component, index2) => {
              return withDirectives((openBlock(), createBlock(_component_v_uni_view, {
                key: component.id,
                onClick: ($event) => unref(diyStore).changeCurrentIndex(index2, component),
                class: normalizeClass([unref(diyGroup2).getComponentClass(index2, component), { "diy-component-hidden": unref(diyStore).mode == "decorate" && component.isShow === false }]),
                style: normalizeStyle(component.pageStyle)
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "relative",
                    style: normalizeStyle({ marginTop: component.margin.top < 0 ? component.margin.top * 2 + "rpx" : "0", marginBottom: component.margin.bottom < 0 ? component.margin.bottom * 2 + "rpx" : "0" })
                  }, {
                    default: withCtx(() => [
                      unref(diyGroup2).isShowPlaceHolder(index2, component) ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "absolute w-full z-1",
                        style: normalizeStyle({ height: component.margin.top * 2 * -1 + "rpx" }),
                        onClick: withModifiers(unref(diyGroup2).placeholderEvent, ["stop"])
                      }, null, 8, ["style", "onClick"])) : createCommentVNode("", true),
                      component.componentName ? (openBlock(), createBlock(_component_diy_dynamic_bridge, {
                        key: 1,
                        ref_for: true,
                        ref: (el) => bindDiyRef(component.componentName, el),
                        componentName: component.componentName,
                        scrollBool: getScrollBool(component.componentName),
                        component,
                        global: unref(data).global,
                        index: index2,
                        "onUpdate:componentIsShow": ($event) => component.componentIsShow = $event
                      }, null, 8, ["componentName", "scrollBool", "component", "global", "index", "onUpdate:componentIsShow"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["style"])
                ]),
                _: 2
              }, 1032, ["onClick", "class", "style"])), [
                [vShow, (unref(diyStore).mode == "decorate" || component.isShow !== false) && component.componentIsShow]
              ]);
            }), 128)),
            unref(data).global && ((_a = unref(diyGroup2).showCopyright) == null ? void 0 : _a.value) !== false && unref(data).global.copyright && unref(data).global.copyright.isShow ? (openBlock(), createBlock(_component_copy_right, {
              key: 2,
              textColor: unref(data).global.copyright.textColor
            }, null, 8, ["textColor"])) : createCommentVNode("", true),
            unref(diyStore).mode == "" && unref(data).global && unref(data).global.bottomTabBar && unref(data).global.bottomTabBar.isShow ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createVNode(_component_v_uni_view, { class: "pt-[20rpx]" }),
              createVNode(_component_tabbar, {
                addon: (_b = unref(data).global.bottomTabBar.designNav) == null ? void 0 : _b.key
              }, null, 8, ["addon"])
            ], 64)) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_565c1aba_lang = "";
const diyGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-565c1aba"]]);
export {
  ADDON_PAGE_QUERY_KEY as A,
  diyGroup as d
};
