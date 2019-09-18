import { put, delay, takeLatest, cancelled } from 'redux-saga/effects'

export function* incrementAsync() {
  try {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  } finally {
    if (yield cancelled()) {
      console.log("I'm cancelled.")
    }
  }
}

export function* watchIncrementAsync() {
  console.log("watch increment async")
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

