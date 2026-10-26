import { s as showToast } from "./uni-h5.es.7545a186.js";
import { defineStore } from "/wap/assets/shared/pinia.js";
import { d as request, c as getToken } from "./common.f536f441.js";
import "/wap/assets/shared/vue.js";
function addCart(data) {
  return request.post(`shop/cart`, data);
}
function editCart(data) {
  return request.put(`shop/cart`, data);
}
function deleteCart(data) {
  return request.put(`shop/cart/delete`, data);
}
function getCartList(params) {
  return request.get(`shop/cart`, params);
}
function getCartGoodsList(params) {
  return request.get(`shop/cart/goods`, params);
}
function getCartCalculate(params) {
  return request.get(`shop/cart/calculate`, params);
}
const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartList: {},
      // 购物车列表
      totalNum: 0,
      // 购物车商品总数量
      totalMoney: 0,
      // 购物车商品总价格
      isRepeat: false,
      isAddCartRecommend: false
    };
  },
  actions: {
    // 查询购物车列表
    getList(callback = null) {
      if (!getToken()) {
        for (let k in this.cartList) {
          delete this.cartList[k];
        }
        this.totalNum = 0;
        this.totalMoney = 0;
        return;
      }
      getCartList({}).then((res) => {
        let data = res.data;
        for (let k in this.cartList) {
          delete this.cartList[k];
        }
        if (data) {
          data.forEach((item) => {
            if (item.goods.status == 1 && item.goods.delete_time == 0 && item.goodsSku) {
              let cart = {
                id: item.id,
                goods_id: item.goods_id,
                sku_id: item.sku_id,
                stock: item.goodsSku.stock,
                num: item.num,
                sale_price: item.goodsSku.show_price
              };
              if (!this.cartList["goods_" + cart.goods_id]) {
                this.cartList["goods_" + cart.goods_id] = {};
              }
              this.cartList["goods_" + cart.goods_id]["sku_" + cart.sku_id] = cart;
            }
          });
        }
        this.calculateNum();
        if (callback && typeof callback == "function")
          callback();
      });
    },
    /**
     * 购物车数量增加
     * data：数据源
     * step：记步数量，默认为：1，每次加一个，设置为：0时，按照 num 修改
     */
    increase(data, step = 1, callback = null) {
      if (!data || data && Object.keys(data).length == 0 || !data.goods_id || !data.sku_id)
        return;
      if (!getToken())
        return;
      let num = data.num || 0;
      let updateNum = num + step;
      let api = data.id ? editCart : addCart;
      if (updateNum > parseInt(data.stock)) {
        showToast({ title: "商品库存不足", icon: "none" });
        return;
      }
      if (this.isRepeat)
        return;
      this.isRepeat = true;
      if (data.id) {
        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id].num = updateNum;
      } else {
        if (!this.cartList["goods_" + data.goods_id]) {
          this.cartList["goods_" + data.goods_id] = {};
        }
        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id] = {
          id: data.id,
          goods_id: data.goods_id,
          sku_id: data.sku_id,
          stock: data.stock,
          num: updateNum,
          sale_price: data.sale_price
        };
      }
      this.calculateNum();
      api({
        id: data.id,
        goods_id: data.goods_id,
        sku_id: data.sku_id,
        num: updateNum
      }).then((res) => {
        this.getList(callback);
        this.isRepeat = false;
      }).catch((res) => {
        this.isRepeat = false;
      });
    },
    /**
     * 购物车数量减少
     * data：数据源
     * step：记步数量，默认为：1，每次减一个，设置为：0时，按照 num 修改
     */
    reduce(data, step = 1, callback = null) {
      if (!data || data && Object.keys(data).length == 0 || !data.goods_id || !data.sku_id)
        return;
      if (!getToken())
        return;
      let num = data.num || 0;
      let updateNum = num - step;
      let api = updateNum > 0 ? editCart : deleteCart;
      if (this.isRepeat)
        return;
      this.isRepeat = true;
      if (updateNum > 0) {
        this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id].num = updateNum;
      } else {
        delete this.cartList["goods_" + data.goods_id]["sku_" + data.sku_id];
        if (Object.keys(this.cartList["goods_" + data.goods_id]).length == 0)
          delete this.cartList["goods_" + data.goods_id];
      }
      this.calculateNum();
      api({
        ids: data.id,
        // 删除接口用
        id: data.id,
        goods_id: data.goods_id,
        sku_id: data.sku_id,
        num: updateNum
      }).then((res) => {
        this.getList(callback);
        this.isRepeat = false;
      }).catch((res) => {
        this.isRepeat = false;
      });
    },
    // 购物车删除
    delete(ids, callback = null) {
      if (!ids)
        return;
      deleteCart({
        ids
      }).then((res) => {
        this.getList();
        this.isRepeat = false;
        if (callback)
          callback();
      }).catch((res) => {
        this.isRepeat = false;
      });
    },
    // 计算购物车商品的总数量、总价格
    calculateNum() {
      this.totalNum = 0;
      this.totalMoney = 0;
      if (Object.keys(this.cartList).length) {
        for (let goods in this.cartList) {
          let totalNum = 0;
          let totalMoney = 0;
          for (let sku in this.cartList[goods]) {
            if (typeof this.cartList[goods][sku] == "object") {
              totalNum += this.cartList[goods][sku].num;
              totalMoney += this.cartList[goods][sku].num * this.cartList[goods][sku].sale_price;
            }
          }
          this.cartList[goods].totalNum = totalNum;
          this.cartList[goods].totalMoney = totalMoney.toFixed(2);
          this.totalNum += totalNum;
          this.totalMoney += totalMoney;
        }
      }
      this.totalMoney = this.totalMoney.toFixed(2);
    }
  }
});
const useCartStore$1 = useCartStore;
export {
  getCartCalculate as a,
  getCartGoodsList as g,
  useCartStore$1 as u
};
