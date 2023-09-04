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
					<template v-for="(sticker, index) of $store.getters['user/instantStickers']" >
						<div class="section-instant__grid-col swiper-slide">
							<figure
								class="instant-card instant-card--bg1"
								:class="{'instant-card--disabled': !sticker.activatedCount}"
								@click="openStickerDetail(sticker)"
							>
								<div class="instant-card__img-box">
									<picture>
										<source :srcset="staticData[index].srcset " type="image/webp"/>
										<img
											class="instant-card__img"
											:src="sticker.iconUrl"
											:srcset="staticData[index].imgSrcset" alt=""
										/>
									</picture>
								</div>
								<figcaption class="instant-card__text">{{sticker.name}}
								<span class="instant-card__counter" v-if="sticker.activatedCount">{{sticker.activatedCount}}</span></figcaption>
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
	import {useStore} from 'vuex';
	import { staticData } from "~/assets/json/intantStikerStatic";
	const store = useStore();
	function openStickerDetail(stickerData)
	{
		if(stickerData.activatedCount){
			store.commit('modal/setStickerData', stickerData);
			showModal('sticker');
		}
	}
</script>
<style lang="scss">
</style>