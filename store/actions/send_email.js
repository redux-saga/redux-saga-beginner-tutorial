import { SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL } from "./types";

export function sendEmailSuccess(data) {
  return {
    type: SEND_EMAIL_SUCCESS,
    payload: { emailSent: true, emailSentDetails: data }
  };
}

export function sendEmailFail() {
  return { type: SEND_EMAIL_FAIL, payload: { emailSent: false } };
}
