'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppRoot = require('../containers/AppRoot');

var _AppRoot2 = _interopRequireDefault(_AppRoot);

var _index = require('../containers/home/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../containers/about/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    component: _AppRoot2.default,
    routes: [{
        path: '/',
        exact: true,
        component: _index2.default,
        title: 'Home page title'
    }, {
        path: '/home',
        component: _index2.default,
        title: 'Home page title'
    }, {
        path: '/about',
        component: _index4.default,
        title: 'About page title'
    }]
}];

var _default = routes;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(routes, 'routes', 'src/client/routes/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/routes/index.js');
}();

;