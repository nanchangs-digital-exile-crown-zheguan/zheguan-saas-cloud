/* __addonChunkWindiInjected:addon-shop-pages-goods-search_2f5ca4be */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("addon-shop-pages-goods-search_2f5ca4be",".bg-\\[\\#fff\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.bg-\\[var\\(--page-bg-color\\)\\]{\n  background-color: var(--page-bg-color);\n}.rounded-\\[100rpx\\]{\n  border-radius: 3.125rem;\n}.flex{\n  display: flex;\n}.items-center{\n  align-items: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-500{\n  font-weight: 500;\n}.h-\\[120rpx\\]{\n  height: 3.75rem;\n}.h-\\[68rpx\\]{\n  height: 2.125rem;\n}.text-\\[26rpx\\]{\n  font-size: 0.8125rem;\n}.text-\\[30rpx\\]{\n  font-size: 0.9375rem;\n}.text-\\[24rpx\\]{\n  font-size: 0.75rem;\n}.text-\\[28rpx\\]{\n  font-size: 0.875rem;\n}.\\!text-\\[24rpx\\]{\n  font-size: 0.75rem !important;\n}.mr-\\[18rpx\\]{\n  margin-right: 0.5625rem;\n}.-mb-\\[2rpx\\]{\n  margin-bottom: -0.0625rem;\n}.ml-\\[32rpx\\]{\n  margin-left: 1rem;\n}.min-h-\\[100vh\\]{\n  min-height: 100vh;\n}.px-\\[20rpx\\]{\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}.px-\\[30rpx\\]{\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}.text-\\[var\\(--text-color-light9\\)\\]{\n  color: var(--text-color-light9);\n}.text-\\[var\\(--text-color-light6\\)\\]{\n  color: var(--text-color-light6);\n}.content-box{\n  content: \"box\";\n}");
/* __addonChunkCssInjected:f1722889 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("f1722889",".addon-wrap-f1722889 .content{width:100vw;height:calc(100vh - env(safe-area-inset-bottom) - var(--status-bar-height));height:calc(100vh - constant(safe-area-inset-bottom) - var(--status-bar-height));background:#ffffff}.addon-wrap-f1722889 .search-content{box-sizing:border-box;background:#f6f6f6}.addon-wrap-f1722889 .history{width:100%;box-sizing:border-box}.addon-wrap-f1722889 .history .history-box{width:100%;height:100%;background:#f6f6f6;padding:.5rem .625rem 0;box-sizing:border-box;overflow:hidden}.addon-wrap-f1722889 .history .history-box .history-top{width:100%;display:flex;justify-content:space-between;align-items:center}.addon-wrap-f1722889 .history .history-box .history-top .title{font-size:.875rem}.addon-wrap-f1722889 .history .history-box .history-top .iconfont{color:var(--text-color-light9);font-size:.875rem}.addon-wrap-f1722889 .history .history-box .history-bottom{width:100%;padding-top:.625rem;position:relative}.addon-wrap-f1722889 .history .history-box .history-bottom .history-li{display:inline-block;margin-right:.625rem;margin-bottom:.46875rem;max-width:100%}.addon-wrap-f1722889 .history .history-box .history-bottom .history-li uni-view{line-height:1.75rem;background:var(--temp-bg)!important;height:1.75rem;color:#333!important;margin:0 0 .125rem!important;padding:0 .75rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:3.125rem;font-size:.75rem}.addon-wrap-f1722889 .history .history-box .history-bottom .history-li.history_more{margin-right:0;position:absolute;bottom:0;right:0}.addon-wrap-f1722889 .history .history-box .history-bottom .history-li.history_more .content-box{box-shadow:.0625rem .0625rem .25rem rgba(0,0,0,.1)}");
import { j as getStorageSync, n as setStorageSync, c as createSelectorQuery, u as upx2px, o as showModal, a as index$i, I as Input, i as index$g } from "./uni-h5.es.7545a186.js";
import "./modal.8c1bc6e1.js";
import "./text.99ce2b32.js";
import "./input.18765527.js";
import { defineComponent, ref, nextTick, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createCommentVNode, withModifiers, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString } from "/wap/assets/shared/vue.js";
import { o as onLoad, d as onShow } from "./uni-app.es.9cb86cc0.js";
import { m as useConfigStore, r as redirect } from "./common.f536f441.js";
import { j as getGoodsConfigSearch } from "./goods.3180989e.js";
import "./resize-sensor.8ba09891.js";
import "./route.c60967f7.js";
import "./u-icon.vue_vue_type_style_index_0_scoped_2d10e721_lang.9f4381bd.js";
import "./u-transition.vue_vue_type_style_index_0_scoped_6a21edd6_lang.c022791a.js";
import "./u-image.vue_vue_type_style_index_0_scoped_febc2405_lang.71fdadb2.js";
import "./scroll-view.29370e9b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import "/wap/assets/shared/pinia.js";
import "/wap/assets/shared/vue-i18n.js";
import "./entry.172aa559.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  setup(__props) {
    const inputValue = ref("");
    const historyList = ref([]);
    const isAllHistory = ref(false);
    const config = ref({});
    onLoad((options) => {
      getStorageSync("goodsSearchHistory") ? "" : setStorageSync("goodsSearchHistory", []);
    });
    onShow(() => {
      inputValue.value = "";
      findHistoryList();
      getGoodsConfigSearchFn();
      nextTick(() => {
        getHistoryHeight();
      });
    });
    const findHistoryList = () => {
      historyList.value = getStorageSync("goodsSearchHistory").reverse();
    };
    const deleteHistoryList = () => {
      showModal({
        title: "提示",
        content: "确认删除全部历史记录？",
        confirmColor: useConfigStore().themeColor["--primary-color"],
        success: (res) => {
          if (res.confirm) {
            setStorageSync("goodsSearchHistory", []);
            findHistoryList();
          }
        }
      });
    };
    const getGoodsConfigSearchFn = () => {
      getGoodsConfigSearch().then((res) => {
        config.value = res.data;
        if (config.value.search_words) {
          config.value.search_words = config.value.search_words.filter((word) => word && word.trim() !== "");
        }
      });
    };
    const search2 = () => {
      if (config.value.default_word && inputValue.value.trim() == "")
        inputValue.value = config.value.default_word;
      let historyList2 = getStorageSync("goodsSearchHistory");
      let array = [];
      if (historyList2.length) {
        array = historyList2.filter((v) => {
          return v != inputValue.value.trim();
        });
        if (inputValue.value.trim())
          array.push(inputValue.value.trim());
      } else if (inputValue.value.trim()) {
        array.push(inputValue.value.trim());
      }
      setStorageSync("goodsSearchHistory", array);
      redirect({
        url: "/addon/shop/pages/goods/list",
        param: { goods_name: encodeURIComponent(inputValue.value) },
        mode: "navigateTo"
      });
    };
    const otherSearch = (e) => {
      inputValue.value = e;
      search2();
    };
    const getHistoryHeight = () => {
      const query = createSelectorQuery().in(this);
      query.select("#history-list").boundingClientRect((data) => {
        if (data && data.height > upx2px(70) * 2 + upx2px(35) * 2) {
          isAllHistory.value = true;
        }
      }).exec();
    };
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_input = Input;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor()),
        class: "bg-[var(--page-bg-color)] min-h-[100vh]"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "flex items-center px-[20rpx] h-[120rpx]" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "h-[68rpx] bg-[#fff] px-[30rpx] flex items-center rounded-[100rpx] flex-1" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-sousuo-duanV6xx1 text-[var(--text-color-light9)] text-[26rpx] mr-[18rpx]" }),
                  createVNode(_component_v_uni_input, {
                    class: "text-[28rpx] flex-1",
                    maxlength: "50",
                    type: "text",
                    modelValue: inputValue.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                    placeholder: config.value.default_word ? config.value.default_word : "请搜索您想要的商品",
                    "confirm-type": "search",
                    placeholderClass: "text-[var(--text-color-light9)] text-[28rpx]",
                    onConfirm: search2
                  }, null, 8, ["modelValue", "placeholder"]),
                  inputValue.value ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 0,
                    class: "nc-iconfont nc-icon-cuohaoV6xx1 text-[24rpx] text-[var(--text-color-light9)]",
                    onClick: _cache[1] || (_cache[1] = ($event) => inputValue.value = "")
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, {
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => search2(), ["stop"])),
                class: "text-[26rpx] ml-[32rpx] -mb-[2rpx]"
              }, {
                default: withCtx(() => [
                  createTextVNode("搜索")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "search-content" }, {
            default: withCtx(() => [
              historyList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "history"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "history-box" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "history-top" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "title font-500" }, {
                            default: withCtx(() => [
                              createTextVNode("历史搜索")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_uni_view, {
                            class: "icon nc-iconfont nc-icon-shanchu-yuangaizhiV6xx !text-[24rpx] text-[var(--text-color-light6)]",
                            onClick: deleteHistoryList
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, {
                        class: "history-bottom",
                        id: "history-list",
                        style: normalizeStyle({ maxHeight: !isAllHistory.value ? "100%" : "148rpx" })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(historyList.value, (item, index) => {
                            return openBlock(), createElementBlock(Fragment, { key: index }, [
                              item ? (openBlock(), createBlock(_component_v_uni_view, {
                                key: 0,
                                class: "history-li",
                                onClick: ($event) => otherSearch(item)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true)
                            ], 64);
                          }), 128)),
                          isAllHistory.value ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            class: "history-li history_more",
                            onClick: _cache[3] || (_cache[3] = ($event) => isAllHistory.value = false)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_view, { class: "content-box" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "text-[30rpx] nc-iconfont nc-icon-xiaV6xx" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              config.value.search_words && config.value.search_words.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 1,
                class: "history"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "history-box" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, { class: "history-top" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "title font-500" }, {
                            default: withCtx(() => [
                              createTextVNode("热门搜索")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "history-bottom" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(config.value.search_words, (item, index) => {
                            return openBlock(), createElementBlock(Fragment, { key: index }, [
                              item ? (openBlock(), createBlock(_component_v_uni_view, {
                                key: 0,
                                class: "history-li",
                                onClick: ($event) => otherSearch(item)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_view, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true)
                            ], 64);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const search_vue_vue_type_style_index_0_scoped_f1722889_lang = "";
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1722889"]]);
export {
  search as default
};
