<template>
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
		<div class="data-card__row" v-for="code of $store.state.user.activeCodeList">
			<div class="data-card__text-box">
				<time class="data-card__time">08.07.2023</time><span class="data-card__code">
					{{code.code_content}}
				</span>
			</div>
			<span class="data-card__status" v-if="code.status === 'duplicate'">Дубликат</span>
			<span class="data-card__status" v-if="code.status === 'wrong_code'">Неверный код</span>
			<span class="data-card__status data-card__status--green" v-if="code.status === 'success'">Одобрен</span>
		</div>
		<div class="data-card__button-box" v-if="countOnPage <= $store.state.user.activeCodeList.length">
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
	export default {
		data: ()=>({
			page: 1,
			countOnPage: 5,
		}),
		mounted()
		{
			this.fetchCodes();
		},
		methods:
		{
			fetchCodes()
			{
				this.$store.dispatch('user/fetchActiveCodeList', {page: this.page, countOnPage: this.countOnPage})	
			},
			loadMoreCode()
			{
				this.countOnPage += 5;
				this.fetchCodes();
			}
		},

	}
</script>
<style lang="scss">
</style>