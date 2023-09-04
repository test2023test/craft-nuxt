<template>
	<section
		class="section-prizes container"
		:class="{'section-prizes--lk': props.isLk, 'section-prizes--score':!props.isLk}"
	>
		<h2 class="section-prizes__title" v-if="props.isLk">
			Вы накопили
			<span class="text-orange section-prizes__title-number">150</span>
			<span class="text-orange">баллов!</span>
		</h2>
		<h2 class="section-prizes__title" v-else>
			<svg class="section-prizes__title-icon">
				<use xlink:href="#clock"></use>
			</svg>Призы за баллы
		</h2>
		<div class="section-prizes__grid">
			<!-- Prize-->
			<article class="prize" v-for="(lottery, index) of $store.state.lottery.basic">
				<p class="prize__label prize__label--light">Розыгрыш каждые 2 дня</p>
				<p class="prize__condition">{{lottery.description}}</p>
				<picture>
					<source :srcset="staticData[index].srcset" type="image/webp"/><img class="prize__img" :src="staticData[index].srcimg" alt=""/>
				</picture>
				<h3 class="prize__title">{{lottery.name}}</h3>
				<p class="prize__players">Сейчас участвует: {{lottery.participantCount}}
					<template v-if="lottery.participantCount > 1 && lottery.participantCount < 5">
						человека
					</template>
					<template v-else>
						человек
					</template>
				</p>
				<template v-if="props.isLk">
					<div class="prize__status" v-if="lottery.isParticipant">
						<svg class="prize__status-icon">
							<use xlink:href="#thumbs-up"></use>
						</svg>Вы участвуете!
					</div>
					<template v-else>
						<Progressbar/>
					</template>
				</template>
			</article>
		</div>
	</section>
</template>
<script setup>
	import { onMounted } from "vue"; 
	import { useStore } from "vuex";
	const staticData = [
		{
			srcset: "images/prize-img1@1x.webp, images/prize-img1@2x.webp 2x",
			srcimg: "images/prize-img1@2x.webp 2x"
		},
		{
			srcset: "images/prize-img2@1x.webp, images/prize-img2@2x.webp 2x",
			srcimg: "images/prize-img2@2x.webp 2x"
		},
		{
			srcset: "images/prize-img3@1x.webp, images/prize-img3@2x.webp 2x",
			srcimg: "images/prize-img3@2x.webp 2x"
		},
	]



	const props = defineProps({
	  isLk: Boolean
	})
	onMounted(()=>{
		useStore().dispatch('lottery/fetchBasicLottery');
	})
</script>
<style lang="scss">
</style>