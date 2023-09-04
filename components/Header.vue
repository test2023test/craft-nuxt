<template>
	<header class="header" >
		<div class="header__container container">
			<button class="header__menu-btn" aria-label="Menu">
				<svg class="header__menu-btn-icon header__menu-btn-icon--burger">
					<use xlink:href="#burger"></use>
				</svg>
				<svg class="header__menu-btn-icon header__menu-btn-icon--close">
					<use xlink:href="#close"></use>
				</svg>
			</button><NuxtLink class="header__logo-link" to="/"><img class="header__logo" src="images/logo.svg" alt="alt"/></NuxtLink>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-elem"><NuxtLink @click="closeBurgerMenu" class="header__nav-link" to="/">Правила и призы</NuxtLink></li>
					<li class="header__nav-elem"><NuxtLink @click="closeBurgerMenu" class="header__nav-link" to="winners">Победители</NuxtLink></li>
					<li class="header__nav-elem"><NuxtLink @click="closeBurgerMenu" class="header__nav-link" to="where-to-buy">Где купить</NuxtLink></li>
					<li class="header__nav-elem"><NuxtLink @click="closeBurgerMenu" class="header__nav-link" data-modal="feedback">Обратная связь</NuxtLink></li>
				</ul>
				<NuxtLink v-if="store.state.user.isLogin" to="/lk" class="header__user-nav header__user-nav--active header__user-nav--mobile">
					<svg class="header__user-icon">
						<use xlink:href="#user-icon"></use>
					</svg>
					<div class="header__user-nav-box">
						<p class="header__user-name">{{firstName}}
						{{lastName}}</p>
						<button class="header__user-logout" @click.prevent.stop="exit">Выйти</button>
					</div>
				</NuxtLink>
			</nav>
			<div class="header__user-nav" v-if="!store.state.user.isLogin" data-modal="login">
				<a class="header__lk-link" href="#">
					<span class="header__lk-link-text">Личный кабинет</span>
					<svg class="header__user-icon">
						<use xlink:href="#user-icon"></use>
					</svg>
				</a>
			</div>
			<NuxtLink to="/lk" class="header__user-nav header__user-nav--active" v-else>
				<div class="header__user-nav-box">
					<p class="header__user-name">
						{{firstName}}
						{{lastName}}
					</p>
					<button class="header__user-logout" @click.prevent.stop="exit">Выйти</button>
				</div>
				<svg class="header__user-icon">
					<use xlink:href="#user-icon"></use>
				</svg>
			</NuxtLink>
		</div>

	</header>
</template>
<script setup>
	import { ref, computed } from "vue"
	import { useStore } from "vuex"
	let store = useStore();
	const exit = ()=>{store.dispatch('user/logOutOfTheSystem')};

	const firstName = computed(() => {
		return store.state.user.data.firstName === '' ? 'Имя' : store.state.user.data.firstName
	})
	const lastName = computed(() => {
		return store.state.user.data.lastName === '' ? 'Фамилия' : store.state.user.data.lastName
	})

	function closeBurgerMenu()
	{
		if(process.browser){
			let header = document.querySelector('.header');
			header.classList.add('header--menu-animate')
			setTimeout(() => {
				if (header.classList.contains('header--menu-show')) {
					header.classList.remove('header--menu-show')
					document.body.style.overflow = ''
				} else {
					header.classList.add('header--menu-show')
					document.body.style.overflow = 'hidden'
				}
				setTimeout(() => {
					header.classList.remove('header--menu-animate')
				}, 300)
			})
		}
	}


</script>
<style lang="scss">
</style>