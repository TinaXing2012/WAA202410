"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./store"));
const pizza_action_1 = require("./pizza-action");
console.log('initial state:', store_1.default.getState());
const unsubscribe = store_1.default.subscribe(() => {
    console.log('updated state: ', store_1.default.getState());
});
store_1.default.dispatch((0, pizza_action_1.createOrderPizzaAction)());
// store.dispatch(createOrderPizzaAction());
// store.dispatch(createRestockPizzaAction(6));
// store.dispatch(createOrderChickenAction());
// store.dispatch(createRestockChickenAction(9));
unsubscribe();
