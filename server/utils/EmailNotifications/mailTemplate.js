exports.forgotPasswordTemplate = (user, otp) => `<html>
    <head>
      <title>Page Title</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500"
        rel="stylesheet"
      />
      <style>
        table,
        td,
        div,
        h1,
        p {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0">
      <table
        style="
          width: 100%;
          border-collapse: collapse;
          border: 0;
          border-spacing: 0;
          background: #ffffff;
        "
      >
        <tr>
          <td align="center" style="padding: 0">
            <table style="width: 800px; border: 1px solid #e6e6e6">
              <tr>
                <td style="background: #24a377">
                  <table>
                    <tr>
                      <td style="color: #ffffff; padding: 5px">
                        <h1
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 18px;
                            margin: 0px;
                          "
                        >
                          Reset Password
                        </h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background: #ffffff">
                  <table style="padding: 16px">
                    <tr>
                      <td style="font-size: 14px">
                        <p><b>Hello ${user},</b></p>
                        <p>
                          We have received a request to reset your lakshmi_developers
                          account password. For security purposes, you must enter
                          the code below to verify your account to reset your
                          password.
                        </p>
                        <p>Account verification code: <b>${otp}</b></p>
                        <p>
                          The code will only work for 15 minutes and if you
                          request a new code, this code will stop working.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 5px 16px 16px 16px">
                  **This is an auto generated system email – please do not reply**
                </td>
              </tr>
  
              <tr>
                <td style="padding: 0px 16px; background: #f8f8f8">
                  <table
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      border: 0;
                      border-spacing: 0;
                      font-size: 9px;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <tr>
                      <td style="padding: 0; width: 75%" align="right">
                        <p
                          style="
                            margin: 0;
                            font-size: 14px;
                            line-height: 16px;
                            font-family: Arial, sans-serif;
                            color: #24a377;
                          "
                        >
                          Copyrights &#169; 2022 Strides, All Rights Reserved
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
