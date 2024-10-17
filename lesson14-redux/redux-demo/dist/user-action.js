"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateStreetAction = void 0;
const constants_1 = require("./constants");
const createUpdateStreetAction = (street) => ({
    type: constants_1.UPDATE_STREET,
    payload: street
});
exports.createUpdateStreetAction = createUpdateStreetAction;
