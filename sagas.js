import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
