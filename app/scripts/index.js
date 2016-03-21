var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./components/index.jsx').AppComponent;

ReactDOM.render(
  React.createElement(MenuPageComponent, {collection: menuCollection}),
  document.getElementById('container')
);
