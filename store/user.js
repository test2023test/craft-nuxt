
export default {
	namespaced: true,
	state () {
		return {
			isLogin: false,
			login: {
				step: 1,
			},
			data:{},
			stikerList: []
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
		setStikers(state, newStikerList)
		{
			state.stikerList = newStikerList
		}
	},
	actions: {
		async sendPhoneNumber({getters, commit}, phoneNumber)
		{
			const correctPhoneNumber = getters.getPhoneNumberInCorrectForm(phoneNumber);
			
			let fetchAnswer = await fetch(getters.apiUrl + '/send-phone-code/',
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
			let response = await fetch(getters.apiUrl + '/check-phone-code/', 
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
					localStorage.setItem('userDate', JSON.stringify(userData.user))
					return true;
				}
			})
		},
		logOutOfTheSystem({commit})
		{
			commit('exit');
			localStorage.removeItem('userToken');
			localStorage.removeItem('userDate');
		},
		async updateUserData({commit, getters}, dataToSend)
		{
			await fetch(getters.apiUrl + '/user/?token=' + localStorage.getItem('userToken'), {
				method:"POST",
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify(dataToSend)
			})	
		},
		getStiker({commit, getters})
		{
			fetch(getters.apiUrl + '/stickers/?token=' + localStorage.getItem('userToken'))
				.then(async (response)=>{
					let resultData = await response.json();
					if(resultData.success)
						commit('setStikers', resultData.stickers);
				})
		},
	},
	getters:
	{
		getPhoneNumberInCorrectForm:()=> (phoneNumber) => {
			return phoneNumber.replace(/[^+\d]/g, '').replace('+', '');
		},
		apiUrl: () => (useRuntimeConfig().public.API_BASE_URL),
		instantStikers(state)
		{
			return state.stikerList.filter((item, index) => index > 11)
		},
		stikers(state)
		{
			return state.stikerList.filter((item, index) => index <= 11).reduce(
				(result, item, index)=>{
					console.log(Math.floor(index / 4));
					result[Math.floor(index / 4)].push(item);
					return result;
				}, [[],[],[]])
		}
	}
};	