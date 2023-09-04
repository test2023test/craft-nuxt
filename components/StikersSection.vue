<template>
  <section class="section-dashboard container"> 
		<h2 class="section-dashboard__title"><span class="text-orange">Регистрируйте больше кодов</span>,<br>получайте стикеры и баллы, выигрывайте призы</h2>
		<div class="section-dashboard__grid">

			<div class="section-dashboard__col" v-for="(stickerList, stickerListIndex) of $store.getters['user/stickers']">
				<h3 class="section-dashboard__col-title">
					{{staticData[stickerListIndex].title}}
				</h3>
				<p class="section-dashboard__col-text" v-html="staticData[stickerListIndex].subtitle">
				</p>
				<p class="section-dashboard__players" v-html="staticData[stickerListIndex].countOfParticipants">
				</p>
				<div class="section-dashboard__col-grid">
					<!-- Sticker-->
					<figure
						v-for="(sticker, index) of stickerList"
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
					:class="{'section-dashboard__col-status--green':staticData[stickerListIndex].isActive}"
				>
				<svg
					v-if="staticData[stickerListIndex].isActive"
					class="section-dashboard__col-status-icon"
				>
					<use xlink:href="#thumbs-up"></use>
				</svg>
				 {{staticData[stickerListIndex].status}}
				</p>
			</div>
		</div>
	</section>
</template>
<script setup>
	import { useStore } from "vuex";
	import { onMounted } from "vue";
	import { showModal } from '~/assets/js/components/modal.js';

	const staticData = [
		{
			title:'Мини пивоварня',
			subtitle: 'Соберите 4 коллекционных стикера и участвуйте в розыгрыше <span class="text-orange">30 ЛИТРОВ</span> пива',
			countOfParticipants:'Сейчас участвует: <span class="section-dashboard__players-counter">1020</span> человек',
			status:'Соберите все 4 стикера для участия',
			isActive: false,
			items: [
				{
					srcset: "images/sticker1@1x.webp, images/sticker1@2x.webp 2x",
					srcImg: 'images/sticker1@2x.jpg 2x'
				},
				{
					srcset: "images/sticker2@1x.webp, images/sticker2@2x.webp 2x",
					srcImg: 'images/sticker2@2x.jpg 2x'
				},
				{
					srcset: "images/sticker3@1x.webp, images/sticker3@2x.webp 2x",
					srcImg: 'images/sticker3@2x.jpg 2x'
				},
				{
					srcset: "images/sticker4@1x.webp, images/sticker4@2x.webp 2x",
					srcImg: 'images/sticker4@2x.jpg 2x'
				},
			]
		},
		{
			title:'Варочный цех',
			subtitle: 'Cоберите 4 коллекционных стикера и участвуйте в розыгрыше <span class="text-orange">45 ЛИТРОВ</span> пива',
			countOfParticipants:'Сейчас участвует: <span class="section-dashboard__players-counter">1020</span> человек',
			status:'Вы участвуйте',
			isActive: true,
			items: [
				{
					srcset: "images/sticker5@1x.webp, images/sticker5@2x.webp 2x",
					srcImg: 'images/sticker5@2x.jpg 2x'
				},
				{
					srcset: "images/sticker6@1x.webp, images/sticker6@2x.webp 2x",
					srcImg: 'images/sticker6@2x.jpg 2x'
				},
				{
					srcset: "images/sticker7@1x.webp, images/sticker7@2x.webp 2x",
					srcImg: 'images/sticker7@2x.jpg 2x'
				},
				{
					srcset: "images/sticker8@1x.webp, images/sticker8@2x.webp 2x",
					srcImg: 'images/sticker8@2x.jpg 2x'
				},
			]
		},
		{
			title:'Цех розлива пива',
			subtitle: 'Соберите 4 коллекционных стикера и участвуйте в розыгрыше <span class="text-orange">60 ЛИТРОВ</span> пива',
			countOfParticipants:'Сейчас участвует: <span class="section-dashboard__players-counter">1020</span> человек',
			status:'Соберите все 4 стикера для участия',
			isActive: false,
			items: [
				{
					srcset: "images/sticker9@1x.webp, images/sticker9@2x.webp 2x",
					srcImg: 'images/sticker9@2x.jpg 2x'
				},
				{
					srcset: "images/sticker10@1x.webp, images/sticker10@2x.webp 2x",
					srcImg: 'images/sticker10@2x.jpg 2x'
				},
				{
					srcset: "images/sticker11@1x.webp, images/sticker11@2x.webp 2x",
					srcImg: 'images/sticker11@2x.jpg 2x'
				},
				{
					srcset: "images/sticker12@1x.webp, images/sticker12@2x.webp 2x",
					srcImg: 'images/sticker12@2x.jpg 2x'
				},
			]
		},
	]




	const store = useStore();
	onMounted(()=>{
		store.dispatch('user/getSticker');
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