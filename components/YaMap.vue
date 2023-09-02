<template>
	<div>
		<div class="section-where-buy__map" id="map" style="height: 400px; width: 100%"></div>
	</div>
</template>
<script>
	const runtimeConfig = useRuntimeConfig();
	export default	{
		props: {
			point:
			{
				type: Object,
				default: [],
			},
		},
		methods:
		{
			init(){
				YaMap.map.destroy()
				YaMap.init({
					setting: {
						center: [+this.point.lat, +this.point.lon],
						zoom: 7
					}
				})
				YaMap.addPoint([+this.point.lat, +this.point.lon]);
			}
		},
		mounted()
		{
			ymaps.ready(YaMap.init({}));
		},
	}
</script>
<style>
	.section-where-buy__map{overflow: hidden;}
</style>