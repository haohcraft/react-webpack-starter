/**
 * Routes
 */

"use strict";

module.exports = Routes;

function Routes (app) {
	
	app.get('/*', function(req, res, next) {
	    if (req.headers.host.match(/^www\./) != null) {
	      res.redirect("http://" + req.headers.host.slice(4) + req.url, 301);
	    } else {
	      next();
	    }
	});

	app.get('/', function(req, res, next) {
		res.render("pages/home");
	});

	// Note: the "/*" is necessary here for 'react-route' 
	app.get('/*', function(req, res, next) {
		res.render("pages/home");
	});

}