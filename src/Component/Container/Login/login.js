import React from 'react'
import './login.css'
import { loginlogo } from '../../../assests/icon'
export default function Login() {
  return (
    <div className='container'>
    
    <div className='upper'>
        <div className='inner'>
            <div className='logo my-5'>
             <img src={loginlogo} alt="" />
            </div>
          <div className='first my-3'>
          <h2 className='my-0'>Get Started</h2>
          <span>Login with username or mobile number</span>
          </div>
          <div className='second my-3'>
            <a href="/username" className='btn btn-primary '>Login with username</a>
            <a href="" className='btn text-primary lower-button my-2'>Login with mobile number</a>
          </div>
          <div className='third my-3 d-flex justify-content-between'>
              <span>Here for the first time</span>
              <a className='text-danger text-decoration-none'>Create an account</a>
            </div>
        </div>
    </div>
    </div>
  )
}
