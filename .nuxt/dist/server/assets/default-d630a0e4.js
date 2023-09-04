import { _ as __nuxt_component_0$2 } from "./nuxt-link-99c863e4.js";
import { computed, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, withModifiers, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0$3 } from "./logo-7ff19e25.js";
import { useStore } from "vuex";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { u as useRuntimeConfig, n as navigateTo } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __nuxt_component_0$3 } from "./Sprite-3ff66b58.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "defu";
const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useStore();
    const exit = () => {
      store.dispatch("user/logOutOfTheSystem");
    };
    const firstName = computed(() => {
      return store.state.user.data.firstName === "" ? "Имя" : store.state.user.data.firstName;
    });
    const lastName = computed(() => {
      return store.state.user.data.lastName === "" ? "Фамилия" : store.state.user.data.lastName;
    });
    function closeBurgerMenu() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
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
            _push2(`Правила и призы`);
          } else {
            return [
              createTextVNode("Правила и призы")
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
            _push2(`Победители`);
          } else {
            return [
              createTextVNode("Победители")
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
            _push2(`Где купить`);
          } else {
            return [
              createTextVNode("Где купить")
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
            _push2(`Обратная связь`);
          } else {
            return [
              createTextVNode("Обратная связь")
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
              _push2(`<svg class="header__user-icon"${_scopeId}><use xlink:href="#user-icon"${_scopeId}></use></svg><div class="header__user-nav-box"${_scopeId}><p class="header__user-name"${_scopeId}>${ssrInterpolate(firstName.value)} ${ssrInterpolate(lastName.value)}</p><button class="header__user-logout"${_scopeId}>Выйти</button></div>`);
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
                  }, "Выйти", 8, ["onClick"])
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
        _push(`<div class="header__user-nav" data-modal="login"><a class="header__lk-link" href="#"><span class="header__lk-link-text">Личный кабинет</span><svg class="header__user-icon"><use xlink:href="#user-icon"></use></svg></a></div>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lk",
          class: "header__user-nav header__user-nav--active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="header__user-nav-box"${_scopeId}><p class="header__user-name"${_scopeId}>${ssrInterpolate(firstName.value)} ${ssrInterpolate(lastName.value)}</p><button class="header__user-logout"${_scopeId}>Выйти</button></div><svg class="header__user-icon"${_scopeId}><use xlink:href="#user-icon"${_scopeId}></use></svg>`);
            } else {
              return [
                createVNode("div", { class: "header__user-nav-box" }, [
                  createVNode("p", { class: "header__user-name" }, toDisplayString(firstName.value) + " " + toDisplayString(lastName.value), 1),
                  createVNode("button", {
                    class: "header__user-logout",
                    onClick: withModifiers(exit, ["prevent", "stop"])
                  }, "Выйти", 8, ["onClick"])
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
      }, _attrs))}><div class="${ssrRenderClass([{ "modal--feedback": !unref(isSuccess), "modal--success": unref(isSuccess) }, "modal__body"])}"><div class="modal__content" style="${ssrRenderStyle(unref(isSuccess) ? null : { display: "none" })}"><svg class="modal__success-icon"><use xlink:href="#success"></use></svg><h2 class="modal__title">Ваше сообщение успешно отправлено!</h2><p class="modal__subtitle">Наши менеджеры свяжутся с вами в ближайшее время</p><button class="button button--orange button--orange-md modal__btn js-modal-close">Отлично!</button></div><div class="modal__content" style="${ssrRenderStyle(!unref(isSuccess) ? null : { display: "none" })}"><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">Обратная связь</h2><p class="modal__subtitle"> Есть вопросы? <br class="hide-desktop">Напишите нам, и мы ответим в ближайшее время </p></div><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><form><div class="${ssrRenderClass([{ "form-group--error": unref(data).selectTopic.isEmpty }, "modal__wrap"])}"><div class="form-group"><p class="form-group__label">Тема вопроса</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="Выберите тему" disabled${ssrRenderAttr("value", unref(data).selectTopic.title)}><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><!--[-->`);
      ssrRenderList(unref(topicsList), (topic) => {
        _push(`<li class="dropdown__option"${ssrRenderAttr("data-value", topic.title)}>${ssrInterpolate(topic.title)}</li>`);
      });
      _push(`<!--]--></ul></div><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Поле не должно быть пустым.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).email.isEmpty }, "form-group"])}"><label class="form-group__label">E-mail для ответа</label><input class="form-group__input" type="email" name="email" placeholder="Введите email"${ssrRenderAttr("value", unref(data).email.value)}><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Поле не должно быть пустым.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).name.isEmpty }, "form-group"])}"><label class="form-group__label">Имя Фамилия</label><input class="form-group__input" type="text" name="name" placeholder="Введите имя и фамилию"${ssrRenderAttr("value", unref(data).name.value)}><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Поле не должно быть пустым.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).phone.isEmpty }, "form-group"])}"><label class="form-group__label">Номер телефона</label><input class="form-group__input" type="tel" name="phone" value="+7"><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Поле не должно быть пустым.</span></div><div class="${ssrRenderClass([{ "form-group--error": unref(data).message.isEmpty }, "form-group"])}"><label class="form-group__label">Ваше сообщение</label><textarea class="form-group__input form-group__input--textarea" name="message">${ssrInterpolate(unref(data).message.value)}</textarea><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Поле не должно быть пустым.</span></div></div><label class="${ssrRenderClass([{ "form-group--error": unref(data).isConsent.isEmpty }, "checkbox modal__checkbox form-group"])}"><input class="checkbox__input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(data).isConsent.value) ? ssrLooseContain(unref(data).isConsent.value, null) : unref(data).isConsent.value) ? " checked" : ""}><span class="checkbox__text"> Даю согласие на обработку <a class="text-orange" href="#">персональных данных</a></span><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Объязательное поле</span></label><button class="button button--orange button--orange-md modal__btn">Отправить</button></form></div></div></div></div>`);
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
const _imports_0$2 = "" + __publicAssetsURL("images/modal-img1@1x.webp");
const _imports_1$2 = "" + __publicAssetsURL("images/modal-img1@2x.webp");
const _imports_2$2 = "" + __publicAssetsURL("images/modal-img1@1x.jpg");
const _imports_3$1 = "" + __publicAssetsURL("images/modal-img1@2x.jpg");
const _sfc_main$6 = {
  __name: "ModalLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    let phoneNumber = ref("");
    let code = ref("");
    let isConsentToDataProcessing = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal modal--login" id="login"><div class="modal__body"><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 1 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title">Вход в личный кабинет</h2><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label form-group__label--center">Введите свой номер телефона</label><input class="form-group__input" type="tel" name="phone" value="+7"></div><label class="checkbox modal__checkbox"><input class="checkbox__input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(isConsentToDataProcessing)) ? ssrLooseContain(unref(isConsentToDataProcessing), null) : unref(isConsentToDataProcessing)) ? " checked" : ""}><span class="checkbox__text"> Даю согласие на обработку <a class="text-orange" href="#">персональных данных</a></span></label></div><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!(unref(phoneNumber).length === 16 && unref(isConsentToDataProcessing))) ? " disabled" : ""}>Далее</button></div></div><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 2 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title">Вход в личный кабинет</h2><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label form-group__label--small form-group__label--center">Введите код из SMS, который мы отправили 5 секунд назад</label><input class="form-group__input" type="text" name="code" placeholder="Код"${ssrRenderAttr("value", unref(code))}></div><p class="modal__hint"> Если код не пришёл, запросите <a class="modal__hint-link" href="#">новый код</a></p></div><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!unref(code)) ? " disabled" : ""}>Подтвердить</button><button class="modal__button-back"><svg class="modal__button-back-icon"><use xlink:href="#arrow-back"></use></svg>Изменить телефон </button></div></div><div class="modal__content modal__content--image-left" style="${ssrRenderStyle(unref(store).state.user.login.step === 3 ? null : { display: "none" })}"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$2 + ", " + _imports_1$2 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$2)}${ssrRenderAttr("srcset", _imports_3$1 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><h2 class="modal__title show-desktop">Вход в личный кабинет</h2><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__success-box"><svg class="modal__success-icon"><use xlink:href="#success"></use></svg><p class="modal__success-text">Ваш номер телефона подтверждён!</p></div><button class="button button--orange button--orange-md modal__btn">Войти </button></div></div></div></div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal__form-panel" }, _attrs))}><div class="form-group"><label class="form-group__label">Телефон</label><div class="form-group__row"><input class="form-group__input" type="tel" name="phone" value="+7"><button class="button button--white form-group__confirm-btn" type="button">Подтвердить</button></div></div><div class="form-group"><label class="form-group__label form-group__label--small">Введите код из SMS, который мы отправили 5 секунд назад</label><div class="form-group__row"><input class="form-group__input" type="text" name="code" placeholder="Код"${ssrRenderAttr("value", code.value)}><button type="button" class="button button--white form-group__confirm-btn"> Отправить</button></div></div><p class="modal__hint"> Если код не пришёл, запросите <a class="modal__hint-link" href="#">новый код</a></p></div>`);
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
const _imports_0$1 = "" + __publicAssetsURL("images/modal-img2@1x.webp");
const _imports_1$1 = "" + __publicAssetsURL("images/modal-img2@2x.webp");
const _imports_2$1 = "" + __publicAssetsURL("images/modal-img2@1x.jpg");
const _imports_3 = "" + __publicAssetsURL("images/modal-img2@2x.jpg");
const _sfc_main$4 = {
  __name: "ModalCode",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useStore();
    const contentCode = ref(""), isError = ref(false), token = ref(""), firstName = ref(""), lastName = ref(""), email = ref("");
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
        _push(`<div class="modal__body"><div class="modal__content modal__content--image-left"><div class="modal__img-box"><picture><source${ssrRenderAttr("srcset", _imports_0$1 + ", " + _imports_1$1 + " 2x")} type="image/webp"><img class="modal__img"${ssrRenderAttr("src", _imports_2$1)}${ssrRenderAttr("srcset", _imports_3 + " 2x")} alt=""></picture></div><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">Зарегистрировать код</h2><p class="modal__subtitle">Ищите код в продукции со знаком<br>«Вкус путешествия с «Крафт»</p></div><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="${ssrRenderClass([{ "form-group--error": isError.value }, "form-group"])}"><label class="form-group__label form-group__label--center">Код под крышкой</label><input${ssrRenderAttr("value", contentCode.value)} class="form-group__input" type="text" name="code" placeholder="Введите код"><span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Неверный код.</span></div><p class="modal__hint">Если у вас есть проблемы с регистрацией кодов,<br>пожалуйста, <a class="text-orange" href="#">напишите нам.</a></p></div><button class="button button--orange button--orange-md modal__btn"> Отправить </button></div></div></div>`);
      } else {
        _push(`<div class="modal__body"><div class="modal__content"><form class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">Зарегистрировать код</h2><p class="modal__subtitle">Ищите код в продукции со знаком «Вкус путешествия с «Крафт»</p><p class="modal__subtitle"> Если ранее вы принимали участие в акции, то сначала <a class="text-orange" href="#">авторизируйтесь на сайте</a></p></div><button class="modal__close js-modal-close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><div class="modal__wrap"><div class="form-group"><label class="form-group__label">Имя</label><input class="form-group__input" type="text" name="first-name" placeholder="Введите имя"${ssrRenderAttr("value", firstName.value)}></div><div class="form-group"><label class="form-group__label">Фамилия</label><input class="form-group__input" type="text" name="first-name" placeholder="Введите фамилию"${ssrRenderAttr("value", lastName.value)}></div><div class="form-group"><p class="form-group__label">Город</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><li class="dropdown__option" data-value="Оренбург">Оренбург</li><li class="dropdown__option" data-value="Москва">Москва</li><li class="dropdown__option" data-value="Санкт-Петербург">Санкт-Петербург</li><li class="dropdown__option" data-value="Казань">Казань</li><li class="dropdown__option" data-value="Новосибирск">Новосибирск</li></ul></div></div>`);
        _push(ssrRenderComponent(_component_PhonePanel, { onGetToken: setUserToken }, null, _parent));
        _push(`<div class="modal__form-panel"><div class="form-group"><label class="form-group__label">Email</label><input class="form-group__input" type="email" name="email" placeholder="Введите email"${ssrRenderAttr("value", email.value)}></div><p class="modal__hint modal__hint--yellow">E-mail ещё не подтверждён.</p><p class="modal__hint"> Для подтверждения e-mail после обновления данных перейдите по ссылке из письма и получите <span class="text-white">+50 баллов.</span></p></div><div class="modal__form-panel modal__form-panel--orange"><div class="form-group"><label class="form-group__label">Код под крышкой</label><input class="form-group__input" type="text" name="code" placeholder="Введите код"${ssrRenderAttr("value", contentCode.value)}></div><p class="modal__hint"> Если вам не приходят коды по смс или есть другие проблемы с регистрацией кодов под крышкой, пожалуйста, <a class="text-orange" href="#">напишите нам</a>. </p></div></div><label class="checkbox modal__checkbox"><input class="checkbox__input" type="checkbox"><span class="checkbox__text"> Даю согласие на обработку <a class="text-orange" href="#">персональных данных</a></span></label><button class="button button--orange button--orange-md modal__btn"${ssrIncludeBooleanAttr(!token.value || !!contentCode.value) ? " disabled" : ""}> Отправить </button></form></div></div>`);
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
      }, _attrs))}><div class="modal__body"><div class="modal__content"><div class="modal__content-box"><div class="modal__title-box"><div class="modal__wrap"><h2 class="modal__title">Мои данные</h2><p class="modal__subtitle">Пожалуйста, введите свои реальные данные, иначе могут быть проблемы при получении призов.</p></div><button class="modal__close"><svg class="modal__close-icon"><use xlink:href="#close"></use></svg></button></div><form><div class="modal__wrap"><div class="form-group"><label class="form-group__label">Имя</label><input class="form-group__input" type="text" name="first-name" placeholder="Введите имя"${ssrRenderAttr("value", data.value.firstName)}><span class="form-group__error-text">Текст ошибки</span></div><div class="form-group"><label class="form-group__label">Фамилия</label><input class="form-group__input" type="text" name="first-name" placeholder="Введите фамилию"${ssrRenderAttr("value", data.value.lastName)}></div><div class="form-group"><p class="form-group__label">Пол</p><div class="form-group__option-row"><label class="option"><input class="option__input" type="radio" name="gender"${ssrIncludeBooleanAttr(unref(store).state.user.data.sex === "man") ? " checked" : ""}><p class="option__text">Муж <svg class="option__icon"><use xlink:href="#male"></use></svg></p></label><label class="option"><input class="option__input" type="radio" name="gender"${ssrIncludeBooleanAttr(unref(store).state.user.data.sex === "woman") ? " checked" : ""}><p class="option__text">Жен <svg class="option__icon"><use xlink:href="#female"></use></svg></p></label></div></div><div class="form-group"><p class="form-group__label">Город</p><div class="dropdown"><div class="dropdown__value-box"><input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled><svg class="dropdown__arrow"><use xlink:href="#dropdown-arrow"></use></svg></div><ul class="dropdown__options-list"><li class="dropdown__option" data-value="Оренбург">Оренбург</li><li class="dropdown__option" data-value="Москва">Москва</li><li class="dropdown__option" data-value="Санкт-Петербург">Санкт-Петербург</li><li class="dropdown__option" data-value="Казань">Казань</li><li class="dropdown__option" data-value="Новосибирск">Новосибирск</li></ul></div></div><div class="form-group mb24"><label class="form-group__label">Дата рождения</label><input class="form-group__input form-group__input--date" type="text" name="first-name"${ssrRenderAttr("value", data.value.dateOfBirth)}></div><div class="modal__form-panel"><div class="form-group"><label class="form-group__label">Email</label><input class="form-group__input" type="email" name="email" placeholder="Введите email"${ssrRenderAttr("value", data.value.email)}></div>`);
      if (!data.value.isConfirmedEmail) {
        _push(`<!--[--><p class="modal__hint modal__hint--yellow">E-mail ещё не подтверждён.</p><p class="modal__hint"> Для подтверждения e-mail после обновления данных перейдите по ссылке из письма и получите <span class="text-white">+50 баллов.</span></p><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="button button--orange button--orange-md modal__btn">Обновить</button></form></div></div></div></div>`);
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
const _imports_0 = "" + __publicAssetsURL("images/sticker5@1x.webp");
const _imports_1 = "" + __publicAssetsURL("images/sticker5@2x.webp");
const _imports_2 = "" + __publicAssetsURL("images/sticker5@1x.jpg");
const _sfc_main$2 = {
  __name: "ModalStiker",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal modal--sticker" id="sticker"><div class="modal__body"><div class="modal__content"><div class="modal__title-box"><div class="modal__sticker-box"><figure class="sticker sticker--no-hover modal__sticker"><picture><source${ssrRenderAttr("srcset", _imports_0 + ", " + _imports_1 + " 2x")} type="image/webp"><img class="sticker__img"${ssrRenderAttr("src", _imports_2)}${ssrRenderAttr("src", `${unref(runtimeConfig).public.API_BASE_URL}${(_a = _ctx.$store.state.modal.stikerData) == null ? void 0 : _a.imageUrl}`)} alt=""></picture><figcaption><p class="sticker__text">${ssrInterpolate((_b = _ctx.$store.state.modal.stikerData) == null ? void 0 : _b.name)}</p></figcaption></figure><div class="modal__wrap">`);
      if (((_c = _ctx.$store.state.modal.stikerData) == null ? void 0 : _c.id) > 12) {
        _push(`<h2 class="modal__title"> Поздравляем! Ваш мгновенный приз – ${ssrInterpolate((_d = _ctx.$store.state.modal.stikerData) == null ? void 0 : _d.name)}</h2>`);
      } else {
        _push(`<!--[--><p class="modal__subtitle">Стикер</p><h2 class="modal__title">«${ssrInterpolate((_e = _ctx.$store.state.modal.stikerData) == null ? void 0 : _e.name)}»</h2><!--]-->`);
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
      _push(`<button class="button button--orange button--orange-md modal__btn js-modal-close">Отлично!</button></div></div></div></div>`);
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
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_ModalFeedback = __nuxt_component_1$1;
  const _component_ModalLogin = __nuxt_component_2;
  const _component_ModalCode = __nuxt_component_3;
  const _component_ModalUser = __nuxt_component_4;
  const _component_ModalStiker = __nuxt_component_5;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer__container container"><div class="footer__text-box"><p class="footer__text"> Общий срок проведения Акции с 20 июля по 12 ноября 2023 года, включая период выдачи призов победителям. <br class="show-desktop">Регистрация кодов осуществляется на promo.orenbeer.ru </p><p class="footer__text">Период покупки и регистрации кодов (далее «период регистрации кодов»): 20.07.2023 - 12.10.2023 года включительно.</p><p class="footer__text">*Будет предоставлен сертификат на приобретение приза. Побрости в Полных правилах акции.</p><p class="footer__text">Призы могут отличаться по внешнему виду от их изображения на сайте и рекламных материалах.</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "button button--gray footer__button",
    to: "agreement"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Полные правила акции <svg class="button__icon"${_scopeId}><use xlink:href="#button-arrow"${_scopeId}></use></svg>`);
      } else {
        return [
          createTextVNode("Полные правила акции "),
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
  const _component_Sprite = __nuxt_component_0$3;
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
export {
  _default as default
};
//# sourceMappingURL=default-d630a0e4.js.map
