'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../assets/styles/gray-section.scss');

var _index = require('../../components/inner-banner/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../components/order-form/index');

var _index4 = _interopRequireDefault(_index3);

var _Link = require('react-router-dom/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = document.title = this.props.route.title;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { type: 'small', title: '\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438', text: '\u041E \u043D\u0430\u0441, \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0431\u0437\u0430\u0446\u0430\u0445' }),
                _react2.default.createElement(
                    'div',
                    { className: 'gray-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content text' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445, \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0445 \u0438 \u043D\u0435\u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0448\u0435\u043D\u0438\u0439',
                            _react2.default.createElement('br', null),
                            ' \u0438 \u0441\u0430\u0439\u0442\u043E\u0432. \u0427\u0442\u043E \u0431\u044B \u0432\u044B \u043D\u0430\u043C \u043D\u0435 \u043F\u043E\u0440\u0443\u0447\u0438\u043B\u0438, \u043C\u044B \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u0443\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0441\u043E\u0431\u043E\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u043C\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0443,',
                            _react2.default.createElement('br', null),
                            ' \u0432\u044B\u0441\u043B\u0443\u0448\u0430\u0435\u043C \u0432\u0430\u0448\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0434\u0430\u0434\u0438\u043C \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u041E\u0434\u043D\u0430 \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043C\u044B \u0434\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0432\u044B\u0431\u0440\u0430\u0442\u044C',
                            _react2.default.createElement('br', null),
                            ' \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043D \u0436\u0435\u043B\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u0441\u0430\u0439\u0442\u0435, \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u044F \u0435\u0433\u043E',
                            _react2.default.createElement('br', null),
                            ' \u043F\u0430\u043A\u0435\u0442\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u043D\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0437\u0430 \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u041C\u044B \u043E\u0442\u043A\u0440\u044B\u043B\u0438\u0441\u044C \u0432 2018 \u0433\u043E\u0434\u0443, \u043D\u043E \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 digital-\u0443\u0441\u043B\u0443\u0433 \u043C\u044B \u0441 2014 \u0433\u043E\u0434\u0430. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u043E \u043C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F',
                            _react2.default.createElement('br', null),
                            ' \u0432 \u0433. \u0421\u0443\u0440\u0433\u0443\u0442\u0435 \u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0448\u0442\u0430\u0442\u043D\u044B\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u0448\u0430\u0433\u0430\u0442\u044C \u0432 \u043D\u043E\u0433\u0443 \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F',
                            _react2.default.createElement('br', null),
                            ' \u0432 ',
                            _react2.default.createElement(
                                _Link2.default,
                                { to: 'vacancy' },
                                '\u043F\u043E\u0438\u0441\u043A\u0435'
                            ),
                            ' \u043B\u044E\u0434\u0435\u0439, \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u0445 \u043D\u0430\u0448\u0438 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u044F.'
                        )
                    )
                ),
                _react2.default.createElement(_index4.default, { title: '\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C', text: '\u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B', parentPage: 'about' })
            );
        }
    }]);

    return About;
}(_react.Component);

var _default = About;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(About, 'About', 'src/client/containers/about/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/containers/about/index.js');
}();

;