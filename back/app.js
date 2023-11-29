const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//twilio
const { SamplePage } = require('twilio/lib/rest/autopilot/v1/assistant/task/sample');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);



// routes
const patients = require('./routes/api/patients');
const users = require('./routes/api/users');
const app = express();

// Connect Database
connectDB();
const Patient = require('./models/Patient');
const User = require('./models/User');
//can add methods like Patient.find() with mongoose to query
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/patients', patients);
app.use('/api/users', users)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));


function sendMessage(name, prescription, receiver) {
   /* client.messages
  .create({
     body: "Hello " + name + ", it's time to take your " + prescription,
     from: '+12344374945',
     to: "+1" + receiver
   })
  .then(message => console.log(message.sid)); */
}

async function sendMessages() {
    const date = new Date();
    const hour = date.getHours();

    try {
        const foundPatients = await Patient.find({ medTimes: { $in: [hour] } }).exec();
        foundPatients.forEach(patient => {
            // send a message to the right patients
            sendMessage(patient.name, patient.medication, patient.number);
            console.log(`Hello ${patient.name}, it is time to take your ${patient.medication}.`);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}


function npmStart(){
    // call the function every hour
    sendMessages()
    setInterval(sendMessages, 1000 * 60 * 60);
}

npmStart();