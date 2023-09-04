import { ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-7ff19e25.js";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    let date = ref({
      day: "01",
      mounth: "01",
      year: "2000"
    }), isWarning = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-login"><div class="section-login__container container"><img class="section-login__logo"${ssrRenderAttr("src", _imports_0)} alt><div class="section-login__text-box"><h1 class="section-login__title">Вкус путешествия с «Крафт»</h1><p class="section-login__text">Покупайте продукцию «Крафт» и получайте призы</p></div><form class="section-login__form"><p class="section-login__form-text">Укажите дату своего рождения для входа на сайт</p><div class="section-login__form-grid"><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).day)}><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).mounth)}><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).year)}></div>`);
      if (unref(isWarning)) {
        _push(`<div class="section-login__age-alert"><svg class="section-login__age-alert-icon"><use xlink:href="#info-thin"></use></svg><p class="section-login__age-alert-text">Извините, просматривать данный сайт могут только совершеннолетние посетители</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="button button--orange section-login__form-button" type="submit">Войти</button></form></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-203c814c.js.map
