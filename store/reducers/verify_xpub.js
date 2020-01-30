import {
  VERIFY_XPUB_REQUEST,
  VERIFY_XPUB_SUCCESS,
  VERIFY_XPUB_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  xpubVerified: null,
  xpubDetails: null,
  xpubVerifyRequest: null
};

const verifyXpub = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case VERIFY_XPUB_SUCCESS:
      return {
        ...state,
        xpubVerified: payload.xpubVerified,
        xpubDetails: payload.xpubDetails,
        xpubVerifyRequest: false
      };
    case VERIFY_XPUB_FAIL:
      return {
        ...state,
        xpubVerified: payload.xpubVerified,
        xpubVerifyRequest: false
      };
    case VERIFY_XPUB_REQUEST:
      return {
        ...state,
        xpubVerifyRequest: true
      };
    default:
      return state;
  }
};

export default verifyXpub;
