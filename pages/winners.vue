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
						<p class="section-winners__text">
							<template v-if="winner.lotteryType === 'instant'">
								Мгновенный приз
							</template>
							<template v-if="winner.lotteryType === 'basic'">
								Обычная лотерея
							</template>
							<template v-if="winner.lotteryType === 'collection'">
								Коллекция стикеров
							</template>
						</p>
						<p class="section-winners__text">{{winner.prizeName}}</p>
					</div>
				</div>
				<div class="section-winners__button-box">
					<button
						v-if="countItems <= lotteryWinners.length"
						@click="loadMore"
						class="button button--orange button--orange-xs section-winners__button" 
					>
						Показать еще
					</button>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
	import { onMounted, ref } from "vue";
	let countItems = ref(8);
	let lotteryWinners = ref([]);
	onMounted(()=>{
		fetchLotteryWinners();
	});
	async function fetchLotteryWinners()
	{
		await fetch(`https://promo-orenbeer.dreamdev.space/lottery-winners/?page=1&per_page=${countItems.value}`)
		.then(async (res)=>{
			let data = await res.json();
			lotteryWinners.value = data.lotteryWinners;
		})
		
	}
	function loadMore()
	{
		countItems.value += 8;
		fetchLotteryWinners();
	}
	
</script>
<style lang="scss">
</style>