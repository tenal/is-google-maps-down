var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var works = false;
	http.get('http://maps.google.com/', function() {
		// Google Maps works -- this is the most likely (by far) scenario
		//works = true;
	}).on('error', function() {
		// Google Maps doesn't work!
		works = false;
	});
	res.render('index', { works: works });
});

module.exports = router;
