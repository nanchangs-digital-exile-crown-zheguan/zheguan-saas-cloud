import { defineComponent as wt, openBlock as R, createElementBlock as U, createElementVNode as T, createCommentVNode as fe, unref as M, normalizeClass as Qe, toDisplayString as P, ref as oe, shallowRef as Hn, computed as Y, watch as It, Fragment as me, renderList as He, createBlock as be, normalizeStyle as Pn, createVNode as W, renderSlot as fn, reactive as Jn, nextTick as gn, onBeforeUnmount as Ho, resolveComponent as je, resolveDirective as Ko, isRef as qn, withCtx as X, createTextVNode as Ee, Transition as Vn, withDirectives as Go, pushScopeId as Qo, popScopeId as Zo } from "vue";
import { cG as Wo, k as Yo, i as Jo, cH as qo, cI as Vo, n as Xn, cJ as Xo, cK as $o, cL as er, a as tr } from "./core-shared-86a0da16.js";
import { ElMessage as nr } from "element-plus";
import { Files as $n, InfoFilled as or, WarningFilled as eo, Search as rr, CircleCheckFilled as to, DocumentCopy as ar, Right as ir } from "@element-plus/icons-vue";
import lr from "./index-cbeed3e7.js";
import "axios";
import "vue-i18n";
import "pinia";
import "vue-router";
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".code-diff-view[theme=light] pre code.hljs{display:block;overflow-x:auto;padding:1em}.code-diff-view[theme=light] code.hljs{padding:3px 5px}.code-diff-view[theme=light] .hljs{color:#24292e;background:#fff}.code-diff-view[theme=light] .hljs-doctag,.code-diff-view[theme=light] .hljs-keyword,.code-diff-view[theme=light] .hljs-meta .hljs-keyword,.code-diff-view[theme=light] .hljs-template-tag,.code-diff-view[theme=light] .hljs-template-variable,.code-diff-view[theme=light] .hljs-type,.code-diff-view[theme=light] .hljs-variable.language_{color:#d73a49}.code-diff-view[theme=light] .hljs-title,.code-diff-view[theme=light] .hljs-title.class_,.code-diff-view[theme=light] .hljs-title.class_.inherited__,.code-diff-view[theme=light] .hljs-title.function_{color:#6f42c1}.code-diff-view[theme=light] .hljs-attr,.code-diff-view[theme=light] .hljs-attribute,.code-diff-view[theme=light] .hljs-literal,.code-diff-view[theme=light] .hljs-meta,.code-diff-view[theme=light] .hljs-number,.code-diff-view[theme=light] .hljs-operator,.code-diff-view[theme=light] .hljs-variable,.code-diff-view[theme=light] .hljs-selector-attr,.code-diff-view[theme=light] .hljs-selector-class,.code-diff-view[theme=light] .hljs-selector-id{color:#005cc5}.code-diff-view[theme=light] .hljs-regexp,.code-diff-view[theme=light] .hljs-string,.code-diff-view[theme=light] .hljs-meta .hljs-string{color:#032f62}.code-diff-view[theme=light] .hljs-built_in,.code-diff-view[theme=light] .hljs-symbol{color:#e36209}.code-diff-view[theme=light] .hljs-comment,.code-diff-view[theme=light] .hljs-code,.code-diff-view[theme=light] .hljs-formula{color:#6a737d}.code-diff-view[theme=light] .hljs-name,.code-diff-view[theme=light] .hljs-quote,.code-diff-view[theme=light] .hljs-selector-tag,.code-diff-view[theme=light] .hljs-selector-pseudo{color:#22863a}.code-diff-view[theme=light] .hljs-subst{color:#24292e}.code-diff-view[theme=light] .hljs-section{color:#005cc5;font-weight:700}.code-diff-view[theme=light] .hljs-bullet{color:#735c0f}.code-diff-view[theme=light] .hljs-emphasis{color:#24292e;font-style:italic}.code-diff-view[theme=light] .hljs-strong{color:#24292e;font-weight:700}.code-diff-view[theme=light] .hljs-addition{color:#22863a;background-color:#f0fff4}.code-diff-view[theme=light] .hljs-deletion{color:#b31d28;background-color:#ffeef0}.code-diff-view[theme=light]{color:var(--fgColor-default, var(--color-fg-default));background-color:var(--bgColor-default, var(--color-canvas-default));--color-canvas-default-transparent: rgba(255,255,255,0);--color-page-header-bg: #f6f8fa;--color-marketing-icon-primary: #218bff;--color-marketing-icon-secondary: #54aeff;--color-diff-blob-addition-num-text: #1F2328;--color-diff-blob-addition-fg: #1F2328;--color-diff-blob-addition-num-bg: #ccffd8;--color-diff-blob-addition-line-bg: #e6ffec;--color-diff-blob-addition-word-bg: #abf2bc;--color-diff-blob-deletion-num-text: #1F2328;--color-diff-blob-deletion-fg: #1F2328;--color-diff-blob-deletion-num-bg: #ffd7d5;--color-diff-blob-deletion-line-bg: #ffebe9;--color-diff-blob-deletion-word-bg: rgba(255,129,130,.4);--color-diff-blob-hunk-num-bg: rgba(84,174,255,.4);--color-diff-blob-expander-icon: #656d76;--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;--color-diffstat-deletion-border: rgba(31,35,40,.15);--color-diffstat-addition-border: rgba(31,35,40,.15);--color-diffstat-addition-bg: #1f883d;--color-search-keyword-hl: #fff8c5;--color-prettylights-syntax-comment: #6e7781;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-entity: #6639ba;--color-prettylights-syntax-storage-modifier-import: #24292f;--color-prettylights-syntax-entity-tag: #116329;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #24292f;--color-prettylights-syntax-markup-bold: #24292f;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #ffebe9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #eaeef2;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-brackethighlighter-angle: #57606a;--color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-codemirror-text: #1F2328;--color-codemirror-bg: #ffffff;--color-codemirror-gutters-bg: #ffffff;--color-codemirror-guttermarker-text: #ffffff;--color-codemirror-guttermarker-subtle-text: #6e7781;--color-codemirror-linenumber-text: #656d76;--color-codemirror-cursor: #1F2328;--color-codemirror-selection-bg: rgba(84,174,255,.4);--color-codemirror-activeline-bg: rgba(234,238,242,.5);--color-codemirror-matchingbracket-text: #1F2328;--color-codemirror-lines-bg: #ffffff;--color-codemirror-syntax-comment: #24292f;--color-codemirror-syntax-constant: #0550ae;--color-codemirror-syntax-entity: #8250df;--color-codemirror-syntax-keyword: #cf222e;--color-codemirror-syntax-storage: #cf222e;--color-codemirror-syntax-string: #0a3069;--color-codemirror-syntax-support: #0550ae;--color-codemirror-syntax-variable: #953800;--color-checks-bg: #24292f;--color-checks-run-border-width: 0px;--color-checks-container-border-width: 0px;--color-checks-text-primary: #f6f8fa;--color-checks-text-secondary: #8c959f;--color-checks-text-link: #54aeff;--color-checks-btn-icon: #afb8c1;--color-checks-btn-hover-icon: #f6f8fa;--color-checks-btn-hover-bg: rgba(255,255,255,.125);--color-checks-input-text: #eaeef2;--color-checks-input-placeholder-text: #8c959f;--color-checks-input-focus-text: #8c959f;--color-checks-input-bg: #32383f;--color-checks-input-shadow: none;--color-checks-donut-error: #fa4549;--color-checks-donut-pending: #bf8700;--color-checks-donut-success: #1f883d;--color-checks-donut-neutral: #afb8c1;--color-checks-dropdown-text: #afb8c1;--color-checks-dropdown-bg: #32383f;--color-checks-dropdown-border: #424a53;--color-checks-dropdown-shadow: rgba(31,35,40,.3);--color-checks-dropdown-hover-text: #f6f8fa;--color-checks-dropdown-hover-bg: #424a53;--color-checks-dropdown-btn-hover-text: #f6f8fa;--color-checks-dropdown-btn-hover-bg: #32383f;--color-checks-scrollbar-thumb-bg: #57606a;--color-checks-header-label-text: #d0d7de;--color-checks-header-label-open-text: #f6f8fa;--color-checks-header-border: #32383f;--color-checks-header-icon: #8c959f;--color-checks-line-text: #d0d7de;--color-checks-line-num-text: rgba(140,149,159,.75);--color-checks-line-timestamp-text: #8c959f;--color-checks-line-hover-bg: #32383f;--color-checks-line-selected-bg: rgba(33,139,255,.15);--color-checks-line-selected-num-text: #54aeff;--color-checks-line-dt-fm-text: #24292f;--color-checks-line-dt-fm-bg: #9a6700;--color-checks-gate-bg: rgba(125,78,0,.15);--color-checks-gate-text: #d0d7de;--color-checks-gate-waiting-text: #d4a72c;--color-checks-step-header-open-bg: #32383f;--color-checks-step-error-text: #ff8182;--color-checks-step-warning-text: #d4a72c;--color-checks-logline-text: #8c959f;--color-checks-logline-num-text: rgba(140,149,159,.75);--color-checks-logline-debug-text: #c297ff;--color-checks-logline-error-text: #d0d7de;--color-checks-logline-error-num-text: #ff8182;--color-checks-logline-error-bg: rgba(164,14,38,.15);--color-checks-logline-warning-text: #d0d7de;--color-checks-logline-warning-num-text: #d4a72c;--color-checks-logline-warning-bg: rgba(125,78,0,.15);--color-checks-logline-command-text: #54aeff;--color-checks-logline-section-text: #4ac26b;--color-checks-ansi-black: #24292f;--color-checks-ansi-black-bright: #32383f;--color-checks-ansi-white: #d0d7de;--color-checks-ansi-white-bright: #d0d7de;--color-checks-ansi-gray: #8c959f;--color-checks-ansi-red: #ff8182;--color-checks-ansi-red-bright: #ffaba8;--color-checks-ansi-green: #4ac26b;--color-checks-ansi-green-bright: #6fdd8b;--color-checks-ansi-yellow: #d4a72c;--color-checks-ansi-yellow-bright: #eac54f;--color-checks-ansi-blue: #54aeff;--color-checks-ansi-blue-bright: #80ccff;--color-checks-ansi-magenta: #c297ff;--color-checks-ansi-magenta-bright: #d8b9ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #24292f;--color-project-sidebar-bg: #ffffff;--color-project-gradient-in: #ffffff;--color-project-gradient-out: rgba(255,255,255,0);--color-mktg-btn-bg: #1b1f23;--color-mktg-btn-shadow-outline: rgb(0 0 0 / 15%) 0 0 0 1px inset;--color-mktg-btn-shadow-focus: rgb(0 0 0 / 15%) 0 0 0 4px;--color-mktg-btn-shadow-hover: 0 3px 2px rgba(0, 0, 0, .07), 0 7px 5px rgba(0, 0, 0, .04), 0 12px 10px rgba(0, 0, 0, .03), 0 22px 18px rgba(0, 0, 0, .03), 0 42px 33px rgba(0, 0, 0, .02), 0 100px 80px rgba(0, 0, 0, .02);--color-mktg-btn-shadow-hover-muted: rgb(0 0 0 / 70%) 0 0 0 2px inset;--color-control-border-color-emphasis: #858F99;--color-avatar-bg: #ffffff;--color-avatar-border: rgba(31,35,40,.15);--color-avatar-stack-fade: #afb8c1;--color-avatar-stack-fade-more: #d0d7de;--color-avatar-child-shadow: 0 0 0 2px rgba(255,255,255,.8);--color-topic-tag-border: rgba(0,0,0,0);--color-counter-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: rgba(0,0,0,0);--color-select-menu-tap-highlight: rgba(175,184,193,.5);--color-select-menu-tap-focus-bg: #b6e3ff;--color-overlay-shadow: 0 1px 3px rgba(31,35,40,.12), 0 8px 24px rgba(66,74,83,.12);--color-overlay-backdrop: rgba(140,149,159,.2);--color-header-text: rgba(255,255,255,.7);--color-header-bg: #24292f;--color-header-divider: #57606a;--color-header-logo: #ffffff;--color-header-search-bg: #24292f;--color-header-search-border: #57606a;--color-sidenav-selected-bg: #ffffff;--color-menu-bg-active: rgba(0,0,0,0);--color-input-disabled-bg: rgba(175,184,193,.2);--color-timeline-badge-bg: #eaeef2;--color-ansi-black: #24292f;--color-ansi-black-bright: #57606a;--color-ansi-white: #6e7781;--color-ansi-white-bright: #8c959f;--color-ansi-gray: #6e7781;--color-ansi-red: #cf222e;--color-ansi-red-bright: #a40e26;--color-ansi-green: #116329;--color-ansi-green-bright: #1a7f37;--color-ansi-yellow: #4d2d00;--color-ansi-yellow-bright: #633c01;--color-ansi-blue: #0969da;--color-ansi-blue-bright: #218bff;--color-ansi-magenta: #8250df;--color-ansi-magenta-bright: #a475f9;--color-ansi-cyan: #1b7c83;--color-ansi-cyan-bright: #3192aa;--color-btn-text: #24292f;--color-btn-bg: #f6f8fa;--color-btn-border: rgba(31,35,40,.15);--color-btn-shadow: 0 1px 0 rgba(31,35,40,.04);--color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,.25);--color-btn-hover-bg: #f3f4f6;--color-btn-hover-border: rgba(31,35,40,.15);--color-btn-active-bg: hsla(220,14%,93%,1);--color-btn-active-border: rgba(31,35,40,.15);--color-btn-selected-bg: hsla(220,14%,94%,1);--color-btn-counter-bg: rgba(31,35,40,.08);--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #1f883d;--color-btn-primary-border: rgba(31,35,40,.15);--color-btn-primary-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-primary-hover-bg: #1a7f37;--color-btn-primary-hover-border: rgba(31,35,40,.15);--color-btn-primary-selected-bg: hsla(137,66%,28%,1);--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(0,45,17,.2);--color-btn-primary-disabled-text: rgba(255,255,255,.8);--color-btn-primary-disabled-bg: #94d3a2;--color-btn-primary-disabled-border: rgba(31,35,40,.15);--color-btn-primary-icon: rgba(255,255,255,.8);--color-btn-primary-counter-bg: rgba(0,45,17,.2);--color-btn-outline-text: #0969da;--color-btn-outline-hover-text: #ffffff;--color-btn-outline-hover-bg: #0969da;--color-btn-outline-hover-border: rgba(31,35,40,.15);--color-btn-outline-hover-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-outline-hover-counter-bg: rgba(255,255,255,.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: hsla(212,92%,42%,1);--color-btn-outline-selected-border: rgba(31,35,40,.15);--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(0,33,85,.2);--color-btn-outline-disabled-text: rgba(9,105,218,.5);--color-btn-outline-disabled-bg: #f6f8fa;--color-btn-outline-disabled-counter-bg: rgba(9,105,218,.05);--color-btn-outline-counter-bg: #0969da1a;--color-btn-outline-counter-fg: #0550ae;--color-btn-outline-hover-counter-fg: #ffffff;--color-btn-outline-disabled-counter-fg: rgba(9,105,218,.5);--color-btn-danger-text: #cf222e;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #a40e26;--color-btn-danger-hover-border: rgba(31,35,40,.15);--color-btn-danger-hover-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-danger-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: hsla(356,72%,44%,1);--color-btn-danger-selected-border: rgba(31,35,40,.15);--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(76,0,20,.2);--color-btn-danger-disabled-text: rgba(207,34,46,.5);--color-btn-danger-disabled-bg: #f6f8fa;--color-btn-danger-disabled-counter-bg: rgba(207,34,46,.05);--color-btn-danger-counter-bg: rgba(207,34,46,.1);--color-btn-danger-icon: #cf222e;--color-btn-danger-hover-icon: #ffffff;--color-btn-danger-counter-fg: #a40e26;--color-btn-danger-hover-counter-fg: #ffffff;--color-btn-danger-disabled-counter-fg: rgba(207,34,46,.5);--color-underlinenav-icon: #6e7781;--color-underlinenav-border-hover: rgba(175,184,193,.2);--color-action-list-item-inline-divider: rgba(208,215,222,.48);--color-action-list-item-default-hover-bg: rgba(208,215,222,.32);--color-action-list-item-default-hover-border: rgba(0,0,0,0);--color-action-list-item-default-active-bg: rgba(208,215,222,.48);--color-action-list-item-default-active-border: rgba(0,0,0,0);--color-action-list-item-default-selected-bg: rgba(208,215,222,.24);--color-action-list-item-danger-hover-bg: rgba(255,235,233,.64);--color-action-list-item-danger-active-bg: #ffebe9;--color-action-list-item-danger-hover-text: #d1242f;--color-switch-track-bg: #eaeef2;--color-switch-track-hover-bg: hsla(210,24%,90%,1);--color-switch-track-active-bg: hsla(210,24%,88%,1);--color-switch-track-disabled-bg: #8c959f;--color-switch-track-fg: #656d76;--color-switch-track-disabled-fg: #ffffff;--color-switch-track-border: rgba(0,0,0,0);--color-switch-track-checked-bg: #0969da;--color-switch-track-checked-hover-bg: #0860CA;--color-switch-track-checked-active-bg: #0757BA;--color-switch-track-checked-fg: #ffffff;--color-switch-track-checked-disabled-fg: #ffffff;--color-switch-track-checked-border: rgba(0,0,0,0);--color-switch-knob-bg: #ffffff;--color-switch-knob-disabled-bg: #f6f8fa;--color-switch-knob-border: #858F99;--color-switch-knob-checked-bg: #ffffff;--color-switch-knob-checked-disabled-bg: #f6f8fa;--color-switch-knob-checked-border: #0969da;--color-segmented-control-bg: #eaeef2;--color-segmented-control-button-bg: #ffffff;--color-segmented-control-button-hover-bg: rgba(175,184,193,.2);--color-segmented-control-button-active-bg: rgba(175,184,193,.4);--color-segmented-control-button-selected-border: #8c959f;--color-tree-view-item-chevron-hover-bg: rgba(208,215,222,.32);--color-tree-view-item-directory-fill: #54aeff;--color-fg-default: #1F2328;--color-fg-muted: #656d76;--color-fg-subtle: #6e7781;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #ffffff;--color-canvas-overlay: #ffffff;--color-canvas-inset: #f6f8fa;--color-canvas-subtle: #f6f8fa;--color-border-default: #d0d7de;--color-border-muted: hsla(210,18%,87%,1);--color-border-subtle: rgba(31,35,40,.15);--color-shadow-small: 0 1px 0 rgba(31,35,40,.04);--color-shadow-medium: 0 3px 6px rgba(140,149,159,.15);--color-shadow-large: 0 8px 24px rgba(140,149,159,.2);--color-shadow-extra-large: 0 12px 28px rgba(140,149,159,.3);--color-neutral-emphasis-plus: #24292f;--color-neutral-emphasis: #6e7781;--color-neutral-muted: rgba(175,184,193,.2);--color-neutral-subtle: rgba(234,238,242,.5);--color-accent-fg: #0969da;--color-accent-emphasis: #0969da;--color-accent-muted: rgba(84,174,255,.4);--color-accent-subtle: #ddf4ff;--color-success-fg: #1a7f37;--color-success-emphasis: #1f883d;--color-success-muted: rgba(74,194,107,.4);--color-success-subtle: #dafbe1;--color-attention-fg: #9a6700;--color-attention-emphasis: #9a6700;--color-attention-muted: rgba(212,167,44,.4);--color-attention-subtle: #fff8c5;--color-severe-fg: #bc4c00;--color-severe-emphasis: #bc4c00;--color-severe-muted: rgba(251,143,68,.4);--color-severe-subtle: #fff1e5;--color-danger-fg: #d1242f;--color-danger-emphasis: #cf222e;--color-danger-muted: rgba(255,129,130,.4);--color-danger-subtle: #ffebe9;--color-open-fg: #1a7f37;--color-open-emphasis: #1f883d;--color-open-muted: rgba(74,194,107,.4);--color-open-subtle: #dafbe1;--color-closed-fg: #d1242f;--color-closed-emphasis: #cf222e;--color-closed-muted: rgba(255,129,130,.4);--color-closed-subtle: #ffebe9;--color-done-fg: #8250df;--color-done-emphasis: #8250df;--color-done-muted: rgba(194,151,255,.4);--color-done-subtle: #fbefff;--color-sponsors-fg: #bf3989;--color-sponsors-emphasis: #bf3989;--color-sponsors-muted: rgba(255,128,200,.4);--color-sponsors-subtle: #ffeff7;--color-primer-fg-disabled: #8c959f;--color-primer-canvas-backdrop: rgba(31,35,40,.5);--color-primer-canvas-sticky: rgba(255,255,255,.95);--color-primer-border-active: #fd8c73;--color-primer-border-contrast: rgba(31,35,40,.1);--color-primer-shadow-highlight: inset 0 1px 0 rgba(255,255,255,.25);--color-primer-shadow-inset: inset 0 1px 0 rgba(208,215,222,.2);--color-scale-black: #1F2328;--color-scale-white: #ffffff;--color-scale-gray-0: #f6f8fa;--color-scale-gray-1: #eaeef2;--color-scale-gray-2: #d0d7de;--color-scale-gray-3: #afb8c1;--color-scale-gray-4: #8c959f;--color-scale-gray-5: #6e7781;--color-scale-gray-6: #57606a;--color-scale-gray-7: #424a53;--color-scale-gray-8: #32383f;--color-scale-gray-9: #24292f;--color-scale-blue-0: #ddf4ff;--color-scale-blue-1: #b6e3ff;--color-scale-blue-2: #80ccff;--color-scale-blue-3: #54aeff;--color-scale-blue-4: #218bff;--color-scale-blue-5: #0969da;--color-scale-blue-6: #0550ae;--color-scale-blue-7: #033d8b;--color-scale-blue-8: #0a3069;--color-scale-blue-9: #002155;--color-scale-green-0: #dafbe1;--color-scale-green-1: #aceebb;--color-scale-green-2: #6fdd8b;--color-scale-green-3: #4ac26b;--color-scale-green-4: #2da44e;--color-scale-green-5: #1a7f37;--color-scale-green-6: #116329;--color-scale-green-7: #044f1e;--color-scale-green-8: #003d16;--color-scale-green-9: #002d11;--color-scale-yellow-0: #fff8c5;--color-scale-yellow-1: #fae17d;--color-scale-yellow-2: #eac54f;--color-scale-yellow-3: #d4a72c;--color-scale-yellow-4: #bf8700;--color-scale-yellow-5: #9a6700;--color-scale-yellow-6: #7d4e00;--color-scale-yellow-7: #633c01;--color-scale-yellow-8: #4d2d00;--color-scale-yellow-9: #3b2300;--color-scale-orange-0: #fff1e5;--color-scale-orange-1: #ffd8b5;--color-scale-orange-2: #ffb77c;--color-scale-orange-3: #fb8f44;--color-scale-orange-4: #e16f24;--color-scale-orange-5: #bc4c00;--color-scale-orange-6: #953800;--color-scale-orange-7: #762c00;--color-scale-orange-8: #5c2200;--color-scale-orange-9: #471700;--color-scale-red-0: #ffebe9;--color-scale-red-1: #ffcecb;--color-scale-red-2: #ffaba8;--color-scale-red-3: #ff8182;--color-scale-red-4: #fa4549;--color-scale-red-5: #cf222e;--color-scale-red-6: #a40e26;--color-scale-red-7: #82071e;--color-scale-red-8: #660018;--color-scale-red-9: #4c0014;--color-scale-purple-0: #fbefff;--color-scale-purple-1: #ecd8ff;--color-scale-purple-2: #d8b9ff;--color-scale-purple-3: #c297ff;--color-scale-purple-4: #a475f9;--color-scale-purple-5: #8250df;--color-scale-purple-6: #6639ba;--color-scale-purple-7: #512a97;--color-scale-purple-8: #3e1f79;--color-scale-purple-9: #2e1461;--color-scale-pink-0: #ffeff7;--color-scale-pink-1: #ffd3eb;--color-scale-pink-2: #ffadda;--color-scale-pink-3: #ff80c8;--color-scale-pink-4: #e85aad;--color-scale-pink-5: #bf3989;--color-scale-pink-6: #99286e;--color-scale-pink-7: #772057;--color-scale-pink-8: #611347;--color-scale-pink-9: #4d0336;--color-scale-coral-0: #fff0eb;--color-scale-coral-1: #ffd6cc;--color-scale-coral-2: #ffb4a1;--color-scale-coral-3: #fd8c73;--color-scale-coral-4: #ec6547;--color-scale-coral-5: #c4432b;--color-scale-coral-6: #9e2f1c;--color-scale-coral-7: #801f0f;--color-scale-coral-8: #691105;--color-scale-coral-9: #510901}.code-diff-view[theme=dark] pre code.hljs{display:block;overflow-x:auto;padding:1em}.code-diff-view[theme=dark] code.hljs{padding:3px 5px}.code-diff-view[theme=dark] .hljs{color:#c9d1d9;background:#0d1117}.code-diff-view[theme=dark] .hljs-doctag,.code-diff-view[theme=dark] .hljs-keyword,.code-diff-view[theme=dark] .hljs-meta .hljs-keyword,.code-diff-view[theme=dark] .hljs-template-tag,.code-diff-view[theme=dark] .hljs-template-variable,.code-diff-view[theme=dark] .hljs-type,.code-diff-view[theme=dark] .hljs-variable.language_{color:#ff7b72}.code-diff-view[theme=dark] .hljs-title,.code-diff-view[theme=dark] .hljs-title.class_,.code-diff-view[theme=dark] .hljs-title.class_.inherited__,.code-diff-view[theme=dark] .hljs-title.function_{color:#d2a8ff}.code-diff-view[theme=dark] .hljs-attr,.code-diff-view[theme=dark] .hljs-attribute,.code-diff-view[theme=dark] .hljs-literal,.code-diff-view[theme=dark] .hljs-meta,.code-diff-view[theme=dark] .hljs-number,.code-diff-view[theme=dark] .hljs-operator,.code-diff-view[theme=dark] .hljs-variable,.code-diff-view[theme=dark] .hljs-selector-attr,.code-diff-view[theme=dark] .hljs-selector-class,.code-diff-view[theme=dark] .hljs-selector-id{color:#79c0ff}.code-diff-view[theme=dark] .hljs-regexp,.code-diff-view[theme=dark] .hljs-string,.code-diff-view[theme=dark] .hljs-meta .hljs-string{color:#a5d6ff}.code-diff-view[theme=dark] .hljs-built_in,.code-diff-view[theme=dark] .hljs-symbol{color:#ffa657}.code-diff-view[theme=dark] .hljs-comment,.code-diff-view[theme=dark] .hljs-code,.code-diff-view[theme=dark] .hljs-formula{color:#8b949e}.code-diff-view[theme=dark] .hljs-name,.code-diff-view[theme=dark] .hljs-quote,.code-diff-view[theme=dark] .hljs-selector-tag,.code-diff-view[theme=dark] .hljs-selector-pseudo{color:#7ee787}.code-diff-view[theme=dark] .hljs-subst{color:#c9d1d9}.code-diff-view[theme=dark] .hljs-section{color:#1f6feb;font-weight:700}.code-diff-view[theme=dark] .hljs-bullet{color:#f2cc60}.code-diff-view[theme=dark] .hljs-emphasis{color:#c9d1d9;font-style:italic}.code-diff-view[theme=dark] .hljs-strong{color:#c9d1d9;font-weight:700}.code-diff-view[theme=dark] .hljs-addition{color:#aff5b4;background-color:#033a16}.code-diff-view[theme=dark] .hljs-deletion{color:#ffdcd7;background-color:#67060c}.code-diff-view[theme=dark]{color:var(--fgColor-default, var(--color-fg-default));background-color:var(--bgColor-default, var(--color-canvas-default));--color-canvas-default-transparent: rgba(13,17,23,0);--color-page-header-bg: #0d1117;--color-marketing-icon-primary: #79c0ff;--color-marketing-icon-secondary: #1f6feb;--color-diff-blob-addition-num-text: #e6edf3;--color-diff-blob-addition-fg: #e6edf3;--color-diff-blob-addition-num-bg: rgba(63,185,80,.3);--color-diff-blob-addition-line-bg: rgba(46,160,67,.15);--color-diff-blob-addition-word-bg: rgba(46,160,67,.4);--color-diff-blob-deletion-num-text: #e6edf3;--color-diff-blob-deletion-fg: #e6edf3;--color-diff-blob-deletion-num-bg: rgba(248,81,73,.3);--color-diff-blob-deletion-line-bg: rgba(248,81,73,.1);--color-diff-blob-deletion-word-bg: rgba(248,81,73,.4);--color-diff-blob-hunk-num-bg: rgba(56,139,253,.4);--color-diff-blob-expander-icon: #7d8590;--color-diff-blob-selected-line-highlight-mix-blend-mode: screen;--color-diffstat-deletion-border: rgba(240,246,252,.1);--color-diffstat-addition-border: rgba(240,246,252,.1);--color-diffstat-addition-bg: #3fb950;--color-search-keyword-hl: rgba(210,153,34,.4);--color-prettylights-syntax-comment: #8b949e;--color-prettylights-syntax-constant: #79c0ff;--color-prettylights-syntax-entity: #d2a8ff;--color-prettylights-syntax-storage-modifier-import: #c9d1d9;--color-prettylights-syntax-entity-tag: #7ee787;--color-prettylights-syntax-keyword: #ff7b72;--color-prettylights-syntax-string: #a5d6ff;--color-prettylights-syntax-variable: #ffa657;--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;--color-prettylights-syntax-invalid-illegal-bg: #8e1519;--color-prettylights-syntax-carriage-return-text: #f0f6fc;--color-prettylights-syntax-carriage-return-bg: #b62324;--color-prettylights-syntax-string-regexp: #7ee787;--color-prettylights-syntax-markup-list: #f2cc60;--color-prettylights-syntax-markup-heading: #1f6feb;--color-prettylights-syntax-markup-italic: #c9d1d9;--color-prettylights-syntax-markup-bold: #c9d1d9;--color-prettylights-syntax-markup-deleted-text: #ffdcd7;--color-prettylights-syntax-markup-deleted-bg: #67060c;--color-prettylights-syntax-markup-inserted-text: #aff5b4;--color-prettylights-syntax-markup-inserted-bg: #033a16;--color-prettylights-syntax-markup-changed-text: #ffdfb6;--color-prettylights-syntax-markup-changed-bg: #5a1e02;--color-prettylights-syntax-markup-ignored-text: #c9d1d9;--color-prettylights-syntax-markup-ignored-bg: #1158c7;--color-prettylights-syntax-meta-diff-range: #d2a8ff;--color-prettylights-syntax-brackethighlighter-angle: #8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;--color-codemirror-text: #e6edf3;--color-codemirror-bg: #0d1117;--color-codemirror-gutters-bg: #0d1117;--color-codemirror-guttermarker-text: #0d1117;--color-codemirror-guttermarker-subtle-text: #6e7681;--color-codemirror-linenumber-text: #7d8590;--color-codemirror-cursor: #e6edf3;--color-codemirror-selection-bg: rgba(56,139,253,.4);--color-codemirror-activeline-bg: rgba(110,118,129,.1);--color-codemirror-matchingbracket-text: #e6edf3;--color-codemirror-lines-bg: #0d1117;--color-codemirror-syntax-comment: #8b949e;--color-codemirror-syntax-constant: #79c0ff;--color-codemirror-syntax-entity: #d2a8ff;--color-codemirror-syntax-keyword: #ff7b72;--color-codemirror-syntax-storage: #ff7b72;--color-codemirror-syntax-string: #a5d6ff;--color-codemirror-syntax-support: #79c0ff;--color-codemirror-syntax-variable: #ffa657;--color-checks-bg: #010409;--color-checks-run-border-width: 1px;--color-checks-container-border-width: 1px;--color-checks-text-primary: #e6edf3;--color-checks-text-secondary: #7d8590;--color-checks-text-link: #2f81f7;--color-checks-btn-icon: #7d8590;--color-checks-btn-hover-icon: #e6edf3;--color-checks-btn-hover-bg: rgba(110,118,129,.1);--color-checks-input-text: #7d8590;--color-checks-input-placeholder-text: #6e7681;--color-checks-input-focus-text: #e6edf3;--color-checks-input-bg: #161b22;--color-checks-donut-error: #f85149;--color-checks-donut-pending: #d29922;--color-checks-donut-success: #2ea043;--color-checks-donut-neutral: #8b949e;--color-checks-dropdown-text: #e6edf3;--color-checks-dropdown-bg: #161b22;--color-checks-dropdown-border: #30363d;--color-checks-dropdown-shadow: rgba(1,4,9,.3);--color-checks-dropdown-hover-text: #e6edf3;--color-checks-dropdown-hover-bg: rgba(110,118,129,.1);--color-checks-dropdown-btn-hover-text: #e6edf3;--color-checks-dropdown-btn-hover-bg: rgba(110,118,129,.1);--color-checks-scrollbar-thumb-bg: rgba(110,118,129,.4);--color-checks-header-label-text: #7d8590;--color-checks-header-label-open-text: #e6edf3;--color-checks-header-border: #21262d;--color-checks-header-icon: #7d8590;--color-checks-line-text: #7d8590;--color-checks-line-num-text: #6e7681;--color-checks-line-timestamp-text: #6e7681;--color-checks-line-hover-bg: rgba(110,118,129,.1);--color-checks-line-selected-bg: rgba(56,139,253,.1);--color-checks-line-selected-num-text: #2f81f7;--color-checks-line-dt-fm-text: #ffffff;--color-checks-line-dt-fm-bg: #9e6a03;--color-checks-gate-bg: rgba(187,128,9,.15);--color-checks-gate-text: #7d8590;--color-checks-gate-waiting-text: #d29922;--color-checks-step-header-open-bg: #161b22;--color-checks-step-error-text: #f85149;--color-checks-step-warning-text: #d29922;--color-checks-logline-text: #7d8590;--color-checks-logline-num-text: #6e7681;--color-checks-logline-debug-text: #a371f7;--color-checks-logline-error-text: #7d8590;--color-checks-logline-error-num-text: #6e7681;--color-checks-logline-error-bg: rgba(248,81,73,.1);--color-checks-logline-warning-text: #7d8590;--color-checks-logline-warning-num-text: #d29922;--color-checks-logline-warning-bg: rgba(187,128,9,.15);--color-checks-logline-command-text: #2f81f7;--color-checks-logline-section-text: #3fb950;--color-checks-ansi-black: #0d1117;--color-checks-ansi-black-bright: #161b22;--color-checks-ansi-white: #b1bac4;--color-checks-ansi-white-bright: #b1bac4;--color-checks-ansi-gray: #6e7681;--color-checks-ansi-red: #ff7b72;--color-checks-ansi-red-bright: #ffa198;--color-checks-ansi-green: #3fb950;--color-checks-ansi-green-bright: #56d364;--color-checks-ansi-yellow: #d29922;--color-checks-ansi-yellow-bright: #e3b341;--color-checks-ansi-blue: #58a6ff;--color-checks-ansi-blue-bright: #79c0ff;--color-checks-ansi-magenta: #bc8cff;--color-checks-ansi-magenta-bright: #d2a8ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #0d1117;--color-project-sidebar-bg: #161b22;--color-project-gradient-in: #161b22;--color-project-gradient-out: rgba(22,27,34,0);--color-mktg-btn-bg: #f6f8fa;--color-mktg-btn-shadow-outline: rgb(255 255 255 / 25%) 0 0 0 1px inset;--color-mktg-btn-shadow-focus: rgb(255 255 255 / 25%) 0 0 0 4px;--color-mktg-btn-shadow-hover: 0 4px 7px rgba(0, 0, 0, .15), 0 100px 80px rgba(255, 255, 255, .02), 0 42px 33px rgba(255, 255, 255, .024), 0 22px 18px rgba(255, 255, 255, .028), 0 12px 10px rgba(255, 255, 255, .034), 0 7px 5px rgba(255, 255, 255, .04), 0 3px 2px rgba(255, 255, 255, .07);--color-mktg-btn-shadow-hover-muted: rgb(255 255 255) 0 0 0 2px inset;--color-control-border-color-emphasis: #606771;--color-avatar-bg: rgba(255,255,255,.1);--color-avatar-border: rgba(240,246,252,.1);--color-avatar-stack-fade: #30363d;--color-avatar-stack-fade-more: #21262d;--color-avatar-child-shadow: 0 0 0 2px #0d1117;--color-topic-tag-border: rgba(0,0,0,0);--color-counter-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: #484f58;--color-select-menu-tap-highlight: rgba(48,54,61,.5);--color-select-menu-tap-focus-bg: #0c2d6b;--color-overlay-shadow: 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,.85);--color-overlay-backdrop: rgba(22,27,34,.4);--color-header-text: rgba(255,255,255,.7);--color-header-bg: #161b22;--color-header-divider: #8b949e;--color-header-logo: #f0f6fc;--color-header-search-bg: #0d1117;--color-header-search-border: #30363d;--color-sidenav-selected-bg: #21262d;--color-menu-bg-active: #161b22;--color-input-disabled-bg: rgba(110,118,129,0);--color-timeline-badge-bg: #21262d;--color-ansi-black: #484f58;--color-ansi-black-bright: #6e7681;--color-ansi-white: #b1bac4;--color-ansi-white-bright: #ffffff;--color-ansi-gray: #6e7681;--color-ansi-red: #ff7b72;--color-ansi-red-bright: #ffa198;--color-ansi-green: #3fb950;--color-ansi-green-bright: #56d364;--color-ansi-yellow: #d29922;--color-ansi-yellow-bright: #e3b341;--color-ansi-blue: #58a6ff;--color-ansi-blue-bright: #79c0ff;--color-ansi-magenta: #bc8cff;--color-ansi-magenta-bright: #d2a8ff;--color-ansi-cyan: #39c5cf;--color-ansi-cyan-bright: #56d4dd;--color-btn-text: #c9d1d9;--color-btn-bg: #21262d;--color-btn-border: rgba(240,246,252,.1);--color-btn-shadow: 0 0 transparent;--color-btn-inset-shadow: 0 0 transparent;--color-btn-hover-bg: #30363d;--color-btn-hover-border: #8b949e;--color-btn-active-bg: hsla(212,12%,18%,1);--color-btn-active-border: #6e7681;--color-btn-selected-bg: #161b22;--color-btn-counter-bg: #30363d;--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #238636;--color-btn-primary-border: rgba(240,246,252,.1);--color-btn-primary-shadow: 0 0 transparent;--color-btn-primary-inset-shadow: 0 0 transparent;--color-btn-primary-hover-bg: #2ea043;--color-btn-primary-hover-border: rgba(240,246,252,.1);--color-btn-primary-selected-bg: #238636;--color-btn-primary-selected-shadow: 0 0 transparent;--color-btn-primary-disabled-text: rgba(255,255,255,.5);--color-btn-primary-disabled-bg: rgba(35,134,54,.6);--color-btn-primary-disabled-border: rgba(240,246,252,.1);--color-btn-primary-icon: #ffffff;--color-btn-primary-counter-bg: rgba(4,38,15,.2);--color-btn-outline-text: #388bfd;--color-btn-outline-hover-text: #58a6ff;--color-btn-outline-hover-bg: #30363d;--color-btn-outline-hover-border: rgba(240,246,252,.1);--color-btn-outline-hover-shadow: 0 1px 0 rgba(1,4,9,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-outline-hover-counter-bg: rgba(5,29,77,.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: #0d419d;--color-btn-outline-selected-border: rgba(240,246,252,.1);--color-btn-outline-selected-shadow: 0 0 transparent;--color-btn-outline-disabled-text: rgba(88,166,255,.5);--color-btn-outline-disabled-bg: #0d1117;--color-btn-outline-disabled-counter-bg: rgba(31,111,235,.05);--color-btn-outline-counter-bg: rgba(5,29,77,.2);--color-btn-outline-hover-counter-fg: #58a6ff;--color-btn-outline-disabled-counter-fg: rgba(47,129,247,.5);--color-btn-outline-counter-fg: #388bfd;--color-btn-danger-text: #f85149;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #da3633;--color-btn-danger-hover-border: #f85149;--color-btn-danger-hover-shadow: 0 0 transparent;--color-btn-danger-hover-inset-shadow: 0 0 transparent;--color-btn-danger-hover-icon: #ffffff;--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: #b62324;--color-btn-danger-selected-border: #ff7b72;--color-btn-danger-selected-shadow: 0 0 transparent;--color-btn-danger-disabled-text: rgba(248,81,73,.5);--color-btn-danger-disabled-bg: #0d1117;--color-btn-danger-disabled-counter-bg: rgba(218,54,51,.05);--color-btn-danger-counter-bg: rgba(73,2,2,.2);--color-btn-danger-icon: #f85149;--color-btn-danger-counter-fg: #f85149;--color-btn-danger-disabled-counter-fg: rgba(248,81,73,.5);--color-btn-danger-hover-counter-fg: #ffffff;--color-underlinenav-icon: #6e7681;--color-underlinenav-border-hover: rgba(110,118,129,.4);--color-action-list-item-inline-divider: rgba(48,54,61,.48);--color-action-list-item-default-hover-bg: rgba(177,186,196,.12);--color-action-list-item-default-hover-border: rgba(0,0,0,0);--color-action-list-item-default-active-bg: rgba(177,186,196,.2);--color-action-list-item-default-active-border: rgba(0,0,0,0);--color-action-list-item-default-selected-bg: rgba(177,186,196,.08);--color-action-list-item-danger-hover-bg: rgba(248,81,73,.16);--color-action-list-item-danger-active-bg: rgba(248,81,73,.24);--color-action-list-item-danger-hover-text: #ff7b72;--color-switch-track-bg: rgba(110,118,129,.1);--color-switch-track-hover-bg: hsla(215,8%,72%,.1);--color-switch-track-active-bg: rgba(110,118,129,.4);--color-switch-track-disabled-bg: #21262d;--color-switch-track-fg: #7d8590;--color-switch-track-disabled-fg: #010409;--color-switch-track-border: rgba(0,0,0,0);--color-switch-track-checked-bg: rgba(31,111,235,.35);--color-switch-track-checked-hover-bg: rgba(31,111,235,.5);--color-switch-track-checked-active-bg: rgba(31,111,235,.65);--color-switch-track-checked-fg: #ffffff;--color-switch-track-checked-disabled-fg: #010409;--color-switch-track-checked-border: rgba(0,0,0,0);--color-switch-knob-bg: #0d1117;--color-switch-knob-border: #606771;--color-switch-knob-disabled-bg: #161b22;--color-switch-knob-checked-bg: #0d1117;--color-switch-knob-checked-disabled-bg: #161b22;--color-switch-knob-checked-border: rgba(31,111,235,.35);--color-segmented-control-bg: rgba(110,118,129,.1);--color-segmented-control-button-bg: #0d1117;--color-segmented-control-button-hover-bg: #30363d;--color-segmented-control-button-active-bg: #21262d;--color-segmented-control-button-selected-border: #6e7681;--color-tree-view-item-chevron-hover-bg: rgba(177,186,196,.12);--color-tree-view-item-directory-fill: #7d8590;--color-fg-default: #e6edf3;--color-fg-muted: #7d8590;--color-fg-subtle: #6e7681;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #0d1117;--color-canvas-overlay: #161b22;--color-canvas-inset: #010409;--color-canvas-subtle: #161b22;--color-border-default: #30363d;--color-border-muted: #21262d;--color-border-subtle: rgba(240,246,252,.1);--color-shadow-small: 0 0 transparent;--color-shadow-medium: 0 3px 6px #010409;--color-shadow-large: 0 8px 24px #010409;--color-shadow-extra-large: 0 12px 48px #010409;--color-neutral-emphasis-plus: #6e7681;--color-neutral-emphasis: #6e7681;--color-neutral-muted: rgba(110,118,129,.4);--color-neutral-subtle: rgba(110,118,129,.1);--color-accent-fg: #2f81f7;--color-accent-emphasis: #1f6feb;--color-accent-muted: rgba(56,139,253,.4);--color-accent-subtle: rgba(56,139,253,.1);--color-success-fg: #3fb950;--color-success-emphasis: #238636;--color-success-muted: rgba(46,160,67,.4);--color-success-subtle: rgba(46,160,67,.15);--color-attention-fg: #d29922;--color-attention-emphasis: #9e6a03;--color-attention-muted: rgba(187,128,9,.4);--color-attention-subtle: rgba(187,128,9,.15);--color-severe-fg: #db6d28;--color-severe-emphasis: #bd561d;--color-severe-muted: rgba(219,109,40,.4);--color-severe-subtle: rgba(219,109,40,.1);--color-danger-fg: #f85149;--color-danger-emphasis: #da3633;--color-danger-muted: rgba(248,81,73,.4);--color-danger-subtle: rgba(248,81,73,.1);--color-open-fg: #3fb950;--color-open-emphasis: #238636;--color-open-muted: rgba(46,160,67,.4);--color-open-subtle: rgba(46,160,67,.15);--color-closed-fg: #f85149;--color-closed-emphasis: #da3633;--color-closed-muted: rgba(248,81,73,.4);--color-closed-subtle: rgba(248,81,73,.15);--color-done-fg: #a371f7;--color-done-emphasis: #8957e5;--color-done-muted: rgba(163,113,247,.4);--color-done-subtle: rgba(163,113,247,.1);--color-sponsors-fg: #db61a2;--color-sponsors-emphasis: #bf4b8a;--color-sponsors-muted: rgba(219,97,162,.4);--color-sponsors-subtle: rgba(219,97,162,.1);--color-primer-fg-disabled: #484f58;--color-primer-canvas-backdrop: rgba(1,4,9,.8);--color-primer-canvas-sticky: rgba(13,17,23,.95);--color-primer-border-active: #f78166;--color-primer-border-contrast: rgba(255,255,255,.2);--color-primer-shadow-highlight: 0 0 transparent;--color-primer-shadow-inset: 0 0 transparent;--color-scale-black: #010409;--color-scale-white: #ffffff;--color-scale-gray-0: #f0f6fc;--color-scale-gray-1: #c9d1d9;--color-scale-gray-2: #b1bac4;--color-scale-gray-3: #8b949e;--color-scale-gray-4: #6e7681;--color-scale-gray-5: #484f58;--color-scale-gray-6: #30363d;--color-scale-gray-7: #21262d;--color-scale-gray-8: #161b22;--color-scale-gray-9: #0d1117;--color-scale-blue-0: #cae8ff;--color-scale-blue-1: #a5d6ff;--color-scale-blue-2: #79c0ff;--color-scale-blue-3: #58a6ff;--color-scale-blue-4: #388bfd;--color-scale-blue-5: #1f6feb;--color-scale-blue-6: #1158c7;--color-scale-blue-7: #0d419d;--color-scale-blue-8: #0c2d6b;--color-scale-blue-9: #051d4d;--color-scale-green-0: #aff5b4;--color-scale-green-1: #7ee787;--color-scale-green-2: #56d364;--color-scale-green-3: #3fb950;--color-scale-green-4: #2ea043;--color-scale-green-5: #238636;--color-scale-green-6: #196c2e;--color-scale-green-7: #0f5323;--color-scale-green-8: #033a16;--color-scale-green-9: #04260f;--color-scale-yellow-0: #f8e3a1;--color-scale-yellow-1: #f2cc60;--color-scale-yellow-2: #e3b341;--color-scale-yellow-3: #d29922;--color-scale-yellow-4: #bb8009;--color-scale-yellow-5: #9e6a03;--color-scale-yellow-6: #845306;--color-scale-yellow-7: #693e00;--color-scale-yellow-8: #4b2900;--color-scale-yellow-9: #341a00;--color-scale-orange-0: #ffdfb6;--color-scale-orange-1: #ffc680;--color-scale-orange-2: #ffa657;--color-scale-orange-3: #f0883e;--color-scale-orange-4: #db6d28;--color-scale-orange-5: #bd561d;--color-scale-orange-6: #9b4215;--color-scale-orange-7: #762d0a;--color-scale-orange-8: #5a1e02;--color-scale-orange-9: #3d1300;--color-scale-red-0: #ffdcd7;--color-scale-red-1: #ffc1ba;--color-scale-red-2: #ffa198;--color-scale-red-3: #ff7b72;--color-scale-red-4: #f85149;--color-scale-red-5: #da3633;--color-scale-red-6: #b62324;--color-scale-red-7: #8e1519;--color-scale-red-8: #67060c;--color-scale-red-9: #490202;--color-scale-purple-0: #eddeff;--color-scale-purple-1: #e2c5ff;--color-scale-purple-2: #d2a8ff;--color-scale-purple-3: #bc8cff;--color-scale-purple-4: #a371f7;--color-scale-purple-5: #8957e5;--color-scale-purple-6: #6e40c9;--color-scale-purple-7: #553098;--color-scale-purple-8: #3c1e70;--color-scale-purple-9: #271052;--color-scale-pink-0: #ffdaec;--color-scale-pink-1: #ffbedd;--color-scale-pink-2: #ff9bce;--color-scale-pink-3: #f778ba;--color-scale-pink-4: #db61a2;--color-scale-pink-5: #bf4b8a;--color-scale-pink-6: #9e3670;--color-scale-pink-7: #7d2457;--color-scale-pink-8: #5e103e;--color-scale-pink-9: #42062a;--color-scale-coral-0: #ffddd2;--color-scale-coral-1: #ffc2b2;--color-scale-coral-2: #ffa28b;--color-scale-coral-3: #f78166;--color-scale-coral-4: #ea6045;--color-scale-coral-5: #cf462d;--color-scale-coral-6: #ac3220;--color-scale-coral-7: #872012;--color-scale-coral-8: #640d04;--color-scale-coral-9: #460701}.code-diff-view *{position:static;box-sizing:border-box}.code-diff-view{position:relative;margin-top:16px;margin-bottom:16px;border:1px solid var(--color-border-default, #ddd);border-radius:6px;overflow-y:auto}.code-diff-view .file-header{position:sticky;top:0;z-index:1;background-color:var(--color-canvas-subtle);border-bottom:1px solid var(--color-border-default);padding:8px 16px;font-size:12px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.code-diff-view .file-header .file-info{display:flex;justify-content:space-between;align-items:center;margin-left:8px;height:24px}.code-diff-view .file-header .file-info .info-left{color:var(--color-fg-default)}.code-diff-view .file-header .file-info .info-right{display:flex;justify-content:space-between;align-items:center;width:50%}.code-diff-view .file-header .file-info .diff-stat{display:inline-flex;align-items:center;gap:8px}.code-diff-view .file-header .file-info .diff-stat .diff-stat-added{color:var(--color-diffstat-addition-bg)}.code-diff-view .file-header .file-info .diff-stat .diff-stat-deleted{color:var(--color-danger-emphasis)}.code-diff-view .file-header .file-info .diff-stat .diff-stat-ignored{color:var(--color-fg-subtle)}.code-diff-view .file-header .file-info .diff-commandbar{margin-left:auto;margin-right:1rem}.code-diff-view .file-header .file-info .diff-commandbar .command-item-button{background-color:transparent;color:var(--color-fg-subtle);border:none}.code-diff-view .file-header .file-info .diff-commandbar .command-item-button svg{fill:var(--color-fg-subtle)}.code-diff-view .file-header .file-info .diff-commandbar .command-item-button:hover{background-color:var(--color-btn-outline-hover-border)}.code-diff-view table{border-spacing:0}.code-diff-view .diff-table{width:100%}.code-diff-view .diff-table .blob-num{position:relative;width:1%;min-width:50px;padding-right:10px;padding-left:10px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;line-height:20px;color:var(--color-fg-subtle);text-align:right;white-space:nowrap;vertical-align:top;cursor:pointer;-webkit-user-select:none;user-select:none}.code-diff-view .diff-table .blob-num-deletion{color:var(--color-diff-blob-deletion-num-text);background-color:var(--color-diff-blob-deletion-num-bg);border-color:var(--color-danger-emphasis)}.code-diff-view .diff-table .blob-num-addition{color:var(--color-diff-blob-addition-num-text);background-color:var(--color-diff-blob-addition-num-bg);border-color:var(--color-success-emphasis)}.code-diff-view .diff-table .blob-code{position:relative;padding-right:10px;padding-left:10px;line-height:20px;vertical-align:top}.code-diff-view .diff-table .blob-code .blob-code-inner{display:table-cell;overflow:visible;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;color:var(--color-fg-default);word-wrap:anywhere;white-space:pre-wrap}.code-diff-view .diff-table .blob-code-deletion{background-color:var(--color-diff-blob-deletion-line-bg);outline:1px dashed transparent}.code-diff-view .diff-table .blob-code-deletion .x{color:var(--color-diff-blob-deletion-fg);background-color:var(--color-diff-blob-deletion-word-bg)}.code-diff-view .diff-table .blob-code-addition{background-color:var(--color-diff-blob-addition-line-bg);outline:1px dotted transparent}.code-diff-view .diff-table .blob-code-addition .x{color:var(--color-diff-blob-addition-fg);background-color:var(--color-diff-blob-addition-word-bg)}.code-diff-view .diff-table .current-diff{border:1px solid var(--color-border-muted)}.code-diff-view .diff-table .blob-code-context,.code-diff-view .diff-table .blob-code-addition,.code-diff-view .diff-table .blob-code-deletion{padding-left:22px!important}.code-diff-view .diff-table .blob-code-marker:before{position:absolute;top:1px;left:8px;padding-right:8px;content:attr(data-code-marker)}.code-diff-view .diff-table .blob-num-hunk{background-color:var(--color-diff-blob-hunk-num-bg)}.code-diff-view .diff-table .blob-code-hunk{background-color:var(--color-accent-subtle)}.code-diff-view .diff-table .load-more{padding:8px;text-align:center}.code-diff-view .diff-table .load-more-button{padding:4px 12px;color:var(--color-accent-fg);background:transparent;border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer}.code-diff-view .diff-table .load-more-button:hover{background-color:var(--color-accent-muted)}.code-diff-view .file-diff-split{table-layout:fixed}.code-diff-view .file-diff-split .blob-code+.blob-num{border-left:1px solid var(--color-border-muted)}.code-diff-view .file-diff-split .no-select{user-select:none}.code-diff-view .empty-cell{cursor:default;background-color:var(--color-neutral-subtle);border-right-color:var(--color-border-muted)}.code-diff-view[data-v-0c5adc58] td:nth-child(1){display:none}")), document.head.appendChild(e);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
function Xe() {
}
Xe.prototype = {
  diff: function(e, r) {
    var c, p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = p.callback;
    typeof p == "function" && (b = p, p = {}), this.options = p;
    var t = this;
    function n(x) {
      return b ? (setTimeout(function() {
        b(void 0, x);
      }, 0), !0) : x;
    }
    e = this.castInput(e), r = this.castInput(r), e = this.removeEmpty(this.tokenize(e)), r = this.removeEmpty(this.tokenize(r));
    var o = r.length, a = e.length, l = 1, i = o + a;
    p.maxEditLength && (i = Math.min(i, p.maxEditLength));
    var s = (c = p.timeout) !== null && c !== void 0 ? c : 1 / 0, d = Date.now() + s, g = [{
      oldPos: -1,
      lastComponent: void 0
    }], v = this.extractCommon(g[0], r, e, 0);
    if (g[0].oldPos + 1 >= a && v + 1 >= o)
      return n([{
        value: this.join(r),
        count: r.length
      }]);
    var m = -1 / 0, y = 1 / 0;
    function _() {
      for (var x = Math.max(m, -l); x <= Math.min(y, l); x += 2) {
        var I = void 0, S = g[x - 1], O = g[x + 1];
        S && (g[x - 1] = void 0);
        var B = !1;
        if (O) {
          var G = O.oldPos - x;
          B = O && 0 <= G && G < o;
        }
        var L = S && S.oldPos + 1 < a;
        if (!B && !L) {
          g[x] = void 0;
          continue;
        }
        if (!L || B && S.oldPos + 1 < O.oldPos ? I = t.addToPath(O, !0, void 0, 0) : I = t.addToPath(S, void 0, !0, 1), v = t.extractCommon(I, r, e, x), I.oldPos + 1 >= a && v + 1 >= o)
          return n(cr(t, I.lastComponent, r, e, t.useLongestToken));
        g[x] = I, I.oldPos + 1 >= a && (y = Math.min(y, x - 1)), v + 1 >= o && (m = Math.max(m, x + 1));
      }
      l++;
    }
    if (b)
      (function x() {
        setTimeout(function() {
          if (l > i || Date.now() > d)
            return b();
          _() || x();
        }, 0);
      })();
    else
      for (; l <= i && Date.now() <= d; ) {
        var k = _();
        if (k)
          return k;
      }
  },
  addToPath: function(e, r, c, p) {
    var b = e.lastComponent;
    return b && b.added === r && b.removed === c ? {
      oldPos: e.oldPos + p,
      lastComponent: {
        count: b.count + 1,
        added: r,
        removed: c,
        previousComponent: b.previousComponent
      }
    } : {
      oldPos: e.oldPos + p,
      lastComponent: {
        count: 1,
        added: r,
        removed: c,
        previousComponent: b
      }
    };
  },
  extractCommon: function(e, r, c, p) {
    for (var b = r.length, t = c.length, n = e.oldPos, o = n - p, a = 0; o + 1 < b && n + 1 < t && this.equals(r[o + 1], c[n + 1]); )
      o++, n++, a++;
    return a && (e.lastComponent = {
      count: a,
      previousComponent: e.lastComponent
    }), e.oldPos = n, o;
  },
  equals: function(e, r) {
    return this.options.comparator ? this.options.comparator(e, r) : e === r || this.options.ignoreCase && e.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(e) {
    for (var r = [], c = 0; c < e.length; c++)
      e[c] && r.push(e[c]);
    return r;
  },
  castInput: function(e) {
    return e;
  },
  tokenize: function(e) {
    return e.split("");
  },
  join: function(e) {
    return e.join("");
  }
};
function cr(e, r, c, p, b) {
  for (var t = [], n; r; )
    t.push(r), n = r.previousComponent, delete r.previousComponent, r = n;
  t.reverse();
  for (var o = 0, a = t.length, l = 0, i = 0; o < a; o++) {
    var s = t[o];
    if (s.removed) {
      if (s.value = e.join(p.slice(i, i + s.count)), i += s.count, o && t[o - 1].added) {
        var d = t[o - 1];
        t[o - 1] = t[o], t[o] = d;
      }
    } else {
      if (!s.added && b) {
        var g = c.slice(l, l + s.count);
        g = g.map(function(m, y) {
          var _ = p[i + y];
          return _.length > m.length ? _ : m;
        }), s.value = e.join(g);
      } else
        s.value = e.join(c.slice(l, l + s.count));
      l += s.count, s.added || (i += s.count);
    }
  }
  var v = t[a - 1];
  return a > 1 && typeof v.value == "string" && (v.added || v.removed) && e.equals("", v.value) && (t[a - 2].value += v.value, t.pop()), t;
}
var sr = new Xe();
function dr(e, r, c) {
  return sr.diff(e, r, c);
}
function fr(e, r) {
  if (typeof e == "function")
    r.callback = e;
  else if (e)
    for (var c in e)
      e.hasOwnProperty(c) && (r[c] = e[c]);
  return r;
}
var no = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, oo = /\S/, Kn = new Xe();
Kn.equals = function(e, r) {
  return this.options.ignoreCase && (e = e.toLowerCase(), r = r.toLowerCase()), e === r || this.options.ignoreWhitespace && !oo.test(e) && !oo.test(r);
};
Kn.tokenize = function(e) {
  for (var r = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), c = 0; c < r.length - 1; c++)
    !r[c + 1] && r[c + 2] && no.test(r[c]) && no.test(r[c + 2]) && (r[c] += r[c + 2], r.splice(c + 1, 2), c--);
  return r;
};
function gr(e, r, c) {
  return c = fr(c, {
    ignoreWhitespace: !0
  }), Kn.diff(e, r, c);
}
var Gn = new Xe();
Gn.tokenize = function(e) {
  this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var r = [], c = e.split(/(\n|\r\n)/);
  c[c.length - 1] || c.pop();
  for (var p = 0; p < c.length; p++) {
    var b = c[p];
    p % 2 && !this.options.newlineIsToken ? r[r.length - 1] += b : (this.options.ignoreWhitespace && (b = b.trim()), r.push(b));
  }
  return r;
};
function ur(e, r, c) {
  return Gn.diff(e, r, c);
}
var br = new Xe();
br.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var hr = new Xe();
hr.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(r) {
    return typeof r;
  } : mn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, mn(e);
}
var pr = Object.prototype.toString, $t = new Xe();
$t.useLongestToken = !0;
$t.tokenize = Gn.tokenize;
$t.castInput = function(e) {
  var r = this.options, c = r.undefinedReplacement, p = r.stringifyReplacer, b = p === void 0 ? function(t, n) {
    return typeof n > "u" ? c : n;
  } : p;
  return typeof e == "string" ? e : JSON.stringify(jn(e, null, null, b), b, "  ");
};
$t.equals = function(e, r) {
  return Xe.prototype.equals.call($t, e.replace(/,([\r\n])/g, "$1"), r.replace(/,([\r\n])/g, "$1"));
};
function jn(e, r, c, p, b) {
  r = r || [], c = c || [], p && (e = p(b, e));
  var t;
  for (t = 0; t < r.length; t += 1)
    if (r[t] === e)
      return c[t];
  var n;
  if (pr.call(e) === "[object Array]") {
    for (r.push(e), n = new Array(e.length), c.push(n), t = 0; t < e.length; t += 1)
      n[t] = jn(e[t], r, c, p, b);
    return r.pop(), c.pop(), n;
  }
  if (e && e.toJSON && (e = e.toJSON()), mn(e) === "object" && e !== null) {
    r.push(e), n = {}, c.push(n);
    var o = [], a;
    for (a in e)
      e.hasOwnProperty(a) && o.push(a);
    for (o.sort(), t = 0; t < o.length; t += 1)
      a = o[t], n[a] = jn(e[a], r, c, p, a);
    r.pop(), c.pop();
  } else
    n = e;
  return n;
}
var Bn = new Xe();
Bn.tokenize = function(e) {
  return e.slice();
};
Bn.join = Bn.removeEmpty = function(e) {
  return e;
};
function mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ro = { exports: {} }, ao;
function vr() {
  return ao || (ao = 1, function(e) {
    var r = function() {
      this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
    }, c = -1, p = 1, b = 0;
    r.Diff = function(t, n) {
      return [t, n];
    }, r.prototype.diff_main = function(t, n, o, a) {
      typeof a > "u" && (this.Diff_Timeout <= 0 ? a = Number.MAX_VALUE : a = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
      var l = a;
      if (t == null || n == null)
        throw new Error("Null input. (diff_main)");
      if (t == n)
        return t ? [new r.Diff(b, t)] : [];
      typeof o > "u" && (o = !0);
      var i = o, s = this.diff_commonPrefix(t, n), d = t.substring(0, s);
      t = t.substring(s), n = n.substring(s), s = this.diff_commonSuffix(t, n);
      var g = t.substring(t.length - s);
      t = t.substring(0, t.length - s), n = n.substring(0, n.length - s);
      var v = this.diff_compute_(t, n, i, l);
      return d && v.unshift(new r.Diff(b, d)), g && v.push(new r.Diff(b, g)), this.diff_cleanupMerge(v), v;
    }, r.prototype.diff_compute_ = function(t, n, o, a) {
      var l;
      if (!t)
        return [new r.Diff(p, n)];
      if (!n)
        return [new r.Diff(c, t)];
      var i = t.length > n.length ? t : n, s = t.length > n.length ? n : t, d = i.indexOf(s);
      if (d != -1)
        return l = [
          new r.Diff(p, i.substring(0, d)),
          new r.Diff(b, s),
          new r.Diff(
            p,
            i.substring(d + s.length)
          )
        ], t.length > n.length && (l[0][0] = l[2][0] = c), l;
      if (s.length == 1)
        return [
          new r.Diff(c, t),
          new r.Diff(p, n)
        ];
      var g = this.diff_halfMatch_(t, n);
      if (g) {
        var v = g[0], m = g[1], y = g[2], _ = g[3], k = g[4], x = this.diff_main(v, y, o, a), I = this.diff_main(m, _, o, a);
        return x.concat(
          [new r.Diff(b, k)],
          I
        );
      }
      return o && t.length > 100 && n.length > 100 ? this.diff_lineMode_(t, n, a) : this.diff_bisect_(t, n, a);
    }, r.prototype.diff_lineMode_ = function(t, n, o) {
      var a = this.diff_linesToChars_(t, n);
      t = a.chars1, n = a.chars2;
      var l = a.lineArray, i = this.diff_main(t, n, !1, o);
      this.diff_charsToLines_(i, l), this.diff_cleanupSemantic(i), i.push(new r.Diff(b, ""));
      for (var s = 0, d = 0, g = 0, v = "", m = ""; s < i.length; ) {
        switch (i[s][0]) {
          case p:
            g++, m += i[s][1];
            break;
          case c:
            d++, v += i[s][1];
            break;
          case b:
            if (d >= 1 && g >= 1) {
              i.splice(
                s - d - g,
                d + g
              ), s = s - d - g;
              for (var y = this.diff_main(v, m, !1, o), _ = y.length - 1; _ >= 0; _--)
                i.splice(s, 0, y[_]);
              s = s + y.length;
            }
            g = 0, d = 0, v = "", m = "";
            break;
        }
        s++;
      }
      return i.pop(), i;
    }, r.prototype.diff_bisect_ = function(t, n, o) {
      for (var a = t.length, l = n.length, i = Math.ceil((a + l) / 2), s = i, d = 2 * i, g = new Array(d), v = new Array(d), m = 0; m < d; m++)
        g[m] = -1, v[m] = -1;
      g[s + 1] = 0, v[s + 1] = 0;
      for (var y = a - l, _ = y % 2 != 0, k = 0, x = 0, I = 0, S = 0, O = 0; O < i && !((/* @__PURE__ */ new Date()).getTime() > o); O++) {
        for (var B = -O + k; B <= O - x; B += 2) {
          var G = s + B, L;
          B == -O || B != O && g[G - 1] < g[G + 1] ? L = g[G + 1] : L = g[G - 1] + 1;
          for (var Q = L - B; L < a && Q < l && t.charAt(L) == n.charAt(Q); )
            L++, Q++;
          if (g[G] = L, L > a)
            x += 2;
          else if (Q > l)
            k += 2;
          else if (_) {
            var V = s + y - B;
            if (V >= 0 && V < d && v[V] != -1) {
              var te = a - v[V];
              if (L >= te)
                return this.diff_bisectSplit_(t, n, L, Q, o);
            }
          }
        }
        for (var ie = -O + I; ie <= O - S; ie += 2) {
          var V = s + ie, te;
          ie == -O || ie != O && v[V - 1] < v[V + 1] ? te = v[V + 1] : te = v[V - 1] + 1;
          for (var ee = te - ie; te < a && ee < l && t.charAt(a - te - 1) == n.charAt(l - ee - 1); )
            te++, ee++;
          if (v[V] = te, te > a)
            S += 2;
          else if (ee > l)
            I += 2;
          else if (!_) {
            var G = s + y - ie;
            if (G >= 0 && G < d && g[G] != -1) {
              var L = g[G], Q = s + L - G;
              if (te = a - te, L >= te)
                return this.diff_bisectSplit_(t, n, L, Q, o);
            }
          }
        }
      }
      return [
        new r.Diff(c, t),
        new r.Diff(p, n)
      ];
    }, r.prototype.diff_bisectSplit_ = function(t, n, o, a, l) {
      var i = t.substring(0, o), s = n.substring(0, a), d = t.substring(o), g = n.substring(a), v = this.diff_main(i, s, !1, l), m = this.diff_main(d, g, !1, l);
      return v.concat(m);
    }, r.prototype.diff_linesToChars_ = function(t, n) {
      var o = [], a = {};
      o[0] = "";
      function l(g) {
        for (var v = "", m = 0, y = -1, _ = o.length; y < g.length - 1; ) {
          y = g.indexOf(`
`, m), y == -1 && (y = g.length - 1);
          var k = g.substring(m, y + 1);
          (a.hasOwnProperty ? a.hasOwnProperty(k) : a[k] !== void 0) ? v += String.fromCharCode(a[k]) : (_ == i && (k = g.substring(m), y = g.length), v += String.fromCharCode(_), a[k] = _, o[_++] = k), m = y + 1;
        }
        return v;
      }
      var i = 4e4, s = l(t);
      i = 65535;
      var d = l(n);
      return { chars1: s, chars2: d, lineArray: o };
    }, r.prototype.diff_charsToLines_ = function(t, n) {
      for (var o = 0; o < t.length; o++) {
        for (var a = t[o][1], l = [], i = 0; i < a.length; i++)
          l[i] = n[a.charCodeAt(i)];
        t[o][1] = l.join("");
      }
    }, r.prototype.diff_commonPrefix = function(t, n) {
      if (!t || !n || t.charAt(0) != n.charAt(0))
        return 0;
      for (var o = 0, a = Math.min(t.length, n.length), l = a, i = 0; o < l; )
        t.substring(i, l) == n.substring(i, l) ? (o = l, i = o) : a = l, l = Math.floor((a - o) / 2 + o);
      return l;
    }, r.prototype.diff_commonSuffix = function(t, n) {
      if (!t || !n || t.charAt(t.length - 1) != n.charAt(n.length - 1))
        return 0;
      for (var o = 0, a = Math.min(t.length, n.length), l = a, i = 0; o < l; )
        t.substring(t.length - l, t.length - i) == n.substring(n.length - l, n.length - i) ? (o = l, i = o) : a = l, l = Math.floor((a - o) / 2 + o);
      return l;
    }, r.prototype.diff_commonOverlap_ = function(t, n) {
      var o = t.length, a = n.length;
      if (o == 0 || a == 0)
        return 0;
      o > a ? t = t.substring(o - a) : o < a && (n = n.substring(0, o));
      var l = Math.min(o, a);
      if (t == n)
        return l;
      for (var i = 0, s = 1; ; ) {
        var d = t.substring(l - s), g = n.indexOf(d);
        if (g == -1)
          return i;
        s += g, (g == 0 || t.substring(l - s) == n.substring(0, s)) && (i = s, s++);
      }
    }, r.prototype.diff_halfMatch_ = function(t, n) {
      if (this.Diff_Timeout <= 0)
        return null;
      var o = t.length > n.length ? t : n, a = t.length > n.length ? n : t;
      if (o.length < 4 || a.length * 2 < o.length)
        return null;
      var l = this;
      function i(x, I, S) {
        for (var O = x.substring(S, S + Math.floor(x.length / 4)), B = -1, G = "", L, Q, V, te; (B = I.indexOf(O, B + 1)) != -1; ) {
          var ie = l.diff_commonPrefix(
            x.substring(S),
            I.substring(B)
          ), ee = l.diff_commonSuffix(
            x.substring(0, S),
            I.substring(0, B)
          );
          G.length < ee + ie && (G = I.substring(B - ee, B) + I.substring(B, B + ie), L = x.substring(0, S - ee), Q = x.substring(S + ie), V = I.substring(0, B - ee), te = I.substring(B + ie));
        }
        return G.length * 2 >= x.length ? [
          L,
          Q,
          V,
          te,
          G
        ] : null;
      }
      var s = i(
        o,
        a,
        Math.ceil(o.length / 4)
      ), d = i(
        o,
        a,
        Math.ceil(o.length / 2)
      ), g;
      if (!s && !d)
        return null;
      d ? s ? g = s[4].length > d[4].length ? s : d : g = d : g = s;
      var v, m, y, _;
      t.length > n.length ? (v = g[0], m = g[1], y = g[2], _ = g[3]) : (y = g[0], _ = g[1], v = g[2], m = g[3]);
      var k = g[4];
      return [v, m, y, _, k];
    }, r.prototype.diff_cleanupSemantic = function(t) {
      for (var n = !1, o = [], a = 0, l = null, i = 0, s = 0, d = 0, g = 0, v = 0; i < t.length; )
        t[i][0] == b ? (o[a++] = i, s = g, d = v, g = 0, v = 0, l = t[i][1]) : (t[i][0] == p ? g += t[i][1].length : v += t[i][1].length, l && l.length <= Math.max(s, d) && l.length <= Math.max(
          g,
          v
        ) && (t.splice(
          o[a - 1],
          0,
          new r.Diff(c, l)
        ), t[o[a - 1] + 1][0] = p, a--, a--, i = a > 0 ? o[a - 1] : -1, s = 0, d = 0, g = 0, v = 0, l = null, n = !0)), i++;
      for (n && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), i = 1; i < t.length; ) {
        if (t[i - 1][0] == c && t[i][0] == p) {
          var m = t[i - 1][1], y = t[i][1], _ = this.diff_commonOverlap_(m, y), k = this.diff_commonOverlap_(y, m);
          _ >= k ? (_ >= m.length / 2 || _ >= y.length / 2) && (t.splice(i, 0, new r.Diff(
            b,
            y.substring(0, _)
          )), t[i - 1][1] = m.substring(0, m.length - _), t[i + 1][1] = y.substring(_), i++) : (k >= m.length / 2 || k >= y.length / 2) && (t.splice(i, 0, new r.Diff(
            b,
            m.substring(0, k)
          )), t[i - 1][0] = p, t[i - 1][1] = y.substring(0, y.length - k), t[i + 1][0] = c, t[i + 1][1] = m.substring(k), i++), i++;
        }
        i++;
      }
    }, r.prototype.diff_cleanupSemanticLossless = function(t) {
      function n(k, x) {
        if (!k || !x)
          return 6;
        var I = k.charAt(k.length - 1), S = x.charAt(0), O = I.match(r.nonAlphaNumericRegex_), B = S.match(r.nonAlphaNumericRegex_), G = O && I.match(r.whitespaceRegex_), L = B && S.match(r.whitespaceRegex_), Q = G && I.match(r.linebreakRegex_), V = L && S.match(r.linebreakRegex_), te = Q && k.match(r.blanklineEndRegex_), ie = V && x.match(r.blanklineStartRegex_);
        return te || ie ? 5 : Q || V ? 4 : O && !G && L ? 3 : G || L ? 2 : O || B ? 1 : 0;
      }
      for (var o = 1; o < t.length - 1; ) {
        if (t[o - 1][0] == b && t[o + 1][0] == b) {
          var a = t[o - 1][1], l = t[o][1], i = t[o + 1][1], s = this.diff_commonSuffix(a, l);
          if (s) {
            var d = l.substring(l.length - s);
            a = a.substring(0, a.length - s), l = d + l.substring(0, l.length - s), i = d + i;
          }
          for (var g = a, v = l, m = i, y = n(a, l) + n(l, i); l.charAt(0) === i.charAt(0); ) {
            a += l.charAt(0), l = l.substring(1) + i.charAt(0), i = i.substring(1);
            var _ = n(a, l) + n(l, i);
            _ >= y && (y = _, g = a, v = l, m = i);
          }
          t[o - 1][1] != g && (g ? t[o - 1][1] = g : (t.splice(o - 1, 1), o--), t[o][1] = v, m ? t[o + 1][1] = m : (t.splice(o + 1, 1), o--));
        }
        o++;
      }
    }, r.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, r.whitespaceRegex_ = /\s/, r.linebreakRegex_ = /[\r\n]/, r.blanklineEndRegex_ = /\n\r?\n$/, r.blanklineStartRegex_ = /^\r?\n\r?\n/, r.prototype.diff_cleanupEfficiency = function(t) {
      for (var n = !1, o = [], a = 0, l = null, i = 0, s = !1, d = !1, g = !1, v = !1; i < t.length; )
        t[i][0] == b ? (t[i][1].length < this.Diff_EditCost && (g || v) ? (o[a++] = i, s = g, d = v, l = t[i][1]) : (a = 0, l = null), g = v = !1) : (t[i][0] == c ? v = !0 : g = !0, l && (s && d && g && v || l.length < this.Diff_EditCost / 2 && s + d + g + v == 3) && (t.splice(
          o[a - 1],
          0,
          new r.Diff(c, l)
        ), t[o[a - 1] + 1][0] = p, a--, l = null, s && d ? (g = v = !0, a = 0) : (a--, i = a > 0 ? o[a - 1] : -1, g = v = !1), n = !0)), i++;
      n && this.diff_cleanupMerge(t);
    }, r.prototype.diff_cleanupMerge = function(t) {
      t.push(new r.Diff(b, ""));
      for (var n = 0, o = 0, a = 0, l = "", i = "", s; n < t.length; )
        switch (t[n][0]) {
          case p:
            a++, i += t[n][1], n++;
            break;
          case c:
            o++, l += t[n][1], n++;
            break;
          case b:
            o + a > 1 ? (o !== 0 && a !== 0 && (s = this.diff_commonPrefix(i, l), s !== 0 && (n - o - a > 0 && t[n - o - a - 1][0] == b ? t[n - o - a - 1][1] += i.substring(0, s) : (t.splice(0, 0, new r.Diff(
              b,
              i.substring(0, s)
            )), n++), i = i.substring(s), l = l.substring(s)), s = this.diff_commonSuffix(i, l), s !== 0 && (t[n][1] = i.substring(i.length - s) + t[n][1], i = i.substring(0, i.length - s), l = l.substring(0, l.length - s))), n -= o + a, t.splice(n, o + a), l.length && (t.splice(
              n,
              0,
              new r.Diff(c, l)
            ), n++), i.length && (t.splice(
              n,
              0,
              new r.Diff(p, i)
            ), n++), n++) : n !== 0 && t[n - 1][0] == b ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, a = 0, o = 0, l = "", i = "";
            break;
        }
      t[t.length - 1][1] === "" && t.pop();
      var d = !1;
      for (n = 1; n < t.length - 1; )
        t[n - 1][0] == b && t[n + 1][0] == b && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), d = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), d = !0)), n++;
      d && this.diff_cleanupMerge(t);
    }, r.prototype.diff_xIndex = function(t, n) {
      var o = 0, a = 0, l = 0, i = 0, s;
      for (s = 0; s < t.length && (t[s][0] !== p && (o += t[s][1].length), t[s][0] !== c && (a += t[s][1].length), !(o > n)); s++)
        l = o, i = a;
      return t.length != s && t[s][0] === c ? i : i + (n - l);
    }, r.prototype.diff_prettyHtml = function(t) {
      for (var n = [], o = /&/g, a = /</g, l = />/g, i = /\n/g, s = 0; s < t.length; s++) {
        var d = t[s][0], g = t[s][1], v = g.replace(o, "&amp;").replace(a, "&lt;").replace(l, "&gt;").replace(i, "&para;<br>");
        switch (d) {
          case p:
            n[s] = '<ins style="background:#e6ffe6;">' + v + "</ins>";
            break;
          case c:
            n[s] = '<del style="background:#ffe6e6;">' + v + "</del>";
            break;
          case b:
            n[s] = "<span>" + v + "</span>";
            break;
        }
      }
      return n.join("");
    }, r.prototype.diff_text1 = function(t) {
      for (var n = [], o = 0; o < t.length; o++)
        t[o][0] !== p && (n[o] = t[o][1]);
      return n.join("");
    }, r.prototype.diff_text2 = function(t) {
      for (var n = [], o = 0; o < t.length; o++)
        t[o][0] !== c && (n[o] = t[o][1]);
      return n.join("");
    }, r.prototype.diff_levenshtein = function(t) {
      for (var n = 0, o = 0, a = 0, l = 0; l < t.length; l++) {
        var i = t[l][0], s = t[l][1];
        switch (i) {
          case p:
            o += s.length;
            break;
          case c:
            a += s.length;
            break;
          case b:
            n += Math.max(o, a), o = 0, a = 0;
            break;
        }
      }
      return n += Math.max(o, a), n;
    }, r.prototype.diff_toDelta = function(t) {
      for (var n = [], o = 0; o < t.length; o++)
        switch (t[o][0]) {
          case p:
            n[o] = "+" + encodeURI(t[o][1]);
            break;
          case c:
            n[o] = "-" + t[o][1].length;
            break;
          case b:
            n[o] = "=" + t[o][1].length;
            break;
        }
      return n.join("	").replace(/%20/g, " ");
    }, r.prototype.diff_fromDelta = function(t, n) {
      for (var o = [], a = 0, l = 0, i = n.split(/\t/g), s = 0; s < i.length; s++) {
        var d = i[s].substring(1);
        switch (i[s].charAt(0)) {
          case "+":
            try {
              o[a++] = new r.Diff(p, decodeURI(d));
            } catch {
              throw new Error("Illegal escape in diff_fromDelta: " + d);
            }
            break;
          case "-":
          case "=":
            var g = parseInt(d, 10);
            if (isNaN(g) || g < 0)
              throw new Error("Invalid number in diff_fromDelta: " + d);
            var v = t.substring(l, l += g);
            i[s].charAt(0) == "=" ? o[a++] = new r.Diff(b, v) : o[a++] = new r.Diff(c, v);
            break;
          default:
            if (i[s])
              throw new Error("Invalid diff operation in diff_fromDelta: " + i[s]);
        }
      }
      if (l != t.length)
        throw new Error("Delta length (" + l + ") does not equal source text length (" + t.length + ").");
      return o;
    }, r.prototype.match_main = function(t, n, o) {
      if (t == null || n == null || o == null)
        throw new Error("Null input. (match_main)");
      return o = Math.max(0, Math.min(o, t.length)), t == n ? 0 : t.length ? t.substring(o, o + n.length) == n ? o : this.match_bitap_(t, n, o) : -1;
    }, r.prototype.match_bitap_ = function(t, n, o) {
      if (n.length > this.Match_MaxBits)
        throw new Error("Pattern too long for this browser.");
      var a = this.match_alphabet_(n), l = this;
      function i(L, Q) {
        var V = L / n.length, te = Math.abs(o - Q);
        return l.Match_Distance ? V + te / l.Match_Distance : te ? 1 : V;
      }
      var s = this.Match_Threshold, d = t.indexOf(n, o);
      d != -1 && (s = Math.min(i(0, d), s), d = t.lastIndexOf(n, o + n.length), d != -1 && (s = Math.min(i(0, d), s)));
      var g = 1 << n.length - 1;
      d = -1;
      for (var v, m, y = n.length + t.length, _, k = 0; k < n.length; k++) {
        for (v = 0, m = y; v < m; )
          i(k, o + m) <= s ? v = m : y = m, m = Math.floor((y - v) / 2 + v);
        y = m;
        var x = Math.max(1, o - m + 1), I = Math.min(o + m, t.length) + n.length, S = Array(I + 2);
        S[I + 1] = (1 << k) - 1;
        for (var O = I; O >= x; O--) {
          var B = a[t.charAt(O - 1)];
          if (k === 0 ? S[O] = (S[O + 1] << 1 | 1) & B : S[O] = (S[O + 1] << 1 | 1) & B | ((_[O + 1] | _[O]) << 1 | 1) | _[O + 1], S[O] & g) {
            var G = i(k, O - 1);
            if (G <= s)
              if (s = G, d = O - 1, d > o)
                x = Math.max(1, 2 * o - d);
              else
                break;
          }
        }
        if (i(k + 1, o) > s)
          break;
        _ = S;
      }
      return d;
    }, r.prototype.match_alphabet_ = function(t) {
      for (var n = {}, o = 0; o < t.length; o++)
        n[t.charAt(o)] = 0;
      for (var o = 0; o < t.length; o++)
        n[t.charAt(o)] |= 1 << t.length - o - 1;
      return n;
    }, r.prototype.patch_addContext_ = function(t, n) {
      if (n.length != 0) {
        if (t.start2 === null)
          throw Error("patch not initialized");
        for (var o = n.substring(t.start2, t.start2 + t.length1), a = 0; n.indexOf(o) != n.lastIndexOf(o) && o.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
          a += this.Patch_Margin, o = n.substring(
            t.start2 - a,
            t.start2 + t.length1 + a
          );
        a += this.Patch_Margin;
        var l = n.substring(t.start2 - a, t.start2);
        l && t.diffs.unshift(new r.Diff(b, l));
        var i = n.substring(
          t.start2 + t.length1,
          t.start2 + t.length1 + a
        );
        i && t.diffs.push(new r.Diff(b, i)), t.start1 -= l.length, t.start2 -= l.length, t.length1 += l.length + i.length, t.length2 += l.length + i.length;
      }
    }, r.prototype.patch_make = function(t, n, o) {
      var a, l;
      if (typeof t == "string" && typeof n == "string" && typeof o > "u")
        a = /** @type {string} */
        t, l = this.diff_main(
          a,
          /** @type {string} */
          n,
          !0
        ), l.length > 2 && (this.diff_cleanupSemantic(l), this.diff_cleanupEfficiency(l));
      else if (t && typeof t == "object" && typeof n > "u" && typeof o > "u")
        l = /** @type {!Array.<!diff_match_patch.Diff>} */
        t, a = this.diff_text1(l);
      else if (typeof t == "string" && n && typeof n == "object" && typeof o > "u")
        a = /** @type {string} */
        t, l = /** @type {!Array.<!diff_match_patch.Diff>} */
        n;
      else if (typeof t == "string" && typeof n == "string" && o && typeof o == "object")
        a = /** @type {string} */
        t, l = /** @type {!Array.<!diff_match_patch.Diff>} */
        o;
      else
        throw new Error("Unknown call format to patch_make.");
      if (l.length === 0)
        return [];
      for (var i = [], s = new r.patch_obj(), d = 0, g = 0, v = 0, m = a, y = a, _ = 0; _ < l.length; _++) {
        var k = l[_][0], x = l[_][1];
        switch (!d && k !== b && (s.start1 = g, s.start2 = v), k) {
          case p:
            s.diffs[d++] = l[_], s.length2 += x.length, y = y.substring(0, v) + x + y.substring(v);
            break;
          case c:
            s.length1 += x.length, s.diffs[d++] = l[_], y = y.substring(0, v) + y.substring(v + x.length);
            break;
          case b:
            x.length <= 2 * this.Patch_Margin && d && l.length != _ + 1 ? (s.diffs[d++] = l[_], s.length1 += x.length, s.length2 += x.length) : x.length >= 2 * this.Patch_Margin && d && (this.patch_addContext_(s, m), i.push(s), s = new r.patch_obj(), d = 0, m = y, g = v);
            break;
        }
        k !== p && (g += x.length), k !== c && (v += x.length);
      }
      return d && (this.patch_addContext_(s, m), i.push(s)), i;
    }, r.prototype.patch_deepCopy = function(t) {
      for (var n = [], o = 0; o < t.length; o++) {
        var a = t[o], l = new r.patch_obj();
        l.diffs = [];
        for (var i = 0; i < a.diffs.length; i++)
          l.diffs[i] = new r.Diff(a.diffs[i][0], a.diffs[i][1]);
        l.start1 = a.start1, l.start2 = a.start2, l.length1 = a.length1, l.length2 = a.length2, n[o] = l;
      }
      return n;
    }, r.prototype.patch_apply = function(t, n) {
      if (t.length == 0)
        return [n, []];
      t = this.patch_deepCopy(t);
      var o = this.patch_addPadding(t);
      n = o + n + o, this.patch_splitMax(t);
      for (var a = 0, l = [], i = 0; i < t.length; i++) {
        var s = t[i].start2 + a, d = this.diff_text1(t[i].diffs), g, v = -1;
        if (d.length > this.Match_MaxBits ? (g = this.match_main(
          n,
          d.substring(0, this.Match_MaxBits),
          s
        ), g != -1 && (v = this.match_main(
          n,
          d.substring(d.length - this.Match_MaxBits),
          s + d.length - this.Match_MaxBits
        ), (v == -1 || g >= v) && (g = -1))) : g = this.match_main(n, d, s), g == -1)
          l[i] = !1, a -= t[i].length2 - t[i].length1;
        else {
          l[i] = !0, a = g - s;
          var m;
          if (v == -1 ? m = n.substring(g, g + d.length) : m = n.substring(g, v + this.Match_MaxBits), d == m)
            n = n.substring(0, g) + this.diff_text2(t[i].diffs) + n.substring(g + d.length);
          else {
            var y = this.diff_main(d, m, !1);
            if (d.length > this.Match_MaxBits && this.diff_levenshtein(y) / d.length > this.Patch_DeleteThreshold)
              l[i] = !1;
            else {
              this.diff_cleanupSemanticLossless(y);
              for (var _ = 0, k, x = 0; x < t[i].diffs.length; x++) {
                var I = t[i].diffs[x];
                I[0] !== b && (k = this.diff_xIndex(y, _)), I[0] === p ? n = n.substring(0, g + k) + I[1] + n.substring(g + k) : I[0] === c && (n = n.substring(0, g + k) + n.substring(g + this.diff_xIndex(
                  y,
                  _ + I[1].length
                ))), I[0] !== c && (_ += I[1].length);
              }
            }
          }
        }
      }
      return n = n.substring(o.length, n.length - o.length), [n, l];
    }, r.prototype.patch_addPadding = function(t) {
      for (var n = this.Patch_Margin, o = "", a = 1; a <= n; a++)
        o += String.fromCharCode(a);
      for (var a = 0; a < t.length; a++)
        t[a].start1 += n, t[a].start2 += n;
      var l = t[0], i = l.diffs;
      if (i.length == 0 || i[0][0] != b)
        i.unshift(new r.Diff(b, o)), l.start1 -= n, l.start2 -= n, l.length1 += n, l.length2 += n;
      else if (n > i[0][1].length) {
        var s = n - i[0][1].length;
        i[0][1] = o.substring(i[0][1].length) + i[0][1], l.start1 -= s, l.start2 -= s, l.length1 += s, l.length2 += s;
      }
      if (l = t[t.length - 1], i = l.diffs, i.length == 0 || i[i.length - 1][0] != b)
        i.push(new r.Diff(b, o)), l.length1 += n, l.length2 += n;
      else if (n > i[i.length - 1][1].length) {
        var s = n - i[i.length - 1][1].length;
        i[i.length - 1][1] += o.substring(0, s), l.length1 += s, l.length2 += s;
      }
      return o;
    }, r.prototype.patch_splitMax = function(t) {
      for (var n = this.Match_MaxBits, o = 0; o < t.length; o++)
        if (!(t[o].length1 <= n)) {
          var a = t[o];
          t.splice(o--, 1);
          for (var l = a.start1, i = a.start2, s = ""; a.diffs.length !== 0; ) {
            var d = new r.patch_obj(), g = !0;
            for (d.start1 = l - s.length, d.start2 = i - s.length, s !== "" && (d.length1 = d.length2 = s.length, d.diffs.push(new r.Diff(b, s))); a.diffs.length !== 0 && d.length1 < n - this.Patch_Margin; ) {
              var v = a.diffs[0][0], m = a.diffs[0][1];
              v === p ? (d.length2 += m.length, i += m.length, d.diffs.push(a.diffs.shift()), g = !1) : v === c && d.diffs.length == 1 && d.diffs[0][0] == b && m.length > 2 * n ? (d.length1 += m.length, l += m.length, g = !1, d.diffs.push(new r.Diff(v, m)), a.diffs.shift()) : (m = m.substring(
                0,
                n - d.length1 - this.Patch_Margin
              ), d.length1 += m.length, l += m.length, v === b ? (d.length2 += m.length, i += m.length) : g = !1, d.diffs.push(new r.Diff(v, m)), m == a.diffs[0][1] ? a.diffs.shift() : a.diffs[0][1] = a.diffs[0][1].substring(m.length));
            }
            s = this.diff_text2(d.diffs), s = s.substring(s.length - this.Patch_Margin);
            var y = this.diff_text1(a.diffs).substring(0, this.Patch_Margin);
            y !== "" && (d.length1 += y.length, d.length2 += y.length, d.diffs.length !== 0 && d.diffs[d.diffs.length - 1][0] === b ? d.diffs[d.diffs.length - 1][1] += y : d.diffs.push(new r.Diff(b, y))), g || t.splice(++o, 0, d);
          }
        }
    }, r.prototype.patch_toText = function(t) {
      for (var n = [], o = 0; o < t.length; o++)
        n[o] = t[o];
      return n.join("");
    }, r.prototype.patch_fromText = function(t) {
      var n = [];
      if (!t)
        return n;
      for (var o = t.split(`
`), a = 0, l = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; a < o.length; ) {
        var i = o[a].match(l);
        if (!i)
          throw new Error("Invalid patch string: " + o[a]);
        var s = new r.patch_obj();
        for (n.push(s), s.start1 = parseInt(i[1], 10), i[2] === "" ? (s.start1--, s.length1 = 1) : i[2] == "0" ? s.length1 = 0 : (s.start1--, s.length1 = parseInt(i[2], 10)), s.start2 = parseInt(i[3], 10), i[4] === "" ? (s.start2--, s.length2 = 1) : i[4] == "0" ? s.length2 = 0 : (s.start2--, s.length2 = parseInt(i[4], 10)), a++; a < o.length; ) {
          var d = o[a].charAt(0);
          try {
            var g = decodeURI(o[a].substring(1));
          } catch {
            throw new Error("Illegal escape in patch_fromText: " + g);
          }
          if (d == "-")
            s.diffs.push(new r.Diff(c, g));
          else if (d == "+")
            s.diffs.push(new r.Diff(p, g));
          else if (d == " ")
            s.diffs.push(new r.Diff(b, g));
          else {
            if (d == "@")
              break;
            if (d !== "")
              throw new Error('Invalid patch mode "' + d + '" in: ' + g);
          }
          a++;
        }
      }
      return n;
    }, r.patch_obj = function() {
      this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
    }, r.patch_obj.prototype.toString = function() {
      var t, n;
      this.length1 === 0 ? t = this.start1 + ",0" : this.length1 == 1 ? t = this.start1 + 1 : t = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? n = this.start2 + ",0" : this.length2 == 1 ? n = this.start2 + 1 : n = this.start2 + 1 + "," + this.length2;
      for (var o = ["@@ -" + t + " +" + n + ` @@
`], a, l = 0; l < this.diffs.length; l++) {
        switch (this.diffs[l][0]) {
          case p:
            a = "+";
            break;
          case c:
            a = "-";
            break;
          case b:
            a = " ";
            break;
        }
        o[l + 1] = a + encodeURI(this.diffs[l][1]) + `
`;
      }
      return o.join("").replace(/%20/g, " ");
    }, e.exports = r, e.exports.diff_match_patch = r, e.exports.DIFF_DELETE = c, e.exports.DIFF_INSERT = p, e.exports.DIFF_EQUAL = b;
  }(ro)), ro.exports;
}
var Dn = vr(), Ln, io;
function yr() {
  if (io)
    return Ln;
  io = 1;
  function e(f) {
    return f instanceof Map ? f.clear = f.delete = f.set = function() {
      throw new Error("map is read-only");
    } : f instanceof Set && (f.add = f.clear = f.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(f), Object.getOwnPropertyNames(f).forEach((E) => {
      const C = f[E], q = typeof C;
      (q === "object" || q === "function") && !Object.isFrozen(C) && e(C);
    }), f;
  }
  class r {
    /**
     * @param {CompiledMode} mode
     */
    constructor(E) {
      E.data === void 0 && (E.data = {}), this.data = E.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function c(f) {
    return f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function p(f, ...E) {
    const C = /* @__PURE__ */ Object.create(null);
    for (const q in f)
      C[q] = f[q];
    return E.forEach(function(q) {
      for (const ce in q)
        C[ce] = q[ce];
    }), /** @type {T} */
    C;
  }
  const b = "</span>", t = (f) => !!f.scope, n = (f, { prefix: E }) => {
    if (f.startsWith("language:"))
      return f.replace("language:", "language-");
    if (f.includes(".")) {
      const C = f.split(".");
      return [
        `${E}${C.shift()}`,
        ...C.map((q, ce) => `${q}${"_".repeat(ce + 1)}`)
      ].join(" ");
    }
    return `${E}${f}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(E, C) {
      this.buffer = "", this.classPrefix = C.classPrefix, E.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(E) {
      this.buffer += c(E);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(E) {
      if (!t(E))
        return;
      const C = n(
        E.scope,
        { prefix: this.classPrefix }
      );
      this.span(C);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(E) {
      t(E) && (this.buffer += b);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(E) {
      this.buffer += `<span class="${E}">`;
    }
  }
  const a = (f = {}) => {
    const E = { children: [] };
    return Object.assign(E, f), E;
  };
  class l {
    constructor() {
      this.rootNode = a(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(E) {
      this.top.children.push(E);
    }
    /** @param {string} scope */
    openNode(E) {
      const C = a({ scope: E });
      this.add(C), this.stack.push(C);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); )
        ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(E) {
      return this.constructor._walk(E, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(E, C) {
      return typeof C == "string" ? E.addText(C) : C.children && (E.openNode(C), C.children.forEach((q) => this._walk(E, q)), E.closeNode(C)), E;
    }
    /**
     * @param {Node} node
     */
    static _collapse(E) {
      typeof E != "string" && E.children && (E.children.every((C) => typeof C == "string") ? E.children = [E.children.join("")] : E.children.forEach((C) => {
        l._collapse(C);
      }));
    }
  }
  class i extends l {
    /**
     * @param {*} options
     */
    constructor(E) {
      super(), this.options = E;
    }
    /**
     * @param {string} text
     */
    addText(E) {
      E !== "" && this.add(E);
    }
    /** @param {string} scope */
    startScope(E) {
      this.openNode(E);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(E, C) {
      const q = E.root;
      C && (q.scope = `language:${C}`), this.add(q);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function s(f) {
    return f ? typeof f == "string" ? f : f.source : null;
  }
  function d(f) {
    return m("(?=", f, ")");
  }
  function g(f) {
    return m("(?:", f, ")*");
  }
  function v(f) {
    return m("(?:", f, ")?");
  }
  function m(...f) {
    return f.map((E) => s(E)).join("");
  }
  function y(f) {
    const E = f[f.length - 1];
    return typeof E == "object" && E.constructor === Object ? (f.splice(f.length - 1, 1), E) : {};
  }
  function _(...f) {
    return "(" + (y(f).capture ? "" : "?:") + f.map((E) => s(E)).join("|") + ")";
  }
  function k(f) {
    return new RegExp(f.toString() + "|").exec("").length - 1;
  }
  function x(f, E) {
    const C = f && f.exec(E);
    return C && C.index === 0;
  }
  const I = new RegExp(_(
    /\[(?:[^\\\]]|\\.)*\]/,
    // a character class, inside which ( and \ lose their meaning
    /\(\?<(?![=!])[^>]+>/,
    // a named capture group `(?<name>` (not a lookbehind `(?<=` / `(?<!`)
    /\(\?'[^']+'/,
    // a named capture group `(?'name'`
    /\(\??/,
    // an opening parenthesis, capturing or non-capturing / lookahead
    /\\([1-9][0-9]*)/,
    // a backreference like `\1`
    /\\./
    // any other escape sequence
  ));
  function S(f, { joinWith: E }) {
    let C = 0;
    return f.map((q) => {
      C += 1;
      const ce = C;
      let se = s(q), z = "";
      for (; se.length > 0; ) {
        const j = I.exec(se);
        if (!j) {
          z += se;
          break;
        }
        z += se.substring(0, j.index), se = se.substring(j.index + j[0].length), j[0][0] === "\\" && j[1] ? z += "\\" + String(Number(j[1]) + ce) : (z += j[0], (j[0] === "(" || /^\(\?[<']/.test(j[0])) && C++);
      }
      return z;
    }).map((q) => `(${q})`).join(E);
  }
  const O = /\b\B/, B = "[a-zA-Z]\\w*", G = "[a-zA-Z_]\\w*", L = "\\b\\d+(\\.\\d+)?", Q = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", V = "\\b(0b[01]+)", te = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", ie = (f = {}) => {
    const E = /^#![ ]*\//;
    return f.binary && (f.begin = m(
      E,
      /.*\b/,
      f.binary,
      /\b.*/
    )), p({
      scope: "meta",
      begin: E,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (C, q) => {
        C.index !== 0 && q.ignoreMatch();
      }
    }, f);
  }, ee = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, re = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [ee]
  }, ye = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [ee]
  }, le = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, ge = function(f, E, C = {}) {
    const q = p(
      {
        scope: "comment",
        begin: f,
        end: E,
        contains: []
      },
      C
    );
    q.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const ce = _(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return q.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: m(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ce,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), q;
  }, Te = ge("//", "$"), Ze = ge("/\\*", "\\*/"), ke = ge("#", "$"), We = {
    scope: "number",
    begin: L,
    relevance: 0
  }, yn = {
    scope: "number",
    begin: Q,
    relevance: 0
  }, xt = {
    scope: "number",
    begin: V,
    relevance: 0
  }, ft = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      ee,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [ee]
      }
    ]
  }, en = {
    scope: "title",
    begin: B,
    relevance: 0
  }, $e = {
    scope: "title",
    begin: G,
    relevance: 0
  }, _t = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + G,
    relevance: 0
  };
  var Et = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: re,
    BACKSLASH_ESCAPE: ee,
    BINARY_NUMBER_MODE: xt,
    BINARY_NUMBER_RE: V,
    COMMENT: ge,
    C_BLOCK_COMMENT_MODE: Ze,
    C_LINE_COMMENT_MODE: Te,
    C_NUMBER_MODE: yn,
    C_NUMBER_RE: Q,
    END_SAME_AS_BEGIN: function(f) {
      return Object.assign(
        f,
        {
          /** @type {ModeCallback} */
          "on:begin": (E, C) => {
            C.data._beginMatch = E[1];
          },
          /** @type {ModeCallback} */
          "on:end": (E, C) => {
            C.data._beginMatch !== E[1] && C.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: ke,
    IDENT_RE: B,
    MATCH_NOTHING_RE: O,
    METHOD_GUARD: _t,
    NUMBER_MODE: We,
    NUMBER_RE: L,
    PHRASAL_WORDS_MODE: le,
    QUOTE_STRING_MODE: ye,
    REGEXP_MODE: ft,
    RE_STARTERS_RE: te,
    SHEBANG: ie,
    TITLE_MODE: en,
    UNDERSCORE_IDENT_RE: G,
    UNDERSCORE_TITLE_MODE: $e
  });
  function wn(f, E) {
    f.input[f.index - 1] === "." && E.ignoreMatch();
  }
  function xn(f, E) {
    f.className !== void 0 && (f.scope = f.className, delete f.className);
  }
  function _n(f, E) {
    E && f.beginKeywords && (f.begin = "\\b(" + f.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", f.__beforeBegin = wn, f.keywords = f.keywords || f.beginKeywords, delete f.beginKeywords, f.relevance === void 0 && (f.relevance = 0));
  }
  function Ie(f, E) {
    Array.isArray(f.illegal) && (f.illegal = _(...f.illegal));
  }
  function Ct(f, E) {
    if (f.match) {
      if (f.begin || f.end)
        throw new Error("begin & end are not supported with match");
      f.begin = f.match, delete f.match;
    }
  }
  function En(f, E) {
    f.relevance === void 0 && (f.relevance = 1);
  }
  const Pt = (f, E) => {
    if (!f.beforeMatch)
      return;
    if (f.starts)
      throw new Error("beforeMatch cannot be used with starts");
    const C = Object.assign({}, f);
    Object.keys(f).forEach((q) => {
      delete f[q];
    }), f.keywords = C.keywords, f.begin = m(C.beforeMatch, d(C.begin)), f.starts = {
      relevance: 0,
      contains: [
        Object.assign(C, { endsParent: !0 })
      ]
    }, f.relevance = 0, delete C.beforeMatch;
  }, et = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Ce = "keyword";
  function jt(f, E, C = Ce) {
    const q = /* @__PURE__ */ Object.create(null);
    return typeof f == "string" ? ce(C, f.split(" ")) : Array.isArray(f) ? ce(C, f) : Object.keys(f).forEach(function(se) {
      Object.assign(
        q,
        jt(f[se], E, se)
      );
    }), q;
    function ce(se, z) {
      E && (z = z.map((j) => j.toLowerCase())), z.forEach(function(j) {
        const Z = j.split("|");
        q[Z[0]] = [se, tn(Z[0], Z[1])];
      });
    }
  }
  function tn(f, E) {
    return E ? Number(E) : Bt(f) ? 0 : 1;
  }
  function Bt(f) {
    return et.includes(f.toLowerCase());
  }
  const nn = {}, Pe = (f) => {
    console.error(f);
  }, zt = (f, ...E) => {
    console.log(`WARN: ${f}`, ...E);
  }, Ye = (f, E) => {
    nn[`${f}/${E}`] || (console.log(`Deprecated as of ${f}. ${E}`), nn[`${f}/${E}`] = !0);
  }, tt = new Error();
  function on(f, E, { key: C }) {
    let q = 0;
    const ce = f[C], se = {}, z = {};
    for (let j = 1; j <= E.length; j++)
      z[j + q] = ce[j], se[j + q] = !0, q += k(E[j - 1]);
    f[C] = z, f[C]._emit = se, f[C]._multi = !0;
  }
  function gt(f) {
    if (Array.isArray(f.begin)) {
      if (f.skip || f.excludeBegin || f.returnBegin)
        throw Pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), tt;
      if (typeof f.beginScope != "object" || f.beginScope === null)
        throw Pe("beginScope must be object"), tt;
      on(f, f.begin, { key: "beginScope" }), f.begin = S(f.begin, { joinWith: "" });
    }
  }
  function kt(f) {
    if (Array.isArray(f.end)) {
      if (f.skip || f.excludeEnd || f.returnEnd)
        throw Pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), tt;
      if (typeof f.endScope != "object" || f.endScope === null)
        throw Pe("endScope must be object"), tt;
      on(f, f.end, { key: "endScope" }), f.end = S(f.end, { joinWith: "" });
    }
  }
  function At(f) {
    f.scope && typeof f.scope == "object" && f.scope !== null && (f.beginScope = f.scope, delete f.scope);
  }
  function Ut(f) {
    At(f), typeof f.beginScope == "string" && (f.beginScope = { _wrap: f.beginScope }), typeof f.endScope == "string" && (f.endScope = { _wrap: f.endScope }), gt(f), kt(f);
  }
  function we(f) {
    function E(z, j) {
      return new RegExp(
        s(z),
        "m" + (f.case_insensitive ? "i" : "") + (f.unicodeRegex ? "u" : "") + (j ? "g" : "")
      );
    }
    class C {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(j, Z) {
        Z.position = this.position++, this.matchIndexes[this.matchAt] = Z, this.regexes.push([Z, j]), this.matchAt += k(j) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const j = this.regexes.map((Z) => Z[1]);
        this.matcherRe = E(S(j, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(j) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Z = this.matcherRe.exec(j);
        if (!Z)
          return null;
        const pe = Z.findIndex((ht, pt) => pt > 0 && ht !== void 0), ue = this.matchIndexes[pe];
        return Z.splice(0, pe), Object.assign(Z, ue);
      }
    }
    class q {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(j) {
        if (this.multiRegexes[j])
          return this.multiRegexes[j];
        const Z = new C();
        return this.rules.slice(j).forEach(([pe, ue]) => Z.addRule(pe, ue)), Z.compile(), this.multiRegexes[j] = Z, Z;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(j, Z) {
        this.rules.push([j, Z]), Z.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(j) {
        const Z = this.getMatcher(this.regexIndex);
        Z.lastIndex = this.lastIndex;
        let pe = Z.exec(j);
        if (this.resumingScanAtSamePosition() && !(pe && pe.index === this.lastIndex)) {
          const ue = this.getMatcher(0);
          ue.lastIndex = this.lastIndex + 1, pe = ue.exec(j);
        }
        return pe && (this.regexIndex += pe.position + 1, this.regexIndex === this.count && this.considerAll()), pe;
      }
    }
    function ce(z) {
      const j = new q();
      return z.contains.forEach((Z) => j.addRule(Z.begin, { rule: Z, type: "begin" })), z.terminatorEnd && j.addRule(z.terminatorEnd, { type: "end" }), z.illegal && j.addRule(z.illegal, { type: "illegal" }), j;
    }
    function se(z, j) {
      const Z = (
        /** @type CompiledMode */
        z
      );
      if (z.isCompiled)
        return Z;
      [
        xn,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ct,
        Ut,
        Pt
      ].forEach((ue) => ue(z, j)), f.compilerExtensions.forEach((ue) => ue(z, j)), z.__beforeBegin = null, [
        _n,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Ie,
        // default to 1 relevance if not specified
        En
      ].forEach((ue) => ue(z, j)), z.isCompiled = !0;
      let pe = null;
      return typeof z.keywords == "object" && z.keywords.$pattern && (z.keywords = Object.assign({}, z.keywords), pe = z.keywords.$pattern, delete z.keywords.$pattern), pe = pe || /\w+/, z.keywords && (z.keywords = jt(z.keywords, f.case_insensitive)), Z.keywordPatternRe = E(pe, !0), j && (z.begin || (z.begin = /\B|\b/), Z.beginRe = E(Z.begin), !z.end && !z.endsWithParent && (z.end = /\B|\b/), z.end && (Z.endRe = E(Z.end)), Z.terminatorEnd = s(Z.end) || "", z.endsWithParent && j.terminatorEnd && (Z.terminatorEnd += (z.end ? "|" : "") + j.terminatorEnd)), z.illegal && (Z.illegalRe = E(
        /** @type {RegExp | string} */
        z.illegal
      )), z.contains || (z.contains = []), z.contains = [].concat(...z.contains.map(function(ue) {
        return nt(ue === "self" ? z : ue);
      })), z.contains.forEach(function(ue) {
        se(
          /** @type Mode */
          ue,
          Z
        );
      }), z.starts && se(z.starts, j), Z.matcher = ce(Z), Z;
    }
    if (f.compilerExtensions || (f.compilerExtensions = []), f.contains && f.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return f.classNameAliases = p(f.classNameAliases || {}), se(
      /** @type Mode */
      f
    );
  }
  function Ft(f) {
    return f ? f.endsWithParent || Ft(f.starts) : !1;
  }
  function nt(f) {
    return f.variants && !f.cachedVariants && (f.cachedVariants = f.variants.map(function(E) {
      return p(f, { variants: null }, E);
    })), f.cachedVariants ? f.cachedVariants : Ft(f) ? p(f, { starts: f.starts ? p(f.starts) : null }) : Object.isFrozen(f) ? p(f) : f;
  }
  var kn = "11.12.0";
  class ut extends Error {
    constructor(E, C) {
      super(E), this.name = "HTMLInjectionError", this.html = C;
    }
  }
  const Ht = c, Kt = p, Je = Symbol("nomatch"), bt = 7, Gt = function(f) {
    const E = /* @__PURE__ */ Object.create(null), C = /* @__PURE__ */ Object.create(null), q = [];
    let ce = !0;
    const se = "Could not find the language '{}', did you forget to load/include a language module?", z = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let j = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: i
    };
    function Z(N) {
      return j.noHighlightRe.test(N);
    }
    function pe(N) {
      let F = N.className + " ";
      F += N.parentNode ? N.parentNode.className : "";
      const $ = j.languageDetectRe.exec(F);
      if ($) {
        const ne = Be($[1]);
        return ne || (zt(se.replace("{}", $[1])), zt("Falling back to no-highlight mode for this block.", N)), ne ? $[1] : "no-highlight";
      }
      return F.split(/\s+/).find((ne) => Z(ne) || Be(ne));
    }
    function ue(N, F, $) {
      let ne = "", de = "";
      typeof F == "object" ? (ne = N, $ = F.ignoreIllegals, de = F.language) : (Ye("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ye("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), de = N, ne = F), $ === void 0 && ($ = !0);
      const Se = {
        code: ne,
        language: de
      };
      St("before:highlight", Se);
      const ze = Se.result ? Se.result : ht(Se.language, Se.code, $);
      return ze.code = Se.code, St("after:highlight", ze), ze;
    }
    function ht(N, F, $, ne) {
      const de = /* @__PURE__ */ Object.create(null);
      function Se(u, w) {
        return u.keywords[w];
      }
      function ze() {
        if (!J.keywords) {
          ve.addText(ae);
          return;
        }
        let u = 0;
        J.keywordPatternRe.lastIndex = 0;
        let w = J.keywordPatternRe.exec(ae), A = "";
        for (; w; ) {
          A += ae.substring(u, w.index);
          const H = Ne.case_insensitive ? w[0].toLowerCase() : w[0], he = Se(J, H);
          if (he) {
            const [_e, Rt] = he;
            if (ve.addText(A), A = "", de[H] = (de[H] || 0) + 1, de[H] <= bt && (Ot += Rt), _e.startsWith("_"))
              A += w[0];
            else {
              const Dt = Ne.classNameAliases[_e] || _e;
              Oe(w[0], Dt);
            }
          } else
            A += w[0];
          u = J.keywordPatternRe.lastIndex, w = J.keywordPatternRe.exec(ae);
        }
        A += ae.substring(u), ve.addText(A);
      }
      function Nt() {
        if (ae === "")
          return;
        let u = null;
        if (typeof J.subLanguage == "string") {
          if (!E[J.subLanguage]) {
            ve.addText(ae);
            return;
          }
          u = ht(J.subLanguage, ae, !0, sn[J.subLanguage]), sn[J.subLanguage] = /** @type {CompiledMode} */
          u._top;
        } else
          u = Qt(ae, J.subLanguage.length ? J.subLanguage : null);
        J.relevance > 0 && (Ot += u.relevance), ve.__addSublanguage(u._emitter, u.language);
      }
      function xe() {
        J.subLanguage != null ? Nt() : ze(), ae = "";
      }
      function Oe(u, w) {
        u !== "" && (ve.startScope(w), ve.addText(u), ve.endScope());
      }
      function Yt(u, w) {
        let A = 1;
        const H = w.length - 1;
        for (; A <= H; ) {
          if (!u._emit[A]) {
            A++;
            continue;
          }
          const he = Ne.classNameAliases[u[A]] || u[A], _e = w[A];
          he ? Oe(_e, he) : (ae = _e, ze(), ae = ""), A++;
        }
      }
      function it(u, w) {
        return u.scope && typeof u.scope == "string" && ve.openNode(Ne.classNameAliases[u.scope] || u.scope), u.beginScope && (u.beginScope._wrap ? (Oe(ae, Ne.classNameAliases[u.beginScope._wrap] || u.beginScope._wrap), ae = "") : u.beginScope._multi && (Yt(u.beginScope, w), ae = "")), J = Object.create(u, { parent: { value: J } }), J;
      }
      function lt(u, w, A) {
        let H = x(u.endRe, A);
        if (H) {
          if (u["on:end"]) {
            const he = new r(u);
            u["on:end"](w, he), he.isMatchIgnored && (H = !1);
          }
          if (H) {
            for (; u.endsParent && u.parent; )
              u = u.parent;
            return u;
          }
        }
        if (u.endsWithParent)
          return lt(u.parent, w, A);
      }
      function Jt(u) {
        return J.matcher.regexIndex === 0 ? (ae += u[0], 1) : (h = !0, 0);
      }
      function ct(u) {
        const w = u[0], A = u.rule, H = new r(A), he = [A.__beforeBegin, A["on:begin"]];
        for (const _e of he)
          if (_e && (_e(u, H), H.isMatchIgnored))
            return Jt(w);
        return A.skip ? ae += w : (A.excludeBegin && (ae += w), xe(), !A.returnBegin && !A.excludeBegin && (ae = w)), it(A, u), A.returnBegin ? 0 : w.length;
      }
      function qt(u) {
        const w = u[0], A = F.substring(u.index), H = lt(J, u, A);
        if (!H)
          return Je;
        const he = J;
        J.endScope && J.endScope._wrap ? (xe(), Oe(w, J.endScope._wrap)) : J.endScope && J.endScope._multi ? (xe(), Yt(J.endScope, u)) : he.skip ? ae += w : (he.returnEnd || he.excludeEnd || (ae += w), xe(), he.excludeEnd && (ae = w));
        do
          J.scope && ve.closeNode(), !J.skip && !J.subLanguage && (Ot += J.relevance), J = J.parent;
        while (J !== H.parent);
        return H.starts && it(H.starts, u), he.returnEnd ? 0 : w.length;
      }
      function Vt() {
        const u = [];
        for (let w = J; w !== Ne; w = w.parent)
          w.scope && u.unshift(w.scope);
        u.forEach((w) => ve.openNode(w));
      }
      let Tt = {};
      function Ue(u, w) {
        const A = w && w[0];
        if (ae += u, A == null)
          return xe(), 0;
        if (Tt.type === "begin" && w.type === "end" && Tt.index === w.index && A === "") {
          if (ae += F.slice(w.index, w.index + 1), !ce) {
            const H = new Error(`0 width match regex (${N})`);
            throw H.languageName = N, H.badRule = Tt.rule, H;
          }
          return 1;
        }
        if (Tt = w, w.type === "begin")
          return ct(w);
        if (w.type === "illegal" && !$) {
          const H = new Error('Illegal lexeme "' + A + '" for mode "' + (J.scope || "<unnamed>") + '"');
          throw H.mode = J, H;
        } else if (w.type === "end") {
          const H = qt(w);
          if (H !== Je)
            return H;
        }
        if (w.type === "illegal" && A === "")
          return w.index === F.length || (ae += `
`), 1;
        if (Xt > 1e5 && Xt > w.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ae += A, A.length;
      }
      const Ne = Be(N);
      if (!Ne)
        throw Pe(se.replace("{}", N)), new Error('Unknown language: "' + N + '"');
      const Rn = we(Ne);
      let Mt = "", J = ne || Rn;
      const sn = {}, ve = new j.__emitter(j);
      Vt();
      let ae = "", Ot = 0, qe = 0, Xt = 0, h = !1;
      try {
        if (Ne.__emitTokens)
          Ne.__emitTokens(F, ve);
        else {
          for (J.matcher.considerAll(); ; ) {
            Xt++, h ? h = !1 : J.matcher.considerAll(), J.matcher.lastIndex = qe;
            const u = J.matcher.exec(F);
            if (!u)
              break;
            const w = F.substring(qe, u.index), A = Ue(w, u);
            qe = u.index + A;
          }
          Ue(F.substring(qe));
        }
        return ve.finalize(), Mt = ve.toHTML(), {
          language: N,
          value: Mt,
          relevance: Ot,
          illegal: !1,
          _emitter: ve,
          _top: J
        };
      } catch (u) {
        if (u.message && u.message.includes("Illegal"))
          return {
            language: N,
            value: Ht(F),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: u.message,
              index: qe,
              context: F.slice(qe - 100, qe + 100),
              mode: u.mode,
              resultSoFar: Mt
            },
            _emitter: ve
          };
        if (ce)
          return {
            language: N,
            value: Ht(F),
            illegal: !1,
            relevance: 0,
            errorRaised: u,
            _emitter: ve,
            _top: J
          };
        throw u;
      }
    }
    function pt(N) {
      const F = {
        value: Ht(N),
        illegal: !1,
        relevance: 0,
        _top: z,
        _emitter: new j.__emitter(j)
      };
      return F._emitter.addText(N), F;
    }
    function Qt(N, F) {
      F = F || j.languages || Object.keys(E);
      const $ = pt(N), ne = F.filter(Be).filter(Wt).map(
        (xe) => ht(xe, N, !1)
      );
      ne.unshift($);
      const de = ne.sort((xe, Oe) => {
        if (xe.relevance !== Oe.relevance)
          return Oe.relevance - xe.relevance;
        if (xe.language && Oe.language) {
          if (Be(xe.language).supersetOf === Oe.language)
            return 1;
          if (Be(Oe.language).supersetOf === xe.language)
            return -1;
        }
        return 0;
      }), [Se, ze] = de, Nt = Se;
      return Nt.secondBest = ze, Nt;
    }
    function An(N, F, $) {
      const ne = F && C[F] || $;
      N.classList.add("hljs"), N.classList.add(`language-${ne}`);
    }
    function Zt(N) {
      let F = null;
      const $ = pe(N);
      if (Z($))
        return;
      if (St(
        "before:highlightElement",
        { el: N, language: $ }
      ), N.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", N);
        return;
      }
      if (N.children.length > 0 && (j.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(N)), j.throwUnescapedHTML))
        throw new ut(
          "One of your code blocks includes unescaped HTML.",
          N.innerHTML
        );
      F = N;
      const ne = F.textContent, de = $ ? ue(ne, { language: $, ignoreIllegals: !0 }) : Qt(ne);
      N.innerHTML = de.value, N.dataset.highlighted = "yes", An(N, $, de.language), N.result = {
        language: de.language,
        // TODO: remove with version 11.0
        re: de.relevance,
        relevance: de.relevance
      }, de.secondBest && (N.secondBest = {
        language: de.secondBest.language,
        relevance: de.secondBest.relevance
      }), St("after:highlightElement", { el: N, result: de, text: ne });
    }
    function rn(N) {
      j = Kt(j, N);
    }
    const Sn = () => {
      Ae(), Ye("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Nn() {
      Ae(), Ye("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let rt = !1;
    function Ae() {
      function N() {
        Ae();
      }
      if (document.readyState === "loading") {
        rt || window.addEventListener("DOMContentLoaded", N, !1), rt = !0;
        return;
      }
      document.querySelectorAll(j.cssSelector).forEach(Zt);
    }
    function at(N, F) {
      let $ = null;
      try {
        $ = F(f);
      } catch (ne) {
        if (Pe("Language definition for '{}' could not be registered.".replace("{}", N)), ce)
          Pe(ne);
        else
          throw ne;
        $ = z;
      }
      $.name || ($.name = N), E[N] = $, $.rawDefinition = F.bind(null, f), $.aliases && cn($.aliases, { languageName: N });
    }
    function an(N) {
      delete E[N];
      for (const F of Object.keys(C))
        C[F] === N && delete C[F];
    }
    function ln() {
      return Object.keys(E);
    }
    function Be(N) {
      return N = (N || "").toLowerCase(), E[N] || E[C[N]];
    }
    function cn(N, { languageName: F }) {
      typeof N == "string" && (N = [N]), N.forEach(($) => {
        C[$.toLowerCase()] = F;
      });
    }
    function Wt(N) {
      const F = Be(N);
      return F && !F.disableAutodetect;
    }
    function Tn(N) {
      N["before:highlightBlock"] && !N["before:highlightElement"] && (N["before:highlightElement"] = (F) => {
        N["before:highlightBlock"](
          Object.assign({ block: F.el }, F)
        );
      }), N["after:highlightBlock"] && !N["after:highlightElement"] && (N["after:highlightElement"] = (F) => {
        N["after:highlightBlock"](
          Object.assign({ block: F.el }, F)
        );
      });
    }
    function Mn(N) {
      Tn(N), q.push(N);
    }
    function On(N) {
      const F = q.indexOf(N);
      F !== -1 && q.splice(F, 1);
    }
    function St(N, F) {
      const $ = N;
      q.forEach(function(ne) {
        ne[$] && ne[$](F);
      });
    }
    function Me(N) {
      return Ye("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ye("10.7.0", "Please use highlightElement now."), Zt(N);
    }
    Object.assign(f, {
      highlight: ue,
      highlightAuto: Qt,
      highlightAll: Ae,
      highlightElement: Zt,
      // TODO: Remove with v12 API
      highlightBlock: Me,
      configure: rn,
      initHighlighting: Sn,
      initHighlightingOnLoad: Nn,
      registerLanguage: at,
      unregisterLanguage: an,
      listLanguages: ln,
      getLanguage: Be,
      registerAliases: cn,
      autoDetection: Wt,
      inherit: Kt,
      addPlugin: Mn,
      removePlugin: On
    }), f.debugMode = function() {
      ce = !1;
    }, f.safeMode = function() {
      ce = !0;
    }, f.versionString = kn, f.regex = {
      concat: m,
      lookahead: d,
      either: _,
      optional: v,
      anyNumberOfTimes: g
    };
    for (const N in Et)
      typeof Et[N] == "object" && e(Et[N]);
    return Object.assign(f, Et), f;
  }, ot = Gt({});
  return ot.newInstance = () => Gt({}), Ln = ot, ot.HighlightJS = ot, ot.default = ot, Ln;
}
var wr = /* @__PURE__ */ yr();
const Le = /* @__PURE__ */ mr(wr);
function xr(e) {
  const r = e.regex, c = r.concat(/[\p{L}_]/u, r.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), p = /[\p{L}0-9._:-]+/u, b = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, t = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, n = e.inherit(t, {
    begin: /\(/,
    end: /\)/
  }), o = e.inherit(e.APOS_STRING_MODE, { className: "string" }), a = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: p,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [b]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [b]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          t,
          a,
          o,
          n,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  t,
                  n,
                  a,
                  o
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      b,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              a
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: "css"
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: "javascript"
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: r.concat(
          /</,
          r.lookahead(r.concat(
            c,
            // <tag/>
            // <tag>
            // <tag ...
            r.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: c,
            relevance: 0,
            starts: l
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: r.concat(
          /<\//,
          r.lookahead(r.concat(
            c,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: c,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const lo = "[A-Za-z$_][0-9A-Za-z$_]*", _r = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Er = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], po = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], mo = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], vo = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], kr = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "self",
  "global"
  // Node.js
], Ar = [].concat(
  vo,
  po,
  mo
);
function Sr(e) {
  const r = e.regex, c = (le, { after: ge }) => {
    const Te = "</" + le[0].slice(1);
    return le.input.indexOf(Te, ge) !== -1;
  }, p = lo, b = {
    begin: "<>",
    end: "</>"
  }, t = /<[A-Za-z0-9\\._:-]+\s*\/>/, n = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (le, ge) => {
      const Te = le[0].length + le.index, Ze = le.input[Te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ze === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ze === ","
      ) {
        ge.ignoreMatch();
        return;
      }
      Ze === ">" && (c(le, { after: Te }) || ge.ignoreMatch());
      let ke;
      const We = le.input.substring(Te);
      if (ke = We.match(/^\s*=/)) {
        ge.ignoreMatch();
        return;
      }
      if ((ke = We.match(/^\s+extends\s+/)) && ke.index === 0) {
        ge.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: lo,
    keyword: _r,
    literal: Er,
    built_in: Ar,
    "variable.language": kr
  }, a = "[0-9](_?[0-9])*", l = `\\.(${a})`, i = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", s = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${i})((${l})|\\.)?|(${l}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${i})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, d = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, g = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "graphql"
    }
  }, y = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ]
  }, _ = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: p + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, k = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    g,
    v,
    m,
    y,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    s
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  d.contains = k.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(k)
  });
  const x = [].concat(_, d.contains), I = x.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(x)
    }
  ]), S = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: I
  }, O = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          p,
          /\s+/,
          /extends/,
          /\s+/,
          r.concat(p, "(", r.concat(/\./, p), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          p
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, B = {
    relevance: 0,
    match: r.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...po,
        ...mo
      ]
    }
  }, G = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, L = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          p,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [S],
    illegal: /%/
  }, Q = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function V(le) {
    return r.concat("(?!", le.join("|"), ")");
  }
  const te = {
    match: r.concat(
      /\b/,
      V([
        ...vo,
        "super",
        "import",
        "await"
      ].map((le) => `${le}\\s*\\(`)),
      p,
      r.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ie = {
    begin: r.concat(/\./, r.lookahead(
      r.concat(p, /(?![0-9A-Za-z$_(])/)
    )),
    end: p,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ee = {
    match: [
      /get|set/,
      /\s+/,
      p,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      S
    ]
  }, re = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ye = {
    match: [
      /const|var|let/,
      /\s+/,
      p,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      r.lookahead(re)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      S
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: I, CLASS_REFERENCE: B },
    illegal: /#(?![$_A-Za-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      G,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      g,
      v,
      m,
      y,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      s,
      B,
      {
        scope: "attr",
        match: p + r.lookahead(":"),
        relevance: 0
      },
      ye,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: re,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: I
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: b.begin, end: b.end },
              { match: t },
              {
                begin: n.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": n.isTrulyOpeningTag,
                end: n.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: n.begin,
                end: n.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      L,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          S,
          e.inherit(e.TITLE_MODE, { begin: p, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ie,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + p,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [S]
      },
      te,
      Q,
      O,
      ee,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const Nr = "([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity", Tr = {
  scope: "number",
  match: Nr,
  relevance: 0
};
function Mr(e) {
  const r = {
    className: "attr",
    begin: /(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,
    relevance: 1.01
  }, c = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, p = [
    "true",
    "false",
    "null"
  ], b = {
    scope: "literal",
    beginKeywords: p.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc", "json5"],
    keywords: {
      literal: p
    },
    contains: [
      r,
      c,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      Tr,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function Or(e) {
  const r = "true false yes no null", c = "[\\w#;/?:@&=+$,.~*'()[\\]]+", p = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  }, b = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, t = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  }, n = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      b
    ]
  }, o = e.inherit(n, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] }), a = {
    className: "number",
    begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
  }, l = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: r,
    relevance: 0
  }, i = {
    begin: /\{/,
    end: /\}/,
    contains: [l],
    illegal: "\\n",
    relevance: 0
  }, s = {
    begin: "\\[",
    end: "\\]",
    contains: [l],
    illegal: "\\n",
    relevance: 0
  }, d = [
    p,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + c
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + c + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + c
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + c
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: r,
      keywords: { literal: r }
    },
    a,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    i,
    s,
    t,
    n
  ], g = [...d];
  return g.pop(), g.push(o), l.contains = g, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: d
  };
}
function Rr(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function Dr(e) {
  const r = e.regex, c = /[\p{XID_Start}_]\p{XID_Continue}*/u, p = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "lazy",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], b = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: p,
    built_in: [
      "__import__",
      "abs",
      "aiter",
      "all",
      "anext",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozendict",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "sentinel",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, t = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, n = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: b,
    illegal: /#/
  }, o = {
    begin: /\{\{/,
    relevance: 0
  }, a = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          t
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          t
        ],
        relevance: 10
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          t,
          o,
          n
        ]
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          t,
          o,
          n
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          n
        ]
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          n
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, l = "[0-9](_?[0-9])*", i = `(\\b(${l}))?\\.(${l})|\\b(${l})\\.`, s = `\\b|${p.join("|")}`, d = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${l})|(${i}))[eE][+-]?(${l})[jJ]?(?=${s})`
      },
      {
        begin: `(${i})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${s})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${s})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${s})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${s})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${l})[jJ](?=${s})`
      }
    ]
  }, g = {
    className: "comment",
    begin: r.lookahead(/# type:/),
    end: /$/,
    keywords: b,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, v = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: b,
        contains: [
          "self",
          t,
          d,
          a,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return n.contains = [
    a,
    d,
    t
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: b,
    illegal: /(<\/|\?)|=>/,
    contains: [
      t,
      d,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      a,
      g,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          c
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [v]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              c,
              /\s*/,
              /\(\s*/,
              c,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              c
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          d,
          v,
          a
        ]
      }
    ]
  };
}
var Lt = "[0-9](_*[0-9])*", un = `\\.(${Lt})`, bn = "[0-9a-fA-F](_*[0-9a-fA-F])*", co = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Lt})((${un})|\\.)?|(${un}))[eE][+-]?(${Lt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Lt})((${un})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${un})[fFdD]?\\b` },
    { begin: `\\b(${Lt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${bn})\\.?|(${bn})?\\.(${bn}))[pP][+-]?(${Lt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${bn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function yo(e, r, c) {
  return c === -1 ? "" : e.replace(r, (p) => yo(e, r, c - 1));
}
function Lr(e) {
  const r = e.regex, c = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", p = "(?:(?:\\s*\\[\\s*])+)?", b = c + "<@@@>" + p, t = "(?:" + ("\\?(?:\\s+(?:extends|super)\\s+" + b + ")?") + "|" + b + ")", n = yo(
    "(?:\\s*<\\s*" + t + "(?:\\s*,\\s*" + t + ")*\\s*>)?",
    /<@@@>/g,
    2
  ), o = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, a = {
    className: "meta",
    begin: "@" + c,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, l = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: o,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: o,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          c
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        // Expression keywords prevent keyword-led expressions from being
        // recognized as variable or method declarations.
        beginKeywords: "new throw return else yield assert",
        relevance: 0
      },
      {
        begin: [
          c,
          r.concat(n, p, /\s+/),
          c,
          p,
          /\s*/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          6: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          c
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          l,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        begin: [
          c,
          r.concat(n, p, /\s+/),
          c,
          /\s*(?=\()/
        ],
        className: {
          1: "type",
          3: "title.function"
        },
        keywords: o,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: o,
            relevance: 0,
            contains: [
              a,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              co,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      co,
      a
    ]
  };
}
function Ir(e) {
  const r = e.regex, c = {}, p = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [c]
      }
      // default values
    ]
  };
  Object.assign(c, {
    className: "variable",
    variants: [
      { begin: r.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      p
    ]
  });
  const b = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, t = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), n = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, o = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      c,
      b
    ]
  };
  b.contains.push(o);
  const a = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, i = {
    match: /\\'/
  }, s = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      c
    ]
  }, d = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], g = e.SHEBANG({
    binary: `(${d.join("|")})`,
    relevance: 10
  }), v = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, m = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], y = [
    "true",
    "false"
  ], _ = { match: /(\/[a-z._-]+)+/ }, k = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], x = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], I = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], S = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: m,
      literal: y,
      built_in: [
        ...k,
        ...x,
        // Shell modifiers
        "set",
        "shopt",
        ...I,
        ...S
      ]
    },
    contains: [
      g,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      v,
      s,
      t,
      n,
      _,
      o,
      a,
      l,
      i,
      c
    ]
  };
}
function Cr(e) {
  const r = e.regex, c = e.COMMENT("--", "$"), p = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, b = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, t = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], n = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], o = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], a = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], l = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], i = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], s = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], d = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], g = i, v = [
    ...l,
    ...a
  ].filter((S) => !i.includes(S)), m = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, y = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, _ = {
    match: r.concat(/\b/, r.either(...g), /\s*\(/),
    relevance: 0,
    keywords: { built_in: g }
  };
  function k(S) {
    return r.concat(
      /\b/,
      r.either(...S.map((O) => O.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const x = {
    scope: "keyword",
    match: k(d),
    relevance: 0
  };
  function I(S, {
    exceptions: O,
    when: B
  } = {}) {
    const G = B;
    return O = O || [], S.map((L) => L.match(/\|\d+$/) || O.includes(L) ? L : G(L) ? `${L}|0` : L);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: I(v, { when: (S) => S.length < 3 }),
      literal: t,
      type: o,
      built_in: s
    },
    contains: [
      {
        scope: "type",
        match: k(n)
      },
      x,
      _,
      m,
      p,
      b,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      c,
      y
    ]
  };
}
Le.registerLanguage("xml", xr);
Le.registerLanguage("javascript", Sr);
Le.registerLanguage("json", Mr);
Le.registerLanguage("yaml", Or);
Le.registerLanguage("plaintext", Rr);
Le.registerLanguage("python", Dr);
Le.registerLanguage("java", Lr);
Le.registerLanguage("bash", Ir);
Le.registerLanguage("sql", Cr);
var D = /* @__PURE__ */ ((e) => (e.EQUAL = "equal", e.DELETE = "removed", e.ADD = "added", e.EMPTY = "empty", e))(D || {});
const Ke = "<code-diff-modified>", Ge = "</code-diff-modified>", Pr = 1e4, De = 1e3, so = Ke.replace("<", "&lt;").replace(">", "&gt;"), fo = Ge.replace("<", "&lt;").replace(">", "&gt;");
function jr(e) {
  const r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return e.replace(/[&<>"']/g, (c) => r[c]);
}
function dt(e) {
  return e === void 0 ? D.EQUAL : e.added ? D.ADD : e.removed ? D.DELETE : D.EQUAL;
}
function wo(e, r, c = "word", p = !1) {
  if (typeof e > "u" || typeof r > "u")
    return [e, r];
  if (!p && e.length + r.length > Pr)
    return [e, r];
  const b = (c === "char" ? dr : gr)(e, r), t = b.filter((o) => dt(o) !== D.ADD).map(
    (o) => dt(o) === D.DELETE ? `${Ke}${o.value}${Ge}` : o.value
  ).join(""), n = b.filter((o) => dt(o) !== D.DELETE).map(
    (o) => dt(o) === D.ADD ? `${Ke}${o.value}${Ge}` : o.value
  ).join("");
  return [t, n];
}
function xo(e, r) {
  if (e === r)
    return e ? [{ count: e.replace(/\n$/, "").split(`
`).length, value: e }] : [];
  const c = e.endsWith(`
`), p = r.endsWith(`
`);
  c !== p && (c ? e = e.slice(0, -1) : r = r.slice(0, -1)), e && (e += `
`), r && (r += `
`);
  let b;
  if (e.length + r.length >= 1e5 && e.includes(`
`) && r.includes(`
`)) {
    const t = e ? e.replace(/\n$/, "").split(`
`) : [], n = r ? r.replace(/\n$/, "").split(`
`) : [], o = new Set(t), a = new Set(n), [l, i] = o.size < a.size ? [o, a] : [a, o];
    let s = 0;
    for (const m of l)
      i.has(m) && s++;
    const d = l.size ? s / l.size : 0, g = o.size >= 4e4 || o.size + a.size - s >= 65535, v = o.size + a.size - s * 2;
    d < 0.01 || g && v > 200 ? (b = [], e && b.push({ count: t.length, value: e, removed: !0 }), r && b.push({ count: n.length, value: r, added: !0 })) : g && (b = ur(e, r));
  }
  if (!b) {
    const t = new Dn.diff_match_patch(), n = t.diff_linesToChars_(e, r), o = n.chars1, a = n.chars2, l = n.lineArray, i = t.diff_main(o, a, !1);
    t.diff_charsToLines_(i, l), b = i.map((s) => {
      const [d, g] = s;
      return {
        count: g.replace(/\n$/, "").split(`
`).length,
        value: g,
        removed: d === Dn.DIFF_DELETE,
        added: d === Dn.DIFF_INSERT
      };
    });
  }
  return c !== p && b.push({
    count: 1,
    value: "",
    removed: c,
    added: p
  }), b;
}
function zn(e, r) {
  if (typeof document > "u" || e === "plaintext")
    return jr(r).replace(new RegExp(so, "g"), '<span class="x">').replace(new RegExp(fo, "g"), "</span>");
  if (!r.match(new RegExp(`(${Ke}|${Ge})`, "g")))
    return Le.highlight(r, { language: e }).value;
  let c = r;
  const p = r.replace(new RegExp(`(${Ke}|${Ge})`, "g"), ""), b = document.createElement("div");
  b.innerHTML = Le.highlight(p, { language: e }).value;
  let t = !1;
  const n = (o) => {
    o.childNodes.forEach((a) => {
      if (a.nodeType === Node.ELEMENT_NODE && n(a), a.nodeType === Node.TEXT_NODE) {
        if (!a.textContent)
          return;
        let l = a.textContent, i = "";
        for (t && (i = i + Ke); l.length; ) {
          if (c.startsWith(Ke)) {
            c = c.slice(Ke.length), i = i + Ke, t = !0;
            continue;
          }
          if (c.startsWith(Ge)) {
            c = c.slice(Ge.length), i = i + Ge, t = !1;
            continue;
          }
          const s = c.match(new RegExp(`(${Ke}|${Ge})`)), d = s && s.index ? s.index : c.length, g = Math.min(d, l.length);
          i = i + c.substring(0, g), c = c.slice(g), l = l.slice(g);
        }
        t && (i = i + Ge), a.textContent = i;
      }
    });
  };
  return n(b), b.innerHTML.replace(new RegExp(so, "g"), '<span class="x">').replace(new RegExp(fo, "g"), "</span>");
}
function Un(e, r) {
  e.highlighted || (e.code = zn(r, e.code), e.highlighted = !0);
}
function Fn(e, r) {
  if (e.highlighted)
    return;
  const c = e.left.code;
  c !== void 0 && (e.left.code = zn(r, c)), e.right.code !== void 0 && (e.right.code = e.left.type === D.EQUAL && e.right.type === D.EQUAL && e.right.code === c ? e.left.code : zn(r, e.right.code)), e.highlighted = !0;
}
function _o(e, r) {
  var c, p;
  const b = (i, s) => (i.match(new RegExp(s, "g")) || []).length, t = (i) => i.filter((s) => r == null ? void 0 : r.test(s)).length;
  let n = 0, o = 0, a = 0, l = 0;
  for (const i of e) {
    if (i.added) {
      if (!r) {
        n += (c = i.count) != null ? c : 0;
        continue;
      }
      const s = t(i.value.trim().split(`
`));
      n += b(i.value.trim(), `
`) + 1 - s, a += s;
      continue;
    }
    if (i.removed) {
      if (!r) {
        o += (p = i.count) != null ? p : 0;
        continue;
      }
      const s = t(i.value.trim().split(`
`));
      o += b(i.value.trim(), `
`) + 1 - s, l += s;
      continue;
    }
  }
  return {
    additionsNum: n,
    deletionsNum: o,
    ignoreAdditionsNum: a,
    ignoreDeletionsNum: l
  };
}
function Br(e, r, c = "plaintext", p = "word", b = !1, t = 10, n) {
  const o = () => ({ type: D.EMPTY }), a = (k, x, I) => ({ type: k, num: x, code: I }), l = xo(e, r), i = n ? new RegExp(n) : void 0;
  let s = 0, d = 0, g = !1;
  const v = [], m = {
    changes: v,
    collector: [],
    stat: _o(l, i)
  };
  for (let k = 0; k < l.length; k++) {
    if (g) {
      g = !1;
      continue;
    }
    const [x, I] = [l[k], l[k + 1]], [S, O] = [dt(x), dt(I)], B = x.value.replace(/\n$/, "").split(`
`);
    if (I === void 0) {
      for (const L of B) {
        let Q = o(), V = o();
        S === D.EQUAL && (s++, d++, Q = a(D.EQUAL, s, L), V = a(D.EQUAL, d, L)), S === D.DELETE && (s++, Q = a(D.DELETE, s, L), V = o()), S === D.ADD && (d++, Q = o(), V = a(D.ADD, d, L)), v.push({ left: Q, right: V });
      }
      break;
    }
    if (S === D.EQUAL)
      for (const L of B)
        s++, d++, v.push({
          left: a(D.EQUAL, s, L),
          right: a(D.EQUAL, d, L)
        });
    const G = I.value.replace(/\n$/, "").split(`
`);
    if (S === D.DELETE) {
      if (O === D.EQUAL)
        for (const L of B)
          s++, v.push({
            left: a(D.DELETE, s, L),
            right: o()
          });
      if (O === D.ADD) {
        g = !0;
        const L = Math.max(x.count, I.count);
        for (let Q = 0; Q < L; Q++) {
          Q < x.count && s++, Q < I.count && d++;
          const [V, te] = [B[Q], G[Q]], ie = b || B.length === G.length, [ee, re] = ie ? wo(V, te, p, b) : [V, te], ye = i != null && i.test(V) ? D.EQUAL : D.DELETE, le = i != null && i.test(te) ? D.EQUAL : D.ADD, ge = Q < x.count ? a(ye, s, ee) : o(), Te = Q < I.count ? a(le, d, re) : o();
          v.push({ left: ge, right: Te });
        }
      }
    }
    if (S === D.ADD)
      for (const L of B)
        d++, v.push({
          left: o(),
          right: a(D.ADD, d, L)
        });
  }
  if (e === r) {
    for (let k = 0; k < v.length; k++)
      v[k].fold = !1;
    return v.slice(0, De).forEach((k) => Fn(k, c)), m;
  }
  for (let k = 0; k < v.length; k++) {
    const x = v[k];
    if (x.left.type === D.DELETE || x.right.type === D.ADD) {
      const [I, S] = [Math.max(k - t, 0), Math.min(k + t + 1, v.length)];
      for (let O = I; O < S; O++)
        v[O].fold = !1;
    }
    x.fold === void 0 && (x.fold = !0);
  }
  const y = [];
  let _ = [];
  for (let k = 0; k < v.length; k++) {
    const x = v[k];
    if (x.fold === !1) {
      _.length && (_[0].hideIndex = m.collector.length, m.collector.push({
        lines: _,
        fold: !0
      }), _ = []), y.push(x);
      continue;
    }
    x.hide = !0, _.push(x), y.push(x);
  }
  return _.length && (_[0].hideIndex = m.collector.length, m.collector.push({
    lines: _,
    fold: !0
  }), _ = []), m.changes = y, m.changes.filter((k) => !k.hide).slice(0, De).forEach((k) => Fn(k, c)), m;
}
function zr(e, r, c = "plaintext", p = "word", b = !1, t = 10, n) {
  const o = xo(e, r), a = n ? new RegExp(n) : void 0;
  let l = 0, i = 0, s = !1;
  const d = [], g = {
    changes: d,
    collector: [],
    stat: _o(o, a)
  };
  for (let y = 0; y < o.length; y++) {
    if (s) {
      s = !1;
      continue;
    }
    const [_, k] = [o[y], o[y + 1]], [x, I] = [dt(_), dt(k)], S = _.value.replace(/\n$/, "").split(`
`);
    if (k === void 0) {
      for (const B of S)
        x === D.EQUAL && (l++, i++), x === D.DELETE && l++, x === D.ADD && i++, d.push({
          type: x,
          code: B,
          addNum: x === D.DELETE ? void 0 : i,
          delNum: x === D.ADD ? void 0 : l
        });
      break;
    }
    if (x === D.EQUAL)
      for (const B of S)
        l++, i++, d.push({ type: D.EQUAL, code: B, delNum: l, addNum: i });
    const O = k.value.replace(/\n$/, "").split(`
`);
    if (x === D.DELETE)
      if (I === D.ADD && (S.length === O.length || b)) {
        const B = Math.max(S.length, O.length), G = Array.from({ length: B }, (L, Q) => wo(S[Q], O[Q], p, b));
        for (let L = 0; L < S.length; L++) {
          const Q = S[L];
          l++, d.push({
            type: a != null && a.test(Q) ? D.EQUAL : D.DELETE,
            code: G[L][0],
            delNum: l
          });
        }
        for (let L = 0; L < O.length; L++) {
          const Q = O[L];
          i++, d.push({
            type: a != null && a.test(Q) ? D.EQUAL : D.ADD,
            code: G[L][1],
            addNum: i
          });
        }
        s = !0;
      } else
        for (const B of S)
          l++, d.push({ type: D.DELETE, code: B, delNum: l });
    if (x === D.ADD)
      for (const B of S)
        i++, d.push({ type: D.ADD, code: B, addNum: i });
  }
  for (let y = 0; y < d.length; y++) {
    const _ = d[y];
    if (_.type === D.DELETE || _.type === D.ADD) {
      const [k, x] = [Math.max(y - t, 0), Math.min(y + t + 1, d.length)];
      for (let I = k; I < x; I++)
        d[I].fold = !1;
    }
    _.fold === void 0 && (_.fold = !0);
  }
  if (e === r) {
    for (let y = 0; y < d.length; y++)
      d[y].fold = !1;
    return d.slice(0, De).forEach((y) => Un(y, c)), g;
  }
  const v = [];
  let m = [];
  for (let y = 0; y < d.length; y++) {
    const _ = d[y];
    if (_.fold === !1) {
      m.length && (m[0].hideIndex = g.collector.length, g.collector.push({
        lines: m,
        fold: !0
      }), m = []), v.push(_);
      continue;
    }
    _.type === "equal" && (_.hide = !0, m.push(_)), v.push(_);
  }
  return m.length && (m[0].hideIndex = g.collector.length, g.collector.push({
    lines: m,
    fold: !0
  }), m = []), g.changes = v, g.changes.filter((y) => !y.hide).slice(0, De).forEach((y) => Un(y, c)), g;
}
const Ur = { key: 0 }, Fr = ["data-diff-change"], Hr = ["data-code-marker", "innerHTML"], Kr = /* @__PURE__ */ wt({
  __name: "UnifiedLine",
  props: {
    line: {}
  },
  emits: ["expand", "change-click"],
  setup(e, { emit: r }) {
    const c = e, p = r;
    function b(n) {
      c.line.type !== D.ADD && c.line.type !== D.DELETE || p("change-click", {
        side: c.line.type === D.DELETE ? "old" : "new",
        type: c.line.type,
        lineNumber: c.line.type === D.DELETE ? c.line.delNum : c.line.addNum,
        event: n
      });
    }
    function t(n) {
      return n === D.DELETE ? "-" : n === D.ADD ? "+" : "";
    }
    return (n, o) => e.line.hideIndex !== void 0 && e.line.hide ? (R(), U("tr", Ur, [
      T("td", {
        class: "blob-num blob-num-hunk text-center",
        colspan: "2",
        onClick: o[0] || (o[0] = (a) => p("expand", e.line))
      }, " > "),
      o[1] || (o[1] = T("td", {
        class: "blob-code blob-code-hunk",
        align: "left"
      }, " ⋯ ", -1))
    ])) : e.line.hide ? fe("", !0) : (R(), U("tr", {
      key: 1,
      "data-diff-change": e.line.type !== M(D).EQUAL ? "" : void 0,
      onClick: b
    }, [
      T("td", {
        class: Qe(["blob-num", {
          "blob-num-deletion": e.line.type === M(D).DELETE,
          "blob-num-addition": e.line.type === M(D).ADD,
          "blob-num-context": e.line.type === M(D).EQUAL,
          "blob-num-hunk": e.line.hide !== void 0
        }])
      }, P(e.line.delNum), 3),
      T("td", {
        class: Qe(["blob-num", {
          "blob-num-deletion": e.line.type === M(D).DELETE,
          "blob-num-addition": e.line.type === M(D).ADD,
          "blob-num-context": e.line.type === M(D).EQUAL,
          "blob-num-hunk": e.line.hide !== void 0
        }])
      }, P(e.line.addNum), 3),
      T("td", {
        class: Qe(["blob-code", {
          "blob-code-deletion": e.line.type === M(D).DELETE,
          "blob-code-addition": e.line.type === M(D).ADD,
          "blob-code-context": e.line.type === M(D).EQUAL,
          "blob-code-hunk": e.line.hide !== void 0
        }])
      }, [
        T("span", {
          class: "blob-code-inner blob-code-marker",
          "data-code-marker": t(e.line.type),
          innerHTML: e.line.code
        }, null, 8, Hr)
      ], 2)
    ], 8, Fr));
  }
}), Gr = { class: "diff-table" }, Qr = { key: 0 }, Zr = {
  class: "blob-code blob-code-hunk load-more",
  colspan: "3"
}, Wr = /* @__PURE__ */ wt({
  __name: "UnifiedViewer",
  props: {
    diffChange: {},
    language: {}
  },
  emits: ["change-click"],
  setup(e, { emit: r }) {
    const c = e, p = r, b = oe(De), t = Hn(c.diffChange.changes.filter((d) => !d.hide || d.hideIndex !== void 0)), n = Y(() => t.value.slice(0, b.value)), o = Y(() => t.value.length - n.value.length), a = Y(() => Math.min(o.value, De));
    It(() => c.diffChange, (d) => {
      b.value = De, t.value = d.changes.filter((g) => !g.hide || g.hideIndex !== void 0);
    });
    function l() {
      n.value.forEach((d) => Un(d, c.language));
    }
    function i({ hideIndex: d }) {
      d !== void 0 && (c.diffChange.collector[d].lines.forEach((g) => {
        g.hide = !1, g.fold = !1;
      }), t.value = c.diffChange.changes.filter((g) => !g.hide || g.hideIndex !== void 0), l());
    }
    function s() {
      b.value += De, l();
    }
    return (d, g) => (R(), U("table", Gr, [
      T("tbody", null, [
        (R(!0), U(me, null, He(M(n), (v, m) => (R(), be(Kr, {
          key: m,
          line: v,
          onExpand: i,
          onChangeClick: g[0] || (g[0] = (y) => p("change-click", y))
        }, null, 8, ["line"]))), 128)),
        M(o) ? (R(), U("tr", Qr, [
          T("td", Zr, [
            T("button", {
              class: "load-more-button",
              type: "button",
              onClick: s
            }, " Show next " + P(M(a)) + " lines (" + P(M(o)) + " remaining) ", 1)
          ])
        ])) : fe("", !0)
      ])
    ]));
  }
}), Yr = { key: 0 }, Jr = ["data-diff-change"], qr = ["onMousedown", "onClick"], Vr = ["data-code-marker", "innerHTML"], Xr = /* @__PURE__ */ wt({
  __name: "SplitLine",
  props: {
    splitLine: {}
  },
  emits: ["expand", "change-click"],
  setup(e, { emit: r }) {
    const c = r;
    function p(n) {
      return n === D.DELETE ? "-" : n === D.ADD ? "+" : "";
    }
    function b(n, o) {
      const a = n.currentTarget.closest(".file-diff-split"), l = a.querySelectorAll(".split-side-left"), i = a.querySelectorAll(".split-side-right");
      for (const s of i)
        s.classList.toggle("no-select", o === "left");
      for (const s of l)
        s.classList.toggle("no-select", o === "right");
    }
    function t(n, o, a) {
      o.type !== D.ADD && o.type !== D.DELETE || c("change-click", {
        side: a,
        type: o.type,
        lineNumber: o.num,
        event: n
      });
    }
    return (n, o) => e.splitLine.hideIndex !== void 0 && e.splitLine.hide ? (R(), U("tr", Yr, [
      T("td", {
        class: "blob-num blob-num-hunk",
        colspan: "1",
        onClick: o[0] || (o[0] = (a) => c("expand", e.splitLine))
      }, " > "),
      o[1] || (o[1] = T("td", {
        class: "blob-code blob-code-inner blob-code-hunk",
        colspan: "3",
        align: "left"
      }, " ⋯ ", -1))
    ])) : e.splitLine.hide ? fe("", !0) : (R(), U("tr", {
      key: 1,
      "data-diff-change": e.splitLine.left.type === M(D).DELETE || e.splitLine.right.type === M(D).ADD ? "" : void 0
    }, [
      (R(!0), U(me, null, He([e.splitLine.left, e.splitLine.right], (a, l) => (R(), U(me, null, [
        a.type === M(D).EMPTY ? (R(), U(me, { key: 0 }, [
          o[2] || (o[2] = T("td", { class: "blob-num blob-num-empty empty-cell" }, null, -1)),
          o[3] || (o[3] = T("td", { class: "blob-code blob-code-empty empty-cell" }, null, -1))
        ], 64)) : (R(), U(me, { key: 1 }, [
          T("td", {
            class: Qe(["blob-num", {
              "blob-num-deletion": a.type === M(D).DELETE,
              "blob-num-addition": a.type === M(D).ADD,
              "blob-num-context": a.type === M(D).EQUAL,
              "blob-num-hunk": e.splitLine.hide !== void 0
            }])
          }, P(a.num), 3),
          T("td", {
            class: Qe(["blob-code", {
              "blob-code-deletion": a.type === M(D).DELETE,
              "blob-code-addition": a.type === M(D).ADD,
              "blob-code-context": a.type === M(D).EQUAL,
              "blob-code-hunk": e.splitLine.hide !== void 0,
              "split-side-left": l === 0,
              "split-side-right": l === 1
            }]),
            onMousedown: (i) => b(i, l === 0 ? "left" : "right"),
            onClick: (i) => t(i, a, l === 0 ? "old" : "new")
          }, [
            T("span", {
              class: "blob-code-inner blob-code-marker",
              "data-code-marker": p(a.type),
              innerHTML: a.code
            }, null, 8, Vr)
          ], 42, qr)
        ], 64))
      ], 64))), 256))
    ], 8, Jr));
  }
}), $r = { class: "file-diff-split diff-table" }, ea = { key: 0 }, ta = {
  class: "blob-code blob-code-hunk load-more",
  colspan: "4"
}, na = /* @__PURE__ */ wt({
  __name: "SplitViewer",
  props: {
    diffChange: {},
    language: {}
  },
  emits: ["change-click"],
  setup(e, { emit: r }) {
    const c = e, p = r, b = oe(De), t = Hn(c.diffChange.changes.filter((d) => !d.hide || d.hideIndex !== void 0)), n = Y(() => t.value.slice(0, b.value)), o = Y(() => t.value.length - n.value.length), a = Y(() => Math.min(o.value, De));
    It(() => c.diffChange, (d) => {
      b.value = De, t.value = d.changes.filter((g) => !g.hide || g.hideIndex !== void 0);
    });
    function l() {
      n.value.forEach((d) => Fn(d, c.language));
    }
    function i({ hideIndex: d }) {
      d !== void 0 && (c.diffChange.collector[d].lines.forEach((g) => {
        g.hide = !1, g.fold = !1;
      }), t.value = c.diffChange.changes.filter((g) => !g.hide || g.hideIndex !== void 0), l());
    }
    function s() {
      b.value += De, l();
    }
    return (d, g) => (R(), U("table", $r, [
      g[1] || (g[1] = T("colgroup", null, [
        T("col", { width: "44" }),
        T("col"),
        T("col", { width: "44" }),
        T("col")
      ], -1)),
      T("tbody", null, [
        (R(!0), U(me, null, He(M(n), (v, m) => (R(), be(Xr, {
          key: m,
          "split-line": v,
          onExpand: i,
          onChangeClick: g[0] || (g[0] = (y) => p("change-click", y))
        }, null, 8, ["split-line"]))), 128)),
        M(o) ? (R(), U("tr", ea, [
          T("td", ta, [
            T("button", {
              class: "load-more-button",
              type: "button",
              onClick: s
            }, " Show next " + P(M(a)) + " lines (" + P(M(o)) + " remaining) ", 1)
          ])
        ])) : fe("", !0)
      ])
    ]));
  }
}), Qn = (e, r) => {
  const c = e.__vccOpts || e;
  for (const [p, b] of r)
    c[p] = b;
  return c;
}, oa = {
  name: "DownArrowIcon"
}, ra = {
  width: "1rem",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
function aa(e, r, c, p, b, t) {
  return R(), U("svg", ra, [...r[0] || (r[0] = [
    T("path", { d: "M383.6,322.7L278.6,423c-5.8,6-13.7,9-22.4,9c-8.7,0-16.5-3-22.4-9L128.4,322.7c-12.5-11.9-12.5-31.3,0-43.2  c12.5-11.9,32.7-11.9,45.2,0l50.4,48.2v-217c0-16.9,14.3-30.6,32-30.6c17.7,0,32,13.7,32,30.6v217l50.4-48.2  c12.5-11.9,32.7-11.9,45.2,0C396.1,291.4,396.1,310.7,383.6,322.7z" }, null, -1)
  ])]);
}
const go = /* @__PURE__ */ Qn(oa, [["render", aa]]), ia = {
  name: "UpArrowIcon"
}, la = {
  width: "1rem",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
function ca(e, r, c, p, b, t) {
  return R(), U("svg", la, [...r[0] || (r[0] = [
    T("path", { d: "M128.4,189.3L233.4,89c5.8-6,13.7-9,22.4-9c8.7,0,16.5,3,22.4,9l105.4,100.3c12.5,11.9,12.5,31.3,0,43.2  c-12.5,11.9-32.7,11.9-45.2,0L288,184.4v217c0,16.9-14.3,30.6-32,30.6c-17.7,0-32-13.7-32-30.6v-217l-50.4,48.2  c-12.5,11.9-32.7,11.9-45.2,0C115.9,220.6,115.9,201.3,128.4,189.3z" }, null, -1)
  ])]);
}
const uo = /* @__PURE__ */ Qn(ia, [["render", ca]]), sa = ["theme"], da = {
  key: 0,
  class: "file-header"
}, fa = {
  key: 0,
  class: "file-info"
}, ga = { class: "info-left" }, ua = { class: "info-left" }, ba = {
  key: 0,
  class: "diff-commandbar"
}, ha = {
  key: 1,
  class: "diff-stat"
}, pa = { class: "diff-stat-added" }, ma = { class: "diff-stat-deleted" }, va = {
  key: 1,
  class: "file-info"
}, ya = { class: "info-left" }, wa = { class: "info-right" }, xa = { style: { "margin-left": "20px" } }, _a = {
  key: 0,
  class: "diff-commandbar"
}, Ea = {
  key: 1,
  class: "diff-stat"
}, ka = { class: "diff-stat-added" }, Aa = { class: "diff-stat-deleted" }, Eo = /* @__PURE__ */ wt({
  __name: "CodeDiff",
  props: {
    newString: {},
    oldString: {},
    language: { default: "plaintext" },
    context: { default: 10 },
    diffStyle: { default: "word" },
    forceInlineComparison: { type: Boolean, default: !1 },
    outputFormat: { default: "line-by-line" },
    trim: { type: Boolean, default: !1 },
    noDiffLineFeed: { type: Boolean, default: !1 },
    maxHeight: { default: void 0 },
    filename: { default: void 0 },
    newFilename: { default: void 0 },
    hideHeader: { type: Boolean, default: !1 },
    hideStat: { type: Boolean, default: !1 },
    hideNavigation: { type: Boolean, default: !1 },
    theme: { default: "light" },
    ignoreMatchingLines: { default: void 0 }
  },
  emits: ["diff", "change-click"],
  setup(e, { emit: r }) {
    const c = e, p = r, b = Y(() => c.outputFormat === "line-by-line"), t = Y(() => {
      let m = c.oldString || "";
      return m = c.trim ? m.trim() : m, m = c.noDiffLineFeed ? m.replace(/(\r\n)/g, `
`) : m, m;
    }), n = Y(() => {
      let m = c.newString || "";
      return m = c.trim ? m.trim() : m, m = c.noDiffLineFeed ? m.replace(/(\r\n)/g, `
`) : m, m;
    }), o = Y(
      () => b.value ? zr(t.value, n.value, c.language, c.diffStyle, c.forceInlineComparison, c.context, c.ignoreMatchingLines) : Br(t.value, n.value, c.language, c.diffStyle, c.forceInlineComparison, c.context, c.ignoreMatchingLines)
    ), a = Hn(o.value), l = Y(() => a.value.stat.additionsNum === 0 && a.value.stat.deletionsNum === 0), i = oe(-1), s = oe();
    function d() {
      const m = s.value.querySelectorAll("[data-diff-change]");
      i.value < m.length - 1 && (i.value++, v(m));
    }
    function g() {
      const m = s.value.querySelectorAll("[data-diff-change]");
      i.value > 0 && (i.value--, v(m));
    }
    function v(m) {
      s.value.querySelectorAll(".current-diff").forEach((_) => _.classList.remove("current-diff"));
      const y = m[i.value];
      y && (y.querySelectorAll(".blob-code").forEach((_) => _.classList.add("current-diff")), y.scrollIntoView({ behavior: "smooth", block: "center" }));
    }
    return It(() => c, () => {
      i.value = -1, a.value = o.value, p("diff", {
        stat: {
          isChanged: !l.value,
          addNum: a.value.stat.additionsNum,
          delNum: a.value.stat.deletionsNum
        }
      });
    }, { deep: !0, immediate: !0 }), (m, y) => (R(), U("div", {
      ref_key: "root",
      ref: s,
      class: "code-diff-view",
      theme: e.theme,
      style: Pn({ maxHeight: e.maxHeight })
    }, [
      e.hideHeader ? fe("", !0) : (R(), U("div", da, [
        M(b) ? (R(), U("div", fa, [
          T("span", null, [
            T("div", ga, P(e.filename), 1),
            T("div", ua, P(e.newFilename), 1)
          ]),
          e.hideNavigation ? fe("", !0) : (R(), U("span", ba, [
            T("button", {
              class: "command-item-button",
              title: "Next Change",
              onClick: d
            }, [
              W(go)
            ]),
            T("button", {
              class: "command-item-button",
              title: "Previous Change",
              onClick: g
            }, [
              W(uo)
            ])
          ])),
          fn(m.$slots, "header-actions"),
          e.hideStat ? fe("", !0) : (R(), U("span", ha, [
            fn(m.$slots, "stat", {
              stat: M(a).stat
            }, () => [
              T("span", pa, "+" + P(M(a).stat.additionsNum) + " additions", 1),
              T("span", ma, "-" + P(M(a).stat.deletionsNum) + " deletions", 1)
            ])
          ]))
        ])) : (R(), U("div", va, [
          T("span", ya, P(e.filename), 1),
          T("span", wa, [
            T("span", xa, P(e.newFilename), 1),
            e.hideNavigation ? fe("", !0) : (R(), U("span", _a, [
              T("button", {
                class: "command-item-button",
                title: "Next Change",
                onClick: d
              }, [
                W(go)
              ]),
              T("button", {
                class: "command-item-button",
                title: "Previous Change",
                onClick: g
              }, [
                W(uo)
              ])
            ])),
            fn(m.$slots, "header-actions"),
            e.hideStat ? fe("", !0) : (R(), U("span", Ea, [
              fn(m.$slots, "stat", {
                stat: M(a).stat
              }, () => [
                T("span", ka, "+" + P(M(a).stat.additionsNum) + " additions", 1),
                T("span", Aa, "-" + P(M(a).stat.deletionsNum) + " deletions", 1)
              ])
            ]))
          ])
        ]))
      ])),
      M(b) ? (R(), be(Wr, {
        key: 1,
        "diff-change": M(a),
        language: e.language,
        onChangeClick: y[0] || (y[0] = (_) => p("change-click", _))
      }, null, 8, ["diff-change", "language"])) : (R(), be(na, {
        key: 2,
        "diff-change": M(a),
        language: e.language,
        onChangeClick: y[1] || (y[1] = (_) => p("change-click", _))
      }, null, 8, ["diff-change", "language"]))
    ], 12, sa));
  }
}), Sa = /* @__PURE__ */ wt({
  __name: "CodeReader",
  props: {
    language: { default: "plaintext" },
    text: {}
  },
  setup(e) {
    return (r, c) => (R(), be(Eo, {
      "hide-header": "",
      language: e.language,
      "old-string": e.text,
      "new-string": e.text
    }, null, 8, ["language", "old-string", "new-string"]));
  }
}), Na = /* @__PURE__ */ Qn(Sa, [["__scopeId", "data-v-0c5adc58"]]);
function Ta(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Ma(...e) {
  return e.map((c) => Ta(c)).join("");
}
function Oa(e) {
  const r = {}, c = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [r]
      }
      // default values
    ]
  };
  Object.assign(r, {
    className: "variable",
    variants: [
      { begin: Ma(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      c
    ]
  });
  const p = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, b = {
    begin: /<<-?\s*(?=\w+)/,
    starts: {
      contains: [
        e.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ]
    }
  }, t = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      r,
      p
    ]
  };
  p.contains.push(t);
  const n = {
    className: "",
    begin: /\\"/
  }, o = {
    className: "string",
    begin: /'/,
    end: /'/
  }, a = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      e.NUMBER_MODE,
      r
    ]
  }, l = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], i = e.SHEBANG({
    binary: `(${l.join("|")})`,
    relevance: 10
  }), s = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  };
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z._-]+\b/,
      keyword: [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function"
      ],
      literal: [
        "true",
        "false"
      ],
      built_in: (
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
      )
    },
    contains: [
      i,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      s,
      a,
      e.HASH_COMMENT_MODE,
      b,
      t,
      n,
      o,
      r
    ]
  };
}
const Ra = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  HEXCOLOR: {
    scope: "number",
    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  }
}), Da = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], La = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], Ia = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], Ca = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], Pa = [
  "align-content",
  "align-items",
  "align-self",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "auto",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "clear",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "content",
  "counter-increment",
  "counter-reset",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-variant-ligatures",
  "font-variation-settings",
  "font-weight",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inherit",
  "initial",
  "justify-content",
  "left",
  "letter-spacing",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "right",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-last",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-indent",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "white-space",
  "widows",
  "width",
  "word-break",
  "word-spacing",
  "word-wrap",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();
function ja(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Ba(e) {
  return za("(?=", e, ")");
}
function za(...e) {
  return e.map((c) => ja(c)).join("");
}
function Ua(e) {
  const r = Ra(e), c = {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  }, p = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  }, b = "and or not only", t = /@-?\w[\w]*(-\w+)*/, n = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      e.C_BLOCK_COMMENT_MODE,
      p,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      r.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + n,
        relevance: 0
      },
      r.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          {
            begin: ":(" + Ia.join("|") + ")"
          },
          {
            begin: "::(" + Ca.join("|") + ")"
          }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      {
        className: "attribute",
        begin: "\\b(" + Pa.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: ":",
        end: "[;}]",
        contains: [
          r.HEXCOLOR,
          r.IMPORTANT,
          r.CSS_NUMBER_MODE,
          ...o,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          c
        ]
      },
      {
        begin: Ba(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: t
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: b,
              attribute: La.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...o,
              r.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Da.join("|") + ")\\b"
      }
    ]
  };
}
function ko(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Fa(e) {
  return Ao("(?=", e, ")");
}
function Ao(...e) {
  return e.map((c) => ko(c)).join("");
}
function Ha(e) {
  const r = e[e.length - 1];
  return typeof r == "object" && r.constructor === Object ? (e.splice(e.length - 1, 1), r) : {};
}
function Ka(...e) {
  return "(" + (Ha(e).capture ? "" : "?:") + e.map((p) => ko(p)).join("|") + ")";
}
function Ga(e) {
  const r = {
    className: "number",
    relevance: 0,
    variants: [
      {
        begin: /([+-]+)?[\d]+_[\d_]+/
      },
      {
        begin: e.NUMBER_RE
      }
    ]
  }, c = e.COMMENT();
  c.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const p = {
    className: "variable",
    variants: [
      {
        begin: /\$[\w\d"][\w\d_]*/
      },
      {
        begin: /\$\{(.*?)\}/
      }
    ]
  }, b = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  }, t = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  }, n = {
    begin: /\[/,
    end: /\]/,
    contains: [
      c,
      b,
      p,
      t,
      r,
      "self"
    ],
    relevance: 0
  }, i = Ka(
    /[A-Za-z0-9_-]+/,
    /"(\\"|[^"])*"/,
    /'[^']*'/
  ), s = Ao(
    i,
    "(\\s*\\.\\s*",
    i,
    ")*",
    Fa(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      c,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: s,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            c,
            n,
            b,
            p,
            t,
            r
          ]
        }
      }
    ]
  };
}
const bo = "[A-Za-z$_][0-9A-Za-z$_]*", Qa = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], Za = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], So = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer",
  "BigInt64Array",
  "BigUint64Array",
  "BigInt"
], No = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], To = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Wa = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global"
  // Node.js
], Ya = [].concat(
  To,
  So,
  No
);
function Ja(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function hn(e) {
  return mt("(?=", e, ")");
}
function mt(...e) {
  return e.map((c) => Ja(c)).join("");
}
function qa(e) {
  const r = (re, { after: ye }) => {
    const le = "</" + re[0].slice(1);
    return re.input.indexOf(le, ye) !== -1;
  }, c = bo, p = {
    begin: "<>",
    end: "</>"
  }, b = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (re, ye) => {
      const le = re[0].length + re.index, ge = re.input[le];
      if (ge === "<") {
        ye.ignoreMatch();
        return;
      }
      ge === ">" && (r(re, { after: le }) || ye.ignoreMatch());
    }
  }, t = {
    $pattern: bo,
    keyword: Qa,
    literal: Za,
    built_in: Ya,
    "variable.language": Wa
  }, n = "[0-9](_?[0-9])*", o = `\\.(${n})`, a = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", l = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${a})((${o})|\\.)?|(${o}))[eE][+-]?(${n})\\b` },
      { begin: `\\b(${a})\\b((${o})\\b|\\.)?|(${o})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, i = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: t,
    contains: []
    // defined later
  }, s = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ],
      subLanguage: "xml"
    }
  }, d = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ],
      subLanguage: "css"
    }
  }, g = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      i
    ]
  }, m = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: c + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    s,
    d,
    g,
    l,
    e.REGEXP_MODE
  ];
  i.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: t,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(m, i.contains), k = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: t,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: t,
    contains: k
  }, I = {
    variants: [
      {
        match: [
          /class/,
          /\s+/,
          c
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        match: [
          /extends/,
          /\s+/,
          mt(c, "(", mt(/\./, c), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class.inherited"
        }
      }
    ]
  }, S = {
    relevance: 0,
    match: /\b[A-Z][a-z]+([A-Z][a-z]+)*/,
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...So,
        ...No
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, B = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          c,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, G = {
    relevance: 0,
    match: /\b[A-Z][A-Z_]+\b/,
    className: "variable.constant"
  };
  function L(re) {
    return mt("(?!", re.join("|"), ")");
  }
  const Q = {
    match: mt(
      /\b/,
      L([
        ...To,
        "super"
      ]),
      c,
      hn(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
    begin: mt(/\./, hn(
      mt(c, /(?![0-9A-Za-z$_(])/)
    )),
    end: c,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, te = {
    match: [
      /get|set/,
      /\s+/,
      c,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, ie = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ee = {
    match: [
      /const|var|let/,
      /\s+/,
      c,
      /\s*/,
      /=\s*/,
      hn(ie)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: t,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: k },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      s,
      d,
      g,
      m,
      l,
      S,
      {
        className: "attr",
        begin: c + hn(":"),
        relevance: 0
      },
      ee,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          m,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ie,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    contains: k
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: p.begin, end: p.end },
              {
                begin: b.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": b.isTrulyOpeningTag,
                end: b.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: b.begin,
                end: b.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      B,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: c, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      V,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + c,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      Q,
      G,
      I,
      te,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Va(e) {
  const r = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, c = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, p = {
    beginKeywords: [
      "true",
      "false",
      "null"
    ].join(" ")
  };
  return {
    name: "JSON",
    contains: [
      r,
      c,
      e.QUOTE_STRING_MODE,
      p,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const Xa = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  HEXCOLOR: {
    scope: "number",
    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  }
}), $a = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], ei = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], Mo = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], Oo = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], ti = [
  "align-content",
  "align-items",
  "align-self",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "auto",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "clear",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "content",
  "counter-increment",
  "counter-reset",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-variant-ligatures",
  "font-variation-settings",
  "font-weight",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inherit",
  "initial",
  "justify-content",
  "left",
  "letter-spacing",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "right",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-last",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-indent",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "white-space",
  "widows",
  "width",
  "word-break",
  "word-spacing",
  "word-wrap",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse(), ni = Mo.concat(Oo);
function oi(e) {
  const r = Xa(e), c = ni, p = "and or not only", b = "[\\w-]+", t = "(" + b + "|@\\{" + b + "\\})", n = [], o = [], a = function(x) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + x + ".*?" + x
    };
  }, l = function(x, I, S) {
    return {
      className: x,
      begin: I,
      relevance: S
    };
  }, i = {
    $pattern: /[a-z-]+/,
    keyword: p,
    attribute: ei.join(" ")
  }, s = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: o,
    keywords: i,
    relevance: 0
  };
  o.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    a("'"),
    a('"'),
    r.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    },
    r.HEXCOLOR,
    s,
    l("variable", "@@?" + b, 10),
    l("variable", "@\\{" + b + "\\}"),
    l("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: b + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    },
    r.IMPORTANT
  );
  const d = o.concat({
    begin: /\{/,
    end: /\}/,
    contains: n
  }), g = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [
      {
        beginKeywords: "and not"
      }
    ].concat(o)
    // using this form to override VALUE’s 'function' match
  }, v = {
    begin: t + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      {
        begin: /-(webkit|moz|ms|o)-/
      },
      {
        className: "attribute",
        begin: "\\b(" + ti.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: o
        }
      }
    ]
  }, m = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: i,
      returnEnd: !0,
      contains: o,
      relevance: 0
    }
  }, y = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + b + "\\s*:",
        relevance: 15
      },
      {
        begin: "@" + b
      }
    ],
    starts: {
      end: "[;}]",
      returnEnd: !0,
      contains: d
    }
  }, _ = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: t,
        end: /\{/
      }
    ],
    returnBegin: !0,
    returnEnd: !0,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      g,
      l("keyword", "all\\b"),
      l("variable", "@\\{" + b + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + $a.join("|") + ")\\b",
        className: "selector-tag"
      },
      l("selector-tag", t + "%?", 0),
      // '%' for more consistent coloring of @keyframes "tags"
      l("selector-id", "#" + t),
      l("selector-class", "\\." + t, 0),
      l("selector-tag", "&", 0),
      r.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + Mo.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: "::(" + Oo.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: d
      },
      // argument list of parametric mixins
      {
        begin: "!important"
      }
      // eat !important after mixin call or it will be colored as tag
    ]
  }, k = {
    begin: b + `:(:)?(${c.join("|")})`,
    returnBegin: !0,
    contains: [_]
  };
  return n.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    m,
    y,
    k,
    v,
    _
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: n
  };
}
function ri(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function ai(...e) {
  return e.map((c) => ri(c)).join("");
}
function ii(e) {
  const r = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, c = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, p = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      {
        begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
      },
      {
        begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
      },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      {
        begin: "`.+?`"
      },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, b = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, t = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, o = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: ai(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.+?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, a = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}/,
        end: /_{2}/
      },
      {
        begin: /\*{2}/,
        end: /\*{2}/
      }
    ]
  }, l = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?!\*)/,
        end: /\*/
      },
      {
        begin: /_(?!_)/,
        end: /_/,
        relevance: 0
      }
    ]
  };
  a.contains.push(l), l.contains.push(a);
  let i = [
    r,
    o
  ];
  return a.contains = a.contains.concat(i), l.contains = l.contains.concat(i), i = i.concat(a, l), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: i
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              {
                begin: "^[=-]*$"
              },
              {
                begin: "^",
                end: "\\n",
                contains: i
              }
            ]
          }
        ]
      },
      r,
      b,
      a,
      l,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: i,
        end: "$"
      },
      p,
      c,
      o,
      t
    ]
  };
}
function li(e) {
  const r = {
    className: "variable",
    begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*(?![A-Za-z0-9])(?![$])"
  }, c = {
    className: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?[=]?/ },
      { begin: /\?>/ }
      // end php tag
    ]
  }, p = {
    className: "subst",
    variants: [
      { begin: /\$\w+/ },
      { begin: /\{\$/, end: /\}/ }
    ]
  }, b = e.inherit(e.APOS_STRING_MODE, {
    illegal: null
  }), t = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(p)
  }), n = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*(\w+)\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(p)
  }), o = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE, c],
    variants: [
      e.inherit(b, {
        begin: "b'",
        end: "'"
      }),
      e.inherit(t, {
        begin: 'b"',
        end: '"'
      }),
      t,
      b,
      n
    ]
  }, a = {
    className: "number",
    variants: [
      { begin: "\\b0b[01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?" }
    ],
    relevance: 0
  }, l = {
    keyword: (
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield"
    ),
    literal: "false null true",
    built_in: (
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
    )
  };
  return {
    case_insensitive: !0,
    keywords: l,
    contains: [
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$", { contains: [c] }),
      e.COMMENT(
        "/\\*",
        "\\*/",
        {
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      e.COMMENT(
        "__halt_compiler.+?;",
        !1,
        {
          endsWithParent: !0,
          keywords: "__halt_compiler"
        }
      ),
      c,
      {
        className: "keyword",
        begin: /\$this\b/
      },
      r,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          {
            beginKeywords: "use"
          },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            className: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: l,
            contains: [
              "self",
              r,
              e.C_BLOCK_COMMENT_MODE,
              o,
              a
            ]
          }
        ]
      },
      {
        className: "class",
        variants: [
          { beginKeywords: "enum", illegal: /[($"]/ },
          { beginKeywords: "class interface trait", illegal: /[:($"]/ }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      o,
      a
    ]
  };
}
function ci(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
const si = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  HEXCOLOR: {
    scope: "number",
    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  }
}), di = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], fi = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], gi = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], ui = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], bi = [
  "align-content",
  "align-items",
  "align-self",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "auto",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "clear",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "content",
  "counter-increment",
  "counter-reset",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-variant-ligatures",
  "font-variation-settings",
  "font-weight",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inherit",
  "initial",
  "justify-content",
  "left",
  "letter-spacing",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "right",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-last",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-indent",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "white-space",
  "widows",
  "width",
  "word-break",
  "word-spacing",
  "word-wrap",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();
function hi(e) {
  const r = si(e), c = ui, p = gi, b = "@[a-z-]+", t = "and or not only", o = {
    className: "variable",
    begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b"
  };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      r.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + di.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + p.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: "::(" + c.join("|") + ")"
      },
      o,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [r.CSS_NUMBER_MODE]
      },
      {
        className: "attribute",
        begin: "\\b(" + bi.join("|") + ")\\b"
      },
      {
        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
      },
      {
        begin: ":",
        end: ";",
        contains: [
          o,
          r.HEXCOLOR,
          r.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          r.IMPORTANT
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: b,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: t,
          attribute: fi.join(" ")
        },
        contains: [
          {
            begin: b,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          o,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          r.HEXCOLOR,
          r.CSS_NUMBER_MODE
        ]
      }
    ]
  };
}
function Ro(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function pi(...e) {
  return e.map((c) => Ro(c)).join("");
}
function mi(e) {
  const r = e[e.length - 1];
  return typeof r == "object" && r.constructor === Object ? (e.splice(e.length - 1, 1), r) : {};
}
function In(...e) {
  return "(" + (mi(e).capture ? "" : "?:") + e.map((p) => Ro(p)).join("|") + ")";
}
function vi(e) {
  const r = e.COMMENT("--", "$"), c = {
    className: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [
          { begin: /''/ }
        ]
      }
    ]
  }, p = {
    begin: /"/,
    end: /"/,
    contains: [{ begin: /""/ }]
  }, b = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], t = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], n = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], o = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], a = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], l = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], i = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], s = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], d = l, g = [...a, ...o].filter((k) => !l.includes(k)), v = {
    className: "variable",
    begin: /@[a-z0-9]+/
  }, m = {
    className: "operator",
    begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, y = {
    begin: pi(/\b/, In(...d), /\s*\(/),
    relevance: 0,
    keywords: {
      built_in: d
    }
  };
  function _(k, { exceptions: x, when: I } = {}) {
    const S = I;
    return x = x || [], k.map((O) => O.match(/\|\d+$/) || x.includes(O) ? O : S(O) ? `${O}|0` : O);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: _(g, { when: (k) => k.length < 3 }),
      literal: b,
      type: n,
      built_in: i
    },
    contains: [
      {
        begin: In(...s),
        relevance: 0,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: g.concat(s),
          literal: b,
          type: n
        }
      },
      {
        className: "type",
        begin: In(...t)
      },
      y,
      v,
      c,
      p,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      r,
      m
    ]
  };
}
const vn = "[A-Za-z$_][0-9A-Za-z$_]*", Do = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], Lo = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Io = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer",
  "BigInt64Array",
  "BigUint64Array",
  "BigInt"
], Co = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Po = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], jo = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global"
  // Node.js
], Bo = [].concat(
  Po,
  Io,
  Co
);
function yi(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function pn(e) {
  return vt("(?=", e, ")");
}
function vt(...e) {
  return e.map((c) => yi(c)).join("");
}
function wi(e) {
  const r = (re, { after: ye }) => {
    const le = "</" + re[0].slice(1);
    return re.input.indexOf(le, ye) !== -1;
  }, c = vn, p = {
    begin: "<>",
    end: "</>"
  }, b = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (re, ye) => {
      const le = re[0].length + re.index, ge = re.input[le];
      if (ge === "<") {
        ye.ignoreMatch();
        return;
      }
      ge === ">" && (r(re, { after: le }) || ye.ignoreMatch());
    }
  }, t = {
    $pattern: vn,
    keyword: Do,
    literal: Lo,
    built_in: Bo,
    "variable.language": jo
  }, n = "[0-9](_?[0-9])*", o = `\\.(${n})`, a = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", l = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${a})((${o})|\\.)?|(${o}))[eE][+-]?(${n})\\b` },
      { begin: `\\b(${a})\\b((${o})\\b|\\.)?|(${o})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, i = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: t,
    contains: []
    // defined later
  }, s = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ],
      subLanguage: "xml"
    }
  }, d = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ],
      subLanguage: "css"
    }
  }, g = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      i
    ]
  }, m = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: c + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    s,
    d,
    g,
    l,
    e.REGEXP_MODE
  ];
  i.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: t,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(m, i.contains), k = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: t,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: t,
    contains: k
  }, I = {
    variants: [
      {
        match: [
          /class/,
          /\s+/,
          c
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        match: [
          /extends/,
          /\s+/,
          vt(c, "(", vt(/\./, c), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class.inherited"
        }
      }
    ]
  }, S = {
    relevance: 0,
    match: /\b[A-Z][a-z]+([A-Z][a-z]+)*/,
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Io,
        ...Co
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, B = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          c,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, G = {
    relevance: 0,
    match: /\b[A-Z][A-Z_]+\b/,
    className: "variable.constant"
  };
  function L(re) {
    return vt("(?!", re.join("|"), ")");
  }
  const Q = {
    match: vt(
      /\b/,
      L([
        ...Po,
        "super"
      ]),
      c,
      pn(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
    begin: vt(/\./, pn(
      vt(c, /(?![0-9A-Za-z$_(])/)
    )),
    end: c,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, te = {
    match: [
      /get|set/,
      /\s+/,
      c,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, ie = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ee = {
    match: [
      /const|var|let/,
      /\s+/,
      c,
      /\s*/,
      /=\s*/,
      pn(ie)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: t,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: k },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      s,
      d,
      g,
      m,
      l,
      S,
      {
        className: "attr",
        begin: c + pn(":"),
        relevance: 0
      },
      ee,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          m,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ie,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    contains: k
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: p.begin, end: p.end },
              {
                begin: b.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": b.isTrulyOpeningTag,
                end: b.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: b.begin,
                end: b.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      B,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: c, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      V,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + c,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      Q,
      G,
      I,
      te,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function xi(e) {
  const r = vn, c = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: !0
  }, p = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: "interface extends"
  }, b = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, t = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "enum"
  ], n = [
    "type",
    "namespace",
    "typedef",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly"
  ], o = {
    $pattern: vn,
    keyword: Do.concat(n),
    literal: Lo,
    built_in: Bo.concat(t),
    "variable.language": jo
  }, a = {
    className: "meta",
    begin: "@" + r
  }, l = (d, g, v) => {
    const m = d.contains.findIndex((y) => y.label === g);
    if (m === -1)
      throw new Error("can not find mode to replace");
    d.contains.splice(m, 1, v);
  }, i = wi(e);
  Object.assign(i.keywords, o), i.exports.PARAMS_CONTAINS.push(a), i.contains = i.contains.concat([
    a,
    c,
    p
  ]), l(i, "shebang", e.SHEBANG()), l(i, "use_strict", b);
  const s = i.contains.find((d) => d.label === "func.def");
  return s.relevance = 0, Object.assign(i, {
    name: "TypeScript",
    aliases: ["ts", "tsx"]
  }), i;
}
function zo(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function ho(e) {
  return yt("(?=", e, ")");
}
function _i(e) {
  return yt("(?:", e, ")?");
}
function yt(...e) {
  return e.map((c) => zo(c)).join("");
}
function Ei(e) {
  const r = e[e.length - 1];
  return typeof r == "object" && r.constructor === Object ? (e.splice(e.length - 1, 1), r) : {};
}
function ki(...e) {
  return "(" + (Ei(e).capture ? "" : "?:") + e.map((p) => zo(p)).join("|") + ")";
}
function Ai(e) {
  const r = yt(/[A-Z_]/, _i(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/), c = /[A-Za-z0-9._:-]+/, p = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, b = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, t = e.inherit(b, {
    begin: /\(/,
    end: /\)/
  }), n = e.inherit(e.APOS_STRING_MODE, {
    className: "string"
  }), o = e.inherit(e.QUOTE_STRING_MODE, {
    className: "string"
  }), a = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: c,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [p]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [p]
              },
              {
                begin: /[^\s"'=<>`]+/
              }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          b,
          o,
          n,
          t,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  b,
                  t,
                  o,
                  n
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        {
          relevance: 10
        }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      p,
      {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [a],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [a],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: yt(
          /</,
          ho(yt(
            r,
            // <tag/>
            // <tag>
            // <tag ...
            ki(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: r,
            relevance: 0,
            starts: a
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: yt(
          /<\//,
          ho(yt(
            r,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: r,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function Si(e) {
  const r = "true false yes no null", c = "[\\w#;/?:@&=+$,.~*'()[\\]]+", p = {
    className: "attr",
    variants: [
      {
        begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)"
      },
      {
        // double quoted keys
        begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
      },
      {
        // single quoted keys
        begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
      }
    ]
  }, b = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, t = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /\S+/
      }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      b
    ]
  }, n = e.inherit(t, {
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /[^\s,{}[\]]+/
      }
    ]
  }), o = "[0-9]{4}(-[0-9][0-9]){0,2}", a = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?", l = "(\\.[0-9]*)?", i = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?", s = {
    className: "number",
    begin: "\\b" + o + a + l + i + "\\b"
  }, d = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: r,
    relevance: 0
  }, g = {
    begin: /\{/,
    end: /\}/,
    contains: [d],
    illegal: "\\n",
    relevance: 0
  }, v = {
    begin: "\\[",
    end: "\\]",
    contains: [d],
    illegal: "\\n",
    relevance: 0
  }, m = [
    p,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + c
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + c + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + c
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + c
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: r,
      keywords: {
        literal: r
      }
    },
    s,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    g,
    v,
    t
  ], y = [...m];
  return y.pop(), y.push(n), d.contains = y, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: m
  };
}
const Cn = "data:image/png;base64,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", Ni = (e) => (Qo("data-v-728cb081"), e = e(), Zo(), e), Ti = {
  key: 0,
  class: "min-h-[150px]"
}, Mi = { class: "flex items-center gap-[12px]" }, Oi = { class: "flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[var(--el-color-primary-light-9)]" }, Ri = {
  key: 1,
  class: "flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[var(--el-color-primary-light-9)]"
}, Di = { class: "min-w-0" }, Li = { class: "truncate text-[15px] font-[600] text-[#303133]" }, Ii = { class: "mt-[2px] text-[12px] text-[#909399]" }, Ci = {
  key: 2,
  class: "ml-auto flex flex-wrap items-center justify-end gap-[8px]"
}, Pi = ["onClick"], ji = { class: "relative mt-[14px] h-[380px]" }, Bi = {
  key: 0,
  class: "absolute inset-0 flex flex-col overflow-hidden"
}, zi = { class: "flex items-center gap-[8px] rounded-[8px] bg-[var(--el-color-primary-light-9)] px-[14px] py-[10px]" }, Ui = { class: "min-w-0 truncate text-[13px] text-[#303133]" }, Fi = { class: "mt-[14px] flex items-center gap-[12px]" }, Hi = { class: "w-[44px] shrink-0 text-right text-[14px] font-[600] text-[var(--el-color-primary)]" }, Ki = { class: "mt-[16px] flex min-h-0 flex-1 flex-col" }, Gi = { class: "mb-[8px] flex items-center justify-between" }, Qi = { class: "text-[13px] font-[500] text-[#303133]" }, Zi = { class: "text-[12px] text-[#909399]" }, Wi = {
  key: 0,
  class: "py-[6px] text-[12px] text-[#c0c4cc]"
}, Yi = {
  key: 0,
  class: "absolute inset-0 flex flex-col overflow-hidden"
}, Ji = {
  key: 0,
  class: "mb-[12px] flex items-center gap-[8px] rounded-[8px] bg-[#fdf6ec] px-[14px] py-[10px]"
}, qi = { class: "text-[12px] leading-[18px] text-[#e6a23c]" }, Vi = {
  key: 1,
  class: "mb-[12px] flex flex-wrap items-center justify-between gap-[10px]"
}, Xi = {
  key: 2,
  class: "flex flex-1 items-center justify-center"
}, $i = {
  key: 3,
  class: "flex flex-1 items-center justify-center"
}, el = {
  key: 4,
  class: "flex flex-1 items-center justify-center"
}, tl = {
  key: 5,
  class: "flex flex-1 flex-col items-center justify-center"
}, nl = { class: "mt-[10px] text-[14px] font-[500] text-[#303133]" }, ol = { class: "mt-[4px] text-[12px] text-[#909399]" }, rl = ["title"], al = { class: "diff-col-group" }, il = { class: "diff-col diff-col--size" }, ll = { class: "diff-col diff-col--hash" }, cl = { class: "diff-col diff-col--action" }, sl = { class: "flex flex-wrap items-center justify-between gap-[10px]" }, dl = {
  key: 0,
  class: "text-[12px] text-[#909399]"
}, fl = { key: 1 }, gl = { class: "flex items-center gap-[8px]" }, ul = { class: "mb-[10px] flex items-center gap-[8px]" }, bl = { class: "flex min-w-0 flex-1 items-center gap-[8px]" }, hl = ["title"], pl = { class: "compare-legend" }, ml = { class: "compare-legend__item compare-legend__item--local" }, vl = { class: "compare-legend__item compare-legend__item--official" }, yl = /* @__PURE__ */ Ni(() => /* @__PURE__ */ T("span", { class: "flex-1" }, null, -1)), wl = ["element-loading-text"], xl = { class: "mt-[12px] flex flex-wrap items-center gap-[8px]" }, _l = { class: "mt-[14px] text-[13px] font-bold text-[#303133]" }, El = { class: "mt-[6px] list-decimal pl-[18px] text-[13px] leading-[22px] text-[#606266]" }, kl = { class: "restore-result" }, Al = { class: "restore-result__summary-text" }, Sl = { class: "restore-result__refresh" }, Nl = {
  key: 0,
  class: "restore-result__backup"
}, Tl = {
  key: 1,
  class: "restore-result__section"
}, Ml = { class: "restore-result__section-title is-failed" }, Ol = { class: "restore-result__list" }, Rl = ["title"], Dl = { class: "restore-result__msg is-failed" }, Ll = {
  key: 2,
  class: "restore-result__section"
}, Il = { class: "restore-result__section-title" }, Cl = { class: "restore-result__list" }, Pl = ["title"], jl = { class: "restore-result__msg" }, Bl = /* @__PURE__ */ wt({
  __name: "index",
  props: {
    show: { type: Boolean },
    target: null,
    icon: null
  },
  emits: ["update:show"],
  setup(e, { emit: r }) {
    const c = e, p = {
      bash: Oa,
      css: Ua,
      ini: Ga,
      javascript: qa,
      json: Va,
      less: oi,
      markdown: ii,
      php: li,
      plaintext: ci,
      scss: hi,
      sql: vi,
      typescript: xi,
      xml: Ai,
      yaml: Si
    };
    Object.entries(p).forEach(([h, u]) => {
      Le.registerLanguage(h, u);
    });
    const b = (h) => h && h in p ? h : "plaintext", t = (h) => {
      var w, A, H;
      const u = (H = (A = (w = Jo) == null ? void 0 : w.global) == null ? void 0 : A.t) == null ? void 0 : H.call(A, h);
      return u == null ? h : String(u);
    }, n = (h) => h ? h === "framework" || h.startsWith("addon:") ? h : `addon:${h}` : "", o = Y(() => n(c.target)), a = Y({
      get: () => c.show,
      set: (h) => r("update:show", h)
    }), l = oe("loading"), i = oe(!0), s = oe(0), d = oe(null), g = oe(!1), v = oe(!1), m = oe(!1), y = oe(""), _ = oe([]), k = oe(""), x = oe(!1), I = oe(!1), S = Jn({ scanned: 0, total: 0 }), O = oe([]), B = oe(""), G = oe(""), L = Jn({ name: "", version: "", icon: "" }), Q = oe(!1), V = Y(() => S.total ? Math.min(100, Math.floor(S.scanned / S.total * 100)) : 0), te = 300;
    let ie = 0;
    const ee = oe([]), re = oe(), ye = (h) => {
      const u = h.data || {};
      switch (h.stage) {
        case "start":
          return t("logStart");
        case "baseline":
          return t("logBaseline");
        case "ready":
          return t("logReady").replace("%count%", String(u.total ?? 0));
        case "scanning":
          return t("logScanning").replace("%done%", String(u.scanned ?? 0)).replace("%total%", String(u.total ?? 0));
        case "finish":
          return Number(u.diff) > 0 ? t("logFinishDiff").replace("%count%", String(u.diff)) : t("logFinishSame");
        case "fallback":
          return t("logFallback");
        case "cancelled":
          return t("logCancelled");
        default:
          return "";
      }
    }, le = Y(() => {
      for (let h = ee.value.length - 1; h >= 0; h--) {
        const u = ee.value[h].stage;
        if (u === "baseline" || u === "ready" || u === "scanning" || u === "fallback")
          return ye(ee.value[h]);
      }
      return t("checking");
    }), ge = () => {
      let h = ee.value.filter((u) => u.stage === "scanning").length - te;
      h <= 0 || (ee.value = ee.value.filter((u) => h > 0 && u.stage === "scanning" ? (h--, !1) : !0));
    }, Te = (h, u) => {
      ee.value.push({ id: ++ie, time: new Date().toTimeString().slice(0, 8), stage: h, data: u }), ge(), gn(() => {
        re.value && (re.value.scrollTop = re.value.scrollHeight);
      });
    }, Ze = /* @__PURE__ */ new Set(), ke = (h, u) => {
      Ze.has(h) || (Ze.add(h), Te(h, u));
    }, We = (h) => {
      h.forEach((u) => {
        const w = String(u || "");
        w && !_.value.includes(w) && (_.value = _.value.concat([w]));
      });
    }, yn = Y(() => [
      { key: "", label: t("tabAll"), count: O.value.length },
      { key: "new", label: t("typeNew"), count: Pe("new") },
      { key: "modified", label: t("typeModified"), count: Pe("modified") },
      { key: "deleted", label: t("typeDeleted"), count: Pe("deleted") }
    ]), xt = Y(() => O.value.filter((h) => !(B.value && h.status !== B.value || G.value && !h.file.includes(G.value)))), ft = 38, en = 6, $e = oe(), _t = oe(0), { height: Et } = Wo($e), wn = Y(() => xt.value.length * ft), xn = Y(() => {
      const h = xt.value.length, u = Et.value || 380, w = Math.max(0, Math.floor(_t.value / ft) - en), A = Math.min(h, Math.ceil((_t.value + u) / ft) + en);
      return { start: w, end: A };
    }), _n = Y(() => {
      const { start: h, end: u } = xn.value;
      return xt.value.slice(h, u).map((w, A) => ({
        row: w,
        top: (h + A) * ft
      }));
    });
    let Ie = null, Ct = 0;
    const En = (h) => {
      Ct = h.target.scrollTop, Ie === null && (Ie = window.requestAnimationFrame(() => {
        Ie = null, _t.value = Ct;
      }));
    }, Pt = () => {
      Ie !== null && (window.cancelAnimationFrame(Ie), Ie = null), Ct = 0, _t.value = 0, $e.value && ($e.value.scrollTop = 0);
    };
    It([B, G], () => {
      Pt();
    }), It(l, (h) => {
      h === "list" && (Pt(), gn(() => {
        $e.value && ($e.value.scrollTop = 0);
      }));
    }), Ho(() => {
      Ie !== null && (window.cancelAnimationFrame(Ie), Ie = null);
    });
    const et = Y(() => xt.value.filter((h) => h.status !== "new")), Ce = Y(() => O.value.filter((h) => h.checked)), jt = Y(() => Ce.value.reduce((h, u) => h + u.size, 0)), tn = Y(() => et.value.filter((h) => h.checked)), Bt = Y({
      get: () => et.value.length > 0 && tn.value.length === et.value.length,
      set: (h) => {
        et.value.forEach((u) => {
          u.checked = h;
        });
      }
    }), nn = Y(() => {
      const h = tn.value.length;
      return h > 0 && h < et.value.length;
    }), Pe = (h) => O.value.filter((u) => u.status === h).length, zt = (h) => ({
      new: t("typeNew"),
      modified: t("typeModified"),
      deleted: t("typeDeleted")
    })[h] || h, Ye = (h) => ({ new: "primary", modified: "warning", deleted: "danger" })[h] || "info", tt = (h) => h ? h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : `${(h / 1024 / 1024).toFixed(1)} MB` : "0 B", on = (h) => (h.hashLocal || h.hashBaseline || "").slice(0, 8) || "-", gt = oe(!1), kt = oe(!1), At = oe(""), Ut = oe("modified"), we = oe(null), Ft = Y(() => {
      var h;
      return ((h = we.value) == null ? void 0 : h.file) || "";
    }), nt = oe(!1), kn = Y(() => nt.value ? t("compareExpanding") : t("compareLoading"));
    let ut = !1;
    const Ht = (h) => {
      var w, A;
      if (ut)
        return;
      const u = (A = (w = h.target) == null ? void 0 : w.closest) == null ? void 0 : A.call(w, ".load-more-button");
      u && (h.stopPropagation(), h.preventDefault(), ut = !0, nt.value = !0, window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        u.dispatchEvent(new MouseEvent("click", { bubbles: !0, cancelable: !0 })), ut = !1, window.requestAnimationFrame(() => {
          nt.value = !1;
        });
      })));
    }, Kt = Y(() => {
      const h = we.value;
      return !h || !h.official || h.official.content === null ? !1 : h.local.content !== null || h.local.state === "missing";
    }), Je = Y(() => {
      var h;
      return ((h = we.value) == null ? void 0 : h.local.content) ?? "";
    }), bt = Y(() => {
      var h, u;
      return ((u = (h = we.value) == null ? void 0 : h.official) == null ? void 0 : u.content) ?? "";
    }), Gt = (h) => {
      if (!h)
        return 0;
      let u = 1;
      for (let w = h.indexOf(`
`); w !== -1; w = h.indexOf(`
`, w + 1))
        u++;
      return u;
    }, ot = (h, u) => {
      if (!h)
        return h;
      let w = -1;
      for (let A = 1; A < u; A++) {
        const H = h.indexOf(`
`, w + 1);
        if (H === -1)
          return h;
        w = H;
      }
      return w === -1 ? h : h.slice(0, w);
    }, f = (h, u, w) => {
      if (!h)
        return h;
      const A = ot(h, u);
      return A.length > w ? A.slice(0, w) : A;
    }, E = 3e3, C = 200 * 1024, q = 500, ce = 2e4, se = 1024 * 1024, z = Y(() => Gt(Je.value)), j = Y(() => Gt(bt.value)), Z = Y(() => z.value + j.value), pe = Y(() => Je.value.length + bt.value.length), ue = Y(() => Z.value > E || pe.value > C), ht = Y(() => {
      const h = Math.max(z.value, j.value);
      return h <= q ? h + 1 : 10;
    }), pt = Y(() => z.value > ce || j.value > ce || Je.value.length > se || bt.value.length > se), Qt = Y(() => pt.value ? f(Je.value, ce, se) : Je.value), An = Y(() => pt.value ? f(bt.value, ce, se) : bt.value), Zt = Y(() => t(pt.value ? "compareLargeTruncatedTip" : "compareLargeTip")), rn = (h) => h.message || "-", Sn = Y(() => {
      const h = we.value;
      return h ? h.official_error || (h.official ? rn(h.official) : t("officialMissing")) : "";
    }), Nn = (h) => {
      Ut.value = h.status, gt.value = !0, kt.value = !0, At.value = "", we.value = null, nt.value = !1, ut = !1, qo({ target: o.value, file: h.file }).then((u) => (we.value = u.data || null, gn())).then(() => {
        window.requestAnimationFrame(() => {
          kt.value = !1;
        });
      }).catch((u) => {
        At.value = (u == null ? void 0 : u.msg) || t("compareFailed"), kt.value = !1;
      });
    }, rt = oe(!1), Ae = oe(null), at = oe(!1), an = Y(() => Ce.value.filter((h) => h.status === "modified").length), ln = Y(() => Ce.value.filter((h) => h.status === "deleted").length), Be = Y(() => t("restoreConfirmTip").replace("%count%", String(Ce.value.length)).replace("%size%", tt(jt.value))), cn = Y(() => [
      t("restoreConsequenceOverwrite"),
      t("restoreConsequenceDeleted"),
      t("restoreConsequenceBackup"),
      t("restoreConsequenceLive")
    ]), Wt = Y(() => {
      var h, u;
      return ((u = (h = Ae.value) == null ? void 0 : h.failed) == null ? void 0 : u.length) || 0;
    }), Tn = Y(() => {
      var u, w, A;
      const h = Ae.value;
      return h ? t("restoreSummary").replace("%ok%", String(((u = h.restored) == null ? void 0 : u.length) || 0)).replace("%skip%", String(((w = h.skipped) == null ? void 0 : w.length) || 0)).replace("%fail%", String(((A = h.failed) == null ? void 0 : A.length) || 0)) : "";
    }), Mn = () => {
      Ce.value.length && (at.value = !0);
    }, On = () => {
      const h = [...Ce.value];
      at.value = !1, h.length && St(h);
    }, St = (h) => {
      Q.value = !0, Vo({
        target: o.value,
        files: h.map((u) => u.file)
      }).then((u) => {
        const w = u.data || {};
        Ae.value = w, rt.value = !0, Array.isArray(w.warnings) && w.warnings.length && (_.value = _.value.concat(w.warnings));
      }).catch((u) => {
        nr.error((u == null ? void 0 : u.msg) || t("compareFailed"));
      }).finally(() => {
        Q.value = !1;
      });
    };
    let Me = 0;
    const N = /* @__PURE__ */ new Set(), F = () => {
      l.value = "loading", y.value = "", _.value = [], k.value = "", I.value = !1, ee.value = [], S.scanned = 0, S.total = 0, O.value = [], B.value = "", G.value = "", N.clear(), Ze.clear(), Pt();
    }, $ = 600;
    let ne = null;
    const de = () => {
      S.total > 0 && (S.scanned = S.total), l.value = "list", ne !== null && window.clearTimeout(ne), ne = window.setTimeout(() => {
        ne = null, x.value = !1;
      }, $);
    }, Se = (h) => {
      const u = [];
      h.forEach((w) => {
        !w || !w.file || N.has(w.file) || (N.add(w.file), u.push({
          file: w.file,
          status: w.status,
          size: w.size || 0,
          hashLocal: w.hash_local || "",
          hashBaseline: w.hash_baseline || "",
          // 默认只勾选「修改」：删除项写回等于把文件恢复出来，属于更大的动作，交给用户显式勾
          checked: w.status === "modified"
        }));
      }), u.length && (O.value = O.value.concat(u));
    }, ze = (h) => {
      const u = [];
      Object.keys(h.changed || {}).forEach((w) => {
        u.push({ file: w, status: h.changed[w], size: 0, hash_local: "", hash_baseline: "" });
      }), (h.deleted || []).forEach((w) => {
        u.push({ file: w, status: "deleted", size: 0, hash_local: "", hash_baseline: "" });
      }), Se(u);
    }, Nt = !1, xe = 6e3, Oe = 1500, Yt = "integrity_stream_disabled";
    let it = null, lt = null, Jt = !1, ct = !1;
    const qt = () => {
      lt !== null && (window.clearTimeout(lt), lt = null);
    }, Vt = (h, u) => {
      qt(), lt = window.setTimeout(() => {
        lt = null, !(h !== Me || ct) && Ne(h, !0);
      }, u);
    }, Tt = (h, u, w) => {
      if (u !== "log")
        return;
      const A = w == null ? void 0 : w.stage;
      if (A === "ready" || A === "scanning") {
        Jt = !0, Vt(h, Oe);
        return;
      }
      if (Jt || A === "baseline") {
        qt();
        return;
      }
      Vt(h, xe);
    }, Ue = () => {
      qt(), ne !== null && (window.clearTimeout(ne), ne = null), it && (it.close(), it = null);
    }, Ne = (h, u = !1) => {
      h === Me && (Ue(), u && Xn.set({ key: Yt, data: !0 }), ke("fallback"), S.scanned = 0, Mt(h));
    }, Rn = (h) => {
      try {
        it = new EventSource(Xo({ target: o.value }));
      } catch {
        Ne(h);
        return;
      }
      const u = it;
      Jt = !1, Vt(h, xe);
      const w = (A, H) => {
        u.addEventListener(A, (he) => {
          if (h !== Me)
            return;
          let _e = {};
          try {
            _e = JSON.parse(he.data);
          } catch {
            _e = {};
          }
          Tt(h, A, _e), H(_e);
        });
      };
      w("meta", (A) => {
        A.target_name && (L.name = String(A.target_name)), A.version && (L.version = String(A.version)), A.total !== void 0 && (S.total = Number(A.total || 0));
      }), w("log", (A) => {
        if (A.stage === "scanning") {
          S.scanned = Number(A.scanned || 0), A.total !== void 0 && (S.total = Number(A.total || 0)), Te(A.stage, A);
          return;
        }
        ke(A.stage, A);
      }), w("warning", (A) => We([A.text])), w("detail", (A) => {
        Array.isArray(A.rows) && Se(A.rows);
      }), w("done", (A) => {
        if (ct = !0, Ue(), A.skipped) {
          k.value = String(A.skip_reason || ""), We([k.value]), de();
          return;
        }
        S.scanned = Number(A.scanned ?? S.scanned), S.total = Number(A.total ?? S.total), ke("finish", { diff: A.diff ?? O.value.length }), de();
      }), w("failed", (A) => {
        ct = !0, Ue(), y.value = String(A.message || "") || t("checkFailed"), de();
      }), u.onerror = () => {
        h !== Me || ct || Ne(h);
      };
    }, Mt = (h) => {
      ke("baseline");
      const u = (w) => {
        h === Me && $o({ target: o.value, cursor: w }).then((A) => {
          if (h !== Me)
            return;
          const H = A.data || {};
          if (S.total = H.total || S.total, Array.isArray(H.warnings) && H.warnings.length && We(H.warnings), H.skipped) {
            k.value = String(H.skip_reason || ""), We([k.value]), de();
            return;
          }
          ke("ready", { total: H.total }), S.scanned += H.scanned || 0, Array.isArray(H.details) && H.details.length ? Se(H.details) : ze(H), Te("scanning", { scanned: S.scanned, total: H.total }), H.done ? (ke("finish", { diff: O.value.length }), de()) : u(H.next_cursor);
        }).catch((A) => {
          h === Me && (y.value = (A == null ? void 0 : A.msg) || t("checkFailed"), de());
        });
      };
      u(0);
    }, J = () => {
      const h = ++Me;
      if (Ue(), ct = !1, F(), x.value = !0, ke("start"), !Nt || typeof EventSource > "u" || Xn.get(Yt) === !0) {
        Mt(h);
        return;
      }
      Rn(h);
    }, sn = () => {
      if (l.value === "list") {
        Ue(), x.value = !1;
        return;
      }
      Me++, Ue(), x.value = !1, I.value = !0, ke("cancelled"), l.value = "list";
    }, ve = () => {
      er().then((h) => {
        const u = (h.data || []).find((w) => w.key === o.value);
        u && (L.name = u.name, L.version = u.version || "");
      }).catch(() => {
      });
    }, ae = () => {
      c.show && gn(() => {
        i.value = !1, J();
      });
    }, Ot = async () => {
      var h;
      if (!m.value) {
        m.value = !0;
        try {
          await ((h = d.value) == null ? void 0 : h.retry());
        } finally {
          m.value = !1;
        }
      }
    }, qe = () => {
      g.value = !1, v.value = !1;
    };
    It([() => c.show, () => c.target], ([h, u]) => {
      !h || !u || (L.icon = c.icon || "", ve(), i.value = !0, s.value++, g.value = !1, v.value = !1);
    });
    const Xt = () => {
      Me++, ct = !0, Ue(), x.value = !1, O.value = [], _.value = [], y.value = "", ee.value = [], we.value = null, gt.value = !1, rt.value = !1, at.value = !1, nt.value = !1, ut = !1;
    };
    return (h, u) => {
      const w = je("el-icon"), A = je("el-image"), H = je("el-progress"), he = je("el-checkbox"), _e = je("el-input"), Rt = je("el-empty"), Dt = je("el-tag"), Re = je("el-button"), Uo = je("el-tooltip"), st = je("el-alert"), dn = je("el-dialog"), Fo = Ko("loading");
      return R(), U(me, null, [
        W(dn, {
          modelValue: M(a),
          "onUpdate:modelValue": u[7] || (u[7] = (K) => qn(a) ? a.value = K : null),
          title: t("diffDialogTitle"),
          width: "880px",
          top: "6vh",
          "append-to-body": "",
          "close-on-click-modal": !1,
          onClosed: Xt
        }, {
          footer: X(() => [
            T("div", sl, [
              !i.value && O.value.length ? (R(), U("span", dl, P(t("selectedSummary")) + " " + P(M(Ce).length) + " " + P(t("filesUnit")) + " · " + P(tt(M(jt))), 1)) : (R(), U("span", fl)),
              T("div", gl, [
                i.value ? (R(), U(me, { key: 0 }, [
                  W(Re, {
                    onClick: u[5] || (u[5] = (K) => a.value = !1)
                  }, {
                    default: X(() => [
                      Ee(P(t("cancel")), 1)
                    ]),
                    _: 1
                  }),
                  !v.value && (g.value || m.value) ? (R(), be(Re, {
                    key: 0,
                    loading: m.value,
                    onClick: Ot
                  }, {
                    default: X(() => [
                      Ee(P(t("recheckAction")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : fe("", !0),
                  W(Re, {
                    type: "primary",
                    disabled: !v.value,
                    onClick: ae
                  }, {
                    default: X(() => [
                      Ee(P(t("startCheck")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ], 64)) : (R(), U(me, { key: 1 }, [
                  W(Re, {
                    onClick: u[6] || (u[6] = (K) => a.value = !1)
                  }, {
                    default: X(() => [
                      Ee(P(t("cancel")), 1)
                    ]),
                    _: 1
                  }),
                  x.value ? (R(), be(Re, {
                    key: 0,
                    type: "primary",
                    onClick: sn
                  }, {
                    default: X(() => [
                      Ee(P(t("cancelCheck")), 1)
                    ]),
                    _: 1
                  })) : (R(), U(me, { key: 1 }, [
                    W(Re, {
                      disabled: Q.value,
                      onClick: J
                    }, {
                      default: X(() => [
                        Ee(P(t("recheckAction")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    W(Re, {
                      type: "primary",
                      disabled: !M(Ce).length || Q.value,
                      onClick: Mn
                    }, {
                      default: X(() => [
                        Ee(P(t("restoreAction")) + " (" + P(M(Ce).length) + ") ", 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 64))
                ], 64))
              ])
            ])
          ]),
          default: X(() => [
            i.value ? (R(), U("div", Ti, [
              (R(), be(lr, {
                ref_key: "preCheckRef",
                ref: d,
                key: s.value,
                scene: "integrity",
                params: { target: M(o) },
                "auto-next": !0,
                "auto-next-delay": 500,
                "show-footer": !1,
                onNext: ae,
                onPassed: u[0] || (u[0] = (K) => v.value = !0),
                onFailed: u[1] || (u[1] = (K) => v.value = !1),
                onDone: u[2] || (u[2] = (K) => g.value = !0),
                onRetry: qe
              }, null, 8, ["params"]))
            ])) : (R(), U(me, { key: 1 }, [
              T("div", Mi, [
                L.icon ? (R(), be(A, {
                  key: 0,
                  src: M(Yo)(L.icon),
                  class: "h-[40px] w-[40px] shrink-0 rounded-[8px]",
                  fit: "cover"
                }, {
                  error: X(() => [
                    T("div", Oi, [
                      W(w, { class: "text-[18px] text-[var(--el-color-primary)]" }, {
                        default: X(() => [
                          W(M($n))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["src"])) : (R(), U("div", Ri, [
                  W(w, { class: "text-[18px] text-[var(--el-color-primary)]" }, {
                    default: X(() => [
                      W(M($n))
                    ]),
                    _: 1
                  })
                ])),
                T("div", Di, [
                  T("div", Li, P(L.name || c.target), 1),
                  T("div", Ii, "V" + P(L.version || "-"), 1)
                ]),
                !x.value && O.value.length ? (R(), U("div", Ci, [
                  (R(!0), U(me, null, He(M(yn), (K) => (R(), U("span", {
                    key: K.key,
                    class: Qe(["cursor-pointer rounded-full px-[12px] py-[4px] text-[12px] leading-[18px] transition-colors", B.value === K.key ? "bg-[var(--el-color-primary)] text-white" : "bg-[#f2f3f5] text-[#606266] hover:text-[var(--el-color-primary)]"]),
                    onClick: (Fe) => B.value = K.key
                  }, P(K.label) + " " + P(K.count), 11, Pi))), 128))
                ])) : fe("", !0)
              ]),
              T("div", ji, [
                W(Vn, { name: "cross-fade" }, {
                  default: X(() => [
                    x.value ? (R(), U("div", Bi, [
                      T("div", zi, [
                        W(w, { class: "shrink-0 text-[16px] text-[var(--el-color-primary)]" }, {
                          default: X(() => [
                            W(M(or))
                          ]),
                          _: 1
                        }),
                        T("span", Ui, P(t("detectingPrefix")) + " · " + P(M(le)), 1)
                      ]),
                      T("div", Fi, [
                        W(H, {
                          class: "flex-1",
                          percentage: M(V),
                          "stroke-width": 10,
                          "show-text": !1,
                          color: "var(--el-color-primary)"
                        }, null, 8, ["percentage"]),
                        T("span", Hi, P(M(V)) + "% ", 1)
                      ]),
                      T("div", Ki, [
                        T("div", Gi, [
                          T("span", Qi, P(t("logTitle")), 1),
                          T("span", Zi, P(t("logTotal").replace("%count%", String(ee.value.length))), 1)
                        ]),
                        T("div", {
                          ref_key: "logBox",
                          ref: re,
                          class: "min-h-0 flex-1 overflow-y-auto rounded-[8px] border border-solid border-[#ebeef5] px-[14px] py-[10px]"
                        }, [
                          ee.value.length ? fe("", !0) : (R(), U("div", Wi, P(t("logEmpty")), 1)),
                          (R(!0), U(me, null, He(ee.value, (K) => (R(), U("div", {
                            key: K.id,
                            class: Qe(["flex items-start gap-[8px] text-[12px] leading-[22px]", K.stage === "finish" ? "text-[var(--el-color-primary)]" : ""])
                          }, [
                            T("span", {
                              class: Qe(["shrink-0", K.stage === "finish" ? "text-[var(--el-color-primary)]" : "text-[#c0c4cc]"])
                            }, P(K.time), 3),
                            T("span", {
                              class: Qe(["min-w-0 flex-1 break-all", K.stage === "finish" ? "text-[var(--el-color-primary)]" : "text-[#606266]"])
                            }, P(ye(K)), 3)
                          ], 2))), 128))
                        ], 512)
                      ])
                    ])) : fe("", !0)
                  ]),
                  _: 1
                }),
                W(Vn, { name: "cross-fade" }, {
                  default: X(() => [
                    x.value ? fe("", !0) : (R(), U("div", Yi, [
                      O.value.length ? (R(), U("div", Ji, [
                        W(w, { class: "shrink-0 text-[15px] text-[#e6a23c]" }, {
                          default: X(() => [
                            W(M(eo))
                          ]),
                          _: 1
                        }),
                        T("span", qi, P(t("backupTip")), 1)
                      ])) : fe("", !0),
                      O.value.length ? (R(), U("div", Vi, [
                        W(he, {
                          modelValue: M(Bt),
                          "onUpdate:modelValue": u[3] || (u[3] = (K) => qn(Bt) ? Bt.value = K : null),
                          indeterminate: M(nn),
                          disabled: !M(et).length
                        }, {
                          default: X(() => [
                            Ee(P(t("diffSelectAll")), 1)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "indeterminate", "disabled"]),
                        W(_e, {
                          modelValue: G.value,
                          "onUpdate:modelValue": u[4] || (u[4] = (K) => G.value = K),
                          modelModifiers: { trim: !0 },
                          class: "diff-search-input !w-[200px]",
                          clearable: "",
                          placeholder: t("searchFilePlaceholder")
                        }, {
                          prefix: X(() => [
                            W(w, null, {
                              default: X(() => [
                                W(M(rr))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "placeholder"])
                      ])) : fe("", !0),
                      y.value ? (R(), U("div", Xi, [
                        W(Rt, {
                          description: t("checkFailed"),
                          image: M(Cn),
                          "image-size": "150"
                        }, null, 8, ["description", "image"])
                      ])) : k.value ? (R(), U("div", $i, [
                        W(Rt, {
                          description: t("targetSkipped"),
                          image: M(Cn),
                          "image-size": "150"
                        }, null, 8, ["description", "image"])
                      ])) : I.value ? (R(), U("div", el, [
                        W(Rt, {
                          description: t("checkCancelled"),
                          image: M(Cn),
                          "image-size": "150"
                        }, null, 8, ["description", "image"])
                      ])) : O.value.length ? (R(), U("div", {
                        key: 6,
                        ref_key: "listBox",
                        ref: $e,
                        class: "min-h-0 flex-1 overflow-y-auto rounded-[8px] border border-solid border-[#ebeef5]",
                        onScrollPassive: En
                      }, [
                        T("div", {
                          class: "relative w-full",
                          style: Pn({ height: M(wn) + "px" })
                        }, [
                          (R(!0), U(me, null, He(M(_n), (K) => (R(), U("div", {
                            key: K.row.file,
                            class: "diff-row",
                            style: Pn({ height: `${ft}px`, transform: `translateY(${K.top}px)` })
                          }, [
                            W(he, {
                              modelValue: K.row.checked,
                              "onUpdate:modelValue": (Fe) => K.row.checked = Fe,
                              disabled: K.row.status === "new"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                            W(Dt, {
                              type: Ye(K.row.status),
                              effect: "light",
                              class: "diff-tag"
                            }, {
                              default: X(() => [
                                Ee(P(zt(K.row.status)), 1)
                              ]),
                              _: 2
                            }, 1032, ["type"]),
                            T("span", {
                              class: "min-w-0 flex-1 truncate diff-name",
                              title: K.row.file
                            }, P(K.row.file), 9, rl),
                            T("span", al, [
                              T("span", il, P(tt(K.row.size)), 1),
                              T("span", ll, P(on(K.row)), 1)
                            ]),
                            T("span", cl, [
                              K.row.status !== "new" ? (R(), be(Uo, {
                                key: 0,
                                content: t("compareAction"),
                                placement: "top"
                              }, {
                                default: X(() => [
                                  W(Re, {
                                    size: "small",
                                    text: "",
                                    type: "primary",
                                    onClick: (Fe) => Nn(K.row)
                                  }, {
                                    default: X(() => [
                                      W(w, null, {
                                        default: X(() => [
                                          W(M(ar))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1032, ["content"])) : fe("", !0)
                            ])
                          ], 4))), 128))
                        ], 4)
                      ], 544)) : (R(), U("div", tl, [
                        W(w, { class: "text-[44px] text-[#67c23a]" }, {
                          default: X(() => [
                            W(M(to))
                          ]),
                          _: 1
                        }),
                        T("div", nl, P(t("identical")), 1),
                        T("div", ol, P(t("identicalTip").replace("%count%", String(S.total))), 1)
                      ]))
                    ]))
                  ]),
                  _: 1
                })
              ]),
              y.value ? (R(), be(st, {
                key: 0,
                class: "mt-[12px]",
                type: "error",
                closable: !1,
                "show-icon": "",
                title: y.value
              }, null, 8, ["title"])) : fe("", !0),
              (R(!0), U(me, null, He(_.value, (K, Fe) => (R(), be(st, {
                key: "w" + Fe,
                class: "mt-[12px] break-all",
                type: "warning",
                closable: !1,
                "show-icon": "",
                title: K
              }, null, 8, ["title"]))), 128))
            ], 64))
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        W(dn, {
          modelValue: gt.value,
          "onUpdate:modelValue": u[9] || (u[9] = (K) => gt.value = K),
          title: t("compareTitle"),
          width: "1180px",
          top: "5vh",
          "append-to-body": "",
          "close-on-click-modal": !1
        }, {
          footer: X(() => [
            W(Re, {
              onClick: u[8] || (u[8] = (K) => gt.value = !1)
            }, {
              default: X(() => [
                Ee(P(t("close")), 1)
              ]),
              _: 1
            })
          ]),
          default: X(() => [
            T("div", ul, [
              T("div", bl, [
                W(Dt, {
                  type: Ye(Ut.value),
                  effect: "light",
                  class: "shrink-0"
                }, {
                  default: X(() => [
                    Ee(P(zt(Ut.value)), 1)
                  ]),
                  _: 1
                }, 8, ["type"]),
                T("span", {
                  class: "min-w-0 flex-1 truncate text-[13px] text-[#303133]",
                  title: M(Ft)
                }, P(M(Ft)), 9, hl)
              ]),
              T("span", pl, [
                T("span", ml, P(t("localLabel")), 1),
                W(w, { class: "compare-legend__arrow" }, {
                  default: X(() => [
                    W(M(ir))
                  ]),
                  _: 1
                }),
                T("span", vl, P(t("officialLabel")), 1)
              ]),
              yl
            ]),
            Go((R(), U("div", {
              "element-loading-text": M(kn),
              class: "min-h-[200px]",
              onClickCapture: Ht
            }, [
              At.value ? (R(), be(st, {
                key: 0,
                type: "error",
                closable: !1,
                "show-icon": "",
                title: At.value
              }, null, 8, ["title"])) : we.value ? (R(), U(me, { key: 1 }, [
                we.value.in_baseline ? fe("", !0) : (R(), be(st, {
                  key: 0,
                  class: "mb-[10px]",
                  type: "info",
                  closable: !1,
                  "show-icon": "",
                  title: t("addNotRestorable")
                }, null, 8, ["title"])),
                M(Kt) && M(ue) ? (R(), be(st, {
                  key: 1,
                  class: "mb-[10px]",
                  type: "warning",
                  closable: !1,
                  "show-icon": "",
                  title: M(Zt)
                }, null, 8, ["title"])) : fe("", !0),
                M(Kt) ? (R(), be(M(Eo), {
                  key: 2,
                  "old-string": M(Qt),
                  "new-string": M(An),
                  language: b(we.value.language),
                  filename: we.value.file,
                  "output-format": "side-by-side",
                  "diff-style": "word",
                  context: M(ht),
                  "max-height": "56vh"
                }, null, 8, ["old-string", "new-string", "language", "filename", "context"])) : (R(), U(me, { key: 3 }, [
                  W(st, {
                    class: "mb-[10px]",
                    type: "warning",
                    closable: !1,
                    "show-icon": "",
                    title: t("officialLabel") + "：" + M(Sn)
                  }, null, 8, ["title"]),
                  we.value.local.content !== null ? (R(), be(M(Na), {
                    key: 0,
                    text: M(Je),
                    language: b(we.value.language)
                  }, null, 8, ["text", "language"])) : (R(), be(st, {
                    key: 1,
                    type: "info",
                    closable: !1,
                    "show-icon": "",
                    title: t("localLabel") + "：" + rn(we.value.local)
                  }, null, 8, ["title"]))
                ], 64))
              ], 64)) : fe("", !0)
            ], 40, wl)), [
              [Fo, kt.value || nt.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        W(dn, {
          modelValue: at.value,
          "onUpdate:modelValue": u[11] || (u[11] = (K) => at.value = K),
          title: t("restoreConfirmTitle"),
          width: "640px",
          "append-to-body": "",
          "close-on-click-modal": !1
        }, {
          footer: X(() => [
            W(Re, {
              onClick: u[10] || (u[10] = (K) => at.value = !1)
            }, {
              default: X(() => [
                Ee(P(t("cancel")), 1)
              ]),
              _: 1
            }),
            W(Re, {
              type: "danger",
              loading: Q.value,
              onClick: On
            }, {
              default: X(() => [
                Ee(P(t("confirmRestore")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          default: X(() => [
            W(st, {
              type: "warning",
              closable: !1,
              "show-icon": "",
              title: M(Be)
            }, null, 8, ["title"]),
            T("div", xl, [
              M(an) ? (R(), be(Dt, {
                key: 0,
                type: "warning",
                effect: "light"
              }, {
                default: X(() => [
                  Ee(P(t("typeModified")) + " " + P(M(an)), 1)
                ]),
                _: 1
              })) : fe("", !0),
              M(ln) ? (R(), be(Dt, {
                key: 1,
                type: "danger",
                effect: "light"
              }, {
                default: X(() => [
                  Ee(P(t("typeDeleted")) + " " + P(M(ln)), 1)
                ]),
                _: 1
              })) : fe("", !0)
            ]),
            T("div", _l, P(t("restoreConsequenceTitle")), 1),
            T("ol", El, [
              (R(!0), U(me, null, He(M(cn), (K, Fe) => (R(), U("li", {
                key: "c" + Fe
              }, P(K), 1))), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        W(dn, {
          modelValue: rt.value,
          "onUpdate:modelValue": u[13] || (u[13] = (K) => rt.value = K),
          title: t("restoreDoneTitle"),
          width: "560px",
          "append-to-body": "",
          class: "restore-result-dialog",
          "close-on-click-modal": !1
        }, {
          footer: X(() => [
            W(Re, {
              type: "primary",
              class: "!px-[28px]",
              onClick: u[12] || (u[12] = (K) => rt.value = !1)
            }, {
              default: X(() => [
                Ee(P(t("restoreDoneOk")), 1)
              ]),
              _: 1
            })
          ]),
          default: X(() => {
            var K, Fe, Zn, Wn, Yn;
            return [
              T("div", kl, [
                T("div", {
                  class: Qe(["restore-result__summary", M(Wt) ? "is-warning" : "is-success"])
                }, [
                  W(w, { class: "restore-result__summary-icon" }, {
                    default: X(() => [
                      M(Wt) ? (R(), be(M(eo), { key: 0 })) : (R(), be(M(to), { key: 1 }))
                    ]),
                    _: 1
                  }),
                  T("span", Al, P(M(Tn)), 1)
                ], 2),
                T("div", Sl, P(t("restoreRefreshTip")), 1),
                (K = Ae.value) != null && K.backup_dir ? (R(), U("div", Nl, P(t("backupDirLabel")) + "  " + P(Ae.value.backup_dir), 1)) : fe("", !0),
                (Zn = (Fe = Ae.value) == null ? void 0 : Fe.failed) != null && Zn.length ? (R(), U("div", Tl, [
                  T("div", Ml, P(t("restoreFailedList")), 1),
                  T("div", Ol, [
                    (R(!0), U(me, null, He(Ae.value.failed, (Ve) => (R(), U("div", {
                      key: "f" + Ve.file,
                      class: "restore-result__item"
                    }, [
                      T("div", {
                        class: "restore-result__file",
                        title: Ve.file
                      }, P(Ve.file), 9, Rl),
                      T("div", Dl, P(Ve.message), 1)
                    ]))), 128))
                  ])
                ])) : fe("", !0),
                (Yn = (Wn = Ae.value) == null ? void 0 : Wn.skipped) != null && Yn.length ? (R(), U("div", Ll, [
                  T("div", Il, P(t("restoreSkippedList")), 1),
                  T("div", Cl, [
                    (R(!0), U(me, null, He(Ae.value.skipped, (Ve) => (R(), U("div", {
                      key: "s" + Ve.file,
                      class: "restore-result__item"
                    }, [
                      T("div", {
                        class: "restore-result__file",
                        title: Ve.file
                      }, P(Ve.file), 9, Pl),
                      T("div", jl, P(Ve.message), 1)
                    ]))), 128))
                  ])
                ])) : fe("", !0)
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const Yl = /* @__PURE__ */ tr(Bl, [["__scopeId", "data-v-728cb081"]]);
export {
  Yl as default
};
