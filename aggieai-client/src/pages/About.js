import { useNavigate } from "react-router-dom";
import React from 'react'

function About() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <p>About page</p>
      <button onClick={()=>navigate('../classes')}>Go to Classes page</button>
    </div>
    
  );
}

export default About;
