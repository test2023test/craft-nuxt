
export default {
	namespaced: true,
	state () {
		return {
			isLogin: false,
			login: {
				step: 1,
			},
			data:{}
		}
	},
	mutations: {
		exit(state) {
			state.isLogin = false;
		},
		setLoginStep({login},newValue)
		{
			login.step = newValue
		},
		setUserData(state, newData)
		{
			state.data = newData;
		},
		setIsLogin(state, newValue)
		{
			state.isLogin = newValue;
		},
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
				commit('setLoginStep', 2)
		},
		async checkCode({commit, getters}, {phone, code}) 
		{
			let response = await fetch('https://promo-orenbeer.dreamdev.space/check-phone-code/', 
				{
					method:"POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(
						{
							"phone": getters.getPhoneNumberInCorrectForm(phone),
							"code": code}
					)
				})
			
			let fetchAnswer = await response.json();

			localStorage.setItem("userToken", fetchAnswer.token)
			if(fetchAnswer.success)
				commit('setLoginStep', 3)
		},
		async loginInToSystem({getters, commit})
		{
			fetch(getters.apiUrl + '/user/?token=' + localStorage.getItem('userToken'))
			.then(async (response)=>
			{
				let userData = await response.json();
				if(userData.success)
				{
					commit('setUserData', userData.user)
					commit('setIsLogin', true)
					return true;
				}
			})
		},
		logOutOfTheSystem({commit})
		{
			commit('exit');
			localStorage.removeItem('userToken');
		}
	},
	getters:
	{
		getPhoneNumberInCorrectForm:()=> (phoneNumber) => {
			return phoneNumber.replace(/[^+\d]/g, '').replace('+', '');
		},
		apiUrl: () => useRuntimeConfig().public.API_BASE_URL
	}
};	