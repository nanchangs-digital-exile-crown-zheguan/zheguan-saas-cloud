import { d as request } from "./common.f536f441.js";
function getDiyInfo(params) {
  return request.get("diy/diy", params);
}
function getShareInfo(params) {
  return request.get("diy/share", params);
}
export {
  getShareInfo as a,
  getDiyInfo as g
};
