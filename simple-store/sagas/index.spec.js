import test from "tape";

import { put, call } from "redux-saga/effects";
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
  createService,
  sendEmailService,
  verifyEmailService,
  smsService,
  xpubService
} from "../../services/bittr_api";

test("incrementAsyncSaga test case", assert => {
  const payload = { state: 0 };
  const gen = incrementAsyncSaga({ payload });

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsyncSaga must call a delay(1000)"
  );

  assert.deepEqual(
    gen.next({ payload }).value,
    put({ type: "INCREMENT", payload }),
    "incrementAsyncSaga must dispatch an INCREMENT action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsyncSaga must be done"
  );

  assert.end();
});

test("createUser test case", assert => {
  const iterator = createUserSaga();
  const payload = {
    userDetails: {}
  };

  assert.deepEqual(
    iterator.next().value,
    call(createService, {
      phone: "7466165312",
      country_code: "44",
      verification_code: "4935", // a 4-digit verification code,
      email: "hemanth.vja@gmail.com",
      bitcoin_address:
        "AC8O0OCGMPMHMTSG28STQZ9HCCXC6VQ7OZGVW4LV4BYTBYINC4IOLZJGFIULNXLF",
      initial_address_type: "simple"
    }),
    "createService should yield an Effect call(createService, {})"
  );

  assert.deepEqual(
    iterator.next(payload).value,
    put({ type: "CREATE_USER_FAIL" }),
    "createService should yield an Effect put()"
  );

  assert.deepEqual(
    iterator.next(),
    { done: true, value: undefined },
    "Iterator done"
  );

  assert.end();
});

test("sendEmail test case", assert => {
  const gen = sendEmailSaga();
  const result = {
    success: true
  };
  assert.deepEqual(
    gen.next().value,
    call(sendEmailService, { email: "hemanth.vja@gmail.com" }),
    "sendEmailService should yied an Effect call(sendEmailService, {})"
  );
  /*
  assert.deepEqual(
    gen.next(result).value,
    put({
      type: "SEND_EMAIL_SUCCESS",
      payload: { emailSent: true, emailSentDetails: undefined }
    }),
    "sendEmailService should yield an success message"
  );
*/
  assert.deepEqual(
    gen.next().value,
    put({
      type: "SEND_EMAIL_FAIL",
      payload: { emailSent: false }
    }),
    "sendEmailService should yield a failed message"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "Iterator done"
  );
  assert.end();
});

test("verifyEmail test case", assert => {
  const gen = verifyEmailSaga();
  const result = {
    success: true
  };
  assert.deepEqual(
    gen.next().value,
    call(verifyEmailService, {
      token: "WGRYTYEHDPUTRDDWCTGFGUIAIQZLGWGTE5Y4KYVGR9REGB9UQHNVCNPV3MMNDLDM"
    }),
    "verifyEmailService should yied an Effect call(emailService, {token})"
  );

  assert.deepEqual(
    gen.next(result).value,
    put({
      type: "VERIFY_EMAIL_SUCCESS",
      payload: { emailVerified: true, emailVerifiedDetails: undefined }
    }),
    "verifyEmailService should yield an success message"
  );
  /*
  assert.deepEqual(
    gen.next().value,
    put({
      type: "VERIFY_EMAIL_FAIL",
      payload: { emailVerified: false }
    }),
    "verifyEmailService should yield a failed message"
  );
*/
  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "Iterator done"
  );
  assert.end();
});

test("sendSms test case", assert => {
  const gen = sendSmsSaga();
  const result = {
    uuid: "b80698a0-c11d-0137-d628-0e1884c6f6fe",
    success: true,
    seconds_to_expire: 599,
    message: "Text message sent to +31 61-231-2312.",
    is_cellphone: true,
    carrier: "KPN BV"
  };
  assert.deepEqual(
    gen.next().value,
    call(smsService, {
      phone: 7466165312,
      country_code: 44
    }),
    "verifySmsService should yied an Effect call(smsService, {})"
  );

  assert.deepEqual(
    gen.next(result).value,
    put({
      type: "SEND_SMS_SUCCESS",
      payload: { smsSent: true, smsSentDetails: result.data }
    }),
    "verifySmsService should yield an success message"
  );
  /*
  assert.deepEqual(
    gen.next().value,
    put({
      type: "SEND_SMS_FAIL",
      payload: { smsSent: false }
    }),
    "verifySmsService should yield a failed message"
  );
*/
  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "Iterator done"
  );
  assert.end();
});

test("xPub test case", assert => {
  const gen = verifyXpubSaga();
  const result = {
    success: true,
    first_addresses: [
      {
        path: "m/0/0",
        index: 0,
        address: "3G59Jxqf4KBa5NMdbYtCY6rHVEA7AV42NV"
      },
      {
        path: "m/0/1",
        index: 1,
        address: "34Nx7TPXLthB7VxXArdofT9qvVhDa2PRdo"
      },
      {
        path: "m/0/2",
        index: 2,
        address: "3MtPXLxUGokE5kreU4zgqiuS8sUGAgmYVM"
      }
    ]
  };
  assert.deepEqual(
    gen.next().value,
    call(xpubService, {
      xpub_key:
        "xpub6CojA7MuQ3TRPEkV6PRR6pzCqNBmNEKRG4gNmapeayeuwJxXYxCGz65DPVDfnXwHurpsbGgr9Noac4bY81XY3T42jKU1vcnVmQBr6LNgnXZ",
      xpub_path: "m/0/x"
    }),
    "verifyXpubService should yied an Effect call(xpubService, {})"
  );

  assert.deepEqual(
    gen.next(result).value,
    put({
      type: "VERIFY_XPUB_SUCCESS",
      payload: {
        xpubVerified: true,
        xpubDetails: result.data
      }
    }),
    "verifyXpubService should yield an success message"
  );
  /*
  assert.deepEqual(
    gen.next().value,
    put({
      type: "VERIFY_XPUB_FAIL",
      payload: {
        xpubVerified: false
      }
    }),
    "verifyXpubService should yield a failed message"
  );
*/
  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "Iterator done"
  );
  assert.end();
});
