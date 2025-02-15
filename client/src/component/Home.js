import React,{useState} from 'react'
import Button from './Button';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');

  const handleLogout = (e) =>{
    e.preventDefault(); 
    setSuccess('Logout successful! Redirecting to Login...');
    setTimeout(() => {
        
        navigate('/');
      }, 500);  
    
  } 
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-message">Welcome to the Application!</h1>
        {success && <p className="success-message">{success}</p>}
        <Button label="Logout" onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default Home;