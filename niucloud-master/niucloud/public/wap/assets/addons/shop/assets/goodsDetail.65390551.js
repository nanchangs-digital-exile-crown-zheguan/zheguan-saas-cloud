import { defineStore } from "/wap/assets/shared/pinia.js";
import "./uni-h5.es.7545a186.js";
import "./common.f536f441.js";
import "/wap/assets/shared/vue.js";
const useGoodsDetailStore = defineStore("goodsDetail", {
  state: () => {
    return {
      goodsDetail: {}
    };
  },
  actions: {
    setGoodsDetail(data, isAllUpdate = false) {
      if (isAllUpdate) {
        this.goodsDetail = data;
      } else {
        Object.assign(this.goodsDetail, data);
      }
    },
    removeGoodsDetail() {
      this.goodsDetail = {};
    }
  }
});
const useGoodsDetailStore$1 = useGoodsDetailStore;
export {
  useGoodsDetailStore$1 as u
};
