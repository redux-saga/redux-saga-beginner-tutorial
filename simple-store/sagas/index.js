import { all, takeLatest, put, call } from "redux-saga/effects";
import * as types from "../actions/types";

import {
  incrementAsync,
  increment,
  decrement,
  createUserSuccess,
  createUserFail,
  sendEmailSuccess,
  sendEmailFail,
  sendSmsSuccess,
  sendSmsFail,
  verifyEmailSuccess,
  verifyEmailFail,
  verifyXpubSuccess,
  verifyXpubFail
} from "../actions";
import {
  createService,
  sendEmailService,
  smsService,
  verifyEmailService,
  xpubService
} from "../../services/bittr_api";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsyncSaga({ payload }) {
  // yield delay(1000);
  yield call(delay, 1000);
  yield put(incrementAsync(payload));
}

export function* incrementSaga() {
  yield put(increment());
}

export function* decrementSaga() {
  yield put(decrement());
}

export function* createUserSaga() {
  const result = yield call(createService, {
    phone: "7466165312",
    country_code: "44",
    verification_code: "4935", // a 4-digit verification code,
    email: "hemanth.vja@gmail.com",
    bitcoin_address:
      "AC8O0OCGMPMHMTSG28STQZ9HCCXC6VQ7OZGVW4LV4BYTBYINC4IOLZJGFIULNXLF",
    initial_address_type: "simple"
  });
  if (!result || !result.data) {
    yield put(createUserFail());
  } else {
    yield put(createUserSuccess(result.data));
  }
}

export function* sendEmailSaga(args) {
  const result = yield call(sendEmailService, {
    email: "hemanth.vja@gmail.com"
  });
  console.log("Email result", result);
  if (!result) {
    yield put(sendEmailFail());
  } else {
    yield put(sendEmailSuccess(result.data));
  }
}

export function* sendSmsSaga(args) {
  const result = yield call(smsService, {
    phone: 7466165312,
    country_code: 44
  });
  console.log("SMS result", result);
  if (!result) {
    yield put(sendSmsFail());
  } else {
    yield put(sendSmsSuccess(result.data));
  }
}

export function* verifyEmailSaga(args) {
  const result = yield call(verifyEmailService, {
    token: "WGRYTYEHDPUTRDDWCTGFGUIAIQZLGWGTE5Y4KYVGR9REGB9UQHNVCNPV3MMNDLDM"
  });
  console.log("Email token result", result);
  if (!result) {
    yield put(verifyEmailFail());
  } else {
    yield put(verifyEmailSuccess(result.data));
  }
}

export function* verifyXpubSaga() {
  const result = yield call(xpubService, {
    xpub_key:
      "xpub6CojA7MuQ3TRPEkV6PRR6pzCqNBmNEKRG4gNmapeayeuwJxXYxCGz65DPVDfnXwHurpsbGgr9Noac4bY81XY3T42jKU1vcnVmQBr6LNgnXZ",
    xpub_path: "m/0/x"
  });
  console.log("XPUB RESULT", result);
  if (!result) {
    yield put(verifyXpubFail());
  } else {
    yield put(verifyXpubSuccess(result.data));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.CREATE_USER_REQUEST, createUserSaga),
    takeLatest(types.SEND_EMAIL_REQUEST, sendEmailSaga),
    takeLatest(types.VERIFY_EMAIL_REQUEST, verifyEmailSaga),
    takeLatest(types.SEND_SMS_REQUEST, sendSmsSaga),
    takeLatest(types.VERIFY_XPUB_REQUEST, verifyXpubSaga),
    takeLatest(types.INCREMENT_ASYNC, incrementAsyncSaga),
    takeLatest(types.INCREMENT, incrementSaga),
    takeLatest(types.DECREMENT, decrementSaga)
  ]);
}
