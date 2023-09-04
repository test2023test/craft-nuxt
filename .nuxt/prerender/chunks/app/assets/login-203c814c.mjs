import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './logo-7ff19e25.mjs';
import '../../renderer.mjs';
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="section-login"><div class="section-login__container container"><img class="section-login__logo"${ssrRenderAttr("src", _imports_0)} alt><div class="section-login__text-box"><h1 class="section-login__title">\u0412\u043A\u0443\u0441 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0441\xA0\xAB\u041A\u0440\u0430\u0444\u0442\xBB</h1><p class="section-login__text">\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \xAB\u041A\u0440\u0430\u0444\u0442\xBB \u0438\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0437\u044B</p></div><form class="section-login__form"><p class="section-login__form-text">\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442</p><div class="section-login__form-grid"><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).day)}><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).mounth)}><input class="section-login__form-input" type="text"${ssrRenderAttr("value", unref(date).year)}></div>`);
      if (unref(isWarning)) {
        _push(`<div class="section-login__age-alert"><svg class="section-login__age-alert-icon"><use xlink:href="#info-thin"></use></svg><p class="section-login__age-alert-text">\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043C\u043E\u0433\u0443\u0442\xA0\u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="button button--orange section-login__form-button" type="submit">\u0412\u043E\u0439\u0442\u0438</button></form></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-203c814c.mjs.map
