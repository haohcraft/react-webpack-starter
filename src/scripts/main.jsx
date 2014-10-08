
/**
 * @jsx React.DOM
 */

// Bring in jQuery and React as a Bower component in the global namespace
require('script!react/dist/react-with-addons.js');
require('bootstrap/less/bootstrap.less');
require('flat-ui/less/flat-ui.less');
require('zepto/zepto.min.js');
require('styles/main.less');

var Main = require('./components/Main.jsx');

React.renderComponent(
	<Main />, 
	document.getElementById('app')
);

