<template>
  	<main class="main">
		<section class="section-login">
			<div class="section-login__container container">
				<img class="section-login__logo" src="images/logo.svg" alt>
				<div class="section-login__text-box">
					<h1 class="section-login__title">Вкус путешествия с «Крафт»</h1>
					<p class="section-login__text">Покупайте продукцию «Крафт» и получайте призы</p>
				</div>
				<form class="section-login__form" action="#">
					<p class="section-login__form-text">Укажите дату своего рождения для входа на сайт</p>
					<div class="section-login__form-grid">
						<input class="section-login__form-input" type="text" value="01">
						<input class="section-login__form-input" type="text" value="01">
						<input class="section-login__form-input" type="text" value="2000">
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
</script>
<style lang="scss">
</style>