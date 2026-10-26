import { d as request } from "./common.f536f441.js";
function getRankList() {
  return request.get(`shop/rank`);
}
function getRankGoodsList(params) {
  return request.get(`shop/rank/goods`, params);
}
function getRankConfig() {
  return request.get(`shop/rank/getRankConfig`);
}
function getRankComponentsGoodsList(params) {
  return request.get(`shop/rank/components`, params);
}
export {
  getRankConfig as a,
  getRankGoodsList as b,
  getRankComponentsGoodsList as c,
  getRankList as g
};
