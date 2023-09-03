<template>
	<main class="main">
		<!-- Section Data-->
		<section class="section-data">
			<div class="container">
				<h1 class="section-data__title">Личный кабинет</h1>
				<div class="section-data__grid">
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои коды</h2>
							<button class="button button--orange button--orange-xs data-card__desktop-btn">Зарегистрировать код</button>
							<button class="button button--orange button--orange-xs button--icon-only data-card__mobile-btn" aria-label="Add code">
								<svg class="button__icon">
									<use xlink:href="#plus"></use>
								</svg>
							</button>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status">Дубликат</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status">Неверный код</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__code">J8753G6F18KU</span>
							</div><span class="data-card__status data-card__status--green">Одобрен</span>
						</div>
						<div class="data-card__button-box">
							<button class="button button--outline-orange data-card__more-button">Показать еще
								<svg class="button__icon">
									<use xlink:href="#refresh"></use>
								</svg>
							</button>
						</div>
					</div>
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои призы</h2>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Мгновенный приз</span>
							</div><span class="data-card__text">Волейбольный мяч*</span>
						</div>
						<!-- Row-->
						<div class="data-card__row">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<!-- Row-->
						<div class="data-card__row data-card__row--hidden">
							<div class="data-card__text-box">
								<time class="data-card__time">08.07.2023</time><span class="data-card__text">Приз  за коллекцию</span>
							</div><span class="data-card__text">45 литров пива</span>
						</div>
						<div class="data-card__button-box">
							<button class="button button--outline-orange data-card__more-button">Показать еще
								<svg class="button__icon">
									<use xlink:href="#refresh"></use>
								</svg>
							</button>
						</div>
					</div>
					<!-- Card-->
					<div class="data-card">
						<div class="data-card__title-box">
							<h2 class="data-card__title">Мои данные</h2>
							<button
								class="button button--outline-orange data-card__desktop-btn"
								@click="showModal('user')"
							>Редактировать
								<svg class="button__icon">
									<use xlink:href="#pencil"></use>
								</svg>
							</button>
							<button class="button button--outline-orange button--icon-only data-card__mobile-btn" aria-label="Edit">
								<svg class="button__icon">
									<use xlink:href="#pencil"></use>
								</svg>
							</button>
						</div>
						<p class="data-card__name">{{firstName}} {{lastName}}</p>
						<p class="data-card__birthday">
							Дата рождения: {{store.state.user.data.dateOfBirth}}
						</p>
						<p class="data-card__contacts">
							<svg class="data-card__contacts-icon">
								<use xlink:href="#phone"></use>
							</svg>{{phone}}
						</p>
						<p class="data-card__contacts">
							<svg class="data-card__contacts-icon">
								<use xlink:href="#envelope"></use>
							</svg>
							{{store.state.user.data.email}}
						</p>
						<div class="data-card__info-box">
							<p class="data-card__info-text-big">
								Получите +50 баллов
								<br class="show-desktop">за подтверждение e-mail
							</p>
							<p class="data-card__info-text">Получите +50 баллов за подтверждение e-mail</p>
							<p class="data-card__info-text-small">
								Для этого необходимо перейти по ссылке из письма. Если вы не получали письмо, то
								<a class="text-orange" href="#">запросите его ещё раз.</a>
							</p>
						</div>
						<div class="data-card__score-row">
							<p class="data-card__score"><span class="data-card__score-value">169</span>Баллов</p>
							<p class="data-card__score"><span class="data-card__score-value">6</span>Стикеров</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Section Dashboard-->
		<section class="section-dashboard container">
			<h2 class="section-dashboard__title"><span class="text-orange">Регистрируйте больше кодов</span>,<br>получайте стикеры и баллы, выигрывайте призы</h2>
			<div class="section-dashboard__grid">
				<!-- Col-->
				<div class="section-dashboard__col">
					<h3 class="section-dashboard__col-title">Мини пивоварня</h3>
					<p class="section-dashboard__col-text">
						Соберите 4 коллекционных стикера и участвуйте в розыгрыше
						<span class="text-orange">30 ЛИТРОВ</span>
						
						пива
					</p>
					<p class="section-dashboard__players">
						Сейчас участвует:
						<span class="section-dashboard__players-counter">1020</span>
						
						человек
					</p>
					<div class="section-dashboard__col-grid">
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker1@1x.webp, images/sticker1@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker1@1x.jpg" srcset="images/sticker1@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">ХопГан</p><span class="sticker__counter">1</span>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker2@1x.webp, images/sticker2@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker2@1x.jpg" srcset="images/sticker2@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Сургуч</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker3@1x.webp, images/sticker3@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker3@1x.jpg" srcset="images/sticker3@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Дрожжи</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker4@1x.webp, images/sticker4@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker4@1x.jpg" srcset="images/sticker4@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Цилиндро-конический танк</p>
							</figcaption>
						</figure>
					</div>
					<p class="section-dashboard__col-status">Соберите все 4 стикера для участия</p>
				</div>
				<!-- Col-->
				<div class="section-dashboard__col">
					<h3 class="section-dashboard__col-title">Варочный цех</h3>
					<p class="section-dashboard__col-text">
						Соберите 4 коллекционных стикера и участвуйте в розыгрыше
						<span class="text-orange">45 ЛИТРОВ</span>
						
						пива
					</p>
					<p class="section-dashboard__players">
						Сейчас участвует:
						<span class="section-dashboard__players-counter">1020</span>
						
						человек
					</p>
					<div class="section-dashboard__col-grid">
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker5@1x.webp, images/sticker5@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker5@1x.jpg" srcset="images/sticker5@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Варочный чан</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker6@1x.webp, images/sticker6@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker6@1x.jpg" srcset="images/sticker6@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Солод</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker7@1x.webp, images/sticker7@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker7@1x.jpg" srcset="images/sticker7@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Хмель</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker8@1x.webp, images/sticker8@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker8@1x.jpg" srcset="images/sticker8@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Заторный чан</p><span class="sticker__counter">3</span>
							</figcaption>
						</figure>
					</div>
					<p class="section-dashboard__col-status section-dashboard__col-status--green">
						<svg class="section-dashboard__col-status-icon">
							<use xlink:href="#thumbs-up"></use>
						</svg>Вы участвуете!
					</p>
				</div>
				<!-- Col-->
				<div class="section-dashboard__col">
					<h3 class="section-dashboard__col-title">Цех розлива пива</h3>
					<p class="section-dashboard__col-text">
						Соберите 4 коллекционных стикера и участвуйте в розыгрыше
						<span class="text-orange">60 ЛИТРОВ</span>
						
						пива
					</p>
					<p class="section-dashboard__players">
						Сейчас участвует:
						<span class="section-dashboard__players-counter">1020</span>
						
						человек
					</p>
					<div class="section-dashboard__col-grid">
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker9@1x.webp, images/sticker9@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker9@1x.jpg" srcset="images/sticker9@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Линия розлива</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker10@1x.webp, images/sticker10@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker10@1x.jpg" srcset="images/sticker10@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Этикетировщик</p><span class="sticker__counter">2</span>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker sticker--disabled">
							<picture>
								<source srcset="images/sticker11@1x.webp, images/sticker11@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker11@1x.jpg" srcset="images/sticker11@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Паллеты</p>
							</figcaption>
						</figure>
						<!-- Sticker-->
						<figure class="sticker" data-modal="sticker">
							<picture>
								<source srcset="images/sticker12@1x.webp, images/sticker12@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker12@1x.jpg" srcset="images/sticker12@2x.jpg 2x" alt=""/>
							</picture>
							<figcaption>
								<p class="sticker__text">Кар</p>
							</figcaption>
						</figure>
					</div>
					<p class="section-dashboard__col-status">Соберите все 4 стикера для участия</p>
				</div>
			</div>
		</section>
		<!-- Section Instant-->
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
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--bg1" data-modal="sticker">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img1@1x.webp, images/instant-card-img1@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img1@1x.png" srcset="images/instant-card-img1@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Майка<span class="instant-card__counter">3</span></figcaption>
							</figure>
						</div>
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
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--bg2" data-modal="sticker">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img3@1x.webp, images/instant-card-img3@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img3@1x.png" srcset="images/instant-card-img3@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Открывашка</figcaption>
							</figure>
						</div>
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--disabled instant-card--bg3">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img4@1x.webp, images/instant-card-img4@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img4@1x.png" srcset="images/instant-card-img4@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Бутылка крафтового<br>пива</figcaption>
							</figure>
						</div>
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--bg4" data-modal="sticker">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img5@1x.webp, images/instant-card-img5@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img5@1x.png" srcset="images/instant-card-img5@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Шопер</figcaption>
							</figure>
						</div>
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--bg5" data-modal="sticker">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img6@1x.webp, images/instant-card-img6@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img6@1x.png" srcset="images/instant-card-img6@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Термос *<span class="instant-card__counter">2</span></figcaption>
							</figure>
						</div>
						<div class="section-instant__grid-col swiper-slide">
							<!-- Card-->
							<figure class="instant-card instant-card--bg6" data-modal="sticker">
								<div class="instant-card__img-box">
									<picture>
										<source srcset="images/instant-card-img7@1x.webp, images/instant-card-img7@2x.webp 2x" type="image/webp"/><img class="instant-card__img" src="images/instant-card-img7@1x.png" srcset="images/instant-card-img7@2x.png 2x" alt=""/>
									</picture>
								</div>
								<figcaption class="instant-card__text">Волейбольный<br>мяч *</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Section Prizes-->
		<section class="section-prizes section-prizes--lk container">
			<h2 class="section-prizes__title">
				Вы накопили
				
				<span class="text-orange section-prizes__title-number">150</span>
				<span class="text-orange">баллов!</span>
			</h2>
			<div class="section-prizes__grid">
				<!-- Prize-->
				<article class="prize">
					<p class="prize__label prize__label--light">Розыгрыш каждые 2 дня</p>
					<p class="prize__condition">Среди всех, у кого не менее 100 баллов</p>
					<picture>
						<source srcset="images/prize-img1@1x.webp, images/prize-img1@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img1@1x.png" srcset="images/prize-img1@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Ящик классического пива</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__status">
						<svg class="prize__status-icon">
							<use xlink:href="#thumbs-up"></use>
						</svg>Вы участвуете!
					</div>
				</article>
				<!-- Prize-->
				<article class="prize">
					<p class="prize__label">Еженедельный розыгрыш</p>
					<p class="prize__condition">Среди всех, у кого не менее 250 баллов</p>
					<picture>
						<source srcset="images/prize-img2@1x.webp, images/prize-img2@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img2@1x.png" srcset="images/prize-img2@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Электрогриль *</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__progress">
						<div class="prize__progress-value prize__progress-value--yellow" style="width:30%"></div>
					</div>
					<p class="prize__progress-text">Необходимо ещё 100 баллов для участия</p>
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
						<source srcset="images/prize-img3@1x.webp, images/prize-img3@2x.webp 2x" type="image/webp"/><img class="prize__img" src="images/prize-img3@1x.png" srcset="images/prize-img3@2x.png 2x" alt=""/>
					</picture>
					<h3 class="prize__title">Путешествие на двоих *</h3>
					<p class="prize__players">Сейчас участвует: 1020 человек</p>
					<div class="prize__progress">
						<div class="prize__progress-value prize__progress-value--green" style="width:70%"></div>
					</div>
					<p class="prize__progress-text">Необходимо ещё 100 баллов для участия</p>
				</article>
			</div>
		</section>
		<!-- Section Instant Prizes-->
		<section class="section-instant-prizes container">
			<h2 class="section-instant-prizes__title"></h2>
			<p class="section-instant-prizes__text"></p>
			<div class="section-instant-prizes__grid"></div>
		</section>
		<!-- Section Lk text-->
		<section class="section-lk-text container">
			<h2 class="section-lk-text__text">Светлана, желаем вам удачи!</h2>
			<p class="section-lk-text__text">
				Если остались вопросы —
				<span class="text-orange">напишите нам</span>.
			</p>
		</section>
		<!-- Modal Sticker-->
		<div class="modal modal--sticker" id="sticker">
			<div class="modal__body">
				<div class="modal__content">
					<div class="modal__title-box">
						<div class="modal__sticker-box">
							<!-- Sticker-->
							<figure class="sticker sticker--no-hover modal__sticker">
								<picture>
									<source srcset="images/sticker5@1x.webp, images/sticker5@2x.webp 2x" type="image/webp"/><img class="sticker__img" src="images/sticker5@1x.jpg" srcset="images/sticker5@2x.jpg 2x" alt=""/>
								</picture>
								<figcaption>
									<p class="sticker__text">Варочный чан</p>
								</figcaption>
							</figure>
							<div class="modal__wrap">
								<p class="modal__subtitle">Стикер</p>
								<h2 class="modal__title">«Варочный чан»</h2>
								<div class="modal__info-box">
									<svg class="modal__info-box-icon">
										<use xlink:href="#info"></use>
									</svg>
									<p>
										Соберите ещё 1 стикер из коллекции «Варочный цех»
										<br class="show-desktop">для участия в розыгрыше 45 литров пива
									</p>
								</div>
							</div>
						</div>
						<button class="modal__close js-modal-close">
							<svg class="modal__close-icon">
								<use xlink:href="#close"></use>
							</svg>
						</button>
					</div>
					<div class="modal__text-block">
						<p>Варочный чан представляет собой изготовленный из нержавеющей стали цилиндр с двойным сферическим дном и теплоизоляцией для сокращения затрат электроэнергии на подогрев. Целью затирания является максимальное экстрактирование солода и выделение из него необходимых для изготовления сусла ферментов.</p><br>
						<p>Очень важно, чтобы вода имела определенную степень кислотности. Дело в том, что в щелочной среде процесс выделения сухих веществ резко уменьшается, потому в некоторых случаях для повышения кислотности применяется молочная кислота.</p>
					</div>
					<button class="button button--orange button--orange-md modal__btn js-modal-close">Отлично!</button>
				</div>
			</div>
		</div>
	</main>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex";
const store = useStore();
	const firstName = computed(() => {
		return store.state.user.data.firstName === '' ? 'Имя' : store.state.user.data.firstName
	})
	const lastName = computed(() => {
		return store.state.user.data.lastName === '' ? 'Фамилия' : store.state.user.data.lastName
	})
	const phone = computed(() => {
		if(store.state.user.data.phone)
		{
			let numberArr = store.state.user.data.phone.split('');
			return `+${numberArr[0]} ${numberArr[1]}${numberArr[2]}${numberArr[3]} ${numberArr[4]}${numberArr[5]}${numberArr[6]} ${numberArr[7]}${numberArr[8]} ${numberArr[9]}${numberArr[10]}`
		}
		else
			return '-';
	})


	function showModal(modalName)
	{
		if(process.browser){
			const modal = document.querySelector(`#${modalName}`)
			if (!modal) {
				return
			}

			if (document.querySelector('.modal--shown')) {
				closeModal()
			}

			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'

			modal.classList.add('modal--show')
			initSlider(modal);
			setTimeout(
				() => {
					modal.classList.add('modal--backdrop')
				},
				50,
				modal
			)

			setTimeout(
				() => {
					modal.classList.add('modal--shown')
				},
				300,
				modal
			)
		}
	}
	const initSlider = (modal) => {
		
		const sliderEl = modal.querySelector('.modal__slider')
		if (!sliderEl || slider) return

		slider = new Swiper(sliderEl, {
			modules: [EffectCreative],
			watchSlidesProgress: true,
			slidesPerView: 5,
			spaceBetween: 0,
			loop: true,
			effect: "creative",
			centeredSlides: true,
			creativeEffect: {
				limitProgress:5,
				prev: {
					translate: ['-100%', 0, 0],
					scale: [.7],
				},
				next: {
					translate: ['100%', 0, 0],
					scale: [.7],
				},
			},
		})

		setInterval(() => {
			slider.slideNext()
		}, 1000, slider)
	}
</script>
<style lang="scss">
</style>