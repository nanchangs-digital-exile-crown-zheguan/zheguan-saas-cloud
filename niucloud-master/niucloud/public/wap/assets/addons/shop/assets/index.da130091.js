/* __addonChunkWindiInjected:index_da130091 */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("index_da130091",".flex{\n  display: flex;\n}.flex-col{\n  flex-direction: column;\n}.items-center{\n  align-items: center;\n}.flex-1{\n  flex: 1 1 0%;\n}.font-bold{\n  font-weight: 700;\n}.text-\\[38rpx\\]{\n  font-size: 1.1875rem;\n}.mt-\\[20rpx\\]{\n  margin-top: 0.625rem;\n}.mb-\\[30rpx\\]{\n  margin-bottom: 0.9375rem;\n}.pt-\\[20rpx\\]{\n  padding-top: 0.625rem;\n}.text-left{\n  text-align: left;\n}.text-\\[\\#999\\]{\n  --tw-text-opacity: 1;\n  color: rgba(153, 153, 153, var(--tw-text-opacity));\n}.w-full{\n  width: 100%;\n}");
import { m as getCurrentPages$1, j as getStorageSync, z as removeStorageSync, l as setNavigationBarTitle, n as setStorageSync, s as showToast, i as index$g, a as index$i } from "./uni-h5.es.7545a186.js";
import "./text.99ce2b32.js";
import { ref, reactive, computed, defineComponent, onMounted, watch, openBlock, createBlock, normalizeStyle, withCtx, withDirectives, createVNode, vShow, unref, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode } from "/wap/assets/shared/vue.js";
import { o as onLoad, d as onShow, e as onHide, c as onUnload, b as onPageScroll } from "./uni-app.es.9cb86cc0.js";
import { k as useDiyStore, i as img, l as deepClone, Q as getValidTime } from "./common.f536f441.js";
import { g as getDiyFormInfo } from "./diy_form.277162a3.js";
import { d as diyGroup } from "./index.ee50633b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
function useDiyForm(params = {}) {
  const loading = ref(true);
  const diyStore = useDiyStore();
  const form_id = ref(params.form_id || 0);
  ref(params.name || "");
  ref("");
  const currRoute = ref("");
  const requestData = reactive({});
  ref(params.needLogin || false);
  const diyData = reactive({
    pageMode: "diy",
    title: "",
    global: {},
    value: [],
    status: 0
  });
  const getLoading = () => {
    return loading.value;
  };
  const data = computed(() => {
    if (diyStore.mode == "decorate") {
      return diyStore;
    } else {
      return diyData;
    }
  });
  const isShowTopTabbar = ref(false);
  const pageStyle = () => {
    let style = "";
    if (data.value.global.pageStartBgColor) {
      if (data.value.global.pageStartBgColor && data.value.global.pageEndBgColor)
        style += `background:linear-gradient(${data.value.global.pageGradientAngle},${data.value.global.pageStartBgColor},${data.value.global.pageEndBgColor});`;
      else
        style += "background-color:" + data.value.global.pageStartBgColor + ";";
    }
    if (data.value.global.bottomTabBar && data.value.global.bottomTabBar.isShow) {
      style += "min-height:calc(100vh - 50px);";
    } else {
      style += "min-height:calc(100vh);";
    }
    if (data.value.global.bgUrl) {
      style += `background-image:url('${img(data.value.global.bgUrl)}');`;
    }
    if (data.value.global.bgHeightScale) {
      style += `background-size: 100% ${data.value.global.bgHeightScale}%;`;
    }
    return style;
  };
  const onLoadLifeCycle = (callback = null) => {
    onLoad((option) => {
      diyStore.mode = option.mode || "";
      if (diyStore.mode == "decorate") {
        requestData.status = 1;
        requestData.error = [];
        loading.value = false;
      }
      if (option.form_record_id) {
        requestData.form_record_id = option.form_record_id;
      }
      form_id.value = option.form_id || "";
      getData(callback);
    });
  };
  const onShowLifeCycle = (callback = null) => {
    onShow(() => {
      if (callback)
        callback(requestData);
    });
  };
  const getData = (callback = null) => {
    let curPage = getCurrentPages$1();
    currRoute.value = curPage[curPage.length - 1] ? curPage[curPage.length - 1].route : "";
    let urlArr = [];
    if (getStorageSync("diyPageBlank")) {
      urlArr = getStorageSync("diyPageBlank");
    }
    if (!urlArr.length || urlArr.length && urlArr.indexOf(currRoute.value) == -1) {
      diyStore.topFixedStatus = "home";
    } else if (urlArr.length && urlArr.indexOf(currRoute.value) != -1) {
      diyStore.topFixedStatus = "diy";
    }
    if (diyStore.mode == "decorate") {
      diyStore.init();
    } else {
      if (!form_id.value)
        return;
      getDiyFormInfo({
        form_id: form_id.value
        // name: name.value, todo 暂时没用
        // template: template.value // todo 暂时没用
      }).then((res) => {
        Object.assign(requestData, res.data);
        diyData.status = res.data.status;
        if (requestData.value) {
          diyData.pageMode = requestData.mode;
          diyData.title = requestData.title;
          diyData.type = requestData.type;
          diyStore.id = requestData.form_id;
          let sources = requestData.value;
          let diyFormStorage = getStorageSync("diyFormStorage_" + diyStore.id);
          if (diyFormStorage) {
            const date = new Date();
            let currentTime = parseInt(date.getTime() / 1e3);
            if (diyFormStorage.validTime > currentTime) {
              if (diyFormStorage.components) {
                diyFormStorage.components.forEach((item) => {
                  for (let i = 0; i < sources.value.length; i++) {
                    if (sources.value[i].componentType == "diy_form" && item.id == sources.value[i].id) {
                      let comp = deepClone(item);
                      let field = deepClone(comp.field);
                      delete comp.field;
                      delete field.required;
                      delete field.unique;
                      delete field.autofill;
                      delete field.privacyProtection;
                      Object.assign(sources.value[i], comp);
                      Object.assign(sources.value[i].field, field);
                      break;
                    }
                  }
                });
              }
            } else {
              removeStorageSync("diyFormStorage_" + diyStore.id);
            }
          }
          diyStore.value = sources.value;
          diyData.global = sources.global;
          diyData.value = sources.value;
          diyData.value.forEach((item, index) => {
            item.componentIsShow = true;
            if (item.isHidden) {
              diyData.value.splice(index, 1);
            } else {
              item.pageStyle = "";
              if (item.componentName != "FormSubmit" || item.componentName == "FormSubmit" && item.btnPosition != "hover_screen_bottom") {
                if (item.pageStartBgColor) {
                  if (item.pageStartBgColor && item.pageEndBgColor)
                    item.pageStyle += `background:linear-gradient(${item.pageGradientAngle},${item.pageStartBgColor},${item.pageEndBgColor});`;
                  else
                    item.pageStyle += "background-color:" + item.pageStartBgColor + ";";
                }
                if (item.margin) {
                  if (item.margin.top > 0) {
                    item.pageStyle += "padding-top:" + item.margin.top * 2 + "rpx;";
                  }
                  item.pageStyle += "padding-bottom:" + item.margin.bottom * 2 + "rpx;";
                  item.pageStyle += "padding-right:" + item.margin.both * 2 + "rpx;";
                  item.pageStyle += "padding-left:" + item.margin.both * 2 + "rpx;";
                }
              }
            }
          });
          isShowTopTabbar.value = diyData.value.some((item) => {
            return item && item.position && item.position == "top_fixed";
          });
          setNavigationBarTitle({
            title: diyData.title
          });
        }
        loading.value = false;
        if (callback)
          callback(requestData);
      });
    }
  };
  const onHideLifeCycle = (callback = null) => {
    onHide(() => {
      let url = [];
      if (getStorageSync("diyPageBlank")) {
        url = getStorageSync("diyPageBlank");
      }
      if (url.length) {
        url = Array.from(new Set(url));
        url.forEach((item, index, arr) => {
          if (item == currRoute.value) {
            arr.splice(index, 1);
          }
        });
      }
      if (diyStore.topFixedStatus == "diy") {
        url.push(currRoute.value);
      }
      setStorageSync("diyPageBlank", url);
      if (callback)
        callback();
    });
  };
  const onUnloadLifeCycle = () => {
    onUnload(() => {
    });
  };
  const onPageScrollLifeCycle = () => {
    onPageScroll((e) => {
      if (e.scrollTop > 0) {
        diyStore.scrollTop = e.scrollTop;
      }
    });
  };
  return {
    getLoading,
    requestData,
    data: data.value,
    isShowTopTabbar,
    pageStyle,
    onLoad: onLoadLifeCycle,
    onShow: onShowLifeCycle,
    onHide: onHideLifeCycle,
    onUnload: onUnloadLifeCycle,
    onPageScroll: onPageScrollLifeCycle,
    getData
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["form_id", "relate_id", "storage_name", "form_border"],
  setup(__props, { expose }) {
    const props = __props;
    const diy = useDiyForm({
      form_id: props.form_id,
      needLogin: false
      // 不检测登录，调用业务自行处理
    });
    const diyGroupRef = ref(null);
    const requestData = computed(() => {
      return diy.requestData;
    });
    const diyFormData = reactive({});
    onMounted(() => {
      diy.getData(() => {
        var _a;
        diyFormData.status = diy.data.status;
        if (diyFormData.status && requestData.value.error.length == 0) {
          diyFormData.title = diy.data.title;
          diyFormData.global = diy.data.global;
          if (diyFormData.global) {
            diyFormData.global.topStatusBar.isShow = false;
            diyFormData.global.bottomTabBar.isShow = false;
          }
          let value = [];
          if (props.form_border == "none") {
            diyFormData.global.borderControl = false;
          }
          diy.data.value.forEach((item) => {
            if (item.componentType == "diy_form" && item.componentName != "FormSubmit") {
              value.push(item);
            }
          });
          diyFormData.value = deepClone(value);
          diyFormData.componentRefs = null;
          (_a = diyGroupRef.value) == null ? void 0 : _a.refresh();
          watchFormData();
        }
      });
    });
    const watchFormData = () => {
      watch(
        () => diyFormData.value,
        (newValue, oldValue) => {
          if (newValue) {
            let formData = {
              validTime: getValidTime(5),
              // 缓存数据有效期为5分钟
              components: []
            };
            newValue.forEach((item) => {
              if (item.componentType == "diy_form" && item.componentName != "FormSubmit" && item.field.cache) {
                let field = deepClone(item.field);
                delete field.remark;
                delete field.detailComponent;
                delete field.default;
                formData.components.push({
                  id: item.id,
                  componentName: item.componentName,
                  componentType: item.componentType,
                  componentTitle: item.componentTitle,
                  isHidden: item.isHidden,
                  field
                });
              }
            });
            if (formData.components.length) {
              setStorageSync("diyFormStorage_" + props.form_id, formData);
            }
          }
        },
        { deep: true }
      );
    };
    const verify = () => {
      var _a;
      if (!diyFormData.status)
        return true;
      if (!diyFormData.value)
        return true;
      if (!requestData.value || ((_a = requestData.value.error) == null ? void 0 : _a.length) > 0)
        return true;
      let allPass = true;
      let componentRefs = diyGroupRef.value.getFormRef().componentRefs;
      for (let i = 0; i < diyFormData.value.length; i++) {
        let item = diyFormData.value[i];
        if (item.field.required || item.field.value) {
          let refKey = `diy${item.componentName}Ref`;
          let isBreak = false;
          if (componentRefs[refKey]) {
            for (let k = 0; k < componentRefs[refKey].length; k++) {
              let compRef = componentRefs[refKey][k];
              let verify2 = compRef.verify();
              if (verify2 && !verify2.code) {
                isBreak = true;
                showToast({
                  title: verify2.message,
                  icon: "none"
                });
                break;
              }
            }
            if (isBreak) {
              allPass = false;
              break;
            }
          }
        }
      }
      if (!allPass)
        return false;
      const data = {
        form_id: props.form_id,
        value: getStorageSync("diyFormStorage_" + props.form_id),
        relate_id: props.relate_id || 0
        // 关联业务id
      };
      if (props.storage_name) {
        setStorageSync(props.storage_name, data);
      }
      return allPass;
    };
    const getData = () => {
      return {
        form_id: props.form_id,
        value: diyFormData.value,
        relate_id: props.relate_id || 0
        // 关联业务id
      };
    };
    const clearStorage = (keys = []) => {
      removeStorageSync("diyFormStorage_" + props.form_id);
      if (props.storage_name)
        removeStorageSync(props.storage_name);
      if (keys) {
        keys.forEach((key) => {
          removeStorageSync(key);
        });
      }
    };
    diy.onHide();
    diy.onUnload();
    expose({
      verify,
      getData,
      clearStorage
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        style: normalizeStyle(_ctx.themeColor())
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_v_uni_view, { class: "diy-template-wrap" }, {
            default: withCtx(() => [
              createVNode(diyGroup, {
                ref_key: "diyGroupRef",
                ref: diyGroupRef,
                data: diyFormData
              }, null, 8, ["data"])
            ]),
            _: 1
          }, 512), [
            [vShow, unref(requestData).status == 1 && unref(requestData).error && unref(requestData).error.length === 0 && !unref(diy).getLoading()]
          ]),
          unref(requestData).error && unref(requestData).error.length > 0 && unref(diy).data == "DIY_FORM" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "flex flex-col"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(requestData).error.slice(0, 1), (item, index) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  class: "flex-1 flex flex-col items-center pt-[20rpx]",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, { class: "nc-iconfont nc-icon-tanhaoV6mm text-[#ccc] mb-[30rpx] !text-[100rpx]" }),
                    createVNode(_component_v_uni_view, { class: "text-[38rpx] font-bold mt-3" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_view, { class: "p-[30rpx] mt-[20rpx] w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "flex w-full" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "w-[30%] text-[#999] text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_view, { class: "w-[70%] text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.desc), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_fc269919_lang = "";
const diyForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc269919"]]);
export {
  diyForm as d
};
