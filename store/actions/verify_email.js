import { VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAIL } from "./types";

export function verifyEmailSuccess(data) {
  return {
    type: VERIFY_EMAIL_SUCCESS,
    payload: { emailVerified: true, emailVerifiedDetails: data }
  };
}

export function verifyEmailFail() {
  return { type: VERIFY_EMAIL_FAIL, payload: { emailVerified: false } };
}
