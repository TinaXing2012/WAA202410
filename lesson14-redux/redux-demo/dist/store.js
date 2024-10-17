"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const pizza_reducer_1 = __importDefault(require("./pizza-reducer"));
const chicken_reducer_1 = __importDefault(require("./chicken-reducer"));
const combinedReducers = (0, redux_1.combineReducers)({
    pizza: pizza_reducer_1.default,
    chicken: chicken_reducer_1.default
});
const store = (0, redux_1.createStore)(combinedReducers);
exports.default = store;
/**
 *
 * {
 *     numOfPizza: 10
 * }
 *
 * {
 *     pizza: {numOfPizza: 10},
 *     chicken: {numOfChicken: 20}
 * }
 *
 */ 
