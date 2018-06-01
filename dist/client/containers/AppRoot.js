'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = require('react-router-config');

var _index = require('../components/header/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../components/sidebar/index');

var _index4 = _interopRequireDefault(_index3);

var _reactRedux = require('react-redux');

var _sidebar = require('../actions/sidebar');

var _index5 = require('./footer/index');

var _index6 = _interopRequireDefault(_index5);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Link from 'react-router-dom/Link';


// import { AnimatedSwitch } from 'react-router-transition';

var AppRoot = function (_Component) {
    _inherits(AppRoot, _Component);

    function AppRoot() {
        _classCallCheck(this, AppRoot);

        return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
    }

    _createClass(AppRoot, [{
        key: 'render',
        value: function render() {
            var footer = void 0;
            if (this.props.location.pathname != "/") {
                footer = _react2.default.createElement(_index6.default, null);
            } else {
                footer = null;
            }
            // const currentKey = location.pathname.split('/')[1] || '/' ? location.pathname.split('/')[1] || '/' : new Date();
            var currentKey = new Date();
            var timeout = { enter: 500, exit: 500 };
            return _react2.default.createElement(
                'div',
                { id: 'container' },
                _react2.default.createElement(_index2.default, { toggleSidebar: this.props.toggleSidebar, sidebar: this.props.sidebar, hideSidebar: this.props.hideSidebar }),
                _react2.default.createElement(_index4.default, {
                    toggleSidebar: this.props.toggleSidebar,
                    opened: this.props.sidebar.opened,
                    hideSidebar: this.props.hideSidebar
                }),
                _react2.default.createElement(
                    'main',
                    { className: 'mdl-layout__content' },
                    _react2.default.createElement(
                        _reactTransitionGroup.TransitionGroup,
                        { component: 'main', className: 'page-main' },
                        _react2.default.createElement(
                            _reactTransitionGroup.CSSTransition,
                            { key: currentKey, timeout: timeout, classNames: 'fade' },
                            (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
                        )
                    )
                ),
                footer
            );
        }
    }]);

    return AppRoot;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        sidebar: state.mainReducer.sidebar
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        toggleSidebar: function toggleSidebar() {
            return dispatch((0, _sidebar.toggleSidebar)());
        },
        hideSidebar: function hideSidebar() {
            return dispatch((0, _sidebar.hideSidebar)());
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppRoot);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AppRoot, 'AppRoot', 'src/client/containers/AppRoot.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/client/containers/AppRoot.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/client/containers/AppRoot.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/containers/AppRoot.js');
}();

;