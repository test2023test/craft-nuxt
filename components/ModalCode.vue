<template>
	<div 
		class="modal"
		id="code"
		:class="{'modal--code': store.state.user.isLogin, 'modal--register': !store.state.user.isLogin}"
	>
		<div class="modal__body" v-if="store.state.user.isLogin">
			<div class="modal__content modal__content--image-left">
				<div class="modal__img-box">
					<picture>
						<source srcset="images/modal-img2@1x.webp, images/modal-img2@2x.webp 2x" type="image/webp"/><img class="modal__img" src="images/modal-img2@1x.jpg" srcset="images/modal-img2@2x.jpg 2x" alt=""/>
					</picture>
				</div>
				<div class="modal__content-box">
					<div class="modal__title-box">
						<div class="modal__wrap">
							<h2 class="modal__title">Зарегистрировать код</h2>
							<p class="modal__subtitle">Ищите код в продукции со знаком<br>«Вкус путешествия с «Крафт»</p>
						</div>
						<button class="modal__close" @click="closeModal">
							<svg class="modal__close-icon">
								<use xlink:href="#close"></use>
							</svg>
						</button>
					</div>
					<div class="modal__wrap">
						<div class="form-group" :class="{'form-group--error': isError}">
							<label class="form-group__label form-group__label--center">Код под крышкой</label>
							<input
								v-model="contentCode"
								class="form-group__input"
								type="text"
								name="code"
								placeholder="Введите код"
							>
							<span class="form-group__error-text" data-v-inspector="components/ModalUser.vue:20:97">Неверный код.</span>
						</div>
						<p class="modal__hint">Если у вас есть проблемы с регистрацией кодов,<br>пожалуйста,
							
							<a class="text-orange" href="#">напишите нам.</a>
						</p>
					</div>
					<button
						class="button button--orange button--orange-md modal__btn"
						@click="sendCode"
					>
						Отправить
					</button>
				</div>
			</div>
		</div>
		<div class="modal__body" v-else>
			<div class="modal__content">
				<form @submit.prevent="sendCode" class="modal__content-box">
					<div class="modal__title-box">
						<div class="modal__wrap">
							<h2 class="modal__title">Зарегистрировать код</h2>
							<p class="modal__subtitle">Ищите код в продукции со знаком «Вкус путешествия с «Крафт»</p>
							<p class="modal__subtitle">
								Если ранее вы принимали участие в акции, то сначала
								<a class="text-orange" href="#">авторизируйтесь на сайте</a>
							</p>
						</div>
						<button class="modal__close js-modal-close">
							<svg class="modal__close-icon">
								<use xlink:href="#close"></use>
							</svg>
						</button>
					</div>
					<div class="modal__wrap">
						<div class="form-group">
							<label class="form-group__label">Имя</label>
							<input
								class="form-group__input"
								type="text"
								name="first-name"
								placeholder="Введите имя"
								v-model="firstName"
							>
						</div>
						<div class="form-group">
							<label class="form-group__label">Фамилия</label>
							<input
								class="form-group__input"
								type="text"
								name="first-name"
								placeholder="Введите фамилию"
								v-model="lastName"
							>
						</div>
						<div class="form-group">
							<p class="form-group__label">Город</p>
							<div class="dropdown">
								<div class="dropdown__value-box">
									<input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled>
									<svg class="dropdown__arrow">
										<use xlink:href="#dropdown-arrow"></use>
									</svg>
								</div>
								<ul class="dropdown__options-list">
									<li class="dropdown__option" data-value="Оренбург">Оренбург</li>
									<li class="dropdown__option" data-value="Москва">Москва</li>
									<li class="dropdown__option" data-value="Санкт-Петербург">Санкт-Петербург</li>
									<li class="dropdown__option" data-value="Казань">Казань</li>
									<li class="dropdown__option" data-value="Новосибирск">Новосибирск</li>
								</ul>
							</div>
						</div>
						<PhonePanel @getToken="setUserToken" />
						<div class="modal__form-panel">
							<div class="form-group">
								<label class="form-group__label">Email</label>
								<input
									class="form-group__input"
									type="email"
									name="email"
									placeholder="Введите email"
									v-model="email"
								>
							</div>
							<p class="modal__hint modal__hint--yellow">E-mail ещё не подтверждён.</p>
							<p class="modal__hint">
								Для подтверждения e-mail после обновления данных перейдите по ссылке из письма и получите
								<span class="text-white">+50 баллов.</span>
							</p>
						</div>
						<div class="modal__form-panel modal__form-panel--orange">
							<div class="form-group">
								<label class="form-group__label">Код под крышкой</label>
								<input class="form-group__input" type="text" name="code" placeholder="Введите код" v-model="contentCode">
							</div>
							<p class="modal__hint">
								Если вам не приходят коды по смс или есть другие проблемы с регистрацией кодов под крышкой, пожалуйста,
								<a class="text-orange" href="#">напишите нам</a>.
							</p>
						</div>
					</div>
					<label class="checkbox modal__checkbox">
						<input class="checkbox__input" type="checkbox"><span class="checkbox__text">
							Даю согласие на обработку
							<a class="text-orange" href="#">персональных данных</a></span>
					</label>
					<button
						class="button button--orange button--orange-md modal__btn" 
						:disabled="!token || !!contentCode"
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue"
	import { useStore } from "vuex";
	import { closeModal, showModal } from '~/assets/js/components/modal.js';
	const runtimeConfig = useRuntimeConfig();
	let store = useStore();
	const contentCode = ref(''),
		isError = ref(false),
		token = ref(''),
		firstName = ref(''),
		lastName = ref(''),
		email = ref('');

	function setUserToken(newToken)
	{
		token.value = newToken;
	}
	function sendCode()
	{
		let userToken;
		let sendData;
		if(store.state.user.isLogin)
		{			
			userToken = localStorage.getItem('userToken');
			sendData =  {
				"firstName": store.state.user.data.firstName,
				"lastName": store.state.user.data.lastName,
				"email": store.state.user.data.email,
				"content": contentCode.value
			}
		}
		else
		{
			userToken = token.value;
			sendData =  {
				"firstName": firstName.value,
				"lastName": lastName.value,
				"email": email.value,
				"content": contentCode.value
			}
		}
		fetch(runtimeConfig.public.API_BASE_URL + '/code/?token=' + userToken, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(sendData)
		}).then(async (response)=>{
			let json = await response.json();
			if(json.success)
			{
				isError.value = false;
				store.commit('modal/setStickerData', json.userCode.sticker);
				showStiker();
			}
			else isError.value = true;
		})
	}
	function showStiker()
	{
		closeModal();
		showModal('sticker');
	}
</script>
<style lang="scss">
</style>