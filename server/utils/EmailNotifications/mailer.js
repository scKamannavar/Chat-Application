const AWS = require('aws-sdk');
const config = require('config');
const { SESConfig } = require('../../constants/mailConfig');

const url = config.get('URL');

exports.sendMail = (to, subject, body) => {
  // Create sendTemplatedEmail params
  const params = {
    Destination: {
      /* required */
      ToAddresses: [
        to
        /* more To email addresses */
      ]
    },
    Source: url.supportEmail /* required */,
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: `${body}`
        },
        Text: {
          Charset: 'UTF-8',
          Data: ''
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    ReplyToAddresses: [url.supportEmail]
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES(SESConfig).sendEmail(params).promise();
  return sendPromise;
};
