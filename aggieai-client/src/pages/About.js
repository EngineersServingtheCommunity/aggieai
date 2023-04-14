import { useNavigate } from "react-router-dom";
import React from 'react'
import NavBar from "../components/Navbar.js";

function About() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <p>About page</p>
      <button onClick={()=>navigate('../classes')}>Go to Classes page</button>
    </div>
    
  );
}

export default About;
