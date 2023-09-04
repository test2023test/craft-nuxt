<template>
	<div class="data-card">
		<div class="data-card__title-box">
			<h2 class="data-card__title">Мои коды</h2>
			<button class="button button--orange button--orange-xs data-card__desktop-btn"
			 @click="showModal('code')">Зарегистрировать код</button>
			<button
				class="button button--orange button--orange-xs button--icon-only data-card__mobile-btn"
				@click="showModal('code')"
			>
				<svg class="button__icon">
					<use xlink:href="#plus"></use>
				</svg>
			</button>
		</div>
		<TransitionGroup name="code-list">
			<div class="data-card__row" v-for="(code, index) of $store.state.user.activeCodeList" :key="index">
				<div class="data-card__text-box">
					<time class="data-card__time">08.07.2023</time><span class="data-card__code">
						{{code.code_content}}
					</span>
				</div>
				<span class="data-card__status" v-if="code.status === 'duplicate'">Дубликат</span>
				<span class="data-card__status" v-if="code.status === 'wrong_code'">Неверный код</span>
				<span class="data-card__status data-card__status--green" v-if="code.status === 'success'">Одобрен</span>
			</div>
		</TransitionGroup>
		<div class="data-card__button-box" v-if="!isListEnd">
			<button
				class="button button--outline-orange data-card__more-button"
				@click="loadMoreCode"
			>Показать еще
				<svg class="button__icon">
					<use xlink:href="#refresh"></use>
				</svg>
			</button>
		</div>
	</div>
</template>
<script>
	import { showModal } from '~/assets/js/components/modal.js';
	export default {
		data: ()=>({
			page: 1,
			countOnPage: 5,
			isListEnd: false
		}),
		mounted()
		{
			this.fetchCodes();
		},
		methods:
		{
			async fetchCodes()
			{
				await this.$store.dispatch('user/fetchActiveCodeList', {page: this.page, countOnPage: this.countOnPage})	
			},
			async loadMoreCode()
			{
				this.countOnPage += 5;
				await this.fetchCodes();
				this.isListEnd = !(this.countOnPage <= this.$store.state.user.activeCodeList.length);
			},
			showModal: showModal
		},

	}
</script>
<style>
.code-list-enter-active,
.code-list-leave-active {
  transition: all 0.2s ease;
}
.code-list-enter-from,
.code-list-leave-to {
  opacity: 0;
  -webkit-transform: scale(0) translateX(-10%);
      -ms-transform: scale(0) translateX(-10%);
          transform: scale(0) translateX(-10%);
  margin-bottom: 0;
  max-height: 0;
  overflow: hidden; 
}
</style>
