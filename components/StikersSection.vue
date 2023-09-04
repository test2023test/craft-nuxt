<template>
  <section class="section-dashboard container"> 
		<h2 class="section-dashboard__title"><span class="text-orange">Регистрируйте больше кодов</span>,<br>получайте стикеры и баллы, выигрывайте призы</h2>
		<div class="section-dashboard__grid">
			<div class="section-dashboard__col" v-for="(stickerList, stickerListIndex) of $store.state.lottery.collection">
				<h3 class="section-dashboard__col-title">
					{{stickerList.name}}
				</h3>
				<p class="section-dashboard__col-text" v-html="stickerList.description">
				</p>
				<p class="section-dashboard__players" >
					Сейчас участвует:
						<span class="section-dashboard__players-counter">{{stickerList.participantCount}}</span>
						
						<template v-if="stickerList.participantCount > 1 && stickerList.participantCount < 5">		человека
						</template>
						<template v-else>
							человек
						</template>
				</p>
				<div class="section-dashboard__col-grid">
					<!-- Sticker-->
					<figure
						v-for="(sticker, index) of stickerList.stickers"
						@click="openStickerDetail(sticker)"
						class="sticker"
						:class="{'sticker--disabled': !sticker.activatedCount}"
					>
						<picture>
							<source
								:srcset="staticData[stickerListIndex].items[index].srcset"
								type="image/webp"
							/>
								<img class="sticker__img" :src="sticker.iconUrl" :srcset="staticData[stickerListIndex].items[index].srcImg" alt=""/>
						</picture>
						<figcaption>
							<p class="sticker__text">{{sticker.name}}</p>
							<span 
								v-if="sticker.activatedCount"
								class="sticker__counter"
							>
								{{sticker.activatedCount}}
							</span>
						</figcaption>
					</figure>
				</div>
				<p
					class="section-dashboard__col-status"
					:class="{'section-dashboard__col-status--green': stickerList.isParticipant}"
				>
				<svg
					v-if="stickerList.isParticipant"
					class="section-dashboard__col-status-icon"
				>
					<use xlink:href="#thumbs-up"></use>
				</svg>
				<template v-if="!stickerList.isParticipant">
				 	Соберите все 4 стикера для участия
				</template>
				<template v-else>
				 	Вы участвуйте
				</template>
				</p>
			</div>
		</div>
	</section>
</template>
<script setup>
	import { useStore } from "vuex";
	import { onMounted } from "vue";
	import { showModal } from '~/assets/js/components/modal.js';
	import { staticData } from '~/assets/json/stikers';

	const store = useStore();
	onMounted(()=>{
		store.dispatch('lottery/fetchCollectionLottery');
	});
	function openStickerDetail(stickerData)
	{
		if(stickerData.activatedCount){
			store.commit('modal/setStickerData', stickerData);
			showModal('sticker');
		}
	}
</script>
<style lang="scss">
</style>