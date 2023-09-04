import { createStore } from 'vuex'
import userModule from '~/store/user.js'
import modalModule from '~/store/modal.js'
import lotteryModule from '~/store/lottery.js'
export const store = createStore({
	modules: {
		user: userModule,
		modal: modalModule,
		lottery: lotteryModule
	}
})