import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
import Vinterface from '../../vInterface/index'
Vue.use(BaiduMap, {
	// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
	ak: 'LOP8QqZjpt6fc9GmvXNM9HG1AHMKQOd3'
})
var data = {
	center: {lng: 0, lat: 0},
	zoom: 3,
	dialogVisible: false,
	province: [],
	cities: [],
	areas: [],
	value: '',
	value1: '',
	value2: ''
}

export default ({
	data(){
		return data;
	},
	methods: {
		handler: function(){
			this.center.lng = 116.404;
			this.center.lat = 39.915;
			this.zoom = 12;
		},
		changeProvince: function(value){
			let self = this;
			this.areas = [];
			this.cities = [];
			this.province.forEach(element => {
				if(element.name == value){
					self.cities = element.city;
				}
			});
		},
		changeCity: function(value){
			let self = this;
			this.areas = [];
			this.cities.forEach(element => {
				if(element.name == value){
					self.areas = element.area;
				}
			});
		}
	},
	created: function(){
		var self = this;
		Vinterface.getChinaData((json)=>{
			this.province = json.data.data;
		});
	}
})
