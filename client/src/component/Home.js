import React from 'react'
import Button from './Button';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-message">Welcome to the Application!</h1>
        <Button label="Logout" onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default Home;