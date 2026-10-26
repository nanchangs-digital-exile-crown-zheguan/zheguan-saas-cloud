var ku = Object.defineProperty;
var Tu = (e, t, o) => t in e ? ku(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var v = (e, t, o) => (Tu(e, typeof t != "symbol" ? t + "" : t, o), o);
import { createI18n as bu } from "vue-i18n";
import { nextTick as $, getCurrentInstance as ju } from "vue";
import { defineStore as zu } from "pinia";
import { useRoute as _u } from "vue-router";
const L = "文章数据", R = "文章样式", E = "文章背景", O = "文章数量", F = "文章选择", U = "标题", W = "封面", q = "栏目", K = "摘要", H = "请选择文章", vu = {
  articleData: L,
  articleStyle: R,
  articleBgColor: E,
  articleNum: O,
  selectArticleTips: F,
  articleTitle: U,
  articleImage: W,
  articleCategoryName: q,
  articleSummary: K,
  selectArticleTip: H
}, $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  articleBgColor: E,
  articleCategoryName: q,
  articleData: L,
  articleImage: W,
  articleNum: O,
  articleStyle: R,
  articleSummary: K,
  articleTitle: U,
  default: vu,
  selectArticleTip: H,
  selectArticleTips: F
}, Symbol.toStringTag, { value: "Module" })), V = "搜索", Y = "重置", Q = "确认", X = "取消", Z = "警告", J = "成功", oo = "错误", eo = "信息", to = "暂无数据", no = "加载中...", co = "操作", so = "详情", ao = "添加", ro = "编辑", lo = "返回", io = "提交", po = "保存", go = "关闭", uo = "刷新", mo = "页码", ho = "每页条数", So = "总计", fo = "上一页", Po = "下一页", yo = "跳转", Co = "打印", ko = "复制", To = "粘贴", bo = "剪切", jo = "全选", zo = "取消全选", _o = "批量操作", vo = "请选择", $o = "请输入", wo = "请选择", xo = "必填", No = "长度不能小于", Go = "长度不能大于", Ao = "格式无效", Bo = "加载数据失败", Io = "提交成功", Mo = "提交失败", Do = "删除成功", Lo = "删除失败", Ro = "更新成功", Eo = "更新失败", Oo = "添加成功", Fo = "添加失败", Uo = "确定要删除吗？", Wo = "确定要提交吗？", qo = "确定要取消吗？", wu = {
  search: V,
  reset: Y,
  confirm: Q,
  cancel: X,
  warning: Z,
  success: J,
  error: oo,
  info: eo,
  emptyData: to,
  loading: no,
  operation: co,
  detail: so,
  add: ao,
  edit: ro,
  delete: "删除",
  back: lo,
  submit: io,
  save: po,
  close: go,
  refresh: uo,
  page: mo,
  size: ho,
  total: So,
  prev: fo,
  next: Po,
  jump: yo,
  export: "导出",
  import: "导入",
  print: Co,
  copy: ko,
  paste: To,
  cut: bo,
  selectAll: jo,
  deselectAll: zo,
  batchOperation: _o,
  pleaseSelect: vo,
  pleaseInput: $o,
  pleaseChoose: wo,
  required: xo,
  minLength: No,
  maxLength: Go,
  invalidFormat: Ao,
  loadDataError: Bo,
  submitSuccess: Io,
  submitFailure: Mo,
  deleteSuccess: Do,
  deleteFailure: Lo,
  updateSuccess: Ro,
  updateFailure: Eo,
  addSuccess: Oo,
  addFailure: Fo,
  confirmDelete: Uo,
  confirmSubmit: Wo,
  confirmCancel: qo
}, xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: ao,
  addFailure: Fo,
  addSuccess: Oo,
  back: lo,
  batchOperation: _o,
  cancel: X,
  close: go,
  confirm: Q,
  confirmCancel: qo,
  confirmDelete: Uo,
  confirmSubmit: Wo,
  copy: ko,
  cut: bo,
  default: wu,
  deleteFailure: Lo,
  deleteSuccess: Do,
  deselectAll: zo,
  detail: so,
  edit: ro,
  emptyData: to,
  error: oo,
  info: eo,
  invalidFormat: Ao,
  jump: yo,
  loadDataError: Bo,
  loading: no,
  maxLength: Go,
  minLength: No,
  next: Po,
  operation: co,
  page: mo,
  paste: To,
  pleaseChoose: wo,
  pleaseInput: $o,
  pleaseSelect: vo,
  prev: fo,
  print: Co,
  refresh: uo,
  required: xo,
  reset: Y,
  save: po,
  search: V,
  selectAll: jo,
  size: ho,
  submit: io,
  submitFailure: Mo,
  submitSuccess: Io,
  success: J,
  total: So,
  updateFailure: Eo,
  updateSuccess: Ro,
  warning: Z
}, Symbol.toStringTag, { value: "Module" })), Ko = "选择服务", Ho = "已选", Vo = "个", Yo = "服务选择", Qo = "全部服务", Xo = "已选服务", Zo = "目名称", Jo = "请输入服务名称", oe = "服务分类", ee = "全部", te = "服务类型", ne = "请选择服务类型", ce = "服务", se = "价格", ae = "销量", re = "已选择", le = "个服务", ie = "取消选择", de = "所选服务数量不能少于", pe = "所选服务数量不能超过", ge = "分类名称", ue = "分类图片", me = "服务信息", he = "销售价", Se = "销量", fe = "服务名称", Pe = "服务分类", ye = "请输入服务名称", Ce = "所选服务服务不能少于1个", ke = "显示标题", Te = "搜索样式", be = "边框类型", je = "搜索内容", ze = "指定会员价", _e = "搜索内容", ve = "师傅名称", $e = "手机号", we = "请输入师傅名称", xe = "请输入手机号", Ne = "师傅信息", Ge = "工龄", Ae = "性别", Be = "所选师傅不能少于1个", Ie = "请选择服务分类", Me = "收起", De = "选择标签", Le = "标签ID", Re = "标签名称", Ee = "标签颜色", Oe = "取消", Fe = "确认", Ue = "人员信息", We = "所属机构", qe = "工单状态", Ke = "选择师傅", He = "暂无数据", Ve = "发票信息", Ye = "发票编号", Qe = "发票类型", Xe = "发票金额", Ze = "开票时间", Je = "开票内容", ot = "发票抬头类型", et = "企业名称", tt = "纳税人识别号", nt = "电话", ct = "地址", st = "开户银行", at = "银行账号", rt = "发票状态", lt = "待开票", it = "已开票", dt = "暂无发票信息", pt = "个人", gt = "企业", ut = "开票内容", mt = "开户银行", ht = "银行账号", St = "发票编号", ft = "客户名称", Pt = "纳税人识别号", yt = "开票金额", Ct = "申请时间", kt = "未开票", Tt = "电子邮箱", bt = "订单金额", jt = "选择榜单", zt = "默认", _t = "库存", vt = "请选择商品状态", $t = "积分", wt = "元", xt = "文字颜色", Nt = "标题颜色", Gt = "副标题颜色", At = "虚拟商品和实物商品只能选择其中一个类型，请重新选择", Bt = "商品样式", It = "商品背景", Mt = "商品名称", Dt = "销售价", Lt = "文本", Rt = "请输入按钮文字", Et = "商品销量", Ot = "按钮背景", Ft = "已兑人数", Ut = "购买按钮", Wt = "显示内容", qt = "按钮效果", Kt = "是否显示", Ht = "点击事件", Vt = "加入购物车", Yt = "样式", Qt = "商品销量", Xt = "商品详情", Zt = "圆角", Jt = "分销佣金", on = "请选择商品分类", en = "请选择商品", tn = "是否加粗", nn = "商品标签", cn = "样式1", sn = "样式2", an = "样式3", rn = "样式4", ln = "商品数据", dn = "排序", pn = "销量", gn = "价格", un = "图片圆角", mn = "分类名称", hn = "副标题", Sn = "添加一个多商品组", fn = "优惠券数据", Pn = "优惠券内容", yn = "标题", Cn = "请输入标题", kn = "副标题", Tn = "请输入副标题", bn = "选择优惠券", jn = "全部", zn = "优惠券数量", _n = "请选择优惠券", vn = "按钮文字", $n = "请输入按钮文字", wn = "标题样式", xn = "标题颜色", Nn = "副标题颜色", Gn = "优惠券项样式", An = "金额颜色", Bn = "分组设置", In = "自定义", Mn = "商品分类", Dn = "商品设置", Ln = "搜索设置", Rn = "搜索内容", En = "请输入搜索内容", On = "编号颜色", Fn = "账户颜色", Un = "账号信息", Wn = "标签", qn = "标签颜色", Kn = "请输入标签内容", Hn = "按钮边框颜色", Vn = "轮播样式", Yn = "指示器设置", Qn = "常规颜色", Xn = "选中颜色", Zn = "板块内容", Jn = "背景图片", oc = "图标", ec = "榜单选择", tc = "榜单名称", nc = "请输入榜单名称", cc = "榜单商品数量", sc = "商品来源", ac = "排序规则", rc = "排行周期", lc = "个榜单", ic = "所选榜单数量不能少于", dc = "所选榜单数量不能超过", pc = "头部图片", gc = "副标题", uc = "副标题颜色", mc = "名称颜色", hc = "副标题链接", Sc = "背景颜色", fc = "上圆角", Pc = "下圆角", yc = "图片圆角", Cc = "板块样式", kc = "风格推荐", Tc = "倒计时样式", bc = "数字颜色", jc = "数字背景色", zc = "文字颜色", _c = "分类名称", vc = "分类图片", $c = "请选择商品分类", wc = "优惠券名称", xc = "请输入优惠券名称", Nc = "类型", Gc = "面值", Ac = "使用门槛", Bc = "请选择优惠券", Ic = "商品名称", Mc = "请输入商品名称", Dc = "商品信息", Lc = "兑换价格", Rc = "积分", Ec = "元", Oc = "已兑/剩余", Fc = "请选择积分商品", Uc = "分类名称", Wc = "分类图片", Nu = {
  goodsSelectPopupSelectGoodsButton: Ko,
  goodsSelectPopupSelect: Ho,
  goodsSelectPopupPiece: Vo,
  goodsSelectPopupSelectGoodsDialog: Yo,
  goodsSelectPopupAllGoods: Qo,
  goodsSelectPopupSelectedGoods: Xo,
  goodsSelectPopupGoodsName: Zo,
  goodsSelectPopupGoodsNamePlaceholder: Jo,
  goodsSelectPopupGoodsCategory: oe,
  goodsSelectPopupGoodsCategoryPlaceholder: ee,
  goodsSelectPopupGoodsType: te,
  goodsSelectPopupGoodsTypePlaceholder: ne,
  goodsSelectPopupGoodsInfo: ce,
  goodsSelectPopupPrice: se,
  goodsSelectPopupSaleNum: ae,
  goodsSelectPopupBeforeTip: re,
  goodsSelectPopupAfterTip: le,
  goodsSelectPopupClearGoods: ie,
  goodsSelectPopupGoodsMinTip: de,
  goodsSelectPopupGoodsMaxTip: pe,
  o2oGoodsCategorySelectContentName: ge,
  o2oGoodsCategorySelectContentImage: ue,
  o2oSelectPopupCardInfo: me,
  o2oSelectPopupCardPrice: he,
  o2oSelectPopupCardSaleNum: Se,
  o2oSelectPopupCardName: fe,
  o2oSelectPopupCardCategory: Pe,
  o2oSelectPopupCardNamePlaceholder: ye,
  o2oSelectContentTips: Ce,
  showTitle: ke,
  searchStyle: Te,
  borderStyle: be,
  searchPlaceholder: je,
  goodsFixedPrice: ze,
  searchContent: _e,
  technicianSelectPopupCardName: ve,
  technicianSelectPopupCardMobile: $e,
  technicianSelectPopupCardNamePlaceholder: we,
  technicianSelectPopupCardMobilePlaceholder: xe,
  technicianSelectPopupCardInfo: Ne,
  technicianSelectPopupCardSeniority: Ge,
  technicianSelectPopupCardSex: Ae,
  technicianSelectContentTips: Be,
  o2oGoodsSelectContentPlaceholder: Ie,
  less: Me,
  selectTag: De,
  tagId: Le,
  tagName: Re,
  tagColor: Ee,
  cancel: Oe,
  confirm: Fe,
  technicianInfo: Ue,
  shop: We,
  orderStatus: qe,
  selectTechnican: Ke,
  emptyData: He,
  invoiceInfo: Ve,
  invoiceNumber: Ye,
  invoiceType: Qe,
  invoiceMoney: Xe,
  invoiceTime: Ze,
  contentName: Je,
  headerType: ot,
  headerName: et,
  taxNumber: tt,
  telephone: nt,
  address: ct,
  bankName: st,
  bankCardNumber: at,
  invoiceStatus: rt,
  toInvoice: lt,
  invoiced: it,
  invoiceEmpty: dt,
  individual: pt,
  company: gt,
  invoiceContent: ut,
  bank_name: mt,
  bank_card_number: ht,
  applicationNumber: St,
  customerName: ft,
  taxpayerId: Pt,
  invoiceAmount: yt,
  applicationTime: Ct,
  notInvoiced: kt,
  email: Tt,
  orderMoney: bt,
  rankSelectPopupSelectRankButton: jt,
  defaultGoodsSelect: zt,
  goodsSelectPopupStock: _t,
  goodsSelectPopupGoodsStatusPlaceholder: vt,
  goodsSelectPopupGoodsPointUnit: $t,
  goodsSelectPopupGoodsPriceUnit: wt,
  goodsTextColor: xt,
  textColor: Nt,
  subTextColor: Gt,
  wayPlaceholder: At,
  goodsStyle: Bt,
  goodsBgColor: It,
  goodsNameColor: Mt,
  goodsPriceColor: Dt,
  goodsBtnText: Lt,
  goodsBtnTextPlaceholder: Rt,
  goodsSaleColor: Et,
  goodsBtnColor: Ot,
  goodsNumColor: Ft,
  goodsBuyBtn: Ut,
  goodsShowContent: Wt,
  goodsBtnResult: qt,
  goodsBtnIsShow: Kt,
  goodsCartIncident: Ht,
  goodsAddCart: Vt,
  goodsBtnStyle: Yt,
  goodsSaleNum: Qt,
  goodsDetail: Xt,
  goodsRounded: Zt,
  fenxiaoCommissionPriceColor: Jt,
  goodsCategoryPlaceholder: on,
  goodsPlaceholder: en,
  goodsIsBold: tn,
  goodsLabel: nn,
  headStyle1: cn,
  headStyle2: sn,
  headStyle3: an,
  headStyle4: rn,
  goodsData: ln,
  sortWay: dn,
  default: "综合",
  sales: pn,
  price: gn,
  manyGoodsListAroundRadius: un,
  manyGoodsListCategoryName: mn,
  manyGoodsListSubTitle: hn,
  manyGoodsLisAddItem: Sn,
  couponData: fn,
  couponContent: Pn,
  couponTitle: yn,
  couponTitlePlaceholder: Cn,
  couponSubTitle: kn,
  couponSubTitlePlaceholder: Tn,
  selectCoupon: bn,
  allSources: jn,
  couponNum: zn,
  couponPlaceholder: _n,
  couponBtnText: vn,
  couponBtnTextPlaceholder: $n,
  couponTitleStyle: wn,
  couponTitleColor: xn,
  couponSubTitleColor: Nn,
  couponItemStyle: Gn,
  couponMoney: An,
  manyGoodsListCategorySet: Bn,
  manyGoodsListSourceDiy: In,
  manyGoodsListSourceCategory: Mn,
  goodsSet: Dn,
  goodsSearchSet: Ln,
  goodsSearchText: Rn,
  goodsSearchTextPlaceholder: En,
  shopMemberInfoComponentUidTextColor: On,
  shopMemberInfoComponentAccountTextColor: Fn,
  shopMemberInfoComponentAccount: Un,
  shopGoodsRecommendComponentTag: Wn,
  shopGoodsRecommendComponentTagColor: qn,
  shopGoodsRecommendComponentTagPlaceholder: Kn,
  shopGoodsRecommendComponentButtonBorderColor: Hn,
  carouselStyle: Vn,
  recommendIndicatorStyle: Yn,
  recommendIndicatorColor: Qn,
  recommendIndicatorActiveColor: Xn,
  activeCubeBlockContent: Zn,
  bgImage: Jn,
  rankingTitleIcon: oc,
  rankSelect: ec,
  rankName: tc,
  rankNamePlaceholder: nc,
  showGoodsNum: cc,
  goodsSourceName: sc,
  ruleTypeName: ac,
  rankTypeName: rc,
  rankSelectPopupAfterTip: lc,
  rankSelectPopupGoodsMinTip: ic,
  rankSelectPopupGoodsMaxTip: dc,
  rankingTitleImage: pc,
  rankingSubTitle: gc,
  rankingSubTitleTextColor: uc,
  rankTextColor: mc,
  rankingSubTitleLink: hc,
  listFrameColor: Sc,
  topRounded: fc,
  bottomRounded: Pc,
  imageRounded: yc,
  rankingStyle: Cc,
  styleRecommend: kc,
  countDownStyle: Tc,
  newcomerNumberColor: bc,
  newcomerNumberBg: jc,
  newcomerOtherColor: zc,
  goodsCategorySelectContentName: _c,
  goodsCategorySelectContentImage: vc,
  goodsCategorySelectContentPlaceholder: $c,
  couponSelectContentTitle: wc,
  couponSelectContentTitlePlaceholder: xc,
  couponSelectContentType: Nc,
  couponSelectContentPrice: Gc,
  couponSelectContentThreshold: Ac,
  couponSelectContentTips: Bc,
  pointExchangeSelectContentTitle: Ic,
  pointExchangeSelectContentTitlePlaceholder: Mc,
  pointExchangeSelectContentGoodsInfo: Dc,
  pointExchangeSelectContentPrice: Lc,
  pointExchangeSelectContentPointUnit: Rc,
  pointExchangeSelectContentPriceUnit: Ec,
  pointExchangeSelectContentRedeemedAndSurplus: Oc,
  pointExchangeSelectContentTips: Fc,
  categoryName: Uc,
  categoryImage: Wc
}, Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activeCubeBlockContent: Zn,
  address: ct,
  allSources: jn,
  applicationNumber: St,
  applicationTime: Ct,
  bankCardNumber: at,
  bankName: st,
  bank_card_number: ht,
  bank_name: mt,
  bgImage: Jn,
  borderStyle: be,
  bottomRounded: Pc,
  cancel: Oe,
  carouselStyle: Vn,
  categoryImage: Wc,
  categoryName: Uc,
  company: gt,
  confirm: Fe,
  contentName: Je,
  countDownStyle: Tc,
  couponBtnText: vn,
  couponBtnTextPlaceholder: $n,
  couponContent: Pn,
  couponData: fn,
  couponItemStyle: Gn,
  couponMoney: An,
  couponNum: zn,
  couponPlaceholder: _n,
  couponSelectContentPrice: Gc,
  couponSelectContentThreshold: Ac,
  couponSelectContentTips: Bc,
  couponSelectContentTitle: wc,
  couponSelectContentTitlePlaceholder: xc,
  couponSelectContentType: Nc,
  couponSubTitle: kn,
  couponSubTitleColor: Nn,
  couponSubTitlePlaceholder: Tn,
  couponTitle: yn,
  couponTitleColor: xn,
  couponTitlePlaceholder: Cn,
  couponTitleStyle: wn,
  customerName: ft,
  default: Nu,
  defaultGoodsSelect: zt,
  email: Tt,
  emptyData: He,
  fenxiaoCommissionPriceColor: Jt,
  goodsAddCart: Vt,
  goodsBgColor: It,
  goodsBtnColor: Ot,
  goodsBtnIsShow: Kt,
  goodsBtnResult: qt,
  goodsBtnStyle: Yt,
  goodsBtnText: Lt,
  goodsBtnTextPlaceholder: Rt,
  goodsBuyBtn: Ut,
  goodsCartIncident: Ht,
  goodsCategoryPlaceholder: on,
  goodsCategorySelectContentImage: vc,
  goodsCategorySelectContentName: _c,
  goodsCategorySelectContentPlaceholder: $c,
  goodsData: ln,
  goodsDetail: Xt,
  goodsFixedPrice: ze,
  goodsIsBold: tn,
  goodsLabel: nn,
  goodsNameColor: Mt,
  goodsNumColor: Ft,
  goodsPlaceholder: en,
  goodsPriceColor: Dt,
  goodsRounded: Zt,
  goodsSaleColor: Et,
  goodsSaleNum: Qt,
  goodsSearchSet: Ln,
  goodsSearchText: Rn,
  goodsSearchTextPlaceholder: En,
  goodsSelectPopupAfterTip: le,
  goodsSelectPopupAllGoods: Qo,
  goodsSelectPopupBeforeTip: re,
  goodsSelectPopupClearGoods: ie,
  goodsSelectPopupGoodsCategory: oe,
  goodsSelectPopupGoodsCategoryPlaceholder: ee,
  goodsSelectPopupGoodsInfo: ce,
  goodsSelectPopupGoodsMaxTip: pe,
  goodsSelectPopupGoodsMinTip: de,
  goodsSelectPopupGoodsName: Zo,
  goodsSelectPopupGoodsNamePlaceholder: Jo,
  goodsSelectPopupGoodsPointUnit: $t,
  goodsSelectPopupGoodsPriceUnit: wt,
  goodsSelectPopupGoodsStatusPlaceholder: vt,
  goodsSelectPopupGoodsType: te,
  goodsSelectPopupGoodsTypePlaceholder: ne,
  goodsSelectPopupPiece: Vo,
  goodsSelectPopupPrice: se,
  goodsSelectPopupSaleNum: ae,
  goodsSelectPopupSelect: Ho,
  goodsSelectPopupSelectGoodsButton: Ko,
  goodsSelectPopupSelectGoodsDialog: Yo,
  goodsSelectPopupSelectedGoods: Xo,
  goodsSelectPopupStock: _t,
  goodsSet: Dn,
  goodsShowContent: Wt,
  goodsSourceName: sc,
  goodsStyle: Bt,
  goodsTextColor: xt,
  headStyle1: cn,
  headStyle2: sn,
  headStyle3: an,
  headStyle4: rn,
  headerName: et,
  headerType: ot,
  imageRounded: yc,
  individual: pt,
  invoiceAmount: yt,
  invoiceContent: ut,
  invoiceEmpty: dt,
  invoiceInfo: Ve,
  invoiceMoney: Xe,
  invoiceNumber: Ye,
  invoiceStatus: rt,
  invoiceTime: Ze,
  invoiceType: Qe,
  invoiced: it,
  less: Me,
  listFrameColor: Sc,
  manyGoodsLisAddItem: Sn,
  manyGoodsListAroundRadius: un,
  manyGoodsListCategoryName: mn,
  manyGoodsListCategorySet: Bn,
  manyGoodsListSourceCategory: Mn,
  manyGoodsListSourceDiy: In,
  manyGoodsListSubTitle: hn,
  newcomerNumberBg: jc,
  newcomerNumberColor: bc,
  newcomerOtherColor: zc,
  notInvoiced: kt,
  o2oGoodsCategorySelectContentImage: ue,
  o2oGoodsCategorySelectContentName: ge,
  o2oGoodsSelectContentPlaceholder: Ie,
  o2oSelectContentTips: Ce,
  o2oSelectPopupCardCategory: Pe,
  o2oSelectPopupCardInfo: me,
  o2oSelectPopupCardName: fe,
  o2oSelectPopupCardNamePlaceholder: ye,
  o2oSelectPopupCardPrice: he,
  o2oSelectPopupCardSaleNum: Se,
  orderMoney: bt,
  orderStatus: qe,
  pointExchangeSelectContentGoodsInfo: Dc,
  pointExchangeSelectContentPointUnit: Rc,
  pointExchangeSelectContentPrice: Lc,
  pointExchangeSelectContentPriceUnit: Ec,
  pointExchangeSelectContentRedeemedAndSurplus: Oc,
  pointExchangeSelectContentTips: Fc,
  pointExchangeSelectContentTitle: Ic,
  pointExchangeSelectContentTitlePlaceholder: Mc,
  price: gn,
  rankName: tc,
  rankNamePlaceholder: nc,
  rankSelect: ec,
  rankSelectPopupAfterTip: lc,
  rankSelectPopupGoodsMaxTip: dc,
  rankSelectPopupGoodsMinTip: ic,
  rankSelectPopupSelectRankButton: jt,
  rankTextColor: mc,
  rankTypeName: rc,
  rankingStyle: Cc,
  rankingSubTitle: gc,
  rankingSubTitleLink: hc,
  rankingSubTitleTextColor: uc,
  rankingTitleIcon: oc,
  rankingTitleImage: pc,
  recommendIndicatorActiveColor: Xn,
  recommendIndicatorColor: Qn,
  recommendIndicatorStyle: Yn,
  ruleTypeName: ac,
  sales: pn,
  searchContent: _e,
  searchPlaceholder: je,
  searchStyle: Te,
  selectCoupon: bn,
  selectTag: De,
  selectTechnican: Ke,
  shop: We,
  shopGoodsRecommendComponentButtonBorderColor: Hn,
  shopGoodsRecommendComponentTag: Wn,
  shopGoodsRecommendComponentTagColor: qn,
  shopGoodsRecommendComponentTagPlaceholder: Kn,
  shopMemberInfoComponentAccount: Un,
  shopMemberInfoComponentAccountTextColor: Fn,
  shopMemberInfoComponentUidTextColor: On,
  showGoodsNum: cc,
  showTitle: ke,
  sortWay: dn,
  styleRecommend: kc,
  subTextColor: Gt,
  tagColor: Ee,
  tagId: Le,
  tagName: Re,
  taxNumber: tt,
  taxpayerId: Pt,
  technicianInfo: Ue,
  technicianSelectContentTips: Be,
  technicianSelectPopupCardInfo: Ne,
  technicianSelectPopupCardMobile: $e,
  technicianSelectPopupCardMobilePlaceholder: xe,
  technicianSelectPopupCardName: ve,
  technicianSelectPopupCardNamePlaceholder: we,
  technicianSelectPopupCardSeniority: Ge,
  technicianSelectPopupCardSex: Ae,
  telephone: nt,
  textColor: Nt,
  toInvoice: lt,
  topRounded: fc,
  wayPlaceholder: At
}, Symbol.toStringTag, { value: "Module" })), qc = "华为云存储", Kc = "桶名称", Hc = "请输入桶名称", Vc = "端点节点", Yc = "请输入端点节点", Qc = "AccessKey", Xc = "请输入AccessKey", Zc = "SecretKey", Jc = "请输入SecretKey", os = "", es = "", Au = {
  huaweiStorage: qc,
  huaweiBucket: Kc,
  huaweiBucketPlaceholder: Hc,
  huaweiEndpoint: Vc,
  huaweiEndpointPlaceholder: Yc,
  huaweiAccessKey: Qc,
  huaweiAccessKeyPlaceholder: Xc,
  huaweiSecretKey: Zc,
  huaweiSecretKeyPlaceholder: Jc,
  huaweiEndpointTips: os,
  huaweiBucketTips: es
}, Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Au,
  huaweiAccessKey: Qc,
  huaweiAccessKeyPlaceholder: Xc,
  huaweiBucket: Kc,
  huaweiBucketPlaceholder: Hc,
  huaweiBucketTips: es,
  huaweiEndpoint: Vc,
  huaweiEndpointPlaceholder: Yc,
  huaweiEndpointTips: os,
  huaweiSecretKey: Zc,
  huaweiSecretKeyPlaceholder: Jc,
  huaweiStorage: qc
}, Symbol.toStringTag, { value: "Module" })), ts = "华为云短信", ns = "短信签名", cs = "请输入短信签名", ss = "APP_KEY", as = "请输入APP_KEY", rs = "APP_SECRET", ls = "请输入APP_SECRET", Iu = {
  huaweiSms: ts,
  huaweiSign: ns,
  huaweiSignPlaceholder: cs,
  huaweiAppKey: ss,
  huaweiAppKeyPlaceholder: as,
  huaweiAppSecret: rs,
  huaweiAppSecretPlaceholder: ls
}, Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iu,
  huaweiAppKey: ss,
  huaweiAppKeyPlaceholder: as,
  huaweiAppSecret: rs,
  huaweiAppSecretPlaceholder: ls,
  huaweiSign: ns,
  huaweiSignPlaceholder: cs,
  huaweiSms: ts
}, Symbol.toStringTag, { value: "Module" })), is = "选择项目", ds = "已选", ps = "个", gs = "项目选择", us = "全部项目", ms = "已选项目", hs = "目名称", Ss = "请输入项目名称", fs = "项目分类", Ps = "全部", ys = "项目类型", Cs = "请选择项目类型", ks = "项目", Ts = "价格", bs = "销量", js = "已选择", zs = "个项目", _s = "取消选择", vs = "所选项目数量不能少于", $s = "所选项目数量不能超过", ws = "分类名称", xs = "分类图片", Ns = "项目信息", Gs = "销售价", As = "销量", Bs = "项目名称", Is = "项目分类", Ms = "请输入项目名称", Ds = "所选服务项目不能少于1个", Ls = "显示标题", Rs = "搜索样式", Es = "边框类型", Os = "搜索内容", Fs = "指定会员价", Us = "搜索内容", Ws = "技师名称", qs = "手机号", Ks = "请输入技师名称", Hs = "请输入手机号", Vs = "技师信息", Ys = "工龄", Qs = "性别", Xs = "所选技师不能少于1个", Zs = "请选择项目分类", Du = {
  goodsSelectPopupSelectGoodsButton: is,
  goodsSelectPopupSelect: ds,
  goodsSelectPopupPiece: ps,
  goodsSelectPopupSelectGoodsDialog: gs,
  goodsSelectPopupAllGoods: us,
  goodsSelectPopupSelectedGoods: ms,
  goodsSelectPopupGoodsName: hs,
  goodsSelectPopupGoodsNamePlaceholder: Ss,
  goodsSelectPopupGoodsCategory: fs,
  goodsSelectPopupGoodsCategoryPlaceholder: Ps,
  goodsSelectPopupGoodsType: ys,
  goodsSelectPopupGoodsTypePlaceholder: Cs,
  goodsSelectPopupGoodsInfo: ks,
  goodsSelectPopupPrice: Ts,
  goodsSelectPopupSaleNum: bs,
  goodsSelectPopupBeforeTip: js,
  goodsSelectPopupAfterTip: zs,
  goodsSelectPopupClearGoods: _s,
  goodsSelectPopupGoodsMinTip: vs,
  goodsSelectPopupGoodsMaxTip: $s,
  o2oGoodsCategorySelectContentName: ws,
  o2oGoodsCategorySelectContentImage: xs,
  o2oSelectPopupCardInfo: Ns,
  o2oSelectPopupCardPrice: Gs,
  o2oSelectPopupCardSaleNum: As,
  o2oSelectPopupCardName: Bs,
  o2oSelectPopupCardCategory: Is,
  o2oSelectPopupCardNamePlaceholder: Ms,
  o2oSelectContentTips: Ds,
  showTitle: Ls,
  searchStyle: Rs,
  borderStyle: Es,
  searchPlaceholder: Os,
  goodsFixedPrice: Fs,
  searchContent: Us,
  technicianSelectPopupCardName: Ws,
  technicianSelectPopupCardMobile: qs,
  technicianSelectPopupCardNamePlaceholder: Ks,
  technicianSelectPopupCardMobilePlaceholder: Hs,
  technicianSelectPopupCardInfo: Vs,
  technicianSelectPopupCardSeniority: Ys,
  technicianSelectPopupCardSex: Qs,
  technicianSelectContentTips: Xs,
  o2oGoodsSelectContentPlaceholder: Zs
}, Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  borderStyle: Es,
  default: Du,
  goodsFixedPrice: Fs,
  goodsSelectPopupAfterTip: zs,
  goodsSelectPopupAllGoods: us,
  goodsSelectPopupBeforeTip: js,
  goodsSelectPopupClearGoods: _s,
  goodsSelectPopupGoodsCategory: fs,
  goodsSelectPopupGoodsCategoryPlaceholder: Ps,
  goodsSelectPopupGoodsInfo: ks,
  goodsSelectPopupGoodsMaxTip: $s,
  goodsSelectPopupGoodsMinTip: vs,
  goodsSelectPopupGoodsName: hs,
  goodsSelectPopupGoodsNamePlaceholder: Ss,
  goodsSelectPopupGoodsType: ys,
  goodsSelectPopupGoodsTypePlaceholder: Cs,
  goodsSelectPopupPiece: ps,
  goodsSelectPopupPrice: Ts,
  goodsSelectPopupSaleNum: bs,
  goodsSelectPopupSelect: ds,
  goodsSelectPopupSelectGoodsButton: is,
  goodsSelectPopupSelectGoodsDialog: gs,
  goodsSelectPopupSelectedGoods: ms,
  o2oGoodsCategorySelectContentImage: xs,
  o2oGoodsCategorySelectContentName: ws,
  o2oGoodsSelectContentPlaceholder: Zs,
  o2oSelectContentTips: Ds,
  o2oSelectPopupCardCategory: Is,
  o2oSelectPopupCardInfo: Ns,
  o2oSelectPopupCardName: Bs,
  o2oSelectPopupCardNamePlaceholder: Ms,
  o2oSelectPopupCardPrice: Gs,
  o2oSelectPopupCardSaleNum: As,
  searchContent: Us,
  searchPlaceholder: Os,
  searchStyle: Rs,
  showTitle: Ls,
  technicianSelectContentTips: Xs,
  technicianSelectPopupCardInfo: Vs,
  technicianSelectPopupCardMobile: qs,
  technicianSelectPopupCardMobilePlaceholder: Hs,
  technicianSelectPopupCardName: Ws,
  technicianSelectPopupCardNamePlaceholder: Ks,
  technicianSelectPopupCardSeniority: Ys,
  technicianSelectPopupCardSex: Qs
}, Symbol.toStringTag, { value: "Module" })), Js = "头部信息", oa = "进行中", ea = "请输入进行中文案", ta = "即将开始", na = "请输入即将开始文案", ca = "导航设置", sa = "添加导航", aa = "商品信息", ra = "选择商品", la = "全部商品", ia = "选择场次", da = "手动选择", pa = "商品数量", ga = "选择场次", ua = "购买按钮", ma = "文本", ha = "请输入文字", Sa = "头部样式", fa = "选中文字颜色", Pa = "选中背景颜色", ya = "常规文字颜色", Ca = "常规背景颜色", ka = "商品样式", Ta = "商品背景", ba = "背景颜色", ja = "圆角", za = "请选择场次", _a = "请选择秒杀商品", va = "展示方式", $a = "文字", wa = "图片", xa = "参与会员", Na = "标题", Ga = "请输入标题", Aa = "副标题内容", Ba = "副标题", Ia = "请输入副标题", Ma = "“更多”内容", Da = "商品风格", La = "文本样式", Ra = "常规", Ea = "斜体", Oa = "图片圆角", Fa = "板块内容", Ua = "背景图", Wa = "标题颜色", qa = "副标题颜色", Ka = "添加板块", Ha = "板块样式", Va = "按钮内容", Ya = "编号颜色", Qa = "账户颜色", Xa = "账号信息", Ru = {
  seckillHeadInfo: Js,
  seckillProgressLabel: oa,
  seckillProgressPlaceholder: ea,
  seckillInComingLabel: ta,
  seckillInComingPlaceholder: na,
  seckillNavSetting: ca,
  seckillAddHeadNav: sa,
  seckillGoodsInfo: aa,
  seckillSelectGoodsLabel: ra,
  seckillAllSources: la,
  seckillTimeSources: ia,
  seckillManualSources: da,
  seckillGoodsNum: pa,
  seckillSelectTime: ga,
  seckillBuyBtn: ua,
  seckillText: ma,
  seckillTextPlaceholder: ha,
  seckillHeadStyle: Sa,
  seckillSelectTextColor: fa,
  seckillSelectBgColor: Pa,
  seckillNormalTextColor: ya,
  seckillNormalBgColor: Ca,
  seckillGoodsStyle: ka,
  seckillGoodsBgColor: Ta,
  seckillBgColor: ba,
  seckillRounded: ja,
  seckillSelectTimePlaceholder: za,
  seckillSelectGoodsPlaceholder: _a,
  seckillShowWay: va,
  seckillWayText: $a,
  seckillWayImg: wa,
  seckillWayMember: xa,
  seckillTitleLabel: Na,
  seckillTitlePlaceholder: Ga,
  seckillSubTitleContent: Aa,
  seckillSubTitleLabel: Ba,
  seckillSubTitlePlaceholder: Ia,
  seckillMoreContent: Ma,
  seckillGoodsStyleContent: Da,
  seckillTextStyleLabel: La,
  seckillTextStyleNormal: Ra,
  seckillTextStyleItalics: Ea,
  seckillImageRounded: Oa,
  seckillBlockContent: Fa,
  seckillBgUrl: Ua,
  seckillTitleColorLabel: Wa,
  seckillSubTitleColorLabel: qa,
  seckillAddBlock: Ka,
  seckillBlockStyle: Ha,
  seckillBtnContent: Va,
  seckillMemberInfoComponentUidTextColor: Ya,
  seckillMemberInfoComponentAccountTextColor: Qa,
  seckillMemberInfoComponentAccount: Xa
}, Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ru,
  seckillAddBlock: Ka,
  seckillAddHeadNav: sa,
  seckillAllSources: la,
  seckillBgColor: ba,
  seckillBgUrl: Ua,
  seckillBlockContent: Fa,
  seckillBlockStyle: Ha,
  seckillBtnContent: Va,
  seckillBuyBtn: ua,
  seckillGoodsBgColor: Ta,
  seckillGoodsInfo: aa,
  seckillGoodsNum: pa,
  seckillGoodsStyle: ka,
  seckillGoodsStyleContent: Da,
  seckillHeadInfo: Js,
  seckillHeadStyle: Sa,
  seckillImageRounded: Oa,
  seckillInComingLabel: ta,
  seckillInComingPlaceholder: na,
  seckillManualSources: da,
  seckillMemberInfoComponentAccount: Xa,
  seckillMemberInfoComponentAccountTextColor: Qa,
  seckillMemberInfoComponentUidTextColor: Ya,
  seckillMoreContent: Ma,
  seckillNavSetting: ca,
  seckillNormalBgColor: Ca,
  seckillNormalTextColor: ya,
  seckillProgressLabel: oa,
  seckillProgressPlaceholder: ea,
  seckillRounded: ja,
  seckillSelectBgColor: Pa,
  seckillSelectGoodsLabel: ra,
  seckillSelectGoodsPlaceholder: _a,
  seckillSelectTextColor: fa,
  seckillSelectTime: ga,
  seckillSelectTimePlaceholder: za,
  seckillShowWay: va,
  seckillSubTitleColorLabel: qa,
  seckillSubTitleContent: Aa,
  seckillSubTitleLabel: Ba,
  seckillSubTitlePlaceholder: Ia,
  seckillText: ma,
  seckillTextPlaceholder: ha,
  seckillTextStyleItalics: Ea,
  seckillTextStyleLabel: La,
  seckillTextStyleNormal: Ra,
  seckillTimeSources: ia,
  seckillTitleColorLabel: Wa,
  seckillTitleLabel: Na,
  seckillTitlePlaceholder: Ga,
  seckillWayImg: wa,
  seckillWayMember: xa,
  seckillWayText: $a
}, Symbol.toStringTag, { value: "Module" })), Za = "选择商品", Ja = "选择榜单", or = "已选", er = "个", tr = "商品选择", nr = "全部商品", cr = "默认", sr = "已选商品", ar = "商品名称", rr = "请输入商品名称", lr = "请选择商品状态", ir = "商品分类", dr = "全部", pr = "商品类型", gr = "请选择商品类型", ur = "商品", mr = "积分", hr = "元", Sr = "价格", fr = "库存", Pr = "已选择", yr = "个商品", Cr = "取消选择", kr = "所选商品数量不能少于", Tr = "所选商品数量不能超过", br = "文字颜色", jr = "标题颜色", zr = "副标题颜色", _r = "虚拟商品和实物商品只能选择其中一个类型，请重新选择", vr = "商品样式", $r = "商品背景", wr = "商品名称", xr = "销售价", Nr = "文本", Gr = "请输入按钮文字", Ar = "商品销量", Br = "按钮背景", Ir = "已兑人数", Mr = "购买按钮", Dr = "显示内容", Lr = "按钮效果", Rr = "是否显示", Er = "点击事件", Or = "加入购物车", Fr = "样式", Ur = "商品销量", Wr = "商品详情", qr = "圆角", Kr = "分销佣金", Hr = "请选择商品分类", Vr = "请选择商品", Yr = "是否加粗", Qr = "商品标签", Xr = "样式1", Zr = "样式2", Jr = "样式3", ol = "样式4", el = "商品数据", tl = "排序", nl = "销量", cl = "价格", sl = "图片圆角", al = "分类名称", rl = "副标题", ll = "添加一个多商品组", il = "优惠券数据", dl = "优惠券内容", pl = "标题", gl = "请输入标题", ul = "副标题", ml = "请输入副标题", hl = "选择优惠券", Sl = "全部", fl = "优惠券数量", Pl = "请选择优惠券", yl = "按钮文字", Cl = "请输入按钮文字", kl = "标题样式", Tl = "标题颜色", bl = "副标题颜色", jl = "优惠券项样式", zl = "金额颜色", _l = "分组设置", vl = "自定义", $l = "商品分类", wl = "商品设置", xl = "搜索设置", Nl = "搜索内容", Gl = "请输入搜索内容", Al = "编号颜色", Bl = "账户颜色", Il = "账号信息", Ml = "标签", Dl = "标签颜色", Ll = "请输入标签内容", Rl = "按钮边框颜色", El = "轮播样式", Ol = "指示器设置", Fl = "常规颜色", Ul = "选中颜色", Wl = "板块内容", ql = "背景图片", Kl = "图标", Hl = "榜单选择", Vl = "榜单名称", Yl = "请输入榜单名称", Ql = "榜单商品数量", Xl = "商品来源", Zl = "排序规则", Jl = "排行周期", oi = "个榜单", ei = "所选榜单数量不能少于", ti = "所选榜单数量不能超过", ni = "头部图片", ci = "副标题", si = "副标题颜色", ai = "名称颜色", ri = "副标题链接", li = "背景颜色", ii = "上圆角", di = "下圆角", pi = "图片圆角", gi = "板块样式", ui = "风格推荐", mi = "倒计时样式", hi = "数字颜色", Si = "数字背景色", fi = "文字颜色", Pi = "分类名称", yi = "分类图片", Ci = "请选择商品分类", ki = "优惠券名称", Ti = "请输入优惠券名称", bi = "类型", ji = "面值", zi = "使用门槛", _i = "请选择优惠券", vi = "商品名称", $i = "请输入商品名称", wi = "商品信息", xi = "兑换价格", Ni = "积分", Gi = "元", Ai = "已兑/剩余", Bi = "请选择积分商品", Ii = "分类名称", Mi = "分类图片", Ou = {
  goodsSelectPopupSelectGoodsButton: Za,
  rankSelectPopupSelectRankButton: Ja,
  goodsSelectPopupSelect: or,
  goodsSelectPopupPiece: er,
  goodsSelectPopupSelectGoodsDialog: tr,
  goodsSelectPopupAllGoods: nr,
  defaultGoodsSelect: cr,
  goodsSelectPopupSelectedGoods: sr,
  goodsSelectPopupGoodsName: ar,
  goodsSelectPopupGoodsNamePlaceholder: rr,
  goodsSelectPopupGoodsStatusPlaceholder: lr,
  goodsSelectPopupGoodsCategory: ir,
  goodsSelectPopupGoodsCategoryPlaceholder: dr,
  goodsSelectPopupGoodsType: pr,
  goodsSelectPopupGoodsTypePlaceholder: gr,
  goodsSelectPopupGoodsInfo: ur,
  goodsSelectPopupGoodsPointUnit: mr,
  goodsSelectPopupGoodsPriceUnit: hr,
  goodsSelectPopupPrice: Sr,
  goodsSelectPopupStock: fr,
  goodsSelectPopupBeforeTip: Pr,
  goodsSelectPopupAfterTip: yr,
  goodsSelectPopupClearGoods: Cr,
  goodsSelectPopupGoodsMinTip: kr,
  goodsSelectPopupGoodsMaxTip: Tr,
  goodsTextColor: br,
  textColor: jr,
  subTextColor: zr,
  wayPlaceholder: _r,
  goodsStyle: vr,
  goodsBgColor: $r,
  goodsNameColor: wr,
  goodsPriceColor: xr,
  goodsBtnText: Nr,
  goodsBtnTextPlaceholder: Gr,
  goodsSaleColor: Ar,
  goodsBtnColor: Br,
  goodsNumColor: Ir,
  goodsBuyBtn: Mr,
  goodsShowContent: Dr,
  goodsBtnResult: Lr,
  goodsBtnIsShow: Rr,
  goodsCartIncident: Er,
  goodsAddCart: Or,
  goodsBtnStyle: Fr,
  goodsSaleNum: Ur,
  goodsDetail: Wr,
  goodsRounded: qr,
  fenxiaoCommissionPriceColor: Kr,
  goodsCategoryPlaceholder: Hr,
  goodsPlaceholder: Vr,
  goodsIsBold: Yr,
  goodsLabel: Qr,
  headStyle1: Xr,
  headStyle2: Zr,
  headStyle3: Jr,
  headStyle4: ol,
  goodsData: el,
  sortWay: tl,
  default: "综合",
  sales: nl,
  price: cl,
  manyGoodsListAroundRadius: sl,
  manyGoodsListCategoryName: al,
  manyGoodsListSubTitle: rl,
  manyGoodsLisAddItem: ll,
  couponData: il,
  couponContent: dl,
  couponTitle: pl,
  couponTitlePlaceholder: gl,
  couponSubTitle: ul,
  couponSubTitlePlaceholder: ml,
  selectCoupon: hl,
  allSources: Sl,
  couponNum: fl,
  couponPlaceholder: Pl,
  couponBtnText: yl,
  couponBtnTextPlaceholder: Cl,
  couponTitleStyle: kl,
  couponTitleColor: Tl,
  couponSubTitleColor: bl,
  couponItemStyle: jl,
  couponMoney: zl,
  manyGoodsListCategorySet: _l,
  manyGoodsListSourceDiy: vl,
  manyGoodsListSourceCategory: $l,
  goodsSet: wl,
  goodsSearchSet: xl,
  goodsSearchText: Nl,
  goodsSearchTextPlaceholder: Gl,
  shopMemberInfoComponentUidTextColor: Al,
  shopMemberInfoComponentAccountTextColor: Bl,
  shopMemberInfoComponentAccount: Il,
  shopGoodsRecommendComponentTag: Ml,
  shopGoodsRecommendComponentTagColor: Dl,
  shopGoodsRecommendComponentTagPlaceholder: Ll,
  shopGoodsRecommendComponentButtonBorderColor: Rl,
  carouselStyle: El,
  recommendIndicatorStyle: Ol,
  recommendIndicatorColor: Fl,
  recommendIndicatorActiveColor: Ul,
  activeCubeBlockContent: Wl,
  bgImage: ql,
  rankingTitleIcon: Kl,
  rankSelect: Hl,
  rankName: Vl,
  rankNamePlaceholder: Yl,
  showGoodsNum: Ql,
  goodsSourceName: Xl,
  ruleTypeName: Zl,
  rankTypeName: Jl,
  rankSelectPopupAfterTip: oi,
  rankSelectPopupGoodsMinTip: ei,
  rankSelectPopupGoodsMaxTip: ti,
  rankingTitleImage: ni,
  rankingSubTitle: ci,
  rankingSubTitleTextColor: si,
  rankTextColor: ai,
  rankingSubTitleLink: ri,
  listFrameColor: li,
  topRounded: ii,
  bottomRounded: di,
  imageRounded: pi,
  rankingStyle: gi,
  styleRecommend: ui,
  countDownStyle: mi,
  newcomerNumberColor: hi,
  newcomerNumberBg: Si,
  newcomerOtherColor: fi,
  goodsCategorySelectContentName: Pi,
  goodsCategorySelectContentImage: yi,
  goodsCategorySelectContentPlaceholder: Ci,
  couponSelectContentTitle: ki,
  couponSelectContentTitlePlaceholder: Ti,
  couponSelectContentType: bi,
  couponSelectContentPrice: ji,
  couponSelectContentThreshold: zi,
  couponSelectContentTips: _i,
  pointExchangeSelectContentTitle: vi,
  pointExchangeSelectContentTitlePlaceholder: $i,
  pointExchangeSelectContentGoodsInfo: wi,
  pointExchangeSelectContentPrice: xi,
  pointExchangeSelectContentPointUnit: Ni,
  pointExchangeSelectContentPriceUnit: Gi,
  pointExchangeSelectContentRedeemedAndSurplus: Ai,
  pointExchangeSelectContentTips: Bi,
  categoryName: Ii,
  categoryImage: Mi
}, Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activeCubeBlockContent: Wl,
  allSources: Sl,
  bgImage: ql,
  bottomRounded: di,
  carouselStyle: El,
  categoryImage: Mi,
  categoryName: Ii,
  countDownStyle: mi,
  couponBtnText: yl,
  couponBtnTextPlaceholder: Cl,
  couponContent: dl,
  couponData: il,
  couponItemStyle: jl,
  couponMoney: zl,
  couponNum: fl,
  couponPlaceholder: Pl,
  couponSelectContentPrice: ji,
  couponSelectContentThreshold: zi,
  couponSelectContentTips: _i,
  couponSelectContentTitle: ki,
  couponSelectContentTitlePlaceholder: Ti,
  couponSelectContentType: bi,
  couponSubTitle: ul,
  couponSubTitleColor: bl,
  couponSubTitlePlaceholder: ml,
  couponTitle: pl,
  couponTitleColor: Tl,
  couponTitlePlaceholder: gl,
  couponTitleStyle: kl,
  default: Ou,
  defaultGoodsSelect: cr,
  fenxiaoCommissionPriceColor: Kr,
  goodsAddCart: Or,
  goodsBgColor: $r,
  goodsBtnColor: Br,
  goodsBtnIsShow: Rr,
  goodsBtnResult: Lr,
  goodsBtnStyle: Fr,
  goodsBtnText: Nr,
  goodsBtnTextPlaceholder: Gr,
  goodsBuyBtn: Mr,
  goodsCartIncident: Er,
  goodsCategoryPlaceholder: Hr,
  goodsCategorySelectContentImage: yi,
  goodsCategorySelectContentName: Pi,
  goodsCategorySelectContentPlaceholder: Ci,
  goodsData: el,
  goodsDetail: Wr,
  goodsIsBold: Yr,
  goodsLabel: Qr,
  goodsNameColor: wr,
  goodsNumColor: Ir,
  goodsPlaceholder: Vr,
  goodsPriceColor: xr,
  goodsRounded: qr,
  goodsSaleColor: Ar,
  goodsSaleNum: Ur,
  goodsSearchSet: xl,
  goodsSearchText: Nl,
  goodsSearchTextPlaceholder: Gl,
  goodsSelectPopupAfterTip: yr,
  goodsSelectPopupAllGoods: nr,
  goodsSelectPopupBeforeTip: Pr,
  goodsSelectPopupClearGoods: Cr,
  goodsSelectPopupGoodsCategory: ir,
  goodsSelectPopupGoodsCategoryPlaceholder: dr,
  goodsSelectPopupGoodsInfo: ur,
  goodsSelectPopupGoodsMaxTip: Tr,
  goodsSelectPopupGoodsMinTip: kr,
  goodsSelectPopupGoodsName: ar,
  goodsSelectPopupGoodsNamePlaceholder: rr,
  goodsSelectPopupGoodsPointUnit: mr,
  goodsSelectPopupGoodsPriceUnit: hr,
  goodsSelectPopupGoodsStatusPlaceholder: lr,
  goodsSelectPopupGoodsType: pr,
  goodsSelectPopupGoodsTypePlaceholder: gr,
  goodsSelectPopupPiece: er,
  goodsSelectPopupPrice: Sr,
  goodsSelectPopupSelect: or,
  goodsSelectPopupSelectGoodsButton: Za,
  goodsSelectPopupSelectGoodsDialog: tr,
  goodsSelectPopupSelectedGoods: sr,
  goodsSelectPopupStock: fr,
  goodsSet: wl,
  goodsShowContent: Dr,
  goodsSourceName: Xl,
  goodsStyle: vr,
  goodsTextColor: br,
  headStyle1: Xr,
  headStyle2: Zr,
  headStyle3: Jr,
  headStyle4: ol,
  imageRounded: pi,
  listFrameColor: li,
  manyGoodsLisAddItem: ll,
  manyGoodsListAroundRadius: sl,
  manyGoodsListCategoryName: al,
  manyGoodsListCategorySet: _l,
  manyGoodsListSourceCategory: $l,
  manyGoodsListSourceDiy: vl,
  manyGoodsListSubTitle: rl,
  newcomerNumberBg: Si,
  newcomerNumberColor: hi,
  newcomerOtherColor: fi,
  pointExchangeSelectContentGoodsInfo: wi,
  pointExchangeSelectContentPointUnit: Ni,
  pointExchangeSelectContentPrice: xi,
  pointExchangeSelectContentPriceUnit: Gi,
  pointExchangeSelectContentRedeemedAndSurplus: Ai,
  pointExchangeSelectContentTips: Bi,
  pointExchangeSelectContentTitle: vi,
  pointExchangeSelectContentTitlePlaceholder: $i,
  price: cl,
  rankName: Vl,
  rankNamePlaceholder: Yl,
  rankSelect: Hl,
  rankSelectPopupAfterTip: oi,
  rankSelectPopupGoodsMaxTip: ti,
  rankSelectPopupGoodsMinTip: ei,
  rankSelectPopupSelectRankButton: Ja,
  rankTextColor: ai,
  rankTypeName: Jl,
  rankingStyle: gi,
  rankingSubTitle: ci,
  rankingSubTitleLink: ri,
  rankingSubTitleTextColor: si,
  rankingTitleIcon: Kl,
  rankingTitleImage: ni,
  recommendIndicatorActiveColor: Ul,
  recommendIndicatorColor: Fl,
  recommendIndicatorStyle: Ol,
  ruleTypeName: Zl,
  sales: nl,
  selectCoupon: hl,
  shopGoodsRecommendComponentButtonBorderColor: Rl,
  shopGoodsRecommendComponentTag: Ml,
  shopGoodsRecommendComponentTagColor: Dl,
  shopGoodsRecommendComponentTagPlaceholder: Ll,
  shopMemberInfoComponentAccount: Il,
  shopMemberInfoComponentAccountTextColor: Bl,
  shopMemberInfoComponentUidTextColor: Al,
  showGoodsNum: Ql,
  sortWay: tl,
  styleRecommend: ui,
  subTextColor: zr,
  textColor: jr,
  topRounded: ii,
  wayPlaceholder: _r
}, Symbol.toStringTag, { value: "Module" })), Di = "成为分销商", Li = "是否展示会员成为分销商的按钮", Ri = "是", Ei = "否", Oi = "分销商信息", Fi = "分销等级", Ui = "状态", Wi = "请输入分销商昵称或者手机号", Uu = {
  isBecomeFenxiao: Di,
  isBecomeFenxiaoDesc: Li,
  are: Ri,
  no: Ei,
  fenxiaoName: Oi,
  fenxiaoLevel: Fi,
  currentState: Ui,
  fenxiaoNamePlaceholder: Wi
}, Wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  are: Ri,
  currentState: Ui,
  default: Uu,
  fenxiaoLevel: Fi,
  fenxiaoName: Oi,
  fenxiaoNamePlaceholder: Wi,
  isBecomeFenxiao: Di,
  isBecomeFenxiaoDesc: Li,
  no: Ei
}, Symbol.toStringTag, { value: "Module" })), qi = "选择礼品卡", Ki = "已选", Hi = "张", Vi = "礼品卡选择", Yi = "全部礼品卡", Qi = "已选礼品卡", Xi = "礼品卡名称", Zi = "请输入礼品卡名称", Ji = "礼品卡分类", od = "全部", ed = "礼品卡信息", td = "价格", nd = "权益类型", cd = "请选择权益类型", sd = "有效期", ad = "永久有效", rd = "已选择", ld = "张礼品卡", id = "取消选择", dd = "所选礼品卡数量不能少于", pd = "所选礼品卡数量不能超过", gd = "来源", ud = "数量", md = "手动选择", hd = "礼品卡分类", Sd = "礼品卡样式", fd = "礼品卡背景", Pd = "礼品卡名称", yd = "请选择礼品卡分类", Cd = "请选择礼品卡", kd = "排序", Td = "销量", bd = "价格", jd = "刷新", zd = "刷新成功", _d = "添加分类", vd = "礼品卡分类", $d = "请选择礼品卡", qu = {
  giftcardSelectPopupButton: qi,
  giftcardSelectPopupSelect: Ki,
  giftcardSelectPopupPiece: Hi,
  giftcardSelectPopupSelectGiftcardDialog: Vi,
  giftcardSelectPopupAllGiftcard: Yi,
  giftcardSelectPopupSelectedGiftcard: Qi,
  giftcardSelectPopupCardName: Xi,
  giftcardSelectPopupCardNamePlaceholder: Zi,
  giftcardSelectPopupCardCategory: Ji,
  giftcardSelectPopupCardCategoryPlaceholder: od,
  giftcardSelectPopupCardInfo: ed,
  giftcardSelectPopupCardPrice: td,
  cardRightType: nd,
  cardRightTypePlaceholder: cd,
  validityType: sd,
  validityForever: ad,
  giftcardSelectPopupBeforeTip: rd,
  giftcardSelectPopupAfterTip: ld,
  giftcardSelectPopupClearGiftcard: id,
  giftcardSelectPopupGiftcardMinTip: dd,
  giftcardSelectPopupGiftcardMaxTip: pd,
  giftcardSource: gd,
  giftcardNum: ud,
  customGiftcard: md,
  giftcardCategoryTitle: hd,
  giftcardStyle: Sd,
  giftcardBgColor: fd,
  giftcardNameColor: Pd,
  giftcardCategoryPlaceholder: yd,
  giftcardPlaceholder: Cd,
  sortWay: kd,
  default: "综合",
  sales: Td,
  price: bd,
  refresh: jd,
  refreshSuccess: zd,
  addCategory: _d,
  selectCardCategory: vd,
  giftcardSelectContentTips: $d
}, Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addCategory: _d,
  cardRightType: nd,
  cardRightTypePlaceholder: cd,
  customGiftcard: md,
  default: qu,
  giftcardBgColor: fd,
  giftcardCategoryPlaceholder: yd,
  giftcardCategoryTitle: hd,
  giftcardNameColor: Pd,
  giftcardNum: ud,
  giftcardPlaceholder: Cd,
  giftcardSelectContentTips: $d,
  giftcardSelectPopupAfterTip: ld,
  giftcardSelectPopupAllGiftcard: Yi,
  giftcardSelectPopupBeforeTip: rd,
  giftcardSelectPopupButton: qi,
  giftcardSelectPopupCardCategory: Ji,
  giftcardSelectPopupCardCategoryPlaceholder: od,
  giftcardSelectPopupCardInfo: ed,
  giftcardSelectPopupCardName: Xi,
  giftcardSelectPopupCardNamePlaceholder: Zi,
  giftcardSelectPopupCardPrice: td,
  giftcardSelectPopupClearGiftcard: id,
  giftcardSelectPopupGiftcardMaxTip: pd,
  giftcardSelectPopupGiftcardMinTip: dd,
  giftcardSelectPopupPiece: Hi,
  giftcardSelectPopupSelect: Ki,
  giftcardSelectPopupSelectGiftcardDialog: Vi,
  giftcardSelectPopupSelectedGiftcard: Qi,
  giftcardSource: gd,
  giftcardStyle: Sd,
  price: bd,
  refresh: jd,
  refreshSuccess: zd,
  sales: Td,
  selectCardCategory: vd,
  sortWay: kd,
  validityForever: ad,
  validityType: sd
}, Symbol.toStringTag, { value: "Module" })), wd = "内容标题", xd = "请输入内容标题", Nd = "内容类型", Gd = "图文", Ad = "短视频", Bd = "请选择内容类型", Id = "内容封面", Md = "点赞数", Dd = "分享数", Ld = "评论数", Rd = "浏览量", Ed = "收藏数", Od = "发布时间", Fd = "评论内容", Ud = "请输入评论内容", Wd = "详情", qd = "内容作者", Kd = "内容话题", Hd = "内容简介", Vd = "宝贝信息", Yd = "会员信息", Qd = "回复数", Xd = "作者", Zd = "请选择内容", Hu = {
  contentTitle: wd,
  contentTitlePlaceholder: xd,
  contentType: Nd,
  imageText: Gd,
  shortVideo: Ad,
  contentTypePlaceholder: Bd,
  contentCover: Id,
  likeNum: Md,
  shareNum: Dd,
  commentNum: Ld,
  viewNum: Rd,
  collectNum: Ed,
  createTime: Od,
  commentContent: Fd,
  commentContentPlaceholder: Ud,
  detail: Wd,
  contentAuthor: qd,
  topicName: Kd,
  content: Hd,
  cwryInfo: Vd,
  memberInfo: Yd,
  replyNum: Qd,
  author: Xd,
  contentSelectContentTips: Zd
}, Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  author: Xd,
  collectNum: Ed,
  commentContent: Fd,
  commentContentPlaceholder: Ud,
  commentNum: Ld,
  content: Hd,
  contentAuthor: qd,
  contentCover: Id,
  contentSelectContentTips: Zd,
  contentTitle: wd,
  contentTitlePlaceholder: xd,
  contentType: Nd,
  contentTypePlaceholder: Bd,
  createTime: Od,
  cwryInfo: Vd,
  default: Hu,
  detail: Wd,
  imageText: Gd,
  likeNum: Md,
  memberInfo: Yd,
  replyNum: Qd,
  shareNum: Dd,
  shortVideo: Ad,
  topicName: Kd,
  viewNum: Rd
}, Symbol.toStringTag, { value: "Module" })), Jd = "选择线路", op = "线路选择", ep = "全部线路", tp = "线路名称", np = "请输入线路名称", cp = "线路信息", sp = "价格", ap = "库存", rp = "创建时间", lp = "选择景点", ip = "景点选择", dp = "全部景点", pp = "景点名称", gp = "请输入景点名称", up = "景点信息", mp = "选择酒店", hp = "酒店选择", Sp = "全部酒店", fp = "酒店名称", Pp = "请输入酒店名称", yp = "酒店信息", Cp = "开始日期", kp = "结束日期", Tp = "确定", bp = "取消", jp = "个线路", zp = "个景点", _p = "个酒店", vp = "所选线路数量不能少于", $p = "所选线路数量不能超过", wp = "所选景点数量不能少于", xp = "所选景点数量不能超过", Np = "所选酒店数量不能少于", Gp = "所选酒店数量不能超过", Ap = "会员价", Bp = "参与", Ip = "不参与", Mp = "会员等级折扣", Dp = "会员折扣", Lp = "指定折扣", Rp = "不参与", Ep = "会员折扣说明：按照默认会员等级折扣优惠", Op = "指定折扣：按照设置的折扣优惠", Fp = "编辑会员价", Up = "商品规格", Wp = "会员享受折扣", qp = "折", Kp = "元", Hp = "修改会员价", Vp = "会员等级", Yp = "请输入会员价", Qp = "会员价说明：指定优惠价格", Xp = "日历会员价", Zp = "日期设置", Jp = "请选择要操作的数据", og = "日期范围", eg = "一星", tg = "二星", ng = "三星", cg = "四星", sg = "五星", ag = "酒店星级", rg = "酒店地址", lg = "酒店状态", ig = "景点星级", dg = "景点地址", pg = "景点状态", gg = "线路名称", ug = "线路信息", mg = "请输入线路名称", hg = "线路图片", Sg = "销售价格", fg = "是否上架", Pg = "出发城市", yg = "请输入出发城市", Cg = "目的地", kg = "请输入目的地", Tg = "费用说明", bg = "添加时间", jg = "请输入添加时间", zg = "添加线路", _g = "编辑旅游线路", vg = "确定要删除该旅游线路吗？", $g = "线路价格", wg = "线路库存", xg = "线路城市", Ng = "请选择开始时间", Gg = "请选择结束时间", Ag = "请选择景点", Bg = "请选择线路", Ig = "请选择酒店", Yu = {
  travelSelectPopupSelectTravelButton: Jd,
  travelSelectPopupSelectGoodsDialog: op,
  travelSelectPopupAllTravel: ep,
  wayNameSelectPopup: tp,
  wayNameSelectPopupPlaceholder: np,
  wayInfoPopup: cp,
  tourismPricePopup: sp,
  tourismStockPopup: ap,
  goodsSelectPopupCreateTime: rp,
  ticketsSelectPopupSelectTicketsButton: lp,
  ticketsSelectPopupSelectGoodsDialog: ip,
  ticketsSelectPopupAllTickets: dp,
  scenicNameSelectPopup: pp,
  scenicNameSelectPopupPlaceholder: gp,
  scenicInfo: up,
  hotelSelectPopupSelectHotelButton: mp,
  hotelSelectPopupSelectGoodsDialog: hp,
  hotelSelectPopupAllHotel: Sp,
  hotelNameSelectPopup: fp,
  hotelNameSelectPopupPlaceholder: Pp,
  hotelInfo: yp,
  startDate: Cp,
  endDate: kp,
  confirm: Tp,
  cancel: bp,
  travelSelectPopupAfterTip: jp,
  ticketsSelectPopupAfterTip: zp,
  hotelSelectPopupAfterTip: _p,
  travelSelectPopupGoodsMinTip: vp,
  travelSelectPopupGoodsMaxTip: $p,
  ticketsSelectPopupGoodsMinTip: wp,
  ticketsSelectPopupGoodsMaxTip: xp,
  hotelSelectPopupGoodsMinTip: Np,
  hotelSelectPopupGoodsMaxTip: Gp,
  memberPrice: Ap,
  involved: Bp,
  noInvolved: Ip,
  memberDiscount: Mp,
  discount: Dp,
  fixedDiscount: Lp,
  nonparticipation: Rp,
  discountHint: Ep,
  fixedDiscountHint: Op,
  editMemberPricePopupTitle: Fp,
  goodsSku: Up,
  memberEnjoyDiscount: Wp,
  discountUnit: qp,
  yuanUnit: Kp,
  editMemberPrice: Hp,
  memberLevel: Vp,
  memberPricePlaceholder: Yp,
  fixedPriceHint: Qp,
  dayMemberPrice: Xp,
  daySetting: Zp,
  batchEmptySelectedGoodsTips: Jp,
  dateRange: og,
  oneStar: eg,
  twoStar: tg,
  threeStar: ng,
  fourStar: cg,
  fiveStar: sg,
  hotelStar: ag,
  fullAddress: rg,
  hotelStatus: lg,
  scenicStar: ig,
  scenicFullAddress: dg,
  scenicStatus: pg,
  wayName: gg,
  wayInfo: ug,
  wayNamePlaceholder: mg,
  wayCover: hg,
  salePrice: Sg,
  wayStatus: fg,
  startCity: Pg,
  startCityPlaceholder: yg,
  endCity: Cg,
  endCityPlaceholder: kg,
  feeDesc: Tg,
  createTime: bg,
  createTimePlaceholder: jg,
  addTourismWay: zg,
  updateTourismWay: _g,
  tourismWayDeleteTips: vg,
  linePrice: $g,
  stock: wg,
  wayCity: xg,
  saleArrStartDatePlaceholder: Ng,
  saleArrEndDatePlaceholder: Gg,
  scenicSelectContentTips: Ag,
  waySelectContentTips: Bg,
  hotelSelectContentTips: Ig
}, Qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addTourismWay: zg,
  batchEmptySelectedGoodsTips: Jp,
  cancel: bp,
  confirm: Tp,
  createTime: bg,
  createTimePlaceholder: jg,
  dateRange: og,
  dayMemberPrice: Xp,
  daySetting: Zp,
  default: Yu,
  discount: Dp,
  discountHint: Ep,
  discountUnit: qp,
  editMemberPrice: Hp,
  editMemberPricePopupTitle: Fp,
  endCity: Cg,
  endCityPlaceholder: kg,
  endDate: kp,
  feeDesc: Tg,
  fiveStar: sg,
  fixedDiscount: Lp,
  fixedDiscountHint: Op,
  fixedPriceHint: Qp,
  fourStar: cg,
  fullAddress: rg,
  goodsSelectPopupCreateTime: rp,
  goodsSku: Up,
  hotelInfo: yp,
  hotelNameSelectPopup: fp,
  hotelNameSelectPopupPlaceholder: Pp,
  hotelSelectContentTips: Ig,
  hotelSelectPopupAfterTip: _p,
  hotelSelectPopupAllHotel: Sp,
  hotelSelectPopupGoodsMaxTip: Gp,
  hotelSelectPopupGoodsMinTip: Np,
  hotelSelectPopupSelectGoodsDialog: hp,
  hotelSelectPopupSelectHotelButton: mp,
  hotelStar: ag,
  hotelStatus: lg,
  involved: Bp,
  linePrice: $g,
  memberDiscount: Mp,
  memberEnjoyDiscount: Wp,
  memberLevel: Vp,
  memberPrice: Ap,
  memberPricePlaceholder: Yp,
  noInvolved: Ip,
  nonparticipation: Rp,
  oneStar: eg,
  saleArrEndDatePlaceholder: Gg,
  saleArrStartDatePlaceholder: Ng,
  salePrice: Sg,
  scenicFullAddress: dg,
  scenicInfo: up,
  scenicNameSelectPopup: pp,
  scenicNameSelectPopupPlaceholder: gp,
  scenicSelectContentTips: Ag,
  scenicStar: ig,
  scenicStatus: pg,
  startCity: Pg,
  startCityPlaceholder: yg,
  startDate: Cp,
  stock: wg,
  threeStar: ng,
  ticketsSelectPopupAfterTip: zp,
  ticketsSelectPopupAllTickets: dp,
  ticketsSelectPopupGoodsMaxTip: xp,
  ticketsSelectPopupGoodsMinTip: wp,
  ticketsSelectPopupSelectGoodsDialog: ip,
  ticketsSelectPopupSelectTicketsButton: lp,
  tourismPricePopup: sp,
  tourismStockPopup: ap,
  tourismWayDeleteTips: vg,
  travelSelectPopupAfterTip: jp,
  travelSelectPopupAllTravel: ep,
  travelSelectPopupGoodsMaxTip: $p,
  travelSelectPopupGoodsMinTip: vp,
  travelSelectPopupSelectGoodsDialog: op,
  travelSelectPopupSelectTravelButton: Jd,
  twoStar: tg,
  updateTourismWay: _g,
  wayCity: xg,
  wayCover: hg,
  wayInfo: ug,
  wayInfoPopup: cp,
  wayName: gg,
  wayNamePlaceholder: mg,
  wayNameSelectPopup: tp,
  wayNameSelectPopupPlaceholder: np,
  waySelectContentTips: Bg,
  wayStatus: fg,
  yuanUnit: Kp
}, Symbol.toStringTag, { value: "Module" })), Mg = "项目", Dg = "项目数量", Lg = "项目信息", Rg = "项目名称", Eg = "请输入项目名称", Og = "卡项", Fg = "卡项数量", Ug = "选择商品", Wg = "已选", qg = "个", Kg = "商品选择", Hg = "商品名称", Vg = "请输入商品名称", Yg = "全部商品", Qg = "商品信息", Xg = "价格", Zg = "库存", Jg = "已选择", ou = "个商品", eu = "取消选择", tu = "所选商品数量不能少于", nu = "所选商品数量不能超过", cu = "请选择项目", su = "请选择卡项", au = "卡项名称", ru = "请输入卡项名称", lu = "卡项类型", iu = "卡项信息", du = "销售数量", pu = "销售数量", Xu = {
  serve: Mg,
  serveNum: Dg,
  goodsInfo: Lg,
  goodsName: Rg,
  goodsNamePlaceholder: Eg,
  card: Og,
  cardNum: Fg,
  goodsSelectPopupSelectGoodsButton: Ug,
  goodsSelectPopupSelect: Wg,
  goodsSelectPopupPiece: qg,
  goodsSelectPopupSelectGoodsDialog: Kg,
  goodsSelectPopupGoodsName: Hg,
  goodsSelectPopupGoodsNamePlaceholder: Vg,
  goodsSelectPopupAllGoods: Yg,
  goodsSelectPopupGoodsInfo: Qg,
  goodsSelectPopupPrice: Xg,
  goodsSelectPopupStock: Zg,
  goodsSelectPopupBeforeTip: Jg,
  goodsSelectPopupAfterTip: ou,
  goodsSelectPopupClearGoods: eu,
  goodsSelectPopupGoodsMinTip: tu,
  goodsSelectPopupGoodsMaxTip: nu,
  serviceSelectContentTips: cu,
  cardSelectContentTips: su,
  cardGoodsName: au,
  cardGoodsNamePlaceholder: ru,
  cardType: lu,
  cardGoodsInfo: iu,
  serviceSelectContentSaleNum: du,
  cardSelectContentSaleNum: pu
}, Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Og,
  cardGoodsInfo: iu,
  cardGoodsName: au,
  cardGoodsNamePlaceholder: ru,
  cardNum: Fg,
  cardSelectContentSaleNum: pu,
  cardSelectContentTips: su,
  cardType: lu,
  default: Xu,
  goodsInfo: Lg,
  goodsName: Rg,
  goodsNamePlaceholder: Eg,
  goodsSelectPopupAfterTip: ou,
  goodsSelectPopupAllGoods: Yg,
  goodsSelectPopupBeforeTip: Jg,
  goodsSelectPopupClearGoods: eu,
  goodsSelectPopupGoodsInfo: Qg,
  goodsSelectPopupGoodsMaxTip: nu,
  goodsSelectPopupGoodsMinTip: tu,
  goodsSelectPopupGoodsName: Hg,
  goodsSelectPopupGoodsNamePlaceholder: Vg,
  goodsSelectPopupPiece: qg,
  goodsSelectPopupPrice: Xg,
  goodsSelectPopupSelect: Wg,
  goodsSelectPopupSelectGoodsButton: Ug,
  goodsSelectPopupSelectGoodsDialog: Kg,
  goodsSelectPopupStock: Zg,
  serve: Mg,
  serveNum: Dg,
  serviceSelectContentSaleNum: du,
  serviceSelectContentTips: cu
}, Symbol.toStringTag, { value: "Module" })), Ju = (e, t) => {
  const o = e[t];
  return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((c, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function k() {
  const e = globalThis;
  return e.__addonSharedState__ || (e.__addonSharedState__ = { manifests: {}, installedKeys: [], ready: !1 }), e.__addonSharedState__;
}
let gu = null;
const om = () => globalThis.__addonInitPromise__ ?? null, em = (e) => {
  gu = e, globalThis.__addonInitPromise__ = e;
}, j = "/admin", tm = ["zh-cn", "en"];
function z(e) {
  return !e || e.startsWith("http") || e.startsWith("/admin/") ? e : e.startsWith("/assets/") ? `${j}${e}` : e.startsWith("./") ? `${j}/assets/addons/${e.slice(2)}` : `${j}/${e.replace(/^\//, "")}`;
}
function nm(e, t, o) {
  var r;
  const c = (((r = Pu()[e]) == null ? void 0 : r.langBase) || "./lang/").replace(/^\.\//, "").replace(/\/+$/, ""), a = ["assets", "addons", e, c, t, `${o}.json`].join("/").replace(/\/+/g, "/");
  return `${j}/${a}`;
}
function uu(e, t) {
  if (t === "/")
    return "index";
  let o = t.replace(/^(\/admin\/|\/site\/|\/)/, "").replace(/\.vue$/, "");
  return o.startsWith("views/") && (o = o.slice(6)), e && o === e && (o = "index"), o.replaceAll("/", ".");
}
function cm(e) {
  if (e.meta.addon)
    return String(e.meta.addon);
  for (let t = e.matched.length - 1; t >= 0; t--) {
    const o = e.matched[t].meta.addon;
    if (o)
      return String(o);
  }
  return "";
}
function sm(e) {
  if (e.meta.view)
    return String(e.meta.view);
  for (let t = e.matched.length - 1; t >= 0; t--) {
    const o = e.matched[t].meta.view;
    if (o)
      return String(o);
  }
  return e.path;
}
function N(e) {
  if (!e || typeof e != "object")
    return {};
  const t = e;
  if (t.default && typeof t.default == "object")
    return N(t.default);
  const o = {};
  for (const [c, a] of Object.entries(t))
    c === "default" || c === "__esModule" || typeof a == "string" && (o[c] = a);
  return Object.keys(o).length ? o : t;
}
function am(e, t) {
  const o = {};
  for (const [c, a] of Object.entries(t))
    typeof a == "string" && (o[`${e}.${c}`] = a, e === "common" && (o[c] = a));
  return o;
}
function mu(e, t) {
  const c = e.replace(/^(\/admin\/|\/site\/|\/)/, "").split("/").filter(Boolean)[0];
  return c && (t != null && t.length ? t : fu()).includes(c) ? c : "";
}
async function rm(e) {
  try {
    const t = await fetch(z(`/assets/addons/${e}/manifest.json`), { method: "HEAD" });
    return t.ok ? !(t.headers.get("content-type") || "").toLowerCase().includes("text/html") : !1;
  } catch {
    return !1;
  }
}
const lm = () => {
  const e = globalThis;
  return e.__addonModuleCaches__ || (e.__addonModuleCaches__ = {}), e.__addonModuleCaches__;
};
function hu() {
  const e = globalThis.__addonBuildVersion__;
  return e ? String(e) : "0";
}
async function Su(e) {
  const t = lm();
  return e in t || (t[e] = (async () => {
    var o;
    try {
      await G();
      const a = (((o = Pu()[e]) == null ? void 0 : o.entry) || "./index.js").split("/").pop() || "index.js";
      return await import(z(`/assets/addons/${e}/${a}?v=${hu()}`));
    } catch {
      return null;
    }
  })()), t[e];
}
async function G(e) {
  const t = om();
  if (t && (await t, k().ready))
    return;
  const o = k();
  return em((async () => {
    o.manifests = {}, o.installedKeys = [];
    let c = e;
    if (!(c != null && c.length))
      try {
        const r = z(`/assets/addons/index.json?_t=${Date.now()}`), p = await fetch(r);
        if (p.ok) {
          const i = await p.json();
          c = Array.isArray(i.keys) ? i.keys : [], i.buildTime && (globalThis.__addonBuildVersion__ = i.buildTime);
          const u = i.manifests;
          if (u)
            for (const [P, b] of Object.entries(u))
              o.manifests[P] = b;
        }
      } catch {
        c = [];
      }
    const a = [];
    for (const r of c || []) {
      if (o.manifests[r]) {
        a.push(r);
        continue;
      }
      if (await rm(r)) {
        a.push(r);
        try {
          const p = z(`/assets/addons/${r}/manifest.json?v=${hu()}`), i = await fetch(p);
          i.ok && (o.manifests[r] = await i.json());
        } catch {
        }
      }
    }
    o.installedKeys = a, o.ready = !0;
  })()), gu;
}
function fu() {
  const e = k();
  return e.installedKeys.length ? e.installedKeys : Object.keys(e.manifests);
}
function Pu() {
  return k().manifests;
}
const im = /* @__PURE__ */ Object.assign({ "/src/addon/cms/lang/zh-cn/article.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/cms/lang/zh-cn/article.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/cms/lang/zh-cn/article.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/cms/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/purchase.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/purchase.in.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/purchase.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/sales.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/sales.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/sales.out.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/stock.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/stock.in.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/stock.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/erp/lang/zh-cn/stock.out.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/friend_help/lang/zh-cn/active.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/friend_help/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/friend_help/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/friend_help/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/en/goods.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/card.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/card.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/feedback.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.invoice.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.store_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.store_finance.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.technician_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.technician_finance.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/finance.withdrawal_review.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.city.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.guarantee.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/goods.special.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/help.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/help.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/help.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/marketing.coupon.add.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/marketing.coupon.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/marketing.coupon.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/marketing.coupon.send.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.easy_select.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.easy_select_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.evaluate.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.evaluate_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.intent_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.lesson_order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.protection_settings.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.reserve.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.return_visit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/order.tags.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/refund.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/refund.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/site_index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.add.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.examine.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.examine_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/store.technician.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.cityfare.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.cityfare_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.examine.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.examine_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.level.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.level_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/home_service/lang/zh-cn/technician.position.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/huaweicloud_obs/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/huaweicloud_sms/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/config.reserve.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/goods.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/goods.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/goods.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/order.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/order.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/order.order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/order.reserve.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/refund.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/refund.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/site_index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/technician.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/technician.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/technician.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/o2o/lang/zh-cn/technician.position.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/pintuan/lang/zh-cn/active.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/pintuan/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/pintuan/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/pintuan/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/package.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/package.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/package.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/recharge/lang/zh-cn/package.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/active.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/goods.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/hello_world.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/relay/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/active.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/config.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/goods.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/goods.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/seckill/lang/zh-cn/time.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/address.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/address.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.company.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.company_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.electronic_sheet.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.electronic_sheet_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.electronic_sheet_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.local.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.local_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.local_delivery_service.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.local_record.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.merchant_record.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.search.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.staff.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.store.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.store_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.template.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery.template_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery_store.delivery_set.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/delivery_store.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.attr.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.attr_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.brand_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.category_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.evaluate.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.evaluate_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.label_group_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.label_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.real_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.recycle.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.search_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.service.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/goods.virtual_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/index.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.coupon.add.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.coupon.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.coupon.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.coupon.send.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.discount.add.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.discount.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.discount.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.discount.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.discount.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.exchange.goods_add.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.exchange.goods_edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.exchange.goods_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.exchange.order_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.goods_rank.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.goods_rank.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.goods_rank.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.manjian.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.manjian.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.manjian.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.newcomer.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/marketing.newcomer.order_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.batch_delivery.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.invoice.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/order.refund_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop/lang/zh-cn/stat.goods.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/agent.level_config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/agent.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/agent.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/config.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/config.poster.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/fenxiao.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/fenxiao.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/fenxiao.lists.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/fenxiao_level.fenxiao_level.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/goods.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/goods.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/goods.lists.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/index.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/level.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/level.lists.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/member.lists.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/order.lists.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/sale.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/sale.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/sale.member_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.reward_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/task.reward_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/team.level.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_fenxiao/lang/zh-cn/team.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.card_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.makecard.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.material.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/giftcard.material_group.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_giftcard/lang/zh-cn/order.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_impulse_buy/lang/zh-cn/impulse_buy.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_impulse_buy/lang/zh-cn/impulse_buy.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_impulse_buy/lang/zh-cn/impulse_buy.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_replace_buy/lang/zh-cn/index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/shop_replace_buy/lang/zh-cn/order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/category.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/comment.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/config.config.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/content.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/content.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/reward_rule.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/sensitive.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/topic.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/sow_community/lang/zh-cn/treasure.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.edit_hotel.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.edit_room.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/hotel.room.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.edit_scenic.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.edit_ticket.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/scenic.ticket.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/setting.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/site_index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/verify.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/way.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/way.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/way.order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/tourism/lang/zh-cn/way.order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/cad.record_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/card.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/card.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/card.record_info.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/card.record_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/common.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/order.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/order_detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/record.record.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/refund.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/reserve.index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/reserve.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/reserve.set.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/service.category.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/service.edit.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/service.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/service.record_info.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/service.record_list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/site_index.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/technician.detail.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/technician.list.json": () => import("./_addon-external_empty_json-931c3451.js"), "/src/addon/vipcard/lang/zh-cn/verify.json": () => import("./_addon-external_empty_json-931c3451.js") });
async function dm(e, t, o) {
  const c = `@/addon/${e}/lang/${t}/${o}.json`, a = im[c];
  if (!a)
    return {};
  try {
    return (await a()).default || {};
  } catch {
    return {};
  }
}
async function pm(e) {
  k().ready || await G();
  for (const t of fu())
    try {
      const o = await Su(t), c = o == null ? void 0 : o.langs;
      if (c)
        for (const [a, r] of Object.entries(c)) {
          const p = {};
          for (const [i, u] of Object.entries(r || {}))
            Object.assign(p, am(i, N(u)));
          Object.keys(p).length && e(a, p);
        }
      else
        for (const a of tm) {
          const r = await w(t, a, "common");
          Object.keys(r).length && e(a, r);
        }
    } catch {
    }
}
async function w(e, t, o) {
  var r;
  k().ready || await G();
  try {
    const p = await Su(e);
    if (p) {
      const i = p.langs, u = (r = i == null ? void 0 : i[t]) == null ? void 0 : r[o], P = N(u);
      if (Object.keys(P).length)
        return P;
    }
  } catch {
  }
  const c = await dm(e, t, o);
  if (Object.keys(c).length)
    return c;
  const a = nm(e, t, o);
  try {
    const p = await fetch(a);
    if (p.ok)
      return await p.json();
  } catch {
  }
  return {};
}
class gm {
  //已加载的语言
  constructor(t) {
    v(this, "i18n");
    v(this, "loadLocale", []);
    this.i18n = t;
  }
  /**
   *
   * @param locale 设置语言
   */
  setI18nLanguage(t) {
    this.i18n.mode === "legacy" ? this.i18n.global.locale = t : this.i18n.global.locale = t;
    let o = document.querySelector("html");
    o && o.setAttribute("lang", t);
  }
  /**
   * 加载语言包
   * @param app
   * @param path
   * @param locale
   * @returns
   */
  async loadLocaleMessages(t, o, c) {
    try {
      t || (t = mu(o));
      const a = uu(t, o);
      let r = {};
      t ? r = await w(t, c, a) : r = (await Ju(/* @__PURE__ */ Object.assign({ "../app/lang/en/403.json": () => import("./403-4bc122af.js"), "../app/lang/en/auth.menu.json": () => import("./auth.menu-e194a02d.js"), "../app/lang/en/index.json": () => import("./index-c33bb386.js"), "../app/lang/en/login.json": () => import("./login-91cac89a.js"), "../app/lang/en/member.member.json": () => import("./member.member-64cd29d1.js"), "../app/lang/en/operate.panel.json": () => import("./operate.panel-82818305.js"), "../app/lang/en/tools.integrity.json": () => import("./tools.integrity-515e9b87.js"), "../app/lang/en/user.center.json": () => import("./user.center-78470141.js"), "../app/lang/zh-cn/403.json": () => import("./403-afb5f475.js"), "../app/lang/zh-cn/app.authorize.json": () => import("./app.authorize-30af8844.js"), "../app/lang/zh-cn/app.index.json": () => import("./app.index-ffd57c14.js"), "../app/lang/zh-cn/app.store.json": () => import("./app.store-82fccf8d.js"), "../app/lang/zh-cn/app.upgrade.json": () => import("./app.upgrade-a5fc793d.js"), "../app/lang/zh-cn/auth.log.json": () => import("./auth.log-7ab49365.js"), "../app/lang/zh-cn/auth.menu.json": () => import("./auth.menu-0e3dc376.js"), "../app/lang/zh-cn/auth.role.json": () => import("./auth.role-c93ddff5.js"), "../app/lang/zh-cn/auth.site_menu.json": () => import("./auth.site_menu-d105e1fc.js"), "../app/lang/zh-cn/auth.user.json": () => import("./auth.user-4b72de7c.js"), "../app/lang/zh-cn/channel.aliapp.access.json": () => import("./channel.aliapp.access-345ff291.js"), "../app/lang/zh-cn/channel.aliapp.config.json": () => import("./channel.aliapp.config-8ba784b4.js"), "../app/lang/zh-cn/channel.aliapp.course.json": () => import("./channel.aliapp.course-11a03e9a.js"), "../app/lang/zh-cn/channel.app.access.json": () => import("./channel.app.access-4967216b.js"), "../app/lang/zh-cn/channel.app.config.json": () => import("./channel.app.config-f92838ee.js"), "../app/lang/zh-cn/channel.app.version.json": () => import("./channel.app.version-801d7c33.js"), "../app/lang/zh-cn/channel.h5.config.json": () => import("./channel.h5.config-bb100e55.js"), "../app/lang/zh-cn/channel.pc.config.json": () => import("./channel.pc.config-bbe7313f.js"), "../app/lang/zh-cn/channel.weapp.access.json": () => import("./channel.weapp.access-f5b56b8d.js"), "../app/lang/zh-cn/channel.weapp.code.json": () => import("./channel.weapp.code-9301d78d.js"), "../app/lang/zh-cn/channel.weapp.config.json": () => import("./channel.weapp.config-62316f27.js"), "../app/lang/zh-cn/channel.weapp.course.json": () => import("./channel.weapp.course-46cdef05.js"), "../app/lang/zh-cn/channel.weapp.template.json": () => import("./channel.weapp.template-60f607e4.js"), "../app/lang/zh-cn/channel.wechat.access.json": () => import("./channel.wechat.access-3198d859.js"), "../app/lang/zh-cn/channel.wechat.config.json": () => import("./channel.wechat.config-149fe86d.js"), "../app/lang/zh-cn/channel.wechat.course.json": () => import("./channel.wechat.course-717abfc8.js"), "../app/lang/zh-cn/channel.wechat.keyword_reply_edit.json": () => import("./channel.wechat.keyword_reply_edit-736dea19.js"), "../app/lang/zh-cn/channel.wechat.menu.json": () => import("./channel.wechat.menu-08c01b06.js"), "../app/lang/zh-cn/channel.wechat.reply.json": () => import("./channel.wechat.reply-371557b9.js"), "../app/lang/zh-cn/channel.wechat.template.json": () => import("./channel.wechat.template-c7e0e856.js"), "../app/lang/zh-cn/decorate.preview.json": () => import("./decorate.preview-5f2765ef.js"), "../app/lang/zh-cn/dict.list.json": () => import("./dict.list-fdd911c6.js"), "../app/lang/zh-cn/diy.edit.json": () => import("./diy.edit-7391035d.js"), "../app/lang/zh-cn/diy.index.json": () => import("./diy.index-7d6c7cb2.js"), "../app/lang/zh-cn/diy.list.json": () => import("./diy.list-fb8d7f12.js"), "../app/lang/zh-cn/diy.member.json": () => import("./diy.member-7204bf61.js"), "../app/lang/zh-cn/diy.preview.json": () => import("./diy.preview-f8b42901.js"), "../app/lang/zh-cn/diy.route.json": () => import("./diy.route-51d664e7.js"), "../app/lang/zh-cn/diy.tabbar.json": () => import("./diy.tabbar-5a78137b.js"), "../app/lang/zh-cn/diy.tabbar_edit.json": () => import("./diy.tabbar_edit-1b67bdec.js"), "../app/lang/zh-cn/diy_form.edit.json": () => import("./diy_form.edit-64b538a2.js"), "../app/lang/zh-cn/diy_form.list.json": () => import("./diy_form.list-8cc96e72.js"), "../app/lang/zh-cn/finance.account.json": () => import("./finance.account-3ebadbbb.js"), "../app/lang/zh-cn/finance.cash_out.json": () => import("./finance.cash_out-a5fc92d4.js"), "../app/lang/zh-cn/finance.offlinepay.json": () => import("./finance.offlinepay-5e4097af.js"), "../app/lang/zh-cn/finance.pay_detail.json": () => import("./finance.pay_detail-03e8534d.js"), "../app/lang/zh-cn/finance.pay_refund.json": () => import("./finance.pay_refund-33befe92.js"), "../app/lang/zh-cn/finance.refund_detail.json": () => import("./finance.refund_detail-4952f106.js"), "../app/lang/zh-cn/index.app_manage.json": () => import("./index.app_manage-8bfaebc1.js"), "../app/lang/zh-cn/index.index.json": () => import("./index.index-1daecdce.js"), "../app/lang/zh-cn/index.preview.json": () => import("./index.preview-969e67dd.js"), "../app/lang/zh-cn/index.store.json": () => import("./index.store-e2f6d3f6.js"), "../app/lang/zh-cn/login.json": () => import("./login-18483ef9.js"), "../app/lang/zh-cn/marketing.sign_config.json": () => import("./marketing.sign_config-62bde278.js"), "../app/lang/zh-cn/marketing.sign_list.json": () => import("./marketing.sign_list-2d527eb9.js"), "../app/lang/zh-cn/marketing.verifier.json": () => import("./marketing.verifier-fb68001b.js"), "../app/lang/zh-cn/marketing.verify.json": () => import("./marketing.verify-a01b4161.js"), "../app/lang/zh-cn/member.balance.json": () => import("./member.balance-7b831fb2.js"), "../app/lang/zh-cn/member.commission.json": () => import("./member.commission-6f09b642.js"), "../app/lang/zh-cn/member.growth.json": () => import("./member.growth-b8b132a4.js"), "../app/lang/zh-cn/member.label.edit.json": () => import("./member.label.edit-32f3c791.js"), "../app/lang/zh-cn/member.label.json": () => import("./member.label-d042fc75.js"), "../app/lang/zh-cn/member.level.json": () => import("./member.level-9883e926.js"), "../app/lang/zh-cn/member.level_edit.json": () => import("./member.level_edit-63ebdbf3.js"), "../app/lang/zh-cn/member.member.json": () => import("./member.member-2cc54a64.js"), "../app/lang/zh-cn/member.member_detail.json": () => import("./member.member_detail-49ebc798.js"), "../app/lang/zh-cn/member.point.json": () => import("./member.point-b9f9143f.js"), "../app/lang/zh-cn/operate.panel.json": () => import("./operate.panel-6571704b.js"), "../app/lang/zh-cn/poster.edit.json": () => import("./poster.edit-c0d45927.js"), "../app/lang/zh-cn/poster.list.json": () => import("./poster.list-6a917fd4.js"), "../app/lang/zh-cn/printer.edit.json": () => import("./printer.edit-03e2be08.js"), "../app/lang/zh-cn/printer.list.json": () => import("./printer.list-1cf7202e.js"), "../app/lang/zh-cn/printer.template_edit.json": () => import("./printer.template_edit-3092b283.js"), "../app/lang/zh-cn/printer.template_list.json": () => import("./printer.template_list-679ce0fb.js"), "../app/lang/zh-cn/setting.adminlogin.json": () => import("./setting.adminlogin-763acc1d.js"), "../app/lang/zh-cn/setting.agreement.json": () => import("./setting.agreement-ef53ab4e.js"), "../app/lang/zh-cn/setting.agreement_edit.json": () => import("./setting.agreement_edit-42ca6920.js"), "../app/lang/zh-cn/setting.cash_out.json": () => import("./setting.cash_out-b3a40561.js"), "../app/lang/zh-cn/setting.channel.json": () => import("./setting.channel-a8b6d9e6.js"), "../app/lang/zh-cn/setting.copyright.json": () => import("./setting.copyright-703776c8.js"), "../app/lang/zh-cn/setting.developer_token.json": () => import("./setting.developer_token-df8cac95.js"), "../app/lang/zh-cn/setting.export.json": () => import("./setting.export-6bcb66d7.js"), "../app/lang/zh-cn/setting.growth_rule.json": () => import("./setting.growth_rule-4682f358.js"), "../app/lang/zh-cn/setting.layout.json": () => import("./setting.layout-2d2ef354.js"), "../app/lang/zh-cn/setting.login.json": () => import("./setting.login-0e20a204.js"), "../app/lang/zh-cn/setting.map.json": () => import("./setting.map-a018c17d.js"), "../app/lang/zh-cn/setting.member.json": () => import("./setting.member-3c18afe5.js"), "../app/lang/zh-cn/setting.notice.json": () => import("./setting.notice-3292129f.js"), "../app/lang/zh-cn/setting.notice_records.json": () => import("./setting.notice_records-8b5d12a2.js"), "../app/lang/zh-cn/setting.oplatform.json": () => import("./setting.oplatform-3c661a69.js"), "../app/lang/zh-cn/setting.pay.json": () => import("./setting.pay-9d3502d5.js"), "../app/lang/zh-cn/setting.sms.json": () => import("./setting.sms-38c6ea20.js"), "../app/lang/zh-cn/setting.sms_records.json": () => import("./setting.sms_records-f32dcf96.js"), "../app/lang/zh-cn/setting.storage.json": () => import("./setting.storage-040b5d19.js"), "../app/lang/zh-cn/setting.system.json": () => import("./setting.system-533a107a.js"), "../app/lang/zh-cn/setting.transfer.json": () => import("./setting.transfer-dd7288e1.js"), "../app/lang/zh-cn/setting.transfer_scene.json": () => import("./setting.transfer_scene-a1236971.js"), "../app/lang/zh-cn/setting.weapp.json": () => import("./setting.weapp-38d65415.js"), "../app/lang/zh-cn/site.group.json": () => import("./site.group-79d11eb3.js"), "../app/lang/zh-cn/site.group_edit.json": () => import("./site.group_edit-ad4054d9.js"), "../app/lang/zh-cn/site.info.json": () => import("./site.info-f86d34ea.js"), "../app/lang/zh-cn/site.list.json": () => import("./site.list-f879a4a9.js"), "../app/lang/zh-cn/site.manage.json": () => import("./site.manage-fe492c38.js"), "../app/lang/zh-cn/site.user.json": () => import("./site.user-298548ec.js"), "../app/lang/zh-cn/site.user_info.json": () => import("./site.user_info-8949966a.js"), "../app/lang/zh-cn/tools.addon.edit.json": () => import("./tools.addon.edit-67fed17b.js"), "../app/lang/zh-cn/tools.addon.index.json": () => import("./tools.addon.index-64a332f0.js"), "../app/lang/zh-cn/tools.addon.list.json": () => import("./tools.addon.list-066ffe3b.js"), "../app/lang/zh-cn/tools.backup_records.json": () => import("./tools.backup_records-fd1ba040.js"), "../app/lang/zh-cn/tools.code.edit.json": () => import("./tools.code.edit-ce482f8a.js"), "../app/lang/zh-cn/tools.code.index.json": () => import("./tools.code.index-2f01b5e9.js"), "../app/lang/zh-cn/tools.code.list.json": () => import("./tools.code.list-b3d1ec18.js"), "../app/lang/zh-cn/tools.detection.json": () => import("./tools.detection-97a8d1e5.js"), "../app/lang/zh-cn/tools.framework_patch.json": () => import("./tools.framework_patch-3193d59e.js"), "../app/lang/zh-cn/tools.integrity.json": () => import("./tools.integrity-235a7a64.js"), "../app/lang/zh-cn/tools.schedule.json": () => import("./tools.schedule-0140465f.js"), "../app/lang/zh-cn/tools.schedule_log.json": () => import("./tools.schedule_log-c332642a.js"), "../app/lang/zh-cn/tools.updatecache.json": () => import("./tools.updatecache-c28011ba.js"), "../app/lang/zh-cn/tools.upgrade_records.json": () => import("./tools.upgrade_records-943e7638.js"), "../app/lang/zh-cn/user.center.json": () => import("./user.center-f848e53b.js"), "../app/lang/zh-cn/user.edit_center.json": () => import("./user.edit_center-86828913.js"), "../app/lang/zh-cn/wxoplatform.setting.json": () => import("./wxoplatform.setting-e351af9d.js"), "../app/lang/zh-cn/wxoplatform.weapp_version.json": () => import("./wxoplatform.weapp_version-fb73c574.js") }), `../app/lang/${c}/${a}.json`)).default || {};
      let p = {};
      if (Object.keys(r).forEach((i) => {
        p[`${a}.${i}`] = r[i];
      }), t)
        try {
          const i = await w(t, c, "common");
          Object.keys(i).forEach((u) => {
            p[u] = i[u];
          });
        } catch {
        }
      return this.i18n.global.mergeLocaleMessage(c, p), this.setI18nLanguage(c), $();
    } catch {
      return this.setI18nLanguage(c), $();
    }
  }
  /** 生产环境启动时预加载各插件全部语言包 */
  async preloadAddonLangs() {
    await pm((t, o) => {
      this.i18n.global.mergeLocaleMessage(t, o);
    });
  }
}
const um = "文件差异", mm = "校验", hm = "恢复前请先手动备份站点数据，避免数据丢失", Sm = "全选当前结果", fm = "搜索文件路径", Pm = "全部", ym = "正在检测", Cm = "未发现差异文件", km = "已选", Tm = "个文件", bm = "确认操作", jm = "已扫描文件", zm = "检测失败，请稍后重试", _m = "新增", vm = "修改", $m = "删除", wm = "对比", xm = "文件内容对比", Nm = "正在读取文件内容…", Gm = "正在展开后续内容…", Am = "读取文件内容失败", Bm = "该目标已跳过", Im = "检测进度", Mm = "正在比对文件…", Dm = "执行记录", Lm = "暂无记录", Rm = "共 %count% 条", Em = "开始检测", Om = "正在读取官方清单…", Fm = "已读取官方清单（%count% 个文件），开始比对", Um = "正在对比本地插件文件 (%done% / %total%)", Wm = "比对完成，发现 %count% 个差异文件", qm = "比对完成，未发现差异文件", Km = "实时通道不可用，已切换为轮询", Hm = "检测已取消", Vm = "取消检测", Ym = "开始校验", Qm = "重新校验", Xm = "检测已取消", Zm = "本地代码与官方代码一致", Jm = "共核对 %count% 个文件，未发现任何差异", oh = "恢复", eh = "本地", th = "官方", nh = "官方内容不可用", ch = "「新增」是本地多出来的文件，官方包里没有对应内容，无法写回", sh = "文件较大：比对与渲染会明显变慢，且超长的变更行只会整行标出、不再逐词标注行内差异", ah = "文件过大，已切换为按行比对，且仅截取前面一部分内容展示，可能无法完整反映差异", rh = "确认写回", lh = "确认写回", ih = "将用官方内容覆盖选中的 %count% 个文件（共 %size%），覆盖前会自动备份原文件。", dh = "请确认后果", ph = "选中文件的内容会被官方包直接覆盖：本地对这些文件做过的二次开发改动会永久丢失，官方包里不包含这些改动。", gh = "「删除」项是「官方有、本地缺」的文件，写回等于把它们恢复出来，站点上会重新出现这些文件。", uh = "覆盖前会把原文件备份到服务器的 runtime/integrity/backup 目录下（按时间戳与目标名分层），本次实际备份路径会在写回结果里给出。备份不会自动清理；之后可在文件差异弹框的「备份管理」里查看历史备份并一键恢复。", mh = "写回立即生效，站点会开始使用官方版内容；若站点正在运行，建议在访问低峰期操作。", hh = "写回结果", Sh = "写回完成：成功 %ok% 个，跳过 %skip% 个，失败 %fail% 个", fh = "以下文件写回失败", Ph = "以下文件已跳过", yh = "备份目录", Ch = "确定", kh = "差异列表不会自动刷新；要查看最新状态，请关闭本弹框后点击「重新校验」。", Th = "备份管理", bh = "备份根目录", jh = "暂无备份。在文件差异弹框里执行「恢复」时，会自动在服务器上留下备份", zh = "备份时间", _h = "检测目标", vh = "文件数", $h = "总大小", wh = "操作", xh = "删除选中", Nh = "删除备份", Gh = "将删除该批次全部 %count% 个备份文件，备份一旦删除无法找回（本地文件不受影响）。确定删除吗？", Ah = "将删除选中的 %count% 个备份文件，删除后无法用它们恢复（本地文件不受影响）。确定删除吗？", Bh = "确定删除", Ih = "已删除 %count% 个备份文件", Mh = "备份批次已删除", Dh = "恢复选中", Lh = "全选", Rh = "请先勾选要恢复的文件", Eh = "单次最多恢复 %max% 个文件，本批 %count% 个，请分批处理", Oh = "不可恢复", Fh = "该目标当前无法解析（可能已卸载或版本信息缺失），无法确定恢复位置", Uh = "从备份恢复", Wh = "恢复会用备份内容覆盖本地文件，本地对这些文件的改动会丢失；覆盖前会把本地当前内容再备份一份（恢复错了还能退回来）。确定要恢复吗？", qh = "确定恢复", Kh = "恢复结果", Hh = "恢复完成：成功 %ok% 个，跳过 %skip% 个，失败 %fail% 个", Vh = "本次覆盖前的备份目录", Yh = "关闭", Qh = "编辑", Xh = "详情", Zh = "创建时间", Jh = "排序", oS = "状态", eS = "操作", tS = "更多", nS = "正常", cS = "停用", sS = "启用", aS = "确认", rS = "保存", lS = "返回", iS = "取消", dS = "搜索", pS = "重置", gS = "刷新", uS = "刷新成功", mS = "选择", hS = "确定要导出数据吗？", SS = "批量导出数据", fS = "确定并导出", PS = "提示", yS = "是否显示", CS = "显示", kS = "隐藏", TS = "新窗口打开", bS = "是", jS = "否", zS = "启用后：点击该菜单会在新标签页打开，并隐藏左侧菜单栏、顶部栏和标签栏，仅显示页面内容", _S = "图标", vS = "用户名", $S = "头像", wS = "账号", xS = "新增管理员", NS = "新增", GS = "账号", AS = "请输入管理员账号", BS = "密码", IS = "请输入管理员密码", MS = "确认密码", DS = "请再次确认密码", LS = "两次输入的密码不一致", RS = "账号设置", ES = "名称", OS = "请输入用户名称", FS = "密码", US = "确认密码", WS = "图片", qS = "视频", KS = "重命名", HS = "查看", VS = "全选", YS = "是", QS = "否", XS = "复制", ZS = "完成", JS = "复制成功", of = "浏览器不支持一键复制，请手动进行复制", ef = "全部", tf = "请选择省", nf = "请选择市", cf = "请选择区/县", sf = "暂无数据", af = "暂无二维码", rf = "无法显示", lf = {
  root: "上传",
  selectimage: "选择图片",
  selectvideo: "选择视频",
  selecticon: "选择图标",
  selectnews: "选择图文",
  uploadimage: "上传图片",
  uploadvideo: "上传视频",
  addAttachmentCategory: "添加分组",
  attachmentCategoryPlaceholder: "请输入分组名称",
  attachmentEmpty: "暂无附件，请点击上传按钮上传",
  iconEmpty: "暂无图标",
  deleteCategoryTips: "确定要删除该分组吗？",
  deleteAttachmentTips: "确定要删除所选附件吗？如所选附件已被使用删除将会受到影响，请谨慎操作！",
  move: "移动",
  moveCategory: "移动分组",
  moveTo: "移动至",
  placeholderimageName: "请输入图片名称",
  placeholdervideoName: "请输入视频名称",
  placeholdericonName: "请输入图标名称",
  success: "上传成功",
  fail: "上传失败",
  triggerUpperLimit: "可选数量已达上限",
  mediaEmpty: "暂无素材，请点击上传按钮上传"
}, df = {
  closeLeft: "关闭左侧",
  closeRight: "关闭右侧",
  closeCurrent: "关闭当前页",
  closeOther: "关闭其他页",
  closeAll: "关闭全部页",
  more: "更多操作"
}, pf = {
  layoutSetting: "主题设置",
  darkMode: "黑暗模式",
  sidebarMode: "主题风格",
  themeColor: "主题颜色",
  detectionLoginOperation: "确定",
  detectionLoginContent: "已检测到有其他账号登录，需要刷新后才能继续操作。",
  detectionLoginTip: "提示",
  layoutStyle: "布局风格",
  tab: "开启标签栏"
}, gf = {
  400: "错误的请求",
  401: "请重新登录",
  403: "拒绝访问",
  404: "请求错误",
  405: "请求方法未允许",
  408: "请求超时",
  409: "请求跨域",
  500: "服务器内部错误",
  501: "网络未实现",
  502: "网络错误",
  503: "服务不可用",
  504: "网络超时",
  505: "http版本不支持该请求",
  unknownError: "未知错误",
  timeout: "网络请求超时！",
  requestError: "请求错误",
  errNetwork: "网络请求错误",
  baseUrlError: " 接口请求错误,请检查VITE_APP_BASE_URL参数配置或者伪静态配置, <a style='text-decoration: underline;' href='https://www.kancloud.cn/niucloud/niucloud-admin-develop/3213750' target='blank'>点击查看相关手册</a>"
}, uf = "请选择跳转链接", mf = "链接选择", hf = "链接名称", Sf = "请输入链接名称", ff = "链接名称不能为空", Pf = "跳转路径", yf = "请输入跳转路径", Cf = "跳转路径不能为空", kf = "小程序AppID", Tf = "请输入要打开的小程序的appid", bf = "小程序AppID不能为空", jf = "小程序路径", zf = "请输入要打开的小程序路径", _f = "小程序路径不能为空", vf = "电话号码", $f = "请输入电话号码", wf = "电话号码不能为空", xf = "返回", Nf = "预览", Gf = "暂未安装任何应用", Af = "最新消息", Bf = "访问店铺", If = "地图设置", Mf = "腾讯地图KEY", Df = "首页模版", Lf = "切换首页", Rf = "你确定要切换首页吗？", Ef = "原始密码", Of = "新密码", Ff = "确认密码", Uf = "修改密码时必填.不修改密码时留空", Wf = "请输入原始密码", qf = "请输入新密码", Kf = "原始密码不能为空", Hf = "请输入确认密码", Vf = "两次新密码不同", Yf = "两次新密码不同", Qf = {
  upgradeButton: "立即升级",
  title: "升级",
  upgradingTips: "有正在执行的升级任务，",
  clickView: "点击查看",
  dirPermission: "目录读写权限",
  path: "路径",
  demand: "要求",
  readable: "可读",
  write: "可写",
  upgradeSuccess: "升级成功",
  localBuild: "本地编译",
  cloudBuild: "重试",
  rollback: "回滚",
  showDialogCloseTips: "升级任务尚未完成，关闭将取消升级，是否要继续关闭？",
  upgradeCompleteTips: "升级完成后还必须要重新编译admin wap web端，以免影响到程序正常运行。",
  upgradeTips: "应用和插件升级时，系统会自动备份当前程序及数据库。升级功能不会造成您当前程序的损坏或者数据的丢失，请放心使用，但是升级过程可能会因为兼容性等各种原因出现意外的升级错误，当出现错误时，系统将会自动回退上一版本！若回退失败，请参考链接<a href='https://www.kancloud.cn/niushop/niushop_v6/3228611' target='_blank' class='text-primary'> https://www.kancloud.cn/niushop/niushop_v6/3228611 </a>手动回退上一版本!",
  knownToKnow: "我已知晓，不需要再次提示",
  cloudBuildErrorTips: "一键云编译队列任务过多，请等待几分钟后重试！",
  isNeedBackup: "是否需要备份",
  isNeedBackupTips: "检测到已存在备份，此次升级是否需要备份，不需要备份在升级出现异常时将会恢复最近的一次备份。",
  isNeedBackupBtn: "查看备份记录",
  option: "选项",
  isNeedCloudbuild: "是否需要云编译",
  cloudbuildTips: "此次升级的同时是否需要进行云编译"
}, Xf = {
  title: "云编译",
  executingTips: "有正在执行的编译任务，",
  clickView: "点击查看",
  dirPermission: "目录读写权限",
  path: "路径",
  demand: "要求",
  readable: "可读",
  write: "可写",
  cloudbuildSuccess: "编译完成",
  showDialogCloseTips: "编译任务尚未完成，关闭将取消编译，是否要继续关闭？"
}, Zf = "表单名称", Jf = "请输入表单名称", oP = "表单类型", eP = "请选择表单类型", tP = "全部", nP = "请选择表单", cP = "应用名/版本信息", sP = "应用标识", aP = "简介", rP = "类型", lP = "插件管理", iP = "升级", dP = "已安装", pP = "未安装", gP = "已购买", uP = "云编译", mP = "最新版本", hP = "标识指开发应用或插件的文件夹名称", SP = "更新信息", fP = "下一步", PP = "上一步", yP = "查看升级内容", CP = "检测目录权限", kP = "备份文件", TP = "开始升级", bP = "升级完成", jP = "是否要进行云编译该操作可能会影响到正在访问的客户是否要继续操作？", zP = "推广链接", _P = "下载二维码", vP = "配置失败", $P = "左侧标题", wP = "右侧标题", xP = "左侧简介", NP = "右侧简介", GP = "请输入简介内容", yu = {
  diffDialogTitle: um,
  diffVerify: mm,
  backupTip: hm,
  diffSelectAll: Sm,
  searchFilePlaceholder: fm,
  tabAll: Pm,
  detectingPrefix: ym,
  noDiff: Cm,
  selectedSummary: km,
  filesUnit: Tm,
  confirmAction: bm,
  scanned: jm,
  checkFailed: zm,
  typeNew: _m,
  typeModified: vm,
  typeDeleted: $m,
  compareAction: wm,
  compareTitle: xm,
  compareLoading: Nm,
  compareExpanding: Gm,
  compareFailed: Am,
  targetSkipped: Bm,
  progressTitle: Im,
  checking: Mm,
  logTitle: Dm,
  logEmpty: Lm,
  logTotal: Rm,
  logStart: Em,
  logBaseline: Om,
  logReady: Fm,
  logScanning: Um,
  logFinishDiff: Wm,
  logFinishSame: qm,
  logFallback: Km,
  logCancelled: Hm,
  cancelCheck: Vm,
  startCheck: Ym,
  recheckAction: Qm,
  checkCancelled: Xm,
  identical: Zm,
  identicalTip: Jm,
  restoreAction: oh,
  localLabel: eh,
  officialLabel: th,
  officialMissing: nh,
  addNotRestorable: ch,
  compareLargeTip: sh,
  compareLargeTruncatedTip: ah,
  confirmRestore: rh,
  restoreConfirmTitle: lh,
  restoreConfirmTip: ih,
  restoreConsequenceTitle: dh,
  restoreConsequenceOverwrite: ph,
  restoreConsequenceDeleted: gh,
  restoreConsequenceBackup: uh,
  restoreConsequenceLive: mh,
  restoreDoneTitle: hh,
  restoreSummary: Sh,
  restoreFailedList: fh,
  restoreSkippedList: Ph,
  backupDirLabel: yh,
  restoreDoneOk: Ch,
  restoreRefreshTip: kh,
  backupManageTitle: Th,
  backupRootLabel: bh,
  backupEmpty: jh,
  backupColTime: zh,
  backupColTarget: _h,
  backupColCount: vh,
  backupColSize: $h,
  backupColAction: wh,
  backupDeleteSelected: xh,
  backupDeleteConfirmTitle: Nh,
  backupDeleteConfirmAll: Gh,
  backupDeleteConfirmSelected: Ah,
  backupDeleteOk: Bh,
  backupDeleted: Ih,
  backupDeletedBatch: Mh,
  backupRestoreSelected: Dh,
  backupSelectAll: Lh,
  backupSelectTip: Rh,
  backupMaxFilesTip: Eh,
  backupNotRestorable: Oh,
  backupNotRestorableTip: Fh,
  backupConfirmTitle: Uh,
  backupConfirmText: Wh,
  backupConfirmOk: qh,
  backupResultTitle: Kh,
  backupSummary: Hh,
  backupRollbackDirLabel: Vh,
  close: Yh,
  edit: Qh,
  delete: "删除",
  info: Xh,
  createTime: Zh,
  sort: Jh,
  status: oS,
  operation: eS,
  more: tS,
  statusNormal: nS,
  statusDeactivate: cS,
  startUsing: sS,
  confirm: aS,
  save: rS,
  back: lS,
  cancel: iS,
  search: dS,
  reset: pS,
  refresh: gS,
  refreshSuccess: uS,
  select: mS,
  export: "导出列表",
  exportPlaceholder: hS,
  exportTip: SS,
  exportConfirm: fS,
  warning: PS,
  isShow: yS,
  show: CS,
  hidden: kS,
  isBlank: TS,
  blankYes: bS,
  blankNo: jS,
  isBlankTip: zS,
  icon: _S,
  userName: vS,
  headImg: $S,
  accountNumber: wS,
  addManagerTitle: xS,
  addManagerAction: NS,
  addManagerUsername: GS,
  addManagerUsernamePlaceholder: AS,
  addManagerPassword: BS,
  addManagerPasswordPlaceholder: IS,
  addManagerConfirmPassword: MS,
  addManagerConfirmPasswordPlaceholder: DS,
  addManagerConfirmPasswordError: LS,
  accountSettings: RS,
  realName: ES,
  realNamePlaceholder: OS,
  password: FS,
  confirmPassword: US,
  image: WS,
  video: qS,
  rename: KS,
  lookOver: HS,
  selectAll: VS,
  yes: YS,
  no: QS,
  copy: XS,
  complete: ZS,
  copySuccess: JS,
  notSupportCopy: of,
  selectPlaceholder: ef,
  provincePlaceholder: tf,
  cityPlaceholder: nf,
  districtPlaceholder: cf,
  emptyData: sf,
  emptyQrCode: af,
  fileErr: rf,
  upload: lf,
  tabs: df,
  layout: pf,
  axios: gf,
  linkPlaceholder: uf,
  selectLinkTips: mf,
  diyLinkName: hf,
  diyLinkNamePlaceholder: Sf,
  diyLinkNameNotEmpty: ff,
  diyLinkUrl: Pf,
  diyLinkUrlPlaceholder: yf,
  diyLinkUrlNotEmpty: Cf,
  diyAppletId: kf,
  diyAppletIdPlaceholder: Tf,
  diyAppletIdNotEmpty: bf,
  diyAppletPage: jf,
  diyAppletPagePlaceholder: zf,
  diyAppletPageNotEmpty: _f,
  diyMakePhone: vf,
  diyMakePhonePlaceholder: $f,
  diyMakePhoneNotEmpty: wf,
  returnToPreviousPage: xf,
  preview: Nf,
  emptyApp: Gf,
  newInfo: Af,
  visitWap: Bf,
  mapSetting: If,
  mapKey: Mf,
  indexTemplate: Df,
  indexSwitch: Lf,
  indexWarning: Rf,
  originalPassword: Ef,
  newPassword: Of,
  passwordCopy: Ff,
  passwordTip: Uf,
  originalPasswordPlaceholder: Wf,
  passwordPlaceholder: qf,
  originalPasswordHint: Kf,
  newPasswordHint: Hf,
  doubleCipherHint: Vf,
  confirmPasswordError: Yf,
  upgrade: Qf,
  cloudbuild: Xf,
  formSelectContentTitle: Zf,
  formSelectContentTitlePlaceholder: Jf,
  formSelectContentTypeName: oP,
  formSelectContentTypeNamePlaceholder: eP,
  formSelectContentTypeAll: tP,
  formSelectContentTips: nP,
  appName: cP,
  appIdentification: sP,
  introduction: aP,
  type: rP,
  localAppText: lP,
  upgrade2: iP,
  installLabel: dP,
  uninstalledLabel: pP,
  buyLabel: gP,
  cloudBuild: uP,
  newVersion: mP,
  tipText: hP,
  gxx: SP,
  return: "返回",
  nextStep: fP,
  prev: PP,
  viewUpgradeContent: yP,
  testDirectoryPermissions: CP,
  backupFiles: kP,
  startUpgrade: TP,
  upgradeEnd: bP,
  cloudBuildTips: jP,
  promoteUrl: zP,
  downLoadQRCode: _P,
  configureFailed: vP,
  lefttitle: $P,
  righttitle: wP,
  leftDesc: xP,
  rightDesc: NP,
  descPlaceholder: GP
}, AP = "File differences", BP = "Verify", IP = "Please manually back up site data before restore to avoid data loss", MP = "Select all results", DP = "Search file path", LP = "Search", RP = "All", EP = "Checking", OP = "No differences found", FP = "Selected", UP = "file(s)", WP = "Confirm", qP = "Files scanned", KP = "Check failed, please try again later", HP = "Added", VP = "Modified", YP = "Deleted", QP = "Compare", XP = "File content comparison", ZP = "Loading file content...", JP = "Expanding more content...", oy = "Failed to load file content", ey = "Target skipped", ty = "Check progress", ny = "Comparing files...", cy = "Execution log", sy = "No records yet", ay = "%count% entries", ry = "Check started", ly = "Reading the official manifest...", iy = "Official manifest loaded (%count% files), comparing", dy = "Comparing local addon files (%done% / %total%)", py = "Comparison finished, %count% differing file(s) found", gy = "Comparison finished, no differences found", uy = "Live channel unavailable, switched to polling", my = "Check cancelled", hy = "Cancel check", Sy = "Start check", fy = "Re-check", Py = "Check cancelled", yy = "The local code matches the official code", Cy = "Checked %count% file(s), no differences found", ky = "Restore", Ty = "Local", by = "Official", jy = "Official content is unavailable", zy = 'An "Added" file only exists locally, so there is no official content to restore', _y = "Large file: comparison and rendering will be noticeably slower, and very long changed lines are marked as a whole instead of word by word.", vy = "This file is too large, so line-level comparison is used and only the beginning of the content is shown. Differences may not be complete.", $y = "Restore", wy = "Confirm restore", xy = "%count% selected file(s) (%size%) will be overwritten with the official content. Originals are backed up first.", Ny = "Please confirm the consequences", Gy = "The selected files are replaced by the official package content: any local customization made to them is permanently lost, because the official package does not contain those changes.", Ay = 'A "Deleted" item is a file that exists officially but is missing locally — restoring it puts the file back on the site.', By = 'Originals are backed up on the server first under runtime/integrity/backup (grouped by timestamp and target); the exact path for this run is shown in the result. Backups are never cleaned automatically; you can review historical backups and restore them with one click later via "Backup Manager" in the file diff dialog.', Iy = "The restore takes effect immediately: the site starts using the official content. If the site is live, prefer doing this during off-peak hours.", My = "Restore result", Dy = "Done: %ok% restored, %skip% skipped, %fail% failed", Ly = "Files that failed to restore", Ry = "Files skipped", Ey = "Backup directory", Oy = "OK", Fy = 'The diff list does not refresh automatically. To see the latest status, close this dialog and click "Re-check".', Uy = "Backup Manager", Wy = "Backup root", qy = "No backups yet. Backups are created automatically on the server whenever you restore official files in the file diff dialog.", Ky = "Backup time", Hy = "Target", Vy = "Files", Yy = "Size", Qy = "Action", Xy = "Delete selected", Zy = "Delete backup", Jy = "All %count% backup files of this batch will be deleted and cannot be recovered (local files are not affected). Continue?", oC = "The %count% selected backup files will be deleted and can no longer be restored from (local files are not affected). Continue?", eC = "Delete", tC = "%count% backup files deleted", nC = "Backup batch deleted", cC = "Restore selected", sC = "Select all", aC = "Select files to restore first", rC = "At most %max% files per run, but %count% selected. Please split into batches.", lC = "Not restorable", iC = "The target cannot be resolved right now (it may be uninstalled or its version info is missing), so the restore location is unknown.", dC = "Restore from backup", pC = "Restoring overwrites local files with the backup content: local changes to these files are lost. The current local content is backed up again before overwriting, so this step is reversible. Continue?", gC = "Restore", uC = "Restore result", mC = "Done: %ok% restored, %skip% skipped, %fail% failed", hC = "Rollback backup directory", SC = "Close", fC = "Edit", PC = "Create Time", yC = "Sort", CC = "Status", kC = "Operation", TC = "Normal", bC = "Deactivate", jC = "Confirm", zC = "Cancel", _C = "Warning", vC = "Show or not", $C = "show", wC = "hidden", xC = "Open in new window", NC = "Yes", GC = "No", AC = "When enabled, clicking this menu opens the page in a new tab and hides the sidebar, header and tab bar, showing only the page content", BC = "Icon", IC = {
  layoutSetting: "Layout configuration",
  darkMode: "Dark mode",
  themeColor: "Theme color",
  layoutStyle: "Layout style",
  tab: "Show tab bar"
}, MC = {
  400: "Wrong request            ",
  401: "Please login again",
  403: "Access denied",
  404: "Request error, the resource was not found",
  405: "Request method not allowed",
  408: "Request timeout",
  500: "Server side error",
  501: "Network not implemented",
  502: "Network error",
  503: "Service unavailable",
  504: "Network Timeout",
  505: "The http version does not support the request",
  unknownError: "Unknown Error",
  timeout: "Network request timeout!"
}, DC = "Refresh", LC = {
  closeLeft: "Close left",
  closeRight: "Close right",
  closeCurrent: "Close current",
  closeOther: "Close others",
  closeAll: "Close all",
  more: "More actions"
}, Cu = {
  diffDialogTitle: AP,
  diffVerify: BP,
  backupTip: IP,
  diffSelectAll: MP,
  searchFilePlaceholder: DP,
  search: LP,
  tabAll: RP,
  detectingPrefix: EP,
  noDiff: OP,
  selectedSummary: FP,
  filesUnit: UP,
  confirmAction: WP,
  scanned: qP,
  checkFailed: KP,
  typeNew: HP,
  typeModified: VP,
  typeDeleted: YP,
  compareAction: QP,
  compareTitle: XP,
  compareLoading: ZP,
  compareExpanding: JP,
  compareFailed: oy,
  targetSkipped: ey,
  progressTitle: ty,
  checking: ny,
  logTitle: cy,
  logEmpty: sy,
  logTotal: ay,
  logStart: ry,
  logBaseline: ly,
  logReady: iy,
  logScanning: dy,
  logFinishDiff: py,
  logFinishSame: gy,
  logFallback: uy,
  logCancelled: my,
  cancelCheck: hy,
  startCheck: Sy,
  recheckAction: fy,
  checkCancelled: Py,
  identical: yy,
  identicalTip: Cy,
  restoreAction: ky,
  localLabel: Ty,
  officialLabel: by,
  officialMissing: jy,
  addNotRestorable: zy,
  compareLargeTip: _y,
  compareLargeTruncatedTip: vy,
  confirmRestore: $y,
  restoreConfirmTitle: wy,
  restoreConfirmTip: xy,
  restoreConsequenceTitle: Ny,
  restoreConsequenceOverwrite: Gy,
  restoreConsequenceDeleted: Ay,
  restoreConsequenceBackup: By,
  restoreConsequenceLive: Iy,
  restoreDoneTitle: My,
  restoreSummary: Dy,
  restoreFailedList: Ly,
  restoreSkippedList: Ry,
  backupDirLabel: Ey,
  restoreDoneOk: Oy,
  restoreRefreshTip: Fy,
  backupManageTitle: Uy,
  backupRootLabel: Wy,
  backupEmpty: qy,
  backupColTime: Ky,
  backupColTarget: Hy,
  backupColCount: Vy,
  backupColSize: Yy,
  backupColAction: Qy,
  backupDeleteSelected: Xy,
  backupDeleteConfirmTitle: Zy,
  backupDeleteConfirmAll: Jy,
  backupDeleteConfirmSelected: oC,
  backupDeleteOk: eC,
  backupDeleted: tC,
  backupDeletedBatch: nC,
  backupRestoreSelected: cC,
  backupSelectAll: sC,
  backupSelectTip: aC,
  backupMaxFilesTip: rC,
  backupNotRestorable: lC,
  backupNotRestorableTip: iC,
  backupConfirmTitle: dC,
  backupConfirmText: pC,
  backupConfirmOk: gC,
  backupResultTitle: uC,
  backupSummary: mC,
  backupRollbackDirLabel: hC,
  close: SC,
  edit: fC,
  delete: "Delete",
  createTime: PC,
  sort: yC,
  status: CC,
  operation: kC,
  statusNormal: TC,
  statusDeactivate: bC,
  confirm: jC,
  cancel: zC,
  warning: _C,
  isShow: vC,
  show: $C,
  hidden: wC,
  isBlank: xC,
  blankYes: NC,
  blankNo: GC,
  isBlankTip: AC,
  icon: BC,
  layout: IC,
  axios: MC,
  refresh: DC,
  tabs: LC
}, I = /* @__PURE__ */ Object.assign({ "/src/addon/cms/lang/zh-cn/common.json": $u, "/src/addon/erp/lang/zh-cn/common.json": xu, "/src/addon/home_service/lang/zh-cn/common.json": Gu, "/src/addon/huaweicloud_obs/lang/zh-cn/common.json": Bu, "/src/addon/huaweicloud_sms/lang/zh-cn/common.json": Mu, "/src/addon/o2o/lang/zh-cn/common.json": Lu, "/src/addon/seckill/lang/zh-cn/common.json": Eu, "/src/addon/shop/lang/zh-cn/common.json": Fu, "/src/addon/shop_fenxiao/lang/zh-cn/common.json": Wu, "/src/addon/shop_giftcard/lang/zh-cn/common.json": Ku, "/src/addon/sow_community/lang/zh-cn/common.json": Vu, "/src/addon/tourism/lang/zh-cn/common.json": Qu, "/src/addon/vipcard/lang/zh-cn/common.json": Zu }), M = /* @__PURE__ */ Object.assign({});
for (const e in I)
  Object.assign(yu, I[e].default);
for (const e in M)
  Object.assign(Cu, M[e].default);
let T = bu({
  locale: "zh-cn",
  fallbackLocale: "zh-cn",
  datetimeFormats: {},
  numberFormats: {},
  globalInjection: !0,
  //是否全局注入
  silentTranslationWarn: !0,
  messages: {
    "zh-cn": yu,
    en: Cu
  },
  silentFallbackWarn: !0
});
const VC = new gm(T);
var RC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, x = {}, EC = {
  get exports() {
    return x;
  },
  set exports(e) {
    x = e;
  }
};
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(e, t) {
  (function(o, c) {
    e.exports = c();
  })(RC, function() {
    var o = {};
    o.version = "0.2.0";
    var c = o.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    o.configure = function(n) {
      var s, l;
      for (s in n)
        l = n[s], l !== void 0 && n.hasOwnProperty(s) && (c[s] = l);
      return this;
    }, o.status = null, o.set = function(n) {
      var s = o.isStarted();
      n = a(n, c.minimum, 1), o.status = n === 1 ? null : n;
      var l = o.render(!s), g = l.querySelector(c.barSelector), m = c.speed, f = c.easing;
      return l.offsetWidth, i(function(d) {
        c.positionUsing === "" && (c.positionUsing = o.getPositioningCSS()), u(g, p(n, m, f)), n === 1 ? (u(l, {
          transition: "none",
          opacity: 1
        }), l.offsetWidth, setTimeout(function() {
          u(l, {
            transition: "all " + m + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            o.remove(), d();
          }, m);
        }, m)) : setTimeout(d, m);
      }), this;
    }, o.isStarted = function() {
      return typeof o.status == "number";
    }, o.start = function() {
      o.status || o.set(0);
      var n = function() {
        setTimeout(function() {
          o.status && (o.trickle(), n());
        }, c.trickleSpeed);
      };
      return c.trickle && n(), this;
    }, o.done = function(n) {
      return !n && !o.status ? this : o.inc(0.3 + 0.5 * Math.random()).set(1);
    }, o.inc = function(n) {
      var s = o.status;
      return s ? (typeof n != "number" && (n = (1 - s) * a(Math.random() * s, 0.1, 0.95)), s = a(s + n, 0, 0.994), o.set(s)) : o.start();
    }, o.trickle = function() {
      return o.inc(Math.random() * c.trickleRate);
    }, function() {
      var n = 0, s = 0;
      o.promise = function(l) {
        return !l || l.state() === "resolved" ? this : (s === 0 && o.start(), n++, s++, l.always(function() {
          s--, s === 0 ? (n = 0, o.done()) : o.set((n - s) / n);
        }), this);
      };
    }(), o.render = function(n) {
      if (o.isRendered())
        return document.getElementById("nprogress");
      b(document.documentElement, "nprogress-busy");
      var s = document.createElement("div");
      s.id = "nprogress", s.innerHTML = c.template;
      var l = s.querySelector(c.barSelector), g = n ? "-100" : r(o.status || 0), m = document.querySelector(c.parent), f;
      return u(l, {
        transition: "all 0 linear",
        transform: "translate3d(" + g + "%,0,0)"
      }), c.showSpinner || (f = s.querySelector(c.spinnerSelector), f && B(f)), m != document.body && b(m, "nprogress-custom-parent"), m.appendChild(s), s;
    }, o.remove = function() {
      A(document.documentElement, "nprogress-busy"), A(document.querySelector(c.parent), "nprogress-custom-parent");
      var n = document.getElementById("nprogress");
      n && B(n);
    }, o.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, o.getPositioningCSS = function() {
      var n = document.body.style, s = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : "";
      return s + "Perspective" in n ? "translate3d" : s + "Transform" in n ? "translate" : "margin";
    };
    function a(n, s, l) {
      return n < s ? s : n > l ? l : n;
    }
    function r(n) {
      return (-1 + n) * 100;
    }
    function p(n, s, l) {
      var g;
      return c.positionUsing === "translate3d" ? g = { transform: "translate3d(" + r(n) + "%,0,0)" } : c.positionUsing === "translate" ? g = { transform: "translate(" + r(n) + "%,0)" } : g = { "margin-left": r(n) + "%" }, g.transition = "all " + s + "ms " + l, g;
    }
    var i = function() {
      var n = [];
      function s() {
        var l = n.shift();
        l && l(s);
      }
      return function(l) {
        n.push(l), n.length == 1 && s();
      };
    }(), u = function() {
      var n = ["Webkit", "O", "Moz", "ms"], s = {};
      function l(d) {
        return d.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(h, S) {
          return S.toUpperCase();
        });
      }
      function g(d) {
        var h = document.body.style;
        if (d in h)
          return d;
        for (var S = n.length, C = d.charAt(0).toUpperCase() + d.slice(1), y; S--; )
          if (y = n[S] + C, y in h)
            return y;
        return d;
      }
      function m(d) {
        return d = l(d), s[d] || (s[d] = g(d));
      }
      function f(d, h, S) {
        h = m(h), d.style[h] = S;
      }
      return function(d, h) {
        var S = arguments, C, y;
        if (S.length == 2)
          for (C in h)
            y = h[C], y !== void 0 && h.hasOwnProperty(C) && f(d, C, y);
        else
          f(d, S[1], S[2]);
      };
    }();
    function P(n, s) {
      var l = typeof n == "string" ? n : _(n);
      return l.indexOf(" " + s + " ") >= 0;
    }
    function b(n, s) {
      var l = _(n), g = l + s;
      P(l, s) || (n.className = g.substring(1));
    }
    function A(n, s) {
      var l = _(n), g;
      P(n, s) && (g = l.replace(" " + s + " ", " "), n.className = g.substring(1, g.length - 1));
    }
    function _(n) {
      return (" " + (n.className || "") + " ").replace(/\s+/gi, " ");
    }
    function B(n) {
      n && n.parentNode && n.parentNode.removeChild(n);
    }
    return o;
  });
})(EC);
const D = x, OC = zu("app", {
  state: () => ({
    route: {},
    routeRefreshTag: !0,
    pageReturn: !1
  }),
  actions: {
    refreshRouterView() {
      this.routeRefreshTag = !1, D.start(), $(() => {
        this.routeRefreshTag = !0, D.done();
      });
    }
  }
});
function FC() {
  return ju() ? _u() : OC().route;
}
const YC = (e) => {
  const t = FC();
  let o = cm(t);
  const c = sm(t);
  o || (o = mu(c));
  const r = `${uu(o, c)}.${e}`;
  return T.global.t(r) != r ? T.global.t(r) : T.global.t(e);
}, QC = {
  install(e) {
    e.use(T);
  }
};
export {
  QC as default,
  T as i18n,
  VC as language,
  YC as t
};
