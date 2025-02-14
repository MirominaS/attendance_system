import React from 'react'
import Button from './Button';
import './Home.css'

const Home = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-message">Welcome to the Application!</h1>
        <Button label="Logout"/>
      </div>
    </div>
  )
}

export default Home;