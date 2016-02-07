var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom');
var IndexRoute = require('react-router').IndexRoute;
var Redirect = require('react-router').Redirect;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={APP}>
      <IndexRoute component={Audience} />
      <Route path="speaker" component={Speaker} />
      <Route path="board" component={Board} />
    </Route>
  </Router>
);


ReactDOM.render(routes, document.getElementById('react-container'));
