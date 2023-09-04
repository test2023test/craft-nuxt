export default {
	namespaced: true,
	state: {
		stikerData: {},
		getDataFunc: null
	},
	mutations: {
		setStickerData(state, newData)
		{
			state.stikerData = newData;
		},
		setDataFunc(state, newCallback)
		{
			state.getDataFunc = newCallback;
		}
	},
};	