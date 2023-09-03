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
								data-modal="sticker"
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
								<span class="instant-card__counter" v-if="sticker.activatedCount">sticker.activatedCount</span></figcaption>
							</figure>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	const staticData = [
		{
			srcset: "images/instant-card-img1@1x.webp, images/instant-card-img1@2x.webp 2x",
			imgSrcset: "images/instant-card-img1@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img2@1x.webp, images/instant-card-img2@2x.webp 2x",
			imgSrcset: "images/instant-card-img2@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img3@1x.webp, images/instant-card-img3@2x.webp 2x",
			imgSrcset: "images/instant-card-img3@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img4@1x.webp, images/instant-card-img4@2x.webp 2x",
			imgSrcset: "images/instant-card-img4@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img5@1x.webp, images/instant-card-img5@2x.webp 2x",
			imgSrcset: "images/instant-card-img5@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img6@1x.webp, images/instant-card-img6@2x.webp 2x",
			imgSrcset: "images/instant-card-img6@2x.png 2x"
		},
		{
			srcset: "images/instant-card-img7@1x.webp, images/instant-card-img7@2x.webp 2x",
			imgSrcset: "images/instant-card-img7@2x.png 2x"
		},
	]
</script>
<style lang="scss">
</style>