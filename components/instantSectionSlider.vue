<template>
	<section class="section-instant section-instant--prize-and-rules container">
		<h2 class="section-instant__title">
			<svg class="section-instant__title-icon">
				<use xlink:href="#lightning"></use>
			</svg>Мгновенные призы
		</h2>
		<div class="section-instant__slider">
			<div class="swiper section-instant__slider-elem" id="instant-slider">
				<div class="swiper-wrapper">
					<!-- Slide-->
					<figure
						class="instant-prize swiper-slide"
						v-for="(sticker, index) of $store.state.lottery.instant"
					>
						<div class="instant-prize__img-box">
							<picture>
								<source :srcset="staticData[index].srcset" type="image/webp"/>
								<img class="instant-prize__img" src="images/instant-card-img1@1x.png" :srcset="staticData[index].imgSrcset" alt=""/>
							</picture>
						</div>
						<figcaption class="instant-prize__text">{{sticker.name}}</figcaption>
					</figure>
				</div>
			</div>
			<div class="section-instant__slider-nav">
				<button class="section-instant__slider-btn" id="instant-prev">
					<svg class="section-instant__slider-btn-icon">
						<use xlink:href="#slider-arrow"></use>
					</svg>
				</button>
				<button class="section-instant__slider-btn section-instant__slider-btn--next">
					<svg class="section-instant__slider-btn-icon" id="instant-next">
						<use xlink:href="#slider-arrow"></use>
					</svg>
				</button>
			</div>
		</div>
	</section>
</template>
<script setup>
	import {ref, onMounted} from "vue";
	import { useStore } from "vuex";
	import { sliderInit } from "~/assets/js/components/slider";
	import { staticData } from "~/assets/json/intantStikerStatic";

	const sliderSection = ref('sliderSection');

	onMounted( async ()=>{
		await useStore().dispatch('lottery/fetchInstantLottery');
		sliderInit('instant-slider','instant-next','instant-prev');
	})


</script>
<style lang="scss">
</style>