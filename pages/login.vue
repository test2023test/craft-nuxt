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
					<button class="button button--orange section-login__form-button" type="submit">Войти</button>
				</form>
			</div>
		</section>
	</main>
</template>
<script setup>
	definePageMeta({
	  layout: "login",
	});
	let date = ref({
		day:'01',
		mounth: '01',
		year: '2000'
	})
	function submit()
	{
		if(isAdult(new Date(date.value.year, date.value.mounth, date.value.day)))
		{
			localStorage.setItem('isOldUser', true)
			navigateTo('/')
		}
	}
	function isAdult(birthday) {
		const today = new Date();
		let diffInADay = Math.ceil(Math.abs(today.getTime() - birthday.getTime()) / (1000 * 3600 * 24));
		return diffInADay / 365
	}
</script>
<style lang="scss">
</style>