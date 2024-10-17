"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./app/store"));
const userSlice_1 = require("./features/user/userSlice");
// console.log('initial state: ', store.getState());
const unsubscribe = store_1.default.subscribe(() => {
    // console.log('updated state: ', store.getState());
});
store_1.default.dispatch((0, userSlice_1.fetchUsers)());
// store.dispatch(pizzaAction.order());
// store.dispatch(pizzaAction.restock(5));
// store.dispatch(pizzaAction.order());
//
// store.dispatch(chickenAction.order());
// store.dispatch(chickenAction.restock(8));
// unsubscribe();
