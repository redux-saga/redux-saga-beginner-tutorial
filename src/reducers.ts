import { operationTypes, OperationsActions } from "./operationTypes";

export default function counter(state: number = 0, action: OperationsActions) {
  switch (action.type) {
    case operationTypes.INCREMENT:
      return state + 1;
    // from original sample project, not needed here..
    // // case operationTypes.INCREMENT_IF_ODD:
    // //  return state % 2 !== 0 ? state + 1 : state;
    case operationTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
