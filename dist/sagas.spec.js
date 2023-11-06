"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const effects_1 = require("redux-saga/effects");
const sagas_1 = require("./sagas");
(0, tape_1.default)("incrementAsync Saga test", (assert) => {
    const gen = (0, sagas_1.incrementAsync)();
    assert.deepEqual(gen.next().value, (0, effects_1.call)(sagas_1.delay, 1000), "incrementAsync saga must call delay(1000)");
    assert.deepEqual(gen.next().value, (0, effects_1.put)({ type: "INCREMENT" }), "incrementAsync Saga must dispatch an INCREMENT action");
    assert.deepEqual(gen.next(), { done: true, value: undefined }, "incrementAsync Saga must be done");
    assert.end();
});
