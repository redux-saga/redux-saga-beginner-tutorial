import { VERIFY_XPUB_SUCCESS, VERIFY_XPUB_FAIL } from "./types";

export function verifyXpubSuccess(data) {
  return {
    type: VERIFY_XPUB_SUCCESS,
    payload: {
      xpubVerified: true,
      xpubDetails: data
    }
  };
}

export function verifyXpubFail() {
  return {
    type: VERIFY_XPUB_FAIL,
    payload: {
      xpubVerified: false
    }
  };
}
