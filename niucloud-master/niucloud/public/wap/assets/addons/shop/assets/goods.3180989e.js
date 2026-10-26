import { d as request } from "./common.f536f441.js";
function getGoodsCategoryConfig() {
  return request.get(`shop/goods/category/config`);
}
function getGoodsCategoryTree() {
  return request.get(`shop/goods/category/tree`);
}
function getGoodsCategoryList(params) {
  return request.get(`shop/goods/category/list`, params);
}
function getGoodsPages(params) {
  return request.get(`shop/goods/pages`, params);
}
function getGoodsDetail(params) {
  return request.get(`shop/goods/detail`, params);
}
function getGoodsSku(sku_id) {
  return request.get(`shop/goods/sku/${sku_id}`);
}
function getCollectList(params) {
  return request.get(`shop/goods/collect`, params);
}
function cancelCollect(params) {
  return request.put(`shop/goods/collect`, params, { showSuccessMessage: true });
}
function collect(goods_id) {
  return request.post(`shop/goods/collect/${goods_id}`);
}
function getEvaluateList(goods_id) {
  return request.get(`shop/goods/evaluate/list`, { goods_id });
}
function getGoodsComponents(params) {
  return request.get(`shop/goods/components`, params);
}
function getManjian(params) {
  return request.get(`shop/manjian/info`, params);
}
function browse(params) {
  return request.post(`shop/goods/browse`, params, { showSuccessMessage: false });
}
function getBrowse(params) {
  return request.get(`shop/goods/browse`, params);
}
function delBrowse(params) {
  return request.delete(`shop/goods/browse`, params);
}
function getGoodsConfigSearch() {
  return request.get(`shop/goods/config/search`);
}
export {
  getGoodsCategoryConfig as a,
  getCollectList as b,
  cancelCollect as c,
  delBrowse as d,
  getGoodsCategoryTree as e,
  getGoodsPages as f,
  getBrowse as g,
  getGoodsDetail as h,
  browse as i,
  getGoodsConfigSearch as j,
  getGoodsComponents as k,
  getGoodsSku as l,
  getEvaluateList as m,
  getGoodsCategoryList as n,
  collect as o,
  getManjian as p
};
