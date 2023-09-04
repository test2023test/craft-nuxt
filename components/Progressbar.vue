<template>
  <div>
  	<div class="prize__progress">
		<div class="prize__progress-value prize__progress-value--yellow" :style="`width:${proccess}%`"></div>
	</div>
	<p class="prize__progress-text">Необходимо ещё 100 баллов для участия</p>
  </div>
</template>
<script>
	export default {
		props: {
			minPoints: Number
		},
		computed: {
			proccess()
			{
				return Math.ceil(+this.$store.state.user.data.loyalty_points / (this.minPoints / 100));
			}
		}
	}
</script>
<style lang="scss">
</style>