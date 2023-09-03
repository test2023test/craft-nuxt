var YaMap = {
	map: '',
	init( {setting} ){ 
		let mapSetting = ( setting )? setting : {
			center: [55.76, 37.64],
			zoom: 7,
			controls: [],
		}
		this.map = new ymaps.Map("map", mapSetting);
	},
	addPoint(coords)
	{
		let objects = ymaps.geoQuery([{
			type: 'Point',
			coordinates: coords
		}]);
		objects.searchInside(this.map).addToMap(this.map);
	}
}