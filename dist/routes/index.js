'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _StaticRouter = require('react-router-dom/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _reactRouterConfig = require('react-router-config');

var _redux = require('redux');

var _routes = require('../client/routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('../client/store');

var _store2 = _interopRequireDefault(_store);

var _index = require('../client/reducers/index');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
var router = _express2.default.Router();

router.get('*', function (req, res) {
    var context = {};
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _StaticRouter2.default,
            { location: req.url, context: context },
            (0, _reactRouterConfig.renderRoutes)(_routes2.default)
        )
    ));
    var m_routes = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
    var route_title = void 0;
    m_routes.forEach(function (element) {
        if (element.route.title) {
            route_title = element.route.title;
        }
    });
    res.render('index', { title: route_title, data: false, content: content });
});

module.exports = router;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(store, 'store', 'src/routes/index.js');

    __REACT_HOT_LOADER__.register(router, 'router', 'src/routes/index.js');
}();

;