import test from "tape";
import SagaTester from "redux-saga-tester";

import reducer from "../reducers";
import * as types from "../actions/types";
import {
  helloSaga,
  incrementAsyncSaga,
  delay,
  createUserSaga,
  sendEmailSaga,
  verifyEmailSaga,
  sendSmsSaga,
  verifyXpubSaga
} from "../sagas";
import {
  createUserSuccess,
  createUserFail,
  sendSmsSuccess,
  sendSmsFail,
  sendEmailSuccess,
  sendEmailFail,
  verifyEmailSuccess,
  verifyEmailFail,
  verifyXpubSuccess,
  verifyXpubFail
} from "../actions";

const initialState = {
  state: 0,
  userDetails: null,
  emailSent: null,
  emailSentDetails: null,
  smsSent: null,
  smsSentDetails: null,
  emailVerified: null,
  emailVerifiedDetails: null,
  xpubVerified: null,
  xpubDetails: null,
  xpubVerifyRequest: null
};

const sagaTester = new SagaTester({
  initialState: initialState,
  reducers: reducer
});

test("test case for createUserSaga. . .", async assert => {
  // resets the sagaTester store
  sagaTester.reset(true);

  sagaTester.start(createUserSaga);

  sagaTester.dispatch(createUserFail());
  assert.true(
    sagaTester.wasCalled(types.CREATE_USER_FAIL),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      userDetails: "",
      createUserRequest: false
    },
    "if user creation fails"
  );

  sagaTester.dispatch(createUserSuccess());
  assert.true(
    sagaTester.wasCalled(types.CREATE_USER_SUCCESS),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      userDetails: undefined,
      createUserRequest: false
    },
    "if user created successfully"
  );

  assert.end();
});

test("test cases for sendEmailSaga. . .", async assert => {
  sagaTester.reset(true);
  sagaTester.start(sendEmailSaga);

  sagaTester.dispatch(sendEmailFail());
  assert.true(
    sagaTester.wasCalled(types.SEND_EMAIL_FAIL),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      emailSent: false,
      sendEmailRequest: false
    },
    "if sending email fails"
  );

  sagaTester.dispatch(sendEmailSuccess());
  assert.true(
    sagaTester.wasCalled(types.SEND_EMAIL_SUCCESS),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      sendEmailRequest: false,
      emailSent: true,
      emailSentDetails: undefined
    },
    "if email sent successfully"
  );

  assert.end();
});

test("test cases for verifyEmailSaga. . .", async assert => {
  sagaTester.reset(true);
  sagaTester.start(verifyEmailSaga);

  sagaTester.dispatch(verifyEmailFail());
  assert.true(
    sagaTester.wasCalled(types.VERIFY_EMAIL_FAIL),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      emailVerified: false,
      emailVerifiedDetails: null,
      emailVerifyRequest: false
    },
    "if email verification fails"
  );

  sagaTester.dispatch(verifyEmailSuccess());
  assert.true(
    sagaTester.wasCalled(types.VERIFY_EMAIL_SUCCESS),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      emailVerified: true,
      emailVerifiedDetails: undefined,
      emailVerifyRequest: false
    },
    "if email verified successfully"
  );

  assert.end();
});

test("test cases for sendSmsSaga. . .", async assert => {
  sagaTester.reset(true);
  sagaTester.start(sendSmsSaga);

  sagaTester.dispatch(sendSmsFail());
  assert.true(
    sagaTester.wasCalled(types.SEND_SMS_FAIL),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      smsSent: false,
      sendSmsRequest: false
    },
    "if sending sms fails"
  );

  sagaTester.dispatch(sendSmsSuccess());
  assert.true(
    sagaTester.wasCalled(types.SEND_SMS_SUCCESS),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      smsSent: true,
      smsSentDetails: undefined,
      sendSmsRequest: false
    },
    "if sms sent successfully"
  );

  assert.end();
});

test("test cases for verifyXpubSaga. . .", async assert => {
  sagaTester.reset(true);
  sagaTester.start(verifyXpubSaga);

  sagaTester.dispatch(verifyXpubFail());
  assert.true(
    sagaTester.wasCalled(types.VERIFY_XPUB_FAIL),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      xpubVerified: false,
      xpubVerifyRequest: false
    },
    "if xpub verification fails"
  );

  sagaTester.dispatch(verifyXpubSuccess());
  assert.true(
    sagaTester.wasCalled(types.VERIFY_XPUB_SUCCESS),
    "Checks whether actionType called or not"
  );
  assert.deepEqual(
    sagaTester.getState(),
    {
      ...initialState,
      xpubVerified: true,
      xpubDetails: undefined,
      xpubVerifyRequest: false
    },
    "if xpub verified successfully"
  );

  assert.end();
});
