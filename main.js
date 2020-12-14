import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./sagas"

import Counter from './Counter'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
