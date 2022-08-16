const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config({ path: "./.env" })
console.log(process.env.TWILIO_ACCOUNT_SID);
console.log(process.env.TWILIO_AUTH_TOKEN);
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sendSms', (req, res) => {
  const fromNumber = process.env.TWILIO_PHONE_NUNBER;
  console.log(fromNumber);
  const toPhoneNumber = req.body.phoneNumber;
  console.log(toPhoneNumber);
  client.messages
  .create({
     body: 'Hi MF',
     from: fromNumber ,
     to: "+" + toPhoneNumber
   })
  .then(message => console.log(message.sid));


});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
