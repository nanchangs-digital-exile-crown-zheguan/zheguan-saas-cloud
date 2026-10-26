import { a3 as Map$1, i as index$g } from "./uni-h5.es.7545a186.js";
import { defineComponent, computed, ref, onMounted, openBlock, createBlock, withCtx, createVNode, unref, normalizeStyle, createCommentVNode } from "/wap/assets/shared/vue.js";
import { i as img } from "./common.f536f441.js";
import { b as getTrackOfLocal } from "./order.b87aedbd.js";
const map = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map-show",
  props: {
    tradeNo: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "calc(50vh  + 150rpx)"
    }
  },
  emits: ["confirm"],
  setup(__props, { emit }) {
    const prop = __props;
    const mapStyle = computed(() => {
      let style = "";
      style += `width:100%;`;
      style += `height:${prop.height};`;
      return style;
    });
    let marker = ref({
      center: {
        latitude: 39.909,
        longitude: 116.39742
      }
    });
    const loading = ref(true);
    let polyline = ref(null);
    let scale = ref(12);
    const getTrackOfLocalFn = () => {
      loading.value = true;
      getTrackOfLocal({ trade_no: prop.tradeNo }).then((res) => {
        var _a;
        marker.value = res.data;
        if (marker.value) {
          (_a = marker.value.points) == null ? void 0 : _a.forEach((item) => {
            item.id = getRandomInt(1, 200);
            item.iconPath = img(item.icon_path);
            item.width = 40;
            item.height = 40;
            if (item.callout.content) {
              item.callout.padding = 11;
              item.callout.display = "ALWAYS";
              item.callout.bgColor = "#fa5050";
              item.callout.color = "#fff";
              item.callout.borderRadius = 6;
              item.callout.fontSize = 12;
            }
          });
          processRouteData(marker.value.driving);
          scale.value = estimateZoomLevel(haversineDistance(marker.value.points[0].latitude, marker.value.points[0].longitude, marker.value.points[1].latitude, marker.value.points[marker.value.points.length - 1].longitude));
        }
        emit("confirm", res.data);
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    onMounted(() => {
      getTrackOfLocalFn();
    });
    const processRouteData = (result) => {
      if (!result) {
        return false;
      }
      const route = result.routes[0];
      const coords = route.polyline;
      const kr = 1e6;
      for (let i = 2; i < coords.length; i++) {
        coords[i] = Number(coords[i - 2]) + Number(coords[i]) / kr;
      }
      const points = [];
      for (let i = 0; i < coords.length; i += 2) {
        points.push({
          latitude: coords[i],
          longitude: coords[i + 1]
        });
      }
      polyline.value = [{
        points,
        color: "#f48aa2",
        width: 4,
        arrowLine: true
        // 显示方向箭头
      }];
    };
    const haversineDistance = (lat1, lon1, lat2, lon2) => {
      var R = 6371;
      var dLat = deg2rad(lat2 - lat1);
      var dLon = deg2rad(lon2 - lon1);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c;
      return distance * 1e3;
    };
    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };
    const estimateZoomLevel = (distance) => {
      let zoomLevel;
      if (distance > 1e6) {
        zoomLevel = 5 - (distance - 1e6) / 3e6 * 10;
      } else if (distance > 1e5 && distance <= 1e6) {
        zoomLevel = 7 + (distance - 1e5) / 9e5 * 6;
      } else if (distance > 5e4 && distance <= 1e5) {
        zoomLevel = 10 + distance / 1e6 * 9;
      } else if (distance > 1e4 && distance <= 5e4) {
        zoomLevel = 11 + distance / 1e6 * 6.5;
      } else if (distance > 5e3 && distance <= 1e4) {
        zoomLevel = 13 + distance / 1e5 * 6;
      } else if (distance > 900 && distance <= 5e3) {
        zoomLevel = 14 + distance / 1e5 * 8;
      } else if (distance > 500 && distance <= 900) {
        zoomLevel = 16 + distance / 1e4 * 3;
      } else if (distance > 100 && distance <= 500) {
        zoomLevel = 16.5 + distance / 1e4 * 2;
      } else {
        zoomLevel = 17 + distance / 1e4 * 2;
      }
      return parseInt(Math.max(3, Math.min(19, zoomLevel)) - 1);
    };
    return (_ctx, _cache) => {
      const _component_v_uni_map = Map$1;
      const _component_v_uni_view = index$g;
      return !loading.value ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "container"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_map, {
            id: "mapContainer",
            latitude: unref(marker).center.latitude,
            longitude: unref(marker).center.longitude,
            polyline: unref(polyline),
            "include-points": unref(marker).center,
            markers: unref(marker).points,
            scale: unref(scale),
            "min-scale": 10,
            "max-scale": 20,
            style: normalizeStyle(unref(mapStyle)),
            "enable-zoom": ""
          }, null, 8, ["latitude", "longitude", "polyline", "include-points", "markers", "scale", "style"])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
