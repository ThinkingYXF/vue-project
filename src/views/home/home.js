// import axios from 'axios';
import Vinterface from '../../vInterface/index'

var chatData = {
	msg: 'home item',
	users: [],
	items: [],
	value1: null
}
export default ({
	data(){
		return chatData;
	},
	//方法
	methods: {
		getRates: (item) => {
			console.log(item.rate);
		}
	},
	created: function(){
		var self = this;
		Vinterface.getHomeData((json)=>{
			self.items = json.data.data;
		});
		// Vinterface.getDemoData();
	},
	//计算属性
	computed: {

	},
	//监听
	watch: {

	}
})
