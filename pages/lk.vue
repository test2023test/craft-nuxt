<template>
	<main class="main">
		<!-- Section Data-->
		<section class="section-data">
			<div class="container">
				<h1 class="section-data__title">Личный кабинет</h1>
				<div class="section-data__grid">
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои коды</h2>
							<button class="button button--orange button--orange-xs data-card__desktop-btn">Зарегистрировать код</button>
							<button class="button button--orange button--orange-xs button--icon-only data-card__mobile-btn" aria-label="Add code">
								<svg class="button__icon">
									<use xlink:href="#plus"></use>
								</svg>
							</button>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status">Дубликат</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status">Неверный код</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
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
		<InstantSection />
		<!-- Section Prizes-->
		<section class="section-prizes section-prizes--lk container">
			<h2 class="section-prizes__title">
				Вы накопили
				
				<span class="text-orange section-prizes__title-number">150</span>
				<span class="text-orange">баллов!</span>
			</h2>
			<div class="section-prizes__grid">
				<!-- Prize-->
				<article class="prize">
					<p class="prize__label prize__label--light">Розыгрыш каждые 2 дня</p>
					<p class="prize__condition">Среди всех, у кого не менее 100 баллов</p>
					<picture>
						<source srcset="images/prize-img1@1x.webp, images/prize-img1@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img1@1x.png" srcset="images/prize-img1@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Ящик классического пива</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__status">
						<svg class="prize__status-icon">
							<use xlink:href="#thumbs-up"></use>
						</svg>Вы участвуете!
					</div>
				</article>
				<!-- Prize-->
				<article class="prize">
					<p class="prize__label">Еженедельный розыгрыш</p>
					<p class="prize__condition">Среди всех, у кого не менее 250 баллов</p>
					<picture>
						<source srcset="images/prize-img2@1x.webp, images/prize-img2@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img2@1x.png" srcset="images/prize-img2@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Электрогриль *</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__progress">
						<div class="prize__progress-value prize__progress-value--yellow" style="width:30%"></div>
					</div>
					<p class="prize__progress-text">Необходимо ещё 100 баллов для участия</p>
				</article>
				<!-- Prize-->
				<article class="prize prize--main">
					<p class="prize__label prize__label--light">
						<svg class="prize__label-icon">
							<use xlink:href="#star"></use>
						</svg>Главный приз
					</p>
					<p class="prize__condition">Среди всех, у кого не менее 1000 баллов</p>
					<picture>
						<source srcset="images/prize-img3@1x.webp, images/prize-img3@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img3@1x.png" srcset="images/prize-img3@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Путешествие на двоих *</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__progress">
						<div class="prize__progress-value prize__progress-value--green" style="width:70%"></div>
					</div>
					<p class="prize__progress-text">Необходимо ещё 100 баллов для участия</p>
				</article>
			</div>
		</section>
		<!-- Section Instant Prizes-->
		<section class="section-instant-prizes container">
			<h2 class="section-instant-prizes__title"></h2>
			<p class="section-instant-prizes__text"></p>
			<div class="section-instant-prizes__grid"></div>
		</section>
		<!-- Section Lk text-->
		<section class="section-lk-text container">
			<h2 class="section-lk-text__text">Светлана, желаем вам удачи!</h2>
			<p class="section-lk-text__text">
				Если остались вопросы —
				<span class="text-orange">напишите нам</span>.
			</p>
		</section>
	</main>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex";
import { showModal } from '~/assets/js/components/modal.js'
const store = useStore();
	const firstName = computed(() => {
		return store.state.user.data.firstName === '' ? 'Имя' : store.state.user.data.firstName
	})
	const lastName = computed(() => {
		return store.state.user.data.lastName === '' ? 'Фамилия' : store.state.user.data.lastName
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