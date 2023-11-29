const dotenv = require('dotenv')
dotenv.config();
const { SamplePage } = require('twilio/lib/rest/autopilot/v1/assistant/task/sample');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

var reciever = '+16048720127'

client.messages
  .create({
     body: buildMessage('Jaiten','rx','1 dose'),
     //sendAt: new Date(Date.UTC(2023, 1, 28, 0, 0, 0, 0)),
     //scheduleType: 'fixed',
     from: '+18582957155',
     to: reciever
   })
  .then(message => console.log(message.sid));

  function buildMessage(name, perscription, dosage){
    var msg = 'Hello ' + name + ", it's time to take " + dosage + ' of ' + perscription
    console.log(msg);
    return msg;
}

function npmStart(){
  mydate = new Date()
  hours = '' + mydate.prototype.getHours();
  minuites = '' + mydate.getMinuites();
  //mytime = 



}

//run a function every 5 seconds (in ms)
 //setInterval(npmStart,5000);
 
