
export default {
	namespaced: true,
	state () {
		return {
			isLogin: false,
			login: {
				step: 1,
			},
			data:{},
			stikerList: [],
			activeCodeList: []
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
		},
		setActiveCodeList(state, newValue)
		{
			state.activeCodeList = newValue;
		}
	},
	actions: {
		async fetchPhone({getters, commit}, phoneNumber)
		{
			const correctPhoneNumber = getters.getPhoneNumberInCorrectForm(phoneNumber);
			return await fetch(getters.apiUrl + '/send-phone-code/',
				{
					method:'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({phone: correctPhoneNumber})
				})
		},
		async fetchUserCode({getters}, {phone, code})
		{
			return await fetch(getters.apiUrl + '/check-phone-code/', 
			{
				method:"POST",
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(
					{
						"phone": getters.getPhoneNumberInCorrectForm(phone),
						"code": code
					}
				)
			})
		},
		async sendPhoneNumber({getters, commit, dispatch}, phoneNumber)
		{
			
			let fetchAnswer = await dispatch('fetchPhone', phoneNumber);
			commit('setLoginStep', 2)
		},
		async checkCode({commit, getters, dispatch}, fetchData) 
		{
			let response = await dispatch('fetchUserCode', fetchData)
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
			.then(async (response)=>{
				let data = await response.json();
				
				commit('setUserData', data.user)
			})	
		},
		async getSticker({commit, getters})
		{
			await fetch(getters.apiUrl + '/stickers/?token=' + localStorage.getItem('userToken'))
				.then(async (response)=>{
					let resultData = await response.json();
					if(resultData.success)
						commit('setStikers', resultData.stickers);
				})
		},
		async fetchActiveCodeList({commit, getters}, {page, countOnPage })
		{
			let route = getters.apiUrl + '/codes/' + '?token=' + localStorage.getItem('userToken') + `&page=${page}&per_page=${countOnPage}`;
			await fetch(route).then(async (response)=>{
					let data = await response.json()
					commit('setActiveCodeList', data.userCodes)
				})
		}
	},
	getters:
	{
		getPhoneNumberInCorrectForm:()=> (phoneNumber) => {
			return phoneNumber.replace(/[^+\d]/g, '').replace('+', '');
		},
		apiUrl: () => (useRuntimeConfig().public.API_BASE_URL),
		instantStickers(state)
		{
			return state.stikerList.filter((item, index) => index > 11)
		},
		stickers(state)
		{
			return state.stikerList.filter((item, index) => index <= 11).reduce(
				(result, item, index)=>{
					result[Math.floor(index / 4)].push(item);
					return result;
				}, [[],[],[]])
		}
	}
};	