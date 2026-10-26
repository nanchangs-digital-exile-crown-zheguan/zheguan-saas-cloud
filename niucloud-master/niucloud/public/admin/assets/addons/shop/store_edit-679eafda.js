import { ElPageHeader as ne, ElCard as se, ElInput as ce, ElFormItem as me, ElCheckbox as ue, ElCheckboxGroup as _e, ElTimePicker as pe, ElRadio as fe, ElRadioGroup as ve, ElOption as be, ElSelect as he, ElForm as ye, ElButton as ge, ElLoadingDirective as Ve } from "element-plus/es";
import { _ as we } from "./index-36e25503.js";
import { defineComponent as xe, ref as w, reactive as J, onMounted as ke, computed as Te, watch as q, openBlock as f, createElementBlock as V, createVNode as a, withCtx as c, unref as d, withDirectives as Pe, createBlock as P, createElementVNode as h, toDisplayString as p, createTextVNode as y, Fragment as E, renderList as L, createCommentVNode as Q } from "vue";
import { t as i } from "/admin/assets/shared/admin-lang.js";
import { ArrowLeft as Ee } from "@element-plus/icons-vue";
import { M as Le, N as Re, O as De, P as Me } from "./delivery-da6bd7ad.js";
import { getAreaListByPid as T } from "/admin/assets/shared/core-shared.js";
import { useRoute as Ue } from "vue-router";
import { debounce as je, filterNumber as Ne } from "/admin/assets/shared/core-shared.js";
import { _ as Ae } from "./index.vue_vue_type_script_setup_true_lang-98c9e9f0.js";
import { c as Fe } from "./cloneDeep-70d647ec.js";

import "./index.vue_vue_type_script_setup_true_lang-5a5a43e9.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./sortable.esm-fc069a97.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "/admin/assets/shared/core-shared.js";
import "./isArrayLike-62604998.js";
const Ie = { class: "main-container" }, Ce = { class: "text-[12px] text-[#999]" }, Se = /* @__PURE__ */ h("br", null, null, -1), qe = /* @__PURE__ */ h("span", { class: "mx-2" }, "-", -1), He = ["onClick"], Be = { class: "text-[12px] text-[#999]" }, $e = { class: "text-[12px] text-[#999]" }, Oe = { class: "fixed-footer-wrap" }, ze = { class: "fixed-footer !z-[1000]" }, vt = /* @__PURE__ */ xe({
  __name: "store_edit",
  setup(Ge) {
    const W = Ue(), R = parseInt(W.query.id), x = w(!1), C = w(), u = J({
      province: [],
      city: [],
      district: []
    }), D = w(), M = w(), U = w();
    T(0).then((l) => {
      u.province = l.data;
    }), ke(() => {
      Y();
    });
    const X = w({}), H = w({}), Y = () => {
      Le().then((l) => {
        X.value = l.data.week_list, H.value = l.data.time_interval_list;
      });
    }, Z = (l) => {
      var t, r;
      if (e.latitude = l.lat, e.longitude = l.lng, l.address) {
        if (l.address.formatted_addresses && !l.address.addressComponent) {
          e.address = ((t = l.address.formatted_addresses) == null ? void 0 : t.recommend) || "";
          const n = l.address.address || "";
          ee(n);
        } else if (l.address.addressComponent) {
          const n = ((r = l.address.formatted_addresses) == null ? void 0 : r.recommend) || l.address.formatted_address || l.address.poi || "";
          e.address = n, te(l.address.addressComponent);
        }
      }
    }, ee = (l) => {
      const t = l.match(/^(.+?省|.+?市|.+?自治区)/), r = l.match(/(.+?市)/), n = l.match(/(.+?区|.+?县)/g);
      if (t) {
        const s = t[1], m = u.province.find(
          (v) => v.name.includes(s) || s.includes(v.name)
        );
        m && (e.province_id = m.id, T(e.province_id).then((v) => {
          if (u.city = v.data || [], r) {
            const _ = r[1], N = u.city.find(
              (k) => k.name.includes(_) || _.includes(k.name)
            );
            N && (e.city_id = N.id, T(e.city_id).then((k) => {
              if (u.district = k.data || [], n && n.length > 0) {
                const A = n[n.length - 1], F = u.district.find(
                  (g) => g.name.includes(A) || A.includes(g.name)
                );
                F && (e.district_id = F.id);
              }
            }));
          }
        }));
      }
    }, te = (l) => {
      if (l && l.province) {
        const t = u.province.find(
          (r) => r.name.includes(l.province) || l.province.includes(r.name)
        );
        t && (e.province_id = t.id, T(e.province_id).then((r) => {
          if (u.city = r.data || [], l.city) {
            const n = u.city.find(
              (s) => s.name.includes(l.city) || l.city.includes(s.name)
            );
            n && (e.city_id = n.id, T(e.city_id).then((s) => {
              if (u.district = s.data || [], l.county) {
                const m = u.district.find(
                  (v) => v.name.includes(l.county) || l.county.includes(v.name)
                );
                m && (e.district_id = m.id);
              }
            }));
          }
        }));
      }
    }, B = {
      store_id: 0,
      store_name: "",
      store_desc: "",
      store_logo: "",
      store_mobile: "",
      province_id: 0,
      province_name: "",
      city_id: 0,
      city_name: "",
      district_id: 0,
      district_name: "",
      address: "",
      full_address: "",
      longitude: 116.39719,
      latitude: 39.908626,
      trade_time: "",
      time_week: ["1", "2", "3", "4", "5", "6", "0"],
      trade_time_json: [
        { start_time: "", end_time: "" }
        // 初始一个时间段
      ],
      time_interval: 30
    }, e = J({ ...B }), le = () => {
      e.trade_time_json.push({ start_time: "", end_time: "" });
    }, re = (l) => {
      e.trade_time_json.splice(l, 1);
    }, $ = (l) => {
      const t = l.split(":");
      return t[0] * 60 * 60 + t[1] * 60;
    }, O = (l) => {
      let t = Math.floor(l / 3600), r = Math.floor(l / 60) - t * 60;
      return t = t < 10 ? "0" + t : t, r = r < 10 ? "0" + r : r, t + ":" + r;
    };
    R && (async (l = 0) => {
      x.value = !0, Object.assign(e, B);
      const t = await (await Re(l)).data;
      Object.keys(e).forEach((r) => {
        t[r] != null && (e[r] = t[r]), r == "trade_time_json" && Array.isArray(t[r]) && (e[r] = t[r].map((n) => ({
          start_time: O(n.start_time),
          end_time: O(n.end_time)
        })));
      }), x.value = !1;
    })(R);
    const z = w(), ie = Te(() => ({
      store_name: [
        { required: !0, message: i("storeNamePlaceholder"), trigger: "blur" }
      ],
      store_logo: [
        { required: !0, message: i("storeLogoPlaceholder"), trigger: "blur" }
      ],
      store_mobile: [
        { required: !0, message: i("storeMobilePlaceholder"), trigger: "blur" }
      ],
      trade_time: [
        { required: !0, message: i("tradeTimePlaceholder"), trigger: "blur" }
      ],
      address_area: [
        {
          validator: (l, t, r) => {
            e.province_id || r(new Error(i("provincePlaceholder"))), e.city_id || r(new Error(i("cityPlaceholder"))), r();
          }
        }
      ],
      address: [
        { required: !0, message: i("addressPlaceholder"), trigger: "blur" }
      ],
      time_week: [
        { required: !0, message: i("selectBusinessDays"), trigger: "change" }
      ],
      trade_time_json: [
        {
          validator: (l, t, r) => {
            if (!t || t.length === 0)
              return r(new Error(i("tradeTimePlaceholderTwo")));
            for (let n = 0; n < t.length; n++) {
              const s = t[n];
              if (!s.start_time || !s.end_time)
                return r(new Error(i("tradeTimePlaceholderTwo")));
              if (s.end_time <= s.start_time)
                return r(new Error(i("tradeTimePlaceholderFour")));
              if (n > 0 && t[n].start_time < t[n - 1].end_time)
                return r(new Error(i("tradeTimePlaceholderFive")));
            }
            r();
          },
          trigger: "change",
          required: !0
        }
      ],
      time_interval: [
        { required: !0, message: i("tradeTimePlaceholderThree"), trigger: "change" }
      ]
    }));
    q(() => e.province_id, (l) => {
      l ? T(e.province_id).then((t) => {
        u.city = t.data;
        const r = e.city_id;
        if (r) {
          let n = !1;
          for (let s = 0; s < t.data.length; s++)
            if (r == t.data[s].id) {
              n = !0;
              break;
            }
          if (n) {
            e.city_id = r;
            return;
          }
        }
        e.city_id = 0, j();
      }) : e.city_id = 0;
    }), q(() => e.city_id, (l) => {
      l ? T(e.city_id).then((t) => {
        u.district = t.data;
        const r = e.district_id;
        if (r) {
          let n = !1;
          for (let s = 0; s < t.data.length; s++)
            if (r == t.data[s].id) {
              n = !0;
              break;
            }
          if (n) {
            e.district_id = r;
            return;
          }
        }
        j(), e.district_id = 0;
      }) : e.district_id = 0;
    }), q(() => e.district_id, (l) => {
      l && j();
    });
    const j = je(async () => {
      setTimeout(async () => {
        var t, r, n, s, m, v;
        const l = [
          e.province_id ? (r = (t = D.value) == null ? void 0 : t.states) == null ? void 0 : r.selectedLabel : "",
          e.city_id ? (s = (n = M.value) == null ? void 0 : n.states) == null ? void 0 : s.selectedLabel : "",
          e.district_id ? (v = (m = U.value) == null ? void 0 : m.states) == null ? void 0 : v.selectedLabel : "",
          e.address
        ].join("");
        if (l && C.value)
          try {
            const _ = await C.value.searchAddress(l);
            e.latitude = _.lat, e.longitude = _.lng;
          } catch (_) {
            console.error("地址搜索失败:", _);
          }
      }, 500);
    }, 500), oe = async (l) => {
      x.value || !l || await l.validate(async (t) => {
        if (t) {
          x.value = !0;
          const r = Fe(e);
          e.province_name = e.province_id ? D.value.states.selectedLabel : "", e.city_name = e.city_id ? M.value.states.selectedLabel : "", e.district_name = e.district_id ? U.value.states.selectedLabel : "";
          const n = [
            r.province_id ? D.value.states.selectedLabel : "",
            r.city_id ? M.value.states.selectedLabel : "",
            r.district_id ? U.value.states.selectedLabel : "",
            r.address
          ];
          r.full_address = n.join(""), r.trade_time_json = e.trade_time_json.map((m) => ({
            start_time: m.start_time ? $(m.start_time) : null,
            end_time: m.end_time ? $(m.end_time) : null
          })), (R ? De : Me)(r).then((m) => {
            x.value = !1, history.back();
          }).catch(() => {
            x.value = !1;
          });
        }
      });
    }, G = () => {
      history.back();
    };
    return (l, t) => {
      const r = ne, n = se, s = ce, m = me, v = we, _ = ue, N = _e, k = pe, A = fe, F = ve, g = be, S = he, ae = ye, K = ge, de = Ve;
      return f(), V("div", Ie, [
        a(n, {
          class: "card !border-none",
          shadow: "never"
        }, {
          default: c(() => [
            a(r, {
              content: d(R) ? d(i)("updateStore") : d(i)("addStore"),
              icon: d(Ee),
              onBack: G
            }, null, 8, ["content", "icon"])
          ]),
          _: 1
        }),
        Pe((f(), P(n, {
          class: "box-card mt-[15px] !border-none",
          shadow: "never"
        }, {
          default: c(() => [
            a(ae, {
              model: e,
              "label-width": "140px",
              ref_key: "formRef",
              ref: z,
              rules: d(ie),
              class: "page-form"
            }, {
              default: c(() => [
                a(m, {
                  label: d(i)("storeName"),
                  prop: "store_name"
                }, {
                  default: c(() => [
                    a(s, {
                      modelValue: e.store_name,
                      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.store_name = o),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: d(i)("storeNamePlaceholder"),
                      class: "input-width",
                      maxlength: "30"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeDesc")
                }, {
                  default: c(() => [
                    a(s, {
                      modelValue: e.store_desc,
                      "onUpdate:modelValue": t[1] || (t[1] = (o) => e.store_desc = o),
                      modelModifiers: { trim: !0 },
                      type: "textarea",
                      rows: "4",
                      clearable: "",
                      placeholder: d(i)("storeDescPlaceholder"),
                      class: "input-width",
                      maxlength: "200"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeLogo")
                }, {
                  default: c(() => [
                    a(v, {
                      modelValue: e.store_logo,
                      "onUpdate:modelValue": t[2] || (t[2] = (o) => e.store_logo = o)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeMobile"),
                  prop: "store_mobile"
                }, {
                  default: c(() => [
                    a(s, {
                      modelValue: e.store_mobile,
                      "onUpdate:modelValue": t[3] || (t[3] = (o) => e.store_mobile = o),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: d(i)("storeMobilePlaceholder"),
                      class: "input-width",
                      onKeyup: t[4] || (t[4] = (o) => d(Ne)(o)),
                      onBlur: t[5] || (t[5] = (o) => e.store_mobile = o.target.value),
                      maxlength: "11"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("tradeTime"),
                  prop: "trade_time"
                }, {
                  default: c(() => [
                    h("div", null, [
                      a(s, {
                        modelValue: e.trade_time,
                        "onUpdate:modelValue": t[6] || (t[6] = (o) => e.trade_time = o),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        placeholder: d(i)("tradeTimePlaceholder"),
                        class: "input-width"
                      }, null, 8, ["modelValue", "placeholder"]),
                      h("p", Ce, p(d(i)("tradeTimeTips")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeDate"),
                  prop: "time_week"
                }, {
                  default: c(() => [
                    a(N, {
                      modelValue: e.time_week,
                      "onUpdate:modelValue": t[7] || (t[7] = (o) => e.time_week = o)
                    }, {
                      default: c(() => [
                        a(_, { label: "1" }, {
                          default: c(() => [
                            y(p(d(i)("monday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "2" }, {
                          default: c(() => [
                            y(p(d(i)("tuesday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "3" }, {
                          default: c(() => [
                            y(p(d(i)("wednesday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "4" }, {
                          default: c(() => [
                            y(p(d(i)("thursday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "5" }, {
                          default: c(() => [
                            y(p(d(i)("friday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "6" }, {
                          default: c(() => [
                            y(p(d(i)("saturday")), 1)
                          ]),
                          _: 1
                        }),
                        a(_, { label: "0" }, {
                          default: c(() => [
                            y(p(d(i)("sunday")), 1)
                          ]),
                          _: 1
                        }),
                        Se
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeTime"),
                  prop: "trade_time_json"
                }, {
                  default: c(() => [
                    h("div", null, [
                      h("div", null, [
                        (f(!0), V(E, null, L(e.trade_time_json, (o, b) => (f(), V("div", {
                          key: b,
                          class: "mb-3"
                        }, [
                          a(k, {
                            modelValue: o.start_time,
                            "onUpdate:modelValue": (I) => o.start_time = I,
                            placeholder: d(i)("startTime"),
                            format: "HH:mm",
                            "value-format": "HH:mm",
                            "picker-options": { selectableRange: "00:00 - 23:59" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          qe,
                          a(k, {
                            modelValue: o.end_time,
                            "onUpdate:modelValue": (I) => o.end_time = I,
                            placeholder: d(i)("endTime"),
                            format: "HH:mm",
                            "value-format": "HH:mm",
                            "picker-options": { selectableRange: "00:00 - 23:59" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          b > 0 ? (f(), V("span", {
                            key: 0,
                            class: "text-primary cursor-pointer ml-[10px]",
                            onClick: (I) => re(b)
                          }, p(d(i)("delete")), 9, He)) : Q("", !0)
                        ]))), 128)),
                        e.trade_time_json.length < 3 ? (f(), V("span", {
                          key: 0,
                          class: "text-primary cursor-pointer mr-[10px]",
                          onClick: le
                        }, p(d(i)("addTimeRange")), 1)) : Q("", !0)
                      ]),
                      h("div", Be, p(d(i)("storeDateTips")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeTimeInterval"),
                  prop: "time_interval"
                }, {
                  default: c(() => [
                    h("div", null, [
                      a(F, {
                        modelValue: e.time_interval,
                        "onUpdate:modelValue": t[8] || (t[8] = (o) => e.time_interval = o)
                      }, {
                        default: c(() => [
                          (f(!0), V(E, null, L(H.value, (o, b) => (f(), P(A, {
                            key: b,
                            label: o.type
                          }, {
                            default: c(() => [
                              y(p(o.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      h("p", $e, p(d(i)("storeTimeIntervalTips")), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, {
                  label: d(i)("storeAddress"),
                  prop: "address_area"
                }, {
                  default: c(() => [
                    a(S, {
                      modelValue: e.province_id,
                      "onUpdate:modelValue": t[9] || (t[9] = (o) => e.province_id = o),
                      "value-key": "id",
                      clearable: "",
                      class: "w-[200px]",
                      ref_key: "provinceRef",
                      ref: D
                    }, {
                      default: c(() => [
                        a(g, {
                          label: d(i)("provincePlaceholder"),
                          value: 0
                        }, null, 8, ["label"]),
                        (f(!0), V(E, null, L(u.province, (o, b) => (f(), P(g, {
                          key: b,
                          label: o.name,
                          value: o.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    a(S, {
                      modelValue: e.city_id,
                      "onUpdate:modelValue": t[10] || (t[10] = (o) => e.city_id = o),
                      "value-key": "id",
                      clearable: "",
                      class: "w-[200px] ml-3",
                      ref_key: "cityRef",
                      ref: M
                    }, {
                      default: c(() => [
                        a(g, {
                          label: d(i)("cityPlaceholder"),
                          value: 0
                        }, null, 8, ["label"]),
                        (f(!0), V(E, null, L(u.city, (o, b) => (f(), P(g, {
                          key: b,
                          label: o.name,
                          value: o.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    a(S, {
                      modelValue: e.district_id,
                      "onUpdate:modelValue": t[11] || (t[11] = (o) => e.district_id = o),
                      "value-key": "id",
                      clearable: "",
                      class: "w-[200px] ml-3",
                      ref_key: "districtRef",
                      ref: U
                    }, {
                      default: c(() => [
                        a(g, {
                          label: d(i)("districtPlaceholder"),
                          value: 0
                        }, null, 8, ["label"]),
                        (f(!0), V(E, null, L(u.district, (o, b) => (f(), P(g, {
                          key: b,
                          label: o.name,
                          value: o.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                a(m, { prop: "address" }, {
                  default: c(() => [
                    a(s, {
                      modelValue: e.address,
                      "onUpdate:modelValue": t[12] || (t[12] = (o) => e.address = o),
                      modelModifiers: { trim: !0 },
                      clearable: "",
                      placeholder: d(i)("addressPlaceholder"),
                      onInput: t[13] || (t[13] = (o) => d(j)()),
                      class: "input-width"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }),
                a(m, null, {
                  default: c(() => [
                    a(Ae, {
                      ref_key: "mapSelectorRef",
                      ref: C,
                      longitude: e.longitude,
                      latitude: e.latitude,
                      zoom: 14,
                      "container-style": "w-[800px] h-[520px] relative",
                      onLocationChange: Z
                    }, null, 8, ["longitude", "latitude"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        })), [
          [de, x.value]
        ]),
        h("div", Oe, [
          h("div", ze, [
            a(K, {
              type: "primary",
              onClick: t[14] || (t[14] = (o) => oe(z.value))
            }, {
              default: c(() => [
                y(p(d(i)("save")), 1)
              ]),
              _: 1
            }),
            a(K, {
              onClick: t[15] || (t[15] = (o) => G())
            }, {
              default: c(() => [
                y(p(d(i)("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export {
  vt as default
};
