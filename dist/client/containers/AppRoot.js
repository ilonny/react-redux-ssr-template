'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router-dom/Link');

var _Link2 = _interopRequireDefault(_Link);

var _reactRouterConfig = require('react-router-config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoot = function (_Component) {
    _inherits(AppRoot, _Component);

    function AppRoot() {
        _classCallCheck(this, AppRoot);

        return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
    }

    _createClass(AppRoot, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },
                _react2.default.createElement(
                    'header',
                    { className: 'mdl-layout__header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-layout__header-row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-layout-title' },
                            'React Universal App (SSR + SW)'
                        ),
                        _react2.default.createElement('div', { className: 'mdl-layout-spacer' }),
                        _react2.default.createElement(
                            'nav',
                            { className: 'mdl-navigation' },
                            _react2.default.createElement(
                                _Link2.default,
                                { className: 'mdl-navigation__link', to: '/home' },
                                ' Home '
                            ),
                            _react2.default.createElement(
                                _Link2.default,
                                { className: 'mdl-navigation__link', to: '/about' },
                                ' About '
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'main',
                    { className: 'mdl-layout__content' },
                    (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
                )
            );
        }
    }]);

    return AppRoot;
}(_react.Component);

var _default = AppRoot;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AppRoot, 'AppRoot', 'src/client/containers/AppRoot.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/containers/AppRoot.js');
}();

;