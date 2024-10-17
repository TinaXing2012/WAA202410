"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.restock = exports.order = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const pizzaAction = __importStar(require("../pizza/pizzaSlice"));
const initialState = {
    numOfChicken: 20
};
const chickenSlice = (0, toolkit_1.createSlice)({
    name: 'chicken',
    initialState,
    reducers: {
        order(state) {
            state.numOfChicken--;
        },
        restock(state, action) {
            state.numOfChicken += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(pizzaAction.order, (state) => {
            state.numOfChicken--;
        });
    }
});
exports.default = chickenSlice.reducer;
_a = chickenSlice.actions, exports.order = _a.order, exports.restock = _a.restock;
