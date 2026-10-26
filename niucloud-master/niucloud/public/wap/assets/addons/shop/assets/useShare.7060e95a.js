import { j as getStorageSync } from "./uni-h5.es.7545a186.js";
import { a as useSystemStore, n as isWeixinBrowser, e as currRoute, i as img, v as currShareRoute } from "./common.f536f441.js";
import "/wap/assets/shared/vue.js";
import { a as getShareInfo } from "./diy.06cb6bf8.js";
import { w as wechat } from "./wechat.1afe9cea.js";
const useShare = () => {
  let wechatOptions = {};
  let weappOptions = {};
  useSystemStore();
  const wechatInit = () => {
    if (!isWeixinBrowser())
      return;
    wechat.init();
  };
  const wechatShare = () => {
    if (!isWeixinBrowser())
      return;
    wechat.share(wechatOptions);
  };
  const getQuery = () => {
    let query = resolveShareRoute().params;
    let wap_member_id = getStorageSync("wap_member_id");
    if (wap_member_id) {
      query.mid = wap_member_id;
    }
    let queryStr = [];
    for (let key in query) {
      queryStr.push(key + "=" + query[key]);
    }
    return queryStr;
  };
  const resolveShareRoute = () => {
    const route = "/" + currRoute();
    const params = currShareRoute().params;
    if (route.indexOf("/app/pages/addon-universal") != -1 && params._orig) {
      const orig = decodeURIComponent(params._orig);
      const [origPath, origQuery] = orig.split("?");
      const origParams = {};
      if (origQuery) {
        origQuery.split("&").forEach((kv) => {
          if (!kv)
            return;
          const idx = kv.indexOf("=");
          if (idx == -1)
            origParams[kv] = "";
          else
            origParams[kv.slice(0, idx)] = decodeURIComponent(kv.slice(idx + 1));
        });
      }
      return { route: origPath, params: origParams };
    }
    return { route, params };
  };
  const setShare = (options = {}) => {
    if (currRoute() == "" || currRoute().indexOf("app/pages/index/close") != -1 || currRoute().indexOf("app/pages/index/nosite") != -1)
      return;
    const shareRoute = resolveShareRoute();
    let queryStr = getQuery();
    let h5Link = "";
    h5Link = location.origin + location.pathname + (queryStr.length > 0 ? "?" + queryStr.join("&") : "");
    wechatOptions = {
      link: h5Link
    };
    weappOptions = {
      path: shareRoute.route + (queryStr.length > 0 ? "?" + queryStr.join("&") : ""),
      query: queryStr.join("&")
    };
    if (options && Object.keys(options).length) {
      if (options.wechat) {
        wechatOptions.title = options.wechat.title || "";
        wechatOptions.link = options.wechat.link || h5Link;
        wechatOptions.desc = options.wechat.desc || "";
        wechatOptions.imgUrl = options.wechat.url ? img(options.wechat.url) : "";
        wechatShare();
      }
      if (options.weapp) {
        weappOptions.title = options.weapp.title || "";
        if (options.weapp.path)
          weappOptions.path = options.weapp.path;
        weappOptions.imageUrl = options.weapp.url ? img(options.weapp.url) : "";
        useSystemStore().shareCallback = options.weapp.callback || null;
      }
      if (options.hasOwnProperty("isStop") && options.isStop) {
        useSystemStore().$patch((state) => {
          state.shareOptions = {
            wechatOptions,
            weappOptions
          };
        });
        return;
      }
    }
    getShareInfo({
      route: shareRoute.route,
      params: JSON.stringify(shareRoute.params)
    }).then((res) => {
      var _a, _b;
      let data = res.data;
      let wechat2 = data.wechat;
      if (wechat2) {
        wechatOptions.title = wechat2.title ? wechat2.title : (_a = options.wechat) == null ? void 0 : _a.title;
        wechatOptions.desc = wechat2.desc ? wechat2.desc : (_b = options.wechat) == null ? void 0 : _b.desc;
        wechatOptions.imgUrl = wechat2.url ? img(wechat2.url) : "";
      } else {
        wechatOptions.title = document ? document.title : "";
        wechatOptions.desc = "";
      }
      wechatShare();
      let weapp = data.weapp;
      if (weapp) {
        weappOptions.title = weapp.title;
        weappOptions.imageUrl = weapp.url ? img(weapp.url) : "";
      }
      useSystemStore().$patch((state) => {
        state.shareOptions = {
          wechatOptions,
          weappOptions
        };
      });
    });
    useSystemStore().$patch((state) => {
      state.shareOptions = {
        wechatOptions,
        weappOptions
      };
    });
  };
  const shareApp = (options = {}) => {
  };
  const shareTime = (options = {}) => {
  };
  const disableShare = () => {
    if (isWeixinBrowser()) {
      wechat.init(() => {
        wechat.disableShare();
      });
    }
  };
  return {
    wechatInit,
    setShare,
    onShareAppMessage: shareApp,
    onShareTimeline: shareTime,
    disableShare
  };
};
export {
  useShare as u
};
