import {
  SEND_SMS_REQUEST,
  SEND_SMS_SUCCESS,
  SEND_SMS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  smsSent: null,
  smsSentDetails: null
};

const sendSms = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case SEND_SMS_SUCCESS:
      return {
        ...state,
        smsSent: payload.smsSent,
        smsSentDetails: payload.smsSentDetails,
        sendSmsRequest: false
      };
    case SEND_SMS_FAIL:
      return { ...state, smsSent: payload.smsSent, sendSmsRequest: false };
    case SEND_SMS_REQUEST:
      return {
        ...state,
        sendSmsRequest: true
      };
    default:
      return state;
  }
};

export default sendSms;
