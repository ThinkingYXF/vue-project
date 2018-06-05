exports.handler = function(app){
	app.get('/data', function(req, res){
		res.status(200);
		res.json({
			success: true,
			data: 'hello world'
		})
	})
}
