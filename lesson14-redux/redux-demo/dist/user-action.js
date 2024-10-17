"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFetchUserAsyncAction = exports.createFetchUserFailureAction = exports.createFetchUserSuccessAction = exports.createFetchUserRequestAction = void 0;
const constants_1 = require("./constants");
const axios_1 = __importDefault(require("axios"));
const createFetchUserRequestAction = () => ({
    type: constants_1.FETCH_USERS_REQUEST
});
exports.createFetchUserRequestAction = createFetchUserRequestAction;
const createFetchUserSuccessAction = (users) => ({
    type: constants_1.FETCH_USERS_SUCCESS,
    payload: users
});
exports.createFetchUserSuccessAction = createFetchUserSuccessAction;
const createFetchUserFailureAction = (error) => ({
    type: constants_1.FETCH_USERS_FAILURE,
    payload: error
});
exports.createFetchUserFailureAction = createFetchUserFailureAction;
const createFetchUserAsyncAction = () => (dispatch) => {
    dispatch((0, exports.createFetchUserRequestAction)());
    axios_1.default.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        const users = response.data.map((u) => ({ id: u.id, name: u.name }));
        dispatch((0, exports.createFetchUserSuccessAction)(users));
    })
        .catch(error => {
        dispatch((0, exports.createFetchUserFailureAction)(error.message));
    });
};
exports.createFetchUserAsyncAction = createFetchUserAsyncAction;
