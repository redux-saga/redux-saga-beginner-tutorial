export enum operationTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC",
}

export type OperationsActions =
  | { type: operationTypes.DECREMENT }
  | { type: operationTypes.INCREMENT }
  | { type: operationTypes.INCREMENT_ASYNC };
