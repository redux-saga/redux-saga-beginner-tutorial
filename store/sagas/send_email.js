import { put, takeLatest, call } from "redux-saga/effects";

import { sendEmailSuccess, sendEmailFail } from "../actions/send_email";
import { sendEmailService } from "../../services/bittr_api";

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

export default function* watchSendEmailSaga() {
  yield takeLatest("VERIFY_SEND_EMAIL", sendEmailSaga);
}
