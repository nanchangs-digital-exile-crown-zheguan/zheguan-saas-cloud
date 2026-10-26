function useGoods(params = {}) {
  const baseTagStyle = (data) => {
    let style = "";
    if (data.color_json && data.color_json.text_color) {
      style += `color:${data.color_json.text_color};`;
    }
    if (data.color_json && data.color_json.border_color) {
      style += `border-color: ${data.color_json.border_color};`;
    }
    if (data.color_json && data.color_json.bg_color) {
      style += `background-color: ${data.color_json.bg_color};`;
    }
    return style;
  };
  const priceType = (data) => {
    return data.goodsSku.show_type;
  };
  const goodsPrice = (data) => {
    let price = data.goodsSku.show_price;
    return parseFloat(price);
  };
  const errorImgFn = (data, type) => {
    data[type] = "";
  };
  return {
    baseTagStyle,
    goodsPrice,
    priceType,
    error: errorImgFn
  };
}
export {
  useGoods as u
};
