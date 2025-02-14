import React from 'react'
import Button from './Button';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
       <Button label="Login"/>
       <div className="register-link">
          <Link to="/">Don't have an account? Register here.</Link>
        </div>
        
      </form>
    </div>
  )
}

export default Login;