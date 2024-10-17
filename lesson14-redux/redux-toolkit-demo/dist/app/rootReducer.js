"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const pizzaSlice_1 = __importDefault(require("../features/pizza/pizzaSlice"));
const chickenSlice_1 = __importDefault(require("../features/chicken/chickenSlice"));
const userSlice_1 = __importDefault(require("../features/user/userSlice"));
const rootReducer = (0, toolkit_1.combineReducers)({
    pizza: pizzaSlice_1.default,
    chicken: chickenSlice_1.default,
    user: userSlice_1.default
});
exports.default = rootReducer;
