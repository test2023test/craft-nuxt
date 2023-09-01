<template>
	<div class="modal modal--user" id="user">
		<div class="modal__body">
			<div class="modal__content">
				<div class="modal__content-box">
					<div class="modal__title-box">
						<div class="modal__wrap">
							<h2 class="modal__title">Мои данные</h2>
							<p class="modal__subtitle">Пожалуйста, введите свои реальные данные, иначе могут быть проблемы при получении призов.</p>
						</div>
						<button class="modal__close js-modal-close">
							<svg class="modal__close-icon">
								<use xlink:href="#close"></use>
							</svg>
						</button>
					</div>
					<div class="modal__wrap">
						<div class="form-group form-group--error">
							<label class="form-group__label">Имя</label>
							<input class="form-group__input" type="text" name="first-name" placeholder="Введите имя"><span class="form-group__error-text">Текст ошибки</span>
						</div>
						<div class="form-group">
							<label class="form-group__label">Фамилия</label>
							<input class="form-group__input" type="text" name="first-name" placeholder="Введите фамилию">
						</div>
						<div class="form-group">
							<p class="form-group__label">Пол</p>
							<div class="form-group__option-row">
								<label class="option">
									<input class="option__input" type="radio" name="gender">
									<p class="option__text">Муж
										<svg class="option__icon">
											<use xlink:href="#male"></use>
										</svg>
									</p>
								</label>
								<label class="option">
									<input class="option__input" type="radio" name="gender">
									<p class="option__text">Жен
										<svg class="option__icon">
											<use xlink:href="#female"></use>
										</svg>
									</p>
								</label>
							</div>
						</div>
						<div class="form-group">
							<p class="form-group__label">Город</p>
							<div class="dropdown">
								<div class="dropdown__value-box">
									<input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled>
									<svg class="dropdown__arrow">
										<use xlink:href="#dropdown-arrow"></use>
									</svg>
								</div>
								<ul class="dropdown__options-list">
									<li class="dropdown__option" data-value="Оренбург">Оренбург</li>
									<li class="dropdown__option" data-value="Москва">Москва</li>
									<li class="dropdown__option" data-value="Санкт-Петербург">Санкт-Петербург</li>
									<li class="dropdown__option" data-value="Казань">Казань</li>
									<li class="dropdown__option" data-value="Новосибирск">Новосибирск</li>
								</ul>
							</div>
						</div>
						<div class="form-group mb24">
							<label class="form-group__label">Дата рождения</label>
							<input class="form-group__input form-group__input--date" type="text" name="first-name" value="12.12.2000">
						</div>
						<div class="modal__form-panel">
							<div class="form-group">
								<label class="form-group__label">Телефон</label>
								<div class="form-group__row">
									<input class="form-group__input" type="tel" name="phone" value="+7">
									<button class="button button--white form-group__confirm-btn">Подтвердить</button>
								</div>
							</div>
							<div class="form-group">
								<label class="form-group__label form-group__label--small">Введите код из SMS, который мы отправили 5 секунд назад</label>
								<div class="form-group__row">
									<input class="form-group__input" type="text" name="code" placeholder="Код">
									<button class="button button--white form-group__confirm-btn">Отправить</button>
								</div>
							</div>
							<p class="modal__hint">
								Если код не пришёл, запросите
								<a class="modal__hint-link" href="#">новый код</a>
							</p>
						</div>
						<div class="modal__form-panel">
							<div class="form-group">
								<label class="form-group__label">Email</label>
								<input class="form-group__input" type="email" name="email" placeholder="Введите email">
							</div>
							<p class="modal__hint modal__hint--yellow">E-mail ещё не подтверждён.</p>
							<p class="modal__hint">
								Для подтверждения e-mail после обновления данных перейдите по ссылке из письма и получите
								<span class="text-white">+50 баллов.</span>
							</p>
						</div>
					</div>
					<button class="button button--orange button--orange-md modal__btn">Обновить</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>
<style lang="scss">
</style>