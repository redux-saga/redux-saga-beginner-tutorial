import React from 'react'
import { PropTypes } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 2 second
    </button>
    <button style={{ color: "blue" }} onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button style={{ color: "red" }} onClick={onDecrement}>
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
  onDecrement: PropTypes.func.isRequired
}

export default Counter
