import { ref, mergeProps, unref, useSSRContext, defineComponent, createElementBlock } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "where-to-buy",
  __ssrInlineRender: true,
  setup(__props) {
    let cities = ref([]), activeCity = ref({}), activePoint = ref({}), pointsList = ref([]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-where-buy"><div class="container"><h1 class="section-where-buy__title">\u0413\u0434e \u043A\u0443\u043F\u0438\u0442\u044C?</h1><div class="section-where-buy__content"><div class="section-where-buy__button-col"><div class="section-where-buy__button-scroll-container"><div class="dropdown dropdown--where-to-buy section-where-buy__dropdown show-desktop"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434" disabled${ssrRenderAttr("value", unref(activeCity).name)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
      ssrRenderList(unref(cities), (city) => {
        _push(`<li class="dropdown__option"${ssrRenderAttr("data-value", city.name)}>${ssrInterpolate(city.name)}</li>`);
      });
      _push(`<!--]--></ul></div><!--[-->`);
      ssrRenderList(unref(pointsList), (point) => {
        _push(`<div class="${ssrRenderClass([{ "section-where-buy__button--orange": unref(activePoint).id === point.id }, "section-where-buy__button section-where-buy__button--block"])}"><div class="section-where-buy__button-text-box"><p class="section-where-buy__button-text">${ssrInterpolate(point.name)}</p><address class="section-where-buy__button-addr"><svg class="section-where-buy__button-addr-icon"><use xlink:href="#map-marker"></use></svg> ${ssrInterpolate(point.address)}</address></div><svg class="section-where-buy__button-icon"><use xlink:href="#chevron-right"></use></svg></div>`);
      });
      _push(`<!--]--></div></div><div class="section-where-buy__map-col"><div class="dropdown dropdown--where-to-buy section-where-buy__dropdown hide-desktop"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434" disabled${ssrRenderAttr("value", unref(activeCity).name)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
      ssrRenderList(unref(cities), (city) => {
        _push(`<li class="dropdown__option"${ssrRenderAttr("data-value", city.name)}>${ssrInterpolate(city.name)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/where-to-buy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=where-to-buy-916d627c.mjs.map
