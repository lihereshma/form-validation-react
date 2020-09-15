import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { LoginBox } from './Components/LoginBox';
import { RegisterBox } from './Components/RegisterBox';

function App() {
  const [loginOpen, setLoginOpen] = useState(true)
  const [registerOpen, setRegisterOpen] = useState(false)

  const showLoginBox = () => {
    setLoginOpen(true)
    setRegisterOpen(false)
  }

  const showRegisterBox = () => {
    setLoginOpen(false)
    setRegisterOpen(true)
  }

  return (
    <div className="App">
      <div className="container" >
        <ul className="box-controller col-lg-4 col-md-6">
          <li 
            className={ `controller ${ loginOpen && "selected-controller" }` } 
            onClick={ showLoginBox }>
            Login
          </li>
          <li 
            className={ `controller ${ registerOpen && "selected-controller" }` } 
            onClick={ showRegisterBox }>
            Register
          </li>
        </ul>

        <div className="box-container col-lg-4 col-md-6" >
          { loginOpen && <LoginBox /> }
          { registerOpen && <RegisterBox /> }
        </div>
      </div>
    </div>
  );
}

export default App;
