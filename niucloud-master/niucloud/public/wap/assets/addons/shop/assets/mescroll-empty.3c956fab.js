/* __addonChunkCssInjected:6608169c */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("6608169c",".addon-wrap-6608169c }.mescroll-empty.empty-fixed{z-index:99;position:absolute;top:3.125rem;left:0}.addon-wrap-6608169c .mescroll-empty .empty-icon{width:12.5rem;height:9.375rem}.addon-wrap-6608169c .mescroll-empty .empty-tip{font-size:.8125rem;color:var(--text-color-light9)}.addon-wrap-6608169c .mescroll-empty .empty-btn{margin-top:1.125rem;display:inline-block;min-width:6.875rem;height:2.0625rem;line-height:2.0625rem;font-size:.75rem;border:.03125rem solid var(--primary-color);border-radius:3.125rem;color:var(--primary-color)}.addon-wrap-6608169c .mescroll-empty .empty-btn:active{opacity:.75}");
import "./resize-sensor.8ba09891.js";
import { j as getStorageSync, n as setStorageSync, b as index$q, i as index$g } from "./uni-h5.es.7545a186.js";
import { i as img } from "./common.f536f441.js";
import { openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createVNode, createCommentVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const GlobalOption = {
  down: {
    // 其他down的配置参数也可以写,这里只展示了常用的配置:
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    native: false
    // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  },
  up: {
    // 其他up的配置参数也可以写,这里只展示了常用的配置:
    offset: 150,
    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: "https://www.mescroll.com/img/mescroll-totop.png",
      // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
      offset: 1e3,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000px
      right: 20,
      // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      width: 72
      // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
    },
    empty: {
      use: true,
      // 是否显示空布局
      icon: img("static/resource/images/system/empty.png")
      // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
    }
  },
  // 国际化配置
  i18n: {
    // 中文
    zh: {
      down: {
        textInOffset: "下拉刷新",
        // 下拉的距离在offset范围内的提示文本
        textOutOffset: "释放更新",
        // 下拉的距离大于offset范围的提示文本
        textLoading: "加载中 ...",
        // 加载中的提示文本
        textSuccess: "加载成功",
        // 加载成功的文本
        textErr: "加载失败"
        // 加载失败的文本
      },
      up: {
        textLoading: "加载中 ...",
        // 加载中的提示文本
        textNoMore: "",
        // 没有更多数据的提示文本
        empty: {
          tip: "暂无相关数据"
          // 空提示
        }
      }
    },
    // 英文
    en: {
      down: {
        textInOffset: "drop down refresh",
        textOutOffset: "release updates",
        textLoading: "loading ...",
        textSuccess: "loaded successfully",
        textErr: "loading failed"
      },
      up: {
        textLoading: "loading ...",
        textNoMore: "",
        empty: {
          tip: "~ absolutely empty ~"
        }
      }
    }
  }
};
const GlobalOption$1 = GlobalOption;
const mescrollI18n = {
  // 默认语言
  def: "zh",
  // 获取当前语言类型
  getType() {
    return getStorageSync("mescroll-i18n") || this.def;
  },
  // 设置当前语言类型
  setType(type) {
    setStorageSync("mescroll-i18n", type);
  }
};
const mescrollEmpty_vue_vue_type_style_index_0_scoped_6608169c_lang = "";
const _sfc_main = {
  props: {
    // empty的配置项: 默认为GlobalOption.up.empty
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  // 使用computed获取配置,用于支持option的动态配置
  computed: {
    // 图标
    icon() {
      if (this.option.icon != null) {
        return this.option.icon;
      } else {
        let i18nType = mescrollI18n.getType();
        if (this.option.i18n) {
          return this.option.i18n[i18nType].icon;
        } else {
          return GlobalOption$1.i18n[i18nType].up.empty.icon || GlobalOption$1.up.empty.icon;
        }
      }
    },
    // 文本提示
    tip() {
      if (this.option.tip != null) {
        return this.option.tip;
      } else {
        let i18nType = mescrollI18n.getType();
        if (this.option.i18n) {
          return this.option.i18n[i18nType].tip;
        } else {
          return GlobalOption$1.i18n[i18nType].up.empty.tip || GlobalOption$1.up.empty.tip;
        }
      }
    },
    // 按钮文本
    btnText() {
      if (this.option.i18n) {
        let i18nType = mescrollI18n.getType();
        return this.option.i18n[i18nType].btnText;
      } else {
        return this.option.btnText;
      }
    }
  },
  methods: {
    // 点击按钮
    emptyClick() {
      this.$emit("emptyclick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: normalizeClass(["mescroll-empty empty-page", { "empty-fixed": $props.option.fixed }]),
    style: normalizeStyle({ "z-index": $props.option.zIndex, top: $props.option.top })
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, null, {
        default: withCtx(() => [
          $options.icon ? (openBlock(), createBlock(_component_v_uni_image, {
            key: 0,
            class: "img",
            src: $options.icon,
            mode: "aspectFit"
          }, null, 8, ["src"])) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      $options.tip ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "desc"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($options.tip), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      $options.btnText ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: "btn",
        onClick: $options.emptyClick
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($options.btnText), 1)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["class", "style"]);
}
const MescrollEmpty = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6608169c"]]);
export {
  GlobalOption$1 as G,
  MescrollEmpty as M,
  mescrollI18n as m
};
