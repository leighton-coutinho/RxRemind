import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Welcome() {
  
  return (
    <div className='Welcome'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>RxRemind</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-patient'
              className='btn btn-outline-warning float-right'
            >
              + Try it out!
            </Link>
            <Link
              to='/login'
              className='btn btn-outline-warning float-right'
            >
              Logout
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <h3 className='display-4 text-center'>Welcome to RxRemind, the presciption reminder application!</h3>

      </div>
    </div>
  );
}

export default Welcome;