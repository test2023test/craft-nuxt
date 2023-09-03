export default {
	namespaced: true,
	state () {
		stikerData: {}
	},
	mutations: {
		setStikerData(state, newData)
		{
			state.stikerData = newData;
		}
	},
};	