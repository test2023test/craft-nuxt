<template>
  	<main class="main">
		<section class="section-login">
			<div class="section-login__container container">
				<img class="section-login__logo" src="images/logo.svg" alt>
				<div class="section-login__text-box">
					<h1 class="section-login__title">Вкус путешествия с «Крафт»</h1>
					<p class="section-login__text">Покупайте продукцию «Крафт» и получайте призы</p>
				</div>
				<form class="section-login__form" @submit.prevent="submit">
					<p class="section-login__form-text">Укажите дату своего рождения для входа на сайт</p>
					<div class="section-login__form-grid">
						<input class="section-login__form-input" type="text" v-model="date.day">
						<input class="section-login__form-input" type="text" v-model="date.mounth">
						<input class="section-login__form-input" type="text" v-model="date.year">
					</div>
					<div class="section-login__age-alert" v-if="isWarning">
						<svg class="section-login__age-alert-icon">
							<use xlink:href="#info-thin"></use>
						</svg>
						<p class="section-login__age-alert-text">Извините, просматривать данный сайт могут только совершеннолетние посетители</p>
					</div>
					<button class="button button--orange section-login__form-button" type="submit">Войти</button>
				</form>
			</div>
		</section>
	</main>
</template>
<script setup>
	import {ref} from "vue";
	definePageMeta({
	  layout: "login",
	});
	let date = ref({
			day:'01',
			mounth: '01',
			year: '2000'
		}), 
		isWarning = ref(false);

	function submit()
	{
		if (isWarning.value) return
		if(isAdult(new Date(date.value.year, date.value.mounth, date.value.day)))
		{
			localStorage.setItem('isOldUser', true)
			navigateTo('/')
		}
		else
			isWarning.value = true;
	}
	function isAdult(birthday) {
		const today = new Date();
		let diffInADay = Math.ceil(Math.abs(today.getTime() - birthday.getTime()) / (1000 * 3600 * 24));
		return (diffInADay / 365 > 18)
	}
</script>
<style lang="scss">
</style>