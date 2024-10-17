"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestockPizzaAction = exports.createOrderPizzaAction = void 0;
const constants_1 = require("./constants");
const createOrderPizzaAction = () => ({
    type: constants_1.PIZZA_ORDER
});
exports.createOrderPizzaAction = createOrderPizzaAction;
const createRestockPizzaAction = (quantity) => ({
    type: constants_1.PIZZA_RESTOCK,
    payload: quantity
});
exports.createRestockPizzaAction = createRestockPizzaAction;
