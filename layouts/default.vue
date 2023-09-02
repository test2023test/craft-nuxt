<template>
  <div>
  	<Header />
  	<slot></slot>
  	<Footer />
  	<Sprite></Sprite>
  </div>
</template>
<script>
	export default {
		mounted()
		{
			if(!this.isOldUser())
				navigateTo('/login')
		},
		methods:{
			isOldUser()
			{
				return localStorage.getItem('isOldUser');
			}
		}
	}
</script>
<style lang="scss">
</style>