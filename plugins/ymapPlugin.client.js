import YmapPlugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
	apiKey: process.env.MAP_API_KEY,
	lang: 'ru_RU',
	coordorder: 'latlong',
}
export default defineNuxtPlugin(nuxtApp => {

	nuxtApp.vueApp.use(YmapPlugin, settings);
})