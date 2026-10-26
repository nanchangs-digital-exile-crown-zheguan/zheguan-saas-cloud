/* __addonChunkCssInjected:e3fc8be5 */(function(h,c){if(typeof document==="undefined")return;const k="adc-"+h;if(document.getElementById(k))return;const s=document.createElement("style");s.id=k;s.textContent=c;document.head.appendChild(s)})("e3fc8be5",".addon-wrap-e3fc8be5 ._a{padding:1.5px 0;color:#366092;word-break:break-all}.addon-wrap-e3fc8be5 ._hover{text-decoration:underline;opacity:.7}.addon-wrap-e3fc8be5 ._img{max-width:100%;-webkit-touch-callout:none}.addon-wrap-e3fc8be5 ._block{display:block}.addon-wrap-e3fc8be5 ._b,.addon-wrap-e3fc8be5 ._strong{font-weight:700}.addon-wrap-e3fc8be5 ._code{font-family:monospace}.addon-wrap-e3fc8be5 ._del{text-decoration:line-through}.addon-wrap-e3fc8be5 ._em,.addon-wrap-e3fc8be5 ._i{font-style:italic}.addon-wrap-e3fc8be5 ._h1{font-size:2em}.addon-wrap-e3fc8be5 ._h2{font-size:1.5em}.addon-wrap-e3fc8be5 ._h3{font-size:1.17em}.addon-wrap-e3fc8be5 ._h5{font-size:.83em}.addon-wrap-e3fc8be5 ._h6{font-size:.67em}.addon-wrap-e3fc8be5 ._h1,.addon-wrap-e3fc8be5 ._h2,.addon-wrap-e3fc8be5 ._h3,.addon-wrap-e3fc8be5 ._h4,.addon-wrap-e3fc8be5 ._h5,.addon-wrap-e3fc8be5 ._h6{display:block;font-weight:700}.addon-wrap-e3fc8be5 ._image{height:1px}.addon-wrap-e3fc8be5 ._ins{text-decoration:underline}.addon-wrap-e3fc8be5 ._li{display:list-item}.addon-wrap-e3fc8be5 ._ol{list-style-type:decimal}.addon-wrap-e3fc8be5 ._ol,.addon-wrap-e3fc8be5 ._ul{display:block;padding-left:40px;margin:1em 0}.addon-wrap-e3fc8be5 ._q:before{content:'\"'}.addon-wrap-e3fc8be5 ._q:after{content:'\"'}.addon-wrap-e3fc8be5 ._sub{font-size:smaller;vertical-align:sub}.addon-wrap-e3fc8be5 ._sup{font-size:smaller;vertical-align:super}.addon-wrap-e3fc8be5 ._thead,.addon-wrap-e3fc8be5 ._tbody,.addon-wrap-e3fc8be5 ._tfoot{display:table-row-group}.addon-wrap-e3fc8be5 ._tr{display:table-row}.addon-wrap-e3fc8be5 ._td,.addon-wrap-e3fc8be5 ._th{display:table-cell;vertical-align:middle}.addon-wrap-e3fc8be5 ._th{font-weight:700;text-align:center}.addon-wrap-e3fc8be5 ._ul{list-style-type:disc}.addon-wrap-e3fc8be5 ._ul ._ul{margin:0;list-style-type:circle}.addon-wrap-e3fc8be5 ._ul ._ul ._ul{list-style-type:square}.addon-wrap-e3fc8be5 ._abbr,.addon-wrap-e3fc8be5 ._b,.addon-wrap-e3fc8be5 ._code,.addon-wrap-e3fc8be5 ._del,.addon-wrap-e3fc8be5 ._em,.addon-wrap-e3fc8be5 ._i,.addon-wrap-e3fc8be5 ._ins,.addon-wrap-e3fc8be5 ._label,.addon-wrap-e3fc8be5 ._q,.addon-wrap-e3fc8be5 ._span,.addon-wrap-e3fc8be5 ._strong,.addon-wrap-e3fc8be5 ._sub,.addon-wrap-e3fc8be5 ._sup{display:inline}");
import { a1 as createIntersectionObserver, V as createVideoContext, f as previewImage, K as navigateTo, M as switchTab, b as index$q, a as index$i, i as index$g, W as index$d, a2 as index$l, J as getSystemInfoSync, l as setNavigationBarTitle, c as createSelectorQuery, p as pageScrollTo } from "./uni-h5.es.7545a186.js";
import "./resize-sensor.8ba09891.js";
import "./swiper.dd9c8dc2.js";
import "./movable-view.4d7c1637.js";
import "./text.99ce2b32.js";
import "./video.aeba19b1.js";
import { resolveComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createElementBlock, Fragment, renderList, createCommentVNode, withModifiers, createTextVNode, toDisplayString, createVNode, renderSlot } from "/wap/assets/shared/vue.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cc2b3d55.js";
const richText = "";
const node_vue_vue_type_style_index_0_scoped_e3fc8be5_lang = "";
var inlineTags = {
  abbr: true,
  b: true,
  big: true,
  code: true,
  del: true,
  em: true,
  i: true,
  ins: true,
  label: true,
  q: true,
  small: true,
  span: true,
  strong: true,
  sub: true,
  sup: true
};
const _sfc_wxs = {
  isInline: function(tagName, style) {
    return inlineTags[tagName] || (style || "").indexOf("display:inline") !== -1;
  }
};
const block0 = (Comp) => {
  if (!Comp.$wxs) {
    Comp.$wxs = [];
  }
  Comp.$wxs.push("handler");
  if (!Comp.mixins) {
    Comp.mixins = [];
  }
  Comp.mixins.push({ beforeCreate() {
    this["handler"] = _sfc_wxs;
  } });
};
const _sfc_main$1 = {
  name: "node",
  options: {},
  data() {
    return {
      ctrl: {}
    };
  },
  props: {
    name: String,
    attrs: {
      type: Object,
      default() {
        return {};
      }
    },
    childs: Array,
    opts: Array
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
      for (this.root = this.$parent; this.root.$options.name !== "u-parse"; this.root = this.root.$parent)
        ;
    });
    if (this.opts[0]) {
      let i;
      for (i = this.childs.length; i--; ) {
        if (this.childs[i].name === "img")
          break;
      }
      if (i !== -1) {
        this.observer = createIntersectionObserver(this).relativeToViewport({
          top: 500,
          bottom: 500
        });
        this.observer.observe("._img", (res) => {
          if (res.intersectionRatio) {
            this.$set(this.ctrl, "load", 1);
            this.observer.disconnect();
          }
        });
      }
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    /**
     * @description 播放视频事件
     * @param {Event} e
     */
    play(e) {
      this.root.$emit("play");
      if (this.root.pauseVideo) {
        let flag = false;
        const id = e.target.id;
        for (let i = this.root._videos.length; i--; ) {
          if (this.root._videos[i].id === id) {
            flag = true;
          } else {
            this.root._videos[i].pause();
          }
        }
        if (!flag) {
          const ctx = createVideoContext(
            id,
            this
          );
          ctx.id = id;
          if (this.root.playbackRate) {
            ctx.playbackRate(this.root.playbackRate);
          }
          this.root._videos.push(ctx);
        }
      }
    },
    /**
     * @description 图片点击事件
     * @param {Event} e
     */
    imgTap(e) {
      const node2 = this.childs[e.currentTarget.dataset.i];
      if (node2.a) {
        this.linkTap(node2.a);
        return;
      }
      if (node2.attrs.ignore)
        return;
      node2.attrs.src = node2.attrs.src || node2.attrs["data-src"];
      this.root.$emit("imgTap", node2.attrs);
      if (this.root.previewImg) {
        previewImage({
          current: parseInt(node2.attrs.i),
          urls: this.root.imgList
        });
      }
    },
    /**
     * @description 图片长按
     */
    imgLongTap(e) {
    },
    /**
     * @description 图片加载完成事件
     * @param {Event} e
     */
    imgLoad(e) {
      const i = e.currentTarget.dataset.i;
      if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
        this.$set(this.ctrl, i, 1);
      }
      this.checkReady();
    },
    /**
     * @description 检查是否所有图片加载完毕
     */
    checkReady() {
      if (!this.root.lazyLoad) {
        this.root._unloadimgs -= 1;
        if (!this.root._unloadimgs) {
          setTimeout(() => {
            this.root.getRect().then((rect) => {
              this.root.$emit("ready", rect);
            }).catch(() => {
              this.root.$emit("ready", {});
            });
          }, 350);
        }
      }
    },
    /**
     * @description 链接点击事件
     * @param {Event} e
     */
    linkTap(e) {
      const node2 = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
      const attrs = node2.attrs || e;
      const href = attrs.href;
      this.root.$emit("linkTap", Object.assign({
        innerText: this.root.getText(node2.children || [])
        // 链接内的文本内容
      }, attrs));
      if (href) {
        if (href[0] === "#") {
          this.root.navigateTo(href.substring(1)).catch(() => {
          });
        } else if (href.split("?")[0].includes("://")) {
          if (this.root.copyLink) {
            window.open(href);
          }
        } else {
          navigateTo({
            url: href,
            fail() {
              switchTab({
                url: href,
                fail() {
                }
              });
            }
          });
        }
      }
    },
    /**
     * @description 错误事件
     * @param {Event} e
     */
    mediaError(e) {
      const i = e.currentTarget.dataset.i;
      const node2 = this.childs[i];
      if (node2.name === "video" || node2.name === "audio") {
        let index = (this.ctrl[i] || 0) + 1;
        if (index > node2.src.length) {
          index = 0;
        }
        if (index < node2.src.length) {
          this.$set(this.ctrl, i, index);
          return;
        }
      } else if (node2.name === "img") {
        if (this.opts[0] && !this.ctrl.load)
          return;
        if (this.opts[2]) {
          this.$set(this.ctrl, i, -1);
        }
        this.checkReady();
      }
      if (this.root) {
        this.root.$emit("error", {
          source: node2.name,
          attrs: node2.attrs
        });
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_uni_image = index$q;
  const _component_v_uni_text = index$i;
  const _component_node = resolveComponent("node", true);
  const _component_v_uni_view = index$g;
  const _component_v_uni_video = index$d;
  const _component_v_uni_rich_text = index$l;
  return openBlock(), createBlock(_component_v_uni_view, {
    id: $props.attrs.id,
    class: normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
    style: normalizeStyle($props.attrs.style)
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.childs, (n, i) => {
        return openBlock(), createElementBlock(Fragment, { key: i }, [
          n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? (openBlock(), createBlock(_component_v_uni_image, {
            key: 0,
            class: "_img",
            style: normalizeStyle(n.attrs.style),
            src: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1],
            mode: "widthFix"
          }, null, 8, ["style", "src"])) : createCommentVNode("", true),
          n.name === "img" ? (openBlock(), createElementBlock("img", {
            key: 1,
            id: n.attrs.id,
            class: normalizeClass("_img " + n.attrs.class),
            style: normalizeStyle(($data.ctrl[i] === -1 ? "display:none;" : "") + n.attrs.style),
            src: n.attrs.src || ($data.ctrl.load ? n.attrs["data-src"] : ""),
            "data-i": i,
            onLoad: _cache[0] || (_cache[0] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
            onError: _cache[1] || (_cache[1] = (...args) => $options.mediaError && $options.mediaError(...args)),
            onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
            onLongpress: _cache[3] || (_cache[3] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
          }, null, 46, ["id", "src", "data-i"])) : n.text ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 2,
            decode: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(n.text), 1)
            ]),
            _: 2
          }, 1024)) : n.name === "br" ? (openBlock(), createBlock(_component_v_uni_text, { key: 3 }, {
            default: withCtx(() => [
              createTextVNode("\\n")
            ]),
            _: 1
          })) : n.name === "a" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 4,
            id: n.attrs.id,
            class: normalizeClass((n.attrs.href ? "_a " : "") + n.attrs.class),
            "hover-class": "_hover",
            style: normalizeStyle("display:inline;" + n.attrs.style),
            "data-i": i,
            onClick: withModifiers($options.linkTap, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(_component_node, {
                name: "span",
                childs: n.children,
                opts: $props.opts,
                style: { "display": "inherit" }
              }, null, 8, ["childs", "opts"])
            ]),
            _: 2
          }, 1032, ["id", "class", "style", "data-i", "onClick"])) : n.name === "video" ? (openBlock(), createBlock(_component_v_uni_video, {
            key: 5,
            id: n.attrs.id,
            class: normalizeClass(n.attrs.class),
            style: normalizeStyle(n.attrs.style),
            autoplay: n.attrs.autoplay,
            controls: n.attrs.controls,
            loop: n.attrs.loop,
            muted: n.attrs.muted,
            "object-fit": n.attrs["object-fit"],
            poster: n.attrs.poster,
            src: n.src[$data.ctrl[i] || 0],
            "data-i": i,
            onPlay: $options.play,
            onError: $options.mediaError
          }, null, 8, ["id", "class", "style", "autoplay", "controls", "loop", "muted", "object-fit", "poster", "src", "data-i", "onPlay", "onError"])) : n.name === "iframe" ? (openBlock(), createElementBlock("iframe", {
            key: 6,
            style: normalizeStyle(n.attrs.style),
            allowfullscreen: n.attrs.allowfullscreen,
            frameborder: n.attrs.frameborder,
            src: n.attrs.src
          }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n.name === "embed" ? (openBlock(), createElementBlock("embed", {
            key: 7,
            style: normalizeStyle(n.attrs.style),
            src: n.attrs.src
          }, null, 12, ["src"])) : n.name === "table" && n.c || n.name === "li" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 8,
            id: n.attrs.id,
            class: normalizeClass("_" + n.name + " " + n.attrs.class),
            style: normalizeStyle(n.attrs.style)
          }, {
            default: withCtx(() => [
              n.name === "li" ? (openBlock(), createBlock(_component_node, {
                key: 0,
                childs: n.children,
                opts: $props.opts
              }, null, 8, ["childs", "opts"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(n.children, (tbody, x) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: x,
                  class: normalizeClass("_" + tbody.name + " " + tbody.attrs.class),
                  style: normalizeStyle(tbody.attrs.style)
                }, {
                  default: withCtx(() => [
                    tbody.name === "td" || tbody.name === "th" ? (openBlock(), createBlock(_component_node, {
                      key: 0,
                      childs: tbody.children,
                      opts: $props.opts
                    }, null, 8, ["childs", "opts"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(tbody.children, (tr, y) => {
                      return openBlock(), createElementBlock(Fragment, { key: y }, [
                        tr.name === "td" || tr.name === "th" ? (openBlock(), createBlock(_component_v_uni_view, {
                          key: 0,
                          class: normalizeClass("_" + tr.name + " " + tr.attrs.class),
                          style: normalizeStyle(tr.attrs.style)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_node, {
                              childs: tr.children,
                              opts: $props.opts
                            }, null, 8, ["childs", "opts"])
                          ]),
                          _: 2
                        }, 1032, ["class", "style"])) : (openBlock(), createBlock(_component_v_uni_view, {
                          key: 1,
                          class: normalizeClass("_" + tr.name + " " + tr.attrs.class),
                          style: normalizeStyle(tr.attrs.style)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(tr.children, (td, z) => {
                              return openBlock(), createBlock(_component_v_uni_view, {
                                key: z,
                                class: normalizeClass("_" + td.name + " " + td.attrs.class),
                                style: normalizeStyle(td.attrs.style)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_node, {
                                    childs: td.children,
                                    opts: $props.opts
                                  }, null, 8, ["childs", "opts"])
                                ]),
                                _: 2
                              }, 1032, ["class", "style"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class", "style"]))
                      ], 64);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "style"]);
              }), 128))
            ]),
            _: 2
          }, 1032, ["id", "class", "style"])) : !n.c && !_ctx.handler.isInline(n.name, n.attrs.style) ? (openBlock(), createBlock(_component_v_uni_rich_text, {
            key: 9,
            id: n.attrs.id,
            style: normalizeStyle(n.f),
            "user-select": $props.opts[4],
            nodes: [n]
          }, null, 8, ["id", "style", "user-select", "nodes"])) : n.c === 2 ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 10,
            id: n.attrs.id,
            class: normalizeClass("_block _" + n.name + " " + n.attrs.class),
            style: normalizeStyle(n.f + ";" + n.attrs.style)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(n.children, (n2, j) => {
                return openBlock(), createBlock(_component_node, {
                  key: j,
                  style: normalizeStyle(n2.f),
                  name: n2.name,
                  attrs: n2.attrs,
                  childs: n2.children,
                  opts: $props.opts
                }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
              }), 128))
            ]),
            _: 2
          }, 1032, ["id", "class", "style"])) : (openBlock(), createBlock(_component_node, {
            key: 11,
            style: normalizeStyle(n.f),
            name: n.name,
            attrs: n.attrs,
            childs: n.children,
            opts: $props.opts
          }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
        ], 64);
      }), 128))
    ]),
    _: 1
  }, 8, ["id", "class", "style"]);
}
if (typeof block0 === "function")
  block0(_sfc_main$1);
const node = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e3fc8be5"]]);
const config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
  // 要移除的标签
  ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
  // 自闭合的标签
  voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
  // html 实体
  entities: {
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    ensp: " ",
    emsp: " ",
    nbsp: " ",
    semi: ";",
    ndash: "–",
    mdash: "—",
    middot: "·",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
    bull: "•",
    hellip: "…",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓"
  },
  // 默认的标签样式
  tagStyle: {
    address: "font-style:italic",
    big: "display:inline;font-size:1.2em",
    caption: "display:table-caption;text-align:center",
    center: "text-align:center",
    cite: "font-style:italic",
    dd: "margin-left:40px",
    mark: "background-color:yellow",
    pre: "font-family:monospace;white-space:pre",
    s: "text-decoration:line-through",
    small: "display:inline;font-size:0.8em",
    strike: "text-decoration:line-through",
    u: "text-decoration:underline"
  },
  // svg 大小写对照表
  svgDict: {
    animatetransform: "animateTransform",
    lineargradient: "linearGradient",
    viewbox: "viewBox",
    attributename: "attributeName",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur"
  }
};
const tagSelector = {};
const {
  windowWidth
} = getSystemInfoSync();
const blankChar = makeMap(" ,\r,\n,	,\f");
let idIndex = 0;
config.ignoreTags.iframe = void 0;
config.trustTags.iframe = true;
config.ignoreTags.embed = void 0;
config.trustTags.embed = true;
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = list.length; i--; ) {
    map[list[i]] = true;
  }
  return map;
}
function decodeEntity(str, amp) {
  let i = str.indexOf("&");
  while (i !== -1) {
    const j = str.indexOf(";", i + 3);
    let code;
    if (j === -1)
      break;
    if (str[i + 1] === "#") {
      code = parseInt((str[i + 2] === "x" ? "0" : "") + str.substring(i + 2, j));
      if (!isNaN(code)) {
        str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
      }
    } else {
      code = str.substring(i + 1, j);
      if (config.entities[code] || code === "amp" && amp) {
        str = str.substr(0, i) + (config.entities[code] || "&") + str.substr(j + 1);
      }
    }
    i = str.indexOf("&", i + 1);
  }
  return str;
}
function mergeNodes(nodes) {
  let i = nodes.length - 1;
  for (let j = i; j >= -1; j--) {
    if (j === -1 || nodes[j].c || !nodes[j].name || nodes[j].name !== "div" && nodes[j].name !== "p" && nodes[j].name[0] !== "h" || (nodes[j].attrs.style || "").includes("inline")) {
      if (i - j >= 5) {
        nodes.splice(j + 1, i - j, {
          name: "div",
          attrs: {},
          children: nodes.slice(j + 1, i + 1)
        });
      }
      i = j - 1;
    }
  }
}
function Parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.imgList._unloadimgs = 0;
  this.plugins = vm.plugins || [];
  this.attrs = /* @__PURE__ */ Object.create(null);
  this.stack = [];
  this.nodes = [];
  this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
}
Parser.prototype.parse = function(content) {
  for (let i = this.plugins.length; i--; ) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, config) || content;
    }
  }
  new Lexer(this).parse(content);
  while (this.stack.length) {
    this.popNode();
  }
  if (this.nodes.length > 50) {
    mergeNodes(this.nodes);
  }
  return this.nodes;
};
Parser.prototype.expose = function() {
  for (let i = this.stack.length; i--; ) {
    const item = this.stack[i];
    if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
      return;
    item.c = 1;
  }
};
Parser.prototype.hook = function(node2) {
  for (let i = this.plugins.length; i--; ) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node2, this) === false) {
      return false;
    }
  }
  return true;
};
Parser.prototype.getUrl = function(url) {
  const domain = this.options.domain;
  if (url[0] === "/") {
    if (url[1] === "/") {
      url = (domain ? domain.split("://")[0] : "http") + ":" + url;
    } else if (domain) {
      url = domain + url;
    }
  } else if (!url.includes("data:") && !url.includes("://")) {
    if (domain) {
      url = domain + "/" + url;
    }
  }
  return url;
};
Parser.prototype.parseStyle = function(node2) {
  const attrs = node2.attrs;
  const list = (this.tagStyle[node2.name] || "").split(";").concat((attrs.style || "").split(";"));
  const styleObj = {};
  let tmp = "";
  if (attrs.id && !this.xml) {
    if (this.options.useAnchor) {
      this.expose();
    } else if (node2.name !== "img" && node2.name !== "a" && node2.name !== "video" && node2.name !== "audio") {
      attrs.id = void 0;
    }
  }
  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
    attrs.width = void 0;
  }
  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
    attrs.height = void 0;
  }
  for (let i = 0, len = list.length; i < len; i++) {
    const info = list[i].split(":");
    if (info.length < 2)
      continue;
    const key = info.shift().trim().toLowerCase();
    let value = info.join(":").trim();
    if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
      tmp += `;${key}:${value}`;
    } else if (!styleObj[key] || value.includes("import") || !styleObj[key].includes("import")) {
      if (value.includes("url")) {
        let j = value.indexOf("(") + 1;
        if (j) {
          while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      } else if (value.includes("rpx")) {
        value = value.replace(/[0-9.]+\s*rpx/g, ($) => parseFloat($) * windowWidth / 750 + "px");
      }
      styleObj[key] = value;
    }
  }
  node2.attrs.style = tmp;
  return styleObj;
};
Parser.prototype.onTagName = function(name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName === "svg") {
    this.xml = (this.xml || 0) + 1;
  }
};
Parser.prototype.onAttrName = function(name) {
  name = this.xml ? name : name.toLowerCase();
  if (name.substr(0, 5) === "data-") {
    if (name === "data-src" && !this.attrs.src) {
      this.attrName = "src";
    } else if (this.tagName === "img" || this.tagName === "a") {
      this.attrName = name;
    } else {
      this.attrName = void 0;
    }
  } else {
    this.attrName = name;
    this.attrs[name] = "T";
  }
};
Parser.prototype.onAttrVal = function(val) {
  const name = this.attrName || "";
  if (name === "style" || name === "href") {
    this.attrs[name] = decodeEntity(val, true);
  } else if (name.includes("src")) {
    this.attrs[name] = this.getUrl(decodeEntity(val, true));
  } else if (name) {
    this.attrs[name] = val;
  }
};
Parser.prototype.onOpenTag = function(selfClose) {
  const node2 = /* @__PURE__ */ Object.create(null);
  node2.name = this.tagName;
  node2.attrs = this.attrs;
  if (this.options.nodes.length) {
    node2.type = "node";
  }
  this.attrs = /* @__PURE__ */ Object.create(null);
  const attrs = node2.attrs;
  const parent = this.stack[this.stack.length - 1];
  const siblings = parent ? parent.children : this.nodes;
  const close = this.xml ? selfClose : config.voidTags[node2.name];
  if (tagSelector[node2.name]) {
    attrs.class = tagSelector[node2.name] + (attrs.class ? " " + attrs.class : "");
  }
  if (node2.name === "embed") {
    this.expose();
  }
  if (node2.name === "video" || node2.name === "audio") {
    if (node2.name === "video" && !attrs.id) {
      attrs.id = "v" + idIndex++;
    }
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = "T";
    }
    node2.src = [];
    if (attrs.src) {
      node2.src.push(attrs.src);
      attrs.src = void 0;
    }
    this.expose();
  }
  if (close) {
    if (!this.hook(node2) || config.ignoreTags[node2.name]) {
      if (node2.name === "base" && !this.options.domain) {
        this.options.domain = attrs.href;
      } else if (node2.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
        parent.src.push(attrs.src);
      }
      return;
    }
    const styleObj = this.parseStyle(node2);
    if (node2.name === "img") {
      if (attrs.src) {
        if (attrs.src.includes("webp")) {
          node2.webp = "T";
        }
        if (attrs.src.includes("data:") && !attrs["original-src"]) {
          attrs.ignore = "T";
        }
        if (!attrs.ignore || node2.webp || attrs.src.includes("cloud://")) {
          for (let i = this.stack.length; i--; ) {
            const item = this.stack[i];
            if (item.name === "a") {
              node2.a = item.attrs;
            }
            if (item.name === "table" && !node2.webp && !attrs.src.includes("cloud://")) {
              if (!styleObj.display || styleObj.display.includes("inline")) {
                node2.t = "inline-block";
              } else {
                node2.t = styleObj.display;
              }
              styleObj.display = void 0;
            }
            item.c = 1;
          }
          attrs.i = this.imgList.length.toString();
          let src = attrs["original-src"] || attrs.src;
          this.imgList.push(src);
          if (!node2.t) {
            this.imgList._unloadimgs += 1;
          }
          if (this.options.lazyLoad) {
            attrs["data-src"] = attrs.src;
            attrs.src = void 0;
          }
        }
      }
      if (styleObj.display === "inline") {
        styleObj.display = "";
      }
      if (attrs.ignore) {
        styleObj["max-width"] = styleObj["max-width"] || "100%";
        attrs.style += ";-webkit-touch-callout:none";
      }
      if (parseInt(styleObj.width) > windowWidth) {
        styleObj.height = void 0;
      }
      if (!isNaN(parseInt(styleObj.width))) {
        node2.w = "T";
      }
      if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
        node2.h = "T";
      }
    } else if (node2.name === "svg") {
      siblings.push(node2);
      this.stack.push(node2);
      this.popNode();
      return;
    }
    for (const key in styleObj) {
      if (styleObj[key]) {
        attrs.style += `;${key}:${styleObj[key].replace(" !important", "")}`;
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
  } else {
    if ((node2.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
      this.pre = node2.pre = 1;
    }
    node2.children = [];
    this.stack.push(node2);
  }
  siblings.push(node2);
};
Parser.prototype.onCloseTag = function(name) {
  name = this.xml ? name : name.toLowerCase();
  let i;
  for (i = this.stack.length; i--; ) {
    if (this.stack[i].name === name)
      break;
  }
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name === "p" || name === "br") {
    const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name,
      attrs: {
        class: tagSelector[name] || "",
        style: this.tagStyle[name] || ""
      }
    });
  }
};
Parser.prototype.popNode = function() {
  const node2 = this.stack.pop();
  let attrs = node2.attrs;
  const children = node2.children;
  const parent = this.stack[this.stack.length - 1];
  const siblings = parent ? parent.children : this.nodes;
  if (!this.hook(node2) || config.ignoreTags[node2.name]) {
    if (node2.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
      setNavigationBarTitle({
        title: children[0].text
      });
    }
    siblings.pop();
    return;
  }
  if (node2.pre && this.pre !== 2) {
    this.pre = node2.pre = void 0;
    for (let i = this.stack.length; i--; ) {
      if (this.stack[i].pre) {
        this.pre = 1;
      }
    }
  }
  const styleObj = {};
  if (node2.name === "svg") {
    if (this.xml > 1) {
      this.xml--;
      return;
    }
    let src = "";
    const style = attrs.style;
    attrs.style = "";
    attrs.xmlns = "http://www.w3.org/2000/svg";
    (function traversal(node3) {
      if (node3.type === "text") {
        src += node3.text;
        return;
      }
      const name = config.svgDict[node3.name] || node3.name;
      src += "<" + name;
      for (const item in node3.attrs) {
        const val = node3.attrs[item];
        if (val) {
          src += ` ${config.svgDict[item] || item}="${val}"`;
        }
      }
      if (!node3.children) {
        src += "/>";
      } else {
        src += ">";
        for (let i = 0; i < node3.children.length; i++) {
          traversal(node3.children[i]);
        }
        src += "</" + name + ">";
      }
    })(node2);
    node2.name = "img";
    node2.attrs = {
      src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
      style,
      ignore: "T"
    };
    node2.children = void 0;
    this.xml = false;
    return;
  }
  if (attrs.align) {
    if (node2.name === "table") {
      if (attrs.align === "center") {
        styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
      } else {
        styleObj.float = attrs.align;
      }
    } else {
      styleObj["text-align"] = attrs.align;
    }
    attrs.align = void 0;
  }
  if (attrs.dir) {
    styleObj.direction = attrs.dir;
    attrs.dir = void 0;
  }
  if (node2.name === "font") {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = void 0;
    }
    if (attrs.face) {
      styleObj["font-family"] = attrs.face;
      attrs.face = void 0;
    }
    if (attrs.size) {
      let size = parseInt(attrs.size);
      if (!isNaN(size)) {
        if (size < 1) {
          size = 1;
        } else if (size > 7) {
          size = 7;
        }
        styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size - 1];
      }
      attrs.size = void 0;
    }
  }
  if ((attrs.class || "").includes("align-center")) {
    styleObj["text-align"] = "center";
  }
  Object.assign(styleObj, this.parseStyle(node2));
  if (node2.name !== "table" && parseInt(styleObj.width) > windowWidth) {
    styleObj["max-width"] = "100%";
    styleObj["box-sizing"] = "border-box";
  }
  if (config.blockTags[node2.name]) {
    node2.name = "div";
  } else if (!config.trustTags[node2.name] && !this.xml) {
    node2.name = "span";
  }
  if (node2.name === "a" || node2.name === "ad" || node2.name === "iframe") {
    this.expose();
  } else if (node2.name === "video") {
    if ((styleObj.height || "").includes("auto")) {
      styleObj.height = void 0;
    }
  } else if ((node2.name === "ul" || node2.name === "ol") && node2.c) {
    const types = {
      a: "lower-alpha",
      A: "upper-alpha",
      i: "lower-roman",
      I: "upper-roman"
    };
    if (types[attrs.type]) {
      attrs.style += ";list-style-type:" + types[attrs.type];
      attrs.type = void 0;
    }
    for (let i = children.length; i--; ) {
      if (children[i].name === "li") {
        children[i].c = 1;
      }
    }
  } else if (node2.name === "table") {
    let padding = parseFloat(attrs.cellpadding);
    let spacing = parseFloat(attrs.cellspacing);
    const border = parseFloat(attrs.border);
    const bordercolor = styleObj["border-color"];
    const borderstyle = styleObj["border-style"];
    if (node2.c) {
      if (isNaN(padding)) {
        padding = 2;
      }
      if (isNaN(spacing)) {
        spacing = 2;
      }
    }
    if (border) {
      attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
    }
    if (node2.flag && node2.c) {
      styleObj.display = "grid";
      if (spacing) {
        styleObj["grid-gap"] = spacing + "px";
        styleObj.padding = spacing + "px";
      } else if (border) {
        attrs.style += ";border-left:0;border-top:0";
      }
      const width = [];
      const trList = [];
      const cells = [];
      const map = {};
      (function traversal(nodes) {
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].name === "tr") {
            trList.push(nodes[i]);
          } else {
            traversal(nodes[i].children || []);
          }
        }
      })(children);
      for (let row = 1; row <= trList.length; row++) {
        let col = 1;
        for (let j = 0; j < trList[row - 1].children.length; j++) {
          const td = trList[row - 1].children[j];
          if (td.name === "td" || td.name === "th") {
            while (map[row + "." + col]) {
              col++;
            }
            let style = td.attrs.style || "";
            let start = style.indexOf("width") ? style.indexOf(";width") : 0;
            if (start !== -1) {
              let end = style.indexOf(";", start + 6);
              if (end === -1) {
                end = style.length;
              }
              if (!td.attrs.colspan) {
                width[col] = style.substring(start ? start + 7 : 6, end);
              }
              style = style.substr(0, start) + style.substr(end);
            }
            style += ";display:flex";
            start = style.indexOf("vertical-align");
            if (start !== -1) {
              const val = style.substr(start + 15, 10);
              if (val.includes("middle")) {
                style += ";align-items:center";
              } else if (val.includes("bottom")) {
                style += ";align-items:flex-end";
              }
            } else {
              style += ";align-items:center";
            }
            start = style.indexOf("text-align");
            if (start !== -1) {
              const val = style.substr(start + 11, 10);
              if (val.includes("center")) {
                style += ";justify-content: center";
              } else if (val.includes("right")) {
                style += ";justify-content: right";
              }
            }
            style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
            if (td.attrs.colspan) {
              style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
              if (!td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
              }
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
              if (!td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
              }
              for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                  map[row + rowspan + "." + (col - colspan)] = 1;
                }
              }
            }
            if (style) {
              td.attrs.style = style;
            }
            cells.push(td);
            col++;
          }
        }
        if (row === 1) {
          let temp = "";
          for (let i = 1; i < col; i++) {
            temp += (width[i] ? width[i] : "auto") + " ";
          }
          styleObj["grid-template-columns"] = temp;
        }
      }
      node2.children = cells;
    } else {
      if (node2.c) {
        styleObj.display = "table";
      }
      if (!isNaN(spacing)) {
        styleObj["border-spacing"] = spacing + "px";
      }
      if (border || padding) {
        (function traversal(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            const td = nodes[i];
            if (td.name === "th" || td.name === "td") {
              if (border) {
                td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
              }
              if (padding) {
                td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
              }
            } else if (td.children) {
              traversal(td.children);
            }
          }
        })(children);
      }
    }
    if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
      const table = Object.assign({}, node2);
      node2.name = "div";
      node2.attrs = {
        style: "overflow:auto"
      };
      node2.children = [table];
      attrs = table.attrs;
    }
  } else if ((node2.name === "td" || node2.name === "th") && (attrs.colspan || attrs.rowspan)) {
    for (let i = this.stack.length; i--; ) {
      if (this.stack[i].name === "table") {
        this.stack[i].flag = 1;
        break;
      }
    }
  } else if (node2.name === "ruby") {
    node2.name = "span";
    for (let i = 0; i < children.length - 1; i++) {
      if (children[i].type === "text" && children[i + 1].name === "rt") {
        children[i] = {
          name: "div",
          attrs: {
            style: "display:inline-block;text-align:center"
          },
          children: [{
            name: "div",
            attrs: {
              style: "font-size:50%;" + (children[i + 1].attrs.style || "")
            },
            children: children[i + 1].children
          }, children[i]]
        };
        children.splice(i + 1, 1);
      }
    }
  } else if (node2.c) {
    (function traversal(node3) {
      node3.c = 2;
      for (let i = node3.children.length; i--; ) {
        const child = node3.children[i];
        if (!child.c || child.name === "table") {
          node3.c = 1;
        }
      }
    })(node2);
  }
  if ((styleObj.display || "").includes("flex") && !node2.c) {
    for (let i = children.length; i--; ) {
      const item = children[i];
      if (item.f) {
        item.attrs.style = (item.attrs.style || "") + item.f;
        item.f = void 0;
      }
    }
  }
  const flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !node2.c;
  if (flex) {
    node2.f = ";max-width:100%";
  }
  if (children.length >= 50 && node2.c && !(styleObj.display || "").includes("flex")) {
    mergeNodes(children);
  }
  for (const key in styleObj) {
    if (styleObj[key]) {
      const val = `;${key}:${styleObj[key].replace(" !important", "")}`;
      if (flex && (key.includes("flex") && key !== "flex-direction" || key === "align-self" || key.includes("grid") || styleObj[key][0] === "-" || key.includes("width") && val.includes("%"))) {
        node2.f += val;
        if (key === "width") {
          attrs.style += ";width:100%";
        }
      } else {
        attrs.style += val;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || void 0;
};
Parser.prototype.onText = function(text) {
  if (!this.pre) {
    let trim = "";
    let flag;
    for (let i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) {
        trim += text[i];
      } else {
        if (trim[trim.length - 1] !== " ") {
          trim += " ";
        }
        if (text[i] === "\n" && !flag) {
          flag = true;
        }
      }
    }
    if (trim === " ") {
      if (flag)
        return;
      else {
        const parent = this.stack[this.stack.length - 1];
        if (parent && parent.name[0] === "t")
          return;
      }
    }
    text = trim;
  }
  const node2 = /* @__PURE__ */ Object.create(null);
  node2.type = "text";
  node2.text = decodeEntity(text);
  if (this.hook(node2)) {
    const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node2);
  }
};
function Lexer(handler) {
  this.handler = handler;
}
Lexer.prototype.parse = function(content) {
  this.content = content || "";
  this.i = 0;
  this.start = 0;
  this.state = this.text;
  for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
    this.state();
  }
};
Lexer.prototype.checkClose = function(method) {
  const selfClose = this.content[this.i] === "/";
  if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
    if (method) {
      this.handler[method](this.content.substring(this.start, this.i));
    }
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);
    if (this.handler.tagName === "script") {
      this.i = this.content.indexOf("</", this.i);
      if (this.i !== -1) {
        this.i += 2;
        this.start = this.i;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};
Lexer.prototype.text = function() {
  this.i = this.content.indexOf("<", this.i);
  if (this.i === -1) {
    if (this.start < this.content.length) {
      this.handler.onText(this.content.substring(this.start, this.content.length));
    }
    return;
  }
  const c = this.content[this.i + 1];
  if (c >= "a" && c <= "z" || c >= "A" && c <= "Z") {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c === "/" || c === "!" || c === "?") {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    const next = this.content[this.i + 2];
    if (c === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
      this.i += 2;
      this.start = this.i;
      this.state = this.endTag;
      return;
    }
    let end = "-->";
    if (c !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
      end = ">";
    }
    this.i = this.content.indexOf(end, this.i);
    if (this.i !== -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else {
    this.i++;
  }
};
Lexer.prototype.tagName = function() {
  if (blankChar[this.content[this.i]]) {
    this.handler.onTagName(this.content.substring(this.start, this.i));
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose("onTagName")) {
    this.i++;
  }
};
Lexer.prototype.attrName = function() {
  let c = this.content[this.i];
  if (blankChar[c] || c === "=") {
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    let needVal = c === "=";
    const len = this.content.length;
    while (++this.i < len) {
      c = this.content[this.i];
      if (!blankChar[c]) {
        if (this.checkClose())
          return;
        if (needVal) {
          this.start = this.i;
          this.state = this.attrVal;
          return;
        }
        if (this.content[this.i] === "=") {
          needVal = true;
        } else {
          this.start = this.i;
          this.state = this.attrName;
          return;
        }
      }
    }
  } else if (!this.checkClose("onAttrName")) {
    this.i++;
  }
};
Lexer.prototype.attrVal = function() {
  const c = this.content[this.i];
  const len = this.content.length;
  if (c === '"' || c === "'") {
    this.start = ++this.i;
    this.i = this.content.indexOf(c, this.i);
    if (this.i === -1)
      return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } else {
    for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose("onAttrVal"))
        return;
    }
  }
  while (blankChar[this.content[++this.i]])
    ;
  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};
Lexer.prototype.endTag = function() {
  const c = this.content[this.i];
  if (blankChar[c] || c === ">" || c === "/") {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));
    if (c !== ">") {
      this.i = this.content.indexOf(">", this.i);
      if (this.i === -1)
        return;
    }
    this.start = ++this.i;
    this.state = this.text;
  } else {
    this.i++;
  }
};
const uParse_vue_vue_type_style_index_0_scoped_401f3692_lang = "";
const plugins = [];
const _sfc_main = {
  name: "u-parse",
  data() {
    return {
      nodes: []
    };
  },
  props: {
    containerStyle: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    copyLink: {
      type: [Boolean, String],
      default: true
    },
    domain: String,
    errorImg: {
      type: String,
      default: ""
    },
    lazyLoad: {
      type: [Boolean, String],
      default: false
    },
    loadingImg: {
      type: String,
      default: ""
    },
    pauseVideo: {
      type: [Boolean, String],
      default: true
    },
    previewImg: {
      type: [Boolean, String],
      default: true
    },
    scrollTable: [Boolean, String],
    selectable: [Boolean, String],
    setTitle: {
      type: [Boolean, String],
      default: true
    },
    showImgMenu: {
      type: [Boolean, String],
      default: true
    },
    tagStyle: Object,
    useAnchor: [Boolean, Number]
  },
  emits: ["load", "ready", "imgTap", "linkTap", "play", "error"],
  components: {
    node
  },
  watch: {
    content(content) {
      this.setContent(content);
    }
  },
  created() {
    this.plugins = [];
    for (let i = plugins.length; i--; ) {
      this.plugins.push(new plugins[i](this));
    }
  },
  mounted() {
    if (this.content && !this.nodes.length) {
      this.setContent(this.content);
    }
  },
  beforeUnmount() {
    this._hook("onDetached");
  },
  methods: {
    /**
     * @description 将锚点跳转的范围限定在一个 scroll-view 内
     * @param {Object} page scroll-view 所在页面的示例
     * @param {String} selector scroll-view 的选择器
     * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名
     */
    in(page, selector, scrollTop) {
      if (page && selector && scrollTop) {
        this._in = {
          page,
          selector,
          scrollTop
        };
      }
    },
    /**
     * @description 锚点跳转
     * @param {String} id 要跳转的锚点 id
     * @param {Number} offset 跳转位置的偏移量
     * @returns {Promise}
     */
    navigateTo(id, offset) {
      return new Promise((resolve, reject) => {
        if (!this.useAnchor) {
          reject(Error("Anchor is disabled"));
          return;
        }
        offset = offset || parseInt(this.useAnchor) || 0;
        let deep = " ";
        const selector = createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
        if (this._in) {
          selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
        } else {
          selector.selectViewport().scrollOffset();
        }
        selector.exec((res) => {
          if (!res[0]) {
            reject(Error("Label not found"));
            return;
          }
          const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
          if (this._in) {
            this._in.page[this._in.scrollTop] = scrollTop;
          } else {
            pageScrollTo({
              scrollTop,
              duration: 300
            });
          }
          resolve();
        });
      });
    },
    /**
     * @description 获取文本内容
     * @return {String}
     */
    getText(nodes) {
      let text = "";
      (function traversal(nodes2) {
        for (let i = 0; i < nodes2.length; i++) {
          const node2 = nodes2[i];
          if (node2.type === "text") {
            text += node2.text.replace(/&amp;/g, "&");
          } else if (node2.name === "br") {
            text += "\n";
          } else {
            const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
            if (isBlock && text && text[text.length - 1] !== "\n") {
              text += "\n";
            }
            if (node2.children) {
              traversal(node2.children);
            }
            if (isBlock && text[text.length - 1] !== "\n") {
              text += "\n";
            } else if (node2.name === "td" || node2.name === "th") {
              text += "	";
            }
          }
        }
      })(nodes || this.nodes);
      return text;
    },
    /**
     * @description 获取内容大小和位置
     * @return {Promise}
     */
    getRect() {
      return new Promise((resolve, reject) => {
        createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
      });
    },
    /**
     * @description 暂停播放媒体
     */
    pauseMedia() {
      for (let i = (this._videos || []).length; i--; ) {
        this._videos[i].pause();
      }
    },
    /**
     * @description 设置媒体播放速率
     * @param {Number} rate 播放速率
     */
    setPlaybackRate(rate) {
      this.playbackRate = rate;
      for (let i = (this._videos || []).length; i--; ) {
        this._videos[i].playbackRate(rate);
      }
    },
    /**
     * @description 设置内容
     * @param {String} content html 内容
     * @param {Boolean} append 是否在尾部追加
     */
    setContent(content, append) {
      if (!append || !this.imgList) {
        this.imgList = [];
      }
      const nodes = new Parser(this).parse(content);
      this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
      this._videos = [];
      this.$nextTick(() => {
        this._hook("onLoad");
        this.$emit("load");
      });
      if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
        let height = 0;
        const callback = (rect) => {
          if (!rect || !rect.height)
            rect = {};
          if (rect.height === height) {
            this.$emit("ready", rect);
          } else {
            height = rect.height;
            setTimeout(() => {
              this.getRect().then(callback).catch(callback);
            }, 350);
          }
        };
        this.getRect().then(callback).catch(callback);
      } else {
        if (!this.imgList._unloadimgs) {
          this.getRect().then((rect) => {
            this.$emit("ready", rect);
          }).catch(() => {
            this.$emit("ready", {});
          });
        }
      }
    },
    /**
     * @description 调用插件钩子函数
     */
    _hook(name) {
      for (let i = plugins.length; i--; ) {
        if (this.plugins[i][name]) {
          this.plugins[i][name]();
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = resolveComponent("node");
  const _component_v_uni_view = index$g;
  return openBlock(), createBlock(_component_v_uni_view, {
    id: "_root",
    class: normalizeClass(($props.selectable ? "_select " : "") + "_root"),
    style: normalizeStyle($props.containerStyle)
  }, {
    default: withCtx(() => [
      !$data.nodes[0] ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createBlock(_component_node, {
        key: 1,
        childs: $data.nodes,
        opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable],
        name: "span"
      }, null, 8, ["childs", "opts"]))
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-401f3692"]]);
export {
  __easycom_1 as _
};
