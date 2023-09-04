<template>
  <div>
	  	
  </div>
</template>
<script setup>
	import { showModal } from '~/assets/js/components/modal.js'
	import {onMounted} from 'vue'
	definePageMeta({
	  layout: "login",
	});
	onMounted(async ()=>{
		await navigateTo('/');
	})
</script>
<style lang="scss">
</style>