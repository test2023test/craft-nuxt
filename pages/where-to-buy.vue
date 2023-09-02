<template>
	<main class="main">
		<section class="section-where-buy">
			<div class="container">
				<h1 class="section-where-buy__title">Гду купить?</h1>
				<div class="section-where-buy__content">
					<div class="section-where-buy__button-col">
						<div class="section-where-buy__button-scroll-container">
							<div class="dropdown dropdown--where-to-buy section-where-buy__dropdown show-desktop">
								<div class="dropdown__value-box">
									<input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled :value="activeCity.name">
									<svg class="dropdown__arrow">
										<use xlink:href="#dropdown-arrow"></use>
									</svg>
								</div>
								<ul class="dropdown__options-list">
									<li
										class="dropdown__option" 
										v-for="city of cities"
										:data-value="city.name"
										@click="selectActiveCity(city)"
									>
									{{city.name}}
									</li>
								</ul>
							</div>
							<!-- Button-->
							<div
								class="section-where-buy__button section-where-buy__button--block"
								:class="{'section-where-buy__button--orange': activePoint.id === point.id}"
								v-for="point of pointsList"
								@click="setActivePoint(point)"
							>
								<div class="section-where-buy__button-text-box">
									<p class="section-where-buy__button-text">{{point.name}}</p>
									<address class="section-where-buy__button-addr">
										<svg class="section-where-buy__button-addr-icon">
											<use xlink:href="#map-marker"></use>
										</svg> {{point.address}}
									</address>
								</div>
								<svg class="section-where-buy__button-icon">
									<use xlink:href="#chevron-right"></use>
								</svg>
							</div>
							
						</div>
					</div>
					<div class="section-where-buy__map-col">
						<div class="dropdown dropdown--where-to-buy section-where-buy__dropdown hide-desktop">
							<div class="dropdown__value-box">
									<input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled :value="activeCity.name">
									<svg class="dropdown__arrow">
										<use xlink:href="#dropdown-arrow"></use>
									</svg>
							</div>
							<ul class="dropdown__options-list">
								<li
									class="dropdown__option" 
									v-for="city of cities"
									:data-value="city.name"
									@click="selectActiveCity(city)"
								>
								{{city.name}}
								</li>
							</ul>
						</div>
						<ClientOnly>
							<YaMap class="section-where-buy__map" :point="activePoint" ref="yamap" />
						</ClientOnly>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
	import {ref, onMounted} from 'vue';
	const runtimeConfig = useRuntimeConfig();
	let cities = ref([]),
		activeCity = ref({}),
		activePoint = ref({}),
		pointsList = ref([]),
		yamap = ref(null);


	onMounted(()=>{
		fetchCities();
	});
	function setActivePoint(newPoint)
	{
		activePoint.value = newPoint;
		setTimeout(()=>{yamap.value.init()},100)
	}
	async function selectActiveCity(newCity){
		activeCity.value = newCity;
		await fetchPoints();
		setActivePoint(pointsList.value[0]);
	}
	async function fetchPoints(){
		await fetch( runtimeConfig.public.API_BASE_URL + `/sale-points/${activeCity.value.id}/`)
			.then(async (response)=>{
				let dataJson = await response.json();
				pointsList.value = dataJson['sales-points'];
			})
	}
	function fetchCities(){
		fetch( runtimeConfig.public.API_BASE_URL + '/cities/').then(async (response)=>{
			let dataJson = await response.json();
			cities.value = dataJson.cities;
		})
	}
</script>
<style >
	.section-where-buy__map{width: 100%;}
	@media(min-width: 1024px)
	{
		.section-where-buy__button-scroll-container{min-height: 100%;}
	}
</style>
