require('dotenv').config();

// Create verification service first.
// following the tutorial https://www.twilio.com/docs/verify/api?code-sample=code-step-1-create-a-verification-service&code-language=Node.js&code-sdk-version=3.x
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
             .verifications
             .create({to: '+201060845005', channel: 'sms'})
             .then(verification => console.log(verification.status));
