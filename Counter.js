/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          IncrementAsync
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
