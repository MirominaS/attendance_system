import React ,{ useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { serverConnector } from '../serverConnector/serverConnector';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const validateForm = () => {
    if (!username.trim()) {
      setErrorMessage('Username is required.');
      return false;
    }
    if (!password.trim()) {
      setErrorMessage('Password is required.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return false;
    }
    if (!role) {
      setErrorMessage('Please select a role.');
      return false;
    }
    setErrorMessage(''); 
    return true;
  };


  const handleRegister = (e) =>{
    e.preventDefault();

    if (validateForm()) {
      serverConnector({
        url :'auth/register',
        payload : {username,password,roles:[role]},
      }).then(res => {
        toast(res.data,{icon: '✅'})
        navigate('/')
        }
      ).catch(err =>
        toast(err || 'Registration Failed!',{icon: '❌'})
      )  
    }
  } 
  return (
    <div className="reg-container">
    <form className="reg-form" onSubmit={handleRegister}>
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="mb-4">
          <label className="block mb-2">
            <select
              value={role}
              onChange={handleRoleChange}
              className="mr-2"
              required
            >
              <option value="">Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </label>
        </div>
     <Button label="Register" onClick={handleRegister}/>
     
      
    </form>
  </div>
  )
}

export default Register;