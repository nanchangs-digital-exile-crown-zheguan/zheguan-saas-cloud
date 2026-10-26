import { d as request } from "./common.f536f441.js";
function getNewcomerGoodsList(params) {
  return request.get(`shop/newcomer/goods`, params);
}
function getNewcomersConfig() {
  return request.get(`shop/newcomer/config`);
}
function getNewcomersComponentsList(params) {
  return request.get(`shop/newcomer/goods/components`, params);
}
export {
  getNewcomerGoodsList as a,
  getNewcomersComponentsList as b,
  getNewcomersConfig as g
};
