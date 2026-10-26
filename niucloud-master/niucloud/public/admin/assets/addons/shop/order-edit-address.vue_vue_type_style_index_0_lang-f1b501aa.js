import { ElRadio as ue, ElRadioGroup as _e, ElFormItem as fe, ElInput as me, ElOption as pe, ElSelect as ve, ElForm as ye, ElButton as ke, ElDialog as he, ElLoadingDirective as ge } from "element-plus/es";
import { defineComponent as be, ref as p, reactive as K, computed as xe, onMounted as Ve, watch as T, openBlock as f, createBlock as x, unref as u, withCtx as _, createElementVNode as Q, createVNode as n, createTextVNode as U, toDisplayString as R, withDirectives as we, createElementBlock as g, Fragment as E, renderList as C, createCommentVNode as N, normalizeClass as Ee, nextTick as Ce } from "vue";
import { t as o } from "/admin/assets/shared/admin-lang.js";
import { i as De, f as Le } from "./delivery-da6bd7ad.js";
import { y as W, z as Ae, A as Fe } from "./order-a6ced131.js";
import { getIsTradeManaged as Re } from "/admin/assets/shared/core-shared.js";
import { getAreaListByPid as V } from "/admin/assets/shared/core-shared.js";
import { debounce as Pe, deepClone as Ie } from "/admin/assets/shared/core-shared.js";
import { _ as Me } from "./index.vue_vue_type_script_setup_true_lang-98c9e9f0.js";
const Te = {
  key: 0,
  class: "text-[#f52222] text-[12px] line-height-[15px]"
}, Ue = { class: "dialog-footer" }, We = /* @__PURE__ */ be({
  __name: "order-edit-address",
  emits: ["complete"],
  setup(Ne, { expose: X, emit: S }) {
    const w = p(!1), k = p(!1), P = p(), Y = p([]), B = p([]), Z = p(!1), q = p([]);
    De({}).then((t) => {
      Y.value = t.data;
    }), Re().then((t) => {
      Z.value = t.data.is_trade_managed;
    });
    const e = K({ ...{
      order_id: 0,
      delivery_type: "",
      taker_name: "",
      taker_mobile: "",
      taker_latitude: "",
      taker_longitude: "",
      taker_full_address: "",
      taker_address: "",
      taker_province: 0,
      taker_city: 0,
      taker_district: 0,
      is_delivery_address: 0,
      is_refund_address: 0,
      is_default_delivery: 0,
      is_default_refund: 0,
      take_store_id: ""
    } }), $ = p(), ee = xe(() => ({
      delivery_type: [
        { required: !0, message: o("deliveryTypePlaceholder"), trigger: "blur" }
      ],
      taker_name: [
        { required: !0, validator: te, trigger: "blur" }
      ],
      taker_mobile: [
        { required: !0, validator: ae, trigger: "blur" }
      ],
      address_area: [
        {
          required: !0,
          validator: (t, a, r) => {
            e.taker_province || r(new Error(o("provincePlaceholder"))), e.taker_city || r(new Error(o("cityPlaceholder"))), e.taker_address || r(new Error(o("detailedAddress"))), r();
          }
        }
      ]
    })), te = (t, a, r) => {
      e.delivery_type == "express" && a === "" ? r(new Error(o("contactsPlaceholder"))) : r();
    }, ae = (t, a, r) => {
      if (e.delivery_type == "express" || e.delivery_type == "local_delivery") {
        const i = /^1[3-9]\d{9}$/;
        a === "" ? r(new Error(o("ContactInformationPlaceholder"))) : a.length != 11 ? r(new Error("请输入11位手机号")) : i.test(a) || r(new Error("请输入正确的手机号"));
      }
      r();
    }, re = (t) => {
      e.take_store_id = t;
    }, I = () => {
      e.taker_address = "";
    }, le = async (t) => {
      k.value || !t || await t.validate(async (a) => {
        if (a)
          if (k.value = !0, m.value == "express" || m.value == "local_delivery") {
            const r = [
              e.taker_province ? M(s.province, e.taker_province) : "",
              e.taker_city ? M(s.city, e.taker_city) : "",
              e.taker_district ? M(s.district, e.taker_district) : "",
              e.taker_address
            ];
            e.taker_full_address = r.join(""), e.delivery_type = m.value, W(e).then((i) => {
              k.value = !1, w.value = !1, S("complete"), J();
            }).catch(() => {
              k.value = !1;
            });
          } else {
            const r = {
              order_id: e.order_id,
              delivery_type: m.value,
              take_store_id: e.take_store_id
            };
            W(r).then((i) => {
              k.value = !1, w.value = !1, S("complete");
            }).catch(() => {
              k.value = !1;
            });
          }
      });
    }, ie = (t) => {
      Fe(t).then((a) => {
        for (const r in e)
          a.data[r] && (e[r] = a.data[r]);
        j(e.delivery_type), k.value = !1;
      });
    }, de = async (t) => {
      k.value = !0;
      const a = {
        order_id: t.order_id,
        delivery_type: t.delivery_type
      };
      Ce(() => {
        ie(a);
      });
    };
    (() => {
      Le().then((t) => {
        const a = t.data ? Ie(t.data) : [];
        B.value = a.filter((r) => r.status == 1);
      });
    })();
    const m = p(), j = (t) => {
      m.value = t, m.value == "local_delivery" && D();
    };
    (() => {
      Ae().then((t) => {
        q.value = t.data;
      });
    })();
    const z = p(""), oe = (t) => {
      var a, r;
      if (e.taker_latitude = t.lat, e.taker_longitude = t.lng, t.address) {
        if (t.address.formatted_addresses && !t.address.addressComponent) {
          e.taker_address = ((a = t.address.formatted_addresses) == null ? void 0 : a.recommend) || "";
          const i = t.address.address || "";
          ne(i);
        } else if (t.address.addressComponent) {
          const i = ((r = t.address.formatted_addresses) == null ? void 0 : r.recommend) || t.address.formatted_address || t.address.poi || "";
          e.taker_address = i, se(t.address.addressComponent);
        }
      }
    }, ne = (t) => {
      const a = t.match(/^(.+?省|.+?市|.+?自治区)/), r = t.match(/(.+?市)/), i = t.match(/(.+?区|.+?县)/g);
      if (a) {
        const d = a[1], v = s.province.find(
          (c) => c.name.includes(d) || d.includes(c.name)
        );
        v && (e.taker_province = v.id, V(e.taker_province).then((c) => {
          if (s.city = c.data || [], r) {
            const y = r[1], L = s.city.find(
              (b) => b.name.includes(y) || y.includes(b.name)
            );
            L && (e.taker_city = L.id, V(e.taker_city).then((b) => {
              if (s.district = b.data || [], i && i.length > 0) {
                const A = i[i.length - 1], F = s.district.find(
                  (l) => l.name.includes(A) || A.includes(l.name)
                );
                F && (e.taker_district = F.id);
              }
            }));
          }
        }));
      }
    }, se = (t) => {
      if (t && t.province) {
        const a = s.province.find(
          (r) => r.name.includes(t.province) || t.province.includes(r.name)
        );
        a && (e.taker_province = a.id, V(e.taker_province).then((r) => {
          if (s.city = r.data || [], t.city) {
            const i = s.city.find(
              (d) => d.name.includes(t.city) || t.city.includes(d.name)
            );
            i && (e.taker_city = i.id, V(e.taker_city).then((d) => {
              if (s.district = d.data || [], t.county) {
                const v = s.district.find(
                  (c) => c.name.includes(t.county) || t.county.includes(c.name)
                );
                v && (e.taker_district = v.id);
              }
            }));
          }
        }));
      }
    };
    Ve(() => {
    });
    const s = K({
      province: [],
      city: [],
      district: []
    }), O = p(), G = p(), H = p();
    T(() => e.taker_province, (t) => {
      t ? V(e.taker_province).then((a) => {
        s.city = a.data;
        const r = e.taker_city;
        if (r) {
          let i = !1;
          for (let d = 0; d < a.data.length; d++)
            if (r == a.data[d].id) {
              i = !0;
              break;
            }
          if (i) {
            e.taker_city = r;
            return;
          }
        }
        e.taker_city = 0, m.value == "local_delivery" && D();
      }) : e.taker_city = 0;
    }), T(() => e.taker_city, (t) => {
      t ? V(e.taker_city).then((a) => {
        s.district = a.data;
        const r = e.taker_district;
        if (r) {
          let i = !1;
          for (let d = 0; d < a.data.length; d++)
            if (r == a.data[d].id) {
              i = !0;
              break;
            }
          if (i) {
            e.taker_district = r;
            return;
          }
        }
        m.value == "local_delivery" && D(), e.taker_district = 0;
      }) : e.taker_district = 0;
    }), T(() => e.taker_district, (t) => {
      t && m.value == "local_delivery" && D();
    });
    const D = Pe(async () => {
      setTimeout(async () => {
        var a, r, i, d, v, c;
        const t = [
          e.taker_province ? (r = (a = O.value) == null ? void 0 : a.states) == null ? void 0 : r.selectedLabel : "",
          e.taker_city ? (d = (i = G.value) == null ? void 0 : i.states) == null ? void 0 : d.selectedLabel : "",
          e.taker_district ? (c = (v = H.value) == null ? void 0 : v.states) == null ? void 0 : c.selectedLabel : "",
          e.taker_address
        ].join("");
        if (t && P.value)
          try {
            const y = await P.value.searchAddress(t);
            e.taker_latitude = y.lat, e.taker_longitude = y.lng;
          } catch (y) {
            console.error("地址搜索失败:", y);
          }
      }, 500);
    }, 500);
    V(0).then((t) => {
      s.province = t.data;
    });
    const ce = (t) => {
      J(), t();
    }, J = () => {
      const t = {
        order_id: 0,
        delivery_type: "",
        taker_name: "",
        taker_mobile: "",
        taker_latitude: "",
        taker_longitude: "",
        taker_full_address: "",
        taker_address: "",
        taker_province: 0,
        taker_city: 0,
        taker_district: 0,
        is_delivery_address: 0,
        is_refund_address: 0,
        is_default_delivery: 0,
        is_default_refund: 0,
        take_store_id: ""
      };
      Object.keys(e).forEach((a) => {
        t[a] != null && (e[a] = t[a]);
      });
    }, M = (t, a) => t.find((i) => i.id === a).name;
    return X({
      showDialog: w,
      setFormData: de
    }), (t, a) => {
      const r = ue, i = _e, d = fe, v = me, c = pe, y = ve, L = ye, b = ke, A = he, F = ge;
      return f(), x(A, {
        modelValue: w.value,
        "onUpdate:modelValue": a[10] || (a[10] = (l) => w.value = l),
        title: u(o)("editAddress"),
        width: "700px",
        class: "diy-dialog-wrap",
        "destroy-on-close": !0,
        "before-close": ce
      }, {
        footer: _(() => [
          Q("span", Ue, [
            n(b, {
              onClick: a[8] || (a[8] = (l) => w.value = !1)
            }, {
              default: _(() => [
                U(R(u(o)("cancel")), 1)
              ]),
              _: 1
            }),
            n(b, {
              type: "primary",
              loading: k.value,
              onClick: a[9] || (a[9] = (l) => le($.value))
            }, {
              default: _(() => [
                U(R(u(o)("confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: _(() => [
          we((f(), g("div", null, [
            n(L, {
              model: e,
              "label-width": "100px",
              ref_key: "formRef",
              ref: $,
              rules: u(ee),
              class: "page-form mb-[30px]"
            }, {
              default: _(() => [
                n(d, {
                  label: u(o)("deliveryType"),
                  prop: "delivery_type"
                }, {
                  default: _(() => [
                    n(i, {
                      modelValue: e.delivery_type,
                      "onUpdate:modelValue": a[0] || (a[0] = (l) => e.delivery_type = l),
                      onChange: j
                    }, {
                      default: _(() => [
                        (f(!0), g(E, null, C(B.value, (l, h) => (f(), x(r, {
                          label: l.key,
                          key: h,
                          status: ""
                        }, {
                          default: _(() => [
                            U(R(l.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                m.value == "express" || m.value == "local_delivery" ? (f(), g(E, { key: 0 }, [
                  n(d, {
                    label: u(o)("contacts"),
                    prop: "taker_name"
                  }, {
                    default: _(() => [
                      n(v, {
                        modelValue: e.taker_name,
                        "onUpdate:modelValue": a[1] || (a[1] = (l) => e.taker_name = l),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: u(o)("contactsPlaceholder"),
                        class: "input-width",
                        maxlength: "10"
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(d, {
                    label: u(o)("ContactInformation"),
                    prop: "taker_mobile"
                  }, {
                    default: _(() => [
                      n(v, {
                        modelValue: e.taker_mobile,
                        "onUpdate:modelValue": a[2] || (a[2] = (l) => e.taker_mobile = l),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: u(o)("ContactInformationPlaceholder"),
                        class: "input-width",
                        maxlength: "15"
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  n(d, {
                    label: u(o)("address"),
                    prop: "address_area"
                  }, {
                    default: _(() => [
                      n(y, {
                        modelValue: e.taker_province,
                        "onUpdate:modelValue": a[3] || (a[3] = (l) => e.taker_province = l),
                        "value-key": "id",
                        clearable: "",
                        class: "w-[150px]",
                        ref_key: "provinceRef",
                        ref: O,
                        placeholder: u(o)("province"),
                        onChange: I
                      }, {
                        default: _(() => [
                          n(c, {
                            label: u(o)("province"),
                            value: 0
                          }, null, 8, ["label"]),
                          (f(!0), g(E, null, C(s.province, (l, h) => (f(), x(c, {
                            key: h,
                            label: l.name,
                            value: l.id
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"]),
                      n(y, {
                        modelValue: e.taker_city,
                        "onUpdate:modelValue": a[4] || (a[4] = (l) => e.taker_city = l),
                        "value-key": "id",
                        clearable: "",
                        class: "w-[150px] ml-3",
                        ref_key: "cityRef",
                        ref: G,
                        placeholder: u(o)("city"),
                        onChange: I
                      }, {
                        default: _(() => [
                          n(c, {
                            label: u(o)("city"),
                            value: 0
                          }, null, 8, ["label"]),
                          (f(!0), g(E, null, C(s.city, (l, h) => (f(), x(c, {
                            key: h,
                            label: l.name,
                            value: l.id
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"]),
                      n(y, {
                        modelValue: e.taker_district,
                        "onUpdate:modelValue": a[5] || (a[5] = (l) => e.taker_district = l),
                        "value-key": "id",
                        clearable: "",
                        class: "w-[150px] mt-[20px]",
                        ref_key: "districtRef",
                        ref: H,
                        placeholder: u(o)("area"),
                        onChange: I
                      }, {
                        default: _(() => [
                          n(c, {
                            label: u(o)("area"),
                            value: 0
                          }, null, 8, ["label"]),
                          (f(!0), g(E, null, C(s.district, (l, h) => (f(), x(c, {
                            key: h,
                            label: l.name,
                            value: l.id
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder"]),
                      n(v, {
                        modelValue: e.taker_address,
                        "onUpdate:modelValue": a[6] || (a[6] = (l) => e.taker_address = l),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: u(o)("detailedAddress"),
                        class: "!w-[214px] mt-[20px] ml-3",
                        maxlength: "30"
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ], 64)) : N("", !0),
                n(d, null, {
                  default: _(() => [
                    Q("div", {
                      class: Ee(["h-[0px] overflow-hidden", { "!h-auto": m.value == "local_delivery" }])
                    }, [
                      n(Me, {
                        ref_key: "mapSelectorRef",
                        ref: P,
                        longitude: e.taker_longitude,
                        latitude: e.taker_latitude,
                        zoom: 14,
                        "container-style": "w-[500px] h-[270px] relative",
                        onLocationChange: oe
                      }, null, 8, ["longitude", "latitude"])
                    ], 2),
                    m.value == "local_delivery" && z.value ? (f(), g("div", Te, R(z.value), 1)) : N("", !0)
                  ]),
                  _: 1
                }),
                m.value == "store" ? (f(), x(d, {
                  key: 1,
                  label: u(o)("selfPickupStores")
                }, {
                  default: _(() => [
                    n(y, {
                      modelValue: e.take_store_id,
                      "onUpdate:modelValue": a[7] || (a[7] = (l) => e.take_store_id = l),
                      "value-key": "store_id",
                      onChange: re
                    }, {
                      default: _(() => [
                        (f(!0), g(E, null, C(q.value, (l, h) => (f(), x(c, {
                          key: h,
                          label: l.store_name,
                          value: l.store_id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : N("", !0)
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ])), [
            [F, k.value]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  We as _
};
