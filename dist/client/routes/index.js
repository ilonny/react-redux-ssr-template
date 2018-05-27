'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppRoot = require('../containers/AppRoot');

var _AppRoot2 = _interopRequireDefault(_AppRoot);

var _index = require('../containers/home/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../containers/service/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../containers/sites/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../containers/marketing/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../containers/mobile/index');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../containers/smm/index');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('../containers/about/index');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('../containers/collab/index');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('../containers/vacancy/index');

var _index18 = _interopRequireDefault(_index17);

var _index19 = require('../containers/contacts/index');

var _index20 = _interopRequireDefault(_index19);

var _index21 = require('../containers/notfound/index');

var _index22 = _interopRequireDefault(_index21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import About from '../containers/about/index';

var routes = [{
    component: _AppRoot2.default,
    routes: [{
        path: '/',
        exact: true,
        component: _index2.default,
        title: 'Flames Digital Agency | Разработка и продвижение сайтов в Сургуте'
    }, {
        path: '/service',
        component: _index4.default,
        title: 'Услуги | Flames Digital Agency'
    }, {
        path: '/razrabotka-saitov',
        component: _index6.default,
        title: 'Услуги - Разработка адаптивных сайтов | Flames Digital Agency'
    }, {
        path: '/marketing',
        component: _index8.default,
        title: 'Услуги - Продвижение и реклама в интернете | Flames Digital Agency'
    }, {
        path: '/mobile-apps',
        component: _index10.default,
        title: 'Услуги - Создание мобильных приложений | Flames Digital Agency'
    }, {
        path: '/smm',
        component: _index12.default,
        title: 'Услуги - Продвижение в соц сетях | Flames Digital Agency'
    }, {
        path: '/about',
        component: _index14.default,
        title: 'Flames Digital Agency | О компании'
    }, {
        path: '/collab',
        component: _index16.default,
        title: 'Flames Digital Agency | Сотрудничество'
    }, {
        path: '/vacancy',
        component: _index18.default,
        title: 'Flames Digital Agency | Вакансии'
    }, {
        path: '/contacts',
        component: _index20.default,
        title: 'Flames Digital Agency | Контакты'
    }, {
        path: '*',
        component: _index22.default,
        title: 'Flames Digital Agency | Page not found'
    }]
}, {
    component: _index22.default
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