
/**
 * @jsx React.DOM
 */

// Bring in jQuery and React as a Bower component in the global namespace
var React = require('react');
require('styles/main.less');

var Main = require('./components/Main.jsx');

React.renderComponent(
	<Main />, 
	document.getElementById('app')
);

