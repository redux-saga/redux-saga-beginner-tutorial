import React, { Component, PropTypes } from "react";

const Register = ({
  value,
  createUser,
  verifySentEmail,
  verifyEmail,
  verifySms,
  verifyXpub
}) => (
  <div>
    <button onClick={createUser}>Register with Bittr</button>
    {console.log("Store value: ", value)}
    User Details:{" "}
    {(value.userDetails && value.userDetails.success.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifySentEmail}>Send email</button>
    Email sent: {(value.emailSent && value.emailSent.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifyEmail}>Verify email</button>
    Email verified:{" "}
    {(value.emailVerified && value.emailVerified.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifySms}>Verify Mobile</button>
    Sms sent: {(value.smsSent && value.smsSent.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifyXpub}>Verify Xpub</button>
    Xpub verified:{" "}
    {(value.xpubVerified && value.xpubVerified.toString()) || "-"}
    {/*
    <button onClick={createUser}>Register with Bittr</button>
    {console.log("Store value: ", value)}
    User Details:{" "}
    {(value.createUser.userDetails &&
      value.createUser.userDetails.success.toString()) ||
      "-"}
    <br />
    <br />
    <button onClick={verifySentEmail}>Send email</button>
    Email sent:{" "}
    {(value.sendEmail.emailSent && value.sendEmail.emailSent.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifyEmail}>Verify email</button>
    Email verified:{" "}
    {(value.verifyEmail.emailVerified &&
      value.verifyEmail.emailVerified.toString()) ||
      "-"}
    <br />
    <br />
    <button onClick={verifySms}>Verify Mobile</button>
    Sms sent:{" "}
    {(value.sendSms.smsSent && value.sendSms.smsSent.toString()) || "-"}
    <br />
    <br />
    <button onClick={verifyXpub}>Verify Xpub</button>
    Xpub verified:{" "}
    {(value.verifyXpub.xpubVerified &&
      value.verifyXpub.xpubVerified.toString()) ||
      "-"}
      */}
  </div>
);

Register.propTypes = {
  value: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  verifyEmail: PropTypes.func.isRequired,
  verifySentEmail: PropTypes.func.isRequired,
  verifySms: PropTypes.func.isRequired,
  verifyXpub: PropTypes.func.isRequired
};

export default Register;
