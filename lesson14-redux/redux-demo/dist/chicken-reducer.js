"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const initialState = {
    numOfChicken: 20
};
const chickenReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants_1.CHICKEN_ORDER:
            return Object.assign(Object.assign({}, state), { numOfChicken: state.numOfChicken - 1 });
        case constants_1.CHICKEN_RESTOCK:
            return Object.assign(Object.assign({}, state), { numOfChicken: state.numOfChicken + action.payload });
        case constants_1.PIZZA_ORDER:
            return Object.assign(Object.assign({}, state), { numOfChicken: state.numOfChicken - 1 });
        default:
            return state;
    }
};
exports.default = chickenReducer;
