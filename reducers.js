const INITIAL_STATE = {
  state: 0,
  userDetails: null,
  emailSent: null,
  emailVerified: null,
  emailSentDetails: null,
  emailVerifiedDetails: null,
  smsSent: null,
  smsSentDetails: null,
  xpubVerified: null,
  xpubDetails: null
};

export default function counter(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        state: payload.state + 1
      };
    case "INCREMENT_IF_ODD":
      return {
        ...state,
        state: payload.state % 2 !== 0 ? payload.state + 1 : payload.state
      };
    case "DECREMENT":
      return { ...state, state: payload.state - 1 };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        userDetails: payload.userDetails
      };
    case "CREATE_USER_FAILED":
      return {
        ...state,
        userDetails: ""
      };
    case "EMAIL_SENT_SUCCESS":
      return {
        ...state,
        emailSent: payload.emailSent,
        emailSentDetails: payload.emailSentDetails
      };
    case "EMAIL_SENT_FAILED":
      return { ...state, emailSent: false };
    case "EMAIL_VERIFY_SUCCESS":
      return {
        ...state,
        emailVerifiedDetails: payload.emailVerifiedDetails,
        emailVerified: payload.emailVerified
      };
    case "EMAIL_VERIFY_FAILED":
      return { ...state, emailVerified: payload.emailVerified };
    case "SMS_VERIFY_SUCCESS":
      return {
        ...state,
        smsSent: payload.smsSent,
        smsSentDetails: payload.smsSentDetails
      };
    case "SMS_VERIFY_FAILED":
      return { ...state, smsSent: payload.smsSent };
    case "VERIFY_XPUB_SUCCESS":
      return {
        ...state,
        xpubVerified: payload.xpubVerified,
        xpubDetails: payload.xpubDetails
      };
    case "VERIFY_XPUB_FAILED":
      return {
        ...state,
        xpubVerified: payload.xpubVerified
      };
    default:
      return state;
  }
}
