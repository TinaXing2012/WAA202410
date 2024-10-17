"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = require("immer");
const constants_1 = require("./constants");
const initialState = {
    name: 'John Smith',
    address: {
        street: '1000 N 4th St',
        city: 'Fairfield',
        state: 'IA'
    }
};
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants_1.UPDATE_STREET:
            return (0, immer_1.produce)(state, (draft) => {
                draft.address.street = payload;
            });
        default:
            return state;
    }
};
exports.default = userReducer;
