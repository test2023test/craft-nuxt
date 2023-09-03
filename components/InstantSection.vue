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
					<template v-for="(stiker, index) of $store.getters['user/instantStikers']" >
						<div class="section-instant__grid-col swiper-slide">
							<figure
								class="instant-card instant-card--bg1"
								:class="{'instant-card--disabled': !stiker.activatedCount}"
								data-modal="sticker"
							>
								<div class="instant-card__img-box">
									<picture>
										<source :srcset="srcsets[index].srcset " type="image/webp"/>
										<img
											class="instant-card__img"
											src="stiker.iconUrl"
											:srcset="srcsets[index].imgSrcset" alt=""
										/>
									</picture>
								</div>
								<figcaption class="instant-card__text">{{stiker.name}}<span class="instant-card__counter">3</span></figcaption>
							</figure>
						</div>
					</template>
					<div class="section-instant__grid-col swiper-slide">
						<!-- Card-->
						<figure class="instant-card instant-card--disabled instant-card--bg1">
							<div class="instant-card__img-box">
								<picture>
									<source srcset="images/instant-card-img2@1x.webp, images/instant-card-img2@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img2@1x.png" srcset="images/instant-card-img2@2x.png 2x" alt=""/>
								</picture>
							</div>
							<figcaption class="instant-card__text">Худи</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	const srcsets = [
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