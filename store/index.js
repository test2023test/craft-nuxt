import { createStore } from 'vuex'
import userModule from '~/store/user.js'
import modalModule from '~/store/modal.js'
export const store = createStore({
	modules: {
		user: userModule,
		modal: modalModule
	}
})