"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const rootReducer_1 = __importDefault(require("./rootReducer"));
const redux_logger_1 = __importDefault(require("redux-logger"));
const store = (0, toolkit_1.configureStore)({
    reducer: rootReducer_1.default,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(redux_logger_1.default)
});
exports.default = store;
