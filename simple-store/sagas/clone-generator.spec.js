import test from "tape";
import { put, call } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

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
  const gen = cloneableGenerator(createUserSaga)();
  const result = {
    userDetails: {}
  };
  const inputData = {
    phone: "7466165312",
    country_code: "44",
    verification_code: "4935", // a 4-digit verification code,
    email: "hemanth.vja@gmail.com",
    bitcoin_address:
      "AC8O0OCGMPMHMTSG28STQZ9HCCXC6VQ7OZGVW4LV4BYTBYINC4IOLZJGFIULNXLF",
    initial_address_type: "simple"
  };

  assert.test("if user details are not created", a => {
    const clone = gen.clone();
    clone.next();

    a.deepEqual(
      clone.next(result).value,
      put(createUserFail()),
      "shouldn't update the store"
    );

    a.equal(clone.next().done, true, "it should be done");

    a.end();
  });

  assert.test("if user details are successfully created", a => {
    const clone = gen.clone();

    a.deepEqual(
      clone.next().value,
      call(createService, inputData),
      "createService should yield an Effect call(createService, {})"
    );

    a.deepEqual(
      clone.next(result).value,
      put(createUserSuccess(result)),
      "should update the store successfully"
    );

    a.equal(clone.next().done, true, "it should be done");

    a.end();
  });
});

test("sendEmail test case", assert => {
  const gen = cloneableGenerator(sendEmailSaga)();
  const result = {
    success: true
  };

  assert.test("if email sent successfully", a => {
    const clone = gen.clone();

    a.deepEqual(
      clone.next().value,
      call(sendEmailService, { email: "hemanth.vja@gmail.com" }),
      "sendEmailService should yied an Effect call(sendEmailService, {})"
    );

    a.deepEqual(
      clone.next(result).value,
      put(sendEmailSuccess()),
      "should update the store"
    );

    a.equal(clone.next().done, true, "it should be done");

    a.end();
  });

  assert.test("if email sent failed", a => {
    const clone = gen.clone();

    clone.next();

    a.deepEqual(
      clone.next().value,
      put(sendEmailFail()),
      "need not update the store"
    );

    a.equal(clone.next().done, true, "it should be done");

    a.end();
  });
});

test("verifyEmail test case", assert => {
  const gen = cloneableGenerator(verifyEmailSaga)();
  const result = {
    success: true
  };

  assert.test("if email verified correctly", a => {
    const clone = gen.clone();
    a.deepEqual(
      clone.next().value,
      call(verifyEmailService, {
        token:
          "WGRYTYEHDPUTRDDWCTGFGUIAIQZLGWGTE5Y4KYVGR9REGB9UQHNVCNPV3MMNDLDM"
      }),
      "verifyEmailService should yied an Effect call(emailService, {token})"
    );

    a.deepEqual(
      clone.next(result).value,
      put(verifyEmailSuccess()),
      "verifyEmailService should yield an success message"
    );
    a.deepEqual(
      clone.next(),
      { done: true, value: undefined },
      "Iterator done"
    );
    a.end();
  });

  assert.test("if email verified incorrectly", a => {
    const clone = gen.clone();
    clone.next();
    a.deepEqual(
      clone.next().value,
      put(verifyEmailFail()),
      "verifyEmailService should yield a fail message"
    );
    a.deepEqual(
      clone.next(),
      { done: true, value: undefined },
      "Iterator done"
    );
    a.end();
  });
});

test("sendSms test case", assert => {
  const gen = cloneableGenerator(sendSmsSaga)();
  const result = {
    uuid: "b80698a0-c11d-0137-d628-0e1884c6f6fe",
    success: true,
    seconds_to_expire: 599,
    message: "Text message sent to +31 61-231-2312.",
    is_cellphone: true,
    carrier: "KPN BV"
  };

  assert.test("if sms sent successfully", a => {
    const clone = gen.clone();
    a.deepEqual(
      clone.next().value,
      call(smsService, {
        phone: 7466165312,
        country_code: 44
      }),
      "verifySmsService should yied an Effect call(smsService, {})"
    );

    a.deepEqual(
      clone.next(result).value,
      put(sendSmsSuccess()),
      "verifySmsService should yield an success message"
    );
    a.deepEqual(
      clone.next(),
      { done: true, value: undefined },
      "Iterator done"
    );
    a.end();
  });

  assert.test("if sms sent fail", a => {
    const clone = gen.clone();
    clone.next();

    a.deepEqual(
      clone.next().value,
      put(sendSmsFail()),
      "verifySmsService should yield a failure message"
    );
    a.deepEqual(
      clone.next(),
      { done: true, value: undefined },
      "Iterator done"
    );
    a.end();
  });
});

test("xPub test case", assert => {
  const gen = cloneableGenerator(verifyXpubSaga)();
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

  assert.test("xpub verified successfully", a => {
    const clone = gen.clone();
    a.deepEqual(
      clone.next().value,
      call(xpubService, {
        xpub_key:
          "xpub6CojA7MuQ3TRPEkV6PRR6pzCqNBmNEKRG4gNmapeayeuwJxXYxCGz65DPVDfnXwHurpsbGgr9Noac4bY81XY3T42jKU1vcnVmQBr6LNgnXZ",
        xpub_path: "m/0/x"
      }),
      "verifyXpubService should yied an Effect call(xpubService, {})"
    );

    a.deepEqual(
      clone.next(result).value,
      put(verifyXpubSuccess()),
      "verifyXpubService should yield an success message"
    );
    a.equal(clone.next().done, true, "Iterator done");
    a.end();
  });

  assert.test("xpub verification failed", a => {
    const clone = gen.clone();
    clone.next();
    a.deepEqual(
      clone.next().value,
      put(verifyXpubFail()),
      "verifyXpubService should yield a fail message"
    );
    a.deepEqual(
      clone.next(),
      { value: undefined, done: true },
      "Iterator done"
    );
    a.end();
  });
});
