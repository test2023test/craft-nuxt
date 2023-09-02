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
							<div class="section-where-buy__button" v-for="point of pointsList">
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
							<!-- Button-->
							<div class="section-where-buy__button section-where-buy__button--orange">
								<div class="section-where-buy__button-text-box">
									<p class="section-where-buy__button-text">Магазин «Крафт»</p>
									<address class="section-where-buy__button-addr">
										<svg class="section-where-buy__button-addr-icon">
											<use xlink:href="#map-marker"></use>
										</svg> ул. Монтажников, 2
									</address>
								</div>
								<div class="section-where-buy__button-icon-box">
									<svg class="section-where-buy__button-icon">
										<use xlink:href="#yandex"></use>
									</svg>
									<svg class="section-where-buy__button-icon">
										<use xlink:href="#google"></use>
									</svg>
								</div>
							</div>

							
						</div>
					</div>
					<div class="section-where-buy__map-col">
						<div class="dropdown dropdown--where-to-buy section-where-buy__dropdown hide-desktop">
							<div class="dropdown__value-box">
								<input class="dropdown__value" type="text" placeholder="Выберите свой город" disabled value="Оренбург">
								<svg class="dropdown__arrow">
									<use xlink:href="#dropdown-arrow"></use>
								</svg>
							</div>
							<ul class="dropdown__options-list">
								<li class="dropdown__option dropdown__option--selected" data-value="Оренбург">Оренбург</li>
								<li class="dropdown__option" data-value="Москва">Москва</li>
								<li class="dropdown__option" data-value="Санкт-Петербург">Санкт-Петербург</li>
								<li class="dropdown__option" data-value="Казань">Казань</li>
								<li class="dropdown__option" data-value="Новосибирск">Новосибирск</li>
							</ul>
						</div>
						<picture>
							<source srcset="images/map@1x.webp, images/map@2x.webp 2x" type="image/webp"/><img class="section-where-buy__map show-desktop" src="images/map@1x.jpg" srcset="images/map@2x.jpg 2x" alt=""/>
						</picture>
						<picture>
							<source srcset="images/map-mobile@1x.webp, images/map-mobile@2x.webp 2x" type="image/webp"/><img class="section-where-buy__map hide-desktop" src="images/map-mobile@1x.jpg" srcset="images/map-mobile@2x.jpg 2x" alt=""/>
						</picture>
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
		pointsList = ref([]);




	onMounted(()=>{
		fetchCities();
	});

	function selectActiveCity(newCity){
		activeCity.value = newCity;
		fetchPoints();
	}
	function fetchPoints(){
		fetch( runtimeConfig.public.API_BASE_URL + `/sale-points/${activeCity.value.id}/`)
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
	.section-where-buy__button-scroll-container{height: 100%;}
</style>
