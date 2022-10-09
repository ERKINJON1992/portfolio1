import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
           <span className="registerTitle">Register</span>
     <form className="registerForm">
     <label>Username</label>
        <input type="text" className='registerInput' placeholder='Ismingiz kiriteng...' />
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Email pochtangizni kiriteng...' />
        <label>Password</label>
        <input type="password" className='registerInput'/>
        <button className="registerButton">Login</button>
     </form>
     <button className="registerLoginButton">
        <Link to="/login" className="link">LOGIN</Link>
     </button>
    </div>
    
  )
}

export default Register
