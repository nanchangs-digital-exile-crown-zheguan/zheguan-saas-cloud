/* __addonChunkWindiInjected:tabbar_5b67b6e8 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("tabbar_5b67b6e8",".bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.flex{\n  display: flex;\n}");
/* __addonChunkCssInjected:ed2788ef */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("ed2788ef",".addon-wrap-ed2788ef .u-empty,.addon-wrap-ed2788ef .u-empty__wrap,.addon-wrap-ed2788ef .u-tabs,.addon-wrap-ed2788ef .u-tabs__wrapper,.addon-wrap-ed2788ef .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-ed2788ef .u-tabs__wrapper__scroll-view,.addon-wrap-ed2788ef .u-tabs__wrapper__nav,.addon-wrap-ed2788ef .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-ed2788ef .u-tabbar-item{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;width:100%;height:100%}.addon-wrap-ed2788ef .u-tabbar-item__icon{display:flex;flex-direction:row;position:relative;width:4.6875rem;justify-content:center}.addon-wrap-ed2788ef .u-tabbar-item__text{margin-top:2px;font-size:12px;color:#606266}");
import { i as index$g, a as index$i, c as createSelectorQuery, n as setStorageSync } from "./uni-h5.es.7545a186.js";
import { _ as __easycom_3 } from "./u-icon.ceb3960f.js";
import { resolveDynamicComponent, openBlock, createBlock, normalizeStyle, withCtx, createVNode, createElementBlock, Fragment, renderSlot, createTextVNode, toDisplayString, defineComponent, reactive, watch, computed, getCurrentInstance, nextTick, unref, renderList, createCommentVNode } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { _ as __easycom_1 } from "./u-badge.c0af0a5e.js";
import "./text.99ce2b32.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { a as addStyle } from "./route.c60967f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
import { _ as __easycom_8 } from "./u-tabbar.b646ecf0.js";
import { m as useConfigStore, s as getActiveAddonPageRoute, v as currShareRoute, e as currRoute, i as img, j as cloneDeep, r as redirect } from "./common.f536f441.js";
const props = {
  props: {
    // item标签的名称，作为与u-tabbar的value参数匹配的标识符
    name: {
      type: [String, Number, null],
      default: () => defProps.tabbarItem.name
    },
    // uView内置图标或者绝对路径的图片
    icon: {
      icon: String,
      default: () => defProps.tabbarItem.icon
    },
    // 右上角的角标提示信息
    badge: {
      type: [String, Number, null],
      default: () => defProps.tabbarItem.badge
    },
    // 是否显示圆点，将会覆盖badge参数
    dot: {
      type: Boolean,
      default: () => defProps.tabbarItem.dot
    },
    // 描述文本
    text: {
      type: String,
      default: () => defProps.tabbarItem.text
    },
    // 控制徽标的位置，对象或者字符串形式，可以设置top和right属性
    badgeStyle: {
      type: [Object, String],
      default: () => defProps.tabbarItem.badgeStyle
    }
  }
};
const uTabbarItem_vue_vue_type_style_index_0_scoped_ed2788ef_lang = "";
const _sfc_main$1 = {
  name: "u-tabbar-item",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      isActive: false,
      // 是否处于激活状态
      parentData: {
        value: null,
        activeColor: "",
        inactiveColor: ""
      }
    };
  },
  //  微信小程序中 options 选项
  options: {
    virtualHost: true
    //将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
  },
  created() {
    this.init();
  },
  emits: ["click", "change"],
  methods: {
    addStyle,
    init() {
      this.updateParentData();
      if (!this.parent)
        ;
      const index = this.parent.children.indexOf(this);
      this.isActive = (this.name || index) === this.parentData.value;
    },
    updateParentData() {
      this.getParentData("u-tabbar");
    },
    // 此方法将会被父组件u-tabbar调用
    updateFromParent() {
      this.init();
    },
    clickHandler() {
      this.$nextTick(() => {
        const index = this.parent.children.indexOf(this);
        const name = this.name || index;
        if (name !== this.parent.value) {
          this.parent.$emit("change", name);
        }
        this.$emit("click", name);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveEasycom(resolveDynamicComponent("u-icon"), __easycom_3);
  const _component_u_badge = resolveEasycom(resolveDynamicComponent("u-badge"), __easycom_1);
  const _component_v_uni_view = index$g;
  const _component_v_uni_text = index$i;
  return openBlock(), createBlock(_component_v_uni_view, {
    class: "u-tabbar-item cursor-pointer",
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)]),
    onClick: $options.clickHandler
  }, {
    default: withCtx(() => [
      createVNode(_component_v_uni_view, { class: "u-tabbar-item__icon" }, {
        default: withCtx(() => [
          _ctx.icon ? (openBlock(), createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor,
            size: 20
          }, null, 8, ["name", "color"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $data.isActive ? renderSlot(_ctx.$slots, "active-icon", { key: 0 }, void 0, true) : renderSlot(_ctx.$slots, "inactive-icon", { key: 1 }, void 0, true)
          ], 64)),
          createVNode(_component_u_badge, {
            absolute: "",
            offset: [0, _ctx.dot ? "34rpx" : _ctx.badge > 9 ? "14rpx" : "20rpx"],
            customStyle: _ctx.badgeStyle,
            isDot: _ctx.dot,
            value: _ctx.badge || (_ctx.dot ? 1 : null),
            show: _ctx.dot || _ctx.badge > 0
          }, null, 8, ["offset", "customStyle", "isDot", "value", "show"])
        ]),
        _: 3
      }),
      renderSlot(_ctx.$slots, "text", {}, () => [
        createVNode(_component_v_uni_text, {
          class: "u-tabbar-item__text",
          style: normalizeStyle({
            color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor
          })
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.text), 1)
          ]),
          _: 1
        }, 8, ["style"])
      ], true)
    ]),
    _: 3
  }, 8, ["style", "onClick"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-ed2788ef"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tabbar",
  props: {
    addon: {
      type: String,
      default: ""
    },
    color: {
      type: Object,
      default: () => {
        return {
          backgroundColor: "",
          // 背景色
          textColor: "",
          // 文字颜色
          textHoverColor: ""
          // 文字选中颜色
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props2 = __props;
    let addon = props2.addon;
    const configStore = useConfigStore();
    if (!addon && configStore.addon) {
      addon = configStore.addon;
    }
    const tabbar = reactive({});
    const setTabbar = () => {
      const currentAddon = props2.addon || configStore.addon || addon || "";
      let list = cloneDeep(useConfigStore().tabbarList);
      if (list.length == 1) {
        Object.assign(tabbar, list[0]);
      } else {
        let isExist = false;
        for (let i = 0; i < list.length; i++) {
          if (list[i].key == currentAddon) {
            Object.assign(tabbar, list[i]);
            isExist = true;
            break;
          }
        }
        if (!isExist) {
          let count = 0;
          let singleTabbar = {};
          try {
            if (list) {
              list.forEach((item) => {
                if (item.info.type == "app") {
                  count++;
                  singleTabbar = item;
                }
              });
            }
            if (count == 1) {
              Object.assign(tabbar, singleTabbar);
            }
          } catch (e) {
          }
        }
      }
      if (props2.color) {
        for (let key in props2.color) {
          if (props2.color[key] && tabbar.value[key]) {
            tabbar.value[key] = props2.color[key];
          }
        }
      }
    };
    setTabbar();
    watch(
      () => useConfigStore().addon,
      (newAddon, oldAddon) => {
        if (!props2.addon && newAddon !== oldAddon) {
          addon = newAddon;
          setTabbar();
        }
      },
      { immediate: true, deep: true }
      // 立即执行 + 深度监听
    );
    watch(
      () => props2.addon,
      (newValue, oldValue) => {
        if (newValue) {
          setTabbar();
        }
      },
      { immediate: true }
    );
    watch(
      () => props2.color,
      (newValue, oldValue) => {
        if (newValue && oldValue && newValue != oldValue) {
          setTabbar();
        }
      },
      { immediate: true, deep: true }
    );
    if (!props2.addon) {
      watch(
        () => useConfigStore().tabbarList,
        (newValue, oldValue) => {
          if (newValue) {
            setTabbar();
          }
        },
        { deep: true, immediate: true }
      );
    }
    watch(
      () => useConfigStore().tabbarList,
      (newValue, oldValue) => {
        if (newValue && newValue.length) {
          setTabbar();
        }
      },
      { deep: true }
    );
    const value = computed(() => {
      const activeRoute = getActiveAddonPageRoute();
      if (activeRoute)
        return activeRoute;
      let query = currShareRoute().params;
      let str = [];
      for (let key in query) {
        str.push(key + "=" + query[key]);
      }
      return "/" + currRoute() + (str.length > 0 ? "?" + str.join("&") : "");
    });
    const normalizeRoute = (r) => {
      if (!r)
        return "";
      let s = r.split("?")[0];
      s = s.replace(/\/+/g, "/");
      if (s.startsWith("/"))
        s = s.slice(1);
      if (s.endsWith("/"))
        s = s.slice(0, -1);
      while (s.endsWith("/index"))
        s = s.slice(0, -"/index".length);
      return s;
    };
    const normalizedValue = computed(() => normalizeRoute(value.value));
    const itemBtn = (url) => {
      if (url.indexOf("http") != -1 || url.indexOf("http") != -1) {
        window.location.href = url;
      } else {
        let query = currShareRoute().params;
        let str = [];
        for (let key in query) {
          str.push(key + "=" + query[key]);
        }
        if (url == "/" + currRoute() && !str.length)
          return;
        redirect({ url, mode: "reLaunch" });
      }
    };
    const instance = getCurrentInstance();
    nextTick(() => {
      const query = createSelectorQuery().in(instance);
      query.select(".tab-bar-placeholder").boundingClientRect((data) => {
        let height = data ? data.height : 0;
        let tabbarInfo = {
          height
        };
        setStorageSync("tabbarInfo", tabbarInfo);
      }).exec();
    });
    return (_ctx, _cache) => {
      const _component_u_tabbar_item = resolveEasycom(resolveDynamicComponent("u-tabbar-item"), __easycom_0);
      const _component_v_uni_view = index$g;
      const _component_u_tabbar = resolveEasycom(resolveDynamicComponent("u-tabbar"), __easycom_8);
      return tabbar && Object.keys(tabbar).length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_u_tabbar, {
          value: unref(normalizedValue),
          zIndex: "9999",
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: false,
          "inactive-color": tabbar.value.textColor,
          "active-color": tabbar.value.textHoverColor,
          border: props2.border,
          class: "custom-tabbar"
        }, {
          default: withCtx(() => [
            createVNode(_component_v_uni_view, {
              class: "safe-area flex bg-white",
              style: normalizeStyle({ "background-color": tabbar.value.backgroundColor })
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(tabbar.value.list, (item) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    tabbar.value.type == 1 ? (openBlock(), createBlock(_component_u_tabbar_item, {
                      key: 0,
                      class: "py-[5rpx]",
                      "custom-style": { "background-color": tabbar.value.backgroundColor },
                      text: item.text,
                      icon: unref(img)(unref(normalizedValue) == normalizeRoute(item.link.url) ? item.iconSelectPath : item.iconPath),
                      name: normalizeRoute(item.link.url),
                      onClick: ($event) => itemBtn(item.link.url)
                    }, null, 8, ["custom-style", "text", "icon", "name", "onClick"])) : createCommentVNode("", true),
                    tabbar.value.type == 2 ? (openBlock(), createBlock(_component_u_tabbar_item, {
                      key: 1,
                      class: "py-[5rpx]",
                      "custom-style": { "background-color": tabbar.value.backgroundColor },
                      icon: unref(img)(unref(normalizedValue) == normalizeRoute(item.link.url) ? item.iconSelectPath : item.iconPath),
                      name: normalizeRoute(item.link.url),
                      onClick: ($event) => itemBtn(item.link.url)
                    }, null, 8, ["custom-style", "icon", "name", "onClick"])) : createCommentVNode("", true),
                    tabbar.value.type == 3 ? (openBlock(), createBlock(_component_u_tabbar_item, {
                      key: 2,
                      class: "py-[5rpx]",
                      "custom-style": { "background-color": tabbar.value.backgroundColor },
                      text: item.text,
                      name: normalizeRoute(item.link.url),
                      onClick: ($event) => itemBtn(item.link.url)
                    }, null, 8, ["custom-style", "text", "name", "onClick"])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
              ]),
              _: 1
            }, 8, ["style"])
          ]),
          _: 1
        }, 8, ["value", "inactive-color", "active-color", "border"]),
        createVNode(_component_v_uni_view, { class: "tab-bar-placeholder" })
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const tabbar_vue_vue_type_style_index_0_scoped_ae2d1083_lang = "";
const tabbar_vue_vue_type_style_index_1_scoped_ae2d1083_lang = "";
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae2d1083"]]);
export {
  __easycom_4 as _
};
