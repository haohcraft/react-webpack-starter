/*=======================================
=            Home Component            =
=======================================*/
"use strict";

var React = require('react');

/*==========  LESS  ==========*/
require('styles/home.less');


var Home = React.createClass({

	render: function() {
		return <div className="home">
			This is a home page
		</div>;
	}

});

module.exports = Home;

/*-----  End of Home Component  ------*/

