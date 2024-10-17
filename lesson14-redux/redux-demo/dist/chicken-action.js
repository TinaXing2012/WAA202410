"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestockChickenAction = exports.createOrderChickenAction = void 0;
const constants_1 = require("./constants");
const createOrderChickenAction = () => ({
    type: constants_1.CHICKEN_ORDER
});
exports.createOrderChickenAction = createOrderChickenAction;
const createRestockChickenAction = (quantity) => ({
    type: constants_1.CHICKEN_RESTOCK,
    payload: quantity
});
exports.createRestockChickenAction = createRestockChickenAction;
