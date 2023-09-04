import { defineComponent, ref, createElementBlock, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
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
const whereToBuy_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "where-to-buy",
  __ssrInlineRender: true,
  setup(__props) {
    let cities = ref([]), activeCity = ref({}), activePoint = ref({}), pointsList = ref([]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-where-buy"><div class="container"><h1 class="section-where-buy__title">Гдe купить?</h1><div class="section-where-buy__content"><div class="section-where-buy__button-col"><div class="section-where-buy__button-scroll-container"><div class="dropdown dropdown--where-to-buy section-where-buy__dropdown show-desktop"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled${ssrRenderAttr("value", unref(activeCity).name)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
      ssrRenderList(unref(cities), (city) => {
        _push(`<li class="dropdown__option"${ssrRenderAttr("data-value", city.name)}>${ssrInterpolate(city.name)}</li>`);
      });
      _push(`<!--]--></ul></div><!--[-->`);
      ssrRenderList(unref(pointsList), (point) => {
        _push(`<div class="${ssrRenderClass([{ "section-where-buy__button--orange": unref(activePoint).id === point.id }, "section-where-buy__button section-where-buy__button--block"])}"><div class="section-where-buy__button-text-box"><p class="section-where-buy__button-text">${ssrInterpolate(point.name)}</p><address class="section-where-buy__button-addr"><svg class="section-where-buy__button-addr-icon"><use xlink:href="#map-marker"></use></svg> ${ssrInterpolate(point.address)}</address></div><svg class="section-where-buy__button-icon"><use xlink:href="#chevron-right"></use></svg></div>`);
      });
      _push(`<!--]--></div></div><div class="section-where-buy__map-col"><div class="dropdown dropdown--where-to-buy section-where-buy__dropdown hide-desktop"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled${ssrRenderAttr("value", unref(activeCity).name)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=where-to-buy-916d627c.js.map
