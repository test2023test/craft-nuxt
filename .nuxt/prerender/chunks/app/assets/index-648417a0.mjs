import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext, ref, unref } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_5, s as staticData } from './BasicLotterySection-aab6a212.mjs';
import { u as useStore } from '../server.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/devalue/index.js';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const _imports_0$1 = "" + publicAssetsURL("images/instant-card-img1@1x.png");
const _sfc_main$2 = {
  __name: "instantSectionSlider",
  __ssrInlineRender: true,
  setup(__props) {
    ref("sliderSection");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-instant section-instant--prize-and-rules container" }, _attrs))}><h2 class="section-instant__title"><svg class="section-instant__title-icon"><use xlink:href="#lightning"></use></svg>\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u044B </h2><div class="section-instant__slider"><div class="swiper section-instant__slider-elem" id="instant-slider"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.instant, (sticker, index) => {
        _push(`<figure class="instant-prize swiper-slide"><div class="instant-prize__img-box"><picture><source${ssrRenderAttr("srcset", unref(staticData)[index].srcset)} type="image/webp"><img class="instant-prize__img"${ssrRenderAttr("src", _imports_0$1)}${ssrRenderAttr("srcset", unref(staticData)[index].imgSrcset)} alt=""></picture></div><figcaption class="instant-prize__text">${ssrInterpolate(sticker.name)}</figcaption></figure>`);
      });
      _push(`<!--]--></div></div><div class="section-instant__slider-nav"><button class="section-instant__slider-btn" id="instant-prev"><svg class="section-instant__slider-btn-icon"><use xlink:href="#slider-arrow"></use></svg></button><button class="section-instant__slider-btn section-instant__slider-btn--next"><svg class="section-instant__slider-btn-icon" id="instant-next"><use xlink:href="#slider-arrow"></use></svg></button></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instantSectionSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "StickerSectionPromo",
  __ssrInlineRender: true,
  setup(__props) {
    const staticData2 = [
      { srcset: "/images/prize-img4@1x.webp, /images/prize-img4@2x.webp 2x", srcimg: "/images/prize-img4@1x.png" },
      { srcset: "/images/prize-img1@1x.webp, /images/prize-img1@2x.webp 2x", srcimg: "/images/prize-img1@1x.png" },
      { srcset: "/images/prize-img5@1x.webp, /images/prize-img5@2x.webp 2x", srcimg: "/images/prize-img5@1x.png" }
    ];
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-prizes section-prizes--sticker container" }, _attrs))}><h2 class="section-prizes__title"><svg class="section-prizes__title-icon"><use xlink:href="#target"></use></svg>\u041F\u0440\u0438\u0437\u044B \u0437\u0430 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432 </h2><div class="section-prizes__grid"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.collection, (lottery, lotteryIndex) => {
        _push(`<article class="prize">`);
        if (lottery.periodicity) {
          _push(`<p class="prize__label">${ssrInterpolate(lottery.periodicity)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="prize__condition">\u0421\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445, \u0443 \u043A\u043E\u0433\u043E 4 \u0441\u0442\u0438\u043A\u0435\u0440\u0430<br>${ssrInterpolate(lottery.name)}</p><picture><source${ssrRenderAttr("srcset", staticData2[lotteryIndex].srcset)} type="image/webp"><img class="prize__img"${ssrRenderAttr("src", staticData2[lotteryIndex].srcimg)} alt=""></picture><h3 class="prize__title">${ssrInterpolate(lottery.prizeName)}</h3><p class="prize__players"> \u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: ${ssrInterpolate(lottery.participantCount)} `);
        if (lottery.participantCount > 1 && lottery.participantCount < 5) {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 <!--]-->`);
        } else {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A <!--]-->`);
        }
        _push(`</p></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StickerSectionPromo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _imports_0 = "" + publicAssetsURL("images/hero-img1@1x.webp");
const _imports_1 = "" + publicAssetsURL("images/hero-img1@2x.webp");
const _imports_2 = "" + publicAssetsURL("images/hero-img1@1x.png");
const _imports_3 = "" + publicAssetsURL("images/hero-img1@2x.png");
const _imports_4 = "" + publicAssetsURL("images/steps-img1@1x.webp");
const _imports_5 = "" + publicAssetsURL("images/steps-img1@2x.webp");
const _imports_6 = "" + publicAssetsURL("images/steps-img1@1x.png");
const _imports_7 = "" + publicAssetsURL("images/steps-img1@2x.png");
const _imports_8 = "" + publicAssetsURL("images/steps-img2@1x.webp");
const _imports_9 = "" + publicAssetsURL("images/steps-img2@2x.webp");
const _imports_10 = "" + publicAssetsURL("images/steps-img2@1x.png");
const _imports_11 = "" + publicAssetsURL("images/steps-img2@2x.png");
const _imports_12 = "" + publicAssetsURL("images/steps-img3@1x.webp");
const _imports_13 = "" + publicAssetsURL("images/steps-img3@2x.webp");
const _imports_14 = "" + publicAssetsURL("images/steps-img3@1x.png");
const _imports_15 = "" + publicAssetsURL("images/steps-img3@2x.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_instantSectionSlider = __nuxt_component_0;
      const _component_BasicLotterySection = __nuxt_component_5;
      const _component_StickerSectionPromo = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-hero"><div class="section-hero__container container"><div class="section-hero__text-box"><h1 class="section-hero__title">\u0412\u043A\u0443\u0441<br>\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F<br>\u0441\xA0\xAB\u041A\u0440\u0430\u0444\u0442\xBB</h1><p class="section-hero__text">\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \xAB\u041A\u0440\u0430\u0444\u0442\xBB \u0438\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0437\u044B!<br>\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 - \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445.</p><button class="button button--orange section-hero__button">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434</button><p class="section-hero__period">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u0434\u043E\u0432 \u0441 20 \u0438\u044E\u043B\u044F \u043F\u043E 12 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2023 \u0433</p></div><div class="section-hero__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0 + ", " + _imports_1 + " 2x")} type="image/webp"><img class="section-hero__img"${ssrRenderAttr("src", _imports_2)}${ssrRenderAttr("srcset", _imports_3 + " 2x")} alt=""></picture><svg class="section-hero__waves"><use xlink:href="#waves"></use></svg><svg class="section-hero__dashes"><use xlink:href="#dashes"></use></svg></div></div></section><div class="black-wrapper"><div class="section-steps container"><div class="section-steps__grid"><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_4 + ", " + _imports_5 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_6)}${ssrRenderAttr("srcset", _imports_7 + " 2x")} alt=""></picture><figcaption><p class="step__text">\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u041A\u0440\u0430\u0444\u0442 \u0441\u043E \u0437\u043D\u0430\u043A\u043E\u043C \xAB\u0412\u043A\u0443\u0441 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0441 \xAB\u041A\u0440\u0430\u0444\u0442\xBB</p></figcaption></figure><svg class="section-steps__arrow"><use xlink:href="#steps-arrow"></use></svg><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_8 + ", " + _imports_9 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_10)}${ssrRenderAttr("srcset", _imports_11 + " 2x")} alt=""></picture><figcaption><p class="step__text"> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 <br class="show-desktop">\u043A\u043E\u0434\u044B \u0438\u0437-\u043F\u043E\u0434 \u043A\u0440\u044B\u0448\u0435\u043A, \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u0430\u043B\u043B\u044B \u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u044B </p></figcaption></figure><svg class="section-steps__arrow"><use xlink:href="#steps-arrow"></use></svg><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_12 + ", " + _imports_13 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_14)}${ssrRenderAttr("srcset", _imports_15 + " 2x")} alt=""></picture><figcaption><p class="step__text">\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 \u043F\u0440\u0438\u0437\u043E\u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C</p></figcaption></figure></div><div class="section-steps__button-box"><button class="button button--orange button--orange-sm section-steps__button">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div></div><section class="section-prizes-text container"><h2 class="section-prizes-text__title">\u041F\u0440\u0438\u0437\u044B</h2><p class="section-prizes-text__text">\u0427\u0435\u043C \u0411\u041E\u041B\u042C\u0428\u0415 \u041A\u041E\u0414\u041E\u0412 ,<br class="hide-desktop"> \u0442\u0435\u043C \u0412\u042B\u0428\u0415 \u0428\u0410\u041D\u0421 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0437\u044B! </p></section>`);
      _push(ssrRenderComponent(_component_instantSectionSlider, null, null, _parent));
      _push(ssrRenderComponent(_component_BasicLotterySection, null, null, _parent));
      _push(ssrRenderComponent(_component_StickerSectionPromo, null, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-648417a0.mjs.map
