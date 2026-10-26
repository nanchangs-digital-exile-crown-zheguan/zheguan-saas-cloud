var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { j as getStorageSync, n as setStorageSync, z as removeStorageSync, A as showLoading, B as hideLoading, s as showToast, C as getLocale, D as uploadFile, E as request$1, k as setStorage, F as getStorage, m as getCurrentPages$1, G as makePhoneCall, H as hideKeyboard, q as navigateBack } from "./uni-h5.es.7545a186.js";
import { defineStore } from "/wap/assets/shared/pinia.js";
import { ref, getCurrentInstance, nextTick, toRaw } from "/wap/assets/shared/vue.js";
import { t, language, i18n } from "/wap/assets/shared/wap-locale.js";
import { g as getRegisteredAddonModule } from "./entry.172aa559.js";
import useDiyStore, { resolveDecorateMode } from "/wap/assets/shared/diy-core.js";
const pages = [
  {
    path: "app/pages/index/index",
    style: {
      navigationBarTitleText: "%pages.index.index%",
      usingComponents: {
        "diy-group": "../../../../addon/components/diy/group/index"
      },
      componentPlaceholder: {
        "diy-group": "view"
      }
    }
  },
  {
    path: "app/pages/auth/index",
    style: {
      navigationBarTitleText: "%pages.auth.index%"
    }
  },
  {
    path: "app/pages/auth/agreement",
    style: {
      navigationBarTitleText: "%pages.auth.agreement%"
    }
  },
  {
    path: "app/pages/auth/bind",
    style: {
      navigationBarTitleText: "%pages.auth.bind%"
    }
  },
  {
    path: "app/pages/auth/login",
    style: {
      navigationBarTitleText: "%pages.auth.login%"
    }
  },
  {
    path: "app/pages/auth/register",
    style: {
      navigationBarTitleText: "%pages.auth.register%"
    }
  },
  {
    path: "app/pages/auth/resetpwd",
    style: {
      navigationBarTitleText: "%pages.auth.resetpwd%"
    }
  },
  {
    path: "app/pages/index/diy",
    style: {
      navigationBarTitleText: "%pages.index.diy%",
      usingComponents: {
        "diy-group": "../../../../addon/components/diy/group/index"
      },
      componentPlaceholder: {
        "diy-group": "view"
      }
    }
  },
  {
    path: "app/pages/index/diy_form",
    style: {
      navigationBarTitleText: "%pages.index.diy_form%",
      usingComponents: {
        "diy-group": "../../../../addon/components/diy/group/index"
      },
      componentPlaceholder: {
        "diy-group": "view"
      }
    }
  },
  {
    path: "app/pages/index/diy_form_result",
    style: {
      navigationBarTitleText: "%pages.index.diy_form_result%"
    },
    needLogin: true
  },
  {
    path: "app/pages/index/diy_form_detail",
    style: {
      navigationBarTitleText: "%pages.index.diy_form_detail%"
    },
    needLogin: true
  },
  {
    path: "app/pages/index/close",
    style: {
      navigationBarTitleText: "%pages.index.close%"
    }
  },
  {
    path: "app/pages/index/nosite",
    style: {
      navigationBarTitleText: "%pages.index.nosite%"
    }
  },
  {
    path: "app/pages/pay/browser",
    style: {
      navigationBarTitleText: "%pages.pay.browser%"
    }
  },
  {
    path: "app/pages/pay/result",
    style: {
      navigationBarTitleText: "%pages.pay.result%"
    }
  },
  {
    path: "app/pages/setting/index",
    style: {
      navigationBarTitleText: "%pages.setting.index%"
    },
    needLogin: true
  },
  {
    path: "app/pages/setting/authorization",
    style: {
      navigationBarTitleText: "%pages.setting.authorization%"
    },
    needLogin: true
  },
  {
    path: "app/pages/webview/index",
    style: {
      navigationBarTitleText: "%pages.webview.index%"
    }
  },
  {
    path: "app/pages/index/develop",
    style: {
      navigationBarTitleText: "%pages.index.develop%"
    }
  },
  {
    path: "app/pages/verify/index",
    style: {
      navigationBarTitleText: "%pages.verify.index%"
    },
    needLogin: true
  },
  {
    path: "app/pages/verify/verify",
    style: {
      navigationBarTitleText: "%pages.verify.verify%"
    },
    needLogin: true
  },
  {
    path: "app/pages/verify/detail",
    style: {
      navigationBarTitleText: "%pages.verify.detail%"
    },
    needLogin: true
  },
  {
    path: "app/pages/verify/record",
    style: {
      navigationBarTitleText: "%pages.verify.record%"
    },
    needLogin: true
  },
  {
    path: "app/pages/weapp/order_shipping",
    style: {
      navigationBarTitleText: "%pages.weapp.order_shipping%"
    }
  },
  {
    path: "app/pages/friendspay/share",
    style: {
      navigationBarTitleText: "%pages.friendspay.share%"
    },
    needLogin: true
  },
  {
    path: "app/pages/friendspay/money",
    style: {
      navigationBarTitleText: "%pages.friendspay.money%"
    }
  },
  {
    path: "app/pages/addon-universal/index",
    style: {
      navigationBarTitleText: ""
    }
  }
];
const subPackages = [
  {
    root: "addon/shop",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%shop.pages.index%"
        }
      },
      {
        path: "pages/coupon/list",
        style: {
          navigationBarTitleText: "%shop.pages.coupon.list%"
        }
      },
      {
        path: "pages/coupon/detail",
        style: {
          navigationBarTitleText: "%shop.pages.coupon.detail%"
        }
      },
      {
        path: "pages/discount/list",
        style: {
          navigationBarTitleText: "%shop.pages.discount.list%"
        }
      },
      {
        path: "pages/evaluate/list",
        style: {
          navigationBarTitleText: "%shop.pages.evaluate.list%"
        }
      },
      {
        path: "pages/evaluate/order_evaluate",
        style: {
          navigationBarTitleText: "%shop.pages.evaluate.order_evaluate%"
        }
      },
      {
        path: "pages/evaluate/order_evaluate_view",
        style: {
          navigationBarTitleText: "%shop.pages.evaluate.order_evaluate_view%"
        }
      },
      {
        path: "pages/member/my_coupon",
        style: {
          navigationBarTitleText: "%shop.pages.member.my_coupon%"
        },
        needLogin: true
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%shop.pages.member.index%"
        }
      },
      {
        path: "pages/goods/search",
        style: {
          navigationBarTitleText: "%shop.pages.goods.search%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%shop.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/rank",
        style: {
          navigationBarTitleText: "%shop.pages.goods.rank%"
        }
      },
      {
        path: "pages/newcomer/list",
        style: {
          navigationBarTitleText: "%shop.pages.newcomer.list%"
        }
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%shop.pages.goods.detail%",
          navigationStyle: "custom"
        }
      },
      {
        path: "pages/goods/cart",
        style: {
          navigationBarTitleText: "%shop.pages.goods.cart%"
        }
      },
      {
        path: "pages/goods/collect",
        style: {
          navigationBarTitleText: "%shop.pages.goods.collect%"
        },
        needLogin: true
      },
      {
        path: "pages/goods/browse",
        style: {
          navigationBarTitleText: "%shop.pages.goods.browse%"
        },
        needLogin: true
      },
      {
        path: "pages/goods/category",
        style: {
          navigationBarTitleText: "%shop.pages.goods.category%"
        }
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%shop.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%shop.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%shop.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/apply",
        style: {
          navigationBarTitleText: "%shop.pages.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/edit_apply",
        style: {
          navigationBarTitleText: "%shop.pages.refund.edit_apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/list",
        style: {
          navigationBarTitleText: "%shop.pages.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/detail",
        style: {
          navigationBarTitleText: "%shop.pages.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/log",
        style: {
          navigationBarTitleText: "%shop.pages.refund.log%"
        },
        needLogin: true
      },
      {
        path: "pages/point/index",
        style: {
          navigationBarTitleText: "%shop.pages.point.index%"
        }
      },
      {
        path: "pages/point/list",
        style: {
          navigationBarTitleText: "%shop.pages.point.list%"
        }
      },
      {
        path: "pages/point/detail",
        style: {
          navigationStyle: "custom",
          navigationBarTitleText: "%shop.pages.point.detail%"
        }
      },
      {
        path: "pages/point/payment",
        style: {
          navigationBarTitleText: "%shop.pages.point.payment%"
        }
      },
      {
        path: "pages/point/order_list",
        style: {
          navigationBarTitleText: "%shop.pages.point.order_list%"
        }
      },
      {
        path: "pages/invoice/list",
        style: {
          navigationBarTitleText: "%shop.pages.invoice.list%"
        }
      },
      {
        path: "pages/invoice/detail",
        style: {
          navigationBarTitleText: "%shop.pages.invoice.detail%"
        }
      },
      {
        path: "pages/invoice/invoice",
        style: {
          navigationBarTitleText: "%shop.pages.invoice.invoice%"
        }
      },
      {
        path: "pages/invoice/invoice_edit",
        style: {
          navigationBarTitleText: "%shop.pages.invoice.invoice_edit%"
        }
      },
      {
        path: "pages/invoice/invoice_order",
        style: {
          navigationBarTitleText: "%shop.pages.invoice.invoice_order%"
        }
      }
    ]
  },
  {
    root: "addon/shop_giftcard",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.index%"
        }
      },
      {
        path: "pages/list",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.list%"
        }
      },
      {
        path: "pages/detail",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.detail%"
        }
      },
      {
        path: "pages/order_list",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.order_list%"
        },
        needLogin: true
      },
      {
        path: "pages/order_detail",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.order_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.member%"
        }
      },
      {
        path: "pages/my_card_list",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.my_card_list%"
        },
        needLogin: true
      },
      {
        path: "pages/card_bag",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.card_bag%"
        },
        needLogin: true
      },
      {
        path: "pages/activate",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.activate%"
        }
      },
      {
        path: "pages/receive_list",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.receive_list%"
        },
        needLogin: true
      },
      {
        path: "pages/give_list",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.give_list%"
        },
        needLogin: true
      },
      {
        path: "pages/give_detail",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.give_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/give",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.give%"
        },
        needLogin: true
      },
      {
        path: "pages/receive_info",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.receive_info%"
        }
      },
      {
        path: "pages/use_card",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.use_card%"
        },
        needLogin: true
      },
      {
        path: "pages/use_goods_select",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.use_goods_select%"
        },
        needLogin: true
      },
      {
        path: "pages/payment",
        style: {
          navigationBarTitleText: "%shop_giftcard.pages.payment%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/o2o",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%o2o.pages.index%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%o2o.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%o2o.pages.goods.detail%"
        }
      },
      {
        path: "pages/goods/category",
        style: {
          navigationBarTitleText: "%o2o.pages.goods.category%"
        }
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%o2o.pages.member.index%"
        }
      },
      {
        path: "pages/technician/list",
        style: {
          navigationBarTitleText: "%o2o.pages.technician.list%"
        }
      },
      {
        path: "pages/technician/detail",
        style: {
          navigationBarTitleText: "%o2o.pages.technician.detail%"
        }
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%o2o.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%o2o.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%o2o.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/apply",
        style: {
          navigationBarTitleText: "%o2o.pages.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/detail",
        style: {
          navigationBarTitleText: "%o2o.pages.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/list",
        style: {
          navigationBarTitleText: "%o2o.pages.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/log",
        style: {
          navigationBarTitleText: "%o2o.pages.refund.log%"
        },
        needLogin: true
      },
      {
        path: "pages/address/index",
        style: {
          navigationBarTitleText: "%o2o.pages.address.index%"
        },
        needLogin: true
      },
      {
        path: "pages/address/address_edit",
        style: {
          navigationBarTitleText: "%o2o.pages.address.address_edit%"
        },
        needLogin: true
      },
      {
        path: "pages/master/task/list",
        style: {
          navigationBarTitleText: "%o2o.pages.master.task.list%"
        },
        needLogin: true
      },
      {
        path: "pages/master/task/detail",
        style: {
          navigationBarTitleText: "%o2o.pages.master.task.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/master/task/add",
        style: {
          navigationBarTitleText: "%o2o.pages.master.task.add%"
        },
        needLogin: true
      },
      {
        path: "pages/master/task/show",
        style: {
          navigationBarTitleText: "%o2o.pages.master.task.show%"
        },
        needLogin: true
      },
      {
        path: "pages/master/task/refund",
        style: {
          navigationBarTitleText: "%o2o.pages.master.task.refund%"
        },
        needLogin: true
      },
      {
        path: "pages/master/statistics/index",
        style: {
          navigationBarTitleText: "%o2o.pages.master.statistics.index%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/seckill",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%seckill.pages.index%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%seckill.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%seckill.pages.goods.detail%"
        }
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%seckill.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%seckill.pages.member.index%"
        }
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%seckill.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%seckill.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/detail",
        style: {
          navigationBarTitleText: "%seckill.pages.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/list",
        style: {
          navigationBarTitleText: "%seckill.pages.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/log",
        style: {
          navigationBarTitleText: "%seckill.pages.refund.log%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/apply",
        style: {
          navigationBarTitleText: "%seckill.pages.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/edit_apply",
        style: {
          navigationBarTitleText: "%seckill.pages.refund.edit_apply%"
        },
        needLogin: true
      },
      {
        path: "pages/order/card_record",
        style: {
          navigationBarTitleText: "%seckill.pages.order.card_record%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/pintuan",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%pintuan.pages.index%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%pintuan.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%pintuan.pages.goods.detail%"
        }
      },
      {
        path: "pages/my_spell",
        style: {
          navigationBarTitleText: "%pintuan.pages.my_spell%"
        },
        needLogin: true
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%pintaun.pages.member.index%"
        }
      },
      {
        path: "pages/share",
        style: {
          navigationBarTitleText: "%pintuan.pages.share%"
        },
        needLogin: true
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%pintuan.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%pintuan.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%pintuan.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/apply",
        style: {
          navigationBarTitleText: "%pintuan.pages.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/detail",
        style: {
          navigationBarTitleText: "%pintuan.pages.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/list",
        style: {
          navigationBarTitleText: "%pintuan.pages.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/edit_apply",
        style: {
          navigationBarTitleText: "%pintuan.pages.refund.edit_apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/log",
        style: {
          navigationBarTitleText: "%pintuan.pages.refund.log%"
        },
        needLogin: true
      },
      {
        path: "pages/order/card_record",
        style: {
          navigationBarTitleText: "%pintuan.pages.order.card_record%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/friend_help",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%friend_help.pages.index%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%friend_help.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/share",
        style: {
          navigationBarTitleText: "%friend_help.pages.goods.share%"
        },
        needLogin: true
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%friend_help.pages.goods.detail%"
        }
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%friend_help.pages.member.index%"
        }
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%friend_help.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%friend_help.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%friend_help.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/apply",
        style: {
          navigationBarTitleText: "%friend_help.pages.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/detail",
        style: {
          navigationBarTitleText: "%friend_help.pages.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/list",
        style: {
          navigationBarTitleText: "%friend_help.pages.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/edit_apply",
        style: {
          navigationBarTitleText: "%friend_help.pages.refund.edit_apply%"
        },
        needLogin: true
      },
      {
        path: "pages/refund/log",
        style: {
          navigationBarTitleText: "%friend_help.pages.refund.log%"
        },
        needLogin: true
      },
      {
        path: "pages/order/card_record",
        style: {
          navigationBarTitleText: "%friend_help.pages.order.card_record%"
        },
        needLogin: true
      },
      {
        path: "pages/my_help",
        style: {
          navigationBarTitleText: "%friend_help.pages.my_help%"
        },
        needLogin: true
      },
      {
        path: "pages/goods/bargain",
        style: {
          navigationBarTitleText: "%friend_help.pages.goods.bargain%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/home_service/technician",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.index%"
        },
        needLogin: true
      },
      {
        path: "pages/order/index",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.index%"
        }
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.detail%"
        }
      },
      {
        path: "pages/order/grabOrder",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.grabOrder%"
        }
      },
      {
        path: "pages/order/additional",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.additional%"
        }
      },
      {
        path: "pages/order/indent_order",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.indent_order%"
        }
      },
      {
        path: "pages/order/indent_detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.indent_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/indent_list",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.order.indent_list%"
        },
        needLogin: true
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.index%"
        },
        needLogin: true
      },
      {
        path: "pages/notice/index",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.notice.index%"
        },
        needLogin: true
      },
      {
        path: "pages/member/account/account_statement",
        style: {
          navigationBarTitleText: "%home_service.technician.member.account.account_statement%"
        },
        needLogin: true
      },
      {
        path: "pages/member/account/list",
        style: {
          navigationBarTitleText: "%home_service.technician.member.account.list%"
        },
        needLogin: true
      },
      {
        path: "pages/member/order/statistics",
        style: {
          navigationBarTitleText: "%home_service.technician.member.order.statistics%"
        },
        needLogin: true
      },
      {
        path: "pages/member/rest/index",
        style: {
          navigationBarTitleText: "%home_service.technician.member.rest.index%"
        },
        needLogin: true
      },
      {
        path: "pages/member/ranking_list/ranking_list",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.ranking_list.ranking_list%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/help",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.help.help%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.help.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/feedback/feedback",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.feedback.feedback%"
        },
        needLogin: true
      },
      {
        path: "pages/member/account/withdraw",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.account.withdraw%"
        },
        needLogin: true
      },
      {
        path: "pages/member/account/withdraw_list",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.account.withdraw_list%"
        },
        needLogin: true
      },
      {
        path: "pages/member/account/withdraw_edit",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.account.withdraw_edit%"
        },
        needLogin: true
      },
      {
        path: "pages/member/detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/store/detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.store.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/order/evaluate",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.order.evaluate%"
        },
        needLogin: true
      },
      {
        path: "pages/member/cash/cash_out",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.cash.cash_out%"
        },
        needLogin: true
      },
      {
        path: "pages/member/cash/cash_out_detail",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.cash.cash_out_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/auth/login",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.auth.login%"
        },
        needLogin: false
      },
      {
        path: "pages/auth/register",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.auth.register%"
        },
        needLogin: false
      },
      {
        path: "pages/member/fare/fare",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.member.fare.fare%"
        },
        needLogin: false
      }
    ]
  },
  {
    root: "addon/home_service/store",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%home_service.store.pages.index%"
        },
        needLogin: true
      },
      {
        path: "pages/store/index",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.index%"
        },
        needLogin: true
      },
      {
        path: "pages/store/settle",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.settle%"
        },
        needLogin: true
      },
      {
        path: "pages/store/submit_success",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.submit_success%"
        },
        needLogin: true
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.index%"
        },
        needLogin: true
      },
      {
        path: "pages/technician/index",
        style: {
          navigationBarTitleText: "%home_service.store.pages.technician.index%"
        },
        needLogin: true
      },
      {
        path: "pages/technician/detail",
        style: {
          navigationBarTitleText: "%home_service.store.pages.technician.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/technician/rest",
        style: {
          navigationBarTitleText: "%home_service.store.pages.technician.rest%"
        },
        needLogin: true
      },
      {
        path: "pages/member/evaluate",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.evaluate%"
        },
        needLogin: true
      },
      {
        path: "pages/member/store_info",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.store_info%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/account_statement",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.account_statement%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/list",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.list%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/order_statistics",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.order_statistics%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/withdraw",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.withdraw%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/withdraw_list",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.withdraw_list%"
        },
        needLogin: true
      },
      {
        path: "pages/store/account/withdraw_edit",
        style: {
          navigationBarTitleText: "%home_service.store.pages.store.account.withdraw_edit%"
        },
        needLogin: true
      },
      {
        path: "pages/member/store_list",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.store_list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/indent",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.indent%"
        },
        needLogin: true
      },
      {
        path: "pages/order/indent_list",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.indent_list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/indent_order",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.indent_order%"
        },
        needLogin: true
      },
      {
        path: "pages/order/indent_detail",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.indent_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/help",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.help.help%"
        },
        needLogin: true
      },
      {
        path: "pages/member/feedback/feedback",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.feedback.feedback%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/detail",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.help.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/grapOrder",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.grapOrder%"
        },
        needLogin: true
      },
      {
        path: "pages/order/dispatchOrder",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.dispatchOrder%"
        },
        needLogin: true
      },
      {
        path: "pages/order/dispatchTechnician",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.dispatchTechnician%"
        },
        needLogin: true
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%home_service.store.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/cash/cash_out",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.cash.cash_out%"
        },
        needLogin: true
      },
      {
        path: "pages/member/cash/cash_out_detail",
        style: {
          navigationBarTitleText: "%home_service.store.pages.member.cash.cash_out_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/auth/login",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.auth.login%"
        },
        needLogin: false
      },
      {
        path: "pages/auth/register",
        style: {
          navigationBarTitleText: "%home_service.technician.pages.auth.register%"
        },
        needLogin: false
      }
    ]
  },
  {
    root: "addon/home_service/user",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%home_service.user.pages.index%"
        }
      },
      {
        path: "pages/goods/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.goods.list%"
        }
      },
      {
        path: "pages/goods/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.goods.detail%"
        }
      },
      {
        path: "pages/goods/category",
        style: {
          navigationBarTitleText: "%home_service.user.pages.goods.category%"
        }
      },
      {
        path: "pages/goods/evaluate",
        style: {
          navigationBarTitleText: "%home_service.user.pages.goods.evaluate%"
        }
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.index%"
        }
      },
      {
        path: "pages/member/collect/goods",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.collect.goods%"
        },
        needLogin: true
      },
      {
        path: "pages/member/history",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.history%"
        }
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/evaluate/evaluate",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.evaluate.evaluate%"
        },
        needLogin: true
      },
      {
        path: "pages/order/evaluate/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.evaluate.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/refund/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.refund.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/refund/apply",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.refund.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/order/refund/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.refund.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/intent_order/payment",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.intent_order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/order/intent_order/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.intent_order.list%"
        },
        needLogin: false
      },
      {
        path: "pages/order/intent_order/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.order.intent_order.detail%"
        },
        needLogin: false
      },
      {
        path: "pages/address/index",
        style: {
          navigationBarTitleText: "%home_service.user.pages.address.index%"
        },
        needLogin: true
      },
      {
        path: "pages/address/address_edit",
        style: {
          navigationBarTitleText: "%home_service.user.pages.address.address_edit%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/help",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.help.help%"
        },
        needLogin: true
      },
      {
        path: "pages/member/help/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.help.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/member/feedback/feedback",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.feedback.feedback%"
        },
        needLogin: true
      },
      {
        path: "pages/member/invoice/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.invoice.list%"
        },
        needLogin: true
      },
      {
        path: "pages/member/invoice/apply",
        style: {
          navigationBarTitleText: "%home_service.user.pages.member.invoice.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/settle/technician",
        style: {
          navigationBarTitleText: "%home_service.user.pages.settle.technician%"
        },
        needLogin: true
      },
      {
        path: "pages/settle/store",
        style: {
          navigationBarTitleText: "%home_service.user.pages.settle.store%"
        },
        needLogin: true
      },
      {
        path: "pages/settle/store_form",
        style: {
          navigationBarTitleText: "%home_service.user.pages.settle.store_form%"
        },
        needLogin: true
      },
      {
        path: "pages/settle/technician_form",
        style: {
          navigationBarTitleText: "%home_service.user.pages.settle.technician_form%"
        },
        needLogin: true
      },
      {
        path: "pages/settle/submit_success",
        style: {
          navigationBarTitleText: "%home_service.user.pages.settle.submit_success%"
        },
        needLogin: true
      },
      {
        path: "pages/coupon/coupon",
        style: {
          navigationBarTitleText: "%home_service.user.pages.coupon.coupon%"
        },
        needLogin: true
      },
      {
        path: "pages/coupon/member_coupon",
        style: {
          navigationBarTitleText: "%home_service.user.pages.coupon.member_coupon%"
        },
        needLogin: true
      },
      {
        path: "pages/card/list",
        style: {
          navigationBarTitleText: "%home_service.user.pages.card.list%"
        },
        needLogin: true
      },
      {
        path: "pages/card/detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.card.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/card/my_card",
        style: {
          navigationBarTitleText: "%home_service.user.pages.card.my_card%"
        },
        needLogin: true
      },
      {
        path: "pages/card/use_detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.card.use_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/card/use_card",
        style: {
          navigationBarTitleText: "%home_service.user.pages.card.use_card%"
        },
        needLogin: true
      },
      {
        path: "pages/map/index",
        style: {
          navigationBarTitleText: "%home_service.user.pages.map.index%"
        },
        needLogin: true
      },
      {
        path: "pages/map/technician_detail",
        style: {
          navigationBarTitleText: "%home_service.user.pages.map.technician_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/map/qualifications",
        style: {
          navigationBarTitleText: "%home_service.user.pages.map.qualifications%"
        },
        needLogin: true
      },
      {
        path: "pages/map/delivery_fee",
        style: {
          navigationBarTitleText: "%home_service.user.pages.map.delivery_fee%"
        },
        needLogin: true
      },
      {
        path: "pages/map/captcha",
        style: {
          navigationBarTitleText: "%home_service.user.pages.map.captcha%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/home_service/components",
    pages: []
  },
  {
    root: "addon/home_service/locale",
    pages: []
  },
  {
    root: "addon/vipcard",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%vipcard.pages.index%"
        }
      },
      {
        path: "pages/card/list",
        style: {
          navigationBarTitleText: "%vipcard.pages.card.list%"
        }
      },
      {
        path: "pages/card/detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.card.detail%"
        }
      },
      {
        path: "pages/service/list",
        style: {
          navigationBarTitleText: "%vipcard.pages.service.list%"
        }
      },
      {
        path: "pages/service/detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.service.detail%"
        }
      },
      {
        path: "pages/service/reserve_detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.service.reserve_detail%"
        }
      },
      {
        path: "pages/order/my_reserved",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.my_reserved%"
        },
        needLogin: true
      },
      {
        path: "pages/order/my_reserved_detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.my_reserved_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/my_card",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.my_card%"
        },
        needLogin: true
      },
      {
        path: "pages/order/card_record",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.card_record%"
        },
        needLogin: true
      },
      {
        path: "pages/order/my_card_detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.my_card_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/order/payment",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.payment%"
        },
        needLogin: true
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.list%"
        },
        needLogin: true
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.order.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/verify/index",
        style: {
          navigationBarTitleText: "%vipcard.pages.verify.index%"
        },
        needLogin: true
      },
      {
        path: "pages/verify/record",
        style: {
          navigationBarTitleText: "%vipcard.pages.verify.record%"
        },
        needLogin: true
      },
      {
        path: "pages/verify/detail",
        style: {
          navigationBarTitleText: "%vipcard.pages.verify.detail%"
        },
        needLogin: true
      },
      {
        path: "pages/reserve/result",
        style: {
          navigationBarTitleText: "%vipcard.pages.reserve.result%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/tourism",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%tourism.pages.index%"
        }
      },
      {
        path: "pages/way/list",
        style: {
          navigationBarTitleText: "%tourism.pages.way.list%"
        }
      },
      {
        path: "pages/way/detail",
        style: {
          navigationBarTitleText: "%tourism.pages.way.detail%"
        }
      },
      {
        path: "pages/way/order",
        style: {
          navigationBarTitleText: "%tourism.pages.way.order%"
        }
      },
      {
        path: "pages/hotel/list",
        style: {
          navigationBarTitleText: "%tourism.pages.hotel.list%"
        }
      },
      {
        path: "pages/hotel/detail",
        style: {
          navigationBarTitleText: "%tourism.pages.hotel.detail%"
        }
      },
      {
        path: "pages/hotel/order",
        style: {
          navigationBarTitleText: "%tourism.pages.hotel.order%"
        },
        needLogin: true
      },
      {
        path: "pages/scenic/list",
        style: {
          navigationBarTitleText: "%tourism.pages.scenic.list%"
        }
      },
      {
        path: "pages/scenic/detail",
        style: {
          navigationBarTitleText: "%tourism.pages.scenic.detail%"
        }
      },
      {
        path: "pages/scenic/order",
        style: {
          navigationBarTitleText: "%tourism.pages.scenic.order%"
        }
      },
      {
        path: "pages/member/index",
        style: {
          navigationBarTitleText: "%tourism.pages.member.index%"
        }
      },
      {
        path: "pages/order/list",
        style: {
          navigationBarTitleText: "%tourism.pages.order.list%"
        }
      },
      {
        path: "pages/order/detail",
        style: {
          navigationBarTitleText: "%tourism.pages.order.detail%"
        }
      },
      {
        path: "pages/order/hotel_detail",
        style: {
          navigationBarTitleText: "%tourism.pages.order.hotel_detail%"
        }
      },
      {
        path: "pages/verify/index",
        style: {
          navigationBarTitleText: "%tourism.pages.verify.index%"
        },
        needLogin: true
      },
      {
        path: "pages/verify/record",
        style: {
          navigationBarTitleText: "%tourism.pages.verify.record%"
        },
        needLogin: true
      },
      {
        path: "pages/verify/detail",
        style: {
          navigationBarTitleText: "%tourism.pages.verify.detail%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/cms",
    pages: [
      {
        path: "pages/list",
        style: {
          navigationBarTitleText: "%cms.pages.list%"
        }
      },
      {
        path: "pages/detail",
        style: {
          navigationBarTitleText: "%cms.pages.detail%"
        }
      }
    ]
  },
  {
    root: "addon/recharge",
    pages: [
      {
        path: "pages/recharge",
        style: {
          navigationBarTitleText: "%recharge.pages.recharge%"
        },
        needLogin: true
      },
      {
        path: "pages/recharge_record",
        style: {
          navigationBarTitleText: "%recharge.pages.recharge_record%"
        },
        needLogin: true
      },
      {
        path: "pages/recharge_record_detail",
        style: {
          navigationBarTitleText: "%recharge.pages.recharge_record_detail%"
        },
        needLogin: true
      }
    ]
  },
  {
    root: "addon/shop_fenxiao",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.index%"
        },
        needLogin: true
      },
      {
        path: "pages/zone",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.zone%"
        }
      },
      {
        path: "pages/level",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.level%",
          usingComponents: {
            "ns-goods-recommend": "../../../../addon/shop/components/ns-goods-recommend/ns-goods-recommend"
          },
          componentPlaceholder: {
            "ns-goods-recommend": "view"
          }
        },
        needLogin: true
      },
      {
        path: "pages/child_fenxiao",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.child_fenxiao%"
        },
        needLogin: true
      },
      {
        path: "pages/goods",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.goods%"
        }
      },
      {
        path: "pages/team",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.team%"
        },
        needLogin: true
      },
      {
        path: "pages/agent_list",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.agent_list%"
        },
        needLogin: true
      },
      {
        path: "pages/team_dividend",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.team_dividend%"
        },
        needLogin: true
      },
      {
        path: "pages/order",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.order%"
        },
        needLogin: true
      },
      {
        path: "pages/apply",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.apply%"
        },
        needLogin: true
      },
      {
        path: "pages/task_rewards",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.task_rewards%"
        },
        needLogin: true
      },
      {
        path: "pages/task_detail",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.task_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/task_rewards_detail",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.task_rewards_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/sale",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.sale%"
        },
        needLogin: true
      },
      {
        path: "pages/sale_detail",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.sale_detail%"
        },
        needLogin: true
      },
      {
        path: "pages/sale_ranking",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.sale_ranking%"
        },
        needLogin: true
      },
      {
        path: "pages/promote",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.promote%"
        },
        needLogin: true
      },
      {
        path: "pages/promote_code",
        style: {
          navigationBarTitleText: "%shop_fenxiao.pages.promote_code%"
        }
      }
    ]
  },
  {
    root: "addon/sow_community",
    pages: [
      {
        path: "pages/index",
        style: {
          navigationBarTitleText: "%sow_community.pages.index%"
        }
      },
      {
        path: "pages/search",
        style: {
          navigationBarTitleText: "%sow_community.pages.search%"
        }
      },
      {
        path: "pages/image/detail",
        style: {
          navigationBarTitleText: "%sow_community.pages.image.detail%"
        }
      },
      {
        path: "pages/video/detail",
        style: {
          navigationBarTitleText: "%sow_community.pages.video.detail%"
        }
      },
      {
        path: "pages/member",
        style: {
          navigationBarTitleText: "%sow_community.pages.member%"
        }
      },
      {
        path: "pages/topic_list",
        style: {
          navigationBarTitleText: "%sow_community.pages.topic_list%"
        }
      },
      {
        path: "pages/create",
        style: {
          navigationBarTitleText: "%sow_community.pages.create%"
        },
        needLogin: true
      },
      {
        path: "pages/follow",
        style: {
          navigationBarTitleText: "%sow_community.pages.follow%"
        },
        needLogin: true
      },
      {
        path: "pages/sow_show",
        style: {
          navigationBarTitleText: "%sow_community.pages.sow_show%"
        }
      }
    ]
  },
  {
    root: "app/components",
    pages: []
  },
  {
    root: "app/pages/member",
    pages: [
      {
        path: "apply_cash_out",
        style: {
          navigationBarTitleText: "%pages.member.apply_cash_out%"
        },
        needLogin: true
      },
      {
        path: "commission",
        style: {
          navigationBarTitleText: "%pages.member.commission%"
        },
        needLogin: true
      },
      {
        path: "balance",
        style: {
          navigationBarTitleText: "%pages.member.balance%"
        },
        needLogin: true
      },
      {
        path: "level",
        style: {
          navigationBarTitleText: "%pages.member.level%"
        },
        needLogin: true
      },
      {
        path: "detailed_account",
        style: {
          navigationBarTitleText: "%pages.member.detailed_account%"
        }
      },
      {
        path: "cash_out",
        style: {
          navigationBarTitleText: "%pages.member.cash_out%"
        }
      },
      {
        path: "cash_out_detail",
        style: {
          navigationBarTitleText: "%pages.member.cash_out_detail%"
        }
      },
      {
        path: "index",
        style: {
          navigationBarTitleText: "%pages.member.index%",
          usingComponents: {
            "diy-group": "../../../../addon/components/diy/group/index"
          },
          componentPlaceholder: {
            "diy-group": "view"
          }
        }
      },
      {
        path: "personal",
        style: {
          navigationBarTitleText: "%pages.member.personal%"
        },
        needLogin: true
      },
      {
        path: "personal_form",
        style: {
          navigationBarTitleText: "%pages.member.personal_form%"
        },
        needLogin: true
      },
      {
        path: "point",
        style: {
          navigationBarTitleText: "%pages.member.point%"
        },
        needLogin: true
      },
      {
        path: "point_detail",
        style: {
          navigationBarTitleText: "%pages.member.point_detail%"
        },
        needLogin: true
      },
      {
        path: "account",
        style: {
          navigationBarTitleText: "%pages.member.account%"
        },
        needLogin: true
      },
      {
        path: "account_edit",
        style: {
          navigationBarTitleText: "%pages.member.account_edit%"
        },
        needLogin: true
      },
      {
        path: "address",
        style: {
          navigationBarTitleText: "%pages.member.address%"
        },
        needLogin: true
      },
      {
        path: "address_edit",
        style: {
          navigationBarTitleText: "%pages.member.address_edit%"
        },
        needLogin: true
      },
      {
        path: "sign_in",
        style: {
          navigationBarTitleText: "%pages.member.sign_in%"
        },
        needLogin: true
      },
      {
        path: "contact",
        style: {
          navigationBarTitleText: "%pages.member.contact%"
        }
      }
    ]
  }
];
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "",
  navigationBarBackgroundColor: "#F6F6F6",
  backgroundColor: "#F6F6F6",
  backgroundColorTop: "#F6F6F6",
  backgroundColorBottom: "#F6F6F6"
};
const tabBar = {
  list: [
    {
      pagePath: "app/pages/index/index"
    },
    {
      pagePath: "app/pages/index/nosite"
    }
  ]
};
const easycom = {
  custom: {
    "addon-page-bridge": "@/components/addon-page-bridge/addon-page-bridge.vue",
    "addon-diy-bridge": "@/components/addon-diy-bridge/addon-diy-bridge.vue",
    "diy-dynamic-bridge": "@/components/diy-dynamic-bridge/diy-dynamic-bridge.vue",
    "diy-dynamic-bridge-app": "@/components/diy-dynamic-bridge-app/diy-dynamic-bridge-app.vue",
    "diy-group": "@/addon/components/diy/group/index.vue",
    "ns-toast": "@/components/ns-toast/ns-toast.vue",
    "u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
    "up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
    "u-(.*)": "uview-plus/components/u-$1/u-$1.vue",
    "diy-(.*)": "@/app/components/diy/$1/index.vue"
  }
};
const pagesJson = {
  pages,
  subPackages,
  globalStyle,
  tabBar,
  easycom
};
function getNeedLoginPages() {
  const pages2 = [];
  pagesJson.pages.forEach((item) => {
    if (item.needLogin)
      pages2.push(`/${item.path}`);
  });
  if (pagesJson.subPackages) {
    pagesJson.subPackages.forEach((subPackages2) => {
      if (subPackages2.pages) {
        subPackages2.pages.forEach((item) => {
          if (item.needLogin)
            pages2.push(`/${subPackages2.root}/${item.path}`);
        });
      }
    });
  }
  return pages2;
}
function getTabbarPages() {
  return pagesJson.tabBar.list.map((item) => {
    return `/${item.pagePath}`;
  });
}
function getFirstPage() {
  return "/" + pagesJson.pages[0].path;
}
function getMemberInfo() {
  return request.get("member/member");
}
function bindMobile$1(data) {
  if (getStorageSync("pid")) {
    data.pid = getStorageSync("pid");
  }
  return request.put("member/mobile", data, { showErrorMessage: true });
}
function getAddressList(params) {
  return request.get(`member/address`, params);
}
function getCaptcha() {
  return request.get("captcha", {}, { showErrorMessage: true });
}
function getWechatAuthCode(data) {
  return request.get("wechat/codeurl", data, { showErrorMessage: false });
}
function wechatSync(data) {
  return request.post("wechat/sync", data, { showErrorMessage: false });
}
function sendSms(data) {
  return request.post(`send/mobile/${data.type}`, data, { showErrorMessage: true });
}
function getWechatSdkConfig(data) {
  return request.get("wechat/jssdkconfig", data, { showErrorMessage: true });
}
function uploadImage(data) {
  return request.upload("file/image", data, { showErrorMessage: true });
}
function uploadVideo(data) {
  return request.upload("file/video", data, { showErrorMessage: true });
}
function getSiteInfo() {
  return request.get("site");
}
function getAreaListByPid(pid = 0) {
  return request.get(`area/list_by_pid/${pid}`);
}
function getAreaByCode(code) {
  return request.get(`area/code/${code}`);
}
function getAddressByLatlng(params) {
  return request.get(`area/address_by_latlng`, params, { showErrorMessage: true });
}
function getPoster(params) {
  return request.get("poster", params);
}
function getInitInfo(params) {
  return request.get("init", params);
}
function getMemberMobileExist(params) {
  return request.get("member_mobile_exist", params);
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isArray$3 = Array.isArray;
const isArray$4 = isArray$3;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
const WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
const baseCreate$1 = baseCreate;
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$7.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$8 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer$1 = nativeIsBuffer || stubFalse;
const isBuffer$2 = isBuffer$1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map");
const Map$1 = Map;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
const getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$4(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$3 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
const isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
const isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$4(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$2(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const useSystemStore = defineStore("system", {
  state: () => {
    return {
      site: null,
      siteApps: [],
      siteAddons: [],
      currRoute: "",
      mapConfig: {
        map_type: "tencent",
        key: "",
        // 腾讯地图key
        tianditu_map_web_key: "",
        // 天地图key
        is_open: 1,
        valid_time: 0
      },
      initStatus: "wait",
      menuButtonInfo: {
        height: 0,
        top: 0,
        right: 0,
        width: 0
      },
      shareCallback: null,
      defaultPositionAddress: "定位中",
      diyAddressInfo: null,
      currTabbar: {
        path: "",
        query: {}
      },
      systemInfo: null,
      topTabbarInfo: {
        height: 0,
        fullHeight: ""
      },
      appConfig: {
        wechat_app_id: "",
        weapp_original: ""
      },
      shareOptions: {
        wechatOptions: {},
        weappOptions: {}
      },
      versionInfo: null,
      updateVersionPopup: false,
      copyright: null
    };
  },
  actions: {
    // 获取初始化数据信息
    getInitFn(callback) {
      let url = "";
      if (isWeixinBrowser()) {
        url = this.systemInfo.platform == "ios" ? getStorageSync("initUrl") : location.href;
      }
      getInitInfo({
        url,
        openid: getStorageSync("openid")
      }).then((res) => {
        if (res.data) {
          let data = res.data;
          const configStore = useConfigStore$1();
          configStore.tabbarList = data.tabbar_list;
          this.mapConfig.is_open = data.map_config.is_open;
          this.mapConfig.valid_time = data.map_config.valid_time;
          this.mapConfig.map_type = data.map_config.map_type;
          this.mapConfig.key = data.map_config.key;
          this.mapConfig.tianditu_map_web_key = data.map_config.tianditu_map_web_key;
          setStorageSync("mapConfig", this.mapConfig);
          setStorageSync("theme_color_list", data.theme_list);
          this.site = data.site_info;
          this.siteApps = data.site_info.app;
          this.siteAddons = data.site_info.site_addons.map((item) => {
            return item.key;
          });
          this.copyright = data.copyright;
          const memberStore = useMemberStore$1();
          memberStore.levelList = data.member_level;
          configStore.login.is_username = data.login_config.is_username;
          configStore.login.is_mobile = data.login_config.is_mobile;
          configStore.login.is_auth_register = parseInt(data.login_config.is_auth_register);
          configStore.login.is_force_access_user_info = parseInt(data.login_config.is_force_access_user_info);
          configStore.login.is_bind_mobile = parseInt(data.login_config.is_bind_mobile);
          configStore.login.agreement_show = parseInt(data.login_config.agreement_show);
          configStore.login.wechat_error = data.login_config.wechat_error;
          configStore.login.bg_url = data.login_config.bg_url;
          configStore.login.logo = data.login_config.logo;
          configStore.login.desc = data.login_config.desc;
          setStorageSync("login_config", configStore.login);
          setStorageSync("member_exist", data.member_exist);
          data.app_config && (this.appConfig = data.app_config);
          this.initStatus = "finish";
          if (getStorageSync("isBindMobile")) {
            removeStorageSync("isBindMobile");
          }
          if (callback)
            callback();
        }
      });
      this.getMenuButtonInfoFn();
    },
    // 获取版本数据信息
    getVersionInfoFn(callback = null) {
    },
    // 如果已有手机号，就不弹出绑定手机号弹框
    getMemberMobileExistFn() {
      getMemberMobileExist({
        openid: getStorageSync("openid")
      }).then((res) => {
        setStorageSync("member_mobile_exist", res.data.member_mobile_exist);
      });
    },
    getMenuButtonInfoFn() {
    },
    async getSiteInfoFn() {
      await getSiteInfo().then((res) => {
        this.site = res.data;
        this.siteApps = res.data.app;
        this.siteAddons = res.data.site_addons.map((item) => {
          return item.key;
        });
      }).catch((err) => {
      });
    },
    // 当前选择的收货地址信息[经纬度，当前定位地址，定位过期时间]
    setAddressInfo(data = {}) {
      let addressInfo = cloneDeep(data);
      const date = new Date();
      date.setSeconds(60 * this.mapConfig.valid_time);
      addressInfo.valid_time = date.getTime() / 1e3;
      if (this.diyAddressInfo) {
        this.diyAddressInfo = Object.assign(this.diyAddressInfo, addressInfo);
      } else {
        this.diyAddressInfo = addressInfo;
      }
      if (Object.keys(data).length) {
        setStorageSync("location_address", addressInfo);
      } else {
        removeStorageSync("location_address");
      }
    },
    setTopTabbar(data = {}) {
      this.topTabbarInfo = Object.assign({}, this.topTabbarInfo, data);
      this.topTabbarInfo.height = this.topTabbarInfo.height || 0;
      this.topTabbarInfo.fullHeight = this.topTabbarInfo.height ? this.topTabbarInfo.height + "px" : 0;
    },
    showUpdateVersion() {
      this.updateVersionPopup = true;
    }
  }
});
const useSystemStore$1 = useSystemStore;
const useConfigStore = defineStore("config", {
  state: () => {
    return {
      login: {
        is_username: 0,
        is_mobile: 0,
        is_auth_register: 0,
        is_force_access_user_info: 0,
        is_bind_mobile: 0,
        wechat_error: "",
        agreement_show: 0,
        bg_url: "",
        logo: "",
        desc: ""
      },
      tabbarList: {},
      tabbar: null,
      addon: "",
      themeColor: ""
    };
  },
  actions: {
    async getLoginConfig() {
      let url = "";
      if (isWeixinBrowser()) {
        const systemStore = useSystemStore$1();
        url = systemStore.systemInfo.platform == "ios" ? getStorageSync("initUrl") : location.href;
      }
      await getConfig({ url }).then((res) => {
        this.login.is_username = res.data.is_username;
        this.login.is_mobile = res.data.is_mobile;
        this.login.is_auth_register = parseInt(res.data.is_auth_register);
        this.login.is_force_access_user_info = parseInt(res.data.is_force_access_user_info);
        this.login.is_bind_mobile = parseInt(res.data.is_bind_mobile);
        this.login.agreement_show = parseInt(res.data.agreement_show);
        this.login.bg_url = res.data.bg_url;
        this.login.logo = res.data.logo;
        this.login.desc = res.data.desc;
      });
    },
    // 获取主色调
    getThemeColor() {
      let themeColorStorage = getStorageSync("current_theme_color");
      if (!this.themeColor && themeColorStorage) {
        this.themeColor = JSON.parse(themeColorStorage);
      }
      let themeColor = this.themeColor;
      while (typeof themeColor === "string") {
        try {
          themeColor = JSON.parse(themeColor);
        } catch (e) {
          break;
        }
      }
      if (themeColor && typeof themeColor === "object") {
        let style = "";
        for (let k in themeColor) {
          style += `${k}:${themeColor[k]};`;
        }
        return style;
      }
      return typeof themeColor === "string" ? themeColor : "";
    }
  }
});
const useConfigStore$1 = useConfigStore;
const isH5 = typeof window !== "undefined";
const h5Env = isH5 ? window.__ENV__ || {} : {};
const envConfig = {
  VITE_APP_BASE_URL: h5Env.VITE_APP_BASE_URL || "",
  VITE_IMG_DOMAIN: h5Env.VITE_IMG_DOMAIN || "",
  VITE_SITE_ID: h5Env.VITE_SITE_ID || "" || "",
  VITE_REQUEST_STORAGE_TOKEN_KEY: h5Env.VITE_REQUEST_STORAGE_TOKEN_KEY || "wapToken",
  VITE_REQUEST_HEADER_TOKEN_KEY: h5Env.VITE_REQUEST_HEADER_TOKEN_KEY || "token",
  VITE_REQUEST_HEADER_SITEID_KEY: h5Env.VITE_REQUEST_HEADER_SITEID_KEY || "site-id",
  VITE_REQUEST_HEADER_CHANNEL_KEY: h5Env.VITE_REQUEST_HEADER_CHANNEL_KEY || "channel",
  VITE_APP_VERSION: h5Env.VITE_APP_VERSION || "1.0.1"
};
const useMemberStore = defineStore("member", {
  state: () => {
    return {
      token: getStorageSync(envConfig.VITE_REQUEST_STORAGE_TOKEN_KEY),
      info: null,
      levelList: null
    };
  },
  actions: {
    setToken(token, callback = null) {
      this.token = token;
      setToken(token);
      this.getMemberInfo(callback);
    },
    getMemberInfo(callback = null) {
      if (!this.token)
        return;
      getMemberInfo().then((res) => {
        this.info = res.data;
        setStorageSync("wap_member_info", this.info);
        setStorageSync("wap_member_id", res.data.member_id);
        if (this.info.mobile) {
          removeStorageSync("isBindMobile");
          setStorageSync("wap_member_mobile", this.info.mobile);
        }
        if (this.info && this.info.wx_openid) {
          setStorageSync("member_exist", 1);
        } else {
          const login2 = useLogin();
          login2.updateWechatOpenidForH5(getStorageSync("openid"));
        }
        if (callback)
          callback();
      }).catch(() => {
        this.logout();
        removeStorageSync("wap_member_mobile");
        removeStorageSync("wap_member_id");
        removeStorageSync("wap_member_not_control_mobile");
      });
    },
    logout(isRedirect = false) {
      if (!this.token)
        return;
      this.token = "";
      this.info = null;
      setStorageSync("autoLoginLock", true);
      let clearStorage = () => {
        removeToken();
        removeStorageSync("wap_member_info");
        removeStorageSync("unionid");
        removeStorageSync("isBindMobile");
        removeStorageSync("nickname");
        removeStorageSync("avatar");
        removeStorageSync("wap_member_mobile");
        removeStorageSync("wap_member_id");
        removeStorageSync("wap_member_not_control_mobile");
        isRedirect && redirect({ url: "/app/pages/index/index", mode: "switchTab" });
      };
      logout().then(() => {
        clearStorage();
      }).catch(() => {
        clearStorage();
      });
    },
    // 一键绑定手机号
    bindMobile(e) {
      if (e.detail.errMsg == "getPhoneNumber:ok") {
        showLoading({ title: "" });
        bindMobile$1({
          mobile_code: e.detail.code
        }).then((res) => {
          hideLoading();
          this.getMemberInfo();
        }).catch(() => {
          setTimeout(() => {
            hideLoading();
          }, 2e3);
        });
      }
      if (e.detail.errno == 104) {
        let msg = "用户未授权隐私权限";
        showToast({ title: msg, icon: "none" });
      }
      if (e.detail.errMsg == "getPhoneNumber:fail user deny") {
        let msg = "用户拒绝获取手机号码";
        showToast({ title: msg, icon: "none" });
      }
    }
  }
});
const useMemberStore$1 = useMemberStore;
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
function isSplitBuildEnabled() {
  return true;
}
const GLOBAL_KEY = "__NIUCLOUD_ACTIVE_ADDON_ROUTE__";
function getActiveRouteRef() {
  const g = globalThis;
  if (!g[GLOBAL_KEY]) {
    g[GLOBAL_KEY] = ref("");
  }
  return g[GLOBAL_KEY];
}
function getActiveAddonPageRoute() {
  const v = getActiveRouteRef().value;
  if (v)
    return v;
  const loc = globalThis.location;
  if (loc && typeof loc.pathname === "string") {
    const idx = loc.pathname.indexOf("/addon/");
    if (idx !== -1)
      return loc.pathname.slice(idx);
  }
  return "";
}
const WAP_PREFIX = "/wap";
function wapRuntime() {
  return globalThis;
}
function getProdManifests() {
  const g = wapRuntime();
  if (!g.__WAP_ADDON_MANIFESTS__)
    g.__WAP_ADDON_MANIFESTS__ = {};
  return g.__WAP_ADDON_MANIFESTS__;
}
function getInstalledKeysStore() {
  const g = wapRuntime();
  if (!g.__WAP_INSTALLED_ADDONS__)
    g.__WAP_INSTALLED_ADDONS__ = [];
  return g.__WAP_INSTALLED_ADDONS__;
}
function isProdReady() {
  return !!wapRuntime().__WAP_ADDON_PROD_READY__;
}
function setProdReady(value) {
  wapRuntime().__WAP_ADDON_PROD_READY__ = value;
}
function getProdInitPromise() {
  return wapRuntime().__WAP_ADDON_INIT_PROMISE__ ?? null;
}
function setProdInitPromise(promise) {
  wapRuntime().__WAP_ADDON_INIT_PROMISE__ = promise;
}
function getAddonModuleCache() {
  const g = wapRuntime();
  if (!g.__WAP_ADDON_MODULE_CACHE__)
    g.__WAP_ADDON_MODULE_CACHE__ = {};
  return g.__WAP_ADDON_MODULE_CACHE__;
}
function getAddonEntryProbeCache() {
  const g = wapRuntime();
  if (!g.__WAP_ADDON_ENTRY_PROBE__)
    g.__WAP_ADDON_ENTRY_PROBE__ = {};
  return g.__WAP_ADDON_ENTRY_PROBE__;
}
function normalizeWapAssetPath(url) {
  return url.replace(/^\/wap\/\d+\//, "/wap/");
}
function wapUrl(relative) {
  if (!relative)
    return relative;
  if (relative.startsWith("http"))
    return relative;
  if (relative.startsWith("/wap/"))
    return normalizeWapAssetPath(relative);
  if (relative.startsWith("/assets/"))
    return `${WAP_PREFIX}${relative}`;
  if (relative.startsWith("./"))
    return `${WAP_PREFIX}/assets/addons/${relative.slice(2)}`;
  return `${WAP_PREFIX}/${relative.replace(/^\//, "")}`;
}
const loadedAddonStyles = /* @__PURE__ */ new Set();
function ensureAddonStyles(addonKey) {
  if (!addonKey || typeof document === "undefined")
    return;
  if (!isAddonInstalled(addonKey))
    return;
  if (loadedAddonStyles.has(addonKey))
    return;
  const href = wapUrl(`assets/addons/${addonKey}/style.css`);
  const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`);
  if (existing) {
    loadedAddonStyles.add(addonKey);
    return;
  }
  const id = `addon-style-${addonKey}`;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  link.onload = () => loadedAddonStyles.add(addonKey);
  link.onerror = () => {
    loadedAddonStyles.add(addonKey);
  };
  document.head.appendChild(link);
}
async function isAddonEntryAvailable(key) {
  const addonEntryAvailableCache = getAddonEntryProbeCache();
  if (key in addonEntryAvailableCache) {
    return addonEntryAvailableCache[key];
  }
  addonEntryAvailableCache[key] = (async () => {
    const url = wapUrl(`/assets/addons/${key}/manifest.json`);
    const attempts = [{ method: "GET" }, { method: "HEAD" }];
    for (const init of attempts) {
      try {
        const res = await fetch(url, { ...init, cache: "no-store" });
        if (!res.ok)
          continue;
        const ct = (res.headers.get("content-type") || "").toLowerCase();
        if (ct.includes("text/html"))
          continue;
        if (init.method === "HEAD")
          return true;
        const peek = (await res.text()).trimStart();
        if (!peek || peek.startsWith("<"))
          continue;
        return true;
      } catch {
      }
    }
    return false;
  })();
  return addonEntryAvailableCache[key];
}
function markAddonEntryUnavailable(key) {
  getAddonEntryProbeCache()[key] = Promise.resolve(false);
}
function isAddonInstalled(addon) {
  if (!addon)
    return false;
  if (getRegisteredAddonModule(addon))
    return true;
  return getInstalledAddonKeys().includes(addon);
}
let addonLocaleMerger = null;
async function loadAddonModule(addon) {
  const registered = getRegisteredAddonModule(addon);
  if (registered) {
    return registered;
  }
  const addonModuleCache = getAddonModuleCache();
  if (!(addon in addonModuleCache)) {
    addonModuleCache[addon] = (async () => {
      var _a;
      if (!isAddonInstalled(addon)) {
        return null;
      }
      try {
        const available = await isAddonEntryAvailable(addon);
        if (!available) {
          return null;
        }
        const entry = ((_a = getProdManifests()[addon]) == null ? void 0 : _a.entry) || "./index.js";
        const entryFile = entry.split("/").pop() || "index.js";
        const url = wapUrl(`/assets/addons/${addon}/${entryFile}`);
        const mod = await import(
          /* @vite-ignore */
          url
        );
        if (mod && addonLocaleMerger) {
          mergeAddonLangsFromModule(addon, mod, addonLocaleMerger);
        }
        return mod;
      } catch {
        markAddonEntryUnavailable(addon);
        return null;
      }
    })();
  }
  return addonModuleCache[addon];
}
async function ensureAddonProdReady() {
  if (!isProdReady())
    await initAddonManifests();
}
async function initAddonManifests(keys2) {
  const existingPromise = getProdInitPromise();
  if (existingPromise)
    return existingPromise;
  const initPromise = (async () => {
    const prodManifests = getProdManifests();
    for (const key of Object.keys(prodManifests))
      delete prodManifests[key];
    let addonKeys = keys2;
    let manifestData = null;
    if (!(addonKeys == null ? void 0 : addonKeys.length)) {
      try {
        const res = await fetch(wapUrl(`/assets/addons/index.json?_t=${Date.now()}`));
        if (res.ok) {
          const data = await res.json();
          addonKeys = Array.isArray(data.keys) ? data.keys : [];
          manifestData = data.manifests || null;
        }
      } catch {
        addonKeys = [];
      }
    }
    if (manifestData)
      Object.assign(prodManifests, manifestData);
    const installedAddonKeys = getInstalledKeysStore();
    const merged = Array.from(/* @__PURE__ */ new Set([...installedAddonKeys, ...addonKeys || []]));
    installedAddonKeys.length = 0;
    installedAddonKeys.push(...merged);
    setProdReady(true);
  })();
  setProdInitPromise(initPromise);
  return initPromise;
}
function getInstalledAddonKeys() {
  return getInstalledKeysStore();
}
function markAddonInstalled(key) {
  if (!key)
    return;
  const store = getInstalledKeysStore();
  if (!store.includes(key))
    store.push(key);
}
function unwrapLocalePack(pack) {
  if (!pack || typeof pack !== "object")
    return {};
  const obj = pack;
  if (obj.default && typeof obj.default === "object") {
    return unwrapLocalePack(obj.default);
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === "default" || key === "__esModule")
      continue;
    if (typeof value === "string")
      result[key] = value;
  }
  return Object.keys(result).length ? result : obj;
}
function flattenLocalePack(addonKey, file, pack) {
  const data = {};
  const fileKey = file === "common" ? `${addonKey}.common` : `${addonKey}.${file}`;
  for (const [key, value] of Object.entries(pack)) {
    if (typeof value !== "string")
      continue;
    data[`${fileKey}.${key}`] = value;
    if (file === "common")
      data[key] = value;
  }
  return data;
}
function mergeAddonLangsFromModule(addonKey, mod, merge3) {
  const langs = mod.langs;
  if (!langs)
    return;
  for (const [locale, files] of Object.entries(langs)) {
    const merged = {};
    for (const [file, pack] of Object.entries(files || {})) {
      Object.assign(merged, flattenLocalePack(addonKey, file, unwrapLocalePack(pack)));
    }
    if (Object.keys(merged).length)
      merge3(locale, merged);
  }
}
function getUni() {
  const g = globalThis;
  if (g.uni && typeof g.uni.reLaunch === "function") {
    return g.uni;
  }
  return new Proxy(g.uni || {}, {
    get(_target, prop) {
      const u = globalThis.uni;
      if (!u)
        return void 0;
      const val = u[prop];
      if (typeof val === "function") {
        return (...args) => val.apply(u, args);
      }
      return val;
    }
  });
}
function normalizeRoutePath(path) {
  let p = (path || "").trim();
  if (!p || p === "/")
    return "/";
  if (!p.startsWith("/"))
    p = `/${p}`;
  p = p.replace(/^\/wap\/(?:\d+\/)?/, "/");
  if (!p.startsWith("/"))
    p = `/${p}`;
  return p;
}
function getUniPageRoute() {
  var _a, _b;
  try {
    const g = globalThis;
    const pages2 = ((_a = g.getCurrentPages) == null ? void 0 : _a.call(g)) || [];
    const route = (_b = pages2[pages2.length - 1]) == null ? void 0 : _b.route;
    if (!route)
      return "";
    return normalizeRoutePath(route);
  } catch {
    return "";
  }
}
function resolveLocaleRoutePath() {
  var _a, _b;
  const fromAddon = getActiveAddonPageRoute();
  const stackRoute = getUniPageRoute();
  const locRoute = typeof window !== "undefined" && ((_a = window.location) == null ? void 0 : _a.pathname) ? normalizeRoutePath(window.location.pathname) : "";
  const isBridgeStack = !!stackRoute && stackRoute.includes("/app/pages/addon-universal");
  if (fromAddon && isBridgeStack)
    return normalizeRoutePath(fromAddon);
  if (stackRoute)
    return stackRoute;
  if (locRoute)
    return locRoute;
  const inst = getCurrentInstance();
  const fromRouter = (_b = inst == null ? void 0 : inst.appContext.config.globalProperties.$route) == null ? void 0 : _b.path;
  if (fromRouter)
    return normalizeRoutePath(fromRouter);
  return "/";
}
function parseLocaleFileKey(path) {
  try {
    const normalized = normalizeRoutePath(path).replace(/^\//, "");
    if (!normalized) {
      return { file: "pages.index.index", fileKey: "pages.index.index", route: "app" };
    }
    const parts = normalized.split("/").filter(Boolean);
    if (parts[0] === "app") {
      const rest = parts.slice(1).join("/");
      const file = rest ? rest.replace(/\//g, ".") : "pages.index.index";
      return { file, fileKey: file, route: "app" };
    }
    if (parts[0] === "addon" && parts.length >= 3) {
      const route = parts[1];
      const rest = parts.slice(2).join("/");
      const file = rest.replace(/\//g, ".");
      return { file, fileKey: `${route}.${file}`, route };
    }
    return { file: "pages.index.index", fileKey: "pages.index.index", route: "app" };
  } catch {
    return { file: "pages.index.index", fileKey: "pages.index.index", route: "app" };
  }
}

const requestFail = "请求失败";
const notInDomainList = "不在request 合法域名列表中";
const baseUrlError = " 接口请求错误,请检查VITE_APP_BASE_URL参数配置或者伪静态配置";
const currency = "￥";
const getSmsCode = "获取验证码";
const smsCodeChangeText = "秒后重新获取";
const captchaTitle = "请完成验证";
const confirm = "确认";
const cancel = "取消";
const save = "保存";
const captchaPlaceholder = "请输入验证码";
const mobilePlaceholder = "请输入手机号码";
const mobileError = "请输入正确的手机号";
const codePlaceholder = "请输入手机验证码";
const memberCenter = "个人中心";
const userAgreement = "用户协议";
const and = "和";
const privacyAgreement = "隐私协议";
const isAgreeTips = "请先阅读并同意协议";
const nickname = "昵称";
const nicknamePlaceholder = "请输入昵称";
const headimg = "头像";
const headimgPlaceholder = "请设置头像";
const getAvatarNickname = "获取您的昵称头像";
const getAvatarNicknameTips = "获取用户头像、昵称完善个人资料，主要用于向用户提供具有辨识度的用户中心界面";
const mobile = "手机号";
const getMobile = "获取手机号";
const mobileTips = "请获取手机号";
const point = "积分";
const balance = "余额";
const login = "登录";
const bind = "绑定";
const binding = "绑定中";
const bindMobile = "绑定手机号";
const agreeTips = "我已阅读并同意";
const pleaseAgree = "请勾选已阅读并同意";
const weixinUserAuth = "一键绑定";
const mobileQuickLogin = "手机号快捷登录";
const register = "注册";
const complete = "完成";
const close = "关闭";
const diyForm = {
  back: "返回",
  hidden: "已隐藏",
  view: "查看",
  know: "我知道了",
  prompt: "提示",
  call: "拨打",
  copy: "复制号码",
  uploadTips: "请上传图片",
  tips: "仅限本人和管理员能查看完整号码：",
  viewFillingDetails: "查看填写详情",
  detailInformation: "详细信息"
};
const pay = {
  orderInfo: "订单信息",
  confirmPay: "确认支付",
  payTitle: "确认付款",
  notHavePayType: "没有可用的支付方式",
  notObtainedInfo: "未获取到支付信息",
  paymentDocuments: "该支付单据",
  paySuccess: "支付成功",
  payFail: "支付失败",
  completePay: "已完成支付",
  incompletePay: "未完成支付",
  getting: "获取支付结果中"
};
const myBalance = "我的余额";
const myPoint = "我的积分";
const customerService = "联系客服";
const siteClose = "站点已关闭";
const noSite = "站点不存在";
const pageNotFound = "页面不存在";
const scenic = "景点";
const seeMore = "查看更多";
const way = "线路";
const hotel = "酒店";
const rise = "起";
const cardReserve = "项目预约";
const card = "办理次卡";
const memberName = "会员名称";
const memberCode = "会员码";
const reserve = "预约";
const reserveSuccess = "预约成功";
const cardLink = "次卡";
const myLink = "我的";
const reserveBtn = "去抢购";
const cardBtn = "办理";
const soldOut = "已售";
const unpaidOrder = "待支付";
const waitingOrder = "待使用";
const remainOrder = "已完成";
const allOrder = "全部订单";
const myOrder = "我的订单";
const orderNo = "订单号";
const actualPayment = "实付款";
const orderClose = "关闭订单";
const orderDelete = "删除订单";
const orderFinish = "确认收货";
const orderDetail = "详情";
const wxPrivacyPopup = {
  title: "用户隐私保护提示",
  descBefore: "感谢您使用本小程序，在使用前您应当阅读并同意",
  descAfter: "当点击同意并继续时，即表示您已理解并同意该条款内容，该条款将对您产生法律约束力；如您不同意，将无法继续使用小程序相关功能。",
  disagree: "不同意",
  agree: "同意并继续",
  contractName: "用户隐私保护指引",
  disagreeDesc: "未同意隐私协议，无法使用相关功能"
};
const starLevel = "星级";
const star = "星";
const emptyAddress = "暂无收货地址，请先创建地址";
const addAddress = "新增收货地址";
const selectAddress = "选择地址";
const coupon = "优惠劵";
const notHave = "无";
const onceCard = "次卡";
const cardUnit = "张";
const zhHans = {
  requestFail,
  notInDomainList,
  baseUrlError,
  currency,
  getSmsCode,
  smsCodeChangeText,
  captchaTitle,
  confirm,
  cancel,
  save,
  "delete": "删除",
  captchaPlaceholder,
  mobilePlaceholder,
  mobileError,
  codePlaceholder,
  memberCenter,
  userAgreement,
  and,
  privacyAgreement,
  isAgreeTips,
  nickname,
  nicknamePlaceholder,
  headimg,
  headimgPlaceholder,
  getAvatarNickname,
  getAvatarNicknameTips,
  mobile,
  getMobile,
  mobileTips,
  point,
  balance,
  login,
  bind,
  binding,
  bindMobile,
  agreeTips,
  pleaseAgree,
  weixinUserAuth,
  mobileQuickLogin,
  register,
  complete,
  close,
  diyForm,
  pay,
  myBalance,
  myPoint,
  customerService,
  siteClose,
  noSite,
  pageNotFound,
  scenic,
  seeMore,
  way,
  hotel,
  rise,
  cardReserve,
  card,
  memberName,
  memberCode,
  reserve,
  reserveSuccess,
  cardLink,
  myLink,
  reserveBtn,
  cardBtn,
  soldOut,
  unpaidOrder,
  waitingOrder,
  remainOrder,
  allOrder,
  myOrder,
  orderNo,
  actualPayment,
  orderClose,
  orderDelete,
  orderFinish,
  orderDetail,
  wxPrivacyPopup,
  starLevel,
  star,
  emptyAddress,
  addAddress,
  selectAddress,
  coupon,
  "tourism.orderNo": "订单号",
  "tourism.rise": "起",
  "tourism.starLevel": "星级",
  "tourism.star": "星",
  "vipcard.cardReserve": "项目预约",
  "vipcard.card": "办理次卡",
  "vipcard.reserveSuccess": "预约成功",
  "vipcard.reserve": "预约",
  "vipcard.cardLink": "次卡",
  "vipcard.reserveBtn": "去抢购",
  "vipcard.cardBtn": "办理",
  "vipcard.soldOut": "已售",
  "vipcard.orderNo": "订单号",
  "vipcard.myLink": "我的",
  "vipcard.memberCode": "会员码",
  "recharge.orderNo": "订单号",
  "shop.orderNo": "订单号",
  "shop.actualPayment": "实付款",
  "shop.orderClose": "关闭订单",
  "shop.orderFinish": "确认收货",
  "shop.coupon": "优惠劵",
  "o2o.way": "线路",
  "o2o.hotel": "酒店",
  "o2o.scenic": "景点",
  "o2o.reserveBtn": "去抢购",
  "o2o.noHomeAddress": "没有更多内容啦~",
  "o2o.soldOut": "已售",
  "o2o.orderNo": "订单号",
  "o2o.actualPayment": "实付款",
  "o2o.orderDetail": "详情",
  notHave,
  "tourism.scenic": "景点",
  "tourism.way": "线路",
  "tourism.hotel": "酒店",
  "tourism.seeMore": "查看更多",
  "vipcard.seeMore": "查看更多",
  "shop.emptyAddress": "暂无收货地址，请先创建地址",
  "shop.addAddress": "新增收货地址",
  "shop.selectAddress": "选择地址",
  "shop_giftcard.actualPayment": "实付款",
  "shop_giftcard.orderClose": "关闭订单",
  "shop_giftcard.orderNo": "订单号",
  onceCard,
  cardUnit,
  "home_service.reserveBtn": "去抢购",
  "home_service.noHomeAddress": "没有更多内容啦~",
  "home_service.soldOut": "已售",
  "home_service.orderNo": "订单号",
  "home_service.actualPayment": "实付款",
  "home_service.orderDetail": "详情",
  "shop_fenxiao.orderNo": "订单号"
};
const index = "Index";
const en = {
  index
};

const i18n$1 = i18n;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$2(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge2(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (isArray$2(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$2(target) && !isArray$2(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$2(target) && isArray$2(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge2(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge2(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var encode = function encode2(str, defaultEncoder, charset) {
  if (str.length === 0) {
    return str;
  }
  var string = typeof str === "string" ? str : String(str);
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122) {
      out += string.charAt(i);
      continue;
    }
    if (c < 128) {
      out = out + hexTable[c];
      continue;
    }
    if (c < 2048) {
      out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
      continue;
    }
    i += 1;
    c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
    out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
  }
  return out;
};
var compact = function compact2(value) {
  var queue = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys2 = Object.keys(obj);
    for (var j = 0; j < keys2.length; ++j) {
      var key = keys2[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  merge
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var formats$2 = {
  "default": "RFC3986",
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return value;
    }
  },
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var utils$1 = utils$2;
var formats$1 = formats$2;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaults$1 = {
  addQueryPrefix: false,
  allowDots: false,
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  formatter: formats$1.formatters[formats$1["default"]],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var stringify$1 = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, formatter, encodeValuesOnly, charset) {
  var obj = object;
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    obj = obj.join(",");
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset) : prefix;
    }
    obj = "";
  }
  if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean" || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset);
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys2 = Object.keys(obj);
    objKeys = sort ? keys2.sort(sort) : keys2;
  }
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (skipNulls && obj[key] === null) {
      continue;
    }
    if (isArray$1(obj)) {
      pushToArray(values, stringify(
        obj[key],
        typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix,
        generateArrayPrefix,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate2,
        formatter,
        encodeValuesOnly,
        charset
      ));
    } else {
      pushToArray(values, stringify(
        obj[key],
        prefix + (allowDots ? "." + key : "[" + key + "]"),
        generateArrayPrefix,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate2,
        formatter,
        encodeValuesOnly,
        charset
      ));
    }
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (opts.encoder !== null && opts.encoder !== void 0 && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$1.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$1.formatters[format];
  var filter = defaults$1.filter;
  if (typeof opts.filter === "function" || isArray$1(opts.filter)) {
    filter = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var stringify_1 = function(object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys2 = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && "indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys2, stringify$1(
      obj[key],
      key,
      generateArrayPrefix,
      options.strictNullHandling,
      options.skipNulls,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.formatter,
      options.encodeValuesOnly,
      options.charset
    ));
  }
  var joined = keys2.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset);
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
      val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (val && options.comma && val.indexOf(",") > -1) {
      val = val.split(",");
    }
    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options) {
  var leaf = val;
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root2 = chain[i];
    if (root2 === "[]" && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
      var index2 = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index2) && root2 !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
        obj = [];
        obj[index2] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = brackets2.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;
  var keys2 = [];
  if (parent) {
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys2.push(parent);
  }
  var i = 0;
  while ((segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys2.push(segment[1]);
  }
  if (segment) {
    keys2.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys2, val, options);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults;
  }
  if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    depth: typeof opts.depth === "number" ? opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys2 = Object.keys(tempObj);
  for (var i = 0; i < keys2.length; ++i) {
    var key = keys2[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$2;
var lib = {
  formats,
  parse,
  stringify: stringify2
};
class Request {
  constructor() {
    __publicField(this, "baseUrl");
    __publicField(this, "config", {
      url: "",
      header: {}
    });
    this.baseUrl = envConfig.VITE_APP_BASE_URL || `${location.origin}/api/`;
    this.baseUrl.substr(-1) != "/" && (this.baseUrl += "/");
    try {
      if (false)
        ;
      else {
        this.config.header[envConfig.VITE_REQUEST_HEADER_SITEID_KEY] = getSiteId(envConfig.VITE_SITE_ID);
      }
      this.config.header[envConfig.VITE_REQUEST_HEADER_CHANNEL_KEY] = getAppChannel();
    } catch (e) {
    }
  }
  /**
   * 请求拦截器
   */
  requestInterceptors() {
    try {
      getToken() && (this.config.header[envConfig.VITE_REQUEST_HEADER_TOKEN_KEY] = getToken());
      this.config.header[envConfig.VITE_REQUEST_HEADER_CHANNEL_KEY] = getAppChannel();
      if (false)
        ;
      else {
        this.config.header[envConfig.VITE_REQUEST_HEADER_SITEID_KEY] = getSiteId(envConfig.VITE_SITE_ID);
      }
    } catch (e) {
    }
  }
  get(url, data = {}, config = {}) {
    return this.request("GET", url, data, config);
  }
  post(url, data = {}, config = {}) {
    return this.request("POST", url, data, config);
  }
  put(url, data = {}, config = {}) {
    return this.request("PUT", url, data, config);
  }
  delete(url, data = {}, config = {}) {
    return this.request("DELETE", url, data, config);
  }
  /**
   * 发送上传请求
   */
  upload(url, data = {}, config = {}) {
    this.requestInterceptors();
    const params = Object.assign(uni.$u.deepClone(this.config), config, {
      url: this.baseUrl + url,
      ...data
    });
    return new Promise((resolve, reject) => {
      uploadFile({
        ...params,
        success: (res) => {
          const data2 = JSON.parse(res.data);
          if (data2.code == 1) {
            this.config.showSuccessMessage && showToast({ title: data2.msg, icon: "none" });
            resolve(data2);
          } else {
            if (data2.code == 0 || data2.code == 400) {
              if (this.config.showErrorMessage !== false)
                showToast({ title: data2.msg, icon: "none" });
            } else {
              this.handleAuthError(data2.code);
            }
            reject(data2);
          }
        },
        fail: (res) => {
          reject(res);
        }
      });
    });
  }
  /**
   * 发送请求
   */
  request(method, url, data, config = {}) {
    this.requestInterceptors();
    const params = Object.assign(uni.$u.deepClone(this.config), config, {
      url: this.baseUrl + url,
      method
    });
    if (params.method.toUpperCase() == "GET" || params.method.toUpperCase() == "DELETE") {
      params.url += "?" + lib.stringify(data);
    } else {
      params.data = data;
    }
    return new Promise((resolve, reject) => {
      request$1({
        ...params,
        success: (res) => {
          const data2 = res.data;
          if (data2.code == 1) {
            config.showSuccessMessage && showToast({ title: data2.msg, icon: "none" });
            resolve(data2);
          } else {
            if (data2.code == 0 || data2.code == 400) {
              if (config.showErrorMessage !== false)
                showToast({ title: data2.msg, icon: "none" });
            } else {
              this.handleAuthError(data2.code);
            }
            reject(data2);
          }
        },
        fail: (res) => {
          reject(res);
        },
        complete: (res) => {
          this.handleRequestFail(res);
        }
      });
    });
  }
  handleAuthError(code) {
    switch (code) {
      case 401:
        useMemberStore$1().logout();
        break;
      case 402:
        if (currRoute().indexOf("app/pages/index/close") != -1)
          return;
        redirect({ url: "/app/pages/index/close", mode: "reLaunch" });
        break;
      case 403:
        if (currRoute().indexOf("app/pages/index/nosite") != -1)
          return;
        redirect({ url: "/app/pages/index/nosite", mode: "switchTab" });
        break;
    }
  }
  handleRequestFail(res) {
    if (res.errMsg && res.errMsg == "request:ok") {
      if (typeof res.data == "string") {
        const err = (isUrl(this.baseUrl) ? this.baseUrl : location.origin + this.baseUrl) + t("baseUrlError");
        showToast({ icon: "none", title: err });
        return;
      }
    }
    if (res.errMsg == "request:fail") {
      showToast({ icon: "none", title: this.baseUrl + t("requestFail") });
      return;
    }
    if (res.errMsg && res.errMsg == "request:fail url not in domain list") {
      showToast({ icon: "none", title: this.baseUrl + t("notInDomainList") });
      return;
    }
  }
}
const request = new Request();
function mobileLogin(data) {
  if (getStorageSync("pid")) {
    data.pid = getStorageSync("pid");
  }
  return request.post("login/mobile", data, { showErrorMessage: true });
}
function getConfig(params) {
  return request.get("login/config", params);
}
function logout() {
  return request.put("auth/logout");
}
function wechatUser(data) {
  return request.get("wechat/user", data, { showErrorMessage: false });
}
function wechatUserLogin(data) {
  if (getStorageSync("pid")) {
    data.pid = getStorageSync("pid");
  }
  return request.post("wechat/userlogin", data, { showErrorMessage: true });
}
function updateWechatOpenid(data) {
  return request.put("wechat/update_openid", data, { showErrorMessage: false });
}
function updateWechatOpenidByH5(data) {
  return request.put("wechat/update_openid_h5", data, { showErrorMessage: false });
}
function useLogin() {
  const setLoginBack = (data) => {
    setStorage({ key: "loginBack", data });
    setTimeout(() => {
      const config = useConfigStore$1();
      const systemStore = useSystemStore$1();
      if (!getStorageSync("autoLoginLock") && isWeixinBrowser() && config.login.is_bind_mobile) {
        setStorageSync("isBindMobile", true);
      }
      if (isWeixinBrowser()) {
        if (config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
          redirect({ url: "/app/pages/auth/login", param: { type: "username" } });
        } else if (systemStore.initStatus == "finish" && !config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
          showToast({ title: "商家未开启登录注册", icon: "none" });
        } else {
          redirect({ url: "/app/pages/auth/index" });
        }
      } else {
        if (config.login.is_username && !config.login.is_mobile) {
          redirect({ url: "/app/pages/auth/login", param: { type: "username" } });
        } else if (systemStore.initStatus == "finish" && !config.login.is_username && !config.login.is_mobile) {
          showToast({ title: "商家未开启登录注册", icon: "none" });
        } else {
          redirect({ url: "/app/pages/auth/index" });
        }
      }
    });
  };
  const ler = ref(0);
  const handleLoginBack = (e) => {
    ler.value = e;
    removeStorageSync("autoLoginLock");
    getStorage({
      key: "loginBack",
      success: (res) => {
        if (ler.value == 1) {
          redirect({
            url: "/addon/home_service/technician/pages/member/index",
            mode: "redirectTo"
          });
        } else if (ler.value == 2) {
          redirect({
            url: "/addon/home_service/store/pages/member/index",
            mode: "redirectTo"
          });
        } else {
          res ? redirect(
            {
              ...res.data,
              mode: "redirectTo"
            }
          ) : redirect({ url: "/app/pages/index/index", mode: "switchTab" });
        }
      },
      fail: (res) => {
        console.log(ler.value);
        if (ler.value == 1) {
          redirect({ url: "/addon/home_service/technician/pages/member/index", mode: "switchTab" });
        } else if (ler.value == 2) {
          redirect({ url: "/addon/home_service/store/pages/member/index", mode: "switchTab" });
        } else {
          redirect({ url: "/app/pages/index/index", mode: "switchTab" });
        }
      }
    });
  };
  const authLogin = (params) => {
    let obj = {
      code: params.code,
      nickname: params.nickname,
      headimg: params.headimg,
      mobile: params.mobile,
      mobile_code: params.mobile_code
    };
    getStorageSync("pid") && Object.assign(obj, { pid: getStorageSync("pid") });
    wechatUser(obj).then((user_res) => {
      if (user_res.data) {
        wechatUserLogin(user_res.data).then((res) => {
          const config = useConfigStore$1();
          if (res.data.token) {
            removeStorageSync("member_lock");
            useMemberStore$1().setToken(res.data.token, () => {
              const memberInfo = useMemberStore$1().info;
              memberInfo && memberInfo.wx_openid && setStorageSync("openid", memberInfo.wx_openid);
              if (getStorageSync("isBindMobile")) {
                removeStorageSync("isBindMobile");
              }
              if (getStorageSync("wap_member_not_control_mobile")) {
                removeStorageSync("wap_member_not_control_mobile");
              }
              if (memberInfo) {
                if (memberInfo.mobile) {
                  setStorageSync("wap_member_mobile", memberInfo.mobile);
                } else {
                  setStorageSync("wap_member_not_control_mobile", true);
                }
              }
              let loginBack = getStorageSync("loginBack");
              if (loginBack && loginBack.url && currRoute() == "app/pages/auth/index") {
                handleLoginBack();
              }
            });
          } else {
            setStorageSync("openid", res.data.openid);
            setStorageSync("unionid", res.data.unionid);
            if (res.data.nickname) {
              setStorageSync("nickname", res.data.nickname);
            }
            if (res.data.avatar) {
              setStorageSync("avatar", res.data.avatar);
            }
            if (getStorageSync("isBindMobile")) {
              removeStorageSync("isBindMobile");
            }
            if (config.login.is_bind_mobile) {
              setStorageSync("isBindMobile", true);
            }
          }
        }).catch((err) => {
          setStorageSync("member_lock", true);
        });
      }
    }).catch((err) => {
      if (err.code == -1) {
        getAuthCode({ scopes: "snsapi_userinfo" });
      } else {
        showToast({ title: err.msg, icon: "none" });
      }
    });
  };
  const updateOpenid = (code, callback = null) => {
    let obj = {
      code
    };
    updateWechatOpenid(obj).then((res) => {
      useMemberStore$1().getMemberInfo(() => {
        const memberInfo = useMemberStore$1().info;
        memberInfo && memberInfo.wx_openid && setStorageSync("openid", memberInfo.wx_openid);
        if (callback)
          callback();
      });
    });
  };
  const getAuthCode = (params = {}) => {
    params.scopes = params.scopes || "snsapi_base";
    params.updateFlag = params.updateFlag || false;
    params.backFlag = params.backFlag || false;
    params.successCallback = params.successCallback || null;
    params.nickname = params.nickname || "";
    params.headimg = params.headimg || "";
    params.mobile = params.mobile || "";
    params.mobile_code = params.mobile_code || "";
    let url = `${location.origin}${location.pathname}`;
    if (url.indexOf("app/pages/auth/index") != -1) {
      let loginBack = getStorageSync("loginBack");
      if (loginBack) {
        url = url.replace("app/pages/auth/index", loginBack.url.substr(1));
        if (loginBack.param) {
          if (url.indexOf("?") != -1) {
            for (let key in loginBack.param) {
              url += `&${key}=${loginBack.param[key]}`;
            }
          } else {
            let count = 0;
            for (let key in loginBack.param) {
              if (count == 0) {
                url += `?${key}=${loginBack.param[key]}`;
              } else {
                url += `&${key}=${loginBack.param[key]}`;
              }
              count++;
            }
          }
        }
      } else {
        url = url.replace("app/pages/auth/index", "app/pages/index/index");
      }
    } else {
      let query = urlDeconstruction(location.href).query;
      query.code && delete query.code;
      Object.keys(query).length && (url += uni.$u.queryParams(query));
    }
    getWechatAuthCode({
      url,
      scopes: params.scopes
    }).then((res) => {
      setStorageSync("wechat_login_back", true);
      location.href = res.data.url;
    });
  };
  const updateWechatOpenidForH5 = (wx_openid) => {
    if (!wx_openid)
      return;
    updateWechatOpenidByH5({ wx_openid }).then((res) => {
      const memberInfo = useMemberStore$1().info;
      memberInfo && memberInfo.wx_openid && setStorageSync("openid", memberInfo.wx_openid);
    });
  };
  return {
    setLoginBack,
    handleLoginBack,
    authLogin,
    updateOpenid,
    getAuthCode,
    updateWechatOpenidForH5
  };
}
const useDiyStore$1 = useDiyStore;
const name = "商城";
const appid = "__UNI__9B03DBD";
const description = "";
const versionName = "1.0.0";
const versionCode = "100";
const transformPx = false;
const quickapp = {};
const uniStatistics = {
  enable: false
};
const vueVersion = "3";
const h5 = {
  router: {
    mode: "history",
    base: "/wap/"
  },
  sdkConfigs: {
    maps: {
      qqmap: {
        key: "6ZDBZ-CLSLX-66747-7MVM4-HLK47-XMBXU"
      }
    }
  },
  async: {
    loading: "",
    error: "",
    delay: 0,
    timeout: 3e3
  }
};
const fallbackLocale = "zh-Hans";
const manifestJson = {
  name,
  appid,
  description,
  versionName,
  versionCode,
  transformPx,
  "app-plus": {
    compatible: {
      ignoreVersion: true
    },
    usingComponents: true,
    nvueStyleCompiler: "uni-app",
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0
    },
    modules: {
      Camera: {},
      Barcode: {},
      Contacts: {},
      Geolocation: {},
      Payment: {},
      VideoPlayer: {},
      Maps: {},
      Share: {}
    },
    distribute: {
      android: {
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>'
        ]
      },
      ios: {
        dSYMs: false
      },
      sdkConfigs: {
        maps: {
          tencent: {
            key: "6ZDBZ-CLSLX-66747-7MVM4-HLK47-XMBXU"
          }
        }
      }
    }
  },
  quickapp,
  "mp-weixin": {
    appid: "wxc106e776c693c9a7",
    resizable: true,
    setting: {
      urlCheck: false
    },
    usingComponents: true,
    permission: {
      "scope.userLocation": {
        desc: "为了更好地为您提供服务"
      },
      "scope.writePhotosAlbum": {
        desc: "为了更好地为您提供服务"
      }
    },
    requiredPrivateInfos: [
      "chooseLocation",
      "getLocation",
      "chooseAddress"
    ],
    __usePrivacyCheck__: true,
    packOptions: {
      ignore: [
        {
          type: "folder",
          value: "lib"
        },
        {
          type: "folder",
          value: "mp-addons"
        },
        {
          type: "file",
          value: "merge-mp-addon.cjs"
        },
        {
          type: "file",
          value: "mp-build-meta.json"
        },
        {
          type: "file",
          value: "mp-merge-meta.json"
        },
        {
          type: "file",
          value: "mp-framework-subpackages.json"
        }
      ]
    }
  },
  "mp-alipay": {
    usingComponents: true
  },
  "mp-baidu": {
    usingComponents: true
  },
  "mp-toutiao": {
    usingComponents: true
  },
  uniStatistics,
  vueVersion,
  h5,
  fallbackLocale
};
const redirect = (redirect2) => {
  const uniApi = getUni();
  if (useDiyStore$1().mode == "decorate")
    return;
  let { url, mode, param, success, fail, complete: complete2 } = redirect2;
  if (url && (url.indexOf("https") != -1 || url.indexOf("http") != -1)) {
    window.location.href = url;
  }
  let originalUrl = url;
  let newLogin = false;
  if (!getToken() && getNeedLoginPages().indexOf(url) != -1) {
    const config = useConfigStore$1();
    const systemStore = useSystemStore$1();
    if (isWeixinBrowser()) {
      if (config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
        url = "/app/pages/auth/login";
        param = { type: "username" };
        newLogin = true;
      } else if (systemStore.initStatus == "finish" && !config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
        uniApi.showToast({ title: "商家未开启登录注册", icon: "none" });
        return;
      } else {
        url = "/app/pages/auth/index";
        newLogin = true;
      }
    } else {
      if (config.login.is_username && !config.login.is_mobile) {
        url = "/app/pages/auth/login";
        param = { type: "username" };
        newLogin = true;
      } else if (systemStore.initStatus == "finish" && !config.login.is_username && !config.login.is_mobile) {
        uniApi.showToast({ title: "商家未开启登录注册", icon: "none" });
        return;
      } else {
        url = "/app/pages/auth/index";
        newLogin = true;
      }
    }
  }
  mode = mode || "navigateTo";
  const tabBar2 = getTabbarPages();
  tabBar2.includes(url) && (mode = "switchTab");
  mode != "switchTab" && param && Object.keys(param).length && (url += uniApi.$u.queryParams(param));
  if (newLogin) {
    uniApi.setStorage({ key: "loginBack", data: { url: originalUrl } });
  }
  switch (mode) {
    case "switchTab":
      uniApi.switchTab({
        url,
        success: () => {
          success && success();
        },
        fail: () => {
          fail && fail();
        },
        complete: () => {
          complete2 && complete2();
        }
      });
      break;
    case "navigateTo":
      uniApi.navigateTo({
        url,
        success: () => {
          success && success();
        },
        fail: () => {
          fail && fail();
        },
        complete: () => {
          complete2 && complete2();
        }
      });
      break;
    case "reLaunch":
      uniApi.reLaunch({
        url,
        success: () => {
          success && success();
        },
        fail: () => {
          fail && fail();
        },
        complete: () => {
          complete2 && complete2();
        }
      });
      break;
    case "redirectTo":
      uniApi.redirectTo({
        url,
        success: () => {
          success && success();
        },
        fail: () => {
          fail && fail();
        },
        complete: () => {
          complete2 && complete2();
        }
      });
      break;
  }
};
const diyRedirect = (link) => {
  const diyStore = useDiyStore$1();
  if (diyStore.mode == "decorate")
    return;
  if (link == null || Object.keys(link).length == 1)
    return;
  if (link.url && (link.url.indexOf("https") != -1 || link.url.indexOf("http") != -1)) {
    window.location.href = link.url;
  } else if (link.appid)
    ;
  else if (link.name == "DIY_MAKE_PHONE_CALL" && link.mobile) {
    makePhoneCall({
      phoneNumber: link.mobile,
      success: (res) => {
      },
      fail: (res) => {
      }
    });
  } else {
    redirect({ url: link.url });
  }
};
const currRoute = () => {
  const pages2 = getCurrentPages$1();
  const route = pages2[pages2.length - 1];
  return route ? route.route : "";
};
const currAddon = () => {
  const pages2 = getCurrentPages$1();
  const route = pages2.length ? pages2[pages2.length - 1].route || "" : "";
  const pathArr = route.split("/").filter(Boolean);
  return pathArr[0] === "addon" ? pathArr[1] || "app" : "app";
};
const currShareRoute = () => {
  const pages2 = getCurrentPages$1();
  if (pages2.length == 0) {
    return {
      path: "/",
      params: {}
    };
  }
  let currentRoute = pages2[pages2.length - 1].route;
  let currentParam = pages2[pages2.length - 1].$page.options;
  let params = {};
  for (let key in currentParam) {
    params[key] = currentParam[key];
  }
  let currentPath = "/" + currentRoute;
  return {
    path: currentPath,
    params
  };
};
function getToken() {
  return useMemberStore$1().token;
}
function setToken(token) {
  setStorageSync(envConfig.VITE_REQUEST_STORAGE_TOKEN_KEY, token);
}
function removeToken() {
  removeStorageSync(envConfig.VITE_REQUEST_STORAGE_TOKEN_KEY);
}
function urlDeconstruction(url) {
  const query = {};
  const [path, param] = url.split("?");
  param && param.split("&").forEach((str) => {
    let [name2, value] = str.split("=");
    query[name2] = value;
  });
  return { path, query };
}
function isUrl(str) {
  return str && (str.indexOf("http://") != -1 || str.indexOf("https://") != -1) || false;
}
function img(path) {
  let imgDomain = envConfig.VITE_IMG_DOMAIN || location.origin;
  if (typeof path == "string" && path.startsWith("/"))
    path = path.replace(/^\//, "");
  if (typeof imgDomain == "string" && imgDomain.endsWith("/"))
    imgDomain = imgDomain.slice(0, -1);
  return isUrl(path) ? path : `${imgDomain}/${path}`;
}
function mobileHide(mobile2) {
  return mobile2.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
function isWeixinBrowser() {
  let ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua) ? true : false;
}
function getAppChannel() {
  return isWeixinBrowser() ? "wechat" : "h5";
}
function moneyFormat(money) {
  return isNaN(parseFloat(money)) ? money : parseFloat(money).toFixed(2);
}
function getSiteId(siteId) {
  const match = location.href.match(/\/wap\/(\d*)\//);
  match && (siteId = match[1]);
  return siteId;
}
function timeStampTurnTime(timeStamp, type = "") {
  if (timeStamp != void 0 && timeStamp != "" && timeStamp > 0) {
    const date = new Date();
    date.setTime(timeStamp * 1e3);
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    if (type) {
      if (type == "yearMonthDay") {
        return y + "年" + m + "月" + d + "日";
      }
      return y + "-" + m + "-" + d;
    } else {
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    }
  } else {
    return "";
  }
}
function timeTurnTimeStamp(dateStr) {
  if (!dateStr || typeof dateStr !== "string" || dateStr.trim() === "") {
    return null;
  }
  const trimmedDateStr = dateStr.trim();
  const formatRules = [
    // 'YYYY年M月D日' -> 'YYYY-MM-DD'
    {
      pattern: /(\d{4})年(\d{1,2})月(\d{1,2})日/,
      transform: (str) => str.replace(/(\d{4})年(\d{1,2})月(\d{1,2})日/, "$1-$2-$3")
    },
    // 'YYYY年M月D日 HH时mm分' -> 'YYYY-MM-DD HH:mm'
    {
      pattern: /(\d{4})年(\d{1,2})月(\d{1,2})日\s+(\d{1,2})时(\d{1,2})分/,
      transform: (str) => str.replace(/(\d{4})年(\d{1,2})月(\d{1,2})日\s+(\d{1,2})时(\d{1,2})分/, "$1-$2-$3 $4:$5")
    },
    // 'YYYY/MM/DD' -> 'YYYY-MM-DD'
    {
      pattern: /^\d{4}\/\d{1,2}\/\d{1,2}(\s+\d{1,2}:\d{1,2}(:\d{1,2})?)?$/,
      transform: (str) => str.replace(/\//g, "-")
    },
    // 标准格式，无需转换
    {
      pattern: /^\d{4}-\d{1,2}-\d{1,2}(\s+\d{1,2}:\d{1,2}(:\d{1,2})?)?$/,
      transform: (str) => str
    }
  ];
  let normalizedDateStr = null;
  for (const rule of formatRules) {
    if (rule.pattern.test(trimmedDateStr)) {
      normalizedDateStr = rule.transform(trimmedDateStr);
      break;
    }
  }
  if (!normalizedDateStr) {
    normalizedDateStr = trimmedDateStr;
  }
  const date = new Date(normalizedDateStr);
  if (isNaN(date.getTime())) {
    return null;
  }
  return Math.floor(date.getTime() / 1e3);
}
function copy(value, callback) {
  const oInput = document.createElement("input");
  oInput.value = value;
  oInput.setAttribute("readonly", "readonly");
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.className = "oInput";
  oInput.style.display = "none";
  hideKeyboard();
  showToast({
    title: "复制成功",
    icon: "none"
  });
  typeof callback == "function" && callback();
}
function deepClone(obj) {
  if ([null, void 0, NaN, false].includes(obj))
    return obj;
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  const o = isArray(obj) ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
const isArray = (value) => {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === "[object Array]";
};
function pxToRpx(px) {
  const systemStore = useSystemStore$1();
  const screenWidth = systemStore.systemInfo.screenWidth;
  return 750 * Number.parseInt(px) / screenWidth;
}
function goback(data) {
  let { url, mode, param, title } = data;
  if (title) {
    showToast({
      title,
      icon: "none"
    });
  }
  setTimeout(() => {
    if (getCurrentPages$1().length > 1) {
      navigateBack({
        delta: 1
      });
    } else {
      redirect({
        url,
        param: param || {},
        mode: mode || "redirectTo"
      });
    }
  }, title ? 600 : 0);
}
function getValidTime(minutes = 1) {
  const date = new Date();
  date.setSeconds(60 * minutes);
  let validTime = parseInt(date.getTime() / 1e3);
  return validTime;
}
function getTopFixedStatusName(data = {}) {
  let name2 = "topFixedStatus";
  if (data.id)
    name2 += "_" + data.id;
  if (data.site_id)
    name2 += "_" + data.site_id;
  if (data.type)
    name2 += "_" + data.type;
  return name2;
}
function openMapSelector(backurl, params = "") {
  var _a, _b;
  const configStore = useSystemStore$1();
  const mapType = ((_a = configStore.mapConfig) == null ? void 0 : _a.map_type) || "tencent";
  if (mapType === "tencent") {
    const url = `https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${encodeURIComponent(backurl)}&key=${manifestJson.h5.sdkConfigs.maps.qqmap.key}&referer=myapp`;
    window.location.href = url;
  } else if (mapType === "tianditu") {
    const tiandituKey = ((_b = configStore.mapConfig) == null ? void 0 : _b.tianditu_map_web_key) || "";
    if (!tiandituKey) {
      showToast({
        title: "天地图密钥未配置",
        icon: "none"
      });
      return;
    }
    const baseUrl = (envConfig.VITE_APP_BASE_URL || `${location.origin}`).replace(/\/api\/$/, "");
    const url = baseUrl + `/tianmap/index.html?search=1&type=0&backurl=${encodeURIComponent(backurl)}&key=${tiandituKey}` + (params ? "&" + params : "");
    window.location.href = url;
  }
}
export {
  getAreaListByPid as $,
  isObjectLike as A,
  baseGetTag as B,
  isObject as C,
  isArrayLike as D,
  isIndex as E,
  eq as F,
  ensureAddonProdReady as G,
  getInstalledAddonKeys as H,
  markAddonInstalled as I,
  loadAddonModule as J,
  isAddonInstalled as K,
  ensureAddonStyles as L,
  copy as M,
  getPoster as N,
  getAddressByLatlng as O,
  openMapSelector as P,
  getValidTime as Q,
  resolveDecorateMode as R,
  getUni as S,
  getAddressList as T,
  envConfig as U,
  mobileHide as V,
  urlDeconstruction as W,
  wechatSync as X,
  getTopFixedStatusName as Y,
  currAddon as Z,
  getFirstPage as _,
  useSystemStore$1 as a,
  getAreaByCode as a0,
  timeTurnTimeStamp as a1,
  timeStampTurnTime as a2,
  uploadVideo as a3,
  useLogin as b,
  getToken as c,
  request as d,
  currRoute as e,
  diyRedirect as f,
  goback as g,
  uploadImage as h,
  img as i,
  cloneDeep as j,
  useDiyStore$1 as k,
  deepClone as l,
  useConfigStore$1 as m,
  isWeixinBrowser as n,
  moneyFormat as o,
  pxToRpx as p,
  getWechatSdkConfig as q,
  redirect as r,
  getActiveAddonPageRoute as s,
  t,
  useMemberStore$1 as u,
  currShareRoute as v,
  sendSms as w,
  getCaptcha as x,
  bindMobile$1 as y,
  mobileLogin as z
};
