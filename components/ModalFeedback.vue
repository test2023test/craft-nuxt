<template>
	<div class="modal" :class="{'modal--feedback': !isSuccess, 'modal--success': isSuccess}" id="feedback">
		<div class="modal__body">
			<div class="modal__content" v-if="isSuccess">
				<svg class="modal__success-icon">
					<use xlink:href="#success"></use>
				</svg>
				<h2 class="modal__title">Ваше сообщение успешно отправлено!</h2>
				<p class="modal__subtitle">Наши менеджеры свяжутся с вами в ближайшее время</p>
				<button class="button button--orange button--orange-md modal__btn js-modal-close">Отлично!</button>
			</div>
			<div class="modal__content" v-else>
				<div class="modal__content-box">
					<div class="modal__title-box">
						<div class="modal__wrap">
							<h2 class="modal__title">Обратная связь</h2>
							<p class="modal__subtitle">
								Есть вопросы?
								<br class="hide-desktop">Напишите нам, и мы ответим в ближайшее время
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
							<p class="form-group__label">Тема вопроса</p>
							<div class="dropdown" ref="dropdown">
								<div class="dropdown__value-box">
									<input class="dropdown__value" type="text" placeholder="Выберите тему" disabled :value="inputValue">
									<svg class="dropdown__arrow">
										<use xlink:href="#dropdown-arrow"></use>
									</svg>
								</div>
								<ul class="dropdown__options-list">
									<li class="dropdown__option" data-value=""></li>
									<li
										v-for="topic of topicsList"
										:key="topic.id"
										class="dropdown__option"
										:data-value="topic.title"
										@click="inputValue = topic.title"
									>
										{{topic.title}}
									</li>
								</ul>
							</div>
						</div>
						<div class="form-group">
							<label class="form-group__label">E-mail для ответа</label>
							<input class="form-group__input" type="email" name="email" placeholder="Введите email">
						</div>
						<div class="form-group">
							<label class="form-group__label">Имя Фамилия</label>
							<input class="form-group__input" type="text" name="name" placeholder="Введите имя и фамилию">
						</div>
						<div class="form-group">
							<label class="form-group__label">Номер телефона</label>
							<input class="form-group__input" type="tel" name="phone" value="+7">
						</div>
						<div class="form-group">
							<label class="form-group__label">Ваше сообщение</label>
							<textarea class="form-group__input form-group__input--textarea" name="message"></textarea>
						</div>
					</div>
					<label class="checkbox modal__checkbox">
						<input class="checkbox__input" type="checkbox"><span class="checkbox__text">
							Даю согласие на обработку
							<a class="text-orange" href="#">персональных данных</a></span>
					</label>
					<button class="button button--orange button--orange-md modal__btn" @click="changeIsSuccess">Отправить</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const runtimeConfig = useRuntimeConfig();
	import { ref } from "vue";
	let isSuccess = ref(false),
		topicsList = ref([]);
	const inputValue = ref('')

	function changeIsSuccess()
	{
		isSuccess.value = !isSuccess.value;
	}
	getTopics();
	function getTopics()
	{
		fetch(runtimeConfig.public.API_BASE_URL + 'feedback-topics/').then( async (data)=>{
			let dataJson = await data.json();
			topicsList.value = dataJson.topics;
		})
	}

	optionsListInit()
	function optionsListInit()
	{
	}
</script>
<style lang="scss">
</style>