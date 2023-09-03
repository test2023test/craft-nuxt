<template>
  <div>
  	<div class="modal modal--sticker" id="sticker">
		<div class="modal__body">
			<div class="modal__content">
				<div class="modal__title-box">
					<div class="modal__sticker-box">
						<!-- Sticker-->
						<figure class="sticker sticker--no-hover modal__sticker">
							<picture>
								<source srcset="images/sticker5@1x.webp, images/sticker5@2x.webp 2x" type="image/webp"/>
									<img
										class="sticker__img"
										src="images/sticker5@1x.jpg"
										:src="`${runtimeConfig.public.API_BASE_URL}${$store.state.modal.stikerData?.imageUrl}`"
										alt=""
									/>
							</picture>
							<figcaption>
								<p class="sticker__text">
									{{$store.state.modal.stikerData?.name}}
								</p>
							</figcaption>
						</figure>
						<div class="modal__wrap">
							<p class="modal__subtitle">Стикер</p>
							<h2 class="modal__title">«{{$store.state.modal.stikerData?.name}}»</h2>
							<div class="modal__info-box">
								<svg class="modal__info-box-icon">
									<use xlink:href="#info"></use>
								</svg>
								<p>
									{{$store.state.modal.stikerData?.extraText}}
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
				<div class="modal__text-block" v-html="$store.state.modal.stikerData?.content">
				</div>
				<button class="button button--orange button--orange-md modal__btn js-modal-close">Отлично!</button>
			</div>
		</div>
	</div>
  </div>
</template>
<script setup>
	const runtimeConfig = useRuntimeConfig();
</script>
<style lang="scss">
</style>