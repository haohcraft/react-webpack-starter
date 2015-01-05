/*========================================
=            Header Component            =
========================================*/
"use strict";
var React = require('react');
require('styles/header.less');


var Header = React.createClass({

	render: function() {
		return (
			<div className='Header'>
		        <div className="container">
		        	<div className="logo"></div>
					<h1 className="demo-section-title">
							{this.props.title}
					</h1>
		        </div>
		    </div>
		);
	}

});

module.exports = Header;


/*-----  End of Header Component  ------*/

