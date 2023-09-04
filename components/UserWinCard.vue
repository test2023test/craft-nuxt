<template>
	<div class="data-card">
		<div class="data-card__title-box">
			<h2 class="data-card__title">Мои призы</h2>
		</div>
		<!-- Row-->
		<TransitionGroup name="win-list" tag="ul">
			<div class="data-card__row" v-for="(winItem, index) of winList" :key="index">
				<div class="data-card__text-box">
					<time class="data-card__time">08.07.2023</time>
					<span class="data-card__text">
						<template v-if="winItem.lotteryType === 'instant'">
							Мгновенный приз
						</template>
						<template v-if="winItem.lotteryType === 'basic'">
							Обычная лотерея
						</template>
						<template v-if="winItem.lotteryType === 'collection'">
							Коллекция стикеров
						</template>
					</span>
				</div><span class="data-card__text">{{winItem.prizeName}}</span>
			</div>
		</TransitionGroup>
		<div class="data-card__button-box">
			<button
				v-if="!isListEnd"
				class="button button--outline-orange data-card__more-button"
				@click="loadMore"
			>
			Показать еще
				<svg class="button__icon">
					<use xlink:href="#refresh"></use>
				</svg>
			</button>
		</div>
	</div>
</template>
<script setup>
		import { onMounted, ref } from "vue";
		let countItems = ref(2);
		let winList = ref([]);
		let isListEnd = ref(false);

		onMounted(()=>{
			fetchwinList();
		});
		async function fetchwinList()
		{
			await fetch(`https://promo-orenbeer.dreamdev.space/user-lottery-results/?token=${localStorage.getItem('userToken')}&page=1&per_page=${countItems.value}`)
			.then(async (res)=>{
				let data = await res.json();
				winList.value = data.userLotteryResults;
			})
		}
		async function loadMore()
		{
			countItems.value += 1;
			await fetchwinList();
			isListEnd.value = countItems.value <= winList.value.length;
		}

</script>
<style>
.win-list-enter-active,
.win-list-leave-active {
  transition: all 0.2s ease;
}
.win-list-enter-from,
.win-list-leave-to {
  opacity: 0;
  -webkit-transform: scale(0) translateX(-10%);
      -ms-transform: scale(0) translateX(-10%);
          transform: scale(0) translateX(-10%);
  margin-bottom: 0;
  max-height: 0;
  overflow: hidden; 
}
</style>