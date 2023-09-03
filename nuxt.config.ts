// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
	head:{
		script:[
			{
				src: "/js/main.js",
			},
			{
				src: "/js/vendor.js",
				body:true
			},
			{
				src: `https://api-maps.yandex.ru/2.1/?apikey=${process.env.MAP_API_KEY}&lang=ru_RU`,
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
			API_BASE_URL: process.env.API_BASE_URL,
			MAP_API_KEY: process.env.MAP_API_KEY
		},
	}
})
