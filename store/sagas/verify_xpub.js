import { put, takeLatest, call } from "redux-saga/effects";

import { verifyXpubSuccess, verifyXpubFail } from "../actions/verify_xpub";
import { xpubService } from "../../services/bittr_api";

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

export default function* watchVerifyXpubSaga() {
  yield takeLatest("VERIFY_XPUB", verifyXpubSaga);
}
