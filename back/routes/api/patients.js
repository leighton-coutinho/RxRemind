// routes/api/patient.js

const express = require('express');
const router = express.Router();

// Load Patient model
const Patient = require('../../models/Patient');
const User = require('../../models/User');
// @route GET api/patient/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('patient route testing!'));

// @route GET api/patients
// @description Get all patients
// @access Public
router.get('/', (req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(404).json({ nopatientsfound: 'No Patients found' }));
});

// @route GET api/patients/:id
// @description Get single patient by id
// @access Public
router.get('/:id', (req, res) => {
  Patient.findById(req.params.id)
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient found' }));
});

// @route GET api/patients
// @description add/save patient
// @access Public
router.post('/', (req, res) => {
  Patient.create(req.body)
    .then(patient => res.json({ msg: 'Patient added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this patient' }));
});

// @route GET api/patients/:id
// @description Update patient
// @access Public
router.put('/:id', (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, req.body)
    .then(patient => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/patients/:id
// @description Delete patient by id
// @access Public
router.delete('/:id', (req, res) => {
  Patient.findByIdAndRemove(req.params.id, req.body)
    .then(patient => res.json({ mgs: 'Patient entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a patient' }));
});


module.exports = router;