<template>
	<section class="section-prizes section-prizes--sticker container">
		<h2 class="section-prizes__title">
			<svg class="section-prizes__title-icon">
				<use xlink:href="#target"></use>
			</svg>Призы за коллекции стикеров
		</h2>
		<div class="section-prizes__grid">
			<!-- Prize-->
			<article class="prize" v-for="(lottery, lotteryIndex) of $store.state.lottery.collection">
				<p class="prize__label" v-if="lottery.periodicity">{{lottery.periodicity}}</p>
				<p class="prize__condition">Среди всех, у кого 4 стикера<br>{{lottery.name}}</p>
				<picture>
					<source :srcset="staticData[lotteryIndex].srcset" type="image/webp"/><img class="prize__img" :src="staticData[lotteryIndex].srcimg" alt=""/>
				</picture>
				<h3 class="prize__title">{{lottery.prizeName}}</h3>
				<p class="prize__players">
					Сейчас участвует: {{lottery.participantCount}}
					<template v-if="lottery.participantCount > 1 && lottery.participantCount < 5">			человека
					</template>
					<template v-else>
						человек
					</template>
				</p>
			</article>
			
		</div>
	</section>
</template>
<script setup>
	import { useStore } from "vuex";
	import { onMounted } from "vue";
	const staticData = [
		{srcset: "images/prize-img4@1x.webp, images/prize-img4@2x.webp 2x", srcimg: "images/prize-img4@1x.png"},
		{srcset: "images/prize-img1@1x.webp, images/prize-img1@2x.webp 2x", srcimg: "images/prize-img1@1x.png"},
		{srcset: "images/prize-img5@1x.webp, images/prize-img5@2x.webp 2x", srcimg: "images/prize-img5@1x.png"}
	] 
	const store = useStore();
	onMounted(()=>{
		store.dispatch('lottery/fetchCollectionLottery');
	});
</script>
<style lang="scss">
</style>