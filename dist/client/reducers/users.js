'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchUsers = exports.USERS_LOADED = undefined;
exports.default = reducer;

require('isomorphic-fetch');

var USERS_LOADED = exports.USERS_LOADED = '@ssr/users/loaded';

var initialState = {
    items: []
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case USERS_LOADED:
            return Object.assign({}, state, { items: action.items });

        default:
            return state;
    }
}

var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function (dispatch) {
        return fetch('//jsonplaceholder.typicode.com/users').then(function (res) {
            return res.json();
        }).then(function (users) {
            dispatch({
                type: USERS_LOADED,
                items: users
            });
        });
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(USERS_LOADED, 'USERS_LOADED', 'src/client/reducers/users.js');

    __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/client/reducers/users.js');

    __REACT_HOT_LOADER__.register(reducer, 'reducer', 'src/client/reducers/users.js');

    __REACT_HOT_LOADER__.register(fetchUsers, 'fetchUsers', 'src/client/reducers/users.js');
}();

;