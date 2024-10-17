"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.restock = exports.order = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    numOfPizza: 10
};
const pizzaSlice = (0, toolkit_1.createSlice)({
    name: 'pizza',
    initialState,
    reducers: {
        order(state) {
            state.numOfPizza = state.numOfPizza - 1;
        },
        restock(state, action) {
            state.numOfPizza += action.payload;
        }
    }
});
exports.default = pizzaSlice.reducer;
// export const pizzaAction = pizzaSlice.actions;
_a = pizzaSlice.actions, exports.order = _a.order, exports.restock = _a.restock;
