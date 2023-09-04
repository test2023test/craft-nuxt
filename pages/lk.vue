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
					<UserDataCard />
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

</script>
<style lang="scss">
</style>