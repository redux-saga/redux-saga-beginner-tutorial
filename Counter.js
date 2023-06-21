import React from 'react'
import { PropTypes } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
<<<<<<< HEAD
      Increment after 2 second
    </button>
    <button style={{ color: "blue" }} onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button style={{ color: "red" }} onClick={onDecrement}>
=======
      Increment after 1 second
    </button>
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
>>>>>>> 4a4ef2b314dddf5113de7e1fd3bf4f52ad498355
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
