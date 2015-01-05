/*==============================================
=            Main Enter for the app            =
==============================================*/
"use strict";

// Bring in jQuery and React as a Bower component in the global namespace
require('flat-ui/dist/css/flat-ui.css');
require('styles/main.less');

var React = require('react');
// Using react-route
var Router = require('react-router');
var Route = Router.Route
	, DefaultRoute = Router.DefaultRoute
	, RouteHandler = Router.RouteHandler
	, HistoryLocation = Router.HistoryLocation;


var routes = (
	<Route handler={require('./components/Main.jsx')} path="/">

		<DefaultRoute name="home" handler={require('./components/Home.jsx')} />
	</Route>
);

Router.run(routes, HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});


// Attached React to the window, for debug purpose
window.React = React;


/*-----  End of Main Enter for the app  ------*/

