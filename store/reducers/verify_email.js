import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  emailVerified: null,
  emailVerifiedDetails: null
};

const verifyEmail = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        emailVerifiedDetails: payload.emailVerifiedDetails,
        emailVerified: payload.emailVerified,
        emailVerifyRequest: false
      };
    case VERIFY_EMAIL_FAIL:
      return {
        ...state,
        emailVerified: payload.emailVerified,
        emailVerifyRequest: false
      };
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        emailVerifyRequest: true
      };
    default:
      return state;
  }
};

export default verifyEmail;
