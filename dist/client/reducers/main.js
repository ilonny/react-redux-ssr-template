'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	test: 123
};

var mainReducer = function mainReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _constants2.default.TEST_ACTION:
			console.log('TEST_ACTION dispatched');
			return _extends({}, state, { test: true });
		default:
			return state;
	}
};

var _default = mainReducer;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/client/reducers/main.js');

	__REACT_HOT_LOADER__.register(mainReducer, 'mainReducer', 'src/client/reducers/main.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/client/reducers/main.js');
}();

;