// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
	head:{
		script:[
			{
				src: "/js/main.js",
				body:true
			},
			{
				src: "/js/vendor.js",
				body:true
			},
			{
				src: "https://api-maps.yandex.ru/2.1/?apikey=53f8fad6-a29a-4bf6-81e9-8d6aad62eed3&lang=en_US",
			},
			{
				src: "/js/YaMap.js",
				body:true
			},
		]
	},
  },
  	runtimeConfig: {
	  	public: {
			API_BASE_URL: process.env.API_BASE_URL
		},
	}
})
