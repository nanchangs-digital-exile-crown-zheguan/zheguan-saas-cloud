import { d as request } from "./common.f536f441.js";
function getInvoiceConfig() {
  return request.get(`shop/config/invoice`);
}
export {
  getInvoiceConfig as g
};
