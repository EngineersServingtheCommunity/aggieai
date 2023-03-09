import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  return (
    <div>
      <p>Login page</p>
      <button onClick={()=>navigate('../classes')}>Go to Classes page</button>
    </div>
    
  );
}

export default Login;