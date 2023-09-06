import React from 'react'
import { rightvector, vector } from '../../../assests/icon'
import './username.css';
export default function Username() {
  return (
    <div className='container'>
        <div>
        <a href="/"><img src={vector}/></a>
        <h2 className='my-5 text-primary'>Login with username</h2>
        </div>
        <form>
  <div className="form-group">
    <label className='my-3 font-weight-bold'>Username</label>
    <input
      type="text"
      className="form-control input my-2"
      placeholder="Enter username"
      required
    />
  </div>
  <div className="form-group my-2">
    <label htmlFor="exampleInputPassword1" className='my-3 font-weight-bold'>Password</label>
    <input
      type="password "
      className="form-control input"
      id="exampleInputPassword1"
      placeholder="Password"
      required
    />
  </div>
</form>
<div className='third my-3 d-flex justify-content-between'>
              <span>Forgot Paasword?</span>
              <a href className='text-danger text-decoration-none'>Reset now</a>
            </div>
            <div className='btn btn-primary text-bright continue'>
           <a href='/card' ><h5 className='btn text-bright' type="submit">Continue <img src={rightvector} className="image"/></h5></a>
        </div>
    </div>
   
  )
}
