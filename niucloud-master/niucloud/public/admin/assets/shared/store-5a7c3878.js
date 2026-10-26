import { defineComponent as Pl, ref as _, reactive as pt, computed as O, watch as Pt, resolveComponent as b, resolveDirective as Ql, openBlock as s, createElementBlock as v, Fragment as S, withDirectives as H, createElementVNode as l, unref as n, createTextVNode as y, normalizeClass as Q, toDisplayString as u, createCommentVNode as f, renderList as He, createVNode as c, withCtx as o, withKeys as Xl, vModelText as Yl, createBlock as x, withModifiers as V, vShow as ue, normalizeStyle as Zl, pushScopeId as Jl, popScopeId as ea, nextTick as Qt, h as Xt } from "vue";
import { _ as _t } from "./icon-addon-one-2b9cfff5.js";
import { _ as $e } from "./apply_empty-3b0bc5e4.js";
import { n as ce, j as ta, a9 as la, t as i, k as qe, _ as aa, o as sa, cC as Yt, cE as na, Z as oa, cF as ia, a as ua } from "./core-shared-86a0da16.js";
import { d as ca, e as da, f as ra, i as pa, h as va, j as _a, u as fa, k as ma } from "./addon-67a0bf34.js";
import { a as Zt, c as ha, d as ya, s as ka, b as ga } from "./module-0abf3a60.js";
import { ElNotification as xa, ElMessageBox as de, ElMessage as ze } from "element-plus";
import { useRouter as ba, useRoute as Aa } from "vue-router";
import Ca from "./index-5e51718a.js";
import vt from "./index-cbeed3e7.js";
import wa from "./index-2db41db8.js";
import Ua from "./index-13c48446.js";
import Ia from "./index-b4e08919.js";
import { u as Ta } from "./useTablePageHeight-33d60cf6.js";
import "@element-plus/icons-vue";
import "axios";
import "vue-i18n";
import "pinia";
const Ba = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgB3ZvNTxtHFMDfjG2CaRPhSE34qIRRlGDaQxwpyhnU3guXHgu59RYTQD1iTlELLubWG9B/ANpzpdBrLyFS1YLTCldq4zRVhdW0ScHefXlv/RF7Wdu76117178Dsj27MD/em9m3s2MBLnN9+fd4AAJxFeUYIET17ShEXgDmAYuPUWL2ydq7B+AiAhwmlshFMRT4iORm6G2clAYt/QIQeQD1AITcE1L55vDz4Sw4iCPC0cTx4IXQW3MlSZwCR8F9lHI788WVHXCAtoRZtD8wkKC0vGc9khYRkKW/k2xX3LbwjcU/ZoQMbhiNS1dpU9yycCl9394CVGegi5D0tpTKqtUxbkk4tpibovG01fGoNoKirUJh1srMLs0eOLn0jMaqfOgZWYb6IjH0aGLpacLsKaaEY4t/JlUQG+BZAhuUfUkzR7ZMaZZFASvgAwSqq4ep4WTTY5o1chp7O7JGKAtH6yPpRq0Nhd9bfh5XEB+BD6FIT1Ok943aDMdw7LNcVAHcBZ/CVxK+fBq1GQqramDFU7OxVajvfaGBLaOmc8Kx5dy8QJwHnyOorudqUP/5OWEE6YsZ2Qxc+upTu06Yo+vrVNbDqR0cuFf7kaxv753o1pCojXJVuOeiW4auu3SzE56rvK8KIwbmoFcprb5oaMJ83XV+pcI5LoYFzN4Ow+jlANhDTI0vnozxqyD/QJXWoOjf4EUmR4Pw9acRuNgv4J9XKnzw4G948cp6X/vkKUd5s5TSNSH3ErWyzKWwhA/fvwC2KDtWxnAcPIZeluHI/vDrGdgBQWiOgteN+SYaPEQj2U++OoGfnxbBLqoo3JJCDUXBQ7glywi176akC9VN8AhuymoIjEoBwt31ZJO4Lstoa2DCmQX0Sod3Fy5DbCRo61xXZcuYXrVsxYOPL8GdayGYHOHOD5qW7qQs45gwFwUV+HppRrrTsoxzEf7237oKqJV0N2QZx4S5k9xZM9LdkuVn0ZJmriw4hBnpbsky/OBdUuXxGzhIM+nZ2/1dk2UEBA5cKy1Ls3VEu7VrRCdlGS4ttd5MLD0/ceOBdjPpTstSvuUz61cjlUnLlY0kRunNdFqWofGrOcryuz1wCb10N2Q1yo5arvESDyryGFxklJLpzrU++O7HU3jxf+dXV0RRHT9MD2erg4vG8UMvr2u1B+4frQ9N86s3hYeLad1tEOV25XVVOFwI7ZQ2hfUYVFhlUm92/FSFD9KRPK37pKHHIKdk7fu6WnqgGNx0stTsOrroMnXCpSjDAvQI+ugy5+6WMqmre70wgSHCtj66jOHtYbjQd9fXqU19l4q6atRkKMypLUC9Cz4lIMUsFxlGbQ0XALRdMCr6bzwLTPy0dqXhvUHTFY+jL4fS9JA8CT6BJtzk0drQZrNjTG0uvbH01wqleBI8DMvS7d9qq+NM76aduP8sAdKju/IojVtFtnooWEDbnafiLp0VBS9As7Ei5fwva+98b/YUS6uWPBkIRZ3maxx0G6oVTpWXt6zIlk6zSex+bh6FXOl4tCmqCMWFTGrUVnFkW7hC58QFlb2YPiu+3Mymx23f1bUtXEETl7wTyPmv8fB3mE4L/+20I1rBMeEKTn5R60wN7R2nIo6umzsurOc6zewS5RiCEqeUHBRo8DxaUN0uRZYmw8dPmlRJTvAayKlgdb/MnpcAAAAASUVORK5CYII=", Va = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgB5Zs7T9tQFIDPvW6kotKKqFU7NlW7Q1em8JLYgF8AbMACSOyYGSRggg0qsUM3xCNNf0HhB6CGDapWiVREKxHbPefaTkLixNfk2sTuJ5GY+BF/Ofdx7rXNIGSKIyN9+NYHlvUW/zINGzBWwtcSrjsHzgvp4+MzCBEGiilmsxmeSo2ZljUOJArQA8GgH+CMM3Zgatrn9OFhARSiRBgle1By0pHMglryGue7L46OPoEC2hImUXjyZAEX5yF4JIPBWEFjTG9X/MHCxaGhcaxz6571MkzaFA8s7ER1BxfH4TFhbBc0bSVoHQ8kXBwezuIX7UQe1WZgtPF1IkjLzmU3RFmqq186Rpagc7Gsb865SSEljAfU8W0dOpd15xx98S3SzoGWIR6spE9O9FYbtBR2ikonR9aLRZTeaLayqbBICbF+QDwZQOm81wrPOlwcHc3g2z7EFexJRPfpgXejZRjLHdUaB4XO3c4VGmgQxqI8hTtMQfwZF9lgHV4RjkuL7A+mvvVF+56wE90MJAW7aM/XflQf4eREt8pCbZQrwomLbpUewLG6+081wpY1CUnFnpgQiMRD9Lvl8ndIME9NM9OVy13aETaMMVBIqr8fXuztwfPtbdDev5feT/vwQexD+9IxVPJX00SUbeGakKuga24O+Js3QrZ7bU1KmmTdbWnfrtlZUIrj6NbhPlCIdXNTWWbd3b7Srix79szzGIoQjtyZN1Y6AXe7uiot3Uz2Fj9TTA+5csDKDIoxLi7gZmnJV7qZLO1Lx1COafZyHFn0Qgj4SUcuK06AZRgO8mmALz0nFBS34SJZF/EjMBatrPgSa5ciHOoEerNIRy7rID1r2Q5e0i5RyhKRCAuwCIu/RyYSYa8GykWmn1ZJ6MLNWuOgyYkS8Fo0x5arACHRquuR6adDoMQNxi4hBPz6WdnkRDFnXMMXUIxsUhG5NAbXHg8PDxdBYT5dPyz063q8khPa9vfMDCikhJPzabfRUhrl+qzKr5/1jLRHi94mwtEWZuwAFPJnawvMq6uKiExSUbuteX0tjqEUx/G/meJBv3fpfL4gIuzcNpCH5JInWVqoJh6Ki3VHgaMkd7EqfHdHd8WUIGlgYpU+Pa3c8VMRxpCT7AYkD732n/u5dLm8GWaqGTl10SXuCTtRXoTkoNd/0DBawl+EGq/4N2DYUNVHl/AeHpbL07Eu2nTuhrHitcpTWBRtxqYhrnA+4fa7Daua7UN3wZimGb/6zNhCq1sRW854vMzlqJvSIT7oKLvZagOpWTUcPtKdATp0NjqWyhW/jaSnEX8NDi5wuj+6E7GL8abUphAAceHNNPfpkgV0AtQacz6Fsl9ldwk0aykaA8MYqE3GH5EDPJePQWSJB8+M/xwcnNIYW4482hhVA7PBV3aCFJi2LwVEKG4PbjDfd1LgB6Hs2ocQ55zuBMqCWvJirI7D13ZEXUJ5UAtSqTFo80EtIWkYB+lcTum8eehXt35gy56ix/Bcectq/AHoYQ3OC3eWdf465Efx/gETaEKfpjKROgAAAABJRU5ErkJggg==", k = (Ie) => (Jl("data-v-b282ac04"), Ie = Ie(), ea(), Ie), Ma = { class: "main-container app-market min-h-[70vh]" }, Ra = { class: "am-framework" }, Da = { class: "am-framework__brand" }, La = {
  class: "am-framework__mark",
  "aria-hidden": "true"
}, Sa = ["src"], Fa = { class: "am-framework__info" }, Ea = { class: "am-framework__name" }, ja = /* @__PURE__ */ k(() => /* @__PURE__ */ l("i", { class: "am-pill-status__dot" }, null, -1)), Na = { class: "am-framework__meta" }, Oa = { class: "am-framework__ops" }, Ha = /* @__PURE__ */ k(() => /* @__PURE__ */ l("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ l("path", { d: "M4.2 8.4 12 4.8l7.8 3.6v7.2L12 19.2l-7.8-3.6Z" }),
  /* @__PURE__ */ l("path", { d: "M4.2 8.4 12 12l7.8-3.6M12 12v7.2" })
], -1)), qa = /* @__PURE__ */ k(() => /* @__PURE__ */ l("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ l("circle", {
    cx: "12",
    cy: "12",
    r: "8.4"
  }),
  /* @__PURE__ */ l("path", { d: "M8.4 12.4l2.5 2.5 4.7-5.3" })
], -1)), za = /* @__PURE__ */ k(() => /* @__PURE__ */ l("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ l("path", { d: "M6 3.6h8.4L19 8.2v12.2H6Z" }),
  /* @__PURE__ */ l("path", { d: "M14.2 3.6v4.8H19" }),
  /* @__PURE__ */ l("path", { d: "M9 12.6h6M9 16.2h4" })
], -1)), $a = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", null, "更新记录", -1)), Ga = [
  za,
  $a
], Ka = ["disabled"], Wa = /* @__PURE__ */ k(() => /* @__PURE__ */ l("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ l("path", { d: "M12 3.6v10.8" }),
  /* @__PURE__ */ l("path", { d: "M7.6 10l4.4 4.4L16.4 10" }),
  /* @__PURE__ */ l("path", { d: "M4.2 20.4h15.6" })
], -1)), Pa = { key: 0 }, Qa = { class: "app-head" }, Xa = { class: "am-toolbar" }, Ya = {
  class: "am-tabs",
  role: "tablist"
}, Za = ["aria-selected", "onClick"], Ja = { class: "am-toolbar__right" }, es = { class: "am-search" }, ts = /* @__PURE__ */ k(() => /* @__PURE__ */ l("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.7",
  "stroke-linecap": "round"
}, [
  /* @__PURE__ */ l("circle", {
    cx: "11",
    cy: "11",
    r: "6.8"
  }),
  /* @__PURE__ */ l("path", { d: "M20.2 20.2 16.4 16.4" })
], -1)), ls = ["title"], as = { key: 0 }, ss = { class: "flex items-center justify-between mt-[14px] mb-[6px]" }, ns = { class: "flex items-center text-[12px]" }, os = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", null, "共", -1)), is = { class: "text-[#EF3826]" }, us = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", null, "个应用更新", -1)), cs = { class: "am-grid" }, ds = ["onClick"], rs = { class: "am-card__head" }, ps = { class: "am-card__tile" }, vs = /* @__PURE__ */ k(() => /* @__PURE__ */ l("img", {
  class: "am-card__logo-default",
  src: _t,
  alt: ""
}, null, -1)), _s = { class: "am-card__info" }, fs = { class: "am-card__title-row" }, ms = ["title"], hs = { class: "am-card__key-row" }, ys = ["title"], ks = { class: "am-card__status" }, gs = {
  key: 0,
  class: "am-pill am-pill--warn"
}, xs = {
  key: 1,
  class: "am-pill am-pill--ok"
}, bs = /* @__PURE__ */ k(() => /* @__PURE__ */ l("i", { class: "am-pill__dot" }, null, -1)), As = {
  key: 2,
  class: "am-pill am-pill--muted"
}, Cs = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { class: "am-pill am-pill--danger" }, "兼容提示", -1)), ws = ["title"], Us = { class: "am-card__meta" }, Is = { class: "am-card__meta-item" }, Ts = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { class: "am-card__meta-k" }, "当前版本", -1)), Bs = { class: "am-card__meta-v" }, Vs = {
  key: 0,
  class: "am-card__meta-uptodate"
}, Ms = {
  key: 0,
  class: "am-card__sep"
}, Rs = {
  key: 1,
  class: "am-card__meta-item"
}, Ds = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { class: "am-card__meta-k" }, "最新版本", -1)), Ls = { class: "am-card__foot" }, Ss = { class: "table-panel table-fill-page__panel" }, Fs = { class: "table-fill-page__table" }, Es = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { style: { opacity: "0" } }, ".", -1)), js = [
  Es
], Ns = ["onClick"], Os = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "flex items-center w-full h-full rounded-[5px]" }, [
  /* @__PURE__ */ l("img", {
    class: "max-w-full max-h-full",
    src: _t,
    alt: ""
  })
], -1)), Hs = { class: "flex-1 w-0 flex flex-col justify-center pl-[20px] font-500 text-[13px]" }, qs = { class: "w-[236px] truncate leading-[18px]" }, zs = {
  key: 0,
  class: "w-[236px] truncate leading-[18px] mt-[6px]"
}, $s = {
  key: 1,
  class: "w-[236px] truncate leading-[18px] mt-[6px]"
}, Gs = { class: "mt-[3px] flex flex-nowrap" }, Ks = { class: "flex items-center" }, Ws = { class: "font-500 text-[13px] mr-[5px]" }, Ps = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { class: "iconfont iconwenhao text-[#999] !text-[14px] cursor-pointer" }, null, -1)), Qs = ["title"], Xs = { class: "font-500 text-[13px] multi-hidden" }, Ys = { class: "font-500 text-[13px] multi-hidden" }, Zs = { class: "font-500 text-[13px]" }, Js = {
  key: 0,
  class: "data-loading"
}, en = {
  key: 0,
  class: "h-[100px]"
}, tn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "w-[230px] mx-auto" }, [
  /* @__PURE__ */ l("img", {
    src: $e,
    class: "max-w-full",
    alt: ""
  })
], -1)), ln = { class: "flex items-center" }, an = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "w-[230px] mx-auto" }, [
  /* @__PURE__ */ l("img", {
    src: $e,
    class: "max-w-full",
    alt: ""
  })
], -1)), sn = { class: "flex items-center" }, nn = {
  key: 2,
  class: "mx-auto overview-empty flex flex-col items-center pt-14 pb-6"
}, on = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "mb-[20px] text-sm text-[#888]" }, "检测到当前账号尚未绑定授权，请先绑定授权！", -1)), un = { class: "flex flex-1 flex-wrap justify-center relative" }, cn = { class: "px-[18px] py-[8px]" }, dn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("p", { class: "leading-[32px] text-[14px]" }, " 您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务 ", -1)), rn = { class: "flex justify-end mt-[36px]" }, pn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "w-[230px] mx-auto" }, [
  /* @__PURE__ */ l("img", {
    src: $e,
    class: "max-w-full",
    alt: ""
  })
], -1)), vn = { class: "flex items-center" }, _n = /* @__PURE__ */ k(() => /* @__PURE__ */ l("div", { class: "w-[230px] mx-auto" }, [
  /* @__PURE__ */ l("img", {
    src: $e,
    class: "max-w-full",
    alt: ""
  })
], -1)), fn = { class: "flex items-center" }, mn = { class: "p-[20px]" }, hn = { class: "mt-[20px]" }, yn = { class: "text-sm mt-[10px] text-info" }, kn = { class: "mt-[20px]" }, gn = { class: "mt-[10px] text-right" }, xn = { class: "min-h-[150px]" }, bn = { class: "flex items-center justify-end gap-[10px] mt-[20px]" }, An = {
  key: 0,
  class: "text-[12px] text-[#f56c6c]"
}, Cn = { class: "h-[50vh] mt-[20px]" }, wn = { class: "flex flex-col h-full" }, Un = { class: "flex-1 h-0" }, In = { class: "flex justify-end mt-[20px]" }, Tn = { class: "h-[50vh] mt-[20px] flex flex-col" }, Bn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("img", {
  src: Ba,
  alt: ""
}, null, -1)), Vn = { class: "text-[16px] text-[#4F516D] mt-[5px]" }, Mn = {
  key: 0,
  class: "text-[16px] text-[#9699B6] mt-[10px]"
}, Rn = { class: "mt-[20px]" }, Dn = { class: "h-[50vh] mt-[20px] flex flex-col" }, Ln = /* @__PURE__ */ k(() => /* @__PURE__ */ l("img", {
  src: Va,
  alt: ""
}, null, -1)), Sn = { class: "min-h-[150px] px-[10px]" }, Fn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", null, "本地已经存在该插件/应用，再次下载会覆盖该插件/应用。", -1)), En = { class: "dialog-footer" }, jn = {
  key: 0,
  class: "am-detail"
}, Nn = { class: "am-detail__head" }, On = { class: "am-detail__head-main" }, Hn = { class: "am-detail__tile" }, qn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("img", {
  class: "am-detail__tile-default",
  src: _t,
  alt: ""
}, null, -1)), zn = { class: "am-detail__ident" }, $n = ["title"], Gn = ["title"], Kn = { class: "am-detail__badges" }, Wn = { class: "am-pill am-pill--muted" }, Pn = {
  key: 0,
  class: "am-pill am-pill--ok"
}, Qn = /* @__PURE__ */ k(() => /* @__PURE__ */ l("i", { class: "am-pill__dot" }, null, -1)), Xn = {
  key: 1,
  class: "am-pill am-pill--muted"
}, Yn = {
  key: 2,
  class: "am-pill am-pill--warn"
}, Zn = { class: "am-detail__body" }, Jn = {
  key: 0,
  class: "am-detail__desc"
}, eo = { class: "am-detail__block" }, to = /* @__PURE__ */ k(() => /* @__PURE__ */ l("h3", { class: "am-detail__block-title" }, "应用信息", -1)), lo = { class: "am-kv" }, ao = { key: 0 }, so = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "应用类型", -1)), no = { key: 1 }, oo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "应用标识", -1)), io = ["title"], uo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "当前版本", -1)), co = { class: "am-detail__block" }, ro = /* @__PURE__ */ k(() => /* @__PURE__ */ l("h3", { class: "am-detail__block-title" }, "服务周期", -1)), po = { class: "am-kv" }, vo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "有效期至", -1)), _o = {
  key: 1,
  class: "am-detail__block"
}, fo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("h3", { class: "am-detail__block-title" }, "开发者信息", -1)), mo = { class: "am-kv" }, ho = { key: 0 }, yo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "开发者", -1)), ko = ["title"], go = { key: 1 }, xo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("dt", null, "联系方式", -1)), bo = {
  key: 2,
  class: "am-detail__block"
}, Ao = /* @__PURE__ */ k(() => /* @__PURE__ */ l("h3", { class: "am-detail__block-title" }, "访问应用", -1)), Co = { class: "am-chips" }, wo = { class: "am-detail__block" }, Uo = /* @__PURE__ */ k(() => /* @__PURE__ */ l("h3", { class: "am-detail__block-title" }, "更新历史", -1)), Io = { class: "am-log-wrap" }, To = {
  key: 0,
  class: "am-log"
}, Bo = { class: "am-log__head" }, Vo = { class: "am-log__time" }, Mo = ["innerHTML"], Ro = {
  key: 1,
  class: "am-log__empty"
}, Do = { class: "am-detail__foot" }, Lo = ["disabled"], So = /* @__PURE__ */ k(() => /* @__PURE__ */ l("span", { class: "am-detail__spacer" }, null, -1)), Fo = /* @__PURE__ */ Pl({
  __name: "store",
  setup(Ie) {
    const { pageRef: Jt, pageStyle: el, refreshTablePageHeight: ft } = Ta(), tl = _(null), mt = ba(), ht = Aa(), ll = _(Date.now()), h = _(ce.get("storeActiveName") || "installed"), yt = _(null), Ge = _(!1), U = _(!0), F = _(""), Te = _([]), te = ta(), re = _(!1), X = _(null), q = _(""), al = _(""), sl = _(null), R = _(ce.get("storeShowType") || "card"), pe = _(""), le = _(!1), p = _(null), Be = (t, e) => {
      var L, P, g, T;
      if (typeof t != "string" || typeof e != "string")
        return !1;
      const r = (P = (L = t.match(/^\d+(?:\.\d+)*$/)) == null ? void 0 : L[0]) == null ? void 0 : P.split(".").map(Number), d = (T = (g = e.match(/^\d+(?:\.\d+)*$/)) == null ? void 0 : g[0]) == null ? void 0 : T.split(".").map(Number);
      if (!r || !d)
        return !1;
      const w = Math.max(r.length, d.length);
      for (let ee = 0; ee < w; ee++) {
        const Ae = (d[ee] ?? 0) - (r[ee] ?? 0);
        if (Ae !== 0)
          return Ae > 0;
      }
      return !1;
    }, Ve = (t) => {
      if (t != null && t.is_local)
        return !1;
      const e = t == null ? void 0 : t.install_info;
      return !e || !Object.keys(e).length ? !1 : e.version != t.version && Be(e.version, t.version);
    }, z = pt({
      keywords: "",
      type: ""
    }), kt = () => {
      sa().then((t) => {
        q.value = t.data.version.version, al.value = t.data.version.code;
      }), ha().then(({ data: t }) => {
        pe.value = t.last_version;
      });
    };
    kt();
    const ve = O(
      () => q.value != pe.value && Be(q.value, pe.value)
    ), nl = () => {
      kt(), Y();
    }, ol = () => {
      R.value = R.value == "card" ? "list" : "card", ce.set({ key: "storeShowType", data: R.value }), R.value == "list" && Qt(ft);
    }, il = _({});
    (() => {
      ca().then((t) => {
        il.value = t.data.type_list;
      });
    })();
    const gt = _(), ul = () => {
      Re(gt.value, !0);
    }, I = _([]), Me = (t) => {
      h.value = t, ce.set({ key: "storeActiveName", data: t }), t == "recentlyUpdated" && m.value[h.value].length ? I.value = m.value[h.value].map((e) => e.key) : I.value = [], le.value && Dt(), Qt(ft);
    };
    ht.query.id && Me(ht.query.id);
    const Re = (t, e = !1) => {
      if (t.is_download && h.value == "all" && !e)
        return re.value = !0, gt.value = t, !1;
      F.value || (F.value = t.key, ya({ addon: t.key, version: t.version }).then(() => {
        re.value = !1, fe(t.key), Y(), F.value = "";
      }).catch(() => {
        F.value = "";
      }));
    }, Ke = _("");
    Zt().then((t) => {
      t.data.data && t.data.data.auth_code && (Ke.value = t.data.data.auth_code);
    });
    const E = _({
      installed: [],
      uninstalled: [],
      all: [],
      recentlyUpdated: []
    }), K = (t) => {
      const e = /* @__PURE__ */ new Map(), r = [];
      return t.forEach((d) => {
        d.isHideen || e.set(d.key, { ...d, children: [] });
      }), t.forEach((d) => {
        !d.isHideen && d.support_app && e.has(d.support_app) && e.get(d.support_app).children.push(e.get(d.key));
      }), e.forEach((d) => {
        (!d.support_app || !e.has(d.support_app)) && r.push(d);
      }), r;
    }, cl = () => {
      const t = z.keywords, e = z.type;
      if (!t && !e) {
        E.value.installed = K(m.value.installed), E.value.uninstalled = K(m.value.uninstalled), E.value.all = K(m.value.all), E.value.recentlyUpdated = K(m.value.recentlyUpdated);
        return;
      }
      const r = (d) => d.filter((w) => {
        const L = !t || w.title.includes(t), P = !e || w.type === e;
        return L && P;
      });
      E.value.installed = K(r(m.value.installed)), E.value.uninstalled = K(r(m.value.uninstalled)), E.value.all = K(r(m.value.all)), E.value.recentlyUpdated = K(r(m.value.recentlyUpdated));
    }, m = _({
      installed: [],
      uninstalled: [],
      all: [],
      recentlyUpdated: [],
      error: ""
    }), Y = () => {
      U.value = !0, da({}).then((t) => {
        var r;
        const e = t.data.list;
        m.value.error = t.data.error, m.value.installed = [], m.value.uninstalled = [], m.value.all = [], m.value.recentlyUpdated = [];
        for (const d in e)
          e[d].is_local == !1 && m.value.all.push(e[d]), e[d].install_info && ((r = Object.keys(e[d].install_info)) != null && r.length) ? (m.value.installed.push(e[d]), e[d].is_local == !1 && e[d].install_info.version != e[d].version && Be(e[d].install_info.version, e[d].version) && m.value.recentlyUpdated.push(e[d])) : e[d].is_download == !0 && m.value.uninstalled.push(e[d]);
        ae(), te.routers.forEach((d, w) => {
          d.children && d.children.length ? (d.name = Yt(d.children), We.value[d.meta.app] = Yt(d.children)) : We.value[d.meta.app] = d.name;
        }), Me(h.value), U.value = !1;
      }).catch(() => {
        U.value = !1;
      });
    };
    Y();
    const De = O(() => {
      let t = 0;
      return m.value[h.value] && m.value[h.value].length && m.value[h.value].forEach((e) => {
        e.isHideen && t++;
      }), t == m.value[h.value].length;
    }), dl = O(() => [
      { key: "installed", label: "已安装", count: m.value.installed.length, warn: !1 },
      { key: "uninstalled", label: "未安装", count: m.value.uninstalled.length, warn: !1 },
      { key: "all", label: "已购买", count: m.value.all.length, warn: !1 },
      { key: "recentlyUpdated", label: "可更新", count: m.value.recentlyUpdated.length, warn: !0 }
    ]), ae = () => {
      const t = z.keywords, e = z.type;
      m.value[h.value].forEach((r) => {
        const d = !e || r.type === e, w = !t || r.title.indexOf(t) !== -1;
        r.isHideen = !(d && w);
      }), cl();
    }, rl = () => {
      z.keywords || ae();
    }, We = _({}), jo = (t) => {
      if (t.type == "app" && Object.keys(t.install_info).length) {
        ce.set({ key: "menuAppStorage", data: t.key }), ce.set({ key: "plugMenuTypeStorage", data: "" });
        const e = te.appMenuList;
        e.push(t.key), te.setAppMenuList(e);
        const r = We.value[t.key];
        mt.push({ name: r });
      }
    }, $ = _(""), G = _(!1), M = _(0), j = _(!1), xt = _(null), _e = _(!1), Le = _(!1), pl = () => {
      _e.value = !0;
    }, vl = async () => {
      var t;
      if (!Le.value) {
        Le.value = !0, j.value = !1, _e.value = !1;
        try {
          await ((t = xt.value) == null ? void 0 : t.retry());
        } finally {
          Le.value = !1;
        }
      }
    };
    let Pe = null;
    const Qe = new la();
    let Se = null;
    const _l = (t, e, r, d, w) => {
      if (e == "开始安装插件") {
        r(Qe);
        const L = fl(["/", "——", "\\", "|"]);
        Pe = setInterval(() => {
          Se ? Qe.flush(Se + "<br>> " + L.next().value) : Qe.flush("> " + L.next().value);
        }, 150);
      }
    };
    function fl(t) {
      let e = 0;
      return {
        next() {
          return e + 1 == t.length && (e = 0), { value: t[e++] };
        }
      };
    }
    const fe = (t) => {
      $.value = t, j.value = !1, _e.value = !1, M.value = 0, Fe.value = !1, W.value = !1, ne.value = "", G.value = !0, Te.value = [], te.clearRouters();
    }, ml = _(null), se = _(0);
    let C = null, Z = null;
    const Xe = (t = !0) => {
      ra().then((e) => {
        var r;
        if (e.data) {
          if (t && (Ee = [], $.value = e.data.addon, G.value || (Z = xa.success({
            title: "提示",
            dangerouslyUseHTMLString: !0,
            message: Xt("div", {}, [
              i("installingTips"),
              Xt(
                "span",
                {
                  class: "text-primary cursor-pointer",
                  onClick: hl
                },
                [i("installPercent")]
              )
            ]),
            duration: 0,
            showClose: !1
          })), C && clearInterval(C), se.value = parseInt(Date.now() / 1e3) - e.data.timestamp, C = setInterval(() => {
            se.value++;
          }, 1e3)), e.data.error) {
            (r = X.value) == null || r.pushMessage({ content: e.data.error, class: "error" }), wt.value = e.data.error, W.value = !0, C && (clearInterval(C), C = null);
            return;
          }
          e.data.mode == "cloud" && gl(), setTimeout(() => {
            Xe(!1);
          }, 5e3);
        } else
          t || (M.value = 2, C && (clearInterval(C), C = null), Y(), te.clearRouters(), Z == null || Z.close());
      }).catch((e) => {
        var r;
        console.log(e), (r = X.value) == null || r.pushMessage({ content: e.message, class: "error" });
      });
    };
    Xe();
    const Fe = _(!1), bt = () => {
      Fe.value = !0, M.value = 1, W.value = !1;
    }, At = O(() => {
      const t = se.value, e = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), d = t % 60;
      return [e > 0 ? `${e}小时` : "", r > 0 ? `${r}分钟` : "", `${d}秒`].filter(Boolean).join("");
    }), hl = () => {
      G.value = !0, M.value = 1;
    }, me = _(!1), ne = _(""), yl = () => {
      !j.value || me.value || (ne.value = "local", me.value = !0, ml.value = Date.now(), se.value = 0, C && clearInterval(C), C = setInterval(() => {
        se.value++;
      }, 1e3), pa({ addon: $.value }).then((t) => {
        M.value = 2, C && (clearInterval(C), C = null), Y(), me.value = !1, t.data.length && (Te.value = t.data);
      }).catch((t) => {
        me.value = !1;
      }));
    }, he = _(!1), kl = () => {
      if (!Ke.value) {
        Ct();
        return;
      }
      !j.value || he.value || (he.value = !0, ne.value = "cloud", va({ addon: $.value }).then((t) => {
        M.value = 1, X.value.execute("clear"), X.value.execute("开始安装插件"), t.data.length && (Te.value = t.data), Xe(), he.value = !1;
      }).catch((t) => {
        he.value = !1, t.code && t.code == 601 ? de.confirm(
          "云编译服务未启动，必须在启动后进行云编译！",
          "提示",
          {
            distinguishCancelAndClose: !0,
            confirmButtonText: "重新检测",
            cancelButtonText: "查看操作手册",
            type: "warning"
          }
        ).then(() => {
          kl();
        }).catch((e) => {
          e == "cancel" && window.open("https://doc.press.niucloud.com/php/saas-framework/use/other/third-party-cloud-compilation.html", "_blank");
        }) : ze({ message: t.msg, type: "error" });
      }));
    }, Ct = () => {
      de.confirm(i("authTips"), i("warning"), {
        distinguishCancelAndClose: !0,
        confirmButtonText: i("toBind"),
        cancelButtonText: i("toNiucloud")
      }).then(() => {
        mt.push("/tools/authorize");
      }).catch((t) => {
        t === "cancel" && window.open("https://www.niucloud.com/app");
      });
    }, W = _(!1), wt = _("");
    let Ee = [];
    const gl = () => {
      _a($.value).then((t) => {
        const e = t.data.data ?? [];
        e[0] && e[0].length && G.value == !0 && e[0].forEach((r) => {
          if (!Ee.includes(r.action)) {
            if (r.action.indexOf("云编译任务正在排队") != -1) {
              Se = r.action, Ee.push(r.action);
              return;
            } else
              Se = null;
            X.value.pushMessage({ content: `${r.action}` }), Ee.push(r.action), r.code == 0 && X.value.pushMessage({ content: r.msg, class: "error" });
          }
        });
      }).catch(() => {
        Z == null || Z.close();
      });
    };
    Pt($, (t) => {
      j.value = !1;
    });
    const ye = _(!1), Ye = _(""), Ze = (t) => {
      de.confirm(i("uninstallTips"), i("warning"), {
        confirmButtonText: i("confirm"),
        cancelButtonText: i("cancel"),
        type: "warning"
      }).then(() => {
        Ye.value = t, ye.value = !0;
      });
    }, xl = () => {
      const t = Ye.value;
      t && fa({ addon: t }).then((e) => {
        Y(), te.clearRouters(), U.value = !1, ye.value = !1;
      }).catch(() => {
        U.value = !1;
      });
    }, ke = (t) => {
      var e;
      if (t != null && t.is_local) {
        ze({ message: `${t.title || t.key} 未上架应用市场，暂不支持在线升级`, type: "warning", duration: 5e3 });
        return;
      }
      (e = yt.value) == null || e.open(t.key, null, t);
    }, bl = () => {
      if (!Ke.value) {
        Ct();
        return;
      }
      de.confirm(i("cloudBuildTips"), i("warning"), {
        confirmButtonText: i("confirm"),
        cancelButtonText: i("cancel"),
        type: "warning"
      }).then(() => {
        Ge.value = !0;
      });
    }, Ut = () => {
      window.open("https://www.niucloud.com/app");
    }, Al = (t) => {
      M.value == 1 && !Fe.value && !W.value ? de.confirm(i("installShowDialogCloseTips"), i("warning"), {
        confirmButtonText: i("confirm"),
        cancelButtonText: i("cancel"),
        type: "warning"
      }).then(() => {
        ma($.value), C && (clearInterval(C), C = null), Fe.value = !1, ne.value = "", W.value = !1, t();
      }) : M.value == 2 ? (Me("installed"), location.reload()) : t(), Pe && clearInterval(Pe);
    }, Cl = (t) => {
      t.version = pe.value, t.title = "框架", t.install_info = {
        version: q.value
      }, Ne(t);
    }, je = _(!1), Je = _(""), It = _(null), ge = _(!1), J = _(!0);
    (() => {
      J.value = !0, Zt().then((t) => {
        J.value = !1, t.data.data && t.data.data.length != 0 && (Je.value = t.data.data);
      }).catch(() => {
        J.value = !1, je.value = !1;
      });
    })();
    const wl = () => {
      je.value = !0;
    }, oe = pt({
      auth_code: "",
      auth_secret: ""
    }), Tt = _(), Ul = pt({
      auth_code: [{ required: !0, message: i("authCodePlaceholder"), trigger: "blur" }],
      auth_secret: [{ required: !0, message: i("authSecretPlaceholder"), trigger: "blur" }]
    }), Il = async (t) => {
      ge.value || !t || await t.validate(async (e) => {
        e && (ge.value = !0, ka(oe).then(() => {
          ge.value = !1, setTimeout(() => {
            location.reload();
          }, 1e3);
        }).catch(() => {
          ge.value = !1;
        }));
      });
    }, Bt = () => {
      window.open("https://www.niucloud.com/app");
    }, Oo = () => {
      window.open(
        "https://doc.press.niucloud.com/php/v6-shop/use/chang-jian-wen-ti-chu-li/er-shi-wu-3001-sheng-7ea7-yun-bian-yi-mu-lu-du-xie-quan-xian-zhuang-tai-bu-tong-guo-ru-he-chu-li.html"
      );
    }, Tl = (t) => {
      de.confirm(i("deleteAddonTips"), i("warning"), {
        confirmButtonText: i("confirm"),
        cancelButtonText: i("cancel"),
        type: "warning"
      }).then(() => {
        na(t).then(() => {
          Y();
        });
      });
    }, Vt = (t) => {
      if (!t.support_version)
        return !1;
      const e = t.support_version.split("."), r = q.value.split(".");
      return parseFloat(`${e[0]}.${e[1]}`) < parseFloat(`${r[0]}.${r[1]}`);
    }, Bl = () => {
      m.value[h.value].length && (m.value[h.value].length == I.value.length ? I.value = [] : I.value = m.value[h.value].map((t) => t.key));
    }, Mt = (t, e) => {
      h.value != "recentlyUpdated" && h.value != "uninstalled" || (I.value.includes(e) ? I.value.splice(I.value.indexOf(e), 1) : I.value.push(e));
    }, Vl = () => {
      const t = m.value.recentlyUpdated.filter((d) => d.is_local).map((d) => d.key), e = (I.value.length ? I.value : m.value.recentlyUpdated.map((d) => d.key)).filter((d) => !t.includes(d)), r = oa(e);
      if (ve.value && !r.includes("niucloud-admin") && r.unshift("niucloud-admin"), !r.length) {
        ze({
          message: t.length ? "所选应用未上架应用市场，暂不支持在线升级" : "当前已是最新版",
          type: "error",
          duration: 5e3
        });
        return;
      }
      ke({ key: r.toString() });
    }, Ho = () => {
      const t = I.value;
      if (!t.length) {
        ze({ message: "请先勾选要安装的插件", type: "error", duration: 5e3 });
        return;
      }
      fe(t.toString());
    }, Ml = O(() => new Set((E.value[h.value] || []).map((t) => t.key))), et = "/static/resource/icon/app.ico", Rl = O(
      () => {
        var t, e;
        return ((t = p.value) == null ? void 0 : t.key) === "niucloud-admin" ? et : ((e = p.value) == null ? void 0 : e.icon) || "";
      }
    ), Dl = O(() => {
      var e;
      const t = (e = p.value) == null ? void 0 : e.install_info;
      return Boolean(t && Object.keys(t).length);
    }), tt = O(() => {
      var r, d, w;
      if ((r = p.value) != null && r.is_local)
        return !1;
      const t = (d = p.value) == null ? void 0 : d.install_info;
      if (!t || !Object.keys(t).length)
        return !1;
      const e = (w = p.value) == null ? void 0 : w.version;
      return Boolean(e) && t.version != e && Be(t.version, e);
    }), Rt = O(() => {
      var t;
      return ((t = p.value) == null ? void 0 : t.key) === "niucloud-admin";
    }), Ll = O(() => {
      var e, r;
      const t = (e = p.value) == null ? void 0 : e.install_info;
      return t && Object.keys(t).length ? t.version || "-" : ((r = p.value) == null ? void 0 : r.version) || "-";
    }), xe = _([]), lt = _(!1), Sl = _(0), Fl = (t) => {
      if (!t)
        return ["-", "-"];
      const [e, r] = t.split(" ");
      if (!r)
        return [e || "-", "-"];
      const [d, w] = r.split(":");
      return [e, `${d}:${w}`];
    }, El = async (t) => {
      lt.value = !0;
      try {
        const { data: e } = await ga({ app_key: t });
        xe.value = Array.isArray(e) ? e : [];
      } finally {
        lt.value = !1;
      }
    }, Ne = (t) => {
      p.value = t, le.value = !0, Sl.value = 0, xe.value = [], t != null && t.key && El(t.key);
    }, Dt = () => {
      le.value = !1;
    }, jl = () => {
      le.value || (p.value = null, xe.value = []);
    }, ie = _(!1), at = _(""), st = _(""), nt = (t) => !(t != null && t.key) || t.key === "niucloud-admin" || t.is_local ? !1 : Boolean(t.install_info && Object.keys(t.install_info).length), ot = (t) => {
      at.value = t.key, st.value = t.icon, ie.value = !0;
    }, it = (t) => {
      const e = t == null ? void 0 : t.install_info;
      return Boolean(e && Object.keys(e).length) && e.version === t.version;
    }, Lt = () => {
      at.value = "framework", st.value = et, ie.value = !0;
    }, be = _(!1), St = _(!1), Ft = () => {
      ia().then((t) => {
        var e;
        St.value = (((e = t.data) == null ? void 0 : e.list) || []).length > 0;
      }).catch(() => {
      });
    }, Nl = () => {
      be.value = !0;
    };
    Pt([ie, be], () => {
      !ie.value && !be.value && Ft();
    }), Ft();
    const ut = (t) => {
      t == "pc" ? window.open(`https://www.niucloud.com/app/detail/?id=${p.value.app_id}`) : window.open(`https://wap.niucloud.com/pages/product/detail?id=${p.value.app_id}`);
    };
    return (t, e) => {
      const r = b("el-option"), d = b("el-select"), w = b("el-checkbox"), L = b("el-image"), P = b("el-tooltip"), g = b("el-button"), T = b("el-table-column"), ee = b("el-tag"), Ae = b("el-table"), Oe = b("el-empty"), Et = b("el-link"), Ol = b("el-popover"), jt = b("el-input"), Nt = b("el-form-item"), Hl = b("el-form"), Ce = b("el-dialog"), ct = b("el-step"), ql = b("el-steps"), Ot = b("el-scrollbar"), Ht = b("el-result"), zl = b("Close"), dt = b("el-icon"), $l = b("Monitor"), Gl = b("Cellphone"), Kl = b("el-drawer"), rt = Ql("loading");
      return s(), v(S, null, [
        H((s(), v("div", Ma, [
          l("div", Ra, [
            l("div", Da, [
              l("span", La, [
                l("img", {
                  src: n(qe)(et),
                  alt: ""
                }, null, 8, Sa)
              ]),
              l("div", Fa, [
                l("h1", Ea, [
                  y(" 系统框架 "),
                  l("span", {
                    class: Q(["am-pill-status", n(ve) ? "is-warn" : "is-ok"])
                  }, [
                    ja,
                    y(u(n(ve) ? "有可用更新" : "已是最新版本"), 1)
                  ], 2)
                ]),
                l("p", Na, [
                  y("当前 v" + u(q.value || "--"), 1),
                  n(ve) ? (s(), v(S, { key: 0 }, [
                    y(" · 最新 v" + u(pe.value || "--"), 1)
                  ], 64)) : f("", !0),
                  y(" · " + u(m.value.recentlyUpdated.length ? m.value.recentlyUpdated.length + " 个应用可更新" : "无可更新应用"), 1)
                ])
              ])
            ]),
            l("div", Oa, [
              St.value ? (s(), v("button", {
                key: 0,
                type: "button",
                class: "am-btn am-btn--ghost",
                onClick: Nl
              }, [
                Ha,
                l("span", null, u(n(i)("backupManageTitle")), 1)
              ])) : f("", !0),
              l("button", {
                type: "button",
                class: "am-btn am-btn--ghost",
                onClick: Lt
              }, [
                qa,
                l("span", null, u(n(i)("diffVerify")), 1)
              ]),
              l("button", {
                type: "button",
                class: "am-btn am-btn--ghost",
                onClick: e[0] || (e[0] = (a) => Cl({ key: "niucloud-admin" }))
              }, Ga),
              l("button", {
                type: "button",
                class: "am-btn am-btn--primary",
                disabled: !n(ve) && !m.value.recentlyUpdated.length,
                onClick: Vl
              }, [
                Wa,
                l("span", null, [
                  y("一键升级"),
                  m.value.recentlyUpdated.length ? (s(), v("span", Pa, "（" + u(m.value.recentlyUpdated.length) + "）", 1)) : f("", !0)
                ])
              ], 8, Ka)
            ])
          ]),
          l("div", Qa, [
            l("div", Xa, [
              l("div", Ya, [
                (s(!0), v(S, null, He(n(dl), (a) => (s(), v("button", {
                  type: "button",
                  role: "tab",
                  class: Q(["am-tab", { "is-active": h.value == a.key }]),
                  "aria-selected": h.value == a.key,
                  key: a.key,
                  onClick: (A) => {
                    Me(a.key), ae();
                  }
                }, [
                  y(u(a.label) + " ", 1),
                  l("span", {
                    class: Q(["am-tab__n", { "am-tab__n--warn": a.warn && a.count > 0 }])
                  }, u(a.count), 3)
                ], 10, Za))), 128))
              ]),
              l("div", Ja, [
                c(d, {
                  modelValue: z.type,
                  "onUpdate:modelValue": e[1] || (e[1] = (a) => z.type = a),
                  class: "am-select",
                  placeholder: "应用类型",
                  clearable: "",
                  onChange: e[2] || (e[2] = (a) => ae())
                }, {
                  default: o(() => [
                    c(r, {
                      label: "应用",
                      value: "app"
                    }),
                    c(r, {
                      label: "插件",
                      value: "addon"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                l("label", es, [
                  ts,
                  H(l("input", {
                    "onUpdate:modelValue": e[3] || (e[3] = (a) => z.keywords = a),
                    type: "search",
                    placeholder: "搜索应用名称",
                    onKeyup: e[4] || (e[4] = Xl((a) => ae(), ["enter"])),
                    onInput: rl
                  }, null, 544), [
                    [
                      Yl,
                      z.keywords,
                      void 0,
                      { trim: !0 }
                    ]
                  ])
                ]),
                l("button", {
                  type: "button",
                  class: "am-btn am-btn--primary am-search__btn",
                  onClick: e[5] || (e[5] = (a) => ae())
                }, u(n(i)("search")), 1),
                l("i", {
                  class: Q(["iconfont cursor-pointer !text-[16px] text-[#4f516d] transition-colors hover:text-[#0766f5]", R.value == "card" ? "iconliebiao" : "iconliebiaoqiehuan"]),
                  title: R.value == "card" ? "切换为列表模式" : "切换为卡片模式",
                  onClick: ol
                }, null, 10, ls)
              ])
            ]),
            !U.value && h.value == "recentlyUpdated" ? (s(), v("div", as, [
              l("div", ss, [
                l("p", ns, [
                  os,
                  l("span", is, u(I.value.length), 1),
                  us
                ]),
                c(w, {
                  label: "全选",
                  "model-value": m.value[h.value].length && m.value[h.value].length == I.value.length,
                  onChange: Bl,
                  value: "Value A",
                  class: "ml-[12px]"
                }, null, 8, ["model-value"])
              ])
            ])) : f("", !0)
          ]),
          H(l("div", cs, [
            m.value[h.value].length && !U.value ? (s(!0), v(S, { key: 0 }, He(m.value[h.value], (a) => {
              var A, D, we, Ue;
              return s(), v("div", {
                class: Q(["am-card", { "am-card--selected": I.value.includes(a.key), "is-hidden": a.isHideen }]),
                onClick: (N) => Ne(a),
                key: a.key
              }, [
                l("div", rs, [
                  l("div", ps, [
                    c(L, {
                      class: "am-card__logo",
                      src: n(qe)(a.icon),
                      fit: "cover"
                    }, {
                      error: o(() => [
                        vs
                      ]),
                      _: 2
                    }, 1032, ["src"])
                  ]),
                  l("div", _s, [
                    l("div", fs, [
                      l("span", {
                        class: "am-card__title",
                        title: a.title
                      }, u(a.title), 9, ms),
                      l("span", {
                        class: Q(a.type == "app" ? "am-badge am-badge--app" : "am-badge am-badge--addon")
                      }, u(a.type == "app" ? "应用" : "插件"), 3)
                    ]),
                    l("div", hs, [
                      l("span", {
                        class: "am-card__key",
                        title: a.key
                      }, u(a.key), 9, ys)
                    ])
                  ]),
                  l("div", ks, [
                    Ve(a) ? (s(), v("span", gs, "可升级")) : a.install_info && ((A = Object.keys(a.install_info)) != null && A.length) ? (s(), v("span", xs, [
                      bs,
                      y("已安装")
                    ])) : (s(), v("span", As, u(a.is_download ? "待安装" : "未安装"), 1)),
                    Vt(a) && h.value == "recentlyUpdated" ? (s(), x(P, {
                      key: 3,
                      effect: "dark",
                      content: `该插件适配框架版本为${a.support_version}，与已安装框架版本${q.value}不完全兼容`,
                      placement: "top"
                    }, {
                      default: o(() => [
                        Cs
                      ]),
                      _: 2
                    }, 1032, ["content"])) : f("", !0)
                  ])
                ]),
                l("p", {
                  class: "am-card__desc",
                  title: a.desc
                }, u(a.desc), 9, ws),
                l("div", Us, [
                  l("span", Is, [
                    Ts,
                    l("span", Bs, [
                      y(u(a.install_info && ((D = Object.keys(a.install_info)) != null && D.length) ? a.install_info.version : a.version) + " ", 1),
                      it(a) ? (s(), v("span", Vs, "最新")) : f("", !0)
                    ])
                  ]),
                  !it(a) && !a.is_local ? (s(), v("span", Ms)) : f("", !0),
                  !it(a) && !a.is_local ? (s(), v("span", Rs, [
                    Ds,
                    l("span", {
                      class: Q(["am-card__meta-v", { "is-new": a.install_info && ((we = Object.keys(a.install_info)) == null ? void 0 : we.length) && a.install_info.version != a.version }])
                    }, u(a.version), 3)
                  ])) : f("", !0)
                ]),
                l("div", Ls, [
                  l("div", {
                    class: "am-card__foot-left",
                    onClick: e[6] || (e[6] = V(() => {
                    }, ["stop"]))
                  }, [
                    h.value == "recentlyUpdated" ? (s(), x(w, {
                      key: 0,
                      class: "am-card__check",
                      "model-value": I.value.includes(a.key),
                      onChange: (N) => Mt(N, a.key)
                    }, null, 8, ["model-value", "onChange"])) : f("", !0)
                  ]),
                  l("div", {
                    class: "am-card__acts",
                    onClick: e[7] || (e[7] = V(() => {
                    }, ["stop"]))
                  }, [
                    nt(a) ? (s(), x(g, {
                      key: 0,
                      class: "am-act am-act--verify",
                      link: "",
                      onClick: V((N) => ot(a), ["stop"])
                    }, {
                      default: o(() => [
                        y(u(n(i)("diffVerify")), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : f("", !0),
                    h.value == "installed" || h.value == "all" || h.value == "uninstalled" ? (s(), v(S, { key: 1 }, [
                      a.is_download ? !a.install_info || Object.keys(a.install_info).length == 0 ? (s(), x(g, {
                        key: 1,
                        class: "am-act am-act--primary",
                        link: "",
                        onClick: V((N) => fe(a.key), ["stop"])
                      }, {
                        default: o(() => [
                          y(u(n(i)("install")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : f("", !0) : (s(), x(g, {
                        key: 0,
                        class: "am-act am-act--primary",
                        link: "",
                        loading: F.value == a.key,
                        disabled: F.value != "",
                        onClick: V((N) => Re(a), ["stop"])
                      }, {
                        default: o(() => [
                          y(u(n(i)("down")), 1)
                        ]),
                        _: 2
                      }, 1032, ["loading", "disabled", "onClick"])),
                      a.install_info && ((Ue = Object.keys(a.install_info)) != null && Ue.length) ? (s(), x(g, {
                        key: 2,
                        class: "am-act am-act--muted",
                        link: "",
                        onClick: V((N) => Ze(a.key), ["stop"])
                      }, {
                        default: o(() => [
                          y(u(n(i)("unload")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : f("", !0)
                    ], 64)) : (s(), v(S, { key: 2 }, [
                      Ve(a) ? (s(), x(g, {
                        key: 0,
                        class: "am-act am-act--ok",
                        link: "",
                        onClick: V((N) => ke(a), ["stop"])
                      }, {
                        default: o(() => [
                          y("升级")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : f("", !0)
                    ], 64))
                  ])
                ])
              ], 10, ds);
            }), 128)) : f("", !0)
          ], 512), [
            [ue, R.value == "card"]
          ]),
          H(l("div", {
            ref_key: "pageRef",
            ref: Jt,
            class: "am-list relative pb-[20px] table-fill-page__panel",
            style: Zl(n(el))
          }, [
            l("div", Ss, [
              l("div", Fs, [
                m.value[h.value].length && !U.value ? (s(), x(Ae, {
                  key: 0,
                  height: "100%",
                  ref_key: "tableRef",
                  ref: tl,
                  "tree-props": { children: "children" },
                  "default-expand-all": !0,
                  data: E.value[h.value],
                  "row-key": "key",
                  size: "large"
                }, {
                  default: o(() => [
                    c(T, { width: "24" }, {
                      default: o(({ row: a }) => {
                        var A;
                        return [
                          l("div", {
                            class: Q(["tree-child-cell", {
                              "is-tree-parent": (A = a.children) == null ? void 0 : A.length,
                              "is-tree-child": typeof a.support_app == "string" && a.support_app !== "" && n(Ml).has(a.support_app)
                            }])
                          }, js, 2)
                        ];
                      }),
                      _: 1
                    }),
                    h.value === "recentlyUpdated" ? (s(), x(T, {
                      key: 0,
                      width: "60px"
                    }, {
                      default: o(({ row: a }) => [
                        c(w, {
                          onClick: e[8] || (e[8] = V(() => {
                          }, ["stop"])),
                          "model-value": I.value.includes(a.key),
                          value: a.key,
                          onChange: (A) => Mt(A, a.key)
                        }, null, 8, ["model-value", "value", "onChange"])
                      ]),
                      _: 1
                    })) : f("", !0),
                    c(T, {
                      label: n(i)("appName"),
                      align: "left",
                      width: "300"
                    }, {
                      default: o(({ row: a }) => {
                        var A;
                        return [
                          l("div", {
                            class: "flex items-center cursor-pointer relative left-[-10px]",
                            onClick: (D) => Ne(a)
                          }, [
                            c(L, {
                              class: "w-[var(--cmp-table-composite-icon-size)] h-[var(--cmp-table-composite-icon-size)] rounded-[5px]",
                              src: n(qe)(a.icon),
                              fit: "contain"
                            }, {
                              error: o(() => [
                                Os
                              ]),
                              _: 2
                            }, 1032, ["src"]),
                            l("div", Hs, [
                              l("div", qs, u(a.title), 1),
                              a.install_info && ((A = Object.keys(a.install_info)) != null && A.length) ? (s(), v("div", zs, u(a.install_info.version), 1)) : (s(), v("div", $s, u(a.version), 1)),
                              l("div", Gs, [
                                h.value == "recentlyUpdated" && Ve(a) ? (s(), x(ee, {
                                  key: 0,
                                  type: "danger",
                                  size: "small"
                                }, {
                                  default: o(() => [
                                    y(u(n(i)("newVersion")) + u(a.version), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : f("", !0),
                                Vt(a) && h.value == "recentlyUpdated" ? (s(), x(P, {
                                  key: 1,
                                  effect: "dark",
                                  content: `该插件适配框架版本为${a.support_version}，与已安装框架版本${q.value}不完全兼容`,
                                  placement: "top-start"
                                }, {
                                  default: o(() => [
                                    c(ee, {
                                      type: "warning",
                                      size: "small",
                                      class: "app-list-tip ml-[3px] overflow-hidden"
                                    }, {
                                      default: o(() => [
                                        y("该插件适配框架版本为" + u(a.support_version) + "，与已安装框架版本" + u(q.value) + "不完全兼容 ", 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["content"])) : f("", !0)
                              ])
                            ])
                          ], 8, Ns)
                        ];
                      }),
                      _: 1
                    }, 8, ["label"]),
                    c(T, {
                      align: "left",
                      "min-width": "150"
                    }, {
                      header: o(() => [
                        l("div", Ks, [
                          l("span", Ws, u(n(i)("appIdentification")), 1),
                          c(P, {
                            class: "box-item",
                            effect: "light",
                            content: n(i)("tipText"),
                            placement: "bottom"
                          }, {
                            default: o(() => [
                              Ps
                            ]),
                            _: 1
                          }, 8, ["content"])
                        ])
                      ]),
                      default: o(({ row: a }) => [
                        l("span", {
                          class: "am-table-key font-500 text-[13px]",
                          title: a.key
                        }, u(a.key), 9, Qs)
                      ]),
                      _: 1
                    }),
                    c(T, {
                      label: n(i)("introduction"),
                      align: "left",
                      "min-width": "250"
                    }, {
                      default: o(({ row: a }) => [
                        l("span", Xs, u(a.desc), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    c(T, {
                      label: n(i)("type"),
                      align: "left",
                      "min-width": "80"
                    }, {
                      default: o(({ row: a }) => [
                        l("span", Ys, u(a.type === "app" ? n(i)("app") : n(i)("addon")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    c(T, {
                      label: n(i)("author"),
                      align: "left",
                      "min-width": "80"
                    }, {
                      default: o(({ row: a }) => [
                        l("span", Zs, u(a.author), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    c(T, {
                      label: n(i)("operation"),
                      fixed: "right",
                      align: "right",
                      "min-width": "200"
                    }, {
                      default: o(({ row: a }) => {
                        var A;
                        return [
                          h.value == "installed" || h.value == "all" || h.value == "uninstalled" ? (s(), v(S, { key: 0 }, [
                            a.install_info && ((A = Object.keys(a.install_info)) != null && A.length) ? (s(), x(g, {
                              key: 0,
                              class: "!text-[13px]",
                              type: "primary",
                              link: "",
                              onClick: (D) => Ze(a.key)
                            }, {
                              default: o(() => [
                                y(u(n(i)("unload")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : f("", !0),
                            a.is_download && (!a.install_info || !Object.keys(a.install_info).length) ? (s(), x(g, {
                              key: 1,
                              class: "!text-[13px]",
                              type: "primary",
                              link: "",
                              onClick: (D) => fe(a.key)
                            }, {
                              default: o(() => [
                                y(u(n(i)("install")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : f("", !0),
                            a.is_download ? f("", !0) : (s(), x(g, {
                              key: 2,
                              class: "!text-[13px]",
                              loading: F.value == a.key,
                              disabled: F.value != "",
                              type: "primary",
                              link: "",
                              onClick: V((D) => Re(a), ["stop"])
                            }, {
                              default: o(() => [
                                l("span", null, u(n(i)("down")), 1)
                              ]),
                              _: 2
                            }, 1032, ["loading", "disabled", "onClick"]))
                          ], 64)) : (s(), v(S, { key: 1 }, [
                            h.value == "recentlyUpdated" && Ve(a) ? (s(), x(g, {
                              key: 0,
                              class: "!text-[13px]",
                              type: "primary",
                              link: "",
                              onClick: (D) => ke(a)
                            }, {
                              default: o(() => [
                                y(u(n(i)("升级")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : f("", !0)
                          ], 64)),
                          nt(a) ? (s(), x(g, {
                            key: 2,
                            class: "!text-[13px]",
                            type: "primary",
                            link: "",
                            onClick: V((D) => ot(a), ["stop"])
                          }, {
                            default: o(() => [
                              y(u(n(i)("diffVerify")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : f("", !0),
                          c(g, {
                            class: "!text-[13px]",
                            type: "primary",
                            link: "",
                            onClick: (D) => Ne(a)
                          }, {
                            default: o(() => [
                              y(u(n(i)("detail")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])) : f("", !0)
              ]),
              U.value || !m.value[h.value].length ? (s(), v("div", Js, [
                c(Ae, {
                  data: [],
                  size: "large",
                  class: "pt-[5px]"
                }, {
                  default: o(() => [
                    c(T, {
                      label: n(i)("appName"),
                      align: "left",
                      width: "320"
                    }, null, 8, ["label"]),
                    c(T, {
                      align: "left",
                      "min-width": "120"
                    }),
                    c(T, {
                      label: n(i)("introduction"),
                      align: "left",
                      "min-width": "200"
                    }, null, 8, ["label"]),
                    c(T, {
                      label: n(i)("type"),
                      align: "left",
                      "min-width": "100"
                    }, null, 8, ["label"]),
                    c(T, {
                      label: n(i)("author"),
                      align: "left",
                      "min-width": "100"
                    }, null, 8, ["label"]),
                    c(T, {
                      label: n(i)("operation"),
                      fixed: "right",
                      align: "right",
                      width: "150"
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                }),
                U.value ? H((s(), v("div", en, null, 512)), [
                  [rt, U.value]
                ]) : f("", !0)
              ])) : f("", !0)
            ])
          ], 4), [
            [ue, R.value == "list"]
          ]),
          R.value == "card" && n(De) && !U.value && h.value == "installed" && !J.value ? (s(), x(Oe, {
            key: 0,
            class: "mx-auto overview-empty"
          }, {
            image: o(() => [
              tn
            ]),
            description: o(() => [
              l("p", ln, u(n(i)("installed-empty")), 1)
            ]),
            _: 1
          })) : f("", !0),
          R.value == "card" && n(De) && !U.value && h.value == "uninstalled" && !J.value ? (s(), x(Oe, {
            key: 1,
            class: "mx-auto overview-empty"
          }, {
            image: o(() => [
              an
            ]),
            description: o(() => [
              l("p", sn, [
                l("span", null, u(n(i)("descriptionLeft")), 1),
                c(Et, {
                  type: "primary",
                  onClick: Bt,
                  class: "mx-[5px]"
                }, {
                  default: o(() => [
                    y(u(n(i)("link")), 1)
                  ]),
                  _: 1
                }),
                l("span", null, u(n(i)("descriptionRight")), 1)
              ])
            ]),
            _: 1
          })) : f("", !0),
          !m.value.all.length && !U.value && !Je.value && h.value == "all" && !J.value ? (s(), v("div", nn, [
            on,
            l("div", un, [
              c(g, {
                class: "w-[154px] !h-[48px] mt-[8px]",
                type: "primary",
                onClick: wl
              }, {
                default: o(() => [
                  y("授权码认证")
                ]),
                _: 1
              }),
              c(Ol, {
                ref_key: "getAuthCodeDialog",
                ref: It,
                placement: "bottom",
                width: 478,
                trigger: "click",
                class: "mt-[8px]"
              }, {
                reference: o(() => [
                  c(g, {
                    class: "w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",
                    plain: "",
                    type: "primary"
                  }, {
                    default: o(() => [
                      y("如何获取授权码? ")
                    ]),
                    _: 1
                  })
                ]),
                default: o(() => [
                  l("div", cn, [
                    dn,
                    l("div", rn, [
                      c(g, {
                        class: "w-[182px] !h-[48px]",
                        plain: "",
                        onClick: Ut
                      }, {
                        default: o(() => [
                          y("去应用市场逛逛")
                        ]),
                        _: 1
                      }),
                      c(g, {
                        class: "w-[100px] !h-[48px]",
                        plain: "",
                        onClick: e[9] || (e[9] = (a) => It.value.hide())
                      }, {
                        default: o(() => [
                          y("关闭")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 512)
            ])
          ])) : f("", !0),
          R.value == "card" && n(De) && !U.value && Je.value && h.value == "all" && !J.value ? (s(), x(Oe, {
            key: 3,
            class: "mx-auto overview-empty"
          }, {
            image: o(() => [
              pn
            ]),
            description: o(() => [
              l("p", vn, [
                l("span", null, u(n(i)("buyDescriptionLeft")), 1),
                c(Et, {
                  type: "primary",
                  onClick: Bt,
                  class: "mx-[5px]"
                }, {
                  default: o(() => [
                    y(u(n(i)("link")), 1)
                  ]),
                  _: 1
                }),
                l("span", null, u(n(i)("descriptionRight")), 1)
              ])
            ]),
            _: 1
          })) : f("", !0),
          R.value == "card" && n(De) && !U.value && h.value == "recentlyUpdated" ? (s(), x(Oe, {
            key: 4,
            class: "mx-auto overview-empty"
          }, {
            image: o(() => [
              _n
            ]),
            description: o(() => [
              l("p", fn, u(n(i)("recentlyUpdatedEmpty")), 1)
            ]),
            _: 1
          })) : f("", !0),
          c(Ce, {
            modelValue: je.value,
            "onUpdate:modelValue": e[13] || (e[13] = (a) => je.value = a),
            title: "授权码认证",
            width: "400px"
          }, {
            default: o(() => [
              c(Hl, {
                model: oe,
                "label-width": "0",
                ref_key: "formRef",
                ref: Tt,
                rules: Ul,
                class: "page-form"
              }, {
                default: o(() => [
                  l("div", mn, [
                    c(Nt, { prop: "auth_code" }, {
                      default: o(() => [
                        c(jt, {
                          modelValue: oe.auth_code,
                          "onUpdate:modelValue": e[10] || (e[10] = (a) => oe.auth_code = a),
                          modelModifiers: { trim: !0 },
                          placeholder: n(i)("authCodePlaceholder"),
                          class: "input-width",
                          clearable: "",
                          size: "large"
                        }, null, 8, ["modelValue", "placeholder"])
                      ]),
                      _: 1
                    }),
                    l("div", hn, [
                      c(Nt, { prop: "auth_secret" }, {
                        default: o(() => [
                          c(jt, {
                            modelValue: oe.auth_secret,
                            "onUpdate:modelValue": e[11] || (e[11] = (a) => oe.auth_secret = a),
                            modelModifiers: { trim: !0 },
                            clearable: "",
                            placeholder: n(i)("authSecretPlaceholder"),
                            class: "input-width",
                            size: "large"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      })
                    ]),
                    l("div", yn, u(n(i)("authInfoTips")), 1),
                    l("div", kn, [
                      c(g, {
                        type: "primary",
                        class: "w-full",
                        size: "large",
                        loading: ge.value,
                        onClick: e[12] || (e[12] = (a) => Il(Tt.value))
                      }, {
                        default: o(() => [
                          y(u(n(i)("confirm")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    l("div", gn, [
                      c(g, {
                        type: "primary",
                        link: "",
                        onClick: Ut
                      }, {
                        default: o(() => [
                          y(u(n(i)("notHaveAuth")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          c(Ce, {
            modelValue: G.value,
            "onUpdate:modelValue": e[20] || (e[20] = (a) => G.value = a),
            title: n(i)("addonInstall"),
            width: "850px",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1,
            "before-close": Al
          }, {
            default: o(() => [
              M.value != 2 && !W.value ? (s(), x(ql, {
                key: 0,
                space: 200,
                active: M.value,
                class: "number-of-steps",
                "process-status": "process",
                "align-center": ""
              }, {
                default: o(() => [
                  c(ct, {
                    title: n(i)("envCheck"),
                    class: "flex-1"
                  }, null, 8, ["title"]),
                  c(ct, {
                    title: n(i)("installProgress"),
                    class: "flex-1"
                  }, null, 8, ["title"]),
                  c(ct, {
                    title: n(i)("installComplete"),
                    class: "flex-1"
                  }, null, 8, ["title"])
                ]),
                _: 1
              }, 8, ["active"])) : f("", !0),
              H(l("div", null, [
                l("div", xn, [
                  c(Ot, { style: { height: "calc(50vh)", overflow: "auto" } }, {
                    default: o(() => [
                      G.value ? (s(), x(vt, {
                        key: 0,
                        ref_key: "installCheckRef",
                        ref: xt,
                        class: "mt-3",
                        scene: "addon_install",
                        params: { addon: $.value },
                        "show-footer": !1,
                        onDone: pl,
                        onPassed: e[14] || (e[14] = (a) => j.value = !0),
                        onFailed: e[15] || (e[15] = (a) => j.value = !1)
                      }, null, 8, ["params"])) : f("", !0)
                    ]),
                    _: 1
                  })
                ]),
                l("div", bn, [
                  _e.value && !j.value ? (s(), v("span", An, " 存在未通过的必检项，请处理后再继续 ")) : f("", !0),
                  _e.value && !j.value ? (s(), x(g, {
                    key: 1,
                    loading: Le.value,
                    onClick: vl
                  }, {
                    default: o(() => [
                      y(" 重新校验 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])) : f("", !0),
                  c(g, {
                    type: "primary",
                    class: "!w-[140px]",
                    disabled: !j.value || he.value,
                    loading: me.value,
                    onClick: yl
                  }, {
                    default: o(() => [
                      y(u(n(i)("install")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ])
              ], 512), [
                [ue, M.value == 0]
              ]),
              H(l("div", Cn, [
                l("div", wn, [
                  l("div", Un, [
                    c(n(aa), {
                      ref_key: "terminalRef",
                      ref: X,
                      name: `install-${ll.value}`,
                      context: $.value,
                      "init-log": null,
                      "show-header": !1,
                      "show-log-time": !0,
                      onExecCmd: _l
                    }, null, 8, ["name", "context"])
                  ]),
                  l("div", In, [
                    c(g, {
                      type: "primary",
                      loading: !0,
                      class: "!w-[140px]"
                    }, {
                      default: o(() => [
                        y("已用时 " + u(n(At)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 512), [
                [ue, M.value == 1 && !W.value]
              ]),
              H(l("div", Tn, [
                c(Ht, {
                  icon: "success",
                  title: n(i)("addonInstallSuccess")
                }, {
                  icon: o(() => [
                    Bn
                  ]),
                  extra: o(() => [
                    (s(!0), v(S, null, He(Te.value, (a, A) => (s(), v("div", {
                      class: "mb-[10px]",
                      key: A
                    }, [
                      l("div", Vn, u(a), 1)
                    ]))), 128)),
                    se.value > 0 ? (s(), v("div", Mn, "本次安装用时" + u(n(At)), 1)) : f("", !0),
                    l("div", Rn, [
                      ne.value == "cloud" ? (s(), x(g, {
                        key: 0,
                        onClick: e[16] || (e[16] = (a) => bt()),
                        class: "!w-[90px]"
                      }, {
                        default: o(() => [
                          y("返回")
                        ]),
                        _: 1
                      })) : f("", !0),
                      c(g, {
                        onClick: e[17] || (e[17] = (a) => G.value = !1),
                        type: "primary",
                        class: "!w-[90px]"
                      }, {
                        default: o(() => [
                          y("完成")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["title"])
              ], 512), [
                [ue, M.value == 2]
              ]),
              H(l("div", Dn, [
                c(Ht, {
                  icon: "error",
                  title: n(i)("安装失败")
                }, {
                  icon: o(() => [
                    Ln
                  ]),
                  extra: o(() => [
                    c(Ot, { class: "max-h-[120px] !overflow-auto text-[15px] text-[#4F516D] mb-[15px] mt-[-15px]" }, {
                      default: o(() => [
                        y(u(wt.value), 1)
                      ]),
                      _: 1
                    }),
                    ne.value == "cloud" ? (s(), x(g, {
                      key: 0,
                      onClick: e[18] || (e[18] = (a) => bt()),
                      class: "!w-[90px]"
                    }, {
                      default: o(() => [
                        y("错误信息")
                      ]),
                      _: 1
                    })) : f("", !0),
                    c(g, {
                      onClick: e[19] || (e[19] = (a) => G.value = !1),
                      type: "primary",
                      class: "!w-[90px]"
                    }, {
                      default: o(() => [
                        y("完成")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"])
              ], 512), [
                [ue, W.value]
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "title"]),
          c(Ce, {
            modelValue: ye.value,
            "onUpdate:modelValue": e[21] || (e[21] = (a) => ye.value = a),
            title: n(i)("addonUninstall"),
            width: "850px",
            "close-on-click-modal": !1,
            "close-on-press-escape": !1
          }, {
            default: o(() => [
              l("div", Sn, [
                ye.value ? (s(), x(vt, {
                  key: 0,
                  scene: "addon_uninstall",
                  params: { addon: Ye.value },
                  "auto-next": !0,
                  "show-prev": !1,
                  "next-text": n(i)("confirm"),
                  onNext: xl
                }, null, 8, ["params", "next-text"])) : f("", !0)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "title"]),
          c(Ce, {
            modelValue: re.value,
            "onUpdate:modelValue": e[23] || (e[23] = (a) => re.value = a),
            title: "下载提示",
            width: "30%"
          }, {
            footer: o(() => [
              l("span", En, [
                c(g, {
                  onClick: e[22] || (e[22] = (a) => re.value = !1)
                }, {
                  default: o(() => [
                    y("取消")
                  ]),
                  _: 1
                }),
                c(g, {
                  type: "primary",
                  onClick: ul
                }, {
                  default: o(() => [
                    y("确定")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: o(() => [
              Fn
            ]),
            _: 1
          }, 8, ["modelValue"]),
          c(Kl, {
            modelValue: le.value,
            "onUpdate:modelValue": e[34] || (e[34] = (a) => le.value = a),
            class: "am-drawer",
            direction: "rtl",
            size: "560px",
            "with-header": !1,
            onClosed: jl
          }, {
            default: o(() => {
              var a, A, D, we, Ue, N, qt, zt, $t, Gt, Kt, Wt;
              return [
                p.value ? (s(), v("div", jn, [
                  l("div", Nn, [
                    l("div", On, [
                      l("span", Hn, [
                        c(L, {
                          class: "am-detail__logo",
                          src: n(qe)(n(Rl)),
                          fit: "cover"
                        }, {
                          error: o(() => [
                            qn
                          ]),
                          _: 1
                        }, 8, ["src"])
                      ]),
                      l("div", zn, [
                        l("h2", {
                          class: "am-detail__title",
                          title: ((a = p.value) == null ? void 0 : a.title) || "-"
                        }, u(((A = p.value) == null ? void 0 : A.title) || "-"), 9, $n),
                        l("p", {
                          class: "am-detail__key",
                          title: ((D = p.value) == null ? void 0 : D.key) || ""
                        }, u(((we = p.value) == null ? void 0 : we.key) || "-"), 9, Gn),
                        l("div", Kn, [
                          l("span", Wn, u(((Ue = p.value) == null ? void 0 : Ue.type) == "app" ? "应用" : "插件"), 1),
                          n(Dl) ? (s(), v("span", Pn, [
                            Qn,
                            y("已安装")
                          ])) : (s(), v("span", Xn, "未安装")),
                          n(tt) ? (s(), v("span", Yn, "可升级")) : f("", !0)
                        ])
                      ])
                    ]),
                    l("button", {
                      type: "button",
                      class: "am-detail__close",
                      "aria-label": "关闭",
                      onClick: Dt
                    }, [
                      c(dt, null, {
                        default: o(() => [
                          c(zl)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  l("div", Zn, [
                    (N = p.value) != null && N.desc ? (s(), v("p", Jn, u(p.value.desc), 1)) : f("", !0),
                    l("div", eo, [
                      to,
                      l("dl", lo, [
                        (qt = p.value) != null && qt.type ? (s(), v("div", ao, [
                          so,
                          l("dd", null, u(p.value.type == "app" ? "应用" : "插件"), 1)
                        ])) : f("", !0),
                        (zt = p.value) != null && zt.key ? (s(), v("div", no, [
                          oo,
                          l("dd", {
                            title: p.value.key
                          }, u(p.value.key), 9, io)
                        ])) : f("", !0),
                        l("div", null, [
                          uo,
                          l("dd", null, u(n(Ll)), 1)
                        ])
                      ])
                    ]),
                    l("div", co, [
                      ro,
                      l("dl", po, [
                        l("div", null, [
                          vo,
                          l("dd", null, [
                            l("span", null, u(p.value.expire_time || "--"), 1),
                            p.value.app_id ? (s(), v("span", {
                              key: 0,
                              class: "am-kv__link",
                              onClick: e[24] || (e[24] = (B) => ut("pc"))
                            }, "续费应用")) : f("", !0)
                          ])
                        ])
                      ])
                    ]),
                    ($t = p.value) != null && $t.author || (Gt = p.value) != null && Gt.author_phone ? (s(), v("div", _o, [
                      fo,
                      l("dl", mo, [
                        (Kt = p.value) != null && Kt.author ? (s(), v("div", ho, [
                          yo,
                          l("dd", {
                            title: p.value.author
                          }, u(p.value.author), 9, ko)
                        ])) : f("", !0),
                        (Wt = p.value) != null && Wt.author_phone ? (s(), v("div", go, [
                          xo,
                          l("dd", null, u(p.value.author_phone), 1)
                        ])) : f("", !0)
                      ])
                    ])) : f("", !0),
                    p.value.key != "niucloud-admin" && p.value.app_id ? (s(), v("div", bo, [
                      Ao,
                      l("div", Co, [
                        l("button", {
                          type: "button",
                          class: "am-chip",
                          onClick: e[25] || (e[25] = (B) => ut("pc"))
                        }, [
                          c(dt, null, {
                            default: o(() => [
                              c($l)
                            ]),
                            _: 1
                          }),
                          y(" PC端应用主页 ")
                        ]),
                        l("button", {
                          type: "button",
                          class: "am-chip",
                          onClick: e[26] || (e[26] = (B) => ut("wap"))
                        }, [
                          c(dt, null, {
                            default: o(() => [
                              c(Gl)
                            ]),
                            _: 1
                          }),
                          y(" 移动端应用主页 ")
                        ])
                      ])
                    ])) : f("", !0),
                    l("div", wo, [
                      Uo,
                      H((s(), v("div", Io, [
                        xe.value.length ? (s(), v("ol", To, [
                          (s(!0), v(S, null, He(xe.value, (B, Wl) => (s(), v("li", {
                            key: B.version_no || Wl
                          }, [
                            l("div", Bo, [
                              l("span", null, "v" + u(B.version_no), 1),
                              l("span", Vo, u(Fl(B.release_time)[0]), 1)
                            ]),
                            B.upgrade_log ? (s(), v("div", {
                              key: 0,
                              class: "am-log__body",
                              innerHTML: B.upgrade_log
                            }, null, 8, Mo)) : f("", !0)
                          ]))), 128))
                        ])) : (s(), v("p", Ro, "暂无版本更新信息"))
                      ])), [
                        [rt, lt.value]
                      ])
                    ])
                  ]),
                  l("div", Do, [
                    n(Rt) ? (s(), v("button", {
                      key: 0,
                      type: "button",
                      class: "am-btn am-btn--outline",
                      onClick: Lt
                    }, u(n(i)("diffVerify")), 1)) : nt(p.value) ? (s(), v("button", {
                      key: 1,
                      type: "button",
                      class: "am-btn am-btn--outline",
                      onClick: e[27] || (e[27] = (B) => ot(p.value))
                    }, u(n(i)("diffVerify")), 1)) : f("", !0),
                    n(Rt) ? n(tt) ? (s(), v("button", {
                      key: 3,
                      type: "button",
                      class: "am-btn am-btn--primary",
                      onClick: e[31] || (e[31] = V((B) => ke(p.value), ["stop"]))
                    }, " 升级 ")) : f("", !0) : (s(), v(S, { key: 2 }, [
                      p.value.is_download ? !p.value.install_info || Object.keys(p.value.install_info).length == 0 ? (s(), v("button", {
                        key: 1,
                        type: "button",
                        class: "am-btn am-btn--primary",
                        onClick: e[29] || (e[29] = V((B) => fe(p.value.key), ["stop"]))
                      }, " 安装 ")) : n(tt) ? (s(), v("button", {
                        key: 2,
                        type: "button",
                        class: "am-btn am-btn--primary",
                        onClick: e[30] || (e[30] = V((B) => ke(p.value), ["stop"]))
                      }, " 升级 ")) : f("", !0) : (s(), v("button", {
                        key: 0,
                        type: "button",
                        class: "am-btn am-btn--primary",
                        disabled: F.value != "",
                        onClick: e[28] || (e[28] = V((B) => Re(p.value), ["stop"]))
                      }, u(F.value == p.value.key ? "安装中…" : "安装"), 9, Lo))
                    ], 64)),
                    So,
                    p.value.key != "niucloud-admin" && p.value.is_download && (!p.value.install_info || !Object.keys(p.value.install_info).length) ? (s(), v("button", {
                      key: 4,
                      type: "button",
                      class: "am-btn am-btn--danger",
                      onClick: e[32] || (e[32] = (B) => Tl(p.value.key))
                    }, " 删除 ")) : p.value.key != "niucloud-admin" && p.value.is_download && p.value.install_info && Object.keys(p.value.install_info).length ? (s(), v("button", {
                      key: 5,
                      type: "button",
                      class: "am-btn am-btn--danger",
                      onClick: e[33] || (e[33] = (B) => Ze(p.value.key))
                    }, " 卸载 ")) : f("", !0)
                  ])
                ])) : f("", !0)
              ];
            }),
            _: 1
          }, 8, ["modelValue"])
        ])), [
          [rt, U.value]
        ]),
        c(Ua, {
          show: ie.value,
          "onUpdate:show": e[35] || (e[35] = (a) => ie.value = a),
          target: at.value,
          icon: st.value
        }, null, 8, ["show", "target", "icon"]),
        c(Ia, {
          show: be.value,
          "onUpdate:show": e[36] || (e[36] = (a) => be.value = a)
        }, null, 8, ["show"]),
        c(wa, {
          upgradeKey: t.upgradeKey,
          ref_key: "upgradeLogRef",
          ref: sl
        }, null, 8, ["upgradeKey"]),
        c(Ca, {
          ref_key: "upgradeRef",
          ref: yt,
          onComplete: nl,
          onCloudbuild: bl
        }, null, 512),
        c(Ce, {
          modelValue: Ge.value,
          "onUpdate:modelValue": e[37] || (e[37] = (a) => Ge.value = a),
          title: "编译环境校验",
          width: "580px",
          "destroy-on-close": !0,
          "append-to-body": ""
        }, {
          default: o(() => [
            c(vt, {
              scene: "cloud_build",
              "show-footer": !1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const oi = /* @__PURE__ */ ua(Fo, [["__scopeId", "data-v-b282ac04"]]);
export {
  oi as default
};
