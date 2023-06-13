import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

const dispatch = type => store.dispatch({ type })


sagaMiddleware.run(watchIncrementAsync)

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
