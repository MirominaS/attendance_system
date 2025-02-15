import React, { useState } from 'react'
import Button from './Button';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error,setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () =>{
      if (!username.trim() || !password.trim()) {
        setError('Username and Password are required.');
        return false;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return false;
      }
      setError('');
      return true;
    }
    const handleLogin = (e) => {
      e.preventDefault();
      if (validateForm()) {
        const loginPromise = new Promise((resolve,reject) => {axios.post('http://localhost:8080/auth/login', {
          username,
          password
        })
        .then(function (response) {
          localStorage.setItem('authToken',response.data)
          resolve('Login successful!');
          navigate('/home'); 
        })
        .catch(function (error) {
          reject(error.response.data);
        });})
        toast.promise(loginPromise, {
          loading: 'Logging in...',
          success: loginPromise.then(res=>{return res}),
          error: loginPromise.catch(err=>{return err}),
        })
      }
    };
 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
       <Button label="Login" onClick={handleLogin}/>
       <div className="register-link">
          <Link to="/register">Don't have an account? Register here.</Link>
        </div>
        
      </form>
    </div>
  )
}

export default Login;