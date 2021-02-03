require('dotenv').config();

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_accountSid;
const authToken = process.env.TWILIO_authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Joey',
     from: '+14422569424',
     to: '+201060845005'
   })
  .then(message => console.log(message));
