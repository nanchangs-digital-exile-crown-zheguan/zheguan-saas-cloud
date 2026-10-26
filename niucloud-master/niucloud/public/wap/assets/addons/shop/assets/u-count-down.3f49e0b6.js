/* __addonChunkCssInjected:1f3dc818 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("1f3dc818",".addon-wrap-1f3dc818 .u-empty,.addon-wrap-1f3dc818 .u-empty__wrap,.addon-wrap-1f3dc818 .u-tabs,.addon-wrap-1f3dc818 .u-tabs__wrapper,.addon-wrap-1f3dc818 .u-tabs__wrapper__scroll-view-wrapper,.addon-wrap-1f3dc818 .u-tabs__wrapper__scroll-view,.addon-wrap-1f3dc818 .u-tabs__wrapper__nav,.addon-wrap-1f3dc818 .u-tabs__wrapper__nav__line{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.addon-wrap-1f3dc818 .u-count-down__text{color:#606266;font-size:15px;line-height:22px}");
import "./text.99ce2b32.js";
import { a as index$i, i as index$g } from "./uni-h5.es.7545a186.js";
import { d as defProps, m as mpMixin, a as mixin } from "./mixin.62d4081a.js";
import { openBlock, createBlock, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const props = {
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: () => defProps.countDown.time
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: () => defProps.countDown.format
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: () => defProps.countDown.autoStart
    },
    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: () => defProps.countDown.millisecond
    }
  }
};
function padZero(num, targetLength = 2) {
  let str = `${num}`;
  while (str.length < targetLength) {
    str = `0${str}`;
  }
  return str;
}
const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function parseTimeData(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function parseFormat(format, timeData) {
  let {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  } = timeData;
  if (format.indexOf("DD") === -1) {
    hours += days * 24;
  } else {
    format = format.replace("DD", padZero(days));
  }
  if (format.indexOf("HH") === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace("HH", padZero(hours));
  }
  if (format.indexOf("mm") === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace("mm", padZero(minutes));
  }
  if (format.indexOf("ss") === -1) {
    milliseconds += seconds * 1e3;
  } else {
    format = format.replace("ss", padZero(seconds));
  }
  return format.replace("SSS", padZero(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
const uCountDown_vue_vue_type_style_index_0_scoped_1f3dc818_lang = "";
const _sfc_main = {
  name: "u-count-down",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      timer: null,
      // 各单位(天，时，分等)剩余时间
      timeData: parseTimeData(0),
      // 格式化后的时间，如"03:23:21"
      formattedTime: "0",
      // 倒计时是否正在进行中
      runing: false,
      endTime: 0,
      // 结束的毫秒时间戳
      remainTime: 0
      // 剩余的毫秒时间
    };
  },
  watch: {
    time(n) {
      this.reset();
    }
  },
  mounted() {
    this.init();
  },
  emits: ["change", "finish"],
  methods: {
    init() {
      this.reset();
    },
    // 开始倒计时
    start() {
      if (this.runing)
        return;
      this.runing = true;
      this.endTime = Date.now() + this.remainTime;
      this.toTick();
    },
    // 根据是否展示毫秒，执行不同操作函数
    toTick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    macroTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        const remain = this.getRemainTime();
        if (!isSameSecond(remain, this.remainTime) || remain === 0) {
          this.setRemainTime(remain);
        }
        if (this.remainTime !== 0) {
          this.macroTick();
        }
      }, 30);
    },
    microTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        this.setRemainTime(this.getRemainTime());
        if (this.remainTime !== 0) {
          this.microTick();
        }
      }, 50);
    },
    // 获取剩余的时间
    getRemainTime() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    // 设置剩余的时间
    setRemainTime(remain) {
      this.remainTime = remain;
      const timeData = parseTimeData(remain);
      this.$emit("change", timeData);
      this.formattedTime = parseFormat(this.format, timeData);
      if (remain <= 0) {
        this.pause();
        this.$emit("finish");
      }
    },
    // 重置倒计时
    reset() {
      this.pause();
      this.remainTime = this.time;
      this.setRemainTime(this.remainTime);
      if (this.autoStart) {
        this.start();
      }
    },
    // 暂停倒计时
    pause() {
      this.runing = false;
      this.clearTimeout();
    },
    // 清空定时器
    clearTimeout() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimeout();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_text = index$i;
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, { class: "u-count-down" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_v_uni_text, { class: "u-count-down__text" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($data.formattedTime), 1)
          ]),
          _: 1
        })
      ], true)
    ]),
    _: 3
  });
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f3dc818"]]);
export {
  __easycom_3 as _
};
