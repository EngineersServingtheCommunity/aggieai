import React from "react";
import { useNavigate } from "react-router-dom";
import './Classes.css';
import Navbar from '../components/Navbar.js'

function Classes() {
    const navigate = useNavigate();


    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <p>
                Here are the classes
            </p>




            <button onClick={()=>navigate('../about')}>Go to about page</button>

        </div>
            
    );
}

export default Classes;
