'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('../reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
	return (0, _redux.createStore)(_index2.default, window.__INITIAL_STATE__, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(configureStore, 'configureStore', 'src/client/store/index.js');
}();

;