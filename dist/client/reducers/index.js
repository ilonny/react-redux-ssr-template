'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
	mainReducer: _main2.default,
	usersReducer: _users2.default
	//some reducers here....
});

var _default = appReducer;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(appReducer, 'appReducer', 'src/client/reducers/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/client/reducers/index.js');
}();

;