import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "./types";

export function createUserSuccess(data) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: { userDetails: data }
  };
}

export function createUserFail() {
  return { type: CREATE_USER_FAIL };
}
