'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

require('./assets/material-design-iconic-font/css/material-design-iconic-font.min.scss');

require('./assets/styles/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { AppContainer } from 'react-hot-loader'

// const renderApp = (Component) => {
//     render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         document.querySelector('#mount_place')
//     )
// }


// renderApp(App)


// if (module.hot) {
//     module.hot.accept('./containers/App', () => { renderApp(App) })
// }


(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.querySelector('#mount_place'));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;