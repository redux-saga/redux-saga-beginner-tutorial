import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"
import { put, take, takeEvery } from 'redux-saga/effects'  

import Counter from './Counter'
import reducer from './reducers'
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from "./sagas"

const sagaMiddleware = createSagaMiddleware()
=======
import {helloWorld} from './hello'

const sagaMiddlewar = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddlewar))
sagaMiddlewar.run(helloWorld);
>>>>>>> 4a4ef2b314dddf5113de7e1fd3bf4f52ad498355

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

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
<<<<<<< HEAD
      onIncrement={() => dispatch('INCREMENT')}
      onDecrement={() => dispatch('DECREMENT')}
      onIncrementAsync={() => dispatch('INCREMENT_ASYNC')}
    />,
=======
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} 
    />,
      
>>>>>>> 4a4ef2b314dddf5113de7e1fd3bf4f52ad498355
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
