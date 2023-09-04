
export default {
	namespaced: true,
	state: ()=>({
		collection: [],
		instant: [],
		basic: []
	}),
	mutations: {
		setCollectionLottery(state, newValue)
		{
			state.collection = newValue;
		},
		setInstantLottery(state, newValue)
		{
			state.instant = newValue;	
		},
		setBasicLottery(state, newValue)
		{
			state.basic = newValue;
		}
	},
	actions: {
		async fetchCollectionLottery({getters, commit})
		{
			let route = `${getters.apiUrl}/lotteries/?token=${localStorage.getItem('userToken')}&type=collection`;
			await fetch(route)
				.then(async (response)=>{
					let data = await response.json();
					commit('setCollectionLottery', data.lotteries);
				})
		},
		async fetchInstantLottery({getters, commit})
		{
			let route = `${getters.apiUrl}/lotteries/?token=${localStorage.getItem('userToken')}&type=instant`;
			await fetch(route)
				.then(async (response)=>{
					let data = await response.json();
					commit('setInstantLottery', data.lotteries);
				})
		},
		async fetchBasicLottery({getters, commit})
		{
			let route = `${getters.apiUrl}/lotteries/?token=${localStorage.getItem('userToken')}&type=basic`;
			await fetch(route)
				.then(async (response)=>{
					let data = await response.json();
					commit('setBasicLottery', data.lotteries);
				})
		}
	},
	getters: {
		apiUrl: () => (useRuntimeConfig().public.API_BASE_URL),
	}
};	