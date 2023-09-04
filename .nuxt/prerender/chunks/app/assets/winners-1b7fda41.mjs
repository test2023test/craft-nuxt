import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "winners",
  __ssrInlineRender: true,
  setup(__props) {
    ref(8);
    let lotteryWinners = ref([]);
    let isListEnd = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-winners"><div class="container"><h1 class="section-winners__title">\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438</h1><div class="section-winners__row-box"><ul${ssrRenderAttrs({ name: "winners-list" })}>`);
      ssrRenderList(unref(lotteryWinners), (winner, index) => {
        _push(`<div class="section-winners__row"><time class="section-winners__time section-winners__time--desktop">${ssrInterpolate(winner.lotteryDrawDate)}</time><p class="section-winners__text"><time class="section-winners__time section-winners__time--mobile">${ssrInterpolate(winner.lotteryDrawDate)}</time><span>${ssrInterpolate(winner.userFirstName)}</span></p><p class="section-winners__text">${ssrInterpolate(winner.userPhone)}</p><p class="section-winners__text">`);
        if (winner.lotteryType === "instant") {
          _push(`<!--[--> \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winner.lotteryType === "basic") {
          _push(`<!--[--> \u041E\u0431\u044B\u0447\u043D\u0430\u044F \u043B\u043E\u0442\u0435\u0440\u0435\u044F <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winner.lotteryType === "collection") {
          _push(`<!--[--> \u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432 <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="section-winners__text">${ssrInterpolate(winner.prizeName)}</p></div>`);
      });
      _push(`</ul></div><div class="section-winners__button-box">`);
      if (!unref(isListEnd)) {
        _push(`<button class="button button--orange button--orange-xs section-winners__button"> \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/winners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=winners-1b7fda41.mjs.map
