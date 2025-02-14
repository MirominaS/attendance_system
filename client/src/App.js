import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
    {/* <p>hellp</p> */}
    {/* <Button label="Click Me" onClick={handleClick} /> */}
    <Home/>
    {/* <Register/> */}
    {/* <Login/> */}
    </div>
  );
}

export default App;
