import { all, takeLatest, put, call, spawn, fork } from "redux-saga/effects";
import * as types from "../actions/types";

import { watchCreateUserSaga, createUserSaga } from "./create_user";
import { watchSendEmailSaga, sendEmailSaga } from "./send_email";
import { watchVerifyEmailSaga, verifyEmailSaga } from "./verify_email";
import { watchSendSmsSaga, sendSmsSaga } from "./send_sms";
import { watchVerifyXpubSaga, verifyXpubSaga } from "./verify_xpub";
import {
  watchIncrementAsyncSaga,
  incrementAsyncSaga,
  incrementSaga,
  decrementSaga
} from "./increment_async";

function* helloSaga() {
  console.log("Hello saga");
}

/* export default function* rootSaga() {
  const sagas = [
    helloSaga(),
    watchCreateUserSaga,
    watchSendEmailSaga,
    watchVerifyEmailSaga,
    watchSendSmsSaga,
    watchVerifyXpubSaga,
    watchIncrementAsyncSaga
  ];
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
} */

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
