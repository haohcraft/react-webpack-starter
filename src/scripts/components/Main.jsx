/**
 * @jsx React.DOM
 */

var Header = require("./Header.jsx");
var Footer = require("./Footer.jsx");

var Main = React.createClass({

  render: function() {
    return (
      <div className="Main">
        <Header title="React-webpack-starter" />

        <Footer />
      </div>
    );
  }

});

module.exports = Main;