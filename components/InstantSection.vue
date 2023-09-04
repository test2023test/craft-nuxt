<template>
	<section class="section-instant section-instant--lk container">
		<div class="section-instant__content-box">
			<h2 class="section-instant__title">
				<svg class="section-instant__title-icon">
					<use xlink:href="#lightning"></use>
				</svg>Мгновенные призы
			</h2>
			<p class="section-instant__text"><span class="text-orange">ПОКУПАЙТЕ БОЛЬШЕ</span>
				продукции и получите шанс выиграть мгновенные призы
			</p>
			<div class="swiper section-instant__slider-elem">
				<div class="swiper-wrapper section-instant__grid">
					<template v-for="(lottery, index) of $store.state.lottery.instant" >
						<div class="section-instant__grid-col swiper-slide">
							<figure
								class="instant-card instant-card--bg1"
								:class="{'instant-card--disabled': !lottery.isParticipant}"
								@click="openStickerDetail(lottery)"
							>
								<div class="instant-card__img-box">
									<picture>
										<source :srcset="staticData[index].srcset " type="image/webp"/>
										<img
											class="instant-card__img"
											:src="lottery.stickers[0].iconUrl"
											:srcset="staticData[index].imgSrcset" alt=""
										/>
									</picture>
								</div>
								<figcaption class="instant-card__text">{{lottery.name}}
								<span class="instant-card__counter" v-if="lottery.activatedCount">{{lottery.activatedCount}}</span></figcaption>
							</figure>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	import { showModal } from '~/assets/js/components/modal.js';
	import { useStore } from 'vuex';
	import { staticData } from "~/assets/json/intantStikerStatic";
	import { onMounted } from "vue"; 
	const store = useStore();
	onMounted(()=>{
		store.dispatch('lottery/fetchInstantLottery');
	})
	function openStickerDetail(lottery)
	{

		if(lottery.isParticipant)
		{
			store.commit('modal/setStickerData', lottery.stickers[0]);
			showModal('sticker');
		}
	}
</script>
<style lang="scss">
</style>