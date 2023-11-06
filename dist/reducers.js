"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operationTypes_1 = require("./operationTypes");
function counter(state = 0, action) {
    switch (action.type) {
        case operationTypes_1.operationTypes.INCREMENT:
            return state + 1;
        // case operationTypes.INCREMENT_IF_ODD:
        //   return state % 2 !== 0 ? state + 1 : state;
        case operationTypes_1.operationTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
exports.default = counter;
