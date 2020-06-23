import test from "tape";

import { put, call } from "redux-saga/effects";

import { incrementAsync, delay } from "./sagas";

test("incrementAsync Saga test", assert => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync Saga must call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "incrementAsync Saga must dispatch an action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsync Saga must be done"
  );

  assert.end();
});
