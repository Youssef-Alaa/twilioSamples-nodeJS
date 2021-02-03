require('dotenv').config();

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks
      .create({to: '+201060845005', code: '119839'})
      .then(verification_check => console.log(verification_check));
