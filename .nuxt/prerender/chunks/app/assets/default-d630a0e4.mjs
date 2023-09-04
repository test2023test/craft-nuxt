import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-99c863e4.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, withModifiers, ref } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$3 } from './logo-7ff19e25.mjs';
import { n as navigateTo, u as useStore, a as useRuntimeConfig } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_0$2 } from './Sprite-3ff66b58.mjs';
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
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useStore();
    const exit = () => {
      store.dispatch("user/logOutOfTheSystem");
    };
    const firstName = computed(() => {
      return store.state.user.data.firstName === "" ? "\u0418\u043C\u044F" : store.state.user.data.firstName;
    });
    const lastName = computed(() => {
      return store.state.user.data.lastName === "" ? "\u0424\u0430\u043C\u0438\u043B\u0438\u044F" : store.state.user.data.lastName;
    });
    function closeBurgerMenu() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__container container"><button class="header__menu-btn" aria-label="Menu"><svg class="header__menu-btn-icon header__menu-btn-icon--burger"><use xlink:href="#burger"></use></svg><svg class="header__menu-btn-icon header__menu-btn-icon--close"><use xlink:href="#close"></use></svg></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header__logo-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="header__logo"${ssrRenderAttr("src", _imports_0$3)} alt="alt"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "header__logo",
                src: _imports_0$3,
                alt: "alt"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="header__nav"><ul class="header__nav-list"><li class="header__nav-elem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: closeBurgerMenu,
        class: "header__nav-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u043F\u0440\u0438\u0437\u044B`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u043F\u0440\u0438\u0437\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav-elem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: closeBurgerMenu,
        class: "header__nav-link",
        to: "winners"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav-elem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: closeBurgerMenu,
        class: "header__nav-link",
        to: "where-to-buy"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav-elem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: closeBurgerMenu,
        class: "header__nav-link",
        "data-modal": "feedback"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C`);
          } else {
            return [
              createTextVNode("\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      if (unref(store).state.user.isLogin) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lk",
          class: "header__user-nav header__user-nav--active header__user-nav--mobile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="header__user-icon"${_scopeId}><use xlink:href="#user-icon"${_scopeId}></use></svg><div class="header__user-nav-box"${_scopeId}><p class="header__user-name"${_scopeId}>${ssrInterpolate(firstName.value)} ${ssrInterpolate(lastName.value)}</p><button class="header__user-logout"${_scopeId}>\u0412\u044B\u0439\u0442\u0438</button></div>`);
            } else {
              return [
                (openBlock(), createBlock("svg", { class: "header__user-icon" }, [
                  createVNode("use", { "xlink:href": "#user-icon" })
                ])),
                createVNode("div", { class: "header__user-nav-box" }, [
                  createVNode("p", { class: "header__user-name" }, toDisplayString(firstName.value) + " " + toDisplayString(lastName.value), 1),
                  createVNode("button", {
                    class: "header__user-logout",
                    onClick: withModifiers(exit, ["prevent", "stop"])
                  }, "\u0412\u044B\u0439\u0442\u0438", 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
      if (!unref(store).state.user.isLogin) {
        _push(`<div class="header__user-nav" data-modal="login"><a class="header__lk-link" href="#"><span class="header__lk-link-text">\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</span><svg class="header__user-icon"><use xlink:href="#user-icon"></use></svg></a></div>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lk",
          class: "header__user-nav header__user-nav--active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="header__user-nav-box"${_scopeId}><p class="header__user-name"${_scopeId}>${ssrInterpolate(firstName.value)} ${ssrInterpolate(lastName.value)}</p><button class="header__user-logout"${_scopeId}>\u0412\u044B\u0439\u0442\u0438</button></div><svg class="header__user-icon"${_scopeId}><use xlink:href="#user-icon"${_scopeId}></use></svg>`);
            } else {
              return [
                createVNode("div", { class: "header__user-nav-box" }, [
                  createVNode("p", { class: "header__user-name" }, toDisplayString(firstName.value) + " " + toDisplayString(lastName.value), 1),
                  createVNode("button", {
                    class: "header__user-logout",
                    onClick: withModifiers(exit, ["prevent", "stop"])
                  }, "\u0412\u044B\u0439\u0442\u0438", 8, ["onClick"])
                ]),
                (openBlock(), createBlock("svg", { class: "header__user-icon" }, [
                  createVNode("use", { "xlink:href": "#user-icon" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "ModalFeedback",
  __ssrInlineRender: true,
  setup(__props) {
    let isSuccess = ref(false);
    ref(null);
    let topicsList = ref([]), data = ref({
      selectTopic: {
        id: "",
        title: "",
        isEmpty: false
      },
      email: {
        value: "",
        isEmpty: false
      },
      name: {
        value: "",
        isEmpty: false
      },
      phone: {
        value: "",
        isEmpty: false
      },
      message: {
        value: "",
        isEmpty: false
      },
      isConsent: {
        value: false,
        isEmpty: false
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal",
        id: "feedback",
        ref: "modal"
      }, _attrs))}><div class="${ssrRenderClass([{ "modal--feedback": !unref(isSuccess), "modal--success": unref(isSuccess) }, "modal__body"])}"><div class="modal__content" style="${ssrRenderStyle(unref(isSuccess) ? null : { display: "none" })}"><svg class="modal__success-icon"><use xlink:href="#success"></use></svg><h2 class="modal__title">\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!</h2><p class="modal__subtitle">\u041D\u0430\u0448\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</p><button class="button button--orange button--orange-md modal__btn js-modal-close">\u041E\u0442\u043B\u0438\u0447\u043D\u043E!</button></div><div class="modal__content" style="${ssrRenderStyle(!unref(isSuccess) ? null : { display: "none" })}"><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C</h2><p class="modal__subtitle"> \u0415\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B? <br class="hide-desktop">\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C, \u0438 \u043C\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F </p></div><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><form><div class="${ssrRenderClass([{ "form-group--error": unref(data).selectTopic.isEmpty }, "modal__wrap"])}"><div class="form-group"><p class="form-group__label">\u0422\u0435\u043C\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043C\u0443" disabled${ssrRenderAttr("value", unref(data).selectTopic.title)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
      ssrRenderList(unref(topicsList), (topic) => {
        _push(`<li class="dropdown__option"${ssrRenderAttr("data-value", topic.title)}>${ssrInterpolate(topic.title)}</li>`);
      });
      _push(`<!--]--></ul></div><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).email.isEmpty }, "form-group"])}"><label class="form-group__label">E-mail \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430</label><input class="form-group__input" type="email" name="email" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"${ssrRenderAttr("value", unref(data).email.value)}><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).name.isEmpty }, "form-group"])}"><label class="form-group__label">\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F</label><input class="form-group__input" type="text" name="name" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044E"${ssrRenderAttr("value", unref(data).name.value)}><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).phone.isEmpty }, "form-group"])}"><label class="form-group__label">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</label><input class="form-group__input" type="tel" name="phone" value="+7"><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).message.isEmpty }, "form-group"])}"><label class="form-group__label">\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label><textarea class="form-group__input form-group__input--textarea" name="message">${ssrInterpolate(unref(data).message.value)}</textarea><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.</span></div></div><label class="${ssrRenderClass([{ "form-group--error": unref(data).isConsent.isEmpty }, "checkbox modal__checkbox form-group"])}"><input class="checkbox__input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(data).isConsent.value) ? ssrLooseContain(unref(data).isConsent.value, null) : unref(data).isConsent.value) ? " checked" : ""}><span class="checkbox__text"> \u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 <a class="text-orange" href="#">\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></span><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041E\u0431\u044A\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435</span></label><button class="button button--orange button--orange-md modal__btn">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalFeedback.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$7;
const _imports_0$2 = "" + publicAssetsURL("images/modal-img1@1x.webp");
const _imports_1$2 = "" + publicAssetsURL("images/modal-img1@2x.webp");
const _imports_2$2 = "" + publicAssetsURL("images/modal-img1@1x.jpg");
const _imports_3$1 = "" + publicAssetsURL("images/modal-img1@2x.jpg");
const _sfc_main$6 = {
  __name: "ModalLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    let phoneNumber = ref("");
    let code = ref("");
    let isConsentToDataProcessing = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal modal--login" id="login"><div class="modal__body"><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 1 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title">\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h2><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label form-group__label--center">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</label><input class="form-group__input" type="tel" name="phone" value="+7"></div><label class="checkbox modal__checkbox"><input class="checkbox__input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(isConsentToDataProcessing)) ? ssrLooseContain(unref(isConsentToDataProcessing), null) : unref(isConsentToDataProcessing)) ? " checked" : ""}><span class="checkbox__text"> \u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 <a class="text-orange" href="#">\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></span></label></div><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!(unref(phoneNumber).length === 16 && unref(isConsentToDataProcessing))) ? " disabled" : ""}>\u0414\u0430\u043B\u0435\u0435</button></div></div><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 2 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title">\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h2><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label form-group__label--small form-group__label--center">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 SMS, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 5 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434</label><input class="form-group__input" type="text" name="code" placeholder="\u041A\u043E\u0434"${ssrRenderAttr("value", unref(code))}></div><p class="modal__hint"> \u0415\u0441\u043B\u0438 \u043A\u043E\u0434 \u043D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B, \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0435 <a class="modal__hint-link" href="#">\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434</a></p></div><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!unref(code)) ? " disabled" : ""}>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</button><button class="modal__button-back"><svg class="modal__button-back-icon"><use xlink:href="#arrow-back"></use></svg>\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D </button></div></div><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 3 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title show-desktop">\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h2><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__success-box"><svg class="modal__success-icon"><use xlink:href="#success"></use></svg><p class="modal__success-text">\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D!</p></div><button class="button button--orange button--orange-md modal__btn">\u0412\u043E\u0439\u0442\u0438 </button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalLogin.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "PhonePanel",
  __ssrInlineRender: true,
  emits: ["getToken"],
  setup(__props, { emit }) {
    useStore();
    ref("79187024219");
    const code = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal__form-panel" }, _attrs))}><div class="form-group"><label class="form-group__label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><div class="form-group__row"><input class="form-group__input" type="tel" name="phone" value="+7"><button class="button button--white form-group__confirm-btn" type="button">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</button></div></div><div class="form-group"><label class="form-group__label form-group__label--small">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 SMS, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 5 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434</label><div class="form-group__row"><input class="form-group__input" type="text" name="code" placeholder="\u041A\u043E\u0434"${ssrRenderAttr("value", code.value)}><button type="button" class="button button--white form-group__confirm-btn"> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div><p class="modal__hint"> \u0415\u0441\u043B\u0438 \u043A\u043E\u0434 \u043D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B, \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0435 <a class="modal__hint-link" href="#">\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434</a></p></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhonePanel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _imports_0$1 = "" + publicAssetsURL("images/modal-img2@1x.webp");
const _imports_1$1 = "" + publicAssetsURL("images/modal-img2@2x.webp");
const _imports_2$1 = "" + publicAssetsURL("images/modal-img2@1x.jpg");
const _imports_3 = "" + publicAssetsURL("images/modal-img2@2x.jpg");
const _sfc_main$4 = {
  __name: "ModalCode",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useStore();
    const contentCode = ref(""), isError2 = ref(false), token = ref(""), firstName = ref(""), lastName = ref(""), email = ref("");
    function setUserToken(newToken) {
      token.value = newToken;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhonePanel = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["modal", { "modal--code": unref(store).state.user.isLogin, "modal--register": !unref(store).state.user.isLogin }],
        id: "code"
      }, _attrs))}>`);
      if (unref(store).state.user.isLogin) {
        _push(`<div class="modal__body"><div class="modal__content modal__content--image-left"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$1 + ", " + _imports_1$1 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$1)}${ssrRenderAttr("srcset", _imports_3 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434</h2><p class="modal__subtitle">\u0418\u0449\u0438\u0442\u0435 \u043A\u043E\u0434 \u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0441\u043E \u0437\u043D\u0430\u043A\u043E\u043C<br>\xAB\u0412\u043A\u0443\u0441 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0441 \xAB\u041A\u0440\u0430\u0444\u0442\xBB</p></div><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="${ssrRenderClass([{ "form-group--error": isError2.value }, "form-group"])}"><label class="form-group__label form-group__label--center">\u041A\u043E\u0434 \u043F\u043E\u0434 \u043A\u0440\u044B\u0448\u043A\u043E\u0439</label><input${ssrRenderAttr("value", contentCode.value)} class="form-group__input" type="text" name="code" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434"><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434.</span></div><p class="modal__hint">\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u043A\u043E\u0434\u043E\u0432,<br>\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a class="text-orange" href="#">\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C.</a></p></div><button class="button button--orange button--orange-md modal__btn"> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C </button></div></div></div>`);
      } else {
        _push(`<div class="modal__body"><div class="modal__content"><form class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434</h2><p class="modal__subtitle">\u0418\u0449\u0438\u0442\u0435 \u043A\u043E\u0434 \u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0441\u043E \u0437\u043D\u0430\u043A\u043E\u043C \xAB\u0412\u043A\u0443\u0441 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0441 \xAB\u041A\u0440\u0430\u0444\u0442\xBB</p><p class="modal__subtitle"> \u0415\u0441\u043B\u0438 \u0440\u0430\u043D\u0435\u0435 \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0430\u043A\u0446\u0438\u0438, \u0442\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 <a class="text-orange" href="#">\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435</a></p></div><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label">\u0418\u043C\u044F</label><input class="form-group__input" type="text" name="first-name" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"${ssrRenderAttr("value", firstName.value)}></div><div class="form-group"><label class="form-group__label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label><input class="form-group__input" type="text" name="first-name" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E"${ssrRenderAttr("value", lastName.value)}></div><div class="form-group"><p class="form-group__label">\u0413\u043E\u0440\u043E\u0434</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434" disabled><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><li class="dropdown__option" data-value="\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433">\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433</li><li class="dropdown__option" data-value="\u041C\u043E\u0441\u043A\u0432\u0430">\u041C\u043E\u0441\u043A\u0432\u0430</li><li class="dropdown__option" data-value="\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433">\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433</li><li class="dropdown__option" data-value="\u041A\u0430\u0437\u0430\u043D\u044C">\u041A\u0430\u0437\u0430\u043D\u044C</li><li class="dropdown__option" data-value="\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A">\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A</li></ul></div></div>`);
        _push(ssrRenderComponent(_component_PhonePanel, { onGetToken: setUserToken }, null, _parent));
        _push(`<div class="modal__form-panel"><div class="form-group"><label class="form-group__label">Email</label><input class="form-group__input" type="email" name="email" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"${ssrRenderAttr("value", email.value)}></div><p class="modal__hint modal__hint--yellow">E-mail \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D.</p><p class="modal__hint"> \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F e-mail \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 <span class="text-white">+50 \u0431\u0430\u043B\u043B\u043E\u0432.</span></p></div><div class="modal__form-panel modal__form-panel--orange"><div class="form-group"><label class="form-group__label">\u041A\u043E\u0434 \u043F\u043E\u0434 \u043A\u0440\u044B\u0448\u043A\u043E\u0439</label><input class="form-group__input" type="text" name="code" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434"${ssrRenderAttr("value", contentCode.value)}></div><p class="modal__hint"> \u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043A\u043E\u0434\u044B \u043F\u043E \u0441\u043C\u0441 \u0438\u043B\u0438 \u0435\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u043A\u043E\u0434\u043E\u0432 \u043F\u043E\u0434 \u043A\u0440\u044B\u0448\u043A\u043E\u0439, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a class="text-orange" href="#">\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C</a>. </p></div></div><label class="checkbox modal__checkbox"><input class="checkbox__input" type="checkbox"><span class="checkbox__text"> \u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 <a class="text-orange" href="#">\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></span></label><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!token.value || !!contentCode.value) ? " disabled" : ""}> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C </button></form></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalCode.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "ModalUser",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const data = ref({
      firstName: "",
      lastName: "",
      sex: "",
      dateOfBirth: "",
      email: "",
      isConfirmedEmail: false
    });
    computed(() => {
      if (store.state.user.data.phone) {
        let numberArr = store.state.user.data.phone.split("");
        return `+${numberArr[0]} ${numberArr[1]}${numberArr[2]}${numberArr[3]} ${numberArr[4]}${numberArr[5]}${numberArr[6]} ${numberArr[7]}${numberArr[8]} ${numberArr[9]}${numberArr[10]}`;
      } else
        return "-";
    });
    computed(() => {
      return data.value.dateOfBirth.replaceAll(".", "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal modal--user",
        id: "user"
      }, _attrs))}><div class="modal__body"><div class="modal__content"><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">\u041C\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435</h2><p class="modal__subtitle">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438\u043D\u0430\u0447\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u0440\u0438\u0437\u043E\u0432.</p></div><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><form><div class="modal__wrap"><div class="form-group"><label class="form-group__label">\u0418\u043C\u044F</label><input class="form-group__input" type="text" name="first-name" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"${ssrRenderAttr("value", data.value.firstName)}><span class="form-group__error-text">\u0422\u0435\u043A\u0441\u0442 \u043E\u0448\u0438\u0431\u043A\u0438</span></div><div class="form-group"><label class="form-group__label">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label><input class="form-group__input" type="text" name="first-name" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E"${ssrRenderAttr("value", data.value.lastName)}></div><div class="form-group"><p class="form-group__label">\u041F\u043E\u043B</p><div class="form-group__option-row"><label class="option"><input class="option__input" type="radio" name="gender"${ssrIncludeBooleanAttr(unref(store).state.user.data.sex === "man") ? " checked" : ""}><p class="option__text">\u041C\u0443\u0436 <svg class="option__icon"><use xlink:href="#male"></use></svg></p></label><label class="option"><input class="option__input" type="radio" name="gender"${ssrIncludeBooleanAttr(unref(store).state.user.data.sex === "woman") ? " checked" : ""}><p class="option__text">\u0416\u0435\u043D <svg class="option__icon"><use xlink:href="#female"></use></svg></p></label></div></div><div class="form-group"><p class="form-group__label">\u0413\u043E\u0440\u043E\u0434</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434" disabled><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><li class="dropdown__option" data-value="\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433">\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433</li><li class="dropdown__option" data-value="\u041C\u043E\u0441\u043A\u0432\u0430">\u041C\u043E\u0441\u043A\u0432\u0430</li><li class="dropdown__option" data-value="\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433">\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433</li><li class="dropdown__option" data-value="\u041A\u0430\u0437\u0430\u043D\u044C">\u041A\u0430\u0437\u0430\u043D\u044C</li><li class="dropdown__option" data-value="\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A">\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A</li></ul></div></div><div class="form-group mb24"><label class="form-group__label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</label><input class="form-group__input form-group__input--date" type="text" name="first-name"${ssrRenderAttr("value", data.value.dateOfBirth)}></div><div class="modal__form-panel"><div class="form-group"><label class="form-group__label">Email</label><input class="form-group__input" type="email" name="email" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"${ssrRenderAttr("value", data.value.email)}></div>`);
      if (!data.value.isConfirmedEmail) {
        _push(`<!--[--><p class="modal__hint modal__hint--yellow">E-mail \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D.</p><p class="modal__hint"> \u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F e-mail \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 <span class="text-white">+50 \u0431\u0430\u043B\u043B\u043E\u0432.</span></p><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="button button--orange button--orange-md modal__btn">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _imports_0 = "" + publicAssetsURL("images/sticker5@1x.webp");
const _imports_1 = "" + publicAssetsURL("images/sticker5@2x.webp");
const _imports_2 = "" + publicAssetsURL("images/sticker5@1x.jpg");
const _sfc_main$2 = {
  __name: "ModalStiker",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal modal--sticker" id="sticker"><div class="modal__body"><div class="modal__content"><div class="modal__title-box"><div class="modal__sticker-box"><figure class="sticker sticker--no-hover modal__sticker"><picture><source${ssrRenderAttr("srcset", _imports_0 + ", " + _imports_1 + " 2x")} type="image/webp"><img class="sticker__img"${ssrRenderAttr("src", _imports_2)}${ssrRenderAttr("src", `${unref(runtimeConfig).public.API_BASE_URL}${(_a = _ctx.$store.state.modal.stikerData) == null ? void 0 : _a.imageUrl}`)} alt=""></picture><figcaption><p class="sticker__text">${ssrInterpolate((_b = _ctx.$store.state.modal.stikerData) == null ? void 0 : _b.name)}</p></figcaption></figure><div class="modal__wrap">`);
      if (((_c = _ctx.$store.state.modal.stikerData) == null ? void 0 : _c.id) > 12) {
        _push(`<h2 class="modal__title"> \u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412\u0430\u0448 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 \u2013 ${ssrInterpolate((_d = _ctx.$store.state.modal.stikerData) == null ? void 0 : _d.name)}</h2>`);
      } else {
        _push(`<!--[--><p class="modal__subtitle">\u0421\u0442\u0438\u043A\u0435\u0440</p><h2 class="modal__title">\xAB${ssrInterpolate((_e = _ctx.$store.state.modal.stikerData) == null ? void 0 : _e.name)}\xBB</h2><!--]-->`);
      }
      if ((_f = _ctx.$store.state.modal.stikerData) == null ? void 0 : _f.extraText) {
        _push(`<div class="modal__info-box"><svg class="modal__info-box-icon"><use xlink:href="#info"></use></svg><p>${ssrInterpolate((_g = _ctx.$store.state.modal.stikerData) == null ? void 0 : _g.extraText)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div>`);
      if ((_h = _ctx.$store.state.modal.stikerData) == null ? void 0 : _h.content) {
        _push(`<div class="modal__text-block">${(_i = _ctx.$store.state.modal.stikerData) == null ? void 0 : _i.content}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="button button--orange button--orange-md modal__btn js-modal-close">\u041E\u0442\u043B\u0438\u0447\u043D\u043E!</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalStiker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_ModalFeedback = __nuxt_component_1$1;
  const _component_ModalLogin = __nuxt_component_2;
  const _component_ModalCode = __nuxt_component_3;
  const _component_ModalUser = __nuxt_component_4;
  const _component_ModalStiker = __nuxt_component_5;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer__container container"><div class="footer__text-box"><p class="footer__text"> \u041E\u0431\u0449\u0438\u0439 \u0441\u0440\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0410\u043A\u0446\u0438\u0438 \u0441 20 \u0438\u044E\u043B\u044F \u043F\u043E 12 \u043D\u043E\u044F\u0431\u0440\u044F 2023 \u0433\u043E\u0434\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434 \u0432\u044B\u0434\u0430\u0447\u0438 \u043F\u0440\u0438\u0437\u043E\u0432 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044F\u043C. <br class="show-desktop">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u0434\u043E\u0432 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 promo.orenbeer.ru </p><p class="footer__text">\u041F\u0435\u0440\u0438\u043E\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043A\u043E\u0434\u043E\u0432 (\u0434\u0430\u043B\u0435\u0435 \xAB\u043F\u0435\u0440\u0438\u043E\u0434 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043A\u043E\u0434\u043E\u0432\xBB): 20.07.2023 - 12.10.2023 \u0433\u043E\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E.</p><p class="footer__text">*\u0411\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043D\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0437\u0430. \u041F\u043E\u0431\u0440\u043E\u0441\u0442\u0438 \u0432 \u041F\u043E\u043B\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u0430\u043A\u0446\u0438\u0438.</p><p class="footer__text">\u041F\u0440\u0438\u0437\u044B \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u0432\u0438\u0434\u0443 \u043E\u0442 \u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u0445.</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "button button--gray footer__button",
    to: "agreement"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043B\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0438\u0438 <svg class="button__icon"${_scopeId}><use xlink:href="#button-arrow"${_scopeId}></use></svg>`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043B\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0438\u0438 "),
          (openBlock(), createBlock("svg", { class: "button__icon" }, [
            createVNode("use", { "xlink:href": "#button-arrow" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ModalFeedback, null, null, _parent));
  _push(ssrRenderComponent(_component_ModalLogin, null, null, _parent));
  _push(ssrRenderComponent(_component_ModalCode, null, null, _parent));
  _push(ssrRenderComponent(_component_ModalUser, null, null, _parent));
  _push(ssrRenderComponent(_component_ModalStiker, null, null, _parent));
  _push(`</footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mounted() {
    if (!this.isOldUser())
      navigateTo("/login");
    if (localStorage.getItem("userToken"))
      this.login();
  },
  methods: {
    isOldUser() {
      return localStorage.getItem("isOldUser");
    },
    async login() {
      await this.$store.dispatch("user/loginInToSystem");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Footer = __nuxt_component_1;
  const _component_Sprite = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_Sprite, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-d630a0e4.mjs.map
