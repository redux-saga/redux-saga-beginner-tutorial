import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// worker
export function* incrementAsync() {
    yield delay(2000)
    yield put({ type: 'INCREMENT' })
  }

// watcher
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }