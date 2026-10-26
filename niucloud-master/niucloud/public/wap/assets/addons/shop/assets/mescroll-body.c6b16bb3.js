/* __addonChunkCssInjected:8d559268 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("8d559268",".addon-wrap-8d559268 .mescroll-totop{z-index:9990;position:fixed!important;right:.625rem;bottom:3.75rem;width:2.25rem;height:auto;border-radius:50%;opacity:0;transition:opacity .5s;margin-bottom:var(--window-bottom)}.addon-wrap-8d559268 .mescroll-totop-safearea{margin-bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom));margin-bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}.addon-wrap-8d559268 }.mescroll-totop-in{opacity:1}.addon-wrap-8d559268 .mescroll-totop-out{opacity:0;pointer-events:none}");
import { Q as startPullDownRefresh, R as stopPullDownRefresh, b as index$q, u as upx2px, J as getSystemInfoSync, c as createSelectorQuery, p as pageScrollTo, T as $on, U as $off, i as index$g } from "./uni-h5.es.7545a186.js";
import { m as mescrollI18n, G as GlobalOption } from "./mescroll-empty.3c956fab.js";
import "./resize-sensor.8ba09891.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle, createCommentVNode, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, withDirectives, vShow } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function MeScroll(options, isScrollBody) {
  let me2 = this;
  me2.version = "1.3.7";
  me2.options = options || {};
  me2.isScrollBody = isScrollBody || false;
  me2.isDownScrolling = false;
  me2.isUpScrolling = false;
  let hasDownCallback = me2.options.down && me2.options.down.callback;
  me2.initDownScroll();
  me2.initUpScroll();
  setTimeout(function() {
    if ((me2.optDown.use || me2.optDown.native) && me2.optDown.auto && hasDownCallback) {
      if (me2.optDown.autoShowLoading) {
        me2.triggerDownScroll();
      } else {
        me2.optDown.callback && me2.optDown.callback(me2);
      }
    }
    if (!me2.isUpAutoLoad) {
      setTimeout(function() {
        me2.optUp.use && me2.optUp.auto && !me2.isUpAutoLoad && me2.triggerUpScroll();
      }, 100);
    }
  }, 30);
}
MeScroll.prototype.extendDownScroll = function(optDown) {
  MeScroll.extend(optDown, {
    use: true,
    // 是否启用下拉刷新; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
    native: false,
    // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    autoShowLoading: false,
    // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
    isLock: false,
    // 是否锁定下拉刷新,默认false;
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    startTop: 100,
    // scroll-view快速滚动到顶部时,此时的scroll-top可能大于0, 此值用于控制最大的误差
    inOffsetRate: 1,
    // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    outOffsetRate: 0.2,
    // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    bottomOffset: 20,
    // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    minAngle: 45,
    // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    textInOffset: "下拉刷新",
    // 下拉的距离在offset范围内的提示文本
    textOutOffset: "释放更新",
    // 下拉的距离大于offset范围的提示文本
    textLoading: "加载中 ...",
    // 加载中的提示文本
    textSuccess: "加载成功",
    // 加载成功的文本
    textErr: "加载失败",
    // 加载失败的文本
    beforeEndDelay: 0,
    // 延时结束的时长 (显示加载成功/失败的时长, android小程序设置此项结束下拉会卡顿, 配置后请注意测试)
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 下拉刷新初始化完毕的回调
    inOffset: null,
    // 下拉的距离进入offset范围内那一刻的回调
    outOffset: null,
    // 下拉的距离大于offset那一刻的回调
    onMoving: null,
    // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    beforeLoading: null,
    // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
    showLoading: null,
    // 显示下拉刷新进度的回调
    afterLoading: null,
    // 显示下拉刷新进度的回调之后,马上要执行的代码 (如: 在wxs中使用)
    beforeEndDownScroll: null,
    // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
    endDownScroll: null,
    // 结束下拉刷新的回调
    afterEndDownScroll: null,
    // 结束下拉刷新的回调,马上要执行的代码 (如: 在wxs中使用)
    callback: function(mescroll) {
      mescroll.resetUpScroll();
    }
  });
};
MeScroll.prototype.extendUpScroll = function(optUp) {
  MeScroll.extend(optUp, {
    use: true,
    // 是否启用上拉加载; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
    isLock: false,
    // 是否锁定上拉加载,默认false;
    isBoth: true,
    // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
    callback: null,
    // 上拉加载的回调;function(page,mescroll){ }
    page: {
      num: 0,
      // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      size: 10,
      // 每页数据的数量
      time: null
      // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    },
    noMoreSize: 5,
    // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    offset: 150,
    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    textLoading: "加载中 ...",
    // 加载中的提示文本
    textNoMore: "",
    // 没有更多数据的提示文本，-- END --
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 初始化完毕的回调
    showLoading: null,
    // 显示加载中的回调
    showNoMore: null,
    // 显示无更多数据的回调
    hideUpScroll: null,
    // 隐藏上拉加载的回调
    errDistance: 60,
    // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: null,
      // 图片路径,默认null (绝对路径或网络图)
      offset: 1e3,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300,
      // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      zIndex: 9990,
      // fixed定位z-index值
      left: null,
      // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      right: 20,
      // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      safearea: false,
      // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)
      width: 72,
      // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      radius: "50%"
      // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
    },
    empty: {
      use: true,
      // 是否显示空布局
      icon: null,
      // 图标路径
      tip: "~ 暂无相关数据 ~",
      // 提示
      btnText: "",
      // 按钮
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      fixed: false,
      // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
      top: "100rpx",
      // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
      zIndex: 99
      // fixed定位z-index值
    },
    onScroll: false
    // 是否监听滚动事件
  });
};
MeScroll.extend = function(userOption, defaultOption) {
  if (!userOption)
    return defaultOption;
  for (let key in defaultOption) {
    if (userOption[key] == null) {
      let def = defaultOption[key];
      if (def != null && typeof def === "object") {
        userOption[key] = MeScroll.extend({}, def);
      } else {
        userOption[key] = def;
      }
    } else if (typeof userOption[key] === "object") {
      MeScroll.extend(userOption[key], defaultOption[key]);
    }
  }
  return userOption;
};
MeScroll.prototype.hasColor = function(color) {
  if (!color)
    return false;
  let c = color.toLowerCase();
  return c != "#fff" && c != "#ffffff" && c != "transparent" && c != "white";
};
MeScroll.prototype.initDownScroll = function() {
  let me2 = this;
  me2.optDown = me2.options.down || {};
  if (!me2.optDown.textColor && me2.hasColor(me2.optDown.bgColor))
    me2.optDown.textColor = "#fff";
  me2.extendDownScroll(me2.optDown);
  if (me2.isScrollBody && me2.optDown.native) {
    me2.optDown.use = false;
  } else {
    me2.optDown.native = false;
  }
  me2.downHight = 0;
  if (me2.optDown.use && me2.optDown.inited) {
    setTimeout(function() {
      me2.optDown.inited(me2);
    }, 0);
  }
};
MeScroll.prototype.touchstartEvent = function(e) {
  if (!this.optDown.use)
    return;
  this.startPoint = this.getPoint(e);
  this.startTop = this.getScrollTop();
  this.startAngle = 0;
  this.lastPoint = this.startPoint;
  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset;
  this.inTouchend = false;
};
MeScroll.prototype.touchmoveEvent = function(e) {
  if (!this.optDown.use)
    return;
  let me2 = this;
  let scrollTop = me2.getScrollTop();
  let curPoint = me2.getPoint(e);
  let moveY = curPoint.y - me2.startPoint.y;
  if (moveY > 0 && (me2.isScrollBody && scrollTop <= 0 || !me2.isScrollBody && (scrollTop <= 0 || scrollTop <= me2.optDown.startTop && scrollTop === me2.startTop))) {
    if (!me2.inTouchend && !me2.isDownScrolling && !me2.optDown.isLock && (!me2.isUpScrolling || me2.isUpScrolling && me2.optUp.isBoth)) {
      if (!me2.startAngle)
        me2.startAngle = me2.getAngle(me2.lastPoint, curPoint);
      if (me2.startAngle < me2.optDown.minAngle)
        return;
      if (me2.maxTouchmoveY > 0 && curPoint.y >= me2.maxTouchmoveY) {
        me2.inTouchend = true;
        me2.touchendEvent();
        return;
      }
      me2.preventDefault(e);
      let diff = curPoint.y - me2.lastPoint.y;
      if (me2.downHight < me2.optDown.offset) {
        if (me2.movetype !== 1) {
          me2.movetype = 1;
          me2.isDownEndSuccess = null;
          me2.optDown.inOffset && me2.optDown.inOffset(me2);
          me2.isMoveDown = true;
        }
        me2.downHight += diff * me2.optDown.inOffsetRate;
      } else {
        if (me2.movetype !== 2) {
          me2.movetype = 2;
          me2.optDown.outOffset && me2.optDown.outOffset(me2);
          me2.isMoveDown = true;
        }
        if (diff > 0) {
          me2.downHight += diff * me2.optDown.outOffsetRate;
        } else {
          me2.downHight += diff;
        }
      }
      me2.downHight = Math.round(me2.downHight);
      let rate = me2.downHight / me2.optDown.offset;
      me2.optDown.onMoving && me2.optDown.onMoving(me2, rate, me2.downHight);
    }
  }
  me2.lastPoint = curPoint;
};
MeScroll.prototype.touchendEvent = function(e) {
  if (!this.optDown.use)
    return;
  if (this.isMoveDown) {
    if (this.downHight >= this.optDown.offset) {
      this.triggerDownScroll();
    } else {
      this.downHight = 0;
      this.endDownScrollCall(this);
    }
    this.movetype = 0;
    this.isMoveDown = false;
  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {
    let isScrollUp = this.getPoint(e).y - this.startPoint.y < 0;
    if (isScrollUp) {
      let angle = this.getAngle(this.getPoint(e), this.startPoint);
      if (angle > 80) {
        this.triggerUpScroll(true);
      }
    }
  }
};
MeScroll.prototype.getPoint = function(e) {
  if (!e) {
    return {
      x: 0,
      y: 0
    };
  }
  if (e.touches && e.touches[0]) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  } else if (e.changedTouches && e.changedTouches[0]) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    };
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
};
MeScroll.prototype.getAngle = function(p1, p2) {
  let x = Math.abs(p1.x - p2.x);
  let y = Math.abs(p1.y - p2.y);
  let z = Math.sqrt(x * x + y * y);
  let angle = 0;
  if (z !== 0) {
    angle = Math.asin(y / z) / Math.PI * 180;
  }
  return angle;
};
MeScroll.prototype.triggerDownScroll = function() {
  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this))
    ;
  else {
    this.showDownScroll();
    !this.optDown.native && this.optDown.callback && this.optDown.callback(this);
  }
};
MeScroll.prototype.showDownScroll = function() {
  this.isDownScrolling = true;
  if (this.optDown.native) {
    startPullDownRefresh();
    this.showDownLoadingCall(0);
  } else {
    this.downHight = this.optDown.offset;
    this.showDownLoadingCall(this.downHight);
  }
};
MeScroll.prototype.showDownLoadingCall = function(downHight) {
  this.optDown.showLoading && this.optDown.showLoading(this, downHight);
  this.optDown.afterLoading && this.optDown.afterLoading(this, downHight);
};
MeScroll.prototype.onPullDownRefresh = function() {
  this.isDownScrolling = true;
  this.showDownLoadingCall(0);
  this.optDown.callback && this.optDown.callback(this);
};
MeScroll.prototype.endDownScroll = function() {
  if (this.optDown.native) {
    this.isDownScrolling = false;
    this.endDownScrollCall(this);
    stopPullDownRefresh();
    return;
  }
  let me2 = this;
  let endScroll = function() {
    me2.downHight = 0;
    me2.isDownScrolling = false;
    me2.endDownScrollCall(me2);
    if (!me2.isScrollBody) {
      me2.setScrollHeight(0);
      me2.scrollTo(0, 0);
    }
  };
  let delay = 0;
  if (me2.optDown.beforeEndDownScroll) {
    delay = me2.optDown.beforeEndDownScroll(me2);
    if (me2.isDownEndSuccess == null)
      delay = 0;
  }
  if (typeof delay === "number" && delay > 0) {
    setTimeout(endScroll, delay);
  } else {
    endScroll();
  }
};
MeScroll.prototype.endDownScrollCall = function() {
  this.optDown.endDownScroll && this.optDown.endDownScroll(this);
  this.optDown.afterEndDownScroll && this.optDown.afterEndDownScroll(this);
};
MeScroll.prototype.lockDownScroll = function(isLock) {
  if (isLock == null)
    isLock = true;
  this.optDown.isLock = isLock;
};
MeScroll.prototype.lockUpScroll = function(isLock) {
  if (isLock == null)
    isLock = true;
  this.optUp.isLock = isLock;
};
MeScroll.prototype.initUpScroll = function() {
  let me2 = this;
  me2.optUp = me2.options.up || { use: false };
  if (!me2.optUp.textColor && me2.hasColor(me2.optUp.bgColor))
    me2.optUp.textColor = "#fff";
  me2.extendUpScroll(me2.optUp);
  if (me2.optUp.use === false)
    return;
  me2.optUp.hasNext = true;
  me2.startNum = me2.optUp.page.num + 1;
  if (me2.optUp.inited) {
    setTimeout(function() {
      me2.optUp.inited(me2);
    }, 0);
  }
};
MeScroll.prototype.onReachBottom = function() {
  if (this.isScrollBody && !this.isUpScrolling) {
    if (!this.optUp.isLock && this.optUp.hasNext) {
      this.triggerUpScroll();
    }
  }
};
MeScroll.prototype.onPageScroll = function(e) {
  if (!this.isScrollBody)
    return;
  this.setScrollTop(e.scrollTop);
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }
};
MeScroll.prototype.scroll = function(e, onScroll) {
  this.setScrollTop(e.scrollTop);
  this.setScrollHeight(e.scrollHeight);
  if (this.preScrollY == null)
    this.preScrollY = 0;
  this.isScrollUp = e.scrollTop - this.preScrollY > 0;
  this.preScrollY = e.scrollTop;
  this.isScrollUp && this.triggerUpScroll(true);
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }
  this.optUp.onScroll && onScroll && onScroll();
};
MeScroll.prototype.triggerUpScroll = function(isCheck) {
  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
    if (isCheck === true) {
      let canUp = false;
      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {
        if (this.getScrollBottom() <= this.optUp.offset) {
          canUp = true;
        }
      }
      if (canUp === false)
        return;
    }
    this.showUpScroll();
    this.optUp.page.num++;
    this.isUpAutoLoad = true;
    this.num = this.optUp.page.num;
    this.size = this.optUp.page.size;
    this.time = this.optUp.page.time;
    this.optUp.callback(this);
  }
};
MeScroll.prototype.showUpScroll = function() {
  this.isUpScrolling = true;
  this.optUp.showLoading && this.optUp.showLoading(this);
};
MeScroll.prototype.showNoMore = function() {
  this.optUp.hasNext = false;
  this.optUp.showNoMore && this.optUp.showNoMore(this);
};
MeScroll.prototype.hideUpScroll = function() {
  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this);
};
MeScroll.prototype.endUpScroll = function(isShowNoMore) {
  if (isShowNoMore != null) {
    if (isShowNoMore) {
      this.showNoMore();
    } else {
      this.hideUpScroll();
    }
  }
  this.isUpScrolling = false;
};
MeScroll.prototype.resetUpScroll = function(isShowLoading) {
  if (this.optUp && this.optUp.use) {
    let page = this.optUp.page;
    this.prePageNum = page.num;
    this.prePageTime = page.time;
    page.num = this.startNum;
    page.time = null;
    if (!this.isDownScrolling && isShowLoading !== false) {
      if (isShowLoading == null) {
        this.removeEmpty();
        this.showUpScroll();
      } else {
        this.showDownScroll();
      }
    }
    this.isUpAutoLoad = true;
    this.num = page.num;
    this.size = page.size;
    this.time = page.time;
    this.optUp.callback && this.optUp.callback(this);
  }
};
MeScroll.prototype.setPageNum = function(num) {
  this.optUp.page.num = num - 1;
};
MeScroll.prototype.setPageSize = function(size) {
  this.optUp.page.size = size;
};
MeScroll.prototype.endByPage = function(dataSize, totalPage, systime) {
  let hasNext;
  if (this.optUp.use && totalPage != null)
    hasNext = this.optUp.page.num < totalPage;
  this.endSuccess(dataSize, hasNext, systime);
};
MeScroll.prototype.endBySize = function(dataSize, totalSize, systime) {
  let hasNext;
  if (this.optUp.use && totalSize != null) {
    let loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize;
    hasNext = loadSize < totalSize;
  }
  this.endSuccess(dataSize, hasNext, systime);
};
MeScroll.prototype.endSuccess = function(dataSize, hasNext, systime) {
  let me2 = this;
  if (me2.isDownScrolling) {
    me2.isDownEndSuccess = true;
    me2.endDownScroll();
  }
  if (me2.optUp.use) {
    let isShowNoMore;
    if (dataSize != null) {
      let pageNum = me2.optUp.page.num;
      let pageSize = me2.optUp.page.size;
      if (pageNum === 1) {
        if (systime)
          me2.optUp.page.time = systime;
      }
      if (dataSize < pageSize || hasNext === false) {
        me2.optUp.hasNext = false;
        if (dataSize === 0 && pageNum === 1) {
          isShowNoMore = false;
          me2.showEmpty();
        } else {
          let allDataSize = (pageNum - 1) * pageSize + dataSize;
          if (allDataSize < me2.optUp.noMoreSize) {
            isShowNoMore = false;
          } else {
            isShowNoMore = true;
          }
          me2.removeEmpty();
        }
      } else {
        isShowNoMore = false;
        me2.optUp.hasNext = true;
        me2.removeEmpty();
      }
    }
    me2.endUpScroll(isShowNoMore);
  }
};
MeScroll.prototype.endErr = function(errDistance) {
  if (this.isDownScrolling) {
    this.isDownEndSuccess = false;
    let page = this.optUp.page;
    if (page && this.prePageNum) {
      page.num = this.prePageNum;
      page.time = this.prePageTime;
    }
    this.endDownScroll();
  }
  if (this.isUpScrolling) {
    this.optUp.page.num--;
    this.endUpScroll(false);
    if (this.isScrollBody && errDistance !== 0) {
      if (!errDistance)
        errDistance = this.optUp.errDistance;
      this.scrollTo(this.getScrollTop() - errDistance, 0);
    }
  }
};
MeScroll.prototype.showEmpty = function() {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
};
MeScroll.prototype.removeEmpty = function() {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);
};
MeScroll.prototype.showTopBtn = function() {
  if (!this.topBtnShow) {
    this.topBtnShow = true;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
  }
};
MeScroll.prototype.hideTopBtn = function() {
  if (this.topBtnShow) {
    this.topBtnShow = false;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
  }
};
MeScroll.prototype.getScrollTop = function() {
  return this.scrollTop || 0;
};
MeScroll.prototype.setScrollTop = function(y) {
  this.scrollTop = y;
};
MeScroll.prototype.scrollTo = function(y, t) {
  this.myScrollTo && this.myScrollTo(y, t);
};
MeScroll.prototype.resetScrollTo = function(myScrollTo) {
  this.myScrollTo = myScrollTo;
};
MeScroll.prototype.getScrollBottom = function() {
  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
};
MeScroll.prototype.getStep = function(star, end, callback, t, rate) {
  let diff = end - star;
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300;
  rate = rate || 30;
  let count = t / rate;
  let step = diff / count;
  let i = 0;
  let timer = setInterval(function() {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer);
      clearInterval(timer);
    }
  }, rate);
};
MeScroll.prototype.getClientHeight = function(isReal) {
  let h = this.clientHeight || 0;
  if (h === 0 && isReal !== true) {
    h = this.getBodyHeight();
  }
  return h;
};
MeScroll.prototype.setClientHeight = function(h) {
  this.clientHeight = h;
};
MeScroll.prototype.getScrollHeight = function() {
  return this.scrollHeight || 0;
};
MeScroll.prototype.setScrollHeight = function(h) {
  this.scrollHeight = h;
};
MeScroll.prototype.getBodyHeight = function() {
  return this.bodyHeight || 0;
};
MeScroll.prototype.setBodyHeight = function(h) {
  this.bodyHeight = h;
};
MeScroll.prototype.preventDefault = function(e) {
  if (e && e.cancelable && !e.defaultPrevented)
    e.preventDefault();
};
const mescrollTop_vue_vue_type_style_index_0_scoped_8d559268_lang = "";
const _sfc_main$1 = {
  props: {
    // up.toTop的配置项
    option: Object,
    // 是否显示
    value: false
  },
  computed: {
    // 支付宝小程序需写成计算属性,prop定义default仍报错
    mOption() {
      return this.option || {};
    },
    // 优先显示左边
    left() {
      return this.mOption.left ? this.addUnit(this.mOption.left) : "auto";
    },
    // 右边距离 (优先显示左边)
    right() {
      return this.mOption.left ? "auto" : this.addUnit(this.mOption.right);
    }
  },
  methods: {
    addUnit(num) {
      if (!num)
        return 0;
      if (typeof num === "number")
        return num + "rpx";
      return num;
    },
    toTopClick() {
      this.$emit("input", false);
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  return $options.mOption.src ? (openBlock(), createBlock(_component_v_uni_image, {
    key: 0,
    class: normalizeClass(["mescroll-totop", [$props.value ? "mescroll-totop-in" : "mescroll-totop-out", { "mescroll-totop-safearea": $options.mOption.safearea }]]),
    style: normalizeStyle({ "z-index": $options.mOption.zIndex, "left": $options.left, "right": $options.right, "bottom": $options.addUnit($options.mOption.bottom), "width": $options.addUnit($options.mOption.width), "border-radius": $options.addUnit($options.mOption.radius) }),
    src: $options.mOption.src,
    mode: "widthFix",
    onClick: $options.toTopClick
  }, null, 8, ["class", "style", "src", "onClick"])) : createCommentVNode("", true);
}
const MescrollTop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8d559268"]]);
const WxsMixin = {
  data() {
    return {
      // 传入wxs视图层的数据 (响应式)
      wxsProp: {
        optDown: {},
        // 下拉刷新的配置
        scrollTop: 0,
        // 滚动条的距离
        bodyHeight: 0,
        // body的高度
        isDownScrolling: false,
        // 是否正在下拉刷新中
        isUpScrolling: false,
        // 是否正在上拉加载中
        isScrollBody: true,
        // 是否为mescroll-body滚动
        isUpBoth: true,
        // 上拉加载时,是否同时可以下拉刷新
        t: 0
        // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      },
      // 标记调用wxs视图层的方法
      callProp: {
        callType: "",
        // 方法名
        t: 0
        // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      }
      // 不用wxs的平台使用此处的wxsBiz对象,抹平wxs的写法 (微信小程序和APP使用的wxsBiz对象是./wxs/wxs.wxs)
      // 不用renderjs的平台使用此处的renderBiz对象,抹平renderjs的写法 (app 和 h5 使用的renderBiz对象是./wxs/renderjs.js)
    };
  },
  methods: {
    // wxs视图层调用逻辑层的回调
    wxsCall(msg) {
      if (msg.type === "setWxsProp") {
        this.wxsProp = {
          optDown: this.mescroll.optDown,
          scrollTop: this.mescroll.getScrollTop(),
          bodyHeight: this.mescroll.getBodyHeight(),
          isDownScrolling: this.mescroll.isDownScrolling,
          isUpScrolling: this.mescroll.isUpScrolling,
          isUpBoth: this.mescroll.optUp.isBoth,
          isScrollBody: this.mescroll.isScrollBody,
          t: Date.now()
        };
      } else if (msg.type === "setLoadType") {
        this.downLoadType = msg.downLoadType;
        this.$set(this.mescroll, "downLoadType", this.downLoadType);
        this.$set(this.mescroll, "isDownEndSuccess", null);
      } else if (msg.type === "triggerDownScroll") {
        this.mescroll.triggerDownScroll();
      } else if (msg.type === "endDownScroll") {
        this.mescroll.endDownScroll();
      } else if (msg.type === "triggerUpScroll") {
        this.mescroll.triggerUpScroll(true);
      }
    }
  },
  mounted() {
    this.mescroll.optDown.afterLoading = () => {
      this.callProp = { callType: "showLoading", t: Date.now() };
    };
    this.mescroll.optDown.afterEndDownScroll = () => {
      this.callProp = { callType: "endDownScroll", t: Date.now() };
      let delay = 300 + (this.mescroll.optDown.beforeEndDelay || 0);
      setTimeout(() => {
        if (this.downLoadType === 4 || this.downLoadType === 0) {
          this.callProp = { callType: "clearTransform", t: Date.now() };
        }
        this.$set(this.mescroll, "downLoadType", this.downLoadType);
      }, delay);
    };
    this.wxsCall({ type: "setWxsProp" });
  }
};
const mescrollBody_vue_vue_type_style_index_0_scoped_cf9cb8c7_lang = "";
var me$1 = {};
me$1.onMoving = function(ins, rate, downHight) {
  ins.requestAnimationFrame(function() {
    ins.selectComponent(".mescroll-wxs-content").setStyle({
      "will-change": "transform",
      // 可解决下拉过程中, image和swiper脱离文档流的问题
      "transform": "translateY(" + downHight + "px)",
      "transition": ""
    });
    var progress = ins.selectComponent(".mescroll-wxs-progress");
    progress && progress.setStyle({ transform: "rotate(" + 360 * rate + "deg)" });
  });
};
me$1.showLoading = function(ins) {
  me$1.downHight = me$1.optDown.offset;
  ins.requestAnimationFrame(function() {
    ins.selectComponent(".mescroll-wxs-content").setStyle({
      "will-change": "auto",
      "transform": "translateY(" + me$1.downHight + "px)",
      "transition": "transform 300ms"
    });
  });
};
me$1.endDownScroll = function(ins) {
  me$1.downHight = 0;
  me$1.isDownScrolling = false;
  ins.requestAnimationFrame(function() {
    ins.selectComponent(".mescroll-wxs-content").setStyle({
      "will-change": "auto",
      "transform": "translateY(0)",
      // 不可以写空串,否则scroll-view渲染不完整 (延时350ms会调clearTransform置空)
      "transition": "transform 300ms"
    });
  });
};
me$1.clearTransform = function(ins) {
  ins.requestAnimationFrame(function() {
    ins.selectComponent(".mescroll-wxs-content").setStyle({
      "will-change": "",
      "transform": "",
      "transition": ""
    });
  });
};
function propObserver$1(wxsProp) {
  me$1.optDown = wxsProp.optDown;
  me$1.scrollTop = wxsProp.scrollTop;
  me$1.bodyHeight = wxsProp.bodyHeight;
  me$1.isDownScrolling = wxsProp.isDownScrolling;
  me$1.isUpScrolling = wxsProp.isUpScrolling;
  me$1.isUpBoth = wxsProp.isUpBoth;
  me$1.isScrollBody = wxsProp.isScrollBody;
  me$1.startTop = wxsProp.scrollTop;
}
function callObserver(callProp, oldValue, ins) {
  if (me$1.disabled())
    return;
  if (callProp.callType) {
    if (callProp.callType === "showLoading") {
      me$1.showLoading(ins);
    } else if (callProp.callType === "endDownScroll") {
      me$1.endDownScroll(ins);
    } else if (callProp.callType === "clearTransform") {
      me$1.clearTransform(ins);
    }
  }
}
function touchstartEvent(e, ins) {
  me$1.downHight = 0;
  me$1.startPoint = me$1.getPoint(e);
  me$1.startTop = me$1.getScrollTop();
  me$1.startAngle = 0;
  me$1.lastPoint = me$1.startPoint;
  me$1.maxTouchmoveY = me$1.getBodyHeight() - me$1.optDown.bottomOffset;
  me$1.inTouchend = false;
  me$1.callMethod(ins, { type: "setWxsProp" });
}
function touchmoveEvent(e, ins) {
  var isPrevent = true;
  if (me$1.disabled())
    return isPrevent;
  var scrollTop = me$1.getScrollTop();
  var curPoint = me$1.getPoint(e);
  var moveY = curPoint.y - me$1.startPoint.y;
  if (moveY > 0 && (me$1.isScrollBody && scrollTop <= 0 || !me$1.isScrollBody && (scrollTop <= 0 || scrollTop <= me$1.optDown.startTop && scrollTop === me$1.startTop))) {
    if (!me$1.inTouchend && !me$1.isDownScrolling && !me$1.optDown.isLock && (!me$1.isUpScrolling || me$1.isUpScrolling && me$1.isUpBoth)) {
      if (!me$1.startAngle)
        me$1.startAngle = me$1.getAngle(me$1.lastPoint, curPoint);
      if (me$1.startAngle < me$1.optDown.minAngle)
        return isPrevent;
      if (me$1.maxTouchmoveY > 0 && curPoint.y >= me$1.maxTouchmoveY) {
        me$1.inTouchend = true;
        touchendEvent(e, ins);
        return isPrevent;
      }
      isPrevent = false;
      var diff = curPoint.y - me$1.lastPoint.y;
      if (me$1.downHight < me$1.optDown.offset) {
        if (me$1.movetype !== 1) {
          me$1.movetype = 1;
          me$1.callMethod(ins, { type: "setLoadType", downLoadType: 1 });
          me$1.isMoveDown = true;
        }
        me$1.downHight += diff * me$1.optDown.inOffsetRate;
      } else {
        if (me$1.movetype !== 2) {
          me$1.movetype = 2;
          me$1.callMethod(ins, { type: "setLoadType", downLoadType: 2 });
          me$1.isMoveDown = true;
        }
        if (diff > 0) {
          me$1.downHight += diff * me$1.optDown.outOffsetRate;
        } else {
          me$1.downHight += diff;
        }
      }
      me$1.downHight = Math.round(me$1.downHight);
      var rate = me$1.downHight / me$1.optDown.offset;
      me$1.onMoving(ins, rate, me$1.downHight);
    }
  }
  me$1.lastPoint = curPoint;
  return isPrevent;
}
function touchendEvent(e, ins) {
  if (me$1.isMoveDown) {
    if (me$1.downHight >= me$1.optDown.offset) {
      me$1.downHight = me$1.optDown.offset;
      me$1.callMethod(ins, { type: "triggerDownScroll" });
    } else {
      me$1.downHight = 0;
      me$1.callMethod(ins, { type: "endDownScroll" });
    }
    me$1.movetype = 0;
    me$1.isMoveDown = false;
  } else if (!me$1.isScrollBody && me$1.getScrollTop() === me$1.startTop) {
    var isScrollUp = me$1.getPoint(e).y - me$1.startPoint.y < 0;
    if (isScrollUp) {
      var angle = me$1.getAngle(me$1.getPoint(e), me$1.startPoint);
      if (angle > 80) {
        me$1.callMethod(ins, { type: "triggerUpScroll" });
      }
    }
  }
  me$1.callMethod(ins, { type: "setWxsProp" });
}
me$1.disabled = function() {
  return !me$1.optDown || !me$1.optDown.use || me$1.optDown.native;
};
me$1.getPoint = function(e) {
  if (!e) {
    return { x: 0, y: 0 };
  }
  if (e.touches && e.touches[0]) {
    return { x: e.touches[0].pageX, y: e.touches[0].pageY };
  } else if (e.changedTouches && e.changedTouches[0]) {
    return { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
};
me$1.getAngle = function(p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  var z = Math.sqrt(x * x + y * y);
  var angle = 0;
  if (z !== 0) {
    angle = Math.asin(y / z) / Math.PI * 180;
  }
  return angle;
};
me$1.getScrollTop = function() {
  return me$1.scrollTop || 0;
};
me$1.getBodyHeight = function() {
  return me$1.bodyHeight || 0;
};
me$1.callMethod = function(ins, param) {
  if (ins)
    ins.callMethod("wxsCall", param);
};
const _sfc_wxs = {
  propObserver: propObserver$1,
  callObserver,
  touchstartEvent,
  touchmoveEvent,
  touchendEvent
};
const block0 = (Comp) => {
  if (!Comp.$wxs) {
    Comp.$wxs = [];
  }
  Comp.$wxs.push("wxsBiz");
  if (!Comp.mixins) {
    Comp.mixins = [];
  }
  Comp.mixins.push({ beforeCreate() {
    this["wxsBiz"] = _sfc_wxs;
  } });
};
const me = {};
if (window && !window.$mescrollRenderInit) {
  window.$mescrollRenderInit = true;
  window.addEventListener("touchstart", function(e) {
    if (me.disabled())
      return;
    me.startPoint = me.getPoint(e);
  }, { passive: true });
  window.addEventListener("touchmove", function(e) {
    if (me.disabled())
      return;
    if (me.getScrollTop() > 0)
      return;
    const curPoint = me.getPoint(e);
    const moveY = curPoint.y - me.startPoint.y;
    if (moveY > 0) {
      if (!me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling && me.isUpBoth)) {
        let el = e.target;
        let isMescrollTouch = false;
        while (el && el.tagName && el.tagName !== "UNI-PAGE-BODY" && el.tagName != "BODY") {
          const cls = el.classList;
          if (cls && cls.contains("mescroll-render-touch")) {
            isMescrollTouch = true;
            break;
          }
          el = el.parentNode;
        }
        if (isMescrollTouch && e.cancelable && !e.defaultPrevented)
          e.preventDefault();
      }
    }
  }, { passive: false });
}
me.getScrollTop = function() {
  return me.scrollTop || 0;
};
me.disabled = function() {
  return !me.optDown || !me.optDown.use || me.optDown.native;
};
me.getPoint = function(e) {
  if (!e) {
    return { x: 0, y: 0 };
  }
  if (e.touches && e.touches[0]) {
    return { x: e.touches[0].pageX, y: e.touches[0].pageY };
  } else if (e.changedTouches && e.changedTouches[0]) {
    return { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
};
function propObserver(wxsProp) {
  me.optDown = wxsProp.optDown;
  me.scrollTop = wxsProp.scrollTop;
  me.isDownScrolling = wxsProp.isDownScrolling;
  me.isUpScrolling = wxsProp.isUpScrolling;
  me.isUpBoth = wxsProp.isUpBoth;
}
const renderBiz = {
  data() {
    return {
      propObserver
    };
  }
};
const _sfc_renderjs = {
  mixins: [renderBiz]
};
const block1 = (Comp) => {
  if (!Comp.$renderjs) {
    Comp.$renderjs = [];
  }
  Comp.$renderjs.push("renderBiz");
  if (!Comp.mixins) {
    Comp.mixins = [];
  }
  Comp.mixins.push({ beforeCreate() {
    this["renderBiz"] = this;
  }, mounted() {
    this.$ownerInstance = this.$gcd(this, true);
  } });
  Comp.mixins.push(_sfc_renderjs);
};
const _sfc_main = {
  name: "mescroll-body",
  mixins: [WxsMixin],
  components: {
    MescrollTop
  },
  props: {
    down: Object,
    up: Object,
    i18n: Object,
    top: [String, Number],
    topbar: [Boolean, String],
    bottom: [String, Number],
    safearea: Boolean,
    height: [String, Number],
    bottombar: {
      type: Boolean,
      default: true
    },
    sticky: Boolean
  },
  data() {
    return {
      mescroll: { optDown: {}, optUp: {} },
      // mescroll实例
      downHight: 0,
      //下拉刷新: 容器高度
      downRate: 0,
      // 下拉比率(inOffset: rate<1; outOffset: rate>=1)
      downLoadType: 0,
      // 下拉刷新状态: 0(loading前), 1(inOffset), 2(outOffset), 3(showLoading), 4(endDownScroll)
      upLoadType: 0,
      // 上拉加载状态：0（loading前），1（loading中），2（没有更多了,显示END文本提示），3（没有更多了,不显示END文本提示）
      isShowEmpty: false,
      // 是否显示空布局
      isShowToTop: false,
      // 是否显示回到顶部按钮
      windowHeight: 0,
      // 可使用窗口的高度
      windowBottom: 0,
      // 可使用窗口的底部位置
      statusBarHeight: 0
      // 状态栏高度
    };
  },
  computed: {
    // mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉
    minHeight() {
      return this.toPx(this.height || "100%") + "px";
    },
    // 下拉布局往下偏移的距离 (px)
    numTop() {
      return this.toPx(this.top);
    },
    padTop() {
      return this.numTop + "px";
    },
    // 上拉布局往上偏移 (px)
    numBottom() {
      return this.toPx(this.bottom);
    },
    padBottom() {
      return this.numBottom + "px";
    },
    // 是否为重置下拉的状态
    isDownReset() {
      return this.downLoadType === 3 || this.downLoadType === 4;
    },
    // 过渡
    transition() {
      return this.isDownReset ? "transform 300ms" : "";
    },
    translateY() {
      return this.downHight > 0 ? "translateY(" + this.downHight + "px)" : "";
    },
    // 是否在加载中
    isDownLoading() {
      return this.downLoadType === 3;
    },
    // 旋转的角度
    downRotate() {
      return "rotate(" + 360 * this.downRate + "deg)";
    },
    // 文本提示
    downText() {
      if (!this.mescroll)
        return "";
      switch (this.downLoadType) {
        case 1:
          return this.mescroll.optDown.textInOffset;
        case 2:
          return this.mescroll.optDown.textOutOffset;
        case 3:
          return this.mescroll.optDown.textLoading;
        case 4:
          return this.mescroll.isDownEndSuccess ? this.mescroll.optDown.textSuccess : this.mescroll.isDownEndSuccess == false ? this.mescroll.optDown.textErr : this.mescroll.optDown.textInOffset;
        default:
          return this.mescroll.optDown.textInOffset;
      }
    }
  },
  methods: {
    //number,rpx,upx,px,% --> px的数值
    toPx(num) {
      if (typeof num === "string") {
        if (num.indexOf("px") !== -1) {
          if (num.indexOf("rpx") !== -1) {
            num = num.replace("rpx", "");
          } else if (num.indexOf("upx") !== -1) {
            num = num.replace("upx", "");
          } else {
            return Number(num.replace("px", ""));
          }
        } else if (num.indexOf("%") !== -1) {
          let rate = Number(num.replace("%", "")) / 100;
          return this.windowHeight * rate;
        }
      }
      return num ? upx2px(Number(num)) : 0;
    },
    // 点击空布局的按钮回调
    emptyClick() {
      this.$emit("emptyclick", this.mescroll);
    },
    // 点击回到顶部的按钮回调
    toTopClick() {
      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration);
      this.$emit("topclick", this.mescroll);
    }
  },
  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效
  created() {
    let vm = this;
    let diyOption = {
      // 下拉刷新的配置
      down: {
        inOffset() {
          vm.downLoadType = 1;
        },
        outOffset() {
          vm.downLoadType = 2;
        },
        onMoving(mescroll, rate, downHight) {
          vm.downHight = downHight;
          vm.downRate = rate;
        },
        showLoading(mescroll, downHight) {
          vm.downLoadType = 3;
          vm.downHight = downHight;
        },
        beforeEndDownScroll(mescroll) {
          vm.downLoadType = 4;
          return mescroll.optDown.beforeEndDelay;
        },
        endDownScroll() {
          vm.downLoadType = 4;
          vm.downHight = 0;
          if (vm.downResetTimer) {
            clearTimeout(vm.downResetTimer);
            vm.downResetTimer = null;
          }
          vm.downResetTimer = setTimeout(() => {
            if (vm.downLoadType === 4)
              vm.downLoadType = 0;
          }, 300);
        },
        // 派发下拉刷新的回调
        callback: function(mescroll) {
          vm.$emit("down", mescroll);
        }
      },
      // 上拉加载的配置
      up: {
        // 显示加载中的回调
        showLoading() {
          vm.upLoadType = 1;
        },
        // 显示无更多数据的回调
        showNoMore() {
          vm.upLoadType = 2;
        },
        // 隐藏上拉加载的回调
        hideUpScroll(mescroll) {
          vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;
        },
        // 空布局
        empty: {
          onShow(isShow) {
            vm.isShowEmpty = isShow;
          }
        },
        // 回到顶部
        toTop: {
          onShow(isShow) {
            vm.isShowToTop = isShow;
          }
        },
        // 派发上拉加载的回调
        callback: function(mescroll) {
          vm.$emit("up", mescroll);
        }
      }
    };
    let i18nType = mescrollI18n.getType();
    let i18nOption = { type: i18nType };
    MeScroll.extend(i18nOption, vm.i18n);
    MeScroll.extend(i18nOption, GlobalOption.i18n);
    MeScroll.extend(diyOption, i18nOption[i18nType]);
    MeScroll.extend(diyOption, { down: GlobalOption.down, up: GlobalOption.up });
    let myOption = JSON.parse(JSON.stringify({ down: vm.down, up: vm.up }));
    MeScroll.extend(myOption, diyOption);
    vm.mescroll = new MeScroll(myOption, true);
    vm.mescroll.i18n = i18nOption;
    vm.$emit("init", vm.mescroll);
    const sys = getSystemInfoSync();
    if (sys.windowHeight)
      vm.windowHeight = sys.windowHeight;
    if (sys.windowBottom)
      vm.windowBottom = sys.windowBottom;
    if (sys.statusBarHeight)
      vm.statusBarHeight = sys.statusBarHeight;
    vm.mescroll.setBodyHeight(sys.windowHeight);
    vm.mescroll.resetScrollTo((y, t) => {
      if (typeof y === "string") {
        setTimeout(() => {
          let selector;
          if (y.indexOf("#") == -1 && y.indexOf(".") == -1) {
            selector = "#" + y;
          } else {
            selector = y;
            if (y.indexOf(">>>") != -1) {
              selector = y.split(">>>")[1].trim();
            }
          }
          createSelectorQuery().select(selector).boundingClientRect(function(rect) {
            if (rect) {
              let top = rect.top;
              top += vm.mescroll.getScrollTop();
              pageScrollTo({
                scrollTop: top,
                duration: t
              });
            } else {
              console.error(selector + " does not exist");
            }
          }).exec();
        }, 30);
      } else {
        pageScrollTo({
          scrollTop: y,
          duration: t
        });
      }
    });
    if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null)
      ;
    else {
      vm.mescroll.optUp.toTop.safearea = vm.safearea;
    }
    $on("setMescrollGlobalOption", (options) => {
      if (!options)
        return;
      let i18nType2 = options.i18n ? options.i18n.type : null;
      if (i18nType2 && vm.mescroll.i18n.type != i18nType2) {
        vm.mescroll.i18n.type = i18nType2;
        mescrollI18n.setType(i18nType2);
        MeScroll.extend(options, vm.mescroll.i18n[i18nType2]);
      }
      if (options.down) {
        let down = MeScroll.extend({}, options.down);
        vm.mescroll.optDown = MeScroll.extend(down, vm.mescroll.optDown);
      }
      if (options.up) {
        let up = MeScroll.extend({}, options.up);
        vm.mescroll.optUp = MeScroll.extend(up, vm.mescroll.optUp);
      }
    });
  },
  destroyed() {
    $off("setMescrollGlobalOption");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_view = index$g;
  const _component_mescroll_empty = resolveComponent("mescroll-empty");
  const _component_mescroll_top = resolveComponent("mescroll-top");
  return _ctx.wxsProp ? (openBlock(), createBlock(_component_v_uni_view, {
    key: 0,
    class: normalizeClass(["mescroll-body mescroll-render-touch", { "mescorll-sticky": $props.sticky }]),
    style: normalizeStyle({ "minHeight": $options.minHeight, "padding-top": $options.padTop, "padding-bottom": $options.padBottom }),
    onTouchstart: _ctx.wxsBiz.touchstartEvent,
    onTouchmove: _ctx.wxsBiz.touchmoveEvent,
    onTouchend: _ctx.wxsBiz.touchendEvent,
    onTouchcancel: _ctx.wxsBiz.touchendEvent,
    "change:prop": _ctx.wxsBiz.propObserver,
    prop: _ctx.wxsProp
  }, {
    default: withCtx(() => [
      $props.topbar && $data.statusBarHeight ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "mescroll-topbar",
        style: normalizeStyle({ height: $data.statusBarHeight + "px", background: $props.topbar })
      }, null, 8, ["style"])) : createCommentVNode("", true),
      createVNode(_component_v_uni_view, {
        class: "mescroll-body-content mescroll-wxs-content",
        style: normalizeStyle({ transform: $options.translateY, transition: $options.transition }),
        "change:prop": _ctx.wxsBiz.callObserver,
        prop: _ctx.callProp
      }, {
        default: withCtx(() => [
          $data.mescroll.optDown.use ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "mescroll-downwarp",
            style: normalizeStyle({ "background": $data.mescroll.optDown.bgColor, "color": $data.mescroll.optDown.textColor })
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "downwarp-content" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["downwarp-progress mescroll-wxs-progress", { "mescroll-rotate": $options.isDownLoading }]),
                    style: normalizeStyle({ "border-color": $data.mescroll.optDown.textColor, "transform": $options.downRotate })
                  }, null, 8, ["class", "style"]),
                  createVNode(_component_v_uni_view, { class: "downwarp-tip" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($options.downText), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          $data.isShowEmpty ? (openBlock(), createBlock(_component_mescroll_empty, {
            key: 1,
            option: $data.mescroll.optUp.empty,
            onEmptyclick: $options.emptyClick
          }, null, 8, ["option", "onEmptyclick"])) : createCommentVNode("", true),
          $data.mescroll.optUp.use && !$options.isDownLoading && $data.upLoadType !== 3 ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 2,
            class: "mescroll-upwarp",
            style: normalizeStyle({ "background": $data.mescroll.optUp.bgColor, "color": $data.mescroll.optUp.textColor })
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "upwarp-progress mescroll-rotate",
                    style: normalizeStyle({ "border-color": $data.mescroll.optUp.textColor })
                  }, null, 8, ["style"]),
                  createVNode(_component_v_uni_view, { class: "upwarp-tip" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.mescroll.optUp.textLoading), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512), [
                [vShow, $data.upLoadType === 1]
              ]),
              $data.upLoadType === 2 ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "upwarp-nodata"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($data.mescroll.optUp.textNoMore), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["style", "change:prop", "prop"]),
      $props.bottombar && $data.windowBottom > 0 ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: "mescroll-bottombar",
        style: normalizeStyle({ height: $data.windowBottom + "px" })
      }, null, 8, ["style"])) : createCommentVNode("", true),
      $props.safearea ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 2,
        class: "mescroll-safearea"
      })) : createCommentVNode("", true),
      createVNode(_component_mescroll_top, {
        modelValue: $data.isShowToTop,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.isShowToTop = $event),
        option: $data.mescroll.optUp.toTop,
        onClick: $options.toTopClick
      }, null, 8, ["modelValue", "option", "onClick"]),
      createVNode(_component_v_uni_view, {
        "change:prop": _ctx.renderBiz.propObserver,
        prop: _ctx.wxsProp
      }, null, 8, ["change:prop", "prop"])
    ]),
    _: 3
  }, 8, ["class", "style", "onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel", "change:prop", "prop"])) : createCommentVNode("", true);
}
if (typeof block0 === "function")
  block0(_sfc_main);
if (typeof block1 === "function")
  block1(_sfc_main);
const MescrollBody = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf9cb8c7"]]);
export {
  MescrollBody as M
};
