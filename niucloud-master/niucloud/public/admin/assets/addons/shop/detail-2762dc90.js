import { ElPageHeader as ve, ElCard as me, ElFormItem as ue, ElCol as _e, ElRow as he, ElTableColumn as ye, ElButton as fe, ElTable as xe, ElEmpty as ge, ElForm as we, ElLoadingDirective as be } from "element-plus/es";
import { defineComponent as ke, ref as y, openBlock as d, createElementBlock as n, createVNode as l, withCtx as a, unref as t, withDirectives as De, createBlock as u, createElementVNode as s, toDisplayString as o, createCommentVNode as p, Fragment as C, createTextVNode as k, renderList as P, resolveDynamicComponent as Ce, defineAsyncComponent as Fe, pushScopeId as Ee, popScopeId as Te } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { ArrowLeft as $e } from "@element-plus/icons-vue";
import { g as Ae, o as je, a as Me } from "./order-a6ced131.js";
import { getFormRecordsInfo as Ne } from "/admin/assets/shared/core-shared.js";
import { printTicket as Le } from "/admin/assets/shared/core-shared.js";
import { _ as Se } from "./delivery-action.vue_vue_type_style_index_0_lang-d3ec871d.js";
import { _ as Be } from "./order-notes.vue_vue_type_style_index_0_lang-f64bd6e6.js";
import { _ as Re } from "./order-edit-address.vue_vue_type_style_index_0_lang-f1b501aa.js";
import { _ as Ie } from "./delivery-package.vue_vue_type_style_index_0_lang-d375ffcd.js";
import { _ as Oe } from "./adjust-money.vue_vue_type_style_index_0_lang-08f92e78.js";
import { _ as Pe } from "./electronic-sheet-print.vue_vue_type_style_index_0_lang-c147174f.js";
import { _ as qe } from "./shop-active-refund.vue_vue_type_style_index_0_lang-bfeb8771.js";
import { _ as Ve } from "./form-detail.vue_vue_type_script_setup_true_lang-ba829a49.js";
import { useRoute as ze, useRouter as Ge } from "vue-router";
import { img as He } from "/admin/assets/shared/core-shared.js";
import { ElMessageBox as J } from "element-plus";
import { c as Q } from "./cloneDeep-70d647ec.js";
import { _ as Ue } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "./delivery-da6bd7ad.js";
import "/admin/assets/shared/core-shared.js";
import "./electronic_sheet-e3cd8985.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./index.vue_vue_type_script_setup_true_lang-98c9e9f0.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const Je = (F) => (Ee("data-v-4e348e23"), F = F(), Te(), F), Qe = { class: "main-container" }, We = { class: "panel-title" }, Xe = { class: "input-width" }, Ye = { class: "input-width" }, Ze = { class: "input-width" }, Ke = { class: "input-width" }, eo = { class: "input-width" }, oo = { class: "input-width" }, so = { class: "input-width" }, to = { class: "input-width" }, io = {
  key: 0,
  class: "input-width"
}, ro = { class: "input-width" }, no = {
  key: 0,
  class: "text-primary"
}, ao = { key: 0 }, po = { class: "input-width" }, lo = { class: "input-width" }, co = { class: "input-width" }, vo = { key: 1 }, mo = { class: "input-width" }, uo = { key: 2 }, _o = { class: "input-width" }, ho = { class: "input-width" }, yo = { class: "input-width" }, fo = { class: "input-width" }, xo = { class: "input-width" }, go = { class: "input-width line-feed" }, wo = { class: "input-width line-feed" }, bo = { class: "input-width line-feed" }, ko = {
  key: 0,
  class: "panel-title"
}, Do = { class: "input-width" }, Co = { class: "input-width" }, Fo = { class: "input-width" }, Eo = { class: "input-width" }, To = { class: "panel-title" }, $o = { class: "mb-[20px]" }, Ao = { class: "ml-[30px] text-[14px] mr-[20px]" }, jo = { class: "text-[14px]" }, Mo = { class: "flex mt-[10px]" }, No = {
  key: 8,
  class: "flex"
}, Lo = ["onClick"], So = ["onClick"], Bo = { class: "flex ml-[30px] mt-[15px]" }, Ro = { class: "text-[14px] text-[#ff7f5b]" }, Io = { class: "ml-[10px]" }, Oo = { class: "text-[14px] text-[#a4a4a4]" }, Po = { class: "text-[14px] text-[#a4a4a4]" }, qo = { class: "text-[14px] text-[#a4a4a4]" }, Vo = {
  key: 2,
  class: "panel-title"
}, zo = {
  key: 3,
  class: "row-bg px-[30px] mb-[20px]"
}, Go = { class: "grid grid-cols-3 gap-[20px]" }, Ho = { class: "panel-title" }, Uo = ["onClick"], Jo = { class: "flex items-center shrink-0" }, Qo = ["src"], Wo = { class: "flex flex-col items-start" }, Xo = { class: "multi-hidden text-[14px]" }, Yo = { class: "text-[12px] text-[#999]" }, Zo = {
  key: 0,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, Ko = {
  key: 1,
  class: "px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"
}, es = { class: "flex flex-col" }, os = { key: 0 }, ss = { key: 0 }, ts = { key: 1 }, is = {
  key: 2,
  class: "text-[13px]"
}, rs = {
  key: 3,
  class: "text-[13px] mt-[5px]"
}, ds = {
  key: 4,
  class: "text-[13px] mt-[5px]"
}, ns = { key: 0 }, as = { class: "text-[#999]" }, ps = { key: 1 }, ls = {
  key: 5,
  class: "text-[13px] mt-[5px]"
}, cs = { class: "py-[12px] px-[16px] border-b border-color flex justify-end" }, vs = { class: "w-[310px] flex flex-col text-right" }, ms = { class: "flex mb-[10px]" }, us = { class: "text-base flex-1" }, _s = { class: "text-base flex-1 pl-[30px]" }, hs = {
  key: 0,
  class: "text-[14px]"
}, ys = { key: 0 }, fs = {
  key: 1,
  class: "text-[14px]"
}, xs = {
  key: 0,
  class: "flex mb-[10px]"
}, gs = { class: "text-base flex-1" }, ws = { class: "text-base flex-1 pl-[30px]" }, bs = {
  key: 1,
  class: "flex mb-[10px]"
}, ks = { class: "text-base flex-1" }, Ds = { class: "text-base flex-1 pl-[30px]" }, Cs = { class: "flex mb-[10px]" }, Fs = { class: "text-base flex-1" }, Es = { class: "text-base flex-1 pl-[30px]" }, Ts = { class: "flex mb-[10px]" }, $s = { class: "text-base flex-1" }, As = { class: "text-base flex-1 pl-[30px]" }, js = { class: "flex" }, Ms = { class: "text-base flex-1" }, Ns = { class: "text-base flex-1 pl-[30px] text-[red]" }, Ls = {
  key: 0,
  class: "text-[14px]"
}, Ss = { key: 0 }, Bs = {
  key: 1,
  class: "text-[14px]"
}, Rs = {
  key: 4,
  class: "mt-[50px] mb-[20px]"
}, Is = {
  key: 5,
  class: "mb-[100px]",
  style: { "min-height": "100px" }
}, Os = { class: "mr-[20px] min-w-[71px]" }, Ps = { class: "leading-[1] text-[14px] w-[100px] flex justify-end" }, qs = { class: "leading-[1] text-[14px] w-[100px] flex justify-end mt-[15px]" }, Vs = /* @__PURE__ */ Je(() => /* @__PURE__ */ s("div", { class: "w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]" }, [
  /* @__PURE__ */ s("div", { class: "w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]" })
], -1)), zs = {
  key: 0,
  class: "w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"
}, Gs = { class: "leading-[1] ml-[20px] text-[14px]" }, Hs = { class: "leading-[1] ml-[20px] text-[14px] mt-[15px]" }, Us = { class: "ml-[10px]" }, Js = /* @__PURE__ */ ke({
  __name: "detail",
  setup(F) {
    const q = ze(), j = Ge(), W = q.meta.title, f = parseInt(q.query.order_id), D = y(!0), e = y(null), E = y([]), V = /* @__PURE__ */ Object.assign({ "/src/addon/shop/views/address/edit.vue": () => import("./edit-adf2b894.js"), "/src/addon/shop/views/address/list.vue": () => import("./list-c84cd860.js"), "/src/addon/shop/views/customer_panel/goods.vue": () => import("./goods-0082b8ac.js"), "/src/addon/shop/views/customer_panel/order.vue": () => import("./order-f1a71dc7.js"), "/src/addon/shop/views/delivery/company.vue": () => import("./company-9afffb10.js"), "/src/addon/shop/views/delivery/company_edit.vue": () => import("./company_edit-71d902c9.js"), "/src/addon/shop/views/delivery/components/delivery-personnel-edit.vue": () => import("./delivery-personnel-edit-045da5eb.js"), "/src/addon/shop/views/delivery/components/local-delivery-service-dada.vue": () => import("./local-delivery-service-dada-e3b13f69.js"), "/src/addon/shop/views/delivery/components/local_record_detail.vue": () => import("./local_record_detail-a3662dc0.js"), "/src/addon/shop/views/delivery/components/shop_record_detail.vue": () => import("./shop_record_detail-2b6b1599.js"), "/src/addon/shop/views/delivery/config.vue": () => import("./config-69c60013.js"), "/src/addon/shop/views/delivery/electronic_sheet.vue": () => import("./electronic_sheet-32cf01ee.js"), "/src/addon/shop/views/delivery/electronic_sheet_config.vue": () => import("./electronic_sheet_config-403f586c.js"), "/src/addon/shop/views/delivery/electronic_sheet_edit.vue": () => import("./electronic_sheet_edit-afd55656.js"), "/src/addon/shop/views/delivery/local.vue": () => import("./local-c1232d58.js"), "/src/addon/shop/views/delivery/local_config.vue": () => import("./local_config-76933436.js"), "/src/addon/shop/views/delivery/local_delivery_service.vue": () => import("./local_delivery_service-697fabf6.js"), "/src/addon/shop/views/delivery/local_record.vue": () => import("./local_record-055eba8e.js"), "/src/addon/shop/views/delivery/merchant_record.vue": () => import("./merchant_record-5fe2bff2.js"), "/src/addon/shop/views/delivery/search.vue": () => import("./search-293a2272.js"), "/src/addon/shop/views/delivery/staff.vue": () => import("./staff-c6bd2ef8.js"), "/src/addon/shop/views/delivery/store.vue": () => import("./store-5cab155f.js"), "/src/addon/shop/views/delivery/store_edit.vue": () => import("./store_edit-679eafda.js"), "/src/addon/shop/views/delivery/template.vue": () => import("./template-37204cf1.js"), "/src/addon/shop/views/delivery/template_edit.vue": () => import("./template_edit-d9ec0f7f.js"), "/src/addon/shop/views/delivery_store/delivery_set.vue": () => import("./delivery_set-ab1d8175.js"), "/src/addon/shop/views/delivery_store/edit.vue": () => import("./edit-d2762d30.js"), "/src/addon/shop/views/delivery_store/list.vue": () => import("./list-0577a59b.js"), "/src/addon/shop/views/diy/components/edit-goods-coupon.vue": () => import("./edit-goods-coupon-0027fad8.js"), "/src/addon/shop/views/diy/components/edit-goods-list.vue": () => import("./edit-goods-list-30a029d3.js"), "/src/addon/shop/views/diy/components/edit-many-goods-list.vue": () => import("./edit-many-goods-list-39a27ab8.js"), "/src/addon/shop/views/diy/components/edit-shop-exchange-goods.vue": () => import("./edit-shop-exchange-goods-275832c6.js"), "/src/addon/shop/views/diy/components/edit-shop-exchange-info.vue": () => import("./edit-shop-exchange-info-deef359c.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-attr.vue": () => import("./edit-shop-goods-detail-attr-dcd289cc.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-basic-info.vue": () => import("./edit-shop-goods-detail-basic-info-4041e705.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-bottom.vue": () => import("./edit-shop-goods-detail-bottom-3ce0003f.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-desc.vue": () => import("./edit-shop-goods-detail-desc-5a44198b.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-evaluate.vue": () => import("./edit-shop-goods-detail-evaluate-7f652da4.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-purchase-service.vue": () => import("./edit-shop-goods-detail-purchase-service-dc73afa6.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-detail-sow.vue": () => import("./edit-shop-goods-detail-sow-196b2876.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-hot.vue": () => import("./edit-shop-goods-hot-1981cae8.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-ranking.vue": () => import("./edit-shop-goods-ranking-600b588b.js"), "/src/addon/shop/views/diy/components/edit-shop-goods-recommend.vue": () => import("./edit-shop-goods-recommend-f8b4c904.js"), "/src/addon/shop/views/diy/components/edit-shop-member-info.vue": () => import("./edit-shop-member-info-d5e77c1d.js"), "/src/addon/shop/views/diy/components/edit-shop-newcomer.vue": () => import("./edit-shop-newcomer-f379920c.js"), "/src/addon/shop/views/diy/components/edit-shop-order-info.vue": () => import("./edit-shop-order-info-9d4e0cd9.js"), "/src/addon/shop/views/diy/components/edit-shop-search.vue": () => import("./edit-shop-search-76e7f266.js"), "/src/addon/shop/views/diy/components/edit-single-recommend.vue": () => import("./edit-single-recommend-849e2603.js"), "/src/addon/shop/views/goods/attr.vue": () => import("./attr-2139c8b3.js"), "/src/addon/shop/views/goods/attr_edit.vue": () => import("./attr_edit-0a60b505.js"), "/src/addon/shop/views/goods/brand_list.vue": () => import("./brand_list-56d90ece.js"), "/src/addon/shop/views/goods/category.vue": () => import("./category-435c1c59.js"), "/src/addon/shop/views/goods/category_config.vue": () => import("./category_config-0bab3ebe.js"), "/src/addon/shop/views/goods/components/brand-edit.vue": () => import("./brand-edit-64b4d86f.js"), "/src/addon/shop/views/goods/components/category-edit.vue": () => import("./category-edit-614a0515.js"), "/src/addon/shop/views/goods/components/coupon-select-popup.vue": () => import("./coupon-select-popup-e7e055dd.js"), "/src/addon/shop/views/goods/components/evaluate-add.vue": () => import("./evaluate-add-10add380.js"), "/src/addon/shop/views/goods/components/goods-batch-settings-popup.vue": () => import("./goods-batch-settings-popup-2dfa778e.js"), "/src/addon/shop/views/goods/components/goods-category-select-content.vue": () => import("./goods-category-select-content-9f179c40.js"), "/src/addon/shop/views/goods/components/goods-member-price-popup.vue": () => import("./goods-member-price-popup-7dfee51a.js"), "/src/addon/shop/views/goods/components/goods-price-edit-popup.vue": () => import("./goods-price-edit-popup-a5186643.js"), "/src/addon/shop/views/goods/components/goods-select-content.vue": () => import("./goods-select-content-5fa6a1e9.js"), "/src/addon/shop/views/goods/components/goods-select-popup.vue": () => import("./goods-select-popup-ef80f0be.js"), "/src/addon/shop/views/goods/components/goods-stock-edit-popup.vue": () => import("./goods-stock-edit-popup-1d3b1879.js"), "/src/addon/shop/views/goods/components/label-edit.vue": () => import("./label-edit-c4efdbac.js"), "/src/addon/shop/views/goods/components/label-group-edit.vue": () => import("./label-group-edit-0fa9b9b9.js"), "/src/addon/shop/views/goods/components/newcomer-goods-select-popup.vue": () => import("./newcomer-goods-select-popup-5c2dd12b.js"), "/src/addon/shop/views/goods/components/service-edit.vue": () => import("./service-edit-3c0ea08f.js"), "/src/addon/shop/views/goods/evaluate.vue": () => import("./evaluate-c25ceb36.js"), "/src/addon/shop/views/goods/label_group_list.vue": () => import("./label_group_list-9f0d9c8a.js"), "/src/addon/shop/views/goods/label_list.vue": () => import("./label_list-d41454aa.js"), "/src/addon/shop/views/goods/list.vue": () => import("./list-b7ef019a.js"), "/src/addon/shop/views/goods/real_edit.vue": () => import("./real_edit-e2b4f838.js"), "/src/addon/shop/views/goods/recycle.vue": () => import("./recycle-618f5e85.js"), "/src/addon/shop/views/goods/search_config.vue": () => import("./search_config-c7b16655.js"), "/src/addon/shop/views/goods/service.vue": () => import("./service-3f114a7b.js"), "/src/addon/shop/views/goods/virtual_edit.vue": () => import("./virtual_edit-b72f8ce3.js"), "/src/addon/shop/views/index/index.vue": () => import("./index-ad8b1ab0.js"), "/src/addon/shop/views/marketing/coupon/add.vue": () => import("./add-ddc8aa0b.js"), "/src/addon/shop/views/marketing/coupon/components/coupon-collection.vue": () => import("./coupon-collection-4db200fc.js"), "/src/addon/shop/views/marketing/coupon/components/coupon-select-content.vue": () => import("./coupon-select-content-7ff826e7.js"), "/src/addon/shop/views/marketing/coupon/components/coupon-send-popop.vue": () => import("./coupon-send-popop-87d72eec.js"), "/src/addon/shop/views/marketing/coupon/components/coupon-send-records.vue": () => import("./coupon-send-records-e0478b33.js"), "/src/addon/shop/views/marketing/coupon/components/select-member.vue": () => import("./select-member-b04ea04c.js"), "/src/addon/shop/views/marketing/coupon/edit.vue": () => import("./edit-2bf3774b.js"), "/src/addon/shop/views/marketing/coupon/list.vue": () => import("./list-3a4516ff.js"), "/src/addon/shop/views/marketing/discount/add.vue": () => import("./add-415b1468.js"), "/src/addon/shop/views/marketing/discount/components/discount-detail.vue": () => import("./discount-detail-da9b9ca0.js"), "/src/addon/shop/views/marketing/discount/components/goods-sku-popup.vue": () => import("./goods-sku-popup-a790ee64.js"), "/src/addon/shop/views/marketing/discount/config.vue": () => import("./config-5e5cdd4f.js"), "/src/addon/shop/views/marketing/discount/detail.vue": () => import("./detail-7bf6dbc5.js"), "/src/addon/shop/views/marketing/discount/edit.vue": () => import("./edit-8932851c.js"), "/src/addon/shop/views/marketing/discount/list.vue": () => import("./list-4104388c.js"), "/src/addon/shop/views/marketing/exchange/components/goods-select-content.vue": () => import("./goods-select-content-00330da3.js"), "/src/addon/shop/views/marketing/exchange/components/goods-select-popup.vue": () => import("./goods-select-popup-ffa6e5f2.js"), "/src/addon/shop/views/marketing/exchange/components/goods-sku-select.vue": () => import("./goods-sku-select-38443561.js"), "/src/addon/shop/views/marketing/exchange/goods_add.vue": () => import("./goods_add-86f0e069.js"), "/src/addon/shop/views/marketing/exchange/goods_edit.vue": () => import("./goods_edit-db062d9f.js"), "/src/addon/shop/views/marketing/exchange/goods_list.vue": () => import("./goods_list-9a7aa431.js"), "/src/addon/shop/views/marketing/exchange/order_list.vue": () => import("./order_list-19f43b18.js"), "/src/addon/shop/views/marketing/goods_rank/components/rank-select-popup.vue": () => import("./rank-select-popup-bb0ff738.js"), "/src/addon/shop/views/marketing/goods_rank/config.vue": () => import("./config-4049d349.js"), "/src/addon/shop/views/marketing/goods_rank/edit.vue": () => import("./edit-6331a097.js"), "/src/addon/shop/views/marketing/goods_rank/list.vue": () => import("./list-29ab9835.js"), "/src/addon/shop/views/marketing/index.vue": () => import("./index-557873ee.js"), "/src/addon/shop/views/marketing/manjian/detail.vue": () => import("./detail-b9be53c5.js"), "/src/addon/shop/views/marketing/manjian/edit.vue": () => import("./edit-b45dba68.js"), "/src/addon/shop/views/marketing/manjian/list.vue": () => import("./list-6b37e479.js"), "/src/addon/shop/views/marketing/newcomer/config.vue": () => import("./config-6e4fbad0.js"), "/src/addon/shop/views/marketing/newcomer/order_list.vue": () => import("./order_list-6e441443.js"), "/src/addon/shop/views/member/components/benefits-free-shipping.vue": () => import("./benefits-free-shipping-759bba7c.js"), "/src/addon/shop/views/member/components/gift-coupon.vue": () => import("./gift-coupon-4898c9cf.js"), "/src/addon/shop/views/member/components/growth-rule-buygoods.vue": () => import("./growth-rule-buygoods-84483b79.js"), "/src/addon/shop/views/member/components/growth-rule-buyorder.vue": () => import("./growth-rule-buyorder-391ae0ba.js"), "/src/addon/shop/views/member/components/point-rule-buygoods.vue": () => import("./point-rule-buygoods-d6c217fd.js"), "/src/addon/shop/views/member/components/point-rule-orderdeduction.vue": () => import("./point-rule-orderdeduction-c32e7e95.js"), "/src/addon/shop/views/member/components/recharge-detail-coupon.vue": () => import("./recharge-detail-coupon-13294623.js"), "/src/addon/shop/views/member/components/recharge-gift-coupon.vue": () => import("./recharge-gift-coupon-6fac8f8b.js"), "/src/addon/shop/views/order/batch_delivery.vue": () => import("./batch_delivery-9a29045b.js"), "/src/addon/shop/views/order/components/adjust-money.vue": () => import("./adjust-money-caa259e8.js"), "/src/addon/shop/views/order/components/delivery-action.vue": () => import("./delivery-action-9b456035.js"), "/src/addon/shop/views/order/components/delivery-package.vue": () => import("./delivery-package-cf1b5c81.js"), "/src/addon/shop/views/order/components/electronic-sheet-print.vue": () => import("./electronic-sheet-print-d3b0f4f5.js"), "/src/addon/shop/views/order/components/form-detail.vue": () => import("./form-detail-7d138161.js"), "/src/addon/shop/views/order/components/import-data.vue": () => import("./import-data-17204cec.js"), "/src/addon/shop/views/order/components/invoice-detail.vue": () => import("./invoice-detail-41b224d5.js"), "/src/addon/shop/views/order/components/invoice-dialog.vue": () => import("./invoice-dialog-a41f4efc.js"), "/src/addon/shop/views/order/components/open-invoice.vue": () => import("./open-invoice-1bc7794b.js"), "/src/addon/shop/views/order/components/order-detail.vue": () => import("./order-detail-39d987bb.js"), "/src/addon/shop/views/order/components/order-edit-address.vue": () => import("./order-edit-address-59cfc7eb.js"), "/src/addon/shop/views/order/components/order-export-select.vue": () => import("./order-export-select-68777a83.js"), "/src/addon/shop/views/order/components/order-notes.vue": () => import("./order-notes-00edefc1.js"), "/src/addon/shop/views/order/components/refund-detail.vue": () => import("./refund-detail-986aa90e.js"), "/src/addon/shop/views/order/components/shop-active-refund.vue": () => import("./shop-active-refund-bc413342.js"), "/src/addon/shop/views/order/config.vue": () => import("./config-40a662e8.js"), "/src/addon/shop/views/order/detail.vue": () => Promise.resolve().then(() => Ws), "/src/addon/shop/views/order/invoice.vue": () => import("./invoice-fae3f0d2.js"), "/src/addon/shop/views/order/list.vue": () => import("./list-33e48e53.js"), "/src/addon/shop/views/order/refund.vue": () => import("./refund-ce629c6b.js"), "/src/addon/shop/views/poster/components/edit-goods-image.vue": () => import("./edit-goods-image-c14e6d18.js"), "/src/addon/shop/views/poster/components/edit-goods-market-price.vue": () => import("./edit-goods-market-price-cec6dab1.js"), "/src/addon/shop/views/poster/components/edit-goods-name.vue": () => import("./edit-goods-name-c43971fd.js"), "/src/addon/shop/views/poster/components/edit-goods-price.vue": () => import("./edit-goods-price-daf9930c.js"), "/src/addon/shop/views/poster/components/preview-goods-image.vue": () => import("./preview-goods-image-43b59147.js"), "/src/addon/shop/views/poster/components/preview-goods-market-price.vue": () => import("./preview-goods-market-price-3707f58a.js"), "/src/addon/shop/views/poster/components/preview-goods-name.vue": () => import("./preview-goods-name-8db3d4d1.js"), "/src/addon/shop/views/poster/components/preview-goods-price.vue": () => import("./preview-goods-price-c018119a.js"), "/src/addon/shop/views/printer/components/preview-goods-order.vue": () => import("./preview-goods-order-a6f41246.js"), "/src/addon/shop/views/sow_community/components/sow-community-gift-coupon.vue": () => import("./sow-community-gift-coupon-23c7dac8.js"), "/src/addon/shop/views/stat/goods.vue": () => import("./goods-5b8437ab.js"), "/src/addon/shop/views/stat/index.vue": () => import("./index-bcccabc2.js"), "/src/addon/shop/views/stat/member.vue": () => import("./member-a88b3b99.js"), "/src/addon/shop/views/stat/order.vue": () => import("./order-251c9e68.js"), "/src/addon/shop/views/stat/visit.vue": () => import("./visit-56bee77f.js"), "/src/app/views/diy_form/components/detail-form-image.vue": () => import("./detail-form-image-5e08805b.js"), "/src/app/views/diy_form/components/detail-form-render.vue": () => import("./detail-form-render-5eee52f2.js"), "/src/app/views/diy_form/components/edit-form-address.vue": () => import("./edit-form-address-e44aaaab.js"), "/src/app/views/diy_form/components/edit-form-checkbox.vue": () => import("./edit-form-checkbox-d0fc6a14.js"), "/src/app/views/diy_form/components/edit-form-date-scope.vue": () => import("./edit-form-date-scope-45bc0739.js"), "/src/app/views/diy_form/components/edit-form-date.vue": () => import("./edit-form-date-34b7169c.js"), "/src/app/views/diy_form/components/edit-form-email.vue": () => import("./edit-form-email-5713a5b3.js"), "/src/app/views/diy_form/components/edit-form-file.vue": () => import("./edit-form-file-7c8b1c1e.js"), "/src/app/views/diy_form/components/edit-form-identity.vue": () => import("./edit-form-identity-68769792.js"), "/src/app/views/diy_form/components/edit-form-image.vue": () => import("./edit-form-image-49f23def.js"), "/src/app/views/diy_form/components/edit-form-input.vue": () => import("./edit-form-input-7e000713.js"), "/src/app/views/diy_form/components/edit-form-location.vue": () => import("./edit-form-location-373e5d43.js"), "/src/app/views/diy_form/components/edit-form-mobile.vue": () => import("./edit-form-mobile-fb6d3f5c.js"), "/src/app/views/diy_form/components/edit-form-number.vue": () => import("./edit-form-number-9b897c31.js"), "/src/app/views/diy_form/components/edit-form-radio.vue": () => import("./edit-form-radio-d45490d6.js"), "/src/app/views/diy_form/components/edit-form-submit.vue": () => import("./edit-form-submit-639e5534.js"), "/src/app/views/diy_form/components/edit-form-table.vue": () => import("./edit-form-table-74fd06d9.js"), "/src/app/views/diy_form/components/edit-form-textarea.vue": () => import("./edit-form-textarea-161c11ac.js"), "/src/app/views/diy_form/components/edit-form-time-scope.vue": () => import("./edit-form-time-scope-38cc876a.js"), "/src/app/views/diy_form/components/edit-form-time.vue": () => import("./edit-form-time-49f44a65.js"), "/src/app/views/diy_form/components/edit-form-video.vue": () => import("./edit-form-video-256866f9.js"), "/src/app/views/diy_form/components/edit-form-wechat-name.vue": () => import("./edit-form-wechat-name-aaa100a7.js"), "/src/app/views/diy_form/components/form-select-content.vue": () => import("./form-select-content-e9b9eb26.js"), "/src/app/views/diy_form/components/form-submit-popup.vue": () => import("./form-submit-popup-51fe5c39.js"), "/src/app/views/diy_form/components/form-write-popup.vue": () => import("./form-write-popup-10fd6d3f.js") }), z = y(null), X = (m) => {
      z.value.show(m);
    }, g = async (m = 0) => {
      D.value = !0, e.value = null;
      try {
        const { data: v } = await Ae(m);
        e.value = v;
        let $ = 0;
        if (e.value.form_details = null, e.value.order_goods.forEach((x) => {
          x.is_enable_refund == 1 && $++, x.form_details = null;
        }), e.value.is_refund_show = $ > 0, e.value.form_record_id)
          try {
            const x = await Ne(e.value.form_record_id);
            if (e.value.form_details = x.data, e.value.form_details && e.value.form_details.recordsFieldList) {
              const c = e.value.form_details.recordsFieldList;
              for (const h in c)
                V[c[h].detailComponent] ? c[h].detailComponent = Fe(V[c[h].detailComponent]) : delete c[h];
              E.value = [e.value.form_details];
            }
          } catch {
          }
      } catch {
      } finally {
        D.value = !1;
      }
    };
    f ? g(f) : D.value = !1;
    const Y = () => {
      J.confirm(
        i("orderCloseTips"),
        i("warning"),
        {
          confirmButtonText: i("confirm"),
          cancelButtonText: i("cancel"),
          type: "warning"
        }
      ).then(() => {
        je(f).then(() => {
          g(f);
        });
      });
    }, M = y(null), Z = () => {
      M.value.setFormData(e.value), M.value.showDialog = !0;
    }, N = y(null), K = () => {
      N.value.setFormData(e.value), N.value.showDialog = !0;
    }, L = y(null), ee = () => {
      L.value.setFormData(e.value), L.value.showDialog = !0;
    }, oe = () => {
      J.confirm(
        i("orderFinishTips"),
        i("warning"),
        {
          confirmButtonText: i("confirm"),
          cancelButtonText: i("cancel"),
          type: "warning"
        }
      ).then(() => {
        Me(f).then(() => {
          g(f);
        });
      });
    }, S = y(null), G = (m, v) => {
      S.value.setFormData(m, v), S.value.showDialog = !0;
    }, B = y(null), se = () => {
      let m = {
        print_type: "single"
      };
      Object.assign(m, Q(e.value)), B.value.setFormData(m), B.value.showDialog = !0;
    }, T = y(!1), R = y(null), te = async () => {
      let m = Q(e.value);
      R.value.showDialog = !0, R.value.setFormData(m);
    }, ie = () => {
      e.value.order_id && (T.value || (T.value = !0, Le({
        type: "shopGoodsOrder",
        // 小票模板类型
        trigger: "manual",
        // 触发时机：手动触发
        // 业务参数，根据自身业务传值
        business: {
          order_id: e.value.order_id
        }
      }).then((m) => {
        T.value = !1;
      }).catch(() => {
        T.value = !1;
      })));
    }, I = y(null), re = () => {
      I.value.setFormData(e.value), I.value.showDialog = !0;
    }, O = (m) => {
      const v = j.resolve({
        path: "/member/detail",
        query: { id: m }
      });
      window.open(v.href, "_blank");
    }, de = (m) => {
      const v = j.resolve({
        path: "/preview/wap",
        query: {
          page: `/addon/shop/pages/goods/detail?goods_id=${m.goods_id}`
        }
      });
      window.open(v.href);
    };
    return (m, v) => {
      const $ = ve, x = me, c = ue, h = _e, H = he, A = ye, ne = fe, ae = xe, pe = ge, le = we, ce = be;
      return d(), n("div", Qe, [
        l(x, {
          class: "card !border-none mb-[15px]",
          shadow: "never"
        }, {
          default: a(() => [
            l($, {
              content: t(W),
              icon: t($e),
              onBack: v[0] || (v[0] = (w) => t(j).push({ path: "/shop/order/index" }))
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        De((d(), u(le, {
          model: e.value,
          "label-width": "100px",
          ref: "formRef",
          class: "page-form",
          "label-position": "left"
        }, {
          default: a(() => [
            e.value ? (d(), u(x, {
              key: 0,
              class: "box-card !border-none relative",
              shadow: "never"
            }, {
              default: a(() => {
                var w;
                return [
                  s("h3", We, o(t(i)("orderInfo")), 1),
                  l(H, {
                    class: "row-bg px-[30px] mb-[20px]",
                    gutter: 20
                  }, {
                    default: a(() => [
                      l(h, { span: 8 }, {
                        default: a(() => [
                          l(c, {
                            label: t(i)("orderNo")
                          }, {
                            default: a(() => [
                              s("div", Xe, o(e.value.order_no), 1)
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(c, {
                            label: t(i)("orderForm")
                          }, {
                            default: a(() => [
                              s("div", Ye, o(e.value.order_from_name), 1)
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          e.value.out_trade_no ? (d(), u(c, {
                            key: 0,
                            label: t(i)("outTradeNo")
                          }, {
                            default: a(() => [
                              s("div", Ze, o(e.value.out_trade_no), 1)
                            ]),
                            _: 1
                          }, 8, ["label"])) : p("", !0),
                          e.value.pay ? (d(), u(c, {
                            key: 1,
                            label: t(i)("payType")
                          }, {
                            default: a(() => [
                              s("div", Ke, [
                                s("span", null, o(e.value.pay.type_name), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"])) : p("", !0),
                          l(c, {
                            label: t(i)("buyers")
                          }, {
                            default: a(() => [
                              s("div", eo, [
                                s("span", {
                                  class: "text-[14px] text-primary cursor-pointer",
                                  onClick: v[1] || (v[1] = (r) => O(e.value.member.member_id))
                                }, o(e.value.member.nickname), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          e.value.delivery_type == "store" ? (d(), n(C, { key: 2 }, [
                            l(c, {
                              label: t(i)("storeTakerName")
                            }, {
                              default: a(() => [
                                s("div", oo, o(e.value.taker_name || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("buyersReserveMobile")
                            }, {
                              default: a(() => [
                                s("div", so, o(e.value.taker_mobile || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            e.value.verify_code ? (d(), u(c, {
                              key: 0,
                              label: t(i)("verifyCode")
                            }, {
                              default: a(() => [
                                s("div", to, o(e.value.verify_code || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])) : p("", !0),
                            e.value.verifier_member ? (d(), u(c, {
                              key: 1,
                              label: t(i)("verifierMember")
                            }, {
                              default: a(() => [
                                s("div", {
                                  class: "input-width text-primary cursor-pointer",
                                  onClick: v[2] || (v[2] = (r) => O(e.value.verifier_member.member_id))
                                }, o(e.value.verifier_member.nickname), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])) : p("", !0)
                          ], 64)) : p("", !0),
                          e.value.pay ? (d(), u(c, { key: 3 }, {
                            default: a(() => [
                              e.value.member_id !== e.value.pay.main_id && e.value.pay.status == 2 ? (d(), n("div", io, [
                                s("span", null, o(e.value.pay.pay_type_name) + ", 帮付人：", 1),
                                s("span", {
                                  class: "text-primary cursor-pointer",
                                  onClick: v[3] || (v[3] = (r) => O(e.value.pay.main_id))
                                }, o(e.value.pay.pay_member), 1)
                              ])) : p("", !0)
                            ]),
                            _: 1
                          })) : p("", !0)
                        ]),
                        _: 1
                      }),
                      l(h, { span: 8 }, {
                        default: a(() => [
                          l(c, {
                            label: t(i)("deliveryType")
                          }, {
                            default: a(() => [
                              s("div", ro, [
                                k(o(e.value.delivery_type_name) + " ", 1),
                                e.value.order_delivery && e.value.order_delivery.length > 0 && e.value.order_delivery[0].third_delivery_name && e.value.delivery_type == "local_delivery" && e.value.status_name.status != 2 && e.value.status_name.status != 1 ? (d(), n("span", no, "(" + o(e.value.order_delivery[0].third_delivery_name) + ")", 1)) : p("", !0)
                              ])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          e.value.delivery_type == "express" || e.value.delivery_type == "local_delivery" ? (d(), n("div", ao, [
                            l(c, {
                              label: t(i)("takerName")
                            }, {
                              default: a(() => [
                                s("div", po, o(e.value.taker_name || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("takerMobile")
                            }, {
                              default: a(() => [
                                s("div", lo, o(e.value.taker_mobile || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("takerFullAddress")
                            }, {
                              default: a(() => [
                                s("div", co, o(e.value.taker_full_address || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ])) : p("", !0),
                          e.value.delivery_type == "local_delivery" && e.value.buyer_ask_delivery_time ? (d(), n("div", vo, [
                            l(c, {
                              label: t(i)("buyerAskDeliveryTime2")
                            }, {
                              default: a(() => [
                                s("div", mo, o(e.value.buyer_ask_delivery_time), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ])) : p("", !0),
                          e.value.delivery_type == "store" ? (d(), n("div", uo, [
                            l(c, {
                              label: t(i)("storeName")
                            }, {
                              default: a(() => [
                                s("div", _o, o(e.value.store.store_name || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("storeAddress")
                            }, {
                              default: a(() => [
                                s("div", ho, o(e.value.store.full_address || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("storeMobile")
                            }, {
                              default: a(() => [
                                s("div", yo, o(e.value.store.store_mobile || "--"), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("tradeTime")
                            }, {
                              default: a(() => [
                                s("div", fo, o(e.value.store.trade_time), 1)
                              ]),
                              _: 1
                            }, 8, ["label"]),
                            l(c, {
                              label: t(i)("buyerAskDeliveryTime")
                            }, {
                              default: a(() => [
                                s("div", xo, o(e.value.buyer_ask_delivery_time), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ])) : p("", !0)
                        ]),
                        _: 1
                      }),
                      l(h, { span: 8 }, {
                        default: a(() => [
                          l(c, {
                            label: t(i)("memberRemark")
                          }, {
                            default: a(() => [
                              s("div", go, o(e.value.member_remark ?? "--"), 1)
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(c, {
                            label: t(i)("notes")
                          }, {
                            default: a(() => [
                              s("div", wo, o(e.value.shop_remark ?? "--"), 1)
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          l(c, {
                            label: t(i)("来源记录")
                          }, {
                            default: a(() => [
                              s("div", bo, o(e.value.activity_type == "giftcard" ? "礼品卡" : e.value.activity_type == "exchange" ? "积分商城" : e.value.activity_type == "discount" ? "限时折扣" : e.value.activity_type == "seckill" ? "秒杀" : e.value.activity_type == "pintuan" ? "拼团" : e.value.activity_type == "newcomer_discount" ? "新人专享" : e.value.activity_type == "manjiansong" ? "满减送" : "商品"), 1)
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e.value.order_delivery && e.value.order_delivery.length > 0 && e.value.order_delivery[0].third_delivery_info && e.value.delivery_type == "local_delivery" && e.value.status_name.status != 2 && e.value.status_name.status != 1 ? (d(), n("h3", ko, o(t(i)("deliveryTransporterInfo")), 1)) : p("", !0),
                  e.value.order_delivery && e.value.order_delivery.length > 0 && e.value.order_delivery[0].third_delivery_info && e.value.delivery_type == "local_delivery" && e.value.status_name.status != 2 && e.value.status_name.status != 1 ? (d(), u(H, {
                    key: 1,
                    class: "row-bg px-[30px] mb-[20px]"
                  }, {
                    default: a(() => {
                      var r, _, b;
                      return [
                        e.value.order_delivery[0].third_delivery_name ? (d(), u(h, {
                          key: 0,
                          span: 8
                        }, {
                          default: a(() => [
                            l(c, {
                              label: t(i)("deliveryType")
                            }, {
                              default: a(() => [
                                s("div", Do, o(e.value.order_delivery[0].third_delivery_name), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ]),
                          _: 1
                        })) : p("", !0),
                        (r = e.value.order_delivery[0].third_delivery_info) != null && r.transporter_name ? (d(), u(h, {
                          key: 1,
                          span: 8
                        }, {
                          default: a(() => [
                            l(c, {
                              label: t(i)("deliveryTransporterName")
                            }, {
                              default: a(() => [
                                s("div", Co, o(e.value.order_delivery[0].third_delivery_info.transporter_name), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ]),
                          _: 1
                        })) : p("", !0),
                        (_ = e.value.order_delivery[0].third_delivery_info) != null && _.transporter_phone ? (d(), u(h, {
                          key: 2,
                          span: 8
                        }, {
                          default: a(() => [
                            l(c, {
                              label: t(i)("deliveryTransporterMobile")
                            }, {
                              default: a(() => [
                                s("div", Fo, o(e.value.order_delivery[0].third_delivery_info.transporter_phone), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ]),
                          _: 1
                        })) : p("", !0),
                        (b = e.value.order_delivery[0].third_delivery_info) != null && b.status_name ? (d(), u(h, {
                          key: 3,
                          span: 8
                        }, {
                          default: a(() => [
                            l(c, {
                              label: t(i)("deliveryTransporterStatus")
                            }, {
                              default: a(() => [
                                s("div", Eo, o(e.value.order_delivery[0].third_delivery_info.status_name), 1)
                              ]),
                              _: 1
                            }, 8, ["label"])
                          ]),
                          _: 1
                        })) : p("", !0)
                      ];
                    }),
                    _: 1
                  })) : p("", !0),
                  s("h3", To, o(t(i)("orderStatus")), 1),
                  s("div", $o, [
                    s("p", null, [
                      s("span", Ao, o(t(i)("orderStatus")) + "：", 1),
                      s("span", jo, o(e.value.status_name.name), 1)
                    ]),
                    s("div", Mo, [
                      s("span", {
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#ff7f5b] bg-[#fff0e5] cursor-pointer",
                        onClick: ee
                      }, o(t(i)("notes")), 1),
                      e.value.status == 2 ? (d(), n("span", {
                        key: 0,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: K
                      }, o(t(i)("delivery")), 1)) : p("", !0),
                      e.value.status == 1 ? (d(), n("span", {
                        key: 1,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: Y
                      }, o(t(i)("close")), 1)) : p("", !0),
                      e.value.status == 1 ? (d(), n("span", {
                        key: 2,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: Z
                      }, o(t(i)("editPrice")), 1)) : p("", !0),
                      e.value.status == 3 ? (d(), n("span", {
                        key: 3,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: oe
                      }, o(t(i)("finish")), 1)) : p("", !0),
                      e.value.delivery_type == "express" && e.value.status == 3 ? (d(), n("span", {
                        key: 4,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: se
                      }, o(t(i)("electronicSheetPrintTitle")), 1)) : p("", !0),
                      e.value.delivery_type == "virtual" && (e.value.status == 2 || e.value.status == 3 || e.value.status == 5) ? (d(), n("span", {
                        key: 5,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: ie
                      }, o(t(i)("printTicket")), 1)) : p("", !0),
                      e.value.status == 1 && e.value.delivery_type != "virtual" && e.value.activity_type != "giftcard" ? (d(), n("span", {
                        key: 6,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: te
                      }, o(t(i)("editAddress")), 1)) : p("", !0),
                      e.value.is_refund_show && e.value.status != 1 && e.value.status != -1 ? (d(), n("span", {
                        key: 7,
                        class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",
                        onClick: re
                      }, o(t(i)("voluntaryRefund")), 1)) : p("", !0),
                      e.value.order_delivery ? (d(), n("div", No, [
                        (d(!0), n(C, null, P(e.value.order_delivery, (r, _) => (d(), n(C, { key: _ }, [
                          r.delivery_type == "express" && r.sub_delivery_type == "express" ? (d(), n("span", {
                            key: 0,
                            class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#ff7f5b] bg-[#fff0e5] cursor-pointer",
                            onClick: (b) => G(r.id, e.value.taker_mobile)
                          }, o(t(i)("package")) + o(_ + 1), 9, Lo)) : p("", !0),
                          r.delivery_type == "express" && r.sub_delivery_type == "none_express" ? (d(), n("span", {
                            key: 1,
                            class: "text-[14px] px-[15px] py-[5px] ml-[30px] text-[#ff7f5b] bg-[#fff0e5] cursor-pointer",
                            onClick: (b) => G(r.id, e.value.taker_mobile)
                          }, o(t(i)("noLogisticsRequired")), 9, So)) : p("", !0)
                        ], 64))), 128))
                      ])) : p("", !0)
                    ]),
                    s("div", Bo, [
                      s("span", Ro, o(t(i)("remind")) + "：", 1),
                      s("div", Io, [
                        s("p", Oo, o(t(i)("remindTips1")), 1),
                        s("p", Po, o(t(i)("remindTips2")), 1),
                        s("p", qo, o(t(i)("remindTips3")), 1)
                      ])
                    ])
                  ]),
                  e.value.form_record_show == 1 ? (d(), n("h3", Vo, o(t(i)("formDetail")), 1)) : p("", !0),
                  e.value.form_record_show == 1 ? (d(), n("div", zo, [
                    s("div", Go, [
                      (d(!0), n(C, null, P(((w = E.value[0]) == null ? void 0 : w.recordsFieldList) || [], (r, _) => (d(), u(c, {
                        key: _,
                        label: r.field_name,
                        "min-width": "200"
                      }, {
                        default: a(() => {
                          var b, U;
                          return [
                            (d(), u(Ce((b = E.value[0]) == null ? void 0 : b.recordsFieldList[_].detailComponent), {
                              data: (U = E.value[0]) == null ? void 0 : U.recordsFieldList[_]
                            }, null, 8, ["data"]))
                          ];
                        }),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ])
                  ])) : p("", !0),
                  s("h3", Ho, o(t(i)("goodsDetail")), 1),
                  l(ae, {
                    data: e.value.order_goods,
                    size: "large"
                  }, {
                    default: a(() => [
                      l(A, {
                        label: t(i)("goodsName"),
                        align: "left",
                        width: "300"
                      }, {
                        default: a(({ row: r }) => [
                          s("div", {
                            class: "flex cursor-pointer",
                            onClick: (_) => de(r)
                          }, [
                            s("div", Jo, [
                              s("img", {
                                class: "w-[50px] h-[50px] mr-[10px]",
                                src: t(He)(r.goods_image)
                              }, null, 8, Qo)
                            ]),
                            s("div", Wo, [
                              s("p", Xo, o(r.goods_name), 1),
                              s("span", Yo, o(r.sku_name), 1),
                              r.is_gift == 1 ? (d(), n("span", Zo, "赠品")) : p("", !0),
                              r.impulse_buy_info && r.impulse_buy_info.is_impulse_buy ? (d(), n("span", Ko, "顺手买")) : p("", !0)
                            ])
                          ], 8, Uo)
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      l(A, {
                        label: t(i)("price"),
                        "min-width": "50",
                        align: "left"
                      }, {
                        default: a(({ row: r }) => [
                          s("div", es, [
                            e.value.activity_type == "exchange" ? (d(), n("span", os, [
                              k(o(r.extend.point) + o(t(i)("point")) + " ", 1),
                              parseFloat(r.price) ? (d(), n("span", ss, "+￥" + o(r.price), 1)) : p("", !0)
                            ])) : r.impulse_buy_info && r.impulse_buy_info.is_impulse_buy ? (d(), n("span", ts, "￥" + o(parseFloat(r.impulse_buy_info.impulse_buy_price).toFixed(2)), 1)) : (d(), n("span", is, "￥" + o(r.price), 1)),
                            r.impulse_buy_info && r.impulse_buy_info.is_impulse_buy && r.num > 1 ? (d(), n("span", rs, o(r.impulse_buy_info.show_tips), 1)) : p("", !0),
                            r.extend && r.extend.newcomer_price ? (d(), n("span", ds, [
                              parseFloat(r.extend.newcomer_price) && r.num > 1 ? (d(), n("span", ns, [
                                k(o(r.num) + o(r.unit), 1),
                                s("span", as, "（第1" + o(r.unit) + "，￥" + o(parseFloat(r.extend.newcomer_price).toFixed(2)) + "/" + o(r.unit) + "；第" + o(r.num > 2 ? "2~" + r.num : "2") + o(r.unit) + "，￥" + o(parseFloat(r.price).toFixed(2)) + "/" + o(r.unit) + "）", 1)
                              ])) : (d(), n("span", ps, o(r.num) + o(r.unit), 1))
                            ])) : (d(), n("span", ls, o(r.num) + o(r.unit), 1))
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      l(A, {
                        prop: "num",
                        label: t(i)("num"),
                        "min-width": "50",
                        align: "right"
                      }, null, 8, ["label"]),
                      l(A, {
                        align: "right",
                        "min-width": "120"
                      }, {
                        default: a(({ row: r }) => [
                          r.form_record_show == 1 ? (d(), u(ne, {
                            key: 0,
                            type: "primary",
                            link: "",
                            onClick: (_) => X(r.form_record_id)
                          }, {
                            default: a(() => [
                              k(o(t(i)("formDetail")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : p("", !0)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["data"]),
                  s("div", cs, [
                    s("div", vs, [
                      s("div", ms, [
                        s("div", us, o(t(i)("goodsMoney")), 1),
                        s("div", _s, [
                          e.value.activity_type == "exchange" ? (d(), n("span", hs, [
                            k(o(e.value.point) + o(t(i)("point")) + " ", 1),
                            parseFloat(e.value.goods_money) ? (d(), n("span", ys, "+￥" + o(e.value.goods_money), 1)) : p("", !0)
                          ])) : (d(), n("span", fs, "￥" + o(e.value.goods_money), 1))
                        ])
                      ]),
                      e.value.coupon_money > 0 ? (d(), n("div", xs, [
                        s("div", gs, o(t(i)("couponMoney")), 1),
                        s("div", ws, o(e.value.coupon_money), 1)
                      ])) : p("", !0),
                      e.value.manjian_discount_money > 0 ? (d(), n("div", bs, [
                        s("div", ks, o(t(i)("manjianDiscountMoney")), 1),
                        s("div", Ds, o(e.value.manjian_discount_money), 1)
                      ])) : p("", !0),
                      s("div", Cs, [
                        s("div", Fs, o(t(i)("discountMoney")), 1),
                        s("div", Es, o(e.value.discount_money), 1)
                      ]),
                      s("div", Ts, [
                        s("div", $s, o(t(i)("deliveryMoney")), 1),
                        s("div", As, o(e.value.delivery_money), 1)
                      ]),
                      s("div", js, [
                        s("div", Ms, o(t(i)("orderMoney")), 1),
                        s("div", Ns, [
                          e.value.activity_type == "exchange" ? (d(), n("span", Ls, [
                            k(o(e.value.point) + o(t(i)("point")) + " ", 1),
                            parseFloat(e.value.order_money) ? (d(), n("span", Ss, "+￥" + o(e.value.order_money), 1)) : p("", !0)
                          ])) : (d(), n("span", Bs, "￥" + o(e.value.order_money), 1))
                        ])
                      ])
                    ])
                  ]),
                  e.value.order_log.length > 0 ? (d(), n("h3", Rs, o(t(i)("operateLog")), 1)) : p("", !0),
                  e.value.order_log.length > 0 ? (d(), n("div", Is, [
                    (d(!0), n(C, null, P(e.value.order_log, (r, _) => (d(), n("div", {
                      class: "flex",
                      key: _
                    }, [
                      s("div", Os, [
                        s("div", Ps, o(r.create_time && r.create_time.split(" ")[0]), 1),
                        s("div", qs, o(r.create_time && r.create_time.split(" ")[1]), 1)
                      ]),
                      s("div", null, [
                        Vs,
                        _ + 1 != e.value.order_log.length ? (d(), n("div", zs)) : p("", !0)
                      ]),
                      s("div", null, [
                        s("div", Gs, o(r.main_type_name) + o(r.main_name), 1),
                        s("div", Hs, [
                          s("span", null, o(r.type_name), 1),
                          s("span", Us, o(r.content), 1)
                        ])
                      ])
                    ]))), 128))
                  ])) : p("", !0)
                ];
              }),
              _: 1
            })) : p("", !0),
            !D.value && !e.value ? (d(), u(x, {
              key: 1,
              class: "box-card !border-none relative",
              shadow: "never"
            }, {
              default: a(() => [
                l(pe, {
                  description: t(i)("orderInfoEmpty")
                }, null, 8, ["description"])
              ]),
              _: 1
            })) : p("", !0)
          ]),
          _: 1
        }, 8, ["model"])), [
          [ce, D.value]
        ]),
        l(Oe, {
          ref_key: "orderAdjustMoneyActionDialog",
          ref: M,
          onComplete: v[4] || (v[4] = (w) => g(t(f)))
        }, null, 512),
        l(Se, {
          ref_key: "deliveryActionDialog",
          ref: N,
          onComplete: v[5] || (v[5] = (w) => g(t(f)))
        }, null, 512),
        l(Be, {
          ref_key: "orderNotesDialog",
          ref: L,
          onComplete: v[6] || (v[6] = (w) => g(t(f)))
        }, null, 512),
        l(Ie, {
          ref_key: "packageDialog",
          ref: S
        }, null, 512),
        l(Pe, {
          ref_key: "electronicSheetPrintDialog",
          ref: B,
          onComplete: m.loadOrderList
        }, null, 8, ["onComplete"]),
        l(Re, {
          ref_key: "orderEditAddressDialog",
          ref: R,
          onComplete: m.loadOrderList
        }, null, 8, ["onComplete"]),
        l(qe, {
          ref_key: "shopActiveRefundDialog",
          ref: I,
          onComplete: v[7] || (v[7] = (w) => g(t(f)))
        }, null, 512),
        l(Ve, {
          ref_key: "formDetailDialog",
          ref: z
        }, null, 512)
      ]);
    };
  }
});
const Qs = /* @__PURE__ */ Ue(Js, [["__scopeId", "data-v-4e348e23"]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qs as default
};
