"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const initialState = {
    numOfPizza: 10
};
const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants_1.PIZZA_ORDER:
            return Object.assign(Object.assign({}, state), { numOfPizza: state.numOfPizza - 1 });
        default:
            return state;
    }
};
exports.default = pizzaReducer;
