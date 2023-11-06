"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementAsync = exports.delay = void 0;
const effects_1 = require("redux-saga/effects");
function* helloSaga() {
    console.log("Hello Sagas!");
}
// delay function returns a promise that resolves after a set amount of time
// blocks the generator
// export for tests
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
exports.delay = delay;
// Worker saga that performs the async increment task
// yielded objects are kinda like "instructions" to middleware
// incrementAsync is a GENERATOR FUNCTION
function* incrementAsync() {
    // yield promise to middleware -> middleware will suspend the Saga until the promise completes
    // yield delay(1000);
    // using call instead of calling delay directly
    yield (0, effects_1.call)(exports.delay, 1000);
    // after the promise is resolved above, this next statement is then executed
    // `put` is an EFFECT that is retrieved by the middleware
    // the INCREMENT action is dispatched
    yield (0, effects_1.put)({ type: "INCREMENT" });
}
exports.incrementAsync = incrementAsync;
//Watcher saga that will spawn a new incrementAsync task on each INCREMENT_ASYNC action
// takeEvery is a helper function that listens for dispatched INCREMENT_ASYNC actions and then runs incrementAsync each time
function* watchIncrementAsync() {
    yield (0, effects_1.takeEvery)("INCREMENT_ASYNC", incrementAsync);
}
// rootSaga responsible for starting other sagas in parallel (at the same)
function* rootSaga() {
    yield (0, effects_1.all)([helloSaga(), watchIncrementAsync()]);
}
exports.default = rootSaga;
