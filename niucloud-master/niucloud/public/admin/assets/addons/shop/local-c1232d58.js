import { ElPageHeader as _e, ElCard as ce, ElRadio as ve, ElRadioGroup as me, ElFormItem as fe, ElInput as ge, ElButton as ye, ElForm as xe, ElScrollbar as we, ElLoadingDirective as be } from "element-plus/es";
import { defineComponent as he, ref as S, computed as ke, onMounted as je, onBeforeUnmount as Ve, openBlock as j, createElementBlock as M, createVNode as l, withCtx as p, unref as r, withDirectives as D, createBlock as Ce, createTextVNode as f, toDisplayString as g, createElementVNode as c, vShow as W, Fragment as J, renderList as Q, normalizeClass as I, withModifiers as U, createCommentVNode as Ee, toRaw as q, pushScopeId as Me, popScopeId as Ne } from "vue";
import { t as s } from "/admin/assets/shared/admin-lang.js";
import { ArrowLeft as Se } from "@element-plus/icons-vue";
import { useRoute as Re, useRouter as Ue } from "vue-router";
import { guid as X, filterDigit as V, deepClone as L } from "/admin/assets/shared/core-shared.js";
import { j as $e, k as Te, l as Ae } from "./delivery-da6bd7ad.js";
import { ElMessage as $ } from "element-plus";
import { test as R } from "/admin/assets/shared/core-shared.js";
import { _ as Fe } from "./index.vue_vue_type_script_setup_true_lang-98c9e9f0.js";
import { _ as De } from "./_plugin-vue_export-helper-dad06003.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
const Ie = (T) => (Me("data-v-55c9fd08"), T = T(), Ne(), T), qe = { class: "main-container" }, Le = { class: "flex" }, Pe = { class: "w-[60px] mx-[5px]" }, Ke = { class: "w-[60px] mx-[5px]" }, Oe = { class: "w-[60px] mx-[5px]" }, Be = { class: "w-[60px] mx-[5px]" }, ze = { class: "flex" }, Ge = { class: "w-[60px] mx-[5px]" }, He = { class: "w-[60px] mx-[5px]" }, We = { class: "w-[60px] mx-[5px]" }, Je = { class: "w-full border-[1px] border-solid border-[#dcdfe6] flex" }, Qe = { class: "store-wrap w-[270px] h-[520px] border-r-[1px] border-solid border-[#dcdfe6]" }, Xe = {
  key: 0,
  class: "relative h-[520px]"
}, Ye = { class: "h-[450px] overflow-y-auto" }, Ze = ["onClick"], ea = { class: "text-[16px] leading-[20px] mb-[6px] flex items-center justify-between" }, aa = { class: "using-hidden" }, ta = { class: "absolute left-0 right-0 bottom-0 h-[70px] flex items-center bg-[#fff] px-[20px]" }, ra = {
  key: 1,
  class: "h-full flex flex-col items-center justify-center"
}, la = /* @__PURE__ */ Ie(() => /* @__PURE__ */ c("span", { class: "text-[14px] mb-[10px]" }, "请到配送点中添加配送区域", -1)), oa = { class: "relative flex-1 overflow-hidden" }, na = {
  key: 0,
  class: "absolute bg-white w-[270px] h-[500px] top-[10px] left-[10px] region-list"
}, sa = ["onClick"], ia = { class: "pb-[18px]" }, ua = { class: "pb-[18px]" }, da = { class: "pb-[10px]" }, pa = { class: "p-[10px] text-center" }, _a = { class: "fixed-footer-wrap" }, ca = { class: "fixed-footer" }, va = /* @__PURE__ */ he({
  __name: "local",
  setup(T) {
    const Y = Re(), F = Ue(), C = S(!0), Z = Y.meta.title, P = S(), _ = S(), y = S([]), o = S({
      area: [
        {
          area_name: "",
          area_type: "radius",
          start_price: 0,
          delivery_price: 0,
          area_json: {
            key: X(),
            center: { lat: 39.909187, lng: 116.397463 },
            radius: 1e3
          }
        }
      ],
      latitude: 39.909187,
      longitude: 116.39746
    });
    (async () => {
      y.value = await (await Te({ pick_up_type: "local_delivery" })).data, y.value.length && (o.value = y.value[0]);
    })();
    const i = S({
      center: {
        lat: "",
        lng: ""
      },
      fee_type: "region",
      base_dist: "",
      base_price: "",
      grad_dist: "",
      grad_price: "",
      weight_start: 0,
      weight_unit: 0,
      weight_price: 0
    }), K = ke(() => ({
      distance: [
        {
          validator: (a, e, t) => {
            i.value.fee_type == "distance" && (R.require(i.value.base_dist) ? t(new Error(s("baseDistRequire"))) : Number(i.value.base_dist) <= 0 && t(new Error(s("起始公里数不能小于等于0"))), R.require(i.value.base_price) && t(new Error(s("basePriceRequire"))), R.require(i.value.grad_dist) ? t(new Error(s("gradDistRequire"))) : Number(i.value.grad_dist) <= 0 && t(new Error(s("超出公里数不能小于等于0"))), R.require(i.value.grad_price) && t(new Error(s("gradPriceRequire")))), t();
          },
          trigger: ["blur", "change"]
        }
      ],
      weight: [
        {
          validator: (a, e, t) => {
            i.value.fee_type == "distance" && (Number(i.value.weight_start) <= 0 && t(new Error(s("商品重量不能小于等于0"))), Number(i.value.weight_unit) <= 0 && t(new Error(s("商品超出重量不能小于等于0")))), t();
          },
          trigger: ["blur", "change"]
        }
      ]
    }));
    $e().then(({ data: a }) => {
      C.value = !1, a && Object.assign(i.value, a), O();
    }).catch(() => {
      C.value = !1;
    }), je(() => {
    });
    const N = S(0), O = async () => {
      var t, v, d, m, b;
      if (!((t = o.value) != null && t.area) || !Array.isArray(o.value.area) || o.value.area.length === 0) {
        console.log("当前门店无配送区域，跳过绘制");
        return;
      }
      if (!(!_.value || !await (async () => {
        let u = 0;
        const h = 15;
        for (; u < h; ) {
          try {
            if (await _.value.getMap())
              return !0;
          } catch {
          }
          u++, await new Promise((E) => setTimeout(E, 200));
        }
        return console.warn("地图初始化超时，无法加载区域"), !1;
      })())) {
        await _.value.clearOverlays(), await new Promise((u) => setTimeout(u, 500));
        for (const u of o.value.area)
          if ((v = u.area_json) != null && v.key) {
            if (u.area_type === "radius") {
              const h = Number(((d = u.area_json.center) == null ? void 0 : d.lat) ?? o.value.latitude ?? 39.909187), E = Number(((m = u.area_json.center) == null ? void 0 : m.lng) ?? o.value.longitude ?? 116.397463);
              u.area_json.center = { lat: h, lng: E }, u.area_json.radius = Number(u.area_json.radius ?? 1e3), await _.value.addCircle(u.area_json.center, u.area_json.radius, {
                key: u.area_json.key
              });
            } else if (u.area_type === "custom") {
              if (!((b = u.area_json.paths) != null && b.length))
                continue;
              _.value.addPolygon(u.area_json.paths, {
                key: u.area_json.key
              });
            }
          }
        await new Promise((u) => setTimeout(u, 50)), o.value.area.length > 0 && (N.value = 0, _.value.selectGeometry(o.value.area[0].area_json.key));
      }
    }, ee = async () => {
      if (!_.value)
        return;
      const a = await _.value.getMap(), e = a ? a.getCenter() : { lat: 39.909187, lng: 116.397463 }, t = {
        area_name: "",
        area_type: "radius",
        start_price: 0,
        delivery_price: 0,
        area_json: {
          key: X(),
          center: { lat: e.lat, lng: e.lng },
          radius: 1e3
        }
      };
      o.value.area.push(t);
      const v = o.value.area.length - 1;
      await _.value.addCircle(t.area_json.center, t.area_json.radius, {
        key: t.area_json.key
      }), N.value = v, await _.value.selectGeometry(t.area_json.key);
    }, ae = async (a) => {
      const e = o.value.area[a];
      if (_.value)
        try {
          await _.value.removeOverlay({ key: e.area_json.key });
        } catch (t) {
          console.error("删除区域失败:", t);
        }
      o.value.area.splice(a, 1);
    }, te = async (a) => {
      if (!_.value)
        return;
      N.value = a;
      const e = o.value.area[a];
      await _.value.selectGeometry(e.area_json.key);
    }, re = async (a) => {
      var v;
      const e = o.value.area[a];
      _.value.removeOverlay({ key: e.area_json.key });
      const t = await _.value.getMap();
      if (e.area_type == "radius") {
        const d = (t == null ? void 0 : t.getCenter()) || { lat: 39.909187, lng: 116.39746 };
        e.area_json.center = e.area_json.center || { lat: d.lat, lng: d.lng }, e.area_json.radius = e.area_json.radius || 1e3, await _.value.addCircle(e.area_json.center, e.area_json.radius, e.area_json);
      } else {
        if (!((v = e.area_json.paths) != null && v.length)) {
          const d = e.area_json.center || (t == null ? void 0 : t.getCenter()) || { lat: 39.909187, lng: 116.397463 };
          e.area_json.paths = [
            { lat: d.lat + 0.01, lng: d.lng + 0.01 },
            { lat: d.lat - 0.01, lng: d.lng + 0.01 },
            { lat: d.lat - 0.01, lng: d.lng - 0.01 },
            { lat: d.lat + 0.01, lng: d.lng - 0.01 }
          ];
        }
        _.value.addPolygon(e.area_json.paths, e.area_json);
      }
      setTimeout(() => {
        N.value = a, _.value.selectGeometry(e.area_json.key);
      }, 100);
    }, le = async (a) => {
      if (y.value.forEach((e) => {
        e.store_id == o.value.store_id && (e = L(q(e)));
      }), _.value)
        try {
          await _.value.clearOverlays();
        } catch (e) {
          console.error("清空覆盖物失败:", e);
        }
      if (o.value = a, _.value && a.latitude && a.longitude)
        try {
          await _.value.updateLocation(Number(a.latitude), Number(a.longitude));
        } catch (e) {
          console.error("更新地图位置失败:", e);
        }
      O();
    }, oe = (a) => {
      if (!a || !a.key)
        return;
      const e = o.value.area.findIndex((t) => {
        var v;
        return ((v = t.area_json) == null ? void 0 : v.key) === a.key;
      });
      e !== -1 && (o.value.area[e].area_json = {
        ...o.value.area[e].area_json,
        ...a.path
      });
    }, ne = (a) => {
      const e = o.value.area.findIndex((t) => {
        var v;
        return ((v = t.area_json) == null ? void 0 : v.key) === a;
      });
      e !== -1 && (N.value = e);
    };
    Ve(() => {
    });
    const se = () => {
      var e;
      let a = !0;
      for (let t = 0; t < y.value.length; t++) {
        const v = y.value[t].area;
        if (R.require(v)) {
          a = !1, $({ type: "warning", message: `门店${y.value[t].store_name}的配送区域不能为空` });
          break;
        }
        for (let d = 0; d < v.length; d++) {
          const m = v[d];
          if (m.area_type === "radius" && (!((e = m.area_json) != null && e.center) || !Number.isFinite(Number(m.area_json.center.lat)) || !Number.isFinite(Number(m.area_json.center.lng)) || Number(m.area_json.radius) <= 0)) {
            a = !1, $({ type: "warning", message: `门店${y.value[t].store_name}${d + 1}的配送半径配置不完整` });
            break;
          }
          if (R.require(m.area_name)) {
            a = !1, $({ type: "warning", message: `门店${y.value[t].store_name}${d + 1}的配送区域名称不能为空` });
            break;
          }
          if (parseInt(m.start_price) < 0) {
            a = !1, $({ type: "warning", message: `门店${y.value[t].store_name}${d + 1}的起送价不能小于0` });
            break;
          }
          if (parseInt(m.delivery_price) < 0 && i.value.fee_type == "region") {
            a = !1, $({ type: "warning", message: `门店${y.value[t].store_name}${d + 1}的配送费不能小于0` });
            break;
          }
        }
        if (!a)
          break;
      }
      return a;
    }, ie = async (a) => {
      se() && (C.value || !a || await a.validate(async (e) => {
        e && (C.value = !0, await a.validate(async (t) => {
          const v = L(q(i.value)), d = {};
          y.value.forEach((m) => {
            m = L(q(m)), d[m.store_id] = m.area;
          }), v.area_data = d, Ae(v).then(() => {
            C.value = !1;
          }).catch(() => {
            C.value = !1;
          });
        }));
      }));
    }, B = () => {
      const a = F.resolve({
        path: "/shop/delivery_store"
      });
      window.open(a.href);
    }, z = () => {
      F.push({ path: "/shop/delivery/config" });
    }, ue = (a) => {
      const e = F.resolve({
        path: "/shop/delivery_store/edit",
        query: {
          store_id: a.store_id
        }
      });
      window.open(e.href);
    };
    return (a, e) => {
      const t = _e, v = ce, d = ve, m = me, b = fe, u = ge, h = ye, E = xe, de = we, pe = be;
      return j(), M("div", qe, [
        l(v, {
          class: "card !border-none mb-[15px]",
          shadow: "never"
        }, {
          default: p(() => [
            l(t, {
              content: r(Z),
              icon: r(Se),
              onBack: z
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        l(v, {
          class: "box-card !border-none",
          shadow: "never"
        }, {
          default: p(() => [
            D((j(), Ce(E, {
              "label-width": "80px",
              ref_key: "formRef",
              ref: P,
              rules: r(K),
              model: i.value,
              class: "page-form"
            }, {
              default: p(() => [
                l(b, {
                  label: r(s)("feeType")
                }, {
                  default: p(() => [
                    l(m, {
                      modelValue: i.value.fee_type,
                      "onUpdate:modelValue": e[0] || (e[0] = (n) => i.value.fee_type = n)
                    }, {
                      default: p(() => [
                        l(d, { label: "region" }, {
                          default: p(() => [
                            f(g(r(s)("region")), 1)
                          ]),
                          _: 1
                        }),
                        l(d, { label: "distance" }, {
                          default: p(() => [
                            f(g(r(s)("distance")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                D(l(b, {
                  label: r(s)("feeSetting"),
                  prop: "distance"
                }, {
                  default: p(() => [
                    c("div", Le, [
                      c("div", Pe, [
                        l(u, {
                          modelValue: i.value.base_dist,
                          "onUpdate:modelValue": e[1] || (e[1] = (n) => i.value.base_dist = n),
                          modelModifiers: { number: !0 },
                          type: "text",
                          maxlength: "6",
                          onKeyup: e[2] || (e[2] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("feeSettingTextOne")) + " ", 1),
                      c("div", Ke, [
                        l(u, {
                          modelValue: i.value.base_price,
                          "onUpdate:modelValue": e[3] || (e[3] = (n) => i.value.base_price = n),
                          modelModifiers: { trim: !0 },
                          type: "text",
                          maxlength: "8",
                          onKeyup: e[4] || (e[4] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("feeSettingTextTwo")) + " ", 1),
                      c("div", Oe, [
                        l(u, {
                          modelValue: i.value.grad_dist,
                          "onUpdate:modelValue": e[5] || (e[5] = (n) => i.value.grad_dist = n),
                          modelModifiers: { number: !0 },
                          type: "text",
                          maxlength: "6",
                          onKeyup: e[6] || (e[6] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("feeSettingTextThree")) + " ", 1),
                      c("div", Be, [
                        l(u, {
                          modelValue: i.value.grad_price,
                          "onUpdate:modelValue": e[7] || (e[7] = (n) => i.value.grad_price = n),
                          modelModifiers: { trim: !0 },
                          type: "text",
                          maxlength: "8",
                          onKeyup: e[8] || (e[8] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("priceUnit")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]), [
                  [W, i.value.fee_type == "distance"]
                ]),
                l(b, {
                  label: r(s)("weightFee"),
                  prop: "weight"
                }, {
                  default: p(() => [
                    c("div", ze, [
                      f(g(r(s)("weightFeeTextOne")) + " ", 1),
                      c("div", Ge, [
                        l(u, {
                          modelValue: i.value.weight_start,
                          "onUpdate:modelValue": e[9] || (e[9] = (n) => i.value.weight_start = n),
                          modelModifiers: { trim: !0 },
                          type: "text",
                          maxlength: "6",
                          onKeyup: e[10] || (e[10] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("weightFeeTextTwo")) + " ", 1),
                      c("div", He, [
                        l(u, {
                          modelValue: i.value.weight_unit,
                          "onUpdate:modelValue": e[11] || (e[11] = (n) => i.value.weight_unit = n),
                          modelModifiers: { trim: !0 },
                          type: "text",
                          maxlength: "6",
                          onKeyup: e[12] || (e[12] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("weightFeeTextThree")) + " ", 1),
                      c("div", We, [
                        l(u, {
                          modelValue: i.value.weight_price,
                          "onUpdate:modelValue": e[13] || (e[13] = (n) => i.value.weight_price = n),
                          modelModifiers: { trim: !0 },
                          type: "text",
                          maxlength: "8",
                          onKeyup: e[14] || (e[14] = (n) => r(V)(n))
                        }, null, 8, ["modelValue"])
                      ]),
                      f(" " + g(r(s)("priceUnit")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                l(b, {
                  label: r(s)("deliveryArea"),
                  prop: "delivery_area"
                }, {
                  default: p(() => {
                    var n, G, H;
                    return [
                      c("div", Je, [
                        c("div", Qe, [
                          y.value.length ? (j(), M("div", Xe, [
                            c("div", Ye, [
                              (j(!0), M(J, null, Q(y.value, (k, x) => (j(), M("div", {
                                class: I(["h-[70px] cursor-pointer px-[10px] flex flex flex-col justify-center border-b-[1px] border-solid border-[#dcdfe6] box-border", { "bg-[#E6F1FE] text-primary": o.value.store_id == k.store_id }]),
                                key: x,
                                onClick: (A) => le(k)
                              }, [
                                c("div", ea, [
                                  c("span", aa, g(k.store_name), 1),
                                  l(h, {
                                    type: "primary",
                                    onClick: U((A) => ue(k), ["stop"]),
                                    link: "",
                                    class: "ml-[10px] !text-[12px]"
                                  }, {
                                    default: p(() => [
                                      f("配置")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                c("div", {
                                  class: I(["text-[12px] text-[#999] leading-[16px] multi-hidden", { "!text-primary": o.value.store_id == k.store_id }])
                                }, "地址：" + g(k.full_address), 3)
                              ], 10, Ze))), 128))
                            ]),
                            c("div", ta, [
                              l(h, {
                                type: "primary",
                                onClick: e[15] || (e[15] = (k) => B()),
                                class: "w-full box-border"
                              }, {
                                default: p(() => [
                                  f("新增配送点")
                                ]),
                                _: 1
                              })
                            ])
                          ])) : (j(), M("div", ra, [
                            la,
                            l(h, {
                              type: "primary",
                              onClick: e[16] || (e[16] = (k) => B()),
                              link: "",
                              class: "ml-[10px]"
                            }, {
                              default: p(() => [
                                f(g(r(s)("toSetting")), 1)
                              ]),
                              _: 1
                            })
                          ]))
                        ]),
                        c("div", oa, [
                          l(Fe, {
                            ref_key: "mapSelectorRef",
                            ref: _,
                            id: "container-radius",
                            "container-id": "container-radius",
                            longitude: o.value.longitude,
                            latitude: o.value.latitude,
                            zoom: 14,
                            "disabled-click-marker": !0,
                            "container-style": "w-full h-[520px]",
                            "selected-key": ((H = (G = (n = o.value) == null ? void 0 : n.area[N.value]) == null ? void 0 : G.area_json) == null ? void 0 : H.key) || "",
                            onAreaChange: oe,
                            onSelectChange: ne
                          }, null, 8, ["longitude", "latitude", "selected-key"]),
                          y.value.length ? (j(), M("div", na, [
                            l(de, null, {
                              default: p(() => [
                                (j(!0), M(J, null, Q(o.value.area, (k, x) => {
                                  var A;
                                  return j(), M("div", {
                                    class: I(["p-[10px] region-item pr-[50px] relative", { "!border-primary": x == N.value }]),
                                    key: ((A = k.area_json) == null ? void 0 : A.key) || x,
                                    onClick: (w) => te(x)
                                  }, [
                                    l(E, {
                                      "label-width": "80px",
                                      model: k,
                                      rules: r(K),
                                      class: "page-form",
                                      ref_for: !0,
                                      ref: "areaFromRef"
                                    }, {
                                      default: p(() => [
                                        c("div", ia, [
                                          l(b, {
                                            label: r(s)("areaName"),
                                            prop: "area_name"
                                          }, {
                                            default: p(() => [
                                              l(u, {
                                                modelValue: o.value.area[x].area_name,
                                                "onUpdate:modelValue": (w) => o.value.area[x].area_name = w,
                                                modelModifiers: { trim: !0 },
                                                type: "text",
                                                onClick: e[17] || (e[17] = U(() => {
                                                }, ["stop"]))
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1032, ["label"])
                                        ]),
                                        c("div", ua, [
                                          l(b, {
                                            label: r(s)("startPrice"),
                                            prop: "start_price"
                                          }, {
                                            default: p(() => [
                                              l(u, {
                                                modelValue: o.value.area[x].start_price,
                                                "onUpdate:modelValue": (w) => o.value.area[x].start_price = w,
                                                modelModifiers: { trim: !0 },
                                                maxlength: "8",
                                                type: "text",
                                                onKeyup: e[18] || (e[18] = (w) => r(V)(w)),
                                                onClick: e[19] || (e[19] = U(() => {
                                                }, ["stop"]))
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1032, ["label"])
                                        ]),
                                        D(c("div", da, [
                                          l(b, {
                                            label: r(s)("deliveryPrice"),
                                            prop: "delivery_price"
                                          }, {
                                            default: p(() => [
                                              l(u, {
                                                modelValue: o.value.area[x].delivery_price,
                                                "onUpdate:modelValue": (w) => o.value.area[x].delivery_price = w,
                                                modelModifiers: { trim: !0 },
                                                type: "text",
                                                onKeyup: e[20] || (e[20] = (w) => r(V)(w)),
                                                onClick: e[21] || (e[21] = U(() => {
                                                }, ["stop"]))
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1032, ["label"])
                                        ], 512), [
                                          [W, i.value.fee_type == "region"]
                                        ]),
                                        l(b, {
                                          label: r(s)("areaType")
                                        }, {
                                          default: p(() => [
                                            l(m, {
                                              modelValue: o.value.area[x].area_type,
                                              "onUpdate:modelValue": (w) => o.value.area[x].area_type = w,
                                              onChange: (w) => re(x)
                                            }, {
                                              default: p(() => [
                                                l(d, {
                                                  label: "radius",
                                                  size: "large",
                                                  class: "!mr-[10px]"
                                                }, {
                                                  default: p(() => [
                                                    f(g(r(s)("radius")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                l(d, {
                                                  label: "custom",
                                                  size: "large",
                                                  class: "!mr-[0px]"
                                                }, {
                                                  default: p(() => [
                                                    f(g(r(s)("custom")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                          ]),
                                          _: 2
                                        }, 1032, ["label"])
                                      ]),
                                      _: 2
                                    }, 1032, ["model", "rules"]),
                                    l(h, {
                                      type: "primary",
                                      link: "",
                                      class: "absolute z-1 top-[10px] right-[10px]",
                                      onClick: U((w) => ae(x), ["stop"])
                                    }, {
                                      default: p(() => [
                                        f(g(r(s)("delete")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ], 10, sa);
                                }), 128)),
                                c("div", pa, [
                                  l(h, {
                                    plain: "",
                                    onClick: ee
                                  }, {
                                    default: p(() => [
                                      f(g(r(s)("addDeliveryArea")), 1)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ])) : Ee("", !0)
                        ])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["rules", "model"])), [
              [pe, C.value]
            ])
          ]),
          _: 1
        }),
        c("div", _a, [
          c("div", ca, [
            l(h, {
              type: "primary",
              onClick: e[22] || (e[22] = (n) => ie(P.value)),
              disabled: C.value
            }, {
              default: p(() => [
                f(g(r(s)("save")), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            l(h, {
              onClick: e[23] || (e[23] = (n) => z())
            }, {
              default: p(() => [
                f(g(r(s)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const Ra = /* @__PURE__ */ De(va, [["__scopeId", "data-v-55c9fd08"]]);
export {
  Ra as default
};
