import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [incorrectLogin, setIncorrectLogin] = useState('');

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //console.log('OUTSIDE');
    e.preventDefault();
    // add fields here before posting to database (i.e convert into list of times, index, key  etc)
    //converttimes(patient.times);
    axios.get('http://localhost:8082/api/users', {params: user}).then((res) => {
        console.log(res);
        setUser({
          email: '',
          password: '',
        });

        // Push to /
        navigate('/product');
      })
      .catch((err) => {
        // instead of navigate to redirect we can add a state that when this happens, we display incorrect email or password
        setUser({
          email: '',
          password: '',
        });
        setIncorrectLogin('Incorrect password or email')
        //navigate('/');
      });
  };

  return (
    <div className='CreatePatient'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Back to Product Website
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Sign in to RxRemind</h1>
            <p className='lead text-center'>Please fill in all details: </p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' Email:'
                  name='email'
                  className='form-control'
                  value={user.email}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='password'
                  name='password'
                  className='form-control'
                  value={user.password}
                  onChange={onChange}
                />
              </div>
              <h6> {incorrectLogin} </h6>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;