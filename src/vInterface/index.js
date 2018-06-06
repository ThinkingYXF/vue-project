var axios = require('axios');
let config = require('../../config/config.json');
var myInterface = function(){
	return {
		getHomeData: function(callback){
			axios.get('/src/json/home.json').then((json)=>{
				callback(json);
			}).catch((err)=>{
				if(err) throw err;
			})
		},
		getDemoData: function(){
			axios.get(config.server + '/data').then((json)=>{
				console.log(json.data.data);
			}).catch((err)=>{
				if(err) throw err;
			})
		}
	}
}
module.exports = myInterface();
