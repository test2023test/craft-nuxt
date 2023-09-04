<template>
	<main class="main">
		<!-- Section Data-->
		<section class="section-data">
			<div class="container">
				<h1 class="section-data__title">Личный кабинет</h1>
				<div class="section-data__grid">
					<!-- Card-->
					<MyCodesCard />
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои призы</h2>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Мгновенный приз</span>
							</div><span class="data-card__text">Волейбольный мяч*</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<div class="data-card__button-box">
							<button class="button button--outline-orange data-card__more-button">Показать еще
								<svg class="button__icon">
									<use xlink:href="#refresh"></use>
								</svg>
							</button>
						</div>
					</div>
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои данные</h2>
							<button
								class="button button--outline-orange data-card__desktop-btn"
								@click="showModal('user')"
							>Редактировать
								<svg class="button__icon">
									<use xlink:href="#pencil"></use>
								</svg>
							</button>
							<button class="button button--outline-orange button--icon-only data-card__mobile-btn" aria-label="Edit">
								<svg class="button__icon">
									<use xlink:href="#pencil"></use>
								</svg>
							</button>
						</div>
						<p class="data-card__name">{{firstName}} {{lastName}}</p>
						<p class="data-card__birthday">
							Дата рождения: {{store.state.user.data.dateOfBirth}}
						</p>
						<p class="data-card__contacts">
							<svg class="data-card__contacts-icon">
								<use xlink:href="#phone"></use>
							</svg>{{phone}}
						</p>
						<p class="data-card__contacts">
							<svg class="data-card__contacts-icon">
								<use xlink:href="#envelope"></use>
							</svg>
							{{store.state.user.data.email}}
						</p>
						<div class="data-card__info-box">
							<p class="data-card__info-text-big">
								Получите +50 баллов
								<br class="show-desktop">за подтверждение e-mail
							</p>
							<p class="data-card__info-text">Получите +50 баллов за подтверждение e-mail</p>
							<p class="data-card__info-text-small">
								Для этого необходимо перейти по ссылке из письма. Если вы не получали письмо, то
								<a class="text-orange" href="#">запросите его ещё раз.</a>
							</p>
						</div>
						<div class="data-card__score-row">
							<p class="data-card__score"><span class="data-card__score-value">169</span>Баллов</p>
							<p class="data-card__score"><span class="data-card__score-value">6</span>Стикеров</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Section Dashboard-->
		<StikersSection />
		<!-- Section Instant-->
		<InstantSection/>
		<!-- Section Prizes-->
		<BasicLotterySection isLk/>
		<!-- Section Instant Prizes-->
		<section class="section-instant-prizes container">
			<h2 class="section-instant-prizes__title"></h2>
			<p class="section-instant-prizes__text"></p>
			<div class="section-instant-prizes__grid"></div>
		</section>
		<!-- Section Lk text-->
		<section class="section-lk-text container">
			<h2 class="section-lk-text__text" v-if="$store.state.user.data?.firstName">{{$store.state.user.data?.firstName}}, желаем вам удачи!</h2>
			<h2 class="section-lk-text__text" v-else>Желаем вам удачи!</h2>
			<p class="section-lk-text__text">
				Если остались вопросы —
				<span class="text-orange">напишите нам</span>.
			</p>
		</section>
	</main>
</template>
<script setup>
import { ref, computed,  } from "vue"
import { useStore } from "vuex";
import { showModal } from '~/assets/js/components/modal.js'
const store = useStore();
	const firstName = computed(() => {
		return store.state.user.data?.firstName === '' ? 'Имя' : store.state.user.data?.firstName
	})
	const lastName = computed(() => {
		return store.state.user.data?.lastName === '' ? 'Фамилия' : store.state.user.data?.lastName
	})
	const phone = computed(() => {
		if(store.state.user.data.phone)
		{
			let numberArr = store.state.user.data.phone.split('');
			return `+${numberArr[0]} ${numberArr[1]}${numberArr[2]}${numberArr[3]} ${numberArr[4]}${numberArr[5]}${numberArr[6]} ${numberArr[7]}${numberArr[8]} ${numberArr[9]}${numberArr[10]}`
		}
		else
			return '-';
	})
</script>
<style lang="scss">
</style>