<template>
	<main class="main">
		<section class="section-winners">
			<div class="container">
				<h1 class="section-winners__title">Победители</h1>
				<div class="section-winners__row-box">
					<div class="section-winners__row" v-for="winner of lotteryWinners">
						<time class="section-winners__time section-winners__time--desktop">{{winner.lotteryDrawDate}}</time>
						<p class="section-winners__text">
							<time class="section-winners__time section-winners__time--mobile">{{winner.lotteryDrawDate}}</time><span>{{winner.userFirstName}}</span>
						</p>
						<p class="section-winners__text">{{winner.userPhone}}</p>
						<p class="section-winners__text">{{winner.lotteryType}}</p>
						<p class="section-winners__text">{{lotteryName(winner.lotteryId)}}</p>
					</div>
				</div>
				<div class="section-winners__button-box">
					<button class="button button--orange button--orange-xs section-winners__button">Показать еще</button>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
	import { lotteryWinners } from '~/assets/json/staticData'
	import { lotteries } from '~/assets/json/lottery'
	const lotteryName = (id) => {
		return lotteries.find((item)=>item.id === id).name;
	}
	
</script>
<style lang="scss">
</style>