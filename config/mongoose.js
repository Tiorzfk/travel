var mongoose = require('mongoose');

module.exports = function() {
	// mongoose.connect('mongodb://localhost:27017/tirez');
	mongoose.connect('mongodb://tioreza123:bismilah123@ds062339.mlab.com:62339/tirez');
	var db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'));
	db.on('open',function(){
		console.log('connected to mongo');
	});

	require('../models/invoice');
	return db;
};
