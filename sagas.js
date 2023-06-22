import { put, take, takeEvery, takeLatest, call, fork } from 'redux-saga/effects'


const sumofnumbers = () => {
  setTimeout(() => {
    const sum = 154 + 15451
    console.log({ sum })
    console.log("our this blog has ")
    return sum
  }, 2000);

}

function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('API request failed:', error);
      throw error;
    });
}


const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function incrementAsync1() {
  console.log("this is my first block")
}


// worker
export function* incrementAsync() {
  yield delay(3000)
  yield put({ type: 'INCREMENT' })
}


function myFunction() {
  console.log(this.name + this.lname);
  return this.name + " " + this.lname
}

const myContext = {
  name: "John",
  lname: "singh"
};

const descriptor = { fn: myFunction, context: myContext };


// watcher
export function* watchIncrementAsync() {

  while (true) {
    yield take('INCREMENT_ASYNC')

    const data = yield call(fetchData, "https://jsonplaceholder.typicode.com/todos?_limit=10")
    console.log(data)
    yield call(sumofnumbers)
    yield call(incrementAsync)
    const result = yield call(descriptor)
    console.log("result: ", result)
    console.log("this is new function")
  }
}