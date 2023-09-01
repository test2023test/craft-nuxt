import { createStore } from 'vuex'
import userModule from '~/store/user.js'
export const store = createStore({
	modules: {
		user: userModule
	}
})