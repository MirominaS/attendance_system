import React,{useState} from 'react'
import Button from './Button';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { serverConnector } from '../serverConnector/serverConnector';
import toast from 'react-hot-toast';


const Home = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');
  const handleLogout = (e) =>{
    let token = localStorage.getItem('authToken')
    serverConnector({
      url :'auth/logout',
      payload : {},
      headers: { 'Authorization' : `Bearer ${token}`}
    }).then(res => {
      toast(res.data,{icon: '✅'})
      localStorage.removeItem('authToken')
      navigate('/')
      }
    ).catch(err =>
      toast('Logout failed!',{icon: '❌'})
    ) 
    
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