import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar.js'

function Login() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <p>Login page</p>
      <button onClick={()=>navigate('../classes')}>Go to Classes page</button>
    </div>
    
  );
}

export default Login;