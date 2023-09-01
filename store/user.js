export default {
	namespaced: true,
	state () {
		return {
			isLogin: false,
			login:
			{
				isLogin: false,
				step: 1,
			},
			data:{
				firstName: "Светлана",
				lastName: "Голубева",
				sex: "women",
				dateOfBirth: "1986-03-18",
				isConfirmedPhone: true,
				email: "msd@gmail.com",
				isConfirmedEmail: false,
				gotEmailBonus: false
			}
		}
	},
	mutations: {
		exit(state) {
			state.isLogin = false;
		},
		setLoginStep({login},newValue)
		{
			login.step = newValue
		}
	},
	actions: {
		async sendPhoneNumber({getters, commit}, phoneNumber)
		{
			const correctPhoneNumber = getters.getPhoneNumberInCorrectForm(phoneNumber);
			let fetchAnswer = await fetch('https://promo-orenbeer.dreamdev.space/send-phone-code/',
				{
					method:'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({phone: correctPhoneNumber})
				})
			if(fetchAnswer.success)
				commit('setLoginStep', 2)
		},
		async checkCode({commit, getters}, {phone, code}) 
		{
			let fetchAnswer = await fetch('https://promo-orenbeer.dreamdev.space/check-phone-code/', 
				{
					method:"POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({"phone": phone, "code": code})
				})
			localStorage.setItem("craftToken", fetchAnswer.token)
			if(fetchAnswer.success)
				commit('setLoginStep', 3)
		}
	},
	getters:
	{
		getPhoneNumberInCorrectForm:()=> (phoneNumber) => {
			return phoneNumber.replace(/[^+\d]/g, '').replace('+', '');
		}
	}
};	