import { takeEvery, put, all, call } from "redux-saga/effects";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hello World!");
}

//WORKER SAGA: will perform the async increment task:
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

//WATCHER SAGA: spawns a new incrementAsync task on each INCREMENT_ASYNC:
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
