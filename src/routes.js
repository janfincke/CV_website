'use strict';

const React = require('react');
const ReactRouter = require('react-router');

const Main = require('./components/main');
const Home = require('./components/home');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

const Routes = {
    get: function (config) {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute config={config} component={Home}/>
                </Route>
            </Router>
        );
    }
};

module.exports = Routes;