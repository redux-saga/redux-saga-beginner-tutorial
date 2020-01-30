import { put, takeLatest, call } from "redux-saga/effects";

import { sendSmsSuccess, sendSmsFail } from "../actions/send_sms";
import { smsService } from "../../services/bittr_api";

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

export default function* watchSendSmsSaga() {
  yield takeLatest("SEND_SMS", sendSmsSaga);
}
