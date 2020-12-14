import test from 'tape'
import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from "./sagas";

test('incrementAsync Saga test', assert => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000)
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' })
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined }
  )

  assert.end()
})
