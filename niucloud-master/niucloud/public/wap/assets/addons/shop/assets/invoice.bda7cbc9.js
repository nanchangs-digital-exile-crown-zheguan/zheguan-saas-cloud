import { d as request } from "./common.f536f441.js";
function getInvoiceList(params) {
  return request.get(`shop/order/invoice/list`, params);
}
function getInvoiceInfo(id) {
  return request.get(`shop/order/invoice/${id}`);
}
function calculateInvoice(params) {
  return request.post(`shop/order/invoice/calculate`, params);
}
function addInvoice(params) {
  return request.post(`shop/order/invoice/apply`, params);
}
function editInvoice(id, params) {
  return request.post(`shop/order/invoice/edit/${id}`, params);
}
function cancelInvoice(id) {
  return request.delete(`shop/order/invoice/cancel/${id}`);
}
export {
  addInvoice as a,
  getInvoiceList as b,
  calculateInvoice as c,
  cancelInvoice as d,
  editInvoice as e,
  getInvoiceInfo as g
};
