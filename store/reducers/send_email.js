import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  emailSent: null,
  emailSentDetails: null
};

const sendEmail = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        emailSent: payload.emailSent,
        emailSentDetails: payload.emailSentDetails,
        sendEmailRequest: false
      };
    case SEND_EMAIL_FAIL:
      return { ...state, emailSent: false, sendEmailRequest: false };
    case SEND_EMAIL_REQUEST:
      return {
        ...state,
        sendEmailRequest: true
      };
    default:
      return state;
  }
};

export default sendEmail;
