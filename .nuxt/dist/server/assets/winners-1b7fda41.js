import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const winners_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "winners",
  __ssrInlineRender: true,
  setup(__props) {
    ref(8);
    let lotteryWinners = ref([]);
    let isListEnd = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-winners"><div class="container"><h1 class="section-winners__title">Победители</h1><div class="section-winners__row-box"><ul${ssrRenderAttrs({ name: "winners-list" })}>`);
      ssrRenderList(unref(lotteryWinners), (winner, index) => {
        _push(`<div class="section-winners__row"><time class="section-winners__time section-winners__time--desktop">${ssrInterpolate(winner.lotteryDrawDate)}</time><p class="section-winners__text"><time class="section-winners__time section-winners__time--mobile">${ssrInterpolate(winner.lotteryDrawDate)}</time><span>${ssrInterpolate(winner.userFirstName)}</span></p><p class="section-winners__text">${ssrInterpolate(winner.userPhone)}</p><p class="section-winners__text">`);
        if (winner.lotteryType === "instant") {
          _push(`<!--[--> Мгновенный приз <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winner.lotteryType === "basic") {
          _push(`<!--[--> Обычная лотерея <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (winner.lotteryType === "collection") {
          _push(`<!--[--> Коллекция стикеров <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="section-winners__text">${ssrInterpolate(winner.prizeName)}</p></div>`);
      });
      _push(`</ul></div><div class="section-winners__button-box">`);
      if (!unref(isListEnd)) {
        _push(`<button class="button button--orange button--orange-xs section-winners__button"> Показать еще </button>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=winners-1b7fda41.js.map
