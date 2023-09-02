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
				navigateTo('/login');
			if(localStorage.getItem('userToken'))
				this.login();
		},
		methods:{
			isOldUser()
			{
				return localStorage.getItem('isOldUser');
			},
			async login()
			{
				await this.$store.dispatch('user/loginInToSystem');
			}
		}
	}
</script>
<style lang="scss">
</style>