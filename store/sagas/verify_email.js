import { put, takeLatest, call } from "redux-saga/effects";

import { verifyEmailSuccess, verifyEmailFail } from "../actions/verify_email";
import { verifyEmailService } from "../../services/bittr_api";

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

export default function* watchVerifyEmailSaga() {
  yield takeLatest("VERIFY_EMAIL", verifyEmailSaga);
}
