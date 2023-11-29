// models/Patient.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  medication: {
    type: String,
    required: true
  },
  times: {
    type: Number
  },
  number: {
    type: String
  }, 
  medTimes: {
    type: [Number],
    default: []
  }
});

module.exports = Patient = mongoose.model('patient', patientSchema);