
export default {
	namespaced: true,
	state: ()=>({
		collection: [],
		instant: []
	}),
	mutations: {
		setCollectionLottery(state, newValue)
		{
			state.collection = newValue;
		},
		setInstantLottery(state, newValue)
		{
			state.instant = newValue;	
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
		}
	},
	getters: {
		apiUrl: () => (useRuntimeConfig().public.API_BASE_URL),
	}
};	