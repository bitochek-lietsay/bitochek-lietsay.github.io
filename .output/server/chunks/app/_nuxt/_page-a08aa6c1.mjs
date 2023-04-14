import { u as useActive, _ as __nuxt_component_0$2, a as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_5$1, e as __nuxt_component_4 } from './Showcase-fa2366da.mjs';
import { useSSRContext, defineComponent, computed, markRaw, watch, withCtx, createVNode, openBlock, createElementBlock, resolveComponent, mergeProps, createBlock, Fragment, renderList, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute, n as navigateTo, d as useNuxtApp } from '../server.mjs';
import { Carousel, Slide } from 'vue3-carousel';
import { marked } from 'marked';
import { q as queryContent, u as useAsyncData } from './query-b51acd0b.mjs';
import { u as useHead } from './composables-6110c19f.mjs';
import 'vue-router';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'unhead';
import '@unhead/dom';
import '@unhead/shared';
import '@unhead/ssr';
import 'h3';
import 'ufo';
import '@unhead/addons';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'cookie-es';
import './utils-953f42e3.mjs';

const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const MdiChevronRight = { name: "mdi-chevron-right", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const MdiChevronLeft = { name: "mdi-chevron-left", render };
const _sfc_main$2 = {
  name: "App",
  components: {
    MdiChevronRight,
    MdiChevronLeft,
    Carousel,
    Slide
  },
  props: {
    examples: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { $viewport } = useNuxtApp();
    const { currentSlide } = useActive();
    const textHtml = computed(() => {
      var _a;
      return marked.parse((_a = props.examples.description) != null ? _a : "");
    });
    const itemsToShow = computed(() => {
      if ($viewport.isLessThan("tablet")) {
        return 1.5;
      }
      if ($viewport.isLessThan("desktop")) {
        return 2;
      }
      return 3;
    });
    const messages = computed(() => {
      if (itemsToShow.value >= 2) {
        return [null, ...props.examples.messages, null];
      }
      return props.examples.messages;
    });
    watch(itemsToShow, (itemsToShowVal) => {
      currentSlide.value = Number(itemsToShowVal >= 2);
    }, { immediate: true });
    const next = () => {
      currentSlide.value = Math.min(props.examples.messages.length - Number(itemsToShow.value < 2), currentSlide.value + 1);
    };
    const prev = () => {
      currentSlide.value = Math.max(0 + Number(itemsToShow.value >= 2), currentSlide.value - 1);
    };
    return {
      itemsToShow,
      currentSlide,
      messages,
      textHtml,
      next,
      prev
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MdiChevronLeft = resolveComponent("MdiChevronLeft");
  const _component_MdiChevronRight = resolveComponent("MdiChevronRight");
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_PromoExampleMessage = __nuxt_component_4;
  if ($props.examples) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "promo-examples" }, _attrs))}><div style="${ssrRenderStyle({ "padding-bottom": "32px" })}">${$setup.textHtml}</div>`);
    if (!_ctx.$viewport.isLessThan("tablet")) {
      _push(`<!--[--><button type="button" class="promo-examples-nav -prev">`);
      _push(ssrRenderComponent(_component_MdiChevronLeft, null, null, _parent));
      _push(`</button><button type="button" class="promo-examples-nav -next">`);
      _push(ssrRenderComponent(_component_MdiChevronRight, null, null, _parent));
      _push(`</button><!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(ssrRenderComponent(_component_Carousel, {
      modelValue: $setup.currentSlide,
      "onUpdate:modelValue": ($event) => $setup.currentSlide = $event,
      itemsToShow: $setup.itemsToShow,
      transition: 500,
      snapAlign: "center"
    }, {
      slides: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($setup.messages, (message, index) => {
            _push2(ssrRenderComponent(_component_Slide, {
              onClick: ($event) => $setup.currentSlide = index,
              key: index,
              index
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="carousel__item"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_PromoExampleMessage, {
                    index,
                    message
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode(_component_PromoExampleMessage, {
                        index,
                        message
                      }, null, 8, ["index", "message"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.messages, (message, index) => {
              return openBlock(), createBlock(_component_Slide, {
                onClickCapture: ($event) => $setup.currentSlide = index,
                key: index,
                index
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "carousel__item" }, [
                    createVNode(_component_PromoExampleMessage, {
                      index,
                      message
                    }, null, 8, ["index", "message"])
                  ])
                ]),
                _: 2
              }, 1032, ["onClickCapture", "index"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Promo/Example/Example.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "logo",
    viewBox: "0 0 475 230",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-1d56a7c9><g clip-path="url(#clip0_61_636)" data-v-1d56a7c9><g filter="url(#filter0_d_61_636)" data-v-1d56a7c9><path class="slezi" d="M137.137 86.592C136.849 86.304 136.561 86.208 136.177 86.208C135.889 86.208 135.505 86.4 135.217 86.688C129.745 92.352 123.121 94.752 111.025 94.752C105.265 94.752 99.9845 93.216 95.5685 90.432V34.272C100.081 31.488 105.265 29.952 111.025 29.952C123.217 29.952 131.473 35.712 131.473 43.968V44.448C131.473 45.408 132.241 45.888 132.913 45.888C133.585 45.888 134.353 45.408 134.353 44.448V28.704C134.353 27.84 133.585 27.36 132.913 27.36C132.241 27.36 131.473 27.84 131.473 28.704V35.328C127.537 30.24 119.953 27.264 111.025 27.264C94.6085 27.264 78.1925 40.032 78.1925 62.4C78.1925 84.864 94.7045 97.44 111.025 97.44C123.697 97.44 131.185 94.752 137.137 88.704C137.425 88.416 137.617 88.032 137.617 87.648C137.617 87.264 137.425 86.88 137.137 86.592ZM81.0725 62.4C81.0725 51.456 85.5845 42.144 92.6885 36.384V88.416C85.4885 82.656 81.0725 73.344 81.0725 62.4ZM204.37 93.312H200.434L181.426 30.048C181.138 29.184 180.562 28.8 179.794 28.8H158.77C158.098 28.8 157.522 29.376 157.522 30.144C157.522 30.912 158.098 31.488 158.77 31.488H164.434L144.85 93.312H139.474C138.802 93.312 138.226 93.984 138.226 94.656C138.226 95.424 138.802 96 139.474 96H154.258C154.93 96 155.506 95.424 155.506 94.656C155.506 93.984 154.93 93.312 154.258 93.312H147.826L166.93 32.928L185.074 93.312H179.698C179.026 93.312 178.45 93.984 178.45 94.656C178.45 95.424 179.026 96 179.698 96H204.37C205.042 96 205.618 95.424 205.618 94.656C205.618 93.984 205.042 93.312 204.37 93.312ZM188.05 93.312L169.522 31.488H178.834L197.458 93.312H188.05ZM255.362 80.832C254.69 80.832 253.922 81.312 253.922 82.272V93.312H231.362V62.4H250.466V67.296C250.466 68.16 251.138 68.64 252.002 68.64C252.674 68.64 253.346 68.16 253.346 67.296V54.432C253.346 53.568 252.578 53.088 251.906 53.088C251.138 53.088 250.466 53.568 250.466 54.432V59.712H231.362V31.488H253.25V41.088C253.25 41.952 254.018 42.432 254.69 42.432C255.362 42.432 256.13 41.952 256.13 41.088V30.144C256.13 29.376 255.554 28.8 254.69 28.8H212.354C211.49 28.8 211.01 29.472 211.01 30.144C211.01 30.912 211.49 31.488 212.354 31.488H216.386V93.312H211.874C211.01 93.312 210.53 93.888 210.53 94.656C210.53 95.328 211.01 96 211.874 96H255.362C256.13 96 256.802 95.424 256.802 94.656V82.272C256.802 81.312 256.034 80.832 255.362 80.832ZM219.266 93.312V31.488H228.482V93.312H219.266ZM291.952 58.272C298.384 55.68 302.896 50.016 302.896 43.392C302.896 33.312 295.408 26.976 284.08 26.976C277.744 26.976 271.696 29.952 268.336 34.176V28.704C268.336 27.936 267.76 27.36 266.896 27.36C266.032 27.36 265.456 27.936 265.456 28.704V43.008C265.456 43.776 266.128 44.352 266.896 44.352C267.664 44.352 268.336 43.776 268.336 43.008V41.952C268.336 35.04 275.824 29.664 284.08 29.664C285.424 29.664 286.672 29.76 287.824 29.952V56.736C286.672 57.024 285.328 57.12 284.08 57.12H277.456C276.592 57.12 276.016 57.6 276.016 58.464C276.016 59.328 276.592 59.808 277.456 59.808H284.08C285.328 59.808 286.576 59.904 287.824 60.096V94.464C286.576 94.656 285.328 94.752 284.08 94.752C273.424 94.752 264.784 87.552 264.016 78.528C263.92 77.568 263.344 77.088 262.48 77.088C261.712 77.088 261.136 77.472 261.136 78.336V78.528C261.904 89.088 271.888 97.44 284.08 97.44C296.848 97.44 307.216 88.32 307.216 77.088C307.216 68.352 300.88 61.056 291.952 58.272ZM290.704 55.872V30.624C296.56 32.448 300.016 36.96 300.016 43.392C300.016 48.96 296.176 53.76 290.704 55.872ZM290.704 93.792V60.768C298.672 63.072 304.336 69.504 304.336 77.088C304.336 84.768 298.672 91.392 290.704 93.792ZM346.134 55.872H336.246V31.488H339.702C340.47 31.488 341.046 30.912 341.046 30.144C341.046 29.376 340.47 28.8 339.702 28.8H317.814C317.046 28.8 316.374 29.376 316.374 30.144C316.374 30.912 317.046 31.488 317.814 31.488H321.27V93.312H317.91C317.046 93.312 316.566 93.888 316.566 94.656C316.566 95.424 317.046 96 317.91 96H346.134C357.078 96 366.102 86.976 366.102 75.936C366.102 64.896 357.078 55.872 346.134 55.872ZM393.078 93.312H387.318V31.488H392.118C392.886 31.488 393.462 30.912 393.462 30.144C393.462 29.376 392.886 28.8 392.118 28.8H367.926C366.966 28.8 366.39 29.376 366.39 30.144C366.39 30.912 366.966 31.488 367.926 31.488H372.342V93.312H367.158C366.39 93.312 365.814 93.888 365.814 94.656C365.814 95.52 366.39 96 367.158 96H393.078C393.846 96 394.422 95.52 394.422 94.656C394.422 93.888 393.846 93.312 393.078 93.312ZM324.15 93.312V31.488H333.366V93.312H324.15ZM375.222 93.312V31.488H384.438V93.312H375.222ZM346.134 93.312H336.246V58.56H346.134C347.862 58.56 349.59 58.848 351.222 59.328V92.544C349.59 93.024 347.862 93.312 346.134 93.312ZM354.102 91.296V60.576C359.478 63.552 363.222 69.312 363.222 75.936C363.222 82.56 359.478 88.32 354.102 91.296ZM79.0584 201.592C78.7704 201.304 78.4824 201.208 78.0984 201.208C77.8104 201.208 77.4264 201.4 77.1384 201.688C71.6664 207.352 65.0424 209.752 52.9464 209.752C47.1864 209.752 41.9064 208.216 37.4904 205.432V149.272C42.0024 146.488 47.1864 144.952 52.9464 144.952C65.1384 144.952 73.3944 150.712 73.3944 158.968V159.448C73.3944 160.408 74.1624 160.888 74.8344 160.888C75.5064 160.888 76.2744 160.408 76.2744 159.448V143.704C76.2744 142.84 75.5064 142.36 74.8344 142.36C74.1624 142.36 73.3944 142.84 73.3944 143.704V150.328C69.4584 145.24 61.8744 142.264 52.9464 142.264C36.5304 142.264 20.1144 155.032 20.1144 177.4C20.1144 199.864 36.6264 212.44 52.9464 212.44C65.6184 212.44 73.1064 209.752 79.0584 203.704C79.3464 203.416 79.5384 203.032 79.5384 202.648C79.5384 202.264 79.3464 201.88 79.0584 201.592ZM22.9944 177.4C22.9944 166.456 27.5064 157.144 34.6104 151.384V203.416C27.4104 197.656 22.9944 188.344 22.9944 177.4ZM147.251 208.312H143.315L123.827 145.048C123.539 144.184 122.963 143.8 122.195 143.8H101.171C100.499 143.8 99.9234 144.376 99.9234 145.144C99.9234 145.912 100.499 146.488 101.171 146.488H106.739L86.7714 208.312H81.3954C80.7234 208.312 80.1474 208.984 80.1474 209.656C80.1474 210.424 80.7234 211 81.3954 211H96.1794C96.8514 211 97.4274 210.424 97.4274 209.656C97.4274 208.984 96.8514 208.312 96.1794 208.312H89.7474L95.0274 191.992H122.867L127.955 208.312H122.579C121.907 208.312 121.331 208.984 121.331 209.656C121.331 210.424 121.907 211 122.579 211H147.251C147.923 211 148.499 210.424 148.499 209.656C148.499 208.984 147.923 208.312 147.251 208.312ZM130.931 208.312L111.923 146.488H121.331L140.339 208.312H130.931ZM122.099 189.304H95.8914L109.331 147.928L122.099 189.304ZM199.204 143.8H148.9C148.132 143.8 147.46 144.376 147.46 145.144V156.952C147.46 157.72 148.132 158.392 148.9 158.392C149.764 158.392 150.34 157.72 150.34 156.952V146.488H166.372V208.312H161.092C160.324 208.312 159.652 208.888 159.652 209.656C159.652 210.424 160.324 211 161.092 211H186.82C187.492 211 188.164 210.424 188.164 209.656C188.164 208.888 187.492 208.312 186.82 208.312H181.348V146.488H197.764V156.952C197.764 157.72 198.436 158.392 199.204 158.392C199.972 158.392 200.644 157.72 200.644 156.952V145.144C200.644 144.376 199.972 143.8 199.204 143.8ZM178.468 146.488V208.312H169.252V146.488H178.468ZM237.212 142.264C216.284 142.264 202.364 156.376 202.364 177.4C202.364 198.328 216.284 212.44 237.212 212.44C258.044 212.44 271.964 198.328 271.964 177.4C271.964 156.376 258.044 142.264 237.212 142.264ZM220.028 205.528V149.176C224.828 146.488 230.684 144.952 237.212 144.952C243.74 144.952 249.5 146.488 254.3 149.176V205.528C249.5 208.216 243.74 209.752 237.212 209.752C230.684 209.752 224.828 208.216 220.028 205.528ZM205.148 177.4C205.148 165.976 209.564 156.76 217.148 151.096V203.608C209.564 198.04 205.148 188.824 205.148 177.4ZM257.18 203.608V151.096C264.764 156.664 269.18 165.88 269.18 177.4C269.18 188.824 264.764 198.04 257.18 203.608ZM372.011 208.312H366.059V146.488H370.475C371.147 146.488 371.723 145.912 371.723 145.144C371.723 144.376 371.147 143.8 370.475 143.8H347.531C346.763 143.8 346.091 144.376 346.091 145.144C346.091 145.912 346.763 146.488 347.531 146.488H351.275V208.312H333.803V146.488H337.835C338.507 146.488 339.083 145.912 339.083 145.144C339.083 144.376 338.507 143.8 337.835 143.8H314.891C314.123 143.8 313.451 144.376 313.451 145.144C313.451 145.912 314.123 146.488 314.891 146.488H318.827V208.312H301.355V146.488H305.195C305.867 146.488 306.443 145.912 306.443 145.144C306.443 144.376 305.867 143.8 305.195 143.8H282.251C281.483 143.8 280.811 144.376 280.811 145.144C280.811 145.912 281.483 146.488 282.251 146.488H286.379V208.312H281.579C280.811 208.312 280.139 208.888 280.139 209.656C280.139 210.424 280.811 211 281.579 211H372.011C372.779 211 373.451 210.424 373.451 209.656C373.451 208.888 372.779 208.312 372.011 208.312ZM289.259 208.312V146.488H298.475V208.312H289.259ZM321.707 208.312V146.488H330.923V208.312H321.707ZM354.155 208.312V146.488H363.179V208.312H354.155ZM451.118 208.312H446.318V146.488H451.118C451.886 146.488 452.462 145.912 452.462 145.144C452.462 144.472 451.886 143.8 451.118 143.8H432.782C432.302 143.8 431.726 144.088 431.534 144.568L405.038 203.992V146.488H409.454C410.126 146.488 410.702 145.912 410.702 145.144C410.702 144.472 410.126 143.8 409.454 143.8H385.934C385.166 143.8 384.59 144.472 384.59 145.144C384.59 145.912 385.166 146.488 385.934 146.488H390.062V208.312H385.358C384.59 208.312 384.014 208.984 384.014 209.656C384.014 210.424 384.59 211 385.358 211H404.174C404.654 211 405.23 210.712 405.422 210.232L431.438 151.864V208.312H426.35C425.582 208.312 425.006 208.984 425.006 209.656C425.006 210.424 425.582 211 426.35 211H451.118C451.886 211 452.462 210.424 452.462 209.656C452.462 208.984 451.886 208.312 451.118 208.312ZM392.942 208.312V146.488H402.158V208.312H392.942ZM434.318 208.312V146.488H443.438V208.312H434.318Z" fill="#F752E0" data-v-1d56a7c9></path></g><g class="sliv" filter="url(#filter1_d_61_636)" data-v-1d56a7c9><path d="M161.16 121.54C160.867 121.54 160.627 121.447 160.44 121.26C160.24 121.073 160.14 120.833 160.14 120.54C160.14 120.233 160.24 119.987 160.44 119.8C160.627 119.613 160.867 119.52 161.16 119.52H179.9C180.193 119.52 180.433 119.613 180.62 119.8C180.82 119.987 180.92 120.233 180.92 120.54C180.92 120.833 180.82 121.073 180.62 121.26C180.433 121.447 180.193 121.54 179.9 121.54H161.16ZM208.749 126.2C207.896 126.2 207.082 126.067 206.309 125.8C205.536 125.533 204.862 125.16 204.289 124.68C203.716 124.2 203.296 123.647 203.029 123.02C202.896 122.74 202.896 122.48 203.029 122.24C203.176 122 203.416 121.847 203.749 121.78C203.989 121.727 204.222 121.767 204.449 121.9C204.689 122.02 204.869 122.207 204.989 122.46C205.149 122.793 205.409 123.1 205.769 123.38C206.142 123.66 206.589 123.887 207.109 124.06C207.629 124.233 208.176 124.32 208.749 124.32C209.389 124.32 209.976 124.22 210.509 124.02C211.056 123.82 211.496 123.533 211.829 123.16C212.162 122.773 212.329 122.3 212.329 121.74C212.329 121.033 212.049 120.4 211.489 119.84C210.942 119.28 210.036 118.933 208.769 118.8C207.116 118.64 205.816 118.153 204.869 117.34C203.922 116.527 203.449 115.52 203.449 114.32C203.449 113.44 203.696 112.693 204.189 112.08C204.682 111.467 205.349 111 206.189 110.68C207.042 110.36 207.989 110.2 209.029 110.2C209.842 110.2 210.549 110.313 211.149 110.54C211.762 110.767 212.296 111.08 212.749 111.48C213.202 111.88 213.596 112.353 213.929 112.9C214.116 113.193 214.189 113.473 214.149 113.74C214.122 113.993 213.996 114.193 213.769 114.34C213.516 114.5 213.242 114.533 212.949 114.44C212.656 114.347 212.436 114.173 212.289 113.92C212.076 113.533 211.816 113.207 211.509 112.94C211.202 112.673 210.842 112.467 210.429 112.32C210.016 112.16 209.529 112.08 208.969 112.08C207.982 112.067 207.156 112.253 206.489 112.64C205.822 113.013 205.489 113.593 205.489 114.38C205.489 114.78 205.589 115.167 205.789 115.54C206.002 115.9 206.382 116.213 206.929 116.48C207.489 116.747 208.289 116.933 209.329 117.04C210.916 117.2 212.149 117.687 213.029 118.5C213.922 119.3 214.369 120.36 214.369 121.68C214.369 122.44 214.209 123.1 213.889 123.66C213.582 124.22 213.162 124.693 212.629 125.08C212.109 125.453 211.509 125.733 210.829 125.92C210.162 126.107 209.469 126.2 208.749 126.2ZM226.579 126C226.285 126 226.039 125.9 225.839 125.7C225.652 125.5 225.559 125.253 225.559 124.96V111.42C225.559 111.127 225.659 110.88 225.859 110.68C226.059 110.48 226.299 110.38 226.579 110.38C226.872 110.38 227.119 110.48 227.319 110.68C227.519 110.88 227.619 111.127 227.619 111.42V123.92H234.859C235.152 123.92 235.399 124.02 235.599 124.22C235.799 124.42 235.899 124.667 235.899 124.96C235.899 125.253 235.799 125.5 235.599 125.7C235.399 125.9 235.152 126 234.859 126H226.579ZM247.431 126C247.137 126 246.891 125.9 246.691 125.7C246.491 125.5 246.391 125.253 246.391 124.96V111.42C246.391 111.113 246.491 110.867 246.691 110.68C246.891 110.48 247.137 110.38 247.431 110.38C247.737 110.38 247.984 110.48 248.171 110.68C248.371 110.867 248.471 111.113 248.471 111.42V124.96C248.471 125.253 248.371 125.5 248.171 125.7C247.984 125.9 247.737 126 247.431 126ZM265.825 126C265.398 126 265.085 125.78 264.885 125.34L259.025 111.94C258.838 111.487 258.818 111.113 258.965 110.82C259.112 110.527 259.392 110.38 259.805 110.38C260.272 110.38 260.592 110.587 260.765 111L265.905 123.34H265.685L270.925 111C271.032 110.76 271.152 110.6 271.285 110.52C271.432 110.427 271.625 110.38 271.865 110.38C272.265 110.38 272.538 110.527 272.685 110.82C272.845 111.1 272.845 111.413 272.685 111.76L266.765 125.34C266.672 125.553 266.545 125.72 266.385 125.84C266.238 125.947 266.052 126 265.825 126ZM295.07 121.54C294.777 121.54 294.537 121.447 294.35 121.26C294.15 121.073 294.05 120.833 294.05 120.54C294.05 120.233 294.15 119.987 294.35 119.8C294.537 119.613 294.777 119.52 295.07 119.52H313.81C314.104 119.52 314.344 119.613 314.53 119.8C314.73 119.987 314.83 120.233 314.83 120.54C314.83 120.833 314.73 121.073 314.53 121.26C314.344 121.447 314.104 121.54 313.81 121.54H295.07Z" fill="#3DD8FC" data-v-1d56a7c9></path></g></g><defs data-v-1d56a7c9><filter id="filter0_d_61_636" x="13.1143" y="19.976" width="446.348" height="199.464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-1d56a7c9><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-1d56a7c9></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-1d56a7c9></feColorMatrix><feOffset data-v-1d56a7c9></feOffset><feGaussianBlur stdDeviation="3.5" data-v-1d56a7c9></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-1d56a7c9></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.321569 0 0 0 0 0.878431 0 0 0 1 0" data-v-1d56a7c9></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_636" data-v-1d56a7c9></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_636" result="shape" data-v-1d56a7c9></feBlend></filter><filter id="filter1_d_61_636" x="155.14" y="105.2" width="164.69" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-1d56a7c9><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-1d56a7c9></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-1d56a7c9></feColorMatrix><feOffset data-v-1d56a7c9></feOffset><feGaussianBlur stdDeviation="2.5" data-v-1d56a7c9></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-1d56a7c9></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.847059 0 0 0 0 0.988235 0 0 0 1 0" data-v-1d56a7c9></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_636" data-v-1d56a7c9></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_636" result="shape" data-v-1d56a7c9></feBlend></filter><clipPath id="clip0_61_636" data-v-1d56a7c9><rect width="475" height="230" fill="white" data-v-1d56a7c9></rect></clipPath></defs></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Promo/Logo/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1d56a7c9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const route = useRoute();
    const queryBuilder = computed(() => markRaw(queryContent(`${route.params.page}`)));
    const { data: promoData } = useAsyncData("pagePromoData", () => queryBuilder.value.findOne());
    useHead({
      title: computed(() => {
        var _a2;
        var _a;
        return (_a2 = (_a = promoData.value) == null ? void 0 : _a.meta.title) != null ? _a2 : "\u0421\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438\u0437 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043A\u0440\u0438\u043F\u0442\u043E\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432";
      }),
      meta: [
        {
          property: "og:image",
          content: "/promo/slezi-satoshi/images/slezisatoshi-promo-example.png"
        }
      ]
    });
    watch(promoData, (d) => {
      console.log(d);
    }, { immediate: true });
    watch(() => route.params.page, (page) => {
      if (page !== "slezi-satoshi") {
        navigateTo("slezi-satoshi");
      }
    }, { immediate: true });
    return {
      promoData
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PromoContent = __nuxt_component_0$2;
  const _component_PromoLogo = __nuxt_component_1;
  const _component_PromoDescription = __nuxt_component_1$1;
  const _component_PromoAction = __nuxt_component_2;
  const _component_PromoImage = __nuxt_component_3;
  const _component_PromoExample = __nuxt_component_5;
  const _component_PromoShowcase = __nuxt_component_5$1;
  _push(ssrRenderComponent(_component_PromoContent, _attrs, {
    main: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(_component_PromoLogo, { project: "slizisatoshi" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PromoDescription, {
          project: "slizisatoshi",
          description: (_a = _ctx.promoData) == null ? void 0 : _a.description
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PromoAction, {
          href: "https://t.me/slezisatoshifree",
          text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u043D\u0430\u043B"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PromoLogo, { project: "slizisatoshi" }),
          createVNode(_component_PromoDescription, {
            project: "slizisatoshi",
            description: (_b = _ctx.promoData) == null ? void 0 : _b.description
          }, null, 8, ["description"]),
          createVNode(_component_PromoAction, {
            href: "https://t.me/slezisatoshifree",
            text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u043D\u0430\u043B"
          })
        ];
      }
    }),
    aside: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PromoImage, { src: "/promo/slezi-satoshi/images/slezisatoshi-promo.png" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PromoImage, { src: "/promo/slezi-satoshi/images/slezisatoshi-promo.png" })
        ];
      }
    }),
    more: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(_component_PromoExample, {
          examples: (_a = _ctx.promoData) == null ? void 0 : _a.examples
        }, null, _parent2, _scopeId));
        _push2(`<div class="flex justify-center items-center mt-14" data-v-f28273ed${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PromoAction, {
          href: "https://t.me/slezisatoshifree",
          text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u043D\u0430\u043B"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_PromoShowcase, {
          isActive: false,
          description: "\u0421\u043A\u043E\u0440\u043E \u043C\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043C \u0441\u043B\u0438\u0432\u044B \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432. \u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0441\u044F \u043D\u0430 \u043D\u0430\u0448 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u043B\u0438\u0432 \u043A\u0430\u043D\u0430\u043B\u0430 '\u0421\u043B\u0435\u0437\u044B \u0421\u0430\u0442\u043E\u0448\u0438' \u0447\u0442\u043E \u0431\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PromoExample, {
            examples: (_b = _ctx.promoData) == null ? void 0 : _b.examples
          }, null, 8, ["examples"]),
          createVNode("div", { class: "flex justify-center items-center mt-14" }, [
            createVNode(_component_PromoAction, {
              href: "https://t.me/slezisatoshifree",
              text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u043D\u0430\u043B"
            })
          ]),
          createVNode(_component_PromoShowcase, {
            isActive: false,
            description: "\u0421\u043A\u043E\u0440\u043E \u043C\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043C \u0441\u043B\u0438\u0432\u044B \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432. \u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0441\u044F \u043D\u0430 \u043D\u0430\u0448 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u043B\u0438\u0432 \u043A\u0430\u043D\u0430\u043B\u0430 '\u0421\u043B\u0435\u0437\u044B \u0421\u0430\u0442\u043E\u0448\u0438' \u0447\u0442\u043E \u0431\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/:page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f28273ed"]]);

export { _page as default };
//# sourceMappingURL=_page-a08aa6c1.mjs.map
