import { useSSRContext, mergeProps, ref, unref, computed } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useStore } from '../server.mjs';
import { _ as __nuxt_component_5, s as staticData$1 } from './BasicLotterySection-aab6a212.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/klona/dist/index.mjs';
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

function showModal(modalName) {
}
const _sfc_main$5 = {
  data: () => ({
    page: 1,
    countOnPage: 5,
    isListEnd: false
  }),
  mounted() {
    this.fetchCodes();
  },
  methods: {
    async fetchCodes() {
      await this.$store.dispatch("user/fetchActiveCodeList", { page: this.page, countOnPage: this.countOnPage });
    },
    async loadMoreCode() {
      this.countOnPage += 5;
      await this.fetchCodes();
      this.isListEnd = !(this.countOnPage <= this.$store.state.user.activeCodeList.length);
    },
    showModal
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-card" }, _attrs))}><div class="data-card__title-box"><h2 class="data-card__title">\u041C\u043E\u0438 \u043A\u043E\u0434\u044B</h2><button class="button button--orange button--orange-xs data-card__desktop-btn">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434</button><button class="button button--orange button--orange-xs button--icon-only data-card__mobile-btn"><svg class="button__icon"><use xlink:href="#plus"></use></svg></button></div><!--[-->`);
  ssrRenderList(_ctx.$store.state.user.activeCodeList, (code, index) => {
    _push(`<div class="data-card__row"><div class="data-card__text-box"><time class="data-card__time">08.07.2023</time><span class="data-card__code">${ssrInterpolate(code.code_content)}</span></div>`);
    if (code.status === "duplicate") {
      _push(`<span class="data-card__status">\u0414\u0443\u0431\u043B\u0438\u043A\u0430\u0442</span>`);
    } else {
      _push(`<!---->`);
    }
    if (code.status === "wrong_code") {
      _push(`<span class="data-card__status">\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434</span>`);
    } else {
      _push(`<!---->`);
    }
    if (code.status === "success") {
      _push(`<span class="data-card__status data-card__status--green">\u041E\u0434\u043E\u0431\u0440\u0435\u043D</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  if (!_ctx.isListEnd) {
    _push(`<div class="data-card__button-box"><button class="button button--outline-orange data-card__more-button">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 <svg class="button__icon"><use xlink:href="#refresh"></use></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyCodesCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "UserWinCard",
  __ssrInlineRender: true,
  setup(__props) {
    ref(2);
    let winList = ref([]);
    let isListEnd = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-card" }, _attrs))}><div class="data-card__title-box"><h2 class="data-card__title">\u041C\u043E\u0438 \u043F\u0440\u0438\u0437\u044B</h2></div><ul${ssrRenderAttrs({ name: "win-list" })}>`);
      ssrRenderList(unref(winList), (winItem, index) => {
        _push(`<div class="data-card__row"><div class="data-card__text-box"><time class="data-card__time">08.07.2023</time><span class="data-card__text">`);
        if (winItem.lotteryType === "instant") {
          _push(`<!--[--> \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winItem.lotteryType === "basic") {
          _push(`<!--[--> \u041E\u0431\u044B\u0447\u043D\u0430\u044F \u043B\u043E\u0442\u0435\u0440\u0435\u044F <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winItem.lotteryType === "collection") {
          _push(`<!--[--> \u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432 <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div><span class="data-card__text">${ssrInterpolate(winItem.prizeName)}</span></div>`);
      });
      _push(`</ul><div class="data-card__button-box">`);
      if (!unref(isListEnd)) {
        _push(`<button class="button button--outline-orange data-card__more-button"> \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 <svg class="button__icon"><use xlink:href="#refresh"></use></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserWinCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "UserDataCard",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const firstName = computed(() => {
      var _a, _b;
      return ((_a = store.state.user.data) == null ? void 0 : _a.firstName) === "" ? "\u0418\u043C\u044F" : (_b = store.state.user.data) == null ? void 0 : _b.firstName;
    });
    const lastName = computed(() => {
      var _a, _b;
      return ((_a = store.state.user.data) == null ? void 0 : _a.lastName) === "" ? "\u0424\u0430\u043C\u0438\u043B\u0438\u044F" : (_b = store.state.user.data) == null ? void 0 : _b.lastName;
    });
    const phone = computed(() => {
      if (store.state.user.data.phone) {
        let numberArr = store.state.user.data.phone.split("");
        return `+${numberArr[0]} ${numberArr[1]}${numberArr[2]}${numberArr[3]} ${numberArr[4]}${numberArr[5]}${numberArr[6]} ${numberArr[7]}${numberArr[8]} ${numberArr[9]}${numberArr[10]}`;
      } else
        return "-";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-card" }, _attrs))}><div class="data-card__title-box"><h2 class="data-card__title">\u041C\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435</h2><button class="button button--outline-orange data-card__desktop-btn">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C <svg class="button__icon"><use xlink:href="#pencil"></use></svg></button><button class="button button--outline-orange button--icon-only data-card__mobile-btn" aria-label="Edit"><svg class="button__icon"><use xlink:href="#pencil"></use></svg></button></div><p class="data-card__name">${ssrInterpolate(firstName.value)} ${ssrInterpolate(lastName.value)}</p><p class="data-card__birthday"> \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ${ssrInterpolate(unref(store).state.user.data.dateOfBirth)}</p><p class="data-card__contacts"><svg class="data-card__contacts-icon"><use xlink:href="#phone"></use></svg>${ssrInterpolate(phone.value)}</p><p class="data-card__contacts"><svg class="data-card__contacts-icon"><use xlink:href="#envelope"></use></svg> ${ssrInterpolate(unref(store).state.user.data.email)}</p>`);
      if (!unref(store).state.user.data.isConfirmedEmail) {
        _push(`<div class="data-card__info-box"><p class="data-card__info-text-big"> \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 +50 \u0431\u0430\u043B\u043B\u043E\u0432 <br class="show-desktop">\u0437\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 e-mail </p><p class="data-card__info-text">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 +50 \u0431\u0430\u043B\u043B\u043E\u0432 \u0437\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 e-mail</p><p class="data-card__info-text-small"> \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E, \u0442\u043E <a class="text-orange" href="#">\u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0435\u0433\u043E \u0435\u0449\u0451 \u0440\u0430\u0437.</a></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="data-card__score-row"><p class="data-card__score"><span class="data-card__score-value">${ssrInterpolate(unref(store).state.user.data.loyalty_points)}</span>\u0411\u0430\u043B\u043B\u043E\u0432</p><p class="data-card__score"><span class="data-card__score-value">${ssrInterpolate(unref(store).getters["user/getStikerCount"])}</span>\u0421\u0442\u0438\u043A\u0435\u0440\u043E\u0432</p></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserDataCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const staticData = [
  {
    title: "\u041C\u0438\u043D\u0438 \u043F\u0438\u0432\u043E\u0432\u0430\u0440\u043D\u044F",
    subtitle: '\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 4 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 <span class="text-orange">30 \u041B\u0418\u0422\u0420\u041E\u0412</span> \u043F\u0438\u0432\u0430',
    countOfParticipants: '\u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: <span class="section-dashboard__players-counter">1020</span> \u0447\u0435\u043B\u043E\u0432\u0435\u043A',
    status: "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 4 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F",
    isActive: false,
    items: [
      {
        srcset: "/images/sticker1@1x.webp, /images/sticker1@2x.webp 2x",
        srcImg: "images/sticker1@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker2@1x.webp, /images/sticker2@2x.webp 2x",
        srcImg: "images/sticker2@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker3@1x.webp, /images/sticker3@2x.webp 2x",
        srcImg: "images/sticker3@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker4@1x.webp, /images/sticker4@2x.webp 2x",
        srcImg: "images/sticker4@2x.jpg 2x"
      }
    ]
  },
  {
    title: "\u0412\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0446\u0435\u0445",
    subtitle: 'C\u043E\u0431\u0435\u0440\u0438\u0442\u0435 4 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 <span class="text-orange">45 \u041B\u0418\u0422\u0420\u041E\u0412</span> \u043F\u0438\u0432\u0430',
    countOfParticipants: '\u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: <span class="section-dashboard__players-counter">1020</span> \u0447\u0435\u043B\u043E\u0432\u0435\u043A',
    status: "\u0412\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435",
    isActive: true,
    items: [
      {
        srcset: "/images/sticker5@1x.webp, /images/sticker5@2x.webp 2x",
        srcImg: "images/sticker5@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker6@1x.webp, /images/sticker6@2x.webp 2x",
        srcImg: "images/sticker6@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker7@1x.webp, /images/sticker7@2x.webp 2x",
        srcImg: "images/sticker7@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker8@1x.webp, /images/sticker8@2x.webp 2x",
        srcImg: "images/sticker8@2x.jpg 2x"
      }
    ]
  },
  {
    title: "\u0426\u0435\u0445 \u0440\u043E\u0437\u043B\u0438\u0432\u0430 \u043F\u0438\u0432\u0430",
    subtitle: '\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 4 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 <span class="text-orange">60 \u041B\u0418\u0422\u0420\u041E\u0412</span> \u043F\u0438\u0432\u0430',
    countOfParticipants: '\u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: <span class="section-dashboard__players-counter">1020</span> \u0447\u0435\u043B\u043E\u0432\u0435\u043A',
    status: "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 4 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F",
    isActive: false,
    items: [
      {
        srcset: "/images/sticker9@1x.webp, /images/sticker9@2x.webp 2x",
        srcImg: "images/sticker9@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker10@1x.webp, /images/sticker10@2x.webp 2x",
        srcImg: "images/sticker10@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker11@1x.webp, /images/sticker11@2x.webp 2x",
        srcImg: "images/sticker11@2x.jpg 2x"
      },
      {
        srcset: "/images/sticker12@1x.webp, /images/sticker12@2x.webp 2x",
        srcImg: "images/sticker12@2x.jpg 2x"
      }
    ]
  }
];
const _sfc_main$2 = {
  __name: "StikersSection",
  __ssrInlineRender: true,
  setup(__props) {
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-dashboard container" }, _attrs))}><h2 class="section-dashboard__title"><span class="text-orange">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u043E\u0434\u043E\u0432</span>,<br>\u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0441\u0442\u0438\u043A\u0435\u0440\u044B \u0438 \u0431\u0430\u043B\u043B\u044B, \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0437\u044B</h2><div class="section-dashboard__grid"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.collection, (stickerList, stickerListIndex) => {
        _push(`<div class="section-dashboard__col"><h3 class="section-dashboard__col-title">${ssrInterpolate(stickerList.name)}</h3><p class="section-dashboard__col-text">${stickerList.description}</p><p class="section-dashboard__players"> \u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: <span class="section-dashboard__players-counter">${ssrInterpolate(stickerList.participantCount)}</span>`);
        if (stickerList.participantCount > 1 && stickerList.participantCount < 5) {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 <!--]-->`);
        } else {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A <!--]-->`);
        }
        _push(`</p><div class="section-dashboard__col-grid"><!--[-->`);
        ssrRenderList(stickerList.stickers, (sticker, index) => {
          _push(`<figure class="${ssrRenderClass([{ "sticker--disabled": !sticker.activatedCount }, "sticker"])}"><picture><source${ssrRenderAttr("srcset", unref(staticData)[stickerListIndex].items[index].srcset)} type="image/webp"><img class="sticker__img"${ssrRenderAttr("src", sticker.iconUrl)}${ssrRenderAttr("srcset", unref(staticData)[stickerListIndex].items[index].srcImg)} alt=""></picture><figcaption><p class="sticker__text">${ssrInterpolate(sticker.name)}</p>`);
          if (sticker.activatedCount) {
            _push(`<span class="sticker__counter">${ssrInterpolate(sticker.activatedCount)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figcaption></figure>`);
        });
        _push(`<!--]--></div><p class="${ssrRenderClass([{ "section-dashboard__col-status--green": stickerList.isParticipant }, "section-dashboard__col-status"])}">`);
        if (stickerList.isParticipant) {
          _push(`<svg class="section-dashboard__col-status-icon"><use xlink:href="#thumbs-up"></use></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (!stickerList.isParticipant) {
          _push(`<!--[--> \u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 4 \u0441\u0442\u0438\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F <!--]-->`);
        } else {
          _push(`<!--[--> \u0412\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 <!--]-->`);
        }
        _push(`</p></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StikersSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "InstantSection",
  __ssrInlineRender: true,
  setup(__props) {
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-instant section-instant--lk container" }, _attrs))}><div class="section-instant__content-box"><h2 class="section-instant__title"><svg class="section-instant__title-icon"><use xlink:href="#lightning"></use></svg>\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u044B </h2><p class="section-instant__text"><span class="text-orange">\u041F\u041E\u041A\u0423\u041F\u0410\u0419\u0422\u0415 \u0411\u041E\u041B\u042C\u0428\u0415</span> \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0448\u0430\u043D\u0441 \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u044B </p><div class="swiper section-instant__slider-elem"><div class="swiper-wrapper section-instant__grid"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.instant, (lottery, index) => {
        _push(`<div class="section-instant__grid-col swiper-slide"><figure class="${ssrRenderClass([{ "instant-card--disabled": !lottery.isParticipant }, "instant-card instant-card--bg1"])}"><div class="instant-card__img-box"><picture><source${ssrRenderAttr("srcset", unref(staticData$1)[index].srcset)} type="image/webp"><img class="instant-card__img"${ssrRenderAttr("src", lottery.stickers[0].iconUrl)}${ssrRenderAttr("srcset", unref(staticData$1)[index].imgSrcset)} alt=""></picture></div><figcaption class="instant-card__text">${ssrInterpolate(lottery.name)} `);
        if (lottery.activatedCount) {
          _push(`<span class="instant-card__counter">${ssrInterpolate(lottery.activatedCount)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figcaption></figure></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstantSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  var _a, _b;
  const _component_MyCodesCard = __nuxt_component_0;
  const _component_UserWinCard = __nuxt_component_1;
  const _component_UserDataCard = __nuxt_component_2;
  const _component_StikersSection = __nuxt_component_3;
  const _component_InstantSection = __nuxt_component_4;
  const _component_BasicLotterySection = __nuxt_component_5;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-data"><div class="container"><h1 class="section-data__title">\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h1><div class="section-data__grid">`);
  _push(ssrRenderComponent(_component_MyCodesCard, null, null, _parent));
  _push(ssrRenderComponent(_component_UserWinCard, null, null, _parent));
  _push(ssrRenderComponent(_component_UserDataCard, null, null, _parent));
  _push(`</div></div></section>`);
  _push(ssrRenderComponent(_component_StikersSection, null, null, _parent));
  _push(ssrRenderComponent(_component_InstantSection, null, null, _parent));
  _push(ssrRenderComponent(_component_BasicLotterySection, { isLk: "" }, null, _parent));
  _push(`<section class="section-instant-prizes container"><h2 class="section-instant-prizes__title"></h2><p class="section-instant-prizes__text"></p><div class="section-instant-prizes__grid"></div></section><section class="section-lk-text container">`);
  if ((_a = _ctx.$store.state.user.data) == null ? void 0 : _a.firstName) {
    _push(`<h2 class="section-lk-text__text">${ssrInterpolate((_b = _ctx.$store.state.user.data) == null ? void 0 : _b.firstName)}, \u0436\u0435\u043B\u0430\u0435\u043C \u0432\u0430\u043C \u0443\u0434\u0430\u0447\u0438!</h2>`);
  } else {
    _push(`<h2 class="section-lk-text__text">\u0416\u0435\u043B\u0430\u0435\u043C \u0432\u0430\u043C \u0443\u0434\u0430\u0447\u0438!</h2>`);
  }
  _push(`<p class="section-lk-text__text"> \u0415\u0441\u043B\u0438 \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2014 <span class="text-orange">\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C</span>. </p></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lk as default };
//# sourceMappingURL=lk-b8d49537.mjs.map
