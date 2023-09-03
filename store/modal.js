export default {
	namespaced: true,
	state () {
		stikerData: {}
	},
	mutations: {
		setStickerData(state, newData)
		{
			state.stikerData = newData;
		}
	},
};	