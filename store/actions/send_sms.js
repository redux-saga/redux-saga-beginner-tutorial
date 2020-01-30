import { SEND_SMS_SUCCESS, SEND_SMS_FAIL } from "./types";

export function sendSmsSuccess(data) {
  return {
    type: SEND_SMS_SUCCESS,
    payload: { smsSent: true, smsSentDetails: data }
  };
}

export function sendSmsFail() {
  return { type: SEND_SMS_FAIL, payload: { smsSent: false } };
}
