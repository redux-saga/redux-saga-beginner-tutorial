/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    {/*console.log("value", value)*/}
    <div>
      Clicked: {value.incrementAsync && value.incrementAsync.state} times
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

export default Counter;
