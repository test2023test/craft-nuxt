<template>
	<div class="modal modal--success" id="emailSuccess">
		<div class="modal__body">
			<div class="modal__content">
				<svg class="modal__success-icon">
					<use xlink:href="#success"></use>
				</svg>
				<h2 class="modal__title">E-mail {{$store.state.user.data.email}} успешно подтверждён</h2>
				<p class="modal__subtitle" v-if="!$store.state.user.data.gotEmailBonus">Начислено дополнительные 50 баллов</p>
				<button
					class="button button--orange button--orange-md modal__btn js-modal-close"
					@click="closeModal"
				>Отлично!</button>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { closeModal } from '~/assets/js/components/modal'
</script>
<style lang="scss">

</style>