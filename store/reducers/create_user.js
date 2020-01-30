import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  userDetails: null
};

const createUser = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        userDetails: payload.userDetails,
        createUserRequest: false
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        userDetails: "",
        createUserRequest: false
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        createUserRequest: true
      };
    default:
      return state;
  }
};

export default createUser;
