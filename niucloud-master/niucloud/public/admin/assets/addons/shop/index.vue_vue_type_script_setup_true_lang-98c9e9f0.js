import { ElLoadingDirective as q } from "element-plus/es";
import { defineComponent as B, ref as C, watch as _, onMounted as F, onBeforeUnmount as H, withDirectives as U, openBlock as V, createElementBlock as X, normalizeClass as Y, normalizeStyle as J, nextTick as A } from "vue";
import { ElMessage as w } from "element-plus";
import { t as m } from "/admin/assets/shared/admin-lang.js";
import { getMap as Q } from "/admin/assets/shared/core-shared.js";
import { latLngToAddress as W, selectGeometry as j, createMarker as ee, createCircle as te, createPolygon as ne, deleteGeometry as G } from "/admin/assets/shared/core-shared.js";
import { latLngToAddress as ae, selectGeometry as re, createCircle as oe, createPolygon as le, deleteGeometry as ce, clearAllGeometry as ie } from "/admin/assets/shared/core-shared.js";
const se = ["id"], ve = /* @__PURE__ */ B({
  __name: "index",
  props: {
    containerId: { default: "map-container" },
    containerClass: { default: "w-[800px] h-[500px] relative border border-gray-300" },
    containerStyle: { default: "" },
    longitude: { default: 116.397463 },
    latitude: { default: 39.909187 },
    zoom: { default: 14 },
    selectedKey: { default: "" },
    disabledClickMarker: { default: !1 }
  },
  emits: ["update:longitude", "update:latitude", "locationChange", "areaChange", "selectChange"],
  setup(L, { expose: I, emit: g }) {
    const s = L, T = 500, P = 100, S = 50, p = C(!0), y = C(""), u = C("tianditu");
    let a = null, f = null;
    const v = C([]), x = () => Q({
      need_encrypt: !1
    }).then((t) => {
      u.value = t.data.map_type || "tianditu", y.value = u.value === "tianditu" ? t.data.tianditu_map_web_key : t.data.key;
    }).catch((t) => {
      p.value = !1, w.error(m("获取地图配置失败"));
    }), O = () => {
      const t = document.createElement("script");
      t.src = "https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key=" + y.value, document.body.appendChild(t), t.onload = () => {
        setTimeout(() => {
          const r = window.TMap;
          if (r) {
            const n = s.longitude ? Number(s.longitude) : 116.397463, o = s.latitude ? Number(s.latitude) : 39.909187, l = new r.LatLng(o, n);
            a = new r.Map(s.containerId, { center: l, zoom: s.zoom }), f = ee(a), s.disabledClickMarker || a.on("click", (c) => {
              const e = c == null ? void 0 : c.latLng;
              if (!e)
                return;
              const i = typeof e.getLat == "function" ? e.getLat() : e.lat, d = typeof e.getLng == "function" ? e.getLng() : e.lng;
              if (i == null || d == null || Number.isNaN(i) || Number.isNaN(d))
                return;
              const k = new r.LatLng(i, d);
              a.setZoom(16), a.setCenter(k), f.updateGeometries({ id: "center", position: k }), A(() => {
                h(i, d);
              });
            }), s.latitude && s.longitude && h(o, n), a.on("tilesloaded", () => {
              p.value = !1, g("mapReady");
            });
          } else
            p.value = !1, w.error(m("腾讯地图加载失败"));
        }, T);
      }, t.onerror = () => {
        p.value = !1, w.error(m("腾讯地图脚本加载失败"));
      };
    }, D = () => {
      const t = document.createElement("script");
      t.src = "https://api.tianditu.gov.cn/api?v=4.0&tk=" + y.value, document.body.appendChild(t), t.onload = () => {
        setTimeout(() => {
          const r = window.T;
          if (r) {
            const n = s.longitude ? Number(s.longitude) : 116.397463, o = s.latitude ? Number(s.latitude) : 39.909187;
            a = new r.Map(s.containerId), a.centerAndZoom(new r.LngLat(n, o), s.zoom);
            const l = new r.Control.Zoom();
            a.addControl(l), f = new r.Marker(new r.LngLat(n, o)), a.addOverLay(f), p.value = !1, s.disabledClickMarker || a.addEventListener("click", (c) => {
              const e = c.lnglat;
              if (!e)
                return;
              const i = e.lat, d = e.lng;
              i == null || d == null || Number.isNaN(i) || Number.isNaN(d) || (a.removeOverLay(f), f = new r.Marker(new r.LngLat(d, i)), a.addOverLay(f), a.centerAndZoom(new r.LngLat(d, i), 16), A(() => {
                h(i, d);
              }));
            }), s.latitude && s.longitude && h(o, n);
          } else
            p.value = !1, w.error(m("天地图加载失败"));
        }, T);
      }, t.onerror = () => {
        p.value = !1, w.error(m("天地图加载失败，请检查密钥配置"));
      };
    }, $ = () => {
      if (!y.value) {
        p.value = !1;
        return;
      }
      a || (u.value === "tencent" ? O() : u.value === "tianditu" && D());
    }, h = (t, r) => {
      g("update:longitude", String(r)), g("update:latitude", String(t)), u.value === "tencent" ? W({ mapKey: y.value, lat: t, lng: r }).then(({ message: n, result: o }) => {
        (n == "query ok" || n == "Success") && g("locationChange", { lat: t, lng: r, address: o });
      }) : u.value === "tianditu" && ae({ mapKey: y.value, lat: t, lng: r }).then((n) => {
        g("locationChange", { lat: t, lng: r, address: n });
      }).catch((n) => {
        w.error(n.message || m("地址解析失败"));
      });
    }, M = (t, r) => {
      if (!(!a || !f)) {
        if (u.value === "tencent") {
          const n = window.TMap;
          if (!n)
            return;
          const o = new n.LatLng(t, r);
          a.setZoom(16), a.setCenter(o), f.updateGeometries({ id: "center", position: o });
        } else if (u.value === "tianditu") {
          const n = window.T;
          if (!n)
            return;
          const o = new n.LngLat(r, t);
          a.removeOverLay(f), f = new n.Marker(o), a.addOverLay(f), a.centerAndZoom(o, 16);
        }
      }
    }, z = (t) => new Promise((r, n) => {
      if (!y.value) {
        n(new Error(m("地图配置未加载")));
        return;
      }
      (() => new Promise((l, c) => {
        if (a) {
          l();
          return;
        }
        let e = 0;
        const i = setInterval(() => {
          e++, a ? (clearInterval(i), l()) : e > S && (clearInterval(i), c(new Error(m("地图初始化超时"))));
        }, P);
      }))().then(() => {
        if (u.value === "tencent") {
          const l = window.TMap;
          if (!(l != null && l.service)) {
            n(new Error(m("腾讯地图服务未加载")));
            return;
          }
          new l.service.Geocoder({ key: y.value }).getLocation({ address: t }).then((e) => {
            var i;
            if (e.status === 0 && ((i = e.result) != null && i.location)) {
              const d = e.result.location, k = Number(d.lat), E = Number(d.lng);
              M(k, E), r({ lat: k, lng: E });
            } else
              n(new Error(e.message || m("未找到该地址")));
          }).catch((e) => {
            n(e);
          });
        } else if (u.value === "tianditu") {
          const l = window.T;
          if (!l) {
            n(new Error(m("天地图服务未加载")));
            return;
          }
          new l.Geocoder().getPoint(t, (e) => {
            if (e && e.status === "0" && e.location) {
              const i = e.location.lat, d = e.location.lon || e.location.lng;
              i && d ? (M(i, d), r({ lat: i, lng: d })) : n(new Error(m("坐标解析失败")));
            } else
              n(new Error((e == null ? void 0 : e.msg) || m("未找到该地址")));
          });
        }
      }).catch(n);
    }), Z = (t, r = 1e3, n) => {
      if (!a)
        return null;
      const o = (n == null ? void 0 : n.key) || `circle_${Date.now()}`;
      let l = null;
      const c = { key: o, center: t, radius: r, ...n };
      return u.value === "tencent" ? (te(a, c, (e) => {
        g("selectChange", e);
      }, (e) => {
        g("areaChange", {
          key: e.key,
          type: "circle",
          path: e
        });
      }), l = { key: o, geometriesData: c }) : (l = oe(a, c, (e) => {
        g("areaChange", {
          key: e.key,
          type: "circle",
          path: {
            key: e.key,
            center: e.center,
            radius: e.radius
          }
        });
      }, (e) => {
        g("selectChange", e);
      }), l && (l.geometriesData = c)), l && v.value.push(l), l;
    }, K = (t, r) => {
      if (!a)
        return null;
      const n = (r == null ? void 0 : r.key) || `poly_${Date.now()}`;
      let o = null;
      const l = { key: n, paths: t, ...r };
      return u.value === "tencent" ? (ne(a, l, (c) => {
        g("selectChange", c);
      }, (c) => {
        g("areaChange", {
          key: c.key,
          type: "polygon",
          path: c
        });
      }), o = { key: n, geometriesData: l }) : (o = le(a, l, (c) => {
        g("areaChange", {
          key: c.key,
          type: "polygon",
          path: {
            key: c.key,
            paths: c.paths.map((e) => ({
              lat: e.lat,
              lng: e.lng
            }))
          }
        });
      }, (c) => {
        g("selectChange", c);
      }), o && (o.geometriesData = l)), o && v.value.push(o), o;
    }, R = (t) => {
      if (!a || !t)
        return;
      const r = t.key || "";
      u.value === "tencent" ? G(r) : ce(a, r);
      const n = v.value.findIndex((o) => o.key === r);
      n > -1 && v.value.splice(n, 1);
    }, N = () => {
      a && (u.value === "tencent" ? v.value.forEach((t) => G(t.key)) : ie(a), v.value = []);
    }, b = (t) => {
      u.value === "tencent" ? j(t) : re(t);
    };
    return _(() => s.selectedKey, (t) => {
      t && b(t);
    }), _([y, u], ([t, r]) => {
      t && r && $();
    }), F(() => {
      x();
    }), H(() => {
      if (a) {
        try {
          u.value === "tencent" ? a.destroy && a.destroy() : u.value === "tianditu" && (N(), a.clearOverLays && a.clearOverLays());
        } catch {
        }
        a = null, f = null, v.value = [];
      }
    }), I({
      updateLocation: M,
      searchAddress: z,
      addCircle: Z,
      addPolygon: K,
      removeOverlay: R,
      clearOverlays: N,
      selectGeometry: b,
      getMap: () => a,
      getMarker: () => f,
      handleLocationChange: h
    }), (t, r) => {
      const n = q;
      return U((V(), X("div", {
        id: L.containerId,
        class: Y(L.containerClass),
        style: J(L.containerStyle)
      }, null, 14, se)), [
        [n, p.value]
      ]);
    };
  }
});
export {
  ve as _
};
