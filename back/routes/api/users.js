// routes/api/users.js

const express = require('express');
const router = express.Router();

// Load Patient model
const User = require('../../models/User');

// @route GET api/patient/test
// @description tests books route
// @access Public
router.get('/usertest', (req, res) => res.send('user route testing!'));

// @route GET api/patients
// @description Get all patients
// @access Public
router.get('/', (req, res) => {
const { email, password } = req.query;

try {
  User.findOne(
    {
      email: email,
      password: password,
    },
    function (error, user) {
      if (user) {
        // User found
        res.json({ userfound: 'User found!' });
      } else {
        // No user found
        res.status(404).json({ nouserfound: 'No user found' });
      }
    }
  );
  } catch (error) {
    // Handle errors here
    res.status(500).json({ message: 'Server error' });
  }
});

// @route GET api/patients/:id
// @description Get single patient by id
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nousersfound: 'No User found' }));
}); 

// @route GET api/patients
// @description add/save patient
// @access Public
router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

// @route GET api/patients/:id
// @description Update patient
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/patients/:id
// @description Delete patient by id
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'Patient entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a patient' }));
});



module.exports = router;