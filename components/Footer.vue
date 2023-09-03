<template>
	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__text-box">
				<p class="footer__text">
					Общий срок проведения Акции с 20 июля по 12 ноября 2023 года, включая период выдачи призов победителям.
					<br class="show-desktop"/>Регистрация кодов осуществляется на promo.orenbeer.ru
				</p>
				<p class="footer__text">Период покупки и регистрации кодов (далее «период регистрации кодов»): 20.07.2023 - 12.10.2023 года включительно.</p>
				<p class="footer__text">*Будет предоставлен сертификат на приобретение приза. Побрости в Полных правилах акции.</p>
				<p class="footer__text">Призы могут отличаться по внешнему виду от их изображения на сайте и рекламных материалах.</p>
			</div>
			<NuxtLink class="button button--gray footer__button" to="agreement">Полные правила акции
				<svg class="button__icon">
					<use xlink:href="#button-arrow"></use>
				</svg>
			</NuxtLink>
		</div>
		<ModalFeedback />
		<ModalLogin />
		<ModalCode />
		<ModalUser />
		<ModalStiker />
	</footer>
</template>
