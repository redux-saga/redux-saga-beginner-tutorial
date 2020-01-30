import { put, takeEvery, takeLatest, call, all } from "redux-saga/effects";
import axios from "axios";

import {
  createService,
  sendEmailService,
  emailService,
  smsService,
  xpubService
} from "./services/bittr_api";

export function* helloSaga() {
  console.log("Hello saga");
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync({ payload }) {
  // yield delay(1000);
  // request mobile verification
  // request email verification
  yield call(delay, 1000);
  yield put({ type: "INCREMENT", payload });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* createUserService() {
  const result = yield call(createService, {
    phone: "123123123",
    country_code: "32",
    verification_code: "1111", // a 4-digit verification code,
    email: "hello@getbittr.com",
    bitcoin_address:
      "KYWLHTXHOEWWBVUVQZF1T4PXYK6VJT8JGAFGTHCA23SVWQN00I51QJGM1XDIZMB5",
    initial_address_type: "simple"
  });
  if (!result || !result.data) {
    yield put({ type: "CREATE_USER_FAILED" });
  } else {
    yield put({
      type: "CREATE_USER_SUCCESS",
      payload: { userDetails: result.data }
    });
  }
}

export function* watchCreateUserService() {
  yield takeEvery("CREATE_USER_REQUEST", createUserService);
}

export function* verifySendEmailService(args) {
  const result = yield call(sendEmailService, {
    email: "hemanth.vja@gmail.com"
  });
  console.log("Email result", result);
  if (!result) {
    yield put({
      type: "EMAIL_SENT_FAILED",
      payload: { emailSent: false }
    });
  } else {
    yield put({
      type: "EMAIL_SENT_SUCCESS",
      payload: { emailSent: true, emailSentDetails: result.data }
    });
  }
}

export function* verifyEmailService(args) {
  const result = yield call(emailService, {
    token: "WGRYTYEHDPUTRDDWCTGFGUIAIQZLGWGTE5Y4KYVGR9REGB9UQHNVCNPV3MMNDLDM"
  });
  console.log("Email token result", result);
  if (!result) {
    yield put({
      type: "EMAIL_VERIFY_FAILED",
      payload: { emailVerified: false }
    });
  } else {
    yield put({
      type: "EMAIL_VERIFY_SUCCESS",
      payload: { emailVerified: true, emailVerifiedDetails: result.data }
    });
  }
}

export function* verifySmsService(args) {
  const result = yield call(smsService, {
    phone: 7466165312,
    country_code: 44
  });
  console.log("SMS result", result);
  if (!result) {
    yield put({
      type: "SMS_VERIFY_FAILED",
      payload: { smsSent: false }
    });
  } else {
    yield put({
      type: "SMS_VERIFY_SUCCESS",
      payload: { smsSent: true, smsSentDetails: result.data }
    });
  }
}

export function* watchVerificationServices() {
  yield takeLatest("VERIFY_SEND_EMAIL", verifySendEmailService);
  yield takeLatest("VERIFY_EMAIL", verifyEmailService);
  yield takeLatest("VERIFY_SMS", verifySmsService);
}

export function* verifyXpubService() {
  const result = yield call(xpubService, {
    xpub_key:
      "xpub6CojA7MuQ3TRPEkV6PRR6pzCqNBmNEKRG4gNmapeayeuwJxXYxCGz65DPVDfnXwHurpsbGgr9Noac4bY81XY3T42jKU1vcnVmQBr6LNgnXZ",
    xpub_path: "m/0/x"
  });
  console.log("XPUB RESULT", result);
  if (!result) {
    yield put({
      type: "VERIFY_XPUB_FAILED",
      payload: {
        xpubVerified: false
      }
    });
  } else {
    yield put({
      type: "VERIFY_XPUB_SUCCESS",
      payload: {
        xpubVerified: true,
        xpubDetails: result.data
      }
    });
  }
}

export function* watchXpubService() {
  yield takeEvery("VERIFY_XPUB", verifyXpubService);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchCreateUserService(),
    watchVerificationServices(),
    watchXpubService()
  ]);
}
