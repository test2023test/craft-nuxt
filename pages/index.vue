<template>
	<main class="main">
		<!-- Section Hero-->
		<section class="section-hero">
			<div class="section-hero__container container">
				<div class="section-hero__text-box">
					<h1 class="section-hero__title">Вкус<br>путешествия<br>с «Крафт»</h1>
					<p class="section-hero__text">Покупайте продукцию «Крафт» и получайте призы!<br>Главный приз - путешествие на двоих.</p>
					<button
						class="button button--orange section-hero__button" 
						@click="showModal('code')"
					>Зарегистрировать код</button>
					<p class="section-hero__period">Регистрация кодов с 20 июля по 12 октября 2023 г</p>
				</div>
				<div class="section-hero__img-box">
					<picture>
						<source srcset="images/hero-img1@1x.webp, images/hero-img1@2x.webp 2x" type="image/webp"/><img class="section-hero__img" src="images/hero-img1@1x.png" srcset="images/hero-img1@2x.png 2x" alt=""/>
					</picture>
					<svg class="section-hero__waves">
						<use xlink:href="#waves"></use>
					</svg>
					<svg class="section-hero__dashes">
						<use xlink:href="#dashes"></use>
					</svg>
				</div>
			</div>
		</section>
		<div class="black-wrapper">
			<!-- Section Steps-->
			<div class="section-steps container">
				<div class="section-steps__grid">
					<!-- Elem-->
					<figure class="section-steps__elem step">
						<picture>
							<source srcset="images/steps-img1@1x.webp, images/steps-img1@2x.webp 2x" type="image/webp"/><img class="step__img" src="images/steps-img1@1x.png" srcset="images/steps-img1@2x.png 2x" alt=""/>
						</picture>
						<figcaption>
							<p class="step__text">Покупайте продукцию Крафт со знаком «Вкус путешествия с «Крафт»</p>
						</figcaption>
					</figure>
					<svg class="section-steps__arrow">
						<use xlink:href="#steps-arrow"></use>
					</svg>
					<!-- Elem-->
					<figure class="section-steps__elem step">
						<picture>
							<source srcset="images/steps-img2@1x.webp, images/steps-img2@2x.webp 2x" type="image/webp"/><img class="step__img" src="images/steps-img2@1x.png" srcset="images/steps-img2@2x.png 2x" alt=""/>
						</picture>
						<figcaption>
							<p class="step__text">
								Регистрируйте
								<br class="show-desktop">коды из-под крышек, получайте баллы и стикеры
							</p>
						</figcaption>
					</figure>
					<svg class="section-steps__arrow">
						<use xlink:href="#steps-arrow"></use>
					</svg>
					<!-- Elem-->
					<figure class="section-steps__elem step">
						<picture>
							<source srcset="images/steps-img3@1x.webp, images/steps-img3@2x.webp 2x" type="image/webp"/><img class="step__img" src="images/steps-img3@1x.png" srcset="images/steps-img3@2x.png 2x" alt=""/>
						</picture>
						<figcaption>
							<p class="step__text">Участвуйте в розыгрыше призов каждый день</p>
						</figcaption>
					</figure>
				</div>
				<div class="section-steps__button-box"><button class="button button--orange button--orange-sm section-steps__button"  @click="showModal('code')">Зарегистрировать</button></div>
			</div>
			<!-- Section Prizes text-->
			<section class="section-prizes-text container">
				<h2 class="section-prizes-text__title">Призы</h2>
				<p class="section-prizes-text__text">Чем БОЛЬШЕ КОДОВ ,<br class="hide-desktop">
					
					тем ВЫШЕ ШАНС получить призы!
				</p>
			</section>
			<instantSectionSlider />
			<!-- Section Prizes-->
			<BasicLotterySection />
			<!-- Section Prizes-->
			<StickerSectionPromo />
		</div>
	</main>
</template>
<script setup>
	import {showModal} from '~/assets/js/components/modal.js'
</script>
<style lang="scss">
</style>