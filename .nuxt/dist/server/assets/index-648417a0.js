import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "swiper";
import "swiper/modules";
import { s as staticData, _ as __nuxt_component_5 } from "./BasicLotterySection-aab6a212.js";
import { useStore } from "vuex";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_0$1 = "" + __publicAssetsURL("images/instant-card-img1@1x.png");
const _sfc_main$2 = {
  __name: "instantSectionSlider",
  __ssrInlineRender: true,
  setup(__props) {
    ref("sliderSection");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-instant section-instant--prize-and-rules container" }, _attrs))}><h2 class="section-instant__title"><svg class="section-instant__title-icon"><use xlink:href="#lightning"></use></svg>Мгновенные призы </h2><div class="section-instant__slider"><div class="swiper section-instant__slider-elem" id="instant-slider"><div class="swiper-wrapper"><!--[-->`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-prizes section-prizes--sticker container" }, _attrs))}><h2 class="section-prizes__title"><svg class="section-prizes__title-icon"><use xlink:href="#target"></use></svg>Призы за коллекции стикеров </h2><div class="section-prizes__grid"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.collection, (lottery, lotteryIndex) => {
        _push(`<article class="prize">`);
        if (lottery.periodicity) {
          _push(`<p class="prize__label">${ssrInterpolate(lottery.periodicity)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="prize__condition">Среди всех, у кого 4 стикера<br>${ssrInterpolate(lottery.name)}</p><picture><source${ssrRenderAttr("srcset", staticData2[lotteryIndex].srcset)} type="image/webp"><img class="prize__img"${ssrRenderAttr("src", staticData2[lotteryIndex].srcimg)} alt=""></picture><h3 class="prize__title">${ssrInterpolate(lottery.prizeName)}</h3><p class="prize__players"> Сейчас участвует: ${ssrInterpolate(lottery.participantCount)} `);
        if (lottery.participantCount > 1 && lottery.participantCount < 5) {
          _push(`<!--[--> человека <!--]-->`);
        } else {
          _push(`<!--[--> человек <!--]-->`);
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
const _imports_0 = "" + __publicAssetsURL("images/hero-img1@1x.webp");
const _imports_1 = "" + __publicAssetsURL("images/hero-img1@2x.webp");
const _imports_2 = "" + __publicAssetsURL("images/hero-img1@1x.png");
const _imports_3 = "" + __publicAssetsURL("images/hero-img1@2x.png");
const _imports_4 = "" + __publicAssetsURL("images/steps-img1@1x.webp");
const _imports_5 = "" + __publicAssetsURL("images/steps-img1@2x.webp");
const _imports_6 = "" + __publicAssetsURL("images/steps-img1@1x.png");
const _imports_7 = "" + __publicAssetsURL("images/steps-img1@2x.png");
const _imports_8 = "" + __publicAssetsURL("images/steps-img2@1x.webp");
const _imports_9 = "" + __publicAssetsURL("images/steps-img2@2x.webp");
const _imports_10 = "" + __publicAssetsURL("images/steps-img2@1x.png");
const _imports_11 = "" + __publicAssetsURL("images/steps-img2@2x.png");
const _imports_12 = "" + __publicAssetsURL("images/steps-img3@1x.webp");
const _imports_13 = "" + __publicAssetsURL("images/steps-img3@2x.webp");
const _imports_14 = "" + __publicAssetsURL("images/steps-img3@1x.png");
const _imports_15 = "" + __publicAssetsURL("images/steps-img3@2x.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_instantSectionSlider = __nuxt_component_0;
      const _component_BasicLotterySection = __nuxt_component_5;
      const _component_StickerSectionPromo = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-hero"><div class="section-hero__container container"><div class="section-hero__text-box"><h1 class="section-hero__title">Вкус<br>путешествия<br>с «Крафт»</h1><p class="section-hero__text">Покупайте продукцию «Крафт» и получайте призы!<br>Главный приз - путешествие на двоих.</p><button class="button button--orange section-hero__button">Зарегистрировать код</button><p class="section-hero__period">Регистрация кодов с 20 июля по 12 октября 2023 г</p></div><div class="section-hero__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0 + ", " + _imports_1 + " 2x")} type="image/webp"><img class="section-hero__img"${ssrRenderAttr("src", _imports_2)}${ssrRenderAttr("srcset", _imports_3 + " 2x")} alt=""></picture><svg class="section-hero__waves"><use xlink:href="#waves"></use></svg><svg class="section-hero__dashes"><use xlink:href="#dashes"></use></svg></div></div></section><div class="black-wrapper"><div class="section-steps container"><div class="section-steps__grid"><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_4 + ", " + _imports_5 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_6)}${ssrRenderAttr("srcset", _imports_7 + " 2x")} alt=""></picture><figcaption><p class="step__text">Покупайте продукцию Крафт со знаком «Вкус путешествия с «Крафт»</p></figcaption></figure><svg class="section-steps__arrow"><use xlink:href="#steps-arrow"></use></svg><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_8 + ", " + _imports_9 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_10)}${ssrRenderAttr("srcset", _imports_11 + " 2x")} alt=""></picture><figcaption><p class="step__text"> Регистрируйте <br class="show-desktop">коды из-под крышек, получайте баллы и стикеры </p></figcaption></figure><svg class="section-steps__arrow"><use xlink:href="#steps-arrow"></use></svg><figure class="section-steps__elem step"><picture><source${ssrRenderAttr("srcset", _imports_12 + ", " + _imports_13 + " 2x")} type="image/webp"><img class="step__img"${ssrRenderAttr("src", _imports_14)}${ssrRenderAttr("srcset", _imports_15 + " 2x")} alt=""></picture><figcaption><p class="step__text">Участвуйте в розыгрыше призов каждый день</p></figcaption></figure></div><div class="section-steps__button-box"><button class="button button--orange button--orange-sm section-steps__button">Зарегистрировать</button></div></div><section class="section-prizes-text container"><h2 class="section-prizes-text__title">Призы</h2><p class="section-prizes-text__text">Чем БОЛЬШЕ КОДОВ ,<br class="hide-desktop"> тем ВЫШЕ ШАНС получить призы! </p></section>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-648417a0.js.map
