import { createUserSuccess, createUserFailed } from "../actions/create_user";

import { createService } from "../../services/bittr_api";

function* createUserService() {
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
    yield put(createUserFailed());
  } else {
    yield put(createUserSuccess(result.data));
  }
}

export function* watchCreateUserService() {
  yield takeEvery("CREATE_USER_REQUEST", createUserService);
}
