import watchCreateUserService from "./create_user";

export default function* rootSaga() {
  yield all([watchCreateUserService()]);
}
