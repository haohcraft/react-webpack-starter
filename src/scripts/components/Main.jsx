/*==========================================
=            Component for Main            =
==========================================*/

"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require("./Header.jsx");
var Footer = require("./Footer.jsx");

var Main = React.createClass({

  render: function() {
    return (
      <div className="Main">
        <Header/>
        <RouteHandler/>
        <Footer />
      </div>
    );
  }

});

module.exports = Main;
/*-----  End of Component for Main  ------*/

