import { d as request } from "./common.f536f441.js";
function getDiyFormInfo(params) {
  return request.get(`diy/form`, params);
}
function addFormRecord(params) {
  return request.post("diy/form/record", params);
}
function editFormRecord(params) {
  return request.put("diy/form/record", params);
}
function getFormRecord(params) {
  return request.get(`diy/form/record`, params);
}
export {
  getFormRecord as a,
  addFormRecord as b,
  editFormRecord as e,
  getDiyFormInfo as g
};
