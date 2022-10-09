import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
     <form className="loginForm">
        <label>Email</label>
        <input type="text" className='loginInput' placeholder='Email pochtangizni kiriteng...' />
        <label>Password</label>
        <input type="password" className='loginInput'/>
        <button className="loginButton">Login</button>
     </form>
     <button className="loginRegisterButton">
        <Link to="/register" className="link">REGISTER</Link>
        </button>
    </div>
  )
}

export default Login
