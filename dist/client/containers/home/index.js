'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./home-page.scss');

var _callbackForm = require('./callback-form');

var _callbackForm2 = _interopRequireDefault(_callbackForm);

var _serviceBlocks = require('./service-blocks');

var _serviceBlocks2 = _interopRequireDefault(_serviceBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import videoWebm from '../../assets/video/video-background.webm'
// import videoMP4 from '../../assets/video/video-background.mp4'


// import AboutSection from './about-section'

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            firstName: "",
            phone: ""
        };
        return _this;
    }

    _createClass(Home, [{
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
                _react2.default.createElement(
                    'section',
                    { className: 'main-video' },
                    _react2.default.createElement(
                        'div',
                        { className: 'video-wrap' },
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Digital-\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E Flames'
                            ),
                            _react2.default.createElement(
                                'h2',
                                null,
                                '\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0435 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432.',
                                _react2.default.createElement('br', null),
                                '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'services__title' },
                                    '\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438:'
                                ),
                                _react2.default.createElement(_serviceBlocks2.default, { page: 'index' })
                            )
                        ),
                        _react2.default.createElement(_callbackForm2.default, null)
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Home, 'Home', 'src/client/containers/home/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/containers/home/index.js');
}();

;