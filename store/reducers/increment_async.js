import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from "../actions/types";

const INITIAL_STATE = {
  state: 0
};

const incrementAsync = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        state: payload.state + 1
      };
    case INCREMENT_IF_ODD:
      return {
        ...state,
        state: payload.state % 2 !== 0 ? payload.state + 1 : payload.state
      };
    case DECREMENT:
      return { ...state, state: payload.state - 1 };
    default:
      return state;
  }
};

export default incrementAsync;
