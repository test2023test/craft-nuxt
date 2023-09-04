<template>
	<main class="main">
		<!-- Section Data-->
		<section class="section-data">
			<div class="container">
				<h1 class="section-data__title">Личный кабинет</h1>
				<div class="section-data__grid">
					<!-- Card-->
					<MyCodesCard />
					<UserWinCard />
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