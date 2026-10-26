import { ref } from "/wap/assets/shared/vue.js";
import { b as onPageScroll } from "./uni-app.es.9cb86cc0.js";
import { l as deepClone } from "./common.f536f441.js";
function topTabar() {
  const param = ref({
    title: "",
    topStatusBar: {
      style: "style-1",
      bgColor: "transparent",
      rollBgColor: "#f6f6f6",
      textColor: "#fff",
      rollTextColor: "#333"
    }
  });
  const scrollVal = ref(1);
  const scrollBool = ref(-1);
  const setTopTabbarParam = (data = {}) => {
    if (data && typeof data != "object")
      return param;
    for (let key in data) {
      if (key == "title") {
        param.value.title = data.title || "";
      } else if (key == "topStatusBar" && data.topStatusBar) {
        for (let subKey in data.topStatusBar) {
          param.value.topStatusBar[subKey] = data.topStatusBar[subKey];
        }
      } else {
        param.value[key] = data[key];
      }
    }
    return deepClone(param.value);
  };
  onPageScroll((e) => {
    if (e.scrollTop <= 0) {
      scrollBool.value = -1;
    } else if (e.scrollTop > scrollVal.value) {
      scrollBool.value = 1;
    } else {
      scrollBool.value = 2;
    }
  });
  const getScrollBool = () => {
    return scrollBool.value;
  };
  return {
    getScrollBool,
    setTopTabbarParam
  };
}
export {
  topTabar as t
};
