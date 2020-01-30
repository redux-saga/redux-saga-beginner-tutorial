import { put, takeLatest, call } from "redux-saga/effects";

import { createUserSuccess, createUserFail } from "../actions/create_user";
import { createService } from "../../services/bittr_api";

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

export default function* watchCreateUserSaga() {
  yield takeLatest("CREATE_USER_REQUEST", createUserSaga);
}
