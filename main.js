import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from "redux-saga"
import { put, take, takeEvery } from 'redux-saga/effects'  

import Counter from './Counter'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from "./sagas"

const sagaMiddleware = createSagaMiddleware()
import {helloWorld} from './hello'

const sagaMiddlewar = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddlewar))
sagaMiddlewar.run(helloWorld);


const dispatch = type => store.dispatch({ type })

sagaMiddleware.run(watchIncrementAsync)

const delay = (ms)=>{ new Promise(res=> setTimeout(res,ms))}

// incrementAsync task to perform
export function* incrementAsync(){
  yield delay(1000);
  yield put({type: 'INCREMENT'})
}


// Watcher
INCREMENT_ASYNC
export function* watchIncrementAsync(){
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => dispatch('INCREMENT')}
      onDecrement={() => dispatch('DECREMENT')}
      onIncrementAsync={() => dispatch('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
