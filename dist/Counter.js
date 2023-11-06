"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: onIncrementAsync, children: "Increment after 1 second" }), " ", (0, jsx_runtime_1.jsx)("button", { onClick: onIncrement, children: "Increment" }), " ", (0, jsx_runtime_1.jsx)("button", { onClick: onDecrement, children: "Decrement" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: ["Clicked: ", value, " times"] })] }));
Counter.propTypes = {
    value: prop_types_1.default.number.isRequired,
    onIncrement: prop_types_1.default.func.isRequired,
    onDecrement: prop_types_1.default.func.isRequired,
    onIncrementAsync: prop_types_1.default.func.isRequired,
};
exports.default = Counter;
