import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
    
  
    
   
    </div>
  );
}

export default App;
