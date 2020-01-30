import { combineReducers } from "redux";

import createUser from "./create_user";
import sendEmail from "./send_email";
import sendSms from "./send_sms";
import verifyEmail from "./verify_email";
import verifyXpub from "./verify_xpub";
import incrementAsync from "./increment_async";

export default combineReducers({
  createUser,
  sendEmail,
  sendSms,
  verifyEmail,
  verifyXpub,
  incrementAsync
});
