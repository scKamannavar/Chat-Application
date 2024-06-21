const requestMail = require("../../utils/MailService");
const { forgotPasswordTemplate } = require("./mailTemplate");

exports.forgotPasswordSendOtp = async (to, userName, otp) => {
  try {
    const res = await requestMail.mailService(
      to,
      "lakshmi_developers - Reset Password",
      forgotPasswordTemplate(userName, otp)
    );
    console.log("Mail Response -- ", res);

    return true;
  } catch (error) {
    console.error("Mail Error -- ", error);
  }
  return false;
};
