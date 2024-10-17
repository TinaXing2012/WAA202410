"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const initialState = {
    loading: false,
    users: [],
    error: ''
};
const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case constants_1.FETCH_USERS_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case constants_1.FETCH_USERS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, users: payload });
        case constants_1.FETCH_USERS_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, users: [], error: payload });
        default:
            return state;
    }
};
exports.default = userReducer;
