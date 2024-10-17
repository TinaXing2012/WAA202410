"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderPizzaAction = void 0;
const constants_1 = require("./constants");
const createOrderPizzaAction = () => ({
    type: constants_1.PIZZA_ORDER
});
exports.createOrderPizzaAction = createOrderPizzaAction;
