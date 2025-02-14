import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
  return (
    <div className="reg-container">
    <form className="reg-form">
      <h2>Register</h2>
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
      <h2 className="text-xl font-bold mb-4">Select Roles</h2>
       <div className="mb-4">
        <label className="block mb-2">
          <input
            type="checkbox"
            value="USER"
            className="mr-2"
          />
          User
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            value="ADMIN"
            className="mr-2"
          />
          Admin
        </label>
      </div>
     <Button label="Register"/>
     <div className="login-link">
        <Link to="/">Already have an account? Login.</Link>
      </div>
      
    </form>
  </div>
  )
}

export default Register;