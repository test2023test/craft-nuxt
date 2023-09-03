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
						<source srcset="/images/hero-img1@1x.webp, /images/hero-img1@2x.webp 2x" type="image/webp"/>
							<img class="section-hero__img" src="/images/hero-img1@1x.png" srcset="/images/hero-img1@2x.png 2x" alt=""/>
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
							<source srcset="/images/steps-img1@1x.webp, /images/steps-img1@2x.webp 2x" type="image/webp"/><img class="step__img" src="/images/steps-img1@1x.png" srcset="/images/steps-img1@2x.png 2x" alt=""/>
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
							<source srcset="/images/steps-img2@1x.webp, /images/steps-img2@2x.webp 2x" type="image/webp"/><img class="step__img" src="/images/steps-img2@1x.png" srcset="/images/steps-img2@2x.png 2x" alt=""/>
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
							<source srcset="/images/steps-img3@1x.webp, /images/steps-img3@2x.webp 2x" type="image/webp"/><img class="step__img" src="/images/steps-img3@1x.png" srcset="/images/steps-img3@2x.png 2x" alt=""/>
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
			<!-- Section Instant-->
			<section class="section-instant section-instant--prize-and-rules container">
				<h2 class="section-instant__title">
					<svg class="section-instant__title-icon">
						<use xlink:href="#lightning"></use>
					</svg>Мгновенные призы
				</h2>
				<div class="section-instant__slider">
					<div class="swiper section-instant__slider-elem">
						<div class="swiper-wrapper">
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img1@1x.webp, /images/instant-card-img1@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img1@1x.png" srcset="/images/instant-card-img1@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Майка</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img2@1x.webp, /images/instant-card-img2@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img2@1x.png" srcset="/images/instant-card-img2@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Худи</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img3@1x.webp, /images/instant-card-img3@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img3@1x.png" srcset="/images/instant-card-img3@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Открывашка</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img4@1x.webp, /images/instant-card-img4@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img4@1x.png" srcset="/images/instant-card-img4@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Бутылка<br>крафтового<br>пива</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img5@1x.webp, /images/instant-card-img5@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img5@1x.png" srcset="/images/instant-card-img5@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Шопер</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img6@1x.webp, /images/instant-card-img6@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img6@1x.png" srcset="/images/instant-card-img6@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Термос*</figcaption>
							</figure>
							<!-- Slide-->
							<figure class="instant-prize swiper-slide">
								<div class="instant-prize__img-box">
									<picture>
										<source srcset="/images/instant-card-img7@1x.webp, /images/instant-card-img7@2x.webp 2x" type="image/webp"/><img class="instant-prize__img" src="/images/instant-card-img7@1x.png" srcset="/images/instant-card-img7@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-prize__text">Волейбольный мяч*</figcaption>
							</figure>
						</div>
					</div>
					<div class="section-instant__slider-nav">
						<button class="section-instant__slider-btn section-instant__slider-btn--prev">
							<svg class="section-instant__slider-btn-icon">
								<use xlink:href="#slider-arrow"></use>
							</svg>
						</button>
						<button class="section-instant__slider-btn section-instant__slider-btn--next">
							<svg class="section-instant__slider-btn-icon">
								<use xlink:href="#slider-arrow"></use>
							</svg>
						</button>
					</div>
				</div>
			</section>
			<!-- Section Prizes-->
			<section class="section-prizes section-prizes--score container">
				<h2 class="section-prizes__title">
					<svg class="section-prizes__title-icon">
						<use xlink:href="#clock"></use>
					</svg>Призы за баллы
				</h2>
				<div class="section-prizes__grid">
					<!-- Prize-->
					<article class="prize">
						<p class="prize__label prize__label--light">Розыгрыш каждые два дня</p>
						<p class="prize__condition">Среди всех, у кого не менее 100 баллов</p>
						<picture>
							<source srcset="/images/prize-img1@1x.webp, /images/prize-img1@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img1@1x.png" srcset="/images/prize-img1@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">Ящик классического пива</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
					<!-- Prize-->
					<article class="prize">
						<p class="prize__label">Еженедельный розыгрыш</p>
						<p class="prize__condition">Среди всех, у кого не менее 250 баллов</p>
						<picture>
							<source srcset="/images/prize-img2@1x.webp, /images/prize-img2@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img2@1x.png" srcset="/images/prize-img2@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">Электрогриль *</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
					<!-- Prize-->
					<article class="prize prize--main">
						<p class="prize__label prize__label--light">
							<svg class="prize__label-icon">
								<use xlink:href="#star"></use>
							</svg>Главный приз
						</p>
						<p class="prize__condition">Среди всех, у кого не менее 1000 баллов</p>
						<picture>
							<source srcset="/images/prize-img3@1x.webp, /images/prize-img3@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img3@1x.png" srcset="/images/prize-img3@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">Путешествие на двоих *</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
				</div>
			</section>
			<!-- Section Prizes-->
			<section class="section-prizes section-prizes--sticker container">
				<h2 class="section-prizes__title">
					<svg class="section-prizes__title-icon">
						<use xlink:href="#target"></use>
					</svg>Призы за коллекции стикеров
				</h2>
				<div class="section-prizes__grid">
					<!-- Prize-->
					<article class="prize">
						<p class="prize__label">Розыгрыш каждые 10 дней</p>
						<p class="prize__condition">Среди всех, у кого 4 стикера<br>«Мини пивоварня»</p>
						<picture>
							<source srcset="/images/prize-img4@1x.webp, /images/prize-img4@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img4@1x.png" srcset="/images/prize-img4@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">30 литров пива</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
					<!-- Prize-->
					<article class="prize">
						<p class="prize__label">Розыгрыш каждые 10 дней</p>
						<p class="prize__condition">Среди всех, у кого 4 стикера<br>«Варочный цех»</p>
						<picture>
							<source srcset="/images/prize-img1@1x.webp, /images/prize-img1@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img1@1x.png" srcset="/images/prize-img1@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">45 литров пива</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
					<!-- Prize-->
					<article class="prize">
						<p class="prize__label">Розыгрыш каждые 10 дней</p>
						<p class="prize__condition">Среди всех, у кого 4 стикера<br>«Цех розлива пива»</p>
						<picture>
							<source srcset="/images/prize-img5@1x.webp, /images/prize-img5@2x.webp 2x" type="image/webp"/><img class="prize__img" src="/images/prize-img5@1x.png" srcset="/images/prize-img5@2x.png 2x" alt=""/>
						</picture>
						<h3 class="prize__title">60 литров пива</h3>
						<p class="prize__players">Сейчас участвует: 1020 человек</p>
					</article>
				</div>
			</section>
		</div>
	</main>
</template>
<script setup>
	import {showModal} from '~/assets/js/components/modal.js'
</script>
<style lang="scss">
</style>