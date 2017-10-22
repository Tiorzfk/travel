var jwt = require('jsonwebtoken');
module.exports.cektoken=function(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (req.path==='/api/1.1/passanger/register') {
        next();
    }else{
    	// decode token
    	if (token) {

      	// verifies secret and checks exp
      	jwt.verify(token, 'AsyI8Ngw3OpzZ', function(err, decoded) {
      	  if (err) {
      	    return res.json({ status: 503, message: 'Failed to authenticate token.',result:[] });
      	  } else {
      	    // if everything is good, save to request for use in other routes
      	    req.decoded = decoded;
      	    next();
      	  }
      	});

    	} else {

      	// if there is no token
      	// return an error
      	return res.status(403).send({
      	    status : 403,
      	    message: 'No token provided.',
      		result:[]
      	});

    	}
   }
}
