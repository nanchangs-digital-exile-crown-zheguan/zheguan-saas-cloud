/* __addonChunkWindiInjected:area-select_b46ccb5e */(function(i,c){if(typeof document==="undefined"||!c)return;const k="adw-"+i;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("area-select_b46ccb5e",".flex{\n  display: flex;\n}.font-500{\n  font-weight: 500;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}");
/* __addonChunkCssInjected:610ba5df */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("610ba5df",".addon-wrap-610ba5df .area-select-wrap{flex:1;padding-right:.3125rem}.addon-wrap-610ba5df .area-select-wrap.selected{color:var(--primary-color)}");
import { i as index$g, S as ScrollView } from "./uni-h5.es.7545a186.js";
import "./scroll-view.29370e9b.js";
import { _ as __easycom_7$1 } from "./u-popup.37f81450.js";
import { defineComponent, ref, reactive, watch, nextTick, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, withModifiers, createTextVNode, normalizeClass, toDisplayString, createCommentVNode, normalizeStyle, createElementBlock, Fragment, renderList } from "/wap/assets/shared/vue.js";
import { r as resolveEasycom } from "./uni-app.es.9cb86cc0.js";
import { $ as getAreaListByPid, a0 as getAreaByCode } from "./common.f536f441.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "area-select",
  props: {
    areaId: {
      type: Number,
      default: 0
    }
  },
  emits: ["complete"],
  setup(__props, { expose, emit: emits }) {
    const prop = __props;
    const show = ref(false);
    const areaList = reactive({
      province: [],
      city: [],
      district: []
    });
    const currSelect = ref("province");
    const selected = reactive({
      province: null,
      city: null,
      district: null
    });
    const scrollTop = ref(0);
    getAreaListByPid(0).then(({ data }) => {
      areaList.province = data;
    }).catch();
    watch(() => prop.areaId, (nval, oval) => {
      if (nval && !oval) {
        getAreaByCode(nval).then(({ data }) => {
          data.province && (selected.province = data.province);
          data.city && (selected.city = data.city);
          data.district && (selected.district = data.district);
        });
      }
    }, {
      immediate: true
    });
    watch(() => selected.province, () => {
      getAreaListByPid(selected.province.id).then(({ data }) => {
        areaList.city = data;
        currSelect.value = "city";
        if (selected.city) {
          let isExist = false;
          let selectedIndex = -1;
          for (let i = 0; i < data.length; i++) {
            if (selected.city.id == data[i].id) {
              isExist = true;
              selectedIndex = i;
              break;
            }
          }
          if (!isExist) {
            selected.city = null;
          } else {
            setTimeout(() => {
              scrollToSelected("city", selectedIndex);
            }, 100);
          }
        }
      }).catch();
    }, { deep: true });
    watch(() => selected.city, (nval) => {
      if (nval) {
        getAreaListByPid(selected.city.id).then(({ data }) => {
          areaList.district = data;
          currSelect.value = "district";
          if (selected.district) {
            let isExist = false;
            let selectedIndex = -1;
            for (let i = 0; i < data.length; i++) {
              if (selected.district.id == data[i].id) {
                isExist = true;
                selectedIndex = i;
                break;
              }
            }
            if (!isExist) {
              selected.district = null;
            } else {
              setTimeout(() => {
                scrollToSelected("district", selectedIndex);
              }, 100);
            }
          }
          if (!data.length) {
            currSelect.value = "city";
            emits("complete", selected);
            show.value = false;
          }
        }).catch();
      } else {
        areaList.district = [];
        selected.district = null;
      }
    }, { deep: true });
    const scrollToSelected = (type, selectedIndex) => {
      const itemHeight = 40;
      const targetScrollTop = Math.max(0, (selectedIndex - 2) * itemHeight);
      scrollTop.value = targetScrollTop;
    };
    const resetScrollTop = () => {
      scrollTop.value = 1;
      nextTick(() => {
        scrollTop.value = 0;
      });
    };
    watch(() => currSelect.value, (newVal) => {
      nextTick(() => {
        if (newVal === "province" && selected.province) {
          const index = areaList.province.findIndex((item) => item.id === selected.province.id);
          if (index >= 0) {
            scrollToSelected("province", index);
          }
        } else if (newVal === "city" && selected.city) {
          const index = areaList.city.findIndex((item) => item.id === selected.city.id);
          if (index >= 0) {
            scrollToSelected("city", index);
          }
        } else if (newVal === "district" && selected.district) {
          const index = areaList.district.findIndex((item) => item.id === selected.district.id);
          if (index >= 0) {
            scrollToSelected("district", index);
          }
        }
      });
    }, { immediate: true });
    watch(() => selected.district, (nval) => {
      if (nval) {
        currSelect.value = "district";
        emits("complete", selected);
        show.value = false;
      }
    }, { deep: true });
    const handleProvinceClick = (item) => {
      selected.province = item;
      nextTick(() => {
        resetScrollTop();
      });
    };
    const handleCityClick = (item) => {
      selected.city = item;
      nextTick(() => {
        resetScrollTop();
      });
    };
    const open = () => {
      show.value = true;
      if (prop.areaId) {
        currSelect.value = "district";
      }
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_u_popup = resolveEasycom(resolveDynamicComponent("u-popup"), __easycom_7$1);
      return openBlock(), createBlock(_component_u_popup, {
        show: show.value,
        onClose: _cache[5] || (_cache[5] = ($event) => show.value = false),
        mode: "bottom",
        round: 10
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            onTouchmove: _cache[4] || (_cache[4] = withModifiers(() => {
            }, ["prevent", "stop"])),
            class: "popup-common"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("请选择地区")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "flex p-[30rpx] pt-[0] text-sm font-500" }, {
                default: withCtx(() => [
                  areaList.province.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: normalizeClass(["area-select-wrap", { "selected": currSelect.value == "province" }]),
                    onClick: _cache[0] || (_cache[0] = ($event) => currSelect.value = "province")
                  }, {
                    default: withCtx(() => [
                      selected.province ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selected.province.name), 1)
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_v_uni_view, { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("请选择")
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true),
                  areaList.city.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 1,
                    class: normalizeClass(["area-select-wrap", { "selected": currSelect.value == "city" }]),
                    onClick: _cache[1] || (_cache[1] = ($event) => currSelect.value = "city")
                  }, {
                    default: withCtx(() => [
                      selected.city ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selected.city.name), 1)
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_v_uni_view, { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("请选择")
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true),
                  areaList.district.length ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 2,
                    class: normalizeClass(["area-select-wrap", { "selected": currSelect.value == "district" }]),
                    onClick: _cache[2] || (_cache[2] = ($event) => currSelect.value = "district")
                  }, {
                    default: withCtx(() => [
                      selected.district ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selected.district.name), 1)
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_v_uni_view, { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("请选择")
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }, 8, ["class"])) : (openBlock(), createBlock(_component_v_uni_view, {
                    key: 3,
                    class: "area-select-wrap"
                  }))
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                "scroll-y": "true",
                class: "h-[700rpx] overflow-y-auto",
                "scroll-top": scrollTop.value,
                "scroll-with-animation": "",
                onTouchmove: _cache[3] || (_cache[3] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "flex p-[30rpx] pt-[0] text-sm font-500" }, {
                    default: withCtx(() => [
                      areaList.province.length ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 0,
                        class: "area-select-wrap",
                        style: normalizeStyle({ opacity: currSelect.value == "province" ? 1 : 0, pointerEvents: currSelect.value == "province" ? "auto" : "none", height: currSelect.value == "province" ? "auto" : "0", overflow: currSelect.value == "province" ? "auto" : "hidden" })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(areaList.province, (item, index) => {
                            return openBlock(), createBlock(_component_v_uni_view, {
                              key: item.id,
                              class: normalizeClass(["h-[80rpx] flex items-center", { "selected": selected.province && selected.province.id == item.id }]),
                              onClick: ($event) => handleProvinceClick(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true),
                      areaList.city.length ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 1,
                        class: "area-select-wrap",
                        style: normalizeStyle({ opacity: currSelect.value == "city" ? 1 : 0, pointerEvents: currSelect.value == "city" ? "auto" : "none", height: currSelect.value == "city" ? "auto" : "0", overflow: currSelect.value == "city" ? "auto" : "hidden" })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(areaList.city, (item, index) => {
                            return openBlock(), createBlock(_component_v_uni_view, {
                              key: item.id,
                              class: normalizeClass(["h-[80rpx] flex items-center", { "selected": selected.city && selected.city.id == item.id }]),
                              onClick: ($event) => handleCityClick(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true),
                      areaList.district.length ? (openBlock(), createBlock(_component_v_uni_view, {
                        key: 2,
                        class: "area-select-wrap",
                        style: normalizeStyle({ opacity: currSelect.value == "district" ? 1 : 0, pointerEvents: currSelect.value == "district" ? "auto" : "none", height: currSelect.value == "district" ? "auto" : "0", overflow: currSelect.value == "district" ? "auto" : "hidden" })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(areaList.district, (item, index) => {
                            return openBlock(), createBlock(_component_v_uni_view, {
                              key: item.id,
                              class: normalizeClass(["h-[80rpx] flex items-center", { "selected": selected.district && selected.district.id == item.id }]),
                              onClick: ($event) => selected.district = item
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["style"])) : (openBlock(), createBlock(_component_v_uni_view, {
                        key: 3,
                        class: "area-select-wrap"
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["scroll-top"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const areaSelect_vue_vue_type_style_index_0_scoped_610ba5df_lang = "";
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-610ba5df"]]);
export {
  __easycom_7 as _
};
