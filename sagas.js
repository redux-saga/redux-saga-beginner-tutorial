import { put, takeEvery, all, call } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Sagas!");
}

// delay function returns a promise that resolves after a set amount of time
// blocks the generator
// export for tests
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Worker saga that performs the async increment task
// yielded objects are kinda like "instructions" to middleware
// incrementAsync is a GENERATOR FUNCTION
export function* incrementAsync() {
  // yield promise to middleware -> middleware will suspend the Saga until the promise completes
  // yield delay(1000);
  // using call instead of calling delay directly
  yield call(delay, 1000);
  // after the promise is resolved above, this next statement is then executed
  // `put` is an EFFECT that is retrieved by the middleware
  // the INCREMENT action is dispatched
  yield put({ type: "INCREMENT" });
}

//Watcher saga that will spawn a new incrementAsync task on each INCREMENT_ASYNC action
// takeEvery is a helper function that listens for dispatched INCREMENT_ASYNC actions and then runs incrementAsync each time
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// rootSaga responsible for starting other sagas in parallel (at the same)
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
