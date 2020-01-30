import { INCREMENT, DECREMENT } from "./types";

export function incrementAsync(data) {
  return {
    type: INCREMENT,
    payload: data
  };
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
