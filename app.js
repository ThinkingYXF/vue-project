let http = require('http'),
	express = require('express'),
	app = express();

app.use('/', express.static(__dirname));

//设置跨域
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});


let nInterface = require('./server/nInterface/index');
nInterface.handler(app);

let server = http.createServer(app);
server.listen(8091);
