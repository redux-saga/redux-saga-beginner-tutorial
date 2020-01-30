import { put, takeEvery, call } from "redux-saga/effects";

import {
  incrementAsync,
  increment,
  decrement
} from "../actions/increment_async";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsyncSaga({ payload }) {
  // yield delay(1000);
  yield call(delay, 1000);
  yield put(incrementAsync(payload));
}

export function* incrementSaga() {
  yield put(increment());
}

export function* decrementSaga() {
  yield put(decrement());
}

export default function* watchIncrementAsyncSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsyncSaga);
}
