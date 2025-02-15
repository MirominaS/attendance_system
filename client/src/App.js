import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';

function App() {

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
